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

function createBaseRewardCurve(): RewardCurve {
  return {
    startTime: undefined,
    initialReward: 0,
    interval: Long.UZERO,
    numberOfReductions: 0,
    reduction: 0,
    finalReward: 0,
    reductionsMade: 0,
  };
}

export const RewardCurve = {
  encode(message: RewardCurve, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(10).fork()).ldelim();
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardCurve();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.initialReward = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.interval = reader.uint64() as Long;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.numberOfReductions = reader.uint32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.reduction = reader.uint32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.finalReward = reader.uint32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.reductionsMade = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RewardCurve {
    return {
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      initialReward: isSet(object.initialReward) ? Number(object.initialReward) : 0,
      interval: isSet(object.interval) ? Long.fromValue(object.interval) : Long.UZERO,
      numberOfReductions: isSet(object.numberOfReductions) ? Number(object.numberOfReductions) : 0,
      reduction: isSet(object.reduction) ? Number(object.reduction) : 0,
      finalReward: isSet(object.finalReward) ? Number(object.finalReward) : 0,
      reductionsMade: isSet(object.reductionsMade) ? Number(object.reductionsMade) : 0,
    };
  },

  toJSON(message: RewardCurve): unknown {
    const obj: any = {};
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    message.initialReward !== undefined && (obj.initialReward = Math.round(message.initialReward));
    message.interval !== undefined && (obj.interval = (message.interval || Long.UZERO).toString());
    message.numberOfReductions !== undefined && (obj.numberOfReductions = Math.round(message.numberOfReductions));
    message.reduction !== undefined && (obj.reduction = Math.round(message.reduction));
    message.finalReward !== undefined && (obj.finalReward = Math.round(message.finalReward));
    message.reductionsMade !== undefined && (obj.reductionsMade = Math.round(message.reductionsMade));
    return obj;
  },

  create(base?: DeepPartial<RewardCurve>): RewardCurve {
    return RewardCurve.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RewardCurve>): RewardCurve {
    const message = createBaseRewardCurve();
    message.startTime = object.startTime ?? undefined;
    message.initialReward = object.initialReward ?? 0;
    message.interval = (object.interval !== undefined && object.interval !== null)
      ? Long.fromValue(object.interval)
      : Long.UZERO;
    message.numberOfReductions = object.numberOfReductions ?? 0;
    message.reduction = object.reduction ?? 0;
    message.finalReward = object.finalReward ?? 0;
    message.reductionsMade = object.reductionsMade ?? 0;
    return message;
  },
};

function createBaseCommitmentCurve(): CommitmentCurve {
  return { maxCommitmentDuration: Long.UZERO, maxRewardMultiplier: 0 };
}

