/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Oracle, Result, Vote } from "../oracle/oracle";

export const protobufPackage = "Switcheo.tradehubcosmos.oracle";

/** GenesisState defines the oracle module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  oracles: Oracle[];
  results: Result[];
  /** this line is used by starport scaffolding # ibc/genesis/proto */
  votes: Vote[];
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.oracles = [];
    message.results = [];
    message.votes = [];
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.oracles = [];
    message.results = [];
    message.votes = [];
    if (object.oracles !== undefined && object.oracles !== null) {
      for (const e of object.oracles) {
        message.oracles.push(Oracle.fromJSON(e));
      }
    }
    if (object.results !== undefined && object.results !== null) {
      for (const e of object.results) {
        message.results.push(Result.fromJSON(e));
      }
    }
    if (object.votes !== undefined && object.votes !== null) {
      for (const e of object.votes) {
        message.votes.push(Vote.fromJSON(e));
      }
    }
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
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.oracles = [];
    message.results = [];
    message.votes = [];
    if (object.oracles !== undefined && object.oracles !== null) {
      for (const e of object.oracles) {
        message.oracles.push(Oracle.fromPartial(e));
      }
    }
    if (object.results !== undefined && object.results !== null) {
      for (const e of object.results) {
        message.results.push(Result.fromPartial(e));
      }
    }
    if (object.votes !== undefined && object.votes !== null) {
      for (const e of object.votes) {
        message.votes.push(Vote.fromPartial(e));
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
