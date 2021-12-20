/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Token, LockedCoins, TokenBalance } from "../coin/token";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import {
  PageRequest as PageRequest1,
  PageResponse as PageResponse2,
} from "../query/pagination";
import { Bridge } from "../coin/bridge";
import { ExternalTransfer } from "../coin/extevents";

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

export interface QueryGetExternalTransfersRequest {
  address: string;
  blockchain: string;
  transferType: string;
  denom: string;
  status: string;
  orderBy: string;
  pagination?: PageRequest1;
}

export interface QueryGetExternalTransfersResponse {
  externalTransfers: ExternalTransfer[];
  pagination?: PageResponse2;
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
    return message;
  },

  toJSON(message: QueryAllTokenRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllTokenRequest>): QueryAllTokenRequest {
    const message = { ...baseQueryAllTokenRequest } as QueryAllTokenRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
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

const baseQueryGetExternalTransfersRequest: object = {
  address: "",
  blockchain: "",
  transferType: "",
  denom: "",
  status: "",
  orderBy: "",
};

export const QueryGetExternalTransfersRequest = {
  encode(
    message: QueryGetExternalTransfersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.blockchain !== "") {
      writer.uint32(18).string(message.blockchain);
    }
    if (message.transferType !== "") {
      writer.uint32(26).string(message.transferType);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    if (message.status !== "") {
      writer.uint32(42).string(message.status);
    }
    if (message.orderBy !== "") {
      writer.uint32(50).string(message.orderBy);
    }
    if (message.pagination !== undefined) {
      PageRequest1.encode(
        message.pagination,
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetExternalTransfersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetExternalTransfersRequest,
    } as QueryGetExternalTransfersRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.blockchain = reader.string();
          break;
        case 3:
          message.transferType = reader.string();
          break;
        case 4:
          message.denom = reader.string();
          break;
        case 5:
          message.status = reader.string();
          break;
        case 6:
          message.orderBy = reader.string();
          break;
        case 7:
          message.pagination = PageRequest1.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetExternalTransfersRequest {
    const message = {
      ...baseQueryGetExternalTransfersRequest,
    } as QueryGetExternalTransfersRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.blockchain =
      object.blockchain !== undefined && object.blockchain !== null
        ? String(object.blockchain)
        : "";
    message.transferType =
      object.transferType !== undefined && object.transferType !== null
        ? String(object.transferType)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.status =
      object.status !== undefined && object.status !== null
        ? String(object.status)
        : "";
    message.orderBy =
      object.orderBy !== undefined && object.orderBy !== null
        ? String(object.orderBy)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest1.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryGetExternalTransfersRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.blockchain !== undefined && (obj.blockchain = message.blockchain);
    message.transferType !== undefined &&
      (obj.transferType = message.transferType);
    message.denom !== undefined && (obj.denom = message.denom);
    message.status !== undefined && (obj.status = message.status);
    message.orderBy !== undefined && (obj.orderBy = message.orderBy);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest1.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetExternalTransfersRequest>
  ): QueryGetExternalTransfersRequest {
    const message = {
      ...baseQueryGetExternalTransfersRequest,
    } as QueryGetExternalTransfersRequest;
    message.address = object.address ?? "";
    message.blockchain = object.blockchain ?? "";
    message.transferType = object.transferType ?? "";
    message.denom = object.denom ?? "";
    message.status = object.status ?? "";
    message.orderBy = object.orderBy ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest1.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryGetExternalTransfersResponse: object = {};

export const QueryGetExternalTransfersResponse = {
  encode(
    message: QueryGetExternalTransfersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.externalTransfers) {
      ExternalTransfer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse2.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetExternalTransfersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetExternalTransfersResponse,
    } as QueryGetExternalTransfersResponse;
    message.externalTransfers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.externalTransfers.push(
            ExternalTransfer.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse2.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetExternalTransfersResponse {
    const message = {
      ...baseQueryGetExternalTransfersResponse,
    } as QueryGetExternalTransfersResponse;
    message.externalTransfers = (object.externalTransfers ?? []).map((e: any) =>
      ExternalTransfer.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse2.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryGetExternalTransfersResponse): unknown {
    const obj: any = {};
    if (message.externalTransfers) {
      obj.externalTransfers = message.externalTransfers.map((e) =>
        e ? ExternalTransfer.toJSON(e) : undefined
      );
    } else {
      obj.externalTransfers = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse2.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetExternalTransfersResponse>
  ): QueryGetExternalTransfersResponse {
    const message = {
      ...baseQueryGetExternalTransfersResponse,
    } as QueryGetExternalTransfersResponse;
    message.externalTransfers = (object.externalTransfers ?? []).map((e) =>
      ExternalTransfer.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse2.fromPartial(object.pagination)
        : undefined;
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

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  Token(request: QueryGetTokenRequest): Promise<QueryGetTokenResponse>;
  TokenAll(request: QueryAllTokenRequest): Promise<QueryAllTokenResponse>;
  LockedCoins(
    request: QueryGetLockedCoinsRequest
  ): Promise<QueryGetLockedCoinsResponse>;
  WrapperMappings(
    request: QueryAllWrapperMappingsRequest
  ): Promise<QueryAllWrapperMappingsResponse>;
  Balances(request: QueryGetBalancesRequest): Promise<QueryGetBalancesResponse>;
  ExternalTransfers(
    request: QueryGetExternalTransfersRequest
  ): Promise<QueryGetExternalTransfersResponse>;
  Bridge(request: QueryGetBridgeRequest): Promise<QueryGetBridgeResponse>;
  BridgeAll(request: QueryAllBridgeRequest): Promise<QueryAllBridgeResponse>;
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
    this.ExternalTransfers = this.ExternalTransfers.bind(this);
    this.Bridge = this.Bridge.bind(this);
    this.BridgeAll = this.BridgeAll.bind(this);
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

  ExternalTransfers(
    request: QueryGetExternalTransfersRequest
  ): Promise<QueryGetExternalTransfersResponse> {
    const data = QueryGetExternalTransfersRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.coin.Query",
      "ExternalTransfers",
      data
    );
    return promise.then((data) =>
      QueryGetExternalTransfersResponse.decode(new _m0.Reader(data))
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
