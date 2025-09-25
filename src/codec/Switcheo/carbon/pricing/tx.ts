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

export interface MsgSetBackfillTimeIntervalResponse {
}

export interface MsgSetSmoothenBand {
  creator: string;
  smoothenBand: number;
}

export interface MsgSetSmoothenBandResponse {
}

export interface MsgSetImpactBand {
  creator: string;
  impactBand: number;
}

export interface MsgSetImpactBandResponse {
}

export interface MsgSetStaleIndexAllowance {
  creator: string;
  staleIndexAllowance?: Duration;
}

export interface MsgSetStaleIndexAllowanceResponse {
}

export interface MsgUpdateTokenPriceOracle {
  creator: string;
  denom: string;
  oracleId: string;
}

export interface MsgUpdateTokenPriceOracleResponse {
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

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgUpdateSettlementPrice {
  authority: string;
  marketId: string;
  settlementPrice: string;
}

export interface MsgUpdateSettlementPriceResponse {
}

export interface MsgRemoveTokenPrice {
  /** authority is the address of the governance account. */
  authority: string;
  denom: string;
}

export interface MsgRemoveTokenPriceResponse {
  denom: string;
}

function createBaseMsgSetBackfillTimeInterval(): MsgSetBackfillTimeInterval {
  return { creator: "", backfillTimeInterval: undefined };
}

export const MsgSetBackfillTimeInterval = {
  encode(message: MsgSetBackfillTimeInterval, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.backfillTimeInterval !== undefined) {
      Duration.encode(message.backfillTimeInterval, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetBackfillTimeInterval {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetBackfillTimeInterval();
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

          message.backfillTimeInterval = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetBackfillTimeInterval {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      backfillTimeInterval: isSet(object.backfillTimeInterval)
        ? Duration.fromJSON(object.backfillTimeInterval)
        : undefined,
    };
  },

  toJSON(message: MsgSetBackfillTimeInterval): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.backfillTimeInterval !== undefined && (obj.backfillTimeInterval = message.backfillTimeInterval
      ? Duration.toJSON(message.backfillTimeInterval)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgSetBackfillTimeInterval>): MsgSetBackfillTimeInterval {
    return MsgSetBackfillTimeInterval.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSetBackfillTimeInterval>): MsgSetBackfillTimeInterval {
    const message = createBaseMsgSetBackfillTimeInterval();
    message.creator = object.creator ?? "";
    message.backfillTimeInterval = (object.backfillTimeInterval !== undefined && object.backfillTimeInterval !== null)
      ? Duration.fromPartial(object.backfillTimeInterval)
      : undefined;
    return message;
  },
};

function createBaseMsgSetBackfillTimeIntervalResponse(): MsgSetBackfillTimeIntervalResponse {
  return {};
}

export const MsgSetBackfillTimeIntervalResponse = {
  encode(_: MsgSetBackfillTimeIntervalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetBackfillTimeIntervalResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetBackfillTimeIntervalResponse();
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

  fromJSON(_: any): MsgSetBackfillTimeIntervalResponse {
    return {};
  },

  toJSON(_: MsgSetBackfillTimeIntervalResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSetBackfillTimeIntervalResponse>): MsgSetBackfillTimeIntervalResponse {
    return MsgSetBackfillTimeIntervalResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgSetBackfillTimeIntervalResponse>): MsgSetBackfillTimeIntervalResponse {
    const message = createBaseMsgSetBackfillTimeIntervalResponse();
    return message;
  },
};

function createBaseMsgSetSmoothenBand(): MsgSetSmoothenBand {
  return { creator: "", smoothenBand: 0 };
}

export const MsgSetSmoothenBand = {
  encode(message: MsgSetSmoothenBand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.smoothenBand !== 0) {
      writer.uint32(16).uint32(message.smoothenBand);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetSmoothenBand {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetSmoothenBand();
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
          if (tag !== 16) {
            break;
          }

          message.smoothenBand = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetSmoothenBand {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      smoothenBand: isSet(object.smoothenBand) ? Number(object.smoothenBand) : 0,
    };
  },

  toJSON(message: MsgSetSmoothenBand): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.smoothenBand !== undefined && (obj.smoothenBand = Math.round(message.smoothenBand));
    return obj;
  },

  create(base?: DeepPartial<MsgSetSmoothenBand>): MsgSetSmoothenBand {
    return MsgSetSmoothenBand.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSetSmoothenBand>): MsgSetSmoothenBand {
    const message = createBaseMsgSetSmoothenBand();
    message.creator = object.creator ?? "";
    message.smoothenBand = object.smoothenBand ?? 0;
    return message;
  },
};

function createBaseMsgSetSmoothenBandResponse(): MsgSetSmoothenBandResponse {
  return {};
}

export const MsgSetSmoothenBandResponse = {
  encode(_: MsgSetSmoothenBandResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetSmoothenBandResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetSmoothenBandResponse();
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

  fromJSON(_: any): MsgSetSmoothenBandResponse {
    return {};
  },

  toJSON(_: MsgSetSmoothenBandResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSetSmoothenBandResponse>): MsgSetSmoothenBandResponse {
    return MsgSetSmoothenBandResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgSetSmoothenBandResponse>): MsgSetSmoothenBandResponse {
    const message = createBaseMsgSetSmoothenBandResponse();
    return message;
  },
};

function createBaseMsgSetImpactBand(): MsgSetImpactBand {
  return { creator: "", impactBand: 0 };
}

export const MsgSetImpactBand = {
  encode(message: MsgSetImpactBand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.impactBand !== 0) {
      writer.uint32(16).uint32(message.impactBand);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetImpactBand {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetImpactBand();
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
          if (tag !== 16) {
            break;
          }

          message.impactBand = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetImpactBand {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      impactBand: isSet(object.impactBand) ? Number(object.impactBand) : 0,
    };
  },

  toJSON(message: MsgSetImpactBand): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.impactBand !== undefined && (obj.impactBand = Math.round(message.impactBand));
    return obj;
  },

  create(base?: DeepPartial<MsgSetImpactBand>): MsgSetImpactBand {
    return MsgSetImpactBand.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSetImpactBand>): MsgSetImpactBand {
    const message = createBaseMsgSetImpactBand();
    message.creator = object.creator ?? "";
    message.impactBand = object.impactBand ?? 0;
    return message;
  },
};

function createBaseMsgSetImpactBandResponse(): MsgSetImpactBandResponse {
  return {};
}

export const MsgSetImpactBandResponse = {
  encode(_: MsgSetImpactBandResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetImpactBandResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetImpactBandResponse();
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

  fromJSON(_: any): MsgSetImpactBandResponse {
    return {};
  },

  toJSON(_: MsgSetImpactBandResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSetImpactBandResponse>): MsgSetImpactBandResponse {
    return MsgSetImpactBandResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgSetImpactBandResponse>): MsgSetImpactBandResponse {
    const message = createBaseMsgSetImpactBandResponse();
    return message;
  },
};

function createBaseMsgSetStaleIndexAllowance(): MsgSetStaleIndexAllowance {
  return { creator: "", staleIndexAllowance: undefined };
}

export const MsgSetStaleIndexAllowance = {
  encode(message: MsgSetStaleIndexAllowance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.staleIndexAllowance !== undefined) {
      Duration.encode(message.staleIndexAllowance, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetStaleIndexAllowance {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetStaleIndexAllowance();
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

          message.staleIndexAllowance = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetStaleIndexAllowance {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      staleIndexAllowance: isSet(object.staleIndexAllowance)
        ? Duration.fromJSON(object.staleIndexAllowance)
        : undefined,
    };
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

  create(base?: DeepPartial<MsgSetStaleIndexAllowance>): MsgSetStaleIndexAllowance {
    return MsgSetStaleIndexAllowance.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSetStaleIndexAllowance>): MsgSetStaleIndexAllowance {
    const message = createBaseMsgSetStaleIndexAllowance();
    message.creator = object.creator ?? "";
    message.staleIndexAllowance = (object.staleIndexAllowance !== undefined && object.staleIndexAllowance !== null)
      ? Duration.fromPartial(object.staleIndexAllowance)
      : undefined;
    return message;
  },
};

function createBaseMsgSetStaleIndexAllowanceResponse(): MsgSetStaleIndexAllowanceResponse {
  return {};
}

export const MsgSetStaleIndexAllowanceResponse = {
  encode(_: MsgSetStaleIndexAllowanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetStaleIndexAllowanceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetStaleIndexAllowanceResponse();
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

  fromJSON(_: any): MsgSetStaleIndexAllowanceResponse {
    return {};
  },

  toJSON(_: MsgSetStaleIndexAllowanceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSetStaleIndexAllowanceResponse>): MsgSetStaleIndexAllowanceResponse {
    return MsgSetStaleIndexAllowanceResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgSetStaleIndexAllowanceResponse>): MsgSetStaleIndexAllowanceResponse {
    const message = createBaseMsgSetStaleIndexAllowanceResponse();
    return message;
  },
};

function createBaseMsgUpdateTokenPriceOracle(): MsgUpdateTokenPriceOracle {
  return { creator: "", denom: "", oracleId: "" };
}

export const MsgUpdateTokenPriceOracle = {
  encode(message: MsgUpdateTokenPriceOracle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateTokenPriceOracle {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateTokenPriceOracle();
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

          message.denom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): MsgUpdateTokenPriceOracle {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      oracleId: isSet(object.oracleId) ? String(object.oracleId) : "",
    };
  },

  toJSON(message: MsgUpdateTokenPriceOracle): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.oracleId !== undefined && (obj.oracleId = message.oracleId);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateTokenPriceOracle>): MsgUpdateTokenPriceOracle {
    return MsgUpdateTokenPriceOracle.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateTokenPriceOracle>): MsgUpdateTokenPriceOracle {
    const message = createBaseMsgUpdateTokenPriceOracle();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.oracleId = object.oracleId ?? "";
    return message;
  },
};

function createBaseMsgUpdateTokenPriceOracleResponse(): MsgUpdateTokenPriceOracleResponse {
  return {};
}

export const MsgUpdateTokenPriceOracleResponse = {
  encode(_: MsgUpdateTokenPriceOracleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateTokenPriceOracleResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateTokenPriceOracleResponse();
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

  fromJSON(_: any): MsgUpdateTokenPriceOracleResponse {
    return {};
  },

  toJSON(_: MsgUpdateTokenPriceOracleResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateTokenPriceOracleResponse>): MsgUpdateTokenPriceOracleResponse {
    return MsgUpdateTokenPriceOracleResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdateTokenPriceOracleResponse>): MsgUpdateTokenPriceOracleResponse {
    const message = createBaseMsgUpdateTokenPriceOracleResponse();
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

function createBaseMsgUpdateSettlementPrice(): MsgUpdateSettlementPrice {
  return { authority: "", marketId: "", settlementPrice: "" };
}

export const MsgUpdateSettlementPrice = {
  encode(message: MsgUpdateSettlementPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSettlementPrice {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSettlementPrice();
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

          message.settlementPrice = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateSettlementPrice {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      settlementPrice: isSet(object.settlementPrice) ? String(object.settlementPrice) : "",
    };
  },

  toJSON(message: MsgUpdateSettlementPrice): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.settlementPrice !== undefined && (obj.settlementPrice = message.settlementPrice);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateSettlementPrice>): MsgUpdateSettlementPrice {
    return MsgUpdateSettlementPrice.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateSettlementPrice>): MsgUpdateSettlementPrice {
    const message = createBaseMsgUpdateSettlementPrice();
    message.authority = object.authority ?? "";
    message.marketId = object.marketId ?? "";
    message.settlementPrice = object.settlementPrice ?? "";
    return message;
  },
};

function createBaseMsgUpdateSettlementPriceResponse(): MsgUpdateSettlementPriceResponse {
  return {};
}

export const MsgUpdateSettlementPriceResponse = {
  encode(_: MsgUpdateSettlementPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSettlementPriceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSettlementPriceResponse();
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

  fromJSON(_: any): MsgUpdateSettlementPriceResponse {
    return {};
  },

  toJSON(_: MsgUpdateSettlementPriceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateSettlementPriceResponse>): MsgUpdateSettlementPriceResponse {
    return MsgUpdateSettlementPriceResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdateSettlementPriceResponse>): MsgUpdateSettlementPriceResponse {
    const message = createBaseMsgUpdateSettlementPriceResponse();
    return message;
  },
};

function createBaseMsgRemoveTokenPrice(): MsgRemoveTokenPrice {
  return { authority: "", denom: "" };
}

export const MsgRemoveTokenPrice = {
  encode(message: MsgRemoveTokenPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveTokenPrice {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveTokenPrice();
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

          message.denom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveTokenPrice {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: MsgRemoveTokenPrice): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveTokenPrice>): MsgRemoveTokenPrice {
    return MsgRemoveTokenPrice.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRemoveTokenPrice>): MsgRemoveTokenPrice {
    const message = createBaseMsgRemoveTokenPrice();
    message.authority = object.authority ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseMsgRemoveTokenPriceResponse(): MsgRemoveTokenPriceResponse {
  return { denom: "" };
}

export const MsgRemoveTokenPriceResponse = {
  encode(message: MsgRemoveTokenPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveTokenPriceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveTokenPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveTokenPriceResponse {
    return { denom: isSet(object.denom) ? String(object.denom) : "" };
  },

  toJSON(message: MsgRemoveTokenPriceResponse): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveTokenPriceResponse>): MsgRemoveTokenPriceResponse {
    return MsgRemoveTokenPriceResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRemoveTokenPriceResponse>): MsgRemoveTokenPriceResponse {
    const message = createBaseMsgRemoveTokenPriceResponse();
    message.denom = object.denom ?? "";
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SetBackfillTimeInterval(request: MsgSetBackfillTimeInterval): Promise<MsgSetBackfillTimeIntervalResponse>;
  SetSmoothenBand(request: MsgSetSmoothenBand): Promise<MsgSetSmoothenBandResponse>;
  SetImpactBand(request: MsgSetImpactBand): Promise<MsgSetImpactBandResponse>;
  SetStaleIndexAllowance(request: MsgSetStaleIndexAllowance): Promise<MsgSetStaleIndexAllowanceResponse>;
  UpdateTokenPriceOracle(request: MsgUpdateTokenPriceOracle): Promise<MsgUpdateTokenPriceOracleResponse>;
  UpdateSettlementPrice(request: MsgUpdateSettlementPrice): Promise<MsgUpdateSettlementPriceResponse>;
  RemoveTokenPrice(request: MsgRemoveTokenPrice): Promise<MsgRemoveTokenPriceResponse>;
  /**
   * UpdateParams defines a governance operation for updating the module
   * parameters. The authority is hard-coded to the x/gov module account.
   * Since: cosmos-sdk 0.47
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.pricing.Msg";
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
  SetBackfillTimeInterval(request: MsgSetBackfillTimeInterval): Promise<MsgSetBackfillTimeIntervalResponse> {
    const data = MsgSetBackfillTimeInterval.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetBackfillTimeInterval", data);
    return promise.then((data) => MsgSetBackfillTimeIntervalResponse.decode(_m0.Reader.create(data)));
  }

  SetSmoothenBand(request: MsgSetSmoothenBand): Promise<MsgSetSmoothenBandResponse> {
    const data = MsgSetSmoothenBand.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetSmoothenBand", data);
    return promise.then((data) => MsgSetSmoothenBandResponse.decode(_m0.Reader.create(data)));
  }

  SetImpactBand(request: MsgSetImpactBand): Promise<MsgSetImpactBandResponse> {
    const data = MsgSetImpactBand.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetImpactBand", data);
    return promise.then((data) => MsgSetImpactBandResponse.decode(_m0.Reader.create(data)));
  }

  SetStaleIndexAllowance(request: MsgSetStaleIndexAllowance): Promise<MsgSetStaleIndexAllowanceResponse> {
    const data = MsgSetStaleIndexAllowance.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetStaleIndexAllowance", data);
    return promise.then((data) => MsgSetStaleIndexAllowanceResponse.decode(_m0.Reader.create(data)));
  }

  UpdateTokenPriceOracle(request: MsgUpdateTokenPriceOracle): Promise<MsgUpdateTokenPriceOracleResponse> {
    const data = MsgUpdateTokenPriceOracle.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateTokenPriceOracle", data);
    return promise.then((data) => MsgUpdateTokenPriceOracleResponse.decode(_m0.Reader.create(data)));
  }

  UpdateSettlementPrice(request: MsgUpdateSettlementPrice): Promise<MsgUpdateSettlementPriceResponse> {
    const data = MsgUpdateSettlementPrice.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateSettlementPrice", data);
    return promise.then((data) => MsgUpdateSettlementPriceResponse.decode(_m0.Reader.create(data)));
  }

  RemoveTokenPrice(request: MsgRemoveTokenPrice): Promise<MsgRemoveTokenPriceResponse> {
    const data = MsgRemoveTokenPrice.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoveTokenPrice", data);
    return promise.then((data) => MsgRemoveTokenPriceResponse.decode(_m0.Reader.create(data)));
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
