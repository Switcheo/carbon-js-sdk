/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { StringValue } from "../../../google/protobuf/wrappers";

export const protobufPackage = "Switcheo.carbon.perpspool";

export interface UserVault {
  /** auto-incrementing id */
  id: Long;
  /** admin/govt determined name */
  name: string;
  /** deposit_denom for nav token that will be used to provide liquidity */
  depositDenom: string;
  /**
   * auto-generated denom for the share token that can be used to redeem
   * deposited token
   */
  shareDenom: string;
  /** auto-created address of the vault that stores the tokens */
  vaultAddress: string;
  /** defines the type of the pool, user vault or perps pool */
  vaultType: Long;
  /** optional fields for user vault */
  owner: string;
  description: string;
  /** profit share to charge on a profitable trade to vault in decimal */
  profitShare: string;
  /** deposit fee to charge on a successful deposit to pool in decimal */
  depositFee: string;
  /** withdrawal fee to charge on a successful withdrawal from pool in decimal */
  withdrawalFee: string;
  controllers: string[];
}

export interface UpdateUserVaultParams {
  depositFee: string;
  withdrawalFee: string;
  profitShare: string;
  description?: string;
}

/**
 * UserVaultUserRecord used to store information specific to user vault features
 * for a user like the last deposit time for the withdrawal cooldown
 */
export interface UserVaultUserRecord {
  vaultId: Long;
  address: string;
  lastDepositTime?: Date;
}

export interface AddressToUserVaultsMapping {
  id: Long;
  address: string;
}

export interface UserVaultWithdrawalRecord {
  vaultId: Long;
  address: string;
  sharesAmount: string;
  processId: Long;
  requestTime?: Date;
}

const baseUserVault: object = {
  id: Long.UZERO,
  name: "",
  depositDenom: "",
  shareDenom: "",
  vaultAddress: "",
  vaultType: Long.UZERO,
  owner: "",
  description: "",
  profitShare: "",
  depositFee: "",
  withdrawalFee: "",
  controllers: "",
};

