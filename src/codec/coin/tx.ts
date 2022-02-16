/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Bridge } from "../coin/bridge";

export const protobufPackage = "Switcheo.carbon.coin";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateToken {
  creator: string;
  createTokenParams?: CreateTokenParams;
}

export interface CreateTokenParams {
  creator: string;
  name: string;
  symbol: string;
  decimals: Long;
  chainId: Long;
  bridgeId: Long;
  bridgeAddress: string;
  tokenAddress: string;
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

export interface MsgUnbindToken {
  creator: string;
  wrappedDenom: string;
}

export interface MsgUnbindTokenResponse {}

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

export interface MsgAuthorizeBridge {
  creator: string;
  bridgeId: Long;
  chainId: Long;
  chainName: string;
}

export interface MsgAuthorizeBridgeResponse {
  id: string;
  bridge?: Bridge;
}

export interface MsgDeauthorizeBridge {
  initiator: string;
  bridgeId: Long;
  chainId: Long;
}

export interface MsgDeauthorizeBridgeResponse {
  id: string;
  bridge?: Bridge;
}

export interface MsgEditBridgeName {
  initiator: string;
  bridgeId: Long;
  chainId: Long;
  newBridgeName: string;
}

export interface MsgEditBridgeNameResponse {
  id: string;
  bridge?: Bridge;
}

export interface MsgRemoveBridge {
  initiator: string;
  bridgeId: Long;
  chainId: Long;
}

export interface MsgRemoveBridgeResponse {}

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
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.createTokenParams =
      object.createTokenParams !== undefined &&
      object.createTokenParams !== null
        ? CreateTokenParams.fromJSON(object.createTokenParams)
        : undefined;
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
    message.creator = object.creator ?? "";
    message.createTokenParams =
      object.createTokenParams !== undefined &&
      object.createTokenParams !== null
        ? CreateTokenParams.fromPartial(object.createTokenParams)
        : undefined;
    return message;
  },
};

const baseCreateTokenParams: object = {
  creator: "",
  name: "",
  symbol: "",
  decimals: Long.ZERO,
  chainId: Long.UZERO,
  bridgeId: Long.UZERO,
  bridgeAddress: "",
  tokenAddress: "",
};

