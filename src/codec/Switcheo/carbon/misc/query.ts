/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Order } from "../order/order";
import { Block } from "./block";
import { MessageType } from "./message_type";
import { Transaction } from "./transaction";

export const protobufPackage = "Switcheo.carbon.misc";

export interface QuerySearchRequest {
  keyword: string;
}

export interface QuerySearchResponse {
  transactions: Transaction[];
  orders: Order[];
  messageTypes: string[];
  blocks: Block[];
  addresses: Address[];
}

export interface QueryAllMessageTypeRequest {
}

export interface QueryAllMessageTypeResponse {
  messageTypes: MessageType[];
}

export interface QueryAllTransactionRequest {
  hash: string;
  address: string;
  msgTypeFilters: string[];
  pagination?: PageRequest;
}

export interface QueryAllTransactionResponse {
  transactions: Transaction[];
  pagination?: PageResponse;
}

export interface QueryAllBlockRequest {
  pagination?: PageRequest;
}

export interface QueryAllBlockResponse {
  blocks: Block[];
  pagination?: PageResponse;
}

export interface QueryAllModuleAddressRequest {
}

export interface QueryAllModuleAddressResponse {
  addresses: { [key: string]: string };
}

export interface QueryAllModuleAddressResponse_AddressesEntry {
  key: string;
  value: string;
}

export interface QueryModuleAddressRequest {
  module: string;
}

export interface QueryModuleAddressResponse {
  address: string;
}

export interface Address {
  name: string;
  address: string;
  type: string;
}

function createBaseQuerySearchRequest(): QuerySearchRequest {
  return { keyword: "" };
}

