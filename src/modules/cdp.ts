import tokenClient from "@carbon-sdk/clients/TokenClient";
import {
  AssetParams,
  DebtInfo,
  MsgWithdrawFromGroup,
  QueryCdpParamsRequest,
  QueryCdpParamsResponse,
  QueryTokenPriceRequest,
  RateStrategyParams,
  StablecoinDebtInfo
} from "@carbon-sdk/codec";
import { Params } from "@carbon-sdk/codec/cdp/params";
import {
  QueryAccountDebtAllRequest,
  QueryAccountStablecoinRequest,
  QueryAssetRequest,
  QueryParamsRequest,
  QueryRateStrategyRequest,
  QueryStablecoinDebtRequest,
  QueryTokenDebtRequest
} from "@carbon-sdk/codec/cdp/query";
import {
  MsgBorrowAsset, MsgClaimRewards,
  MsgCreateRewardScheme, MsgLiquidateCollateral,
  MsgLiquidateCollateralWithCdpTokens,
  MsgLiquidateCollateralWithCollateral,
  MsgLiquidateCollateralWithStablecoin, MsgLiquidateCollateralWithStablecoinAndInterestInCdpTokens,
  MsgLiquidateCollateralWithStablecoinAndInterestInCollateral, MsgLockCollateral,
  MsgMintStablecoin,
  MsgRepayAsset,
  MsgRepayAssetWithCdpTokens,
  MsgRepayAssetWithCollateral,
  MsgReturnStablecoin, MsgReturnStablecoinWithInterestInCdpTokens,
  MsgReturnStablecoinWithInterestInCollateral, MsgSupplyAsset,
  MsgSupplyAssetAndLockCollateral,
  MsgUnlockCollateral,
  MsgUnlockCollateralAndWithdrawAsset,
  MsgUpdateRateStrategy, MsgUpdateRewardScheme, MsgWithdrawAsset,
  MsgAddEModeCategory, MsgUpdateEModeCategory, MsgChangeAccountEMode,
} from "@carbon-sdk/codec/cdp/tx";
import { QueryBalanceRequest, QuerySupplyOfRequest } from "@carbon-sdk/codec/cosmos/bank/v1beta1/query";
import { Network } from "@carbon-sdk/constant";
import { CarbonTx } from "@carbon-sdk/util";
import { SWTHAddress } from "@carbon-sdk/util/address";
import { bnOrZero, BN_10000, BN_ONE, BN_ZERO } from "@carbon-sdk/util/number";
import { BigNumber } from "bignumber.js";
import { Debt, QueryAccountCollateralAllRequest, QueryAssetAllRequest, QueryTokenDebtAllRequest } from "./../codec/cdp/query";
import BaseModule from "./base";
import { Coin } from "@carbon-sdk/codec/cosmos/base/v1beta1/coin";

export class CDPModule extends BaseModule {
  private cdpModuleAddress: string | undefined;

