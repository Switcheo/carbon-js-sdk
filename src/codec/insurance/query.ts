/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "Switcheo.carbon.insurance";

export interface QueryCoinBalancesRequest {}

export interface QueryCoinBalancesResponse {
  coins: Coin[];
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

/** Query defines the gRPC querier service. */
export interface Query {
  /** Get the insurance fund balance */
  CoinBalances(
    request: QueryCoinBalancesRequest
  ): Promise<QueryCoinBalancesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CoinBalances = this.CoinBalances.bind(this);
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
