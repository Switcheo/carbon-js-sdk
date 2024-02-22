/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Order, DBOrder } from "./order";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";

export const protobufPackage = "Switcheo.carbon.order";

/** this line is used by starport scaffolding # 3 */
export interface QueryGetOrderRequest {
  id: string;
}

export interface QueryGetOrderResponse {
  order?: Order;
}

export interface QueryAllOrderRequest {
  address: string;
  marketId: string;
  orderType: string;
  orderStatus: string;
  pagination?: PageRequest;
}

export interface QueryAllOrderResponse {
  orders: Order[];
  pagination?: PageResponse;
}

export interface QueryAccountOpenOrdersRequest {
  address: string;
  marketId: string;
}

export interface QueryAccountOpenOrdersResponse {
  orders: Order[];
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

export interface QueryOrderAllocatedMarginRequest {
  endBlockHeight: string;
}

export interface QueryOrderAllocatedMarginResponse {
  orders: DBOrder[];
}

const baseQueryGetOrderRequest: object = { id: "" };

export const QueryGetOrderRequest = {
  encode(
    message: QueryGetOrderRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetOrderRequest } as QueryGetOrderRequest;
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

  fromJSON(object: any): QueryGetOrderRequest {
    const message = { ...baseQueryGetOrderRequest } as QueryGetOrderRequest;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    return message;
  },

  toJSON(message: QueryGetOrderRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetOrderRequest>): QueryGetOrderRequest {
    const message = { ...baseQueryGetOrderRequest } as QueryGetOrderRequest;
    message.id = object.id ?? "";
    return message;
  },
};

const baseQueryGetOrderResponse: object = {};

export const QueryGetOrderResponse = {
  encode(
    message: QueryGetOrderResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetOrderResponse } as QueryGetOrderResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetOrderResponse {
    const message = { ...baseQueryGetOrderResponse } as QueryGetOrderResponse;
    message.order =
      object.order !== undefined && object.order !== null
        ? Order.fromJSON(object.order)
        : undefined;
    return message;
  },

  toJSON(message: QueryGetOrderResponse): unknown {
    const obj: any = {};
    message.order !== undefined &&
      (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetOrderResponse>
  ): QueryGetOrderResponse {
    const message = { ...baseQueryGetOrderResponse } as QueryGetOrderResponse;
    message.order =
      object.order !== undefined && object.order !== null
        ? Order.fromPartial(object.order)
        : undefined;
    return message;
  },
};

const baseQueryAllOrderRequest: object = {
  address: "",
  marketId: "",
  orderType: "",
  orderStatus: "",
};

export const QueryAllOrderRequest = {
  encode(
    message: QueryAllOrderRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.orderType !== "") {
      writer.uint32(26).string(message.orderType);
    }
    if (message.orderStatus !== "") {
      writer.uint32(34).string(message.orderStatus);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllOrderRequest } as QueryAllOrderRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        case 3:
          message.orderType = reader.string();
          break;
        case 4:
          message.orderStatus = reader.string();
          break;
        case 5:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllOrderRequest {
    const message = { ...baseQueryAllOrderRequest } as QueryAllOrderRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.orderType =
      object.orderType !== undefined && object.orderType !== null
        ? String(object.orderType)
        : "";
    message.orderStatus =
      object.orderStatus !== undefined && object.orderStatus !== null
        ? String(object.orderStatus)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllOrderRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.orderType !== undefined && (obj.orderType = message.orderType);
    message.orderStatus !== undefined &&
      (obj.orderStatus = message.orderStatus);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllOrderRequest>): QueryAllOrderRequest {
    const message = { ...baseQueryAllOrderRequest } as QueryAllOrderRequest;
    message.address = object.address ?? "";
    message.marketId = object.marketId ?? "";
    message.orderType = object.orderType ?? "";
    message.orderStatus = object.orderStatus ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllOrderResponse: object = {};

export const QueryAllOrderResponse = {
  encode(
    message: QueryAllOrderResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllOrderResponse } as QueryAllOrderResponse;
    message.orders = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(Order.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllOrderResponse {
    const message = { ...baseQueryAllOrderResponse } as QueryAllOrderResponse;
    message.orders = (object.orders ?? []).map((e: any) => Order.fromJSON(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllOrderResponse): unknown {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map((e) => (e ? Order.toJSON(e) : undefined));
    } else {
      obj.orders = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllOrderResponse>
  ): QueryAllOrderResponse {
    const message = { ...baseQueryAllOrderResponse } as QueryAllOrderResponse;
    message.orders = (object.orders ?? []).map((e) => Order.fromPartial(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAccountOpenOrdersRequest: object = { address: "", marketId: "" };

export const QueryAccountOpenOrdersRequest = {
  encode(
    message: QueryAccountOpenOrdersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountOpenOrdersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAccountOpenOrdersRequest,
    } as QueryAccountOpenOrdersRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountOpenOrdersRequest {
    const message = {
      ...baseQueryAccountOpenOrdersRequest,
    } as QueryAccountOpenOrdersRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    return message;
  },

  toJSON(message: QueryAccountOpenOrdersRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAccountOpenOrdersRequest>
  ): QueryAccountOpenOrdersRequest {
    const message = {
      ...baseQueryAccountOpenOrdersRequest,
    } as QueryAccountOpenOrdersRequest;
    message.address = object.address ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  },
};

const baseQueryAccountOpenOrdersResponse: object = {};

export const QueryAccountOpenOrdersResponse = {
  encode(
    message: QueryAccountOpenOrdersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountOpenOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAccountOpenOrdersResponse,
    } as QueryAccountOpenOrdersResponse;
    message.orders = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(Order.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountOpenOrdersResponse {
    const message = {
      ...baseQueryAccountOpenOrdersResponse,
    } as QueryAccountOpenOrdersResponse;
    message.orders = (object.orders ?? []).map((e: any) => Order.fromJSON(e));
    return message;
  },

  toJSON(message: QueryAccountOpenOrdersResponse): unknown {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map((e) => (e ? Order.toJSON(e) : undefined));
    } else {
      obj.orders = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAccountOpenOrdersResponse>
  ): QueryAccountOpenOrdersResponse {
    const message = {
      ...baseQueryAccountOpenOrdersResponse,
    } as QueryAccountOpenOrdersResponse;
    message.orders = (object.orders ?? []).map((e) => Order.fromPartial(e));
    return message;
  },
};

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

const baseQueryOrderAllocatedMarginRequest: object = { endBlockHeight: "" };

export const QueryOrderAllocatedMarginRequest = {
  encode(
    message: QueryOrderAllocatedMarginRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.endBlockHeight !== "") {
      writer.uint32(10).string(message.endBlockHeight);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryOrderAllocatedMarginRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryOrderAllocatedMarginRequest,
    } as QueryOrderAllocatedMarginRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.endBlockHeight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOrderAllocatedMarginRequest {
    const message = {
      ...baseQueryOrderAllocatedMarginRequest,
    } as QueryOrderAllocatedMarginRequest;
    message.endBlockHeight =
      object.endBlockHeight !== undefined && object.endBlockHeight !== null
        ? String(object.endBlockHeight)
        : "";
    return message;
  },

  toJSON(message: QueryOrderAllocatedMarginRequest): unknown {
    const obj: any = {};
    message.endBlockHeight !== undefined &&
      (obj.endBlockHeight = message.endBlockHeight);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryOrderAllocatedMarginRequest>
  ): QueryOrderAllocatedMarginRequest {
    const message = {
      ...baseQueryOrderAllocatedMarginRequest,
    } as QueryOrderAllocatedMarginRequest;
    message.endBlockHeight = object.endBlockHeight ?? "";
    return message;
  },
};

const baseQueryOrderAllocatedMarginResponse: object = {};

export const QueryOrderAllocatedMarginResponse = {
  encode(
    message: QueryOrderAllocatedMarginResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.orders) {
      DBOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryOrderAllocatedMarginResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryOrderAllocatedMarginResponse,
    } as QueryOrderAllocatedMarginResponse;
    message.orders = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(DBOrder.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOrderAllocatedMarginResponse {
    const message = {
      ...baseQueryOrderAllocatedMarginResponse,
    } as QueryOrderAllocatedMarginResponse;
    message.orders = (object.orders ?? []).map((e: any) => DBOrder.fromJSON(e));
    return message;
  },

  toJSON(message: QueryOrderAllocatedMarginResponse): unknown {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map((e) =>
        e ? DBOrder.toJSON(e) : undefined
      );
    } else {
      obj.orders = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryOrderAllocatedMarginResponse>
  ): QueryOrderAllocatedMarginResponse {
    const message = {
      ...baseQueryOrderAllocatedMarginResponse,
    } as QueryOrderAllocatedMarginResponse;
    message.orders = (object.orders ?? []).map((e) => DBOrder.fromPartial(e));
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Get details for an order */
  Order(request: QueryGetOrderRequest): Promise<QueryGetOrderResponse>;
  /** Get details for all orders */
  OrderAll(request: QueryAllOrderRequest): Promise<QueryAllOrderResponse>;
  /** Get open orders for an address and market */
  OrdersAccountOpen(
    request: QueryAccountOpenOrdersRequest
  ): Promise<QueryAccountOpenOrdersResponse>;
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Get all orders with allocated margin (open orders) */
  OrderAllocatedMargin(
    request: QueryOrderAllocatedMarginRequest
  ): Promise<QueryOrderAllocatedMarginResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Order = this.Order.bind(this);
    this.OrderAll = this.OrderAll.bind(this);
    this.OrdersAccountOpen = this.OrdersAccountOpen.bind(this);
    this.Params = this.Params.bind(this);
    this.OrderAllocatedMargin = this.OrderAllocatedMargin.bind(this);
  }
  Order(request: QueryGetOrderRequest): Promise<QueryGetOrderResponse> {
    const data = QueryGetOrderRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.order.Query",
      "Order",
      data
    );
    return promise.then((data) =>
      QueryGetOrderResponse.decode(new _m0.Reader(data))
    );
  }

  OrderAll(request: QueryAllOrderRequest): Promise<QueryAllOrderResponse> {
    const data = QueryAllOrderRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.order.Query",
      "OrderAll",
      data
    );
    return promise.then((data) =>
      QueryAllOrderResponse.decode(new _m0.Reader(data))
    );
  }

  OrdersAccountOpen(
    request: QueryAccountOpenOrdersRequest
  ): Promise<QueryAccountOpenOrdersResponse> {
    const data = QueryAccountOpenOrdersRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.order.Query",
      "OrdersAccountOpen",
      data
    );
    return promise.then((data) =>
      QueryAccountOpenOrdersResponse.decode(new _m0.Reader(data))
    );
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.order.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  OrderAllocatedMargin(
    request: QueryOrderAllocatedMarginRequest
  ): Promise<QueryOrderAllocatedMarginResponse> {
    const data = QueryOrderAllocatedMarginRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.order.Query",
      "OrderAllocatedMargin",
      data
    );
    return promise.then((data) =>
      QueryOrderAllocatedMarginResponse.decode(new _m0.Reader(data))
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
