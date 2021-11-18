import { AminoTypes } from "@cosmjs/stargate";
import {
  AdminAmino, BankAmino, BrokerAmino, LiquidityPoolAmino, MarketAmino, OracleAmino,
  OrderAmino, PositionAmino, ProfileAmino, StakingAmino, SubAccountAmino,
} from "./types";

const AminoTypesMap = new AminoTypes({
  additions: {
    ...AdminAmino,
    ...BankAmino,
    ...BrokerAmino,
    ...LiquidityPoolAmino,
    ...MarketAmino,
    ...OracleAmino,
    ...OrderAmino,
    ...PositionAmino,
    ...ProfileAmino,
    ...StakingAmino,
    ...SubAccountAmino,
  },
});

export default AminoTypesMap;
