/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cosmos.circuit.v1";

/**
 * Permissions are the permissions that an account has to trip
 * or reset the circuit breaker.
 */
export interface Permissions {
  /** level is the level of permissions granted to this account. */
  level: Permissions_Level;
  /**
   * limit_type_urls is used with LEVEL_SOME_MSGS to limit the lists of Msg type
   * URLs that the account can trip. It is an error to use limit_type_urls with
   * a level other than LEVEL_SOME_MSGS.
   */
  limitTypeUrls: string[];
}

/** Level is the permission level. */
export enum Permissions_Level {
  /**
   * LEVEL_NONE_UNSPECIFIED - LEVEL_NONE_UNSPECIFIED indicates that the account will have no circuit
   * breaker permissions.
   */
  LEVEL_NONE_UNSPECIFIED = 0,
  /**
   * LEVEL_SOME_MSGS - LEVEL_SOME_MSGS indicates that the account will have permission to
   * trip or reset the circuit breaker for some Msg type URLs. If this level
   * is chosen, a non-empty list of Msg type URLs must be provided in
   * limit_type_urls.
   */
  LEVEL_SOME_MSGS = 1,
  /**
   * LEVEL_ALL_MSGS - LEVEL_ALL_MSGS indicates that the account can trip or reset the circuit
   * breaker for Msg's of all type URLs.
   */
  LEVEL_ALL_MSGS = 2,
  /**
   * LEVEL_SUPER_ADMIN - LEVEL_SUPER_ADMIN indicates that the account can take all circuit breaker
   * actions and can grant permissions to other accounts.
   */
  LEVEL_SUPER_ADMIN = 3,
  UNRECOGNIZED = -1,
}

export function permissions_LevelFromJSON(object: any): Permissions_Level {
  switch (object) {
    case 0:
    case "LEVEL_NONE_UNSPECIFIED":
      return Permissions_Level.LEVEL_NONE_UNSPECIFIED;
    case 1:
    case "LEVEL_SOME_MSGS":
      return Permissions_Level.LEVEL_SOME_MSGS;
    case 2:
    case "LEVEL_ALL_MSGS":
      return Permissions_Level.LEVEL_ALL_MSGS;
    case 3:
    case "LEVEL_SUPER_ADMIN":
      return Permissions_Level.LEVEL_SUPER_ADMIN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Permissions_Level.UNRECOGNIZED;
  }
}

export function permissions_LevelToJSON(object: Permissions_Level): string {
  switch (object) {
    case Permissions_Level.LEVEL_NONE_UNSPECIFIED:
      return "LEVEL_NONE_UNSPECIFIED";
    case Permissions_Level.LEVEL_SOME_MSGS:
      return "LEVEL_SOME_MSGS";
    case Permissions_Level.LEVEL_ALL_MSGS:
      return "LEVEL_ALL_MSGS";
    case Permissions_Level.LEVEL_SUPER_ADMIN:
      return "LEVEL_SUPER_ADMIN";
    default:
      return "UNKNOWN";
  }
}

/** GenesisAccountPermissions is the account permissions for the circuit breaker in genesis */
export interface GenesisAccountPermissions {
  address: string;
  permissions?: Permissions;
}

/** GenesisState is the state that must be provided at genesis. */
export interface GenesisState {
  accountPermissions: GenesisAccountPermissions[];
  disabledTypeUrls: string[];
}

const basePermissions: object = { level: 0, limitTypeUrls: "" };

export const Permissions = {
  encode(
    message: Permissions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.level !== 0) {
      writer.uint32(8).int32(message.level);
    }
    for (const v of message.limitTypeUrls) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Permissions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePermissions } as Permissions;
    message.limitTypeUrls = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.level = reader.int32() as any;
          break;
        case 2:
          message.limitTypeUrls.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Permissions {
    const message = { ...basePermissions } as Permissions;
    message.level =
      object.level !== undefined && object.level !== null
        ? permissions_LevelFromJSON(object.level)
        : 0;
    message.limitTypeUrls = (object.limitTypeUrls ?? []).map((e: any) =>
      String(e)
    );
    return message;
  },

  toJSON(message: Permissions): unknown {
    const obj: any = {};
    message.level !== undefined &&
      (obj.level = permissions_LevelToJSON(message.level));
    if (message.limitTypeUrls) {
      obj.limitTypeUrls = message.limitTypeUrls.map((e) => e);
    } else {
      obj.limitTypeUrls = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Permissions>): Permissions {
    const message = { ...basePermissions } as Permissions;
    message.level = object.level ?? 0;
    message.limitTypeUrls = (object.limitTypeUrls ?? []).map((e) => e);
    return message;
  },
};

const baseGenesisAccountPermissions: object = { address: "" };

export const GenesisAccountPermissions = {
  encode(
    message: GenesisAccountPermissions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.permissions !== undefined) {
      Permissions.encode(
        message.permissions,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GenesisAccountPermissions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGenesisAccountPermissions,
    } as GenesisAccountPermissions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.permissions = Permissions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisAccountPermissions {
    const message = {
      ...baseGenesisAccountPermissions,
    } as GenesisAccountPermissions;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.permissions =
      object.permissions !== undefined && object.permissions !== null
        ? Permissions.fromJSON(object.permissions)
        : undefined;
    return message;
  },

  toJSON(message: GenesisAccountPermissions): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.permissions !== undefined &&
      (obj.permissions = message.permissions
        ? Permissions.toJSON(message.permissions)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GenesisAccountPermissions>
  ): GenesisAccountPermissions {
    const message = {
      ...baseGenesisAccountPermissions,
    } as GenesisAccountPermissions;
    message.address = object.address ?? "";
    message.permissions =
      object.permissions !== undefined && object.permissions !== null
        ? Permissions.fromPartial(object.permissions)
        : undefined;
    return message;
  },
};

const baseGenesisState: object = { disabledTypeUrls: "" };

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.accountPermissions) {
      GenesisAccountPermissions.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.disabledTypeUrls) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.accountPermissions = [];
    message.disabledTypeUrls = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountPermissions.push(
            GenesisAccountPermissions.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.disabledTypeUrls.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.accountPermissions = (object.accountPermissions ?? []).map(
      (e: any) => GenesisAccountPermissions.fromJSON(e)
    );
    message.disabledTypeUrls = (object.disabledTypeUrls ?? []).map((e: any) =>
      String(e)
    );
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.accountPermissions) {
      obj.accountPermissions = message.accountPermissions.map((e) =>
        e ? GenesisAccountPermissions.toJSON(e) : undefined
      );
    } else {
      obj.accountPermissions = [];
    }
    if (message.disabledTypeUrls) {
      obj.disabledTypeUrls = message.disabledTypeUrls.map((e) => e);
    } else {
      obj.disabledTypeUrls = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.accountPermissions = (object.accountPermissions ?? []).map((e) =>
      GenesisAccountPermissions.fromPartial(e)
    );
    message.disabledTypeUrls = (object.disabledTypeUrls ?? []).map((e) => e);
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
