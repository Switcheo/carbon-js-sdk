/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { PriceSet, TokenPrice, VolatilityScoreDetails } from "./pricing";

export const protobufPackage = "Switcheo.carbon.pricing";

export interface QueryPriceTokenRequest {
  denom: string;
}

export interface QueryPriceTokenResponse {
  tokenPrice?: TokenPrice;
}

export interface QueryPriceSetRequest {
  marketId: string;
}

export interface QueryPriceSetResponse {
  prices?: PriceSet;
}

export interface QueryAllPriceSetRequest {
  pagination?: PageRequest;
}

export interface QueryAllPriceSetResponse {
  prices: PriceSet[];
  pagination?: PageResponse;
}

export interface QueryRateRequest {
  denomA: string;
  denomB: string;
}

export interface QueryRateResponse {
  rate: string;
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

export interface QueryTokenPriceRequest {
  denom: string;
}

export interface QueryTokenPriceResponse {
  tokenPrice?: TokenPrice;
}

export interface QueryTokenPriceAllRequest {
  pagination?: PageRequest;
}

export interface QueryTokenPriceAllResponse {
  tokenPrices: TokenPrice[];
  pagination?: PageResponse;
}

export interface QueryVolatilityScoreRequest {
  marketId: string;
}

export interface QueryVolatilityScoreResponse {
  volatilityScoreDetails?: VolatilityScoreDetails;
}

export interface QueryVolatilityScoreAllRequest {
  pagination?: PageRequest;
}

export interface QueryVolatilityScoreAllResponse {
  allVolatilityScoreDetails: VolatilityScoreDetails[];
  pagination?: PageResponse;
}

function createBaseQueryPriceTokenRequest(): QueryPriceTokenRequest {
  return { denom: "" };
}

export const QueryPriceTokenRequest = {
  encode(message: QueryPriceTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPriceTokenRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPriceTokenRequest();
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

  fromJSON(object: any): QueryPriceTokenRequest {
    return { denom: isSet(object.denom) ? String(object.denom) : "" };
  },

  toJSON(message: QueryPriceTokenRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<QueryPriceTokenRequest>): QueryPriceTokenRequest {
    return QueryPriceTokenRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryPriceTokenRequest>): QueryPriceTokenRequest {
    const message = createBaseQueryPriceTokenRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryPriceTokenResponse(): QueryPriceTokenResponse {
  return { tokenPrice: undefined };
}

export const QueryPriceTokenResponse = {
  encode(message: QueryPriceTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenPrice !== undefined) {
      TokenPrice.encode(message.tokenPrice, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPriceTokenResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPriceTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tokenPrice = TokenPrice.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPriceTokenResponse {
    return { tokenPrice: isSet(object.tokenPrice) ? TokenPrice.fromJSON(object.tokenPrice) : undefined };
  },

  toJSON(message: QueryPriceTokenResponse): unknown {
    const obj: any = {};
    message.tokenPrice !== undefined &&
      (obj.tokenPrice = message.tokenPrice ? TokenPrice.toJSON(message.tokenPrice) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryPriceTokenResponse>): QueryPriceTokenResponse {
    return QueryPriceTokenResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryPriceTokenResponse>): QueryPriceTokenResponse {
    const message = createBaseQueryPriceTokenResponse();
    message.tokenPrice = (object.tokenPrice !== undefined && object.tokenPrice !== null)
      ? TokenPrice.fromPartial(object.tokenPrice)
      : undefined;
    return message;
  },
};

function createBaseQueryPriceSetRequest(): QueryPriceSetRequest {
  return { marketId: "" };
}

export const QueryPriceSetRequest = {
  encode(message: QueryPriceSetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPriceSetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPriceSetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.marketId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPriceSetRequest {
    return { marketId: isSet(object.marketId) ? String(object.marketId) : "" };
  },

  toJSON(message: QueryPriceSetRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  create(base?: DeepPartial<QueryPriceSetRequest>): QueryPriceSetRequest {
    return QueryPriceSetRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryPriceSetRequest>): QueryPriceSetRequest {
    const message = createBaseQueryPriceSetRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
};

function createBaseQueryPriceSetResponse(): QueryPriceSetResponse {
  return { prices: undefined };
}

export const QueryPriceSetResponse = {
  encode(message: QueryPriceSetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.prices !== undefined) {
      PriceSet.encode(message.prices, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPriceSetResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPriceSetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.prices = PriceSet.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPriceSetResponse {
    return { prices: isSet(object.prices) ? PriceSet.fromJSON(object.prices) : undefined };
  },

  toJSON(message: QueryPriceSetResponse): unknown {
    const obj: any = {};
    message.prices !== undefined && (obj.prices = message.prices ? PriceSet.toJSON(message.prices) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryPriceSetResponse>): QueryPriceSetResponse {
    return QueryPriceSetResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryPriceSetResponse>): QueryPriceSetResponse {
    const message = createBaseQueryPriceSetResponse();
    message.prices = (object.prices !== undefined && object.prices !== null)
      ? PriceSet.fromPartial(object.prices)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPriceSetRequest(): QueryAllPriceSetRequest {
  return { pagination: undefined };
}

export const QueryAllPriceSetRequest = {
  encode(message: QueryAllPriceSetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPriceSetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPriceSetRequest();
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

  fromJSON(object: any): QueryAllPriceSetRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllPriceSetRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllPriceSetRequest>): QueryAllPriceSetRequest {
    return QueryAllPriceSetRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllPriceSetRequest>): QueryAllPriceSetRequest {
    const message = createBaseQueryAllPriceSetRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPriceSetResponse(): QueryAllPriceSetResponse {
  return { prices: [], pagination: undefined };
}

export const QueryAllPriceSetResponse = {
  encode(message: QueryAllPriceSetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.prices) {
      PriceSet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPriceSetResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPriceSetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.prices.push(PriceSet.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPriceSetResponse {
    return {
      prices: Array.isArray(object?.prices) ? object.prices.map((e: any) => PriceSet.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPriceSetResponse): unknown {
    const obj: any = {};
    if (message.prices) {
      obj.prices = message.prices.map((e) => e ? PriceSet.toJSON(e) : undefined);
    } else {
      obj.prices = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllPriceSetResponse>): QueryAllPriceSetResponse {
    return QueryAllPriceSetResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllPriceSetResponse>): QueryAllPriceSetResponse {
    const message = createBaseQueryAllPriceSetResponse();
    message.prices = object.prices?.map((e) => PriceSet.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryRateRequest(): QueryRateRequest {
  return { denomA: "", denomB: "" };
}

export const QueryRateRequest = {
  encode(message: QueryRateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomA !== "") {
      writer.uint32(10).string(message.denomA);
    }
    if (message.denomB !== "") {
      writer.uint32(18).string(message.denomB);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denomA = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denomB = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryRateRequest {
    return {
      denomA: isSet(object.denomA) ? String(object.denomA) : "",
      denomB: isSet(object.denomB) ? String(object.denomB) : "",
    };
  },

  toJSON(message: QueryRateRequest): unknown {
    const obj: any = {};
    message.denomA !== undefined && (obj.denomA = message.denomA);
    message.denomB !== undefined && (obj.denomB = message.denomB);
    return obj;
  },

  create(base?: DeepPartial<QueryRateRequest>): QueryRateRequest {
    return QueryRateRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryRateRequest>): QueryRateRequest {
    const message = createBaseQueryRateRequest();
    message.denomA = object.denomA ?? "";
    message.denomB = object.denomB ?? "";
    return message;
  },
};

function createBaseQueryRateResponse(): QueryRateResponse {
  return { rate: "" };
}

export const QueryRateResponse = {
  encode(message: QueryRateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rate !== "") {
      writer.uint32(10).string(message.rate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryRateResponse {
    return { rate: isSet(object.rate) ? String(object.rate) : "" };
  },

  toJSON(message: QueryRateResponse): unknown {
    const obj: any = {};
    message.rate !== undefined && (obj.rate = message.rate);
    return obj;
  },

  create(base?: DeepPartial<QueryRateResponse>): QueryRateResponse {
    return QueryRateResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryRateResponse>): QueryRateResponse {
    const message = createBaseQueryRateResponse();
    message.rate = object.rate ?? "";
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

function createBaseQueryTokenPriceRequest(): QueryTokenPriceRequest {
  return { denom: "" };
}

export const QueryTokenPriceRequest = {
  encode(message: QueryTokenPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenPriceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenPriceRequest();
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

  fromJSON(object: any): QueryTokenPriceRequest {
    return { denom: isSet(object.denom) ? String(object.denom) : "" };
  },

  toJSON(message: QueryTokenPriceRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<QueryTokenPriceRequest>): QueryTokenPriceRequest {
    return QueryTokenPriceRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryTokenPriceRequest>): QueryTokenPriceRequest {
    const message = createBaseQueryTokenPriceRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryTokenPriceResponse(): QueryTokenPriceResponse {
  return { tokenPrice: undefined };
}

export const QueryTokenPriceResponse = {
  encode(message: QueryTokenPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenPrice !== undefined) {
      TokenPrice.encode(message.tokenPrice, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenPriceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tokenPrice = TokenPrice.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTokenPriceResponse {
    return { tokenPrice: isSet(object.tokenPrice) ? TokenPrice.fromJSON(object.tokenPrice) : undefined };
  },

  toJSON(message: QueryTokenPriceResponse): unknown {
    const obj: any = {};
    message.tokenPrice !== undefined &&
      (obj.tokenPrice = message.tokenPrice ? TokenPrice.toJSON(message.tokenPrice) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryTokenPriceResponse>): QueryTokenPriceResponse {
    return QueryTokenPriceResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryTokenPriceResponse>): QueryTokenPriceResponse {
    const message = createBaseQueryTokenPriceResponse();
    message.tokenPrice = (object.tokenPrice !== undefined && object.tokenPrice !== null)
      ? TokenPrice.fromPartial(object.tokenPrice)
      : undefined;
    return message;
  },
};

function createBaseQueryTokenPriceAllRequest(): QueryTokenPriceAllRequest {
  return { pagination: undefined };
}

export const QueryTokenPriceAllRequest = {
  encode(message: QueryTokenPriceAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenPriceAllRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenPriceAllRequest();
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

  fromJSON(object: any): QueryTokenPriceAllRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryTokenPriceAllRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryTokenPriceAllRequest>): QueryTokenPriceAllRequest {
    return QueryTokenPriceAllRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryTokenPriceAllRequest>): QueryTokenPriceAllRequest {
    const message = createBaseQueryTokenPriceAllRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryTokenPriceAllResponse(): QueryTokenPriceAllResponse {
  return { tokenPrices: [], pagination: undefined };
}

export const QueryTokenPriceAllResponse = {
  encode(message: QueryTokenPriceAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tokenPrices) {
      TokenPrice.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenPriceAllResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenPriceAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tokenPrices.push(TokenPrice.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryTokenPriceAllResponse {
    return {
      tokenPrices: Array.isArray(object?.tokenPrices) ? object.tokenPrices.map((e: any) => TokenPrice.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryTokenPriceAllResponse): unknown {
    const obj: any = {};
    if (message.tokenPrices) {
      obj.tokenPrices = message.tokenPrices.map((e) => e ? TokenPrice.toJSON(e) : undefined);
    } else {
      obj.tokenPrices = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryTokenPriceAllResponse>): QueryTokenPriceAllResponse {
    return QueryTokenPriceAllResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryTokenPriceAllResponse>): QueryTokenPriceAllResponse {
    const message = createBaseQueryTokenPriceAllResponse();
    message.tokenPrices = object.tokenPrices?.map((e) => TokenPrice.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryVolatilityScoreRequest(): QueryVolatilityScoreRequest {
  return { marketId: "" };
}

export const QueryVolatilityScoreRequest = {
  encode(message: QueryVolatilityScoreRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVolatilityScoreRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVolatilityScoreRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.marketId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryVolatilityScoreRequest {
    return { marketId: isSet(object.marketId) ? String(object.marketId) : "" };
  },

  toJSON(message: QueryVolatilityScoreRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  create(base?: DeepPartial<QueryVolatilityScoreRequest>): QueryVolatilityScoreRequest {
    return QueryVolatilityScoreRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryVolatilityScoreRequest>): QueryVolatilityScoreRequest {
    const message = createBaseQueryVolatilityScoreRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
};

function createBaseQueryVolatilityScoreResponse(): QueryVolatilityScoreResponse {
  return { volatilityScoreDetails: undefined };
}

export const QueryVolatilityScoreResponse = {
  encode(message: QueryVolatilityScoreResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.volatilityScoreDetails !== undefined) {
      VolatilityScoreDetails.encode(message.volatilityScoreDetails, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVolatilityScoreResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVolatilityScoreResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.volatilityScoreDetails = VolatilityScoreDetails.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryVolatilityScoreResponse {
    return {
      volatilityScoreDetails: isSet(object.volatilityScoreDetails)
        ? VolatilityScoreDetails.fromJSON(object.volatilityScoreDetails)
        : undefined,
    };
  },

  toJSON(message: QueryVolatilityScoreResponse): unknown {
    const obj: any = {};
    message.volatilityScoreDetails !== undefined && (obj.volatilityScoreDetails = message.volatilityScoreDetails
      ? VolatilityScoreDetails.toJSON(message.volatilityScoreDetails)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryVolatilityScoreResponse>): QueryVolatilityScoreResponse {
    return QueryVolatilityScoreResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryVolatilityScoreResponse>): QueryVolatilityScoreResponse {
    const message = createBaseQueryVolatilityScoreResponse();
    message.volatilityScoreDetails =
      (object.volatilityScoreDetails !== undefined && object.volatilityScoreDetails !== null)
        ? VolatilityScoreDetails.fromPartial(object.volatilityScoreDetails)
        : undefined;
    return message;
  },
};

function createBaseQueryVolatilityScoreAllRequest(): QueryVolatilityScoreAllRequest {
  return { pagination: undefined };
}

export const QueryVolatilityScoreAllRequest = {
  encode(message: QueryVolatilityScoreAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVolatilityScoreAllRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVolatilityScoreAllRequest();
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

  fromJSON(object: any): QueryVolatilityScoreAllRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryVolatilityScoreAllRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryVolatilityScoreAllRequest>): QueryVolatilityScoreAllRequest {
    return QueryVolatilityScoreAllRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryVolatilityScoreAllRequest>): QueryVolatilityScoreAllRequest {
    const message = createBaseQueryVolatilityScoreAllRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryVolatilityScoreAllResponse(): QueryVolatilityScoreAllResponse {
  return { allVolatilityScoreDetails: [], pagination: undefined };
}

export const QueryVolatilityScoreAllResponse = {
  encode(message: QueryVolatilityScoreAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.allVolatilityScoreDetails) {
      VolatilityScoreDetails.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVolatilityScoreAllResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVolatilityScoreAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.allVolatilityScoreDetails.push(VolatilityScoreDetails.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryVolatilityScoreAllResponse {
    return {
      allVolatilityScoreDetails: Array.isArray(object?.allVolatilityScoreDetails)
        ? object.allVolatilityScoreDetails.map((e: any) => VolatilityScoreDetails.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryVolatilityScoreAllResponse): unknown {
    const obj: any = {};
    if (message.allVolatilityScoreDetails) {
      obj.allVolatilityScoreDetails = message.allVolatilityScoreDetails.map((e) =>
        e ? VolatilityScoreDetails.toJSON(e) : undefined
      );
    } else {
      obj.allVolatilityScoreDetails = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryVolatilityScoreAllResponse>): QueryVolatilityScoreAllResponse {
    return QueryVolatilityScoreAllResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryVolatilityScoreAllResponse>): QueryVolatilityScoreAllResponse {
    const message = createBaseQueryVolatilityScoreAllResponse();
    message.allVolatilityScoreDetails =
      object.allVolatilityScoreDetails?.map((e) => VolatilityScoreDetails.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Get prices for a market */
  PriceSet(request: QueryPriceSetRequest): Promise<QueryPriceSetResponse>;
  /** Get prices for all markets */
  PriceSetAll(request: QueryAllPriceSetRequest): Promise<QueryAllPriceSetResponse>;
  /** Get current exchange rate between two denoms */
  Rate(request: QueryRateRequest): Promise<QueryRateResponse>;
  /** Parameters queries the pricing parameters. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Get index price and twap for a token */
  TokenPrice(request: QueryTokenPriceRequest): Promise<QueryTokenPriceResponse>;
  /** Get index price and twap for all tokens */
  TokenPriceAll(request: QueryTokenPriceAllRequest): Promise<QueryTokenPriceAllResponse>;
  /** Get volatility score and constituents for a markets */
  VolatilityScore(request: QueryVolatilityScoreRequest): Promise<QueryVolatilityScoreResponse>;
  /** Get volatility score and constituents for all markets */
  VolatilityScoreAll(request: QueryVolatilityScoreAllRequest): Promise<QueryVolatilityScoreAllResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.pricing.Query";
    this.rpc = rpc;
    this.PriceSet = this.PriceSet.bind(this);
    this.PriceSetAll = this.PriceSetAll.bind(this);
    this.Rate = this.Rate.bind(this);
    this.Params = this.Params.bind(this);
    this.TokenPrice = this.TokenPrice.bind(this);
    this.TokenPriceAll = this.TokenPriceAll.bind(this);
    this.VolatilityScore = this.VolatilityScore.bind(this);
    this.VolatilityScoreAll = this.VolatilityScoreAll.bind(this);
  }
  PriceSet(request: QueryPriceSetRequest): Promise<QueryPriceSetResponse> {
    const data = QueryPriceSetRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PriceSet", data);
    return promise.then((data) => QueryPriceSetResponse.decode(_m0.Reader.create(data)));
  }

  PriceSetAll(request: QueryAllPriceSetRequest): Promise<QueryAllPriceSetResponse> {
    const data = QueryAllPriceSetRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PriceSetAll", data);
    return promise.then((data) => QueryAllPriceSetResponse.decode(_m0.Reader.create(data)));
  }

  Rate(request: QueryRateRequest): Promise<QueryRateResponse> {
    const data = QueryRateRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Rate", data);
    return promise.then((data) => QueryRateResponse.decode(_m0.Reader.create(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  TokenPrice(request: QueryTokenPriceRequest): Promise<QueryTokenPriceResponse> {
    const data = QueryTokenPriceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "TokenPrice", data);
    return promise.then((data) => QueryTokenPriceResponse.decode(_m0.Reader.create(data)));
  }

  TokenPriceAll(request: QueryTokenPriceAllRequest): Promise<QueryTokenPriceAllResponse> {
    const data = QueryTokenPriceAllRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "TokenPriceAll", data);
    return promise.then((data) => QueryTokenPriceAllResponse.decode(_m0.Reader.create(data)));
  }

  VolatilityScore(request: QueryVolatilityScoreRequest): Promise<QueryVolatilityScoreResponse> {
    const data = QueryVolatilityScoreRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "VolatilityScore", data);
    return promise.then((data) => QueryVolatilityScoreResponse.decode(_m0.Reader.create(data)));
  }

  VolatilityScoreAll(request: QueryVolatilityScoreAllRequest): Promise<QueryVolatilityScoreAllResponse> {
    const data = QueryVolatilityScoreAllRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "VolatilityScoreAll", data);
    return promise.then((data) => QueryVolatilityScoreAllResponse.decode(_m0.Reader.create(data)));
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
