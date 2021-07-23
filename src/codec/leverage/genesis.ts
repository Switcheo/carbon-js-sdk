/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { MarketLeverageWithKey } from "../leverage/leverage";

export const protobufPackage = "Switcheo.carbon.leverage";

/** GenesisState defines the leverage module's genesis state. */
export interface GenesisState {
  /**
   * this line is used by starport scaffolding # genesis/proto/state
   * this line is used by starport scaffolding # ibc/genesis/proto
   */
  marketLeveragesWithKeys: MarketLeverageWithKey[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.marketLeveragesWithKeys) {
      MarketLeverageWithKey.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.marketLeveragesWithKeys = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketLeveragesWithKeys.push(
            MarketLeverageWithKey.decode(reader, reader.uint32())
          );
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
    message.marketLeveragesWithKeys = [];
    if (
      object.marketLeveragesWithKeys !== undefined &&
      object.marketLeveragesWithKeys !== null
    ) {
      for (const e of object.marketLeveragesWithKeys) {
        message.marketLeveragesWithKeys.push(MarketLeverageWithKey.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.marketLeveragesWithKeys) {
      obj.marketLeveragesWithKeys = message.marketLeveragesWithKeys.map((e) =>
        e ? MarketLeverageWithKey.toJSON(e) : undefined
      );
    } else {
      obj.marketLeveragesWithKeys = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.marketLeveragesWithKeys = [];
    if (
      object.marketLeveragesWithKeys !== undefined &&
      object.marketLeveragesWithKeys !== null
    ) {
      for (const e of object.marketLeveragesWithKeys) {
        message.marketLeveragesWithKeys.push(
          MarketLeverageWithKey.fromPartial(e)
        );
      }
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
