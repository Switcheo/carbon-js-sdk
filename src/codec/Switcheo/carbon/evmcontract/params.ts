/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { UInt64Value } from "../../../google/protobuf/wrappers";

export const protobufPackage = "Switcheo.carbon.evmcontract";

export interface Params {
  responseGasCap: Long;
}

export interface ParamsToUpdate {
  responseGasCap?: Long;
}

function createBaseParams(): Params {
  return { responseGasCap: Long.UZERO };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.responseGasCap.isZero()) {
      writer.uint32(8).uint64(message.responseGasCap);
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

          message.responseGasCap = reader.uint64() as Long;
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
    return { responseGasCap: isSet(object.responseGasCap) ? Long.fromValue(object.responseGasCap) : Long.UZERO };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.responseGasCap !== undefined && (obj.responseGasCap = (message.responseGasCap || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<Params>): Params {
    return Params.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.responseGasCap = (object.responseGasCap !== undefined && object.responseGasCap !== null)
      ? Long.fromValue(object.responseGasCap)
      : Long.UZERO;
    return message;
  },
};

function createBaseParamsToUpdate(): ParamsToUpdate {
  return { responseGasCap: undefined };
}

export const ParamsToUpdate = {
  encode(message: ParamsToUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.responseGasCap !== undefined) {
      UInt64Value.encode({ value: message.responseGasCap! }, writer.uint32(10).fork()).ldelim();
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

          message.responseGasCap = UInt64Value.decode(reader, reader.uint32()).value;
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
    return { responseGasCap: isSet(object.responseGasCap) ? Long.fromValue(object.responseGasCap) : undefined };
  },

  toJSON(message: ParamsToUpdate): unknown {
    const obj: any = {};
    message.responseGasCap !== undefined && (obj.responseGasCap = message.responseGasCap);
    return obj;
  },

  create(base?: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    return ParamsToUpdate.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    const message = createBaseParamsToUpdate();
    message.responseGasCap = (object.responseGasCap !== undefined && object.responseGasCap !== null)
      ? Long.fromValue(object.responseGasCap)
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
