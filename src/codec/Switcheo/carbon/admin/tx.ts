/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ParamsToUpdate } from "./params";

export const protobufPackage = "Switcheo.carbon.admin";

export interface MsgInitiateAdminTransfer {
  creator: string;
  recipient: string;
}

export interface MsgInitiateAdminTransferResponse {
}

export interface MsgAcceptAdminTransfer {
  creator: string;
}

export interface MsgAcceptAdminTransferResponse {
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

export interface MsgHaltCurrentVersion {
  creator: string;
}

export interface MsgHaltCurrentVersionResponse {
}

function createBaseMsgInitiateAdminTransfer(): MsgInitiateAdminTransfer {
  return { creator: "", recipient: "" };
}

export const MsgInitiateAdminTransfer = {
  encode(message: MsgInitiateAdminTransfer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInitiateAdminTransfer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInitiateAdminTransfer();
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

          message.recipient = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgInitiateAdminTransfer {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
    };
  },

  toJSON(message: MsgInitiateAdminTransfer): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  create(base?: DeepPartial<MsgInitiateAdminTransfer>): MsgInitiateAdminTransfer {
    return MsgInitiateAdminTransfer.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgInitiateAdminTransfer>): MsgInitiateAdminTransfer {
    const message = createBaseMsgInitiateAdminTransfer();
    message.creator = object.creator ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  },
};

function createBaseMsgInitiateAdminTransferResponse(): MsgInitiateAdminTransferResponse {
  return {};
}

export const MsgInitiateAdminTransferResponse = {
  encode(_: MsgInitiateAdminTransferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInitiateAdminTransferResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInitiateAdminTransferResponse();
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

  fromJSON(_: any): MsgInitiateAdminTransferResponse {
    return {};
  },

  toJSON(_: MsgInitiateAdminTransferResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgInitiateAdminTransferResponse>): MsgInitiateAdminTransferResponse {
    return MsgInitiateAdminTransferResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgInitiateAdminTransferResponse>): MsgInitiateAdminTransferResponse {
    const message = createBaseMsgInitiateAdminTransferResponse();
    return message;
  },
};

function createBaseMsgAcceptAdminTransfer(): MsgAcceptAdminTransfer {
  return { creator: "" };
}

export const MsgAcceptAdminTransfer = {
  encode(message: MsgAcceptAdminTransfer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcceptAdminTransfer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcceptAdminTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAcceptAdminTransfer {
    return { creator: isSet(object.creator) ? String(object.creator) : "" };
  },

  toJSON(message: MsgAcceptAdminTransfer): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  create(base?: DeepPartial<MsgAcceptAdminTransfer>): MsgAcceptAdminTransfer {
    return MsgAcceptAdminTransfer.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgAcceptAdminTransfer>): MsgAcceptAdminTransfer {
    const message = createBaseMsgAcceptAdminTransfer();
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgAcceptAdminTransferResponse(): MsgAcceptAdminTransferResponse {
  return {};
}

export const MsgAcceptAdminTransferResponse = {
  encode(_: MsgAcceptAdminTransferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcceptAdminTransferResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcceptAdminTransferResponse();
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

  fromJSON(_: any): MsgAcceptAdminTransferResponse {
    return {};
  },

  toJSON(_: MsgAcceptAdminTransferResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgAcceptAdminTransferResponse>): MsgAcceptAdminTransferResponse {
    return MsgAcceptAdminTransferResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgAcceptAdminTransferResponse>): MsgAcceptAdminTransferResponse {
    const message = createBaseMsgAcceptAdminTransferResponse();
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

function createBaseMsgHaltCurrentVersion(): MsgHaltCurrentVersion {
  return { creator: "" };
}

export const MsgHaltCurrentVersion = {
  encode(message: MsgHaltCurrentVersion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgHaltCurrentVersion {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgHaltCurrentVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgHaltCurrentVersion {
    return { creator: isSet(object.creator) ? String(object.creator) : "" };
  },

  toJSON(message: MsgHaltCurrentVersion): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  create(base?: DeepPartial<MsgHaltCurrentVersion>): MsgHaltCurrentVersion {
    return MsgHaltCurrentVersion.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgHaltCurrentVersion>): MsgHaltCurrentVersion {
    const message = createBaseMsgHaltCurrentVersion();
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgHaltCurrentVersionResponse(): MsgHaltCurrentVersionResponse {
  return {};
}

export const MsgHaltCurrentVersionResponse = {
  encode(_: MsgHaltCurrentVersionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgHaltCurrentVersionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgHaltCurrentVersionResponse();
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

  fromJSON(_: any): MsgHaltCurrentVersionResponse {
    return {};
  },

  toJSON(_: MsgHaltCurrentVersionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgHaltCurrentVersionResponse>): MsgHaltCurrentVersionResponse {
    return MsgHaltCurrentVersionResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgHaltCurrentVersionResponse>): MsgHaltCurrentVersionResponse {
    const message = createBaseMsgHaltCurrentVersionResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  InitiateAdminTransfer(request: MsgInitiateAdminTransfer): Promise<MsgInitiateAdminTransferResponse>;
  AcceptAdminTransfer(request: MsgAcceptAdminTransfer): Promise<MsgAcceptAdminTransferResponse>;
  /**
   * UpdateParams defines a governance operation for updating the module
   * parameters. The authority is hard-coded to the x/gov module account.
   * Since: cosmos-sdk 0.47
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  HaltCurrentVersion(request: MsgHaltCurrentVersion): Promise<MsgHaltCurrentVersionResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.admin.Msg";
    this.rpc = rpc;
    this.InitiateAdminTransfer = this.InitiateAdminTransfer.bind(this);
    this.AcceptAdminTransfer = this.AcceptAdminTransfer.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
    this.HaltCurrentVersion = this.HaltCurrentVersion.bind(this);
  }
  InitiateAdminTransfer(request: MsgInitiateAdminTransfer): Promise<MsgInitiateAdminTransferResponse> {
    const data = MsgInitiateAdminTransfer.encode(request).finish();
    const promise = this.rpc.request(this.service, "InitiateAdminTransfer", data);
    return promise.then((data) => MsgInitiateAdminTransferResponse.decode(_m0.Reader.create(data)));
  }

  AcceptAdminTransfer(request: MsgAcceptAdminTransfer): Promise<MsgAcceptAdminTransferResponse> {
    const data = MsgAcceptAdminTransfer.encode(request).finish();
    const promise = this.rpc.request(this.service, "AcceptAdminTransfer", data);
    return promise.then((data) => MsgAcceptAdminTransferResponse.decode(_m0.Reader.create(data)));
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
  }

  HaltCurrentVersion(request: MsgHaltCurrentVersion): Promise<MsgHaltCurrentVersionResponse> {
    const data = MsgHaltCurrentVersion.encode(request).finish();
    const promise = this.rpc.request(this.service, "HaltCurrentVersion", data);
    return promise.then((data) => MsgHaltCurrentVersionResponse.decode(_m0.Reader.create(data)));
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
