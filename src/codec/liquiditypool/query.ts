/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Pool } from "../liquiditypool/liquiditypool";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import {
  RewardCurve,
  CommitmentCurve,
  WrappedRewardWeights,
  RewardHistory,
  Commitment,
} from "../liquiditypool/reward";

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
  Pool: Pool[];
  pagination?: PageResponse;
}

export interface QueryGetRewardRequest {}

export interface QueryGetRewardResponse {
  rewardCurve?: RewardCurve;
  commitmentCurve?: CommitmentCurve;
  wrappedRewardWeights?: WrappedRewardWeights;
}

export interface QueryAllRewardHistoryRequest {
  pagination?: PageRequest;
}

export interface QueryAllRewardHistoryResponse {
  rewardHistory: RewardHistory[];
  pagination?: PageResponse;
}

export interface QueryAllCommitmentRequest {
  pagination?: PageRequest;
}

export interface QueryAllCommitmentResponse {
  Commitment: Commitment[];
  pagination?: PageResponse;
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
    for (const v of message.Pool) {
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
    message.Pool = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Pool.push(Pool.decode(reader, reader.uint32()));
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
    message.Pool = [];
    if (object.Pool !== undefined && object.Pool !== null) {
      for (const e of object.Pool) {
        message.Pool.push(Pool.fromJSON(e));
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
    if (message.Pool) {
      obj.Pool = message.Pool.map((e) => (e ? Pool.toJSON(e) : undefined));
    } else {
      obj.Pool = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllPoolResponse>): QueryAllPoolResponse {
    const message = { ...baseQueryAllPoolResponse } as QueryAllPoolResponse;
    message.Pool = [];
    if (object.Pool !== undefined && object.Pool !== null) {
      for (const e of object.Pool) {
        message.Pool.push(Pool.fromPartial(e));
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

const baseQueryGetRewardRequest: object = {};

export const QueryGetRewardRequest = {
  encode(
    _: QueryGetRewardRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetRewardRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetRewardRequest } as QueryGetRewardRequest;
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

  fromJSON(_: any): QueryGetRewardRequest {
    const message = { ...baseQueryGetRewardRequest } as QueryGetRewardRequest;
    return message;
  },

  toJSON(_: QueryGetRewardRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryGetRewardRequest>): QueryGetRewardRequest {
    const message = { ...baseQueryGetRewardRequest } as QueryGetRewardRequest;
    return message;
  },
};

const baseQueryGetRewardResponse: object = {};

export const QueryGetRewardResponse = {
  encode(
    message: QueryGetRewardResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rewardCurve !== undefined) {
      RewardCurve.encode(
        message.rewardCurve,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.commitmentCurve !== undefined) {
      CommitmentCurve.encode(
        message.commitmentCurve,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.wrappedRewardWeights !== undefined) {
      WrappedRewardWeights.encode(
        message.wrappedRewardWeights,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetRewardResponse } as QueryGetRewardResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardCurve = RewardCurve.decode(reader, reader.uint32());
          break;
        case 2:
          message.commitmentCurve = CommitmentCurve.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.wrappedRewardWeights = WrappedRewardWeights.decode(
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

  fromJSON(object: any): QueryGetRewardResponse {
    const message = { ...baseQueryGetRewardResponse } as QueryGetRewardResponse;
    if (object.rewardCurve !== undefined && object.rewardCurve !== null) {
      message.rewardCurve = RewardCurve.fromJSON(object.rewardCurve);
    } else {
      message.rewardCurve = undefined;
    }
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
    if (
      object.wrappedRewardWeights !== undefined &&
      object.wrappedRewardWeights !== null
    ) {
      message.wrappedRewardWeights = WrappedRewardWeights.fromJSON(
        object.wrappedRewardWeights
      );
    } else {
      message.wrappedRewardWeights = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetRewardResponse): unknown {
    const obj: any = {};
    message.rewardCurve !== undefined &&
      (obj.rewardCurve = message.rewardCurve
        ? RewardCurve.toJSON(message.rewardCurve)
        : undefined);
    message.commitmentCurve !== undefined &&
      (obj.commitmentCurve = message.commitmentCurve
        ? CommitmentCurve.toJSON(message.commitmentCurve)
        : undefined);
    message.wrappedRewardWeights !== undefined &&
      (obj.wrappedRewardWeights = message.wrappedRewardWeights
        ? WrappedRewardWeights.toJSON(message.wrappedRewardWeights)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetRewardResponse>
  ): QueryGetRewardResponse {
    const message = { ...baseQueryGetRewardResponse } as QueryGetRewardResponse;
    if (object.rewardCurve !== undefined && object.rewardCurve !== null) {
      message.rewardCurve = RewardCurve.fromPartial(object.rewardCurve);
    } else {
      message.rewardCurve = undefined;
    }
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
    if (
      object.wrappedRewardWeights !== undefined &&
      object.wrappedRewardWeights !== null
    ) {
      message.wrappedRewardWeights = WrappedRewardWeights.fromPartial(
        object.wrappedRewardWeights
      );
    } else {
      message.wrappedRewardWeights = undefined;
    }
    return message;
  },
};

const baseQueryAllRewardHistoryRequest: object = {};

export const QueryAllRewardHistoryRequest = {
  encode(
    message: QueryAllRewardHistoryRequest,
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
  ): QueryAllRewardHistoryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllRewardHistoryRequest,
    } as QueryAllRewardHistoryRequest;
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

  fromJSON(object: any): QueryAllRewardHistoryRequest {
    const message = {
      ...baseQueryAllRewardHistoryRequest,
    } as QueryAllRewardHistoryRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllRewardHistoryRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllRewardHistoryRequest>
  ): QueryAllRewardHistoryRequest {
    const message = {
      ...baseQueryAllRewardHistoryRequest,
    } as QueryAllRewardHistoryRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllRewardHistoryResponse: object = {};

export const QueryAllRewardHistoryResponse = {
  encode(
    message: QueryAllRewardHistoryResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.rewardHistory) {
      RewardHistory.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllRewardHistoryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllRewardHistoryResponse,
    } as QueryAllRewardHistoryResponse;
    message.rewardHistory = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardHistory.push(
            RewardHistory.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllRewardHistoryResponse {
    const message = {
      ...baseQueryAllRewardHistoryResponse,
    } as QueryAllRewardHistoryResponse;
    message.rewardHistory = [];
    if (object.rewardHistory !== undefined && object.rewardHistory !== null) {
      for (const e of object.rewardHistory) {
        message.rewardHistory.push(RewardHistory.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllRewardHistoryResponse): unknown {
    const obj: any = {};
    if (message.rewardHistory) {
      obj.rewardHistory = message.rewardHistory.map((e) =>
        e ? RewardHistory.toJSON(e) : undefined
      );
    } else {
      obj.rewardHistory = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllRewardHistoryResponse>
  ): QueryAllRewardHistoryResponse {
    const message = {
      ...baseQueryAllRewardHistoryResponse,
    } as QueryAllRewardHistoryResponse;
    message.rewardHistory = [];
    if (object.rewardHistory !== undefined && object.rewardHistory !== null) {
      for (const e of object.rewardHistory) {
        message.rewardHistory.push(RewardHistory.fromPartial(e));
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

const baseQueryAllCommitmentRequest: object = {};

export const QueryAllCommitmentRequest = {
  encode(
    message: QueryAllCommitmentRequest,
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
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCommitmentRequest): unknown {
    const obj: any = {};
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
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCommitmentResponse: object = {};

export const QueryAllCommitmentResponse = {
  encode(
    message: QueryAllCommitmentResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.Commitment) {
      Commitment.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllCommitmentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCommitmentResponse,
    } as QueryAllCommitmentResponse;
    message.Commitment = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Commitment.push(Commitment.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllCommitmentResponse {
    const message = {
      ...baseQueryAllCommitmentResponse,
    } as QueryAllCommitmentResponse;
    message.Commitment = [];
    if (object.Commitment !== undefined && object.Commitment !== null) {
      for (const e of object.Commitment) {
        message.Commitment.push(Commitment.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCommitmentResponse): unknown {
    const obj: any = {};
    if (message.Commitment) {
      obj.Commitment = message.Commitment.map((e) =>
        e ? Commitment.toJSON(e) : undefined
      );
    } else {
      obj.Commitment = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCommitmentResponse>
  ): QueryAllCommitmentResponse {
    const message = {
      ...baseQueryAllCommitmentResponse,
    } as QueryAllCommitmentResponse;
    message.Commitment = [];
    if (object.Commitment !== undefined && object.Commitment !== null) {
      for (const e of object.Commitment) {
        message.Commitment.push(Commitment.fromPartial(e));
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

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  Pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse>;
  PoolAll(request: QueryAllPoolRequest): Promise<QueryAllPoolResponse>;
  Reward(request: QueryGetRewardRequest): Promise<QueryGetRewardResponse>;
  RewardHistoryAll(
    request: QueryAllRewardHistoryRequest
  ): Promise<QueryAllRewardHistoryResponse>;
  CommitmentAll(
    request: QueryAllCommitmentRequest
  ): Promise<QueryAllCommitmentResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Pool = this.Pool.bind(this);
    this.PoolAll = this.PoolAll.bind(this);
    this.Reward = this.Reward.bind(this);
    this.RewardHistoryAll = this.RewardHistoryAll.bind(this);
    this.CommitmentAll = this.CommitmentAll.bind(this);
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

  Reward(request: QueryGetRewardRequest): Promise<QueryGetRewardResponse> {
    const data = QueryGetRewardRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Query",
      "Reward",
      data
    );
    return promise.then((data) =>
      QueryGetRewardResponse.decode(new _m0.Reader(data))
    );
  }

  RewardHistoryAll(
    request: QueryAllRewardHistoryRequest
  ): Promise<QueryAllRewardHistoryResponse> {
    const data = QueryAllRewardHistoryRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.liquiditypool.Query",
      "RewardHistoryAll",
      data
    );
    return promise.then((data) =>
      QueryAllRewardHistoryResponse.decode(new _m0.Reader(data))
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
