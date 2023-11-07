import { Carbon } from "@carbon-sdk/CarbonSDK";
import { CarbonTx } from "@carbon-sdk/util";
import BaseModule from "./base";

export class PerpspoolModule extends BaseModule {
  public async createPerpertualsPool(params: PerpspoolModule.CreatePoolParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Carbon.Perpspool.MsgCreatePool.fromPartial({
      creator: wallet.bech32Address,
      name: params.name,
      depositDenom: params.depositDenom,
      shareTokenSymbol: params.shareTokenSymbol,
      supplyCap: params.supplyCap,
      depositFee: params.depositFee,
      withdrawalFee: params.withdrawalFee,
      baseBorrowFeePerFundingInterval: params.borrowFee,
    })

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgCreatePool,
        value,
      },
      opts
    );
  }


  public async updatePerpetualsPool(params: PerpspoolModule.UpdatePoolParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const updatePoolParam: Carbon.Perpspool.UpdatePoolParams = {
      name: params.name,
      supplyCap: params.supplyCap,
      depositFee: params.depositFee,
      withdrawalFee: params.withdrawalFee,
      baseBorrowFeePerFundingInterval: params.borrowFee,
    }

    const value = Carbon.Perpspool.MsgUpdatePool.fromPartial({
      creator: wallet.bech32Address,
      poolId: params.poolId,
      updatePoolParams: updatePoolParam,
    })

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgUpdatePool,
        value,
      },
      opts
    );
  }

  public async depositToPool(params: PerpspoolModule.DepositToPoolParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Carbon.Perpspool.MsgDepositToPool.fromPartial({
      creator: wallet.bech32Address,
      poolId: params.poolId,
      depositAmount: params.depositAmount,
      minShareAmount: params.minShareAmount,
    })

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgDepositToPool,
        value,
      },
      opts
    );
  }

  public async withdrawFromPool(params: PerpspoolModule.WithdrawFromPoolParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Carbon.Perpspool.MsgWithdrawFromPool.fromPartial({
      creator: wallet.bech32Address,
      poolId: params.poolId,
      shareAmount: params.shareAmount,
      minReceiveAmount: params.minReceiveAmount,
    })

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgWithdrawFromPool,
        value,
      },
      opts
    );
  }

  public async registerToPool(params: PerpspoolModule.RegisterToPoolParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Carbon.Perpspool.MsgRegisterToPool.fromPartial({
      creator: wallet.bech32Address,
      poolId: params.poolId,
      marketId: params.marketId,
    })

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgRegisterToPool,
        value,
      },
      opts
    );
  }

  public async deregisterFromPool(params: PerpspoolModule.DeregisterFromPoolParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Carbon.Perpspool.MsgDeregisterFromPool.fromPartial({
      creator: wallet.bech32Address,
      marketId: params.marketId,
    })

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgDeregisterFromPool,
        value,
      },
      opts
    );
  }
}

export namespace PerpspoolModule {
  export interface CreatePoolParams {
    name: string;
    depositDenom: string;
    shareTokenSymbol: string;
    supplyCap: string;
    depositFee: string;
    withdrawalFee: string;
    borrowFee: string;
  }

  export interface UpdatePoolParams {
    name: string;
    poolId: Long;
    depositDenom: string;
    shareTokenSymbol: string;
    supplyCap: string;
    depositFee: string;
    withdrawalFee: string;
    borrowFee: string;
  }

  export interface DepositToPoolParams {
    poolId: Long;
    depositAmount: string;
    minShareAmount: string;
  }

  export interface WithdrawFromPoolParams {
    poolId: Long;
    shareAmount: string;
    minReceiveAmount: string;
  }

  export interface RegisterToPoolParams {
    poolId: Long;
    marketId: string;
  }

  export interface DeregisterFromPoolParams {
    marketId: string;
  }
}
