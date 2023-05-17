/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { PoolDetails } from "./pool";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "Switcheo.carbon.perpsliquidity";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

export interface QueryGetPlPoolRequest {
  poolId: string;
}

export interface QueryGetPlPoolResponse {
  pool?: PoolDetails;
}

export interface QueryAllPlPoolsRequest {
  pagination?: PageRequest;
}

export interface QueryAllPlPoolsResponse {
  pools: PoolDetails[];
  pagination?: PageResponse;
}

export interface QueryPlPoolMappingsRequest {
  pagination?: PageRequest;
}

export interface QueryPlPoolMappingsResponse {
  poolMappings: { [key: string]: Long };
  pagination?: PageResponse;
}

export interface QueryPlPoolMappingsResponse_PoolMappingsEntry {
  key: string;
  value: Long;
}

export interface QueryAllPlPoolAddressRequest {
  pagination?: PageRequest;
}

export interface QueryAllPlPoolAddressResponse {
  addresses: { [key: string]: string };
  pagination?: PageResponse;
}

export interface QueryAllPlPoolAddressResponse_AddressesEntry {
  key: string;
  value: string;
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

const baseQueryGetPlPoolRequest: object = { poolId: "" };

export const QueryGetPlPoolRequest = {
  encode(
    message: QueryGetPlPoolRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetPlPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetPlPoolRequest } as QueryGetPlPoolRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPlPoolRequest {
    const message = { ...baseQueryGetPlPoolRequest } as QueryGetPlPoolRequest;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? String(object.poolId)
        : "";
    return message;
  },

  toJSON(message: QueryGetPlPoolRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPlPoolRequest>
  ): QueryGetPlPoolRequest {
    const message = { ...baseQueryGetPlPoolRequest } as QueryGetPlPoolRequest;
    message.poolId = object.poolId ?? "";
    return message;
  },
};

const baseQueryGetPlPoolResponse: object = {};

export const QueryGetPlPoolResponse = {
  encode(
    message: QueryGetPlPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pool !== undefined) {
      PoolDetails.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetPlPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetPlPoolResponse } as QueryGetPlPoolResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = PoolDetails.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPlPoolResponse {
    const message = { ...baseQueryGetPlPoolResponse } as QueryGetPlPoolResponse;
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? PoolDetails.fromJSON(object.pool)
        : undefined;
    return message;
  },

  toJSON(message: QueryGetPlPoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined &&
      (obj.pool = message.pool ? PoolDetails.toJSON(message.pool) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPlPoolResponse>
  ): QueryGetPlPoolResponse {
    const message = { ...baseQueryGetPlPoolResponse } as QueryGetPlPoolResponse;
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? PoolDetails.fromPartial(object.pool)
        : undefined;
    return message;
  },
};

const baseQueryAllPlPoolsRequest: object = {};

export const QueryAllPlPoolsRequest = {
  encode(
    message: QueryAllPlPoolsRequest,
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
  ): QueryAllPlPoolsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPlPoolsRequest } as QueryAllPlPoolsRequest;
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

  fromJSON(object: any): QueryAllPlPoolsRequest {
    const message = { ...baseQueryAllPlPoolsRequest } as QueryAllPlPoolsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllPlPoolsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPlPoolsRequest>
  ): QueryAllPlPoolsRequest {
    const message = { ...baseQueryAllPlPoolsRequest } as QueryAllPlPoolsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllPlPoolsResponse: object = {};

export const QueryAllPlPoolsResponse = {
  encode(
    message: QueryAllPlPoolsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.pools) {
      PoolDetails.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllPlPoolsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPlPoolsResponse,
    } as QueryAllPlPoolsResponse;
    message.pools = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(PoolDetails.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPlPoolsResponse {
    const message = {
      ...baseQueryAllPlPoolsResponse,
    } as QueryAllPlPoolsResponse;
    message.pools = (object.pools ?? []).map((e: any) =>
      PoolDetails.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllPlPoolsResponse): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map((e) =>
        e ? PoolDetails.toJSON(e) : undefined
      );
    } else {
      obj.pools = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPlPoolsResponse>
  ): QueryAllPlPoolsResponse {
    const message = {
      ...baseQueryAllPlPoolsResponse,
    } as QueryAllPlPoolsResponse;
    message.pools = (object.pools ?? []).map((e) => PoolDetails.fromPartial(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryPlPoolMappingsRequest: object = {};

export const QueryPlPoolMappingsRequest = {
  encode(
    message: QueryPlPoolMappingsRequest,
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
  ): QueryPlPoolMappingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryPlPoolMappingsRequest,
    } as QueryPlPoolMappingsRequest;
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

  fromJSON(object: any): QueryPlPoolMappingsRequest {
    const message = {
      ...baseQueryPlPoolMappingsRequest,
    } as QueryPlPoolMappingsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryPlPoolMappingsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPlPoolMappingsRequest>
  ): QueryPlPoolMappingsRequest {
    const message = {
      ...baseQueryPlPoolMappingsRequest,
    } as QueryPlPoolMappingsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryPlPoolMappingsResponse: object = {};

export const QueryPlPoolMappingsResponse = {
  encode(
    message: QueryPlPoolMappingsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.poolMappings).forEach(([key, value]) => {
      QueryPlPoolMappingsResponse_PoolMappingsEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
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
  ): QueryPlPoolMappingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryPlPoolMappingsResponse,
    } as QueryPlPoolMappingsResponse;
    message.poolMappings = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = QueryPlPoolMappingsResponse_PoolMappingsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry1.value !== undefined) {
            message.poolMappings[entry1.key] = entry1.value;
          }
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

  fromJSON(object: any): QueryPlPoolMappingsResponse {
    const message = {
      ...baseQueryPlPoolMappingsResponse,
    } as QueryPlPoolMappingsResponse;
    message.poolMappings = Object.entries(object.poolMappings ?? {}).reduce<{
      [key: string]: Long;
    }>((acc, [key, value]) => {
      acc[key] = Long.fromString(value as string);
      return acc;
    }, {});
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryPlPoolMappingsResponse): unknown {
    const obj: any = {};
    obj.poolMappings = {};
    if (message.poolMappings) {
      Object.entries(message.poolMappings).forEach(([k, v]) => {
        obj.poolMappings[k] = v.toString();
      });
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPlPoolMappingsResponse>
  ): QueryPlPoolMappingsResponse {
    const message = {
      ...baseQueryPlPoolMappingsResponse,
    } as QueryPlPoolMappingsResponse;
    message.poolMappings = Object.entries(object.poolMappings ?? {}).reduce<{
      [key: string]: Long;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Long.fromValue(value);
      }
      return acc;
    }, {});
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryPlPoolMappingsResponse_PoolMappingsEntry: object = {
  key: "",
  value: Long.UZERO,
};

export const QueryPlPoolMappingsResponse_PoolMappingsEntry = {
  encode(
    message: QueryPlPoolMappingsResponse_PoolMappingsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (!message.value.isZero()) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPlPoolMappingsResponse_PoolMappingsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryPlPoolMappingsResponse_PoolMappingsEntry,
    } as QueryPlPoolMappingsResponse_PoolMappingsEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPlPoolMappingsResponse_PoolMappingsEntry {
    const message = {
      ...baseQueryPlPoolMappingsResponse_PoolMappingsEntry,
    } as QueryPlPoolMappingsResponse_PoolMappingsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? Long.fromString(object.value)
        : Long.UZERO;
    return message;
  },

  toJSON(message: QueryPlPoolMappingsResponse_PoolMappingsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = (message.value || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPlPoolMappingsResponse_PoolMappingsEntry>
  ): QueryPlPoolMappingsResponse_PoolMappingsEntry {
    const message = {
      ...baseQueryPlPoolMappingsResponse_PoolMappingsEntry,
    } as QueryPlPoolMappingsResponse_PoolMappingsEntry;
    message.key = object.key ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? Long.fromValue(object.value)
        : Long.UZERO;
    return message;
  },
};

const baseQueryAllPlPoolAddressRequest: object = {};

export const QueryAllPlPoolAddressRequest = {
  encode(
    message: QueryAllPlPoolAddressRequest,
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
  ): QueryAllPlPoolAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPlPoolAddressRequest,
    } as QueryAllPlPoolAddressRequest;
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

  fromJSON(object: any): QueryAllPlPoolAddressRequest {
    const message = {
      ...baseQueryAllPlPoolAddressRequest,
    } as QueryAllPlPoolAddressRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllPlPoolAddressRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPlPoolAddressRequest>
  ): QueryAllPlPoolAddressRequest {
    const message = {
      ...baseQueryAllPlPoolAddressRequest,
    } as QueryAllPlPoolAddressRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllPlPoolAddressResponse: object = {};

export const QueryAllPlPoolAddressResponse = {
  encode(
    message: QueryAllPlPoolAddressResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.addresses).forEach(([key, value]) => {
      QueryAllPlPoolAddressResponse_AddressesEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
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
  ): QueryAllPlPoolAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPlPoolAddressResponse,
    } as QueryAllPlPoolAddressResponse;
    message.addresses = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = QueryAllPlPoolAddressResponse_AddressesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry1.value !== undefined) {
            message.addresses[entry1.key] = entry1.value;
          }
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

  fromJSON(object: any): QueryAllPlPoolAddressResponse {
    const message = {
      ...baseQueryAllPlPoolAddressResponse,
    } as QueryAllPlPoolAddressResponse;
    message.addresses = Object.entries(object.addresses ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllPlPoolAddressResponse): unknown {
    const obj: any = {};
    obj.addresses = {};
    if (message.addresses) {
      Object.entries(message.addresses).forEach(([k, v]) => {
        obj.addresses[k] = v;
      });
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPlPoolAddressResponse>
  ): QueryAllPlPoolAddressResponse {
    const message = {
      ...baseQueryAllPlPoolAddressResponse,
    } as QueryAllPlPoolAddressResponse;
    message.addresses = Object.entries(object.addresses ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllPlPoolAddressResponse_AddressesEntry: object = {
  key: "",
  value: "",
};

export const QueryAllPlPoolAddressResponse_AddressesEntry = {
  encode(
    message: QueryAllPlPoolAddressResponse_AddressesEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllPlPoolAddressResponse_AddressesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPlPoolAddressResponse_AddressesEntry,
    } as QueryAllPlPoolAddressResponse_AddressesEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPlPoolAddressResponse_AddressesEntry {
    const message = {
      ...baseQueryAllPlPoolAddressResponse_AddressesEntry,
    } as QueryAllPlPoolAddressResponse_AddressesEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: QueryAllPlPoolAddressResponse_AddressesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPlPoolAddressResponse_AddressesEntry>
  ): QueryAllPlPoolAddressResponse_AddressesEntry {
    const message = {
      ...baseQueryAllPlPoolAddressResponse_AddressesEntry,
    } as QueryAllPlPoolAddressResponse_AddressesEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Get Pool details for a particular id */
  Pool(request: QueryGetPlPoolRequest): Promise<QueryGetPlPoolResponse>;
  /** Get all Pool details */
  PoolAll(request: QueryAllPlPoolsRequest): Promise<QueryAllPlPoolsResponse>;
  /** Get denom => pool_id mappings */
  PoolMappings(
    request: QueryPlPoolMappingsRequest
  ): Promise<QueryPlPoolMappingsResponse>;
  /** Get addresses for all plp pools */
  PoolAddressAll(
    request: QueryAllPlPoolAddressRequest
  ): Promise<QueryAllPlPoolAddressResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Pool = this.Pool.bind(this);
    this.PoolAll = this.PoolAll.bind(this);
    this.PoolMappings = this.PoolMappings.bind(this);
    this.PoolAddressAll = this.PoolAddressAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpsliquidity.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  Pool(request: QueryGetPlPoolRequest): Promise<QueryGetPlPoolResponse> {
    const data = QueryGetPlPoolRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpsliquidity.Query",
      "Pool",
      data
    );
    return promise.then((data) =>
      QueryGetPlPoolResponse.decode(new _m0.Reader(data))
    );
  }

  PoolAll(request: QueryAllPlPoolsRequest): Promise<QueryAllPlPoolsResponse> {
    const data = QueryAllPlPoolsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpsliquidity.Query",
      "PoolAll",
      data
    );
    return promise.then((data) =>
      QueryAllPlPoolsResponse.decode(new _m0.Reader(data))
    );
  }

  PoolMappings(
    request: QueryPlPoolMappingsRequest
  ): Promise<QueryPlPoolMappingsResponse> {
    const data = QueryPlPoolMappingsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpsliquidity.Query",
      "PoolMappings",
      data
    );
    return promise.then((data) =>
      QueryPlPoolMappingsResponse.decode(new _m0.Reader(data))
    );
  }

  PoolAddressAll(
    request: QueryAllPlPoolAddressRequest
  ): Promise<QueryAllPlPoolAddressResponse> {
    const data = QueryAllPlPoolAddressRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpsliquidity.Query",
      "PoolAddressAll",
      data
    );
    return promise.then((data) =>
      QueryAllPlPoolAddressResponse.decode(new _m0.Reader(data))
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
