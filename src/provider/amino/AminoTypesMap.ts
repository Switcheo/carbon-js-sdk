import { AminoTypes } from "@cosmjs/stargate";
import { AdminAmino, BankAmino, LiquidityPoolAmino, PositionAmino, ProfileAmino, StakingAmino, SubAccountAmino } from "./types";

const AminoTypesMap = new AminoTypes({
  additions: {
    ...AdminAmino,
    ...BankAmino,
    ...LiquidityPoolAmino,
    ...PositionAmino,
    ...ProfileAmino,
    ...StakingAmino,
    ...SubAccountAmino,
  },
});

export default AminoTypesMap;
