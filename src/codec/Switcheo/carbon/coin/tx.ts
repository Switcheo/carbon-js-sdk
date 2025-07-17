/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BoolValue, Int64Value, StringValue } from "../../../google/protobuf/wrappers";
import { Bridge } from "./bridge";
import { GroupedTokenConfig, TokenGroup } from "./group";

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

export interface MsgCreatePerpetualToken {
  creator: string;
  createPerpetualTokenParams?: CreatePerpetualTokenParams;
}

export interface CreatePerpetualTokenParams {
  creator: string;
  name: string;
  symbol: string;
  decimals: Long;
}

export interface MsgCreatePerpetualTokenResponse {
  denom: string;
}

export interface MsgSyncToken {
  syncer: string;
  denom: string;
}

export interface MsgSyncTokenResponse {
}

export interface MsgMintToken {
  creator: string;
  denom: string;
  amount: string;
  to: string;
}

export interface MsgMintTokenResponse {
}

export interface MsgBindToken {
  creator: string;
  sourceDenom: string;
  wrappedDenom: string;
}

export interface MsgBindTokenResponse {
}

export interface MsgUnbindToken {
  creator: string;
  wrappedDenom: string;
}

export interface MsgUnbindTokenResponse {
}

export interface MsgLinkToken {
  creator: string;
  denom: string;
  bridgeAddress: string;
}

export interface MsgLinkTokenResponse {
}

export interface MsgWithdraw {
  creator: string;
  toAddress: string;
  denom: string;
  amount: string;
  feeAmount: string;
  feeAddress: string;
  feeDenom: string;
}

export interface MsgWithdrawResponse {
}

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

export interface MsgRemoveBridgeResponse {
}

export interface MsgUpdateToken {
  updater: string;
  denom: string;
  updateTokenParams?: UpdateTokenParams;
}

export interface UpdateTokenParams {
  isActive?: boolean;
  /** struct */
  name?: string;
  symbol?: string;
  decimals?: Long;
}

export interface MsgUpdateTokenResponse {
}

export interface MsgDeprecateToken {
  deprecator: string;
  denom: string;
}

export interface MsgDeprecateTokenResponse {
}

export interface MsgAddBridgeAddress {
  creator: string;
  chainId: Long;
  bridgeId: Long;
  bridgeAddress: string;
}

export interface MsgAddBridgeAddressResponse {
  id: string;
  bridge?: Bridge;
}

export interface MsgRemoveBridgeAddress {
  initiator: string;
  chainId: Long;
  bridgeId: Long;
  bridgeAddress: string;
}

export interface MsgRemoveBridgeAddressResponse {
  id: string;
  bridge?: Bridge;
}

export interface MsgCreateGroup {
  creator: string;
  /** name of group */
  name: string;
  /** symbol of the cheque token that represents */
  chequeTokenSymbol: string;
  /** any tokens in the group 1-to-1 */
  oracleId: string;
}

export interface MsgCreateGroupResponse {
  tokenGroup?: TokenGroup;
}

export interface MsgUpdateGroup {
  creator: string;
  groupId: Long;
  updateGroupParams?: UpdateGroupParams;
}

export interface UpdateGroupParams {
  name?: string;
}

export interface MsgUpdateGroupResponse {
  tokenGroup?: TokenGroup;
}

export interface MsgRegisterToGroup {
  creator: string;
  groupId: Long;
  denom: string;
}

export interface MsgRegisterToGroupResponse {
}

export interface MsgDeregisterFromGroup {
  creator: string;
  groupId: Long;
  denom: string;
}

export interface MsgDeregisterFromGroupResponse {
}

export interface MsgDepositToGroup {
  creator: string;
  /** the token and amount to deposit into it's group */
  depositCoin?: Coin;
}

export interface MsgDepositToGroupResponse {
  groupId: Long;
  tokensDeposited?: Coin;
  tokensMinted?: Coin;
}

export interface MsgWithdrawFromGroup {
  creator: string;
  /** the amount and denom to withdraw into */
  sourceCoin?: Coin;
}

export interface MsgWithdrawFromGroupResponse {
  groupId: Long;
  tokensBurnt?: Coin;
  tokensWithdrawn?: Coin;
}

export interface MsgUpdateGroupedTokenConfig {
  creator: string;
  denom: string;
  updateGroupedTokenConfigParams?: UpdateGroupedTokenConfigParams;
}

export interface UpdateGroupedTokenConfigParams {
  isActive?: boolean;
}

export interface MsgUpdateGroupedTokenConfigResponse {
  groupedTokenConfig?: GroupedTokenConfig;
}

function createBaseMsgCreateToken(): MsgCreateToken {
  return { creator: "", createTokenParams: undefined };
}

