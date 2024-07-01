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

const baseRewardScheme: object = {
  id: Long.UZERO,
  creator: "",
  rewardDenom: "",
  assetDenom: "",
  rewardType: "",
  rewardAmountPerSecond: "",
  rewardPerShare: "",
};

export const RewardScheme = {
  encode(
    message: RewardScheme,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endTime),
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.rewardPerShareLastUpdatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.rewardPerShareLastUpdatedAt),
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.rewardPerShare !== "") {
      writer.uint32(82).string(message.rewardPerShare);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardScheme {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRewardScheme } as RewardScheme;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.rewardDenom = reader.string();
          break;
        case 4:
          message.assetDenom = reader.string();
          break;
        case 5:
          message.rewardType = reader.string();
          break;
        case 6:
          message.rewardAmountPerSecond = reader.string();
          break;
        case 7:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.endTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.rewardPerShareLastUpdatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.rewardPerShare = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RewardScheme {
    const message = { ...baseRewardScheme } as RewardScheme;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromString(object.id)
        : Long.UZERO;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.rewardDenom =
      object.rewardDenom !== undefined && object.rewardDenom !== null
        ? String(object.rewardDenom)
        : "";
    message.assetDenom =
      object.assetDenom !== undefined && object.assetDenom !== null
        ? String(object.assetDenom)
        : "";
    message.rewardType =
      object.rewardType !== undefined && object.rewardType !== null
        ? String(object.rewardType)
        : "";
    message.rewardAmountPerSecond =
      object.rewardAmountPerSecond !== undefined &&
      object.rewardAmountPerSecond !== null
        ? String(object.rewardAmountPerSecond)
        : "";
    message.startTime =
      object.startTime !== undefined && object.startTime !== null
        ? fromJsonTimestamp(object.startTime)
        : undefined;
    message.endTime =
      object.endTime !== undefined && object.endTime !== null
        ? fromJsonTimestamp(object.endTime)
        : undefined;
    message.rewardPerShareLastUpdatedAt =
      object.rewardPerShareLastUpdatedAt !== undefined &&
      object.rewardPerShareLastUpdatedAt !== null
        ? fromJsonTimestamp(object.rewardPerShareLastUpdatedAt)
        : undefined;
    message.rewardPerShare =
      object.rewardPerShare !== undefined && object.rewardPerShare !== null
        ? String(object.rewardPerShare)
        : "";
    return message;
  },

  toJSON(message: RewardScheme): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.creator !== undefined && (obj.creator = message.creator);
    message.rewardDenom !== undefined &&
      (obj.rewardDenom = message.rewardDenom);
    message.assetDenom !== undefined && (obj.assetDenom = message.assetDenom);
    message.rewardType !== undefined && (obj.rewardType = message.rewardType);
    message.rewardAmountPerSecond !== undefined &&
      (obj.rewardAmountPerSecond = message.rewardAmountPerSecond);
    message.startTime !== undefined &&
      (obj.startTime = message.startTime.toISOString());
    message.endTime !== undefined &&
      (obj.endTime = message.endTime.toISOString());
    message.rewardPerShareLastUpdatedAt !== undefined &&
      (obj.rewardPerShareLastUpdatedAt =
        message.rewardPerShareLastUpdatedAt.toISOString());
    message.rewardPerShare !== undefined &&
      (obj.rewardPerShare = message.rewardPerShare);
    return obj;
  },

  fromPartial(object: DeepPartial<RewardScheme>): RewardScheme {
    const message = { ...baseRewardScheme } as RewardScheme;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.creator = object.creator ?? "";
    message.rewardDenom = object.rewardDenom ?? "";
    message.assetDenom = object.assetDenom ?? "";
    message.rewardType = object.rewardType ?? "";
    message.rewardAmountPerSecond = object.rewardAmountPerSecond ?? "";
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.rewardPerShareLastUpdatedAt =
      object.rewardPerShareLastUpdatedAt ?? undefined;
    message.rewardPerShare = object.rewardPerShare ?? "";
    return message;
  },
};

const baseCreateRewardSchemeParams: object = {
  rewardDenom: "",
  assetDenom: "",
  rewardType: "",
  rewardAmountPerSecond: "",
};

