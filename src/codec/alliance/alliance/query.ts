/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Coin, DecCoin } from "../../cosmos/base/v1beta1/coin";
import { AllianceAsset } from "./alliance";
import { Delegation } from "./delegations";
import { Params } from "./params";
import { RedelegationEntry } from "./redelegations";
import { UnbondingDelegation } from "./unbonding";

export const protobufPackage = "alliance.alliance";

/** Params */
export interface QueryParamsRequest {
}

export interface QueryParamsResponse {
  params?: Params;
}

/** Alliances */
export interface QueryAlliancesRequest {
  pagination?: PageRequest;
}

export interface QueryAlliancesResponse {
  alliances: AllianceAsset[];
  pagination?: PageResponse;
}

/** Alliance */
export interface QueryAllianceRequest {
  denom: string;
}

export interface QueryAllianceResponse {
  alliance?: AllianceAsset;
}

export interface QueryAllianceValidatorRequest {
  validatorAddr: string;
}

export interface QueryAllAllianceValidatorsRequest {
  pagination?: PageRequest;
}

export interface QueryAllAlliancesDelegationsRequest {
  pagination?: PageRequest;
}

/** AlliancesDelegation */
export interface QueryAlliancesDelegationsRequest {
  delegatorAddr: string;
  pagination?: PageRequest;
}

/** AlliancesDelegationByValidator */
export interface QueryAlliancesDelegationByValidatorRequest {
  delegatorAddr: string;
  validatorAddr: string;
  pagination?: PageRequest;
}

/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */
export interface DelegationResponse {
  delegation?: Delegation;
  balance?: Coin;
}

export interface QueryAlliancesDelegationsResponse {
  delegations: DelegationResponse[];
  pagination?: PageResponse;
}

/** AllianceDelegation */
export interface QueryAllianceDelegationRequest {
  delegatorAddr: string;
  validatorAddr: string;
  denom: string;
  pagination?: PageRequest;
}

export interface QueryAllianceDelegationResponse {
  delegation?: DelegationResponse;
}

/** AllianceDelegation */
export interface QueryAllianceDelegationRewardsRequest {
  delegatorAddr: string;
  validatorAddr: string;
  denom: string;
  pagination?: PageRequest;
}

export interface QueryAllianceDelegationRewardsResponse {
  rewards: Coin[];
}

export interface QueryAllianceValidatorResponse {
  validatorAddr: string;
  totalDelegationShares: DecCoin[];
  validatorShares: DecCoin[];
  totalStaked: DecCoin[];
}

export interface QueryAllianceValidatorsResponse {
  validators: QueryAllianceValidatorResponse[];
  pagination?: PageResponse;
}

/** AllianceDelegation */
export interface QueryAllianceUnbondingsByDelegatorRequest {
  delegatorAddr: string;
  pagination?: PageRequest;
}

export interface QueryAllianceUnbondingsByDelegatorResponse {
  unbondings: UnbondingDelegation[];
}

/** AllianceDelegation */
export interface QueryAllianceUnbondingsByDenomAndDelegatorRequest {
  denom: string;
  delegatorAddr: string;
  pagination?: PageRequest;
}

export interface QueryAllianceUnbondingsByDenomAndDelegatorResponse {
  unbondings: UnbondingDelegation[];
  pagination?: PageResponse;
}

export interface QueryAllianceUnbondingsRequest {
  denom: string;
  delegatorAddr: string;
  validatorAddr: string;
  pagination?: PageRequest;
}

export interface QueryAllianceUnbondingsResponse {
  unbondings: UnbondingDelegation[];
  pagination?: PageResponse;
}

/** Redelegations */
export interface QueryAllianceRedelegationsRequest {
  denom: string;
  delegatorAddr: string;
  pagination?: PageRequest;
}

export interface QueryAllianceRedelegationsResponse {
  redelegations: RedelegationEntry[];
  pagination?: PageResponse;
}

export interface QueryAllianceRedelegationsByDelegatorRequest {
  delegatorAddr: string;
  pagination?: PageRequest;
}

