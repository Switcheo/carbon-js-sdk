/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.bank";

export interface MsgEnableSend {
  creator: string;
  denom: string;
}

export interface MsgEnableSendResponse {
  denom: string;
}

export interface MsgDisableSend {
  creator: string;
  denom: string;
}

export interface MsgDisableSendResponse {
  denom: string;
}

const baseMsgEnableSend: object = { creator: "", denom: "" };

export const MsgEnableSend = {
  encode(
    message: MsgEnableSend,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnableSend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgEnableSend } as MsgEnableSend;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEnableSend {
    const message = { ...baseMsgEnableSend } as MsgEnableSend;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: MsgEnableSend): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgEnableSend>): MsgEnableSend {
    const message = { ...baseMsgEnableSend } as MsgEnableSend;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseMsgEnableSendResponse: object = { denom: "" };

export const MsgEnableSendResponse = {
  encode(
    message: MsgEnableSendResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgEnableSendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgEnableSendResponse } as MsgEnableSendResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEnableSendResponse {
    const message = { ...baseMsgEnableSendResponse } as MsgEnableSendResponse;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: MsgEnableSendResponse): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgEnableSendResponse>
  ): MsgEnableSendResponse {
    const message = { ...baseMsgEnableSendResponse } as MsgEnableSendResponse;
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseMsgDisableSend: object = { creator: "", denom: "" };

export const MsgDisableSend = {
  encode(
    message: MsgDisableSend,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisableSend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDisableSend } as MsgDisableSend;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDisableSend {
    const message = { ...baseMsgDisableSend } as MsgDisableSend;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: MsgDisableSend): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDisableSend>): MsgDisableSend {
    const message = { ...baseMsgDisableSend } as MsgDisableSend;
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseMsgDisableSendResponse: object = { denom: "" };

export const MsgDisableSendResponse = {
  encode(
    message: MsgDisableSendResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDisableSendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDisableSendResponse } as MsgDisableSendResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDisableSendResponse {
    const message = { ...baseMsgDisableSendResponse } as MsgDisableSendResponse;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: MsgDisableSendResponse): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDisableSendResponse>
  ): MsgDisableSendResponse {
    const message = { ...baseMsgDisableSendResponse } as MsgDisableSendResponse;
    message.denom = object.denom ?? "";
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  EnableSend(request: MsgEnableSend): Promise<MsgEnableSendResponse>;
  DisableSend(request: MsgDisableSend): Promise<MsgDisableSendResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.EnableSend = this.EnableSend.bind(this);
    this.DisableSend = this.DisableSend.bind(this);
  }
  EnableSend(request: MsgEnableSend): Promise<MsgEnableSendResponse> {
    const data = MsgEnableSend.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bank.Msg",
      "EnableSend",
      data
    );
    return promise.then((data) =>
      MsgEnableSendResponse.decode(new _m0.Reader(data))
    );
  }

  DisableSend(request: MsgDisableSend): Promise<MsgDisableSendResponse> {
    const data = MsgDisableSend.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bank.Msg",
      "DisableSend",
      data
    );
    return promise.then((data) =>
      MsgDisableSendResponse.decode(new _m0.Reader(data))
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
