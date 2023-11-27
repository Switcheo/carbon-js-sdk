/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "Switcheo.carbon.cdp";

export interface StablecoinInterestInfo {
  lastUpdatedTime?: Date;
  stablecoinInterestRate: string;
}

const baseStablecoinInterestInfo: object = { stablecoinInterestRate: "" };

export const StablecoinInterestInfo = {
  encode(
    message: StablecoinInterestInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lastUpdatedTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastUpdatedTime),
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.stablecoinInterestRate !== "") {
      writer.uint32(18).string(message.stablecoinInterestRate);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StablecoinInterestInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStablecoinInterestInfo } as StablecoinInterestInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastUpdatedTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.stablecoinInterestRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StablecoinInterestInfo {
    const message = { ...baseStablecoinInterestInfo } as StablecoinInterestInfo;
    message.lastUpdatedTime =
      object.lastUpdatedTime !== undefined && object.lastUpdatedTime !== null
        ? fromJsonTimestamp(object.lastUpdatedTime)
        : undefined;
    message.stablecoinInterestRate =
      object.stablecoinInterestRate !== undefined &&
      object.stablecoinInterestRate !== null
        ? String(object.stablecoinInterestRate)
        : "";
    return message;
  },

  toJSON(message: StablecoinInterestInfo): unknown {
    const obj: any = {};
    message.lastUpdatedTime !== undefined &&
      (obj.lastUpdatedTime = message.lastUpdatedTime.toISOString());
    message.stablecoinInterestRate !== undefined &&
      (obj.stablecoinInterestRate = message.stablecoinInterestRate);
    return obj;
  },

  fromPartial(
    object: DeepPartial<StablecoinInterestInfo>
  ): StablecoinInterestInfo {
    const message = { ...baseStablecoinInterestInfo } as StablecoinInterestInfo;
    message.lastUpdatedTime = object.lastUpdatedTime ?? undefined;
    message.stablecoinInterestRate = object.stablecoinInterestRate ?? "";
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
