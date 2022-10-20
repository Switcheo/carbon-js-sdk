import { QueryBorrowsRequest, DBBorrow, Debt, QueryTokenDebtsAllRequest, QueryAccountDebtRequest, QueryAccountCollateralsRequest, QueryRateStrategiesAllRequest, QueryAssetsAllRequest } from './../codec/cdp/query';
import { QueryAccountDebtsRequest, QueryAssetRequest, QueryRateStrategyRequest, QueryTokenDebtRequest } from '@carbon-sdk/codec/cdp/query';
import { MsgBorrowAsset, MsgLiquidateCollateral, MsgLockCollateral, MsgMintStablecoin, MsgRepayAsset, MsgRepayAssetWithCdpTokens, MsgRepayAssetWithCollateral, MsgReturnStablecoin, MsgSupplyAsset, MsgSupplyAssetAndLockCollateral, MsgUnlockCollateral, MsgUnlockCollateralAndWithdrawAsset, MsgWithdrawAsset } from "@carbon-sdk/codec/cdp/tx";
import { CarbonTx } from "@carbon-sdk/util";
import { BigNumber } from "bignumber.js";
import BaseModule from "./base";
import { AssetParams, DebtInfo, QueryModuleAddressRequest, QueryTokenPriceRequest, RateStrategyParams } from '@carbon-sdk/codec';
import { CarbonSDK } from '..';
import { QueryBalanceRequest, QuerySupplyOfRequest } from '@carbon-sdk/codec/cosmos/bank/v1beta1/query';

export class CDPModule extends BaseModule {

  private cdpModuleAddress: string = ""
  private collateralsAddress: string = ""

  constructor(
    public readonly carbonSDK: CarbonSDK,
  ) {
    super(carbonSDK);
  }

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

    let totalCollateralsUsd = new BigNumber(0)
    let availableBorrowsUsd = new BigNumber(0)
    let currLiquidationThreshold = new BigNumber(0)
    for (let i = 0; i < collaterals.length; i++) {
      const amount = new BigNumber(collaterals[i].collateralAmount)
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
      const ltv = new BigNumber(assetParam.loanToValue).div(10000)
      const availableBorrowUsd = collateralUsdVal.times(ltv)
      const liquidationThreshold = new BigNumber(assetParam.liquidationThreshold).div(10000)
      const liquidationThresholdVal = collateralUsdVal.times(liquidationThreshold)
      totalCollateralsUsd = totalCollateralsUsd.plus(collateralUsdVal)
      availableBorrowsUsd = availableBorrowsUsd.plus(availableBorrowUsd)
      currLiquidationThreshold = currLiquidationThreshold.plus(liquidationThresholdVal)
    }
    
    const debtsRsp = await sdk.query.cdp.AccountDebts(QueryAccountDebtsRequest.fromPartial({ account }))
    const debts = debtsRsp.debts
    let totalDebtsUsd = new BigNumber(0)
    for (let i = 0; i < debts.length; i++) {
      const amount = new BigNumber(debts[i].principalDebt)
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
    const denom = this.getActualDenom(cdpDenom)
    if (!denom) {
      return
    }
    const supplyRsp = await sdk.query.bank.SupplyOf(QuerySupplyOfRequest.fromPartial({ denom: cdpDenom }))
    const cdpAmountRsp = supplyRsp.amount
    if (!cdpAmountRsp) {
      return
    }
    const cdpAmount = new BigNumber(cdpAmountRsp.amount)
    if (!this.cdpModuleAddress) {
      const moduleAddressRsp = await sdk.query.misc.ModuleAddress(QueryModuleAddressRequest.fromPartial({ module: "cdp" }))
      this.cdpModuleAddress = moduleAddressRsp.address
    }
    const balanceRsp = await sdk.query.bank.Balance(QueryBalanceRequest.fromPartial({ address: this.cdpModuleAddress, denom }))
    if (!balanceRsp.balance) {
      return
    }
    let actualAmount = new BigNumber(balanceRsp.balance.amount)
    const owedAmount = await this.getTotalTokenDebt(denom)
    if (!owedAmount) {
      return
    }
    actualAmount = actualAmount.plus(owedAmount)
    const ratio = cdpAmount.div(actualAmount)

    return ratio
  }

  public async getTotalAccountTokenDebtUsdVal(account: string, denom: string, debt?: Debt, debtInfo?: DebtInfo) {
    const amount = await this.getTotalAccountTokenDebt(account, denom, debt, debtInfo);
    if (!amount) {
      return
    }
    const tokenDebtUsdVal = await this.getTokenUsdVal(denom, amount)
    return tokenDebtUsdVal
  }

  public async getCdpTokenUsdVal(cdpDenom: string, amount: BigNumber) {
    const denom = this.getActualDenom(cdpDenom)
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
    const decimals = await this.carbonSDK.token.getDecimals(denom)
    if (!decimals) {
      return
    }
    const price = await sdk.query.pricing.TokenPrice(QueryTokenPriceRequest.fromPartial({ denom }))
    if (!price.tokenPrice) {
      return
    }
    const twap = new BigNumber(price.tokenPrice.twap).shiftedBy(decimals * (-1))
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
    const principalAmount = new BigNumber(debtInfo.totalPrincipal)
    const initialCIM = new BigNumber(debtInfo.initialCumulativeInterestMultiplier)
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
      const debtRsp = await sdk.query.cdp.AccountDebt(QueryAccountDebtRequest.fromPartial({ account, denom }))
      const debt = debtRsp.debt
    }
    if (!debt) {
      return
    }

    const principalAmount = new BigNumber(debt.principalDebt)
    const initialCIM = new BigNumber(debt.initialCumulativeInterestMultiplier)
    const cim = await this.recalculateCIM(denom, debtInfo)
    if (!cim) {
      return
    }

    // TODO: change to round up
    const totalAmountTokenDebt = principalAmount.times(cim).div(initialCIM).decimalPlaces(0)

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

  public async recalculateCIM(denom: string, debtInfo?: DebtInfo) {
    const sdk = this.sdkProvider
    if (!debtInfo) {
      const debtInfoResponse = await sdk.query.cdp.TokenDebt(QueryTokenDebtRequest.fromPartial({ denom }))
      debtInfo = debtInfoResponse.debtInfo
      if (!debtInfo) {
        return
      }
    }
    const cim = new BigNumber(debtInfo.cumulativeInterestMultiplier)
    const apy = await this.calculateAPY(denom, debtInfo)
    if (!apy) {
      return
    }
    const interest = this.calculateInterestForTimePeriod(apy, debtInfo.lastUpdatedTime as Date, new Date())
    const newCIM = cim.times(interest.plus(1))

    return newCIM
  }

  public getActualDenom(cdpDenom: string) {
    const split = cdpDenom.split("/")
    if (split[0] === "cdp") {
      return split[1]
    }
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
