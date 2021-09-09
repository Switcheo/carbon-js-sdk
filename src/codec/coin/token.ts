/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.coin";

export interface Token {
  creator: string;
  denom: string;
  name: string;
  symbol: string;
  decimals: Long;
  bridgeId: Long;
  chainId: Long;
  tokenAddress: string;
  bridgeAddress: string;
  isActive: boolean;
  isCollateral: boolean;
}

export interface BalanceChange {
  address: string;
  blockHeight: Long;
  denom: string;
  amount: string;
  type: string;
  location: string;
}

export interface LockedCoins {
  denom: string;
  orderMargin: string;
  positionMargin: string;
  collateral: string;
}

export interface LockedCoinsWithKey {
  lockedCoins?: LockedCoins;
  key: Uint8Array;
}

export interface PositionPoolCoinsWithKey {
  amount: string;
  key: Uint8Array;
}

export interface TokenBalance {
  available: string;
  order: string;
  position: string;
  denom: string;
}

const baseToken: object = {
  creator: "",
  denom: "",
  name: "",
  symbol: "",
  decimals: Long.ZERO,
  bridgeId: Long.UZERO,
  chainId: Long.UZERO,
  tokenAddress: "",
  bridgeAddress: "",
  isActive: false,
  isCollateral: false,
};

export const Token = {
  encode(message: Token, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(34).string(message.symbol);
    }
    if (!message.decimals.isZero()) {
      writer.uint32(40).int64(message.decimals);
    }
    if (!message.bridgeId.isZero()) {
      writer.uint32(48).uint64(message.bridgeId);
    }
    if (!message.chainId.isZero()) {
      writer.uint32(56).uint64(message.chainId);
    }
    if (message.tokenAddress !== "") {
      writer.uint32(66).string(message.tokenAddress);
    }
    if (message.bridgeAddress !== "") {
      writer.uint32(74).string(message.bridgeAddress);
    }
    if (message.isActive === true) {
      writer.uint32(80).bool(message.isActive);
    }
    if (message.isCollateral === true) {
      writer.uint32(88).bool(message.isCollateral);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Token {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseToken } as Token;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.symbol = reader.string();
          break;
        case 5:
          message.decimals = reader.int64() as Long;
          break;
        case 6:
          message.bridgeId = reader.uint64() as Long;
          break;
        case 7:
          message.chainId = reader.uint64() as Long;
          break;
        case 8:
          message.tokenAddress = reader.string();
          break;
        case 9:
          message.bridgeAddress = reader.string();
          break;
        case 10:
          message.isActive = reader.bool();
          break;
        case 11:
          message.isCollateral = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Token {
    const message = { ...baseToken } as Token;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = String(object.symbol);
    } else {
      message.symbol = "";
    }
    if (object.decimals !== undefined && object.decimals !== null) {
      message.decimals = Long.fromString(object.decimals);
    } else {
      message.decimals = Long.ZERO;
    }
    if (object.bridgeId !== undefined && object.bridgeId !== null) {
      message.bridgeId = Long.fromString(object.bridgeId);
    } else {
      message.bridgeId = Long.UZERO;
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = Long.fromString(object.chainId);
    } else {
      message.chainId = Long.UZERO;
    }
    if (object.tokenAddress !== undefined && object.tokenAddress !== null) {
      message.tokenAddress = String(object.tokenAddress);
    } else {
      message.tokenAddress = "";
    }
    if (object.bridgeAddress !== undefined && object.bridgeAddress !== null) {
      message.bridgeAddress = String(object.bridgeAddress);
    } else {
      message.bridgeAddress = "";
    }
    if (object.isActive !== undefined && object.isActive !== null) {
      message.isActive = Boolean(object.isActive);
    } else {
      message.isActive = false;
    }
    if (object.isCollateral !== undefined && object.isCollateral !== null) {
      message.isCollateral = Boolean(object.isCollateral);
    } else {
      message.isCollateral = false;
    }
    return message;
  },

  toJSON(message: Token): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.decimals !== undefined &&
      (obj.decimals = (message.decimals || Long.ZERO).toString());
    message.bridgeId !== undefined &&
      (obj.bridgeId = (message.bridgeId || Long.UZERO).toString());
    message.chainId !== undefined &&
      (obj.chainId = (message.chainId || Long.UZERO).toString());
    message.tokenAddress !== undefined &&
      (obj.tokenAddress = message.tokenAddress);
    message.bridgeAddress !== undefined &&
      (obj.bridgeAddress = message.bridgeAddress);
    message.isActive !== undefined && (obj.isActive = message.isActive);
    message.isCollateral !== undefined &&
      (obj.isCollateral = message.isCollateral);
    return obj;
  },

  fromPartial(object: DeepPartial<Token>): Token {
    const message = { ...baseToken } as Token;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    } else {
      message.symbol = "";
    }
    if (object.decimals !== undefined && object.decimals !== null) {
      message.decimals = object.decimals as Long;
    } else {
      message.decimals = Long.ZERO;
    }
    if (object.bridgeId !== undefined && object.bridgeId !== null) {
      message.bridgeId = object.bridgeId as Long;
    } else {
      message.bridgeId = Long.UZERO;
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = object.chainId as Long;
    } else {
      message.chainId = Long.UZERO;
    }
    if (object.tokenAddress !== undefined && object.tokenAddress !== null) {
      message.tokenAddress = object.tokenAddress;
    } else {
      message.tokenAddress = "";
    }
    if (object.bridgeAddress !== undefined && object.bridgeAddress !== null) {
      message.bridgeAddress = object.bridgeAddress;
    } else {
      message.bridgeAddress = "";
    }
    if (object.isActive !== undefined && object.isActive !== null) {
      message.isActive = object.isActive;
    } else {
      message.isActive = false;
    }
    if (object.isCollateral !== undefined && object.isCollateral !== null) {
      message.isCollateral = object.isCollateral;
    } else {
      message.isCollateral = false;
    }
    return message;
  },
};

