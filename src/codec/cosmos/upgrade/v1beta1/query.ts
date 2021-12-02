/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Plan } from "../../../cosmos/upgrade/v1beta1/upgrade";
import { Any } from "../../../google/protobuf/any";

export const protobufPackage = "cosmos.upgrade.v1beta1";

/**
 * QueryCurrentPlanRequest is the request type for the Query/CurrentPlan RPC
 * method.
 */
export interface QueryCurrentPlanRequest {}

/**
 * QueryCurrentPlanResponse is the response type for the Query/CurrentPlan RPC
 * method.
 */
export interface QueryCurrentPlanResponse {
  /** plan is the current upgrade plan. */
  plan?: Plan;
}

/**
 * QueryCurrentPlanRequest is the request type for the Query/AppliedPlan RPC
 * method.
 */
export interface QueryAppliedPlanRequest {
  /** name is the name of the applied plan to query for. */
  name: string;
}

/**
 * QueryAppliedPlanResponse is the response type for the Query/AppliedPlan RPC
 * method.
 */
export interface QueryAppliedPlanResponse {
  /** height is the block height at which the plan was applied. */
  height: Long;
}

/**
 * QueryUpgradedConsensusStateRequest is the request type for the Query/UpgradedConsensusState
 * RPC method.
 */
export interface QueryUpgradedConsensusStateRequest {
  /**
   * last height of the current chain must be sent in request
   * as this is the height under which next consensus state is stored
   */
  lastHeight: Long;
}

/**
 * QueryUpgradedConsensusStateResponse is the response type for the Query/UpgradedConsensusState
 * RPC method.
 */
export interface QueryUpgradedConsensusStateResponse {
  upgradedConsensusState?: Any;
}

const baseQueryCurrentPlanRequest: object = {};

