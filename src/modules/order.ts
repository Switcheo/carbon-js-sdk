import { MsgSetLeverage } from "@carbon-sdk/codec/Switcheo/carbon/leverage/tx";
import { MsgCancelAll, MsgCancelOrder, MsgCreateOrder, MsgEditOrder } from "@carbon-sdk/codec/Switcheo/carbon/order/tx";
import { CarbonTx } from "@carbon-sdk/util";
import { BN_ZERO } from "@carbon-sdk/util/number";
import { getDefaultTimeInForce, isMarket } from "@carbon-sdk/util/order";
import { EncodeObject } from "@cosmjs/proto-signing";
import { BigNumber } from "bignumber.js";
import BaseModule from "./base";

export class OrderModule extends BaseModule {
  public async create(param: OrderModule.CreateOrderParams, opts?: CarbonTx.SignTxOpts) {
    return this.createOrders([param], opts);
  }

  public async createOrders(params: (OrderModule.CreateOrderParams | OrderModule.SetLeverageParams)[], opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const msgs: EncodeObject[] = params.map((param) => {
      const creator = param.creator ?? wallet.bech32Address;

      if ("leverage" in param) {
        return {
          typeUrl: CarbonTx.Types.MsgSetLeverage,
          value: MsgSetLeverage.fromPartial({
            creator,
            marketId: param.marketId,
            leverage: param.leverage.shiftedBy(18).toString(10),
          }),
        };
      }

      return {
        typeUrl: CarbonTx.Types.MsgCreateOrder,
        value: MsgCreateOrder.fromPartial({
          creator,
          isPostOnly: param.isPostOnly,
          isReduceOnly: param.isReduceOnly,
          marketId: param.marketId,
          orderType: param.orderType,
          price: param.price?.shiftedBy(18).toString(10),
          quantity: param.quantity.toString(10),
          side: param.side,
          stopPrice: param.stopPrice?.shiftedBy(18).toString(10),
          timeInForce: param.timeInForce || getDefaultTimeInForce(isMarket(param.orderType)),
          triggerType: param.triggerType,
          referralAddress: param.referralAddress,
          referralCommission: param.referralCommission,
          referralKickback: param.referralKickback,
        }),
      };
    });

    return await wallet.sendTxs(msgs, opts);
  }

  public async cancel(params: OrderModule.CancelOrderParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();
    const creator = params.creator ?? wallet.bech32Address;
    const id = params.id;
    const value: MsgCancelOrder = {
      creator,
      id,
    };

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgCancelOrder,
        value,
      },
      opts
    );
  }

  public async cancelOrders(params: OrderModule.CancelOrderParams[], opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const msgs = params.map((p) => {
      const creator = p.creator ?? wallet.bech32Address;
      const value: MsgCancelOrder = {
        creator,
        id: p.id,
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
    const creator = params.creator ?? wallet.bech32Address;

    const value = MsgEditOrder.fromPartial({
      creator,
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
      const creator = param.creator ?? wallet.bech32Address;
      const value = MsgEditOrder.fromPartial({
        creator,
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
    const creator = params.creator ?? wallet.bech32Address;

    const value = MsgCancelAll.fromPartial({
      creator,
      marketId: params.marketId,
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
    creator?: string;
    marketId: string;

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
  }

  export interface SetLeverageParams {
    creator?: string;
    marketId: string;
    leverage: BigNumber;
  }

  export interface SetLeverageAndCreateOrderParams extends CreateOrderParams {
    setLeverage?: BigNumber;
  }

  export interface EditOrderParams {
    creator?: string;
    id: string;
    quantity: BigNumber;
    price: BigNumber;
    timeInForce?: OrderModule.TimeInForce;
    stopPrice?: BigNumber;
  }
  export interface CancelOrderParams {
    creator?: string;
    id: string;
  }
  export interface CancelAllParams {
    creator?: string;
    marketId: string;
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
