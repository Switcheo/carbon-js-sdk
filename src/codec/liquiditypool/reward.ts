/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin, DecCoin } from "../cosmos/base/v1beta1/coin";
import { Timestamp } from "../google/protobuf/timestamp";

export const protobufPackage = "Switcheo.carbon.liquiditypool";

export interface Commitment {
  poolId: Long;
  liquidity?: Coin;
  startTime?: Date;
  duration: Long;
}

export interface TotalCommitmentShares {
  total: string;
}

export interface RewardCurve {
  startTime?: Date;
  initialReward: number;
  interval: Long;
  numberOfReductions: number;
  reduction: number;
  finalReward: number;
  reductionsMade: number;
}

export interface CommitmentCurve {
  maxCommitmentDuration: Long;
  maxRewardMultiplier: number;
}

export interface WrappedRewardWeight {
  poolId: Long;
  weight: string;
}

export interface WrappedRewardWeights {
  wrappedRewardWeights: WrappedRewardWeight[];
}

export interface RewardHistory {
  poolId: Long;
  rewards: DecCoin[];
  totalCommitment: string;
}

export interface CommitmentResponse {
  denom: string;
  amount: string;
  startTime?: Date;
  endTime?: Date;
  duration: Long;
  isLocked: boolean;
  commitmentPower: string;
  boostFactor: string;
}

export interface CommitmentExpiryIndex {
  commitmentKeys: Uint8Array[];
  key: Uint8Array;
}

export interface CommitmentWithKey {
  commitment?: Commitment;
  key: Uint8Array;
}

export interface CommitmentTotalWithKey {
  commitmentTotal: string;
  key: Uint8Array;
}

export interface RewardHistoryWithKey {
  rewardHistory?: RewardHistory;
  key: Uint8Array;
}

export interface LastClaimedWithKey {
  height: Long;
  key: Uint8Array;
}

export interface CommitmentKeys {
  commitmentKeys: Uint8Array[];
}

export interface AllocatedRewards {
  outstanding: DecCoin[];
}

export interface TotalCommitment {
  poolId: Long;
  totalCommitment: string;
}

const baseCommitment: object = { poolId: Long.UZERO, duration: Long.UZERO };

