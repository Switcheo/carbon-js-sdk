/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { StringValue } from "../../../google/protobuf/wrappers";

export const protobufPackage = "Switcheo.carbon.bridge";

export interface BridgeState {
  id: Long;
  name: string;
  isEnabled: boolean;
}

/** each bridge have multiple connections to different chains */
export interface Connection {
  /** = bridgeName/chainId */
  connectionId: string;
  bridgeId: Long;
  chainId: string;
  chainDisplayName: string;
  gatewayAddress: string;
  encoding: string;
  escrowAddress: string;
  isEnabled: boolean;
  isOptimisticConfirm: boolean;
}

export interface ControllerContracts {
  id: string;
  tokenController: string;
}

export interface ControllersToUpdate {
  tokenController?: string;
}

/**
 * each connection can have multiple external tokens, which contains the mapping
 * to native denom
 */
export interface ExternalTokenMapping {
  connectionId: string;
  isEnabled: boolean;
  isCarbonOwned: boolean;
  externalAddress: string;
  /** corresponding carbon native denom */
  denom: string;
}

/** RelayDetails defines the details of the relay */
export interface RelayDetails {
  feeReceiverAddress: string;
  feeSenderAddress: string;
  fee?: Coin;
  expiryBlockTime?: Date;
  createdAt?: Date;
  sentAt?: Date;
}

export interface Withdrawal {
  creator: string;
  denom: string;
  amount: string;
  usdValue: string;
  timestamp?: Date;
  bridgeId: Long;
  nonce: Long;
  srcChannel: string;
}

export interface Withdrawals {
  withdrawals: Withdrawal[];
}

function createBaseBridgeState(): BridgeState {
  return { id: Long.UZERO, name: "", isEnabled: false };
}

export const BridgeState = {
  encode(message: BridgeState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBridgeState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
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

  fromJSON(object: any): BridgeState {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      name: isSet(object.name) ? String(object.name) : "",
      isEnabled: isSet(object.isEnabled) ? Boolean(object.isEnabled) : false,
    };
  },

  toJSON(message: BridgeState): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.name !== undefined && (obj.name = message.name);
    message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
    return obj;
  },

  create(base?: DeepPartial<BridgeState>): BridgeState {
    return BridgeState.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<BridgeState>): BridgeState {
    const message = createBaseBridgeState();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.name = object.name ?? "";
    message.isEnabled = object.isEnabled ?? false;
    return message;
  },
};

function createBaseConnection(): Connection {
  return {
    connectionId: "",
    bridgeId: Long.UZERO,
    chainId: "",
    chainDisplayName: "",
    gatewayAddress: "",
    encoding: "",
    escrowAddress: "",
    isEnabled: false,
    isOptimisticConfirm: false,
  };
}

