import {
  Any,
  MsgAddAsset,
  MsgAddRateStrategy,
  MsgRemoveRateStrategy,
  MsgSetInterestFee,
  MsgSetLiquidationFee,
  MsgSetStablecoinInterestRate,
  MsgUpdateAsset,
  MsgUpdateRateStrategy,
  SettlementPriceParams,
  MsgSetCompleteLiquidationThreshold,
  MsgSetMinimumCloseFactor,
  MsgSetSmallLiquidationSize,
} from "@carbon-sdk/codec";
import {
  MsgAuthorizeBridge,
  MsgBindToken,
  MsgCreateToken,
  MsgUpdateToken,
  MsgDeauthorizeBridge,
  MsgLinkToken,
  MsgSyncToken,
  MsgUnbindToken,
  MsgCreateGroup,
  MsgRegisterToGroup,
  MsgDeregisterFromGroup,
  MsgUpdateGroup,
  MsgUpdateGroupedTokenConfig,
} from "@carbon-sdk/codec/coin/tx";
import { Coin } from "@carbon-sdk/codec/cosmos/base/v1beta1/coin";
import { Description } from "@carbon-sdk/codec/cosmos/staking/v1beta1/staking";
import { MsgCreateValidator, MsgEditValidator } from "@carbon-sdk/codec/cosmos/staking/v1beta1/tx";
import { MsgSetGasCost, MsgSetMinGasPrice, MsgRemoveGasCost, MsgRemoveMinGasPrice } from "@carbon-sdk/codec/fee/tx";
import {
  MsgSetCommitmentCurve,
  MsgSetRewardCurve,
  MsgSetRewardsWeights,
  MsgUpdatePool,
} from "@carbon-sdk/codec/liquiditypool/tx";
import { MsgCreateMarket } from "@carbon-sdk/codec/market/tx";
import { MsgCreateOracle } from "@carbon-sdk/codec/oracle/tx";
import { MsgSetTradingFlag } from "@carbon-sdk/codec/order/tx";
import { CarbonWallet } from "@carbon-sdk/wallet";
import { CarbonTx } from "@carbon-sdk/util";
import BigNumber from "bignumber.js";
import Long from "long";
import BaseModule from "./base";

export class AdminModule extends BaseModule {
  public async createOracle(params: AdminModule.CreateOracleParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgCreateOracle.fromPartial({
      creator: wallet.bech32Address,
      createOracleParams: transfromCreateOracleParams(params, wallet.bech32Address),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgCreateOracle,
        value,
      },
      opts
    );
  }

  public async createToken(params: AdminModule.CreateTokenParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgCreateToken.fromPartial({
      creator: wallet.bech32Address,
      createTokenParams: transfromCreateTokenParams(params, wallet.bech32Address),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgCreateToken,
        value,
      },
      opts
    );
  }

  public async createTokens(params: AdminModule.CreateTokenParams[], opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const msgs = params.map((param) => {
      const value = MsgCreateToken.fromPartial({
        creator: wallet.bech32Address,
        createTokenParams: transfromCreateTokenParams(param, wallet.bech32Address),
      });

      return {
        typeUrl: CarbonTx.Types.MsgCreateToken,
        value,
      };
    });

    return await wallet.sendTxs(msgs, opts);
  }

