/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { OutstandingPositions } from "./outstanding_position";

export const protobufPackage = "Switcheo.carbon.liquidation";

/** GenesisState defines the liquidation module's genesis state. */
export interface GenesisState {
  /**
   * this line is used by starport scaffolding # genesis/proto/state
   * this line is used by starport scaffolding # ibc/genesis/proto
   */
  outstandingPositions: { [key: string]: OutstandingPositions };
}

export interface GenesisState_OutstandingPositionsEntry {
  key: string;
  value?: OutstandingPositions;
}

function createBaseGenesisState(): GenesisState {
  return { outstandingPositions: {} };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.outstandingPositions).forEach(([key, value]) => {
      GenesisState_OutstandingPositionsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
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

          const entry1 = GenesisState_OutstandingPositionsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.outstandingPositions[entry1.key] = entry1.value;
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
      outstandingPositions: isObject(object.outstandingPositions)
        ? Object.entries(object.outstandingPositions).reduce<{ [key: string]: OutstandingPositions }>(
          (acc, [key, value]) => {
            acc[key] = OutstandingPositions.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    obj.outstandingPositions = {};
    if (message.outstandingPositions) {
      Object.entries(message.outstandingPositions).forEach(([k, v]) => {
        obj.outstandingPositions[k] = OutstandingPositions.toJSON(v);
      });
    }
    return obj;
  },

  create(base?: DeepPartial<GenesisState>): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.outstandingPositions = Object.entries(object.outstandingPositions ?? {}).reduce<
      { [key: string]: OutstandingPositions }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = OutstandingPositions.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseGenesisState_OutstandingPositionsEntry(): GenesisState_OutstandingPositionsEntry {
  return { key: "", value: undefined };
}

export const GenesisState_OutstandingPositionsEntry = {
  encode(message: GenesisState_OutstandingPositionsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      OutstandingPositions.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_OutstandingPositionsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState_OutstandingPositionsEntry();
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

          message.value = OutstandingPositions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState_OutstandingPositionsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? OutstandingPositions.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: GenesisState_OutstandingPositionsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? OutstandingPositions.toJSON(message.value) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GenesisState_OutstandingPositionsEntry>): GenesisState_OutstandingPositionsEntry {
    return GenesisState_OutstandingPositionsEntry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GenesisState_OutstandingPositionsEntry>): GenesisState_OutstandingPositionsEntry {
    const message = createBaseGenesisState_OutstandingPositionsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? OutstandingPositions.fromPartial(object.value)
      : undefined;
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
