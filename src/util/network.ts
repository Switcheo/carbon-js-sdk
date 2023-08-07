import { CarbonEvmChainIDs, DEFAULT_NETWORK, Network } from "@carbon-sdk/constant";
import { CarbonSDK } from "..";

/**
 *
 * @param network
 * @param defaultNetwork
 * @returns
 */
export const parseNetwork = (network: string, defaultNetwork: Network | null = DEFAULT_NETWORK) => {
  switch (network?.toLowerCase?.()) {
    case "main":
    case "mainnet":
      return Network.MainNet;
    case "test":
    case "testnet":
      return Network.TestNet;
    case "dev":
    case "devnet":
      return Network.DevNet;
    case "local":
    case "localhost":
      return Network.LocalHost;
  }

  return defaultNetwork;
};

export const carbonNetworkFromChainId = (chainId: string) => {
  switch (chainId) {
    case CarbonEvmChainIDs[CarbonSDK.Network.LocalHost]: return CarbonSDK.Network.LocalHost;
    case CarbonEvmChainIDs[CarbonSDK.Network.DevNet]: return CarbonSDK.Network.DevNet;
    case CarbonEvmChainIDs[CarbonSDK.Network.TestNet]: return CarbonSDK.Network.TestNet;
    default: return CarbonSDK.Network.MainNet;
  }
}
