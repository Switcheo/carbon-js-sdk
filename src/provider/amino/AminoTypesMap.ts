import { AminoTypes } from "@cosmjs/stargate";
import {
  AdminAmino,
  BankAmino,
  BrokerAmino,
  CdpAmino,
  CoinAmino,
  EvmAmino,
  EvmMergeAmino,
  FeeMarketAmino,
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
import PerpsliquidityAmino from "./types/perpsliquidity";

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
  ...EvmAmino,
  ...EvmMergeAmino,
  ...FeeMarketAmino,
  ...PerpsliquidityAmino
});

export default AminoTypesMap;
