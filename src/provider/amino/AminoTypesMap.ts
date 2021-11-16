import { AminoTypes } from "@cosmjs/stargate";
import { LiquidityPoolAmino, PositionAmino, ProfileAmino, SubAccountAmino } from "./types";

const AminoTypesMap = new AminoTypes({
  additions: {
    ...LiquidityPoolAmino,
    ...PositionAmino,
    ...ProfileAmino,
    ...SubAccountAmino,
  },
});

export default AminoTypesMap;
