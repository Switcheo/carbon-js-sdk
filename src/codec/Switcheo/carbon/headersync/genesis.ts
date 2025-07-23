/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ConsensusPeers, ZionConsensusPeers } from "./consensus_peers";

export const protobufPackage = "Switcheo.carbon.headersync";

/** GenesisState defines the headersync module's genesis state. */
export interface GenesisState {
  /** Peers for each PoS chain by chain ID. */
  consensusPeers: { [key: string]: ConsensusPeers };
  /**
   * Header hash for blocks where consensus public keys is updated for PoS chain
   * by chain ID.
   */
  checkpointHashes: { [key: string]: Uint8Array };
  /** Deprecated: Used for genesis import and export */
  zionConsensusPeers: { [key: string]: ZionConsensusPeers };
  /** Deprecated: Used for genesis import and export */
  zionCheckpointHashes: { [key: string]: Uint8Array };
}

export interface GenesisState_ConsensusPeersEntry {
  key: string;
  value?: ConsensusPeers;
}

export interface GenesisState_CheckpointHashesEntry {
  key: string;
  value: Uint8Array;
}

export interface GenesisState_ZionConsensusPeersEntry {
  key: string;
  value?: ZionConsensusPeers;
}

export interface GenesisState_ZionCheckpointHashesEntry {
  key: string;
  value: Uint8Array;
}

function createBaseGenesisState(): GenesisState {
  return { consensusPeers: {}, checkpointHashes: {}, zionConsensusPeers: {}, zionCheckpointHashes: {} };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.consensusPeers).forEach(([key, value]) => {
      GenesisState_ConsensusPeersEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    Object.entries(message.checkpointHashes).forEach(([key, value]) => {
      GenesisState_CheckpointHashesEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    Object.entries(message.zionConsensusPeers).forEach(([key, value]) => {
      GenesisState_ZionConsensusPeersEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    Object.entries(message.zionCheckpointHashes).forEach(([key, value]) => {
      GenesisState_ZionCheckpointHashesEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).ldelim();
    });
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

          const entry1 = GenesisState_ConsensusPeersEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.consensusPeers[entry1.key] = entry1.value;
          }
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = GenesisState_CheckpointHashesEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.checkpointHashes[entry2.key] = entry2.value;
          }
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = GenesisState_ZionConsensusPeersEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.zionConsensusPeers[entry3.key] = entry3.value;
          }
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          const entry4 = GenesisState_ZionCheckpointHashesEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.zionCheckpointHashes[entry4.key] = entry4.value;
          }
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
      consensusPeers: isObject(object.consensusPeers)
        ? Object.entries(object.consensusPeers).reduce<{ [key: string]: ConsensusPeers }>((acc, [key, value]) => {
          acc[key] = ConsensusPeers.fromJSON(value);
          return acc;
        }, {})
        : {},
      checkpointHashes: isObject(object.checkpointHashes)
        ? Object.entries(object.checkpointHashes).reduce<{ [key: string]: Uint8Array }>((acc, [key, value]) => {
          acc[key] = bytesFromBase64(value as string);
          return acc;
        }, {})
        : {},
      zionConsensusPeers: isObject(object.zionConsensusPeers)
        ? Object.entries(object.zionConsensusPeers).reduce<{ [key: string]: ZionConsensusPeers }>(
          (acc, [key, value]) => {
            acc[key] = ZionConsensusPeers.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
      zionCheckpointHashes: isObject(object.zionCheckpointHashes)
        ? Object.entries(object.zionCheckpointHashes).reduce<{ [key: string]: Uint8Array }>((acc, [key, value]) => {
          acc[key] = bytesFromBase64(value as string);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    obj.consensusPeers = {};
    if (message.consensusPeers) {
      Object.entries(message.consensusPeers).forEach(([k, v]) => {
        obj.consensusPeers[k] = ConsensusPeers.toJSON(v);
      });
    }
    obj.checkpointHashes = {};
    if (message.checkpointHashes) {
      Object.entries(message.checkpointHashes).forEach(([k, v]) => {
        obj.checkpointHashes[k] = base64FromBytes(v);
      });
    }
    obj.zionConsensusPeers = {};
    if (message.zionConsensusPeers) {
      Object.entries(message.zionConsensusPeers).forEach(([k, v]) => {
        obj.zionConsensusPeers[k] = ZionConsensusPeers.toJSON(v);
      });
    }
    obj.zionCheckpointHashes = {};
    if (message.zionCheckpointHashes) {
      Object.entries(message.zionCheckpointHashes).forEach(([k, v]) => {
        obj.zionCheckpointHashes[k] = base64FromBytes(v);
      });
    }
    return obj;
  },

  create(base?: DeepPartial<GenesisState>): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.consensusPeers = Object.entries(object.consensusPeers ?? {}).reduce<{ [key: string]: ConsensusPeers }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = ConsensusPeers.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.checkpointHashes = Object.entries(object.checkpointHashes ?? {}).reduce<{ [key: string]: Uint8Array }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = value;
        }
        return acc;
      },
      {},
    );
    message.zionConsensusPeers = Object.entries(object.zionConsensusPeers ?? {}).reduce<
      { [key: string]: ZionConsensusPeers }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = ZionConsensusPeers.fromPartial(value);
      }
      return acc;
    }, {});
    message.zionCheckpointHashes = Object.entries(object.zionCheckpointHashes ?? {}).reduce<
      { [key: string]: Uint8Array }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseGenesisState_ConsensusPeersEntry(): GenesisState_ConsensusPeersEntry {
  return { key: "", value: undefined };
}

