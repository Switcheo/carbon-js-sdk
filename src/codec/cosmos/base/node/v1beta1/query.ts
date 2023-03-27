/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cosmos.base.node.v1beta1";

/** ConfigRequest defines the request structure for the Config gRPC query. */
export interface ConfigRequest {}

/** ConfigResponse defines the response structure for the Config gRPC query. */
export interface ConfigResponse {
  minimumGasPrice: string;
}

const baseConfigRequest: object = {};

export const ConfigRequest = {
  encode(
    _: ConfigRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConfigRequest } as ConfigRequest;
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

  fromJSON(_: any): ConfigRequest {
    const message = { ...baseConfigRequest } as ConfigRequest;
    return message;
  },

  toJSON(_: ConfigRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<ConfigRequest>): ConfigRequest {
    const message = { ...baseConfigRequest } as ConfigRequest;
    return message;
  },
};

const baseConfigResponse: object = { minimumGasPrice: "" };

export const ConfigResponse = {
  encode(
    message: ConfigResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.minimumGasPrice !== "") {
      writer.uint32(10).string(message.minimumGasPrice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConfigResponse } as ConfigResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minimumGasPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConfigResponse {
    const message = { ...baseConfigResponse } as ConfigResponse;
    message.minimumGasPrice =
      object.minimumGasPrice !== undefined && object.minimumGasPrice !== null
        ? String(object.minimumGasPrice)
        : "";
    return message;
  },

  toJSON(message: ConfigResponse): unknown {
    const obj: any = {};
    message.minimumGasPrice !== undefined &&
      (obj.minimumGasPrice = message.minimumGasPrice);
    return obj;
  },

  fromPartial(object: DeepPartial<ConfigResponse>): ConfigResponse {
    const message = { ...baseConfigResponse } as ConfigResponse;
    message.minimumGasPrice = object.minimumGasPrice ?? "";
    return message;
  },
};

/** Service defines the gRPC querier service for node related queries. */
export interface Service {
  /** Config queries for the operator configuration. */
  Config(request: ConfigRequest): Promise<ConfigResponse>;
}

export class ServiceClientImpl implements Service {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Config = this.Config.bind(this);
  }
  Config(request: ConfigRequest): Promise<ConfigResponse> {
    const data = ConfigRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.base.node.v1beta1.Service",
      "Config",
      data
    );
    return promise.then((data) => ConfigResponse.decode(new _m0.Reader(data)));
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
