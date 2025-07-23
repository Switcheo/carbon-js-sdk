/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { BoolValue } from "../../../google/protobuf/wrappers";
import { FeeStructure, FeeTier, StakeEquivalence, TradingFees } from "./fee";
import { ControlledParams, Market } from "./market";
import { Params } from "./params";

export const protobufPackage = "Switcheo.carbon.market";

/** this line is used by starport scaffolding # 3 */
export interface QueryGetMarketRequest {
  id: string;
}

export interface QueryGetMarketResponse {
  marketId?: Market;
}

export interface QueryAllMarketRequest {
  pagination?: PageRequest;
  isActive?: boolean;
  isSettled?: boolean;
}

export interface QueryAllMarketResponse {
  markets: Market[];
  pagination?: PageResponse;
}

export interface QueryGetTradingFeesRequest {
  marketId: string;
  userAddress: string;
}

export interface QueryGetTradingFeesResponse {
  fees?: TradingFees;
}

export interface QueryGetFeeTiersRequest {
  marketType: string;
  marketId: string;
  userAddress: string;
}

export interface QueryGetFeeTiersResponse {
  feeTiers: FeeTier[];
}

export interface QueryAllStakeEquivalenceRequest {
  pagination?: PageRequest;
}

export interface QueryAllStakeEquivalenceResponse {
  stakeEquivalence: StakeEquivalence[];
  pagination?: PageResponse;
}

export interface QueryAllFeeStructuresRequest {
  pagination?: PageRequest;
}

export interface QueryAllFeeStructuresResponse {
  feeStructures: FeeStructure[];
  pagination?: PageResponse;
}

export interface QueryUserFeeStructuresRequest {
  userAddress: string;
}

