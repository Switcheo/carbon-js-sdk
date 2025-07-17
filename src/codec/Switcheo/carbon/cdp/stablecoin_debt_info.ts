/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "Switcheo.carbon.cdp";

export interface StablecoinDebtInfo {
  denom: string;
  lastUpdatedTime?: Date;
  totalPrincipal: string;
  cumulativeInterestMultiplier: string;
  totalAccumulatedInterest: string;
}

function createBaseStablecoinDebtInfo(): StablecoinDebtInfo {
  return {
    denom: "",
    lastUpdatedTime: undefined,
    totalPrincipal: "",
    cumulativeInterestMultiplier: "",
    totalAccumulatedInterest: "",
  };
}

export const StablecoinDebtInfo = {
  encode(message: StablecoinDebtInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.lastUpdatedTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastUpdatedTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.totalPrincipal !== "") {
      writer.uint32(26).string(message.totalPrincipal);
    }
    if (message.cumulativeInterestMultiplier !== "") {
      writer.uint32(34).string(message.cumulativeInterestMultiplier);
    }
    if (message.totalAccumulatedInterest !== "") {
      writer.uint32(42).string(message.totalAccumulatedInterest);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StablecoinDebtInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStablecoinDebtInfo();
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

          message.lastUpdatedTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.totalPrincipal = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.cumulativeInterestMultiplier = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.totalAccumulatedInterest = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StablecoinDebtInfo {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      lastUpdatedTime: isSet(object.lastUpdatedTime) ? fromJsonTimestamp(object.lastUpdatedTime) : undefined,
      totalPrincipal: isSet(object.totalPrincipal) ? String(object.totalPrincipal) : "",
      cumulativeInterestMultiplier: isSet(object.cumulativeInterestMultiplier)
        ? String(object.cumulativeInterestMultiplier)
        : "",
      totalAccumulatedInterest: isSet(object.totalAccumulatedInterest) ? String(object.totalAccumulatedInterest) : "",
    };
  },

  toJSON(message: StablecoinDebtInfo): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.lastUpdatedTime !== undefined && (obj.lastUpdatedTime = message.lastUpdatedTime.toISOString());
    message.totalPrincipal !== undefined && (obj.totalPrincipal = message.totalPrincipal);
    message.cumulativeInterestMultiplier !== undefined &&
      (obj.cumulativeInterestMultiplier = message.cumulativeInterestMultiplier);
    message.totalAccumulatedInterest !== undefined && (obj.totalAccumulatedInterest = message.totalAccumulatedInterest);
    return obj;
  },

  create(base?: DeepPartial<StablecoinDebtInfo>): StablecoinDebtInfo {
    return StablecoinDebtInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<StablecoinDebtInfo>): StablecoinDebtInfo {
    const message = createBaseStablecoinDebtInfo();
    message.denom = object.denom ?? "";
    message.lastUpdatedTime = object.lastUpdatedTime ?? undefined;
    message.totalPrincipal = object.totalPrincipal ?? "";
    message.cumulativeInterestMultiplier = object.cumulativeInterestMultiplier ?? "";
    message.totalAccumulatedInterest = object.totalAccumulatedInterest ?? "";
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
