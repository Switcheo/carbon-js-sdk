/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "Switcheo.carbon.position";

export interface Position {
  marketId: string;
  address: string;
  lots: string;
  entryPrice: string;
  realizedPnl: string;
  openedBlockHeight: Long;
  allocatedMarginAmount: string;
}

export interface Positions {
  positions: Position[];
}

export interface OpenPositionIndex {
  address: Uint8Array;
  marketIds: string[];
}

export interface OpenInterest {
  marketId: string;
  openInterest: string;
}

export interface APIPosition {
  marketId: string;
  address: string;
  tradeId: Long;
  side: string;
  openedBlockHeight: Long;
  updatedBlockHeight: Long;
  closedBlockHeight: Long;
  realizedPnl: string;
  maxLots: string;
  totalFeeAmount: string;
  avgAllocatedMargin: string;
  avgEntryPrice: string;
  avgExitPrice: string;
  allocatedMargin: string;
  lots: string;
  openedAt?: Date;
  closedAt?: Date;
  updateCount: Long;
  exitCount: Long;
}

export interface PositionAllocatedMargin {
  denom: string;
  amount: string;
}

export interface CrossMaintenanceMargin {
  marketId: string;
  marketDisplayName: string;
  maintenanceMargin?: Coin;
}

function createBasePosition(): Position {
  return {
    marketId: "",
    address: "",
    lots: "",
    entryPrice: "",
    realizedPnl: "",
    openedBlockHeight: Long.UZERO,
    allocatedMarginAmount: "",
  };
}

