/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { OrderBook, StopBook } from "./book";

export const protobufPackage = "Switcheo.carbon.book";

export interface QueryImpactPriceRequest {
  marketId: string;
  quoteAmount: string;
}

export interface QueryImpactPriceResponse {
  impactPrice: string;
  baseAmount: string;
  quoteAmount: string;
}

/** this line is used by starport scaffolding # 3 */
export interface QueryGetBookRequest {
  marketId: string;
}

export interface QueryGetBookResponse {
  book?: OrderBook;
}

export interface QueryAllBookRequest {
  pagination?: PageRequest;
}

export interface QueryAllBookResponse {
  books: OrderBook[];
  pagination?: PageResponse;
}

export interface QueryGetStopBookRequest {
  marketId: string;
}

export interface QueryGetStopBookResponse {
  books: StopBook[];
}

export interface QueryAllStopBookRequest {
  pagination?: PageRequest;
}

export interface QueryAllStopBookResponse {
  books: StopBook[];
  pagination?: PageResponse;
}

function createBaseQueryImpactPriceRequest(): QueryImpactPriceRequest {
  return { marketId: "", quoteAmount: "" };
}

export const QueryImpactPriceRequest = {
  encode(message: QueryImpactPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.quoteAmount !== "") {
      writer.uint32(18).string(message.quoteAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryImpactPriceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryImpactPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.marketId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.quoteAmount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryImpactPriceRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      quoteAmount: isSet(object.quoteAmount) ? String(object.quoteAmount) : "",
    };
  },

  toJSON(message: QueryImpactPriceRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.quoteAmount !== undefined && (obj.quoteAmount = message.quoteAmount);
    return obj;
  },

  create(base?: DeepPartial<QueryImpactPriceRequest>): QueryImpactPriceRequest {
    return QueryImpactPriceRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryImpactPriceRequest>): QueryImpactPriceRequest {
    const message = createBaseQueryImpactPriceRequest();
    message.marketId = object.marketId ?? "";
    message.quoteAmount = object.quoteAmount ?? "";
    return message;
  },
};

function createBaseQueryImpactPriceResponse(): QueryImpactPriceResponse {
  return { impactPrice: "", baseAmount: "", quoteAmount: "" };
}

