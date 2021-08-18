/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Position } from "../position/position";

export const protobufPackage = "Switcheo.carbon.position";

/** GenesisState defines the position module's genesis state. */
export interface GenesisState {
  /**
   * this line is used by starport scaffolding # genesis/proto/state
   * this line is used by starport scaffolding # ibc/genesis/proto
   */
  openPositions: Position[];
  positionSequence: Long;
}

const baseGenesisState: object = { positionSequence: Long.UZERO };

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.openPositions) {
      Position.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (!message.positionSequence.isZero()) {
      writer.uint32(16).uint64(message.positionSequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.openPositions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.openPositions.push(Position.decode(reader, reader.uint32()));
          break;
        case 2:
          message.positionSequence = reader.uint64() as Long;
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
    message.openPositions = [];
    if (object.openPositions !== undefined && object.openPositions !== null) {
      for (const e of object.openPositions) {
        message.openPositions.push(Position.fromJSON(e));
      }
    }
    if (
      object.positionSequence !== undefined &&
      object.positionSequence !== null
    ) {
      message.positionSequence = Long.fromString(object.positionSequence);
    } else {
      message.positionSequence = Long.UZERO;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.openPositions) {
      obj.openPositions = message.openPositions.map((e) =>
        e ? Position.toJSON(e) : undefined
      );
    } else {
      obj.openPositions = [];
    }
    message.positionSequence !== undefined &&
      (obj.positionSequence = (
        message.positionSequence || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.openPositions = [];
    if (object.openPositions !== undefined && object.openPositions !== null) {
      for (const e of object.openPositions) {
        message.openPositions.push(Position.fromPartial(e));
      }
    }
    if (
      object.positionSequence !== undefined &&
      object.positionSequence !== null
    ) {
      message.positionSequence = object.positionSequence as Long;
    } else {
      message.positionSequence = Long.UZERO;
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
