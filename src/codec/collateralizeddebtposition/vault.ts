/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage =
  "Switcheo.tradehubcosmos.collateralizeddebtposition";

export interface Vault {
  vaultTypeId: Long;
  address: string;
  collateral?: Coin;
  debt?: Coin;
}

export interface VaultType {
  vaultTypeId: Long;
  collateralDenom: string;
  collateralizationRatio: string;
  debtDenom: string;
}

const baseVault: object = { vaultTypeId: Long.UZERO, address: "" };

export const Vault = {
  encode(message: Vault, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.vaultTypeId.isZero()) {
      writer.uint32(8).uint64(message.vaultTypeId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(26).fork()).ldelim();
    }
    if (message.debt !== undefined) {
      Coin.encode(message.debt, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vault {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVault } as Vault;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaultTypeId = reader.uint64() as Long;
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.debt = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vault {
    const message = { ...baseVault } as Vault;
    if (object.vaultTypeId !== undefined && object.vaultTypeId !== null) {
      message.vaultTypeId = Long.fromString(object.vaultTypeId);
    } else {
      message.vaultTypeId = Long.UZERO;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromJSON(object.collateral);
    } else {
      message.collateral = undefined;
    }
    if (object.debt !== undefined && object.debt !== null) {
      message.debt = Coin.fromJSON(object.debt);
    } else {
      message.debt = undefined;
    }
    return message;
  },

  toJSON(message: Vault): unknown {
    const obj: any = {};
    message.vaultTypeId !== undefined &&
      (obj.vaultTypeId = (message.vaultTypeId || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    message.collateral !== undefined &&
      (obj.collateral = message.collateral
        ? Coin.toJSON(message.collateral)
        : undefined);
    message.debt !== undefined &&
      (obj.debt = message.debt ? Coin.toJSON(message.debt) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Vault>): Vault {
    const message = { ...baseVault } as Vault;
    if (object.vaultTypeId !== undefined && object.vaultTypeId !== null) {
      message.vaultTypeId = object.vaultTypeId as Long;
    } else {
      message.vaultTypeId = Long.UZERO;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromPartial(object.collateral);
    } else {
      message.collateral = undefined;
    }
    if (object.debt !== undefined && object.debt !== null) {
      message.debt = Coin.fromPartial(object.debt);
    } else {
      message.debt = undefined;
    }
    return message;
  },
};

const baseVaultType: object = {
  vaultTypeId: Long.UZERO,
  collateralDenom: "",
  collateralizationRatio: "",
  debtDenom: "",
};

export const VaultType = {
  encode(
    message: VaultType,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.vaultTypeId.isZero()) {
      writer.uint32(8).uint64(message.vaultTypeId);
    }
    if (message.collateralDenom !== "") {
      writer.uint32(18).string(message.collateralDenom);
    }
    if (message.collateralizationRatio !== "") {
      writer.uint32(26).string(message.collateralizationRatio);
    }
    if (message.debtDenom !== "") {
      writer.uint32(34).string(message.debtDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VaultType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVaultType } as VaultType;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaultTypeId = reader.uint64() as Long;
          break;
        case 2:
          message.collateralDenom = reader.string();
          break;
        case 3:
          message.collateralizationRatio = reader.string();
          break;
        case 4:
          message.debtDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VaultType {
    const message = { ...baseVaultType } as VaultType;
    if (object.vaultTypeId !== undefined && object.vaultTypeId !== null) {
      message.vaultTypeId = Long.fromString(object.vaultTypeId);
    } else {
      message.vaultTypeId = Long.UZERO;
    }
    if (
      object.collateralDenom !== undefined &&
      object.collateralDenom !== null
    ) {
      message.collateralDenom = String(object.collateralDenom);
    } else {
      message.collateralDenom = "";
    }
    if (
      object.collateralizationRatio !== undefined &&
      object.collateralizationRatio !== null
    ) {
      message.collateralizationRatio = String(object.collateralizationRatio);
    } else {
      message.collateralizationRatio = "";
    }
    if (object.debtDenom !== undefined && object.debtDenom !== null) {
      message.debtDenom = String(object.debtDenom);
    } else {
      message.debtDenom = "";
    }
    return message;
  },

  toJSON(message: VaultType): unknown {
    const obj: any = {};
    message.vaultTypeId !== undefined &&
      (obj.vaultTypeId = (message.vaultTypeId || Long.UZERO).toString());
    message.collateralDenom !== undefined &&
      (obj.collateralDenom = message.collateralDenom);
    message.collateralizationRatio !== undefined &&
      (obj.collateralizationRatio = message.collateralizationRatio);
    message.debtDenom !== undefined && (obj.debtDenom = message.debtDenom);
    return obj;
  },

  fromPartial(object: DeepPartial<VaultType>): VaultType {
    const message = { ...baseVaultType } as VaultType;
    if (object.vaultTypeId !== undefined && object.vaultTypeId !== null) {
      message.vaultTypeId = object.vaultTypeId as Long;
    } else {
      message.vaultTypeId = Long.UZERO;
    }
    if (
      object.collateralDenom !== undefined &&
      object.collateralDenom !== null
    ) {
      message.collateralDenom = object.collateralDenom;
    } else {
      message.collateralDenom = "";
    }
    if (
      object.collateralizationRatio !== undefined &&
      object.collateralizationRatio !== null
    ) {
      message.collateralizationRatio = object.collateralizationRatio;
    } else {
      message.collateralizationRatio = "";
    }
    if (object.debtDenom !== undefined && object.debtDenom !== null) {
      message.debtDenom = object.debtDenom;
    } else {
      message.debtDenom = "";
    }
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
