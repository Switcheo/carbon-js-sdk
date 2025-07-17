/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.position";

export interface MsgSetMargin {
  creator: string;
  marketId: string;
  margin: string;
}

export interface MsgSetMarginResponse {
}

function createBaseMsgSetMargin(): MsgSetMargin {
  return { creator: "", marketId: "", margin: "" };
}

export const MsgSetMargin = {
  encode(message: MsgSetMargin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.margin !== "") {
      writer.uint32(26).string(message.margin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMargin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMargin();
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

          message.marketId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.margin = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetMargin {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      margin: isSet(object.margin) ? String(object.margin) : "",
    };
  },

  toJSON(message: MsgSetMargin): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.margin !== undefined && (obj.margin = message.margin);
    return obj;
  },

  create(base?: DeepPartial<MsgSetMargin>): MsgSetMargin {
    return MsgSetMargin.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSetMargin>): MsgSetMargin {
    const message = createBaseMsgSetMargin();
    message.creator = object.creator ?? "";
    message.marketId = object.marketId ?? "";
    message.margin = object.margin ?? "";
    return message;
  },
};

function createBaseMsgSetMarginResponse(): MsgSetMarginResponse {
  return {};
}

export const MsgSetMarginResponse = {
  encode(_: MsgSetMarginResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMarginResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMarginResponse();
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

  fromJSON(_: any): MsgSetMarginResponse {
    return {};
  },

  toJSON(_: MsgSetMarginResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSetMarginResponse>): MsgSetMarginResponse {
    return MsgSetMarginResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgSetMarginResponse>): MsgSetMarginResponse {
    const message = createBaseMsgSetMarginResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SetMargin(request: MsgSetMargin): Promise<MsgSetMarginResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.position.Msg";
    this.rpc = rpc;
    this.SetMargin = this.SetMargin.bind(this);
  }
  SetMargin(request: MsgSetMargin): Promise<MsgSetMarginResponse> {
    const data = MsgSetMargin.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetMargin", data);
    return promise.then((data) => MsgSetMarginResponse.decode(_m0.Reader.create(data)));
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
