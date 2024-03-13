/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { MinMaxBoundary } from "./pagination";
import { Candlestick } from "./candlestick";
import { TradeEvent } from "./event";

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
  MinMaxBoundary?: MinMaxBoundary;
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

const baseQueryCandlesticksRequest: object = {
  marketId: "",
  resolution: Long.UZERO,
  from: Long.UZERO,
  to: Long.UZERO,
};

export const QueryCandlesticksRequest = {
  encode(
    message: QueryCandlesticksRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
          message.marketId = reader.string();
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
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
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
    message.marketId !== undefined && (obj.marketId = message.marketId);
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
    message.marketId = object.marketId ?? "";
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
  marketId: "",
  beforeId: Long.UZERO,
  afterId: Long.UZERO,
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
          message.marketId = reader.string();
          break;
        case 3:
          message.beforeId = reader.uint64() as Long;
          break;
        case 4:
          message.afterId = reader.uint64() as Long;
          break;
        case 5:
          message.orderId = reader.string();
          break;
        case 6:
          message.afterBlock = reader.uint64() as Long;
          break;
        case 7:
          message.beforeBlock = reader.uint64() as Long;
          break;
        case 8:
          message.pagination = PageRequest.decode(reader, reader.uint32());
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
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.beforeId =
      object.beforeId !== undefined && object.beforeId !== null
        ? Long.fromString(object.beforeId)
        : Long.UZERO;
    message.afterId =
      object.afterId !== undefined && object.afterId !== null
        ? Long.fromString(object.afterId)
        : Long.UZERO;
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
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryTradesRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.beforeId !== undefined &&
      (obj.beforeId = (message.beforeId || Long.UZERO).toString());
    message.afterId !== undefined &&
      (obj.afterId = (message.afterId || Long.UZERO).toString());
    message.orderId !== undefined && (obj.orderId = message.orderId);
    message.afterBlock !== undefined &&
      (obj.afterBlock = (message.afterBlock || Long.UZERO).toString());
    message.beforeBlock !== undefined &&
      (obj.beforeBlock = (message.beforeBlock || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTradesRequest>): QueryTradesRequest {
    const message = { ...baseQueryTradesRequest } as QueryTradesRequest;
    message.address = object.address ?? "";
    message.marketId = object.marketId ?? "";
    message.beforeId =
      object.beforeId !== undefined && object.beforeId !== null
        ? Long.fromValue(object.beforeId)
        : Long.UZERO;
    message.afterId =
      object.afterId !== undefined && object.afterId !== null
        ? Long.fromValue(object.afterId)
        : Long.UZERO;
    message.orderId = object.orderId ?? "";
    message.afterBlock =
      object.afterBlock !== undefined && object.afterBlock !== null
        ? Long.fromValue(object.afterBlock)
        : Long.UZERO;
    message.beforeBlock =
      object.beforeBlock !== undefined && object.beforeBlock !== null
        ? Long.fromValue(object.beforeBlock)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
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
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(26).fork()
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
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
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
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
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
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
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
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryTradesForPositionRequest: object = {
  address: "",
  marketId: "",
  openedBlockHeight: Long.UZERO,
};

export const QueryTradesForPositionRequest = {
  encode(
    message: QueryTradesForPositionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTradesForPositionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTradesForPositionRequest,
    } as QueryTradesForPositionRequest;
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
          message.openedBlockHeight = reader.uint64() as Long;
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

  fromJSON(object: any): QueryTradesForPositionRequest {
    const message = {
      ...baseQueryTradesForPositionRequest,
    } as QueryTradesForPositionRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.openedBlockHeight =
      object.openedBlockHeight !== undefined &&
      object.openedBlockHeight !== null
        ? Long.fromString(object.openedBlockHeight)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryTradesForPositionRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.openedBlockHeight !== undefined &&
      (obj.openedBlockHeight = (
        message.openedBlockHeight || Long.UZERO
      ).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTradesForPositionRequest>
  ): QueryTradesForPositionRequest {
    const message = {
      ...baseQueryTradesForPositionRequest,
    } as QueryTradesForPositionRequest;
    message.address = object.address ?? "";
    message.marketId = object.marketId ?? "";
    message.openedBlockHeight =
      object.openedBlockHeight !== undefined &&
      object.openedBlockHeight !== null
        ? Long.fromValue(object.openedBlockHeight)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryTradesForPositionResponse: object = {};

export const QueryTradesForPositionResponse = {
  encode(
    message: QueryTradesForPositionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.trades) {
      TradeEvent.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryTradesForPositionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTradesForPositionResponse,
    } as QueryTradesForPositionResponse;
    message.trades = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trades.push(TradeEvent.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryTradesForPositionResponse {
    const message = {
      ...baseQueryTradesForPositionResponse,
    } as QueryTradesForPositionResponse;
    message.trades = (object.trades ?? []).map((e: any) =>
      TradeEvent.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryTradesForPositionResponse): unknown {
    const obj: any = {};
    if (message.trades) {
      obj.trades = message.trades.map((e) =>
        e ? TradeEvent.toJSON(e) : undefined
      );
    } else {
      obj.trades = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTradesForPositionResponse>
  ): QueryTradesForPositionResponse {
    const message = {
      ...baseQueryTradesForPositionResponse,
    } as QueryTradesForPositionResponse;
    message.trades = (object.trades ?? []).map((e) =>
      TradeEvent.fromPartial(e)
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
  /** Get candlesticks for a market */
  Candlesticks(
    request: QueryCandlesticksRequest
  ): Promise<QueryCandlesticksResponse>;
  /** Get trade history for a market */
  Trades(request: QueryTradesRequest): Promise<QueryTradesResponse>;
  /** Get trades for a position */
  TradesForPosition(
    request: QueryTradesForPositionRequest
  ): Promise<QueryTradesForPositionResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Candlesticks = this.Candlesticks.bind(this);
    this.Trades = this.Trades.bind(this);
    this.TradesForPosition = this.TradesForPosition.bind(this);
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

  TradesForPosition(
    request: QueryTradesForPositionRequest
  ): Promise<QueryTradesForPositionResponse> {
    const data = QueryTradesForPositionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.broker.Query",
      "TradesForPosition",
      data
    );
    return promise.then((data) =>
      QueryTradesForPositionResponse.decode(new _m0.Reader(data))
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
