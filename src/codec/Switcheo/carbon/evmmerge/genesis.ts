/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.evmmerge";

/** GenesisState defines the evmmerge module's genesis state. */
export interface GenesisState {
  /** eth-cosmos mapping from account keeper */
  ethToCosmosAddressMap: { [key: string]: string };
  /** cosmos-eth mapping from account keeper */
  cosmosToEthAddressMap: { [key: string]: string };
}

export interface GenesisState_EthToCosmosAddressMapEntry {
  key: string;
  value: string;
}

export interface GenesisState_CosmosToEthAddressMapEntry {
  key: string;
  value: string;
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.ethToCosmosAddressMap).forEach(([key, value]) => {
      GenesisState_EthToCosmosAddressMapEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    Object.entries(message.cosmosToEthAddressMap).forEach(([key, value]) => {
      GenesisState_CosmosToEthAddressMapEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.ethToCosmosAddressMap = {};
    message.cosmosToEthAddressMap = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = GenesisState_EthToCosmosAddressMapEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry1.value !== undefined) {
            message.ethToCosmosAddressMap[entry1.key] = entry1.value;
          }
          break;
        case 2:
          const entry2 = GenesisState_CosmosToEthAddressMapEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry2.value !== undefined) {
            message.cosmosToEthAddressMap[entry2.key] = entry2.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.ethToCosmosAddressMap = Object.entries(
      object.ethToCosmosAddressMap ?? {}
    ).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.cosmosToEthAddressMap = Object.entries(
      object.cosmosToEthAddressMap ?? {}
    ).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    obj.ethToCosmosAddressMap = {};
    if (message.ethToCosmosAddressMap) {
      Object.entries(message.ethToCosmosAddressMap).forEach(([k, v]) => {
        obj.ethToCosmosAddressMap[k] = v;
      });
    }
    obj.cosmosToEthAddressMap = {};
    if (message.cosmosToEthAddressMap) {
      Object.entries(message.cosmosToEthAddressMap).forEach(([k, v]) => {
        obj.cosmosToEthAddressMap[k] = v;
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.ethToCosmosAddressMap = Object.entries(
      object.ethToCosmosAddressMap ?? {}
    ).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.cosmosToEthAddressMap = Object.entries(
      object.cosmosToEthAddressMap ?? {}
    ).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

const baseGenesisState_EthToCosmosAddressMapEntry: object = {
  key: "",
  value: "",
};

export const GenesisState_EthToCosmosAddressMapEntry = {
  encode(
    message: GenesisState_EthToCosmosAddressMapEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GenesisState_EthToCosmosAddressMapEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGenesisState_EthToCosmosAddressMapEntry,
    } as GenesisState_EthToCosmosAddressMapEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState_EthToCosmosAddressMapEntry {
    const message = {
      ...baseGenesisState_EthToCosmosAddressMapEntry,
    } as GenesisState_EthToCosmosAddressMapEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: GenesisState_EthToCosmosAddressMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GenesisState_EthToCosmosAddressMapEntry>
  ): GenesisState_EthToCosmosAddressMapEntry {
    const message = {
      ...baseGenesisState_EthToCosmosAddressMapEntry,
    } as GenesisState_EthToCosmosAddressMapEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

const baseGenesisState_CosmosToEthAddressMapEntry: object = {
  key: "",
  value: "",
};

export const GenesisState_CosmosToEthAddressMapEntry = {
  encode(
    message: GenesisState_CosmosToEthAddressMapEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GenesisState_CosmosToEthAddressMapEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGenesisState_CosmosToEthAddressMapEntry,
    } as GenesisState_CosmosToEthAddressMapEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState_CosmosToEthAddressMapEntry {
    const message = {
      ...baseGenesisState_CosmosToEthAddressMapEntry,
    } as GenesisState_CosmosToEthAddressMapEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: GenesisState_CosmosToEthAddressMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GenesisState_CosmosToEthAddressMapEntry>
  ): GenesisState_CosmosToEthAddressMapEntry {
    const message = {
      ...baseGenesisState_CosmosToEthAddressMapEntry,
    } as GenesisState_CosmosToEthAddressMapEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

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
