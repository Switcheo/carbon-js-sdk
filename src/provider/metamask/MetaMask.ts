import { registry, TxTypes } from "@carbon-sdk/codec";
import { AuthInfo } from "@carbon-sdk/codec/cosmos/tx/v1beta1/tx";
import { CarbonEvmChainIDs, EthNetworkConfig, Network, NetworkConfigs, RequestArguments, SyncResult } from "@carbon-sdk/constant";
import { ABIs } from "@carbon-sdk/eth";
import { AminoTypesMap, AuthUtils, CarbonSDK, EvmUtils, ProviderAgent, SupportedEip6963Provider } from "@carbon-sdk/index";
import { AddressUtils, CarbonTx } from "@carbon-sdk/util";
import { ETHAddress, SWTHAddress, SWTHAddressOptions } from "@carbon-sdk/util/address";
import { BlockchainV2, BLOCKCHAIN_V2_TO_V1_MAPPING, ChainNames, EVMChain, getBlockchainFromChainV2 } from "@carbon-sdk/util/blockchain";
import { constructEIP712Tx } from "@carbon-sdk/util/eip712";
import { ETH_SECP256K1_TYPE, parseChainId, populateEvmTransactionDetails, PUBLIC_KEY_SIGNING_TEXT } from "@carbon-sdk/util/ethermint";
import { DEFAULT_PUBLIC_KEY_MESSAGE } from "@carbon-sdk/util/evm";
import { appendHexPrefix } from "@carbon-sdk/util/generic";
import { legacyConstructEIP712Tx } from "@carbon-sdk/util/legacyEIP712";
import { carbonNetworkFromChainId } from "@carbon-sdk/util/network";
import { signTransactionWrapper } from "@carbon-sdk/util/provider";
import { SimpleMap } from "@carbon-sdk/util/type";
import { CarbonSigner, CarbonSignerTypes } from "@carbon-sdk/wallet";
import { AminoMsg } from "@cosmjs/amino";
import { makeSignDoc } from "@cosmjs/amino/build";
import { Algo, EncodeObject, makeSignDoc as makeProtoSignDoc, TxBodyEncodeObject } from "@cosmjs/proto-signing";
import { StdFee } from "@cosmjs/stargate";
import { TxBody } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import * as ethSignUtils from "eth-sig-util";
import { ethers } from "ethers";
import { CARBON_EVM_DEVNET, CARBON_EVM_LOCALHOST, CARBON_EVM_MAINNET, CARBON_EVM_TESTNET, ChangeNetworkParam as MetaMaskChangeNetworkParam, ETH_MAINNET, ETH_TESTNET } from "../../constant";
import { Eip6963Provider } from "../eip6963Provider";
import { parseEvmError } from "./error";
import { LEGACY_ACCOUNTS_MAINNET, LEGACY_ACCOUNTS_TESTNET } from "./legacy-accounts";
import { SignDoc } from "cosmjs-types/cosmos/tx/v1beta1/tx";

