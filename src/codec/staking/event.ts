/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "Switcheo.carbon.staking";

export interface CreateValidator {
  validator: string;
  amount: string;
  sender: string;
}

export interface CompleteUnbonding {
  amount: Coin[];
  validator: string;
  delegator: string;
}

export interface Delegate {
  validator: string;
  amount: string;
  sender: string;
}

const baseCreateValidator: object = { validator: "", amount: "", sender: "" };

export const CreateValidator = {
  encode(
    message: CreateValidator,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateValidator } as CreateValidator;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateValidator {
    const message = { ...baseCreateValidator } as CreateValidator;
    message.validator =
      object.validator !== undefined && object.validator !== null
        ? String(object.validator)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    message.sender =
      object.sender !== undefined && object.sender !== null
        ? String(object.sender)
        : "";
    return message;
  },

  toJSON(message: CreateValidator): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.amount !== undefined && (obj.amount = message.amount);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateValidator>, I>>(
    object: I
  ): CreateValidator {
    const message = { ...baseCreateValidator } as CreateValidator;
    message.validator = object.validator ?? "";
    message.amount = object.amount ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
};

const baseCompleteUnbonding: object = { validator: "", delegator: "" };

export const CompleteUnbonding = {
  encode(
    message: CompleteUnbonding,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    if (message.delegator !== "") {
      writer.uint32(26).string(message.delegator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CompleteUnbonding {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCompleteUnbonding } as CompleteUnbonding;
    message.amount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.validator = reader.string();
          break;
        case 3:
          message.delegator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CompleteUnbonding {
    const message = { ...baseCompleteUnbonding } as CompleteUnbonding;
    message.amount = (object.amount ?? []).map((e: any) => Coin.fromJSON(e));
    message.validator =
      object.validator !== undefined && object.validator !== null
        ? String(object.validator)
        : "";
    message.delegator =
      object.delegator !== undefined && object.delegator !== null
        ? String(object.delegator)
        : "";
    return message;
  },

  toJSON(message: CompleteUnbonding): unknown {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    message.validator !== undefined && (obj.validator = message.validator);
    message.delegator !== undefined && (obj.delegator = message.delegator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompleteUnbonding>, I>>(
    object: I
  ): CompleteUnbonding {
    const message = { ...baseCompleteUnbonding } as CompleteUnbonding;
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    message.validator = object.validator ?? "";
    message.delegator = object.delegator ?? "";
    return message;
  },
};

const baseDelegate: object = { validator: "", amount: "", sender: "" };

export const Delegate = {
  encode(
    message: Delegate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Delegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDelegate } as Delegate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Delegate {
    const message = { ...baseDelegate } as Delegate;
    message.validator =
      object.validator !== undefined && object.validator !== null
        ? String(object.validator)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    message.sender =
      object.sender !== undefined && object.sender !== null
        ? String(object.sender)
        : "";
    return message;
  },

  toJSON(message: Delegate): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.amount !== undefined && (obj.amount = message.amount);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Delegate>, I>>(object: I): Delegate {
    const message = { ...baseDelegate } as Delegate;
    message.validator = object.validator ?? "";
    message.amount = object.amount ?? "";
    message.sender = object.sender ?? "";
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
