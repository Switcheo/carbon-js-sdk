import { AminoTypes } from "@cosmjs/stargate";
import { LiquidityPoolAmino, SubAccountAmino } from "./types";

const AminoTypesMap = new AminoTypes({
  additions: {
    ...LiquidityPoolAmino,
    ...SubAccountAmino,
  },
});

export default AminoTypesMap;
