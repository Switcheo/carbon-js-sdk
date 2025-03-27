import { CONST } from "@cityofzion/neon-core-next";

export enum Network {
  MainNet = "mainnet",
  TestNet = "testnet",
  DevNet = "devnet",
  LocalHost = "localhost",
}

export const CarbonChainIDs = {
  [Network.MainNet]: "carbon-1",
  [Network.TestNet]: "carbon-testnet-42071",
  [Network.DevNet]: "carbon-devnet-39911",
  [Network.LocalHost]: "carbon-localhost",
} as const;


export const CarbonEvmChainIDs = {
  [Network.MainNet]: "carbon_9790-1",
  [Network.TestNet]: "carbon_9792-1",
  [Network.DevNet]: "carbon_9791-1",
  [Network.LocalHost]: "carbon_9999-1",
} as const;

export const DEFAULT_NETWORK = Network.MainNet;

export interface BasicNetworkConfig {
  rpcURL: string
}

export interface EthNetworkConfig extends BasicNetworkConfig {
  wsURL: string;
  payerURL: string;
  lockProxyAddr: string;
  bridgeEntranceAddr: string;
  balanceReader: string;
  byteCodeHash: string;
}

export interface NeoNetworkConfig extends BasicNetworkConfig {
  wrapperScriptHash: string;
}

export interface N3NetworkConfig extends BasicNetworkConfig {
  networkMagic: number;
}

export interface ZilNetworkConfig extends BasicNetworkConfig {
  chainId: number;
  lockProxyAddr: string;
  bridgeEntranceAddr: string;
}

export interface NetworkConfig {
  tmRpcUrl: string;
  tmWsUrl: string;
  restUrl: string;
  grpcUrl: string;
  evmJsonRpcUrl: string;
  evmWsUrl: string;
  insightsUrl: string;
  hydrogenUrl: string;
  wsUrl: string;
  faucetUrl: string;
  authUrl: string;
  Bech32Prefix: string;

  network: Network;
  chainId: string;

  feeAddress: string;

  eth: EthNetworkConfig;
  bsc: EthNetworkConfig;
  arbitrum: EthNetworkConfig;
  polygon: EthNetworkConfig;
  okc: EthNetworkConfig;
  neo: NeoNetworkConfig;
  n3: N3NetworkConfig;
  zil: ZilNetworkConfig;
  mantle: EthNetworkConfig;
  optimism: EthNetworkConfig;
  base: EthNetworkConfig;
  avax: EthNetworkConfig;
  monad: EthNetworkConfig;
}

export interface NetworkConfigProvider {
  getConfig(): NetworkConfig;
}

const EthNetworkConfigFallback: EthNetworkConfig = {
  rpcURL: "",
  wsURL: "",
  payerURL: "",
  bridgeEntranceAddr: "",
  lockProxyAddr: "",
  balanceReader: "",
  byteCodeHash: "",
}

