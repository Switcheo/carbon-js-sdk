import { CreateTokenProposal } from "@carbon-sdk/codec/coin/proposal";
import { SetMsgFeeProposal } from "@carbon-sdk/codec/fee/proposal";
import { ChangeNumQuotesProposal, ChangeSwapFeeProposal, LinkPoolProposal, SetCommitmentCurveProposal, SetRewardCurveProposal, SetRewardsWeightsProposal, UnlinkPoolProposal } from "@carbon-sdk/codec/liquiditypool/proposal";
import { CreateMarketProposal, UpdateMarketProposal } from "@carbon-sdk/codec/market/proposal";
import { CreateOracleProposal } from "@carbon-sdk/codec/oracle/proposal";
import { SettlementPriceProposal } from "@carbon-sdk/codec/pricing/proposal";
import { coins } from "@cosmjs/amino";
import { Coin } from "@cosmjs/stargate/build/codec/cosmos/base/v1beta1/coin";
import { MsgDeposit, MsgVote } from "cosmjs-types/cosmos/gov/v1beta1/tx";
import BaseModule from "./base";
import Long from "long";
import { VoteOption } from "cosmjs-types/cosmos/gov/v1beta1/gov";

export class GovModule extends BaseModule {

  public async submit(params: GovModule.SubmitProposalParams) {
    const wallet = this.getWallet();

    return await wallet.sendTx({
      typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
      value: params,
    });
  }

  public async deposit(params: GovModule.DepositParams) {
    const wallet = this.getWallet();

    const value = MsgDeposit.fromPartial({
      proposalId: new Long(params.proposalId),
      depositor: wallet.bech32Address,
      amount: coins(params.amount, params.denom)
    })

    return await wallet.sendTx({
      typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
      value,
    });
  }

  public async vote(params: GovModule.VoteParams) {
    const wallet = this.getWallet();

    const value = MsgVote.fromPartial({
      proposalId: new Long(params.proposalId),
      voter: wallet.bech32Address,
      option: params.option,
    })

    return await wallet.sendTx({
      typeUrl: "/cosmos.gov.v1beta1.MsgVote",
      value,
    });
  }
}

export namespace GovModule {
  export interface SubmitProposalParams {
    content: {
      typeUrl: string
      value: ProposalTypes
    }
    initialDeposit: Coin[]
    proposer: string
  }

  export interface DepositParams {
    proposalId: number
    amount: number
    denom: string
  }

  export interface VoteParams {
    proposalId: number,
    option: VoteOption,
  }

  type ProposalTypes = CreateTokenProposal | SetMsgFeeProposal | LinkPoolProposal | UnlinkPoolProposal |
    SetRewardCurveProposal | SetCommitmentCurveProposal | SetRewardsWeightsProposal | ChangeSwapFeeProposal |
    ChangeNumQuotesProposal | CreateMarketProposal | UpdateMarketProposal | CreateOracleProposal | SettlementPriceProposal;
};
