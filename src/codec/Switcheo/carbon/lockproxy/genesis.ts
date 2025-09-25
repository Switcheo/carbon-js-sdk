/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { WrapperMapping } from "./lockproxy";

export const protobufPackage = "Switcheo.carbon.lockproxy";

/** GenesisState defines the lockproxy module's genesis state. */
export interface GenesisState {
  /** An auto-incrementing nonce for withdrawals. */
  nonce: string;
  /** Records chainIDs (value is always []byte("1") if exists) */
  chainIds: { [key: string]: Uint8Array };
  /** Records registries (value is []byte(denom)) */
  registries: { [key: string]: Uint8Array };
  /** Records operators (value is operator address as bytes) */
  operators: { [key: string]: Uint8Array };
  /** Records wrapper mappings */
  wrapperMappings: WrapperMapping[];
}

export interface GenesisState_ChainIdsEntry {
  key: string;
  value: Uint8Array;
}

export interface GenesisState_RegistriesEntry {
  key: string;
  value: Uint8Array;
}

export interface GenesisState_OperatorsEntry {
  key: string;
  value: Uint8Array;
}

function createBaseGenesisState(): GenesisState {
  return { nonce: "", chainIds: {}, registries: {}, operators: {}, wrapperMappings: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nonce !== "") {
      writer.uint32(10).string(message.nonce);
    }
    Object.entries(message.chainIds).forEach(([key, value]) => {
      GenesisState_ChainIdsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    Object.entries(message.registries).forEach(([key, value]) => {
      GenesisState_RegistriesEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    Object.entries(message.operators).forEach(([key, value]) => {
      GenesisState_OperatorsEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).ldelim();
    });
    for (const v of message.wrapperMappings) {
      WrapperMapping.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nonce = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = GenesisState_ChainIdsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.chainIds[entry2.key] = entry2.value;
          }
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = GenesisState_RegistriesEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.registries[entry3.key] = entry3.value;
          }
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          const entry4 = GenesisState_OperatorsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.operators[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.wrapperMappings.push(WrapperMapping.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      nonce: isSet(object.nonce) ? String(object.nonce) : "",
      chainIds: isObject(object.chainIds)
        ? Object.entries(object.chainIds).reduce<{ [key: string]: Uint8Array }>((acc, [key, value]) => {
          acc[key] = bytesFromBase64(value as string);
          return acc;
        }, {})
        : {},
      registries: isObject(object.registries)
        ? Object.entries(object.registries).reduce<{ [key: string]: Uint8Array }>((acc, [key, value]) => {
          acc[key] = bytesFromBase64(value as string);
          return acc;
        }, {})
        : {},
      operators: isObject(object.operators)
        ? Object.entries(object.operators).reduce<{ [key: string]: Uint8Array }>((acc, [key, value]) => {
          acc[key] = bytesFromBase64(value as string);
          return acc;
        }, {})
        : {},
      wrapperMappings: Array.isArray(object?.wrapperMappings)
        ? object.wrapperMappings.map((e: any) => WrapperMapping.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = message.nonce);
    obj.chainIds = {};
    if (message.chainIds) {
      Object.entries(message.chainIds).forEach(([k, v]) => {
        obj.chainIds[k] = base64FromBytes(v);
      });
    }
    obj.registries = {};
    if (message.registries) {
      Object.entries(message.registries).forEach(([k, v]) => {
        obj.registries[k] = base64FromBytes(v);
      });
    }
    obj.operators = {};
    if (message.operators) {
      Object.entries(message.operators).forEach(([k, v]) => {
        obj.operators[k] = base64FromBytes(v);
      });
    }
    if (message.wrapperMappings) {
      obj.wrapperMappings = message.wrapperMappings.map((e) => e ? WrapperMapping.toJSON(e) : undefined);
    } else {
      obj.wrapperMappings = [];
    }
    return obj;
  },

  create(base?: DeepPartial<GenesisState>): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.nonce = object.nonce ?? "";
    message.chainIds = Object.entries(object.chainIds ?? {}).reduce<{ [key: string]: Uint8Array }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = value;
        }
        return acc;
      },
      {},
    );
    message.registries = Object.entries(object.registries ?? {}).reduce<{ [key: string]: Uint8Array }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = value;
        }
        return acc;
      },
      {},
    );
    message.operators = Object.entries(object.operators ?? {}).reduce<{ [key: string]: Uint8Array }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = value;
        }
        return acc;
      },
      {},
    );
    message.wrapperMappings = object.wrapperMappings?.map((e) => WrapperMapping.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGenesisState_ChainIdsEntry(): GenesisState_ChainIdsEntry {
  return { key: "", value: new Uint8Array() };
}

export const GenesisState_ChainIdsEntry = {
  encode(message: GenesisState_ChainIdsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_ChainIdsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState_ChainIdsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState_ChainIdsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
    };
  },

  toJSON(message: GenesisState_ChainIdsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },

  create(base?: DeepPartial<GenesisState_ChainIdsEntry>): GenesisState_ChainIdsEntry {
    return GenesisState_ChainIdsEntry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GenesisState_ChainIdsEntry>): GenesisState_ChainIdsEntry {
    const message = createBaseGenesisState_ChainIdsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

function createBaseGenesisState_RegistriesEntry(): GenesisState_RegistriesEntry {
  return { key: "", value: new Uint8Array() };
}

export const GenesisState_RegistriesEntry = {
  encode(message: GenesisState_RegistriesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_RegistriesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState_RegistriesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState_RegistriesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
    };
  },

  toJSON(message: GenesisState_RegistriesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },

  create(base?: DeepPartial<GenesisState_RegistriesEntry>): GenesisState_RegistriesEntry {
    return GenesisState_RegistriesEntry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GenesisState_RegistriesEntry>): GenesisState_RegistriesEntry {
    const message = createBaseGenesisState_RegistriesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

function createBaseGenesisState_OperatorsEntry(): GenesisState_OperatorsEntry {
  return { key: "", value: new Uint8Array() };
}

export const GenesisState_OperatorsEntry = {
  encode(message: GenesisState_OperatorsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_OperatorsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState_OperatorsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState_OperatorsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
    };
  },

  toJSON(message: GenesisState_OperatorsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },

  create(base?: DeepPartial<GenesisState_OperatorsEntry>): GenesisState_OperatorsEntry {
    return GenesisState_OperatorsEntry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GenesisState_OperatorsEntry>): GenesisState_OperatorsEntry {
    const message = createBaseGenesisState_OperatorsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array();
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
