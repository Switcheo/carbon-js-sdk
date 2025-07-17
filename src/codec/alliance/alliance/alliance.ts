/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../google/protobuf/duration";
import { Timestamp } from "../../google/protobuf/timestamp";
import { RewardHistory } from "./params";

export const protobufPackage = "alliance.alliance";

export interface RewardWeightRange {
  min: string;
  max: string;
}

/** key: denom value: AllianceAsset */
export interface AllianceAsset {
  /** Denom of the asset. It could either be a native token or an IBC token */
  denom: string;
  /**
   * The reward weight specifies the ratio of rewards that will be given to each alliance asset
   * It does not need to sum to 1. rate = weight / total_weight
   * Native asset is always assumed to have a weight of 1.s
   */
  rewardWeight: string;
  /**
   * A positive take rate is used for liquid staking derivatives. It defines an rate that is applied per take_rate_interval
   * that will be redirected to the distribution rewards pool
   */
  takeRate: string;
  totalTokens: string;
  totalValidatorShares: string;
  rewardStartTime?: Date;
  rewardChangeRate: string;
  rewardChangeInterval?: Duration;
  lastRewardChangeTime?: Date;
  /** set a bound of weight range to limit how much reward weights can scale. */
  rewardWeightRange?: RewardWeightRange;
  /** flag to check if an asset has completed the initialization process after the reward delay */
  isInitialized: boolean;
}

export interface RewardWeightChangeSnapshot {
  prevRewardWeight: string;
  rewardHistories: RewardHistory[];
}

function createBaseRewardWeightRange(): RewardWeightRange {
  return { min: "", max: "" };
}

export const RewardWeightRange = {
  encode(message: RewardWeightRange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.min !== "") {
      writer.uint32(10).string(message.min);
    }
    if (message.max !== "") {
      writer.uint32(18).string(message.max);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardWeightRange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardWeightRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.min = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.max = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RewardWeightRange {
    return { min: isSet(object.min) ? String(object.min) : "", max: isSet(object.max) ? String(object.max) : "" };
  },

  toJSON(message: RewardWeightRange): unknown {
    const obj: any = {};
    message.min !== undefined && (obj.min = message.min);
    message.max !== undefined && (obj.max = message.max);
    return obj;
  },

  create(base?: DeepPartial<RewardWeightRange>): RewardWeightRange {
    return RewardWeightRange.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RewardWeightRange>): RewardWeightRange {
    const message = createBaseRewardWeightRange();
    message.min = object.min ?? "";
    message.max = object.max ?? "";
    return message;
  },
};

function createBaseAllianceAsset(): AllianceAsset {
  return {
    denom: "",
    rewardWeight: "",
    takeRate: "",
    totalTokens: "",
    totalValidatorShares: "",
    rewardStartTime: undefined,
    rewardChangeRate: "",
    rewardChangeInterval: undefined,
    lastRewardChangeTime: undefined,
    rewardWeightRange: undefined,
    isInitialized: false,
  };
}

export const AllianceAsset = {
  encode(message: AllianceAsset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.rewardWeight !== "") {
      writer.uint32(18).string(message.rewardWeight);
    }
    if (message.takeRate !== "") {
      writer.uint32(26).string(message.takeRate);
    }
    if (message.totalTokens !== "") {
      writer.uint32(34).string(message.totalTokens);
    }
    if (message.totalValidatorShares !== "") {
      writer.uint32(42).string(message.totalValidatorShares);
    }
    if (message.rewardStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.rewardStartTime), writer.uint32(50).fork()).ldelim();
    }
    if (message.rewardChangeRate !== "") {
      writer.uint32(58).string(message.rewardChangeRate);
    }
    if (message.rewardChangeInterval !== undefined) {
      Duration.encode(message.rewardChangeInterval, writer.uint32(66).fork()).ldelim();
    }
    if (message.lastRewardChangeTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastRewardChangeTime), writer.uint32(74).fork()).ldelim();
    }
    if (message.rewardWeightRange !== undefined) {
      RewardWeightRange.encode(message.rewardWeightRange, writer.uint32(82).fork()).ldelim();
    }
    if (message.isInitialized === true) {
      writer.uint32(88).bool(message.isInitialized);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllianceAsset {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllianceAsset();
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

          message.rewardWeight = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.takeRate = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.totalTokens = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.totalValidatorShares = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.rewardStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.rewardChangeRate = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.rewardChangeInterval = Duration.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.lastRewardChangeTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.rewardWeightRange = RewardWeightRange.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.isInitialized = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AllianceAsset {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      rewardWeight: isSet(object.rewardWeight) ? String(object.rewardWeight) : "",
      takeRate: isSet(object.takeRate) ? String(object.takeRate) : "",
      totalTokens: isSet(object.totalTokens) ? String(object.totalTokens) : "",
      totalValidatorShares: isSet(object.totalValidatorShares) ? String(object.totalValidatorShares) : "",
      rewardStartTime: isSet(object.rewardStartTime) ? fromJsonTimestamp(object.rewardStartTime) : undefined,
      rewardChangeRate: isSet(object.rewardChangeRate) ? String(object.rewardChangeRate) : "",
      rewardChangeInterval: isSet(object.rewardChangeInterval)
        ? Duration.fromJSON(object.rewardChangeInterval)
        : undefined,
      lastRewardChangeTime: isSet(object.lastRewardChangeTime)
        ? fromJsonTimestamp(object.lastRewardChangeTime)
        : undefined,
      rewardWeightRange: isSet(object.rewardWeightRange)
        ? RewardWeightRange.fromJSON(object.rewardWeightRange)
        : undefined,
      isInitialized: isSet(object.isInitialized) ? Boolean(object.isInitialized) : false,
    };
  },

  toJSON(message: AllianceAsset): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.rewardWeight !== undefined && (obj.rewardWeight = message.rewardWeight);
    message.takeRate !== undefined && (obj.takeRate = message.takeRate);
    message.totalTokens !== undefined && (obj.totalTokens = message.totalTokens);
    message.totalValidatorShares !== undefined && (obj.totalValidatorShares = message.totalValidatorShares);
    message.rewardStartTime !== undefined && (obj.rewardStartTime = message.rewardStartTime.toISOString());
    message.rewardChangeRate !== undefined && (obj.rewardChangeRate = message.rewardChangeRate);
    message.rewardChangeInterval !== undefined && (obj.rewardChangeInterval = message.rewardChangeInterval
      ? Duration.toJSON(message.rewardChangeInterval)
      : undefined);
    message.lastRewardChangeTime !== undefined &&
      (obj.lastRewardChangeTime = message.lastRewardChangeTime.toISOString());
    message.rewardWeightRange !== undefined && (obj.rewardWeightRange = message.rewardWeightRange
      ? RewardWeightRange.toJSON(message.rewardWeightRange)
      : undefined);
    message.isInitialized !== undefined && (obj.isInitialized = message.isInitialized);
    return obj;
  },

  create(base?: DeepPartial<AllianceAsset>): AllianceAsset {
    return AllianceAsset.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AllianceAsset>): AllianceAsset {
    const message = createBaseAllianceAsset();
    message.denom = object.denom ?? "";
    message.rewardWeight = object.rewardWeight ?? "";
    message.takeRate = object.takeRate ?? "";
    message.totalTokens = object.totalTokens ?? "";
    message.totalValidatorShares = object.totalValidatorShares ?? "";
    message.rewardStartTime = object.rewardStartTime ?? undefined;
    message.rewardChangeRate = object.rewardChangeRate ?? "";
    message.rewardChangeInterval = (object.rewardChangeInterval !== undefined && object.rewardChangeInterval !== null)
      ? Duration.fromPartial(object.rewardChangeInterval)
      : undefined;
    message.lastRewardChangeTime = object.lastRewardChangeTime ?? undefined;
    message.rewardWeightRange = (object.rewardWeightRange !== undefined && object.rewardWeightRange !== null)
      ? RewardWeightRange.fromPartial(object.rewardWeightRange)
      : undefined;
    message.isInitialized = object.isInitialized ?? false;
    return message;
  },
};

