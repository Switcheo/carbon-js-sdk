/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Pool } from "../liquiditypool/liquiditypool";
import {
  CommitmentResponse,
  CommitmentCurve,
  RewardCurve,
  TotalCommitment,
} from "../liquiditypool/reward";
import { DecCoin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "Switcheo.carbon.liquiditypool";

/** this line is used by starport scaffolding # 3 */
export interface QueryGetPoolRequest {
  id: Long;
}

export interface QueryGetPoolResponse {
  extendedPool?: ExtendedPool;
}

export interface QueryAllPoolRequest {
  pagination?: PageRequest;
}

export interface QueryAllPoolResponse {
  extendedPools: ExtendedPool[];
  pagination?: PageResponse;
}

export interface QueryRewardHistoryRequest {
  poolId: string;
  startBlockHeight: string;
  pagination?: PageRequest;
}

export interface ExtendedPool {
  pool?: Pool;
  rewardsWeight: string;
  totalCommitment: string;
}

export interface QueryRewardHistoryResponse {
  querierRewardHistories: QuerierRewardHistory[];
  pagination?: PageResponse;
}

export interface QuerierRewardHistory {
  blockHeight: Long;
  rewards: DecCoin[];
  totalCommitment: string;
}

export interface QueryCommitmentRequest {
  poolId: string;
  address: string;
}

export interface QueryCommitmentResponse {
  commitmentResponse?: CommitmentResponse;
}

export interface QueryLastClaimRequest {
  poolId: string;
  address: string;
}

export interface QueryLastClaimResponse {
  lastClaim: Long;
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
  totalCommitments: TotalCommitment[];
  pagination?: PageResponse;
}

export interface QueryClaimableRewardsRequest {
  poolId: Long;
  address: string;
}

export interface QueryClaimableRewardsResponse {
  rewards: DecCoin[];
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
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    } else {
      message.id = Long.UZERO;
    }
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
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id as Long;
    } else {
      message.id = Long.UZERO;
    }
    return message;
  },
};

const baseQueryGetPoolResponse: object = {};

