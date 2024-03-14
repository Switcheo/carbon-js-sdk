/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  Connection,
  ExternalTokenMapping,
  RelayFee,
  ExternalExecutor,
} from "./bridge";
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

export interface WithdrawTokenEvent {
  sender: string;
  receiver: string;
  externalTokenMapping?: ExternalTokenMapping;
  token?: Coin;
  relayFee?: RelayFee;
}

export interface WithdrawTokenAcknowledgedEvent {
  connectionId: string;
  sender: string;
  receiver: string;
  coin?: Coin;
  relayerDepositAddress: string;
  relayFee?: Coin;
  payload: string;
}

export interface PayloadAcknowledgedEvent {
  payloadType: number;
  nonce: Long;
  payload: string;
  payloadEncoding: string;
}

export interface RegisterExecutableEvent {
  connectionId: string;
  executableAddress: string;
}

export interface ExecuteOnExecutableEvent {
  connectionId: string;
  sender: string;
  executableAddress: string;
  executionData: Uint8Array;
  token?: Coin;
}

export interface AllowExternalExecutorEvent {
  externalExecutor?: ExternalExecutor;
}

export interface PauseGatewayEvent {
  connectionId: string;
  gatewayAddress: string;
}

export interface UnpauseGatewayEvent {
  connectionId: string;
  gatewayAddress: string;
}

