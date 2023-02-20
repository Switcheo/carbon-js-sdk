/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.liquiditypool";

export interface ParamsV2170 {
  rewardReductionThreshold: Long;
}

const baseParamsV2170: object = { rewardReductionThreshold: Long.UZERO };

export const ParamsV2170 = {
  encode(
    message: ParamsV2170,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.rewardReductionThreshold.isZero()) {
      writer.uint32(8).uint64(message.rewardReductionThreshold);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParamsV2170 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParamsV2170 } as ParamsV2170;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardReductionThreshold = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ParamsV2170 {
    const message = { ...baseParamsV2170 } as ParamsV2170;
    message.rewardReductionThreshold =
      object.rewardReductionThreshold !== undefined &&
      object.rewardReductionThreshold !== null
        ? Long.fromString(object.rewardReductionThreshold)
        : Long.UZERO;
    return message;
  },

  toJSON(message: ParamsV2170): unknown {
    const obj: any = {};
    message.rewardReductionThreshold !== undefined &&
      (obj.rewardReductionThreshold = (
        message.rewardReductionThreshold || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<ParamsV2170>): ParamsV2170 {
    const message = { ...baseParamsV2170 } as ParamsV2170;
    message.rewardReductionThreshold =
      object.rewardReductionThreshold !== undefined &&
      object.rewardReductionThreshold !== null
        ? Long.fromValue(object.rewardReductionThreshold)
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
