/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { MinMaxBoundary } from "../broker/pagination";
import { Candlestick } from "../broker/candlestick";
import { TradeEvent } from "../broker/event";

export const protobufPackage = "Switcheo.carbon.broker";

export interface QueryCandlesticksRequest {
  market: string;
  resolution: Long;
  from: Long;
  to: Long;
}

export interface QueryCandlesticksResponse {
  candlesticks: Candlestick[];
}

export interface QueryTradesRequest {
  address: string;
  market: string;
  limit: Long;
  beforeId: Long;
  afterId: Long;
  orderBy: string;
  orderId: string;
  afterBlock: Long;
  beforeBlock: Long;
}

export interface QueryTradesResponse {
  trades: TradeEvent[];
  MinMaxBoundary?: MinMaxBoundary;
}

const baseQueryCandlesticksRequest: object = {
  market: "",
  resolution: Long.UZERO,
  from: Long.UZERO,
  to: Long.UZERO,
};

export const QueryCandlesticksRequest = {
  encode(
    message: QueryCandlesticksRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.market !== "") {
      writer.uint32(10).string(message.market);
    }
    if (!message.resolution.isZero()) {
      writer.uint32(16).uint64(message.resolution);
    }
    if (!message.from.isZero()) {
      writer.uint32(24).uint64(message.from);
    }
    if (!message.to.isZero()) {
      writer.uint32(32).uint64(message.to);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCandlesticksRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCandlesticksRequest,
    } as QueryCandlesticksRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market = reader.string();
          break;
        case 2:
          message.resolution = reader.uint64() as Long;
          break;
        case 3:
          message.from = reader.uint64() as Long;
          break;
        case 4:
          message.to = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCandlesticksRequest {
    const message = {
      ...baseQueryCandlesticksRequest,
    } as QueryCandlesticksRequest;
    message.market =
      object.market !== undefined && object.market !== null
        ? String(object.market)
        : "";
    message.resolution =
      object.resolution !== undefined && object.resolution !== null
        ? Long.fromString(object.resolution)
        : Long.UZERO;
    message.from =
      object.from !== undefined && object.from !== null
        ? Long.fromString(object.from)
        : Long.UZERO;
    message.to =
      object.to !== undefined && object.to !== null
        ? Long.fromString(object.to)
        : Long.UZERO;
    return message;
  },

  toJSON(message: QueryCandlesticksRequest): unknown {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market);
    message.resolution !== undefined &&
      (obj.resolution = (message.resolution || Long.UZERO).toString());
    message.from !== undefined &&
      (obj.from = (message.from || Long.UZERO).toString());
    message.to !== undefined &&
      (obj.to = (message.to || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCandlesticksRequest>
  ): QueryCandlesticksRequest {
    const message = {
      ...baseQueryCandlesticksRequest,
    } as QueryCandlesticksRequest;
    message.market = object.market ?? "";
    message.resolution =
      object.resolution !== undefined && object.resolution !== null
        ? Long.fromValue(object.resolution)
        : Long.UZERO;
    message.from =
      object.from !== undefined && object.from !== null
        ? Long.fromValue(object.from)
        : Long.UZERO;
    message.to =
      object.to !== undefined && object.to !== null
        ? Long.fromValue(object.to)
        : Long.UZERO;
    return message;
  },
};

const baseQueryCandlesticksResponse: object = {};

export const QueryCandlesticksResponse = {
  encode(
    message: QueryCandlesticksResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.candlesticks) {
      Candlestick.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCandlesticksResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCandlesticksResponse,
    } as QueryCandlesticksResponse;
    message.candlesticks = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.candlesticks.push(
            Candlestick.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCandlesticksResponse {
    const message = {
      ...baseQueryCandlesticksResponse,
    } as QueryCandlesticksResponse;
    message.candlesticks = (object.candlesticks ?? []).map((e: any) =>
      Candlestick.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryCandlesticksResponse): unknown {
    const obj: any = {};
    if (message.candlesticks) {
      obj.candlesticks = message.candlesticks.map((e) =>
        e ? Candlestick.toJSON(e) : undefined
      );
    } else {
      obj.candlesticks = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCandlesticksResponse>
  ): QueryCandlesticksResponse {
    const message = {
      ...baseQueryCandlesticksResponse,
    } as QueryCandlesticksResponse;
    message.candlesticks = (object.candlesticks ?? []).map((e) =>
      Candlestick.fromPartial(e)
    );
    return message;
  },
};

const baseQueryTradesRequest: object = {
  address: "",
  market: "",
  limit: Long.UZERO,
  beforeId: Long.UZERO,
  afterId: Long.UZERO,
  orderBy: "",
  orderId: "",
  afterBlock: Long.UZERO,
  beforeBlock: Long.UZERO,
};

export const QueryTradesRequest = {
  encode(
    message: QueryTradesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.market !== "") {
      writer.uint32(18).string(message.market);
    }
    if (!message.limit.isZero()) {
      writer.uint32(24).uint64(message.limit);
    }
    if (!message.beforeId.isZero()) {
      writer.uint32(32).uint64(message.beforeId);
    }
    if (!message.afterId.isZero()) {
      writer.uint32(40).uint64(message.afterId);
    }
    if (message.orderBy !== "") {
      writer.uint32(50).string(message.orderBy);
    }
    if (message.orderId !== "") {
      writer.uint32(58).string(message.orderId);
    }
    if (!message.afterBlock.isZero()) {
      writer.uint32(64).uint64(message.afterBlock);
    }
    if (!message.beforeBlock.isZero()) {
      writer.uint32(72).uint64(message.beforeBlock);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTradesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTradesRequest } as QueryTradesRequest;
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
          message.limit = reader.uint64() as Long;
          break;
        case 4:
          message.beforeId = reader.uint64() as Long;
          break;
        case 5:
          message.afterId = reader.uint64() as Long;
          break;
        case 6:
          message.orderBy = reader.string();
          break;
        case 7:
          message.orderId = reader.string();
          break;
        case 8:
          message.afterBlock = reader.uint64() as Long;
          break;
        case 9:
          message.beforeBlock = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTradesRequest {
    const message = { ...baseQueryTradesRequest } as QueryTradesRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.market =
      object.market !== undefined && object.market !== null
        ? String(object.market)
        : "";
    message.limit =
      object.limit !== undefined && object.limit !== null
        ? Long.fromString(object.limit)
        : Long.UZERO;
    message.beforeId =
      object.beforeId !== undefined && object.beforeId !== null
        ? Long.fromString(object.beforeId)
        : Long.UZERO;
    message.afterId =
      object.afterId !== undefined && object.afterId !== null
        ? Long.fromString(object.afterId)
        : Long.UZERO;
    message.orderBy =
      object.orderBy !== undefined && object.orderBy !== null
        ? String(object.orderBy)
        : "";
    message.orderId =
      object.orderId !== undefined && object.orderId !== null
        ? String(object.orderId)
        : "";
    message.afterBlock =
      object.afterBlock !== undefined && object.afterBlock !== null
        ? Long.fromString(object.afterBlock)
        : Long.UZERO;
    message.beforeBlock =
      object.beforeBlock !== undefined && object.beforeBlock !== null
        ? Long.fromString(object.beforeBlock)
        : Long.UZERO;
    return message;
  },

  toJSON(message: QueryTradesRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.market !== undefined && (obj.market = message.market);
    message.limit !== undefined &&
      (obj.limit = (message.limit || Long.UZERO).toString());
    message.beforeId !== undefined &&
      (obj.beforeId = (message.beforeId || Long.UZERO).toString());
    message.afterId !== undefined &&
      (obj.afterId = (message.afterId || Long.UZERO).toString());
    message.orderBy !== undefined && (obj.orderBy = message.orderBy);
    message.orderId !== undefined && (obj.orderId = message.orderId);
    message.afterBlock !== undefined &&
      (obj.afterBlock = (message.afterBlock || Long.UZERO).toString());
    message.beforeBlock !== undefined &&
      (obj.beforeBlock = (message.beforeBlock || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTradesRequest>): QueryTradesRequest {
    const message = { ...baseQueryTradesRequest } as QueryTradesRequest;
    message.address = object.address ?? "";
    message.market = object.market ?? "";
    message.limit =
      object.limit !== undefined && object.limit !== null
        ? Long.fromValue(object.limit)
        : Long.UZERO;
    message.beforeId =
      object.beforeId !== undefined && object.beforeId !== null
        ? Long.fromValue(object.beforeId)
        : Long.UZERO;
    message.afterId =
      object.afterId !== undefined && object.afterId !== null
        ? Long.fromValue(object.afterId)
        : Long.UZERO;
    message.orderBy = object.orderBy ?? "";
    message.orderId = object.orderId ?? "";
    message.afterBlock =
      object.afterBlock !== undefined && object.afterBlock !== null
        ? Long.fromValue(object.afterBlock)
        : Long.UZERO;
    message.beforeBlock =
      object.beforeBlock !== undefined && object.beforeBlock !== null
        ? Long.fromValue(object.beforeBlock)
        : Long.UZERO;
    return message;
  },
};

const baseQueryTradesResponse: object = {};

export const QueryTradesResponse = {
  encode(
    message: QueryTradesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.trades) {
      TradeEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.MinMaxBoundary !== undefined) {
      MinMaxBoundary.encode(
        message.MinMaxBoundary,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTradesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTradesResponse } as QueryTradesResponse;
    message.trades = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trades.push(TradeEvent.decode(reader, reader.uint32()));
          break;
        case 2:
          message.MinMaxBoundary = MinMaxBoundary.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTradesResponse {
    const message = { ...baseQueryTradesResponse } as QueryTradesResponse;
    message.trades = (object.trades ?? []).map((e: any) =>
      TradeEvent.fromJSON(e)
    );
    message.MinMaxBoundary =
      object.MinMaxBoundary !== undefined && object.MinMaxBoundary !== null
        ? MinMaxBoundary.fromJSON(object.MinMaxBoundary)
        : undefined;
    return message;
  },

  toJSON(message: QueryTradesResponse): unknown {
    const obj: any = {};
    if (message.trades) {
      obj.trades = message.trades.map((e) =>
        e ? TradeEvent.toJSON(e) : undefined
      );
    } else {
      obj.trades = [];
    }
    message.MinMaxBoundary !== undefined &&
      (obj.MinMaxBoundary = message.MinMaxBoundary
        ? MinMaxBoundary.toJSON(message.MinMaxBoundary)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTradesResponse>): QueryTradesResponse {
    const message = { ...baseQueryTradesResponse } as QueryTradesResponse;
    message.trades = (object.trades ?? []).map((e) =>
      TradeEvent.fromPartial(e)
    );
    message.MinMaxBoundary =
      object.MinMaxBoundary !== undefined && object.MinMaxBoundary !== null
        ? MinMaxBoundary.fromPartial(object.MinMaxBoundary)
        : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  Candlesticks(
    request: QueryCandlesticksRequest
  ): Promise<QueryCandlesticksResponse>;
  Trades(request: QueryTradesRequest): Promise<QueryTradesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Candlesticks = this.Candlesticks.bind(this);
    this.Trades = this.Trades.bind(this);
  }
  Candlesticks(
    request: QueryCandlesticksRequest
  ): Promise<QueryCandlesticksResponse> {
    const data = QueryCandlesticksRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.broker.Query",
      "Candlesticks",
      data
    );
    return promise.then((data) =>
      QueryCandlesticksResponse.decode(new _m0.Reader(data))
    );
  }

  Trades(request: QueryTradesRequest): Promise<QueryTradesResponse> {
    const data = QueryTradesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.broker.Query",
      "Trades",
      data
    );
    return promise.then((data) =>
      QueryTradesResponse.decode(new _m0.Reader(data))
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
