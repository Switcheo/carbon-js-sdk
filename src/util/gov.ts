import { Carbon } from "@carbon-sdk/CarbonSDK";
import { CommunityPoolSpendProposal } from "@carbon-sdk/codec/cosmos/distribution/v1beta1/distribution";
import { TextProposal } from "@carbon-sdk/codec/cosmos/gov/v1beta1/gov";
import { ParameterChangeProposal } from "@carbon-sdk/codec/cosmos/params/v1beta1/params";
import { CancelSoftwareUpgradeProposal, SoftwareUpgradeProposal } from "@carbon-sdk/codec/cosmos/upgrade/v1beta1/upgrade";
import { Any } from "@carbon-sdk/codec/google/protobuf/any";
import { ClientUpdateProposal } from "@carbon-sdk/codec/ibc/core/client/v1/client";

export enum ProposalTypes {
  // cosmos v1
  ParameterChange = "/cosmos.params.v1beta1.ParameterChangeProposal",
  SoftwareUpgrade = "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
  CancelSoftwareUpgrade = "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal",
  CommunityPoolSpend = "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
  Text = "/cosmos.gov.v1beta1.TextProposal",

  // cosmos v2
  CommunityPoolSpendV2 = "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend",
  SoftwareUpgradeV2 = "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
  CancelSoftwareUpgradeV2 = "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",

  // alliance v1
  CreateAlliance = "/alliance.alliance.MsgCreateAllianceProposal",
  UpdateAlliance = "/alliance.alliance.MsgUpdateAllianceProposal",
  DeleteAlliance = "/alliance.alliance.MsgDeleteAllianceProposal",

  // alliance v2
  CreateAllianceV2 = "/alliance.alliance.MsgCreateAlliance",
  UpdateAllianceV2 = "/alliance.alliance.MsgUpdateAlliance",
  DeleteAllianceV2 = "/alliance.alliance.MsgDeleteAlliance",

  // ibc v1
  ClientUpdateProposal = "/ibc.core.client.v1.ClientUpdateProposal",

  // ibc v2
  // to be added in next cosmos upgrade

  // market v1
  UpdateMarket = "/Switcheo.carbon.market.UpdateMarketProposal",

  // market v2
  UpdateMarketV2 = "/Switcheo.carbon.market.MsgUpdateMarket",

  // fee v1
  SetMsgGasCost = "/Switcheo.carbon.fee.SetMsgGasCostProposal",
  SetMinGasPrice = "/Switcheo.carbon.fee.SetMinGasPriceProposal",
  RemoveMsgGasCost = "/Switcheo.carbon.fee.RemoveMsgGasCostProposal",
  RemoveMinGasPrice = "/Switcheo.carbon.fee.RemoveMinGasPriceProposal",

  // fee v2
  SetMsgGasCostV2 = "/Switcheo.carbon.fee.MsgSetGasCost",
  SetMinGasPriceV2 = "/Switcheo.carbon.fee.MsgSetMinGasPrice",
  RemoveMsgGasCostV2 = "/Switcheo.carbon.fee.MsgRemoveGasCost",
  RemoveMinGasPriceV2 = "/Switcheo.carbon.fee.MsgRemoveMinGasPrice",

  // lp v1
  UpdatePool = "/Switcheo.carbon.liquiditypool.UpdatePoolProposal",
  SetRewardCurve = "/Switcheo.carbon.liquiditypool.SetRewardCurveProposal",
  SetRewardsWeights = "/Switcheo.carbon.liquiditypool.SetRewardsWeightsProposal",
  SetCommitmentCurve = "/Switcheo.carbon.liquiditypool.SetCommitmentCurveProposal",
  
  // lp v2
  UpdatePoolV2 = "/Switcheo.carbon.liquiditypool.MsgUpdatePool",
  SetRewardCurveV2 = "/Switcheo.carbon.liquiditypool.MsgSetRewardCurve",
  SetRewardsWeightsV2 = "/Switcheo.carbon.liquiditypool.MsgSetRewardsWeights",
  SetCommitmentCurveV2 = "/Switcheo.carbon.liquiditypool.MsgSetCommitmentCurve",

  // pricing v1
  SettlementPrice = "/Switcheo.carbon.pricing.SettlementPriceProposal",

  // pricing v2
  SettlementPriceV2 = "/Switcheo.carbon.pricing.MsgUpdateSettlementPrice",

  // oracle v1
  CreateOracle = "/Switcheo.carbon.oracle.CreateOracleProposal",

  // oracle v2
  CreateOracleV2 = "/Switcheo.carbon.oracle.MsgCreateOracle",

  // coin v1
  CreateToken = "/Switcheo.carbon.coin.CreateTokenProposal",
  CreateGroup = "/Switcheo.carbon.coin.CreateGroupProposal",
  UpdateGroup = "/Switcheo.carbon.coin.UpdateGroupProposal",
  RegisterToGroup = "/Switcheo.carbon.coin.RegisterToGroupProposal",
  DeregisterFromGroup = "/Switcheo.carbon.coin.DeregisterFromGroupProposal",
  DepositToGroup = "/Switcheo.carbon.coin.DepositToGroupProposal",
  WithdrawFromGroup = "/Switcheo.carbon.coin.WithdrawFromGroupProposal",
  UpdateGroupTokenConfig = "/Switcheo.carbon.coin.UpdateGroupTokenConfigProposal",
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
    // update with new proposal messages
    // case ProposalTypes.SetMsgGasCostV2:
    //   return {
    //     ...content,
    //     value: Carbon.Fee.MsgSetGasCost.decode(content.)
    //   }

    default:
      return emptyProposal;
  }
};
