/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { UInt64Value } from "../../../google/protobuf/wrappers";

export const protobufPackage = "Switcheo.carbon.liquiditypool";

export interface Params {
  rewardReductionThreshold: Long;
  numQuotes: Long;
}

export interface ParamsToUpdate {
  rewardReductionThreshold?: Long;
  numQuotes?: Long;
}

const baseParams: object = {
  rewardReductionThreshold: Long.UZERO,
  numQuotes: Long.UZERO,
};

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.rewardReductionThreshold.isZero()) {
      writer.uint32(8).uint64(message.rewardReductionThreshold);
    }
    if (!message.numQuotes.isZero()) {
      writer.uint32(16).uint64(message.numQuotes);
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
          message.rewardReductionThreshold = reader.uint64() as Long;
          break;
        case 2:
          message.numQuotes = reader.uint64() as Long;
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
    message.rewardReductionThreshold =
      object.rewardReductionThreshold !== undefined &&
      object.rewardReductionThreshold !== null
        ? Long.fromString(object.rewardReductionThreshold)
        : Long.UZERO;
    message.numQuotes =
      object.numQuotes !== undefined && object.numQuotes !== null
        ? Long.fromString(object.numQuotes)
        : Long.UZERO;
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.rewardReductionThreshold !== undefined &&
      (obj.rewardReductionThreshold = (
        message.rewardReductionThreshold || Long.UZERO
      ).toString());
    message.numQuotes !== undefined &&
      (obj.numQuotes = (message.numQuotes || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.rewardReductionThreshold =
      object.rewardReductionThreshold !== undefined &&
      object.rewardReductionThreshold !== null
        ? Long.fromValue(object.rewardReductionThreshold)
        : Long.UZERO;
    message.numQuotes =
      object.numQuotes !== undefined && object.numQuotes !== null
        ? Long.fromValue(object.numQuotes)
        : Long.UZERO;
    return message;
  },
};

const baseParamsToUpdate: object = {};

export const ParamsToUpdate = {
  encode(
    message: ParamsToUpdate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rewardReductionThreshold !== undefined) {
      UInt64Value.encode(
        { value: message.rewardReductionThreshold! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.numQuotes !== undefined) {
      UInt64Value.encode(
        { value: message.numQuotes! },
        writer.uint32(18).fork()
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
          message.rewardReductionThreshold = UInt64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 2:
          message.numQuotes = UInt64Value.decode(reader, reader.uint32()).value;
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
    message.rewardReductionThreshold =
      object.rewardReductionThreshold !== undefined &&
      object.rewardReductionThreshold !== null
        ? Long.fromValue(object.rewardReductionThreshold)
        : undefined;
    message.numQuotes =
      object.numQuotes !== undefined && object.numQuotes !== null
        ? Long.fromValue(object.numQuotes)
        : undefined;
    return message;
  },

  toJSON(message: ParamsToUpdate): unknown {
    const obj: any = {};
    message.rewardReductionThreshold !== undefined &&
      (obj.rewardReductionThreshold = message.rewardReductionThreshold);
    message.numQuotes !== undefined && (obj.numQuotes = message.numQuotes);
    return obj;
  },

  fromPartial(object: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    const message = { ...baseParamsToUpdate } as ParamsToUpdate;
    message.rewardReductionThreshold =
      object.rewardReductionThreshold !== undefined &&
      object.rewardReductionThreshold !== null
        ? Long.fromValue(object.rewardReductionThreshold)
        : undefined;
    message.numQuotes =
      object.numQuotes !== undefined && object.numQuotes !== null
        ? Long.fromValue(object.numQuotes)
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
