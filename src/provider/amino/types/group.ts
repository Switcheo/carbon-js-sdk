import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  SubmitGroupProposal: "cosmos-sdk/group/MsgSubmitProposal",
};

const MsgSubmitGroupProposal: AminoInit = {
  aminoType: TxTypes.SubmitGroupProposal,
  valueMap: {},
};

const GroupAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgGroupSubmitProposal]: generateAminoType(MsgSubmitGroupProposal),
};

export default GroupAmino;
