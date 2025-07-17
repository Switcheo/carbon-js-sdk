/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.fee";

export interface FeeDeductionEvent {
  denom: string;
  feeAmount: string;
  gasCost: string;
}

function createBaseFeeDeductionEvent(): FeeDeductionEvent {
  return { denom: "", feeAmount: "", gasCost: "" };
}

export const FeeDeductionEvent = {
  encode(message: FeeDeductionEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeDeductionEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.feeAmount = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.gasCost = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FeeDeductionEvent {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      feeAmount: isSet(object.feeAmount) ? String(object.feeAmount) : "",
      gasCost: isSet(object.gasCost) ? String(object.gasCost) : "",
    };
  },

  toJSON(message: FeeDeductionEvent): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.feeAmount !== undefined && (obj.feeAmount = message.feeAmount);
    message.gasCost !== undefined && (obj.gasCost = message.gasCost);
    return obj;
  },

  create(base?: DeepPartial<FeeDeductionEvent>): FeeDeductionEvent {
    return FeeDeductionEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FeeDeductionEvent>): FeeDeductionEvent {
    const message = createBaseFeeDeductionEvent();
    message.denom = object.denom ?? "";
    message.feeAmount = object.feeAmount ?? "";
    message.gasCost = object.gasCost ?? "";
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
