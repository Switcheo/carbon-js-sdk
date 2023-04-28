import { Models } from "@carbon-sdk/index";
import { CarbonTx } from "@carbon-sdk/util";
import { BigNumber } from "bignumber.js";
import Long from "long";
import BaseModule from "./base";

export class PerpsLiquidityPoolModule extends BaseModule {
  public async addLiquidity(params: PerpsLiquidityPoolModule.AddLiquidityParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const value = Models.MsgDepositToPerpetualsLiquidityPool.fromPartial({
      creator: wallet.bech32Address,
      perpetualsLiquidityPoolId: new Long(params.perpetualsLiquidityPoolId),
      depositAmount: params.depositAmount.toString(10),
      minShareAmount: params.minShareAmount.toString(10),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgDepositToPerpetualsLiquidityPool,
        value,
      },
      opts
    );
  }
}

export namespace PerpsLiquidityPoolModule {
  export interface AddLiquidityParams {
    perpetualsLiquidityPoolId: number;
    depositAmount: BigNumber;
    minShareAmount: BigNumber;
  }
  export interface RemoveLiquidityParams {
    poolId: number;
    shares: BigNumber;
  }
}
