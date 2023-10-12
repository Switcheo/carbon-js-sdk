import CarbonSDK from "@carbon-sdk/CarbonSDK";
import { NeoNetworkConfig, NetworkConfig, NetworkConfigProvider, ZeroAddress } from "@carbon-sdk/constant";
import { Carbon } from "@carbon-sdk/CarbonSDK";
import { NeoLedgerAccount } from "@carbon-sdk/provider/account";
import { O3Types, O3Wallet } from "@carbon-sdk/provider/o3";
import { AddressUtils } from "@carbon-sdk/util";
import { SWTHAddress } from "@carbon-sdk/util/address";
import { Blockchain, blockchainForChainId, BLOCKCHAIN_V2_TO_V1_MAPPING } from "@carbon-sdk/util/blockchain";
import { TokenInitInfo, TokensWithExternalBalance } from "@carbon-sdk/util/external";
import { stripHexPrefix } from "@carbon-sdk/util/generic";
import { SimpleMap } from "@carbon-sdk/util/type";
import * as Neon from "@cityofzion/neon-core";
import { api } from "@cityofzion/neon-js";
import BigNumber from "bignumber.js";
import { ethers } from "ethers";
import { chunk } from "lodash";

export interface NEOClientOpts {
  configProvider: NetworkConfigProvider;
  blockchain?: Blockchain;
}

export interface LockLedgerDepositParams {
  feeAmount: BigNumber;
  amount: BigNumber;
  address: Uint8Array;
  token: TokensWithExternalBalance;
  ledger: NeoLedgerAccount;
  signCompleteCallback?: () => void;
}

export interface LockO3DepositParams {
  feeAmount: BigNumber;
  amount: BigNumber;
  address: Uint8Array;
  token: TokensWithExternalBalance;
  o3Wallet: O3Wallet;
  signCompleteCallback?: () => void;
}

interface ScriptResult {
  stack: ReadonlyArray<{ type: string; value: string }>;
}

export class NEOClient {
  static SUPPORTED_BLOCKCHAINS = [Blockchain.Neo];
  static BLOCKCHAIN_KEY = {
    [Blockchain.Neo]: "Neo",
  };

  private constructor(public readonly configProvider: NetworkConfigProvider, public readonly blockchain: Blockchain) { }

  public static instance(opts: NEOClientOpts) {
    const { configProvider, blockchain = Blockchain.Neo } = opts;

    if (!NEOClient.SUPPORTED_BLOCKCHAINS.includes(blockchain)) throw new Error(`unsupported blockchain - ${blockchain}`);

    return new NEOClient(configProvider, blockchain);
  }

  public static parseHexNum(hex: string, exp: number = 0): string {
    if (!hex || typeof hex !== "string") return "0";
    const res: string = hex.length % 2 !== 0 ? `0${hex}` : hex;
    return new BigNumber(res ? Neon.u.reverseHex(res) : "00", 16).shiftedBy(-exp).toString();
  }

  public async getExternalBalances(
    sdk: CarbonSDK,
    address: string,
    url: string,
    whitelistDenoms?: string[],
    version = "V1",
  ): Promise<TokensWithExternalBalance[]> {
    const tokenQueryResults = await sdk.token.getAllTokens();
    const account = new Neon.wallet.Account(address);
    const tokens = tokenQueryResults.filter(
      (token) => {
        const isCorrectBlockchain =
          version === "V2"
            ?
            !!sdk.token.getBlockchainV2(token.denom) && (BLOCKCHAIN_V2_TO_V1_MAPPING[sdk.token.getBlockchainV2(token.denom)!] == this.blockchain)
            :
            blockchainForChainId(token.chainId.toNumber(), sdk.network) == this.blockchain
        return (isCorrectBlockchain || token.denom === "swth") && token.tokenAddress.length == 40 && token.bridgeAddress.length == 40
      }
    );

    const client: Neon.rpc.RPCClient = new Neon.rpc.RPCClient(url, "2.5.2"); // TODO: should we change the RPC version??

    // NOTE: fetching of tokens is chunked in sets of 15 as we may hit
    // the gas limit on the RPC node and error out otherwise
    const promises: Promise<any>[] = chunk(tokens, 75).map(async (partition: ReadonlyArray<Carbon.Coin.Token>) => { // tslint:disable-line
      const acc: SimpleMap<string> = {};
      for (const token of partition) {
        if (whitelistDenoms && !whitelistDenoms.includes(token.denom)) continue;
        const sb: Neon.sc.ScriptBuilder = new Neon.sc.ScriptBuilder();
        sb.emitAppCall(Neon.u.reverseHex(token.tokenAddress), "balanceOf", [Neon.u.reverseHex(account.scriptHash)]);

        try {
          const response: ScriptResult = (await client.invokeScript(sb.str)) as ScriptResult;
          acc[token.denom.toUpperCase()] =
            response.stack[0]?.type === "Integer" // Happens on polychain devnet
              ? response.stack[0]?.value
              : NEOClient.parseHexNum(response.stack[0]?.value);
        } catch (err) {
          console.error("Could not retrieve external balance for ", token.denom);
          console.error(err);
        }
      }

      return acc;
    });

    const result = await Promise.all(promises).then((results: SimpleMap<string>[]) => {
      return results.reduce((acc: object, res: object) => ({ ...acc, ...res }), {});
    });

    const TokensWithExternalBalance: TokensWithExternalBalance[] = [];
    for (const token of tokens) {
      TokensWithExternalBalance.push({
        ...token,
        externalBalance: result[token.denom.toUpperCase()],
      });
    }

    return TokensWithExternalBalance;
  }

