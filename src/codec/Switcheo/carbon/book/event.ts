/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.book";

export interface OrderBookEvent {
  m: string;
  s: string;
  p: string;
  q: string;
}

/**
 * Message fields below are shortened to reduce size of messages,
 * but use gogoproto customnames to provide descriptive names
 * for referencing and use in the code.
 */
export interface Quote {
  /** price in formatted string */
  p: string;
  /** quantity in formatted string */
  q: string;
}

export interface VirtualOrderBookEvent {
  m: string;
  /** bids as one or more Quotes */
  b: Quote[];
  /** asks as one or more Quotes */
  a: Quote[];
}

export interface ClearVirtualOrderBookEvent {
  marketId: string;
}

function createBaseOrderBookEvent(): OrderBookEvent {
  return { m: "", s: "", p: "", q: "" };
}

export const OrderBookEvent = {
  encode(message: OrderBookEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.m !== "") {
      writer.uint32(18).string(message.m);
    }
    if (message.s !== "") {
      writer.uint32(26).string(message.s);
    }
    if (message.p !== "") {
      writer.uint32(34).string(message.p);
    }
    if (message.q !== "") {
      writer.uint32(42).string(message.q);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderBookEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderBookEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.m = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.s = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.p = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.q = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OrderBookEvent {
    return {
      m: isSet(object.m) ? String(object.m) : "",
      s: isSet(object.s) ? String(object.s) : "",
      p: isSet(object.p) ? String(object.p) : "",
      q: isSet(object.q) ? String(object.q) : "",
    };
  },

  toJSON(message: OrderBookEvent): unknown {
    const obj: any = {};
    message.m !== undefined && (obj.m = message.m);
    message.s !== undefined && (obj.s = message.s);
    message.p !== undefined && (obj.p = message.p);
    message.q !== undefined && (obj.q = message.q);
    return obj;
  },

  create(base?: DeepPartial<OrderBookEvent>): OrderBookEvent {
    return OrderBookEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<OrderBookEvent>): OrderBookEvent {
    const message = createBaseOrderBookEvent();
    message.m = object.m ?? "";
    message.s = object.s ?? "";
    message.p = object.p ?? "";
    message.q = object.q ?? "";
    return message;
  },
};

function createBaseQuote(): Quote {
  return { p: "", q: "" };
}

export const Quote = {
  encode(message: Quote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.p !== "") {
      writer.uint32(10).string(message.p);
    }
    if (message.q !== "") {
      writer.uint32(18).string(message.q);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Quote {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.p = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.q = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Quote {
    return { p: isSet(object.p) ? String(object.p) : "", q: isSet(object.q) ? String(object.q) : "" };
  },

  toJSON(message: Quote): unknown {
    const obj: any = {};
    message.p !== undefined && (obj.p = message.p);
    message.q !== undefined && (obj.q = message.q);
    return obj;
  },

  create(base?: DeepPartial<Quote>): Quote {
    return Quote.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Quote>): Quote {
    const message = createBaseQuote();
    message.p = object.p ?? "";
    message.q = object.q ?? "";
    return message;
  },
};

function createBaseVirtualOrderBookEvent(): VirtualOrderBookEvent {
  return { m: "", b: [], a: [] };
}

export const VirtualOrderBookEvent = {
  encode(message: VirtualOrderBookEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.m !== "") {
      writer.uint32(10).string(message.m);
    }
    for (const v of message.b) {
      Quote.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.a) {
      Quote.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VirtualOrderBookEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVirtualOrderBookEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.m = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.b.push(Quote.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.a.push(Quote.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VirtualOrderBookEvent {
    return {
      m: isSet(object.m) ? String(object.m) : "",
      b: Array.isArray(object?.b) ? object.b.map((e: any) => Quote.fromJSON(e)) : [],
      a: Array.isArray(object?.a) ? object.a.map((e: any) => Quote.fromJSON(e)) : [],
    };
  },

  toJSON(message: VirtualOrderBookEvent): unknown {
    const obj: any = {};
    message.m !== undefined && (obj.m = message.m);
    if (message.b) {
      obj.b = message.b.map((e) => e ? Quote.toJSON(e) : undefined);
    } else {
      obj.b = [];
    }
    if (message.a) {
      obj.a = message.a.map((e) => e ? Quote.toJSON(e) : undefined);
    } else {
      obj.a = [];
    }
    return obj;
  },

  create(base?: DeepPartial<VirtualOrderBookEvent>): VirtualOrderBookEvent {
    return VirtualOrderBookEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<VirtualOrderBookEvent>): VirtualOrderBookEvent {
    const message = createBaseVirtualOrderBookEvent();
    message.m = object.m ?? "";
    message.b = object.b?.map((e) => Quote.fromPartial(e)) || [];
    message.a = object.a?.map((e) => Quote.fromPartial(e)) || [];
    return message;
  },
};

function createBaseClearVirtualOrderBookEvent(): ClearVirtualOrderBookEvent {
  return { marketId: "" };
}

export const ClearVirtualOrderBookEvent = {
  encode(message: ClearVirtualOrderBookEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClearVirtualOrderBookEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClearVirtualOrderBookEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.marketId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClearVirtualOrderBookEvent {
    return { marketId: isSet(object.marketId) ? String(object.marketId) : "" };
  },

  toJSON(message: ClearVirtualOrderBookEvent): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  create(base?: DeepPartial<ClearVirtualOrderBookEvent>): ClearVirtualOrderBookEvent {
    return ClearVirtualOrderBookEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ClearVirtualOrderBookEvent>): ClearVirtualOrderBookEvent {
    const message = createBaseClearVirtualOrderBookEvent();
    message.marketId = object.marketId ?? "";
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
