/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../google/protobuf/duration";
import { BoolValue, Int64Value, StringValue } from "../../../google/protobuf/wrappers";
import { ControllerContracts, ControllersToUpdate } from "./bridge";
import { ParamsToUpdate } from "./params";

export const protobufPackage = "Switcheo.carbon.bridge";

export interface MsgSetBridgeEnabled {
  creator: string;
  bridgeId: Long;
  isEnabled: boolean;
}

export interface MsgSetBridgeEnabledResponse {
}

export interface MsgUpdateParams {
  authority: string;
  /** params defines the optional parameters to update. */
  params?: ParamsToUpdate;
}

export interface MsgUpdateParamsResponse {
}

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

export interface MsgCreateConnectionResponse {
}

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

export interface MsgUpdateConnectionResponse {
}

export interface MsgRemoveConnection {
  creator: string;
  connectionId: string;
}

export interface MsgRemoveConnectionResponse {
}

export interface MsgAddControllersForConnection {
  creator: string;
  controllers?: ControllerContracts;
}

export interface MsgAddControllersForConnectionResponse {
}

export interface MsgUpdateControllersForConnection {
  creator: string;
  connectionId: string;
  controllers?: ControllersToUpdate;
}

export interface MsgUpdateControllersForConnectionResponse {
}

export interface MsgRemoveControllersForConnection {
  creator: string;
  connectionId: string;
}

export interface MsgRemoveControllersForConnectionResponse {
}

export interface MsgRemoveNonceMapForConnection {
  creator: string;
  connectionId: string;
  gatewayAddress: string;
}

export interface MsgRemoveNonceMapForConnectionResponse {
}

export interface MsgRegisterExternalToken {
  creator: string;
  connectionId: string;
  assetAddress: string;
  decimals?: Long;
  carbonTokenName?: string;
  relayFee?: Coin;
  expiryDuration?: Duration;
  carbonSymbol?: string;
}

export interface MsgRegisterExternalTokenResponse {
}

export interface MsgDeregisterExternalToken {
  creator: string;
  connectionId: string;
  denom: string;
  relayFee?: Coin;
  expiryDuration?: Duration;
}

export interface MsgDeregisterExternalTokenResponse {
}

export interface MsgDeployNativeToken {
  creator: string;
  connectionId: string;
  denom: string;
  relayFee?: Coin;
  expiryDuration?: Duration;
}

export interface MsgDeployNativeTokenResponse {
}

export interface MsgRegisterDeployedToken {
  creator: string;
  connectionId: string;
  tokenAddress: string;
  denom: string;
}

export interface MsgRegisterDeployedTokenResponse {
}

export interface MsgWithdrawToken {
  creator: string;
  connectionId: string;
  receiver: string;
  tokens?: Coin;
  relayFee?: Coin;
  expiryDuration?: Duration;
}

export interface MsgWithdrawTokenResponse {
}

export interface MsgUpdateExternalToken {
  creator: string;
  connectionId: string;
  assetAddress: string;
  tokenName: string;
  decimals: Long;
  isCarbonOwned: boolean;
  tokenSymbol: string;
}

export interface MsgUpdateExternalTokenResponse {
}

export interface MsgDeleteExternalToken {
  creator: string;
  connectionId: string;
  denom: string;
}

export interface MsgDeleteExternalTokenResponse {
}

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

export interface MsgExecuteFromCarbonResponse {
}

export interface MsgStartRelay {
  relayer: string;
  nonce: Long;
}

export interface MsgStartRelayResponse {
}

export interface MsgPruneExpiredPendingActions {
  creator: string;
  nonces: Long[];
}

export interface MsgPruneExpiredPendingActionsResponse {
}

export interface MsgRevertPendingAction {
  authority: string;
  connectionId: string;
  nonce: Long;
  actionType: Long;
}

export interface MsgRevertPendingActionResponse {
}

export interface MsgConfirmPendingAction {
  authority: string;
  connectionId: string;
  nonce: Long;
  actionType: Long;
}

export interface MsgConfirmPendingActionResponse {
}

export interface MsgAddRelayer {
  authority: string;
  relayer: string;
}

export interface MsgAddRelayerResponse {
}

export interface MsgRemoveRelayer {
  authority: string;
  relayer: string;
}

export interface MsgRemoveRelayerResponse {
}

function createBaseMsgSetBridgeEnabled(): MsgSetBridgeEnabled {
  return { creator: "", bridgeId: Long.UZERO, isEnabled: false };
}

export const MsgSetBridgeEnabled = {
  encode(message: MsgSetBridgeEnabled, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetBridgeEnabled();
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

          message.isEnabled = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetBridgeEnabled {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      bridgeId: isSet(object.bridgeId) ? Long.fromValue(object.bridgeId) : Long.UZERO,
      isEnabled: isSet(object.isEnabled) ? Boolean(object.isEnabled) : false,
    };
  },

  toJSON(message: MsgSetBridgeEnabled): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.bridgeId !== undefined && (obj.bridgeId = (message.bridgeId || Long.UZERO).toString());
    message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
    return obj;
  },

  create(base?: DeepPartial<MsgSetBridgeEnabled>): MsgSetBridgeEnabled {
    return MsgSetBridgeEnabled.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSetBridgeEnabled>): MsgSetBridgeEnabled {
    const message = createBaseMsgSetBridgeEnabled();
    message.creator = object.creator ?? "";
    message.bridgeId = (object.bridgeId !== undefined && object.bridgeId !== null)
      ? Long.fromValue(object.bridgeId)
      : Long.UZERO;
    message.isEnabled = object.isEnabled ?? false;
    return message;
  },
};

function createBaseMsgSetBridgeEnabledResponse(): MsgSetBridgeEnabledResponse {
  return {};
}

