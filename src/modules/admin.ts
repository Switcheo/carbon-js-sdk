import { MsgCreateOracle } from "@carbon-sdk/codec/oracle/tx";
import BaseModule from "./base";
import Long from "long";
import { CarbonTx } from "@carbon-sdk/util";
import { MsgCreateToken, MsgSyncToken } from "@carbon-sdk/codec/coin/tx";
import BigNumber from "bignumber.js";
import { MsgCreateMarket } from "@carbon-sdk/codec/market/tx";
import { Duration } from "@carbon-sdk/codec/google/protobuf/duration";
import { MsgCreateVaultType } from "@carbon-sdk/codec/cdp/tx";
import { MsgChangeSwapFee, MsgLinkPool, MsgSetCommitmentCurve, MsgSetRewardCurve, MsgSetRewardsWeights, MsgUnlinkPool } from "@carbon-sdk/codec/liquiditypool/tx";
import { MsgSetTradingFlag } from "@carbon-sdk/codec/order/tx";
import { MsgSetFee } from "@carbon-sdk/codec/fee/tx";

export class AdminModule extends BaseModule {

  public async createOracle(params: AdminModule.CreateOracleParams) {
    const wallet = this.getWallet();

    const value = MsgCreateOracle.fromPartial({
        creator: wallet.bech32Address,
        id: params.id,
        description: params.description,
        minTurnoutPercentage: new Long(params.minTurnoutPercentage),
        maxResultAge: new Long(params.maxResultAge),
        securityType: params.securityType,
        resultStrategy: params.resultStrategy,
        resolution: new Long(params.resolution),
        spec: params.spec,
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgCreateOracle,
      value,
    });
  }

  public async createToken(params: AdminModule.CreateTokenParams) {
    const wallet = this.getWallet();

    const value = MsgCreateToken.fromPartial({
        creator: wallet.bech32Address,
        name: params.name,
        symbol: params.symbol,
        denom: params.denom,
        decimals: new Long(params.decimals),
        nativeDecimals: new Long(params.nativeDecimals),
        blockchain: params.blockchain,
        chainId: new Long(params.chainId),
        assetId: params.assetId,
        isCollateral: params.isCollateral,
        lockProxyHash: params.lockProxyHash,
        delegatedSupply: params.delegatedSupply.toString(),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgCreateToken,
      value,
    });
  }

  public async createTokens(params: AdminModule.CreateTokenParams[]) {
    const wallet = this.getWallet();

    const msgs = params.map(param => {
      const value = MsgCreateToken.fromPartial({
        creator: wallet.bech32Address,
        name: param.name,
        symbol: param.symbol,
        denom: param.denom,
        decimals: new Long(param.decimals),
        nativeDecimals: new Long(param.nativeDecimals),
        blockchain: param.blockchain,
        chainId: new Long(param.chainId),
        assetId: param.assetId,
        isCollateral: param.isCollateral,
        lockProxyHash: param.lockProxyHash,
        delegatedSupply: param.delegatedSupply.toString(),
      })

      return {
        typeUrl: CarbonTx.Types.MsgCreateToken,
        value,
      }
    })

    return await wallet.sendTxs(msgs, CarbonTx.DEFAULT_SIGN_OPTS);
  }

  public async syncToken(params: AdminModule.SyncTokenParams) {
    const wallet = this.getWallet();

    const value = MsgSyncToken.fromPartial({
        syncer: wallet.bech32Address,
        denom: params.denom,
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgSyncToken,
      value,
    });
  }

  public async createMarket(params: AdminModule.CreateMarketParams) {
    const wallet = this.getWallet();

    const value = MsgCreateMarket.fromPartial({
        creator: wallet.bech32Address,
        market: {
          name: params.name,
          displayName: params.displayName,
          description: params.description,
          marketType: params.marketType,
          base: params.base,
          quote: params.quote,
          lotSize: params.lotSize.toString(),
          tickSize: params.tickSize.shiftedBy(18).toString(),
          minQuantity: params.minQuantity.toString(),
          makerFee: params.makerFee.shiftedBy(18).toString(),
          takerFee: params.takerFee.shiftedBy(18).toString(),
          riskStepSize: params.riskStepSize.toString(),
          initialMarginBase: params.initialMarginBase.shiftedBy(18).toString(),
          initialMarginStep: params.initialMarginStep.shiftedBy(18).toString(),
          maintenanceMarginRatio: params.maintenanceMarginRatio.shiftedBy(18).toString(),
          maxLiquidationOrderTicket: params.maxLiquidationOrderTicket.toString(),
          maxLiquidationOrderDuration: params.maxLiquidationOrderDuration,
          impactSize: params.impactSize.toString(),
          markPriceBand: params.markPriceBand,
          lastPriceProtectedBand: params.lastPriceProtectedBand,
          indexOracleId: params.indexOracleId,
          expiryTime: params.expiryTime,
        },
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgCreateMarket,
      value,
    });
  }

