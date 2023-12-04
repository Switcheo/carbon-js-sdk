/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.ccm";

/** this line is used by starport scaffolding # 3 */
export interface QueryCheckModuleContractRequest {
  moduleName: string;
  toContractAddress: Uint8Array;
  fromChainId: Long;
}

export interface QueryCheckModuleContractResponse {
  moduleName: string;
  exist: boolean;
}

const baseQueryCheckModuleContractRequest: object = {
  moduleName: "",
  fromChainId: Long.UZERO,
};

export const QueryCheckModuleContractRequest = {
  encode(
    message: QueryCheckModuleContractRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    if (message.toContractAddress.length !== 0) {
      writer.uint32(18).bytes(message.toContractAddress);
    }
    if (!message.fromChainId.isZero()) {
      writer.uint32(24).uint64(message.fromChainId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCheckModuleContractRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCheckModuleContractRequest,
    } as QueryCheckModuleContractRequest;
    message.toContractAddress = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleName = reader.string();
          break;
        case 2:
          message.toContractAddress = reader.bytes();
          break;
        case 3:
          message.fromChainId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCheckModuleContractRequest {
    const message = {
      ...baseQueryCheckModuleContractRequest,
    } as QueryCheckModuleContractRequest;
    message.moduleName =
      object.moduleName !== undefined && object.moduleName !== null
        ? String(object.moduleName)
        : "";
    message.toContractAddress =
      object.toContractAddress !== undefined &&
      object.toContractAddress !== null
        ? bytesFromBase64(object.toContractAddress)
        : new Uint8Array();
    message.fromChainId =
      object.fromChainId !== undefined && object.fromChainId !== null
        ? Long.fromString(object.fromChainId)
        : Long.UZERO;
    return message;
  },

  toJSON(message: QueryCheckModuleContractRequest): unknown {
    const obj: any = {};
    message.moduleName !== undefined && (obj.moduleName = message.moduleName);
    message.toContractAddress !== undefined &&
      (obj.toContractAddress = base64FromBytes(
        message.toContractAddress !== undefined
          ? message.toContractAddress
          : new Uint8Array()
      ));
    message.fromChainId !== undefined &&
      (obj.fromChainId = (message.fromChainId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCheckModuleContractRequest>
  ): QueryCheckModuleContractRequest {
    const message = {
      ...baseQueryCheckModuleContractRequest,
    } as QueryCheckModuleContractRequest;
    message.moduleName = object.moduleName ?? "";
    message.toContractAddress = object.toContractAddress ?? new Uint8Array();
    message.fromChainId =
      object.fromChainId !== undefined && object.fromChainId !== null
        ? Long.fromValue(object.fromChainId)
        : Long.UZERO;
    return message;
  },
};

const baseQueryCheckModuleContractResponse: object = {
  moduleName: "",
  exist: false,
};

export const QueryCheckModuleContractResponse = {
  encode(
    message: QueryCheckModuleContractResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    if (message.exist === true) {
      writer.uint32(16).bool(message.exist);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCheckModuleContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCheckModuleContractResponse,
    } as QueryCheckModuleContractResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleName = reader.string();
          break;
        case 2:
          message.exist = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCheckModuleContractResponse {
    const message = {
      ...baseQueryCheckModuleContractResponse,
    } as QueryCheckModuleContractResponse;
    message.moduleName =
      object.moduleName !== undefined && object.moduleName !== null
        ? String(object.moduleName)
        : "";
    message.exist =
      object.exist !== undefined && object.exist !== null
        ? Boolean(object.exist)
        : false;
    return message;
  },

  toJSON(message: QueryCheckModuleContractResponse): unknown {
    const obj: any = {};
    message.moduleName !== undefined && (obj.moduleName = message.moduleName);
    message.exist !== undefined && (obj.exist = message.exist);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCheckModuleContractResponse>
  ): QueryCheckModuleContractResponse {
    const message = {
      ...baseQueryCheckModuleContractResponse,
    } as QueryCheckModuleContractResponse;
    message.moduleName = object.moduleName ?? "";
    message.exist = object.exist ?? false;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  CheckModuleContract(
    request: QueryCheckModuleContractRequest
  ): Promise<QueryCheckModuleContractResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CheckModuleContract = this.CheckModuleContract.bind(this);
  }
  CheckModuleContract(
    request: QueryCheckModuleContractRequest
  ): Promise<QueryCheckModuleContractResponse> {
    const data = QueryCheckModuleContractRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.ccm.Query",
      "CheckModuleContract",
      data
    );
    return promise.then((data) =>
      QueryCheckModuleContractResponse.decode(new _m0.Reader(data))
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

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
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
