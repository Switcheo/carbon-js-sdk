import { AssetParams, DebtInfo, QueryModuleAddressRequest, QueryTokenPriceRequest, RateStrategyParams } from '@carbon-sdk/codec';
import { QueryAccountDebtsRequest, QueryAssetRequest, QueryRateStrategyRequest, QueryTokenDebtRequest } from '@carbon-sdk/codec/cdp/query';
import { MsgBorrowAsset, MsgLiquidateCollateral, MsgLockCollateral, MsgMintStablecoin, MsgRepayAsset, MsgRepayAssetWithCdpTokens, MsgRepayAssetWithCollateral, MsgReturnStablecoin, MsgSupplyAsset, MsgSupplyAssetAndLockCollateral, MsgUnlockCollateral, MsgUnlockCollateralAndWithdrawAsset, MsgWithdrawAsset } from "@carbon-sdk/codec/cdp/tx";
import { QueryBalanceRequest, QuerySupplyOfRequest } from '@carbon-sdk/codec/cosmos/bank/v1beta1/query';
import { CarbonTx } from "@carbon-sdk/util";
import { bnOrZero, BN_10000, BN_ZERO, BN_ONE } from '@carbon-sdk/util/number';
import { BigNumber } from "bignumber.js";
import { Debt, QueryAccountCollateralsRequest, QueryAccountDebtRequest, QueryAssetsAllRequest, QueryTokenDebtsAllRequest } from './../codec/cdp/query';
import BaseModule from "./base";

export class CDPModule extends BaseModule {

  private cdpModuleAddress: string = ""
  private collateralsAddress: string = ""

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

  public async getAccountData(account: string) {
    const sdk = this.sdkProvider
    const debtInfoResponse = await sdk.query.cdp.TokenDebtsAll(QueryTokenDebtsAllRequest.fromPartial({}))
    const debtInfos = debtInfoResponse.debtInfosAll
    const collateralsRsp = await sdk.query.cdp.AccountCollaterals(QueryAccountCollateralsRequest.fromPartial({ account }))
    const collaterals = collateralsRsp.collaterals
    const assetParamsRsp = await sdk.query.cdp.AssetsAll(QueryAssetsAllRequest.fromPartial({}))
    const assetParams = assetParamsRsp.assetParamsAll

    let totalCollateralsUsd = BN_ZERO
    let availableBorrowsUsd = BN_ZERO
    let currLiquidationThreshold = BN_ZERO
    for (let i = 0; i < collaterals.length; i++) {
      const amount = bnOrZero(collaterals[i].collateralAmount)
      if (amount.isZero()) {
        continue
      }
      const denom = collaterals[i].denom
      const debtInfo = debtInfos.find(d => d.denom === denom)
      if (!debtInfo) {
        return
      }
      const collateralUsdVal = await this.getCdpTokenUsdVal(collaterals[i].cdpDenom, amount)
      if (!collateralUsdVal) {
        return
      }
      const assetParam = assetParams.find(a => a.denom === denom)
      if (!assetParam) {
        return
      }
      const ltv = bnOrZero(assetParam.loanToValue).div(BN_10000)
      const availableBorrowUsd = collateralUsdVal.times(ltv)
      const liquidationThreshold = bnOrZero(assetParam.liquidationThreshold).div(BN_10000)
      const liquidationThresholdVal = collateralUsdVal.times(liquidationThreshold)
      totalCollateralsUsd = totalCollateralsUsd.plus(collateralUsdVal)
      availableBorrowsUsd = availableBorrowsUsd.plus(availableBorrowUsd)
      currLiquidationThreshold = currLiquidationThreshold.plus(liquidationThresholdVal)
    }
    
    // add token debts
    const debtsRsp = await sdk.query.cdp.AccountDebts(QueryAccountDebtsRequest.fromPartial({ account }))
    const debts = debtsRsp.debts
    let totalDebtsUsd = BN_ZERO
    for (let i = 0; i < debts.length; i++) {
      const amount = bnOrZero(debts[i].principalDebt)
      const denom = debts[i].denom
      if (amount.isZero()) {
        continue
      }
      const debtInfo = debtInfos.find(d => d.denom === denom)
      if (!debtInfo) {
        return
      }
      const tokenDebtUsdVal = await this.getTotalAccountTokenDebtUsdVal(account, denom, debts[i], debtInfo)
      if (!tokenDebtUsdVal) {
        return
      }
      totalDebtsUsd = totalDebtsUsd.plus(tokenDebtUsdVal)
    }

    // add stablecoin debt
    const accountStablecoin = await sdk.query.cdp.AccountStablecoin({account: account})
    const stablecoinDecimals = await this.sdkProvider.getTokenClient().getDecimals("usc")
    if (!stablecoinDecimals) {
      return
    }
    const stablecoinDebt = new BigNumber(accountStablecoin.principalDebt).plus(accountStablecoin.interestDebt)
    totalDebtsUsd = totalDebtsUsd.plus(stablecoinDebt.shiftedBy(-stablecoinDecimals))

    const healthFactor = currLiquidationThreshold.div(totalDebtsUsd)

    return {
      TotalCollateralsUsd: totalCollateralsUsd,
      AvailableBorrowsUsd: availableBorrowsUsd,
      CurrLiquidationThreshold: currLiquidationThreshold,
      TotalDebtsUsd: totalDebtsUsd,
      HealthFactor: healthFactor,
    }
  }

