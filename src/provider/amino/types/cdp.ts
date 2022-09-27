import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, ConvertEncType, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  SupplyAsset: "cdp/SupplyAsset",
  WithdrawAsset: "cdp/WithdrawAsset",
  LockCollateral: "cdp/LockCollateral",
  UnlockCollateral: "cdp/UnlockCollateral",
  BorrowAsset: "cdp/BorrowAsset",
  RepayAsset: "cdp/RepayAsset",
  SupplyAndLockAsset: "cdp/SupplyAndLockAsset",
  UnlockAndWithdrawAsset: "cdp/UnlockAndWithdrawAsset",
  LiquidateCollateral: "cdp/LiquidateCollateral",
};

const MsgSupplyAsset: AminoInit = {
  aminoType: TxTypes.SupplyAsset,
  valueMap: {},
};

const MsgWithdrawAsset: AminoInit = {
  aminoType: TxTypes.WithdrawAsset,
  valueMap: {},
};

const MsgLockCollateral: AminoInit = {
  aminoType: TxTypes.LockCollateral,
  valueMap: {},
};

const MsgUnlockCollateral: AminoInit = {
  aminoType: TxTypes.UnlockCollateral,
  valueMap: {},
};

const MsgBorrowAsset: AminoInit = {
  aminoType: TxTypes.BorrowAsset,
  valueMap: {},
};

const MsgRepayAsset: AminoInit = {
  aminoType: TxTypes.RepayAsset,
  valueMap: {},
};

const MsgSupplyAndLockAsset: AminoInit = {
  aminoType: TxTypes.SupplyAndLockAsset,
  valueMap: {},
};

const MsgUnlockAndWithdrawAsset: AminoInit = {
  aminoType: TxTypes.UnlockAndWithdrawAsset,
  valueMap: {},
};

const MsgLiquidateCollateral: AminoInit = {
  aminoType: TxTypes.LiquidateCollateral,
  valueMap: {},
};

const CdpAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgSupplyAsset]: generateAminoType(MsgSupplyAsset),
  [CarbonTx.Types.MsgWithdrawAsset]: generateAminoType(MsgWithdrawAsset),
  [CarbonTx.Types.MsgLockCollateral]: generateAminoType(MsgLockCollateral),
  [CarbonTx.Types.MsgUnlockCollateral]: generateAminoType(MsgUnlockCollateral),
  [CarbonTx.Types.MsgBorrowAsset]: generateAminoType(MsgBorrowAsset),
  [CarbonTx.Types.MsgRepayAsset]: generateAminoType(MsgRepayAsset),
  [CarbonTx.Types.MsgSupplyAndLockAsset]: generateAminoType(MsgSupplyAndLockAsset),
  [CarbonTx.Types.MsgUnlockAndWithdrawAsset]: generateAminoType(MsgUnlockAndWithdrawAsset),
  [CarbonTx.Types.MsgLiquidateCollateral]: generateAminoType(MsgLiquidateCollateral),
};

export default CdpAmino;
