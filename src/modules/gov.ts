import { VoteOption } from "@carbon-sdk/codec/cosmos/gov/v1/gov";
import { MsgDeposit, MsgVote, MsgSubmitProposal } from "@carbon-sdk/codec/cosmos/gov/v1/tx";
import { CarbonTx } from "@carbon-sdk/util";
import { coins } from "@cosmjs/amino";
import Long from "long";
import BaseModule from "./base";

export class GovModule extends BaseModule {
  public async submit(proposalMsg: MsgSubmitProposal, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const { initialDeposit, messages, metadata, title, summary, proposer } = proposalMsg;

    const finalProposalMsg = MsgSubmitProposal.fromPartial({
      initialDeposit,
      messages,
      metadata,
      title,
      summary,
      proposer,
    });

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
}
