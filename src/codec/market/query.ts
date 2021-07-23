/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Market } from "../market/market";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "Switcheo.carbon.market";

/** this line is used by starport scaffolding # 3 */
export interface QueryGetMarketRequest {
  name: string;
}

export interface QueryGetMarketResponse {
  Market?: Market;
}

export interface QueryAllMarketRequest {
  pagination?: PageRequest;
}

export interface QueryAllMarketResponse {
  markets: Market[];
  pagination?: PageResponse;
}

const baseQueryGetMarketRequest: object = { name: "" };

export const QueryGetMarketRequest = {
  encode(
    message: QueryGetMarketRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetMarketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetMarketRequest } as QueryGetMarketRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMarketRequest {
    const message = { ...baseQueryGetMarketRequest } as QueryGetMarketRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: QueryGetMarketRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMarketRequest>
  ): QueryGetMarketRequest {
    const message = { ...baseQueryGetMarketRequest } as QueryGetMarketRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseQueryGetMarketResponse: object = {};

export const QueryGetMarketResponse = {
  encode(
    message: QueryGetMarketResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Market !== undefined) {
      Market.encode(message.Market, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetMarketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetMarketResponse } as QueryGetMarketResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Market = Market.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMarketResponse {
    const message = { ...baseQueryGetMarketResponse } as QueryGetMarketResponse;
    if (object.Market !== undefined && object.Market !== null) {
      message.Market = Market.fromJSON(object.Market);
    } else {
      message.Market = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetMarketResponse): unknown {
    const obj: any = {};
    message.Market !== undefined &&
      (obj.Market = message.Market ? Market.toJSON(message.Market) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMarketResponse>
  ): QueryGetMarketResponse {
    const message = { ...baseQueryGetMarketResponse } as QueryGetMarketResponse;
    if (object.Market !== undefined && object.Market !== null) {
      message.Market = Market.fromPartial(object.Market);
    } else {
      message.Market = undefined;
    }
    return message;
  },
};

const baseQueryAllMarketRequest: object = {};

export const QueryAllMarketRequest = {
  encode(
    message: QueryAllMarketRequest,
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
  ): QueryAllMarketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllMarketRequest } as QueryAllMarketRequest;
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

  fromJSON(object: any): QueryAllMarketRequest {
    const message = { ...baseQueryAllMarketRequest } as QueryAllMarketRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMarketRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMarketRequest>
  ): QueryAllMarketRequest {
    const message = { ...baseQueryAllMarketRequest } as QueryAllMarketRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllMarketResponse: object = {};

export const QueryAllMarketResponse = {
  encode(
    message: QueryAllMarketResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.markets) {
      Market.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllMarketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllMarketResponse } as QueryAllMarketResponse;
    message.markets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.markets.push(Market.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllMarketResponse {
    const message = { ...baseQueryAllMarketResponse } as QueryAllMarketResponse;
    message.markets = [];
    if (object.markets !== undefined && object.markets !== null) {
      for (const e of object.markets) {
        message.markets.push(Market.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMarketResponse): unknown {
    const obj: any = {};
    if (message.markets) {
      obj.markets = message.markets.map((e) =>
        e ? Market.toJSON(e) : undefined
      );
    } else {
      obj.markets = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMarketResponse>
  ): QueryAllMarketResponse {
    const message = { ...baseQueryAllMarketResponse } as QueryAllMarketResponse;
    message.markets = [];
    if (object.markets !== undefined && object.markets !== null) {
      for (const e of object.markets) {
        message.markets.push(Market.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  Market(request: QueryGetMarketRequest): Promise<QueryGetMarketResponse>;
  MarketAll(request: QueryAllMarketRequest): Promise<QueryAllMarketResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Market = this.Market.bind(this);
    this.MarketAll = this.MarketAll.bind(this);
  }
  Market(request: QueryGetMarketRequest): Promise<QueryGetMarketResponse> {
    const data = QueryGetMarketRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.market.Query",
      "Market",
      data
    );
    return promise.then((data) =>
      QueryGetMarketResponse.decode(new _m0.Reader(data))
    );
  }

  MarketAll(request: QueryAllMarketRequest): Promise<QueryAllMarketResponse> {
    const data = QueryAllMarketRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.market.Query",
      "MarketAll",
      data
    );
    return promise.then((data) =>
      QueryAllMarketResponse.decode(new _m0.Reader(data))
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
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
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
