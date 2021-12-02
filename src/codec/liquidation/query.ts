/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { AccountTradeHistoryRow } from "../liquidation/history";

export const protobufPackage = "Switcheo.carbon.liquidation";

/** this line is used by starport scaffolding # 3 */
export interface QueryAllLiquidationRequest {
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

export interface QueryAllLiquidationResponse {
  accountTradeHistoryRows: AccountTradeHistoryRow[];
}

const baseQueryAllLiquidationRequest: object = {
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

export const QueryAllLiquidationRequest = {
  encode(
    message: QueryAllLiquidationRequest,
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

  fromJSON(object: any): QueryAllLiquidationRequest {
    const message = {
      ...baseQueryAllLiquidationRequest,
    } as QueryAllLiquidationRequest;
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

  toJSON(message: QueryAllLiquidationRequest): unknown {
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

  fromPartial<I extends Exact<DeepPartial<QueryAllLiquidationRequest>, I>>(
    object: I
  ): QueryAllLiquidationRequest {
    const message = {
      ...baseQueryAllLiquidationRequest,
    } as QueryAllLiquidationRequest;
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

const baseQueryAllLiquidationResponse: object = {};

export const QueryAllLiquidationResponse = {
  encode(
    message: QueryAllLiquidationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.accountTradeHistoryRows) {
      AccountTradeHistoryRow.encode(v!, writer.uint32(10).fork()).ldelim();
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
    message.accountTradeHistoryRows = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountTradeHistoryRows.push(
            AccountTradeHistoryRow.decode(reader, reader.uint32())
          );
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
    message.accountTradeHistoryRows = (
      object.accountTradeHistoryRows ?? []
    ).map((e: any) => AccountTradeHistoryRow.fromJSON(e));
    return message;
  },

  toJSON(message: QueryAllLiquidationResponse): unknown {
    const obj: any = {};
    if (message.accountTradeHistoryRows) {
      obj.accountTradeHistoryRows = message.accountTradeHistoryRows.map((e) =>
        e ? AccountTradeHistoryRow.toJSON(e) : undefined
      );
    } else {
      obj.accountTradeHistoryRows = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllLiquidationResponse>, I>>(
    object: I
  ): QueryAllLiquidationResponse {
    const message = {
      ...baseQueryAllLiquidationResponse,
    } as QueryAllLiquidationResponse;
    message.accountTradeHistoryRows =
      object.accountTradeHistoryRows?.map((e) =>
        AccountTradeHistoryRow.fromPartial(e)
      ) || [];
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
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

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
