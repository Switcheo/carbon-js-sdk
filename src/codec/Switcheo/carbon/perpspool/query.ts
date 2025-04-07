/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { PoolDetails } from "./pool";
import { UserVault, UserVaultWithdrawalRecord } from "./user_vault";
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

export interface QueryUserVaultsByControllerRequest {
  controller: string;
}

export interface QueryUserVaultsByControllerResponse {
  userVaults: UserVault[];
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

const baseQueryPoolInfoResponse: object = {};

export const QueryPoolInfoResponse = {
  encode(
    message: QueryPoolInfoResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.vault !== undefined) {
      VaultInfo.encode(message.vault, writer.uint32(10).fork()).ldelim();
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
          message.vault = VaultInfo.decode(reader, reader.uint32());
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
    message.vault =
      object.vault !== undefined && object.vault !== null
        ? VaultInfo.fromJSON(object.vault)
        : undefined;
    return message;
  },

  toJSON(message: QueryPoolInfoResponse): unknown {
    const obj: any = {};
    message.vault !== undefined &&
      (obj.vault = message.vault ? VaultInfo.toJSON(message.vault) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPoolInfoResponse>
  ): QueryPoolInfoResponse {
    const message = { ...baseQueryPoolInfoResponse } as QueryPoolInfoResponse;
    message.vault =
      object.vault !== undefined && object.vault !== null
        ? VaultInfo.fromPartial(object.vault)
        : undefined;
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
    for (const v of message.vaults) {
      VaultInfo.encode(v!, writer.uint32(10).fork()).ldelim();
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
    message.vaults = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaults.push(VaultInfo.decode(reader, reader.uint32()));
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
    message.vaults = (object.vaults ?? []).map((e: any) =>
      VaultInfo.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllPoolInfoResponse): unknown {
    const obj: any = {};
    if (message.vaults) {
      obj.vaults = message.vaults.map((e) =>
        e ? VaultInfo.toJSON(e) : undefined
      );
    } else {
      obj.vaults = [];
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
    message.vaults = (object.vaults ?? []).map((e) => VaultInfo.fromPartial(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryUserVaultRequest: object = { id: Long.UZERO };

export const QueryUserVaultRequest = {
  encode(
    message: QueryUserVaultRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUserVaultRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryUserVaultRequest } as QueryUserVaultRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUserVaultRequest {
    const message = { ...baseQueryUserVaultRequest } as QueryUserVaultRequest;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromString(object.id)
        : Long.UZERO;
    return message;
  },

  toJSON(message: QueryUserVaultRequest): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryUserVaultRequest>
  ): QueryUserVaultRequest {
    const message = { ...baseQueryUserVaultRequest } as QueryUserVaultRequest;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    return message;
  },
};

const baseQueryUserVaultResponse: object = {};

export const QueryUserVaultResponse = {
  encode(
    message: QueryUserVaultResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userVault !== undefined) {
      UserVault.encode(message.userVault, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUserVaultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryUserVaultResponse } as QueryUserVaultResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userVault = UserVault.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUserVaultResponse {
    const message = { ...baseQueryUserVaultResponse } as QueryUserVaultResponse;
    message.userVault =
      object.userVault !== undefined && object.userVault !== null
        ? UserVault.fromJSON(object.userVault)
        : undefined;
    return message;
  },

  toJSON(message: QueryUserVaultResponse): unknown {
    const obj: any = {};
    message.userVault !== undefined &&
      (obj.userVault = message.userVault
        ? UserVault.toJSON(message.userVault)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryUserVaultResponse>
  ): QueryUserVaultResponse {
    const message = { ...baseQueryUserVaultResponse } as QueryUserVaultResponse;
    message.userVault =
      object.userVault !== undefined && object.userVault !== null
        ? UserVault.fromPartial(object.userVault)
        : undefined;
    return message;
  },
};

const baseQueryAllUserVaultRequest: object = {};

export const QueryAllUserVaultRequest = {
  encode(
    message: QueryAllUserVaultRequest,
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
  ): QueryAllUserVaultRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllUserVaultRequest,
    } as QueryAllUserVaultRequest;
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

  fromJSON(object: any): QueryAllUserVaultRequest {
    const message = {
      ...baseQueryAllUserVaultRequest,
    } as QueryAllUserVaultRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllUserVaultRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllUserVaultRequest>
  ): QueryAllUserVaultRequest {
    const message = {
      ...baseQueryAllUserVaultRequest,
    } as QueryAllUserVaultRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllUserVaultResponse: object = {};

export const QueryAllUserVaultResponse = {
  encode(
    message: QueryAllUserVaultResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.userVaults) {
      UserVault.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllUserVaultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllUserVaultResponse,
    } as QueryAllUserVaultResponse;
    message.userVaults = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userVaults.push(UserVault.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllUserVaultResponse {
    const message = {
      ...baseQueryAllUserVaultResponse,
    } as QueryAllUserVaultResponse;
    message.userVaults = (object.userVaults ?? []).map((e: any) =>
      UserVault.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllUserVaultResponse): unknown {
    const obj: any = {};
    if (message.userVaults) {
      obj.userVaults = message.userVaults.map((e) =>
        e ? UserVault.toJSON(e) : undefined
      );
    } else {
      obj.userVaults = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllUserVaultResponse>
  ): QueryAllUserVaultResponse {
    const message = {
      ...baseQueryAllUserVaultResponse,
    } as QueryAllUserVaultResponse;
    message.userVaults = (object.userVaults ?? []).map((e) =>
      UserVault.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllUserVaultPendingWithdrawalsRequest: object = {};

export const QueryAllUserVaultPendingWithdrawalsRequest = {
  encode(
    message: QueryAllUserVaultPendingWithdrawalsRequest,
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
  ): QueryAllUserVaultPendingWithdrawalsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllUserVaultPendingWithdrawalsRequest,
    } as QueryAllUserVaultPendingWithdrawalsRequest;
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

  fromJSON(object: any): QueryAllUserVaultPendingWithdrawalsRequest {
    const message = {
      ...baseQueryAllUserVaultPendingWithdrawalsRequest,
    } as QueryAllUserVaultPendingWithdrawalsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllUserVaultPendingWithdrawalsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllUserVaultPendingWithdrawalsRequest>
  ): QueryAllUserVaultPendingWithdrawalsRequest {
    const message = {
      ...baseQueryAllUserVaultPendingWithdrawalsRequest,
    } as QueryAllUserVaultPendingWithdrawalsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllUserVaultPendingWithdrawalsResponse: object = {};

export const QueryAllUserVaultPendingWithdrawalsResponse = {
  encode(
    message: QueryAllUserVaultPendingWithdrawalsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.withdrawals) {
      UserVaultWithdrawalRecord.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllUserVaultPendingWithdrawalsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllUserVaultPendingWithdrawalsResponse,
    } as QueryAllUserVaultPendingWithdrawalsResponse;
    message.withdrawals = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawals.push(
            UserVaultWithdrawalRecord.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllUserVaultPendingWithdrawalsResponse {
    const message = {
      ...baseQueryAllUserVaultPendingWithdrawalsResponse,
    } as QueryAllUserVaultPendingWithdrawalsResponse;
    message.withdrawals = (object.withdrawals ?? []).map((e: any) =>
      UserVaultWithdrawalRecord.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllUserVaultPendingWithdrawalsResponse): unknown {
    const obj: any = {};
    if (message.withdrawals) {
      obj.withdrawals = message.withdrawals.map((e) =>
        e ? UserVaultWithdrawalRecord.toJSON(e) : undefined
      );
    } else {
      obj.withdrawals = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllUserVaultPendingWithdrawalsResponse>
  ): QueryAllUserVaultPendingWithdrawalsResponse {
    const message = {
      ...baseQueryAllUserVaultPendingWithdrawalsResponse,
    } as QueryAllUserVaultPendingWithdrawalsResponse;
    message.withdrawals = (object.withdrawals ?? []).map((e) =>
      UserVaultWithdrawalRecord.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryUserVaultPendingWithdrawalsRequest: object = { id: Long.UZERO };

export const QueryUserVaultPendingWithdrawalsRequest = {
  encode(
    message: QueryUserVaultPendingWithdrawalsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUserVaultPendingWithdrawalsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryUserVaultPendingWithdrawalsRequest,
    } as QueryUserVaultPendingWithdrawalsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUserVaultPendingWithdrawalsRequest {
    const message = {
      ...baseQueryUserVaultPendingWithdrawalsRequest,
    } as QueryUserVaultPendingWithdrawalsRequest;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromString(object.id)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryUserVaultPendingWithdrawalsRequest): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryUserVaultPendingWithdrawalsRequest>
  ): QueryUserVaultPendingWithdrawalsRequest {
    const message = {
      ...baseQueryUserVaultPendingWithdrawalsRequest,
    } as QueryUserVaultPendingWithdrawalsRequest;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryUserVaultPendingWithdrawalsResponse: object = {};

export const QueryUserVaultPendingWithdrawalsResponse = {
  encode(
    message: QueryUserVaultPendingWithdrawalsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.withdrawals) {
      UserVaultWithdrawalRecord.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryUserVaultPendingWithdrawalsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryUserVaultPendingWithdrawalsResponse,
    } as QueryUserVaultPendingWithdrawalsResponse;
    message.withdrawals = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawals.push(
            UserVaultWithdrawalRecord.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryUserVaultPendingWithdrawalsResponse {
    const message = {
      ...baseQueryUserVaultPendingWithdrawalsResponse,
    } as QueryUserVaultPendingWithdrawalsResponse;
    message.withdrawals = (object.withdrawals ?? []).map((e: any) =>
      UserVaultWithdrawalRecord.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryUserVaultPendingWithdrawalsResponse): unknown {
    const obj: any = {};
    if (message.withdrawals) {
      obj.withdrawals = message.withdrawals.map((e) =>
        e ? UserVaultWithdrawalRecord.toJSON(e) : undefined
      );
    } else {
      obj.withdrawals = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryUserVaultPendingWithdrawalsResponse>
  ): QueryUserVaultPendingWithdrawalsResponse {
    const message = {
      ...baseQueryUserVaultPendingWithdrawalsResponse,
    } as QueryUserVaultPendingWithdrawalsResponse;
    message.withdrawals = (object.withdrawals ?? []).map((e) =>
      UserVaultWithdrawalRecord.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryUserVaultInfoRequest: object = { id: "" };

export const QueryUserVaultInfoRequest = {
  encode(
    message: QueryUserVaultInfoRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUserVaultInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryUserVaultInfoRequest,
    } as QueryUserVaultInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUserVaultInfoRequest {
    const message = {
      ...baseQueryUserVaultInfoRequest,
    } as QueryUserVaultInfoRequest;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    return message;
  },

  toJSON(message: QueryUserVaultInfoRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryUserVaultInfoRequest>
  ): QueryUserVaultInfoRequest {
    const message = {
      ...baseQueryUserVaultInfoRequest,
    } as QueryUserVaultInfoRequest;
    message.id = object.id ?? "";
    return message;
  },
};

const baseQueryUserVaultInfoResponse: object = {};

export const QueryUserVaultInfoResponse = {
  encode(
    message: QueryUserVaultInfoResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.vault !== undefined) {
      VaultInfo.encode(message.vault, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUserVaultInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryUserVaultInfoResponse,
    } as QueryUserVaultInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vault = VaultInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUserVaultInfoResponse {
    const message = {
      ...baseQueryUserVaultInfoResponse,
    } as QueryUserVaultInfoResponse;
    message.vault =
      object.vault !== undefined && object.vault !== null
        ? VaultInfo.fromJSON(object.vault)
        : undefined;
    return message;
  },

  toJSON(message: QueryUserVaultInfoResponse): unknown {
    const obj: any = {};
    message.vault !== undefined &&
      (obj.vault = message.vault ? VaultInfo.toJSON(message.vault) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryUserVaultInfoResponse>
  ): QueryUserVaultInfoResponse {
    const message = {
      ...baseQueryUserVaultInfoResponse,
    } as QueryUserVaultInfoResponse;
    message.vault =
      object.vault !== undefined && object.vault !== null
        ? VaultInfo.fromPartial(object.vault)
        : undefined;
    return message;
  },
};

const baseQueryAllUserVaultInfoRequest: object = {};

export const QueryAllUserVaultInfoRequest = {
  encode(
    message: QueryAllUserVaultInfoRequest,
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
  ): QueryAllUserVaultInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllUserVaultInfoRequest,
    } as QueryAllUserVaultInfoRequest;
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

  fromJSON(object: any): QueryAllUserVaultInfoRequest {
    const message = {
      ...baseQueryAllUserVaultInfoRequest,
    } as QueryAllUserVaultInfoRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllUserVaultInfoRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllUserVaultInfoRequest>
  ): QueryAllUserVaultInfoRequest {
    const message = {
      ...baseQueryAllUserVaultInfoRequest,
    } as QueryAllUserVaultInfoRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllUserVaultInfoResponse: object = {};

export const QueryAllUserVaultInfoResponse = {
  encode(
    message: QueryAllUserVaultInfoResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.vaults) {
      VaultInfo.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllUserVaultInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllUserVaultInfoResponse,
    } as QueryAllUserVaultInfoResponse;
    message.vaults = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaults.push(VaultInfo.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllUserVaultInfoResponse {
    const message = {
      ...baseQueryAllUserVaultInfoResponse,
    } as QueryAllUserVaultInfoResponse;
    message.vaults = (object.vaults ?? []).map((e: any) =>
      VaultInfo.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllUserVaultInfoResponse): unknown {
    const obj: any = {};
    if (message.vaults) {
      obj.vaults = message.vaults.map((e) =>
        e ? VaultInfo.toJSON(e) : undefined
      );
    } else {
      obj.vaults = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllUserVaultInfoResponse>
  ): QueryAllUserVaultInfoResponse {
    const message = {
      ...baseQueryAllUserVaultInfoResponse,
    } as QueryAllUserVaultInfoResponse;
    message.vaults = (object.vaults ?? []).map((e) => VaultInfo.fromPartial(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryUserVaultsByControllerRequest: object = { controller: "" };

export const QueryUserVaultsByControllerRequest = {
  encode(
    message: QueryUserVaultsByControllerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.controller !== "") {
      writer.uint32(10).string(message.controller);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUserVaultsByControllerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryUserVaultsByControllerRequest,
    } as QueryUserVaultsByControllerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.controller = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUserVaultsByControllerRequest {
    const message = {
      ...baseQueryUserVaultsByControllerRequest,
    } as QueryUserVaultsByControllerRequest;
    message.controller =
      object.controller !== undefined && object.controller !== null
        ? String(object.controller)
        : "";
    return message;
  },

  toJSON(message: QueryUserVaultsByControllerRequest): unknown {
    const obj: any = {};
    message.controller !== undefined && (obj.controller = message.controller);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryUserVaultsByControllerRequest>
  ): QueryUserVaultsByControllerRequest {
    const message = {
      ...baseQueryUserVaultsByControllerRequest,
    } as QueryUserVaultsByControllerRequest;
    message.controller = object.controller ?? "";
    return message;
  },
};

const baseQueryUserVaultsByControllerResponse: object = {};

export const QueryUserVaultsByControllerResponse = {
  encode(
    message: QueryUserVaultsByControllerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.userVaults) {
      UserVault.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUserVaultsByControllerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryUserVaultsByControllerResponse,
    } as QueryUserVaultsByControllerResponse;
    message.userVaults = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userVaults.push(UserVault.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUserVaultsByControllerResponse {
    const message = {
      ...baseQueryUserVaultsByControllerResponse,
    } as QueryUserVaultsByControllerResponse;
    message.userVaults = (object.userVaults ?? []).map((e: any) =>
      UserVault.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryUserVaultsByControllerResponse): unknown {
    const obj: any = {};
    if (message.userVaults) {
      obj.userVaults = message.userVaults.map((e) =>
        e ? UserVault.toJSON(e) : undefined
      );
    } else {
      obj.userVaults = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryUserVaultsByControllerResponse>
  ): QueryUserVaultsByControllerResponse {
    const message = {
      ...baseQueryUserVaultsByControllerResponse,
    } as QueryUserVaultsByControllerResponse;
    message.userVaults = (object.userVaults ?? []).map((e) =>
      UserVault.fromPartial(e)
    );
    return message;
  },
};

const baseVaultInfo: object = {
  id: Long.UZERO,
  totalShareAmount: "",
  totalNavAmount: "",
  availableAmount: "",
  totalInPositionAmount: "",
  totalInOrderAmount: "",
  totalUpnlAmount: "",
};

export const VaultInfo = {
  encode(
    message: VaultInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVaultInfo } as VaultInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
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
          message.totalInOrderAmount = reader.string();
          break;
        case 7:
          message.totalUpnlAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VaultInfo {
    const message = { ...baseVaultInfo } as VaultInfo;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromString(object.id)
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
    message.totalInOrderAmount =
      object.totalInOrderAmount !== undefined &&
      object.totalInOrderAmount !== null
        ? String(object.totalInOrderAmount)
        : "";
    message.totalUpnlAmount =
      object.totalUpnlAmount !== undefined && object.totalUpnlAmount !== null
        ? String(object.totalUpnlAmount)
        : "";
    return message;
  },

  toJSON(message: VaultInfo): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.totalShareAmount !== undefined &&
      (obj.totalShareAmount = message.totalShareAmount);
    message.totalNavAmount !== undefined &&
      (obj.totalNavAmount = message.totalNavAmount);
    message.availableAmount !== undefined &&
      (obj.availableAmount = message.availableAmount);
    message.totalInPositionAmount !== undefined &&
      (obj.totalInPositionAmount = message.totalInPositionAmount);
    message.totalInOrderAmount !== undefined &&
      (obj.totalInOrderAmount = message.totalInOrderAmount);
    message.totalUpnlAmount !== undefined &&
      (obj.totalUpnlAmount = message.totalUpnlAmount);
    return obj;
  },

  fromPartial(object: DeepPartial<VaultInfo>): VaultInfo {
    const message = { ...baseVaultInfo } as VaultInfo;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.totalShareAmount = object.totalShareAmount ?? "";
    message.totalNavAmount = object.totalNavAmount ?? "";
    message.availableAmount = object.availableAmount ?? "";
    message.totalInPositionAmount = object.totalInPositionAmount ?? "";
    message.totalInOrderAmount = object.totalInOrderAmount ?? "";
    message.totalUpnlAmount = object.totalUpnlAmount ?? "";
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
  /**
   * * UserVault Queries ** //
   * Get user vault by id
   */
  UserVault(request: QueryUserVaultRequest): Promise<QueryUserVaultResponse>;
  /** Get all user vaults */
  UserVaultAll(
    request: QueryAllUserVaultRequest
  ): Promise<QueryAllUserVaultResponse>;
  /** Get all pending user vault withdrawals waiting for release */
  UserVaultPendingWithdrawals(
    request: QueryAllUserVaultPendingWithdrawalsRequest
  ): Promise<QueryAllUserVaultPendingWithdrawalsResponse>;
  /** Get pending user vault withdrawals for a user vault */
  UserVaultPendingWithdrawalsByVault(
    request: QueryUserVaultPendingWithdrawalsRequest
  ): Promise<QueryUserVaultPendingWithdrawalsResponse>;
  /** Get all user vault infos */
  UserVaultInfoAll(
    request: QueryAllUserVaultInfoRequest
  ): Promise<QueryAllUserVaultInfoResponse>;
  /** Get all user vaults that the user is a controller for */
  UserVaultsByController(
    request: QueryUserVaultsByControllerRequest
  ): Promise<QueryUserVaultsByControllerResponse>;
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
    this.UserVault = this.UserVault.bind(this);
    this.UserVaultAll = this.UserVaultAll.bind(this);
    this.UserVaultPendingWithdrawals =
      this.UserVaultPendingWithdrawals.bind(this);
    this.UserVaultPendingWithdrawalsByVault =
      this.UserVaultPendingWithdrawalsByVault.bind(this);
    this.UserVaultInfoAll = this.UserVaultInfoAll.bind(this);
    this.UserVaultsByController = this.UserVaultsByController.bind(this);
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

  UserVault(request: QueryUserVaultRequest): Promise<QueryUserVaultResponse> {
    const data = QueryUserVaultRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpspool.Query",
      "UserVault",
      data
    );
    return promise.then((data) =>
      QueryUserVaultResponse.decode(new _m0.Reader(data))
    );
  }

  UserVaultAll(
    request: QueryAllUserVaultRequest
  ): Promise<QueryAllUserVaultResponse> {
    const data = QueryAllUserVaultRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpspool.Query",
      "UserVaultAll",
      data
    );
    return promise.then((data) =>
      QueryAllUserVaultResponse.decode(new _m0.Reader(data))
    );
  }

  UserVaultPendingWithdrawals(
    request: QueryAllUserVaultPendingWithdrawalsRequest
  ): Promise<QueryAllUserVaultPendingWithdrawalsResponse> {
    const data =
      QueryAllUserVaultPendingWithdrawalsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpspool.Query",
      "UserVaultPendingWithdrawals",
      data
    );
    return promise.then((data) =>
      QueryAllUserVaultPendingWithdrawalsResponse.decode(new _m0.Reader(data))
    );
  }

  UserVaultPendingWithdrawalsByVault(
    request: QueryUserVaultPendingWithdrawalsRequest
  ): Promise<QueryUserVaultPendingWithdrawalsResponse> {
    const data =
      QueryUserVaultPendingWithdrawalsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpspool.Query",
      "UserVaultPendingWithdrawalsByVault",
      data
    );
    return promise.then((data) =>
      QueryUserVaultPendingWithdrawalsResponse.decode(new _m0.Reader(data))
    );
  }

  UserVaultInfoAll(
    request: QueryAllUserVaultInfoRequest
  ): Promise<QueryAllUserVaultInfoResponse> {
    const data = QueryAllUserVaultInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpspool.Query",
      "UserVaultInfoAll",
      data
    );
    return promise.then((data) =>
      QueryAllUserVaultInfoResponse.decode(new _m0.Reader(data))
    );
  }

  UserVaultsByController(
    request: QueryUserVaultsByControllerRequest
  ): Promise<QueryUserVaultsByControllerResponse> {
    const data = QueryUserVaultsByControllerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpspool.Query",
      "UserVaultsByController",
      data
    );
    return promise.then((data) =>
      QueryUserVaultsByControllerResponse.decode(new _m0.Reader(data))
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
