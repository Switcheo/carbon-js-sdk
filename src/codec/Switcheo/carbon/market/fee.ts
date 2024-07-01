/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.market";

/**
 * A fee structure has multiple fee tiers are sorted by `required_stake`
 * and a single fee category. When a trade is executed, the fee tier with
 * the greatest required stake which is fulfilled by the user is used.
 *
 * There must always be at least one fee tier for the `spot` and `futures`
 * `market_type` fee category that has 0 `required_stake` and no
 * `whitelisted_address` so that it can act as the base fee for that market
 * type.
 */
export interface FeeStructure {
  feeCategory?: FeeCategory;
  feeTiers: FeeTier[];
}

/**
 * The category for a given fee tier, identified by the
 * market being traded via `market_type` or `market_id`, and
 * optionally a `whitelisted_address`.
 */
export interface FeeCategory {
  /**
   * Either `spot` or `futures` or nil. If nil, then
   * a market_id must be provided.
   */
  marketType: string;
  /**
   * Can be used to override the `market_type` based fee to give
   * specific markets a certain fee discount.
   * Note that if there is already a fee tier for the user's stake that
   * results in a lower fee for a given trade, that fee structure will be used
   * instead.
   */
  marketId: string;
  /**
   * Optional parameter that can be used to give certain addresses
   * additional fee tier(s) for the given `market_type` or `market_id`.
   * Can only be used to reduce fees, not increase them. Can be used with module
   * accounts.
   */
  whitelistedAddress: string;
}

/**
 * A fee tier represents the trading fee for a user that meets the required
 * stake.
 */
export interface FeeTier {
  /** The required stake for a user for the fee tier to apply. */
  requiredStake: string;
  /** The taker and maker fee that applies when a trade is executed. */
  tradingFees?: TradingFees;
}

/**
 * The fees applied for each trade.
 *
 * Note that for greater `required_stake`, either the `taker_fee`
 * or `maker_fee` must be reduced.
 * Neither `taker_fee` nor `maker_fee` can be greater for
 * a greater `required_stake`.
 */
export interface TradingFees {
  /**
   * The fee applied when the order is executed in the smame
   * block greater as when it is triggered.
   * Cannot be negative.
   */
  takerFee: string;
  /**
   * The fee or rebate (when negative) applied when the order is executed
   * in a block greater than when it is triggered.
   */
  makerFee: string;
}

/**
 * Allows non stake coins to count as part of the
 * `required_stake` in a fee tier.
 *
 * For each stake equivalance, the amount of coins for
 * the specificed denom in the user's available balance
 * at the time of the trade will be divided by the `ratio`
 * and added to his actual stake amount when checking
 * for fee tier feecategories.
 */
export interface StakeEquivalence {
  denom: string;
  ratio: string;
}

const baseFeeStructure: object = {};

