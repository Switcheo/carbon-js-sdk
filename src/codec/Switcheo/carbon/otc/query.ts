/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { QuoteWithStatus } from "./quote";
import { RfqWithStatus } from "./rfq";

export const protobufPackage = "Switcheo.carbon.otc";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

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

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryRfqRequest(): QueryRfqRequest {
  return { id: "" };
}

export const QueryRfqRequest = {
  encode(message: QueryRfqRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRfqRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRfqRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryRfqRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: QueryRfqRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create(base?: DeepPartial<QueryRfqRequest>): QueryRfqRequest {
    return QueryRfqRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryRfqRequest>): QueryRfqRequest {
    const message = createBaseQueryRfqRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseQueryRfqResponse(): QueryRfqResponse {
  return { rfq: undefined };
}

export const QueryRfqResponse = {
  encode(message: QueryRfqResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rfq !== undefined) {
      RfqWithStatus.encode(message.rfq, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRfqResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRfqResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rfq = RfqWithStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryRfqResponse {
    return { rfq: isSet(object.rfq) ? RfqWithStatus.fromJSON(object.rfq) : undefined };
  },

  toJSON(message: QueryRfqResponse): unknown {
    const obj: any = {};
    message.rfq !== undefined && (obj.rfq = message.rfq ? RfqWithStatus.toJSON(message.rfq) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryRfqResponse>): QueryRfqResponse {
    return QueryRfqResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryRfqResponse>): QueryRfqResponse {
    const message = createBaseQueryRfqResponse();
    message.rfq = (object.rfq !== undefined && object.rfq !== null) ? RfqWithStatus.fromPartial(object.rfq) : undefined;
    return message;
  },
};

function createBaseQueryAllRfqRequest(): QueryAllRfqRequest {
  return { requester: "", buyDenom: "", status: "", pagination: undefined };
}

export const QueryAllRfqRequest = {
  encode(message: QueryAllRfqRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRfqRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.requester = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.buyDenom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.status = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): QueryAllRfqRequest {
    return {
      requester: isSet(object.requester) ? String(object.requester) : "",
      buyDenom: isSet(object.buyDenom) ? String(object.buyDenom) : "",
      status: isSet(object.status) ? String(object.status) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllRfqRequest): unknown {
    const obj: any = {};
    message.requester !== undefined && (obj.requester = message.requester);
    message.buyDenom !== undefined && (obj.buyDenom = message.buyDenom);
    message.status !== undefined && (obj.status = message.status);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllRfqRequest>): QueryAllRfqRequest {
    return QueryAllRfqRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllRfqRequest>): QueryAllRfqRequest {
    const message = createBaseQueryAllRfqRequest();
    message.requester = object.requester ?? "";
    message.buyDenom = object.buyDenom ?? "";
    message.status = object.status ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllRfqResponse(): QueryAllRfqResponse {
  return { rfqs: [], pagination: undefined };
}

export const QueryAllRfqResponse = {
  encode(message: QueryAllRfqResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rfqs) {
      RfqWithStatus.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRfqResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRfqResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rfqs.push(RfqWithStatus.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllRfqResponse {
    return {
      rfqs: Array.isArray(object?.rfqs) ? object.rfqs.map((e: any) => RfqWithStatus.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllRfqResponse): unknown {
    const obj: any = {};
    if (message.rfqs) {
      obj.rfqs = message.rfqs.map((e) => e ? RfqWithStatus.toJSON(e) : undefined);
    } else {
      obj.rfqs = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllRfqResponse>): QueryAllRfqResponse {
    return QueryAllRfqResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllRfqResponse>): QueryAllRfqResponse {
    const message = createBaseQueryAllRfqResponse();
    message.rfqs = object.rfqs?.map((e) => RfqWithStatus.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryQuoteRequest(): QueryQuoteRequest {
  return { id: "" };
}

export const QueryQuoteRequest = {
  encode(message: QueryQuoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQuoteRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQuoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryQuoteRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: QueryQuoteRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create(base?: DeepPartial<QueryQuoteRequest>): QueryQuoteRequest {
    return QueryQuoteRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryQuoteRequest>): QueryQuoteRequest {
    const message = createBaseQueryQuoteRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseQueryQuoteResponse(): QueryQuoteResponse {
  return { quote: undefined };
}

export const QueryQuoteResponse = {
  encode(message: QueryQuoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quote !== undefined) {
      QuoteWithStatus.encode(message.quote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQuoteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQuoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.quote = QuoteWithStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryQuoteResponse {
    return { quote: isSet(object.quote) ? QuoteWithStatus.fromJSON(object.quote) : undefined };
  },

  toJSON(message: QueryQuoteResponse): unknown {
    const obj: any = {};
    message.quote !== undefined && (obj.quote = message.quote ? QuoteWithStatus.toJSON(message.quote) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryQuoteResponse>): QueryQuoteResponse {
    return QueryQuoteResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryQuoteResponse>): QueryQuoteResponse {
    const message = createBaseQueryQuoteResponse();
    message.quote = (object.quote !== undefined && object.quote !== null)
      ? QuoteWithStatus.fromPartial(object.quote)
      : undefined;
    return message;
  },
};

function createBaseQueryAllQuoteRequest(): QueryAllQuoteRequest {
  return { quoter: "", rfqId: "", denom: "", minQuantity: "", maxQuantity: "", status: "", pagination: undefined };
}

export const QueryAllQuoteRequest = {
  encode(message: QueryAllQuoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllQuoteRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllQuoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.quoter = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.rfqId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.minQuantity = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.maxQuantity = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.status = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
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

  fromJSON(object: any): QueryAllQuoteRequest {
    return {
      quoter: isSet(object.quoter) ? String(object.quoter) : "",
      rfqId: isSet(object.rfqId) ? String(object.rfqId) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      minQuantity: isSet(object.minQuantity) ? String(object.minQuantity) : "",
      maxQuantity: isSet(object.maxQuantity) ? String(object.maxQuantity) : "",
      status: isSet(object.status) ? String(object.status) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllQuoteRequest): unknown {
    const obj: any = {};
    message.quoter !== undefined && (obj.quoter = message.quoter);
    message.rfqId !== undefined && (obj.rfqId = message.rfqId);
    message.denom !== undefined && (obj.denom = message.denom);
    message.minQuantity !== undefined && (obj.minQuantity = message.minQuantity);
    message.maxQuantity !== undefined && (obj.maxQuantity = message.maxQuantity);
    message.status !== undefined && (obj.status = message.status);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllQuoteRequest>): QueryAllQuoteRequest {
    return QueryAllQuoteRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllQuoteRequest>): QueryAllQuoteRequest {
    const message = createBaseQueryAllQuoteRequest();
    message.quoter = object.quoter ?? "";
    message.rfqId = object.rfqId ?? "";
    message.denom = object.denom ?? "";
    message.minQuantity = object.minQuantity ?? "";
    message.maxQuantity = object.maxQuantity ?? "";
    message.status = object.status ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllQuoteResponse(): QueryAllQuoteResponse {
  return { quotes: [], pagination: undefined };
}

export const QueryAllQuoteResponse = {
  encode(message: QueryAllQuoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.quotes) {
      QuoteWithStatus.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllQuoteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllQuoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.quotes.push(QuoteWithStatus.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllQuoteResponse {
    return {
      quotes: Array.isArray(object?.quotes) ? object.quotes.map((e: any) => QuoteWithStatus.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllQuoteResponse): unknown {
    const obj: any = {};
    if (message.quotes) {
      obj.quotes = message.quotes.map((e) => e ? QuoteWithStatus.toJSON(e) : undefined);
    } else {
      obj.quotes = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllQuoteResponse>): QueryAllQuoteResponse {
    return QueryAllQuoteResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllQuoteResponse>): QueryAllQuoteResponse {
    const message = createBaseQueryAllQuoteResponse();
    message.quotes = object.quotes?.map((e) => QuoteWithStatus.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
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
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.otc.Query";
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Rfq = this.Rfq.bind(this);
    this.RfqAll = this.RfqAll.bind(this);
    this.Quote = this.Quote.bind(this);
    this.QuoteAll = this.QuoteAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  Rfq(request: QueryRfqRequest): Promise<QueryRfqResponse> {
    const data = QueryRfqRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Rfq", data);
    return promise.then((data) => QueryRfqResponse.decode(_m0.Reader.create(data)));
  }

  RfqAll(request: QueryAllRfqRequest): Promise<QueryAllRfqResponse> {
    const data = QueryAllRfqRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RfqAll", data);
    return promise.then((data) => QueryAllRfqResponse.decode(_m0.Reader.create(data)));
  }

  Quote(request: QueryQuoteRequest): Promise<QueryQuoteResponse> {
    const data = QueryQuoteRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Quote", data);
    return promise.then((data) => QueryQuoteResponse.decode(_m0.Reader.create(data)));
  }

  QuoteAll(request: QueryAllQuoteRequest): Promise<QueryAllQuoteResponse> {
    const data = QueryAllQuoteRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QuoteAll", data);
    return promise.then((data) => QueryAllQuoteResponse.decode(_m0.Reader.create(data)));
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