export const QueryGetPoolResponse = {
  encode(
    message: QueryGetPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.extendedPool !== undefined) {
      ExtendedPool.encode(
        message.extendedPool,
        writer.uint32(10).fork()
      ).ldelim();
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
          message.extendedPool = ExtendedPool.decode(reader, reader.uint32());
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
    if (object.extendedPool !== undefined && object.extendedPool !== null) {
      message.extendedPool = ExtendedPool.fromJSON(object.extendedPool);
    } else {
      message.extendedPool = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPoolResponse): unknown {
    const obj: any = {};
    message.extendedPool !== undefined &&
      (obj.extendedPool = message.extendedPool
        ? ExtendedPool.toJSON(message.extendedPool)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetPoolResponse>): QueryGetPoolResponse {
    const message = { ...baseQueryGetPoolResponse } as QueryGetPoolResponse;
    if (object.extendedPool !== undefined && object.extendedPool !== null) {
      message.extendedPool = ExtendedPool.fromPartial(object.extendedPool);
    } else {
      message.extendedPool = undefined;
    }
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
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
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
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllPoolResponse: object = {};

export const QueryAllPoolResponse = {
  encode(
    message: QueryAllPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.extendedPools) {
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
    message.extendedPools = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.extendedPools.push(
            ExtendedPool.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllPoolResponse {
    const message = { ...baseQueryAllPoolResponse } as QueryAllPoolResponse;
    message.extendedPools = [];
    if (object.extendedPools !== undefined && object.extendedPools !== null) {
      for (const e of object.extendedPools) {
        message.extendedPools.push(ExtendedPool.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPoolResponse): unknown {
    const obj: any = {};
    if (message.extendedPools) {
      obj.extendedPools = message.extendedPools.map((e) =>
        e ? ExtendedPool.toJSON(e) : undefined
      );
    } else {
      obj.extendedPools = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllPoolResponse>): QueryAllPoolResponse {
    const message = { ...baseQueryAllPoolResponse } as QueryAllPoolResponse;
    message.extendedPools = [];
    if (object.extendedPools !== undefined && object.extendedPools !== null) {
      for (const e of object.extendedPools) {
        message.extendedPools.push(ExtendedPool.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryRewardHistoryRequest: object = {
  poolId: "",
  startBlockHeight: "",
};

export const QueryRewardHistoryRequest = {
  encode(
    message: QueryRewardHistoryRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    if (message.startBlockHeight !== "") {
      writer.uint32(18).string(message.startBlockHeight);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRewardHistoryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRewardHistoryRequest,
    } as QueryRewardHistoryRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        case 2:
          message.startBlockHeight = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRewardHistoryRequest {
    const message = {
      ...baseQueryRewardHistoryRequest,
    } as QueryRewardHistoryRequest;
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = String(object.poolId);
    } else {
      message.poolId = "";
    }
    if (
      object.startBlockHeight !== undefined &&
      object.startBlockHeight !== null
    ) {
      message.startBlockHeight = String(object.startBlockHeight);
    } else {
      message.startBlockHeight = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryRewardHistoryRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.startBlockHeight !== undefined &&
      (obj.startBlockHeight = message.startBlockHeight);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRewardHistoryRequest>
  ): QueryRewardHistoryRequest {
    const message = {
      ...baseQueryRewardHistoryRequest,
    } as QueryRewardHistoryRequest;
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId;
    } else {
      message.poolId = "";
    }
    if (
      object.startBlockHeight !== undefined &&
      object.startBlockHeight !== null
    ) {
      message.startBlockHeight = object.startBlockHeight;
    } else {
      message.startBlockHeight = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExtendedPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExtendedPool } as ExtendedPool;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExtendedPool {
    const message = { ...baseExtendedPool } as ExtendedPool;
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Pool.fromJSON(object.pool);
    } else {
      message.pool = undefined;
    }
    if (object.rewardsWeight !== undefined && object.rewardsWeight !== null) {
      message.rewardsWeight = String(object.rewardsWeight);
    } else {
      message.rewardsWeight = "";
    }
    if (
      object.totalCommitment !== undefined &&
      object.totalCommitment !== null
    ) {
      message.totalCommitment = String(object.totalCommitment);
    } else {
      message.totalCommitment = "";
    }
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
    return obj;
  },

  fromPartial(object: DeepPartial<ExtendedPool>): ExtendedPool {
    const message = { ...baseExtendedPool } as ExtendedPool;
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Pool.fromPartial(object.pool);
    } else {
      message.pool = undefined;
    }
    if (object.rewardsWeight !== undefined && object.rewardsWeight !== null) {
      message.rewardsWeight = object.rewardsWeight;
    } else {
      message.rewardsWeight = "";
    }
    if (
      object.totalCommitment !== undefined &&
      object.totalCommitment !== null
    ) {
      message.totalCommitment = object.totalCommitment;
    } else {
      message.totalCommitment = "";
    }
    return message;
  },
};

const baseQueryRewardHistoryResponse: object = {};

export const QueryRewardHistoryResponse = {
  encode(
    message: QueryRewardHistoryResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.querierRewardHistories) {
      QuerierRewardHistory.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryRewardHistoryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRewardHistoryResponse,
    } as QueryRewardHistoryResponse;
    message.querierRewardHistories = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.querierRewardHistories.push(
            QuerierRewardHistory.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryRewardHistoryResponse {
    const message = {
      ...baseQueryRewardHistoryResponse,
    } as QueryRewardHistoryResponse;
    message.querierRewardHistories = [];
    if (
      object.querierRewardHistories !== undefined &&
      object.querierRewardHistories !== null
    ) {
      for (const e of object.querierRewardHistories) {
        message.querierRewardHistories.push(QuerierRewardHistory.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryRewardHistoryResponse): unknown {
    const obj: any = {};
    if (message.querierRewardHistories) {
      obj.querierRewardHistories = message.querierRewardHistories.map((e) =>
        e ? QuerierRewardHistory.toJSON(e) : undefined
      );
    } else {
      obj.querierRewardHistories = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRewardHistoryResponse>
  ): QueryRewardHistoryResponse {
    const message = {
      ...baseQueryRewardHistoryResponse,
    } as QueryRewardHistoryResponse;
    message.querierRewardHistories = [];
    if (
      object.querierRewardHistories !== undefined &&
      object.querierRewardHistories !== null
    ) {
      for (const e of object.querierRewardHistories) {
        message.querierRewardHistories.push(
          QuerierRewardHistory.fromPartial(e)
        );
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQuerierRewardHistory: object = {
  blockHeight: Long.UZERO,
  totalCommitment: "",
};

export const QuerierRewardHistory = {
  encode(
    message: QuerierRewardHistory,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.blockHeight.isZero()) {
      writer.uint32(8).uint64(message.blockHeight);
    }
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.totalCommitment !== "") {
      writer.uint32(26).string(message.totalCommitment);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerierRewardHistory {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuerierRewardHistory } as QuerierRewardHistory;
    message.rewards = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.uint64() as Long;
          break;
        case 2:
          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.totalCommitment = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerierRewardHistory {
    const message = { ...baseQuerierRewardHistory } as QuerierRewardHistory;
    message.rewards = [];
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = Long.fromString(object.blockHeight);
    } else {
      message.blockHeight = Long.UZERO;
    }
    if (object.rewards !== undefined && object.rewards !== null) {
      for (const e of object.rewards) {
        message.rewards.push(DecCoin.fromJSON(e));
      }
    }
    if (
      object.totalCommitment !== undefined &&
      object.totalCommitment !== null
    ) {
      message.totalCommitment = String(object.totalCommitment);
    } else {
      message.totalCommitment = "";
    }
    return message;
  },

  toJSON(message: QuerierRewardHistory): unknown {
    const obj: any = {};
    message.blockHeight !== undefined &&
      (obj.blockHeight = (message.blockHeight || Long.UZERO).toString());
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) =>
        e ? DecCoin.toJSON(e) : undefined
      );
    } else {
      obj.rewards = [];
    }
    message.totalCommitment !== undefined &&
      (obj.totalCommitment = message.totalCommitment);
    return obj;
  },

  fromPartial(object: DeepPartial<QuerierRewardHistory>): QuerierRewardHistory {
    const message = { ...baseQuerierRewardHistory } as QuerierRewardHistory;
    message.rewards = [];
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = object.blockHeight as Long;
    } else {
      message.blockHeight = Long.UZERO;
    }
    if (object.rewards !== undefined && object.rewards !== null) {
      for (const e of object.rewards) {
        message.rewards.push(DecCoin.fromPartial(e));
      }
    }
    if (
      object.totalCommitment !== undefined &&
      object.totalCommitment !== null
    ) {
      message.totalCommitment = object.totalCommitment;
    } else {
      message.totalCommitment = "";
    }
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
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = String(object.poolId);
    } else {
      message.poolId = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
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
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId;
    } else {
      message.poolId = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryCommitmentResponse: object = {};

export const QueryCommitmentResponse = {
  encode(
    message: QueryCommitmentResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.commitmentResponse !== undefined) {
      CommitmentResponse.encode(
        message.commitmentResponse,
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
          message.commitmentResponse = CommitmentResponse.decode(
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
    if (
      object.commitmentResponse !== undefined &&
      object.commitmentResponse !== null
    ) {
      message.commitmentResponse = CommitmentResponse.fromJSON(
        object.commitmentResponse
      );
    } else {
      message.commitmentResponse = undefined;
    }
    return message;
  },

  toJSON(message: QueryCommitmentResponse): unknown {
    const obj: any = {};
    message.commitmentResponse !== undefined &&
      (obj.commitmentResponse = message.commitmentResponse
        ? CommitmentResponse.toJSON(message.commitmentResponse)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCommitmentResponse>
  ): QueryCommitmentResponse {
    const message = {
      ...baseQueryCommitmentResponse,
    } as QueryCommitmentResponse;
    if (
      object.commitmentResponse !== undefined &&
      object.commitmentResponse !== null
    ) {
      message.commitmentResponse = CommitmentResponse.fromPartial(
        object.commitmentResponse
      );
    } else {
      message.commitmentResponse = undefined;
    }
    return message;
  },
};

const baseQueryLastClaimRequest: object = { poolId: "", address: "" };

export const QueryLastClaimRequest = {
  encode(
    message: QueryLastClaimRequest,
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
  ): QueryLastClaimRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryLastClaimRequest } as QueryLastClaimRequest;
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

  fromJSON(object: any): QueryLastClaimRequest {
    const message = { ...baseQueryLastClaimRequest } as QueryLastClaimRequest;
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = String(object.poolId);
    } else {
      message.poolId = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryLastClaimRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryLastClaimRequest>
  ): QueryLastClaimRequest {
    const message = { ...baseQueryLastClaimRequest } as QueryLastClaimRequest;
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId;
    } else {
      message.poolId = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryLastClaimResponse: object = { lastClaim: Long.ZERO };

export const QueryLastClaimResponse = {
  encode(
    message: QueryLastClaimResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.lastClaim.isZero()) {
      writer.uint32(8).int64(message.lastClaim);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryLastClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryLastClaimResponse } as QueryLastClaimResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastClaim = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLastClaimResponse {
    const message = { ...baseQueryLastClaimResponse } as QueryLastClaimResponse;
    if (object.lastClaim !== undefined && object.lastClaim !== null) {
      message.lastClaim = Long.fromString(object.lastClaim);
    } else {
      message.lastClaim = Long.ZERO;
    }
    return message;
  },

  toJSON(message: QueryLastClaimResponse): unknown {
    const obj: any = {};
    message.lastClaim !== undefined &&
      (obj.lastClaim = (message.lastClaim || Long.ZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryLastClaimResponse>
  ): QueryLastClaimResponse {
    const message = { ...baseQueryLastClaimResponse } as QueryLastClaimResponse;
    if (object.lastClaim !== undefined && object.lastClaim !== null) {
      message.lastClaim = object.lastClaim as Long;
    } else {
      message.lastClaim = Long.ZERO;
    }
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
    if (
      object.commitmentCurve !== undefined &&
      object.commitmentCurve !== null
    ) {
      message.commitmentCurve = CommitmentCurve.fromJSON(
        object.commitmentCurve
      );
    } else {
      message.commitmentCurve = undefined;
    }
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
    if (
      object.commitmentCurve !== undefined &&
      object.commitmentCurve !== null
    ) {
      message.commitmentCurve = CommitmentCurve.fromPartial(
        object.commitmentCurve
      );
    } else {
      message.commitmentCurve = undefined;
    }
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
    if (object.rewardCurve !== undefined && object.rewardCurve !== null) {
      message.rewardCurve = RewardCurve.fromJSON(object.rewardCurve);
    } else {
      message.rewardCurve = undefined;
    }
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
    if (object.rewardCurve !== undefined && object.rewardCurve !== null) {
      message.rewardCurve = RewardCurve.fromPartial(object.rewardCurve);
    } else {
      message.rewardCurve = undefined;
    }
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
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = Long.fromString(object.poolId);
    } else {
      message.poolId = Long.UZERO;
    }
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
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId as Long;
    } else {
      message.poolId = Long.UZERO;
    }
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
    if (
      object.totalCommitment !== undefined &&
      object.totalCommitment !== null
    ) {
      message.totalCommitment = String(object.totalCommitment);
    } else {
      message.totalCommitment = "";
    }
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
    if (
      object.totalCommitment !== undefined &&
      object.totalCommitment !== null
    ) {
      message.totalCommitment = object.totalCommitment;
    } else {
      message.totalCommitment = "";
    }
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
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
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
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
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
      TotalCommitment.encode(v!, writer.uint32(10).fork()).ldelim();
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
            TotalCommitment.decode(reader, reader.uint32())
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
    message.totalCommitments = [];
    if (
      object.totalCommitments !== undefined &&
      object.totalCommitments !== null
    ) {
      for (const e of object.totalCommitments) {
        message.totalCommitments.push(TotalCommitment.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllTotalCommitmentResponse): unknown {
    const obj: any = {};
    if (message.totalCommitments) {
      obj.totalCommitments = message.totalCommitments.map((e) =>
        e ? TotalCommitment.toJSON(e) : undefined
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
    message.totalCommitments = [];
    if (
      object.totalCommitments !== undefined &&
      object.totalCommitments !== null
    ) {
      for (const e of object.totalCommitments) {
        message.totalCommitments.push(TotalCommitment.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
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
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = Long.fromString(object.poolId);
    } else {
      message.poolId = Long.UZERO;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
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
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId as Long;
    } else {
      message.poolId = Long.UZERO;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
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
    message.rewards = [];
    if (object.rewards !== undefined && object.rewards !== null) {
      for (const e of object.rewards) {
        message.rewards.push(DecCoin.fromJSON(e));
      }
    }
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
    message.rewards = [];
    if (object.rewards !== undefined && object.rewards !== null) {
      for (const e of object.rewards) {
        message.rewards.push(DecCoin.fromPartial(e));
      }
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  Pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse>;
  PoolAll(request: QueryAllPoolRequest): Promise<QueryAllPoolResponse>;
  RewardHistory(
    request: QueryRewardHistoryRequest
  ): Promise<QueryRewardHistoryResponse>;
  Commitment(request: QueryCommitmentRequest): Promise<QueryCommitmentResponse>;
  LastClaim(request: QueryLastClaimRequest): Promise<QueryLastClaimResponse>;
  CommitmentCurve(
    request: QueryCommitmentCurveRequest
  ): Promise<QueryCommitmentCurveResponse>;
  RewardCurve(
    request: QueryRewardCurveRequest
  ): Promise<QueryRewardCurveResponse>;
  TotalCommitment(
    request: QueryTotalCommitmentRequest
  ): Promise<QueryTotalCommitmentResponse>;
  TotalCommitmentAll(
    request: QueryAllTotalCommitmentRequest
  ): Promise<QueryAllTotalCommitmentResponse>;
  ClaimableRewards(
    request: QueryClaimableRewardsRequest
  ): Promise<QueryClaimableRewardsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Pool = this.Pool.bind(this);
    this.PoolAll = this.PoolAll.bind(this);
    this.RewardHistory = this.RewardHistory.bind(this);
    this.Commitment = this.Commitment.bind(this);
    this.LastClaim = this.LastClaim.bind(this);
    this.CommitmentCurve = this.CommitmentCurve.bind(this);
    this.RewardCurve = this.RewardCurve.bind(this);
    this.TotalCommitment = this.TotalCommitment.bind(this);
    this.TotalCommitmentAll = this.TotalCommitmentAll.bind(this);
    this.ClaimableRewards = this.ClaimableRewards.bind(this);
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

  RewardHistory(
    request: QueryRewardHistoryRequest
  ): Promise<QueryRewardHistoryResponse> {
    const data = QueryRewardHistoryRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Query",
      "RewardHistory",
      data
    );
    return promise.then((data) =>
      QueryRewardHistoryResponse.decode(new _m0.Reader(data))
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

  LastClaim(request: QueryLastClaimRequest): Promise<QueryLastClaimResponse> {
    const data = QueryLastClaimRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Query",
      "LastClaim",
      data
    );
    return promise.then((data) =>
      QueryLastClaimResponse.decode(new _m0.Reader(data))
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
