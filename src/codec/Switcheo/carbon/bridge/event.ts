/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Connection, ExternalTokenMapping, RelayDetails } from "./bridge";

export const protobufPackage = "Switcheo.carbon.bridge";

export interface NewConnectionEvent {
  connection?: Connection;
}

export interface UpdateConnectionEvent {
  connectionId: string;
  chainDisplayName: string;
  isEnabled: boolean;
}

export interface RemoveConnectionEvent {
  connectionId: string;
}

export interface NewExternalTokenMappingEvent {
  externalTokenMapping?: ExternalTokenMapping;
}

export interface RegisterExternalTokenEvent {
  externalTokenMapping?: ExternalTokenMapping;
  carbonTokenName: string;
}

export interface RegisterNativeTokenEvent {
  externalTokenMapping?: ExternalTokenMapping;
}

export interface DeregisterTokenEvent {
  externalTokenMapping?: ExternalTokenMapping;
}

export interface ExecuteFromCarbonEvent {
  connectionId: string;
  sender: string;
  executableAddress: string;
  executionData: Uint8Array;
  token?: Coin;
}

export interface DepositTokenEvent {
  connectionId: string;
  sender: string;
  receiver: string;
  assetAddress: string;
  token?: Coin;
}

export interface WithdrawDeductedEvent {
  sender: string;
  receiver: string;
  externalTokenMapping?: ExternalTokenMapping;
  token?: Coin;
  relayDetails?: RelayDetails;
}

export interface WithdrawTokenConfirmedEvent {
  connectionId: string;
  sender: string;
  receiver: string;
  coin?: Coin;
  feeReceiverAddress: string;
  relayFee?: Coin;
  nonce: Long;
}

export interface ExecutionOnCarbonErrorEvent {
  nonce: Long;
  payloadType: string;
  dataEncoding: string;
  data: Uint8Array;
  connectionId: string;
}

/** Event signifying that bridge has sent an outbound message */
export interface BridgeSentEvent {
  bridgeId: Long;
  chainId: string;
  gatewayAddress: string;
  nonce: Long;
}

/**
 * Event signifying that the sent outbound message was received by the
 * destination and changes are to be commited
 */
export interface BridgeAcknowledgedEvent {
  bridgeId: Long;
  chainId: string;
  gatewayAddress: string;
  nonce: Long;
}

/**
 * Event signifying that the sent outbound message failed and changes are to be
 * reverted
 */
export interface BridgeRevertedEvent {
  bridgeId: Long;
  chainId: string;
  gatewayAddress: string;
  nonce: Long;
}

/** Event signifying that bridge has received an inbound message */
export interface BridgeReceivedEvent {
  bridgeId: Long;
  chainId: string;
  gatewayAddress: string;
  nonce: Long;
}

/** Event signifying that a pending action has been registered */
export interface NewPendingActionEvent {
  nonce: Long;
  pendingActionType: Long;
  connectionId: string;
  relayDetails?: RelayDetails;
}

/** Event signifying updates to a pending action */
export interface UpdatePendingActionEvent {
  nonce: Long;
  pendingActionType: Long;
  connectionId: string;
  relayDetails?: RelayDetails;
}

/** Event signifying expiry of a pending action */
export interface ExpiredPendingActionEvent {
  nonce: Long;
  pendingActionType: Long;
  connectionId: string;
  relayDetails?: RelayDetails;
}

/** Event signifying a Axelar CallContract call */
export interface AxelarCallContractEvent {
  payload: Uint8Array;
}

/** Event signifying a Axelar CallContract call from Carbon's Bridge Module */
export interface ModuleAxelarCallContractEvent {
  nonce: Long;
  payload: Uint8Array;
}

/** Event signifying a General Message has been received from Axelar */
export interface AxelarGeneralMessageReceivedEvent {
  connectionId: string;
  payload: Uint8Array;
}

function createBaseNewConnectionEvent(): NewConnectionEvent {
  return { connection: undefined };
}

