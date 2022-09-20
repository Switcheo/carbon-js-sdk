/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { MsgGasCost, MinGasPrice } from "./fee";

export const protobufPackage = "Switcheo.carbon.fee";

/** GenesisState defines the fee module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  msgGasCosts: MsgGasCost[];
  /** this line is used by starport scaffolding # ibc/genesis/proto */
  minGasPrices: MinGasPrice[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.msgGasCosts) {
      MsgGasCost.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.minGasPrices) {
      MinGasPrice.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.msgGasCosts = [];
    message.minGasPrices = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgGasCosts.push(MsgGasCost.decode(reader, reader.uint32()));
          break;
        case 2:
          message.minGasPrices.push(
            MinGasPrice.decode(reader, reader.uint32())
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
    message.msgGasCosts = (object.msgGasCosts ?? []).map((e: any) =>
      MsgGasCost.fromJSON(e)
    );
    message.minGasPrices = (object.minGasPrices ?? []).map((e: any) =>
      MinGasPrice.fromJSON(e)
    );
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.msgGasCosts) {
      obj.msgGasCosts = message.msgGasCosts.map((e) =>
        e ? MsgGasCost.toJSON(e) : undefined
      );
    } else {
      obj.msgGasCosts = [];
    }
    if (message.minGasPrices) {
      obj.minGasPrices = message.minGasPrices.map((e) =>
        e ? MinGasPrice.toJSON(e) : undefined
      );
    } else {
      obj.minGasPrices = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.msgGasCosts = (object.msgGasCosts ?? []).map((e) =>
      MsgGasCost.fromPartial(e)
    );
    message.minGasPrices = (object.minGasPrices ?? []).map((e) =>
      MinGasPrice.fromPartial(e)
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
