/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { MsgCreateMarket, MsgUpdateMarket } from "../market/tx";

export const protobufPackage = "Switcheo.carbon.market";

export interface CreateMarketProposal {
  title: string;
  description: string;
  market?: MsgCreateMarket;
}

export interface UpdateMarketProposal {
  title: string;
  description: string;
  market?: MsgUpdateMarket;
}

const baseCreateMarketProposal: object = { title: "", description: "" };

export const CreateMarketProposal = {
  encode(
    message: CreateMarketProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.market !== undefined) {
      MsgCreateMarket.encode(message.market, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateMarketProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateMarketProposal } as CreateMarketProposal;
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
          message.market = MsgCreateMarket.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateMarketProposal {
    const message = { ...baseCreateMarketProposal } as CreateMarketProposal;
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
    if (object.market !== undefined && object.market !== null) {
      message.market = MsgCreateMarket.fromJSON(object.market);
    } else {
      message.market = undefined;
    }
    return message;
  },

  toJSON(message: CreateMarketProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.market !== undefined &&
      (obj.market = message.market
        ? MsgCreateMarket.toJSON(message.market)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateMarketProposal>): CreateMarketProposal {
    const message = { ...baseCreateMarketProposal } as CreateMarketProposal;
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
    if (object.market !== undefined && object.market !== null) {
      message.market = MsgCreateMarket.fromPartial(object.market);
    } else {
      message.market = undefined;
    }
    return message;
  },
};

const baseUpdateMarketProposal: object = { title: "", description: "" };

export const UpdateMarketProposal = {
  encode(
    message: UpdateMarketProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.market !== undefined) {
      MsgUpdateMarket.encode(message.market, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateMarketProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateMarketProposal } as UpdateMarketProposal;
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
          message.market = MsgUpdateMarket.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateMarketProposal {
    const message = { ...baseUpdateMarketProposal } as UpdateMarketProposal;
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
    if (object.market !== undefined && object.market !== null) {
      message.market = MsgUpdateMarket.fromJSON(object.market);
    } else {
      message.market = undefined;
    }
    return message;
  },

  toJSON(message: UpdateMarketProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.market !== undefined &&
      (obj.market = message.market
        ? MsgUpdateMarket.toJSON(message.market)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<UpdateMarketProposal>): UpdateMarketProposal {
    const message = { ...baseUpdateMarketProposal } as UpdateMarketProposal;
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
    if (object.market !== undefined && object.market !== null) {
      message.market = MsgUpdateMarket.fromPartial(object.market);
    } else {
      message.market = undefined;
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
