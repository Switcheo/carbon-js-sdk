/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.book";

export interface OrderBookLevel {
  price: string;
  totalQuantity: string;
  orders: string[];
}

export interface OrderBook {
  marketId: string;
  asks: OrderBookLevel[];
  bids: OrderBookLevel[];
}

export interface StopBook {
  marketId: string;
  asks: StopOrder[];
  bids: StopOrder[];
  trigger: string;
  stopType: string;
}

export interface StopOrder {
  id: string;
  stopPrice: string;
}

const baseOrderBookLevel: object = { price: "", totalQuantity: "", orders: "" };

export const OrderBookLevel = {
  encode(
    message: OrderBookLevel,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
    }
    if (message.totalQuantity !== "") {
      writer.uint32(18).string(message.totalQuantity);
    }
    for (const v of message.orders) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderBookLevel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrderBookLevel } as OrderBookLevel;
    message.orders = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = reader.string();
          break;
        case 2:
          message.totalQuantity = reader.string();
          break;
        case 3:
          message.orders.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrderBookLevel {
    const message = { ...baseOrderBookLevel } as OrderBookLevel;
    message.price =
      object.price !== undefined && object.price !== null
        ? String(object.price)
        : "";
    message.totalQuantity =
      object.totalQuantity !== undefined && object.totalQuantity !== null
        ? String(object.totalQuantity)
        : "";
    message.orders = (object.orders ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: OrderBookLevel): unknown {
    const obj: any = {};
    message.price !== undefined && (obj.price = message.price);
    message.totalQuantity !== undefined &&
      (obj.totalQuantity = message.totalQuantity);
    if (message.orders) {
      obj.orders = message.orders.map((e) => e);
    } else {
      obj.orders = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<OrderBookLevel>): OrderBookLevel {
    const message = { ...baseOrderBookLevel } as OrderBookLevel;
    message.price = object.price ?? "";
    message.totalQuantity = object.totalQuantity ?? "";
    message.orders = (object.orders ?? []).map((e) => e);
    return message;
  },
};

const baseOrderBook: object = { marketId: "" };

export const OrderBook = {
  encode(
    message: OrderBook,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    for (const v of message.asks) {
      OrderBookLevel.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.bids) {
      OrderBookLevel.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderBook {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrderBook } as OrderBook;
    message.asks = [];
    message.bids = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.asks.push(OrderBookLevel.decode(reader, reader.uint32()));
          break;
        case 3:
          message.bids.push(OrderBookLevel.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrderBook {
    const message = { ...baseOrderBook } as OrderBook;
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.asks = (object.asks ?? []).map((e: any) =>
      OrderBookLevel.fromJSON(e)
    );
    message.bids = (object.bids ?? []).map((e: any) =>
      OrderBookLevel.fromJSON(e)
    );
    return message;
  },

  toJSON(message: OrderBook): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    if (message.asks) {
      obj.asks = message.asks.map((e) =>
        e ? OrderBookLevel.toJSON(e) : undefined
      );
    } else {
      obj.asks = [];
    }
    if (message.bids) {
      obj.bids = message.bids.map((e) =>
        e ? OrderBookLevel.toJSON(e) : undefined
      );
    } else {
      obj.bids = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<OrderBook>): OrderBook {
    const message = { ...baseOrderBook } as OrderBook;
    message.marketId = object.marketId ?? "";
    message.asks = (object.asks ?? []).map((e) =>
      OrderBookLevel.fromPartial(e)
    );
    message.bids = (object.bids ?? []).map((e) =>
      OrderBookLevel.fromPartial(e)
    );
    return message;
  },
};

const baseStopBook: object = { marketId: "", trigger: "", stopType: "" };

export const StopBook = {
  encode(
    message: StopBook,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    for (const v of message.asks) {
      StopOrder.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.bids) {
      StopOrder.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.trigger !== "") {
      writer.uint32(34).string(message.trigger);
    }
    if (message.stopType !== "") {
      writer.uint32(42).string(message.stopType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StopBook {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStopBook } as StopBook;
    message.asks = [];
    message.bids = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.asks.push(StopOrder.decode(reader, reader.uint32()));
          break;
        case 3:
          message.bids.push(StopOrder.decode(reader, reader.uint32()));
          break;
        case 4:
          message.trigger = reader.string();
          break;
        case 5:
          message.stopType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StopBook {
    const message = { ...baseStopBook } as StopBook;
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.asks = (object.asks ?? []).map((e: any) => StopOrder.fromJSON(e));
    message.bids = (object.bids ?? []).map((e: any) => StopOrder.fromJSON(e));
    message.trigger =
      object.trigger !== undefined && object.trigger !== null
        ? String(object.trigger)
        : "";
    message.stopType =
      object.stopType !== undefined && object.stopType !== null
        ? String(object.stopType)
        : "";
    return message;
  },

  toJSON(message: StopBook): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    if (message.asks) {
      obj.asks = message.asks.map((e) => (e ? StopOrder.toJSON(e) : undefined));
    } else {
      obj.asks = [];
    }
    if (message.bids) {
      obj.bids = message.bids.map((e) => (e ? StopOrder.toJSON(e) : undefined));
    } else {
      obj.bids = [];
    }
    message.trigger !== undefined && (obj.trigger = message.trigger);
    message.stopType !== undefined && (obj.stopType = message.stopType);
    return obj;
  },

  fromPartial(object: DeepPartial<StopBook>): StopBook {
    const message = { ...baseStopBook } as StopBook;
    message.marketId = object.marketId ?? "";
    message.asks = (object.asks ?? []).map((e) => StopOrder.fromPartial(e));
    message.bids = (object.bids ?? []).map((e) => StopOrder.fromPartial(e));
    message.trigger = object.trigger ?? "";
    message.stopType = object.stopType ?? "";
    return message;
  },
};

const baseStopOrder: object = { id: "", stopPrice: "" };

export const StopOrder = {
  encode(
    message: StopOrder,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.stopPrice !== "") {
      writer.uint32(18).string(message.stopPrice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StopOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStopOrder } as StopOrder;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.stopPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StopOrder {
    const message = { ...baseStopOrder } as StopOrder;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.stopPrice =
      object.stopPrice !== undefined && object.stopPrice !== null
        ? String(object.stopPrice)
        : "";
    return message;
  },

  toJSON(message: StopOrder): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.stopPrice !== undefined && (obj.stopPrice = message.stopPrice);
    return obj;
  },

  fromPartial(object: DeepPartial<StopOrder>): StopOrder {
    const message = { ...baseStopOrder } as StopOrder;
    message.id = object.id ?? "";
    message.stopPrice = object.stopPrice ?? "";
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