export const QueryCurrentPlanRequest = {
  encode(
    _: QueryCurrentPlanRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCurrentPlanRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCurrentPlanRequest,
    } as QueryCurrentPlanRequest;
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

  fromJSON(_: any): QueryCurrentPlanRequest {
    const message = {
      ...baseQueryCurrentPlanRequest,
    } as QueryCurrentPlanRequest;
    return message;
  },

  toJSON(_: QueryCurrentPlanRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCurrentPlanRequest>, I>>(
    _: I
  ): QueryCurrentPlanRequest {
    const message = {
      ...baseQueryCurrentPlanRequest,
    } as QueryCurrentPlanRequest;
    return message;
  },
};

const baseQueryCurrentPlanResponse: object = {};

export const QueryCurrentPlanResponse = {
  encode(
    message: QueryCurrentPlanResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCurrentPlanResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCurrentPlanResponse,
    } as QueryCurrentPlanResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.plan = Plan.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCurrentPlanResponse {
    const message = {
      ...baseQueryCurrentPlanResponse,
    } as QueryCurrentPlanResponse;
    message.plan =
      object.plan !== undefined && object.plan !== null
        ? Plan.fromJSON(object.plan)
        : undefined;
    return message;
  },

  toJSON(message: QueryCurrentPlanResponse): unknown {
    const obj: any = {};
    message.plan !== undefined &&
      (obj.plan = message.plan ? Plan.toJSON(message.plan) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCurrentPlanResponse>, I>>(
    object: I
  ): QueryCurrentPlanResponse {
    const message = {
      ...baseQueryCurrentPlanResponse,
    } as QueryCurrentPlanResponse;
    message.plan =
      object.plan !== undefined && object.plan !== null
        ? Plan.fromPartial(object.plan)
        : undefined;
    return message;
  },
};

const baseQueryAppliedPlanRequest: object = { name: "" };

export const QueryAppliedPlanRequest = {
  encode(
    message: QueryAppliedPlanRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAppliedPlanRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAppliedPlanRequest,
    } as QueryAppliedPlanRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAppliedPlanRequest {
    const message = {
      ...baseQueryAppliedPlanRequest,
    } as QueryAppliedPlanRequest;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    return message;
  },

  toJSON(message: QueryAppliedPlanRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAppliedPlanRequest>, I>>(
    object: I
  ): QueryAppliedPlanRequest {
    const message = {
      ...baseQueryAppliedPlanRequest,
    } as QueryAppliedPlanRequest;
    message.name = object.name ?? "";
    return message;
  },
};

const baseQueryAppliedPlanResponse: object = { height: Long.ZERO };

export const QueryAppliedPlanResponse = {
  encode(
    message: QueryAppliedPlanResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAppliedPlanResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAppliedPlanResponse,
    } as QueryAppliedPlanResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAppliedPlanResponse {
    const message = {
      ...baseQueryAppliedPlanResponse,
    } as QueryAppliedPlanResponse;
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromString(object.height)
        : Long.ZERO;
    return message;
  },

  toJSON(message: QueryAppliedPlanResponse): unknown {
    const obj: any = {};
    message.height !== undefined &&
      (obj.height = (message.height || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAppliedPlanResponse>, I>>(
    object: I
  ): QueryAppliedPlanResponse {
    const message = {
      ...baseQueryAppliedPlanResponse,
    } as QueryAppliedPlanResponse;
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromValue(object.height)
        : Long.ZERO;
    return message;
  },
};

const baseQueryUpgradedConsensusStateRequest: object = {
  lastHeight: Long.ZERO,
};

export const QueryUpgradedConsensusStateRequest = {
  encode(
    message: QueryUpgradedConsensusStateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.lastHeight.isZero()) {
      writer.uint32(8).int64(message.lastHeight);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUpgradedConsensusStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryUpgradedConsensusStateRequest,
    } as QueryUpgradedConsensusStateRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastHeight = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUpgradedConsensusStateRequest {
    const message = {
      ...baseQueryUpgradedConsensusStateRequest,
    } as QueryUpgradedConsensusStateRequest;
    message.lastHeight =
      object.lastHeight !== undefined && object.lastHeight !== null
        ? Long.fromString(object.lastHeight)
        : Long.ZERO;
    return message;
  },

  toJSON(message: QueryUpgradedConsensusStateRequest): unknown {
    const obj: any = {};
    message.lastHeight !== undefined &&
      (obj.lastHeight = (message.lastHeight || Long.ZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryUpgradedConsensusStateRequest>, I>
  >(object: I): QueryUpgradedConsensusStateRequest {
    const message = {
      ...baseQueryUpgradedConsensusStateRequest,
    } as QueryUpgradedConsensusStateRequest;
    message.lastHeight =
      object.lastHeight !== undefined && object.lastHeight !== null
        ? Long.fromValue(object.lastHeight)
        : Long.ZERO;
    return message;
  },
};

const baseQueryUpgradedConsensusStateResponse: object = {};

export const QueryUpgradedConsensusStateResponse = {
  encode(
    message: QueryUpgradedConsensusStateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.upgradedConsensusState !== undefined) {
      Any.encode(
        message.upgradedConsensusState,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUpgradedConsensusStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryUpgradedConsensusStateResponse,
    } as QueryUpgradedConsensusStateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upgradedConsensusState = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUpgradedConsensusStateResponse {
    const message = {
      ...baseQueryUpgradedConsensusStateResponse,
    } as QueryUpgradedConsensusStateResponse;
    message.upgradedConsensusState =
      object.upgradedConsensusState !== undefined &&
      object.upgradedConsensusState !== null
        ? Any.fromJSON(object.upgradedConsensusState)
        : undefined;
    return message;
  },

  toJSON(message: QueryUpgradedConsensusStateResponse): unknown {
    const obj: any = {};
    message.upgradedConsensusState !== undefined &&
      (obj.upgradedConsensusState = message.upgradedConsensusState
        ? Any.toJSON(message.upgradedConsensusState)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryUpgradedConsensusStateResponse>, I>
  >(object: I): QueryUpgradedConsensusStateResponse {
    const message = {
      ...baseQueryUpgradedConsensusStateResponse,
    } as QueryUpgradedConsensusStateResponse;
    message.upgradedConsensusState =
      object.upgradedConsensusState !== undefined &&
      object.upgradedConsensusState !== null
        ? Any.fromPartial(object.upgradedConsensusState)
        : undefined;
    return message;
  },
};

/** Query defines the gRPC upgrade querier service. */
export interface Query {
  /** CurrentPlan queries the current upgrade plan. */
  CurrentPlan(
    request: QueryCurrentPlanRequest
  ): Promise<QueryCurrentPlanResponse>;
  /** AppliedPlan queries a previously applied upgrade plan by its name. */
  AppliedPlan(
    request: QueryAppliedPlanRequest
  ): Promise<QueryAppliedPlanResponse>;
  /**
   * UpgradedConsensusState queries the consensus state that will serve
   * as a trusted kernel for the next version of this chain. It will only be
   * stored at the last height of this chain.
   * UpgradedConsensusState RPC not supported with legacy querier
   */
  UpgradedConsensusState(
    request: QueryUpgradedConsensusStateRequest
  ): Promise<QueryUpgradedConsensusStateResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CurrentPlan = this.CurrentPlan.bind(this);
    this.AppliedPlan = this.AppliedPlan.bind(this);
    this.UpgradedConsensusState = this.UpgradedConsensusState.bind(this);
  }
  CurrentPlan(
    request: QueryCurrentPlanRequest
  ): Promise<QueryCurrentPlanResponse> {
    const data = QueryCurrentPlanRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.upgrade.v1beta1.Query",
      "CurrentPlan",
      data
    );
    return promise.then((data) =>
      QueryCurrentPlanResponse.decode(new _m0.Reader(data))
    );
  }

  AppliedPlan(
    request: QueryAppliedPlanRequest
  ): Promise<QueryAppliedPlanResponse> {
    const data = QueryAppliedPlanRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.upgrade.v1beta1.Query",
      "AppliedPlan",
      data
    );
    return promise.then((data) =>
      QueryAppliedPlanResponse.decode(new _m0.Reader(data))
    );
  }

  UpgradedConsensusState(
    request: QueryUpgradedConsensusStateRequest
  ): Promise<QueryUpgradedConsensusStateResponse> {
    const data = QueryUpgradedConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.upgrade.v1beta1.Query",
      "UpgradedConsensusState",
      data
    );
    return promise.then((data) =>
      QueryUpgradedConsensusStateResponse.decode(new _m0.Reader(data))
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

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
