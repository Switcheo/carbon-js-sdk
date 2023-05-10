/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.perpsliquidity";

/** Params defines the parameters for the module. */
export interface Params {
  /** requotes when index price fluctuation threshold exceeded (in bps) */
  quoteIndexPriceFluctuationToleranceBps: string;
  /** requotes after orders are x seconds old */
  quoteExpirySeconds: string;
  /** requotes when open position change threshold exceeded (in bps) */
  lpOpenPositionFluctuationToleranceBps: string;
}

const baseParams: object = {
  quoteIndexPriceFluctuationToleranceBps: "",
  quoteExpirySeconds: "",
  lpOpenPositionFluctuationToleranceBps: "",
};

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.quoteIndexPriceFluctuationToleranceBps !== "") {
      writer.uint32(10).string(message.quoteIndexPriceFluctuationToleranceBps);
    }
    if (message.quoteExpirySeconds !== "") {
      writer.uint32(18).string(message.quoteExpirySeconds);
    }
    if (message.lpOpenPositionFluctuationToleranceBps !== "") {
      writer.uint32(26).string(message.lpOpenPositionFluctuationToleranceBps);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quoteIndexPriceFluctuationToleranceBps = reader.string();
          break;
        case 2:
          message.quoteExpirySeconds = reader.string();
          break;
        case 3:
          message.lpOpenPositionFluctuationToleranceBps = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    message.quoteIndexPriceFluctuationToleranceBps =
      object.quoteIndexPriceFluctuationToleranceBps !== undefined &&
      object.quoteIndexPriceFluctuationToleranceBps !== null
        ? String(object.quoteIndexPriceFluctuationToleranceBps)
        : "";
    message.quoteExpirySeconds =
      object.quoteExpirySeconds !== undefined &&
      object.quoteExpirySeconds !== null
        ? String(object.quoteExpirySeconds)
        : "";
    message.lpOpenPositionFluctuationToleranceBps =
      object.lpOpenPositionFluctuationToleranceBps !== undefined &&
      object.lpOpenPositionFluctuationToleranceBps !== null
        ? String(object.lpOpenPositionFluctuationToleranceBps)
        : "";
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.quoteIndexPriceFluctuationToleranceBps !== undefined &&
      (obj.quoteIndexPriceFluctuationToleranceBps =
        message.quoteIndexPriceFluctuationToleranceBps);
    message.quoteExpirySeconds !== undefined &&
      (obj.quoteExpirySeconds = message.quoteExpirySeconds);
    message.lpOpenPositionFluctuationToleranceBps !== undefined &&
      (obj.lpOpenPositionFluctuationToleranceBps =
        message.lpOpenPositionFluctuationToleranceBps);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.quoteIndexPriceFluctuationToleranceBps =
      object.quoteIndexPriceFluctuationToleranceBps ?? "";
    message.quoteExpirySeconds = object.quoteExpirySeconds ?? "";
    message.lpOpenPositionFluctuationToleranceBps =
      object.lpOpenPositionFluctuationToleranceBps ?? "";
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
