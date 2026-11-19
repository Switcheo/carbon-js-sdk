import { CarbonEvmChainIDs, Network, NetworkConfig, NetworkConfigs } from "./network";
import { parseChainId } from "@carbon-sdk/util/ethermint";

export interface ChangeNetworkParam {
  chainId: string;
  blockExplorerUrls?: string[];
  chainName?: string;
  iconUrls?: string[];
  nativeCurrency?: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls?: string[];
}

export const CarbonEvmNativeCurrency = {
  decimals: 18,
  name: "SWTH",
  symbol: "SWTH",
}

const localRpcUrl = NetworkConfigs[Network.LocalHost].evmJsonRpcUrl;

export const CARBON_EVM_LOCALHOST: ChangeNetworkParam = {
  chainId: `0x${Number(parseChainId(CarbonEvmChainIDs[Network.LocalHost])).toString(16)}`,
  chainName: "Carbon EVM Localhost",
  rpcUrls: localRpcUrl ? [localRpcUrl] : undefined,
  nativeCurrency: CarbonEvmNativeCurrency,
}
export const CARBON_EVM_DEVNET: ChangeNetworkParam = {
  chainId: `0x${Number(parseChainId(CarbonEvmChainIDs[Network.DevNet])).toString(16)}`,
  chainName: "Carbon EVM Devnet",
  nativeCurrency: CarbonEvmNativeCurrency,
}
export const CARBON_EVM_TESTNET: ChangeNetworkParam = {
  chainId: `0x${Number(parseChainId(CarbonEvmChainIDs[Network.TestNet])).toString(16)}`,
  chainName: "Carbon EVM Testnet",
  nativeCurrency: CarbonEvmNativeCurrency,
}

export const CARBON_EVM_MAINNET: ChangeNetworkParam = {
  chainId: `0x${Number(parseChainId(CarbonEvmChainIDs[Network.MainNet])).toString(16)}`,
  chainName: "Carbon EVM",
  nativeCurrency: CarbonEvmNativeCurrency,
}

const carbonWalletNetworks = {
  [Network.MainNet]: CARBON_EVM_MAINNET,
  [Network.TestNet]: CARBON_EVM_TESTNET,
  [Network.DevNet]: CARBON_EVM_DEVNET,
  [Network.LocalHost]: CARBON_EVM_LOCALHOST,
};

export function getCarbonEvmNetworkParams(network: Network, config?: NetworkConfig): ChangeNetworkParam {
  const params = carbonWalletNetworks[network] ?? CARBON_EVM_MAINNET;
  const rpc = config && config.network === network ? config.evmJsonRpcUrl?.trim() : undefined;
  return rpc ? { ...params, rpcUrls: [rpc] } : params;
}

export const ETH_MAINNET: ChangeNetworkParam = {
  chainId: "0x1",
  rpcUrls: ["https://mainnet.infura.io/v3/"],
};
export const ETH_TESTNET: ChangeNetworkParam = {
  chainId: "0x5",
  rpcUrls: ["https://goerli.infura.io/v3/"],
};
