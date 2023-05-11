/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { PerpetualsLiquidityPoolDetails } from "./perpetuals_liquidity_pool";
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

export interface QueryGetPerpetualsLiquidityPoolRequest {
  perpetualsLiquidityPoolId: string;
}

export interface QueryGetPerpetualsLiquidityPoolResponse {
  perpetualsLiquidityPool?: PerpetualsLiquidityPoolDetails;
}

export interface QueryAllPerpetualsLiquidityPoolsRequest {
  pagination?: PageRequest;
}

export interface QueryAllPerpetualsLiquidityPoolsResponse {
  perpetualsLiquidityPools: PerpetualsLiquidityPoolDetails[];
  pagination?: PageResponse;
}

export interface QueryPerpetualsLiquidityPoolMappingsRequest {
  pagination?: PageRequest;
}

export interface QueryPerpetualsLiquidityPoolMappingsResponse {
  perpetualsLiquidityPoolMappings: { [key: string]: Long };
  pagination?: PageResponse;
}

export interface QueryPerpetualsLiquidityPoolMappingsResponse_PerpetualsLiquidityPoolMappingsEntry {
  key: string;
  value: Long;
}

export interface QueryAllPlpPoolAddressRequest {
  pagination?: PageRequest;
}

export interface QueryAllPlpPoolAddressResponse {
  addresses: { [key: string]: string };
  pagination?: PageResponse;
}

