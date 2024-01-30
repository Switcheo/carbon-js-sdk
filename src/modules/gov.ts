import { VoteOption } from "@carbon-sdk/codec/cosmos/gov/v1/gov";
import { MsgDeposit, MsgVote } from "@carbon-sdk/codec/cosmos/gov/v1/tx";
import { SettlementPriceParams } from "@carbon-sdk/codec/Switcheo/carbon/pricing/proposal";
import { CarbonTx } from "@carbon-sdk/util";
import { coins } from "@cosmjs/amino";
import Long from "long";
import {
  AdminModule,
} from "./admin";
import BaseModule from "./base";
import { MarketModule, transfromUpdateMarketParams } from "./market";
import { MsgSubmitProposal } from "@carbon-sdk/codec/cosmos/gov/v1/tx";

export class GovModule extends BaseModule {
  public async submit(params: MsgSubmitProposal, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgGovSubmitProposal,
        value: params,
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
}

export namespace GovModule { 
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
