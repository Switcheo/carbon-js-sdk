/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { BoolValue } from "../../../google/protobuf/wrappers";

export const protobufPackage = "Switcheo.carbon.broker";

/** Params defines the parameters for the broker module. */
export interface Params {
  shouldSystemLiquidate: boolean;
  maxBadDebtThresholdUsd: string;
}

/** ParamsToUpdate allows optional fields for Params. */
export interface ParamsToUpdate {
  shouldSystemLiquidate?: boolean;
  maxBadDebtThresholdUsd: string;
}

function createBaseParams(): Params {
  return { shouldSystemLiquidate: false, maxBadDebtThresholdUsd: "" };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shouldSystemLiquidate === true) {
      writer.uint32(8).bool(message.shouldSystemLiquidate);
    }
    if (message.maxBadDebtThresholdUsd !== "") {
      writer.uint32(18).string(message.maxBadDebtThresholdUsd);
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

          message.shouldSystemLiquidate = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.maxBadDebtThresholdUsd = reader.string();
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
      shouldSystemLiquidate: isSet(object.shouldSystemLiquidate) ? Boolean(object.shouldSystemLiquidate) : false,
      maxBadDebtThresholdUsd: isSet(object.maxBadDebtThresholdUsd) ? String(object.maxBadDebtThresholdUsd) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.shouldSystemLiquidate !== undefined && (obj.shouldSystemLiquidate = message.shouldSystemLiquidate);
    message.maxBadDebtThresholdUsd !== undefined && (obj.maxBadDebtThresholdUsd = message.maxBadDebtThresholdUsd);
    return obj;
  },

  create(base?: DeepPartial<Params>): Params {
    return Params.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.shouldSystemLiquidate = object.shouldSystemLiquidate ?? false;
    message.maxBadDebtThresholdUsd = object.maxBadDebtThresholdUsd ?? "";
    return message;
  },
};

function createBaseParamsToUpdate(): ParamsToUpdate {
  return { shouldSystemLiquidate: undefined, maxBadDebtThresholdUsd: "" };
}

export const ParamsToUpdate = {
  encode(message: ParamsToUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shouldSystemLiquidate !== undefined) {
      BoolValue.encode({ value: message.shouldSystemLiquidate! }, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxBadDebtThresholdUsd !== "") {
      writer.uint32(18).string(message.maxBadDebtThresholdUsd);
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

          message.shouldSystemLiquidate = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.maxBadDebtThresholdUsd = reader.string();
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
      shouldSystemLiquidate: isSet(object.shouldSystemLiquidate) ? Boolean(object.shouldSystemLiquidate) : undefined,
      maxBadDebtThresholdUsd: isSet(object.maxBadDebtThresholdUsd) ? String(object.maxBadDebtThresholdUsd) : "",
    };
  },

  toJSON(message: ParamsToUpdate): unknown {
    const obj: any = {};
    message.shouldSystemLiquidate !== undefined && (obj.shouldSystemLiquidate = message.shouldSystemLiquidate);
    message.maxBadDebtThresholdUsd !== undefined && (obj.maxBadDebtThresholdUsd = message.maxBadDebtThresholdUsd);
    return obj;
  },

  create(base?: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    return ParamsToUpdate.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    const message = createBaseParamsToUpdate();
    message.shouldSystemLiquidate = object.shouldSystemLiquidate ?? undefined;
    message.maxBadDebtThresholdUsd = object.maxBadDebtThresholdUsd ?? "";
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
