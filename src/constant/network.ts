import { IBCAddress } from "@carbon-sdk/util/address";
import { SimpleMap } from "@carbon-sdk/util/type";
import { CONST } from "@cityofzion/neon-core-next";
import { ChainInfo } from "@keplr-wallet/types";
import { KeplrAccount } from "..";

import { DEFAULT_GAS_PRICE } from "./generic";

export enum Network {
  MainNet = "mainnet",
  TestNet = "testnet",
  DevNet = "devnet",
  LocalHost = "localhost",
}

export const DEFAULT_NETWORK = Network.MainNet;

export interface EthNetworkConfig {
  rpcURL: string
  wsURL: string
  payerURL: string
  lockProxyAddr: string
  balanceReader: string
  byteCodeHash: string
}

export interface NeoNetworkConfig {
  rpcURL: string
  wrapperScriptHash: string
}
export interface N3NetworkConfig {
  rpcURL: string
  networkMagic: number;
}

export interface ZilNetworkConfig {
  rpcURL: string
  chainId: number
  lockProxyAddr: string
}

export interface NetworkConfig {
  tmRpcUrl: string;
  tmWsUrl: string;
  restUrl: string;
  insightsUrl: string;
  hydrogenUrl: string;
  wsUrl: string;
  faucetUrl: string;
  Bech32Prefix: string;

  network: Network;

  feeURL: string
  feeAddress: string

  eth: EthNetworkConfig
  bsc: EthNetworkConfig

  neo: NeoNetworkConfig
  n3: N3NetworkConfig
  zil: ZilNetworkConfig
}

export interface NetworkConfigProvider {
  getConfig(): NetworkConfig
}

