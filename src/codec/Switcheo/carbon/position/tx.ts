/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.position";

export interface MsgSetMargin {
  creator: string;
  marketId: string;
  margin: string;
}

export interface MsgSetMarginResponse {}

const baseMsgSetMargin: object = { creator: "", marketId: "", margin: "" };

export const MsgSetMargin = {
  encode(
    message: MsgSetMargin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetMargin } as MsgSetMargin;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        case 3:
          message.margin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetMargin {
    const message = { ...baseMsgSetMargin } as MsgSetMargin;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.margin =
      object.margin !== undefined && object.margin !== null
        ? String(object.margin)
        : "";
    return message;
  },

  toJSON(message: MsgSetMargin): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.margin !== undefined && (obj.margin = message.margin);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetMargin>): MsgSetMargin {
    const message = { ...baseMsgSetMargin } as MsgSetMargin;
    message.creator = object.creator ?? "";
    message.marketId = object.marketId ?? "";
    message.margin = object.margin ?? "";
    return message;
  },
};

const baseMsgSetMarginResponse: object = {};

export const MsgSetMarginResponse = {
  encode(
    _: MsgSetMarginResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetMarginResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetMarginResponse } as MsgSetMarginResponse;
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

  fromJSON(_: any): MsgSetMarginResponse {
    const message = { ...baseMsgSetMarginResponse } as MsgSetMarginResponse;
    return message;
  },

  toJSON(_: MsgSetMarginResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSetMarginResponse>): MsgSetMarginResponse {
    const message = { ...baseMsgSetMarginResponse } as MsgSetMarginResponse;
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
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SetMargin = this.SetMargin.bind(this);
  }
  SetMargin(request: MsgSetMargin): Promise<MsgSetMarginResponse> {
    const data = MsgSetMargin.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.position.Msg",
      "SetMargin",
      data
    );
    return promise.then((data) =>
      MsgSetMarginResponse.decode(new _m0.Reader(data))
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