export const QueryImpactPriceResponse = {
  encode(message: QueryImpactPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.impactPrice !== "") {
      writer.uint32(10).string(message.impactPrice);
    }
    if (message.baseAmount !== "") {
      writer.uint32(18).string(message.baseAmount);
    }
    if (message.quoteAmount !== "") {
      writer.uint32(26).string(message.quoteAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryImpactPriceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryImpactPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.impactPrice = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.baseAmount = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.quoteAmount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryImpactPriceResponse {
    return {
      impactPrice: isSet(object.impactPrice) ? String(object.impactPrice) : "",
      baseAmount: isSet(object.baseAmount) ? String(object.baseAmount) : "",
      quoteAmount: isSet(object.quoteAmount) ? String(object.quoteAmount) : "",
    };
  },

  toJSON(message: QueryImpactPriceResponse): unknown {
    const obj: any = {};
    message.impactPrice !== undefined && (obj.impactPrice = message.impactPrice);
    message.baseAmount !== undefined && (obj.baseAmount = message.baseAmount);
    message.quoteAmount !== undefined && (obj.quoteAmount = message.quoteAmount);
    return obj;
  },

  create(base?: DeepPartial<QueryImpactPriceResponse>): QueryImpactPriceResponse {
    return QueryImpactPriceResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryImpactPriceResponse>): QueryImpactPriceResponse {
    const message = createBaseQueryImpactPriceResponse();
    message.impactPrice = object.impactPrice ?? "";
    message.baseAmount = object.baseAmount ?? "";
    message.quoteAmount = object.quoteAmount ?? "";
    return message;
  },
};

function createBaseQueryGetBookRequest(): QueryGetBookRequest {
  return { marketId: "" };
}

export const QueryGetBookRequest = {
  encode(message: QueryGetBookRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBookRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBookRequest();
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

  fromJSON(object: any): QueryGetBookRequest {
    return { marketId: isSet(object.marketId) ? String(object.marketId) : "" };
  },

  toJSON(message: QueryGetBookRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  create(base?: DeepPartial<QueryGetBookRequest>): QueryGetBookRequest {
    return QueryGetBookRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetBookRequest>): QueryGetBookRequest {
    const message = createBaseQueryGetBookRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
};

function createBaseQueryGetBookResponse(): QueryGetBookResponse {
  return { book: undefined };
}

export const QueryGetBookResponse = {
  encode(message: QueryGetBookResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.book !== undefined) {
      OrderBook.encode(message.book, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBookResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBookResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.book = OrderBook.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetBookResponse {
    return { book: isSet(object.book) ? OrderBook.fromJSON(object.book) : undefined };
  },

  toJSON(message: QueryGetBookResponse): unknown {
    const obj: any = {};
    message.book !== undefined && (obj.book = message.book ? OrderBook.toJSON(message.book) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryGetBookResponse>): QueryGetBookResponse {
    return QueryGetBookResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetBookResponse>): QueryGetBookResponse {
    const message = createBaseQueryGetBookResponse();
    message.book = (object.book !== undefined && object.book !== null) ? OrderBook.fromPartial(object.book) : undefined;
    return message;
  },
};

function createBaseQueryAllBookRequest(): QueryAllBookRequest {
  return { pagination: undefined };
}

export const QueryAllBookRequest = {
  encode(message: QueryAllBookRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBookRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBookRequest();
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

  fromJSON(object: any): QueryAllBookRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllBookRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllBookRequest>): QueryAllBookRequest {
    return QueryAllBookRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllBookRequest>): QueryAllBookRequest {
    const message = createBaseQueryAllBookRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllBookResponse(): QueryAllBookResponse {
  return { books: [], pagination: undefined };
}

export const QueryAllBookResponse = {
  encode(message: QueryAllBookResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.books) {
      OrderBook.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBookResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBookResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.books.push(OrderBook.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllBookResponse {
    return {
      books: Array.isArray(object?.books) ? object.books.map((e: any) => OrderBook.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllBookResponse): unknown {
    const obj: any = {};
    if (message.books) {
      obj.books = message.books.map((e) => e ? OrderBook.toJSON(e) : undefined);
    } else {
      obj.books = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllBookResponse>): QueryAllBookResponse {
    return QueryAllBookResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllBookResponse>): QueryAllBookResponse {
    const message = createBaseQueryAllBookResponse();
    message.books = object.books?.map((e) => OrderBook.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetStopBookRequest(): QueryGetStopBookRequest {
  return { marketId: "" };
}

export const QueryGetStopBookRequest = {
  encode(message: QueryGetStopBookRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStopBookRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStopBookRequest();
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

  fromJSON(object: any): QueryGetStopBookRequest {
    return { marketId: isSet(object.marketId) ? String(object.marketId) : "" };
  },

  toJSON(message: QueryGetStopBookRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  create(base?: DeepPartial<QueryGetStopBookRequest>): QueryGetStopBookRequest {
    return QueryGetStopBookRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetStopBookRequest>): QueryGetStopBookRequest {
    const message = createBaseQueryGetStopBookRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
};

function createBaseQueryGetStopBookResponse(): QueryGetStopBookResponse {
  return { books: [] };
}

export const QueryGetStopBookResponse = {
  encode(message: QueryGetStopBookResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.books) {
      StopBook.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStopBookResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStopBookResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.books.push(StopBook.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetStopBookResponse {
    return { books: Array.isArray(object?.books) ? object.books.map((e: any) => StopBook.fromJSON(e)) : [] };
  },

  toJSON(message: QueryGetStopBookResponse): unknown {
    const obj: any = {};
    if (message.books) {
      obj.books = message.books.map((e) => e ? StopBook.toJSON(e) : undefined);
    } else {
      obj.books = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryGetStopBookResponse>): QueryGetStopBookResponse {
    return QueryGetStopBookResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetStopBookResponse>): QueryGetStopBookResponse {
    const message = createBaseQueryGetStopBookResponse();
    message.books = object.books?.map((e) => StopBook.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryAllStopBookRequest(): QueryAllStopBookRequest {
  return { pagination: undefined };
}

export const QueryAllStopBookRequest = {
  encode(message: QueryAllStopBookRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStopBookRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStopBookRequest();
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

  fromJSON(object: any): QueryAllStopBookRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllStopBookRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllStopBookRequest>): QueryAllStopBookRequest {
    return QueryAllStopBookRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllStopBookRequest>): QueryAllStopBookRequest {
    const message = createBaseQueryAllStopBookRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllStopBookResponse(): QueryAllStopBookResponse {
  return { books: [], pagination: undefined };
}

export const QueryAllStopBookResponse = {
  encode(message: QueryAllStopBookResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.books) {
      StopBook.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStopBookResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStopBookResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.books.push(StopBook.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllStopBookResponse {
    return {
      books: Array.isArray(object?.books) ? object.books.map((e: any) => StopBook.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllStopBookResponse): unknown {
    const obj: any = {};
    if (message.books) {
      obj.books = message.books.map((e) => e ? StopBook.toJSON(e) : undefined);
    } else {
      obj.books = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllStopBookResponse>): QueryAllStopBookResponse {
    return QueryAllStopBookResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllStopBookResponse>): QueryAllStopBookResponse {
    const message = createBaseQueryAllStopBookResponse();
    message.books = object.books?.map((e) => StopBook.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Get impact price for a market */
  ImpactPrice(request: QueryImpactPriceRequest): Promise<QueryImpactPriceResponse>;
  /** Get combined order book for a market */
  CombinedBook(request: QueryGetBookRequest): Promise<QueryGetBookResponse>;
  /** Get concrete book for a market */
  ConcreteBook(request: QueryGetBookRequest): Promise<QueryGetBookResponse>;
  /** Get virtual order book for a market */
  VirtualBook(request: QueryGetBookRequest): Promise<QueryGetBookResponse>;
  /** Get stop order book for a market */
  StopBook(request: QueryGetStopBookRequest): Promise<QueryGetStopBookResponse>;
  /** Get combined order books for all markets */
  CombinedBookAll(request: QueryAllBookRequest): Promise<QueryAllBookResponse>;
  /** Get all stop order book for a market */
  StopBookAll(request: QueryAllStopBookRequest): Promise<QueryAllStopBookResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.book.Query";
    this.rpc = rpc;
    this.ImpactPrice = this.ImpactPrice.bind(this);
    this.CombinedBook = this.CombinedBook.bind(this);
    this.ConcreteBook = this.ConcreteBook.bind(this);
    this.VirtualBook = this.VirtualBook.bind(this);
    this.StopBook = this.StopBook.bind(this);
    this.CombinedBookAll = this.CombinedBookAll.bind(this);
    this.StopBookAll = this.StopBookAll.bind(this);
  }
  ImpactPrice(request: QueryImpactPriceRequest): Promise<QueryImpactPriceResponse> {
    const data = QueryImpactPriceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ImpactPrice", data);
    return promise.then((data) => QueryImpactPriceResponse.decode(_m0.Reader.create(data)));
  }

  CombinedBook(request: QueryGetBookRequest): Promise<QueryGetBookResponse> {
    const data = QueryGetBookRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CombinedBook", data);
    return promise.then((data) => QueryGetBookResponse.decode(_m0.Reader.create(data)));
  }

  ConcreteBook(request: QueryGetBookRequest): Promise<QueryGetBookResponse> {
    const data = QueryGetBookRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ConcreteBook", data);
    return promise.then((data) => QueryGetBookResponse.decode(_m0.Reader.create(data)));
  }

  VirtualBook(request: QueryGetBookRequest): Promise<QueryGetBookResponse> {
    const data = QueryGetBookRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "VirtualBook", data);
    return promise.then((data) => QueryGetBookResponse.decode(_m0.Reader.create(data)));
  }

  StopBook(request: QueryGetStopBookRequest): Promise<QueryGetStopBookResponse> {
    const data = QueryGetStopBookRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "StopBook", data);
    return promise.then((data) => QueryGetStopBookResponse.decode(_m0.Reader.create(data)));
  }

  CombinedBookAll(request: QueryAllBookRequest): Promise<QueryAllBookResponse> {
    const data = QueryAllBookRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CombinedBookAll", data);
    return promise.then((data) => QueryAllBookResponse.decode(_m0.Reader.create(data)));
  }

  StopBookAll(request: QueryAllStopBookRequest): Promise<QueryAllStopBookResponse> {
    const data = QueryAllStopBookRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "StopBookAll", data);
    return promise.then((data) => QueryAllStopBookResponse.decode(_m0.Reader.create(data)));
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
