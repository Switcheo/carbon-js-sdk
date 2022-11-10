import {
  AssetParams,
  DebtInfo,
  QueryCdpParamsRequest,
  QueryModuleAddressRequest,
  QueryTokenPriceRequest,
  RateStrategyParams,
  StablecoinDebtInfo
} from '@carbon-sdk/codec';
import {
  QueryAccountDebtAllRequest,
  QueryAccountStablecoinRequest,
  QueryAssetRequest,
  QueryParamsRequest,
  QueryRateStrategyRequest,
  QueryStablecoinDebtRequest,
  QueryTokenDebtRequest
} from '@carbon-sdk/codec/cdp/query';
import {
  MsgBorrowAsset,
  MsgLiquidateCollateral,
  MsgLiquidateCollateralWithCdpTokens,
  MsgLiquidateCollateralWithCollateral,
  MsgLiquidateCollateralWithStablecoin,
  MsgLockCollateral,
  MsgMintStablecoin,
  MsgRepayAsset,
  MsgRepayAssetWithCdpTokens,
  MsgRepayAssetWithCollateral,
  MsgReturnStablecoin,
  MsgSupplyAsset,
  MsgSupplyAssetAndLockCollateral,
  MsgUnlockCollateral,
  MsgUnlockCollateralAndWithdrawAsset,
  MsgUpdateRateStrategy,
  MsgWithdrawAsset,
  MsgClaimRewards
} from "@carbon-sdk/codec/cdp/tx";
import {QueryBalanceRequest, QuerySupplyOfRequest} from '@carbon-sdk/codec/cosmos/bank/v1beta1/query';
import {CarbonTx} from "@carbon-sdk/util";
import {BN_10000, BN_ONE, BN_ZERO, bnOrZero} from '@carbon-sdk/util/number';
import {BigNumber} from "bignumber.js";
import {
  Debt,
  QueryAccountCollateralAllRequest,
  QueryAssetAllRequest,
  QueryTokenDebtAllRequest
} from './../codec/cdp/query';
import BaseModule from "./base";
import {Network} from "@carbon-sdk/constant";

export class CDPModule extends BaseModule {

