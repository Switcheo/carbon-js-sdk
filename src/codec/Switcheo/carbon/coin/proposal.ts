/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CreateTokenParams } from "./tx";

export const protobufPackage = "Switcheo.carbon.coin";

export interface CreateTokenProposal {
  title: string;
  description: string;
  msg?: CreateTokenParams;
}

function createBaseCreateTokenProposal(): CreateTokenProposal {
  return { title: "", description: "", msg: undefined };
}

export const CreateTokenProposal = {
  encode(message: CreateTokenProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.msg !== undefined) {
      CreateTokenParams.encode(message.msg, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTokenProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTokenProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.msg = CreateTokenParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateTokenProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      msg: isSet(object.msg) ? CreateTokenParams.fromJSON(object.msg) : undefined,
    };
  },

  toJSON(message: CreateTokenProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.msg !== undefined && (obj.msg = message.msg ? CreateTokenParams.toJSON(message.msg) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CreateTokenProposal>): CreateTokenProposal {
    return CreateTokenProposal.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateTokenProposal>): CreateTokenProposal {
    const message = createBaseCreateTokenProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.msg = (object.msg !== undefined && object.msg !== null)
      ? CreateTokenParams.fromPartial(object.msg)
      : undefined;
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
