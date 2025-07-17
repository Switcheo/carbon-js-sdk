/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { StringValue } from "../../../google/protobuf/wrappers";

export const protobufPackage = "Switcheo.carbon.cdp";

export interface RewardScheme {
  id: Long;
  creator: string;
  rewardDenom: string;
  assetDenom: string;
  rewardType: string;
  rewardAmountPerSecond: string;
  startTime?: Date;
  endTime?: Date;
  rewardPerShareLastUpdatedAt?: Date;
  rewardPerShare: string;
}

export interface CreateRewardSchemeParams {
  rewardDenom: string;
  assetDenom: string;
  rewardType: string;
  rewardAmountPerSecond: string;
  startTime?: Date;
  endTime?: Date;
}

export interface UpdateRewardSchemeParams {
  rewardSchemeId: Long;
  rewardDenom?: string;
  assetDenom?: string;
  rewardType?: string;
  rewardAmountPerSecond: string;
  startTime?: Date;
  endTime?: Date;
}

export interface RewardDebt {
  userAddress: string;
  rewardSchemeId: Long;
  rewardDebt: string;
  lastUpdatedAt?: Date;
}

function createBaseRewardScheme(): RewardScheme {
  return {
    id: Long.UZERO,
    creator: "",
    rewardDenom: "",
    assetDenom: "",
    rewardType: "",
    rewardAmountPerSecond: "",
    startTime: undefined,
    endTime: undefined,
    rewardPerShareLastUpdatedAt: undefined,
    rewardPerShare: "",
  };
}

export const RewardScheme = {
  encode(message: RewardScheme, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.rewardDenom !== "") {
      writer.uint32(26).string(message.rewardDenom);
    }
    if (message.assetDenom !== "") {
      writer.uint32(34).string(message.assetDenom);
    }
    if (message.rewardType !== "") {
      writer.uint32(42).string(message.rewardType);
    }
    if (message.rewardAmountPerSecond !== "") {
      writer.uint32(50).string(message.rewardAmountPerSecond);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(58).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(66).fork()).ldelim();
    }
    if (message.rewardPerShareLastUpdatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.rewardPerShareLastUpdatedAt), writer.uint32(74).fork()).ldelim();
    }
    if (message.rewardPerShare !== "") {
      writer.uint32(82).string(message.rewardPerShare);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardScheme {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardScheme();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.rewardDenom = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.assetDenom = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.rewardType = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.rewardAmountPerSecond = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.rewardPerShareLastUpdatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.rewardPerShare = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RewardScheme {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      creator: isSet(object.creator) ? String(object.creator) : "",
      rewardDenom: isSet(object.rewardDenom) ? String(object.rewardDenom) : "",
      assetDenom: isSet(object.assetDenom) ? String(object.assetDenom) : "",
      rewardType: isSet(object.rewardType) ? String(object.rewardType) : "",
      rewardAmountPerSecond: isSet(object.rewardAmountPerSecond) ? String(object.rewardAmountPerSecond) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      rewardPerShareLastUpdatedAt: isSet(object.rewardPerShareLastUpdatedAt)
        ? fromJsonTimestamp(object.rewardPerShareLastUpdatedAt)
        : undefined,
      rewardPerShare: isSet(object.rewardPerShare) ? String(object.rewardPerShare) : "",
    };
  },

  toJSON(message: RewardScheme): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.creator !== undefined && (obj.creator = message.creator);
    message.rewardDenom !== undefined && (obj.rewardDenom = message.rewardDenom);
    message.assetDenom !== undefined && (obj.assetDenom = message.assetDenom);
    message.rewardType !== undefined && (obj.rewardType = message.rewardType);
    message.rewardAmountPerSecond !== undefined && (obj.rewardAmountPerSecond = message.rewardAmountPerSecond);
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    message.endTime !== undefined && (obj.endTime = message.endTime.toISOString());
    message.rewardPerShareLastUpdatedAt !== undefined &&
      (obj.rewardPerShareLastUpdatedAt = message.rewardPerShareLastUpdatedAt.toISOString());
    message.rewardPerShare !== undefined && (obj.rewardPerShare = message.rewardPerShare);
    return obj;
  },

  create(base?: DeepPartial<RewardScheme>): RewardScheme {
    return RewardScheme.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RewardScheme>): RewardScheme {
    const message = createBaseRewardScheme();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.creator = object.creator ?? "";
    message.rewardDenom = object.rewardDenom ?? "";
    message.assetDenom = object.assetDenom ?? "";
    message.rewardType = object.rewardType ?? "";
    message.rewardAmountPerSecond = object.rewardAmountPerSecond ?? "";
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.rewardPerShareLastUpdatedAt = object.rewardPerShareLastUpdatedAt ?? undefined;
    message.rewardPerShare = object.rewardPerShare ?? "";
    return message;
  },
};

