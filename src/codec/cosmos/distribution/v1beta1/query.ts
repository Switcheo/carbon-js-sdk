/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { DecCoin } from "../../base/v1beta1/coin";
import {
  DelegationDelegatorReward,
  Params,
  ValidatorAccumulatedCommission,
  ValidatorOutstandingRewards,
  ValidatorSlashEvent,
} from "./distribution";

export const protobufPackage = "cosmos.distribution.v1beta1";

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}

/** QueryValidatorDistributionInfoRequest is the request type for the Query/ValidatorDistributionInfo RPC method. */
export interface QueryValidatorDistributionInfoRequest {
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
}

/** QueryValidatorDistributionInfoResponse is the response type for the Query/ValidatorDistributionInfo RPC method. */
export interface QueryValidatorDistributionInfoResponse {
  /** operator_address defines the validator operator address. */
  operatorAddress: string;
  /** self_bond_rewards defines the self delegations rewards. */
  selfBondRewards: DecCoin[];
  /** commission defines the commission the validator received. */
  commission: DecCoin[];
}

/**
 * QueryValidatorOutstandingRewardsRequest is the request type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsRequest {
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
}

/**
 * QueryValidatorOutstandingRewardsResponse is the response type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsResponse {
  rewards?: ValidatorOutstandingRewards;
}

/**
 * QueryValidatorCommissionRequest is the request type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionRequest {
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
}

/**
 * QueryValidatorCommissionResponse is the response type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionResponse {
  /** commission defines the commission the validator received. */
  commission?: ValidatorAccumulatedCommission;
}

/**
 * QueryValidatorSlashesRequest is the request type for the
 * Query/ValidatorSlashes RPC method
 */
export interface QueryValidatorSlashesRequest {
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
  /** starting_height defines the optional starting height to query the slashes. */
  startingHeight: Long;
  /** starting_height defines the optional ending height to query the slashes. */
  endingHeight: Long;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryValidatorSlashesResponse is the response type for the
 * Query/ValidatorSlashes RPC method.
 */
export interface QueryValidatorSlashesResponse {
  /** slashes defines the slashes the validator received. */
  slashes: ValidatorSlashEvent[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QueryDelegationRewardsRequest is the request type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsRequest {
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
}

/**
 * QueryDelegationRewardsResponse is the response type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsResponse {
  /** rewards defines the rewards accrued by a delegation. */
  rewards: DecCoin[];
}

/**
 * QueryDelegationTotalRewardsRequest is the request type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsRequest {
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
}

/**
 * QueryDelegationTotalRewardsResponse is the response type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsResponse {
  /** rewards defines all the rewards accrued by a delegator. */
  rewards: DelegationDelegatorReward[];
  /** total defines the sum of all the rewards. */
  total: DecCoin[];
}

/**
 * QueryDelegatorValidatorsRequest is the request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequest {
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
}

/**
 * QueryDelegatorValidatorsResponse is the response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponse {
  /** validators defines the validators a delegator is delegating for. */
  validators: string[];
}

/**
 * QueryDelegatorWithdrawAddressRequest is the request type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressRequest {
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
}

/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressResponse {
  /** withdraw_address defines the delegator address to query for. */
  withdrawAddress: string;
}

/**
 * QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
 * method.
 */
export interface QueryCommunityPoolRequest {
}

/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 */
export interface QueryCommunityPoolResponse {
  /** pool defines community pool's coins. */
  pool: DecCoin[];
}

/**
 * QueryLiquidityProviderRewardsRequest is the request type for the Query/LiquidityProviderRewardsRequest RPC
 * method.
 */
export interface QueryLiquidityProviderRewardsRequest {
}

/**
 * QueryLiquidityProviderRewardsResponse is the response type for the Query/LiquidityProviderRewardsRequest
 * RPC method.
 */
export interface QueryLiquidityProviderRewardsResponse {
  /** pool defines community pool's coins. */
  pool: DecCoin[];
}

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

function createBaseQueryValidatorDistributionInfoRequest(): QueryValidatorDistributionInfoRequest {
  return { validatorAddress: "" };
}