  public async syncToken(params: AdminModule.SyncTokenParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgSyncToken.fromPartial(transfromSyncTokenParams(params, wallet.bech32Address));

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgSyncToken,
        value,
      },
      opts
    );
  }

  public async bindToken(params: AdminModule.BindTokenParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgBindToken.fromPartial({
      creator: wallet.bech32Address,
      sourceDenom: params.sourceDenom,
      wrappedDenom: params.wrappedDenom,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgBindToken,
        value,
      },
      opts
    );
  }

  public async unbindToken(params: AdminModule.UnbindTokenParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgUnbindToken.fromPartial({
      creator: wallet.bech32Address,
      wrappedDenom: params.wrappedDenom,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgUnbindToken,
        value,
      },
      opts
    );
  }

  public async updateToken(params: AdminModule.UpdateTokenParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgUpdateToken.fromPartial({
      updater: wallet.bech32Address,
      denom: params.denom,
      updateTokenParams: {
        name: params.name,
        symbol: params.symbol,
        decimals: params.decimals,
        isActive: params.isActive,
      },
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgUpdateToken,
        value,
      },
      opts
    );
  }

  public async linkToken(params: AdminModule.LinkTokenParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgLinkToken.fromPartial({
      creator: wallet.bech32Address,
      denom: params.denom,
      bridgeAddress: params.bridgeAddress,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgLinkToken,
        value,
      },
      opts
    );
  }

  public async createMarket(params: AdminModule.CreateMarketParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgCreateMarket.fromPartial({
      creator: wallet.bech32Address,
      marketType: params.marketType,
      base: params.base,
      quote: params.quote,
      currentBasePriceUsd: params.currentBasePriceUsd.shiftedBy(18).toString(10), // types.Dec
      currentQuotePriceUsd: params.currentQuotePriceUsd.shiftedBy(18).toString(10), // types.Dec
      indexOracleId: params.indexOracleId ?? "",
      expiryTime: params.expiryTime ?? new Date(0),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgCreateMarket,
        value,
      },
      opts
    );
  }

  public async createMarkets(params: AdminModule.CreateMarketParams[], opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const msgs = params.map((param: AdminModule.CreateMarketParams) => {
      const value = MsgCreateMarket.fromPartial({
        creator: wallet.bech32Address,
        marketType: param.marketType,
        base: param.base,
        quote: param.quote,
        currentBasePriceUsd: param.currentBasePriceUsd.toString(10),
        currentQuotePriceUsd: param.currentQuotePriceUsd.toString(10),
        indexOracleId: param.indexOracleId ?? "",
        ...(param.expiryTime && { expiryTime: param.expiryTime }),
      });

      return {
        typeUrl: CarbonTx.Types.MsgCreateMarket,
        value,
      };
    });

    return await wallet.sendTxs(msgs, opts);
  }


  public async setRewardsWeights(params: AdminModule.SetRewardsWeightsParams[], opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgSetRewardsWeights.fromPartial({
      creator: wallet.bech32Address,
      setRewardsWeightsParams: transfromSetRewardsWeightsParams(params),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgSetRewardsWeights,
        value,
      },
      opts
    );
  }

  public async setRewardCurve(params: AdminModule.SetRewardCurveParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgSetRewardCurve.fromPartial({
      creator: wallet.bech32Address,
      setRewardCurveParams: transfromSetRewardCurveParams(params),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgSetRewardCurve,
        value,
      },
      opts
    );
  }

  public async setCommitmentCurve(params: AdminModule.SetCommitmentCurveParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgSetCommitmentCurve.fromPartial({
      creator: wallet.bech32Address,
      setCommitmentCurveParams: transfromSetCommitmentCurveParams(params),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgSetCommitmentCurve,
        value,
      },
      opts
    );
  }

  public async updatePool(params: AdminModule.UpdatePoolParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgUpdatePool.fromPartial({
      creator: wallet.bech32Address,
      updatePoolParams: transfromUpdatePoolParams(params),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgUpdatePool,
        value,
      },
      opts
    );
  }

  public async setTradingFlag(params: AdminModule.SetTradingFlagParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgSetTradingFlag.fromPartial(transfromSetTradingFlagParams(params, wallet.bech32Address));

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgSetTradingFlag,
        value,
      },
      opts
    );
  }

  public async setMsgFee(params: AdminModule.SetMsgFeeParams) {
    throw new Error("deprecated");
  }

  public async setMsgGasCost(params: AdminModule.SetMsgGasCostParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgSetGasCost.fromPartial({
      creator: wallet.bech32Address,
      setGasCostParams: transfromSetMsgGasCostParams(params),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgSetGasCost,
        value,
      },
      opts
    );
  }

  public async setMinGasPrice(params: AdminModule.SetMinGasPriceParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgSetMinGasPrice.fromPartial({
      creator: wallet.bech32Address,
      setMinGasPriceParams: transfromSetMinGasPriceParams(params),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgSetMinGasPrice,
        value,
      },
      opts
    );
  }

  public async removeMsgGasCost(params: AdminModule.RemoveMsgGasCostParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgRemoveGasCost.fromPartial({
      creator: wallet.bech32Address,
      msgType: params.msgType,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgRemoveGasCost,
        value,
      },
      opts
    );
  }

  public async removeMinGasPrice(params: AdminModule.RemoveMinGasPriceParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgRemoveMinGasPrice.fromPartial({
      creator: wallet.bech32Address,
      denom: params.denom,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgRemoveMinGasPrice,
        value,
      },
      opts
    );
  }

  public async createValidator(params: AdminModule.CreateValidatorParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgCreateValidator.fromPartial({
      delegatorAddress: params.delegatorAddress,
      validatorAddress: params.validatorAddress,
      minSelfDelegation: params.minSelfDelegation.toString(10),
      description: params.description,
      pubkey: params.pubkey,
      ...(params.commission && {
        commission: {
          rate: params.commission.rate.shiftedBy(18).toString(10),
          maxRate: params.commission.maxRate.shiftedBy(18).toString(10),
          maxChangeRate: params.commission.maxChangeRate.shiftedBy(18).toString(10),
        },
      }),
      ...(params.value && {
        value: {
          denom: params.value.denom,
          amount: params.value.amount.toString(10),
        },
      }),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgCreateValidator,
        value,
      },
      opts
    );
  }

  public async editValidator(params: AdminModule.EditValidatorParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgEditValidator.fromPartial({
      description: params.description,
      validatorAddress: params.validatorAddress,
      commissionRate: params.commissionRate.shiftedBy(18).toString(10),
      minSelfDelegation: params.minSelfDelegation.toString(10),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgEditValidator,
        value,
      },
      opts
    );
  }

  public async authorizeBridge(params: AdminModule.AuthorizeBridgeParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgAuthorizeBridge.fromPartial({
      creator: wallet.bech32Address,
      bridgeId: new Long(params.bridgeId),
      chainId: new Long(params.chainId),
      chainName: params.chainName,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgAuthorizeBridge,
        value,
      },
      opts
    );
  }

  public async deauthorizeBridge(params: AdminModule.DeauthorizeBridgeParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgDeauthorizeBridge.fromPartial({
      initiator: wallet.bech32Address,
      bridgeId: new Long(params.bridgeId),
      chainId: new Long(params.chainId),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgDeauthorizeBridge,
        value,
      },
      opts
    );
  }

  public async addRateStrategy(params: AdminModule.AddRateStrategyParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgAddRateStrategy.fromPartial({
      creator: wallet.bech32Address,
      rateStrategyParams: {
        name: params.rateStrategy.name,
        optimalUsage: params.rateStrategy.optimalUsage.toString(10),
        baseVariableBorrowRate: params.rateStrategy.baseVariableBorrowRate.toString(10),
        variableRateSlope1: params.rateStrategy.variableRateSlope1.toString(10),
        variableRateSlope2: params.rateStrategy.variableRateSlope2.toString(10),
        baseStableBorrowRate: params.rateStrategy.baseStableBorrowRate.toString(10),
        stableRateSlope1: params.rateStrategy.stableRateSlope1.toString(10),
        stableRateSlope2: params.rateStrategy.stableRateSlope2.toString(10),
        optimalStableToTotalDebtRatio: params.rateStrategy.optimalStableToTotalDebtRatio.toString(10),
      },
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgAddRateStrategy,
        value,
      },
      opts
    );
  }

  public async updateRateStrategy(params: AdminModule.UpdateRateStrategyParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgUpdateRateStrategy.fromPartial({
      creator: wallet.bech32Address,
      rateStrategyParams: {
        name: params.rateStrategy.name,
        optimalUsage: params.rateStrategy.optimalUsage.toString(10),
        baseVariableBorrowRate: params.rateStrategy.baseVariableBorrowRate.toString(10),
        variableRateSlope1: params.rateStrategy.variableRateSlope1.toString(10),
        variableRateSlope2: params.rateStrategy.variableRateSlope2.toString(10),
        baseStableBorrowRate: params.rateStrategy.baseStableBorrowRate.toString(10),
        stableRateSlope1: params.rateStrategy.stableRateSlope1.toString(10),
        stableRateSlope2: params.rateStrategy.stableRateSlope2.toString(10),
        optimalStableToTotalDebtRatio: params.rateStrategy.optimalStableToTotalDebtRatio.toString(10),
      },
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgUpdateRateStrategy,
        value,
      },
      opts
    );
  }

  public async removeRateStrategy(params: AdminModule.RemoveRateStrategyParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgRemoveRateStrategy.fromPartial({
      creator: wallet.bech32Address,
      name: params.name,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgRemoveRateStrategy,
        value,
      },
      opts
    );
  }

  public async addAsset(params: AdminModule.AddAssetParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgAddAsset.fromPartial({
      creator: wallet.bech32Address,
      assetParams: {
        denom: params.asset.denom,
        oracleId: params.asset.oracleId,
        rateStrategyName: params.asset.rateStrategyName,
        loanToValue: params.asset.loanToValue.toString(10),
        liquidationThreshold: params.asset.liquidationThreshold.toString(10),
        liquidationDiscount: params.asset.liquidationDiscount.toString(10),
        supplyCap: params.asset.supplyCap.toString(10),
        borrowCap: params.asset.borrowCap.toString(10),
      },
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgAddAsset,
        value,
      },
      opts
    );
  }

  public async updateAsset(params: AdminModule.UpdateAssetParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgUpdateAsset.fromPartial({
      creator: wallet.bech32Address,
      assetParams: {
        denom: params.denom,
        rateStrategyName: params.rateStrategyName,
        allowRepayStablecoinInterestDebt: params.allowRepayStablecoinInterestDebt,
        loanToValue: params.loanToValue.toString(10),
        liquidationThreshold: params.liquidationThreshold.toString(10),
        liquidationDiscount: params.liquidationDiscount.toString(10),
        supplyCap: params.supplyCap.toString(10),
        borrowCap: params.borrowCap.toString(10),
      },
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgUpdateAsset,
        value,
      },
      opts
    );
  }

  public async setLiquidationFee(params: AdminModule.SetLiquidationFeeParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgSetLiquidationFee.fromPartial({
      creator: wallet.bech32Address,
      liquidationFee: params.liquidationFee.toString(10),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgSetLiquidationFee,
        value,
      },
      opts
    );
  }

  public async setInterestFee(params: AdminModule.SetInterestFeeParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgSetInterestFee.fromPartial({
      creator: wallet.bech32Address,
      interestFee: params.interestFee.toString(10),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgSetInterestFee,
        value,
      },
      opts
    );
  }

  public async setStableCoinInterestRate(params: AdminModule.SetStableCoinInterestRateParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgSetStablecoinInterestRate.fromPartial({
      creator: wallet.bech32Address,
      stablecoinInterestRate: params.stablecoinInterestRate.toString(10),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgSetStablecoinInterestRate,
        value,
      },
      opts
    );
  }

  public async setCompleteLiquidationThreshold(params: AdminModule.SetCompleteLiquidationThresholdParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const value = MsgSetCompleteLiquidationThreshold.fromPartial({
      creator: wallet.bech32Address,
      completeLiquidationThreshold: params.completeLiquidationThreshold.shiftedBy(18).toString(10),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgSetCompleteLiquidationThreshold,
        value,
      },
      opts
    );
  }

  public async setMinimumCloseFactor(params: AdminModule.SetMinimumCloseFactorParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const value = MsgSetMinimumCloseFactor.fromPartial({
      creator: wallet.bech32Address,
      minimumCloseFactor: params.minimumCloseFactor.shiftedBy(18).toString(10),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgSetMinimumCloseFactor,
        value,
      },
      opts
    );
  }

  public async setSmallLiquidationSize(params: AdminModule.SetSmallLiquidationSizeParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const value = MsgSetSmallLiquidationSize.fromPartial({
      creator: wallet.bech32Address,
      smallLiquidationSize: params.smallLiquidationSize.shiftedBy(18).toString(10),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgSetSmallLiquidationSize,
        value,
      },
      opts
    );
  }

  public async createNewGroup(params: AdminModule.CreateNewGroupParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const value = MsgCreateGroup.fromPartial({
      creator: params.creator ?? wallet.bech32Address,
      name: params.name,
      chequeTokenSymbol: params.chequeTokenSymbol,
      oracleId: params.oracleId,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgCreateGroup,
        value,
      },
      opts
    );
  }

  public async updateGroup(params: AdminModule.UpdateGroupParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const value = MsgUpdateGroup.fromPartial({
      creator: params.creator ?? wallet.bech32Address,
      groupId: params.groupId,
      updateGroupParams: params.updateGroupParams
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgUpdateGroup,
        value,
      },
      opts
    );
  }

  public async registerToGroup(params: AdminModule.RegisterDeregisterToGroupParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const value = MsgRegisterToGroup.fromPartial({
      creator: params.creator ?? wallet.bech32Address,
      groupId: params.groupId,
      denom: params.denom,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgRegisterToGroup,
        value,
      },
      opts
    );
  }

  public async deregisterFromGroup(params: AdminModule.RegisterDeregisterToGroupParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const value = MsgDeregisterFromGroup.fromPartial({
      creator: params.creator ?? wallet.bech32Address,
      groupId: params.groupId,
      denom: params.denom,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgDeregisterFromGroup,
        value,
      },
      opts
    );
  }

  public async updateGroupConfig(params: AdminModule.UpdateGroupConfigParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const value = MsgUpdateGroupedTokenConfig.fromPartial({
      creator: params.creator ?? wallet.bech32Address,
      denom: params.denom,
      updateGroupedTokenConfigParams: params.updateGroupedTokenConfigParams,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgUpdateGroupedTokenConfig,
        value,
      },
      opts
    );
  }
}

