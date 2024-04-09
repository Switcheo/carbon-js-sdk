/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "Switcheo.carbon.bridge";

export interface BridgeState {
  id: string;
  name: string;
  isEnabled: boolean;
}

/** each bridge have multiple connections to different chains */
export interface Connection {
  /** = bridgeId_chainId */
  connectionId: string;
  bridgeId: string;
  chainId: string;
  chainDisplayName: string;
  tokenGatewayAddress: string;
  encoding: string;
  escrowAddress: string;
  isEnabled: boolean;
}

/** each connection can have multiple external tokens, which contains the mapping to native denom */
export interface ExternalTokenMapping {
  connectionId: string;
  isEnabled: boolean;
  isCarbonOwned: boolean;
  externalAddress: string;
  /** corresponding carbon native denom */
  denom: string;
}

/** accounts/contracts from external chains can be allowed to execute certain predefined functions on carbon */
export interface ExternalExecutor {
  connectionId: string;
  externalAddress: string;
  carbonAddress: string;
}

/** contracts from external chains that can be executed by carbon */
export interface ExecutableContract {
  connectionId: string;
  address: string;
}

/** RelayFee */
export interface RelayFee {
  relayerDepositAddress: string;
  fee?: Coin;
}

/** WithdrawalDetails */
export interface WithdrawalDetails {
  connectionId: string;
  sender: string;
  receiver: string;
  coin?: Coin;
  relayFee?: RelayFee;
}

const baseBridgeState: object = { id: "", name: "", isEnabled: false };

export const BridgeState = {
  encode(
    message: BridgeState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.isEnabled === true) {
      writer.uint32(24).bool(message.isEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BridgeState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBridgeState } as BridgeState;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
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

  fromJSON(object: any): BridgeState {
    const message = { ...baseBridgeState } as BridgeState;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.isEnabled =
      object.isEnabled !== undefined && object.isEnabled !== null
        ? Boolean(object.isEnabled)
        : false;
    return message;
  },

  toJSON(message: BridgeState): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
    return obj;
  },

  fromPartial(object: DeepPartial<BridgeState>): BridgeState {
    const message = { ...baseBridgeState } as BridgeState;
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.isEnabled = object.isEnabled ?? false;
    return message;
  },
};

const baseConnection: object = {
  connectionId: "",
  bridgeId: "",
  chainId: "",
  chainDisplayName: "",
  tokenGatewayAddress: "",
  encoding: "",
  escrowAddress: "",
  isEnabled: false,
};

