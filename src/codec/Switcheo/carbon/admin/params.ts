/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { UInt32Value } from "../../../google/protobuf/wrappers";

export const protobufPackage = "Switcheo.carbon.admin";

/** Params defines the erc20 module params */
export interface Params {
  version: number;
}

/** ParamsToUpdate allows optional fields for Params. */
export interface ParamsToUpdate {
  version?: number;
}

const baseParams: object = { version: 0 };

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.version !== 0) {
      writer.uint32(8).uint32(message.version);
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
          message.version = reader.uint32();
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
    message.version =
      object.version !== undefined && object.version !== null
        ? Number(object.version)
        : 0;
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.version = object.version ?? 0;
    return message;
  },
};

const baseParamsToUpdate: object = {};

export const ParamsToUpdate = {
  encode(
    message: ParamsToUpdate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.version !== undefined) {
      UInt32Value.encode(
        { value: message.version! },
        writer.uint32(10).fork()
      ).ldelim();
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
          message.version = UInt32Value.decode(reader, reader.uint32()).value;
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
    message.version =
      object.version !== undefined && object.version !== null
        ? Number(object.version)
        : undefined;
    return message;
  },

  toJSON(message: ParamsToUpdate): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    return obj;
  },

  fromPartial(object: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    const message = { ...baseParamsToUpdate } as ParamsToUpdate;
    message.version = object.version ?? undefined;
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
