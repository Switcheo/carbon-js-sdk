import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  CreateSubAccount: "subaccount/CreateSubAccount",
  ActivateSubAccount: "subaccount/ActivateSubAccount",
  RemoveSubAccount: "subaccount/RemoveSubAccount",
};

const MsgCreateSubAccount: AminoInit = {
  aminoType: TxTypes.CreateSubAccount,
  valueMap: {},
};

const MsgActivateSubAccount: AminoInit = {
  aminoType: TxTypes.ActivateSubAccount,
  valueMap: {},
};

const MsgRemoveSubAccount: AminoInit = {
  aminoType: TxTypes.RemoveSubAccount,
  valueMap: {},
};

const SubAccountAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgCreateSubAccount]: generateAminoType(MsgCreateSubAccount),
  [CarbonTx.Types.MsgActivateSubAccount]: generateAminoType(MsgActivateSubAccount),
  [CarbonTx.Types.MsgRemoveSubAccount]: generateAminoType(MsgRemoveSubAccount),
};

export default SubAccountAmino;
