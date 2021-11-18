import { CarbonTx, TypeUtils } from "@carbon-sdk/util";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  CreateSubAccount: "subaccount/MsgCreateSubAccountV1",
  ActivateSubAccount: "subaccount/MsgActivateSubAccountV1",
};

const MsgCreateSubAccount: AminoInit = {
  aminoType: TxTypes.CreateSubAccount,
  valueMap: {
    creator: "string",
    subAddress: "string",
  },
};

const MsgActivateSubAccount: AminoInit = {
  aminoType: TxTypes.ActivateSubAccount,
  valueMap: {
    creator: "string",
    expectedMainAccount: "string",
  },
};

const SubAccountAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgCreateSubAccount]: generateAminoType(MsgCreateSubAccount),
  [CarbonTx.Types.MsgActivateSubAccount]: generateAminoType(MsgActivateSubAccount),
};

export default SubAccountAmino;
