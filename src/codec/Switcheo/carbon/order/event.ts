/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Order } from "./order";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "Switcheo.carbon.order";

export interface OrderEvent {
  order?: Order;
  type: string;
  allocatedMarginDenom: string;
  allocatedMarginAmount: string;
  blockCreatedAt?: Date;
}

const baseOrderEvent: object = {
  type: "",
  allocatedMarginDenom: "",
  allocatedMarginAmount: "",
};

export const OrderEvent = {
  encode(
    message: OrderEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.allocatedMarginDenom !== "") {
      writer.uint32(26).string(message.allocatedMarginDenom);
    }
    if (message.allocatedMarginAmount !== "") {
      writer.uint32(34).string(message.allocatedMarginAmount);
    }
    if (message.blockCreatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.blockCreatedAt),
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrderEvent } as OrderEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32());
          break;
        case 2:
          message.type = reader.string();
          break;
        case 3:
          message.allocatedMarginDenom = reader.string();
          break;
        case 4:
          message.allocatedMarginAmount = reader.string();
          break;
        case 5:
          message.blockCreatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrderEvent {
    const message = { ...baseOrderEvent } as OrderEvent;
    message.order =
      object.order !== undefined && object.order !== null
        ? Order.fromJSON(object.order)
        : undefined;
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
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
    message.blockCreatedAt =
      object.blockCreatedAt !== undefined && object.blockCreatedAt !== null
        ? fromJsonTimestamp(object.blockCreatedAt)
        : undefined;
    return message;
  },

  toJSON(message: OrderEvent): unknown {
    const obj: any = {};
    message.order !== undefined &&
      (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    message.type !== undefined && (obj.type = message.type);
    message.allocatedMarginDenom !== undefined &&
      (obj.allocatedMarginDenom = message.allocatedMarginDenom);
    message.allocatedMarginAmount !== undefined &&
      (obj.allocatedMarginAmount = message.allocatedMarginAmount);
    message.blockCreatedAt !== undefined &&
      (obj.blockCreatedAt = message.blockCreatedAt.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<OrderEvent>): OrderEvent {
    const message = { ...baseOrderEvent } as OrderEvent;
    message.order =
      object.order !== undefined && object.order !== null
        ? Order.fromPartial(object.order)
        : undefined;
    message.type = object.type ?? "";
    message.allocatedMarginDenom = object.allocatedMarginDenom ?? "";
    message.allocatedMarginAmount = object.allocatedMarginAmount ?? "";
    message.blockCreatedAt = object.blockCreatedAt ?? undefined;
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
