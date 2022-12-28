import { CONST } from "@cityofzion/neon-core-next";

export enum Network {
  MainNet = "mainnet",
  TestNet = "testnet",
  DevNet = "devnet",
  LocalHost = "localhost",
}

export const CarbonChainIDs = {
  [Network.MainNet]: "carbon-1",
  [Network.TestNet]: "carbon-testnet-42069",
  [Network.DevNet]: "carbon-devnet-39911",
  [Network.LocalHost]: "carbon",
} as const;

export const DEFAULT_NETWORK = Network.MainNet;

export interface EthNetworkConfig {
  rpcURL: string
  wsURL: string
  payerURL: string
  lockProxyAddr: string
  bridgeEntranceAddr: string
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
  bridgeEntranceAddr: string
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

  /**
   * @deprecated on-chain fee service has been removed, please use the hydrogen fee_quote endpoint to query deposit/withdraw fees (please see HydrogenClient for the required query)
  */
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
    wsUrl: "wss://ws-api.carbon.network/ws",
    faucetUrl: "",

    Bech32Prefix: "swth",

    /**
      * @deprecated on-chain fee service has been removed, please use the hydrogen fee_quote endpoint to query deposit/withdraw fees (please see HydrogenClient for the required query)
    */
    feeURL: "https://fees.carbon.network",
    feeAddress: "08d8f59e475830d9a1bb97d74285c4d34c6dac08", // swth1prv0t8j8tqcdngdmjlt59pwy6dxxmtqgycy2h7

    eth: {
      rpcURL: "https://eth-mainnet.alchemyapi.io/v2/RWHcfoaBKzRpXnLONcEDnVqtUp7StNYl",
      wsURL: "wss://mainnet.dagger.matic.network",
      payerURL: "https://payer.carbon.network",
      bridgeEntranceAddr: "0x93fd29ff3b662c9e5e15681bb3b139d6ce2ca9c5",
      lockProxyAddr: "0x9a016ce184a22dbf6c17daa59eb7d3140dbd1c54",
      balanceReader: "0xe5e83cdba612672785d835714af26707f98030c3",
      byteCodeHash: "0xc77e5709a69e94d310a6dfb700801758c4caed0385b25bdf82bbdf954e4dd0c3",
    },

    bsc: {
      rpcURL: "https://bsc-dataseed2.binance.org/",
      wsURL: "",
      payerURL: "https://payer.carbon.network",
      bridgeEntranceAddr: "0x93fd29ff3b662c9e5e15681bb3b139d6ce2ca9c5",
      lockProxyAddr: "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
      balanceReader: "0x2b18c5e1edaa7e27d40fec8d0b7d96c5eefa35df",
      byteCodeHash: "0x1b147c1cef546fcbcc1284df778073d65b90f80d5b649a69d5f8a01e186c0ec1",
    },

    neo: {
      rpcURL: "https://mainnet2.neo2.coz.io:443",
      wrapperScriptHash: "f46719e2d16bf50cddcef9d4bbfece901f73cbb6",
    },

    n3: {
      rpcURL: "https://n3-rpc.dem.exchange",
      networkMagic: CONST.MAGIC_NUMBER.MainNet,
    },

