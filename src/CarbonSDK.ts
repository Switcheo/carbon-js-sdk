import { DEFAULT_NETWORK, Network, Network as _Network, NetworkConfig, NetworkConfigs } from "@carbon-sdk/constant";
import { GenericUtils, NetworkUtils } from "@carbon-sdk/util";
import { OfflineDirectSigner, OfflineSigner } from "@cosmjs/proto-signing";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { CarbonQueryClient, ETHClient, InsightsQueryClient, NEOClient, TokenClient, ZILClient } from "./clients";
import { AdminModule, BankModule, BrokerModule, CDPModule, CoinModule, FeeModule, GovModule, LeverageModule, LiquidityPoolModule, MarketModule, OracleModule, OrderModule, PositionModule, ProfileModule, SubAccountModule } from "./modules";
import { StakingModule } from "./modules/staking";
import { CosmosLedger } from "./provider";
import { Blockchain } from "./util/blockchain";
import { CarbonSigner, CarbonWallet, CarbonWalletGenericOpts } from "./wallet";

export { CarbonTx } from "@carbon-sdk/util";
export { CarbonSigner, CarbonSignerTypes, CarbonWallet, CarbonWalletGenericOpts, CarbonWalletInitOpts } from "@carbon-sdk/wallet";


export interface CarbonSDKOpts {
  network: Network;
  tmClient: Tendermint34Client;
  config?: Partial<NetworkConfig>;
}
export interface CarbonSDKInitOpts {
  network: Network;
  tmClient?: Tendermint34Client;
  config?: Partial<NetworkConfig>;
  wallet?: CarbonWallet;

  skipInit?: boolean
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
  public static TokenClient = TokenClient

  public readonly query: CarbonQueryClient;
  insights: InsightsQueryClient;

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

  neo: NEOClient;
  eth: ETHClient;
  bsc: ETHClient;
  zil: ZILClient;

  constructor(opts: CarbonSDKOpts) {
    this.network = opts.network ?? DEFAULT_NETWORK;
    this.configOverride = opts.config ?? {};
    this.networkConfig = GenericUtils.overrideConfig(NetworkConfigs[this.network], this.configOverride);

    this.tmClient = opts.tmClient;
    this.query = new CarbonQueryClient(opts.tmClient);
    this.insights = new InsightsQueryClient(this.networkConfig);
    this.token = TokenClient.instance(this.query, this);

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

    this.neo = NEOClient.instance({
      configProvider: this,
      blockchain: Blockchain.Neo,
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
    })
  }

  public static async instance(opts: CarbonSDKInitOpts = DEFAULT_SDK_INIT_OPTS) {
    const network = opts.network ?? DEFAULT_NETWORK;
    const configOverride = opts.config ?? {};

    const networkConfig = GenericUtils.overrideConfig(NetworkConfigs[network], configOverride);
    const tmClient = await Tendermint34Client.connect(networkConfig.tmRpcUrl);

    const sdk = new CarbonSDK({ network, config: configOverride, tmClient });

    if (opts.wallet) {
      await sdk.connect(opts.wallet);
    }

    if (opts.skipInit !== true) {
      await sdk.initialize();
    }

    return sdk;
  }

  public static async instanceWithWallet(
    wallet: CarbonWallet,
    sdkOpts: CarbonSDKInitOpts = DEFAULT_SDK_INIT_OPTS,
  ) {
    const sdk = await CarbonSDK.instance(sdkOpts);
    return sdk.connect(wallet);
  }

  public static async instanceWithPrivateKey(
    privateKey: string | Buffer,
    sdkOpts: CarbonSDKInitOpts = DEFAULT_SDK_INIT_OPTS,
    walletOpts?: CarbonWalletGenericOpts,
  ) {
    const sdk = await CarbonSDK.instance(sdkOpts);
    return sdk.connectWithPrivateKey(privateKey, walletOpts);
  }

