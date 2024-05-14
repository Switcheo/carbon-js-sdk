/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../google/protobuf/duration";
import { Timestamp } from "../../google/protobuf/timestamp";

export const protobufPackage = "alliance.alliance";

export interface Params {
  rewardDelayTime?: Duration;
  /** Time interval between consecutive applications of `take_rate` */
  takeRateClaimInterval?: Duration;
  /** Last application of `take_rate` on assets */
  lastTakeRateClaimTime?: Date;
}

export interface RewardHistory {
  denom: string;
  index: string;
  alliance: string;
}

const baseParams: object = {};

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rewardDelayTime !== undefined) {
      Duration.encode(
        message.rewardDelayTime,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.takeRateClaimInterval !== undefined) {
      Duration.encode(
        message.takeRateClaimInterval,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.lastTakeRateClaimTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastTakeRateClaimTime),
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardDelayTime = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.takeRateClaimInterval = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.lastTakeRateClaimTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    message.rewardDelayTime =
      object.rewardDelayTime !== undefined && object.rewardDelayTime !== null
        ? Duration.fromJSON(object.rewardDelayTime)
        : undefined;
    message.takeRateClaimInterval =
      object.takeRateClaimInterval !== undefined &&
      object.takeRateClaimInterval !== null
        ? Duration.fromJSON(object.takeRateClaimInterval)
        : undefined;
    message.lastTakeRateClaimTime =
      object.lastTakeRateClaimTime !== undefined &&
      object.lastTakeRateClaimTime !== null
        ? fromJsonTimestamp(object.lastTakeRateClaimTime)
        : undefined;
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.rewardDelayTime !== undefined &&
      (obj.rewardDelayTime = message.rewardDelayTime
        ? Duration.toJSON(message.rewardDelayTime)
        : undefined);
    message.takeRateClaimInterval !== undefined &&
      (obj.takeRateClaimInterval = message.takeRateClaimInterval
        ? Duration.toJSON(message.takeRateClaimInterval)
        : undefined);
    message.lastTakeRateClaimTime !== undefined &&
      (obj.lastTakeRateClaimTime = message.lastTakeRateClaimTime.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.rewardDelayTime =
      object.rewardDelayTime !== undefined && object.rewardDelayTime !== null
        ? Duration.fromPartial(object.rewardDelayTime)
        : undefined;
    message.takeRateClaimInterval =
      object.takeRateClaimInterval !== undefined &&
      object.takeRateClaimInterval !== null
        ? Duration.fromPartial(object.takeRateClaimInterval)
        : undefined;
    message.lastTakeRateClaimTime = object.lastTakeRateClaimTime ?? undefined;
    return message;
  },
};

const baseRewardHistory: object = { denom: "", index: "", alliance: "" };

export const RewardHistory = {
  encode(
    message: RewardHistory,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.alliance !== "") {
      writer.uint32(26).string(message.alliance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardHistory {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRewardHistory } as RewardHistory;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.alliance = reader.string();
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
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.index =
      object.index !== undefined && object.index !== null
        ? String(object.index)
        : "";
    message.alliance =
      object.alliance !== undefined && object.alliance !== null
        ? String(object.alliance)
        : "";
    return message;
  },

  toJSON(message: RewardHistory): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.index !== undefined && (obj.index = message.index);
    message.alliance !== undefined && (obj.alliance = message.alliance);
    return obj;
  },

  fromPartial(object: DeepPartial<RewardHistory>): RewardHistory {
    const message = { ...baseRewardHistory } as RewardHistory;
    message.denom = object.denom ?? "";
    message.index = object.index ?? "";
    message.alliance = object.alliance ?? "";
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
