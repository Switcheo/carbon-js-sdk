/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.lockproxy";

/** Params defines the parameters for the module. */
export interface WrapperMapping {
  chainId: Long;
  fromContractAddress: Uint8Array;
  toContractAddress: Uint8Array;
  lockType: Long;
}

function createBaseWrapperMapping(): WrapperMapping {
  return {
    chainId: Long.UZERO,
    fromContractAddress: new Uint8Array(),
    toContractAddress: new Uint8Array(),
    lockType: Long.UZERO,
  };
}

export const WrapperMapping = {
  encode(message: WrapperMapping, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.chainId.isZero()) {
      writer.uint32(8).uint64(message.chainId);
    }
    if (message.fromContractAddress.length !== 0) {
      writer.uint32(18).bytes(message.fromContractAddress);
    }
    if (message.toContractAddress.length !== 0) {
      writer.uint32(26).bytes(message.toContractAddress);
    }
    if (!message.lockType.isZero()) {
      writer.uint32(32).uint64(message.lockType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WrapperMapping {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWrapperMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.chainId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fromContractAddress = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.toContractAddress = reader.bytes();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.lockType = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WrapperMapping {
    return {
      chainId: isSet(object.chainId) ? Long.fromValue(object.chainId) : Long.UZERO,
      fromContractAddress: isSet(object.fromContractAddress)
        ? bytesFromBase64(object.fromContractAddress)
        : new Uint8Array(),
      toContractAddress: isSet(object.toContractAddress) ? bytesFromBase64(object.toContractAddress) : new Uint8Array(),
      lockType: isSet(object.lockType) ? Long.fromValue(object.lockType) : Long.UZERO,
    };
  },

  toJSON(message: WrapperMapping): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = (message.chainId || Long.UZERO).toString());
    message.fromContractAddress !== undefined &&
      (obj.fromContractAddress = base64FromBytes(
        message.fromContractAddress !== undefined ? message.fromContractAddress : new Uint8Array(),
      ));
    message.toContractAddress !== undefined &&
      (obj.toContractAddress = base64FromBytes(
        message.toContractAddress !== undefined ? message.toContractAddress : new Uint8Array(),
      ));
    message.lockType !== undefined && (obj.lockType = (message.lockType || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<WrapperMapping>): WrapperMapping {
    return WrapperMapping.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<WrapperMapping>): WrapperMapping {
    const message = createBaseWrapperMapping();
    message.chainId = (object.chainId !== undefined && object.chainId !== null)
      ? Long.fromValue(object.chainId)
      : Long.UZERO;
    message.fromContractAddress = object.fromContractAddress ?? new Uint8Array();
    message.toContractAddress = object.toContractAddress ?? new Uint8Array();
    message.lockType = (object.lockType !== undefined && object.lockType !== null)
      ? Long.fromValue(object.lockType)
      : Long.UZERO;
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
