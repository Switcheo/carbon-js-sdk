/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { MarketParams } from "./market";
import { Duration } from "../../../google/protobuf/duration";
import { FeeCategory, FeeTier, StakeEquivalence, FeeStructure } from "./fee";
import { ParamsToUpdate } from "./params";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "Switcheo.carbon.market";

export interface MsgDisableSpotMarket {
  creator: string;
  marketId: string;
}

export interface MsgDisableSpotMarketResponse {}

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateMarket {
  creator: string;
  marketType: string;
  base: string;
  quote: string;
  currentBasePriceUsd: string;
  currentQuotePriceUsd: string;
  /** futures only */
  indexOracleId: string;
  expiryTime?: Date;
}

export interface MsgCreateMarketResponse {
  id: string;
}

export interface MsgUpdateMarket {
  updater: string;
  marketParams?: MarketParams;
}

export interface MsgUpdateMarketResponse {}

export interface MsgUpdatePerpetualsFundingInterval {
  updater: string;
  perpetualsFundingInterval?: Duration;
}

export interface MsgUpdatePerpetualsFundingIntervalResponse {}

export interface MsgAddFeeTier {
  creator: string;
  feeCategory?: FeeCategory;
  feeTier?: FeeTier;
}

export interface MsgAddFeeTierResponse {
  feeTiers: FeeTier[];
}

export interface MsgUpdateFeeTier {
  updater: string;
  feeCategory?: FeeCategory;
  requiredStake: string;
  takerFee: string;
  makerFee: string;
}

export interface MsgUpdateFeeTierResponse {
  feeTiers: FeeTier[];
}

export interface MsgRemoveFeeTier {
  remover: string;
  feeCategory?: FeeCategory;
  requiredStake: string;
}

export interface MsgRemoveFeeTierResponse {
  feeTiers: FeeTier[];
}

export interface MsgSetStakeEquivalence {
  setter: string;
  stakeEquivalence?: StakeEquivalence;
}

export interface MsgSetStakeEquivalenceResponse {
  stakeEquivalences: StakeEquivalence[];
}

export interface MsgUpdateAllPoolTradingFees {
  creator: string;
  updatePoolTradingFeesParams?: UpdateAllPoolTradingFeesParams;
}

export interface MsgUpdateAllPoolTradingFeesResponse {}

export interface UpdateAllPoolTradingFeesParams {
  marketType: string;
  makerFee: string;
  takerFee: string;
}

/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /** params defines the optional parameters to update. */
  params?: ParamsToUpdate;
}

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {}

export interface MsgUpdateFeeStructure {
  creator: string;
  feeCategory?: FeeCategory;
  feeTiers: FeeTier[];
}

export interface MsgUpdateFeeStructureResponse {
  feeStructure?: FeeStructure;
}

export interface MsgDeleteFeeStructure {
  creator: string;
  feeCategory?: FeeCategory;
}

export interface MsgDeleteFeeStructureResponse {}

const baseMsgDisableSpotMarket: object = { creator: "", marketId: "" };

export const MsgDisableSpotMarket = {
  encode(
    message: MsgDisableSpotMarket,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDisableSpotMarket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDisableSpotMarket } as MsgDisableSpotMarket;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDisableSpotMarket {
    const message = { ...baseMsgDisableSpotMarket } as MsgDisableSpotMarket;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    return message;
  },

  toJSON(message: MsgDisableSpotMarket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDisableSpotMarket>): MsgDisableSpotMarket {
    const message = { ...baseMsgDisableSpotMarket } as MsgDisableSpotMarket;
    message.creator = object.creator ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  },
};

const baseMsgDisableSpotMarketResponse: object = {};

export const MsgDisableSpotMarketResponse = {
  encode(
    _: MsgDisableSpotMarketResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDisableSpotMarketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDisableSpotMarketResponse,
    } as MsgDisableSpotMarketResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDisableSpotMarketResponse {
    const message = {
      ...baseMsgDisableSpotMarketResponse,
    } as MsgDisableSpotMarketResponse;
    return message;
  },

  toJSON(_: MsgDisableSpotMarketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDisableSpotMarketResponse>
  ): MsgDisableSpotMarketResponse {
    const message = {
      ...baseMsgDisableSpotMarketResponse,
    } as MsgDisableSpotMarketResponse;
    return message;
  },
};

const baseMsgCreateMarket: object = {
  creator: "",
  marketType: "",
  base: "",
  quote: "",
  currentBasePriceUsd: "",
  currentQuotePriceUsd: "",
  indexOracleId: "",
};

