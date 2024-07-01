/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { StringValue } from "../../../google/protobuf/wrappers";

export const protobufPackage = "Switcheo.carbon.perpspool";

export interface Quote {
  quotePriceType: string;
  quotePriceValue: string;
  quoteAmountRatio: string;
}

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
   */
  quoteShape: Quote[];
}

export interface UpdateMarketConfigParams {
  maxLiquidityRatio: string;
  borrowFeeMultiplier: string;
  mode?: string;
  quoteShape: Quote[];
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

const baseQuote: object = {
  quotePriceType: "",
  quotePriceValue: "",
  quoteAmountRatio: "",
};

export const Quote = {
  encode(message: Quote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quotePriceType !== "") {
      writer.uint32(10).string(message.quotePriceType);
    }
    if (message.quotePriceValue !== "") {
      writer.uint32(18).string(message.quotePriceValue);
    }
    if (message.quoteAmountRatio !== "") {
      writer.uint32(26).string(message.quoteAmountRatio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Quote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuote } as Quote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quotePriceType = reader.string();
          break;
        case 2:
          message.quotePriceValue = reader.string();
          break;
        case 3:
          message.quoteAmountRatio = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Quote {
    const message = { ...baseQuote } as Quote;
    message.quotePriceType =
      object.quotePriceType !== undefined && object.quotePriceType !== null
        ? String(object.quotePriceType)
        : "";
    message.quotePriceValue =
      object.quotePriceValue !== undefined && object.quotePriceValue !== null
        ? String(object.quotePriceValue)
        : "";
    message.quoteAmountRatio =
      object.quoteAmountRatio !== undefined && object.quoteAmountRatio !== null
        ? String(object.quoteAmountRatio)
        : "";
    return message;
  },

  toJSON(message: Quote): unknown {
    const obj: any = {};
    message.quotePriceType !== undefined &&
      (obj.quotePriceType = message.quotePriceType);
    message.quotePriceValue !== undefined &&
      (obj.quotePriceValue = message.quotePriceValue);
    message.quoteAmountRatio !== undefined &&
      (obj.quoteAmountRatio = message.quoteAmountRatio);
    return obj;
  },

  fromPartial(object: DeepPartial<Quote>): Quote {
    const message = { ...baseQuote } as Quote;
    message.quotePriceType = object.quotePriceType ?? "";
    message.quotePriceValue = object.quotePriceValue ?? "";
    message.quoteAmountRatio = object.quoteAmountRatio ?? "";
    return message;
  },
};

const baseMarketConfig: object = {
  marketId: "",
  maxLiquidityRatio: "",
  borrowFeeMultiplier: "",
  mode: "",
};

export const MarketConfig = {
  encode(
    message: MarketConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMarketConfig } as MarketConfig;
    message.quoteShape = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.maxLiquidityRatio = reader.string();
          break;
        case 3:
          message.borrowFeeMultiplier = reader.string();
          break;
        case 4:
          message.mode = reader.string();
          break;
        case 5:
          message.quoteShape.push(Quote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketConfig {
    const message = { ...baseMarketConfig } as MarketConfig;
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.maxLiquidityRatio =
      object.maxLiquidityRatio !== undefined &&
      object.maxLiquidityRatio !== null
        ? String(object.maxLiquidityRatio)
        : "";
    message.borrowFeeMultiplier =
      object.borrowFeeMultiplier !== undefined &&
      object.borrowFeeMultiplier !== null
        ? String(object.borrowFeeMultiplier)
        : "";
    message.mode =
      object.mode !== undefined && object.mode !== null
        ? String(object.mode)
        : "";
    message.quoteShape = (object.quoteShape ?? []).map((e: any) =>
      Quote.fromJSON(e)
    );
    return message;
  },

  toJSON(message: MarketConfig): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.maxLiquidityRatio !== undefined &&
      (obj.maxLiquidityRatio = message.maxLiquidityRatio);
    message.borrowFeeMultiplier !== undefined &&
      (obj.borrowFeeMultiplier = message.borrowFeeMultiplier);
    message.mode !== undefined && (obj.mode = message.mode);
    if (message.quoteShape) {
      obj.quoteShape = message.quoteShape.map((e) =>
        e ? Quote.toJSON(e) : undefined
      );
    } else {
      obj.quoteShape = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MarketConfig>): MarketConfig {
    const message = { ...baseMarketConfig } as MarketConfig;
    message.marketId = object.marketId ?? "";
    message.maxLiquidityRatio = object.maxLiquidityRatio ?? "";
    message.borrowFeeMultiplier = object.borrowFeeMultiplier ?? "";
    message.mode = object.mode ?? "";
    message.quoteShape = (object.quoteShape ?? []).map((e) =>
      Quote.fromPartial(e)
    );
    return message;
  },
};

const baseUpdateMarketConfigParams: object = {
  maxLiquidityRatio: "",
  borrowFeeMultiplier: "",
};

export const UpdateMarketConfigParams = {
  encode(
    message: UpdateMarketConfigParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.maxLiquidityRatio !== "") {
      writer.uint32(10).string(message.maxLiquidityRatio);
    }
    if (message.borrowFeeMultiplier !== "") {
      writer.uint32(18).string(message.borrowFeeMultiplier);
    }
    if (message.mode !== undefined) {
      StringValue.encode(
        { value: message.mode! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    for (const v of message.quoteShape) {
      Quote.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateMarketConfigParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateMarketConfigParams,
    } as UpdateMarketConfigParams;
    message.quoteShape = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxLiquidityRatio = reader.string();
          break;
        case 2:
          message.borrowFeeMultiplier = reader.string();
          break;
        case 3:
          message.mode = StringValue.decode(reader, reader.uint32()).value;
          break;
        case 4:
          message.quoteShape.push(Quote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateMarketConfigParams {
    const message = {
      ...baseUpdateMarketConfigParams,
    } as UpdateMarketConfigParams;
    message.maxLiquidityRatio =
      object.maxLiquidityRatio !== undefined &&
      object.maxLiquidityRatio !== null
        ? String(object.maxLiquidityRatio)
        : "";
    message.borrowFeeMultiplier =
      object.borrowFeeMultiplier !== undefined &&
      object.borrowFeeMultiplier !== null
        ? String(object.borrowFeeMultiplier)
        : "";
    message.mode =
      object.mode !== undefined && object.mode !== null
        ? String(object.mode)
        : undefined;
    message.quoteShape = (object.quoteShape ?? []).map((e: any) =>
      Quote.fromJSON(e)
    );
    return message;
  },

  toJSON(message: UpdateMarketConfigParams): unknown {
    const obj: any = {};
    message.maxLiquidityRatio !== undefined &&
      (obj.maxLiquidityRatio = message.maxLiquidityRatio);
    message.borrowFeeMultiplier !== undefined &&
      (obj.borrowFeeMultiplier = message.borrowFeeMultiplier);
    message.mode !== undefined && (obj.mode = message.mode);
    if (message.quoteShape) {
      obj.quoteShape = message.quoteShape.map((e) =>
        e ? Quote.toJSON(e) : undefined
      );
    } else {
      obj.quoteShape = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateMarketConfigParams>
  ): UpdateMarketConfigParams {
    const message = {
      ...baseUpdateMarketConfigParams,
    } as UpdateMarketConfigParams;
    message.maxLiquidityRatio = object.maxLiquidityRatio ?? "";
    message.borrowFeeMultiplier = object.borrowFeeMultiplier ?? "";
    message.mode = object.mode ?? undefined;
    message.quoteShape = (object.quoteShape ?? []).map((e) =>
      Quote.fromPartial(e)
    );
    return message;
  },
};

const baseMarketUtilizationRateSnapshot: object = { utilizationRate: "" };

export const MarketUtilizationRateSnapshot = {
  encode(
    message: MarketUtilizationRateSnapshot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.utilizationRate !== "") {
      writer.uint32(18).string(message.utilizationRate);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MarketUtilizationRateSnapshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMarketUtilizationRateSnapshot,
    } as MarketUtilizationRateSnapshot;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.utilizationRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketUtilizationRateSnapshot {
    const message = {
      ...baseMarketUtilizationRateSnapshot,
    } as MarketUtilizationRateSnapshot;
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? fromJsonTimestamp(object.timestamp)
        : undefined;
    message.utilizationRate =
      object.utilizationRate !== undefined && object.utilizationRate !== null
        ? String(object.utilizationRate)
        : "";
    return message;
  },

  toJSON(message: MarketUtilizationRateSnapshot): unknown {
    const obj: any = {};
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    message.utilizationRate !== undefined &&
      (obj.utilizationRate = message.utilizationRate);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MarketUtilizationRateSnapshot>
  ): MarketUtilizationRateSnapshot {
    const message = {
      ...baseMarketUtilizationRateSnapshot,
    } as MarketUtilizationRateSnapshot;
    message.timestamp = object.timestamp ?? undefined;
    message.utilizationRate = object.utilizationRate ?? "";
    return message;
  },
};

const baseTWAMarketUtilizationRate: object = { twaUtilizationRate: "" };

export const TWAMarketUtilizationRate = {
  encode(
    message: TWAMarketUtilizationRate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lastUpdatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastUpdatedAt),
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.twaUtilizationRate !== "") {
      writer.uint32(18).string(message.twaUtilizationRate);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TWAMarketUtilizationRate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTWAMarketUtilizationRate,
    } as TWAMarketUtilizationRate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastUpdatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.twaUtilizationRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TWAMarketUtilizationRate {
    const message = {
      ...baseTWAMarketUtilizationRate,
    } as TWAMarketUtilizationRate;
    message.lastUpdatedAt =
      object.lastUpdatedAt !== undefined && object.lastUpdatedAt !== null
        ? fromJsonTimestamp(object.lastUpdatedAt)
        : undefined;
    message.twaUtilizationRate =
      object.twaUtilizationRate !== undefined &&
      object.twaUtilizationRate !== null
        ? String(object.twaUtilizationRate)
        : "";
    return message;
  },

  toJSON(message: TWAMarketUtilizationRate): unknown {
    const obj: any = {};
    message.lastUpdatedAt !== undefined &&
      (obj.lastUpdatedAt = message.lastUpdatedAt.toISOString());
    message.twaUtilizationRate !== undefined &&
      (obj.twaUtilizationRate = message.twaUtilizationRate);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TWAMarketUtilizationRate>
  ): TWAMarketUtilizationRate {
    const message = {
      ...baseTWAMarketUtilizationRate,
    } as TWAMarketUtilizationRate;
    message.lastUpdatedAt = object.lastUpdatedAt ?? undefined;
    message.twaUtilizationRate = object.twaUtilizationRate ?? "";
    return message;
  },
};

const baseMarketLiquidityUsageMultiplier: object = {
  marketId: "",
  multiplier: "",
};

export const MarketLiquidityUsageMultiplier = {
  encode(
    message: MarketLiquidityUsageMultiplier,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.multiplier !== "") {
      writer.uint32(18).string(message.multiplier);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MarketLiquidityUsageMultiplier {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMarketLiquidityUsageMultiplier,
    } as MarketLiquidityUsageMultiplier;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.multiplier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketLiquidityUsageMultiplier {
    const message = {
      ...baseMarketLiquidityUsageMultiplier,
    } as MarketLiquidityUsageMultiplier;
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.multiplier =
      object.multiplier !== undefined && object.multiplier !== null
        ? String(object.multiplier)
        : "";
    return message;
  },

  toJSON(message: MarketLiquidityUsageMultiplier): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.multiplier !== undefined && (obj.multiplier = message.multiplier);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MarketLiquidityUsageMultiplier>
  ): MarketLiquidityUsageMultiplier {
    const message = {
      ...baseMarketLiquidityUsageMultiplier,
    } as MarketLiquidityUsageMultiplier;
    message.marketId = object.marketId ?? "";
    message.multiplier = object.multiplier ?? "";
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