export const Connection = {
  encode(message: Connection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
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
    if (message.gatewayAddress !== "") {
      writer.uint32(42).string(message.gatewayAddress);
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
    if (message.isOptimisticConfirm === true) {
      writer.uint32(72).bool(message.isOptimisticConfirm);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Connection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnection();
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

          message.gatewayAddress = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.encoding = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.escrowAddress = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.isEnabled = reader.bool();
          continue;
        case 9:
          if (tag !== 72) {
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

  fromJSON(object: any): Connection {
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      bridgeId: isSet(object.bridgeId) ? Long.fromValue(object.bridgeId) : Long.UZERO,
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      chainDisplayName: isSet(object.chainDisplayName) ? String(object.chainDisplayName) : "",
      gatewayAddress: isSet(object.gatewayAddress) ? String(object.gatewayAddress) : "",
      encoding: isSet(object.encoding) ? String(object.encoding) : "",
      escrowAddress: isSet(object.escrowAddress) ? String(object.escrowAddress) : "",
      isEnabled: isSet(object.isEnabled) ? Boolean(object.isEnabled) : false,
      isOptimisticConfirm: isSet(object.isOptimisticConfirm) ? Boolean(object.isOptimisticConfirm) : false,
    };
  },

  toJSON(message: Connection): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.bridgeId !== undefined && (obj.bridgeId = (message.bridgeId || Long.UZERO).toString());
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.chainDisplayName !== undefined && (obj.chainDisplayName = message.chainDisplayName);
    message.gatewayAddress !== undefined && (obj.gatewayAddress = message.gatewayAddress);
    message.encoding !== undefined && (obj.encoding = message.encoding);
    message.escrowAddress !== undefined && (obj.escrowAddress = message.escrowAddress);
    message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
    message.isOptimisticConfirm !== undefined && (obj.isOptimisticConfirm = message.isOptimisticConfirm);
    return obj;
  },

  create(base?: DeepPartial<Connection>): Connection {
    return Connection.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Connection>): Connection {
    const message = createBaseConnection();
    message.connectionId = object.connectionId ?? "";
    message.bridgeId = (object.bridgeId !== undefined && object.bridgeId !== null)
      ? Long.fromValue(object.bridgeId)
      : Long.UZERO;
    message.chainId = object.chainId ?? "";
    message.chainDisplayName = object.chainDisplayName ?? "";
    message.gatewayAddress = object.gatewayAddress ?? "";
    message.encoding = object.encoding ?? "";
    message.escrowAddress = object.escrowAddress ?? "";
    message.isEnabled = object.isEnabled ?? false;
    message.isOptimisticConfirm = object.isOptimisticConfirm ?? false;
    return message;
  },
};

function createBaseControllerContracts(): ControllerContracts {
  return { id: "", tokenController: "" };
}

export const ControllerContracts = {
  encode(message: ControllerContracts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.tokenController !== "") {
      writer.uint32(18).string(message.tokenController);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControllerContracts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControllerContracts();
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

          message.tokenController = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ControllerContracts {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      tokenController: isSet(object.tokenController) ? String(object.tokenController) : "",
    };
  },

  toJSON(message: ControllerContracts): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.tokenController !== undefined && (obj.tokenController = message.tokenController);
    return obj;
  },

  create(base?: DeepPartial<ControllerContracts>): ControllerContracts {
    return ControllerContracts.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ControllerContracts>): ControllerContracts {
    const message = createBaseControllerContracts();
    message.id = object.id ?? "";
    message.tokenController = object.tokenController ?? "";
    return message;
  },
};

function createBaseControllersToUpdate(): ControllersToUpdate {
  return { tokenController: undefined };
}

export const ControllersToUpdate = {
  encode(message: ControllersToUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenController !== undefined) {
      StringValue.encode({ value: message.tokenController! }, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControllersToUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControllersToUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tokenController = StringValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ControllersToUpdate {
    return { tokenController: isSet(object.tokenController) ? String(object.tokenController) : undefined };
  },

  toJSON(message: ControllersToUpdate): unknown {
    const obj: any = {};
    message.tokenController !== undefined && (obj.tokenController = message.tokenController);
    return obj;
  },

  create(base?: DeepPartial<ControllersToUpdate>): ControllersToUpdate {
    return ControllersToUpdate.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ControllersToUpdate>): ControllersToUpdate {
    const message = createBaseControllersToUpdate();
    message.tokenController = object.tokenController ?? undefined;
    return message;
  },
};

function createBaseExternalTokenMapping(): ExternalTokenMapping {
  return { connectionId: "", isEnabled: false, isCarbonOwned: false, externalAddress: "", denom: "" };
}

export const ExternalTokenMapping = {
  encode(message: ExternalTokenMapping, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ExternalTokenMapping {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExternalTokenMapping();
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
          if (tag !== 16) {
            break;
          }

          message.isEnabled = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isCarbonOwned = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.externalAddress = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): ExternalTokenMapping {
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      isEnabled: isSet(object.isEnabled) ? Boolean(object.isEnabled) : false,
      isCarbonOwned: isSet(object.isCarbonOwned) ? Boolean(object.isCarbonOwned) : false,
      externalAddress: isSet(object.externalAddress) ? String(object.externalAddress) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: ExternalTokenMapping): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
    message.isCarbonOwned !== undefined && (obj.isCarbonOwned = message.isCarbonOwned);
    message.externalAddress !== undefined && (obj.externalAddress = message.externalAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<ExternalTokenMapping>): ExternalTokenMapping {
    return ExternalTokenMapping.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ExternalTokenMapping>): ExternalTokenMapping {
    const message = createBaseExternalTokenMapping();
    message.connectionId = object.connectionId ?? "";
    message.isEnabled = object.isEnabled ?? false;
    message.isCarbonOwned = object.isCarbonOwned ?? false;
    message.externalAddress = object.externalAddress ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseRelayDetails(): RelayDetails {
  return {
    feeReceiverAddress: "",
    feeSenderAddress: "",
    fee: undefined,
    expiryBlockTime: undefined,
    createdAt: undefined,
    sentAt: undefined,
  };
}

export const RelayDetails = {
  encode(message: RelayDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feeReceiverAddress !== "") {
      writer.uint32(10).string(message.feeReceiverAddress);
    }
    if (message.feeSenderAddress !== "") {
      writer.uint32(18).string(message.feeSenderAddress);
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(26).fork()).ldelim();
    }
    if (message.expiryBlockTime !== undefined) {
      Timestamp.encode(toTimestamp(message.expiryBlockTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
    }
    if (message.sentAt !== undefined) {
      Timestamp.encode(toTimestamp(message.sentAt), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RelayDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelayDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.feeReceiverAddress = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.feeSenderAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fee = Coin.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.expiryBlockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.sentAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RelayDetails {
    return {
      feeReceiverAddress: isSet(object.feeReceiverAddress) ? String(object.feeReceiverAddress) : "",
      feeSenderAddress: isSet(object.feeSenderAddress) ? String(object.feeSenderAddress) : "",
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined,
      expiryBlockTime: isSet(object.expiryBlockTime) ? fromJsonTimestamp(object.expiryBlockTime) : undefined,
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      sentAt: isSet(object.sentAt) ? fromJsonTimestamp(object.sentAt) : undefined,
    };
  },

  toJSON(message: RelayDetails): unknown {
    const obj: any = {};
    message.feeReceiverAddress !== undefined && (obj.feeReceiverAddress = message.feeReceiverAddress);
    message.feeSenderAddress !== undefined && (obj.feeSenderAddress = message.feeSenderAddress);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    message.expiryBlockTime !== undefined && (obj.expiryBlockTime = message.expiryBlockTime.toISOString());
    message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
    message.sentAt !== undefined && (obj.sentAt = message.sentAt.toISOString());
    return obj;
  },

  create(base?: DeepPartial<RelayDetails>): RelayDetails {
    return RelayDetails.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RelayDetails>): RelayDetails {
    const message = createBaseRelayDetails();
    message.feeReceiverAddress = object.feeReceiverAddress ?? "";
    message.feeSenderAddress = object.feeSenderAddress ?? "";
    message.fee = (object.fee !== undefined && object.fee !== null) ? Coin.fromPartial(object.fee) : undefined;
    message.expiryBlockTime = object.expiryBlockTime ?? undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.sentAt = object.sentAt ?? undefined;
    return message;
  },
};

function createBaseWithdrawal(): Withdrawal {
  return {
    creator: "",
    denom: "",
    amount: "",
    usdValue: "",
    timestamp: undefined,
    bridgeId: Long.UZERO,
    nonce: Long.UZERO,
    srcChannel: "",
  };
}

export const Withdrawal = {
  encode(message: Withdrawal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.usdValue !== "") {
      writer.uint32(34).string(message.usdValue);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
    }
    if (!message.bridgeId.isZero()) {
      writer.uint32(48).uint64(message.bridgeId);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(56).uint64(message.nonce);
    }
    if (message.srcChannel !== "") {
      writer.uint32(66).string(message.srcChannel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Withdrawal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawal();
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

          message.usdValue = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.bridgeId = reader.uint64() as Long;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.nonce = reader.uint64() as Long;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.srcChannel = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Withdrawal {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      usdValue: isSet(object.usdValue) ? String(object.usdValue) : "",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      bridgeId: isSet(object.bridgeId) ? Long.fromValue(object.bridgeId) : Long.UZERO,
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      srcChannel: isSet(object.srcChannel) ? String(object.srcChannel) : "",
    };
  },

  toJSON(message: Withdrawal): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.usdValue !== undefined && (obj.usdValue = message.usdValue);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    message.bridgeId !== undefined && (obj.bridgeId = (message.bridgeId || Long.UZERO).toString());
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.srcChannel !== undefined && (obj.srcChannel = message.srcChannel);
    return obj;
  },

  create(base?: DeepPartial<Withdrawal>): Withdrawal {
    return Withdrawal.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Withdrawal>): Withdrawal {
    const message = createBaseWithdrawal();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.usdValue = object.usdValue ?? "";
    message.timestamp = object.timestamp ?? undefined;
    message.bridgeId = (object.bridgeId !== undefined && object.bridgeId !== null)
      ? Long.fromValue(object.bridgeId)
      : Long.UZERO;
    message.nonce = (object.nonce !== undefined && object.nonce !== null) ? Long.fromValue(object.nonce) : Long.UZERO;
    message.srcChannel = object.srcChannel ?? "";
    return message;
  },
};

function createBaseWithdrawals(): Withdrawals {
  return { withdrawals: [] };
}

export const Withdrawals = {
  encode(message: Withdrawals, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.withdrawals) {
      Withdrawal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Withdrawals {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawals();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.withdrawals.push(Withdrawal.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Withdrawals {
    return {
      withdrawals: Array.isArray(object?.withdrawals) ? object.withdrawals.map((e: any) => Withdrawal.fromJSON(e)) : [],
    };
  },

  toJSON(message: Withdrawals): unknown {
    const obj: any = {};
    if (message.withdrawals) {
      obj.withdrawals = message.withdrawals.map((e) => e ? Withdrawal.toJSON(e) : undefined);
    } else {
      obj.withdrawals = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Withdrawals>): Withdrawals {
    return Withdrawals.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Withdrawals>): Withdrawals {
    const message = createBaseWithdrawals();
    message.withdrawals = object.withdrawals?.map((e) => Withdrawal.fromPartial(e)) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds.toNumber() || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
