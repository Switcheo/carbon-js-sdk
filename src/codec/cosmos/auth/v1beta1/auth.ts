/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";

export const protobufPackage = "cosmos.auth.v1beta1";

/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 */
export interface BaseAccount {
  address: string;
  pubKey?: Any;
  accountNumber: Long;
  sequence: Long;
}

/** ModuleAccount defines an account for modules that holds coins on a pool. */
export interface ModuleAccount {
  baseAccount?: BaseAccount;
  name: string;
  permissions: string[];
}

/**
 * ModuleCredential represents a unclaimable pubkey for base accounts controlled by modules.
 *
 * Since: cosmos-sdk 0.47
 */
export interface ModuleCredential {
  /** module_name is the name of the module used for address derivation (passed into address.Module). */
  moduleName: string;
  /**
   * derivation_keys is for deriving a module account address (passed into address.Module)
   * adding more keys creates sub-account addresses (passed into address.Derive)
   */
  derivationKeys: Uint8Array[];
}

/** Params defines the parameters for the auth module. */
export interface Params {
  maxMemoCharacters: Long;
  txSigLimit: Long;
  txSizeCostPerByte: Long;
  sigVerifyCostEd25519: Long;
  sigVerifyCostSecp256k1: Long;
}

function createBaseBaseAccount(): BaseAccount {
  return { address: "", pubKey: undefined, accountNumber: Long.UZERO, sequence: Long.UZERO };
}

export const BaseAccount = {
  encode(message: BaseAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pubKey !== undefined) {
      Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    if (!message.accountNumber.isZero()) {
      writer.uint32(24).uint64(message.accountNumber);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(32).uint64(message.sequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BaseAccount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pubKey = Any.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.accountNumber = reader.uint64() as Long;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.sequence = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BaseAccount {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pubKey: isSet(object.pubKey) ? Any.fromJSON(object.pubKey) : undefined,
      accountNumber: isSet(object.accountNumber) ? Long.fromValue(object.accountNumber) : Long.UZERO,
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
    };
  },

  toJSON(message: BaseAccount): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? Any.toJSON(message.pubKey) : undefined);
    message.accountNumber !== undefined && (obj.accountNumber = (message.accountNumber || Long.UZERO).toString());
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<BaseAccount>): BaseAccount {
    return BaseAccount.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<BaseAccount>): BaseAccount {
    const message = createBaseBaseAccount();
    message.address = object.address ?? "";
    message.pubKey = (object.pubKey !== undefined && object.pubKey !== null)
      ? Any.fromPartial(object.pubKey)
      : undefined;
    message.accountNumber = (object.accountNumber !== undefined && object.accountNumber !== null)
      ? Long.fromValue(object.accountNumber)
      : Long.UZERO;
    message.sequence = (object.sequence !== undefined && object.sequence !== null)
      ? Long.fromValue(object.sequence)
      : Long.UZERO;
    return message;
  },
};

function createBaseModuleAccount(): ModuleAccount {
  return { baseAccount: undefined, name: "", permissions: [] };
}

