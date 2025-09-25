/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ConsensusPeers } from "./consensus_peers";

export const protobufPackage = "Switcheo.carbon.headersync";

export interface QueryGetConsensusPeersRequest {
  chainId: Long;
}

export interface QueryGetConsensusPeersResponse {
  consensusPeers?: ConsensusPeers;
}

function createBaseQueryGetConsensusPeersRequest(): QueryGetConsensusPeersRequest {
  return { chainId: Long.UZERO };
}

export const QueryGetConsensusPeersRequest = {
  encode(message: QueryGetConsensusPeersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.chainId.isZero()) {
      writer.uint32(8).uint64(message.chainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetConsensusPeersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetConsensusPeersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.chainId = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetConsensusPeersRequest {
    return { chainId: isSet(object.chainId) ? Long.fromValue(object.chainId) : Long.UZERO };
  },

  toJSON(message: QueryGetConsensusPeersRequest): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = (message.chainId || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<QueryGetConsensusPeersRequest>): QueryGetConsensusPeersRequest {
    return QueryGetConsensusPeersRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetConsensusPeersRequest>): QueryGetConsensusPeersRequest {
    const message = createBaseQueryGetConsensusPeersRequest();
    message.chainId = (object.chainId !== undefined && object.chainId !== null)
      ? Long.fromValue(object.chainId)
      : Long.UZERO;
    return message;
  },
};

function createBaseQueryGetConsensusPeersResponse(): QueryGetConsensusPeersResponse {
  return { consensusPeers: undefined };
}

export const QueryGetConsensusPeersResponse = {
  encode(message: QueryGetConsensusPeersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.consensusPeers !== undefined) {
      ConsensusPeers.encode(message.consensusPeers, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetConsensusPeersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetConsensusPeersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.consensusPeers = ConsensusPeers.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetConsensusPeersResponse {
    return {
      consensusPeers: isSet(object.consensusPeers) ? ConsensusPeers.fromJSON(object.consensusPeers) : undefined,
    };
  },

  toJSON(message: QueryGetConsensusPeersResponse): unknown {
    const obj: any = {};
    message.consensusPeers !== undefined &&
      (obj.consensusPeers = message.consensusPeers ? ConsensusPeers.toJSON(message.consensusPeers) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryGetConsensusPeersResponse>): QueryGetConsensusPeersResponse {
    return QueryGetConsensusPeersResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetConsensusPeersResponse>): QueryGetConsensusPeersResponse {
    const message = createBaseQueryGetConsensusPeersResponse();
    message.consensusPeers = (object.consensusPeers !== undefined && object.consensusPeers !== null)
      ? ConsensusPeers.fromPartial(object.consensusPeers)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  ConsensusPeers(request: QueryGetConsensusPeersRequest): Promise<QueryGetConsensusPeersResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.headersync.Query";
    this.rpc = rpc;
    this.ConsensusPeers = this.ConsensusPeers.bind(this);
  }
  ConsensusPeers(request: QueryGetConsensusPeersRequest): Promise<QueryGetConsensusPeersResponse> {
    const data = QueryGetConsensusPeersRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ConsensusPeers", data);
    return promise.then((data) => QueryGetConsensusPeersResponse.decode(_m0.Reader.create(data)));
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
