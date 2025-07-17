/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../google/protobuf/timestamp";

export const protobufPackage = "alliance.alliance";

/** Used internally to keep track of redelegations */
export interface QueuedRedelegation {
  entries: Redelegation[];
}

export interface Redelegation {
  /** internal or external user address */
  delegatorAddress: string;
  /** redelegation source validator */
  srcValidatorAddress: string;
  /** redelegation destination validator */
  dstValidatorAddress: string;
  /** amount to redelegate */
  balance?: Coin;
}

/** Used on QueryServer */
export interface RedelegationEntry {
  /** internal or external user address */
  delegatorAddress: string;
  /** redelegation source validator */
  srcValidatorAddress: string;
  /** redelegation destination validator */
  dstValidatorAddress: string;
  /** amount to redelegate */
  balance?: Coin;
  /** completion_time defines the unix time for redelegation completion. */
  completionTime?: Date;
}

function createBaseQueuedRedelegation(): QueuedRedelegation {
  return { entries: [] };
}

export const QueuedRedelegation = {
  encode(message: QueuedRedelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.entries) {
      Redelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueuedRedelegation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueuedRedelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entries.push(Redelegation.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueuedRedelegation {
    return { entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => Redelegation.fromJSON(e)) : [] };
  },

  toJSON(message: QueuedRedelegation): unknown {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map((e) => e ? Redelegation.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueuedRedelegation>): QueuedRedelegation {
    return QueuedRedelegation.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueuedRedelegation>): QueuedRedelegation {
    const message = createBaseQueuedRedelegation();
    message.entries = object.entries?.map((e) => Redelegation.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRedelegation(): Redelegation {
  return { delegatorAddress: "", srcValidatorAddress: "", dstValidatorAddress: "", balance: undefined };
}

export const Redelegation = {
  encode(message: Redelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.srcValidatorAddress !== "") {
      writer.uint32(18).string(message.srcValidatorAddress);
    }
    if (message.dstValidatorAddress !== "") {
      writer.uint32(26).string(message.dstValidatorAddress);
    }
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Redelegation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegatorAddress = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.srcValidatorAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.dstValidatorAddress = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.balance = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Redelegation {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      srcValidatorAddress: isSet(object.srcValidatorAddress) ? String(object.srcValidatorAddress) : "",
      dstValidatorAddress: isSet(object.dstValidatorAddress) ? String(object.dstValidatorAddress) : "",
      balance: isSet(object.balance) ? Coin.fromJSON(object.balance) : undefined,
    };
  },

  toJSON(message: Redelegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.srcValidatorAddress !== undefined && (obj.srcValidatorAddress = message.srcValidatorAddress);
    message.dstValidatorAddress !== undefined && (obj.dstValidatorAddress = message.dstValidatorAddress);
    message.balance !== undefined && (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
    return obj;
  },

  create(base?: DeepPartial<Redelegation>): Redelegation {
    return Redelegation.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Redelegation>): Redelegation {
    const message = createBaseRedelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.srcValidatorAddress = object.srcValidatorAddress ?? "";
    message.dstValidatorAddress = object.dstValidatorAddress ?? "";
    message.balance = (object.balance !== undefined && object.balance !== null)
      ? Coin.fromPartial(object.balance)
      : undefined;
    return message;
  },
};

function createBaseRedelegationEntry(): RedelegationEntry {
  return {
    delegatorAddress: "",
    srcValidatorAddress: "",
    dstValidatorAddress: "",
    balance: undefined,
    completionTime: undefined,
  };
}

export const RedelegationEntry = {
  encode(message: RedelegationEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.srcValidatorAddress !== "") {
      writer.uint32(18).string(message.srcValidatorAddress);
    }
    if (message.dstValidatorAddress !== "") {
      writer.uint32(26).string(message.dstValidatorAddress);
    }
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(34).fork()).ldelim();
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RedelegationEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegatorAddress = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.srcValidatorAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.dstValidatorAddress = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.balance = Coin.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RedelegationEntry {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      srcValidatorAddress: isSet(object.srcValidatorAddress) ? String(object.srcValidatorAddress) : "",
      dstValidatorAddress: isSet(object.dstValidatorAddress) ? String(object.dstValidatorAddress) : "",
      balance: isSet(object.balance) ? Coin.fromJSON(object.balance) : undefined,
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined,
    };
  },

  toJSON(message: RedelegationEntry): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.srcValidatorAddress !== undefined && (obj.srcValidatorAddress = message.srcValidatorAddress);
    message.dstValidatorAddress !== undefined && (obj.dstValidatorAddress = message.dstValidatorAddress);
    message.balance !== undefined && (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
    message.completionTime !== undefined && (obj.completionTime = message.completionTime.toISOString());
    return obj;
  },

  create(base?: DeepPartial<RedelegationEntry>): RedelegationEntry {
    return RedelegationEntry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RedelegationEntry>): RedelegationEntry {
    const message = createBaseRedelegationEntry();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.srcValidatorAddress = object.srcValidatorAddress ?? "";
    message.dstValidatorAddress = object.dstValidatorAddress ?? "";
    message.balance = (object.balance !== undefined && object.balance !== null)
      ? Coin.fromPartial(object.balance)
      : undefined;
    message.completionTime = object.completionTime ?? undefined;
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
