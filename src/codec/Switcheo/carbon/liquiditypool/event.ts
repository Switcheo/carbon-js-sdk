/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Pool } from "./liquiditypool";
import { AccumulatedRewards, Commitment, CommitmentCurve } from "./reward";

export const protobufPackage = "Switcheo.carbon.liquiditypool";

export interface PoolEvent {
  creator: string;
  pool?: Pool;
  type: string;
  id: Long;
  poolAddress: string;
}

export interface TotalCommitmentChangeEvent {
  poolId: Long;
  totalCommitment: string;
}

export interface RewardsWeightChangeEvent {
  poolId: Long;
  rewardsWeight: string;
}

export interface RewardCurveChangeEvent {
  startTime?: Date;
  initialRewardBps: number;
  reductionMultiplierBps: number;
  reductionIntervalSeconds: Long;
  reductions: number;
  finalRewardBps: number;
}

export interface CommitmentCurveEvent {
  commitmentCurve?: CommitmentCurve;
}

export interface CommitmentEvent {
  poolId: Long;
  address: string;
  commitment?: Commitment;
  type: string;
}

export interface SwapEvent {
  poolId: Long;
  input: string;
  output: string;
}

export interface DepositToPoolEvent {
  poolId: Long;
  denomA: string;
  amountA: string;
  denomB: string;
  amountB: string;
  shareDenom: string;
  shareAmount: string;
  initialShareAmountBurned: Long;
  depositor: string;
}

export interface WithdrawFromPoolEvent {
  poolId: Long;
  denomA: string;
  amountA: string;
  denomB: string;
  amountB: string;
  shareDenom: string;
  shareAmount: string;
  withdrawer: string;
}

export interface StakePoolTokenEvent {
  poolId: Long;
  denom: string;
  amount: string;
  creator: string;
  commitmentDuration: Long;
}

export interface UnstakePoolTokenEvent {
  poolId: Long;
  denom: string;
  amount: string;
  creator: string;
}

export interface RewardsAccumulatedEvent {
  poolId: Long;
  accumulatedRewards?: AccumulatedRewards;
}

export interface ClaimEvent {
  poolId: Long;
  address: string;
  rewards: Coin[];
}

function createBasePoolEvent(): PoolEvent {
  return { creator: "", pool: undefined, type: "", id: Long.UZERO, poolAddress: "" };
}

export const PoolEvent = {
  encode(message: PoolEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(18).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    if (!message.id.isZero()) {
      writer.uint32(32).uint64(message.id);
    }
    if (message.poolAddress !== "") {
      writer.uint32(42).string(message.poolAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pool = Pool.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.type = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.poolAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PoolEvent {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined,
      type: isSet(object.type) ? String(object.type) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      poolAddress: isSet(object.poolAddress) ? String(object.poolAddress) : "",
    };
  },

  toJSON(message: PoolEvent): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    message.type !== undefined && (obj.type = message.type);
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.poolAddress !== undefined && (obj.poolAddress = message.poolAddress);
    return obj;
  },

  create(base?: DeepPartial<PoolEvent>): PoolEvent {
    return PoolEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PoolEvent>): PoolEvent {
    const message = createBasePoolEvent();
    message.creator = object.creator ?? "";
    message.pool = (object.pool !== undefined && object.pool !== null) ? Pool.fromPartial(object.pool) : undefined;
    message.type = object.type ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.poolAddress = object.poolAddress ?? "";
    return message;
  },
};

function createBaseTotalCommitmentChangeEvent(): TotalCommitmentChangeEvent {
  return { poolId: Long.UZERO, totalCommitment: "" };
}

export const TotalCommitmentChangeEvent = {
  encode(message: TotalCommitmentChangeEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.totalCommitment !== "") {
      writer.uint32(18).string(message.totalCommitment);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TotalCommitmentChangeEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalCommitmentChangeEvent();
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

  fromJSON(object: any): TotalCommitmentChangeEvent {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      totalCommitment: isSet(object.totalCommitment) ? String(object.totalCommitment) : "",
    };
  },

  toJSON(message: TotalCommitmentChangeEvent): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.totalCommitment !== undefined && (obj.totalCommitment = message.totalCommitment);
    return obj;
  },

  create(base?: DeepPartial<TotalCommitmentChangeEvent>): TotalCommitmentChangeEvent {
    return TotalCommitmentChangeEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TotalCommitmentChangeEvent>): TotalCommitmentChangeEvent {
    const message = createBaseTotalCommitmentChangeEvent();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.totalCommitment = object.totalCommitment ?? "";
    return message;
  },
};

