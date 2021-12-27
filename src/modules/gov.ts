import { CreateTokenProposal } from "@carbon-sdk/codec/coin/proposal";
import { SetMsgFeeProposal } from "@carbon-sdk/codec/fee/proposal";
import { LinkPoolProposal, SetCommitmentCurveProposal, SetRewardCurveProposal, SetRewardsWeightsProposal, UnlinkPoolProposal, UpdatePoolProposal } from "@carbon-sdk/codec/liquiditypool/proposal";
import { CreateMarketProposal, UpdateMarketProposal } from "@carbon-sdk/codec/market/proposal";
import { CreateOracleProposal } from "@carbon-sdk/codec/oracle/proposal";
import { SettlementPriceParams, SettlementPriceProposal } from "@carbon-sdk/codec/pricing/proposal";
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
  transformCreateMarketParams,
  transfromCreateOracleParams,
  transfromUpdatePoolParams,
  AdminModule,
  transformSetSettlementPriceParams,
} from "./admin";
import { MarketModule, transfromUpdateMarketParams } from "./market";

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

  public encode(proposalUrl: string, proposalMsg: any): Uint8Array {
    const wallet = this.getWallet();
    const {title, description, msg} = proposalMsg;

    switch(proposalUrl.split(".").pop()) {
      case "CreateTokenProposal": 
        const createTokenMsg = {
          title : title,
          description: description,
          msg: transfromCreateTokenParams(msg, wallet.bech32Address)
        }
        return CreateTokenProposal.encode(createTokenMsg).finish()
      case "SetMsgFeeProposal":
        const setMsgFeeMsg = {
          title : title,
          description: description,
          msg: transfromSetMsgFeeParams(msg)
        }
        return SetMsgFeeProposal.encode(setMsgFeeMsg).finish()
      case "LinkPoolProposal":
        const linkPoolMsg = {
          title : title,
          description: description,
          msg: transfromLinkPoolParams(msg)
        }
        return LinkPoolProposal.encode(linkPoolMsg).finish()
      case "UnlinkPoolProposal":
        const unlinkPoolMsg = {
          title : title,
          description: description,
          msg: transfromUnlinkPoolParams(msg)
        }
        return UnlinkPoolProposal.encode(unlinkPoolMsg).finish()
      case "SetRewardCurveProposal":
        const setRewardCurveMsg = {
          title : title,
          description: description,
          msg: transfromSetRewardCurveParams(msg)
        } 
        return SetRewardCurveProposal.encode(setRewardCurveMsg).finish()
      case "SetCommitmentCurveProposal": 
        const setCommitmentCurveMsg = {
          title : title,
          description: description,
          msg: transfromSetCommitmentCurveParams(msg)
        }
        return SetCommitmentCurveProposal.encode(setCommitmentCurveMsg).finish()
      case "SetRewardsWeightsProposal": 
        const setRewardsWeightsMsg = {
          title : title,
          description: description,
          msg: transfromSetRewardsWeightsParams(msg)
        }
        return SetRewardsWeightsProposal.encode(setRewardsWeightsMsg).finish()
      case "UpdatePoolProposal": 
        const updatePoolProposalMsg = {
          title : title,
          description: description,
          msg: transfromUpdatePoolParams(msg)
        }
        return UpdatePoolProposal.encode(updatePoolProposalMsg).finish()
      case "CreateMarketProposal": 
        const createMarketProposalMsg = {
          title : title,
          description: description,
          msg: transformCreateMarketParams(msg)
        }
        return CreateMarketProposal.encode(createMarketProposalMsg).finish()
      case "UpdateMarketProposal": 
        const updateMarketProposalMsg = {
          title : title,
          description: description,
          msg: transfromUpdateMarketParams(msg)
        }
        return UpdateMarketProposal.encode(updateMarketProposalMsg).finish()
      case "CreateOracleProposal": 
        const createOracleProposalMsg = {
          title : title,
          description: description,
          msg: transfromCreateOracleParams(msg, wallet.bech32Address)
        }
        return CreateOracleProposal.encode(createOracleProposalMsg).finish()
      case "SettlementPriceProposal":
        const settlementPriceProposalMsg = {
          title : title,
          description: description,
          msg: transformSetSettlementPriceParams(msg),
        }
        return SettlementPriceProposal.encode(settlementPriceProposalMsg).finish()
      default:
        return new Uint8Array()
    }
  }
}

export namespace GovModule {
  export interface SubmitProposalParams {
    content: {
      typeUrl: string
      value: ProposalMsg | Uint8Array
    }
    initialDeposit: Coin[]
    proposer: string
  }

  export interface ProposalMsg {
    title: string,
    description: string,
    msg: ProposalTypes 
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

  export type ProposalTypes =
    AdminModule.CreateTokenParams |
    AdminModule.SetMsgFeeParams |
    AdminModule.LinkPoolParams |
    AdminModule.UnlinkPoolParams |
    AdminModule.SetRewardCurveParams |
    AdminModule.SetCommitmentCurveParams |
    AdminModule.SetRewardsWeightsParams |
    AdminModule.UpdatePoolParams |
    AdminModule.ChangeNumQuotesParams |
    AdminModule.CreateMarketParams |
    MarketModule.UpdateMarketParams |
    AdminModule.CreateOracleParams |
    SettlementPriceParams
  ;

};