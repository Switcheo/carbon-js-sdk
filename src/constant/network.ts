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

export interface ZilNetworkConfig {
  rpcURL: string
  chainId: number
  lockProxyAddr: string
}

export interface NetworkConfig {
  rpcUrl: string;
  restUrl: string;
  wsUrl: string;
  faucetUrl: string;
  Bech32Prefix: string;

  network: Network;

  feeURL: string
  feeAddress: string

  eth: EthNetworkConfig
  bsc: EthNetworkConfig

  neo: NeoNetworkConfig
  zil: ZilNetworkConfig

  /** @deprecated use rpcUrl */
  rpcURL: string;
  /** @deprecated use restUrl */
  restURL: string;
}

export interface NetworkConfigProvider {
  getConfig(): NetworkConfig
}

export const NetworkConfigs: {
  [key in Network]: NetworkConfig;
} = {
  [Network.MainNet]: {
    network: Network.MainNet,

    rpcUrl: "https://dev-tm-api.carbon.network",
    restUrl: "https://dev-api.carbon.network",
    wsUrl: "wss://dev-ws-api.carbon.network/ws",
    faucetUrl: "https://dev-faucet.carbon.network",

    Bech32Prefix: "swth",

    /** @deprecated use rpcUrl */
    rpcURL: "https://dev-tm-api.carbon.network",
    /** @deprecated use restUrl */
    restURL: "https://dev-api.carbon.network",

    feeURL: `https://fees.switcheo.org`,
    feeAddress: '08d8f59e475830d9a1bb97d74285c4d34c6dac08', // swth1prv0t8j8tqcdngdmjlt59pwy6dxxmtqgycy2h7

    eth: {
      rpcURL: 'https://eth-mainnet.alchemyapi.io/v2/RWHcfoaBKzRpXnLONcEDnVqtUp7StNYl',
      wsURL: 'wss://mainnet.dagger.matic.network',
      payerURL: `https://eth-payer.switcheo.org`,
      lockProxyAddr: '0x9a016ce184a22dbf6c17daa59eb7d3140dbd1c54',
      balanceReader: '0xe5e83cdba612672785d835714af26707f98030c3',
      byteCodeHash: '0xc77e5709a69e94d310a6dfb700801758c4caed0385b25bdf82bbdf954e4dd0c3',
    },

    bsc: {
      rpcURL: 'https://bsc-dataseed2.binance.org/',
      wsURL: '',
      payerURL: `https://bsc-payer.switcheo.org`,
      lockProxyAddr: '0xb5d4f343412dc8efb6ff599d790074d0f1e8d430',
      balanceReader: '0x2b18c5e1edaa7e27d40fec8d0b7d96c5eefa35df',
      byteCodeHash: '0x1b147c1cef546fcbcc1284df778073d65b90f80d5b649a69d5f8a01e186c0ec1',
    },

    neo: {
      rpcURL: 'https://seed3.switcheo.network:443',
      wrapperScriptHash: 'f46719e2d16bf50cddcef9d4bbfece901f73cbb6',
    },

    zil: {
      rpcURL: '',
      lockProxyAddr: '',
      chainId: 1,
    }
  },

  [Network.TestNet]: {
    network: Network.TestNet,

    rpcUrl: "https://test-tm-api.carbon.network",
    restUrl: "https://test-api.carbon.network",
    wsUrl: "wss://test-ws-api.carbon.network",
    faucetUrl: "https://test-faucet.carbon.network",

    Bech32Prefix: "tswth",

    feeURL: `http://54.255.42.175:9001`,
    feeAddress: '989761fb0c0eb0c05605e849cae77d239f98ac7f',

    /** @deprecated use rpcUrl */
    rpcURL: "https://test-tm-api.carbon.network",
    /** @deprecated use restUrl */
    restURL: "https://test-api.carbon.network",

    eth: {
      rpcURL: 'https://eth-mainnet.alchemyapi.io/v2/5J5-HepOkCigvEkfL3Latf2aWJwNDe3e',
      wsURL: 'wss://ropsten.dagger.matic.network',
      payerURL: `http://54.255.42.175:7001`,
      lockProxyAddr: '0x86edf4748efeded37f4932b7de93a575909cc892',
      balanceReader: '0xa74c81866c5bfff6684aa8edf35a5de8c3b9f173',
      byteCodeHash: '0xc77e5709a69e94d310a6dfb700801758c4caed0385b25bdf82bbdf954e4dd0c3',
    },

    bsc: {
      rpcURL: 'https://data-seed-prebsc-2-s3.binance.org:8545/',
      wsURL: '',
      payerURL: `http://54.255.42.175:8001`,
      lockProxyAddr: '0x7c2b13d656d222cb79670e301dd826dc5b8dc20c',
      balanceReader: '0x25c22f65cb820e787a13951f295d0b86db7b07b5',
      byteCodeHash: '0x1b147c1cef546fcbcc1284df778073d65b90f80d5b649a69d5f8a01e186c0ec1',
    },

    neo: {
      rpcURL: 'https://g30trj885e.execute-api.ap-southeast-1.amazonaws.com',
      wrapperScriptHash: 'f46719e2d16bf50cddcef9d4bbfece901f73cbb6',
    },

    zil: {
      rpcURL: '',
      lockProxyAddr: '',
      chainId: 333,
    }
  },

  [Network.DevNet]: {
    network: Network.DevNet,

    rpcUrl: "https://dev-tm-api.carbon.network",
    restUrl: "https://dev-api.carbon.network",
    wsUrl: "wss://dev-ws-api.carbon.network/ws",
    faucetUrl: "https://dev-faucet.carbon.network",

    Bech32Prefix: "swth",

    /** @deprecated use rpcUrl */
    rpcURL: "https://dev-tm-api.carbon.network",
    /** @deprecated use restUrl */
    restURL: "https://dev-api.carbon.network",

    feeURL: `http://13.251.218.38:9001`,
    feeAddress: '989761fb0c0eb0c05605e849cae77d239f98ac7f',

    eth: {
      rpcURL: 'https://eth-ropsten.alchemyapi.io/v2/2KD9F3mFPNMfflSqZsPuTKmK_w7fFfut',
      wsURL: 'wss://ropsten.dagger.matic.network',
      payerURL: `http://13.251.218.38:7001`,
      lockProxyAddr: '0x91f453851e297524749a740d53cf54a89231487c',
      balanceReader: '0xa74c81866c5bfff6684aa8edf35a5de8c3b9f173',
      byteCodeHash: '0xc77e5709a69e94d310a6dfb700801758c4caed0385b25bdf82bbdf954e4dd0c3',
    },

    bsc: {
      rpcURL: 'https://data-seed-prebsc-2-s3.binance.org:8545/',
      wsURL: '',
      payerURL: `http://13.251.218.38:8001`,
      lockProxyAddr: '0x7c2b13d656d222cb79670e301dd826dc5b8dc20c',
      balanceReader: '0x25c22f65cb820e787a13951f295d0b86db7b07b5',
      byteCodeHash: '0x1b147c1cef546fcbcc1284df778073d65b90f80d5b649a69d5f8a01e186c0ec1',
    },

    neo: {
      rpcURL: 'https://g30trj885e.execute-api.ap-southeast-1.amazonaws.com',
      wrapperScriptHash: 'f46719e2d16bf50cddcef9d4bbfece901f73cbb6',
    },

    zil: {
      rpcURL: 'https://poly-api.zilliqa.com',
      lockProxyAddr: '0xa5484b227f35f5e192e444146a3d9e09f4cdad80',
      chainId: 888,
    }
  },

  [Network.LocalHost]: {
    network: Network.LocalHost,

    rpcUrl: "http://localhost:26657",
    restUrl: "http://localhost:1317",
    wsUrl: "ws://localhost:5000/ws",
    faucetUrl: "http://localhost:4500",

    Bech32Prefix: "tswth",

    /** @deprecated use rpcUrl */
    rpcURL: "http://localhost:26657",
    /** @deprecated use restUrl */
    restURL: "http://localhost:1317",

    feeURL: `http://localhost:9001`,
    feeAddress: '989761fb0c0eb0c05605e849cae77d239f98ac7f',

    eth: {
      rpcURL: 'https://ropsten.infura.io/v3/e4dd457b33124bbda7e17500e6efbc27',
      wsURL: 'wss://ropsten.dagger.matic.network',
      payerURL: `http://localhost:7001`,
      lockProxyAddr: '',
      balanceReader: '',
      byteCodeHash: '',
    },

    bsc: {
      rpcURL: 'https://data-seed-prebsc-2-s3.binance.org:8545/',
      wsURL: '',
      payerURL: `http://localhost:8001`,
      lockProxyAddr: '',
      balanceReader: '',
      byteCodeHash: '',
    },

    neo: {
      rpcURL: 'https://g30trj885e.execute-api.ap-southeast-1.amazonaws.com',
      wrapperScriptHash: 'f46719e2d16bf50cddcef9d4bbfece901f73cbb6',
    },

    zil: {
      rpcURL: '',
      lockProxyAddr: '',
      chainId: 1,
    }
  },
} as const;
