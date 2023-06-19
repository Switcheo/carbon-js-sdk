/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { StringValue, UInt64Value } from "../google/protobuf/wrappers";

export const protobufPackage = "Switcheo.carbon.perpsliquidity";

/** main store holding each Pool */
export interface PlPool {
  /** auto-incrementing id */
  id: Long;
  /** admin/govt determined name */
  name: string;
  /** deposit_denom for underlying token that will be used to provide liquidity */
  depositDenom: string;
  /** denom for the share token that can be used to redeem underlying deposited token */
  shareDenom: string;
  /** auto-created address of the vault that stores the tokens */
  vaultAddress: string;
  /** supply cap to limit amount of tokens that can go into the pool */
  supplyCap: string;
  /** deposit fee to charge on a successful deposit to PLP in bps */
  depositFeeBps: string;
  /** withdrawal fee to charge on a successful withdrawal from PLP in bps */
  withdrawalFeeBps: string;
  /** borrow fee in bps per time period to charge on use of liquidity in pool */
  borrowFeeBps: string;
}

export interface UpdatePlPoolParams {
  name?: string;
  supplyCap: string;
  depositFeeBps?: Long;
  withdrawalFeeBps?: Long;
  borrowFeeBps?: Long;
}

/** PoolDetails used for for querying. same as Pool but appended with registered_markets */
export interface PoolDetails {
  pool?: PlPool;
  registeredMarkets: MarketConfig[];
}

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
  /** borrow_fee_multiplier controls the multiplier for the base borrow fee charged on the pool. riskier markets should have a higher multiplier */
  borrowFeeMultiplier: string;
  /**
   * Available modes:
   * active - market is active for quoting
   * paused - open quotes are cancelled, current positions are held, no new quotes
   * close_only - quotes will be open only on the closing side. borrow fees are increased?
   */
  mode: string;
  /** represents the shape of quoting for each side against [0] index price, [1+] prev quotes */
  quoteShape: Quote[];
}

export interface UpdateMarketConfigParams {
  maxLiquidityRatio: string;
  borrowFeeMultiplier: string;
  mode?: string;
  quoteShape: Quote[];
}

/** DepositParams params required for enqueuing into deposit transient store */
export interface DepositToPoolParams {
  poolId: Long;
  fromAccount: string;
  depositAmount: string;
  minSharesToReceive: string;
}

/** WithdrawParams params required for enqueuing into withdraw transient store */
export interface WithdrawFromPoolParams {
  poolId: Long;
  toAccount: string;
  shareAmount: string;
  minWithdrawAmount: string;
}

/** DepositToBonusContractParams params required for enqueuing into deposit transient store */
export interface DepositToBonusContractParams {
  bonusVaultId: Long;
  isLongUnbond: boolean;
}

const basePlPool: object = {
  id: Long.UZERO,
  name: "",
  depositDenom: "",
  shareDenom: "",
  vaultAddress: "",
  supplyCap: "",
  depositFeeBps: "",
  withdrawalFeeBps: "",
  borrowFeeBps: "",
};

