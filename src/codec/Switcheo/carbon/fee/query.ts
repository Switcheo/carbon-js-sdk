/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { MinGasPrice, MsgGasCost } from "./fee";

export const protobufPackage = "Switcheo.carbon.fee";

/** this line is used by starport scaffolding # 3 */
export interface QueryGetMsgGasCostRequest {
  msgType: string;
}

export interface QueryGetMsgGasCostResponse {
  msgGasCost?: MsgGasCost;
}

export interface QueryAllMsgGasCostRequest {
  pagination?: PageRequest;
}

export interface QueryAllMsgGasCostResponse {
  msgGasCosts: MsgGasCost[];
  pagination?: PageResponse;
}

export interface QueryGetMinGasPriceRequest {
  denom: string;
}

export interface QueryGetMinGasPriceResponse {
  minGasPrice?: MinGasPrice;
}

export interface QueryAllMinGasPriceRequest {
  pagination?: PageRequest;
}

export interface QueryAllMinGasPriceResponse {
  minGasPrices: MinGasPrice[];
  pagination?: PageResponse;
}

function createBaseQueryGetMsgGasCostRequest(): QueryGetMsgGasCostRequest {
  return { msgType: "" };
}

export const QueryGetMsgGasCostRequest = {
  encode(message: QueryGetMsgGasCostRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgType !== "") {
      writer.uint32(10).string(message.msgType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMsgGasCostRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMsgGasCostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.msgType = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetMsgGasCostRequest {
    return { msgType: isSet(object.msgType) ? String(object.msgType) : "" };
  },

  toJSON(message: QueryGetMsgGasCostRequest): unknown {
    const obj: any = {};
    message.msgType !== undefined && (obj.msgType = message.msgType);
    return obj;
  },

  create(base?: DeepPartial<QueryGetMsgGasCostRequest>): QueryGetMsgGasCostRequest {
    return QueryGetMsgGasCostRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetMsgGasCostRequest>): QueryGetMsgGasCostRequest {
    const message = createBaseQueryGetMsgGasCostRequest();
    message.msgType = object.msgType ?? "";
    return message;
  },
};

function createBaseQueryGetMsgGasCostResponse(): QueryGetMsgGasCostResponse {
  return { msgGasCost: undefined };
}

export const QueryGetMsgGasCostResponse = {
  encode(message: QueryGetMsgGasCostResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgGasCost !== undefined) {
      MsgGasCost.encode(message.msgGasCost, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMsgGasCostResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMsgGasCostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.msgGasCost = MsgGasCost.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetMsgGasCostResponse {
    return { msgGasCost: isSet(object.msgGasCost) ? MsgGasCost.fromJSON(object.msgGasCost) : undefined };
  },

  toJSON(message: QueryGetMsgGasCostResponse): unknown {
    const obj: any = {};
    message.msgGasCost !== undefined &&
      (obj.msgGasCost = message.msgGasCost ? MsgGasCost.toJSON(message.msgGasCost) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryGetMsgGasCostResponse>): QueryGetMsgGasCostResponse {
    return QueryGetMsgGasCostResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetMsgGasCostResponse>): QueryGetMsgGasCostResponse {
    const message = createBaseQueryGetMsgGasCostResponse();
    message.msgGasCost = (object.msgGasCost !== undefined && object.msgGasCost !== null)
      ? MsgGasCost.fromPartial(object.msgGasCost)
      : undefined;
    return message;
  },
};

function createBaseQueryAllMsgGasCostRequest(): QueryAllMsgGasCostRequest {
  return { pagination: undefined };
}

export const QueryAllMsgGasCostRequest = {
  encode(message: QueryAllMsgGasCostRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMsgGasCostRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMsgGasCostRequest();
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

  fromJSON(object: any): QueryAllMsgGasCostRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllMsgGasCostRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllMsgGasCostRequest>): QueryAllMsgGasCostRequest {
    return QueryAllMsgGasCostRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllMsgGasCostRequest>): QueryAllMsgGasCostRequest {
    const message = createBaseQueryAllMsgGasCostRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllMsgGasCostResponse(): QueryAllMsgGasCostResponse {
  return { msgGasCosts: [], pagination: undefined };
}

export const QueryAllMsgGasCostResponse = {
  encode(message: QueryAllMsgGasCostResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.msgGasCosts) {
      MsgGasCost.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMsgGasCostResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMsgGasCostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.msgGasCosts.push(MsgGasCost.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllMsgGasCostResponse {
    return {
      msgGasCosts: Array.isArray(object?.msgGasCosts) ? object.msgGasCosts.map((e: any) => MsgGasCost.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllMsgGasCostResponse): unknown {
    const obj: any = {};
    if (message.msgGasCosts) {
      obj.msgGasCosts = message.msgGasCosts.map((e) => e ? MsgGasCost.toJSON(e) : undefined);
    } else {
      obj.msgGasCosts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllMsgGasCostResponse>): QueryAllMsgGasCostResponse {
    return QueryAllMsgGasCostResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllMsgGasCostResponse>): QueryAllMsgGasCostResponse {
    const message = createBaseQueryAllMsgGasCostResponse();
    message.msgGasCosts = object.msgGasCosts?.map((e) => MsgGasCost.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetMinGasPriceRequest(): QueryGetMinGasPriceRequest {
  return { denom: "" };
}

export const QueryGetMinGasPriceRequest = {
  encode(message: QueryGetMinGasPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMinGasPriceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMinGasPriceRequest();
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

  fromJSON(object: any): QueryGetMinGasPriceRequest {
    return { denom: isSet(object.denom) ? String(object.denom) : "" };
  },

  toJSON(message: QueryGetMinGasPriceRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<QueryGetMinGasPriceRequest>): QueryGetMinGasPriceRequest {
    return QueryGetMinGasPriceRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetMinGasPriceRequest>): QueryGetMinGasPriceRequest {
    const message = createBaseQueryGetMinGasPriceRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryGetMinGasPriceResponse(): QueryGetMinGasPriceResponse {
  return { minGasPrice: undefined };
}

export const QueryGetMinGasPriceResponse = {
  encode(message: QueryGetMinGasPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minGasPrice !== undefined) {
      MinGasPrice.encode(message.minGasPrice, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMinGasPriceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMinGasPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.minGasPrice = MinGasPrice.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetMinGasPriceResponse {
    return { minGasPrice: isSet(object.minGasPrice) ? MinGasPrice.fromJSON(object.minGasPrice) : undefined };
  },

  toJSON(message: QueryGetMinGasPriceResponse): unknown {
    const obj: any = {};
    message.minGasPrice !== undefined &&
      (obj.minGasPrice = message.minGasPrice ? MinGasPrice.toJSON(message.minGasPrice) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryGetMinGasPriceResponse>): QueryGetMinGasPriceResponse {
    return QueryGetMinGasPriceResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetMinGasPriceResponse>): QueryGetMinGasPriceResponse {
    const message = createBaseQueryGetMinGasPriceResponse();
    message.minGasPrice = (object.minGasPrice !== undefined && object.minGasPrice !== null)
      ? MinGasPrice.fromPartial(object.minGasPrice)
      : undefined;
    return message;
  },
};

function createBaseQueryAllMinGasPriceRequest(): QueryAllMinGasPriceRequest {
  return { pagination: undefined };
}

export const QueryAllMinGasPriceRequest = {
  encode(message: QueryAllMinGasPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMinGasPriceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMinGasPriceRequest();
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

  fromJSON(object: any): QueryAllMinGasPriceRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllMinGasPriceRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllMinGasPriceRequest>): QueryAllMinGasPriceRequest {
    return QueryAllMinGasPriceRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllMinGasPriceRequest>): QueryAllMinGasPriceRequest {
    const message = createBaseQueryAllMinGasPriceRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllMinGasPriceResponse(): QueryAllMinGasPriceResponse {
  return { minGasPrices: [], pagination: undefined };
}

export const QueryAllMinGasPriceResponse = {
  encode(message: QueryAllMinGasPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.minGasPrices) {
      MinGasPrice.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMinGasPriceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMinGasPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.minGasPrices.push(MinGasPrice.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllMinGasPriceResponse {
    return {
      minGasPrices: Array.isArray(object?.minGasPrices)
        ? object.minGasPrices.map((e: any) => MinGasPrice.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllMinGasPriceResponse): unknown {
    const obj: any = {};
    if (message.minGasPrices) {
      obj.minGasPrices = message.minGasPrices.map((e) => e ? MinGasPrice.toJSON(e) : undefined);
    } else {
      obj.minGasPrices = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllMinGasPriceResponse>): QueryAllMinGasPriceResponse {
    return QueryAllMinGasPriceResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllMinGasPriceResponse>): QueryAllMinGasPriceResponse {
    const message = createBaseQueryAllMinGasPriceResponse();
    message.minGasPrices = object.minGasPrices?.map((e) => MinGasPrice.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Get network fee for msg type */
  MsgGasCost(request: QueryGetMsgGasCostRequest): Promise<QueryGetMsgGasCostResponse>;
  /** Get network fee for all msg types */
  MsgGasCostAll(request: QueryAllMsgGasCostRequest): Promise<QueryAllMsgGasCostResponse>;
  MinGasPrice(request: QueryGetMinGasPriceRequest): Promise<QueryGetMinGasPriceResponse>;
  /** Get network fee for all msg types */
  MinGasPriceAll(request: QueryAllMinGasPriceRequest): Promise<QueryAllMinGasPriceResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.fee.Query";
    this.rpc = rpc;
    this.MsgGasCost = this.MsgGasCost.bind(this);
    this.MsgGasCostAll = this.MsgGasCostAll.bind(this);
    this.MinGasPrice = this.MinGasPrice.bind(this);
    this.MinGasPriceAll = this.MinGasPriceAll.bind(this);
  }
  MsgGasCost(request: QueryGetMsgGasCostRequest): Promise<QueryGetMsgGasCostResponse> {
    const data = QueryGetMsgGasCostRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgGasCost", data);
    return promise.then((data) => QueryGetMsgGasCostResponse.decode(_m0.Reader.create(data)));
  }

  MsgGasCostAll(request: QueryAllMsgGasCostRequest): Promise<QueryAllMsgGasCostResponse> {
    const data = QueryAllMsgGasCostRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgGasCostAll", data);
    return promise.then((data) => QueryAllMsgGasCostResponse.decode(_m0.Reader.create(data)));
  }

  MinGasPrice(request: QueryGetMinGasPriceRequest): Promise<QueryGetMinGasPriceResponse> {
    const data = QueryGetMinGasPriceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MinGasPrice", data);
    return promise.then((data) => QueryGetMinGasPriceResponse.decode(_m0.Reader.create(data)));
  }

  MinGasPriceAll(request: QueryAllMinGasPriceRequest): Promise<QueryAllMinGasPriceResponse> {
    const data = QueryAllMinGasPriceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MinGasPriceAll", data);
    return promise.then((data) => QueryAllMinGasPriceResponse.decode(_m0.Reader.create(data)));
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
