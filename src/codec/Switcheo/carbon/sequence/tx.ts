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

export interface MsgSetSequenceResponse {
}

function createBaseMsgSetSequence(): MsgSetSequence {
  return { creator: "", moduleName: "", suffix: "", sequenceNumber: Long.UZERO };
}

export const MsgSetSequence = {
  encode(message: MsgSetSequence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetSequence();
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

          message.moduleName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.suffix = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.sequenceNumber = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetSequence {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      moduleName: isSet(object.moduleName) ? String(object.moduleName) : "",
      suffix: isSet(object.suffix) ? String(object.suffix) : "",
      sequenceNumber: isSet(object.sequenceNumber) ? Long.fromValue(object.sequenceNumber) : Long.UZERO,
    };
  },

  toJSON(message: MsgSetSequence): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.moduleName !== undefined && (obj.moduleName = message.moduleName);
    message.suffix !== undefined && (obj.suffix = message.suffix);
    message.sequenceNumber !== undefined && (obj.sequenceNumber = (message.sequenceNumber || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<MsgSetSequence>): MsgSetSequence {
    return MsgSetSequence.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSetSequence>): MsgSetSequence {
    const message = createBaseMsgSetSequence();
    message.creator = object.creator ?? "";
    message.moduleName = object.moduleName ?? "";
    message.suffix = object.suffix ?? "";
    message.sequenceNumber = (object.sequenceNumber !== undefined && object.sequenceNumber !== null)
      ? Long.fromValue(object.sequenceNumber)
      : Long.UZERO;
    return message;
  },
};

function createBaseMsgSetSequenceResponse(): MsgSetSequenceResponse {
  return {};
}

export const MsgSetSequenceResponse = {
  encode(_: MsgSetSequenceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetSequenceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetSequenceResponse();
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

  fromJSON(_: any): MsgSetSequenceResponse {
    return {};
  },

  toJSON(_: MsgSetSequenceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSetSequenceResponse>): MsgSetSequenceResponse {
    return MsgSetSequenceResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgSetSequenceResponse>): MsgSetSequenceResponse {
    const message = createBaseMsgSetSequenceResponse();
    return message;
  },
};

export interface Msg {
  SetSequence(request: MsgSetSequence): Promise<MsgSetSequenceResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.sequence.Msg";
    this.rpc = rpc;
    this.SetSequence = this.SetSequence.bind(this);
  }
  SetSequence(request: MsgSetSequence): Promise<MsgSetSequenceResponse> {
    const data = MsgSetSequence.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetSequence", data);
    return promise.then((data) => MsgSetSequenceResponse.decode(_m0.Reader.create(data)));
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
