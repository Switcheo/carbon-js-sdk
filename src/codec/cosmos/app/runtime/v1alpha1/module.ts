/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cosmos.app.runtime.v1alpha1";

/** Module is the config object for the runtime module. */
export interface Module {
  /** app_name is the name of the app. */
  appName: string;
  /**
   * begin_blockers specifies the module names of begin blockers
   * to call in the order in which they should be called. If this is left empty
   * no begin blocker will be registered.
   */
  beginBlockers: string[];
  /**
   * end_blockers specifies the module names of the end blockers
   * to call in the order in which they should be called. If this is left empty
   * no end blocker will be registered.
   */
  endBlockers: string[];
  /**
   * init_genesis specifies the module names of init genesis functions
   * to call in the order in which they should be called. If this is left empty
   * no init genesis function will be registered.
   */
  initGenesis: string[];
  /**
   * export_genesis specifies the order in which to export module genesis data.
   * If this is left empty, the init_genesis order will be used for export genesis
   * if it is specified.
   */
  exportGenesis: string[];
  /**
   * override_store_keys is an optional list of overrides for the module store keys
   * to be used in keeper construction.
   */
  overrideStoreKeys: StoreKeyConfig[];
  /**
   * order_migrations defines the order in which module migrations are performed.
   * If this is left empty, it uses the default migration order.
   * https://pkg.go.dev/github.com/cosmos/cosmos-sdk@v0.47.0-alpha2/types/module#DefaultMigrationsOrder
   */
  orderMigrations: string[];
  /**
   * precommiters specifies the module names of the precommiters
   * to call in the order in which they should be called. If this is left empty
   * no precommit function will be registered.
   */
  precommiters: string[];
  /**
   * prepare_check_staters specifies the module names of the prepare_check_staters
   * to call in the order in which they should be called. If this is left empty
   * no preparecheckstate function will be registered.
   */
  prepareCheckStaters: string[];
}

/**
 * StoreKeyConfig may be supplied to override the default module store key, which
 * is the module name.
 */
export interface StoreKeyConfig {
  /** name of the module to override the store key of */
  moduleName: string;
  /** the kv store key to use instead of the module name. */
  kvStoreKey: string;
}

const baseModule: object = {
  appName: "",
  beginBlockers: "",
  endBlockers: "",
  initGenesis: "",
  exportGenesis: "",
  orderMigrations: "",
  precommiters: "",
  prepareCheckStaters: "",
};

