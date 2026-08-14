import { SimpleMap } from "@carbon-sdk/util/type";
import { AppCurrency, Bech32Config, ChainInfo } from "@keplr-wallet/types";
import * as bech32 from "bech32";
import { CARBON_GAS_PRICE, GasPriceStep } from "./generic";
import { DenomPrefix } from "./token";

export interface ChainInfoExplorerTmRpc extends ChainInfo {
  // Formed as "https://explorer.com/{txHash}"
  explorerUrlToTx: string;
  tmRpc?: string;
}

export const IBCAddress = {
  getAddressBytes(bech32Address: string, prefix?: string): Uint8Array {
    const decoded = bech32.decode(bech32Address);
    if (prefix && decoded.prefix !== prefix) {
      throw new Error("Unmatched prefix");
    }

    return new Uint8Array(bech32.fromWords(decoded.words));
  },

  defaultBech32Config(
    mainPrefix: string,
    validatorPrefix: string = "val",
    consensusPrefix: string = "cons",
    publicPrefix: string = "pub",
    operatorPrefix: string = "oper"
  ): Bech32Config {
    return {
      bech32PrefixAccAddr: mainPrefix,
      bech32PrefixAccPub: mainPrefix + publicPrefix,
      bech32PrefixValAddr: mainPrefix + validatorPrefix + operatorPrefix,
      bech32PrefixValPub: mainPrefix + validatorPrefix + operatorPrefix + publicPrefix,
      bech32PrefixConsAddr: mainPrefix + validatorPrefix + consensusPrefix,
      bech32PrefixConsPub: mainPrefix + validatorPrefix + consensusPrefix + publicPrefix,
    };
  },

  deriveAddressFromBytes(bytes: Uint8Array, prefix: string): string {
    const words = bech32.toWords(bytes);
    return bech32.encode(prefix, words);
  },
};

export enum ChainIds {
  Osmosis = "osmosis-1",
  CosmosHub = "cosmoshub-4",
  Terra = "columbus-5",
  Secret = "secret-4",
  Akash = "akashnet-2",
  Regen = "regen-1",
  Sentinel = "sentinelhub-2",
  Persistence = "core-1",
  IrisNet = "irishub-1",
  CryptoOrg = "crypto-org-chain-mainnet-1",
  Starname = "iov-mainnet-ibc",
  EMoney = "emoney-3",
  Juno = "juno-1",
  Evmos = "evmos_9001-2",
  Microtick = "microtick-1",
  LikeCoin = "likecoin-mainnet-2",
  IXO = "impacthub-3",
  BitCanna = "bitcanna-1",
  BitSong = "bitsong-2b",
  KiChain = "kichain-2",
  MediBloc = "panacea-3",
  Bostrom = "bostrom",
  Comdex = "comdex-1",
  Cheqd = "cheqd-mainnet-1",
  Stargaze = "stargaze-1",
  Chihuahua = "chihuahua-1",
  LumNetwork = "lum-network-1",
  Vidulum = "vidulum-1",
  Desmos = "desmos-mainnet",
  Dig = "dig-1",
  Sommelier = "sommelier-3",
  Sifchain = "sifchain-1",
  BandChain = "laozi-mainnet",
  Konstellation = "darchub",
  Umee = "umee-1",
  GravityBridge = "gravity-bridge-3",
  Decentr = "mainnet-3",
  Certik = "shentu-2.2",
  Carbon = "carbon-1",
  Axelar = "axelar-dojo-1",
  Stride = "stride-1",
  Kujira = "kaiyo-1",
  Terra2 = "phoenix-1",
  Quicksilver = "quicksilver-2",
  StafiHub = "stafihub-1",
  Canto = "canto_7700-1",
  OmniFlixHub = "omniflixhub-1",
  Agoric = "agoric-3",
  Noble = "noble-1",
}

export enum CarbonIbcLifecycleStatus {
  Supported = "supported",
  Deprecated = "deprecated",
}

/**
 * Carbon's supported IBC topology from Switcheo/carbon#1239. Every other
 * counterparty chain ID is in sunset scope. Registry names are maintained here
 * because chain IDs and Cosmos Chain Registry directory names are not
 * interchangeable identifiers.
 */
