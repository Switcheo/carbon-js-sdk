/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";

export const protobufPackage = "Switcheo.carbon.ccm";

/**
 * this line is used by starport scaffolding # 3
 * QueryParamsRequest is request type for the Query/Params RPC method.
 */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

export interface QueryCheckModuleContractRequest {
  moduleName: string;
  toContractAddress: Uint8Array;
  fromChainId: Long;
}

export interface QueryCheckModuleContractResponse {
  moduleName: string;
  exist: boolean;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryCheckModuleContractRequest(): QueryCheckModuleContractRequest {
  return { moduleName: "", toContractAddress: new Uint8Array(), fromChainId: Long.UZERO };
}

export const QueryCheckModuleContractRequest = {
  encode(message: QueryCheckModuleContractRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    if (message.toContractAddress.length !== 0) {
      writer.uint32(18).bytes(message.toContractAddress);
    }
    if (!message.fromChainId.isZero()) {
      writer.uint32(24).uint64(message.fromChainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCheckModuleContractRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCheckModuleContractRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.moduleName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.toContractAddress = reader.bytes();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.fromChainId = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCheckModuleContractRequest {
    return {
      moduleName: isSet(object.moduleName) ? String(object.moduleName) : "",
      toContractAddress: isSet(object.toContractAddress) ? bytesFromBase64(object.toContractAddress) : new Uint8Array(),
      fromChainId: isSet(object.fromChainId) ? Long.fromValue(object.fromChainId) : Long.UZERO,
    };
  },

  toJSON(message: QueryCheckModuleContractRequest): unknown {
    const obj: any = {};
    message.moduleName !== undefined && (obj.moduleName = message.moduleName);
    message.toContractAddress !== undefined &&
      (obj.toContractAddress = base64FromBytes(
        message.toContractAddress !== undefined ? message.toContractAddress : new Uint8Array(),
      ));
    message.fromChainId !== undefined && (obj.fromChainId = (message.fromChainId || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<QueryCheckModuleContractRequest>): QueryCheckModuleContractRequest {
    return QueryCheckModuleContractRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryCheckModuleContractRequest>): QueryCheckModuleContractRequest {
    const message = createBaseQueryCheckModuleContractRequest();
    message.moduleName = object.moduleName ?? "";
    message.toContractAddress = object.toContractAddress ?? new Uint8Array();
    message.fromChainId = (object.fromChainId !== undefined && object.fromChainId !== null)
      ? Long.fromValue(object.fromChainId)
      : Long.UZERO;
    return message;
  },
};

function createBaseQueryCheckModuleContractResponse(): QueryCheckModuleContractResponse {
  return { moduleName: "", exist: false };
}

export const QueryCheckModuleContractResponse = {
  encode(message: QueryCheckModuleContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    if (message.exist === true) {
      writer.uint32(16).bool(message.exist);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCheckModuleContractResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCheckModuleContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.moduleName = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.exist = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCheckModuleContractResponse {
    return {
      moduleName: isSet(object.moduleName) ? String(object.moduleName) : "",
      exist: isSet(object.exist) ? Boolean(object.exist) : false,
    };
  },

  toJSON(message: QueryCheckModuleContractResponse): unknown {
    const obj: any = {};
    message.moduleName !== undefined && (obj.moduleName = message.moduleName);
    message.exist !== undefined && (obj.exist = message.exist);
    return obj;
  },

  create(base?: DeepPartial<QueryCheckModuleContractResponse>): QueryCheckModuleContractResponse {
    return QueryCheckModuleContractResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryCheckModuleContractResponse>): QueryCheckModuleContractResponse {
    const message = createBaseQueryCheckModuleContractResponse();
    message.moduleName = object.moduleName ?? "";
    message.exist = object.exist ?? false;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * this line is used by starport scaffolding # 2
   * Parameters queries the parameters of the module.
   */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  CheckModuleContract(request: QueryCheckModuleContractRequest): Promise<QueryCheckModuleContractResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.ccm.Query";
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.CheckModuleContract = this.CheckModuleContract.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  CheckModuleContract(request: QueryCheckModuleContractRequest): Promise<QueryCheckModuleContractResponse> {
    const data = QueryCheckModuleContractRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CheckModuleContract", data);
    return promise.then((data) => QueryCheckModuleContractResponse.decode(_m0.Reader.create(data)));
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
