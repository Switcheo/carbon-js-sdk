/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Config } from "./config";

export const protobufPackage = "cosmos.app.v1alpha1";

/** QueryConfigRequest is the Query/Config request type. */
export interface QueryConfigRequest {
}

/** QueryConfigRequest is the Query/Config response type. */
export interface QueryConfigResponse {
  /** config is the current app config. */
  config?: Config;
}

function createBaseQueryConfigRequest(): QueryConfigRequest {
  return {};
}

export const QueryConfigRequest = {
  encode(_: QueryConfigRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConfigRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConfigRequest();
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

  fromJSON(_: any): QueryConfigRequest {
    return {};
  },

  toJSON(_: QueryConfigRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryConfigRequest>): QueryConfigRequest {
    return QueryConfigRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryConfigRequest>): QueryConfigRequest {
    const message = createBaseQueryConfigRequest();
    return message;
  },
};

function createBaseQueryConfigResponse(): QueryConfigResponse {
  return { config: undefined };
}

export const QueryConfigResponse = {
  encode(message: QueryConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      Config.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConfigResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = Config.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryConfigResponse {
    return { config: isSet(object.config) ? Config.fromJSON(object.config) : undefined };
  },

  toJSON(message: QueryConfigResponse): unknown {
    const obj: any = {};
    message.config !== undefined && (obj.config = message.config ? Config.toJSON(message.config) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryConfigResponse>): QueryConfigResponse {
    return QueryConfigResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryConfigResponse>): QueryConfigResponse {
    const message = createBaseQueryConfigResponse();
    message.config = (object.config !== undefined && object.config !== null)
      ? Config.fromPartial(object.config)
      : undefined;
    return message;
  },
};

/** Query is the app module query service. */
export interface Query {
  /** Config returns the current app config. */
  Config(request: QueryConfigRequest): Promise<QueryConfigResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "cosmos.app.v1alpha1.Query";
    this.rpc = rpc;
    this.Config = this.Config.bind(this);
  }
  Config(request: QueryConfigRequest): Promise<QueryConfigResponse> {
    const data = QueryConfigRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Config", data);
    return promise.then((data) => QueryConfigResponse.decode(_m0.Reader.create(data)));
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
