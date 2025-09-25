/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { DetailedQuoteStrategy, MarketLiquidityUsageMultiplier } from "./market";
import { Params } from "./params";
import { PoolDetails } from "./pool";
import { UserVault, UserVaultWithdrawalRecord } from "./user_vault";

export const protobufPackage = "Switcheo.carbon.perpspool";

export interface QueryAllPoolMarketLiquidityUsageMultiplierRequest {
  pagination?: PageRequest;
}

export interface QueryAllPoolMarketLiquidityUsageMultiplierResponse {
  marketsLiquidityUsageMultiplier: MarketLiquidityUsageMultiplier[];
  pagination?: PageResponse;
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

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
  vault?: VaultInfo;
}

export interface QueryAllPoolInfoRequest {
  pagination?: PageRequest;
}

export interface QueryAllPoolInfoResponse {
  vaults: VaultInfo[];
  pagination?: PageResponse;
}

export interface QueryUserVaultRequest {
  id: Long;
}

export interface QueryUserVaultResponse {
  userVault?: UserVault;
}

export interface QueryAllUserVaultRequest {
  pagination?: PageRequest;
}

export interface QueryAllUserVaultResponse {
  userVaults: UserVault[];
  pagination?: PageResponse;
}

export interface QueryAllUserVaultPendingWithdrawalsRequest {
  pagination?: PageRequest;
}

export interface QueryAllUserVaultPendingWithdrawalsResponse {
  withdrawals: UserVaultWithdrawalRecord[];
  pagination?: PageResponse;
}

export interface QueryUserVaultPendingWithdrawalsRequest {
  id: Long;
  pagination?: PageRequest;
}

export interface QueryUserVaultPendingWithdrawalsResponse {
  withdrawals: UserVaultWithdrawalRecord[];
  pagination?: PageResponse;
}

export interface QueryUserVaultInfoRequest {
  id: string;
}

export interface QueryUserVaultInfoResponse {
  vault?: VaultInfo;
}

export interface QueryAllUserVaultInfoRequest {
  pagination?: PageRequest;
}

export interface QueryAllUserVaultInfoResponse {
  vaults: VaultInfo[];
  pagination?: PageResponse;
}

export interface VaultInfo {
  id: Long;
  totalShareAmount: string;
  totalNavAmount: string;
  availableAmount: string;
  totalInPositionAmount: string;
  totalInOrderAmount: string;
  totalUpnlAmount: string;
}

export interface QueryAllQuoteStrategyRequest {
  pagination?: PageRequest;
}

export interface QueryAllQuoteStrategyResponse {
  quoteStrategies: DetailedQuoteStrategy[];
  pagination?: PageResponse;
}

function createBaseQueryAllPoolMarketLiquidityUsageMultiplierRequest(): QueryAllPoolMarketLiquidityUsageMultiplierRequest {
  return { pagination: undefined };
}