export namespace AdminModule {
  export interface AuthorizeBridgeParams {
    bridgeId: number;
    chainId: number;
    chainName: string;
  }

  export interface DeauthorizeBridgeParams {
    initiator: string;
    bridgeId: number;
    chainId: number;
  }

  export interface CreateOracleParams {
    id: string;
    description: string;
    minTurnoutPercentage: number;
    maxResultAge: number;
    securityType: string;
    resultStrategy: string;
    resolution: number;
    spec: string;
  }

  export interface CreateTokenParams {
    creator: string;
    name: string;
    symbol: string;
    decimals: number;
    chainId: number;
    bridgeId: number;
    bridgeAddress: string;
    tokenAddress: string;
  }

  export interface UpdateTokenParams {
    denom: string;
    name?: string;
    symbol?: string;
    decimals?: number;
    isActive?: boolean;
  }

  export interface SyncTokenParams {
    denom: string;
  }

  export interface BindTokenParams {
    sourceDenom: string;
    wrappedDenom: string;
  }

  export interface LinkTokenParams {
    denom: string;
    bridgeAddress: string;
  }

  export interface UnbindTokenParams {
    wrappedDenom: string;
  }

  export interface CreateMarketParams {
    marketType: string;
    base: string;
    quote: string;
    currentBasePriceUsd: BigNumber;
    currentQuotePriceUsd: BigNumber;

