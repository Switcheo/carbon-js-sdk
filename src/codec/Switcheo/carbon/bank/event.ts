/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "Switcheo.carbon.bank";

export interface CoinSpent {
  spender: string;
  amount: Coin[];
}

export interface CoinReceived {
  receiver: string;
  amount: Coin[];
}

export interface CoinSent {
  sender: string;
  receiver: string;
  amount: Coin[];
}

export interface CoinMint {
  minter: string;
  amount: Coin[];
}

export interface CoinBurn {
  burner: string;
  amount: Coin[];
}

const baseCoinSpent: object = { spender: "" };

export const CoinSpent = {
  encode(
    message: CoinSpent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.spender !== "") {
      writer.uint32(10).string(message.spender);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CoinSpent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCoinSpent } as CoinSpent;
    message.amount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spender = reader.string();
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CoinSpent {
    const message = { ...baseCoinSpent } as CoinSpent;
    message.spender =
      object.spender !== undefined && object.spender !== null
        ? String(object.spender)
        : "";
    message.amount = (object.amount ?? []).map((e: any) => Coin.fromJSON(e));
    return message;
  },

  toJSON(message: CoinSpent): unknown {
    const obj: any = {};
    message.spender !== undefined && (obj.spender = message.spender);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<CoinSpent>): CoinSpent {
    const message = { ...baseCoinSpent } as CoinSpent;
    message.spender = object.spender ?? "";
    message.amount = (object.amount ?? []).map((e) => Coin.fromPartial(e));
    return message;
  },
};

const baseCoinReceived: object = { receiver: "" };

export const CoinReceived = {
  encode(
    message: CoinReceived,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.receiver !== "") {
      writer.uint32(10).string(message.receiver);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CoinReceived {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCoinReceived } as CoinReceived;
    message.amount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.receiver = reader.string();
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CoinReceived {
    const message = { ...baseCoinReceived } as CoinReceived;
    message.receiver =
      object.receiver !== undefined && object.receiver !== null
        ? String(object.receiver)
        : "";
    message.amount = (object.amount ?? []).map((e: any) => Coin.fromJSON(e));
    return message;
  },

  toJSON(message: CoinReceived): unknown {
    const obj: any = {};
    message.receiver !== undefined && (obj.receiver = message.receiver);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<CoinReceived>): CoinReceived {
    const message = { ...baseCoinReceived } as CoinReceived;
    message.receiver = object.receiver ?? "";
    message.amount = (object.amount ?? []).map((e) => Coin.fromPartial(e));
    return message;
  },
};

const baseCoinSent: object = { sender: "", receiver: "" };

export const CoinSent = {
  encode(
    message: CoinSent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CoinSent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCoinSent } as CoinSent;
    message.amount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
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

  fromJSON(object: any): CoinSent {
    const message = { ...baseCoinSent } as CoinSent;
    message.sender =
      object.sender !== undefined && object.sender !== null
        ? String(object.sender)
        : "";
    message.receiver =
      object.receiver !== undefined && object.receiver !== null
        ? String(object.receiver)
        : "";
    message.amount = (object.amount ?? []).map((e: any) => Coin.fromJSON(e));
    return message;
  },

  toJSON(message: CoinSent): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<CoinSent>): CoinSent {
    const message = { ...baseCoinSent } as CoinSent;
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.amount = (object.amount ?? []).map((e) => Coin.fromPartial(e));
    return message;
  },
};

const baseCoinMint: object = { minter: "" };

export const CoinMint = {
  encode(
    message: CoinMint,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.minter !== "") {
      writer.uint32(10).string(message.minter);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CoinMint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCoinMint } as CoinMint;
    message.amount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minter = reader.string();
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CoinMint {
    const message = { ...baseCoinMint } as CoinMint;
    message.minter =
      object.minter !== undefined && object.minter !== null
        ? String(object.minter)
        : "";
    message.amount = (object.amount ?? []).map((e: any) => Coin.fromJSON(e));
    return message;
  },

  toJSON(message: CoinMint): unknown {
    const obj: any = {};
    message.minter !== undefined && (obj.minter = message.minter);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<CoinMint>): CoinMint {
    const message = { ...baseCoinMint } as CoinMint;
    message.minter = object.minter ?? "";
    message.amount = (object.amount ?? []).map((e) => Coin.fromPartial(e));
    return message;
  },
};

const baseCoinBurn: object = { burner: "" };

export const CoinBurn = {
  encode(
    message: CoinBurn,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.burner !== "") {
      writer.uint32(10).string(message.burner);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CoinBurn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCoinBurn } as CoinBurn;
    message.amount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burner = reader.string();
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CoinBurn {
    const message = { ...baseCoinBurn } as CoinBurn;
    message.burner =
      object.burner !== undefined && object.burner !== null
        ? String(object.burner)
        : "";
    message.amount = (object.amount ?? []).map((e: any) => Coin.fromJSON(e));
    return message;
  },

  toJSON(message: CoinBurn): unknown {
    const obj: any = {};
    message.burner !== undefined && (obj.burner = message.burner);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<CoinBurn>): CoinBurn {
    const message = { ...baseCoinBurn } as CoinBurn;
    message.burner = object.burner ?? "";
    message.amount = (object.amount ?? []).map((e) => Coin.fromPartial(e));
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
