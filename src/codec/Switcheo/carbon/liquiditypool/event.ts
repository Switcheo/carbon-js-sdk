/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Pool } from "./liquiditypool";
import { CommitmentCurve, Commitment, AccumulatedRewards } from "./reward";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

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

const basePoolEvent: object = {
  creator: "",
  type: "",
  id: Long.UZERO,
  poolAddress: "",
};

export const PoolEvent = {
  encode(
    message: PoolEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePoolEvent } as PoolEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        case 3:
          message.type = reader.string();
          break;
        case 4:
          message.id = reader.uint64() as Long;
          break;
        case 5:
          message.poolAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolEvent {
    const message = { ...basePoolEvent } as PoolEvent;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? Pool.fromJSON(object.pool)
        : undefined;
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromString(object.id)
        : Long.UZERO;
    message.poolAddress =
      object.poolAddress !== undefined && object.poolAddress !== null
        ? String(object.poolAddress)
        : "";
    return message;
  },

  toJSON(message: PoolEvent): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.pool !== undefined &&
      (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    message.type !== undefined && (obj.type = message.type);
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.poolAddress !== undefined &&
      (obj.poolAddress = message.poolAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<PoolEvent>): PoolEvent {
    const message = { ...basePoolEvent } as PoolEvent;
    message.creator = object.creator ?? "";
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? Pool.fromPartial(object.pool)
        : undefined;
    message.type = object.type ?? "";
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.poolAddress = object.poolAddress ?? "";
    return message;
  },
};

const baseTotalCommitmentChangeEvent: object = {
  poolId: Long.UZERO,
  totalCommitment: "",
};

export const TotalCommitmentChangeEvent = {
  encode(
    message: TotalCommitmentChangeEvent,
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TotalCommitmentChangeEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTotalCommitmentChangeEvent,
    } as TotalCommitmentChangeEvent;
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

  fromJSON(object: any): TotalCommitmentChangeEvent {
    const message = {
      ...baseTotalCommitmentChangeEvent,
    } as TotalCommitmentChangeEvent;
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

  toJSON(message: TotalCommitmentChangeEvent): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.totalCommitment !== undefined &&
      (obj.totalCommitment = message.totalCommitment);
    return obj;
  },

  fromPartial(
    object: DeepPartial<TotalCommitmentChangeEvent>
  ): TotalCommitmentChangeEvent {
    const message = {
      ...baseTotalCommitmentChangeEvent,
    } as TotalCommitmentChangeEvent;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.totalCommitment = object.totalCommitment ?? "";
    return message;
  },
};

const baseRewardsWeightChangeEvent: object = {
  poolId: Long.UZERO,
  rewardsWeight: "",
};

export const RewardsWeightChangeEvent = {
  encode(
    message: RewardsWeightChangeEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.rewardsWeight !== "") {
      writer.uint32(18).string(message.rewardsWeight);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RewardsWeightChangeEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRewardsWeightChangeEvent,
    } as RewardsWeightChangeEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.rewardsWeight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RewardsWeightChangeEvent {
    const message = {
      ...baseRewardsWeightChangeEvent,
    } as RewardsWeightChangeEvent;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.rewardsWeight =
      object.rewardsWeight !== undefined && object.rewardsWeight !== null
        ? String(object.rewardsWeight)
        : "";
    return message;
  },

  toJSON(message: RewardsWeightChangeEvent): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.rewardsWeight !== undefined &&
      (obj.rewardsWeight = message.rewardsWeight);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RewardsWeightChangeEvent>
  ): RewardsWeightChangeEvent {
    const message = {
      ...baseRewardsWeightChangeEvent,
    } as RewardsWeightChangeEvent;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.rewardsWeight = object.rewardsWeight ?? "";
    return message;
  },
};

const baseRewardCurveChangeEvent: object = {
  initialRewardBps: 0,
  reductionMultiplierBps: 0,
  reductionIntervalSeconds: Long.UZERO,
  reductions: 0,
  finalRewardBps: 0,
};

