import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, ConvertEncType, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  AddCollateral: "cdp/AddCollateral",
  RemoveCollateral: "cdp/removeCollateral",
  AddDebt: "cdp/AddDebt",
  RemoveDebt: "cdp/RemoveDebt",
};

const MsgAddCollateral: AminoInit = {
  aminoType: TxTypes.AddCollateral,
  valueMap: {
    vaultTypeId: ConvertEncType.Long,
  },
};

const MsgRemoveCollateral: AminoInit = {
  aminoType: TxTypes.RemoveCollateral,
  valueMap: {
    vaultTypeId: ConvertEncType.Long,
  },
};

const MsgAddDebt: AminoInit = {
  aminoType: TxTypes.AddDebt,
  valueMap: {
    vaultTypeId: ConvertEncType.Long,
  },
};

const MsgRemoveDebt: AminoInit = {
  aminoType: TxTypes.RemoveDebt,
  valueMap: {
    vaultTypeId: ConvertEncType.Long,
  },
};

const CdpAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgAddCollateral]: generateAminoType(MsgAddCollateral),
  [CarbonTx.Types.MsgRemoveCollateral]: generateAminoType(MsgRemoveCollateral),
  [CarbonTx.Types.MsgAddDebt]: generateAminoType(MsgAddDebt),
  [CarbonTx.Types.MsgRemoveDebt]: generateAminoType(MsgRemoveDebt),
};

export default CdpAmino;
