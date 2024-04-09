/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { RelayFee } from "./bridge";
import {
  StringValue,
  BoolValue,
  Int64Value,
} from "../../../google/protobuf/wrappers";

export const protobufPackage = "Switcheo.carbon.bridge";

export interface MsgSetBridgeEnabled {
  creator: string;
  bridgeId: string;
  isEnabled: boolean;
}

export interface MsgSetBridgeEnabledResponse {}

export interface MsgUpdateAxelarIbcChannel {
  creator: string;
  channelId: string;
}

export interface MsgUpdateAxelarIbcChannelResponse {}

export interface MsgUpdateIbcTimeoutHeightOffset {
  creator: string;
  offset: Long;
}

export interface MsgUpdateIbcTimeoutHeightOffsetResponse {}

export interface MsgUpdateParams {
  authority: string;
  params?: Params;
}

export interface MsgUpdateParamsResponse {}

/** MsgAxelarSendToken is a convenience method to send a *Axelar Supported* token via axelar. */
export interface MsgAxelarSendToken {
  /** for this message, the message creator will be the sender of the token */
  creator: string;
  /** the destination chain. see axelar for list of supported chain names: https://docs.axelar.dev/dev/reference/mainnet-chain-names */
  destinationChain: string;
  /** the address on destination chain */
  destinationAddress: string;
  /** see supported tokens: https://docs.axelar.dev/resources/mainnet#assets, convert them to ibc equivalent on carbon */
  tokens?: Coin;
}

export interface MsgAxelarSendTokenResponse {}

/**
 * MsgAxelarCallContract is a convenience method to do a GMP call to axelar.
 * This method will allow you do a `callContract` without having to specify the following: TypeGeneralMessageWithToken, IBC channel, IBC port, AxelarGMPAcc
 */
export interface MsgAxelarCallContract {
  /** for this message, the message creator will be the sender */
  creator: string;
  /** the destination chain. see axelar for list of supported chain names: https://docs.axelar.dev/dev/reference/mainnet-chain-names */
  destinationChain: string;
  /** the address on destination chain */
  destinationAddress: string;
  /** abi encoded bytes TODO: give abi encoding example? */
  payload: Uint8Array;
}

export interface MsgAxelarCallContractResponse {}

/**
 * MsgAxelarCallContractWithToken is a convenience method to do a GMP call to axelar and attach some *Axelar Supported* tokens
 * This method will allow you do a `callContractWithToken` without having to specify the following: TypeGeneralMessageWithToken, IBC channel, IBC port, AxelarGMPAcc
 */
export interface MsgAxelarCallContractWithToken {
  /** for this message, the message creator will be the sender */
  creator: string;
  /** the destination chain. see axelar for list of supported chain names: https://docs.axelar.dev/dev/reference/mainnet-chain-names */
  destinationChain: string;
  /** the address on destination chain */
  destinationAddress: string;
  /** see supported tokens: https://docs.axelar.dev/resources/mainnet#assets, convert them to ibc equivalent on carbon */
  tokens?: Coin;
  /** abi encoded bytes TODO: give abi encoding example? */
  payload: Uint8Array;
}

export interface MsgAxelarCallContractWithTokenResponse {}

export interface MsgCreateConnection {
  creator: string;
  bridgeId: string;
  chainId: string;
  chainDisplayName: string;
  tokenGatewayAddress: string;
  encoding: string;
  isEnabled: boolean;
}

export interface MsgCreateConnectionResponse {}

export interface MsgUpdateConnection {
  creator: string;
  connectionId: string;
  updateConnectionParams?: UpdateConnectionParams;
}

export interface UpdateConnectionParams {
  chainDisplayName?: string;
  isEnabled?: boolean;
}

export interface MsgUpdateConnectionResponse {}

export interface MsgRemoveConnection {
  creator: string;
  connectionId: string;
}

export interface MsgRemoveConnectionResponse {}

export interface MsgRegisterExternalToken {
  creator: string;
  connectionId: string;
  assetAddress: string;
  decimals?: Long;
  carbonTokenName: string;
}

export interface MsgRegisterExternalTokenResponse {}

export interface MsgDeregisterExternalToken {
  creator: string;
  connectionId: string;
  denom: string;
}

export interface MsgDeregisterExternalTokenResponse {}

export interface MsgDeployNativeToken {
  creator: string;
  connectionId: string;
  denom: string;
}

export interface MsgDeployNativeTokenResponse {}

export interface MsgRegisterDeployedToken {
  creator: string;
  connectionId: string;
  tokenAddress: string;
  denom: string;
}

export interface MsgRegisterDeployedTokenResponse {}

export interface MsgWithdrawToken {
  creator: string;
  connectionId: string;
  receiver: string;
  tokens?: Coin;
  relayFee?: RelayFee;
}

export interface MsgWithdrawTokenResponse {}

export interface MsgRegisterExecutable {
  creator: string;
  connectionId: string;
  executableAddress: string;
}

export interface MsgRegisterExecutableResponse {}

export interface MsgDeregisterExecutable {
  creator: string;
  connectionId: string;
  executableAddress: string;
}

export interface MsgDeregisterExecutableResponse {}

export interface MsgExecuteOnExecutableContract {
  creator: string;
  connectionId: string;
  executableAddress: string;
  executionBytes: Uint8Array;
  tokens?: Coin;
  relayFee?: RelayFee;
}

export interface MsgExecuteOnExecutableContractResponse {}

export interface MsgAllowExternalExecutor {
  creator: string;
  connectionId: string;
  executorAddress: string;
}

export interface MsgAllowExternalExecutorResponse {}

export interface MsgRemoveExternalExecutor {
  creator: string;
  connectionId: string;
  executorAddress: string;
}

export interface MsgRemoveExternalExecutorResponse {}

const baseMsgSetBridgeEnabled: object = {
  creator: "",
  bridgeId: "",
  isEnabled: false,
};

