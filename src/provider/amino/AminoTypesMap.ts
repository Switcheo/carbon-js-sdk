import { AminoTypes } from "@cosmjs/stargate";
import { LiquidityPoolAmino } from "./types";

const AminoTypesMap = new AminoTypes({
  additions: {
    ...LiquidityPoolAmino,
  },
});

export default AminoTypesMap;
