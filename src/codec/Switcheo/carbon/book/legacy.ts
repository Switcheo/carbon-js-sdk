/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.book";

export interface StopbookV2320 {
  marketId: string;
  asks: string[];
  bids: string[];
  trigger: string;
  stopType: string;
}

const baseStopbookV2320: object = {
  marketId: "",
  asks: "",
  bids: "",
  trigger: "",
  stopType: "",
};

export const StopbookV2320 = {
  encode(
    message: StopbookV2320,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    for (const v of message.asks) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.bids) {
      writer.uint32(26).string(v!);
    }
    if (message.trigger !== "") {
      writer.uint32(34).string(message.trigger);
    }
    if (message.stopType !== "") {
      writer.uint32(42).string(message.stopType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StopbookV2320 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStopbookV2320 } as StopbookV2320;
    message.asks = [];
    message.bids = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.asks.push(reader.string());
          break;
        case 3:
          message.bids.push(reader.string());
          break;
        case 4:
          message.trigger = reader.string();
          break;
        case 5:
          message.stopType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StopbookV2320 {
    const message = { ...baseStopbookV2320 } as StopbookV2320;
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.asks = (object.asks ?? []).map((e: any) => String(e));
    message.bids = (object.bids ?? []).map((e: any) => String(e));
    message.trigger =
      object.trigger !== undefined && object.trigger !== null
        ? String(object.trigger)
        : "";
    message.stopType =
      object.stopType !== undefined && object.stopType !== null
        ? String(object.stopType)
        : "";
    return message;
  },

  toJSON(message: StopbookV2320): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    if (message.asks) {
      obj.asks = message.asks.map((e) => e);
    } else {
      obj.asks = [];
    }
    if (message.bids) {
      obj.bids = message.bids.map((e) => e);
    } else {
      obj.bids = [];
    }
    message.trigger !== undefined && (obj.trigger = message.trigger);
    message.stopType !== undefined && (obj.stopType = message.stopType);
    return obj;
  },

  fromPartial(object: DeepPartial<StopbookV2320>): StopbookV2320 {
    const message = { ...baseStopbookV2320 } as StopbookV2320;
    message.marketId = object.marketId ?? "";
    message.asks = (object.asks ?? []).map((e) => e);
    message.bids = (object.bids ?? []).map((e) => e);
    message.trigger = object.trigger ?? "";
    message.stopType = object.stopType ?? "";
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
