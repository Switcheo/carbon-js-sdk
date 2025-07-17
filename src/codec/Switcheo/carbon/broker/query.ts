/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Candlestick } from "./candlestick";
import { TradeEvent } from "./event";
import { MinMaxBoundary } from "./pagination";

export const protobufPackage = "Switcheo.carbon.broker";

export interface QueryCandlesticksRequest {
  marketId: string;
  resolution: Long;
  from: Long;
  to: Long;
}

export interface QueryCandlesticksResponse {
  candlesticks: Candlestick[];
}

export interface QueryTradesRequest {
  address: string;
  marketId: string;
  beforeId: Long;
  afterId: Long;
  orderId: string;
  afterBlock: Long;
  beforeBlock: Long;
  pagination?: PageRequest;
}

export interface QueryTradesResponse {
  trades: TradeEvent[];
  minMaxBoundary?: MinMaxBoundary;
  pagination?: PageResponse;
}

export interface QueryTradesForPositionRequest {
  address: string;
  marketId: string;
  openedBlockHeight: Long;
  pagination?: PageRequest;
}

export interface QueryTradesForPositionResponse {
  trades: TradeEvent[];
  pagination?: PageResponse;
}

function createBaseQueryCandlesticksRequest(): QueryCandlesticksRequest {
  return { marketId: "", resolution: Long.UZERO, from: Long.UZERO, to: Long.UZERO };
}

