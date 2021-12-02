/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "Switcheo.carbon.bank";

export interface Transfer {
  recipient: string;
  sender: string;
  amount: Coin[];
}

const baseTransfer: object = { recipient: "", sender: "" };

export const Transfer = {
  encode(
    message: Transfer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.recipient !== "") {
      writer.uint32(10).string(message.recipient);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Transfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTransfer } as Transfer;
    message.amount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recipient = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Transfer {
    const message = { ...baseTransfer } as Transfer;
    message.recipient =
      object.recipient !== undefined && object.recipient !== null
        ? String(object.recipient)
        : "";
    message.sender =
      object.sender !== undefined && object.sender !== null
        ? String(object.sender)
        : "";
    message.amount = (object.amount ?? []).map((e: any) => Coin.fromJSON(e));
    return message;
  },

  toJSON(message: Transfer): unknown {
    const obj: any = {};
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.sender !== undefined && (obj.sender = message.sender);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Transfer>, I>>(object: I): Transfer {
    const message = { ...baseTransfer } as Transfer;
    message.recipient = object.recipient ?? "";
    message.sender = object.sender ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
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
