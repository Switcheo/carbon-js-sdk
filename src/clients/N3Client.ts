import CarbonSDK from "@carbon-sdk/CarbonSDK"
import { Models } from "@carbon-sdk/index"
import { NetworkConfigProvider } from "@carbon-sdk/constant"
import { NeoLedgerAccount } from "@carbon-sdk/provider/account"
import { Blockchain } from "@carbon-sdk/util/blockchain"
import { TokensWithExternalBalance } from "@carbon-sdk/util/external"
import { SimpleMap } from "@carbon-sdk/util/type"
import { CONST, sc, wallet, rpc, tx, u } from "@cityofzion/neon-core-3"
import BigNumber from "bignumber.js"
import { N3Address, SWTHAddress } from "@carbon-sdk/util/address"

export interface N3ClientOpts {
  configProvider: NetworkConfigProvider,
  blockchain?: Blockchain,
}

export interface LockLedgerDepositParams {
  token: TokensWithExternalBalance

  toAddressHex: string

  feeAmount: BigNumber
  amount: BigNumber

  signCompleteCallback?: () => void
  ledger: NeoLedgerAccount
}

export class N3Client {
  static SUPPORTED_BLOCKCHAINS = [Blockchain.Neo3]
  static BLOCKCHAIN_KEY = {
    [Blockchain.Neo3]: "Neo3",
  }

  private rpcClient: rpc.RPCClient;

  private constructor(
    public readonly configProvider: NetworkConfigProvider,
    public readonly blockchain: Blockchain,
  ) {
    const config = configProvider.getConfig();
    this.rpcClient = new rpc.RPCClient(config.n3.rpcURL);
  }

  public static instance(opts: N3ClientOpts) {
    const {
      configProvider,
      blockchain = Blockchain.Neo3,
    } = opts

    if (!N3Client.SUPPORTED_BLOCKCHAINS.includes(blockchain))
      throw new Error(`unsupported blockchain - ${blockchain}`)

    return new N3Client(configProvider, blockchain)
  }

  public async getExternalBalances(sdk: CarbonSDK, address: string, whitelistDenoms?: string[]): Promise<TokensWithExternalBalance[]> {
    const tokens = await sdk.token.getAllTokens();
    const response: any = await this.rpcClient.execute(new rpc.Query({
      method: "getnep17balances",
      params: [address],
    }))

    const balances: SimpleMap<string> = {};
    const tokensWithBalance: TokensWithExternalBalance[] = []
    for (const balanceResult of response?.result?.balance ?? []) {
      balances[balanceResult.assetHash] = balanceResult.amount;
    }

    for (const token of tokens) {
      if (whitelistDenoms && !whitelistDenoms.includes(token.denom)) continue
      if (!balances[token.tokenAddress]) continue;

      tokensWithBalance.push({
        ...token,
        externalBalance: balances[token.tokenAddress],
      })
    }

    return tokensWithBalance
  }

  public async lock(lockProxyScriptHash: string, tokenScriptHash: string, fromAddressHex: string, toAddressHex: string, amount: BigNumber, feeAmount: BigNumber, signer: string | NeoLedgerAccount) {

    const nonce = Math.floor(Math.random() * 1000000)

    const args = [
      sc.ContractParam.hash160(tokenScriptHash),
      sc.ContractParam.hash160(fromAddressHex),
      sc.ContractParam.byteArray(toAddressHex),
      sc.ContractParam.integer(amount.toString(10)),
      sc.ContractParam.integer(feeAmount.toString(10)),
      sc.ContractParam.byteArray(""),
      sc.ContractParam.integer(nonce),
    ];

    console.log("script hash", lockProxyScriptHash)
    console.log("args", args.map(item => item.value?.toString?.()));

    const script = sc.createScript({
      scriptHash: lockProxyScriptHash,
      operation: "lock",
      args,
    });
    const currentHeight = await this.rpcClient.getBlockCount();
    const txn = new tx.Transaction({
      script,
      validUntilBlock: currentHeight + 100,
    });
    const networkFee = await this.getNetworkFee(txn, 0);
    txn.networkFee = networkFee;

    if (typeof signer === "string") {
      const account = new wallet.Account(signer);
      const systemFee = await this.getSystemFee(txn, 0, [{
        account: account.address,
        scopes: tx.WitnessScope.Global.toString(),
      }]);
      txn.systemFee = systemFee;
  
      await txn.sign(account, CONST.MAGIC_NUMBER.TestNet)
    } else {
      const ledger = signer as NeoLedgerAccount;
      const systemFee = await this.getSystemFee(txn, 0, [{
        account: ledger.scriptHash,
        scopes: tx.WitnessScope.Global.toString(),
      }]);
      txn.systemFee = systemFee;

      const networkHex = CONST.MAGIC_NUMBER.TestNet.toString(16);
      const signature = await ledger.sign(networkHex + u.reverseHex(txn.hash()));
      txn.addWitness(tx.Witness.fromSignature(signature, ledger.publicKey));
    }

    if (amount.lt(feeAmount)) {
      return false
    }

    const result = await this.rpcClient.sendRawTransaction(
      u.HexString.fromHex(txn.serialize(true)).toString()
    );

    return result;
  }

