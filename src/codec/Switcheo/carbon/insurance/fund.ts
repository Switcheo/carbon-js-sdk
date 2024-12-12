/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "Switcheo.carbon.insurance";

export interface FundByMarket {
  amount: string;
  key: Uint8Array;
}

export interface Fund {
  amount: string;
}

/**
 * fund utilization is the amount of insurance fund used by a market within a
 * given interval
 */
export interface FundUtilization {
  marketId: string;
  /** start time of the current interval */
  intervalStartTime?: Date;
  /** amount of insurance fund used within the interval */
  currentUtilization?: Coin;
}

const baseFundByMarket: object = { amount: "" };

export const FundByMarket = {
  encode(
    message: FundByMarket,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FundByMarket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFundByMarket } as FundByMarket;
    message.key = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        case 2:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FundByMarket {
    const message = { ...baseFundByMarket } as FundByMarket;
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    message.key =
      object.key !== undefined && object.key !== null
        ? bytesFromBase64(object.key)
        : new Uint8Array();
    return message;
  },

  toJSON(message: FundByMarket): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    message.key !== undefined &&
      (obj.key = base64FromBytes(
        message.key !== undefined ? message.key : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<FundByMarket>): FundByMarket {
    const message = { ...baseFundByMarket } as FundByMarket;
    message.amount = object.amount ?? "";
    message.key = object.key ?? new Uint8Array();
    return message;
  },
};

const baseFund: object = { amount: "" };

export const Fund = {
  encode(message: Fund, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Fund {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFund } as Fund;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Fund {
    const message = { ...baseFund } as Fund;
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    return message;
  },

  toJSON(message: Fund): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<Fund>): Fund {
    const message = { ...baseFund } as Fund;
    message.amount = object.amount ?? "";
    return message;
  },
};

const baseFundUtilization: object = { marketId: "" };

export const FundUtilization = {
  encode(
    message: FundUtilization,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.intervalStartTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.intervalStartTime),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.currentUtilization !== undefined) {
      Coin.encode(
        message.currentUtilization,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FundUtilization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFundUtilization } as FundUtilization;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.intervalStartTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.currentUtilization = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FundUtilization {
    const message = { ...baseFundUtilization } as FundUtilization;
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.intervalStartTime =
      object.intervalStartTime !== undefined &&
      object.intervalStartTime !== null
        ? fromJsonTimestamp(object.intervalStartTime)
        : undefined;
    message.currentUtilization =
      object.currentUtilization !== undefined &&
      object.currentUtilization !== null
        ? Coin.fromJSON(object.currentUtilization)
        : undefined;
    return message;
  },

  toJSON(message: FundUtilization): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.intervalStartTime !== undefined &&
      (obj.intervalStartTime = message.intervalStartTime.toISOString());
    message.currentUtilization !== undefined &&
      (obj.currentUtilization = message.currentUtilization
        ? Coin.toJSON(message.currentUtilization)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<FundUtilization>): FundUtilization {
    const message = { ...baseFundUtilization } as FundUtilization;
    message.marketId = object.marketId ?? "";
    message.intervalStartTime = object.intervalStartTime ?? undefined;
    message.currentUtilization =
      object.currentUtilization !== undefined &&
      object.currentUtilization !== null
        ? Coin.fromPartial(object.currentUtilization)
        : undefined;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

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
