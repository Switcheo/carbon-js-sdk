/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { MessageType } from "../misc/message_type";

export const protobufPackage = "Switcheo.carbon.misc";

export interface Message {
  hash: string;
  message: string;
  messageType?: MessageType;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Message {
    const message = { ...baseMessage } as Message;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = "";
    }
    if (object.messageType !== undefined && object.messageType !== null) {
      message.messageType = MessageType.fromJSON(object.messageType);
    } else {
      message.messageType = undefined;
    }
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
    return obj;
  },

  fromPartial(object: DeepPartial<Message>): Message {
    const message = { ...baseMessage } as Message;
    message.hash = object.hash ?? "";
    message.message = object.message ?? "";
    if (object.messageType !== undefined && object.messageType !== null) {
      message.messageType = MessageType.fromPartial(object.messageType);
    } else {
      message.messageType = undefined;
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
