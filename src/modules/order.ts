import { MsgCancelOrder, MsgCreateOrder } from "@carbon-sdk/codec/order/tx";
import { CarbonTx } from "@carbon-sdk/util/tx";
import BaseModule from "./base";
import { BigNumber } from "bignumber.js";

export class OrderModule extends BaseModule {

  public async create(params: OrderModule.CreateOrderParams) {
    const wallet = this.getWallet();

    const value = MsgCreateOrder.fromPartial({
      creator: wallet.bech32Address,
      isPostOnly: params.isPostOnly,
      isReduceOnly: params.isReduceOnly,
      market: params.market,
      orderType: params.orderType,
      price: params.price.shiftedBy(18).toString(10),
      quantity: params.quantity.shiftedBy(18).toString(10),
      side: params.side,
      stopPrice: params.stopPrice?.shiftedBy(18).toString(10),
      timeInForce: params.timeInForce,
      triggerType: params.triggerType,
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgCreateOrder,
      value,
    });
  }

  public async createOrders(orderParams: OrderModule.CreateOrderParams[]) {
    const wallet = this.getWallet();

    const msgs = orderParams.map(params => {
      const value = MsgCreateOrder.fromPartial({
        creator: wallet.bech32Address,
        isPostOnly: params.isPostOnly,
        isReduceOnly: params.isReduceOnly,
        market: params.market,
        orderType: params.orderType,
        price: params.price.shiftedBy(18).toString(10),
        quantity: params.quantity.shiftedBy(18).toString(10),
        side: params.side,
        stopPrice: params.stopPrice?.shiftedBy(18).toString(10),
        timeInForce: params.timeInForce,
        triggerType: params.triggerType,
      })

      return {
        typeUrl: CarbonTx.Types.MsgCreateOrder,
        value,
      }
    });
    
    return await wallet.sendTxs(msgs, CarbonTx.DEFAULT_SIGN_OPTS);
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

export namespace OrderModule {
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
