/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { CreatePerpetualTokenParams } from "../coin/tx";
import { CreateOracleParams } from "../oracle/tx";
import { FeeCategory, FeeStructure, FeeTier, StakeEquivalence } from "./fee";
import { MarketParams } from "./market";
import { ParamsToUpdate } from "./params";

export const protobufPackage = "Switcheo.carbon.market";

export interface MsgSettleSpotMarket {
  creator: string;
  marketId: string;
}

export interface MsgSettleSpotMarketResponse {
}

export interface MsgExpirePerpsMarket {
  authority: string;
  marketId: string;
  expiryTime?: Date;
}

export interface MsgExpirePerpsMarketResponse {
}

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

export interface MsgUpdateMarketResponse {
}

export interface MsgUpdatePerpetualsFundingInterval {
  updater: string;
  perpetualsFundingInterval?: Duration;
}

export interface MsgUpdatePerpetualsFundingIntervalResponse {
}

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

export interface MsgUpdateAllPoolTradingFeesResponse {
}

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
export interface MsgUpdateParamsResponse {
}

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

export interface MsgDeleteFeeStructureResponse {
}

export interface MsgCreatePerpMarket {
  authority: string;
  tokenParams?: CreatePerpetualTokenParams;
  marketParams?: MsgCreateMarket;
  oracleParams?: CreateOracleParams;
}

export interface MsgCreatePerpMarketResponse {
}

function createBaseMsgSettleSpotMarket(): MsgSettleSpotMarket {
  return { creator: "", marketId: "" };
}

