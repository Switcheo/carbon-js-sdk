/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.coin";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateToken {
  creator: string;
  createTokenParams?: CreateTokenParams;
}

export interface CreateTokenParams {
  creator: string;
  denom: string;
  name: string;
  symbol: string;
  decimals: Long;
  chainId: Long;
  bridgeId: Long;
  bridgeAddress: string;
  tokenAddress: string;
  isCollateral: boolean;
}

export interface MsgCreateTokenResponse {
  denom: string;
}

export interface MsgSyncToken {
  syncer: string;
  denom: string;
}

export interface MsgSyncTokenResponse {}

export interface MsgMintToken {
  creator: string;
  denom: string;
  amount: string;
  to: string;
}

export interface MsgMintTokenResponse {}

export interface MsgBindToken {
  creator: string;
  sourceDenom: string;
  wrappedDenom: string;
}

export interface MsgBindTokenResponse {}

export interface MsgLinkToken {
  creator: string;
  denom: string;
  bridgeAddress: string;
}

export interface MsgLinkTokenResponse {}

export interface MsgWithdraw {
  creator: string;
  toAddress: string;
  denom: string;
  amount: string;
  feeAmount: string;
  feeAddress: string;
}

export interface MsgWithdrawResponse {}

const baseMsgCreateToken: object = { creator: "" };

export const MsgCreateToken = {
  encode(
    message: MsgCreateToken,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.createTokenParams !== undefined) {
      CreateTokenParams.encode(
        message.createTokenParams,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateToken } as MsgCreateToken;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.createTokenParams = CreateTokenParams.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateToken {
    const message = { ...baseMsgCreateToken } as MsgCreateToken;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.createTokenParams !== undefined &&
      object.createTokenParams !== null
    ) {
      message.createTokenParams = CreateTokenParams.fromJSON(
        object.createTokenParams
      );
    } else {
      message.createTokenParams = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.createTokenParams !== undefined &&
      (obj.createTokenParams = message.createTokenParams
        ? CreateTokenParams.toJSON(message.createTokenParams)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateToken>): MsgCreateToken {
    const message = { ...baseMsgCreateToken } as MsgCreateToken;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.createTokenParams !== undefined &&
      object.createTokenParams !== null
    ) {
      message.createTokenParams = CreateTokenParams.fromPartial(
        object.createTokenParams
      );
    } else {
      message.createTokenParams = undefined;
    }
    return message;
  },
};

const baseCreateTokenParams: object = {
  creator: "",
  denom: "",
  name: "",
  symbol: "",
  decimals: Long.ZERO,
  chainId: Long.UZERO,
  bridgeId: Long.UZERO,
  bridgeAddress: "",
  tokenAddress: "",
  isCollateral: false,
};

export const CreateTokenParams = {
  encode(
    message: CreateTokenParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    if (!message.chainId.isZero()) {
      writer.uint32(48).uint64(message.chainId);
    }
    if (!message.bridgeId.isZero()) {
      writer.uint32(56).uint64(message.bridgeId);
    }
    if (message.bridgeAddress !== "") {
      writer.uint32(66).string(message.bridgeAddress);
    }
    if (message.tokenAddress !== "") {
      writer.uint32(74).string(message.tokenAddress);
    }
    if (message.isCollateral === true) {
      writer.uint32(80).bool(message.isCollateral);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTokenParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateTokenParams } as CreateTokenParams;
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
          message.chainId = reader.uint64() as Long;
          break;
        case 7:
          message.bridgeId = reader.uint64() as Long;
          break;
        case 8:
          message.bridgeAddress = reader.string();
          break;
        case 9:
          message.tokenAddress = reader.string();
          break;
        case 10:
          message.isCollateral = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateTokenParams {
    const message = { ...baseCreateTokenParams } as CreateTokenParams;
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
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = Long.fromString(object.chainId);
    } else {
      message.chainId = Long.UZERO;
    }
    if (object.bridgeId !== undefined && object.bridgeId !== null) {
      message.bridgeId = Long.fromString(object.bridgeId);
    } else {
      message.bridgeId = Long.UZERO;
    }
    if (object.bridgeAddress !== undefined && object.bridgeAddress !== null) {
      message.bridgeAddress = String(object.bridgeAddress);
    } else {
      message.bridgeAddress = "";
    }
    if (object.tokenAddress !== undefined && object.tokenAddress !== null) {
      message.tokenAddress = String(object.tokenAddress);
    } else {
      message.tokenAddress = "";
    }
    if (object.isCollateral !== undefined && object.isCollateral !== null) {
      message.isCollateral = Boolean(object.isCollateral);
    } else {
      message.isCollateral = false;
    }
    return message;
  },

  toJSON(message: CreateTokenParams): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.decimals !== undefined &&
      (obj.decimals = (message.decimals || Long.ZERO).toString());
    message.chainId !== undefined &&
      (obj.chainId = (message.chainId || Long.UZERO).toString());
    message.bridgeId !== undefined &&
      (obj.bridgeId = (message.bridgeId || Long.UZERO).toString());
    message.bridgeAddress !== undefined &&
      (obj.bridgeAddress = message.bridgeAddress);
    message.tokenAddress !== undefined &&
      (obj.tokenAddress = message.tokenAddress);
    message.isCollateral !== undefined &&
      (obj.isCollateral = message.isCollateral);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateTokenParams>): CreateTokenParams {
    const message = { ...baseCreateTokenParams } as CreateTokenParams;
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
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = object.chainId as Long;
    } else {
      message.chainId = Long.UZERO;
    }
    if (object.bridgeId !== undefined && object.bridgeId !== null) {
      message.bridgeId = object.bridgeId as Long;
    } else {
      message.bridgeId = Long.UZERO;
    }
    if (object.bridgeAddress !== undefined && object.bridgeAddress !== null) {
      message.bridgeAddress = object.bridgeAddress;
    } else {
      message.bridgeAddress = "";
    }
    if (object.tokenAddress !== undefined && object.tokenAddress !== null) {
      message.tokenAddress = object.tokenAddress;
    } else {
      message.tokenAddress = "";
    }
    if (object.isCollateral !== undefined && object.isCollateral !== null) {
      message.isCollateral = object.isCollateral;
    } else {
      message.isCollateral = false;
    }
    return message;
  },
};

