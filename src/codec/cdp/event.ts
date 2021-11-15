/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { VaultType } from "../cdp/vault";

export const protobufPackage = "Switcheo.carbon.cdp";

export interface VaultTypeEvent {
  vaultType?: VaultType;
  creator: string;
}

export interface VaultEvent {
  type: string;
  vaultTypeId: Long;
  collateralAmount: string;
  debtAmount: string;
  address: string;
}

const baseVaultTypeEvent: object = { creator: "" };

export const VaultTypeEvent = {
  encode(
    message: VaultTypeEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.vaultType !== undefined) {
      VaultType.encode(message.vaultType, writer.uint32(10).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VaultTypeEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVaultTypeEvent } as VaultTypeEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaultType = VaultType.decode(reader, reader.uint32());
          break;
        case 2:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VaultTypeEvent {
    const message = { ...baseVaultTypeEvent } as VaultTypeEvent;
    if (object.vaultType !== undefined && object.vaultType !== null) {
      message.vaultType = VaultType.fromJSON(object.vaultType);
    } else {
      message.vaultType = undefined;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: VaultTypeEvent): unknown {
    const obj: any = {};
    message.vaultType !== undefined &&
      (obj.vaultType = message.vaultType
        ? VaultType.toJSON(message.vaultType)
        : undefined);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<VaultTypeEvent>): VaultTypeEvent {
    const message = { ...baseVaultTypeEvent } as VaultTypeEvent;
    if (object.vaultType !== undefined && object.vaultType !== null) {
      message.vaultType = VaultType.fromPartial(object.vaultType);
    } else {
      message.vaultType = undefined;
    }
    message.creator = object.creator ?? "";
    return message;
  },
};

const baseVaultEvent: object = {
  type: "",
  vaultTypeId: Long.UZERO,
  collateralAmount: "",
  debtAmount: "",
  address: "",
};

export const VaultEvent = {
  encode(
    message: VaultEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (!message.vaultTypeId.isZero()) {
      writer.uint32(16).uint64(message.vaultTypeId);
    }
    if (message.collateralAmount !== "") {
      writer.uint32(26).string(message.collateralAmount);
    }
    if (message.debtAmount !== "") {
      writer.uint32(34).string(message.debtAmount);
    }
    if (message.address !== "") {
      writer.uint32(42).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VaultEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVaultEvent } as VaultEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.vaultTypeId = reader.uint64() as Long;
          break;
        case 3:
          message.collateralAmount = reader.string();
          break;
        case 4:
          message.debtAmount = reader.string();
          break;
        case 5:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VaultEvent {
    const message = { ...baseVaultEvent } as VaultEvent;
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (object.vaultTypeId !== undefined && object.vaultTypeId !== null) {
      message.vaultTypeId = Long.fromString(object.vaultTypeId);
    } else {
      message.vaultTypeId = Long.UZERO;
    }
    if (
      object.collateralAmount !== undefined &&
      object.collateralAmount !== null
    ) {
      message.collateralAmount = String(object.collateralAmount);
    } else {
      message.collateralAmount = "";
    }
    if (object.debtAmount !== undefined && object.debtAmount !== null) {
      message.debtAmount = String(object.debtAmount);
    } else {
      message.debtAmount = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: VaultEvent): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.vaultTypeId !== undefined &&
      (obj.vaultTypeId = (message.vaultTypeId || Long.UZERO).toString());
    message.collateralAmount !== undefined &&
      (obj.collateralAmount = message.collateralAmount);
    message.debtAmount !== undefined && (obj.debtAmount = message.debtAmount);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<VaultEvent>): VaultEvent {
    const message = { ...baseVaultEvent } as VaultEvent;
    message.type = object.type ?? "";
    if (object.vaultTypeId !== undefined && object.vaultTypeId !== null) {
      message.vaultTypeId = object.vaultTypeId as Long;
    } else {
      message.vaultTypeId = Long.UZERO;
    }
    message.collateralAmount = object.collateralAmount ?? "";
    message.debtAmount = object.debtAmount ?? "";
    message.address = object.address ?? "";
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
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
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
