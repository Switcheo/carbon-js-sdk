/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ParamsToUpdate } from "./params";
import { StringValue, Int64Value } from "../../../google/protobuf/wrappers";

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

export interface MsgSetOracleSlashEnabled {
  creator: string;
  enabled: boolean;
}

export interface MsgSetOracleSlashEnabledResponse {}

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

export interface MsgUpdateOracleContract {
  creator: string;
  oracleId: string;
  contractAddress: string;
}

export interface MsgUpdateOracleContractResponse {}

export interface MsgDeployOracleContract {
  creator: string;
  oracleId: string;
}

export interface MsgDeployOracleContractResponse {}

export interface ValidatorSignature {
  /** used to be named "validator", changed to "pub_key" */
  pubKey: Uint8Array;
  /** from 2.46.0 onwards */
  validatorIndex: number;
  signature: Uint8Array;
  signedTimestamp: Long;
}

export interface VotesForOracle {
  /** stored as the oracle index position to save space, */
  oracleIndex: number;
  /** convert back to string during processing */
  votesForData: VotesForData[];
}

export interface VotesForData {
  data: string;
  votesForTimestamps: VotesForTimestamp[];
}

export interface VotesForTimestamp {
  timestamp: Long;
  validatorIndexes: number[];
}

export interface MsgCreateResult {
  /** proposer is the address of the block proposer */
  proposer: string;
  validatorSignatures: ValidatorSignature[];
  votesForOracles: VotesForOracle[];
}

export interface MsgCreateResultResponse {}

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

const baseMsgSetOracleSlashEnabled: object = { creator: "", enabled: false };

export const MsgSetOracleSlashEnabled = {
  encode(
    message: MsgSetOracleSlashEnabled,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetOracleSlashEnabled {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetOracleSlashEnabled,
    } as MsgSetOracleSlashEnabled;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.enabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetOracleSlashEnabled {
    const message = {
      ...baseMsgSetOracleSlashEnabled,
    } as MsgSetOracleSlashEnabled;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.enabled =
      object.enabled !== undefined && object.enabled !== null
        ? Boolean(object.enabled)
        : false;
    return message;
  },

  toJSON(message: MsgSetOracleSlashEnabled): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetOracleSlashEnabled>
  ): MsgSetOracleSlashEnabled {
    const message = {
      ...baseMsgSetOracleSlashEnabled,
    } as MsgSetOracleSlashEnabled;
    message.creator = object.creator ?? "";
    message.enabled = object.enabled ?? false;
    return message;
  },
};

const baseMsgSetOracleSlashEnabledResponse: object = {};

