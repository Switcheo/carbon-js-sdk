/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Candlestick } from "../broker/candlestick";
import { TradeEvent } from "../broker/event";

export const protobufPackage = "Switcheo.carbon.broker";

export interface QueryInsuranceBalanceRequest {}

export interface QueryInsuranceBalanceResponse {
  insuranceFundBalances: InsuranceFundBalance[];
}

export interface InsuranceFundBalance {
  amount: string;
  denom: string;
}

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
}

const baseQueryInsuranceBalanceRequest: object = {};

export const QueryInsuranceBalanceRequest = {
  encode(
    _: QueryInsuranceBalanceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryInsuranceBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryInsuranceBalanceRequest,
    } as QueryInsuranceBalanceRequest;
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

  fromJSON(_: any): QueryInsuranceBalanceRequest {
    const message = {
      ...baseQueryInsuranceBalanceRequest,
    } as QueryInsuranceBalanceRequest;
    return message;
  },

  toJSON(_: QueryInsuranceBalanceRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryInsuranceBalanceRequest>
  ): QueryInsuranceBalanceRequest {
    const message = {
      ...baseQueryInsuranceBalanceRequest,
    } as QueryInsuranceBalanceRequest;
    return message;
  },
};

const baseQueryInsuranceBalanceResponse: object = {};