  public async supplyAsset(params: CDPModule.SupplyAssetParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgSupplyAsset.fromPartial({
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

    const value = MsgWithdrawAsset.fromPartial({
      creator: wallet.bech32Address,
      cdpDenom: params.cdpDenom,
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

    const value = MsgLockCollateral.fromPartial({
      creator: wallet.bech32Address,
      cdpDenom: params.cdpDenom,
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

    const value = MsgUnlockCollateral.fromPartial({
      creator: wallet.bech32Address,
      cdpDenom: params.cdpDenom,
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

    const value = MsgBorrowAsset.fromPartial({
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

    const value = MsgSupplyAssetAndLockCollateral.fromPartial({
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

    const value = MsgUnlockCollateralAndWithdrawAsset.fromPartial({
      creator: wallet.bech32Address,
      cdpDenom: params.cdpDenom,
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

    const value = MsgLiquidateCollateral.fromPartial({
      creator: wallet.bech32Address,
      debtor: params.debtor,
      collateralDenom: params.collateralDenom,
      minCollateralAmount: params.minCollateralAmount.toString(10),
      debtDenom: params.debtDenom,
      debtAmount: params.debtAmount.toString(10),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgLiquidateCollateral,
        value,
      },
      opts
    );
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
      debtCollateralAmount: params.debtCollateralAmount.toString(10),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgLiquidateCollateralWithCdpTokens,
        value,
      },
      opts
    );
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
      debtCollateralAmount: params.debtCollateralAmount.toString(10),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgLiquidateCollateralWithCollateral,
        value,
      },
      opts
    );
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
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgLiquidateCollateralWithStablecoin,
        value,
      },
      opts
    );
  }

  public async repayAsset(params: CDPModule.RepayAssetParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgRepayAsset.fromPartial({
      creator: wallet.bech32Address,
      denom: params.denom,
      amount: params.amount.toString(10),
      debtor: params.debtor,
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
      value: MsgWithdrawFromGroup.fromPartial({
        creator: wallet.bech32Address,
        sourceCoin: {
          amount: params.amount.toString(10),
          denom: params.denom,
        },
      }),
    }, {
      typeUrl: CarbonTx.Types.MsgRepayAsset,
      value: MsgRepayAsset.fromPartial({
        creator: wallet.bech32Address,
        debtor: debtor,
        denom: params.denom,
        amount: params.amount.toString(10),
      }),
    }], opts);
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
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgRepayAssetWithCdpTokens,
        value,
      },
      opts
    );
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
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgRepayAssetWithCollateral,
        value,
      },
      opts
    );
  }

  public async mintStablecoin(params: CDPModule.MintStablecoinParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgMintStablecoin.fromPartial({
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

    const value = MsgReturnStablecoin.fromPartial({
      creator: wallet.bech32Address,
      principalAmount: params.principalAmount.toString(10),
      interestDenom: params.interestDenom,
      interestAmount: params.interestAmount.toString(10),
      debtor: params.debtor,
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
    const value = MsgUpdateRateStrategy.fromPartial({
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
    const value = MsgClaimRewards.fromPartial({
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
    const value = MsgCreateRewardScheme.fromPartial({
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
    const value = MsgUpdateRewardScheme.fromPartial({
      updator: wallet.bech32Address,
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

  public async returnStablecoinWithInterestInCdpTokens(
    params: CDPModule.ReturnStablecoinWithInterestInCdpTokensParams,
    opts?: CarbonTx.SignTxOpts
  ) {
    const wallet = this.getWallet();
    const value = MsgReturnStablecoinWithInterestInCdpTokens.fromPartial({
      creator: wallet.bech32Address,
      principalAmount: params.principalAmount.toString(10),
      interestCdpDenom: params.interestCdpDenom,
      interestCdpAmount: params.interestCdpAmount.toString(10),
      debtor: params.debtor,
    });
    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgReturnStablecoinWithInterestInCdpTokens,
        value,
      },
      opts
    );
  }

  public async returnStablecoinWithInterestInCollateral(
    params: CDPModule.ReturnStablecoinWithInterestInCollateralParams,
    opts?: CarbonTx.SignTxOpts
  ) {
    const wallet = this.getWallet();
    const value = MsgReturnStablecoinWithInterestInCollateral.fromPartial({
      creator: wallet.bech32Address,
      principalAmount: params.principalAmount.toString(10),
      interestCdpDenom: params.interestCdpDenom,
      interestCdpAmount: params.interestCdpAmount.toString(10),
      debtor: params.debtor,
    });
    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgReturnStablecoinWithInterestInCollateral,
        value,
      },
      opts
    );
  }

  public async liquidateCollateralWithStablecoinAndInterestInCdpTokens(
    params: CDPModule.LiquidateCollateralWithStablecoinAndInterestInCdpTokensParams,
    opts?: CarbonTx.SignTxOpts
  ) {
    const wallet = this.getWallet();
    const value = MsgLiquidateCollateralWithStablecoinAndInterestInCdpTokens.fromPartial({
      creator: wallet.bech32Address,
      debtor: params.debtor,
      collateralDenom: params.collateralDenom,
      minCollateralAmount: params.minCollateralAmount.toString(10),
      debtDenom: params.debtDenom,
      debtAmount: params.debtAmount.toString(10),
      interestCdpDenom: params.interestCdpDenom,
      interestCdpAmount: params.interestCdpAmount.toString(10),
    });
    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgLiquidateCollateralWithStablecoinAndInterestInCdpTokens,
        value,
      },
      opts
    );
  }

  public async liquidateCollateralWithStablecoinAndInterestInCollateral(
    params: CDPModule.LiquidateCollateralWithStablecoinAndInterestInCollateralParams,
    opts?: CarbonTx.SignTxOpts
  ) {
    const wallet = this.getWallet();
    const value = MsgLiquidateCollateralWithStablecoinAndInterestInCollateral.fromPartial({
      creator: wallet.bech32Address,
      debtor: params.debtor,
      collateralDenom: params.collateralDenom,
      minCollateralAmount: params.minCollateralAmount.toString(10),
      debtDenom: params.debtDenom,
      debtAmount: params.debtAmount.toString(10),
      interestCdpDenom: params.interestCdpDenom,
      interestCdpAmount: params.interestCdpAmount.toString(10),
    });
    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgLiquidateCollateralWithStablecoinAndInterestInCollateral,
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
    const value = MsgAddEModeCategory.fromPartial({
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
    const value = MsgUpdateEModeCategory.fromPartial({
      creator: wallet.bech32Address,
      eModeCategoryName: params.eModeCategoryName,
      updateEModeCategoryParams: {
        denoms: params.updateEModeCategoryParams?.denoms,
        loanToValue: params.updateEModeCategoryParams?.loanToValue?.toNumber(),
        liquidationThreshold: params.updateEModeCategoryParams?.liquidationThreshold?.toNumber(),
        liquidationDiscount: params.updateEModeCategoryParams?.liquidationDiscount?.toNumber(),
        isActive: params.updateEModeCategoryParams?.isActive,
      }
    });
    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgUpdateEModeCategory,
        value,
      },
      opts
    );
  }

  public async changeAccountEMode(
    params: CDPModule.ChangeAccountEModeParams,
    opts?: CarbonTx.SignTxOpts
  ) {
    const wallet = this.getWallet();
    const value = MsgChangeAccountEMode.fromPartial({
      creator: wallet.bech32Address,
      eModeCategoryName: params.eModeCategoryName,
    });
    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgChangeAccountEMode,
        value,
      },
      opts
    );
  }

  // start of cdp calculations

  public async getAccountData(account: string) {
    const sdk = this.sdkProvider;
    const debtInfoPromise = sdk.query.cdp.TokenDebtAll(QueryTokenDebtAllRequest.fromPartial({}));
    const collateralsPromise = sdk.query.cdp.AccountCollateralAll(QueryAccountCollateralAllRequest.fromPartial({ address: account }));
    const assetParamsPromise = sdk.query.cdp.AssetAll(QueryAssetAllRequest.fromPartial({}));
    const debtsPromise = sdk.query.cdp.AccountDebtAll(QueryAccountDebtAllRequest.fromPartial({ address: account }));
    const cdpParamsPromise = sdk.query.cdp.Params(QueryParamsRequest.fromPartial({}));
    // add stablecoin debt
    const stablecoinDebtInfoPromise = sdk.query.cdp.StablecoinDebt(QueryStablecoinDebtRequest.fromPartial({}));
    const [debtInfoResponse, collateralsRsp, assetParamsRsp, debtsRsp, stablecoinDebtInfoRsp, cdpParamsResponse] = await Promise.all([debtInfoPromise, collateralsPromise, assetParamsPromise, debtsPromise, stablecoinDebtInfoPromise, cdpParamsPromise]);
    const debtInfos = debtInfoResponse.debtInfosAll;
    const collaterals = collateralsRsp.collaterals;
    const assetParams = assetParamsRsp.assetParamsAll;

    let totalCollateralsUsd = BN_ZERO;
    let availableBorrowsUsd = BN_ZERO;
    let currLiquidationThreshold = BN_ZERO;

    const interestFee = bnOrZero(cdpParamsResponse.params?.interestFee);

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
      const collateralUsdVal = await this.getCdpTokenUsdVal(collaterals[i].cdpDenom, amount, interestFee);
      if (!collateralUsdVal) {
        continue;
      }
      const assetParam = assetParams.find((a) => a.denom === denom);
      if (!assetParam) {
        continue;
      }
      const ltv = bnOrZero(assetParam.loanToValue).div(BN_10000);
      const availableBorrowUsd = collateralUsdVal.times(ltv);
      const liquidationThreshold = bnOrZero(assetParam.liquidationThreshold).div(BN_10000);
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
      const amount = bnOrZero(debts[i].principalDebt);
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
      const stablecoinDebtAmount = bnOrZero(accountStablecoin.principalDebt).plus(bnOrZero(accountStablecoin.interestDebt));
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

  public async getCdpToActualRatio(cdpDenom: string, owedAmount: BigNumber) {
    const sdk = this.sdkProvider;
    const denom = this.getUnderlyingDenom(cdpDenom);
    const cdpAddress = this.getCdpModuleAddress();
    const supplyPromise = sdk.query.bank.SupplyOf(QuerySupplyOfRequest.fromPartial({ denom: cdpDenom }));
    const balancePromise = sdk.query.bank.Balance(QueryBalanceRequest.fromPartial({ address: cdpAddress, denom }));
    const [supplyRsp, balanceRsp] = await Promise.all([supplyPromise, balancePromise]);
    const cdpAmountRsp = supplyRsp.amount;
    if (!cdpAmountRsp) throw new Error("unable to retrieve cdp token supply");
    const cdpAmount = bnOrZero(cdpAmountRsp.amount);

    if (!balanceRsp.balance) throw new Error("unable to retrieve cdp module balance");
    
    const actualAmount = bnOrZero(balanceRsp.balance.amount).plus(owedAmount);
    if (!owedAmount) throw new Error("unable to retrieve total token debt");
    return cdpAmount.div(actualAmount);
  }

  public async getTotalAccountTokenDebtUsdVal(account: string, denom: string, debt?: Debt, debtInfo?: DebtInfo) {
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

    const collateralPoolBalancesPromise = sdk.query.bank.AllBalances({ address: collateralPoolAddress });
    const cdpParamsPromise = sdk.query.cdp.Params(QueryParamsRequest.fromPartial({}));
    const [collateralPoolBalancesResponse, cdpParamsResponse] = await Promise.all([collateralPoolBalancesPromise, cdpParamsPromise])

    const cdpTokenBalances: Coin[] = (collateralPoolBalancesResponse?.balances ?? []).filter(balance => tokenClient.isCdpToken(balance.denom))
    const interestFee: BigNumber = bnOrZero(cdpParamsResponse.params?.interestFee);

    const cdpTokenBalancePromises: Promise<BigNumber>[] = cdpTokenBalances.map(balance => (
      this.getTotalTokenDebt(balance.denom, interestFee)
        .then(totalOwed => this.getCdpToActualRatio(balance.denom, totalOwed))
        .then(ratio => this.getCdpTokenUsdVal(balance.denom, bnOrZero(balance.amount), ratio))
        .then((val) => bnOrZero(val))
        .catch((err) => {
          console.error(err);
          return BN_ZERO
        })
    ))

    const cdpBalances = (await Promise.all(cdpTokenBalancePromises)) ?? []
    const totalCollateralsUsdValue = cdpBalances.reduce((prev: BigNumber, curr: BigNumber) => (prev.plus(curr)), BN_ZERO)

    return totalCollateralsUsdValue;
  }

  public async getCdpTokenUsdVal(cdpDenom: string, amount: BigNumber, cdpRatio: BigNumber) {
    const denom = this.getUnderlyingDenom(cdpDenom);
    const actualTokenAmount = amount.div(cdpRatio);
    return await this.getTokenUsdVal(denom, actualTokenAmount);
  }

  public async getTokenUsdVal(denom: string, amount: BigNumber) {
    const sdk = this.sdkProvider;
    const decimals = await this.sdkProvider.getTokenClient().getDecimals(denom);
    if (decimals === undefined) throw new Error("unable to retrieve token decimals for " + denom);

    const priceResult = await sdk.query.pricing.TokenPrice(QueryTokenPriceRequest.fromPartial({ denom }));
    if (!priceResult.tokenPrice) throw new Error("unable to retrieve token price for " + denom);

    const twap = bnOrZero(priceResult.tokenPrice.twap).shiftedBy(-18);
    return amount.multipliedBy(twap).shiftedBy(-decimals);
  }

  public async getTotalTokenDebt(denom: string, interestFee: BigNumber) {
    const debtInfoRsp = await this.sdkProvider.query.cdp.TokenDebt(QueryTokenDebtRequest.fromPartial({ denom }));
    const debtInfo = debtInfoRsp.debtInfo;
    if (!debtInfo) throw new Error("unable to retrieve debt info");

    const cimRsp = await this.recalculateCIM(denom);
    const newInterestRate = cimRsp.interest;
    
    const principal = bnOrZero(debtInfo.totalPrincipal);
    const accumInterest = bnOrZero(debtInfo.totalAccumulatedInterest);

    const newInterest = principal.times(newInterestRate).plus(accumInterest.times(BN_ONE.plus(newInterestRate)));
    const interest = newInterest.times(BN_10000.minus(interestFee)).dividedToIntegerBy(BN_10000);

    return principal.plus(interest);
  }

  public async getTotalAccountTokenDebt(account: string, denom: string, debt?: Debt, debtInfo?: DebtInfo) {
    const sdk = this.sdkProvider;
    if (!debtInfo) {
      const debtInfoRsp = await sdk.query.cdp.TokenDebt(QueryTokenDebtRequest.fromPartial({ denom }));
      debtInfo = debtInfoRsp.debtInfo;
    }
    if (!debtInfo) return BN_ZERO;

    if (!debt) {
      const debtRes = await sdk.query.cdp.AccountDebt({ address: account, denom: denom });
      debt = debtRes.debt;
    }
    const principalAmount = bnOrZero(debt?.principalDebt);
    const initialCIM = bnOrZero(debt?.initialCumulativeInterestMultiplier);

    if (principalAmount.isZero() || initialCIM.isZero()) return BN_ZERO;

    const cimRsp = await this.recalculateCIM(denom, debtInfo);
    const cim = cimRsp.cim;
    if (!cim) throw new Error("unable to retrieve account debt");

    // TODO: change to round up
    const totalAmountTokenDebt = principalAmount.times(cim).dividedToIntegerBy(initialCIM);
    return totalAmountTokenDebt;
  }

  public async getTotalAccountStablecoinDebt(account: string, debt?: CDPModule.StablecoinDebt, debtInfo?: StablecoinDebtInfo) {
    const sdk = this.sdkProvider;
    let principalAmount = BN_ZERO;

    if (!debtInfo) {
      const debtInfoResponse = await sdk.query.cdp.StablecoinDebt(QueryStablecoinDebtRequest.fromPartial({}));
      debtInfo = debtInfoResponse.stablecoinDebtInfo;
    }
    if (!debtInfo) return BN_ZERO;

    if (!debt) {
      const debtResp = await sdk.query.cdp.AccountStablecoin(QueryAccountStablecoinRequest.fromPartial({ address: account }));
      debt = debtResp;
    }

    principalAmount = bnOrZero(debt.principalDebt);
    const initialCIM = bnOrZero(debt.initialCumulativeInterestMultiplier);
    const cim = await this.recalculateStablecoinCIM(debtInfo);
    if (!cim) throw new Error("unable to retrieve account debt");

    return principalAmount.times(cim).dividedToIntegerBy(initialCIM);
  }

  public static calculateInterestAPY = (debtInfo: DebtInfo, rateStrategy: RateStrategyParams) => {
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
    debtInfo?: DebtInfo,
    assetParams?: AssetParams,
    rateStrategyParams?: RateStrategyParams
  ): Promise<BigNumber> {
    const sdk = this.sdkProvider;

    if (!debtInfo) {
      const debtInfoResponse = await sdk.query.cdp.TokenDebt(QueryTokenDebtRequest.fromPartial({ denom }));
      debtInfo = debtInfoResponse.debtInfo;
      if (!debtInfo) throw new Error("unable to retrieve debt info for " + denom);
    }

    if (!rateStrategyParams) {
      if (!assetParams) {
        const assetResponse = await sdk.query.cdp.Asset(QueryAssetRequest.fromPartial({ denom }));
        assetParams = assetResponse.assetParams;
        if (!assetParams) {
          throw new Error("unable to retrieve asset param for " + denom);
        }
      }

      const rateStrategyParamsResponse = await sdk.query.cdp.RateStrategy(
        QueryRateStrategyRequest.fromPartial({
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

  public async calculateLendAPY(denom: string, borrowInterest?: BigNumber, debtInfo?: DebtInfo, params?: Params) {
    const sdk = this.sdkProvider;

    if (!debtInfo) {
      const debtInfoResponse = await sdk.query.cdp.TokenDebt(QueryTokenDebtRequest.fromPartial({ denom }));
      debtInfo = debtInfoResponse.debtInfo;
      if (!debtInfo) {
        throw new Error("unable to retrieve debt info for " + denom);
      }
    }

    if (!borrowInterest) {
      borrowInterest = await this.calculateAPY(denom, debtInfo);
    }

    if (!params) {
      const paramsResponse = await sdk.query.cdp.Params(QueryCdpParamsRequest.fromPartial({}));
      params = paramsResponse.params;
      if (!params) {
        throw new Error("unable to retrieve cdp params for " + denom);
      }
    }

    const interestFeeRate = bnOrZero(params.interestFee).div(BN_10000);
    const utilizationRate = bnOrZero(debtInfo.utilizationRate).shiftedBy(-18);
    return borrowInterest.times(utilizationRate).times(BN_ONE.minus(interestFeeRate));
  }

  public async recalculateCIM(denom: string, debtInfo?: DebtInfo): Promise<{ cim: BigNumber; interest: BigNumber }> {
    const sdk = this.sdkProvider;
    if (!debtInfo) {
      const debtInfoResponse = await sdk.query.cdp.TokenDebt(QueryTokenDebtRequest.fromPartial({ denom }));
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

  public async recalculateStablecoinCIM(debtInfo?: StablecoinDebtInfo) {
    const sdk = this.sdkProvider;
    if (!debtInfo) {
      const debtInfoResponse = await sdk.query.cdp.StablecoinDebt(QueryStablecoinDebtRequest.fromPartial({}));
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

  public async getMaxCollateralForUnlock(account: string, cdpDenom: string) {
    const sdk = this.sdkProvider;

    const denom = this.getUnderlyingDenom(cdpDenom);

    const assetParams = await sdk.query.cdp.Asset({ denom: denom });
    if (!assetParams.assetParams) return;
    let unlockRatio = new BigNumber(assetParams.assetParams.loanToValue);
    if (sdk.getConfig().network === Network.LocalHost || sdk.getConfig().network === Network.DevNet) {
      unlockRatio = new BigNumber(assetParams.assetParams.liquidationThreshold);
    }

    const accountDataRequest = this.getAccountData(account);
    const tokenPriceRequest = sdk.query.pricing.TokenPrice({ denom });
    // take the min of cdpTokensUnlockableAmt and locked tokens
    const accountCollateralRequest = sdk.query.cdp.AccountCollateral({
      address: account,
      cdpDenom: cdpDenom,
    });
    const cdpParamsPromise = sdk.query.cdp.Params(QueryParamsRequest.fromPartial({}));

    const [accountData, tokenPrice, accountCollateral, cdpParamsResponse] = await Promise.all([accountDataRequest, tokenPriceRequest, accountCollateralRequest, cdpParamsPromise]);

  
    const tokenTwap = bnOrZero(tokenPrice.tokenPrice?.twap);
    if (tokenTwap.isZero()) throw new Error("unable to retrieve token price for " + denom);

    const tokenDecimals = (await sdk.getTokenClient().getDecimals(denom)) ?? 0;
    const availableBorrowsUsd = accountData.AvailableBorrowsUsd.minus(accountData.TotalDebtsUsd);
    const unlockableUsd = availableBorrowsUsd.multipliedBy(BN_10000).div(unlockRatio);

    const tokenAmt = unlockableUsd.div(tokenTwap.shiftedBy(-18)).shiftedBy(tokenDecimals);
    const interestFee = bnOrZero(cdpParamsResponse.params?.interestFee);
    const cdpToActualRatio = (await this.getCdpToActualRatio(cdpDenom, interestFee)) ?? BN_ZERO;
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

  public async getCdpTokenPrice(cdpDenom: string) {
    const sdk = this.sdkProvider;
    const denom = this.getUnderlyingDenom(cdpDenom);

    const cdpParamsResponse = await sdk.query.cdp.Params(QueryParamsRequest.fromPartial({}));
    const interestFee = bnOrZero(cdpParamsResponse.params?.interestFee);

    const cdpToActualRatio = (await this.getCdpToActualRatio(cdpDenom, interestFee)) ?? BN_ZERO;
    const tokenPrice = await sdk.query.pricing.TokenPrice({ denom: denom });
    const tokenTwap = bnOrZero(tokenPrice.tokenPrice?.twap).shiftedBy(-18);
    return tokenTwap.multipliedBy(cdpToActualRatio);
  }

  public getUnderlyingDenom(cdpDenom: string) {
    const denom = this.sdkProvider.getTokenClient().getCdpUnderlyingToken(cdpDenom)?.denom;
    if (!denom) throw new Error("underlying denom not found for " + cdpDenom);
    return denom;
  }

  public async getMaxCollateralForLiquidator(debtor: string, cdpDenom: string, debtDenom: string, debtRepaymentAmount: BigNumber) {
    const sdk = this.sdkProvider;

    // get the discounted price for the cdp token
    const cdpActualDenom = this.getUnderlyingDenom(cdpDenom);
    const assetPromise = sdk.query.cdp.Asset({
      denom: cdpActualDenom,
    });
    const cdpParamsPromise = sdk.query.cdp.Params(QueryParamsRequest.fromPartial({}));
    const debtorAccountCollateralPromise = sdk.query.cdp.AccountCollateral({
      address: debtor,
      cdpDenom: cdpDenom,
    });
    const [asset, cdpParamsResponse, debtorAccountCollateral] = await Promise.all([assetPromise, cdpParamsPromise, debtorAccountCollateralPromise]);
    if (!cdpParamsResponse.params) {
      throw new Error("unable to retrieve cdp params");
    }
    if (!asset.assetParams) throw new Error("unable to retrieve asset param for " + cdpActualDenom);
    if (!debtorAccountCollateral.collateral) {
      throw Error("unable to retrieve debtor's collateral amount");
    }
    const bonus = bnOrZero(asset.assetParams.liquidationDiscount).div(BN_10000);
    const cdpTokenPrice = await this.getCdpTokenPrice(cdpDenom);
    const cdpTokenDiscountedPrice = cdpTokenPrice.multipliedBy(BN_ONE.minus(bonus));

    // get close factor
    const debtorAccountData = await sdk.query.cdp.AccountData({
      address: debtor,
    });
    const debtorTotalCollateralVal = bnOrZero(debtorAccountData.totalCollateralsUsd);
    const debtorTotalDebtVal = bnOrZero(debtorAccountData.totalDebtsUsd);
    const currentLiqThreshold = bnOrZero(debtorAccountData.currLiquidationThreshold);

    const smallLiqSize = bnOrZero(cdpParamsResponse.params.smallLiquidationSize);
    const minCloseFactor = bnOrZero(cdpParamsResponse.params.minimumCloseFactor);
    const completeLiqThreshold = bnOrZero(cdpParamsResponse.params.completeLiquidationThreshold);
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
    const liquidationFee = cdpParamsResponse.params.liquidationFee;
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
    cdpDenom: string;
    amount: BigNumber;
  }
  export interface LockCollateralParams {
    cdpDenom: string;
    amount: BigNumber;
  }
  export interface UnlockCollateralParams {
    cdpDenom: string;
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
  }
  export interface SupplyAssetAndLockCollateralParams {
    denom: string;
    supplyAmount: BigNumber;
    lockAmount: BigNumber;
  }
  export interface UnlockCollateralAndWithdrawAssetParams {
    cdpDenom: string;
    unlockAmount: BigNumber;
    withdrawAmount: BigNumber;
  }
  export interface LiquidateCollateralParams {
    debtor: string;
    collateralDenom: string;
    minCollateralAmount: BigNumber;
    debtDenom: string;
    debtAmount: BigNumber;
  }
  export interface LiquidateCollateralWithCdpTokensParams {
    debtor: string;
    collateralDenom: string;
    minCollateralAmount: BigNumber;
    debtDenom: string;
    debtAmount: BigNumber;
    debtCollateralDenom: string;
    debtCollateralAmount: BigNumber;
  }
  export interface LiquidateCollateralWithCollateralParams {
    debtor: string;
    collateralDenom: string;
    minCollateralAmount: BigNumber;
    debtDenom: string;
    debtAmount: BigNumber;
    debtCollateralDenom: string;
    debtCollateralAmount: BigNumber;
  }
  export interface LiquidateCollateralWithStablecoinParams {
    debtor: string;
    collateralDenom: string;
    minCollateralAmount: BigNumber;
    debtDenom: string;
    debtAmount: BigNumber;
    interestDenom: string;
    interestAmount: BigNumber;
  }
  export interface LiquidateCollateralWithStablecoinAndInterestInCdpTokensParams {
    debtor: string;
    collateralDenom: string;
    minCollateralAmount: BigNumber;
    debtDenom: string;
    debtAmount: BigNumber;
    interestCdpDenom: string;
    interestCdpAmount: BigNumber;
  }
  export interface LiquidateCollateralWithStablecoinAndInterestInCollateralParams {
    debtor: string;
    collateralDenom: string;
    minCollateralAmount: BigNumber;
    debtDenom: string;
    debtAmount: BigNumber;
    interestCdpDenom: string;
    interestCdpAmount: BigNumber;
  }
  export interface RepayAssetWithCdpTokensParams {
    debtor?: string;
    debtDenom: string;
    cdpDenom: string;
    cdpAmount: BigNumber;
  }
  export interface RepayAssetWithGroupedToken {
    denom: string;
    amount: BigNumber;
    debtor?: string;
  }
  export interface RepayAssetWithCollateralParams {
    debtor?: string;
    debtDenom: string;
    cdpDenom: string;
    cdpAmount: BigNumber;
  }
  export interface MintStablecoinParams {
    amount: BigNumber;
  }

  export interface ReturnStablecoinParams {
    principalAmount: BigNumber;
    interestDenom: string;
    interestAmount: BigNumber;
    debtor: string;
  }

  export interface UpdateRateStrategyParams {
    rateStrategyParams: RateStrategyParams;
  }
  export interface StablecoinDebt {
    principalDebt: string;
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

  export interface ReturnStablecoinWithInterestInCdpTokensParams {
    principalAmount: BigNumber;
    interestCdpDenom: string;
    interestCdpAmount: BigNumber;
    debtor: string;
  }

  export interface ReturnStablecoinWithInterestInCollateralParams {
    principalAmount: BigNumber;
    interestCdpDenom: string;
    interestCdpAmount: BigNumber;
    debtor: string;
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

  export interface ChangeAccountEModeParams {
    creator: string;
    eModeCategoryName: string;
  }
}
