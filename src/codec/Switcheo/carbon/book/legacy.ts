/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.book";

export interface StopBookV2320 {
  marketId: string;
  asks: string[];
  bids: string[];
  trigger: string;
  stopType: string;
}

function createBaseStopBookV2320(): StopBookV2320 {
  return { marketId: "", asks: [], bids: [], trigger: "", stopType: "" };
}

export const StopBookV2320 = {
  encode(message: StopBookV2320, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): StopBookV2320 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStopBookV2320();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.marketId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.asks.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.bids.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.trigger = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.stopType = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StopBookV2320 {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      asks: Array.isArray(object?.asks) ? object.asks.map((e: any) => String(e)) : [],
      bids: Array.isArray(object?.bids) ? object.bids.map((e: any) => String(e)) : [],
      trigger: isSet(object.trigger) ? String(object.trigger) : "",
      stopType: isSet(object.stopType) ? String(object.stopType) : "",
    };
  },

  toJSON(message: StopBookV2320): unknown {
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

  create(base?: DeepPartial<StopBookV2320>): StopBookV2320 {
    return StopBookV2320.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<StopBookV2320>): StopBookV2320 {
    const message = createBaseStopBookV2320();
    message.marketId = object.marketId ?? "";
    message.asks = object.asks?.map((e) => e) || [];
    message.bids = object.bids?.map((e) => e) || [];
    message.trigger = object.trigger ?? "";
    message.stopType = object.stopType ?? "";
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