type ChainContracts = {
  [key in Network]: string;
};
const CONTRACT_HASH: {
  [key in EVMChain]: ChainContracts;
} = {
  Ethereum: {
    // use same rinkeby contract for all non-mainnet uses
    [Network.TestNet]: "0x086e1b5f67c0f7ca8eb202d35553e27e964899e2",
    [Network.DevNet]: "0x086e1b5f67c0f7ca8eb202d35553e27e964899e2",
    [Network.LocalHost]: "0x086e1b5f67c0f7ca8eb202d35553e27e964899e2",

    [Network.MainNet]: "0xf4552877A40c1527D38970F170993660084D4541",
  } as const,
  ['Binance Smart Chain']: {
    // use same testnet contract for all non-mainnet uses
    [Network.TestNet]: "0x06E949ec2d6737ff57859CdcE426C5b5CA2Fc085",
    [Network.DevNet]: "0x06E949ec2d6737ff57859CdcE426C5b5CA2Fc085",
    [Network.LocalHost]: "0x06E949ec2d6737ff57859CdcE426C5b5CA2Fc085",

    [Network.MainNet]: "0x3786d94AC6B15FE2eaC72c3CA78cB82578Fc66f4",
  } as const,
  Arbitrum: {
    // use same testnet contract for all non-mainnet uses
    [Network.TestNet]: "",
    [Network.DevNet]: "",
    [Network.LocalHost]: "",

    [Network.MainNet]: "0x43138036d1283413035b8eca403559737e8f7980",
  } as const,
  Polygon: {
    // use same testnet contract for all non-mainnet uses
    [Network.TestNet]: "",
    [Network.DevNet]: "",
    [Network.LocalHost]: "",

    [Network.MainNet]: "0x61B9503Fe023E1F1Dd0ab7417923cB0A41DD9E0c",
  } as const,
  OKC: {
    // use same testnet contract for all non-mainnet uses
    [Network.TestNet]: "",
    [Network.DevNet]: "",
    [Network.LocalHost]: "",

    [Network.MainNet]: "0x7e8D8c98a016877Cb3103e837Fc71D41b155aF70",
  } as const,
  Mantle: {
    // use same testnet contract for all non-mainnet uses
    [Network.TestNet]: "",
    [Network.DevNet]: "",
    [Network.LocalHost]: "",

    [Network.MainNet]: "",
  } as const,
  Optimism: {
    // use same testnet contract for all non-mainnet uses
    [Network.TestNet]: "",
    [Network.DevNet]: "",
    [Network.LocalHost]: "",

    [Network.MainNet]: "",
  } as const,
  Avalanche: {
    // use same testnet contract for all non-mainnet uses
    [Network.TestNet]: "",
    [Network.DevNet]: "",
    [Network.LocalHost]: "",

    [Network.MainNet]: "",
  } as const,
  Base: {
    // use same testnet contract for all non-mainnet uses
    [Network.TestNet]: "",
    [Network.DevNet]: "",
    [Network.LocalHost]: "",

    [Network.MainNet]: "",
  } as const,
  Monad: {
    // use same testnet contract for all non-mainnet uses
    [Network.TestNet]: "",
    [Network.DevNet]: "",
    [Network.LocalHost]: "",

    [Network.MainNet]: "",
  } as const,
  Carbon: {
    //Carbon does not support Metamask legacy mnemonic sign in
    [Network.TestNet]: "",
    [Network.DevNet]: "",
    [Network.LocalHost]: "",

    [Network.MainNet]: "",
  } as const,
} as const;

const REGISTRY_CONTRACT_ABI = ABIs.keyStorage;

const ENCRYPTION_VERSION = "x25519-xsalsa20-poly1305";

const MNEMONIC_MATCH_REGEX = /-----BEGIN MNEMONIC PHRASE-----([a-z\s]*)-----END MNEMONIC PHRASE-----/im;
const MNEMONIC_MATCH_REGEX_LEGACY = /^[a-z\s]*$/i;

const getEncryptMessage = (input: string) => {
  return `
  !!! Attention !!! Please make sure you are connecting to https://app.dem.exchange, do not confirm decrypt if you're connecting to untrusted sites.
  -----BEGIN MNEMONIC PHRASE-----
  ${input}
  -----END MNEMONIC PHRASE-----
  `
    .trim()
    .replace(/^\s+/gm, "");
};

interface MetaMaskAPI {
  isMetaMask: boolean;
  chainId: string | null;
  _state: { isConnected: boolean };
  request: (args: RequestArguments) => Promise<unknown>;
  on: (eventName: string, listener: (...args: unknown[]) => void) => any;
}

export interface CallContractArgs {
  from?: string;
  value?: string;
  data?: string;
}

export interface StoredMnemonicInfo {
  mnemonic: string,
  chain: EVMChain,
  privateKey: string,
  bech32Address: string
  evmHexAddress: string
}

/**
 * TODO: Add docs
 */
export class MetaMask extends Eip6963Provider {
  private blockchain: EVMChain = 'Ethereum';
  private connectedAccount: string = ''

