/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Pool, PoolRoute } from "./liquiditypool";
import {
  CommitmentResponse,
  CommitmentCurve,
  RewardCurve,
  Commitment,
  TotalCommitmentRecord,
} from "./reward";
import { Params } from "./params";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";

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

export interface QueryCommitmentCurveRequest {}

export interface QueryCommitmentCurveResponse {
  commitmentCurve?: CommitmentCurve;
}

export interface QueryRewardCurveRequest {}

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

export interface QueryAllocatedRewardsRequest {}

export interface QueryAllocatedRewardsResponse {
  rewards: DecCoin[];
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

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

const baseQueryGetPoolRequest: object = { id: Long.UZERO };

export const QueryGetPoolRequest = {
  encode(
    message: QueryGetPoolRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
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
          message.id = reader.uint64() as Long;
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
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromString(object.id)
        : Long.UZERO;
    return message;
  },

  toJSON(message: QueryGetPoolRequest): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetPoolRequest>): QueryGetPoolRequest {
    const message = { ...baseQueryGetPoolRequest } as QueryGetPoolRequest;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
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
      ExtendedPool.encode(message.pool, writer.uint32(10).fork()).ldelim();
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
          message.pool = ExtendedPool.decode(reader, reader.uint32());
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
        ? ExtendedPool.fromJSON(object.pool)
        : undefined;
    return message;
  },

