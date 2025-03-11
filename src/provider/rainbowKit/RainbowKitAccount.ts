import { registry, TxTypes } from "@carbon-sdk/codec";
import { CarbonEvmChainIDs, EVMChain, getChangeNetworkParams, Network, RequestArguments, SyncResult } from "@carbon-sdk/constant";
import { AddressUtils, AminoTypesMap, AuthUtils, CarbonSDK, CarbonTx, EvmUtils, Models } from "@carbon-sdk/index";
import { SWTHAddressOptions } from "@carbon-sdk/util/address";
import { BlockchainV2, getBlockchainFromChainV2 } from "@carbon-sdk/util/blockchain";
import { constructEIP712Tx } from "@carbon-sdk/util/eip712";
import { ETH_SECP256K1_TYPE, parseChainId, populateEvmTransactionDetails } from "@carbon-sdk/util/ethermint";
import { DEFAULT_PUBLIC_KEY_MESSAGE } from "@carbon-sdk/util/evm";
import { appendHexPrefix } from "@carbon-sdk/util/generic";
import { legacyConstructEIP712Tx } from "@carbon-sdk/util/legacyEIP712";
import { carbonNetworkFromChainId } from "@carbon-sdk/util/network";
import { signTransactionWrapper } from "@carbon-sdk/util/provider";
import { CarbonSigner, CarbonSignerTypes } from "@carbon-sdk/wallet";
import { AminoMsg, makeSignDoc } from "@cosmjs/amino";
import { Algo, EncodeObject, makeSignDoc as makeProtoSignDoc, TxBodyEncodeObject } from "@cosmjs/proto-signing";
import { StdFee } from "@cosmjs/stargate";
import { DirectSignResponse } from "@keplr-wallet/types";
import { AuthInfo, TxBody } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { ethers } from "ethers";
import { CARBON_EVM_DEVNET, CARBON_EVM_LOCALHOST, CARBON_EVM_MAINNET, CARBON_EVM_TESTNET, ChangeNetworkParam } from "../../constant";
import { Eip6963Provider } from "../eip6963Provider";
import { parseEvmError } from "../metamask/error";


interface RainbowkitAPI {
  chainId: string | null;
  request: (args: RequestArguments) => Promise<unknown>;
  on: (eventName: string, listener: (...args: unknown[]) => void) => any;
}

class RainbowKitAccount extends Eip6963Provider {
  private provider: unknown
  private blockchain: EVMChain = 'Ethereum';

