/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { FundByMarket } from "../insurance/fund";

export const protobufPackage = "Switcheo.carbon.insurance";

/** GenesisState defines the insurance module's genesis state. */
export interface GenesisState {
  /**
   * this line is used by starport scaffolding # genesis/proto/state
   * this line is used by starport scaffolding # ibc/genesis/proto
   */
  FundInByMarkets: FundByMarket[];
  FundOutByMarkets: FundByMarket[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.FundInByMarkets) {
      FundByMarket.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.FundOutByMarkets) {
      FundByMarket.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.FundInByMarkets = [];
    message.FundOutByMarkets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.FundInByMarkets.push(
            FundByMarket.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.FundOutByMarkets.push(
            FundByMarket.decode(reader, reader.uint32())
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
    message.FundInByMarkets = [];
    message.FundOutByMarkets = [];
    if (
      object.FundInByMarkets !== undefined &&
      object.FundInByMarkets !== null
    ) {
      for (const e of object.FundInByMarkets) {
        message.FundInByMarkets.push(FundByMarket.fromJSON(e));
      }
    }
    if (
      object.FundOutByMarkets !== undefined &&
      object.FundOutByMarkets !== null
    ) {
      for (const e of object.FundOutByMarkets) {
        message.FundOutByMarkets.push(FundByMarket.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.FundInByMarkets) {
      obj.FundInByMarkets = message.FundInByMarkets.map((e) =>
        e ? FundByMarket.toJSON(e) : undefined
      );
    } else {
      obj.FundInByMarkets = [];
    }
    if (message.FundOutByMarkets) {
      obj.FundOutByMarkets = message.FundOutByMarkets.map((e) =>
        e ? FundByMarket.toJSON(e) : undefined
      );
    } else {
      obj.FundOutByMarkets = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.FundInByMarkets = [];
    message.FundOutByMarkets = [];
    if (
      object.FundInByMarkets !== undefined &&
      object.FundInByMarkets !== null
    ) {
      for (const e of object.FundInByMarkets) {
        message.FundInByMarkets.push(FundByMarket.fromPartial(e));
      }
    }
    if (
      object.FundOutByMarkets !== undefined &&
      object.FundOutByMarkets !== null
    ) {
      for (const e of object.FundOutByMarkets) {
        message.FundOutByMarkets.push(FundByMarket.fromPartial(e));
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
