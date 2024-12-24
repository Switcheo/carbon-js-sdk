/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Token, LockedCoins, TokenBalance } from "./token";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Bridge } from "./bridge";
import { TokenGroupDetails } from "./group";
import { BoolValue } from "../../../google/protobuf/wrappers";

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

const baseQueryGetTokenRequest: object = { denom: "" };

export const QueryGetTokenRequest = {
  encode(
    message: QueryGetTokenRequest,
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
  ): QueryGetTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetTokenRequest } as QueryGetTokenRequest;
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

  fromJSON(object: any): QueryGetTokenRequest {
    const message = { ...baseQueryGetTokenRequest } as QueryGetTokenRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: QueryGetTokenRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetTokenRequest>): QueryGetTokenRequest {
    const message = { ...baseQueryGetTokenRequest } as QueryGetTokenRequest;
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseQueryGetTokenResponse: object = {};

export const QueryGetTokenResponse = {
  encode(
    message: QueryGetTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== undefined) {
      Token.encode(message.token, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetTokenResponse } as QueryGetTokenResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = Token.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTokenResponse {
    const message = { ...baseQueryGetTokenResponse } as QueryGetTokenResponse;
    message.token =
      object.token !== undefined && object.token !== null
        ? Token.fromJSON(object.token)
        : undefined;
    return message;
  },

  toJSON(message: QueryGetTokenResponse): unknown {
    const obj: any = {};
    message.token !== undefined &&
      (obj.token = message.token ? Token.toJSON(message.token) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTokenResponse>
  ): QueryGetTokenResponse {
    const message = { ...baseQueryGetTokenResponse } as QueryGetTokenResponse;
    message.token =
      object.token !== undefined && object.token !== null
        ? Token.fromPartial(object.token)
        : undefined;
    return message;
  },
};

const baseQueryAllTokenRequest: object = {};

export const QueryAllTokenRequest = {
  encode(
    message: QueryAllTokenRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.isActive !== undefined) {
      BoolValue.encode(
        { value: message.isActive! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllTokenRequest } as QueryAllTokenRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.isActive = BoolValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTokenRequest {
    const message = { ...baseQueryAllTokenRequest } as QueryAllTokenRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    message.isActive =
      object.isActive !== undefined && object.isActive !== null
        ? Boolean(object.isActive)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllTokenRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    message.isActive !== undefined && (obj.isActive = message.isActive);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllTokenRequest>): QueryAllTokenRequest {
    const message = { ...baseQueryAllTokenRequest } as QueryAllTokenRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    message.isActive = object.isActive ?? undefined;
    return message;
  },
};

const baseQueryAllTokenResponse: object = {};

export const QueryAllTokenResponse = {
  encode(
    message: QueryAllTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.tokens) {
      Token.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllTokenResponse } as QueryAllTokenResponse;
    message.tokens = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokens.push(Token.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllTokenResponse {
    const message = { ...baseQueryAllTokenResponse } as QueryAllTokenResponse;
    message.tokens = (object.tokens ?? []).map((e: any) => Token.fromJSON(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllTokenResponse): unknown {
    const obj: any = {};
    if (message.tokens) {
      obj.tokens = message.tokens.map((e) => (e ? Token.toJSON(e) : undefined));
    } else {
      obj.tokens = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllTokenResponse>
  ): QueryAllTokenResponse {
    const message = { ...baseQueryAllTokenResponse } as QueryAllTokenResponse;
    message.tokens = (object.tokens ?? []).map((e) => Token.fromPartial(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryGetLockedCoinsRequest: object = { address: "" };

export const QueryGetLockedCoinsRequest = {
  encode(
    message: QueryGetLockedCoinsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetLockedCoinsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetLockedCoinsRequest,
    } as QueryGetLockedCoinsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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

  fromJSON(object: any): QueryGetLockedCoinsRequest {
    const message = {
      ...baseQueryGetLockedCoinsRequest,
    } as QueryGetLockedCoinsRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryGetLockedCoinsRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetLockedCoinsRequest>
  ): QueryGetLockedCoinsRequest {
    const message = {
      ...baseQueryGetLockedCoinsRequest,
    } as QueryGetLockedCoinsRequest;
    message.address = object.address ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryGetLockedCoinsResponse: object = {};

export const QueryGetLockedCoinsResponse = {
  encode(
    message: QueryGetLockedCoinsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.lockedCoins) {
      LockedCoins.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryGetLockedCoinsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetLockedCoinsResponse,
    } as QueryGetLockedCoinsResponse;
    message.lockedCoins = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockedCoins.push(LockedCoins.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryGetLockedCoinsResponse {
    const message = {
      ...baseQueryGetLockedCoinsResponse,
    } as QueryGetLockedCoinsResponse;
    message.lockedCoins = (object.lockedCoins ?? []).map((e: any) =>
      LockedCoins.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryGetLockedCoinsResponse): unknown {
    const obj: any = {};
    if (message.lockedCoins) {
      obj.lockedCoins = message.lockedCoins.map((e) =>
        e ? LockedCoins.toJSON(e) : undefined
      );
    } else {
      obj.lockedCoins = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetLockedCoinsResponse>
  ): QueryGetLockedCoinsResponse {
    const message = {
      ...baseQueryGetLockedCoinsResponse,
    } as QueryGetLockedCoinsResponse;
    message.lockedCoins = (object.lockedCoins ?? []).map((e) =>
      LockedCoins.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllWrapperMappingsRequest: object = {};

export const QueryAllWrapperMappingsRequest = {
  encode(
    message: QueryAllWrapperMappingsRequest,
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
  ): QueryAllWrapperMappingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllWrapperMappingsRequest,
    } as QueryAllWrapperMappingsRequest;
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

  fromJSON(object: any): QueryAllWrapperMappingsRequest {
    const message = {
      ...baseQueryAllWrapperMappingsRequest,
    } as QueryAllWrapperMappingsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllWrapperMappingsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllWrapperMappingsRequest>
  ): QueryAllWrapperMappingsRequest {
    const message = {
      ...baseQueryAllWrapperMappingsRequest,
    } as QueryAllWrapperMappingsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllWrapperMappingsResponse: object = {};

export const QueryAllWrapperMappingsResponse = {
  encode(
    message: QueryAllWrapperMappingsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.wrapperMappings).forEach(([key, value]) => {
      QueryAllWrapperMappingsResponse_WrapperMappingsEntry.encode(
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
  ): QueryAllWrapperMappingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllWrapperMappingsResponse,
    } as QueryAllWrapperMappingsResponse;
    message.wrapperMappings = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 =
            QueryAllWrapperMappingsResponse_WrapperMappingsEntry.decode(
              reader,
              reader.uint32()
            );
          if (entry1.value !== undefined) {
            message.wrapperMappings[entry1.key] = entry1.value;
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

  fromJSON(object: any): QueryAllWrapperMappingsResponse {
    const message = {
      ...baseQueryAllWrapperMappingsResponse,
    } as QueryAllWrapperMappingsResponse;
    message.wrapperMappings = Object.entries(
      object.wrapperMappings ?? {}
    ).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
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
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllWrapperMappingsResponse>
  ): QueryAllWrapperMappingsResponse {
    const message = {
      ...baseQueryAllWrapperMappingsResponse,
    } as QueryAllWrapperMappingsResponse;
    message.wrapperMappings = Object.entries(
      object.wrapperMappings ?? {}
    ).reduce<{ [key: string]: string }>((acc, [key, value]) => {
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

const baseQueryAllWrapperMappingsResponse_WrapperMappingsEntry: object = {
  key: "",
  value: "",
};

export const QueryAllWrapperMappingsResponse_WrapperMappingsEntry = {
  encode(
    message: QueryAllWrapperMappingsResponse_WrapperMappingsEntry,
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
  ): QueryAllWrapperMappingsResponse_WrapperMappingsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllWrapperMappingsResponse_WrapperMappingsEntry,
    } as QueryAllWrapperMappingsResponse_WrapperMappingsEntry;
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

  fromJSON(object: any): QueryAllWrapperMappingsResponse_WrapperMappingsEntry {
    const message = {
      ...baseQueryAllWrapperMappingsResponse_WrapperMappingsEntry,
    } as QueryAllWrapperMappingsResponse_WrapperMappingsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(
    message: QueryAllWrapperMappingsResponse_WrapperMappingsEntry
  ): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllWrapperMappingsResponse_WrapperMappingsEntry>
  ): QueryAllWrapperMappingsResponse_WrapperMappingsEntry {
    const message = {
      ...baseQueryAllWrapperMappingsResponse_WrapperMappingsEntry,
    } as QueryAllWrapperMappingsResponse_WrapperMappingsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

const baseQueryGetBalancesRequest: object = { address: "" };

export const QueryGetBalancesRequest = {
  encode(
    message: QueryGetBalancesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetBalancesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBalancesRequest,
    } as QueryGetBalancesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBalancesRequest {
    const message = {
      ...baseQueryGetBalancesRequest,
    } as QueryGetBalancesRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: QueryGetBalancesRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBalancesRequest>
  ): QueryGetBalancesRequest {
    const message = {
      ...baseQueryGetBalancesRequest,
    } as QueryGetBalancesRequest;
    message.address = object.address ?? "";
    return message;
  },
};

const baseQueryGetBalancesResponse: object = {};

export const QueryGetBalancesResponse = {
  encode(
    message: QueryGetBalancesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.tokenBalances) {
      TokenBalance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetBalancesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBalancesResponse,
    } as QueryGetBalancesResponse;
    message.tokenBalances = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenBalances.push(
            TokenBalance.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBalancesResponse {
    const message = {
      ...baseQueryGetBalancesResponse,
    } as QueryGetBalancesResponse;
    message.tokenBalances = (object.tokenBalances ?? []).map((e: any) =>
      TokenBalance.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryGetBalancesResponse): unknown {
    const obj: any = {};
    if (message.tokenBalances) {
      obj.tokenBalances = message.tokenBalances.map((e) =>
        e ? TokenBalance.toJSON(e) : undefined
      );
    } else {
      obj.tokenBalances = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBalancesResponse>
  ): QueryGetBalancesResponse {
    const message = {
      ...baseQueryGetBalancesResponse,
    } as QueryGetBalancesResponse;
    message.tokenBalances = (object.tokenBalances ?? []).map((e) =>
      TokenBalance.fromPartial(e)
    );
    return message;
  },
};

const baseQueryTotalBalancesRequest: object = { endBlockHeight: "" };

export const QueryTotalBalancesRequest = {
  encode(
    message: QueryTotalBalancesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.endBlockHeight !== "") {
      writer.uint32(10).string(message.endBlockHeight);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTotalBalancesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTotalBalancesRequest,
    } as QueryTotalBalancesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.endBlockHeight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalBalancesRequest {
    const message = {
      ...baseQueryTotalBalancesRequest,
    } as QueryTotalBalancesRequest;
    message.endBlockHeight =
      object.endBlockHeight !== undefined && object.endBlockHeight !== null
        ? String(object.endBlockHeight)
        : "";
    return message;
  },

  toJSON(message: QueryTotalBalancesRequest): unknown {
    const obj: any = {};
    message.endBlockHeight !== undefined &&
      (obj.endBlockHeight = message.endBlockHeight);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTotalBalancesRequest>
  ): QueryTotalBalancesRequest {
    const message = {
      ...baseQueryTotalBalancesRequest,
    } as QueryTotalBalancesRequest;
    message.endBlockHeight = object.endBlockHeight ?? "";
    return message;
  },
};

const baseQueryTotalBalancesResponse: object = {};

export const QueryTotalBalancesResponse = {
  encode(
    message: QueryTotalBalancesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.balances) {
      TokenBalance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTotalBalancesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTotalBalancesResponse,
    } as QueryTotalBalancesResponse;
    message.balances = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balances.push(TokenBalance.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalBalancesResponse {
    const message = {
      ...baseQueryTotalBalancesResponse,
    } as QueryTotalBalancesResponse;
    message.balances = (object.balances ?? []).map((e: any) =>
      TokenBalance.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryTotalBalancesResponse): unknown {
    const obj: any = {};
    if (message.balances) {
      obj.balances = message.balances.map((e) =>
        e ? TokenBalance.toJSON(e) : undefined
      );
    } else {
      obj.balances = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTotalBalancesResponse>
  ): QueryTotalBalancesResponse {
    const message = {
      ...baseQueryTotalBalancesResponse,
    } as QueryTotalBalancesResponse;
    message.balances = (object.balances ?? []).map((e) =>
      TokenBalance.fromPartial(e)
    );
    return message;
  },
};

const baseQueryGetBridgeRequest: object = {
  bridgeId: Long.UZERO,
  chainId: Long.UZERO,
};

export const QueryGetBridgeRequest = {
  encode(
    message: QueryGetBridgeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.bridgeId.isZero()) {
      writer.uint32(8).uint64(message.bridgeId);
    }
    if (!message.chainId.isZero()) {
      writer.uint32(16).uint64(message.chainId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetBridgeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetBridgeRequest } as QueryGetBridgeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bridgeId = reader.uint64() as Long;
          break;
        case 2:
          message.chainId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBridgeRequest {
    const message = { ...baseQueryGetBridgeRequest } as QueryGetBridgeRequest;
    message.bridgeId =
      object.bridgeId !== undefined && object.bridgeId !== null
        ? Long.fromString(object.bridgeId)
        : Long.UZERO;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Long.fromString(object.chainId)
        : Long.UZERO;
    return message;
  },

  toJSON(message: QueryGetBridgeRequest): unknown {
    const obj: any = {};
    message.bridgeId !== undefined &&
      (obj.bridgeId = (message.bridgeId || Long.UZERO).toString());
    message.chainId !== undefined &&
      (obj.chainId = (message.chainId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBridgeRequest>
  ): QueryGetBridgeRequest {
    const message = { ...baseQueryGetBridgeRequest } as QueryGetBridgeRequest;
    message.bridgeId =
      object.bridgeId !== undefined && object.bridgeId !== null
        ? Long.fromValue(object.bridgeId)
        : Long.UZERO;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Long.fromValue(object.chainId)
        : Long.UZERO;
    return message;
  },
};

const baseQueryGetBridgeResponse: object = {};

export const QueryGetBridgeResponse = {
  encode(
    message: QueryGetBridgeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bridge !== undefined) {
      Bridge.encode(message.bridge, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetBridgeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetBridgeResponse } as QueryGetBridgeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bridge = Bridge.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBridgeResponse {
    const message = { ...baseQueryGetBridgeResponse } as QueryGetBridgeResponse;
    message.bridge =
      object.bridge !== undefined && object.bridge !== null
        ? Bridge.fromJSON(object.bridge)
        : undefined;
    return message;
  },

  toJSON(message: QueryGetBridgeResponse): unknown {
    const obj: any = {};
    message.bridge !== undefined &&
      (obj.bridge = message.bridge ? Bridge.toJSON(message.bridge) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBridgeResponse>
  ): QueryGetBridgeResponse {
    const message = { ...baseQueryGetBridgeResponse } as QueryGetBridgeResponse;
    message.bridge =
      object.bridge !== undefined && object.bridge !== null
        ? Bridge.fromPartial(object.bridge)
        : undefined;
    return message;
  },
};

const baseQueryAllBridgeRequest: object = {};

export const QueryAllBridgeRequest = {
  encode(
    message: QueryAllBridgeRequest,
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
  ): QueryAllBridgeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllBridgeRequest } as QueryAllBridgeRequest;
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

  fromJSON(object: any): QueryAllBridgeRequest {
    const message = { ...baseQueryAllBridgeRequest } as QueryAllBridgeRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllBridgeRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBridgeRequest>
  ): QueryAllBridgeRequest {
    const message = { ...baseQueryAllBridgeRequest } as QueryAllBridgeRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllBridgeResponse: object = {};

export const QueryAllBridgeResponse = {
  encode(
    message: QueryAllBridgeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.bridges) {
      Bridge.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllBridgeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllBridgeResponse } as QueryAllBridgeResponse;
    message.bridges = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bridges.push(Bridge.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllBridgeResponse {
    const message = { ...baseQueryAllBridgeResponse } as QueryAllBridgeResponse;
    message.bridges = (object.bridges ?? []).map((e: any) =>
      Bridge.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllBridgeResponse): unknown {
    const obj: any = {};
    if (message.bridges) {
      obj.bridges = message.bridges.map((e) =>
        e ? Bridge.toJSON(e) : undefined
      );
    } else {
      obj.bridges = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBridgeResponse>
  ): QueryAllBridgeResponse {
    const message = { ...baseQueryAllBridgeResponse } as QueryAllBridgeResponse;
    message.bridges = (object.bridges ?? []).map((e) => Bridge.fromPartial(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryGetTokenGroupRequest: object = { groupId: "" };

export const QueryGetTokenGroupRequest = {
  encode(
    message: QueryGetTokenGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupId !== "") {
      writer.uint32(10).string(message.groupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetTokenGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetTokenGroupRequest,
    } as QueryGetTokenGroupRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTokenGroupRequest {
    const message = {
      ...baseQueryGetTokenGroupRequest,
    } as QueryGetTokenGroupRequest;
    message.groupId =
      object.groupId !== undefined && object.groupId !== null
        ? String(object.groupId)
        : "";
    return message;
  },

  toJSON(message: QueryGetTokenGroupRequest): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = message.groupId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTokenGroupRequest>
  ): QueryGetTokenGroupRequest {
    const message = {
      ...baseQueryGetTokenGroupRequest,
    } as QueryGetTokenGroupRequest;
    message.groupId = object.groupId ?? "";
    return message;
  },
};

const baseQueryGetTokenGroupResponse: object = {};

export const QueryGetTokenGroupResponse = {
  encode(
    message: QueryGetTokenGroupResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tokenGroup !== undefined) {
      TokenGroupDetails.encode(
        message.tokenGroup,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetTokenGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetTokenGroupResponse,
    } as QueryGetTokenGroupResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenGroup = TokenGroupDetails.decode(
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

  fromJSON(object: any): QueryGetTokenGroupResponse {
    const message = {
      ...baseQueryGetTokenGroupResponse,
    } as QueryGetTokenGroupResponse;
    message.tokenGroup =
      object.tokenGroup !== undefined && object.tokenGroup !== null
        ? TokenGroupDetails.fromJSON(object.tokenGroup)
        : undefined;
    return message;
  },

  toJSON(message: QueryGetTokenGroupResponse): unknown {
    const obj: any = {};
    message.tokenGroup !== undefined &&
      (obj.tokenGroup = message.tokenGroup
        ? TokenGroupDetails.toJSON(message.tokenGroup)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTokenGroupResponse>
  ): QueryGetTokenGroupResponse {
    const message = {
      ...baseQueryGetTokenGroupResponse,
    } as QueryGetTokenGroupResponse;
    message.tokenGroup =
      object.tokenGroup !== undefined && object.tokenGroup !== null
        ? TokenGroupDetails.fromPartial(object.tokenGroup)
        : undefined;
    return message;
  },
};

const baseQueryAllTokenGroupsRequest: object = {};

export const QueryAllTokenGroupsRequest = {
  encode(
    message: QueryAllTokenGroupsRequest,
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
  ): QueryAllTokenGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllTokenGroupsRequest,
    } as QueryAllTokenGroupsRequest;
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

  fromJSON(object: any): QueryAllTokenGroupsRequest {
    const message = {
      ...baseQueryAllTokenGroupsRequest,
    } as QueryAllTokenGroupsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllTokenGroupsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllTokenGroupsRequest>
  ): QueryAllTokenGroupsRequest {
    const message = {
      ...baseQueryAllTokenGroupsRequest,
    } as QueryAllTokenGroupsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllTokenGroupsResponse: object = {};

export const QueryAllTokenGroupsResponse = {
  encode(
    message: QueryAllTokenGroupsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.tokenGroups) {
      TokenGroupDetails.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllTokenGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllTokenGroupsResponse,
    } as QueryAllTokenGroupsResponse;
    message.tokenGroups = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenGroups.push(
            TokenGroupDetails.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllTokenGroupsResponse {
    const message = {
      ...baseQueryAllTokenGroupsResponse,
    } as QueryAllTokenGroupsResponse;
    message.tokenGroups = (object.tokenGroups ?? []).map((e: any) =>
      TokenGroupDetails.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllTokenGroupsResponse): unknown {
    const obj: any = {};
    if (message.tokenGroups) {
      obj.tokenGroups = message.tokenGroups.map((e) =>
        e ? TokenGroupDetails.toJSON(e) : undefined
      );
    } else {
      obj.tokenGroups = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllTokenGroupsResponse>
  ): QueryAllTokenGroupsResponse {
    const message = {
      ...baseQueryAllTokenGroupsResponse,
    } as QueryAllTokenGroupsResponse;
    message.tokenGroups = (object.tokenGroups ?? []).map((e) =>
      TokenGroupDetails.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryTokenGroupMappingsRequest: object = {};

export const QueryTokenGroupMappingsRequest = {
  encode(
    message: QueryTokenGroupMappingsRequest,
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
  ): QueryTokenGroupMappingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTokenGroupMappingsRequest,
    } as QueryTokenGroupMappingsRequest;
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

  fromJSON(object: any): QueryTokenGroupMappingsRequest {
    const message = {
      ...baseQueryTokenGroupMappingsRequest,
    } as QueryTokenGroupMappingsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryTokenGroupMappingsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTokenGroupMappingsRequest>
  ): QueryTokenGroupMappingsRequest {
    const message = {
      ...baseQueryTokenGroupMappingsRequest,
    } as QueryTokenGroupMappingsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryTokenGroupMappingsResponse: object = {};

export const QueryTokenGroupMappingsResponse = {
  encode(
    message: QueryTokenGroupMappingsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.tokenGroupMappings).forEach(([key, value]) => {
      QueryTokenGroupMappingsResponse_TokenGroupMappingsEntry.encode(
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
  ): QueryTokenGroupMappingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTokenGroupMappingsResponse,
    } as QueryTokenGroupMappingsResponse;
    message.tokenGroupMappings = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 =
            QueryTokenGroupMappingsResponse_TokenGroupMappingsEntry.decode(
              reader,
              reader.uint32()
            );
          if (entry1.value !== undefined) {
            message.tokenGroupMappings[entry1.key] = entry1.value;
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

  fromJSON(object: any): QueryTokenGroupMappingsResponse {
    const message = {
      ...baseQueryTokenGroupMappingsResponse,
    } as QueryTokenGroupMappingsResponse;
    message.tokenGroupMappings = Object.entries(
      object.tokenGroupMappings ?? {}
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

  toJSON(message: QueryTokenGroupMappingsResponse): unknown {
    const obj: any = {};
    obj.tokenGroupMappings = {};
    if (message.tokenGroupMappings) {
      Object.entries(message.tokenGroupMappings).forEach(([k, v]) => {
        obj.tokenGroupMappings[k] = v.toString();
      });
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTokenGroupMappingsResponse>
  ): QueryTokenGroupMappingsResponse {
    const message = {
      ...baseQueryTokenGroupMappingsResponse,
    } as QueryTokenGroupMappingsResponse;
    message.tokenGroupMappings = Object.entries(
      object.tokenGroupMappings ?? {}
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

const baseQueryTokenGroupMappingsResponse_TokenGroupMappingsEntry: object = {
  key: "",
  value: Long.UZERO,
};

export const QueryTokenGroupMappingsResponse_TokenGroupMappingsEntry = {
  encode(
    message: QueryTokenGroupMappingsResponse_TokenGroupMappingsEntry,
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
  ): QueryTokenGroupMappingsResponse_TokenGroupMappingsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTokenGroupMappingsResponse_TokenGroupMappingsEntry,
    } as QueryTokenGroupMappingsResponse_TokenGroupMappingsEntry;
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
  ): QueryTokenGroupMappingsResponse_TokenGroupMappingsEntry {
    const message = {
      ...baseQueryTokenGroupMappingsResponse_TokenGroupMappingsEntry,
    } as QueryTokenGroupMappingsResponse_TokenGroupMappingsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? Long.fromString(object.value)
        : Long.UZERO;
    return message;
  },

  toJSON(
    message: QueryTokenGroupMappingsResponse_TokenGroupMappingsEntry
  ): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = (message.value || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTokenGroupMappingsResponse_TokenGroupMappingsEntry>
  ): QueryTokenGroupMappingsResponse_TokenGroupMappingsEntry {
    const message = {
      ...baseQueryTokenGroupMappingsResponse_TokenGroupMappingsEntry,
    } as QueryTokenGroupMappingsResponse_TokenGroupMappingsEntry;
    message.key = object.key ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? Long.fromValue(object.value)
        : Long.UZERO;
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
  LockedCoins(
    request: QueryGetLockedCoinsRequest
  ): Promise<QueryGetLockedCoinsResponse>;
  /** Get wrapper mappings for wrapped tokens */
  WrapperMappings(
    request: QueryAllWrapperMappingsRequest
  ): Promise<QueryAllWrapperMappingsResponse>;
  /** Get balances for an address */
  Balances(request: QueryGetBalancesRequest): Promise<QueryGetBalancesResponse>;
  /** Get all balances of all addresses */
  BalancesTotal(
    request: QueryTotalBalancesRequest
  ): Promise<QueryTotalBalancesResponse>;
  /** Get details for a cross-chain bridge */
  Bridge(request: QueryGetBridgeRequest): Promise<QueryGetBridgeResponse>;
  /** Get details for all cross-chain bridges */
  BridgeAll(request: QueryAllBridgeRequest): Promise<QueryAllBridgeResponse>;
  /** Get TokenGroup details for a particular id */
  TokenGroup(
    request: QueryGetTokenGroupRequest
  ): Promise<QueryGetTokenGroupResponse>;
  /** Get all TokenGroup details */
  TokenGroupAll(
    request: QueryAllTokenGroupsRequest
  ): Promise<QueryAllTokenGroupsResponse>;
  /** Get denom => group_id mappings */
  TokenGroupMappings(
    request: QueryTokenGroupMappingsRequest
  ): Promise<QueryTokenGroupMappingsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
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
  }
  Token(request: QueryGetTokenRequest): Promise<QueryGetTokenResponse> {
    const data = QueryGetTokenRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.coin.Query",
      "Token",
      data
    );
    return promise.then((data) =>
      QueryGetTokenResponse.decode(new _m0.Reader(data))
    );
  }

  TokenAll(request: QueryAllTokenRequest): Promise<QueryAllTokenResponse> {
    const data = QueryAllTokenRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.coin.Query",
      "TokenAll",
      data
    );
    return promise.then((data) =>
      QueryAllTokenResponse.decode(new _m0.Reader(data))
    );
  }

  LockedCoins(
    request: QueryGetLockedCoinsRequest
  ): Promise<QueryGetLockedCoinsResponse> {
    const data = QueryGetLockedCoinsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.coin.Query",
      "LockedCoins",
      data
    );
    return promise.then((data) =>
      QueryGetLockedCoinsResponse.decode(new _m0.Reader(data))
    );
  }

  WrapperMappings(
    request: QueryAllWrapperMappingsRequest
  ): Promise<QueryAllWrapperMappingsResponse> {
    const data = QueryAllWrapperMappingsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.coin.Query",
      "WrapperMappings",
      data
    );
    return promise.then((data) =>
      QueryAllWrapperMappingsResponse.decode(new _m0.Reader(data))
    );
  }

  Balances(
    request: QueryGetBalancesRequest
  ): Promise<QueryGetBalancesResponse> {
    const data = QueryGetBalancesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.coin.Query",
      "Balances",
      data
    );
    return promise.then((data) =>
      QueryGetBalancesResponse.decode(new _m0.Reader(data))
    );
  }

  BalancesTotal(
    request: QueryTotalBalancesRequest
  ): Promise<QueryTotalBalancesResponse> {
    const data = QueryTotalBalancesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.coin.Query",
      "BalancesTotal",
      data
    );
    return promise.then((data) =>
      QueryTotalBalancesResponse.decode(new _m0.Reader(data))
    );
  }

  Bridge(request: QueryGetBridgeRequest): Promise<QueryGetBridgeResponse> {
    const data = QueryGetBridgeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.coin.Query",
      "Bridge",
      data
    );
    return promise.then((data) =>
      QueryGetBridgeResponse.decode(new _m0.Reader(data))
    );
  }

  BridgeAll(request: QueryAllBridgeRequest): Promise<QueryAllBridgeResponse> {
    const data = QueryAllBridgeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.coin.Query",
      "BridgeAll",
      data
    );
    return promise.then((data) =>
      QueryAllBridgeResponse.decode(new _m0.Reader(data))
    );
  }

  TokenGroup(
    request: QueryGetTokenGroupRequest
  ): Promise<QueryGetTokenGroupResponse> {
    const data = QueryGetTokenGroupRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.coin.Query",
      "TokenGroup",
      data
    );
    return promise.then((data) =>
      QueryGetTokenGroupResponse.decode(new _m0.Reader(data))
    );
  }

  TokenGroupAll(
    request: QueryAllTokenGroupsRequest
  ): Promise<QueryAllTokenGroupsResponse> {
    const data = QueryAllTokenGroupsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.coin.Query",
      "TokenGroupAll",
      data
    );
    return promise.then((data) =>
      QueryAllTokenGroupsResponse.decode(new _m0.Reader(data))
    );
  }

  TokenGroupMappings(
    request: QueryTokenGroupMappingsRequest
  ): Promise<QueryTokenGroupMappingsResponse> {
    const data = QueryTokenGroupMappingsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.coin.Query",
      "TokenGroupMappings",
      data
    );
    return promise.then((data) =>
      QueryTokenGroupMappingsResponse.decode(new _m0.Reader(data))
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