export const CreateTokenParams = {
  encode(
    message: CreateTokenParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (!message.decimals.isZero()) {
      writer.uint32(32).int64(message.decimals);
    }
    if (!message.chainId.isZero()) {
      writer.uint32(40).uint64(message.chainId);
    }
    if (!message.bridgeId.isZero()) {
      writer.uint32(48).uint64(message.bridgeId);
    }
    if (message.bridgeAddress !== "") {
      writer.uint32(58).string(message.bridgeAddress);
    }
    if (message.tokenAddress !== "") {
      writer.uint32(66).string(message.tokenAddress);
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
          message.name = reader.string();
          break;
        case 3:
          message.symbol = reader.string();
          break;
        case 4:
          message.decimals = reader.int64() as Long;
          break;
        case 5:
          message.chainId = reader.uint64() as Long;
          break;
        case 6:
          message.bridgeId = reader.uint64() as Long;
          break;
        case 7:
          message.bridgeAddress = reader.string();
          break;
        case 8:
          message.tokenAddress = reader.string();
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
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
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
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Long.fromString(object.chainId)
        : Long.UZERO;
    message.bridgeId =
      object.bridgeId !== undefined && object.bridgeId !== null
        ? Long.fromString(object.bridgeId)
        : Long.UZERO;
    message.bridgeAddress =
      object.bridgeAddress !== undefined && object.bridgeAddress !== null
        ? String(object.bridgeAddress)
        : "";
    message.tokenAddress =
      object.tokenAddress !== undefined && object.tokenAddress !== null
        ? String(object.tokenAddress)
        : "";
    return message;
  },

  toJSON(message: CreateTokenParams): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
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
    return obj;
  },

  fromPartial(object: DeepPartial<CreateTokenParams>): CreateTokenParams {
    const message = { ...baseCreateTokenParams } as CreateTokenParams;
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.decimals =
      object.decimals !== undefined && object.decimals !== null
        ? Long.fromValue(object.decimals)
        : Long.ZERO;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Long.fromValue(object.chainId)
        : Long.UZERO;
    message.bridgeId =
      object.bridgeId !== undefined && object.bridgeId !== null
        ? Long.fromValue(object.bridgeId)
        : Long.UZERO;
    message.bridgeAddress = object.bridgeAddress ?? "";
    message.tokenAddress = object.tokenAddress ?? "";
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
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
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
    message.denom = object.denom ?? "";
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
    message.syncer =
      object.syncer !== undefined && object.syncer !== null
        ? String(object.syncer)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
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
    message.syncer = object.syncer ?? "";
    message.denom = object.denom ?? "";
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
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    message.to =
      object.to !== undefined && object.to !== null ? String(object.to) : "";
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
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.to = object.to ?? "";
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
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.sourceDenom =
      object.sourceDenom !== undefined && object.sourceDenom !== null
        ? String(object.sourceDenom)
        : "";
    message.wrappedDenom =
      object.wrappedDenom !== undefined && object.wrappedDenom !== null
        ? String(object.wrappedDenom)
        : "";
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
    message.creator = object.creator ?? "";
    message.sourceDenom = object.sourceDenom ?? "";
    message.wrappedDenom = object.wrappedDenom ?? "";
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

const baseMsgUnbindToken: object = { creator: "", wrappedDenom: "" };

export const MsgUnbindToken = {
  encode(
    message: MsgUnbindToken,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.wrappedDenom !== "") {
      writer.uint32(18).string(message.wrappedDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnbindToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUnbindToken } as MsgUnbindToken;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.wrappedDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUnbindToken {
    const message = { ...baseMsgUnbindToken } as MsgUnbindToken;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.wrappedDenom =
      object.wrappedDenom !== undefined && object.wrappedDenom !== null
        ? String(object.wrappedDenom)
        : "";
    return message;
  },

  toJSON(message: MsgUnbindToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.wrappedDenom !== undefined &&
      (obj.wrappedDenom = message.wrappedDenom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUnbindToken>): MsgUnbindToken {
    const message = { ...baseMsgUnbindToken } as MsgUnbindToken;
    message.creator = object.creator ?? "";
    message.wrappedDenom = object.wrappedDenom ?? "";
    return message;
  },
};

const baseMsgUnbindTokenResponse: object = {};

export const MsgUnbindTokenResponse = {
  encode(
    _: MsgUnbindTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUnbindTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUnbindTokenResponse } as MsgUnbindTokenResponse;
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

  fromJSON(_: any): MsgUnbindTokenResponse {
    const message = { ...baseMsgUnbindTokenResponse } as MsgUnbindTokenResponse;
    return message;
  },

  toJSON(_: MsgUnbindTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUnbindTokenResponse>): MsgUnbindTokenResponse {
    const message = { ...baseMsgUnbindTokenResponse } as MsgUnbindTokenResponse;
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
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.bridgeAddress =
      object.bridgeAddress !== undefined && object.bridgeAddress !== null
        ? String(object.bridgeAddress)
        : "";
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
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.bridgeAddress = object.bridgeAddress ?? "";
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
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.toAddress =
      object.toAddress !== undefined && object.toAddress !== null
        ? String(object.toAddress)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    message.feeAmount =
      object.feeAmount !== undefined && object.feeAmount !== null
        ? String(object.feeAmount)
        : "";
    message.feeAddress =
      object.feeAddress !== undefined && object.feeAddress !== null
        ? String(object.feeAddress)
        : "";
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
    message.creator = object.creator ?? "";
    message.toAddress = object.toAddress ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.feeAmount = object.feeAmount ?? "";
    message.feeAddress = object.feeAddress ?? "";
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

const baseMsgAuthorizeBridge: object = {
  creator: "",
  bridgeId: Long.UZERO,
  chainId: Long.UZERO,
  chainName: "",
};

export const MsgAuthorizeBridge = {
  encode(
    message: MsgAuthorizeBridge,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.bridgeId.isZero()) {
      writer.uint32(16).uint64(message.bridgeId);
    }
    if (!message.chainId.isZero()) {
      writer.uint32(24).uint64(message.chainId);
    }
    if (message.chainName !== "") {
      writer.uint32(34).string(message.chainName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAuthorizeBridge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAuthorizeBridge } as MsgAuthorizeBridge;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.bridgeId = reader.uint64() as Long;
          break;
        case 3:
          message.chainId = reader.uint64() as Long;
          break;
        case 4:
          message.chainName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAuthorizeBridge {
    const message = { ...baseMsgAuthorizeBridge } as MsgAuthorizeBridge;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.bridgeId =
      object.bridgeId !== undefined && object.bridgeId !== null
        ? Long.fromString(object.bridgeId)
        : Long.UZERO;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Long.fromString(object.chainId)
        : Long.UZERO;
    message.chainName =
      object.chainName !== undefined && object.chainName !== null
        ? String(object.chainName)
        : "";
    return message;
  },

  toJSON(message: MsgAuthorizeBridge): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.bridgeId !== undefined &&
      (obj.bridgeId = (message.bridgeId || Long.UZERO).toString());
    message.chainId !== undefined &&
      (obj.chainId = (message.chainId || Long.UZERO).toString());
    message.chainName !== undefined && (obj.chainName = message.chainName);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAuthorizeBridge>): MsgAuthorizeBridge {
    const message = { ...baseMsgAuthorizeBridge } as MsgAuthorizeBridge;
    message.creator = object.creator ?? "";
    message.bridgeId =
      object.bridgeId !== undefined && object.bridgeId !== null
        ? Long.fromValue(object.bridgeId)
        : Long.UZERO;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Long.fromValue(object.chainId)
        : Long.UZERO;
    message.chainName = object.chainName ?? "";
    return message;
  },
};

const baseMsgAuthorizeBridgeResponse: object = { id: "" };

export const MsgAuthorizeBridgeResponse = {
  encode(
    message: MsgAuthorizeBridgeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.bridge !== undefined) {
      Bridge.encode(message.bridge, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAuthorizeBridgeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAuthorizeBridgeResponse,
    } as MsgAuthorizeBridgeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.bridge = Bridge.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAuthorizeBridgeResponse {
    const message = {
      ...baseMsgAuthorizeBridgeResponse,
    } as MsgAuthorizeBridgeResponse;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.bridge =
      object.bridge !== undefined && object.bridge !== null
        ? Bridge.fromJSON(object.bridge)
        : undefined;
    return message;
  },

  toJSON(message: MsgAuthorizeBridgeResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.bridge !== undefined &&
      (obj.bridge = message.bridge ? Bridge.toJSON(message.bridge) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgAuthorizeBridgeResponse>
  ): MsgAuthorizeBridgeResponse {
    const message = {
      ...baseMsgAuthorizeBridgeResponse,
    } as MsgAuthorizeBridgeResponse;
    message.id = object.id ?? "";
    message.bridge =
      object.bridge !== undefined && object.bridge !== null
        ? Bridge.fromPartial(object.bridge)
        : undefined;
    return message;
  },
};

const baseMsgDeauthorizeBridge: object = {
  initiator: "",
  bridgeId: Long.UZERO,
  chainId: Long.UZERO,
};

export const MsgDeauthorizeBridge = {
  encode(
    message: MsgDeauthorizeBridge,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.initiator !== "") {
      writer.uint32(10).string(message.initiator);
    }
    if (!message.bridgeId.isZero()) {
      writer.uint32(16).uint64(message.bridgeId);
    }
    if (!message.chainId.isZero()) {
      writer.uint32(24).uint64(message.chainId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeauthorizeBridge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeauthorizeBridge } as MsgDeauthorizeBridge;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.initiator = reader.string();
          break;
        case 2:
          message.bridgeId = reader.uint64() as Long;
          break;
        case 3:
          message.chainId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeauthorizeBridge {
    const message = { ...baseMsgDeauthorizeBridge } as MsgDeauthorizeBridge;
    message.initiator =
      object.initiator !== undefined && object.initiator !== null
        ? String(object.initiator)
        : "";
    message.bridgeId =
      object.bridgeId !== undefined && object.bridgeId !== null
        ? Long.fromString(object.bridgeId)
        : Long.UZERO;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Long.fromString(object.chainId)
        : Long.UZERO;
    return message;
  },

  toJSON(message: MsgDeauthorizeBridge): unknown {
    const obj: any = {};
    message.initiator !== undefined && (obj.initiator = message.initiator);
    message.bridgeId !== undefined &&
      (obj.bridgeId = (message.bridgeId || Long.UZERO).toString());
    message.chainId !== undefined &&
      (obj.chainId = (message.chainId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeauthorizeBridge>): MsgDeauthorizeBridge {
    const message = { ...baseMsgDeauthorizeBridge } as MsgDeauthorizeBridge;
    message.initiator = object.initiator ?? "";
    message.bridgeId =
      object.bridgeId !== undefined && object.bridgeId !== null
        ? Long.fromValue(object.bridgeId)
        : Long.UZERO;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Long.fromValue(object.chainId)
        : Long.UZERO;
    return message;
  },
};

const baseMsgDeauthorizeBridgeResponse: object = { id: "" };

export const MsgDeauthorizeBridgeResponse = {
  encode(
    message: MsgDeauthorizeBridgeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.bridge !== undefined) {
      Bridge.encode(message.bridge, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeauthorizeBridgeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeauthorizeBridgeResponse,
    } as MsgDeauthorizeBridgeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.bridge = Bridge.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeauthorizeBridgeResponse {
    const message = {
      ...baseMsgDeauthorizeBridgeResponse,
    } as MsgDeauthorizeBridgeResponse;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.bridge =
      object.bridge !== undefined && object.bridge !== null
        ? Bridge.fromJSON(object.bridge)
        : undefined;
    return message;
  },

  toJSON(message: MsgDeauthorizeBridgeResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.bridge !== undefined &&
      (obj.bridge = message.bridge ? Bridge.toJSON(message.bridge) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeauthorizeBridgeResponse>
  ): MsgDeauthorizeBridgeResponse {
    const message = {
      ...baseMsgDeauthorizeBridgeResponse,
    } as MsgDeauthorizeBridgeResponse;
    message.id = object.id ?? "";
    message.bridge =
      object.bridge !== undefined && object.bridge !== null
        ? Bridge.fromPartial(object.bridge)
        : undefined;
    return message;
  },
};

const baseMsgEditBridgeName: object = {
  initiator: "",
  bridgeId: Long.UZERO,
  chainId: Long.UZERO,
  newBridgeName: "",
};

export const MsgEditBridgeName = {
  encode(
    message: MsgEditBridgeName,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.initiator !== "") {
      writer.uint32(10).string(message.initiator);
    }
    if (!message.bridgeId.isZero()) {
      writer.uint32(16).uint64(message.bridgeId);
    }
    if (!message.chainId.isZero()) {
      writer.uint32(24).uint64(message.chainId);
    }
    if (message.newBridgeName !== "") {
      writer.uint32(34).string(message.newBridgeName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditBridgeName {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgEditBridgeName } as MsgEditBridgeName;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.initiator = reader.string();
          break;
        case 2:
          message.bridgeId = reader.uint64() as Long;
          break;
        case 3:
          message.chainId = reader.uint64() as Long;
          break;
        case 4:
          message.newBridgeName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEditBridgeName {
    const message = { ...baseMsgEditBridgeName } as MsgEditBridgeName;
    message.initiator =
      object.initiator !== undefined && object.initiator !== null
        ? String(object.initiator)
        : "";
    message.bridgeId =
      object.bridgeId !== undefined && object.bridgeId !== null
        ? Long.fromString(object.bridgeId)
        : Long.UZERO;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Long.fromString(object.chainId)
        : Long.UZERO;
    message.newBridgeName =
      object.newBridgeName !== undefined && object.newBridgeName !== null
        ? String(object.newBridgeName)
        : "";
    return message;
  },

  toJSON(message: MsgEditBridgeName): unknown {
    const obj: any = {};
    message.initiator !== undefined && (obj.initiator = message.initiator);
    message.bridgeId !== undefined &&
      (obj.bridgeId = (message.bridgeId || Long.UZERO).toString());
    message.chainId !== undefined &&
      (obj.chainId = (message.chainId || Long.UZERO).toString());
    message.newBridgeName !== undefined &&
      (obj.newBridgeName = message.newBridgeName);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgEditBridgeName>): MsgEditBridgeName {
    const message = { ...baseMsgEditBridgeName } as MsgEditBridgeName;
    message.initiator = object.initiator ?? "";
    message.bridgeId =
      object.bridgeId !== undefined && object.bridgeId !== null
        ? Long.fromValue(object.bridgeId)
        : Long.UZERO;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Long.fromValue(object.chainId)
        : Long.UZERO;
    message.newBridgeName = object.newBridgeName ?? "";
    return message;
  },
};

const baseMsgEditBridgeNameResponse: object = { id: "" };

export const MsgEditBridgeNameResponse = {
  encode(
    message: MsgEditBridgeNameResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.bridge !== undefined) {
      Bridge.encode(message.bridge, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgEditBridgeNameResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgEditBridgeNameResponse,
    } as MsgEditBridgeNameResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.bridge = Bridge.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEditBridgeNameResponse {
    const message = {
      ...baseMsgEditBridgeNameResponse,
    } as MsgEditBridgeNameResponse;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.bridge =
      object.bridge !== undefined && object.bridge !== null
        ? Bridge.fromJSON(object.bridge)
        : undefined;
    return message;
  },

  toJSON(message: MsgEditBridgeNameResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.bridge !== undefined &&
      (obj.bridge = message.bridge ? Bridge.toJSON(message.bridge) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgEditBridgeNameResponse>
  ): MsgEditBridgeNameResponse {
    const message = {
      ...baseMsgEditBridgeNameResponse,
    } as MsgEditBridgeNameResponse;
    message.id = object.id ?? "";
    message.bridge =
      object.bridge !== undefined && object.bridge !== null
        ? Bridge.fromPartial(object.bridge)
        : undefined;
    return message;
  },
};

const baseMsgRemoveBridge: object = {
  initiator: "",
  bridgeId: Long.UZERO,
  chainId: Long.UZERO,
};

export const MsgRemoveBridge = {
  encode(
    message: MsgRemoveBridge,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.initiator !== "") {
      writer.uint32(10).string(message.initiator);
    }
    if (!message.bridgeId.isZero()) {
      writer.uint32(16).uint64(message.bridgeId);
    }
    if (!message.chainId.isZero()) {
      writer.uint32(24).uint64(message.chainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveBridge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRemoveBridge } as MsgRemoveBridge;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.initiator = reader.string();
          break;
        case 2:
          message.bridgeId = reader.uint64() as Long;
          break;
        case 3:
          message.chainId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveBridge {
    const message = { ...baseMsgRemoveBridge } as MsgRemoveBridge;
    message.initiator =
      object.initiator !== undefined && object.initiator !== null
        ? String(object.initiator)
        : "";
    message.bridgeId =
      object.bridgeId !== undefined && object.bridgeId !== null
        ? Long.fromString(object.bridgeId)
        : Long.UZERO;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Long.fromString(object.chainId)
        : Long.UZERO;
    return message;
  },

  toJSON(message: MsgRemoveBridge): unknown {
    const obj: any = {};
    message.initiator !== undefined && (obj.initiator = message.initiator);
    message.bridgeId !== undefined &&
      (obj.bridgeId = (message.bridgeId || Long.UZERO).toString());
    message.chainId !== undefined &&
      (obj.chainId = (message.chainId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRemoveBridge>): MsgRemoveBridge {
    const message = { ...baseMsgRemoveBridge } as MsgRemoveBridge;
    message.initiator = object.initiator ?? "";
    message.bridgeId =
      object.bridgeId !== undefined && object.bridgeId !== null
        ? Long.fromValue(object.bridgeId)
        : Long.UZERO;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Long.fromValue(object.chainId)
        : Long.UZERO;
    return message;
  },
};

const baseMsgRemoveBridgeResponse: object = {};

export const MsgRemoveBridgeResponse = {
  encode(
    _: MsgRemoveBridgeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemoveBridgeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRemoveBridgeResponse,
    } as MsgRemoveBridgeResponse;
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

  fromJSON(_: any): MsgRemoveBridgeResponse {
    const message = {
      ...baseMsgRemoveBridgeResponse,
    } as MsgRemoveBridgeResponse;
    return message;
  },

  toJSON(_: MsgRemoveBridgeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRemoveBridgeResponse>
  ): MsgRemoveBridgeResponse {
    const message = {
      ...baseMsgRemoveBridgeResponse,
    } as MsgRemoveBridgeResponse;
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
  UnbindToken(request: MsgUnbindToken): Promise<MsgUnbindTokenResponse>;
  LinkToken(request: MsgLinkToken): Promise<MsgLinkTokenResponse>;
  Withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
  AuthorizeBridge(
    request: MsgAuthorizeBridge
  ): Promise<MsgAuthorizeBridgeResponse>;
  DeauthorizeBridge(
    request: MsgDeauthorizeBridge
  ): Promise<MsgDeauthorizeBridgeResponse>;
  EditBridgeName(
    request: MsgEditBridgeName
  ): Promise<MsgEditBridgeNameResponse>;
  RemoveBridge(request: MsgRemoveBridge): Promise<MsgRemoveBridgeResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateToken = this.CreateToken.bind(this);
    this.SyncToken = this.SyncToken.bind(this);
    this.MintToken = this.MintToken.bind(this);
    this.BindToken = this.BindToken.bind(this);
    this.UnbindToken = this.UnbindToken.bind(this);
    this.LinkToken = this.LinkToken.bind(this);
    this.Withdraw = this.Withdraw.bind(this);
    this.AuthorizeBridge = this.AuthorizeBridge.bind(this);
    this.DeauthorizeBridge = this.DeauthorizeBridge.bind(this);
    this.EditBridgeName = this.EditBridgeName.bind(this);
    this.RemoveBridge = this.RemoveBridge.bind(this);
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

  UnbindToken(request: MsgUnbindToken): Promise<MsgUnbindTokenResponse> {
    const data = MsgUnbindToken.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.coin.Msg",
      "UnbindToken",
      data
    );
    return promise.then((data) =>
      MsgUnbindTokenResponse.decode(new _m0.Reader(data))
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

  AuthorizeBridge(
    request: MsgAuthorizeBridge
  ): Promise<MsgAuthorizeBridgeResponse> {
    const data = MsgAuthorizeBridge.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.coin.Msg",
      "AuthorizeBridge",
      data
    );
    return promise.then((data) =>
      MsgAuthorizeBridgeResponse.decode(new _m0.Reader(data))
    );
  }

  DeauthorizeBridge(
    request: MsgDeauthorizeBridge
  ): Promise<MsgDeauthorizeBridgeResponse> {
    const data = MsgDeauthorizeBridge.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.coin.Msg",
      "DeauthorizeBridge",
      data
    );
    return promise.then((data) =>
      MsgDeauthorizeBridgeResponse.decode(new _m0.Reader(data))
    );
  }

  EditBridgeName(
    request: MsgEditBridgeName
  ): Promise<MsgEditBridgeNameResponse> {
    const data = MsgEditBridgeName.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.coin.Msg",
      "EditBridgeName",
      data
    );
    return promise.then((data) =>
      MsgEditBridgeNameResponse.decode(new _m0.Reader(data))
    );
  }

  RemoveBridge(request: MsgRemoveBridge): Promise<MsgRemoveBridgeResponse> {
    const data = MsgRemoveBridge.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.coin.Msg",
      "RemoveBridge",
      data
    );
    return promise.then((data) =>
      MsgRemoveBridgeResponse.decode(new _m0.Reader(data))
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