const baseBalanceChange: object = {
  address: "",
  blockHeight: Long.UZERO,
  denom: "",
  amount: "",
  type: "",
  location: "",
};

export const BalanceChange = {
  encode(
    message: BalanceChange,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (!message.blockHeight.isZero()) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.type !== "") {
      writer.uint32(42).string(message.type);
    }
    if (message.location !== "") {
      writer.uint32(50).string(message.location);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BalanceChange {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBalanceChange } as BalanceChange;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.blockHeight = reader.uint64() as Long;
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.type = reader.string();
          break;
        case 6:
          message.location = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BalanceChange {
    const message = { ...baseBalanceChange } as BalanceChange;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = Long.fromString(object.blockHeight);
    } else {
      message.blockHeight = Long.UZERO;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = String(object.location);
    } else {
      message.location = "";
    }
    return message;
  },

  toJSON(message: BalanceChange): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.blockHeight !== undefined &&
      (obj.blockHeight = (message.blockHeight || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.type !== undefined && (obj.type = message.type);
    message.location !== undefined && (obj.location = message.location);
    return obj;
  },

  fromPartial(object: DeepPartial<BalanceChange>): BalanceChange {
    const message = { ...baseBalanceChange } as BalanceChange;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = object.blockHeight as Long;
    } else {
      message.blockHeight = Long.UZERO;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location;
    } else {
      message.location = "";
    }
    return message;
  },
};

const baseLockedCoins: object = {
  denom: "",
  orderMargin: "",
  positionMargin: "",
  collateral: "",
};

export const LockedCoins = {
  encode(
    message: LockedCoins,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.orderMargin !== "") {
      writer.uint32(18).string(message.orderMargin);
    }
    if (message.positionMargin !== "") {
      writer.uint32(26).string(message.positionMargin);
    }
    if (message.collateral !== "") {
      writer.uint32(34).string(message.collateral);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LockedCoins {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLockedCoins } as LockedCoins;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.orderMargin = reader.string();
          break;
        case 3:
          message.positionMargin = reader.string();
          break;
        case 4:
          message.collateral = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LockedCoins {
    const message = { ...baseLockedCoins } as LockedCoins;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.orderMargin !== undefined && object.orderMargin !== null) {
      message.orderMargin = String(object.orderMargin);
    } else {
      message.orderMargin = "";
    }
    if (object.positionMargin !== undefined && object.positionMargin !== null) {
      message.positionMargin = String(object.positionMargin);
    } else {
      message.positionMargin = "";
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = String(object.collateral);
    } else {
      message.collateral = "";
    }
    return message;
  },

  toJSON(message: LockedCoins): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.orderMargin !== undefined &&
      (obj.orderMargin = message.orderMargin);
    message.positionMargin !== undefined &&
      (obj.positionMargin = message.positionMargin);
    message.collateral !== undefined && (obj.collateral = message.collateral);
    return obj;
  },

  fromPartial(object: DeepPartial<LockedCoins>): LockedCoins {
    const message = { ...baseLockedCoins } as LockedCoins;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.orderMargin !== undefined && object.orderMargin !== null) {
      message.orderMargin = object.orderMargin;
    } else {
      message.orderMargin = "";
    }
    if (object.positionMargin !== undefined && object.positionMargin !== null) {
      message.positionMargin = object.positionMargin;
    } else {
      message.positionMargin = "";
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = object.collateral;
    } else {
      message.collateral = "";
    }
    return message;
  },
};

