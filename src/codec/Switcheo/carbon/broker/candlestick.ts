/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "Switcheo.carbon.broker";

export interface Candlestick {
  marketId: string;
  time?: Date;
  resolution: Long;
  open: string;
  close: string;
  high: string;
  low: string;
  volume: string;
  quoteVolume: string;
  lastUpdatedBlockHeight: Long;
}

function createBaseCandlestick(): Candlestick {
  return {
    marketId: "",
    time: undefined,
    resolution: Long.UZERO,
    open: "",
    close: "",
    high: "",
    low: "",
    volume: "",
    quoteVolume: "",
    lastUpdatedBlockHeight: Long.ZERO,
  };
}

export const Candlestick = {
  encode(message: Candlestick, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(18).fork()).ldelim();
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
    if (!message.lastUpdatedBlockHeight.isZero()) {
      writer.uint32(80).int64(message.lastUpdatedBlockHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Candlestick {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCandlestick();
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

          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.resolution = reader.uint64() as Long;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.open = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.close = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.high = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.low = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.volume = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.quoteVolume = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.lastUpdatedBlockHeight = reader.int64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Candlestick {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      resolution: isSet(object.resolution) ? Long.fromValue(object.resolution) : Long.UZERO,
      open: isSet(object.open) ? String(object.open) : "",
      close: isSet(object.close) ? String(object.close) : "",
      high: isSet(object.high) ? String(object.high) : "",
      low: isSet(object.low) ? String(object.low) : "",
      volume: isSet(object.volume) ? String(object.volume) : "",
      quoteVolume: isSet(object.quoteVolume) ? String(object.quoteVolume) : "",
      lastUpdatedBlockHeight: isSet(object.lastUpdatedBlockHeight)
        ? Long.fromValue(object.lastUpdatedBlockHeight)
        : Long.ZERO,
    };
  },

  toJSON(message: Candlestick): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.resolution !== undefined && (obj.resolution = (message.resolution || Long.UZERO).toString());
    message.open !== undefined && (obj.open = message.open);
    message.close !== undefined && (obj.close = message.close);
    message.high !== undefined && (obj.high = message.high);
    message.low !== undefined && (obj.low = message.low);
    message.volume !== undefined && (obj.volume = message.volume);
    message.quoteVolume !== undefined && (obj.quoteVolume = message.quoteVolume);
    message.lastUpdatedBlockHeight !== undefined &&
      (obj.lastUpdatedBlockHeight = (message.lastUpdatedBlockHeight || Long.ZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<Candlestick>): Candlestick {
    return Candlestick.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Candlestick>): Candlestick {
    const message = createBaseCandlestick();
    message.marketId = object.marketId ?? "";
    message.time = object.time ?? undefined;
    message.resolution = (object.resolution !== undefined && object.resolution !== null)
      ? Long.fromValue(object.resolution)
      : Long.UZERO;
    message.open = object.open ?? "";
    message.close = object.close ?? "";
    message.high = object.high ?? "";
    message.low = object.low ?? "";
    message.volume = object.volume ?? "";
    message.quoteVolume = object.quoteVolume ?? "";
    message.lastUpdatedBlockHeight =
      (object.lastUpdatedBlockHeight !== undefined && object.lastUpdatedBlockHeight !== null)
        ? Long.fromValue(object.lastUpdatedBlockHeight)
        : Long.ZERO;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds.toNumber() || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