  private cdpModuleAddress: string = ""
  private collateralPoolAddress: string = ""

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
      minCollateralAmount: params.minCollateralAmount.toString(10),
      debtDenom: params.debtDenom,
      debtAmount: params.debtAmount.toString(10),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgLiquidateCollateral,
      value
    }, opts);
  }

  public async liquidateCollateralWithCdpTokens(params: CDPModule.LiquidateCollateralWithCdpTokensParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const value = MsgLiquidateCollateralWithCdpTokens.fromPartial({
      creator: wallet.bech32Address,
      debtor: params.debtor,
      collateralDenom: params.collateralDenom,
      minCollateralAmount: params.minCollateralAmount.toString(10),
      debtDenom: params.debtDenom,
      debtAmount: params.debtAmount.toString(10),
      debtCollateralDenom: params.debtCollateralDenom,
      debtCollateralAmount: params.debtCollateralAmount.toString(10)
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgLiquidateCollateralWithCdpTokens,
      value
    }, opts);
  }

  public async liquidateCollateralWithCollateral(params: CDPModule.LiquidateCollateralWithCollateralParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const value = MsgLiquidateCollateralWithCollateral.fromPartial({
      creator: wallet.bech32Address,
      debtor: params.debtor,
      collateralDenom: params.collateralDenom,
      minCollateralAmount: params.minCollateralAmount.toString(10),
      debtDenom: params.debtDenom,
      debtAmount: params.debtAmount.toString(10),
      debtCollateralDenom: params.debtCollateralDenom,
      debtCollateralAmount: params.debtCollateralAmount.toString(10)
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgLiquidateCollateralWithCollateral,
      value
    }, opts);
  }

  public async liquidateCollateralWithStablecoin(params: CDPModule.LiquidateCollateralWithStablecoinParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const value = MsgLiquidateCollateralWithStablecoin.fromPartial({
      creator: wallet.bech32Address,
      debtor: params.debtor,
      collateralDenom: params.collateralDenom,
      minCollateralAmount: params.minCollateralAmount.toString(10),
      debtDenom: params.debtDenom,
      debtAmount: params.debtAmount.toString(10),
      principalAmount: params.principalAmount.toString(10),
      interestDenom: params.interestDenom,
      interestAmount: params.interestAmount.toString(10),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgLiquidateCollateralWithStablecoin,
      value
    }, opts);
  }

  public async repayAssetWithCdpTokens(params: CDPModule.RepayAssetWithCdpTokensParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const debtor = params.debtor ? params.debtor : wallet.bech32Address;

    const value = MsgRepayAssetWithCdpTokens.fromPartial({
      creator: wallet.bech32Address,
      debtor: debtor,
      debtDenom: params.debtDenom,
      cdpDenom: params.cdpDenom,
      cdpAmount: params.cdpAmount.toString(10),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgRepayAssetWithCdpTokens,
      value
    }, opts);
  }

  public async repayAssetWithCollateral(params: CDPModule.RepayAssetWithCollateralParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const debtor = params.debtor ? params.debtor : wallet.bech32Address;

    const value = MsgRepayAssetWithCollateral.fromPartial({
      creator: wallet.bech32Address,
      debtor: debtor,
      debtDenom: params.debtDenom,
      cdpDenom: params.cdpDenom,
      cdpAmount: params.cdpAmount.toString(10),
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

  public async updateRateStrategy(params: CDPModule.UpdateRateStrategyParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet()
    const value = MsgUpdateRateStrategy.fromPartial({
      creator: wallet.bech32Address,
      rateStrategyParams: params.rateStrategyParams
    });

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgUpdateRateStrategy,
      value,
    }, opts);
  }

  public async claimRewards(opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const value = MsgClaimRewards.fromPartial({
      creator: wallet.bech32Address,
    });

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgClaimRewards,
      value,
    }, opts);
  }

  // start of cdp calculations

  public async getAccountData(account: string) {
    const sdk = this.sdkProvider
    const debtInfoResponse = await sdk.query.cdp.TokenDebtAll(QueryTokenDebtAllRequest.fromPartial({}))
    const debtInfos = debtInfoResponse.debtInfosAll
    const collateralsRsp = await sdk.query.cdp.AccountCollateralAll(QueryAccountCollateralAllRequest.fromPartial({ address: account }))
    const collaterals = collateralsRsp.collaterals
    const assetParamsRsp = await sdk.query.cdp.AssetAll(QueryAssetAllRequest.fromPartial({}))
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
    const debtsRsp = await sdk.query.cdp.AccountDebtAll(QueryAccountDebtAllRequest.fromPartial({ address: account }))
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
    const debtInfoRsp = await sdk.query.cdp.StablecoinDebt(QueryStablecoinDebtRequest.fromPartial({}))
    const stablecoinDebtInfo = debtInfoRsp.stablecoinDebtInfo
    if (!stablecoinDebtInfo) {
      return
    }

    const accountStablecoin = await sdk.query.cdp.AccountStablecoin({address: account})
    const stablecoinDecimals = await this.sdkProvider.getTokenClient().getDecimals(stablecoinDebtInfo.denom) ?? BN_ZERO
    const stablecoinDebtAmount = bnOrZero(accountStablecoin.principalDebt).plus(bnOrZero(accountStablecoin.interestDebt))
    const stablecoinDebtUsd = stablecoinDebtAmount.shiftedBy(-stablecoinDecimals)

    totalDebtsUsd = totalDebtsUsd.plus(stablecoinDebtUsd)

    const healthFactor = currLiquidationThreshold.div(totalDebtsUsd)

    return {
      TotalCollateralsUsd: totalCollateralsUsd,
      AvailableBorrowsUsd: availableBorrowsUsd,
      CurrLiquidationThreshold: currLiquidationThreshold,
      TotalDebtsUsd: totalDebtsUsd,
      TotalStablecoinDebtsUsd: stablecoinDebtUsd,
      HealthFactor: healthFactor,
    }
  }

  public async getAssetBorrowableSupply(denom: string) {
    const sdk = this.sdkProvider

    if (!this.cdpModuleAddress) {
      const moduleAddressRsp = await sdk.query.misc.ModuleAddress(QueryModuleAddressRequest.fromPartial({ module: "cdp" }))
      this.cdpModuleAddress = moduleAddressRsp.address
    }
    const balanceRsp = await sdk.query.bank.Balance(QueryBalanceRequest.fromPartial({ address: this.cdpModuleAddress, denom }))
    if (!balanceRsp.balance) {
      return
    }

    return bnOrZero(balanceRsp.balance.amount)
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

  public async getModuleTotalDebtUsdVal() {
    const sdk = this.sdkProvider
    let totalDebt = new BigNumber(0)

    // get token debts
    const allDebtsRes = await this.sdkProvider.query.cdp.TokenDebtAll({});
    const allDebts = allDebtsRes.debtInfosAll
    for (let i = 0; i <allDebts.length; i++) {
      const denom = allDebts[i].denom
      const interest = bnOrZero(allDebts[i].totalAccumulatedInterest)
      const principal = bnOrZero(allDebts[i].totalPrincipal)
      const debtAmt = interest.plus(principal)
      const debtUsdVal = await this.getTokenUsdVal(denom, debtAmt)
      if (!debtUsdVal) {return}
      totalDebt = totalDebt.plus(debtUsdVal)
    }

    // get stablecoin debt
    const stablecoinDebtRes = await this.sdkProvider.query.cdp.StablecoinDebt({})
    const stablecoinDebtInfo = stablecoinDebtRes.stablecoinDebtInfo
    if (!stablecoinDebtInfo) {
      return
    }
    const debtAmt = bnOrZero(stablecoinDebtInfo.totalPrincipal).plus(bnOrZero(stablecoinDebtInfo.totalAccumulatedInterest))
    const stablecoinDecimals = await sdk.getTokenClient().getDecimals(stablecoinDebtInfo.denom) ?? BN_ZERO
    const debtUsdVal = (debtAmt).shiftedBy(-stablecoinDecimals)

    totalDebt = totalDebt.plus(debtUsdVal)

    return totalDebt
  }

  public async getModuleTotalCollateralUsdVal() {
    const moduleAddressRsp = await this.sdkProvider.query.misc.ModuleAddress(QueryModuleAddressRequest.fromPartial({ module: "collateral_pool" }))
    const cdpBalances = await this.sdkProvider.query.bank.AllBalances({address: moduleAddressRsp.address})
    let allCollateralsUsdValue = new BigNumber(0)
    for (let i = 0 ; i < cdpBalances.balances.length ; i++) {
      const denom = cdpBalances.balances[i].denom
      const amount = new BigNumber(cdpBalances.balances[i].amount)
      const collateralUsdValue = await this.getCdpTokenUsdVal(denom, amount);
      if (!collateralUsdValue) {return}
      allCollateralsUsdValue = allCollateralsUsdValue.plus(collateralUsdValue);
    }
    return allCollateralsUsdValue
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
    return await this.getTokenUsdVal(denom, actualTokenAmount)
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
    if (!debtInfo) {
      const debtInfoRsp = await this.sdkProvider.query.cdp.TokenDebt(QueryTokenDebtRequest.fromPartial({ denom }))
      debtInfo = debtInfoRsp.debtInfo
    }
    if (!debtInfo) {
      return
    }
    const cim = await this.recalculateCIM(denom, debtInfo)
    if (!cim) {
      return
    }
    const principal = bnOrZero(debtInfo.totalPrincipal)
    const interest = bnOrZero(debtInfo.totalAccumulatedInterest)
    const cdpParamsRsp = await this.sdkProvider.query.cdp.Params(QueryParamsRequest.fromPartial({}))
    const cdpParams = cdpParamsRsp.params
    if (!cdpParams) {
      return
    }
    const interestFee = bnOrZero(cdpParams.interestFee).div(10000)

    return principal.plus(interest.times(bnOrZero(1).minus(interestFee)))
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
      const debtRes = await sdk.query.cdp.AccountDebt({ address:account, denom:denom })
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

  public async getTotalAccountStablecoinDebt(account: string, debt?: CDPModule.StablecoinDebt ,debtInfo?: StablecoinDebtInfo) {
    const sdk = this.sdkProvider
    let principalAmount = BN_ZERO

    if (!debtInfo) {
      const debtInfoResponse = await sdk.query.cdp.StablecoinDebt(QueryStablecoinDebtRequest.fromPartial({}))
      debtInfo = debtInfoResponse.stablecoinDebtInfo
    }
    if (!debtInfo) {
      return BN_ZERO;
    }

    if (!debt) {
      const debtResp = await sdk.query.cdp.AccountStablecoin(QueryAccountStablecoinRequest.fromPartial({ address: account }))
      debt = debtResp
    }
    if (!debt) {
      return BN_ZERO;
    }

    principalAmount = bnOrZero(debt.principalDebt)
    const initialCIM = bnOrZero(debt.initialCumulativeInterestMultiplier)
    const cim = await this.recalculateStablecoinCIM(debtInfo)
    if (!cim) {
      return BN_ZERO
    }

    const totalStablecoinDebtAmount = principalAmount.times(cim).dividedToIntegerBy(initialCIM)

    return totalStablecoinDebtAmount
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

  public async recalculateStablecoinCIM(debtInfo?: StablecoinDebtInfo) {
    const sdk = this.sdkProvider
    if (!debtInfo) {
      const debtInfoResponse = await sdk.query.cdp.StablecoinDebt(QueryStablecoinDebtRequest.fromPartial({}))
      debtInfo = debtInfoResponse.stablecoinDebtInfo
      if (!debtInfo) {
        return BN_ZERO;
      }
    }

    const paramsResponse = await sdk.query.cdp.Params(QueryCdpParamsRequest.fromPartial({}))
    const cim = bnOrZero(debtInfo.cumulativeInterestMultiplier)
    const apy = bnOrZero(paramsResponse.params?.stablecoinInterestRate)
    if (!apy) {
      return BN_ZERO;
    }
    const interest = this.calculateInterestForTimePeriod(apy, debtInfo.lastUpdatedTime ?? new Date(0), new Date())
    const newCIM = cim.times(interest.plus(1))

    return newCIM;
  }

  public async getMaxCollateralForUnlock(account:string, cdpDenom:string) {
    const sdk = this.sdkProvider

    const denom = await this.getUnderlyingDenom(cdpDenom)
    if (!denom) return

    const assetParams = await sdk.query.cdp.Asset({denom: denom})
    if (!assetParams.assetParams) return
    let unlockRatio = new BigNumber(assetParams.assetParams.loanToValue)
    if (sdk.getConfig().network === Network.LocalHost || sdk.getConfig().network === Network.DevNet) {
      unlockRatio = new BigNumber(assetParams.assetParams.liquidationThreshold)
    }

    const accountData = await this.getAccountData(account)
    if (!accountData) return

    const tokenDecimals = await sdk.getTokenClient().getDecimals(denom)
    if (!tokenDecimals) return
    const availableBorrowsUsd = accountData.AvailableBorrowsUsd.minus(accountData.TotalDebtsUsd)
    const unlockableUsd = availableBorrowsUsd.multipliedBy(10000).div(unlockRatio)
    const tokenPrice = await sdk.query.pricing.TokenPrice({denom: denom})
    if (!tokenPrice.tokenPrice) return

    const tokenTwap = new BigNumber(tokenPrice.tokenPrice.twap)
    const tokenAmt = unlockableUsd.div(tokenTwap.shiftedBy(-18)).shiftedBy(tokenDecimals)
    const cdpToActualRatio = await this.getCdpToActualRatio(cdpDenom) ?? BN_ZERO
    const cdpTokenAmt = tokenAmt.multipliedBy(cdpToActualRatio)

    // take the min of cdpTokensUnlockableAmt and locked tokens
    const accountCollateral = await sdk.query.cdp.AccountCollateral({
      address: account,
      cdpDenom: cdpDenom
    })
    if (!accountCollateral.collateral) return
    const lockedAmount = new BigNumber(accountCollateral.collateral.collateralAmount)

    if (lockedAmount.lt(cdpTokenAmt)) {
      return lockedAmount
    }
    return cdpTokenAmt
  }

  public async getCdpTokenPrice(cdpDenom:string) {
    const sdk = this.sdkProvider
    const denom = await this.getUnderlyingDenom(cdpDenom)
    if (!denom) {
      return
    }
    const cdpToActualRatio = await this.getCdpToActualRatio(cdpDenom) ?? BN_ZERO
    const tokenPrice = await sdk.query.pricing.TokenPrice({denom: denom})
    if (!tokenPrice.tokenPrice) {return}
    const tokenTwap = new BigNumber(tokenPrice.tokenPrice.twap)
    return tokenTwap.multipliedBy(cdpToActualRatio).shiftedBy(-18)
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
    minCollateralAmount: BigNumber
    debtDenom: string
    debtAmount: BigNumber
  }
  export interface LiquidateCollateralWithCdpTokensParams {
    debtor: string
    collateralDenom: string
    minCollateralAmount: BigNumber
    debtDenom: string
    debtAmount: BigNumber
    debtCollateralDenom: string
    debtCollateralAmount: BigNumber
  }
  export interface LiquidateCollateralWithCollateralParams {
    debtor: string
    collateralDenom: string
    minCollateralAmount: BigNumber
    debtDenom: string
    debtAmount: BigNumber
    debtCollateralDenom: string
    debtCollateralAmount: BigNumber
  }
  export interface LiquidateCollateralWithStablecoinParams {
    debtor: string
    collateralDenom: string
    minCollateralAmount: BigNumber
    debtDenom: string
    debtAmount: BigNumber
    principalAmount: BigNumber
    interestDenom: string
    interestAmount: BigNumber
  }
  export interface RepayAssetWithCdpTokensParams {
    debtor?: string
    debtDenom: string
    cdpDenom: string
    cdpAmount: BigNumber
  }
  export interface RepayAssetWithCollateralParams {
    debtor?: string
    debtDenom: string
    cdpDenom: string
    cdpAmount: BigNumber
  }
  export interface MintStablecoinParams {
    amount: BigNumber
  }

  export interface ReturnStablecoinParams {
    principalAmount: BigNumber
    interestDenom: string
    interestAmount: BigNumber
  }

  export interface UpdateRateStrategyParams {
    rateStrategyParams: RateStrategyParams
  }
  export interface StablecoinDebt {
    principalDebt: string
    initialCumulativeInterestMultiplier: string
  }
};
