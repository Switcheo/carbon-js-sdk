import {
  CarbonChainIDs,
  DEFAULT_NETWORK,
  DenomPrefix,
  Network,
  Network as _Network,
  NetworkConfig,
  NetworkConfigs,
} from "@carbon-sdk/constant";
import { GenericUtils, NetworkUtils } from "@carbon-sdk/util";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { CarbonQueryClient, ETHClient, HydrogenClient, InsightsQueryClient, NEOClient, TokenClient, ZILClient } from "./clients";
import * as clients from "./clients";
import N3Client from "./clients/N3Client";
import {
  AdminModule,
  BankModule,
  BrokerModule,
  CDPModule,
  CoinModule,
  FeeModule,
  GovModule,
  IBCModule,
  LeverageModule,
  LiquidityPoolModule,
  MarketModule,
  OracleModule,
  OrderModule,
  PositionModule,
  ProfileModule,
  SubAccountModule,
  XChainModule,
} from "./modules";
import { StakingModule } from "./modules/staking";
import { CosmosLedger, Keplr, KeplrAccount, Leap, LeapAccount, LeapExtended } from "./provider";
import { Blockchain } from "./util/blockchain";
import { CarbonSigner, CarbonWallet, CarbonWalletGenericOpts } from "./wallet";

export { CarbonTx } from "@carbon-sdk/util";
export { CarbonSigner, CarbonSignerTypes, CarbonWallet, CarbonWalletGenericOpts, CarbonWalletInitOpts } from "@carbon-sdk/wallet";
export { DenomPrefix } from "./constant";

export interface CarbonSDKOpts {
  network: Network;
  tmClient: Tendermint34Client;
  chainId?: string;
  token?: TokenClient;
  config?: Partial<NetworkConfig>;
  defaultTimeoutBlocks?: number; // tx mempool ttl (timeoutHeight)
}
export interface CarbonSDKInitOpts {
  network: Network;
  tmClient?: Tendermint34Client;
  config?: Partial<NetworkConfig>;
  wallet?: CarbonWallet;

  skipInit?: boolean;
  defaultTimeoutBlocks?: number;
}

const DEFAULT_SDK_INIT_OPTS: CarbonSDKInitOpts = {
  network: DEFAULT_NETWORK,
};

/**
 * Carbon SDK
 *
 *
 */
class CarbonSDK {
  public static DEFAULT_NETWORK = DEFAULT_NETWORK;
  public static DenomPrefix = DenomPrefix;

  public readonly query: CarbonQueryClient;
  insights: InsightsQueryClient;
  hydrogen: HydrogenClient;

  wallet?: CarbonWallet;

  network: Network;
  configOverride: Partial<NetworkConfig>;
  networkConfig: NetworkConfig;
  tmClient: Tendermint34Client;
  token: TokenClient;

  admin: AdminModule;
  order: OrderModule;
  lp: LiquidityPoolModule;
  subaccount: SubAccountModule;
  profile: ProfileModule;
  cdp: CDPModule;
  leverage: LeverageModule;
  market: MarketModule;
  broker: BrokerModule;
  position: PositionModule;
  coin: CoinModule;
  oracle: OracleModule;
  gov: GovModule;
  staking: StakingModule;
  bank: BankModule;
  fee: FeeModule;
  ibc: IBCModule;
  xchain: XChainModule;

  neo: NEOClient;
  eth: ETHClient;
  bsc: ETHClient;
  arbitrum: ETHClient;
  polygon: ETHClient;
  okc: ETHClient;
  zil: ZILClient;
  n3: N3Client;
  chainId: string;