function createBaseCreateRewardSchemeParams(): CreateRewardSchemeParams {
  return {
    rewardDenom: "",
    assetDenom: "",
    rewardType: "",
    rewardAmountPerSecond: "",
    startTime: undefined,
    endTime: undefined,
  };
}

export const CreateRewardSchemeParams = {
  encode(message: CreateRewardSchemeParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardDenom !== "") {
      writer.uint32(10).string(message.rewardDenom);
    }
    if (message.assetDenom !== "") {
      writer.uint32(18).string(message.assetDenom);
    }
    if (message.rewardType !== "") {
      writer.uint32(26).string(message.rewardType);
    }
    if (message.rewardAmountPerSecond !== "") {
      writer.uint32(34).string(message.rewardAmountPerSecond);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateRewardSchemeParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateRewardSchemeParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rewardDenom = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.assetDenom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.rewardType = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.rewardAmountPerSecond = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateRewardSchemeParams {
    return {
      rewardDenom: isSet(object.rewardDenom) ? String(object.rewardDenom) : "",
      assetDenom: isSet(object.assetDenom) ? String(object.assetDenom) : "",
      rewardType: isSet(object.rewardType) ? String(object.rewardType) : "",
      rewardAmountPerSecond: isSet(object.rewardAmountPerSecond) ? String(object.rewardAmountPerSecond) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
    };
  },

  toJSON(message: CreateRewardSchemeParams): unknown {
    const obj: any = {};
    message.rewardDenom !== undefined && (obj.rewardDenom = message.rewardDenom);
    message.assetDenom !== undefined && (obj.assetDenom = message.assetDenom);
    message.rewardType !== undefined && (obj.rewardType = message.rewardType);
    message.rewardAmountPerSecond !== undefined && (obj.rewardAmountPerSecond = message.rewardAmountPerSecond);
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    message.endTime !== undefined && (obj.endTime = message.endTime.toISOString());
    return obj;
  },

  create(base?: DeepPartial<CreateRewardSchemeParams>): CreateRewardSchemeParams {
    return CreateRewardSchemeParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateRewardSchemeParams>): CreateRewardSchemeParams {
    const message = createBaseCreateRewardSchemeParams();
    message.rewardDenom = object.rewardDenom ?? "";
    message.assetDenom = object.assetDenom ?? "";
    message.rewardType = object.rewardType ?? "";
    message.rewardAmountPerSecond = object.rewardAmountPerSecond ?? "";
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    return message;
  },
};

function createBaseUpdateRewardSchemeParams(): UpdateRewardSchemeParams {
  return {
    rewardSchemeId: Long.UZERO,
    rewardDenom: undefined,
    assetDenom: undefined,
    rewardType: undefined,
    rewardAmountPerSecond: "",
    startTime: undefined,
    endTime: undefined,
  };
}

export const UpdateRewardSchemeParams = {
  encode(message: UpdateRewardSchemeParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.rewardSchemeId.isZero()) {
      writer.uint32(8).uint64(message.rewardSchemeId);
    }
    if (message.rewardDenom !== undefined) {
      StringValue.encode({ value: message.rewardDenom! }, writer.uint32(18).fork()).ldelim();
    }
    if (message.assetDenom !== undefined) {
      StringValue.encode({ value: message.assetDenom! }, writer.uint32(26).fork()).ldelim();
    }
    if (message.rewardType !== undefined) {
      StringValue.encode({ value: message.rewardType! }, writer.uint32(34).fork()).ldelim();
    }
    if (message.rewardAmountPerSecond !== "") {
      writer.uint32(42).string(message.rewardAmountPerSecond);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(50).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRewardSchemeParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateRewardSchemeParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.rewardSchemeId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.rewardDenom = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.assetDenom = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.rewardType = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.rewardAmountPerSecond = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateRewardSchemeParams {
    return {
      rewardSchemeId: isSet(object.rewardSchemeId) ? Long.fromValue(object.rewardSchemeId) : Long.UZERO,
      rewardDenom: isSet(object.rewardDenom) ? String(object.rewardDenom) : undefined,
      assetDenom: isSet(object.assetDenom) ? String(object.assetDenom) : undefined,
      rewardType: isSet(object.rewardType) ? String(object.rewardType) : undefined,
      rewardAmountPerSecond: isSet(object.rewardAmountPerSecond) ? String(object.rewardAmountPerSecond) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
    };
  },

  toJSON(message: UpdateRewardSchemeParams): unknown {
    const obj: any = {};
    message.rewardSchemeId !== undefined && (obj.rewardSchemeId = (message.rewardSchemeId || Long.UZERO).toString());
    message.rewardDenom !== undefined && (obj.rewardDenom = message.rewardDenom);
    message.assetDenom !== undefined && (obj.assetDenom = message.assetDenom);
    message.rewardType !== undefined && (obj.rewardType = message.rewardType);
    message.rewardAmountPerSecond !== undefined && (obj.rewardAmountPerSecond = message.rewardAmountPerSecond);
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    message.endTime !== undefined && (obj.endTime = message.endTime.toISOString());
    return obj;
  },

  create(base?: DeepPartial<UpdateRewardSchemeParams>): UpdateRewardSchemeParams {
    return UpdateRewardSchemeParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateRewardSchemeParams>): UpdateRewardSchemeParams {
    const message = createBaseUpdateRewardSchemeParams();
    message.rewardSchemeId = (object.rewardSchemeId !== undefined && object.rewardSchemeId !== null)
      ? Long.fromValue(object.rewardSchemeId)
      : Long.UZERO;
    message.rewardDenom = object.rewardDenom ?? undefined;
    message.assetDenom = object.assetDenom ?? undefined;
    message.rewardType = object.rewardType ?? undefined;
    message.rewardAmountPerSecond = object.rewardAmountPerSecond ?? "";
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    return message;
  },
};

function createBaseRewardDebt(): RewardDebt {
  return { userAddress: "", rewardSchemeId: Long.UZERO, rewardDebt: "", lastUpdatedAt: undefined };
}

export const RewardDebt = {
  encode(message: RewardDebt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }
    if (!message.rewardSchemeId.isZero()) {
      writer.uint32(16).uint64(message.rewardSchemeId);
    }
    if (message.rewardDebt !== "") {
      writer.uint32(26).string(message.rewardDebt);
    }
    if (message.lastUpdatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.lastUpdatedAt), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardDebt {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardDebt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userAddress = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.rewardSchemeId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.rewardDebt = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.lastUpdatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RewardDebt {
    return {
      userAddress: isSet(object.userAddress) ? String(object.userAddress) : "",
      rewardSchemeId: isSet(object.rewardSchemeId) ? Long.fromValue(object.rewardSchemeId) : Long.UZERO,
      rewardDebt: isSet(object.rewardDebt) ? String(object.rewardDebt) : "",
      lastUpdatedAt: isSet(object.lastUpdatedAt) ? fromJsonTimestamp(object.lastUpdatedAt) : undefined,
    };
  },

  toJSON(message: RewardDebt): unknown {
    const obj: any = {};
    message.userAddress !== undefined && (obj.userAddress = message.userAddress);
    message.rewardSchemeId !== undefined && (obj.rewardSchemeId = (message.rewardSchemeId || Long.UZERO).toString());
    message.rewardDebt !== undefined && (obj.rewardDebt = message.rewardDebt);
    message.lastUpdatedAt !== undefined && (obj.lastUpdatedAt = message.lastUpdatedAt.toISOString());
    return obj;
  },

  create(base?: DeepPartial<RewardDebt>): RewardDebt {
    return RewardDebt.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RewardDebt>): RewardDebt {
    const message = createBaseRewardDebt();
    message.userAddress = object.userAddress ?? "";
    message.rewardSchemeId = (object.rewardSchemeId !== undefined && object.rewardSchemeId !== null)
      ? Long.fromValue(object.rewardSchemeId)
      : Long.UZERO;
    message.rewardDebt = object.rewardDebt ?? "";
    message.lastUpdatedAt = object.lastUpdatedAt ?? undefined;
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
