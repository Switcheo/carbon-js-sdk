/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { Timestamp } from "../google/protobuf/timestamp";

export const protobufPackage = "Switcheo.carbon.order";

/** Params defines the parameters for the market module. */
export interface Params {
  maxReferralCommission: number;
}

export interface Order {
  id: string;
  blockHeight: Long;
  blockCreatedAt?: Date;
  triggeredBlockHeight: Long;
  address: string;
  market: string;
  side: string;
  price: string;
  quantity: string;
  available: string;
  filled: string;
  status: string;
  orderType: string;
  initiator: string;
  timeInForce: string;
  stopPrice: string;
  triggerType: string;
  allocatedMargin?: Coin;
  isLiquidation: boolean;
  isPostOnly: boolean;
  isReduceOnly: boolean;
  poolId: Long;
  avgFilledPrice: string;
  referralAddress: string;
  referralCommission: number;
}

export interface DBOrder {
  order?: Order;
  allocatedMarginDenom: string;
  allocatedMarginAmount: string;
  username: string;
  lastUpdatedBlockHeight: Long;
}

export interface OrdersForMarket {
  marketId: string;
  orders: Order[];
}

export interface OrderIDsForMarket {
  marketId: string;
  orderIds: string[];
}

export interface OrderIDs {
  ids: string[];
}

export interface Orders {
  orders: Order[];
}

const baseParams: object = { maxReferralCommission: 0 };

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.maxReferralCommission !== 0) {
      writer.uint32(8).uint32(message.maxReferralCommission);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxReferralCommission = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    message.maxReferralCommission =
      object.maxReferralCommission !== undefined &&
      object.maxReferralCommission !== null
        ? Number(object.maxReferralCommission)
        : 0;
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maxReferralCommission !== undefined &&
      (obj.maxReferralCommission = message.maxReferralCommission);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.maxReferralCommission = object.maxReferralCommission ?? 0;
    return message;
  },
};

const baseOrder: object = {
  id: "",
  blockHeight: Long.ZERO,
  triggeredBlockHeight: Long.ZERO,
  address: "",
  market: "",
  side: "",
  price: "",
  quantity: "",
  available: "",
  filled: "",
  status: "",
  orderType: "",
  initiator: "",
  timeInForce: "",
  stopPrice: "",
  triggerType: "",
  isLiquidation: false,
  isPostOnly: false,
  isReduceOnly: false,
  poolId: Long.UZERO,
  avgFilledPrice: "",
  referralAddress: "",
  referralCommission: 0,
};

