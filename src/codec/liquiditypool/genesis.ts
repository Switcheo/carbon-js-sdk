/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  RewardCurve,
  CommitmentCurve,
  RewardWeights,
  AllocatedRewards,
  CommitmentRecord,
  TotalCommitmentRecord,
  CommitmentExpiriesRecord,
  RewardHistoryRecord,
  LastClaimRecord,
} from "../liquiditypool/reward";
import { Params, Pool } from "../liquiditypool/liquiditypool";

export const protobufPackage = "Switcheo.carbon.liquiditypool";

/** GenesisState defines the liquiditypool module's genesis state. */
export interface GenesisState {
  pools: Pool[];
  rewardCurve?: RewardCurve;
  commitmentCurve?: CommitmentCurve;
  rewardWeights?: RewardWeights;
  commitments: CommitmentRecord[];
  totalCommitments: TotalCommitmentRecord[];
  commitmentExpiries: CommitmentExpiriesRecord[];
  rewardHistories: RewardHistoryRecord[];
  lastClaims: LastClaimRecord[];
  allocatedRewards?: AllocatedRewards;
  /** params defines all the paramaters of the module. */
  params?: Params;
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
    if (message.rewardWeights !== undefined) {
      RewardWeights.encode(
        message.rewardWeights,
        writer.uint32(34).fork()
      ).ldelim();
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
    for (const v of message.rewardHistories) {
      RewardHistoryRecord.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.lastClaims) {
      LastClaimRecord.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.allocatedRewards !== undefined) {
      AllocatedRewards.encode(
        message.allocatedRewards,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.pools = [];
    message.commitments = [];
    message.totalCommitments = [];
    message.commitmentExpiries = [];
    message.rewardHistories = [];
    message.lastClaims = [];
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
          message.rewardWeights = RewardWeights.decode(reader, reader.uint32());
          break;
        case 5:
          message.commitments.push(
            CommitmentRecord.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.totalCommitments.push(
            TotalCommitmentRecord.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.commitmentExpiries.push(
            CommitmentExpiriesRecord.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.rewardHistories.push(
            RewardHistoryRecord.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.lastClaims.push(
            LastClaimRecord.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.allocatedRewards = AllocatedRewards.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.params = Params.decode(reader, reader.uint32());
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
    message.rewardWeights =
      object.rewardWeights !== undefined && object.rewardWeights !== null
        ? RewardWeights.fromJSON(object.rewardWeights)
        : undefined;
    message.commitments = (object.commitments ?? []).map((e: any) =>
      CommitmentRecord.fromJSON(e)
    );
    message.totalCommitments = (object.totalCommitments ?? []).map((e: any) =>
      TotalCommitmentRecord.fromJSON(e)
    );
    message.commitmentExpiries = (object.commitmentExpiries ?? []).map(
      (e: any) => CommitmentExpiriesRecord.fromJSON(e)
    );
    message.rewardHistories = (object.rewardHistories ?? []).map((e: any) =>
      RewardHistoryRecord.fromJSON(e)
    );
    message.lastClaims = (object.lastClaims ?? []).map((e: any) =>
      LastClaimRecord.fromJSON(e)
    );
    message.allocatedRewards =
      object.allocatedRewards !== undefined && object.allocatedRewards !== null
        ? AllocatedRewards.fromJSON(object.allocatedRewards)
        : undefined;
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromJSON(object.params)
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
    message.rewardWeights !== undefined &&
      (obj.rewardWeights = message.rewardWeights
        ? RewardWeights.toJSON(message.rewardWeights)
        : undefined);
    if (message.commitments) {
      obj.commitments = message.commitments.map((e) =>
        e ? CommitmentRecord.toJSON(e) : undefined
      );
    } else {
      obj.commitments = [];
    }
    if (message.totalCommitments) {
      obj.totalCommitments = message.totalCommitments.map((e) =>
        e ? TotalCommitmentRecord.toJSON(e) : undefined
      );
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
    if (message.rewardHistories) {
      obj.rewardHistories = message.rewardHistories.map((e) =>
        e ? RewardHistoryRecord.toJSON(e) : undefined
      );
    } else {
      obj.rewardHistories = [];
    }
    if (message.lastClaims) {
      obj.lastClaims = message.lastClaims.map((e) =>
        e ? LastClaimRecord.toJSON(e) : undefined
      );
    } else {
      obj.lastClaims = [];
    }
    message.allocatedRewards !== undefined &&
      (obj.allocatedRewards = message.allocatedRewards
        ? AllocatedRewards.toJSON(message.allocatedRewards)
        : undefined);
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.pools = (object.pools ?? []).map((e) => Pool.fromPartial(e));
    message.rewardCurve =
      object.rewardCurve !== undefined && object.rewardCurve !== null
        ? RewardCurve.fromPartial(object.rewardCurve)
        : undefined;
    message.commitmentCurve =
      object.commitmentCurve !== undefined && object.commitmentCurve !== null
        ? CommitmentCurve.fromPartial(object.commitmentCurve)
        : undefined;
    message.rewardWeights =
      object.rewardWeights !== undefined && object.rewardWeights !== null
        ? RewardWeights.fromPartial(object.rewardWeights)
        : undefined;
    message.commitments = (object.commitments ?? []).map((e) =>
      CommitmentRecord.fromPartial(e)
    );
    message.totalCommitments = (object.totalCommitments ?? []).map((e) =>
      TotalCommitmentRecord.fromPartial(e)
    );
    message.commitmentExpiries = (object.commitmentExpiries ?? []).map((e) =>
      CommitmentExpiriesRecord.fromPartial(e)
    );
    message.rewardHistories = (object.rewardHistories ?? []).map((e) =>
      RewardHistoryRecord.fromPartial(e)
    );
    message.lastClaims = (object.lastClaims ?? []).map((e) =>
      LastClaimRecord.fromPartial(e)
    );
    message.allocatedRewards =
      object.allocatedRewards !== undefined && object.allocatedRewards !== null
        ? AllocatedRewards.fromPartial(object.allocatedRewards)
        : undefined;
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
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