function createBaseRewardsWeightChangeEvent(): RewardsWeightChangeEvent {
  return { poolId: Long.UZERO, rewardsWeight: "" };
}

export const RewardsWeightChangeEvent = {
  encode(message: RewardsWeightChangeEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.rewardsWeight !== "") {
      writer.uint32(18).string(message.rewardsWeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardsWeightChangeEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardsWeightChangeEvent();
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

          message.rewardsWeight = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RewardsWeightChangeEvent {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      rewardsWeight: isSet(object.rewardsWeight) ? String(object.rewardsWeight) : "",
    };
  },

  toJSON(message: RewardsWeightChangeEvent): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.rewardsWeight !== undefined && (obj.rewardsWeight = message.rewardsWeight);
    return obj;
  },

  create(base?: DeepPartial<RewardsWeightChangeEvent>): RewardsWeightChangeEvent {
    return RewardsWeightChangeEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RewardsWeightChangeEvent>): RewardsWeightChangeEvent {
    const message = createBaseRewardsWeightChangeEvent();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.rewardsWeight = object.rewardsWeight ?? "";
    return message;
  },
};

function createBaseRewardCurveChangeEvent(): RewardCurveChangeEvent {
  return {
    startTime: undefined,
    initialRewardBps: 0,
    reductionMultiplierBps: 0,
    reductionIntervalSeconds: Long.UZERO,
    reductions: 0,
    finalRewardBps: 0,
  };
}

export const RewardCurveChangeEvent = {
  encode(message: RewardCurveChangeEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(10).fork()).ldelim();
    }
    if (message.initialRewardBps !== 0) {
      writer.uint32(16).uint32(message.initialRewardBps);
    }
    if (message.reductionMultiplierBps !== 0) {
      writer.uint32(24).uint32(message.reductionMultiplierBps);
    }
    if (!message.reductionIntervalSeconds.isZero()) {
      writer.uint32(32).uint64(message.reductionIntervalSeconds);
    }
    if (message.reductions !== 0) {
      writer.uint32(40).uint32(message.reductions);
    }
    if (message.finalRewardBps !== 0) {
      writer.uint32(48).uint32(message.finalRewardBps);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardCurveChangeEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardCurveChangeEvent();
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

          message.initialRewardBps = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.reductionMultiplierBps = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.reductionIntervalSeconds = reader.uint64() as Long;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.reductions = reader.uint32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.finalRewardBps = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RewardCurveChangeEvent {
    return {
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      initialRewardBps: isSet(object.initialRewardBps) ? Number(object.initialRewardBps) : 0,
      reductionMultiplierBps: isSet(object.reductionMultiplierBps) ? Number(object.reductionMultiplierBps) : 0,
      reductionIntervalSeconds: isSet(object.reductionIntervalSeconds)
        ? Long.fromValue(object.reductionIntervalSeconds)
        : Long.UZERO,
      reductions: isSet(object.reductions) ? Number(object.reductions) : 0,
      finalRewardBps: isSet(object.finalRewardBps) ? Number(object.finalRewardBps) : 0,
    };
  },

  toJSON(message: RewardCurveChangeEvent): unknown {
    const obj: any = {};
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    message.initialRewardBps !== undefined && (obj.initialRewardBps = Math.round(message.initialRewardBps));
    message.reductionMultiplierBps !== undefined &&
      (obj.reductionMultiplierBps = Math.round(message.reductionMultiplierBps));
    message.reductionIntervalSeconds !== undefined &&
      (obj.reductionIntervalSeconds = (message.reductionIntervalSeconds || Long.UZERO).toString());
    message.reductions !== undefined && (obj.reductions = Math.round(message.reductions));
    message.finalRewardBps !== undefined && (obj.finalRewardBps = Math.round(message.finalRewardBps));
    return obj;
  },

  create(base?: DeepPartial<RewardCurveChangeEvent>): RewardCurveChangeEvent {
    return RewardCurveChangeEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RewardCurveChangeEvent>): RewardCurveChangeEvent {
    const message = createBaseRewardCurveChangeEvent();
    message.startTime = object.startTime ?? undefined;
    message.initialRewardBps = object.initialRewardBps ?? 0;
    message.reductionMultiplierBps = object.reductionMultiplierBps ?? 0;
    message.reductionIntervalSeconds =
      (object.reductionIntervalSeconds !== undefined && object.reductionIntervalSeconds !== null)
        ? Long.fromValue(object.reductionIntervalSeconds)
        : Long.UZERO;
    message.reductions = object.reductions ?? 0;
    message.finalRewardBps = object.finalRewardBps ?? 0;
    return message;
  },
};

