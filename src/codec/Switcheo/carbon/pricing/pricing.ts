/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "Switcheo.carbon.pricing";

export interface PriceSet {
  last: string;
  index: string;
  fair: string;
  mark: string;
  markAvg: string;
  settlement: string;
  fairIndexDeltaAvg: string;
  marketId: string;
  markingStrategy: string;
  indexUpdatedAt?: Date;
  settlementCounter: string;
  premiumRate: string;
  premiumRateCounter: string;
  lastFundingAt?: Date;
}

export interface TokenPrice {
  denom: string;
  index: string;
  twap: string;
  indexUpdatedAt?: Date;
  oracleId: string;
}

const basePriceSet: object = {
  last: "",
  index: "",
  fair: "",
  mark: "",
  markAvg: "",
  settlement: "",
  fairIndexDeltaAvg: "",
  marketId: "",
  markingStrategy: "",
  settlementCounter: "",
  premiumRate: "",
  premiumRateCounter: "",
};

export const PriceSet = {
  encode(
    message: PriceSet,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.last !== "") {
      writer.uint32(10).string(message.last);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.fair !== "") {
      writer.uint32(26).string(message.fair);
    }
    if (message.mark !== "") {
      writer.uint32(34).string(message.mark);
    }
    if (message.markAvg !== "") {
      writer.uint32(42).string(message.markAvg);
    }
    if (message.settlement !== "") {
      writer.uint32(50).string(message.settlement);
    }
    if (message.fairIndexDeltaAvg !== "") {
      writer.uint32(58).string(message.fairIndexDeltaAvg);
    }
    if (message.marketId !== "") {
      writer.uint32(66).string(message.marketId);
    }
    if (message.markingStrategy !== "") {
      writer.uint32(74).string(message.markingStrategy);
    }
    if (message.indexUpdatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.indexUpdatedAt),
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.settlementCounter !== "") {
      writer.uint32(98).string(message.settlementCounter);
    }
    if (message.premiumRate !== "") {
      writer.uint32(106).string(message.premiumRate);
    }
    if (message.premiumRateCounter !== "") {
      writer.uint32(114).string(message.premiumRateCounter);
    }
    if (message.lastFundingAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastFundingAt),
        writer.uint32(122).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PriceSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePriceSet } as PriceSet;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.last = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.fair = reader.string();
          break;
        case 4:
          message.mark = reader.string();
          break;
        case 5:
          message.markAvg = reader.string();
          break;
        case 6:
          message.settlement = reader.string();
          break;
        case 7:
          message.fairIndexDeltaAvg = reader.string();
          break;
        case 8:
          message.marketId = reader.string();
          break;
        case 9:
          message.markingStrategy = reader.string();
          break;
        case 10:
          message.indexUpdatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.settlementCounter = reader.string();
          break;
        case 13:
          message.premiumRate = reader.string();
          break;
        case 14:
          message.premiumRateCounter = reader.string();
          break;
        case 15:
          message.lastFundingAt = fromTimestamp(
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

  fromJSON(object: any): PriceSet {
    const message = { ...basePriceSet } as PriceSet;
    message.last =
      object.last !== undefined && object.last !== null
        ? String(object.last)
        : "";
    message.index =
      object.index !== undefined && object.index !== null
        ? String(object.index)
        : "";
    message.fair =
      object.fair !== undefined && object.fair !== null
        ? String(object.fair)
        : "";
    message.mark =
      object.mark !== undefined && object.mark !== null
        ? String(object.mark)
        : "";
    message.markAvg =
      object.markAvg !== undefined && object.markAvg !== null
        ? String(object.markAvg)
        : "";
    message.settlement =
      object.settlement !== undefined && object.settlement !== null
        ? String(object.settlement)
        : "";
    message.fairIndexDeltaAvg =
      object.fairIndexDeltaAvg !== undefined &&
      object.fairIndexDeltaAvg !== null
        ? String(object.fairIndexDeltaAvg)
        : "";
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.markingStrategy =
      object.markingStrategy !== undefined && object.markingStrategy !== null
        ? String(object.markingStrategy)
        : "";
    message.indexUpdatedAt =
      object.indexUpdatedAt !== undefined && object.indexUpdatedAt !== null
        ? fromJsonTimestamp(object.indexUpdatedAt)
        : undefined;
    message.settlementCounter =
      object.settlementCounter !== undefined &&
      object.settlementCounter !== null
        ? String(object.settlementCounter)
        : "";
    message.premiumRate =
      object.premiumRate !== undefined && object.premiumRate !== null
        ? String(object.premiumRate)
        : "";
    message.premiumRateCounter =
      object.premiumRateCounter !== undefined &&
      object.premiumRateCounter !== null
        ? String(object.premiumRateCounter)
        : "";
    message.lastFundingAt =
      object.lastFundingAt !== undefined && object.lastFundingAt !== null
        ? fromJsonTimestamp(object.lastFundingAt)
        : undefined;
    return message;
  },

  toJSON(message: PriceSet): unknown {
    const obj: any = {};
    message.last !== undefined && (obj.last = message.last);
    message.index !== undefined && (obj.index = message.index);
    message.fair !== undefined && (obj.fair = message.fair);
    message.mark !== undefined && (obj.mark = message.mark);
    message.markAvg !== undefined && (obj.markAvg = message.markAvg);
    message.settlement !== undefined && (obj.settlement = message.settlement);
    message.fairIndexDeltaAvg !== undefined &&
      (obj.fairIndexDeltaAvg = message.fairIndexDeltaAvg);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.markingStrategy !== undefined &&
      (obj.markingStrategy = message.markingStrategy);
    message.indexUpdatedAt !== undefined &&
      (obj.indexUpdatedAt = message.indexUpdatedAt.toISOString());
    message.settlementCounter !== undefined &&
      (obj.settlementCounter = message.settlementCounter);
    message.premiumRate !== undefined &&
      (obj.premiumRate = message.premiumRate);
    message.premiumRateCounter !== undefined &&
      (obj.premiumRateCounter = message.premiumRateCounter);
    message.lastFundingAt !== undefined &&
      (obj.lastFundingAt = message.lastFundingAt.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<PriceSet>): PriceSet {
    const message = { ...basePriceSet } as PriceSet;
    message.last = object.last ?? "";
    message.index = object.index ?? "";
    message.fair = object.fair ?? "";
    message.mark = object.mark ?? "";
    message.markAvg = object.markAvg ?? "";
    message.settlement = object.settlement ?? "";
    message.fairIndexDeltaAvg = object.fairIndexDeltaAvg ?? "";
    message.marketId = object.marketId ?? "";
    message.markingStrategy = object.markingStrategy ?? "";
    message.indexUpdatedAt = object.indexUpdatedAt ?? undefined;
    message.settlementCounter = object.settlementCounter ?? "";
    message.premiumRate = object.premiumRate ?? "";
    message.premiumRateCounter = object.premiumRateCounter ?? "";
    message.lastFundingAt = object.lastFundingAt ?? undefined;
    return message;
  },
};

const baseTokenPrice: object = { denom: "", index: "", twap: "", oracleId: "" };

export const TokenPrice = {
  encode(
    message: TokenPrice,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.twap !== "") {
      writer.uint32(26).string(message.twap);
    }
    if (message.indexUpdatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.indexUpdatedAt),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.oracleId !== "") {
      writer.uint32(42).string(message.oracleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenPrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTokenPrice } as TokenPrice;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.twap = reader.string();
          break;
        case 4:
          message.indexUpdatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.oracleId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TokenPrice {
    const message = { ...baseTokenPrice } as TokenPrice;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.index =
      object.index !== undefined && object.index !== null
        ? String(object.index)
        : "";
    message.twap =
      object.twap !== undefined && object.twap !== null
        ? String(object.twap)
        : "";
    message.indexUpdatedAt =
      object.indexUpdatedAt !== undefined && object.indexUpdatedAt !== null
        ? fromJsonTimestamp(object.indexUpdatedAt)
        : undefined;
    message.oracleId =
      object.oracleId !== undefined && object.oracleId !== null
        ? String(object.oracleId)
        : "";
    return message;
  },

  toJSON(message: TokenPrice): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.index !== undefined && (obj.index = message.index);
    message.twap !== undefined && (obj.twap = message.twap);
    message.indexUpdatedAt !== undefined &&
      (obj.indexUpdatedAt = message.indexUpdatedAt.toISOString());
    message.oracleId !== undefined && (obj.oracleId = message.oracleId);
    return obj;
  },

  fromPartial(object: DeepPartial<TokenPrice>): TokenPrice {
    const message = { ...baseTokenPrice } as TokenPrice;
    message.denom = object.denom ?? "";
    message.index = object.index ?? "";
    message.twap = object.twap ?? "";
    message.indexUpdatedAt = object.indexUpdatedAt ?? undefined;
    message.oracleId = object.oracleId ?? "";
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
