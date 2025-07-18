/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Bridge } from "./bridge";
import { TokenGroupDetails } from "./group";
import { LockedCoinsRecord, PositionPool, Token } from "./token";

export const protobufPackage = "Switcheo.carbon.coin";

/** GenesisState defines the coin module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  tokens: Token[];
  wrapperMappings: { [key: string]: string };
  lockedCoins: LockedCoinsRecord[];
  positionPools: PositionPool[];
  bridges: Bridge[];
  /** this line is used by starport scaffolding # ibc/genesis/proto */
  groups: TokenGroupDetails[];
}

export interface GenesisState_WrapperMappingsEntry {
  key: string;
  value: string;
}

function createBaseGenesisState(): GenesisState {
  return { tokens: [], wrapperMappings: {}, lockedCoins: [], positionPools: [], bridges: [], groups: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tokens) {
      Token.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    Object.entries(message.wrapperMappings).forEach(([key, value]) => {
      GenesisState_WrapperMappingsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    for (const v of message.lockedCoins) {
      LockedCoinsRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.positionPools) {
      PositionPool.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.bridges) {
      Bridge.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.groups) {
      TokenGroupDetails.encode(v!, writer.uint32(50).fork()).ldelim();
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

          message.tokens.push(Token.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = GenesisState_WrapperMappingsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.wrapperMappings[entry2.key] = entry2.value;
          }
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.lockedCoins.push(LockedCoinsRecord.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.positionPools.push(PositionPool.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.bridges.push(Bridge.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.groups.push(TokenGroupDetails.decode(reader, reader.uint32()));
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
      tokens: Array.isArray(object?.tokens) ? object.tokens.map((e: any) => Token.fromJSON(e)) : [],
      wrapperMappings: isObject(object.wrapperMappings)
        ? Object.entries(object.wrapperMappings).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      lockedCoins: Array.isArray(object?.lockedCoins)
        ? object.lockedCoins.map((e: any) => LockedCoinsRecord.fromJSON(e))
        : [],
      positionPools: Array.isArray(object?.positionPools)
        ? object.positionPools.map((e: any) => PositionPool.fromJSON(e))
        : [],
      bridges: Array.isArray(object?.bridges) ? object.bridges.map((e: any) => Bridge.fromJSON(e)) : [],
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => TokenGroupDetails.fromJSON(e)) : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.tokens) {
      obj.tokens = message.tokens.map((e) => e ? Token.toJSON(e) : undefined);
    } else {
      obj.tokens = [];
    }
    obj.wrapperMappings = {};
    if (message.wrapperMappings) {
      Object.entries(message.wrapperMappings).forEach(([k, v]) => {
        obj.wrapperMappings[k] = v;
      });
    }
    if (message.lockedCoins) {
      obj.lockedCoins = message.lockedCoins.map((e) => e ? LockedCoinsRecord.toJSON(e) : undefined);
    } else {
      obj.lockedCoins = [];
    }
    if (message.positionPools) {
      obj.positionPools = message.positionPools.map((e) => e ? PositionPool.toJSON(e) : undefined);
    } else {
      obj.positionPools = [];
    }
    if (message.bridges) {
      obj.bridges = message.bridges.map((e) => e ? Bridge.toJSON(e) : undefined);
    } else {
      obj.bridges = [];
    }
    if (message.groups) {
      obj.groups = message.groups.map((e) => e ? TokenGroupDetails.toJSON(e) : undefined);
    } else {
      obj.groups = [];
    }
    return obj;
  },

  create(base?: DeepPartial<GenesisState>): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.tokens = object.tokens?.map((e) => Token.fromPartial(e)) || [];
    message.wrapperMappings = Object.entries(object.wrapperMappings ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = String(value);
        }
        return acc;
      },
      {},
    );
    message.lockedCoins = object.lockedCoins?.map((e) => LockedCoinsRecord.fromPartial(e)) || [];
    message.positionPools = object.positionPools?.map((e) => PositionPool.fromPartial(e)) || [];
    message.bridges = object.bridges?.map((e) => Bridge.fromPartial(e)) || [];
    message.groups = object.groups?.map((e) => TokenGroupDetails.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGenesisState_WrapperMappingsEntry(): GenesisState_WrapperMappingsEntry {
  return { key: "", value: "" };
}

export const GenesisState_WrapperMappingsEntry = {
  encode(message: GenesisState_WrapperMappingsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_WrapperMappingsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState_WrapperMappingsEntry();
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

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState_WrapperMappingsEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: GenesisState_WrapperMappingsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create(base?: DeepPartial<GenesisState_WrapperMappingsEntry>): GenesisState_WrapperMappingsEntry {
    return GenesisState_WrapperMappingsEntry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GenesisState_WrapperMappingsEntry>): GenesisState_WrapperMappingsEntry {
    const message = createBaseGenesisState_WrapperMappingsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

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
