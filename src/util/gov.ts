import { Carbon, CarbonTx } from "@carbon-sdk/CarbonSDK";
import { TxTypes } from "@carbon-sdk/codec";
import { MsgRemoveMinGasPrice } from "@carbon-sdk/codec/Switcheo/carbon/fee/tx";
import { CommunityPoolSpendProposal } from "@carbon-sdk/codec/cosmos/distribution/v1beta1/distribution";
import { MsgCommunityPoolSpend } from "@carbon-sdk/codec/cosmos/distribution/v1beta1/tx";
import { MsgExecLegacyContent } from "@carbon-sdk/codec/cosmos/gov/v1/tx";
import { TextProposal } from "@carbon-sdk/codec/cosmos/gov/v1beta1/gov";
import { ParameterChangeProposal } from "@carbon-sdk/codec/cosmos/params/v1beta1/params";
import { MsgCancelUpgrade, MsgSoftwareUpgrade } from "@carbon-sdk/codec/cosmos/upgrade/v1beta1/tx";
import { CancelSoftwareUpgradeProposal, SoftwareUpgradeProposal } from "@carbon-sdk/codec/cosmos/upgrade/v1beta1/upgrade";
import { Any } from "@carbon-sdk/codec/google/protobuf/any";
import { ClientUpdateProposal } from "@carbon-sdk/codec/ibc/core/client/v1/client";
import { MsgUpdateParams as MsgAuthUpdateParams } from "@carbon-sdk/codec/cosmos/auth/v1beta1/tx"
import { MsgUpdateParams as MsgBankUpdateParams } from "@carbon-sdk/codec/cosmos/bank/v1beta1/tx"
import { MsgUpdateParams as MsgDistributionUpdateParams } from "@carbon-sdk/codec/cosmos/distribution/v1beta1/tx"
import { MsgUpdateParams as MsgStakingUpdateParams } from "@carbon-sdk/codec/cosmos/staking/v1beta1/tx"
import { MsgUpdateParams as MsgSlashingUpdateParams } from "@carbon-sdk/codec/cosmos/slashing/v1beta1/tx"
import { MsgUpdateParams as MsgGovUpdateParams } from "@carbon-sdk/codec/cosmos/gov/v1/tx"
import { MsgUpdateParams as MsgOracleUpdateParams } from "@carbon-sdk/codec/Switcheo/carbon/oracle/tx"


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

  // pricing v2
  SettlementPriceV2 = "/Switcheo.carbon.pricing.MsgUpdateSettlementPrice",

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
  let url = content.typeUrl
  let value = content.value
  if (url == CarbonTx.Types.MsgGovExecLegacyContent) {
    // wrapper msg for legacy prop, actual proposal is nested within this
    const wrapperMsg = MsgExecLegacyContent.decode(content.value)
    url = wrapperMsg.content!.typeUrl
    value = wrapperMsg.content!.value
  }
  switch (url) {
    case ProposalTypes.ParameterChange:
      return {
        typeUrl: url,
        value: ParameterChangeProposal.decode(value),
      };
    case ProposalTypes.SoftwareUpgrade:
      return {
        typeUrl: url,
        value: SoftwareUpgradeProposal.decode(value),
      };
    case ProposalTypes.CancelSoftwareUpgrade:
      return {
        typeUrl: url,
        value: CancelSoftwareUpgradeProposal.decode(value),
      };
    case ProposalTypes.CommunityPoolSpend:
      return {
        typeUrl: url,
        value: CommunityPoolSpendProposal.decode(value),
      };
    case ProposalTypes.Text:
      return {
        typeUrl: url,
        value: TextProposal.decode(value),
      };
    case ProposalTypes.UpdatePool:
      return {
        typeUrl: url,
        value: Carbon.Liquiditypool.UpdatePoolProposal.decode(value),
      };
    case ProposalTypes.CreateToken:
      return {
        typeUrl: url,
        value: Carbon.Coin.CreateTokenProposal.decode(value),
      };
    case ProposalTypes.SetCommitmentCurve:
      return {
        typeUrl: url,
        value: Carbon.Liquiditypool.SetCommitmentCurveProposal.decode(value),
      };
    case ProposalTypes.SetRewardCurve:
      return {
        typeUrl: url,
        value: Carbon.Liquiditypool.SetRewardCurveProposal.decode(value),
      };
    case ProposalTypes.SetRewardsWeights:
      return {
        typeUrl: url,
        value: Carbon.Liquiditypool.SetRewardsWeightsProposal.decode(value),
      };
    case ProposalTypes.UpdateMarket:
      return {
        typeUrl: url,
        value: Carbon.Market.UpdateMarketProposal.decode(value),
      };
    case ProposalTypes.ClientUpdateProposal:
      return {
        typeUrl: url,
        value: ClientUpdateProposal.decode(value),
      };
    case ProposalTypes.CreateAlliance:
      return {
        typeUrl: url,
        value: Carbon.Alliance.MsgCreateAllianceProposal.decode(value),
      };
    case ProposalTypes.UpdateAlliance:
      return {
        typeUrl: url,
        value: Carbon.Alliance.MsgUpdateAllianceProposal.decode(value),
      }
    case ProposalTypes.DeleteAlliance:
      return {
        typeUrl: url,
        value: Carbon.Alliance.MsgDeleteAllianceProposal.decode(value),
      }
    // update with new proposal messages
    case ProposalTypes.SetMsgGasCostV2:
      return {
        typeUrl: url,
        value: Carbon.Fee.MsgSetGasCost.decode(value),
      }
    case ProposalTypes.SetMinGasPriceV2:
      return {
        typeUrl: url,
        value: Carbon.Fee.MsgSetMinGasPrice.decode(value),
      }
    case ProposalTypes.RemoveMsgGasCostV2:
      return {
        typeUrl: url,
        value: Carbon.Fee.MsgRemoveGasCost.decode(value),
      }
    case ProposalTypes.RemoveMinGasPriceV2:
      return {
        typeUrl: url,
        value: MsgRemoveMinGasPrice.decode(value),
      }
    case ProposalTypes.CommunityPoolSpendV2:
      return {
        typeUrl: url,
        value: MsgCommunityPoolSpend.decode(value),
      }
    case ProposalTypes.SoftwareUpgradeV2:
      return {
        typeUrl: url,
        value: MsgSoftwareUpgrade.decode(value),
      }
    case ProposalTypes.CancelSoftwareUpgradeV2:
      return {
        typeUrl: url,
        value: MsgCancelUpgrade.decode(value),
      }
    case ProposalTypes.CreateAllianceV2:
      return {
        typeUrl: url,
        value: Carbon.Alliance.MsgCreateAlliance.decode(value),
      }
    case ProposalTypes.UpdateAllianceV2:
      return {
        typeUrl: url,
        value: Carbon.Alliance.MsgUpdateAlliance.decode(value),
      }
    case ProposalTypes.DeleteAllianceV2:
      return {
        typeUrl: url,
        value: Carbon.Alliance.MsgDeleteAlliance.decode(value),
      }
    case ProposalTypes.UpdateMarketV2:
      return {
        typeUrl: url,
        value: Carbon.Market.MsgUpdateMarket.decode(value),
      }
    case ProposalTypes.UpdatePoolV2:
      return {
        typeUrl: url,
        value: Carbon.Liquiditypool.MsgUpdatePool.decode(value),
      }
    case ProposalTypes.SetRewardCurveV2:
      return {
        typeUrl: url,
        value: Carbon.Liquiditypool.MsgSetRewardCurve.decode(value),
      }
    case ProposalTypes.SetRewardsWeightsV2:
      return {
        typeUrl: url,
        value: Carbon.Liquiditypool.MsgSetRewardsWeights.decode(value),
      }
    case ProposalTypes.SetCommitmentCurveV2:
      return {
        typeUrl: url,
        value: Carbon.Liquiditypool.MsgSetCommitmentCurve.decode(value),
      }
    case ProposalTypes.SettlementPriceV2:
      return {
        typeUrl: url,
        value: Carbon.Pricing.MsgUpdateSettlementPrice.decode(value),
      }
    case ProposalTypes.CreateOracleV2:
      return {
        typeUrl: url,
        value: Carbon.Oracle.MsgCreateOracle.decode(value),
      }
    case TxTypes.MsgAuthUpdateParams:
      return {
        typeUrl: url,
        value: MsgAuthUpdateParams.decode(value),
      }
    case TxTypes.MsgBankUpdateParams:
      return {
        typeUrl: url,
        value: MsgBankUpdateParams.decode(value),
      }
    case TxTypes.MsgDistributionUpdateParams:
      return {
        typeUrl: url,
        value: MsgDistributionUpdateParams.decode(value),
      }
    case TxTypes.MsgStakingUpdateParams:
      return {
        typeUrl: url,
        value: MsgStakingUpdateParams.decode(value),
      }
    case TxTypes.MsgSlashingUpdateParams:
      return {
        typeUrl: url,
        value: MsgSlashingUpdateParams.decode(value),
      }
    case TxTypes.MsgGovUpdateParams:
      return {
        typeUrl: url,
        value: MsgGovUpdateParams.decode(value),
      }
    case TxTypes.MsgOracleUpdateParams:
      return {
        typeUrl: url,
        value: MsgOracleUpdateParams.decode(value),
      }
    default:
      return emptyProposal;
  }
};