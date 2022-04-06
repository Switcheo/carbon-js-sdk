/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { StringValue, Int64Value } from "../google/protobuf/wrappers";

export const protobufPackage = "Switcheo.carbon.oracle";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateOracle {
  creator: string;
  createOracleParams?: CreateOracleParams;
}

export interface CreateOracleParams {
  creator: string;
  id: string;
  description: string;
  minTurnoutPercentage: Long;
  maxResultAge: Long;
  securityType: string;
  resultStrategy: string;
  resolution: Long;
  spec: string;
}

export interface MsgCreateOracleResponse {
  id: string;
}

export interface MsgCreateVote {
  creator: string;
  oracleId: string;
  timestamp: Long;
  data: string;
}

export interface MsgCreateVoteResponse {}

export interface MsgUpdateOracle {
  updater: string;
  updateOracleParams?: UpdateOracleParams;
}

export interface UpdateOracleParams {
  id: string;
  description?: string;
  status?: string;
  minTurnoutPercentage?: Long;
  maxResultAge?: Long;
  securityType?: string;
  resultStrategy?: string;
  resolution?: Long;
  spec?: string;
}

export interface MsgUpdateOracleResponse {}

export interface MsgRemoveOracle {
  creator: string;
  oracleId: string;
}

export interface MsgRemoveOracleResponse {}

const baseMsgCreateOracle: object = { creator: "" };