export const CommitmentCurve = {
  encode(message: CommitmentCurve, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.maxCommitmentDuration.isZero()) {
      writer.uint32(8).uint64(message.maxCommitmentDuration);
    }
    if (message.maxRewardMultiplier !== 0) {
      writer.uint32(16).uint32(message.maxRewardMultiplier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommitmentCurve {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitmentCurve();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.maxCommitmentDuration = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.maxRewardMultiplier = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CommitmentCurve {
    return {
      maxCommitmentDuration: isSet(object.maxCommitmentDuration)
        ? Long.fromValue(object.maxCommitmentDuration)
        : Long.UZERO,
      maxRewardMultiplier: isSet(object.maxRewardMultiplier) ? Number(object.maxRewardMultiplier) : 0,
    };
  },

  toJSON(message: CommitmentCurve): unknown {
    const obj: any = {};
    message.maxCommitmentDuration !== undefined &&
      (obj.maxCommitmentDuration = (message.maxCommitmentDuration || Long.UZERO).toString());
    message.maxRewardMultiplier !== undefined && (obj.maxRewardMultiplier = Math.round(message.maxRewardMultiplier));
    return obj;
  },

  create(base?: DeepPartial<CommitmentCurve>): CommitmentCurve {
    return CommitmentCurve.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CommitmentCurve>): CommitmentCurve {
    const message = createBaseCommitmentCurve();
    message.maxCommitmentDuration =
      (object.maxCommitmentDuration !== undefined && object.maxCommitmentDuration !== null)
        ? Long.fromValue(object.maxCommitmentDuration)
        : Long.UZERO;
    message.maxRewardMultiplier = object.maxRewardMultiplier ?? 0;
    return message;
  },
};

function createBaseRewardWeight(): RewardWeight {
  return { poolId: Long.UZERO, weight: "" };
}

export const RewardWeight = {
  encode(message: RewardWeight, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardWeight {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardWeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.poolId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.weight = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RewardWeight {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      weight: isSet(object.weight) ? String(object.weight) : "",
    };
  },

  toJSON(message: RewardWeight): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },

  create(base?: DeepPartial<RewardWeight>): RewardWeight {
    return RewardWeight.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RewardWeight>): RewardWeight {
    const message = createBaseRewardWeight();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.weight = object.weight ?? "";
    return message;
  },
};

function createBaseRewardWeights(): RewardWeights {
  return { weights: [] };
}

export const RewardWeights = {
  encode(message: RewardWeights, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.weights) {
      RewardWeight.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardWeights {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardWeights();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.weights.push(RewardWeight.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RewardWeights {
    return { weights: Array.isArray(object?.weights) ? object.weights.map((e: any) => RewardWeight.fromJSON(e)) : [] };
  },

  toJSON(message: RewardWeights): unknown {
    const obj: any = {};
    if (message.weights) {
      obj.weights = message.weights.map((e) => e ? RewardWeight.toJSON(e) : undefined);
    } else {
      obj.weights = [];
    }
    return obj;
  },

  create(base?: DeepPartial<RewardWeights>): RewardWeights {
    return RewardWeights.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RewardWeights>): RewardWeights {
    const message = createBaseRewardWeights();
    message.weights = object.weights?.map((e) => RewardWeight.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCommitment(): Commitment {
  return { poolId: Long.UZERO, liquidity: undefined, startTime: undefined, duration: Long.UZERO, rewardDebt: [] };
}

export const Commitment = {
  encode(message: Commitment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.liquidity !== undefined) {
      Coin.encode(message.liquidity, writer.uint32(18).fork()).ldelim();
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(26).fork()).ldelim();
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.poolId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.liquidity = Coin.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.duration = reader.uint64() as Long;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.rewardDebt.push(DecCoin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Commitment {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      liquidity: isSet(object.liquidity) ? Coin.fromJSON(object.liquidity) : undefined,
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      duration: isSet(object.duration) ? Long.fromValue(object.duration) : Long.UZERO,
      rewardDebt: Array.isArray(object?.rewardDebt) ? object.rewardDebt.map((e: any) => DecCoin.fromJSON(e)) : [],
    };
  },

  toJSON(message: Commitment): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.liquidity !== undefined && (obj.liquidity = message.liquidity ? Coin.toJSON(message.liquidity) : undefined);
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    message.duration !== undefined && (obj.duration = (message.duration || Long.UZERO).toString());
    if (message.rewardDebt) {
      obj.rewardDebt = message.rewardDebt.map((e) => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.rewardDebt = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Commitment>): Commitment {
    return Commitment.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Commitment>): Commitment {
    const message = createBaseCommitment();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.liquidity = (object.liquidity !== undefined && object.liquidity !== null)
      ? Coin.fromPartial(object.liquidity)
      : undefined;
    message.startTime = object.startTime ?? undefined;
    message.duration = (object.duration !== undefined && object.duration !== null)
      ? Long.fromValue(object.duration)
      : Long.UZERO;
    message.rewardDebt = object.rewardDebt?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCommitmentRecord(): CommitmentRecord {
  return { address: "", commitment: undefined };
}

export const CommitmentRecord = {
  encode(message: CommitmentRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.commitment !== undefined) {
      Commitment.encode(message.commitment, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommitmentRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitmentRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.commitment = Commitment.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CommitmentRecord {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      commitment: isSet(object.commitment) ? Commitment.fromJSON(object.commitment) : undefined,
    };
  },

  toJSON(message: CommitmentRecord): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.commitment !== undefined &&
      (obj.commitment = message.commitment ? Commitment.toJSON(message.commitment) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CommitmentRecord>): CommitmentRecord {
    return CommitmentRecord.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CommitmentRecord>): CommitmentRecord {
    const message = createBaseCommitmentRecord();
    message.address = object.address ?? "";
    message.commitment = (object.commitment !== undefined && object.commitment !== null)
      ? Commitment.fromPartial(object.commitment)
      : undefined;
    return message;
  },
};

function createBaseTotalCommitment(): TotalCommitment {
  return { total: "" };
}

export const TotalCommitment = {
  encode(message: TotalCommitment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.total !== "") {
      writer.uint32(10).string(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TotalCommitment {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalCommitment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.total = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TotalCommitment {
    return { total: isSet(object.total) ? String(object.total) : "" };
  },

  toJSON(message: TotalCommitment): unknown {
    const obj: any = {};
    message.total !== undefined && (obj.total = message.total);
    return obj;
  },

  create(base?: DeepPartial<TotalCommitment>): TotalCommitment {
    return TotalCommitment.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TotalCommitment>): TotalCommitment {
    const message = createBaseTotalCommitment();
    message.total = object.total ?? "";
    return message;
  },
};

function createBaseTotalCommitmentRecord(): TotalCommitmentRecord {
  return { poolId: Long.UZERO, totalCommitment: undefined };
}

export const TotalCommitmentRecord = {
  encode(message: TotalCommitmentRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.totalCommitment !== undefined) {
      TotalCommitment.encode(message.totalCommitment, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TotalCommitmentRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalCommitmentRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.poolId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.totalCommitment = TotalCommitment.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TotalCommitmentRecord {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      totalCommitment: isSet(object.totalCommitment) ? TotalCommitment.fromJSON(object.totalCommitment) : undefined,
    };
  },

  toJSON(message: TotalCommitmentRecord): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.totalCommitment !== undefined &&
      (obj.totalCommitment = message.totalCommitment ? TotalCommitment.toJSON(message.totalCommitment) : undefined);
    return obj;
  },

  create(base?: DeepPartial<TotalCommitmentRecord>): TotalCommitmentRecord {
    return TotalCommitmentRecord.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TotalCommitmentRecord>): TotalCommitmentRecord {
    const message = createBaseTotalCommitmentRecord();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.totalCommitment = (object.totalCommitment !== undefined && object.totalCommitment !== null)
      ? TotalCommitment.fromPartial(object.totalCommitment)
      : undefined;
    return message;
  },
};

function createBaseCommitmentResponse(): CommitmentResponse {
  return {
    denom: "",
    amount: "",
    startTime: undefined,
    endTime: undefined,
    duration: Long.UZERO,
    isLocked: false,
    commitmentPower: "",
    boostFactor: "",
  };
}

export const CommitmentResponse = {
  encode(message: CommitmentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(26).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(34).fork()).ldelim();
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitmentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.duration = reader.uint64() as Long;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.isLocked = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.commitmentPower = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.boostFactor = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CommitmentResponse {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      duration: isSet(object.duration) ? Long.fromValue(object.duration) : Long.UZERO,
      isLocked: isSet(object.isLocked) ? Boolean(object.isLocked) : false,
      commitmentPower: isSet(object.commitmentPower) ? String(object.commitmentPower) : "",
      boostFactor: isSet(object.boostFactor) ? String(object.boostFactor) : "",
    };
  },

  toJSON(message: CommitmentResponse): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    message.endTime !== undefined && (obj.endTime = message.endTime.toISOString());
    message.duration !== undefined && (obj.duration = (message.duration || Long.UZERO).toString());
    message.isLocked !== undefined && (obj.isLocked = message.isLocked);
    message.commitmentPower !== undefined && (obj.commitmentPower = message.commitmentPower);
    message.boostFactor !== undefined && (obj.boostFactor = message.boostFactor);
    return obj;
  },

  create(base?: DeepPartial<CommitmentResponse>): CommitmentResponse {
    return CommitmentResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CommitmentResponse>): CommitmentResponse {
    const message = createBaseCommitmentResponse();
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.duration = (object.duration !== undefined && object.duration !== null)
      ? Long.fromValue(object.duration)
      : Long.UZERO;
    message.isLocked = object.isLocked ?? false;
    message.commitmentPower = object.commitmentPower ?? "";
    message.boostFactor = object.boostFactor ?? "";
    return message;
  },
};

function createBaseRewardHistory(): RewardHistory {
  return { poolId: Long.UZERO, rewards: [], totalCommitment: "" };
}

export const RewardHistory = {
  encode(message: RewardHistory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardHistory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.poolId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.totalCommitment = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RewardHistory {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => DecCoin.fromJSON(e)) : [],
      totalCommitment: isSet(object.totalCommitment) ? String(object.totalCommitment) : "",
    };
  },

  toJSON(message: RewardHistory): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    message.totalCommitment !== undefined && (obj.totalCommitment = message.totalCommitment);
    return obj;
  },

  create(base?: DeepPartial<RewardHistory>): RewardHistory {
    return RewardHistory.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RewardHistory>): RewardHistory {
    const message = createBaseRewardHistory();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.rewards = object.rewards?.map((e) => DecCoin.fromPartial(e)) || [];
    message.totalCommitment = object.totalCommitment ?? "";
    return message;
  },
};

function createBaseAccumulatedRewards(): AccumulatedRewards {
  return { rewardPerCommitmentShare: [] };
}

export const AccumulatedRewards = {
  encode(message: AccumulatedRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewardPerCommitmentShare) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccumulatedRewards {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccumulatedRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rewardPerCommitmentShare.push(DecCoin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AccumulatedRewards {
    return {
      rewardPerCommitmentShare: Array.isArray(object?.rewardPerCommitmentShare)
        ? object.rewardPerCommitmentShare.map((e: any) => DecCoin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AccumulatedRewards): unknown {
    const obj: any = {};
    if (message.rewardPerCommitmentShare) {
      obj.rewardPerCommitmentShare = message.rewardPerCommitmentShare.map((e) => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.rewardPerCommitmentShare = [];
    }
    return obj;
  },

  create(base?: DeepPartial<AccumulatedRewards>): AccumulatedRewards {
    return AccumulatedRewards.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AccumulatedRewards>): AccumulatedRewards {
    const message = createBaseAccumulatedRewards();
    message.rewardPerCommitmentShare = object.rewardPerCommitmentShare?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAccumulatedRewardsRecord(): AccumulatedRewardsRecord {
  return { poolId: Long.UZERO, accumulatedRewards: undefined };
}

export const AccumulatedRewardsRecord = {
  encode(message: AccumulatedRewardsRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.accumulatedRewards !== undefined) {
      AccumulatedRewards.encode(message.accumulatedRewards, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccumulatedRewardsRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccumulatedRewardsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.poolId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.accumulatedRewards = AccumulatedRewards.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AccumulatedRewardsRecord {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      accumulatedRewards: isSet(object.accumulatedRewards)
        ? AccumulatedRewards.fromJSON(object.accumulatedRewards)
        : undefined,
    };
  },

  toJSON(message: AccumulatedRewardsRecord): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.accumulatedRewards !== undefined && (obj.accumulatedRewards = message.accumulatedRewards
      ? AccumulatedRewards.toJSON(message.accumulatedRewards)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<AccumulatedRewardsRecord>): AccumulatedRewardsRecord {
    return AccumulatedRewardsRecord.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AccumulatedRewardsRecord>): AccumulatedRewardsRecord {
    const message = createBaseAccumulatedRewardsRecord();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.accumulatedRewards = (object.accumulatedRewards !== undefined && object.accumulatedRewards !== null)
      ? AccumulatedRewards.fromPartial(object.accumulatedRewards)
      : undefined;
    return message;
  },
};

function createBaseCommitmentExpiry(): CommitmentExpiry {
  return { poolId: Long.UZERO, address: "" };
}

export const CommitmentExpiry = {
  encode(message: CommitmentExpiry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommitmentExpiry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitmentExpiry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.poolId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CommitmentExpiry {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: CommitmentExpiry): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<CommitmentExpiry>): CommitmentExpiry {
    return CommitmentExpiry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CommitmentExpiry>): CommitmentExpiry {
    const message = createBaseCommitmentExpiry();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseCommitmentExpiries(): CommitmentExpiries {
  return { commitmentExpiries: [] };
}

export const CommitmentExpiries = {
  encode(message: CommitmentExpiries, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.commitmentExpiries) {
      CommitmentExpiry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommitmentExpiries {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitmentExpiries();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.commitmentExpiries.push(CommitmentExpiry.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CommitmentExpiries {
    return {
      commitmentExpiries: Array.isArray(object?.commitmentExpiries)
        ? object.commitmentExpiries.map((e: any) => CommitmentExpiry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CommitmentExpiries): unknown {
    const obj: any = {};
    if (message.commitmentExpiries) {
      obj.commitmentExpiries = message.commitmentExpiries.map((e) => e ? CommitmentExpiry.toJSON(e) : undefined);
    } else {
      obj.commitmentExpiries = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CommitmentExpiries>): CommitmentExpiries {
    return CommitmentExpiries.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CommitmentExpiries>): CommitmentExpiries {
    const message = createBaseCommitmentExpiries();
    message.commitmentExpiries = object.commitmentExpiries?.map((e) => CommitmentExpiry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCommitmentExpiriesRecord(): CommitmentExpiriesRecord {
  return { expiryTime: Long.UZERO, commitmentExpiries: undefined };
}

export const CommitmentExpiriesRecord = {
  encode(message: CommitmentExpiriesRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.expiryTime.isZero()) {
      writer.uint32(8).uint64(message.expiryTime);
    }
    if (message.commitmentExpiries !== undefined) {
      CommitmentExpiries.encode(message.commitmentExpiries, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommitmentExpiriesRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitmentExpiriesRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.expiryTime = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.commitmentExpiries = CommitmentExpiries.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CommitmentExpiriesRecord {
    return {
      expiryTime: isSet(object.expiryTime) ? Long.fromValue(object.expiryTime) : Long.UZERO,
      commitmentExpiries: isSet(object.commitmentExpiries)
        ? CommitmentExpiries.fromJSON(object.commitmentExpiries)
        : undefined,
    };
  },

  toJSON(message: CommitmentExpiriesRecord): unknown {
    const obj: any = {};
    message.expiryTime !== undefined && (obj.expiryTime = (message.expiryTime || Long.UZERO).toString());
    message.commitmentExpiries !== undefined && (obj.commitmentExpiries = message.commitmentExpiries
      ? CommitmentExpiries.toJSON(message.commitmentExpiries)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<CommitmentExpiriesRecord>): CommitmentExpiriesRecord {
    return CommitmentExpiriesRecord.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CommitmentExpiriesRecord>): CommitmentExpiriesRecord {
    const message = createBaseCommitmentExpiriesRecord();
    message.expiryTime = (object.expiryTime !== undefined && object.expiryTime !== null)
      ? Long.fromValue(object.expiryTime)
      : Long.UZERO;
    message.commitmentExpiries = (object.commitmentExpiries !== undefined && object.commitmentExpiries !== null)
      ? CommitmentExpiries.fromPartial(object.commitmentExpiries)
      : undefined;
    return message;
  },
};

function createBaseAllocatedRewards(): AllocatedRewards {
  return { coins: [] };
}

export const AllocatedRewards = {
  encode(message: AllocatedRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllocatedRewards {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllocatedRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.coins.push(DecCoin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AllocatedRewards {
    return { coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => DecCoin.fromJSON(e)) : [] };
  },

  toJSON(message: AllocatedRewards): unknown {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map((e) => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },

  create(base?: DeepPartial<AllocatedRewards>): AllocatedRewards {
    return AllocatedRewards.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AllocatedRewards>): AllocatedRewards {
    const message = createBaseAllocatedRewards();
    message.coins = object.coins?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds.toNumber() || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
