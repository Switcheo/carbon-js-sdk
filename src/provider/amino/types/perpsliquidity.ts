import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, ConvertEncType, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  CreatePlPool: "perpsliquidity/CreatePlPool",
  UpdatePlPool: "perpsliquidity/UpdatePlPool",
  DepositToPlPool: "perpsliquidity/DepositToPlPool",
  RegisterToPlPool: "perpsliquidity/RegisterToPlPool",
  DeregisterToPlPool: "perpsliquidity/DeregisterToPlPool",
  WithdrawToPlPool: "perpsliquidity/WithdrawToPlPool",
};



const MsgCreatePlPool: AminoInit = {
  aminoType: TxTypes.CreatePlPool,
  valueMap: {},
};
const MsgUpdatePlPool: AminoInit = {
  aminoType: TxTypes.UpdatePlPool,
  valueMap: {
    poolId: ConvertEncType.Long,
  },
};

const MsgRegisterToPlPool: AminoInit = {
  aminoType: TxTypes.RegisterToPlPool,
  valueMap: {
    poolId: ConvertEncType.Long,
  },
};

const MsgDeregisterFromPlPool: AminoInit = {
  aminoType: TxTypes.DeregisterFromPlPool,
  valueMap: {},
};

const MsgDepositToPlPool: AminoInit = {
  aminoType: TxTypes.DepositToPlPool,
  valueMap: {
    poolId: ConvertEncType.Long,
  },
};

const MsgWithdrawFromPlPool: AminoInit = {
  aminoType: TxTypes.WithdrawFromPlPool,
  valueMap: {
    poolId: ConvertEncType.Long,
  },
};


const PerpsliquidityAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgCreatePlPool]: generateAminoType(MsgCreatePlPool),
  [CarbonTx.Types.MsgUpdatePlPool]: generateAminoType(MsgUpdatePlPool),
  [CarbonTx.Types.MsgRegisterToPlPool]: generateAminoType(MsgRegisterToPlPool),
  [CarbonTx.Types.MsgDeregisterFromPlPool]: generateAminoType(MsgDeregisterFromPlPool),
  [CarbonTx.Types.MsgDepositToPlPool]: generateAminoType(MsgDepositToPlPool),
  [CarbonTx.Types.MsgWithdrawFromPlPool]: generateAminoType(MsgWithdrawFromPlPool),
};

export default PerpsliquidityAmino;
