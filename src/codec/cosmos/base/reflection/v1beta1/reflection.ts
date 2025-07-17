/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cosmos.base.reflection.v1beta1";

/** ListAllInterfacesRequest is the request type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesRequest {
}

/** ListAllInterfacesResponse is the response type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesResponse {
  /** interface_names is an array of all the registered interfaces. */
  interfaceNames: string[];
}

/**
 * ListImplementationsRequest is the request type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsRequest {
  /** interface_name defines the interface to query the implementations for. */
  interfaceName: string;
}

/**
 * ListImplementationsResponse is the response type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsResponse {
  implementationMessageNames: string[];
}

function createBaseListAllInterfacesRequest(): ListAllInterfacesRequest {
  return {};
}

export const ListAllInterfacesRequest = {
  encode(_: ListAllInterfacesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAllInterfacesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAllInterfacesRequest();
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

  fromJSON(_: any): ListAllInterfacesRequest {
    return {};
  },

  toJSON(_: ListAllInterfacesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<ListAllInterfacesRequest>): ListAllInterfacesRequest {
    return ListAllInterfacesRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<ListAllInterfacesRequest>): ListAllInterfacesRequest {
    const message = createBaseListAllInterfacesRequest();
    return message;
  },
};

function createBaseListAllInterfacesResponse(): ListAllInterfacesResponse {
  return { interfaceNames: [] };
}

export const ListAllInterfacesResponse = {
  encode(message: ListAllInterfacesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.interfaceNames) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAllInterfacesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAllInterfacesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.interfaceNames.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListAllInterfacesResponse {
    return {
      interfaceNames: Array.isArray(object?.interfaceNames) ? object.interfaceNames.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: ListAllInterfacesResponse): unknown {
    const obj: any = {};
    if (message.interfaceNames) {
      obj.interfaceNames = message.interfaceNames.map((e) => e);
    } else {
      obj.interfaceNames = [];
    }
    return obj;
  },

  create(base?: DeepPartial<ListAllInterfacesResponse>): ListAllInterfacesResponse {
    return ListAllInterfacesResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ListAllInterfacesResponse>): ListAllInterfacesResponse {
    const message = createBaseListAllInterfacesResponse();
    message.interfaceNames = object.interfaceNames?.map((e) => e) || [];
    return message;
  },
};

function createBaseListImplementationsRequest(): ListImplementationsRequest {
  return { interfaceName: "" };
}

export const ListImplementationsRequest = {
  encode(message: ListImplementationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.interfaceName !== "") {
      writer.uint32(10).string(message.interfaceName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListImplementationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListImplementationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.interfaceName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListImplementationsRequest {
    return { interfaceName: isSet(object.interfaceName) ? String(object.interfaceName) : "" };
  },

  toJSON(message: ListImplementationsRequest): unknown {
    const obj: any = {};
    message.interfaceName !== undefined && (obj.interfaceName = message.interfaceName);
    return obj;
  },

  create(base?: DeepPartial<ListImplementationsRequest>): ListImplementationsRequest {
    return ListImplementationsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ListImplementationsRequest>): ListImplementationsRequest {
    const message = createBaseListImplementationsRequest();
    message.interfaceName = object.interfaceName ?? "";
    return message;
  },
};

function createBaseListImplementationsResponse(): ListImplementationsResponse {
  return { implementationMessageNames: [] };
}

export const ListImplementationsResponse = {
  encode(message: ListImplementationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.implementationMessageNames) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListImplementationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListImplementationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.implementationMessageNames.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListImplementationsResponse {
    return {
      implementationMessageNames: Array.isArray(object?.implementationMessageNames)
        ? object.implementationMessageNames.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: ListImplementationsResponse): unknown {
    const obj: any = {};
    if (message.implementationMessageNames) {
      obj.implementationMessageNames = message.implementationMessageNames.map((e) => e);
    } else {
      obj.implementationMessageNames = [];
    }
    return obj;
  },

  create(base?: DeepPartial<ListImplementationsResponse>): ListImplementationsResponse {
    return ListImplementationsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ListImplementationsResponse>): ListImplementationsResponse {
    const message = createBaseListImplementationsResponse();
    message.implementationMessageNames = object.implementationMessageNames?.map((e) => e) || [];
    return message;
  },
};

/** ReflectionService defines a service for interface reflection. */
export interface ReflectionService {
  /**
   * ListAllInterfaces lists all the interfaces registered in the interface
   * registry.
   */
  ListAllInterfaces(request: ListAllInterfacesRequest): Promise<ListAllInterfacesResponse>;
  /**
   * ListImplementations list all the concrete types that implement a given
   * interface.
   */
  ListImplementations(request: ListImplementationsRequest): Promise<ListImplementationsResponse>;
}

export class ReflectionServiceClientImpl implements ReflectionService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "cosmos.base.reflection.v1beta1.ReflectionService";
    this.rpc = rpc;
    this.ListAllInterfaces = this.ListAllInterfaces.bind(this);
    this.ListImplementations = this.ListImplementations.bind(this);
  }
  ListAllInterfaces(request: ListAllInterfacesRequest): Promise<ListAllInterfacesResponse> {
    const data = ListAllInterfacesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ListAllInterfaces", data);
    return promise.then((data) => ListAllInterfacesResponse.decode(_m0.Reader.create(data)));
  }

  ListImplementations(request: ListImplementationsRequest): Promise<ListImplementationsResponse> {
    const data = ListImplementationsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ListImplementations", data);
    return promise.then((data) => ListImplementationsResponse.decode(_m0.Reader.create(data)));
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
