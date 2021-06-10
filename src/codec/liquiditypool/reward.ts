/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin, DecCoin } from "../cosmos/base/v1beta1/coin";
import { Timestamp } from "../google/protobuf/timestamp";

export const protobufPackage = "Switcheo.carbon.liquiditypool";

export interface Commitment {
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

export interface CommitmentKeys {
  commitmentKeys: Uint8Array[];
}

export interface AllocatedRewards {
  outstanding: DecCoin[];
}

const baseCommitment: object = { duration: Long.UZERO };

export const Commitment = {
  encode(
    message: Commitment,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.liquidity !== undefined) {
      Coin.encode(message.liquidity, writer.uint32(10).fork()).ldelim();
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (!message.duration.isZero()) {
      writer.uint32(24).uint64(message.duration);
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
          message.liquidity = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
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
    if (object.liquidity !== undefined && object.liquidity !== null) {
      message.liquidity = Coin.fromJSON(object.liquidity);
    } else {
      message.liquidity = undefined;
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = fromJsonTimestamp(object.startTime);
    } else {
      message.startTime = undefined;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Long.fromString(object.duration);
    } else {
      message.duration = Long.UZERO;
    }
    return message;
  },

  toJSON(message: Commitment): unknown {
    const obj: any = {};
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

  fromPartial(object: DeepPartial<Commitment>): Commitment {
    const message = { ...baseCommitment } as Commitment;
    if (object.liquidity !== undefined && object.liquidity !== null) {
      message.liquidity = Coin.fromPartial(object.liquidity);
    } else {
      message.liquidity = undefined;
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = object.startTime;
    } else {
      message.startTime = undefined;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = object.duration as Long;
    } else {
      message.duration = Long.UZERO;
    }
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
    if (object.total !== undefined && object.total !== null) {
      message.total = String(object.total);
    } else {
      message.total = "";
    }
    return message;
  },

  toJSON(message: TotalCommitmentShares): unknown {
    const obj: any = {};
    message.total !== undefined && (obj.total = message.total);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TotalCommitmentShares>
  ): TotalCommitmentShares {
    const message = { ...baseTotalCommitmentShares } as TotalCommitmentShares;
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    } else {
      message.total = "";
    }
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
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = fromJsonTimestamp(object.startTime);
    } else {
      message.startTime = undefined;
    }
    if (object.initialReward !== undefined && object.initialReward !== null) {
      message.initialReward = Number(object.initialReward);
    } else {
      message.initialReward = 0;
    }
    if (object.interval !== undefined && object.interval !== null) {
      message.interval = Long.fromString(object.interval);
    } else {
      message.interval = Long.UZERO;
    }
    if (
      object.numberOfReductions !== undefined &&
      object.numberOfReductions !== null
    ) {
      message.numberOfReductions = Number(object.numberOfReductions);
    } else {
      message.numberOfReductions = 0;
    }
    if (object.reduction !== undefined && object.reduction !== null) {
      message.reduction = Number(object.reduction);
    } else {
      message.reduction = 0;
    }
    if (object.finalReward !== undefined && object.finalReward !== null) {
      message.finalReward = Number(object.finalReward);
    } else {
      message.finalReward = 0;
    }
    if (object.reductionsMade !== undefined && object.reductionsMade !== null) {
      message.reductionsMade = Number(object.reductionsMade);
    } else {
      message.reductionsMade = 0;
    }
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

  fromPartial(object: DeepPartial<RewardCurve>): RewardCurve {
    const message = { ...baseRewardCurve } as RewardCurve;
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = object.startTime;
    } else {
      message.startTime = undefined;
    }
    if (object.initialReward !== undefined && object.initialReward !== null) {
      message.initialReward = object.initialReward;
    } else {
      message.initialReward = 0;
    }
    if (object.interval !== undefined && object.interval !== null) {
      message.interval = object.interval as Long;
    } else {
      message.interval = Long.UZERO;
    }
    if (
      object.numberOfReductions !== undefined &&
      object.numberOfReductions !== null
    ) {
      message.numberOfReductions = object.numberOfReductions;
    } else {
      message.numberOfReductions = 0;
    }
    if (object.reduction !== undefined && object.reduction !== null) {
      message.reduction = object.reduction;
    } else {
      message.reduction = 0;
    }
    if (object.finalReward !== undefined && object.finalReward !== null) {
      message.finalReward = object.finalReward;
    } else {
      message.finalReward = 0;
    }
    if (object.reductionsMade !== undefined && object.reductionsMade !== null) {
      message.reductionsMade = object.reductionsMade;
    } else {
      message.reductionsMade = 0;
    }
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
    if (
      object.maxCommitmentDuration !== undefined &&
      object.maxCommitmentDuration !== null
    ) {
      message.maxCommitmentDuration = Long.fromString(
        object.maxCommitmentDuration
      );
    } else {
      message.maxCommitmentDuration = Long.UZERO;
    }
    if (
      object.maxRewardMultiplier !== undefined &&
      object.maxRewardMultiplier !== null
    ) {
      message.maxRewardMultiplier = Number(object.maxRewardMultiplier);
    } else {
      message.maxRewardMultiplier = 0;
    }
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

  fromPartial(object: DeepPartial<CommitmentCurve>): CommitmentCurve {
    const message = { ...baseCommitmentCurve } as CommitmentCurve;
    if (
      object.maxCommitmentDuration !== undefined &&
      object.maxCommitmentDuration !== null
    ) {
      message.maxCommitmentDuration = object.maxCommitmentDuration as Long;
    } else {
      message.maxCommitmentDuration = Long.UZERO;
    }
    if (
      object.maxRewardMultiplier !== undefined &&
      object.maxRewardMultiplier !== null
    ) {
      message.maxRewardMultiplier = object.maxRewardMultiplier;
    } else {
      message.maxRewardMultiplier = 0;
    }
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
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = Long.fromString(object.poolId);
    } else {
      message.poolId = Long.UZERO;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = String(object.weight);
    } else {
      message.weight = "";
    }
    return message;
  },

  toJSON(message: WrappedRewardWeight): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },

