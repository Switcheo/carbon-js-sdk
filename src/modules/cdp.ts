import tokenClient from "@carbon-sdk/clients/TokenClient";
import { Carbon } from "@carbon-sdk/CarbonSDK";
import { Params } from "@carbon-sdk/codec/Switcheo/carbon/cdp/params";
import {
  QueryParamsRequest,
  QueryTokenDebtRequest,
} from "@carbon-sdk/codec/Switcheo/carbon/cdp/query";
import { QueryBalanceRequest, QuerySupplyOfRequest, QueryTotalSupplyRequest } from "@carbon-sdk/codec/cosmos/bank/v1beta1/query";
import { PageRequest } from "@carbon-sdk/codec/cosmos/base/query/v1beta1/pagination";
import { Network } from "@carbon-sdk/constant";
import { CarbonTx } from "@carbon-sdk/util";
import { SimpleMap } from "@carbon-sdk/util/type";
import { SWTHAddress } from "@carbon-sdk/util/address";
import { bnOrZero, BN_10000, BN_ONE, BN_ZERO } from "@carbon-sdk/util/number";
import { BigNumber } from "bignumber.js";
import Long from "long";
import BaseModule from "./base";
import { Coin } from "@carbon-sdk/codec/cosmos/base/v1beta1/coin";

export class CDPModule extends BaseModule {
  private cdpModuleAddress: string | undefined;

  public async supplyAsset(params: CDPModule.SupplyAssetParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Carbon.Cdp.MsgSupplyAsset.fromPartial({
      creator: wallet.bech32Address,
      denom: params.denom,
      amount: params.amount.toString(10),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgSupplyAsset,
        value,
      },
      opts
    );
  }

  public async withdrawAsset(params: CDPModule.WithdrawAssetParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Carbon.Cdp.MsgWithdrawAsset.fromPartial({
      creator: wallet.bech32Address,
      cibtDenom: params.cibtDenom,
      amount: params.amount.toString(10),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgWithdrawAsset,
        value,
      },
      opts
    );
  }

  public async lockCollateral(params: CDPModule.LockCollateralParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Carbon.Cdp.MsgLockCollateral.fromPartial({
      creator: wallet.bech32Address,
      cibtDenom: params.cibtDenom,
      amount: params.amount.toString(10),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgLockCollateral,
        value,
      },
      opts
    );
  }

  public async unlockCollateral(params: CDPModule.UnlockCollateralParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Carbon.Cdp.MsgUnlockCollateral.fromPartial({
      creator: wallet.bech32Address,
      cibtDenom: params.cibtDenom,
      amount: params.amount.toString(10),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgUnlockCollateral,
        value,
      },
      opts
    );
  }

  public async borrowAsset(params: CDPModule.BorrowAssetParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Carbon.Cdp.MsgBorrowAsset.fromPartial({
      creator: wallet.bech32Address,
      denom: params.denom,
      amount: params.amount.toString(10),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgBorrowAsset,
        value,
      },
      opts
    );
  }

  public async supplyAssetAndLockCollateral(params: CDPModule.SupplyAssetAndLockCollateralParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Carbon.Cdp.MsgSupplyAssetAndLockCollateral.fromPartial({
      creator: wallet.bech32Address,
      denom: params.denom,
      supplyAmount: params.supplyAmount.toString(10),
      lockAmount: params.lockAmount.toString(10),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgSupplyAssetAndLockCollateral,
        value,
      },
      opts
    );
  }

  public async unlockCollateralAndWithdrawAsset(params: CDPModule.UnlockCollateralAndWithdrawAssetParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Carbon.Cdp.MsgUnlockCollateralAndWithdrawAsset.fromPartial({
      creator: wallet.bech32Address,
      cibtDenom: params.cibtDenom,
      unlockAmount: params.unlockAmount.toString(10),
      withdrawAmount: params.withdrawAmount.toString(10),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgUnlockCollateralAndWithdrawAsset,
        value,
      },
      opts
    );
  }

  public async liquidateCollateral(params: CDPModule.LiquidateCollateralParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Carbon.Cdp.MsgLiquidateCollateral.fromPartial({
      creator: wallet.bech32Address,
      debtor: params.debtor,
      minCollateral: Coin.fromPartial({
        amount: params.minCollateralAmount.toString(10),
        denom: params.minCollateralDenom,
      }),
      debt: Coin.fromPartial({
        amount: params.debtAmount.toString(10),
        denom: params.debtDenom,
      }),
      stableInterest: Coin.fromPartial({
        amount: params.stableInterestAmount.toString(10),
        denom: params.stableInterestDenom,
      }),
      debtFromCollateral: params.debtFromCollateral,
      interestFromCollateral: params.interestFromCollateral,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgLiquidateCollateral,
        value,
      },
      opts
    );
  }

  public async repayAsset(params: CDPModule.RepayAssetParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Carbon.Cdp.MsgRepayAsset.fromPartial({
      creator: wallet.bech32Address,
      denom: params.denom,
      amount: params.amount.toString(10),
      debtor: params.debtor,
      fromCollateral: params.fromCollateral,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgRepayAsset,
        value,
      },
      opts
    );
  }

  /**
   * Uses grouped token balance to repay for existing CDP asset debt.
   * Calls 2 msg in 1 tx, MsgWithdrawFromGroup and MsgRepayAsset.
   * Ensure that grouped token balance is sufficient.
   */
  public async repayAssetWithGroupedToken(params: CDPModule.RepayAssetWithGroupedToken, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const debtor = params.debtor ? params.debtor : wallet.bech32Address;

    return await wallet.sendTxs([{
      typeUrl: CarbonTx.Types.MsgWithdrawFromGroup,
      value: Carbon.Coin.MsgWithdrawFromGroup.fromPartial({
        creator: wallet.bech32Address,
        sourceCoin: {
          amount: params.amount.toString(10),
          denom: params.denom,
        },
      }),
    }, {
      typeUrl: CarbonTx.Types.MsgRepayAsset,
      value: Carbon.Cdp.MsgRepayAsset.fromPartial({
        creator: wallet.bech32Address,
        debtor: debtor,
        denom: params.denom,
        amount: params.amount.toString(10),
      }),
    }], opts);
  }


