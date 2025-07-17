/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { MintData } from "./inflation";

export const protobufPackage = "Switcheo.carbon.inflation";

export interface QueryMintDataRequest {
}

export interface QueryMintDataResponse {
  mintData?: MintData;
}

function createBaseQueryMintDataRequest(): QueryMintDataRequest {
  return {};
}

export const QueryMintDataRequest = {
  encode(_: QueryMintDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMintDataRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMintDataRequest();
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

  fromJSON(_: any): QueryMintDataRequest {
    return {};
  },

  toJSON(_: QueryMintDataRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryMintDataRequest>): QueryMintDataRequest {
    return QueryMintDataRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryMintDataRequest>): QueryMintDataRequest {
    const message = createBaseQueryMintDataRequest();
    return message;
  },
};

function createBaseQueryMintDataResponse(): QueryMintDataResponse {
  return { mintData: undefined };
}

export const QueryMintDataResponse = {
  encode(message: QueryMintDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintData !== undefined) {
      MintData.encode(message.mintData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMintDataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMintDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mintData = MintData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryMintDataResponse {
    return { mintData: isSet(object.mintData) ? MintData.fromJSON(object.mintData) : undefined };
  },

  toJSON(message: QueryMintDataResponse): unknown {
    const obj: any = {};
    message.mintData !== undefined && (obj.mintData = message.mintData ? MintData.toJSON(message.mintData) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryMintDataResponse>): QueryMintDataResponse {
    return QueryMintDataResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryMintDataResponse>): QueryMintDataResponse {
    const message = createBaseQueryMintDataResponse();
    message.mintData = (object.mintData !== undefined && object.mintData !== null)
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
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.inflation.Query";
    this.rpc = rpc;
    this.MintData = this.MintData.bind(this);
  }
  MintData(request: QueryMintDataRequest): Promise<QueryMintDataResponse> {
    const data = QueryMintDataRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MintData", data);
    return promise.then((data) => QueryMintDataResponse.decode(_m0.Reader.create(data)));
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
