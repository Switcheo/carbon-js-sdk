/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.perpsliquidity";

/** Params defines the parameters for the module. */
export interface Params {
  /** requotes when index price fluctuation threshold exceeded (in ratio) */
  quoteIndexPriceFluctuationToleranceRatio: string;
  /** requotes after orders are x seconds old */
  quoteExpirySeconds: Long;
}

const baseParams: object = {
  quoteIndexPriceFluctuationToleranceRatio: "",
  quoteExpirySeconds: Long.UZERO,
};

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.quoteIndexPriceFluctuationToleranceRatio !== "") {
      writer
        .uint32(10)
        .string(message.quoteIndexPriceFluctuationToleranceRatio);
    }
    if (!message.quoteExpirySeconds.isZero()) {
      writer.uint32(16).uint64(message.quoteExpirySeconds);
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
          message.quoteIndexPriceFluctuationToleranceRatio = reader.string();
          break;
        case 2:
          message.quoteExpirySeconds = reader.uint64() as Long;
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
    message.quoteIndexPriceFluctuationToleranceRatio =
      object.quoteIndexPriceFluctuationToleranceRatio !== undefined &&
      object.quoteIndexPriceFluctuationToleranceRatio !== null
        ? String(object.quoteIndexPriceFluctuationToleranceRatio)
        : "";
    message.quoteExpirySeconds =
      object.quoteExpirySeconds !== undefined &&
      object.quoteExpirySeconds !== null
        ? Long.fromString(object.quoteExpirySeconds)
        : Long.UZERO;
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.quoteIndexPriceFluctuationToleranceRatio !== undefined &&
      (obj.quoteIndexPriceFluctuationToleranceRatio =
        message.quoteIndexPriceFluctuationToleranceRatio);
    message.quoteExpirySeconds !== undefined &&
      (obj.quoteExpirySeconds = (
        message.quoteExpirySeconds || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.quoteIndexPriceFluctuationToleranceRatio =
      object.quoteIndexPriceFluctuationToleranceRatio ?? "";
    message.quoteExpirySeconds =
      object.quoteExpirySeconds !== undefined &&
      object.quoteExpirySeconds !== null
        ? Long.fromValue(object.quoteExpirySeconds)
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
