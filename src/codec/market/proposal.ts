/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Market, MarketParams } from "../market/market";

export const protobufPackage = "Switcheo.carbon.market";

export interface CreateMarketProposal {
  title: string;
  description: string;
  msg?: Market;
}

export interface UpdateMarketProposal {
  title: string;
  description: string;
  msg?: MarketParams;
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
    if (message.msg !== undefined) {
      Market.encode(message.msg, writer.uint32(26).fork()).ldelim();
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
          message.msg = Market.decode(reader, reader.uint32());
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
    message.title =
      object.title !== undefined && object.title !== null
        ? String(object.title)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.msg =
      object.msg !== undefined && object.msg !== null
        ? Market.fromJSON(object.msg)
        : undefined;
    return message;
  },

  toJSON(message: CreateMarketProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.msg !== undefined &&
      (obj.msg = message.msg ? Market.toJSON(message.msg) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateMarketProposal>, I>>(
    object: I
  ): CreateMarketProposal {
    const message = { ...baseCreateMarketProposal } as CreateMarketProposal;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.msg =
      object.msg !== undefined && object.msg !== null
        ? Market.fromPartial(object.msg)
        : undefined;
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
    if (message.msg !== undefined) {
      MarketParams.encode(message.msg, writer.uint32(26).fork()).ldelim();
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
          message.msg = MarketParams.decode(reader, reader.uint32());
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
    message.title =
      object.title !== undefined && object.title !== null
        ? String(object.title)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.msg =
      object.msg !== undefined && object.msg !== null
        ? MarketParams.fromJSON(object.msg)
        : undefined;
    return message;
  },

  toJSON(message: UpdateMarketProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.msg !== undefined &&
      (obj.msg = message.msg ? MarketParams.toJSON(message.msg) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateMarketProposal>, I>>(
    object: I
  ): UpdateMarketProposal {
    const message = { ...baseUpdateMarketProposal } as UpdateMarketProposal;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.msg =
      object.msg !== undefined && object.msg !== null
        ? MarketParams.fromPartial(object.msg)
        : undefined;
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

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
