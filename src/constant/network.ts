export enum Network {
  MainNet = "mainnet",
  TestNet = "testnet",
  DevNet = "devnet",
  LocalHost = "localhost",
}

export const DEFAULT_NETWORK = Network.MainNet;

export interface NetworkConfig {
  rpcURL: string;
  Bech32Prefix: string;
}

export const NetworkConfigs: {
  [key in Network]: NetworkConfig;
} = {
  [Network.MainNet]: {
    rpcURL: "http://localhost:26657",
    Bech32Prefix: "swth",
  },

  [Network.TestNet]: {
    rpcURL: "http://localhost:26657",
    Bech32Prefix: "tswth",
  },

  [Network.DevNet]: {
    rpcURL: "http://localhost:26657",
    Bech32Prefix: "swth",
  },

  [Network.LocalHost]: {
    rpcURL: "http://localhost:26657",
    Bech32Prefix: "tswth",
  },
} as const;