  public async lockDeposit(token: TokensWithExternalBalance, feeAmountInput: string, swthAddress: string, neoPrivateKey: string) {
    const account = new Neon.wallet.Account(neoPrivateKey);

    const networkConfig = this.getNetworkConfig();
    const scriptHash = Neon.u.reverseHex(token.bridgeAddress);

    const fromAssetHash = token.tokenAddress;
    const fromAddress = Neon.u.reverseHex(account.scriptHash);
    const targetProxyHash = this.getTargetProxyHash(token);
    const toAssetHash = Neon.u.str2hexstring(token.id);
    const addressBytes = SWTHAddress.getAddressBytes(swthAddress, networkConfig.network);
    const toAddress = stripHexPrefix(ethers.utils.hexlify(addressBytes));
    const zeroAddressHex = stripHexPrefix(ethers.utils.hexlify(ZeroAddress));

    const amount = ethers.BigNumber.from(token.externalBalance);
    const feeAmount = ethers.BigNumber.from(feeAmountInput ?? "100000000");
    const feeAddress = feeAmount.isZero() ? zeroAddressHex : networkConfig.feeAddress;
    const nonce = Math.floor(Math.random() * 1000000);

    if (amount.lt(feeAmount)) {
      return false;
    }

    const sb = new Neon.sc.ScriptBuilder();
    sb.emitAppCall(scriptHash, "lock", [
      fromAssetHash,
      fromAddress,
      targetProxyHash,
      toAssetHash,
      toAddress,
      amount.toNumber(),
      feeAmount.toNumber(),
      feeAddress,
      nonce,
    ]);

    const rpcUrl = await this.getProviderUrl();
    const apiProvider = new api.neoCli.instance(rpcUrl)
    return api.doInvoke({
      api: apiProvider,
      url: rpcUrl,
      account,
      script: sb.str,
      gas: 0,
      fees: 0,
    });
  }

  public async lockO3Deposit(params: LockO3DepositParams) {
    const { feeAmount, address, amount, token, o3Wallet } = params;
    if (!o3Wallet.isConnected()) {
      throw new Error("O3 wallet not connected. Please reconnect and try again.");
    }

    const publicKeyOutput = (await o3Wallet.getPublicKeyOutput()) as O3Types.PublicKeyOutput;

    const networkConfig = this.getNetworkConfig();
    const scriptHash = Neon.u.reverseHex(token.bridgeAddress);

    const fromAssetHash = Neon.u.reverseHex(token.tokenAddress);
    const fromAddress = AddressUtils.NEOAddress.publicKeyToAddress(publicKeyOutput.publicKey);
    const targetProxyHash = this.getTargetProxyHash(token);
    const toAssetHash = Neon.u.str2hexstring(token.id);
    const toAddress = stripHexPrefix(ethers.utils.hexlify(address));

    const nonce = Math.floor(Math.random() * 1000000);

    if (amount.lt(feeAmount)) {
      throw new Error("Invalid amount");
    }

    const data: any = [
      Neon.sc.ContractParam.hash160(fromAssetHash),
      Neon.sc.ContractParam.hash160(fromAddress),
      Neon.sc.ContractParam.byteArray(targetProxyHash, "hex"),
      Neon.sc.ContractParam.byteArray(toAssetHash, "hex"),
      Neon.sc.ContractParam.byteArray(toAddress, "hex"),
      Neon.sc.ContractParam.integer(amount.toNumber()),
      Neon.sc.ContractParam.integer(feeAmount.toNumber()),
      Neon.sc.ContractParam.byteArray(networkConfig.feeAddress, "hex"),
      Neon.sc.ContractParam.integer(nonce),
    ];

    const tx = await o3Wallet.getDAPI().invoke({
      scriptHash,
      args: data,
      operation: "lock",
      fee: 0,
    });

    return tx.txid;
  }

