import { Models } from "@carbon-sdk/index";
import { CarbonTx } from "@carbon-sdk/util";
import { BigNumber } from "bignumber.js";
import Long from "long";
import BaseModule from "./base";

export class PerpsLiquidityPoolModule extends BaseModule {
  public async create(params: PerpsLiquidityPoolModule.CreatePoolParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Models.MsgCreatePerpetualsLiquidityPool.fromPartial({
      creator: wallet.bech32Address,
      name: params.name,
      depositDenom: params.depositDenom,
      shareTokenSymbol: params.shareTokenSymbol,
      supplyCap: params.supplyCap,
      depositFeeBps: params.depositFeeBps,
      withdrawalFeeBps: params.withdrawalFeeBps,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgCreatePerpetualsLiquidityPool,
        value,
      },
      opts
    );
  }
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
  public async removeLiquidity(params: PerpsLiquidityPoolModule.RemoveLiquidityParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Models.MsgWithdrawFromPerpetualsLiquidityPool.fromPartial({
      creator: wallet.bech32Address,
      perpetualsLiquidityPoolId: new Long(params.perpetualsLiquidityPoolId),
      shareAmount: params.shareAmount.toString(10),
      minReceiveAmount: params.minReceiveAmount.toString(10),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgWithdrawFromPerpetualsLiquidityPool,
        value,
      },
      opts
    );
  }
}

export namespace PerpsLiquidityPoolModule {
  export interface CreatePoolParams {
    name: string;
    depositDenom: string;
    shareTokenSymbol: string;
    supplyCap: string;
    depositFeeBps: string;
    withdrawalFeeBps: string;
  }
  export interface AddLiquidityParams {
    perpetualsLiquidityPoolId: number;
    depositAmount: BigNumber;
    minShareAmount: BigNumber;
  }
  export interface RemoveLiquidityParams {
    perpetualsLiquidityPoolId: number;
    shareAmount: BigNumber;
    minReceiveAmount: BigNumber;
  }
}
