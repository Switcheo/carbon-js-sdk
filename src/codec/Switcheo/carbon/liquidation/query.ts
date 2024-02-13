/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { AccountTrade } from "../misc/trade";

export const protobufPackage = "Switcheo.carbon.liquidation";

/** this line is used by starport scaffolding # 3 */
export interface QueryAllLiquidationRequest {
  address: string;
  marketId: string;
  beforeId: Long;
  afterId: Long;
  orderId: string;
  afterBlock: Long;
  beforeBlock: Long;
  pagination?: PageRequest;
}

export interface QueryAllLiquidationResponse {
  trades: AccountTrade[];
  pagination?: PageResponse;
}

const baseQueryAllLiquidationRequest: object = {
  address: "",
  marketId: "",
  beforeId: Long.UZERO,
  afterId: Long.UZERO,
  orderId: "",
  afterBlock: Long.UZERO,
  beforeBlock: Long.UZERO,
};

export const QueryAllLiquidationRequest = {
  encode(
    message: QueryAllLiquidationRequest,
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllLiquidationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllLiquidationRequest,
    } as QueryAllLiquidationRequest;
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

  fromJSON(object: any): QueryAllLiquidationRequest {
    const message = {
      ...baseQueryAllLiquidationRequest,
    } as QueryAllLiquidationRequest;
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

  toJSON(message: QueryAllLiquidationRequest): unknown {
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

  fromPartial(
    object: DeepPartial<QueryAllLiquidationRequest>
  ): QueryAllLiquidationRequest {
    const message = {
      ...baseQueryAllLiquidationRequest,
    } as QueryAllLiquidationRequest;
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

const baseQueryAllLiquidationResponse: object = {};

export const QueryAllLiquidationResponse = {
  encode(
    message: QueryAllLiquidationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.trades) {
      AccountTrade.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllLiquidationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllLiquidationResponse,
    } as QueryAllLiquidationResponse;
    message.trades = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trades.push(AccountTrade.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllLiquidationResponse {
    const message = {
      ...baseQueryAllLiquidationResponse,
    } as QueryAllLiquidationResponse;
    message.trades = (object.trades ?? []).map((e: any) =>
      AccountTrade.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllLiquidationResponse): unknown {
    const obj: any = {};
    if (message.trades) {
      obj.trades = message.trades.map((e) =>
        e ? AccountTrade.toJSON(e) : undefined
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
    object: DeepPartial<QueryAllLiquidationResponse>
  ): QueryAllLiquidationResponse {
    const message = {
      ...baseQueryAllLiquidationResponse,
    } as QueryAllLiquidationResponse;
    message.trades = (object.trades ?? []).map((e) =>
      AccountTrade.fromPartial(e)
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
  /** Get liquidation history */
  LiquidationAll(
    request: QueryAllLiquidationRequest
  ): Promise<QueryAllLiquidationResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.LiquidationAll = this.LiquidationAll.bind(this);
  }
  LiquidationAll(
    request: QueryAllLiquidationRequest
  ): Promise<QueryAllLiquidationResponse> {
    const data = QueryAllLiquidationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquidation.Query",
      "LiquidationAll",
      data
    );
    return promise.then((data) =>
      QueryAllLiquidationResponse.decode(new _m0.Reader(data))
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
