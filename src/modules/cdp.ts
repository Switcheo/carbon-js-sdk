import { QueryAccountDebtsRequest, QueryAssetRequest, QueryRateStrategyRequest, QueryTokenDebtRequest } from '@carbon-sdk/codec/cdp/query';
import { MsgBorrowAsset, MsgLiquidateCollateral, MsgLockCollateral, MsgMintStablecoin, MsgRepayAsset, MsgRepayAssetWithCdpTokens, MsgRepayAssetWithCollateral, MsgReturnStablecoin, MsgSupplyAsset, MsgSupplyAssetAndLockCollateral, MsgUnlockCollateral, MsgUnlockCollateralAndWithdrawAsset, MsgWithdrawAsset } from "@carbon-sdk/codec/cdp/tx";
import { CarbonTx } from "@carbon-sdk/util";
import { BigNumber } from "bignumber.js";
import BaseModule from "./base";

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

  // start of cdp calculations

  public async getTotalAccountTokenDebt(account: string, denom: string) {
    const sdk = this.sdkProvider
    const debtInfoResponse = await sdk.query.cdp.TokenDebt(QueryTokenDebtRequest.fromPartial({ denom }))
    const debtInfo = debtInfoResponse.debtInfo
    if (!debtInfo) {
      return
    }

    const accountDebtsRsp = await sdk.query.cdp.AccountDebts(QueryAccountDebtsRequest.fromPartial({ account }))
    const debt = accountDebtsRsp.debts.find(d => d.denom == denom)
    if (!debt) {
      return
    }

    const principalAmount = new BigNumber(debt.principalDebt)
    const initialCIM = new BigNumber(debt.initialCumulativeInterestMultiplier)
    console.log(initialCIM)

    const cim = await this.recalculateCIM(denom)
    if (!cim) {
      return
    }

    // TODO: change to round up
    const totalAmountTokenDebt = principalAmount.times(cim).div(initialCIM).decimalPlaces(0)

    return totalAmountTokenDebt
  }

  public async calculateAPY(denom: string) {
    const sdk = this.sdkProvider
    const assetResponse = await sdk.query.cdp.Asset(QueryAssetRequest.fromPartial({ denom }))
    const assetParams = assetResponse.assetParams
    if (!assetParams) {
      return
    }

    const debtInfoResponse = await sdk.query.cdp.TokenDebt(QueryTokenDebtRequest.fromPartial({ denom }))
    const debtInfo = debtInfoResponse.debtInfo
    if (!debtInfo) {
      return
    }

    const rateStrategyParamsResponse = await sdk.query.cdp.RateStrategy(QueryRateStrategyRequest.fromPartial({
      name: assetParams.rateStrategyName
    }))
    const rateStrategyParams = rateStrategyParamsResponse.rateStrategyParams
    if (!rateStrategyParams) {
      return
    }

    const utilizationRate = (new BigNumber(debtInfo.utilizationRate).shiftedBy(-18))
    const optimalUsage = new BigNumber(rateStrategyParams.optimalUsage).div(10000)
    const variableRate1 = new BigNumber(rateStrategyParams.variableRateSlope1).div(10000)
    const variableRate2 = new BigNumber(rateStrategyParams.variableRateSlope2).div(10000)
    const baseVariableBorrowRate = new BigNumber(rateStrategyParams.baseVariableBorrowRate).div(10000)
    let rate = new BigNumber(0)
    if (utilizationRate.lte(optimalUsage)) {
      rate = utilizationRate.times(variableRate1).div(optimalUsage)
      rate = rate.plus(baseVariableBorrowRate)
    } else {
      const ratio = (utilizationRate.minus(optimalUsage)).div(new BigNumber(1).minus(optimalUsage))
      rate = ratio.times(variableRate2).plus(variableRate1).plus(baseVariableBorrowRate)
    }

    return rate
  }

  public calculateInterestForTimePeriod(apy: BigNumber, start: Date, end: Date) {
    if (end <= start) {
      return new BigNumber(0)
    }
    const duration = new BigNumber(end.valueOf() - start.valueOf())
    const millisecondsAYear = new BigNumber(31536000000)

    const interest = duration.div(millisecondsAYear).times(apy)
    return interest
  }

  public async recalculateCIM(denom: string) {
    const sdk = this.sdkProvider
    const debtInfoResponse = await sdk.query.cdp.TokenDebt(QueryTokenDebtRequest.fromPartial({ denom }))
    const debtInfo = debtInfoResponse.debtInfo
    if (!debtInfo) {
      return
    }
    const cim = new BigNumber(debtInfo.cumulativeInterestMultiplier)
    const apy = await this.calculateAPY(denom)
    if (!apy) {
      return
    }
    const interest = this.calculateInterestForTimePeriod(apy, debtInfo.lastUpdatedTime as Date, new Date())
    const newCIM = cim.times(interest.plus(1))

    return newCIM
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