export const Order = {
  encode(message: Order, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (!message.blockHeight.isZero()) {
      writer.uint32(16).int64(message.blockHeight);
    }
    if (message.blockCreatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.blockCreatedAt),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (!message.triggeredBlockHeight.isZero()) {
      writer.uint32(32).int64(message.triggeredBlockHeight);
    }
    if (message.address !== "") {
      writer.uint32(42).string(message.address);
    }
    if (message.market !== "") {
      writer.uint32(50).string(message.market);
    }
    if (message.side !== "") {
      writer.uint32(58).string(message.side);
    }
    if (message.price !== "") {
      writer.uint32(66).string(message.price);
    }
    if (message.quantity !== "") {
      writer.uint32(74).string(message.quantity);
    }
    if (message.available !== "") {
      writer.uint32(82).string(message.available);
    }
    if (message.filled !== "") {
      writer.uint32(90).string(message.filled);
    }
    if (message.status !== "") {
      writer.uint32(98).string(message.status);
    }
    if (message.orderType !== "") {
      writer.uint32(106).string(message.orderType);
    }
    if (message.initiator !== "") {
      writer.uint32(114).string(message.initiator);
    }
    if (message.timeInForce !== "") {
      writer.uint32(122).string(message.timeInForce);
    }
    if (message.stopPrice !== "") {
      writer.uint32(130).string(message.stopPrice);
    }
    if (message.triggerType !== "") {
      writer.uint32(138).string(message.triggerType);
    }
    if (message.allocatedMargin !== undefined) {
      Coin.encode(message.allocatedMargin, writer.uint32(146).fork()).ldelim();
    }
    if (message.isLiquidation === true) {
      writer.uint32(152).bool(message.isLiquidation);
    }
    if (message.isPostOnly === true) {
      writer.uint32(160).bool(message.isPostOnly);
    }
    if (message.isReduceOnly === true) {
      writer.uint32(168).bool(message.isReduceOnly);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(176).uint64(message.poolId);
    }
    if (message.avgFilledPrice !== "") {
      writer.uint32(186).string(message.avgFilledPrice);
    }
    if (message.referralAddress !== "") {
      writer.uint32(194).string(message.referralAddress);
    }
    if (message.referralCommission !== 0) {
      writer.uint32(200).uint32(message.referralCommission);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Order {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrder } as Order;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.blockHeight = reader.int64() as Long;
          break;
        case 3:
          message.blockCreatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.triggeredBlockHeight = reader.int64() as Long;
          break;
        case 5:
          message.address = reader.string();
          break;
        case 6:
          message.market = reader.string();
          break;
        case 7:
          message.side = reader.string();
          break;
        case 8:
          message.price = reader.string();
          break;
        case 9:
          message.quantity = reader.string();
          break;
        case 10:
          message.available = reader.string();
          break;
        case 11:
          message.filled = reader.string();
          break;
        case 12:
          message.status = reader.string();
          break;
        case 13:
          message.orderType = reader.string();
          break;
        case 14:
          message.initiator = reader.string();
          break;
        case 15:
          message.timeInForce = reader.string();
          break;
        case 16:
          message.stopPrice = reader.string();
          break;
        case 17:
          message.triggerType = reader.string();
          break;
        case 18:
          message.allocatedMargin = Coin.decode(reader, reader.uint32());
          break;
        case 19:
          message.isLiquidation = reader.bool();
          break;
        case 20:
          message.isPostOnly = reader.bool();
          break;
        case 21:
          message.isReduceOnly = reader.bool();
          break;
        case 22:
          message.poolId = reader.uint64() as Long;
          break;
        case 23:
          message.avgFilledPrice = reader.string();
          break;
        case 24:
          message.referralAddress = reader.string();
          break;
        case 25:
          message.referralCommission = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Order {
    const message = { ...baseOrder } as Order;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
        ? Long.fromString(object.blockHeight)
        : Long.ZERO;
    message.blockCreatedAt =
      object.blockCreatedAt !== undefined && object.blockCreatedAt !== null
        ? fromJsonTimestamp(object.blockCreatedAt)
        : undefined;
    message.triggeredBlockHeight =
      object.triggeredBlockHeight !== undefined &&
      object.triggeredBlockHeight !== null
        ? Long.fromString(object.triggeredBlockHeight)
        : Long.ZERO;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.market =
      object.market !== undefined && object.market !== null
        ? String(object.market)
        : "";
    message.side =
      object.side !== undefined && object.side !== null
        ? String(object.side)
        : "";
    message.price =
      object.price !== undefined && object.price !== null
        ? String(object.price)
        : "";
    message.quantity =
      object.quantity !== undefined && object.quantity !== null
        ? String(object.quantity)
        : "";
    message.available =
      object.available !== undefined && object.available !== null
        ? String(object.available)
        : "";
    message.filled =
      object.filled !== undefined && object.filled !== null
        ? String(object.filled)
        : "";
    message.status =
      object.status !== undefined && object.status !== null
        ? String(object.status)
        : "";
    message.orderType =
      object.orderType !== undefined && object.orderType !== null
        ? String(object.orderType)
        : "";
    message.initiator =
      object.initiator !== undefined && object.initiator !== null
        ? String(object.initiator)
        : "";
    message.timeInForce =
      object.timeInForce !== undefined && object.timeInForce !== null
        ? String(object.timeInForce)
        : "";
    message.stopPrice =
      object.stopPrice !== undefined && object.stopPrice !== null
        ? String(object.stopPrice)
        : "";
    message.triggerType =
      object.triggerType !== undefined && object.triggerType !== null
        ? String(object.triggerType)
        : "";
    message.allocatedMargin =
      object.allocatedMargin !== undefined && object.allocatedMargin !== null
        ? Coin.fromJSON(object.allocatedMargin)
        : undefined;
    message.isLiquidation =
      object.isLiquidation !== undefined && object.isLiquidation !== null
        ? Boolean(object.isLiquidation)
        : false;
    message.isPostOnly =
      object.isPostOnly !== undefined && object.isPostOnly !== null
        ? Boolean(object.isPostOnly)
        : false;
    message.isReduceOnly =
      object.isReduceOnly !== undefined && object.isReduceOnly !== null
        ? Boolean(object.isReduceOnly)
        : false;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.avgFilledPrice =
      object.avgFilledPrice !== undefined && object.avgFilledPrice !== null
        ? String(object.avgFilledPrice)
        : "";
    message.referralAddress =
      object.referralAddress !== undefined && object.referralAddress !== null
        ? String(object.referralAddress)
        : "";
    message.referralCommission =
      object.referralCommission !== undefined &&
      object.referralCommission !== null
        ? Number(object.referralCommission)
        : 0;
    return message;
  },

  toJSON(message: Order): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.blockHeight !== undefined &&
      (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    message.blockCreatedAt !== undefined &&
      (obj.blockCreatedAt = message.blockCreatedAt.toISOString());
    message.triggeredBlockHeight !== undefined &&
      (obj.triggeredBlockHeight = (
        message.triggeredBlockHeight || Long.ZERO
      ).toString());
    message.address !== undefined && (obj.address = message.address);
    message.market !== undefined && (obj.market = message.market);
    message.side !== undefined && (obj.side = message.side);
    message.price !== undefined && (obj.price = message.price);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.available !== undefined && (obj.available = message.available);
    message.filled !== undefined && (obj.filled = message.filled);
    message.status !== undefined && (obj.status = message.status);
    message.orderType !== undefined && (obj.orderType = message.orderType);
    message.initiator !== undefined && (obj.initiator = message.initiator);
    message.timeInForce !== undefined &&
      (obj.timeInForce = message.timeInForce);
    message.stopPrice !== undefined && (obj.stopPrice = message.stopPrice);
    message.triggerType !== undefined &&
      (obj.triggerType = message.triggerType);
    message.allocatedMargin !== undefined &&
      (obj.allocatedMargin = message.allocatedMargin
        ? Coin.toJSON(message.allocatedMargin)
        : undefined);
    message.isLiquidation !== undefined &&
      (obj.isLiquidation = message.isLiquidation);
    message.isPostOnly !== undefined && (obj.isPostOnly = message.isPostOnly);
    message.isReduceOnly !== undefined &&
      (obj.isReduceOnly = message.isReduceOnly);
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.avgFilledPrice !== undefined &&
      (obj.avgFilledPrice = message.avgFilledPrice);
    message.referralAddress !== undefined &&
      (obj.referralAddress = message.referralAddress);
    message.referralCommission !== undefined &&
      (obj.referralCommission = message.referralCommission);
    return obj;
  },

  fromPartial(object: DeepPartial<Order>): Order {
    const message = { ...baseOrder } as Order;
    message.id = object.id ?? "";
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
        ? Long.fromValue(object.blockHeight)
        : Long.ZERO;
    message.blockCreatedAt = object.blockCreatedAt ?? undefined;
    message.triggeredBlockHeight =
      object.triggeredBlockHeight !== undefined &&
      object.triggeredBlockHeight !== null
        ? Long.fromValue(object.triggeredBlockHeight)
        : Long.ZERO;
    message.address = object.address ?? "";
    message.market = object.market ?? "";
    message.side = object.side ?? "";
    message.price = object.price ?? "";
    message.quantity = object.quantity ?? "";
    message.available = object.available ?? "";
    message.filled = object.filled ?? "";
    message.status = object.status ?? "";
    message.orderType = object.orderType ?? "";
    message.initiator = object.initiator ?? "";
    message.timeInForce = object.timeInForce ?? "";
    message.stopPrice = object.stopPrice ?? "";
    message.triggerType = object.triggerType ?? "";
    message.allocatedMargin =
      object.allocatedMargin !== undefined && object.allocatedMargin !== null
        ? Coin.fromPartial(object.allocatedMargin)
        : undefined;
    message.isLiquidation = object.isLiquidation ?? false;
    message.isPostOnly = object.isPostOnly ?? false;
    message.isReduceOnly = object.isReduceOnly ?? false;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.avgFilledPrice = object.avgFilledPrice ?? "";
    message.referralAddress = object.referralAddress ?? "";
    message.referralCommission = object.referralCommission ?? 0;
    return message;
  },
};

const baseDBOrder: object = {
  allocatedMarginDenom: "",
  allocatedMarginAmount: "",
  username: "",
  lastUpdatedBlockHeight: Long.ZERO,
};

export const DBOrder = {
  encode(
    message: DBOrder,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    if (message.allocatedMarginDenom !== "") {
      writer.uint32(18).string(message.allocatedMarginDenom);
    }
    if (message.allocatedMarginAmount !== "") {
      writer.uint32(26).string(message.allocatedMarginAmount);
    }
    if (message.username !== "") {
      writer.uint32(34).string(message.username);
    }
    if (!message.lastUpdatedBlockHeight.isZero()) {
      writer.uint32(40).int64(message.lastUpdatedBlockHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DBOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDBOrder } as DBOrder;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32());
          break;
        case 2:
          message.allocatedMarginDenom = reader.string();
          break;
        case 3:
          message.allocatedMarginAmount = reader.string();
          break;
        case 4:
          message.username = reader.string();
          break;
        case 5:
          message.lastUpdatedBlockHeight = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DBOrder {
    const message = { ...baseDBOrder } as DBOrder;
    message.order =
      object.order !== undefined && object.order !== null
        ? Order.fromJSON(object.order)
        : undefined;
    message.allocatedMarginDenom =
      object.allocatedMarginDenom !== undefined &&
      object.allocatedMarginDenom !== null
        ? String(object.allocatedMarginDenom)
        : "";
    message.allocatedMarginAmount =
      object.allocatedMarginAmount !== undefined &&
      object.allocatedMarginAmount !== null
        ? String(object.allocatedMarginAmount)
        : "";
    message.username =
      object.username !== undefined && object.username !== null
        ? String(object.username)
        : "";
    message.lastUpdatedBlockHeight =
      object.lastUpdatedBlockHeight !== undefined &&
      object.lastUpdatedBlockHeight !== null
        ? Long.fromString(object.lastUpdatedBlockHeight)
        : Long.ZERO;
    return message;
  },

  toJSON(message: DBOrder): unknown {
    const obj: any = {};
    message.order !== undefined &&
      (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    message.allocatedMarginDenom !== undefined &&
      (obj.allocatedMarginDenom = message.allocatedMarginDenom);
    message.allocatedMarginAmount !== undefined &&
      (obj.allocatedMarginAmount = message.allocatedMarginAmount);
    message.username !== undefined && (obj.username = message.username);
    message.lastUpdatedBlockHeight !== undefined &&
      (obj.lastUpdatedBlockHeight = (
        message.lastUpdatedBlockHeight || Long.ZERO
      ).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<DBOrder>): DBOrder {
    const message = { ...baseDBOrder } as DBOrder;
    message.order =
      object.order !== undefined && object.order !== null
        ? Order.fromPartial(object.order)
        : undefined;
    message.allocatedMarginDenom = object.allocatedMarginDenom ?? "";
    message.allocatedMarginAmount = object.allocatedMarginAmount ?? "";
    message.username = object.username ?? "";
    message.lastUpdatedBlockHeight =
      object.lastUpdatedBlockHeight !== undefined &&
      object.lastUpdatedBlockHeight !== null
        ? Long.fromValue(object.lastUpdatedBlockHeight)
        : Long.ZERO;
    return message;
  },
};

const baseOrdersForMarket: object = { marketId: "" };

export const OrdersForMarket = {
  encode(
    message: OrdersForMarket,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrdersForMarket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrdersForMarket } as OrdersForMarket;
    message.orders = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.orders.push(Order.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrdersForMarket {
    const message = { ...baseOrdersForMarket } as OrdersForMarket;
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.orders = (object.orders ?? []).map((e: any) => Order.fromJSON(e));
    return message;
  },

  toJSON(message: OrdersForMarket): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    if (message.orders) {
      obj.orders = message.orders.map((e) => (e ? Order.toJSON(e) : undefined));
    } else {
      obj.orders = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<OrdersForMarket>): OrdersForMarket {
    const message = { ...baseOrdersForMarket } as OrdersForMarket;
    message.marketId = object.marketId ?? "";
    message.orders = (object.orders ?? []).map((e) => Order.fromPartial(e));
    return message;
  },
};

const baseOrderIDsForMarket: object = { marketId: "", orderIds: "" };

export const OrderIDsForMarket = {
  encode(
    message: OrderIDsForMarket,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    for (const v of message.orderIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderIDsForMarket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrderIDsForMarket } as OrderIDsForMarket;
    message.orderIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.orderIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrderIDsForMarket {
    const message = { ...baseOrderIDsForMarket } as OrderIDsForMarket;
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.orderIds = (object.orderIds ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: OrderIDsForMarket): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    if (message.orderIds) {
      obj.orderIds = message.orderIds.map((e) => e);
    } else {
      obj.orderIds = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<OrderIDsForMarket>): OrderIDsForMarket {
    const message = { ...baseOrderIDsForMarket } as OrderIDsForMarket;
    message.marketId = object.marketId ?? "";
    message.orderIds = (object.orderIds ?? []).map((e) => e);
    return message;
  },
};

const baseOrderIDs: object = { ids: "" };

export const OrderIDs = {
  encode(
    message: OrderIDs,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.ids) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderIDs {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrderIDs } as OrderIDs;
    message.ids = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ids.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrderIDs {
    const message = { ...baseOrderIDs } as OrderIDs;
    message.ids = (object.ids ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: OrderIDs): unknown {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map((e) => e);
    } else {
      obj.ids = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<OrderIDs>): OrderIDs {
    const message = { ...baseOrderIDs } as OrderIDs;
    message.ids = (object.ids ?? []).map((e) => e);
    return message;
  },
};

const baseOrders: object = {};

export const Orders = {
  encode(
    message: Orders,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Orders {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrders } as Orders;
    message.orders = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(Order.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Orders {
    const message = { ...baseOrders } as Orders;
    message.orders = (object.orders ?? []).map((e: any) => Order.fromJSON(e));
    return message;
  },

  toJSON(message: Orders): unknown {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map((e) => (e ? Order.toJSON(e) : undefined));
    } else {
      obj.orders = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Orders>): Orders {
    const message = { ...baseOrders } as Orders;
    message.orders = (object.orders ?? []).map((e) => Order.fromPartial(e));
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
