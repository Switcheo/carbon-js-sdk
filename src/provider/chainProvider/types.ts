/* eslint-disable @typescript-eslint/no-explicit-any */

export interface AssetDenomUnit {
  denom: string;
  exponent: number;
  aliases?: string[];
}

export interface LiquidStakeTrace {
  type: "liquid-stake";
  counterparty: { chain_name: string; base_denom: string };
  provider: string;
}

export interface SyntheicTrace {
  type: "synthetic";
  counterparty: { chain_name: string; base_denom: string };
  provider: string;
}

export interface BridgeTrace {
  type: "bridge";
  counterparty: { chain_name: string; base_denom: string };
  provider: string;
}

export interface WrapTrace {
  type: "wrapped";
  counterparty: { chain_name: string; base_denom: string };
  provider: string;
}

export interface IBCTrace {
  type: "ibc";
  counterparty: {
    port?: string;
    channel_id: string;
    base_denom: string;
    chain_name: string;
  };
  chain: { port?: string; channel_id: string; path?: string };
}

export interface IBCCw20Trace {
  type: "ibc-cw20";
  counterparty: {
    port: string;
    channel_id: string;
    base_denom: string;
    chain_name: string;
  };
  chain: { port: string; channel_id: string };
}

export type AssetTrace =
  | IBCCw20Trace
  | IBCTrace
  | SyntheicTrace
  | LiquidStakeTrace
  | WrapTrace
  | BridgeTrace;

export interface Asset {
  description?: string;
  type_asset?: string;
  address?: string;
  denom_units: AssetDenomUnit[];
  base: string;
  name: string;
  display: string;
  symbol: string;
  logo_URIs?: { png?: string; svg?: string; jpeg?: string };
  coingecko_id?: string;
  keywords?: string[];
  traces?: AssetTrace[];
  ibc?: {
    source_channel?: string;
    source_denom?: string;
    dst_channel?: string;
  };
}

export type AssetList = {
  $schema?: string;
  chain_name: string;
  assets: Asset[];
};

export interface Chain {
  $schema?: string;
  chain_name: string;
  status: string;
  network_type: string;
  update_link?: string;
  pretty_name: string;
  chain_id: string;
  website?: string;
  bech32_prefix: string;
  daemon_name?: string;
  key_algos?: string[];
  keywords?: string[];
  node_home?: string;
  slip44: number;
  logo_URIs?: { png?: string; svg?: string; jpeg?: string };
  fees?: {
    fee_tokens: {
      denom: string;
      fixed_min_gas_price?: number;
      low_gas_price?: number;
      average_gas_price?: number;
      high_gas_price?: number;
    }[];
  };
  staking?: { staking_tokens: { denom: string }[] };
  explorers?: {
    name?: string;
    kind?: string;
    url?: string;
    tx_page?: string;
    account_page?: string;
  }[];
  codebase?: {
    git_repo?: string;
    recommended_version?: string;
    compatible_versions?: string[];
    binaries?: Record<string, string>;
    cosmos_sdk_version?: string;
    tendermint_version?: string;
    cosmwasm_version?: string;
    cosmwasm_enabled?: boolean;
    ibc_go_version?: string;
    ics_enabled?: string[];
    genesis?: { tag?: string; name?: string; genesis_url?: string };
    versions?: {
      name?: string;
      tag?: string;
      height?: number;
      next_version_name?: string;
    }[];
  };
  peers?: {
    seeds?: any[];
    persistent_peers?: {
      id: string;
      address: string;
      provider?: string;
    }[];
  };
  apis?: {
    rpc?: ApiEndpoint[];
    rest?: ApiEndpoint[];
    grpc?: ApiEndpoint[];
    "evm-http-jsonrpc"?: ApiEndpoint[];
    "grpc-web"?: ApiEndpoint[];
    sidechains_rpc?: ApiEndpoint[];
  } & Record<string, ApiEndpoint[]>;
}

interface ApiEndpoint {
  address: string;
  provider?: string;
  archive?: boolean;
}
