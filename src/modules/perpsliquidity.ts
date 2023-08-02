import { MsgCreatePlPool, MsgDepositToPlPool, MsgDeregisterFromPlPool, MsgRegisterToPlPool, MsgUpdatePlPool, MsgWithdrawFromPlPool, UpdatePlPoolParams } from "@carbon-sdk/codec";
import { CarbonTx } from "@carbon-sdk/util";
import BaseModule from "./base";

export class PerpsLiquidityModule extends BaseModule {
  public async createPerpertualsPool(params: PerpsLiquidityModule.CreatePerpetualPoolParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgCreatePlPool.fromPartial({
      creator: wallet.bech32Address,
      name: params.name,
      depositDenom: params.depositDenom,
      shareTokenSymbol: params.shareTokenSymbol,
      supplyCap: params.supplyCap,
      depositFee: params.depositFee,
      withdrawalFee: params.withdrawalFee,
      borrowFee: params.borrowFee,
    })

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgCreatePlPool,
        value,
      },
      opts
    );
  }


  public async updatePerpetualsPool(params: PerpsLiquidityModule.UpdatePerpetualPoolParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const updatePoolParam: UpdatePlPoolParams = {
      name: params.name,
      supplyCap: params.supplyCap,
      depositFee: params.depositFee,
      withdrawalFee: params.withdrawalFee,
      borrowFee: params.borrowFee,
    }

    const value = MsgUpdatePlPool.fromPartial({
      creator: wallet.bech32Address,
      poolId: params.poolId,
      updatePoolParams: updatePoolParam,
    })

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgUpdatePlPool,
        value,
      },
      opts
    );
  }

  public async depositToPerpetualsPool(params: PerpsLiquidityModule.DepositToPerpetualsPoolParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgDepositToPlPool.fromPartial({
      creator: wallet.bech32Address,
      poolId: params.poolId,
      depositAmount: params.depositAmount,
      minShareAmount: params.minShareAmount,
    })

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgDepositToPlPool,
        value,
      },
      opts
    );
  }

  public async withdrawFromPerpetualsPool(params: PerpsLiquidityModule.WithdrawFromPerpetualsPoolParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgWithdrawFromPlPool.fromPartial({
      creator: wallet.bech32Address,
      poolId: params.poolId,
      shareAmount: params.shareAmount,
      minReceiveAmount: params.minReceiveAmount,
    })

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgWithdrawFromPlPool,
        value,
      },
      opts
    );
  }

  public async registerToPlPool(params: PerpsLiquidityModule.RegisterToPlPoolParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgRegisterToPlPool.fromPartial({
      creator: wallet.bech32Address,
      poolId: params.poolId,
      marketId: params.marketId,
    })

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgRegisterToPlPool,
        value,
      },
      opts
    );
  }

  public async deregisterFromPlPool(params: PerpsLiquidityModule.DeregisterFromPlPoolParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgDeregisterFromPlPool.fromPartial({
      creator: wallet.bech32Address,
      marketId: params.marketId,
    })

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgDeregisterFromPlPool,
        value,
      },
      opts
    );
  }
}

export namespace PerpsLiquidityModule {
  export interface CreatePerpetualPoolParams {
    name: string;
    depositDenom: string;
    shareTokenSymbol: string;
    supplyCap: string;
    depositFee: string;
    withdrawalFee: string;
    borrowFee: string;
  }

  export interface UpdatePerpetualPoolParams {
    name: string;
    poolId: Long;
    depositDenom: string;
    shareTokenSymbol: string;
    supplyCap: string;
    depositFee: string;
    withdrawalFee: string;
    borrowFee: string;
  }

  export interface DepositToPerpetualsPoolParams {
    poolId: Long;
    depositAmount: string;
    minShareAmount: string;
  }

  export interface WithdrawFromPerpetualsPoolParams {
    poolId: Long;
    shareAmount: string;
    minReceiveAmount: string;
  }

  export interface RegisterToPlPoolParams {
    poolId: Long;
    marketId: string;
  }

  export interface DeregisterFromPlPoolParams {
    marketId: string;
  }
}