export const CarbonSupportedIbcChains: SimpleMap<{
  registryChainName: string;
  channels: ChannelSet;
}> = {
  [ChainIds.Axelar]: {
    registryChainName: "axelar",
    channels: { sourceChannel: "channel-7", dstChannel: "channel-37" },
  },
  [ChainIds.Osmosis]: {
    registryChainName: "osmosis",
    channels: { sourceChannel: "channel-0", dstChannel: "channel-188" },
  },
  [ChainIds.Noble]: {
    registryChainName: "noble",
    channels: { sourceChannel: "channel-29", dstChannel: "channel-16" },
  },
};

export const CarbonSupportedIbcChainIds: string[] = Object.keys(CarbonSupportedIbcChains);

export const getCarbonIbcLifecycleStatus = (chainId: string): CarbonIbcLifecycleStatus => (
  Object.prototype.hasOwnProperty.call(CarbonSupportedIbcChains, chainId)
    ? CarbonIbcLifecycleStatus.Supported
    : CarbonIbcLifecycleStatus.Deprecated
);

// whitelisted networks for addition of swth as a currency
export const swthIbcWhitelist: string[] = [ChainIds.Osmosis];
// Carbon transfer support uses the exact policy above; do not maintain a second list.
export const ibcWhitelist: string[] = CarbonSupportedIbcChainIds;