  constructor(opts: CarbonSDKOpts) {
    this.network = opts.network ?? DEFAULT_NETWORK;
    this.configOverride = opts.config ?? {};
    this.networkConfig = GenericUtils.overrideConfig(NetworkConfigs[this.network], this.configOverride);

    this.tmClient = opts.tmClient;
    this.chainId = opts.chainId ?? CarbonChainIDs[this.network] ?? CarbonChainIDs[Network.MainNet];
    this.query = new CarbonQueryClient(opts.tmClient);
    this.insights = new InsightsQueryClient(this.networkConfig);
    this.token = opts.token ?? TokenClient.instance(this.query, this);
    this.hydrogen = HydrogenClient.instance(this.networkConfig, this.token);

    this.admin = new AdminModule(this);
    this.order = new OrderModule(this);
    this.lp = new LiquidityPoolModule(this);
    this.subaccount = new SubAccountModule(this);
    this.profile = new ProfileModule(this);
    this.cdp = new CDPModule(this);
    this.leverage = new LeverageModule(this);
    this.market = new MarketModule(this);
    this.broker = new BrokerModule(this);
    this.position = new PositionModule(this);
    this.coin = new CoinModule(this);
    this.oracle = new OracleModule(this);
    this.gov = new GovModule(this);
    this.staking = new StakingModule(this);
    this.bank = new BankModule(this);
    this.fee = new FeeModule(this);
    this.ibc = new IBCModule(this);
    this.xchain = new XChainModule(this);

    this.neo = NEOClient.instance({
      configProvider: this,
      blockchain: Blockchain.Neo,
    });

    this.n3 = N3Client.instance({
      configProvider: this,
      blockchain: Blockchain.Neo3,
    });

    this.eth = ETHClient.instance({
      configProvider: this,
      blockchain: Blockchain.Ethereum,
      tokenClient: this.token,
    });

    this.bsc = ETHClient.instance({
      configProvider: this,
      blockchain: Blockchain.BinanceSmartChain,
      tokenClient: this.token,
    });

    this.zil = ZILClient.instance({
      configProvider: this,
      blockchain: Blockchain.Zilliqa,
    });

    this.arbitrum = ETHClient.instance({
      configProvider: this,
      blockchain: Blockchain.Arbitrum,
      tokenClient: this.token,
    });

    this.polygon = ETHClient.instance({
      configProvider: this,
      blockchain: Blockchain.Polygon,
      tokenClient: this.token,
    });

    this.okc = ETHClient.instance({
      configProvider: this,
      blockchain: Blockchain.Okc,
      tokenClient: this.token,
    });
  }

  public static async instance(opts: CarbonSDKInitOpts = DEFAULT_SDK_INIT_OPTS) {
    const network = opts.network ?? DEFAULT_NETWORK;
    const configOverride = opts.config ?? {};

    const networkConfig = GenericUtils.overrideConfig(NetworkConfigs[network], configOverride);
    const tmClient = opts.tmClient ?? GenericUtils.modifyTmClient(await Tendermint34Client.connect(networkConfig.tmRpcUrl));
    const defaultTimeoutBlocks = opts.defaultTimeoutBlocks;
    const chainId = (await tmClient.status())?.nodeInfo.network;

    const sdk = new CarbonSDK({ network, config: configOverride, tmClient, defaultTimeoutBlocks, chainId });

    if (opts.wallet) {
      await sdk.connect(opts.wallet);
    }

    if (opts.skipInit !== true) {
      await sdk.initialize();
    }

    return sdk;
  }

  public static async instanceWithWallet(wallet: CarbonWallet, sdkOpts: CarbonSDKInitOpts = DEFAULT_SDK_INIT_OPTS) {
    const sdk = await CarbonSDK.instance(sdkOpts);
    return sdk.connect(wallet);
  }

  public static async instanceWithPrivateKey(
    privateKey: string | Buffer,
    sdkOpts: CarbonSDKInitOpts = DEFAULT_SDK_INIT_OPTS,
    walletOpts?: CarbonWalletGenericOpts
  ) {
    const sdk = await CarbonSDK.instance(sdkOpts);
    return sdk.connectWithPrivateKey(privateKey, walletOpts);
  }

