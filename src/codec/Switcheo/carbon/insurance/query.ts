/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { FundUtilization } from "./fund";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "Switcheo.carbon.insurance";

export interface QueryCoinBalancesRequest {}

export interface QueryCoinBalancesResponse {
  coins: Coin[];
}

export interface QueryParamsRequest {}

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

const baseQueryCoinBalancesRequest: object = {};

export const QueryCoinBalancesRequest = {
  encode(
    _: QueryCoinBalancesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCoinBalancesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCoinBalancesRequest,
    } as QueryCoinBalancesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryCoinBalancesRequest {
    const message = {
      ...baseQueryCoinBalancesRequest,
    } as QueryCoinBalancesRequest;
    return message;
  },

  toJSON(_: QueryCoinBalancesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryCoinBalancesRequest>
  ): QueryCoinBalancesRequest {
    const message = {
      ...baseQueryCoinBalancesRequest,
    } as QueryCoinBalancesRequest;
    return message;
  },
};

const baseQueryCoinBalancesResponse: object = {};

export const QueryCoinBalancesResponse = {
  encode(
    message: QueryCoinBalancesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCoinBalancesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCoinBalancesResponse,
    } as QueryCoinBalancesResponse;
    message.coins = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCoinBalancesResponse {
    const message = {
      ...baseQueryCoinBalancesResponse,
    } as QueryCoinBalancesResponse;
    message.coins = (object.coins ?? []).map((e: any) => Coin.fromJSON(e));
    return message;
  },

  toJSON(message: QueryCoinBalancesResponse): unknown {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCoinBalancesResponse>
  ): QueryCoinBalancesResponse {
    const message = {
      ...baseQueryCoinBalancesResponse,
    } as QueryCoinBalancesResponse;
    message.coins = (object.coins ?? []).map((e) => Coin.fromPartial(e));
    return message;
  },
};

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(
    _: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromJSON(object.params)
        : undefined;
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

const baseQueryGetFundUtilizationRequest: object = { marketId: "" };

export const QueryGetFundUtilizationRequest = {
  encode(
    message: QueryGetFundUtilizationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetFundUtilizationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetFundUtilizationRequest,
    } as QueryGetFundUtilizationRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetFundUtilizationRequest {
    const message = {
      ...baseQueryGetFundUtilizationRequest,
    } as QueryGetFundUtilizationRequest;
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    return message;
  },

  toJSON(message: QueryGetFundUtilizationRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetFundUtilizationRequest>
  ): QueryGetFundUtilizationRequest {
    const message = {
      ...baseQueryGetFundUtilizationRequest,
    } as QueryGetFundUtilizationRequest;
    message.marketId = object.marketId ?? "";
    return message;
  },
};

const baseQueryGetFundUtilizationResponse: object = {};

export const QueryGetFundUtilizationResponse = {
  encode(
    message: QueryGetFundUtilizationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fundUtilization !== undefined) {
      FundUtilization.encode(
        message.fundUtilization,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetFundUtilizationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetFundUtilizationResponse,
    } as QueryGetFundUtilizationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fundUtilization = FundUtilization.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetFundUtilizationResponse {
    const message = {
      ...baseQueryGetFundUtilizationResponse,
    } as QueryGetFundUtilizationResponse;
    message.fundUtilization =
      object.fundUtilization !== undefined && object.fundUtilization !== null
        ? FundUtilization.fromJSON(object.fundUtilization)
        : undefined;
    return message;
  },

  toJSON(message: QueryGetFundUtilizationResponse): unknown {
    const obj: any = {};
    message.fundUtilization !== undefined &&
      (obj.fundUtilization = message.fundUtilization
        ? FundUtilization.toJSON(message.fundUtilization)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetFundUtilizationResponse>
  ): QueryGetFundUtilizationResponse {
    const message = {
      ...baseQueryGetFundUtilizationResponse,
    } as QueryGetFundUtilizationResponse;
    message.fundUtilization =
      object.fundUtilization !== undefined && object.fundUtilization !== null
        ? FundUtilization.fromPartial(object.fundUtilization)
        : undefined;
    return message;
  },
};

const baseQueryAllFundUtilizationRequest: object = {};

export const QueryAllFundUtilizationRequest = {
  encode(
    message: QueryAllFundUtilizationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllFundUtilizationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllFundUtilizationRequest,
    } as QueryAllFundUtilizationRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllFundUtilizationRequest {
    const message = {
      ...baseQueryAllFundUtilizationRequest,
    } as QueryAllFundUtilizationRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllFundUtilizationRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllFundUtilizationRequest>
  ): QueryAllFundUtilizationRequest {
    const message = {
      ...baseQueryAllFundUtilizationRequest,
    } as QueryAllFundUtilizationRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllFundUtilizationResponse: object = {};

export const QueryAllFundUtilizationResponse = {
  encode(
    message: QueryAllFundUtilizationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.fundUtilizations) {
      FundUtilization.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllFundUtilizationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllFundUtilizationResponse,
    } as QueryAllFundUtilizationResponse;
    message.fundUtilizations = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fundUtilizations.push(
            FundUtilization.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllFundUtilizationResponse {
    const message = {
      ...baseQueryAllFundUtilizationResponse,
    } as QueryAllFundUtilizationResponse;
    message.fundUtilizations = (object.fundUtilizations ?? []).map((e: any) =>
      FundUtilization.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllFundUtilizationResponse): unknown {
    const obj: any = {};
    if (message.fundUtilizations) {
      obj.fundUtilizations = message.fundUtilizations.map((e) =>
        e ? FundUtilization.toJSON(e) : undefined
      );
    } else {
      obj.fundUtilizations = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllFundUtilizationResponse>
  ): QueryAllFundUtilizationResponse {
    const message = {
      ...baseQueryAllFundUtilizationResponse,
    } as QueryAllFundUtilizationResponse;
    message.fundUtilizations = (object.fundUtilizations ?? []).map((e) =>
      FundUtilization.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Get the insurance fund balance */
  CoinBalances(
    request: QueryCoinBalancesRequest
  ): Promise<QueryCoinBalancesResponse>;
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  FundUtilization(
    request: QueryGetFundUtilizationRequest
  ): Promise<QueryGetFundUtilizationResponse>;
  FundUtilizationAll(
    request: QueryAllFundUtilizationRequest
  ): Promise<QueryAllFundUtilizationResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CoinBalances = this.CoinBalances.bind(this);
    this.Params = this.Params.bind(this);
    this.FundUtilization = this.FundUtilization.bind(this);
    this.FundUtilizationAll = this.FundUtilizationAll.bind(this);
  }
  CoinBalances(
    request: QueryCoinBalancesRequest
  ): Promise<QueryCoinBalancesResponse> {
    const data = QueryCoinBalancesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.insurance.Query",
      "CoinBalances",
      data
    );
    return promise.then((data) =>
      QueryCoinBalancesResponse.decode(new _m0.Reader(data))
    );
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.insurance.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  FundUtilization(
    request: QueryGetFundUtilizationRequest
  ): Promise<QueryGetFundUtilizationResponse> {
    const data = QueryGetFundUtilizationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.insurance.Query",
      "FundUtilization",
      data
    );
    return promise.then((data) =>
      QueryGetFundUtilizationResponse.decode(new _m0.Reader(data))
    );
  }

  FundUtilizationAll(
    request: QueryAllFundUtilizationRequest
  ): Promise<QueryAllFundUtilizationResponse> {
    const data = QueryAllFundUtilizationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.insurance.Query",
      "FundUtilizationAll",
      data
    );
    return promise.then((data) =>
      QueryAllFundUtilizationResponse.decode(new _m0.Reader(data))
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
