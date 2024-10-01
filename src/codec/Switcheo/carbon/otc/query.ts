/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { RfqWithStatus } from "./rfq";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { QuoteWithStatus } from "./quote";

export const protobufPackage = "Switcheo.carbon.otc";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  params?: Params;
}

/** QueryRfq is request type for the Query/Rfq RPC method and takes in a RFQ ID. */
export interface QueryRfqRequest {
  id: string;
}

/** QueryRfq is response type for the Query/Rfq RPC method and returns a RFQ. */
export interface QueryRfqResponse {
  rfq?: RfqWithStatus;
}

/**
 * QueryAllRfq is request type for the Query/Rfqs RPC method and takes in
 * filter options.
 */
export interface QueryAllRfqRequest {
  requester: string;
  buyDenom: string;
  status: string;
  pagination?: PageRequest;
}

/**
 * QueryAllRfq is response type for the Query/Rfqs RPC method and
 * returns an array of RFQs.
 */
export interface QueryAllRfqResponse {
  rfqs: RfqWithStatus[];
  pagination?: PageResponse;
}

/**
 * QueryQuote is request type for the Query/Quote RPC method and takes in a
 * Quote ID.
 */
export interface QueryQuoteRequest {
  id: string;
}

/**
 * QueryQuote is response type for the Query/Quote RPC method and
 * returns a Quote.
 */
export interface QueryQuoteResponse {
  quote?: QuoteWithStatus;
}

/**
 * QueryAllQuote is request type for the Query/Quotes RPC method and takes in
 * filter options.
 */
export interface QueryAllQuoteRequest {
  quoter: string;
  rfqId: string;
  denom: string;
  minQuantity: string;
  maxQuantity: string;
  status: string;
  pagination?: PageRequest;
}

/**
 * QueryQuote is response type for the Query/Quotes RPC method and
 * returns an array of Quotes.
 */
export interface QueryAllQuoteResponse {
  quotes: QuoteWithStatus[];
  pagination?: PageResponse;
}

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

const baseQueryRfqRequest: object = { id: "" };

export const QueryRfqRequest = {
  encode(
    message: QueryRfqRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRfqRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryRfqRequest } as QueryRfqRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRfqRequest {
    const message = { ...baseQueryRfqRequest } as QueryRfqRequest;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    return message;
  },

  toJSON(message: QueryRfqRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRfqRequest>): QueryRfqRequest {
    const message = { ...baseQueryRfqRequest } as QueryRfqRequest;
    message.id = object.id ?? "";
    return message;
  },
};

const baseQueryRfqResponse: object = {};