export const PlPool = {
  encode(
    message: PlPool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.depositDenom !== "") {
      writer.uint32(26).string(message.depositDenom);
    }
    if (message.shareDenom !== "") {
      writer.uint32(34).string(message.shareDenom);
    }
    if (message.vaultAddress !== "") {
      writer.uint32(42).string(message.vaultAddress);
    }
    if (message.supplyCap !== "") {
      writer.uint32(50).string(message.supplyCap);
    }
    if (message.depositFeeBps !== "") {
      writer.uint32(58).string(message.depositFeeBps);
    }
    if (message.withdrawalFeeBps !== "") {
      writer.uint32(66).string(message.withdrawalFeeBps);
    }
    if (message.borrowFeeBps !== "") {
      writer.uint32(74).string(message.borrowFeeBps);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePlPool } as PlPool;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.depositDenom = reader.string();
          break;
        case 4:
          message.shareDenom = reader.string();
          break;
        case 5:
          message.vaultAddress = reader.string();
          break;
        case 6:
          message.supplyCap = reader.string();
          break;
        case 7:
          message.depositFeeBps = reader.string();
          break;
        case 8:
          message.withdrawalFeeBps = reader.string();
          break;
        case 9:
          message.borrowFeeBps = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PlPool {
    const message = { ...basePlPool } as PlPool;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromString(object.id)
        : Long.UZERO;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.depositDenom =
      object.depositDenom !== undefined && object.depositDenom !== null
        ? String(object.depositDenom)
        : "";
    message.shareDenom =
      object.shareDenom !== undefined && object.shareDenom !== null
        ? String(object.shareDenom)
        : "";
    message.vaultAddress =
      object.vaultAddress !== undefined && object.vaultAddress !== null
        ? String(object.vaultAddress)
        : "";
    message.supplyCap =
      object.supplyCap !== undefined && object.supplyCap !== null
        ? String(object.supplyCap)
        : "";
    message.depositFeeBps =
      object.depositFeeBps !== undefined && object.depositFeeBps !== null
        ? String(object.depositFeeBps)
        : "";
    message.withdrawalFeeBps =
      object.withdrawalFeeBps !== undefined && object.withdrawalFeeBps !== null
        ? String(object.withdrawalFeeBps)
        : "";
    message.borrowFeeBps =
      object.borrowFeeBps !== undefined && object.borrowFeeBps !== null
        ? String(object.borrowFeeBps)
        : "";
    return message;
  },

  toJSON(message: PlPool): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.name !== undefined && (obj.name = message.name);
    message.depositDenom !== undefined &&
      (obj.depositDenom = message.depositDenom);
    message.shareDenom !== undefined && (obj.shareDenom = message.shareDenom);
    message.vaultAddress !== undefined &&
      (obj.vaultAddress = message.vaultAddress);
    message.supplyCap !== undefined && (obj.supplyCap = message.supplyCap);
    message.depositFeeBps !== undefined &&
      (obj.depositFeeBps = message.depositFeeBps);
    message.withdrawalFeeBps !== undefined &&
      (obj.withdrawalFeeBps = message.withdrawalFeeBps);
    message.borrowFeeBps !== undefined &&
      (obj.borrowFeeBps = message.borrowFeeBps);
    return obj;
  },

  fromPartial(object: DeepPartial<PlPool>): PlPool {
    const message = { ...basePlPool } as PlPool;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.name = object.name ?? "";
    message.depositDenom = object.depositDenom ?? "";
    message.shareDenom = object.shareDenom ?? "";
    message.vaultAddress = object.vaultAddress ?? "";
    message.supplyCap = object.supplyCap ?? "";
    message.depositFeeBps = object.depositFeeBps ?? "";
    message.withdrawalFeeBps = object.withdrawalFeeBps ?? "";
    message.borrowFeeBps = object.borrowFeeBps ?? "";
    return message;
  },
};

const baseUpdatePlPoolParams: object = { supplyCap: "" };

