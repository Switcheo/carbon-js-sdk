import { MsgBorrowAsset, MsgLiquidateCollateral, MsgLockCollateral, MsgRepayAsset, MsgSupplyAssetAndLockCollateral, MsgSupplyAsset, MsgUnlockCollateralAndWithdrawAsset, MsgUnlockCollateral, MsgWithdrawAsset, MsgRepayAssetWithCdpTokens, MsgRepayAssetWithCollateral, MsgMintStablecoin, MsgReturnStablecoin } from "@carbon-sdk/codec/cdp/tx";
import { CarbonTx } from "@carbon-sdk/util";
import BaseModule from "./base";
import { BigNumber } from "bignumber.js";

export class CDPModule extends BaseModule {

  public async supplyAsset(params: CDPModule.SupplyAssetParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgSupplyAsset.fromPartial({
      creator: wallet.bech32Address,
      denom: params.denom,
      amount: params.amount.toString(10),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgSupplyAsset,
      value
    }, opts);
  }

  public async withdrawAsset(params: CDPModule.WithdrawAssetParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgWithdrawAsset.fromPartial({
      creator: wallet.bech32Address,
      cdpDenom: params.cdpDenom,
      amount: params.amount.toString(10),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgWithdrawAsset,
      value
    }, opts);
  }

  public async lockCollateral(params: CDPModule.LockCollateralParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgLockCollateral.fromPartial({
      creator: wallet.bech32Address,
      cdpDenom: params.cdpDenom,
      amount: params.amount.toString(10),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgLockCollateral,
      value
    }, opts);
  }

  public async unlockCollateral(params: CDPModule.UnlockCollateralParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgUnlockCollateral.fromPartial({
      creator: wallet.bech32Address,
      cdpDenom: params.cdpDenom,
      amount: params.amount.toString(10),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgUnlockCollateral,
      value
    }, opts);
  }

  public async borrowAsset(params: CDPModule.BorrowAssetParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgBorrowAsset.fromPartial({
      creator: wallet.bech32Address,
      denom: params.denom,
      amount: params.amount.toString(10),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgBorrowAsset,
      value
    }, opts);
  }

  public async repayAsset(params: CDPModule.RepayAssetParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgRepayAsset.fromPartial({
      creator: wallet.bech32Address,
      denom: params.denom,
      amount: params.amount.toString(10),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgRepayAsset,
      value
    }, opts);
  }

  public async supplyAssetAndLockCollateral(params: CDPModule.SupplyAssetAndLockCollateralParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgSupplyAssetAndLockCollateral.fromPartial({
      creator: wallet.bech32Address,
      denom: params.denom,
      supplyAmount: params.supplyAmount.toString(10),
      lockAmount: params.lockAmount.toString(10),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgSupplyAssetAndLockCollateral,
      value
    }, opts);
  }

  public async unlockCollateralAndWithdrawAsset(params: CDPModule.UnlockCollateralAndWithdrawAssetParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgUnlockCollateralAndWithdrawAsset.fromPartial({
      creator: wallet.bech32Address,
      cdpDenom: params.cdpDenom,
      unlockAmount: params.unlockAmount.toString(10),
      withdrawAmount: params.withdrawAmount.toString(10),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgUnlockCollateralAndWithdrawAsset,
      value
    }, opts);
  }

  public async liquidateCollateral(params: CDPModule.LiquidateCollateralParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgLiquidateCollateral.fromPartial({
      creator: wallet.bech32Address,
      debtor: params.debtor,
      collateralDenom: params.collateralDenom,
      debtDenom: params.debtDenom,
      debtAmount: params.debtAmount.toString(10),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgLiquidateCollateral,
      value
    }, opts);
  }

  public async repayAssetWithCdpTokens(params: CDPModule.RepayAssetWithCdpTokensParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgRepayAssetWithCdpTokens.fromPartial({
      creator: wallet.bech32Address,
      cdpDenom: params.cdpDenom,
      amount: params.amount.toString(10),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgRepayAssetWithCdpTokens,
      value
    }, opts);
  }

  public async repayAssetWithCollateral(params: CDPModule.RepayAssetWithCollateralParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgRepayAssetWithCollateral.fromPartial({
      creator: wallet.bech32Address,
      cdpDenom: params.cdpDenom,
      amount: params.amount.toString(10),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgRepayAssetWithCollateral,
      value
    }, opts);
  }

  public async mintStablecoin(params: CDPModule.MintStablecoinParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgMintStablecoin.fromPartial({
      creator: wallet.bech32Address,
      amount: params.amount.toString(10),
    });

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgMintStablecoin,
      value,
    }, opts);
  }

  public async returnStablecoin(params: CDPModule.ReturnStablecoinParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgReturnStablecoin.fromPartial({
      creator: wallet.bech32Address,
      principalAmount: params.principalAmount.toString(10),
      interestDenom: params.interestDenom,
      interestAmount: params.interestAmount.toString(10),
    });

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgReturnStablecoin,
      value,
    }, opts);
  }
}

export namespace CDPModule {
  export interface SupplyAssetParams {
    denom: string
    amount: BigNumber
  }
  export interface WithdrawAssetParams {
    cdpDenom: string
    amount: BigNumber
  }
  export interface LockCollateralParams {
    cdpDenom: string
    amount: BigNumber
  }
  export interface UnlockCollateralParams {
    cdpDenom: string
    amount: BigNumber
  }
  export interface BorrowAssetParams {
    denom: string
    amount: BigNumber
  }

  export interface RepayAssetParams {
    denom: string
    amount: BigNumber
  }
  export interface SupplyAssetAndLockCollateralParams {
    denom: string
    supplyAmount: BigNumber
    lockAmount: BigNumber
  }
  export interface UnlockCollateralAndWithdrawAssetParams {
    cdpDenom: string
    unlockAmount: BigNumber
    withdrawAmount: BigNumber
  }
  export interface LiquidateCollateralParams {
    debtor: string
    collateralDenom: string
    debtDenom: string
    debtAmount: BigNumber
  }
  export interface RepayAssetWithCdpTokensParams {
    cdpDenom: string
    amount: BigNumber
  }
  export interface RepayAssetWithCollateralParams {
    cdpDenom: string
    amount: BigNumber
  }
  export interface MintStablecoinParams {
    amount: BigNumber
  }

  export interface ReturnStablecoinParams {
    creator: string
    principalAmount: BigNumber
    interestDenom: string
    interestAmount: BigNumber
  }
};
