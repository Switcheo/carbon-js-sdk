/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.cdp";

export interface RateStrategyParams {
  name: string;
  optimalUsage: string;
  baseVariableBorrowRate: string;
  variableRateSlope1: string;
  variableRateSlope2: string;
}

function createBaseRateStrategyParams(): RateStrategyParams {
  return { name: "", optimalUsage: "", baseVariableBorrowRate: "", variableRateSlope1: "", variableRateSlope2: "" };
}

export const RateStrategyParams = {
  encode(message: RateStrategyParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.optimalUsage !== "") {
      writer.uint32(18).string(message.optimalUsage);
    }
    if (message.baseVariableBorrowRate !== "") {
      writer.uint32(26).string(message.baseVariableBorrowRate);
    }
    if (message.variableRateSlope1 !== "") {
      writer.uint32(34).string(message.variableRateSlope1);
    }
    if (message.variableRateSlope2 !== "") {
      writer.uint32(42).string(message.variableRateSlope2);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RateStrategyParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRateStrategyParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.optimalUsage = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.baseVariableBorrowRate = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.variableRateSlope1 = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.variableRateSlope2 = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RateStrategyParams {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      optimalUsage: isSet(object.optimalUsage) ? String(object.optimalUsage) : "",
      baseVariableBorrowRate: isSet(object.baseVariableBorrowRate) ? String(object.baseVariableBorrowRate) : "",
      variableRateSlope1: isSet(object.variableRateSlope1) ? String(object.variableRateSlope1) : "",
      variableRateSlope2: isSet(object.variableRateSlope2) ? String(object.variableRateSlope2) : "",
    };
  },

  toJSON(message: RateStrategyParams): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.optimalUsage !== undefined && (obj.optimalUsage = message.optimalUsage);
    message.baseVariableBorrowRate !== undefined && (obj.baseVariableBorrowRate = message.baseVariableBorrowRate);
    message.variableRateSlope1 !== undefined && (obj.variableRateSlope1 = message.variableRateSlope1);
    message.variableRateSlope2 !== undefined && (obj.variableRateSlope2 = message.variableRateSlope2);
    return obj;
  },

  create(base?: DeepPartial<RateStrategyParams>): RateStrategyParams {
    return RateStrategyParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RateStrategyParams>): RateStrategyParams {
    const message = createBaseRateStrategyParams();
    message.name = object.name ?? "";
    message.optimalUsage = object.optimalUsage ?? "";
    message.baseVariableBorrowRate = object.baseVariableBorrowRate ?? "";
    message.variableRateSlope1 = object.variableRateSlope1 ?? "";
    message.variableRateSlope2 = object.variableRateSlope2 ?? "";
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