  public async lockDeposit(token: TokensWithExternalBalance, feeAmountInput: string, swthAddress: string, neoPrivateKey: string) {
    const account = new wallet.Account(neoPrivateKey)
    const networkConfig = this.configProvider.getConfig()
    const scriptHash = u.reverseHex(token.bridgeAddress)
    const tokenScriptHash = u.reverseHex(token.tokenAddress);

    // const fromAssetHash = token.tokenAddress
    // const fromAddress = u.reverseHex(account.scriptHash)
    // const targetProxyHash = this.getTargetProxyHash(token)
    // const toAssetHash = u.str2hexstring(token.id)
    // const feeAddress = networkConfig.feeAddress
    const addressBytes = SWTHAddress.getAddressBytes(swthAddress, networkConfig.network)
    const toAddress = Buffer.from(addressBytes).toString("hex");
    const amount = new BigNumber(token.externalBalance)
    const feeAmount = new BigNumber(feeAmountInput ?? "100000000")

    return await this.lock(scriptHash, tokenScriptHash, account.address, toAddress, amount, feeAmount, neoPrivateKey);
  }

  public async lockLedgerDeposit(params: LockLedgerDepositParams) {
    const {
      feeAmount, toAddressHex, amount, token, ledger, signCompleteCallback,
    } = params
  
    const scriptHash = u.reverseHex(token.bridgeAddress)
    const tokenScriptHash = u.reverseHex(token.tokenAddress);
    const fromAddressHex = ledger.scriptHash

    return await this.lock(scriptHash, tokenScriptHash, fromAddressHex, toAddressHex, amount, feeAmount, ledger);
  }

  /**
   * TargetProxyHash is a hash of token originator address that is used
   * for lockproxy asset registration and identification
   * 
   * @param token
   */
  public getTargetProxyHash(token: Models.Token) {
    const networkConfig = this.configProvider.getConfig();
    const addressBytes = SWTHAddress.getAddressBytes(token.creator, networkConfig.network)
    const addressHex = Buffer.from(addressBytes).toString("hex");
    return addressHex
  }

  public async getNetworkFee(txn: tx.Transaction, networkFee: number) {
    const feePerByteInvokeResponse = await this.rpcClient.invokeFunction(
      CONST.NATIVE_CONTRACT_HASH.PolicyContract,
      "getFeePerByte"
    );

    if (feePerByteInvokeResponse.state !== "HALT") {
      if (networkFee === 0) {
        throw new Error("Unable to retrieve data to calculate network fee.");
      } else {
        txn.networkFee = u.BigInteger.fromNumber(networkFee);
      }
    }
    const feePerByte = new BigNumber(feePerByteInvokeResponse.stack[0].value as number)
    // Account for witness size
    const transactionByteSize = txn.serialize().length / 2 + 109;
    // Hardcoded. Running a witness is always the same cost for the basic account.
    const witnessProcessingFee = new BigNumber(1000390);
    const networkFeeEstimate = feePerByte
      .times(transactionByteSize)
      .plus(witnessProcessingFee);

    if (networkFee && networkFee >= networkFeeEstimate.toNumber()) {
      return u.BigInteger.fromNumber(networkFee);
    } else {
      return u.BigInteger.fromNumber(networkFeeEstimate.toString(10));
    }
  }

  public async getSystemFee(txn: tx.Transaction, systemFee: number, signers?: (tx.Signer | tx.SignerJson)[]) {
    const invokeFunctionResponse = await this.rpcClient.invokeScript(u.HexString.fromHex(txn.script), signers);
    if (invokeFunctionResponse.state !== "HALT") {
      throw new Error(`Simulation errored out: ${invokeFunctionResponse.exception}`);
    }

    const requiredSystemFee = new BigNumber(invokeFunctionResponse.gasconsumed).toNumber();
    if (systemFee && systemFee >= requiredSystemFee) {
      return u.BigInteger.fromNumber(systemFee);
    } else {
      return u.BigInteger.fromNumber(requiredSystemFee);
    }
  }
}

export default N3Client;
