/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.tradehubcosmos.book";

export interface OrderBookLevel {
  price: string;
  totalQuantity: string;
  orders: string[];
}

export interface OrderBook {
  market: string;
  asks: OrderBookLevel[];
  bids: OrderBookLevel[];
}

export interface StopBook {
  market: string;
  asks: string[];
  bids: string[];
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
    message.orders = [];
    if (object.price !== undefined && object.price !== null) {
      message.price = String(object.price);
    } else {
      message.price = "";
    }
    if (object.totalQuantity !== undefined && object.totalQuantity !== null) {
      message.totalQuantity = String(object.totalQuantity);
    } else {
      message.totalQuantity = "";
    }
    if (object.orders !== undefined && object.orders !== null) {
      for (const e of object.orders) {
        message.orders.push(String(e));
      }
    }
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
    message.orders = [];
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    } else {
      message.price = "";
    }
    if (object.totalQuantity !== undefined && object.totalQuantity !== null) {
      message.totalQuantity = object.totalQuantity;
    } else {
      message.totalQuantity = "";
    }
    if (object.orders !== undefined && object.orders !== null) {
      for (const e of object.orders) {
        message.orders.push(e);
      }
    }
    return message;
  },
};

const baseOrderBook: object = { market: "" };

export const OrderBook = {
  encode(
    message: OrderBook,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.market !== "") {
      writer.uint32(10).string(message.market);
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
          message.market = reader.string();
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
    message.asks = [];
    message.bids = [];
    if (object.market !== undefined && object.market !== null) {
      message.market = String(object.market);
    } else {
      message.market = "";
    }
    if (object.asks !== undefined && object.asks !== null) {
      for (const e of object.asks) {
        message.asks.push(OrderBookLevel.fromJSON(e));
      }
    }
    if (object.bids !== undefined && object.bids !== null) {
      for (const e of object.bids) {
        message.bids.push(OrderBookLevel.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: OrderBook): unknown {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market);
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
    message.asks = [];
    message.bids = [];
    if (object.market !== undefined && object.market !== null) {
      message.market = object.market;
    } else {
      message.market = "";
    }
    if (object.asks !== undefined && object.asks !== null) {
      for (const e of object.asks) {
        message.asks.push(OrderBookLevel.fromPartial(e));
      }
    }
    if (object.bids !== undefined && object.bids !== null) {
      for (const e of object.bids) {
        message.bids.push(OrderBookLevel.fromPartial(e));
      }
    }
    return message;
  },
};

const baseStopBook: object = { market: "", asks: "", bids: "" };

export const StopBook = {
  encode(
    message: StopBook,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.market !== "") {
      writer.uint32(10).string(message.market);
    }
    for (const v of message.asks) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.bids) {
      writer.uint32(26).string(v!);
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
          message.market = reader.string();
          break;
        case 2:
          message.asks.push(reader.string());
          break;
        case 3:
          message.bids.push(reader.string());
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
    message.asks = [];
    message.bids = [];
    if (object.market !== undefined && object.market !== null) {
      message.market = String(object.market);
    } else {
      message.market = "";
    }
    if (object.asks !== undefined && object.asks !== null) {
      for (const e of object.asks) {
        message.asks.push(String(e));
      }
    }
    if (object.bids !== undefined && object.bids !== null) {
      for (const e of object.bids) {
        message.bids.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: StopBook): unknown {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market);
    if (message.asks) {
      obj.asks = message.asks.map((e) => e);
    } else {
      obj.asks = [];
    }
    if (message.bids) {
      obj.bids = message.bids.map((e) => e);
    } else {
      obj.bids = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<StopBook>): StopBook {
    const message = { ...baseStopBook } as StopBook;
    message.asks = [];
    message.bids = [];
    if (object.market !== undefined && object.market !== null) {
      message.market = object.market;
    } else {
      message.market = "";
    }
    if (object.asks !== undefined && object.asks !== null) {
      for (const e of object.asks) {
        message.asks.push(e);
      }
    }
    if (object.bids !== undefined && object.bids !== null) {
      for (const e of object.bids) {
        message.bids.push(e);
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
