/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { Timestamp } from "../google/protobuf/timestamp";

export const protobufPackage = "Switcheo.carbon.order";

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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Order {
    const message = { ...baseOrder } as Order;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = Long.fromString(object.blockHeight);
    } else {
      message.blockHeight = Long.ZERO;
    }
    if (object.blockCreatedAt !== undefined && object.blockCreatedAt !== null) {
      message.blockCreatedAt = fromJsonTimestamp(object.blockCreatedAt);
    } else {
      message.blockCreatedAt = undefined;
    }
    if (
      object.triggeredBlockHeight !== undefined &&
      object.triggeredBlockHeight !== null
    ) {
      message.triggeredBlockHeight = Long.fromString(
        object.triggeredBlockHeight
      );
    } else {
      message.triggeredBlockHeight = Long.ZERO;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.market !== undefined && object.market !== null) {
      message.market = String(object.market);
    } else {
      message.market = "";
    }
    if (object.side !== undefined && object.side !== null) {
      message.side = String(object.side);
    } else {
      message.side = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = String(object.price);
    } else {
      message.price = "";
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = String(object.quantity);
    } else {
      message.quantity = "";
    }
    if (object.available !== undefined && object.available !== null) {
      message.available = String(object.available);
    } else {
      message.available = "";
    }
    if (object.filled !== undefined && object.filled !== null) {
      message.filled = String(object.filled);
    } else {
      message.filled = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    if (object.orderType !== undefined && object.orderType !== null) {
      message.orderType = String(object.orderType);
    } else {
      message.orderType = "";
    }
    if (object.initiator !== undefined && object.initiator !== null) {
      message.initiator = String(object.initiator);
    } else {
      message.initiator = "";
    }
    if (object.timeInForce !== undefined && object.timeInForce !== null) {
      message.timeInForce = String(object.timeInForce);
    } else {
      message.timeInForce = "";
    }
    if (object.stopPrice !== undefined && object.stopPrice !== null) {
      message.stopPrice = String(object.stopPrice);
    } else {
      message.stopPrice = "";
    }
    if (object.triggerType !== undefined && object.triggerType !== null) {
      message.triggerType = String(object.triggerType);
    } else {
      message.triggerType = "";
    }
    if (
      object.allocatedMargin !== undefined &&
      object.allocatedMargin !== null
    ) {
      message.allocatedMargin = Coin.fromJSON(object.allocatedMargin);
    } else {
      message.allocatedMargin = undefined;
    }
    if (object.isLiquidation !== undefined && object.isLiquidation !== null) {
      message.isLiquidation = Boolean(object.isLiquidation);
    } else {
      message.isLiquidation = false;
    }
    if (object.isPostOnly !== undefined && object.isPostOnly !== null) {
      message.isPostOnly = Boolean(object.isPostOnly);
    } else {
      message.isPostOnly = false;
    }
    if (object.isReduceOnly !== undefined && object.isReduceOnly !== null) {
      message.isReduceOnly = Boolean(object.isReduceOnly);
    } else {
      message.isReduceOnly = false;
    }
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = Long.fromString(object.poolId);
    } else {
      message.poolId = Long.UZERO;
    }
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
    return obj;
  },

  fromPartial(object: DeepPartial<Order>): Order {
    const message = { ...baseOrder } as Order;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = object.blockHeight as Long;
    } else {
      message.blockHeight = Long.ZERO;
    }
    if (object.blockCreatedAt !== undefined && object.blockCreatedAt !== null) {
      message.blockCreatedAt = object.blockCreatedAt;
    } else {
      message.blockCreatedAt = undefined;
    }
    if (
      object.triggeredBlockHeight !== undefined &&
      object.triggeredBlockHeight !== null
    ) {
      message.triggeredBlockHeight = object.triggeredBlockHeight as Long;
    } else {
      message.triggeredBlockHeight = Long.ZERO;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.market !== undefined && object.market !== null) {
      message.market = object.market;
    } else {
      message.market = "";
    }
    if (object.side !== undefined && object.side !== null) {
      message.side = object.side;
    } else {
      message.side = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    } else {
      message.price = "";
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    } else {
      message.quantity = "";
    }
    if (object.available !== undefined && object.available !== null) {
      message.available = object.available;
    } else {
      message.available = "";
    }
    if (object.filled !== undefined && object.filled !== null) {
      message.filled = object.filled;
    } else {
      message.filled = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    if (object.orderType !== undefined && object.orderType !== null) {
      message.orderType = object.orderType;
    } else {
      message.orderType = "";
    }
    if (object.initiator !== undefined && object.initiator !== null) {
      message.initiator = object.initiator;
    } else {
      message.initiator = "";
    }
    if (object.timeInForce !== undefined && object.timeInForce !== null) {
      message.timeInForce = object.timeInForce;
    } else {
      message.timeInForce = "";
    }
    if (object.stopPrice !== undefined && object.stopPrice !== null) {
      message.stopPrice = object.stopPrice;
    } else {
      message.stopPrice = "";
    }
    if (object.triggerType !== undefined && object.triggerType !== null) {
      message.triggerType = object.triggerType;
    } else {
      message.triggerType = "";
    }
    if (
      object.allocatedMargin !== undefined &&
      object.allocatedMargin !== null
    ) {
      message.allocatedMargin = Coin.fromPartial(object.allocatedMargin);
    } else {
      message.allocatedMargin = undefined;
    }
    if (object.isLiquidation !== undefined && object.isLiquidation !== null) {
      message.isLiquidation = object.isLiquidation;
    } else {
      message.isLiquidation = false;
    }
    if (object.isPostOnly !== undefined && object.isPostOnly !== null) {
      message.isPostOnly = object.isPostOnly;
    } else {
      message.isPostOnly = false;
    }
    if (object.isReduceOnly !== undefined && object.isReduceOnly !== null) {
      message.isReduceOnly = object.isReduceOnly;
    } else {
      message.isReduceOnly = false;
    }
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId as Long;
    } else {
      message.poolId = Long.UZERO;
    }
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
    message.orders = [];
    if (object.marketId !== undefined && object.marketId !== null) {
      message.marketId = String(object.marketId);
    } else {
      message.marketId = "";
    }
    if (object.orders !== undefined && object.orders !== null) {
      for (const e of object.orders) {
        message.orders.push(Order.fromJSON(e));
      }
    }
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
    message.orders = [];
    if (object.marketId !== undefined && object.marketId !== null) {
      message.marketId = object.marketId;
    } else {
      message.marketId = "";
    }
    if (object.orders !== undefined && object.orders !== null) {
      for (const e of object.orders) {
        message.orders.push(Order.fromPartial(e));
      }
    }
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
    message.orderIds = [];
    if (object.marketId !== undefined && object.marketId !== null) {
      message.marketId = String(object.marketId);
    } else {
      message.marketId = "";
    }
    if (object.orderIds !== undefined && object.orderIds !== null) {
      for (const e of object.orderIds) {
        message.orderIds.push(String(e));
      }
    }
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
    message.orderIds = [];
    if (object.marketId !== undefined && object.marketId !== null) {
      message.marketId = object.marketId;
    } else {
      message.marketId = "";
    }
    if (object.orderIds !== undefined && object.orderIds !== null) {
      for (const e of object.orderIds) {
        message.orderIds.push(e);
      }
    }
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
    message.ids = [];
    if (object.ids !== undefined && object.ids !== null) {
      for (const e of object.ids) {
        message.ids.push(String(e));
      }
    }
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
    message.ids = [];
    if (object.ids !== undefined && object.ids !== null) {
      for (const e of object.ids) {
        message.ids.push(e);
      }
    }
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
    message.orders = [];
    if (object.orders !== undefined && object.orders !== null) {
      for (const e of object.orders) {
        message.orders.push(Order.fromJSON(e));
      }
    }
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
    message.orders = [];
    if (object.orders !== undefined && object.orders !== null) {
      for (const e of object.orders) {
        message.orders.push(Order.fromPartial(e));
      }
    }
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
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
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
