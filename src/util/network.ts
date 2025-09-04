import { CarbonEvmChainIDs, DEFAULT_NETWORK, Network } from "@carbon-sdk/constant";
import { CarbonSDK } from "@carbon-sdk/index";
import { parseChainId } from "./ethermint";

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

export const carbonNetworkFromChainId = (parsedEvmChainId: string) => {
  switch (parsedEvmChainId) {
    case parseChainId(CarbonEvmChainIDs[CarbonSDK.Network.LocalHost]):
      return CarbonSDK.Network.LocalHost;
    case parseChainId(CarbonEvmChainIDs[CarbonSDK.Network.DevNet]):
      return CarbonSDK.Network.DevNet;
    case parseChainId(CarbonEvmChainIDs[CarbonSDK.Network.TestNet]):
      return CarbonSDK.Network.TestNet;
    default:
      return CarbonSDK.Network.MainNet;
  }
};
