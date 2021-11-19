import { MsgSubmitProposal } from "@carbon-sdk/codec/cosmos/gov/v1beta1/tx";
import { ChangeSwapFeeProposal, CreateTokenProposal, ProposalTypes } from "@carbon-sdk/codec";
import { CarbonTx, TypeUtils } from "@carbon-sdk/util";
import { AminoConverter } from "@cosmjs/stargate";
import { AminoInit, AminoTypes, AminoProcess, AminoValueMap, generateAminoType } from "../utils";

const TxTypes: TypeUtils.SimpleMap<string> = {
  SubmitProposal: "cosmos-sdk/MsgSubmitProposal",
  Deposit: "cosmos-sdk/MsgDeposit",
  Vote: "cosmos-sdk/MsgVote",
};

const ContentTypes: TypeUtils.SimpleMap<string> = {
  [ProposalTypes.ChangeSwapFee]: "liquiditypool/ChangeSwapFeeProposal",
  [ProposalTypes.CreateToken]: "coin/CreateTokenProposal",
};

const SubmitProposalMsg: AminoInit = {
  aminoType: TxTypes.SubmitProposal,
  valueMap: {},
};

const MsgDeposit: AminoInit = {
  aminoType: TxTypes.Deposit,
  valueMap: {
    proposalId: AminoTypes.Long,
  },
};

const MsgVote: AminoInit = {
  aminoType: TxTypes.Vote,
  valueMap: {
    proposalId: AminoTypes.Long,
    option: AminoTypes.NumToStr,
  },
};

const decodeProposalContent = (content: any) => {
  switch (content.typeUrl) {
    case ProposalTypes.ChangeSwapFee:
      return {
        type: ContentTypes[ProposalTypes.ChangeSwapFee],
        value: ChangeSwapFeeProposal.decode(content.value),
      };
    case ProposalTypes.CreateToken:
      return {
        type: ContentTypes[ProposalTypes.CreateToken],
        value: CreateTokenProposal.decode(content.value),
      };
    default:
      return {
        type: "",
        value: {},
      };
  }
}

const proposalAminoProcess: AminoProcess = {
  toAminoProcess: (amino: AminoValueMap, input: any) => {
    const { content } = input as MsgSubmitProposal;
    const newContent = decodeProposalContent(content);
    return {
      amino: amino,
      input: {
        ...input,
        content: newContent,
      },
    };
  },
}

const GovAmino: TypeUtils.SimpleMap<AminoConverter> = {
  [CarbonTx.Types.MsgSubmitProposal]: generateAminoType(SubmitProposalMsg, proposalAminoProcess),
  // [CarbonTx.Types.MsgSubmitProposal]: generateGovAmino(MsgSubmitProposal),
  [CarbonTx.Types.MsgDeposit]: generateAminoType(MsgDeposit),
  [CarbonTx.Types.MsgVote]: generateAminoType(MsgVote),
};

export default GovAmino;
