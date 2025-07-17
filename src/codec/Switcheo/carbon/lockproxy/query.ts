/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { WrapperMapping } from "./lockproxy";

export const protobufPackage = "Switcheo.carbon.lockproxy";

/** this line is used by starport scaffolding # 3 */
export interface QueryGetProxyRequest {
  operatorAddress: string;
}

export interface QueryGetProxyResponse {
  proxyHash: Uint8Array;
}

export interface QueryListWrapperMappingRequest {
  pagination?: PageRequest;
}

export interface QueryListWrapperMappingResponse {
  wrapperMappings: WrapperMapping[];
  pagination?: PageResponse;
}

function createBaseQueryGetProxyRequest(): QueryGetProxyRequest {
  return { operatorAddress: "" };
}

export const QueryGetProxyRequest = {
  encode(message: QueryGetProxyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProxyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProxyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.operatorAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetProxyRequest {
    return { operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "" };
  },

  toJSON(message: QueryGetProxyRequest): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    return obj;
  },

  create(base?: DeepPartial<QueryGetProxyRequest>): QueryGetProxyRequest {
    return QueryGetProxyRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetProxyRequest>): QueryGetProxyRequest {
    const message = createBaseQueryGetProxyRequest();
    message.operatorAddress = object.operatorAddress ?? "";
    return message;
  },
};

function createBaseQueryGetProxyResponse(): QueryGetProxyResponse {
  return { proxyHash: new Uint8Array() };
}

export const QueryGetProxyResponse = {
  encode(message: QueryGetProxyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proxyHash.length !== 0) {
      writer.uint32(10).bytes(message.proxyHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProxyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProxyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.proxyHash = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetProxyResponse {
    return { proxyHash: isSet(object.proxyHash) ? bytesFromBase64(object.proxyHash) : new Uint8Array() };
  },

  toJSON(message: QueryGetProxyResponse): unknown {
    const obj: any = {};
    message.proxyHash !== undefined &&
      (obj.proxyHash = base64FromBytes(message.proxyHash !== undefined ? message.proxyHash : new Uint8Array()));
    return obj;
  },

  create(base?: DeepPartial<QueryGetProxyResponse>): QueryGetProxyResponse {
    return QueryGetProxyResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetProxyResponse>): QueryGetProxyResponse {
    const message = createBaseQueryGetProxyResponse();
    message.proxyHash = object.proxyHash ?? new Uint8Array();
    return message;
  },
};

function createBaseQueryListWrapperMappingRequest(): QueryListWrapperMappingRequest {
  return { pagination: undefined };
}

export const QueryListWrapperMappingRequest = {
  encode(message: QueryListWrapperMappingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListWrapperMappingRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListWrapperMappingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryListWrapperMappingRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryListWrapperMappingRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryListWrapperMappingRequest>): QueryListWrapperMappingRequest {
    return QueryListWrapperMappingRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryListWrapperMappingRequest>): QueryListWrapperMappingRequest {
    const message = createBaseQueryListWrapperMappingRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryListWrapperMappingResponse(): QueryListWrapperMappingResponse {
  return { wrapperMappings: [], pagination: undefined };
}

export const QueryListWrapperMappingResponse = {
  encode(message: QueryListWrapperMappingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.wrapperMappings) {
      WrapperMapping.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListWrapperMappingResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListWrapperMappingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.wrapperMappings.push(WrapperMapping.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryListWrapperMappingResponse {
    return {
      wrapperMappings: Array.isArray(object?.wrapperMappings)
        ? object.wrapperMappings.map((e: any) => WrapperMapping.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryListWrapperMappingResponse): unknown {
    const obj: any = {};
    if (message.wrapperMappings) {
      obj.wrapperMappings = message.wrapperMappings.map((e) => e ? WrapperMapping.toJSON(e) : undefined);
    } else {
      obj.wrapperMappings = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryListWrapperMappingResponse>): QueryListWrapperMappingResponse {
    return QueryListWrapperMappingResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryListWrapperMappingResponse>): QueryListWrapperMappingResponse {
    const message = createBaseQueryListWrapperMappingResponse();
    message.wrapperMappings = object.wrapperMappings?.map((e) => WrapperMapping.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  Proxy(request: QueryGetProxyRequest): Promise<QueryGetProxyResponse>;
  WrapperMappings(request: QueryListWrapperMappingRequest): Promise<QueryListWrapperMappingResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.lockproxy.Query";
    this.rpc = rpc;
    this.Proxy = this.Proxy.bind(this);
    this.WrapperMappings = this.WrapperMappings.bind(this);
  }
  Proxy(request: QueryGetProxyRequest): Promise<QueryGetProxyResponse> {
    const data = QueryGetProxyRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Proxy", data);
    return promise.then((data) => QueryGetProxyResponse.decode(_m0.Reader.create(data)));
  }

  WrapperMappings(request: QueryListWrapperMappingRequest): Promise<QueryListWrapperMappingResponse> {
    const data = QueryListWrapperMappingRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "WrapperMappings", data);
    return promise.then((data) => QueryListWrapperMappingResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
