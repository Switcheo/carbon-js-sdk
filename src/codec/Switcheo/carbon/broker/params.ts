/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.broker";

/** Params defines the parameters for the broker module. */
export interface Params {
  futuresInvariantBufferBps: string;
}

/** ParamsToUpdate allows optional fields for Params. */
export interface ParamsToUpdate {
  futuresInvariantBufferBps: string;
}

const baseParams: object = { futuresInvariantBufferBps: "" };

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.futuresInvariantBufferBps !== "") {
      writer.uint32(10).string(message.futuresInvariantBufferBps);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.futuresInvariantBufferBps = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    message.futuresInvariantBufferBps =
      object.futuresInvariantBufferBps !== undefined &&
      object.futuresInvariantBufferBps !== null
        ? String(object.futuresInvariantBufferBps)
        : "";
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.futuresInvariantBufferBps !== undefined &&
      (obj.futuresInvariantBufferBps = message.futuresInvariantBufferBps);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.futuresInvariantBufferBps = object.futuresInvariantBufferBps ?? "";
    return message;
  },
};

const baseParamsToUpdate: object = { futuresInvariantBufferBps: "" };

export const ParamsToUpdate = {
  encode(
    message: ParamsToUpdate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.futuresInvariantBufferBps !== "") {
      writer.uint32(10).string(message.futuresInvariantBufferBps);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParamsToUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParamsToUpdate } as ParamsToUpdate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.futuresInvariantBufferBps = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ParamsToUpdate {
    const message = { ...baseParamsToUpdate } as ParamsToUpdate;
    message.futuresInvariantBufferBps =
      object.futuresInvariantBufferBps !== undefined &&
      object.futuresInvariantBufferBps !== null
        ? String(object.futuresInvariantBufferBps)
        : "";
    return message;
  },

  toJSON(message: ParamsToUpdate): unknown {
    const obj: any = {};
    message.futuresInvariantBufferBps !== undefined &&
      (obj.futuresInvariantBufferBps = message.futuresInvariantBufferBps);
    return obj;
  },

  fromPartial(object: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    const message = { ...baseParamsToUpdate } as ParamsToUpdate;
    message.futuresInvariantBufferBps = object.futuresInvariantBufferBps ?? "";
    return message;
  },
};

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
