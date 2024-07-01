/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { MarketConfig } from "./market";
import { NavPerShareLastRecorded, Pool } from "./pool";

export const protobufPackage = "Switcheo.carbon.perpspool";

/** GenesisState defines the perpspool module's genesis state. */
export interface GenesisState {
  params?: Params;
  pools: Pool[];
  marketConfigRecords: MarketConfigRecord[];
  navPerShares: NavPerShareRecord[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  allNavPerShareLastRecorded: NavPerShareLastRecordedWithPoolId[];
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

const baseGenesisState: object = {};

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      NavPerShareLastRecordedWithPoolId.encode(
        v!,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.pools = [];
    message.marketConfigRecords = [];
    message.navPerShares = [];
    message.allNavPerShareLastRecorded = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.pools.push(Pool.decode(reader, reader.uint32()));
          break;
        case 3:
          message.marketConfigRecords.push(
            MarketConfigRecord.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.navPerShares.push(
            NavPerShareRecord.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.allNavPerShareLastRecorded.push(
            NavPerShareLastRecordedWithPoolId.decode(reader, reader.uint32())
          );
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
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromJSON(object.params)
        : undefined;
    message.pools = (object.pools ?? []).map((e: any) => Pool.fromJSON(e));
    message.marketConfigRecords = (object.marketConfigRecords ?? []).map(
      (e: any) => MarketConfigRecord.fromJSON(e)
    );
    message.navPerShares = (object.navPerShares ?? []).map((e: any) =>
      NavPerShareRecord.fromJSON(e)
    );
    message.allNavPerShareLastRecorded = (
      object.allNavPerShareLastRecorded ?? []
    ).map((e: any) => NavPerShareLastRecordedWithPoolId.fromJSON(e));
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.pools) {
      obj.pools = message.pools.map((e) => (e ? Pool.toJSON(e) : undefined));
    } else {
      obj.pools = [];
    }
    if (message.marketConfigRecords) {
      obj.marketConfigRecords = message.marketConfigRecords.map((e) =>
        e ? MarketConfigRecord.toJSON(e) : undefined
      );
    } else {
      obj.marketConfigRecords = [];
    }
    if (message.navPerShares) {
      obj.navPerShares = message.navPerShares.map((e) =>
        e ? NavPerShareRecord.toJSON(e) : undefined
      );
    } else {
      obj.navPerShares = [];
    }
    if (message.allNavPerShareLastRecorded) {
      obj.allNavPerShareLastRecorded = message.allNavPerShareLastRecorded.map(
        (e) => (e ? NavPerShareLastRecordedWithPoolId.toJSON(e) : undefined)
      );
    } else {
      obj.allNavPerShareLastRecorded = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    message.pools = (object.pools ?? []).map((e) => Pool.fromPartial(e));
    message.marketConfigRecords = (object.marketConfigRecords ?? []).map((e) =>
      MarketConfigRecord.fromPartial(e)
    );
    message.navPerShares = (object.navPerShares ?? []).map((e) =>
      NavPerShareRecord.fromPartial(e)
    );
    message.allNavPerShareLastRecorded = (
      object.allNavPerShareLastRecorded ?? []
    ).map((e) => NavPerShareLastRecordedWithPoolId.fromPartial(e));
    return message;
  },
};

const baseMarketConfigRecord: object = { poolId: Long.UZERO };

export const MarketConfigRecord = {
  encode(
    message: MarketConfigRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.marketConfig !== undefined) {
      MarketConfig.encode(
        message.marketConfig,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketConfigRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMarketConfigRecord } as MarketConfigRecord;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.marketConfig = MarketConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketConfigRecord {
    const message = { ...baseMarketConfigRecord } as MarketConfigRecord;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.marketConfig =
      object.marketConfig !== undefined && object.marketConfig !== null
        ? MarketConfig.fromJSON(object.marketConfig)
        : undefined;
    return message;
  },

  toJSON(message: MarketConfigRecord): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.marketConfig !== undefined &&
      (obj.marketConfig = message.marketConfig
        ? MarketConfig.toJSON(message.marketConfig)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MarketConfigRecord>): MarketConfigRecord {
    const message = { ...baseMarketConfigRecord } as MarketConfigRecord;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.marketConfig =
      object.marketConfig !== undefined && object.marketConfig !== null
        ? MarketConfig.fromPartial(object.marketConfig)
        : undefined;
    return message;
  },
};

const baseNavPerShareRecord: object = {
  poolId: Long.UZERO,
  blockHeight: Long.UZERO,
  navPerShare: "",
};

export const NavPerShareRecord = {
  encode(
    message: NavPerShareRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNavPerShareRecord } as NavPerShareRecord;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.blockHeight = reader.uint64() as Long;
          break;
        case 3:
          message.navPerShare = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NavPerShareRecord {
    const message = { ...baseNavPerShareRecord } as NavPerShareRecord;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
        ? Long.fromString(object.blockHeight)
        : Long.UZERO;
    message.navPerShare =
      object.navPerShare !== undefined && object.navPerShare !== null
        ? String(object.navPerShare)
        : "";
    return message;
  },

  toJSON(message: NavPerShareRecord): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.blockHeight !== undefined &&
      (obj.blockHeight = (message.blockHeight || Long.UZERO).toString());
    message.navPerShare !== undefined &&
      (obj.navPerShare = message.navPerShare);
    return obj;
  },

  fromPartial(object: DeepPartial<NavPerShareRecord>): NavPerShareRecord {
    const message = { ...baseNavPerShareRecord } as NavPerShareRecord;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
        ? Long.fromValue(object.blockHeight)
        : Long.UZERO;
    message.navPerShare = object.navPerShare ?? "";
    return message;
  },
};

const baseNavPerShareLastRecordedWithPoolId: object = { poolId: Long.UZERO };

export const NavPerShareLastRecordedWithPoolId = {
  encode(
    message: NavPerShareLastRecordedWithPoolId,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.navPerShareLastRecorded !== undefined) {
      NavPerShareLastRecorded.encode(
        message.navPerShareLastRecorded,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): NavPerShareLastRecordedWithPoolId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseNavPerShareLastRecordedWithPoolId,
    } as NavPerShareLastRecordedWithPoolId;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.navPerShareLastRecorded = NavPerShareLastRecorded.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NavPerShareLastRecordedWithPoolId {
    const message = {
      ...baseNavPerShareLastRecordedWithPoolId,
    } as NavPerShareLastRecordedWithPoolId;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromString(object.poolId)
        : Long.UZERO;
    message.navPerShareLastRecorded =
      object.navPerShareLastRecorded !== undefined &&
      object.navPerShareLastRecorded !== null
        ? NavPerShareLastRecorded.fromJSON(object.navPerShareLastRecorded)
        : undefined;
    return message;
  },

  toJSON(message: NavPerShareLastRecordedWithPoolId): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.navPerShareLastRecorded !== undefined &&
      (obj.navPerShareLastRecorded = message.navPerShareLastRecorded
        ? NavPerShareLastRecorded.toJSON(message.navPerShareLastRecorded)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<NavPerShareLastRecordedWithPoolId>
  ): NavPerShareLastRecordedWithPoolId {
    const message = {
      ...baseNavPerShareLastRecordedWithPoolId,
    } as NavPerShareLastRecordedWithPoolId;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.navPerShareLastRecorded =
      object.navPerShareLastRecorded !== undefined &&
      object.navPerShareLastRecorded !== null
        ? NavPerShareLastRecorded.fromPartial(object.navPerShareLastRecorded)
        : undefined;
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
