/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { OutstandingPosition } from "../liquidation/outstanding_position";

export const protobufPackage = "Switcheo.carbon.adl";

export interface ApiAggregatedAdlBadDebt {
  market: string;
  amount: string;
}

export interface ApiAdlBadDebt {
  market: string;
  blockHeight: Long;
  amount: string;
  markPrice: string;
  buyExpiredOp?: OutstandingPosition;
  sellExpiredOp?: OutstandingPosition;
}

/** this line is used by starport scaffolding # 3 */
export interface AllAdlBadDebtRequest {
}

export interface AllAdlBadDebtResponse {
  aggregatedBadDebts: ApiAggregatedAdlBadDebt[];
}

export interface AdlBadDebtRequest {
  market: string;
}

export interface AdlBadDebtResponse {
  badDebts: ApiAdlBadDebt[];
}

function createBaseApiAggregatedAdlBadDebt(): ApiAggregatedAdlBadDebt {
  return { market: "", amount: "" };
}

export const ApiAggregatedAdlBadDebt = {
  encode(message: ApiAggregatedAdlBadDebt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.market !== "") {
      writer.uint32(10).string(message.market);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ApiAggregatedAdlBadDebt {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApiAggregatedAdlBadDebt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.market = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ApiAggregatedAdlBadDebt {
    return {
      market: isSet(object.market) ? String(object.market) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: ApiAggregatedAdlBadDebt): unknown {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  create(base?: DeepPartial<ApiAggregatedAdlBadDebt>): ApiAggregatedAdlBadDebt {
    return ApiAggregatedAdlBadDebt.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ApiAggregatedAdlBadDebt>): ApiAggregatedAdlBadDebt {
    const message = createBaseApiAggregatedAdlBadDebt();
    message.market = object.market ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseApiAdlBadDebt(): ApiAdlBadDebt {
  return {
    market: "",
    blockHeight: Long.UZERO,
    amount: "",
    markPrice: "",
    buyExpiredOp: undefined,
    sellExpiredOp: undefined,
  };
}

export const ApiAdlBadDebt = {
  encode(message: ApiAdlBadDebt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.market !== "") {
      writer.uint32(10).string(message.market);
    }
    if (!message.blockHeight.isZero()) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.markPrice !== "") {
      writer.uint32(34).string(message.markPrice);
    }
    if (message.buyExpiredOp !== undefined) {
      OutstandingPosition.encode(message.buyExpiredOp, writer.uint32(42).fork()).ldelim();
    }
    if (message.sellExpiredOp !== undefined) {
      OutstandingPosition.encode(message.sellExpiredOp, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ApiAdlBadDebt {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApiAdlBadDebt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.market = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.blockHeight = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.markPrice = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.buyExpiredOp = OutstandingPosition.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.sellExpiredOp = OutstandingPosition.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ApiAdlBadDebt {
    return {
      market: isSet(object.market) ? String(object.market) : "",
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.UZERO,
      amount: isSet(object.amount) ? String(object.amount) : "",
      markPrice: isSet(object.markPrice) ? String(object.markPrice) : "",
      buyExpiredOp: isSet(object.buyExpiredOp) ? OutstandingPosition.fromJSON(object.buyExpiredOp) : undefined,
      sellExpiredOp: isSet(object.sellExpiredOp) ? OutstandingPosition.fromJSON(object.sellExpiredOp) : undefined,
    };
  },

  toJSON(message: ApiAdlBadDebt): unknown {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market);
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.UZERO).toString());
    message.amount !== undefined && (obj.amount = message.amount);
    message.markPrice !== undefined && (obj.markPrice = message.markPrice);
    message.buyExpiredOp !== undefined &&
      (obj.buyExpiredOp = message.buyExpiredOp ? OutstandingPosition.toJSON(message.buyExpiredOp) : undefined);
    message.sellExpiredOp !== undefined &&
      (obj.sellExpiredOp = message.sellExpiredOp ? OutstandingPosition.toJSON(message.sellExpiredOp) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ApiAdlBadDebt>): ApiAdlBadDebt {
    return ApiAdlBadDebt.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ApiAdlBadDebt>): ApiAdlBadDebt {
    const message = createBaseApiAdlBadDebt();
    message.market = object.market ?? "";
    message.blockHeight = (object.blockHeight !== undefined && object.blockHeight !== null)
      ? Long.fromValue(object.blockHeight)
      : Long.UZERO;
    message.amount = object.amount ?? "";
    message.markPrice = object.markPrice ?? "";
    message.buyExpiredOp = (object.buyExpiredOp !== undefined && object.buyExpiredOp !== null)
      ? OutstandingPosition.fromPartial(object.buyExpiredOp)
      : undefined;
    message.sellExpiredOp = (object.sellExpiredOp !== undefined && object.sellExpiredOp !== null)
      ? OutstandingPosition.fromPartial(object.sellExpiredOp)
      : undefined;
    return message;
  },
};

function createBaseAllAdlBadDebtRequest(): AllAdlBadDebtRequest {
  return {};
}

export const AllAdlBadDebtRequest = {
  encode(_: AllAdlBadDebtRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllAdlBadDebtRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllAdlBadDebtRequest();
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

  fromJSON(_: any): AllAdlBadDebtRequest {
    return {};
  },

  toJSON(_: AllAdlBadDebtRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<AllAdlBadDebtRequest>): AllAdlBadDebtRequest {
    return AllAdlBadDebtRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<AllAdlBadDebtRequest>): AllAdlBadDebtRequest {
    const message = createBaseAllAdlBadDebtRequest();
    return message;
  },
};

function createBaseAllAdlBadDebtResponse(): AllAdlBadDebtResponse {
  return { aggregatedBadDebts: [] };
}

export const AllAdlBadDebtResponse = {
  encode(message: AllAdlBadDebtResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.aggregatedBadDebts) {
      ApiAggregatedAdlBadDebt.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllAdlBadDebtResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllAdlBadDebtResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.aggregatedBadDebts.push(ApiAggregatedAdlBadDebt.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AllAdlBadDebtResponse {
    return {
      aggregatedBadDebts: Array.isArray(object?.aggregatedBadDebts)
        ? object.aggregatedBadDebts.map((e: any) => ApiAggregatedAdlBadDebt.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AllAdlBadDebtResponse): unknown {
    const obj: any = {};
    if (message.aggregatedBadDebts) {
      obj.aggregatedBadDebts = message.aggregatedBadDebts.map((e) => e ? ApiAggregatedAdlBadDebt.toJSON(e) : undefined);
    } else {
      obj.aggregatedBadDebts = [];
    }
    return obj;
  },

  create(base?: DeepPartial<AllAdlBadDebtResponse>): AllAdlBadDebtResponse {
    return AllAdlBadDebtResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AllAdlBadDebtResponse>): AllAdlBadDebtResponse {
    const message = createBaseAllAdlBadDebtResponse();
    message.aggregatedBadDebts = object.aggregatedBadDebts?.map((e) => ApiAggregatedAdlBadDebt.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAdlBadDebtRequest(): AdlBadDebtRequest {
  return { market: "" };
}

export const AdlBadDebtRequest = {
  encode(message: AdlBadDebtRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.market !== "") {
      writer.uint32(10).string(message.market);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AdlBadDebtRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdlBadDebtRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.market = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AdlBadDebtRequest {
    return { market: isSet(object.market) ? String(object.market) : "" };
  },

  toJSON(message: AdlBadDebtRequest): unknown {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market);
    return obj;
  },

  create(base?: DeepPartial<AdlBadDebtRequest>): AdlBadDebtRequest {
    return AdlBadDebtRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AdlBadDebtRequest>): AdlBadDebtRequest {
    const message = createBaseAdlBadDebtRequest();
    message.market = object.market ?? "";
    return message;
  },
};

function createBaseAdlBadDebtResponse(): AdlBadDebtResponse {
  return { badDebts: [] };
}

export const AdlBadDebtResponse = {
  encode(message: AdlBadDebtResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.badDebts) {
      ApiAdlBadDebt.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AdlBadDebtResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdlBadDebtResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.badDebts.push(ApiAdlBadDebt.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AdlBadDebtResponse {
    return {
      badDebts: Array.isArray(object?.badDebts) ? object.badDebts.map((e: any) => ApiAdlBadDebt.fromJSON(e)) : [],
    };
  },

  toJSON(message: AdlBadDebtResponse): unknown {
    const obj: any = {};
    if (message.badDebts) {
      obj.badDebts = message.badDebts.map((e) => e ? ApiAdlBadDebt.toJSON(e) : undefined);
    } else {
      obj.badDebts = [];
    }
    return obj;
  },

  create(base?: DeepPartial<AdlBadDebtResponse>): AdlBadDebtResponse {
    return AdlBadDebtResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AdlBadDebtResponse>): AdlBadDebtResponse {
    const message = createBaseAdlBadDebtResponse();
    message.badDebts = object.badDebts?.map((e) => ApiAdlBadDebt.fromPartial(e)) || [];
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  AllAdlBadDebt(request: AllAdlBadDebtRequest): Promise<AllAdlBadDebtResponse>;
  AdlBadDebt(request: AdlBadDebtRequest): Promise<AdlBadDebtResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.adl.Query";
    this.rpc = rpc;
    this.AllAdlBadDebt = this.AllAdlBadDebt.bind(this);
    this.AdlBadDebt = this.AdlBadDebt.bind(this);
  }
  AllAdlBadDebt(request: AllAdlBadDebtRequest): Promise<AllAdlBadDebtResponse> {
    const data = AllAdlBadDebtRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllAdlBadDebt", data);
    return promise.then((data) => AllAdlBadDebtResponse.decode(_m0.Reader.create(data)));
  }

  AdlBadDebt(request: AdlBadDebtRequest): Promise<AdlBadDebtResponse> {
    const data = AdlBadDebtRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AdlBadDebt", data);
    return promise.then((data) => AdlBadDebtResponse.decode(_m0.Reader.create(data)));
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
