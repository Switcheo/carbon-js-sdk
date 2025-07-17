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

function createBaseToken(): Token {
  return {
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
}

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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.symbol = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.decimals = reader.int64() as Long;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.bridgeId = reader.uint64() as Long;
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.chainId = reader.uint64() as Long;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.tokenAddress = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.bridgeAddress = reader.string();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.isActive = reader.bool();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.createdBlockHeight = reader.uint64() as Long;
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.isDeprecated = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Token {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      name: isSet(object.name) ? String(object.name) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      decimals: isSet(object.decimals) ? Long.fromValue(object.decimals) : Long.ZERO,
      bridgeId: isSet(object.bridgeId) ? Long.fromValue(object.bridgeId) : Long.UZERO,
      chainId: isSet(object.chainId) ? Long.fromValue(object.chainId) : Long.UZERO,
      tokenAddress: isSet(object.tokenAddress) ? String(object.tokenAddress) : "",
      bridgeAddress: isSet(object.bridgeAddress) ? String(object.bridgeAddress) : "",
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : false,
      createdBlockHeight: isSet(object.createdBlockHeight) ? Long.fromValue(object.createdBlockHeight) : Long.UZERO,
      isDeprecated: isSet(object.isDeprecated) ? Boolean(object.isDeprecated) : false,
    };
  },

  toJSON(message: Token): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.decimals !== undefined && (obj.decimals = (message.decimals || Long.ZERO).toString());
    message.bridgeId !== undefined && (obj.bridgeId = (message.bridgeId || Long.UZERO).toString());
    message.chainId !== undefined && (obj.chainId = (message.chainId || Long.UZERO).toString());
    message.tokenAddress !== undefined && (obj.tokenAddress = message.tokenAddress);
    message.bridgeAddress !== undefined && (obj.bridgeAddress = message.bridgeAddress);
    message.isActive !== undefined && (obj.isActive = message.isActive);
    message.createdBlockHeight !== undefined &&
      (obj.createdBlockHeight = (message.createdBlockHeight || Long.UZERO).toString());
    message.isDeprecated !== undefined && (obj.isDeprecated = message.isDeprecated);
    return obj;
  },

  create(base?: DeepPartial<Token>): Token {
    return Token.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Token>): Token {
    const message = createBaseToken();
    message.id = object.id ?? "";
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.decimals = (object.decimals !== undefined && object.decimals !== null)
      ? Long.fromValue(object.decimals)
      : Long.ZERO;
    message.bridgeId = (object.bridgeId !== undefined && object.bridgeId !== null)
      ? Long.fromValue(object.bridgeId)
      : Long.UZERO;
    message.chainId = (object.chainId !== undefined && object.chainId !== null)
      ? Long.fromValue(object.chainId)
      : Long.UZERO;
    message.tokenAddress = object.tokenAddress ?? "";
    message.bridgeAddress = object.bridgeAddress ?? "";
    message.isActive = object.isActive ?? false;
    message.createdBlockHeight = (object.createdBlockHeight !== undefined && object.createdBlockHeight !== null)
      ? Long.fromValue(object.createdBlockHeight)
      : Long.UZERO;
    message.isDeprecated = object.isDeprecated ?? false;
    return message;
  },
};

function createBaseBalanceChange(): BalanceChange {
  return { address: "", blockHeight: Long.UZERO, denom: "", amount: "", type: "", location: "", metadata: undefined };
}

export const BalanceChange = {
  encode(message: BalanceChange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalanceChange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.blockHeight = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.type = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.location = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.metadata = Metadata.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BalanceChange {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.UZERO,
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      type: isSet(object.type) ? String(object.type) : "",
      location: isSet(object.location) ? String(object.location) : "",
      metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined,
    };
  },

  toJSON(message: BalanceChange): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.type !== undefined && (obj.type = message.type);
    message.location !== undefined && (obj.location = message.location);
    message.metadata !== undefined && (obj.metadata = message.metadata ? Metadata.toJSON(message.metadata) : undefined);
    return obj;
  },

  create(base?: DeepPartial<BalanceChange>): BalanceChange {
    return BalanceChange.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<BalanceChange>): BalanceChange {
    const message = createBaseBalanceChange();
    message.address = object.address ?? "";
    message.blockHeight = (object.blockHeight !== undefined && object.blockHeight !== null)
      ? Long.fromValue(object.blockHeight)
      : Long.UZERO;
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.type = object.type ?? "";
    message.location = object.location ?? "";
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? Metadata.fromPartial(object.metadata)
      : undefined;
    return message;
  },
};