export const CreateRewardSchemeParams = {
  encode(
    message: CreateRewardSchemeParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endTime),
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateRewardSchemeParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateRewardSchemeParams,
    } as CreateRewardSchemeParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardDenom = reader.string();
          break;
        case 2:
          message.assetDenom = reader.string();
          break;
        case 3:
          message.rewardType = reader.string();
          break;
        case 4:
          message.rewardAmountPerSecond = reader.string();
          break;
        case 5:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.endTime = fromTimestamp(
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

  fromJSON(object: any): CreateRewardSchemeParams {
    const message = {
      ...baseCreateRewardSchemeParams,
    } as CreateRewardSchemeParams;
    message.rewardDenom =
      object.rewardDenom !== undefined && object.rewardDenom !== null
        ? String(object.rewardDenom)
        : "";
    message.assetDenom =
      object.assetDenom !== undefined && object.assetDenom !== null
        ? String(object.assetDenom)
        : "";
    message.rewardType =
      object.rewardType !== undefined && object.rewardType !== null
        ? String(object.rewardType)
        : "";
    message.rewardAmountPerSecond =
      object.rewardAmountPerSecond !== undefined &&
      object.rewardAmountPerSecond !== null
        ? String(object.rewardAmountPerSecond)
        : "";
    message.startTime =
      object.startTime !== undefined && object.startTime !== null
        ? fromJsonTimestamp(object.startTime)
        : undefined;
    message.endTime =
      object.endTime !== undefined && object.endTime !== null
        ? fromJsonTimestamp(object.endTime)
        : undefined;
    return message;
  },

  toJSON(message: CreateRewardSchemeParams): unknown {
    const obj: any = {};
    message.rewardDenom !== undefined &&
      (obj.rewardDenom = message.rewardDenom);
    message.assetDenom !== undefined && (obj.assetDenom = message.assetDenom);
    message.rewardType !== undefined && (obj.rewardType = message.rewardType);
    message.rewardAmountPerSecond !== undefined &&
      (obj.rewardAmountPerSecond = message.rewardAmountPerSecond);
    message.startTime !== undefined &&
      (obj.startTime = message.startTime.toISOString());
    message.endTime !== undefined &&
      (obj.endTime = message.endTime.toISOString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateRewardSchemeParams>
  ): CreateRewardSchemeParams {
    const message = {
      ...baseCreateRewardSchemeParams,
    } as CreateRewardSchemeParams;
    message.rewardDenom = object.rewardDenom ?? "";
    message.assetDenom = object.assetDenom ?? "";
    message.rewardType = object.rewardType ?? "";
    message.rewardAmountPerSecond = object.rewardAmountPerSecond ?? "";
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    return message;
  },
};

const baseUpdateRewardSchemeParams: object = {
  rewardSchemeId: Long.UZERO,
  rewardAmountPerSecond: "",
};

export const UpdateRewardSchemeParams = {
  encode(
    message: UpdateRewardSchemeParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.rewardSchemeId.isZero()) {
      writer.uint32(8).uint64(message.rewardSchemeId);
    }
    if (message.rewardDenom !== undefined) {
      StringValue.encode(
        { value: message.rewardDenom! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.assetDenom !== undefined) {
      StringValue.encode(
        { value: message.assetDenom! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.rewardType !== undefined) {
      StringValue.encode(
        { value: message.rewardType! },
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.rewardAmountPerSecond !== "") {
      writer.uint32(42).string(message.rewardAmountPerSecond);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endTime),
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateRewardSchemeParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateRewardSchemeParams,
    } as UpdateRewardSchemeParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardSchemeId = reader.uint64() as Long;
          break;
        case 2:
          message.rewardDenom = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 3:
          message.assetDenom = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 4:
          message.rewardType = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 5:
          message.rewardAmountPerSecond = reader.string();
          break;
        case 6:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.endTime = fromTimestamp(
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

  fromJSON(object: any): UpdateRewardSchemeParams {
    const message = {
      ...baseUpdateRewardSchemeParams,
    } as UpdateRewardSchemeParams;
    message.rewardSchemeId =
      object.rewardSchemeId !== undefined && object.rewardSchemeId !== null
        ? Long.fromString(object.rewardSchemeId)
        : Long.UZERO;
    message.rewardDenom =
      object.rewardDenom !== undefined && object.rewardDenom !== null
        ? String(object.rewardDenom)
        : undefined;
    message.assetDenom =
      object.assetDenom !== undefined && object.assetDenom !== null
        ? String(object.assetDenom)
        : undefined;
    message.rewardType =
      object.rewardType !== undefined && object.rewardType !== null
        ? String(object.rewardType)
        : undefined;
    message.rewardAmountPerSecond =
      object.rewardAmountPerSecond !== undefined &&
      object.rewardAmountPerSecond !== null
        ? String(object.rewardAmountPerSecond)
        : "";
    message.startTime =
      object.startTime !== undefined && object.startTime !== null
        ? fromJsonTimestamp(object.startTime)
        : undefined;
    message.endTime =
      object.endTime !== undefined && object.endTime !== null
        ? fromJsonTimestamp(object.endTime)
        : undefined;
    return message;
  },

  toJSON(message: UpdateRewardSchemeParams): unknown {
    const obj: any = {};
    message.rewardSchemeId !== undefined &&
      (obj.rewardSchemeId = (message.rewardSchemeId || Long.UZERO).toString());
    message.rewardDenom !== undefined &&
      (obj.rewardDenom = message.rewardDenom);
    message.assetDenom !== undefined && (obj.assetDenom = message.assetDenom);
    message.rewardType !== undefined && (obj.rewardType = message.rewardType);
    message.rewardAmountPerSecond !== undefined &&
      (obj.rewardAmountPerSecond = message.rewardAmountPerSecond);
    message.startTime !== undefined &&
      (obj.startTime = message.startTime.toISOString());
    message.endTime !== undefined &&
      (obj.endTime = message.endTime.toISOString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateRewardSchemeParams>
  ): UpdateRewardSchemeParams {
    const message = {
      ...baseUpdateRewardSchemeParams,
    } as UpdateRewardSchemeParams;
    message.rewardSchemeId =
      object.rewardSchemeId !== undefined && object.rewardSchemeId !== null
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

const baseRewardDebt: object = {
  userAddress: "",
  rewardSchemeId: Long.UZERO,
  rewardDebt: "",
};

export const RewardDebt = {
  encode(
    message: RewardDebt,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      Timestamp.encode(
        toTimestamp(message.lastUpdatedAt),
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardDebt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRewardDebt } as RewardDebt;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userAddress = reader.string();
          break;
        case 2:
          message.rewardSchemeId = reader.uint64() as Long;
          break;
        case 3:
          message.rewardDebt = reader.string();
          break;
        case 4:
          message.lastUpdatedAt = fromTimestamp(
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

  fromJSON(object: any): RewardDebt {
    const message = { ...baseRewardDebt } as RewardDebt;
    message.userAddress =
      object.userAddress !== undefined && object.userAddress !== null
        ? String(object.userAddress)
        : "";
    message.rewardSchemeId =
      object.rewardSchemeId !== undefined && object.rewardSchemeId !== null
        ? Long.fromString(object.rewardSchemeId)
        : Long.UZERO;
    message.rewardDebt =
      object.rewardDebt !== undefined && object.rewardDebt !== null
        ? String(object.rewardDebt)
        : "";
    message.lastUpdatedAt =
      object.lastUpdatedAt !== undefined && object.lastUpdatedAt !== null
        ? fromJsonTimestamp(object.lastUpdatedAt)
        : undefined;
    return message;
  },

  toJSON(message: RewardDebt): unknown {
    const obj: any = {};
    message.userAddress !== undefined &&
      (obj.userAddress = message.userAddress);
    message.rewardSchemeId !== undefined &&
      (obj.rewardSchemeId = (message.rewardSchemeId || Long.UZERO).toString());
    message.rewardDebt !== undefined && (obj.rewardDebt = message.rewardDebt);
    message.lastUpdatedAt !== undefined &&
      (obj.lastUpdatedAt = message.lastUpdatedAt.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<RewardDebt>): RewardDebt {
    const message = { ...baseRewardDebt } as RewardDebt;
    message.userAddress = object.userAddress ?? "";
    message.rewardSchemeId =
      object.rewardSchemeId !== undefined && object.rewardSchemeId !== null
        ? Long.fromValue(object.rewardSchemeId)
        : Long.UZERO;
    message.rewardDebt = object.rewardDebt ?? "";
    message.lastUpdatedAt = object.lastUpdatedAt ?? undefined;
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
