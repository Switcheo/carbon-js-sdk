/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

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

/** Msg defines the Msg service. */
export interface Msg {
  InitiateAdminTransfer(
    request: MsgInitiateAdminTransfer
  ): Promise<MsgInitiateAdminTransferResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  AcceptAdminTransfer(
    request: MsgAcceptAdminTransfer
  ): Promise<MsgAcceptAdminTransferResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.InitiateAdminTransfer = this.InitiateAdminTransfer.bind(this);
    this.AcceptAdminTransfer = this.AcceptAdminTransfer.bind(this);
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
