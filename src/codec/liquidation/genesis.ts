/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { OutstandingPositions } from "../liquidation/outstanding_position";

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

const baseGenesisState: object = {};

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.outstandingPositions).forEach(([key, value]) => {
      GenesisState_OutstandingPositionsEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.outstandingPositions = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = GenesisState_OutstandingPositionsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry1.value !== undefined) {
            message.outstandingPositions[entry1.key] = entry1.value;
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
    message.outstandingPositions = {};
    if (
      object.outstandingPositions !== undefined &&
      object.outstandingPositions !== null
    ) {
      Object.entries(object.outstandingPositions).forEach(([key, value]) => {
        message.outstandingPositions[key] =
          OutstandingPositions.fromJSON(value);
      });
    }
    return message;
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

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.outstandingPositions = {};
    if (
      object.outstandingPositions !== undefined &&
      object.outstandingPositions !== null
    ) {
      Object.entries(object.outstandingPositions).forEach(([key, value]) => {
        if (value !== undefined) {
          message.outstandingPositions[key] =
            OutstandingPositions.fromPartial(value);
        }
      });
    }
    return message;
  },
};

const baseGenesisState_OutstandingPositionsEntry: object = { key: "" };

export const GenesisState_OutstandingPositionsEntry = {
  encode(
    message: GenesisState_OutstandingPositionsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      OutstandingPositions.encode(
        message.value,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GenesisState_OutstandingPositionsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGenesisState_OutstandingPositionsEntry,
    } as GenesisState_OutstandingPositionsEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = OutstandingPositions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState_OutstandingPositionsEntry {
    const message = {
      ...baseGenesisState_OutstandingPositionsEntry,
    } as GenesisState_OutstandingPositionsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = OutstandingPositions.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: GenesisState_OutstandingPositionsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? OutstandingPositions.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GenesisState_OutstandingPositionsEntry>
  ): GenesisState_OutstandingPositionsEntry {
    const message = {
      ...baseGenesisState_OutstandingPositionsEntry,
    } as GenesisState_OutstandingPositionsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = OutstandingPositions.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
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
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
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
