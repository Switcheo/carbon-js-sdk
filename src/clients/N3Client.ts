import CarbonSDK from "@carbon-sdk/CarbonSDK"
import { Models } from "@carbon-sdk/index"
import { NetworkConfigProvider } from "@carbon-sdk/constant"
import { NeoLedgerAccount } from "@carbon-sdk/provider/account"
import { Blockchain } from "@carbon-sdk/util/blockchain"
import { TokensWithExternalBalance } from "@carbon-sdk/util/external"
import { SimpleMap } from "@carbon-sdk/util/type"
import { CONST, u, tx, sc, wallet } from "@cityofzion/neon-js-3"
import { rpc } from "@cityofzion/neon-core"
import BigNumber from "bignumber.js"
import { SWTHAddress } from "@carbon-sdk/util/address"

export interface N3ClientOpts {
  configProvider: NetworkConfigProvider,
  blockchain?: Blockchain,
}

export interface LockLedgerDepositParams {
  feeAmount: BigNumber
  amount: BigNumber
  address: Uint8Array
  token: TokensWithExternalBalance
  ledger: NeoLedgerAccount
  signCompleteCallback?: () => void
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
    const response = await this.rpcClient.execute(new rpc.Query({
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
    const nonce = Math.floor(Math.random() * 1000000)

    const args = [
      sc.ContractParam.hash160(tokenScriptHash),
      sc.ContractParam.hash160(account.address),
      sc.ContractParam.byteArray(toAddress),
      sc.ContractParam.integer(amount.toString(10)),
      sc.ContractParam.integer(feeAmount.toString(10)),
      sc.ContractParam.byteArray(""),
      sc.ContractParam.integer(nonce),
    ];
    const script = sc.createScript({
      scriptHash,
      operation: "lock",
      args,
    });
    const currentHeight = await this.rpcClient.getBlockCount();
    const txn = new tx.Transaction({
      script: script,
      validUntilBlock: currentHeight + 100,
    });

    const signedTx = await txn.sign(account, CONST.MAGIC_NUMBER.MainNet)

    if (amount.lt(feeAmount)) {
      return false
    }

    const result = await this.rpcClient.sendRawTransaction(
      u.HexString.fromHex(signedTx.serialize(true)).toString()
    );

    return result;
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
}

export default N3Client;