  static createMetamaskSigner(metamask: MetaMask, evmChainId: string, pubKeyBase64: string, addressOptions: SWTHAddressOptions): CarbonSigner {
    const evmHexAddress = AddressUtils.ETHAddress.publicKeyToAddress(Buffer.from(pubKeyBase64, "base64"), addressOptions)
    const signDirect = async (_: string, doc: SignDoc) => {
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
      const { sig, signedDoc } = await metamask.signEip712(
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
      const { sig, signedDoc } = await metamask.signEip712(
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
    const getAccounts = async () => {
      const address = await metamask.defaultAccount()
      return [
        {
          algo: "secp256k1" as Algo,
          address,
          pubkey: Uint8Array.from(Buffer.from(pubKeyBase64, 'base64')),
        },
      ]
    }


    const signLegacyEip712 = async (signerAddress: string, doc: CarbonTx.StdSignDoc) => {
      const { account_number, chain_id, msgs, fee, memo, sequence } = doc

      // Only MsgMergeAccount will have an Eth address signer, other generic transaction will be cosmos address signer
      // FeePayer here is only used for legacy EIP-712
      const feePayer = AminoTypesMap.fromAmino(msgs[0]).typeUrl === TxTypes.MsgMergeAccount ? AddressUtils.ETHAddress.publicKeyToBech32Address(Buffer.from(pubKeyBase64, "base64"), addressOptions) : signerAddress

      const { sig, signedDoc } = await metamask.signEip712(
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

    const sendEvmTransaction = async (api: CarbonSDK, req: ethers.providers.TransactionRequest): Promise<string> => {
      try {
        const request = await populateEvmTransactionDetails(api, req)
        const response = await metamask!.sendEvmTransaction(request)
        return response
      }
      catch (error) {
        console.error(error)
        throw (parseEvmError(error as Error, ProviderAgent.MetamaskExtension))
      }
    }

    const signMessage = async (address: string, message: string) => {
      return metamask.personalSign(address, message)
    }

    return {
      type: CarbonSignerTypes.BrowserInjected,
      legacyEip712SignMode: metamask.legacyEip712SignMode,
      signDirect,
      signAmino,
      getAccounts,
      signLegacyEip712,
      sendEvmTransaction,
      signMessage,
    };
  }

  static async signAndRecoverPubKey(provider: MetaMask, enableJwtAuth?: boolean, customMsg: string = DEFAULT_PUBLIC_KEY_MESSAGE) {
    const address = await provider.defaultAccount()
    const signMessage = enableJwtAuth ? AuthUtils.getAuthMessage(customMsg) : customMsg;
    const signature = await provider.personalSign(address, signMessage)
    const publicKeyHex = EvmUtils.recoverPublicKey(signMessage, signature)
    return {
      publicKey: Buffer.from(publicKeyHex, 'hex').toString('base64'),
      signature,
      message: signMessage,
    }
  }

  static getNetworkParams(network: Network, blockchain: EVMChain = 'Ethereum'): MetaMaskChangeNetworkParam {
    if (blockchain === 'Carbon') {
      return MetaMask.getCarbonEvmNetworkParams(network)
    }

    const isMainnet = network === Network.MainNet
    // metamask should come with Ethereum configs
    return isMainnet ? ETH_MAINNET : ETH_TESTNET
  }

  static getCarbonEvmNetworkParams(network: Network): MetaMaskChangeNetworkParam {
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

  static getRequiredChainId(network: Network, blockchain: BlockchainV2 = 'Ethereum') {
    if (blockchain === "Carbon") {
      return Number(parseChainId(CarbonEvmChainIDs[network]))
    }
    const isMainnet = network === Network.MainNet
    // Fallback to Ethereum chain ID
    const chainId = isMainnet ? ETH_MAINNET.chainId : ETH_TESTNET.chainId
    return Number(chainId);
  }

  constructor(public readonly network: Network, public readonly legacyEip712SignMode: boolean = false) {
    super()
  }

  private checkProvider(blockchain: BlockchainV2 = this.blockchain): ethers.providers.Provider {
    const config: any = NetworkConfigs[this.network];

    if (!config[BLOCKCHAIN_V2_TO_V1_MAPPING[blockchain!]]) {
      throw new Error(`MetaMask login not supported for this network ${this.network}`);
    }

    const ethNetworkConfig: EthNetworkConfig = config[BLOCKCHAIN_V2_TO_V1_MAPPING[blockchain!]];

    const provider = new ethers.providers.JsonRpcProvider(ethNetworkConfig.rpcURL);

    return provider;
  }

  public getBlockchain(): BlockchainV2 {
    return this.blockchain;
  }

  async syncConnectedAccount() {
    this.connectedAccount = await this.defaultAccount()
    return this.connectedAccount
  }

  async syncBlockchain(): Promise<SyncResult> {
    const metamaskAPI = await this.getConnectedAPI()
    const chainIdHex = (await metamaskAPI?.request({ method: "eth_chainId" })) as string;
    const chainId = chainIdHex ? parseInt(chainIdHex, 16) : undefined;
    const blockchain = getBlockchainFromChainV2(chainId) as EVMChain;
    this.blockchain = blockchain!;

    return { chainId, blockchain };
  }

  async getSigner(): Promise<ethers.Signer> {
    const ethereum = await this.getConnectedAPI();
    return new ethers.providers.Web3Provider(ethereum).getSigner();
  }

  getDefaultMetamaskProvider(): MetaMaskAPI | undefined {
    const metamaskProvider = super.getProvider(SupportedEip6963Provider.MetaMask)
    return metamaskProvider?.provider as MetaMaskAPI
  }

  async getConnectedAPI(): Promise<MetaMaskAPI> {

    const metamaskProvider = this.getDefaultMetamaskProvider()

    if (!metamaskProvider) {
      throw new Error("MetaMask not connected, please check that your extension is enabled");
    }

    return metamaskProvider;
  }

  async connect() {
    return this.getConnectedAPI();
  }

  async defaultAccount() {
    const metamaskAPI = await this.getConnectedAPI();
    const accounts = (await metamaskAPI.request({ method: "eth_requestAccounts" })) as string[];
    const [defaultAccount] = accounts;

    if (!defaultAccount) {
      throw new Error("No default account on MetaMask, please create one first");
    }

    return defaultAccount;
  }

  async getEncryptedLegacyAccounts(network: Network = Network.MainNet): Promise<StoredMnemonicInfo[] | undefined> {
    const defaultAccount = await this.defaultAccount();
    const legacyAccounts: SimpleMap<string[]> = network === Network.MainNet ? LEGACY_ACCOUNTS_MAINNET : LEGACY_ACCOUNTS_TESTNET
    const legacyAccBlockchains = []
    for (const [blockchain] of Object.entries(legacyAccounts)) {
      for (const address of legacyAccounts[blockchain]) {
        if (address.toLowerCase() === defaultAccount.toLowerCase()) {
          legacyAccBlockchains.push(blockchain)
          break
        }
      }
    }
    if (legacyAccBlockchains.length > 0) {
      const legacyMnemonicCiphers = legacyAccBlockchains.map(async (blockchain) => (this.getMnemonicInfo(blockchain as EVMChain)))
      const results = await Promise.all(legacyMnemonicCiphers)
      return results.filter((result): result is StoredMnemonicInfo => result !== undefined)
    }
    return undefined
  }

  async changeNetworkIfRequired(blockchain: EVMChain, network: CarbonSDK.Network) {
    const required = await this.isChangeNetworkRequired(blockchain, network);
    if (!required) return;

    const metamaskApi = await this.getConnectedAPI();
    const requiredChainId = `0x${MetaMask.getRequiredChainId(network, blockchain).toString(16)}`
    try {
      await metamaskApi.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: requiredChainId }] });
      await this.syncBlockchain();
    } catch (err) {
      // This error code indicates that the chain has not been added to MetaMask.
      try {
        await metamaskApi.request({
          method: 'wallet_addEthereumChain',
          params: [MetaMask.getNetworkParams(network, blockchain)],
        });
        await this.syncBlockchain();
      } catch (err) {
        throw new Error(`Please switch to ${blockchain} network on Metamask.`);
      }
    }
  }
  async isChangeNetworkRequired(blockchain: EVMChain, network: CarbonSDK.Network): Promise<boolean> {
    const metamaskNetwork = await this.syncBlockchain()
    const requiredChainId = MetaMask.getRequiredChainId(network, blockchain)
    return metamaskNetwork.chainId !== requiredChainId
  }

  async verifyNetworkAndConnectedAccount(evmHexAddress: string, evmChainId: string) {
    await this.verifyNetwork(evmChainId);
    await this.verifyConnectedAccount(evmHexAddress);
  }

  async verifyNetwork(evmChainId: string) {
    const network = carbonNetworkFromChainId(evmChainId);
    await this.changeNetworkIfRequired("Carbon", network);
  }

  async verifyConnectedAccount(address: string) {
    const metamaskAPI = await this.getConnectedAPI();
    const accounts = (await metamaskAPI.request({ method: "eth_requestAccounts" })) as string[];
    if (!accounts.find(acc => acc.toLowerCase() === address?.toLowerCase()))
      throw new Error(`${address} not connected on Metamask`);
  }

  async getMnemonicInfo(connectedBlockchain: EVMChain): Promise<StoredMnemonicInfo | undefined> {
    const defaultAccount = await this.defaultAccount();
    let result: StoredMnemonicInfo | undefined
    if (connectedBlockchain && connectedBlockchain !== 'Carbon' && CONTRACT_HASH[connectedBlockchain][this.network]) {
      const mnemonicCipher = await this.getStoredMnemonicCipher(defaultAccount, connectedBlockchain).catch(err => {
        console.error(err)
        throw new Error(`Unable to retrieve stored mnemonic cipher from ${connectedBlockchain}`)
      })
      if (mnemonicCipher) {
        const mnemonic = await this.decryptCipher(mnemonicCipher) ?? ''
        const privateKey = `0x${SWTHAddress.mnemonicToPrivateKey(mnemonic).toString('hex').toLowerCase()}`
        const bech32Address = SWTHAddress.privateKeyToAddress(SWTHAddress.mnemonicToPrivateKey(mnemonic), { network: this.network })
        const evmHexAddress = ETHAddress.privateKeyToAddress(SWTHAddress.mnemonicToPrivateKey(mnemonic))
        result = {
          mnemonic,
          chain: connectedBlockchain,
          privateKey,
          bech32Address,
          evmHexAddress,
        }
      }
    }
    return result
  }


  async getStoredMnemonicCipher(account: string, blockchain?: EVMChain): Promise<string | undefined> {
    const contractHash = this.getContractHash(blockchain);
    const provider = this.checkProvider(blockchain);
    const contract = new ethers.Contract(contractHash, REGISTRY_CONTRACT_ABI, provider);
    const cipherTextHex: string | undefined = await contract.map(account);
    if (!cipherTextHex?.length || cipherTextHex === "0x") {
      // value would be '0x' if not initialized
      return undefined;
    }
    return cipherTextHex;
  }

  async encryptMnemonic(mnemonic: string): Promise<string> {

    const defaultAccount = await this.defaultAccount();
    const publicKey = await this.getEncryptionPublicKey(defaultAccount) as string;

    const messageToEncrypt = getEncryptMessage(mnemonic);

    const cipher = ethSignUtils.encrypt(
      publicKey,
      {
        data: messageToEncrypt,
      },
      ENCRYPTION_VERSION
    );

    const { version, nonce, ephemPublicKey, ciphertext } = cipher;
    const encryptedMnemonic = ethers.utils.toUtf8Bytes([version, nonce, ephemPublicKey, ciphertext].join("."));

    return Buffer.from(encryptedMnemonic).toString("hex");
  }

  // create signed public key for merging of cosmos and ethereum accounts (Metamask V2)
  async signPublicKeyMergeAccount(publicKey: string, address: string): Promise<string> {
    const message = `${PUBLIC_KEY_SIGNING_TEXT}${publicKey}`;
    return (await this.personalSign(address, message)).split("0x")[1]
  }

  async personalSign(address: string, message: string): Promise<string> {
    const api = await this.getConnectedAPI();
    const ethAddress = ethers.utils.getAddress(address);
    return (await api.request({
      method: "personal_sign",
      params: [appendHexPrefix(Buffer.from(message, "utf-8").toString("hex")), ethAddress],
    })) as string;
  }

  async getEncryptionPublicKey(address: string): Promise<string> {
    const api = await this.getConnectedAPI();
    const publicKey = (await api.request({
      method: "eth_getEncryptionPublicKey",
      params: [address],
    })) as string;
    return publicKey;
  }

  async signEip712(evmHexAddress: string, accountNumber: string, evmChainId: string, msgs: readonly AminoMsg[], fee: StdFee, memo: string, sequence: string, feePayer: string = ''): Promise<{ sig: string, signedDoc: CarbonTx.StdSignDoc }> {
    const metamaskNetwork = await this.syncBlockchain()
    const metamaskChainId = metamaskNetwork.chainId ? `carbon_${metamaskNetwork.chainId.toString()}-1` : ''
    const metamaskAPI = await this.getConnectedAPI();
    if (metamaskChainId !== evmChainId) {
      memo += "|CROSSCHAIN-SIGNING|signed-chain-id:" + metamaskChainId + ";" + "carbon-chain-id:" + evmChainId
    }
    const stdSignDoc = makeSignDoc(msgs, fee, evmChainId, memo, accountNumber, sequence)
    const eip712Tx = this.legacyEip712SignMode ? legacyConstructEIP712Tx({ ...stdSignDoc, fee: { ...fee, feePayer } }) : constructEIP712Tx(stdSignDoc, metamaskChainId)
    const sig = await signTransactionWrapper(async () => {
      const signature = (await metamaskAPI.request({
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

  async sendEvmTransaction(req: ethers.providers.TransactionRequest) {
    await this.verifyNetworkAndConnectedAccount(req.from!, req.chainId!.toString())
    const api = await this.getConnectedAPI();
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
    const txHash = (await api.request({
      method: "eth_sendTransaction",
      params: [tx],
    })) as string
    return txHash
  }

  async storeMnemonic(encryptedMnemonic: string, blockchain?: EVMChain) {
    const metamaskAPI = await this.getConnectedAPI();
    const defaultAccount = await this.defaultAccount();
    const storedMnemonicCipher = await this.getStoredMnemonicCipher(defaultAccount, blockchain);

    if (storedMnemonicCipher) {
      throw new Error("Cannot store key on registry - key already exists for ETH account");
    }

    const contractHash = this.getContractHash(blockchain);
    const provider = this.checkProvider(blockchain);
    const contract = new ethers.Contract(contractHash, REGISTRY_CONTRACT_ABI, provider);

    const dataBytes = Buffer.from(encryptedMnemonic, "hex");
    const unsignedTx = await contract.populateTransaction.Store(dataBytes);

    const txHash = (await metamaskAPI.request({
      method: "eth_sendTransaction",
      params: [
        {
          ...unsignedTx,
          from: defaultAccount,
        },
      ],
    })) as string;

    return txHash;
  }

  async login(blockchain?: EVMChain): Promise<string | null> {
    if (blockchain === 'Carbon') {
      throw new Error('Carbon EVM does not support Metamask Legacy')
    }
    const metamaskAPI = await this.getConnectedAPI();
    const defaultAccount = await this.defaultAccount();
    const cipherTextHex: string | undefined = await this.getStoredMnemonicCipher(defaultAccount, blockchain);

    const chainIdHex = (await metamaskAPI.request({ method: "eth_chainId" })) as string;
    const chainId = parseInt(chainIdHex, 16);

    const requiredChainId = this.getRequiredChain(this.network, chainId);
    if (chainId !== requiredChainId) {
      const requiredNetworkName: string = ChainNames[requiredChainId] ?? ChainNames[3];
      throw new Error(`MetaMask not connected to correct network, please use ${requiredNetworkName} (Chain ID: ${requiredChainId})`);
    }

    const mnemonic = this.decryptCipher(cipherTextHex)

    return mnemonic;
  }

  async decryptCipher(cipherTextHex?: string) {
    const metamaskAPI = await this.getConnectedAPI();
    const defaultAccount = await this.defaultAccount();

    if (!cipherTextHex || !cipherTextHex.length) {
      return null;
    }

    const cipherText = ethers.utils.toUtf8String(cipherTextHex);
    const [version, nonce, ephemPublicKey, ciphertext] = cipherText.split(".");

    const cipher = {
      version,
      nonce,
      ephemPublicKey,
      ciphertext,
    };

    const decryptedCipherText = (
      (await metamaskAPI.request({
        method: "eth_decrypt",
        params: [Buffer.from(JSON.stringify(cipher)).toString('hex'), defaultAccount],
      })) as string
    )?.trim();

    // legacy encrypted mnemonic doesnt include warning message.
    if (decryptedCipherText.match(MNEMONIC_MATCH_REGEX_LEGACY)) {
      return decryptedCipherText;
    }

    // match line with prefix 'mnemonic: '
    const match = decryptedCipherText.match(MNEMONIC_MATCH_REGEX);

    // invalid cipher
    if (!match) {
      console.error("invalid account info retrieved from contract");
      console.error(decryptedCipherText);
      throw new Error("Retrieved invalid account on blockchain, please check console for more information.");
    }

    return match[1]?.trim();
  }

  private getRequiredChain(network: Network, currentChainId: number): number {
    const isMainnet = network === Network.MainNet;

    if (!isMainnet && currentChainId === 10143) {
      this.blockchain = 'Monad'
      return 10143
    }

    switch (currentChainId) {
      case 1:  // Ethereum Mainnet
      case 5:  // Ethereum Goerli Testnet
        this.blockchain = 'Ethereum';
        return isMainnet ? 1 : 5;

      case 56:  // Binance Smart Chain Mainnet
      case 97:  // Binance Smart Chain Testnet
        this.blockchain = 'Binance Smart Chain';
        return isMainnet ? 56 : 97;

      case 42161:  // Arbitrum Mainnet
      case 421611: // Arbitrum Testnet
        this.blockchain = 'Arbitrum';
        return isMainnet ? 42161 : 421611;

      case 137:   // Polygon Mainnet
      case 80001: // Polygon Testnet
        this.blockchain = 'Polygon';
        return isMainnet ? 137 : 80001;

      case 66:  // OKC Mainnet
      case 65:  // OKC Testnet
        this.blockchain = 'OKC';
        return isMainnet ? 66 : 65;

      case 5000:  // Mantle Mainnet
      case 5003:  // Mantle Testnet
        this.blockchain = 'Mantle';
        return isMainnet ? 5000 : 5003;

      case 10:    // OP Mainnet
      case 11155420:  // OP Sepolia Testnet
        this.blockchain = 'Optimism';
        return isMainnet ? 10 : 11155420;

      case 43114:    // Avalanche Mainnet
      case 43113:  // Avalanche Fuji Testnet
        this.blockchain = 'Avalanche';
        return isMainnet ? 43114 : 43113;

      case 8453:
      case 84532:
        this.blockchain = 'Base';
        return isMainnet ? 8453 : 84532;
      default:
        // Default fallback for Ethereum if no specific match found
        return isMainnet ? 1 : 5;
    }
  }


  private getContractHash(blockchain: EVMChain = this.blockchain) {
    const contractHash = CONTRACT_HASH[blockchain][this.network];
    if (!contractHash) {
      throw new Error(`MetaMask login is not supported on ${this.network} on ${blockchain}`);
    }

    return contractHash;
  }
}
