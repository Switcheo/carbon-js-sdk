/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Config } from "./config";

export const protobufPackage = "cosmos.app.v1alpha1";

/** QueryConfigRequest is the Query/Config request type. */
export interface QueryConfigRequest {}

/** QueryConfigRequest is the Query/Config response type. */
export interface QueryConfigResponse {
  /** config is the current app config. */
  config?: Config;
}

const baseQueryConfigRequest: object = {};

export const QueryConfigRequest = {
  encode(
    _: QueryConfigRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConfigRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryConfigRequest } as QueryConfigRequest;
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

  fromJSON(_: any): QueryConfigRequest {
    const message = { ...baseQueryConfigRequest } as QueryConfigRequest;
    return message;
  },

  toJSON(_: QueryConfigRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryConfigRequest>): QueryConfigRequest {
    const message = { ...baseQueryConfigRequest } as QueryConfigRequest;
    return message;
  },
};

const baseQueryConfigResponse: object = {};

export const QueryConfigResponse = {
  encode(
    message: QueryConfigResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.config !== undefined) {
      Config.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryConfigResponse } as QueryConfigResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = Config.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryConfigResponse {
    const message = { ...baseQueryConfigResponse } as QueryConfigResponse;
    message.config =
      object.config !== undefined && object.config !== null
        ? Config.fromJSON(object.config)
        : undefined;
    return message;
  },

  toJSON(message: QueryConfigResponse): unknown {
    const obj: any = {};
    message.config !== undefined &&
      (obj.config = message.config ? Config.toJSON(message.config) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryConfigResponse>): QueryConfigResponse {
    const message = { ...baseQueryConfigResponse } as QueryConfigResponse;
    message.config =
      object.config !== undefined && object.config !== null
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
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Config = this.Config.bind(this);
  }
  Config(request: QueryConfigRequest): Promise<QueryConfigResponse> {
    const data = QueryConfigRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.app.v1alpha1.Query",
      "Config",
      data
    );
    return promise.then((data) =>
      QueryConfigResponse.decode(new _m0.Reader(data))
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
