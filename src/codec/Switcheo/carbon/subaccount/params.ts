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

const baseParams: object = {};

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tradingFeeDelegateCooldown !== undefined) {
      Duration.encode(
        message.tradingFeeDelegateCooldown,
        writer.uint32(10).fork()
      ).ldelim();
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
          message.tradingFeeDelegateCooldown = Duration.decode(
            reader,
            reader.uint32()
          );
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
    message.tradingFeeDelegateCooldown =
      object.tradingFeeDelegateCooldown !== undefined &&
      object.tradingFeeDelegateCooldown !== null
        ? Duration.fromJSON(object.tradingFeeDelegateCooldown)
        : undefined;
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.tradingFeeDelegateCooldown !== undefined &&
      (obj.tradingFeeDelegateCooldown = message.tradingFeeDelegateCooldown
        ? Duration.toJSON(message.tradingFeeDelegateCooldown)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.tradingFeeDelegateCooldown =
      object.tradingFeeDelegateCooldown !== undefined &&
      object.tradingFeeDelegateCooldown !== null
        ? Duration.fromPartial(object.tradingFeeDelegateCooldown)
        : undefined;
    return message;
  },
};

const baseParamsToUpdate: object = {};

export const ParamsToUpdate = {
  encode(
    message: ParamsToUpdate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tradingFeeDelegateCooldown !== undefined) {
      Duration.encode(
        message.tradingFeeDelegateCooldown,
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
          message.tradingFeeDelegateCooldown = Duration.decode(
            reader,
            reader.uint32()
          );
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
    message.tradingFeeDelegateCooldown =
      object.tradingFeeDelegateCooldown !== undefined &&
      object.tradingFeeDelegateCooldown !== null
        ? Duration.fromJSON(object.tradingFeeDelegateCooldown)
        : undefined;
    return message;
  },

  toJSON(message: ParamsToUpdate): unknown {
    const obj: any = {};
    message.tradingFeeDelegateCooldown !== undefined &&
      (obj.tradingFeeDelegateCooldown = message.tradingFeeDelegateCooldown
        ? Duration.toJSON(message.tradingFeeDelegateCooldown)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    const message = { ...baseParamsToUpdate } as ParamsToUpdate;
    message.tradingFeeDelegateCooldown =
      object.tradingFeeDelegateCooldown !== undefined &&
      object.tradingFeeDelegateCooldown !== null
        ? Duration.fromPartial(object.tradingFeeDelegateCooldown)
        : undefined;
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
