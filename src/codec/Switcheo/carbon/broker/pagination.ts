/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.broker";

export interface MinMaxBoundary {
  min: Long;
  max: Long;
}

const baseMinMaxBoundary: object = { min: Long.UZERO, max: Long.UZERO };

export const MinMaxBoundary = {
  encode(
    message: MinMaxBoundary,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.min.isZero()) {
      writer.uint32(8).uint64(message.min);
    }
    if (!message.max.isZero()) {
      writer.uint32(16).uint64(message.max);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MinMaxBoundary {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMinMaxBoundary } as MinMaxBoundary;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.min = reader.uint64() as Long;
          break;
        case 2:
          message.max = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MinMaxBoundary {
    const message = { ...baseMinMaxBoundary } as MinMaxBoundary;
    message.min =
      object.min !== undefined && object.min !== null
        ? Long.fromString(object.min)
        : Long.UZERO;
    message.max =
      object.max !== undefined && object.max !== null
        ? Long.fromString(object.max)
        : Long.UZERO;
    return message;
  },

  toJSON(message: MinMaxBoundary): unknown {
    const obj: any = {};
    message.min !== undefined &&
      (obj.min = (message.min || Long.UZERO).toString());
    message.max !== undefined &&
      (obj.max = (message.max || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MinMaxBoundary>): MinMaxBoundary {
    const message = { ...baseMinMaxBoundary } as MinMaxBoundary;
    message.min =
      object.min !== undefined && object.min !== null
        ? Long.fromValue(object.min)
        : Long.UZERO;
    message.max =
      object.max !== undefined && object.max !== null
        ? Long.fromValue(object.max)
        : Long.UZERO;
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
