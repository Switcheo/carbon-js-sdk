import { AminoTypes } from "@cosmjs/stargate";
import { LiquidityPoolAmino, ProfileAmino, SubAccountAmino } from "./types";

const AminoTypesMap = new AminoTypes({
  additions: {
    ...LiquidityPoolAmino,
    ...ProfileAmino,
    ...SubAccountAmino,
  },
});

export default AminoTypesMap;
