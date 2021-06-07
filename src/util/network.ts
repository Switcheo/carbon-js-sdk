import { DEFAULT_NETWORK, Network } from "@carbon-sdk/constant";

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