export const QuerySearchRequest = {
  encode(message: QuerySearchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyword !== "") {
      writer.uint32(10).string(message.keyword);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySearchRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySearchRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyword = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuerySearchRequest {
    return { keyword: isSet(object.keyword) ? String(object.keyword) : "" };
  },

  toJSON(message: QuerySearchRequest): unknown {
    const obj: any = {};
    message.keyword !== undefined && (obj.keyword = message.keyword);
    return obj;
  },

  create(base?: DeepPartial<QuerySearchRequest>): QuerySearchRequest {
    return QuerySearchRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QuerySearchRequest>): QuerySearchRequest {
    const message = createBaseQuerySearchRequest();
    message.keyword = object.keyword ?? "";
    return message;
  },
};

function createBaseQuerySearchResponse(): QuerySearchResponse {
  return { transactions: [], orders: [], messageTypes: [], blocks: [], addresses: [] };
}

export const QuerySearchResponse = {
  encode(message: QuerySearchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.transactions) {
      Transaction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.messageTypes) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.blocks) {
      Block.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.addresses) {
      Address.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySearchResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySearchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transactions.push(Transaction.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.orders.push(Order.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.messageTypes.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.blocks.push(Block.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.addresses.push(Address.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuerySearchResponse {
    return {
      transactions: Array.isArray(object?.transactions)
        ? object.transactions.map((e: any) => Transaction.fromJSON(e))
        : [],
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => Order.fromJSON(e)) : [],
      messageTypes: Array.isArray(object?.messageTypes) ? object.messageTypes.map((e: any) => String(e)) : [],
      blocks: Array.isArray(object?.blocks) ? object.blocks.map((e: any) => Block.fromJSON(e)) : [],
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => Address.fromJSON(e)) : [],
    };
  },

  toJSON(message: QuerySearchResponse): unknown {
    const obj: any = {};
    if (message.transactions) {
      obj.transactions = message.transactions.map((e) => e ? Transaction.toJSON(e) : undefined);
    } else {
      obj.transactions = [];
    }
    if (message.orders) {
      obj.orders = message.orders.map((e) => e ? Order.toJSON(e) : undefined);
    } else {
      obj.orders = [];
    }
    if (message.messageTypes) {
      obj.messageTypes = message.messageTypes.map((e) => e);
    } else {
      obj.messageTypes = [];
    }
    if (message.blocks) {
      obj.blocks = message.blocks.map((e) => e ? Block.toJSON(e) : undefined);
    } else {
      obj.blocks = [];
    }
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e ? Address.toJSON(e) : undefined);
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QuerySearchResponse>): QuerySearchResponse {
    return QuerySearchResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QuerySearchResponse>): QuerySearchResponse {
    const message = createBaseQuerySearchResponse();
    message.transactions = object.transactions?.map((e) => Transaction.fromPartial(e)) || [];
    message.orders = object.orders?.map((e) => Order.fromPartial(e)) || [];
    message.messageTypes = object.messageTypes?.map((e) => e) || [];
    message.blocks = object.blocks?.map((e) => Block.fromPartial(e)) || [];
    message.addresses = object.addresses?.map((e) => Address.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryAllMessageTypeRequest(): QueryAllMessageTypeRequest {
  return {};
}

export const QueryAllMessageTypeRequest = {
  encode(_: QueryAllMessageTypeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMessageTypeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMessageTypeRequest();
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

  fromJSON(_: any): QueryAllMessageTypeRequest {
    return {};
  },

  toJSON(_: QueryAllMessageTypeRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryAllMessageTypeRequest>): QueryAllMessageTypeRequest {
    return QueryAllMessageTypeRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryAllMessageTypeRequest>): QueryAllMessageTypeRequest {
    const message = createBaseQueryAllMessageTypeRequest();
    return message;
  },
};

function createBaseQueryAllMessageTypeResponse(): QueryAllMessageTypeResponse {
  return { messageTypes: [] };
}

export const QueryAllMessageTypeResponse = {
  encode(message: QueryAllMessageTypeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.messageTypes) {
      MessageType.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMessageTypeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMessageTypeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.messageTypes.push(MessageType.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllMessageTypeResponse {
    return {
      messageTypes: Array.isArray(object?.messageTypes)
        ? object.messageTypes.map((e: any) => MessageType.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryAllMessageTypeResponse): unknown {
    const obj: any = {};
    if (message.messageTypes) {
      obj.messageTypes = message.messageTypes.map((e) => e ? MessageType.toJSON(e) : undefined);
    } else {
      obj.messageTypes = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryAllMessageTypeResponse>): QueryAllMessageTypeResponse {
    return QueryAllMessageTypeResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllMessageTypeResponse>): QueryAllMessageTypeResponse {
    const message = createBaseQueryAllMessageTypeResponse();
    message.messageTypes = object.messageTypes?.map((e) => MessageType.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryAllTransactionRequest(): QueryAllTransactionRequest {
  return { hash: "", address: "", msgTypeFilters: [], pagination: undefined };
}

export const QueryAllTransactionRequest = {
  encode(message: QueryAllTransactionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    for (const v of message.msgTypeFilters) {
      writer.uint32(26).string(v!);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTransactionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTransactionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hash = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.msgTypeFilters.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): QueryAllTransactionRequest {
    return {
      hash: isSet(object.hash) ? String(object.hash) : "",
      address: isSet(object.address) ? String(object.address) : "",
      msgTypeFilters: Array.isArray(object?.msgTypeFilters) ? object.msgTypeFilters.map((e: any) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllTransactionRequest): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.address !== undefined && (obj.address = message.address);
    if (message.msgTypeFilters) {
      obj.msgTypeFilters = message.msgTypeFilters.map((e) => e);
    } else {
      obj.msgTypeFilters = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllTransactionRequest>): QueryAllTransactionRequest {
    return QueryAllTransactionRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllTransactionRequest>): QueryAllTransactionRequest {
    const message = createBaseQueryAllTransactionRequest();
    message.hash = object.hash ?? "";
    message.address = object.address ?? "";
    message.msgTypeFilters = object.msgTypeFilters?.map((e) => e) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllTransactionResponse(): QueryAllTransactionResponse {
  return { transactions: [], pagination: undefined };
}

export const QueryAllTransactionResponse = {
  encode(message: QueryAllTransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.transactions) {
      Transaction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTransactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transactions.push(Transaction.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllTransactionResponse {
    return {
      transactions: Array.isArray(object?.transactions)
        ? object.transactions.map((e: any) => Transaction.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllTransactionResponse): unknown {
    const obj: any = {};
    if (message.transactions) {
      obj.transactions = message.transactions.map((e) => e ? Transaction.toJSON(e) : undefined);
    } else {
      obj.transactions = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllTransactionResponse>): QueryAllTransactionResponse {
    return QueryAllTransactionResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllTransactionResponse>): QueryAllTransactionResponse {
    const message = createBaseQueryAllTransactionResponse();
    message.transactions = object.transactions?.map((e) => Transaction.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllBlockRequest(): QueryAllBlockRequest {
  return { pagination: undefined };
}

export const QueryAllBlockRequest = {
  encode(message: QueryAllBlockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBlockRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBlockRequest();
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

  fromJSON(object: any): QueryAllBlockRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllBlockRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllBlockRequest>): QueryAllBlockRequest {
    return QueryAllBlockRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllBlockRequest>): QueryAllBlockRequest {
    const message = createBaseQueryAllBlockRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllBlockResponse(): QueryAllBlockResponse {
  return { blocks: [], pagination: undefined };
}

export const QueryAllBlockResponse = {
  encode(message: QueryAllBlockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.blocks) {
      Block.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBlockResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.blocks.push(Block.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllBlockResponse {
    return {
      blocks: Array.isArray(object?.blocks) ? object.blocks.map((e: any) => Block.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllBlockResponse): unknown {
    const obj: any = {};
    if (message.blocks) {
      obj.blocks = message.blocks.map((e) => e ? Block.toJSON(e) : undefined);
    } else {
      obj.blocks = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllBlockResponse>): QueryAllBlockResponse {
    return QueryAllBlockResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllBlockResponse>): QueryAllBlockResponse {
    const message = createBaseQueryAllBlockResponse();
    message.blocks = object.blocks?.map((e) => Block.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllModuleAddressRequest(): QueryAllModuleAddressRequest {
  return {};
}

export const QueryAllModuleAddressRequest = {
  encode(_: QueryAllModuleAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllModuleAddressRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllModuleAddressRequest();
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

  fromJSON(_: any): QueryAllModuleAddressRequest {
    return {};
  },

  toJSON(_: QueryAllModuleAddressRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryAllModuleAddressRequest>): QueryAllModuleAddressRequest {
    return QueryAllModuleAddressRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryAllModuleAddressRequest>): QueryAllModuleAddressRequest {
    const message = createBaseQueryAllModuleAddressRequest();
    return message;
  },
};

function createBaseQueryAllModuleAddressResponse(): QueryAllModuleAddressResponse {
  return { addresses: {} };
}

export const QueryAllModuleAddressResponse = {
  encode(message: QueryAllModuleAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.addresses).forEach(([key, value]) => {
      QueryAllModuleAddressResponse_AddressesEntry.encode({ key: key as any, value }, writer.uint32(10).fork())
        .ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllModuleAddressResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllModuleAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = QueryAllModuleAddressResponse_AddressesEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.addresses[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllModuleAddressResponse {
    return {
      addresses: isObject(object.addresses)
        ? Object.entries(object.addresses).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: QueryAllModuleAddressResponse): unknown {
    const obj: any = {};
    obj.addresses = {};
    if (message.addresses) {
      Object.entries(message.addresses).forEach(([k, v]) => {
        obj.addresses[k] = v;
      });
    }
    return obj;
  },

  create(base?: DeepPartial<QueryAllModuleAddressResponse>): QueryAllModuleAddressResponse {
    return QueryAllModuleAddressResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllModuleAddressResponse>): QueryAllModuleAddressResponse {
    const message = createBaseQueryAllModuleAddressResponse();
    message.addresses = Object.entries(object.addresses ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = String(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseQueryAllModuleAddressResponse_AddressesEntry(): QueryAllModuleAddressResponse_AddressesEntry {
  return { key: "", value: "" };
}

export const QueryAllModuleAddressResponse_AddressesEntry = {
  encode(message: QueryAllModuleAddressResponse_AddressesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllModuleAddressResponse_AddressesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllModuleAddressResponse_AddressesEntry();
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

  fromJSON(object: any): QueryAllModuleAddressResponse_AddressesEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: QueryAllModuleAddressResponse_AddressesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create(
    base?: DeepPartial<QueryAllModuleAddressResponse_AddressesEntry>,
  ): QueryAllModuleAddressResponse_AddressesEntry {
    return QueryAllModuleAddressResponse_AddressesEntry.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<QueryAllModuleAddressResponse_AddressesEntry>,
  ): QueryAllModuleAddressResponse_AddressesEntry {
    const message = createBaseQueryAllModuleAddressResponse_AddressesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseQueryModuleAddressRequest(): QueryModuleAddressRequest {
  return { module: "" };
}

export const QueryModuleAddressRequest = {
  encode(message: QueryModuleAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAddressRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.module = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryModuleAddressRequest {
    return { module: isSet(object.module) ? String(object.module) : "" };
  },

  toJSON(message: QueryModuleAddressRequest): unknown {
    const obj: any = {};
    message.module !== undefined && (obj.module = message.module);
    return obj;
  },

  create(base?: DeepPartial<QueryModuleAddressRequest>): QueryModuleAddressRequest {
    return QueryModuleAddressRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryModuleAddressRequest>): QueryModuleAddressRequest {
    const message = createBaseQueryModuleAddressRequest();
    message.module = object.module ?? "";
    return message;
  },
};

function createBaseQueryModuleAddressResponse(): QueryModuleAddressResponse {
  return { address: "" };
}

export const QueryModuleAddressResponse = {
  encode(message: QueryModuleAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAddressResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAddressResponse();
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

  fromJSON(object: any): QueryModuleAddressResponse {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryModuleAddressResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<QueryModuleAddressResponse>): QueryModuleAddressResponse {
    return QueryModuleAddressResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryModuleAddressResponse>): QueryModuleAddressResponse {
    const message = createBaseQueryModuleAddressResponse();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseAddress(): Address {
  return { name: "", address: "", type: "" };
}

export const Address = {
  encode(message: Address, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Address {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Address {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      address: isSet(object.address) ? String(object.address) : "",
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: Address): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.address !== undefined && (obj.address = message.address);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create(base?: DeepPartial<Address>): Address {
    return Address.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Address>): Address {
    const message = createBaseAddress();
    message.name = object.name ?? "";
    message.address = object.address ?? "";
    message.type = object.type ?? "";
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  Search(request: QuerySearchRequest): Promise<QuerySearchResponse>;
  /** Get all message types */
  MessageTypeAll(request: QueryAllMessageTypeRequest): Promise<QueryAllMessageTypeResponse>;
  /** Get all transactions */
  TransactionAll(request: QueryAllTransactionRequest): Promise<QueryAllTransactionResponse>;
  /** Get all blocks */
  BlockAll(request: QueryAllBlockRequest): Promise<QueryAllBlockResponse>;
  /** Get all module addresses */
  ModuleAddressAll(request: QueryAllModuleAddressRequest): Promise<QueryAllModuleAddressResponse>;
  /** Get module address */
  ModuleAddress(request: QueryModuleAddressRequest): Promise<QueryModuleAddressResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.misc.Query";
    this.rpc = rpc;
    this.Search = this.Search.bind(this);
    this.MessageTypeAll = this.MessageTypeAll.bind(this);
    this.TransactionAll = this.TransactionAll.bind(this);
    this.BlockAll = this.BlockAll.bind(this);
    this.ModuleAddressAll = this.ModuleAddressAll.bind(this);
    this.ModuleAddress = this.ModuleAddress.bind(this);
  }
  Search(request: QuerySearchRequest): Promise<QuerySearchResponse> {
    const data = QuerySearchRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Search", data);
    return promise.then((data) => QuerySearchResponse.decode(_m0.Reader.create(data)));
  }

  MessageTypeAll(request: QueryAllMessageTypeRequest): Promise<QueryAllMessageTypeResponse> {
    const data = QueryAllMessageTypeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MessageTypeAll", data);
    return promise.then((data) => QueryAllMessageTypeResponse.decode(_m0.Reader.create(data)));
  }

  TransactionAll(request: QueryAllTransactionRequest): Promise<QueryAllTransactionResponse> {
    const data = QueryAllTransactionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "TransactionAll", data);
    return promise.then((data) => QueryAllTransactionResponse.decode(_m0.Reader.create(data)));
  }

  BlockAll(request: QueryAllBlockRequest): Promise<QueryAllBlockResponse> {
    const data = QueryAllBlockRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "BlockAll", data);
    return promise.then((data) => QueryAllBlockResponse.decode(_m0.Reader.create(data)));
  }

  ModuleAddressAll(request: QueryAllModuleAddressRequest): Promise<QueryAllModuleAddressResponse> {
    const data = QueryAllModuleAddressRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ModuleAddressAll", data);
    return promise.then((data) => QueryAllModuleAddressResponse.decode(_m0.Reader.create(data)));
  }

  ModuleAddress(request: QueryModuleAddressRequest): Promise<QueryModuleAddressResponse> {
    const data = QueryModuleAddressRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ModuleAddress", data);
    return promise.then((data) => QueryModuleAddressResponse.decode(_m0.Reader.create(data)));
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
