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
import { 
  transfromCreateTokenParams,
  transfromSetMsgFeeParams, 
  transfromLinkPoolParams,
  transfromUnlinkPoolParams,
  transfromSetRewardCurveParams,
  transfromSetCommitmentCurveParams,
  transfromSetRewardsWeightsParams,
  transfromChangeSwapFeeParams,
  transformCreateMarketParams,
  transfromCreateOracleParams,
  transfromChangNumQuotesParams,
} from "./admin";
import { transfromUpdateMarketParams } from "./market";

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

  public encode(proposalUrl: string, msg: any): Uint8Array {
    const wallet = this.getWallet();

    switch(proposalUrl.split(".").pop()) {
      case "CreateTokenProposal": 
        const createTokenMsg = {
          title : msg.title,
          description: msg.description,
          token: transfromCreateTokenParams(msg.token, msg.token.creator)
        }
        return CreateTokenProposal.encode(createTokenMsg).finish()
      case "SetMsgFeeProposal":
        const setMsgFeeMsg = {
          title : msg.title,
          description: msg.description,
          params: transfromSetMsgFeeParams(msg.params, msg.params.creator)
        }
        return SetMsgFeeProposal.encode(setMsgFeeMsg).finish()
      case "LinkPoolProposal":
        const linkPoolMsg = {
          title : msg.title,
          description: msg.description,
          linkPoolParams: transfromLinkPoolParams(msg.linkPoolParams, msg.linkPoolParams.creator)
        }
        return LinkPoolProposal.encode(linkPoolMsg).finish()
      case "UnlinkPoolProposal":
        const unlinkPoolMsg = {
          title : msg.title,
          description: msg.description,
          unlinkPoolParams: transfromUnlinkPoolParams(msg.unlinkPoolParams, msg.unlinkPoolParams.creator)
        }
        return UnlinkPoolProposal.encode(unlinkPoolMsg).finish()
      case "SetRewardCurveProposal":
        const setRewardCurveMsg = {
          title : msg.title,
          description: msg.description,
          setRewardCurveParams: transfromSetRewardCurveParams(msg.setRewardCurveParams, msg.setRewardCurveParams.creator)
        } 
        return SetRewardCurveProposal.encode(setRewardCurveMsg).finish()
      case "SetCommitmentCurveProposal": 
        const setCommitmentCurveMsg = {
          title : msg.title,
          description: msg.description,
          setCommitmentCurveParams: transfromSetCommitmentCurveParams(msg.setCommitmentCurveParams, msg.setCommitmentCurveParams.creator)
        }
        return SetCommitmentCurveProposal.encode(setCommitmentCurveMsg).finish()
      case "SetRewardsWeightsProposal": 
        const setRewardsWeightsMsg = {
          title : msg.title,
          description: msg.description,
          setRewardsWeightsParams: transfromSetRewardsWeightsParams(msg.setRewardsWeightsParams, wallet.bech32Address)
        }
        return SetRewardsWeightsProposal.encode(setRewardsWeightsMsg).finish()
      case "ChangeSwapFeeProposal":
        const changeSwapFeeMsg = {
          title : msg.title,
          description: msg.description,
          changeSwapFeeParams: transfromChangeSwapFeeParams(msg.changeSwapFeeParams, msg.changeSwapFeeParams.creator)
        }
        return ChangeSwapFeeProposal.encode(changeSwapFeeMsg).finish()
      case "ChangeNumQuotesProposal": 
        const changeNumQuotesProposalMsg = {
          title : msg.title,
          description: msg.description,
          changeNumQuotesParams: transfromChangNumQuotesParams(msg.changeNumQuotesParams, msg.changeNumQuotesParams.creator)
        }
        return ChangeNumQuotesProposal.encode(changeNumQuotesProposalMsg).finish()
      case "CreateMarketProposal": 
        const createMarketProposalMsg = {
          title : msg.title,
          description: msg.description,
          market: transformCreateMarketParams(msg.market)
        }
        return CreateMarketProposal.encode(createMarketProposalMsg).finish()
      case "UpdateMarketProposal": 
        const updateMarketProposalMsg = {
          title : msg.title,
          description: msg.description,
          marketParams: transfromUpdateMarketParams(msg.marketParams)
        }
        return UpdateMarketProposal.encode(updateMarketProposalMsg).finish()
      case "CreateOracleProposal": 
        const createOracleProposalMsg = {
          title : msg.title,
          description: msg.description,
          oracle: transfromCreateOracleParams(msg.oracle, msg.oracle.creator)
        }
        return CreateOracleProposal.encode(createOracleProposalMsg).finish()
      case "SettlementPriceProposal":
        return SettlementPriceProposal.encode(msg).finish()
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