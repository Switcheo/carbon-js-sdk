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

function createBaseCoinSpent(): CoinSpent {
  return { spender: "", amount: [] };
}

export const CoinSpent = {
  encode(message: CoinSpent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spender !== "") {
      writer.uint32(10).string(message.spender);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CoinSpent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoinSpent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.spender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amount.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CoinSpent {
    return {
      spender: isSet(object.spender) ? String(object.spender) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: CoinSpent): unknown {
    const obj: any = {};
    message.spender !== undefined && (obj.spender = message.spender);
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CoinSpent>): CoinSpent {
    return CoinSpent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CoinSpent>): CoinSpent {
    const message = createBaseCoinSpent();
    message.spender = object.spender ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCoinReceived(): CoinReceived {
  return { receiver: "", amount: [] };
}

export const CoinReceived = {
  encode(message: CoinReceived, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.receiver !== "") {
      writer.uint32(10).string(message.receiver);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CoinReceived {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoinReceived();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.receiver = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amount.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CoinReceived {
    return {
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: CoinReceived): unknown {
    const obj: any = {};
    message.receiver !== undefined && (obj.receiver = message.receiver);
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CoinReceived>): CoinReceived {
    return CoinReceived.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CoinReceived>): CoinReceived {
    const message = createBaseCoinReceived();
    message.receiver = object.receiver ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCoinSent(): CoinSent {
  return { sender: "", receiver: "", amount: [] };
}

export const CoinSent = {
  encode(message: CoinSent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoinSent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.receiver = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amount.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CoinSent {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: CoinSent): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CoinSent>): CoinSent {
    return CoinSent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CoinSent>): CoinSent {
    const message = createBaseCoinSent();
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCoinMint(): CoinMint {
  return { minter: "", amount: [] };
}

export const CoinMint = {
  encode(message: CoinMint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minter !== "") {
      writer.uint32(10).string(message.minter);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CoinMint {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoinMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.minter = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amount.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CoinMint {
    return {
      minter: isSet(object.minter) ? String(object.minter) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: CoinMint): unknown {
    const obj: any = {};
    message.minter !== undefined && (obj.minter = message.minter);
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CoinMint>): CoinMint {
    return CoinMint.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CoinMint>): CoinMint {
    const message = createBaseCoinMint();
    message.minter = object.minter ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCoinBurn(): CoinBurn {
  return { burner: "", amount: [] };
}

export const CoinBurn = {
  encode(message: CoinBurn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.burner !== "") {
      writer.uint32(10).string(message.burner);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CoinBurn {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoinBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.burner = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amount.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CoinBurn {
    return {
      burner: isSet(object.burner) ? String(object.burner) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: CoinBurn): unknown {
    const obj: any = {};
    message.burner !== undefined && (obj.burner = message.burner);
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CoinBurn>): CoinBurn {
    return CoinBurn.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CoinBurn>): CoinBurn {
    const message = createBaseCoinBurn();
    message.burner = object.burner ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
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