export const Position = {
  encode(message: Position, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.lots !== "") {
      writer.uint32(26).string(message.lots);
    }
    if (message.entryPrice !== "") {
      writer.uint32(34).string(message.entryPrice);
    }
    if (message.realizedPnl !== "") {
      writer.uint32(42).string(message.realizedPnl);
    }
    if (!message.openedBlockHeight.isZero()) {
      writer.uint32(56).uint64(message.openedBlockHeight);
    }
    if (message.allocatedMarginAmount !== "") {
      writer.uint32(66).string(message.allocatedMarginAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Position {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.marketId = reader.string();
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

          message.lots = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.entryPrice = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.realizedPnl = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.openedBlockHeight = reader.uint64() as Long;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.allocatedMarginAmount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Position {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      address: isSet(object.address) ? String(object.address) : "",
      lots: isSet(object.lots) ? String(object.lots) : "",
      entryPrice: isSet(object.entryPrice) ? String(object.entryPrice) : "",
      realizedPnl: isSet(object.realizedPnl) ? String(object.realizedPnl) : "",
      openedBlockHeight: isSet(object.openedBlockHeight) ? Long.fromValue(object.openedBlockHeight) : Long.UZERO,
      allocatedMarginAmount: isSet(object.allocatedMarginAmount) ? String(object.allocatedMarginAmount) : "",
    };
  },

  toJSON(message: Position): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.address !== undefined && (obj.address = message.address);
    message.lots !== undefined && (obj.lots = message.lots);
    message.entryPrice !== undefined && (obj.entryPrice = message.entryPrice);
    message.realizedPnl !== undefined && (obj.realizedPnl = message.realizedPnl);
    message.openedBlockHeight !== undefined &&
      (obj.openedBlockHeight = (message.openedBlockHeight || Long.UZERO).toString());
    message.allocatedMarginAmount !== undefined && (obj.allocatedMarginAmount = message.allocatedMarginAmount);
    return obj;
  },

  create(base?: DeepPartial<Position>): Position {
    return Position.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Position>): Position {
    const message = createBasePosition();
    message.marketId = object.marketId ?? "";
    message.address = object.address ?? "";
    message.lots = object.lots ?? "";
    message.entryPrice = object.entryPrice ?? "";
    message.realizedPnl = object.realizedPnl ?? "";
    message.openedBlockHeight = (object.openedBlockHeight !== undefined && object.openedBlockHeight !== null)
      ? Long.fromValue(object.openedBlockHeight)
      : Long.UZERO;
    message.allocatedMarginAmount = object.allocatedMarginAmount ?? "";
    return message;
  },
};

function createBasePositions(): Positions {
  return { positions: [] };
}

export const Positions = {
  encode(message: Positions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.positions) {
      Position.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Positions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.positions.push(Position.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Positions {
    return {
      positions: Array.isArray(object?.positions) ? object.positions.map((e: any) => Position.fromJSON(e)) : [],
    };
  },

  toJSON(message: Positions): unknown {
    const obj: any = {};
    if (message.positions) {
      obj.positions = message.positions.map((e) => e ? Position.toJSON(e) : undefined);
    } else {
      obj.positions = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Positions>): Positions {
    return Positions.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Positions>): Positions {
    const message = createBasePositions();
    message.positions = object.positions?.map((e) => Position.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOpenPositionIndex(): OpenPositionIndex {
  return { address: new Uint8Array(), marketIds: [] };
}

export const OpenPositionIndex = {
  encode(message: OpenPositionIndex, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenPositionIndex {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenPositionIndex();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.marketIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OpenPositionIndex {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      marketIds: Array.isArray(object?.marketIds) ? object.marketIds.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: OpenPositionIndex): unknown {
    const obj: any = {};
    message.address !== undefined &&
      (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    if (message.marketIds) {
      obj.marketIds = message.marketIds.map((e) => e);
    } else {
      obj.marketIds = [];
    }
    return obj;
  },

  create(base?: DeepPartial<OpenPositionIndex>): OpenPositionIndex {
    return OpenPositionIndex.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<OpenPositionIndex>): OpenPositionIndex {
    const message = createBaseOpenPositionIndex();
    message.address = object.address ?? new Uint8Array();
    message.marketIds = object.marketIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseOpenInterest(): OpenInterest {
  return { marketId: "", openInterest: "" };
}

export const OpenInterest = {
  encode(message: OpenInterest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.openInterest !== "") {
      writer.uint32(18).string(message.openInterest);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenInterest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenInterest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.marketId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.openInterest = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OpenInterest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      openInterest: isSet(object.openInterest) ? String(object.openInterest) : "",
    };
  },

  toJSON(message: OpenInterest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.openInterest !== undefined && (obj.openInterest = message.openInterest);
    return obj;
  },

  create(base?: DeepPartial<OpenInterest>): OpenInterest {
    return OpenInterest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<OpenInterest>): OpenInterest {
    const message = createBaseOpenInterest();
    message.marketId = object.marketId ?? "";
    message.openInterest = object.openInterest ?? "";
    return message;
  },
};

function createBaseAPIPosition(): APIPosition {
  return {
    marketId: "",
    address: "",
    tradeId: Long.UZERO,
    side: "",
    openedBlockHeight: Long.UZERO,
    updatedBlockHeight: Long.UZERO,
    closedBlockHeight: Long.UZERO,
    realizedPnl: "",
    maxLots: "",
    totalFeeAmount: "",
    avgAllocatedMargin: "",
    avgEntryPrice: "",
    avgExitPrice: "",
    allocatedMargin: "",
    lots: "",
    openedAt: undefined,
    closedAt: undefined,
    updateCount: Long.UZERO,
    exitCount: Long.UZERO,
  };
}

export const APIPosition = {
  encode(message: APIPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (!message.tradeId.isZero()) {
      writer.uint32(24).uint64(message.tradeId);
    }
    if (message.side !== "") {
      writer.uint32(34).string(message.side);
    }
    if (!message.openedBlockHeight.isZero()) {
      writer.uint32(40).uint64(message.openedBlockHeight);
    }
    if (!message.updatedBlockHeight.isZero()) {
      writer.uint32(48).uint64(message.updatedBlockHeight);
    }
    if (!message.closedBlockHeight.isZero()) {
      writer.uint32(56).uint64(message.closedBlockHeight);
    }
    if (message.realizedPnl !== "") {
      writer.uint32(66).string(message.realizedPnl);
    }
    if (message.maxLots !== "") {
      writer.uint32(74).string(message.maxLots);
    }
    if (message.totalFeeAmount !== "") {
      writer.uint32(82).string(message.totalFeeAmount);
    }
    if (message.avgAllocatedMargin !== "") {
      writer.uint32(90).string(message.avgAllocatedMargin);
    }
    if (message.avgEntryPrice !== "") {
      writer.uint32(98).string(message.avgEntryPrice);
    }
    if (message.avgExitPrice !== "") {
      writer.uint32(106).string(message.avgExitPrice);
    }
    if (message.allocatedMargin !== "") {
      writer.uint32(114).string(message.allocatedMargin);
    }
    if (message.lots !== "") {
      writer.uint32(122).string(message.lots);
    }
    if (message.openedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.openedAt), writer.uint32(130).fork()).ldelim();
    }
    if (message.closedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.closedAt), writer.uint32(138).fork()).ldelim();
    }
    if (!message.updateCount.isZero()) {
      writer.uint32(144).uint64(message.updateCount);
    }
    if (!message.exitCount.isZero()) {
      writer.uint32(152).uint64(message.exitCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.marketId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.tradeId = reader.uint64() as Long;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.side = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.openedBlockHeight = reader.uint64() as Long;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.updatedBlockHeight = reader.uint64() as Long;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.closedBlockHeight = reader.uint64() as Long;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.realizedPnl = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.maxLots = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.totalFeeAmount = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.avgAllocatedMargin = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.avgEntryPrice = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.avgExitPrice = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.allocatedMargin = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.lots = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.openedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.closedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.updateCount = reader.uint64() as Long;
          continue;
        case 19:
          if (tag !== 152) {
            break;
          }

          message.exitCount = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIPosition {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      address: isSet(object.address) ? String(object.address) : "",
      tradeId: isSet(object.tradeId) ? Long.fromValue(object.tradeId) : Long.UZERO,
      side: isSet(object.side) ? String(object.side) : "",
      openedBlockHeight: isSet(object.openedBlockHeight) ? Long.fromValue(object.openedBlockHeight) : Long.UZERO,
      updatedBlockHeight: isSet(object.updatedBlockHeight) ? Long.fromValue(object.updatedBlockHeight) : Long.UZERO,
      closedBlockHeight: isSet(object.closedBlockHeight) ? Long.fromValue(object.closedBlockHeight) : Long.UZERO,
      realizedPnl: isSet(object.realizedPnl) ? String(object.realizedPnl) : "",
      maxLots: isSet(object.maxLots) ? String(object.maxLots) : "",
      totalFeeAmount: isSet(object.totalFeeAmount) ? String(object.totalFeeAmount) : "",
      avgAllocatedMargin: isSet(object.avgAllocatedMargin) ? String(object.avgAllocatedMargin) : "",
      avgEntryPrice: isSet(object.avgEntryPrice) ? String(object.avgEntryPrice) : "",
      avgExitPrice: isSet(object.avgExitPrice) ? String(object.avgExitPrice) : "",
      allocatedMargin: isSet(object.allocatedMargin) ? String(object.allocatedMargin) : "",
      lots: isSet(object.lots) ? String(object.lots) : "",
      openedAt: isSet(object.openedAt) ? fromJsonTimestamp(object.openedAt) : undefined,
      closedAt: isSet(object.closedAt) ? fromJsonTimestamp(object.closedAt) : undefined,
      updateCount: isSet(object.updateCount) ? Long.fromValue(object.updateCount) : Long.UZERO,
      exitCount: isSet(object.exitCount) ? Long.fromValue(object.exitCount) : Long.UZERO,
    };
  },

  toJSON(message: APIPosition): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.address !== undefined && (obj.address = message.address);
    message.tradeId !== undefined && (obj.tradeId = (message.tradeId || Long.UZERO).toString());
    message.side !== undefined && (obj.side = message.side);
    message.openedBlockHeight !== undefined &&
      (obj.openedBlockHeight = (message.openedBlockHeight || Long.UZERO).toString());
    message.updatedBlockHeight !== undefined &&
      (obj.updatedBlockHeight = (message.updatedBlockHeight || Long.UZERO).toString());
    message.closedBlockHeight !== undefined &&
      (obj.closedBlockHeight = (message.closedBlockHeight || Long.UZERO).toString());
    message.realizedPnl !== undefined && (obj.realizedPnl = message.realizedPnl);
    message.maxLots !== undefined && (obj.maxLots = message.maxLots);
    message.totalFeeAmount !== undefined && (obj.totalFeeAmount = message.totalFeeAmount);
    message.avgAllocatedMargin !== undefined && (obj.avgAllocatedMargin = message.avgAllocatedMargin);
    message.avgEntryPrice !== undefined && (obj.avgEntryPrice = message.avgEntryPrice);
    message.avgExitPrice !== undefined && (obj.avgExitPrice = message.avgExitPrice);
    message.allocatedMargin !== undefined && (obj.allocatedMargin = message.allocatedMargin);
    message.lots !== undefined && (obj.lots = message.lots);
    message.openedAt !== undefined && (obj.openedAt = message.openedAt.toISOString());
    message.closedAt !== undefined && (obj.closedAt = message.closedAt.toISOString());
    message.updateCount !== undefined && (obj.updateCount = (message.updateCount || Long.UZERO).toString());
    message.exitCount !== undefined && (obj.exitCount = (message.exitCount || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<APIPosition>): APIPosition {
    return APIPosition.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<APIPosition>): APIPosition {
    const message = createBaseAPIPosition();
    message.marketId = object.marketId ?? "";
    message.address = object.address ?? "";
    message.tradeId = (object.tradeId !== undefined && object.tradeId !== null)
      ? Long.fromValue(object.tradeId)
      : Long.UZERO;
    message.side = object.side ?? "";
    message.openedBlockHeight = (object.openedBlockHeight !== undefined && object.openedBlockHeight !== null)
      ? Long.fromValue(object.openedBlockHeight)
      : Long.UZERO;
    message.updatedBlockHeight = (object.updatedBlockHeight !== undefined && object.updatedBlockHeight !== null)
      ? Long.fromValue(object.updatedBlockHeight)
      : Long.UZERO;
    message.closedBlockHeight = (object.closedBlockHeight !== undefined && object.closedBlockHeight !== null)
      ? Long.fromValue(object.closedBlockHeight)
      : Long.UZERO;
    message.realizedPnl = object.realizedPnl ?? "";
    message.maxLots = object.maxLots ?? "";
    message.totalFeeAmount = object.totalFeeAmount ?? "";
    message.avgAllocatedMargin = object.avgAllocatedMargin ?? "";
    message.avgEntryPrice = object.avgEntryPrice ?? "";
    message.avgExitPrice = object.avgExitPrice ?? "";
    message.allocatedMargin = object.allocatedMargin ?? "";
    message.lots = object.lots ?? "";
    message.openedAt = object.openedAt ?? undefined;
    message.closedAt = object.closedAt ?? undefined;
    message.updateCount = (object.updateCount !== undefined && object.updateCount !== null)
      ? Long.fromValue(object.updateCount)
      : Long.UZERO;
    message.exitCount = (object.exitCount !== undefined && object.exitCount !== null)
      ? Long.fromValue(object.exitCount)
      : Long.UZERO;
    return message;
  },
};

function createBasePositionAllocatedMargin(): PositionAllocatedMargin {
  return { denom: "", amount: "" };
}

export const PositionAllocatedMargin = {
  encode(message: PositionAllocatedMargin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PositionAllocatedMargin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionAllocatedMargin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PositionAllocatedMargin {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: PositionAllocatedMargin): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  create(base?: DeepPartial<PositionAllocatedMargin>): PositionAllocatedMargin {
    return PositionAllocatedMargin.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PositionAllocatedMargin>): PositionAllocatedMargin {
    const message = createBasePositionAllocatedMargin();
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseCrossMaintenanceMargin(): CrossMaintenanceMargin {
  return { marketId: "", marketDisplayName: "", maintenanceMargin: undefined };
}

export const CrossMaintenanceMargin = {
  encode(message: CrossMaintenanceMargin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.marketDisplayName !== "") {
      writer.uint32(18).string(message.marketDisplayName);
    }
    if (message.maintenanceMargin !== undefined) {
      Coin.encode(message.maintenanceMargin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CrossMaintenanceMargin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCrossMaintenanceMargin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.marketId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.marketDisplayName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.maintenanceMargin = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CrossMaintenanceMargin {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      marketDisplayName: isSet(object.marketDisplayName) ? String(object.marketDisplayName) : "",
      maintenanceMargin: isSet(object.maintenanceMargin) ? Coin.fromJSON(object.maintenanceMargin) : undefined,
    };
  },

  toJSON(message: CrossMaintenanceMargin): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.marketDisplayName !== undefined && (obj.marketDisplayName = message.marketDisplayName);
    message.maintenanceMargin !== undefined &&
      (obj.maintenanceMargin = message.maintenanceMargin ? Coin.toJSON(message.maintenanceMargin) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CrossMaintenanceMargin>): CrossMaintenanceMargin {
    return CrossMaintenanceMargin.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CrossMaintenanceMargin>): CrossMaintenanceMargin {
    const message = createBaseCrossMaintenanceMargin();
    message.marketId = object.marketId ?? "";
    message.marketDisplayName = object.marketDisplayName ?? "";
    message.maintenanceMargin = (object.maintenanceMargin !== undefined && object.maintenanceMargin !== null)
      ? Coin.fromPartial(object.maintenanceMargin)
      : undefined;
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