export const ModuleAccount = {
  encode(message: ModuleAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseAccount !== undefined) {
      BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.permissions) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleAccount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.baseAccount = BaseAccount.decode(reader, reader.uint32());
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

          message.permissions.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ModuleAccount {
    return {
      baseAccount: isSet(object.baseAccount) ? BaseAccount.fromJSON(object.baseAccount) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      permissions: Array.isArray(object?.permissions) ? object.permissions.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: ModuleAccount): unknown {
    const obj: any = {};
    message.baseAccount !== undefined &&
      (obj.baseAccount = message.baseAccount ? BaseAccount.toJSON(message.baseAccount) : undefined);
    message.name !== undefined && (obj.name = message.name);
    if (message.permissions) {
      obj.permissions = message.permissions.map((e) => e);
    } else {
      obj.permissions = [];
    }
    return obj;
  },

  create(base?: DeepPartial<ModuleAccount>): ModuleAccount {
    return ModuleAccount.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ModuleAccount>): ModuleAccount {
    const message = createBaseModuleAccount();
    message.baseAccount = (object.baseAccount !== undefined && object.baseAccount !== null)
      ? BaseAccount.fromPartial(object.baseAccount)
      : undefined;
    message.name = object.name ?? "";
    message.permissions = object.permissions?.map((e) => e) || [];
    return message;
  },
};

function createBaseModuleCredential(): ModuleCredential {
  return { moduleName: "", derivationKeys: [] };
}

export const ModuleCredential = {
  encode(message: ModuleCredential, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    for (const v of message.derivationKeys) {
      writer.uint32(18).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleCredential {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleCredential();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.moduleName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.derivationKeys.push(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ModuleCredential {
    return {
      moduleName: isSet(object.moduleName) ? String(object.moduleName) : "",
      derivationKeys: Array.isArray(object?.derivationKeys)
        ? object.derivationKeys.map((e: any) => bytesFromBase64(e))
        : [],
    };
  },

  toJSON(message: ModuleCredential): unknown {
    const obj: any = {};
    message.moduleName !== undefined && (obj.moduleName = message.moduleName);
    if (message.derivationKeys) {
      obj.derivationKeys = message.derivationKeys.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.derivationKeys = [];
    }
    return obj;
  },

  create(base?: DeepPartial<ModuleCredential>): ModuleCredential {
    return ModuleCredential.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ModuleCredential>): ModuleCredential {
    const message = createBaseModuleCredential();
    message.moduleName = object.moduleName ?? "";
    message.derivationKeys = object.derivationKeys?.map((e) => e) || [];
    return message;
  },
};

function createBaseParams(): Params {
  return {
    maxMemoCharacters: Long.UZERO,
    txSigLimit: Long.UZERO,
    txSizeCostPerByte: Long.UZERO,
    sigVerifyCostEd25519: Long.UZERO,
    sigVerifyCostSecp256k1: Long.UZERO,
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.maxMemoCharacters.isZero()) {
      writer.uint32(8).uint64(message.maxMemoCharacters);
    }
    if (!message.txSigLimit.isZero()) {
      writer.uint32(16).uint64(message.txSigLimit);
    }
    if (!message.txSizeCostPerByte.isZero()) {
      writer.uint32(24).uint64(message.txSizeCostPerByte);
    }
    if (!message.sigVerifyCostEd25519.isZero()) {
      writer.uint32(32).uint64(message.sigVerifyCostEd25519);
    }
    if (!message.sigVerifyCostSecp256k1.isZero()) {
      writer.uint32(40).uint64(message.sigVerifyCostSecp256k1);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.maxMemoCharacters = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.txSigLimit = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.txSizeCostPerByte = reader.uint64() as Long;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.sigVerifyCostEd25519 = reader.uint64() as Long;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.sigVerifyCostSecp256k1 = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      maxMemoCharacters: isSet(object.maxMemoCharacters) ? Long.fromValue(object.maxMemoCharacters) : Long.UZERO,
      txSigLimit: isSet(object.txSigLimit) ? Long.fromValue(object.txSigLimit) : Long.UZERO,
      txSizeCostPerByte: isSet(object.txSizeCostPerByte) ? Long.fromValue(object.txSizeCostPerByte) : Long.UZERO,
      sigVerifyCostEd25519: isSet(object.sigVerifyCostEd25519)
        ? Long.fromValue(object.sigVerifyCostEd25519)
        : Long.UZERO,
      sigVerifyCostSecp256k1: isSet(object.sigVerifyCostSecp256k1)
        ? Long.fromValue(object.sigVerifyCostSecp256k1)
        : Long.UZERO,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maxMemoCharacters !== undefined &&
      (obj.maxMemoCharacters = (message.maxMemoCharacters || Long.UZERO).toString());
    message.txSigLimit !== undefined && (obj.txSigLimit = (message.txSigLimit || Long.UZERO).toString());
    message.txSizeCostPerByte !== undefined &&
      (obj.txSizeCostPerByte = (message.txSizeCostPerByte || Long.UZERO).toString());
    message.sigVerifyCostEd25519 !== undefined &&
      (obj.sigVerifyCostEd25519 = (message.sigVerifyCostEd25519 || Long.UZERO).toString());
    message.sigVerifyCostSecp256k1 !== undefined &&
      (obj.sigVerifyCostSecp256k1 = (message.sigVerifyCostSecp256k1 || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<Params>): Params {
    return Params.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.maxMemoCharacters = (object.maxMemoCharacters !== undefined && object.maxMemoCharacters !== null)
      ? Long.fromValue(object.maxMemoCharacters)
      : Long.UZERO;
    message.txSigLimit = (object.txSigLimit !== undefined && object.txSigLimit !== null)
      ? Long.fromValue(object.txSigLimit)
      : Long.UZERO;
    message.txSizeCostPerByte = (object.txSizeCostPerByte !== undefined && object.txSizeCostPerByte !== null)
      ? Long.fromValue(object.txSizeCostPerByte)
      : Long.UZERO;
    message.sigVerifyCostEd25519 = (object.sigVerifyCostEd25519 !== undefined && object.sigVerifyCostEd25519 !== null)
      ? Long.fromValue(object.sigVerifyCostEd25519)
      : Long.UZERO;
    message.sigVerifyCostSecp256k1 =
      (object.sigVerifyCostSecp256k1 !== undefined && object.sigVerifyCostSecp256k1 !== null)
        ? Long.fromValue(object.sigVerifyCostSecp256k1)
        : Long.UZERO;
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
