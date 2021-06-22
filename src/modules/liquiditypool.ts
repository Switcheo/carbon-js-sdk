import { MsgCreatePool } from "@carbon-sdk/codec/liquiditypool/tx";
import { CarbonTx } from "@carbon-sdk/util/tx";
import BaseModule from "./base";
import { BigNumber } from "bignumber.js";

export class LiquidityPoolOrder extends BaseModule {

  public async create(params: LiquidityPoolOrder.CreatePoolParams) {
    const wallet = this.getWallet();

    const value = MsgCreatePool.fromPartial({
      creator: wallet.bech32Address,
        tokenADenom: params.tokenADenom,
        tokenBDenom: params.tokenBDenom,
        tokenAWeight: params.tokenAWeight.shiftedBy(18).toString(10),
        tokenBWeight: params.tokenBWeight.shiftedBy(18).toString(10),
        swapFee: params.swapFee.shiftedBy(18).toString(10),
        numQuotes: params.numQuotes,
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgCreatePool,
      value,
    });
  }
}

export namespace LiquidityPoolOrder {
  export interface CreatePoolParams {
    tokenADenom: string
    tokenBDenom: string
    tokenAWeight: BigNumber
    tokenBWeight: BigNumber
    swapFee: BigNumber
    numQuotes: Long
  }
};
