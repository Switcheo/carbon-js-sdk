import { MsgCancelAll, MsgCancelOrder, MsgCreateOrder, MsgEditOrder } from "@carbon-sdk/codec/Switcheo/carbon/order/tx";
import { CarbonTx } from "@carbon-sdk/util";
import { BN_ZERO } from "@carbon-sdk/util/number";
import { getDefaultTimeInForce, isMarket } from "@carbon-sdk/util/order";
import { BigNumber } from "bignumber.js";
import { CarbonSDK } from "..";
import BaseModule from "./base";

export class OrderModule extends BaseModule {

  public async create(params: OrderModule.CreateOrderParams, opts?: CarbonTx.SignTxOpts) {

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
      timeInForce: params.timeInForce || getDefaultTimeInForce(isMarket(params.orderType)),
      triggerType: params.triggerType,
      referralAddress: params.referralAddress,
      referralCommission: params.referralCommission,
      referralKickback: params.referralKickback,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgCreateOrder,
        value,
      },
      opts
    );
  }

  public async createOrders(params: OrderModule.CreateOrderParams[], opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const msgs = params.map((params) => {
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
        timeInForce: params.timeInForce || getDefaultTimeInForce(isMarket(params.orderType)),
        triggerType: params.triggerType,
        referralAddress: params.referralAddress,
        referralCommission: params.referralCommission,
        referralKickback: params.referralKickback,
      });

      return {
        typeUrl: CarbonTx.Types.MsgCreateOrder,
        value,
      };
    });

    return await wallet.sendTxs(msgs, opts);
  }

  public async cancel(orderId: string, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value: MsgCancelOrder = {
      creator: wallet.bech32Address,
      id: orderId,
    };

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgCancelOrder,
        value,
      },
      opts
    );
  }

  public async cancelOrders(orderIds: string[], opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const msgs = orderIds.map((id) => {
      const value: MsgCancelOrder = {
        creator: wallet.bech32Address,
        id,
      };

      return {
        typeUrl: CarbonTx.Types.MsgCancelOrder,
        value,
      };
    });

    return await wallet.sendTxs(msgs, opts);
  }

  public async edit(params: OrderModule.EditOrderParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgEditOrder.fromPartial({
      creator: wallet.bech32Address,
      id: params.id,
      price: params.price.shiftedBy(18).toString(10),
      quantity: params.quantity.toString(10),
      stopPrice: (params.stopPrice?.shiftedBy(18) ?? BN_ZERO).toString(10),
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgEditOrder,
        value,
      },
      opts
    );
  }

  public async editOrders(params: OrderModule.EditOrderParams[], opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const msgs = params.map((param) => {
      const value = MsgEditOrder.fromPartial({
        creator: wallet.bech32Address,
        id: param.id,
        price: param.price.shiftedBy(18).toString(10),
        quantity: param.quantity.toString(10),
        stopPrice: (param.stopPrice?.shiftedBy(18) ?? BN_ZERO).toString(10),
      });

      return {
        typeUrl: CarbonTx.Types.MsgEditOrder,
        value,
      };
    });

    return await wallet.sendTxs(msgs, opts);
  }

  public async cancelAll(params: OrderModule.CancelAllParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = MsgCancelAll.fromPartial({
      creator: wallet.bech32Address,
      market: params.market,
    });

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgCancelAll,
        value,
      },
      opts
    );
  }
}

export namespace OrderModule {
  export interface CreateOrderParams {
    market: string;

    side: OrderSide;
    orderType: OrderType;

    price?: BigNumber;
    quantity: BigNumber;
    stopPrice?: BigNumber;

    timeInForce?: TimeInForce;
    triggerType?: TriggerType;

    isPostOnly?: boolean;
    isReduceOnly?: boolean;

    referralAddress?: string;
    /** commission percents, input 10 for 10% */
    referralCommission?: number;
    referralKickback?: number;

    network?: CarbonSDK.Network;
  }

  export interface EditOrderParams {
    id: string;
    quantity: BigNumber;
    price: BigNumber;
    timeInForce?: OrderModule.TimeInForce;
    stopPrice?: BigNumber;
  }

  export interface CancelAllParams {
    market: string;
  }

  export enum OrderType {
    Limit = "limit",
    Market = "market",
    StopLimit = "stop-limit",
    StopMarket = "stop-market",
    TakeProfitLimit = "take-profit-limit",
    TakeProfitMarket = "take-profit-market",
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
}
