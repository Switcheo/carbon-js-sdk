/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { TokenPrice, PriceSet } from "./pricing";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";

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
export interface QueryParamsRequest {}

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

const baseQueryPriceTokenRequest: object = { denom: "" };

export const QueryPriceTokenRequest = {
  encode(
    message: QueryPriceTokenRequest,
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
  ): QueryPriceTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPriceTokenRequest } as QueryPriceTokenRequest;
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

  fromJSON(object: any): QueryPriceTokenRequest {
    const message = { ...baseQueryPriceTokenRequest } as QueryPriceTokenRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: QueryPriceTokenRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPriceTokenRequest>
  ): QueryPriceTokenRequest {
    const message = { ...baseQueryPriceTokenRequest } as QueryPriceTokenRequest;
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseQueryPriceTokenResponse: object = {};

export const QueryPriceTokenResponse = {
  encode(
    message: QueryPriceTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tokenPrice !== undefined) {
      TokenPrice.encode(message.tokenPrice, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPriceTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryPriceTokenResponse,
    } as QueryPriceTokenResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenPrice = TokenPrice.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPriceTokenResponse {
    const message = {
      ...baseQueryPriceTokenResponse,
    } as QueryPriceTokenResponse;
    message.tokenPrice =
      object.tokenPrice !== undefined && object.tokenPrice !== null
        ? TokenPrice.fromJSON(object.tokenPrice)
        : undefined;
    return message;
  },

  toJSON(message: QueryPriceTokenResponse): unknown {
    const obj: any = {};
    message.tokenPrice !== undefined &&
      (obj.tokenPrice = message.tokenPrice
        ? TokenPrice.toJSON(message.tokenPrice)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPriceTokenResponse>
  ): QueryPriceTokenResponse {
    const message = {
      ...baseQueryPriceTokenResponse,
    } as QueryPriceTokenResponse;
    message.tokenPrice =
      object.tokenPrice !== undefined && object.tokenPrice !== null
        ? TokenPrice.fromPartial(object.tokenPrice)
        : undefined;
    return message;
  },
};

const baseQueryPriceSetRequest: object = { marketId: "" };

export const QueryPriceSetRequest = {
  encode(
    message: QueryPriceSetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPriceSetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPriceSetRequest } as QueryPriceSetRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPriceSetRequest {
    const message = { ...baseQueryPriceSetRequest } as QueryPriceSetRequest;
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    return message;
  },

  toJSON(message: QueryPriceSetRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryPriceSetRequest>): QueryPriceSetRequest {
    const message = { ...baseQueryPriceSetRequest } as QueryPriceSetRequest;
    message.marketId = object.marketId ?? "";
    return message;
  },
};

const baseQueryPriceSetResponse: object = {};

export const QueryPriceSetResponse = {
  encode(
    message: QueryPriceSetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.prices !== undefined) {
      PriceSet.encode(message.prices, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPriceSetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPriceSetResponse } as QueryPriceSetResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prices = PriceSet.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPriceSetResponse {
    const message = { ...baseQueryPriceSetResponse } as QueryPriceSetResponse;
    message.prices =
      object.prices !== undefined && object.prices !== null
        ? PriceSet.fromJSON(object.prices)
        : undefined;
    return message;
  },

  toJSON(message: QueryPriceSetResponse): unknown {
    const obj: any = {};
    message.prices !== undefined &&
      (obj.prices = message.prices
        ? PriceSet.toJSON(message.prices)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPriceSetResponse>
  ): QueryPriceSetResponse {
    const message = { ...baseQueryPriceSetResponse } as QueryPriceSetResponse;
    message.prices =
      object.prices !== undefined && object.prices !== null
        ? PriceSet.fromPartial(object.prices)
        : undefined;
    return message;
  },
};

const baseQueryAllPriceSetRequest: object = {};

export const QueryAllPriceSetRequest = {
  encode(
    message: QueryAllPriceSetRequest,
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
  ): QueryAllPriceSetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPriceSetRequest,
    } as QueryAllPriceSetRequest;
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

  fromJSON(object: any): QueryAllPriceSetRequest {
    const message = {
      ...baseQueryAllPriceSetRequest,
    } as QueryAllPriceSetRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllPriceSetRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPriceSetRequest>
  ): QueryAllPriceSetRequest {
    const message = {
      ...baseQueryAllPriceSetRequest,
    } as QueryAllPriceSetRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllPriceSetResponse: object = {};

export const QueryAllPriceSetResponse = {
  encode(
    message: QueryAllPriceSetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.prices) {
      PriceSet.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllPriceSetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPriceSetResponse,
    } as QueryAllPriceSetResponse;
    message.prices = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prices.push(PriceSet.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPriceSetResponse {
    const message = {
      ...baseQueryAllPriceSetResponse,
    } as QueryAllPriceSetResponse;
    message.prices = (object.prices ?? []).map((e: any) =>
      PriceSet.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllPriceSetResponse): unknown {
    const obj: any = {};
    if (message.prices) {
      obj.prices = message.prices.map((e) =>
        e ? PriceSet.toJSON(e) : undefined
      );
    } else {
      obj.prices = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPriceSetResponse>
  ): QueryAllPriceSetResponse {
    const message = {
      ...baseQueryAllPriceSetResponse,
    } as QueryAllPriceSetResponse;
    message.prices = (object.prices ?? []).map((e) => PriceSet.fromPartial(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryRateRequest: object = { denomA: "", denomB: "" };

export const QueryRateRequest = {
  encode(
    message: QueryRateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denomA !== "") {
      writer.uint32(10).string(message.denomA);
    }
    if (message.denomB !== "") {
      writer.uint32(18).string(message.denomB);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryRateRequest } as QueryRateRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomA = reader.string();
          break;
        case 2:
          message.denomB = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRateRequest {
    const message = { ...baseQueryRateRequest } as QueryRateRequest;
    message.denomA =
      object.denomA !== undefined && object.denomA !== null
        ? String(object.denomA)
        : "";
    message.denomB =
      object.denomB !== undefined && object.denomB !== null
        ? String(object.denomB)
        : "";
    return message;
  },

  toJSON(message: QueryRateRequest): unknown {
    const obj: any = {};
    message.denomA !== undefined && (obj.denomA = message.denomA);
    message.denomB !== undefined && (obj.denomB = message.denomB);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRateRequest>): QueryRateRequest {
    const message = { ...baseQueryRateRequest } as QueryRateRequest;
    message.denomA = object.denomA ?? "";
    message.denomB = object.denomB ?? "";
    return message;
  },
};

const baseQueryRateResponse: object = { rate: "" };

export const QueryRateResponse = {
  encode(
    message: QueryRateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rate !== "") {
      writer.uint32(10).string(message.rate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryRateResponse } as QueryRateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRateResponse {
    const message = { ...baseQueryRateResponse } as QueryRateResponse;
    message.rate =
      object.rate !== undefined && object.rate !== null
        ? String(object.rate)
        : "";
    return message;
  },

  toJSON(message: QueryRateResponse): unknown {
    const obj: any = {};
    message.rate !== undefined && (obj.rate = message.rate);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRateResponse>): QueryRateResponse {
    const message = { ...baseQueryRateResponse } as QueryRateResponse;
    message.rate = object.rate ?? "";
    return message;
  },
};

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

const baseQueryTokenPriceRequest: object = { denom: "" };

export const QueryTokenPriceRequest = {
  encode(
    message: QueryTokenPriceRequest,
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
  ): QueryTokenPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTokenPriceRequest } as QueryTokenPriceRequest;
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

  fromJSON(object: any): QueryTokenPriceRequest {
    const message = { ...baseQueryTokenPriceRequest } as QueryTokenPriceRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: QueryTokenPriceRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTokenPriceRequest>
  ): QueryTokenPriceRequest {
    const message = { ...baseQueryTokenPriceRequest } as QueryTokenPriceRequest;
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseQueryTokenPriceResponse: object = {};

export const QueryTokenPriceResponse = {
  encode(
    message: QueryTokenPriceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tokenPrice !== undefined) {
      TokenPrice.encode(message.tokenPrice, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTokenPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTokenPriceResponse,
    } as QueryTokenPriceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenPrice = TokenPrice.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenPriceResponse {
    const message = {
      ...baseQueryTokenPriceResponse,
    } as QueryTokenPriceResponse;
    message.tokenPrice =
      object.tokenPrice !== undefined && object.tokenPrice !== null
        ? TokenPrice.fromJSON(object.tokenPrice)
        : undefined;
    return message;
  },

  toJSON(message: QueryTokenPriceResponse): unknown {
    const obj: any = {};
    message.tokenPrice !== undefined &&
      (obj.tokenPrice = message.tokenPrice
        ? TokenPrice.toJSON(message.tokenPrice)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTokenPriceResponse>
  ): QueryTokenPriceResponse {
    const message = {
      ...baseQueryTokenPriceResponse,
    } as QueryTokenPriceResponse;
    message.tokenPrice =
      object.tokenPrice !== undefined && object.tokenPrice !== null
        ? TokenPrice.fromPartial(object.tokenPrice)
        : undefined;
    return message;
  },
};

const baseQueryTokenPriceAllRequest: object = {};

export const QueryTokenPriceAllRequest = {
  encode(
    message: QueryTokenPriceAllRequest,
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
  ): QueryTokenPriceAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTokenPriceAllRequest,
    } as QueryTokenPriceAllRequest;
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

  fromJSON(object: any): QueryTokenPriceAllRequest {
    const message = {
      ...baseQueryTokenPriceAllRequest,
    } as QueryTokenPriceAllRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryTokenPriceAllRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTokenPriceAllRequest>
  ): QueryTokenPriceAllRequest {
    const message = {
      ...baseQueryTokenPriceAllRequest,
    } as QueryTokenPriceAllRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryTokenPriceAllResponse: object = {};

export const QueryTokenPriceAllResponse = {
  encode(
    message: QueryTokenPriceAllResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.tokenPrices) {
      TokenPrice.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryTokenPriceAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTokenPriceAllResponse,
    } as QueryTokenPriceAllResponse;
    message.tokenPrices = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenPrices.push(TokenPrice.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryTokenPriceAllResponse {
    const message = {
      ...baseQueryTokenPriceAllResponse,
    } as QueryTokenPriceAllResponse;
    message.tokenPrices = (object.tokenPrices ?? []).map((e: any) =>
      TokenPrice.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryTokenPriceAllResponse): unknown {
    const obj: any = {};
    if (message.tokenPrices) {
      obj.tokenPrices = message.tokenPrices.map((e) =>
        e ? TokenPrice.toJSON(e) : undefined
      );
    } else {
      obj.tokenPrices = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTokenPriceAllResponse>
  ): QueryTokenPriceAllResponse {
    const message = {
      ...baseQueryTokenPriceAllResponse,
    } as QueryTokenPriceAllResponse;
    message.tokenPrices = (object.tokenPrices ?? []).map((e) =>
      TokenPrice.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
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
  PriceSetAll(
    request: QueryAllPriceSetRequest
  ): Promise<QueryAllPriceSetResponse>;
  /** Get current exchange rate between two denoms */
  Rate(request: QueryRateRequest): Promise<QueryRateResponse>;
  /** Parameters queries the pricing parameters. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Get index price and twap for a token */
  TokenPrice(request: QueryTokenPriceRequest): Promise<QueryTokenPriceResponse>;
  /** Get index price and twap for all tokens */
  TokenPriceAll(
    request: QueryTokenPriceAllRequest
  ): Promise<QueryTokenPriceAllResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.PriceSet = this.PriceSet.bind(this);
    this.PriceSetAll = this.PriceSetAll.bind(this);
    this.Rate = this.Rate.bind(this);
    this.Params = this.Params.bind(this);
    this.TokenPrice = this.TokenPrice.bind(this);
    this.TokenPriceAll = this.TokenPriceAll.bind(this);
  }
  PriceSet(request: QueryPriceSetRequest): Promise<QueryPriceSetResponse> {
    const data = QueryPriceSetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.pricing.Query",
      "PriceSet",
      data
    );
    return promise.then((data) =>
      QueryPriceSetResponse.decode(new _m0.Reader(data))
    );
  }

  PriceSetAll(
    request: QueryAllPriceSetRequest
  ): Promise<QueryAllPriceSetResponse> {
    const data = QueryAllPriceSetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.pricing.Query",
      "PriceSetAll",
      data
    );
    return promise.then((data) =>
      QueryAllPriceSetResponse.decode(new _m0.Reader(data))
    );
  }

  Rate(request: QueryRateRequest): Promise<QueryRateResponse> {
    const data = QueryRateRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.pricing.Query",
      "Rate",
      data
    );
    return promise.then((data) =>
      QueryRateResponse.decode(new _m0.Reader(data))
    );
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.pricing.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  TokenPrice(
    request: QueryTokenPriceRequest
  ): Promise<QueryTokenPriceResponse> {
    const data = QueryTokenPriceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.pricing.Query",
      "TokenPrice",
      data
    );
    return promise.then((data) =>
      QueryTokenPriceResponse.decode(new _m0.Reader(data))
    );
  }

  TokenPriceAll(
    request: QueryTokenPriceAllRequest
  ): Promise<QueryTokenPriceAllResponse> {
    const data = QueryTokenPriceAllRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.pricing.Query",
      "TokenPriceAll",
      data
    );
    return promise.then((data) =>
      QueryTokenPriceAllResponse.decode(new _m0.Reader(data))
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