export const GenesisState_ConsensusPeersEntry = {
  encode(message: GenesisState_ConsensusPeersEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ConsensusPeers.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_ConsensusPeersEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState_ConsensusPeersEntry();
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

          message.value = ConsensusPeers.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState_ConsensusPeersEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? ConsensusPeers.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: GenesisState_ConsensusPeersEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? ConsensusPeers.toJSON(message.value) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GenesisState_ConsensusPeersEntry>): GenesisState_ConsensusPeersEntry {
    return GenesisState_ConsensusPeersEntry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GenesisState_ConsensusPeersEntry>): GenesisState_ConsensusPeersEntry {
    const message = createBaseGenesisState_ConsensusPeersEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? ConsensusPeers.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseGenesisState_CheckpointHashesEntry(): GenesisState_CheckpointHashesEntry {
  return { key: "", value: new Uint8Array() };
}

export const GenesisState_CheckpointHashesEntry = {
  encode(message: GenesisState_CheckpointHashesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_CheckpointHashesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState_CheckpointHashesEntry();
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

  fromJSON(object: any): GenesisState_CheckpointHashesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
    };
  },

  toJSON(message: GenesisState_CheckpointHashesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },

  create(base?: DeepPartial<GenesisState_CheckpointHashesEntry>): GenesisState_CheckpointHashesEntry {
    return GenesisState_CheckpointHashesEntry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GenesisState_CheckpointHashesEntry>): GenesisState_CheckpointHashesEntry {
    const message = createBaseGenesisState_CheckpointHashesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

function createBaseGenesisState_ZionConsensusPeersEntry(): GenesisState_ZionConsensusPeersEntry {
  return { key: "", value: undefined };
}

export const GenesisState_ZionConsensusPeersEntry = {
  encode(message: GenesisState_ZionConsensusPeersEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ZionConsensusPeers.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_ZionConsensusPeersEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState_ZionConsensusPeersEntry();
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

          message.value = ZionConsensusPeers.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState_ZionConsensusPeersEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? ZionConsensusPeers.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: GenesisState_ZionConsensusPeersEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? ZionConsensusPeers.toJSON(message.value) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GenesisState_ZionConsensusPeersEntry>): GenesisState_ZionConsensusPeersEntry {
    return GenesisState_ZionConsensusPeersEntry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GenesisState_ZionConsensusPeersEntry>): GenesisState_ZionConsensusPeersEntry {
    const message = createBaseGenesisState_ZionConsensusPeersEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? ZionConsensusPeers.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseGenesisState_ZionCheckpointHashesEntry(): GenesisState_ZionCheckpointHashesEntry {
  return { key: "", value: new Uint8Array() };
}

export const GenesisState_ZionCheckpointHashesEntry = {
  encode(message: GenesisState_ZionCheckpointHashesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_ZionCheckpointHashesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState_ZionCheckpointHashesEntry();
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

  fromJSON(object: any): GenesisState_ZionCheckpointHashesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
    };
  },

  toJSON(message: GenesisState_ZionCheckpointHashesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },

  create(base?: DeepPartial<GenesisState_ZionCheckpointHashesEntry>): GenesisState_ZionCheckpointHashesEntry {
    return GenesisState_ZionCheckpointHashesEntry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GenesisState_ZionCheckpointHashesEntry>): GenesisState_ZionCheckpointHashesEntry {
    const message = createBaseGenesisState_ZionCheckpointHashesEntry();
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
