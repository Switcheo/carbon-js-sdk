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
  DepositToUserVault: "perpspool/DepositToUserVault",
  WithdrawFromUserVault: "perpspool/WithdrawFromUserVault",
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

const MsgAddControllerToVault: AminoInit = {
  aminoType: TxTypes.AddControllerToVault,
  valueMap: {
    poolId: ConvertEncType.Long,
  },
};

const MsgRemoveControllerFromVault: AminoInit = {
  aminoType: TxTypes.RemoveControllerFromVault,
  valueMap: {
    poolId: ConvertEncType.Long,
  },
};

const MsgDepositToUserVault: AminoInit = {
  aminoType: TxTypes.DepositToUserVault,
  valueMap: {
    id: ConvertEncType.Long,
  },
};

const MsgWithdrawFromUserVault: AminoInit = {
  aminoType: TxTypes.WithdrawFromUserVault,
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

const MsgCancelUserVaultWithdrawal: AminoInit = {
  aminoType: TxTypes.CancelUserVaultWithdrawal,
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
  [CarbonTx.Types.MsgAddControllerToVault]: generateAminoType(MsgAddControllerToVault),
  [CarbonTx.Types.MsgRemoveControllerFromVault]: generateAminoType(MsgRemoveControllerFromVault),
  [CarbonTx.Types.MsgDepositToUserVault]: generateAminoType(MsgDepositToUserVault),
  [CarbonTx.Types.MsgWithdrawFromUserVault]: generateAminoType(MsgWithdrawFromUserVault),
  [CarbonTx.Types.MsgReleaseUserVaultWithdrawal]: generateAminoType(MsgReleaseUserVaultWithdrawal),
  [CarbonTx.Types.MsgCancelUserVaultWithdrawal]: generateAminoType(MsgCancelUserVaultWithdrawal),
};

export default PerpspoolAmino;
