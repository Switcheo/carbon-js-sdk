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
}

// whitelisted networks for addition of swth as a currency
export const swthIbcWhitelist: string[] = [ChainIds.Osmosis];
// whitelisted networks for addition of transfer options
export const ibcWhitelist: string[] = [
  ChainIds.Osmosis,
  ChainIds.Terra,
  ChainIds.CosmosHub,
  ChainIds.Juno,
  ChainIds.Evmos,
  ChainIds.Axelar,
  ChainIds.Stride,
  ChainIds.Kujira,
  ChainIds.Terra2,
  ChainIds.Quicksilver,
  ChainIds.Comdex,
  ChainIds.StafiHub,
  ChainIds.Persistence,
  ChainIds.Stargaze,
  ChainIds.Canto,
  ChainIds.OmniFlixHub,
  ChainIds.Agoric,
  ChainIds.Sommelier,
];

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
  [ChainIds.CosmosHub]: {
    rpc: "https://rpc-cosmoshub.keplr.app",
    rest: "https://lcd-cosmoshub.keplr.app",
    chainId: "cosmoshub-4",
    chainName: "Cosmos Hub",
    stakeCurrency: {
      coinDenom: "ATOM",
      coinMinimalDenom: "uatom",
      coinDecimals: 6,
      coinGeckoId: "cosmos",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: IBCAddress.defaultBech32Config("cosmos"),
    currencies: [
      {
        coinDenom: "ATOM",
        coinMinimalDenom: "uatom",
        coinDecimals: 6,
        coinGeckoId: "cosmos",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "ATOM",
        coinMinimalDenom: "uatom",
        coinDecimals: 6,
        coinGeckoId: "cosmos",
      },
    ],
    coinType: 118,
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://www.mintscan.io/cosmos/txs/{txHash}",
    tmRpc: "https://rpc.cosmos.network/",
  },
  [ChainIds.Terra]: {
    rpc: "https://rpc-columbus.keplr.app",
    rest: "https://lcd-columbus.keplr.app",
    chainId: "columbus-5",
    chainName: "Terra",
    stakeCurrency: {
      coinDenom: "LUNA",
      coinMinimalDenom: "uluna",
      coinDecimals: 6,
      coinGeckoId: "terra-luna",
    },
    bip44: {
      coinType: 330,
    },
    bech32Config: IBCAddress.defaultBech32Config("terra"),
    currencies: [
      {
        coinDenom: "LUNA",
        coinMinimalDenom: "uluna",
        coinDecimals: 6,
        coinGeckoId: "terra-luna",
      },
      {
        coinDenom: "UST",
        coinMinimalDenom: "uusd",
        coinDecimals: 6,
        coinGeckoId: "terrausd",
      },
      {
        coinDenom: "KRT",
        coinMinimalDenom: "ukrw",
        coinDecimals: 6,
        coinGeckoId: "terra-krw",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "LUNA",
        coinMinimalDenom: "uluna",
        coinDecimals: 6,
        coinGeckoId: "terra-luna",
        gasPriceStep: {
          low: 0.15,
          average: 0.2,
          high: 0.25,
        },
      },
      {
        coinDenom: "UST",
        coinMinimalDenom: "uusd",
        coinDecimals: 6,
        coinGeckoId: "terrausd",
        gasPriceStep: {
          low: 0.15,
          average: 0.2,
          high: 0.25,
        },
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://finder.terra.money/columbus-5/tx/{txHash}",
    tmRpc: "https://terra-rpc.easy2stake.com/",
  },
  [ChainIds.Secret]: {
    rpc: "https://rpc-secret.keplr.app",
    rest: "https://lcd-secret.keplr.app",
    chainId: "secret-4",
    chainName: "Secret Network",
    stakeCurrency: {
      coinDenom: "SCRT",
      coinMinimalDenom: "uscrt",
      coinDecimals: 6,
      coinGeckoId: "secret",
    },
    bip44: {
      coinType: 529,
    },
    bech32Config: IBCAddress.defaultBech32Config("secret"),
    currencies: [
      {
        coinDenom: "SCRT",
        coinMinimalDenom: "uscrt",
        coinDecimals: 6,
        coinGeckoId: "secret",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "SCRT",
        coinMinimalDenom: "uscrt",
        coinDecimals: 6,
        coinGeckoId: "secret",
      },
    ],
    coinType: 118,
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://secretnodes.com/secret/chains/secret-4/transactions/{txHash}",
  },
  [ChainIds.Akash]: {
    rpc: "https://rpc-akash.keplr.app",
    rest: "https://lcd-akash.keplr.app",
    chainId: "akashnet-2",
    chainName: "Akash",
    stakeCurrency: {
      coinDenom: "AKT",
      coinMinimalDenom: "uakt",
      coinDecimals: 6,
      coinGeckoId: "akash-network",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: IBCAddress.defaultBech32Config("akash"),
    currencies: [
      {
        coinDenom: "AKT",
        coinMinimalDenom: "uakt",
        coinDecimals: 6,
        coinGeckoId: "akash-network",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "AKT",
        coinMinimalDenom: "uakt",
        coinDecimals: 6,
        coinGeckoId: "akash-network",
      },
    ],
    coinType: 118,
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://www.mintscan.io/akash/txs/{txHash}",
  },
  [ChainIds.Regen]: {
    rpc: "https://rpc-regen.keplr.app",
    rest: "https://lcd-regen.keplr.app",
    chainId: "regen-1",
    chainName: "Regen Network",
    stakeCurrency: {
      coinDenom: "REGEN",
      coinMinimalDenom: "uregen",
      coinDecimals: 6,
      coinGeckoId: "regen",
    },
    bip44: { coinType: 118 },
    bech32Config: IBCAddress.defaultBech32Config("regen"),
    currencies: [
      {
        coinDenom: "REGEN",
        coinMinimalDenom: "uregen",
        coinDecimals: 6,
        coinGeckoId: "regen",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "REGEN",
        coinMinimalDenom: "uregen",
        coinDecimals: 6,
        coinGeckoId: "regen",
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://regen.aneka.io/txs/{txHash}",
  },
  [ChainIds.Sentinel]: {
    rpc: "https://rpc-sentinel.keplr.app",
    rest: "https://lcd-sentinel.keplr.app",
    chainId: "sentinelhub-2",
    chainName: "Sentinel",
    stakeCurrency: {
      coinDenom: "DVPN",
      coinMinimalDenom: "udvpn",
      coinDecimals: 6,
      coinGeckoId: "sentinel",
    },
    bip44: { coinType: 118 },
    bech32Config: IBCAddress.defaultBech32Config("sent"),
    currencies: [
      {
        coinDenom: "DVPN",
        coinMinimalDenom: "udvpn",
        coinDecimals: 6,
        coinGeckoId: "sentinel",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "DVPN",
        coinMinimalDenom: "udvpn",
        coinDecimals: 6,
        coinGeckoId: "sentinel",
      },
    ],
    explorerUrlToTx: "https://www.mintscan.io/sentinel/txs/{txHash}",
    features: ["ibc-transfer", "ibc-go"],
  },
  [ChainIds.Persistence]: {
    rpc: "https://rpc-persistence.keplr.app",
    rest: "https://lcd-persistence.keplr.app",
    chainId: "core-1",
    chainName: "Persistence",
    stakeCurrency: {
      coinDenom: "XPRT",
      coinMinimalDenom: "uxprt",
      coinDecimals: 6,
      coinGeckoId: "persistence",
    },
    bip44: {
      coinType: 750,
    },
    bech32Config: IBCAddress.defaultBech32Config("persistence"),
    currencies: [
      {
        coinDenom: "XPRT",
        coinMinimalDenom: "uxprt",
        coinDecimals: 6,
        coinGeckoId: "persistence",
      },
      {
        coinDenom: "PSTAKE",
        coinMinimalDenom: "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444",
        coinDecimals: 18,
        coinGeckoId: "pstake-finance",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "XPRT",
        coinMinimalDenom: "uxprt",
        coinDecimals: 6,
        coinGeckoId: "persistence",
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://www.mintscan.io/persistence/txs/{txHash}",
  },
  [ChainIds.IrisNet]: {
    rpc: "https://rpc-iris.keplr.app",
    rest: "https://lcd-iris.keplr.app",
    chainId: "irishub-1",
    chainName: "IRISnet",
    stakeCurrency: {
      coinDenom: "IRIS",
      coinMinimalDenom: "uiris",
      coinDecimals: 6,
      coinGeckoId: "iris-network",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: IBCAddress.defaultBech32Config("iaa"),
    currencies: [
      {
        coinDenom: "IRIS",
        coinMinimalDenom: "uiris",
        coinDecimals: 6,
        coinGeckoId: "iris-network",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "IRIS",
        coinMinimalDenom: "uiris",
        coinDecimals: 6,
        coinGeckoId: "iris-network",
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://www.mintscan.io/iris/txs/{txHash}",
  },
  [ChainIds.CryptoOrg]: {
    rpc: "https://rpc-crypto-org.keplr.app/",
    rest: "https://lcd-crypto-org.keplr.app/",
    chainId: "crypto-org-chain-mainnet-1",
    chainName: "Crypto.org",
    stakeCurrency: {
      coinDenom: "CRO",
      coinMinimalDenom: "basecro",
      coinDecimals: 8,
      coinGeckoId: "crypto-com-chain",
    },
    bip44: {
      coinType: 394,
    },
    bech32Config: IBCAddress.defaultBech32Config("cro"),
    currencies: [
      {
        coinDenom: "CRO",
        coinMinimalDenom: "basecro",
        coinDecimals: 8,
        coinGeckoId: "crypto-com-chain",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "CRO",
        coinMinimalDenom: "basecro",
        coinDecimals: 8,
        coinGeckoId: "crypto-com-chain",
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://www.mintscan.io/crypto-org/txs/{txHash}",
  },
  [ChainIds.Starname]: {
    rpc: "https://rpc-iov.keplr.app",
    rest: "https://lcd-iov.keplr.app",
    chainId: "iov-mainnet-ibc",
    chainName: "Starname",
    stakeCurrency: {
      coinDenom: "IOV",
      coinMinimalDenom: "uiov",
      coinDecimals: 6,
      coinGeckoId: "starname",
    },
    bip44: {
      coinType: 234,
    },
    bech32Config: IBCAddress.defaultBech32Config("star"),
    currencies: [
      {
        coinDenom: "IOV",
        coinMinimalDenom: "uiov",
        coinDecimals: 6,
        coinGeckoId: "starname",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "IOV",
        coinMinimalDenom: "uiov",
        coinDecimals: 6,
        coinGeckoId: "starname",
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://www.mintscan.io/starname/txs/{txHash}",
  },
  [ChainIds.EMoney]: {
    rpc: "https://rpc-emoney.keplr.app",
    rest: "https://lcd-emoney.keplr.app",
    chainId: "emoney-3",
    chainName: "e-Money",
    stakeCurrency: {
      coinDenom: "NGM",
      coinMinimalDenom: "ungm",
      coinDecimals: 6,
      coinGeckoId: "e-money",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: IBCAddress.defaultBech32Config("emoney"),
    currencies: [
      {
        coinDenom: "NGM",
        coinMinimalDenom: "ungm",
        coinDecimals: 6,
        coinGeckoId: "e-money",
      },
      {
        coinDenom: "EEUR",
        coinMinimalDenom: "eeur",
        coinDecimals: 6,
        coinGeckoId: "e-money-eur",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "NGM",
        coinMinimalDenom: "ungm",
        coinDecimals: 6,
        coinGeckoId: "e-money",
        gasPriceStep: {
          low: 1,
          average: 1,
          high: 1,
        },
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://emoney.bigdipper.live/transactions/{txHash}",
  },
  [ChainIds.Juno]: {
    rpc: "https://rpc-juno.keplr.app",
    rest: "https://lcd-juno.keplr.app",
    chainId: "juno-1",
    chainName: "Juno",
    stakeCurrency: {
      coinDenom: "JUNO",
      coinMinimalDenom: "ujuno",
      coinDecimals: 6,
      coinGeckoId: "juno-network",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: IBCAddress.defaultBech32Config("juno"),
    currencies: [
      {
        coinDenom: "JUNO",
        coinMinimalDenom: "ujuno",
        coinDecimals: 6,
        coinGeckoId: "juno-network",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "JUNO",
        coinMinimalDenom: "ujuno",
        coinDecimals: 6,
        coinGeckoId: "juno-network",
        gasPriceStep: {
          low: 0.001,
          average: 0.0025,
          high: 0.004,
        },
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://www.mintscan.io/juno/txs/{txHash}",
  },
  [ChainIds.Evmos]: {
    rpc: "https://rpc-evmos.keplr.app/",
    rest: "https://lcd-evmos.keplr.app/",
    chainId: "evmos_9001-2",
    chainName: "Evmos",
    stakeCurrency: {
      coinDenom: "EVMOS",
      coinMinimalDenom: "aevmos",
      coinDecimals: 18,
      coinGeckoId: "evmos",
    },
    bip44: {
      coinType: 60,
    },
    bech32Config: IBCAddress.defaultBech32Config("evmos"),
    currencies: [
      {
        coinDenom: "EVMOS",
        coinMinimalDenom: "aevmos",
        coinDecimals: 18,
        coinGeckoId: "evmos",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "EVMOS",
        coinMinimalDenom: "aevmos",
        coinDecimals: 18,
        coinGeckoId: "evmos",
        gasPriceStep: {
          low: 25000000000,
          average: 25000000000,
          high: 40000000000,
        },
      },
    ],
    features: ["ibc-transfer", "ibc-go", "eth-address-gen", "eth-key-sign"],
    explorerUrlToTx: "https://www.mintscan.io/evmos/txs/{txHash}",
  },
  [ChainIds.Microtick]: {
    rpc: "https://rpc-microtick.keplr.app",
    rest: "https://lcd-microtick.keplr.app",
    chainId: "microtick-1",
    chainName: "Microtick",
    stakeCurrency: {
      coinDenom: "TICK",
      coinMinimalDenom: "utick",
      coinDecimals: 6,
      coinGeckoId: "pool:utick",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: IBCAddress.defaultBech32Config("micro"),
    currencies: [
      {
        coinDenom: "TICK",
        coinMinimalDenom: "utick",
        coinDecimals: 6,
        coinGeckoId: "pool:utick",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "TICK",
        coinMinimalDenom: "utick",
        coinDecimals: 6,
        coinGeckoId: "pool:utick",
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://explorer.microtick.zone/transactions/{txHash}",
  },
  [ChainIds.LikeCoin]: {
    rpc: "https://mainnet-node.like.co/rpc",
    rest: "https://mainnet-node.like.co",
    chainId: "likecoin-mainnet-2",
    chainName: "LikeCoin",
    stakeCurrency: {
      coinDenom: "LIKE",
      coinMinimalDenom: "nanolike",
      coinDecimals: 9,
      coinGeckoId: "likecoin",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: IBCAddress.defaultBech32Config("cosmos"),
    currencies: [
      {
        coinDenom: "LIKE",
        coinMinimalDenom: "nanolike",
        coinDecimals: 9,
        coinGeckoId: "likecoin",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "LIKE",
        coinMinimalDenom: "nanolike",
        coinDecimals: 9,
        coinGeckoId: "likecoin",
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://likecoin.bigdipper.live/transactions/{txHash}",
  },
  [ChainIds.IXO]: {
    rpc: "https://rpc-impacthub.keplr.app",
    rest: "https://lcd-impacthub.keplr.app",
    chainId: "impacthub-3",
    chainName: "IXO",
    stakeCurrency: {
      coinDenom: "IXO",
      coinMinimalDenom: "uixo",
      coinDecimals: 6,
      coinGeckoId: "pool:uixo",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: IBCAddress.defaultBech32Config("ixo"),
    currencies: [
      {
        coinDenom: "IXO",
        coinMinimalDenom: "uixo",
        coinDecimals: 6,
        coinGeckoId: "pool:uixo",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "IXO",
        coinMinimalDenom: "uixo",
        coinDecimals: 6,
        coinGeckoId: "pool:uixo",
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://blockscan.ixo.world/transactions/{txHash}",
  },
  [ChainIds.BitCanna]: {
    rpc: "https://rpc.bitcanna.io",
    rest: "https://lcd.bitcanna.io",
    chainId: "bitcanna-1",
    chainName: "BitCanna",
    stakeCurrency: {
      coinDenom: "BCNA",
      coinMinimalDenom: "ubcna",
      coinDecimals: 6,
      coinGeckoId: "bitcanna",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: IBCAddress.defaultBech32Config("bcna"),
    currencies: [
      {
        coinDenom: "BCNA",
        coinMinimalDenom: "ubcna",
        coinDecimals: 6,
        coinGeckoId: "bitcanna",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "BCNA",
        coinMinimalDenom: "ubcna",
        coinDecimals: 6,
        coinGeckoId: "bitcanna",
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://www.mintscan.io/bitcanna/txs/{txHash}",
    tmRpc: "https://rpc.bitcanna.io/",
  },
  [ChainIds.BitSong]: {
    rpc: "https://rpc.explorebitsong.com",
    rest: "https://lcd.explorebitsong.com",
    chainId: "bitsong-2b",
    chainName: "BitSong",
    stakeCurrency: {
      coinDenom: "BTSG",
      coinMinimalDenom: "ubtsg",
      coinDecimals: 6,
      coinGeckoId: "pool:ubtsg",
    },
    bip44: {
      coinType: 639,
    },
    bech32Config: IBCAddress.defaultBech32Config("bitsong"),
    currencies: [
      {
        coinDenom: "BTSG",
        coinMinimalDenom: "ubtsg",
        coinDecimals: 6,
        coinGeckoId: "pool:ubtsg",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "BTSG",
        coinMinimalDenom: "ubtsg",
        coinDecimals: 6,
        coinGeckoId: "pool:ubtsg",
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://explorebitsong.com/transactions/{txHash}",
    tmRpc: "https://rpc.explorebitsong.com/",
  },
  [ChainIds.KiChain]: {
    rpc: "https://rpc-mainnet.blockchain.ki",
    rest: "https://api-mainnet.blockchain.ki",
    chainId: "kichain-2",
    chainName: "Ki",
    stakeCurrency: {
      coinDenom: "XKI",
      coinMinimalDenom: "uxki",
      coinDecimals: 6,
      coinGeckoId: "pool:uxki",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: IBCAddress.defaultBech32Config("ki"),
    currencies: [
      {
        coinDenom: "XKI",
        coinMinimalDenom: "uxki",
        coinDecimals: 6,
        coinGeckoId: "pool:uxki",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "XKI",
        coinMinimalDenom: "uxki",
        coinDecimals: 6,
        coinGeckoId: "pool:uxki",
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://www.mintscan.io/ki-chain/txs/{txHash}",
    tmRpc: "https://rpc-mainnet.blockchain.ki",
  },
  [ChainIds.MediBloc]: {
    rpc: "https://rpc.gopanacea.org",
    rest: "https://api.gopanacea.org",
    chainId: "panacea-3",
    chainName: "MediBloc",
    stakeCurrency: {
      coinDenom: "MED",
      coinMinimalDenom: "umed",
      coinDecimals: 6,
      coinGeckoId: "medibloc",
    },
    bip44: {
      coinType: 371,
    },
    bech32Config: IBCAddress.defaultBech32Config("panacea"),
    currencies: [
      {
        coinDenom: "MED",
        coinMinimalDenom: "umed",
        coinDecimals: 6,
        coinGeckoId: "medibloc",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "MED",
        coinMinimalDenom: "umed",
        coinDecimals: 6,
        coinGeckoId: "medibloc",
        gasPriceStep: {
          low: 5,
          average: 7,
          high: 9,
        },
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://www.mintscan.io/medibloc/txs/{txHash}",
    tmRpc: "https://rpc.gopanacea.org/",
  },
  [ChainIds.Bostrom]: {
    rpc: "https://rpc.bostrom.cybernode.ai",
    rest: "https://lcd.bostrom.cybernode.ai",
    chainId: "bostrom",
    chainName: "Bostrom",
    stakeCurrency: {
      coinDenom: "BOOT",
      coinMinimalDenom: "boot",
      coinDecimals: 0,
      // coinGeckoId: "pool:boot",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: IBCAddress.defaultBech32Config("bostrom"),
    currencies: [
      {
        coinDenom: "BOOT",
        coinMinimalDenom: "boot",
        coinDecimals: 0,
        // coinGeckoId: "pool:boot",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "BOOT",
        coinMinimalDenom: "boot",
        coinDecimals: 0,
        // coinGeckoId: "pool:boot",
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://cyb.ai/network/bostrom/tx/{txHash}",
    tmRpc: "https://rpc.bostrom.cybernode.ai/",
  },
  [ChainIds.Comdex]: {
    rpc: "https://rpc.comdex.one",
    rest: "https://rest.comdex.one",
    chainId: "comdex-1",
    chainName: "Comdex",
    stakeCurrency: {
      coinDenom: "CMDX",
      coinMinimalDenom: "ucmdx",
      coinDecimals: 6,
      coinGeckoId: "comdex",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: IBCAddress.defaultBech32Config("comdex"),
    currencies: [
      {
        coinDenom: "CMDX",
        coinMinimalDenom: "ucmdx",
        coinDecimals: 6,
        coinGeckoId: "comdex",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "CMDX",
        coinMinimalDenom: "ucmdx",
        coinDecimals: 6,
        coinGeckoId: "comdex",
        gasPriceStep: {
          low: 0.0125,
          average: 0.025,
          high: 0.04,
        },
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://www.mintscan.io/comdex/txs/{txHash}",
    tmRpc: "https://rpc.comdex.one/",
  },
  [ChainIds.Cheqd]: {
    rpc: "https://rpc.cheqd.net",
    rest: "https://api.cheqd.net",
    chainId: "cheqd-mainnet-1",
    chainName: "cheqd",
    stakeCurrency: {
      coinDenom: "CHEQ",
      coinMinimalDenom: "ncheq",
      coinDecimals: 9,
      coinGeckoId: "cheqd-network",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: IBCAddress.defaultBech32Config("cheqd"),
    currencies: [
      {
        coinDenom: "CHEQ",
        coinMinimalDenom: "ncheq",
        coinDecimals: 9,
        coinGeckoId: "cheqd-network",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "CHEQ",
        coinMinimalDenom: "ncheq",
        coinDecimals: 9,
        coinGeckoId: "cheqd-network",
        gasPriceStep: {
          low: 25,
          average: 30,
          high: 50,
        },
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://explorer.cheqd.io/transactions/{txHash}",
    tmRpc: "https://rpc.cheqd.net/",
  },
  [ChainIds.Stargaze]: {
    rpc: "https://rpc.stargaze-apis.com",
    rest: "https://rest.stargaze-apis.com",
    chainId: "stargaze-1",
    chainName: "Stargaze",
    stakeCurrency: {
      coinDenom: "STARS",
      coinMinimalDenom: "ustars",
      coinDecimals: 6,
      coinGeckoId: "pool:ustars",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: IBCAddress.defaultBech32Config("stars"),
    currencies: [
      {
        coinDenom: "STARS",
        coinMinimalDenom: "ustars",
        coinDecimals: 6,
        coinGeckoId: "pool:ustars",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "STARS",
        coinMinimalDenom: "ustars",
        coinDecimals: 6,
        coinGeckoId: "pool:ustars",
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://www.mintscan.io/stargaze/txs/{txHash}",
    tmRpc: "https://rpc.stargaze-apis.com/",
  },
  [ChainIds.Chihuahua]: {
    rpc: "https://rpc.chihuahua.wtf",
    rest: "https://api.chihuahua.wtf",
    chainId: "chihuahua-1",
    chainName: "Chihuahua",
    stakeCurrency: {
      coinDenom: "HUAHUA",
      coinMinimalDenom: "uhuahua",
      coinDecimals: 6,
      coinGeckoId: "pool:uhuahua",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: IBCAddress.defaultBech32Config("chihuahua"),
    currencies: [
      {
        coinDenom: "HUAHUA",
        coinMinimalDenom: "uhuahua",
        coinDecimals: 6,
        coinGeckoId: "pool:uhuahua",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "HUAHUA",
        coinMinimalDenom: "uhuahua",
        coinDecimals: 6,
        coinGeckoId: "pool:uhuahua",
        gasPriceStep: {
          low: 0.025,
          average: 0.03,
          high: 0.035,
        },
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://ping.pub/chihuahua/tx/{txHash}",
  },
  [ChainIds.LumNetwork]: {
    rpc: "https://node0.mainnet.lum.network/rpc",
    rest: "https://node0.mainnet.lum.network/rest",
    chainId: "lum-network-1",
    chainName: "Lum Network",
    stakeCurrency: {
      coinDenom: "LUM",
      coinMinimalDenom: "ulum",
      coinDecimals: 6,
      coinGeckoId: "pool:ulum",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: IBCAddress.defaultBech32Config("lum"),
    currencies: [
      {
        coinDenom: "LUM",
        coinMinimalDenom: "ulum",
        coinDecimals: 6,
        coinGeckoId: "pool:ulum",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "LUM",
        coinMinimalDenom: "ulum",
        coinDecimals: 6,
        coinGeckoId: "pool:ulum",
      },
    ],
    coinType: 118,
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://www.mintscan.io/lum/txs/{txHash}",
    tmRpc: "https://node0.mainnet.lum.network/rpc/",
  },
  [ChainIds.Vidulum]: {
    rpc: "https://mainnet-rpc.vidulum.app",
    rest: "https://mainnet-lcd.vidulum.app",
    chainId: "vidulum-1",
    chainName: "Vidulum",
    stakeCurrency: {
      coinDenom: "VDL",
      coinMinimalDenom: "uvdl",
      coinDecimals: 6,
      coinGeckoId: "vidulum",
    },
    bip44: {
      coinType: 370,
    },
    bech32Config: IBCAddress.defaultBech32Config("vdl"),
    currencies: [
      {
        coinDenom: "VDL",
        coinMinimalDenom: "uvdl",
        coinDecimals: 6,
        coinGeckoId: "vidulum",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "VDL",
        coinMinimalDenom: "uvdl",
        coinDecimals: 6,
        coinGeckoId: "vidulum",
      },
    ],
    coinType: 370,
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://explorers.vidulum.app/vidulum/tx/{txHash}",
    tmRpc: "https://mainnet-rpc.vidulum.app/",
  },
  [ChainIds.Desmos]: {
    rpc: "https://rpc.mainnet.desmos.network",
    rest: "https://api.mainnet.desmos.network",
    chainId: "desmos-mainnet",
    chainName: "Desmos",
    stakeCurrency: {
      coinDenom: "DSM",
      coinMinimalDenom: "udsm",
      coinDecimals: 6,
      coinGeckoId: "pool:udsm",
    },
    bip44: {
      coinType: 852,
    },
    bech32Config: IBCAddress.defaultBech32Config("desmos"),
    currencies: [
      {
        coinDenom: "DSM",
        coinMinimalDenom: "udsm",
        coinDecimals: 6,
        coinGeckoId: "pool:udsm",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "DSM",
        coinMinimalDenom: "udsm",
        coinDecimals: 6,
        coinGeckoId: "pool:udsm",
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://explorer.desmos.network/transactions/{txHash}",
    tmRpc: "https://rpc.mainnet.desmos.network/",
  },
  [ChainIds.Dig]: {
    rpc: "https://rpc-1-dig.notional.ventures",
    rest: "https://api-1-dig.notional.ventures",
    chainId: "dig-1",
    chainName: "Dig",
    stakeCurrency: {
      coinDenom: "DIG",
      coinMinimalDenom: "udig",
      coinDecimals: 6,
      coinGeckoId: "pool:udig",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: IBCAddress.defaultBech32Config("dig"),
    currencies: [
      {
        coinDenom: "DIG",
        coinMinimalDenom: "udig",
        coinDecimals: 6,
        coinGeckoId: "pool:udig",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "DIG",
        coinMinimalDenom: "udig",
        coinDecimals: 6,
        coinGeckoId: "pool:udig",
        gasPriceStep: {
          low: 0.025,
          average: 0.03,
          high: 0.035,
        },
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://ping.pub/dig/tx/{txHash}",
    tmRpc: "https://rpc-1-dig.notional.ventures/",
  },
  [ChainIds.Sommelier]: {
    rpc: "https://rpc-sommelier.keplr.app",
    rest: "https://lcd-sommelier.keplr.app",
    chainId: "sommelier-3",
    chainName: "Sommelier",
    stakeCurrency: {
      coinDenom: "SOMM",
      coinMinimalDenom: "usomm",
      coinDecimals: 6,
      coinGeckoId: "pool:usomm",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: IBCAddress.defaultBech32Config("somm"),
    currencies: [
      {
        coinDenom: "SOMM",
        coinMinimalDenom: "usomm",
        coinDecimals: 6,
        coinGeckoId: "pool:usomm",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "SOMM",
        coinMinimalDenom: "usomm",
        coinDecimals: 6,
        coinGeckoId: "pool:usomm",
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://sommscan.io",
  },
  [ChainIds.Sifchain]: {
    rpc: "https://rpc.sifchain.finance",
    rest: "https://api-int.sifchain.finance",
    chainId: "sifchain-1",
    chainName: "Sifchain",
    stakeCurrency: {
      coinDenom: "ROWAN",
      coinMinimalDenom: "rowan",
      coinDecimals: 18,
      coinGeckoId: "sifchain",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: IBCAddress.defaultBech32Config("sif"),
    currencies: [
      {
        coinDenom: "ROWAN",
        coinMinimalDenom: "rowan",
        coinDecimals: 18,
        coinGeckoId: "sifchain",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "ROWAN",
        coinMinimalDenom: "rowan",
        coinDecimals: 18,
        coinGeckoId: "sifchain",
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://www.mintscan.io/sifchain/txs/{txHash}",
    tmRpc: "https://rpc.sifchain.finance/",
  },
  [ChainIds.BandChain]: {
    rpc: "https://rpc.laozi3.bandchain.org",
    rest: "https://laozi1.bandchain.org/api",
    chainId: "laozi-mainnet",
    chainName: "BandChain",
    stakeCurrency: {
      coinDenom: "BAND",
      coinMinimalDenom: "uband",
      coinDecimals: 6,
      coinGeckoId: "band-protocol",
    },
    bip44: {
      coinType: 494,
    },
    bech32Config: IBCAddress.defaultBech32Config("band"),
    currencies: [
      {
        coinDenom: "BAND",
        coinMinimalDenom: "uband",
        coinDecimals: 6,
        coinGeckoId: "band-protocol",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "BAND",
        coinMinimalDenom: "uband",
        coinDecimals: 6,
        coinGeckoId: "band-protocol",
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://cosmoscan.io/tx/{txHash}",
    tmRpc: "https://rpc.laozi3.bandchain.org/",
  },
  [ChainIds.Konstellation]: {
    rpc: "https://node1.konstellation.tech:26657",
    rest: "https://node1.konstellation.tech:1318",
    chainId: "darchub",
    chainName: "Konstellation",
    stakeCurrency: {
      coinDenom: "DARC",
      coinMinimalDenom: "udarc",
      coinDecimals: 6,
      coinGeckoId: "pool:udarc",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: IBCAddress.defaultBech32Config("darc"),
    currencies: [
      {
        coinDenom: "DARC",
        coinMinimalDenom: "udarc",
        coinDecimals: 6,
        coinGeckoId: "pool:udarc",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "DARC",
        coinMinimalDenom: "udarc",
        coinDecimals: 6,
        coinGeckoId: "pool:udarc",
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://www.mintscan.io/konstellation/txs/{txHash}",
    tmRpc: "https://node1.konstellation.tech:26657/",
  },
  [ChainIds.Umee]: {
    rpc: "https://rpc.aphrodite.main.network.umee.cc",
    rest: "https://api.aphrodite.main.network.umee.cc",
    chainId: "umee-1",
    chainName: "Umee",
    stakeCurrency: {
      coinDenom: "UMEE",
      coinMinimalDenom: "uumee",
      coinDecimals: 6,
      coinGeckoId: "pool:uumee",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: IBCAddress.defaultBech32Config("umee"),
    currencies: [
      {
        coinDenom: "UMEE",
        coinMinimalDenom: "uumee",
        coinDecimals: 6,
        coinGeckoId: "pool:uumee",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "UMEE",
        coinMinimalDenom: "uumee",
        coinDecimals: 6,
        coinGeckoId: "pool:uumee",
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://www.mintscan.io/umee/txs/{txHash}",
    tmRpc: "https://rpc.aphrodite.main.network.umee.cc/",
  },
  [ChainIds.GravityBridge]: {
    rpc: "https://gravitychain.io:26657",
    rest: "https://gravitychain.io:1317",
    chainId: "gravity-bridge-3",
    chainName: "Gravity Bridge",
    stakeCurrency: {
      coinDenom: "GRAV",
      coinMinimalDenom: "ugraviton",
      coinDecimals: 6,
      coinGeckoId: "pool:ugraviton",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: IBCAddress.defaultBech32Config("gravity"),
    currencies: [
      {
        coinDenom: "GRAV",
        coinMinimalDenom: "ugraviton",
        coinDecimals: 6,
        coinGeckoId: "pool:ugraviton",
      },
      {
        coinDenom: "PSTAKE",
        coinMinimalDenom: "gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006",
        coinDecimals: 18,
        coinGeckoId: "pstake-finance",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "GRAV",
        coinMinimalDenom: "ugraviton",
        coinDecimals: 6,
        coinGeckoId: "pool:ugraviton",
        gasPriceStep: {
          low: 0,
          average: 0,
          high: 0.035,
        },
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://www.mintscan.io/gravity-bridge/txs/{txHash}",
    tmRpc: "https://gravitychain.io:26657/",
  },
  [ChainIds.Decentr]: {
    rpc: "https://poseidon.mainnet.decentr.xyz",
    rest: "https://rest.mainnet.decentr.xyz",
    chainId: "mainnet-3",
    chainName: "Decentr",
    stakeCurrency: {
      coinDenom: "DEC",
      coinMinimalDenom: "udec",
      coinDecimals: 6,
      coinGeckoId: "decentr",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: IBCAddress.defaultBech32Config("decentr"),
    currencies: [
      {
        coinDenom: "DEC",
        coinMinimalDenom: "udec",
        coinDecimals: 6,
        coinGeckoId: "decentr",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "DEC",
        coinMinimalDenom: "udec",
        coinDecimals: 6,
        coinGeckoId: "decentr",
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://explorer.decentr.net/transactions/{txHash}?networkId=mainnet",
    tmRpc: "https://poseidon.mainnet.decentr.xyz/",
  },
  [ChainIds.Certik]: {
    rpc: "https://shenturpc.certikpowered.info",
    rest: "https://azuredragon.noopsbycertik.com",
    chainId: "shentu-2.2",
    chainName: "Certik",
    stakeCurrency: {
      coinDenom: "CTK",
      coinMinimalDenom: "uctk",
      coinDecimals: 6,
      coinGeckoId: "certik",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: IBCAddress.defaultBech32Config("certik"),
    currencies: [
      {
        coinDenom: "CTK",
        coinMinimalDenom: "uctk",
        coinDecimals: 6,
        coinGeckoId: "certik",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "CTK",
        coinMinimalDenom: "uctk",
        coinDecimals: 6,
        coinGeckoId: "certik",
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://www.mintscan.io/certik/txs/{txHash}",
    tmRpc: "https://shenturpc.certikpowered.info/",
  },
  [ChainIds.Carbon]: {
    feeCurrencies: [
      {
        coinDenom: "SWTH",
        coinMinimalDenom: "swth",
        coinDecimals: 8,
        coinGeckoId: "switcheo",
        gasPriceStep: CARBON_GAS_PRICE,
      },
    ],
    bip44: { coinType: 118 },
    currencies: [
      {
        coinDenom: "SWTH",
        coinMinimalDenom: "swth",
        coinDecimals: 8,
        coinGeckoId: "switcheo",
      },
    ],
    stakeCurrency: {
      coinDenom: "SWTH",
      coinMinimalDenom: "swth",
      coinDecimals: 8,
      coinGeckoId: "switcheo",
    },
    rest: "https://api.carbon.network",
    rpc: "https://tm-api.carbon.network/",
    chainName: "Carbon",
    chainId: "carbon-1",
    bech32Config: IBCAddress.defaultBech32Config("swth"),
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://scan.carbon.network/transaction/{txHash}?net=main",
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
  [ChainIds.Stride]: {
    rpc: "https://rpc-stride.keplr.app",
    rest: "https://lcd-stride.keplr.app",
    chainId: "stride-1",
    chainName: "Stride",
    stakeCurrency: {
      coinDenom: "STRD",
      coinMinimalDenom: "ustrd",
      coinDecimals: 6,
      coinGeckoId: "stride",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: IBCAddress.defaultBech32Config("stride"),
    currencies: [
      {
        coinDenom: "STRD",
        coinMinimalDenom: "ustrd",
        coinDecimals: 6,
        coinGeckoId: "stride",
      },
      {
        coinDenom: "stATOM",
        coinMinimalDenom: "stuatom",
        coinDecimals: 6,
      },
      {
        coinDenom: "stOSMO",
        coinMinimalDenom: "stuosmo",
        coinDecimals: 6,
      },
      {
        coinDenom: "stJUNO",
        coinMinimalDenom: "stujuno",
        coinDecimals: 6,
      },
      {
        coinDenom: "stSTARS",
        coinMinimalDenom: "stustars",
        coinDecimals: 6,
      },
      {
        coinDenom: "stLUNA",
        coinMinimalDenom: "stuluna",
        coinDecimals: 6,
      },
      {
        "coinDenom": "stEVMOS",
        "coinMinimalDenom": "staevmos",
        "coinDecimals": 18,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "STRD",
        coinMinimalDenom: "ustrd",
        coinDecimals: 6,
        coinGeckoId: "stride",
        gasPriceStep: {
          low: 0,
          average: 0,
          high: 0.04,
        },
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://www.mintscan.io/stride/txs/{txHash}",
    tmRpc: "https://stride.rpc.kjnodes.com/",
  },
  [ChainIds.Kujira]: {
    rpc: "https://rpc.kaiyo.kujira.setten.io",
    rest: "https://lcd.kaiyo.kujira.setten.io",
    chainId: "kaiyo-1",
    chainName: "Kujira",
    bip44: {
      coinType: 118,
    },
    bech32Config: IBCAddress.defaultBech32Config("kujira"),
    stakeCurrency: {
      coinDenom: "KUJI",
      coinMinimalDenom: "ukuji",
      coinDecimals: 6,
      coinGeckoId: "kujira",
    },
    currencies: [
      {
        coinDenom: "KUJI",
        coinMinimalDenom: "ukuji",
        coinDecimals: 6,
        coinGeckoId: "kujira",
      },
      {
        coinDenom: "USK",
        coinMinimalDenom: "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
        coinDecimals: 6,
        coinGeckoId: "usk",
      },
      {
        coinDenom: "ampKUJI",
        coinMinimalDenom: "factory/kujira1n3fr5f56r2ce0s37wdvwrk98yhhq3unnxgcqus8nzsfxvllk0yxquurqty/ampKUJI",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "KUJI",
        coinMinimalDenom: "ukuji",
        coinDecimals: 6,
        coinGeckoId: "kujira",
        gasPriceStep: {
          low: 0.01,
          average: 0.025,
          high: 0.03,
        },
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://finder.kujira.app/kaiyo-1/tx/{txHash}",
  },
  [ChainIds.Terra2]: {
    rpc: "https://terra-rpc.lavenderfive.com:443/",
    rest: "https://phoenix-lcd.terra.dev/",
    chainId: "phoenix-1",
    chainName: "Terra 2.0",
    bip44: {
      coinType: 330,
    },
    bech32Config: IBCAddress.defaultBech32Config("terra"),
    stakeCurrency: {
      coinDenom: "LUNA",
      coinMinimalDenom: "uluna",
      coinDecimals: 6,
      coinGeckoId: "terra-luna-2",
    },
    currencies: [
      {
        coinDenom: "LUNA",
        coinMinimalDenom: "uluna",
        coinDecimals: 6,
        coinGeckoId: "terra-luna-2",
      },
      {
        coinDenom: "ampLUNA",
        coinMinimalDenom: "cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct",
        coinDecimals: 6,
        coinGeckoId: "terra-luna-2",
        type: "cw20",
        contractAddress: "terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "LUNA",
        coinMinimalDenom: "uluna",
        coinDecimals: 6,
        coinGeckoId: "terra-luna-2",
        gasPriceStep: {
          low: 0.15,
          average: 0.2,
          high: 0.25,
        },
      },
    ],
    features: ["ibc-transfer", "ibc-go", "cosmwasm", "wasmd_0.24+"],
    explorerUrlToTx: "https://finder.terra.money/phoenix-1/tx/{txHash}",
  },
  [ChainIds.Quicksilver]: {
    rpc: "https://rpc-quicksilver.keplr.app",
    rest: "https://lcd-quicksilver.keplr.app",
    chainId: "quicksilver-2",
    chainName: "Quicksilver",
    stakeCurrency: {
      coinDenom: "QCK",
      coinMinimalDenom: "uqck",
      coinDecimals: 6,
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: IBCAddress.defaultBech32Config("quick"),
    currencies: [
      {
        coinDenom: "QCK",
        coinMinimalDenom: "uqck",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "QCK",
        coinMinimalDenom: "uqck",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.0001,
          average: 0.0001,
          high: 0.00025,
        },
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://www.mintscan.io/quicksilver/txs/{txHash}",
  },
  [ChainIds.StafiHub]: {
    rpc: "https://public-rpc1.stafihub.io",
    rest: "https://public-rest-rpc1.stafihub.io",
    chainId: "stafihub-1",
    chainName: "StaFi Hub",
    stakeCurrency: {
      coinDenom: "FIS",
      coinMinimalDenom: "ufis",
      coinDecimals: 6,
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: IBCAddress.defaultBech32Config("stafi"),
    currencies: [
      {
        coinDenom: "FIS",
        coinMinimalDenom: "ufis",
        coinDecimals: 6,
      },
      {
        coinDenom: "rATOM",
        coinMinimalDenom: "uratom",
        coinDecimals: 6,
      },
      {
        coinDenom: "rIRIS",
        coinMinimalDenom: "uriris",
        coinDecimals: 6,
      },
      {
        coinDenom: "rHUAHUA",
        coinMinimalDenom: "urhuahua",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "FIS",
        coinMinimalDenom: "ufis",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.01,
          average: 0.025,
          high: 0.04,
        },
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://www.mintscan.io/stafi/txs/{txHash}",
  },
  [ChainIds.Canto]: {
    rpc: "https://canto-rpc.polkachu.com",
    rest: "https://canto-api.polkachu.com",
    chainId: "canto_7700-1",
    chainName: "Canto",
    stakeCurrency: {
      coinDenom: "CANTO",
      coinMinimalDenom: "acanto",
      coinDecimals: 18,
      coinGeckoId: "canto",
    },
    bip44: {
      coinType: 60,
    },
    bech32Config: IBCAddress.defaultBech32Config("canto"),
    coinType: 60,
    currencies: [
      {
        coinDenom: "CANTO",
        coinMinimalDenom: "acanto",
        coinDecimals: 18,
        coinGeckoId: "canto",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "CANTO",
        coinMinimalDenom: "acanto",
        coinDecimals: 18,
        gasPriceStep: {
          low: 1250000000000,
          average: 2500000000000,
          high: 3750000000000,
        },
      },
    ],
    features: ["ibc-transfer", "ibc-go", "eth-address-gen", "eth-key-sign"],
    explorerUrlToTx: "https://cosmos.explorer.canto.io/transactions/{txHash}",
  },
  [ChainIds.OmniFlixHub]: {
    rpc: "https://rpc.omniflix.network",
    rest: "https://rest.omniflix.network",
    chainId: "omniflixhub-1",
    chainName: "OmniFlix Hub",
    stakeCurrency: {
      coinDenom: "FLIX",
      coinMinimalDenom: "uflix",
      coinDecimals: 6,
      coinGeckoId: "omniflix-network",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: IBCAddress.defaultBech32Config("omniflix"),
    currencies: [{
      coinDenom: "FLIX",
      coinMinimalDenom: "uflix",
      coinDecimals: 6,
      coinGeckoId: "omniflix-network",
    }],
    feeCurrencies: [{
      coinDenom: "FLIX",
      coinMinimalDenom: "uflix",
      coinDecimals: 6,
      coinGeckoId: "omniflix-network",
      gasPriceStep: {
        low: 0.001,
        average: 0.0025,
        high: 0.025,
      },
    }],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://www.mintscan.io/omniflix/txs/{txHash}",
  },
  [ChainIds.Agoric]: {
    rpc: "https://rpc-agoric.keplr.app",
    rest: "https://lcd-agoric.keplr.app",
    chainId: "agoric-3",
    chainName: "Agoric",
    stakeCurrency: {
      coinDenom: "BLD",
      coinMinimalDenom: "ubld",
      coinDecimals: 6,
      coinGeckoId: "agoric",
    },
    bip44: {
      coinType: 564,
    },
    bech32Config: IBCAddress.defaultBech32Config("agoric"),
    currencies: [
      {
        coinDenom: "BLD",
        coinMinimalDenom: "ubld",
        coinDecimals: 6,
        coinGeckoId: "agoric",
      },
      {
        coinDenom: "IST",
        coinMinimalDenom: "uist",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "BLD",
        coinMinimalDenom: "ubld",
        coinDecimals: 6,
        coinGeckoId: "agoric",
        gasPriceStep: {
          low: 0.03,
          average: 0.05,
          high: 0.07,
        },
      },
      {
        coinDenom: "IST",
        coinMinimalDenom: "uist",
        coinDecimals: 6,
        coinGeckoId: "inter-stable-token",
        gasPriceStep: {
          low: 0.0034,
          average: 0.007,
          high: 0.02,
        },
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
    explorerUrlToTx: "https://www.atomscan.com/agoric/transactions/{txHash}",
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

export const swthChannels: SimpleMap<ChannelConfig> = {
  [ChainIds.Osmosis]: {
    ibc: {
      sourceChannel: "channel-0",
      dstChannel: "channel-188",
    },
  },
  [ChainIds.Terra]: {
    ibc: {
      sourceChannel: "channel-2",
      dstChannel: "channel-48",
    },
  },
  [ChainIds.CosmosHub]: {
    ibc: {
      sourceChannel: "channel-3",
      dstChannel: "channel-342",
    },
  },
  [ChainIds.Juno]: {
    ibc: {
      sourceChannel: "channel-4",
      dstChannel: "channel-92",
    },
  },
  [ChainIds.Evmos]: {
    ibc: {
      sourceChannel: "channel-6",
      dstChannel: "channel-23",
    },
  },
  [ChainIds.Axelar]: {
    ibc: {
      sourceChannel: "channel-7",
      dstChannel: "channel-37",
    },
  },
  [ChainIds.Stride]: {
    ibc: {
      sourceChannel: "channel-8",
      dstChannel: "channel-47",
    },
  },
  [ChainIds.Kujira]: {
    ibc: {
      sourceChannel: "channel-9",
      dstChannel: "channel-46",
    },
  },
  [ChainIds.Terra2]: {
    ibc: {
      sourceChannel: "channel-12",
      dstChannel: "channel-36",
    },
    cw20: {
      sourceChannel: "channel-16",
      dstChannel: "channel-41",
      portId: "terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
    },
  },
  [ChainIds.Comdex]: {
    ibc: {
      sourceChannel: "channel-11",
      dstChannel: "channel-50",
    },
  },
  [ChainIds.Quicksilver]: {
    ibc: {
      sourceChannel: "channel-17",
      dstChannel: "channel-10",
    },
  },
  [ChainIds.StafiHub]: {
    ibc: {
      sourceChannel: "channel-13",
      dstChannel: "channel-5",
    },
  },
  [ChainIds.Persistence]: {
    ibc: {
      sourceChannel: "channel-14",
      dstChannel: "channel-62",
    },
  },
  [ChainIds.Stargaze]: {
    ibc: {
      sourceChannel: "channel-15",
      dstChannel: "channel-123",
    },
  },
  [ChainIds.Canto]: {
    ibc: {
      sourceChannel: "channel-18",
      dstChannel: "channel-6",
    },
  },
  [ChainIds.OmniFlixHub]: {
    ibc: {
      sourceChannel: "channel-19",
      dstChannel: "channel-24",
    },
  },
  [ChainIds.Agoric]: {
    ibc: {
      sourceChannel: "channel-20",
      dstChannel: "channel-12",
    },
  },
  [ChainIds.Sommelier]: {
    ibc: {
      sourceChannel: "channel-23",
      dstChannel: "channel-3",
    },
  },
};

export const cibtIbcTokenRegex = RegExp(`^${DenomPrefix.CDPToken}/ibc/([a-f\\d]+)$`, "i");
export const ibcTokenRegex = /^ibc\/([a-f\d]+)$/i;
export const cw20TokenRegex = /^cw20:([a-z\d]+)$/i;
export const factoryIbcMinimalDenomRegex = /^factory:([a-z\d]+):([a-z\d]+)$/i;

export const cosmBridgeRegex = /^wasm\.([a-z\d]+)$/i;

export const ibcNetworkRegex = /^([a-z\d_-]+)-([\d]+)$/i;

export const ibcTransferChannelRegex = /^transfer\/channel-(\d+)/i;

export const ibcDefaultGas: number = 500000;

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