export const MsgCreateMarket = {
  encode(
    message: MsgCreateMarket,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.marketType !== "") {
      writer.uint32(26).string(message.marketType);
    }
    if (message.base !== "") {
      writer.uint32(34).string(message.base);
    }
    if (message.quote !== "") {
      writer.uint32(42).string(message.quote);
    }
    if (message.currentBasePriceUsd !== "") {
      writer.uint32(50).string(message.currentBasePriceUsd);
    }
    if (message.currentQuotePriceUsd !== "") {
      writer.uint32(58).string(message.currentQuotePriceUsd);
    }
    if (message.indexOracleId !== "") {
      writer.uint32(82).string(message.indexOracleId);
    }
    if (message.expiryTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expiryTime),
        writer.uint32(90).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateMarket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateMarket } as MsgCreateMarket;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.marketType = reader.string();
          break;
        case 4:
          message.base = reader.string();
          break;
        case 5:
          message.quote = reader.string();
          break;
        case 6:
          message.currentBasePriceUsd = reader.string();
          break;
        case 7:
          message.currentQuotePriceUsd = reader.string();
          break;
        case 10:
          message.indexOracleId = reader.string();
          break;
        case 11:
          message.expiryTime = fromTimestamp(
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

  fromJSON(object: any): MsgCreateMarket {
    const message = { ...baseMsgCreateMarket } as MsgCreateMarket;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.marketType =
      object.marketType !== undefined && object.marketType !== null
        ? String(object.marketType)
        : "";
    message.base =
      object.base !== undefined && object.base !== null
        ? String(object.base)
        : "";
    message.quote =
      object.quote !== undefined && object.quote !== null
        ? String(object.quote)
        : "";
    message.currentBasePriceUsd =
      object.currentBasePriceUsd !== undefined &&
      object.currentBasePriceUsd !== null
        ? String(object.currentBasePriceUsd)
        : "";
    message.currentQuotePriceUsd =
      object.currentQuotePriceUsd !== undefined &&
      object.currentQuotePriceUsd !== null
        ? String(object.currentQuotePriceUsd)
        : "";
    message.indexOracleId =
      object.indexOracleId !== undefined && object.indexOracleId !== null
        ? String(object.indexOracleId)
        : "";
    message.expiryTime =
      object.expiryTime !== undefined && object.expiryTime !== null
        ? fromJsonTimestamp(object.expiryTime)
        : undefined;
    return message;
  },

  toJSON(message: MsgCreateMarket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.marketType !== undefined && (obj.marketType = message.marketType);
    message.base !== undefined && (obj.base = message.base);
    message.quote !== undefined && (obj.quote = message.quote);
    message.currentBasePriceUsd !== undefined &&
      (obj.currentBasePriceUsd = message.currentBasePriceUsd);
    message.currentQuotePriceUsd !== undefined &&
      (obj.currentQuotePriceUsd = message.currentQuotePriceUsd);
    message.indexOracleId !== undefined &&
      (obj.indexOracleId = message.indexOracleId);
    message.expiryTime !== undefined &&
      (obj.expiryTime = message.expiryTime.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateMarket>): MsgCreateMarket {
    const message = { ...baseMsgCreateMarket } as MsgCreateMarket;
    message.creator = object.creator ?? "";
    message.marketType = object.marketType ?? "";
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    message.currentBasePriceUsd = object.currentBasePriceUsd ?? "";
    message.currentQuotePriceUsd = object.currentQuotePriceUsd ?? "";
    message.indexOracleId = object.indexOracleId ?? "";
    message.expiryTime = object.expiryTime ?? undefined;
    return message;
  },
};

const baseMsgCreateMarketResponse: object = { id: "" };

export const MsgCreateMarketResponse = {
  encode(
    message: MsgCreateMarketResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateMarketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateMarketResponse,
    } as MsgCreateMarketResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateMarketResponse {
    const message = {
      ...baseMsgCreateMarketResponse,
    } as MsgCreateMarketResponse;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    return message;
  },

  toJSON(message: MsgCreateMarketResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateMarketResponse>
  ): MsgCreateMarketResponse {
    const message = {
      ...baseMsgCreateMarketResponse,
    } as MsgCreateMarketResponse;
    message.id = object.id ?? "";
    return message;
  },
};

const baseMsgUpdateMarket: object = { updater: "" };

export const MsgUpdateMarket = {
  encode(
    message: MsgUpdateMarket,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.updater !== "") {
      writer.uint32(10).string(message.updater);
    }
    if (message.marketParams !== undefined) {
      MarketParams.encode(
        message.marketParams,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMarket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateMarket } as MsgUpdateMarket;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updater = reader.string();
          break;
        case 2:
          message.marketParams = MarketParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateMarket {
    const message = { ...baseMsgUpdateMarket } as MsgUpdateMarket;
    message.updater =
      object.updater !== undefined && object.updater !== null
        ? String(object.updater)
        : "";
    message.marketParams =
      object.marketParams !== undefined && object.marketParams !== null
        ? MarketParams.fromJSON(object.marketParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdateMarket): unknown {
    const obj: any = {};
    message.updater !== undefined && (obj.updater = message.updater);
    message.marketParams !== undefined &&
      (obj.marketParams = message.marketParams
        ? MarketParams.toJSON(message.marketParams)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateMarket>): MsgUpdateMarket {
    const message = { ...baseMsgUpdateMarket } as MsgUpdateMarket;
    message.updater = object.updater ?? "";
    message.marketParams =
      object.marketParams !== undefined && object.marketParams !== null
        ? MarketParams.fromPartial(object.marketParams)
        : undefined;
    return message;
  },
};

const baseMsgUpdateMarketResponse: object = {};

export const MsgUpdateMarketResponse = {
  encode(
    _: MsgUpdateMarketResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateMarketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateMarketResponse,
    } as MsgUpdateMarketResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateMarketResponse {
    const message = {
      ...baseMsgUpdateMarketResponse,
    } as MsgUpdateMarketResponse;
    return message;
  },

  toJSON(_: MsgUpdateMarketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateMarketResponse>
  ): MsgUpdateMarketResponse {
    const message = {
      ...baseMsgUpdateMarketResponse,
    } as MsgUpdateMarketResponse;
    return message;
  },
};

const baseMsgUpdatePerpetualsFundingInterval: object = { updater: "" };

export const MsgUpdatePerpetualsFundingInterval = {
  encode(
    message: MsgUpdatePerpetualsFundingInterval,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.updater !== "") {
      writer.uint32(10).string(message.updater);
    }
    if (message.perpetualsFundingInterval !== undefined) {
      Duration.encode(
        message.perpetualsFundingInterval,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdatePerpetualsFundingInterval {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdatePerpetualsFundingInterval,
    } as MsgUpdatePerpetualsFundingInterval;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updater = reader.string();
          break;
        case 2:
          message.perpetualsFundingInterval = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePerpetualsFundingInterval {
    const message = {
      ...baseMsgUpdatePerpetualsFundingInterval,
    } as MsgUpdatePerpetualsFundingInterval;
    message.updater =
      object.updater !== undefined && object.updater !== null
        ? String(object.updater)
        : "";
    message.perpetualsFundingInterval =
      object.perpetualsFundingInterval !== undefined &&
      object.perpetualsFundingInterval !== null
        ? Duration.fromJSON(object.perpetualsFundingInterval)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdatePerpetualsFundingInterval): unknown {
    const obj: any = {};
    message.updater !== undefined && (obj.updater = message.updater);
    message.perpetualsFundingInterval !== undefined &&
      (obj.perpetualsFundingInterval = message.perpetualsFundingInterval
        ? Duration.toJSON(message.perpetualsFundingInterval)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdatePerpetualsFundingInterval>
  ): MsgUpdatePerpetualsFundingInterval {
    const message = {
      ...baseMsgUpdatePerpetualsFundingInterval,
    } as MsgUpdatePerpetualsFundingInterval;
    message.updater = object.updater ?? "";
    message.perpetualsFundingInterval =
      object.perpetualsFundingInterval !== undefined &&
      object.perpetualsFundingInterval !== null
        ? Duration.fromPartial(object.perpetualsFundingInterval)
        : undefined;
    return message;
  },
};

const baseMsgUpdatePerpetualsFundingIntervalResponse: object = {};

export const MsgUpdatePerpetualsFundingIntervalResponse = {
  encode(
    _: MsgUpdatePerpetualsFundingIntervalResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdatePerpetualsFundingIntervalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdatePerpetualsFundingIntervalResponse,
    } as MsgUpdatePerpetualsFundingIntervalResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdatePerpetualsFundingIntervalResponse {
    const message = {
      ...baseMsgUpdatePerpetualsFundingIntervalResponse,
    } as MsgUpdatePerpetualsFundingIntervalResponse;
    return message;
  },

  toJSON(_: MsgUpdatePerpetualsFundingIntervalResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdatePerpetualsFundingIntervalResponse>
  ): MsgUpdatePerpetualsFundingIntervalResponse {
    const message = {
      ...baseMsgUpdatePerpetualsFundingIntervalResponse,
    } as MsgUpdatePerpetualsFundingIntervalResponse;
    return message;
  },
};

const baseMsgAddFeeTier: object = { creator: "" };

export const MsgAddFeeTier = {
  encode(
    message: MsgAddFeeTier,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.feeCategory !== undefined) {
      FeeCategory.encode(
        message.feeCategory,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.feeTier !== undefined) {
      FeeTier.encode(message.feeTier, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddFeeTier {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddFeeTier } as MsgAddFeeTier;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.feeCategory = FeeCategory.decode(reader, reader.uint32());
          break;
        case 3:
          message.feeTier = FeeTier.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddFeeTier {
    const message = { ...baseMsgAddFeeTier } as MsgAddFeeTier;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.feeCategory =
      object.feeCategory !== undefined && object.feeCategory !== null
        ? FeeCategory.fromJSON(object.feeCategory)
        : undefined;
    message.feeTier =
      object.feeTier !== undefined && object.feeTier !== null
        ? FeeTier.fromJSON(object.feeTier)
        : undefined;
    return message;
  },

  toJSON(message: MsgAddFeeTier): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.feeCategory !== undefined &&
      (obj.feeCategory = message.feeCategory
        ? FeeCategory.toJSON(message.feeCategory)
        : undefined);
    message.feeTier !== undefined &&
      (obj.feeTier = message.feeTier
        ? FeeTier.toJSON(message.feeTier)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddFeeTier>): MsgAddFeeTier {
    const message = { ...baseMsgAddFeeTier } as MsgAddFeeTier;
    message.creator = object.creator ?? "";
    message.feeCategory =
      object.feeCategory !== undefined && object.feeCategory !== null
        ? FeeCategory.fromPartial(object.feeCategory)
        : undefined;
    message.feeTier =
      object.feeTier !== undefined && object.feeTier !== null
        ? FeeTier.fromPartial(object.feeTier)
        : undefined;
    return message;
  },
};

const baseMsgAddFeeTierResponse: object = {};

export const MsgAddFeeTierResponse = {
  encode(
    message: MsgAddFeeTierResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.feeTiers) {
      FeeTier.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddFeeTierResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddFeeTierResponse } as MsgAddFeeTierResponse;
    message.feeTiers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeTiers.push(FeeTier.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddFeeTierResponse {
    const message = { ...baseMsgAddFeeTierResponse } as MsgAddFeeTierResponse;
    message.feeTiers = (object.feeTiers ?? []).map((e: any) =>
      FeeTier.fromJSON(e)
    );
    return message;
  },

  toJSON(message: MsgAddFeeTierResponse): unknown {
    const obj: any = {};
    if (message.feeTiers) {
      obj.feeTiers = message.feeTiers.map((e) =>
        e ? FeeTier.toJSON(e) : undefined
      );
    } else {
      obj.feeTiers = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgAddFeeTierResponse>
  ): MsgAddFeeTierResponse {
    const message = { ...baseMsgAddFeeTierResponse } as MsgAddFeeTierResponse;
    message.feeTiers = (object.feeTiers ?? []).map((e) =>
      FeeTier.fromPartial(e)
    );
    return message;
  },
};

const baseMsgUpdateFeeTier: object = {
  updater: "",
  requiredStake: "",
  takerFee: "",
  makerFee: "",
};

export const MsgUpdateFeeTier = {
  encode(
    message: MsgUpdateFeeTier,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.updater !== "") {
      writer.uint32(10).string(message.updater);
    }
    if (message.feeCategory !== undefined) {
      FeeCategory.encode(
        message.feeCategory,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.requiredStake !== "") {
      writer.uint32(26).string(message.requiredStake);
    }
    if (message.takerFee !== "") {
      writer.uint32(34).string(message.takerFee);
    }
    if (message.makerFee !== "") {
      writer.uint32(42).string(message.makerFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateFeeTier {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateFeeTier } as MsgUpdateFeeTier;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updater = reader.string();
          break;
        case 2:
          message.feeCategory = FeeCategory.decode(reader, reader.uint32());
          break;
        case 3:
          message.requiredStake = reader.string();
          break;
        case 4:
          message.takerFee = reader.string();
          break;
        case 5:
          message.makerFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateFeeTier {
    const message = { ...baseMsgUpdateFeeTier } as MsgUpdateFeeTier;
    message.updater =
      object.updater !== undefined && object.updater !== null
        ? String(object.updater)
        : "";
    message.feeCategory =
      object.feeCategory !== undefined && object.feeCategory !== null
        ? FeeCategory.fromJSON(object.feeCategory)
        : undefined;
    message.requiredStake =
      object.requiredStake !== undefined && object.requiredStake !== null
        ? String(object.requiredStake)
        : "";
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

  toJSON(message: MsgUpdateFeeTier): unknown {
    const obj: any = {};
    message.updater !== undefined && (obj.updater = message.updater);
    message.feeCategory !== undefined &&
      (obj.feeCategory = message.feeCategory
        ? FeeCategory.toJSON(message.feeCategory)
        : undefined);
    message.requiredStake !== undefined &&
      (obj.requiredStake = message.requiredStake);
    message.takerFee !== undefined && (obj.takerFee = message.takerFee);
    message.makerFee !== undefined && (obj.makerFee = message.makerFee);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateFeeTier>): MsgUpdateFeeTier {
    const message = { ...baseMsgUpdateFeeTier } as MsgUpdateFeeTier;
    message.updater = object.updater ?? "";
    message.feeCategory =
      object.feeCategory !== undefined && object.feeCategory !== null
        ? FeeCategory.fromPartial(object.feeCategory)
        : undefined;
    message.requiredStake = object.requiredStake ?? "";
    message.takerFee = object.takerFee ?? "";
    message.makerFee = object.makerFee ?? "";
    return message;
  },
};

const baseMsgUpdateFeeTierResponse: object = {};

export const MsgUpdateFeeTierResponse = {
  encode(
    message: MsgUpdateFeeTierResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.feeTiers) {
      FeeTier.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateFeeTierResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateFeeTierResponse,
    } as MsgUpdateFeeTierResponse;
    message.feeTiers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeTiers.push(FeeTier.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateFeeTierResponse {
    const message = {
      ...baseMsgUpdateFeeTierResponse,
    } as MsgUpdateFeeTierResponse;
    message.feeTiers = (object.feeTiers ?? []).map((e: any) =>
      FeeTier.fromJSON(e)
    );
    return message;
  },

  toJSON(message: MsgUpdateFeeTierResponse): unknown {
    const obj: any = {};
    if (message.feeTiers) {
      obj.feeTiers = message.feeTiers.map((e) =>
        e ? FeeTier.toJSON(e) : undefined
      );
    } else {
      obj.feeTiers = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateFeeTierResponse>
  ): MsgUpdateFeeTierResponse {
    const message = {
      ...baseMsgUpdateFeeTierResponse,
    } as MsgUpdateFeeTierResponse;
    message.feeTiers = (object.feeTiers ?? []).map((e) =>
      FeeTier.fromPartial(e)
    );
    return message;
  },
};

const baseMsgRemoveFeeTier: object = { remover: "", requiredStake: "" };

export const MsgRemoveFeeTier = {
  encode(
    message: MsgRemoveFeeTier,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.remover !== "") {
      writer.uint32(10).string(message.remover);
    }
    if (message.feeCategory !== undefined) {
      FeeCategory.encode(
        message.feeCategory,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.requiredStake !== "") {
      writer.uint32(26).string(message.requiredStake);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveFeeTier {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRemoveFeeTier } as MsgRemoveFeeTier;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.remover = reader.string();
          break;
        case 2:
          message.feeCategory = FeeCategory.decode(reader, reader.uint32());
          break;
        case 3:
          message.requiredStake = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveFeeTier {
    const message = { ...baseMsgRemoveFeeTier } as MsgRemoveFeeTier;
    message.remover =
      object.remover !== undefined && object.remover !== null
        ? String(object.remover)
        : "";
    message.feeCategory =
      object.feeCategory !== undefined && object.feeCategory !== null
        ? FeeCategory.fromJSON(object.feeCategory)
        : undefined;
    message.requiredStake =
      object.requiredStake !== undefined && object.requiredStake !== null
        ? String(object.requiredStake)
        : "";
    return message;
  },

  toJSON(message: MsgRemoveFeeTier): unknown {
    const obj: any = {};
    message.remover !== undefined && (obj.remover = message.remover);
    message.feeCategory !== undefined &&
      (obj.feeCategory = message.feeCategory
        ? FeeCategory.toJSON(message.feeCategory)
        : undefined);
    message.requiredStake !== undefined &&
      (obj.requiredStake = message.requiredStake);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRemoveFeeTier>): MsgRemoveFeeTier {
    const message = { ...baseMsgRemoveFeeTier } as MsgRemoveFeeTier;
    message.remover = object.remover ?? "";
    message.feeCategory =
      object.feeCategory !== undefined && object.feeCategory !== null
        ? FeeCategory.fromPartial(object.feeCategory)
        : undefined;
    message.requiredStake = object.requiredStake ?? "";
    return message;
  },
};

const baseMsgRemoveFeeTierResponse: object = {};

export const MsgRemoveFeeTierResponse = {
  encode(
    message: MsgRemoveFeeTierResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.feeTiers) {
      FeeTier.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemoveFeeTierResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRemoveFeeTierResponse,
    } as MsgRemoveFeeTierResponse;
    message.feeTiers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeTiers.push(FeeTier.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveFeeTierResponse {
    const message = {
      ...baseMsgRemoveFeeTierResponse,
    } as MsgRemoveFeeTierResponse;
    message.feeTiers = (object.feeTiers ?? []).map((e: any) =>
      FeeTier.fromJSON(e)
    );
    return message;
  },

  toJSON(message: MsgRemoveFeeTierResponse): unknown {
    const obj: any = {};
    if (message.feeTiers) {
      obj.feeTiers = message.feeTiers.map((e) =>
        e ? FeeTier.toJSON(e) : undefined
      );
    } else {
      obj.feeTiers = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRemoveFeeTierResponse>
  ): MsgRemoveFeeTierResponse {
    const message = {
      ...baseMsgRemoveFeeTierResponse,
    } as MsgRemoveFeeTierResponse;
    message.feeTiers = (object.feeTiers ?? []).map((e) =>
      FeeTier.fromPartial(e)
    );
    return message;
  },
};

const baseMsgSetStakeEquivalence: object = { setter: "" };

export const MsgSetStakeEquivalence = {
  encode(
    message: MsgSetStakeEquivalence,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.setter !== "") {
      writer.uint32(10).string(message.setter);
    }
    if (message.stakeEquivalence !== undefined) {
      StakeEquivalence.encode(
        message.stakeEquivalence,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetStakeEquivalence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetStakeEquivalence } as MsgSetStakeEquivalence;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.setter = reader.string();
          break;
        case 2:
          message.stakeEquivalence = StakeEquivalence.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetStakeEquivalence {
    const message = { ...baseMsgSetStakeEquivalence } as MsgSetStakeEquivalence;
    message.setter =
      object.setter !== undefined && object.setter !== null
        ? String(object.setter)
        : "";
    message.stakeEquivalence =
      object.stakeEquivalence !== undefined && object.stakeEquivalence !== null
        ? StakeEquivalence.fromJSON(object.stakeEquivalence)
        : undefined;
    return message;
  },

  toJSON(message: MsgSetStakeEquivalence): unknown {
    const obj: any = {};
    message.setter !== undefined && (obj.setter = message.setter);
    message.stakeEquivalence !== undefined &&
      (obj.stakeEquivalence = message.stakeEquivalence
        ? StakeEquivalence.toJSON(message.stakeEquivalence)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetStakeEquivalence>
  ): MsgSetStakeEquivalence {
    const message = { ...baseMsgSetStakeEquivalence } as MsgSetStakeEquivalence;
    message.setter = object.setter ?? "";
    message.stakeEquivalence =
      object.stakeEquivalence !== undefined && object.stakeEquivalence !== null
        ? StakeEquivalence.fromPartial(object.stakeEquivalence)
        : undefined;
    return message;
  },
};

const baseMsgSetStakeEquivalenceResponse: object = {};

export const MsgSetStakeEquivalenceResponse = {
  encode(
    message: MsgSetStakeEquivalenceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.stakeEquivalences) {
      StakeEquivalence.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetStakeEquivalenceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetStakeEquivalenceResponse,
    } as MsgSetStakeEquivalenceResponse;
    message.stakeEquivalences = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakeEquivalences.push(
            StakeEquivalence.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetStakeEquivalenceResponse {
    const message = {
      ...baseMsgSetStakeEquivalenceResponse,
    } as MsgSetStakeEquivalenceResponse;
    message.stakeEquivalences = (object.stakeEquivalences ?? []).map((e: any) =>
      StakeEquivalence.fromJSON(e)
    );
    return message;
  },

  toJSON(message: MsgSetStakeEquivalenceResponse): unknown {
    const obj: any = {};
    if (message.stakeEquivalences) {
      obj.stakeEquivalences = message.stakeEquivalences.map((e) =>
        e ? StakeEquivalence.toJSON(e) : undefined
      );
    } else {
      obj.stakeEquivalences = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetStakeEquivalenceResponse>
  ): MsgSetStakeEquivalenceResponse {
    const message = {
      ...baseMsgSetStakeEquivalenceResponse,
    } as MsgSetStakeEquivalenceResponse;
    message.stakeEquivalences = (object.stakeEquivalences ?? []).map((e) =>
      StakeEquivalence.fromPartial(e)
    );
    return message;
  },
};

const baseMsgUpdateAllPoolTradingFees: object = { creator: "" };

export const MsgUpdateAllPoolTradingFees = {
  encode(
    message: MsgUpdateAllPoolTradingFees,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.updatePoolTradingFeesParams !== undefined) {
      UpdateAllPoolTradingFeesParams.encode(
        message.updatePoolTradingFeesParams,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateAllPoolTradingFees {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateAllPoolTradingFees,
    } as MsgUpdateAllPoolTradingFees;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.updatePoolTradingFeesParams =
            UpdateAllPoolTradingFeesParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateAllPoolTradingFees {
    const message = {
      ...baseMsgUpdateAllPoolTradingFees,
    } as MsgUpdateAllPoolTradingFees;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.updatePoolTradingFeesParams =
      object.updatePoolTradingFeesParams !== undefined &&
      object.updatePoolTradingFeesParams !== null
        ? UpdateAllPoolTradingFeesParams.fromJSON(
            object.updatePoolTradingFeesParams
          )
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdateAllPoolTradingFees): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.updatePoolTradingFeesParams !== undefined &&
      (obj.updatePoolTradingFeesParams = message.updatePoolTradingFeesParams
        ? UpdateAllPoolTradingFeesParams.toJSON(
            message.updatePoolTradingFeesParams
          )
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateAllPoolTradingFees>
  ): MsgUpdateAllPoolTradingFees {
    const message = {
      ...baseMsgUpdateAllPoolTradingFees,
    } as MsgUpdateAllPoolTradingFees;
    message.creator = object.creator ?? "";
    message.updatePoolTradingFeesParams =
      object.updatePoolTradingFeesParams !== undefined &&
      object.updatePoolTradingFeesParams !== null
        ? UpdateAllPoolTradingFeesParams.fromPartial(
            object.updatePoolTradingFeesParams
          )
        : undefined;
    return message;
  },
};

const baseMsgUpdateAllPoolTradingFeesResponse: object = {};

export const MsgUpdateAllPoolTradingFeesResponse = {
  encode(
    _: MsgUpdateAllPoolTradingFeesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateAllPoolTradingFeesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateAllPoolTradingFeesResponse,
    } as MsgUpdateAllPoolTradingFeesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateAllPoolTradingFeesResponse {
    const message = {
      ...baseMsgUpdateAllPoolTradingFeesResponse,
    } as MsgUpdateAllPoolTradingFeesResponse;
    return message;
  },

  toJSON(_: MsgUpdateAllPoolTradingFeesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateAllPoolTradingFeesResponse>
  ): MsgUpdateAllPoolTradingFeesResponse {
    const message = {
      ...baseMsgUpdateAllPoolTradingFeesResponse,
    } as MsgUpdateAllPoolTradingFeesResponse;
    return message;
  },
};

const baseUpdateAllPoolTradingFeesParams: object = {
  marketType: "",
  makerFee: "",
  takerFee: "",
};

export const UpdateAllPoolTradingFeesParams = {
  encode(
    message: UpdateAllPoolTradingFeesParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketType !== "") {
      writer.uint32(10).string(message.marketType);
    }
    if (message.makerFee !== "") {
      writer.uint32(18).string(message.makerFee);
    }
    if (message.takerFee !== "") {
      writer.uint32(26).string(message.takerFee);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateAllPoolTradingFeesParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateAllPoolTradingFeesParams,
    } as UpdateAllPoolTradingFeesParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketType = reader.string();
          break;
        case 2:
          message.makerFee = reader.string();
          break;
        case 3:
          message.takerFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateAllPoolTradingFeesParams {
    const message = {
      ...baseUpdateAllPoolTradingFeesParams,
    } as UpdateAllPoolTradingFeesParams;
    message.marketType =
      object.marketType !== undefined && object.marketType !== null
        ? String(object.marketType)
        : "";
    message.makerFee =
      object.makerFee !== undefined && object.makerFee !== null
        ? String(object.makerFee)
        : "";
    message.takerFee =
      object.takerFee !== undefined && object.takerFee !== null
        ? String(object.takerFee)
        : "";
    return message;
  },

  toJSON(message: UpdateAllPoolTradingFeesParams): unknown {
    const obj: any = {};
    message.marketType !== undefined && (obj.marketType = message.marketType);
    message.makerFee !== undefined && (obj.makerFee = message.makerFee);
    message.takerFee !== undefined && (obj.takerFee = message.takerFee);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateAllPoolTradingFeesParams>
  ): UpdateAllPoolTradingFeesParams {
    const message = {
      ...baseUpdateAllPoolTradingFeesParams,
    } as UpdateAllPoolTradingFeesParams;
    message.marketType = object.marketType ?? "";
    message.makerFee = object.makerFee ?? "";
    message.takerFee = object.takerFee ?? "";
    return message;
  },
};

const baseMsgUpdateParams: object = { authority: "" };

export const MsgUpdateParams = {
  encode(
    message: MsgUpdateParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      ParamsToUpdate.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = ParamsToUpdate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    message.authority =
      object.authority !== undefined && object.authority !== null
        ? String(object.authority)
        : "";
    message.params =
      object.params !== undefined && object.params !== null
        ? ParamsToUpdate.fromJSON(object.params)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined &&
      (obj.params = message.params
        ? ParamsToUpdate.toJSON(message.params)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    message.authority = object.authority ?? "";
    message.params =
      object.params !== undefined && object.params !== null
        ? ParamsToUpdate.fromPartial(object.params)
        : undefined;
    return message;
  },
};

const baseMsgUpdateParamsResponse: object = {};

export const MsgUpdateParamsResponse = {
  encode(
    _: MsgUpdateParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateParamsResponse,
    } as MsgUpdateParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateParamsResponse {
    const message = {
      ...baseMsgUpdateParamsResponse,
    } as MsgUpdateParamsResponse;
    return message;
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateParamsResponse>
  ): MsgUpdateParamsResponse {
    const message = {
      ...baseMsgUpdateParamsResponse,
    } as MsgUpdateParamsResponse;
    return message;
  },
};

const baseMsgUpdateFeeStructure: object = { creator: "" };

export const MsgUpdateFeeStructure = {
  encode(
    message: MsgUpdateFeeStructure,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.feeCategory !== undefined) {
      FeeCategory.encode(
        message.feeCategory,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.feeTiers) {
      FeeTier.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateFeeStructure {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateFeeStructure } as MsgUpdateFeeStructure;
    message.feeTiers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.feeCategory = FeeCategory.decode(reader, reader.uint32());
          break;
        case 3:
          message.feeTiers.push(FeeTier.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateFeeStructure {
    const message = { ...baseMsgUpdateFeeStructure } as MsgUpdateFeeStructure;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.feeCategory =
      object.feeCategory !== undefined && object.feeCategory !== null
        ? FeeCategory.fromJSON(object.feeCategory)
        : undefined;
    message.feeTiers = (object.feeTiers ?? []).map((e: any) =>
      FeeTier.fromJSON(e)
    );
    return message;
  },

  toJSON(message: MsgUpdateFeeStructure): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
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

  fromPartial(
    object: DeepPartial<MsgUpdateFeeStructure>
  ): MsgUpdateFeeStructure {
    const message = { ...baseMsgUpdateFeeStructure } as MsgUpdateFeeStructure;
    message.creator = object.creator ?? "";
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

const baseMsgUpdateFeeStructureResponse: object = {};

export const MsgUpdateFeeStructureResponse = {
  encode(
    message: MsgUpdateFeeStructureResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.feeStructure !== undefined) {
      FeeStructure.encode(
        message.feeStructure,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateFeeStructureResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateFeeStructureResponse,
    } as MsgUpdateFeeStructureResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeStructure = FeeStructure.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateFeeStructureResponse {
    const message = {
      ...baseMsgUpdateFeeStructureResponse,
    } as MsgUpdateFeeStructureResponse;
    message.feeStructure =
      object.feeStructure !== undefined && object.feeStructure !== null
        ? FeeStructure.fromJSON(object.feeStructure)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdateFeeStructureResponse): unknown {
    const obj: any = {};
    message.feeStructure !== undefined &&
      (obj.feeStructure = message.feeStructure
        ? FeeStructure.toJSON(message.feeStructure)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateFeeStructureResponse>
  ): MsgUpdateFeeStructureResponse {
    const message = {
      ...baseMsgUpdateFeeStructureResponse,
    } as MsgUpdateFeeStructureResponse;
    message.feeStructure =
      object.feeStructure !== undefined && object.feeStructure !== null
        ? FeeStructure.fromPartial(object.feeStructure)
        : undefined;
    return message;
  },
};

const baseMsgDeleteFeeStructure: object = { creator: "" };

export const MsgDeleteFeeStructure = {
  encode(
    message: MsgDeleteFeeStructure,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.feeCategory !== undefined) {
      FeeCategory.encode(
        message.feeCategory,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeleteFeeStructure {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteFeeStructure } as MsgDeleteFeeStructure;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.feeCategory = FeeCategory.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteFeeStructure {
    const message = { ...baseMsgDeleteFeeStructure } as MsgDeleteFeeStructure;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.feeCategory =
      object.feeCategory !== undefined && object.feeCategory !== null
        ? FeeCategory.fromJSON(object.feeCategory)
        : undefined;
    return message;
  },

  toJSON(message: MsgDeleteFeeStructure): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.feeCategory !== undefined &&
      (obj.feeCategory = message.feeCategory
        ? FeeCategory.toJSON(message.feeCategory)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteFeeStructure>
  ): MsgDeleteFeeStructure {
    const message = { ...baseMsgDeleteFeeStructure } as MsgDeleteFeeStructure;
    message.creator = object.creator ?? "";
    message.feeCategory =
      object.feeCategory !== undefined && object.feeCategory !== null
        ? FeeCategory.fromPartial(object.feeCategory)
        : undefined;
    return message;
  },
};

const baseMsgDeleteFeeStructureResponse: object = {};

export const MsgDeleteFeeStructureResponse = {
  encode(
    _: MsgDeleteFeeStructureResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeleteFeeStructureResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteFeeStructureResponse,
    } as MsgDeleteFeeStructureResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteFeeStructureResponse {
    const message = {
      ...baseMsgDeleteFeeStructureResponse,
    } as MsgDeleteFeeStructureResponse;
    return message;
  },

  toJSON(_: MsgDeleteFeeStructureResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteFeeStructureResponse>
  ): MsgDeleteFeeStructureResponse {
    const message = {
      ...baseMsgDeleteFeeStructureResponse,
    } as MsgDeleteFeeStructureResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateMarket(request: MsgCreateMarket): Promise<MsgCreateMarketResponse>;
  UpdateMarket(request: MsgUpdateMarket): Promise<MsgUpdateMarketResponse>;
  UpdatePerpetualsFundingInterval(
    request: MsgUpdatePerpetualsFundingInterval
  ): Promise<MsgUpdatePerpetualsFundingIntervalResponse>;
  DisableSpotMarket(
    request: MsgDisableSpotMarket
  ): Promise<MsgDisableSpotMarketResponse>;
  AddFeeTier(request: MsgAddFeeTier): Promise<MsgAddFeeTierResponse>;
  UpdateFeeTier(request: MsgUpdateFeeTier): Promise<MsgUpdateFeeTierResponse>;
  RemoveFeeTier(request: MsgRemoveFeeTier): Promise<MsgRemoveFeeTierResponse>;
  SetStakeEquivalence(
    request: MsgSetStakeEquivalence
  ): Promise<MsgSetStakeEquivalenceResponse>;
  HandleUpdateAllPoolTradingFees(
    request: MsgUpdateAllPoolTradingFees
  ): Promise<MsgUpdateAllPoolTradingFeesResponse>;
  UpdateFeeStructure(
    request: MsgUpdateFeeStructure
  ): Promise<MsgUpdateFeeStructureResponse>;
  DeleteFeeStructure(
    request: MsgDeleteFeeStructure
  ): Promise<MsgDeleteFeeStructureResponse>;
  /**
   * UpdateParams defines a governance operation for updating the module
   * parameters. The authority is hard-coded to the x/gov module account.
   *
   * Since: cosmos-sdk 0.47
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateMarket = this.CreateMarket.bind(this);
    this.UpdateMarket = this.UpdateMarket.bind(this);
    this.UpdatePerpetualsFundingInterval =
      this.UpdatePerpetualsFundingInterval.bind(this);
    this.DisableSpotMarket = this.DisableSpotMarket.bind(this);
    this.AddFeeTier = this.AddFeeTier.bind(this);
    this.UpdateFeeTier = this.UpdateFeeTier.bind(this);
    this.RemoveFeeTier = this.RemoveFeeTier.bind(this);
    this.SetStakeEquivalence = this.SetStakeEquivalence.bind(this);
    this.HandleUpdateAllPoolTradingFees =
      this.HandleUpdateAllPoolTradingFees.bind(this);
    this.UpdateFeeStructure = this.UpdateFeeStructure.bind(this);
    this.DeleteFeeStructure = this.DeleteFeeStructure.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  CreateMarket(request: MsgCreateMarket): Promise<MsgCreateMarketResponse> {
    const data = MsgCreateMarket.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.market.Msg",
      "CreateMarket",
      data
    );
    return promise.then((data) =>
      MsgCreateMarketResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateMarket(request: MsgUpdateMarket): Promise<MsgUpdateMarketResponse> {
    const data = MsgUpdateMarket.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.market.Msg",
      "UpdateMarket",
      data
    );
    return promise.then((data) =>
      MsgUpdateMarketResponse.decode(new _m0.Reader(data))
    );
  }

  UpdatePerpetualsFundingInterval(
    request: MsgUpdatePerpetualsFundingInterval
  ): Promise<MsgUpdatePerpetualsFundingIntervalResponse> {
    const data = MsgUpdatePerpetualsFundingInterval.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.market.Msg",
      "UpdatePerpetualsFundingInterval",
      data
    );
    return promise.then((data) =>
      MsgUpdatePerpetualsFundingIntervalResponse.decode(new _m0.Reader(data))
    );
  }

  DisableSpotMarket(
    request: MsgDisableSpotMarket
  ): Promise<MsgDisableSpotMarketResponse> {
    const data = MsgDisableSpotMarket.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.market.Msg",
      "DisableSpotMarket",
      data
    );
    return promise.then((data) =>
      MsgDisableSpotMarketResponse.decode(new _m0.Reader(data))
    );
  }

  AddFeeTier(request: MsgAddFeeTier): Promise<MsgAddFeeTierResponse> {
    const data = MsgAddFeeTier.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.market.Msg",
      "AddFeeTier",
      data
    );
    return promise.then((data) =>
      MsgAddFeeTierResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateFeeTier(request: MsgUpdateFeeTier): Promise<MsgUpdateFeeTierResponse> {
    const data = MsgUpdateFeeTier.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.market.Msg",
      "UpdateFeeTier",
      data
    );
    return promise.then((data) =>
      MsgUpdateFeeTierResponse.decode(new _m0.Reader(data))
    );
  }

  RemoveFeeTier(request: MsgRemoveFeeTier): Promise<MsgRemoveFeeTierResponse> {
    const data = MsgRemoveFeeTier.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.market.Msg",
      "RemoveFeeTier",
      data
    );
    return promise.then((data) =>
      MsgRemoveFeeTierResponse.decode(new _m0.Reader(data))
    );
  }

  SetStakeEquivalence(
    request: MsgSetStakeEquivalence
  ): Promise<MsgSetStakeEquivalenceResponse> {
    const data = MsgSetStakeEquivalence.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.market.Msg",
      "SetStakeEquivalence",
      data
    );
    return promise.then((data) =>
      MsgSetStakeEquivalenceResponse.decode(new _m0.Reader(data))
    );
  }

  HandleUpdateAllPoolTradingFees(
    request: MsgUpdateAllPoolTradingFees
  ): Promise<MsgUpdateAllPoolTradingFeesResponse> {
    const data = MsgUpdateAllPoolTradingFees.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.market.Msg",
      "HandleUpdateAllPoolTradingFees",
      data
    );
    return promise.then((data) =>
      MsgUpdateAllPoolTradingFeesResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateFeeStructure(
    request: MsgUpdateFeeStructure
  ): Promise<MsgUpdateFeeStructureResponse> {
    const data = MsgUpdateFeeStructure.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.market.Msg",
      "UpdateFeeStructure",
      data
    );
    return promise.then((data) =>
      MsgUpdateFeeStructureResponse.decode(new _m0.Reader(data))
    );
  }

  DeleteFeeStructure(
    request: MsgDeleteFeeStructure
  ): Promise<MsgDeleteFeeStructureResponse> {
    const data = MsgDeleteFeeStructure.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.market.Msg",
      "DeleteFeeStructure",
      data
    );
    return promise.then((data) =>
      MsgDeleteFeeStructureResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.market.Msg",
      "UpdateParams",
      data
    );
    return promise.then((data) =>
      MsgUpdateParamsResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