  public async convertLentTokenToGroupToken(params: CDPModule.ConvertLentTokenToGroupToken, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const value = Carbon.Cdp.MsgConvertTokenInCdpToGroupTokens.fromPartial({
      creator: wallet.bech32Address,
      denom: params.denom,
    });
    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgConvertTokenInCdpToGroupTokens,
        value,
      },
      opts
    );
  }

  public async mintStablecoin(params: CDPModule.MintStablecoinParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Carbon.Cdp.MsgMintStablecoin.fromPartial({
      creator: wallet.bech32Address,
      amount: params.amount.toString(10),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgMintStablecoin,
        value,
      },
      opts
    );
  }

  public async returnStablecoin(params: CDPModule.ReturnStablecoinParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Carbon.Cdp.MsgReturnStablecoin.fromPartial({
      creator: wallet.bech32Address,
      principal: Coin.fromPartial({
        denom: params.principalDenom,
        amount: params.principalAmount.toString(10),
      }),
      interest: Coin.fromPartial({
        denom: params.interestDenom,
        amount: params.interestAmount.toString(10),
      }),
      debtor: params.debtor,
      principalFromCollateral: params.principalFromCollateral,
      interestFromCollateral: params.interestFromCollateral,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgReturnStablecoin,
        value,
      },
      opts
    );
  }

  public async updateRateStrategy(params: CDPModule.UpdateRateStrategyParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const value = Carbon.Cdp.MsgUpdateRateStrategy.fromPartial({
      creator: wallet.bech32Address,
      rateStrategyParams: params.rateStrategyParams,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgUpdateRateStrategy,
        value,
      },
      opts
    );
  }

  public async claimRewards(opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const value = Carbon.Cdp.MsgClaimRewards.fromPartial({
      creator: wallet.bech32Address,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgClaimRewards,
        value,
      },
      opts
    );
  }

  public async createRewardScheme(params: CDPModule.CreateRewardSchemeParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const value = Carbon.Cdp.MsgCreateRewardScheme.fromPartial({
      creator: wallet.bech32Address,
      createRewardSchemeParams: {
        rewardDenom: params.rewardDenom,
        rewardType: params.rewardType,
        assetDenom: params.assetDenom,
        rewardAmountPerSecond: params.rewardAmountPerSecond.toString(10),
        startTime: params.startTime,
        endTime: params.endTime,
      },
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgCreateRewardScheme,
        value,
      },
      opts
    );
  }

  public async updateRewardScheme(params: CDPModule.UpdateRewardSchemeParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const value = Carbon.Cdp.MsgUpdateRewardScheme.fromPartial({
      updater: wallet.bech32Address,
      updateRewardSchemeParams: {
        rewardSchemeId: params.rewardSchemeId,
        rewardDenom: params.rewardDenom,
        rewardType: params.rewardType,
        assetDenom: params.assetDenom,
        rewardAmountPerSecond: params.rewardAmountPerSecond ? params.rewardAmountPerSecond.toString(10) : undefined,
        startTime: params.startTime,
        endTime: params.endTime,
      },
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgUpdateRewardScheme,
        value,
      },
      opts
    );
  }



  public async addEModeCategory(
    params: CDPModule.AddEModeCategoryParams,
    opts?: CarbonTx.SignTxOpts
  ) {
    const wallet = this.getWallet();
    const value = Carbon.Cdp.MsgAddEModeCategory.fromPartial({
      creator: wallet.bech32Address,
      eModeCategory: {
        name: params.eModeCategory?.name,
        denoms: params.eModeCategory?.denoms,
        loanToValue: params.eModeCategory?.loanToValue.toString(10),
        liquidationThreshold: params.eModeCategory?.liquidationThreshold.toString(10),
        liquidationDiscount: params.eModeCategory?.liquidationDiscount.toString(10),
        isActive: params.eModeCategory?.isActive,
      },
    });
    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgAddEModeCategory,
        value,
      },
      opts
    );
  }

  public async updateEModeCategory(
    params: CDPModule.UpdateEModeCategoryParams,
    opts?: CarbonTx.SignTxOpts
  ) {
    const wallet = this.getWallet();
    const value = Carbon.Cdp.MsgUpdateEModeCategory.fromPartial({
      creator: wallet.bech32Address,
      eModeCategoryName: params.eModeCategoryName,
      updateEModeCategoryParams: {
        denoms: params.updateEModeCategoryParams?.denoms,
        loanToValue: params.updateEModeCategoryParams?.loanToValue?.toNumber(),
        liquidationThreshold: params.updateEModeCategoryParams?.liquidationThreshold?.toNumber(),
        liquidationDiscount: params.updateEModeCategoryParams?.liquidationDiscount?.toNumber(),
        isActive: params.updateEModeCategoryParams?.isActive,
      },
    });
    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgUpdateEModeCategory,
        value,
      },
      opts
    );
  }

  public async setAccountEMode(
    params: CDPModule.SetAccountEModeParams,
    opts?: CarbonTx.SignTxOpts
  ) {
    const wallet = this.getWallet();
    const value = Carbon.Cdp.MsgSetAccountEMode.fromPartial({
      creator: wallet.bech32Address,
      eModeCategoryName: params.eModeCategoryName,
    });
    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgSetAccountEMode,
        value,
      },
      opts
    );
  }

  public async removeAccountEMode(
    opts?: CarbonTx.SignTxOpts
  ) {
    const wallet = this.getWallet();
    const value = Carbon.Cdp.MsgRemoveAccountEMode.fromPartial({
      creator: wallet.bech32Address,
    });
    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgRemoveAccountEMode,
        value,
      },
      opts
    );
  }

  // start of cdp calculations

  public async getAccountData(account: string) {
    const sdk = this.sdkProvider;
    const debtInfoPromise = sdk.query.cdp.TokenDebtAll(Carbon.Cdp.QueryTokenDebtAllRequest.fromPartial({}));
    const collateralsPromise = sdk.query.cdp.AccountCollateralAll(Carbon.Cdp.QueryAccountCollateralAllRequest.fromPartial({ address: account }));
    const assetParamsPromise = sdk.query.cdp.AssetAll(Carbon.Cdp.QueryAssetAllRequest.fromPartial({}));
    const debtsPromise = sdk.query.cdp.AccountDebtAll(Carbon.Cdp.QueryAccountDebtAllRequest.fromPartial({ address: account }));
    // add stablecoin debt
    const stablecoinDebtInfoPromise = sdk.query.cdp.StablecoinDebt(Carbon.Cdp.QueryStablecoinDebtRequest.fromPartial({}));
    const [debtInfoResponse, collateralsRsp, assetParamsRsp, debtsRsp, stablecoinDebtInfoRsp] = await Promise.all([debtInfoPromise, collateralsPromise, assetParamsPromise, debtsPromise, stablecoinDebtInfoPromise]);
    const debtInfos = debtInfoResponse.debtInfosAll;
    const collaterals = collateralsRsp.collaterals;
    const assetParamsAPI = assetParamsRsp.assetParamsAll;

    let totalCollateralsUsd = BN_ZERO;
    let availableBorrowsUsd = BN_ZERO;
    let currLiquidationThreshold = BN_ZERO;
    for (let i = 0; i < collaterals.length; i++) {
      const amount = bnOrZero(collaterals[i].collateralAmount);
      if (amount.isZero()) {
        continue; // no collateral for denom
      }
      const denom = collaterals[i].denom;
      const debtInfo = debtInfos.find((d) => d.denom === denom);
      if (!debtInfo) {
        continue; // no debt for denom
      }
      const collateralUsdVal = await this.getCdpTokenUsdVal(collaterals[i].cibtDenom, amount);
      if (!collateralUsdVal) {
        continue;
      }
      const assetParamAPI = assetParamsAPI.find((a) => a.assetParams?.denom === denom);
      if (!assetParamAPI) {
        continue;
      }
      const ltv = bnOrZero(assetParamAPI.assetParams?.loanToValue).div(BN_10000);
      const availableBorrowUsd = collateralUsdVal.times(ltv);
      const liquidationThreshold = bnOrZero(assetParamAPI.assetParams?.liquidationThreshold).div(BN_10000);
      const liquidationThresholdVal = collateralUsdVal.times(liquidationThreshold);
      totalCollateralsUsd = totalCollateralsUsd.plus(collateralUsdVal);
      availableBorrowsUsd = availableBorrowsUsd.plus(availableBorrowUsd);
      currLiquidationThreshold = currLiquidationThreshold.plus(liquidationThresholdVal);
    }

    // add token debts
    const debts = debtsRsp.debts;
    let totalDebtsUsd = BN_ZERO;
    const debtsUsdRequests = [];
    for (let i = 0; i < debts.length; i++) {
      const amount = bnOrZero(debts[i].principal);
      const denom = debts[i].denom;
      if (amount.isZero()) {
        continue;
      }
      const debtInfo = debtInfos.find((d) => d.denom === denom);
      if (!debtInfo) {
        continue;
      }
      debtsUsdRequests.push(this.getTotalAccountTokenDebtUsdVal(account, denom, debts[i], debtInfo));
    }
    Promise.all(debtsUsdRequests).then((debtUsdVals) => {
      debtUsdVals.forEach((val) => {
        if (!val) return
        totalDebtsUsd = totalDebtsUsd.plus(val)
      })
    })
    const stablecoinDebtInfo = stablecoinDebtInfoRsp.stablecoinDebtInfo;

    let stablecoinDebtUsd = BN_ZERO;
    if (stablecoinDebtInfo) {
      const accountStablecoin = await sdk.query.cdp.AccountStablecoin({ address: account });
      const stablecoinDecimals = (await this.sdkProvider.getTokenClient().getDecimals(stablecoinDebtInfo.denom)) ?? BN_ZERO;
      const stablecoinDebtAmount = bnOrZero(accountStablecoin.principal).plus(bnOrZero(accountStablecoin.interest));
      stablecoinDebtUsd = stablecoinDebtAmount.shiftedBy(-stablecoinDecimals);

      totalDebtsUsd = totalDebtsUsd.plus(stablecoinDebtUsd);
    }

    const healthFactor = currLiquidationThreshold.div(totalDebtsUsd);

    return {
      TotalCollateralsUsd: totalCollateralsUsd,
      AvailableBorrowsUsd: availableBorrowsUsd,
      CurrLiquidationThreshold: currLiquidationThreshold,
      TotalDebtsUsd: totalDebtsUsd,
      TotalStablecoinDebtsUsd: stablecoinDebtUsd,
      HealthFactor: healthFactor,
    };
  }

  public async getAssetBorrowableSupply(denom: string) {
    const sdk = this.sdkProvider;
    const cdpAddress = this.getCdpModuleAddress();
    const balanceRsp = await sdk.query.bank.Balance(QueryBalanceRequest.fromPartial({ address: cdpAddress, denom }));
    return bnOrZero(balanceRsp.balance?.amount);
  }

  public async getCdpToActualRatio(cibtDenom: string, interestFee?: BigNumber) {
    const sdk = this.sdkProvider;
    const denom = this.getUnderlyingDenom(cibtDenom);
    const cdpAddress = this.getCdpModuleAddress();
    const supplyPromise = sdk.query.bank.SupplyOf(QuerySupplyOfRequest.fromPartial({ denom: cibtDenom }));
    const balancePromise = sdk.query.bank.Balance(QueryBalanceRequest.fromPartial({ address: cdpAddress, denom }));
    const debtInfoPromise = sdk.query.cdp.TokenDebt(QueryTokenDebtRequest.fromPartial({ denom }));
    const [supplyRsp, balanceRsp, debtInfoRsp] = await Promise.all([supplyPromise, balancePromise, debtInfoPromise]);
    const cdpAmountRsp = supplyRsp.amount;
    if (!cdpAmountRsp) throw new Error("unable to retrieve cdp token supply");
    const cdpAmount = bnOrZero(cdpAmountRsp.amount);
    if (!balanceRsp.balance) throw new Error("unable to retrieve cdp module balance");
    const debtInfo = debtInfoRsp.debtInfo;
    if (!debtInfo) throw new Error("unable to retrieve debt info");
    const owedAmount = await this.getTotalTokenDebt(denom, debtInfo, interestFee);
    const actualAmount = bnOrZero(balanceRsp.balance.amount).plus(owedAmount);
    if (!owedAmount) throw new Error("unable to retrieve total token debt");
    return cdpAmount.div(actualAmount);
  }

  public async getTotalAccountTokenDebtUsdVal(account: string, denom: string, debt?: Carbon.Cdp.Debt, debtInfo?: Carbon.Cdp.DebtInfo) {
    const amount = await this.getTotalAccountTokenDebt(account, denom, debt, debtInfo);
    return await this.getTokenUsdVal(denom, amount);
  }

  public async getModuleTotalDebtUsdVal() {
    const sdk = this.sdkProvider;
    let totalDebt = new BigNumber(0);

    // get token debts
    const allDebtsRes = await this.sdkProvider.query.cdp.TokenDebtAll({});
    const allDebts = allDebtsRes.debtInfosAll;
    const debtAmtRequests = []
    for (let i = 0; i < allDebts.length; i++) {
      const denom = allDebts[i].denom;
      const interest = bnOrZero(allDebts[i].totalAccumulatedInterest);
      const principal = bnOrZero(allDebts[i].totalPrincipal);
      const debtAmt = interest.plus(principal);
      debtAmtRequests.push(this.getTokenUsdVal(denom, debtAmt));
    }
    await Promise.all(debtAmtRequests).then((debtUsdVals) => {
      debtUsdVals.forEach((debtUsdVal) => {
        if (!debtUsdVal) {
          return;
        }
        totalDebt = totalDebt.plus(debtUsdVal);
      });
    });

    // get stablecoin debt
    const stablecoinDebtRes = await this.sdkProvider.query.cdp.StablecoinDebt({});
    if (stablecoinDebtRes.stablecoinDebtInfo) {
      const debtInfo = stablecoinDebtRes.stablecoinDebtInfo;
      const debtAmt = bnOrZero(debtInfo.totalPrincipal).plus(bnOrZero(debtInfo.totalAccumulatedInterest));
      const stablecoinDecimals = (await sdk.getTokenClient().getDecimals(debtInfo.denom)) ?? 0;
      const debtUsdVal = debtAmt.shiftedBy(-stablecoinDecimals);
      totalDebt = totalDebt.plus(debtUsdVal);
    }

    return totalDebt;
  }

  public async getModuleTotalCollateralUsdVal() {
    const sdk = this.sdkProvider;
    const network = sdk.getConfig().network;
    const collateralPoolAddress = SWTHAddress.getModuleAddress("collateral_pool", network);
    const cdpModuleBalancesAddress = this.getCdpModuleAddress();

    const maxPageLimit = { pagination: PageRequest.fromPartial({ limit: new Long(10000) }) };
    const collateralPoolBalancePromise = sdk.query.bank.AllBalances({ ...maxPageLimit, address: collateralPoolAddress, resolveDenom: false });
    const cdpModuleBalancesPromise = sdk.query.bank.AllBalances({ ...maxPageLimit, address: cdpModuleBalancesAddress, resolveDenom: false });
    const totalSupplyPromise = sdk.query.bank.TotalSupply(QueryTotalSupplyRequest.fromPartial({ ...maxPageLimit }));
    const cdpParamsPromise = sdk.query.cdp.Params(Carbon.Cdp.QueryParamsRequest.fromPartial({}));
    const tokenPriceAllPromise = sdk.query.pricing.TokenPriceAll(Carbon.Pricing.QueryTokenPriceAllRequest.fromPartial({ ...maxPageLimit }));
    const debtInfosPromise = sdk.query.cdp.TokenDebtAll(Carbon.Cdp.QueryTokenDebtAllRequest.fromPartial({ ...maxPageLimit }));
    const assetParamsPromise = sdk.query.cdp.AssetAll(Carbon.Cdp.QueryAssetAllRequest.fromPartial({ ...maxPageLimit }));
    const rateStrategyPromise = sdk.query.cdp.RateStrategyAll(Carbon.Cdp.QueryRateStrategyAllRequest.fromPartial({ ...maxPageLimit }));

    const [collateralPoolBalances, totalSupply, cdpParams, tokenPriceAll, debtInfosAll, assetParamsAll, rateStrategies, cdpModuleBalances] = await Promise.all([collateralPoolBalancePromise, totalSupplyPromise, cdpParamsPromise, tokenPriceAllPromise, debtInfosPromise, assetParamsPromise, rateStrategyPromise, cdpModuleBalancesPromise]);
    const interestFee = bnOrZero(cdpParams.params?.interestFee);
    if (!interestFee) throw new Error("unable to retrieve interest fee");
    const tokenPrices = tokenPriceAll.tokenPrices;
    if (!tokenPrices) throw new Error("unable to retrieve token prices");

    const moduleBalancesMap = cdpModuleBalances.balances.reduce((prev: SimpleMap<Coin>, moduleBalance: Coin) => {
      if (!prev[moduleBalance.denom]) {
        prev[moduleBalance.denom] = moduleBalance;
      }
      return prev;
    }, {});
    const cdpTokenBalances: Coin[] = (collateralPoolBalances?.balances ?? []).filter(balance => tokenClient.isCdpToken(balance.denom))

    const cdpTokensBalancePromises = cdpTokenBalances.map(token => {
      const underlyingDenom = this.getUnderlyingDenom(token.denom);
      const tokenPrice = tokenPrices.find((price) => price.denom === underlyingDenom);
      const supply = totalSupply.supply.find((supply) => supply.denom === token.denom)?.amount;
      const balance = moduleBalancesMap[underlyingDenom]?.amount;
      const debtInfo = debtInfosAll.debtInfosAll.find((debtInfo) => debtInfo.denom === underlyingDenom);

      const assetParamAPI = assetParamsAll.assetParamsAll.find((assetParamAPI) => assetParamAPI.assetParams?.denom === underlyingDenom);
      const rateStrategy = rateStrategies.rateStrategyParamsAll.find((rateStrategy) => rateStrategy.name === assetParamAPI?.assetParams?.rateStrategyName);

      if (!debtInfo || !supply || !tokenPrice || !rateStrategy) throw new Error("unable to retrieve token info");

      const apy = CDPModule.calculateInterestAPY(debtInfo, rateStrategy);
      const newInterestRate = CDPModule.calculateInterestForTimePeriod(apy, debtInfo.lastUpdatedTime ?? new Date(0), new Date());
      return this.getTotalTokenDebt(underlyingDenom, debtInfo, interestFee, newInterestRate)
        .then((totalDebt) => {
          const denominator = bnOrZero(balance).plus(bnOrZero(totalDebt));
          const ratio = denominator.isZero() ? BN_ZERO : bnOrZero(supply).div(denominator);
          const actualAmount = ratio.isZero() ? BN_ZERO : bnOrZero(token.amount).div(ratio);
          return this.getTokenUsdVal(underlyingDenom, actualAmount, tokenPrice);
        })
    })
    const cdpBalances = (await Promise.all(cdpTokensBalancePromises)) ?? [];
    const totalCdpTokensUsdVal = cdpBalances.reduce((prev: BigNumber, curr: BigNumber) => (prev.plus(curr)), BN_ZERO);

    return totalCdpTokensUsdVal;
  }

  public async getCdpTokenUsdVal(cibtDenom: string, amount: BigNumber) {
    const denom = this.getUnderlyingDenom(cibtDenom);
    const cdpRatio = await this.getCdpToActualRatio(cibtDenom);
    const actualTokenAmount = amount.div(cdpRatio);
    return await this.getTokenUsdVal(denom, actualTokenAmount);
  }

  public async getTokenUsdVal(denom: string, amount: BigNumber, price?: Carbon.Pricing.TokenPrice) {
    const sdk = this.sdkProvider;
    const decimals = await this.sdkProvider.getTokenClient().getDecimals(denom);
    if (decimals === undefined) throw new Error("unable to retrieve token decimals for " + denom);

    if (!price) {
      const priceResult = await sdk.query.pricing.TokenPrice(Carbon.Pricing.QueryTokenPriceRequest.fromPartial({ denom }));
      if (!priceResult.tokenPrice) throw new Error("unable to retrieve token price for " + denom);
      price = priceResult.tokenPrice;
    }
    const twap = bnOrZero(price.twap).shiftedBy(-18);
    return amount.multipliedBy(twap).shiftedBy(-decimals);
  }

  public async getTotalTokenDebt(denom: string, debtInfo?: Carbon.Cdp.DebtInfo, interestFee?: BigNumber, newInterestRate?: BigNumber) {
    if (!interestFee) {
      const cdpParamsRsp = await this.sdkProvider.query.cdp.Params(QueryParamsRequest.fromPartial({}));
      interestFee = bnOrZero(cdpParamsRsp.params?.interestFee);
    }
    if (!interestFee) throw new Error("unable to retrieve interest fee");

    if (!debtInfo) {
      const debtInfoRsp = await this.sdkProvider.query.cdp.TokenDebt(Carbon.Cdp.QueryTokenDebtRequest.fromPartial({ denom }));
      debtInfo = debtInfoRsp.debtInfo;
    }
    if (!debtInfo) throw new Error("unable to retrieve debt info");

    if (!newInterestRate) {
      const cimRsp = await this.recalculateCIM(denom, debtInfo);
      newInterestRate = cimRsp.interest;
    }

    const principal = bnOrZero(debtInfo.totalPrincipal);
    const accumInterest = bnOrZero(debtInfo.totalAccumulatedInterest);

    const newInterest = principal.times(newInterestRate).plus(accumInterest.times(BN_ONE.plus(newInterestRate)));
    const interest = newInterest.times(BN_10000.minus(interestFee)).dividedToIntegerBy(BN_10000);

    return principal.plus(interest);
  }

  public async getTotalAccountTokenDebt(account: string, denom: string, debt?: Carbon.Cdp.Debt, debtInfo?: Carbon.Cdp.DebtInfo) {
    const sdk = this.sdkProvider;
    if (!debtInfo) {
      const debtInfoRsp = await sdk.query.cdp.TokenDebt(Carbon.Cdp.QueryTokenDebtRequest.fromPartial({ denom }));
      debtInfo = debtInfoRsp.debtInfo;
    }
    if (!debtInfo) return BN_ZERO;

    if (!debt) {
      const debtRes = await sdk.query.cdp.AccountDebt({ address: account, denom: denom });
      debt = debtRes.debt;
    }
    const principalAmount = bnOrZero(debt?.principal);
    const initialCIM = bnOrZero(debt?.initialCumulativeInterestMultiplier);

    if (principalAmount.isZero() || initialCIM.isZero()) return BN_ZERO;

    const cimRsp = await this.recalculateCIM(denom, debtInfo);
    const cim = cimRsp.cim;
    if (!cim) throw new Error("unable to retrieve account debt");

    // TODO: change to round up
    const totalAmountTokenDebt = principalAmount.times(cim).dividedToIntegerBy(initialCIM);
    return totalAmountTokenDebt;
  }

  public async getTotalAccountStablecoinDebt(account: string, debt?: CDPModule.StablecoinDebt, debtInfo?: Carbon.Cdp.StablecoinDebtInfo) {
    const sdk = this.sdkProvider;
    let principalAmount = BN_ZERO;

    if (!debtInfo) {
      const debtInfoResponse = await sdk.query.cdp.StablecoinDebt(Carbon.Cdp.QueryStablecoinDebtRequest.fromPartial({}));
      debtInfo = debtInfoResponse.stablecoinDebtInfo;
    }
    if (!debtInfo) return BN_ZERO;

    if (!debt) {
      const debtResp = await sdk.query.cdp.AccountStablecoin(Carbon.Cdp.QueryAccountStablecoinRequest.fromPartial({ address: account }));
      debt = debtResp;
    }

    principalAmount = bnOrZero(debt.principal);
    const initialCIM = bnOrZero(debt.initialCumulativeInterestMultiplier);
    const cim = await this.recalculateStablecoinCIM(debtInfo);
    if (!cim) throw new Error("unable to retrieve account debt");

    return principalAmount.times(cim).dividedToIntegerBy(initialCIM);
  }

  public static calculateInterestAPY = (debtInfo: Carbon.Cdp.DebtInfo, rateStrategy: Carbon.Cdp.RateStrategyParams) => {
    const utilizationRate = bnOrZero(debtInfo.utilizationRate).shiftedBy(-18);
    const optimalUsage = bnOrZero(rateStrategy.optimalUsage).shiftedBy(-4);
    const variableRate1 = bnOrZero(rateStrategy.variableRateSlope1).shiftedBy(-4);
    const variableRate2 = bnOrZero(rateStrategy.variableRateSlope2).shiftedBy(-4);
    const baseVariableBorrowRate = bnOrZero(rateStrategy.baseVariableBorrowRate).shiftedBy(-4);
    if (utilizationRate.lte(optimalUsage)) {
      const vRate = utilizationRate.times(variableRate1).div(optimalUsage).dp(4, BigNumber.ROUND_CEIL);
      return vRate.plus(baseVariableBorrowRate);
    } else {
      const ratio = utilizationRate.minus(optimalUsage).div(BN_ONE.minus(optimalUsage));
      const vRate = ratio.times(variableRate2).plus(variableRate1).dp(4, BigNumber.ROUND_CEIL);
      return vRate.plus(baseVariableBorrowRate);
    }
  };

  public async calculateAPY(
    denom: string,
    debtInfo?: Carbon.Cdp.DebtInfo,
    assetParams?: Carbon.Cdp.AssetParams,
    rateStrategyParams?: Carbon.Cdp.RateStrategyParams
  ): Promise<BigNumber> {
    const sdk = this.sdkProvider;

    if (!debtInfo) {
      const debtInfoResponse = await sdk.query.cdp.TokenDebt(Carbon.Cdp.QueryTokenDebtRequest.fromPartial({ denom }));
      debtInfo = debtInfoResponse.debtInfo;
      if (!debtInfo) throw new Error("unable to retrieve debt info for " + denom);
    }

    if (!rateStrategyParams) {
      if (!assetParams) {
        const assetResponse = await sdk.query.cdp.Asset(Carbon.Cdp.QueryAssetRequest.fromPartial({ denom }));
        assetParams = assetResponse.assetParams?.assetParams;
        if (!assetParams) {
          throw new Error("unable to retrieve asset param for " + denom);
        }
      }

      const rateStrategyParamsResponse = await sdk.query.cdp.RateStrategy(
        Carbon.Cdp.QueryRateStrategyRequest.fromPartial({
          name: assetParams.rateStrategyName,
        })
      );
      rateStrategyParams = rateStrategyParamsResponse.rateStrategyParams;
      if (!rateStrategyParams) {
        throw new Error("unable to retrieve rate strategy for " + denom);
      }
    }

    return CDPModule.calculateInterestAPY(debtInfo, rateStrategyParams);
  }

  public static calculateInterestForTimePeriod(apy: BigNumber, start: Date, end: Date) {
    const diffMs = end.getTime() - start.getTime();
    if (diffMs <= 0) {
      return BN_ZERO;
    }

    const diffSeconds = new BigNumber(diffMs).shiftedBy(-3).dp(0, BigNumber.ROUND_CEIL);
    const secondsAYear = bnOrZero(31536000);
    const numPeriods = secondsAYear.div(diffSeconds).dp(18);
    return apy.div(numPeriods).dp(18); // carbon backend sdk.dec max 18 dp
  }

  public async calculateLendAPY(denom: string, borrowInterest?: BigNumber, debtInfo?: Carbon.Cdp.DebtInfo, params?: Params) {
    const sdk = this.sdkProvider;

    if (!debtInfo) {
      const debtInfoResponse = await sdk.query.cdp.TokenDebt(Carbon.Cdp.QueryTokenDebtRequest.fromPartial({ denom }));
      debtInfo = debtInfoResponse.debtInfo;
      if (!debtInfo) {
        throw new Error("unable to retrieve debt info for " + denom);
      }
    }

    if (!borrowInterest) {
      borrowInterest = await this.calculateAPY(denom, debtInfo);
    }

    if (!params) {
      const paramsResponse = await sdk.query.cdp.Params(Carbon.Cdp.QueryParamsRequest.fromPartial({}));
      params = paramsResponse.params;
      if (!params) {
        throw new Error("unable to retrieve cdp params for " + denom);
      }
    }

    const interestFeeRate = bnOrZero(params.interestFee).div(BN_10000);
    const utilizationRate = bnOrZero(debtInfo.utilizationRate).shiftedBy(-18);
    return borrowInterest.times(utilizationRate).times(BN_ONE.minus(interestFeeRate));
  }

  public async recalculateCIM(denom: string, debtInfo?: Carbon.Cdp.DebtInfo): Promise<{ cim: BigNumber; interest: BigNumber }> {
    const sdk = this.sdkProvider;
    if (!debtInfo) {
      const debtInfoResponse = await sdk.query.cdp.TokenDebt(Carbon.Cdp.QueryTokenDebtRequest.fromPartial({ denom }));
      debtInfo = debtInfoResponse.debtInfo;
      if (!debtInfo) {
        return { cim: BN_ZERO, interest: BN_ZERO };
      }
    }
    const cim = bnOrZero(debtInfo.cumulativeInterestMultiplier);
    const apy = await this.calculateAPY(denom, debtInfo);
    const newInterest = CDPModule.calculateInterestForTimePeriod(apy, debtInfo.lastUpdatedTime ?? new Date(0), new Date());
    const newCIM = cim.times(newInterest.plus(1));

    return { cim: newCIM, interest: newInterest };
  }

  public async recalculateStablecoinCIM(debtInfo?: Carbon.Cdp.StablecoinDebtInfo) {
    const sdk = this.sdkProvider;
    if (!debtInfo) {
      const debtInfoResponse = await sdk.query.cdp.StablecoinDebt(Carbon.Cdp.QueryStablecoinDebtRequest.fromPartial({}));
      debtInfo = debtInfoResponse.stablecoinDebtInfo;
      if (!debtInfo) {
        return BN_ZERO;
      }
    }

    const stablecoinInterestResponse = await sdk.query.cdp.StablecoinInterest({});
    const cim = bnOrZero(debtInfo.cumulativeInterestMultiplier);
    const apy = bnOrZero(stablecoinInterestResponse.stablecoinInterestInfo?.stablecoinInterestRate);
    if (!apy) {
      return BN_ZERO;
    }
    const interest = CDPModule.calculateInterestForTimePeriod(apy, debtInfo.lastUpdatedTime ?? new Date(0), new Date());
    const newCIM = cim.times(interest.plus(1));

    return newCIM;
  }

  public async getMaxCollateralForUnlock(account: string, cibtDenom: string) {
    const sdk = this.sdkProvider;

    const denom = this.getUnderlyingDenom(cibtDenom);

    const assetResponse = await sdk.query.cdp.Asset({ denom: denom });
    if (!assetResponse.assetParams?.assetParams) return;
    const params = assetResponse.assetParams.assetParams
    const ltv = params.loanToValue
    let unlockRatio = new BigNumber(ltv);
    if (sdk.getConfig().network === Network.LocalHost || sdk.getConfig().network === Network.DevNet) {
      unlockRatio = new BigNumber(params.liquidationThreshold);
    }

    const accountDataRequest = this.getAccountData(account);
    const tokenPriceRequest = sdk.query.pricing.TokenPrice({ denom });
    // take the min of cdpTokensUnlockableAmt and locked tokens
    const accountCollateralRequest = sdk.query.cdp.AccountCollateral({
      address: account,
      cibtDenom: cibtDenom,
    });
    const [accountData, tokenPrice, accountCollateral] = await Promise.all([accountDataRequest, tokenPriceRequest, accountCollateralRequest]);

    const tokenTwap = bnOrZero(tokenPrice.tokenPrice?.twap);
    if (tokenTwap.isZero()) throw new Error("unable to retrieve token price for " + denom);

    const tokenDecimals = (await sdk.getTokenClient().getDecimals(denom)) ?? 0;
    const availableBorrowsUsd = accountData.AvailableBorrowsUsd.minus(accountData.TotalDebtsUsd);
    const unlockableUsd = availableBorrowsUsd.multipliedBy(BN_10000).div(unlockRatio);

    const tokenAmt = unlockableUsd.div(tokenTwap.shiftedBy(-18)).shiftedBy(tokenDecimals);
    const cdpToActualRatio = (await this.getCdpToActualRatio(cibtDenom)) ?? BN_ZERO;
    const cdpTokenAmt = tokenAmt.multipliedBy(cdpToActualRatio);

    const lockedAmount = bnOrZero(accountCollateral.collateral?.collateralAmount ?? "0");
    return lockedAmount.lt(cdpTokenAmt) ? lockedAmount : cdpTokenAmt;
  }

  public getCdpModuleAddress() {
    if (!this.cdpModuleAddress) {
      const network = this.sdkProvider.getConfig().network;
      this.cdpModuleAddress = SWTHAddress.getModuleAddress("cdp", network);
    }
    return this.cdpModuleAddress;
  }

  public async getCdpTokenPrice(cibtDenom: string) {
    const sdk = this.sdkProvider;
    const denom = this.getUnderlyingDenom(cibtDenom);

    const cdpToActualRatio = (await this.getCdpToActualRatio(cibtDenom)) ?? BN_ZERO;
    const tokenPrice = await sdk.query.pricing.TokenPrice({ denom: denom });
    const tokenTwap = bnOrZero(tokenPrice.tokenPrice?.twap).shiftedBy(-18);
    return tokenTwap.multipliedBy(cdpToActualRatio);
  }

  public getUnderlyingDenom(cibtDenom: string) {
    const denom = this.sdkProvider.getTokenClient().getCdpUnderlyingToken(cibtDenom)?.denom;
    if (!denom) throw new Error("underlying denom not found for " + cibtDenom);
    return denom;
  }

  public async getMaxCollateralForLiquidator(debtor: string, cibtDenom: string, debtDenom: string, debtRepaymentAmount: BigNumber) {
    const sdk = this.sdkProvider;

    // get the discounted price for the cdp token
    const cdpActualDenom = this.getUnderlyingDenom(cibtDenom);
    const assetPromise = sdk.query.cdp.Asset({
      denom: cdpActualDenom,
    });
    const paramsPromise = sdk.query.cdp.Params({});
    const debtorAccountCollateralPromise = sdk.query.cdp.AccountCollateral({
      address: debtor,
      cibtDenom: cibtDenom,
    });
    const [asset, params, debtorAccountCollateral] = await Promise.all([assetPromise, paramsPromise, debtorAccountCollateralPromise]);
    if (!params.params) {
      throw new Error("unable to retrieve cdp params");
    }
    if (!asset.assetParams?.assetParams) throw new Error("unable to retrieve asset param for " + cdpActualDenom);
    if (!debtorAccountCollateral.collateral) {
      throw Error("unable to retrieve debtor's collateral amount");
    }
    const assetParams = asset.assetParams.assetParams
    const bonus = bnOrZero(assetParams.liquidationDiscount).div(BN_10000);
    const cdpTokenPrice = await this.getCdpTokenPrice(cibtDenom);
    const cdpTokenDiscountedPrice = cdpTokenPrice.multipliedBy(BN_ONE.minus(bonus));

    // get close factor
    const debtorAccountData = await sdk.query.cdp.AccountData({
      address: debtor,
    });
    const debtorTotalCollateralVal = bnOrZero(debtorAccountData.totalCollateralsUsd);
    const debtorTotalDebtVal = bnOrZero(debtorAccountData.totalDebtsUsd);
    const currentLiqThreshold = bnOrZero(debtorAccountData.currLiquidationThreshold);

    const smallLiqSize = bnOrZero(params.params.smallLiquidationSize);
    const minCloseFactor = bnOrZero(params.params.minimumCloseFactor);
    const completeLiqThreshold = bnOrZero(params.params.completeLiquidationThreshold);
    const closeFactor = this.computeCloseFactor(
      debtorTotalDebtVal,
      debtorTotalCollateralVal,
      currentLiqThreshold,
      smallLiqSize,
      minCloseFactor,
      completeLiqThreshold
    );

    // get max repayable amount given the debtor's debt and how much liquidator wants to repay
    const debtDecimals = bnOrZero(await sdk.getTokenClient().getDecimals(debtDenom));
    const maxRepayableValue = debtorTotalDebtVal.multipliedBy(closeFactor);
    const maxRepayableAmt = maxRepayableValue.shiftedBy(debtDecimals.toNumber());
    if (debtRepaymentAmount.isGreaterThan(maxRepayableAmt)) {
      debtRepaymentAmount = maxRepayableAmt;
    }

    // calculate collateral amount that can be obtained given that debt amount and debtor's collateral balance
    // AND, recalculate debt repay amount if needed
    const cdpTokenDecimals = bnOrZero(await sdk.getTokenClient().getDecimals(cdpActualDenom));
    let collateralAmtToLiquidate = this.calculateCollateralRequiredForDebt(
      BN_ONE, // assumes USC is $1
      cdpTokenDiscountedPrice,
      debtRepaymentAmount,
      cdpTokenDecimals,
      debtDecimals
    );
    const debtorCollateralAmt = new BigNumber(debtorAccountCollateral.collateral.collateralAmount);
    if (collateralAmtToLiquidate.isGreaterThan(debtorCollateralAmt)) {
      collateralAmtToLiquidate = debtorCollateralAmt;
      debtRepaymentAmount = this.calculateDebtCoveredByCollateral(
        BN_ONE,
        cdpTokenDiscountedPrice,
        collateralAmtToLiquidate,
        cdpTokenDecimals,
        debtDecimals
      );
    }

    // get collateral amt without discount
    const collateralAmountWithoutDiscount = this.calculateCollateralRequiredForDebt(
      BN_ONE,
      cdpTokenPrice,
      debtRepaymentAmount,
      cdpTokenDecimals,
      debtDecimals
    );

    // get liquidation profit
    const liquidatorProfit = collateralAmtToLiquidate.minus(collateralAmountWithoutDiscount);
    if (liquidatorProfit.isNegative()) {
      throw Error("liquidator's profit is negative");
    }

    // get fee amount
    const liquidationFee = params.params.liquidationFee;
    const liquidationFeeAmount = liquidatorProfit.multipliedBy(liquidationFee).div(10000);

    // return the collateral amount left for the liquidator once fees have been deducted
    return collateralAmtToLiquidate.minus(liquidationFeeAmount);
  }

  computeCloseFactor(
    borrowedValue: BigNumber,
    collateralValue: BigNumber,
    liquidationThreshold: BigNumber,
    smallLiquidationSize: BigNumber,
    minimumCloseFactor: BigNumber,
    completeLiquidationThreshold: BigNumber
  ) {
    if (borrowedValue.isLessThan(liquidationThreshold) || borrowedValue.isLessThan(smallLiquidationSize)) {
      return BN_ZERO;
    }
    if (completeLiquidationThreshold.isZero()) {
      return BN_ONE;
    }

    const criticalVal = liquidationThreshold.plus(completeLiquidationThreshold.multipliedBy(collateralValue.minus(liquidationThreshold)));

    const slope = BN_ONE.minus(minimumCloseFactor).div(criticalVal.minus(liquidationThreshold));
    let closeFactor = minimumCloseFactor.plus(borrowedValue.minus(liquidationThreshold).multipliedBy(slope));
    if (liquidationThreshold.isEqualTo(criticalVal)) {
      closeFactor = minimumCloseFactor;
    }

    if (closeFactor.isGreaterThan(1)) {
      return BN_ONE;
    }

    if (closeFactor.isLessThan(0)) {
      return BN_ZERO;
    }

    return closeFactor;
  }

  calculateCollateralRequiredForDebt(
    debtPrice: BigNumber,
    collateralPrice: BigNumber,
    debtAmount: BigNumber,
    collateralTokenDecimals: BigNumber,
    debtTokenDecimals: BigNumber
  ) {
    const decimalPower = collateralTokenDecimals.minus(debtTokenDecimals);
    const decimalMultiplier = this.getDecimalMultiplier(decimalPower);
    const res = debtPrice.multipliedBy(debtAmount).multipliedBy(decimalMultiplier).div(collateralPrice);
    return res.decimalPlaces(0, BigNumber.ROUND_CEIL);
  }

  calculateDebtCoveredByCollateral(
    debtPrice: BigNumber,
    collateralPrice: BigNumber,
    collateralAmount: BigNumber,
    collateralTokenDecimals: BigNumber,
    debtTokenDecimals: BigNumber
  ) {
    const decimalPower = debtTokenDecimals.minus(collateralTokenDecimals);
    const decimalMultiplier = this.getDecimalMultiplier(decimalPower);
    const res = collateralPrice.multipliedBy(collateralAmount).multipliedBy(decimalMultiplier).div(debtPrice);
    return res.decimalPlaces(0);
  }

  getDecimalMultiplier(n: BigNumber) {
    const ten = new BigNumber(10);
    if (n.isLessThan(0)) {
      return BN_ONE.div(ten.pow(n.negated()));
    }
    return ten.pow(n);
  }
}

