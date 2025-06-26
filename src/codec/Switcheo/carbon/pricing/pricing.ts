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
  volatilityScore: string;
}

export interface TokenPrice {
  denom: string;
  index: string;
  twap: string;
  indexUpdatedAt?: Date;
  oracleId: string;
}

export interface IndexPriceForMarket {
  marketId: string;
  index: string;
  timestamp?: Date;
}

export interface BucketScore {
  historicalVolatility: string;
  score: string;
}

export interface VolatilityScoreDetails {
  marketId: string;
  bucketScores: { [key: number]: BucketScore };
  volatilityScore: string;
}

export interface VolatilityScoreDetails_BucketScoresEntry {
  key: number;
  value?: BucketScore;
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
  volatilityScore: "",
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
    if (message.volatilityScore !== "") {
      writer.uint32(130).string(message.volatilityScore);
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
        case 16:
          message.volatilityScore = reader.string();
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
    message.volatilityScore =
      object.volatilityScore !== undefined && object.volatilityScore !== null
        ? String(object.volatilityScore)
        : "";
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
    message.volatilityScore !== undefined &&
      (obj.volatilityScore = message.volatilityScore);
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
    message.volatilityScore = object.volatilityScore ?? "";
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

const baseIndexPriceForMarket: object = { marketId: "", index: "" };

export const IndexPriceForMarket = {
  encode(
    message: IndexPriceForMarket,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IndexPriceForMarket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIndexPriceForMarket } as IndexPriceForMarket;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.timestamp = fromTimestamp(
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

  fromJSON(object: any): IndexPriceForMarket {
    const message = { ...baseIndexPriceForMarket } as IndexPriceForMarket;
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.index =
      object.index !== undefined && object.index !== null
        ? String(object.index)
        : "";
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? fromJsonTimestamp(object.timestamp)
        : undefined;
    return message;
  },

  toJSON(message: IndexPriceForMarket): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.index !== undefined && (obj.index = message.index);
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<IndexPriceForMarket>): IndexPriceForMarket {
    const message = { ...baseIndexPriceForMarket } as IndexPriceForMarket;
    message.marketId = object.marketId ?? "";
    message.index = object.index ?? "";
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
};

const baseBucketScore: object = { historicalVolatility: "", score: "" };

export const BucketScore = {
  encode(
    message: BucketScore,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.historicalVolatility !== "") {
      writer.uint32(10).string(message.historicalVolatility);
    }
    if (message.score !== "") {
      writer.uint32(18).string(message.score);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BucketScore {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBucketScore } as BucketScore;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.historicalVolatility = reader.string();
          break;
        case 2:
          message.score = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BucketScore {
    const message = { ...baseBucketScore } as BucketScore;
    message.historicalVolatility =
      object.historicalVolatility !== undefined &&
      object.historicalVolatility !== null
        ? String(object.historicalVolatility)
        : "";
    message.score =
      object.score !== undefined && object.score !== null
        ? String(object.score)
        : "";
    return message;
  },

  toJSON(message: BucketScore): unknown {
    const obj: any = {};
    message.historicalVolatility !== undefined &&
      (obj.historicalVolatility = message.historicalVolatility);
    message.score !== undefined && (obj.score = message.score);
    return obj;
  },

  fromPartial(object: DeepPartial<BucketScore>): BucketScore {
    const message = { ...baseBucketScore } as BucketScore;
    message.historicalVolatility = object.historicalVolatility ?? "";
    message.score = object.score ?? "";
    return message;
  },
};

const baseVolatilityScoreDetails: object = {
  marketId: "",
  volatilityScore: "",
};

export const VolatilityScoreDetails = {
  encode(
    message: VolatilityScoreDetails,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    Object.entries(message.bucketScores).forEach(([key, value]) => {
      VolatilityScoreDetails_BucketScoresEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork()
      ).ldelim();
    });
    if (message.volatilityScore !== "") {
      writer.uint32(26).string(message.volatilityScore);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): VolatilityScoreDetails {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVolatilityScoreDetails } as VolatilityScoreDetails;
    message.bucketScores = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          const entry2 = VolatilityScoreDetails_BucketScoresEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry2.value !== undefined) {
            message.bucketScores[entry2.key] = entry2.value;
          }
          break;
        case 3:
          message.volatilityScore = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VolatilityScoreDetails {
    const message = { ...baseVolatilityScoreDetails } as VolatilityScoreDetails;
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.bucketScores = Object.entries(object.bucketScores ?? {}).reduce<{
      [key: number]: BucketScore;
    }>((acc, [key, value]) => {
      acc[Number(key)] = BucketScore.fromJSON(value);
      return acc;
    }, {});
    message.volatilityScore =
      object.volatilityScore !== undefined && object.volatilityScore !== null
        ? String(object.volatilityScore)
        : "";
    return message;
  },

  toJSON(message: VolatilityScoreDetails): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    obj.bucketScores = {};
    if (message.bucketScores) {
      Object.entries(message.bucketScores).forEach(([k, v]) => {
        obj.bucketScores[k] = BucketScore.toJSON(v);
      });
    }
    message.volatilityScore !== undefined &&
      (obj.volatilityScore = message.volatilityScore);
    return obj;
  },

  fromPartial(
    object: DeepPartial<VolatilityScoreDetails>
  ): VolatilityScoreDetails {
    const message = { ...baseVolatilityScoreDetails } as VolatilityScoreDetails;
    message.marketId = object.marketId ?? "";
    message.bucketScores = Object.entries(object.bucketScores ?? {}).reduce<{
      [key: number]: BucketScore;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = BucketScore.fromPartial(value);
      }
      return acc;
    }, {});
    message.volatilityScore = object.volatilityScore ?? "";
    return message;
  },
};

const baseVolatilityScoreDetails_BucketScoresEntry: object = { key: 0 };

export const VolatilityScoreDetails_BucketScoresEntry = {
  encode(
    message: VolatilityScoreDetails_BucketScoresEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      BucketScore.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): VolatilityScoreDetails_BucketScoresEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseVolatilityScoreDetails_BucketScoresEntry,
    } as VolatilityScoreDetails_BucketScoresEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint32();
          break;
        case 2:
          message.value = BucketScore.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VolatilityScoreDetails_BucketScoresEntry {
    const message = {
      ...baseVolatilityScoreDetails_BucketScoresEntry,
    } as VolatilityScoreDetails_BucketScoresEntry;
    message.key =
      object.key !== undefined && object.key !== null ? Number(object.key) : 0;
    message.value =
      object.value !== undefined && object.value !== null
        ? BucketScore.fromJSON(object.value)
        : undefined;
    return message;
  },

  toJSON(message: VolatilityScoreDetails_BucketScoresEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? BucketScore.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<VolatilityScoreDetails_BucketScoresEntry>
  ): VolatilityScoreDetails_BucketScoresEntry {
    const message = {
      ...baseVolatilityScoreDetails_BucketScoresEntry,
    } as VolatilityScoreDetails_BucketScoresEntry;
    message.key = object.key ?? 0;
    message.value =
      object.value !== undefined && object.value !== null
        ? BucketScore.fromPartial(object.value)
        : undefined;
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
