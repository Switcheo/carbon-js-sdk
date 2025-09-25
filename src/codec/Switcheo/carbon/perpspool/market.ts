/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { StringValue, UInt64Value } from "../../../google/protobuf/wrappers";
import { Quote, QuoteStrategy } from "./quote";

export const protobufPackage = "Switcheo.carbon.perpspool";

/** MarketConfig config for each market in the Pool */
export interface MarketConfig {
  /** unique id representing the market */
  marketId: string;
  /**
   * ratio of the pool liquidity that can be used for the market
   * ratio where 0 < max_liquidity_ratio <= 1
   */
  maxLiquidityRatio: string;
  /**
   * borrow_fee_multiplier controls the multiplier for the base borrow fee
   * charged on the pool. riskier markets should have a higher multiplier
   */
  borrowFeeMultiplier: string;
  /**
   * Available modes:
   * active - market is active for quoting
   * paused - open quotes are cancelled, current positions are held, no new
   * quotes close_only - quotes will be open only on the closing side. borrow
   * fees are increased?
   */
  mode: string;
  /**
   * represents the shape of quoting for each side against [0] index price, [1+]
   * prev quotes
   * TODO: Deprecate after migration of Migrate3to4 in perpspool and FE have
   * migrated to use quote_strategy, currently this is still used for backward
   * compatibility
   *
   * @deprecated
   */
  quoteShape: Quote[];
  /**
   * represents the quote strategy of quoting for each side against [0] index
   * price, [1+] prev quotes
   */
  quoteStrategyId: Long;
}

/** Same as MarketConfig but with QuoteStrategy */
export interface DetailedMarketConfig {
  marketConfig?: MarketConfig;
  quoteStrategy?: QuoteStrategy;
}

export interface UpdateMarketConfigParams {
  maxLiquidityRatio: string;
  borrowFeeMultiplier: string;
  mode?: string;
  /** (gogoproto.nullable) = false ]; */
  quoteStrategyId?: Long;
}

/**
 * MarketUtilizationRateSnapshot represents the utilization rate of a market at
 * a given timestamp
 */
export interface MarketUtilizationRateSnapshot {
  timestamp?: Date;
  utilizationRate: string;
}

/**
 * TWAMarketUtilizationRate represents the calculated TWA utilization rate of a
 * market
 */
export interface TWAMarketUtilizationRate {
  lastUpdatedAt?: Date;
  twaUtilizationRate: string;
}

export interface MarketLiquidityUsageMultiplier {
  marketId: string;
  multiplier: string;
}

export interface DetailedQuoteStrategy {
  quoteStrategy?: QuoteStrategy;
  marketConfigs: MarketConfig[];
}

function createBaseMarketConfig(): MarketConfig {
  return {
    marketId: "",
    maxLiquidityRatio: "",
    borrowFeeMultiplier: "",
    mode: "",
    quoteShape: [],
    quoteStrategyId: Long.UZERO,
  };
}

