/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params, ControlledParams, Market } from "./market";

export const protobufPackage = "Switcheo.carbon.market";

/** GenesisState defines the market module's genesis state. */
export interface GenesisState {
  /**
   * this line is used by starport scaffolding # genesis/proto/state
   * this line is used by starport scaffolding # ibc/genesis/proto
   */
  markets: Market[];
  /** params defines all the paramaters of the module. */
  params?: Params;
  controlledParams?: ControlledParams;
  marketNameSequence: Long;
}

const baseGenesisState: object = { marketNameSequence: Long.ZERO };

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.markets) {
      Market.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    if (message.controlledParams !== undefined) {
      ControlledParams.encode(
        message.controlledParams,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (!message.marketNameSequence.isZero()) {
      writer.uint32(32).int64(message.marketNameSequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.markets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.markets.push(Market.decode(reader, reader.uint32()));
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 3:
          message.controlledParams = ControlledParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.marketNameSequence = reader.int64() as Long;
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
    message.markets = (object.markets ?? []).map((e: any) =>
      Market.fromJSON(e)
    );
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromJSON(object.params)
        : undefined;
    message.controlledParams =
      object.controlledParams !== undefined && object.controlledParams !== null
        ? ControlledParams.fromJSON(object.controlledParams)
        : undefined;
    message.marketNameSequence =
      object.marketNameSequence !== undefined &&
      object.marketNameSequence !== null
        ? Long.fromString(object.marketNameSequence)
        : Long.ZERO;
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.markets) {
      obj.markets = message.markets.map((e) =>
        e ? Market.toJSON(e) : undefined
      );
    } else {
      obj.markets = [];
    }
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.controlledParams !== undefined &&
      (obj.controlledParams = message.controlledParams
        ? ControlledParams.toJSON(message.controlledParams)
        : undefined);
    message.marketNameSequence !== undefined &&
      (obj.marketNameSequence = (
        message.marketNameSequence || Long.ZERO
      ).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.markets = (object.markets ?? []).map((e) => Market.fromPartial(e));
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    message.controlledParams =
      object.controlledParams !== undefined && object.controlledParams !== null
        ? ControlledParams.fromPartial(object.controlledParams)
        : undefined;
    message.marketNameSequence =
      object.marketNameSequence !== undefined &&
      object.marketNameSequence !== null
        ? Long.fromValue(object.marketNameSequence)
        : Long.ZERO;
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
