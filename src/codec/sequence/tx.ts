/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.sequence";

export interface MsgSetSequence {
  creator: string;
  moduleName: string;
  suffix: string;
  sequenceNumber: Long;
}

export interface MsgSetSequenceResponse {}

const baseMsgSetSequence: object = {
  creator: "",
  moduleName: "",
  suffix: "",
  sequenceNumber: Long.UZERO,
};

export const MsgSetSequence = {
  encode(
    message: MsgSetSequence,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.moduleName !== "") {
      writer.uint32(18).string(message.moduleName);
    }
    if (message.suffix !== "") {
      writer.uint32(26).string(message.suffix);
    }
    if (!message.sequenceNumber.isZero()) {
      writer.uint32(32).uint64(message.sequenceNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetSequence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetSequence } as MsgSetSequence;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.moduleName = reader.string();
          break;
        case 3:
          message.suffix = reader.string();
          break;
        case 4:
          message.sequenceNumber = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetSequence {
    const message = { ...baseMsgSetSequence } as MsgSetSequence;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.moduleName =
      object.moduleName !== undefined && object.moduleName !== null
        ? String(object.moduleName)
        : "";
    message.suffix =
      object.suffix !== undefined && object.suffix !== null
        ? String(object.suffix)
        : "";
    message.sequenceNumber =
      object.sequenceNumber !== undefined && object.sequenceNumber !== null
        ? Long.fromString(object.sequenceNumber)
        : Long.UZERO;
    return message;
  },

  toJSON(message: MsgSetSequence): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.moduleName !== undefined && (obj.moduleName = message.moduleName);
    message.suffix !== undefined && (obj.suffix = message.suffix);
    message.sequenceNumber !== undefined &&
      (obj.sequenceNumber = (message.sequenceNumber || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetSequence>): MsgSetSequence {
    const message = { ...baseMsgSetSequence } as MsgSetSequence;
    message.creator = object.creator ?? "";
    message.moduleName = object.moduleName ?? "";
    message.suffix = object.suffix ?? "";
    message.sequenceNumber =
      object.sequenceNumber !== undefined && object.sequenceNumber !== null
        ? Long.fromValue(object.sequenceNumber)
        : Long.UZERO;
    return message;
  },
};

const baseMsgSetSequenceResponse: object = {};

export const MsgSetSequenceResponse = {
  encode(
    _: MsgSetSequenceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetSequenceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetSequenceResponse } as MsgSetSequenceResponse;
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

  fromJSON(_: any): MsgSetSequenceResponse {
    const message = { ...baseMsgSetSequenceResponse } as MsgSetSequenceResponse;
    return message;
  },

  toJSON(_: MsgSetSequenceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSetSequenceResponse>): MsgSetSequenceResponse {
    const message = { ...baseMsgSetSequenceResponse } as MsgSetSequenceResponse;
    return message;
  },
};

export interface Msg {
  SetSequence(request: MsgSetSequence): Promise<MsgSetSequenceResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SetSequence = this.SetSequence.bind(this);
  }
  SetSequence(request: MsgSetSequence): Promise<MsgSetSequenceResponse> {
    const data = MsgSetSequence.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.sequence.Msg",
      "SetSequence",
      data
    );
    return promise.then((data) =>
      MsgSetSequenceResponse.decode(new _m0.Reader(data))
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
