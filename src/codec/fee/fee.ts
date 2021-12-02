/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.fee";

export interface MsgFee {
  msgType: string;
  fee: string;
}

const baseMsgFee: object = { msgType: "", fee: "" };

export const MsgFee = {
  encode(
    message: MsgFee,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.msgType !== "") {
      writer.uint32(10).string(message.msgType);
    }
    if (message.fee !== "") {
      writer.uint32(18).string(message.fee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgFee } as MsgFee;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgType = reader.string();
          break;
        case 2:
          message.fee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgFee {
    const message = { ...baseMsgFee } as MsgFee;
    message.msgType =
      object.msgType !== undefined && object.msgType !== null
        ? String(object.msgType)
        : "";
    message.fee =
      object.fee !== undefined && object.fee !== null ? String(object.fee) : "";
    return message;
  },

  toJSON(message: MsgFee): unknown {
    const obj: any = {};
    message.msgType !== undefined && (obj.msgType = message.msgType);
    message.fee !== undefined && (obj.fee = message.fee);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFee>, I>>(object: I): MsgFee {
    const message = { ...baseMsgFee } as MsgFee;
    message.msgType = object.msgType ?? "";
    message.fee = object.fee ?? "";
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
