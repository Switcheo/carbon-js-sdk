/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.book";

export interface OrderBookEvent {
  marketId: string;
  side: string;
  price: string;
  quantity: string;
}

export interface VirtualOrderBookEvent {
  book?: OrderBookEvent;
}

export interface ClearVirtualOrderBookEvent {
  marketId: string;
}

const baseOrderBookEvent: object = {
  marketId: "",
  side: "",
  price: "",
  quantity: "",
};

export const OrderBookEvent = {
  encode(
    message: OrderBookEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.side !== "") {
      writer.uint32(26).string(message.side);
    }
    if (message.price !== "") {
      writer.uint32(34).string(message.price);
    }
    if (message.quantity !== "") {
      writer.uint32(42).string(message.quantity);
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
          message.marketId = reader.string();
          break;
        case 3:
          message.side = reader.string();
          break;
        case 4:
          message.price = reader.string();
          break;
        case 5:
          message.quantity = reader.string();
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
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
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
    return message;
  },

  toJSON(message: OrderBookEvent): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.side !== undefined && (obj.side = message.side);
    message.price !== undefined && (obj.price = message.price);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    return obj;
  },

  fromPartial(object: DeepPartial<OrderBookEvent>): OrderBookEvent {
    const message = { ...baseOrderBookEvent } as OrderBookEvent;
    message.marketId = object.marketId ?? "";
    message.side = object.side ?? "";
    message.price = object.price ?? "";
    message.quantity = object.quantity ?? "";
    return message;
  },
};

const baseVirtualOrderBookEvent: object = {};

export const VirtualOrderBookEvent = {
  encode(
    message: VirtualOrderBookEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.book !== undefined) {
      OrderBookEvent.encode(message.book, writer.uint32(10).fork()).ldelim();
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
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.book = OrderBookEvent.decode(reader, reader.uint32());
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
    message.book =
      object.book !== undefined && object.book !== null
        ? OrderBookEvent.fromJSON(object.book)
        : undefined;
    return message;
  },

  toJSON(message: VirtualOrderBookEvent): unknown {
    const obj: any = {};
    message.book !== undefined &&
      (obj.book = message.book
        ? OrderBookEvent.toJSON(message.book)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<VirtualOrderBookEvent>
  ): VirtualOrderBookEvent {
    const message = { ...baseVirtualOrderBookEvent } as VirtualOrderBookEvent;
    message.book =
      object.book !== undefined && object.book !== null
        ? OrderBookEvent.fromPartial(object.book)
        : undefined;
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
