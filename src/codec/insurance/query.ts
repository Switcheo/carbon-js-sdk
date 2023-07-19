/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "Switcheo.carbon.insurance";

export interface QueryCoinBalancesRequest {}

export interface QueryCoinBalancesResponse {
  coins: Coin[];
}

export interface QueryFundsInByMarketRequest {
  denom: string;
  market: string;
}

export interface QueryFundsInByMarketResponse {
  funds: string;
}

export interface QueryFundsOutByMarketRequest {
  denom: string;
  market: string;
}

export interface QueryFundsOutByMarketResponse {
  funds: string;
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

const baseQueryFundsInByMarketRequest: object = { denom: "", market: "" };

export const QueryFundsInByMarketRequest = {
  encode(
    message: QueryFundsInByMarketRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.market !== "") {
      writer.uint32(18).string(message.market);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryFundsInByMarketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryFundsInByMarketRequest,
    } as QueryFundsInByMarketRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.market = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFundsInByMarketRequest {
    const message = {
      ...baseQueryFundsInByMarketRequest,
    } as QueryFundsInByMarketRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.market =
      object.market !== undefined && object.market !== null
        ? String(object.market)
        : "";
    return message;
  },

  toJSON(message: QueryFundsInByMarketRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.market !== undefined && (obj.market = message.market);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryFundsInByMarketRequest>
  ): QueryFundsInByMarketRequest {
    const message = {
      ...baseQueryFundsInByMarketRequest,
    } as QueryFundsInByMarketRequest;
    message.denom = object.denom ?? "";
    message.market = object.market ?? "";
    return message;
  },
};

const baseQueryFundsInByMarketResponse: object = { funds: "" };

export const QueryFundsInByMarketResponse = {
  encode(
    message: QueryFundsInByMarketResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.funds !== "") {
      writer.uint32(10).string(message.funds);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryFundsInByMarketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryFundsInByMarketResponse,
    } as QueryFundsInByMarketResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.funds = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFundsInByMarketResponse {
    const message = {
      ...baseQueryFundsInByMarketResponse,
    } as QueryFundsInByMarketResponse;
    message.funds =
      object.funds !== undefined && object.funds !== null
        ? String(object.funds)
        : "";
    return message;
  },

  toJSON(message: QueryFundsInByMarketResponse): unknown {
    const obj: any = {};
    message.funds !== undefined && (obj.funds = message.funds);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryFundsInByMarketResponse>
  ): QueryFundsInByMarketResponse {
    const message = {
      ...baseQueryFundsInByMarketResponse,
    } as QueryFundsInByMarketResponse;
    message.funds = object.funds ?? "";
    return message;
  },
};

const baseQueryFundsOutByMarketRequest: object = { denom: "", market: "" };

export const QueryFundsOutByMarketRequest = {
  encode(
    message: QueryFundsOutByMarketRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.market !== "") {
      writer.uint32(18).string(message.market);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryFundsOutByMarketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryFundsOutByMarketRequest,
    } as QueryFundsOutByMarketRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.market = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFundsOutByMarketRequest {
    const message = {
      ...baseQueryFundsOutByMarketRequest,
    } as QueryFundsOutByMarketRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.market =
      object.market !== undefined && object.market !== null
        ? String(object.market)
        : "";
    return message;
  },

  toJSON(message: QueryFundsOutByMarketRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.market !== undefined && (obj.market = message.market);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryFundsOutByMarketRequest>
  ): QueryFundsOutByMarketRequest {
    const message = {
      ...baseQueryFundsOutByMarketRequest,
    } as QueryFundsOutByMarketRequest;
    message.denom = object.denom ?? "";
    message.market = object.market ?? "";
    return message;
  },
};

const baseQueryFundsOutByMarketResponse: object = { funds: "" };

export const QueryFundsOutByMarketResponse = {
  encode(
    message: QueryFundsOutByMarketResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.funds !== "") {
      writer.uint32(10).string(message.funds);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryFundsOutByMarketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryFundsOutByMarketResponse,
    } as QueryFundsOutByMarketResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.funds = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFundsOutByMarketResponse {
    const message = {
      ...baseQueryFundsOutByMarketResponse,
    } as QueryFundsOutByMarketResponse;
    message.funds =
      object.funds !== undefined && object.funds !== null
        ? String(object.funds)
        : "";
    return message;
  },

  toJSON(message: QueryFundsOutByMarketResponse): unknown {
    const obj: any = {};
    message.funds !== undefined && (obj.funds = message.funds);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryFundsOutByMarketResponse>
  ): QueryFundsOutByMarketResponse {
    const message = {
      ...baseQueryFundsOutByMarketResponse,
    } as QueryFundsOutByMarketResponse;
    message.funds = object.funds ?? "";
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Get the insurance fund balance */
  CoinBalances(
    request: QueryCoinBalancesRequest
  ): Promise<QueryCoinBalancesResponse>;
  /** Get the funds transferred into the insurance fund for a given denom and market */
  FundsInByMarket(
    request: QueryFundsInByMarketRequest
  ): Promise<QueryFundsInByMarketResponse>;
  /** Get the funds withdrawn from the insurance fund for a given denom and market */
  FundsOutByMarket(
    request: QueryFundsOutByMarketRequest
  ): Promise<QueryFundsOutByMarketResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CoinBalances = this.CoinBalances.bind(this);
    this.FundsInByMarket = this.FundsInByMarket.bind(this);
    this.FundsOutByMarket = this.FundsOutByMarket.bind(this);
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

  FundsInByMarket(
    request: QueryFundsInByMarketRequest
  ): Promise<QueryFundsInByMarketResponse> {
    const data = QueryFundsInByMarketRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.insurance.Query",
      "FundsInByMarket",
      data
    );
    return promise.then((data) =>
      QueryFundsInByMarketResponse.decode(new _m0.Reader(data))
    );
  }

  FundsOutByMarket(
    request: QueryFundsOutByMarketRequest
  ): Promise<QueryFundsOutByMarketResponse> {
    const data = QueryFundsOutByMarketRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.insurance.Query",
      "FundsOutByMarket",
      data
    );
    return promise.then((data) =>
      QueryFundsOutByMarketResponse.decode(new _m0.Reader(data))
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