export const NetworkConfigs: {
  [key in Network]: NetworkConfig;
} = {
  [Network.MainNet]: {
    network: Network.MainNet,

    tmRpcUrl: "https://tm-api.carbon.network/",
    tmWsUrl: "wss://tm-api.carbon.network/",
    restUrl: "https://api.carbon.network",
    insightsUrl: "https://api-insights.carbon.network",
    hydrogenUrl: "https://hydrogen-api.carbon.network",
    wsUrl: "wss://ws-api.carbon.tech/ws",
    faucetUrl: "",

    Bech32Prefix: "swth",

    feeURL: "https://fees.carbon.network",
    feeAddress: "08d8f59e475830d9a1bb97d74285c4d34c6dac08", // swth1prv0t8j8tqcdngdmjlt59pwy6dxxmtqgycy2h7

    eth: {
      rpcURL: "https://eth-mainnet.alchemyapi.io/v2/RWHcfoaBKzRpXnLONcEDnVqtUp7StNYl",
      wsURL: "wss://mainnet.dagger.matic.network",
      payerURL: "https://payer.carbon.network",
      lockProxyAddr: "0x9a016ce184a22dbf6c17daa59eb7d3140dbd1c54",
      balanceReader: "0xe5e83cdba612672785d835714af26707f98030c3",
      byteCodeHash: "0xc77e5709a69e94d310a6dfb700801758c4caed0385b25bdf82bbdf954e4dd0c3",
    },

    bsc: {
      rpcURL: "https://bsc-dataseed2.binance.org/",
      wsURL: "",
      payerURL: "https://payer.carbon.network",
      lockProxyAddr: "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
      balanceReader: "0x2b18c5e1edaa7e27d40fec8d0b7d96c5eefa35df",
      byteCodeHash: "0x1b147c1cef546fcbcc1284df778073d65b90f80d5b649a69d5f8a01e186c0ec1",
    },

    neo: {
      rpcURL: "https://seed3.switcheo.network:443",
      wrapperScriptHash: "f46719e2d16bf50cddcef9d4bbfece901f73cbb6",
    },

    n3: {
      rpcURL: "https://n3-rpc.dem.exchange",
      networkMagic: CONST.MAGIC_NUMBER.MainNet,
    },

    zil: {
      rpcURL: "https://api.zilliqa.com",
      lockProxyAddr: "0xd73c6b871b4d0e130d64581993b745fc938a5be7",
      chainId: 1,
    }
  },

  [Network.TestNet]: {
    network: Network.TestNet,

    tmRpcUrl: "https://test-tm-api.carbon.network",
    tmWsUrl: "wss://test-tm-api.carbon.network",
    restUrl: "https://test-api.carbon.network",
    insightsUrl: "https://test-api-insights.carbon.network",
    hydrogenUrl: "",
    wsUrl: "wss://test-ws-api.carbon.network/ws",
    faucetUrl: "https://test-faucet.carbon.network",

    Bech32Prefix: "tswth",

    feeURL: `http://54.255.42.175:9001`,
    feeAddress: "989761fb0c0eb0c05605e849cae77d239f98ac7f",

    eth: {
      rpcURL: "https://eth-ropsten.alchemyapi.io/v2/2KD9F3mFPNMfflSqZsPuTKmK_w7fFfut",
      wsURL: "wss://ropsten.dagger.matic.network",
      payerURL: `https://test-payer.carbon.network`,
      lockProxyAddr: "0x91f453851e297524749a740d53cf54a89231487c",
      balanceReader: "0xa74c81866c5bfff6684aa8edf35a5de8c3b9f173",
      byteCodeHash: "0xc77e5709a69e94d310a6dfb700801758c4caed0385b25bdf82bbdf954e4dd0c3",
    },

    bsc: {
      rpcURL: "https://data-seed-prebsc-2-s3.binance.org:8545/",
      wsURL: "",
      payerURL: `https://test-payer.carbon.network`,
      lockProxyAddr: "0x7c2b13d656d222cb79670e301dd826dc5b8dc20c",
      balanceReader: "0x25c22f65cb820e787a13951f295d0b86db7b07b5",
      byteCodeHash: "0x1b147c1cef546fcbcc1284df778073d65b90f80d5b649a69d5f8a01e186c0ec1",
    },

    neo: {
      rpcURL: "https://g30trj885e.execute-api.ap-southeast-1.amazonaws.com",
      wrapperScriptHash: "f46719e2d16bf50cddcef9d4bbfece901f73cbb6",
    },

    n3: {
      rpcURL: "https://test-n3-rpc.dem.exchange",
      networkMagic: CONST.MAGIC_NUMBER.TestNet,
    },

    zil: {
      rpcURL: "",
      lockProxyAddr: "",
      chainId: 333,
    }
  },

  [Network.DevNet]: {
    network: Network.DevNet,

    tmRpcUrl: "https://dev-tm-api.carbon.network",
    tmWsUrl: "wss://dev-tm-api.carbon.network",
    restUrl: "https://dev-api.carbon.network",
    insightsUrl: "https://dev-api-insights.carbon.network",
    hydrogenUrl: "https://dev-hydrogen-api.carbon.network",
    wsUrl: "wss://dev-ws-api.carbon.network/ws",
    faucetUrl: "https://dev-faucet.carbon.network",

    Bech32Prefix: "swth",

    feeURL: `https://dev-fees.carbon.network`,
    feeAddress: "989761fb0c0eb0c05605e849cae77d239f98ac7f",

    eth: {
      rpcURL: "https://eth-ropsten.alchemyapi.io/v2/2KD9F3mFPNMfflSqZsPuTKmK_w7fFfut",
      wsURL: "wss://ropsten.dagger.matic.network",
      payerURL: `https://dev-payer.carbon.network`,
      lockProxyAddr: "0x91f453851e297524749a740d53cf54a89231487c",
      balanceReader: "0xa74c81866c5bfff6684aa8edf35a5de8c3b9f173",
      byteCodeHash: "0xb007776ceef3efcf6412e67dfd4fc36ab367db2df8a3da10a08401970181e1fa",
    },

    bsc: {
      rpcURL: "https://data-seed-prebsc-2-s3.binance.org:8545/",
      wsURL: "",
      payerURL: `https://dev-payer.carbon.network`,
      lockProxyAddr: "0x7c2b13d656d222cb79670e301dd826dc5b8dc20c",
      balanceReader: "0x25c22f65cb820e787a13951f295d0b86db7b07b5",
      byteCodeHash: "0x1b147c1cef546fcbcc1284df778073d65b90f80d5b649a69d5f8a01e186c0ec1",
    },

    neo: {
      rpcURL: "https://g30trj885e.execute-api.ap-southeast-1.amazonaws.com",
      wrapperScriptHash: "f46719e2d16bf50cddcef9d4bbfece901f73cbb6",
    },

    n3: {
      rpcURL: "https://test-n3-rpc.dem.exchange",
      networkMagic: CONST.MAGIC_NUMBER.TestNet,
    },

    zil: {
      rpcURL: "https://dev-api.zilliqa.com",
      lockProxyAddr: "0xa5a43eecd29534edf80792a9889f52c77455245d",
      chainId: 333,
    }
  },

  [Network.LocalHost]: {
    network: Network.LocalHost,

    tmRpcUrl: "http://localhost:26657",
    tmWsUrl: "ws://localhost:26657",
    restUrl: "http://localhost:1317",
    insightsUrl: "http://localhost:8181",
    hydrogenUrl: "",
    wsUrl: "ws://localhost:5000/ws",
    faucetUrl: "http://localhost:4500",

    Bech32Prefix: "tswth",

    feeURL: `http://localhost:9001`,
    feeAddress: "989761fb0c0eb0c05605e849cae77d239f98ac7f",

    eth: {
      rpcURL: "https://ropsten.infura.io/v3/e4dd457b33124bbda7e17500e6efbc27",
      wsURL: "wss://ropsten.dagger.matic.network",
      payerURL: `http://localhost:8001`,
      lockProxyAddr: "",
      balanceReader: "",
      byteCodeHash: "",
    },

    bsc: {
      rpcURL: "https://data-seed-prebsc-2-s3.binance.org:8545/",
      wsURL: "",
      payerURL: `http://localhost:8001`,
      lockProxyAddr: "",
      balanceReader: "",
      byteCodeHash: "",
    },

    neo: {
      rpcURL: "https://g30trj885e.execute-api.ap-southeast-1.amazonaws.com",
      wrapperScriptHash: "f46719e2d16bf50cddcef9d4bbfece901f73cbb6",
    },

    n3: {
      rpcURL: "https://test-n3-rpc.dem.exchange",
      networkMagic: CONST.MAGIC_NUMBER.TestNet,
    },

    zil: {
      rpcURL: "",
      lockProxyAddr: "",
      chainId: 1,
    }
  },
} as const;

