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

export interface MsgCreateSubAccountResponse {}

export interface MsgActivateSubAccount {
  creator: string;
  mainAddress: string;
  subAddress: string;
  role: string;
}

export interface MsgActivateSubAccountResponse {}

export interface MsgRemoveSubAccount {
  creator: string;
  subAddress: string;
  mainAddress: string;
  role: string;
}

export interface MsgRemoveSubAccountResponse {}

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

const baseMsgCreateSubAccount: object = {
  creator: "",
  subAddress: "",
  mainAddress: "",
  role: "",
};

export const MsgCreateSubAccount = {
  encode(
    message: MsgCreateSubAccount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateSubAccount } as MsgCreateSubAccount;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.subAddress = reader.string();
          break;
        case 3:
          message.mainAddress = reader.string();
          break;
        case 4:
          message.role = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateSubAccount {
    const message = { ...baseMsgCreateSubAccount } as MsgCreateSubAccount;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.subAddress =
      object.subAddress !== undefined && object.subAddress !== null
        ? String(object.subAddress)
        : "";
    message.mainAddress =
      object.mainAddress !== undefined && object.mainAddress !== null
        ? String(object.mainAddress)
        : "";
    message.role =
      object.role !== undefined && object.role !== null
        ? String(object.role)
        : "";
    return message;
  },

  toJSON(message: MsgCreateSubAccount): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.subAddress !== undefined && (obj.subAddress = message.subAddress);
    message.mainAddress !== undefined &&
      (obj.mainAddress = message.mainAddress);
    message.role !== undefined && (obj.role = message.role);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateSubAccount>): MsgCreateSubAccount {
    const message = { ...baseMsgCreateSubAccount } as MsgCreateSubAccount;
    message.creator = object.creator ?? "";
    message.subAddress = object.subAddress ?? "";
    message.mainAddress = object.mainAddress ?? "";
    message.role = object.role ?? "";
    return message;
  },
};

const baseMsgCreateSubAccountResponse: object = {};

export const MsgCreateSubAccountResponse = {
  encode(
    _: MsgCreateSubAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateSubAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateSubAccountResponse,
    } as MsgCreateSubAccountResponse;
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

  fromJSON(_: any): MsgCreateSubAccountResponse {
    const message = {
      ...baseMsgCreateSubAccountResponse,
    } as MsgCreateSubAccountResponse;
    return message;
  },

  toJSON(_: MsgCreateSubAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateSubAccountResponse>
  ): MsgCreateSubAccountResponse {
    const message = {
      ...baseMsgCreateSubAccountResponse,
    } as MsgCreateSubAccountResponse;
    return message;
  },
};

const baseMsgActivateSubAccount: object = {
  creator: "",
  mainAddress: "",
  subAddress: "",
  role: "",
};

export const MsgActivateSubAccount = {
  encode(
    message: MsgActivateSubAccount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgActivateSubAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgActivateSubAccount } as MsgActivateSubAccount;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.mainAddress = reader.string();
          break;
        case 3:
          message.subAddress = reader.string();
          break;
        case 4:
          message.role = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgActivateSubAccount {
    const message = { ...baseMsgActivateSubAccount } as MsgActivateSubAccount;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.mainAddress =
      object.mainAddress !== undefined && object.mainAddress !== null
        ? String(object.mainAddress)
        : "";
    message.subAddress =
      object.subAddress !== undefined && object.subAddress !== null
        ? String(object.subAddress)
        : "";
    message.role =
      object.role !== undefined && object.role !== null
        ? String(object.role)
        : "";
    return message;
  },

  toJSON(message: MsgActivateSubAccount): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.mainAddress !== undefined &&
      (obj.mainAddress = message.mainAddress);
    message.subAddress !== undefined && (obj.subAddress = message.subAddress);
    message.role !== undefined && (obj.role = message.role);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgActivateSubAccount>
  ): MsgActivateSubAccount {
    const message = { ...baseMsgActivateSubAccount } as MsgActivateSubAccount;
    message.creator = object.creator ?? "";
    message.mainAddress = object.mainAddress ?? "";
    message.subAddress = object.subAddress ?? "";
    message.role = object.role ?? "";
    return message;
  },
};

const baseMsgActivateSubAccountResponse: object = {};