function createBaseCommitmentCurveEvent(): CommitmentCurveEvent {
  return { commitmentCurve: undefined };
}

export const CommitmentCurveEvent = {
  encode(message: CommitmentCurveEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commitmentCurve !== undefined) {
      CommitmentCurve.encode(message.commitmentCurve, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommitmentCurveEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitmentCurveEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.commitmentCurve = CommitmentCurve.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CommitmentCurveEvent {
    return {
      commitmentCurve: isSet(object.commitmentCurve) ? CommitmentCurve.fromJSON(object.commitmentCurve) : undefined,
    };
  },

  toJSON(message: CommitmentCurveEvent): unknown {
    const obj: any = {};
    message.commitmentCurve !== undefined &&
      (obj.commitmentCurve = message.commitmentCurve ? CommitmentCurve.toJSON(message.commitmentCurve) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CommitmentCurveEvent>): CommitmentCurveEvent {
    return CommitmentCurveEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CommitmentCurveEvent>): CommitmentCurveEvent {
    const message = createBaseCommitmentCurveEvent();
    message.commitmentCurve = (object.commitmentCurve !== undefined && object.commitmentCurve !== null)
      ? CommitmentCurve.fromPartial(object.commitmentCurve)
      : undefined;
    return message;
  },
};

function createBaseCommitmentEvent(): CommitmentEvent {
  return { poolId: Long.UZERO, address: "", commitment: undefined, type: "" };
}

export const CommitmentEvent = {
  encode(message: CommitmentEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.commitment !== undefined) {
      Commitment.encode(message.commitment, writer.uint32(26).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(34).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommitmentEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitmentEvent();
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
        case 3:
          if (tag !== 26) {
            break;
          }

          message.commitment = Commitment.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CommitmentEvent {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : "",
      commitment: isSet(object.commitment) ? Commitment.fromJSON(object.commitment) : undefined,
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: CommitmentEvent): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    message.commitment !== undefined &&
      (obj.commitment = message.commitment ? Commitment.toJSON(message.commitment) : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create(base?: DeepPartial<CommitmentEvent>): CommitmentEvent {
    return CommitmentEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CommitmentEvent>): CommitmentEvent {
    const message = createBaseCommitmentEvent();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.address = object.address ?? "";
    message.commitment = (object.commitment !== undefined && object.commitment !== null)
      ? Commitment.fromPartial(object.commitment)
      : undefined;
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseSwapEvent(): SwapEvent {
  return { poolId: Long.UZERO, input: "", output: "" };
}

export const SwapEvent = {
  encode(message: SwapEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.input !== "") {
      writer.uint32(18).string(message.input);
    }
    if (message.output !== "") {
      writer.uint32(26).string(message.output);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SwapEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapEvent();
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

          message.input = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.output = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SwapEvent {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      input: isSet(object.input) ? String(object.input) : "",
      output: isSet(object.output) ? String(object.output) : "",
    };
  },

  toJSON(message: SwapEvent): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.input !== undefined && (obj.input = message.input);
    message.output !== undefined && (obj.output = message.output);
    return obj;
  },

  create(base?: DeepPartial<SwapEvent>): SwapEvent {
    return SwapEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SwapEvent>): SwapEvent {
    const message = createBaseSwapEvent();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.input = object.input ?? "";
    message.output = object.output ?? "";
    return message;
  },
};

function createBaseDepositToPoolEvent(): DepositToPoolEvent {
  return {
    poolId: Long.UZERO,
    denomA: "",
    amountA: "",
    denomB: "",
    amountB: "",
    shareDenom: "",
    shareAmount: "",
    initialShareAmountBurned: Long.UZERO,
    depositor: "",
  };
}

export const DepositToPoolEvent = {
  encode(message: DepositToPoolEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denomA !== "") {
      writer.uint32(18).string(message.denomA);
    }
    if (message.amountA !== "") {
      writer.uint32(26).string(message.amountA);
    }
    if (message.denomB !== "") {
      writer.uint32(34).string(message.denomB);
    }
    if (message.amountB !== "") {
      writer.uint32(42).string(message.amountB);
    }
    if (message.shareDenom !== "") {
      writer.uint32(50).string(message.shareDenom);
    }
    if (message.shareAmount !== "") {
      writer.uint32(58).string(message.shareAmount);
    }
    if (!message.initialShareAmountBurned.isZero()) {
      writer.uint32(64).uint64(message.initialShareAmountBurned);
    }
    if (message.depositor !== "") {
      writer.uint32(74).string(message.depositor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositToPoolEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositToPoolEvent();
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

          message.denomA = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amountA = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.denomB = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.amountB = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.shareDenom = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.shareAmount = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.initialShareAmountBurned = reader.uint64() as Long;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.depositor = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DepositToPoolEvent {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      denomA: isSet(object.denomA) ? String(object.denomA) : "",
      amountA: isSet(object.amountA) ? String(object.amountA) : "",
      denomB: isSet(object.denomB) ? String(object.denomB) : "",
      amountB: isSet(object.amountB) ? String(object.amountB) : "",
      shareDenom: isSet(object.shareDenom) ? String(object.shareDenom) : "",
      shareAmount: isSet(object.shareAmount) ? String(object.shareAmount) : "",
      initialShareAmountBurned: isSet(object.initialShareAmountBurned)
        ? Long.fromValue(object.initialShareAmountBurned)
        : Long.UZERO,
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
    };
  },

  toJSON(message: DepositToPoolEvent): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.denomA !== undefined && (obj.denomA = message.denomA);
    message.amountA !== undefined && (obj.amountA = message.amountA);
    message.denomB !== undefined && (obj.denomB = message.denomB);
    message.amountB !== undefined && (obj.amountB = message.amountB);
    message.shareDenom !== undefined && (obj.shareDenom = message.shareDenom);
    message.shareAmount !== undefined && (obj.shareAmount = message.shareAmount);
    message.initialShareAmountBurned !== undefined &&
      (obj.initialShareAmountBurned = (message.initialShareAmountBurned || Long.UZERO).toString());
    message.depositor !== undefined && (obj.depositor = message.depositor);
    return obj;
  },

  create(base?: DeepPartial<DepositToPoolEvent>): DepositToPoolEvent {
    return DepositToPoolEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DepositToPoolEvent>): DepositToPoolEvent {
    const message = createBaseDepositToPoolEvent();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.denomA = object.denomA ?? "";
    message.amountA = object.amountA ?? "";
    message.denomB = object.denomB ?? "";
    message.amountB = object.amountB ?? "";
    message.shareDenom = object.shareDenom ?? "";
    message.shareAmount = object.shareAmount ?? "";
    message.initialShareAmountBurned =
      (object.initialShareAmountBurned !== undefined && object.initialShareAmountBurned !== null)
        ? Long.fromValue(object.initialShareAmountBurned)
        : Long.UZERO;
    message.depositor = object.depositor ?? "";
    return message;
  },
};

function createBaseWithdrawFromPoolEvent(): WithdrawFromPoolEvent {
  return {
    poolId: Long.UZERO,
    denomA: "",
    amountA: "",
    denomB: "",
    amountB: "",
    shareDenom: "",
    shareAmount: "",
    withdrawer: "",
  };
}

export const WithdrawFromPoolEvent = {
  encode(message: WithdrawFromPoolEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denomA !== "") {
      writer.uint32(18).string(message.denomA);
    }
    if (message.amountA !== "") {
      writer.uint32(26).string(message.amountA);
    }
    if (message.denomB !== "") {
      writer.uint32(34).string(message.denomB);
    }
    if (message.amountB !== "") {
      writer.uint32(42).string(message.amountB);
    }
    if (message.shareDenom !== "") {
      writer.uint32(50).string(message.shareDenom);
    }
    if (message.shareAmount !== "") {
      writer.uint32(58).string(message.shareAmount);
    }
    if (message.withdrawer !== "") {
      writer.uint32(66).string(message.withdrawer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawFromPoolEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawFromPoolEvent();
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

          message.denomA = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amountA = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.denomB = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.amountB = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.shareDenom = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.shareAmount = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.withdrawer = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WithdrawFromPoolEvent {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      denomA: isSet(object.denomA) ? String(object.denomA) : "",
      amountA: isSet(object.amountA) ? String(object.amountA) : "",
      denomB: isSet(object.denomB) ? String(object.denomB) : "",
      amountB: isSet(object.amountB) ? String(object.amountB) : "",
      shareDenom: isSet(object.shareDenom) ? String(object.shareDenom) : "",
      shareAmount: isSet(object.shareAmount) ? String(object.shareAmount) : "",
      withdrawer: isSet(object.withdrawer) ? String(object.withdrawer) : "",
    };
  },

  toJSON(message: WithdrawFromPoolEvent): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.denomA !== undefined && (obj.denomA = message.denomA);
    message.amountA !== undefined && (obj.amountA = message.amountA);
    message.denomB !== undefined && (obj.denomB = message.denomB);
    message.amountB !== undefined && (obj.amountB = message.amountB);
    message.shareDenom !== undefined && (obj.shareDenom = message.shareDenom);
    message.shareAmount !== undefined && (obj.shareAmount = message.shareAmount);
    message.withdrawer !== undefined && (obj.withdrawer = message.withdrawer);
    return obj;
  },

  create(base?: DeepPartial<WithdrawFromPoolEvent>): WithdrawFromPoolEvent {
    return WithdrawFromPoolEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<WithdrawFromPoolEvent>): WithdrawFromPoolEvent {
    const message = createBaseWithdrawFromPoolEvent();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.denomA = object.denomA ?? "";
    message.amountA = object.amountA ?? "";
    message.denomB = object.denomB ?? "";
    message.amountB = object.amountB ?? "";
    message.shareDenom = object.shareDenom ?? "";
    message.shareAmount = object.shareAmount ?? "";
    message.withdrawer = object.withdrawer ?? "";
    return message;
  },
};

function createBaseStakePoolTokenEvent(): StakePoolTokenEvent {
  return { poolId: Long.UZERO, denom: "", amount: "", creator: "", commitmentDuration: Long.UZERO };
}

export const StakePoolTokenEvent = {
  encode(message: StakePoolTokenEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    if (!message.commitmentDuration.isZero()) {
      writer.uint32(40).uint64(message.commitmentDuration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakePoolTokenEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakePoolTokenEvent();
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

          message.denom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.commitmentDuration = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StakePoolTokenEvent {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      commitmentDuration: isSet(object.commitmentDuration) ? Long.fromValue(object.commitmentDuration) : Long.UZERO,
    };
  },

  toJSON(message: StakePoolTokenEvent): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.creator !== undefined && (obj.creator = message.creator);
    message.commitmentDuration !== undefined &&
      (obj.commitmentDuration = (message.commitmentDuration || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<StakePoolTokenEvent>): StakePoolTokenEvent {
    return StakePoolTokenEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<StakePoolTokenEvent>): StakePoolTokenEvent {
    const message = createBaseStakePoolTokenEvent();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.creator = object.creator ?? "";
    message.commitmentDuration = (object.commitmentDuration !== undefined && object.commitmentDuration !== null)
      ? Long.fromValue(object.commitmentDuration)
      : Long.UZERO;
    return message;
  },
};

function createBaseUnstakePoolTokenEvent(): UnstakePoolTokenEvent {
  return { poolId: Long.UZERO, denom: "", amount: "", creator: "" };
}

export const UnstakePoolTokenEvent = {
  encode(message: UnstakePoolTokenEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnstakePoolTokenEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnstakePoolTokenEvent();
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

          message.denom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.creator = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UnstakePoolTokenEvent {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: UnstakePoolTokenEvent): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  create(base?: DeepPartial<UnstakePoolTokenEvent>): UnstakePoolTokenEvent {
    return UnstakePoolTokenEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UnstakePoolTokenEvent>): UnstakePoolTokenEvent {
    const message = createBaseUnstakePoolTokenEvent();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseRewardsAccumulatedEvent(): RewardsAccumulatedEvent {
  return { poolId: Long.UZERO, accumulatedRewards: undefined };
}

export const RewardsAccumulatedEvent = {
  encode(message: RewardsAccumulatedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.accumulatedRewards !== undefined) {
      AccumulatedRewards.encode(message.accumulatedRewards, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardsAccumulatedEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardsAccumulatedEvent();
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

  fromJSON(object: any): RewardsAccumulatedEvent {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      accumulatedRewards: isSet(object.accumulatedRewards)
        ? AccumulatedRewards.fromJSON(object.accumulatedRewards)
        : undefined,
    };
  },

  toJSON(message: RewardsAccumulatedEvent): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.accumulatedRewards !== undefined && (obj.accumulatedRewards = message.accumulatedRewards
      ? AccumulatedRewards.toJSON(message.accumulatedRewards)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<RewardsAccumulatedEvent>): RewardsAccumulatedEvent {
    return RewardsAccumulatedEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RewardsAccumulatedEvent>): RewardsAccumulatedEvent {
    const message = createBaseRewardsAccumulatedEvent();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.accumulatedRewards = (object.accumulatedRewards !== undefined && object.accumulatedRewards !== null)
      ? AccumulatedRewards.fromPartial(object.accumulatedRewards)
      : undefined;
    return message;
  },
};

function createBaseClaimEvent(): ClaimEvent {
  return { poolId: Long.UZERO, address: "", rewards: [] };
}

export const ClaimEvent = {
  encode(message: ClaimEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClaimEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimEvent();
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
        case 3:
          if (tag !== 26) {
            break;
          }

          message.rewards.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClaimEvent {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : "",
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: ClaimEvent): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },

  create(base?: DeepPartial<ClaimEvent>): ClaimEvent {
    return ClaimEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ClaimEvent>): ClaimEvent {
    const message = createBaseClaimEvent();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.address = object.address ?? "";
    message.rewards = object.rewards?.map((e) => Coin.fromPartial(e)) || [];
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
