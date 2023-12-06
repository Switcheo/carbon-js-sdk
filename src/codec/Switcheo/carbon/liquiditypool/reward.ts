/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin, DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "Switcheo.carbon.liquiditypool";

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

export interface RewardWeight {
  poolId: Long;
  weight: string;
}

export interface RewardWeights {
  weights: RewardWeight[];
}

export interface Commitment {
  poolId: Long;
  liquidity?: Coin;
  startTime?: Date;
  duration: Long;
  rewardDebt: DecCoin[];
}

export interface CommitmentRecord {
  address: string;
  commitment?: Commitment;
}

export interface TotalCommitment {
  total: string;
}

export interface TotalCommitmentRecord {
  poolId: Long;
  totalCommitment?: TotalCommitment;
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

/** Deprecated: use AccumulatedRewards */
export interface RewardHistory {
  poolId: Long;
  rewards: DecCoin[];
  totalCommitment: string;
}

export interface AccumulatedRewards {
  rewardPerCommitmentShare: DecCoin[];
}

export interface AccumulatedRewardsRecord {
  poolId: Long;
  accumulatedRewards?: AccumulatedRewards;
}

export interface CommitmentExpiry {
  poolId: Long;
  address: string;
}

export interface CommitmentExpiries {
  commitmentExpiries: CommitmentExpiry[];
}

export interface CommitmentExpiriesRecord {
  expiryTime: Long;
  commitmentExpiries?: CommitmentExpiries;
}

export interface AllocatedRewards {
  coins: DecCoin[];
}

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

