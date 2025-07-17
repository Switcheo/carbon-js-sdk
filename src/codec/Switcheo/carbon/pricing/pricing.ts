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

function createBasePriceSet(): PriceSet {
  return {
    last: "",
    index: "",
    fair: "",
    mark: "",
    markAvg: "",
    settlement: "",
    fairIndexDeltaAvg: "",
    marketId: "",
    markingStrategy: "",
    indexUpdatedAt: undefined,
    settlementCounter: "",
    premiumRate: "",
    premiumRateCounter: "",
    lastFundingAt: undefined,
    volatilityScore: "",
  };
}

export const PriceSet = {
  encode(message: PriceSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Timestamp.encode(toTimestamp(message.indexUpdatedAt), writer.uint32(82).fork()).ldelim();
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
      Timestamp.encode(toTimestamp(message.lastFundingAt), writer.uint32(122).fork()).ldelim();
    }
    if (message.volatilityScore !== "") {
      writer.uint32(130).string(message.volatilityScore);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PriceSet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.last = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.index = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fair = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.mark = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.markAvg = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.settlement = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.fairIndexDeltaAvg = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.marketId = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.markingStrategy = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.indexUpdatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.settlementCounter = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.premiumRate = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.premiumRateCounter = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.lastFundingAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.volatilityScore = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PriceSet {
    return {
      last: isSet(object.last) ? String(object.last) : "",
      index: isSet(object.index) ? String(object.index) : "",
      fair: isSet(object.fair) ? String(object.fair) : "",
      mark: isSet(object.mark) ? String(object.mark) : "",
      markAvg: isSet(object.markAvg) ? String(object.markAvg) : "",
      settlement: isSet(object.settlement) ? String(object.settlement) : "",
      fairIndexDeltaAvg: isSet(object.fairIndexDeltaAvg) ? String(object.fairIndexDeltaAvg) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      markingStrategy: isSet(object.markingStrategy) ? String(object.markingStrategy) : "",
      indexUpdatedAt: isSet(object.indexUpdatedAt) ? fromJsonTimestamp(object.indexUpdatedAt) : undefined,
      settlementCounter: isSet(object.settlementCounter) ? String(object.settlementCounter) : "",
      premiumRate: isSet(object.premiumRate) ? String(object.premiumRate) : "",
      premiumRateCounter: isSet(object.premiumRateCounter) ? String(object.premiumRateCounter) : "",
      lastFundingAt: isSet(object.lastFundingAt) ? fromJsonTimestamp(object.lastFundingAt) : undefined,
      volatilityScore: isSet(object.volatilityScore) ? String(object.volatilityScore) : "",
    };
  },

  toJSON(message: PriceSet): unknown {
    const obj: any = {};
    message.last !== undefined && (obj.last = message.last);
    message.index !== undefined && (obj.index = message.index);
    message.fair !== undefined && (obj.fair = message.fair);
    message.mark !== undefined && (obj.mark = message.mark);
    message.markAvg !== undefined && (obj.markAvg = message.markAvg);
    message.settlement !== undefined && (obj.settlement = message.settlement);
    message.fairIndexDeltaAvg !== undefined && (obj.fairIndexDeltaAvg = message.fairIndexDeltaAvg);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.markingStrategy !== undefined && (obj.markingStrategy = message.markingStrategy);
    message.indexUpdatedAt !== undefined && (obj.indexUpdatedAt = message.indexUpdatedAt.toISOString());
    message.settlementCounter !== undefined && (obj.settlementCounter = message.settlementCounter);
    message.premiumRate !== undefined && (obj.premiumRate = message.premiumRate);
    message.premiumRateCounter !== undefined && (obj.premiumRateCounter = message.premiumRateCounter);
    message.lastFundingAt !== undefined && (obj.lastFundingAt = message.lastFundingAt.toISOString());
    message.volatilityScore !== undefined && (obj.volatilityScore = message.volatilityScore);
    return obj;
  },

  create(base?: DeepPartial<PriceSet>): PriceSet {
    return PriceSet.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PriceSet>): PriceSet {
    const message = createBasePriceSet();
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

function createBaseTokenPrice(): TokenPrice {
  return { denom: "", index: "", twap: "", indexUpdatedAt: undefined, oracleId: "" };
}

export const TokenPrice = {
  encode(message: TokenPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Timestamp.encode(toTimestamp(message.indexUpdatedAt), writer.uint32(34).fork()).ldelim();
    }
    if (message.oracleId !== "") {
      writer.uint32(42).string(message.oracleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenPrice {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.index = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.twap = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.indexUpdatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.oracleId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TokenPrice {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      index: isSet(object.index) ? String(object.index) : "",
      twap: isSet(object.twap) ? String(object.twap) : "",
      indexUpdatedAt: isSet(object.indexUpdatedAt) ? fromJsonTimestamp(object.indexUpdatedAt) : undefined,
      oracleId: isSet(object.oracleId) ? String(object.oracleId) : "",
    };
  },

  toJSON(message: TokenPrice): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.index !== undefined && (obj.index = message.index);
    message.twap !== undefined && (obj.twap = message.twap);
    message.indexUpdatedAt !== undefined && (obj.indexUpdatedAt = message.indexUpdatedAt.toISOString());
    message.oracleId !== undefined && (obj.oracleId = message.oracleId);
    return obj;
  },

  create(base?: DeepPartial<TokenPrice>): TokenPrice {
    return TokenPrice.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TokenPrice>): TokenPrice {
    const message = createBaseTokenPrice();
    message.denom = object.denom ?? "";
    message.index = object.index ?? "";
    message.twap = object.twap ?? "";
    message.indexUpdatedAt = object.indexUpdatedAt ?? undefined;
    message.oracleId = object.oracleId ?? "";
    return message;
  },
};

function createBaseIndexPriceForMarket(): IndexPriceForMarket {
  return { marketId: "", index: "", timestamp: undefined };
}

export const IndexPriceForMarket = {
  encode(message: IndexPriceForMarket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IndexPriceForMarket {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexPriceForMarket();
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

          message.index = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IndexPriceForMarket {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      index: isSet(object.index) ? String(object.index) : "",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
    };
  },

  toJSON(message: IndexPriceForMarket): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.index !== undefined && (obj.index = message.index);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },

  create(base?: DeepPartial<IndexPriceForMarket>): IndexPriceForMarket {
    return IndexPriceForMarket.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<IndexPriceForMarket>): IndexPriceForMarket {
    const message = createBaseIndexPriceForMarket();
    message.marketId = object.marketId ?? "";
    message.index = object.index ?? "";
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
};

function createBaseBucketScore(): BucketScore {
  return { historicalVolatility: "", score: "" };
}

export const BucketScore = {
  encode(message: BucketScore, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.historicalVolatility !== "") {
      writer.uint32(10).string(message.historicalVolatility);
    }
    if (message.score !== "") {
      writer.uint32(18).string(message.score);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BucketScore {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBucketScore();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.historicalVolatility = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.score = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BucketScore {
    return {
      historicalVolatility: isSet(object.historicalVolatility) ? String(object.historicalVolatility) : "",
      score: isSet(object.score) ? String(object.score) : "",
    };
  },

  toJSON(message: BucketScore): unknown {
    const obj: any = {};
    message.historicalVolatility !== undefined && (obj.historicalVolatility = message.historicalVolatility);
    message.score !== undefined && (obj.score = message.score);
    return obj;
  },

  create(base?: DeepPartial<BucketScore>): BucketScore {
    return BucketScore.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<BucketScore>): BucketScore {
    const message = createBaseBucketScore();
    message.historicalVolatility = object.historicalVolatility ?? "";
    message.score = object.score ?? "";
    return message;
  },
};

function createBaseVolatilityScoreDetails(): VolatilityScoreDetails {
  return { marketId: "", bucketScores: {}, volatilityScore: "" };
}

export const VolatilityScoreDetails = {
  encode(message: VolatilityScoreDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    Object.entries(message.bucketScores).forEach(([key, value]) => {
      VolatilityScoreDetails_BucketScoresEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    if (message.volatilityScore !== "") {
      writer.uint32(26).string(message.volatilityScore);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VolatilityScoreDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVolatilityScoreDetails();
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

          const entry2 = VolatilityScoreDetails_BucketScoresEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.bucketScores[entry2.key] = entry2.value;
          }
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.volatilityScore = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VolatilityScoreDetails {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      bucketScores: isObject(object.bucketScores)
        ? Object.entries(object.bucketScores).reduce<{ [key: number]: BucketScore }>((acc, [key, value]) => {
          acc[Number(key)] = BucketScore.fromJSON(value);
          return acc;
        }, {})
        : {},
      volatilityScore: isSet(object.volatilityScore) ? String(object.volatilityScore) : "",
    };
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
    message.volatilityScore !== undefined && (obj.volatilityScore = message.volatilityScore);
    return obj;
  },

  create(base?: DeepPartial<VolatilityScoreDetails>): VolatilityScoreDetails {
    return VolatilityScoreDetails.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<VolatilityScoreDetails>): VolatilityScoreDetails {
    const message = createBaseVolatilityScoreDetails();
    message.marketId = object.marketId ?? "";
    message.bucketScores = Object.entries(object.bucketScores ?? {}).reduce<{ [key: number]: BucketScore }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[Number(key)] = BucketScore.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.volatilityScore = object.volatilityScore ?? "";
    return message;
  },
};

function createBaseVolatilityScoreDetails_BucketScoresEntry(): VolatilityScoreDetails_BucketScoresEntry {
  return { key: 0, value: undefined };
}

export const VolatilityScoreDetails_BucketScoresEntry = {
  encode(message: VolatilityScoreDetails_BucketScoresEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      BucketScore.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VolatilityScoreDetails_BucketScoresEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVolatilityScoreDetails_BucketScoresEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.key = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = BucketScore.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VolatilityScoreDetails_BucketScoresEntry {
    return {
      key: isSet(object.key) ? Number(object.key) : 0,
      value: isSet(object.value) ? BucketScore.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: VolatilityScoreDetails_BucketScoresEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined && (obj.value = message.value ? BucketScore.toJSON(message.value) : undefined);
    return obj;
  },

  create(base?: DeepPartial<VolatilityScoreDetails_BucketScoresEntry>): VolatilityScoreDetails_BucketScoresEntry {
    return VolatilityScoreDetails_BucketScoresEntry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<VolatilityScoreDetails_BucketScoresEntry>): VolatilityScoreDetails_BucketScoresEntry {
    const message = createBaseVolatilityScoreDetails_BucketScoresEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? BucketScore.fromPartial(object.value)
      : undefined;
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
