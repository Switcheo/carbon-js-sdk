import { Network } from "./network";
import { SWTHAddress } from "@carbon-sdk/util/address";

export const GovModuleAddress = {
  [Network.MainNet]: SWTHAddress.getModuleAddress("gov", Network.MainNet),
  [Network.TestNet]: SWTHAddress.getModuleAddress("gov", Network.TestNet),
  [Network.DevNet]: SWTHAddress.getModuleAddress("gov", Network.DevNet),
  [Network.LocalHost]: SWTHAddress.getModuleAddress("gov", Network.LocalHost),
} as const;