const baseLockedCoinsWithKey: object = {};

export const LockedCoinsWithKey = {
  encode(
    message: LockedCoinsWithKey,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lockedCoins !== undefined) {
      LockedCoins.encode(
        message.lockedCoins,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LockedCoinsWithKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLockedCoinsWithKey } as LockedCoinsWithKey;
    message.key = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockedCoins = LockedCoins.decode(reader, reader.uint32());
          break;
        case 2:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LockedCoinsWithKey {
    const message = { ...baseLockedCoinsWithKey } as LockedCoinsWithKey;
    message.key = new Uint8Array();
    if (object.lockedCoins !== undefined && object.lockedCoins !== null) {
      message.lockedCoins = LockedCoins.fromJSON(object.lockedCoins);
    } else {
      message.lockedCoins = undefined;
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    return message;
  },

  toJSON(message: LockedCoinsWithKey): unknown {
    const obj: any = {};
    message.lockedCoins !== undefined &&
      (obj.lockedCoins = message.lockedCoins
        ? LockedCoins.toJSON(message.lockedCoins)
        : undefined);
    message.key !== undefined &&
      (obj.key = base64FromBytes(
        message.key !== undefined ? message.key : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<LockedCoinsWithKey>): LockedCoinsWithKey {
    const message = { ...baseLockedCoinsWithKey } as LockedCoinsWithKey;
    if (object.lockedCoins !== undefined && object.lockedCoins !== null) {
      message.lockedCoins = LockedCoins.fromPartial(object.lockedCoins);
    } else {
      message.lockedCoins = undefined;
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = new Uint8Array();
    }
    return message;
  },
};

const basePositionPoolCoinsWithKey: object = { amount: "" };

export const PositionPoolCoinsWithKey = {
  encode(
    message: PositionPoolCoinsWithKey,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PositionPoolCoinsWithKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePositionPoolCoinsWithKey,
    } as PositionPoolCoinsWithKey;
    message.key = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        case 2:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PositionPoolCoinsWithKey {
    const message = {
      ...basePositionPoolCoinsWithKey,
    } as PositionPoolCoinsWithKey;
    message.key = new Uint8Array();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    return message;
  },

  toJSON(message: PositionPoolCoinsWithKey): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    message.key !== undefined &&
      (obj.key = base64FromBytes(
        message.key !== undefined ? message.key : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<PositionPoolCoinsWithKey>
  ): PositionPoolCoinsWithKey {
    const message = {
      ...basePositionPoolCoinsWithKey,
    } as PositionPoolCoinsWithKey;
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = new Uint8Array();
    }
    return message;
  },
};

const baseTokenBalance: object = {
  available: "",
  order: "",
  position: "",
  denom: "",
};

export const TokenBalance = {
  encode(
    message: TokenBalance,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.available !== "") {
      writer.uint32(10).string(message.available);
    }
    if (message.order !== "") {
      writer.uint32(18).string(message.order);
    }
    if (message.position !== "") {
      writer.uint32(26).string(message.position);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenBalance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTokenBalance } as TokenBalance;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.available = reader.string();
          break;
        case 2:
          message.order = reader.string();
          break;
        case 3:
          message.position = reader.string();
          break;
        case 4:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TokenBalance {
    const message = { ...baseTokenBalance } as TokenBalance;
    if (object.available !== undefined && object.available !== null) {
      message.available = String(object.available);
    } else {
      message.available = "";
    }
    if (object.order !== undefined && object.order !== null) {
      message.order = String(object.order);
    } else {
      message.order = "";
    }
    if (object.position !== undefined && object.position !== null) {
      message.position = String(object.position);
    } else {
      message.position = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
  },

  toJSON(message: TokenBalance): unknown {
    const obj: any = {};
    message.available !== undefined && (obj.available = message.available);
    message.order !== undefined && (obj.order = message.order);
    message.position !== undefined && (obj.position = message.position);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<TokenBalance>): TokenBalance {
    const message = { ...baseTokenBalance } as TokenBalance;
    if (object.available !== undefined && object.available !== null) {
      message.available = object.available;
    } else {
      message.available = "";
    }
    if (object.order !== undefined && object.order !== null) {
      message.order = object.order;
    } else {
      message.order = "";
    }
    if (object.position !== undefined && object.position !== null) {
      message.position = object.position;
    } else {
      message.position = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

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