export const NewConnectionEvent = {
  encode(message: NewConnectionEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connection !== undefined) {
      Connection.encode(message.connection, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewConnectionEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewConnectionEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connection = Connection.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NewConnectionEvent {
    return { connection: isSet(object.connection) ? Connection.fromJSON(object.connection) : undefined };
  },

  toJSON(message: NewConnectionEvent): unknown {
    const obj: any = {};
    message.connection !== undefined &&
      (obj.connection = message.connection ? Connection.toJSON(message.connection) : undefined);
    return obj;
  },

  create(base?: DeepPartial<NewConnectionEvent>): NewConnectionEvent {
    return NewConnectionEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<NewConnectionEvent>): NewConnectionEvent {
    const message = createBaseNewConnectionEvent();
    message.connection = (object.connection !== undefined && object.connection !== null)
      ? Connection.fromPartial(object.connection)
      : undefined;
    return message;
  },
};

function createBaseUpdateConnectionEvent(): UpdateConnectionEvent {
  return { connectionId: "", chainDisplayName: "", isEnabled: false };
}

export const UpdateConnectionEvent = {
  encode(message: UpdateConnectionEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.chainDisplayName !== "") {
      writer.uint32(18).string(message.chainDisplayName);
    }
    if (message.isEnabled === true) {
      writer.uint32(24).bool(message.isEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateConnectionEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateConnectionEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connectionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.chainDisplayName = reader.string();
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

  fromJSON(object: any): UpdateConnectionEvent {
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      chainDisplayName: isSet(object.chainDisplayName) ? String(object.chainDisplayName) : "",
      isEnabled: isSet(object.isEnabled) ? Boolean(object.isEnabled) : false,
    };
  },

  toJSON(message: UpdateConnectionEvent): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.chainDisplayName !== undefined && (obj.chainDisplayName = message.chainDisplayName);
    message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
    return obj;
  },

  create(base?: DeepPartial<UpdateConnectionEvent>): UpdateConnectionEvent {
    return UpdateConnectionEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateConnectionEvent>): UpdateConnectionEvent {
    const message = createBaseUpdateConnectionEvent();
    message.connectionId = object.connectionId ?? "";
    message.chainDisplayName = object.chainDisplayName ?? "";
    message.isEnabled = object.isEnabled ?? false;
    return message;
  },
};

function createBaseRemoveConnectionEvent(): RemoveConnectionEvent {
  return { connectionId: "" };
}

export const RemoveConnectionEvent = {
  encode(message: RemoveConnectionEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveConnectionEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveConnectionEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): RemoveConnectionEvent {
    return { connectionId: isSet(object.connectionId) ? String(object.connectionId) : "" };
  },

  toJSON(message: RemoveConnectionEvent): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    return obj;
  },

  create(base?: DeepPartial<RemoveConnectionEvent>): RemoveConnectionEvent {
    return RemoveConnectionEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RemoveConnectionEvent>): RemoveConnectionEvent {
    const message = createBaseRemoveConnectionEvent();
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

function createBaseNewExternalTokenMappingEvent(): NewExternalTokenMappingEvent {
  return { externalTokenMapping: undefined };
}

export const NewExternalTokenMappingEvent = {
  encode(message: NewExternalTokenMappingEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.externalTokenMapping !== undefined) {
      ExternalTokenMapping.encode(message.externalTokenMapping, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewExternalTokenMappingEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewExternalTokenMappingEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.externalTokenMapping = ExternalTokenMapping.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NewExternalTokenMappingEvent {
    return {
      externalTokenMapping: isSet(object.externalTokenMapping)
        ? ExternalTokenMapping.fromJSON(object.externalTokenMapping)
        : undefined,
    };
  },

  toJSON(message: NewExternalTokenMappingEvent): unknown {
    const obj: any = {};
    message.externalTokenMapping !== undefined && (obj.externalTokenMapping = message.externalTokenMapping
      ? ExternalTokenMapping.toJSON(message.externalTokenMapping)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<NewExternalTokenMappingEvent>): NewExternalTokenMappingEvent {
    return NewExternalTokenMappingEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<NewExternalTokenMappingEvent>): NewExternalTokenMappingEvent {
    const message = createBaseNewExternalTokenMappingEvent();
    message.externalTokenMapping = (object.externalTokenMapping !== undefined && object.externalTokenMapping !== null)
      ? ExternalTokenMapping.fromPartial(object.externalTokenMapping)
      : undefined;
    return message;
  },
};

function createBaseRegisterExternalTokenEvent(): RegisterExternalTokenEvent {
  return { externalTokenMapping: undefined, carbonTokenName: "" };
}

export const RegisterExternalTokenEvent = {
  encode(message: RegisterExternalTokenEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.externalTokenMapping !== undefined) {
      ExternalTokenMapping.encode(message.externalTokenMapping, writer.uint32(10).fork()).ldelim();
    }
    if (message.carbonTokenName !== "") {
      writer.uint32(26).string(message.carbonTokenName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterExternalTokenEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterExternalTokenEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.externalTokenMapping = ExternalTokenMapping.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.carbonTokenName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegisterExternalTokenEvent {
    return {
      externalTokenMapping: isSet(object.externalTokenMapping)
        ? ExternalTokenMapping.fromJSON(object.externalTokenMapping)
        : undefined,
      carbonTokenName: isSet(object.carbonTokenName) ? String(object.carbonTokenName) : "",
    };
  },

  toJSON(message: RegisterExternalTokenEvent): unknown {
    const obj: any = {};
    message.externalTokenMapping !== undefined && (obj.externalTokenMapping = message.externalTokenMapping
      ? ExternalTokenMapping.toJSON(message.externalTokenMapping)
      : undefined);
    message.carbonTokenName !== undefined && (obj.carbonTokenName = message.carbonTokenName);
    return obj;
  },

  create(base?: DeepPartial<RegisterExternalTokenEvent>): RegisterExternalTokenEvent {
    return RegisterExternalTokenEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RegisterExternalTokenEvent>): RegisterExternalTokenEvent {
    const message = createBaseRegisterExternalTokenEvent();
    message.externalTokenMapping = (object.externalTokenMapping !== undefined && object.externalTokenMapping !== null)
      ? ExternalTokenMapping.fromPartial(object.externalTokenMapping)
      : undefined;
    message.carbonTokenName = object.carbonTokenName ?? "";
    return message;
  },
};

function createBaseRegisterNativeTokenEvent(): RegisterNativeTokenEvent {
  return { externalTokenMapping: undefined };
}

export const RegisterNativeTokenEvent = {
  encode(message: RegisterNativeTokenEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.externalTokenMapping !== undefined) {
      ExternalTokenMapping.encode(message.externalTokenMapping, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterNativeTokenEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterNativeTokenEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.externalTokenMapping = ExternalTokenMapping.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegisterNativeTokenEvent {
    return {
      externalTokenMapping: isSet(object.externalTokenMapping)
        ? ExternalTokenMapping.fromJSON(object.externalTokenMapping)
        : undefined,
    };
  },

  toJSON(message: RegisterNativeTokenEvent): unknown {
    const obj: any = {};
    message.externalTokenMapping !== undefined && (obj.externalTokenMapping = message.externalTokenMapping
      ? ExternalTokenMapping.toJSON(message.externalTokenMapping)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<RegisterNativeTokenEvent>): RegisterNativeTokenEvent {
    return RegisterNativeTokenEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RegisterNativeTokenEvent>): RegisterNativeTokenEvent {
    const message = createBaseRegisterNativeTokenEvent();
    message.externalTokenMapping = (object.externalTokenMapping !== undefined && object.externalTokenMapping !== null)
      ? ExternalTokenMapping.fromPartial(object.externalTokenMapping)
      : undefined;
    return message;
  },
};

function createBaseDeregisterTokenEvent(): DeregisterTokenEvent {
  return { externalTokenMapping: undefined };
}

export const DeregisterTokenEvent = {
  encode(message: DeregisterTokenEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.externalTokenMapping !== undefined) {
      ExternalTokenMapping.encode(message.externalTokenMapping, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeregisterTokenEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeregisterTokenEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.externalTokenMapping = ExternalTokenMapping.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeregisterTokenEvent {
    return {
      externalTokenMapping: isSet(object.externalTokenMapping)
        ? ExternalTokenMapping.fromJSON(object.externalTokenMapping)
        : undefined,
    };
  },

  toJSON(message: DeregisterTokenEvent): unknown {
    const obj: any = {};
    message.externalTokenMapping !== undefined && (obj.externalTokenMapping = message.externalTokenMapping
      ? ExternalTokenMapping.toJSON(message.externalTokenMapping)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<DeregisterTokenEvent>): DeregisterTokenEvent {
    return DeregisterTokenEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DeregisterTokenEvent>): DeregisterTokenEvent {
    const message = createBaseDeregisterTokenEvent();
    message.externalTokenMapping = (object.externalTokenMapping !== undefined && object.externalTokenMapping !== null)
      ? ExternalTokenMapping.fromPartial(object.externalTokenMapping)
      : undefined;
    return message;
  },
};

function createBaseExecuteFromCarbonEvent(): ExecuteFromCarbonEvent {
  return { connectionId: "", sender: "", executableAddress: "", executionData: new Uint8Array(), token: undefined };
}

export const ExecuteFromCarbonEvent = {
  encode(message: ExecuteFromCarbonEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.executableAddress !== "") {
      writer.uint32(26).string(message.executableAddress);
    }
    if (message.executionData.length !== 0) {
      writer.uint32(34).bytes(message.executionData);
    }
    if (message.token !== undefined) {
      Coin.encode(message.token, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecuteFromCarbonEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecuteFromCarbonEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connectionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.executableAddress = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.executionData = reader.bytes();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.token = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExecuteFromCarbonEvent {
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      executableAddress: isSet(object.executableAddress) ? String(object.executableAddress) : "",
      executionData: isSet(object.executionData) ? bytesFromBase64(object.executionData) : new Uint8Array(),
      token: isSet(object.token) ? Coin.fromJSON(object.token) : undefined,
    };
  },

  toJSON(message: ExecuteFromCarbonEvent): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.sender !== undefined && (obj.sender = message.sender);
    message.executableAddress !== undefined && (obj.executableAddress = message.executableAddress);
    message.executionData !== undefined &&
      (obj.executionData = base64FromBytes(
        message.executionData !== undefined ? message.executionData : new Uint8Array(),
      ));
    message.token !== undefined && (obj.token = message.token ? Coin.toJSON(message.token) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ExecuteFromCarbonEvent>): ExecuteFromCarbonEvent {
    return ExecuteFromCarbonEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ExecuteFromCarbonEvent>): ExecuteFromCarbonEvent {
    const message = createBaseExecuteFromCarbonEvent();
    message.connectionId = object.connectionId ?? "";
    message.sender = object.sender ?? "";
    message.executableAddress = object.executableAddress ?? "";
    message.executionData = object.executionData ?? new Uint8Array();
    message.token = (object.token !== undefined && object.token !== null) ? Coin.fromPartial(object.token) : undefined;
    return message;
  },
};

function createBaseDepositTokenEvent(): DepositTokenEvent {
  return { connectionId: "", sender: "", receiver: "", assetAddress: "", token: undefined };
}

export const DepositTokenEvent = {
  encode(message: DepositTokenEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    if (message.assetAddress !== "") {
      writer.uint32(34).string(message.assetAddress);
    }
    if (message.token !== undefined) {
      Coin.encode(message.token, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositTokenEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositTokenEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connectionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sender = reader.string();
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

          message.assetAddress = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.token = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DepositTokenEvent {
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      assetAddress: isSet(object.assetAddress) ? String(object.assetAddress) : "",
      token: isSet(object.token) ? Coin.fromJSON(object.token) : undefined,
    };
  },

  toJSON(message: DepositTokenEvent): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.assetAddress !== undefined && (obj.assetAddress = message.assetAddress);
    message.token !== undefined && (obj.token = message.token ? Coin.toJSON(message.token) : undefined);
    return obj;
  },

  create(base?: DeepPartial<DepositTokenEvent>): DepositTokenEvent {
    return DepositTokenEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DepositTokenEvent>): DepositTokenEvent {
    const message = createBaseDepositTokenEvent();
    message.connectionId = object.connectionId ?? "";
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.assetAddress = object.assetAddress ?? "";
    message.token = (object.token !== undefined && object.token !== null) ? Coin.fromPartial(object.token) : undefined;
    return message;
  },
};

function createBaseWithdrawDeductedEvent(): WithdrawDeductedEvent {
  return { sender: "", receiver: "", externalTokenMapping: undefined, token: undefined, relayDetails: undefined };
}

export const WithdrawDeductedEvent = {
  encode(message: WithdrawDeductedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.externalTokenMapping !== undefined) {
      ExternalTokenMapping.encode(message.externalTokenMapping, writer.uint32(26).fork()).ldelim();
    }
    if (message.token !== undefined) {
      Coin.encode(message.token, writer.uint32(34).fork()).ldelim();
    }
    if (message.relayDetails !== undefined) {
      RelayDetails.encode(message.relayDetails, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawDeductedEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawDeductedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.receiver = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.externalTokenMapping = ExternalTokenMapping.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.token = Coin.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.relayDetails = RelayDetails.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WithdrawDeductedEvent {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      externalTokenMapping: isSet(object.externalTokenMapping)
        ? ExternalTokenMapping.fromJSON(object.externalTokenMapping)
        : undefined,
      token: isSet(object.token) ? Coin.fromJSON(object.token) : undefined,
      relayDetails: isSet(object.relayDetails) ? RelayDetails.fromJSON(object.relayDetails) : undefined,
    };
  },

  toJSON(message: WithdrawDeductedEvent): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.externalTokenMapping !== undefined && (obj.externalTokenMapping = message.externalTokenMapping
      ? ExternalTokenMapping.toJSON(message.externalTokenMapping)
      : undefined);
    message.token !== undefined && (obj.token = message.token ? Coin.toJSON(message.token) : undefined);
    message.relayDetails !== undefined &&
      (obj.relayDetails = message.relayDetails ? RelayDetails.toJSON(message.relayDetails) : undefined);
    return obj;
  },

  create(base?: DeepPartial<WithdrawDeductedEvent>): WithdrawDeductedEvent {
    return WithdrawDeductedEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<WithdrawDeductedEvent>): WithdrawDeductedEvent {
    const message = createBaseWithdrawDeductedEvent();
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.externalTokenMapping = (object.externalTokenMapping !== undefined && object.externalTokenMapping !== null)
      ? ExternalTokenMapping.fromPartial(object.externalTokenMapping)
      : undefined;
    message.token = (object.token !== undefined && object.token !== null) ? Coin.fromPartial(object.token) : undefined;
    message.relayDetails = (object.relayDetails !== undefined && object.relayDetails !== null)
      ? RelayDetails.fromPartial(object.relayDetails)
      : undefined;
    return message;
  },
};

function createBaseWithdrawTokenConfirmedEvent(): WithdrawTokenConfirmedEvent {
  return {
    connectionId: "",
    sender: "",
    receiver: "",
    coin: undefined,
    feeReceiverAddress: "",
    relayFee: undefined,
    nonce: Long.UZERO,
  };
}

export const WithdrawTokenConfirmedEvent = {
  encode(message: WithdrawTokenConfirmedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(34).fork()).ldelim();
    }
    if (message.feeReceiverAddress !== "") {
      writer.uint32(42).string(message.feeReceiverAddress);
    }
    if (message.relayFee !== undefined) {
      Coin.encode(message.relayFee, writer.uint32(50).fork()).ldelim();
    }
    if (!message.nonce.isZero()) {
      writer.uint32(56).uint64(message.nonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawTokenConfirmedEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawTokenConfirmedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connectionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sender = reader.string();
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

          message.coin = Coin.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.feeReceiverAddress = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.relayFee = Coin.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 56) {
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

  fromJSON(object: any): WithdrawTokenConfirmedEvent {
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
      feeReceiverAddress: isSet(object.feeReceiverAddress) ? String(object.feeReceiverAddress) : "",
      relayFee: isSet(object.relayFee) ? Coin.fromJSON(object.relayFee) : undefined,
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
    };
  },

  toJSON(message: WithdrawTokenConfirmedEvent): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.feeReceiverAddress !== undefined && (obj.feeReceiverAddress = message.feeReceiverAddress);
    message.relayFee !== undefined && (obj.relayFee = message.relayFee ? Coin.toJSON(message.relayFee) : undefined);
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<WithdrawTokenConfirmedEvent>): WithdrawTokenConfirmedEvent {
    return WithdrawTokenConfirmedEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<WithdrawTokenConfirmedEvent>): WithdrawTokenConfirmedEvent {
    const message = createBaseWithdrawTokenConfirmedEvent();
    message.connectionId = object.connectionId ?? "";
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.coin = (object.coin !== undefined && object.coin !== null) ? Coin.fromPartial(object.coin) : undefined;
    message.feeReceiverAddress = object.feeReceiverAddress ?? "";
    message.relayFee = (object.relayFee !== undefined && object.relayFee !== null)
      ? Coin.fromPartial(object.relayFee)
      : undefined;
    message.nonce = (object.nonce !== undefined && object.nonce !== null) ? Long.fromValue(object.nonce) : Long.UZERO;
    return message;
  },
};

function createBaseExecutionOnCarbonErrorEvent(): ExecutionOnCarbonErrorEvent {
  return { nonce: Long.UZERO, payloadType: "", dataEncoding: "", data: new Uint8Array(), connectionId: "" };
}

export const ExecutionOnCarbonErrorEvent = {
  encode(message: ExecutionOnCarbonErrorEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.payloadType !== "") {
      writer.uint32(18).string(message.payloadType);
    }
    if (message.dataEncoding !== "") {
      writer.uint32(26).string(message.dataEncoding);
    }
    if (message.data.length !== 0) {
      writer.uint32(34).bytes(message.data);
    }
    if (message.connectionId !== "") {
      writer.uint32(42).string(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecutionOnCarbonErrorEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecutionOnCarbonErrorEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.nonce = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.payloadType = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.dataEncoding = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.data = reader.bytes();
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): ExecutionOnCarbonErrorEvent {
    return {
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      payloadType: isSet(object.payloadType) ? String(object.payloadType) : "",
      dataEncoding: isSet(object.dataEncoding) ? String(object.dataEncoding) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
    };
  },

  toJSON(message: ExecutionOnCarbonErrorEvent): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.payloadType !== undefined && (obj.payloadType = message.payloadType);
    message.dataEncoding !== undefined && (obj.dataEncoding = message.dataEncoding);
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    return obj;
  },

  create(base?: DeepPartial<ExecutionOnCarbonErrorEvent>): ExecutionOnCarbonErrorEvent {
    return ExecutionOnCarbonErrorEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ExecutionOnCarbonErrorEvent>): ExecutionOnCarbonErrorEvent {
    const message = createBaseExecutionOnCarbonErrorEvent();
    message.nonce = (object.nonce !== undefined && object.nonce !== null) ? Long.fromValue(object.nonce) : Long.UZERO;
    message.payloadType = object.payloadType ?? "";
    message.dataEncoding = object.dataEncoding ?? "";
    message.data = object.data ?? new Uint8Array();
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

function createBaseBridgeSentEvent(): BridgeSentEvent {
  return { bridgeId: Long.UZERO, chainId: "", gatewayAddress: "", nonce: Long.UZERO };
}

export const BridgeSentEvent = {
  encode(message: BridgeSentEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.bridgeId.isZero()) {
      writer.uint32(8).uint64(message.bridgeId);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.gatewayAddress !== "") {
      writer.uint32(26).string(message.gatewayAddress);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(32).uint64(message.nonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BridgeSentEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBridgeSentEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bridgeId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.chainId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.gatewayAddress = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
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

  fromJSON(object: any): BridgeSentEvent {
    return {
      bridgeId: isSet(object.bridgeId) ? Long.fromValue(object.bridgeId) : Long.UZERO,
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      gatewayAddress: isSet(object.gatewayAddress) ? String(object.gatewayAddress) : "",
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
    };
  },

  toJSON(message: BridgeSentEvent): unknown {
    const obj: any = {};
    message.bridgeId !== undefined && (obj.bridgeId = (message.bridgeId || Long.UZERO).toString());
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.gatewayAddress !== undefined && (obj.gatewayAddress = message.gatewayAddress);
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<BridgeSentEvent>): BridgeSentEvent {
    return BridgeSentEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<BridgeSentEvent>): BridgeSentEvent {
    const message = createBaseBridgeSentEvent();
    message.bridgeId = (object.bridgeId !== undefined && object.bridgeId !== null)
      ? Long.fromValue(object.bridgeId)
      : Long.UZERO;
    message.chainId = object.chainId ?? "";
    message.gatewayAddress = object.gatewayAddress ?? "";
    message.nonce = (object.nonce !== undefined && object.nonce !== null) ? Long.fromValue(object.nonce) : Long.UZERO;
    return message;
  },
};

function createBaseBridgeAcknowledgedEvent(): BridgeAcknowledgedEvent {
  return { bridgeId: Long.UZERO, chainId: "", gatewayAddress: "", nonce: Long.UZERO };
}

export const BridgeAcknowledgedEvent = {
  encode(message: BridgeAcknowledgedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.bridgeId.isZero()) {
      writer.uint32(8).uint64(message.bridgeId);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.gatewayAddress !== "") {
      writer.uint32(26).string(message.gatewayAddress);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(32).uint64(message.nonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BridgeAcknowledgedEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBridgeAcknowledgedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bridgeId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.chainId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.gatewayAddress = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
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

  fromJSON(object: any): BridgeAcknowledgedEvent {
    return {
      bridgeId: isSet(object.bridgeId) ? Long.fromValue(object.bridgeId) : Long.UZERO,
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      gatewayAddress: isSet(object.gatewayAddress) ? String(object.gatewayAddress) : "",
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
    };
  },

  toJSON(message: BridgeAcknowledgedEvent): unknown {
    const obj: any = {};
    message.bridgeId !== undefined && (obj.bridgeId = (message.bridgeId || Long.UZERO).toString());
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.gatewayAddress !== undefined && (obj.gatewayAddress = message.gatewayAddress);
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<BridgeAcknowledgedEvent>): BridgeAcknowledgedEvent {
    return BridgeAcknowledgedEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<BridgeAcknowledgedEvent>): BridgeAcknowledgedEvent {
    const message = createBaseBridgeAcknowledgedEvent();
    message.bridgeId = (object.bridgeId !== undefined && object.bridgeId !== null)
      ? Long.fromValue(object.bridgeId)
      : Long.UZERO;
    message.chainId = object.chainId ?? "";
    message.gatewayAddress = object.gatewayAddress ?? "";
    message.nonce = (object.nonce !== undefined && object.nonce !== null) ? Long.fromValue(object.nonce) : Long.UZERO;
    return message;
  },
};

function createBaseBridgeRevertedEvent(): BridgeRevertedEvent {
  return { bridgeId: Long.UZERO, chainId: "", gatewayAddress: "", nonce: Long.UZERO };
}

export const BridgeRevertedEvent = {
  encode(message: BridgeRevertedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.bridgeId.isZero()) {
      writer.uint32(8).uint64(message.bridgeId);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.gatewayAddress !== "") {
      writer.uint32(26).string(message.gatewayAddress);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(32).uint64(message.nonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BridgeRevertedEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBridgeRevertedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bridgeId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.chainId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.gatewayAddress = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
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

  fromJSON(object: any): BridgeRevertedEvent {
    return {
      bridgeId: isSet(object.bridgeId) ? Long.fromValue(object.bridgeId) : Long.UZERO,
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      gatewayAddress: isSet(object.gatewayAddress) ? String(object.gatewayAddress) : "",
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
    };
  },

  toJSON(message: BridgeRevertedEvent): unknown {
    const obj: any = {};
    message.bridgeId !== undefined && (obj.bridgeId = (message.bridgeId || Long.UZERO).toString());
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.gatewayAddress !== undefined && (obj.gatewayAddress = message.gatewayAddress);
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<BridgeRevertedEvent>): BridgeRevertedEvent {
    return BridgeRevertedEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<BridgeRevertedEvent>): BridgeRevertedEvent {
    const message = createBaseBridgeRevertedEvent();
    message.bridgeId = (object.bridgeId !== undefined && object.bridgeId !== null)
      ? Long.fromValue(object.bridgeId)
      : Long.UZERO;
    message.chainId = object.chainId ?? "";
    message.gatewayAddress = object.gatewayAddress ?? "";
    message.nonce = (object.nonce !== undefined && object.nonce !== null) ? Long.fromValue(object.nonce) : Long.UZERO;
    return message;
  },
};

function createBaseBridgeReceivedEvent(): BridgeReceivedEvent {
  return { bridgeId: Long.UZERO, chainId: "", gatewayAddress: "", nonce: Long.UZERO };
}

export const BridgeReceivedEvent = {
  encode(message: BridgeReceivedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.bridgeId.isZero()) {
      writer.uint32(8).uint64(message.bridgeId);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.gatewayAddress !== "") {
      writer.uint32(26).string(message.gatewayAddress);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(32).uint64(message.nonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BridgeReceivedEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBridgeReceivedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bridgeId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.chainId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.gatewayAddress = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
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

  fromJSON(object: any): BridgeReceivedEvent {
    return {
      bridgeId: isSet(object.bridgeId) ? Long.fromValue(object.bridgeId) : Long.UZERO,
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      gatewayAddress: isSet(object.gatewayAddress) ? String(object.gatewayAddress) : "",
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
    };
  },

  toJSON(message: BridgeReceivedEvent): unknown {
    const obj: any = {};
    message.bridgeId !== undefined && (obj.bridgeId = (message.bridgeId || Long.UZERO).toString());
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.gatewayAddress !== undefined && (obj.gatewayAddress = message.gatewayAddress);
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<BridgeReceivedEvent>): BridgeReceivedEvent {
    return BridgeReceivedEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<BridgeReceivedEvent>): BridgeReceivedEvent {
    const message = createBaseBridgeReceivedEvent();
    message.bridgeId = (object.bridgeId !== undefined && object.bridgeId !== null)
      ? Long.fromValue(object.bridgeId)
      : Long.UZERO;
    message.chainId = object.chainId ?? "";
    message.gatewayAddress = object.gatewayAddress ?? "";
    message.nonce = (object.nonce !== undefined && object.nonce !== null) ? Long.fromValue(object.nonce) : Long.UZERO;
    return message;
  },
};

function createBaseNewPendingActionEvent(): NewPendingActionEvent {
  return { nonce: Long.UZERO, pendingActionType: Long.UZERO, connectionId: "", relayDetails: undefined };
}

export const NewPendingActionEvent = {
  encode(message: NewPendingActionEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (!message.pendingActionType.isZero()) {
      writer.uint32(16).uint64(message.pendingActionType);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    if (message.relayDetails !== undefined) {
      RelayDetails.encode(message.relayDetails, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewPendingActionEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewPendingActionEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.nonce = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.pendingActionType = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.connectionId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.relayDetails = RelayDetails.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NewPendingActionEvent {
    return {
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      pendingActionType: isSet(object.pendingActionType) ? Long.fromValue(object.pendingActionType) : Long.UZERO,
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      relayDetails: isSet(object.relayDetails) ? RelayDetails.fromJSON(object.relayDetails) : undefined,
    };
  },

  toJSON(message: NewPendingActionEvent): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.pendingActionType !== undefined &&
      (obj.pendingActionType = (message.pendingActionType || Long.UZERO).toString());
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.relayDetails !== undefined &&
      (obj.relayDetails = message.relayDetails ? RelayDetails.toJSON(message.relayDetails) : undefined);
    return obj;
  },

  create(base?: DeepPartial<NewPendingActionEvent>): NewPendingActionEvent {
    return NewPendingActionEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<NewPendingActionEvent>): NewPendingActionEvent {
    const message = createBaseNewPendingActionEvent();
    message.nonce = (object.nonce !== undefined && object.nonce !== null) ? Long.fromValue(object.nonce) : Long.UZERO;
    message.pendingActionType = (object.pendingActionType !== undefined && object.pendingActionType !== null)
      ? Long.fromValue(object.pendingActionType)
      : Long.UZERO;
    message.connectionId = object.connectionId ?? "";
    message.relayDetails = (object.relayDetails !== undefined && object.relayDetails !== null)
      ? RelayDetails.fromPartial(object.relayDetails)
      : undefined;
    return message;
  },
};

function createBaseUpdatePendingActionEvent(): UpdatePendingActionEvent {
  return { nonce: Long.UZERO, pendingActionType: Long.UZERO, connectionId: "", relayDetails: undefined };
}

export const UpdatePendingActionEvent = {
  encode(message: UpdatePendingActionEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (!message.pendingActionType.isZero()) {
      writer.uint32(16).uint64(message.pendingActionType);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    if (message.relayDetails !== undefined) {
      RelayDetails.encode(message.relayDetails, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePendingActionEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePendingActionEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.nonce = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.pendingActionType = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.connectionId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.relayDetails = RelayDetails.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdatePendingActionEvent {
    return {
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      pendingActionType: isSet(object.pendingActionType) ? Long.fromValue(object.pendingActionType) : Long.UZERO,
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      relayDetails: isSet(object.relayDetails) ? RelayDetails.fromJSON(object.relayDetails) : undefined,
    };
  },

  toJSON(message: UpdatePendingActionEvent): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.pendingActionType !== undefined &&
      (obj.pendingActionType = (message.pendingActionType || Long.UZERO).toString());
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.relayDetails !== undefined &&
      (obj.relayDetails = message.relayDetails ? RelayDetails.toJSON(message.relayDetails) : undefined);
    return obj;
  },

  create(base?: DeepPartial<UpdatePendingActionEvent>): UpdatePendingActionEvent {
    return UpdatePendingActionEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdatePendingActionEvent>): UpdatePendingActionEvent {
    const message = createBaseUpdatePendingActionEvent();
    message.nonce = (object.nonce !== undefined && object.nonce !== null) ? Long.fromValue(object.nonce) : Long.UZERO;
    message.pendingActionType = (object.pendingActionType !== undefined && object.pendingActionType !== null)
      ? Long.fromValue(object.pendingActionType)
      : Long.UZERO;
    message.connectionId = object.connectionId ?? "";
    message.relayDetails = (object.relayDetails !== undefined && object.relayDetails !== null)
      ? RelayDetails.fromPartial(object.relayDetails)
      : undefined;
    return message;
  },
};

function createBaseExpiredPendingActionEvent(): ExpiredPendingActionEvent {
  return { nonce: Long.UZERO, pendingActionType: Long.UZERO, connectionId: "", relayDetails: undefined };
}

export const ExpiredPendingActionEvent = {
  encode(message: ExpiredPendingActionEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (!message.pendingActionType.isZero()) {
      writer.uint32(16).uint64(message.pendingActionType);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    if (message.relayDetails !== undefined) {
      RelayDetails.encode(message.relayDetails, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExpiredPendingActionEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpiredPendingActionEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.nonce = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.pendingActionType = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.connectionId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.relayDetails = RelayDetails.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExpiredPendingActionEvent {
    return {
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      pendingActionType: isSet(object.pendingActionType) ? Long.fromValue(object.pendingActionType) : Long.UZERO,
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      relayDetails: isSet(object.relayDetails) ? RelayDetails.fromJSON(object.relayDetails) : undefined,
    };
  },

  toJSON(message: ExpiredPendingActionEvent): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.pendingActionType !== undefined &&
      (obj.pendingActionType = (message.pendingActionType || Long.UZERO).toString());
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.relayDetails !== undefined &&
      (obj.relayDetails = message.relayDetails ? RelayDetails.toJSON(message.relayDetails) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ExpiredPendingActionEvent>): ExpiredPendingActionEvent {
    return ExpiredPendingActionEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ExpiredPendingActionEvent>): ExpiredPendingActionEvent {
    const message = createBaseExpiredPendingActionEvent();
    message.nonce = (object.nonce !== undefined && object.nonce !== null) ? Long.fromValue(object.nonce) : Long.UZERO;
    message.pendingActionType = (object.pendingActionType !== undefined && object.pendingActionType !== null)
      ? Long.fromValue(object.pendingActionType)
      : Long.UZERO;
    message.connectionId = object.connectionId ?? "";
    message.relayDetails = (object.relayDetails !== undefined && object.relayDetails !== null)
      ? RelayDetails.fromPartial(object.relayDetails)
      : undefined;
    return message;
  },
};

function createBaseAxelarCallContractEvent(): AxelarCallContractEvent {
  return { payload: new Uint8Array() };
}

export const AxelarCallContractEvent = {
  encode(message: AxelarCallContractEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload.length !== 0) {
      writer.uint32(10).bytes(message.payload);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AxelarCallContractEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAxelarCallContractEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AxelarCallContractEvent {
    return { payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array() };
  },

  toJSON(message: AxelarCallContractEvent): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : new Uint8Array()));
    return obj;
  },

  create(base?: DeepPartial<AxelarCallContractEvent>): AxelarCallContractEvent {
    return AxelarCallContractEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AxelarCallContractEvent>): AxelarCallContractEvent {
    const message = createBaseAxelarCallContractEvent();
    message.payload = object.payload ?? new Uint8Array();
    return message;
  },
};

function createBaseModuleAxelarCallContractEvent(): ModuleAxelarCallContractEvent {
  return { nonce: Long.UZERO, payload: new Uint8Array() };
}

export const ModuleAxelarCallContractEvent = {
  encode(message: ModuleAxelarCallContractEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.payload.length !== 0) {
      writer.uint32(18).bytes(message.payload);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleAxelarCallContractEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleAxelarCallContractEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.nonce = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.payload = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ModuleAxelarCallContractEvent {
    return {
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
    };
  },

  toJSON(message: ModuleAxelarCallContractEvent): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : new Uint8Array()));
    return obj;
  },

  create(base?: DeepPartial<ModuleAxelarCallContractEvent>): ModuleAxelarCallContractEvent {
    return ModuleAxelarCallContractEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ModuleAxelarCallContractEvent>): ModuleAxelarCallContractEvent {
    const message = createBaseModuleAxelarCallContractEvent();
    message.nonce = (object.nonce !== undefined && object.nonce !== null) ? Long.fromValue(object.nonce) : Long.UZERO;
    message.payload = object.payload ?? new Uint8Array();
    return message;
  },
};

function createBaseAxelarGeneralMessageReceivedEvent(): AxelarGeneralMessageReceivedEvent {
  return { connectionId: "", payload: new Uint8Array() };
}

export const AxelarGeneralMessageReceivedEvent = {
  encode(message: AxelarGeneralMessageReceivedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.payload.length !== 0) {
      writer.uint32(18).bytes(message.payload);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AxelarGeneralMessageReceivedEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAxelarGeneralMessageReceivedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connectionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.payload = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AxelarGeneralMessageReceivedEvent {
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
    };
  },

  toJSON(message: AxelarGeneralMessageReceivedEvent): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : new Uint8Array()));
    return obj;
  },

  create(base?: DeepPartial<AxelarGeneralMessageReceivedEvent>): AxelarGeneralMessageReceivedEvent {
    return AxelarGeneralMessageReceivedEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AxelarGeneralMessageReceivedEvent>): AxelarGeneralMessageReceivedEvent {
    const message = createBaseAxelarGeneralMessageReceivedEvent();
    message.connectionId = object.connectionId ?? "";
    message.payload = object.payload ?? new Uint8Array();
    return message;
  },
};

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
