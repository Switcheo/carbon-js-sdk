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
  commitmentWithKey: CommitmentWithKey[];
  commitmentTotalsWithKey: CommitmentTotalWithKey[];
  rewardHistoriesWithKey: RewardHistoryWithKey[];
  allLastClaimedWithKey: LastClaimedWithKey[];
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
    for (const v of message.commitmentWithKey) {
      CommitmentWithKey.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.commitmentTotalsWithKey) {
      CommitmentTotalWithKey.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.rewardHistoriesWithKey) {
      RewardHistoryWithKey.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.allLastClaimedWithKey) {
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
    message.commitmentWithKey = [];
    message.commitmentTotalsWithKey = [];
    message.rewardHistoriesWithKey = [];
    message.allLastClaimedWithKey = [];
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
          message.commitmentWithKey.push(
            CommitmentWithKey.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.commitmentTotalsWithKey.push(
            CommitmentTotalWithKey.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.rewardHistoriesWithKey.push(
            RewardHistoryWithKey.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.allLastClaimedWithKey.push(
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
    message.pools = [];
    message.commitmentExpiries = [];
    message.commitmentWithKey = [];
    message.commitmentTotalsWithKey = [];
    message.rewardHistoriesWithKey = [];
    message.allLastClaimedWithKey = [];
    message.totalAllocated = [];
    if (object.pools !== undefined && object.pools !== null) {
      for (const e of object.pools) {
        message.pools.push(Pool.fromJSON(e));
      }
    }
    if (object.rewardCurve !== undefined && object.rewardCurve !== null) {
      message.rewardCurve = RewardCurve.fromJSON(object.rewardCurve);
    } else {
      message.rewardCurve = undefined;
    }
    if (
      object.commitmentCurve !== undefined &&
      object.commitmentCurve !== null
    ) {
      message.commitmentCurve = CommitmentCurve.fromJSON(
        object.commitmentCurve
      );
    } else {
      message.commitmentCurve = undefined;
    }
    if (
      object.commitmentExpiries !== undefined &&
      object.commitmentExpiries !== null
    ) {
      for (const e of object.commitmentExpiries) {
        message.commitmentExpiries.push(CommitmentExpiryIndex.fromJSON(e));
      }
    }
    if (
      object.commitmentWithKey !== undefined &&
      object.commitmentWithKey !== null
    ) {
      for (const e of object.commitmentWithKey) {
        message.commitmentWithKey.push(CommitmentWithKey.fromJSON(e));
      }
    }
    if (
      object.commitmentTotalsWithKey !== undefined &&
      object.commitmentTotalsWithKey !== null
    ) {
      for (const e of object.commitmentTotalsWithKey) {
        message.commitmentTotalsWithKey.push(
          CommitmentTotalWithKey.fromJSON(e)
        );
      }
    }
    if (
      object.rewardHistoriesWithKey !== undefined &&
      object.rewardHistoriesWithKey !== null
    ) {
      for (const e of object.rewardHistoriesWithKey) {
        message.rewardHistoriesWithKey.push(RewardHistoryWithKey.fromJSON(e));
      }
    }
    if (
      object.allLastClaimedWithKey !== undefined &&
      object.allLastClaimedWithKey !== null
    ) {
      for (const e of object.allLastClaimedWithKey) {
        message.allLastClaimedWithKey.push(LastClaimedWithKey.fromJSON(e));
      }
    }
    if (object.totalAllocated !== undefined && object.totalAllocated !== null) {
      for (const e of object.totalAllocated) {
        message.totalAllocated.push(DecCoin.fromJSON(e));
      }
    }
    if (object.rewardWeights !== undefined && object.rewardWeights !== null) {
      message.rewardWeights = WrappedRewardWeights.fromJSON(
        object.rewardWeights
      );
    } else {
      message.rewardWeights = undefined;
    }
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
    if (message.commitmentWithKey) {
      obj.commitmentWithKey = message.commitmentWithKey.map((e) =>
        e ? CommitmentWithKey.toJSON(e) : undefined
      );
    } else {
      obj.commitmentWithKey = [];
    }
    if (message.commitmentTotalsWithKey) {
      obj.commitmentTotalsWithKey = message.commitmentTotalsWithKey.map((e) =>
        e ? CommitmentTotalWithKey.toJSON(e) : undefined
      );
    } else {
      obj.commitmentTotalsWithKey = [];
    }
    if (message.rewardHistoriesWithKey) {
      obj.rewardHistoriesWithKey = message.rewardHistoriesWithKey.map((e) =>
        e ? RewardHistoryWithKey.toJSON(e) : undefined
      );
    } else {
      obj.rewardHistoriesWithKey = [];
    }
    if (message.allLastClaimedWithKey) {
      obj.allLastClaimedWithKey = message.allLastClaimedWithKey.map((e) =>
        e ? LastClaimedWithKey.toJSON(e) : undefined
      );
    } else {
      obj.allLastClaimedWithKey = [];
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

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.pools = [];
    message.commitmentExpiries = [];
    message.commitmentWithKey = [];
    message.commitmentTotalsWithKey = [];
    message.rewardHistoriesWithKey = [];
    message.allLastClaimedWithKey = [];
    message.totalAllocated = [];
    if (object.pools !== undefined && object.pools !== null) {
      for (const e of object.pools) {
        message.pools.push(Pool.fromPartial(e));
      }
    }
    if (object.rewardCurve !== undefined && object.rewardCurve !== null) {
      message.rewardCurve = RewardCurve.fromPartial(object.rewardCurve);
    } else {
      message.rewardCurve = undefined;
    }
    if (
      object.commitmentCurve !== undefined &&
      object.commitmentCurve !== null
    ) {
      message.commitmentCurve = CommitmentCurve.fromPartial(
        object.commitmentCurve
      );
    } else {
      message.commitmentCurve = undefined;
    }
    if (
      object.commitmentExpiries !== undefined &&
      object.commitmentExpiries !== null
    ) {
      for (const e of object.commitmentExpiries) {
        message.commitmentExpiries.push(CommitmentExpiryIndex.fromPartial(e));
      }
    }
    if (
      object.commitmentWithKey !== undefined &&
      object.commitmentWithKey !== null
    ) {
      for (const e of object.commitmentWithKey) {
        message.commitmentWithKey.push(CommitmentWithKey.fromPartial(e));
      }
    }
    if (
      object.commitmentTotalsWithKey !== undefined &&
      object.commitmentTotalsWithKey !== null
    ) {
      for (const e of object.commitmentTotalsWithKey) {
        message.commitmentTotalsWithKey.push(
          CommitmentTotalWithKey.fromPartial(e)
        );
      }
    }
    if (
      object.rewardHistoriesWithKey !== undefined &&
      object.rewardHistoriesWithKey !== null
    ) {
      for (const e of object.rewardHistoriesWithKey) {
        message.rewardHistoriesWithKey.push(
          RewardHistoryWithKey.fromPartial(e)
        );
      }
    }
    if (
      object.allLastClaimedWithKey !== undefined &&
      object.allLastClaimedWithKey !== null
    ) {
      for (const e of object.allLastClaimedWithKey) {
        message.allLastClaimedWithKey.push(LastClaimedWithKey.fromPartial(e));
      }
    }
    if (object.totalAllocated !== undefined && object.totalAllocated !== null) {
      for (const e of object.totalAllocated) {
        message.totalAllocated.push(DecCoin.fromPartial(e));
      }
    }
    if (object.rewardWeights !== undefined && object.rewardWeights !== null) {
      message.rewardWeights = WrappedRewardWeights.fromPartial(
        object.rewardWeights
      );
    } else {
      message.rewardWeights = undefined;
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
