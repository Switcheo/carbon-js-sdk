/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Prices } from "../pricing/pricing";

export const protobufPackage = "Switcheo.carbon.pricing";

export interface PriceUpdateEvent {
  prices?: Prices;
}

const basePriceUpdateEvent: object = {};

export const PriceUpdateEvent = {
  encode(
    message: PriceUpdateEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.prices !== undefined) {
      Prices.encode(message.prices, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PriceUpdateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePriceUpdateEvent } as PriceUpdateEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prices = Prices.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PriceUpdateEvent {
    const message = { ...basePriceUpdateEvent } as PriceUpdateEvent;
    if (object.prices !== undefined && object.prices !== null) {
      message.prices = Prices.fromJSON(object.prices);
    } else {
      message.prices = undefined;
    }
    return message;
  },

  toJSON(message: PriceUpdateEvent): unknown {
    const obj: any = {};
    message.prices !== undefined &&
      (obj.prices = message.prices ? Prices.toJSON(message.prices) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<PriceUpdateEvent>): PriceUpdateEvent {
    const message = { ...basePriceUpdateEvent } as PriceUpdateEvent;
    if (object.prices !== undefined && object.prices !== null) {
      message.prices = Prices.fromPartial(object.prices);
    } else {
      message.prices = undefined;
    }
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
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
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
