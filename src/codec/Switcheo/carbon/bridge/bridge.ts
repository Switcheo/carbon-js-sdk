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

const baseBridgeState: object = { id: Long.UZERO, name: "", isEnabled: false };

export const BridgeState = {
  encode(
    message: BridgeState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBridgeState } as BridgeState;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
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
      object.id !== undefined && object.id !== null
        ? Long.fromString(object.id)
        : Long.UZERO;
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
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.name !== undefined && (obj.name = message.name);
    message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
    return obj;
  },

  fromPartial(object: DeepPartial<BridgeState>): BridgeState {
    const message = { ...baseBridgeState } as BridgeState;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.name = object.name ?? "";
    message.isEnabled = object.isEnabled ?? false;
    return message;
  },
};

const baseConnection: object = {
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

export const Connection = {
  encode(
    message: Connection,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
          message.bridgeId = reader.uint64() as Long;
          break;
        case 3:
          message.chainId = reader.string();
          break;
        case 4:
          message.chainDisplayName = reader.string();
          break;
        case 5:
          message.gatewayAddress = reader.string();
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
        case 9:
          message.isOptimisticConfirm = reader.bool();
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
    message.gatewayAddress =
      object.gatewayAddress !== undefined && object.gatewayAddress !== null
        ? String(object.gatewayAddress)
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
    message.isOptimisticConfirm =
      object.isOptimisticConfirm !== undefined &&
      object.isOptimisticConfirm !== null
        ? Boolean(object.isOptimisticConfirm)
        : false;
    return message;
  },

  toJSON(message: Connection): unknown {
    const obj: any = {};
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.bridgeId !== undefined &&
      (obj.bridgeId = (message.bridgeId || Long.UZERO).toString());
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.chainDisplayName !== undefined &&
      (obj.chainDisplayName = message.chainDisplayName);
    message.gatewayAddress !== undefined &&
      (obj.gatewayAddress = message.gatewayAddress);
    message.encoding !== undefined && (obj.encoding = message.encoding);
    message.escrowAddress !== undefined &&
      (obj.escrowAddress = message.escrowAddress);
    message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
    message.isOptimisticConfirm !== undefined &&
      (obj.isOptimisticConfirm = message.isOptimisticConfirm);
    return obj;
  },

  fromPartial(object: DeepPartial<Connection>): Connection {
    const message = { ...baseConnection } as Connection;
    message.connectionId = object.connectionId ?? "";
    message.bridgeId =
      object.bridgeId !== undefined && object.bridgeId !== null
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

const baseControllerContracts: object = { id: "", tokenController: "" };

export const ControllerContracts = {
  encode(
    message: ControllerContracts,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.tokenController !== "") {
      writer.uint32(18).string(message.tokenController);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControllerContracts {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseControllerContracts } as ControllerContracts;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.tokenController = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControllerContracts {
    const message = { ...baseControllerContracts } as ControllerContracts;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.tokenController =
      object.tokenController !== undefined && object.tokenController !== null
        ? String(object.tokenController)
        : "";
    return message;
  },

  toJSON(message: ControllerContracts): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.tokenController !== undefined &&
      (obj.tokenController = message.tokenController);
    return obj;
  },

  fromPartial(object: DeepPartial<ControllerContracts>): ControllerContracts {
    const message = { ...baseControllerContracts } as ControllerContracts;
    message.id = object.id ?? "";
    message.tokenController = object.tokenController ?? "";
    return message;
  },
};

const baseControllersToUpdate: object = {};

export const ControllersToUpdate = {
  encode(
    message: ControllersToUpdate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tokenController !== undefined) {
      StringValue.encode(
        { value: message.tokenController! },
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControllersToUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseControllersToUpdate } as ControllersToUpdate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenController = StringValue.decode(
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

  fromJSON(object: any): ControllersToUpdate {
    const message = { ...baseControllersToUpdate } as ControllersToUpdate;
    message.tokenController =
      object.tokenController !== undefined && object.tokenController !== null
        ? String(object.tokenController)
        : undefined;
    return message;
  },

  toJSON(message: ControllersToUpdate): unknown {
    const obj: any = {};
    message.tokenController !== undefined &&
      (obj.tokenController = message.tokenController);
    return obj;
  },

  fromPartial(object: DeepPartial<ControllersToUpdate>): ControllersToUpdate {
    const message = { ...baseControllersToUpdate } as ControllersToUpdate;
    message.tokenController = object.tokenController ?? undefined;
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

const baseRelayDetails: object = {
  feeReceiverAddress: "",
  feeSenderAddress: "",
};

export const RelayDetails = {
  encode(
    message: RelayDetails,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      Timestamp.encode(
        toTimestamp(message.expiryBlockTime),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.sentAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.sentAt),
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RelayDetails {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRelayDetails } as RelayDetails;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeReceiverAddress = reader.string();
          break;
        case 2:
          message.feeSenderAddress = reader.string();
          break;
        case 3:
          message.fee = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.expiryBlockTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.sentAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RelayDetails {
    const message = { ...baseRelayDetails } as RelayDetails;
    message.feeReceiverAddress =
      object.feeReceiverAddress !== undefined &&
      object.feeReceiverAddress !== null
        ? String(object.feeReceiverAddress)
        : "";
    message.feeSenderAddress =
      object.feeSenderAddress !== undefined && object.feeSenderAddress !== null
        ? String(object.feeSenderAddress)
        : "";
    message.fee =
      object.fee !== undefined && object.fee !== null
        ? Coin.fromJSON(object.fee)
        : undefined;
    message.expiryBlockTime =
      object.expiryBlockTime !== undefined && object.expiryBlockTime !== null
        ? fromJsonTimestamp(object.expiryBlockTime)
        : undefined;
    message.createdAt =
      object.createdAt !== undefined && object.createdAt !== null
        ? fromJsonTimestamp(object.createdAt)
        : undefined;
    message.sentAt =
      object.sentAt !== undefined && object.sentAt !== null
        ? fromJsonTimestamp(object.sentAt)
        : undefined;
    return message;
  },

  toJSON(message: RelayDetails): unknown {
    const obj: any = {};
    message.feeReceiverAddress !== undefined &&
      (obj.feeReceiverAddress = message.feeReceiverAddress);
    message.feeSenderAddress !== undefined &&
      (obj.feeSenderAddress = message.feeSenderAddress);
    message.fee !== undefined &&
      (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    message.expiryBlockTime !== undefined &&
      (obj.expiryBlockTime = message.expiryBlockTime.toISOString());
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.sentAt !== undefined && (obj.sentAt = message.sentAt.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<RelayDetails>): RelayDetails {
    const message = { ...baseRelayDetails } as RelayDetails;
    message.feeReceiverAddress = object.feeReceiverAddress ?? "";
    message.feeSenderAddress = object.feeSenderAddress ?? "";
    message.fee =
      object.fee !== undefined && object.fee !== null
        ? Coin.fromPartial(object.fee)
        : undefined;
    message.expiryBlockTime = object.expiryBlockTime ?? undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.sentAt = object.sentAt ?? undefined;
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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
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