    /** futures only */
    indexOracleId?: string;
    expiryTime?: Date;
  }

  export interface CreateVaultTypeParams {
    collateralDenom: string;
    debtDenom: string;
    collateralizationRatio: BigNumber;
  }

  export interface LinkPoolParams {
    poolId: number;
    market: string;
  }

  export interface UnlinkPoolParams {
    poolId: number;
  }

  export interface UpdatePoolParams {
    poolId: number;
    swapFee: BigNumber;
    numQuotes: number;
  }

  export interface SetRewardsWeightsParams {
    poolId: number;
    weight: number;
  }

  export interface SetRewardCurveParams {
    startTime: Date;
    initialRewardBps: number;
    reductionMultiplierBps: number;
    reductionIntervalSeconds: number;
    reductions: number;
    finalRewardBps: number;
  }

  export interface SetCommitmentCurveParams {
    maxDuration: number;
    maxRewardMultiplier: number;
  }

  export interface ChangeNumQuotesParams {
    poolId: number;
    numQuotes: number;
  }

  export interface SetTradingFlagParams {
    isEnabled: boolean;
    blockchain: string;
  }

  export interface SetMsgFeeParams {
    msgType: string;
    fee: BigNumber;
  }

  export interface SetMsgGasCostParams {
    msgType: string;
    gasCost: BigNumber;
  }