export const UserVault = {
  encode(
    message: UserVault,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.depositDenom !== "") {
      writer.uint32(26).string(message.depositDenom);
    }
    if (message.shareDenom !== "") {
      writer.uint32(34).string(message.shareDenom);
    }
    if (message.vaultAddress !== "") {
      writer.uint32(42).string(message.vaultAddress);
    }
    if (!message.vaultType.isZero()) {
      writer.uint32(48).uint64(message.vaultType);
    }
    if (message.owner !== "") {
      writer.uint32(58).string(message.owner);
    }
    if (message.description !== "") {
      writer.uint32(66).string(message.description);
    }
    if (message.profitShare !== "") {
      writer.uint32(74).string(message.profitShare);
    }
    if (message.depositFee !== "") {
      writer.uint32(82).string(message.depositFee);
    }
    if (message.withdrawalFee !== "") {
      writer.uint32(90).string(message.withdrawalFee);
    }
    for (const v of message.controllers) {
      writer.uint32(98).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserVault {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUserVault } as UserVault;
    message.controllers = [];
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
          message.depositDenom = reader.string();
          break;
        case 4:
          message.shareDenom = reader.string();
          break;
        case 5:
          message.vaultAddress = reader.string();
          break;
        case 6:
          message.vaultType = reader.uint64() as Long;
          break;
        case 7:
          message.owner = reader.string();
          break;
        case 8:
          message.description = reader.string();
          break;
        case 9:
          message.profitShare = reader.string();
          break;
        case 10:
          message.depositFee = reader.string();
          break;
        case 11:
          message.withdrawalFee = reader.string();
          break;
        case 12:
          message.controllers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserVault {
    const message = { ...baseUserVault } as UserVault;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromString(object.id)
        : Long.UZERO;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.depositDenom =
      object.depositDenom !== undefined && object.depositDenom !== null
        ? String(object.depositDenom)
        : "";
    message.shareDenom =
      object.shareDenom !== undefined && object.shareDenom !== null
        ? String(object.shareDenom)
        : "";
    message.vaultAddress =
      object.vaultAddress !== undefined && object.vaultAddress !== null
        ? String(object.vaultAddress)
        : "";
    message.vaultType =
      object.vaultType !== undefined && object.vaultType !== null
        ? Long.fromString(object.vaultType)
        : Long.UZERO;
    message.owner =
      object.owner !== undefined && object.owner !== null
        ? String(object.owner)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.profitShare =
      object.profitShare !== undefined && object.profitShare !== null
        ? String(object.profitShare)
        : "";
    message.depositFee =
      object.depositFee !== undefined && object.depositFee !== null
        ? String(object.depositFee)
        : "";
    message.withdrawalFee =
      object.withdrawalFee !== undefined && object.withdrawalFee !== null
        ? String(object.withdrawalFee)
        : "";
    message.controllers = (object.controllers ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: UserVault): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.name !== undefined && (obj.name = message.name);
    message.depositDenom !== undefined &&
      (obj.depositDenom = message.depositDenom);
    message.shareDenom !== undefined && (obj.shareDenom = message.shareDenom);
    message.vaultAddress !== undefined &&
      (obj.vaultAddress = message.vaultAddress);
    message.vaultType !== undefined &&
      (obj.vaultType = (message.vaultType || Long.UZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.description !== undefined &&
      (obj.description = message.description);
    message.profitShare !== undefined &&
      (obj.profitShare = message.profitShare);
    message.depositFee !== undefined && (obj.depositFee = message.depositFee);
    message.withdrawalFee !== undefined &&
      (obj.withdrawalFee = message.withdrawalFee);
    if (message.controllers) {
      obj.controllers = message.controllers.map((e) => e);
    } else {
      obj.controllers = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<UserVault>): UserVault {
    const message = { ...baseUserVault } as UserVault;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.name = object.name ?? "";
    message.depositDenom = object.depositDenom ?? "";
    message.shareDenom = object.shareDenom ?? "";
    message.vaultAddress = object.vaultAddress ?? "";
    message.vaultType =
      object.vaultType !== undefined && object.vaultType !== null
        ? Long.fromValue(object.vaultType)
        : Long.UZERO;
    message.owner = object.owner ?? "";
    message.description = object.description ?? "";
    message.profitShare = object.profitShare ?? "";
    message.depositFee = object.depositFee ?? "";
    message.withdrawalFee = object.withdrawalFee ?? "";
    message.controllers = (object.controllers ?? []).map((e) => e);
    return message;
  },
};

const baseUpdateUserVaultParams: object = {
  depositFee: "",
  withdrawalFee: "",
  profitShare: "",
};

export const UpdateUserVaultParams = {
  encode(
    message: UpdateUserVaultParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.depositFee !== "") {
      writer.uint32(10).string(message.depositFee);
    }
    if (message.withdrawalFee !== "") {
      writer.uint32(18).string(message.withdrawalFee);
    }
    if (message.profitShare !== "") {
      writer.uint32(26).string(message.profitShare);
    }
    if (message.description !== undefined) {
      StringValue.encode(
        { value: message.description! },
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateUserVaultParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateUserVaultParams } as UpdateUserVaultParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositFee = reader.string();
          break;
        case 2:
          message.withdrawalFee = reader.string();
          break;
        case 3:
          message.profitShare = reader.string();
          break;
        case 4:
          message.description = StringValue.decode(
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

  fromJSON(object: any): UpdateUserVaultParams {
    const message = { ...baseUpdateUserVaultParams } as UpdateUserVaultParams;
    message.depositFee =
      object.depositFee !== undefined && object.depositFee !== null
        ? String(object.depositFee)
        : "";
    message.withdrawalFee =
      object.withdrawalFee !== undefined && object.withdrawalFee !== null
        ? String(object.withdrawalFee)
        : "";
    message.profitShare =
      object.profitShare !== undefined && object.profitShare !== null
        ? String(object.profitShare)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : undefined;
    return message;
  },

  toJSON(message: UpdateUserVaultParams): unknown {
    const obj: any = {};
    message.depositFee !== undefined && (obj.depositFee = message.depositFee);
    message.withdrawalFee !== undefined &&
      (obj.withdrawalFee = message.withdrawalFee);
    message.profitShare !== undefined &&
      (obj.profitShare = message.profitShare);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateUserVaultParams>
  ): UpdateUserVaultParams {
    const message = { ...baseUpdateUserVaultParams } as UpdateUserVaultParams;
    message.depositFee = object.depositFee ?? "";
    message.withdrawalFee = object.withdrawalFee ?? "";
    message.profitShare = object.profitShare ?? "";
    message.description = object.description ?? undefined;
    return message;
  },
};

const baseUserVaultUserRecord: object = { vaultId: Long.UZERO, address: "" };

export const UserVaultUserRecord = {
  encode(
    message: UserVaultUserRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.vaultId.isZero()) {
      writer.uint32(8).uint64(message.vaultId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.lastDepositTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastDepositTime),
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserVaultUserRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUserVaultUserRecord } as UserVaultUserRecord;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaultId = reader.uint64() as Long;
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.lastDepositTime = fromTimestamp(
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

  fromJSON(object: any): UserVaultUserRecord {
    const message = { ...baseUserVaultUserRecord } as UserVaultUserRecord;
    message.vaultId =
      object.vaultId !== undefined && object.vaultId !== null
        ? Long.fromString(object.vaultId)
        : Long.UZERO;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.lastDepositTime =
      object.lastDepositTime !== undefined && object.lastDepositTime !== null
        ? fromJsonTimestamp(object.lastDepositTime)
        : undefined;
    return message;
  },

  toJSON(message: UserVaultUserRecord): unknown {
    const obj: any = {};
    message.vaultId !== undefined &&
      (obj.vaultId = (message.vaultId || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    message.lastDepositTime !== undefined &&
      (obj.lastDepositTime = message.lastDepositTime.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<UserVaultUserRecord>): UserVaultUserRecord {
    const message = { ...baseUserVaultUserRecord } as UserVaultUserRecord;
    message.vaultId =
      object.vaultId !== undefined && object.vaultId !== null
        ? Long.fromValue(object.vaultId)
        : Long.UZERO;
    message.address = object.address ?? "";
    message.lastDepositTime = object.lastDepositTime ?? undefined;
    return message;
  },
};

const baseAddressToUserVaultsMapping: object = { id: Long.UZERO, address: "" };

export const AddressToUserVaultsMapping = {
  encode(
    message: AddressToUserVaultsMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddressToUserVaultsMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddressToUserVaultsMapping,
    } as AddressToUserVaultsMapping;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
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

  fromJSON(object: any): AddressToUserVaultsMapping {
    const message = {
      ...baseAddressToUserVaultsMapping,
    } as AddressToUserVaultsMapping;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromString(object.id)
        : Long.UZERO;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: AddressToUserVaultsMapping): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AddressToUserVaultsMapping>
  ): AddressToUserVaultsMapping {
    const message = {
      ...baseAddressToUserVaultsMapping,
    } as AddressToUserVaultsMapping;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.address = object.address ?? "";
    return message;
  },
};

const baseUserVaultWithdrawalRecord: object = {
  vaultId: Long.UZERO,
  address: "",
  sharesAmount: "",
  processId: Long.UZERO,
};

export const UserVaultWithdrawalRecord = {
  encode(
    message: UserVaultWithdrawalRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.vaultId.isZero()) {
      writer.uint32(8).uint64(message.vaultId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.sharesAmount !== "") {
      writer.uint32(26).string(message.sharesAmount);
    }
    if (!message.processId.isZero()) {
      writer.uint32(32).uint64(message.processId);
    }
    if (message.requestTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.requestTime),
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UserVaultWithdrawalRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUserVaultWithdrawalRecord,
    } as UserVaultWithdrawalRecord;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vaultId = reader.uint64() as Long;
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.sharesAmount = reader.string();
          break;
        case 4:
          message.processId = reader.uint64() as Long;
          break;
        case 5:
          message.requestTime = fromTimestamp(
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

  fromJSON(object: any): UserVaultWithdrawalRecord {
    const message = {
      ...baseUserVaultWithdrawalRecord,
    } as UserVaultWithdrawalRecord;
    message.vaultId =
      object.vaultId !== undefined && object.vaultId !== null
        ? Long.fromString(object.vaultId)
        : Long.UZERO;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.sharesAmount =
      object.sharesAmount !== undefined && object.sharesAmount !== null
        ? String(object.sharesAmount)
        : "";
    message.processId =
      object.processId !== undefined && object.processId !== null
        ? Long.fromString(object.processId)
        : Long.UZERO;
    message.requestTime =
      object.requestTime !== undefined && object.requestTime !== null
        ? fromJsonTimestamp(object.requestTime)
        : undefined;
    return message;
  },

  toJSON(message: UserVaultWithdrawalRecord): unknown {
    const obj: any = {};
    message.vaultId !== undefined &&
      (obj.vaultId = (message.vaultId || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    message.sharesAmount !== undefined &&
      (obj.sharesAmount = message.sharesAmount);
    message.processId !== undefined &&
      (obj.processId = (message.processId || Long.UZERO).toString());
    message.requestTime !== undefined &&
      (obj.requestTime = message.requestTime.toISOString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<UserVaultWithdrawalRecord>
  ): UserVaultWithdrawalRecord {
    const message = {
      ...baseUserVaultWithdrawalRecord,
    } as UserVaultWithdrawalRecord;
    message.vaultId =
      object.vaultId !== undefined && object.vaultId !== null
        ? Long.fromValue(object.vaultId)
        : Long.UZERO;
    message.address = object.address ?? "";
    message.sharesAmount = object.sharesAmount ?? "";
    message.processId =
      object.processId !== undefined && object.processId !== null
        ? Long.fromValue(object.processId)
        : Long.UZERO;
    message.requestTime = object.requestTime ?? undefined;
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
