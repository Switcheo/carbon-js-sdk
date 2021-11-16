import { CarbonTx, TypeUtils } from "@carbon-sdk/util";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, generateAminoType } from "../utils";

const MsgCreateSubAccount: AminoInit = {
  aminoType: "subaccount/MsgCreateSubAccountV1",
  valueMap: {
    creator: "string",
    subAddress: "string",
  },
};

const MsgActivateSubAccount: AminoInit = {
  aminoType: "subaccount/MsgActivateSubAccountV1",
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
