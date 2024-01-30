import { Carbon } from "@carbon-sdk/CarbonSDK";
import { CommunityPoolSpendProposal } from "@carbon-sdk/codec/cosmos/distribution/v1beta1/distribution";
import { TextProposal } from "@carbon-sdk/codec/cosmos/gov/v1beta1/gov";
import { ParameterChangeProposal } from "@carbon-sdk/codec/cosmos/params/v1beta1/params";
import { CancelSoftwareUpgradeProposal, SoftwareUpgradeProposal } from "@carbon-sdk/codec/cosmos/upgrade/v1beta1/upgrade";
import { Any } from "@carbon-sdk/codec/google/protobuf/any";
import { ClientUpdateProposal } from "@carbon-sdk/codec/ibc/core/client/v1/client";

export enum ProposalTypes {
  ParameterChange = "/cosmos.params.v1beta1.ParameterChangeProposal",
  SoftwareUpgrade = "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
  CancelSoftwareUpgrade = "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal",
  CommunityPoolSpend = "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
  Text = "/cosmos.gov.v1beta1.TextProposal",

  SetMsgGasCost = "/Switcheo.carbon.fee.MsgSetGasCost",
  SetMinGasPrice = "/Switcheo.carbon.fee.MsgSetMinGasPrice",
  RemoveMsgGasCost = "/Switcheo.carbon.fee.MsgRemoveGasCost",
  RemoveMinGasPrice = "/Switcheo.carbon.fee.MsgRemoveMinGasPrice",
  CreateToken = "/Switcheo.carbon.coin.CreateTokenProposal",
  CreateOracle = "/Switcheo.carbon.oracle.MsgCreateOracle",
  UpdatePool = "/Switcheo.carbon.liquiditypool.MsgUpdatePool",
  SetRewardCurve = "/Switcheo.carbon.liquiditypool.MsgSetRewardCurve",
  SetRewardsWeights = "/Switcheo.carbon.liquiditypool.MsgSetRewardsWeights",
  SetCommitmentCurve = "/Switcheo.carbon.liquiditypool.MsgSetCommitmentCurve",
  UpdateMarket = "/Switcheo.carbon.market.MsgUpdateMarket",
  SettlementPrice = "/Switcheo.carbon.pricing.MsgUpdateSettlementPrice",
  ClientUpdateProposal = "/ibc.core.client.v1.ClientUpdateProposal",
  CreateGroup = "/Switcheo.carbon.coin.CreateGroupProposal",
  UpdateGroup = "/Switcheo.carbon.coin.UpdateGroupProposal",
  RegisterToGroup = "/Switcheo.carbon.coin.RegisterToGroupProposal",
  DeregisterFromGroup = "/Switcheo.carbon.coin.DeregisterFromGroupProposal",
  DepositToGroup = "/Switcheo.carbon.coin.DepositToGroupProposal",
  WithdrawFromGroup = "/Switcheo.carbon.coin.WithdrawFromGroupProposal",
  UpdateGroupTokenConfig = "/Switcheo.carbon.coin.UpdateGroupTokenConfigProposal",

  CreateAlliance = "/alliance.alliance.MsgCreateAllianceProposal",
  UpdateAlliance = "/alliance.alliance.MsgUpdateAllianceProposal",
  DeleteAlliance = "/alliance.alliance.MsgDeleteAllianceProposal",
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
        value: Carbon.Liquiditypool.UpdatePoolProposal.decode(content.value),
      };
    case ProposalTypes.CreateOracle:
      return {
        ...content,
        value: Carbon.Oracle.CreateOracleProposal.decode(content.value),
      };
    case ProposalTypes.CreateToken:
      return {
        ...content,
        value: Carbon.Coin.CreateTokenProposal.decode(content.value),
      };
    case ProposalTypes.SetCommitmentCurve:
      return {
        ...content,
        value: Carbon.Liquiditypool.SetCommitmentCurveProposal.decode(content.value),
      };
    case ProposalTypes.SetMsgGasCost:
      return {
        ...content,
        value: Carbon.Fee.SetMsgGasCostProposal.decode(content.value),
      };
    case ProposalTypes.SetMinGasPrice:
      return {
        ...content,
        value: Carbon.Fee.SetMinGasPriceProposal.decode(content.value),
      };
    case ProposalTypes.RemoveMsgGasCost:
      return {
        ...content,
        value: Carbon.Fee.RemoveMsgGasCostProposal.decode(content.value),
      };
    case ProposalTypes.RemoveMinGasPrice:
      return {
        ...content,
        value: Carbon.Fee.RemoveMinGasPriceProposal.decode(content.value),
      };
    case ProposalTypes.SetRewardCurve:
      return {
        ...content,
        value: Carbon.Liquiditypool.SetRewardCurveProposal.decode(content.value),
      };
    case ProposalTypes.SetRewardsWeights:
      return {
        ...content,
        value: Carbon.Liquiditypool.SetRewardsWeightsProposal.decode(content.value),
      };
    case ProposalTypes.SettlementPrice:
      return {
        ...content,
        value: Carbon.Pricing.SettlementPriceProposal.decode(content.value),
      };
    case ProposalTypes.UpdateMarket:
      return {
        ...content,
        value: Carbon.Market.UpdateMarketProposal.decode(content.value),
      };
    case ProposalTypes.ClientUpdateProposal:
      return {
        ...content,
        value: ClientUpdateProposal.decode(content.value),
      };
    case ProposalTypes.CreateAlliance:
      return {
        ...content,
        value: Carbon.Alliance.MsgCreateAllianceProposal.decode(content.value),
      };
    case ProposalTypes.UpdateAlliance:
      return {
        ...content,
        value: Carbon.Alliance.MsgUpdateAllianceProposal.decode(content.value),
      }
    case ProposalTypes.DeleteAlliance:
      return {
        ...content,
        value: Carbon.Alliance.MsgDeleteAllianceProposal.decode(content.value),
      }
    default:
      return emptyProposal;
  }
};
