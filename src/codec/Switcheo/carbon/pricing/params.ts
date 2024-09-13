/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { UInt32Value } from "../../../google/protobuf/wrappers";

export const protobufPackage = "Switcheo.carbon.pricing";

export interface Params {
  smoothenBand: number;
  impactBand: number;
  staleIndexAllowance?: Duration;
  backfillTimeInterval?: Duration;
  futurePricesAllowance?: Duration;
}

export interface ParamsToUpdate {
  smoothenBand?: number;
  impactBand?: number;
  staleIndexAllowance?: Duration;
  backfillTimeInterval?: Duration;
  futurePricesAllowance?: Duration;
}

const baseParams: object = { smoothenBand: 0, impactBand: 0 };

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.smoothenBand !== 0) {
      writer.uint32(8).uint32(message.smoothenBand);
    }
    if (message.impactBand !== 0) {
      writer.uint32(16).uint32(message.impactBand);
    }
    if (message.staleIndexAllowance !== undefined) {
      Duration.encode(
        message.staleIndexAllowance,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.backfillTimeInterval !== undefined) {
      Duration.encode(
        message.backfillTimeInterval,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.futurePricesAllowance !== undefined) {
      Duration.encode(
        message.futurePricesAllowance,
        writer.uint32(42).fork()
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
          message.smoothenBand = reader.uint32();
          break;
        case 2:
          message.impactBand = reader.uint32();
          break;
        case 3:
          message.staleIndexAllowance = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.backfillTimeInterval = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.futurePricesAllowance = Duration.decode(
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
    message.smoothenBand =
      object.smoothenBand !== undefined && object.smoothenBand !== null
        ? Number(object.smoothenBand)
        : 0;
    message.impactBand =
      object.impactBand !== undefined && object.impactBand !== null
        ? Number(object.impactBand)
        : 0;
    message.staleIndexAllowance =
      object.staleIndexAllowance !== undefined &&
      object.staleIndexAllowance !== null
        ? Duration.fromJSON(object.staleIndexAllowance)
        : undefined;
    message.backfillTimeInterval =
      object.backfillTimeInterval !== undefined &&
      object.backfillTimeInterval !== null
        ? Duration.fromJSON(object.backfillTimeInterval)
        : undefined;
    message.futurePricesAllowance =
      object.futurePricesAllowance !== undefined &&
      object.futurePricesAllowance !== null
        ? Duration.fromJSON(object.futurePricesAllowance)
        : undefined;
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.smoothenBand !== undefined &&
      (obj.smoothenBand = message.smoothenBand);
    message.impactBand !== undefined && (obj.impactBand = message.impactBand);
    message.staleIndexAllowance !== undefined &&
      (obj.staleIndexAllowance = message.staleIndexAllowance
        ? Duration.toJSON(message.staleIndexAllowance)
        : undefined);
    message.backfillTimeInterval !== undefined &&
      (obj.backfillTimeInterval = message.backfillTimeInterval
        ? Duration.toJSON(message.backfillTimeInterval)
        : undefined);
    message.futurePricesAllowance !== undefined &&
      (obj.futurePricesAllowance = message.futurePricesAllowance
        ? Duration.toJSON(message.futurePricesAllowance)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.smoothenBand = object.smoothenBand ?? 0;
    message.impactBand = object.impactBand ?? 0;
    message.staleIndexAllowance =
      object.staleIndexAllowance !== undefined &&
      object.staleIndexAllowance !== null
        ? Duration.fromPartial(object.staleIndexAllowance)
        : undefined;
    message.backfillTimeInterval =
      object.backfillTimeInterval !== undefined &&
      object.backfillTimeInterval !== null
        ? Duration.fromPartial(object.backfillTimeInterval)
        : undefined;
    message.futurePricesAllowance =
      object.futurePricesAllowance !== undefined &&
      object.futurePricesAllowance !== null
        ? Duration.fromPartial(object.futurePricesAllowance)
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
    if (message.smoothenBand !== undefined) {
      UInt32Value.encode(
        { value: message.smoothenBand! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.impactBand !== undefined) {
      UInt32Value.encode(
        { value: message.impactBand! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.staleIndexAllowance !== undefined) {
      Duration.encode(
        message.staleIndexAllowance,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.backfillTimeInterval !== undefined) {
      Duration.encode(
        message.backfillTimeInterval,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.futurePricesAllowance !== undefined) {
      Duration.encode(
        message.futurePricesAllowance,
        writer.uint32(42).fork()
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
          message.smoothenBand = UInt32Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 2:
          message.impactBand = UInt32Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 3:
          message.staleIndexAllowance = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.backfillTimeInterval = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.futurePricesAllowance = Duration.decode(
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
    message.smoothenBand =
      object.smoothenBand !== undefined && object.smoothenBand !== null
        ? Number(object.smoothenBand)
        : undefined;
    message.impactBand =
      object.impactBand !== undefined && object.impactBand !== null
        ? Number(object.impactBand)
        : undefined;
    message.staleIndexAllowance =
      object.staleIndexAllowance !== undefined &&
      object.staleIndexAllowance !== null
        ? Duration.fromJSON(object.staleIndexAllowance)
        : undefined;
    message.backfillTimeInterval =
      object.backfillTimeInterval !== undefined &&
      object.backfillTimeInterval !== null
        ? Duration.fromJSON(object.backfillTimeInterval)
        : undefined;
    message.futurePricesAllowance =
      object.futurePricesAllowance !== undefined &&
      object.futurePricesAllowance !== null
        ? Duration.fromJSON(object.futurePricesAllowance)
        : undefined;
    return message;
  },

  toJSON(message: ParamsToUpdate): unknown {
    const obj: any = {};
    message.smoothenBand !== undefined &&
      (obj.smoothenBand = message.smoothenBand);
    message.impactBand !== undefined && (obj.impactBand = message.impactBand);
    message.staleIndexAllowance !== undefined &&
      (obj.staleIndexAllowance = message.staleIndexAllowance
        ? Duration.toJSON(message.staleIndexAllowance)
        : undefined);
    message.backfillTimeInterval !== undefined &&
      (obj.backfillTimeInterval = message.backfillTimeInterval
        ? Duration.toJSON(message.backfillTimeInterval)
        : undefined);
    message.futurePricesAllowance !== undefined &&
      (obj.futurePricesAllowance = message.futurePricesAllowance
        ? Duration.toJSON(message.futurePricesAllowance)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    const message = { ...baseParamsToUpdate } as ParamsToUpdate;
    message.smoothenBand = object.smoothenBand ?? undefined;
    message.impactBand = object.impactBand ?? undefined;
    message.staleIndexAllowance =
      object.staleIndexAllowance !== undefined &&
      object.staleIndexAllowance !== null
        ? Duration.fromPartial(object.staleIndexAllowance)
        : undefined;
    message.backfillTimeInterval =
      object.backfillTimeInterval !== undefined &&
      object.backfillTimeInterval !== null
        ? Duration.fromPartial(object.backfillTimeInterval)
        : undefined;
    message.futurePricesAllowance =
      object.futurePricesAllowance !== undefined &&
      object.futurePricesAllowance !== null
        ? Duration.fromPartial(object.futurePricesAllowance)
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
