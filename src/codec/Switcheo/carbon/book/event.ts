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

const baseOrderBookEvent: object = { m: "", s: "", p: "", q: "" };

export const OrderBookEvent = {
  encode(
    message: OrderBookEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrderBookEvent } as OrderBookEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.m = reader.string();
          break;
        case 3:
          message.s = reader.string();
          break;
        case 4:
          message.p = reader.string();
          break;
        case 5:
          message.q = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrderBookEvent {
    const message = { ...baseOrderBookEvent } as OrderBookEvent;
    message.m =
      object.m !== undefined && object.m !== null ? String(object.m) : "";
    message.s =
      object.s !== undefined && object.s !== null ? String(object.s) : "";
    message.p =
      object.p !== undefined && object.p !== null ? String(object.p) : "";
    message.q =
      object.q !== undefined && object.q !== null ? String(object.q) : "";
    return message;
  },

  toJSON(message: OrderBookEvent): unknown {
    const obj: any = {};
    message.m !== undefined && (obj.m = message.m);
    message.s !== undefined && (obj.s = message.s);
    message.p !== undefined && (obj.p = message.p);
    message.q !== undefined && (obj.q = message.q);
    return obj;
  },

  fromPartial(object: DeepPartial<OrderBookEvent>): OrderBookEvent {
    const message = { ...baseOrderBookEvent } as OrderBookEvent;
    message.m = object.m ?? "";
    message.s = object.s ?? "";
    message.p = object.p ?? "";
    message.q = object.q ?? "";
    return message;
  },
};

const baseQuote: object = { p: "", q: "" };

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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuote } as Quote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.p = reader.string();
          break;
        case 2:
          message.q = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Quote {
    const message = { ...baseQuote } as Quote;
    message.p =
      object.p !== undefined && object.p !== null ? String(object.p) : "";
    message.q =
      object.q !== undefined && object.q !== null ? String(object.q) : "";
    return message;
  },

  toJSON(message: Quote): unknown {
    const obj: any = {};
    message.p !== undefined && (obj.p = message.p);
    message.q !== undefined && (obj.q = message.q);
    return obj;
  },

  fromPartial(object: DeepPartial<Quote>): Quote {
    const message = { ...baseQuote } as Quote;
    message.p = object.p ?? "";
    message.q = object.q ?? "";
    return message;
  },
};

const baseVirtualOrderBookEvent: object = { m: "" };

export const VirtualOrderBookEvent = {
  encode(
    message: VirtualOrderBookEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): VirtualOrderBookEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVirtualOrderBookEvent } as VirtualOrderBookEvent;
    message.b = [];
    message.a = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.m = reader.string();
          break;
        case 2:
          message.b.push(Quote.decode(reader, reader.uint32()));
          break;
        case 3:
          message.a.push(Quote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VirtualOrderBookEvent {
    const message = { ...baseVirtualOrderBookEvent } as VirtualOrderBookEvent;
    message.m =
      object.m !== undefined && object.m !== null ? String(object.m) : "";
    message.b = (object.b ?? []).map((e: any) => Quote.fromJSON(e));
    message.a = (object.a ?? []).map((e: any) => Quote.fromJSON(e));
    return message;
  },

  toJSON(message: VirtualOrderBookEvent): unknown {
    const obj: any = {};
    message.m !== undefined && (obj.m = message.m);
    if (message.b) {
      obj.b = message.b.map((e) => (e ? Quote.toJSON(e) : undefined));
    } else {
      obj.b = [];
    }
    if (message.a) {
      obj.a = message.a.map((e) => (e ? Quote.toJSON(e) : undefined));
    } else {
      obj.a = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<VirtualOrderBookEvent>
  ): VirtualOrderBookEvent {
    const message = { ...baseVirtualOrderBookEvent } as VirtualOrderBookEvent;
    message.m = object.m ?? "";
    message.b = (object.b ?? []).map((e) => Quote.fromPartial(e));
    message.a = (object.a ?? []).map((e) => Quote.fromPartial(e));
    return message;
  },
};

const baseClearVirtualOrderBookEvent: object = { marketId: "" };

export const ClearVirtualOrderBookEvent = {
  encode(
    message: ClearVirtualOrderBookEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClearVirtualOrderBookEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseClearVirtualOrderBookEvent,
    } as ClearVirtualOrderBookEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClearVirtualOrderBookEvent {
    const message = {
      ...baseClearVirtualOrderBookEvent,
    } as ClearVirtualOrderBookEvent;
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    return message;
  },

  toJSON(message: ClearVirtualOrderBookEvent): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ClearVirtualOrderBookEvent>
  ): ClearVirtualOrderBookEvent {
    const message = {
      ...baseClearVirtualOrderBookEvent,
    } as ClearVirtualOrderBookEvent;
    message.marketId = object.marketId ?? "";
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
