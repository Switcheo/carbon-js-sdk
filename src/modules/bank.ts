import { MsgSend } from "@carbon-sdk/codec/cosmos/bank/v1beta1/tx";
import { CarbonTx } from "@carbon-sdk/util";
import { Coin } from "@cosmjs/amino";
import BaseModule from "./base";

export class BankModule extends BaseModule {

  public async sendTokens(params: BankModule.SendTokensParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgSend.fromPartial({
      fromAddress: params.fromAddress,
      toAddress: params.toAddress,
      amount: params.amount
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgSend,
      value,
    }, { memo: params.memo, ...opts });
  }

}

export namespace BankModule {
  export interface SendTokensParams {
    fromAddress: string
    toAddress: string
    amount: Coin[]
    memo?: string
  }
};
