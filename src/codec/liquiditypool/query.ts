/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Pool } from "../liquiditypool/liquiditypool";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import {
  CommitmentResponse,
  CommitmentCurve,
  RewardCurve,
} from "../liquiditypool/reward";
import { DecCoin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "Switcheo.carbon.liquiditypool";

/** this line is used by starport scaffolding # 3 */
export interface QueryGetPoolRequest {
  id: Long;
}

export interface QueryGetPoolResponse {
  Pool?: Pool;
}

export interface QueryAllPoolRequest {
  pagination?: PageRequest;
}

export interface QueryAllPoolResponse {
  pools: Pool[];
  pagination?: PageResponse;
}

export interface QueryRewardHistoryRequest {
  poolId: string;
  startBlockHeight: string;
  pagination?: PageRequest;
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
    if (message.Pool !== undefined) {
      Pool.encode(message.Pool, writer.uint32(10).fork()).ldelim();
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
          message.Pool = Pool.decode(reader, reader.uint32());
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
    if (object.Pool !== undefined && object.Pool !== null) {
      message.Pool = Pool.fromJSON(object.Pool);
    } else {
      message.Pool = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPoolResponse): unknown {
    const obj: any = {};
    message.Pool !== undefined &&
      (obj.Pool = message.Pool ? Pool.toJSON(message.Pool) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetPoolResponse>): QueryGetPoolResponse {
    const message = { ...baseQueryGetPoolResponse } as QueryGetPoolResponse;
    if (object.Pool !== undefined && object.Pool !== null) {
      message.Pool = Pool.fromPartial(object.Pool);
    } else {
      message.Pool = undefined;
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
    for (const v of message.pools) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.pools.push(Pool.decode(reader, reader.uint32()));
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
    message.pools = [];
    if (object.pools !== undefined && object.pools !== null) {
      for (const e of object.pools) {
        message.pools.push(Pool.fromJSON(e));
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
    if (message.pools) {
      obj.pools = message.pools.map((e) => (e ? Pool.toJSON(e) : undefined));
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
    message.pools = [];
    if (object.pools !== undefined && object.pools !== null) {
      for (const e of object.pools) {
        message.pools.push(Pool.fromPartial(e));
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
