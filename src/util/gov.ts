import {
  ChangeNumQuotesProposal, ChangeSwapFeeProposal, CreateMarketProposal,
  CreateOracleProposal, CreateTokenProposal, LinkPoolProposal,
  ProposalTypes, SetCommitmentCurveProposal, SetMsgFeeProposal,
  SetRewardCurveProposal, SetRewardsWeightsProposal, SettlementPriceProposal,
  UnlinkPoolProposal, UpdateMarketProposal,
} from "@carbon-sdk/codec";
import { Any } from "@carbon-sdk/codec/google/protobuf/any";

export interface PropDecoded {
  typeUrl: string;
  value: any;
}

export const emptyProposal = {
  typeUrl: '',
  value: {},
};

export const decodeContent = (content?: Any): PropDecoded => {
  if (!content) {
    return emptyProposal;
  }
  switch (content.typeUrl) {
    case ProposalTypes.ChangeNumQuotes:
      return {
        ...content,
        value: ChangeNumQuotesProposal.decode(content.value),
      };
    case ProposalTypes.ChangeSwapFee:
      return {
        ...content,
        value: ChangeSwapFeeProposal.decode(content.value),
      };
    case ProposalTypes.CreateMarket:
      return {
        ...content,
        value: CreateMarketProposal.decode(content.value),
      };
    case ProposalTypes.CreateOracle:
      return {
        ...content,
        value: CreateOracleProposal.decode(content.value),
      };
    case ProposalTypes.CreateToken:
      return {
        ...content,
        value: CreateTokenProposal.decode(content.value),
      };
    case ProposalTypes.LinkPool:
      return {
        ...content,
        value: LinkPoolProposal.decode(content.value),
      };
    case ProposalTypes.SetCommitmentCurve:
      return {
        ...content,
        value: SetCommitmentCurveProposal.decode(content.value),
      };
    case ProposalTypes.SetMsgFee:
      return {
        ...content,
        value: SetMsgFeeProposal.decode(content.value),
      };
    case ProposalTypes.SetRewardCurve:
      return {
        ...content,
        value: SetRewardCurveProposal.decode(content.value),
      };
    case ProposalTypes.SetRewardsWeights:
      return {
        ...content,
        value: SetRewardsWeightsProposal.decode(content.value),
      };
    case ProposalTypes.SettlementPrice:
      return {
        ...content,
        value: SettlementPriceProposal.decode(content.value),
      };
    case ProposalTypes.UnlinkPool:
      return {
        ...content,
        value: UnlinkPoolProposal.decode(content.value),
      };
    case ProposalTypes.UpdateMarket:
      return {
        ...content,
        value: UpdateMarketProposal.decode(content.value),
      };
    default:
      return emptyProposal;
  }
};
