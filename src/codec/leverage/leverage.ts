/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.leverage";

export interface MarketLeverage {
  market: string;
  leverage: string;
}

export interface MarketLeverageWithKey {
  marketLeverage?: MarketLeverage;
  key: Uint8Array;
}

const baseMarketLeverage: object = { market: "", leverage: "" };

export const MarketLeverage = {
  encode(
    message: MarketLeverage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.market !== "") {
      writer.uint32(10).string(message.market);
    }
    if (message.leverage !== "") {
      writer.uint32(18).string(message.leverage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketLeverage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMarketLeverage } as MarketLeverage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market = reader.string();
          break;
        case 2:
          message.leverage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketLeverage {
    const message = { ...baseMarketLeverage } as MarketLeverage;
    if (object.market !== undefined && object.market !== null) {
      message.market = String(object.market);
    } else {
      message.market = "";
    }
    if (object.leverage !== undefined && object.leverage !== null) {
      message.leverage = String(object.leverage);
    } else {
      message.leverage = "";
    }
    return message;
  },

  toJSON(message: MarketLeverage): unknown {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market);
    message.leverage !== undefined && (obj.leverage = message.leverage);
    return obj;
  },

  fromPartial(object: DeepPartial<MarketLeverage>): MarketLeverage {
    const message = { ...baseMarketLeverage } as MarketLeverage;
    if (object.market !== undefined && object.market !== null) {
      message.market = object.market;
    } else {
      message.market = "";
    }
    if (object.leverage !== undefined && object.leverage !== null) {
      message.leverage = object.leverage;
    } else {
      message.leverage = "";
    }
    return message;
  },
};

const baseMarketLeverageWithKey: object = {};

export const MarketLeverageWithKey = {
  encode(
    message: MarketLeverageWithKey,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketLeverage !== undefined) {
      MarketLeverage.encode(
        message.marketLeverage,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MarketLeverageWithKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMarketLeverageWithKey } as MarketLeverageWithKey;
    message.key = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketLeverage = MarketLeverage.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketLeverageWithKey {
    const message = { ...baseMarketLeverageWithKey } as MarketLeverageWithKey;
    message.key = new Uint8Array();
    if (object.marketLeverage !== undefined && object.marketLeverage !== null) {
      message.marketLeverage = MarketLeverage.fromJSON(object.marketLeverage);
    } else {
      message.marketLeverage = undefined;
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    return message;
  },

  toJSON(message: MarketLeverageWithKey): unknown {
    const obj: any = {};
    message.marketLeverage !== undefined &&
      (obj.marketLeverage = message.marketLeverage
        ? MarketLeverage.toJSON(message.marketLeverage)
        : undefined);
    message.key !== undefined &&
      (obj.key = base64FromBytes(
        message.key !== undefined ? message.key : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<MarketLeverageWithKey>
  ): MarketLeverageWithKey {
    const message = { ...baseMarketLeverageWithKey } as MarketLeverageWithKey;
    if (object.marketLeverage !== undefined && object.marketLeverage !== null) {
      message.marketLeverage = MarketLeverage.fromPartial(
        object.marketLeverage
      );
    } else {
      message.marketLeverage = undefined;
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = new Uint8Array();
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

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
