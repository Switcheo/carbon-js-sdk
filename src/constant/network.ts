export enum Network {
  MainNet = "mainnet",
  TestNet = "testnet",
  DevNet = "devnet",
  LocalHost = "localhost",
}

export const DEFAULT_NETWORK = Network.MainNet;

export interface NetworkConfig {
  rpcUrl: string;
  restUrl: string;
  wsUrl: string;
  faucetUrl: string;
  Bech32Prefix: string;

  /** @deprecated use rpcUrl */
  rpcURL: string;
  /** @deprecated use restUrl */
  restURL: string;
}

export const NetworkConfigs: {
  [key in Network]: NetworkConfig;
} = {
  [Network.MainNet]: {
    rpcUrl: "https://dev-tm-api.carbon.network",
    restUrl: "https://dev-api.carbon.network",
    wsUrl: "wss://dev-ws-api.carbon.network/ws",
    faucetUrl: "https://dev-faucet.carbon.network",

    Bech32Prefix: "swth",

    /** @deprecated use rpcUrl */
    rpcURL: "https://dev-tm-api.carbon.network",
    /** @deprecated use restUrl */
    restURL: "https://dev-api.carbon.network",
  },

  [Network.TestNet]: {
    rpcUrl: "https://dev-tm-api.carbon.network",
    restUrl: "https://dev-api.carbon.network",
    wsUrl: "wss://dev-ws-api.carbon.network/ws",
    faucetUrl: "https://dev-faucet.carbon.network",

    Bech32Prefix: "tswth",

    /** @deprecated use rpcUrl */
    rpcURL: "https://dev-tm-api.carbon.network",
    /** @deprecated use restUrl */
    restURL: "https://dev-api.carbon.network",
  },

  [Network.DevNet]: {
    rpcUrl: "https://dev-tm-api.carbon.network",
    restUrl: "https://dev-api.carbon.network",
    wsUrl: "wss://dev-ws-api.carbon.network/ws",
    faucetUrl: "https://dev-faucet.carbon.network",

    Bech32Prefix: "swth",

    /** @deprecated use rpcUrl */
    rpcURL: "https://dev-tm-api.carbon.network",
    /** @deprecated use restUrl */
    restURL: "https://dev-api.carbon.network",
  },

  [Network.LocalHost]: {
    rpcUrl: "http://localhost:26657",
    restUrl: "http://localhost:1317",
    wsUrl: "ws://localhost:5000/ws",
    faucetUrl: "http://localhost:4500",

    Bech32Prefix: "tswth",

    /** @deprecated use rpcUrl */
    rpcURL: "http://localhost:26657",
    /** @deprecated use restUrl */
    restURL: "http://localhost:1317",
  },
} as const;
