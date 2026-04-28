/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { OutstandingPosition } from "../liquidation/outstanding_position";

export const protobufPackage = "Switcheo.carbon.adl";

export interface AdlBadDebt {
  amount: string;
  markPrice: string;
  buyExpiredOp?: OutstandingPosition;
  sellExpiredOp?: OutstandingPosition;
}

function createBaseAdlBadDebt(): AdlBadDebt {
  return { amount: "", markPrice: "", buyExpiredOp: undefined, sellExpiredOp: undefined };
}

export const AdlBadDebt = {
  encode(message: AdlBadDebt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.markPrice !== "") {
      writer.uint32(18).string(message.markPrice);
    }
    if (message.buyExpiredOp !== undefined) {
      OutstandingPosition.encode(message.buyExpiredOp, writer.uint32(26).fork()).ldelim();
    }
    if (message.sellExpiredOp !== undefined) {
      OutstandingPosition.encode(message.sellExpiredOp, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AdlBadDebt {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdlBadDebt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.markPrice = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.buyExpiredOp = OutstandingPosition.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.sellExpiredOp = OutstandingPosition.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AdlBadDebt {
    return {
      amount: isSet(object.amount) ? String(object.amount) : "",
      markPrice: isSet(object.markPrice) ? String(object.markPrice) : "",
      buyExpiredOp: isSet(object.buyExpiredOp) ? OutstandingPosition.fromJSON(object.buyExpiredOp) : undefined,
      sellExpiredOp: isSet(object.sellExpiredOp) ? OutstandingPosition.fromJSON(object.sellExpiredOp) : undefined,
    };
  },

  toJSON(message: AdlBadDebt): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    message.markPrice !== undefined && (obj.markPrice = message.markPrice);
    message.buyExpiredOp !== undefined &&
      (obj.buyExpiredOp = message.buyExpiredOp ? OutstandingPosition.toJSON(message.buyExpiredOp) : undefined);
    message.sellExpiredOp !== undefined &&
      (obj.sellExpiredOp = message.sellExpiredOp ? OutstandingPosition.toJSON(message.sellExpiredOp) : undefined);
    return obj;
  },

  create(base?: DeepPartial<AdlBadDebt>): AdlBadDebt {
    return AdlBadDebt.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AdlBadDebt>): AdlBadDebt {
    const message = createBaseAdlBadDebt();
    message.amount = object.amount ?? "";
    message.markPrice = object.markPrice ?? "";
    message.buyExpiredOp = (object.buyExpiredOp !== undefined && object.buyExpiredOp !== null)
      ? OutstandingPosition.fromPartial(object.buyExpiredOp)
      : undefined;
    message.sellExpiredOp = (object.sellExpiredOp !== undefined && object.sellExpiredOp !== null)
      ? OutstandingPosition.fromPartial(object.sellExpiredOp)
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
