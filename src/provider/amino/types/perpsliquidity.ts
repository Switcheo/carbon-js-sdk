import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, ConvertEncType, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  CreatePool: "perpsliquidity/CreatePool",
  UpdatePool: "perpsliquidity/UpdatePool",
  DepositToPool: "perpsliquidity/DepositToPool",
  RegisterToPool: "perpsliquidity/RegisterToPool",
  DeregisterToPool: "perpsliquidity/DeregisterToPool",
  WithdrawFromPool: "perpsliquidity/WithdrawToPool",
  UpdateMarketConfig: "perpsliquidity/UpdateMarketConfig",
};

const MsgCreatePool: AminoInit = {
  aminoType: TxTypes.CreatePool,
  valueMap: {},
};
const MsgUpdatePool: AminoInit = {
  aminoType: TxTypes.UpdatePool,
  valueMap: {
    poolId: ConvertEncType.Long,
  },
};

const MsgRegisterToPool: AminoInit = {
  aminoType: TxTypes.RegisterToPool,
  valueMap: {
    poolId: ConvertEncType.Long,
  },
};

const MsgDeregisterFromPool: AminoInit = {
  aminoType: TxTypes.DeregisterFromPool,
  valueMap: {},
};

const MsgDepositToPool: AminoInit = {
  aminoType: TxTypes.DepositToPool,
  valueMap: {
    poolId: ConvertEncType.Long,
  },
};

const MsgWithdrawFromPool: AminoInit = {
  aminoType: TxTypes.WithdrawFromPool,
  valueMap: {
    poolId: ConvertEncType.Long,
  },
};

const PerpsliquidityAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgCreatePool]: generateAminoType(MsgCreatePool),
  [CarbonTx.Types.MsgUpdatePool]: generateAminoType(MsgUpdatePool),
  [CarbonTx.Types.MsgPerpsliquidityRegisterToPool]: generateAminoType(MsgRegisterToPool),
  [CarbonTx.Types.MsgPerpsliquidityDeregisterFromPool]: generateAminoType(MsgDeregisterFromPool),
  [CarbonTx.Types.MsgPerpsliquidityDepositToPool]: generateAminoType(MsgDepositToPool),
  [CarbonTx.Types.MsgPerpsliquidityWithdrawFromPool]: generateAminoType(MsgWithdrawFromPool),
};

export default PerpsliquidityAmino;
