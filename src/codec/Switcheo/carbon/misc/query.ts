/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Transaction } from "./transaction";
import { Order } from "../order/order";
import { Block } from "./block";
import { MessageType } from "./message_type";

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

export interface QueryAllMessageTypeRequest {}

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

export interface QueryAllModuleAddressRequest {}

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

const baseQuerySearchRequest: object = { keyword: "" };

export const QuerySearchRequest = {
  encode(
    message: QuerySearchRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.keyword !== "") {
      writer.uint32(10).string(message.keyword);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySearchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuerySearchRequest } as QuerySearchRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyword = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySearchRequest {
    const message = { ...baseQuerySearchRequest } as QuerySearchRequest;
    message.keyword =
      object.keyword !== undefined && object.keyword !== null
        ? String(object.keyword)
        : "";
    return message;
  },

  toJSON(message: QuerySearchRequest): unknown {
    const obj: any = {};
    message.keyword !== undefined && (obj.keyword = message.keyword);
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySearchRequest>): QuerySearchRequest {
    const message = { ...baseQuerySearchRequest } as QuerySearchRequest;
    message.keyword = object.keyword ?? "";
    return message;
  },
};

const baseQuerySearchResponse: object = { messageTypes: "" };

export const QuerySearchResponse = {
  encode(
    message: QuerySearchResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuerySearchResponse } as QuerySearchResponse;
    message.transactions = [];
    message.orders = [];
    message.messageTypes = [];
    message.blocks = [];
    message.addresses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transactions.push(
            Transaction.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.orders.push(Order.decode(reader, reader.uint32()));
          break;
        case 3:
          message.messageTypes.push(reader.string());
          break;
        case 4:
          message.blocks.push(Block.decode(reader, reader.uint32()));
          break;
        case 5:
          message.addresses.push(Address.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySearchResponse {
    const message = { ...baseQuerySearchResponse } as QuerySearchResponse;
    message.transactions = (object.transactions ?? []).map((e: any) =>
      Transaction.fromJSON(e)
    );
    message.orders = (object.orders ?? []).map((e: any) => Order.fromJSON(e));
    message.messageTypes = (object.messageTypes ?? []).map((e: any) =>
      String(e)
    );
    message.blocks = (object.blocks ?? []).map((e: any) => Block.fromJSON(e));
    message.addresses = (object.addresses ?? []).map((e: any) =>
      Address.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QuerySearchResponse): unknown {
    const obj: any = {};
    if (message.transactions) {
      obj.transactions = message.transactions.map((e) =>
        e ? Transaction.toJSON(e) : undefined
      );
    } else {
      obj.transactions = [];
    }
    if (message.orders) {
      obj.orders = message.orders.map((e) => (e ? Order.toJSON(e) : undefined));
    } else {
      obj.orders = [];
    }
    if (message.messageTypes) {
      obj.messageTypes = message.messageTypes.map((e) => e);
    } else {
      obj.messageTypes = [];
    }
    if (message.blocks) {
      obj.blocks = message.blocks.map((e) => (e ? Block.toJSON(e) : undefined));
    } else {
      obj.blocks = [];
    }
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) =>
        e ? Address.toJSON(e) : undefined
      );
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySearchResponse>): QuerySearchResponse {
    const message = { ...baseQuerySearchResponse } as QuerySearchResponse;
    message.transactions = (object.transactions ?? []).map((e) =>
      Transaction.fromPartial(e)
    );
    message.orders = (object.orders ?? []).map((e) => Order.fromPartial(e));
    message.messageTypes = (object.messageTypes ?? []).map((e) => e);
    message.blocks = (object.blocks ?? []).map((e) => Block.fromPartial(e));
    message.addresses = (object.addresses ?? []).map((e) =>
      Address.fromPartial(e)
    );
    return message;
  },
};

const baseQueryAllMessageTypeRequest: object = {};

export const QueryAllMessageTypeRequest = {
  encode(
    _: QueryAllMessageTypeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllMessageTypeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMessageTypeRequest,
    } as QueryAllMessageTypeRequest;
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

  fromJSON(_: any): QueryAllMessageTypeRequest {
    const message = {
      ...baseQueryAllMessageTypeRequest,
    } as QueryAllMessageTypeRequest;
    return message;
  },

  toJSON(_: QueryAllMessageTypeRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryAllMessageTypeRequest>
  ): QueryAllMessageTypeRequest {
    const message = {
      ...baseQueryAllMessageTypeRequest,
    } as QueryAllMessageTypeRequest;
    return message;
  },
};

const baseQueryAllMessageTypeResponse: object = {};

export const QueryAllMessageTypeResponse = {
  encode(
    message: QueryAllMessageTypeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.messageTypes) {
      MessageType.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllMessageTypeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMessageTypeResponse,
    } as QueryAllMessageTypeResponse;
    message.messageTypes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageTypes.push(
            MessageType.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMessageTypeResponse {
    const message = {
      ...baseQueryAllMessageTypeResponse,
    } as QueryAllMessageTypeResponse;
    message.messageTypes = (object.messageTypes ?? []).map((e: any) =>
      MessageType.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryAllMessageTypeResponse): unknown {
    const obj: any = {};
    if (message.messageTypes) {
      obj.messageTypes = message.messageTypes.map((e) =>
        e ? MessageType.toJSON(e) : undefined
      );
    } else {
      obj.messageTypes = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMessageTypeResponse>
  ): QueryAllMessageTypeResponse {
    const message = {
      ...baseQueryAllMessageTypeResponse,
    } as QueryAllMessageTypeResponse;
    message.messageTypes = (object.messageTypes ?? []).map((e) =>
      MessageType.fromPartial(e)
    );
    return message;
  },
};

const baseQueryAllTransactionRequest: object = {
  hash: "",
  address: "",
  msgTypeFilters: "",
};

export const QueryAllTransactionRequest = {
  encode(
    message: QueryAllTransactionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllTransactionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllTransactionRequest,
    } as QueryAllTransactionRequest;
    message.msgTypeFilters = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.msgTypeFilters.push(reader.string());
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTransactionRequest {
    const message = {
      ...baseQueryAllTransactionRequest,
    } as QueryAllTransactionRequest;
    message.hash =
      object.hash !== undefined && object.hash !== null
        ? String(object.hash)
        : "";
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.msgTypeFilters = (object.msgTypeFilters ?? []).map((e: any) =>
      String(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
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
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllTransactionRequest>
  ): QueryAllTransactionRequest {
    const message = {
      ...baseQueryAllTransactionRequest,
    } as QueryAllTransactionRequest;
    message.hash = object.hash ?? "";
    message.address = object.address ?? "";
    message.msgTypeFilters = (object.msgTypeFilters ?? []).map((e) => e);
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllTransactionResponse: object = {};

export const QueryAllTransactionResponse = {
  encode(
    message: QueryAllTransactionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.transactions) {
      Transaction.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllTransactionResponse,
    } as QueryAllTransactionResponse;
    message.transactions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transactions.push(
            Transaction.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllTransactionResponse {
    const message = {
      ...baseQueryAllTransactionResponse,
    } as QueryAllTransactionResponse;
    message.transactions = (object.transactions ?? []).map((e: any) =>
      Transaction.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllTransactionResponse): unknown {
    const obj: any = {};
    if (message.transactions) {
      obj.transactions = message.transactions.map((e) =>
        e ? Transaction.toJSON(e) : undefined
      );
    } else {
      obj.transactions = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllTransactionResponse>
  ): QueryAllTransactionResponse {
    const message = {
      ...baseQueryAllTransactionResponse,
    } as QueryAllTransactionResponse;
    message.transactions = (object.transactions ?? []).map((e) =>
      Transaction.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllBlockRequest: object = {};

export const QueryAllBlockRequest = {
  encode(
    message: QueryAllBlockRequest,
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
  ): QueryAllBlockRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllBlockRequest } as QueryAllBlockRequest;
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

  fromJSON(object: any): QueryAllBlockRequest {
    const message = { ...baseQueryAllBlockRequest } as QueryAllBlockRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllBlockRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllBlockRequest>): QueryAllBlockRequest {
    const message = { ...baseQueryAllBlockRequest } as QueryAllBlockRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllBlockResponse: object = {};

export const QueryAllBlockResponse = {
  encode(
    message: QueryAllBlockResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.blocks) {
      Block.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllBlockResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllBlockResponse } as QueryAllBlockResponse;
    message.blocks = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blocks.push(Block.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllBlockResponse {
    const message = { ...baseQueryAllBlockResponse } as QueryAllBlockResponse;
    message.blocks = (object.blocks ?? []).map((e: any) => Block.fromJSON(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllBlockResponse): unknown {
    const obj: any = {};
    if (message.blocks) {
      obj.blocks = message.blocks.map((e) => (e ? Block.toJSON(e) : undefined));
    } else {
      obj.blocks = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBlockResponse>
  ): QueryAllBlockResponse {
    const message = { ...baseQueryAllBlockResponse } as QueryAllBlockResponse;
    message.blocks = (object.blocks ?? []).map((e) => Block.fromPartial(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllModuleAddressRequest: object = {};

export const QueryAllModuleAddressRequest = {
  encode(
    _: QueryAllModuleAddressRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllModuleAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllModuleAddressRequest,
    } as QueryAllModuleAddressRequest;
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

  fromJSON(_: any): QueryAllModuleAddressRequest {
    const message = {
      ...baseQueryAllModuleAddressRequest,
    } as QueryAllModuleAddressRequest;
    return message;
  },

  toJSON(_: QueryAllModuleAddressRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryAllModuleAddressRequest>
  ): QueryAllModuleAddressRequest {
    const message = {
      ...baseQueryAllModuleAddressRequest,
    } as QueryAllModuleAddressRequest;
    return message;
  },
};

const baseQueryAllModuleAddressResponse: object = {};

export const QueryAllModuleAddressResponse = {
  encode(
    message: QueryAllModuleAddressResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.addresses).forEach(([key, value]) => {
      QueryAllModuleAddressResponse_AddressesEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllModuleAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllModuleAddressResponse,
    } as QueryAllModuleAddressResponse;
    message.addresses = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = QueryAllModuleAddressResponse_AddressesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry1.value !== undefined) {
            message.addresses[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllModuleAddressResponse {
    const message = {
      ...baseQueryAllModuleAddressResponse,
    } as QueryAllModuleAddressResponse;
    message.addresses = Object.entries(object.addresses ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    return message;
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

  fromPartial(
    object: DeepPartial<QueryAllModuleAddressResponse>
  ): QueryAllModuleAddressResponse {
    const message = {
      ...baseQueryAllModuleAddressResponse,
    } as QueryAllModuleAddressResponse;
    message.addresses = Object.entries(object.addresses ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

const baseQueryAllModuleAddressResponse_AddressesEntry: object = {
  key: "",
  value: "",
};

export const QueryAllModuleAddressResponse_AddressesEntry = {
  encode(
    message: QueryAllModuleAddressResponse_AddressesEntry,
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
  ): QueryAllModuleAddressResponse_AddressesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllModuleAddressResponse_AddressesEntry,
    } as QueryAllModuleAddressResponse_AddressesEntry;
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

  fromJSON(object: any): QueryAllModuleAddressResponse_AddressesEntry {
    const message = {
      ...baseQueryAllModuleAddressResponse_AddressesEntry,
    } as QueryAllModuleAddressResponse_AddressesEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: QueryAllModuleAddressResponse_AddressesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllModuleAddressResponse_AddressesEntry>
  ): QueryAllModuleAddressResponse_AddressesEntry {
    const message = {
      ...baseQueryAllModuleAddressResponse_AddressesEntry,
    } as QueryAllModuleAddressResponse_AddressesEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

const baseQueryModuleAddressRequest: object = { module: "" };

export const QueryModuleAddressRequest = {
  encode(
    message: QueryModuleAddressRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryModuleAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryModuleAddressRequest,
    } as QueryModuleAddressRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.module = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryModuleAddressRequest {
    const message = {
      ...baseQueryModuleAddressRequest,
    } as QueryModuleAddressRequest;
    message.module =
      object.module !== undefined && object.module !== null
        ? String(object.module)
        : "";
    return message;
  },

  toJSON(message: QueryModuleAddressRequest): unknown {
    const obj: any = {};
    message.module !== undefined && (obj.module = message.module);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryModuleAddressRequest>
  ): QueryModuleAddressRequest {
    const message = {
      ...baseQueryModuleAddressRequest,
    } as QueryModuleAddressRequest;
    message.module = object.module ?? "";
    return message;
  },
};

const baseQueryModuleAddressResponse: object = { address: "" };

export const QueryModuleAddressResponse = {
  encode(
    message: QueryModuleAddressResponse,
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
  ): QueryModuleAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryModuleAddressResponse,
    } as QueryModuleAddressResponse;
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

  fromJSON(object: any): QueryModuleAddressResponse {
    const message = {
      ...baseQueryModuleAddressResponse,
    } as QueryModuleAddressResponse;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: QueryModuleAddressResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryModuleAddressResponse>
  ): QueryModuleAddressResponse {
    const message = {
      ...baseQueryModuleAddressResponse,
    } as QueryModuleAddressResponse;
    message.address = object.address ?? "";
    return message;
  },
};

const baseAddress: object = { name: "", address: "", type: "" };

export const Address = {
  encode(
    message: Address,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddress } as Address;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Address {
    const message = { ...baseAddress } as Address;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    return message;
  },

  toJSON(message: Address): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.address !== undefined && (obj.address = message.address);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(object: DeepPartial<Address>): Address {
    const message = { ...baseAddress } as Address;
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
  MessageTypeAll(
    request: QueryAllMessageTypeRequest
  ): Promise<QueryAllMessageTypeResponse>;
  /** Get all transactions */
  TransactionAll(
    request: QueryAllTransactionRequest
  ): Promise<QueryAllTransactionResponse>;
  /** Get all blocks */
  BlockAll(request: QueryAllBlockRequest): Promise<QueryAllBlockResponse>;
  /** Get all module addresses */
  ModuleAddressAll(
    request: QueryAllModuleAddressRequest
  ): Promise<QueryAllModuleAddressResponse>;
  /** Get module address */
  ModuleAddress(
    request: QueryModuleAddressRequest
  ): Promise<QueryModuleAddressResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
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
    const promise = this.rpc.request(
      "Switcheo.carbon.misc.Query",
      "Search",
      data
    );
    return promise.then((data) =>
      QuerySearchResponse.decode(new _m0.Reader(data))
    );
  }

  MessageTypeAll(
    request: QueryAllMessageTypeRequest
  ): Promise<QueryAllMessageTypeResponse> {
    const data = QueryAllMessageTypeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.misc.Query",
      "MessageTypeAll",
      data
    );
    return promise.then((data) =>
      QueryAllMessageTypeResponse.decode(new _m0.Reader(data))
    );
  }

  TransactionAll(
    request: QueryAllTransactionRequest
  ): Promise<QueryAllTransactionResponse> {
    const data = QueryAllTransactionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.misc.Query",
      "TransactionAll",
      data
    );
    return promise.then((data) =>
      QueryAllTransactionResponse.decode(new _m0.Reader(data))
    );
  }

  BlockAll(request: QueryAllBlockRequest): Promise<QueryAllBlockResponse> {
    const data = QueryAllBlockRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.misc.Query",
      "BlockAll",
      data
    );
    return promise.then((data) =>
      QueryAllBlockResponse.decode(new _m0.Reader(data))
    );
  }

  ModuleAddressAll(
    request: QueryAllModuleAddressRequest
  ): Promise<QueryAllModuleAddressResponse> {
    const data = QueryAllModuleAddressRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.misc.Query",
      "ModuleAddressAll",
      data
    );
    return promise.then((data) =>
      QueryAllModuleAddressResponse.decode(new _m0.Reader(data))
    );
  }

  ModuleAddress(
    request: QueryModuleAddressRequest
  ): Promise<QueryModuleAddressResponse> {
    const data = QueryModuleAddressRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.misc.Query",
      "ModuleAddress",
      data
    );
    return promise.then((data) =>
      QueryModuleAddressResponse.decode(new _m0.Reader(data))
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