export const RewardCurveChangeEvent = {
  encode(
    message: RewardCurveChangeEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(10).fork()
      ).ldelim();
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RewardCurveChangeEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRewardCurveChangeEvent } as RewardCurveChangeEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.initialRewardBps = reader.uint32();
          break;
        case 3:
          message.reductionMultiplierBps = reader.uint32();
          break;
        case 4:
          message.reductionIntervalSeconds = reader.uint64() as Long;
          break;
        case 5:
          message.reductions = reader.uint32();
          break;
        case 6:
          message.finalRewardBps = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RewardCurveChangeEvent {
    const message = { ...baseRewardCurveChangeEvent } as RewardCurveChangeEvent;
    message.startTime =
      object.startTime !== undefined && object.startTime !== null
        ? fromJsonTimestamp(object.startTime)
        : undefined;
    message.initialRewardBps =
      object.initialRewardBps !== undefined && object.initialRewardBps !== null
        ? Number(object.initialRewardBps)
        : 0;
    message.reductionMultiplierBps =
      object.reductionMultiplierBps !== undefined &&
      object.reductionMultiplierBps !== null
        ? Number(object.reductionMultiplierBps)
        : 0;
    message.reductionIntervalSeconds =
      object.reductionIntervalSeconds !== undefined &&
      object.reductionIntervalSeconds !== null
        ? Long.fromString(object.reductionIntervalSeconds)
        : Long.UZERO;
    message.reductions =
      object.reductions !== undefined && object.reductions !== null
        ? Number(object.reductions)
        : 0;
    message.finalRewardBps =
      object.finalRewardBps !== undefined && object.finalRewardBps !== null
        ? Number(object.finalRewardBps)
        : 0;
    return message;
  },

  toJSON(message: RewardCurveChangeEvent): unknown {
    const obj: any = {};
    message.startTime !== undefined &&
      (obj.startTime = message.startTime.toISOString());
    message.initialRewardBps !== undefined &&
      (obj.initialRewardBps = message.initialRewardBps);
    message.reductionMultiplierBps !== undefined &&
      (obj.reductionMultiplierBps = message.reductionMultiplierBps);
    message.reductionIntervalSeconds !== undefined &&
      (obj.reductionIntervalSeconds = (
        message.reductionIntervalSeconds || Long.UZERO
      ).toString());
    message.reductions !== undefined && (obj.reductions = message.reductions);
    message.finalRewardBps !== undefined &&
      (obj.finalRewardBps = message.finalRewardBps);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RewardCurveChangeEvent>
  ): RewardCurveChangeEvent {
    const message = { ...baseRewardCurveChangeEvent } as RewardCurveChangeEvent;
    message.startTime = object.startTime ?? undefined;
    message.initialRewardBps = object.initialRewardBps ?? 0;
    message.reductionMultiplierBps = object.reductionMultiplierBps ?? 0;
    message.reductionIntervalSeconds =
      object.reductionIntervalSeconds !== undefined &&
      object.reductionIntervalSeconds !== null
        ? Long.fromValue(object.reductionIntervalSeconds)
        : Long.UZERO;
    message.reductions = object.reductions ?? 0;
    message.finalRewardBps = object.finalRewardBps ?? 0;
    return message;
  },
};

const baseCommitmentCurveEvent: object = {};