function createBaseMetadata(): Metadata {
  return { orderId: undefined };
}

export const Metadata = {
  encode(message: Metadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderId !== undefined) {
      StringValue.encode({ value: message.orderId! }, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Metadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.orderId = StringValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Metadata {
    return { orderId: isSet(object.orderId) ? String(object.orderId) : undefined };
  },

  toJSON(message: Metadata): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = message.orderId);
    return obj;
  },

  create(base?: DeepPartial<Metadata>): Metadata {
    return Metadata.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Metadata>): Metadata {
    const message = createBaseMetadata();
    message.orderId = object.orderId ?? undefined;
    return message;
  },
};

function createBaseLockedCoins(): LockedCoins {
  return { denom: "", orderMargin: "", positionMargin: "" };
}

export const LockedCoins = {
  encode(message: LockedCoins, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockedCoins();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.orderMargin = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.positionMargin = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LockedCoins {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      orderMargin: isSet(object.orderMargin) ? String(object.orderMargin) : "",
      positionMargin: isSet(object.positionMargin) ? String(object.positionMargin) : "",
    };
  },

  toJSON(message: LockedCoins): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.orderMargin !== undefined && (obj.orderMargin = message.orderMargin);
    message.positionMargin !== undefined && (obj.positionMargin = message.positionMargin);
    return obj;
  },

  create(base?: DeepPartial<LockedCoins>): LockedCoins {
    return LockedCoins.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<LockedCoins>): LockedCoins {
    const message = createBaseLockedCoins();
    message.denom = object.denom ?? "";
    message.orderMargin = object.orderMargin ?? "";
    message.positionMargin = object.positionMargin ?? "";
    return message;
  },
};

function createBaseLockedCoinsRecord(): LockedCoinsRecord {
  return { address: "", marketId: "", lockedCoins: undefined };
}

export const LockedCoinsRecord = {
  encode(message: LockedCoinsRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.lockedCoins !== undefined) {
      LockedCoins.encode(message.lockedCoins, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LockedCoinsRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockedCoinsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.marketId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.lockedCoins = LockedCoins.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LockedCoinsRecord {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      lockedCoins: isSet(object.lockedCoins) ? LockedCoins.fromJSON(object.lockedCoins) : undefined,
    };
  },

  toJSON(message: LockedCoinsRecord): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.lockedCoins !== undefined &&
      (obj.lockedCoins = message.lockedCoins ? LockedCoins.toJSON(message.lockedCoins) : undefined);
    return obj;
  },

  create(base?: DeepPartial<LockedCoinsRecord>): LockedCoinsRecord {
    return LockedCoinsRecord.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<LockedCoinsRecord>): LockedCoinsRecord {
    const message = createBaseLockedCoinsRecord();
    message.address = object.address ?? "";
    message.marketId = object.marketId ?? "";
    message.lockedCoins = (object.lockedCoins !== undefined && object.lockedCoins !== null)
      ? LockedCoins.fromPartial(object.lockedCoins)
      : undefined;
    return message;
  },
};

function createBasePositionPool(): PositionPool {
  return { marketId: "", coins: [] };
}

export const PositionPool = {
  encode(message: PositionPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PositionPool {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.marketId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.coins.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PositionPool {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: PositionPool): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    if (message.coins) {
      obj.coins = message.coins.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },

  create(base?: DeepPartial<PositionPool>): PositionPool {
    return PositionPool.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PositionPool>): PositionPool {
    const message = createBasePositionPool();
    message.marketId = object.marketId ?? "";
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTokenBalance(): TokenBalance {
  return { available: "", order: "", position: "", denom: "" };
}

export const TokenBalance = {
  encode(message: TokenBalance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.available = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.order = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.position = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.denom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TokenBalance {
    return {
      available: isSet(object.available) ? String(object.available) : "",
      order: isSet(object.order) ? String(object.order) : "",
      position: isSet(object.position) ? String(object.position) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: TokenBalance): unknown {
    const obj: any = {};
    message.available !== undefined && (obj.available = message.available);
    message.order !== undefined && (obj.order = message.order);
    message.position !== undefined && (obj.position = message.position);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<TokenBalance>): TokenBalance {
    return TokenBalance.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TokenBalance>): TokenBalance {
    const message = createBaseTokenBalance();
    message.available = object.available ?? "";
    message.order = object.order ?? "";
    message.position = object.position ?? "";
    message.denom = object.denom ?? "";
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
