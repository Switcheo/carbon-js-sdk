/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { BaseAccount, Params } from "./auth";

export const protobufPackage = "cosmos.auth.v1beta1";

/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsResponse {
  /** accounts are the existing accounts */
  accounts: Any[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequest {
  /** address defines the address to query for. */
  address: string;
}

/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponse {
  /** account defines the account of the corresponding address. */
  account?: Any;
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}

/**
 * QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryModuleAccountsRequest {
}

/**
 * QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryModuleAccountsResponse {
  accounts: Any[];
}

/** QueryModuleAccountByNameRequest is the request type for the Query/ModuleAccountByName RPC method. */
export interface QueryModuleAccountByNameRequest {
  name: string;
}

/** QueryModuleAccountByNameResponse is the response type for the Query/ModuleAccountByName RPC method. */
export interface QueryModuleAccountByNameResponse {
  account?: Any;
}

/**
 * Bech32PrefixRequest is the request type for Bech32Prefix rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface Bech32PrefixRequest {
}

/**
 * Bech32PrefixResponse is the response type for Bech32Prefix rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface Bech32PrefixResponse {
  bech32Prefix: string;
}

/**
 * AddressBytesToStringRequest is the request type for AddressString rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressBytesToStringRequest {
  addressBytes: Uint8Array;
}

/**
 * AddressBytesToStringResponse is the response type for AddressString rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressBytesToStringResponse {
  addressString: string;
}

/**
 * AddressStringToBytesRequest is the request type for AccountBytes rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressStringToBytesRequest {
  addressString: string;
}

/**
 * AddressStringToBytesResponse is the response type for AddressBytes rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressStringToBytesResponse {
  addressBytes: Uint8Array;
}

/**
 * QueryAccountAddressByIDRequest is the request type for AccountAddressByID rpc method
 *
 * Since: cosmos-sdk 0.46.2
 */
export interface QueryAccountAddressByIDRequest {
  /**
   * Deprecated, use account_id instead
   *
   * id is the account number of the address to be queried. This field
   * should have been an uint64 (like all account numbers), and will be
   * updated to uint64 in a future version of the auth query.
   *
   * @deprecated
   */
  id: Long;
  /**
   * account_id is the account number of the address to be queried.
   *
   * Since: cosmos-sdk 0.47
   */
  accountId: Long;
}

/**
 * QueryAccountAddressByIDResponse is the response type for AccountAddressByID rpc method
 *
 * Since: cosmos-sdk 0.46.2
 */
export interface QueryAccountAddressByIDResponse {
  accountAddress: string;
}

/**
 * QueryAccountInfoRequest is the Query/AccountInfo request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QueryAccountInfoRequest {
  /** address is the account address string. */
  address: string;
}

/**
 * QueryAccountInfoResponse is the Query/AccountInfo response type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QueryAccountInfoResponse {
  /** info is the account info which is represented by BaseAccount. */
  info?: BaseAccount;
}

function createBaseQueryAccountsRequest(): QueryAccountsRequest {
  return { pagination: undefined };
}

