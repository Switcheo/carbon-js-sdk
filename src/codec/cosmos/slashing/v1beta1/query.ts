/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Params, ValidatorSigningInfo } from "./slashing";

export const protobufPackage = "cosmos.slashing.v1beta1";

/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponse {
  params?: Params;
}

/**
 * QuerySigningInfoRequest is the request type for the Query/SigningInfo RPC
 * method
 */
export interface QuerySigningInfoRequest {
  /** cons_address is the address to query signing info of */
  consAddress: string;
}

/**
 * QuerySigningInfoResponse is the response type for the Query/SigningInfo RPC
 * method
 */
export interface QuerySigningInfoResponse {
  /** val_signing_info is the signing info of requested val cons address */
  valSigningInfo?: ValidatorSigningInfo;
}

/**
 * QuerySigningInfosRequest is the request type for the Query/SigningInfos RPC
 * method
 */
export interface QuerySigningInfosRequest {
  pagination?: PageRequest;
}

/**
 * QuerySigningInfosResponse is the response type for the Query/SigningInfos RPC
 * method
 */
export interface QuerySigningInfosResponse {
  /** info is the signing info of all validators */
  info: ValidatorSigningInfo[];
  pagination?: PageResponse;
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

function createBaseQuerySigningInfoRequest(): QuerySigningInfoRequest {
  return { consAddress: "" };
}

export const QuerySigningInfoRequest = {
  encode(message: QuerySigningInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.consAddress !== "") {
      writer.uint32(10).string(message.consAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySigningInfoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySigningInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.consAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuerySigningInfoRequest {
    return { consAddress: isSet(object.consAddress) ? String(object.consAddress) : "" };
  },

  toJSON(message: QuerySigningInfoRequest): unknown {
    const obj: any = {};
    message.consAddress !== undefined && (obj.consAddress = message.consAddress);
    return obj;
  },

  create(base?: DeepPartial<QuerySigningInfoRequest>): QuerySigningInfoRequest {
    return QuerySigningInfoRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QuerySigningInfoRequest>): QuerySigningInfoRequest {
    const message = createBaseQuerySigningInfoRequest();
    message.consAddress = object.consAddress ?? "";
    return message;
  },
};

function createBaseQuerySigningInfoResponse(): QuerySigningInfoResponse {
  return { valSigningInfo: undefined };
}

export const QuerySigningInfoResponse = {
  encode(message: QuerySigningInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valSigningInfo !== undefined) {
      ValidatorSigningInfo.encode(message.valSigningInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySigningInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySigningInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.valSigningInfo = ValidatorSigningInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuerySigningInfoResponse {
    return {
      valSigningInfo: isSet(object.valSigningInfo) ? ValidatorSigningInfo.fromJSON(object.valSigningInfo) : undefined,
    };
  },

  toJSON(message: QuerySigningInfoResponse): unknown {
    const obj: any = {};
    message.valSigningInfo !== undefined &&
      (obj.valSigningInfo = message.valSigningInfo ? ValidatorSigningInfo.toJSON(message.valSigningInfo) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QuerySigningInfoResponse>): QuerySigningInfoResponse {
    return QuerySigningInfoResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QuerySigningInfoResponse>): QuerySigningInfoResponse {
    const message = createBaseQuerySigningInfoResponse();
    message.valSigningInfo = (object.valSigningInfo !== undefined && object.valSigningInfo !== null)
      ? ValidatorSigningInfo.fromPartial(object.valSigningInfo)
      : undefined;
    return message;
  },
};

function createBaseQuerySigningInfosRequest(): QuerySigningInfosRequest {
  return { pagination: undefined };
}

export const QuerySigningInfosRequest = {
  encode(message: QuerySigningInfosRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySigningInfosRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySigningInfosRequest();
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

  fromJSON(object: any): QuerySigningInfosRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QuerySigningInfosRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QuerySigningInfosRequest>): QuerySigningInfosRequest {
    return QuerySigningInfosRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QuerySigningInfosRequest>): QuerySigningInfosRequest {
    const message = createBaseQuerySigningInfosRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQuerySigningInfosResponse(): QuerySigningInfosResponse {
  return { info: [], pagination: undefined };
}

export const QuerySigningInfosResponse = {
  encode(message: QuerySigningInfosResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.info) {
      ValidatorSigningInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySigningInfosResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySigningInfosResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.info.push(ValidatorSigningInfo.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QuerySigningInfosResponse {
    return {
      info: Array.isArray(object?.info) ? object.info.map((e: any) => ValidatorSigningInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QuerySigningInfosResponse): unknown {
    const obj: any = {};
    if (message.info) {
      obj.info = message.info.map((e) => e ? ValidatorSigningInfo.toJSON(e) : undefined);
    } else {
      obj.info = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QuerySigningInfosResponse>): QuerySigningInfosResponse {
    return QuerySigningInfosResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QuerySigningInfosResponse>): QuerySigningInfosResponse {
    const message = createBaseQuerySigningInfosResponse();
    message.info = object.info?.map((e) => ValidatorSigningInfo.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query provides defines the gRPC querier service */
export interface Query {
  /** Params queries the parameters of slashing module */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** SigningInfo queries the signing info of given cons address */
  SigningInfo(request: QuerySigningInfoRequest): Promise<QuerySigningInfoResponse>;
  /** SigningInfos queries signing info of all validators */
  SigningInfos(request: QuerySigningInfosRequest): Promise<QuerySigningInfosResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "cosmos.slashing.v1beta1.Query";
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.SigningInfo = this.SigningInfo.bind(this);
    this.SigningInfos = this.SigningInfos.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  SigningInfo(request: QuerySigningInfoRequest): Promise<QuerySigningInfoResponse> {
    const data = QuerySigningInfoRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SigningInfo", data);
    return promise.then((data) => QuerySigningInfoResponse.decode(_m0.Reader.create(data)));
  }

  SigningInfos(request: QuerySigningInfosRequest): Promise<QuerySigningInfosResponse> {
    const data = QuerySigningInfosRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SigningInfos", data);
    return promise.then((data) => QuerySigningInfosResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
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
