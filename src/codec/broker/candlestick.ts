/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../google/protobuf/timestamp";

export const protobufPackage = "Switcheo.carbon.broker";

export interface Candlestick {
  market: string;
  time?: Date;
  resolution: Long;
  open: string;
  close: string;
  high: string;
  low: string;
  volume: string;
  quoteVolume: string;
}

const baseCandlestick: object = {
  market: "",
  resolution: Long.UZERO,
  open: "",
  close: "",
  high: "",
  low: "",
  volume: "",
  quoteVolume: "",
};

export const Candlestick = {
  encode(
    message: Candlestick,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.market !== "") {
      writer.uint32(10).string(message.market);
    }
    if (message.time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.time),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (!message.resolution.isZero()) {
      writer.uint32(24).uint64(message.resolution);
    }
    if (message.open !== "") {
      writer.uint32(34).string(message.open);
    }
    if (message.close !== "") {
      writer.uint32(42).string(message.close);
    }
    if (message.high !== "") {
      writer.uint32(50).string(message.high);
    }
    if (message.low !== "") {
      writer.uint32(58).string(message.low);
    }
    if (message.volume !== "") {
      writer.uint32(66).string(message.volume);
    }
    if (message.quoteVolume !== "") {
      writer.uint32(74).string(message.quoteVolume);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Candlestick {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCandlestick } as Candlestick;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market = reader.string();
          break;
        case 2:
          message.time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.resolution = reader.uint64() as Long;
          break;
        case 4:
          message.open = reader.string();
          break;
        case 5:
          message.close = reader.string();
          break;
        case 6:
          message.high = reader.string();
          break;
        case 7:
          message.low = reader.string();
          break;
        case 8:
          message.volume = reader.string();
          break;
        case 9:
          message.quoteVolume = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Candlestick {
    const message = { ...baseCandlestick } as Candlestick;
    if (object.market !== undefined && object.market !== null) {
      message.market = String(object.market);
    } else {
      message.market = "";
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = fromJsonTimestamp(object.time);
    } else {
      message.time = undefined;
    }
    if (object.resolution !== undefined && object.resolution !== null) {
      message.resolution = Long.fromString(object.resolution);
    } else {
      message.resolution = Long.UZERO;
    }
    if (object.open !== undefined && object.open !== null) {
      message.open = String(object.open);
    } else {
      message.open = "";
    }
    if (object.close !== undefined && object.close !== null) {
      message.close = String(object.close);
    } else {
      message.close = "";
    }
    if (object.high !== undefined && object.high !== null) {
      message.high = String(object.high);
    } else {
      message.high = "";
    }
    if (object.low !== undefined && object.low !== null) {
      message.low = String(object.low);
    } else {
      message.low = "";
    }
    if (object.volume !== undefined && object.volume !== null) {
      message.volume = String(object.volume);
    } else {
      message.volume = "";
    }
    if (object.quoteVolume !== undefined && object.quoteVolume !== null) {
      message.quoteVolume = String(object.quoteVolume);
    } else {
      message.quoteVolume = "";
    }
    return message;
  },

  toJSON(message: Candlestick): unknown {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market);
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.resolution !== undefined &&
      (obj.resolution = (message.resolution || Long.UZERO).toString());
    message.open !== undefined && (obj.open = message.open);
    message.close !== undefined && (obj.close = message.close);
    message.high !== undefined && (obj.high = message.high);
    message.low !== undefined && (obj.low = message.low);
    message.volume !== undefined && (obj.volume = message.volume);
    message.quoteVolume !== undefined &&
      (obj.quoteVolume = message.quoteVolume);
    return obj;
  },

  fromPartial(object: DeepPartial<Candlestick>): Candlestick {
    const message = { ...baseCandlestick } as Candlestick;
    if (object.market !== undefined && object.market !== null) {
      message.market = object.market;
    } else {
      message.market = "";
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = object.time;
    } else {
      message.time = undefined;
    }
    if (object.resolution !== undefined && object.resolution !== null) {
      message.resolution = object.resolution as Long;
    } else {
      message.resolution = Long.UZERO;
    }
    if (object.open !== undefined && object.open !== null) {
      message.open = object.open;
    } else {
      message.open = "";
    }
    if (object.close !== undefined && object.close !== null) {
      message.close = object.close;
    } else {
      message.close = "";
    }
    if (object.high !== undefined && object.high !== null) {
      message.high = object.high;
    } else {
      message.high = "";
    }
    if (object.low !== undefined && object.low !== null) {
      message.low = object.low;
    } else {
      message.low = "";
    }
    if (object.volume !== undefined && object.volume !== null) {
      message.volume = object.volume;
    } else {
      message.volume = "";
    }
    if (object.quoteVolume !== undefined && object.quoteVolume !== null) {
      message.quoteVolume = object.quoteVolume;
    } else {
      message.quoteVolume = "";
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
