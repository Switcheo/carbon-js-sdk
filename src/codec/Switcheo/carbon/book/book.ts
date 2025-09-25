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

function createBaseOrderBookLevel(): OrderBookLevel {
  return { price: "", totalQuantity: "", orders: [] };
}

export const OrderBookLevel = {
  encode(message: OrderBookLevel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderBookLevel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.price = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.totalQuantity = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.orders.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OrderBookLevel {
    return {
      price: isSet(object.price) ? String(object.price) : "",
      totalQuantity: isSet(object.totalQuantity) ? String(object.totalQuantity) : "",
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: OrderBookLevel): unknown {
    const obj: any = {};
    message.price !== undefined && (obj.price = message.price);
    message.totalQuantity !== undefined && (obj.totalQuantity = message.totalQuantity);
    if (message.orders) {
      obj.orders = message.orders.map((e) => e);
    } else {
      obj.orders = [];
    }
    return obj;
  },

  create(base?: DeepPartial<OrderBookLevel>): OrderBookLevel {
    return OrderBookLevel.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<OrderBookLevel>): OrderBookLevel {
    const message = createBaseOrderBookLevel();
    message.price = object.price ?? "";
    message.totalQuantity = object.totalQuantity ?? "";
    message.orders = object.orders?.map((e) => e) || [];
    return message;
  },
};

function createBaseOrderBook(): OrderBook {
  return { marketId: "", asks: [], bids: [] };
}

export const OrderBook = {
  encode(message: OrderBook, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderBook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.marketId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.asks.push(OrderBookLevel.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.bids.push(OrderBookLevel.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OrderBook {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      asks: Array.isArray(object?.asks) ? object.asks.map((e: any) => OrderBookLevel.fromJSON(e)) : [],
      bids: Array.isArray(object?.bids) ? object.bids.map((e: any) => OrderBookLevel.fromJSON(e)) : [],
    };
  },

  toJSON(message: OrderBook): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    if (message.asks) {
      obj.asks = message.asks.map((e) => e ? OrderBookLevel.toJSON(e) : undefined);
    } else {
      obj.asks = [];
    }
    if (message.bids) {
      obj.bids = message.bids.map((e) => e ? OrderBookLevel.toJSON(e) : undefined);
    } else {
      obj.bids = [];
    }
    return obj;
  },

  create(base?: DeepPartial<OrderBook>): OrderBook {
    return OrderBook.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<OrderBook>): OrderBook {
    const message = createBaseOrderBook();
    message.marketId = object.marketId ?? "";
    message.asks = object.asks?.map((e) => OrderBookLevel.fromPartial(e)) || [];
    message.bids = object.bids?.map((e) => OrderBookLevel.fromPartial(e)) || [];
    return message;
  },
};

function createBaseStopBook(): StopBook {
  return { marketId: "", asks: [], bids: [], trigger: "", stopType: "" };
}

export const StopBook = {
  encode(message: StopBook, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStopBook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.marketId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.asks.push(StopOrder.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.bids.push(StopOrder.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.trigger = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.stopType = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StopBook {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      asks: Array.isArray(object?.asks) ? object.asks.map((e: any) => StopOrder.fromJSON(e)) : [],
      bids: Array.isArray(object?.bids) ? object.bids.map((e: any) => StopOrder.fromJSON(e)) : [],
      trigger: isSet(object.trigger) ? String(object.trigger) : "",
      stopType: isSet(object.stopType) ? String(object.stopType) : "",
    };
  },

  toJSON(message: StopBook): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    if (message.asks) {
      obj.asks = message.asks.map((e) => e ? StopOrder.toJSON(e) : undefined);
    } else {
      obj.asks = [];
    }
    if (message.bids) {
      obj.bids = message.bids.map((e) => e ? StopOrder.toJSON(e) : undefined);
    } else {
      obj.bids = [];
    }
    message.trigger !== undefined && (obj.trigger = message.trigger);
    message.stopType !== undefined && (obj.stopType = message.stopType);
    return obj;
  },

  create(base?: DeepPartial<StopBook>): StopBook {
    return StopBook.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<StopBook>): StopBook {
    const message = createBaseStopBook();
    message.marketId = object.marketId ?? "";
    message.asks = object.asks?.map((e) => StopOrder.fromPartial(e)) || [];
    message.bids = object.bids?.map((e) => StopOrder.fromPartial(e)) || [];
    message.trigger = object.trigger ?? "";
    message.stopType = object.stopType ?? "";
    return message;
  },
};

function createBaseStopOrder(): StopOrder {
  return { id: "", stopPrice: "" };
}

export const StopOrder = {
  encode(message: StopOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.stopPrice !== "") {
      writer.uint32(18).string(message.stopPrice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StopOrder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStopOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.stopPrice = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StopOrder {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      stopPrice: isSet(object.stopPrice) ? String(object.stopPrice) : "",
    };
  },

  toJSON(message: StopOrder): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.stopPrice !== undefined && (obj.stopPrice = message.stopPrice);
    return obj;
  },

  create(base?: DeepPartial<StopOrder>): StopOrder {
    return StopOrder.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<StopOrder>): StopOrder {
    const message = createBaseStopOrder();
    message.id = object.id ?? "";
    message.stopPrice = object.stopPrice ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
