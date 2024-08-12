/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Connection, ExternalTokenMapping, RelayDetails } from "./bridge";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

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

const baseNewConnectionEvent: object = {};

export const NewConnectionEvent = {
  encode(
    message: NewConnectionEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.connection !== undefined) {
      Connection.encode(message.connection, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewConnectionEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNewConnectionEvent } as NewConnectionEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection = Connection.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NewConnectionEvent {
    const message = { ...baseNewConnectionEvent } as NewConnectionEvent;
    message.connection =
      object.connection !== undefined && object.connection !== null
        ? Connection.fromJSON(object.connection)
        : undefined;
    return message;
  },

  toJSON(message: NewConnectionEvent): unknown {
    const obj: any = {};
    message.connection !== undefined &&
      (obj.connection = message.connection
        ? Connection.toJSON(message.connection)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<NewConnectionEvent>): NewConnectionEvent {
    const message = { ...baseNewConnectionEvent } as NewConnectionEvent;
    message.connection =
      object.connection !== undefined && object.connection !== null
        ? Connection.fromPartial(object.connection)
        : undefined;
    return message;
  },
};

const baseUpdateConnectionEvent: object = {
  connectionId: "",
  chainDisplayName: "",
  isEnabled: false,
};

export const UpdateConnectionEvent = {
  encode(
    message: UpdateConnectionEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateConnectionEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateConnectionEvent } as UpdateConnectionEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.chainDisplayName = reader.string();
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

  fromJSON(object: any): UpdateConnectionEvent {
    const message = { ...baseUpdateConnectionEvent } as UpdateConnectionEvent;
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.chainDisplayName =
      object.chainDisplayName !== undefined && object.chainDisplayName !== null
        ? String(object.chainDisplayName)
        : "";
    message.isEnabled =
      object.isEnabled !== undefined && object.isEnabled !== null
        ? Boolean(object.isEnabled)
        : false;
    return message;
  },

  toJSON(message: UpdateConnectionEvent): unknown {
    const obj: any = {};
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.chainDisplayName !== undefined &&
      (obj.chainDisplayName = message.chainDisplayName);
    message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateConnectionEvent>
  ): UpdateConnectionEvent {
    const message = { ...baseUpdateConnectionEvent } as UpdateConnectionEvent;
    message.connectionId = object.connectionId ?? "";
    message.chainDisplayName = object.chainDisplayName ?? "";
    message.isEnabled = object.isEnabled ?? false;
    return message;
  },
};

const baseRemoveConnectionEvent: object = { connectionId: "" };

export const RemoveConnectionEvent = {
  encode(
    message: RemoveConnectionEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveConnectionEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRemoveConnectionEvent } as RemoveConnectionEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveConnectionEvent {
    const message = { ...baseRemoveConnectionEvent } as RemoveConnectionEvent;
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    return message;
  },

  toJSON(message: RemoveConnectionEvent): unknown {
    const obj: any = {};
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RemoveConnectionEvent>
  ): RemoveConnectionEvent {
    const message = { ...baseRemoveConnectionEvent } as RemoveConnectionEvent;
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

const baseNewExternalTokenMappingEvent: object = {};

export const NewExternalTokenMappingEvent = {
  encode(
    message: NewExternalTokenMappingEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.externalTokenMapping !== undefined) {
      ExternalTokenMapping.encode(
        message.externalTokenMapping,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): NewExternalTokenMappingEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseNewExternalTokenMappingEvent,
    } as NewExternalTokenMappingEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.externalTokenMapping = ExternalTokenMapping.decode(
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

  fromJSON(object: any): NewExternalTokenMappingEvent {
    const message = {
      ...baseNewExternalTokenMappingEvent,
    } as NewExternalTokenMappingEvent;
    message.externalTokenMapping =
      object.externalTokenMapping !== undefined &&
      object.externalTokenMapping !== null
        ? ExternalTokenMapping.fromJSON(object.externalTokenMapping)
        : undefined;
    return message;
  },

  toJSON(message: NewExternalTokenMappingEvent): unknown {
    const obj: any = {};
    message.externalTokenMapping !== undefined &&
      (obj.externalTokenMapping = message.externalTokenMapping
        ? ExternalTokenMapping.toJSON(message.externalTokenMapping)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<NewExternalTokenMappingEvent>
  ): NewExternalTokenMappingEvent {
    const message = {
      ...baseNewExternalTokenMappingEvent,
    } as NewExternalTokenMappingEvent;
    message.externalTokenMapping =
      object.externalTokenMapping !== undefined &&
      object.externalTokenMapping !== null
        ? ExternalTokenMapping.fromPartial(object.externalTokenMapping)
        : undefined;
    return message;
  },
};

const baseRegisterExternalTokenEvent: object = { carbonTokenName: "" };

export const RegisterExternalTokenEvent = {
  encode(
    message: RegisterExternalTokenEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.externalTokenMapping !== undefined) {
      ExternalTokenMapping.encode(
        message.externalTokenMapping,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.carbonTokenName !== "") {
      writer.uint32(26).string(message.carbonTokenName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RegisterExternalTokenEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRegisterExternalTokenEvent,
    } as RegisterExternalTokenEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.externalTokenMapping = ExternalTokenMapping.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.carbonTokenName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterExternalTokenEvent {
    const message = {
      ...baseRegisterExternalTokenEvent,
    } as RegisterExternalTokenEvent;
    message.externalTokenMapping =
      object.externalTokenMapping !== undefined &&
      object.externalTokenMapping !== null
        ? ExternalTokenMapping.fromJSON(object.externalTokenMapping)
        : undefined;
    message.carbonTokenName =
      object.carbonTokenName !== undefined && object.carbonTokenName !== null
        ? String(object.carbonTokenName)
        : "";
    return message;
  },

  toJSON(message: RegisterExternalTokenEvent): unknown {
    const obj: any = {};
    message.externalTokenMapping !== undefined &&
      (obj.externalTokenMapping = message.externalTokenMapping
        ? ExternalTokenMapping.toJSON(message.externalTokenMapping)
        : undefined);
    message.carbonTokenName !== undefined &&
      (obj.carbonTokenName = message.carbonTokenName);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RegisterExternalTokenEvent>
  ): RegisterExternalTokenEvent {
    const message = {
      ...baseRegisterExternalTokenEvent,
    } as RegisterExternalTokenEvent;
    message.externalTokenMapping =
      object.externalTokenMapping !== undefined &&
      object.externalTokenMapping !== null
        ? ExternalTokenMapping.fromPartial(object.externalTokenMapping)
        : undefined;
    message.carbonTokenName = object.carbonTokenName ?? "";
    return message;
  },
};

const baseRegisterNativeTokenEvent: object = {};

export const RegisterNativeTokenEvent = {
  encode(
    message: RegisterNativeTokenEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.externalTokenMapping !== undefined) {
      ExternalTokenMapping.encode(
        message.externalTokenMapping,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RegisterNativeTokenEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRegisterNativeTokenEvent,
    } as RegisterNativeTokenEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.externalTokenMapping = ExternalTokenMapping.decode(
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

  fromJSON(object: any): RegisterNativeTokenEvent {
    const message = {
      ...baseRegisterNativeTokenEvent,
    } as RegisterNativeTokenEvent;
    message.externalTokenMapping =
      object.externalTokenMapping !== undefined &&
      object.externalTokenMapping !== null
        ? ExternalTokenMapping.fromJSON(object.externalTokenMapping)
        : undefined;
    return message;
  },

  toJSON(message: RegisterNativeTokenEvent): unknown {
    const obj: any = {};
    message.externalTokenMapping !== undefined &&
      (obj.externalTokenMapping = message.externalTokenMapping
        ? ExternalTokenMapping.toJSON(message.externalTokenMapping)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RegisterNativeTokenEvent>
  ): RegisterNativeTokenEvent {
    const message = {
      ...baseRegisterNativeTokenEvent,
    } as RegisterNativeTokenEvent;
    message.externalTokenMapping =
      object.externalTokenMapping !== undefined &&
      object.externalTokenMapping !== null
        ? ExternalTokenMapping.fromPartial(object.externalTokenMapping)
        : undefined;
    return message;
  },
};

const baseDeregisterTokenEvent: object = {};

export const DeregisterTokenEvent = {
  encode(
    message: DeregisterTokenEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.externalTokenMapping !== undefined) {
      ExternalTokenMapping.encode(
        message.externalTokenMapping,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeregisterTokenEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeregisterTokenEvent } as DeregisterTokenEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.externalTokenMapping = ExternalTokenMapping.decode(
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

  fromJSON(object: any): DeregisterTokenEvent {
    const message = { ...baseDeregisterTokenEvent } as DeregisterTokenEvent;
    message.externalTokenMapping =
      object.externalTokenMapping !== undefined &&
      object.externalTokenMapping !== null
        ? ExternalTokenMapping.fromJSON(object.externalTokenMapping)
        : undefined;
    return message;
  },

  toJSON(message: DeregisterTokenEvent): unknown {
    const obj: any = {};
    message.externalTokenMapping !== undefined &&
      (obj.externalTokenMapping = message.externalTokenMapping
        ? ExternalTokenMapping.toJSON(message.externalTokenMapping)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<DeregisterTokenEvent>): DeregisterTokenEvent {
    const message = { ...baseDeregisterTokenEvent } as DeregisterTokenEvent;
    message.externalTokenMapping =
      object.externalTokenMapping !== undefined &&
      object.externalTokenMapping !== null
        ? ExternalTokenMapping.fromPartial(object.externalTokenMapping)
        : undefined;
    return message;
  },
};

const baseExecuteFromCarbonEvent: object = {
  connectionId: "",
  sender: "",
  executableAddress: "",
};

export const ExecuteFromCarbonEvent = {
  encode(
    message: ExecuteFromCarbonEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExecuteFromCarbonEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExecuteFromCarbonEvent } as ExecuteFromCarbonEvent;
    message.executionData = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.executableAddress = reader.string();
          break;
        case 4:
          message.executionData = reader.bytes();
          break;
        case 5:
          message.token = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExecuteFromCarbonEvent {
    const message = { ...baseExecuteFromCarbonEvent } as ExecuteFromCarbonEvent;
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.sender =
      object.sender !== undefined && object.sender !== null
        ? String(object.sender)
        : "";
    message.executableAddress =
      object.executableAddress !== undefined &&
      object.executableAddress !== null
        ? String(object.executableAddress)
        : "";
    message.executionData =
      object.executionData !== undefined && object.executionData !== null
        ? bytesFromBase64(object.executionData)
        : new Uint8Array();
    message.token =
      object.token !== undefined && object.token !== null
        ? Coin.fromJSON(object.token)
        : undefined;
    return message;
  },

  toJSON(message: ExecuteFromCarbonEvent): unknown {
    const obj: any = {};
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.sender !== undefined && (obj.sender = message.sender);
    message.executableAddress !== undefined &&
      (obj.executableAddress = message.executableAddress);
    message.executionData !== undefined &&
      (obj.executionData = base64FromBytes(
        message.executionData !== undefined
          ? message.executionData
          : new Uint8Array()
      ));
    message.token !== undefined &&
      (obj.token = message.token ? Coin.toJSON(message.token) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ExecuteFromCarbonEvent>
  ): ExecuteFromCarbonEvent {
    const message = { ...baseExecuteFromCarbonEvent } as ExecuteFromCarbonEvent;
    message.connectionId = object.connectionId ?? "";
    message.sender = object.sender ?? "";
    message.executableAddress = object.executableAddress ?? "";
    message.executionData = object.executionData ?? new Uint8Array();
    message.token =
      object.token !== undefined && object.token !== null
        ? Coin.fromPartial(object.token)
        : undefined;
    return message;
  },
};

const baseDepositTokenEvent: object = {
  connectionId: "",
  sender: "",
  receiver: "",
  assetAddress: "",
};

export const DepositTokenEvent = {
  encode(
    message: DepositTokenEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDepositTokenEvent } as DepositTokenEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        case 4:
          message.assetAddress = reader.string();
          break;
        case 5:
          message.token = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DepositTokenEvent {
    const message = { ...baseDepositTokenEvent } as DepositTokenEvent;
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.sender =
      object.sender !== undefined && object.sender !== null
        ? String(object.sender)
        : "";
    message.receiver =
      object.receiver !== undefined && object.receiver !== null
        ? String(object.receiver)
        : "";
    message.assetAddress =
      object.assetAddress !== undefined && object.assetAddress !== null
        ? String(object.assetAddress)
        : "";
    message.token =
      object.token !== undefined && object.token !== null
        ? Coin.fromJSON(object.token)
        : undefined;
    return message;
  },

  toJSON(message: DepositTokenEvent): unknown {
    const obj: any = {};
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.assetAddress !== undefined &&
      (obj.assetAddress = message.assetAddress);
    message.token !== undefined &&
      (obj.token = message.token ? Coin.toJSON(message.token) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<DepositTokenEvent>): DepositTokenEvent {
    const message = { ...baseDepositTokenEvent } as DepositTokenEvent;
    message.connectionId = object.connectionId ?? "";
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.assetAddress = object.assetAddress ?? "";
    message.token =
      object.token !== undefined && object.token !== null
        ? Coin.fromPartial(object.token)
        : undefined;
    return message;
  },
};

const baseWithdrawDeductedEvent: object = { sender: "", receiver: "" };

export const WithdrawDeductedEvent = {
  encode(
    message: WithdrawDeductedEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.externalTokenMapping !== undefined) {
      ExternalTokenMapping.encode(
        message.externalTokenMapping,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.token !== undefined) {
      Coin.encode(message.token, writer.uint32(34).fork()).ldelim();
    }
    if (message.relayDetails !== undefined) {
      RelayDetails.encode(
        message.relayDetails,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): WithdrawDeductedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWithdrawDeductedEvent } as WithdrawDeductedEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.externalTokenMapping = ExternalTokenMapping.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.token = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.relayDetails = RelayDetails.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WithdrawDeductedEvent {
    const message = { ...baseWithdrawDeductedEvent } as WithdrawDeductedEvent;
    message.sender =
      object.sender !== undefined && object.sender !== null
        ? String(object.sender)
        : "";
    message.receiver =
      object.receiver !== undefined && object.receiver !== null
        ? String(object.receiver)
        : "";
    message.externalTokenMapping =
      object.externalTokenMapping !== undefined &&
      object.externalTokenMapping !== null
        ? ExternalTokenMapping.fromJSON(object.externalTokenMapping)
        : undefined;
    message.token =
      object.token !== undefined && object.token !== null
        ? Coin.fromJSON(object.token)
        : undefined;
    message.relayDetails =
      object.relayDetails !== undefined && object.relayDetails !== null
        ? RelayDetails.fromJSON(object.relayDetails)
        : undefined;
    return message;
  },

  toJSON(message: WithdrawDeductedEvent): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.externalTokenMapping !== undefined &&
      (obj.externalTokenMapping = message.externalTokenMapping
        ? ExternalTokenMapping.toJSON(message.externalTokenMapping)
        : undefined);
    message.token !== undefined &&
      (obj.token = message.token ? Coin.toJSON(message.token) : undefined);
    message.relayDetails !== undefined &&
      (obj.relayDetails = message.relayDetails
        ? RelayDetails.toJSON(message.relayDetails)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<WithdrawDeductedEvent>
  ): WithdrawDeductedEvent {
    const message = { ...baseWithdrawDeductedEvent } as WithdrawDeductedEvent;
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.externalTokenMapping =
      object.externalTokenMapping !== undefined &&
      object.externalTokenMapping !== null
        ? ExternalTokenMapping.fromPartial(object.externalTokenMapping)
        : undefined;
    message.token =
      object.token !== undefined && object.token !== null
        ? Coin.fromPartial(object.token)
        : undefined;
    message.relayDetails =
      object.relayDetails !== undefined && object.relayDetails !== null
        ? RelayDetails.fromPartial(object.relayDetails)
        : undefined;
    return message;
  },
};

const baseWithdrawTokenConfirmedEvent: object = {
  connectionId: "",
  sender: "",
  receiver: "",
  feeReceiverAddress: "",
  nonce: Long.UZERO,
};

export const WithdrawTokenConfirmedEvent = {
  encode(
    message: WithdrawTokenConfirmedEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): WithdrawTokenConfirmedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseWithdrawTokenConfirmedEvent,
    } as WithdrawTokenConfirmedEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        case 4:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.feeReceiverAddress = reader.string();
          break;
        case 6:
          message.relayFee = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.nonce = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WithdrawTokenConfirmedEvent {
    const message = {
      ...baseWithdrawTokenConfirmedEvent,
    } as WithdrawTokenConfirmedEvent;
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.sender =
      object.sender !== undefined && object.sender !== null
        ? String(object.sender)
        : "";
    message.receiver =
      object.receiver !== undefined && object.receiver !== null
        ? String(object.receiver)
        : "";
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromJSON(object.coin)
        : undefined;
    message.feeReceiverAddress =
      object.feeReceiverAddress !== undefined &&
      object.feeReceiverAddress !== null
        ? String(object.feeReceiverAddress)
        : "";
    message.relayFee =
      object.relayFee !== undefined && object.relayFee !== null
        ? Coin.fromJSON(object.relayFee)
        : undefined;
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromString(object.nonce)
        : Long.UZERO;
    return message;
  },

  toJSON(message: WithdrawTokenConfirmedEvent): unknown {
    const obj: any = {};
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.feeReceiverAddress !== undefined &&
      (obj.feeReceiverAddress = message.feeReceiverAddress);
    message.relayFee !== undefined &&
      (obj.relayFee = message.relayFee
        ? Coin.toJSON(message.relayFee)
        : undefined);
    message.nonce !== undefined &&
      (obj.nonce = (message.nonce || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<WithdrawTokenConfirmedEvent>
  ): WithdrawTokenConfirmedEvent {
    const message = {
      ...baseWithdrawTokenConfirmedEvent,
    } as WithdrawTokenConfirmedEvent;
    message.connectionId = object.connectionId ?? "";
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined;
    message.feeReceiverAddress = object.feeReceiverAddress ?? "";
    message.relayFee =
      object.relayFee !== undefined && object.relayFee !== null
        ? Coin.fromPartial(object.relayFee)
        : undefined;
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromValue(object.nonce)
        : Long.UZERO;
    return message;
  },
};

const baseExecutionOnCarbonErrorEvent: object = {
  nonce: Long.UZERO,
  payloadType: "",
  dataEncoding: "",
};

export const ExecutionOnCarbonErrorEvent = {
  encode(
    message: ExecutionOnCarbonErrorEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExecutionOnCarbonErrorEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseExecutionOnCarbonErrorEvent,
    } as ExecutionOnCarbonErrorEvent;
    message.data = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint64() as Long;
          break;
        case 2:
          message.payloadType = reader.string();
          break;
        case 3:
          message.dataEncoding = reader.string();
          break;
        case 4:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExecutionOnCarbonErrorEvent {
    const message = {
      ...baseExecutionOnCarbonErrorEvent,
    } as ExecutionOnCarbonErrorEvent;
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromString(object.nonce)
        : Long.UZERO;
    message.payloadType =
      object.payloadType !== undefined && object.payloadType !== null
        ? String(object.payloadType)
        : "";
    message.dataEncoding =
      object.dataEncoding !== undefined && object.dataEncoding !== null
        ? String(object.dataEncoding)
        : "";
    message.data =
      object.data !== undefined && object.data !== null
        ? bytesFromBase64(object.data)
        : new Uint8Array();
    return message;
  },

  toJSON(message: ExecutionOnCarbonErrorEvent): unknown {
    const obj: any = {};
    message.nonce !== undefined &&
      (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.payloadType !== undefined &&
      (obj.payloadType = message.payloadType);
    message.dataEncoding !== undefined &&
      (obj.dataEncoding = message.dataEncoding);
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<ExecutionOnCarbonErrorEvent>
  ): ExecutionOnCarbonErrorEvent {
    const message = {
      ...baseExecutionOnCarbonErrorEvent,
    } as ExecutionOnCarbonErrorEvent;
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromValue(object.nonce)
        : Long.UZERO;
    message.payloadType = object.payloadType ?? "";
    message.dataEncoding = object.dataEncoding ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};

const baseBridgeSentEvent: object = {
  bridgeId: Long.UZERO,
  chainId: "",
  gatewayAddress: "",
  nonce: Long.UZERO,
};

export const BridgeSentEvent = {
  encode(
    message: BridgeSentEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBridgeSentEvent } as BridgeSentEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bridgeId = reader.uint64() as Long;
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.gatewayAddress = reader.string();
          break;
        case 4:
          message.nonce = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BridgeSentEvent {
    const message = { ...baseBridgeSentEvent } as BridgeSentEvent;
    message.bridgeId =
      object.bridgeId !== undefined && object.bridgeId !== null
        ? Long.fromString(object.bridgeId)
        : Long.UZERO;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? String(object.chainId)
        : "";
    message.gatewayAddress =
      object.gatewayAddress !== undefined && object.gatewayAddress !== null
        ? String(object.gatewayAddress)
        : "";
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromString(object.nonce)
        : Long.UZERO;
    return message;
  },

  toJSON(message: BridgeSentEvent): unknown {
    const obj: any = {};
    message.bridgeId !== undefined &&
      (obj.bridgeId = (message.bridgeId || Long.UZERO).toString());
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.gatewayAddress !== undefined &&
      (obj.gatewayAddress = message.gatewayAddress);
    message.nonce !== undefined &&
      (obj.nonce = (message.nonce || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<BridgeSentEvent>): BridgeSentEvent {
    const message = { ...baseBridgeSentEvent } as BridgeSentEvent;
    message.bridgeId =
      object.bridgeId !== undefined && object.bridgeId !== null
        ? Long.fromValue(object.bridgeId)
        : Long.UZERO;
    message.chainId = object.chainId ?? "";
    message.gatewayAddress = object.gatewayAddress ?? "";
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromValue(object.nonce)
        : Long.UZERO;
    return message;
  },
};

const baseBridgeAcknowledgedEvent: object = {
  bridgeId: Long.UZERO,
  chainId: "",
  gatewayAddress: "",
  nonce: Long.UZERO,
};

export const BridgeAcknowledgedEvent = {
  encode(
    message: BridgeAcknowledgedEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BridgeAcknowledgedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBridgeAcknowledgedEvent,
    } as BridgeAcknowledgedEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bridgeId = reader.uint64() as Long;
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.gatewayAddress = reader.string();
          break;
        case 4:
          message.nonce = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BridgeAcknowledgedEvent {
    const message = {
      ...baseBridgeAcknowledgedEvent,
    } as BridgeAcknowledgedEvent;
    message.bridgeId =
      object.bridgeId !== undefined && object.bridgeId !== null
        ? Long.fromString(object.bridgeId)
        : Long.UZERO;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? String(object.chainId)
        : "";
    message.gatewayAddress =
      object.gatewayAddress !== undefined && object.gatewayAddress !== null
        ? String(object.gatewayAddress)
        : "";
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromString(object.nonce)
        : Long.UZERO;
    return message;
  },

  toJSON(message: BridgeAcknowledgedEvent): unknown {
    const obj: any = {};
    message.bridgeId !== undefined &&
      (obj.bridgeId = (message.bridgeId || Long.UZERO).toString());
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.gatewayAddress !== undefined &&
      (obj.gatewayAddress = message.gatewayAddress);
    message.nonce !== undefined &&
      (obj.nonce = (message.nonce || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<BridgeAcknowledgedEvent>
  ): BridgeAcknowledgedEvent {
    const message = {
      ...baseBridgeAcknowledgedEvent,
    } as BridgeAcknowledgedEvent;
    message.bridgeId =
      object.bridgeId !== undefined && object.bridgeId !== null
        ? Long.fromValue(object.bridgeId)
        : Long.UZERO;
    message.chainId = object.chainId ?? "";
    message.gatewayAddress = object.gatewayAddress ?? "";
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromValue(object.nonce)
        : Long.UZERO;
    return message;
  },
};

const baseBridgeRevertedEvent: object = {
  bridgeId: Long.UZERO,
  chainId: "",
  gatewayAddress: "",
  nonce: Long.UZERO,
};

export const BridgeRevertedEvent = {
  encode(
    message: BridgeRevertedEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBridgeRevertedEvent } as BridgeRevertedEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bridgeId = reader.uint64() as Long;
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.gatewayAddress = reader.string();
          break;
        case 4:
          message.nonce = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BridgeRevertedEvent {
    const message = { ...baseBridgeRevertedEvent } as BridgeRevertedEvent;
    message.bridgeId =
      object.bridgeId !== undefined && object.bridgeId !== null
        ? Long.fromString(object.bridgeId)
        : Long.UZERO;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? String(object.chainId)
        : "";
    message.gatewayAddress =
      object.gatewayAddress !== undefined && object.gatewayAddress !== null
        ? String(object.gatewayAddress)
        : "";
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromString(object.nonce)
        : Long.UZERO;
    return message;
  },

  toJSON(message: BridgeRevertedEvent): unknown {
    const obj: any = {};
    message.bridgeId !== undefined &&
      (obj.bridgeId = (message.bridgeId || Long.UZERO).toString());
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.gatewayAddress !== undefined &&
      (obj.gatewayAddress = message.gatewayAddress);
    message.nonce !== undefined &&
      (obj.nonce = (message.nonce || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<BridgeRevertedEvent>): BridgeRevertedEvent {
    const message = { ...baseBridgeRevertedEvent } as BridgeRevertedEvent;
    message.bridgeId =
      object.bridgeId !== undefined && object.bridgeId !== null
        ? Long.fromValue(object.bridgeId)
        : Long.UZERO;
    message.chainId = object.chainId ?? "";
    message.gatewayAddress = object.gatewayAddress ?? "";
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromValue(object.nonce)
        : Long.UZERO;
    return message;
  },
};

const baseBridgeReceivedEvent: object = {
  bridgeId: Long.UZERO,
  chainId: "",
  gatewayAddress: "",
  nonce: Long.UZERO,
};

export const BridgeReceivedEvent = {
  encode(
    message: BridgeReceivedEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBridgeReceivedEvent } as BridgeReceivedEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bridgeId = reader.uint64() as Long;
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.gatewayAddress = reader.string();
          break;
        case 4:
          message.nonce = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BridgeReceivedEvent {
    const message = { ...baseBridgeReceivedEvent } as BridgeReceivedEvent;
    message.bridgeId =
      object.bridgeId !== undefined && object.bridgeId !== null
        ? Long.fromString(object.bridgeId)
        : Long.UZERO;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? String(object.chainId)
        : "";
    message.gatewayAddress =
      object.gatewayAddress !== undefined && object.gatewayAddress !== null
        ? String(object.gatewayAddress)
        : "";
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromString(object.nonce)
        : Long.UZERO;
    return message;
  },

  toJSON(message: BridgeReceivedEvent): unknown {
    const obj: any = {};
    message.bridgeId !== undefined &&
      (obj.bridgeId = (message.bridgeId || Long.UZERO).toString());
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.gatewayAddress !== undefined &&
      (obj.gatewayAddress = message.gatewayAddress);
    message.nonce !== undefined &&
      (obj.nonce = (message.nonce || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<BridgeReceivedEvent>): BridgeReceivedEvent {
    const message = { ...baseBridgeReceivedEvent } as BridgeReceivedEvent;
    message.bridgeId =
      object.bridgeId !== undefined && object.bridgeId !== null
        ? Long.fromValue(object.bridgeId)
        : Long.UZERO;
    message.chainId = object.chainId ?? "";
    message.gatewayAddress = object.gatewayAddress ?? "";
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromValue(object.nonce)
        : Long.UZERO;
    return message;
  },
};

const baseNewPendingActionEvent: object = {
  nonce: Long.UZERO,
  pendingActionType: Long.UZERO,
  connectionId: "",
};

export const NewPendingActionEvent = {
  encode(
    message: NewPendingActionEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      RelayDetails.encode(
        message.relayDetails,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): NewPendingActionEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNewPendingActionEvent } as NewPendingActionEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint64() as Long;
          break;
        case 2:
          message.pendingActionType = reader.uint64() as Long;
          break;
        case 3:
          message.connectionId = reader.string();
          break;
        case 4:
          message.relayDetails = RelayDetails.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NewPendingActionEvent {
    const message = { ...baseNewPendingActionEvent } as NewPendingActionEvent;
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromString(object.nonce)
        : Long.UZERO;
    message.pendingActionType =
      object.pendingActionType !== undefined &&
      object.pendingActionType !== null
        ? Long.fromString(object.pendingActionType)
        : Long.UZERO;
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.relayDetails =
      object.relayDetails !== undefined && object.relayDetails !== null
        ? RelayDetails.fromJSON(object.relayDetails)
        : undefined;
    return message;
  },

  toJSON(message: NewPendingActionEvent): unknown {
    const obj: any = {};
    message.nonce !== undefined &&
      (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.pendingActionType !== undefined &&
      (obj.pendingActionType = (
        message.pendingActionType || Long.UZERO
      ).toString());
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.relayDetails !== undefined &&
      (obj.relayDetails = message.relayDetails
        ? RelayDetails.toJSON(message.relayDetails)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<NewPendingActionEvent>
  ): NewPendingActionEvent {
    const message = { ...baseNewPendingActionEvent } as NewPendingActionEvent;
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromValue(object.nonce)
        : Long.UZERO;
    message.pendingActionType =
      object.pendingActionType !== undefined &&
      object.pendingActionType !== null
        ? Long.fromValue(object.pendingActionType)
        : Long.UZERO;
    message.connectionId = object.connectionId ?? "";
    message.relayDetails =
      object.relayDetails !== undefined && object.relayDetails !== null
        ? RelayDetails.fromPartial(object.relayDetails)
        : undefined;
    return message;
  },
};

const baseUpdatePendingActionEvent: object = {
  nonce: Long.UZERO,
  pendingActionType: Long.UZERO,
  connectionId: "",
};

export const UpdatePendingActionEvent = {
  encode(
    message: UpdatePendingActionEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      RelayDetails.encode(
        message.relayDetails,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdatePendingActionEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdatePendingActionEvent,
    } as UpdatePendingActionEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint64() as Long;
          break;
        case 2:
          message.pendingActionType = reader.uint64() as Long;
          break;
        case 3:
          message.connectionId = reader.string();
          break;
        case 4:
          message.relayDetails = RelayDetails.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdatePendingActionEvent {
    const message = {
      ...baseUpdatePendingActionEvent,
    } as UpdatePendingActionEvent;
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromString(object.nonce)
        : Long.UZERO;
    message.pendingActionType =
      object.pendingActionType !== undefined &&
      object.pendingActionType !== null
        ? Long.fromString(object.pendingActionType)
        : Long.UZERO;
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.relayDetails =
      object.relayDetails !== undefined && object.relayDetails !== null
        ? RelayDetails.fromJSON(object.relayDetails)
        : undefined;
    return message;
  },

  toJSON(message: UpdatePendingActionEvent): unknown {
    const obj: any = {};
    message.nonce !== undefined &&
      (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.pendingActionType !== undefined &&
      (obj.pendingActionType = (
        message.pendingActionType || Long.UZERO
      ).toString());
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.relayDetails !== undefined &&
      (obj.relayDetails = message.relayDetails
        ? RelayDetails.toJSON(message.relayDetails)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdatePendingActionEvent>
  ): UpdatePendingActionEvent {
    const message = {
      ...baseUpdatePendingActionEvent,
    } as UpdatePendingActionEvent;
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromValue(object.nonce)
        : Long.UZERO;
    message.pendingActionType =
      object.pendingActionType !== undefined &&
      object.pendingActionType !== null
        ? Long.fromValue(object.pendingActionType)
        : Long.UZERO;
    message.connectionId = object.connectionId ?? "";
    message.relayDetails =
      object.relayDetails !== undefined && object.relayDetails !== null
        ? RelayDetails.fromPartial(object.relayDetails)
        : undefined;
    return message;
  },
};

const baseExpiredPendingActionEvent: object = {
  nonce: Long.UZERO,
  pendingActionType: Long.UZERO,
  connectionId: "",
};

export const ExpiredPendingActionEvent = {
  encode(
    message: ExpiredPendingActionEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      RelayDetails.encode(
        message.relayDetails,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExpiredPendingActionEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseExpiredPendingActionEvent,
    } as ExpiredPendingActionEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint64() as Long;
          break;
        case 2:
          message.pendingActionType = reader.uint64() as Long;
          break;
        case 3:
          message.connectionId = reader.string();
          break;
        case 4:
          message.relayDetails = RelayDetails.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExpiredPendingActionEvent {
    const message = {
      ...baseExpiredPendingActionEvent,
    } as ExpiredPendingActionEvent;
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromString(object.nonce)
        : Long.UZERO;
    message.pendingActionType =
      object.pendingActionType !== undefined &&
      object.pendingActionType !== null
        ? Long.fromString(object.pendingActionType)
        : Long.UZERO;
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.relayDetails =
      object.relayDetails !== undefined && object.relayDetails !== null
        ? RelayDetails.fromJSON(object.relayDetails)
        : undefined;
    return message;
  },

  toJSON(message: ExpiredPendingActionEvent): unknown {
    const obj: any = {};
    message.nonce !== undefined &&
      (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.pendingActionType !== undefined &&
      (obj.pendingActionType = (
        message.pendingActionType || Long.UZERO
      ).toString());
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.relayDetails !== undefined &&
      (obj.relayDetails = message.relayDetails
        ? RelayDetails.toJSON(message.relayDetails)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ExpiredPendingActionEvent>
  ): ExpiredPendingActionEvent {
    const message = {
      ...baseExpiredPendingActionEvent,
    } as ExpiredPendingActionEvent;
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromValue(object.nonce)
        : Long.UZERO;
    message.pendingActionType =
      object.pendingActionType !== undefined &&
      object.pendingActionType !== null
        ? Long.fromValue(object.pendingActionType)
        : Long.UZERO;
    message.connectionId = object.connectionId ?? "";
    message.relayDetails =
      object.relayDetails !== undefined && object.relayDetails !== null
        ? RelayDetails.fromPartial(object.relayDetails)
        : undefined;
    return message;
  },
};

const baseAxelarCallContractEvent: object = {};

export const AxelarCallContractEvent = {
  encode(
    message: AxelarCallContractEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.payload.length !== 0) {
      writer.uint32(10).bytes(message.payload);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AxelarCallContractEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAxelarCallContractEvent,
    } as AxelarCallContractEvent;
    message.payload = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AxelarCallContractEvent {
    const message = {
      ...baseAxelarCallContractEvent,
    } as AxelarCallContractEvent;
    message.payload =
      object.payload !== undefined && object.payload !== null
        ? bytesFromBase64(object.payload)
        : new Uint8Array();
    return message;
  },

  toJSON(message: AxelarCallContractEvent): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(
        message.payload !== undefined ? message.payload : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<AxelarCallContractEvent>
  ): AxelarCallContractEvent {
    const message = {
      ...baseAxelarCallContractEvent,
    } as AxelarCallContractEvent;
    message.payload = object.payload ?? new Uint8Array();
    return message;
  },
};

const baseModuleAxelarCallContractEvent: object = { nonce: Long.UZERO };

export const ModuleAxelarCallContractEvent = {
  encode(
    message: ModuleAxelarCallContractEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.payload.length !== 0) {
      writer.uint32(18).bytes(message.payload);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModuleAxelarCallContractEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseModuleAxelarCallContractEvent,
    } as ModuleAxelarCallContractEvent;
    message.payload = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint64() as Long;
          break;
        case 2:
          message.payload = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModuleAxelarCallContractEvent {
    const message = {
      ...baseModuleAxelarCallContractEvent,
    } as ModuleAxelarCallContractEvent;
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromString(object.nonce)
        : Long.UZERO;
    message.payload =
      object.payload !== undefined && object.payload !== null
        ? bytesFromBase64(object.payload)
        : new Uint8Array();
    return message;
  },

  toJSON(message: ModuleAxelarCallContractEvent): unknown {
    const obj: any = {};
    message.nonce !== undefined &&
      (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(
        message.payload !== undefined ? message.payload : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<ModuleAxelarCallContractEvent>
  ): ModuleAxelarCallContractEvent {
    const message = {
      ...baseModuleAxelarCallContractEvent,
    } as ModuleAxelarCallContractEvent;
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromValue(object.nonce)
        : Long.UZERO;
    message.payload = object.payload ?? new Uint8Array();
    return message;
  },
};

const baseAxelarGeneralMessageReceivedEvent: object = { connectionId: "" };

export const AxelarGeneralMessageReceivedEvent = {
  encode(
    message: AxelarGeneralMessageReceivedEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.payload.length !== 0) {
      writer.uint32(18).bytes(message.payload);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AxelarGeneralMessageReceivedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAxelarGeneralMessageReceivedEvent,
    } as AxelarGeneralMessageReceivedEvent;
    message.payload = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.payload = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AxelarGeneralMessageReceivedEvent {
    const message = {
      ...baseAxelarGeneralMessageReceivedEvent,
    } as AxelarGeneralMessageReceivedEvent;
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.payload =
      object.payload !== undefined && object.payload !== null
        ? bytesFromBase64(object.payload)
        : new Uint8Array();
    return message;
  },

  toJSON(message: AxelarGeneralMessageReceivedEvent): unknown {
    const obj: any = {};
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(
        message.payload !== undefined ? message.payload : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<AxelarGeneralMessageReceivedEvent>
  ): AxelarGeneralMessageReceivedEvent {
    const message = {
      ...baseAxelarGeneralMessageReceivedEvent,
    } as AxelarGeneralMessageReceivedEvent;
    message.connectionId = object.connectionId ?? "";
    message.payload = object.payload ?? new Uint8Array();
    return message;
  },
};

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
