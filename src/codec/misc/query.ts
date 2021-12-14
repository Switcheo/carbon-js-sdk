/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Transaction } from "../misc/transaction";
import { APIOrder } from "../order/order";

export const protobufPackage = "Switcheo.carbon.misc";

export interface QuerySearchRequest {
  keyword: string;
  limit: Long;
}

export interface QuerySearchResponse {
  transactions: Transaction[];
  orders: APIOrder[];
}

const baseQuerySearchRequest: object = { keyword: "", limit: Long.UZERO };

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
    const message = { ...baseQuerySearchRequest } as QuerySearchRequest;
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
    const message = { ...baseQuerySearchRequest } as QuerySearchRequest;
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

  fromPartial(object: DeepPartial<QuerySearchRequest>): QuerySearchRequest {
    const message = { ...baseQuerySearchRequest } as QuerySearchRequest;
    message.keyword = object.keyword ?? "";
    message.limit =
      object.limit !== undefined && object.limit !== null
        ? Long.fromValue(object.limit)
        : Long.UZERO;
    return message;
  },
};

const baseQuerySearchResponse: object = {};

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
    const message = { ...baseQuerySearchResponse } as QuerySearchResponse;
    message.transactions = [];
    message.orders = [];
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
    const message = { ...baseQuerySearchResponse } as QuerySearchResponse;
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

  fromPartial(object: DeepPartial<QuerySearchResponse>): QuerySearchResponse {
    const message = { ...baseQuerySearchResponse } as QuerySearchResponse;
    message.transactions = (object.transactions ?? []).map((e) =>
      Transaction.fromPartial(e)
    );
    message.orders = (object.orders ?? []).map((e) => APIOrder.fromPartial(e));
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  Search(request: QuerySearchRequest): Promise<QuerySearchResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Search = this.Search.bind(this);
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
