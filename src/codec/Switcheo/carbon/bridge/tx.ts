/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { Params } from "./params";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { ControllerContracts, ControllersToUpdate } from "./bridge";
import {
  StringValue,
  BoolValue,
  Int64Value,
} from "../../../google/protobuf/wrappers";

export const protobufPackage = "Switcheo.carbon.bridge";

export interface MsgSetBridgeEnabled {
  creator: string;
  bridgeId: Long;
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

export interface MsgUpdateMaxRelayExpiry {
  creator: string;
  expiry?: Duration;
}

export interface MsgUpdateMaxRelayExpiryResponse {}

export interface MsgUpdateRelayWhitelistDuration {
  creator: string;
  whitelistDuration?: Duration;
}

export interface MsgUpdateRelayWhitelistDurationResponse {}

export interface MsgUpdateRefundAddress {
  creator: string;
  refundAddress: string;
}

export interface MsgUpdateRefundAddressResponse {}

export interface MsgUpdateParams {
  authority: string;
  params?: Params;
}

export interface MsgUpdateParamsResponse {}

/**
 * MsgAxelarSendToken is a convenience method to send a *Axelar Supported* token
 * via axelar.
 */
export interface MsgAxelarSendToken {
  /** for this message, the message creator will be the sender of the token */
  creator: string;
  /**
   * the destination chain. see axelar for list of supported chain names:
   * https://docs.axelar.dev/dev/reference/mainnet-chain-names
   */
  destinationChain: string;
  /** the address on destination chain */
  destinationAddress: string;
  /**
   * see supported tokens: https://docs.axelar.dev/resources/mainnet#assets,
   * convert them to ibc equivalent on carbon
   */
  tokens?: Coin;
}

export interface MsgAxelarSendTokenResponse {}

/**
 * MsgAxelarCallContract is a convenience method to do a GMP call to axelar.
 * This method will allow you do a `callContract` without having to specify the
 * following: TypeGeneralMessageWithToken, IBC channel, IBC port, AxelarGMPAcc
 */
export interface MsgAxelarCallContract {
  /** for this message, the message creator will be the sender */
  creator: string;
  /**
   * the destination chain. see axelar for list of supported chain names:
   * https://docs.axelar.dev/dev/reference/mainnet-chain-names
   */
  destinationChain: string;
  /** the address on destination chain */
  destinationAddress: string;
  /** abi encoded bytes TODO: give abi encoding example? */
  payload: Uint8Array;
}

export interface MsgAxelarCallContractResponse {}

/**
 * MsgAxelarCallContractWithToken is a convenience method to do a GMP call to
 * axelar and attach some *Axelar Supported* tokens This method will allow you
 * do a `callContractWithToken` without having to specify the following:
 * TypeGeneralMessageWithToken, IBC channel, IBC port, AxelarGMPAcc
 */
export interface MsgAxelarCallContractWithToken {
  /** for this message, the message creator will be the sender */
  creator: string;
  /**
   * the destination chain. see axelar for list of supported chain names:
   * https://docs.axelar.dev/dev/reference/mainnet-chain-names
   */
  destinationChain: string;
  /** the address on destination chain */
  destinationAddress: string;
  /**
   * see supported tokens: https://docs.axelar.dev/resources/mainnet#assets,
   * convert them to ibc equivalent on carbon
   */
  tokens?: Coin;
  /** abi encoded bytes TODO: give abi encoding example? */
  payload: Uint8Array;
}

export interface MsgAxelarCallContractWithTokenResponse {}

export interface MsgCreateConnection {
  creator: string;
  bridgeId: Long;
  chainId: string;
  chainDisplayName: string;
  tokenGatewayAddress: string;
  encoding: string;
  isEnabled: boolean;
  isOptimisticConfirm: boolean;
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
  isOptimisticConfirm?: boolean;
}

export interface MsgUpdateConnectionResponse {}

export interface MsgRemoveConnection {
  creator: string;
  connectionId: string;
}

export interface MsgRemoveConnectionResponse {}

export interface MsgAddControllersForConnection {
  creator: string;
  controllers?: ControllerContracts;
}

export interface MsgAddControllersForConnectionResponse {}

export interface MsgUpdateControllersForConnection {
  creator: string;
  connectionId: string;
  controllers?: ControllersToUpdate;
}

export interface MsgUpdateControllersForConnectionResponse {}

export interface MsgRemoveControllersForConnection {
  creator: string;
  connectionId: string;
}

export interface MsgRemoveControllersForConnectionResponse {}

export interface MsgRemoveNonceMapForConnection {
  creator: string;
  connectionId: string;
  gatewayAddress: string;
}

export interface MsgRemoveNonceMapForConnectionResponse {}

export interface MsgRegisterExternalToken {
  creator: string;
  connectionId: string;
  assetAddress: string;
  decimals?: Long;
  carbonTokenName?: string;
  relayFee?: Coin;
  expiryDuration?: Duration;
}

export interface MsgRegisterExternalTokenResponse {}

export interface MsgDeregisterExternalToken {
  creator: string;
  connectionId: string;
  denom: string;
  relayFee?: Coin;
  expiryDuration?: Duration;
}

export interface MsgDeregisterExternalTokenResponse {}

export interface MsgDeployNativeToken {
  creator: string;
  connectionId: string;
  denom: string;
  relayFee?: Coin;
  expiryDuration?: Duration;
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
  relayFee?: Coin;
  expiryDuration?: Duration;
}

export interface MsgWithdrawTokenResponse {}

export interface MsgUpdateExternalToken {
  creator: string;
  connectionId: string;
  assetAddress: string;
  tokenName: string;
  decimals: Long;
  isCarbonOwned: boolean;
}

export interface MsgUpdateExternalTokenResponse {}

export interface MsgDeleteExternalToken {
  creator: string;
  connectionId: string;
  denom: string;
}

export interface MsgDeleteExternalTokenResponse {}

export interface MsgExecuteFromCarbon {
  creator: string;
  connectionId: string;
  executionContract: string;
  method: string;
  executionBytes: Uint8Array;
  tokens?: Coin;
  relayFee?: Coin;
  expiryDuration?: Duration;
}

export interface MsgExecuteFromCarbonResponse {}

export interface MsgStartRelay {
  relayer: string;
  nonce: Long;
}

export interface MsgStartRelayResponse {}

export interface MsgPruneExpiredPendingActions {
  creator: string;
  nonces: Long[];
}

export interface MsgPruneExpiredPendingActionsResponse {}

export interface MsgRevertPendingAction {
  authority: string;
  connectionId: string;
  nonce: Long;
  actionType: Long;
}

export interface MsgRevertPendingActionResponse {}

export interface MsgConfirmPendingAction {
  authority: string;
  connectionId: string;
  nonce: Long;
  actionType: Long;
}

export interface MsgConfirmPendingActionResponse {}

export interface MsgAddRelayer {
  authority: string;
  relayer: string;
}

export interface MsgAddRelayerResponse {}

export interface MsgRemoveRelayer {
  authority: string;
  relayer: string;
}

export interface MsgRemoveRelayerResponse {}

const baseMsgSetBridgeEnabled: object = {
  creator: "",
  bridgeId: Long.UZERO,
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
    if (!message.bridgeId.isZero()) {
      writer.uint32(16).uint64(message.bridgeId);
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
          message.bridgeId = reader.uint64() as Long;
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
        ? Long.fromString(object.bridgeId)
        : Long.UZERO;
    message.isEnabled =
      object.isEnabled !== undefined && object.isEnabled !== null
        ? Boolean(object.isEnabled)
        : false;
    return message;
  },

  toJSON(message: MsgSetBridgeEnabled): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.bridgeId !== undefined &&
      (obj.bridgeId = (message.bridgeId || Long.UZERO).toString());
    message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetBridgeEnabled>): MsgSetBridgeEnabled {
    const message = { ...baseMsgSetBridgeEnabled } as MsgSetBridgeEnabled;
    message.creator = object.creator ?? "";
    message.bridgeId =
      object.bridgeId !== undefined && object.bridgeId !== null
        ? Long.fromValue(object.bridgeId)
        : Long.UZERO;
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

const baseMsgUpdateMaxRelayExpiry: object = { creator: "" };

export const MsgUpdateMaxRelayExpiry = {
  encode(
    message: MsgUpdateMaxRelayExpiry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.expiry !== undefined) {
      Duration.encode(message.expiry, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateMaxRelayExpiry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateMaxRelayExpiry,
    } as MsgUpdateMaxRelayExpiry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.expiry = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateMaxRelayExpiry {
    const message = {
      ...baseMsgUpdateMaxRelayExpiry,
    } as MsgUpdateMaxRelayExpiry;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.expiry =
      object.expiry !== undefined && object.expiry !== null
        ? Duration.fromJSON(object.expiry)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdateMaxRelayExpiry): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.expiry !== undefined &&
      (obj.expiry = message.expiry
        ? Duration.toJSON(message.expiry)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateMaxRelayExpiry>
  ): MsgUpdateMaxRelayExpiry {
    const message = {
      ...baseMsgUpdateMaxRelayExpiry,
    } as MsgUpdateMaxRelayExpiry;
    message.creator = object.creator ?? "";
    message.expiry =
      object.expiry !== undefined && object.expiry !== null
        ? Duration.fromPartial(object.expiry)
        : undefined;
    return message;
  },
};

const baseMsgUpdateMaxRelayExpiryResponse: object = {};

export const MsgUpdateMaxRelayExpiryResponse = {
  encode(
    _: MsgUpdateMaxRelayExpiryResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateMaxRelayExpiryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateMaxRelayExpiryResponse,
    } as MsgUpdateMaxRelayExpiryResponse;
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

  fromJSON(_: any): MsgUpdateMaxRelayExpiryResponse {
    const message = {
      ...baseMsgUpdateMaxRelayExpiryResponse,
    } as MsgUpdateMaxRelayExpiryResponse;
    return message;
  },

  toJSON(_: MsgUpdateMaxRelayExpiryResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateMaxRelayExpiryResponse>
  ): MsgUpdateMaxRelayExpiryResponse {
    const message = {
      ...baseMsgUpdateMaxRelayExpiryResponse,
    } as MsgUpdateMaxRelayExpiryResponse;
    return message;
  },
};

const baseMsgUpdateRelayWhitelistDuration: object = { creator: "" };

export const MsgUpdateRelayWhitelistDuration = {
  encode(
    message: MsgUpdateRelayWhitelistDuration,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.whitelistDuration !== undefined) {
      Duration.encode(
        message.whitelistDuration,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateRelayWhitelistDuration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateRelayWhitelistDuration,
    } as MsgUpdateRelayWhitelistDuration;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.whitelistDuration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateRelayWhitelistDuration {
    const message = {
      ...baseMsgUpdateRelayWhitelistDuration,
    } as MsgUpdateRelayWhitelistDuration;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.whitelistDuration =
      object.whitelistDuration !== undefined &&
      object.whitelistDuration !== null
        ? Duration.fromJSON(object.whitelistDuration)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdateRelayWhitelistDuration): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.whitelistDuration !== undefined &&
      (obj.whitelistDuration = message.whitelistDuration
        ? Duration.toJSON(message.whitelistDuration)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateRelayWhitelistDuration>
  ): MsgUpdateRelayWhitelistDuration {
    const message = {
      ...baseMsgUpdateRelayWhitelistDuration,
    } as MsgUpdateRelayWhitelistDuration;
    message.creator = object.creator ?? "";
    message.whitelistDuration =
      object.whitelistDuration !== undefined &&
      object.whitelistDuration !== null
        ? Duration.fromPartial(object.whitelistDuration)
        : undefined;
    return message;
  },
};

const baseMsgUpdateRelayWhitelistDurationResponse: object = {};

export const MsgUpdateRelayWhitelistDurationResponse = {
  encode(
    _: MsgUpdateRelayWhitelistDurationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateRelayWhitelistDurationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateRelayWhitelistDurationResponse,
    } as MsgUpdateRelayWhitelistDurationResponse;
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

  fromJSON(_: any): MsgUpdateRelayWhitelistDurationResponse {
    const message = {
      ...baseMsgUpdateRelayWhitelistDurationResponse,
    } as MsgUpdateRelayWhitelistDurationResponse;
    return message;
  },

  toJSON(_: MsgUpdateRelayWhitelistDurationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateRelayWhitelistDurationResponse>
  ): MsgUpdateRelayWhitelistDurationResponse {
    const message = {
      ...baseMsgUpdateRelayWhitelistDurationResponse,
    } as MsgUpdateRelayWhitelistDurationResponse;
    return message;
  },
};

const baseMsgUpdateRefundAddress: object = { creator: "", refundAddress: "" };

export const MsgUpdateRefundAddress = {
  encode(
    message: MsgUpdateRefundAddress,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.refundAddress !== "") {
      writer.uint32(18).string(message.refundAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateRefundAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateRefundAddress } as MsgUpdateRefundAddress;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.refundAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateRefundAddress {
    const message = { ...baseMsgUpdateRefundAddress } as MsgUpdateRefundAddress;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.refundAddress =
      object.refundAddress !== undefined && object.refundAddress !== null
        ? String(object.refundAddress)
        : "";
    return message;
  },

  toJSON(message: MsgUpdateRefundAddress): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.refundAddress !== undefined &&
      (obj.refundAddress = message.refundAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateRefundAddress>
  ): MsgUpdateRefundAddress {
    const message = { ...baseMsgUpdateRefundAddress } as MsgUpdateRefundAddress;
    message.creator = object.creator ?? "";
    message.refundAddress = object.refundAddress ?? "";
    return message;
  },
};

const baseMsgUpdateRefundAddressResponse: object = {};

export const MsgUpdateRefundAddressResponse = {
  encode(
    _: MsgUpdateRefundAddressResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateRefundAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateRefundAddressResponse,
    } as MsgUpdateRefundAddressResponse;
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

  fromJSON(_: any): MsgUpdateRefundAddressResponse {
    const message = {
      ...baseMsgUpdateRefundAddressResponse,
    } as MsgUpdateRefundAddressResponse;
    return message;
  },

  toJSON(_: MsgUpdateRefundAddressResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateRefundAddressResponse>
  ): MsgUpdateRefundAddressResponse {
    const message = {
      ...baseMsgUpdateRefundAddressResponse,
    } as MsgUpdateRefundAddressResponse;
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
  bridgeId: Long.UZERO,
  chainId: "",
  chainDisplayName: "",
  tokenGatewayAddress: "",
  encoding: "",
  isEnabled: false,
  isOptimisticConfirm: false,
};

export const MsgCreateConnection = {
  encode(
    message: MsgCreateConnection,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.bridgeId.isZero()) {
      writer.uint32(16).uint64(message.bridgeId);
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
    if (message.isOptimisticConfirm === true) {
      writer.uint32(64).bool(message.isOptimisticConfirm);
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
          message.bridgeId = reader.uint64() as Long;
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
        case 8:
          message.isOptimisticConfirm = reader.bool();
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
        ? Long.fromString(object.bridgeId)
        : Long.UZERO;
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
    message.isOptimisticConfirm =
      object.isOptimisticConfirm !== undefined &&
      object.isOptimisticConfirm !== null
        ? Boolean(object.isOptimisticConfirm)
        : false;
    return message;
  },

  toJSON(message: MsgCreateConnection): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.bridgeId !== undefined &&
      (obj.bridgeId = (message.bridgeId || Long.UZERO).toString());
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.chainDisplayName !== undefined &&
      (obj.chainDisplayName = message.chainDisplayName);
    message.tokenGatewayAddress !== undefined &&
      (obj.tokenGatewayAddress = message.tokenGatewayAddress);
    message.encoding !== undefined && (obj.encoding = message.encoding);
    message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
    message.isOptimisticConfirm !== undefined &&
      (obj.isOptimisticConfirm = message.isOptimisticConfirm);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateConnection>): MsgCreateConnection {
    const message = { ...baseMsgCreateConnection } as MsgCreateConnection;
    message.creator = object.creator ?? "";
    message.bridgeId =
      object.bridgeId !== undefined && object.bridgeId !== null
        ? Long.fromValue(object.bridgeId)
        : Long.UZERO;
    message.chainId = object.chainId ?? "";
    message.chainDisplayName = object.chainDisplayName ?? "";
    message.tokenGatewayAddress = object.tokenGatewayAddress ?? "";
    message.encoding = object.encoding ?? "";
    message.isEnabled = object.isEnabled ?? false;
    message.isOptimisticConfirm = object.isOptimisticConfirm ?? false;
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
    if (message.isOptimisticConfirm !== undefined) {
      BoolValue.encode(
        { value: message.isOptimisticConfirm! },
        writer.uint32(26).fork()
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
        case 3:
          message.isOptimisticConfirm = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
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
    message.isOptimisticConfirm =
      object.isOptimisticConfirm !== undefined &&
      object.isOptimisticConfirm !== null
        ? Boolean(object.isOptimisticConfirm)
        : undefined;
    return message;
  },

  toJSON(message: UpdateConnectionParams): unknown {
    const obj: any = {};
    message.chainDisplayName !== undefined &&
      (obj.chainDisplayName = message.chainDisplayName);
    message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
    message.isOptimisticConfirm !== undefined &&
      (obj.isOptimisticConfirm = message.isOptimisticConfirm);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateConnectionParams>
  ): UpdateConnectionParams {
    const message = { ...baseUpdateConnectionParams } as UpdateConnectionParams;
    message.chainDisplayName = object.chainDisplayName ?? undefined;
    message.isEnabled = object.isEnabled ?? undefined;
    message.isOptimisticConfirm = object.isOptimisticConfirm ?? undefined;
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

const baseMsgAddControllersForConnection: object = { creator: "" };

export const MsgAddControllersForConnection = {
  encode(
    message: MsgAddControllersForConnection,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.controllers !== undefined) {
      ControllerContracts.encode(
        message.controllers,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddControllersForConnection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAddControllersForConnection,
    } as MsgAddControllersForConnection;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.controllers = ControllerContracts.decode(
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

  fromJSON(object: any): MsgAddControllersForConnection {
    const message = {
      ...baseMsgAddControllersForConnection,
    } as MsgAddControllersForConnection;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.controllers =
      object.controllers !== undefined && object.controllers !== null
        ? ControllerContracts.fromJSON(object.controllers)
        : undefined;
    return message;
  },

  toJSON(message: MsgAddControllersForConnection): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.controllers !== undefined &&
      (obj.controllers = message.controllers
        ? ControllerContracts.toJSON(message.controllers)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgAddControllersForConnection>
  ): MsgAddControllersForConnection {
    const message = {
      ...baseMsgAddControllersForConnection,
    } as MsgAddControllersForConnection;
    message.creator = object.creator ?? "";
    message.controllers =
      object.controllers !== undefined && object.controllers !== null
        ? ControllerContracts.fromPartial(object.controllers)
        : undefined;
    return message;
  },
};

const baseMsgAddControllersForConnectionResponse: object = {};

export const MsgAddControllersForConnectionResponse = {
  encode(
    _: MsgAddControllersForConnectionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddControllersForConnectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAddControllersForConnectionResponse,
    } as MsgAddControllersForConnectionResponse;
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

  fromJSON(_: any): MsgAddControllersForConnectionResponse {
    const message = {
      ...baseMsgAddControllersForConnectionResponse,
    } as MsgAddControllersForConnectionResponse;
    return message;
  },

  toJSON(_: MsgAddControllersForConnectionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAddControllersForConnectionResponse>
  ): MsgAddControllersForConnectionResponse {
    const message = {
      ...baseMsgAddControllersForConnectionResponse,
    } as MsgAddControllersForConnectionResponse;
    return message;
  },
};

const baseMsgUpdateControllersForConnection: object = {
  creator: "",
  connectionId: "",
};

export const MsgUpdateControllersForConnection = {
  encode(
    message: MsgUpdateControllersForConnection,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.controllers !== undefined) {
      ControllersToUpdate.encode(
        message.controllers,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateControllersForConnection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateControllersForConnection,
    } as MsgUpdateControllersForConnection;
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
          message.controllers = ControllersToUpdate.decode(
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

  fromJSON(object: any): MsgUpdateControllersForConnection {
    const message = {
      ...baseMsgUpdateControllersForConnection,
    } as MsgUpdateControllersForConnection;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.controllers =
      object.controllers !== undefined && object.controllers !== null
        ? ControllersToUpdate.fromJSON(object.controllers)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdateControllersForConnection): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.controllers !== undefined &&
      (obj.controllers = message.controllers
        ? ControllersToUpdate.toJSON(message.controllers)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateControllersForConnection>
  ): MsgUpdateControllersForConnection {
    const message = {
      ...baseMsgUpdateControllersForConnection,
    } as MsgUpdateControllersForConnection;
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    message.controllers =
      object.controllers !== undefined && object.controllers !== null
        ? ControllersToUpdate.fromPartial(object.controllers)
        : undefined;
    return message;
  },
};

const baseMsgUpdateControllersForConnectionResponse: object = {};

export const MsgUpdateControllersForConnectionResponse = {
  encode(
    _: MsgUpdateControllersForConnectionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateControllersForConnectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateControllersForConnectionResponse,
    } as MsgUpdateControllersForConnectionResponse;
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

  fromJSON(_: any): MsgUpdateControllersForConnectionResponse {
    const message = {
      ...baseMsgUpdateControllersForConnectionResponse,
    } as MsgUpdateControllersForConnectionResponse;
    return message;
  },

  toJSON(_: MsgUpdateControllersForConnectionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateControllersForConnectionResponse>
  ): MsgUpdateControllersForConnectionResponse {
    const message = {
      ...baseMsgUpdateControllersForConnectionResponse,
    } as MsgUpdateControllersForConnectionResponse;
    return message;
  },
};

const baseMsgRemoveControllersForConnection: object = {
  creator: "",
  connectionId: "",
};

export const MsgRemoveControllersForConnection = {
  encode(
    message: MsgRemoveControllersForConnection,
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemoveControllersForConnection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRemoveControllersForConnection,
    } as MsgRemoveControllersForConnection;
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

  fromJSON(object: any): MsgRemoveControllersForConnection {
    const message = {
      ...baseMsgRemoveControllersForConnection,
    } as MsgRemoveControllersForConnection;
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

  toJSON(message: MsgRemoveControllersForConnection): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRemoveControllersForConnection>
  ): MsgRemoveControllersForConnection {
    const message = {
      ...baseMsgRemoveControllersForConnection,
    } as MsgRemoveControllersForConnection;
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

const baseMsgRemoveControllersForConnectionResponse: object = {};

export const MsgRemoveControllersForConnectionResponse = {
  encode(
    _: MsgRemoveControllersForConnectionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemoveControllersForConnectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRemoveControllersForConnectionResponse,
    } as MsgRemoveControllersForConnectionResponse;
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

  fromJSON(_: any): MsgRemoveControllersForConnectionResponse {
    const message = {
      ...baseMsgRemoveControllersForConnectionResponse,
    } as MsgRemoveControllersForConnectionResponse;
    return message;
  },

  toJSON(_: MsgRemoveControllersForConnectionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRemoveControllersForConnectionResponse>
  ): MsgRemoveControllersForConnectionResponse {
    const message = {
      ...baseMsgRemoveControllersForConnectionResponse,
    } as MsgRemoveControllersForConnectionResponse;
    return message;
  },
};

const baseMsgRemoveNonceMapForConnection: object = {
  creator: "",
  connectionId: "",
  gatewayAddress: "",
};

export const MsgRemoveNonceMapForConnection = {
  encode(
    message: MsgRemoveNonceMapForConnection,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.gatewayAddress !== "") {
      writer.uint32(26).string(message.gatewayAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemoveNonceMapForConnection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRemoveNonceMapForConnection,
    } as MsgRemoveNonceMapForConnection;
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
          message.gatewayAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveNonceMapForConnection {
    const message = {
      ...baseMsgRemoveNonceMapForConnection,
    } as MsgRemoveNonceMapForConnection;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.gatewayAddress =
      object.gatewayAddress !== undefined && object.gatewayAddress !== null
        ? String(object.gatewayAddress)
        : "";
    return message;
  },

  toJSON(message: MsgRemoveNonceMapForConnection): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.gatewayAddress !== undefined &&
      (obj.gatewayAddress = message.gatewayAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRemoveNonceMapForConnection>
  ): MsgRemoveNonceMapForConnection {
    const message = {
      ...baseMsgRemoveNonceMapForConnection,
    } as MsgRemoveNonceMapForConnection;
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    message.gatewayAddress = object.gatewayAddress ?? "";
    return message;
  },
};

const baseMsgRemoveNonceMapForConnectionResponse: object = {};

export const MsgRemoveNonceMapForConnectionResponse = {
  encode(
    _: MsgRemoveNonceMapForConnectionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemoveNonceMapForConnectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRemoveNonceMapForConnectionResponse,
    } as MsgRemoveNonceMapForConnectionResponse;
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

  fromJSON(_: any): MsgRemoveNonceMapForConnectionResponse {
    const message = {
      ...baseMsgRemoveNonceMapForConnectionResponse,
    } as MsgRemoveNonceMapForConnectionResponse;
    return message;
  },

  toJSON(_: MsgRemoveNonceMapForConnectionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRemoveNonceMapForConnectionResponse>
  ): MsgRemoveNonceMapForConnectionResponse {
    const message = {
      ...baseMsgRemoveNonceMapForConnectionResponse,
    } as MsgRemoveNonceMapForConnectionResponse;
    return message;
  },
};

const baseMsgRegisterExternalToken: object = {
  creator: "",
  connectionId: "",
  assetAddress: "",
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
    if (message.carbonTokenName !== undefined) {
      StringValue.encode(
        { value: message.carbonTokenName! },
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.relayFee !== undefined) {
      Coin.encode(message.relayFee, writer.uint32(50).fork()).ldelim();
    }
    if (message.expiryDuration !== undefined) {
      Duration.encode(
        message.expiryDuration,
        writer.uint32(58).fork()
      ).ldelim();
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
          message.carbonTokenName = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 6:
          message.relayFee = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.expiryDuration = Duration.decode(reader, reader.uint32());
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
        : undefined;
    message.relayFee =
      object.relayFee !== undefined && object.relayFee !== null
        ? Coin.fromJSON(object.relayFee)
        : undefined;
    message.expiryDuration =
      object.expiryDuration !== undefined && object.expiryDuration !== null
        ? Duration.fromJSON(object.expiryDuration)
        : undefined;
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
    message.relayFee !== undefined &&
      (obj.relayFee = message.relayFee
        ? Coin.toJSON(message.relayFee)
        : undefined);
    message.expiryDuration !== undefined &&
      (obj.expiryDuration = message.expiryDuration
        ? Duration.toJSON(message.expiryDuration)
        : undefined);
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
    message.carbonTokenName = object.carbonTokenName ?? undefined;
    message.relayFee =
      object.relayFee !== undefined && object.relayFee !== null
        ? Coin.fromPartial(object.relayFee)
        : undefined;
    message.expiryDuration =
      object.expiryDuration !== undefined && object.expiryDuration !== null
        ? Duration.fromPartial(object.expiryDuration)
        : undefined;
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
    if (message.relayFee !== undefined) {
      Coin.encode(message.relayFee, writer.uint32(34).fork()).ldelim();
    }
    if (message.expiryDuration !== undefined) {
      Duration.encode(
        message.expiryDuration,
        writer.uint32(42).fork()
      ).ldelim();
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
        case 4:
          message.relayFee = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.expiryDuration = Duration.decode(reader, reader.uint32());
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
    message.relayFee =
      object.relayFee !== undefined && object.relayFee !== null
        ? Coin.fromJSON(object.relayFee)
        : undefined;
    message.expiryDuration =
      object.expiryDuration !== undefined && object.expiryDuration !== null
        ? Duration.fromJSON(object.expiryDuration)
        : undefined;
    return message;
  },

  toJSON(message: MsgDeregisterExternalToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.denom !== undefined && (obj.denom = message.denom);
    message.relayFee !== undefined &&
      (obj.relayFee = message.relayFee
        ? Coin.toJSON(message.relayFee)
        : undefined);
    message.expiryDuration !== undefined &&
      (obj.expiryDuration = message.expiryDuration
        ? Duration.toJSON(message.expiryDuration)
        : undefined);
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
    message.relayFee =
      object.relayFee !== undefined && object.relayFee !== null
        ? Coin.fromPartial(object.relayFee)
        : undefined;
    message.expiryDuration =
      object.expiryDuration !== undefined && object.expiryDuration !== null
        ? Duration.fromPartial(object.expiryDuration)
        : undefined;
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
    if (message.relayFee !== undefined) {
      Coin.encode(message.relayFee, writer.uint32(34).fork()).ldelim();
    }
    if (message.expiryDuration !== undefined) {
      Duration.encode(
        message.expiryDuration,
        writer.uint32(42).fork()
      ).ldelim();
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
        case 4:
          message.relayFee = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.expiryDuration = Duration.decode(reader, reader.uint32());
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
    message.relayFee =
      object.relayFee !== undefined && object.relayFee !== null
        ? Coin.fromJSON(object.relayFee)
        : undefined;
    message.expiryDuration =
      object.expiryDuration !== undefined && object.expiryDuration !== null
        ? Duration.fromJSON(object.expiryDuration)
        : undefined;
    return message;
  },

  toJSON(message: MsgDeployNativeToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.denom !== undefined && (obj.denom = message.denom);
    message.relayFee !== undefined &&
      (obj.relayFee = message.relayFee
        ? Coin.toJSON(message.relayFee)
        : undefined);
    message.expiryDuration !== undefined &&
      (obj.expiryDuration = message.expiryDuration
        ? Duration.toJSON(message.expiryDuration)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeployNativeToken>): MsgDeployNativeToken {
    const message = { ...baseMsgDeployNativeToken } as MsgDeployNativeToken;
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    message.denom = object.denom ?? "";
    message.relayFee =
      object.relayFee !== undefined && object.relayFee !== null
        ? Coin.fromPartial(object.relayFee)
        : undefined;
    message.expiryDuration =
      object.expiryDuration !== undefined && object.expiryDuration !== null
        ? Duration.fromPartial(object.expiryDuration)
        : undefined;
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
      Coin.encode(message.relayFee, writer.uint32(42).fork()).ldelim();
    }
    if (message.expiryDuration !== undefined) {
      Duration.encode(
        message.expiryDuration,
        writer.uint32(50).fork()
      ).ldelim();
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
          message.relayFee = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.expiryDuration = Duration.decode(reader, reader.uint32());
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
        ? Coin.fromJSON(object.relayFee)
        : undefined;
    message.expiryDuration =
      object.expiryDuration !== undefined && object.expiryDuration !== null
        ? Duration.fromJSON(object.expiryDuration)
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
        ? Coin.toJSON(message.relayFee)
        : undefined);
    message.expiryDuration !== undefined &&
      (obj.expiryDuration = message.expiryDuration
        ? Duration.toJSON(message.expiryDuration)
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
        ? Coin.fromPartial(object.relayFee)
        : undefined;
    message.expiryDuration =
      object.expiryDuration !== undefined && object.expiryDuration !== null
        ? Duration.fromPartial(object.expiryDuration)
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

const baseMsgUpdateExternalToken: object = {
  creator: "",
  connectionId: "",
  assetAddress: "",
  tokenName: "",
  decimals: Long.ZERO,
  isCarbonOwned: false,
};

export const MsgUpdateExternalToken = {
  encode(
    message: MsgUpdateExternalToken,
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
    if (message.tokenName !== "") {
      writer.uint32(34).string(message.tokenName);
    }
    if (!message.decimals.isZero()) {
      writer.uint32(40).int64(message.decimals);
    }
    if (message.isCarbonOwned === true) {
      writer.uint32(48).bool(message.isCarbonOwned);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateExternalToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateExternalToken } as MsgUpdateExternalToken;
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
          message.tokenName = reader.string();
          break;
        case 5:
          message.decimals = reader.int64() as Long;
          break;
        case 6:
          message.isCarbonOwned = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateExternalToken {
    const message = { ...baseMsgUpdateExternalToken } as MsgUpdateExternalToken;
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
    message.tokenName =
      object.tokenName !== undefined && object.tokenName !== null
        ? String(object.tokenName)
        : "";
    message.decimals =
      object.decimals !== undefined && object.decimals !== null
        ? Long.fromString(object.decimals)
        : Long.ZERO;
    message.isCarbonOwned =
      object.isCarbonOwned !== undefined && object.isCarbonOwned !== null
        ? Boolean(object.isCarbonOwned)
        : false;
    return message;
  },

  toJSON(message: MsgUpdateExternalToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.assetAddress !== undefined &&
      (obj.assetAddress = message.assetAddress);
    message.tokenName !== undefined && (obj.tokenName = message.tokenName);
    message.decimals !== undefined &&
      (obj.decimals = (message.decimals || Long.ZERO).toString());
    message.isCarbonOwned !== undefined &&
      (obj.isCarbonOwned = message.isCarbonOwned);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateExternalToken>
  ): MsgUpdateExternalToken {
    const message = { ...baseMsgUpdateExternalToken } as MsgUpdateExternalToken;
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    message.assetAddress = object.assetAddress ?? "";
    message.tokenName = object.tokenName ?? "";
    message.decimals =
      object.decimals !== undefined && object.decimals !== null
        ? Long.fromValue(object.decimals)
        : Long.ZERO;
    message.isCarbonOwned = object.isCarbonOwned ?? false;
    return message;
  },
};

const baseMsgUpdateExternalTokenResponse: object = {};

export const MsgUpdateExternalTokenResponse = {
  encode(
    _: MsgUpdateExternalTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateExternalTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateExternalTokenResponse,
    } as MsgUpdateExternalTokenResponse;
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

  fromJSON(_: any): MsgUpdateExternalTokenResponse {
    const message = {
      ...baseMsgUpdateExternalTokenResponse,
    } as MsgUpdateExternalTokenResponse;
    return message;
  },

  toJSON(_: MsgUpdateExternalTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateExternalTokenResponse>
  ): MsgUpdateExternalTokenResponse {
    const message = {
      ...baseMsgUpdateExternalTokenResponse,
    } as MsgUpdateExternalTokenResponse;
    return message;
  },
};

const baseMsgDeleteExternalToken: object = {
  creator: "",
  connectionId: "",
  denom: "",
};

export const MsgDeleteExternalToken = {
  encode(
    message: MsgDeleteExternalToken,
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
  ): MsgDeleteExternalToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteExternalToken } as MsgDeleteExternalToken;
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

  fromJSON(object: any): MsgDeleteExternalToken {
    const message = { ...baseMsgDeleteExternalToken } as MsgDeleteExternalToken;
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

  toJSON(message: MsgDeleteExternalToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteExternalToken>
  ): MsgDeleteExternalToken {
    const message = { ...baseMsgDeleteExternalToken } as MsgDeleteExternalToken;
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseMsgDeleteExternalTokenResponse: object = {};

export const MsgDeleteExternalTokenResponse = {
  encode(
    _: MsgDeleteExternalTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeleteExternalTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteExternalTokenResponse,
    } as MsgDeleteExternalTokenResponse;
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

  fromJSON(_: any): MsgDeleteExternalTokenResponse {
    const message = {
      ...baseMsgDeleteExternalTokenResponse,
    } as MsgDeleteExternalTokenResponse;
    return message;
  },

  toJSON(_: MsgDeleteExternalTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteExternalTokenResponse>
  ): MsgDeleteExternalTokenResponse {
    const message = {
      ...baseMsgDeleteExternalTokenResponse,
    } as MsgDeleteExternalTokenResponse;
    return message;
  },
};

const baseMsgExecuteFromCarbon: object = {
  creator: "",
  connectionId: "",
  executionContract: "",
  method: "",
};

export const MsgExecuteFromCarbon = {
  encode(
    message: MsgExecuteFromCarbon,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.executionContract !== "") {
      writer.uint32(26).string(message.executionContract);
    }
    if (message.method !== "") {
      writer.uint32(34).string(message.method);
    }
    if (message.executionBytes.length !== 0) {
      writer.uint32(42).bytes(message.executionBytes);
    }
    if (message.tokens !== undefined) {
      Coin.encode(message.tokens, writer.uint32(50).fork()).ldelim();
    }
    if (message.relayFee !== undefined) {
      Coin.encode(message.relayFee, writer.uint32(58).fork()).ldelim();
    }
    if (message.expiryDuration !== undefined) {
      Duration.encode(
        message.expiryDuration,
        writer.uint32(66).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgExecuteFromCarbon {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgExecuteFromCarbon } as MsgExecuteFromCarbon;
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
          message.executionContract = reader.string();
          break;
        case 4:
          message.method = reader.string();
          break;
        case 5:
          message.executionBytes = reader.bytes();
          break;
        case 6:
          message.tokens = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.relayFee = Coin.decode(reader, reader.uint32());
          break;
        case 8:
          message.expiryDuration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExecuteFromCarbon {
    const message = { ...baseMsgExecuteFromCarbon } as MsgExecuteFromCarbon;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.executionContract =
      object.executionContract !== undefined &&
      object.executionContract !== null
        ? String(object.executionContract)
        : "";
    message.method =
      object.method !== undefined && object.method !== null
        ? String(object.method)
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
        ? Coin.fromJSON(object.relayFee)
        : undefined;
    message.expiryDuration =
      object.expiryDuration !== undefined && object.expiryDuration !== null
        ? Duration.fromJSON(object.expiryDuration)
        : undefined;
    return message;
  },

  toJSON(message: MsgExecuteFromCarbon): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.executionContract !== undefined &&
      (obj.executionContract = message.executionContract);
    message.method !== undefined && (obj.method = message.method);
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
        ? Coin.toJSON(message.relayFee)
        : undefined);
    message.expiryDuration !== undefined &&
      (obj.expiryDuration = message.expiryDuration
        ? Duration.toJSON(message.expiryDuration)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgExecuteFromCarbon>): MsgExecuteFromCarbon {
    const message = { ...baseMsgExecuteFromCarbon } as MsgExecuteFromCarbon;
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    message.executionContract = object.executionContract ?? "";
    message.method = object.method ?? "";
    message.executionBytes = object.executionBytes ?? new Uint8Array();
    message.tokens =
      object.tokens !== undefined && object.tokens !== null
        ? Coin.fromPartial(object.tokens)
        : undefined;
    message.relayFee =
      object.relayFee !== undefined && object.relayFee !== null
        ? Coin.fromPartial(object.relayFee)
        : undefined;
    message.expiryDuration =
      object.expiryDuration !== undefined && object.expiryDuration !== null
        ? Duration.fromPartial(object.expiryDuration)
        : undefined;
    return message;
  },
};

const baseMsgExecuteFromCarbonResponse: object = {};

export const MsgExecuteFromCarbonResponse = {
  encode(
    _: MsgExecuteFromCarbonResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgExecuteFromCarbonResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgExecuteFromCarbonResponse,
    } as MsgExecuteFromCarbonResponse;
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

  fromJSON(_: any): MsgExecuteFromCarbonResponse {
    const message = {
      ...baseMsgExecuteFromCarbonResponse,
    } as MsgExecuteFromCarbonResponse;
    return message;
  },

  toJSON(_: MsgExecuteFromCarbonResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgExecuteFromCarbonResponse>
  ): MsgExecuteFromCarbonResponse {
    const message = {
      ...baseMsgExecuteFromCarbonResponse,
    } as MsgExecuteFromCarbonResponse;
    return message;
  },
};

const baseMsgStartRelay: object = { relayer: "", nonce: Long.UZERO };

export const MsgStartRelay = {
  encode(
    message: MsgStartRelay,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.relayer !== "") {
      writer.uint32(10).string(message.relayer);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(16).uint64(message.nonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartRelay {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgStartRelay } as MsgStartRelay;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.relayer = reader.string();
          break;
        case 2:
          message.nonce = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgStartRelay {
    const message = { ...baseMsgStartRelay } as MsgStartRelay;
    message.relayer =
      object.relayer !== undefined && object.relayer !== null
        ? String(object.relayer)
        : "";
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromString(object.nonce)
        : Long.UZERO;
    return message;
  },

  toJSON(message: MsgStartRelay): unknown {
    const obj: any = {};
    message.relayer !== undefined && (obj.relayer = message.relayer);
    message.nonce !== undefined &&
      (obj.nonce = (message.nonce || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgStartRelay>): MsgStartRelay {
    const message = { ...baseMsgStartRelay } as MsgStartRelay;
    message.relayer = object.relayer ?? "";
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromValue(object.nonce)
        : Long.UZERO;
    return message;
  },
};

const baseMsgStartRelayResponse: object = {};

export const MsgStartRelayResponse = {
  encode(
    _: MsgStartRelayResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgStartRelayResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgStartRelayResponse } as MsgStartRelayResponse;
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

  fromJSON(_: any): MsgStartRelayResponse {
    const message = { ...baseMsgStartRelayResponse } as MsgStartRelayResponse;
    return message;
  },

  toJSON(_: MsgStartRelayResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgStartRelayResponse>): MsgStartRelayResponse {
    const message = { ...baseMsgStartRelayResponse } as MsgStartRelayResponse;
    return message;
  },
};

const baseMsgPruneExpiredPendingActions: object = {
  creator: "",
  nonces: Long.UZERO,
};

export const MsgPruneExpiredPendingActions = {
  encode(
    message: MsgPruneExpiredPendingActions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    writer.uint32(18).fork();
    for (const v of message.nonces) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgPruneExpiredPendingActions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgPruneExpiredPendingActions,
    } as MsgPruneExpiredPendingActions;
    message.nonces = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.nonces.push(reader.uint64() as Long);
            }
          } else {
            message.nonces.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPruneExpiredPendingActions {
    const message = {
      ...baseMsgPruneExpiredPendingActions,
    } as MsgPruneExpiredPendingActions;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.nonces = (object.nonces ?? []).map((e: any) => Long.fromString(e));
    return message;
  },

  toJSON(message: MsgPruneExpiredPendingActions): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.nonces) {
      obj.nonces = message.nonces.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.nonces = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgPruneExpiredPendingActions>
  ): MsgPruneExpiredPendingActions {
    const message = {
      ...baseMsgPruneExpiredPendingActions,
    } as MsgPruneExpiredPendingActions;
    message.creator = object.creator ?? "";
    message.nonces = (object.nonces ?? []).map((e) => Long.fromValue(e));
    return message;
  },
};

const baseMsgPruneExpiredPendingActionsResponse: object = {};

export const MsgPruneExpiredPendingActionsResponse = {
  encode(
    _: MsgPruneExpiredPendingActionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgPruneExpiredPendingActionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgPruneExpiredPendingActionsResponse,
    } as MsgPruneExpiredPendingActionsResponse;
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

  fromJSON(_: any): MsgPruneExpiredPendingActionsResponse {
    const message = {
      ...baseMsgPruneExpiredPendingActionsResponse,
    } as MsgPruneExpiredPendingActionsResponse;
    return message;
  },

  toJSON(_: MsgPruneExpiredPendingActionsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgPruneExpiredPendingActionsResponse>
  ): MsgPruneExpiredPendingActionsResponse {
    const message = {
      ...baseMsgPruneExpiredPendingActionsResponse,
    } as MsgPruneExpiredPendingActionsResponse;
    return message;
  },
};

const baseMsgRevertPendingAction: object = {
  authority: "",
  connectionId: "",
  nonce: Long.UZERO,
  actionType: Long.UZERO,
};

export const MsgRevertPendingAction = {
  encode(
    message: MsgRevertPendingAction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(24).uint64(message.nonce);
    }
    if (!message.actionType.isZero()) {
      writer.uint32(32).uint64(message.actionType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRevertPendingAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRevertPendingAction } as MsgRevertPendingAction;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.nonce = reader.uint64() as Long;
          break;
        case 4:
          message.actionType = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRevertPendingAction {
    const message = { ...baseMsgRevertPendingAction } as MsgRevertPendingAction;
    message.authority =
      object.authority !== undefined && object.authority !== null
        ? String(object.authority)
        : "";
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromString(object.nonce)
        : Long.UZERO;
    message.actionType =
      object.actionType !== undefined && object.actionType !== null
        ? Long.fromString(object.actionType)
        : Long.UZERO;
    return message;
  },

  toJSON(message: MsgRevertPendingAction): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.nonce !== undefined &&
      (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.actionType !== undefined &&
      (obj.actionType = (message.actionType || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRevertPendingAction>
  ): MsgRevertPendingAction {
    const message = { ...baseMsgRevertPendingAction } as MsgRevertPendingAction;
    message.authority = object.authority ?? "";
    message.connectionId = object.connectionId ?? "";
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromValue(object.nonce)
        : Long.UZERO;
    message.actionType =
      object.actionType !== undefined && object.actionType !== null
        ? Long.fromValue(object.actionType)
        : Long.UZERO;
    return message;
  },
};

const baseMsgRevertPendingActionResponse: object = {};

export const MsgRevertPendingActionResponse = {
  encode(
    _: MsgRevertPendingActionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRevertPendingActionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRevertPendingActionResponse,
    } as MsgRevertPendingActionResponse;
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

  fromJSON(_: any): MsgRevertPendingActionResponse {
    const message = {
      ...baseMsgRevertPendingActionResponse,
    } as MsgRevertPendingActionResponse;
    return message;
  },

  toJSON(_: MsgRevertPendingActionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRevertPendingActionResponse>
  ): MsgRevertPendingActionResponse {
    const message = {
      ...baseMsgRevertPendingActionResponse,
    } as MsgRevertPendingActionResponse;
    return message;
  },
};

const baseMsgConfirmPendingAction: object = {
  authority: "",
  connectionId: "",
  nonce: Long.UZERO,
  actionType: Long.UZERO,
};

export const MsgConfirmPendingAction = {
  encode(
    message: MsgConfirmPendingAction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(24).uint64(message.nonce);
    }
    if (!message.actionType.isZero()) {
      writer.uint32(32).uint64(message.actionType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgConfirmPendingAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgConfirmPendingAction,
    } as MsgConfirmPendingAction;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.nonce = reader.uint64() as Long;
          break;
        case 4:
          message.actionType = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgConfirmPendingAction {
    const message = {
      ...baseMsgConfirmPendingAction,
    } as MsgConfirmPendingAction;
    message.authority =
      object.authority !== undefined && object.authority !== null
        ? String(object.authority)
        : "";
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromString(object.nonce)
        : Long.UZERO;
    message.actionType =
      object.actionType !== undefined && object.actionType !== null
        ? Long.fromString(object.actionType)
        : Long.UZERO;
    return message;
  },

  toJSON(message: MsgConfirmPendingAction): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.nonce !== undefined &&
      (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.actionType !== undefined &&
      (obj.actionType = (message.actionType || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgConfirmPendingAction>
  ): MsgConfirmPendingAction {
    const message = {
      ...baseMsgConfirmPendingAction,
    } as MsgConfirmPendingAction;
    message.authority = object.authority ?? "";
    message.connectionId = object.connectionId ?? "";
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromValue(object.nonce)
        : Long.UZERO;
    message.actionType =
      object.actionType !== undefined && object.actionType !== null
        ? Long.fromValue(object.actionType)
        : Long.UZERO;
    return message;
  },
};

const baseMsgConfirmPendingActionResponse: object = {};

export const MsgConfirmPendingActionResponse = {
  encode(
    _: MsgConfirmPendingActionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgConfirmPendingActionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgConfirmPendingActionResponse,
    } as MsgConfirmPendingActionResponse;
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

  fromJSON(_: any): MsgConfirmPendingActionResponse {
    const message = {
      ...baseMsgConfirmPendingActionResponse,
    } as MsgConfirmPendingActionResponse;
    return message;
  },

  toJSON(_: MsgConfirmPendingActionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgConfirmPendingActionResponse>
  ): MsgConfirmPendingActionResponse {
    const message = {
      ...baseMsgConfirmPendingActionResponse,
    } as MsgConfirmPendingActionResponse;
    return message;
  },
};

const baseMsgAddRelayer: object = { authority: "", relayer: "" };

export const MsgAddRelayer = {
  encode(
    message: MsgAddRelayer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddRelayer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddRelayer } as MsgAddRelayer;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.relayer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddRelayer {
    const message = { ...baseMsgAddRelayer } as MsgAddRelayer;
    message.authority =
      object.authority !== undefined && object.authority !== null
        ? String(object.authority)
        : "";
    message.relayer =
      object.relayer !== undefined && object.relayer !== null
        ? String(object.relayer)
        : "";
    return message;
  },

  toJSON(message: MsgAddRelayer): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddRelayer>): MsgAddRelayer {
    const message = { ...baseMsgAddRelayer } as MsgAddRelayer;
    message.authority = object.authority ?? "";
    message.relayer = object.relayer ?? "";
    return message;
  },
};

const baseMsgAddRelayerResponse: object = {};

export const MsgAddRelayerResponse = {
  encode(
    _: MsgAddRelayerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddRelayerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddRelayerResponse } as MsgAddRelayerResponse;
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

  fromJSON(_: any): MsgAddRelayerResponse {
    const message = { ...baseMsgAddRelayerResponse } as MsgAddRelayerResponse;
    return message;
  },

  toJSON(_: MsgAddRelayerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgAddRelayerResponse>): MsgAddRelayerResponse {
    const message = { ...baseMsgAddRelayerResponse } as MsgAddRelayerResponse;
    return message;
  },
};

const baseMsgRemoveRelayer: object = { authority: "", relayer: "" };

export const MsgRemoveRelayer = {
  encode(
    message: MsgRemoveRelayer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveRelayer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRemoveRelayer } as MsgRemoveRelayer;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.relayer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveRelayer {
    const message = { ...baseMsgRemoveRelayer } as MsgRemoveRelayer;
    message.authority =
      object.authority !== undefined && object.authority !== null
        ? String(object.authority)
        : "";
    message.relayer =
      object.relayer !== undefined && object.relayer !== null
        ? String(object.relayer)
        : "";
    return message;
  },

  toJSON(message: MsgRemoveRelayer): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRemoveRelayer>): MsgRemoveRelayer {
    const message = { ...baseMsgRemoveRelayer } as MsgRemoveRelayer;
    message.authority = object.authority ?? "";
    message.relayer = object.relayer ?? "";
    return message;
  },
};

const baseMsgRemoveRelayerResponse: object = {};

export const MsgRemoveRelayerResponse = {
  encode(
    _: MsgRemoveRelayerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemoveRelayerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRemoveRelayerResponse,
    } as MsgRemoveRelayerResponse;
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

  fromJSON(_: any): MsgRemoveRelayerResponse {
    const message = {
      ...baseMsgRemoveRelayerResponse,
    } as MsgRemoveRelayerResponse;
    return message;
  },

  toJSON(_: MsgRemoveRelayerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRemoveRelayerResponse>
  ): MsgRemoveRelayerResponse {
    const message = {
      ...baseMsgRemoveRelayerResponse,
    } as MsgRemoveRelayerResponse;
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
  UpdateMaxRelayExpiry(
    request: MsgUpdateMaxRelayExpiry
  ): Promise<MsgUpdateMaxRelayExpiryResponse>;
  UpdateRelayWhitelistDuration(
    request: MsgUpdateRelayWhitelistDuration
  ): Promise<MsgUpdateRelayWhitelistDurationResponse>;
  UpdateRefundAddress(
    request: MsgUpdateRefundAddress
  ): Promise<MsgUpdateRefundAddressResponse>;
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
  AddControllersForConnection(
    request: MsgAddControllersForConnection
  ): Promise<MsgAddControllersForConnectionResponse>;
  UpdateControllersForConnection(
    request: MsgUpdateControllersForConnection
  ): Promise<MsgUpdateControllersForConnectionResponse>;
  RemoveControllersForConnection(
    request: MsgRemoveControllersForConnection
  ): Promise<MsgRemoveControllersForConnectionResponse>;
  RemoveNonceMapForConnection(
    request: MsgRemoveNonceMapForConnection
  ): Promise<MsgRemoveNonceMapForConnectionResponse>;
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
  UpdateExternalToken(
    request: MsgUpdateExternalToken
  ): Promise<MsgUpdateExternalTokenResponse>;
  DeleteExternalToken(
    request: MsgDeleteExternalToken
  ): Promise<MsgDeleteExternalTokenResponse>;
  ExecuteFromCarbon(
    request: MsgExecuteFromCarbon
  ): Promise<MsgExecuteFromCarbonResponse>;
  StartRelay(request: MsgStartRelay): Promise<MsgStartRelayResponse>;
  PruneExpiredPendingActions(
    request: MsgPruneExpiredPendingActions
  ): Promise<MsgPruneExpiredPendingActionsResponse>;
  RevertPendingAction(
    request: MsgRevertPendingAction
  ): Promise<MsgRevertPendingActionResponse>;
  ConfirmPendingAction(
    request: MsgConfirmPendingAction
  ): Promise<MsgConfirmPendingActionResponse>;
  AddRelayer(request: MsgAddRelayer): Promise<MsgAddRelayerResponse>;
  RemoveRelayer(request: MsgRemoveRelayer): Promise<MsgRemoveRelayerResponse>;
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
    this.UpdateMaxRelayExpiry = this.UpdateMaxRelayExpiry.bind(this);
    this.UpdateRelayWhitelistDuration =
      this.UpdateRelayWhitelistDuration.bind(this);
    this.UpdateRefundAddress = this.UpdateRefundAddress.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
    this.CreateConnection = this.CreateConnection.bind(this);
    this.UpdateConnection = this.UpdateConnection.bind(this);
    this.RemoveConnection = this.RemoveConnection.bind(this);
    this.AddControllersForConnection =
      this.AddControllersForConnection.bind(this);
    this.UpdateControllersForConnection =
      this.UpdateControllersForConnection.bind(this);
    this.RemoveControllersForConnection =
      this.RemoveControllersForConnection.bind(this);
    this.RemoveNonceMapForConnection =
      this.RemoveNonceMapForConnection.bind(this);
    this.RegisterExternalToken = this.RegisterExternalToken.bind(this);
    this.DeregisterExternalToken = this.DeregisterExternalToken.bind(this);
    this.DeployNativeToken = this.DeployNativeToken.bind(this);
    this.RegisterDeployedToken = this.RegisterDeployedToken.bind(this);
    this.WithdrawToken = this.WithdrawToken.bind(this);
    this.UpdateExternalToken = this.UpdateExternalToken.bind(this);
    this.DeleteExternalToken = this.DeleteExternalToken.bind(this);
    this.ExecuteFromCarbon = this.ExecuteFromCarbon.bind(this);
    this.StartRelay = this.StartRelay.bind(this);
    this.PruneExpiredPendingActions =
      this.PruneExpiredPendingActions.bind(this);
    this.RevertPendingAction = this.RevertPendingAction.bind(this);
    this.ConfirmPendingAction = this.ConfirmPendingAction.bind(this);
    this.AddRelayer = this.AddRelayer.bind(this);
    this.RemoveRelayer = this.RemoveRelayer.bind(this);
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

  UpdateMaxRelayExpiry(
    request: MsgUpdateMaxRelayExpiry
  ): Promise<MsgUpdateMaxRelayExpiryResponse> {
    const data = MsgUpdateMaxRelayExpiry.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Msg",
      "UpdateMaxRelayExpiry",
      data
    );
    return promise.then((data) =>
      MsgUpdateMaxRelayExpiryResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateRelayWhitelistDuration(
    request: MsgUpdateRelayWhitelistDuration
  ): Promise<MsgUpdateRelayWhitelistDurationResponse> {
    const data = MsgUpdateRelayWhitelistDuration.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Msg",
      "UpdateRelayWhitelistDuration",
      data
    );
    return promise.then((data) =>
      MsgUpdateRelayWhitelistDurationResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateRefundAddress(
    request: MsgUpdateRefundAddress
  ): Promise<MsgUpdateRefundAddressResponse> {
    const data = MsgUpdateRefundAddress.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Msg",
      "UpdateRefundAddress",
      data
    );
    return promise.then((data) =>
      MsgUpdateRefundAddressResponse.decode(new _m0.Reader(data))
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

  AddControllersForConnection(
    request: MsgAddControllersForConnection
  ): Promise<MsgAddControllersForConnectionResponse> {
    const data = MsgAddControllersForConnection.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Msg",
      "AddControllersForConnection",
      data
    );
    return promise.then((data) =>
      MsgAddControllersForConnectionResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateControllersForConnection(
    request: MsgUpdateControllersForConnection
  ): Promise<MsgUpdateControllersForConnectionResponse> {
    const data = MsgUpdateControllersForConnection.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Msg",
      "UpdateControllersForConnection",
      data
    );
    return promise.then((data) =>
      MsgUpdateControllersForConnectionResponse.decode(new _m0.Reader(data))
    );
  }

  RemoveControllersForConnection(
    request: MsgRemoveControllersForConnection
  ): Promise<MsgRemoveControllersForConnectionResponse> {
    const data = MsgRemoveControllersForConnection.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Msg",
      "RemoveControllersForConnection",
      data
    );
    return promise.then((data) =>
      MsgRemoveControllersForConnectionResponse.decode(new _m0.Reader(data))
    );
  }

  RemoveNonceMapForConnection(
    request: MsgRemoveNonceMapForConnection
  ): Promise<MsgRemoveNonceMapForConnectionResponse> {
    const data = MsgRemoveNonceMapForConnection.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Msg",
      "RemoveNonceMapForConnection",
      data
    );
    return promise.then((data) =>
      MsgRemoveNonceMapForConnectionResponse.decode(new _m0.Reader(data))
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

  UpdateExternalToken(
    request: MsgUpdateExternalToken
  ): Promise<MsgUpdateExternalTokenResponse> {
    const data = MsgUpdateExternalToken.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Msg",
      "UpdateExternalToken",
      data
    );
    return promise.then((data) =>
      MsgUpdateExternalTokenResponse.decode(new _m0.Reader(data))
    );
  }

  DeleteExternalToken(
    request: MsgDeleteExternalToken
  ): Promise<MsgDeleteExternalTokenResponse> {
    const data = MsgDeleteExternalToken.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Msg",
      "DeleteExternalToken",
      data
    );
    return promise.then((data) =>
      MsgDeleteExternalTokenResponse.decode(new _m0.Reader(data))
    );
  }

  ExecuteFromCarbon(
    request: MsgExecuteFromCarbon
  ): Promise<MsgExecuteFromCarbonResponse> {
    const data = MsgExecuteFromCarbon.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Msg",
      "ExecuteFromCarbon",
      data
    );
    return promise.then((data) =>
      MsgExecuteFromCarbonResponse.decode(new _m0.Reader(data))
    );
  }

  StartRelay(request: MsgStartRelay): Promise<MsgStartRelayResponse> {
    const data = MsgStartRelay.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Msg",
      "StartRelay",
      data
    );
    return promise.then((data) =>
      MsgStartRelayResponse.decode(new _m0.Reader(data))
    );
  }

  PruneExpiredPendingActions(
    request: MsgPruneExpiredPendingActions
  ): Promise<MsgPruneExpiredPendingActionsResponse> {
    const data = MsgPruneExpiredPendingActions.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Msg",
      "PruneExpiredPendingActions",
      data
    );
    return promise.then((data) =>
      MsgPruneExpiredPendingActionsResponse.decode(new _m0.Reader(data))
    );
  }

  RevertPendingAction(
    request: MsgRevertPendingAction
  ): Promise<MsgRevertPendingActionResponse> {
    const data = MsgRevertPendingAction.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Msg",
      "RevertPendingAction",
      data
    );
    return promise.then((data) =>
      MsgRevertPendingActionResponse.decode(new _m0.Reader(data))
    );
  }

  ConfirmPendingAction(
    request: MsgConfirmPendingAction
  ): Promise<MsgConfirmPendingActionResponse> {
    const data = MsgConfirmPendingAction.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Msg",
      "ConfirmPendingAction",
      data
    );
    return promise.then((data) =>
      MsgConfirmPendingActionResponse.decode(new _m0.Reader(data))
    );
  }

  AddRelayer(request: MsgAddRelayer): Promise<MsgAddRelayerResponse> {
    const data = MsgAddRelayer.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Msg",
      "AddRelayer",
      data
    );
    return promise.then((data) =>
      MsgAddRelayerResponse.decode(new _m0.Reader(data))
    );
  }

  RemoveRelayer(request: MsgRemoveRelayer): Promise<MsgRemoveRelayerResponse> {
    const data = MsgRemoveRelayer.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Msg",
      "RemoveRelayer",
      data
    );
    return promise.then((data) =>
      MsgRemoveRelayerResponse.decode(new _m0.Reader(data))
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
