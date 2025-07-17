/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";

export const protobufPackage = "Switcheo.carbon.pricing";

/** Legacy Params from v.2.13.0. */
export interface ParamsV2130 {
  smoothenBand: number;
  impactBand: number;
  staleIndexAllowance?: Duration;
}

function createBaseParamsV2130(): ParamsV2130 {
  return { smoothenBand: 0, impactBand: 0, staleIndexAllowance: undefined };
}

export const ParamsV2130 = {
  encode(message: ParamsV2130, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.smoothenBand !== 0) {
      writer.uint32(8).uint32(message.smoothenBand);
    }
    if (message.impactBand !== 0) {
      writer.uint32(16).uint32(message.impactBand);
    }
    if (message.staleIndexAllowance !== undefined) {
      Duration.encode(message.staleIndexAllowance, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParamsV2130 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsV2130();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.smoothenBand = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.impactBand = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.staleIndexAllowance = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ParamsV2130 {
    return {
      smoothenBand: isSet(object.smoothenBand) ? Number(object.smoothenBand) : 0,
      impactBand: isSet(object.impactBand) ? Number(object.impactBand) : 0,
      staleIndexAllowance: isSet(object.staleIndexAllowance)
        ? Duration.fromJSON(object.staleIndexAllowance)
        : undefined,
    };
  },

  toJSON(message: ParamsV2130): unknown {
    const obj: any = {};
    message.smoothenBand !== undefined && (obj.smoothenBand = Math.round(message.smoothenBand));
    message.impactBand !== undefined && (obj.impactBand = Math.round(message.impactBand));
    message.staleIndexAllowance !== undefined &&
      (obj.staleIndexAllowance = message.staleIndexAllowance
        ? Duration.toJSON(message.staleIndexAllowance)
        : undefined);
    return obj;
  },

  create(base?: DeepPartial<ParamsV2130>): ParamsV2130 {
    return ParamsV2130.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ParamsV2130>): ParamsV2130 {
    const message = createBaseParamsV2130();
    message.smoothenBand = object.smoothenBand ?? 0;
    message.impactBand = object.impactBand ?? 0;
    message.staleIndexAllowance = (object.staleIndexAllowance !== undefined && object.staleIndexAllowance !== null)
      ? Duration.fromPartial(object.staleIndexAllowance)
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
