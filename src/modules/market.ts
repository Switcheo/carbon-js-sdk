import { MsgUpdateMarket } from "@carbon-sdk/codec/market/tx";
import { CarbonTx } from "@carbon-sdk/util/tx";
import BaseModule from "./base";
import { BigNumber } from "bignumber.js";
import {Duration} from "@carbon-sdk/codec/google/protobuf/duration";

export class MarketModule extends BaseModule {

  public async update(params: MarketModule.UpdateMarketParams) {
    const wallet = this.getWallet();

    const value = MsgUpdateMarket.fromPartial({
      updater: wallet.bech32Address,
      marketParams: transfromUpdateMarketParams(params)
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgUpdateMarket,
      value,
    });
  }
}

export namespace MarketModule {
  export interface UpdateMarketParams {
    name: string;
    displayName: string;
    description: string;
    minQuantity: BigNumber;
    makerFee: BigNumber;
    takerFee: BigNumber;
    /** futures only */
    riskStepSize: BigNumber;
    initialMarginBase: BigNumber;
    initialMarginStep: BigNumber;
    maintenanceMarginRatio: BigNumber;
    maxLiquidationOrderTicket: BigNumber;
    maxLiquidationOrderDuration: Duration;
    impactSize: BigNumber;
    markPriceBand: number;
    lastPriceProtectedBand: number;
    isActive: boolean;
  }
};

export function transfromUpdateMarketParams(msg: MarketModule.UpdateMarketParams) {
  return {
    name: msg.name,
    displayName: msg.displayName,
    description: msg.description,
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
  }
}
