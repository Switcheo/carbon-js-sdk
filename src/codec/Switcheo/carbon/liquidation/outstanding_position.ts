/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "Switcheo.carbon.liquidation";

export interface OutstandingPosition {
  liquidationOrderId: string;
  marketId: string;
  bankruptcyPrice: string;
  lots: string;
  blockCreatedAt?: Date;
  tickSize: string;
}

export interface OutstandingPositions {
  outstandingPositions: OutstandingPosition[];
}

function createBaseOutstandingPosition(): OutstandingPosition {
  return {
    liquidationOrderId: "",
    marketId: "",
    bankruptcyPrice: "",
    lots: "",
    blockCreatedAt: undefined,
    tickSize: "",
  };
}

export const OutstandingPosition = {
  encode(message: OutstandingPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.liquidationOrderId !== "") {
      writer.uint32(10).string(message.liquidationOrderId);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.bankruptcyPrice !== "") {
      writer.uint32(26).string(message.bankruptcyPrice);
    }
    if (message.lots !== "") {
      writer.uint32(34).string(message.lots);
    }
    if (message.blockCreatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.blockCreatedAt), writer.uint32(42).fork()).ldelim();
    }
    if (message.tickSize !== "") {
      writer.uint32(50).string(message.tickSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OutstandingPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutstandingPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.liquidationOrderId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.marketId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.bankruptcyPrice = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.lots = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.blockCreatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.tickSize = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OutstandingPosition {
    return {
      liquidationOrderId: isSet(object.liquidationOrderId) ? String(object.liquidationOrderId) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      bankruptcyPrice: isSet(object.bankruptcyPrice) ? String(object.bankruptcyPrice) : "",
      lots: isSet(object.lots) ? String(object.lots) : "",
      blockCreatedAt: isSet(object.blockCreatedAt) ? fromJsonTimestamp(object.blockCreatedAt) : undefined,
      tickSize: isSet(object.tickSize) ? String(object.tickSize) : "",
    };
  },

  toJSON(message: OutstandingPosition): unknown {
    const obj: any = {};
    message.liquidationOrderId !== undefined && (obj.liquidationOrderId = message.liquidationOrderId);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.bankruptcyPrice !== undefined && (obj.bankruptcyPrice = message.bankruptcyPrice);
    message.lots !== undefined && (obj.lots = message.lots);
    message.blockCreatedAt !== undefined && (obj.blockCreatedAt = message.blockCreatedAt.toISOString());
    message.tickSize !== undefined && (obj.tickSize = message.tickSize);
    return obj;
  },

  create(base?: DeepPartial<OutstandingPosition>): OutstandingPosition {
    return OutstandingPosition.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<OutstandingPosition>): OutstandingPosition {
    const message = createBaseOutstandingPosition();
    message.liquidationOrderId = object.liquidationOrderId ?? "";
    message.marketId = object.marketId ?? "";
    message.bankruptcyPrice = object.bankruptcyPrice ?? "";
    message.lots = object.lots ?? "";
    message.blockCreatedAt = object.blockCreatedAt ?? undefined;
    message.tickSize = object.tickSize ?? "";
    return message;
  },
};

function createBaseOutstandingPositions(): OutstandingPositions {
  return { outstandingPositions: [] };
}

export const OutstandingPositions = {
  encode(message: OutstandingPositions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.outstandingPositions) {
      OutstandingPosition.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OutstandingPositions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutstandingPositions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.outstandingPositions.push(OutstandingPosition.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OutstandingPositions {
    return {
      outstandingPositions: Array.isArray(object?.outstandingPositions)
        ? object.outstandingPositions.map((e: any) => OutstandingPosition.fromJSON(e))
        : [],
    };
  },

  toJSON(message: OutstandingPositions): unknown {
    const obj: any = {};
    if (message.outstandingPositions) {
      obj.outstandingPositions = message.outstandingPositions.map((e) => e ? OutstandingPosition.toJSON(e) : undefined);
    } else {
      obj.outstandingPositions = [];
    }
    return obj;
  },

  create(base?: DeepPartial<OutstandingPositions>): OutstandingPositions {
    return OutstandingPositions.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<OutstandingPositions>): OutstandingPositions {
    const message = createBaseOutstandingPositions();
    message.outstandingPositions = object.outstandingPositions?.map((e) => OutstandingPosition.fromPartial(e)) || [];
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