export interface DepositTokenEvent {
  connectionId: string;
  sender: string;
  receiver: string;
  assetAddress: string;
  token?: Coin;
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

const baseWithdrawTokenEvent: object = { sender: "", receiver: "" };

export const WithdrawTokenEvent = {
  encode(
    message: WithdrawTokenEvent,
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
    if (message.relayFee !== undefined) {
      RelayFee.encode(message.relayFee, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawTokenEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWithdrawTokenEvent } as WithdrawTokenEvent;
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
          message.relayFee = RelayFee.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WithdrawTokenEvent {
    const message = { ...baseWithdrawTokenEvent } as WithdrawTokenEvent;
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
    message.relayFee =
      object.relayFee !== undefined && object.relayFee !== null
        ? RelayFee.fromJSON(object.relayFee)
        : undefined;
    return message;
  },

  toJSON(message: WithdrawTokenEvent): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.externalTokenMapping !== undefined &&
      (obj.externalTokenMapping = message.externalTokenMapping
        ? ExternalTokenMapping.toJSON(message.externalTokenMapping)
        : undefined);
    message.token !== undefined &&
      (obj.token = message.token ? Coin.toJSON(message.token) : undefined);
    message.relayFee !== undefined &&
      (obj.relayFee = message.relayFee
        ? RelayFee.toJSON(message.relayFee)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<WithdrawTokenEvent>): WithdrawTokenEvent {
    const message = { ...baseWithdrawTokenEvent } as WithdrawTokenEvent;
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
    message.relayFee =
      object.relayFee !== undefined && object.relayFee !== null
        ? RelayFee.fromPartial(object.relayFee)
        : undefined;
    return message;
  },
};

const baseWithdrawTokenAcknowledgedEvent: object = {
  connectionId: "",
  sender: "",
  receiver: "",
  relayerDepositAddress: "",
  payload: "",
};

export const WithdrawTokenAcknowledgedEvent = {
  encode(
    message: WithdrawTokenAcknowledgedEvent,
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
    if (message.relayerDepositAddress !== "") {
      writer.uint32(42).string(message.relayerDepositAddress);
    }
    if (message.relayFee !== undefined) {
      Coin.encode(message.relayFee, writer.uint32(50).fork()).ldelim();
    }
    if (message.payload !== "") {
      writer.uint32(58).string(message.payload);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): WithdrawTokenAcknowledgedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseWithdrawTokenAcknowledgedEvent,
    } as WithdrawTokenAcknowledgedEvent;
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
          message.relayerDepositAddress = reader.string();
          break;
        case 6:
          message.relayFee = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.payload = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WithdrawTokenAcknowledgedEvent {
    const message = {
      ...baseWithdrawTokenAcknowledgedEvent,
    } as WithdrawTokenAcknowledgedEvent;
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
    message.relayerDepositAddress =
      object.relayerDepositAddress !== undefined &&
      object.relayerDepositAddress !== null
        ? String(object.relayerDepositAddress)
        : "";
    message.relayFee =
      object.relayFee !== undefined && object.relayFee !== null
        ? Coin.fromJSON(object.relayFee)
        : undefined;
    message.payload =
      object.payload !== undefined && object.payload !== null
        ? String(object.payload)
        : "";
    return message;
  },

  toJSON(message: WithdrawTokenAcknowledgedEvent): unknown {
    const obj: any = {};
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.relayerDepositAddress !== undefined &&
      (obj.relayerDepositAddress = message.relayerDepositAddress);
    message.relayFee !== undefined &&
      (obj.relayFee = message.relayFee
        ? Coin.toJSON(message.relayFee)
        : undefined);
    message.payload !== undefined && (obj.payload = message.payload);
    return obj;
  },

  fromPartial(
    object: DeepPartial<WithdrawTokenAcknowledgedEvent>
  ): WithdrawTokenAcknowledgedEvent {
    const message = {
      ...baseWithdrawTokenAcknowledgedEvent,
    } as WithdrawTokenAcknowledgedEvent;
    message.connectionId = object.connectionId ?? "";
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined;
    message.relayerDepositAddress = object.relayerDepositAddress ?? "";
    message.relayFee =
      object.relayFee !== undefined && object.relayFee !== null
        ? Coin.fromPartial(object.relayFee)
        : undefined;
    message.payload = object.payload ?? "";
    return message;
  },
};

const basePayloadAcknowledgedEvent: object = {
  payloadType: 0,
  nonce: Long.UZERO,
  payload: "",
  payloadEncoding: "",
};

export const PayloadAcknowledgedEvent = {
  encode(
    message: PayloadAcknowledgedEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.payloadType !== 0) {
      writer.uint32(8).uint32(message.payloadType);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(16).uint64(message.nonce);
    }
    if (message.payload !== "") {
      writer.uint32(26).string(message.payload);
    }
    if (message.payloadEncoding !== "") {
      writer.uint32(34).string(message.payloadEncoding);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PayloadAcknowledgedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePayloadAcknowledgedEvent,
    } as PayloadAcknowledgedEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payloadType = reader.uint32();
          break;
        case 2:
          message.nonce = reader.uint64() as Long;
          break;
        case 3:
          message.payload = reader.string();
          break;
        case 4:
          message.payloadEncoding = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PayloadAcknowledgedEvent {
    const message = {
      ...basePayloadAcknowledgedEvent,
    } as PayloadAcknowledgedEvent;
    message.payloadType =
      object.payloadType !== undefined && object.payloadType !== null
        ? Number(object.payloadType)
        : 0;
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromString(object.nonce)
        : Long.UZERO;
    message.payload =
      object.payload !== undefined && object.payload !== null
        ? String(object.payload)
        : "";
    message.payloadEncoding =
      object.payloadEncoding !== undefined && object.payloadEncoding !== null
        ? String(object.payloadEncoding)
        : "";
    return message;
  },

  toJSON(message: PayloadAcknowledgedEvent): unknown {
    const obj: any = {};
    message.payloadType !== undefined &&
      (obj.payloadType = message.payloadType);
    message.nonce !== undefined &&
      (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.payload !== undefined && (obj.payload = message.payload);
    message.payloadEncoding !== undefined &&
      (obj.payloadEncoding = message.payloadEncoding);
    return obj;
  },

  fromPartial(
    object: DeepPartial<PayloadAcknowledgedEvent>
  ): PayloadAcknowledgedEvent {
    const message = {
      ...basePayloadAcknowledgedEvent,
    } as PayloadAcknowledgedEvent;
    message.payloadType = object.payloadType ?? 0;
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromValue(object.nonce)
        : Long.UZERO;
    message.payload = object.payload ?? "";
    message.payloadEncoding = object.payloadEncoding ?? "";
    return message;
  },
};

const baseRegisterExecutableEvent: object = {
  connectionId: "",
  executableAddress: "",
};

export const RegisterExecutableEvent = {
  encode(
    message: RegisterExecutableEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.executableAddress !== "") {
      writer.uint32(18).string(message.executableAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RegisterExecutableEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRegisterExecutableEvent,
    } as RegisterExecutableEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.executableAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterExecutableEvent {
    const message = {
      ...baseRegisterExecutableEvent,
    } as RegisterExecutableEvent;
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

  toJSON(message: RegisterExecutableEvent): unknown {
    const obj: any = {};
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.executableAddress !== undefined &&
      (obj.executableAddress = message.executableAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RegisterExecutableEvent>
  ): RegisterExecutableEvent {
    const message = {
      ...baseRegisterExecutableEvent,
    } as RegisterExecutableEvent;
    message.connectionId = object.connectionId ?? "";
    message.executableAddress = object.executableAddress ?? "";
    return message;
  },
};

const baseExecuteOnExecutableEvent: object = {
  connectionId: "",
  sender: "",
  executableAddress: "",
};

export const ExecuteOnExecutableEvent = {
  encode(
    message: ExecuteOnExecutableEvent,
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
  ): ExecuteOnExecutableEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseExecuteOnExecutableEvent,
    } as ExecuteOnExecutableEvent;
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

  fromJSON(object: any): ExecuteOnExecutableEvent {
    const message = {
      ...baseExecuteOnExecutableEvent,
    } as ExecuteOnExecutableEvent;
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

  toJSON(message: ExecuteOnExecutableEvent): unknown {
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
    object: DeepPartial<ExecuteOnExecutableEvent>
  ): ExecuteOnExecutableEvent {
    const message = {
      ...baseExecuteOnExecutableEvent,
    } as ExecuteOnExecutableEvent;
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

const baseAllowExternalExecutorEvent: object = {};

export const AllowExternalExecutorEvent = {
  encode(
    message: AllowExternalExecutorEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.externalExecutor !== undefined) {
      ExternalExecutor.encode(
        message.externalExecutor,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AllowExternalExecutorEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAllowExternalExecutorEvent,
    } as AllowExternalExecutorEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.externalExecutor = ExternalExecutor.decode(
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

  fromJSON(object: any): AllowExternalExecutorEvent {
    const message = {
      ...baseAllowExternalExecutorEvent,
    } as AllowExternalExecutorEvent;
    message.externalExecutor =
      object.externalExecutor !== undefined && object.externalExecutor !== null
        ? ExternalExecutor.fromJSON(object.externalExecutor)
        : undefined;
    return message;
  },

  toJSON(message: AllowExternalExecutorEvent): unknown {
    const obj: any = {};
    message.externalExecutor !== undefined &&
      (obj.externalExecutor = message.externalExecutor
        ? ExternalExecutor.toJSON(message.externalExecutor)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AllowExternalExecutorEvent>
  ): AllowExternalExecutorEvent {
    const message = {
      ...baseAllowExternalExecutorEvent,
    } as AllowExternalExecutorEvent;
    message.externalExecutor =
      object.externalExecutor !== undefined && object.externalExecutor !== null
        ? ExternalExecutor.fromPartial(object.externalExecutor)
        : undefined;
    return message;
  },
};

const basePauseGatewayEvent: object = { connectionId: "", gatewayAddress: "" };

export const PauseGatewayEvent = {
  encode(
    message: PauseGatewayEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.gatewayAddress !== "") {
      writer.uint32(18).string(message.gatewayAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PauseGatewayEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePauseGatewayEvent } as PauseGatewayEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.gatewayAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PauseGatewayEvent {
    const message = { ...basePauseGatewayEvent } as PauseGatewayEvent;
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

  toJSON(message: PauseGatewayEvent): unknown {
    const obj: any = {};
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.gatewayAddress !== undefined &&
      (obj.gatewayAddress = message.gatewayAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<PauseGatewayEvent>): PauseGatewayEvent {
    const message = { ...basePauseGatewayEvent } as PauseGatewayEvent;
    message.connectionId = object.connectionId ?? "";
    message.gatewayAddress = object.gatewayAddress ?? "";
    return message;
  },
};

const baseUnpauseGatewayEvent: object = {
  connectionId: "",
  gatewayAddress: "",
};

export const UnpauseGatewayEvent = {
  encode(
    message: UnpauseGatewayEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.gatewayAddress !== "") {
      writer.uint32(18).string(message.gatewayAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnpauseGatewayEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUnpauseGatewayEvent } as UnpauseGatewayEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.gatewayAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnpauseGatewayEvent {
    const message = { ...baseUnpauseGatewayEvent } as UnpauseGatewayEvent;
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

  toJSON(message: UnpauseGatewayEvent): unknown {
    const obj: any = {};
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.gatewayAddress !== undefined &&
      (obj.gatewayAddress = message.gatewayAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<UnpauseGatewayEvent>): UnpauseGatewayEvent {
    const message = { ...baseUnpauseGatewayEvent } as UnpauseGatewayEvent;
    message.connectionId = object.connectionId ?? "";
    message.gatewayAddress = object.gatewayAddress ?? "";
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
