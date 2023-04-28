/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { StringValue, UInt64Value } from "../google/protobuf/wrappers";

export const protobufPackage = "Switcheo.carbon.perpsliquidity";

/** main store holding each PLP */
export interface PerpetualsLiquidityPool {
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
}

export interface UpdatePerpetualsLiquidityPoolParams {
  name?: string;
  supplyCap?: Long;
  depositFeeBps?: Long;
  withdrawalFeeBps?: Long;
}

/** PerpetualsLiquidityPoolDetails used for for querying. same as PerpetualsLiquidityPool but appended with registered_markets */
export interface PerpetualsLiquidityPoolDetails {
  perpetualsLiquidityPool?: PerpetualsLiquidityPool;
  registeredMarkets: PLPMarketConfig[];
}

export interface Quote {
  quotePriceType: string;
  quotePriceValue: string;
  amountRatio: string;
}

/** PLPMarketConfig config for each market in the PerpetualsLiquidityPool */
export interface PLPMarketConfig {
  /** unique id representing the market */
  marketId: string;
  /**
   * percentage of the pool liquidity that can be used to quote on a market in
   * ratio where 0 < max_quotable_liquidity_bps <= 1
   */
  maxQuotableLiquidityRatio: string;
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

export interface UpdatePLPMarketConfigParams {
  maxQuotableLiquidityRatio: string;
  mode?: string;
  quoteShape: Quote[];
}

/** DepositParams params required for enqueuing into deposit transient store */
export interface DepositToPerpetualLiquidityPoolParams {
  perpetualsLiquidityPoolId: Long;
  fromAccount: string;
  depositAmount: string;
  minSharesToReceive: string;
}

/** WithdrawParams params required for enqueuing into withdraw transient store */
export interface WithdrawFromPerpetualLiquidityPoolParams {
  perpetualsLiquidityPoolId: Long;
  toAccount: string;
  shareAmount: string;
  minWithdrawAmount: string;
}

const basePerpetualsLiquidityPool: object = {
  id: Long.UZERO,
  name: "",
  depositDenom: "",
  shareDenom: "",
  vaultAddress: "",
  supplyCap: "",
  depositFeeBps: "",
  withdrawalFeeBps: "",
};

export const PerpetualsLiquidityPool = {
  encode(
    message: PerpetualsLiquidityPool,
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
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PerpetualsLiquidityPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePerpetualsLiquidityPool,
    } as PerpetualsLiquidityPool;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PerpetualsLiquidityPool {
    const message = {
      ...basePerpetualsLiquidityPool,
    } as PerpetualsLiquidityPool;
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
    return message;
  },

  toJSON(message: PerpetualsLiquidityPool): unknown {
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
    return obj;
  },

  fromPartial(
    object: DeepPartial<PerpetualsLiquidityPool>
  ): PerpetualsLiquidityPool {
    const message = {
      ...basePerpetualsLiquidityPool,
    } as PerpetualsLiquidityPool;
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
    return message;
  },
};

const baseUpdatePerpetualsLiquidityPoolParams: object = {};

export const UpdatePerpetualsLiquidityPoolParams = {
  encode(
    message: UpdatePerpetualsLiquidityPoolParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== undefined) {
      StringValue.encode(
        { value: message.name! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.supplyCap !== undefined) {
      UInt64Value.encode(
        { value: message.supplyCap! },
        writer.uint32(18).fork()
      ).ldelim();
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
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdatePerpetualsLiquidityPoolParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdatePerpetualsLiquidityPoolParams,
    } as UpdatePerpetualsLiquidityPoolParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = StringValue.decode(reader, reader.uint32()).value;
          break;
        case 2:
          message.supplyCap = UInt64Value.decode(reader, reader.uint32()).value;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdatePerpetualsLiquidityPoolParams {
    const message = {
      ...baseUpdatePerpetualsLiquidityPoolParams,
    } as UpdatePerpetualsLiquidityPoolParams;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : undefined;
    message.supplyCap =
      object.supplyCap !== undefined && object.supplyCap !== null
        ? Long.fromValue(object.supplyCap)
        : undefined;
    message.depositFeeBps =
      object.depositFeeBps !== undefined && object.depositFeeBps !== null
        ? Long.fromValue(object.depositFeeBps)
        : undefined;
    message.withdrawalFeeBps =
      object.withdrawalFeeBps !== undefined && object.withdrawalFeeBps !== null
        ? Long.fromValue(object.withdrawalFeeBps)
        : undefined;
    return message;
  },

  toJSON(message: UpdatePerpetualsLiquidityPoolParams): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.supplyCap !== undefined && (obj.supplyCap = message.supplyCap);
    message.depositFeeBps !== undefined &&
      (obj.depositFeeBps = message.depositFeeBps);
    message.withdrawalFeeBps !== undefined &&
      (obj.withdrawalFeeBps = message.withdrawalFeeBps);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdatePerpetualsLiquidityPoolParams>
  ): UpdatePerpetualsLiquidityPoolParams {
    const message = {
      ...baseUpdatePerpetualsLiquidityPoolParams,
    } as UpdatePerpetualsLiquidityPoolParams;
    message.name = object.name ?? undefined;
    message.supplyCap =
      object.supplyCap !== undefined && object.supplyCap !== null
        ? Long.fromValue(object.supplyCap)
        : undefined;
    message.depositFeeBps =
      object.depositFeeBps !== undefined && object.depositFeeBps !== null
        ? Long.fromValue(object.depositFeeBps)
        : undefined;
    message.withdrawalFeeBps =
      object.withdrawalFeeBps !== undefined && object.withdrawalFeeBps !== null
        ? Long.fromValue(object.withdrawalFeeBps)
        : undefined;
    return message;
  },
};

const basePerpetualsLiquidityPoolDetails: object = {};

export const PerpetualsLiquidityPoolDetails = {
  encode(
    message: PerpetualsLiquidityPoolDetails,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.perpetualsLiquidityPool !== undefined) {
      PerpetualsLiquidityPool.encode(
        message.perpetualsLiquidityPool,
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (const v of message.registeredMarkets) {
      PLPMarketConfig.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PerpetualsLiquidityPoolDetails {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePerpetualsLiquidityPoolDetails,
    } as PerpetualsLiquidityPoolDetails;
    message.registeredMarkets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.perpetualsLiquidityPool = PerpetualsLiquidityPool.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.registeredMarkets.push(
            PLPMarketConfig.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PerpetualsLiquidityPoolDetails {
    const message = {
      ...basePerpetualsLiquidityPoolDetails,
    } as PerpetualsLiquidityPoolDetails;
    message.perpetualsLiquidityPool =
      object.perpetualsLiquidityPool !== undefined &&
      object.perpetualsLiquidityPool !== null
        ? PerpetualsLiquidityPool.fromJSON(object.perpetualsLiquidityPool)
        : undefined;
    message.registeredMarkets = (object.registeredMarkets ?? []).map((e: any) =>
      PLPMarketConfig.fromJSON(e)
    );
    return message;
  },

  toJSON(message: PerpetualsLiquidityPoolDetails): unknown {
    const obj: any = {};
    message.perpetualsLiquidityPool !== undefined &&
      (obj.perpetualsLiquidityPool = message.perpetualsLiquidityPool
        ? PerpetualsLiquidityPool.toJSON(message.perpetualsLiquidityPool)
        : undefined);
    if (message.registeredMarkets) {
      obj.registeredMarkets = message.registeredMarkets.map((e) =>
        e ? PLPMarketConfig.toJSON(e) : undefined
      );
    } else {
      obj.registeredMarkets = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<PerpetualsLiquidityPoolDetails>
  ): PerpetualsLiquidityPoolDetails {
    const message = {
      ...basePerpetualsLiquidityPoolDetails,
    } as PerpetualsLiquidityPoolDetails;
    message.perpetualsLiquidityPool =
      object.perpetualsLiquidityPool !== undefined &&
      object.perpetualsLiquidityPool !== null
        ? PerpetualsLiquidityPool.fromPartial(object.perpetualsLiquidityPool)
        : undefined;
    message.registeredMarkets = (object.registeredMarkets ?? []).map((e) =>
      PLPMarketConfig.fromPartial(e)
    );
    return message;
  },
};

const baseQuote: object = {
  quotePriceType: "",
  quotePriceValue: "",
  amountRatio: "",
};

export const Quote = {
  encode(message: Quote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quotePriceType !== "") {
      writer.uint32(10).string(message.quotePriceType);
    }
    if (message.quotePriceValue !== "") {
      writer.uint32(18).string(message.quotePriceValue);
    }
    if (message.amountRatio !== "") {
      writer.uint32(26).string(message.amountRatio);
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
          message.amountRatio = reader.string();
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
    message.amountRatio =
      object.amountRatio !== undefined && object.amountRatio !== null
        ? String(object.amountRatio)
        : "";
    return message;
  },

  toJSON(message: Quote): unknown {
    const obj: any = {};
    message.quotePriceType !== undefined &&
      (obj.quotePriceType = message.quotePriceType);
    message.quotePriceValue !== undefined &&
      (obj.quotePriceValue = message.quotePriceValue);
    message.amountRatio !== undefined &&
      (obj.amountRatio = message.amountRatio);
    return obj;
  },

  fromPartial(object: DeepPartial<Quote>): Quote {
    const message = { ...baseQuote } as Quote;
    message.quotePriceType = object.quotePriceType ?? "";
    message.quotePriceValue = object.quotePriceValue ?? "";
    message.amountRatio = object.amountRatio ?? "";
    return message;
  },
};

const basePLPMarketConfig: object = {
  marketId: "",
  maxQuotableLiquidityRatio: "",
  mode: "",
};

export const PLPMarketConfig = {
  encode(
    message: PLPMarketConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.maxQuotableLiquidityRatio !== "") {
      writer.uint32(18).string(message.maxQuotableLiquidityRatio);
    }
    if (message.mode !== "") {
      writer.uint32(26).string(message.mode);
    }
    for (const v of message.quoteShape) {
      Quote.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PLPMarketConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePLPMarketConfig } as PLPMarketConfig;
    message.quoteShape = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.maxQuotableLiquidityRatio = reader.string();
          break;
        case 3:
          message.mode = reader.string();
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

  fromJSON(object: any): PLPMarketConfig {
    const message = { ...basePLPMarketConfig } as PLPMarketConfig;
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.maxQuotableLiquidityRatio =
      object.maxQuotableLiquidityRatio !== undefined &&
      object.maxQuotableLiquidityRatio !== null
        ? String(object.maxQuotableLiquidityRatio)
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

  toJSON(message: PLPMarketConfig): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.maxQuotableLiquidityRatio !== undefined &&
      (obj.maxQuotableLiquidityRatio = message.maxQuotableLiquidityRatio);
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

  fromPartial(object: DeepPartial<PLPMarketConfig>): PLPMarketConfig {
    const message = { ...basePLPMarketConfig } as PLPMarketConfig;
    message.marketId = object.marketId ?? "";
    message.maxQuotableLiquidityRatio = object.maxQuotableLiquidityRatio ?? "";
    message.mode = object.mode ?? "";
    message.quoteShape = (object.quoteShape ?? []).map((e) =>
      Quote.fromPartial(e)
    );
    return message;
  },
};

const baseUpdatePLPMarketConfigParams: object = {
  maxQuotableLiquidityRatio: "",
};

export const UpdatePLPMarketConfigParams = {
  encode(
    message: UpdatePLPMarketConfigParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.maxQuotableLiquidityRatio !== "") {
      writer.uint32(10).string(message.maxQuotableLiquidityRatio);
    }
    if (message.mode !== undefined) {
      StringValue.encode(
        { value: message.mode! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.quoteShape) {
      Quote.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdatePLPMarketConfigParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdatePLPMarketConfigParams,
    } as UpdatePLPMarketConfigParams;
    message.quoteShape = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxQuotableLiquidityRatio = reader.string();
          break;
        case 2:
          message.mode = StringValue.decode(reader, reader.uint32()).value;
          break;
        case 3:
          message.quoteShape.push(Quote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdatePLPMarketConfigParams {
    const message = {
      ...baseUpdatePLPMarketConfigParams,
    } as UpdatePLPMarketConfigParams;
    message.maxQuotableLiquidityRatio =
      object.maxQuotableLiquidityRatio !== undefined &&
      object.maxQuotableLiquidityRatio !== null
        ? String(object.maxQuotableLiquidityRatio)
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

  toJSON(message: UpdatePLPMarketConfigParams): unknown {
    const obj: any = {};
    message.maxQuotableLiquidityRatio !== undefined &&
      (obj.maxQuotableLiquidityRatio = message.maxQuotableLiquidityRatio);
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
    object: DeepPartial<UpdatePLPMarketConfigParams>
  ): UpdatePLPMarketConfigParams {
    const message = {
      ...baseUpdatePLPMarketConfigParams,
    } as UpdatePLPMarketConfigParams;
    message.maxQuotableLiquidityRatio = object.maxQuotableLiquidityRatio ?? "";
    message.mode = object.mode ?? undefined;
    message.quoteShape = (object.quoteShape ?? []).map((e) =>
      Quote.fromPartial(e)
    );
    return message;
  },
};

const baseDepositToPerpetualLiquidityPoolParams: object = {
  perpetualsLiquidityPoolId: Long.UZERO,
  fromAccount: "",
  depositAmount: "",
  minSharesToReceive: "",
};

export const DepositToPerpetualLiquidityPoolParams = {
  encode(
    message: DepositToPerpetualLiquidityPoolParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.perpetualsLiquidityPoolId.isZero()) {
      writer.uint32(8).uint64(message.perpetualsLiquidityPoolId);
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DepositToPerpetualLiquidityPoolParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDepositToPerpetualLiquidityPoolParams,
    } as DepositToPerpetualLiquidityPoolParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.perpetualsLiquidityPoolId = reader.uint64() as Long;
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

  fromJSON(object: any): DepositToPerpetualLiquidityPoolParams {
    const message = {
      ...baseDepositToPerpetualLiquidityPoolParams,
    } as DepositToPerpetualLiquidityPoolParams;
    message.perpetualsLiquidityPoolId =
      object.perpetualsLiquidityPoolId !== undefined &&
      object.perpetualsLiquidityPoolId !== null
        ? Long.fromString(object.perpetualsLiquidityPoolId)
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

  toJSON(message: DepositToPerpetualLiquidityPoolParams): unknown {
    const obj: any = {};
    message.perpetualsLiquidityPoolId !== undefined &&
      (obj.perpetualsLiquidityPoolId = (
        message.perpetualsLiquidityPoolId || Long.UZERO
      ).toString());
    message.fromAccount !== undefined &&
      (obj.fromAccount = message.fromAccount);
    message.depositAmount !== undefined &&
      (obj.depositAmount = message.depositAmount);
    message.minSharesToReceive !== undefined &&
      (obj.minSharesToReceive = message.minSharesToReceive);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DepositToPerpetualLiquidityPoolParams>
  ): DepositToPerpetualLiquidityPoolParams {
    const message = {
      ...baseDepositToPerpetualLiquidityPoolParams,
    } as DepositToPerpetualLiquidityPoolParams;
    message.perpetualsLiquidityPoolId =
      object.perpetualsLiquidityPoolId !== undefined &&
      object.perpetualsLiquidityPoolId !== null
        ? Long.fromValue(object.perpetualsLiquidityPoolId)
        : Long.UZERO;
    message.fromAccount = object.fromAccount ?? "";
    message.depositAmount = object.depositAmount ?? "";
    message.minSharesToReceive = object.minSharesToReceive ?? "";
    return message;
  },
};

const baseWithdrawFromPerpetualLiquidityPoolParams: object = {
  perpetualsLiquidityPoolId: Long.UZERO,
  toAccount: "",
  shareAmount: "",
  minWithdrawAmount: "",
};

export const WithdrawFromPerpetualLiquidityPoolParams = {
  encode(
    message: WithdrawFromPerpetualLiquidityPoolParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.perpetualsLiquidityPoolId.isZero()) {
      writer.uint32(8).uint64(message.perpetualsLiquidityPoolId);
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
  ): WithdrawFromPerpetualLiquidityPoolParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseWithdrawFromPerpetualLiquidityPoolParams,
    } as WithdrawFromPerpetualLiquidityPoolParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.perpetualsLiquidityPoolId = reader.uint64() as Long;
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

  fromJSON(object: any): WithdrawFromPerpetualLiquidityPoolParams {
    const message = {
      ...baseWithdrawFromPerpetualLiquidityPoolParams,
    } as WithdrawFromPerpetualLiquidityPoolParams;
    message.perpetualsLiquidityPoolId =
      object.perpetualsLiquidityPoolId !== undefined &&
      object.perpetualsLiquidityPoolId !== null
        ? Long.fromString(object.perpetualsLiquidityPoolId)
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

  toJSON(message: WithdrawFromPerpetualLiquidityPoolParams): unknown {
    const obj: any = {};
    message.perpetualsLiquidityPoolId !== undefined &&
      (obj.perpetualsLiquidityPoolId = (
        message.perpetualsLiquidityPoolId || Long.UZERO
      ).toString());
    message.toAccount !== undefined && (obj.toAccount = message.toAccount);
    message.shareAmount !== undefined &&
      (obj.shareAmount = message.shareAmount);
    message.minWithdrawAmount !== undefined &&
      (obj.minWithdrawAmount = message.minWithdrawAmount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<WithdrawFromPerpetualLiquidityPoolParams>
  ): WithdrawFromPerpetualLiquidityPoolParams {
    const message = {
      ...baseWithdrawFromPerpetualLiquidityPoolParams,
    } as WithdrawFromPerpetualLiquidityPoolParams;
    message.perpetualsLiquidityPoolId =
      object.perpetualsLiquidityPoolId !== undefined &&
      object.perpetualsLiquidityPoolId !== null
        ? Long.fromValue(object.perpetualsLiquidityPoolId)
        : Long.UZERO;
    message.toAccount = object.toAccount ?? "";
    message.shareAmount = object.shareAmount ?? "";
    message.minWithdrawAmount = object.minWithdrawAmount ?? "";
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
