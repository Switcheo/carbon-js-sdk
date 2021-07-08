/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Candlestick } from "../broker/candlestick";

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
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
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
    if (object.market !== undefined && object.market !== null) {
      message.market = object.market;
    } else {
      message.market = "";
    }
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

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  InsuranceBalance(
    request: QueryInsuranceBalanceRequest
  ): Promise<QueryInsuranceBalanceResponse>;
  Candlesticks(
    request: QueryCandlesticksRequest
  ): Promise<QueryCandlesticksResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.InsuranceBalance = this.InsuranceBalance.bind(this);
    this.Candlesticks = this.Candlesticks.bind(this);
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
