/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { StringValue, UInt64Value } from "../../../google/protobuf/wrappers";
import { MessageType } from "./message_type";

export const protobufPackage = "Switcheo.carbon.misc";

export interface Message {
  hash: string;
  message: string;
  messageType?: MessageType;
  blockCreatedAt?: Date;
  msgExecIndex?: Long;
  granter?: string;
}

function createBaseMessage(): Message {
  return {
    hash: "",
    message: "",
    messageType: undefined,
    blockCreatedAt: undefined,
    msgExecIndex: undefined,
    granter: undefined,
  };
}

export const Message = {
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.messageType !== undefined) {
      MessageType.encode(message.messageType, writer.uint32(26).fork()).ldelim();
    }
    if (message.blockCreatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.blockCreatedAt), writer.uint32(34).fork()).ldelim();
    }
    if (message.msgExecIndex !== undefined) {
      UInt64Value.encode({ value: message.msgExecIndex! }, writer.uint32(42).fork()).ldelim();
    }
    if (message.granter !== undefined) {
      StringValue.encode({ value: message.granter! }, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();
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

          message.message = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.messageType = MessageType.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.blockCreatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.msgExecIndex = UInt64Value.decode(reader, reader.uint32()).value;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.granter = StringValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Message {
    return {
      hash: isSet(object.hash) ? String(object.hash) : "",
      message: isSet(object.message) ? String(object.message) : "",
      messageType: isSet(object.messageType) ? MessageType.fromJSON(object.messageType) : undefined,
      blockCreatedAt: isSet(object.blockCreatedAt) ? fromJsonTimestamp(object.blockCreatedAt) : undefined,
      msgExecIndex: isSet(object.msgExecIndex) ? Long.fromValue(object.msgExecIndex) : undefined,
      granter: isSet(object.granter) ? String(object.granter) : undefined,
    };
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.message !== undefined && (obj.message = message.message);
    message.messageType !== undefined &&
      (obj.messageType = message.messageType ? MessageType.toJSON(message.messageType) : undefined);
    message.blockCreatedAt !== undefined && (obj.blockCreatedAt = message.blockCreatedAt.toISOString());
    message.msgExecIndex !== undefined && (obj.msgExecIndex = message.msgExecIndex);
    message.granter !== undefined && (obj.granter = message.granter);
    return obj;
  },

  create(base?: DeepPartial<Message>): Message {
    return Message.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Message>): Message {
    const message = createBaseMessage();
    message.hash = object.hash ?? "";
    message.message = object.message ?? "";
    message.messageType = (object.messageType !== undefined && object.messageType !== null)
      ? MessageType.fromPartial(object.messageType)
      : undefined;
    message.blockCreatedAt = object.blockCreatedAt ?? undefined;
    message.msgExecIndex = (object.msgExecIndex !== undefined && object.msgExecIndex !== null)
      ? Long.fromValue(object.msgExecIndex)
      : undefined;
    message.granter = object.granter ?? undefined;
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
