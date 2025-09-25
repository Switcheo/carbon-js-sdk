/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { MarketConfig } from "./market";
import { Params } from "./params";
import { NavPerShareLastRecorded, Pool } from "./pool";
import { QuoteStrategy } from "./quote";
import { AddressToUserVaultsMapping, UserVault } from "./user_vault";

export const protobufPackage = "Switcheo.carbon.perpspool";

/** GenesisState defines the perpspool module's genesis state. */
export interface GenesisState {
  params?: Params;
  pools: Pool[];
  marketConfigRecords: MarketConfigRecord[];
  navPerShares: NavPerShareRecord[];
  allNavPerShareLastRecorded: NavPerShareLastRecordedWithPoolId[];
  userVaults: UserVault[];
  addressToUserVaults: AddressToUserVaultsMapping[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  quoteStrategies: QuoteStrategy[];
}

export interface MarketToUserVaultMappingRecord {
  market: string;
  userVaultAddress: string;
  poolId: Long;
}

export interface MarketConfigRecord {
  poolId: Long;
  marketConfig?: MarketConfig;
}

export interface NavPerShareRecord {
  poolId: Long;
  blockHeight: Long;
  navPerShare: string;
}

export interface NavPerShareLastRecordedWithPoolId {
  poolId: Long;
  navPerShareLastRecorded?: NavPerShareLastRecorded;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    pools: [],
    marketConfigRecords: [],
    navPerShares: [],
    allNavPerShareLastRecorded: [],
    userVaults: [],
    addressToUserVaults: [],
    quoteStrategies: [],
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.pools) {
      Pool.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.marketConfigRecords) {
      MarketConfigRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.navPerShares) {
      NavPerShareRecord.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.allNavPerShareLastRecorded) {
      NavPerShareLastRecordedWithPoolId.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.userVaults) {
      UserVault.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.addressToUserVaults) {
      AddressToUserVaultsMapping.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.quoteStrategies) {
      QuoteStrategy.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pools.push(Pool.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.marketConfigRecords.push(MarketConfigRecord.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.navPerShares.push(NavPerShareRecord.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.allNavPerShareLastRecorded.push(NavPerShareLastRecordedWithPoolId.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.userVaults.push(UserVault.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.addressToUserVaults.push(AddressToUserVaultsMapping.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.quoteStrategies.push(QuoteStrategy.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Pool.fromJSON(e)) : [],
      marketConfigRecords: Array.isArray(object?.marketConfigRecords)
        ? object.marketConfigRecords.map((e: any) => MarketConfigRecord.fromJSON(e))
        : [],
      navPerShares: Array.isArray(object?.navPerShares)
        ? object.navPerShares.map((e: any) => NavPerShareRecord.fromJSON(e))
        : [],
      allNavPerShareLastRecorded: Array.isArray(object?.allNavPerShareLastRecorded)
        ? object.allNavPerShareLastRecorded.map((e: any) => NavPerShareLastRecordedWithPoolId.fromJSON(e))
        : [],
      userVaults: Array.isArray(object?.userVaults) ? object.userVaults.map((e: any) => UserVault.fromJSON(e)) : [],
      addressToUserVaults: Array.isArray(object?.addressToUserVaults)
        ? object.addressToUserVaults.map((e: any) => AddressToUserVaultsMapping.fromJSON(e))
        : [],
      quoteStrategies: Array.isArray(object?.quoteStrategies)
        ? object.quoteStrategies.map((e: any) => QuoteStrategy.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.pools) {
      obj.pools = message.pools.map((e) => e ? Pool.toJSON(e) : undefined);
    } else {
      obj.pools = [];
    }
    if (message.marketConfigRecords) {
      obj.marketConfigRecords = message.marketConfigRecords.map((e) => e ? MarketConfigRecord.toJSON(e) : undefined);
    } else {
      obj.marketConfigRecords = [];
    }
    if (message.navPerShares) {
      obj.navPerShares = message.navPerShares.map((e) => e ? NavPerShareRecord.toJSON(e) : undefined);
    } else {
      obj.navPerShares = [];
    }
    if (message.allNavPerShareLastRecorded) {
      obj.allNavPerShareLastRecorded = message.allNavPerShareLastRecorded.map((e) =>
        e ? NavPerShareLastRecordedWithPoolId.toJSON(e) : undefined
      );
    } else {
      obj.allNavPerShareLastRecorded = [];
    }
    if (message.userVaults) {
      obj.userVaults = message.userVaults.map((e) => e ? UserVault.toJSON(e) : undefined);
    } else {
      obj.userVaults = [];
    }
    if (message.addressToUserVaults) {
      obj.addressToUserVaults = message.addressToUserVaults.map((e) =>
        e ? AddressToUserVaultsMapping.toJSON(e) : undefined
      );
    } else {
      obj.addressToUserVaults = [];
    }
    if (message.quoteStrategies) {
      obj.quoteStrategies = message.quoteStrategies.map((e) => e ? QuoteStrategy.toJSON(e) : undefined);
    } else {
      obj.quoteStrategies = [];
    }
    return obj;
  },

  create(base?: DeepPartial<GenesisState>): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.pools = object.pools?.map((e) => Pool.fromPartial(e)) || [];
    message.marketConfigRecords = object.marketConfigRecords?.map((e) => MarketConfigRecord.fromPartial(e)) || [];
    message.navPerShares = object.navPerShares?.map((e) => NavPerShareRecord.fromPartial(e)) || [];
    message.allNavPerShareLastRecorded =
      object.allNavPerShareLastRecorded?.map((e) => NavPerShareLastRecordedWithPoolId.fromPartial(e)) || [];
    message.userVaults = object.userVaults?.map((e) => UserVault.fromPartial(e)) || [];
    message.addressToUserVaults = object.addressToUserVaults?.map((e) => AddressToUserVaultsMapping.fromPartial(e)) ||
      [];
    message.quoteStrategies = object.quoteStrategies?.map((e) => QuoteStrategy.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMarketToUserVaultMappingRecord(): MarketToUserVaultMappingRecord {
  return { market: "", userVaultAddress: "", poolId: Long.UZERO };
}

export const MarketToUserVaultMappingRecord = {
  encode(message: MarketToUserVaultMappingRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.market !== "") {
      writer.uint32(10).string(message.market);
    }
    if (message.userVaultAddress !== "") {
      writer.uint32(18).string(message.userVaultAddress);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(24).uint64(message.poolId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketToUserVaultMappingRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketToUserVaultMappingRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.market = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userVaultAddress = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.poolId = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MarketToUserVaultMappingRecord {
    return {
      market: isSet(object.market) ? String(object.market) : "",
      userVaultAddress: isSet(object.userVaultAddress) ? String(object.userVaultAddress) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
    };
  },

  toJSON(message: MarketToUserVaultMappingRecord): unknown {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market);
    message.userVaultAddress !== undefined && (obj.userVaultAddress = message.userVaultAddress);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<MarketToUserVaultMappingRecord>): MarketToUserVaultMappingRecord {
    return MarketToUserVaultMappingRecord.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MarketToUserVaultMappingRecord>): MarketToUserVaultMappingRecord {
    const message = createBaseMarketToUserVaultMappingRecord();
    message.market = object.market ?? "";
    message.userVaultAddress = object.userVaultAddress ?? "";
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    return message;
  },
};

function createBaseMarketConfigRecord(): MarketConfigRecord {
  return { poolId: Long.UZERO, marketConfig: undefined };
}

export const MarketConfigRecord = {
  encode(message: MarketConfigRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.marketConfig !== undefined) {
      MarketConfig.encode(message.marketConfig, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketConfigRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketConfigRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.poolId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.marketConfig = MarketConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MarketConfigRecord {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      marketConfig: isSet(object.marketConfig) ? MarketConfig.fromJSON(object.marketConfig) : undefined,
    };
  },

  toJSON(message: MarketConfigRecord): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.marketConfig !== undefined &&
      (obj.marketConfig = message.marketConfig ? MarketConfig.toJSON(message.marketConfig) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MarketConfigRecord>): MarketConfigRecord {
    return MarketConfigRecord.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MarketConfigRecord>): MarketConfigRecord {
    const message = createBaseMarketConfigRecord();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.marketConfig = (object.marketConfig !== undefined && object.marketConfig !== null)
      ? MarketConfig.fromPartial(object.marketConfig)
      : undefined;
    return message;
  },
};

function createBaseNavPerShareRecord(): NavPerShareRecord {
  return { poolId: Long.UZERO, blockHeight: Long.UZERO, navPerShare: "" };
}

export const NavPerShareRecord = {
  encode(message: NavPerShareRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.blockHeight.isZero()) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    if (message.navPerShare !== "") {
      writer.uint32(26).string(message.navPerShare);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NavPerShareRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNavPerShareRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.poolId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.blockHeight = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.navPerShare = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NavPerShareRecord {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.UZERO,
      navPerShare: isSet(object.navPerShare) ? String(object.navPerShare) : "",
    };
  },

  toJSON(message: NavPerShareRecord): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.UZERO).toString());
    message.navPerShare !== undefined && (obj.navPerShare = message.navPerShare);
    return obj;
  },

  create(base?: DeepPartial<NavPerShareRecord>): NavPerShareRecord {
    return NavPerShareRecord.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<NavPerShareRecord>): NavPerShareRecord {
    const message = createBaseNavPerShareRecord();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.blockHeight = (object.blockHeight !== undefined && object.blockHeight !== null)
      ? Long.fromValue(object.blockHeight)
      : Long.UZERO;
    message.navPerShare = object.navPerShare ?? "";
    return message;
  },
};

function createBaseNavPerShareLastRecordedWithPoolId(): NavPerShareLastRecordedWithPoolId {
  return { poolId: Long.UZERO, navPerShareLastRecorded: undefined };
}

export const NavPerShareLastRecordedWithPoolId = {
  encode(message: NavPerShareLastRecordedWithPoolId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.navPerShareLastRecorded !== undefined) {
      NavPerShareLastRecorded.encode(message.navPerShareLastRecorded, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NavPerShareLastRecordedWithPoolId {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNavPerShareLastRecordedWithPoolId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.poolId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.navPerShareLastRecorded = NavPerShareLastRecorded.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NavPerShareLastRecordedWithPoolId {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      navPerShareLastRecorded: isSet(object.navPerShareLastRecorded)
        ? NavPerShareLastRecorded.fromJSON(object.navPerShareLastRecorded)
        : undefined,
    };
  },

  toJSON(message: NavPerShareLastRecordedWithPoolId): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.navPerShareLastRecorded !== undefined && (obj.navPerShareLastRecorded = message.navPerShareLastRecorded
      ? NavPerShareLastRecorded.toJSON(message.navPerShareLastRecorded)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<NavPerShareLastRecordedWithPoolId>): NavPerShareLastRecordedWithPoolId {
    return NavPerShareLastRecordedWithPoolId.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<NavPerShareLastRecordedWithPoolId>): NavPerShareLastRecordedWithPoolId {
    const message = createBaseNavPerShareLastRecordedWithPoolId();
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.navPerShareLastRecorded =
      (object.navPerShareLastRecorded !== undefined && object.navPerShareLastRecorded !== null)
        ? NavPerShareLastRecorded.fromPartial(object.navPerShareLastRecorded)
        : undefined;
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
