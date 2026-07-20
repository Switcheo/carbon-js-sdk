/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { MarketLeverage } from "./leverage";
import { Params } from "./params";

export const protobufPackage = "Switcheo.carbon.leverage";

/** this line is used by starport scaffolding # 3 */
export interface QueryGetLeverageRequest {
  address: string;
  marketId: string;
}

export interface QueryGetLeverageResponse {
  marketLeverage?: MarketLeverage;
}

export interface QueryAllLeverageRequest {
  address: string;
}

export interface QueryAllLeverageResponse {
  marketLeverages: MarketLeverage[];
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  params?: Params;
}

function createBaseQueryGetLeverageRequest(): QueryGetLeverageRequest {
  return { address: "", marketId: "" };
}

export const QueryGetLeverageRequest = {
  encode(message: QueryGetLeverageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLeverageRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLeverageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.marketId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetLeverageRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
    };
  },

  toJSON(message: QueryGetLeverageRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  create(base?: DeepPartial<QueryGetLeverageRequest>): QueryGetLeverageRequest {
    return QueryGetLeverageRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetLeverageRequest>): QueryGetLeverageRequest {
    const message = createBaseQueryGetLeverageRequest();
    message.address = object.address ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  },
};

function createBaseQueryGetLeverageResponse(): QueryGetLeverageResponse {
  return { marketLeverage: undefined };
}

export const QueryGetLeverageResponse = {
  encode(message: QueryGetLeverageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketLeverage !== undefined) {
      MarketLeverage.encode(message.marketLeverage, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLeverageResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLeverageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.marketLeverage = MarketLeverage.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetLeverageResponse {
    return {
      marketLeverage: isSet(object.marketLeverage) ? MarketLeverage.fromJSON(object.marketLeverage) : undefined,
    };
  },

  toJSON(message: QueryGetLeverageResponse): unknown {
    const obj: any = {};
    message.marketLeverage !== undefined &&
      (obj.marketLeverage = message.marketLeverage ? MarketLeverage.toJSON(message.marketLeverage) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryGetLeverageResponse>): QueryGetLeverageResponse {
    return QueryGetLeverageResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetLeverageResponse>): QueryGetLeverageResponse {
    const message = createBaseQueryGetLeverageResponse();
    message.marketLeverage = (object.marketLeverage !== undefined && object.marketLeverage !== null)
      ? MarketLeverage.fromPartial(object.marketLeverage)
      : undefined;
    return message;
  },
};

function createBaseQueryAllLeverageRequest(): QueryAllLeverageRequest {
  return { address: "" };
}

export const QueryAllLeverageRequest = {
  encode(message: QueryAllLeverageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllLeverageRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLeverageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllLeverageRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryAllLeverageRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<QueryAllLeverageRequest>): QueryAllLeverageRequest {
    return QueryAllLeverageRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllLeverageRequest>): QueryAllLeverageRequest {
    const message = createBaseQueryAllLeverageRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryAllLeverageResponse(): QueryAllLeverageResponse {
  return { marketLeverages: [] };
}

export const QueryAllLeverageResponse = {
  encode(message: QueryAllLeverageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.marketLeverages) {
      MarketLeverage.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllLeverageResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLeverageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.marketLeverages.push(MarketLeverage.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllLeverageResponse {
    return {
      marketLeverages: Array.isArray(object?.marketLeverages)
        ? object.marketLeverages.map((e: any) => MarketLeverage.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryAllLeverageResponse): unknown {
    const obj: any = {};
    if (message.marketLeverages) {
      obj.marketLeverages = message.marketLeverages.map((e) => e ? MarketLeverage.toJSON(e) : undefined);
    } else {
      obj.marketLeverages = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryAllLeverageResponse>): QueryAllLeverageResponse {
    return QueryAllLeverageResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllLeverageResponse>): QueryAllLeverageResponse {
    const message = createBaseQueryAllLeverageResponse();
    message.marketLeverages = object.marketLeverages?.map((e) => MarketLeverage.fromPartial(e)) || [];
    return message;
  },
};

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

/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * this line is used by starport scaffolding # 2
   * Leverage returns the leverage which corresponds to the address and market
   */
  Leverage(request: QueryGetLeverageRequest): Promise<QueryGetLeverageResponse>;
  /** LeverageAll returns all leverages for an address, defaults to 1 */
  LeverageAll(request: QueryAllLeverageRequest): Promise<QueryAllLeverageResponse>;
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.leverage.Query";
    this.rpc = rpc;
    this.Leverage = this.Leverage.bind(this);
    this.LeverageAll = this.LeverageAll.bind(this);
    this.Params = this.Params.bind(this);
  }
  Leverage(request: QueryGetLeverageRequest): Promise<QueryGetLeverageResponse> {
    const data = QueryGetLeverageRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Leverage", data);
    return promise.then((data) => QueryGetLeverageResponse.decode(_m0.Reader.create(data)));
  }

  LeverageAll(request: QueryAllLeverageRequest): Promise<QueryAllLeverageResponse> {
    const data = QueryAllLeverageRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "LeverageAll", data);
    return promise.then((data) => QueryAllLeverageResponse.decode(_m0.Reader.create(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
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
