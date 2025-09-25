/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Pool, PoolRoute } from "./liquiditypool";
import { Params } from "./params";
import { Commitment, CommitmentCurve, CommitmentResponse, RewardCurve, TotalCommitmentRecord } from "./reward";

export const protobufPackage = "Switcheo.carbon.liquiditypool";

/** this line is used by starport scaffolding # 3 */
export interface QueryGetPoolRequest {
  id: Long;
}

export interface QueryGetPoolResponse {
  pool?: ExtendedPool;
}

export interface QueryAllPoolRequest {
  pagination?: PageRequest;
}

export interface QueryAllPoolResponse {
  pools: ExtendedPool[];
  pagination?: PageResponse;
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

export interface ExtendedPool {
  pool?: Pool;
  rewardsWeight: string;
  totalCommitment: string;
  rewardPerCommitmentShare: DecCoin[];
}

export interface QueryCommitmentRequest {
  poolId: string;
  address: string;
}

export interface QueryCommitmentResponse {
  commitment?: CommitmentResponse;
}

export interface QueryAllCommitmentRequest {
  address: string;
  pagination?: PageRequest;
}

export interface QueryAllCommitmentResponse {
  commitments: Commitment[];
  pagination?: PageResponse;
  blockTime?: Date;
}

export interface QueryCommitmentCurveRequest {
}

export interface QueryCommitmentCurveResponse {
  commitmentCurve?: CommitmentCurve;
}

export interface QueryRewardCurveRequest {
}

export interface QueryRewardCurveResponse {
  rewardCurve?: RewardCurve;
}

export interface QueryTotalCommitmentRequest {
  poolId: Long;
}

export interface QueryTotalCommitmentResponse {
  totalCommitment: string;
}

export interface QueryAllTotalCommitmentRequest {
  pagination?: PageRequest;
}

export interface QueryAllTotalCommitmentResponse {
  totalCommitments: TotalCommitmentRecord[];
  pagination?: PageResponse;
}

export interface QueryClaimableRewardsRequest {
  poolId: Long;
  address: string;
}

export interface QueryClaimableRewardsResponse {
  rewards: DecCoin[];
}

export interface QueryAllocatedRewardsRequest {
}

export interface QueryAllocatedRewardsResponse {
  rewards: DecCoin[];
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

export interface QueryAllPoolRouteRequest {
  pagination?: PageRequest;
}

export interface QueryAllPoolRouteResponse {
  poolRoutes: PoolRoute[];
  pagination?: PageResponse;
}

export interface QueryAllPoolRouteAddressRequest {
  pagination?: PageRequest;
}

export interface QueryAllPoolRouteAddressResponse {
  addresses: { [key: string]: string };
  pagination?: PageResponse;
}

export interface QueryAllPoolRouteAddressResponse_AddressesEntry {
  key: string;
  value: string;
}

function createBaseQueryGetPoolRequest(): QueryGetPoolRequest {
  return { id: Long.UZERO };
}

export const QueryGetPoolRequest = {
  encode(message: QueryGetPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
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

  fromJSON(object: any): QueryGetPoolRequest {
    return { id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO };
  },

  toJSON(message: QueryGetPoolRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<QueryGetPoolRequest>): QueryGetPoolRequest {
    return QueryGetPoolRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetPoolRequest>): QueryGetPoolRequest {
    const message = createBaseQueryGetPoolRequest();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
};

function createBaseQueryGetPoolResponse(): QueryGetPoolResponse {
  return { pool: undefined };
}

export const QueryGetPoolResponse = {
  encode(message: QueryGetPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      ExtendedPool.encode(message.pool, writer.uint32(10).fork()).ldelim();
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

          message.pool = ExtendedPool.decode(reader, reader.uint32());
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
    return { pool: isSet(object.pool) ? ExtendedPool.fromJSON(object.pool) : undefined };
  },

  toJSON(message: QueryGetPoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? ExtendedPool.toJSON(message.pool) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryGetPoolResponse>): QueryGetPoolResponse {
    return QueryGetPoolResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetPoolResponse>): QueryGetPoolResponse {
    const message = createBaseQueryGetPoolResponse();
    message.pool = (object.pool !== undefined && object.pool !== null)
      ? ExtendedPool.fromPartial(object.pool)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPoolRequest(): QueryAllPoolRequest {
  return { pagination: undefined };
}

export const QueryAllPoolRequest = {
  encode(message: QueryAllPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolRequest();
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

  fromJSON(object: any): QueryAllPoolRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllPoolRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllPoolRequest>): QueryAllPoolRequest {
    return QueryAllPoolRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllPoolRequest>): QueryAllPoolRequest {
    const message = createBaseQueryAllPoolRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPoolResponse(): QueryAllPoolResponse {
  return { pools: [], pagination: undefined };
}

export const QueryAllPoolResponse = {
  encode(message: QueryAllPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pools) {
      ExtendedPool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pools.push(ExtendedPool.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPoolResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => ExtendedPool.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPoolResponse): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map((e) => e ? ExtendedPool.toJSON(e) : undefined);
    } else {
      obj.pools = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllPoolResponse>): QueryAllPoolResponse {
    return QueryAllPoolResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllPoolResponse>): QueryAllPoolResponse {
    const message = createBaseQueryAllPoolResponse();
    message.pools = object.pools?.map((e) => ExtendedPool.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
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

function createBaseExtendedPool(): ExtendedPool {
  return { pool: undefined, rewardsWeight: "", totalCommitment: "", rewardPerCommitmentShare: [] };
}

export const ExtendedPool = {
  encode(message: ExtendedPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    if (message.rewardsWeight !== "") {
      writer.uint32(18).string(message.rewardsWeight);
    }
    if (message.totalCommitment !== "") {
      writer.uint32(26).string(message.totalCommitment);
    }
    for (const v of message.rewardPerCommitmentShare) {
      DecCoin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExtendedPool {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtendedPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pool = Pool.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.rewardsWeight = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.totalCommitment = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.rewardPerCommitmentShare.push(DecCoin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExtendedPool {
    return {
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined,
      rewardsWeight: isSet(object.rewardsWeight) ? String(object.rewardsWeight) : "",
      totalCommitment: isSet(object.totalCommitment) ? String(object.totalCommitment) : "",
      rewardPerCommitmentShare: Array.isArray(object?.rewardPerCommitmentShare)
        ? object.rewardPerCommitmentShare.map((e: any) => DecCoin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ExtendedPool): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    message.rewardsWeight !== undefined && (obj.rewardsWeight = message.rewardsWeight);
    message.totalCommitment !== undefined && (obj.totalCommitment = message.totalCommitment);
    if (message.rewardPerCommitmentShare) {
      obj.rewardPerCommitmentShare = message.rewardPerCommitmentShare.map((e) => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.rewardPerCommitmentShare = [];
    }
    return obj;
  },

  create(base?: DeepPartial<ExtendedPool>): ExtendedPool {
    return ExtendedPool.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ExtendedPool>): ExtendedPool {
    const message = createBaseExtendedPool();
    message.pool = (object.pool !== undefined && object.pool !== null) ? Pool.fromPartial(object.pool) : undefined;
    message.rewardsWeight = object.rewardsWeight ?? "";
    message.totalCommitment = object.totalCommitment ?? "";
    message.rewardPerCommitmentShare = object.rewardPerCommitmentShare?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryCommitmentRequest(): QueryCommitmentRequest {
  return { poolId: "", address: "" };
}

export const QueryCommitmentRequest = {
  encode(message: QueryCommitmentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommitmentRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommitmentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.poolId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCommitmentRequest {
    return {
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: QueryCommitmentRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<QueryCommitmentRequest>): QueryCommitmentRequest {
    return QueryCommitmentRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryCommitmentRequest>): QueryCommitmentRequest {
    const message = createBaseQueryCommitmentRequest();
    message.poolId = object.poolId ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryCommitmentResponse(): QueryCommitmentResponse {
  return { commitment: undefined };
}

export const QueryCommitmentResponse = {
  encode(message: QueryCommitmentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commitment !== undefined) {
      CommitmentResponse.encode(message.commitment, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommitmentResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommitmentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.commitment = CommitmentResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCommitmentResponse {
    return { commitment: isSet(object.commitment) ? CommitmentResponse.fromJSON(object.commitment) : undefined };
  },

  toJSON(message: QueryCommitmentResponse): unknown {
    const obj: any = {};
    message.commitment !== undefined &&
      (obj.commitment = message.commitment ? CommitmentResponse.toJSON(message.commitment) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryCommitmentResponse>): QueryCommitmentResponse {
    return QueryCommitmentResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryCommitmentResponse>): QueryCommitmentResponse {
    const message = createBaseQueryCommitmentResponse();
    message.commitment = (object.commitment !== undefined && object.commitment !== null)
      ? CommitmentResponse.fromPartial(object.commitment)
      : undefined;
    return message;
  },
};

function createBaseQueryAllCommitmentRequest(): QueryAllCommitmentRequest {
  return { address: "", pagination: undefined };
}

export const QueryAllCommitmentRequest = {
  encode(message: QueryAllCommitmentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllCommitmentRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllCommitmentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
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

  fromJSON(object: any): QueryAllCommitmentRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllCommitmentRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllCommitmentRequest>): QueryAllCommitmentRequest {
    return QueryAllCommitmentRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllCommitmentRequest>): QueryAllCommitmentRequest {
    const message = createBaseQueryAllCommitmentRequest();
    message.address = object.address ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllCommitmentResponse(): QueryAllCommitmentResponse {
  return { commitments: [], pagination: undefined, blockTime: undefined };
}

export const QueryAllCommitmentResponse = {
  encode(message: QueryAllCommitmentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.commitments) {
      Commitment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(toTimestamp(message.blockTime), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllCommitmentResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllCommitmentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.commitments.push(Commitment.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.blockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllCommitmentResponse {
    return {
      commitments: Array.isArray(object?.commitments) ? object.commitments.map((e: any) => Commitment.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
      blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined,
    };
  },

  toJSON(message: QueryAllCommitmentResponse): unknown {
    const obj: any = {};
    if (message.commitments) {
      obj.commitments = message.commitments.map((e) => e ? Commitment.toJSON(e) : undefined);
    } else {
      obj.commitments = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    message.blockTime !== undefined && (obj.blockTime = message.blockTime.toISOString());
    return obj;
  },

  create(base?: DeepPartial<QueryAllCommitmentResponse>): QueryAllCommitmentResponse {
    return QueryAllCommitmentResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllCommitmentResponse>): QueryAllCommitmentResponse {
    const message = createBaseQueryAllCommitmentResponse();
    message.commitments = object.commitments?.map((e) => Commitment.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    message.blockTime = object.blockTime ?? undefined;
    return message;
  },
};

function createBaseQueryCommitmentCurveRequest(): QueryCommitmentCurveRequest {
  return {};
}

export const QueryCommitmentCurveRequest = {
  encode(_: QueryCommitmentCurveRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommitmentCurveRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommitmentCurveRequest();
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

  fromJSON(_: any): QueryCommitmentCurveRequest {
    return {};
  },

  toJSON(_: QueryCommitmentCurveRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryCommitmentCurveRequest>): QueryCommitmentCurveRequest {
    return QueryCommitmentCurveRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryCommitmentCurveRequest>): QueryCommitmentCurveRequest {
    const message = createBaseQueryCommitmentCurveRequest();
    return message;
  },
};

function createBaseQueryCommitmentCurveResponse(): QueryCommitmentCurveResponse {
  return { commitmentCurve: undefined };
}

export const QueryCommitmentCurveResponse = {
  encode(message: QueryCommitmentCurveResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commitmentCurve !== undefined) {
      CommitmentCurve.encode(message.commitmentCurve, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommitmentCurveResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommitmentCurveResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.commitmentCurve = CommitmentCurve.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCommitmentCurveResponse {
    return {
      commitmentCurve: isSet(object.commitmentCurve) ? CommitmentCurve.fromJSON(object.commitmentCurve) : undefined,
    };
  },

  toJSON(message: QueryCommitmentCurveResponse): unknown {
    const obj: any = {};
    message.commitmentCurve !== undefined &&
      (obj.commitmentCurve = message.commitmentCurve ? CommitmentCurve.toJSON(message.commitmentCurve) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryCommitmentCurveResponse>): QueryCommitmentCurveResponse {
    return QueryCommitmentCurveResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryCommitmentCurveResponse>): QueryCommitmentCurveResponse {
    const message = createBaseQueryCommitmentCurveResponse();
    message.commitmentCurve = (object.commitmentCurve !== undefined && object.commitmentCurve !== null)
      ? CommitmentCurve.fromPartial(object.commitmentCurve)
      : undefined;
    return message;
  },
};

function createBaseQueryRewardCurveRequest(): QueryRewardCurveRequest {
  return {};
}

export const QueryRewardCurveRequest = {
  encode(_: QueryRewardCurveRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRewardCurveRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardCurveRequest();
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

  fromJSON(_: any): QueryRewardCurveRequest {
    return {};
  },

  toJSON(_: QueryRewardCurveRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryRewardCurveRequest>): QueryRewardCurveRequest {
    return QueryRewardCurveRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryRewardCurveRequest>): QueryRewardCurveRequest {
    const message = createBaseQueryRewardCurveRequest();
    return message;
  },
};

function createBaseQueryRewardCurveResponse(): QueryRewardCurveResponse {
  return { rewardCurve: undefined };
}

export const QueryRewardCurveResponse = {
  encode(message: QueryRewardCurveResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardCurve !== undefined) {
      RewardCurve.encode(message.rewardCurve, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRewardCurveResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardCurveResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rewardCurve = RewardCurve.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryRewardCurveResponse {
    return { rewardCurve: isSet(object.rewardCurve) ? RewardCurve.fromJSON(object.rewardCurve) : undefined };
  },

  toJSON(message: QueryRewardCurveResponse): unknown {
    const obj: any = {};
    message.rewardCurve !== undefined &&
      (obj.rewardCurve = message.rewardCurve ? RewardCurve.toJSON(message.rewardCurve) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryRewardCurveResponse>): QueryRewardCurveResponse {
    return QueryRewardCurveResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryRewardCurveResponse>): QueryRewardCurveResponse {
    const message = createBaseQueryRewardCurveResponse();
    message.rewardCurve = (object.rewardCurve !== undefined && object.rewardCurve !== null)
      ? RewardCurve.fromPartial(object.rewardCurve)
      : undefined;
    return message;
  },
};

function createBaseQueryTotalCommitmentRequest(): QueryTotalCommitmentRequest {
  return { poolId: Long.UZERO };
}

export const QueryTotalCommitmentRequest = {
  encode(message: QueryTotalCommitmentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalCommitmentRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalCommitmentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.poolId = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTotalCommitmentRequest {
    return { poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO };
  },

  toJSON(message: QueryTotalCommitmentRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<QueryTotalCommitmentRequest>): QueryTotalCommitmentRequest {
    return QueryTotalCommitmentRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryTotalCommitmentRequest>): QueryTotalCommitmentRequest {
    const message = createBaseQueryTotalCommitmentRequest();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    return message;
  },
};

function createBaseQueryTotalCommitmentResponse(): QueryTotalCommitmentResponse {
  return { totalCommitment: "" };
}

export const QueryTotalCommitmentResponse = {
  encode(message: QueryTotalCommitmentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalCommitment !== "") {
      writer.uint32(10).string(message.totalCommitment);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalCommitmentResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalCommitmentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.totalCommitment = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTotalCommitmentResponse {
    return { totalCommitment: isSet(object.totalCommitment) ? String(object.totalCommitment) : "" };
  },

  toJSON(message: QueryTotalCommitmentResponse): unknown {
    const obj: any = {};
    message.totalCommitment !== undefined && (obj.totalCommitment = message.totalCommitment);
    return obj;
  },

  create(base?: DeepPartial<QueryTotalCommitmentResponse>): QueryTotalCommitmentResponse {
    return QueryTotalCommitmentResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryTotalCommitmentResponse>): QueryTotalCommitmentResponse {
    const message = createBaseQueryTotalCommitmentResponse();
    message.totalCommitment = object.totalCommitment ?? "";
    return message;
  },
};

function createBaseQueryAllTotalCommitmentRequest(): QueryAllTotalCommitmentRequest {
  return { pagination: undefined };
}

export const QueryAllTotalCommitmentRequest = {
  encode(message: QueryAllTotalCommitmentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTotalCommitmentRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTotalCommitmentRequest();
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

  fromJSON(object: any): QueryAllTotalCommitmentRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllTotalCommitmentRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllTotalCommitmentRequest>): QueryAllTotalCommitmentRequest {
    return QueryAllTotalCommitmentRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllTotalCommitmentRequest>): QueryAllTotalCommitmentRequest {
    const message = createBaseQueryAllTotalCommitmentRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllTotalCommitmentResponse(): QueryAllTotalCommitmentResponse {
  return { totalCommitments: [], pagination: undefined };
}

export const QueryAllTotalCommitmentResponse = {
  encode(message: QueryAllTotalCommitmentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.totalCommitments) {
      TotalCommitmentRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTotalCommitmentResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTotalCommitmentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.totalCommitments.push(TotalCommitmentRecord.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllTotalCommitmentResponse {
    return {
      totalCommitments: Array.isArray(object?.totalCommitments)
        ? object.totalCommitments.map((e: any) => TotalCommitmentRecord.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllTotalCommitmentResponse): unknown {
    const obj: any = {};
    if (message.totalCommitments) {
      obj.totalCommitments = message.totalCommitments.map((e) => e ? TotalCommitmentRecord.toJSON(e) : undefined);
    } else {
      obj.totalCommitments = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllTotalCommitmentResponse>): QueryAllTotalCommitmentResponse {
    return QueryAllTotalCommitmentResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllTotalCommitmentResponse>): QueryAllTotalCommitmentResponse {
    const message = createBaseQueryAllTotalCommitmentResponse();
    message.totalCommitments = object.totalCommitments?.map((e) => TotalCommitmentRecord.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryClaimableRewardsRequest(): QueryClaimableRewardsRequest {
  return { poolId: Long.UZERO, address: "" };
}

export const QueryClaimableRewardsRequest = {
  encode(message: QueryClaimableRewardsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimableRewardsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimableRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.poolId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryClaimableRewardsRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: QueryClaimableRewardsRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<QueryClaimableRewardsRequest>): QueryClaimableRewardsRequest {
    return QueryClaimableRewardsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryClaimableRewardsRequest>): QueryClaimableRewardsRequest {
    const message = createBaseQueryClaimableRewardsRequest();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryClaimableRewardsResponse(): QueryClaimableRewardsResponse {
  return { rewards: [] };
}

export const QueryClaimableRewardsResponse = {
  encode(message: QueryClaimableRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimableRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimableRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryClaimableRewardsResponse {
    return { rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => DecCoin.fromJSON(e)) : [] };
  },

  toJSON(message: QueryClaimableRewardsResponse): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryClaimableRewardsResponse>): QueryClaimableRewardsResponse {
    return QueryClaimableRewardsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryClaimableRewardsResponse>): QueryClaimableRewardsResponse {
    const message = createBaseQueryClaimableRewardsResponse();
    message.rewards = object.rewards?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryAllocatedRewardsRequest(): QueryAllocatedRewardsRequest {
  return {};
}

export const QueryAllocatedRewardsRequest = {
  encode(_: QueryAllocatedRewardsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllocatedRewardsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllocatedRewardsRequest();
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

  fromJSON(_: any): QueryAllocatedRewardsRequest {
    return {};
  },

  toJSON(_: QueryAllocatedRewardsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryAllocatedRewardsRequest>): QueryAllocatedRewardsRequest {
    return QueryAllocatedRewardsRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryAllocatedRewardsRequest>): QueryAllocatedRewardsRequest {
    const message = createBaseQueryAllocatedRewardsRequest();
    return message;
  },
};

function createBaseQueryAllocatedRewardsResponse(): QueryAllocatedRewardsResponse {
  return { rewards: [] };
}

export const QueryAllocatedRewardsResponse = {
  encode(message: QueryAllocatedRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllocatedRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllocatedRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllocatedRewardsResponse {
    return { rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => DecCoin.fromJSON(e)) : [] };
  },

  toJSON(message: QueryAllocatedRewardsResponse): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryAllocatedRewardsResponse>): QueryAllocatedRewardsResponse {
    return QueryAllocatedRewardsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllocatedRewardsResponse>): QueryAllocatedRewardsResponse {
    const message = createBaseQueryAllocatedRewardsResponse();
    message.rewards = object.rewards?.map((e) => DecCoin.fromPartial(e)) || [];
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

function createBaseQueryAllPoolRouteRequest(): QueryAllPoolRouteRequest {
  return { pagination: undefined };
}

export const QueryAllPoolRouteRequest = {
  encode(message: QueryAllPoolRouteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolRouteRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolRouteRequest();
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

  fromJSON(object: any): QueryAllPoolRouteRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllPoolRouteRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllPoolRouteRequest>): QueryAllPoolRouteRequest {
    return QueryAllPoolRouteRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllPoolRouteRequest>): QueryAllPoolRouteRequest {
    const message = createBaseQueryAllPoolRouteRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPoolRouteResponse(): QueryAllPoolRouteResponse {
  return { poolRoutes: [], pagination: undefined };
}

export const QueryAllPoolRouteResponse = {
  encode(message: QueryAllPoolRouteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.poolRoutes) {
      PoolRoute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolRouteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolRouteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.poolRoutes.push(PoolRoute.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPoolRouteResponse {
    return {
      poolRoutes: Array.isArray(object?.poolRoutes) ? object.poolRoutes.map((e: any) => PoolRoute.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPoolRouteResponse): unknown {
    const obj: any = {};
    if (message.poolRoutes) {
      obj.poolRoutes = message.poolRoutes.map((e) => e ? PoolRoute.toJSON(e) : undefined);
    } else {
      obj.poolRoutes = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllPoolRouteResponse>): QueryAllPoolRouteResponse {
    return QueryAllPoolRouteResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllPoolRouteResponse>): QueryAllPoolRouteResponse {
    const message = createBaseQueryAllPoolRouteResponse();
    message.poolRoutes = object.poolRoutes?.map((e) => PoolRoute.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPoolRouteAddressRequest(): QueryAllPoolRouteAddressRequest {
  return { pagination: undefined };
}

export const QueryAllPoolRouteAddressRequest = {
  encode(message: QueryAllPoolRouteAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolRouteAddressRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolRouteAddressRequest();
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

  fromJSON(object: any): QueryAllPoolRouteAddressRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllPoolRouteAddressRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllPoolRouteAddressRequest>): QueryAllPoolRouteAddressRequest {
    return QueryAllPoolRouteAddressRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllPoolRouteAddressRequest>): QueryAllPoolRouteAddressRequest {
    const message = createBaseQueryAllPoolRouteAddressRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPoolRouteAddressResponse(): QueryAllPoolRouteAddressResponse {
  return { addresses: {}, pagination: undefined };
}

export const QueryAllPoolRouteAddressResponse = {
  encode(message: QueryAllPoolRouteAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.addresses).forEach(([key, value]) => {
      QueryAllPoolRouteAddressResponse_AddressesEntry.encode({ key: key as any, value }, writer.uint32(10).fork())
        .ldelim();
    });
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolRouteAddressResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolRouteAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = QueryAllPoolRouteAddressResponse_AddressesEntry.decode(reader, reader.uint32());
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

  fromJSON(object: any): QueryAllPoolRouteAddressResponse {
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

  toJSON(message: QueryAllPoolRouteAddressResponse): unknown {
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

  create(base?: DeepPartial<QueryAllPoolRouteAddressResponse>): QueryAllPoolRouteAddressResponse {
    return QueryAllPoolRouteAddressResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllPoolRouteAddressResponse>): QueryAllPoolRouteAddressResponse {
    const message = createBaseQueryAllPoolRouteAddressResponse();
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

function createBaseQueryAllPoolRouteAddressResponse_AddressesEntry(): QueryAllPoolRouteAddressResponse_AddressesEntry {
  return { key: "", value: "" };
}

export const QueryAllPoolRouteAddressResponse_AddressesEntry = {
  encode(
    message: QueryAllPoolRouteAddressResponse_AddressesEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolRouteAddressResponse_AddressesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolRouteAddressResponse_AddressesEntry();
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

  fromJSON(object: any): QueryAllPoolRouteAddressResponse_AddressesEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: QueryAllPoolRouteAddressResponse_AddressesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create(
    base?: DeepPartial<QueryAllPoolRouteAddressResponse_AddressesEntry>,
  ): QueryAllPoolRouteAddressResponse_AddressesEntry {
    return QueryAllPoolRouteAddressResponse_AddressesEntry.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<QueryAllPoolRouteAddressResponse_AddressesEntry>,
  ): QueryAllPoolRouteAddressResponse_AddressesEntry {
    const message = createBaseQueryAllPoolRouteAddressResponse_AddressesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Get addresses for all pools */
  PoolAddressAll(request: QueryAllPoolAddressRequest): Promise<QueryAllPoolAddressResponse>;
  /** Get pool details */
  Pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse>;
  /** Get details for all pools */
  PoolAll(request: QueryAllPoolRequest): Promise<QueryAllPoolResponse>;
  /** Get LP commitment for a pool and address */
  Commitment(request: QueryCommitmentRequest): Promise<QueryCommitmentResponse>;
  /** Get all LP commitments for an address */
  CommitmentAll(request: QueryAllCommitmentRequest): Promise<QueryAllCommitmentResponse>;
  /** Get the current commitment reward boost curve */
  CommitmentCurve(request: QueryCommitmentCurveRequest): Promise<QueryCommitmentCurveResponse>;
  /** Get the current LP reward curve */
  RewardCurve(request: QueryRewardCurveRequest): Promise<QueryRewardCurveResponse>;
  /** Get the total commitment power for a pool */
  TotalCommitment(request: QueryTotalCommitmentRequest): Promise<QueryTotalCommitmentResponse>;
  /** Get commitment powers for all pools */
  TotalCommitmentAll(request: QueryAllTotalCommitmentRequest): Promise<QueryAllTotalCommitmentResponse>;
  /** Get currently claimable rewards for a pool for the given address */
  ClaimableRewards(request: QueryClaimableRewardsRequest): Promise<QueryClaimableRewardsResponse>;
  /** Get allocated rewards */
  AllocatedRewards(request: QueryAllocatedRewardsRequest): Promise<QueryAllocatedRewardsResponse>;
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Get liquidity pool addresses for all pools */
  PoolRouteAll(request: QueryAllPoolRouteRequest): Promise<QueryAllPoolRouteResponse>;
  /** Get addresses for all pool route */
  PoolRouteAddressAll(request: QueryAllPoolRouteAddressRequest): Promise<QueryAllPoolRouteAddressResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.liquiditypool.Query";
    this.rpc = rpc;
    this.PoolAddressAll = this.PoolAddressAll.bind(this);
    this.Pool = this.Pool.bind(this);
    this.PoolAll = this.PoolAll.bind(this);
    this.Commitment = this.Commitment.bind(this);
    this.CommitmentAll = this.CommitmentAll.bind(this);
    this.CommitmentCurve = this.CommitmentCurve.bind(this);
    this.RewardCurve = this.RewardCurve.bind(this);
    this.TotalCommitment = this.TotalCommitment.bind(this);
    this.TotalCommitmentAll = this.TotalCommitmentAll.bind(this);
    this.ClaimableRewards = this.ClaimableRewards.bind(this);
    this.AllocatedRewards = this.AllocatedRewards.bind(this);
    this.Params = this.Params.bind(this);
    this.PoolRouteAll = this.PoolRouteAll.bind(this);
    this.PoolRouteAddressAll = this.PoolRouteAddressAll.bind(this);
  }
  PoolAddressAll(request: QueryAllPoolAddressRequest): Promise<QueryAllPoolAddressResponse> {
    const data = QueryAllPoolAddressRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PoolAddressAll", data);
    return promise.then((data) => QueryAllPoolAddressResponse.decode(_m0.Reader.create(data)));
  }

  Pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse> {
    const data = QueryGetPoolRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Pool", data);
    return promise.then((data) => QueryGetPoolResponse.decode(_m0.Reader.create(data)));
  }

  PoolAll(request: QueryAllPoolRequest): Promise<QueryAllPoolResponse> {
    const data = QueryAllPoolRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PoolAll", data);
    return promise.then((data) => QueryAllPoolResponse.decode(_m0.Reader.create(data)));
  }

  Commitment(request: QueryCommitmentRequest): Promise<QueryCommitmentResponse> {
    const data = QueryCommitmentRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Commitment", data);
    return promise.then((data) => QueryCommitmentResponse.decode(_m0.Reader.create(data)));
  }

  CommitmentAll(request: QueryAllCommitmentRequest): Promise<QueryAllCommitmentResponse> {
    const data = QueryAllCommitmentRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CommitmentAll", data);
    return promise.then((data) => QueryAllCommitmentResponse.decode(_m0.Reader.create(data)));
  }

  CommitmentCurve(request: QueryCommitmentCurveRequest): Promise<QueryCommitmentCurveResponse> {
    const data = QueryCommitmentCurveRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CommitmentCurve", data);
    return promise.then((data) => QueryCommitmentCurveResponse.decode(_m0.Reader.create(data)));
  }

  RewardCurve(request: QueryRewardCurveRequest): Promise<QueryRewardCurveResponse> {
    const data = QueryRewardCurveRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RewardCurve", data);
    return promise.then((data) => QueryRewardCurveResponse.decode(_m0.Reader.create(data)));
  }

  TotalCommitment(request: QueryTotalCommitmentRequest): Promise<QueryTotalCommitmentResponse> {
    const data = QueryTotalCommitmentRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "TotalCommitment", data);
    return promise.then((data) => QueryTotalCommitmentResponse.decode(_m0.Reader.create(data)));
  }

  TotalCommitmentAll(request: QueryAllTotalCommitmentRequest): Promise<QueryAllTotalCommitmentResponse> {
    const data = QueryAllTotalCommitmentRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "TotalCommitmentAll", data);
    return promise.then((data) => QueryAllTotalCommitmentResponse.decode(_m0.Reader.create(data)));
  }

  ClaimableRewards(request: QueryClaimableRewardsRequest): Promise<QueryClaimableRewardsResponse> {
    const data = QueryClaimableRewardsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ClaimableRewards", data);
    return promise.then((data) => QueryClaimableRewardsResponse.decode(_m0.Reader.create(data)));
  }

  AllocatedRewards(request: QueryAllocatedRewardsRequest): Promise<QueryAllocatedRewardsResponse> {
    const data = QueryAllocatedRewardsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllocatedRewards", data);
    return promise.then((data) => QueryAllocatedRewardsResponse.decode(_m0.Reader.create(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  PoolRouteAll(request: QueryAllPoolRouteRequest): Promise<QueryAllPoolRouteResponse> {
    const data = QueryAllPoolRouteRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PoolRouteAll", data);
    return promise.then((data) => QueryAllPoolRouteResponse.decode(_m0.Reader.create(data)));
  }

  PoolRouteAddressAll(request: QueryAllPoolRouteAddressRequest): Promise<QueryAllPoolRouteAddressResponse> {
    const data = QueryAllPoolRouteAddressRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PoolRouteAddressAll", data);
    return promise.then((data) => QueryAllPoolRouteAddressResponse.decode(_m0.Reader.create(data)));
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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds.toNumber() || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

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