  static createRainbowKitSigner(rainbowKit: RainbowKitAccount, evmChainId: string, pubKeyBase64: string, addressOptions: SWTHAddressOptions): CarbonSigner {
    const evmHexAddress = AddressUtils.ETHAddress.publicKeyToAddress(Buffer.from(pubKeyBase64, "base64"), addressOptions)

    const signDirect = async (_: string, doc: Models.Tx.SignDoc): Promise<DirectSignResponse> => {
      const txBody = TxBody.decode(doc.bodyBytes)
      const authInfo = AuthInfo.decode(doc.authInfoBytes)
      const msgs: EncodeObject[] = txBody.messages.map(message => {
        const msg = registry.decode({ ...message })
        return {
          typeUrl: message.typeUrl,
          value: msg,
        }
      })
      const fee: StdFee = {
        amount: authInfo.fee?.amount ?? [],
        gas: authInfo.fee?.gasLimit.toString() ?? "0",
      }
      const aminoMsgs = msgs.map(msg => AminoTypesMap.toAmino(msg))
      const { sig, signedDoc } = await rainbowKit.signEip712(
        evmHexAddress,
        doc.accountNumber.toString(),
        evmChainId,
        aminoMsgs,
        fee,
        txBody.memo,
        authInfo.signerInfos[0].sequence.toString())
      const signedTxBody = {
        messages: msgs,
        memo: signedDoc.memo,
      };
      const signedTxBodyEncodeObject: TxBodyEncodeObject = {
        typeUrl: "/cosmos.tx.v1beta1.TxBody",
        value: signedTxBody,
      };
      const signedTxBodyBytes = registry.encode(signedTxBodyEncodeObject);
      const signDoc = makeProtoSignDoc(signedTxBodyBytes, doc.authInfoBytes, signedDoc.chain_id, parseInt(signedDoc.account_number));
      const sigBz = Uint8Array.from(Buffer.from(sig, 'hex'))

      return {
        signed: signDoc,
        signature: {
          pub_key: {
            type: ETH_SECP256K1_TYPE,
            value: pubKeyBase64,
          },
          // Remove recovery `v` from signature
          signature: Buffer.from(sigBz.slice(0, -1)).toString('base64'),
        },
      }
    };

    const signAmino = async (_: string, doc: CarbonTx.StdSignDoc) => {
      const { account_number, msgs, fee, memo, sequence } = doc
      const { sig, signedDoc } = await rainbowKit.signEip712(
        evmHexAddress,
        account_number,
        evmChainId,
        msgs,
        fee,
        memo,
        sequence)
      const sigBz = Uint8Array.from(Buffer.from(sig, 'hex'))

      return {
        signed: signedDoc,
        signature: {
          pub_key: {
            type: ETH_SECP256K1_TYPE,
            value: pubKeyBase64,
          },
          // Remove recovery `v` from signature
          signature: Buffer.from(sigBz.slice(0, -1)).toString('base64'),
        },
      }
    }

    const signLegacyEip712 = async (signerAddress: string, doc: CarbonTx.StdSignDoc) => {
      const { account_number, chain_id, msgs, fee, memo, sequence } = doc

      // Only MsgMergeAccount will have an Eth address signer, other generic transaction will be cosmos address signer
      // FeePayer here is only used for legacy EIP-712
      const feePayer = AminoTypesMap.fromAmino(msgs[0]).typeUrl === TxTypes.MsgMergeAccount ? AddressUtils.ETHAddress.publicKeyToBech32Address(Buffer.from(pubKeyBase64, "base64"), addressOptions) : signerAddress

      const { sig, signedDoc } = await rainbowKit.signEip712(
        evmHexAddress,
        account_number,
        chain_id,
        msgs,
        fee,
        memo,
        sequence,
        feePayer)
      return {
        signed: signedDoc,
        signature: {
          pub_key: {
            type: ETH_SECP256K1_TYPE,
            value: pubKeyBase64,
          },
          signature: Buffer.from(sig, 'hex').toString('base64'),
        },
        feePayer,
      }
    };

    const getAccounts = async () => {
      const address = await rainbowKit.defaultAccount()
      return [
        {
          // Possible to change to "ethsecp256k1" ?
          algo: "secp256k1" as Algo,
          address,
          pubkey: Uint8Array.from(Buffer.from(pubKeyBase64, 'base64')),
        },
      ]
    }

    const sendEvmTransaction = async (api: CarbonSDK, req: ethers.providers.TransactionRequest): Promise<string> => {
      try {
        const request = await populateEvmTransactionDetails(api, req)
        const response = await rainbowKit!.sendEvmTransaction(request)
        return response
      }
      catch (error) {
        console.error(error)
        throw (parseEvmError(error as Error))
      }
    }

    const signMessage = async (address: string, message: string) => {
      return rainbowKit.personalSign(address, message)
    }

    return {
      type: CarbonSignerTypes.BrowserInjected,
      legacyEip712SignMode: rainbowKit.legacyEip712SignMode,
      signDirect,
      signAmino,
      getAccounts,
      signLegacyEip712,
      sendEvmTransaction,
      signMessage,
    }
  }

  constructor(provider: unknown, public readonly legacyEip712SignMode: boolean = false) {
    super()
    this.provider = provider
  }