export const QueryCandlesticksRequest = {
  encode(message: QueryCandlesticksRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCandlesticksRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCandlesticksRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.marketId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.resolution = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.from = reader.uint64() as Long;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.to = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCandlesticksRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      resolution: isSet(object.resolution) ? Long.fromValue(object.resolution) : Long.UZERO,
      from: isSet(object.from) ? Long.fromValue(object.from) : Long.UZERO,
      to: isSet(object.to) ? Long.fromValue(object.to) : Long.UZERO,
    };
  },

  toJSON(message: QueryCandlesticksRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.resolution !== undefined && (obj.resolution = (message.resolution || Long.UZERO).toString());
    message.from !== undefined && (obj.from = (message.from || Long.UZERO).toString());
    message.to !== undefined && (obj.to = (message.to || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<QueryCandlesticksRequest>): QueryCandlesticksRequest {
    return QueryCandlesticksRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryCandlesticksRequest>): QueryCandlesticksRequest {
    const message = createBaseQueryCandlesticksRequest();
    message.marketId = object.marketId ?? "";
    message.resolution = (object.resolution !== undefined && object.resolution !== null)
      ? Long.fromValue(object.resolution)
      : Long.UZERO;
    message.from = (object.from !== undefined && object.from !== null) ? Long.fromValue(object.from) : Long.UZERO;
    message.to = (object.to !== undefined && object.to !== null) ? Long.fromValue(object.to) : Long.UZERO;
    return message;
  },
};

function createBaseQueryCandlesticksResponse(): QueryCandlesticksResponse {
  return { candlesticks: [] };
}

export const QueryCandlesticksResponse = {
  encode(message: QueryCandlesticksResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.candlesticks) {
      Candlestick.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCandlesticksResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCandlesticksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.candlesticks.push(Candlestick.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCandlesticksResponse {
    return {
      candlesticks: Array.isArray(object?.candlesticks)
        ? object.candlesticks.map((e: any) => Candlestick.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryCandlesticksResponse): unknown {
    const obj: any = {};
    if (message.candlesticks) {
      obj.candlesticks = message.candlesticks.map((e) => e ? Candlestick.toJSON(e) : undefined);
    } else {
      obj.candlesticks = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryCandlesticksResponse>): QueryCandlesticksResponse {
    return QueryCandlesticksResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryCandlesticksResponse>): QueryCandlesticksResponse {
    const message = createBaseQueryCandlesticksResponse();
    message.candlesticks = object.candlesticks?.map((e) => Candlestick.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryTradesRequest(): QueryTradesRequest {
  return {
    address: "",
    marketId: "",
    beforeId: Long.UZERO,
    afterId: Long.UZERO,
    orderId: "",
    afterBlock: Long.UZERO,
    beforeBlock: Long.UZERO,
    pagination: undefined,
  };
}

export const QueryTradesRequest = {
  encode(message: QueryTradesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (!message.beforeId.isZero()) {
      writer.uint32(24).uint64(message.beforeId);
    }
    if (!message.afterId.isZero()) {
      writer.uint32(32).uint64(message.afterId);
    }
    if (message.orderId !== "") {
      writer.uint32(42).string(message.orderId);
    }
    if (!message.afterBlock.isZero()) {
      writer.uint32(48).uint64(message.afterBlock);
    }
    if (!message.beforeBlock.isZero()) {
      writer.uint32(56).uint64(message.beforeBlock);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTradesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTradesRequest();
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
          if (tag !== 24) {
            break;
          }

          message.beforeId = reader.uint64() as Long;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.afterId = reader.uint64() as Long;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.orderId = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.afterBlock = reader.uint64() as Long;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.beforeBlock = reader.uint64() as Long;
          continue;
        case 8:
          if (tag !== 66) {
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

  fromJSON(object: any): QueryTradesRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      beforeId: isSet(object.beforeId) ? Long.fromValue(object.beforeId) : Long.UZERO,
      afterId: isSet(object.afterId) ? Long.fromValue(object.afterId) : Long.UZERO,
      orderId: isSet(object.orderId) ? String(object.orderId) : "",
      afterBlock: isSet(object.afterBlock) ? Long.fromValue(object.afterBlock) : Long.UZERO,
      beforeBlock: isSet(object.beforeBlock) ? Long.fromValue(object.beforeBlock) : Long.UZERO,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryTradesRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.beforeId !== undefined && (obj.beforeId = (message.beforeId || Long.UZERO).toString());
    message.afterId !== undefined && (obj.afterId = (message.afterId || Long.UZERO).toString());
    message.orderId !== undefined && (obj.orderId = message.orderId);
    message.afterBlock !== undefined && (obj.afterBlock = (message.afterBlock || Long.UZERO).toString());
    message.beforeBlock !== undefined && (obj.beforeBlock = (message.beforeBlock || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryTradesRequest>): QueryTradesRequest {
    return QueryTradesRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryTradesRequest>): QueryTradesRequest {
    const message = createBaseQueryTradesRequest();
    message.address = object.address ?? "";
    message.marketId = object.marketId ?? "";
    message.beforeId = (object.beforeId !== undefined && object.beforeId !== null)
      ? Long.fromValue(object.beforeId)
      : Long.UZERO;
    message.afterId = (object.afterId !== undefined && object.afterId !== null)
      ? Long.fromValue(object.afterId)
      : Long.UZERO;
    message.orderId = object.orderId ?? "";
    message.afterBlock = (object.afterBlock !== undefined && object.afterBlock !== null)
      ? Long.fromValue(object.afterBlock)
      : Long.UZERO;
    message.beforeBlock = (object.beforeBlock !== undefined && object.beforeBlock !== null)
      ? Long.fromValue(object.beforeBlock)
      : Long.UZERO;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryTradesResponse(): QueryTradesResponse {
  return { trades: [], minMaxBoundary: undefined, pagination: undefined };
}

export const QueryTradesResponse = {
  encode(message: QueryTradesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.trades) {
      TradeEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.minMaxBoundary !== undefined) {
      MinMaxBoundary.encode(message.minMaxBoundary, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTradesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTradesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.trades.push(TradeEvent.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.minMaxBoundary = MinMaxBoundary.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): QueryTradesResponse {
    return {
      trades: Array.isArray(object?.trades) ? object.trades.map((e: any) => TradeEvent.fromJSON(e)) : [],
      minMaxBoundary: isSet(object.minMaxBoundary) ? MinMaxBoundary.fromJSON(object.minMaxBoundary) : undefined,
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryTradesResponse): unknown {
    const obj: any = {};
    if (message.trades) {
      obj.trades = message.trades.map((e) => e ? TradeEvent.toJSON(e) : undefined);
    } else {
      obj.trades = [];
    }
    message.minMaxBoundary !== undefined &&
      (obj.minMaxBoundary = message.minMaxBoundary ? MinMaxBoundary.toJSON(message.minMaxBoundary) : undefined);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryTradesResponse>): QueryTradesResponse {
    return QueryTradesResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryTradesResponse>): QueryTradesResponse {
    const message = createBaseQueryTradesResponse();
    message.trades = object.trades?.map((e) => TradeEvent.fromPartial(e)) || [];
    message.minMaxBoundary = (object.minMaxBoundary !== undefined && object.minMaxBoundary !== null)
      ? MinMaxBoundary.fromPartial(object.minMaxBoundary)
      : undefined;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryTradesForPositionRequest(): QueryTradesForPositionRequest {
  return { address: "", marketId: "", openedBlockHeight: Long.UZERO, pagination: undefined };
}

export const QueryTradesForPositionRequest = {
  encode(message: QueryTradesForPositionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (!message.openedBlockHeight.isZero()) {
      writer.uint32(24).uint64(message.openedBlockHeight);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTradesForPositionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTradesForPositionRequest();
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
          if (tag !== 24) {
            break;
          }

          message.openedBlockHeight = reader.uint64() as Long;
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

  fromJSON(object: any): QueryTradesForPositionRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      openedBlockHeight: isSet(object.openedBlockHeight) ? Long.fromValue(object.openedBlockHeight) : Long.UZERO,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryTradesForPositionRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.openedBlockHeight !== undefined &&
      (obj.openedBlockHeight = (message.openedBlockHeight || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryTradesForPositionRequest>): QueryTradesForPositionRequest {
    return QueryTradesForPositionRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryTradesForPositionRequest>): QueryTradesForPositionRequest {
    const message = createBaseQueryTradesForPositionRequest();
    message.address = object.address ?? "";
    message.marketId = object.marketId ?? "";
    message.openedBlockHeight = (object.openedBlockHeight !== undefined && object.openedBlockHeight !== null)
      ? Long.fromValue(object.openedBlockHeight)
      : Long.UZERO;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryTradesForPositionResponse(): QueryTradesForPositionResponse {
  return { trades: [], pagination: undefined };
}

export const QueryTradesForPositionResponse = {
  encode(message: QueryTradesForPositionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.trades) {
      TradeEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTradesForPositionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTradesForPositionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.trades.push(TradeEvent.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryTradesForPositionResponse {
    return {
      trades: Array.isArray(object?.trades) ? object.trades.map((e: any) => TradeEvent.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryTradesForPositionResponse): unknown {
    const obj: any = {};
    if (message.trades) {
      obj.trades = message.trades.map((e) => e ? TradeEvent.toJSON(e) : undefined);
    } else {
      obj.trades = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryTradesForPositionResponse>): QueryTradesForPositionResponse {
    return QueryTradesForPositionResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryTradesForPositionResponse>): QueryTradesForPositionResponse {
    const message = createBaseQueryTradesForPositionResponse();
    message.trades = object.trades?.map((e) => TradeEvent.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Get candlesticks for a market */
  Candlesticks(request: QueryCandlesticksRequest): Promise<QueryCandlesticksResponse>;
  /** Get trade history for a market */
  Trades(request: QueryTradesRequest): Promise<QueryTradesResponse>;
  /** Get trades for a position */
  TradesForPosition(request: QueryTradesForPositionRequest): Promise<QueryTradesForPositionResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.broker.Query";
    this.rpc = rpc;
    this.Candlesticks = this.Candlesticks.bind(this);
    this.Trades = this.Trades.bind(this);
    this.TradesForPosition = this.TradesForPosition.bind(this);
  }
  Candlesticks(request: QueryCandlesticksRequest): Promise<QueryCandlesticksResponse> {
    const data = QueryCandlesticksRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Candlesticks", data);
    return promise.then((data) => QueryCandlesticksResponse.decode(_m0.Reader.create(data)));
  }

  Trades(request: QueryTradesRequest): Promise<QueryTradesResponse> {
    const data = QueryTradesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Trades", data);
    return promise.then((data) => QueryTradesResponse.decode(_m0.Reader.create(data)));
  }

  TradesForPosition(request: QueryTradesForPositionRequest): Promise<QueryTradesForPositionResponse> {
    const data = QueryTradesForPositionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "TradesForPosition", data);
    return promise.then((data) => QueryTradesForPositionResponse.decode(_m0.Reader.create(data)));
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
