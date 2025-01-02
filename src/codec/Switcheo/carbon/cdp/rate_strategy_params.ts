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

const baseRateStrategyParams: object = {
  name: "",
  optimalUsage: "",
  baseVariableBorrowRate: "",
  variableRateSlope1: "",
  variableRateSlope2: "",
};

export const RateStrategyParams = {
  encode(
    message: RateStrategyParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRateStrategyParams } as RateStrategyParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.optimalUsage = reader.string();
          break;
        case 3:
          message.baseVariableBorrowRate = reader.string();
          break;
        case 4:
          message.variableRateSlope1 = reader.string();
          break;
        case 5:
          message.variableRateSlope2 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RateStrategyParams {
    const message = { ...baseRateStrategyParams } as RateStrategyParams;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.optimalUsage =
      object.optimalUsage !== undefined && object.optimalUsage !== null
        ? String(object.optimalUsage)
        : "";
    message.baseVariableBorrowRate =
      object.baseVariableBorrowRate !== undefined &&
      object.baseVariableBorrowRate !== null
        ? String(object.baseVariableBorrowRate)
        : "";
    message.variableRateSlope1 =
      object.variableRateSlope1 !== undefined &&
      object.variableRateSlope1 !== null
        ? String(object.variableRateSlope1)
        : "";
    message.variableRateSlope2 =
      object.variableRateSlope2 !== undefined &&
      object.variableRateSlope2 !== null
        ? String(object.variableRateSlope2)
        : "";
    return message;
  },

  toJSON(message: RateStrategyParams): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.optimalUsage !== undefined &&
      (obj.optimalUsage = message.optimalUsage);
    message.baseVariableBorrowRate !== undefined &&
      (obj.baseVariableBorrowRate = message.baseVariableBorrowRate);
    message.variableRateSlope1 !== undefined &&
      (obj.variableRateSlope1 = message.variableRateSlope1);
    message.variableRateSlope2 !== undefined &&
      (obj.variableRateSlope2 = message.variableRateSlope2);
    return obj;
  },

  fromPartial(object: DeepPartial<RateStrategyParams>): RateStrategyParams {
    const message = { ...baseRateStrategyParams } as RateStrategyParams;
    message.name = object.name ?? "";
    message.optimalUsage = object.optimalUsage ?? "";
    message.baseVariableBorrowRate = object.baseVariableBorrowRate ?? "";
    message.variableRateSlope1 = object.variableRateSlope1 ?? "";
    message.variableRateSlope2 = object.variableRateSlope2 ?? "";
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