  export interface SetMinGasPriceParams {
    denom: string;
    gasPrice: BigNumber;
  }

  export interface RemoveMsgGasCostParams {
    msgType: string;
  }
  export interface RemoveMinGasPriceParams {
    denom: string;
  }

  export interface SetMsgGasCostParams {
    msgType: string;
    gasCost: BigNumber;
  }

  export interface CreateValidatorParams {
    description?: Description;
    commission?: {
      rate: BigNumber;
      maxRate: BigNumber;
      maxChangeRate: BigNumber;
    };
    minSelfDelegation: BigNumber;
    delegatorAddress: string;
    validatorAddress: string;
    pubkey?: Any;
    value?: {
      denom: string;
      amount: BigNumber;
    };
  }

  export interface EditValidatorParams {
    description?: Description;
    validatorAddress: string;
    commissionRate: BigNumber;
    minSelfDelegation: BigNumber;
  }
  export interface RateStrategy {
    name: string;
    optimalUsage: BigNumber;
    baseVariableBorrowRate: BigNumber;
    variableRateSlope1: BigNumber;
    variableRateSlope2: BigNumber;
    baseStableBorrowRate: BigNumber;
    stableRateSlope1: BigNumber;
    stableRateSlope2: BigNumber;
    optimalStableToTotalDebtRatio: BigNumber;
  }
  export interface Asset {
    denom: string;
    oracleId: string;
    rateStrategyName: string;
    loanToValue: BigNumber;
    liquidationThreshold: BigNumber;
    liquidationDiscount: BigNumber;
    supplyCap: BigNumber;
    borrowCap: BigNumber;
  }
  export interface AddRateStrategyParams {
    rateStrategy: RateStrategy;
  }
  export interface UpdateRateStrategyParams {
    rateStrategy: RateStrategy;
  }
  export interface RemoveRateStrategyParams {
    name: string;
  }
  export interface AddAssetParams {
    asset: Asset;
  }
  export interface UpdateAssetParams {
    denom: string;
    rateStrategyName?: string;
    allowRepayStablecoinInterestDebt?: boolean;
    loanToValue: BigNumber;
    liquidationThreshold: BigNumber;
    liquidationDiscount: BigNumber;
    supplyCap: BigNumber;
    borrowCap: BigNumber;
  }
  export interface SetLiquidationFeeParams {
    liquidationFee: BigNumber;
  }

