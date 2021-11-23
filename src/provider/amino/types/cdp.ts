import { CarbonTx, TypeUtils } from "@carbon-sdk/util";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, AminoConvertTypes, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  AddCollateral: "collateralizeddebtposition/AddCollateral",
  RemoveCollateral: "collateralizeddebtposition/RemoveCollateral",
  AddDebt: "collateralizeddebtposition/AddDebt",
  RemoveDebt: "collateralizeddebtposition/RemoveDebt",
};

const MsgAddCollateral: AminoInit = {
  aminoType: TxTypes.AddCollateral,
  valueMap: {
    vaultTypeId: AminoConvertTypes.Long,
    amount: AminoConvertTypes.Dec,
  },
};

const MsgRemoveCollateral: AminoInit = {
  aminoType: TxTypes.RemoveCollateral,
  valueMap: {
    vaultTypeId: AminoConvertTypes.Long,
    amount: AminoConvertTypes.Dec,
  },
};

const MsgAddDebt: AminoInit = {
  aminoType: TxTypes.AddDebt,
  valueMap: {
    vaultTypeId: AminoConvertTypes.Long,
    amount: AminoConvertTypes.Dec,
  },
};

const MsgRemoveDebt: AminoInit = {
  aminoType: TxTypes.RemoveDebt,
  valueMap: {
    vaultTypeId: AminoConvertTypes.Long,
    amount: AminoConvertTypes.Dec,
  },
};

const CdpAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgAddCollateral]: generateAminoType(MsgAddCollateral),
  [CarbonTx.Types.MsgRemoveCollateral]: generateAminoType(MsgRemoveCollateral),
  [CarbonTx.Types.MsgAddDebt]: generateAminoType(MsgAddDebt),
  [CarbonTx.Types.MsgRemoveDebt]: generateAminoType(MsgRemoveDebt),
};

export default CdpAmino;
