/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { MsgCreateToken } from "../coin/tx";

export const protobufPackage = "Switcheo.tradehubcosmos.coin";

export interface CreateTokenProposal {
  title: string;
  description: string;
  token?: MsgCreateToken;
}

const baseCreateTokenProposal: object = { title: "", description: "" };

export const CreateTokenProposal = {
  encode(
    message: CreateTokenProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.token !== undefined) {
      MsgCreateToken.encode(message.token, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTokenProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateTokenProposal } as CreateTokenProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.token = MsgCreateToken.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateTokenProposal {
    const message = { ...baseCreateTokenProposal } as CreateTokenProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = MsgCreateToken.fromJSON(object.token);
    } else {
      message.token = undefined;
    }
    return message;
  },

  toJSON(message: CreateTokenProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.token !== undefined &&
      (obj.token = message.token
        ? MsgCreateToken.toJSON(message.token)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateTokenProposal>): CreateTokenProposal {
    const message = { ...baseCreateTokenProposal } as CreateTokenProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = MsgCreateToken.fromPartial(object.token);
    } else {
      message.token = undefined;
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
