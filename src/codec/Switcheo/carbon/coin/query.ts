/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { BoolValue } from "../../../google/protobuf/wrappers";
import { Bridge } from "./bridge";
import { TokenGroupDetails } from "./group";
import { LockedCoins, Token, TokenBalance } from "./token";

export const protobufPackage = "Switcheo.carbon.coin";

/** this line is used by starport scaffolding # 3 */
export interface QueryGetTokenRequest {
  denom: string;
}

export interface QueryGetTokenResponse {
  token?: Token;
}

export interface QueryAllTokenRequest {
  pagination?: PageRequest;
  isActive?: boolean;
}

export interface QueryAllTokenResponse {
  tokens: Token[];
  pagination?: PageResponse;
}

export interface QueryGetLockedCoinsRequest {
  address: string;
  pagination?: PageRequest;
}

export interface QueryGetLockedCoinsResponse {
  lockedCoins: LockedCoins[];
  pagination?: PageResponse;
}

export interface QueryAllWrapperMappingsRequest {
  pagination?: PageRequest;
}

export interface QueryAllWrapperMappingsResponse {
  wrapperMappings: { [key: string]: string };
  pagination?: PageResponse;
}

export interface QueryAllWrapperMappingsResponse_WrapperMappingsEntry {
  key: string;
  value: string;
}

export interface QueryGetBalancesRequest {
  address: string;
}

export interface QueryGetBalancesResponse {
  tokenBalances: TokenBalance[];
}

export interface QueryTotalBalancesRequest {
  endBlockHeight: string;
}

export interface QueryTotalBalancesResponse {
  balances: TokenBalance[];
}

export interface QueryGetBridgeRequest {
  bridgeId: Long;
  chainId: Long;
}

export interface QueryGetBridgeResponse {
  bridge?: Bridge;
}

export interface QueryAllBridgeRequest {
  pagination?: PageRequest;
}

export interface QueryAllBridgeResponse {
  bridges: Bridge[];
  pagination?: PageResponse;
}

export interface QueryGetTokenGroupRequest {
  groupId: string;
}

export interface QueryGetTokenGroupResponse {
  tokenGroup?: TokenGroupDetails;
}

export interface QueryAllTokenGroupsRequest {
  pagination?: PageRequest;
}

export interface QueryAllTokenGroupsResponse {
  tokenGroups: TokenGroupDetails[];
  pagination?: PageResponse;
}

export interface QueryTokenGroupMappingsRequest {
  pagination?: PageRequest;
}

export interface QueryTokenGroupMappingsResponse {
  tokenGroupMappings: { [key: string]: Long };
  pagination?: PageResponse;
}

export interface QueryTokenGroupMappingsResponse_TokenGroupMappingsEntry {
  key: string;
  value: Long;
}

function createBaseQueryGetTokenRequest(): QueryGetTokenRequest {
  return { denom: "" };
}

