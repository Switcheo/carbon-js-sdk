/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { MarketStats } from "./marketstats";

export const protobufPackage = "Switcheo.carbon.marketstats";

export interface QueryMarketStatsRequest {}

export interface QueryMarketStatsResponse {
  marketstats: MarketStats[];
}

const baseQueryMarketStatsRequest: object = {};

export const QueryMarketStatsRequest = {
  encode(
    _: QueryMarketStatsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryMarketStatsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryMarketStatsRequest,
    } as QueryMarketStatsRequest;
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

  fromJSON(_: any): QueryMarketStatsRequest {
    const message = {
      ...baseQueryMarketStatsRequest,
    } as QueryMarketStatsRequest;
    return message;
  },

  toJSON(_: QueryMarketStatsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryMarketStatsRequest>
  ): QueryMarketStatsRequest {
    const message = {
      ...baseQueryMarketStatsRequest,
    } as QueryMarketStatsRequest;
    return message;
  },
};

const baseQueryMarketStatsResponse: object = {};

export const QueryMarketStatsResponse = {
  encode(
    message: QueryMarketStatsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.marketstats) {
      MarketStats.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryMarketStatsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryMarketStatsResponse,
    } as QueryMarketStatsResponse;
    message.marketstats = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketstats.push(MarketStats.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMarketStatsResponse {
    const message = {
      ...baseQueryMarketStatsResponse,
    } as QueryMarketStatsResponse;
    message.marketstats = (object.marketstats ?? []).map((e: any) =>
      MarketStats.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryMarketStatsResponse): unknown {
    const obj: any = {};
    if (message.marketstats) {
      obj.marketstats = message.marketstats.map((e) =>
        e ? MarketStats.toJSON(e) : undefined
      );
    } else {
      obj.marketstats = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryMarketStatsResponse>
  ): QueryMarketStatsResponse {
    const message = {
      ...baseQueryMarketStatsResponse,
    } as QueryMarketStatsResponse;
    message.marketstats = (object.marketstats ?? []).map((e) =>
      MarketStats.fromPartial(e)
    );
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  MarketStats(
    request: QueryMarketStatsRequest
  ): Promise<QueryMarketStatsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.MarketStats = this.MarketStats.bind(this);
  }
  MarketStats(
    request: QueryMarketStatsRequest
  ): Promise<QueryMarketStatsResponse> {
    const data = QueryMarketStatsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.marketstats.Query",
      "MarketStats",
      data
    );
    return promise.then((data) =>
      QueryMarketStatsResponse.decode(new _m0.Reader(data))
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
