/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../google/protobuf/timestamp";

export const protobufPackage = "Switcheo.carbon.broker";

export interface TradeEvent {
  blockHeight: Long;
  blockCreatedAt?: Date;
  takerId: string;
  takerAddress: string;
  takerFeeAmount: string;
  takerFeeDenom: string;
  takerSide: string;
  makerId: string;
  makerAddress: string;
  makerFeeAmount: string;
  makerFeeDenom: string;
  makerSide: string;
  market: string;
  price: string;
  quantity: string;
  liquidation: string;
  id: Long;
}

const baseTradeEvent: object = {
  blockHeight: Long.ZERO,
  takerId: "",
  takerAddress: "",
  takerFeeAmount: "",
  takerFeeDenom: "",
  takerSide: "",
  makerId: "",
  makerAddress: "",
  makerFeeAmount: "",
  makerFeeDenom: "",
  makerSide: "",
  market: "",
  price: "",
  quantity: "",
  liquidation: "",
  id: Long.UZERO,
};

export const TradeEvent = {
  encode(
    message: TradeEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.blockHeight.isZero()) {
      writer.uint32(8).int64(message.blockHeight);
    }
    if (message.blockCreatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.blockCreatedAt),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.takerId !== "") {
      writer.uint32(26).string(message.takerId);
    }
    if (message.takerAddress !== "") {
      writer.uint32(34).string(message.takerAddress);
    }
    if (message.takerFeeAmount !== "") {
      writer.uint32(42).string(message.takerFeeAmount);
    }
    if (message.takerFeeDenom !== "") {
      writer.uint32(50).string(message.takerFeeDenom);
    }
    if (message.takerSide !== "") {
      writer.uint32(58).string(message.takerSide);
    }
    if (message.makerId !== "") {
      writer.uint32(66).string(message.makerId);
    }
    if (message.makerAddress !== "") {
      writer.uint32(74).string(message.makerAddress);
    }
    if (message.makerFeeAmount !== "") {
      writer.uint32(82).string(message.makerFeeAmount);
    }
    if (message.makerFeeDenom !== "") {
      writer.uint32(90).string(message.makerFeeDenom);
    }
    if (message.makerSide !== "") {
      writer.uint32(98).string(message.makerSide);
    }
    if (message.market !== "") {
      writer.uint32(106).string(message.market);
    }
    if (message.price !== "") {
      writer.uint32(114).string(message.price);
    }
    if (message.quantity !== "") {
      writer.uint32(122).string(message.quantity);
    }
    if (message.liquidation !== "") {
      writer.uint32(130).string(message.liquidation);
    }
    if (!message.id.isZero()) {
      writer.uint32(136).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradeEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTradeEvent } as TradeEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64() as Long;
          break;
        case 2:
          message.blockCreatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.takerId = reader.string();
          break;
        case 4:
          message.takerAddress = reader.string();
          break;
        case 5:
          message.takerFeeAmount = reader.string();
          break;
        case 6:
          message.takerFeeDenom = reader.string();
          break;
        case 7:
          message.takerSide = reader.string();
          break;
        case 8:
          message.makerId = reader.string();
          break;
        case 9:
          message.makerAddress = reader.string();
          break;
        case 10:
          message.makerFeeAmount = reader.string();
          break;
        case 11:
          message.makerFeeDenom = reader.string();
          break;
        case 12:
          message.makerSide = reader.string();
          break;
        case 13:
          message.market = reader.string();
          break;
        case 14:
          message.price = reader.string();
          break;
        case 15:
          message.quantity = reader.string();
          break;
        case 16:
          message.liquidation = reader.string();
          break;
        case 17:
          message.id = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TradeEvent {
    const message = { ...baseTradeEvent } as TradeEvent;
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
    if (object.takerId !== undefined && object.takerId !== null) {
      message.takerId = String(object.takerId);
    } else {
      message.takerId = "";
    }
    if (object.takerAddress !== undefined && object.takerAddress !== null) {
      message.takerAddress = String(object.takerAddress);
    } else {
      message.takerAddress = "";
    }
    if (object.takerFeeAmount !== undefined && object.takerFeeAmount !== null) {
      message.takerFeeAmount = String(object.takerFeeAmount);
    } else {
      message.takerFeeAmount = "";
    }
    if (object.takerFeeDenom !== undefined && object.takerFeeDenom !== null) {
      message.takerFeeDenom = String(object.takerFeeDenom);
    } else {
      message.takerFeeDenom = "";
    }
    if (object.takerSide !== undefined && object.takerSide !== null) {
      message.takerSide = String(object.takerSide);
    } else {
      message.takerSide = "";
    }
    if (object.makerId !== undefined && object.makerId !== null) {
      message.makerId = String(object.makerId);
    } else {
      message.makerId = "";
    }
    if (object.makerAddress !== undefined && object.makerAddress !== null) {
      message.makerAddress = String(object.makerAddress);
    } else {
      message.makerAddress = "";
    }
    if (object.makerFeeAmount !== undefined && object.makerFeeAmount !== null) {
      message.makerFeeAmount = String(object.makerFeeAmount);
    } else {
      message.makerFeeAmount = "";
    }
    if (object.makerFeeDenom !== undefined && object.makerFeeDenom !== null) {
      message.makerFeeDenom = String(object.makerFeeDenom);
    } else {
      message.makerFeeDenom = "";
    }
    if (object.makerSide !== undefined && object.makerSide !== null) {
      message.makerSide = String(object.makerSide);
    } else {
      message.makerSide = "";
    }
    if (object.market !== undefined && object.market !== null) {
      message.market = String(object.market);
    } else {
      message.market = "";
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
    if (object.liquidation !== undefined && object.liquidation !== null) {
      message.liquidation = String(object.liquidation);
    } else {
      message.liquidation = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    } else {
      message.id = Long.UZERO;
    }
    return message;
  },

  toJSON(message: TradeEvent): unknown {
    const obj: any = {};
    message.blockHeight !== undefined &&
      (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    message.blockCreatedAt !== undefined &&
      (obj.blockCreatedAt = message.blockCreatedAt.toISOString());
    message.takerId !== undefined && (obj.takerId = message.takerId);
    message.takerAddress !== undefined &&
      (obj.takerAddress = message.takerAddress);
    message.takerFeeAmount !== undefined &&
      (obj.takerFeeAmount = message.takerFeeAmount);
    message.takerFeeDenom !== undefined &&
      (obj.takerFeeDenom = message.takerFeeDenom);
    message.takerSide !== undefined && (obj.takerSide = message.takerSide);
    message.makerId !== undefined && (obj.makerId = message.makerId);
    message.makerAddress !== undefined &&
      (obj.makerAddress = message.makerAddress);
    message.makerFeeAmount !== undefined &&
      (obj.makerFeeAmount = message.makerFeeAmount);
    message.makerFeeDenom !== undefined &&
      (obj.makerFeeDenom = message.makerFeeDenom);
    message.makerSide !== undefined && (obj.makerSide = message.makerSide);
    message.market !== undefined && (obj.market = message.market);
    message.price !== undefined && (obj.price = message.price);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.liquidation !== undefined &&
      (obj.liquidation = message.liquidation);
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<TradeEvent>): TradeEvent {
    const message = { ...baseTradeEvent } as TradeEvent;
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
    if (object.takerId !== undefined && object.takerId !== null) {
      message.takerId = object.takerId;
    } else {
      message.takerId = "";
    }
    if (object.takerAddress !== undefined && object.takerAddress !== null) {
      message.takerAddress = object.takerAddress;
    } else {
      message.takerAddress = "";
    }
    if (object.takerFeeAmount !== undefined && object.takerFeeAmount !== null) {
      message.takerFeeAmount = object.takerFeeAmount;
    } else {
      message.takerFeeAmount = "";
    }
    if (object.takerFeeDenom !== undefined && object.takerFeeDenom !== null) {
      message.takerFeeDenom = object.takerFeeDenom;
    } else {
      message.takerFeeDenom = "";
    }
    if (object.takerSide !== undefined && object.takerSide !== null) {
      message.takerSide = object.takerSide;
    } else {
      message.takerSide = "";
    }
    if (object.makerId !== undefined && object.makerId !== null) {
      message.makerId = object.makerId;
    } else {
      message.makerId = "";
    }
    if (object.makerAddress !== undefined && object.makerAddress !== null) {
      message.makerAddress = object.makerAddress;
    } else {
      message.makerAddress = "";
    }
    if (object.makerFeeAmount !== undefined && object.makerFeeAmount !== null) {
      message.makerFeeAmount = object.makerFeeAmount;
    } else {
      message.makerFeeAmount = "";
    }
    if (object.makerFeeDenom !== undefined && object.makerFeeDenom !== null) {
      message.makerFeeDenom = object.makerFeeDenom;
    } else {
      message.makerFeeDenom = "";
    }
    if (object.makerSide !== undefined && object.makerSide !== null) {
      message.makerSide = object.makerSide;
    } else {
      message.makerSide = "";
    }
    if (object.market !== undefined && object.market !== null) {
      message.market = object.market;
    } else {
      message.market = "";
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
    if (object.liquidation !== undefined && object.liquidation !== null) {
      message.liquidation = object.liquidation;
    } else {
      message.liquidation = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id as Long;
    } else {
      message.id = Long.UZERO;
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