export const QueryValidatorDistributionInfoRequest = {
  encode(message: QueryValidatorDistributionInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorDistributionInfoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDistributionInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validatorAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorDistributionInfoRequest {
    return { validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "" };
  },

  toJSON(message: QueryValidatorDistributionInfoRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  create(base?: DeepPartial<QueryValidatorDistributionInfoRequest>): QueryValidatorDistributionInfoRequest {
    return QueryValidatorDistributionInfoRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryValidatorDistributionInfoRequest>): QueryValidatorDistributionInfoRequest {
    const message = createBaseQueryValidatorDistributionInfoRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};

function createBaseQueryValidatorDistributionInfoResponse(): QueryValidatorDistributionInfoResponse {
  return { operatorAddress: "", selfBondRewards: [], commission: [] };
}

export const QueryValidatorDistributionInfoResponse = {
  encode(message: QueryValidatorDistributionInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    for (const v of message.selfBondRewards) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.commission) {
      DecCoin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorDistributionInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDistributionInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.operatorAddress = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.selfBondRewards.push(DecCoin.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.commission.push(DecCoin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorDistributionInfoResponse {
    return {
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
      selfBondRewards: Array.isArray(object?.selfBondRewards)
        ? object.selfBondRewards.map((e: any) => DecCoin.fromJSON(e))
        : [],
      commission: Array.isArray(object?.commission) ? object.commission.map((e: any) => DecCoin.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryValidatorDistributionInfoResponse): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    if (message.selfBondRewards) {
      obj.selfBondRewards = message.selfBondRewards.map((e) => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.selfBondRewards = [];
    }
    if (message.commission) {
      obj.commission = message.commission.map((e) => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.commission = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryValidatorDistributionInfoResponse>): QueryValidatorDistributionInfoResponse {
    return QueryValidatorDistributionInfoResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryValidatorDistributionInfoResponse>): QueryValidatorDistributionInfoResponse {
    const message = createBaseQueryValidatorDistributionInfoResponse();
    message.operatorAddress = object.operatorAddress ?? "";
    message.selfBondRewards = object.selfBondRewards?.map((e) => DecCoin.fromPartial(e)) || [];
    message.commission = object.commission?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryValidatorOutstandingRewardsRequest(): QueryValidatorOutstandingRewardsRequest {
  return { validatorAddress: "" };
}

export const QueryValidatorOutstandingRewardsRequest = {
  encode(message: QueryValidatorOutstandingRewardsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorOutstandingRewardsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorOutstandingRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validatorAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorOutstandingRewardsRequest {
    return { validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "" };
  },

  toJSON(message: QueryValidatorOutstandingRewardsRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  create(base?: DeepPartial<QueryValidatorOutstandingRewardsRequest>): QueryValidatorOutstandingRewardsRequest {
    return QueryValidatorOutstandingRewardsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryValidatorOutstandingRewardsRequest>): QueryValidatorOutstandingRewardsRequest {
    const message = createBaseQueryValidatorOutstandingRewardsRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};

function createBaseQueryValidatorOutstandingRewardsResponse(): QueryValidatorOutstandingRewardsResponse {
  return { rewards: undefined };
}

export const QueryValidatorOutstandingRewardsResponse = {
  encode(message: QueryValidatorOutstandingRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewards !== undefined) {
      ValidatorOutstandingRewards.encode(message.rewards, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorOutstandingRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorOutstandingRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rewards = ValidatorOutstandingRewards.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorOutstandingRewardsResponse {
    return { rewards: isSet(object.rewards) ? ValidatorOutstandingRewards.fromJSON(object.rewards) : undefined };
  },

  toJSON(message: QueryValidatorOutstandingRewardsResponse): unknown {
    const obj: any = {};
    message.rewards !== undefined &&
      (obj.rewards = message.rewards ? ValidatorOutstandingRewards.toJSON(message.rewards) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryValidatorOutstandingRewardsResponse>): QueryValidatorOutstandingRewardsResponse {
    return QueryValidatorOutstandingRewardsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryValidatorOutstandingRewardsResponse>): QueryValidatorOutstandingRewardsResponse {
    const message = createBaseQueryValidatorOutstandingRewardsResponse();
    message.rewards = (object.rewards !== undefined && object.rewards !== null)
      ? ValidatorOutstandingRewards.fromPartial(object.rewards)
      : undefined;
    return message;
  },
};

function createBaseQueryValidatorCommissionRequest(): QueryValidatorCommissionRequest {
  return { validatorAddress: "" };
}

export const QueryValidatorCommissionRequest = {
  encode(message: QueryValidatorCommissionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorCommissionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorCommissionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validatorAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorCommissionRequest {
    return { validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "" };
  },

  toJSON(message: QueryValidatorCommissionRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  create(base?: DeepPartial<QueryValidatorCommissionRequest>): QueryValidatorCommissionRequest {
    return QueryValidatorCommissionRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryValidatorCommissionRequest>): QueryValidatorCommissionRequest {
    const message = createBaseQueryValidatorCommissionRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};

function createBaseQueryValidatorCommissionResponse(): QueryValidatorCommissionResponse {
  return { commission: undefined };
}

export const QueryValidatorCommissionResponse = {
  encode(message: QueryValidatorCommissionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commission !== undefined) {
      ValidatorAccumulatedCommission.encode(message.commission, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorCommissionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorCommissionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.commission = ValidatorAccumulatedCommission.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorCommissionResponse {
    return {
      commission: isSet(object.commission) ? ValidatorAccumulatedCommission.fromJSON(object.commission) : undefined,
    };
  },

  toJSON(message: QueryValidatorCommissionResponse): unknown {
    const obj: any = {};
    message.commission !== undefined &&
      (obj.commission = message.commission ? ValidatorAccumulatedCommission.toJSON(message.commission) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryValidatorCommissionResponse>): QueryValidatorCommissionResponse {
    return QueryValidatorCommissionResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryValidatorCommissionResponse>): QueryValidatorCommissionResponse {
    const message = createBaseQueryValidatorCommissionResponse();
    message.commission = (object.commission !== undefined && object.commission !== null)
      ? ValidatorAccumulatedCommission.fromPartial(object.commission)
      : undefined;
    return message;
  },
};

function createBaseQueryValidatorSlashesRequest(): QueryValidatorSlashesRequest {
  return { validatorAddress: "", startingHeight: Long.UZERO, endingHeight: Long.UZERO, pagination: undefined };
}

export const QueryValidatorSlashesRequest = {
  encode(message: QueryValidatorSlashesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (!message.startingHeight.isZero()) {
      writer.uint32(16).uint64(message.startingHeight);
    }
    if (!message.endingHeight.isZero()) {
      writer.uint32(24).uint64(message.endingHeight);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorSlashesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorSlashesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validatorAddress = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.startingHeight = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.endingHeight = reader.uint64() as Long;
          continue;
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): QueryValidatorSlashesRequest {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      startingHeight: isSet(object.startingHeight) ? Long.fromValue(object.startingHeight) : Long.UZERO,
      endingHeight: isSet(object.endingHeight) ? Long.fromValue(object.endingHeight) : Long.UZERO,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryValidatorSlashesRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.startingHeight !== undefined && (obj.startingHeight = (message.startingHeight || Long.UZERO).toString());
    message.endingHeight !== undefined && (obj.endingHeight = (message.endingHeight || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryValidatorSlashesRequest>): QueryValidatorSlashesRequest {
    return QueryValidatorSlashesRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryValidatorSlashesRequest>): QueryValidatorSlashesRequest {
    const message = createBaseQueryValidatorSlashesRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    message.startingHeight = (object.startingHeight !== undefined && object.startingHeight !== null)
      ? Long.fromValue(object.startingHeight)
      : Long.UZERO;
    message.endingHeight = (object.endingHeight !== undefined && object.endingHeight !== null)
      ? Long.fromValue(object.endingHeight)
      : Long.UZERO;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryValidatorSlashesResponse(): QueryValidatorSlashesResponse {
  return { slashes: [], pagination: undefined };
}

export const QueryValidatorSlashesResponse = {
  encode(message: QueryValidatorSlashesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.slashes) {
      ValidatorSlashEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorSlashesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorSlashesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.slashes.push(ValidatorSlashEvent.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryValidatorSlashesResponse {
    return {
      slashes: Array.isArray(object?.slashes) ? object.slashes.map((e: any) => ValidatorSlashEvent.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryValidatorSlashesResponse): unknown {
    const obj: any = {};
    if (message.slashes) {
      obj.slashes = message.slashes.map((e) => e ? ValidatorSlashEvent.toJSON(e) : undefined);
    } else {
      obj.slashes = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryValidatorSlashesResponse>): QueryValidatorSlashesResponse {
    return QueryValidatorSlashesResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryValidatorSlashesResponse>): QueryValidatorSlashesResponse {
    const message = createBaseQueryValidatorSlashesResponse();
    message.slashes = object.slashes?.map((e) => ValidatorSlashEvent.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryDelegationRewardsRequest(): QueryDelegationRewardsRequest {
  return { delegatorAddress: "", validatorAddress: "" };
}

export const QueryDelegationRewardsRequest = {
  encode(message: QueryDelegationRewardsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationRewardsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegatorAddress = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.validatorAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDelegationRewardsRequest {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
    };
  },

  toJSON(message: QueryDelegationRewardsRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  create(base?: DeepPartial<QueryDelegationRewardsRequest>): QueryDelegationRewardsRequest {
    return QueryDelegationRewardsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryDelegationRewardsRequest>): QueryDelegationRewardsRequest {
    const message = createBaseQueryDelegationRewardsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};

function createBaseQueryDelegationRewardsResponse(): QueryDelegationRewardsResponse {
  return { rewards: [] };
}

export const QueryDelegationRewardsResponse = {
  encode(message: QueryDelegationRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRewardsResponse();
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

  fromJSON(object: any): QueryDelegationRewardsResponse {
    return { rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => DecCoin.fromJSON(e)) : [] };
  },

  toJSON(message: QueryDelegationRewardsResponse): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryDelegationRewardsResponse>): QueryDelegationRewardsResponse {
    return QueryDelegationRewardsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryDelegationRewardsResponse>): QueryDelegationRewardsResponse {
    const message = createBaseQueryDelegationRewardsResponse();
    message.rewards = object.rewards?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryDelegationTotalRewardsRequest(): QueryDelegationTotalRewardsRequest {
  return { delegatorAddress: "" };
}

export const QueryDelegationTotalRewardsRequest = {
  encode(message: QueryDelegationTotalRewardsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationTotalRewardsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationTotalRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegatorAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDelegationTotalRewardsRequest {
    return { delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "" };
  },

  toJSON(message: QueryDelegationTotalRewardsRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },

  create(base?: DeepPartial<QueryDelegationTotalRewardsRequest>): QueryDelegationTotalRewardsRequest {
    return QueryDelegationTotalRewardsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryDelegationTotalRewardsRequest>): QueryDelegationTotalRewardsRequest {
    const message = createBaseQueryDelegationTotalRewardsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
};

function createBaseQueryDelegationTotalRewardsResponse(): QueryDelegationTotalRewardsResponse {
  return { rewards: [], total: [] };
}

export const QueryDelegationTotalRewardsResponse = {
  encode(message: QueryDelegationTotalRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewards) {
      DelegationDelegatorReward.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.total) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationTotalRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationTotalRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rewards.push(DelegationDelegatorReward.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.total.push(DecCoin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDelegationTotalRewardsResponse {
    return {
      rewards: Array.isArray(object?.rewards)
        ? object.rewards.map((e: any) => DelegationDelegatorReward.fromJSON(e))
        : [],
      total: Array.isArray(object?.total) ? object.total.map((e: any) => DecCoin.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryDelegationTotalRewardsResponse): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) => e ? DelegationDelegatorReward.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    if (message.total) {
      obj.total = message.total.map((e) => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.total = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryDelegationTotalRewardsResponse>): QueryDelegationTotalRewardsResponse {
    return QueryDelegationTotalRewardsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryDelegationTotalRewardsResponse>): QueryDelegationTotalRewardsResponse {
    const message = createBaseQueryDelegationTotalRewardsResponse();
    message.rewards = object.rewards?.map((e) => DelegationDelegatorReward.fromPartial(e)) || [];
    message.total = object.total?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryDelegatorValidatorsRequest(): QueryDelegatorValidatorsRequest {
  return { delegatorAddress: "" };
}

export const QueryDelegatorValidatorsRequest = {
  encode(message: QueryDelegatorValidatorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegatorAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorValidatorsRequest {
    return { delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "" };
  },

  toJSON(message: QueryDelegatorValidatorsRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },

  create(base?: DeepPartial<QueryDelegatorValidatorsRequest>): QueryDelegatorValidatorsRequest {
    return QueryDelegatorValidatorsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryDelegatorValidatorsRequest>): QueryDelegatorValidatorsRequest {
    const message = createBaseQueryDelegatorValidatorsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
};

function createBaseQueryDelegatorValidatorsResponse(): QueryDelegatorValidatorsResponse {
  return { validators: [] };
}

export const QueryDelegatorValidatorsResponse = {
  encode(message: QueryDelegatorValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validators.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorValidatorsResponse {
    return { validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => String(e)) : [] };
  },

  toJSON(message: QueryDelegatorValidatorsResponse): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map((e) => e);
    } else {
      obj.validators = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryDelegatorValidatorsResponse>): QueryDelegatorValidatorsResponse {
    return QueryDelegatorValidatorsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryDelegatorValidatorsResponse>): QueryDelegatorValidatorsResponse {
    const message = createBaseQueryDelegatorValidatorsResponse();
    message.validators = object.validators?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryDelegatorWithdrawAddressRequest(): QueryDelegatorWithdrawAddressRequest {
  return { delegatorAddress: "" };
}

export const QueryDelegatorWithdrawAddressRequest = {
  encode(message: QueryDelegatorWithdrawAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorWithdrawAddressRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorWithdrawAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegatorAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorWithdrawAddressRequest {
    return { delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "" };
  },

  toJSON(message: QueryDelegatorWithdrawAddressRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },

  create(base?: DeepPartial<QueryDelegatorWithdrawAddressRequest>): QueryDelegatorWithdrawAddressRequest {
    return QueryDelegatorWithdrawAddressRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryDelegatorWithdrawAddressRequest>): QueryDelegatorWithdrawAddressRequest {
    const message = createBaseQueryDelegatorWithdrawAddressRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
};

function createBaseQueryDelegatorWithdrawAddressResponse(): QueryDelegatorWithdrawAddressResponse {
  return { withdrawAddress: "" };
}

export const QueryDelegatorWithdrawAddressResponse = {
  encode(message: QueryDelegatorWithdrawAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withdrawAddress !== "") {
      writer.uint32(10).string(message.withdrawAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorWithdrawAddressResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorWithdrawAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.withdrawAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorWithdrawAddressResponse {
    return { withdrawAddress: isSet(object.withdrawAddress) ? String(object.withdrawAddress) : "" };
  },

  toJSON(message: QueryDelegatorWithdrawAddressResponse): unknown {
    const obj: any = {};
    message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
    return obj;
  },

  create(base?: DeepPartial<QueryDelegatorWithdrawAddressResponse>): QueryDelegatorWithdrawAddressResponse {
    return QueryDelegatorWithdrawAddressResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryDelegatorWithdrawAddressResponse>): QueryDelegatorWithdrawAddressResponse {
    const message = createBaseQueryDelegatorWithdrawAddressResponse();
    message.withdrawAddress = object.withdrawAddress ?? "";
    return message;
  },
};

function createBaseQueryCommunityPoolRequest(): QueryCommunityPoolRequest {
  return {};
}

export const QueryCommunityPoolRequest = {
  encode(_: QueryCommunityPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommunityPoolRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunityPoolRequest();
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

  fromJSON(_: any): QueryCommunityPoolRequest {
    return {};
  },

  toJSON(_: QueryCommunityPoolRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryCommunityPoolRequest>): QueryCommunityPoolRequest {
    return QueryCommunityPoolRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryCommunityPoolRequest>): QueryCommunityPoolRequest {
    const message = createBaseQueryCommunityPoolRequest();
    return message;
  },
};

function createBaseQueryCommunityPoolResponse(): QueryCommunityPoolResponse {
  return { pool: [] };
}

export const QueryCommunityPoolResponse = {
  encode(message: QueryCommunityPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pool) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommunityPoolResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunityPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pool.push(DecCoin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCommunityPoolResponse {
    return { pool: Array.isArray(object?.pool) ? object.pool.map((e: any) => DecCoin.fromJSON(e)) : [] };
  },

  toJSON(message: QueryCommunityPoolResponse): unknown {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map((e) => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.pool = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryCommunityPoolResponse>): QueryCommunityPoolResponse {
    return QueryCommunityPoolResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryCommunityPoolResponse>): QueryCommunityPoolResponse {
    const message = createBaseQueryCommunityPoolResponse();
    message.pool = object.pool?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryLiquidityProviderRewardsRequest(): QueryLiquidityProviderRewardsRequest {
  return {};
}

export const QueryLiquidityProviderRewardsRequest = {
  encode(_: QueryLiquidityProviderRewardsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidityProviderRewardsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidityProviderRewardsRequest();
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

  fromJSON(_: any): QueryLiquidityProviderRewardsRequest {
    return {};
  },

  toJSON(_: QueryLiquidityProviderRewardsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryLiquidityProviderRewardsRequest>): QueryLiquidityProviderRewardsRequest {
    return QueryLiquidityProviderRewardsRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryLiquidityProviderRewardsRequest>): QueryLiquidityProviderRewardsRequest {
    const message = createBaseQueryLiquidityProviderRewardsRequest();
    return message;
  },
};

function createBaseQueryLiquidityProviderRewardsResponse(): QueryLiquidityProviderRewardsResponse {
  return { pool: [] };
}

export const QueryLiquidityProviderRewardsResponse = {
  encode(message: QueryLiquidityProviderRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pool) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidityProviderRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidityProviderRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pool.push(DecCoin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryLiquidityProviderRewardsResponse {
    return { pool: Array.isArray(object?.pool) ? object.pool.map((e: any) => DecCoin.fromJSON(e)) : [] };
  },

  toJSON(message: QueryLiquidityProviderRewardsResponse): unknown {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map((e) => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.pool = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryLiquidityProviderRewardsResponse>): QueryLiquidityProviderRewardsResponse {
    return QueryLiquidityProviderRewardsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryLiquidityProviderRewardsResponse>): QueryLiquidityProviderRewardsResponse {
    const message = createBaseQueryLiquidityProviderRewardsResponse();
    message.pool = object.pool?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

/** Query defines the gRPC querier service for distribution module. */
export interface Query {
  /** Params queries params of the distribution module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** ValidatorDistributionInfo queries validator commission and self-delegation rewards for validator */
  ValidatorDistributionInfo(
    request: QueryValidatorDistributionInfoRequest,
  ): Promise<QueryValidatorDistributionInfoResponse>;
  /** ValidatorOutstandingRewards queries rewards of a validator address. */
  ValidatorOutstandingRewards(
    request: QueryValidatorOutstandingRewardsRequest,
  ): Promise<QueryValidatorOutstandingRewardsResponse>;
  /** ValidatorCommission queries accumulated commission for a validator. */
  ValidatorCommission(request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse>;
  /** ValidatorSlashes queries slash events of a validator. */
  ValidatorSlashes(request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse>;
  /** DelegationRewards queries the total rewards accrued by a delegation. */
  DelegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse>;
  /**
   * DelegationTotalRewards queries the total rewards accrued by each
   * validator.
   */
  DelegationTotalRewards(request: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponse>;
  /** DelegatorValidators queries the validators of a delegator. */
  DelegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;
  /** DelegatorWithdrawAddress queries withdraw address of a delegator. */
  DelegatorWithdrawAddress(
    request: QueryDelegatorWithdrawAddressRequest,
  ): Promise<QueryDelegatorWithdrawAddressResponse>;
  /** CommunityPool queries the community pool coins. */
  CommunityPool(request: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponse>;
  /** LiquidityProviderRewards queries the outstanding liquidity provider reward coins. */
  LiquidityProviderRewards(
    request: QueryLiquidityProviderRewardsRequest,
  ): Promise<QueryLiquidityProviderRewardsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "cosmos.distribution.v1beta1.Query";
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.ValidatorDistributionInfo = this.ValidatorDistributionInfo.bind(this);
    this.ValidatorOutstandingRewards = this.ValidatorOutstandingRewards.bind(this);
    this.ValidatorCommission = this.ValidatorCommission.bind(this);
    this.ValidatorSlashes = this.ValidatorSlashes.bind(this);
    this.DelegationRewards = this.DelegationRewards.bind(this);
    this.DelegationTotalRewards = this.DelegationTotalRewards.bind(this);
    this.DelegatorValidators = this.DelegatorValidators.bind(this);
    this.DelegatorWithdrawAddress = this.DelegatorWithdrawAddress.bind(this);
    this.CommunityPool = this.CommunityPool.bind(this);
    this.LiquidityProviderRewards = this.LiquidityProviderRewards.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  ValidatorDistributionInfo(
    request: QueryValidatorDistributionInfoRequest,
  ): Promise<QueryValidatorDistributionInfoResponse> {
    const data = QueryValidatorDistributionInfoRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ValidatorDistributionInfo", data);
    return promise.then((data) => QueryValidatorDistributionInfoResponse.decode(_m0.Reader.create(data)));
  }

  ValidatorOutstandingRewards(
    request: QueryValidatorOutstandingRewardsRequest,
  ): Promise<QueryValidatorOutstandingRewardsResponse> {
    const data = QueryValidatorOutstandingRewardsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ValidatorOutstandingRewards", data);
    return promise.then((data) => QueryValidatorOutstandingRewardsResponse.decode(_m0.Reader.create(data)));
  }

  ValidatorCommission(request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse> {
    const data = QueryValidatorCommissionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ValidatorCommission", data);
    return promise.then((data) => QueryValidatorCommissionResponse.decode(_m0.Reader.create(data)));
  }

  ValidatorSlashes(request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse> {
    const data = QueryValidatorSlashesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ValidatorSlashes", data);
    return promise.then((data) => QueryValidatorSlashesResponse.decode(_m0.Reader.create(data)));
  }

  DelegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse> {
    const data = QueryDelegationRewardsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DelegationRewards", data);
    return promise.then((data) => QueryDelegationRewardsResponse.decode(_m0.Reader.create(data)));
  }

  DelegationTotalRewards(request: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponse> {
    const data = QueryDelegationTotalRewardsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DelegationTotalRewards", data);
    return promise.then((data) => QueryDelegationTotalRewardsResponse.decode(_m0.Reader.create(data)));
  }

  DelegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse> {
    const data = QueryDelegatorValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DelegatorValidators", data);
    return promise.then((data) => QueryDelegatorValidatorsResponse.decode(_m0.Reader.create(data)));
  }

  DelegatorWithdrawAddress(
    request: QueryDelegatorWithdrawAddressRequest,
  ): Promise<QueryDelegatorWithdrawAddressResponse> {
    const data = QueryDelegatorWithdrawAddressRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DelegatorWithdrawAddress", data);
    return promise.then((data) => QueryDelegatorWithdrawAddressResponse.decode(_m0.Reader.create(data)));
  }

  CommunityPool(request: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponse> {
    const data = QueryCommunityPoolRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CommunityPool", data);
    return promise.then((data) => QueryCommunityPoolResponse.decode(_m0.Reader.create(data)));
  }

  LiquidityProviderRewards(
    request: QueryLiquidityProviderRewardsRequest,
  ): Promise<QueryLiquidityProviderRewardsResponse> {
    const data = QueryLiquidityProviderRewardsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "LiquidityProviderRewards", data);
    return promise.then((data) => QueryLiquidityProviderRewardsResponse.decode(_m0.Reader.create(data)));
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
