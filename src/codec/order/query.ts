/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { APIOrder, Order } from "../order/order";

export const protobufPackage = "Switcheo.carbon.order";

/** this line is used by starport scaffolding # 3 */
export interface QueryGetOrderRequest {
  id: string;
}

export interface QueryGetOrderResponse {
  Order?: APIOrder;
}

export interface QueryAllOrderRequest {
  address: string;
  market: string;
  orderType: string;
  orderStatus: string;
}

export interface QueryAllOrderResponse {
  orders: APIOrder[];
}

export interface QueryAccountOpenOrdersRequest {
  address: string;
  market: string;
}

export interface QueryAccountOpenOrdersResponse {
  orders: Order[];
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
    if (message.Order !== undefined) {
      APIOrder.encode(message.Order, writer.uint32(10).fork()).ldelim();
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
          message.Order = APIOrder.decode(reader, reader.uint32());
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
    message.Order =
      object.Order !== undefined && object.Order !== null
        ? APIOrder.fromJSON(object.Order)
        : undefined;
    return message;
  },

  toJSON(message: QueryGetOrderResponse): unknown {
    const obj: any = {};
    message.Order !== undefined &&
      (obj.Order = message.Order ? APIOrder.toJSON(message.Order) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetOrderResponse>
  ): QueryGetOrderResponse {
    const message = { ...baseQueryGetOrderResponse } as QueryGetOrderResponse;
    message.Order =
      object.Order !== undefined && object.Order !== null
        ? APIOrder.fromPartial(object.Order)
        : undefined;
    return message;
  },
};

const baseQueryAllOrderRequest: object = {
  address: "",
  market: "",
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
    if (message.market !== "") {
      writer.uint32(18).string(message.market);
    }
    if (message.orderType !== "") {
      writer.uint32(26).string(message.orderType);
    }
    if (message.orderStatus !== "") {
      writer.uint32(34).string(message.orderStatus);
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
          message.market = reader.string();
          break;
        case 3:
          message.orderType = reader.string();
          break;
        case 4:
          message.orderStatus = reader.string();
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
    message.market =
      object.market !== undefined && object.market !== null
        ? String(object.market)
        : "";
    message.orderType =
      object.orderType !== undefined && object.orderType !== null
        ? String(object.orderType)
        : "";
    message.orderStatus =
      object.orderStatus !== undefined && object.orderStatus !== null
        ? String(object.orderStatus)
        : "";
    return message;
  },

  toJSON(message: QueryAllOrderRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.market !== undefined && (obj.market = message.market);
    message.orderType !== undefined && (obj.orderType = message.orderType);
    message.orderStatus !== undefined &&
      (obj.orderStatus = message.orderStatus);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllOrderRequest>): QueryAllOrderRequest {
    const message = { ...baseQueryAllOrderRequest } as QueryAllOrderRequest;
    message.address = object.address ?? "";
    message.market = object.market ?? "";
    message.orderType = object.orderType ?? "";
    message.orderStatus = object.orderStatus ?? "";
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
      APIOrder.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.orders.push(APIOrder.decode(reader, reader.uint32()));
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
    message.orders = (object.orders ?? []).map((e: any) =>
      APIOrder.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryAllOrderResponse): unknown {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map((e) =>
        e ? APIOrder.toJSON(e) : undefined
      );
    } else {
      obj.orders = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllOrderResponse>
  ): QueryAllOrderResponse {
    const message = { ...baseQueryAllOrderResponse } as QueryAllOrderResponse;
    message.orders = (object.orders ?? []).map((e) => APIOrder.fromPartial(e));
    return message;
  },
};

const baseQueryAccountOpenOrdersRequest: object = { address: "", market: "" };

export const QueryAccountOpenOrdersRequest = {
  encode(
    message: QueryAccountOpenOrdersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.market !== "") {
      writer.uint32(18).string(message.market);
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
          message.market = reader.string();
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
    message.market =
      object.market !== undefined && object.market !== null
        ? String(object.market)
        : "";
    return message;
  },

  toJSON(message: QueryAccountOpenOrdersRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.market !== undefined && (obj.market = message.market);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAccountOpenOrdersRequest>
  ): QueryAccountOpenOrdersRequest {
    const message = {
      ...baseQueryAccountOpenOrdersRequest,
    } as QueryAccountOpenOrdersRequest;
    message.address = object.address ?? "";
    message.market = object.market ?? "";
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

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  Order(request: QueryGetOrderRequest): Promise<QueryGetOrderResponse>;
  OrderAll(request: QueryAllOrderRequest): Promise<QueryAllOrderResponse>;
  OrdersAccountOpen(
    request: QueryAccountOpenOrdersRequest
  ): Promise<QueryAccountOpenOrdersResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Order = this.Order.bind(this);
    this.OrderAll = this.OrderAll.bind(this);
    this.OrdersAccountOpen = this.OrdersAccountOpen.bind(this);
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