export namespace CDPModule {
  export interface SupplyAssetParams {
    denom: string;
    amount: BigNumber;
  }
  export interface WithdrawAssetParams {
    cibtDenom: string;
    amount: BigNumber;
  }
  export interface LockCollateralParams {
    cibtDenom: string;
    amount: BigNumber;
  }
  export interface UnlockCollateralParams {
    cibtDenom: string;
    amount: BigNumber;
  }
  export interface BorrowAssetParams {
    denom: string;
    amount: BigNumber;
  }

  export interface RepayAssetParams {
    denom: string;
    amount: BigNumber;
    debtor: string;
    fromCollateral: boolean;
  }
  export interface SupplyAssetAndLockCollateralParams {
    denom: string;
    supplyAmount: BigNumber;
    lockAmount: BigNumber;
  }
  export interface UnlockCollateralAndWithdrawAssetParams {
    cibtDenom: string;
    unlockAmount: BigNumber;
    withdrawAmount: BigNumber;
  }
  export interface LiquidateCollateralParams {
    debtor: string;

    minCollateralAmount: BigNumber;
    minCollateralDenom: string;

    debtAmount: BigNumber;
    debtDenom: string;

    stableInterestAmount: BigNumber;
    stableInterestDenom: string;

    debtFromCollateral: boolean;
    interestFromCollateral: boolean;
  }
  export interface RepayAssetWithGroupedToken {
    denom: string;
    amount: BigNumber;
    debtor?: string;
  }