export const MarketConfig = {
  encode(message: MarketConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.maxLiquidityRatio !== "") {
      writer.uint32(18).string(message.maxLiquidityRatio);
    }
    if (message.borrowFeeMultiplier !== "") {
      writer.uint32(26).string(message.borrowFeeMultiplier);
    }
    if (message.mode !== "") {
      writer.uint32(34).string(message.mode);
    }
    for (const v of message.quoteShape) {
      Quote.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (!message.quoteStrategyId.isZero()) {
      writer.uint32(48).uint64(message.quoteStrategyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketConfig();
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

          message.maxLiquidityRatio = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.borrowFeeMultiplier = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.mode = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.quoteShape.push(Quote.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.quoteStrategyId = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MarketConfig {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      maxLiquidityRatio: isSet(object.maxLiquidityRatio) ? String(object.maxLiquidityRatio) : "",
      borrowFeeMultiplier: isSet(object.borrowFeeMultiplier) ? String(object.borrowFeeMultiplier) : "",
      mode: isSet(object.mode) ? String(object.mode) : "",
      quoteShape: Array.isArray(object?.quoteShape) ? object.quoteShape.map((e: any) => Quote.fromJSON(e)) : [],
      quoteStrategyId: isSet(object.quoteStrategyId) ? Long.fromValue(object.quoteStrategyId) : Long.UZERO,
    };
  },

  toJSON(message: MarketConfig): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.maxLiquidityRatio !== undefined && (obj.maxLiquidityRatio = message.maxLiquidityRatio);
    message.borrowFeeMultiplier !== undefined && (obj.borrowFeeMultiplier = message.borrowFeeMultiplier);
    message.mode !== undefined && (obj.mode = message.mode);
    if (message.quoteShape) {
      obj.quoteShape = message.quoteShape.map((e) => e ? Quote.toJSON(e) : undefined);
    } else {
      obj.quoteShape = [];
    }
    message.quoteStrategyId !== undefined && (obj.quoteStrategyId = (message.quoteStrategyId || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<MarketConfig>): MarketConfig {
    return MarketConfig.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MarketConfig>): MarketConfig {
    const message = createBaseMarketConfig();
    message.marketId = object.marketId ?? "";
    message.maxLiquidityRatio = object.maxLiquidityRatio ?? "";
    message.borrowFeeMultiplier = object.borrowFeeMultiplier ?? "";
    message.mode = object.mode ?? "";
    message.quoteShape = object.quoteShape?.map((e) => Quote.fromPartial(e)) || [];
    message.quoteStrategyId = (object.quoteStrategyId !== undefined && object.quoteStrategyId !== null)
      ? Long.fromValue(object.quoteStrategyId)
      : Long.UZERO;
    return message;
  },
};

function createBaseDetailedMarketConfig(): DetailedMarketConfig {
  return { marketConfig: undefined, quoteStrategy: undefined };
}

export const DetailedMarketConfig = {
  encode(message: DetailedMarketConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketConfig !== undefined) {
      MarketConfig.encode(message.marketConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.quoteStrategy !== undefined) {
      QuoteStrategy.encode(message.quoteStrategy, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DetailedMarketConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDetailedMarketConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.marketConfig = MarketConfig.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.quoteStrategy = QuoteStrategy.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DetailedMarketConfig {
    return {
      marketConfig: isSet(object.marketConfig) ? MarketConfig.fromJSON(object.marketConfig) : undefined,
      quoteStrategy: isSet(object.quoteStrategy) ? QuoteStrategy.fromJSON(object.quoteStrategy) : undefined,
    };
  },

  toJSON(message: DetailedMarketConfig): unknown {
    const obj: any = {};
    message.marketConfig !== undefined &&
      (obj.marketConfig = message.marketConfig ? MarketConfig.toJSON(message.marketConfig) : undefined);
    message.quoteStrategy !== undefined &&
      (obj.quoteStrategy = message.quoteStrategy ? QuoteStrategy.toJSON(message.quoteStrategy) : undefined);
    return obj;
  },

  create(base?: DeepPartial<DetailedMarketConfig>): DetailedMarketConfig {
    return DetailedMarketConfig.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DetailedMarketConfig>): DetailedMarketConfig {
    const message = createBaseDetailedMarketConfig();
    message.marketConfig = (object.marketConfig !== undefined && object.marketConfig !== null)
      ? MarketConfig.fromPartial(object.marketConfig)
      : undefined;
    message.quoteStrategy = (object.quoteStrategy !== undefined && object.quoteStrategy !== null)
      ? QuoteStrategy.fromPartial(object.quoteStrategy)
      : undefined;
    return message;
  },
};

function createBaseUpdateMarketConfigParams(): UpdateMarketConfigParams {
  return { maxLiquidityRatio: "", borrowFeeMultiplier: "", mode: undefined, quoteStrategyId: undefined };
}

export const UpdateMarketConfigParams = {
  encode(message: UpdateMarketConfigParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxLiquidityRatio !== "") {
      writer.uint32(10).string(message.maxLiquidityRatio);
    }
    if (message.borrowFeeMultiplier !== "") {
      writer.uint32(18).string(message.borrowFeeMultiplier);
    }
    if (message.mode !== undefined) {
      StringValue.encode({ value: message.mode! }, writer.uint32(26).fork()).ldelim();
    }
    if (message.quoteStrategyId !== undefined) {
      UInt64Value.encode({ value: message.quoteStrategyId! }, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMarketConfigParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateMarketConfigParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.maxLiquidityRatio = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.borrowFeeMultiplier = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mode = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.quoteStrategyId = UInt64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateMarketConfigParams {
    return {
      maxLiquidityRatio: isSet(object.maxLiquidityRatio) ? String(object.maxLiquidityRatio) : "",
      borrowFeeMultiplier: isSet(object.borrowFeeMultiplier) ? String(object.borrowFeeMultiplier) : "",
      mode: isSet(object.mode) ? String(object.mode) : undefined,
      quoteStrategyId: isSet(object.quoteStrategyId) ? Long.fromValue(object.quoteStrategyId) : undefined,
    };
  },

  toJSON(message: UpdateMarketConfigParams): unknown {
    const obj: any = {};
    message.maxLiquidityRatio !== undefined && (obj.maxLiquidityRatio = message.maxLiquidityRatio);
    message.borrowFeeMultiplier !== undefined && (obj.borrowFeeMultiplier = message.borrowFeeMultiplier);
    message.mode !== undefined && (obj.mode = message.mode);
    message.quoteStrategyId !== undefined && (obj.quoteStrategyId = message.quoteStrategyId);
    return obj;
  },

  create(base?: DeepPartial<UpdateMarketConfigParams>): UpdateMarketConfigParams {
    return UpdateMarketConfigParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateMarketConfigParams>): UpdateMarketConfigParams {
    const message = createBaseUpdateMarketConfigParams();
    message.maxLiquidityRatio = object.maxLiquidityRatio ?? "";
    message.borrowFeeMultiplier = object.borrowFeeMultiplier ?? "";
    message.mode = object.mode ?? undefined;
    message.quoteStrategyId = (object.quoteStrategyId !== undefined && object.quoteStrategyId !== null)
      ? Long.fromValue(object.quoteStrategyId)
      : undefined;
    return message;
  },
};

function createBaseMarketUtilizationRateSnapshot(): MarketUtilizationRateSnapshot {
  return { timestamp: undefined, utilizationRate: "" };
}

export const MarketUtilizationRateSnapshot = {
  encode(message: MarketUtilizationRateSnapshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
    }
    if (message.utilizationRate !== "") {
      writer.uint32(18).string(message.utilizationRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketUtilizationRateSnapshot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketUtilizationRateSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.utilizationRate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MarketUtilizationRateSnapshot {
    return {
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      utilizationRate: isSet(object.utilizationRate) ? String(object.utilizationRate) : "",
    };
  },

  toJSON(message: MarketUtilizationRateSnapshot): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    message.utilizationRate !== undefined && (obj.utilizationRate = message.utilizationRate);
    return obj;
  },

  create(base?: DeepPartial<MarketUtilizationRateSnapshot>): MarketUtilizationRateSnapshot {
    return MarketUtilizationRateSnapshot.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MarketUtilizationRateSnapshot>): MarketUtilizationRateSnapshot {
    const message = createBaseMarketUtilizationRateSnapshot();
    message.timestamp = object.timestamp ?? undefined;
    message.utilizationRate = object.utilizationRate ?? "";
    return message;
  },
};

function createBaseTWAMarketUtilizationRate(): TWAMarketUtilizationRate {
  return { lastUpdatedAt: undefined, twaUtilizationRate: "" };
}

export const TWAMarketUtilizationRate = {
  encode(message: TWAMarketUtilizationRate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lastUpdatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.lastUpdatedAt), writer.uint32(10).fork()).ldelim();
    }
    if (message.twaUtilizationRate !== "") {
      writer.uint32(18).string(message.twaUtilizationRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TWAMarketUtilizationRate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTWAMarketUtilizationRate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lastUpdatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.twaUtilizationRate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TWAMarketUtilizationRate {
    return {
      lastUpdatedAt: isSet(object.lastUpdatedAt) ? fromJsonTimestamp(object.lastUpdatedAt) : undefined,
      twaUtilizationRate: isSet(object.twaUtilizationRate) ? String(object.twaUtilizationRate) : "",
    };
  },

  toJSON(message: TWAMarketUtilizationRate): unknown {
    const obj: any = {};
    message.lastUpdatedAt !== undefined && (obj.lastUpdatedAt = message.lastUpdatedAt.toISOString());
    message.twaUtilizationRate !== undefined && (obj.twaUtilizationRate = message.twaUtilizationRate);
    return obj;
  },

  create(base?: DeepPartial<TWAMarketUtilizationRate>): TWAMarketUtilizationRate {
    return TWAMarketUtilizationRate.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TWAMarketUtilizationRate>): TWAMarketUtilizationRate {
    const message = createBaseTWAMarketUtilizationRate();
    message.lastUpdatedAt = object.lastUpdatedAt ?? undefined;
    message.twaUtilizationRate = object.twaUtilizationRate ?? "";
    return message;
  },
};

function createBaseMarketLiquidityUsageMultiplier(): MarketLiquidityUsageMultiplier {
  return { marketId: "", multiplier: "" };
}

export const MarketLiquidityUsageMultiplier = {
  encode(message: MarketLiquidityUsageMultiplier, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.multiplier !== "") {
      writer.uint32(18).string(message.multiplier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketLiquidityUsageMultiplier {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketLiquidityUsageMultiplier();
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

          message.multiplier = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MarketLiquidityUsageMultiplier {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      multiplier: isSet(object.multiplier) ? String(object.multiplier) : "",
    };
  },

  toJSON(message: MarketLiquidityUsageMultiplier): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.multiplier !== undefined && (obj.multiplier = message.multiplier);
    return obj;
  },

  create(base?: DeepPartial<MarketLiquidityUsageMultiplier>): MarketLiquidityUsageMultiplier {
    return MarketLiquidityUsageMultiplier.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MarketLiquidityUsageMultiplier>): MarketLiquidityUsageMultiplier {
    const message = createBaseMarketLiquidityUsageMultiplier();
    message.marketId = object.marketId ?? "";
    message.multiplier = object.multiplier ?? "";
    return message;
  },
};

function createBaseDetailedQuoteStrategy(): DetailedQuoteStrategy {
  return { quoteStrategy: undefined, marketConfigs: [] };
}

export const DetailedQuoteStrategy = {
  encode(message: DetailedQuoteStrategy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quoteStrategy !== undefined) {
      QuoteStrategy.encode(message.quoteStrategy, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.marketConfigs) {
      MarketConfig.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DetailedQuoteStrategy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDetailedQuoteStrategy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.quoteStrategy = QuoteStrategy.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.marketConfigs.push(MarketConfig.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DetailedQuoteStrategy {
    return {
      quoteStrategy: isSet(object.quoteStrategy) ? QuoteStrategy.fromJSON(object.quoteStrategy) : undefined,
      marketConfigs: Array.isArray(object?.marketConfigs)
        ? object.marketConfigs.map((e: any) => MarketConfig.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DetailedQuoteStrategy): unknown {
    const obj: any = {};
    message.quoteStrategy !== undefined &&
      (obj.quoteStrategy = message.quoteStrategy ? QuoteStrategy.toJSON(message.quoteStrategy) : undefined);
    if (message.marketConfigs) {
      obj.marketConfigs = message.marketConfigs.map((e) => e ? MarketConfig.toJSON(e) : undefined);
    } else {
      obj.marketConfigs = [];
    }
    return obj;
  },

  create(base?: DeepPartial<DetailedQuoteStrategy>): DetailedQuoteStrategy {
    return DetailedQuoteStrategy.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DetailedQuoteStrategy>): DetailedQuoteStrategy {
    const message = createBaseDetailedQuoteStrategy();
    message.quoteStrategy = (object.quoteStrategy !== undefined && object.quoteStrategy !== null)
      ? QuoteStrategy.fromPartial(object.quoteStrategy)
      : undefined;
    message.marketConfigs = object.marketConfigs?.map((e) => MarketConfig.fromPartial(e)) || [];
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