  toJSON(message: QueryGetPoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined &&
      (obj.pool = message.pool ? ExtendedPool.toJSON(message.pool) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetPoolResponse>): QueryGetPoolResponse {
    const message = { ...baseQueryGetPoolResponse } as QueryGetPoolResponse;
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? ExtendedPool.fromPartial(object.pool)
        : undefined;
    return message;
  },
};

const baseQueryAllPoolRequest: object = {};

export const QueryAllPoolRequest = {
  encode(
    message: QueryAllPoolRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPoolRequest } as QueryAllPoolRequest;
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

  fromJSON(object: any): QueryAllPoolRequest {
    const message = { ...baseQueryAllPoolRequest } as QueryAllPoolRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllPoolRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllPoolRequest>): QueryAllPoolRequest {
    const message = { ...baseQueryAllPoolRequest } as QueryAllPoolRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllPoolResponse: object = {};

export const QueryAllPoolResponse = {
  encode(
    message: QueryAllPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.pools) {
      ExtendedPool.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPoolResponse } as QueryAllPoolResponse;
    message.pools = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(ExtendedPool.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPoolResponse {
    const message = { ...baseQueryAllPoolResponse } as QueryAllPoolResponse;
    message.pools = (object.pools ?? []).map((e: any) =>
      ExtendedPool.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllPoolResponse): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map((e) =>
        e ? ExtendedPool.toJSON(e) : undefined
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

  fromPartial(object: DeepPartial<QueryAllPoolResponse>): QueryAllPoolResponse {
    const message = { ...baseQueryAllPoolResponse } as QueryAllPoolResponse;
    message.pools = (object.pools ?? []).map((e) =>
      ExtendedPool.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
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

const baseExtendedPool: object = { rewardsWeight: "", totalCommitment: "" };

export const ExtendedPool = {
  encode(
    message: ExtendedPool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExtendedPool } as ExtendedPool;
    message.rewardPerCommitmentShare = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        case 2:
          message.rewardsWeight = reader.string();
          break;
        case 3:
          message.totalCommitment = reader.string();
          break;
        case 4:
          message.rewardPerCommitmentShare.push(
            DecCoin.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExtendedPool {
    const message = { ...baseExtendedPool } as ExtendedPool;
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? Pool.fromJSON(object.pool)
        : undefined;
    message.rewardsWeight =
      object.rewardsWeight !== undefined && object.rewardsWeight !== null
        ? String(object.rewardsWeight)
        : "";
    message.totalCommitment =
      object.totalCommitment !== undefined && object.totalCommitment !== null
        ? String(object.totalCommitment)
        : "";
    message.rewardPerCommitmentShare = (
      object.rewardPerCommitmentShare ?? []
    ).map((e: any) => DecCoin.fromJSON(e));
    return message;
  },

  toJSON(message: ExtendedPool): unknown {
    const obj: any = {};
    message.pool !== undefined &&
      (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    message.rewardsWeight !== undefined &&
      (obj.rewardsWeight = message.rewardsWeight);
    message.totalCommitment !== undefined &&
      (obj.totalCommitment = message.totalCommitment);
    if (message.rewardPerCommitmentShare) {
      obj.rewardPerCommitmentShare = message.rewardPerCommitmentShare.map((e) =>
        e ? DecCoin.toJSON(e) : undefined
      );
    } else {
      obj.rewardPerCommitmentShare = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ExtendedPool>): ExtendedPool {
    const message = { ...baseExtendedPool } as ExtendedPool;
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? Pool.fromPartial(object.pool)
        : undefined;
    message.rewardsWeight = object.rewardsWeight ?? "";
    message.totalCommitment = object.totalCommitment ?? "";
    message.rewardPerCommitmentShare = (
      object.rewardPerCommitmentShare ?? []
    ).map((e) => DecCoin.fromPartial(e));
    return message;
  },
};

const baseQueryCommitmentRequest: object = { poolId: "", address: "" };

export const QueryCommitmentRequest = {
  encode(
    message: QueryCommitmentRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCommitmentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCommitmentRequest } as QueryCommitmentRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCommitmentRequest {
    const message = { ...baseQueryCommitmentRequest } as QueryCommitmentRequest;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? String(object.poolId)
        : "";
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: QueryCommitmentRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCommitmentRequest>
  ): QueryCommitmentRequest {
    const message = { ...baseQueryCommitmentRequest } as QueryCommitmentRequest;
    message.poolId = object.poolId ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

const baseQueryCommitmentResponse: object = {};

export const QueryCommitmentResponse = {
  encode(
    message: QueryCommitmentResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.commitment !== undefined) {
      CommitmentResponse.encode(
        message.commitment,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCommitmentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCommitmentResponse,
    } as QueryCommitmentResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitment = CommitmentResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCommitmentResponse {
    const message = {
      ...baseQueryCommitmentResponse,
    } as QueryCommitmentResponse;
    message.commitment =
      object.commitment !== undefined && object.commitment !== null
        ? CommitmentResponse.fromJSON(object.commitment)
        : undefined;
    return message;
  },

  toJSON(message: QueryCommitmentResponse): unknown {
    const obj: any = {};
    message.commitment !== undefined &&
      (obj.commitment = message.commitment
        ? CommitmentResponse.toJSON(message.commitment)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCommitmentResponse>
  ): QueryCommitmentResponse {
    const message = {
      ...baseQueryCommitmentResponse,
    } as QueryCommitmentResponse;
    message.commitment =
      object.commitment !== undefined && object.commitment !== null
        ? CommitmentResponse.fromPartial(object.commitment)
        : undefined;
    return message;
  },
};

const baseQueryAllCommitmentRequest: object = { address: "" };

export const QueryAllCommitmentRequest = {
  encode(
    message: QueryAllCommitmentRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllCommitmentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCommitmentRequest,
    } as QueryAllCommitmentRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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

  fromJSON(object: any): QueryAllCommitmentRequest {
    const message = {
      ...baseQueryAllCommitmentRequest,
    } as QueryAllCommitmentRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllCommitmentRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCommitmentRequest>
  ): QueryAllCommitmentRequest {
    const message = {
      ...baseQueryAllCommitmentRequest,
    } as QueryAllCommitmentRequest;
    message.address = object.address ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllCommitmentResponse: object = {};

export const QueryAllCommitmentResponse = {
  encode(
    message: QueryAllCommitmentResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.commitments) {
      Commitment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.blockTime),
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllCommitmentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCommitmentResponse,
    } as QueryAllCommitmentResponse;
    message.commitments = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitments.push(Commitment.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.blockTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCommitmentResponse {
    const message = {
      ...baseQueryAllCommitmentResponse,
    } as QueryAllCommitmentResponse;
    message.commitments = (object.commitments ?? []).map((e: any) =>
      Commitment.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    message.blockTime =
      object.blockTime !== undefined && object.blockTime !== null
        ? fromJsonTimestamp(object.blockTime)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllCommitmentResponse): unknown {
    const obj: any = {};
    if (message.commitments) {
      obj.commitments = message.commitments.map((e) =>
        e ? Commitment.toJSON(e) : undefined
      );
    } else {
      obj.commitments = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    message.blockTime !== undefined &&
      (obj.blockTime = message.blockTime.toISOString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCommitmentResponse>
  ): QueryAllCommitmentResponse {
    const message = {
      ...baseQueryAllCommitmentResponse,
    } as QueryAllCommitmentResponse;
    message.commitments = (object.commitments ?? []).map((e) =>
      Commitment.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    message.blockTime = object.blockTime ?? undefined;
    return message;
  },
};

const baseQueryCommitmentCurveRequest: object = {};

export const QueryCommitmentCurveRequest = {
  encode(
    _: QueryCommitmentCurveRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCommitmentCurveRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCommitmentCurveRequest,
    } as QueryCommitmentCurveRequest;
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

  fromJSON(_: any): QueryCommitmentCurveRequest {
    const message = {
      ...baseQueryCommitmentCurveRequest,
    } as QueryCommitmentCurveRequest;
    return message;
  },

  toJSON(_: QueryCommitmentCurveRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryCommitmentCurveRequest>
  ): QueryCommitmentCurveRequest {
    const message = {
      ...baseQueryCommitmentCurveRequest,
    } as QueryCommitmentCurveRequest;
    return message;
  },
};

const baseQueryCommitmentCurveResponse: object = {};

export const QueryCommitmentCurveResponse = {
  encode(
    message: QueryCommitmentCurveResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.commitmentCurve !== undefined) {
      CommitmentCurve.encode(
        message.commitmentCurve,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCommitmentCurveResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCommitmentCurveResponse,
    } as QueryCommitmentCurveResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitmentCurve = CommitmentCurve.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCommitmentCurveResponse {
    const message = {
      ...baseQueryCommitmentCurveResponse,
    } as QueryCommitmentCurveResponse;
    message.commitmentCurve =
      object.commitmentCurve !== undefined && object.commitmentCurve !== null
        ? CommitmentCurve.fromJSON(object.commitmentCurve)
        : undefined;
    return message;
  },

  toJSON(message: QueryCommitmentCurveResponse): unknown {
    const obj: any = {};
    message.commitmentCurve !== undefined &&
      (obj.commitmentCurve = message.commitmentCurve
        ? CommitmentCurve.toJSON(message.commitmentCurve)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCommitmentCurveResponse>
  ): QueryCommitmentCurveResponse {
    const message = {
      ...baseQueryCommitmentCurveResponse,
    } as QueryCommitmentCurveResponse;
    message.commitmentCurve =
      object.commitmentCurve !== undefined && object.commitmentCurve !== null
        ? CommitmentCurve.fromPartial(object.commitmentCurve)
        : undefined;
    return message;
  },
};

const baseQueryRewardCurveRequest: object = {};

export const QueryRewardCurveRequest = {
  encode(
    _: QueryRewardCurveRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRewardCurveRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRewardCurveRequest,
    } as QueryRewardCurveRequest;
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

  fromJSON(_: any): QueryRewardCurveRequest {
    const message = {
      ...baseQueryRewardCurveRequest,
    } as QueryRewardCurveRequest;
    return message;
  },

  toJSON(_: QueryRewardCurveRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryRewardCurveRequest>
  ): QueryRewardCurveRequest {
    const message = {
      ...baseQueryRewardCurveRequest,
    } as QueryRewardCurveRequest;
    return message;
  },
};

const baseQueryRewardCurveResponse: object = {};

export const QueryRewardCurveResponse = {
  encode(
    message: QueryRewardCurveResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rewardCurve !== undefined) {
      RewardCurve.encode(
        message.rewardCurve,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRewardCurveResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRewardCurveResponse,
    } as QueryRewardCurveResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardCurve = RewardCurve.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRewardCurveResponse {
    const message = {
      ...baseQueryRewardCurveResponse,
    } as QueryRewardCurveResponse;
    message.rewardCurve =
      object.rewardCurve !== undefined && object.rewardCurve !== null
        ? RewardCurve.fromJSON(object.rewardCurve)
        : undefined;
    return message;
  },

  toJSON(message: QueryRewardCurveResponse): unknown {
    const obj: any = {};
    message.rewardCurve !== undefined &&
      (obj.rewardCurve = message.rewardCurve
        ? RewardCurve.toJSON(message.rewardCurve)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRewardCurveResponse>
  ): QueryRewardCurveResponse {
    const message = {
      ...baseQueryRewardCurveResponse,
    } as QueryRewardCurveResponse;
    message.rewardCurve =
      object.rewardCurve !== undefined && object.rewardCurve !== null
        ? RewardCurve.fromPartial(object.rewardCurve)
        : undefined;
    return message;
  },
};

const baseQueryTotalCommitmentRequest: object = { poolId: Long.UZERO };

export const QueryTotalCommitmentRequest = {
  encode(
    message: QueryTotalCommitmentRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTotalCommitmentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTotalCommitmentRequest,
    } as QueryTotalCommitmentRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalCommitmentRequest {
    const message = {
      ...baseQueryTotalCommitmentRequest,
    } as QueryTotalCommitmentRequest;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    return message;
  },

  toJSON(message: QueryTotalCommitmentRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTotalCommitmentRequest>
  ): QueryTotalCommitmentRequest {
    const message = {
      ...baseQueryTotalCommitmentRequest,
    } as QueryTotalCommitmentRequest;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    return message;
  },
};

const baseQueryTotalCommitmentResponse: object = { totalCommitment: "" };

export const QueryTotalCommitmentResponse = {
  encode(
    message: QueryTotalCommitmentResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.totalCommitment !== "") {
      writer.uint32(10).string(message.totalCommitment);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTotalCommitmentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTotalCommitmentResponse,
    } as QueryTotalCommitmentResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalCommitment = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalCommitmentResponse {
    const message = {
      ...baseQueryTotalCommitmentResponse,
    } as QueryTotalCommitmentResponse;
    message.totalCommitment =
      object.totalCommitment !== undefined && object.totalCommitment !== null
        ? String(object.totalCommitment)
        : "";
    return message;
  },

  toJSON(message: QueryTotalCommitmentResponse): unknown {
    const obj: any = {};
    message.totalCommitment !== undefined &&
      (obj.totalCommitment = message.totalCommitment);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTotalCommitmentResponse>
  ): QueryTotalCommitmentResponse {
    const message = {
      ...baseQueryTotalCommitmentResponse,
    } as QueryTotalCommitmentResponse;
    message.totalCommitment = object.totalCommitment ?? "";
    return message;
  },
};

const baseQueryAllTotalCommitmentRequest: object = {};

export const QueryAllTotalCommitmentRequest = {
  encode(
    message: QueryAllTotalCommitmentRequest,
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
  ): QueryAllTotalCommitmentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllTotalCommitmentRequest,
    } as QueryAllTotalCommitmentRequest;
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

  fromJSON(object: any): QueryAllTotalCommitmentRequest {
    const message = {
      ...baseQueryAllTotalCommitmentRequest,
    } as QueryAllTotalCommitmentRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllTotalCommitmentRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllTotalCommitmentRequest>
  ): QueryAllTotalCommitmentRequest {
    const message = {
      ...baseQueryAllTotalCommitmentRequest,
    } as QueryAllTotalCommitmentRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllTotalCommitmentResponse: object = {};

export const QueryAllTotalCommitmentResponse = {
  encode(
    message: QueryAllTotalCommitmentResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.totalCommitments) {
      TotalCommitmentRecord.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllTotalCommitmentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllTotalCommitmentResponse,
    } as QueryAllTotalCommitmentResponse;
    message.totalCommitments = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalCommitments.push(
            TotalCommitmentRecord.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllTotalCommitmentResponse {
    const message = {
      ...baseQueryAllTotalCommitmentResponse,
    } as QueryAllTotalCommitmentResponse;
    message.totalCommitments = (object.totalCommitments ?? []).map((e: any) =>
      TotalCommitmentRecord.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllTotalCommitmentResponse): unknown {
    const obj: any = {};
    if (message.totalCommitments) {
      obj.totalCommitments = message.totalCommitments.map((e) =>
        e ? TotalCommitmentRecord.toJSON(e) : undefined
      );
    } else {
      obj.totalCommitments = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllTotalCommitmentResponse>
  ): QueryAllTotalCommitmentResponse {
    const message = {
      ...baseQueryAllTotalCommitmentResponse,
    } as QueryAllTotalCommitmentResponse;
    message.totalCommitments = (object.totalCommitments ?? []).map((e) =>
      TotalCommitmentRecord.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryClaimableRewardsRequest: object = {
  poolId: Long.UZERO,
  address: "",
};

export const QueryClaimableRewardsRequest = {
  encode(
    message: QueryClaimableRewardsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryClaimableRewardsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryClaimableRewardsRequest,
    } as QueryClaimableRewardsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClaimableRewardsRequest {
    const message = {
      ...baseQueryClaimableRewardsRequest,
    } as QueryClaimableRewardsRequest;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: QueryClaimableRewardsRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryClaimableRewardsRequest>
  ): QueryClaimableRewardsRequest {
    const message = {
      ...baseQueryClaimableRewardsRequest,
    } as QueryClaimableRewardsRequest;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.address = object.address ?? "";
    return message;
  },
};

const baseQueryClaimableRewardsResponse: object = {};

export const QueryClaimableRewardsResponse = {
  encode(
    message: QueryClaimableRewardsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryClaimableRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryClaimableRewardsResponse,
    } as QueryClaimableRewardsResponse;
    message.rewards = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClaimableRewardsResponse {
    const message = {
      ...baseQueryClaimableRewardsResponse,
    } as QueryClaimableRewardsResponse;
    message.rewards = (object.rewards ?? []).map((e: any) =>
      DecCoin.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryClaimableRewardsResponse): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) =>
        e ? DecCoin.toJSON(e) : undefined
      );
    } else {
      obj.rewards = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryClaimableRewardsResponse>
  ): QueryClaimableRewardsResponse {
    const message = {
      ...baseQueryClaimableRewardsResponse,
    } as QueryClaimableRewardsResponse;
    message.rewards = (object.rewards ?? []).map((e) => DecCoin.fromPartial(e));
    return message;
  },
};

const baseQueryAllocatedRewardsRequest: object = {};

export const QueryAllocatedRewardsRequest = {
  encode(
    _: QueryAllocatedRewardsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllocatedRewardsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllocatedRewardsRequest,
    } as QueryAllocatedRewardsRequest;
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

  fromJSON(_: any): QueryAllocatedRewardsRequest {
    const message = {
      ...baseQueryAllocatedRewardsRequest,
    } as QueryAllocatedRewardsRequest;
    return message;
  },

  toJSON(_: QueryAllocatedRewardsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryAllocatedRewardsRequest>
  ): QueryAllocatedRewardsRequest {
    const message = {
      ...baseQueryAllocatedRewardsRequest,
    } as QueryAllocatedRewardsRequest;
    return message;
  },
};

const baseQueryAllocatedRewardsResponse: object = {};

export const QueryAllocatedRewardsResponse = {
  encode(
    message: QueryAllocatedRewardsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllocatedRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllocatedRewardsResponse,
    } as QueryAllocatedRewardsResponse;
    message.rewards = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllocatedRewardsResponse {
    const message = {
      ...baseQueryAllocatedRewardsResponse,
    } as QueryAllocatedRewardsResponse;
    message.rewards = (object.rewards ?? []).map((e: any) =>
      DecCoin.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryAllocatedRewardsResponse): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) =>
        e ? DecCoin.toJSON(e) : undefined
      );
    } else {
      obj.rewards = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllocatedRewardsResponse>
  ): QueryAllocatedRewardsResponse {
    const message = {
      ...baseQueryAllocatedRewardsResponse,
    } as QueryAllocatedRewardsResponse;
    message.rewards = (object.rewards ?? []).map((e) => DecCoin.fromPartial(e));
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

const baseQueryAllPoolRouteRequest: object = {};

export const QueryAllPoolRouteRequest = {
  encode(
    message: QueryAllPoolRouteRequest,
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
  ): QueryAllPoolRouteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPoolRouteRequest,
    } as QueryAllPoolRouteRequest;
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

  fromJSON(object: any): QueryAllPoolRouteRequest {
    const message = {
      ...baseQueryAllPoolRouteRequest,
    } as QueryAllPoolRouteRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllPoolRouteRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPoolRouteRequest>
  ): QueryAllPoolRouteRequest {
    const message = {
      ...baseQueryAllPoolRouteRequest,
    } as QueryAllPoolRouteRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllPoolRouteResponse: object = {};

export const QueryAllPoolRouteResponse = {
  encode(
    message: QueryAllPoolRouteResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.poolRoutes) {
      PoolRoute.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllPoolRouteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPoolRouteResponse,
    } as QueryAllPoolRouteResponse;
    message.poolRoutes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolRoutes.push(PoolRoute.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPoolRouteResponse {
    const message = {
      ...baseQueryAllPoolRouteResponse,
    } as QueryAllPoolRouteResponse;
    message.poolRoutes = (object.poolRoutes ?? []).map((e: any) =>
      PoolRoute.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllPoolRouteResponse): unknown {
    const obj: any = {};
    if (message.poolRoutes) {
      obj.poolRoutes = message.poolRoutes.map((e) =>
        e ? PoolRoute.toJSON(e) : undefined
      );
    } else {
      obj.poolRoutes = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPoolRouteResponse>
  ): QueryAllPoolRouteResponse {
    const message = {
      ...baseQueryAllPoolRouteResponse,
    } as QueryAllPoolRouteResponse;
    message.poolRoutes = (object.poolRoutes ?? []).map((e) =>
      PoolRoute.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllPoolRouteAddressRequest: object = {};

export const QueryAllPoolRouteAddressRequest = {
  encode(
    message: QueryAllPoolRouteAddressRequest,
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
  ): QueryAllPoolRouteAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPoolRouteAddressRequest,
    } as QueryAllPoolRouteAddressRequest;
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

  fromJSON(object: any): QueryAllPoolRouteAddressRequest {
    const message = {
      ...baseQueryAllPoolRouteAddressRequest,
    } as QueryAllPoolRouteAddressRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllPoolRouteAddressRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPoolRouteAddressRequest>
  ): QueryAllPoolRouteAddressRequest {
    const message = {
      ...baseQueryAllPoolRouteAddressRequest,
    } as QueryAllPoolRouteAddressRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllPoolRouteAddressResponse: object = {};

export const QueryAllPoolRouteAddressResponse = {
  encode(
    message: QueryAllPoolRouteAddressResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.addresses).forEach(([key, value]) => {
      QueryAllPoolRouteAddressResponse_AddressesEntry.encode(
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
  ): QueryAllPoolRouteAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPoolRouteAddressResponse,
    } as QueryAllPoolRouteAddressResponse;
    message.addresses = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = QueryAllPoolRouteAddressResponse_AddressesEntry.decode(
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

  fromJSON(object: any): QueryAllPoolRouteAddressResponse {
    const message = {
      ...baseQueryAllPoolRouteAddressResponse,
    } as QueryAllPoolRouteAddressResponse;
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

  toJSON(message: QueryAllPoolRouteAddressResponse): unknown {
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
    object: DeepPartial<QueryAllPoolRouteAddressResponse>
  ): QueryAllPoolRouteAddressResponse {
    const message = {
      ...baseQueryAllPoolRouteAddressResponse,
    } as QueryAllPoolRouteAddressResponse;
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

const baseQueryAllPoolRouteAddressResponse_AddressesEntry: object = {
  key: "",
  value: "",
};

export const QueryAllPoolRouteAddressResponse_AddressesEntry = {
  encode(
    message: QueryAllPoolRouteAddressResponse_AddressesEntry,
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
  ): QueryAllPoolRouteAddressResponse_AddressesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPoolRouteAddressResponse_AddressesEntry,
    } as QueryAllPoolRouteAddressResponse_AddressesEntry;
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

  fromJSON(object: any): QueryAllPoolRouteAddressResponse_AddressesEntry {
    const message = {
      ...baseQueryAllPoolRouteAddressResponse_AddressesEntry,
    } as QueryAllPoolRouteAddressResponse_AddressesEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: QueryAllPoolRouteAddressResponse_AddressesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPoolRouteAddressResponse_AddressesEntry>
  ): QueryAllPoolRouteAddressResponse_AddressesEntry {
    const message = {
      ...baseQueryAllPoolRouteAddressResponse_AddressesEntry,
    } as QueryAllPoolRouteAddressResponse_AddressesEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Get addresses for all pools */
  PoolAddressAll(
    request: QueryAllPoolAddressRequest
  ): Promise<QueryAllPoolAddressResponse>;
  /** Get pool details */
  Pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse>;
  /** Get details for all pools */
  PoolAll(request: QueryAllPoolRequest): Promise<QueryAllPoolResponse>;
  /** Get LP commitment for a pool and address */
  Commitment(request: QueryCommitmentRequest): Promise<QueryCommitmentResponse>;
  /** Get all LP commitments for an address */
  CommitmentAll(
    request: QueryAllCommitmentRequest
  ): Promise<QueryAllCommitmentResponse>;
  /** Get the current commitment reward boost curve */
  CommitmentCurve(
    request: QueryCommitmentCurveRequest
  ): Promise<QueryCommitmentCurveResponse>;
  /** Get the current LP reward curve */
  RewardCurve(
    request: QueryRewardCurveRequest
  ): Promise<QueryRewardCurveResponse>;
  /** Get the total commitment power for a pool */
  TotalCommitment(
    request: QueryTotalCommitmentRequest
  ): Promise<QueryTotalCommitmentResponse>;
  /** Get commitment powers for all pools */
  TotalCommitmentAll(
    request: QueryAllTotalCommitmentRequest
  ): Promise<QueryAllTotalCommitmentResponse>;
  /** Get currently claimable rewards for a pool for the given address */
  ClaimableRewards(
    request: QueryClaimableRewardsRequest
  ): Promise<QueryClaimableRewardsResponse>;
  /** Get allocated rewards */
  AllocatedRewards(
    request: QueryAllocatedRewardsRequest
  ): Promise<QueryAllocatedRewardsResponse>;
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Get liquidity pool addresses for all pools */
  PoolRouteAll(
    request: QueryAllPoolRouteRequest
  ): Promise<QueryAllPoolRouteResponse>;
  /** Get addresses for all pool route */
  PoolRouteAddressAll(
    request: QueryAllPoolRouteAddressRequest
  ): Promise<QueryAllPoolRouteAddressResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
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
  PoolAddressAll(
    request: QueryAllPoolAddressRequest
  ): Promise<QueryAllPoolAddressResponse> {
    const data = QueryAllPoolAddressRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Query",
      "PoolAddressAll",
      data
    );
    return promise.then((data) =>
      QueryAllPoolAddressResponse.decode(new _m0.Reader(data))
    );
  }

  Pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse> {
    const data = QueryGetPoolRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Query",
      "Pool",
      data
    );
    return promise.then((data) =>
      QueryGetPoolResponse.decode(new _m0.Reader(data))
    );
  }

  PoolAll(request: QueryAllPoolRequest): Promise<QueryAllPoolResponse> {
    const data = QueryAllPoolRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Query",
      "PoolAll",
      data
    );
    return promise.then((data) =>
      QueryAllPoolResponse.decode(new _m0.Reader(data))
    );
  }

  Commitment(
    request: QueryCommitmentRequest
  ): Promise<QueryCommitmentResponse> {
    const data = QueryCommitmentRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Query",
      "Commitment",
      data
    );
    return promise.then((data) =>
      QueryCommitmentResponse.decode(new _m0.Reader(data))
    );
  }

  CommitmentAll(
    request: QueryAllCommitmentRequest
  ): Promise<QueryAllCommitmentResponse> {
    const data = QueryAllCommitmentRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Query",
      "CommitmentAll",
      data
    );
    return promise.then((data) =>
      QueryAllCommitmentResponse.decode(new _m0.Reader(data))
    );
  }

  CommitmentCurve(
    request: QueryCommitmentCurveRequest
  ): Promise<QueryCommitmentCurveResponse> {
    const data = QueryCommitmentCurveRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Query",
      "CommitmentCurve",
      data
    );
    return promise.then((data) =>
      QueryCommitmentCurveResponse.decode(new _m0.Reader(data))
    );
  }

  RewardCurve(
    request: QueryRewardCurveRequest
  ): Promise<QueryRewardCurveResponse> {
    const data = QueryRewardCurveRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Query",
      "RewardCurve",
      data
    );
    return promise.then((data) =>
      QueryRewardCurveResponse.decode(new _m0.Reader(data))
    );
  }

  TotalCommitment(
    request: QueryTotalCommitmentRequest
  ): Promise<QueryTotalCommitmentResponse> {
    const data = QueryTotalCommitmentRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Query",
      "TotalCommitment",
      data
    );
    return promise.then((data) =>
      QueryTotalCommitmentResponse.decode(new _m0.Reader(data))
    );
  }

  TotalCommitmentAll(
    request: QueryAllTotalCommitmentRequest
  ): Promise<QueryAllTotalCommitmentResponse> {
    const data = QueryAllTotalCommitmentRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Query",
      "TotalCommitmentAll",
      data
    );
    return promise.then((data) =>
      QueryAllTotalCommitmentResponse.decode(new _m0.Reader(data))
    );
  }

  ClaimableRewards(
    request: QueryClaimableRewardsRequest
  ): Promise<QueryClaimableRewardsResponse> {
    const data = QueryClaimableRewardsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Query",
      "ClaimableRewards",
      data
    );
    return promise.then((data) =>
      QueryClaimableRewardsResponse.decode(new _m0.Reader(data))
    );
  }

  AllocatedRewards(
    request: QueryAllocatedRewardsRequest
  ): Promise<QueryAllocatedRewardsResponse> {
    const data = QueryAllocatedRewardsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Query",
      "AllocatedRewards",
      data
    );
    return promise.then((data) =>
      QueryAllocatedRewardsResponse.decode(new _m0.Reader(data))
    );
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  PoolRouteAll(
    request: QueryAllPoolRouteRequest
  ): Promise<QueryAllPoolRouteResponse> {
    const data = QueryAllPoolRouteRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Query",
      "PoolRouteAll",
      data
    );
    return promise.then((data) =>
      QueryAllPoolRouteResponse.decode(new _m0.Reader(data))
    );
  }

  PoolRouteAddressAll(
    request: QueryAllPoolRouteAddressRequest
  ): Promise<QueryAllPoolRouteAddressResponse> {
    const data = QueryAllPoolRouteAddressRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Query",
      "PoolRouteAddressAll",
      data
    );
    return promise.then((data) =>
      QueryAllPoolRouteAddressResponse.decode(new _m0.Reader(data))
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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
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
