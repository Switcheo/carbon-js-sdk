import { AminoTypes } from "@cosmjs/stargate";
import { LiquidityPoolAmino, PositionAmino, ProfileAmino, StakingAmino, SubAccountAmino } from "./types";

const AminoTypesMap = new AminoTypes({
  additions: {
    ...LiquidityPoolAmino,
    ...PositionAmino,
    ...ProfileAmino,
    ...StakingAmino,
    ...SubAccountAmino,
  },
});

export default AminoTypesMap;