  export interface ConvertLentTokenToGroupToken {
    denom: string;
  }
  export interface MintStablecoinParams {
    amount: BigNumber;
  }

  export interface ReturnStablecoinParams {
    principalAmount: BigNumber;
    principalDenom: string;

    interestAmount: BigNumber;
    interestDenom: string;

    debtor: string;
    principalFromCollateral: boolean;
    interestFromCollateral: boolean;
  }

  export interface UpdateRateStrategyParams {
    rateStrategyParams: Carbon.Cdp.RateStrategyParams;
  }
  export interface StablecoinDebt {
    principal: string;
    initialCumulativeInterestMultiplier: string;
  }

  export interface CreateRewardSchemeParams {
    rewardDenom: string;
    assetDenom: string;
    rewardType: string;
    rewardAmountPerSecond: BigNumber;
    startTime: Date;
    endTime: Date;
  }
  export interface UpdateRewardSchemeParams {
    rewardSchemeId: Long;
    rewardDenom?: string;
    assetDenom?: string;
    rewardType?: string;
    rewardAmountPerSecond?: BigNumber;
    startTime?: Date;
    endTime?: Date;
  }

  interface EmodeCategoryParams {
    name: string;
    denoms: string[];
    loanToValue: BigNumber;
    liquidationThreshold: BigNumber;
    liquidationDiscount: BigNumber;
    isActive: boolean;
  }
  export interface AddEModeCategoryParams {
    creator: string;
    eModeCategory?: EmodeCategoryParams;
  }

  interface UpdateEModeCategoryStruct {
    denoms: string[];
    loanToValue?: BigNumber;
    liquidationThreshold?: BigNumber;
    liquidationDiscount?: BigNumber;
    isActive?: boolean;
  }

  export interface UpdateEModeCategoryParams {
    creator: string;
    eModeCategoryName: string;
    updateEModeCategoryParams?: UpdateEModeCategoryStruct;
  }

  export interface SetAccountEModeParams {
    creator: string;
    eModeCategoryName: string;
  }
}