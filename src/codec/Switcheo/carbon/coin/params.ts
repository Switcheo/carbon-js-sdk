/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";

export const protobufPackage = "Switcheo.carbon.coin";

/** Params defines the parameters for the coin module. */
export interface Params {
  withdrawalWindow?: Duration;
  withdrawalThreshold: string;
}

/** ParamsToUpdate allows optional fields for Params. */
export interface ParamsToUpdate {
  withdrawalWindow?: Duration;
  withdrawalThreshold: string;
}

function createBaseParams(): Params {
  return { withdrawalWindow: undefined, withdrawalThreshold: "" };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withdrawalWindow !== undefined) {
      Duration.encode(message.withdrawalWindow, writer.uint32(10).fork()).ldelim();
    }
    if (message.withdrawalThreshold !== "") {
      writer.uint32(18).string(message.withdrawalThreshold);
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

          message.withdrawalWindow = Duration.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.withdrawalThreshold = reader.string();
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
      withdrawalWindow: isSet(object.withdrawalWindow) ? Duration.fromJSON(object.withdrawalWindow) : undefined,
      withdrawalThreshold: isSet(object.withdrawalThreshold) ? String(object.withdrawalThreshold) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.withdrawalWindow !== undefined &&
      (obj.withdrawalWindow = message.withdrawalWindow ? Duration.toJSON(message.withdrawalWindow) : undefined);
    message.withdrawalThreshold !== undefined && (obj.withdrawalThreshold = message.withdrawalThreshold);
    return obj;
  },

  create(base?: DeepPartial<Params>): Params {
    return Params.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.withdrawalWindow = (object.withdrawalWindow !== undefined && object.withdrawalWindow !== null)
      ? Duration.fromPartial(object.withdrawalWindow)
      : undefined;
    message.withdrawalThreshold = object.withdrawalThreshold ?? "";
    return message;
  },
};

function createBaseParamsToUpdate(): ParamsToUpdate {
  return { withdrawalWindow: undefined, withdrawalThreshold: "" };
}

export const ParamsToUpdate = {
  encode(message: ParamsToUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withdrawalWindow !== undefined) {
      Duration.encode(message.withdrawalWindow, writer.uint32(10).fork()).ldelim();
    }
    if (message.withdrawalThreshold !== "") {
      writer.uint32(18).string(message.withdrawalThreshold);
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

          message.withdrawalWindow = Duration.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.withdrawalThreshold = reader.string();
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
      withdrawalWindow: isSet(object.withdrawalWindow) ? Duration.fromJSON(object.withdrawalWindow) : undefined,
      withdrawalThreshold: isSet(object.withdrawalThreshold) ? String(object.withdrawalThreshold) : "",
    };
  },

  toJSON(message: ParamsToUpdate): unknown {
    const obj: any = {};
    message.withdrawalWindow !== undefined &&
      (obj.withdrawalWindow = message.withdrawalWindow ? Duration.toJSON(message.withdrawalWindow) : undefined);
    message.withdrawalThreshold !== undefined && (obj.withdrawalThreshold = message.withdrawalThreshold);
    return obj;
  },

  create(base?: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    return ParamsToUpdate.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    const message = createBaseParamsToUpdate();
    message.withdrawalWindow = (object.withdrawalWindow !== undefined && object.withdrawalWindow !== null)
      ? Duration.fromPartial(object.withdrawalWindow)
      : undefined;
    message.withdrawalThreshold = object.withdrawalThreshold ?? "";
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
