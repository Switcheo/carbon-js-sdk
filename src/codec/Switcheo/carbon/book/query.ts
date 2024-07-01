/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { OrderBook, StopBook } from "./book";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";

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

const baseQueryImpactPriceRequest: object = { marketId: "", quoteAmount: "" };

export const QueryImpactPriceRequest = {
  encode(
    message: QueryImpactPriceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.quoteAmount !== "") {
      writer.uint32(18).string(message.quoteAmount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryImpactPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryImpactPriceRequest,
    } as QueryImpactPriceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.quoteAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryImpactPriceRequest {
    const message = {
      ...baseQueryImpactPriceRequest,
    } as QueryImpactPriceRequest;
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.quoteAmount =
      object.quoteAmount !== undefined && object.quoteAmount !== null
        ? String(object.quoteAmount)
        : "";
    return message;
  },

  toJSON(message: QueryImpactPriceRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.quoteAmount !== undefined &&
      (obj.quoteAmount = message.quoteAmount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryImpactPriceRequest>
  ): QueryImpactPriceRequest {
    const message = {
      ...baseQueryImpactPriceRequest,
    } as QueryImpactPriceRequest;
    message.marketId = object.marketId ?? "";
    message.quoteAmount = object.quoteAmount ?? "";
    return message;
  },
};

const baseQueryImpactPriceResponse: object = {
  impactPrice: "",
  baseAmount: "",
  quoteAmount: "",
};

export const QueryImpactPriceResponse = {
  encode(
    message: QueryImpactPriceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryImpactPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryImpactPriceResponse,
    } as QueryImpactPriceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.impactPrice = reader.string();
          break;
        case 2:
          message.baseAmount = reader.string();
          break;
        case 3:
          message.quoteAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryImpactPriceResponse {
    const message = {
      ...baseQueryImpactPriceResponse,
    } as QueryImpactPriceResponse;
    message.impactPrice =
      object.impactPrice !== undefined && object.impactPrice !== null
        ? String(object.impactPrice)
        : "";
    message.baseAmount =
      object.baseAmount !== undefined && object.baseAmount !== null
        ? String(object.baseAmount)
        : "";
    message.quoteAmount =
      object.quoteAmount !== undefined && object.quoteAmount !== null
        ? String(object.quoteAmount)
        : "";
    return message;
  },

  toJSON(message: QueryImpactPriceResponse): unknown {
    const obj: any = {};
    message.impactPrice !== undefined &&
      (obj.impactPrice = message.impactPrice);
    message.baseAmount !== undefined && (obj.baseAmount = message.baseAmount);
    message.quoteAmount !== undefined &&
      (obj.quoteAmount = message.quoteAmount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryImpactPriceResponse>
  ): QueryImpactPriceResponse {
    const message = {
      ...baseQueryImpactPriceResponse,
    } as QueryImpactPriceResponse;
    message.impactPrice = object.impactPrice ?? "";
    message.baseAmount = object.baseAmount ?? "";
    message.quoteAmount = object.quoteAmount ?? "";
    return message;
  },
};

const baseQueryGetBookRequest: object = { marketId: "" };

export const QueryGetBookRequest = {
  encode(
    message: QueryGetBookRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
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
          message.marketId = reader.string();
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
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    return message;
  },

  toJSON(message: QueryGetBookRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetBookRequest>): QueryGetBookRequest {
    const message = { ...baseQueryGetBookRequest } as QueryGetBookRequest;
    message.marketId = object.marketId ?? "";
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

const baseQueryGetStopBookRequest: object = { marketId: "" };

export const QueryGetStopBookRequest = {
  encode(
    message: QueryGetStopBookRequest,
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
  ): QueryGetStopBookRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetStopBookRequest,
    } as QueryGetStopBookRequest;
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

  fromJSON(object: any): QueryGetStopBookRequest {
    const message = {
      ...baseQueryGetStopBookRequest,
    } as QueryGetStopBookRequest;
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    return message;
  },

  toJSON(message: QueryGetStopBookRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetStopBookRequest>
  ): QueryGetStopBookRequest {
    const message = {
      ...baseQueryGetStopBookRequest,
    } as QueryGetStopBookRequest;
    message.marketId = object.marketId ?? "";
    return message;
  },
};

const baseQueryGetStopBookResponse: object = {};

export const QueryGetStopBookResponse = {
  encode(
    message: QueryGetStopBookResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.books) {
      StopBook.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetStopBookResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetStopBookResponse,
    } as QueryGetStopBookResponse;
    message.books = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.books.push(StopBook.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetStopBookResponse {
    const message = {
      ...baseQueryGetStopBookResponse,
    } as QueryGetStopBookResponse;
    message.books = (object.books ?? []).map((e: any) => StopBook.fromJSON(e));
    return message;
  },

  toJSON(message: QueryGetStopBookResponse): unknown {
    const obj: any = {};
    if (message.books) {
      obj.books = message.books.map((e) =>
        e ? StopBook.toJSON(e) : undefined
      );
    } else {
      obj.books = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetStopBookResponse>
  ): QueryGetStopBookResponse {
    const message = {
      ...baseQueryGetStopBookResponse,
    } as QueryGetStopBookResponse;
    message.books = (object.books ?? []).map((e) => StopBook.fromPartial(e));
    return message;
  },
};

const baseQueryAllStopBookRequest: object = {};

export const QueryAllStopBookRequest = {
  encode(
    message: QueryAllStopBookRequest,
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
  ): QueryAllStopBookRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllStopBookRequest,
    } as QueryAllStopBookRequest;
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

  fromJSON(object: any): QueryAllStopBookRequest {
    const message = {
      ...baseQueryAllStopBookRequest,
    } as QueryAllStopBookRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllStopBookRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllStopBookRequest>
  ): QueryAllStopBookRequest {
    const message = {
      ...baseQueryAllStopBookRequest,
    } as QueryAllStopBookRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllStopBookResponse: object = {};

export const QueryAllStopBookResponse = {
  encode(
    message: QueryAllStopBookResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.books) {
      StopBook.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllStopBookResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllStopBookResponse,
    } as QueryAllStopBookResponse;
    message.books = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.books.push(StopBook.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllStopBookResponse {
    const message = {
      ...baseQueryAllStopBookResponse,
    } as QueryAllStopBookResponse;
    message.books = (object.books ?? []).map((e: any) => StopBook.fromJSON(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllStopBookResponse): unknown {
    const obj: any = {};
    if (message.books) {
      obj.books = message.books.map((e) =>
        e ? StopBook.toJSON(e) : undefined
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

  fromPartial(
    object: DeepPartial<QueryAllStopBookResponse>
  ): QueryAllStopBookResponse {
    const message = {
      ...baseQueryAllStopBookResponse,
    } as QueryAllStopBookResponse;
    message.books = (object.books ?? []).map((e) => StopBook.fromPartial(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Get impact price for a market */
  ImpactPrice(
    request: QueryImpactPriceRequest
  ): Promise<QueryImpactPriceResponse>;
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
  StopBookAll(
    request: QueryAllStopBookRequest
  ): Promise<QueryAllStopBookResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ImpactPrice = this.ImpactPrice.bind(this);
    this.CombinedBook = this.CombinedBook.bind(this);
    this.ConcreteBook = this.ConcreteBook.bind(this);
    this.VirtualBook = this.VirtualBook.bind(this);
    this.StopBook = this.StopBook.bind(this);
    this.CombinedBookAll = this.CombinedBookAll.bind(this);
    this.StopBookAll = this.StopBookAll.bind(this);
  }
  ImpactPrice(
    request: QueryImpactPriceRequest
  ): Promise<QueryImpactPriceResponse> {
    const data = QueryImpactPriceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.book.Query",
      "ImpactPrice",
      data
    );
    return promise.then((data) =>
      QueryImpactPriceResponse.decode(new _m0.Reader(data))
    );
  }

  CombinedBook(request: QueryGetBookRequest): Promise<QueryGetBookResponse> {
    const data = QueryGetBookRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.book.Query",
      "CombinedBook",
      data
    );
    return promise.then((data) =>
      QueryGetBookResponse.decode(new _m0.Reader(data))
    );
  }

  ConcreteBook(request: QueryGetBookRequest): Promise<QueryGetBookResponse> {
    const data = QueryGetBookRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.book.Query",
      "ConcreteBook",
      data
    );
    return promise.then((data) =>
      QueryGetBookResponse.decode(new _m0.Reader(data))
    );
  }

  VirtualBook(request: QueryGetBookRequest): Promise<QueryGetBookResponse> {
    const data = QueryGetBookRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.book.Query",
      "VirtualBook",
      data
    );
    return promise.then((data) =>
      QueryGetBookResponse.decode(new _m0.Reader(data))
    );
  }

  StopBook(
    request: QueryGetStopBookRequest
  ): Promise<QueryGetStopBookResponse> {
    const data = QueryGetStopBookRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.book.Query",
      "StopBook",
      data
    );
    return promise.then((data) =>
      QueryGetStopBookResponse.decode(new _m0.Reader(data))
    );
  }

  CombinedBookAll(request: QueryAllBookRequest): Promise<QueryAllBookResponse> {
    const data = QueryAllBookRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.book.Query",
      "CombinedBookAll",
      data
    );
    return promise.then((data) =>
      QueryAllBookResponse.decode(new _m0.Reader(data))
    );
  }

  StopBookAll(
    request: QueryAllStopBookRequest
  ): Promise<QueryAllStopBookResponse> {
    const data = QueryAllStopBookRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.book.Query",
      "StopBookAll",
      data
    );
    return promise.then((data) =>
      QueryAllStopBookResponse.decode(new _m0.Reader(data))
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