  fromPartial(object: DeepPartial<RewardCurve>): RewardCurve {
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

  fromPartial(object: DeepPartial<CommitmentCurve>): CommitmentCurve {
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

const baseRewardWeight: object = { poolId: Long.UZERO, weight: "" };

export const RewardWeight = {
  encode(
    message: RewardWeight,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardWeight {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRewardWeight } as RewardWeight;
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

  fromJSON(object: any): RewardWeight {
    const message = { ...baseRewardWeight } as RewardWeight;
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

  toJSON(message: RewardWeight): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },

  fromPartial(object: DeepPartial<RewardWeight>): RewardWeight {
    const message = { ...baseRewardWeight } as RewardWeight;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.weight = object.weight ?? "";
    return message;
  },
};

const baseRewardWeights: object = {};

export const RewardWeights = {
  encode(
    message: RewardWeights,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.weights) {
      RewardWeight.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardWeights {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRewardWeights } as RewardWeights;
    message.weights = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.weights.push(RewardWeight.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RewardWeights {
    const message = { ...baseRewardWeights } as RewardWeights;
    message.weights = (object.weights ?? []).map((e: any) =>
      RewardWeight.fromJSON(e)
    );
    return message;
  },

  toJSON(message: RewardWeights): unknown {
    const obj: any = {};
    if (message.weights) {
      obj.weights = message.weights.map((e) =>
        e ? RewardWeight.toJSON(e) : undefined
      );
    } else {
      obj.weights = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<RewardWeights>): RewardWeights {
    const message = { ...baseRewardWeights } as RewardWeights;
    message.weights = (object.weights ?? []).map((e) =>
      RewardWeight.fromPartial(e)
    );
    return message;
  },
};

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
    for (const v of message.rewardDebt) {
      DecCoin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Commitment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommitment } as Commitment;
    message.rewardDebt = [];
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
        case 5:
          message.rewardDebt.push(DecCoin.decode(reader, reader.uint32()));
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
    message.rewardDebt = (object.rewardDebt ?? []).map((e: any) =>
      DecCoin.fromJSON(e)
    );
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
    if (message.rewardDebt) {
      obj.rewardDebt = message.rewardDebt.map((e) =>
        e ? DecCoin.toJSON(e) : undefined
      );
    } else {
      obj.rewardDebt = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Commitment>): Commitment {
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
    message.rewardDebt = (object.rewardDebt ?? []).map((e) =>
      DecCoin.fromPartial(e)
    );
    return message;
  },
};

const baseCommitmentRecord: object = { address: "" };

export const CommitmentRecord = {
  encode(
    message: CommitmentRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.commitment !== undefined) {
      Commitment.encode(message.commitment, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommitmentRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommitmentRecord } as CommitmentRecord;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.commitment = Commitment.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommitmentRecord {
    const message = { ...baseCommitmentRecord } as CommitmentRecord;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.commitment =
      object.commitment !== undefined && object.commitment !== null
        ? Commitment.fromJSON(object.commitment)
        : undefined;
    return message;
  },

  toJSON(message: CommitmentRecord): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.commitment !== undefined &&
      (obj.commitment = message.commitment
        ? Commitment.toJSON(message.commitment)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<CommitmentRecord>): CommitmentRecord {
    const message = { ...baseCommitmentRecord } as CommitmentRecord;
    message.address = object.address ?? "";
    message.commitment =
      object.commitment !== undefined && object.commitment !== null
        ? Commitment.fromPartial(object.commitment)
        : undefined;
    return message;
  },
};

const baseTotalCommitment: object = { total: "" };

export const TotalCommitment = {
  encode(
    message: TotalCommitment,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.total !== "") {
      writer.uint32(10).string(message.total);
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
          message.total = reader.string();
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
    message.total =
      object.total !== undefined && object.total !== null
        ? String(object.total)
        : "";
    return message;
  },

  toJSON(message: TotalCommitment): unknown {
    const obj: any = {};
    message.total !== undefined && (obj.total = message.total);
    return obj;
  },

  fromPartial(object: DeepPartial<TotalCommitment>): TotalCommitment {
    const message = { ...baseTotalCommitment } as TotalCommitment;
    message.total = object.total ?? "";
    return message;
  },
};

const baseTotalCommitmentRecord: object = { poolId: Long.UZERO };

export const TotalCommitmentRecord = {
  encode(
    message: TotalCommitmentRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.totalCommitment !== undefined) {
      TotalCommitment.encode(
        message.totalCommitment,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TotalCommitmentRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTotalCommitmentRecord } as TotalCommitmentRecord;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.totalCommitment = TotalCommitment.decode(
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

  fromJSON(object: any): TotalCommitmentRecord {
    const message = { ...baseTotalCommitmentRecord } as TotalCommitmentRecord;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.totalCommitment =
      object.totalCommitment !== undefined && object.totalCommitment !== null
        ? TotalCommitment.fromJSON(object.totalCommitment)
        : undefined;
    return message;
  },

  toJSON(message: TotalCommitmentRecord): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.totalCommitment !== undefined &&
      (obj.totalCommitment = message.totalCommitment
        ? TotalCommitment.toJSON(message.totalCommitment)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TotalCommitmentRecord>
  ): TotalCommitmentRecord {
    const message = { ...baseTotalCommitmentRecord } as TotalCommitmentRecord;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.totalCommitment =
      object.totalCommitment !== undefined && object.totalCommitment !== null
        ? TotalCommitment.fromPartial(object.totalCommitment)
        : undefined;
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

  fromPartial(object: DeepPartial<CommitmentResponse>): CommitmentResponse {
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

  fromPartial(object: DeepPartial<RewardHistory>): RewardHistory {
    const message = { ...baseRewardHistory } as RewardHistory;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.rewards = (object.rewards ?? []).map((e) => DecCoin.fromPartial(e));
    message.totalCommitment = object.totalCommitment ?? "";
    return message;
  },
};

const baseAccumulatedRewards: object = {};

export const AccumulatedRewards = {
  encode(
    message: AccumulatedRewards,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.rewardPerCommitmentShare) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccumulatedRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccumulatedRewards } as AccumulatedRewards;
    message.rewardPerCommitmentShare = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardPerCommitmentShare.push(
            DecCoin.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccumulatedRewards {
    const message = { ...baseAccumulatedRewards } as AccumulatedRewards;
    message.rewardPerCommitmentShare = (
      object.rewardPerCommitmentShare ?? []
    ).map((e: any) => DecCoin.fromJSON(e));
    return message;
  },

  toJSON(message: AccumulatedRewards): unknown {
    const obj: any = {};
    if (message.rewardPerCommitmentShare) {
      obj.rewardPerCommitmentShare = message.rewardPerCommitmentShare.map((e) =>
        e ? DecCoin.toJSON(e) : undefined
      );
    } else {
      obj.rewardPerCommitmentShare = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<AccumulatedRewards>): AccumulatedRewards {
    const message = { ...baseAccumulatedRewards } as AccumulatedRewards;
    message.rewardPerCommitmentShare = (
      object.rewardPerCommitmentShare ?? []
    ).map((e) => DecCoin.fromPartial(e));
    return message;
  },
};

const baseAccumulatedRewardsRecord: object = { poolId: Long.UZERO };

export const AccumulatedRewardsRecord = {
  encode(
    message: AccumulatedRewardsRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.accumulatedRewards !== undefined) {
      AccumulatedRewards.encode(
        message.accumulatedRewards,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccumulatedRewardsRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAccumulatedRewardsRecord,
    } as AccumulatedRewardsRecord;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.accumulatedRewards = AccumulatedRewards.decode(
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

  fromJSON(object: any): AccumulatedRewardsRecord {
    const message = {
      ...baseAccumulatedRewardsRecord,
    } as AccumulatedRewardsRecord;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.accumulatedRewards =
      object.accumulatedRewards !== undefined &&
      object.accumulatedRewards !== null
        ? AccumulatedRewards.fromJSON(object.accumulatedRewards)
        : undefined;
    return message;
  },

  toJSON(message: AccumulatedRewardsRecord): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.accumulatedRewards !== undefined &&
      (obj.accumulatedRewards = message.accumulatedRewards
        ? AccumulatedRewards.toJSON(message.accumulatedRewards)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AccumulatedRewardsRecord>
  ): AccumulatedRewardsRecord {
    const message = {
      ...baseAccumulatedRewardsRecord,
    } as AccumulatedRewardsRecord;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.accumulatedRewards =
      object.accumulatedRewards !== undefined &&
      object.accumulatedRewards !== null
        ? AccumulatedRewards.fromPartial(object.accumulatedRewards)
        : undefined;
    return message;
  },
};

const baseCommitmentExpiry: object = { poolId: Long.UZERO, address: "" };

export const CommitmentExpiry = {
  encode(
    message: CommitmentExpiry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommitmentExpiry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommitmentExpiry } as CommitmentExpiry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommitmentExpiry {
    const message = { ...baseCommitmentExpiry } as CommitmentExpiry;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: CommitmentExpiry): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<CommitmentExpiry>): CommitmentExpiry {
    const message = { ...baseCommitmentExpiry } as CommitmentExpiry;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.address = object.address ?? "";
    return message;
  },
};

const baseCommitmentExpiries: object = {};

export const CommitmentExpiries = {
  encode(
    message: CommitmentExpiries,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.commitmentExpiries) {
      CommitmentExpiry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommitmentExpiries {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommitmentExpiries } as CommitmentExpiries;
    message.commitmentExpiries = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitmentExpiries.push(
            CommitmentExpiry.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommitmentExpiries {
    const message = { ...baseCommitmentExpiries } as CommitmentExpiries;
    message.commitmentExpiries = (object.commitmentExpiries ?? []).map(
      (e: any) => CommitmentExpiry.fromJSON(e)
    );
    return message;
  },

  toJSON(message: CommitmentExpiries): unknown {
    const obj: any = {};
    if (message.commitmentExpiries) {
      obj.commitmentExpiries = message.commitmentExpiries.map((e) =>
        e ? CommitmentExpiry.toJSON(e) : undefined
      );
    } else {
      obj.commitmentExpiries = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<CommitmentExpiries>): CommitmentExpiries {
    const message = { ...baseCommitmentExpiries } as CommitmentExpiries;
    message.commitmentExpiries = (object.commitmentExpiries ?? []).map((e) =>
      CommitmentExpiry.fromPartial(e)
    );
    return message;
  },
};

const baseCommitmentExpiriesRecord: object = { expiryTime: Long.UZERO };

export const CommitmentExpiriesRecord = {
  encode(
    message: CommitmentExpiriesRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.expiryTime.isZero()) {
      writer.uint32(8).uint64(message.expiryTime);
    }
    if (message.commitmentExpiries !== undefined) {
      CommitmentExpiries.encode(
        message.commitmentExpiries,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CommitmentExpiriesRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCommitmentExpiriesRecord,
    } as CommitmentExpiriesRecord;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.expiryTime = reader.uint64() as Long;
          break;
        case 2:
          message.commitmentExpiries = CommitmentExpiries.decode(
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

  fromJSON(object: any): CommitmentExpiriesRecord {
    const message = {
      ...baseCommitmentExpiriesRecord,
    } as CommitmentExpiriesRecord;
    message.expiryTime =
      object.expiryTime !== undefined && object.expiryTime !== null
        ? Long.fromString(object.expiryTime)
        : Long.UZERO;
    message.commitmentExpiries =
      object.commitmentExpiries !== undefined &&
      object.commitmentExpiries !== null
        ? CommitmentExpiries.fromJSON(object.commitmentExpiries)
        : undefined;
    return message;
  },

  toJSON(message: CommitmentExpiriesRecord): unknown {
    const obj: any = {};
    message.expiryTime !== undefined &&
      (obj.expiryTime = (message.expiryTime || Long.UZERO).toString());
    message.commitmentExpiries !== undefined &&
      (obj.commitmentExpiries = message.commitmentExpiries
        ? CommitmentExpiries.toJSON(message.commitmentExpiries)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CommitmentExpiriesRecord>
  ): CommitmentExpiriesRecord {
    const message = {
      ...baseCommitmentExpiriesRecord,
    } as CommitmentExpiriesRecord;
    message.expiryTime =
      object.expiryTime !== undefined && object.expiryTime !== null
        ? Long.fromValue(object.expiryTime)
        : Long.UZERO;
    message.commitmentExpiries =
      object.commitmentExpiries !== undefined &&
      object.commitmentExpiries !== null
        ? CommitmentExpiries.fromPartial(object.commitmentExpiries)
        : undefined;
    return message;
  },
};

const baseAllocatedRewards: object = {};

export const AllocatedRewards = {
  encode(
    message: AllocatedRewards,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.coins) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllocatedRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAllocatedRewards } as AllocatedRewards;
    message.coins = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(DecCoin.decode(reader, reader.uint32()));
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
    message.coins = (object.coins ?? []).map((e: any) => DecCoin.fromJSON(e));
    return message;
  },

  toJSON(message: AllocatedRewards): unknown {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<AllocatedRewards>): AllocatedRewards {
    const message = { ...baseAllocatedRewards } as AllocatedRewards;
    message.coins = (object.coins ?? []).map((e) => DecCoin.fromPartial(e));
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
