/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { DenomInfo } from "./denom_info";

export const protobufPackage = "Switcheo.carbon.btcx";

/** this line is used by starport scaffolding # 3 */
export interface QueryGetDenomInfoRequest {
  denom: string;
}

export interface QueryGetDenomInfoResponse {
  denomInfo?: DenomInfo;
}

export interface QueryGetDenomCrossChainInfoRequest {
  denom: string;
  chainId: Long;
}

export interface QueryGetDenomCrossChainInfoResponse {
  denomInfo?: DenomInfo;
  toChainId: Long;
  toAssetHash: string;
}

function createBaseQueryGetDenomInfoRequest(): QueryGetDenomInfoRequest {
  return { denom: "" };
}

export const QueryGetDenomInfoRequest = {
  encode(message: QueryGetDenomInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDenomInfoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDenomInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetDenomInfoRequest {
    return { denom: isSet(object.denom) ? String(object.denom) : "" };
  },

  toJSON(message: QueryGetDenomInfoRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<QueryGetDenomInfoRequest>): QueryGetDenomInfoRequest {
    return QueryGetDenomInfoRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetDenomInfoRequest>): QueryGetDenomInfoRequest {
    const message = createBaseQueryGetDenomInfoRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryGetDenomInfoResponse(): QueryGetDenomInfoResponse {
  return { denomInfo: undefined };
}

export const QueryGetDenomInfoResponse = {
  encode(message: QueryGetDenomInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomInfo !== undefined) {
      DenomInfo.encode(message.denomInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDenomInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDenomInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denomInfo = DenomInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetDenomInfoResponse {
    return { denomInfo: isSet(object.denomInfo) ? DenomInfo.fromJSON(object.denomInfo) : undefined };
  },

  toJSON(message: QueryGetDenomInfoResponse): unknown {
    const obj: any = {};
    message.denomInfo !== undefined &&
      (obj.denomInfo = message.denomInfo ? DenomInfo.toJSON(message.denomInfo) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryGetDenomInfoResponse>): QueryGetDenomInfoResponse {
    return QueryGetDenomInfoResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetDenomInfoResponse>): QueryGetDenomInfoResponse {
    const message = createBaseQueryGetDenomInfoResponse();
    message.denomInfo = (object.denomInfo !== undefined && object.denomInfo !== null)
      ? DenomInfo.fromPartial(object.denomInfo)
      : undefined;
    return message;
  },
};

function createBaseQueryGetDenomCrossChainInfoRequest(): QueryGetDenomCrossChainInfoRequest {
  return { denom: "", chainId: Long.UZERO };
}

export const QueryGetDenomCrossChainInfoRequest = {
  encode(message: QueryGetDenomCrossChainInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (!message.chainId.isZero()) {
      writer.uint32(16).uint64(message.chainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDenomCrossChainInfoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDenomCrossChainInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.chainId = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetDenomCrossChainInfoRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      chainId: isSet(object.chainId) ? Long.fromValue(object.chainId) : Long.UZERO,
    };
  },

  toJSON(message: QueryGetDenomCrossChainInfoRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.chainId !== undefined && (obj.chainId = (message.chainId || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<QueryGetDenomCrossChainInfoRequest>): QueryGetDenomCrossChainInfoRequest {
    return QueryGetDenomCrossChainInfoRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetDenomCrossChainInfoRequest>): QueryGetDenomCrossChainInfoRequest {
    const message = createBaseQueryGetDenomCrossChainInfoRequest();
    message.denom = object.denom ?? "";
    message.chainId = (object.chainId !== undefined && object.chainId !== null)
      ? Long.fromValue(object.chainId)
      : Long.UZERO;
    return message;
  },
};

function createBaseQueryGetDenomCrossChainInfoResponse(): QueryGetDenomCrossChainInfoResponse {
  return { denomInfo: undefined, toChainId: Long.UZERO, toAssetHash: "" };
}

export const QueryGetDenomCrossChainInfoResponse = {
  encode(message: QueryGetDenomCrossChainInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomInfo !== undefined) {
      DenomInfo.encode(message.denomInfo, writer.uint32(10).fork()).ldelim();
    }
    if (!message.toChainId.isZero()) {
      writer.uint32(16).uint64(message.toChainId);
    }
    if (message.toAssetHash !== "") {
      writer.uint32(26).string(message.toAssetHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDenomCrossChainInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDenomCrossChainInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denomInfo = DenomInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.toChainId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.toAssetHash = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetDenomCrossChainInfoResponse {
    return {
      denomInfo: isSet(object.denomInfo) ? DenomInfo.fromJSON(object.denomInfo) : undefined,
      toChainId: isSet(object.toChainId) ? Long.fromValue(object.toChainId) : Long.UZERO,
      toAssetHash: isSet(object.toAssetHash) ? String(object.toAssetHash) : "",
    };
  },

  toJSON(message: QueryGetDenomCrossChainInfoResponse): unknown {
    const obj: any = {};
    message.denomInfo !== undefined &&
      (obj.denomInfo = message.denomInfo ? DenomInfo.toJSON(message.denomInfo) : undefined);
    message.toChainId !== undefined && (obj.toChainId = (message.toChainId || Long.UZERO).toString());
    message.toAssetHash !== undefined && (obj.toAssetHash = message.toAssetHash);
    return obj;
  },

  create(base?: DeepPartial<QueryGetDenomCrossChainInfoResponse>): QueryGetDenomCrossChainInfoResponse {
    return QueryGetDenomCrossChainInfoResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetDenomCrossChainInfoResponse>): QueryGetDenomCrossChainInfoResponse {
    const message = createBaseQueryGetDenomCrossChainInfoResponse();
    message.denomInfo = (object.denomInfo !== undefined && object.denomInfo !== null)
      ? DenomInfo.fromPartial(object.denomInfo)
      : undefined;
    message.toChainId = (object.toChainId !== undefined && object.toChainId !== null)
      ? Long.fromValue(object.toChainId)
      : Long.UZERO;
    message.toAssetHash = object.toAssetHash ?? "";
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  DenomInfo(request: QueryGetDenomInfoRequest): Promise<QueryGetDenomInfoResponse>;
  DenomCrossChainInfo(request: QueryGetDenomCrossChainInfoRequest): Promise<QueryGetDenomCrossChainInfoResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.btcx.Query";
    this.rpc = rpc;
    this.DenomInfo = this.DenomInfo.bind(this);
    this.DenomCrossChainInfo = this.DenomCrossChainInfo.bind(this);
  }
  DenomInfo(request: QueryGetDenomInfoRequest): Promise<QueryGetDenomInfoResponse> {
    const data = QueryGetDenomInfoRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DenomInfo", data);
    return promise.then((data) => QueryGetDenomInfoResponse.decode(_m0.Reader.create(data)));
  }

  DenomCrossChainInfo(request: QueryGetDenomCrossChainInfoRequest): Promise<QueryGetDenomCrossChainInfoResponse> {
    const data = QueryGetDenomCrossChainInfoRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DenomCrossChainInfo", data);
    return promise.then((data) => QueryGetDenomCrossChainInfoResponse.decode(_m0.Reader.create(data)));
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
