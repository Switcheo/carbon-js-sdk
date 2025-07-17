/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Message } from "./message";

export const protobufPackage = "Switcheo.carbon.misc";

export interface Transaction {
  hash: string;
  address: string;
  code: number;
  memo: string;
  gasUsed: Long;
  gasWanted: Long;
  blockHeight: Long;
  blockCreatedAt?: Date;
  messages: Message[];
}

export interface APITransaction {
  hash: string;
  address: string;
  code: number;
  memo: string;
  gasUsed: Long;
  gasWanted: Long;
  blockHeight: Long;
  blockCreatedAt?: Date;
  messages: string;
}

function createBaseTransaction(): Transaction {
  return {
    hash: "",
    address: "",
    code: 0,
    memo: "",
    gasUsed: Long.ZERO,
    gasWanted: Long.ZERO,
    blockHeight: Long.UZERO,
    blockCreatedAt: undefined,
    messages: [],
  };
}

export const Transaction = {
  encode(message: Transaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.code !== 0) {
      writer.uint32(24).uint32(message.code);
    }
    if (message.memo !== "") {
      writer.uint32(34).string(message.memo);
    }
    if (!message.gasUsed.isZero()) {
      writer.uint32(40).int64(message.gasUsed);
    }
    if (!message.gasWanted.isZero()) {
      writer.uint32(48).int64(message.gasWanted);
    }
    if (!message.blockHeight.isZero()) {
      writer.uint32(56).uint64(message.blockHeight);
    }
    if (message.blockCreatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.blockCreatedAt), writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.messages) {
      Message.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Transaction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hash = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.code = reader.uint32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.memo = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.gasUsed = reader.int64() as Long;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.gasWanted = reader.int64() as Long;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.blockHeight = reader.uint64() as Long;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.blockCreatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.messages.push(Message.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Transaction {
    return {
      hash: isSet(object.hash) ? String(object.hash) : "",
      address: isSet(object.address) ? String(object.address) : "",
      code: isSet(object.code) ? Number(object.code) : 0,
      memo: isSet(object.memo) ? String(object.memo) : "",
      gasUsed: isSet(object.gasUsed) ? Long.fromValue(object.gasUsed) : Long.ZERO,
      gasWanted: isSet(object.gasWanted) ? Long.fromValue(object.gasWanted) : Long.ZERO,
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.UZERO,
      blockCreatedAt: isSet(object.blockCreatedAt) ? fromJsonTimestamp(object.blockCreatedAt) : undefined,
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Message.fromJSON(e)) : [],
    };
  },

  toJSON(message: Transaction): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.address !== undefined && (obj.address = message.address);
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.memo !== undefined && (obj.memo = message.memo);
    message.gasUsed !== undefined && (obj.gasUsed = (message.gasUsed || Long.ZERO).toString());
    message.gasWanted !== undefined && (obj.gasWanted = (message.gasWanted || Long.ZERO).toString());
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.UZERO).toString());
    message.blockCreatedAt !== undefined && (obj.blockCreatedAt = message.blockCreatedAt.toISOString());
    if (message.messages) {
      obj.messages = message.messages.map((e) => e ? Message.toJSON(e) : undefined);
    } else {
      obj.messages = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Transaction>): Transaction {
    return Transaction.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Transaction>): Transaction {
    const message = createBaseTransaction();
    message.hash = object.hash ?? "";
    message.address = object.address ?? "";
    message.code = object.code ?? 0;
    message.memo = object.memo ?? "";
    message.gasUsed = (object.gasUsed !== undefined && object.gasUsed !== null)
      ? Long.fromValue(object.gasUsed)
      : Long.ZERO;
    message.gasWanted = (object.gasWanted !== undefined && object.gasWanted !== null)
      ? Long.fromValue(object.gasWanted)
      : Long.ZERO;
    message.blockHeight = (object.blockHeight !== undefined && object.blockHeight !== null)
      ? Long.fromValue(object.blockHeight)
      : Long.UZERO;
    message.blockCreatedAt = object.blockCreatedAt ?? undefined;
    message.messages = object.messages?.map((e) => Message.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAPITransaction(): APITransaction {
  return {
    hash: "",
    address: "",
    code: 0,
    memo: "",
    gasUsed: Long.ZERO,
    gasWanted: Long.ZERO,
    blockHeight: Long.UZERO,
    blockCreatedAt: undefined,
    messages: "",
  };
}

export const APITransaction = {
  encode(message: APITransaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.code !== 0) {
      writer.uint32(24).uint32(message.code);
    }
    if (message.memo !== "") {
      writer.uint32(34).string(message.memo);
    }
    if (!message.gasUsed.isZero()) {
      writer.uint32(40).int64(message.gasUsed);
    }
    if (!message.gasWanted.isZero()) {
      writer.uint32(48).int64(message.gasWanted);
    }
    if (!message.blockHeight.isZero()) {
      writer.uint32(56).uint64(message.blockHeight);
    }
    if (message.blockCreatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.blockCreatedAt), writer.uint32(66).fork()).ldelim();
    }
    if (message.messages !== "") {
      writer.uint32(74).string(message.messages);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APITransaction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPITransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hash = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.code = reader.uint32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.memo = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.gasUsed = reader.int64() as Long;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.gasWanted = reader.int64() as Long;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.blockHeight = reader.uint64() as Long;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.blockCreatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.messages = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APITransaction {
    return {
      hash: isSet(object.hash) ? String(object.hash) : "",
      address: isSet(object.address) ? String(object.address) : "",
      code: isSet(object.code) ? Number(object.code) : 0,
      memo: isSet(object.memo) ? String(object.memo) : "",
      gasUsed: isSet(object.gasUsed) ? Long.fromValue(object.gasUsed) : Long.ZERO,
      gasWanted: isSet(object.gasWanted) ? Long.fromValue(object.gasWanted) : Long.ZERO,
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.UZERO,
      blockCreatedAt: isSet(object.blockCreatedAt) ? fromJsonTimestamp(object.blockCreatedAt) : undefined,
      messages: isSet(object.messages) ? String(object.messages) : "",
    };
  },

  toJSON(message: APITransaction): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.address !== undefined && (obj.address = message.address);
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.memo !== undefined && (obj.memo = message.memo);
    message.gasUsed !== undefined && (obj.gasUsed = (message.gasUsed || Long.ZERO).toString());
    message.gasWanted !== undefined && (obj.gasWanted = (message.gasWanted || Long.ZERO).toString());
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.UZERO).toString());
    message.blockCreatedAt !== undefined && (obj.blockCreatedAt = message.blockCreatedAt.toISOString());
    message.messages !== undefined && (obj.messages = message.messages);
    return obj;
  },

  create(base?: DeepPartial<APITransaction>): APITransaction {
    return APITransaction.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<APITransaction>): APITransaction {
    const message = createBaseAPITransaction();
    message.hash = object.hash ?? "";
    message.address = object.address ?? "";
    message.code = object.code ?? 0;
    message.memo = object.memo ?? "";
    message.gasUsed = (object.gasUsed !== undefined && object.gasUsed !== null)
      ? Long.fromValue(object.gasUsed)
      : Long.ZERO;
    message.gasWanted = (object.gasWanted !== undefined && object.gasWanted !== null)
      ? Long.fromValue(object.gasWanted)
      : Long.ZERO;
    message.blockHeight = (object.blockHeight !== undefined && object.blockHeight !== null)
      ? Long.fromValue(object.blockHeight)
      : Long.UZERO;
    message.blockCreatedAt = object.blockCreatedAt ?? undefined;
    message.messages = object.messages ?? "";
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
