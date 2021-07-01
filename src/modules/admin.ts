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

    const value = MsgCreateOracle.fromPartial(this.transfromCreateOracleParams(params))

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgCreateOracle,
      value,
    });
  }

  public async createToken(params: AdminModule.CreateTokenParams) {
    const wallet = this.getWallet();

    const value = MsgCreateToken.fromPartial(this.transfromCreateTokenParams(params))

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgCreateToken,
      value,
    });
  }

  public async createTokens(params: AdminModule.CreateTokenParams[]) {
    const wallet = this.getWallet();

    const msgs = params.map(param => {
      const value = MsgCreateToken.fromPartial(this.transfromCreateTokenParams(param))

      return {
        typeUrl: CarbonTx.Types.MsgCreateToken,
        value,
      }
    })

    return await wallet.sendTxs(msgs, CarbonTx.DEFAULT_SIGN_OPTS);
  }

  public async syncToken(params: AdminModule.SyncTokenParams) {
    const wallet = this.getWallet();

    const value = MsgSyncToken.fromPartial(this.transfromSyncTokenParams(params))

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgSyncToken,
      value,
    });
  }

  public async createMarket(params: AdminModule.CreateMarketParams) {
    const wallet = this.getWallet();

    const value = MsgCreateMarket.fromPartial({
        creator: wallet.bech32Address,
        market: this.transformCreateMarketParams(params)
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
          market: this.transformCreateMarketParams(param)
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

    const value = MsgCreateVaultType.fromPartial(this.transfromCreateVaultTypeParams(params))

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgCreateVaultType,
      value,
    });
  }

  public async linkPool(params: AdminModule.LinkPoolParams) {
    const wallet = this.getWallet();

    const value = MsgLinkPool.fromPartial({
        creator: wallet.bech32Address,
        linkPoolParams: this.transfromLinkPoolParams(params)
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
        unlinkPoolParams: this.transfromUnlinkPoolParams(params)
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
        changeSwapFeeParams:this.transfromChangeSwapFeeParams(params)
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgChangeSwapFee,
      value,
    });
  }

  public async setRewardsWeights(params: AdminModule.SetRewardsWeightsParams[]) {
    const wallet = this.getWallet();

    const value = MsgSetRewardsWeights.fromPartial({
        creator: wallet.bech32Address,
        setRewardsWeightsParams: this.transfromSetRewardsWeightsParams(params)
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
        setRewardCurveParams: this.transfromSetRewardCurveParams(params)
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
        setCommitmentCurveParams: this.transfromSetCommitmentCurveParams(params)
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgSetCommitmentCurve,
      value,
    });
  }

  public async setTradingFlag(params: AdminModule.SetTradingFlagParams) {
    const wallet = this.getWallet();

    const value = MsgSetTradingFlag.fromPartial(this.transfromSetTradingFlagParams(params))

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgSetTradingFlag,
      value,
    });
  }

  public async setMsgFee(params: AdminModule.SetMsgFeeParams) {
    const wallet = this.getWallet();

    const value = MsgSetFee.fromPartial({
        params: this.transfromSetMsgFeeParams(params)
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgSetFee,
      value,
    });
  }

  public transfromCreateOracleParams(msg: AdminModule.CreateOracleParams) {
    const wallet = this.getWallet();
    return {
      creator: wallet.bech32Address,
      id: msg.id,
      description: msg.description,
      minTurnoutPercentage: new Long(msg.minTurnoutPercentage),
      maxResultAge: new Long(msg.maxResultAge),
      securityType: msg.securityType,
      resultStrategy: msg.resultStrategy,
      resolution: new Long(msg.resolution),
      spec: msg.spec,
    }
  }

  public transfromCreateTokenParams(msg: AdminModule.CreateTokenParams) {
    const wallet = this.getWallet();
    return {
      creator: wallet.bech32Address,
      name: msg.name,
      symbol: msg.symbol,
      denom: msg.denom,
      decimals: new Long(msg.decimals),
      nativeDecimals: new Long(msg.nativeDecimals),
      blockchain: msg.blockchain,
      chainId: new Long(msg.chainId),
      assetId: msg.assetId,
      isCollateral: msg.isCollateral,
      lockProxyHash: msg.lockProxyHash,
      delegatedSupply: msg.delegatedSupply.toString(),
    }
  }

  public transfromSyncTokenParams(msg: AdminModule.SyncTokenParams) {
    const wallet = this.getWallet();
    return {
      syncer: wallet.bech32Address,
      denom: msg.denom,
    }
  }

  public transformCreateMarketParams(msg: AdminModule.CreateMarketParams) {
    const wallet = this.getWallet();
    return {
      name: msg.name,
      displayName: msg.displayName,
      description: msg.description,
      marketType: msg.marketType,
      base: msg.base,
      quote: msg.quote,
      lotSize: msg.lotSize.toString(),
      tickSize: msg.tickSize.shiftedBy(18).toString(),
      minQuantity: msg.minQuantity.toString(),
      makerFee: msg.makerFee.shiftedBy(18).toString(),
      takerFee: msg.takerFee.shiftedBy(18).toString(),
      riskStepSize: msg.riskStepSize.toString(),
      initialMarginBase: msg.initialMarginBase.shiftedBy(18).toString(),
      initialMarginStep: msg.initialMarginStep.shiftedBy(18).toString(),
      maintenanceMarginRatio: msg.maintenanceMarginRatio.shiftedBy(18).toString(),
      maxLiquidationOrderTicket: msg.maxLiquidationOrderTicket.toString(),
      maxLiquidationOrderDuration: msg.maxLiquidationOrderDuration,
      impactSize: msg.impactSize.toString(),
      markPriceBand: msg.markPriceBand,
      lastPriceProtectedBand: msg.lastPriceProtectedBand,
      indexOracleId: msg.indexOracleId,
      expiryTime: msg.expiryTime,
    }
  }

  public transfromCreateVaultTypeParams(msg: AdminModule.CreateVaultTypeParams) {
    const wallet = this.getWallet();
    return {
      creator: wallet.bech32Address,
      collateralDenom: msg.collateralDenom,
      debtDenom: msg.debtDenom,
      collateralizationRatio: msg.collateralizationRatio.shiftedBy(18).toString(),
    }
  }

  public transfromLinkPoolParams(msg: AdminModule.LinkPoolParams) {
    const wallet = this.getWallet();
    return {
      creator: wallet.bech32Address,
      poolId: new Long(msg.poolId),
      market: msg.market,
    }
  }

  public transfromUnlinkPoolParams(msg: AdminModule.UnlinkPoolParams) {
    const wallet = this.getWallet();
    return {
      creator: wallet.bech32Address,
      poolId: new Long(msg.poolId),
    }
  }

  public transfromChangeSwapFeeParams(msg: AdminModule.ChangeSwapFeeParams) {
    const wallet = this.getWallet();
    return {
      creator: wallet.bech32Address,
      poolId: new Long(msg.poolId),
      swapFee: msg.swapFee.shiftedBy(18).toString(),
    }
  }

  public transfromSetRewardsWeightsParams(msg: AdminModule.SetRewardsWeightsParams[]) {
    const wallet = this.getWallet();
    
    const weights = msg.map(param => {
      return {
        poolId: new Long(param.poolId),
        weight: param.weight.toString()
      }
    })

    return {
      creator: wallet.bech32Address,
      weights: weights
    }
  }

  public transfromSetRewardCurveParams(msg: AdminModule.SetRewardCurveParams) {
    const wallet = this.getWallet();
    return {
      creator: wallet.bech32Address,
      startTime: msg.startTime,
      initialRewardBps: msg.initialRewardBps,
      reductionMultiplierBps: msg.reductionMultiplierBps,
      reductionIntervalSeconds: new Long(msg.reductionIntervalSeconds),
      reductions: msg.reductions,
      finalRewardBps: msg.finalRewardBps,
    }
  }

  public transfromSetCommitmentCurveParams(msg: AdminModule.SetCommitmentCurveParams) {
    const wallet = this.getWallet();
    return {
      creator: wallet.bech32Address,
      maxDuration: new Long(msg.maxDuration),
      maxRewardMultiplier: msg.maxRewardMultiplier,
    }
  }

  public transfromSetTradingFlagParams(msg: AdminModule.SetTradingFlagParams) {
    const wallet = this.getWallet();
    return {
      creator: wallet.bech32Address,
      isEnabled: msg.isEnabled,
      blockchain: msg.blockchain
    }
  }

  public transfromSetMsgFeeParams(msg: AdminModule.SetMsgFeeParams) {
    const wallet = this.getWallet();
    return {
      creator: wallet.bech32Address,
      msgType: msg.msgType,
      fee: msg.fee.toString(),
    }
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

  export interface SetRewardsWeightsParams {
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
