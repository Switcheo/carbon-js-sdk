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

function createBaseModule(): Module {
  return {
    appName: "",
    beginBlockers: [],
    endBlockers: [],
    initGenesis: [],
    exportGenesis: [],
    overrideStoreKeys: [],
    orderMigrations: [],
    precommiters: [],
    prepareCheckStaters: [],
  };
}

export const Module = {
  encode(message: Module, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.appName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.beginBlockers.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.endBlockers.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.initGenesis.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.exportGenesis.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.overrideStoreKeys.push(StoreKeyConfig.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.orderMigrations.push(reader.string());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.precommiters.push(reader.string());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.prepareCheckStaters.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Module {
    return {
      appName: isSet(object.appName) ? String(object.appName) : "",
      beginBlockers: Array.isArray(object?.beginBlockers) ? object.beginBlockers.map((e: any) => String(e)) : [],
      endBlockers: Array.isArray(object?.endBlockers) ? object.endBlockers.map((e: any) => String(e)) : [],
      initGenesis: Array.isArray(object?.initGenesis) ? object.initGenesis.map((e: any) => String(e)) : [],
      exportGenesis: Array.isArray(object?.exportGenesis) ? object.exportGenesis.map((e: any) => String(e)) : [],
      overrideStoreKeys: Array.isArray(object?.overrideStoreKeys)
        ? object.overrideStoreKeys.map((e: any) => StoreKeyConfig.fromJSON(e))
        : [],
      orderMigrations: Array.isArray(object?.orderMigrations) ? object.orderMigrations.map((e: any) => String(e)) : [],
      precommiters: Array.isArray(object?.precommiters) ? object.precommiters.map((e: any) => String(e)) : [],
      prepareCheckStaters: Array.isArray(object?.prepareCheckStaters)
        ? object.prepareCheckStaters.map((e: any) => String(e))
        : [],
    };
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
      obj.overrideStoreKeys = message.overrideStoreKeys.map((e) => e ? StoreKeyConfig.toJSON(e) : undefined);
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

  create(base?: DeepPartial<Module>): Module {
    return Module.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Module>): Module {
    const message = createBaseModule();
    message.appName = object.appName ?? "";
    message.beginBlockers = object.beginBlockers?.map((e) => e) || [];
    message.endBlockers = object.endBlockers?.map((e) => e) || [];
    message.initGenesis = object.initGenesis?.map((e) => e) || [];
    message.exportGenesis = object.exportGenesis?.map((e) => e) || [];
    message.overrideStoreKeys = object.overrideStoreKeys?.map((e) => StoreKeyConfig.fromPartial(e)) || [];
    message.orderMigrations = object.orderMigrations?.map((e) => e) || [];
    message.precommiters = object.precommiters?.map((e) => e) || [];
    message.prepareCheckStaters = object.prepareCheckStaters?.map((e) => e) || [];
    return message;
  },
};

function createBaseStoreKeyConfig(): StoreKeyConfig {
  return { moduleName: "", kvStoreKey: "" };
}

export const StoreKeyConfig = {
  encode(message: StoreKeyConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    if (message.kvStoreKey !== "") {
      writer.uint32(18).string(message.kvStoreKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreKeyConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreKeyConfig();
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

          message.kvStoreKey = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StoreKeyConfig {
    return {
      moduleName: isSet(object.moduleName) ? String(object.moduleName) : "",
      kvStoreKey: isSet(object.kvStoreKey) ? String(object.kvStoreKey) : "",
    };
  },

  toJSON(message: StoreKeyConfig): unknown {
    const obj: any = {};
    message.moduleName !== undefined && (obj.moduleName = message.moduleName);
    message.kvStoreKey !== undefined && (obj.kvStoreKey = message.kvStoreKey);
    return obj;
  },

  create(base?: DeepPartial<StoreKeyConfig>): StoreKeyConfig {
    return StoreKeyConfig.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<StoreKeyConfig>): StoreKeyConfig {
    const message = createBaseStoreKeyConfig();
    message.moduleName = object.moduleName ?? "";
    message.kvStoreKey = object.kvStoreKey ?? "";
    return message;
  },
};

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
