/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { MessageType } from "./message_type";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { UInt64Value, StringValue } from "../../../google/protobuf/wrappers";

export const protobufPackage = "Switcheo.carbon.misc";

export interface Message {
  hash: string;
  message: string;
  messageType?: MessageType;
  blockCreatedAt?: Date;
  msgExecIndex?: Long;
  granter?: string;
}

const baseMessage: object = { hash: "", message: "" };

export const Message = {
  encode(
    message: Message,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.messageType !== undefined) {
      MessageType.encode(
        message.messageType,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.blockCreatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.blockCreatedAt),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.msgExecIndex !== undefined) {
      UInt64Value.encode(
        { value: message.msgExecIndex! },
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.granter !== undefined) {
      StringValue.encode(
        { value: message.granter! },
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMessage } as Message;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.message = reader.string();
          break;
        case 3:
          message.messageType = MessageType.decode(reader, reader.uint32());
          break;
        case 4:
          message.blockCreatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.msgExecIndex = UInt64Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 6:
          message.granter = StringValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Message {
    const message = { ...baseMessage } as Message;
    message.hash =
      object.hash !== undefined && object.hash !== null
        ? String(object.hash)
        : "";
    message.message =
      object.message !== undefined && object.message !== null
        ? String(object.message)
        : "";
    message.messageType =
      object.messageType !== undefined && object.messageType !== null
        ? MessageType.fromJSON(object.messageType)
        : undefined;
    message.blockCreatedAt =
      object.blockCreatedAt !== undefined && object.blockCreatedAt !== null
        ? fromJsonTimestamp(object.blockCreatedAt)
        : undefined;
    message.msgExecIndex =
      object.msgExecIndex !== undefined && object.msgExecIndex !== null
        ? Long.fromValue(object.msgExecIndex)
        : undefined;
    message.granter =
      object.granter !== undefined && object.granter !== null
        ? String(object.granter)
        : undefined;
    return message;
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.message !== undefined && (obj.message = message.message);
    message.messageType !== undefined &&
      (obj.messageType = message.messageType
        ? MessageType.toJSON(message.messageType)
        : undefined);
    message.blockCreatedAt !== undefined &&
      (obj.blockCreatedAt = message.blockCreatedAt.toISOString());
    message.msgExecIndex !== undefined &&
      (obj.msgExecIndex = message.msgExecIndex);
    message.granter !== undefined && (obj.granter = message.granter);
    return obj;
  },

  fromPartial(object: DeepPartial<Message>): Message {
    const message = { ...baseMessage } as Message;
    message.hash = object.hash ?? "";
    message.message = object.message ?? "";
    message.messageType =
      object.messageType !== undefined && object.messageType !== null
        ? MessageType.fromPartial(object.messageType)
        : undefined;
    message.blockCreatedAt = object.blockCreatedAt ?? undefined;
    message.msgExecIndex =
      object.msgExecIndex !== undefined && object.msgExecIndex !== null
        ? Long.fromValue(object.msgExecIndex)
        : undefined;
    message.granter = object.granter ?? undefined;
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