export const Module = {
  encode(
    message: Module,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.appName !== "") {
      writer.uint32(10).string(message.appName);
    }
    for (const v of message.beginBlockers) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.endBlockers) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.initGenesis) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.exportGenesis) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.overrideStoreKeys) {
      StoreKeyConfig.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.orderMigrations) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.precommiters) {
      writer.uint32(66).string(v!);
    }
    for (const v of message.prepareCheckStaters) {
      writer.uint32(74).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Module {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseModule } as Module;
    message.beginBlockers = [];
    message.endBlockers = [];
    message.initGenesis = [];
    message.exportGenesis = [];
    message.overrideStoreKeys = [];
    message.orderMigrations = [];
    message.precommiters = [];
    message.prepareCheckStaters = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appName = reader.string();
          break;
        case 2:
          message.beginBlockers.push(reader.string());
          break;
        case 3:
          message.endBlockers.push(reader.string());
          break;
        case 4:
          message.initGenesis.push(reader.string());
          break;
        case 5:
          message.exportGenesis.push(reader.string());
          break;
        case 6:
          message.overrideStoreKeys.push(
            StoreKeyConfig.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.orderMigrations.push(reader.string());
          break;
        case 8:
          message.precommiters.push(reader.string());
          break;
        case 9:
          message.prepareCheckStaters.push(reader.string());
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
    message.appName =
      object.appName !== undefined && object.appName !== null
        ? String(object.appName)
        : "";
    message.beginBlockers = (object.beginBlockers ?? []).map((e: any) =>
      String(e)
    );
    message.endBlockers = (object.endBlockers ?? []).map((e: any) => String(e));
    message.initGenesis = (object.initGenesis ?? []).map((e: any) => String(e));
    message.exportGenesis = (object.exportGenesis ?? []).map((e: any) =>
      String(e)
    );
    message.overrideStoreKeys = (object.overrideStoreKeys ?? []).map((e: any) =>
      StoreKeyConfig.fromJSON(e)
    );
    message.orderMigrations = (object.orderMigrations ?? []).map((e: any) =>
      String(e)
    );
    message.precommiters = (object.precommiters ?? []).map((e: any) =>
      String(e)
    );
    message.prepareCheckStaters = (object.prepareCheckStaters ?? []).map(
      (e: any) => String(e)
    );
    return message;
  },

  toJSON(message: Module): unknown {
    const obj: any = {};
    message.appName !== undefined && (obj.appName = message.appName);
    if (message.beginBlockers) {
      obj.beginBlockers = message.beginBlockers.map((e) => e);
    } else {
      obj.beginBlockers = [];
    }
    if (message.endBlockers) {
      obj.endBlockers = message.endBlockers.map((e) => e);
    } else {
      obj.endBlockers = [];
    }
    if (message.initGenesis) {
      obj.initGenesis = message.initGenesis.map((e) => e);
    } else {
      obj.initGenesis = [];
    }
    if (message.exportGenesis) {
      obj.exportGenesis = message.exportGenesis.map((e) => e);
    } else {
      obj.exportGenesis = [];
    }
    if (message.overrideStoreKeys) {
      obj.overrideStoreKeys = message.overrideStoreKeys.map((e) =>
        e ? StoreKeyConfig.toJSON(e) : undefined
      );
    } else {
      obj.overrideStoreKeys = [];
    }
    if (message.orderMigrations) {
      obj.orderMigrations = message.orderMigrations.map((e) => e);
    } else {
      obj.orderMigrations = [];
    }
    if (message.precommiters) {
      obj.precommiters = message.precommiters.map((e) => e);
    } else {
      obj.precommiters = [];
    }
    if (message.prepareCheckStaters) {
      obj.prepareCheckStaters = message.prepareCheckStaters.map((e) => e);
    } else {
      obj.prepareCheckStaters = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Module>): Module {
    const message = { ...baseModule } as Module;
    message.appName = object.appName ?? "";
    message.beginBlockers = (object.beginBlockers ?? []).map((e) => e);
    message.endBlockers = (object.endBlockers ?? []).map((e) => e);
    message.initGenesis = (object.initGenesis ?? []).map((e) => e);
    message.exportGenesis = (object.exportGenesis ?? []).map((e) => e);
    message.overrideStoreKeys = (object.overrideStoreKeys ?? []).map((e) =>
      StoreKeyConfig.fromPartial(e)
    );
    message.orderMigrations = (object.orderMigrations ?? []).map((e) => e);
    message.precommiters = (object.precommiters ?? []).map((e) => e);
    message.prepareCheckStaters = (object.prepareCheckStaters ?? []).map(
      (e) => e
    );
    return message;
  },
};

const baseStoreKeyConfig: object = { moduleName: "", kvStoreKey: "" };

export const StoreKeyConfig = {
  encode(
    message: StoreKeyConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    if (message.kvStoreKey !== "") {
      writer.uint32(18).string(message.kvStoreKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreKeyConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStoreKeyConfig } as StoreKeyConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleName = reader.string();
          break;
        case 2:
          message.kvStoreKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoreKeyConfig {
    const message = { ...baseStoreKeyConfig } as StoreKeyConfig;
    message.moduleName =
      object.moduleName !== undefined && object.moduleName !== null
        ? String(object.moduleName)
        : "";
    message.kvStoreKey =
      object.kvStoreKey !== undefined && object.kvStoreKey !== null
        ? String(object.kvStoreKey)
        : "";
    return message;
  },

  toJSON(message: StoreKeyConfig): unknown {
    const obj: any = {};
    message.moduleName !== undefined && (obj.moduleName = message.moduleName);
    message.kvStoreKey !== undefined && (obj.kvStoreKey = message.kvStoreKey);
    return obj;
  },

  fromPartial(object: DeepPartial<StoreKeyConfig>): StoreKeyConfig {
    const message = { ...baseStoreKeyConfig } as StoreKeyConfig;
    message.moduleName = object.moduleName ?? "";
    message.kvStoreKey = object.kvStoreKey ?? "";
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
