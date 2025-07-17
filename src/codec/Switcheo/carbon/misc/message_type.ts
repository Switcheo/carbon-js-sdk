/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.misc";

export interface MessageType {
  messageType: string;
}

function createBaseMessageType(): MessageType {
  return { messageType: "" };
}

export const MessageType = {
  encode(message: MessageType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageType !== "") {
      writer.uint32(10).string(message.messageType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.messageType = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageType {
    return { messageType: isSet(object.messageType) ? String(object.messageType) : "" };
  },

  toJSON(message: MessageType): unknown {
    const obj: any = {};
    message.messageType !== undefined && (obj.messageType = message.messageType);
    return obj;
  },

  create(base?: DeepPartial<MessageType>): MessageType {
    return MessageType.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MessageType>): MessageType {
    const message = createBaseMessageType();
    message.messageType = object.messageType ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
