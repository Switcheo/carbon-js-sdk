/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  RewardCurve,
  CommitmentCurve,
  WrappedRewardWeights,
  CommitmentExpiryIndex,
  CommitmentWithKey,
  CommitmentTotalWithKey,
  RewardHistoryWithKey,
  LastClaimedWithKey,
} from "../liquiditypool/reward";
import { Pool } from "../liquiditypool/liquiditypool";
import { DecCoin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "Switcheo.carbon.liquiditypool";

/** GenesisState defines the liquiditypool module's genesis state. */
export interface GenesisState {
  pools: Pool[];
  rewardCurve?: RewardCurve;
  commitmentCurve?: CommitmentCurve;
  commitmentExpiries: CommitmentExpiryIndex[];
  commitmentWithKeys: CommitmentWithKey[];
  commitmentTotalsWithKeys: CommitmentTotalWithKey[];
  rewardHistoriesWithKeys: RewardHistoryWithKey[];
  allLastClaimedWithKeys: LastClaimedWithKey[];
  totalAllocated: DecCoin[];
  rewardWeights?: WrappedRewardWeights;
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.pools) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.rewardCurve !== undefined) {
      RewardCurve.encode(
        message.rewardCurve,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.commitmentCurve !== undefined) {
      CommitmentCurve.encode(
        message.commitmentCurve,
        writer.uint32(26).fork()
      ).ldelim();
    }
    for (const v of message.commitmentExpiries) {
      CommitmentExpiryIndex.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.commitmentWithKeys) {
      CommitmentWithKey.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.commitmentTotalsWithKeys) {
      CommitmentTotalWithKey.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.rewardHistoriesWithKeys) {
      RewardHistoryWithKey.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.allLastClaimedWithKeys) {
      LastClaimedWithKey.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.totalAllocated) {
      DecCoin.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.rewardWeights !== undefined) {
      WrappedRewardWeights.encode(
        message.rewardWeights,
        writer.uint32(82).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.pools = [];
    message.commitmentExpiries = [];
    message.commitmentWithKeys = [];
    message.commitmentTotalsWithKeys = [];
    message.rewardHistoriesWithKeys = [];
    message.allLastClaimedWithKeys = [];
    message.totalAllocated = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(Pool.decode(reader, reader.uint32()));
          break;
        case 2:
          message.rewardCurve = RewardCurve.decode(reader, reader.uint32());
          break;
        case 3:
          message.commitmentCurve = CommitmentCurve.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.commitmentExpiries.push(
            CommitmentExpiryIndex.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.commitmentWithKeys.push(
            CommitmentWithKey.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.commitmentTotalsWithKeys.push(
            CommitmentTotalWithKey.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.rewardHistoriesWithKeys.push(
            RewardHistoryWithKey.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.allLastClaimedWithKeys.push(
            LastClaimedWithKey.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.totalAllocated.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 10:
          message.rewardWeights = WrappedRewardWeights.decode(
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

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.pools = (object.pools ?? []).map((e: any) => Pool.fromJSON(e));
    message.rewardCurve =
      object.rewardCurve !== undefined && object.rewardCurve !== null
        ? RewardCurve.fromJSON(object.rewardCurve)
        : undefined;
    message.commitmentCurve =
      object.commitmentCurve !== undefined && object.commitmentCurve !== null
        ? CommitmentCurve.fromJSON(object.commitmentCurve)
        : undefined;
    message.commitmentExpiries = (object.commitmentExpiries ?? []).map(
      (e: any) => CommitmentExpiryIndex.fromJSON(e)
    );
    message.commitmentWithKeys = (object.commitmentWithKeys ?? []).map(
      (e: any) => CommitmentWithKey.fromJSON(e)
    );
    message.commitmentTotalsWithKeys = (
      object.commitmentTotalsWithKeys ?? []
    ).map((e: any) => CommitmentTotalWithKey.fromJSON(e));
    message.rewardHistoriesWithKeys = (
      object.rewardHistoriesWithKeys ?? []
    ).map((e: any) => RewardHistoryWithKey.fromJSON(e));
    message.allLastClaimedWithKeys = (object.allLastClaimedWithKeys ?? []).map(
      (e: any) => LastClaimedWithKey.fromJSON(e)
    );
    message.totalAllocated = (object.totalAllocated ?? []).map((e: any) =>
      DecCoin.fromJSON(e)
    );
    message.rewardWeights =
      object.rewardWeights !== undefined && object.rewardWeights !== null
        ? WrappedRewardWeights.fromJSON(object.rewardWeights)
        : undefined;
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map((e) => (e ? Pool.toJSON(e) : undefined));
    } else {
      obj.pools = [];
    }
    message.rewardCurve !== undefined &&
      (obj.rewardCurve = message.rewardCurve
        ? RewardCurve.toJSON(message.rewardCurve)
        : undefined);
    message.commitmentCurve !== undefined &&
      (obj.commitmentCurve = message.commitmentCurve
        ? CommitmentCurve.toJSON(message.commitmentCurve)
        : undefined);
    if (message.commitmentExpiries) {
      obj.commitmentExpiries = message.commitmentExpiries.map((e) =>
        e ? CommitmentExpiryIndex.toJSON(e) : undefined
      );
    } else {
      obj.commitmentExpiries = [];
    }
    if (message.commitmentWithKeys) {
      obj.commitmentWithKeys = message.commitmentWithKeys.map((e) =>
        e ? CommitmentWithKey.toJSON(e) : undefined
      );
    } else {
      obj.commitmentWithKeys = [];
    }
    if (message.commitmentTotalsWithKeys) {
      obj.commitmentTotalsWithKeys = message.commitmentTotalsWithKeys.map((e) =>
        e ? CommitmentTotalWithKey.toJSON(e) : undefined
      );
    } else {
      obj.commitmentTotalsWithKeys = [];
    }
    if (message.rewardHistoriesWithKeys) {
      obj.rewardHistoriesWithKeys = message.rewardHistoriesWithKeys.map((e) =>
        e ? RewardHistoryWithKey.toJSON(e) : undefined
      );
    } else {
      obj.rewardHistoriesWithKeys = [];
    }
    if (message.allLastClaimedWithKeys) {
      obj.allLastClaimedWithKeys = message.allLastClaimedWithKeys.map((e) =>
        e ? LastClaimedWithKey.toJSON(e) : undefined
      );
    } else {
      obj.allLastClaimedWithKeys = [];
    }
    if (message.totalAllocated) {
      obj.totalAllocated = message.totalAllocated.map((e) =>
        e ? DecCoin.toJSON(e) : undefined
      );
    } else {
      obj.totalAllocated = [];
    }
    message.rewardWeights !== undefined &&
      (obj.rewardWeights = message.rewardWeights
        ? WrappedRewardWeights.toJSON(message.rewardWeights)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
  ): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.pools = object.pools?.map((e) => Pool.fromPartial(e)) || [];
    message.rewardCurve =
      object.rewardCurve !== undefined && object.rewardCurve !== null
        ? RewardCurve.fromPartial(object.rewardCurve)
        : undefined;
    message.commitmentCurve =
      object.commitmentCurve !== undefined && object.commitmentCurve !== null
        ? CommitmentCurve.fromPartial(object.commitmentCurve)
        : undefined;
    message.commitmentExpiries =
      object.commitmentExpiries?.map((e) =>
        CommitmentExpiryIndex.fromPartial(e)
      ) || [];
    message.commitmentWithKeys =
      object.commitmentWithKeys?.map((e) => CommitmentWithKey.fromPartial(e)) ||
      [];
    message.commitmentTotalsWithKeys =
      object.commitmentTotalsWithKeys?.map((e) =>
        CommitmentTotalWithKey.fromPartial(e)
      ) || [];
    message.rewardHistoriesWithKeys =
      object.rewardHistoriesWithKeys?.map((e) =>
        RewardHistoryWithKey.fromPartial(e)
      ) || [];
    message.allLastClaimedWithKeys =
      object.allLastClaimedWithKeys?.map((e) =>
        LastClaimedWithKey.fromPartial(e)
      ) || [];
    message.totalAllocated =
      object.totalAllocated?.map((e) => DecCoin.fromPartial(e)) || [];
    message.rewardWeights =
      object.rewardWeights !== undefined && object.rewardWeights !== null
        ? WrappedRewardWeights.fromPartial(object.rewardWeights)
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

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