export const QueryAllPoolMarketLiquidityUsageMultiplierRequest = {
  encode(
    message: QueryAllPoolMarketLiquidityUsageMultiplierRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolMarketLiquidityUsageMultiplierRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolMarketLiquidityUsageMultiplierRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryAllPoolMarketLiquidityUsageMultiplierRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllPoolMarketLiquidityUsageMultiplierRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(
    base?: DeepPartial<QueryAllPoolMarketLiquidityUsageMultiplierRequest>,
  ): QueryAllPoolMarketLiquidityUsageMultiplierRequest {
    return QueryAllPoolMarketLiquidityUsageMultiplierRequest.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<QueryAllPoolMarketLiquidityUsageMultiplierRequest>,
  ): QueryAllPoolMarketLiquidityUsageMultiplierRequest {
    const message = createBaseQueryAllPoolMarketLiquidityUsageMultiplierRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPoolMarketLiquidityUsageMultiplierResponse(): QueryAllPoolMarketLiquidityUsageMultiplierResponse {
  return { marketsLiquidityUsageMultiplier: [], pagination: undefined };
}

export const QueryAllPoolMarketLiquidityUsageMultiplierResponse = {
  encode(
    message: QueryAllPoolMarketLiquidityUsageMultiplierResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.marketsLiquidityUsageMultiplier) {
      MarketLiquidityUsageMultiplier.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolMarketLiquidityUsageMultiplierResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolMarketLiquidityUsageMultiplierResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.marketsLiquidityUsageMultiplier.push(MarketLiquidityUsageMultiplier.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPoolMarketLiquidityUsageMultiplierResponse {
    return {
      marketsLiquidityUsageMultiplier: Array.isArray(object?.marketsLiquidityUsageMultiplier)
        ? object.marketsLiquidityUsageMultiplier.map((e: any) => MarketLiquidityUsageMultiplier.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPoolMarketLiquidityUsageMultiplierResponse): unknown {
    const obj: any = {};
    if (message.marketsLiquidityUsageMultiplier) {
      obj.marketsLiquidityUsageMultiplier = message.marketsLiquidityUsageMultiplier.map((e) =>
        e ? MarketLiquidityUsageMultiplier.toJSON(e) : undefined
      );
    } else {
      obj.marketsLiquidityUsageMultiplier = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(
    base?: DeepPartial<QueryAllPoolMarketLiquidityUsageMultiplierResponse>,
  ): QueryAllPoolMarketLiquidityUsageMultiplierResponse {
    return QueryAllPoolMarketLiquidityUsageMultiplierResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<QueryAllPoolMarketLiquidityUsageMultiplierResponse>,
  ): QueryAllPoolMarketLiquidityUsageMultiplierResponse {
    const message = createBaseQueryAllPoolMarketLiquidityUsageMultiplierResponse();
    message.marketsLiquidityUsageMultiplier =
      object.marketsLiquidityUsageMultiplier?.map((e) => MarketLiquidityUsageMultiplier.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetPoolRequest(): QueryGetPoolRequest {
  return { poolId: "" };
}

export const QueryGetPoolRequest = {
  encode(message: QueryGetPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPoolRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.poolId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetPoolRequest {
    return { poolId: isSet(object.poolId) ? String(object.poolId) : "" };
  },

  toJSON(message: QueryGetPoolRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    return obj;
  },

  create(base?: DeepPartial<QueryGetPoolRequest>): QueryGetPoolRequest {
    return QueryGetPoolRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetPoolRequest>): QueryGetPoolRequest {
    const message = createBaseQueryGetPoolRequest();
    message.poolId = object.poolId ?? "";
    return message;
  },
};

function createBaseQueryGetPoolResponse(): QueryGetPoolResponse {
  return { pool: undefined };
}

export const QueryGetPoolResponse = {
  encode(message: QueryGetPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      PoolDetails.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPoolResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pool = PoolDetails.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetPoolResponse {
    return { pool: isSet(object.pool) ? PoolDetails.fromJSON(object.pool) : undefined };
  },

  toJSON(message: QueryGetPoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? PoolDetails.toJSON(message.pool) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryGetPoolResponse>): QueryGetPoolResponse {
    return QueryGetPoolResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetPoolResponse>): QueryGetPoolResponse {
    const message = createBaseQueryGetPoolResponse();
    message.pool = (object.pool !== undefined && object.pool !== null)
      ? PoolDetails.fromPartial(object.pool)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPoolsRequest(): QueryAllPoolsRequest {
  return { pagination: undefined };
}

export const QueryAllPoolsRequest = {
  encode(message: QueryAllPoolsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryAllPoolsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllPoolsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllPoolsRequest>): QueryAllPoolsRequest {
    return QueryAllPoolsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllPoolsRequest>): QueryAllPoolsRequest {
    const message = createBaseQueryAllPoolsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPoolsResponse(): QueryAllPoolsResponse {
  return { pools: [], pagination: undefined };
}

export const QueryAllPoolsResponse = {
  encode(message: QueryAllPoolsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pools) {
      PoolDetails.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pools.push(PoolDetails.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPoolsResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => PoolDetails.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPoolsResponse): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map((e) => e ? PoolDetails.toJSON(e) : undefined);
    } else {
      obj.pools = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllPoolsResponse>): QueryAllPoolsResponse {
    return QueryAllPoolsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllPoolsResponse>): QueryAllPoolsResponse {
    const message = createBaseQueryAllPoolsResponse();
    message.pools = object.pools?.map((e) => PoolDetails.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryPoolMappingsRequest(): QueryPoolMappingsRequest {
  return { pagination: undefined };
}

export const QueryPoolMappingsRequest = {
  encode(message: QueryPoolMappingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolMappingsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolMappingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryPoolMappingsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryPoolMappingsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryPoolMappingsRequest>): QueryPoolMappingsRequest {
    return QueryPoolMappingsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryPoolMappingsRequest>): QueryPoolMappingsRequest {
    const message = createBaseQueryPoolMappingsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryPoolMappingsResponse(): QueryPoolMappingsResponse {
  return { poolMappings: {}, pagination: undefined };
}

export const QueryPoolMappingsResponse = {
  encode(message: QueryPoolMappingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.poolMappings).forEach(([key, value]) => {
      QueryPoolMappingsResponse_PoolMappingsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolMappingsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolMappingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = QueryPoolMappingsResponse_PoolMappingsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.poolMappings[entry1.key] = entry1.value;
          }
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

  fromJSON(object: any): QueryPoolMappingsResponse {
    return {
      poolMappings: isObject(object.poolMappings)
        ? Object.entries(object.poolMappings).reduce<{ [key: string]: Long }>((acc, [key, value]) => {
          acc[key] = Long.fromValue(value as Long | string);
          return acc;
        }, {})
        : {},
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
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
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryPoolMappingsResponse>): QueryPoolMappingsResponse {
    return QueryPoolMappingsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryPoolMappingsResponse>): QueryPoolMappingsResponse {
    const message = createBaseQueryPoolMappingsResponse();
    message.poolMappings = Object.entries(object.poolMappings ?? {}).reduce<{ [key: string]: Long }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = Long.fromValue(value);
        }
        return acc;
      },
      {},
    );
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryPoolMappingsResponse_PoolMappingsEntry(): QueryPoolMappingsResponse_PoolMappingsEntry {
  return { key: "", value: Long.UZERO };
}

export const QueryPoolMappingsResponse_PoolMappingsEntry = {
  encode(message: QueryPoolMappingsResponse_PoolMappingsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (!message.value.isZero()) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolMappingsResponse_PoolMappingsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolMappingsResponse_PoolMappingsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPoolMappingsResponse_PoolMappingsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.UZERO,
    };
  },

  toJSON(message: QueryPoolMappingsResponse_PoolMappingsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = (message.value || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<QueryPoolMappingsResponse_PoolMappingsEntry>): QueryPoolMappingsResponse_PoolMappingsEntry {
    return QueryPoolMappingsResponse_PoolMappingsEntry.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<QueryPoolMappingsResponse_PoolMappingsEntry>,
  ): QueryPoolMappingsResponse_PoolMappingsEntry {
    const message = createBaseQueryPoolMappingsResponse_PoolMappingsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null) ? Long.fromValue(object.value) : Long.UZERO;
    return message;
  },
};

function createBaseQueryAllPoolAddressRequest(): QueryAllPoolAddressRequest {
  return { pagination: undefined };
}

export const QueryAllPoolAddressRequest = {
  encode(message: QueryAllPoolAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolAddressRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryAllPoolAddressRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllPoolAddressRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllPoolAddressRequest>): QueryAllPoolAddressRequest {
    return QueryAllPoolAddressRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllPoolAddressRequest>): QueryAllPoolAddressRequest {
    const message = createBaseQueryAllPoolAddressRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPoolAddressResponse(): QueryAllPoolAddressResponse {
  return { addresses: {}, pagination: undefined };
}

export const QueryAllPoolAddressResponse = {
  encode(message: QueryAllPoolAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.addresses).forEach(([key, value]) => {
      QueryAllPoolAddressResponse_AddressesEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolAddressResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = QueryAllPoolAddressResponse_AddressesEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.addresses[entry1.key] = entry1.value;
          }
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

  fromJSON(object: any): QueryAllPoolAddressResponse {
    return {
      addresses: isObject(object.addresses)
        ? Object.entries(object.addresses).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
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
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllPoolAddressResponse>): QueryAllPoolAddressResponse {
    return QueryAllPoolAddressResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllPoolAddressResponse>): QueryAllPoolAddressResponse {
    const message = createBaseQueryAllPoolAddressResponse();
    message.addresses = Object.entries(object.addresses ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = String(value);
        }
        return acc;
      },
      {},
    );
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPoolAddressResponse_AddressesEntry(): QueryAllPoolAddressResponse_AddressesEntry {
  return { key: "", value: "" };
}

export const QueryAllPoolAddressResponse_AddressesEntry = {
  encode(message: QueryAllPoolAddressResponse_AddressesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolAddressResponse_AddressesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolAddressResponse_AddressesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllPoolAddressResponse_AddressesEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: QueryAllPoolAddressResponse_AddressesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create(base?: DeepPartial<QueryAllPoolAddressResponse_AddressesEntry>): QueryAllPoolAddressResponse_AddressesEntry {
    return QueryAllPoolAddressResponse_AddressesEntry.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<QueryAllPoolAddressResponse_AddressesEntry>,
  ): QueryAllPoolAddressResponse_AddressesEntry {
    const message = createBaseQueryAllPoolAddressResponse_AddressesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseQueryPoolInfoRequest(): QueryPoolInfoRequest {
  return { poolId: "" };
}

export const QueryPoolInfoRequest = {
  encode(message: QueryPoolInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolInfoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.poolId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPoolInfoRequest {
    return { poolId: isSet(object.poolId) ? String(object.poolId) : "" };
  },

  toJSON(message: QueryPoolInfoRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    return obj;
  },

  create(base?: DeepPartial<QueryPoolInfoRequest>): QueryPoolInfoRequest {
    return QueryPoolInfoRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryPoolInfoRequest>): QueryPoolInfoRequest {
    const message = createBaseQueryPoolInfoRequest();
    message.poolId = object.poolId ?? "";
    return message;
  },
};

function createBaseQueryPoolInfoResponse(): QueryPoolInfoResponse {
  return { vault: undefined };
}

export const QueryPoolInfoResponse = {
  encode(message: QueryPoolInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vault !== undefined) {
      VaultInfo.encode(message.vault, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.vault = VaultInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPoolInfoResponse {
    return { vault: isSet(object.vault) ? VaultInfo.fromJSON(object.vault) : undefined };
  },

  toJSON(message: QueryPoolInfoResponse): unknown {
    const obj: any = {};
    message.vault !== undefined && (obj.vault = message.vault ? VaultInfo.toJSON(message.vault) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryPoolInfoResponse>): QueryPoolInfoResponse {
    return QueryPoolInfoResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryPoolInfoResponse>): QueryPoolInfoResponse {
    const message = createBaseQueryPoolInfoResponse();
    message.vault = (object.vault !== undefined && object.vault !== null)
      ? VaultInfo.fromPartial(object.vault)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPoolInfoRequest(): QueryAllPoolInfoRequest {
  return { pagination: undefined };
}

export const QueryAllPoolInfoRequest = {
  encode(message: QueryAllPoolInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolInfoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryAllPoolInfoRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllPoolInfoRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllPoolInfoRequest>): QueryAllPoolInfoRequest {
    return QueryAllPoolInfoRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllPoolInfoRequest>): QueryAllPoolInfoRequest {
    const message = createBaseQueryAllPoolInfoRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPoolInfoResponse(): QueryAllPoolInfoResponse {
  return { vaults: [], pagination: undefined };
}

export const QueryAllPoolInfoResponse = {
  encode(message: QueryAllPoolInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.vaults) {
      VaultInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.vaults.push(VaultInfo.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPoolInfoResponse {
    return {
      vaults: Array.isArray(object?.vaults) ? object.vaults.map((e: any) => VaultInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPoolInfoResponse): unknown {
    const obj: any = {};
    if (message.vaults) {
      obj.vaults = message.vaults.map((e) => e ? VaultInfo.toJSON(e) : undefined);
    } else {
      obj.vaults = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllPoolInfoResponse>): QueryAllPoolInfoResponse {
    return QueryAllPoolInfoResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllPoolInfoResponse>): QueryAllPoolInfoResponse {
    const message = createBaseQueryAllPoolInfoResponse();
    message.vaults = object.vaults?.map((e) => VaultInfo.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryUserVaultRequest(): QueryUserVaultRequest {
  return { id: Long.UZERO };
}

export const QueryUserVaultRequest = {
  encode(message: QueryUserVaultRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserVaultRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserVaultRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryUserVaultRequest {
    return { id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO };
  },

  toJSON(message: QueryUserVaultRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<QueryUserVaultRequest>): QueryUserVaultRequest {
    return QueryUserVaultRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryUserVaultRequest>): QueryUserVaultRequest {
    const message = createBaseQueryUserVaultRequest();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
};

function createBaseQueryUserVaultResponse(): QueryUserVaultResponse {
  return { userVault: undefined };
}

export const QueryUserVaultResponse = {
  encode(message: QueryUserVaultResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userVault !== undefined) {
      UserVault.encode(message.userVault, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserVaultResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserVaultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userVault = UserVault.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryUserVaultResponse {
    return { userVault: isSet(object.userVault) ? UserVault.fromJSON(object.userVault) : undefined };
  },

  toJSON(message: QueryUserVaultResponse): unknown {
    const obj: any = {};
    message.userVault !== undefined &&
      (obj.userVault = message.userVault ? UserVault.toJSON(message.userVault) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryUserVaultResponse>): QueryUserVaultResponse {
    return QueryUserVaultResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryUserVaultResponse>): QueryUserVaultResponse {
    const message = createBaseQueryUserVaultResponse();
    message.userVault = (object.userVault !== undefined && object.userVault !== null)
      ? UserVault.fromPartial(object.userVault)
      : undefined;
    return message;
  },
};

function createBaseQueryAllUserVaultRequest(): QueryAllUserVaultRequest {
  return { pagination: undefined };
}

export const QueryAllUserVaultRequest = {
  encode(message: QueryAllUserVaultRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserVaultRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserVaultRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryAllUserVaultRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllUserVaultRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllUserVaultRequest>): QueryAllUserVaultRequest {
    return QueryAllUserVaultRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllUserVaultRequest>): QueryAllUserVaultRequest {
    const message = createBaseQueryAllUserVaultRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllUserVaultResponse(): QueryAllUserVaultResponse {
  return { userVaults: [], pagination: undefined };
}

export const QueryAllUserVaultResponse = {
  encode(message: QueryAllUserVaultResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.userVaults) {
      UserVault.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserVaultResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserVaultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userVaults.push(UserVault.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllUserVaultResponse {
    return {
      userVaults: Array.isArray(object?.userVaults) ? object.userVaults.map((e: any) => UserVault.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllUserVaultResponse): unknown {
    const obj: any = {};
    if (message.userVaults) {
      obj.userVaults = message.userVaults.map((e) => e ? UserVault.toJSON(e) : undefined);
    } else {
      obj.userVaults = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllUserVaultResponse>): QueryAllUserVaultResponse {
    return QueryAllUserVaultResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllUserVaultResponse>): QueryAllUserVaultResponse {
    const message = createBaseQueryAllUserVaultResponse();
    message.userVaults = object.userVaults?.map((e) => UserVault.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllUserVaultPendingWithdrawalsRequest(): QueryAllUserVaultPendingWithdrawalsRequest {
  return { pagination: undefined };
}

export const QueryAllUserVaultPendingWithdrawalsRequest = {
  encode(message: QueryAllUserVaultPendingWithdrawalsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserVaultPendingWithdrawalsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserVaultPendingWithdrawalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryAllUserVaultPendingWithdrawalsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllUserVaultPendingWithdrawalsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllUserVaultPendingWithdrawalsRequest>): QueryAllUserVaultPendingWithdrawalsRequest {
    return QueryAllUserVaultPendingWithdrawalsRequest.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<QueryAllUserVaultPendingWithdrawalsRequest>,
  ): QueryAllUserVaultPendingWithdrawalsRequest {
    const message = createBaseQueryAllUserVaultPendingWithdrawalsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllUserVaultPendingWithdrawalsResponse(): QueryAllUserVaultPendingWithdrawalsResponse {
  return { withdrawals: [], pagination: undefined };
}

export const QueryAllUserVaultPendingWithdrawalsResponse = {
  encode(message: QueryAllUserVaultPendingWithdrawalsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.withdrawals) {
      UserVaultWithdrawalRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserVaultPendingWithdrawalsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserVaultPendingWithdrawalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.withdrawals.push(UserVaultWithdrawalRecord.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllUserVaultPendingWithdrawalsResponse {
    return {
      withdrawals: Array.isArray(object?.withdrawals)
        ? object.withdrawals.map((e: any) => UserVaultWithdrawalRecord.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllUserVaultPendingWithdrawalsResponse): unknown {
    const obj: any = {};
    if (message.withdrawals) {
      obj.withdrawals = message.withdrawals.map((e) => e ? UserVaultWithdrawalRecord.toJSON(e) : undefined);
    } else {
      obj.withdrawals = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllUserVaultPendingWithdrawalsResponse>): QueryAllUserVaultPendingWithdrawalsResponse {
    return QueryAllUserVaultPendingWithdrawalsResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<QueryAllUserVaultPendingWithdrawalsResponse>,
  ): QueryAllUserVaultPendingWithdrawalsResponse {
    const message = createBaseQueryAllUserVaultPendingWithdrawalsResponse();
    message.withdrawals = object.withdrawals?.map((e) => UserVaultWithdrawalRecord.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryUserVaultPendingWithdrawalsRequest(): QueryUserVaultPendingWithdrawalsRequest {
  return { id: Long.UZERO, pagination: undefined };
}

export const QueryUserVaultPendingWithdrawalsRequest = {
  encode(message: QueryUserVaultPendingWithdrawalsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserVaultPendingWithdrawalsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserVaultPendingWithdrawalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): QueryUserVaultPendingWithdrawalsRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryUserVaultPendingWithdrawalsRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryUserVaultPendingWithdrawalsRequest>): QueryUserVaultPendingWithdrawalsRequest {
    return QueryUserVaultPendingWithdrawalsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryUserVaultPendingWithdrawalsRequest>): QueryUserVaultPendingWithdrawalsRequest {
    const message = createBaseQueryUserVaultPendingWithdrawalsRequest();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryUserVaultPendingWithdrawalsResponse(): QueryUserVaultPendingWithdrawalsResponse {
  return { withdrawals: [], pagination: undefined };
}

export const QueryUserVaultPendingWithdrawalsResponse = {
  encode(message: QueryUserVaultPendingWithdrawalsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.withdrawals) {
      UserVaultWithdrawalRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserVaultPendingWithdrawalsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserVaultPendingWithdrawalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.withdrawals.push(UserVaultWithdrawalRecord.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryUserVaultPendingWithdrawalsResponse {
    return {
      withdrawals: Array.isArray(object?.withdrawals)
        ? object.withdrawals.map((e: any) => UserVaultWithdrawalRecord.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryUserVaultPendingWithdrawalsResponse): unknown {
    const obj: any = {};
    if (message.withdrawals) {
      obj.withdrawals = message.withdrawals.map((e) => e ? UserVaultWithdrawalRecord.toJSON(e) : undefined);
    } else {
      obj.withdrawals = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryUserVaultPendingWithdrawalsResponse>): QueryUserVaultPendingWithdrawalsResponse {
    return QueryUserVaultPendingWithdrawalsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryUserVaultPendingWithdrawalsResponse>): QueryUserVaultPendingWithdrawalsResponse {
    const message = createBaseQueryUserVaultPendingWithdrawalsResponse();
    message.withdrawals = object.withdrawals?.map((e) => UserVaultWithdrawalRecord.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryUserVaultInfoRequest(): QueryUserVaultInfoRequest {
  return { id: "" };
}

export const QueryUserVaultInfoRequest = {
  encode(message: QueryUserVaultInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserVaultInfoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserVaultInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryUserVaultInfoRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: QueryUserVaultInfoRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create(base?: DeepPartial<QueryUserVaultInfoRequest>): QueryUserVaultInfoRequest {
    return QueryUserVaultInfoRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryUserVaultInfoRequest>): QueryUserVaultInfoRequest {
    const message = createBaseQueryUserVaultInfoRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseQueryUserVaultInfoResponse(): QueryUserVaultInfoResponse {
  return { vault: undefined };
}

export const QueryUserVaultInfoResponse = {
  encode(message: QueryUserVaultInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vault !== undefined) {
      VaultInfo.encode(message.vault, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserVaultInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserVaultInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.vault = VaultInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryUserVaultInfoResponse {
    return { vault: isSet(object.vault) ? VaultInfo.fromJSON(object.vault) : undefined };
  },

  toJSON(message: QueryUserVaultInfoResponse): unknown {
    const obj: any = {};
    message.vault !== undefined && (obj.vault = message.vault ? VaultInfo.toJSON(message.vault) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryUserVaultInfoResponse>): QueryUserVaultInfoResponse {
    return QueryUserVaultInfoResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryUserVaultInfoResponse>): QueryUserVaultInfoResponse {
    const message = createBaseQueryUserVaultInfoResponse();
    message.vault = (object.vault !== undefined && object.vault !== null)
      ? VaultInfo.fromPartial(object.vault)
      : undefined;
    return message;
  },
};

function createBaseQueryAllUserVaultInfoRequest(): QueryAllUserVaultInfoRequest {
  return { pagination: undefined };
}

export const QueryAllUserVaultInfoRequest = {
  encode(message: QueryAllUserVaultInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserVaultInfoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserVaultInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryAllUserVaultInfoRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllUserVaultInfoRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllUserVaultInfoRequest>): QueryAllUserVaultInfoRequest {
    return QueryAllUserVaultInfoRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllUserVaultInfoRequest>): QueryAllUserVaultInfoRequest {
    const message = createBaseQueryAllUserVaultInfoRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllUserVaultInfoResponse(): QueryAllUserVaultInfoResponse {
  return { vaults: [], pagination: undefined };
}

export const QueryAllUserVaultInfoResponse = {
  encode(message: QueryAllUserVaultInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.vaults) {
      VaultInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserVaultInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserVaultInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.vaults.push(VaultInfo.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllUserVaultInfoResponse {
    return {
      vaults: Array.isArray(object?.vaults) ? object.vaults.map((e: any) => VaultInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllUserVaultInfoResponse): unknown {
    const obj: any = {};
    if (message.vaults) {
      obj.vaults = message.vaults.map((e) => e ? VaultInfo.toJSON(e) : undefined);
    } else {
      obj.vaults = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllUserVaultInfoResponse>): QueryAllUserVaultInfoResponse {
    return QueryAllUserVaultInfoResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllUserVaultInfoResponse>): QueryAllUserVaultInfoResponse {
    const message = createBaseQueryAllUserVaultInfoResponse();
    message.vaults = object.vaults?.map((e) => VaultInfo.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseVaultInfo(): VaultInfo {
  return {
    id: Long.UZERO,
    totalShareAmount: "",
    totalNavAmount: "",
    availableAmount: "",
    totalInPositionAmount: "",
    totalInOrderAmount: "",
    totalUpnlAmount: "",
  };
}

export const VaultInfo = {
  encode(message: VaultInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
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
    if (message.totalInOrderAmount !== "") {
      writer.uint32(50).string(message.totalInOrderAmount);
    }
    if (message.totalUpnlAmount !== "") {
      writer.uint32(58).string(message.totalUpnlAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VaultInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVaultInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.totalShareAmount = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.totalNavAmount = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.availableAmount = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.totalInPositionAmount = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.totalInOrderAmount = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.totalUpnlAmount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VaultInfo {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      totalShareAmount: isSet(object.totalShareAmount) ? String(object.totalShareAmount) : "",
      totalNavAmount: isSet(object.totalNavAmount) ? String(object.totalNavAmount) : "",
      availableAmount: isSet(object.availableAmount) ? String(object.availableAmount) : "",
      totalInPositionAmount: isSet(object.totalInPositionAmount) ? String(object.totalInPositionAmount) : "",
      totalInOrderAmount: isSet(object.totalInOrderAmount) ? String(object.totalInOrderAmount) : "",
      totalUpnlAmount: isSet(object.totalUpnlAmount) ? String(object.totalUpnlAmount) : "",
    };
  },

  toJSON(message: VaultInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.totalShareAmount !== undefined && (obj.totalShareAmount = message.totalShareAmount);
    message.totalNavAmount !== undefined && (obj.totalNavAmount = message.totalNavAmount);
    message.availableAmount !== undefined && (obj.availableAmount = message.availableAmount);
    message.totalInPositionAmount !== undefined && (obj.totalInPositionAmount = message.totalInPositionAmount);
    message.totalInOrderAmount !== undefined && (obj.totalInOrderAmount = message.totalInOrderAmount);
    message.totalUpnlAmount !== undefined && (obj.totalUpnlAmount = message.totalUpnlAmount);
    return obj;
  },

  create(base?: DeepPartial<VaultInfo>): VaultInfo {
    return VaultInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<VaultInfo>): VaultInfo {
    const message = createBaseVaultInfo();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.totalShareAmount = object.totalShareAmount ?? "";
    message.totalNavAmount = object.totalNavAmount ?? "";
    message.availableAmount = object.availableAmount ?? "";
    message.totalInPositionAmount = object.totalInPositionAmount ?? "";
    message.totalInOrderAmount = object.totalInOrderAmount ?? "";
    message.totalUpnlAmount = object.totalUpnlAmount ?? "";
    return message;
  },
};

function createBaseQueryAllQuoteStrategyRequest(): QueryAllQuoteStrategyRequest {
  return { pagination: undefined };
}

export const QueryAllQuoteStrategyRequest = {
  encode(message: QueryAllQuoteStrategyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllQuoteStrategyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllQuoteStrategyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryAllQuoteStrategyRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllQuoteStrategyRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllQuoteStrategyRequest>): QueryAllQuoteStrategyRequest {
    return QueryAllQuoteStrategyRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllQuoteStrategyRequest>): QueryAllQuoteStrategyRequest {
    const message = createBaseQueryAllQuoteStrategyRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllQuoteStrategyResponse(): QueryAllQuoteStrategyResponse {
  return { quoteStrategies: [], pagination: undefined };
}

export const QueryAllQuoteStrategyResponse = {
  encode(message: QueryAllQuoteStrategyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.quoteStrategies) {
      DetailedQuoteStrategy.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllQuoteStrategyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllQuoteStrategyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.quoteStrategies.push(DetailedQuoteStrategy.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllQuoteStrategyResponse {
    return {
      quoteStrategies: Array.isArray(object?.quoteStrategies)
        ? object.quoteStrategies.map((e: any) => DetailedQuoteStrategy.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllQuoteStrategyResponse): unknown {
    const obj: any = {};
    if (message.quoteStrategies) {
      obj.quoteStrategies = message.quoteStrategies.map((e) => e ? DetailedQuoteStrategy.toJSON(e) : undefined);
    } else {
      obj.quoteStrategies = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllQuoteStrategyResponse>): QueryAllQuoteStrategyResponse {
    return QueryAllQuoteStrategyResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllQuoteStrategyResponse>): QueryAllQuoteStrategyResponse {
    const message = createBaseQueryAllQuoteStrategyResponse();
    message.quoteStrategies = object.quoteStrategies?.map((e) => DetailedQuoteStrategy.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Params queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * * PerpsPool Queries ** //
   * Get statistical amounts for a particular pool id
   */
  PoolInfo(request: QueryPoolInfoRequest): Promise<QueryPoolInfoResponse>;
  /**
   * This route needs to be before Pool to get matched first
   * Get statistical amounts for a particular pool id
   */
  PoolInfoAll(request: QueryAllPoolInfoRequest): Promise<QueryAllPoolInfoResponse>;
  /** Get addresses for all pools */
  PoolAddressAll(request: QueryAllPoolAddressRequest): Promise<QueryAllPoolAddressResponse>;
  /** Get markets liquidity usage multiplier for all pools-linked markets */
  PoolMarketLiquidityUsageMultiplierAll(
    request: QueryAllPoolMarketLiquidityUsageMultiplierRequest,
  ): Promise<QueryAllPoolMarketLiquidityUsageMultiplierResponse>;
  /** Get Pool details for a particular id */
  Pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse>;
  /** Get all Pool details */
  PoolAll(request: QueryAllPoolsRequest): Promise<QueryAllPoolsResponse>;
  /** Get denom => pool_id mappings */
  PoolMappings(request: QueryPoolMappingsRequest): Promise<QueryPoolMappingsResponse>;
  /**
   * * UserVault Queries ** //
   * Get user vault by id
   */
  UserVault(request: QueryUserVaultRequest): Promise<QueryUserVaultResponse>;
  /** Get all user vaults */
  UserVaultAll(request: QueryAllUserVaultRequest): Promise<QueryAllUserVaultResponse>;
  /** Get all pending user vault withdrawals waiting for release */
  UserVaultPendingWithdrawals(
    request: QueryAllUserVaultPendingWithdrawalsRequest,
  ): Promise<QueryAllUserVaultPendingWithdrawalsResponse>;
  /** Get pending user vault withdrawals for a user vault */
  UserVaultPendingWithdrawalsByVault(
    request: QueryUserVaultPendingWithdrawalsRequest,
  ): Promise<QueryUserVaultPendingWithdrawalsResponse>;
  /** Get all user vault infos */
  UserVaultInfoAll(request: QueryAllUserVaultInfoRequest): Promise<QueryAllUserVaultInfoResponse>;
  /** Get all quote strategies */
  QuoteStrategyAll(request: QueryAllQuoteStrategyRequest): Promise<QueryAllQuoteStrategyResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.perpspool.Query";
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.PoolInfo = this.PoolInfo.bind(this);
    this.PoolInfoAll = this.PoolInfoAll.bind(this);
    this.PoolAddressAll = this.PoolAddressAll.bind(this);
    this.PoolMarketLiquidityUsageMultiplierAll = this.PoolMarketLiquidityUsageMultiplierAll.bind(this);
    this.Pool = this.Pool.bind(this);
    this.PoolAll = this.PoolAll.bind(this);
    this.PoolMappings = this.PoolMappings.bind(this);
    this.UserVault = this.UserVault.bind(this);
    this.UserVaultAll = this.UserVaultAll.bind(this);
    this.UserVaultPendingWithdrawals = this.UserVaultPendingWithdrawals.bind(this);
    this.UserVaultPendingWithdrawalsByVault = this.UserVaultPendingWithdrawalsByVault.bind(this);
    this.UserVaultInfoAll = this.UserVaultInfoAll.bind(this);
    this.QuoteStrategyAll = this.QuoteStrategyAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  PoolInfo(request: QueryPoolInfoRequest): Promise<QueryPoolInfoResponse> {
    const data = QueryPoolInfoRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PoolInfo", data);
    return promise.then((data) => QueryPoolInfoResponse.decode(_m0.Reader.create(data)));
  }

  PoolInfoAll(request: QueryAllPoolInfoRequest): Promise<QueryAllPoolInfoResponse> {
    const data = QueryAllPoolInfoRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PoolInfoAll", data);
    return promise.then((data) => QueryAllPoolInfoResponse.decode(_m0.Reader.create(data)));
  }

  PoolAddressAll(request: QueryAllPoolAddressRequest): Promise<QueryAllPoolAddressResponse> {
    const data = QueryAllPoolAddressRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PoolAddressAll", data);
    return promise.then((data) => QueryAllPoolAddressResponse.decode(_m0.Reader.create(data)));
  }

  PoolMarketLiquidityUsageMultiplierAll(
    request: QueryAllPoolMarketLiquidityUsageMultiplierRequest,
  ): Promise<QueryAllPoolMarketLiquidityUsageMultiplierResponse> {
    const data = QueryAllPoolMarketLiquidityUsageMultiplierRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PoolMarketLiquidityUsageMultiplierAll", data);
    return promise.then((data) => QueryAllPoolMarketLiquidityUsageMultiplierResponse.decode(_m0.Reader.create(data)));
  }

  Pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse> {
    const data = QueryGetPoolRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Pool", data);
    return promise.then((data) => QueryGetPoolResponse.decode(_m0.Reader.create(data)));
  }

  PoolAll(request: QueryAllPoolsRequest): Promise<QueryAllPoolsResponse> {
    const data = QueryAllPoolsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PoolAll", data);
    return promise.then((data) => QueryAllPoolsResponse.decode(_m0.Reader.create(data)));
  }

  PoolMappings(request: QueryPoolMappingsRequest): Promise<QueryPoolMappingsResponse> {
    const data = QueryPoolMappingsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PoolMappings", data);
    return promise.then((data) => QueryPoolMappingsResponse.decode(_m0.Reader.create(data)));
  }

  UserVault(request: QueryUserVaultRequest): Promise<QueryUserVaultResponse> {
    const data = QueryUserVaultRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UserVault", data);
    return promise.then((data) => QueryUserVaultResponse.decode(_m0.Reader.create(data)));
  }

  UserVaultAll(request: QueryAllUserVaultRequest): Promise<QueryAllUserVaultResponse> {
    const data = QueryAllUserVaultRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UserVaultAll", data);
    return promise.then((data) => QueryAllUserVaultResponse.decode(_m0.Reader.create(data)));
  }

  UserVaultPendingWithdrawals(
    request: QueryAllUserVaultPendingWithdrawalsRequest,
  ): Promise<QueryAllUserVaultPendingWithdrawalsResponse> {
    const data = QueryAllUserVaultPendingWithdrawalsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UserVaultPendingWithdrawals", data);
    return promise.then((data) => QueryAllUserVaultPendingWithdrawalsResponse.decode(_m0.Reader.create(data)));
  }

  UserVaultPendingWithdrawalsByVault(
    request: QueryUserVaultPendingWithdrawalsRequest,
  ): Promise<QueryUserVaultPendingWithdrawalsResponse> {
    const data = QueryUserVaultPendingWithdrawalsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UserVaultPendingWithdrawalsByVault", data);
    return promise.then((data) => QueryUserVaultPendingWithdrawalsResponse.decode(_m0.Reader.create(data)));
  }

  UserVaultInfoAll(request: QueryAllUserVaultInfoRequest): Promise<QueryAllUserVaultInfoResponse> {
    const data = QueryAllUserVaultInfoRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UserVaultInfoAll", data);
    return promise.then((data) => QueryAllUserVaultInfoResponse.decode(_m0.Reader.create(data)));
  }

  QuoteStrategyAll(request: QueryAllQuoteStrategyRequest): Promise<QueryAllQuoteStrategyResponse> {
    const data = QueryAllQuoteStrategyRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QuoteStrategyAll", data);
    return promise.then((data) => QueryAllQuoteStrategyResponse.decode(_m0.Reader.create(data)));
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
