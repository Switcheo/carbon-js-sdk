/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.broker";

/** SpotAmm exists when there is a quote on the orderbook */
export interface SpotAmm {
  poolId: Long;
  marketId: string;
  reservesHash: Uint8Array;
  poolRoute: Uint8Array;
}

/** PerpsAmm exists when there is at least 1 PerpsMarketAmm */
export interface PerpsAmm {
  poolId: Long;
  markets: PerpsMarketAmm[];
}

/** PerpsMarketAmm exists when it is active/close-only */
export interface PerpsMarketAmm {
  marketId: string;
  lastIndexPrice: string;
}

const baseSpotAmm: object = { poolId: Long.UZERO, marketId: "" };

export const SpotAmm = {
  encode(
    message: SpotAmm,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.reservesHash.length !== 0) {
      writer.uint32(26).bytes(message.reservesHash);
    }
    if (message.poolRoute.length !== 0) {
      writer.uint32(42).bytes(message.poolRoute);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpotAmm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSpotAmm } as SpotAmm;
    message.reservesHash = new Uint8Array();
    message.poolRoute = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.marketId = reader.string();
          break;
        case 3:
          message.reservesHash = reader.bytes();
          break;
        case 5:
          message.poolRoute = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SpotAmm {
    const message = { ...baseSpotAmm } as SpotAmm;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.reservesHash =
      object.reservesHash !== undefined && object.reservesHash !== null
        ? bytesFromBase64(object.reservesHash)
        : new Uint8Array();
    message.poolRoute =
      object.poolRoute !== undefined && object.poolRoute !== null
        ? bytesFromBase64(object.poolRoute)
        : new Uint8Array();
    return message;
  },

  toJSON(message: SpotAmm): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.reservesHash !== undefined &&
      (obj.reservesHash = base64FromBytes(
        message.reservesHash !== undefined
          ? message.reservesHash
          : new Uint8Array()
      ));
    message.poolRoute !== undefined &&
      (obj.poolRoute = base64FromBytes(
        message.poolRoute !== undefined ? message.poolRoute : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<SpotAmm>): SpotAmm {
    const message = { ...baseSpotAmm } as SpotAmm;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.marketId = object.marketId ?? "";
    message.reservesHash = object.reservesHash ?? new Uint8Array();
    message.poolRoute = object.poolRoute ?? new Uint8Array();
    return message;
  },
};

const basePerpsAmm: object = { poolId: Long.UZERO };

export const PerpsAmm = {
  encode(
    message: PerpsAmm,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.markets) {
      PerpsMarketAmm.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PerpsAmm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePerpsAmm } as PerpsAmm;
    message.markets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 4:
          message.markets.push(PerpsMarketAmm.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PerpsAmm {
    const message = { ...basePerpsAmm } as PerpsAmm;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.markets = (object.markets ?? []).map((e: any) =>
      PerpsMarketAmm.fromJSON(e)
    );
    return message;
  },

  toJSON(message: PerpsAmm): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    if (message.markets) {
      obj.markets = message.markets.map((e) =>
        e ? PerpsMarketAmm.toJSON(e) : undefined
      );
    } else {
      obj.markets = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<PerpsAmm>): PerpsAmm {
    const message = { ...basePerpsAmm } as PerpsAmm;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.markets = (object.markets ?? []).map((e) =>
      PerpsMarketAmm.fromPartial(e)
    );
    return message;
  },
};

const basePerpsMarketAmm: object = { marketId: "", lastIndexPrice: "" };

export const PerpsMarketAmm = {
  encode(
    message: PerpsMarketAmm,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.lastIndexPrice !== "") {
      writer.uint32(26).string(message.lastIndexPrice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PerpsMarketAmm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePerpsMarketAmm } as PerpsMarketAmm;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 3:
          message.lastIndexPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PerpsMarketAmm {
    const message = { ...basePerpsMarketAmm } as PerpsMarketAmm;
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.lastIndexPrice =
      object.lastIndexPrice !== undefined && object.lastIndexPrice !== null
        ? String(object.lastIndexPrice)
        : "";
    return message;
  },

  toJSON(message: PerpsMarketAmm): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.lastIndexPrice !== undefined &&
      (obj.lastIndexPrice = message.lastIndexPrice);
    return obj;
  },

  fromPartial(object: DeepPartial<PerpsMarketAmm>): PerpsMarketAmm {
    const message = { ...basePerpsMarketAmm } as PerpsMarketAmm;
    message.marketId = object.marketId ?? "";
    message.lastIndexPrice = object.lastIndexPrice ?? "";
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
