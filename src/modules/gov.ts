import { CreateTokenProposal } from "@carbon-sdk/codec/coin/proposal";
import { SetMsgFeeProposal } from "@carbon-sdk/codec/fee/proposal";
import { ChangeNumQuotesProposal, ChangeSwapFeeProposal, LinkPoolProposal, SetCommitmentCurveProposal, SetRewardCurveProposal, SetRewardsWeightsProposal, UnlinkPoolProposal } from "@carbon-sdk/codec/liquiditypool/proposal";
import { CreateMarketProposal, UpdateMarketProposal } from "@carbon-sdk/codec/market/proposal";
import { CreateOracleProposal } from "@carbon-sdk/codec/oracle/proposal";
import { SettlementPriceProposal } from "@carbon-sdk/codec/pricing/proposal";
import { coins } from "@cosmjs/amino";
import { Coin } from "@cosmjs/stargate/build/codec/cosmos/base/v1beta1/coin";
import BaseModule from "./base";
import Long from "long";
import { CarbonTx } from "@carbon-sdk/util";
import { MsgDeposit, MsgVote } from "@carbon-sdk/codec/cosmos/gov/v1beta1/tx";
import { VoteOption } from "@carbon-sdk/codec/cosmos/gov/v1beta1/gov";
import _m0 from "protobufjs/minimal";

export class GovModule extends BaseModule {

  public async submit(params: GovModule.SubmitProposalParams) {
    const wallet = this.getWallet();

    const {typeUrl, value} = params.content;
    params.content.value = this.encode(typeUrl, value)

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgSubmitProposal,
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
      typeUrl: CarbonTx.Types.MsgDeposit,
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
      typeUrl: CarbonTx.Types.MsgVote,
      value,
    });
  }

  public encode(proposalUrl: string, object: any): Uint8Array {
    switch(proposalUrl.split(".").pop()) {
      case "CreateTokenProposal": 
        return CreateTokenProposal.encode(object).finish()
      case "SetMsgFeeProposal":
        return SetMsgFeeProposal.encode(object).finish()
      case "LinkPoolProposal":
        return LinkPoolProposal.encode(object).finish()
      case "UnlinkPoolProposal":
        return UnlinkPoolProposal.encode(object).finish()
      case "SetRewardCurveProposal": 
        return SetRewardCurveProposal.encode(object).finish()
      case "SetCommitmentCurveProposal": 
        return SetCommitmentCurveProposal.encode(object).finish()
      case "SetRewardsWeightsProposal": 
        return SetRewardsWeightsProposal.encode(object).finish()
      case "ChangeSwapFeeProposal":
        return ChangeSwapFeeProposal.encode(object).finish()
      case "ChangeNumQuotesProposal": 
        return ChangeNumQuotesProposal.encode(object).finish()
      case "CreateMarketProposal": 
        return CreateMarketProposal.encode(object).finish()
      case "UpdateMarketProposal": 
        return UpdateMarketProposal.encode(object).finish()
      case "CreateOracleProposal": 
        return CreateOracleProposal.encode(object).finish()
      case "SettlementPriceProposal":
        return SettlementPriceProposal.encode(object).finish()
      default:
        return new Uint8Array()
    }
  }
}

export namespace GovModule {
  export interface SubmitProposalParams {
    content: {
      typeUrl: string
      value: ProposalTypes | Uint8Array
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

  export type ProposalTypes = CreateTokenProposal | SetMsgFeeProposal | LinkPoolProposal | UnlinkPoolProposal |
    SetRewardCurveProposal | SetCommitmentCurveProposal | SetRewardsWeightsProposal | ChangeSwapFeeProposal |
    ChangeNumQuotesProposal | CreateMarketProposal | UpdateMarketProposal | CreateOracleProposal | SettlementPriceProposal;

};
