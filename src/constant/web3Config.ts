import { CarbonEvmChainIDs, Network, NetworkConfigs } from "@carbon-sdk/constant";
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

export const CARBON_EVM_LOCALHOST: ChangeNetworkParam = {
  chainId: `0x${Number(parseChainId(CarbonEvmChainIDs[Network.LocalHost])).toString(16)}`,
  blockExplorerUrls: ["https://evm-scan.carbon.network"],
  chainName: "Carbon EVM Localhost",
  rpcUrls: [`${NetworkConfigs[Network.LocalHost].evmJsonRpcUrl}`],
  nativeCurrency: CarbonEvmNativeCurrency,
}
export const CARBON_EVM_DEVNET: ChangeNetworkParam = {
  chainId: `0x${Number(parseChainId(CarbonEvmChainIDs[Network.DevNet])).toString(16)}`,
  blockExplorerUrls: ["https://evm-scan.carbon.network"],
  chainName: "Carbon EVM Devnet",
  rpcUrls: [`${NetworkConfigs[Network.DevNet].evmJsonRpcUrl}`],
  nativeCurrency: CarbonEvmNativeCurrency,
}
export const CARBON_EVM_TESTNET: ChangeNetworkParam = {
  chainId: `0x${Number(parseChainId(CarbonEvmChainIDs[Network.TestNet])).toString(16)}`,
  blockExplorerUrls: ["https://evm-scan.carbon.network"],
  chainName: "Carbon EVM Testnet",
  rpcUrls: [`${NetworkConfigs[Network.TestNet].evmJsonRpcUrl}`],
  nativeCurrency: CarbonEvmNativeCurrency,
}

export const CARBON_EVM_MAINNET: ChangeNetworkParam = {
  chainId: `0x${Number(parseChainId(CarbonEvmChainIDs[Network.MainNet])).toString(16)}`,
  blockExplorerUrls: ["https://evm-scan.carbon.network"],
  chainName: "Carbon EVM",
  rpcUrls: [`${NetworkConfigs[Network.MainNet].evmJsonRpcUrl}`],
  nativeCurrency: CarbonEvmNativeCurrency,
}

export const ETH_MAINNET: ChangeNetworkParam = {
  chainId: "0x1",
  rpcUrls: ["https://mainnet.infura.io/v3/"],
};
export const ETH_TESTNET: ChangeNetworkParam = {
  chainId: "0x5",
  rpcUrls: ["https://goerli.infura.io/v3/"],
};
