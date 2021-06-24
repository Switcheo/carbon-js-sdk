import { MsgUpdateMarket } from "@carbon-sdk/codec/market/tx";
import { CarbonTx } from "@carbon-sdk/util/tx";
import BaseModule from "./base";
import { BigNumber } from "bignumber.js";
import {Duration} from "@carbon-sdk/codec/google/protobuf/duration";

export class MarketModule extends BaseModule {

  public async update(params: MarketModule.UpdateMarketParams) {
    const wallet = this.getWallet();

    const value = MsgUpdateMarket.fromPartial({
      creator: wallet.bech32Address,
      marketParams: {
          creator: wallet.bech32Address,
          name: params.name,
          displayName: params.displayName,
          description: params.description,
          minQuantity: params.minQuantity.toString(10),
          makerFee: params.makerFee.shiftedBy(18).toString(10),
          takerFee: params.takerFee.shiftedBy(18).toString(10),
          riskStepSize: params.riskStepSize.toString(10),
          initialMarginBase: params.initialMarginBase.shiftedBy(18).toString(10),
          initialMarginStep: params.initialMarginStep.shiftedBy(18).toString(10),
          maintenanceMarginRatio: params.maintenanceMarginRatio.shiftedBy(18).toString(10),
          maxLiquidationOrderTicket: params.maxLiquidationOrderTicket.toString(10),
          maxLiquidationOrderDuration: params.maxLiquidationOrderDuration,
          impactSize: params.impactSize.toString(10),
          markPriceBand: params.markPriceBand,
          lastPriceProtectedBand: params.lastPriceProtectedBand,
          isActive: params.isActive,
      },
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

  // interface Duration {
  //   seconds?: Long
  //   nanos?: number
  // }
};
