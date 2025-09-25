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

function createBaseSpotAmm(): SpotAmm {
  return { poolId: Long.UZERO, marketId: "", reservesHash: new Uint8Array(), poolRoute: new Uint8Array() };
}

export const SpotAmm = {
  encode(message: SpotAmm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotAmm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.poolId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.marketId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.reservesHash = reader.bytes();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.poolRoute = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SpotAmm {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      reservesHash: isSet(object.reservesHash) ? bytesFromBase64(object.reservesHash) : new Uint8Array(),
      poolRoute: isSet(object.poolRoute) ? bytesFromBase64(object.poolRoute) : new Uint8Array(),
    };
  },

  toJSON(message: SpotAmm): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.reservesHash !== undefined &&
      (obj.reservesHash = base64FromBytes(
        message.reservesHash !== undefined ? message.reservesHash : new Uint8Array(),
      ));
    message.poolRoute !== undefined &&
      (obj.poolRoute = base64FromBytes(message.poolRoute !== undefined ? message.poolRoute : new Uint8Array()));
    return obj;
  },

  create(base?: DeepPartial<SpotAmm>): SpotAmm {
    return SpotAmm.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SpotAmm>): SpotAmm {
    const message = createBaseSpotAmm();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.marketId = object.marketId ?? "";
    message.reservesHash = object.reservesHash ?? new Uint8Array();
    message.poolRoute = object.poolRoute ?? new Uint8Array();
    return message;
  },
};

function createBasePerpsAmm(): PerpsAmm {
  return { poolId: Long.UZERO, markets: [] };
}

export const PerpsAmm = {
  encode(message: PerpsAmm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.markets) {
      PerpsMarketAmm.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PerpsAmm {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePerpsAmm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.poolId = reader.uint64() as Long;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.markets.push(PerpsMarketAmm.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PerpsAmm {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      markets: Array.isArray(object?.markets) ? object.markets.map((e: any) => PerpsMarketAmm.fromJSON(e)) : [],
    };
  },

  toJSON(message: PerpsAmm): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    if (message.markets) {
      obj.markets = message.markets.map((e) => e ? PerpsMarketAmm.toJSON(e) : undefined);
    } else {
      obj.markets = [];
    }
    return obj;
  },

  create(base?: DeepPartial<PerpsAmm>): PerpsAmm {
    return PerpsAmm.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PerpsAmm>): PerpsAmm {
    const message = createBasePerpsAmm();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.markets = object.markets?.map((e) => PerpsMarketAmm.fromPartial(e)) || [];
    return message;
  },
};

function createBasePerpsMarketAmm(): PerpsMarketAmm {
  return { marketId: "", lastIndexPrice: "" };
}

export const PerpsMarketAmm = {
  encode(message: PerpsMarketAmm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.lastIndexPrice !== "") {
      writer.uint32(26).string(message.lastIndexPrice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PerpsMarketAmm {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePerpsMarketAmm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.marketId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.lastIndexPrice = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PerpsMarketAmm {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      lastIndexPrice: isSet(object.lastIndexPrice) ? String(object.lastIndexPrice) : "",
    };
  },

  toJSON(message: PerpsMarketAmm): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.lastIndexPrice !== undefined && (obj.lastIndexPrice = message.lastIndexPrice);
    return obj;
  },

  create(base?: DeepPartial<PerpsMarketAmm>): PerpsMarketAmm {
    return PerpsMarketAmm.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PerpsMarketAmm>): PerpsMarketAmm {
    const message = createBasePerpsMarketAmm();
    message.marketId = object.marketId ?? "";
    message.lastIndexPrice = object.lastIndexPrice ?? "";
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

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
