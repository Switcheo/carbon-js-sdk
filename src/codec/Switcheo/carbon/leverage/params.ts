/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.leverage";

/** Params defines the parameters for the leverage module. */
export interface Params {
  defaultLeverage: string;
  isCrossDefault: boolean;
}

/** ParamsToUpdate allows optional fields for Params. */
export interface ParamsToUpdate {
  defaultLeverage: string;
  isCrossDefault: boolean;
}

const baseParams: object = { defaultLeverage: "", isCrossDefault: false };

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.defaultLeverage !== "") {
      writer.uint32(10).string(message.defaultLeverage);
    }
    if (message.isCrossDefault === true) {
      writer.uint32(16).bool(message.isCrossDefault);
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
          message.defaultLeverage = reader.string();
          break;
        case 2:
          message.isCrossDefault = reader.bool();
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
    message.defaultLeverage =
      object.defaultLeverage !== undefined && object.defaultLeverage !== null
        ? String(object.defaultLeverage)
        : "";
    message.isCrossDefault =
      object.isCrossDefault !== undefined && object.isCrossDefault !== null
        ? Boolean(object.isCrossDefault)
        : false;
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.defaultLeverage !== undefined &&
      (obj.defaultLeverage = message.defaultLeverage);
    message.isCrossDefault !== undefined &&
      (obj.isCrossDefault = message.isCrossDefault);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.defaultLeverage = object.defaultLeverage ?? "";
    message.isCrossDefault = object.isCrossDefault ?? false;
    return message;
  },
};

const baseParamsToUpdate: object = {
  defaultLeverage: "",
  isCrossDefault: false,
};

export const ParamsToUpdate = {
  encode(
    message: ParamsToUpdate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.defaultLeverage !== "") {
      writer.uint32(10).string(message.defaultLeverage);
    }
    if (message.isCrossDefault === true) {
      writer.uint32(16).bool(message.isCrossDefault);
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
          message.defaultLeverage = reader.string();
          break;
        case 2:
          message.isCrossDefault = reader.bool();
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
    message.defaultLeverage =
      object.defaultLeverage !== undefined && object.defaultLeverage !== null
        ? String(object.defaultLeverage)
        : "";
    message.isCrossDefault =
      object.isCrossDefault !== undefined && object.isCrossDefault !== null
        ? Boolean(object.isCrossDefault)
        : false;
    return message;
  },

  toJSON(message: ParamsToUpdate): unknown {
    const obj: any = {};
    message.defaultLeverage !== undefined &&
      (obj.defaultLeverage = message.defaultLeverage);
    message.isCrossDefault !== undefined &&
      (obj.isCrossDefault = message.isCrossDefault);
    return obj;
  },

  fromPartial(object: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    const message = { ...baseParamsToUpdate } as ParamsToUpdate;
    message.defaultLeverage = object.defaultLeverage ?? "";
    message.isCrossDefault = object.isCrossDefault ?? false;
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
