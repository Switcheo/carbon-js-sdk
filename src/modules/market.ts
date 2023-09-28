import { Carbon } from "@carbon-sdk/CarbonSDK";
import { Duration } from "@carbon-sdk/codec/google/protobuf/duration";
import { MsgAddFeeTier, MsgCreateMarket, MsgDisableSpotMarket, MsgRemoveFeeTier, MsgSetStakeEquivalence, MsgUpdateFeeTier, MsgUpdateMarket } from "@carbon-sdk/codec/market/tx";
import { CarbonTx } from "@carbon-sdk/util";
import { BigNumber } from "bignumber.js";
import BaseModule from "./base";

export class MarketModule extends BaseModule {

  public async getFeeTiers(marketType: string): Promise<Carbon.Market.FeeTier[]> {
    const fetchDataResponse: Carbon.Market.QueryGetFeeTiersResponse = await this.sdkProvider.query.market.FeeTiers({
      marketType: marketType,
      marketName: '',
      userAddress: '',
    })
    return fetchDataResponse?.feeTiers ?? []
  }

  public async getTradingFees(marketName: string, userAddress: string): Promise<Carbon.Market.TradingFees> {
    const fetchDataResponse: Carbon.Market.QueryGetTradingFeesResponse = await this.sdkProvider.query.market.TradingFees({
      marketName: marketName,
      userAddress: userAddress,
    })
    return fetchDataResponse?.fees ?? { takerFee: '', makerFee: '' }
  }
  
  public async update(params: MarketModule.UpdateMarketParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgUpdateMarket.fromPartial({
      updater: wallet.bech32Address,
      marketParams: transfromUpdateMarketParams(params),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgUpdateMarket,
        value,
      },
      opts
    );
  }

  public async createMarket(params: MarketModule.CreateMarketParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const value = MsgCreateMarket.fromPartial({
      creator: params.creator,
      marketType: params.marketType,
      base: params.base,
      quote: params.quote,
      currentBasePriceUsd: params.currentBasePriceUsd,
      currentQuotePriceUsd: params.currentQuotePriceUsd,
      indexOracleId: params.indexOracleId,
      expiryTime: params.expiryTime,
    })
    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgCreateMarket,
        value,
      },
      opts
    );
  }

  public async disableSpotMarket(params: MarketModule.DisableSpotMarketParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const value = MsgDisableSpotMarket.fromPartial({
      creator: params.creator,
      marketName: params.marketName,
    })
    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgDisableSpotMarket,
        value,
      },
      opts
    );
  }


  public async addFeeTier(params: MarketModule.AddFeeTierParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const value = MsgAddFeeTier.fromPartial({
      creator: params.creator,
      feeCategory: params.feeCategory,
      feeTier: transformFeeTierParams(params.feeTier),
    })
    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgAddFeeTier,
        value,
      },
      opts
    );
  }

  public async updateFeeTier(params: MarketModule.UpdateFeeTierParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const feeTier = transformFeeTierParams(params.feeTier)
    const value = MsgUpdateFeeTier.fromPartial({
      updater: params.updater,
      feeCategory: params.feeCategory,
      requiredStake: feeTier.requiredStake,
      takerFee: feeTier.tradingFees?.takerFee,
      makerFee: feeTier.tradingFees?.makerFee,
    })
    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgUpdateFeeTier,
        value,
      },
      opts
    );
  }

  public async removeFeeTier(params: MarketModule.RemoveFeeTierParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const value = MsgRemoveFeeTier.fromPartial({
      remover: params.remover,
      feeCategory: params.feeCategory,
      requiredStake: params.requiredStake,
    })
    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgRemoveFeeTier,
        value,
      },
      opts
    );
  }

  public async setStakeEquivalence(params: MarketModule.SetStakeEquivalenceParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const value = MsgSetStakeEquivalence.fromPartial({
      setter: params.setter,
      stakeEquivalence: {
        ratio: params.stakeEquivalence.ratio.shiftedBy(18).toString(10),
        denom: params.stakeEquivalence.denom
      }
    })
    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgSetStakeEquivalence,
        value,
      },
      opts
    );
  }
}

export namespace MarketModule {
  export interface UpdateMarketParams {
    name: string;
    displayName?: string;
    description?: string;
    lotSize: BigNumber;
    tickSize: BigNumber;
    minQuantity: BigNumber;
    makerFee: BigNumber;
    takerFee: BigNumber;
    /** futures only */
    riskStepSize: BigNumber;
    initialMarginBase: BigNumber;
    initialMarginStep: BigNumber;
    maintenanceMarginRatio: BigNumber;
    maxLiquidationOrderTicket: BigNumber;
    maxLiquidationOrderDuration?: Duration;
    impactSize: BigNumber;
    markPriceBand?: number;
    lastPriceProtectedBand?: number;
    isActive?: boolean;
    tradingBandwidth?: number;
  }

  export interface CreateMarketParams {
    creator: string;
    marketType: string;
    base: string;
    quote: string;
    currentBasePriceUsd: string;
    currentQuotePriceUsd: string;
    indexOracleId: string;
    expiryTime?: Date;
  }
  export interface DisableSpotMarketParams {
    creator: string;
    marketName: string;
  }

  export interface AddFeeTierParams {
    creator: string;
    feeCategory: Carbon.Market.FeeCategory;
    feeTier: FeeTierParams;
  }
  export interface UpdateFeeTierParams {
    updater: string;
    feeCategory: Carbon.Market.FeeCategory;
    feeTier: FeeTierParams,
  }

  export interface RemoveFeeTierParams {
    remover: string;
    feeCategory: Carbon.Market.FeeCategory;
    requiredStake: string;
  }
  export interface FeeTierParams {
    requiredStake: string,
    makerFee: BigNumber,
    takerFee: BigNumber,
  }
  export interface SetStakeEquivalenceParams {
    setter: string;
    stakeEquivalence: StakeEquivalenceParams;
  }
  export interface StakeEquivalenceParams {
    denom: string,
    ratio: BigNumber
  }
}

export function transformFeeTierParams(msg: MarketModule.FeeTierParams): Carbon.Market.FeeTier {
  return {
    requiredStake: msg.requiredStake,
    tradingFees: {
      makerFee: msg.makerFee.shiftedBy(18).toString(10),
      takerFee: msg.takerFee.shiftedBy(18).toString(10),
    }
  }
}

export function transfromUpdateMarketParams(msg: MarketModule.UpdateMarketParams) {
  return {
    name: msg.name,
    displayName: msg.displayName,
    description: msg.description,
    lotSize: msg.lotSize.toString(10),
    tickSize: msg.tickSize.shiftedBy(18).toString(10),
    minQuantity: msg.minQuantity.toString(10),
    makerFee: msg.makerFee.shiftedBy(18).toString(10),
    takerFee: msg.takerFee.shiftedBy(18).toString(10),
    riskStepSize: msg.riskStepSize.toString(10),
    initialMarginBase: msg.initialMarginBase.shiftedBy(18).toString(10),
    initialMarginStep: msg.initialMarginStep.shiftedBy(18).toString(10),
    maintenanceMarginRatio: msg.maintenanceMarginRatio.shiftedBy(18).toString(10),
    maxLiquidationOrderTicket: msg.maxLiquidationOrderTicket.toString(10),
    maxLiquidationOrderDuration: msg.maxLiquidationOrderDuration,
    impactSize: msg.impactSize.toString(10),
    markPriceBand: msg.markPriceBand,
    lastPriceProtectedBand: msg.lastPriceProtectedBand,
    isActive: msg.isActive,
    tradingBandwidth: msg.tradingBandwidth,
  };
}