export const QueryGetTokenRequest = {
  encode(message: QueryGetTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTokenRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTokenRequest();
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

  fromJSON(object: any): QueryGetTokenRequest {
    return { denom: isSet(object.denom) ? String(object.denom) : "" };
  },

  toJSON(message: QueryGetTokenRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<QueryGetTokenRequest>): QueryGetTokenRequest {
    return QueryGetTokenRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetTokenRequest>): QueryGetTokenRequest {
    const message = createBaseQueryGetTokenRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryGetTokenResponse(): QueryGetTokenResponse {
  return { token: undefined };
}

export const QueryGetTokenResponse = {
  encode(message: QueryGetTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== undefined) {
      Token.encode(message.token, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTokenResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = Token.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetTokenResponse {
    return { token: isSet(object.token) ? Token.fromJSON(object.token) : undefined };
  },

  toJSON(message: QueryGetTokenResponse): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token ? Token.toJSON(message.token) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryGetTokenResponse>): QueryGetTokenResponse {
    return QueryGetTokenResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetTokenResponse>): QueryGetTokenResponse {
    const message = createBaseQueryGetTokenResponse();
    message.token = (object.token !== undefined && object.token !== null) ? Token.fromPartial(object.token) : undefined;
    return message;
  },
};

function createBaseQueryAllTokenRequest(): QueryAllTokenRequest {
  return { pagination: undefined, isActive: undefined };
}

export const QueryAllTokenRequest = {
  encode(message: QueryAllTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.isActive !== undefined) {
      BoolValue.encode({ value: message.isActive! }, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTokenRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTokenRequest();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllTokenRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : undefined,
    };
  },

  toJSON(message: QueryAllTokenRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.isActive !== undefined && (obj.isActive = message.isActive);
    return obj;
  },

  create(base?: DeepPartial<QueryAllTokenRequest>): QueryAllTokenRequest {
    return QueryAllTokenRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllTokenRequest>): QueryAllTokenRequest {
    const message = createBaseQueryAllTokenRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    message.isActive = object.isActive ?? undefined;
    return message;
  },
};

function createBaseQueryAllTokenResponse(): QueryAllTokenResponse {
  return { tokens: [], pagination: undefined };
}

export const QueryAllTokenResponse = {
  encode(message: QueryAllTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tokens) {
      Token.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTokenResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tokens.push(Token.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllTokenResponse {
    return {
      tokens: Array.isArray(object?.tokens) ? object.tokens.map((e: any) => Token.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllTokenResponse): unknown {
    const obj: any = {};
    if (message.tokens) {
      obj.tokens = message.tokens.map((e) => e ? Token.toJSON(e) : undefined);
    } else {
      obj.tokens = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllTokenResponse>): QueryAllTokenResponse {
    return QueryAllTokenResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllTokenResponse>): QueryAllTokenResponse {
    const message = createBaseQueryAllTokenResponse();
    message.tokens = object.tokens?.map((e) => Token.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetLockedCoinsRequest(): QueryGetLockedCoinsRequest {
  return { address: "", pagination: undefined };
}

export const QueryGetLockedCoinsRequest = {
  encode(message: QueryGetLockedCoinsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLockedCoinsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLockedCoinsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
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

  fromJSON(object: any): QueryGetLockedCoinsRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryGetLockedCoinsRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryGetLockedCoinsRequest>): QueryGetLockedCoinsRequest {
    return QueryGetLockedCoinsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetLockedCoinsRequest>): QueryGetLockedCoinsRequest {
    const message = createBaseQueryGetLockedCoinsRequest();
    message.address = object.address ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetLockedCoinsResponse(): QueryGetLockedCoinsResponse {
  return { lockedCoins: [], pagination: undefined };
}

export const QueryGetLockedCoinsResponse = {
  encode(message: QueryGetLockedCoinsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.lockedCoins) {
      LockedCoins.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLockedCoinsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLockedCoinsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lockedCoins.push(LockedCoins.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryGetLockedCoinsResponse {
    return {
      lockedCoins: Array.isArray(object?.lockedCoins)
        ? object.lockedCoins.map((e: any) => LockedCoins.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryGetLockedCoinsResponse): unknown {
    const obj: any = {};
    if (message.lockedCoins) {
      obj.lockedCoins = message.lockedCoins.map((e) => e ? LockedCoins.toJSON(e) : undefined);
    } else {
      obj.lockedCoins = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryGetLockedCoinsResponse>): QueryGetLockedCoinsResponse {
    return QueryGetLockedCoinsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetLockedCoinsResponse>): QueryGetLockedCoinsResponse {
    const message = createBaseQueryGetLockedCoinsResponse();
    message.lockedCoins = object.lockedCoins?.map((e) => LockedCoins.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllWrapperMappingsRequest(): QueryAllWrapperMappingsRequest {
  return { pagination: undefined };
}

export const QueryAllWrapperMappingsRequest = {
  encode(message: QueryAllWrapperMappingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllWrapperMappingsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWrapperMappingsRequest();
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

  fromJSON(object: any): QueryAllWrapperMappingsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllWrapperMappingsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllWrapperMappingsRequest>): QueryAllWrapperMappingsRequest {
    return QueryAllWrapperMappingsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllWrapperMappingsRequest>): QueryAllWrapperMappingsRequest {
    const message = createBaseQueryAllWrapperMappingsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllWrapperMappingsResponse(): QueryAllWrapperMappingsResponse {
  return { wrapperMappings: {}, pagination: undefined };
}

export const QueryAllWrapperMappingsResponse = {
  encode(message: QueryAllWrapperMappingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.wrapperMappings).forEach(([key, value]) => {
      QueryAllWrapperMappingsResponse_WrapperMappingsEntry.encode({ key: key as any, value }, writer.uint32(10).fork())
        .ldelim();
    });
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllWrapperMappingsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWrapperMappingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = QueryAllWrapperMappingsResponse_WrapperMappingsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.wrapperMappings[entry1.key] = entry1.value;
          }
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

  fromJSON(object: any): QueryAllWrapperMappingsResponse {
    return {
      wrapperMappings: isObject(object.wrapperMappings)
        ? Object.entries(object.wrapperMappings).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllWrapperMappingsResponse): unknown {
    const obj: any = {};
    obj.wrapperMappings = {};
    if (message.wrapperMappings) {
      Object.entries(message.wrapperMappings).forEach(([k, v]) => {
        obj.wrapperMappings[k] = v;
      });
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllWrapperMappingsResponse>): QueryAllWrapperMappingsResponse {
    return QueryAllWrapperMappingsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllWrapperMappingsResponse>): QueryAllWrapperMappingsResponse {
    const message = createBaseQueryAllWrapperMappingsResponse();
    message.wrapperMappings = Object.entries(object.wrapperMappings ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = String(value);
        }
        return acc;
      },
      {},
    );
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllWrapperMappingsResponse_WrapperMappingsEntry(): QueryAllWrapperMappingsResponse_WrapperMappingsEntry {
  return { key: "", value: "" };
}

export const QueryAllWrapperMappingsResponse_WrapperMappingsEntry = {
  encode(
    message: QueryAllWrapperMappingsResponse_WrapperMappingsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllWrapperMappingsResponse_WrapperMappingsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWrapperMappingsResponse_WrapperMappingsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllWrapperMappingsResponse_WrapperMappingsEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: QueryAllWrapperMappingsResponse_WrapperMappingsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create(
    base?: DeepPartial<QueryAllWrapperMappingsResponse_WrapperMappingsEntry>,
  ): QueryAllWrapperMappingsResponse_WrapperMappingsEntry {
    return QueryAllWrapperMappingsResponse_WrapperMappingsEntry.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<QueryAllWrapperMappingsResponse_WrapperMappingsEntry>,
  ): QueryAllWrapperMappingsResponse_WrapperMappingsEntry {
    const message = createBaseQueryAllWrapperMappingsResponse_WrapperMappingsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseQueryGetBalancesRequest(): QueryGetBalancesRequest {
  return { address: "" };
}

export const QueryGetBalancesRequest = {
  encode(message: QueryGetBalancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBalancesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBalancesRequest();
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

  fromJSON(object: any): QueryGetBalancesRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryGetBalancesRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<QueryGetBalancesRequest>): QueryGetBalancesRequest {
    return QueryGetBalancesRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetBalancesRequest>): QueryGetBalancesRequest {
    const message = createBaseQueryGetBalancesRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryGetBalancesResponse(): QueryGetBalancesResponse {
  return { tokenBalances: [] };
}

export const QueryGetBalancesResponse = {
  encode(message: QueryGetBalancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tokenBalances) {
      TokenBalance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBalancesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBalancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tokenBalances.push(TokenBalance.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetBalancesResponse {
    return {
      tokenBalances: Array.isArray(object?.tokenBalances)
        ? object.tokenBalances.map((e: any) => TokenBalance.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryGetBalancesResponse): unknown {
    const obj: any = {};
    if (message.tokenBalances) {
      obj.tokenBalances = message.tokenBalances.map((e) => e ? TokenBalance.toJSON(e) : undefined);
    } else {
      obj.tokenBalances = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryGetBalancesResponse>): QueryGetBalancesResponse {
    return QueryGetBalancesResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetBalancesResponse>): QueryGetBalancesResponse {
    const message = createBaseQueryGetBalancesResponse();
    message.tokenBalances = object.tokenBalances?.map((e) => TokenBalance.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryTotalBalancesRequest(): QueryTotalBalancesRequest {
  return { endBlockHeight: "" };
}

export const QueryTotalBalancesRequest = {
  encode(message: QueryTotalBalancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.endBlockHeight !== "") {
      writer.uint32(10).string(message.endBlockHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalBalancesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalBalancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.endBlockHeight = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTotalBalancesRequest {
    return { endBlockHeight: isSet(object.endBlockHeight) ? String(object.endBlockHeight) : "" };
  },

  toJSON(message: QueryTotalBalancesRequest): unknown {
    const obj: any = {};
    message.endBlockHeight !== undefined && (obj.endBlockHeight = message.endBlockHeight);
    return obj;
  },

  create(base?: DeepPartial<QueryTotalBalancesRequest>): QueryTotalBalancesRequest {
    return QueryTotalBalancesRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryTotalBalancesRequest>): QueryTotalBalancesRequest {
    const message = createBaseQueryTotalBalancesRequest();
    message.endBlockHeight = object.endBlockHeight ?? "";
    return message;
  },
};

function createBaseQueryTotalBalancesResponse(): QueryTotalBalancesResponse {
  return { balances: [] };
}

export const QueryTotalBalancesResponse = {
  encode(message: QueryTotalBalancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.balances) {
      TokenBalance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalBalancesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalBalancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.balances.push(TokenBalance.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTotalBalancesResponse {
    return {
      balances: Array.isArray(object?.balances) ? object.balances.map((e: any) => TokenBalance.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryTotalBalancesResponse): unknown {
    const obj: any = {};
    if (message.balances) {
      obj.balances = message.balances.map((e) => e ? TokenBalance.toJSON(e) : undefined);
    } else {
      obj.balances = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryTotalBalancesResponse>): QueryTotalBalancesResponse {
    return QueryTotalBalancesResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryTotalBalancesResponse>): QueryTotalBalancesResponse {
    const message = createBaseQueryTotalBalancesResponse();
    message.balances = object.balances?.map((e) => TokenBalance.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryGetBridgeRequest(): QueryGetBridgeRequest {
  return { bridgeId: Long.UZERO, chainId: Long.UZERO };
}

export const QueryGetBridgeRequest = {
  encode(message: QueryGetBridgeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.bridgeId.isZero()) {
      writer.uint32(8).uint64(message.bridgeId);
    }
    if (!message.chainId.isZero()) {
      writer.uint32(16).uint64(message.chainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBridgeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBridgeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bridgeId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.chainId = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetBridgeRequest {
    return {
      bridgeId: isSet(object.bridgeId) ? Long.fromValue(object.bridgeId) : Long.UZERO,
      chainId: isSet(object.chainId) ? Long.fromValue(object.chainId) : Long.UZERO,
    };
  },

  toJSON(message: QueryGetBridgeRequest): unknown {
    const obj: any = {};
    message.bridgeId !== undefined && (obj.bridgeId = (message.bridgeId || Long.UZERO).toString());
    message.chainId !== undefined && (obj.chainId = (message.chainId || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<QueryGetBridgeRequest>): QueryGetBridgeRequest {
    return QueryGetBridgeRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetBridgeRequest>): QueryGetBridgeRequest {
    const message = createBaseQueryGetBridgeRequest();
    message.bridgeId = (object.bridgeId !== undefined && object.bridgeId !== null)
      ? Long.fromValue(object.bridgeId)
      : Long.UZERO;
    message.chainId = (object.chainId !== undefined && object.chainId !== null)
      ? Long.fromValue(object.chainId)
      : Long.UZERO;
    return message;
  },
};

function createBaseQueryGetBridgeResponse(): QueryGetBridgeResponse {
  return { bridge: undefined };
}

export const QueryGetBridgeResponse = {
  encode(message: QueryGetBridgeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bridge !== undefined) {
      Bridge.encode(message.bridge, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBridgeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBridgeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bridge = Bridge.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetBridgeResponse {
    return { bridge: isSet(object.bridge) ? Bridge.fromJSON(object.bridge) : undefined };
  },

  toJSON(message: QueryGetBridgeResponse): unknown {
    const obj: any = {};
    message.bridge !== undefined && (obj.bridge = message.bridge ? Bridge.toJSON(message.bridge) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryGetBridgeResponse>): QueryGetBridgeResponse {
    return QueryGetBridgeResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetBridgeResponse>): QueryGetBridgeResponse {
    const message = createBaseQueryGetBridgeResponse();
    message.bridge = (object.bridge !== undefined && object.bridge !== null)
      ? Bridge.fromPartial(object.bridge)
      : undefined;
    return message;
  },
};

function createBaseQueryAllBridgeRequest(): QueryAllBridgeRequest {
  return { pagination: undefined };
}

export const QueryAllBridgeRequest = {
  encode(message: QueryAllBridgeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBridgeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBridgeRequest();
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

  fromJSON(object: any): QueryAllBridgeRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllBridgeRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllBridgeRequest>): QueryAllBridgeRequest {
    return QueryAllBridgeRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllBridgeRequest>): QueryAllBridgeRequest {
    const message = createBaseQueryAllBridgeRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllBridgeResponse(): QueryAllBridgeResponse {
  return { bridges: [], pagination: undefined };
}

export const QueryAllBridgeResponse = {
  encode(message: QueryAllBridgeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.bridges) {
      Bridge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBridgeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBridgeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bridges.push(Bridge.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllBridgeResponse {
    return {
      bridges: Array.isArray(object?.bridges) ? object.bridges.map((e: any) => Bridge.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllBridgeResponse): unknown {
    const obj: any = {};
    if (message.bridges) {
      obj.bridges = message.bridges.map((e) => e ? Bridge.toJSON(e) : undefined);
    } else {
      obj.bridges = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllBridgeResponse>): QueryAllBridgeResponse {
    return QueryAllBridgeResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllBridgeResponse>): QueryAllBridgeResponse {
    const message = createBaseQueryAllBridgeResponse();
    message.bridges = object.bridges?.map((e) => Bridge.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetTokenGroupRequest(): QueryGetTokenGroupRequest {
  return { groupId: "" };
}

export const QueryGetTokenGroupRequest = {
  encode(message: QueryGetTokenGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== "") {
      writer.uint32(10).string(message.groupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTokenGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTokenGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groupId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetTokenGroupRequest {
    return { groupId: isSet(object.groupId) ? String(object.groupId) : "" };
  },

  toJSON(message: QueryGetTokenGroupRequest): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = message.groupId);
    return obj;
  },

  create(base?: DeepPartial<QueryGetTokenGroupRequest>): QueryGetTokenGroupRequest {
    return QueryGetTokenGroupRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetTokenGroupRequest>): QueryGetTokenGroupRequest {
    const message = createBaseQueryGetTokenGroupRequest();
    message.groupId = object.groupId ?? "";
    return message;
  },
};

function createBaseQueryGetTokenGroupResponse(): QueryGetTokenGroupResponse {
  return { tokenGroup: undefined };
}

export const QueryGetTokenGroupResponse = {
  encode(message: QueryGetTokenGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenGroup !== undefined) {
      TokenGroupDetails.encode(message.tokenGroup, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTokenGroupResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTokenGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tokenGroup = TokenGroupDetails.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetTokenGroupResponse {
    return { tokenGroup: isSet(object.tokenGroup) ? TokenGroupDetails.fromJSON(object.tokenGroup) : undefined };
  },

  toJSON(message: QueryGetTokenGroupResponse): unknown {
    const obj: any = {};
    message.tokenGroup !== undefined &&
      (obj.tokenGroup = message.tokenGroup ? TokenGroupDetails.toJSON(message.tokenGroup) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryGetTokenGroupResponse>): QueryGetTokenGroupResponse {
    return QueryGetTokenGroupResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetTokenGroupResponse>): QueryGetTokenGroupResponse {
    const message = createBaseQueryGetTokenGroupResponse();
    message.tokenGroup = (object.tokenGroup !== undefined && object.tokenGroup !== null)
      ? TokenGroupDetails.fromPartial(object.tokenGroup)
      : undefined;
    return message;
  },
};

function createBaseQueryAllTokenGroupsRequest(): QueryAllTokenGroupsRequest {
  return { pagination: undefined };
}

export const QueryAllTokenGroupsRequest = {
  encode(message: QueryAllTokenGroupsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTokenGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTokenGroupsRequest();
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

  fromJSON(object: any): QueryAllTokenGroupsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllTokenGroupsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllTokenGroupsRequest>): QueryAllTokenGroupsRequest {
    return QueryAllTokenGroupsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllTokenGroupsRequest>): QueryAllTokenGroupsRequest {
    const message = createBaseQueryAllTokenGroupsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllTokenGroupsResponse(): QueryAllTokenGroupsResponse {
  return { tokenGroups: [], pagination: undefined };
}

export const QueryAllTokenGroupsResponse = {
  encode(message: QueryAllTokenGroupsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tokenGroups) {
      TokenGroupDetails.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTokenGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTokenGroupsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tokenGroups.push(TokenGroupDetails.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllTokenGroupsResponse {
    return {
      tokenGroups: Array.isArray(object?.tokenGroups)
        ? object.tokenGroups.map((e: any) => TokenGroupDetails.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllTokenGroupsResponse): unknown {
    const obj: any = {};
    if (message.tokenGroups) {
      obj.tokenGroups = message.tokenGroups.map((e) => e ? TokenGroupDetails.toJSON(e) : undefined);
    } else {
      obj.tokenGroups = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllTokenGroupsResponse>): QueryAllTokenGroupsResponse {
    return QueryAllTokenGroupsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllTokenGroupsResponse>): QueryAllTokenGroupsResponse {
    const message = createBaseQueryAllTokenGroupsResponse();
    message.tokenGroups = object.tokenGroups?.map((e) => TokenGroupDetails.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryTokenGroupMappingsRequest(): QueryTokenGroupMappingsRequest {
  return { pagination: undefined };
}

export const QueryTokenGroupMappingsRequest = {
  encode(message: QueryTokenGroupMappingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenGroupMappingsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenGroupMappingsRequest();
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

  fromJSON(object: any): QueryTokenGroupMappingsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryTokenGroupMappingsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryTokenGroupMappingsRequest>): QueryTokenGroupMappingsRequest {
    return QueryTokenGroupMappingsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryTokenGroupMappingsRequest>): QueryTokenGroupMappingsRequest {
    const message = createBaseQueryTokenGroupMappingsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryTokenGroupMappingsResponse(): QueryTokenGroupMappingsResponse {
  return { tokenGroupMappings: {}, pagination: undefined };
}

export const QueryTokenGroupMappingsResponse = {
  encode(message: QueryTokenGroupMappingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.tokenGroupMappings).forEach(([key, value]) => {
      QueryTokenGroupMappingsResponse_TokenGroupMappingsEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork(),
      ).ldelim();
    });
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenGroupMappingsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenGroupMappingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = QueryTokenGroupMappingsResponse_TokenGroupMappingsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.tokenGroupMappings[entry1.key] = entry1.value;
          }
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

  fromJSON(object: any): QueryTokenGroupMappingsResponse {
    return {
      tokenGroupMappings: isObject(object.tokenGroupMappings)
        ? Object.entries(object.tokenGroupMappings).reduce<{ [key: string]: Long }>((acc, [key, value]) => {
          acc[key] = Long.fromValue(value as Long | string);
          return acc;
        }, {})
        : {},
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryTokenGroupMappingsResponse): unknown {
    const obj: any = {};
    obj.tokenGroupMappings = {};
    if (message.tokenGroupMappings) {
      Object.entries(message.tokenGroupMappings).forEach(([k, v]) => {
        obj.tokenGroupMappings[k] = v.toString();
      });
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryTokenGroupMappingsResponse>): QueryTokenGroupMappingsResponse {
    return QueryTokenGroupMappingsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryTokenGroupMappingsResponse>): QueryTokenGroupMappingsResponse {
    const message = createBaseQueryTokenGroupMappingsResponse();
    message.tokenGroupMappings = Object.entries(object.tokenGroupMappings ?? {}).reduce<{ [key: string]: Long }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = Long.fromValue(value);
        }
        return acc;
      },
      {},
    );
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryTokenGroupMappingsResponse_TokenGroupMappingsEntry(): QueryTokenGroupMappingsResponse_TokenGroupMappingsEntry {
  return { key: "", value: Long.UZERO };
}

export const QueryTokenGroupMappingsResponse_TokenGroupMappingsEntry = {
  encode(
    message: QueryTokenGroupMappingsResponse_TokenGroupMappingsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (!message.value.isZero()) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenGroupMappingsResponse_TokenGroupMappingsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenGroupMappingsResponse_TokenGroupMappingsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTokenGroupMappingsResponse_TokenGroupMappingsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.UZERO,
    };
  },

  toJSON(message: QueryTokenGroupMappingsResponse_TokenGroupMappingsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = (message.value || Long.UZERO).toString());
    return obj;
  },

  create(
    base?: DeepPartial<QueryTokenGroupMappingsResponse_TokenGroupMappingsEntry>,
  ): QueryTokenGroupMappingsResponse_TokenGroupMappingsEntry {
    return QueryTokenGroupMappingsResponse_TokenGroupMappingsEntry.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<QueryTokenGroupMappingsResponse_TokenGroupMappingsEntry>,
  ): QueryTokenGroupMappingsResponse_TokenGroupMappingsEntry {
    const message = createBaseQueryTokenGroupMappingsResponse_TokenGroupMappingsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null) ? Long.fromValue(object.value) : Long.UZERO;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Get token details for a denom */
  Token(request: QueryGetTokenRequest): Promise<QueryGetTokenResponse>;
  /** Get all token details */
  TokenAll(request: QueryAllTokenRequest): Promise<QueryAllTokenResponse>;
  /** Get locked coins for an address */
  LockedCoins(request: QueryGetLockedCoinsRequest): Promise<QueryGetLockedCoinsResponse>;
  /** Get wrapper mappings for wrapped tokens */
  WrapperMappings(request: QueryAllWrapperMappingsRequest): Promise<QueryAllWrapperMappingsResponse>;
  /** Get balances for an address */
  Balances(request: QueryGetBalancesRequest): Promise<QueryGetBalancesResponse>;
  /** Get all balances of all addresses */
  BalancesTotal(request: QueryTotalBalancesRequest): Promise<QueryTotalBalancesResponse>;
  /** Get details for a cross-chain bridge */
  Bridge(request: QueryGetBridgeRequest): Promise<QueryGetBridgeResponse>;
  /** Get details for all cross-chain bridges */
  BridgeAll(request: QueryAllBridgeRequest): Promise<QueryAllBridgeResponse>;
  /** Get TokenGroup details for a particular id */
  TokenGroup(request: QueryGetTokenGroupRequest): Promise<QueryGetTokenGroupResponse>;
  /** Get all TokenGroup details */
  TokenGroupAll(request: QueryAllTokenGroupsRequest): Promise<QueryAllTokenGroupsResponse>;
  /** Get denom => group_id mappings */
  TokenGroupMappings(request: QueryTokenGroupMappingsRequest): Promise<QueryTokenGroupMappingsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.coin.Query";
    this.rpc = rpc;
    this.Token = this.Token.bind(this);
    this.TokenAll = this.TokenAll.bind(this);
    this.LockedCoins = this.LockedCoins.bind(this);
    this.WrapperMappings = this.WrapperMappings.bind(this);
    this.Balances = this.Balances.bind(this);
    this.BalancesTotal = this.BalancesTotal.bind(this);
    this.Bridge = this.Bridge.bind(this);
    this.BridgeAll = this.BridgeAll.bind(this);
    this.TokenGroup = this.TokenGroup.bind(this);
    this.TokenGroupAll = this.TokenGroupAll.bind(this);
    this.TokenGroupMappings = this.TokenGroupMappings.bind(this);
    this.Params = this.Params.bind(this);
  }
  Token(request: QueryGetTokenRequest): Promise<QueryGetTokenResponse> {
    const data = QueryGetTokenRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Token", data);
    return promise.then((data) => QueryGetTokenResponse.decode(_m0.Reader.create(data)));
  }

  TokenAll(request: QueryAllTokenRequest): Promise<QueryAllTokenResponse> {
    const data = QueryAllTokenRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "TokenAll", data);
    return promise.then((data) => QueryAllTokenResponse.decode(_m0.Reader.create(data)));
  }

  LockedCoins(request: QueryGetLockedCoinsRequest): Promise<QueryGetLockedCoinsResponse> {
    const data = QueryGetLockedCoinsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "LockedCoins", data);
    return promise.then((data) => QueryGetLockedCoinsResponse.decode(_m0.Reader.create(data)));
  }

  WrapperMappings(request: QueryAllWrapperMappingsRequest): Promise<QueryAllWrapperMappingsResponse> {
    const data = QueryAllWrapperMappingsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "WrapperMappings", data);
    return promise.then((data) => QueryAllWrapperMappingsResponse.decode(_m0.Reader.create(data)));
  }

  Balances(request: QueryGetBalancesRequest): Promise<QueryGetBalancesResponse> {
    const data = QueryGetBalancesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Balances", data);
    return promise.then((data) => QueryGetBalancesResponse.decode(_m0.Reader.create(data)));
  }

  BalancesTotal(request: QueryTotalBalancesRequest): Promise<QueryTotalBalancesResponse> {
    const data = QueryTotalBalancesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "BalancesTotal", data);
    return promise.then((data) => QueryTotalBalancesResponse.decode(_m0.Reader.create(data)));
  }

  Bridge(request: QueryGetBridgeRequest): Promise<QueryGetBridgeResponse> {
    const data = QueryGetBridgeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Bridge", data);
    return promise.then((data) => QueryGetBridgeResponse.decode(_m0.Reader.create(data)));
  }

  BridgeAll(request: QueryAllBridgeRequest): Promise<QueryAllBridgeResponse> {
    const data = QueryAllBridgeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "BridgeAll", data);
    return promise.then((data) => QueryAllBridgeResponse.decode(_m0.Reader.create(data)));
  }

  TokenGroup(request: QueryGetTokenGroupRequest): Promise<QueryGetTokenGroupResponse> {
    const data = QueryGetTokenGroupRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "TokenGroup", data);
    return promise.then((data) => QueryGetTokenGroupResponse.decode(_m0.Reader.create(data)));
  }

  TokenGroupAll(request: QueryAllTokenGroupsRequest): Promise<QueryAllTokenGroupsResponse> {
    const data = QueryAllTokenGroupsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "TokenGroupAll", data);
    return promise.then((data) => QueryAllTokenGroupsResponse.decode(_m0.Reader.create(data)));
  }

  TokenGroupMappings(request: QueryTokenGroupMappingsRequest): Promise<QueryTokenGroupMappingsResponse> {
    const data = QueryTokenGroupMappingsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "TokenGroupMappings", data);
    return promise.then((data) => QueryTokenGroupMappingsResponse.decode(_m0.Reader.create(data)));
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
