/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../query/pagination";
import { Transaction } from "../misc/transaction";
import { APIOrder } from "../order/order";
import { MessageType } from "../misc/message_type";
import { Block } from "../misc/block";

export const protobufPackage = "Switcheo.carbon.misc";

export interface QuerySearchRequest {
  keyword: string;
  limit: Long;
}

export interface QuerySearchResponse {
  transactions: Transaction[];
  orders: APIOrder[];
}

export interface QueryAllMessageTypeRequest {}

export interface QueryAllMessageTypeResponse {
  messageTypes: MessageType[];
}

export interface QueryAllTransactionRequest {
  hash: string;
  address: string;
  msgTypeFilters: string[];
  pagination?: PageRequest;
}

export interface QueryAllTransactionResponse {
  transactions: Transaction[];
  pagination?: PageResponse;
}

export interface QueryAllBlockRequest {
  pagination?: PageRequest;
}

export interface QueryAllBlockResponse {
  blocks: Block[];
  pagination?: PageResponse;
}

function createBaseQuerySearchRequest(): QuerySearchRequest {
  return { keyword: "", limit: Long.UZERO };
}

export const QuerySearchRequest = {
  encode(
    message: QuerySearchRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.keyword !== "") {
      writer.uint32(10).string(message.keyword);
    }
    if (!message.limit.isZero()) {
      writer.uint32(16).uint64(message.limit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySearchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySearchRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyword = reader.string();
          break;
        case 2:
          message.limit = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySearchRequest {
    const message = createBaseQuerySearchRequest();
    message.keyword =
      object.keyword !== undefined && object.keyword !== null
        ? String(object.keyword)
        : "";
    message.limit =
      object.limit !== undefined && object.limit !== null
        ? Long.fromString(object.limit)
        : Long.UZERO;
    return message;
  },

  toJSON(message: QuerySearchRequest): unknown {
    const obj: any = {};
    message.keyword !== undefined && (obj.keyword = message.keyword);
    message.limit !== undefined &&
      (obj.limit = (message.limit || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySearchRequest>, I>>(
    object: I
  ): QuerySearchRequest {
    const message = createBaseQuerySearchRequest();
    message.keyword = object.keyword ?? "";
    message.limit =
      object.limit !== undefined && object.limit !== null
        ? Long.fromValue(object.limit)
        : Long.UZERO;
    return message;
  },
};

function createBaseQuerySearchResponse(): QuerySearchResponse {
  return { transactions: [], orders: [] };
}

export const QuerySearchResponse = {
  encode(
    message: QuerySearchResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.transactions) {
      Transaction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.orders) {
      APIOrder.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySearchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySearchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transactions.push(
            Transaction.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.orders.push(APIOrder.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySearchResponse {
    const message = createBaseQuerySearchResponse();
    message.transactions = (object.transactions ?? []).map((e: any) =>
      Transaction.fromJSON(e)
    );
    message.orders = (object.orders ?? []).map((e: any) =>
      APIOrder.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QuerySearchResponse): unknown {
    const obj: any = {};
    if (message.transactions) {
      obj.transactions = message.transactions.map((e) =>
        e ? Transaction.toJSON(e) : undefined
      );
    } else {
      obj.transactions = [];
    }
    if (message.orders) {
      obj.orders = message.orders.map((e) =>
        e ? APIOrder.toJSON(e) : undefined
      );
    } else {
      obj.orders = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySearchResponse>, I>>(
    object: I
  ): QuerySearchResponse {
    const message = createBaseQuerySearchResponse();
    message.transactions =
      object.transactions?.map((e) => Transaction.fromPartial(e)) || [];
    message.orders = object.orders?.map((e) => APIOrder.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryAllMessageTypeRequest(): QueryAllMessageTypeRequest {
  return {};
}

export const QueryAllMessageTypeRequest = {
  encode(
    _: QueryAllMessageTypeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllMessageTypeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMessageTypeRequest();
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

  fromJSON(_: any): QueryAllMessageTypeRequest {
    const message = createBaseQueryAllMessageTypeRequest();
    return message;
  },

  toJSON(_: QueryAllMessageTypeRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllMessageTypeRequest>, I>>(
    _: I
  ): QueryAllMessageTypeRequest {
    const message = createBaseQueryAllMessageTypeRequest();
    return message;
  },
};

function createBaseQueryAllMessageTypeResponse(): QueryAllMessageTypeResponse {
  return { messageTypes: [] };
}

export const QueryAllMessageTypeResponse = {
  encode(
    message: QueryAllMessageTypeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.messageTypes) {
      MessageType.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllMessageTypeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMessageTypeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageTypes.push(
            MessageType.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMessageTypeResponse {
    const message = createBaseQueryAllMessageTypeResponse();
    message.messageTypes = (object.messageTypes ?? []).map((e: any) =>
      MessageType.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryAllMessageTypeResponse): unknown {
    const obj: any = {};
    if (message.messageTypes) {
      obj.messageTypes = message.messageTypes.map((e) =>
        e ? MessageType.toJSON(e) : undefined
      );
    } else {
      obj.messageTypes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllMessageTypeResponse>, I>>(
    object: I
  ): QueryAllMessageTypeResponse {
    const message = createBaseQueryAllMessageTypeResponse();
    message.messageTypes =
      object.messageTypes?.map((e) => MessageType.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryAllTransactionRequest(): QueryAllTransactionRequest {
  return { hash: "", address: "", msgTypeFilters: [], pagination: undefined };
}

export const QueryAllTransactionRequest = {
  encode(
    message: QueryAllTransactionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    for (const v of message.msgTypeFilters) {
      writer.uint32(26).string(v!);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllTransactionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTransactionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.msgTypeFilters.push(reader.string());
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

  fromJSON(object: any): QueryAllTransactionRequest {
    const message = createBaseQueryAllTransactionRequest();
    message.hash =
      object.hash !== undefined && object.hash !== null
        ? String(object.hash)
        : "";
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.msgTypeFilters = (object.msgTypeFilters ?? []).map((e: any) =>
      String(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllTransactionRequest): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.address !== undefined && (obj.address = message.address);
    if (message.msgTypeFilters) {
      obj.msgTypeFilters = message.msgTypeFilters.map((e) => e);
    } else {
      obj.msgTypeFilters = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllTransactionRequest>, I>>(
    object: I
  ): QueryAllTransactionRequest {
    const message = createBaseQueryAllTransactionRequest();
    message.hash = object.hash ?? "";
    message.address = object.address ?? "";
    message.msgTypeFilters = object.msgTypeFilters?.map((e) => e) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllTransactionResponse(): QueryAllTransactionResponse {
  return { transactions: [], pagination: undefined };
}

export const QueryAllTransactionResponse = {
  encode(
    message: QueryAllTransactionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.transactions) {
      Transaction.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTransactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transactions.push(
            Transaction.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): QueryAllTransactionResponse {
    const message = createBaseQueryAllTransactionResponse();
    message.transactions = (object.transactions ?? []).map((e: any) =>
      Transaction.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllTransactionResponse): unknown {
    const obj: any = {};
    if (message.transactions) {
      obj.transactions = message.transactions.map((e) =>
        e ? Transaction.toJSON(e) : undefined
      );
    } else {
      obj.transactions = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllTransactionResponse>, I>>(
    object: I
  ): QueryAllTransactionResponse {
    const message = createBaseQueryAllTransactionResponse();
    message.transactions =
      object.transactions?.map((e) => Transaction.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllBlockRequest(): QueryAllBlockRequest {
  return { pagination: undefined };
}

export const QueryAllBlockRequest = {
  encode(
    message: QueryAllBlockRequest,
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
  ): QueryAllBlockRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBlockRequest();
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

  fromJSON(object: any): QueryAllBlockRequest {
    const message = createBaseQueryAllBlockRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllBlockRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllBlockRequest>, I>>(
    object: I
  ): QueryAllBlockRequest {
    const message = createBaseQueryAllBlockRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllBlockResponse(): QueryAllBlockResponse {
  return { blocks: [], pagination: undefined };
}

export const QueryAllBlockResponse = {
  encode(
    message: QueryAllBlockResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.blocks) {
      Block.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllBlockResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blocks.push(Block.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllBlockResponse {
    const message = createBaseQueryAllBlockResponse();
    message.blocks = (object.blocks ?? []).map((e: any) => Block.fromJSON(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllBlockResponse): unknown {
    const obj: any = {};
    if (message.blocks) {
      obj.blocks = message.blocks.map((e) => (e ? Block.toJSON(e) : undefined));
    } else {
      obj.blocks = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllBlockResponse>, I>>(
    object: I
  ): QueryAllBlockResponse {
    const message = createBaseQueryAllBlockResponse();
    message.blocks = object.blocks?.map((e) => Block.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  Search(request: QuerySearchRequest): Promise<QuerySearchResponse>;
  /** Get all message types */
  MessageTypeAll(
    request: QueryAllMessageTypeRequest
  ): Promise<QueryAllMessageTypeResponse>;
  /** Get all transactions */
  TransactionAll(
    request: QueryAllTransactionRequest
  ): Promise<QueryAllTransactionResponse>;
  /** Get all blocks */
  BlockAll(request: QueryAllBlockRequest): Promise<QueryAllBlockResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Search = this.Search.bind(this);
    this.MessageTypeAll = this.MessageTypeAll.bind(this);
    this.TransactionAll = this.TransactionAll.bind(this);
    this.BlockAll = this.BlockAll.bind(this);
  }
  Search(request: QuerySearchRequest): Promise<QuerySearchResponse> {
    const data = QuerySearchRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.misc.Query",
      "Search",
      data
    );
    return promise.then((data) =>
      QuerySearchResponse.decode(new _m0.Reader(data))
    );
  }

  MessageTypeAll(
    request: QueryAllMessageTypeRequest
  ): Promise<QueryAllMessageTypeResponse> {
    const data = QueryAllMessageTypeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.misc.Query",
      "MessageTypeAll",
      data
    );
    return promise.then((data) =>
      QueryAllMessageTypeResponse.decode(new _m0.Reader(data))
    );
  }

  TransactionAll(
    request: QueryAllTransactionRequest
  ): Promise<QueryAllTransactionResponse> {
    const data = QueryAllTransactionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.misc.Query",
      "TransactionAll",
      data
    );
    return promise.then((data) =>
      QueryAllTransactionResponse.decode(new _m0.Reader(data))
    );
  }

  BlockAll(request: QueryAllBlockRequest): Promise<QueryAllBlockResponse> {
    const data = QueryAllBlockRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.misc.Query",
      "BlockAll",
      data
    );
    return promise.then((data) =>
      QueryAllBlockResponse.decode(new _m0.Reader(data))
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
