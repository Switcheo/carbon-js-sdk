/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { MarketConfig, PlPool } from "./pool";

export const protobufPackage = "Switcheo.carbon.perpsliquidity";

/** GenesisState defines the perpsliquidity module's genesis state. */
export interface GenesisState {
  params?: Params;
  pools: PlPool[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  marketConfigWithPoolIds: MarketConfigWithPoolId[];
}

export interface MarketConfigWithPoolId {
  poolId: Long;
  marketConfig?: MarketConfig;
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.pools) {
      PlPool.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.marketConfigWithPoolIds) {
      MarketConfigWithPoolId.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.pools = [];
    message.marketConfigWithPoolIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.pools.push(PlPool.decode(reader, reader.uint32()));
          break;
        case 3:
          message.marketConfigWithPoolIds.push(
            MarketConfigWithPoolId.decode(reader, reader.uint32())
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
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromJSON(object.params)
        : undefined;
    message.pools = (object.pools ?? []).map((e: any) => PlPool.fromJSON(e));
    message.marketConfigWithPoolIds = (
      object.marketConfigWithPoolIds ?? []
    ).map((e: any) => MarketConfigWithPoolId.fromJSON(e));
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.pools) {
      obj.pools = message.pools.map((e) => (e ? PlPool.toJSON(e) : undefined));
    } else {
      obj.pools = [];
    }
    if (message.marketConfigWithPoolIds) {
      obj.marketConfigWithPoolIds = message.marketConfigWithPoolIds.map((e) =>
        e ? MarketConfigWithPoolId.toJSON(e) : undefined
      );
    } else {
      obj.marketConfigWithPoolIds = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    message.pools = (object.pools ?? []).map((e) => PlPool.fromPartial(e));
    message.marketConfigWithPoolIds = (
      object.marketConfigWithPoolIds ?? []
    ).map((e) => MarketConfigWithPoolId.fromPartial(e));
    return message;
  },
};

const baseMarketConfigWithPoolId: object = { poolId: Long.UZERO };

export const MarketConfigWithPoolId = {
  encode(
    message: MarketConfigWithPoolId,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.marketConfig !== undefined) {
      MarketConfig.encode(
        message.marketConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MarketConfigWithPoolId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMarketConfigWithPoolId } as MarketConfigWithPoolId;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.marketConfig = MarketConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketConfigWithPoolId {
    const message = { ...baseMarketConfigWithPoolId } as MarketConfigWithPoolId;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.marketConfig =
      object.marketConfig !== undefined && object.marketConfig !== null
        ? MarketConfig.fromJSON(object.marketConfig)
        : undefined;
    return message;
  },

  toJSON(message: MarketConfigWithPoolId): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.marketConfig !== undefined &&
      (obj.marketConfig = message.marketConfig
        ? MarketConfig.toJSON(message.marketConfig)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MarketConfigWithPoolId>
  ): MarketConfigWithPoolId {
    const message = { ...baseMarketConfigWithPoolId } as MarketConfigWithPoolId;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.marketConfig =
      object.marketConfig !== undefined && object.marketConfig !== null
        ? MarketConfig.fromPartial(object.marketConfig)
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
