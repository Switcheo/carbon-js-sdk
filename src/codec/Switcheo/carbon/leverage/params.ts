/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { BoolValue } from "../../../google/protobuf/wrappers";

export const protobufPackage = "Switcheo.carbon.leverage";

/** Params defines the parameters for the leverage module. */
export interface Params {
  defaultLeverage: string;
  isCrossDefault: boolean;
}

/** ParamsToUpdate allows optional fields for Params. */
export interface ParamsToUpdate {
  defaultLeverage: string;
  isCrossDefault?: boolean;
}

function createBaseParams(): Params {
  return { defaultLeverage: "", isCrossDefault: false };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defaultLeverage !== "") {
      writer.uint32(10).string(message.defaultLeverage);
    }
    if (message.isCrossDefault === true) {
      writer.uint32(16).bool(message.isCrossDefault);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.defaultLeverage = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.isCrossDefault = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      defaultLeverage: isSet(object.defaultLeverage) ? String(object.defaultLeverage) : "",
      isCrossDefault: isSet(object.isCrossDefault) ? Boolean(object.isCrossDefault) : false,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.defaultLeverage !== undefined && (obj.defaultLeverage = message.defaultLeverage);
    message.isCrossDefault !== undefined && (obj.isCrossDefault = message.isCrossDefault);
    return obj;
  },

  create(base?: DeepPartial<Params>): Params {
    return Params.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.defaultLeverage = object.defaultLeverage ?? "";
    message.isCrossDefault = object.isCrossDefault ?? false;
    return message;
  },
};

function createBaseParamsToUpdate(): ParamsToUpdate {
  return { defaultLeverage: "", isCrossDefault: undefined };
}

export const ParamsToUpdate = {
  encode(message: ParamsToUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defaultLeverage !== "") {
      writer.uint32(10).string(message.defaultLeverage);
    }
    if (message.isCrossDefault !== undefined) {
      BoolValue.encode({ value: message.isCrossDefault! }, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParamsToUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsToUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.defaultLeverage = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.isCrossDefault = BoolValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ParamsToUpdate {
    return {
      defaultLeverage: isSet(object.defaultLeverage) ? String(object.defaultLeverage) : "",
      isCrossDefault: isSet(object.isCrossDefault) ? Boolean(object.isCrossDefault) : undefined,
    };
  },

  toJSON(message: ParamsToUpdate): unknown {
    const obj: any = {};
    message.defaultLeverage !== undefined && (obj.defaultLeverage = message.defaultLeverage);
    message.isCrossDefault !== undefined && (obj.isCrossDefault = message.isCrossDefault);
    return obj;
  },

  create(base?: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    return ParamsToUpdate.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    const message = createBaseParamsToUpdate();
    message.defaultLeverage = object.defaultLeverage ?? "";
    message.isCrossDefault = object.isCrossDefault ?? undefined;
    return message;
  },
};

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
