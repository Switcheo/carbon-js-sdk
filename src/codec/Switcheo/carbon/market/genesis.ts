/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { ControlledParams, Market } from "./market";
import { StakeEquivalence, FeeStructure } from "./fee";

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
  marketIdSequence: Long;
  stakeEquivalences: StakeEquivalence[];
  feeStructures: FeeStructure[];
}

const baseGenesisState: object = { marketIdSequence: Long.ZERO };

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
    if (!message.marketIdSequence.isZero()) {
      writer.uint32(32).int64(message.marketIdSequence);
    }
    for (const v of message.stakeEquivalences) {
      StakeEquivalence.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.feeStructures) {
      FeeStructure.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.markets = [];
    message.stakeEquivalences = [];
    message.feeStructures = [];
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
          message.marketIdSequence = reader.int64() as Long;
          break;
        case 5:
          message.stakeEquivalences.push(
            StakeEquivalence.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.feeStructures.push(
            FeeStructure.decode(reader, reader.uint32())
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
    message.marketIdSequence =
      object.marketIdSequence !== undefined && object.marketIdSequence !== null
        ? Long.fromString(object.marketIdSequence)
        : Long.ZERO;
    message.stakeEquivalences = (object.stakeEquivalences ?? []).map((e: any) =>
      StakeEquivalence.fromJSON(e)
    );
    message.feeStructures = (object.feeStructures ?? []).map((e: any) =>
      FeeStructure.fromJSON(e)
    );
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
    message.marketIdSequence !== undefined &&
      (obj.marketIdSequence = (
        message.marketIdSequence || Long.ZERO
      ).toString());
    if (message.stakeEquivalences) {
      obj.stakeEquivalences = message.stakeEquivalences.map((e) =>
        e ? StakeEquivalence.toJSON(e) : undefined
      );
    } else {
      obj.stakeEquivalences = [];
    }
    if (message.feeStructures) {
      obj.feeStructures = message.feeStructures.map((e) =>
        e ? FeeStructure.toJSON(e) : undefined
      );
    } else {
      obj.feeStructures = [];
    }
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
    message.marketIdSequence =
      object.marketIdSequence !== undefined && object.marketIdSequence !== null
        ? Long.fromValue(object.marketIdSequence)
        : Long.ZERO;
    message.stakeEquivalences = (object.stakeEquivalences ?? []).map((e) =>
      StakeEquivalence.fromPartial(e)
    );
    message.feeStructures = (object.feeStructures ?? []).map((e) =>
      FeeStructure.fromPartial(e)
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