  public async getCdpToActualRatio(cdpDenom: string) {
    const sdk = this.sdkProvider
    const denom = this.getUnderlyingDenom(cdpDenom)
    if (!denom) {
      return
    }
    const supplyRsp = await sdk.query.bank.SupplyOf(QuerySupplyOfRequest.fromPartial({ denom: cdpDenom }))
    const cdpAmountRsp = supplyRsp.amount
    if (!cdpAmountRsp) {
      return
    }
    const cdpAmount = bnOrZero(cdpAmountRsp.amount)
    if (!this.cdpModuleAddress) {
      const moduleAddressRsp = await sdk.query.misc.ModuleAddress(QueryModuleAddressRequest.fromPartial({ module: "cdp" }))
      this.cdpModuleAddress = moduleAddressRsp.address
    }
    const balanceRsp = await sdk.query.bank.Balance(QueryBalanceRequest.fromPartial({ address: this.cdpModuleAddress, denom }))
    if (!balanceRsp.balance) {
      return
    }
    let actualAmount = bnOrZero(balanceRsp.balance.amount)
    const owedAmount = await this.getTotalTokenDebt(denom)
    if (!owedAmount) {
      return
    }
    actualAmount = actualAmount.plus(owedAmount)
    const ratio = cdpAmount.div(actualAmount)

    return ratio
  }

  public async getTotalAccountTokenDebtUsdVal(account: string, denom: string, debt?: Debt, debtInfo?: DebtInfo) {
    const amount = await this.getTotalAccountTokenDebt(account, denom, debt, debtInfo).catch((err) => console.log(err));
    if (!amount) {
      return
    }
    const tokenDebtUsdVal = await this.getTokenUsdVal(denom, amount).catch((err) => console.log(err))
    return tokenDebtUsdVal
  }

  public async getCdpTokenUsdVal(cdpDenom: string, amount: BigNumber) {
    const denom = this.getUnderlyingDenom(cdpDenom)
    if (!denom) {
      return
    }
    const ratio = await this.getCdpToActualRatio(cdpDenom)
    if (!ratio) {
      return
    }
    const actualTokenAmount = amount.div(ratio)
    const cdpTokenUsdVal = await this.getTokenUsdVal(denom, actualTokenAmount)
    return cdpTokenUsdVal
  }

  public async getTokenUsdVal(denom: string, amount: BigNumber) {
    const sdk = this.sdkProvider
    const decimals = await this.sdkProvider.getTokenClient().getDecimals(denom)
    if (!decimals) {
      return
    }
    const price = await sdk.query.pricing.TokenPrice(QueryTokenPriceRequest.fromPartial({ denom }))
    if (!price.tokenPrice) {
      return
    }
    const twap = bnOrZero(price.tokenPrice.twap).shiftedBy(18 * (-1))
    return amount.times(twap).shiftedBy(decimals * (-1))
  }

  public async getTotalTokenDebt(denom: string, debtInfo?: DebtInfo) {
    const sdk = this.sdkProvider
    if (!debtInfo) {
      const debtInfoRsp = await sdk.query.cdp.TokenDebt(QueryTokenDebtRequest.fromPartial({ denom }))
      debtInfo = debtInfoRsp.debtInfo
    }
    if (!debtInfo) {
      return
    }
    const cim = await this.recalculateCIM(denom, debtInfo)
    if (!cim) {
      return
    }
    const principalAmount = bnOrZero(debtInfo.totalPrincipal)
    const initialCIM = bnOrZero(debtInfo.initialCumulativeInterestMultiplier)
    const totalTokenDebt = principalAmount.times(cim).div(initialCIM)
    return totalTokenDebt
  }

