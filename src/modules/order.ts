import { MsgCancelAll, MsgCancelOrder, MsgCreateOrder, MsgEditOrder } from "@carbon-sdk/codec/order/tx";
import { CarbonTx } from "@carbon-sdk/util";
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
      price: params.price?.shiftedBy(18).toString(10),
      quantity: params.quantity.toString(10),
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

  public async createOrders(params: OrderModule.CreateOrderParams[]) {
    const wallet = this.getWallet();

    const msgs = params.map(params => {
      const value = MsgCreateOrder.fromPartial({
        creator: wallet.bech32Address,
        isPostOnly: params.isPostOnly,
        isReduceOnly: params.isReduceOnly,
        market: params.market,
        orderType: params.orderType,
        price: params.price?.shiftedBy(18).toString(10),
        quantity: params.quantity.toString(10),
        side: params.side,
        stopPrice: params.stopPrice?.shiftedBy(18).toString(10),
        timeInForce: params.timeInForce,
        triggerType: params.triggerType,
        referralAddress: params.referralAddress,
        referralCommission: params.referralCommission,
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

  public async cancelOrders(orderIds: string[]) {
    const wallet = this.getWallet();

    const msgs = orderIds.map(id => {
      const value: MsgCancelOrder = {
        creator: wallet.bech32Address,
        id,
      };

      return {
        typeUrl: CarbonTx.Types.MsgCancelOrder,
        value,
      }
    })
    
    return await wallet.sendTxs(msgs, CarbonTx.DEFAULT_SIGN_OPTS);
  }

  public async edit(params: OrderModule.EditOrderParams) {
    const wallet = this.getWallet();

    const value = MsgEditOrder.fromPartial({
      creator: wallet.bech32Address,
      id: params.id,
      price: params.price.shiftedBy(18).toString(10),
      quantity: params.quantity.toString(10),
      stopPrice: params.stopPrice.shiftedBy(18).toString(10),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgEditOrder,
      value,
    });
  }

  public async editOrders(params: OrderModule.EditOrderParams[]) {
    const wallet = this.getWallet();

    const msgs = params.map(param => {
      const value = MsgEditOrder.fromPartial({
        creator: wallet.bech32Address,
        id: param.id,
        price: param.price.shiftedBy(18).toString(10),
        quantity: param.quantity.toString(10),
        stopPrice: param.stopPrice.shiftedBy(18).toString(10),
      })

      return {
        typeUrl: CarbonTx.Types.MsgEditOrder,
        value,
      }
    })

    return await wallet.sendTxs(msgs, CarbonTx.DEFAULT_SIGN_OPTS);
  }

  public async cancelAll(params: OrderModule.CancelAllParams) {
    const wallet = this.getWallet();

    const value = MsgCancelAll.fromPartial({
      creator: wallet.bech32Address,
      market: params.market
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgCancelAll,
      value,
    });
  }
}

export namespace OrderModule {
  export interface CreateOrderParams {
    market: string

    side: OrderSide
    orderType: OrderType

    price?: BigNumber
    quantity: BigNumber
    stopPrice?: BigNumber

    timeInForce?: TimeInForce
    triggerType?: TriggerType

    isPostOnly?: boolean
    isReduceOnly?: boolean

    referralAddress?: string
    /** commission percents, input 10 for 10% */
    referralCommission?: number
  }

  export interface EditOrderParams {
    id: string
    quantity: BigNumber
    price: BigNumber
    stopPrice: BigNumber
  }

  export interface CancelAllParams {
    market: string
  }

  export enum OrderType {
    Limit = "limit",
    Market = "market",
    StopLimit = "stop-limit",
    StopMarket = "stop-market",
    Liquidation = "liquidation",
  }

  export enum OrderSide {
    Buy = "buy",
    Sell = "sell",
  }

  export enum TriggerType {
    LastPrice = "last_price",
    MarkPrice = "mark_price",
    IndexPrice = "index_price",
  }

  export enum TimeInForce {
    Gtc = "gtc",
    Fok = "fok",
    Ioc = "ioc",
  }
};