export interface QueryAllianceRedelegationsByDelegatorResponse {
  redelegations: RedelegationEntry[];
  pagination?: PageResponse;
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

function createBaseQueryAlliancesRequest(): QueryAlliancesRequest {
  return { pagination: undefined };
}

export const QueryAlliancesRequest = {
  encode(message: QueryAlliancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAlliancesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAlliancesRequest();
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

  fromJSON(object: any): QueryAlliancesRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAlliancesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAlliancesRequest>): QueryAlliancesRequest {
    return QueryAlliancesRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAlliancesRequest>): QueryAlliancesRequest {
    const message = createBaseQueryAlliancesRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAlliancesResponse(): QueryAlliancesResponse {
  return { alliances: [], pagination: undefined };
}

export const QueryAlliancesResponse = {
  encode(message: QueryAlliancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.alliances) {
      AllianceAsset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAlliancesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAlliancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.alliances.push(AllianceAsset.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAlliancesResponse {
    return {
      alliances: Array.isArray(object?.alliances) ? object.alliances.map((e: any) => AllianceAsset.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAlliancesResponse): unknown {
    const obj: any = {};
    if (message.alliances) {
      obj.alliances = message.alliances.map((e) => e ? AllianceAsset.toJSON(e) : undefined);
    } else {
      obj.alliances = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAlliancesResponse>): QueryAlliancesResponse {
    return QueryAlliancesResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAlliancesResponse>): QueryAlliancesResponse {
    const message = createBaseQueryAlliancesResponse();
    message.alliances = object.alliances?.map((e) => AllianceAsset.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllianceRequest(): QueryAllianceRequest {
  return { denom: "" };
}

export const QueryAllianceRequest = {
  encode(message: QueryAllianceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllianceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllianceRequest {
    return { denom: isSet(object.denom) ? String(object.denom) : "" };
  },

  toJSON(message: QueryAllianceRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<QueryAllianceRequest>): QueryAllianceRequest {
    return QueryAllianceRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllianceRequest>): QueryAllianceRequest {
    const message = createBaseQueryAllianceRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryAllianceResponse(): QueryAllianceResponse {
  return { alliance: undefined };
}

export const QueryAllianceResponse = {
  encode(message: QueryAllianceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.alliance !== undefined) {
      AllianceAsset.encode(message.alliance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllianceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.alliance = AllianceAsset.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllianceResponse {
    return { alliance: isSet(object.alliance) ? AllianceAsset.fromJSON(object.alliance) : undefined };
  },

  toJSON(message: QueryAllianceResponse): unknown {
    const obj: any = {};
    message.alliance !== undefined &&
      (obj.alliance = message.alliance ? AllianceAsset.toJSON(message.alliance) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllianceResponse>): QueryAllianceResponse {
    return QueryAllianceResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllianceResponse>): QueryAllianceResponse {
    const message = createBaseQueryAllianceResponse();
    message.alliance = (object.alliance !== undefined && object.alliance !== null)
      ? AllianceAsset.fromPartial(object.alliance)
      : undefined;
    return message;
  },
};

function createBaseQueryAllianceValidatorRequest(): QueryAllianceValidatorRequest {
  return { validatorAddr: "" };
}

export const QueryAllianceValidatorRequest = {
  encode(message: QueryAllianceValidatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllianceValidatorRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceValidatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validatorAddr = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllianceValidatorRequest {
    return { validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "" };
  },

  toJSON(message: QueryAllianceValidatorRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  create(base?: DeepPartial<QueryAllianceValidatorRequest>): QueryAllianceValidatorRequest {
    return QueryAllianceValidatorRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllianceValidatorRequest>): QueryAllianceValidatorRequest {
    const message = createBaseQueryAllianceValidatorRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
};

function createBaseQueryAllAllianceValidatorsRequest(): QueryAllAllianceValidatorsRequest {
  return { pagination: undefined };
}

export const QueryAllAllianceValidatorsRequest = {
  encode(message: QueryAllAllianceValidatorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAllianceValidatorsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAllianceValidatorsRequest();
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

  fromJSON(object: any): QueryAllAllianceValidatorsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllAllianceValidatorsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllAllianceValidatorsRequest>): QueryAllAllianceValidatorsRequest {
    return QueryAllAllianceValidatorsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllAllianceValidatorsRequest>): QueryAllAllianceValidatorsRequest {
    const message = createBaseQueryAllAllianceValidatorsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllAlliancesDelegationsRequest(): QueryAllAlliancesDelegationsRequest {
  return { pagination: undefined };
}

export const QueryAllAlliancesDelegationsRequest = {
  encode(message: QueryAllAlliancesDelegationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAlliancesDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAlliancesDelegationsRequest();
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

  fromJSON(object: any): QueryAllAlliancesDelegationsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllAlliancesDelegationsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllAlliancesDelegationsRequest>): QueryAllAlliancesDelegationsRequest {
    return QueryAllAlliancesDelegationsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllAlliancesDelegationsRequest>): QueryAllAlliancesDelegationsRequest {
    const message = createBaseQueryAllAlliancesDelegationsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAlliancesDelegationsRequest(): QueryAlliancesDelegationsRequest {
  return { delegatorAddr: "", pagination: undefined };
}

export const QueryAlliancesDelegationsRequest = {
  encode(message: QueryAlliancesDelegationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAlliancesDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAlliancesDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegatorAddr = reader.string();
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

  fromJSON(object: any): QueryAlliancesDelegationsRequest {
    return {
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAlliancesDelegationsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAlliancesDelegationsRequest>): QueryAlliancesDelegationsRequest {
    return QueryAlliancesDelegationsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAlliancesDelegationsRequest>): QueryAlliancesDelegationsRequest {
    const message = createBaseQueryAlliancesDelegationsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAlliancesDelegationByValidatorRequest(): QueryAlliancesDelegationByValidatorRequest {
  return { delegatorAddr: "", validatorAddr: "", pagination: undefined };
}

export const QueryAlliancesDelegationByValidatorRequest = {
  encode(message: QueryAlliancesDelegationByValidatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAlliancesDelegationByValidatorRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAlliancesDelegationByValidatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegatorAddr = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.validatorAddr = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): QueryAlliancesDelegationByValidatorRequest {
    return {
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAlliancesDelegationByValidatorRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAlliancesDelegationByValidatorRequest>): QueryAlliancesDelegationByValidatorRequest {
    return QueryAlliancesDelegationByValidatorRequest.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<QueryAlliancesDelegationByValidatorRequest>,
  ): QueryAlliancesDelegationByValidatorRequest {
    const message = createBaseQueryAlliancesDelegationByValidatorRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseDelegationResponse(): DelegationResponse {
  return { delegation: undefined, balance: undefined };
}

export const DelegationResponse = {
  encode(message: DelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegation !== undefined) {
      Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegation = Delegation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.balance = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DelegationResponse {
    return {
      delegation: isSet(object.delegation) ? Delegation.fromJSON(object.delegation) : undefined,
      balance: isSet(object.balance) ? Coin.fromJSON(object.balance) : undefined,
    };
  },

  toJSON(message: DelegationResponse): unknown {
    const obj: any = {};
    message.delegation !== undefined &&
      (obj.delegation = message.delegation ? Delegation.toJSON(message.delegation) : undefined);
    message.balance !== undefined && (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
    return obj;
  },

  create(base?: DeepPartial<DelegationResponse>): DelegationResponse {
    return DelegationResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DelegationResponse>): DelegationResponse {
    const message = createBaseDelegationResponse();
    message.delegation = (object.delegation !== undefined && object.delegation !== null)
      ? Delegation.fromPartial(object.delegation)
      : undefined;
    message.balance = (object.balance !== undefined && object.balance !== null)
      ? Coin.fromPartial(object.balance)
      : undefined;
    return message;
  },
};

function createBaseQueryAlliancesDelegationsResponse(): QueryAlliancesDelegationsResponse {
  return { delegations: [], pagination: undefined };
}

export const QueryAlliancesDelegationsResponse = {
  encode(message: QueryAlliancesDelegationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.delegations) {
      DelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAlliancesDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAlliancesDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegations.push(DelegationResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAlliancesDelegationsResponse {
    return {
      delegations: Array.isArray(object?.delegations)
        ? object.delegations.map((e: any) => DelegationResponse.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAlliancesDelegationsResponse): unknown {
    const obj: any = {};
    if (message.delegations) {
      obj.delegations = message.delegations.map((e) => e ? DelegationResponse.toJSON(e) : undefined);
    } else {
      obj.delegations = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAlliancesDelegationsResponse>): QueryAlliancesDelegationsResponse {
    return QueryAlliancesDelegationsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAlliancesDelegationsResponse>): QueryAlliancesDelegationsResponse {
    const message = createBaseQueryAlliancesDelegationsResponse();
    message.delegations = object.delegations?.map((e) => DelegationResponse.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllianceDelegationRequest(): QueryAllianceDelegationRequest {
  return { delegatorAddr: "", validatorAddr: "", denom: "", pagination: undefined };
}

export const QueryAllianceDelegationRequest = {
  encode(message: QueryAllianceDelegationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllianceDelegationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegatorAddr = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.validatorAddr = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.denom = reader.string();
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

  fromJSON(object: any): QueryAllianceDelegationRequest {
    return {
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllianceDelegationRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    message.denom !== undefined && (obj.denom = message.denom);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllianceDelegationRequest>): QueryAllianceDelegationRequest {
    return QueryAllianceDelegationRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllianceDelegationRequest>): QueryAllianceDelegationRequest {
    const message = createBaseQueryAllianceDelegationRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    message.denom = object.denom ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllianceDelegationResponse(): QueryAllianceDelegationResponse {
  return { delegation: undefined };
}

export const QueryAllianceDelegationResponse = {
  encode(message: QueryAllianceDelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegation !== undefined) {
      DelegationResponse.encode(message.delegation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllianceDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegation = DelegationResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllianceDelegationResponse {
    return { delegation: isSet(object.delegation) ? DelegationResponse.fromJSON(object.delegation) : undefined };
  },

  toJSON(message: QueryAllianceDelegationResponse): unknown {
    const obj: any = {};
    message.delegation !== undefined &&
      (obj.delegation = message.delegation ? DelegationResponse.toJSON(message.delegation) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllianceDelegationResponse>): QueryAllianceDelegationResponse {
    return QueryAllianceDelegationResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllianceDelegationResponse>): QueryAllianceDelegationResponse {
    const message = createBaseQueryAllianceDelegationResponse();
    message.delegation = (object.delegation !== undefined && object.delegation !== null)
      ? DelegationResponse.fromPartial(object.delegation)
      : undefined;
    return message;
  },
};

function createBaseQueryAllianceDelegationRewardsRequest(): QueryAllianceDelegationRewardsRequest {
  return { delegatorAddr: "", validatorAddr: "", denom: "", pagination: undefined };
}

export const QueryAllianceDelegationRewardsRequest = {
  encode(message: QueryAllianceDelegationRewardsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllianceDelegationRewardsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceDelegationRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegatorAddr = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.validatorAddr = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.denom = reader.string();
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

  fromJSON(object: any): QueryAllianceDelegationRewardsRequest {
    return {
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllianceDelegationRewardsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    message.denom !== undefined && (obj.denom = message.denom);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllianceDelegationRewardsRequest>): QueryAllianceDelegationRewardsRequest {
    return QueryAllianceDelegationRewardsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllianceDelegationRewardsRequest>): QueryAllianceDelegationRewardsRequest {
    const message = createBaseQueryAllianceDelegationRewardsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    message.denom = object.denom ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllianceDelegationRewardsResponse(): QueryAllianceDelegationRewardsResponse {
  return { rewards: [] };
}

export const QueryAllianceDelegationRewardsResponse = {
  encode(message: QueryAllianceDelegationRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllianceDelegationRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceDelegationRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rewards.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllianceDelegationRewardsResponse {
    return { rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => Coin.fromJSON(e)) : [] };
  },

  toJSON(message: QueryAllianceDelegationRewardsResponse): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryAllianceDelegationRewardsResponse>): QueryAllianceDelegationRewardsResponse {
    return QueryAllianceDelegationRewardsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllianceDelegationRewardsResponse>): QueryAllianceDelegationRewardsResponse {
    const message = createBaseQueryAllianceDelegationRewardsResponse();
    message.rewards = object.rewards?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryAllianceValidatorResponse(): QueryAllianceValidatorResponse {
  return { validatorAddr: "", totalDelegationShares: [], validatorShares: [], totalStaked: [] };
}

export const QueryAllianceValidatorResponse = {
  encode(message: QueryAllianceValidatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    for (const v of message.totalDelegationShares) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.validatorShares) {
      DecCoin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.totalStaked) {
      DecCoin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllianceValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validatorAddr = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.totalDelegationShares.push(DecCoin.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.validatorShares.push(DecCoin.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.totalStaked.push(DecCoin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllianceValidatorResponse {
    return {
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
      totalDelegationShares: Array.isArray(object?.totalDelegationShares)
        ? object.totalDelegationShares.map((e: any) => DecCoin.fromJSON(e))
        : [],
      validatorShares: Array.isArray(object?.validatorShares)
        ? object.validatorShares.map((e: any) => DecCoin.fromJSON(e))
        : [],
      totalStaked: Array.isArray(object?.totalStaked) ? object.totalStaked.map((e: any) => DecCoin.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryAllianceValidatorResponse): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    if (message.totalDelegationShares) {
      obj.totalDelegationShares = message.totalDelegationShares.map((e) => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.totalDelegationShares = [];
    }
    if (message.validatorShares) {
      obj.validatorShares = message.validatorShares.map((e) => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.validatorShares = [];
    }
    if (message.totalStaked) {
      obj.totalStaked = message.totalStaked.map((e) => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.totalStaked = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryAllianceValidatorResponse>): QueryAllianceValidatorResponse {
    return QueryAllianceValidatorResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllianceValidatorResponse>): QueryAllianceValidatorResponse {
    const message = createBaseQueryAllianceValidatorResponse();
    message.validatorAddr = object.validatorAddr ?? "";
    message.totalDelegationShares = object.totalDelegationShares?.map((e) => DecCoin.fromPartial(e)) || [];
    message.validatorShares = object.validatorShares?.map((e) => DecCoin.fromPartial(e)) || [];
    message.totalStaked = object.totalStaked?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryAllianceValidatorsResponse(): QueryAllianceValidatorsResponse {
  return { validators: [], pagination: undefined };
}

export const QueryAllianceValidatorsResponse = {
  encode(message: QueryAllianceValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      QueryAllianceValidatorResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllianceValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validators.push(QueryAllianceValidatorResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllianceValidatorsResponse {
    return {
      validators: Array.isArray(object?.validators)
        ? object.validators.map((e: any) => QueryAllianceValidatorResponse.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllianceValidatorsResponse): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map((e) => e ? QueryAllianceValidatorResponse.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllianceValidatorsResponse>): QueryAllianceValidatorsResponse {
    return QueryAllianceValidatorsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllianceValidatorsResponse>): QueryAllianceValidatorsResponse {
    const message = createBaseQueryAllianceValidatorsResponse();
    message.validators = object.validators?.map((e) => QueryAllianceValidatorResponse.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllianceUnbondingsByDelegatorRequest(): QueryAllianceUnbondingsByDelegatorRequest {
  return { delegatorAddr: "", pagination: undefined };
}

export const QueryAllianceUnbondingsByDelegatorRequest = {
  encode(message: QueryAllianceUnbondingsByDelegatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllianceUnbondingsByDelegatorRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceUnbondingsByDelegatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegatorAddr = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): QueryAllianceUnbondingsByDelegatorRequest {
    return {
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllianceUnbondingsByDelegatorRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllianceUnbondingsByDelegatorRequest>): QueryAllianceUnbondingsByDelegatorRequest {
    return QueryAllianceUnbondingsByDelegatorRequest.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<QueryAllianceUnbondingsByDelegatorRequest>,
  ): QueryAllianceUnbondingsByDelegatorRequest {
    const message = createBaseQueryAllianceUnbondingsByDelegatorRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllianceUnbondingsByDelegatorResponse(): QueryAllianceUnbondingsByDelegatorResponse {
  return { unbondings: [] };
}

export const QueryAllianceUnbondingsByDelegatorResponse = {
  encode(message: QueryAllianceUnbondingsByDelegatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.unbondings) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllianceUnbondingsByDelegatorResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceUnbondingsByDelegatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.unbondings.push(UnbondingDelegation.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllianceUnbondingsByDelegatorResponse {
    return {
      unbondings: Array.isArray(object?.unbondings)
        ? object.unbondings.map((e: any) => UnbondingDelegation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryAllianceUnbondingsByDelegatorResponse): unknown {
    const obj: any = {};
    if (message.unbondings) {
      obj.unbondings = message.unbondings.map((e) => e ? UnbondingDelegation.toJSON(e) : undefined);
    } else {
      obj.unbondings = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryAllianceUnbondingsByDelegatorResponse>): QueryAllianceUnbondingsByDelegatorResponse {
    return QueryAllianceUnbondingsByDelegatorResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<QueryAllianceUnbondingsByDelegatorResponse>,
  ): QueryAllianceUnbondingsByDelegatorResponse {
    const message = createBaseQueryAllianceUnbondingsByDelegatorResponse();
    message.unbondings = object.unbondings?.map((e) => UnbondingDelegation.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryAllianceUnbondingsByDenomAndDelegatorRequest(): QueryAllianceUnbondingsByDenomAndDelegatorRequest {
  return { denom: "", delegatorAddr: "", pagination: undefined };
}

export const QueryAllianceUnbondingsByDenomAndDelegatorRequest = {
  encode(
    message: QueryAllianceUnbondingsByDenomAndDelegatorRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.delegatorAddr !== "") {
      writer.uint32(18).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllianceUnbondingsByDenomAndDelegatorRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceUnbondingsByDenomAndDelegatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.delegatorAddr = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): QueryAllianceUnbondingsByDenomAndDelegatorRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllianceUnbondingsByDenomAndDelegatorRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(
    base?: DeepPartial<QueryAllianceUnbondingsByDenomAndDelegatorRequest>,
  ): QueryAllianceUnbondingsByDenomAndDelegatorRequest {
    return QueryAllianceUnbondingsByDenomAndDelegatorRequest.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<QueryAllianceUnbondingsByDenomAndDelegatorRequest>,
  ): QueryAllianceUnbondingsByDenomAndDelegatorRequest {
    const message = createBaseQueryAllianceUnbondingsByDenomAndDelegatorRequest();
    message.denom = object.denom ?? "";
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllianceUnbondingsByDenomAndDelegatorResponse(): QueryAllianceUnbondingsByDenomAndDelegatorResponse {
  return { unbondings: [], pagination: undefined };
}

export const QueryAllianceUnbondingsByDenomAndDelegatorResponse = {
  encode(
    message: QueryAllianceUnbondingsByDenomAndDelegatorResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.unbondings) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllianceUnbondingsByDenomAndDelegatorResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceUnbondingsByDenomAndDelegatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.unbondings.push(UnbondingDelegation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllianceUnbondingsByDenomAndDelegatorResponse {
    return {
      unbondings: Array.isArray(object?.unbondings)
        ? object.unbondings.map((e: any) => UnbondingDelegation.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllianceUnbondingsByDenomAndDelegatorResponse): unknown {
    const obj: any = {};
    if (message.unbondings) {
      obj.unbondings = message.unbondings.map((e) => e ? UnbondingDelegation.toJSON(e) : undefined);
    } else {
      obj.unbondings = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(
    base?: DeepPartial<QueryAllianceUnbondingsByDenomAndDelegatorResponse>,
  ): QueryAllianceUnbondingsByDenomAndDelegatorResponse {
    return QueryAllianceUnbondingsByDenomAndDelegatorResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<QueryAllianceUnbondingsByDenomAndDelegatorResponse>,
  ): QueryAllianceUnbondingsByDenomAndDelegatorResponse {
    const message = createBaseQueryAllianceUnbondingsByDenomAndDelegatorResponse();
    message.unbondings = object.unbondings?.map((e) => UnbondingDelegation.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllianceUnbondingsRequest(): QueryAllianceUnbondingsRequest {
  return { denom: "", delegatorAddr: "", validatorAddr: "", pagination: undefined };
}

export const QueryAllianceUnbondingsRequest = {
  encode(message: QueryAllianceUnbondingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.delegatorAddr !== "") {
      writer.uint32(18).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(26).string(message.validatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllianceUnbondingsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceUnbondingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.delegatorAddr = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.validatorAddr = reader.string();
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

  fromJSON(object: any): QueryAllianceUnbondingsRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllianceUnbondingsRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllianceUnbondingsRequest>): QueryAllianceUnbondingsRequest {
    return QueryAllianceUnbondingsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllianceUnbondingsRequest>): QueryAllianceUnbondingsRequest {
    const message = createBaseQueryAllianceUnbondingsRequest();
    message.denom = object.denom ?? "";
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllianceUnbondingsResponse(): QueryAllianceUnbondingsResponse {
  return { unbondings: [], pagination: undefined };
}

export const QueryAllianceUnbondingsResponse = {
  encode(message: QueryAllianceUnbondingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.unbondings) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllianceUnbondingsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceUnbondingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.unbondings.push(UnbondingDelegation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllianceUnbondingsResponse {
    return {
      unbondings: Array.isArray(object?.unbondings)
        ? object.unbondings.map((e: any) => UnbondingDelegation.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllianceUnbondingsResponse): unknown {
    const obj: any = {};
    if (message.unbondings) {
      obj.unbondings = message.unbondings.map((e) => e ? UnbondingDelegation.toJSON(e) : undefined);
    } else {
      obj.unbondings = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllianceUnbondingsResponse>): QueryAllianceUnbondingsResponse {
    return QueryAllianceUnbondingsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllianceUnbondingsResponse>): QueryAllianceUnbondingsResponse {
    const message = createBaseQueryAllianceUnbondingsResponse();
    message.unbondings = object.unbondings?.map((e) => UnbondingDelegation.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllianceRedelegationsRequest(): QueryAllianceRedelegationsRequest {
  return { denom: "", delegatorAddr: "", pagination: undefined };
}

export const QueryAllianceRedelegationsRequest = {
  encode(message: QueryAllianceRedelegationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.delegatorAddr !== "") {
      writer.uint32(18).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllianceRedelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceRedelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.delegatorAddr = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): QueryAllianceRedelegationsRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllianceRedelegationsRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllianceRedelegationsRequest>): QueryAllianceRedelegationsRequest {
    return QueryAllianceRedelegationsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllianceRedelegationsRequest>): QueryAllianceRedelegationsRequest {
    const message = createBaseQueryAllianceRedelegationsRequest();
    message.denom = object.denom ?? "";
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllianceRedelegationsResponse(): QueryAllianceRedelegationsResponse {
  return { redelegations: [], pagination: undefined };
}

export const QueryAllianceRedelegationsResponse = {
  encode(message: QueryAllianceRedelegationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.redelegations) {
      RedelegationEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllianceRedelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceRedelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.redelegations.push(RedelegationEntry.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllianceRedelegationsResponse {
    return {
      redelegations: Array.isArray(object?.redelegations)
        ? object.redelegations.map((e: any) => RedelegationEntry.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllianceRedelegationsResponse): unknown {
    const obj: any = {};
    if (message.redelegations) {
      obj.redelegations = message.redelegations.map((e) => e ? RedelegationEntry.toJSON(e) : undefined);
    } else {
      obj.redelegations = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllianceRedelegationsResponse>): QueryAllianceRedelegationsResponse {
    return QueryAllianceRedelegationsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllianceRedelegationsResponse>): QueryAllianceRedelegationsResponse {
    const message = createBaseQueryAllianceRedelegationsResponse();
    message.redelegations = object.redelegations?.map((e) => RedelegationEntry.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllianceRedelegationsByDelegatorRequest(): QueryAllianceRedelegationsByDelegatorRequest {
  return { delegatorAddr: "", pagination: undefined };
}

export const QueryAllianceRedelegationsByDelegatorRequest = {
  encode(message: QueryAllianceRedelegationsByDelegatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllianceRedelegationsByDelegatorRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceRedelegationsByDelegatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegatorAddr = reader.string();
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

  fromJSON(object: any): QueryAllianceRedelegationsByDelegatorRequest {
    return {
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllianceRedelegationsByDelegatorRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(
    base?: DeepPartial<QueryAllianceRedelegationsByDelegatorRequest>,
  ): QueryAllianceRedelegationsByDelegatorRequest {
    return QueryAllianceRedelegationsByDelegatorRequest.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<QueryAllianceRedelegationsByDelegatorRequest>,
  ): QueryAllianceRedelegationsByDelegatorRequest {
    const message = createBaseQueryAllianceRedelegationsByDelegatorRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllianceRedelegationsByDelegatorResponse(): QueryAllianceRedelegationsByDelegatorResponse {
  return { redelegations: [], pagination: undefined };
}

export const QueryAllianceRedelegationsByDelegatorResponse = {
  encode(message: QueryAllianceRedelegationsByDelegatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.redelegations) {
      RedelegationEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllianceRedelegationsByDelegatorResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllianceRedelegationsByDelegatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.redelegations.push(RedelegationEntry.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllianceRedelegationsByDelegatorResponse {
    return {
      redelegations: Array.isArray(object?.redelegations)
        ? object.redelegations.map((e: any) => RedelegationEntry.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllianceRedelegationsByDelegatorResponse): unknown {
    const obj: any = {};
    if (message.redelegations) {
      obj.redelegations = message.redelegations.map((e) => e ? RedelegationEntry.toJSON(e) : undefined);
    } else {
      obj.redelegations = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(
    base?: DeepPartial<QueryAllianceRedelegationsByDelegatorResponse>,
  ): QueryAllianceRedelegationsByDelegatorResponse {
    return QueryAllianceRedelegationsByDelegatorResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<QueryAllianceRedelegationsByDelegatorResponse>,
  ): QueryAllianceRedelegationsByDelegatorResponse {
    const message = createBaseQueryAllianceRedelegationsByDelegatorResponse();
    message.redelegations = object.redelegations?.map((e) => RedelegationEntry.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

export interface Query {
  /**
   * Query Alliance module parameters more info about the params
   * https://docs.alliance.money/tech/parameters
   */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Query all alliances with pagination */
  Alliances(request: QueryAlliancesRequest): Promise<QueryAlliancesResponse>;
  /** Query all alliances delegations with pagination */
  AllAlliancesDelegations(request: QueryAllAlliancesDelegationsRequest): Promise<QueryAlliancesDelegationsResponse>;
  /** Query alliance validator */
  AllianceValidator(request: QueryAllianceValidatorRequest): Promise<QueryAllianceValidatorResponse>;
  /** Query all paginated alliance validators */
  AllAllianceValidators(request: QueryAllAllianceValidatorsRequest): Promise<QueryAllianceValidatorsResponse>;
  /** Query all paginated alliance delegations for a delegator addr */
  AlliancesDelegation(request: QueryAlliancesDelegationsRequest): Promise<QueryAlliancesDelegationsResponse>;
  /** Query all paginated alliance delegations for a delegator addr and validator_addr */
  AlliancesDelegationByValidator(
    request: QueryAlliancesDelegationByValidatorRequest,
  ): Promise<QueryAlliancesDelegationsResponse>;
  /** Query a specific delegation by delegator addr, validator addr and denom */
  AllianceDelegation(request: QueryAllianceDelegationRequest): Promise<QueryAllianceDelegationResponse>;
  /** Query a specific delegation rewards by delegator addr, validator addr and denom */
  AllianceDelegationRewards(
    request: QueryAllianceDelegationRewardsRequest,
  ): Promise<QueryAllianceDelegationRewardsResponse>;
  /** Query unbondings by delegator address */
  AllianceUnbondingsByDelegator(
    request: QueryAllianceUnbondingsByDelegatorRequest,
  ): Promise<QueryAllianceUnbondingsByDelegatorResponse>;
  /** Query unbondings by denom, delegator addr */
  AllianceUnbondingsByDenomAndDelegator(
    request: QueryAllianceUnbondingsByDenomAndDelegatorRequest,
  ): Promise<QueryAllianceUnbondingsByDenomAndDelegatorResponse>;
  /** Query unbondings by denom, delegator addr, validator addr */
  AllianceUnbondings(request: QueryAllianceUnbondingsRequest): Promise<QueryAllianceUnbondingsResponse>;
  /** Query paginated redelegations delegator addr */
  AllianceRedelegationsByDelegator(
    request: QueryAllianceRedelegationsByDelegatorRequest,
  ): Promise<QueryAllianceRedelegationsByDelegatorResponse>;
  /** Query paginated redelegations by denom and delegator addr */
  AllianceRedelegations(request: QueryAllianceRedelegationsRequest): Promise<QueryAllianceRedelegationsResponse>;
  /** Query a specific alliance by denom */
  Alliance(request: QueryAllianceRequest): Promise<QueryAllianceResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "alliance.alliance.Query";
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Alliances = this.Alliances.bind(this);
    this.AllAlliancesDelegations = this.AllAlliancesDelegations.bind(this);
    this.AllianceValidator = this.AllianceValidator.bind(this);
    this.AllAllianceValidators = this.AllAllianceValidators.bind(this);
    this.AlliancesDelegation = this.AlliancesDelegation.bind(this);
    this.AlliancesDelegationByValidator = this.AlliancesDelegationByValidator.bind(this);
    this.AllianceDelegation = this.AllianceDelegation.bind(this);
    this.AllianceDelegationRewards = this.AllianceDelegationRewards.bind(this);
    this.AllianceUnbondingsByDelegator = this.AllianceUnbondingsByDelegator.bind(this);
    this.AllianceUnbondingsByDenomAndDelegator = this.AllianceUnbondingsByDenomAndDelegator.bind(this);
    this.AllianceUnbondings = this.AllianceUnbondings.bind(this);
    this.AllianceRedelegationsByDelegator = this.AllianceRedelegationsByDelegator.bind(this);
    this.AllianceRedelegations = this.AllianceRedelegations.bind(this);
    this.Alliance = this.Alliance.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  Alliances(request: QueryAlliancesRequest): Promise<QueryAlliancesResponse> {
    const data = QueryAlliancesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Alliances", data);
    return promise.then((data) => QueryAlliancesResponse.decode(_m0.Reader.create(data)));
  }

  AllAlliancesDelegations(request: QueryAllAlliancesDelegationsRequest): Promise<QueryAlliancesDelegationsResponse> {
    const data = QueryAllAlliancesDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllAlliancesDelegations", data);
    return promise.then((data) => QueryAlliancesDelegationsResponse.decode(_m0.Reader.create(data)));
  }

  AllianceValidator(request: QueryAllianceValidatorRequest): Promise<QueryAllianceValidatorResponse> {
    const data = QueryAllianceValidatorRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllianceValidator", data);
    return promise.then((data) => QueryAllianceValidatorResponse.decode(_m0.Reader.create(data)));
  }

  AllAllianceValidators(request: QueryAllAllianceValidatorsRequest): Promise<QueryAllianceValidatorsResponse> {
    const data = QueryAllAllianceValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllAllianceValidators", data);
    return promise.then((data) => QueryAllianceValidatorsResponse.decode(_m0.Reader.create(data)));
  }

  AlliancesDelegation(request: QueryAlliancesDelegationsRequest): Promise<QueryAlliancesDelegationsResponse> {
    const data = QueryAlliancesDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AlliancesDelegation", data);
    return promise.then((data) => QueryAlliancesDelegationsResponse.decode(_m0.Reader.create(data)));
  }

  AlliancesDelegationByValidator(
    request: QueryAlliancesDelegationByValidatorRequest,
  ): Promise<QueryAlliancesDelegationsResponse> {
    const data = QueryAlliancesDelegationByValidatorRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AlliancesDelegationByValidator", data);
    return promise.then((data) => QueryAlliancesDelegationsResponse.decode(_m0.Reader.create(data)));
  }

  AllianceDelegation(request: QueryAllianceDelegationRequest): Promise<QueryAllianceDelegationResponse> {
    const data = QueryAllianceDelegationRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllianceDelegation", data);
    return promise.then((data) => QueryAllianceDelegationResponse.decode(_m0.Reader.create(data)));
  }

  AllianceDelegationRewards(
    request: QueryAllianceDelegationRewardsRequest,
  ): Promise<QueryAllianceDelegationRewardsResponse> {
    const data = QueryAllianceDelegationRewardsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllianceDelegationRewards", data);
    return promise.then((data) => QueryAllianceDelegationRewardsResponse.decode(_m0.Reader.create(data)));
  }

  AllianceUnbondingsByDelegator(
    request: QueryAllianceUnbondingsByDelegatorRequest,
  ): Promise<QueryAllianceUnbondingsByDelegatorResponse> {
    const data = QueryAllianceUnbondingsByDelegatorRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllianceUnbondingsByDelegator", data);
    return promise.then((data) => QueryAllianceUnbondingsByDelegatorResponse.decode(_m0.Reader.create(data)));
  }

  AllianceUnbondingsByDenomAndDelegator(
    request: QueryAllianceUnbondingsByDenomAndDelegatorRequest,
  ): Promise<QueryAllianceUnbondingsByDenomAndDelegatorResponse> {
    const data = QueryAllianceUnbondingsByDenomAndDelegatorRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllianceUnbondingsByDenomAndDelegator", data);
    return promise.then((data) => QueryAllianceUnbondingsByDenomAndDelegatorResponse.decode(_m0.Reader.create(data)));
  }

  AllianceUnbondings(request: QueryAllianceUnbondingsRequest): Promise<QueryAllianceUnbondingsResponse> {
    const data = QueryAllianceUnbondingsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllianceUnbondings", data);
    return promise.then((data) => QueryAllianceUnbondingsResponse.decode(_m0.Reader.create(data)));
  }

  AllianceRedelegationsByDelegator(
    request: QueryAllianceRedelegationsByDelegatorRequest,
  ): Promise<QueryAllianceRedelegationsByDelegatorResponse> {
    const data = QueryAllianceRedelegationsByDelegatorRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllianceRedelegationsByDelegator", data);
    return promise.then((data) => QueryAllianceRedelegationsByDelegatorResponse.decode(_m0.Reader.create(data)));
  }

  AllianceRedelegations(request: QueryAllianceRedelegationsRequest): Promise<QueryAllianceRedelegationsResponse> {
    const data = QueryAllianceRedelegationsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllianceRedelegations", data);
    return promise.then((data) => QueryAllianceRedelegationsResponse.decode(_m0.Reader.create(data)));
  }

  Alliance(request: QueryAllianceRequest): Promise<QueryAllianceResponse> {
    const data = QueryAllianceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Alliance", data);
    return promise.then((data) => QueryAllianceResponse.decode(_m0.Reader.create(data)));
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