export const MsgSetOracleSlashEnabledResponse = {
  encode(
    _: MsgSetOracleSlashEnabledResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetOracleSlashEnabledResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetOracleSlashEnabledResponse,
    } as MsgSetOracleSlashEnabledResponse;
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

  fromJSON(_: any): MsgSetOracleSlashEnabledResponse {
    const message = {
      ...baseMsgSetOracleSlashEnabledResponse,
    } as MsgSetOracleSlashEnabledResponse;
    return message;
  },

  toJSON(_: MsgSetOracleSlashEnabledResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetOracleSlashEnabledResponse>
  ): MsgSetOracleSlashEnabledResponse {
    const message = {
      ...baseMsgSetOracleSlashEnabledResponse,
    } as MsgSetOracleSlashEnabledResponse;
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

const baseMsgUpdateOracleContract: object = {
  creator: "",
  oracleId: "",
  contractAddress: "",
};

export const MsgUpdateOracleContract = {
  encode(
    message: MsgUpdateOracleContract,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.oracleId !== "") {
      writer.uint32(18).string(message.oracleId);
    }
    if (message.contractAddress !== "") {
      writer.uint32(26).string(message.contractAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateOracleContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateOracleContract,
    } as MsgUpdateOracleContract;
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
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateOracleContract {
    const message = {
      ...baseMsgUpdateOracleContract,
    } as MsgUpdateOracleContract;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.oracleId =
      object.oracleId !== undefined && object.oracleId !== null
        ? String(object.oracleId)
        : "";
    message.contractAddress =
      object.contractAddress !== undefined && object.contractAddress !== null
        ? String(object.contractAddress)
        : "";
    return message;
  },

  toJSON(message: MsgUpdateOracleContract): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.oracleId !== undefined && (obj.oracleId = message.oracleId);
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateOracleContract>
  ): MsgUpdateOracleContract {
    const message = {
      ...baseMsgUpdateOracleContract,
    } as MsgUpdateOracleContract;
    message.creator = object.creator ?? "";
    message.oracleId = object.oracleId ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
};

const baseMsgUpdateOracleContractResponse: object = {};

export const MsgUpdateOracleContractResponse = {
  encode(
    _: MsgUpdateOracleContractResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateOracleContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateOracleContractResponse,
    } as MsgUpdateOracleContractResponse;
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

  fromJSON(_: any): MsgUpdateOracleContractResponse {
    const message = {
      ...baseMsgUpdateOracleContractResponse,
    } as MsgUpdateOracleContractResponse;
    return message;
  },

  toJSON(_: MsgUpdateOracleContractResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateOracleContractResponse>
  ): MsgUpdateOracleContractResponse {
    const message = {
      ...baseMsgUpdateOracleContractResponse,
    } as MsgUpdateOracleContractResponse;
    return message;
  },
};

const baseMsgDeployOracleContract: object = { creator: "", oracleId: "" };

export const MsgDeployOracleContract = {
  encode(
    message: MsgDeployOracleContract,
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeployOracleContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeployOracleContract,
    } as MsgDeployOracleContract;
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

  fromJSON(object: any): MsgDeployOracleContract {
    const message = {
      ...baseMsgDeployOracleContract,
    } as MsgDeployOracleContract;
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

  toJSON(message: MsgDeployOracleContract): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.oracleId !== undefined && (obj.oracleId = message.oracleId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeployOracleContract>
  ): MsgDeployOracleContract {
    const message = {
      ...baseMsgDeployOracleContract,
    } as MsgDeployOracleContract;
    message.creator = object.creator ?? "";
    message.oracleId = object.oracleId ?? "";
    return message;
  },
};

const baseMsgDeployOracleContractResponse: object = {};

export const MsgDeployOracleContractResponse = {
  encode(
    _: MsgDeployOracleContractResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeployOracleContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeployOracleContractResponse,
    } as MsgDeployOracleContractResponse;
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

  fromJSON(_: any): MsgDeployOracleContractResponse {
    const message = {
      ...baseMsgDeployOracleContractResponse,
    } as MsgDeployOracleContractResponse;
    return message;
  },

  toJSON(_: MsgDeployOracleContractResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeployOracleContractResponse>
  ): MsgDeployOracleContractResponse {
    const message = {
      ...baseMsgDeployOracleContractResponse,
    } as MsgDeployOracleContractResponse;
    return message;
  },
};

const baseValidatorSignature: object = {
  validatorIndex: 0,
  signedTimestamp: Long.ZERO,
};

export const ValidatorSignature = {
  encode(
    message: ValidatorSignature,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pubKey.length !== 0) {
      writer.uint32(10).bytes(message.pubKey);
    }
    if (message.validatorIndex !== 0) {
      writer.uint32(16).int32(message.validatorIndex);
    }
    if (message.signature.length !== 0) {
      writer.uint32(26).bytes(message.signature);
    }
    if (!message.signedTimestamp.isZero()) {
      writer.uint32(32).int64(message.signedTimestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSignature {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseValidatorSignature } as ValidatorSignature;
    message.pubKey = new Uint8Array();
    message.signature = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKey = reader.bytes();
          break;
        case 2:
          message.validatorIndex = reader.int32();
          break;
        case 3:
          message.signature = reader.bytes();
          break;
        case 4:
          message.signedTimestamp = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorSignature {
    const message = { ...baseValidatorSignature } as ValidatorSignature;
    message.pubKey =
      object.pubKey !== undefined && object.pubKey !== null
        ? bytesFromBase64(object.pubKey)
        : new Uint8Array();
    message.validatorIndex =
      object.validatorIndex !== undefined && object.validatorIndex !== null
        ? Number(object.validatorIndex)
        : 0;
    message.signature =
      object.signature !== undefined && object.signature !== null
        ? bytesFromBase64(object.signature)
        : new Uint8Array();
    message.signedTimestamp =
      object.signedTimestamp !== undefined && object.signedTimestamp !== null
        ? Long.fromString(object.signedTimestamp)
        : Long.ZERO;
    return message;
  },

  toJSON(message: ValidatorSignature): unknown {
    const obj: any = {};
    message.pubKey !== undefined &&
      (obj.pubKey = base64FromBytes(
        message.pubKey !== undefined ? message.pubKey : new Uint8Array()
      ));
    message.validatorIndex !== undefined &&
      (obj.validatorIndex = message.validatorIndex);
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : new Uint8Array()
      ));
    message.signedTimestamp !== undefined &&
      (obj.signedTimestamp = (message.signedTimestamp || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<ValidatorSignature>): ValidatorSignature {
    const message = { ...baseValidatorSignature } as ValidatorSignature;
    message.pubKey = object.pubKey ?? new Uint8Array();
    message.validatorIndex = object.validatorIndex ?? 0;
    message.signature = object.signature ?? new Uint8Array();
    message.signedTimestamp =
      object.signedTimestamp !== undefined && object.signedTimestamp !== null
        ? Long.fromValue(object.signedTimestamp)
        : Long.ZERO;
    return message;
  },
};

const baseVotesForOracle: object = { oracleIndex: 0 };

export const VotesForOracle = {
  encode(
    message: VotesForOracle,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.oracleIndex !== 0) {
      writer.uint32(8).int32(message.oracleIndex);
    }
    for (const v of message.votesForData) {
      VotesForData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VotesForOracle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVotesForOracle } as VotesForOracle;
    message.votesForData = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleIndex = reader.int32();
          break;
        case 2:
          message.votesForData.push(
            VotesForData.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VotesForOracle {
    const message = { ...baseVotesForOracle } as VotesForOracle;
    message.oracleIndex =
      object.oracleIndex !== undefined && object.oracleIndex !== null
        ? Number(object.oracleIndex)
        : 0;
    message.votesForData = (object.votesForData ?? []).map((e: any) =>
      VotesForData.fromJSON(e)
    );
    return message;
  },

  toJSON(message: VotesForOracle): unknown {
    const obj: any = {};
    message.oracleIndex !== undefined &&
      (obj.oracleIndex = message.oracleIndex);
    if (message.votesForData) {
      obj.votesForData = message.votesForData.map((e) =>
        e ? VotesForData.toJSON(e) : undefined
      );
    } else {
      obj.votesForData = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<VotesForOracle>): VotesForOracle {
    const message = { ...baseVotesForOracle } as VotesForOracle;
    message.oracleIndex = object.oracleIndex ?? 0;
    message.votesForData = (object.votesForData ?? []).map((e) =>
      VotesForData.fromPartial(e)
    );
    return message;
  },
};

const baseVotesForData: object = { data: "" };

export const VotesForData = {
  encode(
    message: VotesForData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    for (const v of message.votesForTimestamps) {
      VotesForTimestamp.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VotesForData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVotesForData } as VotesForData;
    message.votesForTimestamps = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.string();
          break;
        case 2:
          message.votesForTimestamps.push(
            VotesForTimestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VotesForData {
    const message = { ...baseVotesForData } as VotesForData;
    message.data =
      object.data !== undefined && object.data !== null
        ? String(object.data)
        : "";
    message.votesForTimestamps = (object.votesForTimestamps ?? []).map(
      (e: any) => VotesForTimestamp.fromJSON(e)
    );
    return message;
  },

  toJSON(message: VotesForData): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = message.data);
    if (message.votesForTimestamps) {
      obj.votesForTimestamps = message.votesForTimestamps.map((e) =>
        e ? VotesForTimestamp.toJSON(e) : undefined
      );
    } else {
      obj.votesForTimestamps = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<VotesForData>): VotesForData {
    const message = { ...baseVotesForData } as VotesForData;
    message.data = object.data ?? "";
    message.votesForTimestamps = (object.votesForTimestamps ?? []).map((e) =>
      VotesForTimestamp.fromPartial(e)
    );
    return message;
  },
};

const baseVotesForTimestamp: object = {
  timestamp: Long.ZERO,
  validatorIndexes: 0,
};

export const VotesForTimestamp = {
  encode(
    message: VotesForTimestamp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.timestamp.isZero()) {
      writer.uint32(8).int64(message.timestamp);
    }
    writer.uint32(18).fork();
    for (const v of message.validatorIndexes) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VotesForTimestamp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVotesForTimestamp } as VotesForTimestamp;
    message.validatorIndexes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = reader.int64() as Long;
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.validatorIndexes.push(reader.int32());
            }
          } else {
            message.validatorIndexes.push(reader.int32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VotesForTimestamp {
    const message = { ...baseVotesForTimestamp } as VotesForTimestamp;
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Long.fromString(object.timestamp)
        : Long.ZERO;
    message.validatorIndexes = (object.validatorIndexes ?? []).map((e: any) =>
      Number(e)
    );
    return message;
  },

  toJSON(message: VotesForTimestamp): unknown {
    const obj: any = {};
    message.timestamp !== undefined &&
      (obj.timestamp = (message.timestamp || Long.ZERO).toString());
    if (message.validatorIndexes) {
      obj.validatorIndexes = message.validatorIndexes.map((e) => e);
    } else {
      obj.validatorIndexes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<VotesForTimestamp>): VotesForTimestamp {
    const message = { ...baseVotesForTimestamp } as VotesForTimestamp;
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Long.fromValue(object.timestamp)
        : Long.ZERO;
    message.validatorIndexes = (object.validatorIndexes ?? []).map((e) => e);
    return message;
  },
};

const baseMsgCreateResult: object = { proposer: "" };

export const MsgCreateResult = {
  encode(
    message: MsgCreateResult,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.proposer !== "") {
      writer.uint32(10).string(message.proposer);
    }
    for (const v of message.validatorSignatures) {
      ValidatorSignature.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.votesForOracles) {
      VotesForOracle.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateResult } as MsgCreateResult;
    message.validatorSignatures = [];
    message.votesForOracles = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposer = reader.string();
          break;
        case 2:
          message.validatorSignatures.push(
            ValidatorSignature.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.votesForOracles.push(
            VotesForOracle.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateResult {
    const message = { ...baseMsgCreateResult } as MsgCreateResult;
    message.proposer =
      object.proposer !== undefined && object.proposer !== null
        ? String(object.proposer)
        : "";
    message.validatorSignatures = (object.validatorSignatures ?? []).map(
      (e: any) => ValidatorSignature.fromJSON(e)
    );
    message.votesForOracles = (object.votesForOracles ?? []).map((e: any) =>
      VotesForOracle.fromJSON(e)
    );
    return message;
  },

  toJSON(message: MsgCreateResult): unknown {
    const obj: any = {};
    message.proposer !== undefined && (obj.proposer = message.proposer);
    if (message.validatorSignatures) {
      obj.validatorSignatures = message.validatorSignatures.map((e) =>
        e ? ValidatorSignature.toJSON(e) : undefined
      );
    } else {
      obj.validatorSignatures = [];
    }
    if (message.votesForOracles) {
      obj.votesForOracles = message.votesForOracles.map((e) =>
        e ? VotesForOracle.toJSON(e) : undefined
      );
    } else {
      obj.votesForOracles = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateResult>): MsgCreateResult {
    const message = { ...baseMsgCreateResult } as MsgCreateResult;
    message.proposer = object.proposer ?? "";
    message.validatorSignatures = (object.validatorSignatures ?? []).map((e) =>
      ValidatorSignature.fromPartial(e)
    );
    message.votesForOracles = (object.votesForOracles ?? []).map((e) =>
      VotesForOracle.fromPartial(e)
    );
    return message;
  },
};

const baseMsgCreateResultResponse: object = {};

export const MsgCreateResultResponse = {
  encode(
    _: MsgCreateResultResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateResultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateResultResponse,
    } as MsgCreateResultResponse;
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

  fromJSON(_: any): MsgCreateResultResponse {
    const message = {
      ...baseMsgCreateResultResponse,
    } as MsgCreateResultResponse;
    return message;
  },

  toJSON(_: MsgCreateResultResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateResultResponse>
  ): MsgCreateResultResponse {
    const message = {
      ...baseMsgCreateResultResponse,
    } as MsgCreateResultResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateOracle(request: MsgCreateOracle): Promise<MsgCreateOracleResponse>;
  UpdateOracle(request: MsgUpdateOracle): Promise<MsgUpdateOracleResponse>;
  RemoveOracle(request: MsgRemoveOracle): Promise<MsgRemoveOracleResponse>;
  SetOracleSlashEnabled(
    request: MsgSetOracleSlashEnabled
  ): Promise<MsgSetOracleSlashEnabledResponse>;
  UpdateOracleContract(
    request: MsgUpdateOracleContract
  ): Promise<MsgUpdateOracleContractResponse>;
  DeployOracleContract(
    request: MsgDeployOracleContract
  ): Promise<MsgDeployOracleContractResponse>;
  /**
   * UpdateParams defines a governance operation for updating the module
   * parameters. The authority is hard-coded to the x/gov module account.
   *
   * Since: cosmos-sdk 0.47
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  CreateResult(request: MsgCreateResult): Promise<MsgCreateResultResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateOracle = this.CreateOracle.bind(this);
    this.UpdateOracle = this.UpdateOracle.bind(this);
    this.RemoveOracle = this.RemoveOracle.bind(this);
    this.SetOracleSlashEnabled = this.SetOracleSlashEnabled.bind(this);
    this.UpdateOracleContract = this.UpdateOracleContract.bind(this);
    this.DeployOracleContract = this.DeployOracleContract.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
    this.CreateResult = this.CreateResult.bind(this);
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

  SetOracleSlashEnabled(
    request: MsgSetOracleSlashEnabled
  ): Promise<MsgSetOracleSlashEnabledResponse> {
    const data = MsgSetOracleSlashEnabled.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.oracle.Msg",
      "SetOracleSlashEnabled",
      data
    );
    return promise.then((data) =>
      MsgSetOracleSlashEnabledResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateOracleContract(
    request: MsgUpdateOracleContract
  ): Promise<MsgUpdateOracleContractResponse> {
    const data = MsgUpdateOracleContract.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.oracle.Msg",
      "UpdateOracleContract",
      data
    );
    return promise.then((data) =>
      MsgUpdateOracleContractResponse.decode(new _m0.Reader(data))
    );
  }

  DeployOracleContract(
    request: MsgDeployOracleContract
  ): Promise<MsgDeployOracleContractResponse> {
    const data = MsgDeployOracleContract.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.oracle.Msg",
      "DeployOracleContract",
      data
    );
    return promise.then((data) =>
      MsgDeployOracleContractResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.oracle.Msg",
      "UpdateParams",
      data
    );
    return promise.then((data) =>
      MsgUpdateParamsResponse.decode(new _m0.Reader(data))
    );
  }

  CreateResult(request: MsgCreateResult): Promise<MsgCreateResultResponse> {
    const data = MsgCreateResult.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.oracle.Msg",
      "CreateResult",
      data
    );
    return promise.then((data) =>
      MsgCreateResultResponse.decode(new _m0.Reader(data))
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

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
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
