/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Transaction } from "../misc/transaction";
import { DBOrder } from "../order/order";

export const protobufPackage = "Switcheo.carbon.misc";

export interface QuerySearchRequest {
  keyword: string;
  limit: Long;
}

export interface QuerySearchResponse {
  transactions: Transaction[];
  orders: DBOrder[];
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
    if (object.keyword !== undefined && object.keyword !== null) {
      message.keyword = String(object.keyword);
    } else {
      message.keyword = "";
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = Long.fromString(object.limit);
    } else {
      message.limit = Long.UZERO;
    }
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
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = object.limit as Long;
    } else {
      message.limit = Long.UZERO;
    }
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
      DBOrder.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.orders.push(DBOrder.decode(reader, reader.uint32()));
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
    message.transactions = [];
    message.orders = [];
    if (object.transactions !== undefined && object.transactions !== null) {
      for (const e of object.transactions) {
        message.transactions.push(Transaction.fromJSON(e));
      }
    }
    if (object.orders !== undefined && object.orders !== null) {
      for (const e of object.orders) {
        message.orders.push(DBOrder.fromJSON(e));
      }
    }
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
        e ? DBOrder.toJSON(e) : undefined
      );
    } else {
      obj.orders = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySearchResponse>): QuerySearchResponse {
    const message = { ...baseQuerySearchResponse } as QuerySearchResponse;
    message.transactions = [];
    if (object.transactions !== undefined && object.transactions !== null) {
      for (const e of object.transactions) {
        message.transactions.push(Transaction.fromPartial(e));
      }
    }
    message.orders = [];
    if (object.orders !== undefined && object.orders !== null) {
      for (const e of object.orders) {
        message.orders.push(DBOrder.fromPartial(e));
      }
    }
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