export const UpdatePlPoolParams = {
  encode(
    message: UpdatePlPoolParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== undefined) {
      StringValue.encode(
        { value: message.name! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.supplyCap !== "") {
      writer.uint32(18).string(message.supplyCap);
    }
    if (message.depositFeeBps !== undefined) {
      UInt64Value.encode(
        { value: message.depositFeeBps! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.withdrawalFeeBps !== undefined) {
      UInt64Value.encode(
        { value: message.withdrawalFeeBps! },
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.borrowFeeBps !== undefined) {
      UInt64Value.encode(
        { value: message.borrowFeeBps! },
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePlPoolParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdatePlPoolParams } as UpdatePlPoolParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = StringValue.decode(reader, reader.uint32()).value;
          break;
        case 2:
          message.supplyCap = reader.string();
          break;
        case 3:
          message.depositFeeBps = UInt64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 4:
          message.withdrawalFeeBps = UInt64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 5:
          message.borrowFeeBps = UInt64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdatePlPoolParams {
    const message = { ...baseUpdatePlPoolParams } as UpdatePlPoolParams;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : undefined;
    message.supplyCap =
      object.supplyCap !== undefined && object.supplyCap !== null
        ? String(object.supplyCap)
        : "";
    message.depositFeeBps =
      object.depositFeeBps !== undefined && object.depositFeeBps !== null
        ? Long.fromValue(object.depositFeeBps)
        : undefined;
    message.withdrawalFeeBps =
      object.withdrawalFeeBps !== undefined && object.withdrawalFeeBps !== null
        ? Long.fromValue(object.withdrawalFeeBps)
        : undefined;
    message.borrowFeeBps =
      object.borrowFeeBps !== undefined && object.borrowFeeBps !== null
        ? Long.fromValue(object.borrowFeeBps)
        : undefined;
    return message;
  },

  toJSON(message: UpdatePlPoolParams): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.supplyCap !== undefined && (obj.supplyCap = message.supplyCap);
    message.depositFeeBps !== undefined &&
      (obj.depositFeeBps = message.depositFeeBps);
    message.withdrawalFeeBps !== undefined &&
      (obj.withdrawalFeeBps = message.withdrawalFeeBps);
    message.borrowFeeBps !== undefined &&
      (obj.borrowFeeBps = message.borrowFeeBps);
    return obj;
  },

  fromPartial(object: DeepPartial<UpdatePlPoolParams>): UpdatePlPoolParams {
    const message = { ...baseUpdatePlPoolParams } as UpdatePlPoolParams;
    message.name = object.name ?? undefined;
    message.supplyCap = object.supplyCap ?? "";
    message.depositFeeBps =
      object.depositFeeBps !== undefined && object.depositFeeBps !== null
        ? Long.fromValue(object.depositFeeBps)
        : undefined;
    message.withdrawalFeeBps =
      object.withdrawalFeeBps !== undefined && object.withdrawalFeeBps !== null
        ? Long.fromValue(object.withdrawalFeeBps)
        : undefined;
    message.borrowFeeBps =
      object.borrowFeeBps !== undefined && object.borrowFeeBps !== null
        ? Long.fromValue(object.borrowFeeBps)
        : undefined;
    return message;
  },
};

const basePoolDetails: object = {};

export const PoolDetails = {
  encode(
    message: PoolDetails,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pool !== undefined) {
      PlPool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.registeredMarkets) {
      MarketConfig.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolDetails {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePoolDetails } as PoolDetails;
    message.registeredMarkets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = PlPool.decode(reader, reader.uint32());
          break;
        case 2:
          message.registeredMarkets.push(
            MarketConfig.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolDetails {
    const message = { ...basePoolDetails } as PoolDetails;
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? PlPool.fromJSON(object.pool)
        : undefined;
    message.registeredMarkets = (object.registeredMarkets ?? []).map((e: any) =>
      MarketConfig.fromJSON(e)
    );
    return message;
  },

  toJSON(message: PoolDetails): unknown {
    const obj: any = {};
    message.pool !== undefined &&
      (obj.pool = message.pool ? PlPool.toJSON(message.pool) : undefined);
    if (message.registeredMarkets) {
      obj.registeredMarkets = message.registeredMarkets.map((e) =>
        e ? MarketConfig.toJSON(e) : undefined
      );
    } else {
      obj.registeredMarkets = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<PoolDetails>): PoolDetails {
    const message = { ...basePoolDetails } as PoolDetails;
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? PlPool.fromPartial(object.pool)
        : undefined;
    message.registeredMarkets = (object.registeredMarkets ?? []).map((e) =>
      MarketConfig.fromPartial(e)
    );
    return message;
  },
};

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

const baseDepositToPoolParams: object = {
  poolId: Long.UZERO,
  fromAccount: "",
  depositAmount: "",
  minSharesToReceive: "",
};

export const DepositToPoolParams = {
  encode(
    message: DepositToPoolParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.fromAccount !== "") {
      writer.uint32(18).string(message.fromAccount);
    }
    if (message.depositAmount !== "") {
      writer.uint32(26).string(message.depositAmount);
    }
    if (message.minSharesToReceive !== "") {
      writer.uint32(34).string(message.minSharesToReceive);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositToPoolParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDepositToPoolParams } as DepositToPoolParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.fromAccount = reader.string();
          break;
        case 3:
          message.depositAmount = reader.string();
          break;
        case 4:
          message.minSharesToReceive = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DepositToPoolParams {
    const message = { ...baseDepositToPoolParams } as DepositToPoolParams;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.fromAccount =
      object.fromAccount !== undefined && object.fromAccount !== null
        ? String(object.fromAccount)
        : "";
    message.depositAmount =
      object.depositAmount !== undefined && object.depositAmount !== null
        ? String(object.depositAmount)
        : "";
    message.minSharesToReceive =
      object.minSharesToReceive !== undefined &&
      object.minSharesToReceive !== null
        ? String(object.minSharesToReceive)
        : "";
    return message;
  },

  toJSON(message: DepositToPoolParams): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.fromAccount !== undefined &&
      (obj.fromAccount = message.fromAccount);
    message.depositAmount !== undefined &&
      (obj.depositAmount = message.depositAmount);
    message.minSharesToReceive !== undefined &&
      (obj.minSharesToReceive = message.minSharesToReceive);
    return obj;
  },

  fromPartial(object: DeepPartial<DepositToPoolParams>): DepositToPoolParams {
    const message = { ...baseDepositToPoolParams } as DepositToPoolParams;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.fromAccount = object.fromAccount ?? "";
    message.depositAmount = object.depositAmount ?? "";
    message.minSharesToReceive = object.minSharesToReceive ?? "";
    return message;
  },
};

const baseWithdrawFromPoolParams: object = {
  poolId: Long.UZERO,
  toAccount: "",
  shareAmount: "",
  minWithdrawAmount: "",
};

export const WithdrawFromPoolParams = {
  encode(
    message: WithdrawFromPoolParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.toAccount !== "") {
      writer.uint32(18).string(message.toAccount);
    }
    if (message.shareAmount !== "") {
      writer.uint32(26).string(message.shareAmount);
    }
    if (message.minWithdrawAmount !== "") {
      writer.uint32(34).string(message.minWithdrawAmount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): WithdrawFromPoolParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWithdrawFromPoolParams } as WithdrawFromPoolParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.toAccount = reader.string();
          break;
        case 3:
          message.shareAmount = reader.string();
          break;
        case 4:
          message.minWithdrawAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WithdrawFromPoolParams {
    const message = { ...baseWithdrawFromPoolParams } as WithdrawFromPoolParams;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.toAccount =
      object.toAccount !== undefined && object.toAccount !== null
        ? String(object.toAccount)
        : "";
    message.shareAmount =
      object.shareAmount !== undefined && object.shareAmount !== null
        ? String(object.shareAmount)
        : "";
    message.minWithdrawAmount =
      object.minWithdrawAmount !== undefined &&
      object.minWithdrawAmount !== null
        ? String(object.minWithdrawAmount)
        : "";
    return message;
  },

  toJSON(message: WithdrawFromPoolParams): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.toAccount !== undefined && (obj.toAccount = message.toAccount);
    message.shareAmount !== undefined &&
      (obj.shareAmount = message.shareAmount);
    message.minWithdrawAmount !== undefined &&
      (obj.minWithdrawAmount = message.minWithdrawAmount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<WithdrawFromPoolParams>
  ): WithdrawFromPoolParams {
    const message = { ...baseWithdrawFromPoolParams } as WithdrawFromPoolParams;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.toAccount = object.toAccount ?? "";
    message.shareAmount = object.shareAmount ?? "";
    message.minWithdrawAmount = object.minWithdrawAmount ?? "";
    return message;
  },
};

const baseDepositToBonusContractParams: object = {
  bonusVaultId: Long.UZERO,
  isLongUnbond: false,
};

export const DepositToBonusContractParams = {
  encode(
    message: DepositToBonusContractParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.bonusVaultId.isZero()) {
      writer.uint32(8).uint64(message.bonusVaultId);
    }
    if (message.isLongUnbond === true) {
      writer.uint32(16).bool(message.isLongUnbond);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DepositToBonusContractParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDepositToBonusContractParams,
    } as DepositToBonusContractParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bonusVaultId = reader.uint64() as Long;
          break;
        case 2:
          message.isLongUnbond = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DepositToBonusContractParams {
    const message = {
      ...baseDepositToBonusContractParams,
    } as DepositToBonusContractParams;
    message.bonusVaultId =
      object.bonusVaultId !== undefined && object.bonusVaultId !== null
        ? Long.fromString(object.bonusVaultId)
        : Long.UZERO;
    message.isLongUnbond =
      object.isLongUnbond !== undefined && object.isLongUnbond !== null
        ? Boolean(object.isLongUnbond)
        : false;
    return message;
  },

  toJSON(message: DepositToBonusContractParams): unknown {
    const obj: any = {};
    message.bonusVaultId !== undefined &&
      (obj.bonusVaultId = (message.bonusVaultId || Long.UZERO).toString());
    message.isLongUnbond !== undefined &&
      (obj.isLongUnbond = message.isLongUnbond);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DepositToBonusContractParams>
  ): DepositToBonusContractParams {
    const message = {
      ...baseDepositToBonusContractParams,
    } as DepositToBonusContractParams;
    message.bonusVaultId =
      object.bonusVaultId !== undefined && object.bonusVaultId !== null
        ? Long.fromValue(object.bonusVaultId)
        : Long.UZERO;
    message.isLongUnbond = object.isLongUnbond ?? false;
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
