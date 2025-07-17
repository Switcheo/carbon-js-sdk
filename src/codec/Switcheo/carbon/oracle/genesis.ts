/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { HistoricalBucketInfo } from "./historical";
import { Oracle, Result } from "./oracle";
import { Params } from "./params";
import { OracleVotesWindow, SlashCounter } from "./slashing";

export const protobufPackage = "Switcheo.carbon.oracle";

/** GenesisState defines the oracle module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  oracles: Oracle[];
  results: Result[];
  /** this line is used by starport scaffolding # ibc/genesis/proto */
  params?: Params;
  allOracleVotesWindow: OracleVotesWindow[];
  slashCounters: SlashCounter[];
  allHistoricalBucketInfo: HistoricalBucketInfo[];
}

function createBaseGenesisState(): GenesisState {
  return {
    oracles: [],
    results: [],
    params: undefined,
    allOracleVotesWindow: [],
    slashCounters: [],
    allHistoricalBucketInfo: [],
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.oracles) {
      Oracle.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.results) {
      Result.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.allOracleVotesWindow) {
      OracleVotesWindow.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.slashCounters) {
      SlashCounter.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.allHistoricalBucketInfo) {
      HistoricalBucketInfo.encode(v!, writer.uint32(50).fork()).ldelim();
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

          message.oracles.push(Oracle.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.results.push(Result.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.allOracleVotesWindow.push(OracleVotesWindow.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.slashCounters.push(SlashCounter.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.allHistoricalBucketInfo.push(HistoricalBucketInfo.decode(reader, reader.uint32()));
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
      oracles: Array.isArray(object?.oracles) ? object.oracles.map((e: any) => Oracle.fromJSON(e)) : [],
      results: Array.isArray(object?.results) ? object.results.map((e: any) => Result.fromJSON(e)) : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      allOracleVotesWindow: Array.isArray(object?.allOracleVotesWindow)
        ? object.allOracleVotesWindow.map((e: any) => OracleVotesWindow.fromJSON(e))
        : [],
      slashCounters: Array.isArray(object?.slashCounters)
        ? object.slashCounters.map((e: any) => SlashCounter.fromJSON(e))
        : [],
      allHistoricalBucketInfo: Array.isArray(object?.allHistoricalBucketInfo)
        ? object.allHistoricalBucketInfo.map((e: any) => HistoricalBucketInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.oracles) {
      obj.oracles = message.oracles.map((e) => e ? Oracle.toJSON(e) : undefined);
    } else {
      obj.oracles = [];
    }
    if (message.results) {
      obj.results = message.results.map((e) => e ? Result.toJSON(e) : undefined);
    } else {
      obj.results = [];
    }
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.allOracleVotesWindow) {
      obj.allOracleVotesWindow = message.allOracleVotesWindow.map((e) => e ? OracleVotesWindow.toJSON(e) : undefined);
    } else {
      obj.allOracleVotesWindow = [];
    }
    if (message.slashCounters) {
      obj.slashCounters = message.slashCounters.map((e) => e ? SlashCounter.toJSON(e) : undefined);
    } else {
      obj.slashCounters = [];
    }
    if (message.allHistoricalBucketInfo) {
      obj.allHistoricalBucketInfo = message.allHistoricalBucketInfo.map((e) =>
        e ? HistoricalBucketInfo.toJSON(e) : undefined
      );
    } else {
      obj.allHistoricalBucketInfo = [];
    }
    return obj;
  },

  create(base?: DeepPartial<GenesisState>): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.oracles = object.oracles?.map((e) => Oracle.fromPartial(e)) || [];
    message.results = object.results?.map((e) => Result.fromPartial(e)) || [];
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.allOracleVotesWindow = object.allOracleVotesWindow?.map((e) => OracleVotesWindow.fromPartial(e)) || [];
    message.slashCounters = object.slashCounters?.map((e) => SlashCounter.fromPartial(e)) || [];
    message.allHistoricalBucketInfo = object.allHistoricalBucketInfo?.map((e) => HistoricalBucketInfo.fromPartial(e)) ||
      [];
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
