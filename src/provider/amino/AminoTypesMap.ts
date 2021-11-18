import { AminoTypes } from "@cosmjs/stargate";
import { AdminAmino, LiquidityPoolAmino, PositionAmino, ProfileAmino, StakingAmino, SubAccountAmino } from "./types";

const AminoTypesMap = new AminoTypes({
  additions: {
    ...AdminAmino,
    ...LiquidityPoolAmino,
    ...PositionAmino,
    ...ProfileAmino,
    ...StakingAmino,
    ...SubAccountAmino,
  },
});

export default AminoTypesMap;