  public async createMarkets(params: AdminModule.CreateMarketParams[]) {
    const wallet = this.getWallet();

    const msgs = params.map(param => {
      const value = MsgCreateMarket.fromPartial({
          creator: wallet.bech32Address,
          market: {
            name: param.name,
            displayName: param.displayName,
            description: param.description,
            marketType: param.marketType,
            base: param.base,
            quote: param.quote,
            lotSize: param.lotSize.toString(),
            tickSize: param.tickSize.shiftedBy(18).toString(),
            minQuantity: param.minQuantity.toString(),
            makerFee: param.makerFee.shiftedBy(18).toString(),
            takerFee: param.takerFee.shiftedBy(18).toString(),
            riskStepSize: param.riskStepSize.toString(),
            initialMarginBase: param.initialMarginBase.shiftedBy(18).toString(),
            initialMarginStep: param.initialMarginStep.shiftedBy(18).toString(),
            maintenanceMarginRatio: param.maintenanceMarginRatio.shiftedBy(18).toString(),
            maxLiquidationOrderTicket: param.maxLiquidationOrderTicket.toString(),
            maxLiquidationOrderDuration: param.maxLiquidationOrderDuration,
            impactSize: param.impactSize.toString(),
            markPriceBand: param.markPriceBand,
            lastPriceProtectedBand: param.lastPriceProtectedBand,
            indexOracleId: param.indexOracleId,
            expiryTime: param.expiryTime,
          },
      })

      return {
        typeUrl: CarbonTx.Types.MsgCreateMarket,
        value,
      }
    })

    return await wallet.sendTxs(msgs, CarbonTx.DEFAULT_SIGN_OPTS);
  }

  public async createVaultType(params: AdminModule.CreateVaultTypeParams) {
    const wallet = this.getWallet();

    const value = MsgCreateVaultType.fromPartial({
        creator: wallet.bech32Address,
        collateralDenom: params.collateralDenom,
        debtDenom: params.debtDenom,
        collateralizationRatio: params.collateralizationRatio.shiftedBy(18).toString(),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgCreateVaultType,
      value,
    });
  }

  public async linkPool(params: AdminModule.LinkPoolParams) {
    const wallet = this.getWallet();

    const value = MsgLinkPool.fromPartial({
        creator: wallet.bech32Address,
        linkPoolParams: {
          creator: wallet.bech32Address,
          poolId: new Long(params.poolId),
          market: params.market,
        },
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgLinkPool,
      value,
    });
  }

  public async unlinkPool(params: AdminModule.UnlinkPoolParams) {
    const wallet = this.getWallet();

    const value = MsgUnlinkPool.fromPartial({
        creator: wallet.bech32Address,
        unlinkPoolParams: {
          creator: wallet.bech32Address,
          poolId: new Long(params.poolId),
        },
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgUnlinkPool,
      value,
    });
  }

  public async changeSwapFee(params: AdminModule.ChangeSwapFeeParams) {
    const wallet = this.getWallet();

    const value = MsgChangeSwapFee.fromPartial({
        creator: wallet.bech32Address,
        changeSwapFeeParams: {
          creator: wallet.bech32Address,
          poolId: new Long(params.poolId),
          swapFee: params.swapFee.shiftedBy(18).toString(),
        },
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgChangeSwapFee,
      value,
    });
  }

  public async setRewardsWeights(params: AdminModule.SetRewardsWeightParams[]) {
    const wallet = this.getWallet();

    const weights = params.map(param => {
      return {
        poolId: new Long(param.poolId),
        weight: param.weight.toString()
      }
    })

    const value = MsgSetRewardsWeights.fromPartial({
        creator: wallet.bech32Address,
        setRewardsWeightsParams: {
          creator: wallet.bech32Address,
          weights: weights
        },
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgSetRewardsWeights,
      value,
    });
  }