  export interface SetInterestFeeParams {
    interestFee: BigNumber;
  }

  export interface SetStableCoinInterestRateParams {
    stablecoinInterestRate: BigNumber;
  }

  export interface SetCompleteLiquidationThresholdParams {
    completeLiquidationThreshold: BigNumber;
  }

  export interface SetMinimumCloseFactorParams {
    minimumCloseFactor: BigNumber;
  }

  export interface SetSmallLiquidationSizeParams {
    smallLiquidationSize: BigNumber;
  }

  export interface CreateRewardSchemeParams {
    rewardDenom: string;
    assetDenom: string;
    rewardType: string;
    rewardAmountPerSecond: BigNumber;
    startTime?: Date;
    endTime?: Date;
  }

  export interface UpdateRewardSchemeParams {
    rewardSchemeId: number;
    rewardDenom?: string;
    assetDenom?: string;
    rewardType?: string;
    rewardAmountPerSecond: BigNumber;
    startTime?: Date;
    endTime?: Date;
  }

  export interface AddRewardReserveParams {
    creator?: string;
    rewardSchemeId: number;
    amount: BigNumber;
    denom: string;
  }

  export interface CreateNewGroupParams {
    creator?: string;
    name: string;
    chequeTokenSymbol: string;
    oracleId: string;
  }

  export interface UpdateGroupParams {
    creator?: string;
    groupId?: string;
    updateGroupParams?: GroupName;
  }

  export interface GroupName {
    name: string
  }