  public static async instanceWithMnemonic(
    mnemonic: string,
    sdkOpts: CarbonSDKInitOpts = DEFAULT_SDK_INIT_OPTS,
    walletOpts?: CarbonWalletGenericOpts
  ) {
    const sdk = await CarbonSDK.instance(sdkOpts);
    return sdk.connectWithMnemonic(mnemonic, walletOpts);
  }

  public static async instanceWithSigner(
    signer: CarbonSigner,
    publicKeyBase64: string,
    sdkOpts: CarbonSDKInitOpts = DEFAULT_SDK_INIT_OPTS,
    walletOpts?: CarbonWalletGenericOpts
  ) {
    const sdk = await CarbonSDK.instance(sdkOpts);
    return sdk.connectWithSigner(signer, publicKeyBase64, walletOpts);
  }

  public static async instanceWithLedger(
    ledger: CosmosLedger,
    sdkOpts: CarbonSDKInitOpts = DEFAULT_SDK_INIT_OPTS,
    walletOpts?: CarbonWalletGenericOpts
  ) {
    const sdk = await CarbonSDK.instance(sdkOpts);
    return sdk.connectWithLedger(ledger, walletOpts);
  }

  public static async instanceWithKeplr(
    keplr: Keplr,
    sdkOpts: CarbonSDKInitOpts = DEFAULT_SDK_INIT_OPTS,
    walletOpts?: CarbonWalletGenericOpts
  ) {
    const sdk = await CarbonSDK.instance(sdkOpts);
    return sdk.connectWithKeplr(keplr, walletOpts);
  }

  public static async instanceWithLeap(
    leap: LeapExtended,
    sdkOpts: CarbonSDKInitOpts = DEFAULT_SDK_INIT_OPTS,
    walletOpts?: CarbonWalletGenericOpts
  ) {
    const sdk = await CarbonSDK.instance(sdkOpts);
    return sdk.connectWithLeap(leap, walletOpts);
  }

  public static async instanceViewOnly(
    bech32Address: string,
    sdkOpts: CarbonSDKInitOpts = DEFAULT_SDK_INIT_OPTS,
    walletOpts?: CarbonWalletGenericOpts
  ) {
    const sdk = await CarbonSDK.instance(sdkOpts);
    return sdk.connectViewOnly(bech32Address, walletOpts);
  }

  public async initialize(): Promise<CarbonSDK> {
    const chainId = await this.query.chain.getChainId();
    this.chainId = chainId;
    await this.token.initialize();
    if (this.wallet) {
      await this.wallet.initialize(this.query);
    }

    return this;
  }

  public clone(): CarbonSDK {
    return new CarbonSDK(this.generateOpts());
  }

  public generateOpts(): CarbonSDKOpts {
    return {
      network: this.network,
      config: this.configOverride,
      tmClient: this.tmClient,
      chainId: this.chainId,
    };
  }

  public async connect(wallet: CarbonWallet): Promise<ConnectedCarbonSDK> {
    if (!wallet.initialized) {
      try {
        // Perform initialize function as per normal, but add try-catch statement to check err message
        await wallet.initialize(this.query);
      } catch (err) {
        const errorTyped = err as Error;
        // In the case where account does not exist on chain, still allow wallet connection.
        // Else, throw an error as per normal
        if (!errorTyped.message.includes("Account does not exist on chain. Send some tokens there before trying to query sequence.")) {
          throw new Error(errorTyped.message);
        }
      }
    }
    this.wallet = wallet;
    return this as ConnectedCarbonSDK;
  }

  public disconnect(): CarbonSDK {
    return new CarbonSDK({
      ...this,
      wallet: null,
      skipInit: true,
    });
  }

  public async connectWithPrivateKey(privateKey: string | Buffer, opts?: CarbonWalletGenericOpts) {
    const wallet = CarbonWallet.withPrivateKey(privateKey, {
      ...opts,
      network: this.network,
      config: this.configOverride,
    });
    return this.connect(wallet);
  }

