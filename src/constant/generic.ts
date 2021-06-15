import { StdFee } from "@cosmjs/amino";
import { coins } from "@cosmjs/proto-signing";

export const DEFAULT_FEE: StdFee = {
  amount: coins(100000000, "swth"),
  gas: "100000",
};