  public async getTotalAccountTokenDebt(account: string, denom: string, debt?: Debt, debtInfo?: DebtInfo) {
    const sdk = this.sdkProvider
    if (!debtInfo) {
      const debtInfoRsp = await sdk.query.cdp.TokenDebt(QueryTokenDebtRequest.fromPartial({ denom }))
      debtInfo = debtInfoRsp.debtInfo
    }
    if (!debtInfo) {
      return
    }
    if (!debt) {
      const debtRes = await sdk.query.cdp.AccountDebt({ account:account, denom:denom })
      debt = debtRes.debt
    }
    if (!debt) {
      return
    }
    const principalAmount = bnOrZero(debt.principalDebt)
    const initialCIM = bnOrZero(debt.initialCumulativeInterestMultiplier)
    const cim = await this.recalculateCIM(denom, debtInfo)
    if (!cim) {
      return
    }

    // TODO: change to round up
    const totalAmountTokenDebt = principalAmount.times(cim).dividedToIntegerBy(initialCIM)

    return totalAmountTokenDebt
  }

  public async calculateAPY(
    denom: string,
    debtInfo?: DebtInfo,
    assetParams?: AssetParams,
    rateStrategyParams?: RateStrategyParams,
  ) {
    const sdk = this.sdkProvider

    if (!debtInfo) {
      const debtInfoResponse = await sdk.query.cdp.TokenDebt(QueryTokenDebtRequest.fromPartial({ denom }))
      debtInfo = debtInfoResponse.debtInfo
      if (!debtInfo) {
        return
      }
    }

    if (!assetParams) {
      const assetResponse = await sdk.query.cdp.Asset(QueryAssetRequest.fromPartial({ denom }))
      assetParams = assetResponse.assetParams
      if (!assetParams) {
        return
      }
    }

    if (!rateStrategyParams) {
      const rateStrategyParamsResponse = await sdk.query.cdp.RateStrategy(QueryRateStrategyRequest.fromPartial({
        name: assetParams.rateStrategyName
      }))
      rateStrategyParams = rateStrategyParamsResponse.rateStrategyParams
      if (!rateStrategyParams) {
        return
      }
    }

    const utilizationRate = bnOrZero(debtInfo.utilizationRate).shiftedBy(-18)
    const optimalUsage = bnOrZero(rateStrategyParams.optimalUsage).div(BN_10000)
    const variableRate1 = bnOrZero(rateStrategyParams.variableRateSlope1).div(BN_10000)
    const variableRate2 = bnOrZero(rateStrategyParams.variableRateSlope2).div(BN_10000)
    const baseVariableBorrowRate = bnOrZero(rateStrategyParams.baseVariableBorrowRate).div(BN_10000)
    if (utilizationRate.lte(optimalUsage)) {
      return utilizationRate.times(variableRate1).div(optimalUsage).plus(baseVariableBorrowRate)
    } else {
      const ratio = utilizationRate.minus(optimalUsage).div(BN_ONE.minus(optimalUsage))
      return ratio.times(variableRate2).plus(variableRate1).plus(baseVariableBorrowRate)
    }
  }

  public calculateInterestForTimePeriod(apy: BigNumber, start: Date, end: Date) {
    if (end <= start) {
      return BN_ZERO
    }
    const duration = bnOrZero(end.valueOf() - start.valueOf())
    const millisecondsAYear = bnOrZero(31536000000)

    const interest = duration.div(millisecondsAYear).times(apy)
    return interest
  }

  public async recalculateCIM(denom: string, debtInfo?: DebtInfo) {
    const sdk = this.sdkProvider
    if (!debtInfo) {
      const debtInfoResponse = await sdk.query.cdp.TokenDebt(QueryTokenDebtRequest.fromPartial({ denom }))
      debtInfo = debtInfoResponse.debtInfo
      if (!debtInfo) {
        return BN_ZERO;
      }
    }
    const cim = bnOrZero(debtInfo.cumulativeInterestMultiplier)
    const apy = await this.calculateAPY(denom, debtInfo)
    if (!apy) {
      return BN_ZERO;
    }
    const interest = this.calculateInterestForTimePeriod(apy, debtInfo.lastUpdatedTime ?? new Date(0), new Date())
    const newCIM = cim.times(interest.plus(1))

    return newCIM;
  }

  public getUnderlyingDenom(cdpDenom: string) {
    return this.sdkProvider.getTokenClient().getCdpUnderlyingToken(cdpDenom)?.denom;
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