  public async setRewardCurve(params: AdminModule.SetRewardCurveParams) {
    const wallet = this.getWallet();

    const value = MsgSetRewardCurve.fromPartial({
        creator: wallet.bech32Address,
        setRewardCurveParams: {
          creator: wallet.bech32Address,
          startTime: params.startTime,
          initialRewardBps: params.initialRewardBps,
          reductionMultiplierBps: params.reductionMultiplierBps,
          reductionIntervalSeconds: new Long(params.reductionIntervalSeconds),
          reductions: params.reductions,
          finalRewardBps: params.finalRewardBps,
        },
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgSetRewardCurve,
      value,
    });
  }

  public async setCommitmentCurve(params: AdminModule.SetCommitmentCurveParams) {
    const wallet = this.getWallet();

    const value = MsgSetCommitmentCurve.fromPartial({
        creator: wallet.bech32Address,
        setCommitmentCurveParams: {
          creator: wallet.bech32Address,
          maxDuration: new Long(params.maxDuration),
          maxRewardMultiplier: params.maxRewardMultiplier,
        },
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgSetCommitmentCurve,
      value,
    });
  }

  public async setTradingFlag(params: AdminModule.SetTradingFlagParams) {
    const wallet = this.getWallet();

    const value = MsgSetTradingFlag.fromPartial({
        creator: wallet.bech32Address,
        isEnabled: params.isEnabled,
        blockchain: params.blockchain
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgSetTradingFlag,
      value,
    });
  }

  public async setMsgFee(params: AdminModule.SetMsgFeeParams) {
    const wallet = this.getWallet();

    const value = MsgSetFee.fromPartial({
        params: {
          creator: wallet.bech32Address,
          msgType: params.msgType,
          fee: params.fee.toString(),
        },
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgSetFee,
      value,
    });
  }

}

export namespace AdminModule {
  export interface CreateOracleParams {
    id: string
    description: string
    minTurnoutPercentage: number
    maxResultAge: number
    securityType: string
    resultStrategy: string
    resolution: number
    spec: string
  }

  export interface CreateTokenParams {
    name: string
    symbol: string
    denom: string
    decimals: number
    nativeDecimals: number
    blockchain: string
    chainId: number
    assetId: string
    isCollateral: boolean
    lockProxyHash: string
    delegatedSupply: BigNumber
  }

  export interface SyncTokenParams {
    denom: string
  }

  export interface CreateMarketParams {
    name: string
    displayName: string
    description: string
    marketType: string
    base: string
    quote: string
    lotSize: BigNumber
    tickSize: BigNumber
    minQuantity: BigNumber
    makerFee: BigNumber
    takerFee: BigNumber
    riskStepSize: BigNumber
    initialMarginBase: BigNumber
    initialMarginStep: BigNumber
    maintenanceMarginRatio: BigNumber
    maxLiquidationOrderTicket: BigNumber
    maxLiquidationOrderDuration: Duration
    impactSize: BigNumber
    markPriceBand: number
    lastPriceProtectedBand: number
    indexOracleId: string
    expiryTime: Date
  }

  export interface CreateVaultTypeParams {
    collateralDenom: string
    debtDenom: string
    collateralizationRatio: BigNumber
  }

  export interface LinkPoolParams {
    poolId: number
    market: string
  }
  
  export interface UnlinkPoolParams {
    poolId: number
  }

  export interface ChangeSwapFeeParams {
    poolId: number
    swapFee: BigNumber
  }

  export interface SetRewardsWeightParams {
    poolId: number
    weight: number
  }

  export interface SetRewardCurveParams {
    startTime: Date
    initialRewardBps: number
    reductionMultiplierBps: number
    reductionIntervalSeconds: number
    reductions: number
    finalRewardBps: number
  }

  export interface SetCommitmentCurveParams {
    maxDuration: number
    maxRewardMultiplier: number
  }

  export interface SetTradingFlagParams {
    isEnabled: boolean
    blockchain: string
  }

  export interface SetMsgFeeParams {
    msgType: string
    fee: BigNumber
  }
};