export const MsgSetBridgeEnabledResponse = {
  encode(_: MsgSetBridgeEnabledResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetBridgeEnabledResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetBridgeEnabledResponse();
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

  fromJSON(_: any): MsgSetBridgeEnabledResponse {
    return {};
  },

  toJSON(_: MsgSetBridgeEnabledResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSetBridgeEnabledResponse>): MsgSetBridgeEnabledResponse {
    return MsgSetBridgeEnabledResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgSetBridgeEnabledResponse>): MsgSetBridgeEnabledResponse {
    const message = createBaseMsgSetBridgeEnabledResponse();
    return message;
  },
};

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      ParamsToUpdate.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.params = ParamsToUpdate.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? ParamsToUpdate.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? ParamsToUpdate.toJSON(message.params) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    return MsgUpdateParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? ParamsToUpdate.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

function createBaseMsgCreateConnection(): MsgCreateConnection {
  return {
    creator: "",
    bridgeId: Long.UZERO,
    chainId: "",
    chainDisplayName: "",
    tokenGatewayAddress: "",
    encoding: "",
    isEnabled: false,
    isOptimisticConfirm: false,
  };
}

export const MsgCreateConnection = {
  encode(message: MsgCreateConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateConnection();
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
          if (tag !== 26) {
            break;
          }

          message.chainId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.chainDisplayName = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.tokenGatewayAddress = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.encoding = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.isEnabled = reader.bool();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.isOptimisticConfirm = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateConnection {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      bridgeId: isSet(object.bridgeId) ? Long.fromValue(object.bridgeId) : Long.UZERO,
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      chainDisplayName: isSet(object.chainDisplayName) ? String(object.chainDisplayName) : "",
      tokenGatewayAddress: isSet(object.tokenGatewayAddress) ? String(object.tokenGatewayAddress) : "",
      encoding: isSet(object.encoding) ? String(object.encoding) : "",
      isEnabled: isSet(object.isEnabled) ? Boolean(object.isEnabled) : false,
      isOptimisticConfirm: isSet(object.isOptimisticConfirm) ? Boolean(object.isOptimisticConfirm) : false,
    };
  },

  toJSON(message: MsgCreateConnection): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.bridgeId !== undefined && (obj.bridgeId = (message.bridgeId || Long.UZERO).toString());
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.chainDisplayName !== undefined && (obj.chainDisplayName = message.chainDisplayName);
    message.tokenGatewayAddress !== undefined && (obj.tokenGatewayAddress = message.tokenGatewayAddress);
    message.encoding !== undefined && (obj.encoding = message.encoding);
    message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
    message.isOptimisticConfirm !== undefined && (obj.isOptimisticConfirm = message.isOptimisticConfirm);
    return obj;
  },

  create(base?: DeepPartial<MsgCreateConnection>): MsgCreateConnection {
    return MsgCreateConnection.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreateConnection>): MsgCreateConnection {
    const message = createBaseMsgCreateConnection();
    message.creator = object.creator ?? "";
    message.bridgeId = (object.bridgeId !== undefined && object.bridgeId !== null)
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

function createBaseMsgCreateConnectionResponse(): MsgCreateConnectionResponse {
  return {};
}

export const MsgCreateConnectionResponse = {
  encode(_: MsgCreateConnectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateConnectionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateConnectionResponse();
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

  fromJSON(_: any): MsgCreateConnectionResponse {
    return {};
  },

  toJSON(_: MsgCreateConnectionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgCreateConnectionResponse>): MsgCreateConnectionResponse {
    return MsgCreateConnectionResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgCreateConnectionResponse>): MsgCreateConnectionResponse {
    const message = createBaseMsgCreateConnectionResponse();
    return message;
  },
};

function createBaseMsgUpdateConnection(): MsgUpdateConnection {
  return { creator: "", connectionId: "", updateConnectionParams: undefined };
}

export const MsgUpdateConnection = {
  encode(message: MsgUpdateConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.updateConnectionParams !== undefined) {
      UpdateConnectionParams.encode(message.updateConnectionParams, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateConnection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateConnection();
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

          message.connectionId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.updateConnectionParams = UpdateConnectionParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateConnection {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      updateConnectionParams: isSet(object.updateConnectionParams)
        ? UpdateConnectionParams.fromJSON(object.updateConnectionParams)
        : undefined,
    };
  },

  toJSON(message: MsgUpdateConnection): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.updateConnectionParams !== undefined && (obj.updateConnectionParams = message.updateConnectionParams
      ? UpdateConnectionParams.toJSON(message.updateConnectionParams)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateConnection>): MsgUpdateConnection {
    return MsgUpdateConnection.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateConnection>): MsgUpdateConnection {
    const message = createBaseMsgUpdateConnection();
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    message.updateConnectionParams =
      (object.updateConnectionParams !== undefined && object.updateConnectionParams !== null)
        ? UpdateConnectionParams.fromPartial(object.updateConnectionParams)
        : undefined;
    return message;
  },
};

function createBaseUpdateConnectionParams(): UpdateConnectionParams {
  return { chainDisplayName: undefined, isEnabled: undefined, isOptimisticConfirm: undefined };
}

export const UpdateConnectionParams = {
  encode(message: UpdateConnectionParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainDisplayName !== undefined) {
      StringValue.encode({ value: message.chainDisplayName! }, writer.uint32(10).fork()).ldelim();
    }
    if (message.isEnabled !== undefined) {
      BoolValue.encode({ value: message.isEnabled! }, writer.uint32(18).fork()).ldelim();
    }
    if (message.isOptimisticConfirm !== undefined) {
      BoolValue.encode({ value: message.isOptimisticConfirm! }, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateConnectionParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateConnectionParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chainDisplayName = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.isEnabled = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.isOptimisticConfirm = BoolValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateConnectionParams {
    return {
      chainDisplayName: isSet(object.chainDisplayName) ? String(object.chainDisplayName) : undefined,
      isEnabled: isSet(object.isEnabled) ? Boolean(object.isEnabled) : undefined,
      isOptimisticConfirm: isSet(object.isOptimisticConfirm) ? Boolean(object.isOptimisticConfirm) : undefined,
    };
  },

  toJSON(message: UpdateConnectionParams): unknown {
    const obj: any = {};
    message.chainDisplayName !== undefined && (obj.chainDisplayName = message.chainDisplayName);
    message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
    message.isOptimisticConfirm !== undefined && (obj.isOptimisticConfirm = message.isOptimisticConfirm);
    return obj;
  },

  create(base?: DeepPartial<UpdateConnectionParams>): UpdateConnectionParams {
    return UpdateConnectionParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateConnectionParams>): UpdateConnectionParams {
    const message = createBaseUpdateConnectionParams();
    message.chainDisplayName = object.chainDisplayName ?? undefined;
    message.isEnabled = object.isEnabled ?? undefined;
    message.isOptimisticConfirm = object.isOptimisticConfirm ?? undefined;
    return message;
  },
};

function createBaseMsgUpdateConnectionResponse(): MsgUpdateConnectionResponse {
  return {};
}

export const MsgUpdateConnectionResponse = {
  encode(_: MsgUpdateConnectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateConnectionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateConnectionResponse();
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

  fromJSON(_: any): MsgUpdateConnectionResponse {
    return {};
  },

  toJSON(_: MsgUpdateConnectionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateConnectionResponse>): MsgUpdateConnectionResponse {
    return MsgUpdateConnectionResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdateConnectionResponse>): MsgUpdateConnectionResponse {
    const message = createBaseMsgUpdateConnectionResponse();
    return message;
  },
};

function createBaseMsgRemoveConnection(): MsgRemoveConnection {
  return { creator: "", connectionId: "" };
}

export const MsgRemoveConnection = {
  encode(message: MsgRemoveConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveConnection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveConnection();
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

          message.connectionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveConnection {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
    };
  },

  toJSON(message: MsgRemoveConnection): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveConnection>): MsgRemoveConnection {
    return MsgRemoveConnection.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRemoveConnection>): MsgRemoveConnection {
    const message = createBaseMsgRemoveConnection();
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

function createBaseMsgRemoveConnectionResponse(): MsgRemoveConnectionResponse {
  return {};
}

export const MsgRemoveConnectionResponse = {
  encode(_: MsgRemoveConnectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveConnectionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveConnectionResponse();
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

  fromJSON(_: any): MsgRemoveConnectionResponse {
    return {};
  },

  toJSON(_: MsgRemoveConnectionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveConnectionResponse>): MsgRemoveConnectionResponse {
    return MsgRemoveConnectionResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgRemoveConnectionResponse>): MsgRemoveConnectionResponse {
    const message = createBaseMsgRemoveConnectionResponse();
    return message;
  },
};

function createBaseMsgAddControllersForConnection(): MsgAddControllersForConnection {
  return { creator: "", controllers: undefined };
}

export const MsgAddControllersForConnection = {
  encode(message: MsgAddControllersForConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.controllers !== undefined) {
      ControllerContracts.encode(message.controllers, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddControllersForConnection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddControllersForConnection();
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

          message.controllers = ControllerContracts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAddControllersForConnection {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      controllers: isSet(object.controllers) ? ControllerContracts.fromJSON(object.controllers) : undefined,
    };
  },

  toJSON(message: MsgAddControllersForConnection): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.controllers !== undefined &&
      (obj.controllers = message.controllers ? ControllerContracts.toJSON(message.controllers) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgAddControllersForConnection>): MsgAddControllersForConnection {
    return MsgAddControllersForConnection.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgAddControllersForConnection>): MsgAddControllersForConnection {
    const message = createBaseMsgAddControllersForConnection();
    message.creator = object.creator ?? "";
    message.controllers = (object.controllers !== undefined && object.controllers !== null)
      ? ControllerContracts.fromPartial(object.controllers)
      : undefined;
    return message;
  },
};

function createBaseMsgAddControllersForConnectionResponse(): MsgAddControllersForConnectionResponse {
  return {};
}

export const MsgAddControllersForConnectionResponse = {
  encode(_: MsgAddControllersForConnectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddControllersForConnectionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddControllersForConnectionResponse();
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

  fromJSON(_: any): MsgAddControllersForConnectionResponse {
    return {};
  },

  toJSON(_: MsgAddControllersForConnectionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgAddControllersForConnectionResponse>): MsgAddControllersForConnectionResponse {
    return MsgAddControllersForConnectionResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgAddControllersForConnectionResponse>): MsgAddControllersForConnectionResponse {
    const message = createBaseMsgAddControllersForConnectionResponse();
    return message;
  },
};

function createBaseMsgUpdateControllersForConnection(): MsgUpdateControllersForConnection {
  return { creator: "", connectionId: "", controllers: undefined };
}

export const MsgUpdateControllersForConnection = {
  encode(message: MsgUpdateControllersForConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.controllers !== undefined) {
      ControllersToUpdate.encode(message.controllers, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateControllersForConnection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateControllersForConnection();
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

          message.connectionId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.controllers = ControllersToUpdate.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateControllersForConnection {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      controllers: isSet(object.controllers) ? ControllersToUpdate.fromJSON(object.controllers) : undefined,
    };
  },

  toJSON(message: MsgUpdateControllersForConnection): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.controllers !== undefined &&
      (obj.controllers = message.controllers ? ControllersToUpdate.toJSON(message.controllers) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateControllersForConnection>): MsgUpdateControllersForConnection {
    return MsgUpdateControllersForConnection.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateControllersForConnection>): MsgUpdateControllersForConnection {
    const message = createBaseMsgUpdateControllersForConnection();
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    message.controllers = (object.controllers !== undefined && object.controllers !== null)
      ? ControllersToUpdate.fromPartial(object.controllers)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateControllersForConnectionResponse(): MsgUpdateControllersForConnectionResponse {
  return {};
}

export const MsgUpdateControllersForConnectionResponse = {
  encode(_: MsgUpdateControllersForConnectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateControllersForConnectionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateControllersForConnectionResponse();
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

  fromJSON(_: any): MsgUpdateControllersForConnectionResponse {
    return {};
  },

  toJSON(_: MsgUpdateControllersForConnectionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateControllersForConnectionResponse>): MsgUpdateControllersForConnectionResponse {
    return MsgUpdateControllersForConnectionResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdateControllersForConnectionResponse>): MsgUpdateControllersForConnectionResponse {
    const message = createBaseMsgUpdateControllersForConnectionResponse();
    return message;
  },
};

function createBaseMsgRemoveControllersForConnection(): MsgRemoveControllersForConnection {
  return { creator: "", connectionId: "" };
}

export const MsgRemoveControllersForConnection = {
  encode(message: MsgRemoveControllersForConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveControllersForConnection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveControllersForConnection();
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

          message.connectionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveControllersForConnection {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
    };
  },

  toJSON(message: MsgRemoveControllersForConnection): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveControllersForConnection>): MsgRemoveControllersForConnection {
    return MsgRemoveControllersForConnection.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRemoveControllersForConnection>): MsgRemoveControllersForConnection {
    const message = createBaseMsgRemoveControllersForConnection();
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

function createBaseMsgRemoveControllersForConnectionResponse(): MsgRemoveControllersForConnectionResponse {
  return {};
}

export const MsgRemoveControllersForConnectionResponse = {
  encode(_: MsgRemoveControllersForConnectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveControllersForConnectionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveControllersForConnectionResponse();
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

  fromJSON(_: any): MsgRemoveControllersForConnectionResponse {
    return {};
  },

  toJSON(_: MsgRemoveControllersForConnectionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveControllersForConnectionResponse>): MsgRemoveControllersForConnectionResponse {
    return MsgRemoveControllersForConnectionResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgRemoveControllersForConnectionResponse>): MsgRemoveControllersForConnectionResponse {
    const message = createBaseMsgRemoveControllersForConnectionResponse();
    return message;
  },
};

function createBaseMsgRemoveNonceMapForConnection(): MsgRemoveNonceMapForConnection {
  return { creator: "", connectionId: "", gatewayAddress: "" };
}

export const MsgRemoveNonceMapForConnection = {
  encode(message: MsgRemoveNonceMapForConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveNonceMapForConnection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveNonceMapForConnection();
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

          message.connectionId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.gatewayAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveNonceMapForConnection {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      gatewayAddress: isSet(object.gatewayAddress) ? String(object.gatewayAddress) : "",
    };
  },

  toJSON(message: MsgRemoveNonceMapForConnection): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.gatewayAddress !== undefined && (obj.gatewayAddress = message.gatewayAddress);
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveNonceMapForConnection>): MsgRemoveNonceMapForConnection {
    return MsgRemoveNonceMapForConnection.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRemoveNonceMapForConnection>): MsgRemoveNonceMapForConnection {
    const message = createBaseMsgRemoveNonceMapForConnection();
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    message.gatewayAddress = object.gatewayAddress ?? "";
    return message;
  },
};

function createBaseMsgRemoveNonceMapForConnectionResponse(): MsgRemoveNonceMapForConnectionResponse {
  return {};
}

export const MsgRemoveNonceMapForConnectionResponse = {
  encode(_: MsgRemoveNonceMapForConnectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveNonceMapForConnectionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveNonceMapForConnectionResponse();
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

  fromJSON(_: any): MsgRemoveNonceMapForConnectionResponse {
    return {};
  },

  toJSON(_: MsgRemoveNonceMapForConnectionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveNonceMapForConnectionResponse>): MsgRemoveNonceMapForConnectionResponse {
    return MsgRemoveNonceMapForConnectionResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgRemoveNonceMapForConnectionResponse>): MsgRemoveNonceMapForConnectionResponse {
    const message = createBaseMsgRemoveNonceMapForConnectionResponse();
    return message;
  },
};

function createBaseMsgRegisterExternalToken(): MsgRegisterExternalToken {
  return {
    creator: "",
    connectionId: "",
    assetAddress: "",
    decimals: undefined,
    carbonTokenName: undefined,
    relayFee: undefined,
    expiryDuration: undefined,
    carbonSymbol: undefined,
  };
}

export const MsgRegisterExternalToken = {
  encode(message: MsgRegisterExternalToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Int64Value.encode({ value: message.decimals! }, writer.uint32(34).fork()).ldelim();
    }
    if (message.carbonTokenName !== undefined) {
      StringValue.encode({ value: message.carbonTokenName! }, writer.uint32(42).fork()).ldelim();
    }
    if (message.relayFee !== undefined) {
      Coin.encode(message.relayFee, writer.uint32(50).fork()).ldelim();
    }
    if (message.expiryDuration !== undefined) {
      Duration.encode(message.expiryDuration, writer.uint32(58).fork()).ldelim();
    }
    if (message.carbonSymbol !== undefined) {
      StringValue.encode({ value: message.carbonSymbol! }, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterExternalToken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterExternalToken();
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

          message.connectionId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.assetAddress = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.decimals = Int64Value.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.carbonTokenName = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.relayFee = Coin.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.expiryDuration = Duration.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.carbonSymbol = StringValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterExternalToken {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      assetAddress: isSet(object.assetAddress) ? String(object.assetAddress) : "",
      decimals: isSet(object.decimals) ? Long.fromValue(object.decimals) : undefined,
      carbonTokenName: isSet(object.carbonTokenName) ? String(object.carbonTokenName) : undefined,
      relayFee: isSet(object.relayFee) ? Coin.fromJSON(object.relayFee) : undefined,
      expiryDuration: isSet(object.expiryDuration) ? Duration.fromJSON(object.expiryDuration) : undefined,
      carbonSymbol: isSet(object.carbonSymbol) ? String(object.carbonSymbol) : undefined,
    };
  },

  toJSON(message: MsgRegisterExternalToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.assetAddress !== undefined && (obj.assetAddress = message.assetAddress);
    message.decimals !== undefined && (obj.decimals = message.decimals);
    message.carbonTokenName !== undefined && (obj.carbonTokenName = message.carbonTokenName);
    message.relayFee !== undefined && (obj.relayFee = message.relayFee ? Coin.toJSON(message.relayFee) : undefined);
    message.expiryDuration !== undefined &&
      (obj.expiryDuration = message.expiryDuration ? Duration.toJSON(message.expiryDuration) : undefined);
    message.carbonSymbol !== undefined && (obj.carbonSymbol = message.carbonSymbol);
    return obj;
  },

  create(base?: DeepPartial<MsgRegisterExternalToken>): MsgRegisterExternalToken {
    return MsgRegisterExternalToken.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRegisterExternalToken>): MsgRegisterExternalToken {
    const message = createBaseMsgRegisterExternalToken();
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    message.assetAddress = object.assetAddress ?? "";
    message.decimals = (object.decimals !== undefined && object.decimals !== null)
      ? Long.fromValue(object.decimals)
      : undefined;
    message.carbonTokenName = object.carbonTokenName ?? undefined;
    message.relayFee = (object.relayFee !== undefined && object.relayFee !== null)
      ? Coin.fromPartial(object.relayFee)
      : undefined;
    message.expiryDuration = (object.expiryDuration !== undefined && object.expiryDuration !== null)
      ? Duration.fromPartial(object.expiryDuration)
      : undefined;
    message.carbonSymbol = object.carbonSymbol ?? undefined;
    return message;
  },
};

function createBaseMsgRegisterExternalTokenResponse(): MsgRegisterExternalTokenResponse {
  return {};
}

export const MsgRegisterExternalTokenResponse = {
  encode(_: MsgRegisterExternalTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterExternalTokenResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterExternalTokenResponse();
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

  fromJSON(_: any): MsgRegisterExternalTokenResponse {
    return {};
  },

  toJSON(_: MsgRegisterExternalTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgRegisterExternalTokenResponse>): MsgRegisterExternalTokenResponse {
    return MsgRegisterExternalTokenResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgRegisterExternalTokenResponse>): MsgRegisterExternalTokenResponse {
    const message = createBaseMsgRegisterExternalTokenResponse();
    return message;
  },
};

function createBaseMsgDeregisterExternalToken(): MsgDeregisterExternalToken {
  return { creator: "", connectionId: "", denom: "", relayFee: undefined, expiryDuration: undefined };
}

export const MsgDeregisterExternalToken = {
  encode(message: MsgDeregisterExternalToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Duration.encode(message.expiryDuration, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeregisterExternalToken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeregisterExternalToken();
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

          message.connectionId = reader.string();
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

          message.relayFee = Coin.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.expiryDuration = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgDeregisterExternalToken {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      relayFee: isSet(object.relayFee) ? Coin.fromJSON(object.relayFee) : undefined,
      expiryDuration: isSet(object.expiryDuration) ? Duration.fromJSON(object.expiryDuration) : undefined,
    };
  },

  toJSON(message: MsgDeregisterExternalToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.denom !== undefined && (obj.denom = message.denom);
    message.relayFee !== undefined && (obj.relayFee = message.relayFee ? Coin.toJSON(message.relayFee) : undefined);
    message.expiryDuration !== undefined &&
      (obj.expiryDuration = message.expiryDuration ? Duration.toJSON(message.expiryDuration) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgDeregisterExternalToken>): MsgDeregisterExternalToken {
    return MsgDeregisterExternalToken.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgDeregisterExternalToken>): MsgDeregisterExternalToken {
    const message = createBaseMsgDeregisterExternalToken();
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    message.denom = object.denom ?? "";
    message.relayFee = (object.relayFee !== undefined && object.relayFee !== null)
      ? Coin.fromPartial(object.relayFee)
      : undefined;
    message.expiryDuration = (object.expiryDuration !== undefined && object.expiryDuration !== null)
      ? Duration.fromPartial(object.expiryDuration)
      : undefined;
    return message;
  },
};

function createBaseMsgDeregisterExternalTokenResponse(): MsgDeregisterExternalTokenResponse {
  return {};
}

export const MsgDeregisterExternalTokenResponse = {
  encode(_: MsgDeregisterExternalTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeregisterExternalTokenResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeregisterExternalTokenResponse();
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

  fromJSON(_: any): MsgDeregisterExternalTokenResponse {
    return {};
  },

  toJSON(_: MsgDeregisterExternalTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgDeregisterExternalTokenResponse>): MsgDeregisterExternalTokenResponse {
    return MsgDeregisterExternalTokenResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgDeregisterExternalTokenResponse>): MsgDeregisterExternalTokenResponse {
    const message = createBaseMsgDeregisterExternalTokenResponse();
    return message;
  },
};

function createBaseMsgDeployNativeToken(): MsgDeployNativeToken {
  return { creator: "", connectionId: "", denom: "", relayFee: undefined, expiryDuration: undefined };
}

export const MsgDeployNativeToken = {
  encode(message: MsgDeployNativeToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Duration.encode(message.expiryDuration, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeployNativeToken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeployNativeToken();
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

          message.connectionId = reader.string();
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

          message.relayFee = Coin.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.expiryDuration = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgDeployNativeToken {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      relayFee: isSet(object.relayFee) ? Coin.fromJSON(object.relayFee) : undefined,
      expiryDuration: isSet(object.expiryDuration) ? Duration.fromJSON(object.expiryDuration) : undefined,
    };
  },

  toJSON(message: MsgDeployNativeToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.denom !== undefined && (obj.denom = message.denom);
    message.relayFee !== undefined && (obj.relayFee = message.relayFee ? Coin.toJSON(message.relayFee) : undefined);
    message.expiryDuration !== undefined &&
      (obj.expiryDuration = message.expiryDuration ? Duration.toJSON(message.expiryDuration) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgDeployNativeToken>): MsgDeployNativeToken {
    return MsgDeployNativeToken.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgDeployNativeToken>): MsgDeployNativeToken {
    const message = createBaseMsgDeployNativeToken();
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    message.denom = object.denom ?? "";
    message.relayFee = (object.relayFee !== undefined && object.relayFee !== null)
      ? Coin.fromPartial(object.relayFee)
      : undefined;
    message.expiryDuration = (object.expiryDuration !== undefined && object.expiryDuration !== null)
      ? Duration.fromPartial(object.expiryDuration)
      : undefined;
    return message;
  },
};

function createBaseMsgDeployNativeTokenResponse(): MsgDeployNativeTokenResponse {
  return {};
}

export const MsgDeployNativeTokenResponse = {
  encode(_: MsgDeployNativeTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeployNativeTokenResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeployNativeTokenResponse();
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

  fromJSON(_: any): MsgDeployNativeTokenResponse {
    return {};
  },

  toJSON(_: MsgDeployNativeTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgDeployNativeTokenResponse>): MsgDeployNativeTokenResponse {
    return MsgDeployNativeTokenResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgDeployNativeTokenResponse>): MsgDeployNativeTokenResponse {
    const message = createBaseMsgDeployNativeTokenResponse();
    return message;
  },
};

function createBaseMsgRegisterDeployedToken(): MsgRegisterDeployedToken {
  return { creator: "", connectionId: "", tokenAddress: "", denom: "" };
}

export const MsgRegisterDeployedToken = {
  encode(message: MsgRegisterDeployedToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterDeployedToken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterDeployedToken();
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

          message.connectionId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.tokenAddress = reader.string();
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

  fromJSON(object: any): MsgRegisterDeployedToken {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      tokenAddress: isSet(object.tokenAddress) ? String(object.tokenAddress) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: MsgRegisterDeployedToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.tokenAddress !== undefined && (obj.tokenAddress = message.tokenAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<MsgRegisterDeployedToken>): MsgRegisterDeployedToken {
    return MsgRegisterDeployedToken.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRegisterDeployedToken>): MsgRegisterDeployedToken {
    const message = createBaseMsgRegisterDeployedToken();
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    message.tokenAddress = object.tokenAddress ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseMsgRegisterDeployedTokenResponse(): MsgRegisterDeployedTokenResponse {
  return {};
}

export const MsgRegisterDeployedTokenResponse = {
  encode(_: MsgRegisterDeployedTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterDeployedTokenResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterDeployedTokenResponse();
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

  fromJSON(_: any): MsgRegisterDeployedTokenResponse {
    return {};
  },

  toJSON(_: MsgRegisterDeployedTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgRegisterDeployedTokenResponse>): MsgRegisterDeployedTokenResponse {
    return MsgRegisterDeployedTokenResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgRegisterDeployedTokenResponse>): MsgRegisterDeployedTokenResponse {
    const message = createBaseMsgRegisterDeployedTokenResponse();
    return message;
  },
};

function createBaseMsgWithdrawToken(): MsgWithdrawToken {
  return {
    creator: "",
    connectionId: "",
    receiver: "",
    tokens: undefined,
    relayFee: undefined,
    expiryDuration: undefined,
  };
}

export const MsgWithdrawToken = {
  encode(message: MsgWithdrawToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Duration.encode(message.expiryDuration, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawToken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawToken();
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

          message.connectionId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.receiver = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.tokens = Coin.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.relayFee = Coin.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.expiryDuration = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawToken {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      tokens: isSet(object.tokens) ? Coin.fromJSON(object.tokens) : undefined,
      relayFee: isSet(object.relayFee) ? Coin.fromJSON(object.relayFee) : undefined,
      expiryDuration: isSet(object.expiryDuration) ? Duration.fromJSON(object.expiryDuration) : undefined,
    };
  },

  toJSON(message: MsgWithdrawToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.tokens !== undefined && (obj.tokens = message.tokens ? Coin.toJSON(message.tokens) : undefined);
    message.relayFee !== undefined && (obj.relayFee = message.relayFee ? Coin.toJSON(message.relayFee) : undefined);
    message.expiryDuration !== undefined &&
      (obj.expiryDuration = message.expiryDuration ? Duration.toJSON(message.expiryDuration) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgWithdrawToken>): MsgWithdrawToken {
    return MsgWithdrawToken.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgWithdrawToken>): MsgWithdrawToken {
    const message = createBaseMsgWithdrawToken();
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    message.receiver = object.receiver ?? "";
    message.tokens = (object.tokens !== undefined && object.tokens !== null)
      ? Coin.fromPartial(object.tokens)
      : undefined;
    message.relayFee = (object.relayFee !== undefined && object.relayFee !== null)
      ? Coin.fromPartial(object.relayFee)
      : undefined;
    message.expiryDuration = (object.expiryDuration !== undefined && object.expiryDuration !== null)
      ? Duration.fromPartial(object.expiryDuration)
      : undefined;
    return message;
  },
};

function createBaseMsgWithdrawTokenResponse(): MsgWithdrawTokenResponse {
  return {};
}

export const MsgWithdrawTokenResponse = {
  encode(_: MsgWithdrawTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawTokenResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawTokenResponse();
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

  fromJSON(_: any): MsgWithdrawTokenResponse {
    return {};
  },

  toJSON(_: MsgWithdrawTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgWithdrawTokenResponse>): MsgWithdrawTokenResponse {
    return MsgWithdrawTokenResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgWithdrawTokenResponse>): MsgWithdrawTokenResponse {
    const message = createBaseMsgWithdrawTokenResponse();
    return message;
  },
};

function createBaseMsgUpdateExternalToken(): MsgUpdateExternalToken {
  return {
    creator: "",
    connectionId: "",
    assetAddress: "",
    tokenName: "",
    decimals: Long.ZERO,
    isCarbonOwned: false,
    tokenSymbol: "",
  };
}

export const MsgUpdateExternalToken = {
  encode(message: MsgUpdateExternalToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.tokenSymbol !== "") {
      writer.uint32(58).string(message.tokenSymbol);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateExternalToken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateExternalToken();
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

          message.connectionId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.assetAddress = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.tokenName = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.decimals = reader.int64() as Long;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.isCarbonOwned = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.tokenSymbol = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateExternalToken {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      assetAddress: isSet(object.assetAddress) ? String(object.assetAddress) : "",
      tokenName: isSet(object.tokenName) ? String(object.tokenName) : "",
      decimals: isSet(object.decimals) ? Long.fromValue(object.decimals) : Long.ZERO,
      isCarbonOwned: isSet(object.isCarbonOwned) ? Boolean(object.isCarbonOwned) : false,
      tokenSymbol: isSet(object.tokenSymbol) ? String(object.tokenSymbol) : "",
    };
  },

  toJSON(message: MsgUpdateExternalToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.assetAddress !== undefined && (obj.assetAddress = message.assetAddress);
    message.tokenName !== undefined && (obj.tokenName = message.tokenName);
    message.decimals !== undefined && (obj.decimals = (message.decimals || Long.ZERO).toString());
    message.isCarbonOwned !== undefined && (obj.isCarbonOwned = message.isCarbonOwned);
    message.tokenSymbol !== undefined && (obj.tokenSymbol = message.tokenSymbol);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateExternalToken>): MsgUpdateExternalToken {
    return MsgUpdateExternalToken.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateExternalToken>): MsgUpdateExternalToken {
    const message = createBaseMsgUpdateExternalToken();
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    message.assetAddress = object.assetAddress ?? "";
    message.tokenName = object.tokenName ?? "";
    message.decimals = (object.decimals !== undefined && object.decimals !== null)
      ? Long.fromValue(object.decimals)
      : Long.ZERO;
    message.isCarbonOwned = object.isCarbonOwned ?? false;
    message.tokenSymbol = object.tokenSymbol ?? "";
    return message;
  },
};

function createBaseMsgUpdateExternalTokenResponse(): MsgUpdateExternalTokenResponse {
  return {};
}

export const MsgUpdateExternalTokenResponse = {
  encode(_: MsgUpdateExternalTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateExternalTokenResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateExternalTokenResponse();
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

  fromJSON(_: any): MsgUpdateExternalTokenResponse {
    return {};
  },

  toJSON(_: MsgUpdateExternalTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateExternalTokenResponse>): MsgUpdateExternalTokenResponse {
    return MsgUpdateExternalTokenResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdateExternalTokenResponse>): MsgUpdateExternalTokenResponse {
    const message = createBaseMsgUpdateExternalTokenResponse();
    return message;
  },
};

function createBaseMsgDeleteExternalToken(): MsgDeleteExternalToken {
  return { creator: "", connectionId: "", denom: "" };
}

export const MsgDeleteExternalToken = {
  encode(message: MsgDeleteExternalToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteExternalToken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteExternalToken();
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

          message.connectionId = reader.string();
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

  fromJSON(object: any): MsgDeleteExternalToken {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: MsgDeleteExternalToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<MsgDeleteExternalToken>): MsgDeleteExternalToken {
    return MsgDeleteExternalToken.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgDeleteExternalToken>): MsgDeleteExternalToken {
    const message = createBaseMsgDeleteExternalToken();
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseMsgDeleteExternalTokenResponse(): MsgDeleteExternalTokenResponse {
  return {};
}

export const MsgDeleteExternalTokenResponse = {
  encode(_: MsgDeleteExternalTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteExternalTokenResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteExternalTokenResponse();
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

  fromJSON(_: any): MsgDeleteExternalTokenResponse {
    return {};
  },

  toJSON(_: MsgDeleteExternalTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgDeleteExternalTokenResponse>): MsgDeleteExternalTokenResponse {
    return MsgDeleteExternalTokenResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgDeleteExternalTokenResponse>): MsgDeleteExternalTokenResponse {
    const message = createBaseMsgDeleteExternalTokenResponse();
    return message;
  },
};

function createBaseMsgExecuteFromCarbon(): MsgExecuteFromCarbon {
  return {
    creator: "",
    connectionId: "",
    executionContract: "",
    method: "",
    executionBytes: new Uint8Array(),
    tokens: undefined,
    relayFee: undefined,
    expiryDuration: undefined,
  };
}

export const MsgExecuteFromCarbon = {
  encode(message: MsgExecuteFromCarbon, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Duration.encode(message.expiryDuration, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteFromCarbon {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteFromCarbon();
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

          message.connectionId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.executionContract = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.method = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.executionBytes = reader.bytes();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.tokens = Coin.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.relayFee = Coin.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.expiryDuration = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgExecuteFromCarbon {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      executionContract: isSet(object.executionContract) ? String(object.executionContract) : "",
      method: isSet(object.method) ? String(object.method) : "",
      executionBytes: isSet(object.executionBytes) ? bytesFromBase64(object.executionBytes) : new Uint8Array(),
      tokens: isSet(object.tokens) ? Coin.fromJSON(object.tokens) : undefined,
      relayFee: isSet(object.relayFee) ? Coin.fromJSON(object.relayFee) : undefined,
      expiryDuration: isSet(object.expiryDuration) ? Duration.fromJSON(object.expiryDuration) : undefined,
    };
  },

  toJSON(message: MsgExecuteFromCarbon): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.executionContract !== undefined && (obj.executionContract = message.executionContract);
    message.method !== undefined && (obj.method = message.method);
    message.executionBytes !== undefined &&
      (obj.executionBytes = base64FromBytes(
        message.executionBytes !== undefined ? message.executionBytes : new Uint8Array(),
      ));
    message.tokens !== undefined && (obj.tokens = message.tokens ? Coin.toJSON(message.tokens) : undefined);
    message.relayFee !== undefined && (obj.relayFee = message.relayFee ? Coin.toJSON(message.relayFee) : undefined);
    message.expiryDuration !== undefined &&
      (obj.expiryDuration = message.expiryDuration ? Duration.toJSON(message.expiryDuration) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgExecuteFromCarbon>): MsgExecuteFromCarbon {
    return MsgExecuteFromCarbon.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgExecuteFromCarbon>): MsgExecuteFromCarbon {
    const message = createBaseMsgExecuteFromCarbon();
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    message.executionContract = object.executionContract ?? "";
    message.method = object.method ?? "";
    message.executionBytes = object.executionBytes ?? new Uint8Array();
    message.tokens = (object.tokens !== undefined && object.tokens !== null)
      ? Coin.fromPartial(object.tokens)
      : undefined;
    message.relayFee = (object.relayFee !== undefined && object.relayFee !== null)
      ? Coin.fromPartial(object.relayFee)
      : undefined;
    message.expiryDuration = (object.expiryDuration !== undefined && object.expiryDuration !== null)
      ? Duration.fromPartial(object.expiryDuration)
      : undefined;
    return message;
  },
};

function createBaseMsgExecuteFromCarbonResponse(): MsgExecuteFromCarbonResponse {
  return {};
}

export const MsgExecuteFromCarbonResponse = {
  encode(_: MsgExecuteFromCarbonResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteFromCarbonResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteFromCarbonResponse();
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

  fromJSON(_: any): MsgExecuteFromCarbonResponse {
    return {};
  },

  toJSON(_: MsgExecuteFromCarbonResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgExecuteFromCarbonResponse>): MsgExecuteFromCarbonResponse {
    return MsgExecuteFromCarbonResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgExecuteFromCarbonResponse>): MsgExecuteFromCarbonResponse {
    const message = createBaseMsgExecuteFromCarbonResponse();
    return message;
  },
};

function createBaseMsgStartRelay(): MsgStartRelay {
  return { relayer: "", nonce: Long.UZERO };
}

export const MsgStartRelay = {
  encode(message: MsgStartRelay, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.relayer !== "") {
      writer.uint32(10).string(message.relayer);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(16).uint64(message.nonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartRelay {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartRelay();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.relayer = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.nonce = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgStartRelay {
    return {
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
    };
  },

  toJSON(message: MsgStartRelay): unknown {
    const obj: any = {};
    message.relayer !== undefined && (obj.relayer = message.relayer);
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<MsgStartRelay>): MsgStartRelay {
    return MsgStartRelay.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgStartRelay>): MsgStartRelay {
    const message = createBaseMsgStartRelay();
    message.relayer = object.relayer ?? "";
    message.nonce = (object.nonce !== undefined && object.nonce !== null) ? Long.fromValue(object.nonce) : Long.UZERO;
    return message;
  },
};

function createBaseMsgStartRelayResponse(): MsgStartRelayResponse {
  return {};
}

export const MsgStartRelayResponse = {
  encode(_: MsgStartRelayResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartRelayResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartRelayResponse();
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

  fromJSON(_: any): MsgStartRelayResponse {
    return {};
  },

  toJSON(_: MsgStartRelayResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgStartRelayResponse>): MsgStartRelayResponse {
    return MsgStartRelayResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgStartRelayResponse>): MsgStartRelayResponse {
    const message = createBaseMsgStartRelayResponse();
    return message;
  },
};

function createBaseMsgPruneExpiredPendingActions(): MsgPruneExpiredPendingActions {
  return { creator: "", nonces: [] };
}

export const MsgPruneExpiredPendingActions = {
  encode(message: MsgPruneExpiredPendingActions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPruneExpiredPendingActions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPruneExpiredPendingActions();
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
          if (tag === 16) {
            message.nonces.push(reader.uint64() as Long);

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.nonces.push(reader.uint64() as Long);
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgPruneExpiredPendingActions {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      nonces: Array.isArray(object?.nonces) ? object.nonces.map((e: any) => Long.fromValue(e)) : [],
    };
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

  create(base?: DeepPartial<MsgPruneExpiredPendingActions>): MsgPruneExpiredPendingActions {
    return MsgPruneExpiredPendingActions.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgPruneExpiredPendingActions>): MsgPruneExpiredPendingActions {
    const message = createBaseMsgPruneExpiredPendingActions();
    message.creator = object.creator ?? "";
    message.nonces = object.nonces?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseMsgPruneExpiredPendingActionsResponse(): MsgPruneExpiredPendingActionsResponse {
  return {};
}

export const MsgPruneExpiredPendingActionsResponse = {
  encode(_: MsgPruneExpiredPendingActionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPruneExpiredPendingActionsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPruneExpiredPendingActionsResponse();
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

  fromJSON(_: any): MsgPruneExpiredPendingActionsResponse {
    return {};
  },

  toJSON(_: MsgPruneExpiredPendingActionsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgPruneExpiredPendingActionsResponse>): MsgPruneExpiredPendingActionsResponse {
    return MsgPruneExpiredPendingActionsResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgPruneExpiredPendingActionsResponse>): MsgPruneExpiredPendingActionsResponse {
    const message = createBaseMsgPruneExpiredPendingActionsResponse();
    return message;
  },
};

function createBaseMsgRevertPendingAction(): MsgRevertPendingAction {
  return { authority: "", connectionId: "", nonce: Long.UZERO, actionType: Long.UZERO };
}

export const MsgRevertPendingAction = {
  encode(message: MsgRevertPendingAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevertPendingAction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevertPendingAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.connectionId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.nonce = reader.uint64() as Long;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.actionType = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRevertPendingAction {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      actionType: isSet(object.actionType) ? Long.fromValue(object.actionType) : Long.UZERO,
    };
  },

  toJSON(message: MsgRevertPendingAction): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.actionType !== undefined && (obj.actionType = (message.actionType || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<MsgRevertPendingAction>): MsgRevertPendingAction {
    return MsgRevertPendingAction.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRevertPendingAction>): MsgRevertPendingAction {
    const message = createBaseMsgRevertPendingAction();
    message.authority = object.authority ?? "";
    message.connectionId = object.connectionId ?? "";
    message.nonce = (object.nonce !== undefined && object.nonce !== null) ? Long.fromValue(object.nonce) : Long.UZERO;
    message.actionType = (object.actionType !== undefined && object.actionType !== null)
      ? Long.fromValue(object.actionType)
      : Long.UZERO;
    return message;
  },
};

function createBaseMsgRevertPendingActionResponse(): MsgRevertPendingActionResponse {
  return {};
}

export const MsgRevertPendingActionResponse = {
  encode(_: MsgRevertPendingActionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevertPendingActionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevertPendingActionResponse();
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

  fromJSON(_: any): MsgRevertPendingActionResponse {
    return {};
  },

  toJSON(_: MsgRevertPendingActionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgRevertPendingActionResponse>): MsgRevertPendingActionResponse {
    return MsgRevertPendingActionResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgRevertPendingActionResponse>): MsgRevertPendingActionResponse {
    const message = createBaseMsgRevertPendingActionResponse();
    return message;
  },
};

function createBaseMsgConfirmPendingAction(): MsgConfirmPendingAction {
  return { authority: "", connectionId: "", nonce: Long.UZERO, actionType: Long.UZERO };
}

export const MsgConfirmPendingAction = {
  encode(message: MsgConfirmPendingAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmPendingAction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmPendingAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.connectionId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.nonce = reader.uint64() as Long;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.actionType = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgConfirmPendingAction {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      actionType: isSet(object.actionType) ? Long.fromValue(object.actionType) : Long.UZERO,
    };
  },

  toJSON(message: MsgConfirmPendingAction): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.actionType !== undefined && (obj.actionType = (message.actionType || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<MsgConfirmPendingAction>): MsgConfirmPendingAction {
    return MsgConfirmPendingAction.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgConfirmPendingAction>): MsgConfirmPendingAction {
    const message = createBaseMsgConfirmPendingAction();
    message.authority = object.authority ?? "";
    message.connectionId = object.connectionId ?? "";
    message.nonce = (object.nonce !== undefined && object.nonce !== null) ? Long.fromValue(object.nonce) : Long.UZERO;
    message.actionType = (object.actionType !== undefined && object.actionType !== null)
      ? Long.fromValue(object.actionType)
      : Long.UZERO;
    return message;
  },
};

function createBaseMsgConfirmPendingActionResponse(): MsgConfirmPendingActionResponse {
  return {};
}

export const MsgConfirmPendingActionResponse = {
  encode(_: MsgConfirmPendingActionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmPendingActionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmPendingActionResponse();
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

  fromJSON(_: any): MsgConfirmPendingActionResponse {
    return {};
  },

  toJSON(_: MsgConfirmPendingActionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgConfirmPendingActionResponse>): MsgConfirmPendingActionResponse {
    return MsgConfirmPendingActionResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgConfirmPendingActionResponse>): MsgConfirmPendingActionResponse {
    const message = createBaseMsgConfirmPendingActionResponse();
    return message;
  },
};

function createBaseMsgAddRelayer(): MsgAddRelayer {
  return { authority: "", relayer: "" };
}

export const MsgAddRelayer = {
  encode(message: MsgAddRelayer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddRelayer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddRelayer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.relayer = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAddRelayer {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
    };
  },

  toJSON(message: MsgAddRelayer): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    return obj;
  },

  create(base?: DeepPartial<MsgAddRelayer>): MsgAddRelayer {
    return MsgAddRelayer.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgAddRelayer>): MsgAddRelayer {
    const message = createBaseMsgAddRelayer();
    message.authority = object.authority ?? "";
    message.relayer = object.relayer ?? "";
    return message;
  },
};

function createBaseMsgAddRelayerResponse(): MsgAddRelayerResponse {
  return {};
}

export const MsgAddRelayerResponse = {
  encode(_: MsgAddRelayerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddRelayerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddRelayerResponse();
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

  fromJSON(_: any): MsgAddRelayerResponse {
    return {};
  },

  toJSON(_: MsgAddRelayerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgAddRelayerResponse>): MsgAddRelayerResponse {
    return MsgAddRelayerResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgAddRelayerResponse>): MsgAddRelayerResponse {
    const message = createBaseMsgAddRelayerResponse();
    return message;
  },
};

function createBaseMsgRemoveRelayer(): MsgRemoveRelayer {
  return { authority: "", relayer: "" };
}

export const MsgRemoveRelayer = {
  encode(message: MsgRemoveRelayer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveRelayer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveRelayer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.relayer = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveRelayer {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
    };
  },

  toJSON(message: MsgRemoveRelayer): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveRelayer>): MsgRemoveRelayer {
    return MsgRemoveRelayer.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRemoveRelayer>): MsgRemoveRelayer {
    const message = createBaseMsgRemoveRelayer();
    message.authority = object.authority ?? "";
    message.relayer = object.relayer ?? "";
    return message;
  },
};

function createBaseMsgRemoveRelayerResponse(): MsgRemoveRelayerResponse {
  return {};
}

export const MsgRemoveRelayerResponse = {
  encode(_: MsgRemoveRelayerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveRelayerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveRelayerResponse();
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

  fromJSON(_: any): MsgRemoveRelayerResponse {
    return {};
  },

  toJSON(_: MsgRemoveRelayerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveRelayerResponse>): MsgRemoveRelayerResponse {
    return MsgRemoveRelayerResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgRemoveRelayerResponse>): MsgRemoveRelayerResponse {
    const message = createBaseMsgRemoveRelayerResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** * bridge functions ** */
  SetBridgeEnabled(request: MsgSetBridgeEnabled): Promise<MsgSetBridgeEnabledResponse>;
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  CreateConnection(request: MsgCreateConnection): Promise<MsgCreateConnectionResponse>;
  UpdateConnection(request: MsgUpdateConnection): Promise<MsgUpdateConnectionResponse>;
  RemoveConnection(request: MsgRemoveConnection): Promise<MsgRemoveConnectionResponse>;
  AddControllersForConnection(request: MsgAddControllersForConnection): Promise<MsgAddControllersForConnectionResponse>;
  UpdateControllersForConnection(
    request: MsgUpdateControllersForConnection,
  ): Promise<MsgUpdateControllersForConnectionResponse>;
  RemoveControllersForConnection(
    request: MsgRemoveControllersForConnection,
  ): Promise<MsgRemoveControllersForConnectionResponse>;
  RemoveNonceMapForConnection(request: MsgRemoveNonceMapForConnection): Promise<MsgRemoveNonceMapForConnectionResponse>;
  RegisterExternalToken(request: MsgRegisterExternalToken): Promise<MsgRegisterExternalTokenResponse>;
  DeregisterExternalToken(request: MsgDeregisterExternalToken): Promise<MsgDeregisterExternalTokenResponse>;
  DeployNativeToken(request: MsgDeployNativeToken): Promise<MsgDeployNativeTokenResponse>;
  RegisterDeployedToken(request: MsgRegisterDeployedToken): Promise<MsgRegisterDeployedTokenResponse>;
  WithdrawToken(request: MsgWithdrawToken): Promise<MsgWithdrawTokenResponse>;
  UpdateExternalToken(request: MsgUpdateExternalToken): Promise<MsgUpdateExternalTokenResponse>;
  DeleteExternalToken(request: MsgDeleteExternalToken): Promise<MsgDeleteExternalTokenResponse>;
  ExecuteFromCarbon(request: MsgExecuteFromCarbon): Promise<MsgExecuteFromCarbonResponse>;
  StartRelay(request: MsgStartRelay): Promise<MsgStartRelayResponse>;
  PruneExpiredPendingActions(request: MsgPruneExpiredPendingActions): Promise<MsgPruneExpiredPendingActionsResponse>;
  RevertPendingAction(request: MsgRevertPendingAction): Promise<MsgRevertPendingActionResponse>;
  ConfirmPendingAction(request: MsgConfirmPendingAction): Promise<MsgConfirmPendingActionResponse>;
  AddRelayer(request: MsgAddRelayer): Promise<MsgAddRelayerResponse>;
  RemoveRelayer(request: MsgRemoveRelayer): Promise<MsgRemoveRelayerResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.bridge.Msg";
    this.rpc = rpc;
    this.SetBridgeEnabled = this.SetBridgeEnabled.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
    this.CreateConnection = this.CreateConnection.bind(this);
    this.UpdateConnection = this.UpdateConnection.bind(this);
    this.RemoveConnection = this.RemoveConnection.bind(this);
    this.AddControllersForConnection = this.AddControllersForConnection.bind(this);
    this.UpdateControllersForConnection = this.UpdateControllersForConnection.bind(this);
    this.RemoveControllersForConnection = this.RemoveControllersForConnection.bind(this);
    this.RemoveNonceMapForConnection = this.RemoveNonceMapForConnection.bind(this);
    this.RegisterExternalToken = this.RegisterExternalToken.bind(this);
    this.DeregisterExternalToken = this.DeregisterExternalToken.bind(this);
    this.DeployNativeToken = this.DeployNativeToken.bind(this);
    this.RegisterDeployedToken = this.RegisterDeployedToken.bind(this);
    this.WithdrawToken = this.WithdrawToken.bind(this);
    this.UpdateExternalToken = this.UpdateExternalToken.bind(this);
    this.DeleteExternalToken = this.DeleteExternalToken.bind(this);
    this.ExecuteFromCarbon = this.ExecuteFromCarbon.bind(this);
    this.StartRelay = this.StartRelay.bind(this);
    this.PruneExpiredPendingActions = this.PruneExpiredPendingActions.bind(this);
    this.RevertPendingAction = this.RevertPendingAction.bind(this);
    this.ConfirmPendingAction = this.ConfirmPendingAction.bind(this);
    this.AddRelayer = this.AddRelayer.bind(this);
    this.RemoveRelayer = this.RemoveRelayer.bind(this);
  }
  SetBridgeEnabled(request: MsgSetBridgeEnabled): Promise<MsgSetBridgeEnabledResponse> {
    const data = MsgSetBridgeEnabled.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetBridgeEnabled", data);
    return promise.then((data) => MsgSetBridgeEnabledResponse.decode(_m0.Reader.create(data)));
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
  }

  CreateConnection(request: MsgCreateConnection): Promise<MsgCreateConnectionResponse> {
    const data = MsgCreateConnection.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateConnection", data);
    return promise.then((data) => MsgCreateConnectionResponse.decode(_m0.Reader.create(data)));
  }

  UpdateConnection(request: MsgUpdateConnection): Promise<MsgUpdateConnectionResponse> {
    const data = MsgUpdateConnection.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateConnection", data);
    return promise.then((data) => MsgUpdateConnectionResponse.decode(_m0.Reader.create(data)));
  }

  RemoveConnection(request: MsgRemoveConnection): Promise<MsgRemoveConnectionResponse> {
    const data = MsgRemoveConnection.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoveConnection", data);
    return promise.then((data) => MsgRemoveConnectionResponse.decode(_m0.Reader.create(data)));
  }

  AddControllersForConnection(
    request: MsgAddControllersForConnection,
  ): Promise<MsgAddControllersForConnectionResponse> {
    const data = MsgAddControllersForConnection.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddControllersForConnection", data);
    return promise.then((data) => MsgAddControllersForConnectionResponse.decode(_m0.Reader.create(data)));
  }

  UpdateControllersForConnection(
    request: MsgUpdateControllersForConnection,
  ): Promise<MsgUpdateControllersForConnectionResponse> {
    const data = MsgUpdateControllersForConnection.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateControllersForConnection", data);
    return promise.then((data) => MsgUpdateControllersForConnectionResponse.decode(_m0.Reader.create(data)));
  }

  RemoveControllersForConnection(
    request: MsgRemoveControllersForConnection,
  ): Promise<MsgRemoveControllersForConnectionResponse> {
    const data = MsgRemoveControllersForConnection.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoveControllersForConnection", data);
    return promise.then((data) => MsgRemoveControllersForConnectionResponse.decode(_m0.Reader.create(data)));
  }

  RemoveNonceMapForConnection(
    request: MsgRemoveNonceMapForConnection,
  ): Promise<MsgRemoveNonceMapForConnectionResponse> {
    const data = MsgRemoveNonceMapForConnection.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoveNonceMapForConnection", data);
    return promise.then((data) => MsgRemoveNonceMapForConnectionResponse.decode(_m0.Reader.create(data)));
  }

  RegisterExternalToken(request: MsgRegisterExternalToken): Promise<MsgRegisterExternalTokenResponse> {
    const data = MsgRegisterExternalToken.encode(request).finish();
    const promise = this.rpc.request(this.service, "RegisterExternalToken", data);
    return promise.then((data) => MsgRegisterExternalTokenResponse.decode(_m0.Reader.create(data)));
  }

  DeregisterExternalToken(request: MsgDeregisterExternalToken): Promise<MsgDeregisterExternalTokenResponse> {
    const data = MsgDeregisterExternalToken.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeregisterExternalToken", data);
    return promise.then((data) => MsgDeregisterExternalTokenResponse.decode(_m0.Reader.create(data)));
  }

  DeployNativeToken(request: MsgDeployNativeToken): Promise<MsgDeployNativeTokenResponse> {
    const data = MsgDeployNativeToken.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeployNativeToken", data);
    return promise.then((data) => MsgDeployNativeTokenResponse.decode(_m0.Reader.create(data)));
  }

  RegisterDeployedToken(request: MsgRegisterDeployedToken): Promise<MsgRegisterDeployedTokenResponse> {
    const data = MsgRegisterDeployedToken.encode(request).finish();
    const promise = this.rpc.request(this.service, "RegisterDeployedToken", data);
    return promise.then((data) => MsgRegisterDeployedTokenResponse.decode(_m0.Reader.create(data)));
  }

  WithdrawToken(request: MsgWithdrawToken): Promise<MsgWithdrawTokenResponse> {
    const data = MsgWithdrawToken.encode(request).finish();
    const promise = this.rpc.request(this.service, "WithdrawToken", data);
    return promise.then((data) => MsgWithdrawTokenResponse.decode(_m0.Reader.create(data)));
  }

  UpdateExternalToken(request: MsgUpdateExternalToken): Promise<MsgUpdateExternalTokenResponse> {
    const data = MsgUpdateExternalToken.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateExternalToken", data);
    return promise.then((data) => MsgUpdateExternalTokenResponse.decode(_m0.Reader.create(data)));
  }

  DeleteExternalToken(request: MsgDeleteExternalToken): Promise<MsgDeleteExternalTokenResponse> {
    const data = MsgDeleteExternalToken.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteExternalToken", data);
    return promise.then((data) => MsgDeleteExternalTokenResponse.decode(_m0.Reader.create(data)));
  }

  ExecuteFromCarbon(request: MsgExecuteFromCarbon): Promise<MsgExecuteFromCarbonResponse> {
    const data = MsgExecuteFromCarbon.encode(request).finish();
    const promise = this.rpc.request(this.service, "ExecuteFromCarbon", data);
    return promise.then((data) => MsgExecuteFromCarbonResponse.decode(_m0.Reader.create(data)));
  }

  StartRelay(request: MsgStartRelay): Promise<MsgStartRelayResponse> {
    const data = MsgStartRelay.encode(request).finish();
    const promise = this.rpc.request(this.service, "StartRelay", data);
    return promise.then((data) => MsgStartRelayResponse.decode(_m0.Reader.create(data)));
  }

  PruneExpiredPendingActions(request: MsgPruneExpiredPendingActions): Promise<MsgPruneExpiredPendingActionsResponse> {
    const data = MsgPruneExpiredPendingActions.encode(request).finish();
    const promise = this.rpc.request(this.service, "PruneExpiredPendingActions", data);
    return promise.then((data) => MsgPruneExpiredPendingActionsResponse.decode(_m0.Reader.create(data)));
  }

  RevertPendingAction(request: MsgRevertPendingAction): Promise<MsgRevertPendingActionResponse> {
    const data = MsgRevertPendingAction.encode(request).finish();
    const promise = this.rpc.request(this.service, "RevertPendingAction", data);
    return promise.then((data) => MsgRevertPendingActionResponse.decode(_m0.Reader.create(data)));
  }

  ConfirmPendingAction(request: MsgConfirmPendingAction): Promise<MsgConfirmPendingActionResponse> {
    const data = MsgConfirmPendingAction.encode(request).finish();
    const promise = this.rpc.request(this.service, "ConfirmPendingAction", data);
    return promise.then((data) => MsgConfirmPendingActionResponse.decode(_m0.Reader.create(data)));
  }

  AddRelayer(request: MsgAddRelayer): Promise<MsgAddRelayerResponse> {
    const data = MsgAddRelayer.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddRelayer", data);
    return promise.then((data) => MsgAddRelayerResponse.decode(_m0.Reader.create(data)));
  }

  RemoveRelayer(request: MsgRemoveRelayer): Promise<MsgRemoveRelayerResponse> {
    const data = MsgRemoveRelayer.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoveRelayer", data);
    return promise.then((data) => MsgRemoveRelayerResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
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
