/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PerpsAmm, SpotAmm } from "./amm";

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

function createBaseGenesisState(): GenesisState {
  return { spotAmms: [], perpsAmms: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.spotAmms) {
      SpotAmm.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.perpsAmms) {
      PerpsAmm.encode(v!, writer.uint32(18).fork()).ldelim();
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

          message.spotAmms.push(SpotAmm.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.perpsAmms.push(PerpsAmm.decode(reader, reader.uint32()));
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
      spotAmms: Array.isArray(object?.spotAmms) ? object.spotAmms.map((e: any) => SpotAmm.fromJSON(e)) : [],
      perpsAmms: Array.isArray(object?.perpsAmms) ? object.perpsAmms.map((e: any) => PerpsAmm.fromJSON(e)) : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.spotAmms) {
      obj.spotAmms = message.spotAmms.map((e) => e ? SpotAmm.toJSON(e) : undefined);
    } else {
      obj.spotAmms = [];
    }
    if (message.perpsAmms) {
      obj.perpsAmms = message.perpsAmms.map((e) => e ? PerpsAmm.toJSON(e) : undefined);
    } else {
      obj.perpsAmms = [];
    }
    return obj;
  },

  create(base?: DeepPartial<GenesisState>): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.spotAmms = object.spotAmms?.map((e) => SpotAmm.fromPartial(e)) || [];
    message.perpsAmms = object.perpsAmms?.map((e) => PerpsAmm.fromPartial(e)) || [];
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
