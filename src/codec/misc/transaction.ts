/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../google/protobuf/timestamp";
import { Message } from "../misc/message";

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

const baseTransaction: object = {
  hash: "",
  address: "",
  code: 0,
  memo: "",
  gasUsed: Long.ZERO,
  gasWanted: Long.ZERO,
  blockHeight: Long.UZERO,
};

export const Transaction = {
  encode(
    message: Transaction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      Timestamp.encode(
        toTimestamp(message.blockCreatedAt),
        writer.uint32(66).fork()
      ).ldelim();
    }
    for (const v of message.messages) {
      Message.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Transaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTransaction } as Transaction;
    message.messages = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.code = reader.uint32();
          break;
        case 4:
          message.memo = reader.string();
          break;
        case 5:
          message.gasUsed = reader.int64() as Long;
          break;
        case 6:
          message.gasWanted = reader.int64() as Long;
          break;
        case 7:
          message.blockHeight = reader.uint64() as Long;
          break;
        case 8:
          message.blockCreatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.messages.push(Message.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Transaction {
    const message = { ...baseTransaction } as Transaction;
    message.messages = [];
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = Number(object.code);
    } else {
      message.code = 0;
    }
    if (object.memo !== undefined && object.memo !== null) {
      message.memo = String(object.memo);
    } else {
      message.memo = "";
    }
    if (object.gasUsed !== undefined && object.gasUsed !== null) {
      message.gasUsed = Long.fromString(object.gasUsed);
    } else {
      message.gasUsed = Long.ZERO;
    }
    if (object.gasWanted !== undefined && object.gasWanted !== null) {
      message.gasWanted = Long.fromString(object.gasWanted);
    } else {
      message.gasWanted = Long.ZERO;
    }
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = Long.fromString(object.blockHeight);
    } else {
      message.blockHeight = Long.UZERO;
    }
    if (object.blockCreatedAt !== undefined && object.blockCreatedAt !== null) {
      message.blockCreatedAt = fromJsonTimestamp(object.blockCreatedAt);
    } else {
      message.blockCreatedAt = undefined;
    }
    if (object.messages !== undefined && object.messages !== null) {
      for (const e of object.messages) {
        message.messages.push(Message.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Transaction): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.address !== undefined && (obj.address = message.address);
    message.code !== undefined && (obj.code = message.code);
    message.memo !== undefined && (obj.memo = message.memo);
    message.gasUsed !== undefined &&
      (obj.gasUsed = (message.gasUsed || Long.ZERO).toString());
    message.gasWanted !== undefined &&
      (obj.gasWanted = (message.gasWanted || Long.ZERO).toString());
    message.blockHeight !== undefined &&
      (obj.blockHeight = (message.blockHeight || Long.UZERO).toString());
    message.blockCreatedAt !== undefined &&
      (obj.blockCreatedAt = message.blockCreatedAt.toISOString());
    if (message.messages) {
      obj.messages = message.messages.map((e) =>
        e ? Message.toJSON(e) : undefined
      );
    } else {
      obj.messages = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Transaction>): Transaction {
    const message = { ...baseTransaction } as Transaction;
    message.hash = object.hash ?? "";
    message.address = object.address ?? "";
    message.code = object.code ?? 0;
    message.memo = object.memo ?? "";
    if (object.gasUsed !== undefined && object.gasUsed !== null) {
      message.gasUsed = object.gasUsed as Long;
    } else {
      message.gasUsed = Long.ZERO;
    }
    if (object.gasWanted !== undefined && object.gasWanted !== null) {
      message.gasWanted = object.gasWanted as Long;
    } else {
      message.gasWanted = Long.ZERO;
    }
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = object.blockHeight as Long;
    } else {
      message.blockHeight = Long.UZERO;
    }
    message.blockCreatedAt = object.blockCreatedAt ?? undefined;
    message.messages = [];
    if (object.messages !== undefined && object.messages !== null) {
      for (const e of object.messages) {
        message.messages.push(Message.fromPartial(e));
      }
    }
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
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
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
