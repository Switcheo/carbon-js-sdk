/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.createOracleParams !== undefined &&
      object.createOracleParams !== null
    ) {
      message.createOracleParams = CreateOracleParams.fromJSON(
        object.createOracleParams
      );
    } else {
      message.createOracleParams = undefined;
    }
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
    if (
      object.createOracleParams !== undefined &&
      object.createOracleParams !== null
    ) {
      message.createOracleParams = CreateOracleParams.fromPartial(
        object.createOracleParams
      );
    } else {
      message.createOracleParams = undefined;
    }
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (
      object.minTurnoutPercentage !== undefined &&
      object.minTurnoutPercentage !== null
    ) {
      message.minTurnoutPercentage = Long.fromString(
        object.minTurnoutPercentage
      );
    } else {
      message.minTurnoutPercentage = Long.ZERO;
    }
    if (object.maxResultAge !== undefined && object.maxResultAge !== null) {
      message.maxResultAge = Long.fromString(object.maxResultAge);
    } else {
      message.maxResultAge = Long.ZERO;
    }
    if (object.securityType !== undefined && object.securityType !== null) {
      message.securityType = String(object.securityType);
    } else {
      message.securityType = "";
    }
    if (object.resultStrategy !== undefined && object.resultStrategy !== null) {
      message.resultStrategy = String(object.resultStrategy);
    } else {
      message.resultStrategy = "";
    }
    if (object.resolution !== undefined && object.resolution !== null) {
      message.resolution = Long.fromString(object.resolution);
    } else {
      message.resolution = Long.ZERO;
    }
    if (object.spec !== undefined && object.spec !== null) {
      message.spec = String(object.spec);
    } else {
      message.spec = "";
    }
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
    if (
      object.minTurnoutPercentage !== undefined &&
      object.minTurnoutPercentage !== null
    ) {
      message.minTurnoutPercentage = object.minTurnoutPercentage as Long;
    } else {
      message.minTurnoutPercentage = Long.ZERO;
    }
    if (object.maxResultAge !== undefined && object.maxResultAge !== null) {
      message.maxResultAge = object.maxResultAge as Long;
    } else {
      message.maxResultAge = Long.ZERO;
    }
    message.securityType = object.securityType ?? "";
    message.resultStrategy = object.resultStrategy ?? "";
    if (object.resolution !== undefined && object.resolution !== null) {
      message.resolution = object.resolution as Long;
    } else {
      message.resolution = Long.ZERO;
    }
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
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.oracleId !== undefined && object.oracleId !== null) {
      message.oracleId = String(object.oracleId);
    } else {
      message.oracleId = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Long.fromString(object.timestamp);
    } else {
      message.timestamp = Long.ZERO;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = String(object.data);
    } else {
      message.data = "";
    }
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
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp as Long;
    } else {
      message.timestamp = Long.ZERO;
    }
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

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateOracle(request: MsgCreateOracle): Promise<MsgCreateOracleResponse>;
  CreateVote(request: MsgCreateVote): Promise<MsgCreateVoteResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateOracle = this.CreateOracle.bind(this);
    this.CreateVote = this.CreateVote.bind(this);
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
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
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