export interface QueryUserFeeStructuresResponse {
  feeStructures: FeeStructure[];
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

/**
 * QueryControlledParamsRequest is request type for the Query/ControlledParams
 * RPC method.
 */
export interface QueryControlledParamsRequest {
}

/**
 * QueryControlledParamsResponse is response type for the Query/ControlledParams
 * RPC method.
 */
export interface QueryControlledParamsResponse {
  /** params holds all the parameters of this module. */
  controlledParams?: ControlledParams;
}

export interface QueryEVMMarketRequest {
  contractAddress: string;
  name: string;
}

export interface QueryEVMMarketResponse {
  name: string;
  displayName: string;
  marketType: string;
  base: string;
  quote: string;
  basePrecision: Long;
  quotePrecision: Long;
  minQuantity: string;
  isActive: boolean;
}

function createBaseQueryGetMarketRequest(): QueryGetMarketRequest {
  return { id: "" };
}

export const QueryGetMarketRequest = {
  encode(message: QueryGetMarketRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMarketRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMarketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetMarketRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: QueryGetMarketRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create(base?: DeepPartial<QueryGetMarketRequest>): QueryGetMarketRequest {
    return QueryGetMarketRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetMarketRequest>): QueryGetMarketRequest {
    const message = createBaseQueryGetMarketRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseQueryGetMarketResponse(): QueryGetMarketResponse {
  return { marketId: undefined };
}

export const QueryGetMarketResponse = {
  encode(message: QueryGetMarketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== undefined) {
      Market.encode(message.marketId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMarketResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMarketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.marketId = Market.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetMarketResponse {
    return { marketId: isSet(object.marketId) ? Market.fromJSON(object.marketId) : undefined };
  },

  toJSON(message: QueryGetMarketResponse): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId ? Market.toJSON(message.marketId) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryGetMarketResponse>): QueryGetMarketResponse {
    return QueryGetMarketResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetMarketResponse>): QueryGetMarketResponse {
    const message = createBaseQueryGetMarketResponse();
    message.marketId = (object.marketId !== undefined && object.marketId !== null)
      ? Market.fromPartial(object.marketId)
      : undefined;
    return message;
  },
};

function createBaseQueryAllMarketRequest(): QueryAllMarketRequest {
  return { pagination: undefined, isActive: undefined, isSettled: undefined };
}

export const QueryAllMarketRequest = {
  encode(message: QueryAllMarketRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.isActive !== undefined) {
      BoolValue.encode({ value: message.isActive! }, writer.uint32(18).fork()).ldelim();
    }
    if (message.isSettled !== undefined) {
      BoolValue.encode({ value: message.isSettled! }, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMarketRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMarketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.isActive = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.isSettled = BoolValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllMarketRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : undefined,
      isSettled: isSet(object.isSettled) ? Boolean(object.isSettled) : undefined,
    };
  },

  toJSON(message: QueryAllMarketRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.isActive !== undefined && (obj.isActive = message.isActive);
    message.isSettled !== undefined && (obj.isSettled = message.isSettled);
    return obj;
  },

  create(base?: DeepPartial<QueryAllMarketRequest>): QueryAllMarketRequest {
    return QueryAllMarketRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllMarketRequest>): QueryAllMarketRequest {
    const message = createBaseQueryAllMarketRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    message.isActive = object.isActive ?? undefined;
    message.isSettled = object.isSettled ?? undefined;
    return message;
  },
};

function createBaseQueryAllMarketResponse(): QueryAllMarketResponse {
  return { markets: [], pagination: undefined };
}

export const QueryAllMarketResponse = {
  encode(message: QueryAllMarketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.markets) {
      Market.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMarketResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMarketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.markets.push(Market.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllMarketResponse {
    return {
      markets: Array.isArray(object?.markets) ? object.markets.map((e: any) => Market.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllMarketResponse): unknown {
    const obj: any = {};
    if (message.markets) {
      obj.markets = message.markets.map((e) => e ? Market.toJSON(e) : undefined);
    } else {
      obj.markets = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllMarketResponse>): QueryAllMarketResponse {
    return QueryAllMarketResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllMarketResponse>): QueryAllMarketResponse {
    const message = createBaseQueryAllMarketResponse();
    message.markets = object.markets?.map((e) => Market.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetTradingFeesRequest(): QueryGetTradingFeesRequest {
  return { marketId: "", userAddress: "" };
}

export const QueryGetTradingFeesRequest = {
  encode(message: QueryGetTradingFeesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.userAddress !== "") {
      writer.uint32(18).string(message.userAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTradingFeesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTradingFeesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.marketId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetTradingFeesRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      userAddress: isSet(object.userAddress) ? String(object.userAddress) : "",
    };
  },

  toJSON(message: QueryGetTradingFeesRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.userAddress !== undefined && (obj.userAddress = message.userAddress);
    return obj;
  },

  create(base?: DeepPartial<QueryGetTradingFeesRequest>): QueryGetTradingFeesRequest {
    return QueryGetTradingFeesRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetTradingFeesRequest>): QueryGetTradingFeesRequest {
    const message = createBaseQueryGetTradingFeesRequest();
    message.marketId = object.marketId ?? "";
    message.userAddress = object.userAddress ?? "";
    return message;
  },
};

function createBaseQueryGetTradingFeesResponse(): QueryGetTradingFeesResponse {
  return { fees: undefined };
}

export const QueryGetTradingFeesResponse = {
  encode(message: QueryGetTradingFeesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fees !== undefined) {
      TradingFees.encode(message.fees, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTradingFeesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTradingFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fees = TradingFees.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetTradingFeesResponse {
    return { fees: isSet(object.fees) ? TradingFees.fromJSON(object.fees) : undefined };
  },

  toJSON(message: QueryGetTradingFeesResponse): unknown {
    const obj: any = {};
    message.fees !== undefined && (obj.fees = message.fees ? TradingFees.toJSON(message.fees) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryGetTradingFeesResponse>): QueryGetTradingFeesResponse {
    return QueryGetTradingFeesResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetTradingFeesResponse>): QueryGetTradingFeesResponse {
    const message = createBaseQueryGetTradingFeesResponse();
    message.fees = (object.fees !== undefined && object.fees !== null)
      ? TradingFees.fromPartial(object.fees)
      : undefined;
    return message;
  },
};

function createBaseQueryGetFeeTiersRequest(): QueryGetFeeTiersRequest {
  return { marketType: "", marketId: "", userAddress: "" };
}

export const QueryGetFeeTiersRequest = {
  encode(message: QueryGetFeeTiersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketType !== "") {
      writer.uint32(10).string(message.marketType);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.userAddress !== "") {
      writer.uint32(26).string(message.userAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetFeeTiersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFeeTiersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.marketType = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.marketId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.userAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetFeeTiersRequest {
    return {
      marketType: isSet(object.marketType) ? String(object.marketType) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      userAddress: isSet(object.userAddress) ? String(object.userAddress) : "",
    };
  },

  toJSON(message: QueryGetFeeTiersRequest): unknown {
    const obj: any = {};
    message.marketType !== undefined && (obj.marketType = message.marketType);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.userAddress !== undefined && (obj.userAddress = message.userAddress);
    return obj;
  },

  create(base?: DeepPartial<QueryGetFeeTiersRequest>): QueryGetFeeTiersRequest {
    return QueryGetFeeTiersRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetFeeTiersRequest>): QueryGetFeeTiersRequest {
    const message = createBaseQueryGetFeeTiersRequest();
    message.marketType = object.marketType ?? "";
    message.marketId = object.marketId ?? "";
    message.userAddress = object.userAddress ?? "";
    return message;
  },
};

function createBaseQueryGetFeeTiersResponse(): QueryGetFeeTiersResponse {
  return { feeTiers: [] };
}

export const QueryGetFeeTiersResponse = {
  encode(message: QueryGetFeeTiersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.feeTiers) {
      FeeTier.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetFeeTiersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFeeTiersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.feeTiers.push(FeeTier.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetFeeTiersResponse {
    return { feeTiers: Array.isArray(object?.feeTiers) ? object.feeTiers.map((e: any) => FeeTier.fromJSON(e)) : [] };
  },

  toJSON(message: QueryGetFeeTiersResponse): unknown {
    const obj: any = {};
    if (message.feeTiers) {
      obj.feeTiers = message.feeTiers.map((e) => e ? FeeTier.toJSON(e) : undefined);
    } else {
      obj.feeTiers = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryGetFeeTiersResponse>): QueryGetFeeTiersResponse {
    return QueryGetFeeTiersResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetFeeTiersResponse>): QueryGetFeeTiersResponse {
    const message = createBaseQueryGetFeeTiersResponse();
    message.feeTiers = object.feeTiers?.map((e) => FeeTier.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryAllStakeEquivalenceRequest(): QueryAllStakeEquivalenceRequest {
  return { pagination: undefined };
}

export const QueryAllStakeEquivalenceRequest = {
  encode(message: QueryAllStakeEquivalenceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStakeEquivalenceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStakeEquivalenceRequest();
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

  fromJSON(object: any): QueryAllStakeEquivalenceRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllStakeEquivalenceRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllStakeEquivalenceRequest>): QueryAllStakeEquivalenceRequest {
    return QueryAllStakeEquivalenceRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllStakeEquivalenceRequest>): QueryAllStakeEquivalenceRequest {
    const message = createBaseQueryAllStakeEquivalenceRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllStakeEquivalenceResponse(): QueryAllStakeEquivalenceResponse {
  return { stakeEquivalence: [], pagination: undefined };
}

export const QueryAllStakeEquivalenceResponse = {
  encode(message: QueryAllStakeEquivalenceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.stakeEquivalence) {
      StakeEquivalence.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStakeEquivalenceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStakeEquivalenceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.stakeEquivalence.push(StakeEquivalence.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllStakeEquivalenceResponse {
    return {
      stakeEquivalence: Array.isArray(object?.stakeEquivalence)
        ? object.stakeEquivalence.map((e: any) => StakeEquivalence.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllStakeEquivalenceResponse): unknown {
    const obj: any = {};
    if (message.stakeEquivalence) {
      obj.stakeEquivalence = message.stakeEquivalence.map((e) => e ? StakeEquivalence.toJSON(e) : undefined);
    } else {
      obj.stakeEquivalence = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllStakeEquivalenceResponse>): QueryAllStakeEquivalenceResponse {
    return QueryAllStakeEquivalenceResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllStakeEquivalenceResponse>): QueryAllStakeEquivalenceResponse {
    const message = createBaseQueryAllStakeEquivalenceResponse();
    message.stakeEquivalence = object.stakeEquivalence?.map((e) => StakeEquivalence.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllFeeStructuresRequest(): QueryAllFeeStructuresRequest {
  return { pagination: undefined };
}

export const QueryAllFeeStructuresRequest = {
  encode(message: QueryAllFeeStructuresRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllFeeStructuresRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFeeStructuresRequest();
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

  fromJSON(object: any): QueryAllFeeStructuresRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllFeeStructuresRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllFeeStructuresRequest>): QueryAllFeeStructuresRequest {
    return QueryAllFeeStructuresRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllFeeStructuresRequest>): QueryAllFeeStructuresRequest {
    const message = createBaseQueryAllFeeStructuresRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllFeeStructuresResponse(): QueryAllFeeStructuresResponse {
  return { feeStructures: [], pagination: undefined };
}

export const QueryAllFeeStructuresResponse = {
  encode(message: QueryAllFeeStructuresResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.feeStructures) {
      FeeStructure.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllFeeStructuresResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFeeStructuresResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.feeStructures.push(FeeStructure.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllFeeStructuresResponse {
    return {
      feeStructures: Array.isArray(object?.feeStructures)
        ? object.feeStructures.map((e: any) => FeeStructure.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllFeeStructuresResponse): unknown {
    const obj: any = {};
    if (message.feeStructures) {
      obj.feeStructures = message.feeStructures.map((e) => e ? FeeStructure.toJSON(e) : undefined);
    } else {
      obj.feeStructures = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllFeeStructuresResponse>): QueryAllFeeStructuresResponse {
    return QueryAllFeeStructuresResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllFeeStructuresResponse>): QueryAllFeeStructuresResponse {
    const message = createBaseQueryAllFeeStructuresResponse();
    message.feeStructures = object.feeStructures?.map((e) => FeeStructure.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryUserFeeStructuresRequest(): QueryUserFeeStructuresRequest {
  return { userAddress: "" };
}

export const QueryUserFeeStructuresRequest = {
  encode(message: QueryUserFeeStructuresRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserFeeStructuresRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserFeeStructuresRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryUserFeeStructuresRequest {
    return { userAddress: isSet(object.userAddress) ? String(object.userAddress) : "" };
  },

  toJSON(message: QueryUserFeeStructuresRequest): unknown {
    const obj: any = {};
    message.userAddress !== undefined && (obj.userAddress = message.userAddress);
    return obj;
  },

  create(base?: DeepPartial<QueryUserFeeStructuresRequest>): QueryUserFeeStructuresRequest {
    return QueryUserFeeStructuresRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryUserFeeStructuresRequest>): QueryUserFeeStructuresRequest {
    const message = createBaseQueryUserFeeStructuresRequest();
    message.userAddress = object.userAddress ?? "";
    return message;
  },
};

function createBaseQueryUserFeeStructuresResponse(): QueryUserFeeStructuresResponse {
  return { feeStructures: [] };
}

export const QueryUserFeeStructuresResponse = {
  encode(message: QueryUserFeeStructuresResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.feeStructures) {
      FeeStructure.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserFeeStructuresResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserFeeStructuresResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.feeStructures.push(FeeStructure.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryUserFeeStructuresResponse {
    return {
      feeStructures: Array.isArray(object?.feeStructures)
        ? object.feeStructures.map((e: any) => FeeStructure.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryUserFeeStructuresResponse): unknown {
    const obj: any = {};
    if (message.feeStructures) {
      obj.feeStructures = message.feeStructures.map((e) => e ? FeeStructure.toJSON(e) : undefined);
    } else {
      obj.feeStructures = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryUserFeeStructuresResponse>): QueryUserFeeStructuresResponse {
    return QueryUserFeeStructuresResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryUserFeeStructuresResponse>): QueryUserFeeStructuresResponse {
    const message = createBaseQueryUserFeeStructuresResponse();
    message.feeStructures = object.feeStructures?.map((e) => FeeStructure.fromPartial(e)) || [];
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

function createBaseQueryControlledParamsRequest(): QueryControlledParamsRequest {
  return {};
}

export const QueryControlledParamsRequest = {
  encode(_: QueryControlledParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryControlledParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryControlledParamsRequest();
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

  fromJSON(_: any): QueryControlledParamsRequest {
    return {};
  },

  toJSON(_: QueryControlledParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryControlledParamsRequest>): QueryControlledParamsRequest {
    return QueryControlledParamsRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryControlledParamsRequest>): QueryControlledParamsRequest {
    const message = createBaseQueryControlledParamsRequest();
    return message;
  },
};

function createBaseQueryControlledParamsResponse(): QueryControlledParamsResponse {
  return { controlledParams: undefined };
}

export const QueryControlledParamsResponse = {
  encode(message: QueryControlledParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.controlledParams !== undefined) {
      ControlledParams.encode(message.controlledParams, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryControlledParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryControlledParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.controlledParams = ControlledParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryControlledParamsResponse {
    return {
      controlledParams: isSet(object.controlledParams) ? ControlledParams.fromJSON(object.controlledParams) : undefined,
    };
  },

  toJSON(message: QueryControlledParamsResponse): unknown {
    const obj: any = {};
    message.controlledParams !== undefined &&
      (obj.controlledParams = message.controlledParams ? ControlledParams.toJSON(message.controlledParams) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryControlledParamsResponse>): QueryControlledParamsResponse {
    return QueryControlledParamsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryControlledParamsResponse>): QueryControlledParamsResponse {
    const message = createBaseQueryControlledParamsResponse();
    message.controlledParams = (object.controlledParams !== undefined && object.controlledParams !== null)
      ? ControlledParams.fromPartial(object.controlledParams)
      : undefined;
    return message;
  },
};

function createBaseQueryEVMMarketRequest(): QueryEVMMarketRequest {
  return { contractAddress: "", name: "" };
}

export const QueryEVMMarketRequest = {
  encode(message: QueryEVMMarketRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEVMMarketRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEVMMarketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.contractAddress = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryEVMMarketRequest {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: QueryEVMMarketRequest): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create(base?: DeepPartial<QueryEVMMarketRequest>): QueryEVMMarketRequest {
    return QueryEVMMarketRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryEVMMarketRequest>): QueryEVMMarketRequest {
    const message = createBaseQueryEVMMarketRequest();
    message.contractAddress = object.contractAddress ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseQueryEVMMarketResponse(): QueryEVMMarketResponse {
  return {
    name: "",
    displayName: "",
    marketType: "",
    base: "",
    quote: "",
    basePrecision: Long.ZERO,
    quotePrecision: Long.ZERO,
    minQuantity: "",
    isActive: false,
  };
}

export const QueryEVMMarketResponse = {
  encode(message: QueryEVMMarketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    if (message.marketType !== "") {
      writer.uint32(26).string(message.marketType);
    }
    if (message.base !== "") {
      writer.uint32(34).string(message.base);
    }
    if (message.quote !== "") {
      writer.uint32(42).string(message.quote);
    }
    if (!message.basePrecision.isZero()) {
      writer.uint32(48).int64(message.basePrecision);
    }
    if (!message.quotePrecision.isZero()) {
      writer.uint32(56).int64(message.quotePrecision);
    }
    if (message.minQuantity !== "") {
      writer.uint32(66).string(message.minQuantity);
    }
    if (message.isActive === true) {
      writer.uint32(72).bool(message.isActive);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEVMMarketResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEVMMarketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.marketType = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.base = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.quote = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.basePrecision = reader.int64() as Long;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.quotePrecision = reader.int64() as Long;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.minQuantity = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.isActive = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryEVMMarketResponse {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      displayName: isSet(object.displayName) ? String(object.displayName) : "",
      marketType: isSet(object.marketType) ? String(object.marketType) : "",
      base: isSet(object.base) ? String(object.base) : "",
      quote: isSet(object.quote) ? String(object.quote) : "",
      basePrecision: isSet(object.basePrecision) ? Long.fromValue(object.basePrecision) : Long.ZERO,
      quotePrecision: isSet(object.quotePrecision) ? Long.fromValue(object.quotePrecision) : Long.ZERO,
      minQuantity: isSet(object.minQuantity) ? String(object.minQuantity) : "",
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : false,
    };
  },

  toJSON(message: QueryEVMMarketResponse): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.displayName !== undefined && (obj.displayName = message.displayName);
    message.marketType !== undefined && (obj.marketType = message.marketType);
    message.base !== undefined && (obj.base = message.base);
    message.quote !== undefined && (obj.quote = message.quote);
    message.basePrecision !== undefined && (obj.basePrecision = (message.basePrecision || Long.ZERO).toString());
    message.quotePrecision !== undefined && (obj.quotePrecision = (message.quotePrecision || Long.ZERO).toString());
    message.minQuantity !== undefined && (obj.minQuantity = message.minQuantity);
    message.isActive !== undefined && (obj.isActive = message.isActive);
    return obj;
  },

  create(base?: DeepPartial<QueryEVMMarketResponse>): QueryEVMMarketResponse {
    return QueryEVMMarketResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryEVMMarketResponse>): QueryEVMMarketResponse {
    const message = createBaseQueryEVMMarketResponse();
    message.name = object.name ?? "";
    message.displayName = object.displayName ?? "";
    message.marketType = object.marketType ?? "";
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    message.basePrecision = (object.basePrecision !== undefined && object.basePrecision !== null)
      ? Long.fromValue(object.basePrecision)
      : Long.ZERO;
    message.quotePrecision = (object.quotePrecision !== undefined && object.quotePrecision !== null)
      ? Long.fromValue(object.quotePrecision)
      : Long.ZERO;
    message.minQuantity = object.minQuantity ?? "";
    message.isActive = object.isActive ?? false;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Get details for a market */
  Market(request: QueryGetMarketRequest): Promise<QueryGetMarketResponse>;
  /** Get details for all markets */
  MarketAll(request: QueryAllMarketRequest): Promise<QueryAllMarketResponse>;
  /** Get the trading fees for market and user */
  TradingFees(request: QueryGetTradingFeesRequest): Promise<QueryGetTradingFeesResponse>;
  /** Get Fee structure of the market */
  FeeTiers(request: QueryGetFeeTiersRequest): Promise<QueryGetFeeTiersResponse>;
  /** Get all stake equivalences as an array */
  StakeEquivalenceAll(request: QueryAllStakeEquivalenceRequest): Promise<QueryAllStakeEquivalenceResponse>;
  FeeStructuresAll(request: QueryAllFeeStructuresRequest): Promise<QueryAllFeeStructuresResponse>;
  UserFeeStructures(request: QueryUserFeeStructuresRequest): Promise<QueryUserFeeStructuresResponse>;
  /** Parameters queries the staking parameters. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Get the controlled parameters for all markets */
  ControlledParams(request: QueryControlledParamsRequest): Promise<QueryControlledParamsResponse>;
  EVMMarket(request: QueryEVMMarketRequest): Promise<QueryEVMMarketResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.market.Query";
    this.rpc = rpc;
    this.Market = this.Market.bind(this);
    this.MarketAll = this.MarketAll.bind(this);
    this.TradingFees = this.TradingFees.bind(this);
    this.FeeTiers = this.FeeTiers.bind(this);
    this.StakeEquivalenceAll = this.StakeEquivalenceAll.bind(this);
    this.FeeStructuresAll = this.FeeStructuresAll.bind(this);
    this.UserFeeStructures = this.UserFeeStructures.bind(this);
    this.Params = this.Params.bind(this);
    this.ControlledParams = this.ControlledParams.bind(this);
    this.EVMMarket = this.EVMMarket.bind(this);
  }
  Market(request: QueryGetMarketRequest): Promise<QueryGetMarketResponse> {
    const data = QueryGetMarketRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Market", data);
    return promise.then((data) => QueryGetMarketResponse.decode(_m0.Reader.create(data)));
  }

  MarketAll(request: QueryAllMarketRequest): Promise<QueryAllMarketResponse> {
    const data = QueryAllMarketRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MarketAll", data);
    return promise.then((data) => QueryAllMarketResponse.decode(_m0.Reader.create(data)));
  }

  TradingFees(request: QueryGetTradingFeesRequest): Promise<QueryGetTradingFeesResponse> {
    const data = QueryGetTradingFeesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "TradingFees", data);
    return promise.then((data) => QueryGetTradingFeesResponse.decode(_m0.Reader.create(data)));
  }

  FeeTiers(request: QueryGetFeeTiersRequest): Promise<QueryGetFeeTiersResponse> {
    const data = QueryGetFeeTiersRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FeeTiers", data);
    return promise.then((data) => QueryGetFeeTiersResponse.decode(_m0.Reader.create(data)));
  }

  StakeEquivalenceAll(request: QueryAllStakeEquivalenceRequest): Promise<QueryAllStakeEquivalenceResponse> {
    const data = QueryAllStakeEquivalenceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "StakeEquivalenceAll", data);
    return promise.then((data) => QueryAllStakeEquivalenceResponse.decode(_m0.Reader.create(data)));
  }

  FeeStructuresAll(request: QueryAllFeeStructuresRequest): Promise<QueryAllFeeStructuresResponse> {
    const data = QueryAllFeeStructuresRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FeeStructuresAll", data);
    return promise.then((data) => QueryAllFeeStructuresResponse.decode(_m0.Reader.create(data)));
  }

  UserFeeStructures(request: QueryUserFeeStructuresRequest): Promise<QueryUserFeeStructuresResponse> {
    const data = QueryUserFeeStructuresRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UserFeeStructures", data);
    return promise.then((data) => QueryUserFeeStructuresResponse.decode(_m0.Reader.create(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  ControlledParams(request: QueryControlledParamsRequest): Promise<QueryControlledParamsResponse> {
    const data = QueryControlledParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ControlledParams", data);
    return promise.then((data) => QueryControlledParamsResponse.decode(_m0.Reader.create(data)));
  }

  EVMMarket(request: QueryEVMMarketRequest): Promise<QueryEVMMarketResponse> {
    const data = QueryEVMMarketRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "EVMMarket", data);
    return promise.then((data) => QueryEVMMarketResponse.decode(_m0.Reader.create(data)));
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
