import { TypeUtils } from "@carbon-sdk/util";
import * as CarbonTx from "@carbon-sdk/util/tx";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, ConvertEncType, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  SubmitGroupProposal: "cosmos-sdk/group/MsgSubmitProposal",
  VoteProposal: "cosmos-sdk/group/MsgVote",
  ExecProposal: "cosmos-sdk/group/MsgExec",
};

const MsgSubmitGroupProposal: AminoInit = {
  aminoType: TxTypes.SubmitGroupProposal,
  valueMap: {},
};

const MsgVoteGroupProposal: AminoInit = {
  aminoType: TxTypes.VoteProposal,
  valueMap: {
    proposalId: ConvertEncType.Long,
  },
};

const MsgExecGroupProposal: AminoInit = {
  aminoType: TxTypes.ExecProposal,
  valueMap: {
    proposalId: ConvertEncType.Long,
  },
};

const GroupAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgGroupSubmitProposal]: generateAminoType(MsgSubmitGroupProposal),
  [CarbonTx.Types.MsgGroupVote]: generateAminoType(MsgVoteGroupProposal),
  [CarbonTx.Types.MsgGroupExec]: generateAminoType(MsgExecGroupProposal),
};

export default GroupAmino;