  export interface RegisterDeregisterToGroupParams {
    creator?: string;
    groupId: string;
    denom: string;
  }

  export interface UpdateGroupConfigParams {
    creator?: string;
    denom: string;
    updateGroupedTokenConfigParams: IsGroupActive;
  }

  export interface IsGroupActive {
    isActive: boolean
  }
}

export function transfromCreateOracleParams(msg: AdminModule.CreateOracleParams, address: string) {
  return {
    creator: address,
    id: msg.id,
    description: msg.description,
    minTurnoutPercentage: new Long(msg.minTurnoutPercentage),
    maxResultAge: new Long(msg.maxResultAge),
    securityType: msg.securityType,
    resultStrategy: msg.resultStrategy,
    resolution: new Long(msg.resolution),
    spec: msg.spec,
  };
}

export function transfromCreateTokenParams(msg: AdminModule.CreateTokenParams, address: string) {
  return {
    creator: address,
    name: msg.name,
    symbol: msg.symbol,
    decimals: new Long(msg.decimals),
    chainId: new Long(msg.chainId),
    bridgeId: new Long(msg.bridgeId),
    bridgeAddress: msg.bridgeAddress,
    tokenAddress: msg.tokenAddress,
  };
}

export function transfromSyncTokenParams(msg: AdminModule.SyncTokenParams, address: string) {
  return {
    syncer: address,
    denom: msg.denom,
  };
}

export function transfromLinkPoolParams(msg: AdminModule.LinkPoolParams) {
  return {
    poolId: new Long(msg.poolId),
    market: msg.market,
  };
}

export function transfromUnlinkPoolParams(msg: AdminModule.UnlinkPoolParams) {
  return {
    poolId: new Long(msg.poolId),
  };
}

export function transfromSetRewardsWeightsParams(msg: AdminModule.SetRewardsWeightsParams[]) {
  const weights = msg.map((param) => {
    return {
      poolId: new Long(param.poolId),
      weight: param.weight.toString(10),
    };
  });

  return {
    weights: weights,
  };
}

export function transfromSetRewardCurveParams(msg: AdminModule.SetRewardCurveParams) {
  return {
    startTime: msg.startTime,
    initialRewardBps: msg.initialRewardBps,
    reductionMultiplierBps: msg.reductionMultiplierBps,
    reductionIntervalSeconds: new Long(msg.reductionIntervalSeconds),
    reductions: msg.reductions,
    finalRewardBps: msg.finalRewardBps,
  };
}

export function transfromSetCommitmentCurveParams(msg: AdminModule.SetCommitmentCurveParams) {
  return {
    maxDuration: new Long(msg.maxDuration),
    maxRewardMultiplier: msg.maxRewardMultiplier,
  };
}

export function transfromUpdatePoolParams(msg: AdminModule.UpdatePoolParams) {
  return {
    poolId: new Long(msg.poolId),
    numQuotes: new Long(msg.numQuotes),
    swapFee: msg.swapFee.shiftedBy(18).toString(10),
  };
}

export function transfromSetTradingFlagParams(msg: AdminModule.SetTradingFlagParams, address: string) {
  return {
    creator: address,
    isEnabled: msg.isEnabled,
    blockchain: msg.blockchain,
  };
}

export function transfromSetMsgGasCostParams(msg: AdminModule.SetMsgGasCostParams) {
  return {
    msgType: msg.msgType,
    gasCost: msg.gasCost.toString(10),
  };
}

export function transfromSetMinGasPriceParams(msg: AdminModule.SetMinGasPriceParams) {
  return {
    denom: msg.denom,
    gasPrice: new BigNumber(msg.gasPrice).shiftedBy(18).toString(10),
  };
}

export function transformSetSettlementPriceParams(msg: SettlementPriceParams) {
  return {
    market: msg.market,
    settlementPrice: new BigNumber(msg.settlementPrice).shiftedBy(18).toString(10),
  };
}

export function transformCommunityPoolSpendAmount(amount: Coin[]) {
  const amounts = amount.map((param) => {
    return {
      denom: param.denom,
      amount: new BigNumber(param.amount).toString(10),
    } as Coin;
  });
  return amounts;
}
