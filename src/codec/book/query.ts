/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { OrderBook } from "../book/book";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "Switcheo.carbon.book";

/** this line is used by starport scaffolding # 3 */
export interface QueryGetBookRequest {
  market: string;
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

const baseQueryGetBookRequest: object = { market: "" };

export const QueryGetBookRequest = {
  encode(
    message: QueryGetBookRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.market !== "") {
      writer.uint32(10).string(message.market);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBookRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetBookRequest } as QueryGetBookRequest;
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

  fromJSON(object: any): QueryGetBookRequest {
    const message = { ...baseQueryGetBookRequest } as QueryGetBookRequest;
    message.market =
      object.market !== undefined && object.market !== null
        ? String(object.market)
        : "";
    return message;
  },

  toJSON(message: QueryGetBookRequest): unknown {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetBookRequest>): QueryGetBookRequest {
    const message = { ...baseQueryGetBookRequest } as QueryGetBookRequest;
    message.market = object.market ?? "";
    return message;
  },
};

const baseQueryGetBookResponse: object = {};

export const QueryGetBookResponse = {
  encode(
    message: QueryGetBookResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.book !== undefined) {
      OrderBook.encode(message.book, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetBookResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetBookResponse } as QueryGetBookResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.book = OrderBook.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBookResponse {
    const message = { ...baseQueryGetBookResponse } as QueryGetBookResponse;
    message.book =
      object.book !== undefined && object.book !== null
        ? OrderBook.fromJSON(object.book)
        : undefined;
    return message;
  },

  toJSON(message: QueryGetBookResponse): unknown {
    const obj: any = {};
    message.book !== undefined &&
      (obj.book = message.book ? OrderBook.toJSON(message.book) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetBookResponse>): QueryGetBookResponse {
    const message = { ...baseQueryGetBookResponse } as QueryGetBookResponse;
    message.book =
      object.book !== undefined && object.book !== null
        ? OrderBook.fromPartial(object.book)
        : undefined;
    return message;
  },
};

const baseQueryAllBookRequest: object = {};

export const QueryAllBookRequest = {
  encode(
    message: QueryAllBookRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBookRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllBookRequest } as QueryAllBookRequest;
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

  fromJSON(object: any): QueryAllBookRequest {
    const message = { ...baseQueryAllBookRequest } as QueryAllBookRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllBookRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllBookRequest>): QueryAllBookRequest {
    const message = { ...baseQueryAllBookRequest } as QueryAllBookRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllBookResponse: object = {};

export const QueryAllBookResponse = {
  encode(
    message: QueryAllBookResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.books) {
      OrderBook.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllBookResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllBookResponse } as QueryAllBookResponse;
    message.books = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.books.push(OrderBook.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllBookResponse {
    const message = { ...baseQueryAllBookResponse } as QueryAllBookResponse;
    message.books = (object.books ?? []).map((e: any) => OrderBook.fromJSON(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllBookResponse): unknown {
    const obj: any = {};
    if (message.books) {
      obj.books = message.books.map((e) =>
        e ? OrderBook.toJSON(e) : undefined
      );
    } else {
      obj.books = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllBookResponse>): QueryAllBookResponse {
    const message = { ...baseQueryAllBookResponse } as QueryAllBookResponse;
    message.books = (object.books ?? []).map((e) => OrderBook.fromPartial(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Get order books for all markets */
  Book(request: QueryGetBookRequest): Promise<QueryGetBookResponse>;
  /** Get order book for a market */
  BookAll(request: QueryAllBookRequest): Promise<QueryAllBookResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Book = this.Book.bind(this);
    this.BookAll = this.BookAll.bind(this);
  }
  Book(request: QueryGetBookRequest): Promise<QueryGetBookResponse> {
    const data = QueryGetBookRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.book.Query",
      "Book",
      data
    );
    return promise.then((data) =>
      QueryGetBookResponse.decode(new _m0.Reader(data))
    );
  }

  BookAll(request: QueryAllBookRequest): Promise<QueryAllBookResponse> {
    const data = QueryAllBookRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.book.Query",
      "BookAll",
      data
    );
    return promise.then((data) =>
      QueryAllBookResponse.decode(new _m0.Reader(data))
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
