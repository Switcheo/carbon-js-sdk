/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { EthCosmosAddressWrapper } from "./address";

export const protobufPackage = "Switcheo.carbon.evmmerge";

/**
 * QueryMappedAddressRequest is the request type for the Query/MappedAddress RPC
 * method.
 */
export interface QueryMappedAddressRequest {
  address: string;
}

/**
 * QueryMappedAddressResponse is the response type for the Query/MappedAddress
 * RPC method.
 */
export interface QueryMappedAddressResponse {
  mappedAddress: string;
}

export interface QueryAllMappedAddressRequest {
  pagination?: PageRequest;
}

export interface QueryAllMappedAddressResponse {
  mergedAccountAddresses: EthCosmosAddressWrapper[];
  pagination?: PageResponse;
}

const baseQueryMappedAddressRequest: object = { address: "" };

export const QueryMappedAddressRequest = {
  encode(
    message: QueryMappedAddressRequest,
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
  ): QueryMappedAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryMappedAddressRequest,
    } as QueryMappedAddressRequest;
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

  fromJSON(object: any): QueryMappedAddressRequest {
    const message = {
      ...baseQueryMappedAddressRequest,
    } as QueryMappedAddressRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: QueryMappedAddressRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryMappedAddressRequest>
  ): QueryMappedAddressRequest {
    const message = {
      ...baseQueryMappedAddressRequest,
    } as QueryMappedAddressRequest;
    message.address = object.address ?? "";
    return message;
  },
};

const baseQueryMappedAddressResponse: object = { mappedAddress: "" };

export const QueryMappedAddressResponse = {
  encode(
    message: QueryMappedAddressResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mappedAddress !== "") {
      writer.uint32(10).string(message.mappedAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryMappedAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryMappedAddressResponse,
    } as QueryMappedAddressResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mappedAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMappedAddressResponse {
    const message = {
      ...baseQueryMappedAddressResponse,
    } as QueryMappedAddressResponse;
    message.mappedAddress =
      object.mappedAddress !== undefined && object.mappedAddress !== null
        ? String(object.mappedAddress)
        : "";
    return message;
  },

  toJSON(message: QueryMappedAddressResponse): unknown {
    const obj: any = {};
    message.mappedAddress !== undefined &&
      (obj.mappedAddress = message.mappedAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryMappedAddressResponse>
  ): QueryMappedAddressResponse {
    const message = {
      ...baseQueryMappedAddressResponse,
    } as QueryMappedAddressResponse;
    message.mappedAddress = object.mappedAddress ?? "";
    return message;
  },
};

const baseQueryAllMappedAddressRequest: object = {};

export const QueryAllMappedAddressRequest = {
  encode(
    message: QueryAllMappedAddressRequest,
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
  ): QueryAllMappedAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMappedAddressRequest,
    } as QueryAllMappedAddressRequest;
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

  fromJSON(object: any): QueryAllMappedAddressRequest {
    const message = {
      ...baseQueryAllMappedAddressRequest,
    } as QueryAllMappedAddressRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllMappedAddressRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMappedAddressRequest>
  ): QueryAllMappedAddressRequest {
    const message = {
      ...baseQueryAllMappedAddressRequest,
    } as QueryAllMappedAddressRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllMappedAddressResponse: object = {};

export const QueryAllMappedAddressResponse = {
  encode(
    message: QueryAllMappedAddressResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.mergedAccountAddresses) {
      EthCosmosAddressWrapper.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllMappedAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMappedAddressResponse,
    } as QueryAllMappedAddressResponse;
    message.mergedAccountAddresses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mergedAccountAddresses.push(
            EthCosmosAddressWrapper.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllMappedAddressResponse {
    const message = {
      ...baseQueryAllMappedAddressResponse,
    } as QueryAllMappedAddressResponse;
    message.mergedAccountAddresses = (object.mergedAccountAddresses ?? []).map(
      (e: any) => EthCosmosAddressWrapper.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllMappedAddressResponse): unknown {
    const obj: any = {};
    if (message.mergedAccountAddresses) {
      obj.mergedAccountAddresses = message.mergedAccountAddresses.map((e) =>
        e ? EthCosmosAddressWrapper.toJSON(e) : undefined
      );
    } else {
      obj.mergedAccountAddresses = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMappedAddressResponse>
  ): QueryAllMappedAddressResponse {
    const message = {
      ...baseQueryAllMappedAddressResponse,
    } as QueryAllMappedAddressResponse;
    message.mergedAccountAddresses = (object.mergedAccountAddresses ?? []).map(
      (e) => EthCosmosAddressWrapper.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** MappedAddress queries current address mappings for merged accounts. */
  MappedAddress(
    request: QueryMappedAddressRequest
  ): Promise<QueryMappedAddressResponse>;
  /** MappedAddressAll queries all address mappings. */
  MappedAddressAll(
    request: QueryAllMappedAddressRequest
  ): Promise<QueryAllMappedAddressResponse>;
  /**
   * MappedEvmAddress queries mapped evm address mappings for a given cosmos
   * address.
   */
  MappedEvmAddress(
    request: QueryMappedAddressRequest
  ): Promise<QueryMappedAddressResponse>;
  /**
   * MappedCosmosAddress queries mapped cosmos address mappings for a given eth
   * address.
   */
  MappedCosmosAddress(
    request: QueryMappedAddressRequest
  ): Promise<QueryMappedAddressResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.MappedAddress = this.MappedAddress.bind(this);
    this.MappedAddressAll = this.MappedAddressAll.bind(this);
    this.MappedEvmAddress = this.MappedEvmAddress.bind(this);
    this.MappedCosmosAddress = this.MappedCosmosAddress.bind(this);
  }
  MappedAddress(
    request: QueryMappedAddressRequest
  ): Promise<QueryMappedAddressResponse> {
    const data = QueryMappedAddressRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.evmmerge.Query",
      "MappedAddress",
      data
    );
    return promise.then((data) =>
      QueryMappedAddressResponse.decode(new _m0.Reader(data))
    );
  }

  MappedAddressAll(
    request: QueryAllMappedAddressRequest
  ): Promise<QueryAllMappedAddressResponse> {
    const data = QueryAllMappedAddressRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.evmmerge.Query",
      "MappedAddressAll",
      data
    );
    return promise.then((data) =>
      QueryAllMappedAddressResponse.decode(new _m0.Reader(data))
    );
  }

  MappedEvmAddress(
    request: QueryMappedAddressRequest
  ): Promise<QueryMappedAddressResponse> {
    const data = QueryMappedAddressRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.evmmerge.Query",
      "MappedEvmAddress",
      data
    );
    return promise.then((data) =>
      QueryMappedAddressResponse.decode(new _m0.Reader(data))
    );
  }

  MappedCosmosAddress(
    request: QueryMappedAddressRequest
  ): Promise<QueryMappedAddressResponse> {
    const data = QueryMappedAddressRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.evmmerge.Query",
      "MappedCosmosAddress",
      data
    );
    return promise.then((data) =>
      QueryMappedAddressResponse.decode(new _m0.Reader(data))
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