export const QueryRfqResponse = {
  encode(
    message: QueryRfqResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rfq !== undefined) {
      RfqWithStatus.encode(message.rfq, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRfqResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryRfqResponse } as QueryRfqResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rfq = RfqWithStatus.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRfqResponse {
    const message = { ...baseQueryRfqResponse } as QueryRfqResponse;
    message.rfq =
      object.rfq !== undefined && object.rfq !== null
        ? RfqWithStatus.fromJSON(object.rfq)
        : undefined;
    return message;
  },

  toJSON(message: QueryRfqResponse): unknown {
    const obj: any = {};
    message.rfq !== undefined &&
      (obj.rfq = message.rfq ? RfqWithStatus.toJSON(message.rfq) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRfqResponse>): QueryRfqResponse {
    const message = { ...baseQueryRfqResponse } as QueryRfqResponse;
    message.rfq =
      object.rfq !== undefined && object.rfq !== null
        ? RfqWithStatus.fromPartial(object.rfq)
        : undefined;
    return message;
  },
};

const baseQueryAllRfqRequest: object = {
  requester: "",
  buyDenom: "",
  status: "",
};

export const QueryAllRfqRequest = {
  encode(
    message: QueryAllRfqRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.requester !== "") {
      writer.uint32(10).string(message.requester);
    }
    if (message.buyDenom !== "") {
      writer.uint32(18).string(message.buyDenom);
    }
    if (message.status !== "") {
      writer.uint32(26).string(message.status);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRfqRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllRfqRequest } as QueryAllRfqRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requester = reader.string();
          break;
        case 2:
          message.buyDenom = reader.string();
          break;
        case 3:
          message.status = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllRfqRequest {
    const message = { ...baseQueryAllRfqRequest } as QueryAllRfqRequest;
    message.requester =
      object.requester !== undefined && object.requester !== null
        ? String(object.requester)
        : "";
    message.buyDenom =
      object.buyDenom !== undefined && object.buyDenom !== null
        ? String(object.buyDenom)
        : "";
    message.status =
      object.status !== undefined && object.status !== null
        ? String(object.status)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllRfqRequest): unknown {
    const obj: any = {};
    message.requester !== undefined && (obj.requester = message.requester);
    message.buyDenom !== undefined && (obj.buyDenom = message.buyDenom);
    message.status !== undefined && (obj.status = message.status);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllRfqRequest>): QueryAllRfqRequest {
    const message = { ...baseQueryAllRfqRequest } as QueryAllRfqRequest;
    message.requester = object.requester ?? "";
    message.buyDenom = object.buyDenom ?? "";
    message.status = object.status ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllRfqResponse: object = {};

export const QueryAllRfqResponse = {
  encode(
    message: QueryAllRfqResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.rfqs) {
      RfqWithStatus.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRfqResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllRfqResponse } as QueryAllRfqResponse;
    message.rfqs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rfqs.push(RfqWithStatus.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllRfqResponse {
    const message = { ...baseQueryAllRfqResponse } as QueryAllRfqResponse;
    message.rfqs = (object.rfqs ?? []).map((e: any) =>
      RfqWithStatus.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllRfqResponse): unknown {
    const obj: any = {};
    if (message.rfqs) {
      obj.rfqs = message.rfqs.map((e) =>
        e ? RfqWithStatus.toJSON(e) : undefined
      );
    } else {
      obj.rfqs = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllRfqResponse>): QueryAllRfqResponse {
    const message = { ...baseQueryAllRfqResponse } as QueryAllRfqResponse;
    message.rfqs = (object.rfqs ?? []).map((e) => RfqWithStatus.fromPartial(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryQuoteRequest: object = { id: "" };

export const QueryQuoteRequest = {
  encode(
    message: QueryQuoteRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQuoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryQuoteRequest } as QueryQuoteRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryQuoteRequest {
    const message = { ...baseQueryQuoteRequest } as QueryQuoteRequest;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    return message;
  },

  toJSON(message: QueryQuoteRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryQuoteRequest>): QueryQuoteRequest {
    const message = { ...baseQueryQuoteRequest } as QueryQuoteRequest;
    message.id = object.id ?? "";
    return message;
  },
};

const baseQueryQuoteResponse: object = {};

export const QueryQuoteResponse = {
  encode(
    message: QueryQuoteResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.quote !== undefined) {
      QuoteWithStatus.encode(message.quote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQuoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryQuoteResponse } as QueryQuoteResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quote = QuoteWithStatus.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryQuoteResponse {
    const message = { ...baseQueryQuoteResponse } as QueryQuoteResponse;
    message.quote =
      object.quote !== undefined && object.quote !== null
        ? QuoteWithStatus.fromJSON(object.quote)
        : undefined;
    return message;
  },

  toJSON(message: QueryQuoteResponse): unknown {
    const obj: any = {};
    message.quote !== undefined &&
      (obj.quote = message.quote
        ? QuoteWithStatus.toJSON(message.quote)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryQuoteResponse>): QueryQuoteResponse {
    const message = { ...baseQueryQuoteResponse } as QueryQuoteResponse;
    message.quote =
      object.quote !== undefined && object.quote !== null
        ? QuoteWithStatus.fromPartial(object.quote)
        : undefined;
    return message;
  },
};

const baseQueryAllQuoteRequest: object = {
  quoter: "",
  rfqId: "",
  denom: "",
  minQuantity: "",
  maxQuantity: "",
  status: "",
};

export const QueryAllQuoteRequest = {
  encode(
    message: QueryAllQuoteRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.quoter !== "") {
      writer.uint32(10).string(message.quoter);
    }
    if (message.rfqId !== "") {
      writer.uint32(18).string(message.rfqId);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.minQuantity !== "") {
      writer.uint32(34).string(message.minQuantity);
    }
    if (message.maxQuantity !== "") {
      writer.uint32(42).string(message.maxQuantity);
    }
    if (message.status !== "") {
      writer.uint32(50).string(message.status);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllQuoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllQuoteRequest } as QueryAllQuoteRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quoter = reader.string();
          break;
        case 2:
          message.rfqId = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.minQuantity = reader.string();
          break;
        case 5:
          message.maxQuantity = reader.string();
          break;
        case 6:
          message.status = reader.string();
          break;
        case 7:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllQuoteRequest {
    const message = { ...baseQueryAllQuoteRequest } as QueryAllQuoteRequest;
    message.quoter =
      object.quoter !== undefined && object.quoter !== null
        ? String(object.quoter)
        : "";
    message.rfqId =
      object.rfqId !== undefined && object.rfqId !== null
        ? String(object.rfqId)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.minQuantity =
      object.minQuantity !== undefined && object.minQuantity !== null
        ? String(object.minQuantity)
        : "";
    message.maxQuantity =
      object.maxQuantity !== undefined && object.maxQuantity !== null
        ? String(object.maxQuantity)
        : "";
    message.status =
      object.status !== undefined && object.status !== null
        ? String(object.status)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllQuoteRequest): unknown {
    const obj: any = {};
    message.quoter !== undefined && (obj.quoter = message.quoter);
    message.rfqId !== undefined && (obj.rfqId = message.rfqId);
    message.denom !== undefined && (obj.denom = message.denom);
    message.minQuantity !== undefined &&
      (obj.minQuantity = message.minQuantity);
    message.maxQuantity !== undefined &&
      (obj.maxQuantity = message.maxQuantity);
    message.status !== undefined && (obj.status = message.status);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllQuoteRequest>): QueryAllQuoteRequest {
    const message = { ...baseQueryAllQuoteRequest } as QueryAllQuoteRequest;
    message.quoter = object.quoter ?? "";
    message.rfqId = object.rfqId ?? "";
    message.denom = object.denom ?? "";
    message.minQuantity = object.minQuantity ?? "";
    message.maxQuantity = object.maxQuantity ?? "";
    message.status = object.status ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllQuoteResponse: object = {};

export const QueryAllQuoteResponse = {
  encode(
    message: QueryAllQuoteResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.quotes) {
      QuoteWithStatus.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllQuoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllQuoteResponse } as QueryAllQuoteResponse;
    message.quotes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quotes.push(QuoteWithStatus.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllQuoteResponse {
    const message = { ...baseQueryAllQuoteResponse } as QueryAllQuoteResponse;
    message.quotes = (object.quotes ?? []).map((e: any) =>
      QuoteWithStatus.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllQuoteResponse): unknown {
    const obj: any = {};
    if (message.quotes) {
      obj.quotes = message.quotes.map((e) =>
        e ? QuoteWithStatus.toJSON(e) : undefined
      );
    } else {
      obj.quotes = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllQuoteResponse>
  ): QueryAllQuoteResponse {
    const message = { ...baseQueryAllQuoteResponse } as QueryAllQuoteResponse;
    message.quotes = (object.quotes ?? []).map((e) =>
      QuoteWithStatus.fromPartial(e)
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
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  Rfq(request: QueryRfqRequest): Promise<QueryRfqResponse>;
  RfqAll(request: QueryAllRfqRequest): Promise<QueryAllRfqResponse>;
  Quote(request: QueryQuoteRequest): Promise<QueryQuoteResponse>;
  QuoteAll(request: QueryAllQuoteRequest): Promise<QueryAllQuoteResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Rfq = this.Rfq.bind(this);
    this.RfqAll = this.RfqAll.bind(this);
    this.Quote = this.Quote.bind(this);
    this.QuoteAll = this.QuoteAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.otc.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  Rfq(request: QueryRfqRequest): Promise<QueryRfqResponse> {
    const data = QueryRfqRequest.encode(request).finish();
    const promise = this.rpc.request("Switcheo.carbon.otc.Query", "Rfq", data);
    return promise.then((data) =>
      QueryRfqResponse.decode(new _m0.Reader(data))
    );
  }

  RfqAll(request: QueryAllRfqRequest): Promise<QueryAllRfqResponse> {
    const data = QueryAllRfqRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.otc.Query",
      "RfqAll",
      data
    );
    return promise.then((data) =>
      QueryAllRfqResponse.decode(new _m0.Reader(data))
    );
  }

  Quote(request: QueryQuoteRequest): Promise<QueryQuoteResponse> {
    const data = QueryQuoteRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.otc.Query",
      "Quote",
      data
    );
    return promise.then((data) =>
      QueryQuoteResponse.decode(new _m0.Reader(data))
    );
  }

  QuoteAll(request: QueryAllQuoteRequest): Promise<QueryAllQuoteResponse> {
    const data = QueryAllQuoteRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.otc.Query",
      "QuoteAll",
      data
    );
    return promise.then((data) =>
      QueryAllQuoteResponse.decode(new _m0.Reader(data))
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
