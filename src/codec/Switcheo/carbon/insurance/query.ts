/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { FundUtilization } from "./fund";
import { Params } from "./params";

export const protobufPackage = "Switcheo.carbon.insurance";

export interface QueryCoinBalancesRequest {
}

export interface QueryCoinBalancesResponse {
  coins: Coin[];
}

export interface QueryParamsRequest {
}

export interface QueryParamsResponse {
  params?: Params;
}

export interface QueryGetFundUtilizationRequest {
  marketId: string;
}

export interface QueryGetFundUtilizationResponse {
  fundUtilization?: FundUtilization;
}

export interface QueryAllFundUtilizationRequest {
  pagination?: PageRequest;
}

export interface QueryAllFundUtilizationResponse {
  fundUtilizations: FundUtilization[];
  pagination?: PageResponse;
}

function createBaseQueryCoinBalancesRequest(): QueryCoinBalancesRequest {
  return {};
}

export const QueryCoinBalancesRequest = {
  encode(_: QueryCoinBalancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCoinBalancesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCoinBalancesRequest();
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

  fromJSON(_: any): QueryCoinBalancesRequest {
    return {};
  },

  toJSON(_: QueryCoinBalancesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryCoinBalancesRequest>): QueryCoinBalancesRequest {
    return QueryCoinBalancesRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryCoinBalancesRequest>): QueryCoinBalancesRequest {
    const message = createBaseQueryCoinBalancesRequest();
    return message;
  },
};

function createBaseQueryCoinBalancesResponse(): QueryCoinBalancesResponse {
  return { coins: [] };
}

export const QueryCoinBalancesResponse = {
  encode(message: QueryCoinBalancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCoinBalancesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCoinBalancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.coins.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCoinBalancesResponse {
    return { coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : [] };
  },

  toJSON(message: QueryCoinBalancesResponse): unknown {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryCoinBalancesResponse>): QueryCoinBalancesResponse {
    return QueryCoinBalancesResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryCoinBalancesResponse>): QueryCoinBalancesResponse {
    const message = createBaseQueryCoinBalancesResponse();
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
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

function createBaseQueryGetFundUtilizationRequest(): QueryGetFundUtilizationRequest {
  return { marketId: "" };
}

export const QueryGetFundUtilizationRequest = {
  encode(message: QueryGetFundUtilizationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetFundUtilizationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFundUtilizationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryGetFundUtilizationRequest {
    return { marketId: isSet(object.marketId) ? String(object.marketId) : "" };
  },

  toJSON(message: QueryGetFundUtilizationRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  create(base?: DeepPartial<QueryGetFundUtilizationRequest>): QueryGetFundUtilizationRequest {
    return QueryGetFundUtilizationRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetFundUtilizationRequest>): QueryGetFundUtilizationRequest {
    const message = createBaseQueryGetFundUtilizationRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
};

function createBaseQueryGetFundUtilizationResponse(): QueryGetFundUtilizationResponse {
  return { fundUtilization: undefined };
}

export const QueryGetFundUtilizationResponse = {
  encode(message: QueryGetFundUtilizationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fundUtilization !== undefined) {
      FundUtilization.encode(message.fundUtilization, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetFundUtilizationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFundUtilizationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fundUtilization = FundUtilization.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetFundUtilizationResponse {
    return {
      fundUtilization: isSet(object.fundUtilization) ? FundUtilization.fromJSON(object.fundUtilization) : undefined,
    };
  },

  toJSON(message: QueryGetFundUtilizationResponse): unknown {
    const obj: any = {};
    message.fundUtilization !== undefined &&
      (obj.fundUtilization = message.fundUtilization ? FundUtilization.toJSON(message.fundUtilization) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryGetFundUtilizationResponse>): QueryGetFundUtilizationResponse {
    return QueryGetFundUtilizationResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetFundUtilizationResponse>): QueryGetFundUtilizationResponse {
    const message = createBaseQueryGetFundUtilizationResponse();
    message.fundUtilization = (object.fundUtilization !== undefined && object.fundUtilization !== null)
      ? FundUtilization.fromPartial(object.fundUtilization)
      : undefined;
    return message;
  },
};

function createBaseQueryAllFundUtilizationRequest(): QueryAllFundUtilizationRequest {
  return { pagination: undefined };
}

export const QueryAllFundUtilizationRequest = {
  encode(message: QueryAllFundUtilizationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllFundUtilizationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFundUtilizationRequest();
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

  fromJSON(object: any): QueryAllFundUtilizationRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllFundUtilizationRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllFundUtilizationRequest>): QueryAllFundUtilizationRequest {
    return QueryAllFundUtilizationRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllFundUtilizationRequest>): QueryAllFundUtilizationRequest {
    const message = createBaseQueryAllFundUtilizationRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllFundUtilizationResponse(): QueryAllFundUtilizationResponse {
  return { fundUtilizations: [], pagination: undefined };
}

export const QueryAllFundUtilizationResponse = {
  encode(message: QueryAllFundUtilizationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.fundUtilizations) {
      FundUtilization.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllFundUtilizationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFundUtilizationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fundUtilizations.push(FundUtilization.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllFundUtilizationResponse {
    return {
      fundUtilizations: Array.isArray(object?.fundUtilizations)
        ? object.fundUtilizations.map((e: any) => FundUtilization.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllFundUtilizationResponse): unknown {
    const obj: any = {};
    if (message.fundUtilizations) {
      obj.fundUtilizations = message.fundUtilizations.map((e) => e ? FundUtilization.toJSON(e) : undefined);
    } else {
      obj.fundUtilizations = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllFundUtilizationResponse>): QueryAllFundUtilizationResponse {
    return QueryAllFundUtilizationResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllFundUtilizationResponse>): QueryAllFundUtilizationResponse {
    const message = createBaseQueryAllFundUtilizationResponse();
    message.fundUtilizations = object.fundUtilizations?.map((e) => FundUtilization.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Get the insurance fund balance */
  CoinBalances(request: QueryCoinBalancesRequest): Promise<QueryCoinBalancesResponse>;
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  FundUtilization(request: QueryGetFundUtilizationRequest): Promise<QueryGetFundUtilizationResponse>;
  FundUtilizationAll(request: QueryAllFundUtilizationRequest): Promise<QueryAllFundUtilizationResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.insurance.Query";
    this.rpc = rpc;
    this.CoinBalances = this.CoinBalances.bind(this);
    this.Params = this.Params.bind(this);
    this.FundUtilization = this.FundUtilization.bind(this);
    this.FundUtilizationAll = this.FundUtilizationAll.bind(this);
  }
  CoinBalances(request: QueryCoinBalancesRequest): Promise<QueryCoinBalancesResponse> {
    const data = QueryCoinBalancesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CoinBalances", data);
    return promise.then((data) => QueryCoinBalancesResponse.decode(_m0.Reader.create(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  FundUtilization(request: QueryGetFundUtilizationRequest): Promise<QueryGetFundUtilizationResponse> {
    const data = QueryGetFundUtilizationRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FundUtilization", data);
    return promise.then((data) => QueryGetFundUtilizationResponse.decode(_m0.Reader.create(data)));
  }

  FundUtilizationAll(request: QueryAllFundUtilizationRequest): Promise<QueryAllFundUtilizationResponse> {
    const data = QueryAllFundUtilizationRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FundUtilizationAll", data);
    return promise.then((data) => QueryAllFundUtilizationResponse.decode(_m0.Reader.create(data)));
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
