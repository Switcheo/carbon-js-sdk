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

const baseQueryGetDenomInfoRequest: object = { denom: "" };

export const QueryGetDenomInfoRequest = {
  encode(
    message: QueryGetDenomInfoRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetDenomInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDenomInfoRequest,
    } as QueryGetDenomInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDenomInfoRequest {
    const message = {
      ...baseQueryGetDenomInfoRequest,
    } as QueryGetDenomInfoRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: QueryGetDenomInfoRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDenomInfoRequest>
  ): QueryGetDenomInfoRequest {
    const message = {
      ...baseQueryGetDenomInfoRequest,
    } as QueryGetDenomInfoRequest;
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseQueryGetDenomInfoResponse: object = {};

export const QueryGetDenomInfoResponse = {
  encode(
    message: QueryGetDenomInfoResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denomInfo !== undefined) {
      DenomInfo.encode(message.denomInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetDenomInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDenomInfoResponse,
    } as QueryGetDenomInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomInfo = DenomInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDenomInfoResponse {
    const message = {
      ...baseQueryGetDenomInfoResponse,
    } as QueryGetDenomInfoResponse;
    message.denomInfo =
      object.denomInfo !== undefined && object.denomInfo !== null
        ? DenomInfo.fromJSON(object.denomInfo)
        : undefined;
    return message;
  },

  toJSON(message: QueryGetDenomInfoResponse): unknown {
    const obj: any = {};
    message.denomInfo !== undefined &&
      (obj.denomInfo = message.denomInfo
        ? DenomInfo.toJSON(message.denomInfo)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDenomInfoResponse>
  ): QueryGetDenomInfoResponse {
    const message = {
      ...baseQueryGetDenomInfoResponse,
    } as QueryGetDenomInfoResponse;
    message.denomInfo =
      object.denomInfo !== undefined && object.denomInfo !== null
        ? DenomInfo.fromPartial(object.denomInfo)
        : undefined;
    return message;
  },
};

const baseQueryGetDenomCrossChainInfoRequest: object = {
  denom: "",
  chainId: Long.UZERO,
};

export const QueryGetDenomCrossChainInfoRequest = {
  encode(
    message: QueryGetDenomCrossChainInfoRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (!message.chainId.isZero()) {
      writer.uint32(16).uint64(message.chainId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetDenomCrossChainInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDenomCrossChainInfoRequest,
    } as QueryGetDenomCrossChainInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.chainId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDenomCrossChainInfoRequest {
    const message = {
      ...baseQueryGetDenomCrossChainInfoRequest,
    } as QueryGetDenomCrossChainInfoRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Long.fromString(object.chainId)
        : Long.UZERO;
    return message;
  },

  toJSON(message: QueryGetDenomCrossChainInfoRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.chainId !== undefined &&
      (obj.chainId = (message.chainId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDenomCrossChainInfoRequest>
  ): QueryGetDenomCrossChainInfoRequest {
    const message = {
      ...baseQueryGetDenomCrossChainInfoRequest,
    } as QueryGetDenomCrossChainInfoRequest;
    message.denom = object.denom ?? "";
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Long.fromValue(object.chainId)
        : Long.UZERO;
    return message;
  },
};

const baseQueryGetDenomCrossChainInfoResponse: object = {
  toChainId: Long.UZERO,
  toAssetHash: "",
};

export const QueryGetDenomCrossChainInfoResponse = {
  encode(
    message: QueryGetDenomCrossChainInfoResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetDenomCrossChainInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDenomCrossChainInfoResponse,
    } as QueryGetDenomCrossChainInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomInfo = DenomInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.toChainId = reader.uint64() as Long;
          break;
        case 3:
          message.toAssetHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDenomCrossChainInfoResponse {
    const message = {
      ...baseQueryGetDenomCrossChainInfoResponse,
    } as QueryGetDenomCrossChainInfoResponse;
    message.denomInfo =
      object.denomInfo !== undefined && object.denomInfo !== null
        ? DenomInfo.fromJSON(object.denomInfo)
        : undefined;
    message.toChainId =
      object.toChainId !== undefined && object.toChainId !== null
        ? Long.fromString(object.toChainId)
        : Long.UZERO;
    message.toAssetHash =
      object.toAssetHash !== undefined && object.toAssetHash !== null
        ? String(object.toAssetHash)
        : "";
    return message;
  },

  toJSON(message: QueryGetDenomCrossChainInfoResponse): unknown {
    const obj: any = {};
    message.denomInfo !== undefined &&
      (obj.denomInfo = message.denomInfo
        ? DenomInfo.toJSON(message.denomInfo)
        : undefined);
    message.toChainId !== undefined &&
      (obj.toChainId = (message.toChainId || Long.UZERO).toString());
    message.toAssetHash !== undefined &&
      (obj.toAssetHash = message.toAssetHash);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDenomCrossChainInfoResponse>
  ): QueryGetDenomCrossChainInfoResponse {
    const message = {
      ...baseQueryGetDenomCrossChainInfoResponse,
    } as QueryGetDenomCrossChainInfoResponse;
    message.denomInfo =
      object.denomInfo !== undefined && object.denomInfo !== null
        ? DenomInfo.fromPartial(object.denomInfo)
        : undefined;
    message.toChainId =
      object.toChainId !== undefined && object.toChainId !== null
        ? Long.fromValue(object.toChainId)
        : Long.UZERO;
    message.toAssetHash = object.toAssetHash ?? "";
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  DenomInfo(
    request: QueryGetDenomInfoRequest
  ): Promise<QueryGetDenomInfoResponse>;
  DenomCrossChainInfo(
    request: QueryGetDenomCrossChainInfoRequest
  ): Promise<QueryGetDenomCrossChainInfoResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.DenomInfo = this.DenomInfo.bind(this);
    this.DenomCrossChainInfo = this.DenomCrossChainInfo.bind(this);
  }
  DenomInfo(
    request: QueryGetDenomInfoRequest
  ): Promise<QueryGetDenomInfoResponse> {
    const data = QueryGetDenomInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.btcx.Query",
      "DenomInfo",
      data
    );
    return promise.then((data) =>
      QueryGetDenomInfoResponse.decode(new _m0.Reader(data))
    );
  }

  DenomCrossChainInfo(
    request: QueryGetDenomCrossChainInfoRequest
  ): Promise<QueryGetDenomCrossChainInfoResponse> {
    const data = QueryGetDenomCrossChainInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.btcx.Query",
      "DenomCrossChainInfo",
      data
    );
    return promise.then((data) =>
      QueryGetDenomCrossChainInfoResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
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
