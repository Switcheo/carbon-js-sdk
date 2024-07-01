/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.evmcontract";

export interface QueryBalanceRequest {
  carbonAddress: Uint8Array;
  evmAddress: Uint8Array;
  denom: string;
  caller: Uint8Array;
}

export interface QueryBalanceQueue {
  contractAddress: Uint8Array;
  requests: QueryBalanceRequest[];
}

export interface EVMContract {
  version: Long;
  contractType: string;
  address: string;
  active: boolean;
}

export interface ModuleEVMAddress {
  name: string;
  address: string;
}

export interface ModuleContracts {
  moduleName: string;
  contracts: EVMContract[];
}

const baseQueryBalanceRequest: object = { denom: "" };

export const QueryBalanceRequest = {
  encode(
    message: QueryBalanceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.carbonAddress.length !== 0) {
      writer.uint32(10).bytes(message.carbonAddress);
    }
    if (message.evmAddress.length !== 0) {
      writer.uint32(18).bytes(message.evmAddress);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.caller.length !== 0) {
      writer.uint32(34).bytes(message.caller);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBalanceRequest } as QueryBalanceRequest;
    message.carbonAddress = new Uint8Array();
    message.evmAddress = new Uint8Array();
    message.caller = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.carbonAddress = reader.bytes();
          break;
        case 2:
          message.evmAddress = reader.bytes();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.caller = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBalanceRequest {
    const message = { ...baseQueryBalanceRequest } as QueryBalanceRequest;
    message.carbonAddress =
      object.carbonAddress !== undefined && object.carbonAddress !== null
        ? bytesFromBase64(object.carbonAddress)
        : new Uint8Array();
    message.evmAddress =
      object.evmAddress !== undefined && object.evmAddress !== null
        ? bytesFromBase64(object.evmAddress)
        : new Uint8Array();
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.caller =
      object.caller !== undefined && object.caller !== null
        ? bytesFromBase64(object.caller)
        : new Uint8Array();
    return message;
  },

  toJSON(message: QueryBalanceRequest): unknown {
    const obj: any = {};
    message.carbonAddress !== undefined &&
      (obj.carbonAddress = base64FromBytes(
        message.carbonAddress !== undefined
          ? message.carbonAddress
          : new Uint8Array()
      ));
    message.evmAddress !== undefined &&
      (obj.evmAddress = base64FromBytes(
        message.evmAddress !== undefined ? message.evmAddress : new Uint8Array()
      ));
    message.denom !== undefined && (obj.denom = message.denom);
    message.caller !== undefined &&
      (obj.caller = base64FromBytes(
        message.caller !== undefined ? message.caller : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<QueryBalanceRequest>): QueryBalanceRequest {
    const message = { ...baseQueryBalanceRequest } as QueryBalanceRequest;
    message.carbonAddress = object.carbonAddress ?? new Uint8Array();
    message.evmAddress = object.evmAddress ?? new Uint8Array();
    message.denom = object.denom ?? "";
    message.caller = object.caller ?? new Uint8Array();
    return message;
  },
};

const baseQueryBalanceQueue: object = {};

export const QueryBalanceQueue = {
  encode(
    message: QueryBalanceQueue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.contractAddress.length !== 0) {
      writer.uint32(10).bytes(message.contractAddress);
    }
    for (const v of message.requests) {
      QueryBalanceRequest.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceQueue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBalanceQueue } as QueryBalanceQueue;
    message.requests = [];
    message.contractAddress = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.bytes();
          break;
        case 2:
          message.requests.push(
            QueryBalanceRequest.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBalanceQueue {
    const message = { ...baseQueryBalanceQueue } as QueryBalanceQueue;
    message.contractAddress =
      object.contractAddress !== undefined && object.contractAddress !== null
        ? bytesFromBase64(object.contractAddress)
        : new Uint8Array();
    message.requests = (object.requests ?? []).map((e: any) =>
      QueryBalanceRequest.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryBalanceQueue): unknown {
    const obj: any = {};
    message.contractAddress !== undefined &&
      (obj.contractAddress = base64FromBytes(
        message.contractAddress !== undefined
          ? message.contractAddress
          : new Uint8Array()
      ));
    if (message.requests) {
      obj.requests = message.requests.map((e) =>
        e ? QueryBalanceRequest.toJSON(e) : undefined
      );
    } else {
      obj.requests = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryBalanceQueue>): QueryBalanceQueue {
    const message = { ...baseQueryBalanceQueue } as QueryBalanceQueue;
    message.contractAddress = object.contractAddress ?? new Uint8Array();
    message.requests = (object.requests ?? []).map((e) =>
      QueryBalanceRequest.fromPartial(e)
    );
    return message;
  },
};

const baseEVMContract: object = {
  version: Long.UZERO,
  contractType: "",
  address: "",
  active: false,
};

export const EVMContract = {
  encode(
    message: EVMContract,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.version.isZero()) {
      writer.uint32(8).uint64(message.version);
    }
    if (message.contractType !== "") {
      writer.uint32(18).string(message.contractType);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.active === true) {
      writer.uint32(32).bool(message.active);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EVMContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEVMContract } as EVMContract;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.uint64() as Long;
          break;
        case 2:
          message.contractType = reader.string();
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.active = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EVMContract {
    const message = { ...baseEVMContract } as EVMContract;
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromString(object.version)
        : Long.UZERO;
    message.contractType =
      object.contractType !== undefined && object.contractType !== null
        ? String(object.contractType)
        : "";
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.active =
      object.active !== undefined && object.active !== null
        ? Boolean(object.active)
        : false;
    return message;
  },

  toJSON(message: EVMContract): unknown {
    const obj: any = {};
    message.version !== undefined &&
      (obj.version = (message.version || Long.UZERO).toString());
    message.contractType !== undefined &&
      (obj.contractType = message.contractType);
    message.address !== undefined && (obj.address = message.address);
    message.active !== undefined && (obj.active = message.active);
    return obj;
  },

  fromPartial(object: DeepPartial<EVMContract>): EVMContract {
    const message = { ...baseEVMContract } as EVMContract;
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromValue(object.version)
        : Long.UZERO;
    message.contractType = object.contractType ?? "";
    message.address = object.address ?? "";
    message.active = object.active ?? false;
    return message;
  },
};

const baseModuleEVMAddress: object = { name: "", address: "" };

export const ModuleEVMAddress = {
  encode(
    message: ModuleEVMAddress,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleEVMAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseModuleEVMAddress } as ModuleEVMAddress;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModuleEVMAddress {
    const message = { ...baseModuleEVMAddress } as ModuleEVMAddress;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: ModuleEVMAddress): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<ModuleEVMAddress>): ModuleEVMAddress {
    const message = { ...baseModuleEVMAddress } as ModuleEVMAddress;
    message.name = object.name ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

const baseModuleContracts: object = { moduleName: "" };

export const ModuleContracts = {
  encode(
    message: ModuleContracts,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    for (const v of message.contracts) {
      EVMContract.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleContracts {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseModuleContracts } as ModuleContracts;
    message.contracts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleName = reader.string();
          break;
        case 2:
          message.contracts.push(EVMContract.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModuleContracts {
    const message = { ...baseModuleContracts } as ModuleContracts;
    message.moduleName =
      object.moduleName !== undefined && object.moduleName !== null
        ? String(object.moduleName)
        : "";
    message.contracts = (object.contracts ?? []).map((e: any) =>
      EVMContract.fromJSON(e)
    );
    return message;
  },

  toJSON(message: ModuleContracts): unknown {
    const obj: any = {};
    message.moduleName !== undefined && (obj.moduleName = message.moduleName);
    if (message.contracts) {
      obj.contracts = message.contracts.map((e) =>
        e ? EVMContract.toJSON(e) : undefined
      );
    } else {
      obj.contracts = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ModuleContracts>): ModuleContracts {
    const message = { ...baseModuleContracts } as ModuleContracts;
    message.moduleName = object.moduleName ?? "";
    message.contracts = (object.contracts ?? []).map((e) =>
      EVMContract.fromPartial(e)
    );
    return message;
  },
};

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
