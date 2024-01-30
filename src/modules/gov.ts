import { CreateTokenProposal } from "@carbon-sdk/codec/Switcheo/carbon/coin/proposal";
import { VoteOption } from "@carbon-sdk/codec/cosmos/gov/v1/gov";
import { MsgDeposit, MsgVote } from "@carbon-sdk/codec/cosmos/gov/v1/tx";
import { SettlementPriceParams } from "@carbon-sdk/codec/Switcheo/carbon/pricing/proposal";
import { CarbonTx } from "@carbon-sdk/util";
import { Coin, coins } from "@cosmjs/amino";
import Long from "long";
import {
  AdminModule,
  transformCommunityPoolSpendAmount,
  // transformSetSettlementPriceParams,
  transfromCreateOracleParams,
  transfromCreateTokenParams,
  transfromSetCommitmentCurveParams,
  transfromSetMsgGasCostParams,
  transfromSetMinGasPriceParams,
  transfromSetRewardCurveParams,
  transfromSetRewardsWeightsParams,
  transfromUpdatePoolParams,
} from "./admin";
import BaseModule from "./base";
import { MarketModule, transfromUpdateMarketParams} from "./market";
import { CommunityPoolSpendProposal } from "@carbon-sdk/codec/cosmos/distribution/v1beta1/distribution";
import { ParameterChangeProposal } from "@carbon-sdk/codec/cosmos/params/v1beta1/params";
import { CancelSoftwareUpgradeProposal, SoftwareUpgradeProposal } from "@carbon-sdk/codec/cosmos/upgrade/v1beta1/upgrade";
import { MsgCancelUpgrade, MsgSoftwareUpgrade } from "@carbon-sdk/codec/cosmos/upgrade/v1beta1/tx";
import { MsgCommunityPoolSpend } from "@carbon-sdk/codec/cosmos/distribution/v1beta1/tx";
import { MsgSetGasCost, MsgSetMinGasPrice, MsgRemoveGasCost, MsgRemoveMinGasPrice } from "@carbon-sdk/codec/Switcheo/carbon/fee/tx";
import { MsgSetCommitmentCurve, MsgSetRewardCurve, MsgSetRewardsWeights, MsgUpdatePool } from "@carbon-sdk/codec/Switcheo/carbon/liquiditypool/tx";
import { MsgUpdateMarket } from "@carbon-sdk/codec/Switcheo/carbon/market/tx";
import { MsgCreateOracle } from "@carbon-sdk/codec/Switcheo/carbon/oracle/tx";

