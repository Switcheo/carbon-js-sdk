import CarbonSDK from "@carbon-sdk/CarbonSDK"
import { NetworkConfigProvider } from "@carbon-sdk/constant"
import { Models } from "@carbon-sdk/index"
import { NeoLedgerAccount } from "@carbon-sdk/provider/account"
import { N3Address, SWTHAddress } from "@carbon-sdk/util/address"
import { Blockchain } from "@carbon-sdk/util/blockchain"
import { TokensWithExternalBalance } from "@carbon-sdk/util/external"
import { SimpleMap } from "@carbon-sdk/util/type"
import { CONST, rpc, sc, tx, u, wallet } from "@cityofzion/neon-core-3"
import BigNumber from "bignumber.js"

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

export interface N3Signer {
  sign: (txn: tx.Transaction, networkMagic?: number, k?: string | number) => Promise<tx.Transaction>;
  scriptHash: string;
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
    const isValidNeoRpcUrl = config.n3.rpcURL?.length > 0
    this.rpcClient = isValidNeoRpcUrl ? new rpc.RPCClient(config.n3.rpcURL) : null!;
  }

  public static signerFromPrivateKey(privateKey: string): N3Signer {
    const account = new wallet.Account(privateKey);
    return {
      scriptHash: account.scriptHash,
      sign: async (txn: tx.Transaction, networkMagic: number = CONST.MAGIC_NUMBER.MainNet, k?: string | number) => txn.sign(account, networkMagic, k),
    };
  }
  public static signerFromLedger(ledger: NeoLedgerAccount): N3Signer {
    return {
      scriptHash: ledger.scriptHash,
      sign: async (txn: tx.Transaction, networkMagic: number = CONST.MAGIC_NUMBER.MainNet, k?: string | number) => {
        const networkHex = networkMagic.toString(16);
        const signature = await ledger.sign(networkHex + u.reverseHex(txn.hash()));
        txn.addWitness(tx.Witness.fromSignature(signature, ledger.publicKey));

        return txn;
      },
    };
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

    const balances: SimpleMap<string> = await this.getAllN3Balances(address);
    const tokensWithBalance: TokensWithExternalBalance[] = [];

    for (const token of tokens) {
      if (!token.tokenAddress.match(/^[0-9a-f]+$/i)) continue;
      if (whitelistDenoms && !whitelistDenoms.includes(token.denom)) continue
      const tokenScriptHash = u.reverseHex(token.tokenAddress);
      if (!balances[tokenScriptHash]) continue;

      tokensWithBalance.push({
        ...token,
        externalBalance: balances[tokenScriptHash],
      });
    }

    return tokensWithBalance;
  }

  public async getAllN3Balances(address: string): Promise<SimpleMap<string>> {
    const response: any = await this.rpcClient.execute(new rpc.Query({
      method: "getnep17balances",
      params: [address],
    }));

    const balances: SimpleMap<string> = {};
    for (const balanceResult of response?.balance ?? []) {
      balances[balanceResult.assethash.replace(/^0x/i, "")] = balanceResult.amount;
    }

    return balances;
  }

  public async lock(lockProxyScriptHash: string, tokenScriptHash: string, fromAddressHex: string, toAddressHex: string, amount: BigNumber, feeAmount: BigNumber, signer: N3Signer) {

    const nonce = Math.floor(Math.random() * 1000000)

    const args = [
      sc.ContractParam.hash160(tokenScriptHash),
      sc.ContractParam.hash160(fromAddressHex),
      sc.ContractParam.byteArray(u.HexString.fromHex(toAddressHex, true)),
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
      signers: [{
        account: signer.scriptHash,
        scopes: tx.WitnessScope.Global,
      }]
    });
    const networkFee = await this.getNetworkFee(txn, 0);
    txn.networkFee = networkFee;

    const systemFee = await this.getSystemFee(txn, 0, [{
      account: signer.scriptHash,
      scopes: tx.WitnessScope.Global.toString(),
    }]);
    txn.systemFee = systemFee;

    const config = this.configProvider.getConfig();
    await signer.sign(txn, config.n3.networkMagic);

    if (amount.lt(feeAmount)) {
      return false
    }

    // console.log("magic", config.n3.networkMagic)
    // console.log("txn", txn.toJson());
    // console.log("txn", u.HexString.fromHex(txn.serialize(true)).toString());
    const result = await this.rpcClient.sendRawTransaction(
      u.HexString.fromHex(txn.serialize(true))
    );

    return result;
  }

  public async lockDeposit(token: TokensWithExternalBalance, feeAmountInput: string, swthAddress: string, neoPrivateKey: string) {
    const networkConfig = this.configProvider.getConfig()
    const scriptHash = u.reverseHex(token.bridgeAddress)
    const tokenScriptHash = u.reverseHex(token.tokenAddress);

    const addressBytes = SWTHAddress.getAddressBytes(swthAddress, networkConfig.network)
    const toAddress = Buffer.from(addressBytes).toString("hex");
    const amount = new BigNumber(token.externalBalance)
    const feeAmount = new BigNumber(feeAmountInput ?? "100000000")

    const n3Signer = N3Client.signerFromPrivateKey(neoPrivateKey);
    const fromAddress = N3Address.privateKeyToAddress(neoPrivateKey);
    return await this.lock(scriptHash, tokenScriptHash, fromAddress, toAddress, amount, feeAmount, n3Signer);
  }

  public async lockLedgerDeposit(params: LockLedgerDepositParams) {
    const {
      feeAmount, toAddressHex, amount, token, ledger, signCompleteCallback,
    } = params

    const scriptHash = u.reverseHex(token.bridgeAddress)
    const tokenScriptHash = u.reverseHex(token.tokenAddress);
    const fromAddressHex = ledger.displayAddress

    const n3Signer = N3Client.signerFromLedger(ledger);
    return await this.lock(scriptHash, tokenScriptHash, fromAddressHex, toAddressHex, amount, feeAmount, n3Signer);
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

  public async formatWithdrawalAddress(address: string): Promise<string> {
    const isValidAddress = wallet.isAddress(address);
    if (!isValidAddress) {
      throw new Error("invalid address");
    }
    const scriptHash = wallet.getScriptHashFromAddress(address);
    // return the little endian version of the address
    return u.reverseHex(scriptHash);
  }
}

export default N3Client;
