/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "Switcheo.carbon.marketstats";

export interface MarketStats {
  marketId: string;
  marketType: string;
  dayOpen: string;
  dayHigh: string;
  dayLow: string;
  dayClose: string;
  dayVolume: string;
  dayQuoteVolume: string;
  indexPrice: string;
  markPrice: string;
  lastPrice: string;
  premiumRate: string;
  lastFundingAt?: Date;
  openInterest: string;
}

function createBaseMarketStats(): MarketStats {
  return {
    marketId: "",
    marketType: "",
    dayOpen: "",
    dayHigh: "",
    dayLow: "",
    dayClose: "",
    dayVolume: "",
    dayQuoteVolume: "",
    indexPrice: "",
    markPrice: "",
    lastPrice: "",
    premiumRate: "",
    lastFundingAt: undefined,
    openInterest: "",
  };
}

export const MarketStats = {
  encode(message: MarketStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.marketType !== "") {
      writer.uint32(18).string(message.marketType);
    }
    if (message.dayOpen !== "") {
      writer.uint32(26).string(message.dayOpen);
    }
    if (message.dayHigh !== "") {
      writer.uint32(34).string(message.dayHigh);
    }
    if (message.dayLow !== "") {
      writer.uint32(42).string(message.dayLow);
    }
    if (message.dayClose !== "") {
      writer.uint32(50).string(message.dayClose);
    }
    if (message.dayVolume !== "") {
      writer.uint32(58).string(message.dayVolume);
    }
    if (message.dayQuoteVolume !== "") {
      writer.uint32(66).string(message.dayQuoteVolume);
    }
    if (message.indexPrice !== "") {
      writer.uint32(74).string(message.indexPrice);
    }
    if (message.markPrice !== "") {
      writer.uint32(82).string(message.markPrice);
    }
    if (message.lastPrice !== "") {
      writer.uint32(90).string(message.lastPrice);
    }
    if (message.premiumRate !== "") {
      writer.uint32(98).string(message.premiumRate);
    }
    if (message.lastFundingAt !== undefined) {
      Timestamp.encode(toTimestamp(message.lastFundingAt), writer.uint32(106).fork()).ldelim();
    }
    if (message.openInterest !== "") {
      writer.uint32(114).string(message.openInterest);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketStats();
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

          message.marketType = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.dayOpen = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.dayHigh = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.dayLow = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.dayClose = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.dayVolume = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.dayQuoteVolume = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.indexPrice = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.markPrice = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.lastPrice = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.premiumRate = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.lastFundingAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.openInterest = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MarketStats {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      marketType: isSet(object.marketType) ? String(object.marketType) : "",
      dayOpen: isSet(object.dayOpen) ? String(object.dayOpen) : "",
      dayHigh: isSet(object.dayHigh) ? String(object.dayHigh) : "",
      dayLow: isSet(object.dayLow) ? String(object.dayLow) : "",
      dayClose: isSet(object.dayClose) ? String(object.dayClose) : "",
      dayVolume: isSet(object.dayVolume) ? String(object.dayVolume) : "",
      dayQuoteVolume: isSet(object.dayQuoteVolume) ? String(object.dayQuoteVolume) : "",
      indexPrice: isSet(object.indexPrice) ? String(object.indexPrice) : "",
      markPrice: isSet(object.markPrice) ? String(object.markPrice) : "",
      lastPrice: isSet(object.lastPrice) ? String(object.lastPrice) : "",
      premiumRate: isSet(object.premiumRate) ? String(object.premiumRate) : "",
      lastFundingAt: isSet(object.lastFundingAt) ? fromJsonTimestamp(object.lastFundingAt) : undefined,
      openInterest: isSet(object.openInterest) ? String(object.openInterest) : "",
    };
  },

  toJSON(message: MarketStats): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.marketType !== undefined && (obj.marketType = message.marketType);
    message.dayOpen !== undefined && (obj.dayOpen = message.dayOpen);
    message.dayHigh !== undefined && (obj.dayHigh = message.dayHigh);
    message.dayLow !== undefined && (obj.dayLow = message.dayLow);
    message.dayClose !== undefined && (obj.dayClose = message.dayClose);
    message.dayVolume !== undefined && (obj.dayVolume = message.dayVolume);
    message.dayQuoteVolume !== undefined && (obj.dayQuoteVolume = message.dayQuoteVolume);
    message.indexPrice !== undefined && (obj.indexPrice = message.indexPrice);
    message.markPrice !== undefined && (obj.markPrice = message.markPrice);
    message.lastPrice !== undefined && (obj.lastPrice = message.lastPrice);
    message.premiumRate !== undefined && (obj.premiumRate = message.premiumRate);
    message.lastFundingAt !== undefined && (obj.lastFundingAt = message.lastFundingAt.toISOString());
    message.openInterest !== undefined && (obj.openInterest = message.openInterest);
    return obj;
  },

  create(base?: DeepPartial<MarketStats>): MarketStats {
    return MarketStats.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MarketStats>): MarketStats {
    const message = createBaseMarketStats();
    message.marketId = object.marketId ?? "";
    message.marketType = object.marketType ?? "";
    message.dayOpen = object.dayOpen ?? "";
    message.dayHigh = object.dayHigh ?? "";
    message.dayLow = object.dayLow ?? "";
    message.dayClose = object.dayClose ?? "";
    message.dayVolume = object.dayVolume ?? "";
    message.dayQuoteVolume = object.dayQuoteVolume ?? "";
    message.indexPrice = object.indexPrice ?? "";
    message.markPrice = object.markPrice ?? "";
    message.lastPrice = object.lastPrice ?? "";
    message.premiumRate = object.premiumRate ?? "";
    message.lastFundingAt = object.lastFundingAt ?? undefined;
    message.openInterest = object.openInterest ?? "";
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
