import { Carbon } from "@carbon-sdk/CarbonSDK";
import { MsgAddControllerToVault, MsgCancelUserVaultWithdrawal, MsgCloseUserVault, MsgCreateUserVault, MsgDepositToUserVault, MsgReleaseUserVaultWithdrawal, MsgRemoveControllerFromVault, MsgUpdateUserVault, MsgWithdrawFromUserVault } from "@carbon-sdk/codec/Switcheo/carbon/perpspool/tx";
import { OmitCreator } from "@carbon-sdk/constant";
import { CarbonTx } from "@carbon-sdk/util";
import BaseModule from "./base";

export class PerpspoolModule extends BaseModule {
  public async createPerpertualsPool(params: PerpspoolModule.CreatePoolParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Carbon.Perpspool.MsgCreatePool.fromPartial({
      creator: wallet.bech32Address,
      name: params.name,
      depositDenom: params.depositDenom,
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

  public async createUserVault(params: PerpspoolModule.CreateUserVaultParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Carbon.Perpspool.MsgCreateUserVault.fromPartial({
      creator: wallet.bech32Address,
      ...params,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgCreateUserVault,
        value,
      },
      opts
    );
  }

  public async closeUserVault(params: PerpspoolModule.CloseUserVaultParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Carbon.Perpspool.MsgCloseUserVault.fromPartial({
      creator: wallet.bech32Address,
      ...params,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgCloseUserVault,
        value,
      },
      opts
    );
  }

  public async updateUserVault(params: PerpspoolModule.UpdateUserVaultParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Carbon.Perpspool.MsgUpdateUserVault.fromPartial({
      creator: wallet.bech32Address,
      ...params,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgUpdateUserVault,
        value,
      },
      opts
    );
  }

  public async addControllerToUserVault(params: PerpspoolModule.AddControllerToUserVaultParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Carbon.Perpspool.MsgAddControllerToVault.fromPartial({
      creator: wallet.bech32Address,
      ...params,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgAddControllerToVault,
        value,
      },
      opts
    );
  }

  public async removeControllerFromUserVault(params: PerpspoolModule.RemoveControllerFromUserVaultParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Carbon.Perpspool.MsgRemoveControllerFromVault.fromPartial({
      creator: wallet.bech32Address,
      ...params,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgRemoveControllerFromVault,
        value,
      },
      opts
    );
  }

  public async depositToUserVault(params: PerpspoolModule.DepositToUserVaultParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Carbon.Perpspool.MsgDepositToUserVault.fromPartial({
      creator: wallet.bech32Address,
      ...params,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgDepositToUserVault,
        value,
      },
      opts
    );
  }

  public async withdrawFromUserVault(params: PerpspoolModule.WithdrawFromUserVaultParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Carbon.Perpspool.MsgWithdrawFromUserVault.fromPartial({
      creator: wallet.bech32Address,
      ...params,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgWithdrawFromUserVault,
        value,
      },
      opts
    );
  }

  public async releaseUserVaultWithdrawal(params: PerpspoolModule.ReleaseUserVaultWithdrawalParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Carbon.Perpspool.MsgReleaseUserVaultWithdrawal.fromPartial({
      creator: wallet.bech32Address,
      ...params,
    });
    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgReleaseUserVaultWithdrawal,
        value,
      },
      opts
    );
  }

  public async cancelUserVaultWithdrawal(params: PerpspoolModule.CancelUserVaultWithdrawalParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Carbon.Perpspool.MsgCancelUserVaultWithdrawal.fromPartial({
      creator: wallet.bech32Address,
      ...params,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgCancelUserVaultWithdrawal,
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

  export type CreateUserVaultParams = OmitCreator<MsgCreateUserVault>
  export type CloseUserVaultParams = OmitCreator<MsgCloseUserVault>
  export type UpdateUserVaultParams = OmitCreator<MsgUpdateUserVault>
  export type AddControllerToUserVaultParams = OmitCreator<MsgAddControllerToVault>
  export type RemoveControllerFromUserVaultParams = OmitCreator<MsgRemoveControllerFromVault>
  export type DepositToUserVaultParams = OmitCreator<MsgDepositToUserVault>
  export type WithdrawFromUserVaultParams = OmitCreator<MsgWithdrawFromUserVault>
  export type ReleaseUserVaultWithdrawalParams = OmitCreator<MsgReleaseUserVaultWithdrawal>
  export type CancelUserVaultWithdrawalParams = OmitCreator<MsgCancelUserVaultWithdrawal>
}