export const MsgSettleSpotMarket = {
  encode(message: MsgSettleSpotMarket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSettleSpotMarket {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSettleSpotMarket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.marketId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSettleSpotMarket {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
    };
  },

  toJSON(message: MsgSettleSpotMarket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  create(base?: DeepPartial<MsgSettleSpotMarket>): MsgSettleSpotMarket {
    return MsgSettleSpotMarket.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSettleSpotMarket>): MsgSettleSpotMarket {
    const message = createBaseMsgSettleSpotMarket();
    message.creator = object.creator ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  },
};

function createBaseMsgSettleSpotMarketResponse(): MsgSettleSpotMarketResponse {
  return {};
}

export const MsgSettleSpotMarketResponse = {
  encode(_: MsgSettleSpotMarketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSettleSpotMarketResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSettleSpotMarketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgSettleSpotMarketResponse {
    return {};
  },

  toJSON(_: MsgSettleSpotMarketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSettleSpotMarketResponse>): MsgSettleSpotMarketResponse {
    return MsgSettleSpotMarketResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgSettleSpotMarketResponse>): MsgSettleSpotMarketResponse {
    const message = createBaseMsgSettleSpotMarketResponse();
    return message;
  },
};

function createBaseMsgExpirePerpsMarket(): MsgExpirePerpsMarket {
  return { authority: "", marketId: "", expiryTime: undefined };
}

export const MsgExpirePerpsMarket = {
  encode(message: MsgExpirePerpsMarket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.expiryTime !== undefined) {
      Timestamp.encode(toTimestamp(message.expiryTime), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExpirePerpsMarket {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExpirePerpsMarket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.marketId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.expiryTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgExpirePerpsMarket {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      expiryTime: isSet(object.expiryTime) ? fromJsonTimestamp(object.expiryTime) : undefined,
    };
  },

  toJSON(message: MsgExpirePerpsMarket): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.expiryTime !== undefined && (obj.expiryTime = message.expiryTime.toISOString());
    return obj;
  },

  create(base?: DeepPartial<MsgExpirePerpsMarket>): MsgExpirePerpsMarket {
    return MsgExpirePerpsMarket.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgExpirePerpsMarket>): MsgExpirePerpsMarket {
    const message = createBaseMsgExpirePerpsMarket();
    message.authority = object.authority ?? "";
    message.marketId = object.marketId ?? "";
    message.expiryTime = object.expiryTime ?? undefined;
    return message;
  },
};

function createBaseMsgExpirePerpsMarketResponse(): MsgExpirePerpsMarketResponse {
  return {};
}

export const MsgExpirePerpsMarketResponse = {
  encode(_: MsgExpirePerpsMarketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExpirePerpsMarketResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExpirePerpsMarketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgExpirePerpsMarketResponse {
    return {};
  },

  toJSON(_: MsgExpirePerpsMarketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgExpirePerpsMarketResponse>): MsgExpirePerpsMarketResponse {
    return MsgExpirePerpsMarketResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgExpirePerpsMarketResponse>): MsgExpirePerpsMarketResponse {
    const message = createBaseMsgExpirePerpsMarketResponse();
    return message;
  },
};

function createBaseMsgCreateMarket(): MsgCreateMarket {
  return {
    creator: "",
    marketType: "",
    base: "",
    quote: "",
    currentBasePriceUsd: "",
    currentQuotePriceUsd: "",
    indexOracleId: "",
    expiryTime: undefined,
  };
}

export const MsgCreateMarket = {
  encode(message: MsgCreateMarket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Timestamp.encode(toTimestamp(message.expiryTime), writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateMarket {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMarket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.marketType = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.base = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.quote = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.currentBasePriceUsd = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.currentQuotePriceUsd = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.indexOracleId = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.expiryTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateMarket {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      marketType: isSet(object.marketType) ? String(object.marketType) : "",
      base: isSet(object.base) ? String(object.base) : "",
      quote: isSet(object.quote) ? String(object.quote) : "",
      currentBasePriceUsd: isSet(object.currentBasePriceUsd) ? String(object.currentBasePriceUsd) : "",
      currentQuotePriceUsd: isSet(object.currentQuotePriceUsd) ? String(object.currentQuotePriceUsd) : "",
      indexOracleId: isSet(object.indexOracleId) ? String(object.indexOracleId) : "",
      expiryTime: isSet(object.expiryTime) ? fromJsonTimestamp(object.expiryTime) : undefined,
    };
  },

  toJSON(message: MsgCreateMarket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.marketType !== undefined && (obj.marketType = message.marketType);
    message.base !== undefined && (obj.base = message.base);
    message.quote !== undefined && (obj.quote = message.quote);
    message.currentBasePriceUsd !== undefined && (obj.currentBasePriceUsd = message.currentBasePriceUsd);
    message.currentQuotePriceUsd !== undefined && (obj.currentQuotePriceUsd = message.currentQuotePriceUsd);
    message.indexOracleId !== undefined && (obj.indexOracleId = message.indexOracleId);
    message.expiryTime !== undefined && (obj.expiryTime = message.expiryTime.toISOString());
    return obj;
  },

  create(base?: DeepPartial<MsgCreateMarket>): MsgCreateMarket {
    return MsgCreateMarket.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreateMarket>): MsgCreateMarket {
    const message = createBaseMsgCreateMarket();
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

function createBaseMsgCreateMarketResponse(): MsgCreateMarketResponse {
  return { id: "" };
}

export const MsgCreateMarketResponse = {
  encode(message: MsgCreateMarketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateMarketResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMarketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateMarketResponse {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: MsgCreateMarketResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create(base?: DeepPartial<MsgCreateMarketResponse>): MsgCreateMarketResponse {
    return MsgCreateMarketResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreateMarketResponse>): MsgCreateMarketResponse {
    const message = createBaseMsgCreateMarketResponse();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseMsgUpdateMarket(): MsgUpdateMarket {
  return { updater: "", marketParams: undefined };
}

export const MsgUpdateMarket = {
  encode(message: MsgUpdateMarket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.updater !== "") {
      writer.uint32(10).string(message.updater);
    }
    if (message.marketParams !== undefined) {
      MarketParams.encode(message.marketParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMarket {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMarket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.updater = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.marketParams = MarketParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateMarket {
    return {
      updater: isSet(object.updater) ? String(object.updater) : "",
      marketParams: isSet(object.marketParams) ? MarketParams.fromJSON(object.marketParams) : undefined,
    };
  },

  toJSON(message: MsgUpdateMarket): unknown {
    const obj: any = {};
    message.updater !== undefined && (obj.updater = message.updater);
    message.marketParams !== undefined &&
      (obj.marketParams = message.marketParams ? MarketParams.toJSON(message.marketParams) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateMarket>): MsgUpdateMarket {
    return MsgUpdateMarket.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateMarket>): MsgUpdateMarket {
    const message = createBaseMsgUpdateMarket();
    message.updater = object.updater ?? "";
    message.marketParams = (object.marketParams !== undefined && object.marketParams !== null)
      ? MarketParams.fromPartial(object.marketParams)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateMarketResponse(): MsgUpdateMarketResponse {
  return {};
}

export const MsgUpdateMarketResponse = {
  encode(_: MsgUpdateMarketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMarketResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMarketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateMarketResponse {
    return {};
  },

  toJSON(_: MsgUpdateMarketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateMarketResponse>): MsgUpdateMarketResponse {
    return MsgUpdateMarketResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdateMarketResponse>): MsgUpdateMarketResponse {
    const message = createBaseMsgUpdateMarketResponse();
    return message;
  },
};

function createBaseMsgUpdatePerpetualsFundingInterval(): MsgUpdatePerpetualsFundingInterval {
  return { updater: "", perpetualsFundingInterval: undefined };
}

export const MsgUpdatePerpetualsFundingInterval = {
  encode(message: MsgUpdatePerpetualsFundingInterval, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.updater !== "") {
      writer.uint32(10).string(message.updater);
    }
    if (message.perpetualsFundingInterval !== undefined) {
      Duration.encode(message.perpetualsFundingInterval, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePerpetualsFundingInterval {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePerpetualsFundingInterval();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.updater = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.perpetualsFundingInterval = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePerpetualsFundingInterval {
    return {
      updater: isSet(object.updater) ? String(object.updater) : "",
      perpetualsFundingInterval: isSet(object.perpetualsFundingInterval)
        ? Duration.fromJSON(object.perpetualsFundingInterval)
        : undefined,
    };
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

  create(base?: DeepPartial<MsgUpdatePerpetualsFundingInterval>): MsgUpdatePerpetualsFundingInterval {
    return MsgUpdatePerpetualsFundingInterval.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdatePerpetualsFundingInterval>): MsgUpdatePerpetualsFundingInterval {
    const message = createBaseMsgUpdatePerpetualsFundingInterval();
    message.updater = object.updater ?? "";
    message.perpetualsFundingInterval =
      (object.perpetualsFundingInterval !== undefined && object.perpetualsFundingInterval !== null)
        ? Duration.fromPartial(object.perpetualsFundingInterval)
        : undefined;
    return message;
  },
};

function createBaseMsgUpdatePerpetualsFundingIntervalResponse(): MsgUpdatePerpetualsFundingIntervalResponse {
  return {};
}

export const MsgUpdatePerpetualsFundingIntervalResponse = {
  encode(_: MsgUpdatePerpetualsFundingIntervalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePerpetualsFundingIntervalResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePerpetualsFundingIntervalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUpdatePerpetualsFundingIntervalResponse {
    return {};
  },

  toJSON(_: MsgUpdatePerpetualsFundingIntervalResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdatePerpetualsFundingIntervalResponse>): MsgUpdatePerpetualsFundingIntervalResponse {
    return MsgUpdatePerpetualsFundingIntervalResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdatePerpetualsFundingIntervalResponse>): MsgUpdatePerpetualsFundingIntervalResponse {
    const message = createBaseMsgUpdatePerpetualsFundingIntervalResponse();
    return message;
  },
};

function createBaseMsgAddFeeTier(): MsgAddFeeTier {
  return { creator: "", feeCategory: undefined, feeTier: undefined };
}

export const MsgAddFeeTier = {
  encode(message: MsgAddFeeTier, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.feeCategory !== undefined) {
      FeeCategory.encode(message.feeCategory, writer.uint32(18).fork()).ldelim();
    }
    if (message.feeTier !== undefined) {
      FeeTier.encode(message.feeTier, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddFeeTier {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddFeeTier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.feeCategory = FeeCategory.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.feeTier = FeeTier.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAddFeeTier {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      feeCategory: isSet(object.feeCategory) ? FeeCategory.fromJSON(object.feeCategory) : undefined,
      feeTier: isSet(object.feeTier) ? FeeTier.fromJSON(object.feeTier) : undefined,
    };
  },

  toJSON(message: MsgAddFeeTier): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.feeCategory !== undefined &&
      (obj.feeCategory = message.feeCategory ? FeeCategory.toJSON(message.feeCategory) : undefined);
    message.feeTier !== undefined && (obj.feeTier = message.feeTier ? FeeTier.toJSON(message.feeTier) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgAddFeeTier>): MsgAddFeeTier {
    return MsgAddFeeTier.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgAddFeeTier>): MsgAddFeeTier {
    const message = createBaseMsgAddFeeTier();
    message.creator = object.creator ?? "";
    message.feeCategory = (object.feeCategory !== undefined && object.feeCategory !== null)
      ? FeeCategory.fromPartial(object.feeCategory)
      : undefined;
    message.feeTier = (object.feeTier !== undefined && object.feeTier !== null)
      ? FeeTier.fromPartial(object.feeTier)
      : undefined;
    return message;
  },
};

function createBaseMsgAddFeeTierResponse(): MsgAddFeeTierResponse {
  return { feeTiers: [] };
}

export const MsgAddFeeTierResponse = {
  encode(message: MsgAddFeeTierResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.feeTiers) {
      FeeTier.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddFeeTierResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddFeeTierResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.feeTiers.push(FeeTier.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAddFeeTierResponse {
    return { feeTiers: Array.isArray(object?.feeTiers) ? object.feeTiers.map((e: any) => FeeTier.fromJSON(e)) : [] };
  },

  toJSON(message: MsgAddFeeTierResponse): unknown {
    const obj: any = {};
    if (message.feeTiers) {
      obj.feeTiers = message.feeTiers.map((e) => e ? FeeTier.toJSON(e) : undefined);
    } else {
      obj.feeTiers = [];
    }
    return obj;
  },

  create(base?: DeepPartial<MsgAddFeeTierResponse>): MsgAddFeeTierResponse {
    return MsgAddFeeTierResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgAddFeeTierResponse>): MsgAddFeeTierResponse {
    const message = createBaseMsgAddFeeTierResponse();
    message.feeTiers = object.feeTiers?.map((e) => FeeTier.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgUpdateFeeTier(): MsgUpdateFeeTier {
  return { updater: "", feeCategory: undefined, requiredStake: "", takerFee: "", makerFee: "" };
}

export const MsgUpdateFeeTier = {
  encode(message: MsgUpdateFeeTier, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.updater !== "") {
      writer.uint32(10).string(message.updater);
    }
    if (message.feeCategory !== undefined) {
      FeeCategory.encode(message.feeCategory, writer.uint32(18).fork()).ldelim();
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateFeeTier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.updater = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.feeCategory = FeeCategory.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.requiredStake = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.takerFee = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.makerFee = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateFeeTier {
    return {
      updater: isSet(object.updater) ? String(object.updater) : "",
      feeCategory: isSet(object.feeCategory) ? FeeCategory.fromJSON(object.feeCategory) : undefined,
      requiredStake: isSet(object.requiredStake) ? String(object.requiredStake) : "",
      takerFee: isSet(object.takerFee) ? String(object.takerFee) : "",
      makerFee: isSet(object.makerFee) ? String(object.makerFee) : "",
    };
  },

  toJSON(message: MsgUpdateFeeTier): unknown {
    const obj: any = {};
    message.updater !== undefined && (obj.updater = message.updater);
    message.feeCategory !== undefined &&
      (obj.feeCategory = message.feeCategory ? FeeCategory.toJSON(message.feeCategory) : undefined);
    message.requiredStake !== undefined && (obj.requiredStake = message.requiredStake);
    message.takerFee !== undefined && (obj.takerFee = message.takerFee);
    message.makerFee !== undefined && (obj.makerFee = message.makerFee);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateFeeTier>): MsgUpdateFeeTier {
    return MsgUpdateFeeTier.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateFeeTier>): MsgUpdateFeeTier {
    const message = createBaseMsgUpdateFeeTier();
    message.updater = object.updater ?? "";
    message.feeCategory = (object.feeCategory !== undefined && object.feeCategory !== null)
      ? FeeCategory.fromPartial(object.feeCategory)
      : undefined;
    message.requiredStake = object.requiredStake ?? "";
    message.takerFee = object.takerFee ?? "";
    message.makerFee = object.makerFee ?? "";
    return message;
  },
};

function createBaseMsgUpdateFeeTierResponse(): MsgUpdateFeeTierResponse {
  return { feeTiers: [] };
}

export const MsgUpdateFeeTierResponse = {
  encode(message: MsgUpdateFeeTierResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.feeTiers) {
      FeeTier.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateFeeTierResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateFeeTierResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.feeTiers.push(FeeTier.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateFeeTierResponse {
    return { feeTiers: Array.isArray(object?.feeTiers) ? object.feeTiers.map((e: any) => FeeTier.fromJSON(e)) : [] };
  },

  toJSON(message: MsgUpdateFeeTierResponse): unknown {
    const obj: any = {};
    if (message.feeTiers) {
      obj.feeTiers = message.feeTiers.map((e) => e ? FeeTier.toJSON(e) : undefined);
    } else {
      obj.feeTiers = [];
    }
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateFeeTierResponse>): MsgUpdateFeeTierResponse {
    return MsgUpdateFeeTierResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateFeeTierResponse>): MsgUpdateFeeTierResponse {
    const message = createBaseMsgUpdateFeeTierResponse();
    message.feeTiers = object.feeTiers?.map((e) => FeeTier.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgRemoveFeeTier(): MsgRemoveFeeTier {
  return { remover: "", feeCategory: undefined, requiredStake: "" };
}

export const MsgRemoveFeeTier = {
  encode(message: MsgRemoveFeeTier, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.remover !== "") {
      writer.uint32(10).string(message.remover);
    }
    if (message.feeCategory !== undefined) {
      FeeCategory.encode(message.feeCategory, writer.uint32(18).fork()).ldelim();
    }
    if (message.requiredStake !== "") {
      writer.uint32(26).string(message.requiredStake);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveFeeTier {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveFeeTier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.remover = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.feeCategory = FeeCategory.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.requiredStake = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveFeeTier {
    return {
      remover: isSet(object.remover) ? String(object.remover) : "",
      feeCategory: isSet(object.feeCategory) ? FeeCategory.fromJSON(object.feeCategory) : undefined,
      requiredStake: isSet(object.requiredStake) ? String(object.requiredStake) : "",
    };
  },

  toJSON(message: MsgRemoveFeeTier): unknown {
    const obj: any = {};
    message.remover !== undefined && (obj.remover = message.remover);
    message.feeCategory !== undefined &&
      (obj.feeCategory = message.feeCategory ? FeeCategory.toJSON(message.feeCategory) : undefined);
    message.requiredStake !== undefined && (obj.requiredStake = message.requiredStake);
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveFeeTier>): MsgRemoveFeeTier {
    return MsgRemoveFeeTier.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRemoveFeeTier>): MsgRemoveFeeTier {
    const message = createBaseMsgRemoveFeeTier();
    message.remover = object.remover ?? "";
    message.feeCategory = (object.feeCategory !== undefined && object.feeCategory !== null)
      ? FeeCategory.fromPartial(object.feeCategory)
      : undefined;
    message.requiredStake = object.requiredStake ?? "";
    return message;
  },
};

function createBaseMsgRemoveFeeTierResponse(): MsgRemoveFeeTierResponse {
  return { feeTiers: [] };
}

export const MsgRemoveFeeTierResponse = {
  encode(message: MsgRemoveFeeTierResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.feeTiers) {
      FeeTier.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveFeeTierResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveFeeTierResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.feeTiers.push(FeeTier.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveFeeTierResponse {
    return { feeTiers: Array.isArray(object?.feeTiers) ? object.feeTiers.map((e: any) => FeeTier.fromJSON(e)) : [] };
  },

  toJSON(message: MsgRemoveFeeTierResponse): unknown {
    const obj: any = {};
    if (message.feeTiers) {
      obj.feeTiers = message.feeTiers.map((e) => e ? FeeTier.toJSON(e) : undefined);
    } else {
      obj.feeTiers = [];
    }
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveFeeTierResponse>): MsgRemoveFeeTierResponse {
    return MsgRemoveFeeTierResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRemoveFeeTierResponse>): MsgRemoveFeeTierResponse {
    const message = createBaseMsgRemoveFeeTierResponse();
    message.feeTiers = object.feeTiers?.map((e) => FeeTier.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgSetStakeEquivalence(): MsgSetStakeEquivalence {
  return { setter: "", stakeEquivalence: undefined };
}

export const MsgSetStakeEquivalence = {
  encode(message: MsgSetStakeEquivalence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.setter !== "") {
      writer.uint32(10).string(message.setter);
    }
    if (message.stakeEquivalence !== undefined) {
      StakeEquivalence.encode(message.stakeEquivalence, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetStakeEquivalence {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetStakeEquivalence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.setter = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.stakeEquivalence = StakeEquivalence.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetStakeEquivalence {
    return {
      setter: isSet(object.setter) ? String(object.setter) : "",
      stakeEquivalence: isSet(object.stakeEquivalence) ? StakeEquivalence.fromJSON(object.stakeEquivalence) : undefined,
    };
  },

  toJSON(message: MsgSetStakeEquivalence): unknown {
    const obj: any = {};
    message.setter !== undefined && (obj.setter = message.setter);
    message.stakeEquivalence !== undefined &&
      (obj.stakeEquivalence = message.stakeEquivalence ? StakeEquivalence.toJSON(message.stakeEquivalence) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgSetStakeEquivalence>): MsgSetStakeEquivalence {
    return MsgSetStakeEquivalence.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSetStakeEquivalence>): MsgSetStakeEquivalence {
    const message = createBaseMsgSetStakeEquivalence();
    message.setter = object.setter ?? "";
    message.stakeEquivalence = (object.stakeEquivalence !== undefined && object.stakeEquivalence !== null)
      ? StakeEquivalence.fromPartial(object.stakeEquivalence)
      : undefined;
    return message;
  },
};

function createBaseMsgSetStakeEquivalenceResponse(): MsgSetStakeEquivalenceResponse {
  return { stakeEquivalences: [] };
}

export const MsgSetStakeEquivalenceResponse = {
  encode(message: MsgSetStakeEquivalenceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.stakeEquivalences) {
      StakeEquivalence.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetStakeEquivalenceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetStakeEquivalenceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.stakeEquivalences.push(StakeEquivalence.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetStakeEquivalenceResponse {
    return {
      stakeEquivalences: Array.isArray(object?.stakeEquivalences)
        ? object.stakeEquivalences.map((e: any) => StakeEquivalence.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgSetStakeEquivalenceResponse): unknown {
    const obj: any = {};
    if (message.stakeEquivalences) {
      obj.stakeEquivalences = message.stakeEquivalences.map((e) => e ? StakeEquivalence.toJSON(e) : undefined);
    } else {
      obj.stakeEquivalences = [];
    }
    return obj;
  },

  create(base?: DeepPartial<MsgSetStakeEquivalenceResponse>): MsgSetStakeEquivalenceResponse {
    return MsgSetStakeEquivalenceResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSetStakeEquivalenceResponse>): MsgSetStakeEquivalenceResponse {
    const message = createBaseMsgSetStakeEquivalenceResponse();
    message.stakeEquivalences = object.stakeEquivalences?.map((e) => StakeEquivalence.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgUpdateAllPoolTradingFees(): MsgUpdateAllPoolTradingFees {
  return { creator: "", updatePoolTradingFeesParams: undefined };
}

export const MsgUpdateAllPoolTradingFees = {
  encode(message: MsgUpdateAllPoolTradingFees, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.updatePoolTradingFeesParams !== undefined) {
      UpdateAllPoolTradingFeesParams.encode(message.updatePoolTradingFeesParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAllPoolTradingFees {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAllPoolTradingFees();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.updatePoolTradingFeesParams = UpdateAllPoolTradingFeesParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateAllPoolTradingFees {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      updatePoolTradingFeesParams: isSet(object.updatePoolTradingFeesParams)
        ? UpdateAllPoolTradingFeesParams.fromJSON(object.updatePoolTradingFeesParams)
        : undefined,
    };
  },

  toJSON(message: MsgUpdateAllPoolTradingFees): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.updatePoolTradingFeesParams !== undefined &&
      (obj.updatePoolTradingFeesParams = message.updatePoolTradingFeesParams
        ? UpdateAllPoolTradingFeesParams.toJSON(message.updatePoolTradingFeesParams)
        : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateAllPoolTradingFees>): MsgUpdateAllPoolTradingFees {
    return MsgUpdateAllPoolTradingFees.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateAllPoolTradingFees>): MsgUpdateAllPoolTradingFees {
    const message = createBaseMsgUpdateAllPoolTradingFees();
    message.creator = object.creator ?? "";
    message.updatePoolTradingFeesParams =
      (object.updatePoolTradingFeesParams !== undefined && object.updatePoolTradingFeesParams !== null)
        ? UpdateAllPoolTradingFeesParams.fromPartial(object.updatePoolTradingFeesParams)
        : undefined;
    return message;
  },
};

function createBaseMsgUpdateAllPoolTradingFeesResponse(): MsgUpdateAllPoolTradingFeesResponse {
  return {};
}

export const MsgUpdateAllPoolTradingFeesResponse = {
  encode(_: MsgUpdateAllPoolTradingFeesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAllPoolTradingFeesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAllPoolTradingFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateAllPoolTradingFeesResponse {
    return {};
  },

  toJSON(_: MsgUpdateAllPoolTradingFeesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateAllPoolTradingFeesResponse>): MsgUpdateAllPoolTradingFeesResponse {
    return MsgUpdateAllPoolTradingFeesResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdateAllPoolTradingFeesResponse>): MsgUpdateAllPoolTradingFeesResponse {
    const message = createBaseMsgUpdateAllPoolTradingFeesResponse();
    return message;
  },
};

function createBaseUpdateAllPoolTradingFeesParams(): UpdateAllPoolTradingFeesParams {
  return { marketType: "", makerFee: "", takerFee: "" };
}

export const UpdateAllPoolTradingFeesParams = {
  encode(message: UpdateAllPoolTradingFeesParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAllPoolTradingFeesParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAllPoolTradingFeesParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.marketType = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.makerFee = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.takerFee = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateAllPoolTradingFeesParams {
    return {
      marketType: isSet(object.marketType) ? String(object.marketType) : "",
      makerFee: isSet(object.makerFee) ? String(object.makerFee) : "",
      takerFee: isSet(object.takerFee) ? String(object.takerFee) : "",
    };
  },

  toJSON(message: UpdateAllPoolTradingFeesParams): unknown {
    const obj: any = {};
    message.marketType !== undefined && (obj.marketType = message.marketType);
    message.makerFee !== undefined && (obj.makerFee = message.makerFee);
    message.takerFee !== undefined && (obj.takerFee = message.takerFee);
    return obj;
  },

  create(base?: DeepPartial<UpdateAllPoolTradingFeesParams>): UpdateAllPoolTradingFeesParams {
    return UpdateAllPoolTradingFeesParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateAllPoolTradingFeesParams>): UpdateAllPoolTradingFeesParams {
    const message = createBaseUpdateAllPoolTradingFeesParams();
    message.marketType = object.marketType ?? "";
    message.makerFee = object.makerFee ?? "";
    message.takerFee = object.takerFee ?? "";
    return message;
  },
};

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      ParamsToUpdate.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.params = ParamsToUpdate.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? ParamsToUpdate.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? ParamsToUpdate.toJSON(message.params) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    return MsgUpdateParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? ParamsToUpdate.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

function createBaseMsgUpdateFeeStructure(): MsgUpdateFeeStructure {
  return { creator: "", feeCategory: undefined, feeTiers: [] };
}

export const MsgUpdateFeeStructure = {
  encode(message: MsgUpdateFeeStructure, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.feeCategory !== undefined) {
      FeeCategory.encode(message.feeCategory, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.feeTiers) {
      FeeTier.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateFeeStructure {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateFeeStructure();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.feeCategory = FeeCategory.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.feeTiers.push(FeeTier.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateFeeStructure {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      feeCategory: isSet(object.feeCategory) ? FeeCategory.fromJSON(object.feeCategory) : undefined,
      feeTiers: Array.isArray(object?.feeTiers) ? object.feeTiers.map((e: any) => FeeTier.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgUpdateFeeStructure): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.feeCategory !== undefined &&
      (obj.feeCategory = message.feeCategory ? FeeCategory.toJSON(message.feeCategory) : undefined);
    if (message.feeTiers) {
      obj.feeTiers = message.feeTiers.map((e) => e ? FeeTier.toJSON(e) : undefined);
    } else {
      obj.feeTiers = [];
    }
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateFeeStructure>): MsgUpdateFeeStructure {
    return MsgUpdateFeeStructure.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateFeeStructure>): MsgUpdateFeeStructure {
    const message = createBaseMsgUpdateFeeStructure();
    message.creator = object.creator ?? "";
    message.feeCategory = (object.feeCategory !== undefined && object.feeCategory !== null)
      ? FeeCategory.fromPartial(object.feeCategory)
      : undefined;
    message.feeTiers = object.feeTiers?.map((e) => FeeTier.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgUpdateFeeStructureResponse(): MsgUpdateFeeStructureResponse {
  return { feeStructure: undefined };
}

export const MsgUpdateFeeStructureResponse = {
  encode(message: MsgUpdateFeeStructureResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeStructure !== undefined) {
      FeeStructure.encode(message.feeStructure, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateFeeStructureResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateFeeStructureResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.feeStructure = FeeStructure.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateFeeStructureResponse {
    return { feeStructure: isSet(object.feeStructure) ? FeeStructure.fromJSON(object.feeStructure) : undefined };
  },

  toJSON(message: MsgUpdateFeeStructureResponse): unknown {
    const obj: any = {};
    message.feeStructure !== undefined &&
      (obj.feeStructure = message.feeStructure ? FeeStructure.toJSON(message.feeStructure) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateFeeStructureResponse>): MsgUpdateFeeStructureResponse {
    return MsgUpdateFeeStructureResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateFeeStructureResponse>): MsgUpdateFeeStructureResponse {
    const message = createBaseMsgUpdateFeeStructureResponse();
    message.feeStructure = (object.feeStructure !== undefined && object.feeStructure !== null)
      ? FeeStructure.fromPartial(object.feeStructure)
      : undefined;
    return message;
  },
};

function createBaseMsgDeleteFeeStructure(): MsgDeleteFeeStructure {
  return { creator: "", feeCategory: undefined };
}

export const MsgDeleteFeeStructure = {
  encode(message: MsgDeleteFeeStructure, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.feeCategory !== undefined) {
      FeeCategory.encode(message.feeCategory, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteFeeStructure {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteFeeStructure();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.feeCategory = FeeCategory.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteFeeStructure {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      feeCategory: isSet(object.feeCategory) ? FeeCategory.fromJSON(object.feeCategory) : undefined,
    };
  },

  toJSON(message: MsgDeleteFeeStructure): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.feeCategory !== undefined &&
      (obj.feeCategory = message.feeCategory ? FeeCategory.toJSON(message.feeCategory) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgDeleteFeeStructure>): MsgDeleteFeeStructure {
    return MsgDeleteFeeStructure.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgDeleteFeeStructure>): MsgDeleteFeeStructure {
    const message = createBaseMsgDeleteFeeStructure();
    message.creator = object.creator ?? "";
    message.feeCategory = (object.feeCategory !== undefined && object.feeCategory !== null)
      ? FeeCategory.fromPartial(object.feeCategory)
      : undefined;
    return message;
  },
};

function createBaseMsgDeleteFeeStructureResponse(): MsgDeleteFeeStructureResponse {
  return {};
}

export const MsgDeleteFeeStructureResponse = {
  encode(_: MsgDeleteFeeStructureResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteFeeStructureResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteFeeStructureResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteFeeStructureResponse {
    return {};
  },

  toJSON(_: MsgDeleteFeeStructureResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgDeleteFeeStructureResponse>): MsgDeleteFeeStructureResponse {
    return MsgDeleteFeeStructureResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgDeleteFeeStructureResponse>): MsgDeleteFeeStructureResponse {
    const message = createBaseMsgDeleteFeeStructureResponse();
    return message;
  },
};

function createBaseMsgCreatePerpMarket(): MsgCreatePerpMarket {
  return { authority: "", tokenParams: undefined, marketParams: undefined, oracleParams: undefined };
}

export const MsgCreatePerpMarket = {
  encode(message: MsgCreatePerpMarket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.tokenParams !== undefined) {
      CreatePerpetualTokenParams.encode(message.tokenParams, writer.uint32(18).fork()).ldelim();
    }
    if (message.marketParams !== undefined) {
      MsgCreateMarket.encode(message.marketParams, writer.uint32(26).fork()).ldelim();
    }
    if (message.oracleParams !== undefined) {
      CreateOracleParams.encode(message.oracleParams, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePerpMarket {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePerpMarket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tokenParams = CreatePerpetualTokenParams.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.marketParams = MsgCreateMarket.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.oracleParams = CreateOracleParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePerpMarket {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      tokenParams: isSet(object.tokenParams) ? CreatePerpetualTokenParams.fromJSON(object.tokenParams) : undefined,
      marketParams: isSet(object.marketParams) ? MsgCreateMarket.fromJSON(object.marketParams) : undefined,
      oracleParams: isSet(object.oracleParams) ? CreateOracleParams.fromJSON(object.oracleParams) : undefined,
    };
  },

  toJSON(message: MsgCreatePerpMarket): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.tokenParams !== undefined &&
      (obj.tokenParams = message.tokenParams ? CreatePerpetualTokenParams.toJSON(message.tokenParams) : undefined);
    message.marketParams !== undefined &&
      (obj.marketParams = message.marketParams ? MsgCreateMarket.toJSON(message.marketParams) : undefined);
    message.oracleParams !== undefined &&
      (obj.oracleParams = message.oracleParams ? CreateOracleParams.toJSON(message.oracleParams) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgCreatePerpMarket>): MsgCreatePerpMarket {
    return MsgCreatePerpMarket.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreatePerpMarket>): MsgCreatePerpMarket {
    const message = createBaseMsgCreatePerpMarket();
    message.authority = object.authority ?? "";
    message.tokenParams = (object.tokenParams !== undefined && object.tokenParams !== null)
      ? CreatePerpetualTokenParams.fromPartial(object.tokenParams)
      : undefined;
    message.marketParams = (object.marketParams !== undefined && object.marketParams !== null)
      ? MsgCreateMarket.fromPartial(object.marketParams)
      : undefined;
    message.oracleParams = (object.oracleParams !== undefined && object.oracleParams !== null)
      ? CreateOracleParams.fromPartial(object.oracleParams)
      : undefined;
    return message;
  },
};

function createBaseMsgCreatePerpMarketResponse(): MsgCreatePerpMarketResponse {
  return {};
}

export const MsgCreatePerpMarketResponse = {
  encode(_: MsgCreatePerpMarketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePerpMarketResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePerpMarketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgCreatePerpMarketResponse {
    return {};
  },

  toJSON(_: MsgCreatePerpMarketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgCreatePerpMarketResponse>): MsgCreatePerpMarketResponse {
    return MsgCreatePerpMarketResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgCreatePerpMarketResponse>): MsgCreatePerpMarketResponse {
    const message = createBaseMsgCreatePerpMarketResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateMarket(request: MsgCreateMarket): Promise<MsgCreateMarketResponse>;
  UpdateMarket(request: MsgUpdateMarket): Promise<MsgUpdateMarketResponse>;
  CreatePerpMarket(request: MsgCreatePerpMarket): Promise<MsgCreatePerpMarketResponse>;
  UpdatePerpetualsFundingInterval(
    request: MsgUpdatePerpetualsFundingInterval,
  ): Promise<MsgUpdatePerpetualsFundingIntervalResponse>;
  SettleSpotMarket(request: MsgSettleSpotMarket): Promise<MsgSettleSpotMarketResponse>;
  ExpirePerpsMarket(request: MsgExpirePerpsMarket): Promise<MsgExpirePerpsMarketResponse>;
  AddFeeTier(request: MsgAddFeeTier): Promise<MsgAddFeeTierResponse>;
  UpdateFeeTier(request: MsgUpdateFeeTier): Promise<MsgUpdateFeeTierResponse>;
  RemoveFeeTier(request: MsgRemoveFeeTier): Promise<MsgRemoveFeeTierResponse>;
  SetStakeEquivalence(request: MsgSetStakeEquivalence): Promise<MsgSetStakeEquivalenceResponse>;
  HandleUpdateAllPoolTradingFees(request: MsgUpdateAllPoolTradingFees): Promise<MsgUpdateAllPoolTradingFeesResponse>;
  UpdateFeeStructure(request: MsgUpdateFeeStructure): Promise<MsgUpdateFeeStructureResponse>;
  DeleteFeeStructure(request: MsgDeleteFeeStructure): Promise<MsgDeleteFeeStructureResponse>;
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
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.market.Msg";
    this.rpc = rpc;
    this.CreateMarket = this.CreateMarket.bind(this);
    this.UpdateMarket = this.UpdateMarket.bind(this);
    this.CreatePerpMarket = this.CreatePerpMarket.bind(this);
    this.UpdatePerpetualsFundingInterval = this.UpdatePerpetualsFundingInterval.bind(this);
    this.SettleSpotMarket = this.SettleSpotMarket.bind(this);
    this.ExpirePerpsMarket = this.ExpirePerpsMarket.bind(this);
    this.AddFeeTier = this.AddFeeTier.bind(this);
    this.UpdateFeeTier = this.UpdateFeeTier.bind(this);
    this.RemoveFeeTier = this.RemoveFeeTier.bind(this);
    this.SetStakeEquivalence = this.SetStakeEquivalence.bind(this);
    this.HandleUpdateAllPoolTradingFees = this.HandleUpdateAllPoolTradingFees.bind(this);
    this.UpdateFeeStructure = this.UpdateFeeStructure.bind(this);
    this.DeleteFeeStructure = this.DeleteFeeStructure.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  CreateMarket(request: MsgCreateMarket): Promise<MsgCreateMarketResponse> {
    const data = MsgCreateMarket.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateMarket", data);
    return promise.then((data) => MsgCreateMarketResponse.decode(_m0.Reader.create(data)));
  }

  UpdateMarket(request: MsgUpdateMarket): Promise<MsgUpdateMarketResponse> {
    const data = MsgUpdateMarket.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateMarket", data);
    return promise.then((data) => MsgUpdateMarketResponse.decode(_m0.Reader.create(data)));
  }

  CreatePerpMarket(request: MsgCreatePerpMarket): Promise<MsgCreatePerpMarketResponse> {
    const data = MsgCreatePerpMarket.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreatePerpMarket", data);
    return promise.then((data) => MsgCreatePerpMarketResponse.decode(_m0.Reader.create(data)));
  }

  UpdatePerpetualsFundingInterval(
    request: MsgUpdatePerpetualsFundingInterval,
  ): Promise<MsgUpdatePerpetualsFundingIntervalResponse> {
    const data = MsgUpdatePerpetualsFundingInterval.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdatePerpetualsFundingInterval", data);
    return promise.then((data) => MsgUpdatePerpetualsFundingIntervalResponse.decode(_m0.Reader.create(data)));
  }

  SettleSpotMarket(request: MsgSettleSpotMarket): Promise<MsgSettleSpotMarketResponse> {
    const data = MsgSettleSpotMarket.encode(request).finish();
    const promise = this.rpc.request(this.service, "SettleSpotMarket", data);
    return promise.then((data) => MsgSettleSpotMarketResponse.decode(_m0.Reader.create(data)));
  }

  ExpirePerpsMarket(request: MsgExpirePerpsMarket): Promise<MsgExpirePerpsMarketResponse> {
    const data = MsgExpirePerpsMarket.encode(request).finish();
    const promise = this.rpc.request(this.service, "ExpirePerpsMarket", data);
    return promise.then((data) => MsgExpirePerpsMarketResponse.decode(_m0.Reader.create(data)));
  }

  AddFeeTier(request: MsgAddFeeTier): Promise<MsgAddFeeTierResponse> {
    const data = MsgAddFeeTier.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddFeeTier", data);
    return promise.then((data) => MsgAddFeeTierResponse.decode(_m0.Reader.create(data)));
  }

  UpdateFeeTier(request: MsgUpdateFeeTier): Promise<MsgUpdateFeeTierResponse> {
    const data = MsgUpdateFeeTier.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateFeeTier", data);
    return promise.then((data) => MsgUpdateFeeTierResponse.decode(_m0.Reader.create(data)));
  }

  RemoveFeeTier(request: MsgRemoveFeeTier): Promise<MsgRemoveFeeTierResponse> {
    const data = MsgRemoveFeeTier.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoveFeeTier", data);
    return promise.then((data) => MsgRemoveFeeTierResponse.decode(_m0.Reader.create(data)));
  }

  SetStakeEquivalence(request: MsgSetStakeEquivalence): Promise<MsgSetStakeEquivalenceResponse> {
    const data = MsgSetStakeEquivalence.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetStakeEquivalence", data);
    return promise.then((data) => MsgSetStakeEquivalenceResponse.decode(_m0.Reader.create(data)));
  }

  HandleUpdateAllPoolTradingFees(request: MsgUpdateAllPoolTradingFees): Promise<MsgUpdateAllPoolTradingFeesResponse> {
    const data = MsgUpdateAllPoolTradingFees.encode(request).finish();
    const promise = this.rpc.request(this.service, "HandleUpdateAllPoolTradingFees", data);
    return promise.then((data) => MsgUpdateAllPoolTradingFeesResponse.decode(_m0.Reader.create(data)));
  }

  UpdateFeeStructure(request: MsgUpdateFeeStructure): Promise<MsgUpdateFeeStructureResponse> {
    const data = MsgUpdateFeeStructure.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateFeeStructure", data);
    return promise.then((data) => MsgUpdateFeeStructureResponse.decode(_m0.Reader.create(data)));
  }

  DeleteFeeStructure(request: MsgDeleteFeeStructure): Promise<MsgDeleteFeeStructureResponse> {
    const data = MsgDeleteFeeStructure.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteFeeStructure", data);
    return promise.then((data) => MsgDeleteFeeStructureResponse.decode(_m0.Reader.create(data)));
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