export class GovModule extends BaseModule {
  public async submit(params: GovModule.SubmitProposalParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const { typeUrl, value } = params.content;
    params.content.value = this.encode(typeUrl, value);

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgSubmitProposal,
        value,
      },
      opts
    );
  }

  public async deposit(params: GovModule.DepositParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgDeposit.fromPartial({
      proposalId: new Long(params.proposalId),
      depositor: wallet.bech32Address,
      amount: coins(params.amount, params.denom),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgDeposit,
        value,
      },
      opts
    );
  }

  public async vote(params: GovModule.VoteParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgVote.fromPartial({
      proposalId: new Long(params.proposalId),
      voter: wallet.bech32Address,
      option: params.option,
      metadata: params.metadata,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgVote,
        value,
      },
      opts
    );
  }

  public encode(proposalUrl: string, proposalMsg: any): Uint8Array {
    const wallet = this.getWallet();
    const { title, description, msg, proposer } = proposalMsg;

    switch (proposalUrl.split(".").pop()) {
      case "CreateTokenProposal": {
        const createTokenMsg = {
          title: title,
          description: description,
          msg: transfromCreateTokenParams(msg, wallet.bech32Address),
        };
        return CreateTokenProposal.encode(createTokenMsg).finish();
      }
      case "MsgSetGasCost": {
        const setMsgGasCostMsg = {
          creator: proposer,
          setMinGasPriceParams: transfromSetMsgGasCostParams(msg),
        };
        return MsgSetGasCost.encode(setMsgGasCostMsg).finish();
      }
      case "MsgSetMinGasPrice": {
        const setMinGasPriceMsg = {
          creator: proposer,
          setMinGasPriceParams: transfromSetMinGasPriceParams(msg),
        };
        return MsgSetMinGasPrice.encode(setMinGasPriceMsg).finish();
      }
      case "MsgRemoveGasCost": {
        const removeMsgGasCostMsg = {
          creator: proposer,
          msgType: proposalMsg.msgType,
        };
        return MsgRemoveGasCost.encode(removeMsgGasCostMsg).finish();
      }
      case "MsgRemoveMinGasPrice": {
        const removeMinGasPriceMsg = {
          creator: proposer,
          denom: proposalMsg.denom,
        };
        return MsgRemoveMinGasPrice.encode(removeMinGasPriceMsg).finish();
      }
      case "MsgSetRewardCurve": {
        const setRewardCurveMsg = {
          creator: proposer,
          setRewardCurveParams: transfromSetRewardCurveParams(msg),
        };
        return MsgSetRewardCurve.encode(setRewardCurveMsg).finish();
      }
      case "MsgSetCommitmentCurve": {
        const setCommitmentCurveMsg = {
          creator: proposer,
          setCommitmentCurveParams: transfromSetCommitmentCurveParams(msg),
        };
        return MsgSetCommitmentCurve.encode(setCommitmentCurveMsg).finish();
      }
      case "MsgSetRewardsWeights": {
        const setRewardsWeightsMsg = {
          creator: proposer,
          setRewardsWeightsParams: transfromSetRewardsWeightsParams(msg),
        };
        return MsgSetRewardsWeights.encode(setRewardsWeightsMsg).finish();
      }
      case "MsgUpdatePool": {
        const updatePoolProposalMsg = {
          creator: proposer,
          updatePoolParams: transfromUpdatePoolParams(msg),
        };
        return MsgUpdatePool.encode(updatePoolProposalMsg).finish();
      }
      case "MsgUpdateMarket": {
        const updateMarketProposalMsg = {
          updater: proposer,
          msg: transfromUpdateMarketParams(msg),
        };
        return MsgUpdateMarket.encode(updateMarketProposalMsg).finish();
      }
      case "MsgCreateOracle": {
        const createOracleProposalMsg = {
          creator: proposer,
          createOracleParams: transfromCreateOracleParams(msg, wallet.bech32Address),
        };
        return MsgCreateOracle.encode(createOracleProposalMsg).finish();
      }
      // case "MsgUpdateSettlementPrice": {
      //   const settlementPriceProposalMsg = {
      //     title: title,
      //     description: description,
      //     msg: transformSetSettlementPriceParams(msg),
      //   };
      //   return SettlementPriceParams.encode(settlementPriceProposalMsg).finish();
      // }
      case "MsgSoftwareUpgrade": {
        const softwareUpgradeProposalMsg = {
          authority: proposer,
          plan: proposalMsg.plan,
        };
        return MsgSoftwareUpgrade.encode(softwareUpgradeProposalMsg).finish();
      }
      case "MsgCommunityPoolSpend": {
        const communityPoolSpendProposalMsg = {
          authority: proposer,
          recipient: proposalMsg.recipient,
          amount: transformCommunityPoolSpendAmount(proposalMsg.amount),
        };
        return MsgCommunityPoolSpend.encode(communityPoolSpendProposalMsg).finish();
      }
      case "MsgCancelUpgrade": {
        const cancelSoftwareUpgradeProposaMsg = {
          authority: proposer,
        };
        return MsgCancelUpgrade.encode(cancelSoftwareUpgradeProposaMsg).finish();
      }
      default:
        return new Uint8Array();
    }
  }
}

export namespace GovModule { 
  export interface SubmitProposalParams {
    content: {
      typeUrl: string;
      value: ProposalMsg | CosmosProposalMsg | Uint8Array;
    };
    initialDeposit: Coin[];
    proposer: string;
  }

  export interface ProposalMsg {
    title: string;
    description: string;
    msg: ProposalTypeParams;
  }
  export interface DepositParams {
    proposalId: number;
    amount: number;
    denom: string;
  }

  export interface VoteParams {
    proposalId: number;
    option: VoteOption;
    metadata?: string;
  }

  export type CosmosProposalMsg =
    | ParameterChangeProposal
    | SoftwareUpgradeProposal
    | CancelSoftwareUpgradeProposal
    | CommunityPoolSpendProposal
    | MsgSoftwareUpgrade
    | MsgCancelUpgrade
    | MsgCommunityPoolSpend

  export type ProposalTypeParams =
    | AdminModule.CreateTokenParams
    | AdminModule.SetMsgGasCostParams
    | AdminModule.SetMinGasPriceParams
    | AdminModule.LinkPoolParams
    | AdminModule.UnlinkPoolParams
    | AdminModule.SetRewardCurveParams
    | AdminModule.SetCommitmentCurveParams
    | AdminModule.SetRewardsWeightsParams
    | AdminModule.UpdatePoolParams
    | AdminModule.ChangeNumQuotesParams
    | AdminModule.CreateMarketParams
    | MarketModule.UpdateMarketParams
    | AdminModule.CreateOracleParams
    | SettlementPriceParams;
}