  public static async instanceWithMnemonic(
    mnemonic: string,
    sdkOpts: CarbonSDKInitOpts = DEFAULT_SDK_INIT_OPTS,
    walletOpts?: CarbonWalletGenericOpts,
  ) {
    const sdk = await CarbonSDK.instance(sdkOpts);
    return sdk.connectWithMnemonic(mnemonic, walletOpts);
  }

  public static async instanceWithSigner(
    signer: CarbonSigner,
    publicKeyBase64: string,
    sdkOpts: CarbonSDKInitOpts = DEFAULT_SDK_INIT_OPTS,
    walletOpts?: CarbonWalletGenericOpts,
    customSigner?: OfflineSigner & OfflineDirectSigner,
  ) {
    const sdk = await CarbonSDK.instance(sdkOpts);
    return sdk.connectWithSigner(signer, publicKeyBase64, walletOpts, customSigner);
  }

  public static async instanceWithLedger(
    ledger: CosmosLedger,
    sdkOpts: CarbonSDKInitOpts = DEFAULT_SDK_INIT_OPTS,
    walletOpts?: CarbonWalletGenericOpts,
  ) {
    const sdk = await CarbonSDK.instance(sdkOpts);
    return sdk.connectWithLedger(ledger, walletOpts);
  }

  public static async instanceViewOnly(
    bech32Address: string,
    sdkOpts: CarbonSDKInitOpts = DEFAULT_SDK_INIT_OPTS,
    walletOpts?: CarbonWalletGenericOpts,
  ) {
    const sdk = await CarbonSDK.instance(sdkOpts);
    return sdk.connectViewOnly(bech32Address, walletOpts);
  }

  public async initialize(): Promise<CarbonSDK> {
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
    }
  }

  public async connect(wallet: CarbonWallet): Promise<ConnectedCarbonSDK> {
    if (!wallet.initialized)
      await wallet.initialize(this.query);
    this.wallet = wallet;
    return this as ConnectedCarbonSDK;
  }

  public async connectWithPrivateKey(
    privateKey: string | Buffer,
    opts?: CarbonWalletGenericOpts,
  ) {
    const wallet = CarbonWallet.withPrivateKey(privateKey, {
      ...opts,
      network: this.network,
      config: this.configOverride,
    })
    return this.connect(wallet)
  }

  public async connectWithMnemonic(
    mnemonic: string,
    opts?: CarbonWalletGenericOpts,
  ) {
    const wallet = CarbonWallet.withMnemonic(mnemonic, {
      ...opts,
      network: this.network,
      config: this.configOverride,
    })
    return this.connect(wallet)
  }

  public async connectWithSigner(
    signer: CarbonSigner,
    publicKeyBase64: string,
    opts?: CarbonWalletGenericOpts,
    customSigner?: OfflineSigner & OfflineDirectSigner,
  ) {
    const wallet = CarbonWallet.withSigner(signer, publicKeyBase64, {
      ...opts,
      network: this.network,
      config: this.configOverride,
      customSigner,
    })
    return this.connect(wallet)
  }

  public async connectWithLedger(
    ledger: CosmosLedger,
    opts?: CarbonWalletGenericOpts,
  ) {
    const publicKeyBuffer = await ledger.getPubKey();
    const publicKeyBase64 = publicKeyBuffer.toString("base64");

    const wallet = CarbonWallet.withLedger(ledger, publicKeyBase64, {
      ...opts,
      network: this.network,
      config: this.configOverride,
    })
    return this.connect(wallet)
  }

  public async connectViewOnly(
    bech32Address: string,
    opts?: CarbonWalletGenericOpts,
  ) {

    const wallet = CarbonWallet.withAddress(bech32Address, {
      ...opts,
      network: this.network,
      config: this.configOverride,
    })
    return this.connect(wallet)
  }

  public getConfig(): NetworkConfig {
    return this.networkConfig;
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
  wallet: CarbonWallet

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
}

export default CarbonSDK;
