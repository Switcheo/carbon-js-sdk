/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { PoolDetails } from "./pool";
import { MarketLiquidityUsageMultiplier } from "./market";

export const protobufPackage = "Switcheo.carbon.perpspool";

export interface QueryAllPoolMarketLiquidityUsageMultiplierRequest {
  pagination?: PageRequest;
}

export interface QueryAllPoolMarketLiquidityUsageMultiplierResponse {
  marketsLiquidityUsageMultiplier: MarketLiquidityUsageMultiplier[];
  pagination?: PageResponse;
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

export interface QueryGetPoolRequest {
  poolId: string;
}

export interface QueryGetPoolResponse {
  pool?: PoolDetails;
}

export interface QueryAllPoolsRequest {
  pagination?: PageRequest;
}

export interface QueryAllPoolsResponse {
  pools: PoolDetails[];
  pagination?: PageResponse;
}

export interface QueryPoolMappingsRequest {
  pagination?: PageRequest;
}

export interface QueryPoolMappingsResponse {
  poolMappings: { [key: string]: Long };
  pagination?: PageResponse;
}

export interface QueryPoolMappingsResponse_PoolMappingsEntry {
  key: string;
  value: Long;
}

export interface QueryAllPoolAddressRequest {
  pagination?: PageRequest;
}

export interface QueryAllPoolAddressResponse {
  addresses: { [key: string]: string };
  pagination?: PageResponse;
}

export interface QueryAllPoolAddressResponse_AddressesEntry {
  key: string;
  value: string;
}

export interface QueryPoolInfoRequest {
  poolId: string;
}

export interface QueryPoolInfoResponse {
  poolId: Long;
  totalShareAmount: string;
  totalNavAmount: string;
  availableAmount: string;
  totalInPositionAmount: string;
  totalUpnlAmount: string;
}

export interface QueryAllPoolInfoRequest {
  pagination?: PageRequest;
}

export interface QueryAllPoolInfoResponse {
  pools: QueryPoolInfoResponse[];
  pagination?: PageResponse;
}

const baseQueryAllPoolMarketLiquidityUsageMultiplierRequest: object = {};

export const QueryAllPoolMarketLiquidityUsageMultiplierRequest = {
  encode(
    message: QueryAllPoolMarketLiquidityUsageMultiplierRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllPoolMarketLiquidityUsageMultiplierRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPoolMarketLiquidityUsageMultiplierRequest,
    } as QueryAllPoolMarketLiquidityUsageMultiplierRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPoolMarketLiquidityUsageMultiplierRequest {
    const message = {
      ...baseQueryAllPoolMarketLiquidityUsageMultiplierRequest,
    } as QueryAllPoolMarketLiquidityUsageMultiplierRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllPoolMarketLiquidityUsageMultiplierRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPoolMarketLiquidityUsageMultiplierRequest>
  ): QueryAllPoolMarketLiquidityUsageMultiplierRequest {
    const message = {
      ...baseQueryAllPoolMarketLiquidityUsageMultiplierRequest,
    } as QueryAllPoolMarketLiquidityUsageMultiplierRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllPoolMarketLiquidityUsageMultiplierResponse: object = {};

export const QueryAllPoolMarketLiquidityUsageMultiplierResponse = {
  encode(
    message: QueryAllPoolMarketLiquidityUsageMultiplierResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.marketsLiquidityUsageMultiplier) {
      MarketLiquidityUsageMultiplier.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
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
  ): QueryAllPoolMarketLiquidityUsageMultiplierResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPoolMarketLiquidityUsageMultiplierResponse,
    } as QueryAllPoolMarketLiquidityUsageMultiplierResponse;
    message.marketsLiquidityUsageMultiplier = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketsLiquidityUsageMultiplier.push(
            MarketLiquidityUsageMultiplier.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): QueryAllPoolMarketLiquidityUsageMultiplierResponse {
    const message = {
      ...baseQueryAllPoolMarketLiquidityUsageMultiplierResponse,
    } as QueryAllPoolMarketLiquidityUsageMultiplierResponse;
    message.marketsLiquidityUsageMultiplier = (
      object.marketsLiquidityUsageMultiplier ?? []
    ).map((e: any) => MarketLiquidityUsageMultiplier.fromJSON(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllPoolMarketLiquidityUsageMultiplierResponse): unknown {
    const obj: any = {};
    if (message.marketsLiquidityUsageMultiplier) {
      obj.marketsLiquidityUsageMultiplier =
        message.marketsLiquidityUsageMultiplier.map((e) =>
          e ? MarketLiquidityUsageMultiplier.toJSON(e) : undefined
        );
    } else {
      obj.marketsLiquidityUsageMultiplier = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPoolMarketLiquidityUsageMultiplierResponse>
  ): QueryAllPoolMarketLiquidityUsageMultiplierResponse {
    const message = {
      ...baseQueryAllPoolMarketLiquidityUsageMultiplierResponse,
    } as QueryAllPoolMarketLiquidityUsageMultiplierResponse;
    message.marketsLiquidityUsageMultiplier = (
      object.marketsLiquidityUsageMultiplier ?? []
    ).map((e) => MarketLiquidityUsageMultiplier.fromPartial(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(
    _: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromJSON(object.params)
        : undefined;
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

const baseQueryGetPoolRequest: object = { poolId: "" };

export const QueryGetPoolRequest = {
  encode(
    message: QueryGetPoolRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetPoolRequest } as QueryGetPoolRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPoolRequest {
    const message = { ...baseQueryGetPoolRequest } as QueryGetPoolRequest;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? String(object.poolId)
        : "";
    return message;
  },

  toJSON(message: QueryGetPoolRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetPoolRequest>): QueryGetPoolRequest {
    const message = { ...baseQueryGetPoolRequest } as QueryGetPoolRequest;
    message.poolId = object.poolId ?? "";
    return message;
  },
};

const baseQueryGetPoolResponse: object = {};

export const QueryGetPoolResponse = {
  encode(
    message: QueryGetPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pool !== undefined) {
      PoolDetails.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetPoolResponse } as QueryGetPoolResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = PoolDetails.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPoolResponse {
    const message = { ...baseQueryGetPoolResponse } as QueryGetPoolResponse;
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? PoolDetails.fromJSON(object.pool)
        : undefined;
    return message;
  },

  toJSON(message: QueryGetPoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined &&
      (obj.pool = message.pool ? PoolDetails.toJSON(message.pool) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetPoolResponse>): QueryGetPoolResponse {
    const message = { ...baseQueryGetPoolResponse } as QueryGetPoolResponse;
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? PoolDetails.fromPartial(object.pool)
        : undefined;
    return message;
  },
};

const baseQueryAllPoolsRequest: object = {};

export const QueryAllPoolsRequest = {
  encode(
    message: QueryAllPoolsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllPoolsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPoolsRequest } as QueryAllPoolsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPoolsRequest {
    const message = { ...baseQueryAllPoolsRequest } as QueryAllPoolsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllPoolsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllPoolsRequest>): QueryAllPoolsRequest {
    const message = { ...baseQueryAllPoolsRequest } as QueryAllPoolsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllPoolsResponse: object = {};

export const QueryAllPoolsResponse = {
  encode(
    message: QueryAllPoolsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.pools) {
      PoolDetails.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllPoolsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPoolsResponse } as QueryAllPoolsResponse;
    message.pools = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(PoolDetails.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPoolsResponse {
    const message = { ...baseQueryAllPoolsResponse } as QueryAllPoolsResponse;
    message.pools = (object.pools ?? []).map((e: any) =>
      PoolDetails.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllPoolsResponse): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map((e) =>
        e ? PoolDetails.toJSON(e) : undefined
      );
    } else {
      obj.pools = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPoolsResponse>
  ): QueryAllPoolsResponse {
    const message = { ...baseQueryAllPoolsResponse } as QueryAllPoolsResponse;
    message.pools = (object.pools ?? []).map((e) => PoolDetails.fromPartial(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryPoolMappingsRequest: object = {};

export const QueryPoolMappingsRequest = {
  encode(
    message: QueryPoolMappingsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPoolMappingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryPoolMappingsRequest,
    } as QueryPoolMappingsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolMappingsRequest {
    const message = {
      ...baseQueryPoolMappingsRequest,
    } as QueryPoolMappingsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryPoolMappingsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPoolMappingsRequest>
  ): QueryPoolMappingsRequest {
    const message = {
      ...baseQueryPoolMappingsRequest,
    } as QueryPoolMappingsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryPoolMappingsResponse: object = {};

export const QueryPoolMappingsResponse = {
  encode(
    message: QueryPoolMappingsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.poolMappings).forEach(([key, value]) => {
      QueryPoolMappingsResponse_PoolMappingsEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
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
  ): QueryPoolMappingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryPoolMappingsResponse,
    } as QueryPoolMappingsResponse;
    message.poolMappings = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = QueryPoolMappingsResponse_PoolMappingsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry1.value !== undefined) {
            message.poolMappings[entry1.key] = entry1.value;
          }
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

  fromJSON(object: any): QueryPoolMappingsResponse {
    const message = {
      ...baseQueryPoolMappingsResponse,
    } as QueryPoolMappingsResponse;
    message.poolMappings = Object.entries(object.poolMappings ?? {}).reduce<{
      [key: string]: Long;
    }>((acc, [key, value]) => {
      acc[key] = Long.fromString(value as string);
      return acc;
    }, {});
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryPoolMappingsResponse): unknown {
    const obj: any = {};
    obj.poolMappings = {};
    if (message.poolMappings) {
      Object.entries(message.poolMappings).forEach(([k, v]) => {
        obj.poolMappings[k] = v.toString();
      });
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPoolMappingsResponse>
  ): QueryPoolMappingsResponse {
    const message = {
      ...baseQueryPoolMappingsResponse,
    } as QueryPoolMappingsResponse;
    message.poolMappings = Object.entries(object.poolMappings ?? {}).reduce<{
      [key: string]: Long;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Long.fromValue(value);
      }
      return acc;
    }, {});
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryPoolMappingsResponse_PoolMappingsEntry: object = {
  key: "",
  value: Long.UZERO,
};

export const QueryPoolMappingsResponse_PoolMappingsEntry = {
  encode(
    message: QueryPoolMappingsResponse_PoolMappingsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (!message.value.isZero()) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPoolMappingsResponse_PoolMappingsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryPoolMappingsResponse_PoolMappingsEntry,
    } as QueryPoolMappingsResponse_PoolMappingsEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolMappingsResponse_PoolMappingsEntry {
    const message = {
      ...baseQueryPoolMappingsResponse_PoolMappingsEntry,
    } as QueryPoolMappingsResponse_PoolMappingsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? Long.fromString(object.value)
        : Long.UZERO;
    return message;
  },

  toJSON(message: QueryPoolMappingsResponse_PoolMappingsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = (message.value || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPoolMappingsResponse_PoolMappingsEntry>
  ): QueryPoolMappingsResponse_PoolMappingsEntry {
    const message = {
      ...baseQueryPoolMappingsResponse_PoolMappingsEntry,
    } as QueryPoolMappingsResponse_PoolMappingsEntry;
    message.key = object.key ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? Long.fromValue(object.value)
        : Long.UZERO;
    return message;
  },
};

const baseQueryAllPoolAddressRequest: object = {};

export const QueryAllPoolAddressRequest = {
  encode(
    message: QueryAllPoolAddressRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllPoolAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPoolAddressRequest,
    } as QueryAllPoolAddressRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPoolAddressRequest {
    const message = {
      ...baseQueryAllPoolAddressRequest,
    } as QueryAllPoolAddressRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllPoolAddressRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPoolAddressRequest>
  ): QueryAllPoolAddressRequest {
    const message = {
      ...baseQueryAllPoolAddressRequest,
    } as QueryAllPoolAddressRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllPoolAddressResponse: object = {};

export const QueryAllPoolAddressResponse = {
  encode(
    message: QueryAllPoolAddressResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.addresses).forEach(([key, value]) => {
      QueryAllPoolAddressResponse_AddressesEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
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
  ): QueryAllPoolAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPoolAddressResponse,
    } as QueryAllPoolAddressResponse;
    message.addresses = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = QueryAllPoolAddressResponse_AddressesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry1.value !== undefined) {
            message.addresses[entry1.key] = entry1.value;
          }
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

  fromJSON(object: any): QueryAllPoolAddressResponse {
    const message = {
      ...baseQueryAllPoolAddressResponse,
    } as QueryAllPoolAddressResponse;
    message.addresses = Object.entries(object.addresses ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllPoolAddressResponse): unknown {
    const obj: any = {};
    obj.addresses = {};
    if (message.addresses) {
      Object.entries(message.addresses).forEach(([k, v]) => {
        obj.addresses[k] = v;
      });
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPoolAddressResponse>
  ): QueryAllPoolAddressResponse {
    const message = {
      ...baseQueryAllPoolAddressResponse,
    } as QueryAllPoolAddressResponse;
    message.addresses = Object.entries(object.addresses ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllPoolAddressResponse_AddressesEntry: object = {
  key: "",
  value: "",
};

export const QueryAllPoolAddressResponse_AddressesEntry = {
  encode(
    message: QueryAllPoolAddressResponse_AddressesEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllPoolAddressResponse_AddressesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPoolAddressResponse_AddressesEntry,
    } as QueryAllPoolAddressResponse_AddressesEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPoolAddressResponse_AddressesEntry {
    const message = {
      ...baseQueryAllPoolAddressResponse_AddressesEntry,
    } as QueryAllPoolAddressResponse_AddressesEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: QueryAllPoolAddressResponse_AddressesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPoolAddressResponse_AddressesEntry>
  ): QueryAllPoolAddressResponse_AddressesEntry {
    const message = {
      ...baseQueryAllPoolAddressResponse_AddressesEntry,
    } as QueryAllPoolAddressResponse_AddressesEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

const baseQueryPoolInfoRequest: object = { poolId: "" };

export const QueryPoolInfoRequest = {
  encode(
    message: QueryPoolInfoRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPoolInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPoolInfoRequest } as QueryPoolInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolInfoRequest {
    const message = { ...baseQueryPoolInfoRequest } as QueryPoolInfoRequest;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? String(object.poolId)
        : "";
    return message;
  },

  toJSON(message: QueryPoolInfoRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryPoolInfoRequest>): QueryPoolInfoRequest {
    const message = { ...baseQueryPoolInfoRequest } as QueryPoolInfoRequest;
    message.poolId = object.poolId ?? "";
    return message;
  },
};

const baseQueryPoolInfoResponse: object = {
  poolId: Long.UZERO,
  totalShareAmount: "",
  totalNavAmount: "",
  availableAmount: "",
  totalInPositionAmount: "",
  totalUpnlAmount: "",
};

export const QueryPoolInfoResponse = {
  encode(
    message: QueryPoolInfoResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.totalShareAmount !== "") {
      writer.uint32(18).string(message.totalShareAmount);
    }
    if (message.totalNavAmount !== "") {
      writer.uint32(26).string(message.totalNavAmount);
    }
    if (message.availableAmount !== "") {
      writer.uint32(34).string(message.availableAmount);
    }
    if (message.totalInPositionAmount !== "") {
      writer.uint32(42).string(message.totalInPositionAmount);
    }
    if (message.totalUpnlAmount !== "") {
      writer.uint32(50).string(message.totalUpnlAmount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPoolInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPoolInfoResponse } as QueryPoolInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.totalShareAmount = reader.string();
          break;
        case 3:
          message.totalNavAmount = reader.string();
          break;
        case 4:
          message.availableAmount = reader.string();
          break;
        case 5:
          message.totalInPositionAmount = reader.string();
          break;
        case 6:
          message.totalUpnlAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolInfoResponse {
    const message = { ...baseQueryPoolInfoResponse } as QueryPoolInfoResponse;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.totalShareAmount =
      object.totalShareAmount !== undefined && object.totalShareAmount !== null
        ? String(object.totalShareAmount)
        : "";
    message.totalNavAmount =
      object.totalNavAmount !== undefined && object.totalNavAmount !== null
        ? String(object.totalNavAmount)
        : "";
    message.availableAmount =
      object.availableAmount !== undefined && object.availableAmount !== null
        ? String(object.availableAmount)
        : "";
    message.totalInPositionAmount =
      object.totalInPositionAmount !== undefined &&
      object.totalInPositionAmount !== null
        ? String(object.totalInPositionAmount)
        : "";
    message.totalUpnlAmount =
      object.totalUpnlAmount !== undefined && object.totalUpnlAmount !== null
        ? String(object.totalUpnlAmount)
        : "";
    return message;
  },

  toJSON(message: QueryPoolInfoResponse): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.totalShareAmount !== undefined &&
      (obj.totalShareAmount = message.totalShareAmount);
    message.totalNavAmount !== undefined &&
      (obj.totalNavAmount = message.totalNavAmount);
    message.availableAmount !== undefined &&
      (obj.availableAmount = message.availableAmount);
    message.totalInPositionAmount !== undefined &&
      (obj.totalInPositionAmount = message.totalInPositionAmount);
    message.totalUpnlAmount !== undefined &&
      (obj.totalUpnlAmount = message.totalUpnlAmount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPoolInfoResponse>
  ): QueryPoolInfoResponse {
    const message = { ...baseQueryPoolInfoResponse } as QueryPoolInfoResponse;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.totalShareAmount = object.totalShareAmount ?? "";
    message.totalNavAmount = object.totalNavAmount ?? "";
    message.availableAmount = object.availableAmount ?? "";
    message.totalInPositionAmount = object.totalInPositionAmount ?? "";
    message.totalUpnlAmount = object.totalUpnlAmount ?? "";
    return message;
  },
};

const baseQueryAllPoolInfoRequest: object = {};

export const QueryAllPoolInfoRequest = {
  encode(
    message: QueryAllPoolInfoRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllPoolInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPoolInfoRequest,
    } as QueryAllPoolInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPoolInfoRequest {
    const message = {
      ...baseQueryAllPoolInfoRequest,
    } as QueryAllPoolInfoRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllPoolInfoRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPoolInfoRequest>
  ): QueryAllPoolInfoRequest {
    const message = {
      ...baseQueryAllPoolInfoRequest,
    } as QueryAllPoolInfoRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllPoolInfoResponse: object = {};

export const QueryAllPoolInfoResponse = {
  encode(
    message: QueryAllPoolInfoResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.pools) {
      QueryPoolInfoResponse.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllPoolInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPoolInfoResponse,
    } as QueryAllPoolInfoResponse;
    message.pools = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(
            QueryPoolInfoResponse.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): QueryAllPoolInfoResponse {
    const message = {
      ...baseQueryAllPoolInfoResponse,
    } as QueryAllPoolInfoResponse;
    message.pools = (object.pools ?? []).map((e: any) =>
      QueryPoolInfoResponse.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllPoolInfoResponse): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map((e) =>
        e ? QueryPoolInfoResponse.toJSON(e) : undefined
      );
    } else {
      obj.pools = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPoolInfoResponse>
  ): QueryAllPoolInfoResponse {
    const message = {
      ...baseQueryAllPoolInfoResponse,
    } as QueryAllPoolInfoResponse;
    message.pools = (object.pools ?? []).map((e) =>
      QueryPoolInfoResponse.fromPartial(e)
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
  /** Params queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Get statistical amounts for a particular pool id */
  PoolInfo(request: QueryPoolInfoRequest): Promise<QueryPoolInfoResponse>;
  /**
   * This route needs to be before Pool to get matched first
   * Get statistical amounts for a particular pool id
   */
  PoolInfoAll(
    request: QueryAllPoolInfoRequest
  ): Promise<QueryAllPoolInfoResponse>;
  /** Get addresses for all pools */
  PoolAddressAll(
    request: QueryAllPoolAddressRequest
  ): Promise<QueryAllPoolAddressResponse>;
  /** Get markets liquidity usage multiplier for all pools-linked markets */
  PoolMarketLiquidityUsageMultiplierAll(
    request: QueryAllPoolMarketLiquidityUsageMultiplierRequest
  ): Promise<QueryAllPoolMarketLiquidityUsageMultiplierResponse>;
  /** Get Pool details for a particular id */
  Pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse>;
  /** Get all Pool details */
  PoolAll(request: QueryAllPoolsRequest): Promise<QueryAllPoolsResponse>;
  /** Get denom => pool_id mappings */
  PoolMappings(
    request: QueryPoolMappingsRequest
  ): Promise<QueryPoolMappingsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.PoolInfo = this.PoolInfo.bind(this);
    this.PoolInfoAll = this.PoolInfoAll.bind(this);
    this.PoolAddressAll = this.PoolAddressAll.bind(this);
    this.PoolMarketLiquidityUsageMultiplierAll =
      this.PoolMarketLiquidityUsageMultiplierAll.bind(this);
    this.Pool = this.Pool.bind(this);
    this.PoolAll = this.PoolAll.bind(this);
    this.PoolMappings = this.PoolMappings.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpspool.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  PoolInfo(request: QueryPoolInfoRequest): Promise<QueryPoolInfoResponse> {
    const data = QueryPoolInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpspool.Query",
      "PoolInfo",
      data
    );
    return promise.then((data) =>
      QueryPoolInfoResponse.decode(new _m0.Reader(data))
    );
  }

  PoolInfoAll(
    request: QueryAllPoolInfoRequest
  ): Promise<QueryAllPoolInfoResponse> {
    const data = QueryAllPoolInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpspool.Query",
      "PoolInfoAll",
      data
    );
    return promise.then((data) =>
      QueryAllPoolInfoResponse.decode(new _m0.Reader(data))
    );
  }

  PoolAddressAll(
    request: QueryAllPoolAddressRequest
  ): Promise<QueryAllPoolAddressResponse> {
    const data = QueryAllPoolAddressRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpspool.Query",
      "PoolAddressAll",
      data
    );
    return promise.then((data) =>
      QueryAllPoolAddressResponse.decode(new _m0.Reader(data))
    );
  }

  PoolMarketLiquidityUsageMultiplierAll(
    request: QueryAllPoolMarketLiquidityUsageMultiplierRequest
  ): Promise<QueryAllPoolMarketLiquidityUsageMultiplierResponse> {
    const data =
      QueryAllPoolMarketLiquidityUsageMultiplierRequest.encode(
        request
      ).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpspool.Query",
      "PoolMarketLiquidityUsageMultiplierAll",
      data
    );
    return promise.then((data) =>
      QueryAllPoolMarketLiquidityUsageMultiplierResponse.decode(
        new _m0.Reader(data)
      )
    );
  }

  Pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse> {
    const data = QueryGetPoolRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpspool.Query",
      "Pool",
      data
    );
    return promise.then((data) =>
      QueryGetPoolResponse.decode(new _m0.Reader(data))
    );
  }

  PoolAll(request: QueryAllPoolsRequest): Promise<QueryAllPoolsResponse> {
    const data = QueryAllPoolsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpspool.Query",
      "PoolAll",
      data
    );
    return promise.then((data) =>
      QueryAllPoolsResponse.decode(new _m0.Reader(data))
    );
  }

  PoolMappings(
    request: QueryPoolMappingsRequest
  ): Promise<QueryPoolMappingsResponse> {
    const data = QueryPoolMappingsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpspool.Query",
      "PoolMappings",
      data
    );
    return promise.then((data) =>
      QueryPoolMappingsResponse.decode(new _m0.Reader(data))
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
