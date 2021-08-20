import { MsgMintToken, MsgWithdraw } from "@carbon-sdk/codec/coin/tx";
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

  public async mintToken(params: CoinModule.MintTokenParams) {
    const wallet = this.getWallet();

    const value = MsgMintToken.fromPartial({
      creator: params.creator ?? wallet.bech32Address,
      denom: params.denom,
      amount: params.amount.toString(10),
      to: params.to ?? wallet.bech32Address,
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgMintToken,
      value,
    })
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

  export interface MintTokenParams {
    creator?: string,
    denom: string,
    amount: BigNumber,
    to?: string,
  }
};
