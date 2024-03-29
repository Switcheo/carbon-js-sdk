/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ModuleOptions } from "./options";

export const protobufPackage = "cosmos.autocli.v1";

/** AppOptionsRequest is the RemoteInfoService/AppOptions request type. */
export interface AppOptionsRequest {}

/** AppOptionsResponse is the RemoteInfoService/AppOptions response type. */
export interface AppOptionsResponse {
  /** module_options is a map of module name to autocli module options. */
  moduleOptions: { [key: string]: ModuleOptions };
}

export interface AppOptionsResponse_ModuleOptionsEntry {
  key: string;
  value?: ModuleOptions;
}

const baseAppOptionsRequest: object = {};

export const AppOptionsRequest = {
  encode(
    _: AppOptionsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppOptionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAppOptionsRequest } as AppOptionsRequest;
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

  fromJSON(_: any): AppOptionsRequest {
    const message = { ...baseAppOptionsRequest } as AppOptionsRequest;
    return message;
  },

  toJSON(_: AppOptionsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<AppOptionsRequest>): AppOptionsRequest {
    const message = { ...baseAppOptionsRequest } as AppOptionsRequest;
    return message;
  },
};

const baseAppOptionsResponse: object = {};

export const AppOptionsResponse = {
  encode(
    message: AppOptionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.moduleOptions).forEach(([key, value]) => {
      AppOptionsResponse_ModuleOptionsEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppOptionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAppOptionsResponse } as AppOptionsResponse;
    message.moduleOptions = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = AppOptionsResponse_ModuleOptionsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry1.value !== undefined) {
            message.moduleOptions[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AppOptionsResponse {
    const message = { ...baseAppOptionsResponse } as AppOptionsResponse;
    message.moduleOptions = Object.entries(object.moduleOptions ?? {}).reduce<{
      [key: string]: ModuleOptions;
    }>((acc, [key, value]) => {
      acc[key] = ModuleOptions.fromJSON(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: AppOptionsResponse): unknown {
    const obj: any = {};
    obj.moduleOptions = {};
    if (message.moduleOptions) {
      Object.entries(message.moduleOptions).forEach(([k, v]) => {
        obj.moduleOptions[k] = ModuleOptions.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<AppOptionsResponse>): AppOptionsResponse {
    const message = { ...baseAppOptionsResponse } as AppOptionsResponse;
    message.moduleOptions = Object.entries(object.moduleOptions ?? {}).reduce<{
      [key: string]: ModuleOptions;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = ModuleOptions.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

const baseAppOptionsResponse_ModuleOptionsEntry: object = { key: "" };

export const AppOptionsResponse_ModuleOptionsEntry = {
  encode(
    message: AppOptionsResponse_ModuleOptionsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ModuleOptions.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AppOptionsResponse_ModuleOptionsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAppOptionsResponse_ModuleOptionsEntry,
    } as AppOptionsResponse_ModuleOptionsEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = ModuleOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AppOptionsResponse_ModuleOptionsEntry {
    const message = {
      ...baseAppOptionsResponse_ModuleOptionsEntry,
    } as AppOptionsResponse_ModuleOptionsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? ModuleOptions.fromJSON(object.value)
        : undefined;
    return message;
  },

  toJSON(message: AppOptionsResponse_ModuleOptionsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? ModuleOptions.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AppOptionsResponse_ModuleOptionsEntry>
  ): AppOptionsResponse_ModuleOptionsEntry {
    const message = {
      ...baseAppOptionsResponse_ModuleOptionsEntry,
    } as AppOptionsResponse_ModuleOptionsEntry;
    message.key = object.key ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? ModuleOptions.fromPartial(object.value)
        : undefined;
    return message;
  },
};

/**
 * RemoteInfoService provides clients with the information they need
 * to build dynamically CLI clients for remote chains.
 */
export interface Query {
  /** AppOptions returns the autocli options for all of the modules in an app. */
  AppOptions(request: AppOptionsRequest): Promise<AppOptionsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AppOptions = this.AppOptions.bind(this);
  }
  AppOptions(request: AppOptionsRequest): Promise<AppOptionsResponse> {
    const data = AppOptionsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.autocli.v1.Query",
      "AppOptions",
      data
    );
    return promise.then((data) =>
      AppOptionsResponse.decode(new _m0.Reader(data))
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