  private getApi(): RainbowkitAPI {
    return this.provider as RainbowkitAPI
  }

  async defaultAccount() {
    const rainbowKitAPI = this.getApi();
    const accounts = (await rainbowKitAPI.request({ method: "eth_requestAccounts" })) as string[];
    const [defaultAccount] = accounts;

    if (!defaultAccount) {
      throw new Error("No default account, please create one first");
    }
    return defaultAccount;
  }

  async syncBlockchain(): Promise<SyncResult> {
    const rainbowKitApi = this.getApi()
    const chainIdHex = (await rainbowKitApi?.request({ method: "eth_chainId" })) as string;
    const chainId = chainIdHex ? parseInt(chainIdHex, 16) : undefined;
    const blockchain = getBlockchainFromChainV2(chainId) as EVMChain;
    this.blockchain = blockchain!;

    return { chainId, blockchain };
  }

  static getRequiredChainId(network: Network, blockchain: BlockchainV2 = 'Ethereum') {
    if (blockchain === "Carbon") {
      return Number(parseChainId(CarbonEvmChainIDs[network]))
    }
    const isMainnet = network === Network.MainNet
    switch (blockchain) {
      case 'Binance Smart Chain':
        return isMainnet ? 56 : 97;
      case 'Mantle':
        return isMainnet ? 5000 : 5003;
      case 'Arbitrum':
        return isMainnet ? 42161 : 421611;
      case 'Polygon':
        return isMainnet ? 137 : 80001;
      case 'OKC':
        return isMainnet ? 66 : 65;
      case 'Optimism':
        return isMainnet ? 10 : 11155420;
      case 'Avalanche':
        return isMainnet ? 43114 : 43113;
      case 'Base':
        return isMainnet ? 8453 : 84532;
      default:
        // Fallback to Ethereum chain ID
        return isMainnet ? 1 : 5;
    }
  }

  static getCarbonEvmNetworkParams(network: Network): ChangeNetworkParam {
    switch (network) {
      case Network.LocalHost:
        return CARBON_EVM_LOCALHOST;
      case Network.DevNet:
        return CARBON_EVM_DEVNET;
      case Network.TestNet:
        return CARBON_EVM_TESTNET;
      default:
        return CARBON_EVM_MAINNET;
    }
  }

  static async getNetworkParams(network: Network, blockchain: EVMChain = 'Ethereum'): Promise<ChangeNetworkParam> {
    if (blockchain === 'Carbon') {
      return RainbowKitAccount.getCarbonEvmNetworkParams(network)
    }

    const chainId = this.getRequiredChainId(network, blockchain)
    return await getChangeNetworkParams(chainId)
  }

  async isChangeNetworkRequired(blockchain: EVMChain, network: CarbonSDK.Network): Promise<boolean> {
    const rainbowKitNetwork = await this.syncBlockchain()
    const requiredChainId = RainbowKitAccount.getRequiredChainId(network, blockchain)
    return rainbowKitNetwork.chainId !== requiredChainId
  }

