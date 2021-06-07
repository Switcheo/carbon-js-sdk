import { StdFee } from "@cosmjs/amino";
import { coins } from "@cosmjs/proto-signing";

export const DEFAULT_FEE: StdFee = {
  amount: coins(0, "swth"),
  gas: "100000",
};
