import { CreateTokenProposal } from "@carbon-sdk/codec/coin/proposal";
import { SetMsgFeeProposal } from "@carbon-sdk/codec/fee/proposal";
import { ChangeNumQuotesProposal, ChangeSwapFeeProposal, LinkPoolProposal, SetCommitmentCurveProposal, SetRewardCurveProposal, SetRewardsWeightsProposal, UnlinkPoolProposal } from "@carbon-sdk/codec/liquiditypool/proposal";
import { CreateMarketProposal, UpdateMarketProposal } from "@carbon-sdk/codec/market/proposal";
import { CreateOracleProposal } from "@carbon-sdk/codec/oracle/proposal";
import { SettlementPriceProposal } from "@carbon-sdk/codec/pricing/proposal";
import { Coin } from "@cosmjs/stargate/build/codec/cosmos/base/v1beta1/coin";
import BaseModule from "./base";

export class GovModule extends BaseModule {

  public async submit(params: GovModule.SubmitProposalParams) {
    const wallet = this.getWallet();

    return await wallet.sendTx({
      typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
      value: params,
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
  export type ProposalTypes = CreateTokenProposal | SetMsgFeeProposal | LinkPoolProposal | UnlinkPoolProposal |
    SetRewardCurveProposal | SetCommitmentCurveProposal | SetRewardsWeightsProposal | ChangeSwapFeeProposal |
    ChangeNumQuotesProposal | CreateMarketProposal | UpdateMarketProposal | CreateOracleProposal | SettlementPriceProposal;
};
