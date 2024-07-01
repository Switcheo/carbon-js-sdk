/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import {
  PageRequest,
  PageResponse,
} from "../../cosmos/base/query/v1beta1/pagination";
import { AllianceAsset } from "./alliance";
import { Delegation } from "./delegations";
import { Coin, DecCoin } from "../../cosmos/base/v1beta1/coin";
import { UnbondingDelegation } from "./unbonding";
import { RedelegationEntry } from "./redelegations";

export const protobufPackage = "alliance.alliance";

/** Params */
export interface QueryParamsRequest {}

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

const baseQueryAlliancesRequest: object = {};

export const QueryAlliancesRequest = {
  encode(
    message: QueryAlliancesRequest,
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
  ): QueryAlliancesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAlliancesRequest } as QueryAlliancesRequest;
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

  fromJSON(object: any): QueryAlliancesRequest {
    const message = { ...baseQueryAlliancesRequest } as QueryAlliancesRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAlliancesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAlliancesRequest>
  ): QueryAlliancesRequest {
    const message = { ...baseQueryAlliancesRequest } as QueryAlliancesRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAlliancesResponse: object = {};

export const QueryAlliancesResponse = {
  encode(
    message: QueryAlliancesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.alliances) {
      AllianceAsset.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAlliancesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAlliancesResponse } as QueryAlliancesResponse;
    message.alliances = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.alliances.push(AllianceAsset.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAlliancesResponse {
    const message = { ...baseQueryAlliancesResponse } as QueryAlliancesResponse;
    message.alliances = (object.alliances ?? []).map((e: any) =>
      AllianceAsset.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAlliancesResponse): unknown {
    const obj: any = {};
    if (message.alliances) {
      obj.alliances = message.alliances.map((e) =>
        e ? AllianceAsset.toJSON(e) : undefined
      );
    } else {
      obj.alliances = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAlliancesResponse>
  ): QueryAlliancesResponse {
    const message = { ...baseQueryAlliancesResponse } as QueryAlliancesResponse;
    message.alliances = (object.alliances ?? []).map((e) =>
      AllianceAsset.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllianceRequest: object = { denom: "" };

export const QueryAllianceRequest = {
  encode(
    message: QueryAllianceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllianceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllianceRequest } as QueryAllianceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllianceRequest {
    const message = { ...baseQueryAllianceRequest } as QueryAllianceRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: QueryAllianceRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllianceRequest>): QueryAllianceRequest {
    const message = { ...baseQueryAllianceRequest } as QueryAllianceRequest;
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseQueryAllianceResponse: object = {};

export const QueryAllianceResponse = {
  encode(
    message: QueryAllianceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.alliance !== undefined) {
      AllianceAsset.encode(message.alliance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllianceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllianceResponse } as QueryAllianceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.alliance = AllianceAsset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllianceResponse {
    const message = { ...baseQueryAllianceResponse } as QueryAllianceResponse;
    message.alliance =
      object.alliance !== undefined && object.alliance !== null
        ? AllianceAsset.fromJSON(object.alliance)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllianceResponse): unknown {
    const obj: any = {};
    message.alliance !== undefined &&
      (obj.alliance = message.alliance
        ? AllianceAsset.toJSON(message.alliance)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllianceResponse>
  ): QueryAllianceResponse {
    const message = { ...baseQueryAllianceResponse } as QueryAllianceResponse;
    message.alliance =
      object.alliance !== undefined && object.alliance !== null
        ? AllianceAsset.fromPartial(object.alliance)
        : undefined;
    return message;
  },
};

const baseQueryAllianceValidatorRequest: object = { validatorAddr: "" };

export const QueryAllianceValidatorRequest = {
  encode(
    message: QueryAllianceValidatorRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllianceValidatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllianceValidatorRequest,
    } as QueryAllianceValidatorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllianceValidatorRequest {
    const message = {
      ...baseQueryAllianceValidatorRequest,
    } as QueryAllianceValidatorRequest;
    message.validatorAddr =
      object.validatorAddr !== undefined && object.validatorAddr !== null
        ? String(object.validatorAddr)
        : "";
    return message;
  },

  toJSON(message: QueryAllianceValidatorRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined &&
      (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllianceValidatorRequest>
  ): QueryAllianceValidatorRequest {
    const message = {
      ...baseQueryAllianceValidatorRequest,
    } as QueryAllianceValidatorRequest;
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
};

const baseQueryAllAllianceValidatorsRequest: object = {};

export const QueryAllAllianceValidatorsRequest = {
  encode(
    message: QueryAllAllianceValidatorsRequest,
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
  ): QueryAllAllianceValidatorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllAllianceValidatorsRequest,
    } as QueryAllAllianceValidatorsRequest;
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

  fromJSON(object: any): QueryAllAllianceValidatorsRequest {
    const message = {
      ...baseQueryAllAllianceValidatorsRequest,
    } as QueryAllAllianceValidatorsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllAllianceValidatorsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllAllianceValidatorsRequest>
  ): QueryAllAllianceValidatorsRequest {
    const message = {
      ...baseQueryAllAllianceValidatorsRequest,
    } as QueryAllAllianceValidatorsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllAlliancesDelegationsRequest: object = {};

export const QueryAllAlliancesDelegationsRequest = {
  encode(
    message: QueryAllAlliancesDelegationsRequest,
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
  ): QueryAllAlliancesDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllAlliancesDelegationsRequest,
    } as QueryAllAlliancesDelegationsRequest;
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

  fromJSON(object: any): QueryAllAlliancesDelegationsRequest {
    const message = {
      ...baseQueryAllAlliancesDelegationsRequest,
    } as QueryAllAlliancesDelegationsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllAlliancesDelegationsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllAlliancesDelegationsRequest>
  ): QueryAllAlliancesDelegationsRequest {
    const message = {
      ...baseQueryAllAlliancesDelegationsRequest,
    } as QueryAllAlliancesDelegationsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAlliancesDelegationsRequest: object = { delegatorAddr: "" };

export const QueryAlliancesDelegationsRequest = {
  encode(
    message: QueryAlliancesDelegationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAlliancesDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAlliancesDelegationsRequest,
    } as QueryAlliancesDelegationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
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

  fromJSON(object: any): QueryAlliancesDelegationsRequest {
    const message = {
      ...baseQueryAlliancesDelegationsRequest,
    } as QueryAlliancesDelegationsRequest;
    message.delegatorAddr =
      object.delegatorAddr !== undefined && object.delegatorAddr !== null
        ? String(object.delegatorAddr)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAlliancesDelegationsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined &&
      (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAlliancesDelegationsRequest>
  ): QueryAlliancesDelegationsRequest {
    const message = {
      ...baseQueryAlliancesDelegationsRequest,
    } as QueryAlliancesDelegationsRequest;
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAlliancesDelegationByValidatorRequest: object = {
  delegatorAddr: "",
  validatorAddr: "",
};

export const QueryAlliancesDelegationByValidatorRequest = {
  encode(
    message: QueryAlliancesDelegationByValidatorRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAlliancesDelegationByValidatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAlliancesDelegationByValidatorRequest,
    } as QueryAlliancesDelegationByValidatorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
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

  fromJSON(object: any): QueryAlliancesDelegationByValidatorRequest {
    const message = {
      ...baseQueryAlliancesDelegationByValidatorRequest,
    } as QueryAlliancesDelegationByValidatorRequest;
    message.delegatorAddr =
      object.delegatorAddr !== undefined && object.delegatorAddr !== null
        ? String(object.delegatorAddr)
        : "";
    message.validatorAddr =
      object.validatorAddr !== undefined && object.validatorAddr !== null
        ? String(object.validatorAddr)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAlliancesDelegationByValidatorRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined &&
      (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined &&
      (obj.validatorAddr = message.validatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAlliancesDelegationByValidatorRequest>
  ): QueryAlliancesDelegationByValidatorRequest {
    const message = {
      ...baseQueryAlliancesDelegationByValidatorRequest,
    } as QueryAlliancesDelegationByValidatorRequest;
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseDelegationResponse: object = {};

export const DelegationResponse = {
  encode(
    message: DelegationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegation !== undefined) {
      Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDelegationResponse } as DelegationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation = Delegation.decode(reader, reader.uint32());
          break;
        case 2:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegationResponse {
    const message = { ...baseDelegationResponse } as DelegationResponse;
    message.delegation =
      object.delegation !== undefined && object.delegation !== null
        ? Delegation.fromJSON(object.delegation)
        : undefined;
    message.balance =
      object.balance !== undefined && object.balance !== null
        ? Coin.fromJSON(object.balance)
        : undefined;
    return message;
  },

  toJSON(message: DelegationResponse): unknown {
    const obj: any = {};
    message.delegation !== undefined &&
      (obj.delegation = message.delegation
        ? Delegation.toJSON(message.delegation)
        : undefined);
    message.balance !== undefined &&
      (obj.balance = message.balance
        ? Coin.toJSON(message.balance)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<DelegationResponse>): DelegationResponse {
    const message = { ...baseDelegationResponse } as DelegationResponse;
    message.delegation =
      object.delegation !== undefined && object.delegation !== null
        ? Delegation.fromPartial(object.delegation)
        : undefined;
    message.balance =
      object.balance !== undefined && object.balance !== null
        ? Coin.fromPartial(object.balance)
        : undefined;
    return message;
  },
};

const baseQueryAlliancesDelegationsResponse: object = {};

export const QueryAlliancesDelegationsResponse = {
  encode(
    message: QueryAlliancesDelegationsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.delegations) {
      DelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAlliancesDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAlliancesDelegationsResponse,
    } as QueryAlliancesDelegationsResponse;
    message.delegations = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegations.push(
            DelegationResponse.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAlliancesDelegationsResponse {
    const message = {
      ...baseQueryAlliancesDelegationsResponse,
    } as QueryAlliancesDelegationsResponse;
    message.delegations = (object.delegations ?? []).map((e: any) =>
      DelegationResponse.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAlliancesDelegationsResponse): unknown {
    const obj: any = {};
    if (message.delegations) {
      obj.delegations = message.delegations.map((e) =>
        e ? DelegationResponse.toJSON(e) : undefined
      );
    } else {
      obj.delegations = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAlliancesDelegationsResponse>
  ): QueryAlliancesDelegationsResponse {
    const message = {
      ...baseQueryAlliancesDelegationsResponse,
    } as QueryAlliancesDelegationsResponse;
    message.delegations = (object.delegations ?? []).map((e) =>
      DelegationResponse.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllianceDelegationRequest: object = {
  delegatorAddr: "",
  validatorAddr: "",
  denom: "",
};

export const QueryAllianceDelegationRequest = {
  encode(
    message: QueryAllianceDelegationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllianceDelegationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllianceDelegationRequest,
    } as QueryAllianceDelegationRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllianceDelegationRequest {
    const message = {
      ...baseQueryAllianceDelegationRequest,
    } as QueryAllianceDelegationRequest;
    message.delegatorAddr =
      object.delegatorAddr !== undefined && object.delegatorAddr !== null
        ? String(object.delegatorAddr)
        : "";
    message.validatorAddr =
      object.validatorAddr !== undefined && object.validatorAddr !== null
        ? String(object.validatorAddr)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllianceDelegationRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined &&
      (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined &&
      (obj.validatorAddr = message.validatorAddr);
    message.denom !== undefined && (obj.denom = message.denom);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllianceDelegationRequest>
  ): QueryAllianceDelegationRequest {
    const message = {
      ...baseQueryAllianceDelegationRequest,
    } as QueryAllianceDelegationRequest;
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    message.denom = object.denom ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllianceDelegationResponse: object = {};

export const QueryAllianceDelegationResponse = {
  encode(
    message: QueryAllianceDelegationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegation !== undefined) {
      DelegationResponse.encode(
        message.delegation,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllianceDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllianceDelegationResponse,
    } as QueryAllianceDelegationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation = DelegationResponse.decode(
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

  fromJSON(object: any): QueryAllianceDelegationResponse {
    const message = {
      ...baseQueryAllianceDelegationResponse,
    } as QueryAllianceDelegationResponse;
    message.delegation =
      object.delegation !== undefined && object.delegation !== null
        ? DelegationResponse.fromJSON(object.delegation)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllianceDelegationResponse): unknown {
    const obj: any = {};
    message.delegation !== undefined &&
      (obj.delegation = message.delegation
        ? DelegationResponse.toJSON(message.delegation)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllianceDelegationResponse>
  ): QueryAllianceDelegationResponse {
    const message = {
      ...baseQueryAllianceDelegationResponse,
    } as QueryAllianceDelegationResponse;
    message.delegation =
      object.delegation !== undefined && object.delegation !== null
        ? DelegationResponse.fromPartial(object.delegation)
        : undefined;
    return message;
  },
};

const baseQueryAllianceDelegationRewardsRequest: object = {
  delegatorAddr: "",
  validatorAddr: "",
  denom: "",
};

export const QueryAllianceDelegationRewardsRequest = {
  encode(
    message: QueryAllianceDelegationRewardsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllianceDelegationRewardsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllianceDelegationRewardsRequest,
    } as QueryAllianceDelegationRewardsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllianceDelegationRewardsRequest {
    const message = {
      ...baseQueryAllianceDelegationRewardsRequest,
    } as QueryAllianceDelegationRewardsRequest;
    message.delegatorAddr =
      object.delegatorAddr !== undefined && object.delegatorAddr !== null
        ? String(object.delegatorAddr)
        : "";
    message.validatorAddr =
      object.validatorAddr !== undefined && object.validatorAddr !== null
        ? String(object.validatorAddr)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllianceDelegationRewardsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined &&
      (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined &&
      (obj.validatorAddr = message.validatorAddr);
    message.denom !== undefined && (obj.denom = message.denom);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllianceDelegationRewardsRequest>
  ): QueryAllianceDelegationRewardsRequest {
    const message = {
      ...baseQueryAllianceDelegationRewardsRequest,
    } as QueryAllianceDelegationRewardsRequest;
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    message.denom = object.denom ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllianceDelegationRewardsResponse: object = {};

export const QueryAllianceDelegationRewardsResponse = {
  encode(
    message: QueryAllianceDelegationRewardsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllianceDelegationRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllianceDelegationRewardsResponse,
    } as QueryAllianceDelegationRewardsResponse;
    message.rewards = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllianceDelegationRewardsResponse {
    const message = {
      ...baseQueryAllianceDelegationRewardsResponse,
    } as QueryAllianceDelegationRewardsResponse;
    message.rewards = (object.rewards ?? []).map((e: any) => Coin.fromJSON(e));
    return message;
  },

  toJSON(message: QueryAllianceDelegationRewardsResponse): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.rewards = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllianceDelegationRewardsResponse>
  ): QueryAllianceDelegationRewardsResponse {
    const message = {
      ...baseQueryAllianceDelegationRewardsResponse,
    } as QueryAllianceDelegationRewardsResponse;
    message.rewards = (object.rewards ?? []).map((e) => Coin.fromPartial(e));
    return message;
  },
};

const baseQueryAllianceValidatorResponse: object = { validatorAddr: "" };

export const QueryAllianceValidatorResponse = {
  encode(
    message: QueryAllianceValidatorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllianceValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllianceValidatorResponse,
    } as QueryAllianceValidatorResponse;
    message.totalDelegationShares = [];
    message.validatorShares = [];
    message.totalStaked = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        case 2:
          message.totalDelegationShares.push(
            DecCoin.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.validatorShares.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.totalStaked.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllianceValidatorResponse {
    const message = {
      ...baseQueryAllianceValidatorResponse,
    } as QueryAllianceValidatorResponse;
    message.validatorAddr =
      object.validatorAddr !== undefined && object.validatorAddr !== null
        ? String(object.validatorAddr)
        : "";
    message.totalDelegationShares = (object.totalDelegationShares ?? []).map(
      (e: any) => DecCoin.fromJSON(e)
    );
    message.validatorShares = (object.validatorShares ?? []).map((e: any) =>
      DecCoin.fromJSON(e)
    );
    message.totalStaked = (object.totalStaked ?? []).map((e: any) =>
      DecCoin.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryAllianceValidatorResponse): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined &&
      (obj.validatorAddr = message.validatorAddr);
    if (message.totalDelegationShares) {
      obj.totalDelegationShares = message.totalDelegationShares.map((e) =>
        e ? DecCoin.toJSON(e) : undefined
      );
    } else {
      obj.totalDelegationShares = [];
    }
    if (message.validatorShares) {
      obj.validatorShares = message.validatorShares.map((e) =>
        e ? DecCoin.toJSON(e) : undefined
      );
    } else {
      obj.validatorShares = [];
    }
    if (message.totalStaked) {
      obj.totalStaked = message.totalStaked.map((e) =>
        e ? DecCoin.toJSON(e) : undefined
      );
    } else {
      obj.totalStaked = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllianceValidatorResponse>
  ): QueryAllianceValidatorResponse {
    const message = {
      ...baseQueryAllianceValidatorResponse,
    } as QueryAllianceValidatorResponse;
    message.validatorAddr = object.validatorAddr ?? "";
    message.totalDelegationShares = (object.totalDelegationShares ?? []).map(
      (e) => DecCoin.fromPartial(e)
    );
    message.validatorShares = (object.validatorShares ?? []).map((e) =>
      DecCoin.fromPartial(e)
    );
    message.totalStaked = (object.totalStaked ?? []).map((e) =>
      DecCoin.fromPartial(e)
    );
    return message;
  },
};

const baseQueryAllianceValidatorsResponse: object = {};

export const QueryAllianceValidatorsResponse = {
  encode(
    message: QueryAllianceValidatorsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.validators) {
      QueryAllianceValidatorResponse.encode(
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
  ): QueryAllianceValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllianceValidatorsResponse,
    } as QueryAllianceValidatorsResponse;
    message.validators = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(
            QueryAllianceValidatorResponse.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllianceValidatorsResponse {
    const message = {
      ...baseQueryAllianceValidatorsResponse,
    } as QueryAllianceValidatorsResponse;
    message.validators = (object.validators ?? []).map((e: any) =>
      QueryAllianceValidatorResponse.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllianceValidatorsResponse): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map((e) =>
        e ? QueryAllianceValidatorResponse.toJSON(e) : undefined
      );
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllianceValidatorsResponse>
  ): QueryAllianceValidatorsResponse {
    const message = {
      ...baseQueryAllianceValidatorsResponse,
    } as QueryAllianceValidatorsResponse;
    message.validators = (object.validators ?? []).map((e) =>
      QueryAllianceValidatorResponse.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllianceUnbondingsByDelegatorRequest: object = {
  delegatorAddr: "",
};

export const QueryAllianceUnbondingsByDelegatorRequest = {
  encode(
    message: QueryAllianceUnbondingsByDelegatorRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllianceUnbondingsByDelegatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllianceUnbondingsByDelegatorRequest,
    } as QueryAllianceUnbondingsByDelegatorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
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

  fromJSON(object: any): QueryAllianceUnbondingsByDelegatorRequest {
    const message = {
      ...baseQueryAllianceUnbondingsByDelegatorRequest,
    } as QueryAllianceUnbondingsByDelegatorRequest;
    message.delegatorAddr =
      object.delegatorAddr !== undefined && object.delegatorAddr !== null
        ? String(object.delegatorAddr)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllianceUnbondingsByDelegatorRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined &&
      (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllianceUnbondingsByDelegatorRequest>
  ): QueryAllianceUnbondingsByDelegatorRequest {
    const message = {
      ...baseQueryAllianceUnbondingsByDelegatorRequest,
    } as QueryAllianceUnbondingsByDelegatorRequest;
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllianceUnbondingsByDelegatorResponse: object = {};

export const QueryAllianceUnbondingsByDelegatorResponse = {
  encode(
    message: QueryAllianceUnbondingsByDelegatorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.unbondings) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllianceUnbondingsByDelegatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllianceUnbondingsByDelegatorResponse,
    } as QueryAllianceUnbondingsByDelegatorResponse;
    message.unbondings = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondings.push(
            UnbondingDelegation.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllianceUnbondingsByDelegatorResponse {
    const message = {
      ...baseQueryAllianceUnbondingsByDelegatorResponse,
    } as QueryAllianceUnbondingsByDelegatorResponse;
    message.unbondings = (object.unbondings ?? []).map((e: any) =>
      UnbondingDelegation.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryAllianceUnbondingsByDelegatorResponse): unknown {
    const obj: any = {};
    if (message.unbondings) {
      obj.unbondings = message.unbondings.map((e) =>
        e ? UnbondingDelegation.toJSON(e) : undefined
      );
    } else {
      obj.unbondings = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllianceUnbondingsByDelegatorResponse>
  ): QueryAllianceUnbondingsByDelegatorResponse {
    const message = {
      ...baseQueryAllianceUnbondingsByDelegatorResponse,
    } as QueryAllianceUnbondingsByDelegatorResponse;
    message.unbondings = (object.unbondings ?? []).map((e) =>
      UnbondingDelegation.fromPartial(e)
    );
    return message;
  },
};

const baseQueryAllianceUnbondingsByDenomAndDelegatorRequest: object = {
  denom: "",
  delegatorAddr: "",
};

export const QueryAllianceUnbondingsByDenomAndDelegatorRequest = {
  encode(
    message: QueryAllianceUnbondingsByDenomAndDelegatorRequest,
    writer: _m0.Writer = _m0.Writer.create()
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllianceUnbondingsByDenomAndDelegatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllianceUnbondingsByDenomAndDelegatorRequest,
    } as QueryAllianceUnbondingsByDenomAndDelegatorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.delegatorAddr = reader.string();
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

  fromJSON(object: any): QueryAllianceUnbondingsByDenomAndDelegatorRequest {
    const message = {
      ...baseQueryAllianceUnbondingsByDenomAndDelegatorRequest,
    } as QueryAllianceUnbondingsByDenomAndDelegatorRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.delegatorAddr =
      object.delegatorAddr !== undefined && object.delegatorAddr !== null
        ? String(object.delegatorAddr)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllianceUnbondingsByDenomAndDelegatorRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.delegatorAddr !== undefined &&
      (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllianceUnbondingsByDenomAndDelegatorRequest>
  ): QueryAllianceUnbondingsByDenomAndDelegatorRequest {
    const message = {
      ...baseQueryAllianceUnbondingsByDenomAndDelegatorRequest,
    } as QueryAllianceUnbondingsByDenomAndDelegatorRequest;
    message.denom = object.denom ?? "";
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllianceUnbondingsByDenomAndDelegatorResponse: object = {};

export const QueryAllianceUnbondingsByDenomAndDelegatorResponse = {
  encode(
    message: QueryAllianceUnbondingsByDenomAndDelegatorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.unbondings) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllianceUnbondingsByDenomAndDelegatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllianceUnbondingsByDenomAndDelegatorResponse,
    } as QueryAllianceUnbondingsByDenomAndDelegatorResponse;
    message.unbondings = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondings.push(
            UnbondingDelegation.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllianceUnbondingsByDenomAndDelegatorResponse {
    const message = {
      ...baseQueryAllianceUnbondingsByDenomAndDelegatorResponse,
    } as QueryAllianceUnbondingsByDenomAndDelegatorResponse;
    message.unbondings = (object.unbondings ?? []).map((e: any) =>
      UnbondingDelegation.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllianceUnbondingsByDenomAndDelegatorResponse): unknown {
    const obj: any = {};
    if (message.unbondings) {
      obj.unbondings = message.unbondings.map((e) =>
        e ? UnbondingDelegation.toJSON(e) : undefined
      );
    } else {
      obj.unbondings = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllianceUnbondingsByDenomAndDelegatorResponse>
  ): QueryAllianceUnbondingsByDenomAndDelegatorResponse {
    const message = {
      ...baseQueryAllianceUnbondingsByDenomAndDelegatorResponse,
    } as QueryAllianceUnbondingsByDenomAndDelegatorResponse;
    message.unbondings = (object.unbondings ?? []).map((e) =>
      UnbondingDelegation.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllianceUnbondingsRequest: object = {
  denom: "",
  delegatorAddr: "",
  validatorAddr: "",
};

export const QueryAllianceUnbondingsRequest = {
  encode(
    message: QueryAllianceUnbondingsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllianceUnbondingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllianceUnbondingsRequest,
    } as QueryAllianceUnbondingsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.delegatorAddr = reader.string();
          break;
        case 3:
          message.validatorAddr = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllianceUnbondingsRequest {
    const message = {
      ...baseQueryAllianceUnbondingsRequest,
    } as QueryAllianceUnbondingsRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.delegatorAddr =
      object.delegatorAddr !== undefined && object.delegatorAddr !== null
        ? String(object.delegatorAddr)
        : "";
    message.validatorAddr =
      object.validatorAddr !== undefined && object.validatorAddr !== null
        ? String(object.validatorAddr)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllianceUnbondingsRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.delegatorAddr !== undefined &&
      (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined &&
      (obj.validatorAddr = message.validatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllianceUnbondingsRequest>
  ): QueryAllianceUnbondingsRequest {
    const message = {
      ...baseQueryAllianceUnbondingsRequest,
    } as QueryAllianceUnbondingsRequest;
    message.denom = object.denom ?? "";
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllianceUnbondingsResponse: object = {};

export const QueryAllianceUnbondingsResponse = {
  encode(
    message: QueryAllianceUnbondingsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.unbondings) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllianceUnbondingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllianceUnbondingsResponse,
    } as QueryAllianceUnbondingsResponse;
    message.unbondings = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondings.push(
            UnbondingDelegation.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllianceUnbondingsResponse {
    const message = {
      ...baseQueryAllianceUnbondingsResponse,
    } as QueryAllianceUnbondingsResponse;
    message.unbondings = (object.unbondings ?? []).map((e: any) =>
      UnbondingDelegation.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllianceUnbondingsResponse): unknown {
    const obj: any = {};
    if (message.unbondings) {
      obj.unbondings = message.unbondings.map((e) =>
        e ? UnbondingDelegation.toJSON(e) : undefined
      );
    } else {
      obj.unbondings = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllianceUnbondingsResponse>
  ): QueryAllianceUnbondingsResponse {
    const message = {
      ...baseQueryAllianceUnbondingsResponse,
    } as QueryAllianceUnbondingsResponse;
    message.unbondings = (object.unbondings ?? []).map((e) =>
      UnbondingDelegation.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllianceRedelegationsRequest: object = {
  denom: "",
  delegatorAddr: "",
};

export const QueryAllianceRedelegationsRequest = {
  encode(
    message: QueryAllianceRedelegationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllianceRedelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllianceRedelegationsRequest,
    } as QueryAllianceRedelegationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.delegatorAddr = reader.string();
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

  fromJSON(object: any): QueryAllianceRedelegationsRequest {
    const message = {
      ...baseQueryAllianceRedelegationsRequest,
    } as QueryAllianceRedelegationsRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.delegatorAddr =
      object.delegatorAddr !== undefined && object.delegatorAddr !== null
        ? String(object.delegatorAddr)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllianceRedelegationsRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.delegatorAddr !== undefined &&
      (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllianceRedelegationsRequest>
  ): QueryAllianceRedelegationsRequest {
    const message = {
      ...baseQueryAllianceRedelegationsRequest,
    } as QueryAllianceRedelegationsRequest;
    message.denom = object.denom ?? "";
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllianceRedelegationsResponse: object = {};

export const QueryAllianceRedelegationsResponse = {
  encode(
    message: QueryAllianceRedelegationsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.redelegations) {
      RedelegationEntry.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllianceRedelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllianceRedelegationsResponse,
    } as QueryAllianceRedelegationsResponse;
    message.redelegations = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegations.push(
            RedelegationEntry.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllianceRedelegationsResponse {
    const message = {
      ...baseQueryAllianceRedelegationsResponse,
    } as QueryAllianceRedelegationsResponse;
    message.redelegations = (object.redelegations ?? []).map((e: any) =>
      RedelegationEntry.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllianceRedelegationsResponse): unknown {
    const obj: any = {};
    if (message.redelegations) {
      obj.redelegations = message.redelegations.map((e) =>
        e ? RedelegationEntry.toJSON(e) : undefined
      );
    } else {
      obj.redelegations = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllianceRedelegationsResponse>
  ): QueryAllianceRedelegationsResponse {
    const message = {
      ...baseQueryAllianceRedelegationsResponse,
    } as QueryAllianceRedelegationsResponse;
    message.redelegations = (object.redelegations ?? []).map((e) =>
      RedelegationEntry.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllianceRedelegationsByDelegatorRequest: object = {
  delegatorAddr: "",
};

export const QueryAllianceRedelegationsByDelegatorRequest = {
  encode(
    message: QueryAllianceRedelegationsByDelegatorRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllianceRedelegationsByDelegatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllianceRedelegationsByDelegatorRequest,
    } as QueryAllianceRedelegationsByDelegatorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
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

  fromJSON(object: any): QueryAllianceRedelegationsByDelegatorRequest {
    const message = {
      ...baseQueryAllianceRedelegationsByDelegatorRequest,
    } as QueryAllianceRedelegationsByDelegatorRequest;
    message.delegatorAddr =
      object.delegatorAddr !== undefined && object.delegatorAddr !== null
        ? String(object.delegatorAddr)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllianceRedelegationsByDelegatorRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined &&
      (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllianceRedelegationsByDelegatorRequest>
  ): QueryAllianceRedelegationsByDelegatorRequest {
    const message = {
      ...baseQueryAllianceRedelegationsByDelegatorRequest,
    } as QueryAllianceRedelegationsByDelegatorRequest;
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllianceRedelegationsByDelegatorResponse: object = {};

export const QueryAllianceRedelegationsByDelegatorResponse = {
  encode(
    message: QueryAllianceRedelegationsByDelegatorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.redelegations) {
      RedelegationEntry.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllianceRedelegationsByDelegatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllianceRedelegationsByDelegatorResponse,
    } as QueryAllianceRedelegationsByDelegatorResponse;
    message.redelegations = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegations.push(
            RedelegationEntry.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllianceRedelegationsByDelegatorResponse {
    const message = {
      ...baseQueryAllianceRedelegationsByDelegatorResponse,
    } as QueryAllianceRedelegationsByDelegatorResponse;
    message.redelegations = (object.redelegations ?? []).map((e: any) =>
      RedelegationEntry.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllianceRedelegationsByDelegatorResponse): unknown {
    const obj: any = {};
    if (message.redelegations) {
      obj.redelegations = message.redelegations.map((e) =>
        e ? RedelegationEntry.toJSON(e) : undefined
      );
    } else {
      obj.redelegations = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllianceRedelegationsByDelegatorResponse>
  ): QueryAllianceRedelegationsByDelegatorResponse {
    const message = {
      ...baseQueryAllianceRedelegationsByDelegatorResponse,
    } as QueryAllianceRedelegationsByDelegatorResponse;
    message.redelegations = (object.redelegations ?? []).map((e) =>
      RedelegationEntry.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
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
  AllAlliancesDelegations(
    request: QueryAllAlliancesDelegationsRequest
  ): Promise<QueryAlliancesDelegationsResponse>;
  /** Query alliance validator */
  AllianceValidator(
    request: QueryAllianceValidatorRequest
  ): Promise<QueryAllianceValidatorResponse>;
  /** Query all paginated alliance validators */
  AllAllianceValidators(
    request: QueryAllAllianceValidatorsRequest
  ): Promise<QueryAllianceValidatorsResponse>;
  /** Query all paginated alliance delegations for a delegator addr */
  AlliancesDelegation(
    request: QueryAlliancesDelegationsRequest
  ): Promise<QueryAlliancesDelegationsResponse>;
  /** Query all paginated alliance delegations for a delegator addr and validator_addr */
  AlliancesDelegationByValidator(
    request: QueryAlliancesDelegationByValidatorRequest
  ): Promise<QueryAlliancesDelegationsResponse>;
  /** Query a specific delegation by delegator addr, validator addr and denom */
  AllianceDelegation(
    request: QueryAllianceDelegationRequest
  ): Promise<QueryAllianceDelegationResponse>;
  /** Query a specific delegation rewards by delegator addr, validator addr and denom */
  AllianceDelegationRewards(
    request: QueryAllianceDelegationRewardsRequest
  ): Promise<QueryAllianceDelegationRewardsResponse>;
  /** Query unbondings by delegator address */
  AllianceUnbondingsByDelegator(
    request: QueryAllianceUnbondingsByDelegatorRequest
  ): Promise<QueryAllianceUnbondingsByDelegatorResponse>;
  /** Query unbondings by denom, delegator addr */
  AllianceUnbondingsByDenomAndDelegator(
    request: QueryAllianceUnbondingsByDenomAndDelegatorRequest
  ): Promise<QueryAllianceUnbondingsByDenomAndDelegatorResponse>;
  /** Query unbondings by denom, delegator addr, validator addr */
  AllianceUnbondings(
    request: QueryAllianceUnbondingsRequest
  ): Promise<QueryAllianceUnbondingsResponse>;
  /** Query paginated redelegations delegator addr */
  AllianceRedelegationsByDelegator(
    request: QueryAllianceRedelegationsByDelegatorRequest
  ): Promise<QueryAllianceRedelegationsByDelegatorResponse>;
  /** Query paginated redelegations by denom and delegator addr */
  AllianceRedelegations(
    request: QueryAllianceRedelegationsRequest
  ): Promise<QueryAllianceRedelegationsResponse>;
  /** Query a specific alliance by denom */
  Alliance(request: QueryAllianceRequest): Promise<QueryAllianceResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Alliances = this.Alliances.bind(this);
    this.AllAlliancesDelegations = this.AllAlliancesDelegations.bind(this);
    this.AllianceValidator = this.AllianceValidator.bind(this);
    this.AllAllianceValidators = this.AllAllianceValidators.bind(this);
    this.AlliancesDelegation = this.AlliancesDelegation.bind(this);
    this.AlliancesDelegationByValidator =
      this.AlliancesDelegationByValidator.bind(this);
    this.AllianceDelegation = this.AllianceDelegation.bind(this);
    this.AllianceDelegationRewards = this.AllianceDelegationRewards.bind(this);
    this.AllianceUnbondingsByDelegator =
      this.AllianceUnbondingsByDelegator.bind(this);
    this.AllianceUnbondingsByDenomAndDelegator =
      this.AllianceUnbondingsByDenomAndDelegator.bind(this);
    this.AllianceUnbondings = this.AllianceUnbondings.bind(this);
    this.AllianceRedelegationsByDelegator =
      this.AllianceRedelegationsByDelegator.bind(this);
    this.AllianceRedelegations = this.AllianceRedelegations.bind(this);
    this.Alliance = this.Alliance.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("alliance.alliance.Query", "Params", data);
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  Alliances(request: QueryAlliancesRequest): Promise<QueryAlliancesResponse> {
    const data = QueryAlliancesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "alliance.alliance.Query",
      "Alliances",
      data
    );
    return promise.then((data) =>
      QueryAlliancesResponse.decode(new _m0.Reader(data))
    );
  }

  AllAlliancesDelegations(
    request: QueryAllAlliancesDelegationsRequest
  ): Promise<QueryAlliancesDelegationsResponse> {
    const data = QueryAllAlliancesDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "alliance.alliance.Query",
      "AllAlliancesDelegations",
      data
    );
    return promise.then((data) =>
      QueryAlliancesDelegationsResponse.decode(new _m0.Reader(data))
    );
  }

  AllianceValidator(
    request: QueryAllianceValidatorRequest
  ): Promise<QueryAllianceValidatorResponse> {
    const data = QueryAllianceValidatorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "alliance.alliance.Query",
      "AllianceValidator",
      data
    );
    return promise.then((data) =>
      QueryAllianceValidatorResponse.decode(new _m0.Reader(data))
    );
  }

  AllAllianceValidators(
    request: QueryAllAllianceValidatorsRequest
  ): Promise<QueryAllianceValidatorsResponse> {
    const data = QueryAllAllianceValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "alliance.alliance.Query",
      "AllAllianceValidators",
      data
    );
    return promise.then((data) =>
      QueryAllianceValidatorsResponse.decode(new _m0.Reader(data))
    );
  }

  AlliancesDelegation(
    request: QueryAlliancesDelegationsRequest
  ): Promise<QueryAlliancesDelegationsResponse> {
    const data = QueryAlliancesDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "alliance.alliance.Query",
      "AlliancesDelegation",
      data
    );
    return promise.then((data) =>
      QueryAlliancesDelegationsResponse.decode(new _m0.Reader(data))
    );
  }

  AlliancesDelegationByValidator(
    request: QueryAlliancesDelegationByValidatorRequest
  ): Promise<QueryAlliancesDelegationsResponse> {
    const data =
      QueryAlliancesDelegationByValidatorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "alliance.alliance.Query",
      "AlliancesDelegationByValidator",
      data
    );
    return promise.then((data) =>
      QueryAlliancesDelegationsResponse.decode(new _m0.Reader(data))
    );
  }

  AllianceDelegation(
    request: QueryAllianceDelegationRequest
  ): Promise<QueryAllianceDelegationResponse> {
    const data = QueryAllianceDelegationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "alliance.alliance.Query",
      "AllianceDelegation",
      data
    );
    return promise.then((data) =>
      QueryAllianceDelegationResponse.decode(new _m0.Reader(data))
    );
  }

  AllianceDelegationRewards(
    request: QueryAllianceDelegationRewardsRequest
  ): Promise<QueryAllianceDelegationRewardsResponse> {
    const data = QueryAllianceDelegationRewardsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "alliance.alliance.Query",
      "AllianceDelegationRewards",
      data
    );
    return promise.then((data) =>
      QueryAllianceDelegationRewardsResponse.decode(new _m0.Reader(data))
    );
  }

  AllianceUnbondingsByDelegator(
    request: QueryAllianceUnbondingsByDelegatorRequest
  ): Promise<QueryAllianceUnbondingsByDelegatorResponse> {
    const data =
      QueryAllianceUnbondingsByDelegatorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "alliance.alliance.Query",
      "AllianceUnbondingsByDelegator",
      data
    );
    return promise.then((data) =>
      QueryAllianceUnbondingsByDelegatorResponse.decode(new _m0.Reader(data))
    );
  }

  AllianceUnbondingsByDenomAndDelegator(
    request: QueryAllianceUnbondingsByDenomAndDelegatorRequest
  ): Promise<QueryAllianceUnbondingsByDenomAndDelegatorResponse> {
    const data =
      QueryAllianceUnbondingsByDenomAndDelegatorRequest.encode(
        request
      ).finish();
    const promise = this.rpc.request(
      "alliance.alliance.Query",
      "AllianceUnbondingsByDenomAndDelegator",
      data
    );
    return promise.then((data) =>
      QueryAllianceUnbondingsByDenomAndDelegatorResponse.decode(
        new _m0.Reader(data)
      )
    );
  }

  AllianceUnbondings(
    request: QueryAllianceUnbondingsRequest
  ): Promise<QueryAllianceUnbondingsResponse> {
    const data = QueryAllianceUnbondingsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "alliance.alliance.Query",
      "AllianceUnbondings",
      data
    );
    return promise.then((data) =>
      QueryAllianceUnbondingsResponse.decode(new _m0.Reader(data))
    );
  }

  AllianceRedelegationsByDelegator(
    request: QueryAllianceRedelegationsByDelegatorRequest
  ): Promise<QueryAllianceRedelegationsByDelegatorResponse> {
    const data =
      QueryAllianceRedelegationsByDelegatorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "alliance.alliance.Query",
      "AllianceRedelegationsByDelegator",
      data
    );
    return promise.then((data) =>
      QueryAllianceRedelegationsByDelegatorResponse.decode(new _m0.Reader(data))
    );
  }

  AllianceRedelegations(
    request: QueryAllianceRedelegationsRequest
  ): Promise<QueryAllianceRedelegationsResponse> {
    const data = QueryAllianceRedelegationsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "alliance.alliance.Query",
      "AllianceRedelegations",
      data
    );
    return promise.then((data) =>
      QueryAllianceRedelegationsResponse.decode(new _m0.Reader(data))
    );
  }

  Alliance(request: QueryAllianceRequest): Promise<QueryAllianceResponse> {
    const data = QueryAllianceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "alliance.alliance.Query",
      "Alliance",
      data
    );
    return promise.then((data) =>
      QueryAllianceResponse.decode(new _m0.Reader(data))
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