export const QueryInsuranceBalanceResponse = {
  encode(
    message: QueryInsuranceBalanceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.insuranceFundBalances) {
      InsuranceFundBalance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryInsuranceBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryInsuranceBalanceResponse,
    } as QueryInsuranceBalanceResponse;
    message.insuranceFundBalances = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.insuranceFundBalances.push(
            InsuranceFundBalance.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryInsuranceBalanceResponse {
    const message = {
      ...baseQueryInsuranceBalanceResponse,
    } as QueryInsuranceBalanceResponse;
    message.insuranceFundBalances = [];
    if (
      object.insuranceFundBalances !== undefined &&
      object.insuranceFundBalances !== null
    ) {
      for (const e of object.insuranceFundBalances) {
        message.insuranceFundBalances.push(InsuranceFundBalance.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryInsuranceBalanceResponse): unknown {
    const obj: any = {};
    if (message.insuranceFundBalances) {
      obj.insuranceFundBalances = message.insuranceFundBalances.map((e) =>
        e ? InsuranceFundBalance.toJSON(e) : undefined
      );
    } else {
      obj.insuranceFundBalances = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryInsuranceBalanceResponse>
  ): QueryInsuranceBalanceResponse {
    const message = {
      ...baseQueryInsuranceBalanceResponse,
    } as QueryInsuranceBalanceResponse;
    message.insuranceFundBalances = [];
    if (
      object.insuranceFundBalances !== undefined &&
      object.insuranceFundBalances !== null
    ) {
      for (const e of object.insuranceFundBalances) {
        message.insuranceFundBalances.push(InsuranceFundBalance.fromPartial(e));
      }
    }
    return message;
  },
};

const baseInsuranceFundBalance: object = { amount: "", denom: "" };

export const InsuranceFundBalance = {
  encode(
    message: InsuranceFundBalance,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InsuranceFundBalance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInsuranceFundBalance } as InsuranceFundBalance;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InsuranceFundBalance {
    const message = { ...baseInsuranceFundBalance } as InsuranceFundBalance;
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
  },

  toJSON(message: InsuranceFundBalance): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<InsuranceFundBalance>): InsuranceFundBalance {
    const message = { ...baseInsuranceFundBalance } as InsuranceFundBalance;
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

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
    if (object.market !== undefined && object.market !== null) {
      message.market = String(object.market);
    } else {
      message.market = "";
    }
    if (object.resolution !== undefined && object.resolution !== null) {
      message.resolution = Long.fromString(object.resolution);
    } else {
      message.resolution = Long.UZERO;
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = Long.fromString(object.from);
    } else {
      message.from = Long.UZERO;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = Long.fromString(object.to);
    } else {
      message.to = Long.UZERO;
    }
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
    if (object.resolution !== undefined && object.resolution !== null) {
      message.resolution = object.resolution as Long;
    } else {
      message.resolution = Long.UZERO;
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from as Long;
    } else {
      message.from = Long.UZERO;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to as Long;
    } else {
      message.to = Long.UZERO;
    }
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
    message.candlesticks = [];
    if (object.candlesticks !== undefined && object.candlesticks !== null) {
      for (const e of object.candlesticks) {
        message.candlesticks.push(Candlestick.fromJSON(e));
      }
    }
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
    message.candlesticks = [];
    if (object.candlesticks !== undefined && object.candlesticks !== null) {
      for (const e of object.candlesticks) {
        message.candlesticks.push(Candlestick.fromPartial(e));
      }
    }
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
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.market !== undefined && object.market !== null) {
      message.market = String(object.market);
    } else {
      message.market = "";
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = Long.fromString(object.limit);
    } else {
      message.limit = Long.UZERO;
    }
    if (object.beforeId !== undefined && object.beforeId !== null) {
      message.beforeId = Long.fromString(object.beforeId);
    } else {
      message.beforeId = Long.UZERO;
    }
    if (object.afterId !== undefined && object.afterId !== null) {
      message.afterId = Long.fromString(object.afterId);
    } else {
      message.afterId = Long.UZERO;
    }
    if (object.orderBy !== undefined && object.orderBy !== null) {
      message.orderBy = String(object.orderBy);
    } else {
      message.orderBy = "";
    }
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = String(object.orderId);
    } else {
      message.orderId = "";
    }
    if (object.afterBlock !== undefined && object.afterBlock !== null) {
      message.afterBlock = Long.fromString(object.afterBlock);
    } else {
      message.afterBlock = Long.UZERO;
    }
    if (object.beforeBlock !== undefined && object.beforeBlock !== null) {
      message.beforeBlock = Long.fromString(object.beforeBlock);
    } else {
      message.beforeBlock = Long.UZERO;
    }
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
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = object.limit as Long;
    } else {
      message.limit = Long.UZERO;
    }
    if (object.beforeId !== undefined && object.beforeId !== null) {
      message.beforeId = object.beforeId as Long;
    } else {
      message.beforeId = Long.UZERO;
    }
    if (object.afterId !== undefined && object.afterId !== null) {
      message.afterId = object.afterId as Long;
    } else {
      message.afterId = Long.UZERO;
    }
    message.orderBy = object.orderBy ?? "";
    message.orderId = object.orderId ?? "";
    if (object.afterBlock !== undefined && object.afterBlock !== null) {
      message.afterBlock = object.afterBlock as Long;
    } else {
      message.afterBlock = Long.UZERO;
    }
    if (object.beforeBlock !== undefined && object.beforeBlock !== null) {
      message.beforeBlock = object.beforeBlock as Long;
    } else {
      message.beforeBlock = Long.UZERO;
    }
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTradesResponse {
    const message = { ...baseQueryTradesResponse } as QueryTradesResponse;
    message.trades = [];
    if (object.trades !== undefined && object.trades !== null) {
      for (const e of object.trades) {
        message.trades.push(TradeEvent.fromJSON(e));
      }
    }
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
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTradesResponse>): QueryTradesResponse {
    const message = { ...baseQueryTradesResponse } as QueryTradesResponse;
    message.trades = [];
    if (object.trades !== undefined && object.trades !== null) {
      for (const e of object.trades) {
        message.trades.push(TradeEvent.fromPartial(e));
      }
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  InsuranceBalance(
    request: QueryInsuranceBalanceRequest
  ): Promise<QueryInsuranceBalanceResponse>;
  Candlesticks(
    request: QueryCandlesticksRequest
  ): Promise<QueryCandlesticksResponse>;
  Trades(request: QueryTradesRequest): Promise<QueryTradesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.InsuranceBalance = this.InsuranceBalance.bind(this);
    this.Candlesticks = this.Candlesticks.bind(this);
    this.Trades = this.Trades.bind(this);
  }
  InsuranceBalance(
    request: QueryInsuranceBalanceRequest
  ): Promise<QueryInsuranceBalanceResponse> {
    const data = QueryInsuranceBalanceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.broker.Query",
      "InsuranceBalance",
      data
    );
    return promise.then((data) =>
      QueryInsuranceBalanceResponse.decode(new _m0.Reader(data))
    );
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