export const NetworkConfigs: {
  [key in Network]: NetworkConfig;
} = {
  [Network.MainNet]: {
    network: Network.MainNet,
    chainId: "carbon-1",

    tmRpcUrl: "https://tm-api.carbon.network/",
    tmWsUrl: "wss://tm-api.carbon.network/",
    restUrl: "https://api.carbon.network",
    grpcUrl: "grpc.carbon.network",
    evmJsonRpcUrl: "https://evm-api.carbon.network/",
    evmWsUrl: "wss://evm-ws.carbon.network/",
    insightsUrl: "https://api-insights.carbon.network",
    hydrogenUrl: "https://hydrogen-api.carbon.network",
    wsUrl: "wss://ws-api.carbon.network/ws",
    authUrl: "https://auth.dem.exchange/oauth/access_token",
    faucetUrl: "",

    Bech32Prefix: "swth",

    feeAddress: "08d8f59e475830d9a1bb97d74285c4d34c6dac08", // swth1prv0t8j8tqcdngdmjlt59pwy6dxxmtqgycy2h7

    eth: {
      rpcURL: "https://ethereum-rpc.publicnode.com",
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

    arbitrum: {
      rpcURL: "https://arb1.arbitrum.io/rpc",
      wsURL: "",
      payerURL: "https://payer.carbon.network",
      bridgeEntranceAddr: "0x7b1c7216c117cc62d875e3086518b238392cf04d",
      lockProxyAddr: "0xb1e6f8820826491fcc5519f84ff4e2bdbb6e3cad",
      balanceReader: "0x7e8d8c98a016877cb3103e837fc71d41b155af70",
      byteCodeHash: "", // TODO: update when byteCodeHash is added
    },

    polygon: {
      rpcURL: "https://polygon-rpc.com",
      wsURL: "",
      payerURL: "https://payer.carbon.network",
      bridgeEntranceAddr: "0x75d302266926CB34B7564AAF3102c258234A35F2",
      lockProxyAddr: "0x43138036d1283413035B8eca403559737E8f7980",
      balanceReader: "0x7F31D17944a3147C31C3b55B71ebDcC57B6aCC84",
      byteCodeHash: "", // TODO: update when byteCodeHash is added
    },

    okc: {
      rpcURL: "https://exchainrpc.okex.org",
      wsURL: "",
      payerURL: "https://payer.carbon.network",
      bridgeEntranceAddr: "0x7b1c7216c117cc62d875e3086518b238392cf04d",
      lockProxyAddr: "0xb1e6f8820826491fcc5519f84ff4e2bdbb6e3cad",
      balanceReader: "0x43138036d1283413035B8eca403559737E8f7980",
      byteCodeHash: "", // TODO: update when byteCodeHash is added
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
      bridgeEntranceAddr: "0x5d78b51a1ceae202a793f4e87478253f41a22956",
      chainId: 1,
    },

    mantle: {
      ...EthNetworkConfigFallback,
      rpcURL: "https://rpc.mantle.xyz",
    },

    optimism: {
      ...EthNetworkConfigFallback,
      rpcURL: "https://mainnet.optimism.io",
    },

    base: {
      ...EthNetworkConfigFallback,
      rpcURL: "https://base-rpc.publicnode.com",
    },

    avax: {
      ...EthNetworkConfigFallback,
      rpcURL: "https://api.avax.network/ext/bc/C/rpc",
    },
    monad: {
      ...EthNetworkConfigFallback,
    },
  },

  [Network.TestNet]: {
    network: Network.TestNet,
    chainId: "carbon-testnet-42071",

    tmRpcUrl: "https://test-tm-api.carbon.network",
    tmWsUrl: "wss://test-tm-api.carbon.network",
    restUrl: "https://test-api.carbon.network",
    grpcUrl: "test-grpc.carbon.network",
    evmJsonRpcUrl: "https://test-evm-api.carbon.network/",
    evmWsUrl: "wss://test-evm-ws.carbon.network/",
    insightsUrl: "https://test-api-insights.carbon.network",
    hydrogenUrl: "https://test-hydrogen-api.carbon.network",
    wsUrl: "wss://test-ws-api.carbon.network/ws",
    authUrl: "https://test-auth.dem.exchange/oauth/access_token",
    faucetUrl: "https://test-faucet.carbon.network",

    Bech32Prefix: "tswth",

    feeAddress: "989761fb0c0eb0c05605e849cae77d239f98ac7f", // swth1nztkr7cvp6cvq4s9apyu4emayw0e3trl9ezyzs

    eth: {
      rpcURL: "https://sepolia.drpc.org",
      wsURL: "",
      payerURL: `https://dev-payer.carbon.network`,
      lockProxyAddr: "0xa06569e48fed18ed840c3f064ffd9bbf95debce7",
      bridgeEntranceAddr: "0x23D969345788bE24e5110F4c5D7B978DacDe8B1C",
      balanceReader: "0xf6fBa7Bbc806F55dA52af17203d84C61FfFa18c2",
      byteCodeHash: "0xeb1f732f12a0448d8692018a6d6d381cc7afc84d7e0729007931d966c0c9dc6d",
    },

    bsc: {
      rpcURL: "https://data-seed-prebsc-1-s2.binance.org:8545/",
      wsURL: "",
      payerURL: `https://test-payer.carbon.network`,
      bridgeEntranceAddr: "",
      lockProxyAddr: "0x7c2b13d656d222cb79670e301dd826dc5b8dc20c",
      balanceReader: "0x25c22f65cb820e787a13951f295d0b86db7b07b5",
      byteCodeHash: "0x1b147c1cef546fcbcc1284df778073d65b90f80d5b649a69d5f8a01e186c0ec1",
    },

    arbitrum: {
      rpcURL: "https://rinkeby.arbitrum.io/rpc",
      wsURL: "",
      payerURL: "https://test-payer.carbon.network",
      bridgeEntranceAddr: "",
      lockProxyAddr: "",
      balanceReader: "",
      byteCodeHash: "",
    },

    polygon: {
      rpcURL: "https://rpc-mumbai.maticvigil.com",
      wsURL: "",
      payerURL: "https://test-payer.carbon.network",
      bridgeEntranceAddr: "",
      lockProxyAddr: "",
      balanceReader: "",
      byteCodeHash: "",
    },

    okc: {
      rpcURL: "https://exchaintestrpc.okex.org",
      wsURL: "",
      payerURL: "https://test-payer.carbon.network",
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
      rpcURL: "https://dev-api.zilliqa.com",
      lockProxyAddr: "0xe7bef341044f1b8d5ab1a25172e2678a1e75479a",
      bridgeEntranceAddr: "0xccf798e633d6fb6505b494fc010903f9be3bc99b",
      chainId: 111,
    },

    mantle: {
      ...EthNetworkConfigFallback,
      rpcURL: "https://rpc.sepolia.mantle.xyz",
    },

    optimism: {
      ...EthNetworkConfigFallback,
      rpcURL: "https://sepolia.optimism.io",
    },

    base: {
      ...EthNetworkConfigFallback,
      rpcURL: "https://base-sepolia-rpc.publicnode.com",
    },

    avax: {
      ...EthNetworkConfigFallback,
      rpcURL: "https://ava-testnet.public.blastapi.io/ext/bc/C/rpc",
    },
    monad: {
      ...EthNetworkConfigFallback,
      rpcURL: "https://testnet-rpc.monad.xyz",
    },
  },

  [Network.DevNet]: {
    network: Network.DevNet,
    chainId: "carbon-devnet-39911",

    tmRpcUrl: "https://dev-tm-api.carbon.network",
    tmWsUrl: "wss://dev-tm-api.carbon.network",
    restUrl: "https://dev-api.carbon.network",
    grpcUrl: "dev-grpc.carbon.network",
    evmJsonRpcUrl: "https://dev-evm-api.carbon.network/",
    evmWsUrl: "wss://dev-evm-ws.carbon.network/",
    insightsUrl: "https://dev-api-insights.carbon.network",
    hydrogenUrl: "https://dev-hydrogen-api.carbon.network",
    wsUrl: "wss://dev-ws-api.carbon.network/ws",
    authUrl: "https://dev-auth.dem.exchange/oauth/access_token",
    faucetUrl: "https://dev-faucet.carbon.network",

    //* OnPrem network params for running locally
    // tmRpcUrl: "http://202.156.63.105:30007",
    // tmWsUrl: "ws://202.156.63.105:30007",
    // restUrl: "http://202.156.63.105:30002",
    // grpcUrl: "http://202.156.63.105:30005",
    // evmJsonRpcUrl: "http://202.156.63.105:30008",
    // evmWsUrl: "ws://202.156.63.105:30009/ws",
    // insightsUrl: "https://dev-api-insights.carbon.network",
    // hydrogenUrl: "https://dev-hydrogen-api.carbon.network",
    // wsUrl: "ws://202.156.63.105:30004/ws",
    // faucetUrl: "http://202.156.63.105:30003",

    Bech32Prefix: "swth",

    feeAddress: "989761fb0c0eb0c05605e849cae77d239f98ac7f", // swth1nztkr7cvp6cvq4s9apyu4emayw0e3trl9ezyzs

    eth: {
      rpcURL: "https://sepolia.drpc.org",
      wsURL: "",
      payerURL: `https://dev-payer.carbon.network`,
      lockProxyAddr: "0x7f7317167e90afa38972e46b031bb4da0b1f6f73",
      bridgeEntranceAddr: "0xd942ba20a58543878335108aac8c811f1f92fa33",
      balanceReader: "0xf6fBa7Bbc806F55dA52af17203d84C61FfFa18c2",
      byteCodeHash: "0xeb1f732f12a0448d8692018a6d6d381cc7afc84d7e0729007931d966c0c9dc6d",
    },

    bsc: {
      rpcURL: "https://data-seed-prebsc-1-s2.binance.org:8545/",
      wsURL: "",
      payerURL: `https://dev-payer.carbon.network`,
      bridgeEntranceAddr: "",
      lockProxyAddr: "0x7c2b13d656d222cb79670e301dd826dc5b8dc20c",
      balanceReader: "0x25c22f65cb820e787a13951f295d0b86db7b07b5",
      byteCodeHash: "0x1b147c1cef546fcbcc1284df778073d65b90f80d5b649a69d5f8a01e186c0ec1",
    },

    arbitrum: {
      rpcURL: "https://rinkeby.arbitrum.io/rpc",
      wsURL: "",
      payerURL: "https://test-payer.carbon.network",
      bridgeEntranceAddr: "",
      lockProxyAddr: "",
      balanceReader: "",
      byteCodeHash: "",
    },

    polygon: {
      rpcURL: "https://rpc-mumbai.maticvigil.com",
      wsURL: "",
      payerURL: "https://test-payer.carbon.network",
      bridgeEntranceAddr: "",
      lockProxyAddr: "",
      balanceReader: "",
      byteCodeHash: "",
    },

    okc: {
      rpcURL: "https://exchaintestrpc.okex.org",
      wsURL: "",
      payerURL: "https://test-payer.carbon.network",
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
      rpcURL: "https://dev-api.zilliqa.com",
      lockProxyAddr: "0xa5a43eecd29534edf80792a9889f52c77455245d",
      bridgeEntranceAddr: "0xbbe98D54689c96D0278a1222594533e8C5fa551e",
      chainId: 333,
    },

    mantle: {
      ...EthNetworkConfigFallback,
      rpcURL: "https://rpc.sepolia.mantle.xyz",
    },

    optimism: {
      ...EthNetworkConfigFallback,
      rpcURL: "https://sepolia.optimism.io",
    },

    base: {
      ...EthNetworkConfigFallback,
      rpcURL: "https://base-sepolia-rpc.publicnode.com",
    },

    avax: {
      ...EthNetworkConfigFallback,
      rpcURL: "https://ava-testnet.public.blastapi.io/ext/bc/C/rpc",
    },
    monad: {
      ...EthNetworkConfigFallback,
      rpcURL: "https://testnet-rpc.monad.xyz",
    },
  },

  [Network.LocalHost]: {
    network: Network.LocalHost,
    chainId: "carbon-localhost",

    tmRpcUrl: "http://localhost:26657",
    tmWsUrl: "ws://localhost:26657",
    restUrl: "http://localhost:1317",
    grpcUrl: "localhost:9090",
    evmJsonRpcUrl: "http://localhost:8545/",
    evmWsUrl: "ws://localhost:8546/",
    insightsUrl: "http://localhost:8181",
    hydrogenUrl: "",
    wsUrl: "ws://localhost:5001/ws",
    authUrl: "http://localhost:9794/oauth/access_token",
    faucetUrl: "http://localhost:4500",

    Bech32Prefix: "tswth",

    feeAddress: "989761fb0c0eb0c05605e849cae77d239f98ac7f",

    eth: {
      rpcURL: "https://sepolia.drpc.org",
      wsURL: "wss://ropsten.dagger.matic.network",
      payerURL: `http://localhost:8001`,
      bridgeEntranceAddr: "",
      lockProxyAddr: "",
      balanceReader: "",
      byteCodeHash: "",
    },

    bsc: {
      rpcURL: "https://data-seed-prebsc-1-s2.binance.org:8545/",
      wsURL: "",
      payerURL: `http://localhost:8001`,
      bridgeEntranceAddr: "",
      lockProxyAddr: "",
      balanceReader: "",
      byteCodeHash: "",
    },

    arbitrum: {
      rpcURL: "https://rinkeby.arbitrum.io/rpc",
      wsURL: "",
      payerURL: "https://test-payer.carbon.network",
      bridgeEntranceAddr: "",
      lockProxyAddr: "",
      balanceReader: "",
      byteCodeHash: "",
    },

    polygon: {
      rpcURL: "https://rpc-mumbai.maticvigil.com",
      wsURL: "",
      payerURL: "https://test-payer.carbon.network",
      bridgeEntranceAddr: "",
      lockProxyAddr: "",
      balanceReader: "",
      byteCodeHash: "",
    },

    okc: {
      rpcURL: "https://exchaintestrpc.okex.org",
      wsURL: "",
      payerURL: "https://test-payer.carbon.network",
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
    },

    mantle: {
      ...EthNetworkConfigFallback,
      rpcURL: "https://rpc.sepolia.mantle.xyz",
    },

    optimism: {
      ...EthNetworkConfigFallback,
      rpcURL: "https://sepolia.optimism.io",
    },

    base: {
      ...EthNetworkConfigFallback,
      rpcURL: "https://base-sepolia-rpc.publicnode.com",
    },

    avax: {
      ...EthNetworkConfigFallback,
      rpcURL: "https://ava-testnet.public.blastapi.io/ext/bc/C/rpc",
    },
    monad: {
      ...EthNetworkConfigFallback,
      rpcURL: "https://testnet-rpc.monad.xyz",
    },
  },
} as const;
