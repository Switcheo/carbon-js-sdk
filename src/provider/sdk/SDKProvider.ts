import { CarbonQueryClient, HydrogenClient, TokenClient } from "@carbon-sdk/clients";
import { NetworkConfig } from "@carbon-sdk/constant/network";
import { CarbonWallet } from "@carbon-sdk/wallet/CarbonWallet";

interface SDKProvider {
  hydrogen: HydrogenClient;
  query: CarbonQueryClient;
  getTokenClient(): TokenClient;
  log: (...args: any[]) => void;
  getConnectedWallet: () => CarbonWallet;
  getConfig: () => NetworkConfig;
}

export default SDKProvider;