  fromPartial(object: DeepPartial<WrappedRewardWeight>): WrappedRewardWeight {
    const message = { ...baseWrappedRewardWeight } as WrappedRewardWeight;
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId as Long;
    } else {
      message.poolId = Long.UZERO;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    } else {
      message.weight = "";
    }
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
    message.wrappedRewardWeights = [];
    if (
      object.wrappedRewardWeights !== undefined &&
      object.wrappedRewardWeights !== null
    ) {
      for (const e of object.wrappedRewardWeights) {
        message.wrappedRewardWeights.push(WrappedRewardWeight.fromJSON(e));
      }
    }
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

  fromPartial(object: DeepPartial<WrappedRewardWeights>): WrappedRewardWeights {
    const message = { ...baseWrappedRewardWeights } as WrappedRewardWeights;
    message.wrappedRewardWeights = [];
    if (
      object.wrappedRewardWeights !== undefined &&
      object.wrappedRewardWeights !== null
    ) {
      for (const e of object.wrappedRewardWeights) {
        message.wrappedRewardWeights.push(WrappedRewardWeight.fromPartial(e));
      }
    }
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
    message.rewards = [];
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = Long.fromString(object.poolId);
    } else {
      message.poolId = Long.UZERO;
    }
    if (object.rewards !== undefined && object.rewards !== null) {
      for (const e of object.rewards) {
        message.rewards.push(DecCoin.fromJSON(e));
      }
    }
    if (
      object.totalCommitment !== undefined &&
      object.totalCommitment !== null
    ) {
      message.totalCommitment = String(object.totalCommitment);
    } else {
      message.totalCommitment = "";
    }
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

  fromPartial(object: DeepPartial<RewardHistory>): RewardHistory {
    const message = { ...baseRewardHistory } as RewardHistory;
    message.rewards = [];
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId as Long;
    } else {
      message.poolId = Long.UZERO;
    }
    if (object.rewards !== undefined && object.rewards !== null) {
      for (const e of object.rewards) {
        message.rewards.push(DecCoin.fromPartial(e));
      }
    }
    if (
      object.totalCommitment !== undefined &&
      object.totalCommitment !== null
    ) {
      message.totalCommitment = object.totalCommitment;
    } else {
      message.totalCommitment = "";
    }
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
    message.commitmentKeys = [];
    if (object.commitmentKeys !== undefined && object.commitmentKeys !== null) {
      for (const e of object.commitmentKeys) {
        message.commitmentKeys.push(bytesFromBase64(e));
      }
    }
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

  fromPartial(object: DeepPartial<CommitmentKeys>): CommitmentKeys {
    const message = { ...baseCommitmentKeys } as CommitmentKeys;
    message.commitmentKeys = [];
    if (object.commitmentKeys !== undefined && object.commitmentKeys !== null) {
      for (const e of object.commitmentKeys) {
        message.commitmentKeys.push(e);
      }
    }
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
    message.outstanding = [];
    if (object.outstanding !== undefined && object.outstanding !== null) {
      for (const e of object.outstanding) {
        message.outstanding.push(DecCoin.fromJSON(e));
      }
    }
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

  fromPartial(object: DeepPartial<AllocatedRewards>): AllocatedRewards {
    const message = { ...baseAllocatedRewards } as AllocatedRewards;
    message.outstanding = [];
    if (object.outstanding !== undefined && object.outstanding !== null) {
      for (const e of object.outstanding) {
        message.outstanding.push(DecCoin.fromPartial(e));
      }
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
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
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]));
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
