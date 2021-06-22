import { MsgCancelOrder, MsgCreateOrder } from "@carbon-sdk/codec/order/tx";
import { CarbonTx } from "@carbon-sdk/util/tx";
import BaseModule from "./base";
import { BigNumber } from "bignumber.js";

export class ModOrder extends BaseModule {

  public async create(params: ModOrder.CreateOrderParams) {
    const wallet = this.getWallet();

    const value = MsgCreateOrder.fromPartial({
      creator: wallet.bech32Address,
      isPostOnly: params.isPostOnly,
      isReduceOnly: params.isReduceOnly,
      market: params.market,
      orderType: params.orderType,
      price: params.price.toString(10),
      quantity: params.quantity.toString(10),
      side: params.side,
      stopPrice: params.stopPrice?.toString(10),
      timeInForce: params.timeInForce,
      triggerType: params.triggerType,
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgCreateOrder,
      value,
    });
  }

  public async createOrders(orderParams: ModOrder.CreateOrderParams[]) {
    const wallet = this.getWallet();

    Promise.all(orderParams.map(async params => {
      const value = MsgCreateOrder.fromPartial({
        creator: wallet.bech32Address,
        isPostOnly: params.isPostOnly,
        isReduceOnly: params.isReduceOnly,
        market: params.market,
        orderType: params.orderType,
        price: params.price.toString(10),
        quantity: params.quantity.toString(10),
        side: params.side,
        stopPrice: params.stopPrice?.toString(10),
        timeInForce: params.timeInForce,
        triggerType: params.triggerType,
      })

      return await wallet.sendTx({
        typeUrl: CarbonTx.Types.MsgCreateOrder,
        value,
      });
    }))
  }

  public async cancel(orderId: string) {
    const wallet = this.getWallet();
    
    const value: MsgCancelOrder = {
      creator: wallet.bech32Address,
      id: orderId,
    };
    
    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgCancelOrder,
      value,
    });
  }
}

export namespace ModOrder {
  export interface CreateOrderParams {
    market: string

    side: "buy" | "sell"
    orderType: "limit" | "market" | "stop-limit" | "stop-market" | "liquidation"

    price: BigNumber
    quantity: BigNumber
    stopPrice?: BigNumber

    timeInForce?: "gtc" | "fok" | "ioc"
    triggerType?: "last_price" | "mark_price" | "index_price"

    isPostOnly?: boolean
    isReduceOnly?: boolean
  }
};
