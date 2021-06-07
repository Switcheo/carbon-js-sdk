/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  Token,
  LockedCoinsWithKey,
  PositionPoolCoinsWithKey,
} from "../coin/token";

export const protobufPackage = "Switcheo.tradehubcosmos.coin";

/** GenesisState defines the coin module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  tokens: Token[];
  lockedCoins: LockedCoinsWithKey[];
  /** this line is used by starport scaffolding # ibc/genesis/proto */
  positionPoolCoins: PositionPoolCoinsWithKey[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.tokens) {
      Token.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.lockedCoins) {
      LockedCoinsWithKey.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.positionPoolCoins) {
      PositionPoolCoinsWithKey.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.tokens = [];
    message.lockedCoins = [];
    message.positionPoolCoins = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokens.push(Token.decode(reader, reader.uint32()));
          break;
        case 2:
          message.lockedCoins.push(
            LockedCoinsWithKey.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.positionPoolCoins.push(
            PositionPoolCoinsWithKey.decode(reader, reader.uint32())
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
    message.tokens = [];
    message.lockedCoins = [];
    message.positionPoolCoins = [];
    if (object.tokens !== undefined && object.tokens !== null) {
      for (const e of object.tokens) {
        message.tokens.push(Token.fromJSON(e));
      }
    }
    if (object.lockedCoins !== undefined && object.lockedCoins !== null) {
      for (const e of object.lockedCoins) {
        message.lockedCoins.push(LockedCoinsWithKey.fromJSON(e));
      }
    }
    if (
      object.positionPoolCoins !== undefined &&
      object.positionPoolCoins !== null
    ) {
      for (const e of object.positionPoolCoins) {
        message.positionPoolCoins.push(PositionPoolCoinsWithKey.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.tokens) {
      obj.tokens = message.tokens.map((e) => (e ? Token.toJSON(e) : undefined));
    } else {
      obj.tokens = [];
    }
    if (message.lockedCoins) {
      obj.lockedCoins = message.lockedCoins.map((e) =>
        e ? LockedCoinsWithKey.toJSON(e) : undefined
      );
    } else {
      obj.lockedCoins = [];
    }
    if (message.positionPoolCoins) {
      obj.positionPoolCoins = message.positionPoolCoins.map((e) =>
        e ? PositionPoolCoinsWithKey.toJSON(e) : undefined
      );
    } else {
      obj.positionPoolCoins = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.tokens = [];
    message.lockedCoins = [];
    message.positionPoolCoins = [];
    if (object.tokens !== undefined && object.tokens !== null) {
      for (const e of object.tokens) {
        message.tokens.push(Token.fromPartial(e));
      }
    }
    if (object.lockedCoins !== undefined && object.lockedCoins !== null) {
      for (const e of object.lockedCoins) {
        message.lockedCoins.push(LockedCoinsWithKey.fromPartial(e));
      }
    }
    if (
      object.positionPoolCoins !== undefined &&
      object.positionPoolCoins !== null
    ) {
      for (const e of object.positionPoolCoins) {
        message.positionPoolCoins.push(PositionPoolCoinsWithKey.fromPartial(e));
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
