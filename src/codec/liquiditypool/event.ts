/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Pool } from "../liquiditypool/liquiditypool";
import { CommitmentCurve, Commitment } from "../liquiditypool/reward";

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

export interface CommitmentCurveEvent {
  commitmentCurve?: CommitmentCurve;
}

export interface CommitmentEvent {
  poolId: Long;
  address: string;
  commitment?: Commitment;
  type: string;
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Pool.fromJSON(object.pool);
    } else {
      message.pool = undefined;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    } else {
      message.id = Long.UZERO;
    }
    if (object.poolAddress !== undefined && object.poolAddress !== null) {
      message.poolAddress = String(object.poolAddress);
    } else {
      message.poolAddress = "";
    }
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Pool.fromPartial(object.pool);
    } else {
      message.pool = undefined;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id as Long;
    } else {
      message.id = Long.UZERO;
    }
    if (object.poolAddress !== undefined && object.poolAddress !== null) {
      message.poolAddress = object.poolAddress;
    } else {
      message.poolAddress = "";
    }
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
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = Long.fromString(object.poolId);
    } else {
      message.poolId = Long.UZERO;
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
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId as Long;
    } else {
      message.poolId = Long.UZERO;
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
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = Long.fromString(object.poolId);
    } else {
      message.poolId = Long.UZERO;
    }
    if (object.rewardsWeight !== undefined && object.rewardsWeight !== null) {
      message.rewardsWeight = String(object.rewardsWeight);
    } else {
      message.rewardsWeight = "";
    }
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
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId as Long;
    } else {
      message.poolId = Long.UZERO;
    }
    if (object.rewardsWeight !== undefined && object.rewardsWeight !== null) {
      message.rewardsWeight = object.rewardsWeight;
    } else {
      message.rewardsWeight = "";
    }
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
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = Long.fromString(object.poolId);
    } else {
      message.poolId = Long.UZERO;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.commitment !== undefined && object.commitment !== null) {
      message.commitment = Commitment.fromJSON(object.commitment);
    } else {
      message.commitment = undefined;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
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
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId as Long;
    } else {
      message.poolId = Long.UZERO;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.commitment !== undefined && object.commitment !== null) {
      message.commitment = Commitment.fromPartial(object.commitment);
    } else {
      message.commitment = undefined;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
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
