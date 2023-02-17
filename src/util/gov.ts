import {
  CreateOracleProposal,
  CreateTokenProposal,
  LinkPoolProposal,
  SetCommitmentCurveProposal,
  SetMsgGasCostProposal,
  SetMinGasPriceProposal,
  RemoveMsgGasCostProposal,
  RemoveMinGasPriceProposal,
  SetRewardCurveProposal,
  SetRewardsWeightsProposal,
  SettlementPriceProposal,
  UnlinkPoolProposal,
  UpdateMarketProposal,
  UpdatePoolProposal,
} from "@carbon-sdk/codec";
import { CommunityPoolSpendProposal } from "@carbon-sdk/codec/cosmos/distribution/v1beta1/distribution";
import { TextProposal } from "@carbon-sdk/codec/cosmos/gov/v1beta1/gov";
import { ParameterChangeProposal } from "@carbon-sdk/codec/cosmos/params/v1beta1/params";
import { CancelSoftwareUpgradeProposal, SoftwareUpgradeProposal } from "@carbon-sdk/codec/cosmos/upgrade/v1beta1/upgrade";
import { Any } from "@carbon-sdk/codec/google/protobuf/any";

export enum ProposalTypes {
  ParameterChange = "/cosmos.params.v1beta1.ParameterChangeProposal",
  SoftwareUpgrade = "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
  CancelSoftwareUpgrade = "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal",
  CommunityPoolSpend = "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
  Text = "/cosmos.gov.v1beta1.TextProposal",

  SetMsgGasCost = "/Switcheo.carbon.fee.SetMsgGasCostProposal",
  SetMinGasPrice = "/Switcheo.carbon.fee.SetMinGasPriceProposal",
  RemoveMsgGasCost = "/Switcheo.carbon.fee.RemoveMsgGasCostProposal",
  RemoveMinGasPrice = "/Switcheo.carbon.fee.RemoveMinGasPriceProposal",
  CreateToken = "/Switcheo.carbon.coin.CreateTokenProposal",
  CreateOracle = "/Switcheo.carbon.oracle.CreateOracleProposal",
  LinkPool = "/Switcheo.carbon.liquiditypool.LinkPoolProposal",
  UnlinkPool = "/Switcheo.carbon.liquiditypool.UnlinkPoolProposal",
  UpdatePool = "/Switcheo.carbon.liquiditypool.UpdatePoolProposal",
  SetRewardCurve = "/Switcheo.carbon.liquiditypool.SetRewardCurveProposal",
  SetRewardsWeights = "/Switcheo.carbon.liquiditypool.SetRewardsWeightsProposal",
  SetCommitmentCurve = "/Switcheo.carbon.liquiditypool.SetCommitmentCurveProposal",
  UpdateMarket = "/Switcheo.carbon.market.UpdateMarketProposal",
  SettlementPrice = "/Switcheo.carbon.pricing.SettlementPriceProposal",
  CreateGroup = "/Switcheo.carbon.coin.CreateGroupProposal",
  UpdateGroup = "/Switcheo.carbon.coin.UpdateGroupProposal",
  RegisterToGroup = "/Switcheo.carbon.coin.RegisterToGroupProposal",
  DeregisterFromGroup = "/Switcheo.carbon.coin.DeregisterFromGroupProposal",
  DepositToGroup = "/Switcheo.carbon.coin.DepositToGroupProposal",
  WithdrawFromGroup = "/Switcheo.carbon.coin.WithdrawFromGroupProposal",
  UpdateGroupTokenConfig = "/Switcheo.carbon.coin.UpdateGroupTokenConfigProposal"
}

export interface PropDecoded {
  typeUrl: string;
  value: any;
}

export const emptyProposal = {
  typeUrl: "",
  value: {},
};

export const decodeContent = (content?: Any): PropDecoded => {
  if (!content) {
    return emptyProposal;
  }
  switch (content.typeUrl) {
    case ProposalTypes.ParameterChange:
      return {
        ...content,
        value: ParameterChangeProposal.decode(content.value),
      };
    case ProposalTypes.SoftwareUpgrade:
      return {
        ...content,
        value: SoftwareUpgradeProposal.decode(content.value),
      };
    case ProposalTypes.CancelSoftwareUpgrade:
      return {
        ...content,
        value: CancelSoftwareUpgradeProposal.decode(content.value),
      };
    case ProposalTypes.CommunityPoolSpend:
      return {
        ...content,
        value: CommunityPoolSpendProposal.decode(content.value),
      };
    case ProposalTypes.Text:
      return {
        ...content,
        value: TextProposal.decode(content.value),
      };
    case ProposalTypes.UpdatePool:
      return {
        ...content,
        value: UpdatePoolProposal.decode(content.value),
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
    case ProposalTypes.SetMsgGasCost:
      return {
        ...content,
        value: SetMsgGasCostProposal.decode(content.value),
      };
    case ProposalTypes.SetMinGasPrice:
      return {
        ...content,
        value: SetMinGasPriceProposal.decode(content.value),
      };
    case ProposalTypes.RemoveMsgGasCost:
      return {
        ...content,
        value: RemoveMsgGasCostProposal.decode(content.value),
      };
    case ProposalTypes.RemoveMinGasPrice:
      return {
        ...content,
        value: RemoveMinGasPriceProposal.decode(content.value),
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
