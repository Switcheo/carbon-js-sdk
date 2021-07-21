/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Token, LockedCoins } from "../coin/token";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "Switcheo.carbon.coin";

/** this line is used by starport scaffolding # 3 */
export interface QueryGetTokenRequest {
  denom: string;
}

export interface QueryGetTokenResponse {
  Token?: Token;
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
  WrapperMappings: { [key: string]: string };
  pagination?: PageResponse;
}

export interface QueryAllWrapperMappingsResponse_WrapperMappingsEntry {
  key: string;
  value: string;
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
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
  },

  toJSON(message: QueryGetTokenRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetTokenRequest>): QueryGetTokenRequest {
    const message = { ...baseQueryGetTokenRequest } as QueryGetTokenRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    return message;
  },
};

const baseQueryGetTokenResponse: object = {};

export const QueryGetTokenResponse = {
  encode(
    message: QueryGetTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Token !== undefined) {
      Token.encode(message.Token, writer.uint32(10).fork()).ldelim();
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
          message.Token = Token.decode(reader, reader.uint32());
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
    if (object.Token !== undefined && object.Token !== null) {
      message.Token = Token.fromJSON(object.Token);
    } else {
      message.Token = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetTokenResponse): unknown {
    const obj: any = {};
    message.Token !== undefined &&
      (obj.Token = message.Token ? Token.toJSON(message.Token) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTokenResponse>
  ): QueryGetTokenResponse {
    const message = { ...baseQueryGetTokenResponse } as QueryGetTokenResponse;
    if (object.Token !== undefined && object.Token !== null) {
      message.Token = Token.fromPartial(object.Token);
    } else {
      message.Token = undefined;
    }
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
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
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
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
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
    message.tokens = [];
    if (object.tokens !== undefined && object.tokens !== null) {
      for (const e of object.tokens) {
        message.tokens.push(Token.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
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
    message.tokens = [];
    if (object.tokens !== undefined && object.tokens !== null) {
      for (const e of object.tokens) {
        message.tokens.push(Token.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
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
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
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
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
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
    message.lockedCoins = [];
    if (object.lockedCoins !== undefined && object.lockedCoins !== null) {
      for (const e of object.lockedCoins) {
        message.lockedCoins.push(LockedCoins.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
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
    message.lockedCoins = [];
    if (object.lockedCoins !== undefined && object.lockedCoins !== null) {
      for (const e of object.lockedCoins) {
        message.lockedCoins.push(LockedCoins.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
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
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
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
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllWrapperMappingsResponse: object = {};

export const QueryAllWrapperMappingsResponse = {
  encode(
    message: QueryAllWrapperMappingsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.WrapperMappings).forEach(([key, value]) => {
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
    message.WrapperMappings = {};
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
            message.WrapperMappings[entry1.key] = entry1.value;
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
    message.WrapperMappings = {};
    if (
      object.WrapperMappings !== undefined &&
      object.WrapperMappings !== null
    ) {
      Object.entries(object.WrapperMappings).forEach(([key, value]) => {
        message.WrapperMappings[key] = String(value);
      });
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllWrapperMappingsResponse): unknown {
    const obj: any = {};
    obj.WrapperMappings = {};
    if (message.WrapperMappings) {
      Object.entries(message.WrapperMappings).forEach(([k, v]) => {
        obj.WrapperMappings[k] = v;
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
    message.WrapperMappings = {};
    if (
      object.WrapperMappings !== undefined &&
      object.WrapperMappings !== null
    ) {
      Object.entries(object.WrapperMappings).forEach(([key, value]) => {
        if (value !== undefined) {
          message.WrapperMappings[key] = String(value);
        }
      });
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
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
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
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
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
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
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Token = this.Token.bind(this);
    this.TokenAll = this.TokenAll.bind(this);
    this.LockedCoins = this.LockedCoins.bind(this);
    this.WrapperMappings = this.WrapperMappings.bind(this);
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
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
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
