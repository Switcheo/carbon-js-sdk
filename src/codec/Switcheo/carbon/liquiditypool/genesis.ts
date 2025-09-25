/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Pool, PoolRoute } from "./liquiditypool";
import { Params } from "./params";
import {
  AccumulatedRewardsRecord,
  AllocatedRewards,
  CommitmentCurve,
  CommitmentExpiriesRecord,
  CommitmentRecord,
  RewardCurve,
  RewardWeights,
  TotalCommitmentRecord,
} from "./reward";

export const protobufPackage = "Switcheo.carbon.liquiditypool";

/** GenesisState defines the liquiditypool module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params?: Params;
  pools: Pool[];
  rewardCurve?: RewardCurve;
  commitmentCurve?: CommitmentCurve;
  rewardWeights?: RewardWeights;
  commitments: CommitmentRecord[];
  totalCommitments: TotalCommitmentRecord[];
  commitmentExpiries: CommitmentExpiriesRecord[];
  allocatedRewards?: AllocatedRewards;
  accumulatedRewards: AccumulatedRewardsRecord[];
  poolRoutes: PoolRoute[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    pools: [],
    rewardCurve: undefined,
    commitmentCurve: undefined,
    rewardWeights: undefined,
    commitments: [],
    totalCommitments: [],
    commitmentExpiries: [],
    allocatedRewards: undefined,
    accumulatedRewards: [],
    poolRoutes: [],
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.pools) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.rewardCurve !== undefined) {
      RewardCurve.encode(message.rewardCurve, writer.uint32(18).fork()).ldelim();
    }
    if (message.commitmentCurve !== undefined) {
      CommitmentCurve.encode(message.commitmentCurve, writer.uint32(26).fork()).ldelim();
    }
    if (message.rewardWeights !== undefined) {
      RewardWeights.encode(message.rewardWeights, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.commitments) {
      CommitmentRecord.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.totalCommitments) {
      TotalCommitmentRecord.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.commitmentExpiries) {
      CommitmentExpiriesRecord.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.allocatedRewards !== undefined) {
      AllocatedRewards.encode(message.allocatedRewards, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.accumulatedRewards) {
      AccumulatedRewardsRecord.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.poolRoutes) {
      PoolRoute.encode(v!, writer.uint32(98).fork()).ldelim();
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
        case 11:
          if (tag !== 90) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pools.push(Pool.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.rewardCurve = RewardCurve.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.commitmentCurve = CommitmentCurve.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.rewardWeights = RewardWeights.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.commitments.push(CommitmentRecord.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.totalCommitments.push(TotalCommitmentRecord.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.commitmentExpiries.push(CommitmentExpiriesRecord.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.allocatedRewards = AllocatedRewards.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.accumulatedRewards.push(AccumulatedRewardsRecord.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.poolRoutes.push(PoolRoute.decode(reader, reader.uint32()));
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
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Pool.fromJSON(e)) : [],
      rewardCurve: isSet(object.rewardCurve) ? RewardCurve.fromJSON(object.rewardCurve) : undefined,
      commitmentCurve: isSet(object.commitmentCurve) ? CommitmentCurve.fromJSON(object.commitmentCurve) : undefined,
      rewardWeights: isSet(object.rewardWeights) ? RewardWeights.fromJSON(object.rewardWeights) : undefined,
      commitments: Array.isArray(object?.commitments)
        ? object.commitments.map((e: any) => CommitmentRecord.fromJSON(e))
        : [],
      totalCommitments: Array.isArray(object?.totalCommitments)
        ? object.totalCommitments.map((e: any) => TotalCommitmentRecord.fromJSON(e))
        : [],
      commitmentExpiries: Array.isArray(object?.commitmentExpiries)
        ? object.commitmentExpiries.map((e: any) => CommitmentExpiriesRecord.fromJSON(e))
        : [],
      allocatedRewards: isSet(object.allocatedRewards) ? AllocatedRewards.fromJSON(object.allocatedRewards) : undefined,
      accumulatedRewards: Array.isArray(object?.accumulatedRewards)
        ? object.accumulatedRewards.map((e: any) => AccumulatedRewardsRecord.fromJSON(e))
        : [],
      poolRoutes: Array.isArray(object?.poolRoutes) ? object.poolRoutes.map((e: any) => PoolRoute.fromJSON(e)) : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.pools) {
      obj.pools = message.pools.map((e) => e ? Pool.toJSON(e) : undefined);
    } else {
      obj.pools = [];
    }
    message.rewardCurve !== undefined &&
      (obj.rewardCurve = message.rewardCurve ? RewardCurve.toJSON(message.rewardCurve) : undefined);
    message.commitmentCurve !== undefined &&
      (obj.commitmentCurve = message.commitmentCurve ? CommitmentCurve.toJSON(message.commitmentCurve) : undefined);
    message.rewardWeights !== undefined &&
      (obj.rewardWeights = message.rewardWeights ? RewardWeights.toJSON(message.rewardWeights) : undefined);
    if (message.commitments) {
      obj.commitments = message.commitments.map((e) => e ? CommitmentRecord.toJSON(e) : undefined);
    } else {
      obj.commitments = [];
    }
    if (message.totalCommitments) {
      obj.totalCommitments = message.totalCommitments.map((e) => e ? TotalCommitmentRecord.toJSON(e) : undefined);
    } else {
      obj.totalCommitments = [];
    }
    if (message.commitmentExpiries) {
      obj.commitmentExpiries = message.commitmentExpiries.map((e) =>
        e ? CommitmentExpiriesRecord.toJSON(e) : undefined
      );
    } else {
      obj.commitmentExpiries = [];
    }
    message.allocatedRewards !== undefined &&
      (obj.allocatedRewards = message.allocatedRewards ? AllocatedRewards.toJSON(message.allocatedRewards) : undefined);
    if (message.accumulatedRewards) {
      obj.accumulatedRewards = message.accumulatedRewards.map((e) =>
        e ? AccumulatedRewardsRecord.toJSON(e) : undefined
      );
    } else {
      obj.accumulatedRewards = [];
    }
    if (message.poolRoutes) {
      obj.poolRoutes = message.poolRoutes.map((e) => e ? PoolRoute.toJSON(e) : undefined);
    } else {
      obj.poolRoutes = [];
    }
    return obj;
  },

  create(base?: DeepPartial<GenesisState>): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.pools = object.pools?.map((e) => Pool.fromPartial(e)) || [];
    message.rewardCurve = (object.rewardCurve !== undefined && object.rewardCurve !== null)
      ? RewardCurve.fromPartial(object.rewardCurve)
      : undefined;
    message.commitmentCurve = (object.commitmentCurve !== undefined && object.commitmentCurve !== null)
      ? CommitmentCurve.fromPartial(object.commitmentCurve)
      : undefined;
    message.rewardWeights = (object.rewardWeights !== undefined && object.rewardWeights !== null)
      ? RewardWeights.fromPartial(object.rewardWeights)
      : undefined;
    message.commitments = object.commitments?.map((e) => CommitmentRecord.fromPartial(e)) || [];
    message.totalCommitments = object.totalCommitments?.map((e) => TotalCommitmentRecord.fromPartial(e)) || [];
    message.commitmentExpiries = object.commitmentExpiries?.map((e) => CommitmentExpiriesRecord.fromPartial(e)) || [];
    message.allocatedRewards = (object.allocatedRewards !== undefined && object.allocatedRewards !== null)
      ? AllocatedRewards.fromPartial(object.allocatedRewards)
      : undefined;
    message.accumulatedRewards = object.accumulatedRewards?.map((e) => AccumulatedRewardsRecord.fromPartial(e)) || [];
    message.poolRoutes = object.poolRoutes?.map((e) => PoolRoute.fromPartial(e)) || [];
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
