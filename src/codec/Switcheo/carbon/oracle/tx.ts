/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { BoolValue, Int64Value, StringValue } from "../../../google/protobuf/wrappers";
import { ParamsToUpdate } from "./params";

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
  enableHistoricalResults: boolean;
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
  enableHistoricalResults?: boolean;
}

export interface MsgUpdateOracleResponse {
}

export interface MsgRemoveOracle {
  creator: string;
  oracleId: string;
}

export interface MsgRemoveOracleResponse {
}

export interface MsgSetOracleSlashEnabled {
  creator: string;
  enabled: boolean;
}

export interface MsgSetOracleSlashEnabledResponse {
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

export interface MsgUpdateOracleContract {
  creator: string;
  oracleId: string;
  contractAddress: string;
}

export interface MsgUpdateOracleContractResponse {
}

export interface MsgDeployOracleContract {
  creator: string;
  oracleId: string;
}

export interface MsgDeployOracleContractResponse {
}

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

export interface MsgCreateResultResponse {
}

export interface MsgCreateHistoricalBucketInfo {
  creator: string;
  duration?: Duration;
}

export interface MsgCreateHistoricalBucketInfoResponse {
}

export interface MsgRemoveHistoricalBucketInfo {
  creator: string;
  duration?: Duration;
}

export interface MsgRemoveHistoricalBucketInfoResponse {
}

function createBaseMsgCreateOracle(): MsgCreateOracle {
  return { creator: "", createOracleParams: undefined };
}

export const MsgCreateOracle = {
  encode(message: MsgCreateOracle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.createOracleParams !== undefined) {
      CreateOracleParams.encode(message.createOracleParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOracle {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateOracle();
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

          message.createOracleParams = CreateOracleParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateOracle {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      createOracleParams: isSet(object.createOracleParams)
        ? CreateOracleParams.fromJSON(object.createOracleParams)
        : undefined,
    };
  },

  toJSON(message: MsgCreateOracle): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.createOracleParams !== undefined && (obj.createOracleParams = message.createOracleParams
      ? CreateOracleParams.toJSON(message.createOracleParams)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgCreateOracle>): MsgCreateOracle {
    return MsgCreateOracle.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreateOracle>): MsgCreateOracle {
    const message = createBaseMsgCreateOracle();
    message.creator = object.creator ?? "";
    message.createOracleParams = (object.createOracleParams !== undefined && object.createOracleParams !== null)
      ? CreateOracleParams.fromPartial(object.createOracleParams)
      : undefined;
    return message;
  },
};

function createBaseCreateOracleParams(): CreateOracleParams {
  return {
    creator: "",
    id: "",
    description: "",
    minTurnoutPercentage: Long.ZERO,
    maxResultAge: Long.ZERO,
    securityType: "",
    resultStrategy: "",
    resolution: Long.ZERO,
    spec: "",
    enableHistoricalResults: false,
  };
}

export const CreateOracleParams = {
  encode(message: CreateOracleParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.enableHistoricalResults === true) {
      writer.uint32(80).bool(message.enableHistoricalResults);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOracleParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOracleParams();
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

          message.id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.minTurnoutPercentage = reader.int64() as Long;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.maxResultAge = reader.int64() as Long;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.securityType = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.resultStrategy = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.resolution = reader.int64() as Long;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.spec = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.enableHistoricalResults = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateOracleParams {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? String(object.id) : "",
      description: isSet(object.description) ? String(object.description) : "",
      minTurnoutPercentage: isSet(object.minTurnoutPercentage)
        ? Long.fromValue(object.minTurnoutPercentage)
        : Long.ZERO,
      maxResultAge: isSet(object.maxResultAge) ? Long.fromValue(object.maxResultAge) : Long.ZERO,
      securityType: isSet(object.securityType) ? String(object.securityType) : "",
      resultStrategy: isSet(object.resultStrategy) ? String(object.resultStrategy) : "",
      resolution: isSet(object.resolution) ? Long.fromValue(object.resolution) : Long.ZERO,
      spec: isSet(object.spec) ? String(object.spec) : "",
      enableHistoricalResults: isSet(object.enableHistoricalResults) ? Boolean(object.enableHistoricalResults) : false,
    };
  },

  toJSON(message: CreateOracleParams): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.description !== undefined && (obj.description = message.description);
    message.minTurnoutPercentage !== undefined &&
      (obj.minTurnoutPercentage = (message.minTurnoutPercentage || Long.ZERO).toString());
    message.maxResultAge !== undefined && (obj.maxResultAge = (message.maxResultAge || Long.ZERO).toString());
    message.securityType !== undefined && (obj.securityType = message.securityType);
    message.resultStrategy !== undefined && (obj.resultStrategy = message.resultStrategy);
    message.resolution !== undefined && (obj.resolution = (message.resolution || Long.ZERO).toString());
    message.spec !== undefined && (obj.spec = message.spec);
    message.enableHistoricalResults !== undefined && (obj.enableHistoricalResults = message.enableHistoricalResults);
    return obj;
  },

  create(base?: DeepPartial<CreateOracleParams>): CreateOracleParams {
    return CreateOracleParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateOracleParams>): CreateOracleParams {
    const message = createBaseCreateOracleParams();
    message.creator = object.creator ?? "";
    message.id = object.id ?? "";
    message.description = object.description ?? "";
    message.minTurnoutPercentage = (object.minTurnoutPercentage !== undefined && object.minTurnoutPercentage !== null)
      ? Long.fromValue(object.minTurnoutPercentage)
      : Long.ZERO;
    message.maxResultAge = (object.maxResultAge !== undefined && object.maxResultAge !== null)
      ? Long.fromValue(object.maxResultAge)
      : Long.ZERO;
    message.securityType = object.securityType ?? "";
    message.resultStrategy = object.resultStrategy ?? "";
    message.resolution = (object.resolution !== undefined && object.resolution !== null)
      ? Long.fromValue(object.resolution)
      : Long.ZERO;
    message.spec = object.spec ?? "";
    message.enableHistoricalResults = object.enableHistoricalResults ?? false;
    return message;
  },
};

function createBaseMsgCreateOracleResponse(): MsgCreateOracleResponse {
  return { id: "" };
}

export const MsgCreateOracleResponse = {
  encode(message: MsgCreateOracleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOracleResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateOracleResponse();
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

  fromJSON(object: any): MsgCreateOracleResponse {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: MsgCreateOracleResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create(base?: DeepPartial<MsgCreateOracleResponse>): MsgCreateOracleResponse {
    return MsgCreateOracleResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreateOracleResponse>): MsgCreateOracleResponse {
    const message = createBaseMsgCreateOracleResponse();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseMsgUpdateOracle(): MsgUpdateOracle {
  return { updater: "", updateOracleParams: undefined };
}

export const MsgUpdateOracle = {
  encode(message: MsgUpdateOracle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.updater !== "") {
      writer.uint32(10).string(message.updater);
    }
    if (message.updateOracleParams !== undefined) {
      UpdateOracleParams.encode(message.updateOracleParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateOracle {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOracle();
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

          message.updateOracleParams = UpdateOracleParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateOracle {
    return {
      updater: isSet(object.updater) ? String(object.updater) : "",
      updateOracleParams: isSet(object.updateOracleParams)
        ? UpdateOracleParams.fromJSON(object.updateOracleParams)
        : undefined,
    };
  },

  toJSON(message: MsgUpdateOracle): unknown {
    const obj: any = {};
    message.updater !== undefined && (obj.updater = message.updater);
    message.updateOracleParams !== undefined && (obj.updateOracleParams = message.updateOracleParams
      ? UpdateOracleParams.toJSON(message.updateOracleParams)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateOracle>): MsgUpdateOracle {
    return MsgUpdateOracle.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateOracle>): MsgUpdateOracle {
    const message = createBaseMsgUpdateOracle();
    message.updater = object.updater ?? "";
    message.updateOracleParams = (object.updateOracleParams !== undefined && object.updateOracleParams !== null)
      ? UpdateOracleParams.fromPartial(object.updateOracleParams)
      : undefined;
    return message;
  },
};

function createBaseUpdateOracleParams(): UpdateOracleParams {
  return {
    id: "",
    description: undefined,
    status: undefined,
    minTurnoutPercentage: undefined,
    maxResultAge: undefined,
    securityType: undefined,
    resultStrategy: undefined,
    resolution: undefined,
    spec: undefined,
    enableHistoricalResults: undefined,
  };
}

export const UpdateOracleParams = {
  encode(message: UpdateOracleParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.description !== undefined) {
      StringValue.encode({ value: message.description! }, writer.uint32(18).fork()).ldelim();
    }
    if (message.status !== undefined) {
      StringValue.encode({ value: message.status! }, writer.uint32(26).fork()).ldelim();
    }
    if (message.minTurnoutPercentage !== undefined) {
      Int64Value.encode({ value: message.minTurnoutPercentage! }, writer.uint32(34).fork()).ldelim();
    }
    if (message.maxResultAge !== undefined) {
      Int64Value.encode({ value: message.maxResultAge! }, writer.uint32(42).fork()).ldelim();
    }
    if (message.securityType !== undefined) {
      StringValue.encode({ value: message.securityType! }, writer.uint32(50).fork()).ldelim();
    }
    if (message.resultStrategy !== undefined) {
      StringValue.encode({ value: message.resultStrategy! }, writer.uint32(58).fork()).ldelim();
    }
    if (message.resolution !== undefined) {
      Int64Value.encode({ value: message.resolution! }, writer.uint32(66).fork()).ldelim();
    }
    if (message.spec !== undefined) {
      StringValue.encode({ value: message.spec! }, writer.uint32(74).fork()).ldelim();
    }
    if (message.enableHistoricalResults !== undefined) {
      BoolValue.encode({ value: message.enableHistoricalResults! }, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOracleParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateOracleParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.status = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.minTurnoutPercentage = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.maxResultAge = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.securityType = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.resultStrategy = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.resolution = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.spec = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.enableHistoricalResults = BoolValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateOracleParams {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      description: isSet(object.description) ? String(object.description) : undefined,
      status: isSet(object.status) ? String(object.status) : undefined,
      minTurnoutPercentage: isSet(object.minTurnoutPercentage)
        ? Long.fromValue(object.minTurnoutPercentage)
        : undefined,
      maxResultAge: isSet(object.maxResultAge) ? Long.fromValue(object.maxResultAge) : undefined,
      securityType: isSet(object.securityType) ? String(object.securityType) : undefined,
      resultStrategy: isSet(object.resultStrategy) ? String(object.resultStrategy) : undefined,
      resolution: isSet(object.resolution) ? Long.fromValue(object.resolution) : undefined,
      spec: isSet(object.spec) ? String(object.spec) : undefined,
      enableHistoricalResults: isSet(object.enableHistoricalResults)
        ? Boolean(object.enableHistoricalResults)
        : undefined,
    };
  },

  toJSON(message: UpdateOracleParams): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.description !== undefined && (obj.description = message.description);
    message.status !== undefined && (obj.status = message.status);
    message.minTurnoutPercentage !== undefined && (obj.minTurnoutPercentage = message.minTurnoutPercentage);
    message.maxResultAge !== undefined && (obj.maxResultAge = message.maxResultAge);
    message.securityType !== undefined && (obj.securityType = message.securityType);
    message.resultStrategy !== undefined && (obj.resultStrategy = message.resultStrategy);
    message.resolution !== undefined && (obj.resolution = message.resolution);
    message.spec !== undefined && (obj.spec = message.spec);
    message.enableHistoricalResults !== undefined && (obj.enableHistoricalResults = message.enableHistoricalResults);
    return obj;
  },

  create(base?: DeepPartial<UpdateOracleParams>): UpdateOracleParams {
    return UpdateOracleParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateOracleParams>): UpdateOracleParams {
    const message = createBaseUpdateOracleParams();
    message.id = object.id ?? "";
    message.description = object.description ?? undefined;
    message.status = object.status ?? undefined;
    message.minTurnoutPercentage = (object.minTurnoutPercentage !== undefined && object.minTurnoutPercentage !== null)
      ? Long.fromValue(object.minTurnoutPercentage)
      : undefined;
    message.maxResultAge = (object.maxResultAge !== undefined && object.maxResultAge !== null)
      ? Long.fromValue(object.maxResultAge)
      : undefined;
    message.securityType = object.securityType ?? undefined;
    message.resultStrategy = object.resultStrategy ?? undefined;
    message.resolution = (object.resolution !== undefined && object.resolution !== null)
      ? Long.fromValue(object.resolution)
      : undefined;
    message.spec = object.spec ?? undefined;
    message.enableHistoricalResults = object.enableHistoricalResults ?? undefined;
    return message;
  },
};

function createBaseMsgUpdateOracleResponse(): MsgUpdateOracleResponse {
  return {};
}

export const MsgUpdateOracleResponse = {
  encode(_: MsgUpdateOracleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateOracleResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOracleResponse();
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

  fromJSON(_: any): MsgUpdateOracleResponse {
    return {};
  },

  toJSON(_: MsgUpdateOracleResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateOracleResponse>): MsgUpdateOracleResponse {
    return MsgUpdateOracleResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdateOracleResponse>): MsgUpdateOracleResponse {
    const message = createBaseMsgUpdateOracleResponse();
    return message;
  },
};

function createBaseMsgRemoveOracle(): MsgRemoveOracle {
  return { creator: "", oracleId: "" };
}

export const MsgRemoveOracle = {
  encode(message: MsgRemoveOracle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.oracleId !== "") {
      writer.uint32(18).string(message.oracleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveOracle {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveOracle();
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

  fromJSON(object: any): MsgRemoveOracle {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      oracleId: isSet(object.oracleId) ? String(object.oracleId) : "",
    };
  },

  toJSON(message: MsgRemoveOracle): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.oracleId !== undefined && (obj.oracleId = message.oracleId);
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveOracle>): MsgRemoveOracle {
    return MsgRemoveOracle.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRemoveOracle>): MsgRemoveOracle {
    const message = createBaseMsgRemoveOracle();
    message.creator = object.creator ?? "";
    message.oracleId = object.oracleId ?? "";
    return message;
  },
};

function createBaseMsgRemoveOracleResponse(): MsgRemoveOracleResponse {
  return {};
}

export const MsgRemoveOracleResponse = {
  encode(_: MsgRemoveOracleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveOracleResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveOracleResponse();
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

  fromJSON(_: any): MsgRemoveOracleResponse {
    return {};
  },

  toJSON(_: MsgRemoveOracleResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveOracleResponse>): MsgRemoveOracleResponse {
    return MsgRemoveOracleResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgRemoveOracleResponse>): MsgRemoveOracleResponse {
    const message = createBaseMsgRemoveOracleResponse();
    return message;
  },
};

function createBaseMsgSetOracleSlashEnabled(): MsgSetOracleSlashEnabled {
  return { creator: "", enabled: false };
}

export const MsgSetOracleSlashEnabled = {
  encode(message: MsgSetOracleSlashEnabled, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetOracleSlashEnabled {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOracleSlashEnabled();
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

          message.enabled = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetOracleSlashEnabled {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
    };
  },

  toJSON(message: MsgSetOracleSlashEnabled): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },

  create(base?: DeepPartial<MsgSetOracleSlashEnabled>): MsgSetOracleSlashEnabled {
    return MsgSetOracleSlashEnabled.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSetOracleSlashEnabled>): MsgSetOracleSlashEnabled {
    const message = createBaseMsgSetOracleSlashEnabled();
    message.creator = object.creator ?? "";
    message.enabled = object.enabled ?? false;
    return message;
  },
};

function createBaseMsgSetOracleSlashEnabledResponse(): MsgSetOracleSlashEnabledResponse {
  return {};
}

export const MsgSetOracleSlashEnabledResponse = {
  encode(_: MsgSetOracleSlashEnabledResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetOracleSlashEnabledResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOracleSlashEnabledResponse();
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

  fromJSON(_: any): MsgSetOracleSlashEnabledResponse {
    return {};
  },

  toJSON(_: MsgSetOracleSlashEnabledResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSetOracleSlashEnabledResponse>): MsgSetOracleSlashEnabledResponse {
    return MsgSetOracleSlashEnabledResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgSetOracleSlashEnabledResponse>): MsgSetOracleSlashEnabledResponse {
    const message = createBaseMsgSetOracleSlashEnabledResponse();
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

function createBaseMsgUpdateOracleContract(): MsgUpdateOracleContract {
  return { creator: "", oracleId: "", contractAddress: "" };
}

export const MsgUpdateOracleContract = {
  encode(message: MsgUpdateOracleContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateOracleContract {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOracleContract();
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

          message.oracleId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.contractAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateOracleContract {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      oracleId: isSet(object.oracleId) ? String(object.oracleId) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
    };
  },

  toJSON(message: MsgUpdateOracleContract): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.oracleId !== undefined && (obj.oracleId = message.oracleId);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateOracleContract>): MsgUpdateOracleContract {
    return MsgUpdateOracleContract.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateOracleContract>): MsgUpdateOracleContract {
    const message = createBaseMsgUpdateOracleContract();
    message.creator = object.creator ?? "";
    message.oracleId = object.oracleId ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
};

function createBaseMsgUpdateOracleContractResponse(): MsgUpdateOracleContractResponse {
  return {};
}

export const MsgUpdateOracleContractResponse = {
  encode(_: MsgUpdateOracleContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateOracleContractResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOracleContractResponse();
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

  fromJSON(_: any): MsgUpdateOracleContractResponse {
    return {};
  },

  toJSON(_: MsgUpdateOracleContractResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateOracleContractResponse>): MsgUpdateOracleContractResponse {
    return MsgUpdateOracleContractResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdateOracleContractResponse>): MsgUpdateOracleContractResponse {
    const message = createBaseMsgUpdateOracleContractResponse();
    return message;
  },
};

function createBaseMsgDeployOracleContract(): MsgDeployOracleContract {
  return { creator: "", oracleId: "" };
}

export const MsgDeployOracleContract = {
  encode(message: MsgDeployOracleContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.oracleId !== "") {
      writer.uint32(18).string(message.oracleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeployOracleContract {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeployOracleContract();
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

  fromJSON(object: any): MsgDeployOracleContract {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      oracleId: isSet(object.oracleId) ? String(object.oracleId) : "",
    };
  },

  toJSON(message: MsgDeployOracleContract): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.oracleId !== undefined && (obj.oracleId = message.oracleId);
    return obj;
  },

  create(base?: DeepPartial<MsgDeployOracleContract>): MsgDeployOracleContract {
    return MsgDeployOracleContract.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgDeployOracleContract>): MsgDeployOracleContract {
    const message = createBaseMsgDeployOracleContract();
    message.creator = object.creator ?? "";
    message.oracleId = object.oracleId ?? "";
    return message;
  },
};

function createBaseMsgDeployOracleContractResponse(): MsgDeployOracleContractResponse {
  return {};
}

export const MsgDeployOracleContractResponse = {
  encode(_: MsgDeployOracleContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeployOracleContractResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeployOracleContractResponse();
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

  fromJSON(_: any): MsgDeployOracleContractResponse {
    return {};
  },

  toJSON(_: MsgDeployOracleContractResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgDeployOracleContractResponse>): MsgDeployOracleContractResponse {
    return MsgDeployOracleContractResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgDeployOracleContractResponse>): MsgDeployOracleContractResponse {
    const message = createBaseMsgDeployOracleContractResponse();
    return message;
  },
};

function createBaseValidatorSignature(): ValidatorSignature {
  return { pubKey: new Uint8Array(), validatorIndex: 0, signature: new Uint8Array(), signedTimestamp: Long.ZERO };
}

export const ValidatorSignature = {
  encode(message: ValidatorSignature, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSignature();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pubKey = reader.bytes();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.validatorIndex = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.signature = reader.bytes();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.signedTimestamp = reader.int64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValidatorSignature {
    return {
      pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array(),
      validatorIndex: isSet(object.validatorIndex) ? Number(object.validatorIndex) : 0,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
      signedTimestamp: isSet(object.signedTimestamp) ? Long.fromValue(object.signedTimestamp) : Long.ZERO,
    };
  },

  toJSON(message: ValidatorSignature): unknown {
    const obj: any = {};
    message.pubKey !== undefined &&
      (obj.pubKey = base64FromBytes(message.pubKey !== undefined ? message.pubKey : new Uint8Array()));
    message.validatorIndex !== undefined && (obj.validatorIndex = Math.round(message.validatorIndex));
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    message.signedTimestamp !== undefined && (obj.signedTimestamp = (message.signedTimestamp || Long.ZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<ValidatorSignature>): ValidatorSignature {
    return ValidatorSignature.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ValidatorSignature>): ValidatorSignature {
    const message = createBaseValidatorSignature();
    message.pubKey = object.pubKey ?? new Uint8Array();
    message.validatorIndex = object.validatorIndex ?? 0;
    message.signature = object.signature ?? new Uint8Array();
    message.signedTimestamp = (object.signedTimestamp !== undefined && object.signedTimestamp !== null)
      ? Long.fromValue(object.signedTimestamp)
      : Long.ZERO;
    return message;
  },
};

function createBaseVotesForOracle(): VotesForOracle {
  return { oracleIndex: 0, votesForData: [] };
}

export const VotesForOracle = {
  encode(message: VotesForOracle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oracleIndex !== 0) {
      writer.uint32(8).int32(message.oracleIndex);
    }
    for (const v of message.votesForData) {
      VotesForData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VotesForOracle {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVotesForOracle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.oracleIndex = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.votesForData.push(VotesForData.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VotesForOracle {
    return {
      oracleIndex: isSet(object.oracleIndex) ? Number(object.oracleIndex) : 0,
      votesForData: Array.isArray(object?.votesForData)
        ? object.votesForData.map((e: any) => VotesForData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: VotesForOracle): unknown {
    const obj: any = {};
    message.oracleIndex !== undefined && (obj.oracleIndex = Math.round(message.oracleIndex));
    if (message.votesForData) {
      obj.votesForData = message.votesForData.map((e) => e ? VotesForData.toJSON(e) : undefined);
    } else {
      obj.votesForData = [];
    }
    return obj;
  },

  create(base?: DeepPartial<VotesForOracle>): VotesForOracle {
    return VotesForOracle.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<VotesForOracle>): VotesForOracle {
    const message = createBaseVotesForOracle();
    message.oracleIndex = object.oracleIndex ?? 0;
    message.votesForData = object.votesForData?.map((e) => VotesForData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVotesForData(): VotesForData {
  return { data: "", votesForTimestamps: [] };
}

export const VotesForData = {
  encode(message: VotesForData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    for (const v of message.votesForTimestamps) {
      VotesForTimestamp.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VotesForData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVotesForData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.votesForTimestamps.push(VotesForTimestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VotesForData {
    return {
      data: isSet(object.data) ? String(object.data) : "",
      votesForTimestamps: Array.isArray(object?.votesForTimestamps)
        ? object.votesForTimestamps.map((e: any) => VotesForTimestamp.fromJSON(e))
        : [],
    };
  },

  toJSON(message: VotesForData): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = message.data);
    if (message.votesForTimestamps) {
      obj.votesForTimestamps = message.votesForTimestamps.map((e) => e ? VotesForTimestamp.toJSON(e) : undefined);
    } else {
      obj.votesForTimestamps = [];
    }
    return obj;
  },

  create(base?: DeepPartial<VotesForData>): VotesForData {
    return VotesForData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<VotesForData>): VotesForData {
    const message = createBaseVotesForData();
    message.data = object.data ?? "";
    message.votesForTimestamps = object.votesForTimestamps?.map((e) => VotesForTimestamp.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVotesForTimestamp(): VotesForTimestamp {
  return { timestamp: Long.ZERO, validatorIndexes: [] };
}

export const VotesForTimestamp = {
  encode(message: VotesForTimestamp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVotesForTimestamp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.timestamp = reader.int64() as Long;
          continue;
        case 2:
          if (tag === 16) {
            message.validatorIndexes.push(reader.int32());

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.validatorIndexes.push(reader.int32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VotesForTimestamp {
    return {
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.ZERO,
      validatorIndexes: Array.isArray(object?.validatorIndexes)
        ? object.validatorIndexes.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: VotesForTimestamp): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.ZERO).toString());
    if (message.validatorIndexes) {
      obj.validatorIndexes = message.validatorIndexes.map((e) => Math.round(e));
    } else {
      obj.validatorIndexes = [];
    }
    return obj;
  },

  create(base?: DeepPartial<VotesForTimestamp>): VotesForTimestamp {
    return VotesForTimestamp.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<VotesForTimestamp>): VotesForTimestamp {
    const message = createBaseVotesForTimestamp();
    message.timestamp = (object.timestamp !== undefined && object.timestamp !== null)
      ? Long.fromValue(object.timestamp)
      : Long.ZERO;
    message.validatorIndexes = object.validatorIndexes?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgCreateResult(): MsgCreateResult {
  return { proposer: "", validatorSignatures: [], votesForOracles: [] };
}

export const MsgCreateResult = {
  encode(message: MsgCreateResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.proposer = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.validatorSignatures.push(ValidatorSignature.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.votesForOracles.push(VotesForOracle.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateResult {
    return {
      proposer: isSet(object.proposer) ? String(object.proposer) : "",
      validatorSignatures: Array.isArray(object?.validatorSignatures)
        ? object.validatorSignatures.map((e: any) => ValidatorSignature.fromJSON(e))
        : [],
      votesForOracles: Array.isArray(object?.votesForOracles)
        ? object.votesForOracles.map((e: any) => VotesForOracle.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgCreateResult): unknown {
    const obj: any = {};
    message.proposer !== undefined && (obj.proposer = message.proposer);
    if (message.validatorSignatures) {
      obj.validatorSignatures = message.validatorSignatures.map((e) => e ? ValidatorSignature.toJSON(e) : undefined);
    } else {
      obj.validatorSignatures = [];
    }
    if (message.votesForOracles) {
      obj.votesForOracles = message.votesForOracles.map((e) => e ? VotesForOracle.toJSON(e) : undefined);
    } else {
      obj.votesForOracles = [];
    }
    return obj;
  },

  create(base?: DeepPartial<MsgCreateResult>): MsgCreateResult {
    return MsgCreateResult.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreateResult>): MsgCreateResult {
    const message = createBaseMsgCreateResult();
    message.proposer = object.proposer ?? "";
    message.validatorSignatures = object.validatorSignatures?.map((e) => ValidatorSignature.fromPartial(e)) || [];
    message.votesForOracles = object.votesForOracles?.map((e) => VotesForOracle.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgCreateResultResponse(): MsgCreateResultResponse {
  return {};
}

export const MsgCreateResultResponse = {
  encode(_: MsgCreateResultResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResultResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateResultResponse();
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

  fromJSON(_: any): MsgCreateResultResponse {
    return {};
  },

  toJSON(_: MsgCreateResultResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgCreateResultResponse>): MsgCreateResultResponse {
    return MsgCreateResultResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgCreateResultResponse>): MsgCreateResultResponse {
    const message = createBaseMsgCreateResultResponse();
    return message;
  },
};

function createBaseMsgCreateHistoricalBucketInfo(): MsgCreateHistoricalBucketInfo {
  return { creator: "", duration: undefined };
}

export const MsgCreateHistoricalBucketInfo = {
  encode(message: MsgCreateHistoricalBucketInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateHistoricalBucketInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateHistoricalBucketInfo();
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

          message.duration = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateHistoricalBucketInfo {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
    };
  },

  toJSON(message: MsgCreateHistoricalBucketInfo): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgCreateHistoricalBucketInfo>): MsgCreateHistoricalBucketInfo {
    return MsgCreateHistoricalBucketInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreateHistoricalBucketInfo>): MsgCreateHistoricalBucketInfo {
    const message = createBaseMsgCreateHistoricalBucketInfo();
    message.creator = object.creator ?? "";
    message.duration = (object.duration !== undefined && object.duration !== null)
      ? Duration.fromPartial(object.duration)
      : undefined;
    return message;
  },
};

function createBaseMsgCreateHistoricalBucketInfoResponse(): MsgCreateHistoricalBucketInfoResponse {
  return {};
}

export const MsgCreateHistoricalBucketInfoResponse = {
  encode(_: MsgCreateHistoricalBucketInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateHistoricalBucketInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateHistoricalBucketInfoResponse();
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

  fromJSON(_: any): MsgCreateHistoricalBucketInfoResponse {
    return {};
  },

  toJSON(_: MsgCreateHistoricalBucketInfoResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgCreateHistoricalBucketInfoResponse>): MsgCreateHistoricalBucketInfoResponse {
    return MsgCreateHistoricalBucketInfoResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgCreateHistoricalBucketInfoResponse>): MsgCreateHistoricalBucketInfoResponse {
    const message = createBaseMsgCreateHistoricalBucketInfoResponse();
    return message;
  },
};

function createBaseMsgRemoveHistoricalBucketInfo(): MsgRemoveHistoricalBucketInfo {
  return { creator: "", duration: undefined };
}

export const MsgRemoveHistoricalBucketInfo = {
  encode(message: MsgRemoveHistoricalBucketInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveHistoricalBucketInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveHistoricalBucketInfo();
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

          message.duration = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveHistoricalBucketInfo {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
    };
  },

  toJSON(message: MsgRemoveHistoricalBucketInfo): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveHistoricalBucketInfo>): MsgRemoveHistoricalBucketInfo {
    return MsgRemoveHistoricalBucketInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRemoveHistoricalBucketInfo>): MsgRemoveHistoricalBucketInfo {
    const message = createBaseMsgRemoveHistoricalBucketInfo();
    message.creator = object.creator ?? "";
    message.duration = (object.duration !== undefined && object.duration !== null)
      ? Duration.fromPartial(object.duration)
      : undefined;
    return message;
  },
};

function createBaseMsgRemoveHistoricalBucketInfoResponse(): MsgRemoveHistoricalBucketInfoResponse {
  return {};
}

export const MsgRemoveHistoricalBucketInfoResponse = {
  encode(_: MsgRemoveHistoricalBucketInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveHistoricalBucketInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveHistoricalBucketInfoResponse();
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

  fromJSON(_: any): MsgRemoveHistoricalBucketInfoResponse {
    return {};
  },

  toJSON(_: MsgRemoveHistoricalBucketInfoResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveHistoricalBucketInfoResponse>): MsgRemoveHistoricalBucketInfoResponse {
    return MsgRemoveHistoricalBucketInfoResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgRemoveHistoricalBucketInfoResponse>): MsgRemoveHistoricalBucketInfoResponse {
    const message = createBaseMsgRemoveHistoricalBucketInfoResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateOracle(request: MsgCreateOracle): Promise<MsgCreateOracleResponse>;
  UpdateOracle(request: MsgUpdateOracle): Promise<MsgUpdateOracleResponse>;
  RemoveOracle(request: MsgRemoveOracle): Promise<MsgRemoveOracleResponse>;
  SetOracleSlashEnabled(request: MsgSetOracleSlashEnabled): Promise<MsgSetOracleSlashEnabledResponse>;
  UpdateOracleContract(request: MsgUpdateOracleContract): Promise<MsgUpdateOracleContractResponse>;
  DeployOracleContract(request: MsgDeployOracleContract): Promise<MsgDeployOracleContractResponse>;
  /**
   * UpdateParams defines a governance operation for updating the module
   * parameters. The authority is hard-coded to the x/gov module account.
   *
   * Since: cosmos-sdk 0.47
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  CreateResult(request: MsgCreateResult): Promise<MsgCreateResultResponse>;
  CreateHistoricalBucketInfo(request: MsgCreateHistoricalBucketInfo): Promise<MsgCreateHistoricalBucketInfoResponse>;
  RemoveHistoricalBucketInfo(request: MsgRemoveHistoricalBucketInfo): Promise<MsgRemoveHistoricalBucketInfoResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.oracle.Msg";
    this.rpc = rpc;
    this.CreateOracle = this.CreateOracle.bind(this);
    this.UpdateOracle = this.UpdateOracle.bind(this);
    this.RemoveOracle = this.RemoveOracle.bind(this);
    this.SetOracleSlashEnabled = this.SetOracleSlashEnabled.bind(this);
    this.UpdateOracleContract = this.UpdateOracleContract.bind(this);
    this.DeployOracleContract = this.DeployOracleContract.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
    this.CreateResult = this.CreateResult.bind(this);
    this.CreateHistoricalBucketInfo = this.CreateHistoricalBucketInfo.bind(this);
    this.RemoveHistoricalBucketInfo = this.RemoveHistoricalBucketInfo.bind(this);
  }
  CreateOracle(request: MsgCreateOracle): Promise<MsgCreateOracleResponse> {
    const data = MsgCreateOracle.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateOracle", data);
    return promise.then((data) => MsgCreateOracleResponse.decode(_m0.Reader.create(data)));
  }

  UpdateOracle(request: MsgUpdateOracle): Promise<MsgUpdateOracleResponse> {
    const data = MsgUpdateOracle.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateOracle", data);
    return promise.then((data) => MsgUpdateOracleResponse.decode(_m0.Reader.create(data)));
  }

  RemoveOracle(request: MsgRemoveOracle): Promise<MsgRemoveOracleResponse> {
    const data = MsgRemoveOracle.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoveOracle", data);
    return promise.then((data) => MsgRemoveOracleResponse.decode(_m0.Reader.create(data)));
  }

  SetOracleSlashEnabled(request: MsgSetOracleSlashEnabled): Promise<MsgSetOracleSlashEnabledResponse> {
    const data = MsgSetOracleSlashEnabled.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetOracleSlashEnabled", data);
    return promise.then((data) => MsgSetOracleSlashEnabledResponse.decode(_m0.Reader.create(data)));
  }

  UpdateOracleContract(request: MsgUpdateOracleContract): Promise<MsgUpdateOracleContractResponse> {
    const data = MsgUpdateOracleContract.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateOracleContract", data);
    return promise.then((data) => MsgUpdateOracleContractResponse.decode(_m0.Reader.create(data)));
  }

  DeployOracleContract(request: MsgDeployOracleContract): Promise<MsgDeployOracleContractResponse> {
    const data = MsgDeployOracleContract.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeployOracleContract", data);
    return promise.then((data) => MsgDeployOracleContractResponse.decode(_m0.Reader.create(data)));
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
  }

  CreateResult(request: MsgCreateResult): Promise<MsgCreateResultResponse> {
    const data = MsgCreateResult.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateResult", data);
    return promise.then((data) => MsgCreateResultResponse.decode(_m0.Reader.create(data)));
  }

  CreateHistoricalBucketInfo(request: MsgCreateHistoricalBucketInfo): Promise<MsgCreateHistoricalBucketInfoResponse> {
    const data = MsgCreateHistoricalBucketInfo.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateHistoricalBucketInfo", data);
    return promise.then((data) => MsgCreateHistoricalBucketInfoResponse.decode(_m0.Reader.create(data)));
  }

  RemoveHistoricalBucketInfo(request: MsgRemoveHistoricalBucketInfo): Promise<MsgRemoveHistoricalBucketInfoResponse> {
    const data = MsgRemoveHistoricalBucketInfo.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoveHistoricalBucketInfo", data);
    return promise.then((data) => MsgRemoveHistoricalBucketInfoResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
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
