/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import {
  PLPMarketConfig,
  PerpetualsLiquidityPool,
} from "./perpetuals_liquidity_pool";

export const protobufPackage = "Switcheo.carbon.perpsliquidity";

/** GenesisState defines the perpsliquidity module's genesis state. */
export interface GenesisState {
  params?: Params;
  perpetualsLiquidityPools: PerpetualsLiquidityPool[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  plpMarketConfigWithPoolIds: PLPMarketConfigWithPoolId[];
}

export interface PLPMarketConfigWithPoolId {
  poolId: Long;
  plpMarketConfig?: PLPMarketConfig;
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
    for (const v of message.perpetualsLiquidityPools) {
      PerpetualsLiquidityPool.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.plpMarketConfigWithPoolIds) {
      PLPMarketConfigWithPoolId.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.perpetualsLiquidityPools = [];
    message.plpMarketConfigWithPoolIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.perpetualsLiquidityPools.push(
            PerpetualsLiquidityPool.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.plpMarketConfigWithPoolIds.push(
            PLPMarketConfigWithPoolId.decode(reader, reader.uint32())
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
    message.perpetualsLiquidityPools = (
      object.perpetualsLiquidityPools ?? []
    ).map((e: any) => PerpetualsLiquidityPool.fromJSON(e));
    message.plpMarketConfigWithPoolIds = (
      object.plpMarketConfigWithPoolIds ?? []
    ).map((e: any) => PLPMarketConfigWithPoolId.fromJSON(e));
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.perpetualsLiquidityPools) {
      obj.perpetualsLiquidityPools = message.perpetualsLiquidityPools.map((e) =>
        e ? PerpetualsLiquidityPool.toJSON(e) : undefined
      );
    } else {
      obj.perpetualsLiquidityPools = [];
    }
    if (message.plpMarketConfigWithPoolIds) {
      obj.plpMarketConfigWithPoolIds = message.plpMarketConfigWithPoolIds.map(
        (e) => (e ? PLPMarketConfigWithPoolId.toJSON(e) : undefined)
      );
    } else {
      obj.plpMarketConfigWithPoolIds = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    message.perpetualsLiquidityPools = (
      object.perpetualsLiquidityPools ?? []
    ).map((e) => PerpetualsLiquidityPool.fromPartial(e));
    message.plpMarketConfigWithPoolIds = (
      object.plpMarketConfigWithPoolIds ?? []
    ).map((e) => PLPMarketConfigWithPoolId.fromPartial(e));
    return message;
  },
};

const basePLPMarketConfigWithPoolId: object = { poolId: Long.UZERO };

export const PLPMarketConfigWithPoolId = {
  encode(
    message: PLPMarketConfigWithPoolId,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.plpMarketConfig !== undefined) {
      PLPMarketConfig.encode(
        message.plpMarketConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PLPMarketConfigWithPoolId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePLPMarketConfigWithPoolId,
    } as PLPMarketConfigWithPoolId;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.plpMarketConfig = PLPMarketConfig.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PLPMarketConfigWithPoolId {
    const message = {
      ...basePLPMarketConfigWithPoolId,
    } as PLPMarketConfigWithPoolId;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.plpMarketConfig =
      object.plpMarketConfig !== undefined && object.plpMarketConfig !== null
        ? PLPMarketConfig.fromJSON(object.plpMarketConfig)
        : undefined;
    return message;
  },

  toJSON(message: PLPMarketConfigWithPoolId): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.plpMarketConfig !== undefined &&
      (obj.plpMarketConfig = message.plpMarketConfig
        ? PLPMarketConfig.toJSON(message.plpMarketConfig)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<PLPMarketConfigWithPoolId>
  ): PLPMarketConfigWithPoolId {
    const message = {
      ...basePLPMarketConfigWithPoolId,
    } as PLPMarketConfigWithPoolId;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.plpMarketConfig =
      object.plpMarketConfig !== undefined && object.plpMarketConfig !== null
        ? PLPMarketConfig.fromPartial(object.plpMarketConfig)
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
