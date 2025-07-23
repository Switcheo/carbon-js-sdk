/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "Switcheo.carbon.inflation";

/**
 * MintData represents the parameters by the inflation module.
 * TODO: CLEAN UP IN SEPARATE PR
 */
export interface MintData {
  /** TODO: deprecated, set to reserved after migration */
  legacyFirstBlockTime: Long;
  /** TODO: deprecated, set to reserved after migration */
  legacyPrevBlockTime: Long;
  currentSupply: string;
  inflationRate: string;
  firstBlockTime?: Date;
  prevBlockTime?: Date;
}

function createBaseMintData(): MintData {
  return {
    legacyFirstBlockTime: Long.ZERO,
    legacyPrevBlockTime: Long.ZERO,
    currentSupply: "",
    inflationRate: "",
    firstBlockTime: undefined,
    prevBlockTime: undefined,
  };
}

export const MintData = {
  encode(message: MintData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.legacyFirstBlockTime.isZero()) {
      writer.uint32(8).int64(message.legacyFirstBlockTime);
    }
    if (!message.legacyPrevBlockTime.isZero()) {
      writer.uint32(16).int64(message.legacyPrevBlockTime);
    }
    if (message.currentSupply !== "") {
      writer.uint32(26).string(message.currentSupply);
    }
    if (message.inflationRate !== "") {
      writer.uint32(34).string(message.inflationRate);
    }
    if (message.firstBlockTime !== undefined) {
      Timestamp.encode(toTimestamp(message.firstBlockTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.prevBlockTime !== undefined) {
      Timestamp.encode(toTimestamp(message.prevBlockTime), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MintData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMintData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.legacyFirstBlockTime = reader.int64() as Long;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.legacyPrevBlockTime = reader.int64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.currentSupply = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.inflationRate = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.firstBlockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.prevBlockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MintData {
    return {
      legacyFirstBlockTime: isSet(object.legacyFirstBlockTime)
        ? Long.fromValue(object.legacyFirstBlockTime)
        : Long.ZERO,
      legacyPrevBlockTime: isSet(object.legacyPrevBlockTime) ? Long.fromValue(object.legacyPrevBlockTime) : Long.ZERO,
      currentSupply: isSet(object.currentSupply) ? String(object.currentSupply) : "",
      inflationRate: isSet(object.inflationRate) ? String(object.inflationRate) : "",
      firstBlockTime: isSet(object.firstBlockTime) ? fromJsonTimestamp(object.firstBlockTime) : undefined,
      prevBlockTime: isSet(object.prevBlockTime) ? fromJsonTimestamp(object.prevBlockTime) : undefined,
    };
  },

  toJSON(message: MintData): unknown {
    const obj: any = {};
    message.legacyFirstBlockTime !== undefined &&
      (obj.legacyFirstBlockTime = (message.legacyFirstBlockTime || Long.ZERO).toString());
    message.legacyPrevBlockTime !== undefined &&
      (obj.legacyPrevBlockTime = (message.legacyPrevBlockTime || Long.ZERO).toString());
    message.currentSupply !== undefined && (obj.currentSupply = message.currentSupply);
    message.inflationRate !== undefined && (obj.inflationRate = message.inflationRate);
    message.firstBlockTime !== undefined && (obj.firstBlockTime = message.firstBlockTime.toISOString());
    message.prevBlockTime !== undefined && (obj.prevBlockTime = message.prevBlockTime.toISOString());
    return obj;
  },

  create(base?: DeepPartial<MintData>): MintData {
    return MintData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MintData>): MintData {
    const message = createBaseMintData();
    message.legacyFirstBlockTime = (object.legacyFirstBlockTime !== undefined && object.legacyFirstBlockTime !== null)
      ? Long.fromValue(object.legacyFirstBlockTime)
      : Long.ZERO;
    message.legacyPrevBlockTime = (object.legacyPrevBlockTime !== undefined && object.legacyPrevBlockTime !== null)
      ? Long.fromValue(object.legacyPrevBlockTime)
      : Long.ZERO;
    message.currentSupply = object.currentSupply ?? "";
    message.inflationRate = object.inflationRate ?? "";
    message.firstBlockTime = object.firstBlockTime ?? undefined;
    message.prevBlockTime = object.prevBlockTime ?? undefined;
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