  async changeNetworkIfRequired(blockchain: EVMChain, network: CarbonSDK.Network) {
    const required = await this.isChangeNetworkRequired(blockchain, network);
    if (!required) return;

    const rainbowKitApi = this.getApi();
    const requiredChainId = `0x${RainbowKitAccount.getRequiredChainId(network, blockchain).toString(16)}`
    try {
      await rainbowKitApi.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: requiredChainId }] });
      await this.syncBlockchain();
    } catch (err) {
      // This error code indicates that the chain has not been added.
      try {
        const networkParams = await RainbowKitAccount.getNetworkParams(network, blockchain)
        await rainbowKitApi.request({
          method: 'wallet_addEthereumChain',
          params: [networkParams],
        });
        await this.syncBlockchain();
      } catch (err) {
        throw new Error(`Please switch to ${blockchain} network on the wallet.`);
      }
    }
  }

  async verifyNetworkAndConnectedAccount(evmHexAddress: string, evmChainId: string) {
    await this.verifyNetwork(evmChainId);
    await this.verifyConnectedAccount(evmHexAddress);
  }

  async verifyConnectedAccount(address: string) {
    const rainbowKitApi = this.getApi();
    const accounts = (await rainbowKitApi.request({ method: "eth_requestAccounts" })) as string[];
    if (!accounts.find(acc => acc.toLowerCase() === address?.toLowerCase()))
      throw new Error(`${address} not connected`);
  }

  async verifyNetwork(evmChainId: string) {
    const network = carbonNetworkFromChainId(evmChainId);
    await this.changeNetworkIfRequired("Carbon", network);
  }

  static async signAndRecoverPubKey(provider: RainbowKitAccount, enableJwtAuth?: boolean) {
    const address = await provider.defaultAccount()
    const message = enableJwtAuth ? AuthUtils.getAuthMessage() : DEFAULT_PUBLIC_KEY_MESSAGE;
    const signature = await provider.personalSign(address, message)
    const publicKeyHex = EvmUtils.recoverPublicKey(message, signature)

    return {
      publicKey: Buffer.from(publicKeyHex, 'hex').toString('base64'),
      signature,
      message,
    };
  }

  async getPublicKey(address: string, message: string): Promise<string> {
    const signedMessage = await this.personalSign(address, message)
    const uncompressedPublicKey = ethers.utils.recoverPublicKey(ethers.utils.hashMessage(message), signedMessage)
    return ethers.utils.computePublicKey(uncompressedPublicKey, true).split('0x')[1]
  }

  async signEip712(evmHexAddress: string, accountNumber: string, evmChainId: string, msgs: readonly AminoMsg[], fee: StdFee, memo: string, sequence: string, feePayer: string = ''): Promise<{ sig: string, signedDoc: CarbonTx.StdSignDoc }> {
    const { chainId } = await this.syncBlockchain()
    const walletChainId = chainId ? `carbon_${chainId.toString()}-1` : ''
    const api = this.getApi()
    if (walletChainId !== evmChainId) {
      memo += "|CROSSCHAIN-SIGNING|signed-chain-id:" + walletChainId + ";" + "carbon-chain-id:" + evmChainId
    }
    const stdSignDoc = makeSignDoc(msgs, fee, evmChainId, memo, accountNumber, sequence)
    const eip712Tx = this.legacyEip712SignMode ? legacyConstructEIP712Tx({ ...stdSignDoc, fee: { ...fee, feePayer } }) : constructEIP712Tx(stdSignDoc, walletChainId)
    const sig = await signTransactionWrapper(async () => {
      const signature = (await api.request({
        method: 'eth_signTypedData_v4',
        params: [
          evmHexAddress,
          JSON.stringify(eip712Tx),
        ],
      })) as string
      return signature.split('0x')[1]
    })
    return { sig, signedDoc: stdSignDoc }
  }

  async personalSign(address: string, message: string): Promise<string> {
    const api = this.getApi();
    const ethAddress = ethers.utils.getAddress(address);
    return (await api.request({
      method: "personal_sign",
      params: [appendHexPrefix(Buffer.from(message, "utf-8").toString("hex")), ethAddress],
    })) as string;
  }

  async sendEvmTransaction(req: ethers.providers.TransactionRequest) {
    await this.verifyNetworkAndConnectedAccount(req.from!, req.chainId!.toString())
    const ethereum = this.getApi();
    const tx = {
      from: req.from,
      to: req.to,
      value: req.value,
      gasPrice: req.gasPrice,
      gas: req.gasLimit,
      data: req.data,
      // type can only be 0 or 1 or 2
      type: `0x${req.type}`,
      chainId: req.chainId,
    }
    const txHash = (await ethereum.request({
      method: "eth_sendTransaction",
      params: [tx],
    })) as string
    return txHash
  }
}

export default RainbowKitAccount;