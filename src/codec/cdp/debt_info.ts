/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../google/protobuf/timestamp";

export const protobufPackage = "Switcheo.carbon.cdp";

export interface DebtInfo {
  denom: string;
  lastUpdatedTime?: Date;
  totalAccInterest: string;
  totalPrincipal: string;
  interestPerPrincipal: string;
  totalPaidInterest: string;
  utilizationRate: string;
}

const baseDebtInfo: object = {
  denom: "",
  totalAccInterest: "",
  totalPrincipal: "",
  interestPerPrincipal: "",
  totalPaidInterest: "",
  utilizationRate: "",
};

export const DebtInfo = {
  encode(
    message: DebtInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.lastUpdatedTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastUpdatedTime),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.totalAccInterest !== "") {
      writer.uint32(26).string(message.totalAccInterest);
    }
    if (message.totalPrincipal !== "") {
      writer.uint32(34).string(message.totalPrincipal);
    }
    if (message.interestPerPrincipal !== "") {
      writer.uint32(42).string(message.interestPerPrincipal);
    }
    if (message.totalPaidInterest !== "") {
      writer.uint32(50).string(message.totalPaidInterest);
    }
    if (message.utilizationRate !== "") {
      writer.uint32(58).string(message.utilizationRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DebtInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDebtInfo } as DebtInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.lastUpdatedTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.totalAccInterest = reader.string();
          break;
        case 4:
          message.totalPrincipal = reader.string();
          break;
        case 5:
          message.interestPerPrincipal = reader.string();
          break;
        case 6:
          message.totalPaidInterest = reader.string();
          break;
        case 7:
          message.utilizationRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DebtInfo {
    const message = { ...baseDebtInfo } as DebtInfo;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.lastUpdatedTime =
      object.lastUpdatedTime !== undefined && object.lastUpdatedTime !== null
        ? fromJsonTimestamp(object.lastUpdatedTime)
        : undefined;
    message.totalAccInterest =
      object.totalAccInterest !== undefined && object.totalAccInterest !== null
        ? String(object.totalAccInterest)
        : "";
    message.totalPrincipal =
      object.totalPrincipal !== undefined && object.totalPrincipal !== null
        ? String(object.totalPrincipal)
        : "";
    message.interestPerPrincipal =
      object.interestPerPrincipal !== undefined &&
      object.interestPerPrincipal !== null
        ? String(object.interestPerPrincipal)
        : "";
    message.totalPaidInterest =
      object.totalPaidInterest !== undefined &&
      object.totalPaidInterest !== null
        ? String(object.totalPaidInterest)
        : "";
    message.utilizationRate =
      object.utilizationRate !== undefined && object.utilizationRate !== null
        ? String(object.utilizationRate)
        : "";
    return message;
  },

  toJSON(message: DebtInfo): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.lastUpdatedTime !== undefined &&
      (obj.lastUpdatedTime = message.lastUpdatedTime.toISOString());
    message.totalAccInterest !== undefined &&
      (obj.totalAccInterest = message.totalAccInterest);
    message.totalPrincipal !== undefined &&
      (obj.totalPrincipal = message.totalPrincipal);
    message.interestPerPrincipal !== undefined &&
      (obj.interestPerPrincipal = message.interestPerPrincipal);
    message.totalPaidInterest !== undefined &&
      (obj.totalPaidInterest = message.totalPaidInterest);
    message.utilizationRate !== undefined &&
      (obj.utilizationRate = message.utilizationRate);
    return obj;
  },

  fromPartial(object: DeepPartial<DebtInfo>): DebtInfo {
    const message = { ...baseDebtInfo } as DebtInfo;
    message.denom = object.denom ?? "";
    message.lastUpdatedTime = object.lastUpdatedTime ?? undefined;
    message.totalAccInterest = object.totalAccInterest ?? "";
    message.totalPrincipal = object.totalPrincipal ?? "";
    message.interestPerPrincipal = object.interestPerPrincipal ?? "";
    message.totalPaidInterest = object.totalPaidInterest ?? "";
    message.utilizationRate = object.utilizationRate ?? "";
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
