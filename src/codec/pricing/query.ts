/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PriceSet } from "../pricing/pricing";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "Switcheo.carbon.pricing";

export interface QueryPriceRequest {
  market: string;
}

export interface QueryPriceResponse {
  prices?: PriceSet;
}

export interface QueryAllPriceSetRequest {
  pagination?: PageRequest;
}

export interface QueryAllPriceSetResponse {
  prices: PriceSet[];
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
    message.market =
      object.market !== undefined && object.market !== null
        ? String(object.market)
        : "";
    return message;
  },

  toJSON(message: QueryPriceRequest): unknown {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPriceRequest>, I>>(
    object: I
  ): QueryPriceRequest {
    const message = { ...baseQueryPriceRequest } as QueryPriceRequest;
    message.market = object.market ?? "";
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
      PriceSet.encode(message.prices, writer.uint32(10).fork()).ldelim();
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
          message.prices = PriceSet.decode(reader, reader.uint32());
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
    message.prices =
      object.prices !== undefined && object.prices !== null
        ? PriceSet.fromJSON(object.prices)
        : undefined;
    return message;
  },

  toJSON(message: QueryPriceResponse): unknown {
    const obj: any = {};
    message.prices !== undefined &&
      (obj.prices = message.prices
        ? PriceSet.toJSON(message.prices)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPriceResponse>, I>>(
    object: I
  ): QueryPriceResponse {
    const message = { ...baseQueryPriceResponse } as QueryPriceResponse;
    message.prices =
      object.prices !== undefined && object.prices !== null
        ? PriceSet.fromPartial(object.prices)
        : undefined;
    return message;
  },
};

const baseQueryAllPriceSetRequest: object = {};

export const QueryAllPriceSetRequest = {
  encode(
    message: QueryAllPriceSetRequest,
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
  ): QueryAllPriceSetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPriceSetRequest,
    } as QueryAllPriceSetRequest;
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

  fromJSON(object: any): QueryAllPriceSetRequest {
    const message = {
      ...baseQueryAllPriceSetRequest,
    } as QueryAllPriceSetRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllPriceSetRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPriceSetRequest>, I>>(
    object: I
  ): QueryAllPriceSetRequest {
    const message = {
      ...baseQueryAllPriceSetRequest,
    } as QueryAllPriceSetRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllPriceSetResponse: object = {};

export const QueryAllPriceSetResponse = {
  encode(
    message: QueryAllPriceSetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.prices) {
      PriceSet.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllPriceSetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPriceSetResponse,
    } as QueryAllPriceSetResponse;
    message.prices = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prices.push(PriceSet.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPriceSetResponse {
    const message = {
      ...baseQueryAllPriceSetResponse,
    } as QueryAllPriceSetResponse;
    message.prices = (object.prices ?? []).map((e: any) =>
      PriceSet.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllPriceSetResponse): unknown {
    const obj: any = {};
    if (message.prices) {
      obj.prices = message.prices.map((e) =>
        e ? PriceSet.toJSON(e) : undefined
      );
    } else {
      obj.prices = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPriceSetResponse>, I>>(
    object: I
  ): QueryAllPriceSetResponse {
    const message = {
      ...baseQueryAllPriceSetResponse,
    } as QueryAllPriceSetResponse;
    message.prices = object.prices?.map((e) => PriceSet.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
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
    message.denomA =
      object.denomA !== undefined && object.denomA !== null
        ? String(object.denomA)
        : "";
    message.denomB =
      object.denomB !== undefined && object.denomB !== null
        ? String(object.denomB)
        : "";
    return message;
  },

  toJSON(message: QueryRateRequest): unknown {
    const obj: any = {};
    message.denomA !== undefined && (obj.denomA = message.denomA);
    message.denomB !== undefined && (obj.denomB = message.denomB);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRateRequest>, I>>(
    object: I
  ): QueryRateRequest {
    const message = { ...baseQueryRateRequest } as QueryRateRequest;
    message.denomA = object.denomA ?? "";
    message.denomB = object.denomB ?? "";
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
    message.conversionRate =
      object.conversionRate !== undefined && object.conversionRate !== null
        ? String(object.conversionRate)
        : "";
    return message;
  },

  toJSON(message: QueryRateResponse): unknown {
    const obj: any = {};
    message.conversionRate !== undefined &&
      (obj.conversionRate = message.conversionRate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRateResponse>, I>>(
    object: I
  ): QueryRateResponse {
    const message = { ...baseQueryRateResponse } as QueryRateResponse;
    message.conversionRate = object.conversionRate ?? "";
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  PriceSet(request: QueryPriceRequest): Promise<QueryPriceResponse>;
  PriceSetAll(
    request: QueryAllPriceSetRequest
  ): Promise<QueryAllPriceSetResponse>;
  Rate(request: QueryRateRequest): Promise<QueryRateResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.PriceSet = this.PriceSet.bind(this);
    this.PriceSetAll = this.PriceSetAll.bind(this);
    this.Rate = this.Rate.bind(this);
  }
  PriceSet(request: QueryPriceRequest): Promise<QueryPriceResponse> {
    const data = QueryPriceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.pricing.Query",
      "PriceSet",
      data
    );
    return promise.then((data) =>
      QueryPriceResponse.decode(new _m0.Reader(data))
    );
  }

  PriceSetAll(
    request: QueryAllPriceSetRequest
  ): Promise<QueryAllPriceSetResponse> {
    const data = QueryAllPriceSetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.pricing.Query",
      "PriceSetAll",
      data
    );
    return promise.then((data) =>
      QueryAllPriceSetResponse.decode(new _m0.Reader(data))
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

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