  public async connectWithMnemonic(mnemonic: string, opts?: CarbonWalletGenericOpts) {
    const wallet = CarbonWallet.withMnemonic(mnemonic, {
      ...opts,
      network: this.network,
      config: this.configOverride,
    });
    return this.connect(wallet);
  }

  public async connectWithSigner(signer: CarbonSigner, publicKeyBase64: string, opts?: CarbonWalletGenericOpts) {
    const wallet = CarbonWallet.withSigner(signer, publicKeyBase64, {
      ...opts,
      network: this.network,
      config: this.configOverride,
    });
    return this.connect(wallet);
  }

  public async connectWithLedger(ledger: CosmosLedger, opts?: CarbonWalletGenericOpts) {
    const publicKeyBuffer = await ledger.getPubKey();
    const publicKeyBase64 = publicKeyBuffer.toString("base64");

    const wallet = CarbonWallet.withLedger(ledger, publicKeyBase64, {
      ...opts,
      network: this.network,
      config: this.configOverride,
    });
    return this.connect(wallet);
  }

  public async connectWithKeplr(keplr: Keplr, opts?: CarbonWalletGenericOpts) {
    const chainInfo = await KeplrAccount.getChainInfo(this);
    const chainId = chainInfo.chainId;
    await keplr.experimentalSuggestChain(chainInfo);

    const keplrKey = await keplr.getKey(chainId);
    await keplr.enable(chainId);

    const wallet = CarbonWallet.withKeplr(keplr, chainInfo, keplrKey, {
      ...opts,
      network: this.network,
      config: this.configOverride,
    });
    return this.connect(wallet);
  }

  public async connectWithLeap(leap: LeapExtended, opts?: CarbonWalletGenericOpts) {
    const chainId = this.chainId;
    const chainInfo = await LeapAccount.getChainInfo(this);
    await leap.experimentalSuggestChain(chainInfo);

    const leapKey = await leap.getKey(chainId);
    await leap.enable(chainId);

    const wallet = CarbonWallet.withLeap(leap, chainId, leapKey, {
      ...opts,
      network: this.network,
      config: this.configOverride,
    });
    return this.connect(wallet);
  }

  public async connectViewOnly(bech32Address: string, opts?: CarbonWalletGenericOpts) {
    const wallet = CarbonWallet.withAddress(bech32Address, {
      ...opts,
      network: this.network,
      config: this.configOverride,
    });
    return this.connect(wallet);
  }

  public getConfig(): NetworkConfig {
    return this.networkConfig;
  }

  public getTokenClient(): TokenClient {
    return this.token;
  }

  public getConnectedWallet(): CarbonWallet {
    return this.checkWallet();
  }

  public log(...args: any[]) {
    console.log.apply(console.log, [this.constructor.name, ...args]);
  }

  private checkWallet(): CarbonWallet {
    if (!this.wallet) {
      throw new Error("wallet not connected");
    }

    return this.wallet;
  }

  public static parseNetwork = NetworkUtils.parseNetwork;
}

export class ConnectedCarbonSDK extends CarbonSDK {
  wallet: CarbonWallet;

  constructor(wallet: CarbonWallet, opts: CarbonSDKOpts) {
    super(opts);
    this.wallet = wallet;
  }

  public clone(): ConnectedCarbonSDK {
    return new ConnectedCarbonSDK(this.wallet, this.generateOpts());
  }
}

namespace CarbonSDK {
  export import Network = _Network;
  export import CarbonQueryClient = clients.CarbonQueryClient;
  export import ETHClient = clients.ETHClient;
  export import HydrogenClient = clients.HydrogenClient;
  export import InsightsQueryClient = clients.InsightsQueryClient;
  export import NEOClient = clients.NEOClient;
  export import TokenClient = clients.TokenClient;
  export import ZILClient = clients.ZILClient;
}

export default CarbonSDK;
