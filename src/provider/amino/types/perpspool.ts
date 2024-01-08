import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, ConvertEncType, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  CreatePool: "perpspool/CreatePool",
  UpdatePool: "perpspool/UpdatePool",
  DepositToPool: "perpspool/DepositToPool",
  RegisterToPool: "perpspool/RegisterToPool",
  DeregisterToPool: "perpspool/DeregisterToPool",
  WithdrawFromPool: "perpspool/WithdrawToPool",
  UpdateMarketConfig: "perpspool/UpdateMarketConfig",
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
  aminoType: TxTypes.DeregisterToPool,
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

const PerpspoolAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgCreatePool]: generateAminoType(MsgCreatePool),
  [CarbonTx.Types.MsgUpdatePool]: generateAminoType(MsgUpdatePool),
  [CarbonTx.Types.MsgRegisterToPool]: generateAminoType(MsgRegisterToPool),
  [CarbonTx.Types.MsgDeregisterFromPool]: generateAminoType(MsgDeregisterFromPool),
  [CarbonTx.Types.MsgDepositToPool]: generateAminoType(MsgDepositToPool),
  [CarbonTx.Types.MsgWithdrawFromPool]: generateAminoType(MsgWithdrawFromPool),
};

export default PerpspoolAmino;
