/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.broker";

export interface MinMaxBoundary {
  min: Long;
  max: Long;
}

function createBaseMinMaxBoundary(): MinMaxBoundary {
  return { min: Long.UZERO, max: Long.UZERO };
}

export const MinMaxBoundary = {
  encode(message: MinMaxBoundary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.min.isZero()) {
      writer.uint32(8).uint64(message.min);
    }
    if (!message.max.isZero()) {
      writer.uint32(16).uint64(message.max);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MinMaxBoundary {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinMaxBoundary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.min = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.max = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MinMaxBoundary {
    return {
      min: isSet(object.min) ? Long.fromValue(object.min) : Long.UZERO,
      max: isSet(object.max) ? Long.fromValue(object.max) : Long.UZERO,
    };
  },

  toJSON(message: MinMaxBoundary): unknown {
    const obj: any = {};
    message.min !== undefined && (obj.min = (message.min || Long.UZERO).toString());
    message.max !== undefined && (obj.max = (message.max || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<MinMaxBoundary>): MinMaxBoundary {
    return MinMaxBoundary.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MinMaxBoundary>): MinMaxBoundary {
    const message = createBaseMinMaxBoundary();
    message.min = (object.min !== undefined && object.min !== null) ? Long.fromValue(object.min) : Long.UZERO;
    message.max = (object.max !== undefined && object.max !== null) ? Long.fromValue(object.max) : Long.UZERO;
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
