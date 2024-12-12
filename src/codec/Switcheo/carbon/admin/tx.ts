/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ParamsToUpdate } from "./params";

export const protobufPackage = "Switcheo.carbon.admin";

export interface MsgInitiateAdminTransfer {
  creator: string;
  recipient: string;
}

export interface MsgInitiateAdminTransferResponse {}

export interface MsgAcceptAdminTransfer {
  creator: string;
}

export interface MsgAcceptAdminTransferResponse {}

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

export interface MsgHaltCurrentVersion {
  creator: string;
}

export interface MsgHaltCurrentVersionResponse {}

const baseMsgInitiateAdminTransfer: object = { creator: "", recipient: "" };

export const MsgInitiateAdminTransfer = {
  encode(
    message: MsgInitiateAdminTransfer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgInitiateAdminTransfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgInitiateAdminTransfer,
    } as MsgInitiateAdminTransfer;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInitiateAdminTransfer {
    const message = {
      ...baseMsgInitiateAdminTransfer,
    } as MsgInitiateAdminTransfer;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.recipient =
      object.recipient !== undefined && object.recipient !== null
        ? String(object.recipient)
        : "";
    return message;
  },

  toJSON(message: MsgInitiateAdminTransfer): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgInitiateAdminTransfer>
  ): MsgInitiateAdminTransfer {
    const message = {
      ...baseMsgInitiateAdminTransfer,
    } as MsgInitiateAdminTransfer;
    message.creator = object.creator ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  },
};

const baseMsgInitiateAdminTransferResponse: object = {};

export const MsgInitiateAdminTransferResponse = {
  encode(
    _: MsgInitiateAdminTransferResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgInitiateAdminTransferResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgInitiateAdminTransferResponse,
    } as MsgInitiateAdminTransferResponse;
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

  fromJSON(_: any): MsgInitiateAdminTransferResponse {
    const message = {
      ...baseMsgInitiateAdminTransferResponse,
    } as MsgInitiateAdminTransferResponse;
    return message;
  },

  toJSON(_: MsgInitiateAdminTransferResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgInitiateAdminTransferResponse>
  ): MsgInitiateAdminTransferResponse {
    const message = {
      ...baseMsgInitiateAdminTransferResponse,
    } as MsgInitiateAdminTransferResponse;
    return message;
  },
};

const baseMsgAcceptAdminTransfer: object = { creator: "" };

export const MsgAcceptAdminTransfer = {
  encode(
    message: MsgAcceptAdminTransfer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAcceptAdminTransfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAcceptAdminTransfer } as MsgAcceptAdminTransfer;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAcceptAdminTransfer {
    const message = { ...baseMsgAcceptAdminTransfer } as MsgAcceptAdminTransfer;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    return message;
  },

  toJSON(message: MsgAcceptAdminTransfer): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgAcceptAdminTransfer>
  ): MsgAcceptAdminTransfer {
    const message = { ...baseMsgAcceptAdminTransfer } as MsgAcceptAdminTransfer;
    message.creator = object.creator ?? "";
    return message;
  },
};

const baseMsgAcceptAdminTransferResponse: object = {};

export const MsgAcceptAdminTransferResponse = {
  encode(
    _: MsgAcceptAdminTransferResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAcceptAdminTransferResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAcceptAdminTransferResponse,
    } as MsgAcceptAdminTransferResponse;
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

  fromJSON(_: any): MsgAcceptAdminTransferResponse {
    const message = {
      ...baseMsgAcceptAdminTransferResponse,
    } as MsgAcceptAdminTransferResponse;
    return message;
  },

  toJSON(_: MsgAcceptAdminTransferResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAcceptAdminTransferResponse>
  ): MsgAcceptAdminTransferResponse {
    const message = {
      ...baseMsgAcceptAdminTransferResponse,
    } as MsgAcceptAdminTransferResponse;
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

const baseMsgHaltCurrentVersion: object = { creator: "" };

export const MsgHaltCurrentVersion = {
  encode(
    message: MsgHaltCurrentVersion,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgHaltCurrentVersion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgHaltCurrentVersion } as MsgHaltCurrentVersion;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgHaltCurrentVersion {
    const message = { ...baseMsgHaltCurrentVersion } as MsgHaltCurrentVersion;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    return message;
  },

  toJSON(message: MsgHaltCurrentVersion): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgHaltCurrentVersion>
  ): MsgHaltCurrentVersion {
    const message = { ...baseMsgHaltCurrentVersion } as MsgHaltCurrentVersion;
    message.creator = object.creator ?? "";
    return message;
  },
};

const baseMsgHaltCurrentVersionResponse: object = {};

export const MsgHaltCurrentVersionResponse = {
  encode(
    _: MsgHaltCurrentVersionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgHaltCurrentVersionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgHaltCurrentVersionResponse,
    } as MsgHaltCurrentVersionResponse;
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

  fromJSON(_: any): MsgHaltCurrentVersionResponse {
    const message = {
      ...baseMsgHaltCurrentVersionResponse,
    } as MsgHaltCurrentVersionResponse;
    return message;
  },

  toJSON(_: MsgHaltCurrentVersionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgHaltCurrentVersionResponse>
  ): MsgHaltCurrentVersionResponse {
    const message = {
      ...baseMsgHaltCurrentVersionResponse,
    } as MsgHaltCurrentVersionResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  InitiateAdminTransfer(
    request: MsgInitiateAdminTransfer
  ): Promise<MsgInitiateAdminTransferResponse>;
  AcceptAdminTransfer(
    request: MsgAcceptAdminTransfer
  ): Promise<MsgAcceptAdminTransferResponse>;
  /**
   * UpdateParams defines a governance operation for updating the module
   * parameters. The authority is hard-coded to the x/gov module account.
   * Since: cosmos-sdk 0.47
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  HaltCurrentVersion(
    request: MsgHaltCurrentVersion
  ): Promise<MsgHaltCurrentVersionResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.InitiateAdminTransfer = this.InitiateAdminTransfer.bind(this);
    this.AcceptAdminTransfer = this.AcceptAdminTransfer.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
    this.HaltCurrentVersion = this.HaltCurrentVersion.bind(this);
  }
  InitiateAdminTransfer(
    request: MsgInitiateAdminTransfer
  ): Promise<MsgInitiateAdminTransferResponse> {
    const data = MsgInitiateAdminTransfer.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.admin.Msg",
      "InitiateAdminTransfer",
      data
    );
    return promise.then((data) =>
      MsgInitiateAdminTransferResponse.decode(new _m0.Reader(data))
    );
  }

  AcceptAdminTransfer(
    request: MsgAcceptAdminTransfer
  ): Promise<MsgAcceptAdminTransferResponse> {
    const data = MsgAcceptAdminTransfer.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.admin.Msg",
      "AcceptAdminTransfer",
      data
    );
    return promise.then((data) =>
      MsgAcceptAdminTransferResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.admin.Msg",
      "UpdateParams",
      data
    );
    return promise.then((data) =>
      MsgUpdateParamsResponse.decode(new _m0.Reader(data))
    );
  }

  HaltCurrentVersion(
    request: MsgHaltCurrentVersion
  ): Promise<MsgHaltCurrentVersionResponse> {
    const data = MsgHaltCurrentVersion.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.admin.Msg",
      "HaltCurrentVersion",
      data
    );
    return promise.then((data) =>
      MsgHaltCurrentVersionResponse.decode(new _m0.Reader(data))
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
