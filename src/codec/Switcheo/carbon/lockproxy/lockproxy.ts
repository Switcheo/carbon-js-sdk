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

const baseWrapperMapping: object = {
  chainId: Long.UZERO,
  lockType: Long.UZERO,
};

export const WrapperMapping = {
  encode(
    message: WrapperMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWrapperMapping } as WrapperMapping;
    message.fromContractAddress = new Uint8Array();
    message.toContractAddress = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.uint64() as Long;
          break;
        case 2:
          message.fromContractAddress = reader.bytes();
          break;
        case 3:
          message.toContractAddress = reader.bytes();
          break;
        case 4:
          message.lockType = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WrapperMapping {
    const message = { ...baseWrapperMapping } as WrapperMapping;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Long.fromString(object.chainId)
        : Long.UZERO;
    message.fromContractAddress =
      object.fromContractAddress !== undefined &&
      object.fromContractAddress !== null
        ? bytesFromBase64(object.fromContractAddress)
        : new Uint8Array();
    message.toContractAddress =
      object.toContractAddress !== undefined &&
      object.toContractAddress !== null
        ? bytesFromBase64(object.toContractAddress)
        : new Uint8Array();
    message.lockType =
      object.lockType !== undefined && object.lockType !== null
        ? Long.fromString(object.lockType)
        : Long.UZERO;
    return message;
  },

  toJSON(message: WrapperMapping): unknown {
    const obj: any = {};
    message.chainId !== undefined &&
      (obj.chainId = (message.chainId || Long.UZERO).toString());
    message.fromContractAddress !== undefined &&
      (obj.fromContractAddress = base64FromBytes(
        message.fromContractAddress !== undefined
          ? message.fromContractAddress
          : new Uint8Array()
      ));
    message.toContractAddress !== undefined &&
      (obj.toContractAddress = base64FromBytes(
        message.toContractAddress !== undefined
          ? message.toContractAddress
          : new Uint8Array()
      ));
    message.lockType !== undefined &&
      (obj.lockType = (message.lockType || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<WrapperMapping>): WrapperMapping {
    const message = { ...baseWrapperMapping } as WrapperMapping;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Long.fromValue(object.chainId)
        : Long.UZERO;
    message.fromContractAddress =
      object.fromContractAddress ?? new Uint8Array();
    message.toContractAddress = object.toContractAddress ?? new Uint8Array();
    message.lockType =
      object.lockType !== undefined && object.lockType !== null
        ? Long.fromValue(object.lockType)
        : Long.UZERO;
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
