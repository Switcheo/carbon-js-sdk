/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { SwthHolding } from "./sunset";
import { SunsetPrice } from "./sunset_price";

export const protobufPackage = "Switcheo.carbon.admin";

export interface QueryAdminRequest {
}

export interface QueryAdminResponse {
  address: string;
}

export interface QueryAdminRecipientRequest {
}

export interface QueryAdminRecipientResponse {
  address: string;
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

export interface QuerySwthHoldingRequest {
  address: string;
}

export interface QuerySwthHoldingResponse {
  holding?: SwthHolding;
}

export interface QuerySwthHoldingAllRequest {
  pagination?: PageRequest;
}

export interface QuerySwthHoldingAllResponse {
  holdings: SwthHolding[];
  pagination?: PageResponse;
}

export interface QuerySunsetPriceRequest {
  denom: string;
}

export interface QuerySunsetPriceResponse {
  price?: SunsetPrice;
}

export interface QuerySunsetPriceAllRequest {
  pagination?: PageRequest;
}

export interface QuerySunsetPriceAllResponse {
  prices: SunsetPrice[];
  pagination?: PageResponse;
}

function createBaseQueryAdminRequest(): QueryAdminRequest {
  return {};
}

export const QueryAdminRequest = {
  encode(_: QueryAdminRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAdminRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAdminRequest();
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

  fromJSON(_: any): QueryAdminRequest {
    return {};
  },

  toJSON(_: QueryAdminRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryAdminRequest>): QueryAdminRequest {
    return QueryAdminRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryAdminRequest>): QueryAdminRequest {
    const message = createBaseQueryAdminRequest();
    return message;
  },
};

function createBaseQueryAdminResponse(): QueryAdminResponse {
  return { address: "" };
}

export const QueryAdminResponse = {
  encode(message: QueryAdminResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAdminResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAdminResponse {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryAdminResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<QueryAdminResponse>): QueryAdminResponse {
    return QueryAdminResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAdminResponse>): QueryAdminResponse {
    const message = createBaseQueryAdminResponse();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryAdminRecipientRequest(): QueryAdminRecipientRequest {
  return {};
}

export const QueryAdminRecipientRequest = {
  encode(_: QueryAdminRecipientRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAdminRecipientRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAdminRecipientRequest();
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

  fromJSON(_: any): QueryAdminRecipientRequest {
    return {};
  },

  toJSON(_: QueryAdminRecipientRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryAdminRecipientRequest>): QueryAdminRecipientRequest {
    return QueryAdminRecipientRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryAdminRecipientRequest>): QueryAdminRecipientRequest {
    const message = createBaseQueryAdminRecipientRequest();
    return message;
  },
};

function createBaseQueryAdminRecipientResponse(): QueryAdminRecipientResponse {
  return { address: "" };
}

export const QueryAdminRecipientResponse = {
  encode(message: QueryAdminRecipientResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAdminRecipientResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAdminRecipientResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAdminRecipientResponse {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryAdminRecipientResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<QueryAdminRecipientResponse>): QueryAdminRecipientResponse {
    return QueryAdminRecipientResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAdminRecipientResponse>): QueryAdminRecipientResponse {
    const message = createBaseQueryAdminRecipientResponse();
    message.address = object.address ?? "";
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

function createBaseQuerySwthHoldingRequest(): QuerySwthHoldingRequest {
  return { address: "" };
}

export const QuerySwthHoldingRequest = {
  encode(message: QuerySwthHoldingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwthHoldingRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwthHoldingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuerySwthHoldingRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QuerySwthHoldingRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<QuerySwthHoldingRequest>): QuerySwthHoldingRequest {
    return QuerySwthHoldingRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QuerySwthHoldingRequest>): QuerySwthHoldingRequest {
    const message = createBaseQuerySwthHoldingRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQuerySwthHoldingResponse(): QuerySwthHoldingResponse {
  return { holding: undefined };
}

export const QuerySwthHoldingResponse = {
  encode(message: QuerySwthHoldingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.holding !== undefined) {
      SwthHolding.encode(message.holding, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwthHoldingResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwthHoldingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.holding = SwthHolding.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuerySwthHoldingResponse {
    return { holding: isSet(object.holding) ? SwthHolding.fromJSON(object.holding) : undefined };
  },

  toJSON(message: QuerySwthHoldingResponse): unknown {
    const obj: any = {};
    message.holding !== undefined && (obj.holding = message.holding ? SwthHolding.toJSON(message.holding) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QuerySwthHoldingResponse>): QuerySwthHoldingResponse {
    return QuerySwthHoldingResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QuerySwthHoldingResponse>): QuerySwthHoldingResponse {
    const message = createBaseQuerySwthHoldingResponse();
    message.holding = (object.holding !== undefined && object.holding !== null)
      ? SwthHolding.fromPartial(object.holding)
      : undefined;
    return message;
  },
};

function createBaseQuerySwthHoldingAllRequest(): QuerySwthHoldingAllRequest {
  return { pagination: undefined };
}

export const QuerySwthHoldingAllRequest = {
  encode(message: QuerySwthHoldingAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwthHoldingAllRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwthHoldingAllRequest();
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

  fromJSON(object: any): QuerySwthHoldingAllRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QuerySwthHoldingAllRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QuerySwthHoldingAllRequest>): QuerySwthHoldingAllRequest {
    return QuerySwthHoldingAllRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QuerySwthHoldingAllRequest>): QuerySwthHoldingAllRequest {
    const message = createBaseQuerySwthHoldingAllRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQuerySwthHoldingAllResponse(): QuerySwthHoldingAllResponse {
  return { holdings: [], pagination: undefined };
}

export const QuerySwthHoldingAllResponse = {
  encode(message: QuerySwthHoldingAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.holdings) {
      SwthHolding.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwthHoldingAllResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwthHoldingAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.holdings.push(SwthHolding.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QuerySwthHoldingAllResponse {
    return {
      holdings: Array.isArray(object?.holdings) ? object.holdings.map((e: any) => SwthHolding.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QuerySwthHoldingAllResponse): unknown {
    const obj: any = {};
    if (message.holdings) {
      obj.holdings = message.holdings.map((e) => e ? SwthHolding.toJSON(e) : undefined);
    } else {
      obj.holdings = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QuerySwthHoldingAllResponse>): QuerySwthHoldingAllResponse {
    return QuerySwthHoldingAllResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QuerySwthHoldingAllResponse>): QuerySwthHoldingAllResponse {
    const message = createBaseQuerySwthHoldingAllResponse();
    message.holdings = object.holdings?.map((e) => SwthHolding.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQuerySunsetPriceRequest(): QuerySunsetPriceRequest {
  return { denom: "" };
}

export const QuerySunsetPriceRequest = {
  encode(message: QuerySunsetPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySunsetPriceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySunsetPriceRequest();
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

  fromJSON(object: any): QuerySunsetPriceRequest {
    return { denom: isSet(object.denom) ? String(object.denom) : "" };
  },

  toJSON(message: QuerySunsetPriceRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<QuerySunsetPriceRequest>): QuerySunsetPriceRequest {
    return QuerySunsetPriceRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QuerySunsetPriceRequest>): QuerySunsetPriceRequest {
    const message = createBaseQuerySunsetPriceRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQuerySunsetPriceResponse(): QuerySunsetPriceResponse {
  return { price: undefined };
}

export const QuerySunsetPriceResponse = {
  encode(message: QuerySunsetPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== undefined) {
      SunsetPrice.encode(message.price, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySunsetPriceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySunsetPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.price = SunsetPrice.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuerySunsetPriceResponse {
    return { price: isSet(object.price) ? SunsetPrice.fromJSON(object.price) : undefined };
  },

  toJSON(message: QuerySunsetPriceResponse): unknown {
    const obj: any = {};
    message.price !== undefined && (obj.price = message.price ? SunsetPrice.toJSON(message.price) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QuerySunsetPriceResponse>): QuerySunsetPriceResponse {
    return QuerySunsetPriceResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QuerySunsetPriceResponse>): QuerySunsetPriceResponse {
    const message = createBaseQuerySunsetPriceResponse();
    message.price = (object.price !== undefined && object.price !== null)
      ? SunsetPrice.fromPartial(object.price)
      : undefined;
    return message;
  },
};

function createBaseQuerySunsetPriceAllRequest(): QuerySunsetPriceAllRequest {
  return { pagination: undefined };
}

export const QuerySunsetPriceAllRequest = {
  encode(message: QuerySunsetPriceAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySunsetPriceAllRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySunsetPriceAllRequest();
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

  fromJSON(object: any): QuerySunsetPriceAllRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QuerySunsetPriceAllRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QuerySunsetPriceAllRequest>): QuerySunsetPriceAllRequest {
    return QuerySunsetPriceAllRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QuerySunsetPriceAllRequest>): QuerySunsetPriceAllRequest {
    const message = createBaseQuerySunsetPriceAllRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQuerySunsetPriceAllResponse(): QuerySunsetPriceAllResponse {
  return { prices: [], pagination: undefined };
}

export const QuerySunsetPriceAllResponse = {
  encode(message: QuerySunsetPriceAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.prices) {
      SunsetPrice.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySunsetPriceAllResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySunsetPriceAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.prices.push(SunsetPrice.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QuerySunsetPriceAllResponse {
    return {
      prices: Array.isArray(object?.prices) ? object.prices.map((e: any) => SunsetPrice.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QuerySunsetPriceAllResponse): unknown {
    const obj: any = {};
    if (message.prices) {
      obj.prices = message.prices.map((e) => e ? SunsetPrice.toJSON(e) : undefined);
    } else {
      obj.prices = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QuerySunsetPriceAllResponse>): QuerySunsetPriceAllResponse {
    return QuerySunsetPriceAllResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QuerySunsetPriceAllResponse>): QuerySunsetPriceAllResponse {
    const message = createBaseQuerySunsetPriceAllResponse();
    message.prices = object.prices?.map((e) => SunsetPrice.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a list of Admin items. */
  Admin(request: QueryAdminRequest): Promise<QueryAdminResponse>;
  /** Queries a list of AdminRecipient items. */
  AdminRecipient(request: QueryAdminRecipientRequest): Promise<QueryAdminRecipientResponse>;
  /** Parameters queries the admin parameters. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * SwthHolding returns the SWTH an address held at sunset and the airdrop it
   * was promised.
   */
  SwthHolding(request: QuerySwthHoldingRequest): Promise<QuerySwthHoldingResponse>;
  /** SwthHoldingAll lists every address's sunset record, SWTH and airdrop. */
  SwthHoldingAll(request: QuerySwthHoldingAllRequest): Promise<QuerySwthHoldingAllResponse>;
  /** SunsetPrice returns the USD price the sunset converts a denom at. */
  SunsetPrice(request: QuerySunsetPriceRequest): Promise<QuerySunsetPriceResponse>;
  /**
   * SunsetPriceAll lists the USD price the sunset converts each denom at, a page
   * at a time. A page holds 100 records unless the request sets a limit.
   */
  SunsetPriceAll(request: QuerySunsetPriceAllRequest): Promise<QuerySunsetPriceAllResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.admin.Query";
    this.rpc = rpc;
    this.Admin = this.Admin.bind(this);
    this.AdminRecipient = this.AdminRecipient.bind(this);
    this.Params = this.Params.bind(this);
    this.SwthHolding = this.SwthHolding.bind(this);
    this.SwthHoldingAll = this.SwthHoldingAll.bind(this);
    this.SunsetPrice = this.SunsetPrice.bind(this);
    this.SunsetPriceAll = this.SunsetPriceAll.bind(this);
  }
  Admin(request: QueryAdminRequest): Promise<QueryAdminResponse> {
    const data = QueryAdminRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Admin", data);
    return promise.then((data) => QueryAdminResponse.decode(_m0.Reader.create(data)));
  }

  AdminRecipient(request: QueryAdminRecipientRequest): Promise<QueryAdminRecipientResponse> {
    const data = QueryAdminRecipientRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AdminRecipient", data);
    return promise.then((data) => QueryAdminRecipientResponse.decode(_m0.Reader.create(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  SwthHolding(request: QuerySwthHoldingRequest): Promise<QuerySwthHoldingResponse> {
    const data = QuerySwthHoldingRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SwthHolding", data);
    return promise.then((data) => QuerySwthHoldingResponse.decode(_m0.Reader.create(data)));
  }

  SwthHoldingAll(request: QuerySwthHoldingAllRequest): Promise<QuerySwthHoldingAllResponse> {
    const data = QuerySwthHoldingAllRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SwthHoldingAll", data);
    return promise.then((data) => QuerySwthHoldingAllResponse.decode(_m0.Reader.create(data)));
  }

  SunsetPrice(request: QuerySunsetPriceRequest): Promise<QuerySunsetPriceResponse> {
    const data = QuerySunsetPriceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SunsetPrice", data);
    return promise.then((data) => QuerySunsetPriceResponse.decode(_m0.Reader.create(data)));
  }

  SunsetPriceAll(request: QuerySunsetPriceAllRequest): Promise<QuerySunsetPriceAllResponse> {
    const data = QuerySunsetPriceAllRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SunsetPriceAll", data);
    return promise.then((data) => QuerySunsetPriceAllResponse.decode(_m0.Reader.create(data)));
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
