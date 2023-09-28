/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { SpotAmm, PerpsAmm } from "./amm";

export const protobufPackage = "Switcheo.carbon.broker";

/** GenesisState defines the broker module's genesis state. */
export interface GenesisState {
  /**
   * this line is used by starport scaffolding # genesis/proto/state
   * this line is used by starport scaffolding # ibc/genesis/proto
   */
  spotAmms: SpotAmm[];
  perpsAmms: PerpsAmm[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.spotAmms) {
      SpotAmm.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.perpsAmms) {
      PerpsAmm.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.spotAmms = [];
    message.perpsAmms = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spotAmms.push(SpotAmm.decode(reader, reader.uint32()));
          break;
        case 2:
          message.perpsAmms.push(PerpsAmm.decode(reader, reader.uint32()));
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
    message.spotAmms = (object.spotAmms ?? []).map((e: any) =>
      SpotAmm.fromJSON(e)
    );
    message.perpsAmms = (object.perpsAmms ?? []).map((e: any) =>
      PerpsAmm.fromJSON(e)
    );
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.spotAmms) {
      obj.spotAmms = message.spotAmms.map((e) =>
        e ? SpotAmm.toJSON(e) : undefined
      );
    } else {
      obj.spotAmms = [];
    }
    if (message.perpsAmms) {
      obj.perpsAmms = message.perpsAmms.map((e) =>
        e ? PerpsAmm.toJSON(e) : undefined
      );
    } else {
      obj.perpsAmms = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.spotAmms = (object.spotAmms ?? []).map((e) =>
      SpotAmm.fromPartial(e)
    );
    message.perpsAmms = (object.perpsAmms ?? []).map((e) =>
      PerpsAmm.fromPartial(e)
    );
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
