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

const baseQueryGetConsensusPeersRequest: object = { chainId: Long.UZERO };

export const QueryGetConsensusPeersRequest = {
  encode(
    message: QueryGetConsensusPeersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.chainId.isZero()) {
      writer.uint32(8).uint64(message.chainId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetConsensusPeersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetConsensusPeersRequest,
    } as QueryGetConsensusPeersRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetConsensusPeersRequest {
    const message = {
      ...baseQueryGetConsensusPeersRequest,
    } as QueryGetConsensusPeersRequest;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Long.fromString(object.chainId)
        : Long.UZERO;
    return message;
  },

  toJSON(message: QueryGetConsensusPeersRequest): unknown {
    const obj: any = {};
    message.chainId !== undefined &&
      (obj.chainId = (message.chainId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetConsensusPeersRequest>
  ): QueryGetConsensusPeersRequest {
    const message = {
      ...baseQueryGetConsensusPeersRequest,
    } as QueryGetConsensusPeersRequest;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Long.fromValue(object.chainId)
        : Long.UZERO;
    return message;
  },
};

const baseQueryGetConsensusPeersResponse: object = {};

export const QueryGetConsensusPeersResponse = {
  encode(
    message: QueryGetConsensusPeersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.consensusPeers !== undefined) {
      ConsensusPeers.encode(
        message.consensusPeers,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetConsensusPeersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetConsensusPeersResponse,
    } as QueryGetConsensusPeersResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusPeers = ConsensusPeers.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetConsensusPeersResponse {
    const message = {
      ...baseQueryGetConsensusPeersResponse,
    } as QueryGetConsensusPeersResponse;
    message.consensusPeers =
      object.consensusPeers !== undefined && object.consensusPeers !== null
        ? ConsensusPeers.fromJSON(object.consensusPeers)
        : undefined;
    return message;
  },

  toJSON(message: QueryGetConsensusPeersResponse): unknown {
    const obj: any = {};
    message.consensusPeers !== undefined &&
      (obj.consensusPeers = message.consensusPeers
        ? ConsensusPeers.toJSON(message.consensusPeers)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetConsensusPeersResponse>
  ): QueryGetConsensusPeersResponse {
    const message = {
      ...baseQueryGetConsensusPeersResponse,
    } as QueryGetConsensusPeersResponse;
    message.consensusPeers =
      object.consensusPeers !== undefined && object.consensusPeers !== null
        ? ConsensusPeers.fromPartial(object.consensusPeers)
        : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  ConsensusPeers(
    request: QueryGetConsensusPeersRequest
  ): Promise<QueryGetConsensusPeersResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ConsensusPeers = this.ConsensusPeers.bind(this);
  }
  ConsensusPeers(
    request: QueryGetConsensusPeersRequest
  ): Promise<QueryGetConsensusPeersResponse> {
    const data = QueryGetConsensusPeersRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.headersync.Query",
      "ConsensusPeers",
      data
    );
    return promise.then((data) =>
      QueryGetConsensusPeersResponse.decode(new _m0.Reader(data))
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