export const QueryAccountsRequest = {
  encode(message: QueryAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountsRequest();
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

  fromJSON(object: any): QueryAccountsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAccountsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAccountsRequest>): QueryAccountsRequest {
    return QueryAccountsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAccountsRequest>): QueryAccountsRequest {
    const message = createBaseQueryAccountsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAccountsResponse(): QueryAccountsResponse {
  return { accounts: [], pagination: undefined };
}

export const QueryAccountsResponse = {
  encode(message: QueryAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accounts.push(Any.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Any.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAccountsResponse): unknown {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) => e ? Any.toJSON(e) : undefined);
    } else {
      obj.accounts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAccountsResponse>): QueryAccountsResponse {
    return QueryAccountsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAccountsResponse>): QueryAccountsResponse {
    const message = createBaseQueryAccountsResponse();
    message.accounts = object.accounts?.map((e) => Any.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAccountRequest(): QueryAccountRequest {
  return { address: "" };
}

export const QueryAccountRequest = {
  encode(message: QueryAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountRequest();
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

  fromJSON(object: any): QueryAccountRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryAccountRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<QueryAccountRequest>): QueryAccountRequest {
    return QueryAccountRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAccountRequest>): QueryAccountRequest {
    const message = createBaseQueryAccountRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryAccountResponse(): QueryAccountResponse {
  return { account: undefined };
}

export const QueryAccountResponse = {
  encode(message: QueryAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== undefined) {
      Any.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.account = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAccountResponse {
    return { account: isSet(object.account) ? Any.fromJSON(object.account) : undefined };
  },

  toJSON(message: QueryAccountResponse): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account ? Any.toJSON(message.account) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAccountResponse>): QueryAccountResponse {
    return QueryAccountResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAccountResponse>): QueryAccountResponse {
    const message = createBaseQueryAccountResponse();
    message.account = (object.account !== undefined && object.account !== null)
      ? Any.fromPartial(object.account)
      : undefined;
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

function createBaseQueryModuleAccountsRequest(): QueryModuleAccountsRequest {
  return {};
}

export const QueryModuleAccountsRequest = {
  encode(_: QueryModuleAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountsRequest();
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

  fromJSON(_: any): QueryModuleAccountsRequest {
    return {};
  },

  toJSON(_: QueryModuleAccountsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryModuleAccountsRequest>): QueryModuleAccountsRequest {
    return QueryModuleAccountsRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryModuleAccountsRequest>): QueryModuleAccountsRequest {
    const message = createBaseQueryModuleAccountsRequest();
    return message;
  },
};

function createBaseQueryModuleAccountsResponse(): QueryModuleAccountsResponse {
  return { accounts: [] };
}

export const QueryModuleAccountsResponse = {
  encode(message: QueryModuleAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accounts.push(Any.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryModuleAccountsResponse {
    return { accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Any.fromJSON(e)) : [] };
  },

  toJSON(message: QueryModuleAccountsResponse): unknown {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) => e ? Any.toJSON(e) : undefined);
    } else {
      obj.accounts = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryModuleAccountsResponse>): QueryModuleAccountsResponse {
    return QueryModuleAccountsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryModuleAccountsResponse>): QueryModuleAccountsResponse {
    const message = createBaseQueryModuleAccountsResponse();
    message.accounts = object.accounts?.map((e) => Any.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryModuleAccountByNameRequest(): QueryModuleAccountByNameRequest {
  return { name: "" };
}

export const QueryModuleAccountByNameRequest = {
  encode(message: QueryModuleAccountByNameRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountByNameRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountByNameRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryModuleAccountByNameRequest {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: QueryModuleAccountByNameRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create(base?: DeepPartial<QueryModuleAccountByNameRequest>): QueryModuleAccountByNameRequest {
    return QueryModuleAccountByNameRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryModuleAccountByNameRequest>): QueryModuleAccountByNameRequest {
    const message = createBaseQueryModuleAccountByNameRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseQueryModuleAccountByNameResponse(): QueryModuleAccountByNameResponse {
  return { account: undefined };
}

export const QueryModuleAccountByNameResponse = {
  encode(message: QueryModuleAccountByNameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== undefined) {
      Any.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountByNameResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountByNameResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.account = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryModuleAccountByNameResponse {
    return { account: isSet(object.account) ? Any.fromJSON(object.account) : undefined };
  },

  toJSON(message: QueryModuleAccountByNameResponse): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account ? Any.toJSON(message.account) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryModuleAccountByNameResponse>): QueryModuleAccountByNameResponse {
    return QueryModuleAccountByNameResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryModuleAccountByNameResponse>): QueryModuleAccountByNameResponse {
    const message = createBaseQueryModuleAccountByNameResponse();
    message.account = (object.account !== undefined && object.account !== null)
      ? Any.fromPartial(object.account)
      : undefined;
    return message;
  },
};

function createBaseBech32PrefixRequest(): Bech32PrefixRequest {
  return {};
}

export const Bech32PrefixRequest = {
  encode(_: Bech32PrefixRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bech32PrefixRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBech32PrefixRequest();
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

  fromJSON(_: any): Bech32PrefixRequest {
    return {};
  },

  toJSON(_: Bech32PrefixRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<Bech32PrefixRequest>): Bech32PrefixRequest {
    return Bech32PrefixRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<Bech32PrefixRequest>): Bech32PrefixRequest {
    const message = createBaseBech32PrefixRequest();
    return message;
  },
};

function createBaseBech32PrefixResponse(): Bech32PrefixResponse {
  return { bech32Prefix: "" };
}

export const Bech32PrefixResponse = {
  encode(message: Bech32PrefixResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bech32Prefix !== "") {
      writer.uint32(10).string(message.bech32Prefix);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bech32PrefixResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBech32PrefixResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bech32Prefix = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Bech32PrefixResponse {
    return { bech32Prefix: isSet(object.bech32Prefix) ? String(object.bech32Prefix) : "" };
  },

  toJSON(message: Bech32PrefixResponse): unknown {
    const obj: any = {};
    message.bech32Prefix !== undefined && (obj.bech32Prefix = message.bech32Prefix);
    return obj;
  },

  create(base?: DeepPartial<Bech32PrefixResponse>): Bech32PrefixResponse {
    return Bech32PrefixResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Bech32PrefixResponse>): Bech32PrefixResponse {
    const message = createBaseBech32PrefixResponse();
    message.bech32Prefix = object.bech32Prefix ?? "";
    return message;
  },
};

function createBaseAddressBytesToStringRequest(): AddressBytesToStringRequest {
  return { addressBytes: new Uint8Array() };
}

export const AddressBytesToStringRequest = {
  encode(message: AddressBytesToStringRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addressBytes.length !== 0) {
      writer.uint32(10).bytes(message.addressBytes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddressBytesToStringRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressBytesToStringRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.addressBytes = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddressBytesToStringRequest {
    return { addressBytes: isSet(object.addressBytes) ? bytesFromBase64(object.addressBytes) : new Uint8Array() };
  },

  toJSON(message: AddressBytesToStringRequest): unknown {
    const obj: any = {};
    message.addressBytes !== undefined &&
      (obj.addressBytes = base64FromBytes(
        message.addressBytes !== undefined ? message.addressBytes : new Uint8Array(),
      ));
    return obj;
  },

  create(base?: DeepPartial<AddressBytesToStringRequest>): AddressBytesToStringRequest {
    return AddressBytesToStringRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AddressBytesToStringRequest>): AddressBytesToStringRequest {
    const message = createBaseAddressBytesToStringRequest();
    message.addressBytes = object.addressBytes ?? new Uint8Array();
    return message;
  },
};

function createBaseAddressBytesToStringResponse(): AddressBytesToStringResponse {
  return { addressString: "" };
}

export const AddressBytesToStringResponse = {
  encode(message: AddressBytesToStringResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addressString !== "") {
      writer.uint32(10).string(message.addressString);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddressBytesToStringResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressBytesToStringResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.addressString = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddressBytesToStringResponse {
    return { addressString: isSet(object.addressString) ? String(object.addressString) : "" };
  },

  toJSON(message: AddressBytesToStringResponse): unknown {
    const obj: any = {};
    message.addressString !== undefined && (obj.addressString = message.addressString);
    return obj;
  },

  create(base?: DeepPartial<AddressBytesToStringResponse>): AddressBytesToStringResponse {
    return AddressBytesToStringResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AddressBytesToStringResponse>): AddressBytesToStringResponse {
    const message = createBaseAddressBytesToStringResponse();
    message.addressString = object.addressString ?? "";
    return message;
  },
};

function createBaseAddressStringToBytesRequest(): AddressStringToBytesRequest {
  return { addressString: "" };
}

export const AddressStringToBytesRequest = {
  encode(message: AddressStringToBytesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addressString !== "") {
      writer.uint32(10).string(message.addressString);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddressStringToBytesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressStringToBytesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.addressString = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddressStringToBytesRequest {
    return { addressString: isSet(object.addressString) ? String(object.addressString) : "" };
  },

  toJSON(message: AddressStringToBytesRequest): unknown {
    const obj: any = {};
    message.addressString !== undefined && (obj.addressString = message.addressString);
    return obj;
  },

  create(base?: DeepPartial<AddressStringToBytesRequest>): AddressStringToBytesRequest {
    return AddressStringToBytesRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AddressStringToBytesRequest>): AddressStringToBytesRequest {
    const message = createBaseAddressStringToBytesRequest();
    message.addressString = object.addressString ?? "";
    return message;
  },
};

function createBaseAddressStringToBytesResponse(): AddressStringToBytesResponse {
  return { addressBytes: new Uint8Array() };
}

export const AddressStringToBytesResponse = {
  encode(message: AddressStringToBytesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addressBytes.length !== 0) {
      writer.uint32(10).bytes(message.addressBytes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddressStringToBytesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressStringToBytesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.addressBytes = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddressStringToBytesResponse {
    return { addressBytes: isSet(object.addressBytes) ? bytesFromBase64(object.addressBytes) : new Uint8Array() };
  },

  toJSON(message: AddressStringToBytesResponse): unknown {
    const obj: any = {};
    message.addressBytes !== undefined &&
      (obj.addressBytes = base64FromBytes(
        message.addressBytes !== undefined ? message.addressBytes : new Uint8Array(),
      ));
    return obj;
  },

  create(base?: DeepPartial<AddressStringToBytesResponse>): AddressStringToBytesResponse {
    return AddressStringToBytesResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AddressStringToBytesResponse>): AddressStringToBytesResponse {
    const message = createBaseAddressStringToBytesResponse();
    message.addressBytes = object.addressBytes ?? new Uint8Array();
    return message;
  },
};

function createBaseQueryAccountAddressByIDRequest(): QueryAccountAddressByIDRequest {
  return { id: Long.ZERO, accountId: Long.UZERO };
}

export const QueryAccountAddressByIDRequest = {
  encode(message: QueryAccountAddressByIDRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).int64(message.id);
    }
    if (!message.accountId.isZero()) {
      writer.uint32(16).uint64(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountAddressByIDRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountAddressByIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int64() as Long;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.accountId = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAccountAddressByIDRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.ZERO,
      accountId: isSet(object.accountId) ? Long.fromValue(object.accountId) : Long.UZERO,
    };
  },

  toJSON(message: QueryAccountAddressByIDRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.ZERO).toString());
    message.accountId !== undefined && (obj.accountId = (message.accountId || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<QueryAccountAddressByIDRequest>): QueryAccountAddressByIDRequest {
    return QueryAccountAddressByIDRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAccountAddressByIDRequest>): QueryAccountAddressByIDRequest {
    const message = createBaseQueryAccountAddressByIDRequest();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.ZERO;
    message.accountId = (object.accountId !== undefined && object.accountId !== null)
      ? Long.fromValue(object.accountId)
      : Long.UZERO;
    return message;
  },
};

function createBaseQueryAccountAddressByIDResponse(): QueryAccountAddressByIDResponse {
  return { accountAddress: "" };
}

export const QueryAccountAddressByIDResponse = {
  encode(message: QueryAccountAddressByIDResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountAddressByIDResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountAddressByIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accountAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAccountAddressByIDResponse {
    return { accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "" };
  },

  toJSON(message: QueryAccountAddressByIDResponse): unknown {
    const obj: any = {};
    message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
    return obj;
  },

  create(base?: DeepPartial<QueryAccountAddressByIDResponse>): QueryAccountAddressByIDResponse {
    return QueryAccountAddressByIDResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAccountAddressByIDResponse>): QueryAccountAddressByIDResponse {
    const message = createBaseQueryAccountAddressByIDResponse();
    message.accountAddress = object.accountAddress ?? "";
    return message;
  },
};

function createBaseQueryAccountInfoRequest(): QueryAccountInfoRequest {
  return { address: "" };
}

export const QueryAccountInfoRequest = {
  encode(message: QueryAccountInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountInfoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountInfoRequest();
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

  fromJSON(object: any): QueryAccountInfoRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryAccountInfoRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<QueryAccountInfoRequest>): QueryAccountInfoRequest {
    return QueryAccountInfoRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAccountInfoRequest>): QueryAccountInfoRequest {
    const message = createBaseQueryAccountInfoRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryAccountInfoResponse(): QueryAccountInfoResponse {
  return { info: undefined };
}

export const QueryAccountInfoResponse = {
  encode(message: QueryAccountInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.info !== undefined) {
      BaseAccount.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.info = BaseAccount.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAccountInfoResponse {
    return { info: isSet(object.info) ? BaseAccount.fromJSON(object.info) : undefined };
  },

  toJSON(message: QueryAccountInfoResponse): unknown {
    const obj: any = {};
    message.info !== undefined && (obj.info = message.info ? BaseAccount.toJSON(message.info) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAccountInfoResponse>): QueryAccountInfoResponse {
    return QueryAccountInfoResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAccountInfoResponse>): QueryAccountInfoResponse {
    const message = createBaseQueryAccountInfoResponse();
    message.info = (object.info !== undefined && object.info !== null)
      ? BaseAccount.fromPartial(object.info)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * Accounts returns all the existing accounts.
   *
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   *
   * Since: cosmos-sdk 0.43
   */
  Accounts(request: QueryAccountsRequest): Promise<QueryAccountsResponse>;
  /** Account returns account details based on address. */
  Account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
  /**
   * AccountAddressByID returns account address based on account number.
   *
   * Since: cosmos-sdk 0.46.2
   */
  AccountAddressByID(request: QueryAccountAddressByIDRequest): Promise<QueryAccountAddressByIDResponse>;
  /** Params queries all parameters. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * ModuleAccounts returns all the existing module accounts.
   *
   * Since: cosmos-sdk 0.46
   */
  ModuleAccounts(request: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponse>;
  /** ModuleAccountByName returns the module account info by module name */
  ModuleAccountByName(request: QueryModuleAccountByNameRequest): Promise<QueryModuleAccountByNameResponse>;
  /**
   * Bech32Prefix queries bech32Prefix
   *
   * Since: cosmos-sdk 0.46
   */
  Bech32Prefix(request: Bech32PrefixRequest): Promise<Bech32PrefixResponse>;
  /**
   * AddressBytesToString converts Account Address bytes to string
   *
   * Since: cosmos-sdk 0.46
   */
  AddressBytesToString(request: AddressBytesToStringRequest): Promise<AddressBytesToStringResponse>;
  /**
   * AddressStringToBytes converts Address string to bytes
   *
   * Since: cosmos-sdk 0.46
   */
  AddressStringToBytes(request: AddressStringToBytesRequest): Promise<AddressStringToBytesResponse>;
  /**
   * AccountInfo queries account info which is common to all account types.
   *
   * Since: cosmos-sdk 0.47
   */
  AccountInfo(request: QueryAccountInfoRequest): Promise<QueryAccountInfoResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "cosmos.auth.v1beta1.Query";
    this.rpc = rpc;
    this.Accounts = this.Accounts.bind(this);
    this.Account = this.Account.bind(this);
    this.AccountAddressByID = this.AccountAddressByID.bind(this);
    this.Params = this.Params.bind(this);
    this.ModuleAccounts = this.ModuleAccounts.bind(this);
    this.ModuleAccountByName = this.ModuleAccountByName.bind(this);
    this.Bech32Prefix = this.Bech32Prefix.bind(this);
    this.AddressBytesToString = this.AddressBytesToString.bind(this);
    this.AddressStringToBytes = this.AddressStringToBytes.bind(this);
    this.AccountInfo = this.AccountInfo.bind(this);
  }
  Accounts(request: QueryAccountsRequest): Promise<QueryAccountsResponse> {
    const data = QueryAccountsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Accounts", data);
    return promise.then((data) => QueryAccountsResponse.decode(_m0.Reader.create(data)));
  }

  Account(request: QueryAccountRequest): Promise<QueryAccountResponse> {
    const data = QueryAccountRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Account", data);
    return promise.then((data) => QueryAccountResponse.decode(_m0.Reader.create(data)));
  }

  AccountAddressByID(request: QueryAccountAddressByIDRequest): Promise<QueryAccountAddressByIDResponse> {
    const data = QueryAccountAddressByIDRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AccountAddressByID", data);
    return promise.then((data) => QueryAccountAddressByIDResponse.decode(_m0.Reader.create(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  ModuleAccounts(request: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponse> {
    const data = QueryModuleAccountsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ModuleAccounts", data);
    return promise.then((data) => QueryModuleAccountsResponse.decode(_m0.Reader.create(data)));
  }

  ModuleAccountByName(request: QueryModuleAccountByNameRequest): Promise<QueryModuleAccountByNameResponse> {
    const data = QueryModuleAccountByNameRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ModuleAccountByName", data);
    return promise.then((data) => QueryModuleAccountByNameResponse.decode(_m0.Reader.create(data)));
  }

  Bech32Prefix(request: Bech32PrefixRequest): Promise<Bech32PrefixResponse> {
    const data = Bech32PrefixRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Bech32Prefix", data);
    return promise.then((data) => Bech32PrefixResponse.decode(_m0.Reader.create(data)));
  }

  AddressBytesToString(request: AddressBytesToStringRequest): Promise<AddressBytesToStringResponse> {
    const data = AddressBytesToStringRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddressBytesToString", data);
    return promise.then((data) => AddressBytesToStringResponse.decode(_m0.Reader.create(data)));
  }

  AddressStringToBytes(request: AddressStringToBytesRequest): Promise<AddressStringToBytesResponse> {
    const data = AddressStringToBytesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddressStringToBytes", data);
    return promise.then((data) => AddressStringToBytesResponse.decode(_m0.Reader.create(data)));
  }

  AccountInfo(request: QueryAccountInfoRequest): Promise<QueryAccountInfoResponse> {
    const data = QueryAccountInfoRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AccountInfo", data);
    return promise.then((data) => QueryAccountInfoResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
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