export interface QueryAllPlpPoolAddressResponse_AddressesEntry {
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

const baseQueryGetPerpetualsLiquidityPoolRequest: object = {
  perpetualsLiquidityPoolId: "",
};

export const QueryGetPerpetualsLiquidityPoolRequest = {
  encode(
    message: QueryGetPerpetualsLiquidityPoolRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.perpetualsLiquidityPoolId !== "") {
      writer.uint32(10).string(message.perpetualsLiquidityPoolId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetPerpetualsLiquidityPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPerpetualsLiquidityPoolRequest,
    } as QueryGetPerpetualsLiquidityPoolRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.perpetualsLiquidityPoolId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPerpetualsLiquidityPoolRequest {
    const message = {
      ...baseQueryGetPerpetualsLiquidityPoolRequest,
    } as QueryGetPerpetualsLiquidityPoolRequest;
    message.perpetualsLiquidityPoolId =
      object.perpetualsLiquidityPoolId !== undefined &&
      object.perpetualsLiquidityPoolId !== null
        ? String(object.perpetualsLiquidityPoolId)
        : "";
    return message;
  },

  toJSON(message: QueryGetPerpetualsLiquidityPoolRequest): unknown {
    const obj: any = {};
    message.perpetualsLiquidityPoolId !== undefined &&
      (obj.perpetualsLiquidityPoolId = message.perpetualsLiquidityPoolId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPerpetualsLiquidityPoolRequest>
  ): QueryGetPerpetualsLiquidityPoolRequest {
    const message = {
      ...baseQueryGetPerpetualsLiquidityPoolRequest,
    } as QueryGetPerpetualsLiquidityPoolRequest;
    message.perpetualsLiquidityPoolId = object.perpetualsLiquidityPoolId ?? "";
    return message;
  },
};

const baseQueryGetPerpetualsLiquidityPoolResponse: object = {};

export const QueryGetPerpetualsLiquidityPoolResponse = {
  encode(
    message: QueryGetPerpetualsLiquidityPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.perpetualsLiquidityPool !== undefined) {
      PerpetualsLiquidityPoolDetails.encode(
        message.perpetualsLiquidityPool,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetPerpetualsLiquidityPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPerpetualsLiquidityPoolResponse,
    } as QueryGetPerpetualsLiquidityPoolResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.perpetualsLiquidityPool =
            PerpetualsLiquidityPoolDetails.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPerpetualsLiquidityPoolResponse {
    const message = {
      ...baseQueryGetPerpetualsLiquidityPoolResponse,
    } as QueryGetPerpetualsLiquidityPoolResponse;
    message.perpetualsLiquidityPool =
      object.perpetualsLiquidityPool !== undefined &&
      object.perpetualsLiquidityPool !== null
        ? PerpetualsLiquidityPoolDetails.fromJSON(
            object.perpetualsLiquidityPool
          )
        : undefined;
    return message;
  },

  toJSON(message: QueryGetPerpetualsLiquidityPoolResponse): unknown {
    const obj: any = {};
    message.perpetualsLiquidityPool !== undefined &&
      (obj.perpetualsLiquidityPool = message.perpetualsLiquidityPool
        ? PerpetualsLiquidityPoolDetails.toJSON(message.perpetualsLiquidityPool)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPerpetualsLiquidityPoolResponse>
  ): QueryGetPerpetualsLiquidityPoolResponse {
    const message = {
      ...baseQueryGetPerpetualsLiquidityPoolResponse,
    } as QueryGetPerpetualsLiquidityPoolResponse;
    message.perpetualsLiquidityPool =
      object.perpetualsLiquidityPool !== undefined &&
      object.perpetualsLiquidityPool !== null
        ? PerpetualsLiquidityPoolDetails.fromPartial(
            object.perpetualsLiquidityPool
          )
        : undefined;
    return message;
  },
};

const baseQueryAllPerpetualsLiquidityPoolsRequest: object = {};

export const QueryAllPerpetualsLiquidityPoolsRequest = {
  encode(
    message: QueryAllPerpetualsLiquidityPoolsRequest,
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
  ): QueryAllPerpetualsLiquidityPoolsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPerpetualsLiquidityPoolsRequest,
    } as QueryAllPerpetualsLiquidityPoolsRequest;
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

  fromJSON(object: any): QueryAllPerpetualsLiquidityPoolsRequest {
    const message = {
      ...baseQueryAllPerpetualsLiquidityPoolsRequest,
    } as QueryAllPerpetualsLiquidityPoolsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllPerpetualsLiquidityPoolsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPerpetualsLiquidityPoolsRequest>
  ): QueryAllPerpetualsLiquidityPoolsRequest {
    const message = {
      ...baseQueryAllPerpetualsLiquidityPoolsRequest,
    } as QueryAllPerpetualsLiquidityPoolsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllPerpetualsLiquidityPoolsResponse: object = {};

export const QueryAllPerpetualsLiquidityPoolsResponse = {
  encode(
    message: QueryAllPerpetualsLiquidityPoolsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.perpetualsLiquidityPools) {
      PerpetualsLiquidityPoolDetails.encode(
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
  ): QueryAllPerpetualsLiquidityPoolsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPerpetualsLiquidityPoolsResponse,
    } as QueryAllPerpetualsLiquidityPoolsResponse;
    message.perpetualsLiquidityPools = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.perpetualsLiquidityPools.push(
            PerpetualsLiquidityPoolDetails.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllPerpetualsLiquidityPoolsResponse {
    const message = {
      ...baseQueryAllPerpetualsLiquidityPoolsResponse,
    } as QueryAllPerpetualsLiquidityPoolsResponse;
    message.perpetualsLiquidityPools = (
      object.perpetualsLiquidityPools ?? []
    ).map((e: any) => PerpetualsLiquidityPoolDetails.fromJSON(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllPerpetualsLiquidityPoolsResponse): unknown {
    const obj: any = {};
    if (message.perpetualsLiquidityPools) {
      obj.perpetualsLiquidityPools = message.perpetualsLiquidityPools.map((e) =>
        e ? PerpetualsLiquidityPoolDetails.toJSON(e) : undefined
      );
    } else {
      obj.perpetualsLiquidityPools = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPerpetualsLiquidityPoolsResponse>
  ): QueryAllPerpetualsLiquidityPoolsResponse {
    const message = {
      ...baseQueryAllPerpetualsLiquidityPoolsResponse,
    } as QueryAllPerpetualsLiquidityPoolsResponse;
    message.perpetualsLiquidityPools = (
      object.perpetualsLiquidityPools ?? []
    ).map((e) => PerpetualsLiquidityPoolDetails.fromPartial(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryPerpetualsLiquidityPoolMappingsRequest: object = {};

export const QueryPerpetualsLiquidityPoolMappingsRequest = {
  encode(
    message: QueryPerpetualsLiquidityPoolMappingsRequest,
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
  ): QueryPerpetualsLiquidityPoolMappingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryPerpetualsLiquidityPoolMappingsRequest,
    } as QueryPerpetualsLiquidityPoolMappingsRequest;
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

  fromJSON(object: any): QueryPerpetualsLiquidityPoolMappingsRequest {
    const message = {
      ...baseQueryPerpetualsLiquidityPoolMappingsRequest,
    } as QueryPerpetualsLiquidityPoolMappingsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryPerpetualsLiquidityPoolMappingsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPerpetualsLiquidityPoolMappingsRequest>
  ): QueryPerpetualsLiquidityPoolMappingsRequest {
    const message = {
      ...baseQueryPerpetualsLiquidityPoolMappingsRequest,
    } as QueryPerpetualsLiquidityPoolMappingsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryPerpetualsLiquidityPoolMappingsResponse: object = {};

export const QueryPerpetualsLiquidityPoolMappingsResponse = {
  encode(
    message: QueryPerpetualsLiquidityPoolMappingsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.perpetualsLiquidityPoolMappings).forEach(
      ([key, value]) => {
        QueryPerpetualsLiquidityPoolMappingsResponse_PerpetualsLiquidityPoolMappingsEntry.encode(
          { key: key as any, value },
          writer.uint32(10).fork()
        ).ldelim();
      }
    );
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
  ): QueryPerpetualsLiquidityPoolMappingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryPerpetualsLiquidityPoolMappingsResponse,
    } as QueryPerpetualsLiquidityPoolMappingsResponse;
    message.perpetualsLiquidityPoolMappings = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 =
            QueryPerpetualsLiquidityPoolMappingsResponse_PerpetualsLiquidityPoolMappingsEntry.decode(
              reader,
              reader.uint32()
            );
          if (entry1.value !== undefined) {
            message.perpetualsLiquidityPoolMappings[entry1.key] = entry1.value;
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

  fromJSON(object: any): QueryPerpetualsLiquidityPoolMappingsResponse {
    const message = {
      ...baseQueryPerpetualsLiquidityPoolMappingsResponse,
    } as QueryPerpetualsLiquidityPoolMappingsResponse;
    message.perpetualsLiquidityPoolMappings = Object.entries(
      object.perpetualsLiquidityPoolMappings ?? {}
    ).reduce<{ [key: string]: Long }>((acc, [key, value]) => {
      acc[key] = Long.fromString(value as string);
      return acc;
    }, {});
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryPerpetualsLiquidityPoolMappingsResponse): unknown {
    const obj: any = {};
    obj.perpetualsLiquidityPoolMappings = {};
    if (message.perpetualsLiquidityPoolMappings) {
      Object.entries(message.perpetualsLiquidityPoolMappings).forEach(
        ([k, v]) => {
          obj.perpetualsLiquidityPoolMappings[k] = v.toString();
        }
      );
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPerpetualsLiquidityPoolMappingsResponse>
  ): QueryPerpetualsLiquidityPoolMappingsResponse {
    const message = {
      ...baseQueryPerpetualsLiquidityPoolMappingsResponse,
    } as QueryPerpetualsLiquidityPoolMappingsResponse;
    message.perpetualsLiquidityPoolMappings = Object.entries(
      object.perpetualsLiquidityPoolMappings ?? {}
    ).reduce<{ [key: string]: Long }>((acc, [key, value]) => {
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

const baseQueryPerpetualsLiquidityPoolMappingsResponse_PerpetualsLiquidityPoolMappingsEntry: object =
  { key: "", value: Long.UZERO };

export const QueryPerpetualsLiquidityPoolMappingsResponse_PerpetualsLiquidityPoolMappingsEntry =
  {
    encode(
      message: QueryPerpetualsLiquidityPoolMappingsResponse_PerpetualsLiquidityPoolMappingsEntry,
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
    ): QueryPerpetualsLiquidityPoolMappingsResponse_PerpetualsLiquidityPoolMappingsEntry {
      const reader =
        input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = {
        ...baseQueryPerpetualsLiquidityPoolMappingsResponse_PerpetualsLiquidityPoolMappingsEntry,
      } as QueryPerpetualsLiquidityPoolMappingsResponse_PerpetualsLiquidityPoolMappingsEntry;
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

    fromJSON(
      object: any
    ): QueryPerpetualsLiquidityPoolMappingsResponse_PerpetualsLiquidityPoolMappingsEntry {
      const message = {
        ...baseQueryPerpetualsLiquidityPoolMappingsResponse_PerpetualsLiquidityPoolMappingsEntry,
      } as QueryPerpetualsLiquidityPoolMappingsResponse_PerpetualsLiquidityPoolMappingsEntry;
      message.key =
        object.key !== undefined && object.key !== null
          ? String(object.key)
          : "";
      message.value =
        object.value !== undefined && object.value !== null
          ? Long.fromString(object.value)
          : Long.UZERO;
      return message;
    },

    toJSON(
      message: QueryPerpetualsLiquidityPoolMappingsResponse_PerpetualsLiquidityPoolMappingsEntry
    ): unknown {
      const obj: any = {};
      message.key !== undefined && (obj.key = message.key);
      message.value !== undefined &&
        (obj.value = (message.value || Long.UZERO).toString());
      return obj;
    },

    fromPartial(
      object: DeepPartial<QueryPerpetualsLiquidityPoolMappingsResponse_PerpetualsLiquidityPoolMappingsEntry>
    ): QueryPerpetualsLiquidityPoolMappingsResponse_PerpetualsLiquidityPoolMappingsEntry {
      const message = {
        ...baseQueryPerpetualsLiquidityPoolMappingsResponse_PerpetualsLiquidityPoolMappingsEntry,
      } as QueryPerpetualsLiquidityPoolMappingsResponse_PerpetualsLiquidityPoolMappingsEntry;
      message.key = object.key ?? "";
      message.value =
        object.value !== undefined && object.value !== null
          ? Long.fromValue(object.value)
          : Long.UZERO;
      return message;
    },
  };

const baseQueryAllPlpPoolAddressRequest: object = {};

export const QueryAllPlpPoolAddressRequest = {
  encode(
    message: QueryAllPlpPoolAddressRequest,
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
  ): QueryAllPlpPoolAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPlpPoolAddressRequest,
    } as QueryAllPlpPoolAddressRequest;
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

  fromJSON(object: any): QueryAllPlpPoolAddressRequest {
    const message = {
      ...baseQueryAllPlpPoolAddressRequest,
    } as QueryAllPlpPoolAddressRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllPlpPoolAddressRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPlpPoolAddressRequest>
  ): QueryAllPlpPoolAddressRequest {
    const message = {
      ...baseQueryAllPlpPoolAddressRequest,
    } as QueryAllPlpPoolAddressRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllPlpPoolAddressResponse: object = {};

export const QueryAllPlpPoolAddressResponse = {
  encode(
    message: QueryAllPlpPoolAddressResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.addresses).forEach(([key, value]) => {
      QueryAllPlpPoolAddressResponse_AddressesEntry.encode(
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
  ): QueryAllPlpPoolAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPlpPoolAddressResponse,
    } as QueryAllPlpPoolAddressResponse;
    message.addresses = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = QueryAllPlpPoolAddressResponse_AddressesEntry.decode(
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

  fromJSON(object: any): QueryAllPlpPoolAddressResponse {
    const message = {
      ...baseQueryAllPlpPoolAddressResponse,
    } as QueryAllPlpPoolAddressResponse;
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

  toJSON(message: QueryAllPlpPoolAddressResponse): unknown {
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
    object: DeepPartial<QueryAllPlpPoolAddressResponse>
  ): QueryAllPlpPoolAddressResponse {
    const message = {
      ...baseQueryAllPlpPoolAddressResponse,
    } as QueryAllPlpPoolAddressResponse;
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

const baseQueryAllPlpPoolAddressResponse_AddressesEntry: object = {
  key: "",
  value: "",
};

export const QueryAllPlpPoolAddressResponse_AddressesEntry = {
  encode(
    message: QueryAllPlpPoolAddressResponse_AddressesEntry,
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
  ): QueryAllPlpPoolAddressResponse_AddressesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPlpPoolAddressResponse_AddressesEntry,
    } as QueryAllPlpPoolAddressResponse_AddressesEntry;
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

  fromJSON(object: any): QueryAllPlpPoolAddressResponse_AddressesEntry {
    const message = {
      ...baseQueryAllPlpPoolAddressResponse_AddressesEntry,
    } as QueryAllPlpPoolAddressResponse_AddressesEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: QueryAllPlpPoolAddressResponse_AddressesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPlpPoolAddressResponse_AddressesEntry>
  ): QueryAllPlpPoolAddressResponse_AddressesEntry {
    const message = {
      ...baseQueryAllPlpPoolAddressResponse_AddressesEntry,
    } as QueryAllPlpPoolAddressResponse_AddressesEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Get PerpetualsLiquidityPool details for a particular id */
  PerpetualsLiquidityPool(
    request: QueryGetPerpetualsLiquidityPoolRequest
  ): Promise<QueryGetPerpetualsLiquidityPoolResponse>;
  /** Get all PerpetualsLiquidityPool details */
  PerpetualsLiquidityPoolAll(
    request: QueryAllPerpetualsLiquidityPoolsRequest
  ): Promise<QueryAllPerpetualsLiquidityPoolsResponse>;
  /** Get denom => perpetuals_liquidity_pool_id mappings */
  PerpetualsLiquidityPoolMappings(
    request: QueryPerpetualsLiquidityPoolMappingsRequest
  ): Promise<QueryPerpetualsLiquidityPoolMappingsResponse>;
  /** Get addresses for all plp pools */
  PlpPoolAddressAll(
    request: QueryAllPlpPoolAddressRequest
  ): Promise<QueryAllPlpPoolAddressResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.PerpetualsLiquidityPool = this.PerpetualsLiquidityPool.bind(this);
    this.PerpetualsLiquidityPoolAll =
      this.PerpetualsLiquidityPoolAll.bind(this);
    this.PerpetualsLiquidityPoolMappings =
      this.PerpetualsLiquidityPoolMappings.bind(this);
    this.PlpPoolAddressAll = this.PlpPoolAddressAll.bind(this);
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

  PerpetualsLiquidityPool(
    request: QueryGetPerpetualsLiquidityPoolRequest
  ): Promise<QueryGetPerpetualsLiquidityPoolResponse> {
    const data =
      QueryGetPerpetualsLiquidityPoolRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpsliquidity.Query",
      "PerpetualsLiquidityPool",
      data
    );
    return promise.then((data) =>
      QueryGetPerpetualsLiquidityPoolResponse.decode(new _m0.Reader(data))
    );
  }

  PerpetualsLiquidityPoolAll(
    request: QueryAllPerpetualsLiquidityPoolsRequest
  ): Promise<QueryAllPerpetualsLiquidityPoolsResponse> {
    const data =
      QueryAllPerpetualsLiquidityPoolsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpsliquidity.Query",
      "PerpetualsLiquidityPoolAll",
      data
    );
    return promise.then((data) =>
      QueryAllPerpetualsLiquidityPoolsResponse.decode(new _m0.Reader(data))
    );
  }

  PerpetualsLiquidityPoolMappings(
    request: QueryPerpetualsLiquidityPoolMappingsRequest
  ): Promise<QueryPerpetualsLiquidityPoolMappingsResponse> {
    const data =
      QueryPerpetualsLiquidityPoolMappingsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpsliquidity.Query",
      "PerpetualsLiquidityPoolMappings",
      data
    );
    return promise.then((data) =>
      QueryPerpetualsLiquidityPoolMappingsResponse.decode(new _m0.Reader(data))
    );
  }

  PlpPoolAddressAll(
    request: QueryAllPlpPoolAddressRequest
  ): Promise<QueryAllPlpPoolAddressResponse> {
    const data = QueryAllPlpPoolAddressRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.perpsliquidity.Query",
      "PlpPoolAddressAll",
      data
    );
    return promise.then((data) =>
      QueryAllPlpPoolAddressResponse.decode(new _m0.Reader(data))
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