export const FeeStructure = {
  encode(
    message: FeeStructure,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.feeCategory !== undefined) {
      FeeCategory.encode(
        message.feeCategory,
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (const v of message.feeTiers) {
      FeeTier.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeeStructure {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFeeStructure } as FeeStructure;
    message.feeTiers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeCategory = FeeCategory.decode(reader, reader.uint32());
          break;
        case 2:
          message.feeTiers.push(FeeTier.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeeStructure {
    const message = { ...baseFeeStructure } as FeeStructure;
    message.feeCategory =
      object.feeCategory !== undefined && object.feeCategory !== null
        ? FeeCategory.fromJSON(object.feeCategory)
        : undefined;
    message.feeTiers = (object.feeTiers ?? []).map((e: any) =>
      FeeTier.fromJSON(e)
    );
    return message;
  },

  toJSON(message: FeeStructure): unknown {
    const obj: any = {};
    message.feeCategory !== undefined &&
      (obj.feeCategory = message.feeCategory
        ? FeeCategory.toJSON(message.feeCategory)
        : undefined);
    if (message.feeTiers) {
      obj.feeTiers = message.feeTiers.map((e) =>
        e ? FeeTier.toJSON(e) : undefined
      );
    } else {
      obj.feeTiers = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<FeeStructure>): FeeStructure {
    const message = { ...baseFeeStructure } as FeeStructure;
    message.feeCategory =
      object.feeCategory !== undefined && object.feeCategory !== null
        ? FeeCategory.fromPartial(object.feeCategory)
        : undefined;
    message.feeTiers = (object.feeTiers ?? []).map((e) =>
      FeeTier.fromPartial(e)
    );
    return message;
  },
};

const baseFeeCategory: object = {
  marketType: "",
  marketId: "",
  whitelistedAddress: "",
};

export const FeeCategory = {
  encode(
    message: FeeCategory,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketType !== "") {
      writer.uint32(10).string(message.marketType);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.whitelistedAddress !== "") {
      writer.uint32(34).string(message.whitelistedAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeeCategory {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFeeCategory } as FeeCategory;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketType = reader.string();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        case 4:
          message.whitelistedAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeeCategory {
    const message = { ...baseFeeCategory } as FeeCategory;
    message.marketType =
      object.marketType !== undefined && object.marketType !== null
        ? String(object.marketType)
        : "";
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.whitelistedAddress =
      object.whitelistedAddress !== undefined &&
      object.whitelistedAddress !== null
        ? String(object.whitelistedAddress)
        : "";
    return message;
  },

  toJSON(message: FeeCategory): unknown {
    const obj: any = {};
    message.marketType !== undefined && (obj.marketType = message.marketType);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.whitelistedAddress !== undefined &&
      (obj.whitelistedAddress = message.whitelistedAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<FeeCategory>): FeeCategory {
    const message = { ...baseFeeCategory } as FeeCategory;
    message.marketType = object.marketType ?? "";
    message.marketId = object.marketId ?? "";
    message.whitelistedAddress = object.whitelistedAddress ?? "";
    return message;
  },
};

const baseFeeTier: object = { requiredStake: "" };

export const FeeTier = {
  encode(
    message: FeeTier,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.requiredStake !== "") {
      writer.uint32(10).string(message.requiredStake);
    }
    if (message.tradingFees !== undefined) {
      TradingFees.encode(
        message.tradingFees,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeeTier {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFeeTier } as FeeTier;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requiredStake = reader.string();
          break;
        case 2:
          message.tradingFees = TradingFees.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeeTier {
    const message = { ...baseFeeTier } as FeeTier;
    message.requiredStake =
      object.requiredStake !== undefined && object.requiredStake !== null
        ? String(object.requiredStake)
        : "";
    message.tradingFees =
      object.tradingFees !== undefined && object.tradingFees !== null
        ? TradingFees.fromJSON(object.tradingFees)
        : undefined;
    return message;
  },

  toJSON(message: FeeTier): unknown {
    const obj: any = {};
    message.requiredStake !== undefined &&
      (obj.requiredStake = message.requiredStake);
    message.tradingFees !== undefined &&
      (obj.tradingFees = message.tradingFees
        ? TradingFees.toJSON(message.tradingFees)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<FeeTier>): FeeTier {
    const message = { ...baseFeeTier } as FeeTier;
    message.requiredStake = object.requiredStake ?? "";
    message.tradingFees =
      object.tradingFees !== undefined && object.tradingFees !== null
        ? TradingFees.fromPartial(object.tradingFees)
        : undefined;
    return message;
  },
};

const baseTradingFees: object = { takerFee: "", makerFee: "" };

export const TradingFees = {
  encode(
    message: TradingFees,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.takerFee !== "") {
      writer.uint32(42).string(message.takerFee);
    }
    if (message.makerFee !== "") {
      writer.uint32(50).string(message.makerFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradingFees {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTradingFees } as TradingFees;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          message.takerFee = reader.string();
          break;
        case 6:
          message.makerFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TradingFees {
    const message = { ...baseTradingFees } as TradingFees;
    message.takerFee =
      object.takerFee !== undefined && object.takerFee !== null
        ? String(object.takerFee)
        : "";
    message.makerFee =
      object.makerFee !== undefined && object.makerFee !== null
        ? String(object.makerFee)
        : "";
    return message;
  },

  toJSON(message: TradingFees): unknown {
    const obj: any = {};
    message.takerFee !== undefined && (obj.takerFee = message.takerFee);
    message.makerFee !== undefined && (obj.makerFee = message.makerFee);
    return obj;
  },

  fromPartial(object: DeepPartial<TradingFees>): TradingFees {
    const message = { ...baseTradingFees } as TradingFees;
    message.takerFee = object.takerFee ?? "";
    message.makerFee = object.makerFee ?? "";
    return message;
  },
};

const baseStakeEquivalence: object = { denom: "", ratio: "" };

export const StakeEquivalence = {
  encode(
    message: StakeEquivalence,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.ratio !== "") {
      writer.uint32(18).string(message.ratio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakeEquivalence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStakeEquivalence } as StakeEquivalence;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.ratio = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StakeEquivalence {
    const message = { ...baseStakeEquivalence } as StakeEquivalence;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.ratio =
      object.ratio !== undefined && object.ratio !== null
        ? String(object.ratio)
        : "";
    return message;
  },

  toJSON(message: StakeEquivalence): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.ratio !== undefined && (obj.ratio = message.ratio);
    return obj;
  },

  fromPartial(object: DeepPartial<StakeEquivalence>): StakeEquivalence {
    const message = { ...baseStakeEquivalence } as StakeEquivalence;
    message.denom = object.denom ?? "";
    message.ratio = object.ratio ?? "";
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
