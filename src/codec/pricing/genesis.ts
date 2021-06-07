/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Prices } from "../pricing/pricing";

export const protobufPackage = "Switcheo.tradehubcosmos.pricing";

/** GenesisState defines the pricing module's genesis state. */
export interface GenesisState {
  /**
   * this line is used by starport scaffolding # genesis/proto/state
   * this line is used by starport scaffolding # ibc/genesis/proto
   */
  prices: GenesisPrices[];
}

export interface GenesisPrices {
  prices?: Prices;
  market: string;
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.prices) {
      GenesisPrices.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.prices = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prices.push(GenesisPrices.decode(reader, reader.uint32()));
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
    message.prices = [];
    if (object.prices !== undefined && object.prices !== null) {
      for (const e of object.prices) {
        message.prices.push(GenesisPrices.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.prices) {
      obj.prices = message.prices.map((e) =>
        e ? GenesisPrices.toJSON(e) : undefined
      );
    } else {
      obj.prices = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.prices = [];
    if (object.prices !== undefined && object.prices !== null) {
      for (const e of object.prices) {
        message.prices.push(GenesisPrices.fromPartial(e));
      }
    }
    return message;
  },
};

const baseGenesisPrices: object = { market: "" };

export const GenesisPrices = {
  encode(
    message: GenesisPrices,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.prices !== undefined) {
      Prices.encode(message.prices, writer.uint32(10).fork()).ldelim();
    }
    if (message.market !== "") {
      writer.uint32(18).string(message.market);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisPrices {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisPrices } as GenesisPrices;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prices = Prices.decode(reader, reader.uint32());
          break;
        case 2:
          message.market = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisPrices {
    const message = { ...baseGenesisPrices } as GenesisPrices;
    if (object.prices !== undefined && object.prices !== null) {
      message.prices = Prices.fromJSON(object.prices);
    } else {
      message.prices = undefined;
    }
    if (object.market !== undefined && object.market !== null) {
      message.market = String(object.market);
    } else {
      message.market = "";
    }
    return message;
  },

  toJSON(message: GenesisPrices): unknown {
    const obj: any = {};
    message.prices !== undefined &&
      (obj.prices = message.prices ? Prices.toJSON(message.prices) : undefined);
    message.market !== undefined && (obj.market = message.market);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisPrices>): GenesisPrices {
    const message = { ...baseGenesisPrices } as GenesisPrices;
    if (object.prices !== undefined && object.prices !== null) {
      message.prices = Prices.fromPartial(object.prices);
    } else {
      message.prices = undefined;
    }
    if (object.market !== undefined && object.market !== null) {
      message.market = object.market;
    } else {
      message.market = "";
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
