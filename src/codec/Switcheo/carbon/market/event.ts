/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Market } from "./market";

export const protobufPackage = "Switcheo.carbon.market";

export interface MarketEvent {
  marketId?: Market;
  type: string;
}

const baseMarketEvent: object = { type: "" };

export const MarketEvent = {
  encode(
    message: MarketEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== undefined) {
      Market.encode(message.marketId, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMarketEvent } as MarketEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = Market.decode(reader, reader.uint32());
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketEvent {
    const message = { ...baseMarketEvent } as MarketEvent;
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? Market.fromJSON(object.marketId)
        : undefined;
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    return message;
  },

  toJSON(message: MarketEvent): unknown {
    const obj: any = {};
    message.marketId !== undefined &&
      (obj.marketId = message.marketId
        ? Market.toJSON(message.marketId)
        : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(object: DeepPartial<MarketEvent>): MarketEvent {
    const message = { ...baseMarketEvent } as MarketEvent;
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? Market.fromPartial(object.marketId)
        : undefined;
    message.type = object.type ?? "";
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
