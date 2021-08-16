/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Prices } from "../pricing/pricing";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "Switcheo.carbon.pricing";

export interface QueryPriceRequest {
  market: string;
}

export interface QueryPriceResponse {
  prices?: Prices;
}

export interface QueryAllPriceRequest {
  pagination?: PageRequest;
}

export interface QueryAllPriceResponse {
  pricess: Prices[];
  pagination?: PageResponse;
}

export interface QueryRateRequest {
  denomA: string;
  denomB: string;
}

export interface QueryRateResponse {
  conversionRate: string;
}

const baseQueryPriceRequest: object = { market: "" };

export const QueryPriceRequest = {
  encode(
    message: QueryPriceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.market !== "") {
      writer.uint32(10).string(message.market);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPriceRequest } as QueryPriceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPriceRequest {
    const message = { ...baseQueryPriceRequest } as QueryPriceRequest;
    if (object.market !== undefined && object.market !== null) {
      message.market = String(object.market);
    } else {
      message.market = "";
    }
    return message;
  },

  toJSON(message: QueryPriceRequest): unknown {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryPriceRequest>): QueryPriceRequest {
    const message = { ...baseQueryPriceRequest } as QueryPriceRequest;
    if (object.market !== undefined && object.market !== null) {
      message.market = object.market;
    } else {
      message.market = "";
    }
    return message;
  },
};

const baseQueryPriceResponse: object = {};

export const QueryPriceResponse = {
  encode(
    message: QueryPriceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.prices !== undefined) {
      Prices.encode(message.prices, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPriceResponse } as QueryPriceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prices = Prices.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPriceResponse {
    const message = { ...baseQueryPriceResponse } as QueryPriceResponse;
    if (object.prices !== undefined && object.prices !== null) {
      message.prices = Prices.fromJSON(object.prices);
    } else {
      message.prices = undefined;
    }
    return message;
  },

  toJSON(message: QueryPriceResponse): unknown {
    const obj: any = {};
    message.prices !== undefined &&
      (obj.prices = message.prices ? Prices.toJSON(message.prices) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryPriceResponse>): QueryPriceResponse {
    const message = { ...baseQueryPriceResponse } as QueryPriceResponse;
    if (object.prices !== undefined && object.prices !== null) {
      message.prices = Prices.fromPartial(object.prices);
    } else {
      message.prices = undefined;
    }
    return message;
  },
};

const baseQueryAllPriceRequest: object = {};

export const QueryAllPriceRequest = {
  encode(
    message: QueryAllPriceRequest,
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
  ): QueryAllPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPriceRequest } as QueryAllPriceRequest;
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

  fromJSON(object: any): QueryAllPriceRequest {
    const message = { ...baseQueryAllPriceRequest } as QueryAllPriceRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPriceRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllPriceRequest>): QueryAllPriceRequest {
    const message = { ...baseQueryAllPriceRequest } as QueryAllPriceRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllPriceResponse: object = {};

export const QueryAllPriceResponse = {
  encode(
    message: QueryAllPriceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.pricess) {
      Prices.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPriceResponse } as QueryAllPriceResponse;
    message.pricess = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pricess.push(Prices.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPriceResponse {
    const message = { ...baseQueryAllPriceResponse } as QueryAllPriceResponse;
    message.pricess = [];
    if (object.pricess !== undefined && object.pricess !== null) {
      for (const e of object.pricess) {
        message.pricess.push(Prices.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPriceResponse): unknown {
    const obj: any = {};
    if (message.pricess) {
      obj.pricess = message.pricess.map((e) =>
        e ? Prices.toJSON(e) : undefined
      );
    } else {
      obj.pricess = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPriceResponse>
  ): QueryAllPriceResponse {
    const message = { ...baseQueryAllPriceResponse } as QueryAllPriceResponse;
    message.pricess = [];
    if (object.pricess !== undefined && object.pricess !== null) {
      for (const e of object.pricess) {
        message.pricess.push(Prices.fromPartial(e));
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

const baseQueryRateRequest: object = { denomA: "", denomB: "" };

export const QueryRateRequest = {
  encode(
    message: QueryRateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denomA !== "") {
      writer.uint32(10).string(message.denomA);
    }
    if (message.denomB !== "") {
      writer.uint32(18).string(message.denomB);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryRateRequest } as QueryRateRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomA = reader.string();
          break;
        case 2:
          message.denomB = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRateRequest {
    const message = { ...baseQueryRateRequest } as QueryRateRequest;
    if (object.denomA !== undefined && object.denomA !== null) {
      message.denomA = String(object.denomA);
    } else {
      message.denomA = "";
    }
    if (object.denomB !== undefined && object.denomB !== null) {
      message.denomB = String(object.denomB);
    } else {
      message.denomB = "";
    }
    return message;
  },

  toJSON(message: QueryRateRequest): unknown {
    const obj: any = {};
    message.denomA !== undefined && (obj.denomA = message.denomA);
    message.denomB !== undefined && (obj.denomB = message.denomB);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRateRequest>): QueryRateRequest {
    const message = { ...baseQueryRateRequest } as QueryRateRequest;
    if (object.denomA !== undefined && object.denomA !== null) {
      message.denomA = object.denomA;
    } else {
      message.denomA = "";
    }
    if (object.denomB !== undefined && object.denomB !== null) {
      message.denomB = object.denomB;
    } else {
      message.denomB = "";
    }
    return message;
  },
};

const baseQueryRateResponse: object = { conversionRate: "" };

export const QueryRateResponse = {
  encode(
    message: QueryRateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.conversionRate !== "") {
      writer.uint32(10).string(message.conversionRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryRateResponse } as QueryRateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.conversionRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRateResponse {
    const message = { ...baseQueryRateResponse } as QueryRateResponse;
    if (object.conversionRate !== undefined && object.conversionRate !== null) {
      message.conversionRate = String(object.conversionRate);
    } else {
      message.conversionRate = "";
    }
    return message;
  },

  toJSON(message: QueryRateResponse): unknown {
    const obj: any = {};
    message.conversionRate !== undefined &&
      (obj.conversionRate = message.conversionRate);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRateResponse>): QueryRateResponse {
    const message = { ...baseQueryRateResponse } as QueryRateResponse;
    if (object.conversionRate !== undefined && object.conversionRate !== null) {
      message.conversionRate = object.conversionRate;
    } else {
      message.conversionRate = "";
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  Price(request: QueryPriceRequest): Promise<QueryPriceResponse>;
  PriceAll(request: QueryAllPriceRequest): Promise<QueryAllPriceResponse>;
  Rate(request: QueryRateRequest): Promise<QueryRateResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Price = this.Price.bind(this);
    this.PriceAll = this.PriceAll.bind(this);
    this.Rate = this.Rate.bind(this);
  }
  Price(request: QueryPriceRequest): Promise<QueryPriceResponse> {
    const data = QueryPriceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.pricing.Query",
      "Price",
      data
    );
    return promise.then((data) =>
      QueryPriceResponse.decode(new _m0.Reader(data))
    );
  }

  PriceAll(request: QueryAllPriceRequest): Promise<QueryAllPriceResponse> {
    const data = QueryAllPriceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.pricing.Query",
      "PriceAll",
      data
    );
    return promise.then((data) =>
      QueryAllPriceResponse.decode(new _m0.Reader(data))
    );
  }

  Rate(request: QueryRateRequest): Promise<QueryRateResponse> {
    const data = QueryRateRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.pricing.Query",
      "Rate",
      data
    );
    return promise.then((data) =>
      QueryRateResponse.decode(new _m0.Reader(data))
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
