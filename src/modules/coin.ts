import { MsgWithdraw } from "@carbon-sdk/codec/coin/tx";
import { CarbonTx } from "@carbon-sdk/util";
import BigNumber from "bignumber.js";
import BaseModule from "./base";

export class CoinModule extends BaseModule {

  public async createWithdrawal(params: CoinModule.CreateWithdrawalParams) {
    const wallet = this.getWallet();

    const value = MsgWithdraw.fromPartial({
      creator: wallet.bech32Address,
      toAddress: params.toAddress,
      denom: params.denom,
      amount: params.amount.shiftedBy(18).toString(10),
      feeAmount: params.feeAmount.shiftedBy(18).toString(10),
      feeAddress: params.feeAddress,
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgWithdraw,
      value,
    });
  }
}

export namespace CoinModule {
  export interface CreateWithdrawalParams {
    toAddress: string,
    denom: string,
    amount: BigNumber,
    feeAmount: BigNumber,
    feeAddress: string,
  }
};
