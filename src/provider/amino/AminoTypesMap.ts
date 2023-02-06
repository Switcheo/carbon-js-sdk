import { AminoTypes } from "@cosmjs/stargate";
import {
  AdminAmino,
  BankAmino,
  BrokerAmino,
  CdpAmino,
  CoinAmino,
  GovAmino,
  IbcAmino,
  LeverageAmino,
  LiquidityPoolAmino,
  MarketAmino,
  OracleAmino,
  OrderAmino,
  PositionAmino,
  ProfileAmino,
  StakingAmino,
  SubAccountAmino,
} from "./types";

const AminoTypesMap = new AminoTypes({
  ...AdminAmino,
  ...BankAmino,
  ...BrokerAmino,
  ...CdpAmino,
  ...CoinAmino,
  ...GovAmino,
  ...IbcAmino,
  ...LeverageAmino,
  ...LiquidityPoolAmino,
  ...MarketAmino,
  ...OracleAmino,
  ...OrderAmino,
  ...PositionAmino,
  ...ProfileAmino,
  ...StakingAmino,
  ...SubAccountAmino,
});

export default AminoTypesMap;
