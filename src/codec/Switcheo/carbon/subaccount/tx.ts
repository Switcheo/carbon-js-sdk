/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ParamsToUpdate } from "./params";

export const protobufPackage = "Switcheo.carbon.subaccount";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateSubAccount {
  creator: string;
  subAddress: string;
  mainAddress: string;
  role: string;
}

export interface MsgCreateSubAccountResponse {
}

export interface MsgActivateSubAccount {
  creator: string;
  mainAddress: string;
  subAddress: string;
  role: string;
}

export interface MsgActivateSubAccountResponse {
}

export interface MsgRemoveSubAccount {
  creator: string;
  subAddress: string;
  mainAddress: string;
  role: string;
}

export interface MsgRemoveSubAccountResponse {
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

function createBaseMsgCreateSubAccount(): MsgCreateSubAccount {
  return { creator: "", subAddress: "", mainAddress: "", role: "" };
}

export const MsgCreateSubAccount = {
  encode(message: MsgCreateSubAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.subAddress !== "") {
      writer.uint32(18).string(message.subAddress);
    }
    if (message.mainAddress !== "") {
      writer.uint32(26).string(message.mainAddress);
    }
    if (message.role !== "") {
      writer.uint32(34).string(message.role);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSubAccount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSubAccount();
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

          message.subAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mainAddress = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.role = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateSubAccount {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      subAddress: isSet(object.subAddress) ? String(object.subAddress) : "",
      mainAddress: isSet(object.mainAddress) ? String(object.mainAddress) : "",
      role: isSet(object.role) ? String(object.role) : "",
    };
  },

  toJSON(message: MsgCreateSubAccount): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.subAddress !== undefined && (obj.subAddress = message.subAddress);
    message.mainAddress !== undefined && (obj.mainAddress = message.mainAddress);
    message.role !== undefined && (obj.role = message.role);
    return obj;
  },

  create(base?: DeepPartial<MsgCreateSubAccount>): MsgCreateSubAccount {
    return MsgCreateSubAccount.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreateSubAccount>): MsgCreateSubAccount {
    const message = createBaseMsgCreateSubAccount();
    message.creator = object.creator ?? "";
    message.subAddress = object.subAddress ?? "";
    message.mainAddress = object.mainAddress ?? "";
    message.role = object.role ?? "";
    return message;
  },
};

function createBaseMsgCreateSubAccountResponse(): MsgCreateSubAccountResponse {
  return {};
}

export const MsgCreateSubAccountResponse = {
  encode(_: MsgCreateSubAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSubAccountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSubAccountResponse();
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

  fromJSON(_: any): MsgCreateSubAccountResponse {
    return {};
  },

  toJSON(_: MsgCreateSubAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgCreateSubAccountResponse>): MsgCreateSubAccountResponse {
    return MsgCreateSubAccountResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgCreateSubAccountResponse>): MsgCreateSubAccountResponse {
    const message = createBaseMsgCreateSubAccountResponse();
    return message;
  },
};

function createBaseMsgActivateSubAccount(): MsgActivateSubAccount {
  return { creator: "", mainAddress: "", subAddress: "", role: "" };
}

export const MsgActivateSubAccount = {
  encode(message: MsgActivateSubAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.mainAddress !== "") {
      writer.uint32(18).string(message.mainAddress);
    }
    if (message.subAddress !== "") {
      writer.uint32(26).string(message.subAddress);
    }
    if (message.role !== "") {
      writer.uint32(34).string(message.role);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgActivateSubAccount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgActivateSubAccount();
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

          message.mainAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.subAddress = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.role = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgActivateSubAccount {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      mainAddress: isSet(object.mainAddress) ? String(object.mainAddress) : "",
      subAddress: isSet(object.subAddress) ? String(object.subAddress) : "",
      role: isSet(object.role) ? String(object.role) : "",
    };
  },

  toJSON(message: MsgActivateSubAccount): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.mainAddress !== undefined && (obj.mainAddress = message.mainAddress);
    message.subAddress !== undefined && (obj.subAddress = message.subAddress);
    message.role !== undefined && (obj.role = message.role);
    return obj;
  },

  create(base?: DeepPartial<MsgActivateSubAccount>): MsgActivateSubAccount {
    return MsgActivateSubAccount.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgActivateSubAccount>): MsgActivateSubAccount {
    const message = createBaseMsgActivateSubAccount();
    message.creator = object.creator ?? "";
    message.mainAddress = object.mainAddress ?? "";
    message.subAddress = object.subAddress ?? "";
    message.role = object.role ?? "";
    return message;
  },
};