export const CommitmentCurveEvent = {
  encode(
    message: CommitmentCurveEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.commitmentCurve !== undefined) {
      CommitmentCurve.encode(
        message.commitmentCurve,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CommitmentCurveEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommitmentCurveEvent } as CommitmentCurveEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitmentCurve = CommitmentCurve.decode(
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

  fromJSON(object: any): CommitmentCurveEvent {
    const message = { ...baseCommitmentCurveEvent } as CommitmentCurveEvent;
    message.commitmentCurve =
      object.commitmentCurve !== undefined && object.commitmentCurve !== null
        ? CommitmentCurve.fromJSON(object.commitmentCurve)
        : undefined;
    return message;
  },

  toJSON(message: CommitmentCurveEvent): unknown {
    const obj: any = {};
    message.commitmentCurve !== undefined &&
      (obj.commitmentCurve = message.commitmentCurve
        ? CommitmentCurve.toJSON(message.commitmentCurve)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<CommitmentCurveEvent>): CommitmentCurveEvent {
    const message = { ...baseCommitmentCurveEvent } as CommitmentCurveEvent;
    message.commitmentCurve =
      object.commitmentCurve !== undefined && object.commitmentCurve !== null
        ? CommitmentCurve.fromPartial(object.commitmentCurve)
        : undefined;
    return message;
  },
};

const baseCommitmentEvent: object = {
  poolId: Long.UZERO,
  address: "",
  type: "",
};

export const CommitmentEvent = {
  encode(
    message: CommitmentEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommitmentEvent } as CommitmentEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.commitment = Commitment.decode(reader, reader.uint32());
          break;
        case 4:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommitmentEvent {
    const message = { ...baseCommitmentEvent } as CommitmentEvent;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.commitment =
      object.commitment !== undefined && object.commitment !== null
        ? Commitment.fromJSON(object.commitment)
        : undefined;
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    return message;
  },

  toJSON(message: CommitmentEvent): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    message.commitment !== undefined &&
      (obj.commitment = message.commitment
        ? Commitment.toJSON(message.commitment)
        : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(object: DeepPartial<CommitmentEvent>): CommitmentEvent {
    const message = { ...baseCommitmentEvent } as CommitmentEvent;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.address = object.address ?? "";
    message.commitment =
      object.commitment !== undefined && object.commitment !== null
        ? Commitment.fromPartial(object.commitment)
        : undefined;
    message.type = object.type ?? "";
    return message;
  },
};

const baseSwapEvent: object = { poolId: Long.UZERO, input: "", output: "" };

export const SwapEvent = {
  encode(
    message: SwapEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSwapEvent } as SwapEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.input = reader.string();
          break;
        case 3:
          message.output = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SwapEvent {
    const message = { ...baseSwapEvent } as SwapEvent;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.input =
      object.input !== undefined && object.input !== null
        ? String(object.input)
        : "";
    message.output =
      object.output !== undefined && object.output !== null
        ? String(object.output)
        : "";
    return message;
  },

  toJSON(message: SwapEvent): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.input !== undefined && (obj.input = message.input);
    message.output !== undefined && (obj.output = message.output);
    return obj;
  },

  fromPartial(object: DeepPartial<SwapEvent>): SwapEvent {
    const message = { ...baseSwapEvent } as SwapEvent;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.input = object.input ?? "";
    message.output = object.output ?? "";
    return message;
  },
};

const baseDepositToPoolEvent: object = {
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

export const DepositToPoolEvent = {
  encode(
    message: DepositToPoolEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDepositToPoolEvent } as DepositToPoolEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.denomA = reader.string();
          break;
        case 3:
          message.amountA = reader.string();
          break;
        case 4:
          message.denomB = reader.string();
          break;
        case 5:
          message.amountB = reader.string();
          break;
        case 6:
          message.shareDenom = reader.string();
          break;
        case 7:
          message.shareAmount = reader.string();
          break;
        case 8:
          message.initialShareAmountBurned = reader.uint64() as Long;
          break;
        case 9:
          message.depositor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DepositToPoolEvent {
    const message = { ...baseDepositToPoolEvent } as DepositToPoolEvent;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.denomA =
      object.denomA !== undefined && object.denomA !== null
        ? String(object.denomA)
        : "";
    message.amountA =
      object.amountA !== undefined && object.amountA !== null
        ? String(object.amountA)
        : "";
    message.denomB =
      object.denomB !== undefined && object.denomB !== null
        ? String(object.denomB)
        : "";
    message.amountB =
      object.amountB !== undefined && object.amountB !== null
        ? String(object.amountB)
        : "";
    message.shareDenom =
      object.shareDenom !== undefined && object.shareDenom !== null
        ? String(object.shareDenom)
        : "";
    message.shareAmount =
      object.shareAmount !== undefined && object.shareAmount !== null
        ? String(object.shareAmount)
        : "";
    message.initialShareAmountBurned =
      object.initialShareAmountBurned !== undefined &&
      object.initialShareAmountBurned !== null
        ? Long.fromString(object.initialShareAmountBurned)
        : Long.UZERO;
    message.depositor =
      object.depositor !== undefined && object.depositor !== null
        ? String(object.depositor)
        : "";
    return message;
  },

  toJSON(message: DepositToPoolEvent): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.denomA !== undefined && (obj.denomA = message.denomA);
    message.amountA !== undefined && (obj.amountA = message.amountA);
    message.denomB !== undefined && (obj.denomB = message.denomB);
    message.amountB !== undefined && (obj.amountB = message.amountB);
    message.shareDenom !== undefined && (obj.shareDenom = message.shareDenom);
    message.shareAmount !== undefined &&
      (obj.shareAmount = message.shareAmount);
    message.initialShareAmountBurned !== undefined &&
      (obj.initialShareAmountBurned = (
        message.initialShareAmountBurned || Long.UZERO
      ).toString());
    message.depositor !== undefined && (obj.depositor = message.depositor);
    return obj;
  },

  fromPartial(object: DeepPartial<DepositToPoolEvent>): DepositToPoolEvent {
    const message = { ...baseDepositToPoolEvent } as DepositToPoolEvent;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.denomA = object.denomA ?? "";
    message.amountA = object.amountA ?? "";
    message.denomB = object.denomB ?? "";
    message.amountB = object.amountB ?? "";
    message.shareDenom = object.shareDenom ?? "";
    message.shareAmount = object.shareAmount ?? "";
    message.initialShareAmountBurned =
      object.initialShareAmountBurned !== undefined &&
      object.initialShareAmountBurned !== null
        ? Long.fromValue(object.initialShareAmountBurned)
        : Long.UZERO;
    message.depositor = object.depositor ?? "";
    return message;
  },
};

const baseWithdrawFromPoolEvent: object = {
  poolId: Long.UZERO,
  denomA: "",
  amountA: "",
  denomB: "",
  amountB: "",
  shareDenom: "",
  shareAmount: "",
  withdrawer: "",
};

export const WithdrawFromPoolEvent = {
  encode(
    message: WithdrawFromPoolEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): WithdrawFromPoolEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWithdrawFromPoolEvent } as WithdrawFromPoolEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.denomA = reader.string();
          break;
        case 3:
          message.amountA = reader.string();
          break;
        case 4:
          message.denomB = reader.string();
          break;
        case 5:
          message.amountB = reader.string();
          break;
        case 6:
          message.shareDenom = reader.string();
          break;
        case 7:
          message.shareAmount = reader.string();
          break;
        case 8:
          message.withdrawer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WithdrawFromPoolEvent {
    const message = { ...baseWithdrawFromPoolEvent } as WithdrawFromPoolEvent;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.denomA =
      object.denomA !== undefined && object.denomA !== null
        ? String(object.denomA)
        : "";
    message.amountA =
      object.amountA !== undefined && object.amountA !== null
        ? String(object.amountA)
        : "";
    message.denomB =
      object.denomB !== undefined && object.denomB !== null
        ? String(object.denomB)
        : "";
    message.amountB =
      object.amountB !== undefined && object.amountB !== null
        ? String(object.amountB)
        : "";
    message.shareDenom =
      object.shareDenom !== undefined && object.shareDenom !== null
        ? String(object.shareDenom)
        : "";
    message.shareAmount =
      object.shareAmount !== undefined && object.shareAmount !== null
        ? String(object.shareAmount)
        : "";
    message.withdrawer =
      object.withdrawer !== undefined && object.withdrawer !== null
        ? String(object.withdrawer)
        : "";
    return message;
  },

  toJSON(message: WithdrawFromPoolEvent): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.denomA !== undefined && (obj.denomA = message.denomA);
    message.amountA !== undefined && (obj.amountA = message.amountA);
    message.denomB !== undefined && (obj.denomB = message.denomB);
    message.amountB !== undefined && (obj.amountB = message.amountB);
    message.shareDenom !== undefined && (obj.shareDenom = message.shareDenom);
    message.shareAmount !== undefined &&
      (obj.shareAmount = message.shareAmount);
    message.withdrawer !== undefined && (obj.withdrawer = message.withdrawer);
    return obj;
  },

  fromPartial(
    object: DeepPartial<WithdrawFromPoolEvent>
  ): WithdrawFromPoolEvent {
    const message = { ...baseWithdrawFromPoolEvent } as WithdrawFromPoolEvent;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
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

const baseStakePoolTokenEvent: object = {
  poolId: Long.UZERO,
  denom: "",
  amount: "",
  creator: "",
  commitmentDuration: Long.UZERO,
};

export const StakePoolTokenEvent = {
  encode(
    message: StakePoolTokenEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStakePoolTokenEvent } as StakePoolTokenEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.creator = reader.string();
          break;
        case 5:
          message.commitmentDuration = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StakePoolTokenEvent {
    const message = { ...baseStakePoolTokenEvent } as StakePoolTokenEvent;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.commitmentDuration =
      object.commitmentDuration !== undefined &&
      object.commitmentDuration !== null
        ? Long.fromString(object.commitmentDuration)
        : Long.UZERO;
    return message;
  },

  toJSON(message: StakePoolTokenEvent): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.creator !== undefined && (obj.creator = message.creator);
    message.commitmentDuration !== undefined &&
      (obj.commitmentDuration = (
        message.commitmentDuration || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<StakePoolTokenEvent>): StakePoolTokenEvent {
    const message = { ...baseStakePoolTokenEvent } as StakePoolTokenEvent;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.creator = object.creator ?? "";
    message.commitmentDuration =
      object.commitmentDuration !== undefined &&
      object.commitmentDuration !== null
        ? Long.fromValue(object.commitmentDuration)
        : Long.UZERO;
    return message;
  },
};

const baseUnstakePoolTokenEvent: object = {
  poolId: Long.UZERO,
  denom: "",
  amount: "",
  creator: "",
};

export const UnstakePoolTokenEvent = {
  encode(
    message: UnstakePoolTokenEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UnstakePoolTokenEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUnstakePoolTokenEvent } as UnstakePoolTokenEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnstakePoolTokenEvent {
    const message = { ...baseUnstakePoolTokenEvent } as UnstakePoolTokenEvent;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    return message;
  },

  toJSON(message: UnstakePoolTokenEvent): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UnstakePoolTokenEvent>
  ): UnstakePoolTokenEvent {
    const message = { ...baseUnstakePoolTokenEvent } as UnstakePoolTokenEvent;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
};

const baseRewardsAccumulatedEvent: object = { poolId: Long.UZERO };

export const RewardsAccumulatedEvent = {
  encode(
    message: RewardsAccumulatedEvent,
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
  ): RewardsAccumulatedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRewardsAccumulatedEvent,
    } as RewardsAccumulatedEvent;
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

  fromJSON(object: any): RewardsAccumulatedEvent {
    const message = {
      ...baseRewardsAccumulatedEvent,
    } as RewardsAccumulatedEvent;
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

  toJSON(message: RewardsAccumulatedEvent): unknown {
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
    object: DeepPartial<RewardsAccumulatedEvent>
  ): RewardsAccumulatedEvent {
    const message = {
      ...baseRewardsAccumulatedEvent,
    } as RewardsAccumulatedEvent;
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

const baseClaimEvent: object = { poolId: Long.UZERO, address: "" };

export const ClaimEvent = {
  encode(
    message: ClaimEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseClaimEvent } as ClaimEvent;
    message.rewards = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.rewards.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClaimEvent {
    const message = { ...baseClaimEvent } as ClaimEvent;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.rewards = (object.rewards ?? []).map((e: any) => Coin.fromJSON(e));
    return message;
  },

  toJSON(message: ClaimEvent): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.rewards = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ClaimEvent>): ClaimEvent {
    const message = { ...baseClaimEvent } as ClaimEvent;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.address = object.address ?? "";
    message.rewards = (object.rewards ?? []).map((e) => Coin.fromPartial(e));
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
