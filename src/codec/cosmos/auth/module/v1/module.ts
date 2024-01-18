/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cosmos.auth.module.v1";

/** Module is the config object for the auth module. */
export interface Module {
  /** bech32_prefix is the bech32 account prefix for the app. */
  bech32Prefix: string;
  /** module_account_permissions are module account permissions. */
  moduleAccountPermissions: ModuleAccountPermission[];
  /** authority defines the custom module authority. If not set, defaults to the governance module. */
  authority: string;
}

/** ModuleAccountPermission represents permissions for a module account. */
export interface ModuleAccountPermission {
  /** account is the name of the module. */
  account: string;
  /**
   * permissions are the permissions this module has. Currently recognized
   * values are minter, burner and staking.
   */
  permissions: string[];
}

const baseModule: object = { bech32Prefix: "", authority: "" };

export const Module = {
  encode(
    message: Module,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bech32Prefix !== "") {
      writer.uint32(10).string(message.bech32Prefix);
    }
    for (const v of message.moduleAccountPermissions) {
      ModuleAccountPermission.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.authority !== "") {
      writer.uint32(26).string(message.authority);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Module {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseModule } as Module;
    message.moduleAccountPermissions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bech32Prefix = reader.string();
          break;
        case 2:
          message.moduleAccountPermissions.push(
            ModuleAccountPermission.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Module {
    const message = { ...baseModule } as Module;
    message.bech32Prefix =
      object.bech32Prefix !== undefined && object.bech32Prefix !== null
        ? String(object.bech32Prefix)
        : "";
    message.moduleAccountPermissions = (
      object.moduleAccountPermissions ?? []
    ).map((e: any) => ModuleAccountPermission.fromJSON(e));
    message.authority =
      object.authority !== undefined && object.authority !== null
        ? String(object.authority)
        : "";
    return message;
  },

  toJSON(message: Module): unknown {
    const obj: any = {};
    message.bech32Prefix !== undefined &&
      (obj.bech32Prefix = message.bech32Prefix);
    if (message.moduleAccountPermissions) {
      obj.moduleAccountPermissions = message.moduleAccountPermissions.map((e) =>
        e ? ModuleAccountPermission.toJSON(e) : undefined
      );
    } else {
      obj.moduleAccountPermissions = [];
    }
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },

  fromPartial(object: DeepPartial<Module>): Module {
    const message = { ...baseModule } as Module;
    message.bech32Prefix = object.bech32Prefix ?? "";
    message.moduleAccountPermissions = (
      object.moduleAccountPermissions ?? []
    ).map((e) => ModuleAccountPermission.fromPartial(e));
    message.authority = object.authority ?? "";
    return message;
  },
};

const baseModuleAccountPermission: object = { account: "", permissions: "" };

export const ModuleAccountPermission = {
  encode(
    message: ModuleAccountPermission,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    for (const v of message.permissions) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ModuleAccountPermission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseModuleAccountPermission,
    } as ModuleAccountPermission;
    message.permissions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.permissions.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModuleAccountPermission {
    const message = {
      ...baseModuleAccountPermission,
    } as ModuleAccountPermission;
    message.account =
      object.account !== undefined && object.account !== null
        ? String(object.account)
        : "";
    message.permissions = (object.permissions ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: ModuleAccountPermission): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    if (message.permissions) {
      obj.permissions = message.permissions.map((e) => e);
    } else {
      obj.permissions = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ModuleAccountPermission>
  ): ModuleAccountPermission {
    const message = {
      ...baseModuleAccountPermission,
    } as ModuleAccountPermission;
    message.account = object.account ?? "";
    message.permissions = (object.permissions ?? []).map((e) => e);
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
