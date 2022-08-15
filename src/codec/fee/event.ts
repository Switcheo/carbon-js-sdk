/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.fee";

export interface FeeDeductionEvent {
  denom: string;
  feeAmount: string;
  gasCost: string;
}

const baseFeeDeductionEvent: object = { denom: "", feeAmount: "", gasCost: "" };

export const FeeDeductionEvent = {
  encode(
    message: FeeDeductionEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.feeAmount !== "") {
      writer.uint32(18).string(message.feeAmount);
    }
    if (message.gasCost !== "") {
      writer.uint32(26).string(message.gasCost);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeeDeductionEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFeeDeductionEvent } as FeeDeductionEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.feeAmount = reader.string();
          break;
        case 3:
          message.gasCost = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeeDeductionEvent {
    const message = { ...baseFeeDeductionEvent } as FeeDeductionEvent;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.feeAmount =
      object.feeAmount !== undefined && object.feeAmount !== null
        ? String(object.feeAmount)
        : "";
    message.gasCost =
      object.gasCost !== undefined && object.gasCost !== null
        ? String(object.gasCost)
        : "";
    return message;
  },

  toJSON(message: FeeDeductionEvent): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.feeAmount !== undefined && (obj.feeAmount = message.feeAmount);
    message.gasCost !== undefined && (obj.gasCost = message.gasCost);
    return obj;
  },

  fromPartial(object: DeepPartial<FeeDeductionEvent>): FeeDeductionEvent {
    const message = { ...baseFeeDeductionEvent } as FeeDeductionEvent;
    message.denom = object.denom ?? "";
    message.feeAmount = object.feeAmount ?? "";
    message.gasCost = object.gasCost ?? "";
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
