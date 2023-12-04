/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params, Oracle, Result, Vote } from "./oracle";
import { OracleVotesWindow, SlashCounter } from "./slashing";

export const protobufPackage = "Switcheo.carbon.oracle";

/** GenesisState defines the oracle module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  oracles: Oracle[];
  results: Result[];
  votes: Vote[];
  /** this line is used by starport scaffolding # ibc/genesis/proto */
  params?: Params;
  allOracleVotesWindow: OracleVotesWindow[];
  slashCounters: SlashCounter[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.oracles) {
      Oracle.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.results) {
      Result.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.allOracleVotesWindow) {
      OracleVotesWindow.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.slashCounters) {
      SlashCounter.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.oracles = [];
    message.results = [];
    message.votes = [];
    message.allOracleVotesWindow = [];
    message.slashCounters = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracles.push(Oracle.decode(reader, reader.uint32()));
          break;
        case 2:
          message.results.push(Result.decode(reader, reader.uint32()));
          break;
        case 3:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        case 5:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 6:
          message.allOracleVotesWindow.push(
            OracleVotesWindow.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.slashCounters.push(
            SlashCounter.decode(reader, reader.uint32())
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
    message.oracles = (object.oracles ?? []).map((e: any) =>
      Oracle.fromJSON(e)
    );
    message.results = (object.results ?? []).map((e: any) =>
      Result.fromJSON(e)
    );
    message.votes = (object.votes ?? []).map((e: any) => Vote.fromJSON(e));
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromJSON(object.params)
        : undefined;
    message.allOracleVotesWindow = (object.allOracleVotesWindow ?? []).map(
      (e: any) => OracleVotesWindow.fromJSON(e)
    );
    message.slashCounters = (object.slashCounters ?? []).map((e: any) =>
      SlashCounter.fromJSON(e)
    );
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.oracles) {
      obj.oracles = message.oracles.map((e) =>
        e ? Oracle.toJSON(e) : undefined
      );
    } else {
      obj.oracles = [];
    }
    if (message.results) {
      obj.results = message.results.map((e) =>
        e ? Result.toJSON(e) : undefined
      );
    } else {
      obj.results = [];
    }
    if (message.votes) {
      obj.votes = message.votes.map((e) => (e ? Vote.toJSON(e) : undefined));
    } else {
      obj.votes = [];
    }
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.allOracleVotesWindow) {
      obj.allOracleVotesWindow = message.allOracleVotesWindow.map((e) =>
        e ? OracleVotesWindow.toJSON(e) : undefined
      );
    } else {
      obj.allOracleVotesWindow = [];
    }
    if (message.slashCounters) {
      obj.slashCounters = message.slashCounters.map((e) =>
        e ? SlashCounter.toJSON(e) : undefined
      );
    } else {
      obj.slashCounters = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.oracles = (object.oracles ?? []).map((e) => Oracle.fromPartial(e));
    message.results = (object.results ?? []).map((e) => Result.fromPartial(e));
    message.votes = (object.votes ?? []).map((e) => Vote.fromPartial(e));
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    message.allOracleVotesWindow = (object.allOracleVotesWindow ?? []).map(
      (e) => OracleVotesWindow.fromPartial(e)
    );
    message.slashCounters = (object.slashCounters ?? []).map((e) =>
      SlashCounter.fromPartial(e)
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