    zil: {
      rpcURL: "https://api.zilliqa.com",
      lockProxyAddr: "0xd73c6b871b4d0e130d64581993b745fc938a5be7",
      bridgeEntranceAddr: "0x3fd798e7fc7c5817bae8d06da8050e37ae45a739",
      chainId: 1,
    }
  },

  [Network.TestNet]: {
    network: Network.TestNet,

    tmRpcUrl: "https://test-tm-api.carbon.network",
    tmWsUrl: "wss://test-tm-api.carbon.network",
    restUrl: "https://test-api.carbon.network",
    insightsUrl: "https://test-api-insights.carbon.network",
    hydrogenUrl: "https://test-hydrogen-api.carbon.network",
    wsUrl: "wss://test-ws-api.carbon.network/ws",
    faucetUrl: "https://test-faucet.carbon.network",

    Bech32Prefix: "tswth",

    /**
      * @deprecated on-chain fee service has been removed, please use the hydrogen fee_quote endpoint to query deposit/withdraw fees (please see HydrogenClient for the required query)
    */
    feeURL: `http://54.255.42.175:9001`,
    feeAddress: "989761fb0c0eb0c05605e849cae77d239f98ac7f", // swth1nztkr7cvp6cvq4s9apyu4emayw0e3trl9ezyzs

    eth: {
      rpcURL: "https://eth-rinkeby.alchemyapi.io/v2/2KD9F3mFPNMfflSqZsPuTKmK_w7fFfut",
      wsURL: "",
      payerURL: `https://dev-payer.carbon.network`,
      lockProxyAddr: "0x7f7317167e90afa38972e46b031bb4da0b1f6f73",
      bridgeEntranceAddr: "0xd942ba20a58543878335108aac8c811f1f92fa33",
      balanceReader: "0xf6fBa7Bbc806F55dA52af17203d84C61FfFa18c2",
      byteCodeHash: "0xeb1f732f12a0448d8692018a6d6d381cc7afc84d7e0729007931d966c0c9dc6d",
    },

    bsc: {
      rpcURL: "https://data-seed-prebsc-2-s3.binance.org:8545/",
      wsURL: "",
      payerURL: `https://test-payer.carbon.network`,
      bridgeEntranceAddr: "",
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
      lockProxyAddr: "0xa5a43eecd29534edf80792a9889f52c77455245d",
      bridgeEntranceAddr: "0x347b8478093f7a3ed5bcaec968349538eac6ef98",
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

    /**
      * @deprecated on-chain fee service has been removed, please use the hydrogen fee_quote endpoint to query deposit/withdraw fees (please see HydrogenClient for the required query)
    */
    feeURL: `https://dev-fees.carbon.network`,
    feeAddress: "989761fb0c0eb0c05605e849cae77d239f98ac7f", // swth1nztkr7cvp6cvq4s9apyu4emayw0e3trl9ezyzs

    eth: {
      rpcURL: "https://eth-rinkeby.alchemyapi.io/v2/2KD9F3mFPNMfflSqZsPuTKmK_w7fFfut",
      wsURL: "",
      payerURL: `https://dev-payer.carbon.network`,
      lockProxyAddr: "0x7f7317167e90afa38972e46b031bb4da0b1f6f73",
      bridgeEntranceAddr: "0xd942ba20a58543878335108aac8c811f1f92fa33",
      balanceReader: "0xf6fBa7Bbc806F55dA52af17203d84C61FfFa18c2",
      byteCodeHash: "0xeb1f732f12a0448d8692018a6d6d381cc7afc84d7e0729007931d966c0c9dc6d",
    },

    bsc: {
      rpcURL: "https://data-seed-prebsc-2-s3.binance.org:8545/",
      wsURL: "",
      payerURL: `https://dev-payer.carbon.network`,
      bridgeEntranceAddr: "",
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
      bridgeEntranceAddr: "0xbbe98D54689c96D0278a1222594533e8C5fa551e",
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

    /**
      * @deprecated on-chain fee service has been removed, please use the hydrogen fee_quote endpoint to query deposit/withdraw fees (please see HydrogenClient for the required query)
    */
    feeURL: `http://localhost:9001`,
    feeAddress: "989761fb0c0eb0c05605e849cae77d239f98ac7f",

    eth: {
      rpcURL: "https://ropsten.infura.io/v3/e4dd457b33124bbda7e17500e6efbc27",
      wsURL: "wss://ropsten.dagger.matic.network",
      payerURL: `http://localhost:8001`,
      bridgeEntranceAddr: "",
      lockProxyAddr: "",
      balanceReader: "",
      byteCodeHash: "",
    },

    bsc: {
      rpcURL: "https://data-seed-prebsc-2-s3.binance.org:8545/",
      wsURL: "",
      payerURL: `http://localhost:8001`,
      bridgeEntranceAddr: "",
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
      bridgeEntranceAddr: "",
      chainId: 1,
    }
  },
} as const;
