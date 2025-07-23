/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Int64Value, UInt32Value } from "../../../google/protobuf/wrappers";

export const protobufPackage = "Switcheo.carbon.order";

export interface Params {
  maxReferralCommission: number;
  futuresOrderBlockDelay: Long;
}

export interface ParamsToUpdate {
  maxReferralCommission?: number;
  futuresOrderBlockDelay?: Long;
}

function createBaseParams(): Params {
  return { maxReferralCommission: 0, futuresOrderBlockDelay: Long.ZERO };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxReferralCommission !== 0) {
      writer.uint32(8).uint32(message.maxReferralCommission);
    }
    if (!message.futuresOrderBlockDelay.isZero()) {
      writer.uint32(16).int64(message.futuresOrderBlockDelay);
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
          if (tag !== 8) {
            break;
          }

          message.maxReferralCommission = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.futuresOrderBlockDelay = reader.int64() as Long;
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
      maxReferralCommission: isSet(object.maxReferralCommission) ? Number(object.maxReferralCommission) : 0,
      futuresOrderBlockDelay: isSet(object.futuresOrderBlockDelay)
        ? Long.fromValue(object.futuresOrderBlockDelay)
        : Long.ZERO,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maxReferralCommission !== undefined &&
      (obj.maxReferralCommission = Math.round(message.maxReferralCommission));
    message.futuresOrderBlockDelay !== undefined &&
      (obj.futuresOrderBlockDelay = (message.futuresOrderBlockDelay || Long.ZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<Params>): Params {
    return Params.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.maxReferralCommission = object.maxReferralCommission ?? 0;
    message.futuresOrderBlockDelay =
      (object.futuresOrderBlockDelay !== undefined && object.futuresOrderBlockDelay !== null)
        ? Long.fromValue(object.futuresOrderBlockDelay)
        : Long.ZERO;
    return message;
  },
};

function createBaseParamsToUpdate(): ParamsToUpdate {
  return { maxReferralCommission: undefined, futuresOrderBlockDelay: undefined };
}

export const ParamsToUpdate = {
  encode(message: ParamsToUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxReferralCommission !== undefined) {
      UInt32Value.encode({ value: message.maxReferralCommission! }, writer.uint32(10).fork()).ldelim();
    }
    if (message.futuresOrderBlockDelay !== undefined) {
      Int64Value.encode({ value: message.futuresOrderBlockDelay! }, writer.uint32(18).fork()).ldelim();
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

          message.maxReferralCommission = UInt32Value.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.futuresOrderBlockDelay = Int64Value.decode(reader, reader.uint32()).value;
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
      maxReferralCommission: isSet(object.maxReferralCommission) ? Number(object.maxReferralCommission) : undefined,
      futuresOrderBlockDelay: isSet(object.futuresOrderBlockDelay)
        ? Long.fromValue(object.futuresOrderBlockDelay)
        : undefined,
    };
  },

  toJSON(message: ParamsToUpdate): unknown {
    const obj: any = {};
    message.maxReferralCommission !== undefined && (obj.maxReferralCommission = message.maxReferralCommission);
    message.futuresOrderBlockDelay !== undefined && (obj.futuresOrderBlockDelay = message.futuresOrderBlockDelay);
    return obj;
  },

  create(base?: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    return ParamsToUpdate.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    const message = createBaseParamsToUpdate();
    message.maxReferralCommission = object.maxReferralCommission ?? undefined;
    message.futuresOrderBlockDelay =
      (object.futuresOrderBlockDelay !== undefined && object.futuresOrderBlockDelay !== null)
        ? Long.fromValue(object.futuresOrderBlockDelay)
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
