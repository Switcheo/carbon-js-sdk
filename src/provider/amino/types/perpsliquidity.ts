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
  aminoType: TxTypes.MsgCreatePlPool,
  valueMap: {},
};
const MsgUpdatePlPool: AminoInit = {
  aminoType: TxTypes.MsgUpdatePlPool,
  valueMap: {
    poolId: ConvertEncType.Long,
  },
};

const MsgRegisterToPlPool: AminoInit = {
  aminoType: TxTypes.MsgRegisterToPlPool,
  valueMap: {
    poolId: ConvertEncType.Long,
  },
};

const MsgDeregisterFromPlPool: AminoInit = {
  aminoType: TxTypes.MsgDeregisterFromPlPool,
  valueMap: {},
};

const MsgDepositToPlPool: AminoInit = {
  aminoType: TxTypes.MsgDepositToPlPool,
  valueMap: {
    poolId: ConvertEncType.Long,
  },
};

const MsgWithdrawFromPlPool: AminoInit = {
  aminoType: TxTypes.MsgWithdrawFromPlPool,
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
