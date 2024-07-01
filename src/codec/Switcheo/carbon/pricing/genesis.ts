/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { PriceSet, TokenPrice } from "./pricing";

export const protobufPackage = "Switcheo.carbon.pricing";

/** GenesisState defines the pricing module's genesis state. */
export interface GenesisState {
  /**
   * this line is used by starport scaffolding # genesis/proto/state
   * this line is used by starport scaffolding # ibc/genesis/proto
   */
  prices: PriceSet[];
  tokenPrices: TokenPrice[];
  params?: Params;
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.prices) {
      PriceSet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tokenPrices) {
      TokenPrice.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.prices = [];
    message.tokenPrices = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prices.push(PriceSet.decode(reader, reader.uint32()));
          break;
        case 2:
          message.tokenPrices.push(TokenPrice.decode(reader, reader.uint32()));
          break;
        case 3:
          message.params = Params.decode(reader, reader.uint32());
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
    message.prices = (object.prices ?? []).map((e: any) =>
      PriceSet.fromJSON(e)
    );
    message.tokenPrices = (object.tokenPrices ?? []).map((e: any) =>
      TokenPrice.fromJSON(e)
    );
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromJSON(object.params)
        : undefined;
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.prices) {
      obj.prices = message.prices.map((e) =>
        e ? PriceSet.toJSON(e) : undefined
      );
    } else {
      obj.prices = [];
    }
    if (message.tokenPrices) {
      obj.tokenPrices = message.tokenPrices.map((e) =>
        e ? TokenPrice.toJSON(e) : undefined
      );
    } else {
      obj.tokenPrices = [];
    }
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.prices = (object.prices ?? []).map((e) => PriceSet.fromPartial(e));
    message.tokenPrices = (object.tokenPrices ?? []).map((e) =>
      TokenPrice.fromPartial(e)
    );
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
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
