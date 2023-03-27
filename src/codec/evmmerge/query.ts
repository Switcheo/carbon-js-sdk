/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.evmmerge";

/** QueryMappedAddressRequest is the request type for the Query/MappedAddress RPC method. */
export interface QueryMappedAddressRequest {
  address: string;
}

/** QueryMappedAddressResponse is the response type for the Query/MappedAddress RPC method. */
export interface QueryMappedAddressResponse {
  mappedAddress: string;
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

/** Query defines the gRPC querier service. */
export interface Query {
  /** MappedAddress queries current address mappings for merged accounts. */
  MappedAddress(
    request: QueryMappedAddressRequest
  ): Promise<QueryMappedAddressResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.MappedAddress = this.MappedAddress.bind(this);
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
