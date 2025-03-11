/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { StringValue } from "../../../google/protobuf/wrappers";

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
  createdBlockHeight: Long;
  isDeprecated: boolean;
}

export interface BalanceChange {
  address: string;
  blockHeight: Long;
  denom: string;
  amount: string;
  type: string;
  location: string;
  metadata?: Metadata;
}

export interface Metadata {
  orderId?: string;
}

export interface LockedCoins {
  denom: string;
  orderMargin: string;
  positionMargin: string;
}

export interface LockedCoinsRecord {
  address: string;
  marketId: string;
  lockedCoins?: LockedCoins;
}

export interface PositionPool {
  marketId: string;
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
  createdBlockHeight: Long.UZERO,
  isDeprecated: false,
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
    if (!message.createdBlockHeight.isZero()) {
      writer.uint32(104).uint64(message.createdBlockHeight);
    }
    if (message.isDeprecated === true) {
      writer.uint32(112).bool(message.isDeprecated);
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
        case 13:
          message.createdBlockHeight = reader.uint64() as Long;
          break;
        case 14:
          message.isDeprecated = reader.bool();
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
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.symbol =
      object.symbol !== undefined && object.symbol !== null
        ? String(object.symbol)
        : "";
    message.decimals =
      object.decimals !== undefined && object.decimals !== null
        ? Long.fromString(object.decimals)
        : Long.ZERO;
    message.bridgeId =
      object.bridgeId !== undefined && object.bridgeId !== null
        ? Long.fromString(object.bridgeId)
        : Long.UZERO;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Long.fromString(object.chainId)
        : Long.UZERO;
    message.tokenAddress =
      object.tokenAddress !== undefined && object.tokenAddress !== null
        ? String(object.tokenAddress)
        : "";
    message.bridgeAddress =
      object.bridgeAddress !== undefined && object.bridgeAddress !== null
        ? String(object.bridgeAddress)
        : "";
    message.isActive =
      object.isActive !== undefined && object.isActive !== null
        ? Boolean(object.isActive)
        : false;
    message.createdBlockHeight =
      object.createdBlockHeight !== undefined &&
      object.createdBlockHeight !== null
        ? Long.fromString(object.createdBlockHeight)
        : Long.UZERO;
    message.isDeprecated =
      object.isDeprecated !== undefined && object.isDeprecated !== null
        ? Boolean(object.isDeprecated)
        : false;
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
    message.createdBlockHeight !== undefined &&
      (obj.createdBlockHeight = (
        message.createdBlockHeight || Long.UZERO
      ).toString());
    message.isDeprecated !== undefined &&
      (obj.isDeprecated = message.isDeprecated);
    return obj;
  },

  fromPartial(object: DeepPartial<Token>): Token {
    const message = { ...baseToken } as Token;
    message.id = object.id ?? "";
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.decimals =
      object.decimals !== undefined && object.decimals !== null
        ? Long.fromValue(object.decimals)
        : Long.ZERO;
    message.bridgeId =
      object.bridgeId !== undefined && object.bridgeId !== null
        ? Long.fromValue(object.bridgeId)
        : Long.UZERO;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Long.fromValue(object.chainId)
        : Long.UZERO;
    message.tokenAddress = object.tokenAddress ?? "";
    message.bridgeAddress = object.bridgeAddress ?? "";
    message.isActive = object.isActive ?? false;
    message.createdBlockHeight =
      object.createdBlockHeight !== undefined &&
      object.createdBlockHeight !== null
        ? Long.fromValue(object.createdBlockHeight)
        : Long.UZERO;
    message.isDeprecated = object.isDeprecated ?? false;
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
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(58).fork()).ldelim();
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
        case 7:
          message.metadata = Metadata.decode(reader, reader.uint32());
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
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
        ? Long.fromString(object.blockHeight)
        : Long.UZERO;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    message.location =
      object.location !== undefined && object.location !== null
        ? String(object.location)
        : "";
    message.metadata =
      object.metadata !== undefined && object.metadata !== null
        ? Metadata.fromJSON(object.metadata)
        : undefined;
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
    message.metadata !== undefined &&
      (obj.metadata = message.metadata
        ? Metadata.toJSON(message.metadata)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<BalanceChange>): BalanceChange {
    const message = { ...baseBalanceChange } as BalanceChange;
    message.address = object.address ?? "";
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
        ? Long.fromValue(object.blockHeight)
        : Long.UZERO;
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.type = object.type ?? "";
    message.location = object.location ?? "";
    message.metadata =
      object.metadata !== undefined && object.metadata !== null
        ? Metadata.fromPartial(object.metadata)
        : undefined;
    return message;
  },
};

