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
  owner: string;
  ownerLocker: string;
  description: string;
  /** profit share to charge on a profitable trade to vault in decimal */
  profitShare: string;
  /** deposit fee to charge on a successful deposit to pool in decimal */
  depositFee: string;
  /** withdrawal fee to charge on a successful withdrawal from pool in decimal */
  withdrawalFee: string;
  isClosed: boolean;
}

export interface UpdateUserVaultParams {
  depositFee: string;
  withdrawalFee: string;
  profitShare: string;
  description?: string;
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

function createBaseUserVault(): UserVault {
  return {
    id: Long.UZERO,
    name: "",
    depositDenom: "",
    shareDenom: "",
    vaultAddress: "",
    owner: "",
    ownerLocker: "",
    description: "",
    profitShare: "",
    depositFee: "",
    withdrawalFee: "",
    isClosed: false,
  };
}

export const UserVault = {
  encode(message: UserVault, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.owner !== "") {
      writer.uint32(50).string(message.owner);
    }
    if (message.ownerLocker !== "") {
      writer.uint32(58).string(message.ownerLocker);
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
    if (message.isClosed === true) {
      writer.uint32(96).bool(message.isClosed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserVault {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserVault();
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
          if (tag !== 26) {
            break;
          }

          message.depositDenom = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.shareDenom = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.vaultAddress = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.ownerLocker = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.description = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.profitShare = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.depositFee = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.withdrawalFee = reader.string();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.isClosed = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserVault {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      name: isSet(object.name) ? String(object.name) : "",
      depositDenom: isSet(object.depositDenom) ? String(object.depositDenom) : "",
      shareDenom: isSet(object.shareDenom) ? String(object.shareDenom) : "",
      vaultAddress: isSet(object.vaultAddress) ? String(object.vaultAddress) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      ownerLocker: isSet(object.ownerLocker) ? String(object.ownerLocker) : "",
      description: isSet(object.description) ? String(object.description) : "",
      profitShare: isSet(object.profitShare) ? String(object.profitShare) : "",
      depositFee: isSet(object.depositFee) ? String(object.depositFee) : "",
      withdrawalFee: isSet(object.withdrawalFee) ? String(object.withdrawalFee) : "",
      isClosed: isSet(object.isClosed) ? Boolean(object.isClosed) : false,
    };
  },

  toJSON(message: UserVault): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.name !== undefined && (obj.name = message.name);
    message.depositDenom !== undefined && (obj.depositDenom = message.depositDenom);
    message.shareDenom !== undefined && (obj.shareDenom = message.shareDenom);
    message.vaultAddress !== undefined && (obj.vaultAddress = message.vaultAddress);
    message.owner !== undefined && (obj.owner = message.owner);
    message.ownerLocker !== undefined && (obj.ownerLocker = message.ownerLocker);
    message.description !== undefined && (obj.description = message.description);
    message.profitShare !== undefined && (obj.profitShare = message.profitShare);
    message.depositFee !== undefined && (obj.depositFee = message.depositFee);
    message.withdrawalFee !== undefined && (obj.withdrawalFee = message.withdrawalFee);
    message.isClosed !== undefined && (obj.isClosed = message.isClosed);
    return obj;
  },

  create(base?: DeepPartial<UserVault>): UserVault {
    return UserVault.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UserVault>): UserVault {
    const message = createBaseUserVault();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.name = object.name ?? "";
    message.depositDenom = object.depositDenom ?? "";
    message.shareDenom = object.shareDenom ?? "";
    message.vaultAddress = object.vaultAddress ?? "";
    message.owner = object.owner ?? "";
    message.ownerLocker = object.ownerLocker ?? "";
    message.description = object.description ?? "";
    message.profitShare = object.profitShare ?? "";
    message.depositFee = object.depositFee ?? "";
    message.withdrawalFee = object.withdrawalFee ?? "";
    message.isClosed = object.isClosed ?? false;
    return message;
  },
};

function createBaseUpdateUserVaultParams(): UpdateUserVaultParams {
  return { depositFee: "", withdrawalFee: "", profitShare: "", description: undefined };
}

export const UpdateUserVaultParams = {
  encode(message: UpdateUserVaultParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      StringValue.encode({ value: message.description! }, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserVaultParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateUserVaultParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.depositFee = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.withdrawalFee = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.profitShare = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.description = StringValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateUserVaultParams {
    return {
      depositFee: isSet(object.depositFee) ? String(object.depositFee) : "",
      withdrawalFee: isSet(object.withdrawalFee) ? String(object.withdrawalFee) : "",
      profitShare: isSet(object.profitShare) ? String(object.profitShare) : "",
      description: isSet(object.description) ? String(object.description) : undefined,
    };
  },

  toJSON(message: UpdateUserVaultParams): unknown {
    const obj: any = {};
    message.depositFee !== undefined && (obj.depositFee = message.depositFee);
    message.withdrawalFee !== undefined && (obj.withdrawalFee = message.withdrawalFee);
    message.profitShare !== undefined && (obj.profitShare = message.profitShare);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },

  create(base?: DeepPartial<UpdateUserVaultParams>): UpdateUserVaultParams {
    return UpdateUserVaultParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateUserVaultParams>): UpdateUserVaultParams {
    const message = createBaseUpdateUserVaultParams();
    message.depositFee = object.depositFee ?? "";
    message.withdrawalFee = object.withdrawalFee ?? "";
    message.profitShare = object.profitShare ?? "";
    message.description = object.description ?? undefined;
    return message;
  },
};

function createBaseAddressToUserVaultsMapping(): AddressToUserVaultsMapping {
  return { id: Long.UZERO, address: "" };
}

export const AddressToUserVaultsMapping = {
  encode(message: AddressToUserVaultsMapping, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddressToUserVaultsMapping {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressToUserVaultsMapping();
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

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddressToUserVaultsMapping {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: AddressToUserVaultsMapping): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<AddressToUserVaultsMapping>): AddressToUserVaultsMapping {
    return AddressToUserVaultsMapping.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AddressToUserVaultsMapping>): AddressToUserVaultsMapping {
    const message = createBaseAddressToUserVaultsMapping();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseUserVaultWithdrawalRecord(): UserVaultWithdrawalRecord {
  return { vaultId: Long.UZERO, address: "", sharesAmount: "", processId: Long.UZERO, requestTime: undefined };
}

export const UserVaultWithdrawalRecord = {
  encode(message: UserVaultWithdrawalRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Timestamp.encode(toTimestamp(message.requestTime), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserVaultWithdrawalRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserVaultWithdrawalRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.vaultId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sharesAmount = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.processId = reader.uint64() as Long;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.requestTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserVaultWithdrawalRecord {
    return {
      vaultId: isSet(object.vaultId) ? Long.fromValue(object.vaultId) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : "",
      sharesAmount: isSet(object.sharesAmount) ? String(object.sharesAmount) : "",
      processId: isSet(object.processId) ? Long.fromValue(object.processId) : Long.UZERO,
      requestTime: isSet(object.requestTime) ? fromJsonTimestamp(object.requestTime) : undefined,
    };
  },

  toJSON(message: UserVaultWithdrawalRecord): unknown {
    const obj: any = {};
    message.vaultId !== undefined && (obj.vaultId = (message.vaultId || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    message.sharesAmount !== undefined && (obj.sharesAmount = message.sharesAmount);
    message.processId !== undefined && (obj.processId = (message.processId || Long.UZERO).toString());
    message.requestTime !== undefined && (obj.requestTime = message.requestTime.toISOString());
    return obj;
  },

  create(base?: DeepPartial<UserVaultWithdrawalRecord>): UserVaultWithdrawalRecord {
    return UserVaultWithdrawalRecord.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UserVaultWithdrawalRecord>): UserVaultWithdrawalRecord {
    const message = createBaseUserVaultWithdrawalRecord();
    message.vaultId = (object.vaultId !== undefined && object.vaultId !== null)
      ? Long.fromValue(object.vaultId)
      : Long.UZERO;
    message.address = object.address ?? "";
    message.sharesAmount = object.sharesAmount ?? "";
    message.processId = (object.processId !== undefined && object.processId !== null)
      ? Long.fromValue(object.processId)
      : Long.UZERO;
    message.requestTime = object.requestTime ?? undefined;
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
