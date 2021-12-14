/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../google/protobuf/timestamp";

export const protobufPackage = "Switcheo.carbon.liquidation";

export interface OutstandingPosition {
  liquidationOrderId: string;
  market: string;
  bankruptcyPrice: string;
  lots: string;
  blockCreatedAt?: Date;
}

export interface OutstandingPositions {
  outstandingPositions: OutstandingPosition[];
}

const baseOutstandingPosition: object = {
  liquidationOrderId: "",
  market: "",
  bankruptcyPrice: "",
  lots: "",
};

export const OutstandingPosition = {
  encode(
    message: OutstandingPosition,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.liquidationOrderId !== "") {
      writer.uint32(10).string(message.liquidationOrderId);
    }
    if (message.market !== "") {
      writer.uint32(18).string(message.market);
    }
    if (message.bankruptcyPrice !== "") {
      writer.uint32(26).string(message.bankruptcyPrice);
    }
    if (message.lots !== "") {
      writer.uint32(34).string(message.lots);
    }
    if (message.blockCreatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.blockCreatedAt),
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OutstandingPosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOutstandingPosition } as OutstandingPosition;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidationOrderId = reader.string();
          break;
        case 2:
          message.market = reader.string();
          break;
        case 3:
          message.bankruptcyPrice = reader.string();
          break;
        case 4:
          message.lots = reader.string();
          break;
        case 5:
          message.blockCreatedAt = fromTimestamp(
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

  fromJSON(object: any): OutstandingPosition {
    const message = { ...baseOutstandingPosition } as OutstandingPosition;
    message.liquidationOrderId =
      object.liquidationOrderId !== undefined &&
      object.liquidationOrderId !== null
        ? String(object.liquidationOrderId)
        : "";
    message.market =
      object.market !== undefined && object.market !== null
        ? String(object.market)
        : "";
    message.bankruptcyPrice =
      object.bankruptcyPrice !== undefined && object.bankruptcyPrice !== null
        ? String(object.bankruptcyPrice)
        : "";
    message.lots =
      object.lots !== undefined && object.lots !== null
        ? String(object.lots)
        : "";
    message.blockCreatedAt =
      object.blockCreatedAt !== undefined && object.blockCreatedAt !== null
        ? fromJsonTimestamp(object.blockCreatedAt)
        : undefined;
    return message;
  },

  toJSON(message: OutstandingPosition): unknown {
    const obj: any = {};
    message.liquidationOrderId !== undefined &&
      (obj.liquidationOrderId = message.liquidationOrderId);
    message.market !== undefined && (obj.market = message.market);
    message.bankruptcyPrice !== undefined &&
      (obj.bankruptcyPrice = message.bankruptcyPrice);
    message.lots !== undefined && (obj.lots = message.lots);
    message.blockCreatedAt !== undefined &&
      (obj.blockCreatedAt = message.blockCreatedAt.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<OutstandingPosition>): OutstandingPosition {
    const message = { ...baseOutstandingPosition } as OutstandingPosition;
    message.liquidationOrderId = object.liquidationOrderId ?? "";
    message.market = object.market ?? "";
    message.bankruptcyPrice = object.bankruptcyPrice ?? "";
    message.lots = object.lots ?? "";
    message.blockCreatedAt = object.blockCreatedAt ?? undefined;
    return message;
  },
};

const baseOutstandingPositions: object = {};

export const OutstandingPositions = {
  encode(
    message: OutstandingPositions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.outstandingPositions) {
      OutstandingPosition.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OutstandingPositions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOutstandingPositions } as OutstandingPositions;
    message.outstandingPositions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.outstandingPositions.push(
            OutstandingPosition.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OutstandingPositions {
    const message = { ...baseOutstandingPositions } as OutstandingPositions;
    message.outstandingPositions = (object.outstandingPositions ?? []).map(
      (e: any) => OutstandingPosition.fromJSON(e)
    );
    return message;
  },

  toJSON(message: OutstandingPositions): unknown {
    const obj: any = {};
    if (message.outstandingPositions) {
      obj.outstandingPositions = message.outstandingPositions.map((e) =>
        e ? OutstandingPosition.toJSON(e) : undefined
      );
    } else {
      obj.outstandingPositions = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<OutstandingPositions>): OutstandingPositions {
    const message = { ...baseOutstandingPositions } as OutstandingPositions;
    message.outstandingPositions = (object.outstandingPositions ?? []).map(
      (e) => OutstandingPosition.fromPartial(e)
    );
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
