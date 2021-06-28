import { MsgSend } from "@cosmjs/stargate/build/codec/cosmos/bank/v1beta1/tx";
import { coins } from "@cosmjs/amino";
import BaseModule from "./base";

export class BankModule extends BaseModule {

  public async sendTokens(params: BankModule.SendTokensParams) {
    const wallet = this.getWallet();

    const value = MsgSend.fromPartial({
      fromAddress: params.fromAddress,
      toAddress: params.toAddress,
      amount: coins(params.amount, params.denom)
    })

    return await wallet.sendTx({
      typeUrl: "/cosmos.bank.v1beta1.MsgSend",
      value,
    });
  }

}

export namespace BankModule {
  export interface SendTokensParams {
    fromAddress: string
    toAddress: string
    amount: number
    denom: string
  }
};
