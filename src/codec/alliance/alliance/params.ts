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

function createBaseParams(): Params {
  return { rewardDelayTime: undefined, takeRateClaimInterval: undefined, lastTakeRateClaimTime: undefined };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardDelayTime !== undefined) {
      Duration.encode(message.rewardDelayTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.takeRateClaimInterval !== undefined) {
      Duration.encode(message.takeRateClaimInterval, writer.uint32(18).fork()).ldelim();
    }
    if (message.lastTakeRateClaimTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastTakeRateClaimTime), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rewardDelayTime = Duration.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.takeRateClaimInterval = Duration.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.lastTakeRateClaimTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      rewardDelayTime: isSet(object.rewardDelayTime) ? Duration.fromJSON(object.rewardDelayTime) : undefined,
      takeRateClaimInterval: isSet(object.takeRateClaimInterval)
        ? Duration.fromJSON(object.takeRateClaimInterval)
        : undefined,
      lastTakeRateClaimTime: isSet(object.lastTakeRateClaimTime)
        ? fromJsonTimestamp(object.lastTakeRateClaimTime)
        : undefined,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.rewardDelayTime !== undefined &&
      (obj.rewardDelayTime = message.rewardDelayTime ? Duration.toJSON(message.rewardDelayTime) : undefined);
    message.takeRateClaimInterval !== undefined && (obj.takeRateClaimInterval = message.takeRateClaimInterval
      ? Duration.toJSON(message.takeRateClaimInterval)
      : undefined);
    message.lastTakeRateClaimTime !== undefined &&
      (obj.lastTakeRateClaimTime = message.lastTakeRateClaimTime.toISOString());
    return obj;
  },

  create(base?: DeepPartial<Params>): Params {
    return Params.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.rewardDelayTime = (object.rewardDelayTime !== undefined && object.rewardDelayTime !== null)
      ? Duration.fromPartial(object.rewardDelayTime)
      : undefined;
    message.takeRateClaimInterval =
      (object.takeRateClaimInterval !== undefined && object.takeRateClaimInterval !== null)
        ? Duration.fromPartial(object.takeRateClaimInterval)
        : undefined;
    message.lastTakeRateClaimTime = object.lastTakeRateClaimTime ?? undefined;
    return message;
  },
};

function createBaseRewardHistory(): RewardHistory {
  return { denom: "", index: "", alliance: "" };
}

export const RewardHistory = {
  encode(message: RewardHistory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardHistory();
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

          message.index = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.alliance = reader.string();
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
      denom: isSet(object.denom) ? String(object.denom) : "",
      index: isSet(object.index) ? String(object.index) : "",
      alliance: isSet(object.alliance) ? String(object.alliance) : "",
    };
  },

  toJSON(message: RewardHistory): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.index !== undefined && (obj.index = message.index);
    message.alliance !== undefined && (obj.alliance = message.alliance);
    return obj;
  },

  create(base?: DeepPartial<RewardHistory>): RewardHistory {
    return RewardHistory.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RewardHistory>): RewardHistory {
    const message = createBaseRewardHistory();
    message.denom = object.denom ?? "";
    message.index = object.index ?? "";
    message.alliance = object.alliance ?? "";
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