const baseMetadata: object = {};

export const Metadata = {
  encode(
    message: Metadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.orderId !== undefined) {
      StringValue.encode(
        { value: message.orderId! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Metadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMetadata } as Metadata;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = StringValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Metadata {
    const message = { ...baseMetadata } as Metadata;
    message.orderId =
      object.orderId !== undefined && object.orderId !== null
        ? String(object.orderId)
        : undefined;
    return message;
  },

  toJSON(message: Metadata): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = message.orderId);
    return obj;
  },

  fromPartial(object: DeepPartial<Metadata>): Metadata {
    const message = { ...baseMetadata } as Metadata;
    message.orderId = object.orderId ?? undefined;
    return message;
  },
};

const baseLockedCoins: object = {
  denom: "",
  orderMargin: "",
  positionMargin: "",
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LockedCoins {
    const message = { ...baseLockedCoins } as LockedCoins;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.orderMargin =
      object.orderMargin !== undefined && object.orderMargin !== null
        ? String(object.orderMargin)
        : "";
    message.positionMargin =
      object.positionMargin !== undefined && object.positionMargin !== null
        ? String(object.positionMargin)
        : "";
    return message;
  },

  toJSON(message: LockedCoins): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.orderMargin !== undefined &&
      (obj.orderMargin = message.orderMargin);
    message.positionMargin !== undefined &&
      (obj.positionMargin = message.positionMargin);
    return obj;
  },

  fromPartial(object: DeepPartial<LockedCoins>): LockedCoins {
    const message = { ...baseLockedCoins } as LockedCoins;
    message.denom = object.denom ?? "";
    message.orderMargin = object.orderMargin ?? "";
    message.positionMargin = object.positionMargin ?? "";
    return message;
  },
};

const baseLockedCoinsRecord: object = { address: "", marketId: "" };

export const LockedCoinsRecord = {
  encode(
    message: LockedCoinsRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
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
          message.marketId = reader.string();
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
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.lockedCoins =
      object.lockedCoins !== undefined && object.lockedCoins !== null
        ? LockedCoins.fromJSON(object.lockedCoins)
        : undefined;
    return message;
  },

  toJSON(message: LockedCoinsRecord): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.lockedCoins !== undefined &&
      (obj.lockedCoins = message.lockedCoins
        ? LockedCoins.toJSON(message.lockedCoins)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<LockedCoinsRecord>): LockedCoinsRecord {
    const message = { ...baseLockedCoinsRecord } as LockedCoinsRecord;
    message.address = object.address ?? "";
    message.marketId = object.marketId ?? "";
    message.lockedCoins =
      object.lockedCoins !== undefined && object.lockedCoins !== null
        ? LockedCoins.fromPartial(object.lockedCoins)
        : undefined;
    return message;
  },
};

const basePositionPool: object = { marketId: "" };

export const PositionPool = {
  encode(
    message: PositionPool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
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
          message.marketId = reader.string();
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
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.coins = (object.coins ?? []).map((e: any) => Coin.fromJSON(e));
    return message;
  },

  toJSON(message: PositionPool): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<PositionPool>): PositionPool {
    const message = { ...basePositionPool } as PositionPool;
    message.marketId = object.marketId ?? "";
    message.coins = (object.coins ?? []).map((e) => Coin.fromPartial(e));
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
    message.available =
      object.available !== undefined && object.available !== null
        ? String(object.available)
        : "";
    message.order =
      object.order !== undefined && object.order !== null
        ? String(object.order)
        : "";
    message.position =
      object.position !== undefined && object.position !== null
        ? String(object.position)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
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
