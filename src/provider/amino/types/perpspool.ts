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
  CreateUserVault: "perpspool/CreateUserVault",
  CloseUserVault: "perpspool/CloseUserVault",
  UpdateUserVault: "perpspool/UpdateUserVault",
  AddControllerToVault: "perpspool/AddControllerToVault",
  RemoveControllerFromVault: "perpspool/RemoveControllerFromVault",
  ReleaseUserVaultWithdrawal: "perpspool/ReleaseUserVaultWithdrawal",
  CancelUserVaultWithdrawal: "perpspool/CancelUserVaultWithdrawal",
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

const MsgCreateUserVault: AminoInit = {
  aminoType: TxTypes.CreateUserVault,
  valueMap: {},
};

const MsgCloseUserVault: AminoInit = {
  aminoType: TxTypes.CloseUserVault,
  valueMap: {
    id: ConvertEncType.Long,
  },
};

const MsgUpdateUserVault: AminoInit = {
  aminoType: TxTypes.UpdateUserVault,
  valueMap: {
    id: ConvertEncType.Long,
  },
};

const MsgReleaseUserVaultWithdrawal: AminoInit = {
  aminoType: TxTypes.ReleaseUserVaultWithdrawal,
  valueMap: {
    vaultId: ConvertEncType.Long,
    processId: ConvertEncType.Long,
  },
};


const PerpspoolAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgCreatePool]: generateAminoType(MsgCreatePool),
  [CarbonTx.Types.MsgUpdatePool]: generateAminoType(MsgUpdatePool),
  [CarbonTx.Types.MsgRegisterToPool]: generateAminoType(MsgRegisterToPool),
  [CarbonTx.Types.MsgDeregisterFromPool]: generateAminoType(MsgDeregisterFromPool),
  [CarbonTx.Types.MsgDepositToPool]: generateAminoType(MsgDepositToPool),
  [CarbonTx.Types.MsgWithdrawFromPool]: generateAminoType(MsgWithdrawFromPool),
  [CarbonTx.Types.MsgCreateUserVault]: generateAminoType(MsgCreateUserVault),
  [CarbonTx.Types.MsgCloseUserVault]: generateAminoType(MsgCloseUserVault),
  [CarbonTx.Types.MsgUpdateUserVault]: generateAminoType(MsgUpdateUserVault),
  [CarbonTx.Types.MsgReleaseUserVaultWithdrawal]: generateAminoType(MsgReleaseUserVaultWithdrawal),
};

export default PerpspoolAmino;
