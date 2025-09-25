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

function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return { carbonAddress: new Uint8Array(), evmAddress: new Uint8Array(), denom: "", caller: new Uint8Array() };
}

export const QueryBalanceRequest = {
  encode(message: QueryBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.carbonAddress = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.evmAddress = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.caller = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryBalanceRequest {
    return {
      carbonAddress: isSet(object.carbonAddress) ? bytesFromBase64(object.carbonAddress) : new Uint8Array(),
      evmAddress: isSet(object.evmAddress) ? bytesFromBase64(object.evmAddress) : new Uint8Array(),
      denom: isSet(object.denom) ? String(object.denom) : "",
      caller: isSet(object.caller) ? bytesFromBase64(object.caller) : new Uint8Array(),
    };
  },

  toJSON(message: QueryBalanceRequest): unknown {
    const obj: any = {};
    message.carbonAddress !== undefined &&
      (obj.carbonAddress = base64FromBytes(
        message.carbonAddress !== undefined ? message.carbonAddress : new Uint8Array(),
      ));
    message.evmAddress !== undefined &&
      (obj.evmAddress = base64FromBytes(message.evmAddress !== undefined ? message.evmAddress : new Uint8Array()));
    message.denom !== undefined && (obj.denom = message.denom);
    message.caller !== undefined &&
      (obj.caller = base64FromBytes(message.caller !== undefined ? message.caller : new Uint8Array()));
    return obj;
  },

  create(base?: DeepPartial<QueryBalanceRequest>): QueryBalanceRequest {
    return QueryBalanceRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryBalanceRequest>): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    message.carbonAddress = object.carbonAddress ?? new Uint8Array();
    message.evmAddress = object.evmAddress ?? new Uint8Array();
    message.denom = object.denom ?? "";
    message.caller = object.caller ?? new Uint8Array();
    return message;
  },
};

function createBaseQueryBalanceQueue(): QueryBalanceQueue {
  return { contractAddress: new Uint8Array(), requests: [] };
}

export const QueryBalanceQueue = {
  encode(message: QueryBalanceQueue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress.length !== 0) {
      writer.uint32(10).bytes(message.contractAddress);
    }
    for (const v of message.requests) {
      QueryBalanceRequest.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceQueue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceQueue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.contractAddress = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.requests.push(QueryBalanceRequest.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryBalanceQueue {
    return {
      contractAddress: isSet(object.contractAddress) ? bytesFromBase64(object.contractAddress) : new Uint8Array(),
      requests: Array.isArray(object?.requests) ? object.requests.map((e: any) => QueryBalanceRequest.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryBalanceQueue): unknown {
    const obj: any = {};
    message.contractAddress !== undefined &&
      (obj.contractAddress = base64FromBytes(
        message.contractAddress !== undefined ? message.contractAddress : new Uint8Array(),
      ));
    if (message.requests) {
      obj.requests = message.requests.map((e) => e ? QueryBalanceRequest.toJSON(e) : undefined);
    } else {
      obj.requests = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryBalanceQueue>): QueryBalanceQueue {
    return QueryBalanceQueue.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryBalanceQueue>): QueryBalanceQueue {
    const message = createBaseQueryBalanceQueue();
    message.contractAddress = object.contractAddress ?? new Uint8Array();
    message.requests = object.requests?.map((e) => QueryBalanceRequest.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEVMContract(): EVMContract {
  return { version: Long.UZERO, contractType: "", address: "", active: false };
}

export const EVMContract = {
  encode(message: EVMContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEVMContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.version = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.contractType = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.address = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.active = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EVMContract {
    return {
      version: isSet(object.version) ? Long.fromValue(object.version) : Long.UZERO,
      contractType: isSet(object.contractType) ? String(object.contractType) : "",
      address: isSet(object.address) ? String(object.address) : "",
      active: isSet(object.active) ? Boolean(object.active) : false,
    };
  },

  toJSON(message: EVMContract): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = (message.version || Long.UZERO).toString());
    message.contractType !== undefined && (obj.contractType = message.contractType);
    message.address !== undefined && (obj.address = message.address);
    message.active !== undefined && (obj.active = message.active);
    return obj;
  },

  create(base?: DeepPartial<EVMContract>): EVMContract {
    return EVMContract.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EVMContract>): EVMContract {
    const message = createBaseEVMContract();
    message.version = (object.version !== undefined && object.version !== null)
      ? Long.fromValue(object.version)
      : Long.UZERO;
    message.contractType = object.contractType ?? "";
    message.address = object.address ?? "";
    message.active = object.active ?? false;
    return message;
  },
};

function createBaseModuleEVMAddress(): ModuleEVMAddress {
  return { name: "", address: "" };
}

export const ModuleEVMAddress = {
  encode(message: ModuleEVMAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleEVMAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleEVMAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ModuleEVMAddress {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: ModuleEVMAddress): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<ModuleEVMAddress>): ModuleEVMAddress {
    return ModuleEVMAddress.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ModuleEVMAddress>): ModuleEVMAddress {
    const message = createBaseModuleEVMAddress();
    message.name = object.name ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseModuleContracts(): ModuleContracts {
  return { moduleName: "", contracts: [] };
}

export const ModuleContracts = {
  encode(message: ModuleContracts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    for (const v of message.contracts) {
      EVMContract.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleContracts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleContracts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.moduleName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.contracts.push(EVMContract.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ModuleContracts {
    return {
      moduleName: isSet(object.moduleName) ? String(object.moduleName) : "",
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => EVMContract.fromJSON(e)) : [],
    };
  },

  toJSON(message: ModuleContracts): unknown {
    const obj: any = {};
    message.moduleName !== undefined && (obj.moduleName = message.moduleName);
    if (message.contracts) {
      obj.contracts = message.contracts.map((e) => e ? EVMContract.toJSON(e) : undefined);
    } else {
      obj.contracts = [];
    }
    return obj;
  },

  create(base?: DeepPartial<ModuleContracts>): ModuleContracts {
    return ModuleContracts.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ModuleContracts>): ModuleContracts {
    const message = createBaseModuleContracts();
    message.moduleName = object.moduleName ?? "";
    message.contracts = object.contracts?.map((e) => EVMContract.fromPartial(e)) || [];
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
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
