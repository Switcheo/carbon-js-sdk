/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { ParamsToUpdate } from "./params";

export const protobufPackage = "Switcheo.carbon.pricing";

export interface MsgSetBackfillTimeInterval {
  creator: string;
  backfillTimeInterval?: Duration;
}

export interface MsgSetBackfillTimeIntervalResponse {}

export interface MsgSetSmoothenBand {
  creator: string;
  smoothenBand: number;
}

export interface MsgSetSmoothenBandResponse {}

export interface MsgSetImpactBand {
  creator: string;
  impactBand: number;
}

export interface MsgSetImpactBandResponse {}

export interface MsgSetStaleIndexAllowance {
  creator: string;
  staleIndexAllowance?: Duration;
}

export interface MsgSetStaleIndexAllowanceResponse {}

export interface MsgUpdateTokenPriceOracle {
  creator: string;
  denom: string;
  oracleId: string;
}

export interface MsgUpdateTokenPriceOracleResponse {}

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

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgUpdateSettlementPrice {
  authority: string;
  marketId: string;
  settlementPrice: string;
}

export interface MsgUpdateSettlementPriceResponse {}

export interface MsgRemoveTokenPrice {
  /** authority is the address of the governance account. */
  authority: string;
  denom: string;
}

export interface MsgRemoveTokenPriceResponse {
  denom: string;
}

const baseMsgSetBackfillTimeInterval: object = { creator: "" };