  public async lockLedgerDeposit(params: LockLedgerDepositParams) {
    const { feeAmount, address, amount, token, ledger, signCompleteCallback } = params;
    const compressedPublicKey = Neon.wallet.getPublicKeyEncoded(ledger.publicKey);

    const networkConfig = this.getNetworkConfig();
    const scriptHash = Neon.u.reverseHex(token.bridgeAddress);

    const fromAssetHash = token.tokenAddress;
    const fromAddress = ledger.scriptHash;
    const targetProxyHash = this.getTargetProxyHash(token);
    const toAssetHash = Neon.u.str2hexstring(token.id);
    const toAddress = stripHexPrefix(ethers.utils.hexlify(address));

    const feeAddress = networkConfig.feeAddress;
    const nonce = Math.floor(Math.random() * 1000000);

    if (amount.lt(feeAmount)) {
      throw new Error("Invalid amount");
    }

    const sb = new Neon.sc.ScriptBuilder();
    const data = [
      fromAssetHash,
      fromAddress,
      targetProxyHash,
      toAssetHash,
      toAddress,
      amount.toNumber(),
      feeAmount.toNumber(),
      feeAddress,
      nonce,
    ];
    sb.emitAppCall(scriptHash, "lock", data);

    const rpcUrl = await this.getProviderUrl();
    const apiProvider = new api.neoCli.instance(rpcUrl)

    let invokeTxConfig: any = {
      account: {
        // zombie account provided because config requires an account, and makes use
        // of the address and public key properties during the signing process, even
        // when signingFunction override is provided.
        ...new Neon.wallet.Account(""),

        // overwrite the address and public key to values provided by the ledger.
        address: ledger.displayAddress,
        publicKey: compressedPublicKey,
      } as Neon.wallet.Account,

      signingFunction: async (tx: string, publicKey: string) => {
        const signature = await ledger.sign(tx);
        const witness = Neon.tx.Witness.fromSignature(signature, publicKey);
        return witness.serialize();
      },

      api: apiProvider,
      url: rpcUrl,
      script: sb.str,
      gas: 0,
      fees: 0,
    };

    // similar to Neon.doInvoke(invokeTxConfig), but
    // separates out sendTx to broadcast to several nodes
    invokeTxConfig = await api.fillBalance(invokeTxConfig);
    invokeTxConfig = await api.createInvocationTx(invokeTxConfig);
    invokeTxConfig = await api.modifyTransactionForEmptyTransaction(invokeTxConfig);
    invokeTxConfig = await api.signTx(invokeTxConfig);

    // provide notification to caller that signature is
    // done and proceeding to broadcasting tx
    if (signCompleteCallback) {
      signCompleteCallback();
    }

    await api.sendTx({
      ...invokeTxConfig,
      rpcUrl,
    });

    return invokeTxConfig.tx?.hash;
  }

  public async retrieveNEP5Info(scriptHash: string): Promise<TokenInitInfo> {
    const url = this.getProviderUrl();
    const sb = new Neon.sc.ScriptBuilder();
    sb.emitAppCall(scriptHash, "symbol", []);
    sb.emitAppCall(scriptHash, "name", []);
    sb.emitAppCall(scriptHash, "decimals", []);

    const response = await Neon.rpc.Query.invokeScript(sb.str).execute(url);

    if (response?.result?.state !== "HALT") throw new Error("retrieve failed");

    const symbol = Neon.u.hexstring2str(response.result.stack?.[0].value);
    const name = Neon.u.hexstring2str(response.result.stack?.[1].value);
    const decimals = parseInt(response.result.stack?.[2].value ?? "0", 10);

    return { address: scriptHash, decimals, name, symbol };
  }

  public async wrapNeoToNneo(neoAmount: BigNumber, neoPrivateKey: string) {
    const account = new Neon.wallet.Account(neoPrivateKey);
    const rpcUrl = await this.getProviderUrl();

    const wrapperContractScriptHash = this.getConfig().wrapperScriptHash;
    const wrapperContractAddress = Neon.wallet.getAddressFromScriptHash(wrapperContractScriptHash);

    // Build config
    const intent = api.makeIntent({ NEO: neoAmount.toNumber() }, wrapperContractAddress);

    const props = {
      scriptHash: wrapperContractScriptHash,
      operation: "mintTokens",
      args: [],
    };

    const script = Neon.sc.createScript(props);
    const apiProvider = new api.neoCli.instance(rpcUrl)

    const config = {
      api: apiProvider, // Network
      url: rpcUrl,
      account, // Sender's Account
      intents: intent,
      script: script,
    };

    // Neon API
    const response = await api.doInvoke(config);

    return response;
  }

  public async formatWithdrawalAddress(address: string): Promise<string> {
    const isValidAddress = Neon.wallet.isAddress(address);
    if (!isValidAddress) {
      throw new Error("invalid address");
    }
    const scriptHash = Neon.wallet.getScriptHashFromAddress(address);
    // return the little endian version of the address
    return Neon.u.reverseHex(scriptHash);
  }

  /**
   * TargetProxyHash is a hash of token originator address that is used
   * for lockproxy asset registration and identification
   *
   * @param token
   */
  public getTargetProxyHash(token: Carbon.Coin.Token) {
    const networkConfig = this.getNetworkConfig();
    const addressBytes = SWTHAddress.getAddressBytes(token.creator, networkConfig.network);
    const addressHex = stripHexPrefix(ethers.utils.hexlify(addressBytes));
    return addressHex;
  }

  public getNetworkConfig(): NetworkConfig {
    return this.configProvider.getConfig();
  }

  public getConfig(): NeoNetworkConfig {
    const networkConfig = this.getNetworkConfig();
    return networkConfig.neo;
  }

  public getProviderUrl() {
    return this.getConfig().rpcURL;
  }
}

export default NEOClient;
