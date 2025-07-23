/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";

export const protobufPackage = "Switcheo.carbon.subaccount";

export interface Params {
  tradingFeeDelegateCooldown?: Duration;
}

export interface ParamsToUpdate {
  tradingFeeDelegateCooldown?: Duration;
}

function createBaseParams(): Params {
  return { tradingFeeDelegateCooldown: undefined };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tradingFeeDelegateCooldown !== undefined) {
      Duration.encode(message.tradingFeeDelegateCooldown, writer.uint32(10).fork()).ldelim();
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

          message.tradingFeeDelegateCooldown = Duration.decode(reader, reader.uint32());
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
      tradingFeeDelegateCooldown: isSet(object.tradingFeeDelegateCooldown)
        ? Duration.fromJSON(object.tradingFeeDelegateCooldown)
        : undefined,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.tradingFeeDelegateCooldown !== undefined &&
      (obj.tradingFeeDelegateCooldown = message.tradingFeeDelegateCooldown
        ? Duration.toJSON(message.tradingFeeDelegateCooldown)
        : undefined);
    return obj;
  },

  create(base?: DeepPartial<Params>): Params {
    return Params.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.tradingFeeDelegateCooldown =
      (object.tradingFeeDelegateCooldown !== undefined && object.tradingFeeDelegateCooldown !== null)
        ? Duration.fromPartial(object.tradingFeeDelegateCooldown)
        : undefined;
    return message;
  },
};

function createBaseParamsToUpdate(): ParamsToUpdate {
  return { tradingFeeDelegateCooldown: undefined };
}

export const ParamsToUpdate = {
  encode(message: ParamsToUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tradingFeeDelegateCooldown !== undefined) {
      Duration.encode(message.tradingFeeDelegateCooldown, writer.uint32(10).fork()).ldelim();
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

          message.tradingFeeDelegateCooldown = Duration.decode(reader, reader.uint32());
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
      tradingFeeDelegateCooldown: isSet(object.tradingFeeDelegateCooldown)
        ? Duration.fromJSON(object.tradingFeeDelegateCooldown)
        : undefined,
    };
  },

  toJSON(message: ParamsToUpdate): unknown {
    const obj: any = {};
    message.tradingFeeDelegateCooldown !== undefined &&
      (obj.tradingFeeDelegateCooldown = message.tradingFeeDelegateCooldown
        ? Duration.toJSON(message.tradingFeeDelegateCooldown)
        : undefined);
    return obj;
  },

  create(base?: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    return ParamsToUpdate.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    const message = createBaseParamsToUpdate();
    message.tradingFeeDelegateCooldown =
      (object.tradingFeeDelegateCooldown !== undefined && object.tradingFeeDelegateCooldown !== null)
        ? Duration.fromPartial(object.tradingFeeDelegateCooldown)
        : undefined;
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
