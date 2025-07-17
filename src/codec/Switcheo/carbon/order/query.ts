/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { DBOrder, Order } from "./order";
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

export interface QueryAccountOrdersRequest {
  address: string;
  marketId: string;
}

export interface QueryAccountOrdersResponse {
  orders: Order[];
}

/** TODO: remove this once frontend has replaced it with query OrdersAccount */
export interface QueryAccountOpenOrdersRequest {
  address: string;
  marketId: string;
}

/** TODO: remove this once frontend has replaced it with query OrdersAccount */
export interface QueryAccountOpenOrdersResponse {
  orders: Order[];
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

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

function createBaseQueryGetOrderRequest(): QueryGetOrderRequest {
  return { id: "" };
}

export const QueryGetOrderRequest = {
  encode(message: QueryGetOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrderRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrderRequest();
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

  fromJSON(object: any): QueryGetOrderRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: QueryGetOrderRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create(base?: DeepPartial<QueryGetOrderRequest>): QueryGetOrderRequest {
    return QueryGetOrderRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetOrderRequest>): QueryGetOrderRequest {
    const message = createBaseQueryGetOrderRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseQueryGetOrderResponse(): QueryGetOrderResponse {
  return { order: undefined };
}

export const QueryGetOrderResponse = {
  encode(message: QueryGetOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrderResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.order = Order.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetOrderResponse {
    return { order: isSet(object.order) ? Order.fromJSON(object.order) : undefined };
  },

  toJSON(message: QueryGetOrderResponse): unknown {
    const obj: any = {};
    message.order !== undefined && (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryGetOrderResponse>): QueryGetOrderResponse {
    return QueryGetOrderResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetOrderResponse>): QueryGetOrderResponse {
    const message = createBaseQueryGetOrderResponse();
    message.order = (object.order !== undefined && object.order !== null) ? Order.fromPartial(object.order) : undefined;
    return message;
  },
};

function createBaseQueryAllOrderRequest(): QueryAllOrderRequest {
  return { address: "", marketId: "", orderType: "", orderStatus: "", pagination: undefined };
}

export const QueryAllOrderRequest = {
  encode(message: QueryAllOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOrderRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.marketId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.orderType = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.orderStatus = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): QueryAllOrderRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      orderType: isSet(object.orderType) ? String(object.orderType) : "",
      orderStatus: isSet(object.orderStatus) ? String(object.orderStatus) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllOrderRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.orderType !== undefined && (obj.orderType = message.orderType);
    message.orderStatus !== undefined && (obj.orderStatus = message.orderStatus);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllOrderRequest>): QueryAllOrderRequest {
    return QueryAllOrderRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllOrderRequest>): QueryAllOrderRequest {
    const message = createBaseQueryAllOrderRequest();
    message.address = object.address ?? "";
    message.marketId = object.marketId ?? "";
    message.orderType = object.orderType ?? "";
    message.orderStatus = object.orderStatus ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllOrderResponse(): QueryAllOrderResponse {
  return { orders: [], pagination: undefined };
}

export const QueryAllOrderResponse = {
  encode(message: QueryAllOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOrderResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.orders.push(Order.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllOrderResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => Order.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllOrderResponse): unknown {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map((e) => e ? Order.toJSON(e) : undefined);
    } else {
      obj.orders = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllOrderResponse>): QueryAllOrderResponse {
    return QueryAllOrderResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllOrderResponse>): QueryAllOrderResponse {
    const message = createBaseQueryAllOrderResponse();
    message.orders = object.orders?.map((e) => Order.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAccountOrdersRequest(): QueryAccountOrdersRequest {
  return { address: "", marketId: "" };
}

export const QueryAccountOrdersRequest = {
  encode(message: QueryAccountOrdersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountOrdersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): QueryAccountOrdersRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
    };
  },

  toJSON(message: QueryAccountOrdersRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  create(base?: DeepPartial<QueryAccountOrdersRequest>): QueryAccountOrdersRequest {
    return QueryAccountOrdersRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAccountOrdersRequest>): QueryAccountOrdersRequest {
    const message = createBaseQueryAccountOrdersRequest();
    message.address = object.address ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  },
};

function createBaseQueryAccountOrdersResponse(): QueryAccountOrdersResponse {
  return { orders: [] };
}

export const QueryAccountOrdersResponse = {
  encode(message: QueryAccountOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.orders.push(Order.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAccountOrdersResponse {
    return { orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => Order.fromJSON(e)) : [] };
  },

  toJSON(message: QueryAccountOrdersResponse): unknown {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map((e) => e ? Order.toJSON(e) : undefined);
    } else {
      obj.orders = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryAccountOrdersResponse>): QueryAccountOrdersResponse {
    return QueryAccountOrdersResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAccountOrdersResponse>): QueryAccountOrdersResponse {
    const message = createBaseQueryAccountOrdersResponse();
    message.orders = object.orders?.map((e) => Order.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryAccountOpenOrdersRequest(): QueryAccountOpenOrdersRequest {
  return { address: "", marketId: "" };
}

export const QueryAccountOpenOrdersRequest = {
  encode(message: QueryAccountOpenOrdersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountOpenOrdersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountOpenOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): QueryAccountOpenOrdersRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
    };
  },

  toJSON(message: QueryAccountOpenOrdersRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  create(base?: DeepPartial<QueryAccountOpenOrdersRequest>): QueryAccountOpenOrdersRequest {
    return QueryAccountOpenOrdersRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAccountOpenOrdersRequest>): QueryAccountOpenOrdersRequest {
    const message = createBaseQueryAccountOpenOrdersRequest();
    message.address = object.address ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  },
};

function createBaseQueryAccountOpenOrdersResponse(): QueryAccountOpenOrdersResponse {
  return { orders: [] };
}

export const QueryAccountOpenOrdersResponse = {
  encode(message: QueryAccountOpenOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountOpenOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountOpenOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.orders.push(Order.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAccountOpenOrdersResponse {
    return { orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => Order.fromJSON(e)) : [] };
  },

  toJSON(message: QueryAccountOpenOrdersResponse): unknown {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map((e) => e ? Order.toJSON(e) : undefined);
    } else {
      obj.orders = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryAccountOpenOrdersResponse>): QueryAccountOpenOrdersResponse {
    return QueryAccountOpenOrdersResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAccountOpenOrdersResponse>): QueryAccountOpenOrdersResponse {
    const message = createBaseQueryAccountOpenOrdersResponse();
    message.orders = object.orders?.map((e) => Order.fromPartial(e)) || [];
    return message;
  },
};

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

function createBaseQueryOrderAllocatedMarginRequest(): QueryOrderAllocatedMarginRequest {
  return { endBlockHeight: "" };
}

export const QueryOrderAllocatedMarginRequest = {
  encode(message: QueryOrderAllocatedMarginRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.endBlockHeight !== "") {
      writer.uint32(10).string(message.endBlockHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderAllocatedMarginRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderAllocatedMarginRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.endBlockHeight = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryOrderAllocatedMarginRequest {
    return { endBlockHeight: isSet(object.endBlockHeight) ? String(object.endBlockHeight) : "" };
  },

  toJSON(message: QueryOrderAllocatedMarginRequest): unknown {
    const obj: any = {};
    message.endBlockHeight !== undefined && (obj.endBlockHeight = message.endBlockHeight);
    return obj;
  },

  create(base?: DeepPartial<QueryOrderAllocatedMarginRequest>): QueryOrderAllocatedMarginRequest {
    return QueryOrderAllocatedMarginRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryOrderAllocatedMarginRequest>): QueryOrderAllocatedMarginRequest {
    const message = createBaseQueryOrderAllocatedMarginRequest();
    message.endBlockHeight = object.endBlockHeight ?? "";
    return message;
  },
};

function createBaseQueryOrderAllocatedMarginResponse(): QueryOrderAllocatedMarginResponse {
  return { orders: [] };
}

export const QueryOrderAllocatedMarginResponse = {
  encode(message: QueryOrderAllocatedMarginResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orders) {
      DBOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderAllocatedMarginResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderAllocatedMarginResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.orders.push(DBOrder.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryOrderAllocatedMarginResponse {
    return { orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => DBOrder.fromJSON(e)) : [] };
  },

  toJSON(message: QueryOrderAllocatedMarginResponse): unknown {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map((e) => e ? DBOrder.toJSON(e) : undefined);
    } else {
      obj.orders = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryOrderAllocatedMarginResponse>): QueryOrderAllocatedMarginResponse {
    return QueryOrderAllocatedMarginResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryOrderAllocatedMarginResponse>): QueryOrderAllocatedMarginResponse {
    const message = createBaseQueryOrderAllocatedMarginResponse();
    message.orders = object.orders?.map((e) => DBOrder.fromPartial(e)) || [];
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Get details for an order */
  Order(request: QueryGetOrderRequest): Promise<QueryGetOrderResponse>;
  /** Get details for all orders */
  OrderAll(request: QueryAllOrderRequest): Promise<QueryAllOrderResponse>;
  /** Get orders for an address and market */
  AccountOrders(request: QueryAccountOrdersRequest): Promise<QueryAccountOrdersResponse>;
  /**
   * TODO: remove this once frontend has replaced it with query OrdersAccount
   * Get open orders for an address and market
   */
  OrdersAccountOpen(request: QueryAccountOpenOrdersRequest): Promise<QueryAccountOpenOrdersResponse>;
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Get all orders with allocated margin (open orders) */
  OrderAllocatedMargin(request: QueryOrderAllocatedMarginRequest): Promise<QueryOrderAllocatedMarginResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.order.Query";
    this.rpc = rpc;
    this.Order = this.Order.bind(this);
    this.OrderAll = this.OrderAll.bind(this);
    this.AccountOrders = this.AccountOrders.bind(this);
    this.OrdersAccountOpen = this.OrdersAccountOpen.bind(this);
    this.Params = this.Params.bind(this);
    this.OrderAllocatedMargin = this.OrderAllocatedMargin.bind(this);
  }
  Order(request: QueryGetOrderRequest): Promise<QueryGetOrderResponse> {
    const data = QueryGetOrderRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Order", data);
    return promise.then((data) => QueryGetOrderResponse.decode(_m0.Reader.create(data)));
  }

  OrderAll(request: QueryAllOrderRequest): Promise<QueryAllOrderResponse> {
    const data = QueryAllOrderRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "OrderAll", data);
    return promise.then((data) => QueryAllOrderResponse.decode(_m0.Reader.create(data)));
  }

  AccountOrders(request: QueryAccountOrdersRequest): Promise<QueryAccountOrdersResponse> {
    const data = QueryAccountOrdersRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AccountOrders", data);
    return promise.then((data) => QueryAccountOrdersResponse.decode(_m0.Reader.create(data)));
  }

  OrdersAccountOpen(request: QueryAccountOpenOrdersRequest): Promise<QueryAccountOpenOrdersResponse> {
    const data = QueryAccountOpenOrdersRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "OrdersAccountOpen", data);
    return promise.then((data) => QueryAccountOpenOrdersResponse.decode(_m0.Reader.create(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  OrderAllocatedMargin(request: QueryOrderAllocatedMarginRequest): Promise<QueryOrderAllocatedMarginResponse> {
    const data = QueryOrderAllocatedMarginRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "OrderAllocatedMargin", data);
    return promise.then((data) => QueryOrderAllocatedMarginResponse.decode(_m0.Reader.create(data)));
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