export const Commitment = {
  encode(
    message: Commitment,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.liquidity !== undefined) {
      Coin.encode(message.liquidity, writer.uint32(18).fork()).ldelim();
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (!message.duration.isZero()) {
      writer.uint32(32).uint64(message.duration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Commitment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommitment } as Commitment;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.liquidity = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.duration = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Commitment {
    const message = { ...baseCommitment } as Commitment;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.liquidity =
      object.liquidity !== undefined && object.liquidity !== null
        ? Coin.fromJSON(object.liquidity)
        : undefined;
    message.startTime =
      object.startTime !== undefined && object.startTime !== null
        ? fromJsonTimestamp(object.startTime)
        : undefined;
    message.duration =
      object.duration !== undefined && object.duration !== null
        ? Long.fromString(object.duration)
        : Long.UZERO;
    return message;
  },

  toJSON(message: Commitment): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.liquidity !== undefined &&
      (obj.liquidity = message.liquidity
        ? Coin.toJSON(message.liquidity)
        : undefined);
    message.startTime !== undefined &&
      (obj.startTime = message.startTime.toISOString());
    message.duration !== undefined &&
      (obj.duration = (message.duration || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Commitment>, I>>(
    object: I
  ): Commitment {
    const message = { ...baseCommitment } as Commitment;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.liquidity =
      object.liquidity !== undefined && object.liquidity !== null
        ? Coin.fromPartial(object.liquidity)
        : undefined;
    message.startTime = object.startTime ?? undefined;
    message.duration =
      object.duration !== undefined && object.duration !== null
        ? Long.fromValue(object.duration)
        : Long.UZERO;
    return message;
  },
};

const baseTotalCommitmentShares: object = { total: "" };

export const TotalCommitmentShares = {
  encode(
    message: TotalCommitmentShares,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.total !== "") {
      writer.uint32(10).string(message.total);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TotalCommitmentShares {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTotalCommitmentShares } as TotalCommitmentShares;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TotalCommitmentShares {
    const message = { ...baseTotalCommitmentShares } as TotalCommitmentShares;
    message.total =
      object.total !== undefined && object.total !== null
        ? String(object.total)
        : "";
    return message;
  },

  toJSON(message: TotalCommitmentShares): unknown {
    const obj: any = {};
    message.total !== undefined && (obj.total = message.total);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TotalCommitmentShares>, I>>(
    object: I
  ): TotalCommitmentShares {
    const message = { ...baseTotalCommitmentShares } as TotalCommitmentShares;
    message.total = object.total ?? "";
    return message;
  },
};

const baseRewardCurve: object = {
  initialReward: 0,
  interval: Long.UZERO,
  numberOfReductions: 0,
  reduction: 0,
  finalReward: 0,
  reductionsMade: 0,
};

export const RewardCurve = {
  encode(
    message: RewardCurve,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.initialReward !== 0) {
      writer.uint32(16).uint32(message.initialReward);
    }
    if (!message.interval.isZero()) {
      writer.uint32(24).uint64(message.interval);
    }
    if (message.numberOfReductions !== 0) {
      writer.uint32(32).uint32(message.numberOfReductions);
    }
    if (message.reduction !== 0) {
      writer.uint32(40).uint32(message.reduction);
    }
    if (message.finalReward !== 0) {
      writer.uint32(48).uint32(message.finalReward);
    }
    if (message.reductionsMade !== 0) {
      writer.uint32(56).uint32(message.reductionsMade);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardCurve {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRewardCurve } as RewardCurve;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.initialReward = reader.uint32();
          break;
        case 3:
          message.interval = reader.uint64() as Long;
          break;
        case 4:
          message.numberOfReductions = reader.uint32();
          break;
        case 5:
          message.reduction = reader.uint32();
          break;
        case 6:
          message.finalReward = reader.uint32();
          break;
        case 7:
          message.reductionsMade = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RewardCurve {
    const message = { ...baseRewardCurve } as RewardCurve;
    message.startTime =
      object.startTime !== undefined && object.startTime !== null
        ? fromJsonTimestamp(object.startTime)
        : undefined;
    message.initialReward =
      object.initialReward !== undefined && object.initialReward !== null
        ? Number(object.initialReward)
        : 0;
    message.interval =
      object.interval !== undefined && object.interval !== null
        ? Long.fromString(object.interval)
        : Long.UZERO;
    message.numberOfReductions =
      object.numberOfReductions !== undefined &&
      object.numberOfReductions !== null
        ? Number(object.numberOfReductions)
        : 0;
    message.reduction =
      object.reduction !== undefined && object.reduction !== null
        ? Number(object.reduction)
        : 0;
    message.finalReward =
      object.finalReward !== undefined && object.finalReward !== null
        ? Number(object.finalReward)
        : 0;
    message.reductionsMade =
      object.reductionsMade !== undefined && object.reductionsMade !== null
        ? Number(object.reductionsMade)
        : 0;
    return message;
  },

  toJSON(message: RewardCurve): unknown {
    const obj: any = {};
    message.startTime !== undefined &&
      (obj.startTime = message.startTime.toISOString());
    message.initialReward !== undefined &&
      (obj.initialReward = message.initialReward);
    message.interval !== undefined &&
      (obj.interval = (message.interval || Long.UZERO).toString());
    message.numberOfReductions !== undefined &&
      (obj.numberOfReductions = message.numberOfReductions);
    message.reduction !== undefined && (obj.reduction = message.reduction);
    message.finalReward !== undefined &&
      (obj.finalReward = message.finalReward);
    message.reductionsMade !== undefined &&
      (obj.reductionsMade = message.reductionsMade);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RewardCurve>, I>>(
    object: I
  ): RewardCurve {
    const message = { ...baseRewardCurve } as RewardCurve;
    message.startTime = object.startTime ?? undefined;
    message.initialReward = object.initialReward ?? 0;
    message.interval =
      object.interval !== undefined && object.interval !== null
        ? Long.fromValue(object.interval)
        : Long.UZERO;
    message.numberOfReductions = object.numberOfReductions ?? 0;
    message.reduction = object.reduction ?? 0;
    message.finalReward = object.finalReward ?? 0;
    message.reductionsMade = object.reductionsMade ?? 0;
    return message;
  },
};

const baseCommitmentCurve: object = {
  maxCommitmentDuration: Long.UZERO,
  maxRewardMultiplier: 0,
};

export const CommitmentCurve = {
  encode(
    message: CommitmentCurve,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.maxCommitmentDuration.isZero()) {
      writer.uint32(8).uint64(message.maxCommitmentDuration);
    }
    if (message.maxRewardMultiplier !== 0) {
      writer.uint32(16).uint32(message.maxRewardMultiplier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommitmentCurve {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommitmentCurve } as CommitmentCurve;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxCommitmentDuration = reader.uint64() as Long;
          break;
        case 2:
          message.maxRewardMultiplier = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommitmentCurve {
    const message = { ...baseCommitmentCurve } as CommitmentCurve;
    message.maxCommitmentDuration =
      object.maxCommitmentDuration !== undefined &&
      object.maxCommitmentDuration !== null
        ? Long.fromString(object.maxCommitmentDuration)
        : Long.UZERO;
    message.maxRewardMultiplier =
      object.maxRewardMultiplier !== undefined &&
      object.maxRewardMultiplier !== null
        ? Number(object.maxRewardMultiplier)
        : 0;
    return message;
  },

  toJSON(message: CommitmentCurve): unknown {
    const obj: any = {};
    message.maxCommitmentDuration !== undefined &&
      (obj.maxCommitmentDuration = (
        message.maxCommitmentDuration || Long.UZERO
      ).toString());
    message.maxRewardMultiplier !== undefined &&
      (obj.maxRewardMultiplier = message.maxRewardMultiplier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CommitmentCurve>, I>>(
    object: I
  ): CommitmentCurve {
    const message = { ...baseCommitmentCurve } as CommitmentCurve;
    message.maxCommitmentDuration =
      object.maxCommitmentDuration !== undefined &&
      object.maxCommitmentDuration !== null
        ? Long.fromValue(object.maxCommitmentDuration)
        : Long.UZERO;
    message.maxRewardMultiplier = object.maxRewardMultiplier ?? 0;
    return message;
  },
};

const baseWrappedRewardWeight: object = { poolId: Long.UZERO, weight: "" };

export const WrappedRewardWeight = {
  encode(
    message: WrappedRewardWeight,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WrappedRewardWeight {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWrappedRewardWeight } as WrappedRewardWeight;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.weight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WrappedRewardWeight {
    const message = { ...baseWrappedRewardWeight } as WrappedRewardWeight;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.weight =
      object.weight !== undefined && object.weight !== null
        ? String(object.weight)
        : "";
    return message;
  },

  toJSON(message: WrappedRewardWeight): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WrappedRewardWeight>, I>>(
    object: I
  ): WrappedRewardWeight {
    const message = { ...baseWrappedRewardWeight } as WrappedRewardWeight;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.weight = object.weight ?? "";
    return message;
  },
};

const baseWrappedRewardWeights: object = {};

export const WrappedRewardWeights = {
  encode(
    message: WrappedRewardWeights,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.wrappedRewardWeights) {
      WrappedRewardWeight.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): WrappedRewardWeights {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWrappedRewardWeights } as WrappedRewardWeights;
    message.wrappedRewardWeights = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wrappedRewardWeights.push(
            WrappedRewardWeight.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WrappedRewardWeights {
    const message = { ...baseWrappedRewardWeights } as WrappedRewardWeights;
    message.wrappedRewardWeights = (object.wrappedRewardWeights ?? []).map(
      (e: any) => WrappedRewardWeight.fromJSON(e)
    );
    return message;
  },

  toJSON(message: WrappedRewardWeights): unknown {
    const obj: any = {};
    if (message.wrappedRewardWeights) {
      obj.wrappedRewardWeights = message.wrappedRewardWeights.map((e) =>
        e ? WrappedRewardWeight.toJSON(e) : undefined
      );
    } else {
      obj.wrappedRewardWeights = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WrappedRewardWeights>, I>>(
    object: I
  ): WrappedRewardWeights {
    const message = { ...baseWrappedRewardWeights } as WrappedRewardWeights;
    message.wrappedRewardWeights =
      object.wrappedRewardWeights?.map((e) =>
        WrappedRewardWeight.fromPartial(e)
      ) || [];
    return message;
  },
};

const baseRewardHistory: object = { poolId: Long.UZERO, totalCommitment: "" };

export const RewardHistory = {
  encode(
    message: RewardHistory,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.totalCommitment !== "") {
      writer.uint32(26).string(message.totalCommitment);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardHistory {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRewardHistory } as RewardHistory;
    message.rewards = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.totalCommitment = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RewardHistory {
    const message = { ...baseRewardHistory } as RewardHistory;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.rewards = (object.rewards ?? []).map((e: any) =>
      DecCoin.fromJSON(e)
    );
    message.totalCommitment =
      object.totalCommitment !== undefined && object.totalCommitment !== null
        ? String(object.totalCommitment)
        : "";
    return message;
  },

  toJSON(message: RewardHistory): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) =>
        e ? DecCoin.toJSON(e) : undefined
      );
    } else {
      obj.rewards = [];
    }
    message.totalCommitment !== undefined &&
      (obj.totalCommitment = message.totalCommitment);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RewardHistory>, I>>(
    object: I
  ): RewardHistory {
    const message = { ...baseRewardHistory } as RewardHistory;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.rewards = object.rewards?.map((e) => DecCoin.fromPartial(e)) || [];
    message.totalCommitment = object.totalCommitment ?? "";
    return message;
  },
};

const baseCommitmentResponse: object = {
  denom: "",
  amount: "",
  duration: Long.UZERO,
  isLocked: false,
  commitmentPower: "",
  boostFactor: "",
};

export const CommitmentResponse = {
  encode(
    message: CommitmentResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endTime),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (!message.duration.isZero()) {
      writer.uint32(40).uint64(message.duration);
    }
    if (message.isLocked === true) {
      writer.uint32(48).bool(message.isLocked);
    }
    if (message.commitmentPower !== "") {
      writer.uint32(58).string(message.commitmentPower);
    }
    if (message.boostFactor !== "") {
      writer.uint32(66).string(message.boostFactor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommitmentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommitmentResponse } as CommitmentResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.endTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.duration = reader.uint64() as Long;
          break;
        case 6:
          message.isLocked = reader.bool();
          break;
        case 7:
          message.commitmentPower = reader.string();
          break;
        case 8:
          message.boostFactor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommitmentResponse {
    const message = { ...baseCommitmentResponse } as CommitmentResponse;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    message.startTime =
      object.startTime !== undefined && object.startTime !== null
        ? fromJsonTimestamp(object.startTime)
        : undefined;
    message.endTime =
      object.endTime !== undefined && object.endTime !== null
        ? fromJsonTimestamp(object.endTime)
        : undefined;
    message.duration =
      object.duration !== undefined && object.duration !== null
        ? Long.fromString(object.duration)
        : Long.UZERO;
    message.isLocked =
      object.isLocked !== undefined && object.isLocked !== null
        ? Boolean(object.isLocked)
        : false;
    message.commitmentPower =
      object.commitmentPower !== undefined && object.commitmentPower !== null
        ? String(object.commitmentPower)
        : "";
    message.boostFactor =
      object.boostFactor !== undefined && object.boostFactor !== null
        ? String(object.boostFactor)
        : "";
    return message;
  },

  toJSON(message: CommitmentResponse): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.startTime !== undefined &&
      (obj.startTime = message.startTime.toISOString());
    message.endTime !== undefined &&
      (obj.endTime = message.endTime.toISOString());
    message.duration !== undefined &&
      (obj.duration = (message.duration || Long.UZERO).toString());
    message.isLocked !== undefined && (obj.isLocked = message.isLocked);
    message.commitmentPower !== undefined &&
      (obj.commitmentPower = message.commitmentPower);
    message.boostFactor !== undefined &&
      (obj.boostFactor = message.boostFactor);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CommitmentResponse>, I>>(
    object: I
  ): CommitmentResponse {
    const message = { ...baseCommitmentResponse } as CommitmentResponse;
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.duration =
      object.duration !== undefined && object.duration !== null
        ? Long.fromValue(object.duration)
        : Long.UZERO;
    message.isLocked = object.isLocked ?? false;
    message.commitmentPower = object.commitmentPower ?? "";
    message.boostFactor = object.boostFactor ?? "";
    return message;
  },
};

const baseCommitmentExpiryIndex: object = {};

export const CommitmentExpiryIndex = {
  encode(
    message: CommitmentExpiryIndex,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.commitmentKeys) {
      writer.uint32(10).bytes(v!);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CommitmentExpiryIndex {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommitmentExpiryIndex } as CommitmentExpiryIndex;
    message.commitmentKeys = [];
    message.key = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitmentKeys.push(reader.bytes());
          break;
        case 2:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommitmentExpiryIndex {
    const message = { ...baseCommitmentExpiryIndex } as CommitmentExpiryIndex;
    message.commitmentKeys = (object.commitmentKeys ?? []).map((e: any) =>
      bytesFromBase64(e)
    );
    message.key =
      object.key !== undefined && object.key !== null
        ? bytesFromBase64(object.key)
        : new Uint8Array();
    return message;
  },

  toJSON(message: CommitmentExpiryIndex): unknown {
    const obj: any = {};
    if (message.commitmentKeys) {
      obj.commitmentKeys = message.commitmentKeys.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.commitmentKeys = [];
    }
    message.key !== undefined &&
      (obj.key = base64FromBytes(
        message.key !== undefined ? message.key : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CommitmentExpiryIndex>, I>>(
    object: I
  ): CommitmentExpiryIndex {
    const message = { ...baseCommitmentExpiryIndex } as CommitmentExpiryIndex;
    message.commitmentKeys = object.commitmentKeys?.map((e) => e) || [];
    message.key = object.key ?? new Uint8Array();
    return message;
  },
};

const baseCommitmentWithKey: object = {};

export const CommitmentWithKey = {
  encode(
    message: CommitmentWithKey,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.commitment !== undefined) {
      Commitment.encode(message.commitment, writer.uint32(10).fork()).ldelim();
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommitmentWithKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommitmentWithKey } as CommitmentWithKey;
    message.key = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitment = Commitment.decode(reader, reader.uint32());
          break;
        case 2:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommitmentWithKey {
    const message = { ...baseCommitmentWithKey } as CommitmentWithKey;
    message.commitment =
      object.commitment !== undefined && object.commitment !== null
        ? Commitment.fromJSON(object.commitment)
        : undefined;
    message.key =
      object.key !== undefined && object.key !== null
        ? bytesFromBase64(object.key)
        : new Uint8Array();
    return message;
  },

  toJSON(message: CommitmentWithKey): unknown {
    const obj: any = {};
    message.commitment !== undefined &&
      (obj.commitment = message.commitment
        ? Commitment.toJSON(message.commitment)
        : undefined);
    message.key !== undefined &&
      (obj.key = base64FromBytes(
        message.key !== undefined ? message.key : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CommitmentWithKey>, I>>(
    object: I
  ): CommitmentWithKey {
    const message = { ...baseCommitmentWithKey } as CommitmentWithKey;
    message.commitment =
      object.commitment !== undefined && object.commitment !== null
        ? Commitment.fromPartial(object.commitment)
        : undefined;
    message.key = object.key ?? new Uint8Array();
    return message;
  },
};

const baseCommitmentTotalWithKey: object = { commitmentTotal: "" };

export const CommitmentTotalWithKey = {
  encode(
    message: CommitmentTotalWithKey,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.commitmentTotal !== "") {
      writer.uint32(10).string(message.commitmentTotal);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CommitmentTotalWithKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommitmentTotalWithKey } as CommitmentTotalWithKey;
    message.key = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitmentTotal = reader.string();
          break;
        case 2:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommitmentTotalWithKey {
    const message = { ...baseCommitmentTotalWithKey } as CommitmentTotalWithKey;
    message.commitmentTotal =
      object.commitmentTotal !== undefined && object.commitmentTotal !== null
        ? String(object.commitmentTotal)
        : "";
    message.key =
      object.key !== undefined && object.key !== null
        ? bytesFromBase64(object.key)
        : new Uint8Array();
    return message;
  },

  toJSON(message: CommitmentTotalWithKey): unknown {
    const obj: any = {};
    message.commitmentTotal !== undefined &&
      (obj.commitmentTotal = message.commitmentTotal);
    message.key !== undefined &&
      (obj.key = base64FromBytes(
        message.key !== undefined ? message.key : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CommitmentTotalWithKey>, I>>(
    object: I
  ): CommitmentTotalWithKey {
    const message = { ...baseCommitmentTotalWithKey } as CommitmentTotalWithKey;
    message.commitmentTotal = object.commitmentTotal ?? "";
    message.key = object.key ?? new Uint8Array();
    return message;
  },
};

const baseRewardHistoryWithKey: object = {};

export const RewardHistoryWithKey = {
  encode(
    message: RewardHistoryWithKey,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rewardHistory !== undefined) {
      RewardHistory.encode(
        message.rewardHistory,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RewardHistoryWithKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRewardHistoryWithKey } as RewardHistoryWithKey;
    message.key = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardHistory = RewardHistory.decode(reader, reader.uint32());
          break;
        case 2:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RewardHistoryWithKey {
    const message = { ...baseRewardHistoryWithKey } as RewardHistoryWithKey;
    message.rewardHistory =
      object.rewardHistory !== undefined && object.rewardHistory !== null
        ? RewardHistory.fromJSON(object.rewardHistory)
        : undefined;
    message.key =
      object.key !== undefined && object.key !== null
        ? bytesFromBase64(object.key)
        : new Uint8Array();
    return message;
  },

  toJSON(message: RewardHistoryWithKey): unknown {
    const obj: any = {};
    message.rewardHistory !== undefined &&
      (obj.rewardHistory = message.rewardHistory
        ? RewardHistory.toJSON(message.rewardHistory)
        : undefined);
    message.key !== undefined &&
      (obj.key = base64FromBytes(
        message.key !== undefined ? message.key : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RewardHistoryWithKey>, I>>(
    object: I
  ): RewardHistoryWithKey {
    const message = { ...baseRewardHistoryWithKey } as RewardHistoryWithKey;
    message.rewardHistory =
      object.rewardHistory !== undefined && object.rewardHistory !== null
        ? RewardHistory.fromPartial(object.rewardHistory)
        : undefined;
    message.key = object.key ?? new Uint8Array();
    return message;
  },
};

const baseLastClaimedWithKey: object = { height: Long.UZERO };

export const LastClaimedWithKey = {
  encode(
    message: LastClaimedWithKey,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LastClaimedWithKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLastClaimedWithKey } as LastClaimedWithKey;
    message.key = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64() as Long;
          break;
        case 2:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LastClaimedWithKey {
    const message = { ...baseLastClaimedWithKey } as LastClaimedWithKey;
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromString(object.height)
        : Long.UZERO;
    message.key =
      object.key !== undefined && object.key !== null
        ? bytesFromBase64(object.key)
        : new Uint8Array();
    return message;
  },

  toJSON(message: LastClaimedWithKey): unknown {
    const obj: any = {};
    message.height !== undefined &&
      (obj.height = (message.height || Long.UZERO).toString());
    message.key !== undefined &&
      (obj.key = base64FromBytes(
        message.key !== undefined ? message.key : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LastClaimedWithKey>, I>>(
    object: I
  ): LastClaimedWithKey {
    const message = { ...baseLastClaimedWithKey } as LastClaimedWithKey;
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromValue(object.height)
        : Long.UZERO;
    message.key = object.key ?? new Uint8Array();
    return message;
  },
};

const baseCommitmentKeys: object = {};

export const CommitmentKeys = {
  encode(
    message: CommitmentKeys,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.commitmentKeys) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommitmentKeys {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommitmentKeys } as CommitmentKeys;
    message.commitmentKeys = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitmentKeys.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommitmentKeys {
    const message = { ...baseCommitmentKeys } as CommitmentKeys;
    message.commitmentKeys = (object.commitmentKeys ?? []).map((e: any) =>
      bytesFromBase64(e)
    );
    return message;
  },

  toJSON(message: CommitmentKeys): unknown {
    const obj: any = {};
    if (message.commitmentKeys) {
      obj.commitmentKeys = message.commitmentKeys.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.commitmentKeys = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CommitmentKeys>, I>>(
    object: I
  ): CommitmentKeys {
    const message = { ...baseCommitmentKeys } as CommitmentKeys;
    message.commitmentKeys = object.commitmentKeys?.map((e) => e) || [];
    return message;
  },
};

const baseAllocatedRewards: object = {};

export const AllocatedRewards = {
  encode(
    message: AllocatedRewards,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.outstanding) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllocatedRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAllocatedRewards } as AllocatedRewards;
    message.outstanding = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.outstanding.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AllocatedRewards {
    const message = { ...baseAllocatedRewards } as AllocatedRewards;
    message.outstanding = (object.outstanding ?? []).map((e: any) =>
      DecCoin.fromJSON(e)
    );
    return message;
  },

  toJSON(message: AllocatedRewards): unknown {
    const obj: any = {};
    if (message.outstanding) {
      obj.outstanding = message.outstanding.map((e) =>
        e ? DecCoin.toJSON(e) : undefined
      );
    } else {
      obj.outstanding = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AllocatedRewards>, I>>(
    object: I
  ): AllocatedRewards {
    const message = { ...baseAllocatedRewards } as AllocatedRewards;
    message.outstanding =
      object.outstanding?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

const baseTotalCommitment: object = { poolId: Long.UZERO, totalCommitment: "" };

export const TotalCommitment = {
  encode(
    message: TotalCommitment,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.totalCommitment !== "") {
      writer.uint32(18).string(message.totalCommitment);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TotalCommitment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTotalCommitment } as TotalCommitment;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.totalCommitment = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TotalCommitment {
    const message = { ...baseTotalCommitment } as TotalCommitment;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.totalCommitment =
      object.totalCommitment !== undefined && object.totalCommitment !== null
        ? String(object.totalCommitment)
        : "";
    return message;
  },

  toJSON(message: TotalCommitment): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.totalCommitment !== undefined &&
      (obj.totalCommitment = message.totalCommitment);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TotalCommitment>, I>>(
    object: I
  ): TotalCommitment {
    const message = { ...baseTotalCommitment } as TotalCommitment;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.totalCommitment = object.totalCommitment ?? "";
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