export const EmbedChainInfosInit: SimpleMap<ChainInfoExplorerTmRpc> = {
  [ChainIds.Osmosis]: {
    rpc: "https://rpc-osmosis.keplr.app",
    rest: "https://lcd-osmosis.keplr.app",
    chainId: "osmosis-1",
    chainName: "Osmosis",
    stakeCurrency: {
      coinDenom: "OSMO",
      coinMinimalDenom: "uosmo",
      coinDecimals: 6,
      coinGeckoId: "osmosis",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: IBCAddress.defaultBech32Config("osmo"),
    currencies: [
      {
        coinDenom: "OSMO",
        coinMinimalDenom: "uosmo",
        coinDecimals: 6,
        coinGeckoId: "osmosis",
      },
      {
        coinDenom: "ION",
        coinMinimalDenom: "uion",
        coinDecimals: 6,
        coinGeckoId: "ion",
      },
      {
        coinDenom: "axlUSDC",
        coinMinimalDenom: "ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858",
        coinDecimals: 6,
        coinGeckoId: "usd-coin",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "OSMO",
        coinMinimalDenom: "uosmo",
        coinDecimals: 6,
        coinGeckoId: "osmosis",
        gasPriceStep: {
          low: 0,
          average: 0.025,
          high: 0.04,
        },
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://www.mintscan.io/osmosis/txs/{txHash}",
    tmRpc: "https://rpc-osmosis.blockapsis.com/",
  },
  [ChainIds.Axelar]: {
    feeCurrencies: [
      {
        coinDenom: "AXL",
        coinMinimalDenom: "uaxl",
        coinDecimals: 6,
        coinGeckoId: "", // TODO: fill in when available
        gasPriceStep: {
          low: 0.007,
          average: 0.007,
          high: 0.01,
        },
      },
    ],
    bip44: { coinType: 118 },
    currencies: [
      {
        coinDenom: "AXL",
        coinMinimalDenom: "uaxl",
        coinDecimals: 6,
        coinGeckoId: "", // TODO: fill in when available
      },
      {
        coinDenom: "USDC",
        coinMinimalDenom: "uusdc",
        coinDecimals: 6,
        coinGeckoId: "usd-coin",
      },
    ],
    stakeCurrency: {
      coinDenom: "AXL",
      coinMinimalDenom: "uaxl",
      coinDecimals: 6,
      coinGeckoId: "", // TODO: fill in when available
    },
    rpc: "https://rpc-axelar.keplr.app",
    rest: "https://lcd-axelar.keplr.app",
    chainName: "Axelar",
    chainId: ChainIds.Axelar,
    bech32Config: IBCAddress.defaultBech32Config("axelar"),
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://axelarscan.io/tx/{txHash}",
  },
};

export type AssetListObj = SimpleMap<SimpleMap<AppCurrency>>;

export interface ChannelConfig {
  ibc: ChannelSet;
  cw20?: CosmWasmChannelSet;
}

export interface ChannelSet {
  sourceChannel: string;
  dstChannel: string;
}

export interface CosmWasmChannelSet extends ChannelSet {
  portId: string;
}

export const swthChannels: SimpleMap<ChannelConfig> = CarbonSupportedIbcChainIds.reduce(
  (channels, chainId) => {
    channels[chainId] = { ibc: CarbonSupportedIbcChains[chainId].channels };
    return channels;
  },
  {} as SimpleMap<ChannelConfig>,
);

export const cibtIbcTokenRegex = RegExp(`^${DenomPrefix.CDPToken}/ibc/([a-f\\d]+)$`, "i");
export const ibcTokenRegex = /^ibc\/([a-f\d]+)$/i;
export const cw20TokenRegex = /^cw20:([a-z\d]+)$/i;
export const factoryIbcMinimalDenomRegex = /^factory:([a-z\d]+):([a-z\d]+)$/i;

export const cosmBridgeRegex = /^wasm\.([a-z\d]+)$/i;

export const ibcNetworkRegex = /^([a-z\d_-]+)-([\d]+)$/i;

export const ibcTransferChannelRegex = /^transfer\/channel-(\d+)/i;

export const ibcDefaultGas: number = 300000;

export const ibcGasOverride: {
  [index in ChainIds]?: number;
} = {
  [ChainIds.Osmosis]: 500000,
}

export const DefaultGasPriceStep: GasPriceStep = {
  low: 0.01,
  average: 0.025,
  high: 0.04,
};

export type MinimalDenomMap = SimpleMap<string>;

export interface ExtendedChainInfo extends ChainInfo {
  minimalDenomMap: MinimalDenomMap;
  bestRpcs: URLProviderObj[];
  activeRpc?: string;
  /** Carbon's lifecycle policy for this IBC counterparty. */
  carbonLifecycleStatus?: CarbonIbcLifecycleStatus;
  /** Cosmos Chain Registry lifecycle status observed while loading this metadata. */
  registryStatus?: string;
  /**
   * Derived transfer eligibility. This is separate from the canonical Carbon
   * bridge.enabled value and is false when that bridge is disabled, Carbon has
   * deprecated the counterparty, or the canonical registry reports it killed.
   * Always populated by IBCModule.getChainInfoMap; optional for source compatibility.
   */
  isTransferAvailable?: boolean;
}

export interface URLProviderObj {
  address: string;
  provider: string;
}

export interface ExplorerObj {
  kind?: string;
  tx_page: string;
  url: string;
}

export interface Asset {
  name: string;
  description: string;
  symbol: string;
  denom: string;
  decimals: number;
  coingecko_id: string;
  base: string;
  display: DenomUnit;
  denom_units: DenomUnit[];
  logo_URIs: LogoURIs;
  image: string;
  prices?: Prices;
}

export interface DenomUnit {
  denom: string;
  exponent: number;
}

export interface FeeToken {
  denom: string,
  fixed_min_gas_price: number,
  low_gas_price: number,
  average_gas_price: number,
  high_gas_price: number
}

interface LogoURIs {
  png: string;
  svg: string;
}

interface Prices {
  coingecko: Coingecko;
}

interface Coingecko {
  usd: number;
}


export interface ChainRegistryItem {
  name: string;
  path: string;
  chain_name: string;
  network_type: string;
  pretty_name: string;
  chain_id: string;
  cosmwasm_enabled?: boolean;
  status: string;
  bech32_prefix: string;
  symbol: string;
  display: string;
  denom: string;
  decimals: number;
  coingecko_id: string;
  image: string;
  website: string;
  height: number;
  best_apis: {
    rpc: URLProviderObj[];
    rest: URLProviderObj[];
  };
  proxy_status: {
    rest: boolean;
    rpc: boolean;
  };
  versions: {
    application_version: string;
    cosmos_sdk_version: string;
    tendermint_version: string;
  };
  explorers: ExplorerObj[];
  params: any;
  services?: any;
  prices?: {
    coingecko: SimpleMap<SimpleMap<number>>;
  };
  assets: Asset[];
  keywords: any[];
}

export interface CosmosChainsObj {
  chains: ChainRegistryItem[];
  repository: {
    branch: string;
    commit: string;
    timestamp: string;
    url: string;
  };
}
