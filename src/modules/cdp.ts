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
  MsgClaimRewards,
  MsgCreateRewardScheme,
} from "@carbon-sdk/codec/cdp/tx";
import { QueryBalanceRequest, QuerySupplyOfRequest } from '@carbon-sdk/codec/cosmos/bank/v1beta1/query';
import { CarbonTx } from "@carbon-sdk/util";
import { BN_10000, BN_ONE, BN_ZERO, bnOrZero } from '@carbon-sdk/util/number';
import { BigNumber } from "bignumber.js";
import {
  Debt,
  QueryAccountCollateralAllRequest,
  QueryAssetAllRequest,
  QueryTokenDebtAllRequest
} from './../codec/cdp/query';
import BaseModule from "./base";
import { Network } from "@carbon-sdk/constant";
import tokenClient from "@carbon-sdk/clients/TokenClient";
import { SWTHAddress } from '@carbon-sdk/util/address';

export class CDPModule extends BaseModule {

  private cdpModuleAddress: string | undefined

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

  public async createRewardScheme(params: CDPModule.CreateRewardSchemeParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet()
    const value = MsgCreateRewardScheme.fromPartial({
      creator: wallet.bech32Address,
      createRewardSchemeParams: {
        rewardDenom: params.rewardDenom,
        rewardType: params.rewardType,
        assetDenom: params.assetDenom,
        rewardAmountPerSecond: params.rewardAmountPerSecond.toString(10),
        startTime: params.startTime,
        endTime: params.endTime,
      }
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgCreateRewardScheme,
      value,
    }, opts)
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
        continue // no collateral for denom
      }
      const denom = collaterals[i].denom
      const debtInfo = debtInfos.find(d => d.denom === denom)
      if (!debtInfo) {
        continue // no debt for denom
      }
      const collateralUsdVal = await this.getCdpTokenUsdVal(collaterals[i].cdpDenom, amount)
      if (!collateralUsdVal) {
        continue
      }
      const assetParam = assetParams.find(a => a.denom === denom)
      if (!assetParam) {
        continue
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
        continue
      }
      const tokenDebtUsdVal = await this.getTotalAccountTokenDebtUsdVal(account, denom, debts[i], debtInfo)
      if (!tokenDebtUsdVal) {
        continue
      }
      totalDebtsUsd = totalDebtsUsd.plus(tokenDebtUsdVal)
    }

    // add stablecoin debt
    const debtInfoRsp = await sdk.query.cdp.StablecoinDebt(QueryStablecoinDebtRequest.fromPartial({}))
    const stablecoinDebtInfo = debtInfoRsp.stablecoinDebtInfo

    let stablecoinDebtUsd = BN_ZERO;
    if (stablecoinDebtInfo) {
      const accountStablecoin = await sdk.query.cdp.AccountStablecoin({ address: account })
      const stablecoinDecimals = await this.sdkProvider.getTokenClient().getDecimals(stablecoinDebtInfo.denom) ?? BN_ZERO
      const stablecoinDebtAmount = bnOrZero(accountStablecoin.principalDebt).plus(bnOrZero(accountStablecoin.interestDebt))
      stablecoinDebtUsd = stablecoinDebtAmount.shiftedBy(-stablecoinDecimals)

      totalDebtsUsd = totalDebtsUsd.plus(stablecoinDebtUsd)
    }

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
    const cdpAddress = this.getCdpModuleAddress();
    const balanceRsp = await sdk.query.bank.Balance(QueryBalanceRequest.fromPartial({ address: cdpAddress, denom }))
    return bnOrZero(balanceRsp.balance?.amount)
  }

  public async getCdpToActualRatio(cdpDenom: string) {
    const sdk = this.sdkProvider
    const denom = this.getUnderlyingDenom(cdpDenom);
    const supplyRsp = await sdk.query.bank.SupplyOf(QuerySupplyOfRequest.fromPartial({ denom: cdpDenom }))
    const cdpAmountRsp = supplyRsp.amount
    if (!cdpAmountRsp)
      throw new Error("unable to retrieve cdp token supply");
    const cdpAmount = bnOrZero(cdpAmountRsp.amount)

    const cdpAddress = this.getCdpModuleAddress();
    const balanceRsp = await sdk.query.bank.Balance(QueryBalanceRequest.fromPartial({ address: cdpAddress, denom }))
    if (!balanceRsp.balance)
      throw new Error("unable to retrieve cdp module balance");
    const owedAmount = await this.getTotalTokenDebt(denom)
    const actualAmount = bnOrZero(balanceRsp.balance.amount).plus(owedAmount)
    if (!owedAmount)
      throw new Error("unable to retrieve total token debt");
    return cdpAmount.div(actualAmount)
  }

  public async getTotalAccountTokenDebtUsdVal(account: string, denom: string, debt?: Debt, debtInfo?: DebtInfo) {
    const amount = await this.getTotalAccountTokenDebt(account, denom, debt, debtInfo);
    return await this.getTokenUsdVal(denom, amount)
  }

  public async getModuleTotalDebtUsdVal() {
    const sdk = this.sdkProvider
    let totalDebt = new BigNumber(0)

    // get token debts
    const allDebtsRes = await this.sdkProvider.query.cdp.TokenDebtAll({});
    const allDebts = allDebtsRes.debtInfosAll
    for (let i = 0; i < allDebts.length; i++) {
      const denom = allDebts[i].denom
      const interest = bnOrZero(allDebts[i].totalAccumulatedInterest)
      const principal = bnOrZero(allDebts[i].totalPrincipal)
      const debtAmt = interest.plus(principal)
      const debtUsdVal = await this.getTokenUsdVal(denom, debtAmt)
      if (!debtUsdVal) { return }
      totalDebt = totalDebt.plus(debtUsdVal)
    }

    // get stablecoin debt
    const stablecoinDebtRes = await this.sdkProvider.query.cdp.StablecoinDebt({})
    if (stablecoinDebtRes.stablecoinDebtInfo) {
      const debtInfo = stablecoinDebtRes.stablecoinDebtInfo;
      const debtAmt = bnOrZero(debtInfo.totalPrincipal).plus(bnOrZero(debtInfo.totalAccumulatedInterest))
      const stablecoinDecimals = await sdk.getTokenClient().getDecimals(debtInfo.denom) ?? 0
      const debtUsdVal = (debtAmt).shiftedBy(-stablecoinDecimals)
      totalDebt = totalDebt.plus(debtUsdVal)
    }

    return totalDebt
  }

  public async getModuleTotalCollateralUsdVal() {
    const network = this.sdkProvider.getConfig().network;
    const collateralPoolAddress = SWTHAddress.getModuleAddress("collateral_pool", network);
    const cdpBalances = await this.sdkProvider.query.bank.AllBalances({ address: collateralPoolAddress });
    let allCollateralsUsdValue = BN_ZERO;
    for (const balance of cdpBalances.balances) {
      if (!tokenClient.isCdpToken(balance.denom)) {
        continue;
      }

      const amount = bnOrZero(balance.amount);
      const collateralUsdValue = await this.getCdpTokenUsdVal(balance.denom, amount);
      allCollateralsUsdValue = allCollateralsUsdValue.plus(collateralUsdValue);
    }
    return allCollateralsUsdValue
  }

  public async getCdpTokenUsdVal(cdpDenom: string, amount: BigNumber) {
    const denom = this.getUnderlyingDenom(cdpDenom);
    const ratio = await this.getCdpToActualRatio(cdpDenom)
    const actualTokenAmount = amount.div(ratio)
    return await this.getTokenUsdVal(denom, actualTokenAmount)
  }

  public async getTokenUsdVal(denom: string, amount: BigNumber) {
    const sdk = this.sdkProvider
    const decimals = await this.sdkProvider.getTokenClient().getDecimals(denom)
    if (decimals === undefined) throw new Error("unable to retrieve token decimals for " + denom);

    const priceResult = await sdk.query.pricing.TokenPrice(QueryTokenPriceRequest.fromPartial({ denom }))
    if (!priceResult.tokenPrice) throw new Error("unable to retrieve token price for " + denom);

    const twap = bnOrZero(priceResult.tokenPrice.twap).shiftedBy(-18)
    return amount.multipliedBy(twap).shiftedBy(-decimals)
  }

  public async getTotalTokenDebt(denom: string, debtInfo?: DebtInfo) {
    if (!debtInfo) {
      const debtInfoRsp = await this.sdkProvider.query.cdp.TokenDebt(QueryTokenDebtRequest.fromPartial({ denom }))
      debtInfo = debtInfoRsp.debtInfo
    }
    if (!debtInfo)
      throw new Error("unable to retrieve debt info");
    const principal = bnOrZero(debtInfo.totalPrincipal)
    const accumInterest = bnOrZero(debtInfo.totalAccumulatedInterest)
    const cdpParamsRsp = await this.sdkProvider.query.cdp.Params(QueryParamsRequest.fromPartial({}))
    const interestFee = bnOrZero(cdpParamsRsp.params?.interestFee)
    const interest = accumInterest.times(BN_10000.minus(interestFee)).dividedToIntegerBy(BN_10000);

    return principal.plus(interest);
  }

  public async getTotalAccountTokenDebt(account: string, denom: string, debt?: Debt, debtInfo?: DebtInfo) {
    const sdk = this.sdkProvider
    if (!debtInfo) {
      const debtInfoRsp = await sdk.query.cdp.TokenDebt(QueryTokenDebtRequest.fromPartial({ denom }))
      debtInfo = debtInfoRsp.debtInfo
    }
    if (!debtInfo) return BN_ZERO;

    if (!debt) {
      const debtRes = await sdk.query.cdp.AccountDebt({ address: account, denom: denom })
      debt = debtRes.debt
    }
    const principalAmount = bnOrZero(debt?.principalDebt)
    const initialCIM = bnOrZero(debt?.initialCumulativeInterestMultiplier)

    if (principalAmount.isZero() || initialCIM.isZero())
      return BN_ZERO;

    const cim = await this.recalculateCIM(denom, debtInfo)
    if (!cim)
      throw new Error("unable to retrieve account debt");

    // TODO: change to round up
    const totalAmountTokenDebt = principalAmount.times(cim).dividedToIntegerBy(initialCIM)
    return totalAmountTokenDebt
  }

  public async getTotalAccountStablecoinDebt(account: string, debt?: CDPModule.StablecoinDebt, debtInfo?: StablecoinDebtInfo) {
    const sdk = this.sdkProvider
    let principalAmount = BN_ZERO

    if (!debtInfo) {
      const debtInfoResponse = await sdk.query.cdp.StablecoinDebt(QueryStablecoinDebtRequest.fromPartial({}))
      debtInfo = debtInfoResponse.stablecoinDebtInfo
    }
    if (!debtInfo)
      return BN_ZERO;

    if (!debt) {
      const debtResp = await sdk.query.cdp.AccountStablecoin(QueryAccountStablecoinRequest.fromPartial({ address: account }))
      debt = debtResp
    }

    principalAmount = bnOrZero(debt.principalDebt)
    const initialCIM = bnOrZero(debt.initialCumulativeInterestMultiplier)
    const cim = await this.recalculateStablecoinCIM(debtInfo)
    if (!cim)
      throw new Error("unable to retrieve account debt");

    return principalAmount.times(cim).dividedToIntegerBy(initialCIM);
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
      debtInfo = debtInfoResponse.debtInfo;
      if (!debtInfo)
        throw new Error("unable to retrieve debt info for " + denom);
    }

    if (!assetParams) {
      const assetResponse = await sdk.query.cdp.Asset(QueryAssetRequest.fromPartial({ denom }))
      assetParams = assetResponse.assetParams
      if (!assetParams) {
        throw new Error("unable to retrieve asset param for " + denom);
      }
    }

    if (!rateStrategyParams) {
      const rateStrategyParamsResponse = await sdk.query.cdp.RateStrategy(QueryRateStrategyRequest.fromPartial({
        name: assetParams.rateStrategyName
      }))
      rateStrategyParams = rateStrategyParamsResponse.rateStrategyParams
      if (!rateStrategyParams) {
        throw new Error("unable to retrieve rate strategy for " + denom);
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
    return duration.div(millisecondsAYear).times(apy)
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

  public async getMaxCollateralForUnlock(account: string, cdpDenom: string) {
    const sdk = this.sdkProvider

    const denom = this.getUnderlyingDenom(cdpDenom)

    const assetParams = await sdk.query.cdp.Asset({ denom: denom })
    if (!assetParams.assetParams) return
    let unlockRatio = new BigNumber(assetParams.assetParams.loanToValue)
    if (sdk.getConfig().network === Network.LocalHost || sdk.getConfig().network === Network.DevNet) {
      unlockRatio = new BigNumber(assetParams.assetParams.liquidationThreshold)
    }

    const accountData = await this.getAccountData(account)
    const tokenDecimals = await sdk.getTokenClient().getDecimals(denom) ?? 0
    const availableBorrowsUsd = accountData.AvailableBorrowsUsd.minus(accountData.TotalDebtsUsd)
    const unlockableUsd = availableBorrowsUsd.multipliedBy(BN_10000).div(unlockRatio)
    const tokenPrice = await sdk.query.pricing.TokenPrice({ denom })

    const tokenTwap = bnOrZero(tokenPrice.tokenPrice?.twap)
    if (tokenTwap.isZero())
      throw new Error("unable to retrieve token price for " + denom);

    const tokenAmt = unlockableUsd.div(tokenTwap.shiftedBy(-18)).shiftedBy(tokenDecimals)
    const cdpToActualRatio = await this.getCdpToActualRatio(cdpDenom) ?? BN_ZERO
    const cdpTokenAmt = tokenAmt.multipliedBy(cdpToActualRatio)

    // take the min of cdpTokensUnlockableAmt and locked tokens
    const accountCollateral = await sdk.query.cdp.AccountCollateral({
      address: account,
      cdpDenom: cdpDenom
    })
    const lockedAmount = bnOrZero(accountCollateral.collateral?.collateralAmount ?? "0")
    return lockedAmount.lt(cdpTokenAmt) ? lockedAmount : cdpTokenAmt
  }

  public getCdpModuleAddress() {
    if (!this.cdpModuleAddress) {
      const network = this.sdkProvider.getConfig().network;
      this.cdpModuleAddress = SWTHAddress.getModuleAddress("cdp", network);
    }
    return this.cdpModuleAddress;
  }

  public async getCdpTokenPrice(cdpDenom: string) {
    const sdk = this.sdkProvider
    const denom = this.getUnderlyingDenom(cdpDenom)

    const cdpToActualRatio = await this.getCdpToActualRatio(cdpDenom) ?? BN_ZERO
    const tokenPrice = await sdk.query.pricing.TokenPrice({ denom: denom })
    const tokenTwap = bnOrZero(tokenPrice.tokenPrice?.twap).shiftedBy(-18);
    return tokenTwap.multipliedBy(cdpToActualRatio);
  }

  public getUnderlyingDenom(cdpDenom: string) {
    const denom = this.sdkProvider.getTokenClient().getCdpUnderlyingToken(cdpDenom)?.denom;
    if (!denom) throw new Error("underlying denom not found for " + cdpDenom);
    return denom;
  }

  // given a debt repayment amount, we get the max collateral that a liquidator can receive
  // this takes into account the liquidation bonus and fees that will be deducted from his profit
  public async getCollateralReceivableForLiquidation(debtDenom: string, debtAmount: BigNumber, cdpDenom: string) {
    const sdk = this.sdkProvider

    // get the discounted price for the cdp token
    const cdpActualDenom = this.getUnderlyingDenom(cdpDenom)
    const asset = await sdk.query.cdp.Asset({
      denom: cdpActualDenom
    })
    if (!asset.assetParams)
      throw new Error("unable to retrieve asset param for " + debtDenom);

    const bonus = bnOrZero(asset.assetParams.liquidationDiscount).div(BN_10000)
    const cdpTokenPrice = await this.getCdpTokenPrice(cdpDenom);
    const cdpTokenDiscountedPrice = cdpTokenPrice.multipliedBy(BN_ONE.minus(bonus))

    // get cdp tokens (discounted) that can be gained from the debt amount
    const debtValue = await this.getTokenUsdVal(debtDenom, debtAmount) ?? BN_ZERO;
    const underlyingDenom = this.getUnderlyingDenom(cdpDenom)
    const cdpTokenDecimals = await sdk.getTokenClient().getDecimals(underlyingDenom) ?? 0
    const cdpAmountWithDiscount = debtValue.div(cdpTokenDiscountedPrice).shiftedBy(cdpTokenDecimals)

    // get cdp tokens (not discounted) that can be gained from the debt amount
    const cdpAmountWithoutDiscount = debtValue.div(cdpTokenPrice).shiftedBy(cdpTokenDecimals)

    // get fee amount
    const cdpAmountProfit = cdpAmountWithDiscount.minus(cdpAmountWithoutDiscount)
    const params = await sdk.query.cdp.Params({})
    if (!params.params)
      throw new Error("unable to retrieve cdp params");
    const feePercentage = bnOrZero(params.params.liquidationFee).div(BN_10000)
    const feeAmount = cdpAmountProfit.multipliedBy(feePercentage)

    // return collateral that can be received by liquidator
    return cdpAmountWithDiscount.minus(feeAmount)
  }

  public async getCollateralReceivableForStablecoinLiq(cdpDenom: string, stablecoinRepayAmt: BigNumber, interestDenom: string, interestRepayAmt: BigNumber) {
    const sdk = this.sdkProvider

    // get the discounted price for the cdp token
    const cdpActualDenom = this.getUnderlyingDenom(cdpDenom)
    const asset = await sdk.query.cdp.Asset({
      denom: cdpActualDenom
    })
    if (!asset.assetParams)
      throw new Error("unable to retrieve asset param for " + cdpActualDenom)
    const bonus = bnOrZero(asset.assetParams.liquidationDiscount).div(BN_10000)
    const cdpTokenPrice = await this.getCdpTokenPrice(cdpDenom)
    const cdpTokenDiscountedPrice = cdpTokenPrice.multipliedBy(BN_ONE.minus(bonus))

    // get value of stablecoin repayment + interest repayment
    const debtInfoRsp = await sdk.query.cdp.StablecoinDebt({}) ?? {}
    if (!debtInfoRsp.stablecoinDebtInfo)
      throw new Error("unable to retrieve stablecoin debt info")
    const stablecoinDebtInfo = debtInfoRsp.stablecoinDebtInfo
    const stablecoinDecimals = await this.sdkProvider.getTokenClient().getDecimals(stablecoinDebtInfo.denom) ?? BN_ZERO
    const stablecoinRepaymentValue = stablecoinRepayAmt.shiftedBy(-stablecoinDecimals)
    const interestRepaymentValue = await this.getTokenUsdVal(interestDenom, interestRepayAmt) ?? BN_ZERO;
    const totalRepaymentValue = stablecoinRepaymentValue.plus(interestRepaymentValue)

    // get cdp tokens (discounted) that can be gained from the debt amount
    const cdpTokenDecimals = await sdk.getTokenClient().getDecimals(cdpActualDenom) ?? 0
    const cdpAmountWithDiscount = totalRepaymentValue.div(cdpTokenDiscountedPrice).shiftedBy(cdpTokenDecimals)

    // get cdp tokens (not discounted) that can be gained from the debt amount
    const cdpAmountWithoutDiscount = totalRepaymentValue.div(cdpTokenPrice).shiftedBy(cdpTokenDecimals)

    // get fee amount
    const cdpAmountProfit = cdpAmountWithDiscount.minus(cdpAmountWithoutDiscount)
    const params = await sdk.query.cdp.Params({})
    if (!params.params)
      throw new Error("unable to retrieve cdp params");
    const feePercentage = bnOrZero(params.params.liquidationFee).div(BN_10000)
    const feeAmount = cdpAmountProfit.multipliedBy(feePercentage)

    // return collateral that can be received by liquidator
    return cdpAmountWithDiscount.minus(feeAmount)
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

  export interface  CreateRewardSchemeParams {
    rewardDenom: string
    assetDenom: string
    rewardType: string
    rewardAmountPerSecond: BigNumber
    startTime: Date
    endTime: Date
  }

};
