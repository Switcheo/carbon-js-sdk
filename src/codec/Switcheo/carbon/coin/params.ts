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

const baseParams: object = { withdrawalThreshold: "" };

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.withdrawalWindow !== undefined) {
      Duration.encode(
        message.withdrawalWindow,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.withdrawalThreshold !== "") {
      writer.uint32(18).string(message.withdrawalThreshold);
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
          message.withdrawalWindow = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.withdrawalThreshold = reader.string();
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
    message.withdrawalWindow =
      object.withdrawalWindow !== undefined && object.withdrawalWindow !== null
        ? Duration.fromJSON(object.withdrawalWindow)
        : undefined;
    message.withdrawalThreshold =
      object.withdrawalThreshold !== undefined &&
      object.withdrawalThreshold !== null
        ? String(object.withdrawalThreshold)
        : "";
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.withdrawalWindow !== undefined &&
      (obj.withdrawalWindow = message.withdrawalWindow
        ? Duration.toJSON(message.withdrawalWindow)
        : undefined);
    message.withdrawalThreshold !== undefined &&
      (obj.withdrawalThreshold = message.withdrawalThreshold);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.withdrawalWindow =
      object.withdrawalWindow !== undefined && object.withdrawalWindow !== null
        ? Duration.fromPartial(object.withdrawalWindow)
        : undefined;
    message.withdrawalThreshold = object.withdrawalThreshold ?? "";
    return message;
  },
};

const baseParamsToUpdate: object = { withdrawalThreshold: "" };

export const ParamsToUpdate = {
  encode(
    message: ParamsToUpdate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.withdrawalWindow !== undefined) {
      Duration.encode(
        message.withdrawalWindow,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.withdrawalThreshold !== "") {
      writer.uint32(18).string(message.withdrawalThreshold);
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
          message.withdrawalWindow = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.withdrawalThreshold = reader.string();
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
    message.withdrawalWindow =
      object.withdrawalWindow !== undefined && object.withdrawalWindow !== null
        ? Duration.fromJSON(object.withdrawalWindow)
        : undefined;
    message.withdrawalThreshold =
      object.withdrawalThreshold !== undefined &&
      object.withdrawalThreshold !== null
        ? String(object.withdrawalThreshold)
        : "";
    return message;
  },

  toJSON(message: ParamsToUpdate): unknown {
    const obj: any = {};
    message.withdrawalWindow !== undefined &&
      (obj.withdrawalWindow = message.withdrawalWindow
        ? Duration.toJSON(message.withdrawalWindow)
        : undefined);
    message.withdrawalThreshold !== undefined &&
      (obj.withdrawalThreshold = message.withdrawalThreshold);
    return obj;
  },

  fromPartial(object: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    const message = { ...baseParamsToUpdate } as ParamsToUpdate;
    message.withdrawalWindow =
      object.withdrawalWindow !== undefined && object.withdrawalWindow !== null
        ? Duration.fromPartial(object.withdrawalWindow)
        : undefined;
    message.withdrawalThreshold = object.withdrawalThreshold ?? "";
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