export const MsgCreateOracle = {
  encode(
    message: MsgCreateOracle,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.createOracleParams !== undefined) {
      CreateOracleParams.encode(
        message.createOracleParams,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOracle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateOracle } as MsgCreateOracle;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.createOracleParams = CreateOracleParams.decode(
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

  fromJSON(object: any): MsgCreateOracle {
    const message = { ...baseMsgCreateOracle } as MsgCreateOracle;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.createOracleParams =
      object.createOracleParams !== undefined &&
      object.createOracleParams !== null
        ? CreateOracleParams.fromJSON(object.createOracleParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgCreateOracle): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.createOracleParams !== undefined &&
      (obj.createOracleParams = message.createOracleParams
        ? CreateOracleParams.toJSON(message.createOracleParams)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateOracle>): MsgCreateOracle {
    const message = { ...baseMsgCreateOracle } as MsgCreateOracle;
    message.creator = object.creator ?? "";
    message.createOracleParams =
      object.createOracleParams !== undefined &&
      object.createOracleParams !== null
        ? CreateOracleParams.fromPartial(object.createOracleParams)
        : undefined;
    return message;
  },
};

const baseCreateOracleParams: object = {
  creator: "",
  id: "",
  description: "",
  minTurnoutPercentage: Long.ZERO,
  maxResultAge: Long.ZERO,
  securityType: "",
  resultStrategy: "",
  resolution: Long.ZERO,
  spec: "",
};

export const CreateOracleParams = {
  encode(
    message: CreateOracleParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (!message.minTurnoutPercentage.isZero()) {
      writer.uint32(32).int64(message.minTurnoutPercentage);
    }
    if (!message.maxResultAge.isZero()) {
      writer.uint32(40).int64(message.maxResultAge);
    }
    if (message.securityType !== "") {
      writer.uint32(50).string(message.securityType);
    }
    if (message.resultStrategy !== "") {
      writer.uint32(58).string(message.resultStrategy);
    }
    if (!message.resolution.isZero()) {
      writer.uint32(64).int64(message.resolution);
    }
    if (message.spec !== "") {
      writer.uint32(74).string(message.spec);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOracleParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateOracleParams } as CreateOracleParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.minTurnoutPercentage = reader.int64() as Long;
          break;
        case 5:
          message.maxResultAge = reader.int64() as Long;
          break;
        case 6:
          message.securityType = reader.string();
          break;
        case 7:
          message.resultStrategy = reader.string();
          break;
        case 8:
          message.resolution = reader.int64() as Long;
          break;
        case 9:
          message.spec = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateOracleParams {
    const message = { ...baseCreateOracleParams } as CreateOracleParams;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.minTurnoutPercentage =
      object.minTurnoutPercentage !== undefined &&
      object.minTurnoutPercentage !== null
        ? Long.fromString(object.minTurnoutPercentage)
        : Long.ZERO;
    message.maxResultAge =
      object.maxResultAge !== undefined && object.maxResultAge !== null
        ? Long.fromString(object.maxResultAge)
        : Long.ZERO;
    message.securityType =
      object.securityType !== undefined && object.securityType !== null
        ? String(object.securityType)
        : "";
    message.resultStrategy =
      object.resultStrategy !== undefined && object.resultStrategy !== null
        ? String(object.resultStrategy)
        : "";
    message.resolution =
      object.resolution !== undefined && object.resolution !== null
        ? Long.fromString(object.resolution)
        : Long.ZERO;
    message.spec =
      object.spec !== undefined && object.spec !== null
        ? String(object.spec)
        : "";
    return message;
  },

  toJSON(message: CreateOracleParams): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.description !== undefined &&
      (obj.description = message.description);
    message.minTurnoutPercentage !== undefined &&
      (obj.minTurnoutPercentage = (
        message.minTurnoutPercentage || Long.ZERO
      ).toString());
    message.maxResultAge !== undefined &&
      (obj.maxResultAge = (message.maxResultAge || Long.ZERO).toString());
    message.securityType !== undefined &&
      (obj.securityType = message.securityType);
    message.resultStrategy !== undefined &&
      (obj.resultStrategy = message.resultStrategy);
    message.resolution !== undefined &&
      (obj.resolution = (message.resolution || Long.ZERO).toString());
    message.spec !== undefined && (obj.spec = message.spec);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateOracleParams>): CreateOracleParams {
    const message = { ...baseCreateOracleParams } as CreateOracleParams;
    message.creator = object.creator ?? "";
    message.id = object.id ?? "";
    message.description = object.description ?? "";
    message.minTurnoutPercentage =
      object.minTurnoutPercentage !== undefined &&
      object.minTurnoutPercentage !== null
        ? Long.fromValue(object.minTurnoutPercentage)
        : Long.ZERO;
    message.maxResultAge =
      object.maxResultAge !== undefined && object.maxResultAge !== null
        ? Long.fromValue(object.maxResultAge)
        : Long.ZERO;
    message.securityType = object.securityType ?? "";
    message.resultStrategy = object.resultStrategy ?? "";
    message.resolution =
      object.resolution !== undefined && object.resolution !== null
        ? Long.fromValue(object.resolution)
        : Long.ZERO;
    message.spec = object.spec ?? "";
    return message;
  },
};

const baseMsgCreateOracleResponse: object = { id: "" };

export const MsgCreateOracleResponse = {
  encode(
    message: MsgCreateOracleResponse,
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
  ): MsgCreateOracleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateOracleResponse,
    } as MsgCreateOracleResponse;
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

  fromJSON(object: any): MsgCreateOracleResponse {
    const message = {
      ...baseMsgCreateOracleResponse,
    } as MsgCreateOracleResponse;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    return message;
  },

  toJSON(message: MsgCreateOracleResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateOracleResponse>
  ): MsgCreateOracleResponse {
    const message = {
      ...baseMsgCreateOracleResponse,
    } as MsgCreateOracleResponse;
    message.id = object.id ?? "";
    return message;
  },
};

const baseMsgCreateVote: object = {
  creator: "",
  oracleId: "",
  timestamp: Long.ZERO,
  data: "",
};

export const MsgCreateVote = {
  encode(
    message: MsgCreateVote,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.oracleId !== "") {
      writer.uint32(18).string(message.oracleId);
    }
    if (!message.timestamp.isZero()) {
      writer.uint32(24).int64(message.timestamp);
    }
    if (message.data !== "") {
      writer.uint32(34).string(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateVote } as MsgCreateVote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.oracleId = reader.string();
          break;
        case 3:
          message.timestamp = reader.int64() as Long;
          break;
        case 4:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateVote {
    const message = { ...baseMsgCreateVote } as MsgCreateVote;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.oracleId =
      object.oracleId !== undefined && object.oracleId !== null
        ? String(object.oracleId)
        : "";
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Long.fromString(object.timestamp)
        : Long.ZERO;
    message.data =
      object.data !== undefined && object.data !== null
        ? String(object.data)
        : "";
    return message;
  },

  toJSON(message: MsgCreateVote): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.oracleId !== undefined && (obj.oracleId = message.oracleId);
    message.timestamp !== undefined &&
      (obj.timestamp = (message.timestamp || Long.ZERO).toString());
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateVote>): MsgCreateVote {
    const message = { ...baseMsgCreateVote } as MsgCreateVote;
    message.creator = object.creator ?? "";
    message.oracleId = object.oracleId ?? "";
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Long.fromValue(object.timestamp)
        : Long.ZERO;
    message.data = object.data ?? "";
    return message;
  },
};

const baseMsgCreateVoteResponse: object = {};

export const MsgCreateVoteResponse = {
  encode(
    _: MsgCreateVoteResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateVoteResponse } as MsgCreateVoteResponse;
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

  fromJSON(_: any): MsgCreateVoteResponse {
    const message = { ...baseMsgCreateVoteResponse } as MsgCreateVoteResponse;
    return message;
  },

  toJSON(_: MsgCreateVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateVoteResponse>): MsgCreateVoteResponse {
    const message = { ...baseMsgCreateVoteResponse } as MsgCreateVoteResponse;
    return message;
  },
};

const baseMsgUpdateOracle: object = { updater: "" };

export const MsgUpdateOracle = {
  encode(
    message: MsgUpdateOracle,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.updater !== "") {
      writer.uint32(10).string(message.updater);
    }
    if (message.updateOracleParams !== undefined) {
      UpdateOracleParams.encode(
        message.updateOracleParams,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateOracle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateOracle } as MsgUpdateOracle;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updater = reader.string();
          break;
        case 2:
          message.updateOracleParams = UpdateOracleParams.decode(
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

  fromJSON(object: any): MsgUpdateOracle {
    const message = { ...baseMsgUpdateOracle } as MsgUpdateOracle;
    message.updater =
      object.updater !== undefined && object.updater !== null
        ? String(object.updater)
        : "";
    message.updateOracleParams =
      object.updateOracleParams !== undefined &&
      object.updateOracleParams !== null
        ? UpdateOracleParams.fromJSON(object.updateOracleParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdateOracle): unknown {
    const obj: any = {};
    message.updater !== undefined && (obj.updater = message.updater);
    message.updateOracleParams !== undefined &&
      (obj.updateOracleParams = message.updateOracleParams
        ? UpdateOracleParams.toJSON(message.updateOracleParams)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateOracle>): MsgUpdateOracle {
    const message = { ...baseMsgUpdateOracle } as MsgUpdateOracle;
    message.updater = object.updater ?? "";
    message.updateOracleParams =
      object.updateOracleParams !== undefined &&
      object.updateOracleParams !== null
        ? UpdateOracleParams.fromPartial(object.updateOracleParams)
        : undefined;
    return message;
  },
};

const baseUpdateOracleParams: object = { id: "" };

export const UpdateOracleParams = {
  encode(
    message: UpdateOracleParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.description !== undefined) {
      StringValue.encode(
        { value: message.description! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.status !== undefined) {
      StringValue.encode(
        { value: message.status! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.minTurnoutPercentage !== undefined) {
      Int64Value.encode(
        { value: message.minTurnoutPercentage! },
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.maxResultAge !== undefined) {
      Int64Value.encode(
        { value: message.maxResultAge! },
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.securityType !== undefined) {
      StringValue.encode(
        { value: message.securityType! },
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.resultStrategy !== undefined) {
      StringValue.encode(
        { value: message.resultStrategy! },
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.resolution !== undefined) {
      Int64Value.encode(
        { value: message.resolution! },
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.spec !== undefined) {
      StringValue.encode(
        { value: message.spec! },
        writer.uint32(74).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOracleParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateOracleParams } as UpdateOracleParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.description = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 3:
          message.status = StringValue.decode(reader, reader.uint32()).value;
          break;
        case 4:
          message.minTurnoutPercentage = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 5:
          message.maxResultAge = Int64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 6:
          message.securityType = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 7:
          message.resultStrategy = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 8:
          message.resolution = Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 9:
          message.spec = StringValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateOracleParams {
    const message = { ...baseUpdateOracleParams } as UpdateOracleParams;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? String(object.status)
        : undefined;
    message.minTurnoutPercentage =
      object.minTurnoutPercentage !== undefined &&
      object.minTurnoutPercentage !== null
        ? Long.fromValue(object.minTurnoutPercentage)
        : undefined;
    message.maxResultAge =
      object.maxResultAge !== undefined && object.maxResultAge !== null
        ? Long.fromValue(object.maxResultAge)
        : undefined;
    message.securityType =
      object.securityType !== undefined && object.securityType !== null
        ? String(object.securityType)
        : undefined;
    message.resultStrategy =
      object.resultStrategy !== undefined && object.resultStrategy !== null
        ? String(object.resultStrategy)
        : undefined;
    message.resolution =
      object.resolution !== undefined && object.resolution !== null
        ? Long.fromValue(object.resolution)
        : undefined;
    message.spec =
      object.spec !== undefined && object.spec !== null
        ? String(object.spec)
        : undefined;
    return message;
  },

  toJSON(message: UpdateOracleParams): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.description !== undefined &&
      (obj.description = message.description);
    message.status !== undefined && (obj.status = message.status);
    message.minTurnoutPercentage !== undefined &&
      (obj.minTurnoutPercentage = message.minTurnoutPercentage);
    message.maxResultAge !== undefined &&
      (obj.maxResultAge = message.maxResultAge);
    message.securityType !== undefined &&
      (obj.securityType = message.securityType);
    message.resultStrategy !== undefined &&
      (obj.resultStrategy = message.resultStrategy);
    message.resolution !== undefined && (obj.resolution = message.resolution);
    message.spec !== undefined && (obj.spec = message.spec);
    return obj;
  },

  fromPartial(object: DeepPartial<UpdateOracleParams>): UpdateOracleParams {
    const message = { ...baseUpdateOracleParams } as UpdateOracleParams;
    message.id = object.id ?? "";
    message.description = object.description ?? undefined;
    message.status = object.status ?? undefined;
    message.minTurnoutPercentage =
      object.minTurnoutPercentage !== undefined &&
      object.minTurnoutPercentage !== null
        ? Long.fromValue(object.minTurnoutPercentage)
        : undefined;
    message.maxResultAge =
      object.maxResultAge !== undefined && object.maxResultAge !== null
        ? Long.fromValue(object.maxResultAge)
        : undefined;
    message.securityType = object.securityType ?? undefined;
    message.resultStrategy = object.resultStrategy ?? undefined;
    message.resolution =
      object.resolution !== undefined && object.resolution !== null
        ? Long.fromValue(object.resolution)
        : undefined;
    message.spec = object.spec ?? undefined;
    return message;
  },
};

const baseMsgUpdateOracleResponse: object = {};

export const MsgUpdateOracleResponse = {
  encode(
    _: MsgUpdateOracleResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateOracleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateOracleResponse,
    } as MsgUpdateOracleResponse;
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

  fromJSON(_: any): MsgUpdateOracleResponse {
    const message = {
      ...baseMsgUpdateOracleResponse,
    } as MsgUpdateOracleResponse;
    return message;
  },

  toJSON(_: MsgUpdateOracleResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateOracleResponse>
  ): MsgUpdateOracleResponse {
    const message = {
      ...baseMsgUpdateOracleResponse,
    } as MsgUpdateOracleResponse;
    return message;
  },
};

const baseMsgRemoveOracle: object = { creator: "", oracleId: "" };

export const MsgRemoveOracle = {
  encode(
    message: MsgRemoveOracle,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.oracleId !== "") {
      writer.uint32(18).string(message.oracleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveOracle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRemoveOracle } as MsgRemoveOracle;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.oracleId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveOracle {
    const message = { ...baseMsgRemoveOracle } as MsgRemoveOracle;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.oracleId =
      object.oracleId !== undefined && object.oracleId !== null
        ? String(object.oracleId)
        : "";
    return message;
  },

  toJSON(message: MsgRemoveOracle): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.oracleId !== undefined && (obj.oracleId = message.oracleId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRemoveOracle>): MsgRemoveOracle {
    const message = { ...baseMsgRemoveOracle } as MsgRemoveOracle;
    message.creator = object.creator ?? "";
    message.oracleId = object.oracleId ?? "";
    return message;
  },
};

const baseMsgRemoveOracleResponse: object = {};

export const MsgRemoveOracleResponse = {
  encode(
    _: MsgRemoveOracleResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemoveOracleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRemoveOracleResponse,
    } as MsgRemoveOracleResponse;
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

  fromJSON(_: any): MsgRemoveOracleResponse {
    const message = {
      ...baseMsgRemoveOracleResponse,
    } as MsgRemoveOracleResponse;
    return message;
  },

  toJSON(_: MsgRemoveOracleResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRemoveOracleResponse>
  ): MsgRemoveOracleResponse {
    const message = {
      ...baseMsgRemoveOracleResponse,
    } as MsgRemoveOracleResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateOracle(request: MsgCreateOracle): Promise<MsgCreateOracleResponse>;
  CreateVote(request: MsgCreateVote): Promise<MsgCreateVoteResponse>;
  UpdateOracle(request: MsgUpdateOracle): Promise<MsgUpdateOracleResponse>;
  RemoveOracle(request: MsgRemoveOracle): Promise<MsgRemoveOracleResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateOracle = this.CreateOracle.bind(this);
    this.CreateVote = this.CreateVote.bind(this);
    this.UpdateOracle = this.UpdateOracle.bind(this);
    this.RemoveOracle = this.RemoveOracle.bind(this);
  }
  CreateOracle(request: MsgCreateOracle): Promise<MsgCreateOracleResponse> {
    const data = MsgCreateOracle.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.oracle.Msg",
      "CreateOracle",
      data
    );
    return promise.then((data) =>
      MsgCreateOracleResponse.decode(new _m0.Reader(data))
    );
  }

  CreateVote(request: MsgCreateVote): Promise<MsgCreateVoteResponse> {
    const data = MsgCreateVote.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.oracle.Msg",
      "CreateVote",
      data
    );
    return promise.then((data) =>
      MsgCreateVoteResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateOracle(request: MsgUpdateOracle): Promise<MsgUpdateOracleResponse> {
    const data = MsgUpdateOracle.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.oracle.Msg",
      "UpdateOracle",
      data
    );
    return promise.then((data) =>
      MsgUpdateOracleResponse.decode(new _m0.Reader(data))
    );
  }

  RemoveOracle(request: MsgRemoveOracle): Promise<MsgRemoveOracleResponse> {
    const data = MsgRemoveOracle.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.oracle.Msg",
      "RemoveOracle",
      data
    );
    return promise.then((data) =>
      MsgRemoveOracleResponse.decode(new _m0.Reader(data))
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