export const Connection = {
  encode(
    message: Connection,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
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
    if (message.escrowAddress !== "") {
      writer.uint32(58).string(message.escrowAddress);
    }
    if (message.isEnabled === true) {
      writer.uint32(64).bool(message.isEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Connection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConnection } as Connection;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
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
          message.escrowAddress = reader.string();
          break;
        case 8:
          message.isEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Connection {
    const message = { ...baseConnection } as Connection;
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
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
    message.escrowAddress =
      object.escrowAddress !== undefined && object.escrowAddress !== null
        ? String(object.escrowAddress)
        : "";
    message.isEnabled =
      object.isEnabled !== undefined && object.isEnabled !== null
        ? Boolean(object.isEnabled)
        : false;
    return message;
  },

  toJSON(message: Connection): unknown {
    const obj: any = {};
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.bridgeId !== undefined && (obj.bridgeId = message.bridgeId);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.chainDisplayName !== undefined &&
      (obj.chainDisplayName = message.chainDisplayName);
    message.tokenGatewayAddress !== undefined &&
      (obj.tokenGatewayAddress = message.tokenGatewayAddress);
    message.encoding !== undefined && (obj.encoding = message.encoding);
    message.escrowAddress !== undefined &&
      (obj.escrowAddress = message.escrowAddress);
    message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
    return obj;
  },

  fromPartial(object: DeepPartial<Connection>): Connection {
    const message = { ...baseConnection } as Connection;
    message.connectionId = object.connectionId ?? "";
    message.bridgeId = object.bridgeId ?? "";
    message.chainId = object.chainId ?? "";
    message.chainDisplayName = object.chainDisplayName ?? "";
    message.tokenGatewayAddress = object.tokenGatewayAddress ?? "";
    message.encoding = object.encoding ?? "";
    message.escrowAddress = object.escrowAddress ?? "";
    message.isEnabled = object.isEnabled ?? false;
    return message;
  },
};

const baseExternalTokenMapping: object = {
  connectionId: "",
  isEnabled: false,
  isCarbonOwned: false,
  externalAddress: "",
  denom: "",
};

export const ExternalTokenMapping = {
  encode(
    message: ExternalTokenMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.isEnabled === true) {
      writer.uint32(16).bool(message.isEnabled);
    }
    if (message.isCarbonOwned === true) {
      writer.uint32(24).bool(message.isCarbonOwned);
    }
    if (message.externalAddress !== "") {
      writer.uint32(34).string(message.externalAddress);
    }
    if (message.denom !== "") {
      writer.uint32(42).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExternalTokenMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExternalTokenMapping } as ExternalTokenMapping;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.isEnabled = reader.bool();
          break;
        case 3:
          message.isCarbonOwned = reader.bool();
          break;
        case 4:
          message.externalAddress = reader.string();
          break;
        case 5:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExternalTokenMapping {
    const message = { ...baseExternalTokenMapping } as ExternalTokenMapping;
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.isEnabled =
      object.isEnabled !== undefined && object.isEnabled !== null
        ? Boolean(object.isEnabled)
        : false;
    message.isCarbonOwned =
      object.isCarbonOwned !== undefined && object.isCarbonOwned !== null
        ? Boolean(object.isCarbonOwned)
        : false;
    message.externalAddress =
      object.externalAddress !== undefined && object.externalAddress !== null
        ? String(object.externalAddress)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: ExternalTokenMapping): unknown {
    const obj: any = {};
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
    message.isCarbonOwned !== undefined &&
      (obj.isCarbonOwned = message.isCarbonOwned);
    message.externalAddress !== undefined &&
      (obj.externalAddress = message.externalAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<ExternalTokenMapping>): ExternalTokenMapping {
    const message = { ...baseExternalTokenMapping } as ExternalTokenMapping;
    message.connectionId = object.connectionId ?? "";
    message.isEnabled = object.isEnabled ?? false;
    message.isCarbonOwned = object.isCarbonOwned ?? false;
    message.externalAddress = object.externalAddress ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseExternalExecutor: object = {
  connectionId: "",
  externalAddress: "",
  carbonAddress: "",
};

export const ExternalExecutor = {
  encode(
    message: ExternalExecutor,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.externalAddress !== "") {
      writer.uint32(18).string(message.externalAddress);
    }
    if (message.carbonAddress !== "") {
      writer.uint32(26).string(message.carbonAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExternalExecutor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExternalExecutor } as ExternalExecutor;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.externalAddress = reader.string();
          break;
        case 3:
          message.carbonAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExternalExecutor {
    const message = { ...baseExternalExecutor } as ExternalExecutor;
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.externalAddress =
      object.externalAddress !== undefined && object.externalAddress !== null
        ? String(object.externalAddress)
        : "";
    message.carbonAddress =
      object.carbonAddress !== undefined && object.carbonAddress !== null
        ? String(object.carbonAddress)
        : "";
    return message;
  },

  toJSON(message: ExternalExecutor): unknown {
    const obj: any = {};
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.externalAddress !== undefined &&
      (obj.externalAddress = message.externalAddress);
    message.carbonAddress !== undefined &&
      (obj.carbonAddress = message.carbonAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<ExternalExecutor>): ExternalExecutor {
    const message = { ...baseExternalExecutor } as ExternalExecutor;
    message.connectionId = object.connectionId ?? "";
    message.externalAddress = object.externalAddress ?? "";
    message.carbonAddress = object.carbonAddress ?? "";
    return message;
  },
};

const baseExecutableContract: object = { connectionId: "", address: "" };

export const ExecutableContract = {
  encode(
    message: ExecutableContract,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecutableContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExecutableContract } as ExecutableContract;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExecutableContract {
    const message = { ...baseExecutableContract } as ExecutableContract;
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: ExecutableContract): unknown {
    const obj: any = {};
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<ExecutableContract>): ExecutableContract {
    const message = { ...baseExecutableContract } as ExecutableContract;
    message.connectionId = object.connectionId ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

const baseRelayFee: object = { relayerDepositAddress: "" };

export const RelayFee = {
  encode(
    message: RelayFee,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.relayerDepositAddress !== "") {
      writer.uint32(10).string(message.relayerDepositAddress);
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RelayFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRelayFee } as RelayFee;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.relayerDepositAddress = reader.string();
          break;
        case 2:
          message.fee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RelayFee {
    const message = { ...baseRelayFee } as RelayFee;
    message.relayerDepositAddress =
      object.relayerDepositAddress !== undefined &&
      object.relayerDepositAddress !== null
        ? String(object.relayerDepositAddress)
        : "";
    message.fee =
      object.fee !== undefined && object.fee !== null
        ? Coin.fromJSON(object.fee)
        : undefined;
    return message;
  },

  toJSON(message: RelayFee): unknown {
    const obj: any = {};
    message.relayerDepositAddress !== undefined &&
      (obj.relayerDepositAddress = message.relayerDepositAddress);
    message.fee !== undefined &&
      (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RelayFee>): RelayFee {
    const message = { ...baseRelayFee } as RelayFee;
    message.relayerDepositAddress = object.relayerDepositAddress ?? "";
    message.fee =
      object.fee !== undefined && object.fee !== null
        ? Coin.fromPartial(object.fee)
        : undefined;
    return message;
  },
};

const baseWithdrawalDetails: object = {
  connectionId: "",
  sender: "",
  receiver: "",
};

export const WithdrawalDetails = {
  encode(
    message: WithdrawalDetails,
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
    if (message.relayFee !== undefined) {
      RelayFee.encode(message.relayFee, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawalDetails {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWithdrawalDetails } as WithdrawalDetails;
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
          message.relayFee = RelayFee.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WithdrawalDetails {
    const message = { ...baseWithdrawalDetails } as WithdrawalDetails;
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
    message.relayFee =
      object.relayFee !== undefined && object.relayFee !== null
        ? RelayFee.fromJSON(object.relayFee)
        : undefined;
    return message;
  },

  toJSON(message: WithdrawalDetails): unknown {
    const obj: any = {};
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.relayFee !== undefined &&
      (obj.relayFee = message.relayFee
        ? RelayFee.toJSON(message.relayFee)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<WithdrawalDetails>): WithdrawalDetails {
    const message = { ...baseWithdrawalDetails } as WithdrawalDetails;
    message.connectionId = object.connectionId ?? "";
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined;
    message.relayFee =
      object.relayFee !== undefined && object.relayFee !== null
        ? RelayFee.fromPartial(object.relayFee)
        : undefined;
    return message;
  },
};

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
