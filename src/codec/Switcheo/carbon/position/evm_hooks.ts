/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.position";

export interface QueryEVMPositionRequest {
  evmAddress: Uint8Array;
  carbonAddress: string;
  marketId: string;
  caller: Uint8Array;
}

export interface QueryEVMPositionQueue {
  contractAddress: Uint8Array;
  requests: QueryEVMPositionRequest[];
}

const baseQueryEVMPositionRequest: object = { carbonAddress: "", marketId: "" };

export const QueryEVMPositionRequest = {
  encode(
    message: QueryEVMPositionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.evmAddress.length !== 0) {
      writer.uint32(10).bytes(message.evmAddress);
    }
    if (message.carbonAddress !== "") {
      writer.uint32(18).string(message.carbonAddress);
    }
    if (message.marketId !== "") {
      writer.uint32(26).string(message.marketId);
    }
    if (message.caller.length !== 0) {
      writer.uint32(34).bytes(message.caller);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryEVMPositionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryEVMPositionRequest,
    } as QueryEVMPositionRequest;
    message.evmAddress = new Uint8Array();
    message.caller = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evmAddress = reader.bytes();
          break;
        case 2:
          message.carbonAddress = reader.string();
          break;
        case 3:
          message.marketId = reader.string();
          break;
        case 4:
          message.caller = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryEVMPositionRequest {
    const message = {
      ...baseQueryEVMPositionRequest,
    } as QueryEVMPositionRequest;
    message.evmAddress =
      object.evmAddress !== undefined && object.evmAddress !== null
        ? bytesFromBase64(object.evmAddress)
        : new Uint8Array();
    message.carbonAddress =
      object.carbonAddress !== undefined && object.carbonAddress !== null
        ? String(object.carbonAddress)
        : "";
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.caller =
      object.caller !== undefined && object.caller !== null
        ? bytesFromBase64(object.caller)
        : new Uint8Array();
    return message;
  },

  toJSON(message: QueryEVMPositionRequest): unknown {
    const obj: any = {};
    message.evmAddress !== undefined &&
      (obj.evmAddress = base64FromBytes(
        message.evmAddress !== undefined ? message.evmAddress : new Uint8Array()
      ));
    message.carbonAddress !== undefined &&
      (obj.carbonAddress = message.carbonAddress);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.caller !== undefined &&
      (obj.caller = base64FromBytes(
        message.caller !== undefined ? message.caller : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryEVMPositionRequest>
  ): QueryEVMPositionRequest {
    const message = {
      ...baseQueryEVMPositionRequest,
    } as QueryEVMPositionRequest;
    message.evmAddress = object.evmAddress ?? new Uint8Array();
    message.carbonAddress = object.carbonAddress ?? "";
    message.marketId = object.marketId ?? "";
    message.caller = object.caller ?? new Uint8Array();
    return message;
  },
};

const baseQueryEVMPositionQueue: object = {};

export const QueryEVMPositionQueue = {
  encode(
    message: QueryEVMPositionQueue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractAddress.length !== 0) {
      writer.uint32(10).bytes(message.contractAddress);
    }
    for (const v of message.requests) {
      QueryEVMPositionRequest.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryEVMPositionQueue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryEVMPositionQueue } as QueryEVMPositionQueue;
    message.requests = [];
    message.contractAddress = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.bytes();
          break;
        case 2:
          message.requests.push(
            QueryEVMPositionRequest.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryEVMPositionQueue {
    const message = { ...baseQueryEVMPositionQueue } as QueryEVMPositionQueue;
    message.contractAddress =
      object.contractAddress !== undefined && object.contractAddress !== null
        ? bytesFromBase64(object.contractAddress)
        : new Uint8Array();
    message.requests = (object.requests ?? []).map((e: any) =>
      QueryEVMPositionRequest.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryEVMPositionQueue): unknown {
    const obj: any = {};
    message.contractAddress !== undefined &&
      (obj.contractAddress = base64FromBytes(
        message.contractAddress !== undefined
          ? message.contractAddress
          : new Uint8Array()
      ));
    if (message.requests) {
      obj.requests = message.requests.map((e) =>
        e ? QueryEVMPositionRequest.toJSON(e) : undefined
      );
    } else {
      obj.requests = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryEVMPositionQueue>
  ): QueryEVMPositionQueue {
    const message = { ...baseQueryEVMPositionQueue } as QueryEVMPositionQueue;
    message.contractAddress = object.contractAddress ?? new Uint8Array();
    message.requests = (object.requests ?? []).map((e) =>
      QueryEVMPositionRequest.fromPartial(e)
    );
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