const baseMsgCreateTokenResponse: object = { denom: "" };

export const MsgCreateTokenResponse = {
  encode(
    message: MsgCreateTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateTokenResponse } as MsgCreateTokenResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTokenResponse {
    const message = { ...baseMsgCreateTokenResponse } as MsgCreateTokenResponse;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
  },

  toJSON(message: MsgCreateTokenResponse): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateTokenResponse>
  ): MsgCreateTokenResponse {
    const message = { ...baseMsgCreateTokenResponse } as MsgCreateTokenResponse;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    return message;
  },
};

const baseMsgSyncToken: object = { syncer: "", denom: "" };

export const MsgSyncToken = {
  encode(
    message: MsgSyncToken,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.syncer !== "") {
      writer.uint32(10).string(message.syncer);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSyncToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSyncToken } as MsgSyncToken;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.syncer = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSyncToken {
    const message = { ...baseMsgSyncToken } as MsgSyncToken;
    if (object.syncer !== undefined && object.syncer !== null) {
      message.syncer = String(object.syncer);
    } else {
      message.syncer = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
  },

  toJSON(message: MsgSyncToken): unknown {
    const obj: any = {};
    message.syncer !== undefined && (obj.syncer = message.syncer);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSyncToken>): MsgSyncToken {
    const message = { ...baseMsgSyncToken } as MsgSyncToken;
    if (object.syncer !== undefined && object.syncer !== null) {
      message.syncer = object.syncer;
    } else {
      message.syncer = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    return message;
  },
};

const baseMsgSyncTokenResponse: object = {};

export const MsgSyncTokenResponse = {
  encode(
    _: MsgSyncTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSyncTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSyncTokenResponse } as MsgSyncTokenResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSyncTokenResponse {
    const message = { ...baseMsgSyncTokenResponse } as MsgSyncTokenResponse;
    return message;
  },

  toJSON(_: MsgSyncTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSyncTokenResponse>): MsgSyncTokenResponse {
    const message = { ...baseMsgSyncTokenResponse } as MsgSyncTokenResponse;
    return message;
  },
};

const baseMsgMintToken: object = { creator: "", denom: "", amount: "", to: "" };

export const MsgMintToken = {
  encode(
    message: MsgMintToken,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.to !== "") {
      writer.uint32(34).string(message.to);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMintToken } as MsgMintToken;
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
          message.amount = reader.string();
          break;
        case 4:
          message.to = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintToken {
    const message = { ...baseMsgMintToken } as MsgMintToken;
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
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    return message;
  },

  toJSON(message: MsgMintToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.to !== undefined && (obj.to = message.to);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMintToken>): MsgMintToken {
    const message = { ...baseMsgMintToken } as MsgMintToken;
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
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    return message;
  },
};

const baseMsgMintTokenResponse: object = {};

export const MsgMintTokenResponse = {
  encode(
    _: MsgMintTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgMintTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMintTokenResponse } as MsgMintTokenResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgMintTokenResponse {
    const message = { ...baseMsgMintTokenResponse } as MsgMintTokenResponse;
    return message;
  },

  toJSON(_: MsgMintTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgMintTokenResponse>): MsgMintTokenResponse {
    const message = { ...baseMsgMintTokenResponse } as MsgMintTokenResponse;
    return message;
  },
};

const baseMsgBindToken: object = {
  creator: "",
  sourceDenom: "",
  wrappedDenom: "",
};

export const MsgBindToken = {
  encode(
    message: MsgBindToken,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.sourceDenom !== "") {
      writer.uint32(18).string(message.sourceDenom);
    }
    if (message.wrappedDenom !== "") {
      writer.uint32(26).string(message.wrappedDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBindToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBindToken } as MsgBindToken;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.sourceDenom = reader.string();
          break;
        case 3:
          message.wrappedDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBindToken {
    const message = { ...baseMsgBindToken } as MsgBindToken;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.sourceDenom !== undefined && object.sourceDenom !== null) {
      message.sourceDenom = String(object.sourceDenom);
    } else {
      message.sourceDenom = "";
    }
    if (object.wrappedDenom !== undefined && object.wrappedDenom !== null) {
      message.wrappedDenom = String(object.wrappedDenom);
    } else {
      message.wrappedDenom = "";
    }
    return message;
  },

  toJSON(message: MsgBindToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.sourceDenom !== undefined &&
      (obj.sourceDenom = message.sourceDenom);
    message.wrappedDenom !== undefined &&
      (obj.wrappedDenom = message.wrappedDenom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBindToken>): MsgBindToken {
    const message = { ...baseMsgBindToken } as MsgBindToken;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.sourceDenom !== undefined && object.sourceDenom !== null) {
      message.sourceDenom = object.sourceDenom;
    } else {
      message.sourceDenom = "";
    }
    if (object.wrappedDenom !== undefined && object.wrappedDenom !== null) {
      message.wrappedDenom = object.wrappedDenom;
    } else {
      message.wrappedDenom = "";
    }
    return message;
  },
};

const baseMsgBindTokenResponse: object = {};

export const MsgBindTokenResponse = {
  encode(
    _: MsgBindTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgBindTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBindTokenResponse } as MsgBindTokenResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgBindTokenResponse {
    const message = { ...baseMsgBindTokenResponse } as MsgBindTokenResponse;
    return message;
  },

  toJSON(_: MsgBindTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgBindTokenResponse>): MsgBindTokenResponse {
    const message = { ...baseMsgBindTokenResponse } as MsgBindTokenResponse;
    return message;
  },
};

const baseMsgLinkToken: object = { creator: "", denom: "", bridgeAddress: "" };

export const MsgLinkToken = {
  encode(
    message: MsgLinkToken,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.bridgeAddress !== "") {
      writer.uint32(26).string(message.bridgeAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLinkToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgLinkToken } as MsgLinkToken;
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
          message.bridgeAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLinkToken {
    const message = { ...baseMsgLinkToken } as MsgLinkToken;
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
    if (object.bridgeAddress !== undefined && object.bridgeAddress !== null) {
      message.bridgeAddress = String(object.bridgeAddress);
    } else {
      message.bridgeAddress = "";
    }
    return message;
  },

  toJSON(message: MsgLinkToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.bridgeAddress !== undefined &&
      (obj.bridgeAddress = message.bridgeAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgLinkToken>): MsgLinkToken {
    const message = { ...baseMsgLinkToken } as MsgLinkToken;
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
    if (object.bridgeAddress !== undefined && object.bridgeAddress !== null) {
      message.bridgeAddress = object.bridgeAddress;
    } else {
      message.bridgeAddress = "";
    }
    return message;
  },
};

const baseMsgLinkTokenResponse: object = {};

export const MsgLinkTokenResponse = {
  encode(
    _: MsgLinkTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgLinkTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgLinkTokenResponse } as MsgLinkTokenResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgLinkTokenResponse {
    const message = { ...baseMsgLinkTokenResponse } as MsgLinkTokenResponse;
    return message;
  },

  toJSON(_: MsgLinkTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgLinkTokenResponse>): MsgLinkTokenResponse {
    const message = { ...baseMsgLinkTokenResponse } as MsgLinkTokenResponse;
    return message;
  },
};

const baseMsgWithdraw: object = {
  creator: "",
  toAddress: "",
  denom: "",
  amount: "",
  feeAmount: "",
  feeAddress: "",
};

export const MsgWithdraw = {
  encode(
    message: MsgWithdraw,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.feeAmount !== "") {
      writer.uint32(42).string(message.feeAmount);
    }
    if (message.feeAddress !== "") {
      writer.uint32(50).string(message.feeAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdraw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgWithdraw } as MsgWithdraw;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.feeAmount = reader.string();
          break;
        case 6:
          message.feeAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdraw {
    const message = { ...baseMsgWithdraw } as MsgWithdraw;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.toAddress !== undefined && object.toAddress !== null) {
      message.toAddress = String(object.toAddress);
    } else {
      message.toAddress = "";
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
    if (object.feeAmount !== undefined && object.feeAmount !== null) {
      message.feeAmount = String(object.feeAmount);
    } else {
      message.feeAmount = "";
    }
    if (object.feeAddress !== undefined && object.feeAddress !== null) {
      message.feeAddress = String(object.feeAddress);
    } else {
      message.feeAddress = "";
    }
    return message;
  },

  toJSON(message: MsgWithdraw): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.feeAmount !== undefined && (obj.feeAmount = message.feeAmount);
    message.feeAddress !== undefined && (obj.feeAddress = message.feeAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgWithdraw>): MsgWithdraw {
    const message = { ...baseMsgWithdraw } as MsgWithdraw;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.toAddress !== undefined && object.toAddress !== null) {
      message.toAddress = object.toAddress;
    } else {
      message.toAddress = "";
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
    if (object.feeAmount !== undefined && object.feeAmount !== null) {
      message.feeAmount = object.feeAmount;
    } else {
      message.feeAmount = "";
    }
    if (object.feeAddress !== undefined && object.feeAddress !== null) {
      message.feeAddress = object.feeAddress;
    } else {
      message.feeAddress = "";
    }
    return message;
  },
};

const baseMsgWithdrawResponse: object = {};

export const MsgWithdrawResponse = {
  encode(
    _: MsgWithdrawResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgWithdrawResponse } as MsgWithdrawResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgWithdrawResponse {
    const message = { ...baseMsgWithdrawResponse } as MsgWithdrawResponse;
    return message;
  },

  toJSON(_: MsgWithdrawResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgWithdrawResponse>): MsgWithdrawResponse {
    const message = { ...baseMsgWithdrawResponse } as MsgWithdrawResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateToken(request: MsgCreateToken): Promise<MsgCreateTokenResponse>;
  SyncToken(request: MsgSyncToken): Promise<MsgSyncTokenResponse>;
  MintToken(request: MsgMintToken): Promise<MsgMintTokenResponse>;
  BindToken(request: MsgBindToken): Promise<MsgBindTokenResponse>;
  LinkToken(request: MsgLinkToken): Promise<MsgLinkTokenResponse>;
  Withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateToken = this.CreateToken.bind(this);
    this.SyncToken = this.SyncToken.bind(this);
    this.MintToken = this.MintToken.bind(this);
    this.BindToken = this.BindToken.bind(this);
    this.LinkToken = this.LinkToken.bind(this);
    this.Withdraw = this.Withdraw.bind(this);
  }
  CreateToken(request: MsgCreateToken): Promise<MsgCreateTokenResponse> {
    const data = MsgCreateToken.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.coin.Msg",
      "CreateToken",
      data
    );
    return promise.then((data) =>
      MsgCreateTokenResponse.decode(new _m0.Reader(data))
    );
  }

  SyncToken(request: MsgSyncToken): Promise<MsgSyncTokenResponse> {
    const data = MsgSyncToken.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.coin.Msg",
      "SyncToken",
      data
    );
    return promise.then((data) =>
      MsgSyncTokenResponse.decode(new _m0.Reader(data))
    );
  }

  MintToken(request: MsgMintToken): Promise<MsgMintTokenResponse> {
    const data = MsgMintToken.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.coin.Msg",
      "MintToken",
      data
    );
    return promise.then((data) =>
      MsgMintTokenResponse.decode(new _m0.Reader(data))
    );
  }

  BindToken(request: MsgBindToken): Promise<MsgBindTokenResponse> {
    const data = MsgBindToken.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.coin.Msg",
      "BindToken",
      data
    );
    return promise.then((data) =>
      MsgBindTokenResponse.decode(new _m0.Reader(data))
    );
  }

  LinkToken(request: MsgLinkToken): Promise<MsgLinkTokenResponse> {
    const data = MsgLinkToken.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.coin.Msg",
      "LinkToken",
      data
    );
    return promise.then((data) =>
      MsgLinkTokenResponse.decode(new _m0.Reader(data))
    );
  }

  Withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse> {
    const data = MsgWithdraw.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.coin.Msg",
      "Withdraw",
      data
    );
    return promise.then((data) =>
      MsgWithdrawResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
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
