/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.book";

export interface OrderBookEvent {
  type: string;
  market: string;
  side: string;
  price: string;
  quantity: string;
}

const baseOrderBookEvent: object = {
  type: "",
  market: "",
  side: "",
  price: "",
  quantity: "",
};

export const OrderBookEvent = {
  encode(
    message: OrderBookEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.market !== "") {
      writer.uint32(18).string(message.market);
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
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.market = reader.string();
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
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
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
    return message;
  },

  toJSON(message: OrderBookEvent): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.market !== undefined && (obj.market = message.market);
    message.side !== undefined && (obj.side = message.side);
    message.price !== undefined && (obj.price = message.price);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    return obj;
  },

  fromPartial(object: DeepPartial<OrderBookEvent>): OrderBookEvent {
    const message = { ...baseOrderBookEvent } as OrderBookEvent;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
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
