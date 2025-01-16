import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, ConvertEncType, generateAminoType } from "../utils";
import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";

const TxTypes: TypeUtils.SimpleMap<string> = {
  MsgGroupVote: "cosmos-sdk/group/MsgVote",
  MsgGroupExec: "cosmos-sdk/group/MsgExec",
  MsgGroupSubmitProposal: "cosmos-sdk/group/MsgSubmitProposal",
};

const _MsgGroupVote: AminoInit = {
  aminoType: TxTypes.MsgGroupVote,
  valueMap: {
    proposalId: ConvertEncType.Long,
  },
};

const _MsgExec: AminoInit = {
  aminoType: TxTypes.MsgGroupExec,
  valueMap: {
    proposalId: ConvertEncType.Long,
  },
};

const _MsgSubmit: AminoInit = {
  aminoType: TxTypes.MsgGroupSubmitProposal,
  valueMap: {},
};

const GroupAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgGroupVote]: generateAminoType(_MsgGroupVote),
  [CarbonTx.Types.MsgGroupExec]: generateAminoType(_MsgExec),
  [CarbonTx.Types.MsgGroupSubmitProposal]: generateAminoType(_MsgSubmit),
};

export default GroupAmino;
