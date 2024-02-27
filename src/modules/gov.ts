import { VoteOption } from "@carbon-sdk/codec/cosmos/gov/v1/gov";
import { MsgDeposit, MsgVote, MsgSubmitProposal } from "@carbon-sdk/codec/cosmos/gov/v1/tx";
import { CarbonTx } from "@carbon-sdk/util";
import { coins } from "@cosmjs/amino";
import Long from "long";
import BaseModule from "./base";

export class GovModule extends BaseModule {
  public async submit(proposalMsg: MsgSubmitProposal, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const { initialDeposit, messages, metadata, title, summary, proposer } = proposalMsg

    const finalProposalMsg = MsgSubmitProposal.fromPartial({
      initialDeposit,
      messages,
      metadata,
      title,
      summary,
      proposer,
    })

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgGovSubmitProposal,
        value: finalProposalMsg,
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

  // public encode(proposalUrl: string, proposalMsg: any): Uint8Array {
  //   const wallet = this.getWallet();
  //   const { title, description, msg } = proposalMsg;

  //   switch (proposalUrl.split(".").pop()) {
  //     case "CreateTokenProposal": {
  //       const createTokenMsg = {
  //         title: title,
  //         description: description,
  //         msg: transfromCreateTokenParams(msg, wallet.bech32Address),
  //       };
  //       return CreateTokenProposal.encode(createTokenMsg).finish();
  //     }
  //     case "SetMsgGasCostProposal": {
  //       const setMsgGasCostMsg = {
  //         title: title,
  //         description: description,
  //         msg: transfromSetMsgGasCostParams(msg),
  //       };
  //       return SetMsgGasCostProposal.encode(setMsgGasCostMsg).finish();
  //     }
  //     case "SetMinGasPriceProposal": {
  //       const setMinGasPriceMsg = {
  //         title: title,
  //         description: description,
  //         msg: transfromSetMinGasPriceParams(msg),
  //       };
  //       return SetMinGasPriceProposal.encode(setMinGasPriceMsg).finish();
  //     }
  //     case "RemoveMsgGasCostProposal": {
  //       const removeMsgGasCostMsg = {
  //         title: title,
  //         description: description,
  //         msgType: proposalMsg.msgType,
  //       };
  //       return RemoveMsgGasCostProposal.encode(removeMsgGasCostMsg).finish();
  //     }
  //     case "RemoveMinGasPriceProposal": {
  //       const removeMinGasPriceMsg = {
  //         title: title,
  //         description: description,
  //         denom: proposalMsg.denom,
  //       };
  //       return RemoveMinGasPriceProposal.encode(removeMinGasPriceMsg).finish();
  //     }
  //     case "SetRewardCurveProposal": {
  //       const setRewardCurveMsg = {
  //         title: title,
  //         description: description,
  //         msg: transfromSetRewardCurveParams(msg),
  //       };
  //       return SetRewardCurveProposal.encode(setRewardCurveMsg).finish();
  //     }
  //     case "SetCommitmentCurveProposal": {
  //       const setCommitmentCurveMsg = {
  //         title: title,
  //         description: description,
  //         msg: transfromSetCommitmentCurveParams(msg),
  //       };
  //       return SetCommitmentCurveProposal.encode(setCommitmentCurveMsg).finish();
  //     }
  //     case "SetRewardsWeightsProposal": {
  //       const setRewardsWeightsMsg = {
  //         title: title,
  //         description: description,
  //         msg: transfromSetRewardsWeightsParams(msg),
  //       };
  //       return SetRewardsWeightsProposal.encode(setRewardsWeightsMsg).finish();
  //     }
  //     case "UpdatePoolProposal": {
  //       const updatePoolProposalMsg = {
  //         title: title,
  //         description: description,
  //         msg: transfromUpdatePoolParams(msg),
  //       };
  //       return UpdatePoolProposal.encode(updatePoolProposalMsg).finish();
  //     }
  //     case "UpdateMarketProposal": {
  //       const updateMarketProposalMsg = {
  //         title: title,
  //         description: description,
  //         msg: transfromUpdateMarketParams(msg),
  //       };
  //       return UpdateMarketProposal.encode(updateMarketProposalMsg).finish();
  //     }
  //     case "CreateOracleProposal": {
  //       const createOracleProposalMsg = {
  //         title: title,
  //         description: description,
  //         msg: transfromCreateOracleParams(msg, wallet.bech32Address),
  //       };
  //       return CreateOracleProposal.encode(createOracleProposalMsg).finish();
  //     }
  //     case "SettlementPriceProposal": {
  //       const settlementPriceProposalMsg = {
  //         title: title,
  //         description: description,
  //         msg: transformSetSettlementPriceParams(msg),
  //       };
  //       return SettlementPriceProposal.encode(settlementPriceProposalMsg).finish();
  //     }
  //     case "ParameterChangeProposal": {
  //       const parameterChangeProposalMsg = {
  //         title: title,
  //         description: description,
  //         changes: proposalMsg.changes,
  //       };
  //       return ParameterChangeProposal.encode(parameterChangeProposalMsg).finish();
  //     }
  //     case "SoftwareUpgradeProposal": {
  //       const softwareUpgradeProposalMsg = {
  //         title: title,
  //         description: description,
  //         plan: proposalMsg.plan,
  //       };
  //       return SoftwareUpgradeProposal.encode(softwareUpgradeProposalMsg).finish();
  //     }
  //     case "CommunityPoolSpendProposal": {
  //       const communityPoolSpendProposalMsg = {
  //         title: title,
  //         description: description,
  //         recipient: proposalMsg.recipient,
  //         amount: transformCommunityPoolSpendAmount(proposalMsg.amount),
  //       };
  //       return CommunityPoolSpendProposal.encode(communityPoolSpendProposalMsg).finish();
  //     }
  //     case "CancelSoftwareUpgradeProposal": {
  //       const cancelSoftwareUpgradeProposaMsg = {
  //         title: title,
  //         description: description,
  //       };
  //       return CancelSoftwareUpgradeProposal.encode(cancelSoftwareUpgradeProposaMsg).finish();
  //     }
  //     case "TextProposal": {
  //       const textProposalMsg = {
  //         title: title,
  //         description: description,
  //       };
  //       return TextProposal.encode(textProposalMsg).finish();
  //     }
  //     default:
  //       return new Uint8Array();
  //   }
  // }
}

export namespace GovModule {
  // export interface SubmitProposalParams {
  //   content: {
  //     typeUrl: string;
  //     value: ProposalMsg | CosmosProposalMsg | Uint8Array;
  //   };
  //   initialDeposit: Coin[];
  //   proposer: string;
  // }

  // export interface ProposalMsg {
  //   title: string;
  //   description: string;
  //   msg: ProposalTypeParams;
  // }

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

  // export type CosmosProposalMsg =
  //   | ParameterChangeProposal
  //   | SoftwareUpgradeProposal
  //   | CancelSoftwareUpgradeProposal
  //   | TextProposal
  //   | CommunityPoolSpendProposal;

  // export type ProposalTypeParams =
  //   | AdminModule.CreateTokenParams
  //   | AdminModule.SetMsgGasCostParams
  //   | AdminModule.SetMinGasPriceParams
  //   | AdminModule.LinkPoolParams
  //   | AdminModule.UnlinkPoolParams
  //   | AdminModule.SetRewardCurveParams
  //   | AdminModule.SetCommitmentCurveParams
  //   | AdminModule.SetRewardsWeightsParams
  //   | AdminModule.UpdatePoolParams
  //   | AdminModule.ChangeNumQuotesParams
  //   | AdminModule.CreateMarketParams
  //   | MarketModule.UpdateMarketParams
  //   | AdminModule.CreateOracleParams
  //   | SettlementPriceParams;
}