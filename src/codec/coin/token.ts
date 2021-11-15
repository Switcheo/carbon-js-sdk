/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "Switcheo.carbon.coin";

export interface Token {
  id: string;
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

export interface LockedCoinsRecord {
  address: string;
  market: string;
  lockedCoins?: LockedCoins;
}

export interface PositionPool {
  market: string;
  coins: Coin[];
}

export interface TokenBalance {
  available: string;
  order: string;
  position: string;
  denom: string;
}

const baseToken: object = {
  id: "",
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
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(42).string(message.symbol);
    }
    if (!message.decimals.isZero()) {
      writer.uint32(48).int64(message.decimals);
    }
    if (!message.bridgeId.isZero()) {
      writer.uint32(56).uint64(message.bridgeId);
    }
    if (!message.chainId.isZero()) {
      writer.uint32(64).uint64(message.chainId);
    }
    if (message.tokenAddress !== "") {
      writer.uint32(74).string(message.tokenAddress);
    }
    if (message.bridgeAddress !== "") {
      writer.uint32(82).string(message.bridgeAddress);
    }
    if (message.isActive === true) {
      writer.uint32(88).bool(message.isActive);
    }
    if (message.isCollateral === true) {
      writer.uint32(96).bool(message.isCollateral);
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
          message.id = reader.string();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.symbol = reader.string();
          break;
        case 6:
          message.decimals = reader.int64() as Long;
          break;
        case 7:
          message.bridgeId = reader.uint64() as Long;
          break;
        case 8:
          message.chainId = reader.uint64() as Long;
          break;
        case 9:
          message.tokenAddress = reader.string();
          break;
        case 10:
          message.bridgeAddress = reader.string();
          break;
        case 11:
          message.isActive = reader.bool();
          break;
        case 12:
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
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
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
    message.id !== undefined && (obj.id = message.id);
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
    message.id = object.id ?? "";
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
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
    message.tokenAddress = object.tokenAddress ?? "";
    message.bridgeAddress = object.bridgeAddress ?? "";
    message.isActive = object.isActive ?? false;
    message.isCollateral = object.isCollateral ?? false;
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
    message.address = object.address ?? "";
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = object.blockHeight as Long;
    } else {
      message.blockHeight = Long.UZERO;
    }
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.type = object.type ?? "";
    message.location = object.location ?? "";
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
    message.denom = object.denom ?? "";
    message.orderMargin = object.orderMargin ?? "";
    message.positionMargin = object.positionMargin ?? "";
    message.collateral = object.collateral ?? "";
    return message;
  },
};

const baseLockedCoinsRecord: object = { address: "", market: "" };

export const LockedCoinsRecord = {
  encode(
    message: LockedCoinsRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.market !== "") {
      writer.uint32(18).string(message.market);
    }
    if (message.lockedCoins !== undefined) {
      LockedCoins.encode(
        message.lockedCoins,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LockedCoinsRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLockedCoinsRecord } as LockedCoinsRecord;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.market = reader.string();
          break;
        case 3:
          message.lockedCoins = LockedCoins.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LockedCoinsRecord {
    const message = { ...baseLockedCoinsRecord } as LockedCoinsRecord;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.market !== undefined && object.market !== null) {
      message.market = String(object.market);
    } else {
      message.market = "";
    }
    if (object.lockedCoins !== undefined && object.lockedCoins !== null) {
      message.lockedCoins = LockedCoins.fromJSON(object.lockedCoins);
    } else {
      message.lockedCoins = undefined;
    }
    return message;
  },

  toJSON(message: LockedCoinsRecord): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.market !== undefined && (obj.market = message.market);
    message.lockedCoins !== undefined &&
      (obj.lockedCoins = message.lockedCoins
        ? LockedCoins.toJSON(message.lockedCoins)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<LockedCoinsRecord>): LockedCoinsRecord {
    const message = { ...baseLockedCoinsRecord } as LockedCoinsRecord;
    message.address = object.address ?? "";
    message.market = object.market ?? "";
    if (object.lockedCoins !== undefined && object.lockedCoins !== null) {
      message.lockedCoins = LockedCoins.fromPartial(object.lockedCoins);
    } else {
      message.lockedCoins = undefined;
    }
    return message;
  },
};

const basePositionPool: object = { market: "" };

export const PositionPool = {
  encode(
    message: PositionPool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.market !== "") {
      writer.uint32(10).string(message.market);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PositionPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePositionPool } as PositionPool;
    message.coins = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market = reader.string();
          break;
        case 2:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PositionPool {
    const message = { ...basePositionPool } as PositionPool;
    message.coins = [];
    if (object.market !== undefined && object.market !== null) {
      message.market = String(object.market);
    } else {
      message.market = "";
    }
    if (object.coins !== undefined && object.coins !== null) {
      for (const e of object.coins) {
        message.coins.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: PositionPool): unknown {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market);
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<PositionPool>): PositionPool {
    const message = { ...basePositionPool } as PositionPool;
    message.market = object.market ?? "";
    message.coins = [];
    if (object.coins !== undefined && object.coins !== null) {
      for (const e of object.coins) {
        message.coins.push(Coin.fromPartial(e));
      }
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
    message.available = object.available ?? "";
    message.order = object.order ?? "";
    message.position = object.position ?? "";
    message.denom = object.denom ?? "";
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
