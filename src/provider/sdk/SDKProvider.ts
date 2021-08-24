import CarbonQueryClient from "@carbon-sdk/CarbonQueryClient";
import { NetworkConfig } from "@carbon-sdk/constant/network";
import { CarbonWallet } from "@carbon-sdk/wallet/CarbonWallet";

interface SDKProvider {
  query: CarbonQueryClient;
  log: (...args: any[]) => void;
  getConnectedWallet: () => CarbonWallet;
  getConfig: () => NetworkConfig;
}

export default SDKProvider;
