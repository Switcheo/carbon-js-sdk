import { StdFee } from "@cosmjs/amino";
import { coins } from "@cosmjs/proto-signing";
import BigNumber from "bignumber.js";

export const DEFAULT_FEE_DENOM = "swth";

// 0.0000001 SWTH
// 10 SWTH sats
export const DEFAULT_GAS_PRICE = new BigNumber(10);
export const DEFAULT_GAS = new BigNumber(10000000);

export const DEFAULT_FEE: StdFee = {
  amount: coins(DEFAULT_GAS_PRICE.times(DEFAULT_GAS).dp(0).toString(), "swth"),
  gas: DEFAULT_GAS.toString(10),
};

export interface GasPriceStep {
  low: number;
  average: number;
  high: number;
}

export const CARBON_GAS_PRICE: GasPriceStep = {
  low: 1,
  average: 1.5,
  high: 2,
};
