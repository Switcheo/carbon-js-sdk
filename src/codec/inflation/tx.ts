/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.inflation";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgEnableInflation {
  creator: string;
}

export interface MsgEnableInflationResponse {}

const baseMsgEnableInflation: object = { creator: "" };

export const MsgEnableInflation = {
  encode(
    message: MsgEnableInflation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnableInflation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgEnableInflation } as MsgEnableInflation;
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

  fromJSON(object: any): MsgEnableInflation {
    const message = { ...baseMsgEnableInflation } as MsgEnableInflation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgEnableInflation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgEnableInflation>): MsgEnableInflation {
    const message = { ...baseMsgEnableInflation } as MsgEnableInflation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgEnableInflationResponse: object = {};

export const MsgEnableInflationResponse = {
  encode(
    _: MsgEnableInflationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgEnableInflationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgEnableInflationResponse,
    } as MsgEnableInflationResponse;
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

  fromJSON(_: any): MsgEnableInflationResponse {
    const message = {
      ...baseMsgEnableInflationResponse,
    } as MsgEnableInflationResponse;
    return message;
  },

  toJSON(_: MsgEnableInflationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgEnableInflationResponse>
  ): MsgEnableInflationResponse {
    const message = {
      ...baseMsgEnableInflationResponse,
    } as MsgEnableInflationResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  EnableInflation(
    request: MsgEnableInflation
  ): Promise<MsgEnableInflationResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.EnableInflation = this.EnableInflation.bind(this);
  }
  EnableInflation(
    request: MsgEnableInflation
  ): Promise<MsgEnableInflationResponse> {
    const data = MsgEnableInflation.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.inflation.Msg",
      "EnableInflation",
      data
    );
    return promise.then((data) =>
      MsgEnableInflationResponse.decode(new _m0.Reader(data))
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
