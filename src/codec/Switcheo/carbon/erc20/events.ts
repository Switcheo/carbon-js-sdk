/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.erc20";

/** EventRegisterPair is an event emitted when a coin is registered. */
export interface EventRegisterPair {
  /** denom is the coin's denomination. */
  denom: string;
  /** erc20_address is the ERC20 contract address. */
  erc20Address: string;
}

/**
 * EventToggleTokenConversion is an event emitted when a coin's token conversion
 * is toggled.
 */
export interface EventToggleTokenConversion {
  /** denom is the coin's denomination. */
  denom: string;
  /** erc20_address is the ERC20 contract address. */
  erc20Address: string;
}

/** EventConvertCoin is an event emitted when a coin is converted. */
export interface EventConvertCoin {
  /** sender is the sender's address. */
  sender: string;
  /** receiver is the receiver's address. */
  receiver: string;
  /** amount is the amount of coins to be converted. */
  amount: string;
  /** denom is the coin's denomination. */
  denom: string;
  /** erc20_address is the ERC20 contract address. */
  erc20Address: string;
}

/** EventConvertERC20 is an event emitted when an ERC20 is converted. */
export interface EventConvertERC20 {
  /** sender is the sender's address. */
  sender: string;
  /** receiver is the receiver's address. */
  receiver: string;
  /** amount is the amount of coins to be converted. */
  amount: string;
  /** denom is the coin's denomination. */
  denom: string;
  /**
   * contract_address of an ERC20 token contract, that is registered in a token
   * pair
   */
  contractAddress: string;
}

const baseEventRegisterPair: object = { denom: "", erc20Address: "" };

export const EventRegisterPair = {
  encode(
    message: EventRegisterPair,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.erc20Address !== "") {
      writer.uint32(18).string(message.erc20Address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRegisterPair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventRegisterPair } as EventRegisterPair;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.erc20Address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventRegisterPair {
    const message = { ...baseEventRegisterPair } as EventRegisterPair;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.erc20Address =
      object.erc20Address !== undefined && object.erc20Address !== null
        ? String(object.erc20Address)
        : "";
    return message;
  },

  toJSON(message: EventRegisterPair): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.erc20Address !== undefined &&
      (obj.erc20Address = message.erc20Address);
    return obj;
  },

  fromPartial(object: DeepPartial<EventRegisterPair>): EventRegisterPair {
    const message = { ...baseEventRegisterPair } as EventRegisterPair;
    message.denom = object.denom ?? "";
    message.erc20Address = object.erc20Address ?? "";
    return message;
  },
};

const baseEventToggleTokenConversion: object = { denom: "", erc20Address: "" };

export const EventToggleTokenConversion = {
  encode(
    message: EventToggleTokenConversion,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.erc20Address !== "") {
      writer.uint32(18).string(message.erc20Address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventToggleTokenConversion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEventToggleTokenConversion,
    } as EventToggleTokenConversion;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.erc20Address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventToggleTokenConversion {
    const message = {
      ...baseEventToggleTokenConversion,
    } as EventToggleTokenConversion;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.erc20Address =
      object.erc20Address !== undefined && object.erc20Address !== null
        ? String(object.erc20Address)
        : "";
    return message;
  },

  toJSON(message: EventToggleTokenConversion): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.erc20Address !== undefined &&
      (obj.erc20Address = message.erc20Address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EventToggleTokenConversion>
  ): EventToggleTokenConversion {
    const message = {
      ...baseEventToggleTokenConversion,
    } as EventToggleTokenConversion;
    message.denom = object.denom ?? "";
    message.erc20Address = object.erc20Address ?? "";
    return message;
  },
};

const baseEventConvertCoin: object = {
  sender: "",
  receiver: "",
  amount: "",
  denom: "",
  erc20Address: "",
};

export const EventConvertCoin = {
  encode(
    message: EventConvertCoin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    if (message.erc20Address !== "") {
      writer.uint32(42).string(message.erc20Address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventConvertCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventConvertCoin } as EventConvertCoin;
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
          message.amount = reader.string();
          break;
        case 4:
          message.denom = reader.string();
          break;
        case 5:
          message.erc20Address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventConvertCoin {
    const message = { ...baseEventConvertCoin } as EventConvertCoin;
    message.sender =
      object.sender !== undefined && object.sender !== null
        ? String(object.sender)
        : "";
    message.receiver =
      object.receiver !== undefined && object.receiver !== null
        ? String(object.receiver)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.erc20Address =
      object.erc20Address !== undefined && object.erc20Address !== null
        ? String(object.erc20Address)
        : "";
    return message;
  },

  toJSON(message: EventConvertCoin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.amount !== undefined && (obj.amount = message.amount);
    message.denom !== undefined && (obj.denom = message.denom);
    message.erc20Address !== undefined &&
      (obj.erc20Address = message.erc20Address);
    return obj;
  },

  fromPartial(object: DeepPartial<EventConvertCoin>): EventConvertCoin {
    const message = { ...baseEventConvertCoin } as EventConvertCoin;
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    message.erc20Address = object.erc20Address ?? "";
    return message;
  },
};

const baseEventConvertERC20: object = {
  sender: "",
  receiver: "",
  amount: "",
  denom: "",
  contractAddress: "",
};

export const EventConvertERC20 = {
  encode(
    message: EventConvertERC20,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    if (message.contractAddress !== "") {
      writer.uint32(42).string(message.contractAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventConvertERC20 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventConvertERC20 } as EventConvertERC20;
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
          message.amount = reader.string();
          break;
        case 4:
          message.denom = reader.string();
          break;
        case 5:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventConvertERC20 {
    const message = { ...baseEventConvertERC20 } as EventConvertERC20;
    message.sender =
      object.sender !== undefined && object.sender !== null
        ? String(object.sender)
        : "";
    message.receiver =
      object.receiver !== undefined && object.receiver !== null
        ? String(object.receiver)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.contractAddress =
      object.contractAddress !== undefined && object.contractAddress !== null
        ? String(object.contractAddress)
        : "";
    return message;
  },

  toJSON(message: EventConvertERC20): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.amount !== undefined && (obj.amount = message.amount);
    message.denom !== undefined && (obj.denom = message.denom);
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<EventConvertERC20>): EventConvertERC20 {
    const message = { ...baseEventConvertERC20 } as EventConvertERC20;
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    message.contractAddress = object.contractAddress ?? "";
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