function createBaseMsgActivateSubAccountResponse(): MsgActivateSubAccountResponse {
  return {};
}

export const MsgActivateSubAccountResponse = {
  encode(_: MsgActivateSubAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgActivateSubAccountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgActivateSubAccountResponse();
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

  fromJSON(_: any): MsgActivateSubAccountResponse {
    return {};
  },

  toJSON(_: MsgActivateSubAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgActivateSubAccountResponse>): MsgActivateSubAccountResponse {
    return MsgActivateSubAccountResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgActivateSubAccountResponse>): MsgActivateSubAccountResponse {
    const message = createBaseMsgActivateSubAccountResponse();
    return message;
  },
};

function createBaseMsgRemoveSubAccount(): MsgRemoveSubAccount {
  return { creator: "", subAddress: "", mainAddress: "", role: "" };
}

export const MsgRemoveSubAccount = {
  encode(message: MsgRemoveSubAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.subAddress !== "") {
      writer.uint32(18).string(message.subAddress);
    }
    if (message.mainAddress !== "") {
      writer.uint32(26).string(message.mainAddress);
    }
    if (message.role !== "") {
      writer.uint32(34).string(message.role);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveSubAccount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveSubAccount();
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

          message.subAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mainAddress = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.role = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveSubAccount {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      subAddress: isSet(object.subAddress) ? String(object.subAddress) : "",
      mainAddress: isSet(object.mainAddress) ? String(object.mainAddress) : "",
      role: isSet(object.role) ? String(object.role) : "",
    };
  },

  toJSON(message: MsgRemoveSubAccount): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.subAddress !== undefined && (obj.subAddress = message.subAddress);
    message.mainAddress !== undefined && (obj.mainAddress = message.mainAddress);
    message.role !== undefined && (obj.role = message.role);
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveSubAccount>): MsgRemoveSubAccount {
    return MsgRemoveSubAccount.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRemoveSubAccount>): MsgRemoveSubAccount {
    const message = createBaseMsgRemoveSubAccount();
    message.creator = object.creator ?? "";
    message.subAddress = object.subAddress ?? "";
    message.mainAddress = object.mainAddress ?? "";
    message.role = object.role ?? "";
    return message;
  },
};

function createBaseMsgRemoveSubAccountResponse(): MsgRemoveSubAccountResponse {
  return {};
}

export const MsgRemoveSubAccountResponse = {
  encode(_: MsgRemoveSubAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveSubAccountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveSubAccountResponse();
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

  fromJSON(_: any): MsgRemoveSubAccountResponse {
    return {};
  },

  toJSON(_: MsgRemoveSubAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveSubAccountResponse>): MsgRemoveSubAccountResponse {
    return MsgRemoveSubAccountResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgRemoveSubAccountResponse>): MsgRemoveSubAccountResponse {
    const message = createBaseMsgRemoveSubAccountResponse();
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

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateSubAccount(request: MsgCreateSubAccount): Promise<MsgCreateSubAccountResponse>;
  ActivateSubAccount(request: MsgActivateSubAccount): Promise<MsgActivateSubAccountResponse>;
  RemoveSubAccount(request: MsgRemoveSubAccount): Promise<MsgRemoveSubAccountResponse>;
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
    this.service = opts?.service || "Switcheo.carbon.subaccount.Msg";
    this.rpc = rpc;
    this.CreateSubAccount = this.CreateSubAccount.bind(this);
    this.ActivateSubAccount = this.ActivateSubAccount.bind(this);
    this.RemoveSubAccount = this.RemoveSubAccount.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  CreateSubAccount(request: MsgCreateSubAccount): Promise<MsgCreateSubAccountResponse> {
    const data = MsgCreateSubAccount.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateSubAccount", data);
    return promise.then((data) => MsgCreateSubAccountResponse.decode(_m0.Reader.create(data)));
  }

  ActivateSubAccount(request: MsgActivateSubAccount): Promise<MsgActivateSubAccountResponse> {
    const data = MsgActivateSubAccount.encode(request).finish();
    const promise = this.rpc.request(this.service, "ActivateSubAccount", data);
    return promise.then((data) => MsgActivateSubAccountResponse.decode(_m0.Reader.create(data)));
  }

  RemoveSubAccount(request: MsgRemoveSubAccount): Promise<MsgRemoveSubAccountResponse> {
    const data = MsgRemoveSubAccount.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoveSubAccount", data);
    return promise.then((data) => MsgRemoveSubAccountResponse.decode(_m0.Reader.create(data)));
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
