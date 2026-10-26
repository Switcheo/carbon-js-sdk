import { MsgRetryTicket, MsgWithdraw } from "@carbon-sdk/codec/Switcheo/carbon/withdrawal/tx";
import { CarbonTx } from "@carbon-sdk/util";
import BigNumber from "bignumber.js";
import Long from "long";

import BaseModule from "./base";

// The sunset withdrawal system: a user's USD paper balance leaves through an exit.
// Queries are on sdk.query.withdrawal (record, quote, tickets, params, coverage).
export class WithdrawalModule extends BaseModule {
  // usd is in 18 decimals, at most the live balance; recipient is the address on the exit's chain
  public async withdraw(params: WithdrawalModule.WithdrawParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgWithdraw.fromPartial({
      sender: wallet.bech32Address,
      usd: params.usd.dp(0, BigNumber.ROUND_FLOOR).toString(10),
      recipient: params.recipient,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgWithdrawalWithdraw,
        value,
      },
      opts
    );
  }

  // retries a reverted ticket; an empty recipient keeps the ticket's
  public async retryTicket(params: WithdrawalModule.RetryTicketParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgRetryTicket.fromPartial({
      sender: wallet.bech32Address,
      ticketId: Long.fromString(params.ticketId.toString()),
      recipient: params.recipient ?? "",
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgRetryTicket,
        value,
      },
      opts
    );
  }
}

export namespace WithdrawalModule {
  export interface WithdrawParams {
    usd: BigNumber;
    recipient: string;
  }
  export interface RetryTicketParams {
    ticketId: Long | number | string;
    recipient?: string;
  }
}