export const MsgSetBridgeEnabled = {
  encode(
    message: MsgSetBridgeEnabled,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.bridgeId !== "") {
      writer.uint32(18).string(message.bridgeId);
    }
    if (message.isEnabled === true) {
      writer.uint32(24).bool(message.isEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetBridgeEnabled {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetBridgeEnabled } as MsgSetBridgeEnabled;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.bridgeId = reader.string();
          break;
        case 3:
          message.isEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetBridgeEnabled {
    const message = { ...baseMsgSetBridgeEnabled } as MsgSetBridgeEnabled;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.bridgeId =
      object.bridgeId !== undefined && object.bridgeId !== null
        ? String(object.bridgeId)
        : "";
    message.isEnabled =
      object.isEnabled !== undefined && object.isEnabled !== null
        ? Boolean(object.isEnabled)
        : false;
    return message;
  },

  toJSON(message: MsgSetBridgeEnabled): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.bridgeId !== undefined && (obj.bridgeId = message.bridgeId);
    message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetBridgeEnabled>): MsgSetBridgeEnabled {
    const message = { ...baseMsgSetBridgeEnabled } as MsgSetBridgeEnabled;
    message.creator = object.creator ?? "";
    message.bridgeId = object.bridgeId ?? "";
    message.isEnabled = object.isEnabled ?? false;
    return message;
  },
};

const baseMsgSetBridgeEnabledResponse: object = {};

export const MsgSetBridgeEnabledResponse = {
  encode(
    _: MsgSetBridgeEnabledResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetBridgeEnabledResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetBridgeEnabledResponse,
    } as MsgSetBridgeEnabledResponse;
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

  fromJSON(_: any): MsgSetBridgeEnabledResponse {
    const message = {
      ...baseMsgSetBridgeEnabledResponse,
    } as MsgSetBridgeEnabledResponse;
    return message;
  },

  toJSON(_: MsgSetBridgeEnabledResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetBridgeEnabledResponse>
  ): MsgSetBridgeEnabledResponse {
    const message = {
      ...baseMsgSetBridgeEnabledResponse,
    } as MsgSetBridgeEnabledResponse;
    return message;
  },
};

const baseMsgUpdateAxelarIbcChannel: object = { creator: "", channelId: "" };

export const MsgUpdateAxelarIbcChannel = {
  encode(
    message: MsgUpdateAxelarIbcChannel,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateAxelarIbcChannel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateAxelarIbcChannel,
    } as MsgUpdateAxelarIbcChannel;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateAxelarIbcChannel {
    const message = {
      ...baseMsgUpdateAxelarIbcChannel,
    } as MsgUpdateAxelarIbcChannel;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : "";
    return message;
  },

  toJSON(message: MsgUpdateAxelarIbcChannel): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateAxelarIbcChannel>
  ): MsgUpdateAxelarIbcChannel {
    const message = {
      ...baseMsgUpdateAxelarIbcChannel,
    } as MsgUpdateAxelarIbcChannel;
    message.creator = object.creator ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
};

const baseMsgUpdateAxelarIbcChannelResponse: object = {};

export const MsgUpdateAxelarIbcChannelResponse = {
  encode(
    _: MsgUpdateAxelarIbcChannelResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateAxelarIbcChannelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateAxelarIbcChannelResponse,
    } as MsgUpdateAxelarIbcChannelResponse;
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

  fromJSON(_: any): MsgUpdateAxelarIbcChannelResponse {
    const message = {
      ...baseMsgUpdateAxelarIbcChannelResponse,
    } as MsgUpdateAxelarIbcChannelResponse;
    return message;
  },

  toJSON(_: MsgUpdateAxelarIbcChannelResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateAxelarIbcChannelResponse>
  ): MsgUpdateAxelarIbcChannelResponse {
    const message = {
      ...baseMsgUpdateAxelarIbcChannelResponse,
    } as MsgUpdateAxelarIbcChannelResponse;
    return message;
  },
};

const baseMsgUpdateIbcTimeoutHeightOffset: object = {
  creator: "",
  offset: Long.UZERO,
};

export const MsgUpdateIbcTimeoutHeightOffset = {
  encode(
    message: MsgUpdateIbcTimeoutHeightOffset,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.offset.isZero()) {
      writer.uint32(16).uint64(message.offset);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateIbcTimeoutHeightOffset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateIbcTimeoutHeightOffset,
    } as MsgUpdateIbcTimeoutHeightOffset;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.offset = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateIbcTimeoutHeightOffset {
    const message = {
      ...baseMsgUpdateIbcTimeoutHeightOffset,
    } as MsgUpdateIbcTimeoutHeightOffset;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.offset =
      object.offset !== undefined && object.offset !== null
        ? Long.fromString(object.offset)
        : Long.UZERO;
    return message;
  },

  toJSON(message: MsgUpdateIbcTimeoutHeightOffset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.offset !== undefined &&
      (obj.offset = (message.offset || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateIbcTimeoutHeightOffset>
  ): MsgUpdateIbcTimeoutHeightOffset {
    const message = {
      ...baseMsgUpdateIbcTimeoutHeightOffset,
    } as MsgUpdateIbcTimeoutHeightOffset;
    message.creator = object.creator ?? "";
    message.offset =
      object.offset !== undefined && object.offset !== null
        ? Long.fromValue(object.offset)
        : Long.UZERO;
    return message;
  },
};

const baseMsgUpdateIbcTimeoutHeightOffsetResponse: object = {};

export const MsgUpdateIbcTimeoutHeightOffsetResponse = {
  encode(
    _: MsgUpdateIbcTimeoutHeightOffsetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateIbcTimeoutHeightOffsetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateIbcTimeoutHeightOffsetResponse,
    } as MsgUpdateIbcTimeoutHeightOffsetResponse;
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

  fromJSON(_: any): MsgUpdateIbcTimeoutHeightOffsetResponse {
    const message = {
      ...baseMsgUpdateIbcTimeoutHeightOffsetResponse,
    } as MsgUpdateIbcTimeoutHeightOffsetResponse;
    return message;
  },

  toJSON(_: MsgUpdateIbcTimeoutHeightOffsetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateIbcTimeoutHeightOffsetResponse>
  ): MsgUpdateIbcTimeoutHeightOffsetResponse {
    const message = {
      ...baseMsgUpdateIbcTimeoutHeightOffsetResponse,
    } as MsgUpdateIbcTimeoutHeightOffsetResponse;
    return message;
  },
};

const baseMsgUpdateParams: object = { authority: "" };

export const MsgUpdateParams = {
  encode(
    message: MsgUpdateParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    message.authority =
      object.authority !== undefined && object.authority !== null
        ? String(object.authority)
        : "";
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromJSON(object.params)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    message.authority = object.authority ?? "";
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

const baseMsgUpdateParamsResponse: object = {};

export const MsgUpdateParamsResponse = {
  encode(
    _: MsgUpdateParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateParamsResponse,
    } as MsgUpdateParamsResponse;
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

  fromJSON(_: any): MsgUpdateParamsResponse {
    const message = {
      ...baseMsgUpdateParamsResponse,
    } as MsgUpdateParamsResponse;
    return message;
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateParamsResponse>
  ): MsgUpdateParamsResponse {
    const message = {
      ...baseMsgUpdateParamsResponse,
    } as MsgUpdateParamsResponse;
    return message;
  },
};

const baseMsgAxelarSendToken: object = {
  creator: "",
  destinationChain: "",
  destinationAddress: "",
};

export const MsgAxelarSendToken = {
  encode(
    message: MsgAxelarSendToken,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.destinationChain !== "") {
      writer.uint32(18).string(message.destinationChain);
    }
    if (message.destinationAddress !== "") {
      writer.uint32(26).string(message.destinationAddress);
    }
    if (message.tokens !== undefined) {
      Coin.encode(message.tokens, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAxelarSendToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAxelarSendToken } as MsgAxelarSendToken;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.destinationChain = reader.string();
          break;
        case 3:
          message.destinationAddress = reader.string();
          break;
        case 4:
          message.tokens = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAxelarSendToken {
    const message = { ...baseMsgAxelarSendToken } as MsgAxelarSendToken;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.destinationChain =
      object.destinationChain !== undefined && object.destinationChain !== null
        ? String(object.destinationChain)
        : "";
    message.destinationAddress =
      object.destinationAddress !== undefined &&
      object.destinationAddress !== null
        ? String(object.destinationAddress)
        : "";
    message.tokens =
      object.tokens !== undefined && object.tokens !== null
        ? Coin.fromJSON(object.tokens)
        : undefined;
    return message;
  },

  toJSON(message: MsgAxelarSendToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.destinationChain !== undefined &&
      (obj.destinationChain = message.destinationChain);
    message.destinationAddress !== undefined &&
      (obj.destinationAddress = message.destinationAddress);
    message.tokens !== undefined &&
      (obj.tokens = message.tokens ? Coin.toJSON(message.tokens) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAxelarSendToken>): MsgAxelarSendToken {
    const message = { ...baseMsgAxelarSendToken } as MsgAxelarSendToken;
    message.creator = object.creator ?? "";
    message.destinationChain = object.destinationChain ?? "";
    message.destinationAddress = object.destinationAddress ?? "";
    message.tokens =
      object.tokens !== undefined && object.tokens !== null
        ? Coin.fromPartial(object.tokens)
        : undefined;
    return message;
  },
};

const baseMsgAxelarSendTokenResponse: object = {};

export const MsgAxelarSendTokenResponse = {
  encode(
    _: MsgAxelarSendTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAxelarSendTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAxelarSendTokenResponse,
    } as MsgAxelarSendTokenResponse;
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

  fromJSON(_: any): MsgAxelarSendTokenResponse {
    const message = {
      ...baseMsgAxelarSendTokenResponse,
    } as MsgAxelarSendTokenResponse;
    return message;
  },

  toJSON(_: MsgAxelarSendTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAxelarSendTokenResponse>
  ): MsgAxelarSendTokenResponse {
    const message = {
      ...baseMsgAxelarSendTokenResponse,
    } as MsgAxelarSendTokenResponse;
    return message;
  },
};

const baseMsgAxelarCallContract: object = {
  creator: "",
  destinationChain: "",
  destinationAddress: "",
};

export const MsgAxelarCallContract = {
  encode(
    message: MsgAxelarCallContract,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.destinationChain !== "") {
      writer.uint32(18).string(message.destinationChain);
    }
    if (message.destinationAddress !== "") {
      writer.uint32(26).string(message.destinationAddress);
    }
    if (message.payload.length !== 0) {
      writer.uint32(34).bytes(message.payload);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAxelarCallContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAxelarCallContract } as MsgAxelarCallContract;
    message.payload = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.destinationChain = reader.string();
          break;
        case 3:
          message.destinationAddress = reader.string();
          break;
        case 4:
          message.payload = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAxelarCallContract {
    const message = { ...baseMsgAxelarCallContract } as MsgAxelarCallContract;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.destinationChain =
      object.destinationChain !== undefined && object.destinationChain !== null
        ? String(object.destinationChain)
        : "";
    message.destinationAddress =
      object.destinationAddress !== undefined &&
      object.destinationAddress !== null
        ? String(object.destinationAddress)
        : "";
    message.payload =
      object.payload !== undefined && object.payload !== null
        ? bytesFromBase64(object.payload)
        : new Uint8Array();
    return message;
  },

  toJSON(message: MsgAxelarCallContract): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.destinationChain !== undefined &&
      (obj.destinationChain = message.destinationChain);
    message.destinationAddress !== undefined &&
      (obj.destinationAddress = message.destinationAddress);
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(
        message.payload !== undefined ? message.payload : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgAxelarCallContract>
  ): MsgAxelarCallContract {
    const message = { ...baseMsgAxelarCallContract } as MsgAxelarCallContract;
    message.creator = object.creator ?? "";
    message.destinationChain = object.destinationChain ?? "";
    message.destinationAddress = object.destinationAddress ?? "";
    message.payload = object.payload ?? new Uint8Array();
    return message;
  },
};

const baseMsgAxelarCallContractResponse: object = {};

export const MsgAxelarCallContractResponse = {
  encode(
    _: MsgAxelarCallContractResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAxelarCallContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAxelarCallContractResponse,
    } as MsgAxelarCallContractResponse;
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

  fromJSON(_: any): MsgAxelarCallContractResponse {
    const message = {
      ...baseMsgAxelarCallContractResponse,
    } as MsgAxelarCallContractResponse;
    return message;
  },

  toJSON(_: MsgAxelarCallContractResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAxelarCallContractResponse>
  ): MsgAxelarCallContractResponse {
    const message = {
      ...baseMsgAxelarCallContractResponse,
    } as MsgAxelarCallContractResponse;
    return message;
  },
};

const baseMsgAxelarCallContractWithToken: object = {
  creator: "",
  destinationChain: "",
  destinationAddress: "",
};

export const MsgAxelarCallContractWithToken = {
  encode(
    message: MsgAxelarCallContractWithToken,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.destinationChain !== "") {
      writer.uint32(18).string(message.destinationChain);
    }
    if (message.destinationAddress !== "") {
      writer.uint32(26).string(message.destinationAddress);
    }
    if (message.tokens !== undefined) {
      Coin.encode(message.tokens, writer.uint32(34).fork()).ldelim();
    }
    if (message.payload.length !== 0) {
      writer.uint32(42).bytes(message.payload);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAxelarCallContractWithToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAxelarCallContractWithToken,
    } as MsgAxelarCallContractWithToken;
    message.payload = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.destinationChain = reader.string();
          break;
        case 3:
          message.destinationAddress = reader.string();
          break;
        case 4:
          message.tokens = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.payload = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAxelarCallContractWithToken {
    const message = {
      ...baseMsgAxelarCallContractWithToken,
    } as MsgAxelarCallContractWithToken;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.destinationChain =
      object.destinationChain !== undefined && object.destinationChain !== null
        ? String(object.destinationChain)
        : "";
    message.destinationAddress =
      object.destinationAddress !== undefined &&
      object.destinationAddress !== null
        ? String(object.destinationAddress)
        : "";
    message.tokens =
      object.tokens !== undefined && object.tokens !== null
        ? Coin.fromJSON(object.tokens)
        : undefined;
    message.payload =
      object.payload !== undefined && object.payload !== null
        ? bytesFromBase64(object.payload)
        : new Uint8Array();
    return message;
  },

  toJSON(message: MsgAxelarCallContractWithToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.destinationChain !== undefined &&
      (obj.destinationChain = message.destinationChain);
    message.destinationAddress !== undefined &&
      (obj.destinationAddress = message.destinationAddress);
    message.tokens !== undefined &&
      (obj.tokens = message.tokens ? Coin.toJSON(message.tokens) : undefined);
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(
        message.payload !== undefined ? message.payload : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgAxelarCallContractWithToken>
  ): MsgAxelarCallContractWithToken {
    const message = {
      ...baseMsgAxelarCallContractWithToken,
    } as MsgAxelarCallContractWithToken;
    message.creator = object.creator ?? "";
    message.destinationChain = object.destinationChain ?? "";
    message.destinationAddress = object.destinationAddress ?? "";
    message.tokens =
      object.tokens !== undefined && object.tokens !== null
        ? Coin.fromPartial(object.tokens)
        : undefined;
    message.payload = object.payload ?? new Uint8Array();
    return message;
  },
};

const baseMsgAxelarCallContractWithTokenResponse: object = {};

export const MsgAxelarCallContractWithTokenResponse = {
  encode(
    _: MsgAxelarCallContractWithTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAxelarCallContractWithTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAxelarCallContractWithTokenResponse,
    } as MsgAxelarCallContractWithTokenResponse;
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

  fromJSON(_: any): MsgAxelarCallContractWithTokenResponse {
    const message = {
      ...baseMsgAxelarCallContractWithTokenResponse,
    } as MsgAxelarCallContractWithTokenResponse;
    return message;
  },

  toJSON(_: MsgAxelarCallContractWithTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAxelarCallContractWithTokenResponse>
  ): MsgAxelarCallContractWithTokenResponse {
    const message = {
      ...baseMsgAxelarCallContractWithTokenResponse,
    } as MsgAxelarCallContractWithTokenResponse;
    return message;
  },
};

const baseMsgCreateConnection: object = {
  creator: "",
  bridgeId: "",
  chainId: "",
  chainDisplayName: "",
  tokenGatewayAddress: "",
  encoding: "",
  isEnabled: false,
};

export const MsgCreateConnection = {
  encode(
    message: MsgCreateConnection,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.bridgeId !== "") {
      writer.uint32(18).string(message.bridgeId);
    }
    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }
    if (message.chainDisplayName !== "") {
      writer.uint32(34).string(message.chainDisplayName);
    }
    if (message.tokenGatewayAddress !== "") {
      writer.uint32(42).string(message.tokenGatewayAddress);
    }
    if (message.encoding !== "") {
      writer.uint32(50).string(message.encoding);
    }
    if (message.isEnabled === true) {
      writer.uint32(56).bool(message.isEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateConnection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateConnection } as MsgCreateConnection;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.bridgeId = reader.string();
          break;
        case 3:
          message.chainId = reader.string();
          break;
        case 4:
          message.chainDisplayName = reader.string();
          break;
        case 5:
          message.tokenGatewayAddress = reader.string();
          break;
        case 6:
          message.encoding = reader.string();
          break;
        case 7:
          message.isEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateConnection {
    const message = { ...baseMsgCreateConnection } as MsgCreateConnection;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.bridgeId =
      object.bridgeId !== undefined && object.bridgeId !== null
        ? String(object.bridgeId)
        : "";
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? String(object.chainId)
        : "";
    message.chainDisplayName =
      object.chainDisplayName !== undefined && object.chainDisplayName !== null
        ? String(object.chainDisplayName)
        : "";
    message.tokenGatewayAddress =
      object.tokenGatewayAddress !== undefined &&
      object.tokenGatewayAddress !== null
        ? String(object.tokenGatewayAddress)
        : "";
    message.encoding =
      object.encoding !== undefined && object.encoding !== null
        ? String(object.encoding)
        : "";
    message.isEnabled =
      object.isEnabled !== undefined && object.isEnabled !== null
        ? Boolean(object.isEnabled)
        : false;
    return message;
  },

  toJSON(message: MsgCreateConnection): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.bridgeId !== undefined && (obj.bridgeId = message.bridgeId);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.chainDisplayName !== undefined &&
      (obj.chainDisplayName = message.chainDisplayName);
    message.tokenGatewayAddress !== undefined &&
      (obj.tokenGatewayAddress = message.tokenGatewayAddress);
    message.encoding !== undefined && (obj.encoding = message.encoding);
    message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateConnection>): MsgCreateConnection {
    const message = { ...baseMsgCreateConnection } as MsgCreateConnection;
    message.creator = object.creator ?? "";
    message.bridgeId = object.bridgeId ?? "";
    message.chainId = object.chainId ?? "";
    message.chainDisplayName = object.chainDisplayName ?? "";
    message.tokenGatewayAddress = object.tokenGatewayAddress ?? "";
    message.encoding = object.encoding ?? "";
    message.isEnabled = object.isEnabled ?? false;
    return message;
  },
};

const baseMsgCreateConnectionResponse: object = {};

export const MsgCreateConnectionResponse = {
  encode(
    _: MsgCreateConnectionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateConnectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateConnectionResponse,
    } as MsgCreateConnectionResponse;
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

  fromJSON(_: any): MsgCreateConnectionResponse {
    const message = {
      ...baseMsgCreateConnectionResponse,
    } as MsgCreateConnectionResponse;
    return message;
  },

  toJSON(_: MsgCreateConnectionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateConnectionResponse>
  ): MsgCreateConnectionResponse {
    const message = {
      ...baseMsgCreateConnectionResponse,
    } as MsgCreateConnectionResponse;
    return message;
  },
};

const baseMsgUpdateConnection: object = { creator: "", connectionId: "" };

export const MsgUpdateConnection = {
  encode(
    message: MsgUpdateConnection,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.updateConnectionParams !== undefined) {
      UpdateConnectionParams.encode(
        message.updateConnectionParams,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateConnection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateConnection } as MsgUpdateConnection;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.updateConnectionParams = UpdateConnectionParams.decode(
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

  fromJSON(object: any): MsgUpdateConnection {
    const message = { ...baseMsgUpdateConnection } as MsgUpdateConnection;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.updateConnectionParams =
      object.updateConnectionParams !== undefined &&
      object.updateConnectionParams !== null
        ? UpdateConnectionParams.fromJSON(object.updateConnectionParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdateConnection): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.updateConnectionParams !== undefined &&
      (obj.updateConnectionParams = message.updateConnectionParams
        ? UpdateConnectionParams.toJSON(message.updateConnectionParams)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateConnection>): MsgUpdateConnection {
    const message = { ...baseMsgUpdateConnection } as MsgUpdateConnection;
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    message.updateConnectionParams =
      object.updateConnectionParams !== undefined &&
      object.updateConnectionParams !== null
        ? UpdateConnectionParams.fromPartial(object.updateConnectionParams)
        : undefined;
    return message;
  },
};

const baseUpdateConnectionParams: object = {};

export const UpdateConnectionParams = {
  encode(
    message: UpdateConnectionParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.chainDisplayName !== undefined) {
      StringValue.encode(
        { value: message.chainDisplayName! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.isEnabled !== undefined) {
      BoolValue.encode(
        { value: message.isEnabled! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateConnectionParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateConnectionParams } as UpdateConnectionParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainDisplayName = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 2:
          message.isEnabled = BoolValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateConnectionParams {
    const message = { ...baseUpdateConnectionParams } as UpdateConnectionParams;
    message.chainDisplayName =
      object.chainDisplayName !== undefined && object.chainDisplayName !== null
        ? String(object.chainDisplayName)
        : undefined;
    message.isEnabled =
      object.isEnabled !== undefined && object.isEnabled !== null
        ? Boolean(object.isEnabled)
        : undefined;
    return message;
  },

  toJSON(message: UpdateConnectionParams): unknown {
    const obj: any = {};
    message.chainDisplayName !== undefined &&
      (obj.chainDisplayName = message.chainDisplayName);
    message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateConnectionParams>
  ): UpdateConnectionParams {
    const message = { ...baseUpdateConnectionParams } as UpdateConnectionParams;
    message.chainDisplayName = object.chainDisplayName ?? undefined;
    message.isEnabled = object.isEnabled ?? undefined;
    return message;
  },
};

const baseMsgUpdateConnectionResponse: object = {};

export const MsgUpdateConnectionResponse = {
  encode(
    _: MsgUpdateConnectionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateConnectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateConnectionResponse,
    } as MsgUpdateConnectionResponse;
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

  fromJSON(_: any): MsgUpdateConnectionResponse {
    const message = {
      ...baseMsgUpdateConnectionResponse,
    } as MsgUpdateConnectionResponse;
    return message;
  },

  toJSON(_: MsgUpdateConnectionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateConnectionResponse>
  ): MsgUpdateConnectionResponse {
    const message = {
      ...baseMsgUpdateConnectionResponse,
    } as MsgUpdateConnectionResponse;
    return message;
  },
};

const baseMsgRemoveConnection: object = { creator: "", connectionId: "" };

export const MsgRemoveConnection = {
  encode(
    message: MsgRemoveConnection,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveConnection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRemoveConnection } as MsgRemoveConnection;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveConnection {
    const message = { ...baseMsgRemoveConnection } as MsgRemoveConnection;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    return message;
  },

  toJSON(message: MsgRemoveConnection): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRemoveConnection>): MsgRemoveConnection {
    const message = { ...baseMsgRemoveConnection } as MsgRemoveConnection;
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

const baseMsgRemoveConnectionResponse: object = {};

export const MsgRemoveConnectionResponse = {
  encode(
    _: MsgRemoveConnectionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemoveConnectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRemoveConnectionResponse,
    } as MsgRemoveConnectionResponse;
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

  fromJSON(_: any): MsgRemoveConnectionResponse {
    const message = {
      ...baseMsgRemoveConnectionResponse,
    } as MsgRemoveConnectionResponse;
    return message;
  },

  toJSON(_: MsgRemoveConnectionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRemoveConnectionResponse>
  ): MsgRemoveConnectionResponse {
    const message = {
      ...baseMsgRemoveConnectionResponse,
    } as MsgRemoveConnectionResponse;
    return message;
  },
};

const baseMsgRegisterExternalToken: object = {
  creator: "",
  connectionId: "",
  assetAddress: "",
  carbonTokenName: "",
};

export const MsgRegisterExternalToken = {
  encode(
    message: MsgRegisterExternalToken,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.assetAddress !== "") {
      writer.uint32(26).string(message.assetAddress);
    }
    if (message.decimals !== undefined) {
      Int64Value.encode(
        { value: message.decimals! },
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.carbonTokenName !== "") {
      writer.uint32(42).string(message.carbonTokenName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRegisterExternalToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRegisterExternalToken,
    } as MsgRegisterExternalToken;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.assetAddress = reader.string();
          break;
        case 4:
          message.decimals = Int64Value.decode(reader, reader.uint32()).value;
          break;
        case 5:
          message.carbonTokenName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterExternalToken {
    const message = {
      ...baseMsgRegisterExternalToken,
    } as MsgRegisterExternalToken;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.assetAddress =
      object.assetAddress !== undefined && object.assetAddress !== null
        ? String(object.assetAddress)
        : "";
    message.decimals =
      object.decimals !== undefined && object.decimals !== null
        ? Long.fromValue(object.decimals)
        : undefined;
    message.carbonTokenName =
      object.carbonTokenName !== undefined && object.carbonTokenName !== null
        ? String(object.carbonTokenName)
        : "";
    return message;
  },

  toJSON(message: MsgRegisterExternalToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.assetAddress !== undefined &&
      (obj.assetAddress = message.assetAddress);
    message.decimals !== undefined && (obj.decimals = message.decimals);
    message.carbonTokenName !== undefined &&
      (obj.carbonTokenName = message.carbonTokenName);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRegisterExternalToken>
  ): MsgRegisterExternalToken {
    const message = {
      ...baseMsgRegisterExternalToken,
    } as MsgRegisterExternalToken;
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    message.assetAddress = object.assetAddress ?? "";
    message.decimals =
      object.decimals !== undefined && object.decimals !== null
        ? Long.fromValue(object.decimals)
        : undefined;
    message.carbonTokenName = object.carbonTokenName ?? "";
    return message;
  },
};

const baseMsgRegisterExternalTokenResponse: object = {};

export const MsgRegisterExternalTokenResponse = {
  encode(
    _: MsgRegisterExternalTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRegisterExternalTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRegisterExternalTokenResponse,
    } as MsgRegisterExternalTokenResponse;
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

  fromJSON(_: any): MsgRegisterExternalTokenResponse {
    const message = {
      ...baseMsgRegisterExternalTokenResponse,
    } as MsgRegisterExternalTokenResponse;
    return message;
  },

  toJSON(_: MsgRegisterExternalTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRegisterExternalTokenResponse>
  ): MsgRegisterExternalTokenResponse {
    const message = {
      ...baseMsgRegisterExternalTokenResponse,
    } as MsgRegisterExternalTokenResponse;
    return message;
  },
};

const baseMsgDeregisterExternalToken: object = {
  creator: "",
  connectionId: "",
  denom: "",
};

export const MsgDeregisterExternalToken = {
  encode(
    message: MsgDeregisterExternalToken,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeregisterExternalToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeregisterExternalToken,
    } as MsgDeregisterExternalToken;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeregisterExternalToken {
    const message = {
      ...baseMsgDeregisterExternalToken,
    } as MsgDeregisterExternalToken;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: MsgDeregisterExternalToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeregisterExternalToken>
  ): MsgDeregisterExternalToken {
    const message = {
      ...baseMsgDeregisterExternalToken,
    } as MsgDeregisterExternalToken;
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseMsgDeregisterExternalTokenResponse: object = {};

export const MsgDeregisterExternalTokenResponse = {
  encode(
    _: MsgDeregisterExternalTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeregisterExternalTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeregisterExternalTokenResponse,
    } as MsgDeregisterExternalTokenResponse;
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

  fromJSON(_: any): MsgDeregisterExternalTokenResponse {
    const message = {
      ...baseMsgDeregisterExternalTokenResponse,
    } as MsgDeregisterExternalTokenResponse;
    return message;
  },

  toJSON(_: MsgDeregisterExternalTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeregisterExternalTokenResponse>
  ): MsgDeregisterExternalTokenResponse {
    const message = {
      ...baseMsgDeregisterExternalTokenResponse,
    } as MsgDeregisterExternalTokenResponse;
    return message;
  },
};

const baseMsgDeployNativeToken: object = {
  creator: "",
  connectionId: "",
  denom: "",
};

export const MsgDeployNativeToken = {
  encode(
    message: MsgDeployNativeToken,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeployNativeToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeployNativeToken } as MsgDeployNativeToken;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeployNativeToken {
    const message = { ...baseMsgDeployNativeToken } as MsgDeployNativeToken;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: MsgDeployNativeToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeployNativeToken>): MsgDeployNativeToken {
    const message = { ...baseMsgDeployNativeToken } as MsgDeployNativeToken;
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseMsgDeployNativeTokenResponse: object = {};

export const MsgDeployNativeTokenResponse = {
  encode(
    _: MsgDeployNativeTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeployNativeTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeployNativeTokenResponse,
    } as MsgDeployNativeTokenResponse;
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

  fromJSON(_: any): MsgDeployNativeTokenResponse {
    const message = {
      ...baseMsgDeployNativeTokenResponse,
    } as MsgDeployNativeTokenResponse;
    return message;
  },

  toJSON(_: MsgDeployNativeTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeployNativeTokenResponse>
  ): MsgDeployNativeTokenResponse {
    const message = {
      ...baseMsgDeployNativeTokenResponse,
    } as MsgDeployNativeTokenResponse;
    return message;
  },
};

const baseMsgRegisterDeployedToken: object = {
  creator: "",
  connectionId: "",
  tokenAddress: "",
  denom: "",
};

export const MsgRegisterDeployedToken = {
  encode(
    message: MsgRegisterDeployedToken,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.tokenAddress !== "") {
      writer.uint32(26).string(message.tokenAddress);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRegisterDeployedToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRegisterDeployedToken,
    } as MsgRegisterDeployedToken;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.tokenAddress = reader.string();
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

  fromJSON(object: any): MsgRegisterDeployedToken {
    const message = {
      ...baseMsgRegisterDeployedToken,
    } as MsgRegisterDeployedToken;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.tokenAddress =
      object.tokenAddress !== undefined && object.tokenAddress !== null
        ? String(object.tokenAddress)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: MsgRegisterDeployedToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.tokenAddress !== undefined &&
      (obj.tokenAddress = message.tokenAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRegisterDeployedToken>
  ): MsgRegisterDeployedToken {
    const message = {
      ...baseMsgRegisterDeployedToken,
    } as MsgRegisterDeployedToken;
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    message.tokenAddress = object.tokenAddress ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseMsgRegisterDeployedTokenResponse: object = {};

export const MsgRegisterDeployedTokenResponse = {
  encode(
    _: MsgRegisterDeployedTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRegisterDeployedTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRegisterDeployedTokenResponse,
    } as MsgRegisterDeployedTokenResponse;
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

  fromJSON(_: any): MsgRegisterDeployedTokenResponse {
    const message = {
      ...baseMsgRegisterDeployedTokenResponse,
    } as MsgRegisterDeployedTokenResponse;
    return message;
  },

  toJSON(_: MsgRegisterDeployedTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRegisterDeployedTokenResponse>
  ): MsgRegisterDeployedTokenResponse {
    const message = {
      ...baseMsgRegisterDeployedTokenResponse,
    } as MsgRegisterDeployedTokenResponse;
    return message;
  },
};

const baseMsgWithdrawToken: object = {
  creator: "",
  connectionId: "",
  receiver: "",
};

export const MsgWithdrawToken = {
  encode(
    message: MsgWithdrawToken,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    if (message.tokens !== undefined) {
      Coin.encode(message.tokens, writer.uint32(34).fork()).ldelim();
    }
    if (message.relayFee !== undefined) {
      RelayFee.encode(message.relayFee, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgWithdrawToken } as MsgWithdrawToken;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        case 4:
          message.tokens = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.relayFee = RelayFee.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawToken {
    const message = { ...baseMsgWithdrawToken } as MsgWithdrawToken;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.receiver =
      object.receiver !== undefined && object.receiver !== null
        ? String(object.receiver)
        : "";
    message.tokens =
      object.tokens !== undefined && object.tokens !== null
        ? Coin.fromJSON(object.tokens)
        : undefined;
    message.relayFee =
      object.relayFee !== undefined && object.relayFee !== null
        ? RelayFee.fromJSON(object.relayFee)
        : undefined;
    return message;
  },

  toJSON(message: MsgWithdrawToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.tokens !== undefined &&
      (obj.tokens = message.tokens ? Coin.toJSON(message.tokens) : undefined);
    message.relayFee !== undefined &&
      (obj.relayFee = message.relayFee
        ? RelayFee.toJSON(message.relayFee)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgWithdrawToken>): MsgWithdrawToken {
    const message = { ...baseMsgWithdrawToken } as MsgWithdrawToken;
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    message.receiver = object.receiver ?? "";
    message.tokens =
      object.tokens !== undefined && object.tokens !== null
        ? Coin.fromPartial(object.tokens)
        : undefined;
    message.relayFee =
      object.relayFee !== undefined && object.relayFee !== null
        ? RelayFee.fromPartial(object.relayFee)
        : undefined;
    return message;
  },
};

const baseMsgWithdrawTokenResponse: object = {};

export const MsgWithdrawTokenResponse = {
  encode(
    _: MsgWithdrawTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgWithdrawTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgWithdrawTokenResponse,
    } as MsgWithdrawTokenResponse;
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

  fromJSON(_: any): MsgWithdrawTokenResponse {
    const message = {
      ...baseMsgWithdrawTokenResponse,
    } as MsgWithdrawTokenResponse;
    return message;
  },

  toJSON(_: MsgWithdrawTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgWithdrawTokenResponse>
  ): MsgWithdrawTokenResponse {
    const message = {
      ...baseMsgWithdrawTokenResponse,
    } as MsgWithdrawTokenResponse;
    return message;
  },
};

const baseMsgRegisterExecutable: object = {
  creator: "",
  connectionId: "",
  executableAddress: "",
};

export const MsgRegisterExecutable = {
  encode(
    message: MsgRegisterExecutable,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.executableAddress !== "") {
      writer.uint32(26).string(message.executableAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRegisterExecutable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRegisterExecutable } as MsgRegisterExecutable;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.executableAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterExecutable {
    const message = { ...baseMsgRegisterExecutable } as MsgRegisterExecutable;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.executableAddress =
      object.executableAddress !== undefined &&
      object.executableAddress !== null
        ? String(object.executableAddress)
        : "";
    return message;
  },

  toJSON(message: MsgRegisterExecutable): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.executableAddress !== undefined &&
      (obj.executableAddress = message.executableAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRegisterExecutable>
  ): MsgRegisterExecutable {
    const message = { ...baseMsgRegisterExecutable } as MsgRegisterExecutable;
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    message.executableAddress = object.executableAddress ?? "";
    return message;
  },
};

const baseMsgRegisterExecutableResponse: object = {};

export const MsgRegisterExecutableResponse = {
  encode(
    _: MsgRegisterExecutableResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRegisterExecutableResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRegisterExecutableResponse,
    } as MsgRegisterExecutableResponse;
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

  fromJSON(_: any): MsgRegisterExecutableResponse {
    const message = {
      ...baseMsgRegisterExecutableResponse,
    } as MsgRegisterExecutableResponse;
    return message;
  },

  toJSON(_: MsgRegisterExecutableResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRegisterExecutableResponse>
  ): MsgRegisterExecutableResponse {
    const message = {
      ...baseMsgRegisterExecutableResponse,
    } as MsgRegisterExecutableResponse;
    return message;
  },
};

const baseMsgDeregisterExecutable: object = {
  creator: "",
  connectionId: "",
  executableAddress: "",
};

export const MsgDeregisterExecutable = {
  encode(
    message: MsgDeregisterExecutable,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.executableAddress !== "") {
      writer.uint32(26).string(message.executableAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeregisterExecutable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeregisterExecutable,
    } as MsgDeregisterExecutable;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.executableAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeregisterExecutable {
    const message = {
      ...baseMsgDeregisterExecutable,
    } as MsgDeregisterExecutable;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.executableAddress =
      object.executableAddress !== undefined &&
      object.executableAddress !== null
        ? String(object.executableAddress)
        : "";
    return message;
  },

  toJSON(message: MsgDeregisterExecutable): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.executableAddress !== undefined &&
      (obj.executableAddress = message.executableAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeregisterExecutable>
  ): MsgDeregisterExecutable {
    const message = {
      ...baseMsgDeregisterExecutable,
    } as MsgDeregisterExecutable;
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    message.executableAddress = object.executableAddress ?? "";
    return message;
  },
};

const baseMsgDeregisterExecutableResponse: object = {};

export const MsgDeregisterExecutableResponse = {
  encode(
    _: MsgDeregisterExecutableResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeregisterExecutableResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeregisterExecutableResponse,
    } as MsgDeregisterExecutableResponse;
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

  fromJSON(_: any): MsgDeregisterExecutableResponse {
    const message = {
      ...baseMsgDeregisterExecutableResponse,
    } as MsgDeregisterExecutableResponse;
    return message;
  },

  toJSON(_: MsgDeregisterExecutableResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeregisterExecutableResponse>
  ): MsgDeregisterExecutableResponse {
    const message = {
      ...baseMsgDeregisterExecutableResponse,
    } as MsgDeregisterExecutableResponse;
    return message;
  },
};

const baseMsgExecuteOnExecutableContract: object = {
  creator: "",
  connectionId: "",
  executableAddress: "",
};

export const MsgExecuteOnExecutableContract = {
  encode(
    message: MsgExecuteOnExecutableContract,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.executableAddress !== "") {
      writer.uint32(26).string(message.executableAddress);
    }
    if (message.executionBytes.length !== 0) {
      writer.uint32(34).bytes(message.executionBytes);
    }
    if (message.tokens !== undefined) {
      Coin.encode(message.tokens, writer.uint32(42).fork()).ldelim();
    }
    if (message.relayFee !== undefined) {
      RelayFee.encode(message.relayFee, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgExecuteOnExecutableContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgExecuteOnExecutableContract,
    } as MsgExecuteOnExecutableContract;
    message.executionBytes = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.executableAddress = reader.string();
          break;
        case 4:
          message.executionBytes = reader.bytes();
          break;
        case 5:
          message.tokens = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.relayFee = RelayFee.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExecuteOnExecutableContract {
    const message = {
      ...baseMsgExecuteOnExecutableContract,
    } as MsgExecuteOnExecutableContract;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.executableAddress =
      object.executableAddress !== undefined &&
      object.executableAddress !== null
        ? String(object.executableAddress)
        : "";
    message.executionBytes =
      object.executionBytes !== undefined && object.executionBytes !== null
        ? bytesFromBase64(object.executionBytes)
        : new Uint8Array();
    message.tokens =
      object.tokens !== undefined && object.tokens !== null
        ? Coin.fromJSON(object.tokens)
        : undefined;
    message.relayFee =
      object.relayFee !== undefined && object.relayFee !== null
        ? RelayFee.fromJSON(object.relayFee)
        : undefined;
    return message;
  },

  toJSON(message: MsgExecuteOnExecutableContract): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.executableAddress !== undefined &&
      (obj.executableAddress = message.executableAddress);
    message.executionBytes !== undefined &&
      (obj.executionBytes = base64FromBytes(
        message.executionBytes !== undefined
          ? message.executionBytes
          : new Uint8Array()
      ));
    message.tokens !== undefined &&
      (obj.tokens = message.tokens ? Coin.toJSON(message.tokens) : undefined);
    message.relayFee !== undefined &&
      (obj.relayFee = message.relayFee
        ? RelayFee.toJSON(message.relayFee)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgExecuteOnExecutableContract>
  ): MsgExecuteOnExecutableContract {
    const message = {
      ...baseMsgExecuteOnExecutableContract,
    } as MsgExecuteOnExecutableContract;
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    message.executableAddress = object.executableAddress ?? "";
    message.executionBytes = object.executionBytes ?? new Uint8Array();
    message.tokens =
      object.tokens !== undefined && object.tokens !== null
        ? Coin.fromPartial(object.tokens)
        : undefined;
    message.relayFee =
      object.relayFee !== undefined && object.relayFee !== null
        ? RelayFee.fromPartial(object.relayFee)
        : undefined;
    return message;
  },
};

const baseMsgExecuteOnExecutableContractResponse: object = {};

export const MsgExecuteOnExecutableContractResponse = {
  encode(
    _: MsgExecuteOnExecutableContractResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgExecuteOnExecutableContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgExecuteOnExecutableContractResponse,
    } as MsgExecuteOnExecutableContractResponse;
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

  fromJSON(_: any): MsgExecuteOnExecutableContractResponse {
    const message = {
      ...baseMsgExecuteOnExecutableContractResponse,
    } as MsgExecuteOnExecutableContractResponse;
    return message;
  },

  toJSON(_: MsgExecuteOnExecutableContractResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgExecuteOnExecutableContractResponse>
  ): MsgExecuteOnExecutableContractResponse {
    const message = {
      ...baseMsgExecuteOnExecutableContractResponse,
    } as MsgExecuteOnExecutableContractResponse;
    return message;
  },
};

const baseMsgAllowExternalExecutor: object = {
  creator: "",
  connectionId: "",
  executorAddress: "",
};

export const MsgAllowExternalExecutor = {
  encode(
    message: MsgAllowExternalExecutor,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.executorAddress !== "") {
      writer.uint32(26).string(message.executorAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAllowExternalExecutor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAllowExternalExecutor,
    } as MsgAllowExternalExecutor;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.executorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAllowExternalExecutor {
    const message = {
      ...baseMsgAllowExternalExecutor,
    } as MsgAllowExternalExecutor;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.executorAddress =
      object.executorAddress !== undefined && object.executorAddress !== null
        ? String(object.executorAddress)
        : "";
    return message;
  },

  toJSON(message: MsgAllowExternalExecutor): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.executorAddress !== undefined &&
      (obj.executorAddress = message.executorAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgAllowExternalExecutor>
  ): MsgAllowExternalExecutor {
    const message = {
      ...baseMsgAllowExternalExecutor,
    } as MsgAllowExternalExecutor;
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    message.executorAddress = object.executorAddress ?? "";
    return message;
  },
};

const baseMsgAllowExternalExecutorResponse: object = {};

export const MsgAllowExternalExecutorResponse = {
  encode(
    _: MsgAllowExternalExecutorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAllowExternalExecutorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAllowExternalExecutorResponse,
    } as MsgAllowExternalExecutorResponse;
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

  fromJSON(_: any): MsgAllowExternalExecutorResponse {
    const message = {
      ...baseMsgAllowExternalExecutorResponse,
    } as MsgAllowExternalExecutorResponse;
    return message;
  },

  toJSON(_: MsgAllowExternalExecutorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAllowExternalExecutorResponse>
  ): MsgAllowExternalExecutorResponse {
    const message = {
      ...baseMsgAllowExternalExecutorResponse,
    } as MsgAllowExternalExecutorResponse;
    return message;
  },
};

const baseMsgRemoveExternalExecutor: object = {
  creator: "",
  connectionId: "",
  executorAddress: "",
};

export const MsgRemoveExternalExecutor = {
  encode(
    message: MsgRemoveExternalExecutor,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.executorAddress !== "") {
      writer.uint32(26).string(message.executorAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemoveExternalExecutor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRemoveExternalExecutor,
    } as MsgRemoveExternalExecutor;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.executorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveExternalExecutor {
    const message = {
      ...baseMsgRemoveExternalExecutor,
    } as MsgRemoveExternalExecutor;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.executorAddress =
      object.executorAddress !== undefined && object.executorAddress !== null
        ? String(object.executorAddress)
        : "";
    return message;
  },

  toJSON(message: MsgRemoveExternalExecutor): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.executorAddress !== undefined &&
      (obj.executorAddress = message.executorAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRemoveExternalExecutor>
  ): MsgRemoveExternalExecutor {
    const message = {
      ...baseMsgRemoveExternalExecutor,
    } as MsgRemoveExternalExecutor;
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    message.executorAddress = object.executorAddress ?? "";
    return message;
  },
};

const baseMsgRemoveExternalExecutorResponse: object = {};

export const MsgRemoveExternalExecutorResponse = {
  encode(
    _: MsgRemoveExternalExecutorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemoveExternalExecutorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRemoveExternalExecutorResponse,
    } as MsgRemoveExternalExecutorResponse;
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

  fromJSON(_: any): MsgRemoveExternalExecutorResponse {
    const message = {
      ...baseMsgRemoveExternalExecutorResponse,
    } as MsgRemoveExternalExecutorResponse;
    return message;
  },

  toJSON(_: MsgRemoveExternalExecutorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRemoveExternalExecutorResponse>
  ): MsgRemoveExternalExecutorResponse {
    const message = {
      ...baseMsgRemoveExternalExecutorResponse,
    } as MsgRemoveExternalExecutorResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** * bridge functions ** */
  SetBridgeEnabled(
    request: MsgSetBridgeEnabled
  ): Promise<MsgSetBridgeEnabledResponse>;
  UpdateAxelarIbcChannel(
    request: MsgUpdateAxelarIbcChannel
  ): Promise<MsgUpdateAxelarIbcChannelResponse>;
  UpdateIbcTimeoutHeightOffset(
    request: MsgUpdateIbcTimeoutHeightOffset
  ): Promise<MsgUpdateIbcTimeoutHeightOffsetResponse>;
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  CreateConnection(
    request: MsgCreateConnection
  ): Promise<MsgCreateConnectionResponse>;
  UpdateConnection(
    request: MsgUpdateConnection
  ): Promise<MsgUpdateConnectionResponse>;
  RemoveConnection(
    request: MsgRemoveConnection
  ): Promise<MsgRemoveConnectionResponse>;
  RegisterExternalToken(
    request: MsgRegisterExternalToken
  ): Promise<MsgRegisterExternalTokenResponse>;
  DeregisterExternalToken(
    request: MsgDeregisterExternalToken
  ): Promise<MsgDeregisterExternalTokenResponse>;
  DeployNativeToken(
    request: MsgDeployNativeToken
  ): Promise<MsgDeployNativeTokenResponse>;
  RegisterDeployedToken(
    request: MsgRegisterDeployedToken
  ): Promise<MsgRegisterDeployedTokenResponse>;
  WithdrawToken(request: MsgWithdrawToken): Promise<MsgWithdrawTokenResponse>;
  RegisterExecutable(
    request: MsgRegisterExecutable
  ): Promise<MsgRegisterExecutableResponse>;
  DeregisterExecutable(
    request: MsgDeregisterExecutable
  ): Promise<MsgDeregisterExecutableResponse>;
  ExecuteOnExecutableContract(
    request: MsgExecuteOnExecutableContract
  ): Promise<MsgExecuteOnExecutableContractResponse>;
  AllowExternalExecutor(
    request: MsgAllowExternalExecutor
  ): Promise<MsgAllowExternalExecutorResponse>;
  RemoveExternalExecutor(
    request: MsgRemoveExternalExecutor
  ): Promise<MsgRemoveExternalExecutorResponse>;
  /** * axelar convenience functions ** */
  AxelarSendToken(
    request: MsgAxelarSendToken
  ): Promise<MsgAxelarSendTokenResponse>;
  AxelarCallContract(
    request: MsgAxelarCallContract
  ): Promise<MsgAxelarCallContractResponse>;
  AxelarCallContractWithToken(
    request: MsgAxelarCallContractWithToken
  ): Promise<MsgAxelarCallContractWithTokenResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SetBridgeEnabled = this.SetBridgeEnabled.bind(this);
    this.UpdateAxelarIbcChannel = this.UpdateAxelarIbcChannel.bind(this);
    this.UpdateIbcTimeoutHeightOffset =
      this.UpdateIbcTimeoutHeightOffset.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
    this.CreateConnection = this.CreateConnection.bind(this);
    this.UpdateConnection = this.UpdateConnection.bind(this);
    this.RemoveConnection = this.RemoveConnection.bind(this);
    this.RegisterExternalToken = this.RegisterExternalToken.bind(this);
    this.DeregisterExternalToken = this.DeregisterExternalToken.bind(this);
    this.DeployNativeToken = this.DeployNativeToken.bind(this);
    this.RegisterDeployedToken = this.RegisterDeployedToken.bind(this);
    this.WithdrawToken = this.WithdrawToken.bind(this);
    this.RegisterExecutable = this.RegisterExecutable.bind(this);
    this.DeregisterExecutable = this.DeregisterExecutable.bind(this);
    this.ExecuteOnExecutableContract =
      this.ExecuteOnExecutableContract.bind(this);
    this.AllowExternalExecutor = this.AllowExternalExecutor.bind(this);
    this.RemoveExternalExecutor = this.RemoveExternalExecutor.bind(this);
    this.AxelarSendToken = this.AxelarSendToken.bind(this);
    this.AxelarCallContract = this.AxelarCallContract.bind(this);
    this.AxelarCallContractWithToken =
      this.AxelarCallContractWithToken.bind(this);
  }
  SetBridgeEnabled(
    request: MsgSetBridgeEnabled
  ): Promise<MsgSetBridgeEnabledResponse> {
    const data = MsgSetBridgeEnabled.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Msg",
      "SetBridgeEnabled",
      data
    );
    return promise.then((data) =>
      MsgSetBridgeEnabledResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateAxelarIbcChannel(
    request: MsgUpdateAxelarIbcChannel
  ): Promise<MsgUpdateAxelarIbcChannelResponse> {
    const data = MsgUpdateAxelarIbcChannel.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Msg",
      "UpdateAxelarIbcChannel",
      data
    );
    return promise.then((data) =>
      MsgUpdateAxelarIbcChannelResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateIbcTimeoutHeightOffset(
    request: MsgUpdateIbcTimeoutHeightOffset
  ): Promise<MsgUpdateIbcTimeoutHeightOffsetResponse> {
    const data = MsgUpdateIbcTimeoutHeightOffset.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Msg",
      "UpdateIbcTimeoutHeightOffset",
      data
    );
    return promise.then((data) =>
      MsgUpdateIbcTimeoutHeightOffsetResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Msg",
      "UpdateParams",
      data
    );
    return promise.then((data) =>
      MsgUpdateParamsResponse.decode(new _m0.Reader(data))
    );
  }

  CreateConnection(
    request: MsgCreateConnection
  ): Promise<MsgCreateConnectionResponse> {
    const data = MsgCreateConnection.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Msg",
      "CreateConnection",
      data
    );
    return promise.then((data) =>
      MsgCreateConnectionResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateConnection(
    request: MsgUpdateConnection
  ): Promise<MsgUpdateConnectionResponse> {
    const data = MsgUpdateConnection.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Msg",
      "UpdateConnection",
      data
    );
    return promise.then((data) =>
      MsgUpdateConnectionResponse.decode(new _m0.Reader(data))
    );
  }

  RemoveConnection(
    request: MsgRemoveConnection
  ): Promise<MsgRemoveConnectionResponse> {
    const data = MsgRemoveConnection.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Msg",
      "RemoveConnection",
      data
    );
    return promise.then((data) =>
      MsgRemoveConnectionResponse.decode(new _m0.Reader(data))
    );
  }

  RegisterExternalToken(
    request: MsgRegisterExternalToken
  ): Promise<MsgRegisterExternalTokenResponse> {
    const data = MsgRegisterExternalToken.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Msg",
      "RegisterExternalToken",
      data
    );
    return promise.then((data) =>
      MsgRegisterExternalTokenResponse.decode(new _m0.Reader(data))
    );
  }

  DeregisterExternalToken(
    request: MsgDeregisterExternalToken
  ): Promise<MsgDeregisterExternalTokenResponse> {
    const data = MsgDeregisterExternalToken.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Msg",
      "DeregisterExternalToken",
      data
    );
    return promise.then((data) =>
      MsgDeregisterExternalTokenResponse.decode(new _m0.Reader(data))
    );
  }

  DeployNativeToken(
    request: MsgDeployNativeToken
  ): Promise<MsgDeployNativeTokenResponse> {
    const data = MsgDeployNativeToken.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Msg",
      "DeployNativeToken",
      data
    );
    return promise.then((data) =>
      MsgDeployNativeTokenResponse.decode(new _m0.Reader(data))
    );
  }

  RegisterDeployedToken(
    request: MsgRegisterDeployedToken
  ): Promise<MsgRegisterDeployedTokenResponse> {
    const data = MsgRegisterDeployedToken.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Msg",
      "RegisterDeployedToken",
      data
    );
    return promise.then((data) =>
      MsgRegisterDeployedTokenResponse.decode(new _m0.Reader(data))
    );
  }

  WithdrawToken(request: MsgWithdrawToken): Promise<MsgWithdrawTokenResponse> {
    const data = MsgWithdrawToken.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Msg",
      "WithdrawToken",
      data
    );
    return promise.then((data) =>
      MsgWithdrawTokenResponse.decode(new _m0.Reader(data))
    );
  }

  RegisterExecutable(
    request: MsgRegisterExecutable
  ): Promise<MsgRegisterExecutableResponse> {
    const data = MsgRegisterExecutable.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Msg",
      "RegisterExecutable",
      data
    );
    return promise.then((data) =>
      MsgRegisterExecutableResponse.decode(new _m0.Reader(data))
    );
  }

  DeregisterExecutable(
    request: MsgDeregisterExecutable
  ): Promise<MsgDeregisterExecutableResponse> {
    const data = MsgDeregisterExecutable.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Msg",
      "DeregisterExecutable",
      data
    );
    return promise.then((data) =>
      MsgDeregisterExecutableResponse.decode(new _m0.Reader(data))
    );
  }

  ExecuteOnExecutableContract(
    request: MsgExecuteOnExecutableContract
  ): Promise<MsgExecuteOnExecutableContractResponse> {
    const data = MsgExecuteOnExecutableContract.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Msg",
      "ExecuteOnExecutableContract",
      data
    );
    return promise.then((data) =>
      MsgExecuteOnExecutableContractResponse.decode(new _m0.Reader(data))
    );
  }

  AllowExternalExecutor(
    request: MsgAllowExternalExecutor
  ): Promise<MsgAllowExternalExecutorResponse> {
    const data = MsgAllowExternalExecutor.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Msg",
      "AllowExternalExecutor",
      data
    );
    return promise.then((data) =>
      MsgAllowExternalExecutorResponse.decode(new _m0.Reader(data))
    );
  }

  RemoveExternalExecutor(
    request: MsgRemoveExternalExecutor
  ): Promise<MsgRemoveExternalExecutorResponse> {
    const data = MsgRemoveExternalExecutor.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Msg",
      "RemoveExternalExecutor",
      data
    );
    return promise.then((data) =>
      MsgRemoveExternalExecutorResponse.decode(new _m0.Reader(data))
    );
  }

  AxelarSendToken(
    request: MsgAxelarSendToken
  ): Promise<MsgAxelarSendTokenResponse> {
    const data = MsgAxelarSendToken.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Msg",
      "AxelarSendToken",
      data
    );
    return promise.then((data) =>
      MsgAxelarSendTokenResponse.decode(new _m0.Reader(data))
    );
  }

  AxelarCallContract(
    request: MsgAxelarCallContract
  ): Promise<MsgAxelarCallContractResponse> {
    const data = MsgAxelarCallContract.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Msg",
      "AxelarCallContract",
      data
    );
    return promise.then((data) =>
      MsgAxelarCallContractResponse.decode(new _m0.Reader(data))
    );
  }

  AxelarCallContractWithToken(
    request: MsgAxelarCallContractWithToken
  ): Promise<MsgAxelarCallContractWithTokenResponse> {
    const data = MsgAxelarCallContractWithToken.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Msg",
      "AxelarCallContractWithToken",
      data
    );
    return promise.then((data) =>
      MsgAxelarCallContractWithTokenResponse.decode(new _m0.Reader(data))
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

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
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
