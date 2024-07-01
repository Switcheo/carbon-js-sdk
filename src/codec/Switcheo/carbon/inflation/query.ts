/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { MintData } from "./inflation";

export const protobufPackage = "Switcheo.carbon.inflation";

export interface QueryMintDataRequest {}

export interface QueryMintDataResponse {
  mintData?: MintData;
}

const baseQueryMintDataRequest: object = {};

export const QueryMintDataRequest = {
  encode(
    _: QueryMintDataRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryMintDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryMintDataRequest } as QueryMintDataRequest;
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

  fromJSON(_: any): QueryMintDataRequest {
    const message = { ...baseQueryMintDataRequest } as QueryMintDataRequest;
    return message;
  },

  toJSON(_: QueryMintDataRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryMintDataRequest>): QueryMintDataRequest {
    const message = { ...baseQueryMintDataRequest } as QueryMintDataRequest;
    return message;
  },
};

const baseQueryMintDataResponse: object = {};

export const QueryMintDataResponse = {
  encode(
    message: QueryMintDataResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mintData !== undefined) {
      MintData.encode(message.mintData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryMintDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryMintDataResponse } as QueryMintDataResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintData = MintData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMintDataResponse {
    const message = { ...baseQueryMintDataResponse } as QueryMintDataResponse;
    message.mintData =
      object.mintData !== undefined && object.mintData !== null
        ? MintData.fromJSON(object.mintData)
        : undefined;
    return message;
  },

  toJSON(message: QueryMintDataResponse): unknown {
    const obj: any = {};
    message.mintData !== undefined &&
      (obj.mintData = message.mintData
        ? MintData.toJSON(message.mintData)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryMintDataResponse>
  ): QueryMintDataResponse {
    const message = { ...baseQueryMintDataResponse } as QueryMintDataResponse;
    message.mintData =
      object.mintData !== undefined && object.mintData !== null
        ? MintData.fromPartial(object.mintData)
        : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Get mint data */
  MintData(request: QueryMintDataRequest): Promise<QueryMintDataResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.MintData = this.MintData.bind(this);
  }
  MintData(request: QueryMintDataRequest): Promise<QueryMintDataResponse> {
    const data = QueryMintDataRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.inflation.Query",
      "MintData",
      data
    );
    return promise.then((data) =>
      QueryMintDataResponse.decode(new _m0.Reader(data))
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
