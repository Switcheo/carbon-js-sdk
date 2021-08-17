import { StdFee } from "@cosmjs/amino";
import { coins } from "@cosmjs/proto-signing";
import BigNumber from "bignumber.js";

export const BN_ZERO = new BigNumber(0);

export const DEFAULT_FEE: StdFee = {
  amount: coins(100000000000, "swth"),
  gas: "5000000",
};