function createBaseRewardWeightChangeSnapshot(): RewardWeightChangeSnapshot {
  return { prevRewardWeight: "", rewardHistories: [] };
}

export const RewardWeightChangeSnapshot = {
  encode(message: RewardWeightChangeSnapshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.prevRewardWeight !== "") {
      writer.uint32(10).string(message.prevRewardWeight);
    }
    for (const v of message.rewardHistories) {
      RewardHistory.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardWeightChangeSnapshot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardWeightChangeSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.prevRewardWeight = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.rewardHistories.push(RewardHistory.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RewardWeightChangeSnapshot {
    return {
      prevRewardWeight: isSet(object.prevRewardWeight) ? String(object.prevRewardWeight) : "",
      rewardHistories: Array.isArray(object?.rewardHistories)
        ? object.rewardHistories.map((e: any) => RewardHistory.fromJSON(e))
        : [],
    };
  },

  toJSON(message: RewardWeightChangeSnapshot): unknown {
    const obj: any = {};
    message.prevRewardWeight !== undefined && (obj.prevRewardWeight = message.prevRewardWeight);
    if (message.rewardHistories) {
      obj.rewardHistories = message.rewardHistories.map((e) => e ? RewardHistory.toJSON(e) : undefined);
    } else {
      obj.rewardHistories = [];
    }
    return obj;
  },

  create(base?: DeepPartial<RewardWeightChangeSnapshot>): RewardWeightChangeSnapshot {
    return RewardWeightChangeSnapshot.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RewardWeightChangeSnapshot>): RewardWeightChangeSnapshot {
    const message = createBaseRewardWeightChangeSnapshot();
    message.prevRewardWeight = object.prevRewardWeight ?? "";
    message.rewardHistories = object.rewardHistories?.map((e) => RewardHistory.fromPartial(e)) || [];
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