export const MsgSetBackfillTimeInterval = {
  encode(
    message: MsgSetBackfillTimeInterval,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.backfillTimeInterval !== undefined) {
      Duration.encode(
        message.backfillTimeInterval,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetBackfillTimeInterval {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetBackfillTimeInterval,
    } as MsgSetBackfillTimeInterval;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.backfillTimeInterval = Duration.decode(
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

  fromJSON(object: any): MsgSetBackfillTimeInterval {
    const message = {
      ...baseMsgSetBackfillTimeInterval,
    } as MsgSetBackfillTimeInterval;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.backfillTimeInterval =
      object.backfillTimeInterval !== undefined &&
      object.backfillTimeInterval !== null
        ? Duration.fromJSON(object.backfillTimeInterval)
        : undefined;
    return message;
  },

  toJSON(message: MsgSetBackfillTimeInterval): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.backfillTimeInterval !== undefined &&
      (obj.backfillTimeInterval = message.backfillTimeInterval
        ? Duration.toJSON(message.backfillTimeInterval)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetBackfillTimeInterval>
  ): MsgSetBackfillTimeInterval {
    const message = {
      ...baseMsgSetBackfillTimeInterval,
    } as MsgSetBackfillTimeInterval;
    message.creator = object.creator ?? "";
    message.backfillTimeInterval =
      object.backfillTimeInterval !== undefined &&
      object.backfillTimeInterval !== null
        ? Duration.fromPartial(object.backfillTimeInterval)
        : undefined;
    return message;
  },
};

const baseMsgSetBackfillTimeIntervalResponse: object = {};

export const MsgSetBackfillTimeIntervalResponse = {
  encode(
    _: MsgSetBackfillTimeIntervalResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetBackfillTimeIntervalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetBackfillTimeIntervalResponse,
    } as MsgSetBackfillTimeIntervalResponse;
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

  fromJSON(_: any): MsgSetBackfillTimeIntervalResponse {
    const message = {
      ...baseMsgSetBackfillTimeIntervalResponse,
    } as MsgSetBackfillTimeIntervalResponse;
    return message;
  },

  toJSON(_: MsgSetBackfillTimeIntervalResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetBackfillTimeIntervalResponse>
  ): MsgSetBackfillTimeIntervalResponse {
    const message = {
      ...baseMsgSetBackfillTimeIntervalResponse,
    } as MsgSetBackfillTimeIntervalResponse;
    return message;
  },
};

const baseMsgSetSmoothenBand: object = { creator: "", smoothenBand: 0 };

export const MsgSetSmoothenBand = {
  encode(
    message: MsgSetSmoothenBand,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.smoothenBand !== 0) {
      writer.uint32(16).uint32(message.smoothenBand);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetSmoothenBand {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetSmoothenBand } as MsgSetSmoothenBand;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.smoothenBand = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetSmoothenBand {
    const message = { ...baseMsgSetSmoothenBand } as MsgSetSmoothenBand;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.smoothenBand =
      object.smoothenBand !== undefined && object.smoothenBand !== null
        ? Number(object.smoothenBand)
        : 0;
    return message;
  },

  toJSON(message: MsgSetSmoothenBand): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.smoothenBand !== undefined &&
      (obj.smoothenBand = message.smoothenBand);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetSmoothenBand>): MsgSetSmoothenBand {
    const message = { ...baseMsgSetSmoothenBand } as MsgSetSmoothenBand;
    message.creator = object.creator ?? "";
    message.smoothenBand = object.smoothenBand ?? 0;
    return message;
  },
};

const baseMsgSetSmoothenBandResponse: object = {};

export const MsgSetSmoothenBandResponse = {
  encode(
    _: MsgSetSmoothenBandResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetSmoothenBandResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetSmoothenBandResponse,
    } as MsgSetSmoothenBandResponse;
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

  fromJSON(_: any): MsgSetSmoothenBandResponse {
    const message = {
      ...baseMsgSetSmoothenBandResponse,
    } as MsgSetSmoothenBandResponse;
    return message;
  },

  toJSON(_: MsgSetSmoothenBandResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetSmoothenBandResponse>
  ): MsgSetSmoothenBandResponse {
    const message = {
      ...baseMsgSetSmoothenBandResponse,
    } as MsgSetSmoothenBandResponse;
    return message;
  },
};

const baseMsgSetImpactBand: object = { creator: "", impactBand: 0 };

export const MsgSetImpactBand = {
  encode(
    message: MsgSetImpactBand,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.impactBand !== 0) {
      writer.uint32(16).uint32(message.impactBand);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetImpactBand {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetImpactBand } as MsgSetImpactBand;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.impactBand = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetImpactBand {
    const message = { ...baseMsgSetImpactBand } as MsgSetImpactBand;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.impactBand =
      object.impactBand !== undefined && object.impactBand !== null
        ? Number(object.impactBand)
        : 0;
    return message;
  },

  toJSON(message: MsgSetImpactBand): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.impactBand !== undefined && (obj.impactBand = message.impactBand);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetImpactBand>): MsgSetImpactBand {
    const message = { ...baseMsgSetImpactBand } as MsgSetImpactBand;
    message.creator = object.creator ?? "";
    message.impactBand = object.impactBand ?? 0;
    return message;
  },
};

const baseMsgSetImpactBandResponse: object = {};

export const MsgSetImpactBandResponse = {
  encode(
    _: MsgSetImpactBandResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetImpactBandResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetImpactBandResponse,
    } as MsgSetImpactBandResponse;
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

  fromJSON(_: any): MsgSetImpactBandResponse {
    const message = {
      ...baseMsgSetImpactBandResponse,
    } as MsgSetImpactBandResponse;
    return message;
  },

  toJSON(_: MsgSetImpactBandResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetImpactBandResponse>
  ): MsgSetImpactBandResponse {
    const message = {
      ...baseMsgSetImpactBandResponse,
    } as MsgSetImpactBandResponse;
    return message;
  },
};

const baseMsgSetStaleIndexAllowance: object = { creator: "" };

export const MsgSetStaleIndexAllowance = {
  encode(
    message: MsgSetStaleIndexAllowance,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.staleIndexAllowance !== undefined) {
      Duration.encode(
        message.staleIndexAllowance,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetStaleIndexAllowance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetStaleIndexAllowance,
    } as MsgSetStaleIndexAllowance;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.staleIndexAllowance = Duration.decode(
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

  fromJSON(object: any): MsgSetStaleIndexAllowance {
    const message = {
      ...baseMsgSetStaleIndexAllowance,
    } as MsgSetStaleIndexAllowance;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.staleIndexAllowance =
      object.staleIndexAllowance !== undefined &&
      object.staleIndexAllowance !== null
        ? Duration.fromJSON(object.staleIndexAllowance)
        : undefined;
    return message;
  },

  toJSON(message: MsgSetStaleIndexAllowance): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.staleIndexAllowance !== undefined &&
      (obj.staleIndexAllowance = message.staleIndexAllowance
        ? Duration.toJSON(message.staleIndexAllowance)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetStaleIndexAllowance>
  ): MsgSetStaleIndexAllowance {
    const message = {
      ...baseMsgSetStaleIndexAllowance,
    } as MsgSetStaleIndexAllowance;
    message.creator = object.creator ?? "";
    message.staleIndexAllowance =
      object.staleIndexAllowance !== undefined &&
      object.staleIndexAllowance !== null
        ? Duration.fromPartial(object.staleIndexAllowance)
        : undefined;
    return message;
  },
};

const baseMsgSetStaleIndexAllowanceResponse: object = {};

export const MsgSetStaleIndexAllowanceResponse = {
  encode(
    _: MsgSetStaleIndexAllowanceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetStaleIndexAllowanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetStaleIndexAllowanceResponse,
    } as MsgSetStaleIndexAllowanceResponse;
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

  fromJSON(_: any): MsgSetStaleIndexAllowanceResponse {
    const message = {
      ...baseMsgSetStaleIndexAllowanceResponse,
    } as MsgSetStaleIndexAllowanceResponse;
    return message;
  },

  toJSON(_: MsgSetStaleIndexAllowanceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetStaleIndexAllowanceResponse>
  ): MsgSetStaleIndexAllowanceResponse {
    const message = {
      ...baseMsgSetStaleIndexAllowanceResponse,
    } as MsgSetStaleIndexAllowanceResponse;
    return message;
  },
};

const baseMsgUpdateTokenPriceOracle: object = {
  creator: "",
  denom: "",
  oracleId: "",
};

export const MsgUpdateTokenPriceOracle = {
  encode(
    message: MsgUpdateTokenPriceOracle,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.oracleId !== "") {
      writer.uint32(26).string(message.oracleId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateTokenPriceOracle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateTokenPriceOracle,
    } as MsgUpdateTokenPriceOracle;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.oracleId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateTokenPriceOracle {
    const message = {
      ...baseMsgUpdateTokenPriceOracle,
    } as MsgUpdateTokenPriceOracle;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.oracleId =
      object.oracleId !== undefined && object.oracleId !== null
        ? String(object.oracleId)
        : "";
    return message;
  },

  toJSON(message: MsgUpdateTokenPriceOracle): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.oracleId !== undefined && (obj.oracleId = message.oracleId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateTokenPriceOracle>
  ): MsgUpdateTokenPriceOracle {
    const message = {
      ...baseMsgUpdateTokenPriceOracle,
    } as MsgUpdateTokenPriceOracle;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.oracleId = object.oracleId ?? "";
    return message;
  },
};

const baseMsgUpdateTokenPriceOracleResponse: object = {};

export const MsgUpdateTokenPriceOracleResponse = {
  encode(
    _: MsgUpdateTokenPriceOracleResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateTokenPriceOracleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateTokenPriceOracleResponse,
    } as MsgUpdateTokenPriceOracleResponse;
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

  fromJSON(_: any): MsgUpdateTokenPriceOracleResponse {
    const message = {
      ...baseMsgUpdateTokenPriceOracleResponse,
    } as MsgUpdateTokenPriceOracleResponse;
    return message;
  },

  toJSON(_: MsgUpdateTokenPriceOracleResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateTokenPriceOracleResponse>
  ): MsgUpdateTokenPriceOracleResponse {
    const message = {
      ...baseMsgUpdateTokenPriceOracleResponse,
    } as MsgUpdateTokenPriceOracleResponse;
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

const baseMsgUpdateSettlementPrice: object = {
  authority: "",
  marketId: "",
  settlementPrice: "",
};

export const MsgUpdateSettlementPrice = {
  encode(
    message: MsgUpdateSettlementPrice,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.settlementPrice !== "") {
      writer.uint32(26).string(message.settlementPrice);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateSettlementPrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateSettlementPrice,
    } as MsgUpdateSettlementPrice;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        case 3:
          message.settlementPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateSettlementPrice {
    const message = {
      ...baseMsgUpdateSettlementPrice,
    } as MsgUpdateSettlementPrice;
    message.authority =
      object.authority !== undefined && object.authority !== null
        ? String(object.authority)
        : "";
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.settlementPrice =
      object.settlementPrice !== undefined && object.settlementPrice !== null
        ? String(object.settlementPrice)
        : "";
    return message;
  },

  toJSON(message: MsgUpdateSettlementPrice): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.settlementPrice !== undefined &&
      (obj.settlementPrice = message.settlementPrice);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateSettlementPrice>
  ): MsgUpdateSettlementPrice {
    const message = {
      ...baseMsgUpdateSettlementPrice,
    } as MsgUpdateSettlementPrice;
    message.authority = object.authority ?? "";
    message.marketId = object.marketId ?? "";
    message.settlementPrice = object.settlementPrice ?? "";
    return message;
  },
};

const baseMsgUpdateSettlementPriceResponse: object = {};

export const MsgUpdateSettlementPriceResponse = {
  encode(
    _: MsgUpdateSettlementPriceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateSettlementPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateSettlementPriceResponse,
    } as MsgUpdateSettlementPriceResponse;
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

  fromJSON(_: any): MsgUpdateSettlementPriceResponse {
    const message = {
      ...baseMsgUpdateSettlementPriceResponse,
    } as MsgUpdateSettlementPriceResponse;
    return message;
  },

  toJSON(_: MsgUpdateSettlementPriceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateSettlementPriceResponse>
  ): MsgUpdateSettlementPriceResponse {
    const message = {
      ...baseMsgUpdateSettlementPriceResponse,
    } as MsgUpdateSettlementPriceResponse;
    return message;
  },
};

const baseMsgRemoveTokenPrice: object = { authority: "", denom: "" };

export const MsgRemoveTokenPrice = {
  encode(
    message: MsgRemoveTokenPrice,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveTokenPrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRemoveTokenPrice } as MsgRemoveTokenPrice;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveTokenPrice {
    const message = { ...baseMsgRemoveTokenPrice } as MsgRemoveTokenPrice;
    message.authority =
      object.authority !== undefined && object.authority !== null
        ? String(object.authority)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: MsgRemoveTokenPrice): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRemoveTokenPrice>): MsgRemoveTokenPrice {
    const message = { ...baseMsgRemoveTokenPrice } as MsgRemoveTokenPrice;
    message.authority = object.authority ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseMsgRemoveTokenPriceResponse: object = { denom: "" };

export const MsgRemoveTokenPriceResponse = {
  encode(
    message: MsgRemoveTokenPriceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemoveTokenPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRemoveTokenPriceResponse,
    } as MsgRemoveTokenPriceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveTokenPriceResponse {
    const message = {
      ...baseMsgRemoveTokenPriceResponse,
    } as MsgRemoveTokenPriceResponse;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: MsgRemoveTokenPriceResponse): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRemoveTokenPriceResponse>
  ): MsgRemoveTokenPriceResponse {
    const message = {
      ...baseMsgRemoveTokenPriceResponse,
    } as MsgRemoveTokenPriceResponse;
    message.denom = object.denom ?? "";
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SetBackfillTimeInterval(
    request: MsgSetBackfillTimeInterval
  ): Promise<MsgSetBackfillTimeIntervalResponse>;
  SetSmoothenBand(
    request: MsgSetSmoothenBand
  ): Promise<MsgSetSmoothenBandResponse>;
  SetImpactBand(request: MsgSetImpactBand): Promise<MsgSetImpactBandResponse>;
  SetStaleIndexAllowance(
    request: MsgSetStaleIndexAllowance
  ): Promise<MsgSetStaleIndexAllowanceResponse>;
  UpdateTokenPriceOracle(
    request: MsgUpdateTokenPriceOracle
  ): Promise<MsgUpdateTokenPriceOracleResponse>;
  UpdateSettlementPrice(
    request: MsgUpdateSettlementPrice
  ): Promise<MsgUpdateSettlementPriceResponse>;
  RemoveTokenPrice(
    request: MsgRemoveTokenPrice
  ): Promise<MsgRemoveTokenPriceResponse>;
  /**
   * UpdateParams defines a governance operation for updating the module
   * parameters. The authority is hard-coded to the x/gov module account.
   * Since: cosmos-sdk 0.47
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SetBackfillTimeInterval = this.SetBackfillTimeInterval.bind(this);
    this.SetSmoothenBand = this.SetSmoothenBand.bind(this);
    this.SetImpactBand = this.SetImpactBand.bind(this);
    this.SetStaleIndexAllowance = this.SetStaleIndexAllowance.bind(this);
    this.UpdateTokenPriceOracle = this.UpdateTokenPriceOracle.bind(this);
    this.UpdateSettlementPrice = this.UpdateSettlementPrice.bind(this);
    this.RemoveTokenPrice = this.RemoveTokenPrice.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  SetBackfillTimeInterval(
    request: MsgSetBackfillTimeInterval
  ): Promise<MsgSetBackfillTimeIntervalResponse> {
    const data = MsgSetBackfillTimeInterval.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.pricing.Msg",
      "SetBackfillTimeInterval",
      data
    );
    return promise.then((data) =>
      MsgSetBackfillTimeIntervalResponse.decode(new _m0.Reader(data))
    );
  }

  SetSmoothenBand(
    request: MsgSetSmoothenBand
  ): Promise<MsgSetSmoothenBandResponse> {
    const data = MsgSetSmoothenBand.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.pricing.Msg",
      "SetSmoothenBand",
      data
    );
    return promise.then((data) =>
      MsgSetSmoothenBandResponse.decode(new _m0.Reader(data))
    );
  }

  SetImpactBand(request: MsgSetImpactBand): Promise<MsgSetImpactBandResponse> {
    const data = MsgSetImpactBand.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.pricing.Msg",
      "SetImpactBand",
      data
    );
    return promise.then((data) =>
      MsgSetImpactBandResponse.decode(new _m0.Reader(data))
    );
  }

  SetStaleIndexAllowance(
    request: MsgSetStaleIndexAllowance
  ): Promise<MsgSetStaleIndexAllowanceResponse> {
    const data = MsgSetStaleIndexAllowance.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.pricing.Msg",
      "SetStaleIndexAllowance",
      data
    );
    return promise.then((data) =>
      MsgSetStaleIndexAllowanceResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateTokenPriceOracle(
    request: MsgUpdateTokenPriceOracle
  ): Promise<MsgUpdateTokenPriceOracleResponse> {
    const data = MsgUpdateTokenPriceOracle.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.pricing.Msg",
      "UpdateTokenPriceOracle",
      data
    );
    return promise.then((data) =>
      MsgUpdateTokenPriceOracleResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateSettlementPrice(
    request: MsgUpdateSettlementPrice
  ): Promise<MsgUpdateSettlementPriceResponse> {
    const data = MsgUpdateSettlementPrice.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.pricing.Msg",
      "UpdateSettlementPrice",
      data
    );
    return promise.then((data) =>
      MsgUpdateSettlementPriceResponse.decode(new _m0.Reader(data))
    );
  }

  RemoveTokenPrice(
    request: MsgRemoveTokenPrice
  ): Promise<MsgRemoveTokenPriceResponse> {
    const data = MsgRemoveTokenPrice.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.pricing.Msg",
      "RemoveTokenPrice",
      data
    );
    return promise.then((data) =>
      MsgRemoveTokenPriceResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.pricing.Msg",
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