export interface ChainInfoExplorerTmRpc extends ChainInfo {
	// Formed as "https://explorer.com/{txHash}"
	explorerUrlToTx: string;
	tmRpc?: string;
}

// whitelisted networks for addition of swth as a currency, and addition of transfer options
export const ibcWhitelist: string[] = ["osmosis-1"];

export const EmbedChainInfosInit: SimpleMap<ChainInfoExplorerTmRpc> = {
  "osmosis-1": {
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
    ],
    feeCurrencies: [
      {
        coinDenom: "OSMO",
        coinMinimalDenom: "uosmo",
        coinDecimals: 6,
        coinGeckoId: "osmosis",
      },
    ],
    gasPriceStep: {
      low: 0,
      average: 0,
      high: 0.025,
    },
    features: ["stargate", "ibc-transfer", "no-legacy-stdTx", "ibc-go"],
    explorerUrlToTx: "https://www.mintscan.io/osmosis/txs/{txHash}",
		tmRpc: "https://rpc-osmosis.blockapsis.com/",
  },
	"cosmoshub-4": {
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
		features: ["stargate", "ibc-transfer", "no-legacy-stdTx", "ibc-go"],
		explorerUrlToTx: "https://www.mintscan.io/cosmos/txs/{txHash}",
		tmRpc: "https://rpc.cosmos.network/",
	},
	"columbus-5": {
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
			},
			{
				coinDenom: "UST",
				coinMinimalDenom: "uusd",
				coinDecimals: 6,
				coinGeckoId: "terrausd",
			},
		],
		gasPriceStep: {
			low: 0.015,
			average: 0.015,
			high: 0.015,
		},
		features: ["stargate", "ibc-transfer", "no-legacy-stdTx"],
		explorerUrlToTx: "https://finder.terra.money/columbus-5/tx/{txHash}",
		tmRpc: "https://terra-rpc.easy2stake.com/",
	},
	"secret-4": {
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
		features: ["stargate", "ibc-transfer", "no-legacy-stdTx"],
		explorerUrlToTx: "https://secretnodes.com/secret/chains/secret-4/transactions/{txHash}",
	},
	"akashnet-2": {
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
		features: ["stargate", "ibc-transfer"],
		explorerUrlToTx: "https://www.mintscan.io/akash/txs/{txHash}",
	},
	"regen-1": {
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
		features: ["stargate", "ibc-transfer", "no-legacy-stdTx"],
		explorerUrlToTx: "https://regen.aneka.io/txs/{txHash}",
	},
	"sentinelhub-2": {
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
		features: ["stargate", "ibc-transfer"],
	},
	"core-1": {
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
		features: ["stargate", "ibc-transfer", "no-legacy-stdTx", "ibc-go"],
		explorerUrlToTx: "https://www.mintscan.io/persistence/txs/{txHash}",
	},
	"irishub-1": {
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
		features: ["stargate", "ibc-transfer", "no-legacy-stdTx"],
		explorerUrlToTx: "https://www.mintscan.io/iris/txs/{txHash}",
	},
	"crypto-org-chain-mainnet-1": {
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
		features: ["stargate", "ibc-transfer", "no-legacy-stdTx"],
		explorerUrlToTx: "https://www.mintscan.io/crypto-org/txs/{txHash}",
	},
	"iov-mainnet-ibc": {
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
		features: ["stargate", "ibc-transfer"],
		explorerUrlToTx: "https://www.mintscan.io/starname/txs/{txHash}",
	},
	"emoney-3": {
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
			},
		],
		gasPriceStep: {
			low: 1,
			average: 1,
			high: 1,
		},
		features: ["stargate", "ibc-transfer"],
		explorerUrlToTx: "https://emoney.bigdipper.live/transactions/{txHash}",
	},
	"juno-1": {
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
			{
				type: "cw20",
				contractAddress: "juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
				coinDenom: "NETA",
				coinMinimalDenom: "cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr:NETA",
				coinDecimals: 6,
				coinGeckoId: "neta",
			},
			{
				type: "cw20",
				contractAddress: "juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl",
				coinDenom: "MARBLE",
				coinMinimalDenom: "cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl:MARBLE",
				coinDecimals: 3,
				coinGeckoId: "pool:marble",
			},
		],
		feeCurrencies: [
			{
				coinDenom: "JUNO",
				coinMinimalDenom: "ujuno",
				coinDecimals: 6,
				coinGeckoId: "juno-network",
			},
		],
		features: ["stargate", "ibc-transfer"],
		explorerUrlToTx: "https://www.mintscan.io/juno/txs/{txHash}",
	},
	"microtick-1": {
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
		features: ["stargate", "ibc-transfer"],
		explorerUrlToTx: "https://explorer.microtick.zone/transactions/{txHash}",
	},
	"likecoin-mainnet-2": {
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
		features: ["stargate", "ibc-transfer"],
		explorerUrlToTx: "https://likecoin.bigdipper.live/transactions/{txHash}",
	},
	"impacthub-3": {
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
		features: ["stargate", "ibc-transfer"],
		explorerUrlToTx: "https://blockscan.ixo.world/transactions/{txHash}",
	},
	"bitcanna-1": {
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
		features: ["stargate", "ibc-transfer", "no-legacy-stdTx"],
		explorerUrlToTx: "https://www.mintscan.io/bitcanna/txs/{txHash}",
		tmRpc: "https://rpc.bitcanna.io/",
	},
	"bitsong-2b": {
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
		features: ["stargate", "ibc-transfer", "no-legacy-stdTx", "ibc-go"],
		explorerUrlToTx: "https://explorebitsong.com/transactions/{txHash}",
		tmRpc: "https://rpc.explorebitsong.com/",
	},
	"kichain-2": {
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
		features: ["stargate", "ibc-transfer"],
		explorerUrlToTx: "https://www.mintscan.io/ki-chain/txs/{txHash}",
		tmRpc: "https://rpc-mainnet.blockchain.ki",
	},
	"panacea-3": {
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
			},
		],
		gasPriceStep: {
			low: 5,
			average: 7,
			high: 9,
		},
		features: ["stargate", "ibc-transfer"],
		explorerUrlToTx: "https://www.mintscan.io/medibloc/txs/{txHash}",
		tmRpc: "https://rpc.gopanacea.org/",
	},
	"bostrom": {
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
		features: ["stargate", "ibc-transfer", "no-legacy-stdTx"],
		explorerUrlToTx: "https://cyb.ai/network/bostrom/tx/{txHash}",
		tmRpc: "https://rpc.bostrom.cybernode.ai/",
	},
	"comdex-1": {
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
			},
		],
		features: ["stargate", "ibc-transfer", "no-legacy-stdTx"],
		explorerUrlToTx: "https://www.mintscan.io/comdex/txs/{txHash}",
		tmRpc: "https://rpc.comdex.one/",
	},
	"cheqd-mainnet-1": {
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
			},
		],
		gasPriceStep: {
			low: 25,
			average: 30,
			high: 50,
		},
		features: ["stargate", "ibc-transfer", "no-legacy-stdTx"],
		explorerUrlToTx: "https://explorer.cheqd.io/transactions/{txHash}",
		tmRpc: "https://rpc.cheqd.net/",
	},
	"stargaze-1": {
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
		features: ["stargate", "ibc-transfer", "no-legacy-stdTx"],
		explorerUrlToTx: "https://www.mintscan.io/stargaze/txs/{txHash}",
		tmRpc: "https://rpc.stargaze-apis.com/",
	},
	"chihuahua-1": {
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
			},
		],
		gasPriceStep: {
			low: 0.025,
			average: 0.03,
			high: 0.035,
		},
		features: ["stargate", "ibc-transfer", "no-legacy-stdTx"],
		explorerUrlToTx: "https://ping.pub/chihuahua/tx/{txHash}",
	},
	"lum-network-1": {
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
		features: ["stargate", "ibc-transfer", "no-legacy-stdTx", "ibc-go"],
		explorerUrlToTx: "https://www.mintscan.io/lum/txs/{txHash}",
		tmRpc: "https://node0.mainnet.lum.network/rpc/",
	},
	"vidulum-1": {
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
		features: ["stargate", "ibc-transfer", "no-legacy-stdTx", "ibc-go"],
		explorerUrlToTx: "https://explorers.vidulum.app/vidulum/tx/{txHash}",
		tmRpc: "https://mainnet-rpc.vidulum.app/",
	},
	"desmos-mainnet": {
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
		features: ["stargate", "ibc-transfer", "no-legacy-stdTx", "ibc-go"],
		explorerUrlToTx: "https://explorer.desmos.network/transactions/{txHash}",
		tmRpc: "https://rpc.mainnet.desmos.network/",
	},
	"dig-1": {
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
			},
		],
		gasPriceStep: {
			low: 0.025,
			average: 0.03,
			high: 0.035,
		},
		features: ["stargate", "ibc-transfer", "no-legacy-stdTx", "ibc-go"],
		explorerUrlToTx: "https://ping.pub/dig/tx/{txHash}",
		tmRpc: "https://rpc-1-dig.notional.ventures/",
	},
	"sommelier-3": {
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
		features: ["stargate", "ibc-transfer", "no-legacy-stdTx", "ibc-go"],
		explorerUrlToTx: "https://sommscan.io",
	},
	"sifchain-1": {
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
		features: ["stargate", "ibc-transfer"],
		explorerUrlToTx: "https://www.mintscan.io/sifchain/txs/{txHash}",
		tmRpc: "https://rpc.sifchain.finance/",
	},
	"laozi-mainnet": {
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
		features: ["stargate", "ibc-transfer", "no-legacy-stdTx"],
		explorerUrlToTx: "https://cosmoscan.io/tx/{txHash}",
		tmRpc: "https://rpc.laozi3.bandchain.org/",
	},
	"darchub": {
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
		features: ["stargate", "ibc-transfer", "no-legacy-stdTx"],
		explorerUrlToTx: "https://www.mintscan.io/konstellation/txs/{txHash}",
		tmRpc: "https://node1.konstellation.tech:26657/",
	},
	"umee-1": {
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
		features: ["stargate", "ibc-transfer", "no-legacy-stdTx"],
		explorerUrlToTx: "https://www.mintscan.io/umee/txs/{txHash}",
		tmRpc: "https://rpc.aphrodite.main.network.umee.cc/",
	},
	"gravity-bridge-3": {
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
			},
		],
		gasPriceStep: {
			low: 0,
			average: 0,
			high: 0.035,
		},
		features: ["stargate", "ibc-transfer", "no-legacy-stdTx", "ibc-go"],
		explorerUrlToTx: "https://www.mintscan.io/gravity-bridge/txs/{txHash}",
		tmRpc: "https://gravitychain.io:26657/",
	},
	"mainnet-3": {
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
		features: ["stargate", "ibc-transfer", "no-legacy-stdTx"],
		explorerUrlToTx: "https://explorer.decentr.net/transactions/{txHash}?networkId=mainnet",
		tmRpc: "https://poseidon.mainnet.decentr.xyz/",
	},
	"shentu-2.2": {
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
		features: ["stargate", "ibc-transfer", "no-legacy-stdTx", "ibc-go"],
		explorerUrlToTx: "https://www.mintscan.io/certik/txs/{txHash}",
		tmRpc: "https://shenturpc.certikpowered.info/",
	},
	"carbon-1": {
		feeCurrencies: [{
			coinDenom: "SWTH",
			coinMinimalDenom: "swth",
			coinDecimals: 8,
			coinGeckoId: "switcheo",
		}],
		gasPriceStep: {
      low: DEFAULT_GAS_PRICE.toNumber(),
      average: DEFAULT_GAS_PRICE.toNumber(),
      high: DEFAULT_GAS_PRICE.toNumber(),
    },
		bip44: { coinType: 118 },
		currencies: [{
			coinDenom: "SWTH",
			coinMinimalDenom: "swth",
			coinDecimals: 8,
			coinGeckoId: "switcheo",
		}],
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
		features: ["stargate", "ibc-transfer", "ibc-go"],
		explorerUrlToTx: "https://scan.carbon.network/transaction/{txHash}?net=main",
	},
};
