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
  Commitment,
  TotalCommitmentRecord,
} from "../liquiditypool/reward";
import { Timestamp } from "../google/protobuf/timestamp";
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

export interface QueryAllCommitmentRequest {
  address: string;
  pagination?: PageRequest;
}

export interface QueryAllCommitmentResponse {
  commitments: Commitment[];
  pagination?: PageResponse;
  blockTime?: Date;
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
    message.extendedPool =
      object.extendedPool !== undefined && object.extendedPool !== null
        ? ExtendedPool.fromJSON(object.extendedPool)
        : undefined;
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
    message.extendedPool =
      object.extendedPool !== undefined && object.extendedPool !== null
        ? ExtendedPool.fromPartial(object.extendedPool)
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
    message.extendedPools = (object.extendedPools ?? []).map((e: any) =>
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
    message.extendedPools = (object.extendedPools ?? []).map((e) =>
      ExtendedPool.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
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
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? String(object.poolId)
        : "";
    message.startBlockHeight =
      object.startBlockHeight !== undefined && object.startBlockHeight !== null
        ? String(object.startBlockHeight)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
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
    message.poolId = object.poolId ?? "";
    message.startBlockHeight = object.startBlockHeight ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
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
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? Pool.fromPartial(object.pool)
        : undefined;
    message.rewardsWeight = object.rewardsWeight ?? "";
    message.totalCommitment = object.totalCommitment ?? "";
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
    message.querierRewardHistories = (object.querierRewardHistories ?? []).map(
      (e: any) => QuerierRewardHistory.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
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
    message.querierRewardHistories = (object.querierRewardHistories ?? []).map(
      (e) => QuerierRewardHistory.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
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
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
        ? Long.fromString(object.blockHeight)
        : Long.UZERO;
    message.rewards = (object.rewards ?? []).map((e: any) =>
      DecCoin.fromJSON(e)
    );
    message.totalCommitment =
      object.totalCommitment !== undefined && object.totalCommitment !== null
        ? String(object.totalCommitment)
        : "";
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
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
        ? Long.fromValue(object.blockHeight)
        : Long.UZERO;
    message.rewards = (object.rewards ?? []).map((e) => DecCoin.fromPartial(e));
    message.totalCommitment = object.totalCommitment ?? "";
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
    message.commitmentResponse =
      object.commitmentResponse !== undefined &&
      object.commitmentResponse !== null
        ? CommitmentResponse.fromJSON(object.commitmentResponse)
        : undefined;
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
    message.commitmentResponse =
      object.commitmentResponse !== undefined &&
      object.commitmentResponse !== null
        ? CommitmentResponse.fromPartial(object.commitmentResponse)
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
    message.poolId = object.poolId ?? "";
    message.address = object.address ?? "";
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
    message.lastClaim =
      object.lastClaim !== undefined && object.lastClaim !== null
        ? Long.fromString(object.lastClaim)
        : Long.ZERO;
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
    message.lastClaim =
      object.lastClaim !== undefined && object.lastClaim !== null
        ? Long.fromValue(object.lastClaim)
        : Long.ZERO;
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

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  Pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse>;
  PoolAll(request: QueryAllPoolRequest): Promise<QueryAllPoolResponse>;
  RewardHistory(
    request: QueryRewardHistoryRequest
  ): Promise<QueryRewardHistoryResponse>;
  Commitment(request: QueryCommitmentRequest): Promise<QueryCommitmentResponse>;
  CommitmentAll(
    request: QueryAllCommitmentRequest
  ): Promise<QueryAllCommitmentResponse>;
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
    this.CommitmentAll = this.CommitmentAll.bind(this);
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
