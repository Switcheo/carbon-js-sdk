/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Any } from "../../../google/protobuf/any";
import { Params, BaseAccount } from "./auth";

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
export interface QueryParamsRequest {}

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
export interface QueryModuleAccountsRequest {}

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
export interface Bech32PrefixRequest {}

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

const baseQueryAccountsRequest: object = {};

export const QueryAccountsRequest = {
  encode(
    message: QueryAccountsRequest,
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
  ): QueryAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAccountsRequest } as QueryAccountsRequest;
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

  fromJSON(object: any): QueryAccountsRequest {
    const message = { ...baseQueryAccountsRequest } as QueryAccountsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAccountsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAccountsRequest>): QueryAccountsRequest {
    const message = { ...baseQueryAccountsRequest } as QueryAccountsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAccountsResponse: object = {};

export const QueryAccountsResponse = {
  encode(
    message: QueryAccountsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.accounts) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAccountsResponse } as QueryAccountsResponse;
    message.accounts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(Any.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAccountsResponse {
    const message = { ...baseQueryAccountsResponse } as QueryAccountsResponse;
    message.accounts = (object.accounts ?? []).map((e: any) => Any.fromJSON(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAccountsResponse): unknown {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) =>
        e ? Any.toJSON(e) : undefined
      );
    } else {
      obj.accounts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAccountsResponse>
  ): QueryAccountsResponse {
    const message = { ...baseQueryAccountsResponse } as QueryAccountsResponse;
    message.accounts = (object.accounts ?? []).map((e) => Any.fromPartial(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAccountRequest: object = { address: "" };

export const QueryAccountRequest = {
  encode(
    message: QueryAccountRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAccountRequest } as QueryAccountRequest;
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

  fromJSON(object: any): QueryAccountRequest {
    const message = { ...baseQueryAccountRequest } as QueryAccountRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: QueryAccountRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAccountRequest>): QueryAccountRequest {
    const message = { ...baseQueryAccountRequest } as QueryAccountRequest;
    message.address = object.address ?? "";
    return message;
  },
};

const baseQueryAccountResponse: object = {};

export const QueryAccountResponse = {
  encode(
    message: QueryAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.account !== undefined) {
      Any.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAccountResponse } as QueryAccountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountResponse {
    const message = { ...baseQueryAccountResponse } as QueryAccountResponse;
    message.account =
      object.account !== undefined && object.account !== null
        ? Any.fromJSON(object.account)
        : undefined;
    return message;
  },

  toJSON(message: QueryAccountResponse): unknown {
    const obj: any = {};
    message.account !== undefined &&
      (obj.account = message.account ? Any.toJSON(message.account) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAccountResponse>): QueryAccountResponse {
    const message = { ...baseQueryAccountResponse } as QueryAccountResponse;
    message.account =
      object.account !== undefined && object.account !== null
        ? Any.fromPartial(object.account)
        : undefined;
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

const baseQueryModuleAccountsRequest: object = {};

export const QueryModuleAccountsRequest = {
  encode(
    _: QueryModuleAccountsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryModuleAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryModuleAccountsRequest,
    } as QueryModuleAccountsRequest;
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

  fromJSON(_: any): QueryModuleAccountsRequest {
    const message = {
      ...baseQueryModuleAccountsRequest,
    } as QueryModuleAccountsRequest;
    return message;
  },

  toJSON(_: QueryModuleAccountsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryModuleAccountsRequest>
  ): QueryModuleAccountsRequest {
    const message = {
      ...baseQueryModuleAccountsRequest,
    } as QueryModuleAccountsRequest;
    return message;
  },
};

const baseQueryModuleAccountsResponse: object = {};

export const QueryModuleAccountsResponse = {
  encode(
    message: QueryModuleAccountsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.accounts) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryModuleAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryModuleAccountsResponse,
    } as QueryModuleAccountsResponse;
    message.accounts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryModuleAccountsResponse {
    const message = {
      ...baseQueryModuleAccountsResponse,
    } as QueryModuleAccountsResponse;
    message.accounts = (object.accounts ?? []).map((e: any) => Any.fromJSON(e));
    return message;
  },

  toJSON(message: QueryModuleAccountsResponse): unknown {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) =>
        e ? Any.toJSON(e) : undefined
      );
    } else {
      obj.accounts = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryModuleAccountsResponse>
  ): QueryModuleAccountsResponse {
    const message = {
      ...baseQueryModuleAccountsResponse,
    } as QueryModuleAccountsResponse;
    message.accounts = (object.accounts ?? []).map((e) => Any.fromPartial(e));
    return message;
  },
};

const baseQueryModuleAccountByNameRequest: object = { name: "" };

export const QueryModuleAccountByNameRequest = {
  encode(
    message: QueryModuleAccountByNameRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryModuleAccountByNameRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryModuleAccountByNameRequest,
    } as QueryModuleAccountByNameRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryModuleAccountByNameRequest {
    const message = {
      ...baseQueryModuleAccountByNameRequest,
    } as QueryModuleAccountByNameRequest;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    return message;
  },

  toJSON(message: QueryModuleAccountByNameRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryModuleAccountByNameRequest>
  ): QueryModuleAccountByNameRequest {
    const message = {
      ...baseQueryModuleAccountByNameRequest,
    } as QueryModuleAccountByNameRequest;
    message.name = object.name ?? "";
    return message;
  },
};

const baseQueryModuleAccountByNameResponse: object = {};

export const QueryModuleAccountByNameResponse = {
  encode(
    message: QueryModuleAccountByNameResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.account !== undefined) {
      Any.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryModuleAccountByNameResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryModuleAccountByNameResponse,
    } as QueryModuleAccountByNameResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryModuleAccountByNameResponse {
    const message = {
      ...baseQueryModuleAccountByNameResponse,
    } as QueryModuleAccountByNameResponse;
    message.account =
      object.account !== undefined && object.account !== null
        ? Any.fromJSON(object.account)
        : undefined;
    return message;
  },

  toJSON(message: QueryModuleAccountByNameResponse): unknown {
    const obj: any = {};
    message.account !== undefined &&
      (obj.account = message.account ? Any.toJSON(message.account) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryModuleAccountByNameResponse>
  ): QueryModuleAccountByNameResponse {
    const message = {
      ...baseQueryModuleAccountByNameResponse,
    } as QueryModuleAccountByNameResponse;
    message.account =
      object.account !== undefined && object.account !== null
        ? Any.fromPartial(object.account)
        : undefined;
    return message;
  },
};

const baseBech32PrefixRequest: object = {};

export const Bech32PrefixRequest = {
  encode(
    _: Bech32PrefixRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bech32PrefixRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBech32PrefixRequest } as Bech32PrefixRequest;
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

  fromJSON(_: any): Bech32PrefixRequest {
    const message = { ...baseBech32PrefixRequest } as Bech32PrefixRequest;
    return message;
  },

  toJSON(_: Bech32PrefixRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<Bech32PrefixRequest>): Bech32PrefixRequest {
    const message = { ...baseBech32PrefixRequest } as Bech32PrefixRequest;
    return message;
  },
};

const baseBech32PrefixResponse: object = { bech32Prefix: "" };

export const Bech32PrefixResponse = {
  encode(
    message: Bech32PrefixResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bech32Prefix !== "") {
      writer.uint32(10).string(message.bech32Prefix);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Bech32PrefixResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBech32PrefixResponse } as Bech32PrefixResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bech32Prefix = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Bech32PrefixResponse {
    const message = { ...baseBech32PrefixResponse } as Bech32PrefixResponse;
    message.bech32Prefix =
      object.bech32Prefix !== undefined && object.bech32Prefix !== null
        ? String(object.bech32Prefix)
        : "";
    return message;
  },

  toJSON(message: Bech32PrefixResponse): unknown {
    const obj: any = {};
    message.bech32Prefix !== undefined &&
      (obj.bech32Prefix = message.bech32Prefix);
    return obj;
  },

  fromPartial(object: DeepPartial<Bech32PrefixResponse>): Bech32PrefixResponse {
    const message = { ...baseBech32PrefixResponse } as Bech32PrefixResponse;
    message.bech32Prefix = object.bech32Prefix ?? "";
    return message;
  },
};

const baseAddressBytesToStringRequest: object = {};

export const AddressBytesToStringRequest = {
  encode(
    message: AddressBytesToStringRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.addressBytes.length !== 0) {
      writer.uint32(10).bytes(message.addressBytes);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddressBytesToStringRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddressBytesToStringRequest,
    } as AddressBytesToStringRequest;
    message.addressBytes = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddressBytesToStringRequest {
    const message = {
      ...baseAddressBytesToStringRequest,
    } as AddressBytesToStringRequest;
    message.addressBytes =
      object.addressBytes !== undefined && object.addressBytes !== null
        ? bytesFromBase64(object.addressBytes)
        : new Uint8Array();
    return message;
  },

  toJSON(message: AddressBytesToStringRequest): unknown {
    const obj: any = {};
    message.addressBytes !== undefined &&
      (obj.addressBytes = base64FromBytes(
        message.addressBytes !== undefined
          ? message.addressBytes
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<AddressBytesToStringRequest>
  ): AddressBytesToStringRequest {
    const message = {
      ...baseAddressBytesToStringRequest,
    } as AddressBytesToStringRequest;
    message.addressBytes = object.addressBytes ?? new Uint8Array();
    return message;
  },
};

const baseAddressBytesToStringResponse: object = { addressString: "" };

export const AddressBytesToStringResponse = {
  encode(
    message: AddressBytesToStringResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.addressString !== "") {
      writer.uint32(10).string(message.addressString);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddressBytesToStringResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddressBytesToStringResponse,
    } as AddressBytesToStringResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressString = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddressBytesToStringResponse {
    const message = {
      ...baseAddressBytesToStringResponse,
    } as AddressBytesToStringResponse;
    message.addressString =
      object.addressString !== undefined && object.addressString !== null
        ? String(object.addressString)
        : "";
    return message;
  },

  toJSON(message: AddressBytesToStringResponse): unknown {
    const obj: any = {};
    message.addressString !== undefined &&
      (obj.addressString = message.addressString);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AddressBytesToStringResponse>
  ): AddressBytesToStringResponse {
    const message = {
      ...baseAddressBytesToStringResponse,
    } as AddressBytesToStringResponse;
    message.addressString = object.addressString ?? "";
    return message;
  },
};

const baseAddressStringToBytesRequest: object = { addressString: "" };

export const AddressStringToBytesRequest = {
  encode(
    message: AddressStringToBytesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.addressString !== "") {
      writer.uint32(10).string(message.addressString);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddressStringToBytesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddressStringToBytesRequest,
    } as AddressStringToBytesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressString = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddressStringToBytesRequest {
    const message = {
      ...baseAddressStringToBytesRequest,
    } as AddressStringToBytesRequest;
    message.addressString =
      object.addressString !== undefined && object.addressString !== null
        ? String(object.addressString)
        : "";
    return message;
  },

  toJSON(message: AddressStringToBytesRequest): unknown {
    const obj: any = {};
    message.addressString !== undefined &&
      (obj.addressString = message.addressString);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AddressStringToBytesRequest>
  ): AddressStringToBytesRequest {
    const message = {
      ...baseAddressStringToBytesRequest,
    } as AddressStringToBytesRequest;
    message.addressString = object.addressString ?? "";
    return message;
  },
};

const baseAddressStringToBytesResponse: object = {};

export const AddressStringToBytesResponse = {
  encode(
    message: AddressStringToBytesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.addressBytes.length !== 0) {
      writer.uint32(10).bytes(message.addressBytes);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddressStringToBytesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddressStringToBytesResponse,
    } as AddressStringToBytesResponse;
    message.addressBytes = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddressStringToBytesResponse {
    const message = {
      ...baseAddressStringToBytesResponse,
    } as AddressStringToBytesResponse;
    message.addressBytes =
      object.addressBytes !== undefined && object.addressBytes !== null
        ? bytesFromBase64(object.addressBytes)
        : new Uint8Array();
    return message;
  },

  toJSON(message: AddressStringToBytesResponse): unknown {
    const obj: any = {};
    message.addressBytes !== undefined &&
      (obj.addressBytes = base64FromBytes(
        message.addressBytes !== undefined
          ? message.addressBytes
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<AddressStringToBytesResponse>
  ): AddressStringToBytesResponse {
    const message = {
      ...baseAddressStringToBytesResponse,
    } as AddressStringToBytesResponse;
    message.addressBytes = object.addressBytes ?? new Uint8Array();
    return message;
  },
};

const baseQueryAccountAddressByIDRequest: object = {
  id: Long.ZERO,
  accountId: Long.UZERO,
};

export const QueryAccountAddressByIDRequest = {
  encode(
    message: QueryAccountAddressByIDRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).int64(message.id);
    }
    if (!message.accountId.isZero()) {
      writer.uint32(16).uint64(message.accountId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountAddressByIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAccountAddressByIDRequest,
    } as QueryAccountAddressByIDRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int64() as Long;
          break;
        case 2:
          message.accountId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountAddressByIDRequest {
    const message = {
      ...baseQueryAccountAddressByIDRequest,
    } as QueryAccountAddressByIDRequest;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromString(object.id)
        : Long.ZERO;
    message.accountId =
      object.accountId !== undefined && object.accountId !== null
        ? Long.fromString(object.accountId)
        : Long.UZERO;
    return message;
  },

  toJSON(message: QueryAccountAddressByIDRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.ZERO).toString());
    message.accountId !== undefined &&
      (obj.accountId = (message.accountId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAccountAddressByIDRequest>
  ): QueryAccountAddressByIDRequest {
    const message = {
      ...baseQueryAccountAddressByIDRequest,
    } as QueryAccountAddressByIDRequest;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.ZERO;
    message.accountId =
      object.accountId !== undefined && object.accountId !== null
        ? Long.fromValue(object.accountId)
        : Long.UZERO;
    return message;
  },
};

const baseQueryAccountAddressByIDResponse: object = { accountAddress: "" };

export const QueryAccountAddressByIDResponse = {
  encode(
    message: QueryAccountAddressByIDResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountAddressByIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAccountAddressByIDResponse,
    } as QueryAccountAddressByIDResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountAddressByIDResponse {
    const message = {
      ...baseQueryAccountAddressByIDResponse,
    } as QueryAccountAddressByIDResponse;
    message.accountAddress =
      object.accountAddress !== undefined && object.accountAddress !== null
        ? String(object.accountAddress)
        : "";
    return message;
  },

  toJSON(message: QueryAccountAddressByIDResponse): unknown {
    const obj: any = {};
    message.accountAddress !== undefined &&
      (obj.accountAddress = message.accountAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAccountAddressByIDResponse>
  ): QueryAccountAddressByIDResponse {
    const message = {
      ...baseQueryAccountAddressByIDResponse,
    } as QueryAccountAddressByIDResponse;
    message.accountAddress = object.accountAddress ?? "";
    return message;
  },
};

const baseQueryAccountInfoRequest: object = { address: "" };

export const QueryAccountInfoRequest = {
  encode(
    message: QueryAccountInfoRequest,
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
  ): QueryAccountInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAccountInfoRequest,
    } as QueryAccountInfoRequest;
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

  fromJSON(object: any): QueryAccountInfoRequest {
    const message = {
      ...baseQueryAccountInfoRequest,
    } as QueryAccountInfoRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: QueryAccountInfoRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAccountInfoRequest>
  ): QueryAccountInfoRequest {
    const message = {
      ...baseQueryAccountInfoRequest,
    } as QueryAccountInfoRequest;
    message.address = object.address ?? "";
    return message;
  },
};

const baseQueryAccountInfoResponse: object = {};

export const QueryAccountInfoResponse = {
  encode(
    message: QueryAccountInfoResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.info !== undefined) {
      BaseAccount.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAccountInfoResponse,
    } as QueryAccountInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = BaseAccount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountInfoResponse {
    const message = {
      ...baseQueryAccountInfoResponse,
    } as QueryAccountInfoResponse;
    message.info =
      object.info !== undefined && object.info !== null
        ? BaseAccount.fromJSON(object.info)
        : undefined;
    return message;
  },

  toJSON(message: QueryAccountInfoResponse): unknown {
    const obj: any = {};
    message.info !== undefined &&
      (obj.info = message.info ? BaseAccount.toJSON(message.info) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAccountInfoResponse>
  ): QueryAccountInfoResponse {
    const message = {
      ...baseQueryAccountInfoResponse,
    } as QueryAccountInfoResponse;
    message.info =
      object.info !== undefined && object.info !== null
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
  AccountAddressByID(
    request: QueryAccountAddressByIDRequest
  ): Promise<QueryAccountAddressByIDResponse>;
  /** Params queries all parameters. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * ModuleAccounts returns all the existing module accounts.
   *
   * Since: cosmos-sdk 0.46
   */
  ModuleAccounts(
    request: QueryModuleAccountsRequest
  ): Promise<QueryModuleAccountsResponse>;
  /** ModuleAccountByName returns the module account info by module name */
  ModuleAccountByName(
    request: QueryModuleAccountByNameRequest
  ): Promise<QueryModuleAccountByNameResponse>;
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
  AddressBytesToString(
    request: AddressBytesToStringRequest
  ): Promise<AddressBytesToStringResponse>;
  /**
   * AddressStringToBytes converts Address string to bytes
   *
   * Since: cosmos-sdk 0.46
   */
  AddressStringToBytes(
    request: AddressStringToBytesRequest
  ): Promise<AddressStringToBytesResponse>;
  /**
   * AccountInfo queries account info which is common to all account types.
   *
   * Since: cosmos-sdk 0.47
   */
  AccountInfo(
    request: QueryAccountInfoRequest
  ): Promise<QueryAccountInfoResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
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
    const promise = this.rpc.request(
      "cosmos.auth.v1beta1.Query",
      "Accounts",
      data
    );
    return promise.then((data) =>
      QueryAccountsResponse.decode(new _m0.Reader(data))
    );
  }

  Account(request: QueryAccountRequest): Promise<QueryAccountResponse> {
    const data = QueryAccountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.auth.v1beta1.Query",
      "Account",
      data
    );
    return promise.then((data) =>
      QueryAccountResponse.decode(new _m0.Reader(data))
    );
  }

  AccountAddressByID(
    request: QueryAccountAddressByIDRequest
  ): Promise<QueryAccountAddressByIDResponse> {
    const data = QueryAccountAddressByIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.auth.v1beta1.Query",
      "AccountAddressByID",
      data
    );
    return promise.then((data) =>
      QueryAccountAddressByIDResponse.decode(new _m0.Reader(data))
    );
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.auth.v1beta1.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  ModuleAccounts(
    request: QueryModuleAccountsRequest
  ): Promise<QueryModuleAccountsResponse> {
    const data = QueryModuleAccountsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.auth.v1beta1.Query",
      "ModuleAccounts",
      data
    );
    return promise.then((data) =>
      QueryModuleAccountsResponse.decode(new _m0.Reader(data))
    );
  }

  ModuleAccountByName(
    request: QueryModuleAccountByNameRequest
  ): Promise<QueryModuleAccountByNameResponse> {
    const data = QueryModuleAccountByNameRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.auth.v1beta1.Query",
      "ModuleAccountByName",
      data
    );
    return promise.then((data) =>
      QueryModuleAccountByNameResponse.decode(new _m0.Reader(data))
    );
  }

  Bech32Prefix(request: Bech32PrefixRequest): Promise<Bech32PrefixResponse> {
    const data = Bech32PrefixRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.auth.v1beta1.Query",
      "Bech32Prefix",
      data
    );
    return promise.then((data) =>
      Bech32PrefixResponse.decode(new _m0.Reader(data))
    );
  }

  AddressBytesToString(
    request: AddressBytesToStringRequest
  ): Promise<AddressBytesToStringResponse> {
    const data = AddressBytesToStringRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.auth.v1beta1.Query",
      "AddressBytesToString",
      data
    );
    return promise.then((data) =>
      AddressBytesToStringResponse.decode(new _m0.Reader(data))
    );
  }

  AddressStringToBytes(
    request: AddressStringToBytesRequest
  ): Promise<AddressStringToBytesResponse> {
    const data = AddressStringToBytesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.auth.v1beta1.Query",
      "AddressStringToBytes",
      data
    );
    return promise.then((data) =>
      AddressStringToBytesResponse.decode(new _m0.Reader(data))
    );
  }

  AccountInfo(
    request: QueryAccountInfoRequest
  ): Promise<QueryAccountInfoResponse> {
    const data = QueryAccountInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.auth.v1beta1.Query",
      "AccountInfo",
      data
    );
    return promise.then((data) =>
      QueryAccountInfoResponse.decode(new _m0.Reader(data))
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

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
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
