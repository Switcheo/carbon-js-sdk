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

function createBaseQueryEVMPositionRequest(): QueryEVMPositionRequest {
  return { evmAddress: new Uint8Array(), carbonAddress: "", marketId: "", caller: new Uint8Array() };
}

export const QueryEVMPositionRequest = {
  encode(message: QueryEVMPositionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEVMPositionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEVMPositionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.evmAddress = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.carbonAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.marketId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.caller = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryEVMPositionRequest {
    return {
      evmAddress: isSet(object.evmAddress) ? bytesFromBase64(object.evmAddress) : new Uint8Array(),
      carbonAddress: isSet(object.carbonAddress) ? String(object.carbonAddress) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      caller: isSet(object.caller) ? bytesFromBase64(object.caller) : new Uint8Array(),
    };
  },

  toJSON(message: QueryEVMPositionRequest): unknown {
    const obj: any = {};
    message.evmAddress !== undefined &&
      (obj.evmAddress = base64FromBytes(message.evmAddress !== undefined ? message.evmAddress : new Uint8Array()));
    message.carbonAddress !== undefined && (obj.carbonAddress = message.carbonAddress);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.caller !== undefined &&
      (obj.caller = base64FromBytes(message.caller !== undefined ? message.caller : new Uint8Array()));
    return obj;
  },

  create(base?: DeepPartial<QueryEVMPositionRequest>): QueryEVMPositionRequest {
    return QueryEVMPositionRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryEVMPositionRequest>): QueryEVMPositionRequest {
    const message = createBaseQueryEVMPositionRequest();
    message.evmAddress = object.evmAddress ?? new Uint8Array();
    message.carbonAddress = object.carbonAddress ?? "";
    message.marketId = object.marketId ?? "";
    message.caller = object.caller ?? new Uint8Array();
    return message;
  },
};

function createBaseQueryEVMPositionQueue(): QueryEVMPositionQueue {
  return { contractAddress: new Uint8Array(), requests: [] };
}

export const QueryEVMPositionQueue = {
  encode(message: QueryEVMPositionQueue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress.length !== 0) {
      writer.uint32(10).bytes(message.contractAddress);
    }
    for (const v of message.requests) {
      QueryEVMPositionRequest.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEVMPositionQueue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEVMPositionQueue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.contractAddress = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.requests.push(QueryEVMPositionRequest.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryEVMPositionQueue {
    return {
      contractAddress: isSet(object.contractAddress) ? bytesFromBase64(object.contractAddress) : new Uint8Array(),
      requests: Array.isArray(object?.requests)
        ? object.requests.map((e: any) => QueryEVMPositionRequest.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryEVMPositionQueue): unknown {
    const obj: any = {};
    message.contractAddress !== undefined &&
      (obj.contractAddress = base64FromBytes(
        message.contractAddress !== undefined ? message.contractAddress : new Uint8Array(),
      ));
    if (message.requests) {
      obj.requests = message.requests.map((e) => e ? QueryEVMPositionRequest.toJSON(e) : undefined);
    } else {
      obj.requests = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryEVMPositionQueue>): QueryEVMPositionQueue {
    return QueryEVMPositionQueue.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryEVMPositionQueue>): QueryEVMPositionQueue {
    const message = createBaseQueryEVMPositionQueue();
    message.contractAddress = object.contractAddress ?? new Uint8Array();
    message.requests = object.requests?.map((e) => QueryEVMPositionRequest.fromPartial(e)) || [];
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