export const MsgCreateToken = {
  encode(message: MsgCreateToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.createTokenParams !== undefined) {
      CreateTokenParams.encode(message.createTokenParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateToken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.createTokenParams = CreateTokenParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateToken {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      createTokenParams: isSet(object.createTokenParams)
        ? CreateTokenParams.fromJSON(object.createTokenParams)
        : undefined,
    };
  },

  toJSON(message: MsgCreateToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.createTokenParams !== undefined && (obj.createTokenParams = message.createTokenParams
      ? CreateTokenParams.toJSON(message.createTokenParams)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgCreateToken>): MsgCreateToken {
    return MsgCreateToken.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreateToken>): MsgCreateToken {
    const message = createBaseMsgCreateToken();
    message.creator = object.creator ?? "";
    message.createTokenParams = (object.createTokenParams !== undefined && object.createTokenParams !== null)
      ? CreateTokenParams.fromPartial(object.createTokenParams)
      : undefined;
    return message;
  },
};

function createBaseCreateTokenParams(): CreateTokenParams {
  return {
    creator: "",
    name: "",
    symbol: "",
    decimals: Long.ZERO,
    chainId: Long.UZERO,
    bridgeId: Long.UZERO,
    bridgeAddress: "",
    tokenAddress: "",
  };
}

export const CreateTokenParams = {
  encode(message: CreateTokenParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTokenParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.symbol = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.decimals = reader.int64() as Long;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.chainId = reader.uint64() as Long;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.bridgeId = reader.uint64() as Long;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.bridgeAddress = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.tokenAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateTokenParams {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      decimals: isSet(object.decimals) ? Long.fromValue(object.decimals) : Long.ZERO,
      chainId: isSet(object.chainId) ? Long.fromValue(object.chainId) : Long.UZERO,
      bridgeId: isSet(object.bridgeId) ? Long.fromValue(object.bridgeId) : Long.UZERO,
      bridgeAddress: isSet(object.bridgeAddress) ? String(object.bridgeAddress) : "",
      tokenAddress: isSet(object.tokenAddress) ? String(object.tokenAddress) : "",
    };
  },

  toJSON(message: CreateTokenParams): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.decimals !== undefined && (obj.decimals = (message.decimals || Long.ZERO).toString());
    message.chainId !== undefined && (obj.chainId = (message.chainId || Long.UZERO).toString());
    message.bridgeId !== undefined && (obj.bridgeId = (message.bridgeId || Long.UZERO).toString());
    message.bridgeAddress !== undefined && (obj.bridgeAddress = message.bridgeAddress);
    message.tokenAddress !== undefined && (obj.tokenAddress = message.tokenAddress);
    return obj;
  },

  create(base?: DeepPartial<CreateTokenParams>): CreateTokenParams {
    return CreateTokenParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateTokenParams>): CreateTokenParams {
    const message = createBaseCreateTokenParams();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.decimals = (object.decimals !== undefined && object.decimals !== null)
      ? Long.fromValue(object.decimals)
      : Long.ZERO;
    message.chainId = (object.chainId !== undefined && object.chainId !== null)
      ? Long.fromValue(object.chainId)
      : Long.UZERO;
    message.bridgeId = (object.bridgeId !== undefined && object.bridgeId !== null)
      ? Long.fromValue(object.bridgeId)
      : Long.UZERO;
    message.bridgeAddress = object.bridgeAddress ?? "";
    message.tokenAddress = object.tokenAddress ?? "";
    return message;
  },
};

function createBaseMsgCreateTokenResponse(): MsgCreateTokenResponse {
  return { denom: "" };
}

export const MsgCreateTokenResponse = {
  encode(message: MsgCreateTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTokenResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): MsgCreateTokenResponse {
    return { denom: isSet(object.denom) ? String(object.denom) : "" };
  },

  toJSON(message: MsgCreateTokenResponse): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<MsgCreateTokenResponse>): MsgCreateTokenResponse {
    return MsgCreateTokenResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreateTokenResponse>): MsgCreateTokenResponse {
    const message = createBaseMsgCreateTokenResponse();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseMsgCreatePerpetualToken(): MsgCreatePerpetualToken {
  return { creator: "", createPerpetualTokenParams: undefined };
}

export const MsgCreatePerpetualToken = {
  encode(message: MsgCreatePerpetualToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.createPerpetualTokenParams !== undefined) {
      CreatePerpetualTokenParams.encode(message.createPerpetualTokenParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePerpetualToken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePerpetualToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.createPerpetualTokenParams = CreatePerpetualTokenParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePerpetualToken {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      createPerpetualTokenParams: isSet(object.createPerpetualTokenParams)
        ? CreatePerpetualTokenParams.fromJSON(object.createPerpetualTokenParams)
        : undefined,
    };
  },

  toJSON(message: MsgCreatePerpetualToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.createPerpetualTokenParams !== undefined &&
      (obj.createPerpetualTokenParams = message.createPerpetualTokenParams
        ? CreatePerpetualTokenParams.toJSON(message.createPerpetualTokenParams)
        : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgCreatePerpetualToken>): MsgCreatePerpetualToken {
    return MsgCreatePerpetualToken.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreatePerpetualToken>): MsgCreatePerpetualToken {
    const message = createBaseMsgCreatePerpetualToken();
    message.creator = object.creator ?? "";
    message.createPerpetualTokenParams =
      (object.createPerpetualTokenParams !== undefined && object.createPerpetualTokenParams !== null)
        ? CreatePerpetualTokenParams.fromPartial(object.createPerpetualTokenParams)
        : undefined;
    return message;
  },
};

function createBaseCreatePerpetualTokenParams(): CreatePerpetualTokenParams {
  return { creator: "", name: "", symbol: "", decimals: Long.ZERO };
}

export const CreatePerpetualTokenParams = {
  encode(message: CreatePerpetualTokenParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePerpetualTokenParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePerpetualTokenParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.symbol = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.decimals = reader.int64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreatePerpetualTokenParams {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      decimals: isSet(object.decimals) ? Long.fromValue(object.decimals) : Long.ZERO,
    };
  },

  toJSON(message: CreatePerpetualTokenParams): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.decimals !== undefined && (obj.decimals = (message.decimals || Long.ZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<CreatePerpetualTokenParams>): CreatePerpetualTokenParams {
    return CreatePerpetualTokenParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreatePerpetualTokenParams>): CreatePerpetualTokenParams {
    const message = createBaseCreatePerpetualTokenParams();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.decimals = (object.decimals !== undefined && object.decimals !== null)
      ? Long.fromValue(object.decimals)
      : Long.ZERO;
    return message;
  },
};

function createBaseMsgCreatePerpetualTokenResponse(): MsgCreatePerpetualTokenResponse {
  return { denom: "" };
}

export const MsgCreatePerpetualTokenResponse = {
  encode(message: MsgCreatePerpetualTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePerpetualTokenResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePerpetualTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): MsgCreatePerpetualTokenResponse {
    return { denom: isSet(object.denom) ? String(object.denom) : "" };
  },

  toJSON(message: MsgCreatePerpetualTokenResponse): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<MsgCreatePerpetualTokenResponse>): MsgCreatePerpetualTokenResponse {
    return MsgCreatePerpetualTokenResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreatePerpetualTokenResponse>): MsgCreatePerpetualTokenResponse {
    const message = createBaseMsgCreatePerpetualTokenResponse();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseMsgSyncToken(): MsgSyncToken {
  return { syncer: "", denom: "" };
}

export const MsgSyncToken = {
  encode(message: MsgSyncToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.syncer !== "") {
      writer.uint32(10).string(message.syncer);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSyncToken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSyncToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.syncer = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): MsgSyncToken {
    return {
      syncer: isSet(object.syncer) ? String(object.syncer) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: MsgSyncToken): unknown {
    const obj: any = {};
    message.syncer !== undefined && (obj.syncer = message.syncer);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<MsgSyncToken>): MsgSyncToken {
    return MsgSyncToken.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSyncToken>): MsgSyncToken {
    const message = createBaseMsgSyncToken();
    message.syncer = object.syncer ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseMsgSyncTokenResponse(): MsgSyncTokenResponse {
  return {};
}

export const MsgSyncTokenResponse = {
  encode(_: MsgSyncTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSyncTokenResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSyncTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgSyncTokenResponse {
    return {};
  },

  toJSON(_: MsgSyncTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSyncTokenResponse>): MsgSyncTokenResponse {
    return MsgSyncTokenResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgSyncTokenResponse>): MsgSyncTokenResponse {
    const message = createBaseMsgSyncTokenResponse();
    return message;
  },
};

function createBaseMsgMintToken(): MsgMintToken {
  return { creator: "", denom: "", amount: "", to: "" };
}

export const MsgMintToken = {
  encode(message: MsgMintToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.to = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgMintToken {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      to: isSet(object.to) ? String(object.to) : "",
    };
  },

  toJSON(message: MsgMintToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.to !== undefined && (obj.to = message.to);
    return obj;
  },

  create(base?: DeepPartial<MsgMintToken>): MsgMintToken {
    return MsgMintToken.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgMintToken>): MsgMintToken {
    const message = createBaseMsgMintToken();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.to = object.to ?? "";
    return message;
  },
};

function createBaseMsgMintTokenResponse(): MsgMintTokenResponse {
  return {};
}

export const MsgMintTokenResponse = {
  encode(_: MsgMintTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintTokenResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgMintTokenResponse {
    return {};
  },

  toJSON(_: MsgMintTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgMintTokenResponse>): MsgMintTokenResponse {
    return MsgMintTokenResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgMintTokenResponse>): MsgMintTokenResponse {
    const message = createBaseMsgMintTokenResponse();
    return message;
  },
};

function createBaseMsgBindToken(): MsgBindToken {
  return { creator: "", sourceDenom: "", wrappedDenom: "" };
}

export const MsgBindToken = {
  encode(message: MsgBindToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBindToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sourceDenom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.wrappedDenom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgBindToken {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      sourceDenom: isSet(object.sourceDenom) ? String(object.sourceDenom) : "",
      wrappedDenom: isSet(object.wrappedDenom) ? String(object.wrappedDenom) : "",
    };
  },

  toJSON(message: MsgBindToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.sourceDenom !== undefined && (obj.sourceDenom = message.sourceDenom);
    message.wrappedDenom !== undefined && (obj.wrappedDenom = message.wrappedDenom);
    return obj;
  },

  create(base?: DeepPartial<MsgBindToken>): MsgBindToken {
    return MsgBindToken.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgBindToken>): MsgBindToken {
    const message = createBaseMsgBindToken();
    message.creator = object.creator ?? "";
    message.sourceDenom = object.sourceDenom ?? "";
    message.wrappedDenom = object.wrappedDenom ?? "";
    return message;
  },
};

function createBaseMsgBindTokenResponse(): MsgBindTokenResponse {
  return {};
}

export const MsgBindTokenResponse = {
  encode(_: MsgBindTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBindTokenResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBindTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgBindTokenResponse {
    return {};
  },

  toJSON(_: MsgBindTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgBindTokenResponse>): MsgBindTokenResponse {
    return MsgBindTokenResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgBindTokenResponse>): MsgBindTokenResponse {
    const message = createBaseMsgBindTokenResponse();
    return message;
  },
};

function createBaseMsgUnbindToken(): MsgUnbindToken {
  return { creator: "", wrappedDenom: "" };
}

export const MsgUnbindToken = {
  encode(message: MsgUnbindToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.wrappedDenom !== "") {
      writer.uint32(18).string(message.wrappedDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnbindToken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnbindToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.wrappedDenom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUnbindToken {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      wrappedDenom: isSet(object.wrappedDenom) ? String(object.wrappedDenom) : "",
    };
  },

  toJSON(message: MsgUnbindToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.wrappedDenom !== undefined && (obj.wrappedDenom = message.wrappedDenom);
    return obj;
  },

  create(base?: DeepPartial<MsgUnbindToken>): MsgUnbindToken {
    return MsgUnbindToken.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUnbindToken>): MsgUnbindToken {
    const message = createBaseMsgUnbindToken();
    message.creator = object.creator ?? "";
    message.wrappedDenom = object.wrappedDenom ?? "";
    return message;
  },
};

function createBaseMsgUnbindTokenResponse(): MsgUnbindTokenResponse {
  return {};
}

export const MsgUnbindTokenResponse = {
  encode(_: MsgUnbindTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnbindTokenResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnbindTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUnbindTokenResponse {
    return {};
  },

  toJSON(_: MsgUnbindTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUnbindTokenResponse>): MsgUnbindTokenResponse {
    return MsgUnbindTokenResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUnbindTokenResponse>): MsgUnbindTokenResponse {
    const message = createBaseMsgUnbindTokenResponse();
    return message;
  },
};

function createBaseMsgLinkToken(): MsgLinkToken {
  return { creator: "", denom: "", bridgeAddress: "" };
}

export const MsgLinkToken = {
  encode(message: MsgLinkToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLinkToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.bridgeAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgLinkToken {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      bridgeAddress: isSet(object.bridgeAddress) ? String(object.bridgeAddress) : "",
    };
  },

  toJSON(message: MsgLinkToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.bridgeAddress !== undefined && (obj.bridgeAddress = message.bridgeAddress);
    return obj;
  },

  create(base?: DeepPartial<MsgLinkToken>): MsgLinkToken {
    return MsgLinkToken.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgLinkToken>): MsgLinkToken {
    const message = createBaseMsgLinkToken();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.bridgeAddress = object.bridgeAddress ?? "";
    return message;
  },
};

function createBaseMsgLinkTokenResponse(): MsgLinkTokenResponse {
  return {};
}

export const MsgLinkTokenResponse = {
  encode(_: MsgLinkTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLinkTokenResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLinkTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgLinkTokenResponse {
    return {};
  },

  toJSON(_: MsgLinkTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgLinkTokenResponse>): MsgLinkTokenResponse {
    return MsgLinkTokenResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgLinkTokenResponse>): MsgLinkTokenResponse {
    const message = createBaseMsgLinkTokenResponse();
    return message;
  },
};

function createBaseMsgWithdraw(): MsgWithdraw {
  return { creator: "", toAddress: "", denom: "", amount: "", feeAmount: "", feeAddress: "", feeDenom: "" };
}

export const MsgWithdraw = {
  encode(message: MsgWithdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.feeDenom !== "") {
      writer.uint32(58).string(message.feeDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdraw {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdraw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.toAddress = reader.string();
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

          message.feeAmount = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.feeAddress = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.feeDenom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgWithdraw {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      toAddress: isSet(object.toAddress) ? String(object.toAddress) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      feeAmount: isSet(object.feeAmount) ? String(object.feeAmount) : "",
      feeAddress: isSet(object.feeAddress) ? String(object.feeAddress) : "",
      feeDenom: isSet(object.feeDenom) ? String(object.feeDenom) : "",
    };
  },

  toJSON(message: MsgWithdraw): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.feeAmount !== undefined && (obj.feeAmount = message.feeAmount);
    message.feeAddress !== undefined && (obj.feeAddress = message.feeAddress);
    message.feeDenom !== undefined && (obj.feeDenom = message.feeDenom);
    return obj;
  },

  create(base?: DeepPartial<MsgWithdraw>): MsgWithdraw {
    return MsgWithdraw.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgWithdraw>): MsgWithdraw {
    const message = createBaseMsgWithdraw();
    message.creator = object.creator ?? "";
    message.toAddress = object.toAddress ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.feeAmount = object.feeAmount ?? "";
    message.feeAddress = object.feeAddress ?? "";
    message.feeDenom = object.feeDenom ?? "";
    return message;
  },
};

function createBaseMsgWithdrawResponse(): MsgWithdrawResponse {
  return {};
}

export const MsgWithdrawResponse = {
  encode(_: MsgWithdrawResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgWithdrawResponse {
    return {};
  },

  toJSON(_: MsgWithdrawResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgWithdrawResponse>): MsgWithdrawResponse {
    return MsgWithdrawResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgWithdrawResponse>): MsgWithdrawResponse {
    const message = createBaseMsgWithdrawResponse();
    return message;
  },
};

function createBaseMsgAuthorizeBridge(): MsgAuthorizeBridge {
  return { creator: "", bridgeId: Long.UZERO, chainId: Long.UZERO, chainName: "" };
}

export const MsgAuthorizeBridge = {
  encode(message: MsgAuthorizeBridge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAuthorizeBridge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.bridgeId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.chainId = reader.uint64() as Long;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.chainName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAuthorizeBridge {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      bridgeId: isSet(object.bridgeId) ? Long.fromValue(object.bridgeId) : Long.UZERO,
      chainId: isSet(object.chainId) ? Long.fromValue(object.chainId) : Long.UZERO,
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
    };
  },

  toJSON(message: MsgAuthorizeBridge): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.bridgeId !== undefined && (obj.bridgeId = (message.bridgeId || Long.UZERO).toString());
    message.chainId !== undefined && (obj.chainId = (message.chainId || Long.UZERO).toString());
    message.chainName !== undefined && (obj.chainName = message.chainName);
    return obj;
  },

  create(base?: DeepPartial<MsgAuthorizeBridge>): MsgAuthorizeBridge {
    return MsgAuthorizeBridge.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgAuthorizeBridge>): MsgAuthorizeBridge {
    const message = createBaseMsgAuthorizeBridge();
    message.creator = object.creator ?? "";
    message.bridgeId = (object.bridgeId !== undefined && object.bridgeId !== null)
      ? Long.fromValue(object.bridgeId)
      : Long.UZERO;
    message.chainId = (object.chainId !== undefined && object.chainId !== null)
      ? Long.fromValue(object.chainId)
      : Long.UZERO;
    message.chainName = object.chainName ?? "";
    return message;
  },
};

function createBaseMsgAuthorizeBridgeResponse(): MsgAuthorizeBridgeResponse {
  return { id: "", bridge: undefined };
}

export const MsgAuthorizeBridgeResponse = {
  encode(message: MsgAuthorizeBridgeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.bridge !== undefined) {
      Bridge.encode(message.bridge, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAuthorizeBridgeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAuthorizeBridgeResponse();
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

          message.bridge = Bridge.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAuthorizeBridgeResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      bridge: isSet(object.bridge) ? Bridge.fromJSON(object.bridge) : undefined,
    };
  },

  toJSON(message: MsgAuthorizeBridgeResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.bridge !== undefined && (obj.bridge = message.bridge ? Bridge.toJSON(message.bridge) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgAuthorizeBridgeResponse>): MsgAuthorizeBridgeResponse {
    return MsgAuthorizeBridgeResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgAuthorizeBridgeResponse>): MsgAuthorizeBridgeResponse {
    const message = createBaseMsgAuthorizeBridgeResponse();
    message.id = object.id ?? "";
    message.bridge = (object.bridge !== undefined && object.bridge !== null)
      ? Bridge.fromPartial(object.bridge)
      : undefined;
    return message;
  },
};

function createBaseMsgDeauthorizeBridge(): MsgDeauthorizeBridge {
  return { initiator: "", bridgeId: Long.UZERO, chainId: Long.UZERO };
}

export const MsgDeauthorizeBridge = {
  encode(message: MsgDeauthorizeBridge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeauthorizeBridge {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeauthorizeBridge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.initiator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.bridgeId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.chainId = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgDeauthorizeBridge {
    return {
      initiator: isSet(object.initiator) ? String(object.initiator) : "",
      bridgeId: isSet(object.bridgeId) ? Long.fromValue(object.bridgeId) : Long.UZERO,
      chainId: isSet(object.chainId) ? Long.fromValue(object.chainId) : Long.UZERO,
    };
  },

  toJSON(message: MsgDeauthorizeBridge): unknown {
    const obj: any = {};
    message.initiator !== undefined && (obj.initiator = message.initiator);
    message.bridgeId !== undefined && (obj.bridgeId = (message.bridgeId || Long.UZERO).toString());
    message.chainId !== undefined && (obj.chainId = (message.chainId || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<MsgDeauthorizeBridge>): MsgDeauthorizeBridge {
    return MsgDeauthorizeBridge.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgDeauthorizeBridge>): MsgDeauthorizeBridge {
    const message = createBaseMsgDeauthorizeBridge();
    message.initiator = object.initiator ?? "";
    message.bridgeId = (object.bridgeId !== undefined && object.bridgeId !== null)
      ? Long.fromValue(object.bridgeId)
      : Long.UZERO;
    message.chainId = (object.chainId !== undefined && object.chainId !== null)
      ? Long.fromValue(object.chainId)
      : Long.UZERO;
    return message;
  },
};

function createBaseMsgDeauthorizeBridgeResponse(): MsgDeauthorizeBridgeResponse {
  return { id: "", bridge: undefined };
}

export const MsgDeauthorizeBridgeResponse = {
  encode(message: MsgDeauthorizeBridgeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.bridge !== undefined) {
      Bridge.encode(message.bridge, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeauthorizeBridgeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeauthorizeBridgeResponse();
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

          message.bridge = Bridge.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgDeauthorizeBridgeResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      bridge: isSet(object.bridge) ? Bridge.fromJSON(object.bridge) : undefined,
    };
  },

  toJSON(message: MsgDeauthorizeBridgeResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.bridge !== undefined && (obj.bridge = message.bridge ? Bridge.toJSON(message.bridge) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgDeauthorizeBridgeResponse>): MsgDeauthorizeBridgeResponse {
    return MsgDeauthorizeBridgeResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgDeauthorizeBridgeResponse>): MsgDeauthorizeBridgeResponse {
    const message = createBaseMsgDeauthorizeBridgeResponse();
    message.id = object.id ?? "";
    message.bridge = (object.bridge !== undefined && object.bridge !== null)
      ? Bridge.fromPartial(object.bridge)
      : undefined;
    return message;
  },
};

function createBaseMsgEditBridgeName(): MsgEditBridgeName {
  return { initiator: "", bridgeId: Long.UZERO, chainId: Long.UZERO, newBridgeName: "" };
}

export const MsgEditBridgeName = {
  encode(message: MsgEditBridgeName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditBridgeName();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.initiator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.bridgeId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.chainId = reader.uint64() as Long;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.newBridgeName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgEditBridgeName {
    return {
      initiator: isSet(object.initiator) ? String(object.initiator) : "",
      bridgeId: isSet(object.bridgeId) ? Long.fromValue(object.bridgeId) : Long.UZERO,
      chainId: isSet(object.chainId) ? Long.fromValue(object.chainId) : Long.UZERO,
      newBridgeName: isSet(object.newBridgeName) ? String(object.newBridgeName) : "",
    };
  },

  toJSON(message: MsgEditBridgeName): unknown {
    const obj: any = {};
    message.initiator !== undefined && (obj.initiator = message.initiator);
    message.bridgeId !== undefined && (obj.bridgeId = (message.bridgeId || Long.UZERO).toString());
    message.chainId !== undefined && (obj.chainId = (message.chainId || Long.UZERO).toString());
    message.newBridgeName !== undefined && (obj.newBridgeName = message.newBridgeName);
    return obj;
  },

  create(base?: DeepPartial<MsgEditBridgeName>): MsgEditBridgeName {
    return MsgEditBridgeName.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgEditBridgeName>): MsgEditBridgeName {
    const message = createBaseMsgEditBridgeName();
    message.initiator = object.initiator ?? "";
    message.bridgeId = (object.bridgeId !== undefined && object.bridgeId !== null)
      ? Long.fromValue(object.bridgeId)
      : Long.UZERO;
    message.chainId = (object.chainId !== undefined && object.chainId !== null)
      ? Long.fromValue(object.chainId)
      : Long.UZERO;
    message.newBridgeName = object.newBridgeName ?? "";
    return message;
  },
};

function createBaseMsgEditBridgeNameResponse(): MsgEditBridgeNameResponse {
  return { id: "", bridge: undefined };
}

export const MsgEditBridgeNameResponse = {
  encode(message: MsgEditBridgeNameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.bridge !== undefined) {
      Bridge.encode(message.bridge, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditBridgeNameResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditBridgeNameResponse();
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

          message.bridge = Bridge.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgEditBridgeNameResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      bridge: isSet(object.bridge) ? Bridge.fromJSON(object.bridge) : undefined,
    };
  },

  toJSON(message: MsgEditBridgeNameResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.bridge !== undefined && (obj.bridge = message.bridge ? Bridge.toJSON(message.bridge) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgEditBridgeNameResponse>): MsgEditBridgeNameResponse {
    return MsgEditBridgeNameResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgEditBridgeNameResponse>): MsgEditBridgeNameResponse {
    const message = createBaseMsgEditBridgeNameResponse();
    message.id = object.id ?? "";
    message.bridge = (object.bridge !== undefined && object.bridge !== null)
      ? Bridge.fromPartial(object.bridge)
      : undefined;
    return message;
  },
};

function createBaseMsgRemoveBridge(): MsgRemoveBridge {
  return { initiator: "", bridgeId: Long.UZERO, chainId: Long.UZERO };
}

export const MsgRemoveBridge = {
  encode(message: MsgRemoveBridge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveBridge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.initiator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.bridgeId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.chainId = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveBridge {
    return {
      initiator: isSet(object.initiator) ? String(object.initiator) : "",
      bridgeId: isSet(object.bridgeId) ? Long.fromValue(object.bridgeId) : Long.UZERO,
      chainId: isSet(object.chainId) ? Long.fromValue(object.chainId) : Long.UZERO,
    };
  },

  toJSON(message: MsgRemoveBridge): unknown {
    const obj: any = {};
    message.initiator !== undefined && (obj.initiator = message.initiator);
    message.bridgeId !== undefined && (obj.bridgeId = (message.bridgeId || Long.UZERO).toString());
    message.chainId !== undefined && (obj.chainId = (message.chainId || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveBridge>): MsgRemoveBridge {
    return MsgRemoveBridge.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRemoveBridge>): MsgRemoveBridge {
    const message = createBaseMsgRemoveBridge();
    message.initiator = object.initiator ?? "";
    message.bridgeId = (object.bridgeId !== undefined && object.bridgeId !== null)
      ? Long.fromValue(object.bridgeId)
      : Long.UZERO;
    message.chainId = (object.chainId !== undefined && object.chainId !== null)
      ? Long.fromValue(object.chainId)
      : Long.UZERO;
    return message;
  },
};

function createBaseMsgRemoveBridgeResponse(): MsgRemoveBridgeResponse {
  return {};
}

export const MsgRemoveBridgeResponse = {
  encode(_: MsgRemoveBridgeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveBridgeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveBridgeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgRemoveBridgeResponse {
    return {};
  },

  toJSON(_: MsgRemoveBridgeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveBridgeResponse>): MsgRemoveBridgeResponse {
    return MsgRemoveBridgeResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgRemoveBridgeResponse>): MsgRemoveBridgeResponse {
    const message = createBaseMsgRemoveBridgeResponse();
    return message;
  },
};

function createBaseMsgUpdateToken(): MsgUpdateToken {
  return { updater: "", denom: "", updateTokenParams: undefined };
}

export const MsgUpdateToken = {
  encode(message: MsgUpdateToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.updater !== "") {
      writer.uint32(10).string(message.updater);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.updateTokenParams !== undefined) {
      UpdateTokenParams.encode(message.updateTokenParams, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateToken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.updater = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.updateTokenParams = UpdateTokenParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateToken {
    return {
      updater: isSet(object.updater) ? String(object.updater) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      updateTokenParams: isSet(object.updateTokenParams)
        ? UpdateTokenParams.fromJSON(object.updateTokenParams)
        : undefined,
    };
  },

  toJSON(message: MsgUpdateToken): unknown {
    const obj: any = {};
    message.updater !== undefined && (obj.updater = message.updater);
    message.denom !== undefined && (obj.denom = message.denom);
    message.updateTokenParams !== undefined && (obj.updateTokenParams = message.updateTokenParams
      ? UpdateTokenParams.toJSON(message.updateTokenParams)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateToken>): MsgUpdateToken {
    return MsgUpdateToken.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateToken>): MsgUpdateToken {
    const message = createBaseMsgUpdateToken();
    message.updater = object.updater ?? "";
    message.denom = object.denom ?? "";
    message.updateTokenParams = (object.updateTokenParams !== undefined && object.updateTokenParams !== null)
      ? UpdateTokenParams.fromPartial(object.updateTokenParams)
      : undefined;
    return message;
  },
};

function createBaseUpdateTokenParams(): UpdateTokenParams {
  return { isActive: undefined, name: undefined, symbol: undefined, decimals: undefined };
}

export const UpdateTokenParams = {
  encode(message: UpdateTokenParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isActive !== undefined) {
      BoolValue.encode({ value: message.isActive! }, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== undefined) {
      StringValue.encode({ value: message.name! }, writer.uint32(26).fork()).ldelim();
    }
    if (message.symbol !== undefined) {
      StringValue.encode({ value: message.symbol! }, writer.uint32(34).fork()).ldelim();
    }
    if (message.decimals !== undefined) {
      Int64Value.encode({ value: message.decimals! }, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTokenParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTokenParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.isActive = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.symbol = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.decimals = Int64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateTokenParams {
    return {
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      symbol: isSet(object.symbol) ? String(object.symbol) : undefined,
      decimals: isSet(object.decimals) ? Long.fromValue(object.decimals) : undefined,
    };
  },

  toJSON(message: UpdateTokenParams): unknown {
    const obj: any = {};
    message.isActive !== undefined && (obj.isActive = message.isActive);
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.decimals !== undefined && (obj.decimals = message.decimals);
    return obj;
  },

  create(base?: DeepPartial<UpdateTokenParams>): UpdateTokenParams {
    return UpdateTokenParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateTokenParams>): UpdateTokenParams {
    const message = createBaseUpdateTokenParams();
    message.isActive = object.isActive ?? undefined;
    message.name = object.name ?? undefined;
    message.symbol = object.symbol ?? undefined;
    message.decimals = (object.decimals !== undefined && object.decimals !== null)
      ? Long.fromValue(object.decimals)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateTokenResponse(): MsgUpdateTokenResponse {
  return {};
}

export const MsgUpdateTokenResponse = {
  encode(_: MsgUpdateTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateTokenResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateTokenResponse {
    return {};
  },

  toJSON(_: MsgUpdateTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateTokenResponse>): MsgUpdateTokenResponse {
    return MsgUpdateTokenResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdateTokenResponse>): MsgUpdateTokenResponse {
    const message = createBaseMsgUpdateTokenResponse();
    return message;
  },
};

function createBaseMsgDeprecateToken(): MsgDeprecateToken {
  return { deprecator: "", denom: "" };
}

export const MsgDeprecateToken = {
  encode(message: MsgDeprecateToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deprecator !== "") {
      writer.uint32(10).string(message.deprecator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeprecateToken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeprecateToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deprecator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): MsgDeprecateToken {
    return {
      deprecator: isSet(object.deprecator) ? String(object.deprecator) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: MsgDeprecateToken): unknown {
    const obj: any = {};
    message.deprecator !== undefined && (obj.deprecator = message.deprecator);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<MsgDeprecateToken>): MsgDeprecateToken {
    return MsgDeprecateToken.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgDeprecateToken>): MsgDeprecateToken {
    const message = createBaseMsgDeprecateToken();
    message.deprecator = object.deprecator ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseMsgDeprecateTokenResponse(): MsgDeprecateTokenResponse {
  return {};
}

export const MsgDeprecateTokenResponse = {
  encode(_: MsgDeprecateTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeprecateTokenResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeprecateTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgDeprecateTokenResponse {
    return {};
  },

  toJSON(_: MsgDeprecateTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgDeprecateTokenResponse>): MsgDeprecateTokenResponse {
    return MsgDeprecateTokenResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgDeprecateTokenResponse>): MsgDeprecateTokenResponse {
    const message = createBaseMsgDeprecateTokenResponse();
    return message;
  },
};

function createBaseMsgAddBridgeAddress(): MsgAddBridgeAddress {
  return { creator: "", chainId: Long.UZERO, bridgeId: Long.UZERO, bridgeAddress: "" };
}

export const MsgAddBridgeAddress = {
  encode(message: MsgAddBridgeAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.chainId.isZero()) {
      writer.uint32(16).uint64(message.chainId);
    }
    if (!message.bridgeId.isZero()) {
      writer.uint32(24).uint64(message.bridgeId);
    }
    if (message.bridgeAddress !== "") {
      writer.uint32(34).string(message.bridgeAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddBridgeAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddBridgeAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.chainId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.bridgeId = reader.uint64() as Long;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.bridgeAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAddBridgeAddress {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chainId: isSet(object.chainId) ? Long.fromValue(object.chainId) : Long.UZERO,
      bridgeId: isSet(object.bridgeId) ? Long.fromValue(object.bridgeId) : Long.UZERO,
      bridgeAddress: isSet(object.bridgeAddress) ? String(object.bridgeAddress) : "",
    };
  },

  toJSON(message: MsgAddBridgeAddress): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chainId !== undefined && (obj.chainId = (message.chainId || Long.UZERO).toString());
    message.bridgeId !== undefined && (obj.bridgeId = (message.bridgeId || Long.UZERO).toString());
    message.bridgeAddress !== undefined && (obj.bridgeAddress = message.bridgeAddress);
    return obj;
  },

  create(base?: DeepPartial<MsgAddBridgeAddress>): MsgAddBridgeAddress {
    return MsgAddBridgeAddress.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgAddBridgeAddress>): MsgAddBridgeAddress {
    const message = createBaseMsgAddBridgeAddress();
    message.creator = object.creator ?? "";
    message.chainId = (object.chainId !== undefined && object.chainId !== null)
      ? Long.fromValue(object.chainId)
      : Long.UZERO;
    message.bridgeId = (object.bridgeId !== undefined && object.bridgeId !== null)
      ? Long.fromValue(object.bridgeId)
      : Long.UZERO;
    message.bridgeAddress = object.bridgeAddress ?? "";
    return message;
  },
};

function createBaseMsgAddBridgeAddressResponse(): MsgAddBridgeAddressResponse {
  return { id: "", bridge: undefined };
}

export const MsgAddBridgeAddressResponse = {
  encode(message: MsgAddBridgeAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.bridge !== undefined) {
      Bridge.encode(message.bridge, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddBridgeAddressResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddBridgeAddressResponse();
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

          message.bridge = Bridge.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAddBridgeAddressResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      bridge: isSet(object.bridge) ? Bridge.fromJSON(object.bridge) : undefined,
    };
  },

  toJSON(message: MsgAddBridgeAddressResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.bridge !== undefined && (obj.bridge = message.bridge ? Bridge.toJSON(message.bridge) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgAddBridgeAddressResponse>): MsgAddBridgeAddressResponse {
    return MsgAddBridgeAddressResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgAddBridgeAddressResponse>): MsgAddBridgeAddressResponse {
    const message = createBaseMsgAddBridgeAddressResponse();
    message.id = object.id ?? "";
    message.bridge = (object.bridge !== undefined && object.bridge !== null)
      ? Bridge.fromPartial(object.bridge)
      : undefined;
    return message;
  },
};

function createBaseMsgRemoveBridgeAddress(): MsgRemoveBridgeAddress {
  return { initiator: "", chainId: Long.UZERO, bridgeId: Long.UZERO, bridgeAddress: "" };
}

export const MsgRemoveBridgeAddress = {
  encode(message: MsgRemoveBridgeAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.initiator !== "") {
      writer.uint32(10).string(message.initiator);
    }
    if (!message.chainId.isZero()) {
      writer.uint32(16).uint64(message.chainId);
    }
    if (!message.bridgeId.isZero()) {
      writer.uint32(24).uint64(message.bridgeId);
    }
    if (message.bridgeAddress !== "") {
      writer.uint32(34).string(message.bridgeAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveBridgeAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveBridgeAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.initiator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.chainId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.bridgeId = reader.uint64() as Long;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.bridgeAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveBridgeAddress {
    return {
      initiator: isSet(object.initiator) ? String(object.initiator) : "",
      chainId: isSet(object.chainId) ? Long.fromValue(object.chainId) : Long.UZERO,
      bridgeId: isSet(object.bridgeId) ? Long.fromValue(object.bridgeId) : Long.UZERO,
      bridgeAddress: isSet(object.bridgeAddress) ? String(object.bridgeAddress) : "",
    };
  },

  toJSON(message: MsgRemoveBridgeAddress): unknown {
    const obj: any = {};
    message.initiator !== undefined && (obj.initiator = message.initiator);
    message.chainId !== undefined && (obj.chainId = (message.chainId || Long.UZERO).toString());
    message.bridgeId !== undefined && (obj.bridgeId = (message.bridgeId || Long.UZERO).toString());
    message.bridgeAddress !== undefined && (obj.bridgeAddress = message.bridgeAddress);
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveBridgeAddress>): MsgRemoveBridgeAddress {
    return MsgRemoveBridgeAddress.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRemoveBridgeAddress>): MsgRemoveBridgeAddress {
    const message = createBaseMsgRemoveBridgeAddress();
    message.initiator = object.initiator ?? "";
    message.chainId = (object.chainId !== undefined && object.chainId !== null)
      ? Long.fromValue(object.chainId)
      : Long.UZERO;
    message.bridgeId = (object.bridgeId !== undefined && object.bridgeId !== null)
      ? Long.fromValue(object.bridgeId)
      : Long.UZERO;
    message.bridgeAddress = object.bridgeAddress ?? "";
    return message;
  },
};

function createBaseMsgRemoveBridgeAddressResponse(): MsgRemoveBridgeAddressResponse {
  return { id: "", bridge: undefined };
}

export const MsgRemoveBridgeAddressResponse = {
  encode(message: MsgRemoveBridgeAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.bridge !== undefined) {
      Bridge.encode(message.bridge, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveBridgeAddressResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveBridgeAddressResponse();
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

          message.bridge = Bridge.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveBridgeAddressResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      bridge: isSet(object.bridge) ? Bridge.fromJSON(object.bridge) : undefined,
    };
  },

  toJSON(message: MsgRemoveBridgeAddressResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.bridge !== undefined && (obj.bridge = message.bridge ? Bridge.toJSON(message.bridge) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveBridgeAddressResponse>): MsgRemoveBridgeAddressResponse {
    return MsgRemoveBridgeAddressResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRemoveBridgeAddressResponse>): MsgRemoveBridgeAddressResponse {
    const message = createBaseMsgRemoveBridgeAddressResponse();
    message.id = object.id ?? "";
    message.bridge = (object.bridge !== undefined && object.bridge !== null)
      ? Bridge.fromPartial(object.bridge)
      : undefined;
    return message;
  },
};

function createBaseMsgCreateGroup(): MsgCreateGroup {
  return { creator: "", name: "", chequeTokenSymbol: "", oracleId: "" };
}

export const MsgCreateGroup = {
  encode(message: MsgCreateGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.chequeTokenSymbol !== "") {
      writer.uint32(26).string(message.chequeTokenSymbol);
    }
    if (message.oracleId !== "") {
      writer.uint32(34).string(message.oracleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.chequeTokenSymbol = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.oracleId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateGroup {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      chequeTokenSymbol: isSet(object.chequeTokenSymbol) ? String(object.chequeTokenSymbol) : "",
      oracleId: isSet(object.oracleId) ? String(object.oracleId) : "",
    };
  },

  toJSON(message: MsgCreateGroup): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.chequeTokenSymbol !== undefined && (obj.chequeTokenSymbol = message.chequeTokenSymbol);
    message.oracleId !== undefined && (obj.oracleId = message.oracleId);
    return obj;
  },

  create(base?: DeepPartial<MsgCreateGroup>): MsgCreateGroup {
    return MsgCreateGroup.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreateGroup>): MsgCreateGroup {
    const message = createBaseMsgCreateGroup();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.chequeTokenSymbol = object.chequeTokenSymbol ?? "";
    message.oracleId = object.oracleId ?? "";
    return message;
  },
};

function createBaseMsgCreateGroupResponse(): MsgCreateGroupResponse {
  return { tokenGroup: undefined };
}

export const MsgCreateGroupResponse = {
  encode(message: MsgCreateGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenGroup !== undefined) {
      TokenGroup.encode(message.tokenGroup, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tokenGroup = TokenGroup.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateGroupResponse {
    return { tokenGroup: isSet(object.tokenGroup) ? TokenGroup.fromJSON(object.tokenGroup) : undefined };
  },

  toJSON(message: MsgCreateGroupResponse): unknown {
    const obj: any = {};
    message.tokenGroup !== undefined &&
      (obj.tokenGroup = message.tokenGroup ? TokenGroup.toJSON(message.tokenGroup) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgCreateGroupResponse>): MsgCreateGroupResponse {
    return MsgCreateGroupResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreateGroupResponse>): MsgCreateGroupResponse {
    const message = createBaseMsgCreateGroupResponse();
    message.tokenGroup = (object.tokenGroup !== undefined && object.tokenGroup !== null)
      ? TokenGroup.fromPartial(object.tokenGroup)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateGroup(): MsgUpdateGroup {
  return { creator: "", groupId: Long.UZERO, updateGroupParams: undefined };
}

export const MsgUpdateGroup = {
  encode(message: MsgUpdateGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.groupId.isZero()) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.updateGroupParams !== undefined) {
      UpdateGroupParams.encode(message.updateGroupParams, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.groupId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.updateGroupParams = UpdateGroupParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateGroup {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
      updateGroupParams: isSet(object.updateGroupParams)
        ? UpdateGroupParams.fromJSON(object.updateGroupParams)
        : undefined,
    };
  },

  toJSON(message: MsgUpdateGroup): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.updateGroupParams !== undefined && (obj.updateGroupParams = message.updateGroupParams
      ? UpdateGroupParams.toJSON(message.updateGroupParams)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateGroup>): MsgUpdateGroup {
    return MsgUpdateGroup.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateGroup>): MsgUpdateGroup {
    const message = createBaseMsgUpdateGroup();
    message.creator = object.creator ?? "";
    message.groupId = (object.groupId !== undefined && object.groupId !== null)
      ? Long.fromValue(object.groupId)
      : Long.UZERO;
    message.updateGroupParams = (object.updateGroupParams !== undefined && object.updateGroupParams !== null)
      ? UpdateGroupParams.fromPartial(object.updateGroupParams)
      : undefined;
    return message;
  },
};

function createBaseUpdateGroupParams(): UpdateGroupParams {
  return { name: undefined };
}

export const UpdateGroupParams = {
  encode(message: UpdateGroupParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined) {
      StringValue.encode({ value: message.name! }, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGroupParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateGroupParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = StringValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateGroupParams {
    return { name: isSet(object.name) ? String(object.name) : undefined };
  },

  toJSON(message: UpdateGroupParams): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create(base?: DeepPartial<UpdateGroupParams>): UpdateGroupParams {
    return UpdateGroupParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateGroupParams>): UpdateGroupParams {
    const message = createBaseUpdateGroupParams();
    message.name = object.name ?? undefined;
    return message;
  },
};

function createBaseMsgUpdateGroupResponse(): MsgUpdateGroupResponse {
  return { tokenGroup: undefined };
}

export const MsgUpdateGroupResponse = {
  encode(message: MsgUpdateGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenGroup !== undefined) {
      TokenGroup.encode(message.tokenGroup, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tokenGroup = TokenGroup.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateGroupResponse {
    return { tokenGroup: isSet(object.tokenGroup) ? TokenGroup.fromJSON(object.tokenGroup) : undefined };
  },

  toJSON(message: MsgUpdateGroupResponse): unknown {
    const obj: any = {};
    message.tokenGroup !== undefined &&
      (obj.tokenGroup = message.tokenGroup ? TokenGroup.toJSON(message.tokenGroup) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateGroupResponse>): MsgUpdateGroupResponse {
    return MsgUpdateGroupResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateGroupResponse>): MsgUpdateGroupResponse {
    const message = createBaseMsgUpdateGroupResponse();
    message.tokenGroup = (object.tokenGroup !== undefined && object.tokenGroup !== null)
      ? TokenGroup.fromPartial(object.tokenGroup)
      : undefined;
    return message;
  },
};

function createBaseMsgRegisterToGroup(): MsgRegisterToGroup {
  return { creator: "", groupId: Long.UZERO, denom: "" };
}

export const MsgRegisterToGroup = {
  encode(message: MsgRegisterToGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.groupId.isZero()) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterToGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterToGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.groupId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): MsgRegisterToGroup {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: MsgRegisterToGroup): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<MsgRegisterToGroup>): MsgRegisterToGroup {
    return MsgRegisterToGroup.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRegisterToGroup>): MsgRegisterToGroup {
    const message = createBaseMsgRegisterToGroup();
    message.creator = object.creator ?? "";
    message.groupId = (object.groupId !== undefined && object.groupId !== null)
      ? Long.fromValue(object.groupId)
      : Long.UZERO;
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseMsgRegisterToGroupResponse(): MsgRegisterToGroupResponse {
  return {};
}

export const MsgRegisterToGroupResponse = {
  encode(_: MsgRegisterToGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterToGroupResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterToGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgRegisterToGroupResponse {
    return {};
  },

  toJSON(_: MsgRegisterToGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgRegisterToGroupResponse>): MsgRegisterToGroupResponse {
    return MsgRegisterToGroupResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgRegisterToGroupResponse>): MsgRegisterToGroupResponse {
    const message = createBaseMsgRegisterToGroupResponse();
    return message;
  },
};

function createBaseMsgDeregisterFromGroup(): MsgDeregisterFromGroup {
  return { creator: "", groupId: Long.UZERO, denom: "" };
}

export const MsgDeregisterFromGroup = {
  encode(message: MsgDeregisterFromGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.groupId.isZero()) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeregisterFromGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeregisterFromGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.groupId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): MsgDeregisterFromGroup {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: MsgDeregisterFromGroup): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<MsgDeregisterFromGroup>): MsgDeregisterFromGroup {
    return MsgDeregisterFromGroup.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgDeregisterFromGroup>): MsgDeregisterFromGroup {
    const message = createBaseMsgDeregisterFromGroup();
    message.creator = object.creator ?? "";
    message.groupId = (object.groupId !== undefined && object.groupId !== null)
      ? Long.fromValue(object.groupId)
      : Long.UZERO;
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseMsgDeregisterFromGroupResponse(): MsgDeregisterFromGroupResponse {
  return {};
}

export const MsgDeregisterFromGroupResponse = {
  encode(_: MsgDeregisterFromGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeregisterFromGroupResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeregisterFromGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgDeregisterFromGroupResponse {
    return {};
  },

  toJSON(_: MsgDeregisterFromGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgDeregisterFromGroupResponse>): MsgDeregisterFromGroupResponse {
    return MsgDeregisterFromGroupResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgDeregisterFromGroupResponse>): MsgDeregisterFromGroupResponse {
    const message = createBaseMsgDeregisterFromGroupResponse();
    return message;
  },
};

function createBaseMsgDepositToGroup(): MsgDepositToGroup {
  return { creator: "", depositCoin: undefined };
}

export const MsgDepositToGroup = {
  encode(message: MsgDepositToGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.depositCoin !== undefined) {
      Coin.encode(message.depositCoin, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositToGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositToGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.depositCoin = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgDepositToGroup {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      depositCoin: isSet(object.depositCoin) ? Coin.fromJSON(object.depositCoin) : undefined,
    };
  },

  toJSON(message: MsgDepositToGroup): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.depositCoin !== undefined &&
      (obj.depositCoin = message.depositCoin ? Coin.toJSON(message.depositCoin) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgDepositToGroup>): MsgDepositToGroup {
    return MsgDepositToGroup.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgDepositToGroup>): MsgDepositToGroup {
    const message = createBaseMsgDepositToGroup();
    message.creator = object.creator ?? "";
    message.depositCoin = (object.depositCoin !== undefined && object.depositCoin !== null)
      ? Coin.fromPartial(object.depositCoin)
      : undefined;
    return message;
  },
};

function createBaseMsgDepositToGroupResponse(): MsgDepositToGroupResponse {
  return { groupId: Long.UZERO, tokensDeposited: undefined, tokensMinted: undefined };
}

export const MsgDepositToGroupResponse = {
  encode(message: MsgDepositToGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.tokensDeposited !== undefined) {
      Coin.encode(message.tokensDeposited, writer.uint32(18).fork()).ldelim();
    }
    if (message.tokensMinted !== undefined) {
      Coin.encode(message.tokensMinted, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositToGroupResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositToGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.groupId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tokensDeposited = Coin.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.tokensMinted = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgDepositToGroupResponse {
    return {
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
      tokensDeposited: isSet(object.tokensDeposited) ? Coin.fromJSON(object.tokensDeposited) : undefined,
      tokensMinted: isSet(object.tokensMinted) ? Coin.fromJSON(object.tokensMinted) : undefined,
    };
  },

  toJSON(message: MsgDepositToGroupResponse): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.tokensDeposited !== undefined &&
      (obj.tokensDeposited = message.tokensDeposited ? Coin.toJSON(message.tokensDeposited) : undefined);
    message.tokensMinted !== undefined &&
      (obj.tokensMinted = message.tokensMinted ? Coin.toJSON(message.tokensMinted) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgDepositToGroupResponse>): MsgDepositToGroupResponse {
    return MsgDepositToGroupResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgDepositToGroupResponse>): MsgDepositToGroupResponse {
    const message = createBaseMsgDepositToGroupResponse();
    message.groupId = (object.groupId !== undefined && object.groupId !== null)
      ? Long.fromValue(object.groupId)
      : Long.UZERO;
    message.tokensDeposited = (object.tokensDeposited !== undefined && object.tokensDeposited !== null)
      ? Coin.fromPartial(object.tokensDeposited)
      : undefined;
    message.tokensMinted = (object.tokensMinted !== undefined && object.tokensMinted !== null)
      ? Coin.fromPartial(object.tokensMinted)
      : undefined;
    return message;
  },
};

function createBaseMsgWithdrawFromGroup(): MsgWithdrawFromGroup {
  return { creator: "", sourceCoin: undefined };
}

export const MsgWithdrawFromGroup = {
  encode(message: MsgWithdrawFromGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.sourceCoin !== undefined) {
      Coin.encode(message.sourceCoin, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawFromGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawFromGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sourceCoin = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawFromGroup {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      sourceCoin: isSet(object.sourceCoin) ? Coin.fromJSON(object.sourceCoin) : undefined,
    };
  },

  toJSON(message: MsgWithdrawFromGroup): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.sourceCoin !== undefined &&
      (obj.sourceCoin = message.sourceCoin ? Coin.toJSON(message.sourceCoin) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgWithdrawFromGroup>): MsgWithdrawFromGroup {
    return MsgWithdrawFromGroup.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgWithdrawFromGroup>): MsgWithdrawFromGroup {
    const message = createBaseMsgWithdrawFromGroup();
    message.creator = object.creator ?? "";
    message.sourceCoin = (object.sourceCoin !== undefined && object.sourceCoin !== null)
      ? Coin.fromPartial(object.sourceCoin)
      : undefined;
    return message;
  },
};

function createBaseMsgWithdrawFromGroupResponse(): MsgWithdrawFromGroupResponse {
  return { groupId: Long.UZERO, tokensBurnt: undefined, tokensWithdrawn: undefined };
}

export const MsgWithdrawFromGroupResponse = {
  encode(message: MsgWithdrawFromGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.tokensBurnt !== undefined) {
      Coin.encode(message.tokensBurnt, writer.uint32(18).fork()).ldelim();
    }
    if (message.tokensWithdrawn !== undefined) {
      Coin.encode(message.tokensWithdrawn, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawFromGroupResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawFromGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.groupId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tokensBurnt = Coin.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.tokensWithdrawn = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawFromGroupResponse {
    return {
      groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
      tokensBurnt: isSet(object.tokensBurnt) ? Coin.fromJSON(object.tokensBurnt) : undefined,
      tokensWithdrawn: isSet(object.tokensWithdrawn) ? Coin.fromJSON(object.tokensWithdrawn) : undefined,
    };
  },

  toJSON(message: MsgWithdrawFromGroupResponse): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.tokensBurnt !== undefined &&
      (obj.tokensBurnt = message.tokensBurnt ? Coin.toJSON(message.tokensBurnt) : undefined);
    message.tokensWithdrawn !== undefined &&
      (obj.tokensWithdrawn = message.tokensWithdrawn ? Coin.toJSON(message.tokensWithdrawn) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgWithdrawFromGroupResponse>): MsgWithdrawFromGroupResponse {
    return MsgWithdrawFromGroupResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgWithdrawFromGroupResponse>): MsgWithdrawFromGroupResponse {
    const message = createBaseMsgWithdrawFromGroupResponse();
    message.groupId = (object.groupId !== undefined && object.groupId !== null)
      ? Long.fromValue(object.groupId)
      : Long.UZERO;
    message.tokensBurnt = (object.tokensBurnt !== undefined && object.tokensBurnt !== null)
      ? Coin.fromPartial(object.tokensBurnt)
      : undefined;
    message.tokensWithdrawn = (object.tokensWithdrawn !== undefined && object.tokensWithdrawn !== null)
      ? Coin.fromPartial(object.tokensWithdrawn)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateGroupedTokenConfig(): MsgUpdateGroupedTokenConfig {
  return { creator: "", denom: "", updateGroupedTokenConfigParams: undefined };
}

export const MsgUpdateGroupedTokenConfig = {
  encode(message: MsgUpdateGroupedTokenConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.updateGroupedTokenConfigParams !== undefined) {
      UpdateGroupedTokenConfigParams.encode(message.updateGroupedTokenConfigParams, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupedTokenConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupedTokenConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.updateGroupedTokenConfigParams = UpdateGroupedTokenConfigParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateGroupedTokenConfig {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      updateGroupedTokenConfigParams: isSet(object.updateGroupedTokenConfigParams)
        ? UpdateGroupedTokenConfigParams.fromJSON(object.updateGroupedTokenConfigParams)
        : undefined,
    };
  },

  toJSON(message: MsgUpdateGroupedTokenConfig): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.updateGroupedTokenConfigParams !== undefined &&
      (obj.updateGroupedTokenConfigParams = message.updateGroupedTokenConfigParams
        ? UpdateGroupedTokenConfigParams.toJSON(message.updateGroupedTokenConfigParams)
        : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateGroupedTokenConfig>): MsgUpdateGroupedTokenConfig {
    return MsgUpdateGroupedTokenConfig.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateGroupedTokenConfig>): MsgUpdateGroupedTokenConfig {
    const message = createBaseMsgUpdateGroupedTokenConfig();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.updateGroupedTokenConfigParams =
      (object.updateGroupedTokenConfigParams !== undefined && object.updateGroupedTokenConfigParams !== null)
        ? UpdateGroupedTokenConfigParams.fromPartial(object.updateGroupedTokenConfigParams)
        : undefined;
    return message;
  },
};

function createBaseUpdateGroupedTokenConfigParams(): UpdateGroupedTokenConfigParams {
  return { isActive: undefined };
}

export const UpdateGroupedTokenConfigParams = {
  encode(message: UpdateGroupedTokenConfigParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isActive !== undefined) {
      BoolValue.encode({ value: message.isActive! }, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGroupedTokenConfigParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateGroupedTokenConfigParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.isActive = BoolValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateGroupedTokenConfigParams {
    return { isActive: isSet(object.isActive) ? Boolean(object.isActive) : undefined };
  },

  toJSON(message: UpdateGroupedTokenConfigParams): unknown {
    const obj: any = {};
    message.isActive !== undefined && (obj.isActive = message.isActive);
    return obj;
  },

  create(base?: DeepPartial<UpdateGroupedTokenConfigParams>): UpdateGroupedTokenConfigParams {
    return UpdateGroupedTokenConfigParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateGroupedTokenConfigParams>): UpdateGroupedTokenConfigParams {
    const message = createBaseUpdateGroupedTokenConfigParams();
    message.isActive = object.isActive ?? undefined;
    return message;
  },
};

function createBaseMsgUpdateGroupedTokenConfigResponse(): MsgUpdateGroupedTokenConfigResponse {
  return { groupedTokenConfig: undefined };
}

export const MsgUpdateGroupedTokenConfigResponse = {
  encode(message: MsgUpdateGroupedTokenConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupedTokenConfig !== undefined) {
      GroupedTokenConfig.encode(message.groupedTokenConfig, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupedTokenConfigResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupedTokenConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groupedTokenConfig = GroupedTokenConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateGroupedTokenConfigResponse {
    return {
      groupedTokenConfig: isSet(object.groupedTokenConfig)
        ? GroupedTokenConfig.fromJSON(object.groupedTokenConfig)
        : undefined,
    };
  },

  toJSON(message: MsgUpdateGroupedTokenConfigResponse): unknown {
    const obj: any = {};
    message.groupedTokenConfig !== undefined && (obj.groupedTokenConfig = message.groupedTokenConfig
      ? GroupedTokenConfig.toJSON(message.groupedTokenConfig)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateGroupedTokenConfigResponse>): MsgUpdateGroupedTokenConfigResponse {
    return MsgUpdateGroupedTokenConfigResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateGroupedTokenConfigResponse>): MsgUpdateGroupedTokenConfigResponse {
    const message = createBaseMsgUpdateGroupedTokenConfigResponse();
    message.groupedTokenConfig = (object.groupedTokenConfig !== undefined && object.groupedTokenConfig !== null)
      ? GroupedTokenConfig.fromPartial(object.groupedTokenConfig)
      : undefined;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateToken(request: MsgCreateToken): Promise<MsgCreateTokenResponse>;
  CreatePerpetualToken(request: MsgCreatePerpetualToken): Promise<MsgCreatePerpetualTokenResponse>;
  SyncToken(request: MsgSyncToken): Promise<MsgSyncTokenResponse>;
  MintToken(request: MsgMintToken): Promise<MsgMintTokenResponse>;
  BindToken(request: MsgBindToken): Promise<MsgBindTokenResponse>;
  UnbindToken(request: MsgUnbindToken): Promise<MsgUnbindTokenResponse>;
  LinkToken(request: MsgLinkToken): Promise<MsgLinkTokenResponse>;
  Withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
  AuthorizeBridge(request: MsgAuthorizeBridge): Promise<MsgAuthorizeBridgeResponse>;
  DeauthorizeBridge(request: MsgDeauthorizeBridge): Promise<MsgDeauthorizeBridgeResponse>;
  EditBridgeName(request: MsgEditBridgeName): Promise<MsgEditBridgeNameResponse>;
  RemoveBridge(request: MsgRemoveBridge): Promise<MsgRemoveBridgeResponse>;
  UpdateToken(request: MsgUpdateToken): Promise<MsgUpdateTokenResponse>;
  DeprecateToken(request: MsgDeprecateToken): Promise<MsgDeprecateTokenResponse>;
  AddBridgeAddress(request: MsgAddBridgeAddress): Promise<MsgAddBridgeAddressResponse>;
  RemoveBridgeAddress(request: MsgRemoveBridgeAddress): Promise<MsgRemoveBridgeAddressResponse>;
  CreateGroup(request: MsgCreateGroup): Promise<MsgCreateGroupResponse>;
  UpdateGroup(request: MsgUpdateGroup): Promise<MsgUpdateGroupResponse>;
  RegisterToGroup(request: MsgRegisterToGroup): Promise<MsgRegisterToGroupResponse>;
  DeregisterFromGroup(request: MsgDeregisterFromGroup): Promise<MsgDeregisterFromGroupResponse>;
  DepositToGroup(request: MsgDepositToGroup): Promise<MsgDepositToGroupResponse>;
  WithdrawFromGroup(request: MsgWithdrawFromGroup): Promise<MsgWithdrawFromGroupResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  UpdateGroupedTokenConfig(request: MsgUpdateGroupedTokenConfig): Promise<MsgUpdateGroupedTokenConfigResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.coin.Msg";
    this.rpc = rpc;
    this.CreateToken = this.CreateToken.bind(this);
    this.CreatePerpetualToken = this.CreatePerpetualToken.bind(this);
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
    this.UpdateToken = this.UpdateToken.bind(this);
    this.DeprecateToken = this.DeprecateToken.bind(this);
    this.AddBridgeAddress = this.AddBridgeAddress.bind(this);
    this.RemoveBridgeAddress = this.RemoveBridgeAddress.bind(this);
    this.CreateGroup = this.CreateGroup.bind(this);
    this.UpdateGroup = this.UpdateGroup.bind(this);
    this.RegisterToGroup = this.RegisterToGroup.bind(this);
    this.DeregisterFromGroup = this.DeregisterFromGroup.bind(this);
    this.DepositToGroup = this.DepositToGroup.bind(this);
    this.WithdrawFromGroup = this.WithdrawFromGroup.bind(this);
    this.UpdateGroupedTokenConfig = this.UpdateGroupedTokenConfig.bind(this);
  }
  CreateToken(request: MsgCreateToken): Promise<MsgCreateTokenResponse> {
    const data = MsgCreateToken.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateToken", data);
    return promise.then((data) => MsgCreateTokenResponse.decode(_m0.Reader.create(data)));
  }

  CreatePerpetualToken(request: MsgCreatePerpetualToken): Promise<MsgCreatePerpetualTokenResponse> {
    const data = MsgCreatePerpetualToken.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreatePerpetualToken", data);
    return promise.then((data) => MsgCreatePerpetualTokenResponse.decode(_m0.Reader.create(data)));
  }

  SyncToken(request: MsgSyncToken): Promise<MsgSyncTokenResponse> {
    const data = MsgSyncToken.encode(request).finish();
    const promise = this.rpc.request(this.service, "SyncToken", data);
    return promise.then((data) => MsgSyncTokenResponse.decode(_m0.Reader.create(data)));
  }

  MintToken(request: MsgMintToken): Promise<MsgMintTokenResponse> {
    const data = MsgMintToken.encode(request).finish();
    const promise = this.rpc.request(this.service, "MintToken", data);
    return promise.then((data) => MsgMintTokenResponse.decode(_m0.Reader.create(data)));
  }

  BindToken(request: MsgBindToken): Promise<MsgBindTokenResponse> {
    const data = MsgBindToken.encode(request).finish();
    const promise = this.rpc.request(this.service, "BindToken", data);
    return promise.then((data) => MsgBindTokenResponse.decode(_m0.Reader.create(data)));
  }

  UnbindToken(request: MsgUnbindToken): Promise<MsgUnbindTokenResponse> {
    const data = MsgUnbindToken.encode(request).finish();
    const promise = this.rpc.request(this.service, "UnbindToken", data);
    return promise.then((data) => MsgUnbindTokenResponse.decode(_m0.Reader.create(data)));
  }

  LinkToken(request: MsgLinkToken): Promise<MsgLinkTokenResponse> {
    const data = MsgLinkToken.encode(request).finish();
    const promise = this.rpc.request(this.service, "LinkToken", data);
    return promise.then((data) => MsgLinkTokenResponse.decode(_m0.Reader.create(data)));
  }

  Withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse> {
    const data = MsgWithdraw.encode(request).finish();
    const promise = this.rpc.request(this.service, "Withdraw", data);
    return promise.then((data) => MsgWithdrawResponse.decode(_m0.Reader.create(data)));
  }

  AuthorizeBridge(request: MsgAuthorizeBridge): Promise<MsgAuthorizeBridgeResponse> {
    const data = MsgAuthorizeBridge.encode(request).finish();
    const promise = this.rpc.request(this.service, "AuthorizeBridge", data);
    return promise.then((data) => MsgAuthorizeBridgeResponse.decode(_m0.Reader.create(data)));
  }

  DeauthorizeBridge(request: MsgDeauthorizeBridge): Promise<MsgDeauthorizeBridgeResponse> {
    const data = MsgDeauthorizeBridge.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeauthorizeBridge", data);
    return promise.then((data) => MsgDeauthorizeBridgeResponse.decode(_m0.Reader.create(data)));
  }

  EditBridgeName(request: MsgEditBridgeName): Promise<MsgEditBridgeNameResponse> {
    const data = MsgEditBridgeName.encode(request).finish();
    const promise = this.rpc.request(this.service, "EditBridgeName", data);
    return promise.then((data) => MsgEditBridgeNameResponse.decode(_m0.Reader.create(data)));
  }

  RemoveBridge(request: MsgRemoveBridge): Promise<MsgRemoveBridgeResponse> {
    const data = MsgRemoveBridge.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoveBridge", data);
    return promise.then((data) => MsgRemoveBridgeResponse.decode(_m0.Reader.create(data)));
  }

  UpdateToken(request: MsgUpdateToken): Promise<MsgUpdateTokenResponse> {
    const data = MsgUpdateToken.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateToken", data);
    return promise.then((data) => MsgUpdateTokenResponse.decode(_m0.Reader.create(data)));
  }

  DeprecateToken(request: MsgDeprecateToken): Promise<MsgDeprecateTokenResponse> {
    const data = MsgDeprecateToken.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeprecateToken", data);
    return promise.then((data) => MsgDeprecateTokenResponse.decode(_m0.Reader.create(data)));
  }

  AddBridgeAddress(request: MsgAddBridgeAddress): Promise<MsgAddBridgeAddressResponse> {
    const data = MsgAddBridgeAddress.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddBridgeAddress", data);
    return promise.then((data) => MsgAddBridgeAddressResponse.decode(_m0.Reader.create(data)));
  }

  RemoveBridgeAddress(request: MsgRemoveBridgeAddress): Promise<MsgRemoveBridgeAddressResponse> {
    const data = MsgRemoveBridgeAddress.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoveBridgeAddress", data);
    return promise.then((data) => MsgRemoveBridgeAddressResponse.decode(_m0.Reader.create(data)));
  }

  CreateGroup(request: MsgCreateGroup): Promise<MsgCreateGroupResponse> {
    const data = MsgCreateGroup.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateGroup", data);
    return promise.then((data) => MsgCreateGroupResponse.decode(_m0.Reader.create(data)));
  }

  UpdateGroup(request: MsgUpdateGroup): Promise<MsgUpdateGroupResponse> {
    const data = MsgUpdateGroup.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateGroup", data);
    return promise.then((data) => MsgUpdateGroupResponse.decode(_m0.Reader.create(data)));
  }

  RegisterToGroup(request: MsgRegisterToGroup): Promise<MsgRegisterToGroupResponse> {
    const data = MsgRegisterToGroup.encode(request).finish();
    const promise = this.rpc.request(this.service, "RegisterToGroup", data);
    return promise.then((data) => MsgRegisterToGroupResponse.decode(_m0.Reader.create(data)));
  }

  DeregisterFromGroup(request: MsgDeregisterFromGroup): Promise<MsgDeregisterFromGroupResponse> {
    const data = MsgDeregisterFromGroup.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeregisterFromGroup", data);
    return promise.then((data) => MsgDeregisterFromGroupResponse.decode(_m0.Reader.create(data)));
  }

  DepositToGroup(request: MsgDepositToGroup): Promise<MsgDepositToGroupResponse> {
    const data = MsgDepositToGroup.encode(request).finish();
    const promise = this.rpc.request(this.service, "DepositToGroup", data);
    return promise.then((data) => MsgDepositToGroupResponse.decode(_m0.Reader.create(data)));
  }

  WithdrawFromGroup(request: MsgWithdrawFromGroup): Promise<MsgWithdrawFromGroupResponse> {
    const data = MsgWithdrawFromGroup.encode(request).finish();
    const promise = this.rpc.request(this.service, "WithdrawFromGroup", data);
    return promise.then((data) => MsgWithdrawFromGroupResponse.decode(_m0.Reader.create(data)));
  }

  UpdateGroupedTokenConfig(request: MsgUpdateGroupedTokenConfig): Promise<MsgUpdateGroupedTokenConfigResponse> {
    const data = MsgUpdateGroupedTokenConfig.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateGroupedTokenConfig", data);
    return promise.then((data) => MsgUpdateGroupedTokenConfigResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
