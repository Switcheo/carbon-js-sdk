/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { MintData } from "./inflation";

export const protobufPackage = "Switcheo.carbon.inflation";

/** GenesisState defines the inflation module's genesis state. */
export interface GenesisState {
  /**
   * this line is used by starport scaffolding # genesis/proto/state
   * this line is used by starport scaffolding # ibc/genesis/proto
   */
  mintData?: MintData;
  inflationEnabled: boolean;
}

const baseGenesisState: object = { inflationEnabled: false };

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mintData !== undefined) {
      MintData.encode(message.mintData, writer.uint32(10).fork()).ldelim();
    }
    if (message.inflationEnabled === true) {
      writer.uint32(16).bool(message.inflationEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintData = MintData.decode(reader, reader.uint32());
          break;
        case 2:
          message.inflationEnabled = reader.bool();
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
    message.mintData =
      object.mintData !== undefined && object.mintData !== null
        ? MintData.fromJSON(object.mintData)
        : undefined;
    message.inflationEnabled =
      object.inflationEnabled !== undefined && object.inflationEnabled !== null
        ? Boolean(object.inflationEnabled)
        : false;
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.mintData !== undefined &&
      (obj.mintData = message.mintData
        ? MintData.toJSON(message.mintData)
        : undefined);
    message.inflationEnabled !== undefined &&
      (obj.inflationEnabled = message.inflationEnabled);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.mintData =
      object.mintData !== undefined && object.mintData !== null
        ? MintData.fromPartial(object.mintData)
        : undefined;
    message.inflationEnabled = object.inflationEnabled ?? false;
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