export const MsgActivateSubAccountResponse = {
  encode(
    _: MsgActivateSubAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgActivateSubAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgActivateSubAccountResponse,
    } as MsgActivateSubAccountResponse;
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

  fromJSON(_: any): MsgActivateSubAccountResponse {
    const message = {
      ...baseMsgActivateSubAccountResponse,
    } as MsgActivateSubAccountResponse;
    return message;
  },

  toJSON(_: MsgActivateSubAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgActivateSubAccountResponse>
  ): MsgActivateSubAccountResponse {
    const message = {
      ...baseMsgActivateSubAccountResponse,
    } as MsgActivateSubAccountResponse;
    return message;
  },
};

const baseMsgRemoveSubAccount: object = {
  creator: "",
  subAddress: "",
  mainAddress: "",
  role: "",
};

export const MsgRemoveSubAccount = {
  encode(
    message: MsgRemoveSubAccount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRemoveSubAccount } as MsgRemoveSubAccount;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.subAddress = reader.string();
          break;
        case 3:
          message.mainAddress = reader.string();
          break;
        case 4:
          message.role = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveSubAccount {
    const message = { ...baseMsgRemoveSubAccount } as MsgRemoveSubAccount;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.subAddress =
      object.subAddress !== undefined && object.subAddress !== null
        ? String(object.subAddress)
        : "";
    message.mainAddress =
      object.mainAddress !== undefined && object.mainAddress !== null
        ? String(object.mainAddress)
        : "";
    message.role =
      object.role !== undefined && object.role !== null
        ? String(object.role)
        : "";
    return message;
  },

  toJSON(message: MsgRemoveSubAccount): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.subAddress !== undefined && (obj.subAddress = message.subAddress);
    message.mainAddress !== undefined &&
      (obj.mainAddress = message.mainAddress);
    message.role !== undefined && (obj.role = message.role);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRemoveSubAccount>): MsgRemoveSubAccount {
    const message = { ...baseMsgRemoveSubAccount } as MsgRemoveSubAccount;
    message.creator = object.creator ?? "";
    message.subAddress = object.subAddress ?? "";
    message.mainAddress = object.mainAddress ?? "";
    message.role = object.role ?? "";
    return message;
  },
};

const baseMsgRemoveSubAccountResponse: object = {};

export const MsgRemoveSubAccountResponse = {
  encode(
    _: MsgRemoveSubAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemoveSubAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRemoveSubAccountResponse,
    } as MsgRemoveSubAccountResponse;
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

  fromJSON(_: any): MsgRemoveSubAccountResponse {
    const message = {
      ...baseMsgRemoveSubAccountResponse,
    } as MsgRemoveSubAccountResponse;
    return message;
  },

  toJSON(_: MsgRemoveSubAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRemoveSubAccountResponse>
  ): MsgRemoveSubAccountResponse {
    const message = {
      ...baseMsgRemoveSubAccountResponse,
    } as MsgRemoveSubAccountResponse;
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

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateSubAccount(
    request: MsgCreateSubAccount
  ): Promise<MsgCreateSubAccountResponse>;
  ActivateSubAccount(
    request: MsgActivateSubAccount
  ): Promise<MsgActivateSubAccountResponse>;
  RemoveSubAccount(
    request: MsgRemoveSubAccount
  ): Promise<MsgRemoveSubAccountResponse>;
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
    this.CreateSubAccount = this.CreateSubAccount.bind(this);
    this.ActivateSubAccount = this.ActivateSubAccount.bind(this);
    this.RemoveSubAccount = this.RemoveSubAccount.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  CreateSubAccount(
    request: MsgCreateSubAccount
  ): Promise<MsgCreateSubAccountResponse> {
    const data = MsgCreateSubAccount.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.subaccount.Msg",
      "CreateSubAccount",
      data
    );
    return promise.then((data) =>
      MsgCreateSubAccountResponse.decode(new _m0.Reader(data))
    );
  }

  ActivateSubAccount(
    request: MsgActivateSubAccount
  ): Promise<MsgActivateSubAccountResponse> {
    const data = MsgActivateSubAccount.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.subaccount.Msg",
      "ActivateSubAccount",
      data
    );
    return promise.then((data) =>
      MsgActivateSubAccountResponse.decode(new _m0.Reader(data))
    );
  }

  RemoveSubAccount(
    request: MsgRemoveSubAccount
  ): Promise<MsgRemoveSubAccountResponse> {
    const data = MsgRemoveSubAccount.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.subaccount.Msg",
      "RemoveSubAccount",
      data
    );
    return promise.then((data) =>
      MsgRemoveSubAccountResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.subaccount.Msg",
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
