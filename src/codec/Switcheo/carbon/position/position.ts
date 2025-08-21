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
  isCross: boolean;
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
  isCross: boolean;
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

const basePosition: object = {
  marketId: "",
  address: "",
  lots: "",
  entryPrice: "",
  realizedPnl: "",
  openedBlockHeight: Long.UZERO,
  allocatedMarginAmount: "",
  isCross: false,
};

export const Position = {
  encode(
    message: Position,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    if (message.isCross === true) {
      writer.uint32(72).bool(message.isCross);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Position {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePosition } as Position;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.lots = reader.string();
          break;
        case 4:
          message.entryPrice = reader.string();
          break;
        case 5:
          message.realizedPnl = reader.string();
          break;
        case 7:
          message.openedBlockHeight = reader.uint64() as Long;
          break;
        case 8:
          message.allocatedMarginAmount = reader.string();
          break;
        case 9:
          message.isCross = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Position {
    const message = { ...basePosition } as Position;
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.lots =
      object.lots !== undefined && object.lots !== null
        ? String(object.lots)
        : "";
    message.entryPrice =
      object.entryPrice !== undefined && object.entryPrice !== null
        ? String(object.entryPrice)
        : "";
    message.realizedPnl =
      object.realizedPnl !== undefined && object.realizedPnl !== null
        ? String(object.realizedPnl)
        : "";
    message.openedBlockHeight =
      object.openedBlockHeight !== undefined &&
      object.openedBlockHeight !== null
        ? Long.fromString(object.openedBlockHeight)
        : Long.UZERO;
    message.allocatedMarginAmount =
      object.allocatedMarginAmount !== undefined &&
      object.allocatedMarginAmount !== null
        ? String(object.allocatedMarginAmount)
        : "";
    message.isCross =
      object.isCross !== undefined && object.isCross !== null
        ? Boolean(object.isCross)
        : false;
    return message;
  },

  toJSON(message: Position): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.address !== undefined && (obj.address = message.address);
    message.lots !== undefined && (obj.lots = message.lots);
    message.entryPrice !== undefined && (obj.entryPrice = message.entryPrice);
    message.realizedPnl !== undefined &&
      (obj.realizedPnl = message.realizedPnl);
    message.openedBlockHeight !== undefined &&
      (obj.openedBlockHeight = (
        message.openedBlockHeight || Long.UZERO
      ).toString());
    message.allocatedMarginAmount !== undefined &&
      (obj.allocatedMarginAmount = message.allocatedMarginAmount);
    message.isCross !== undefined && (obj.isCross = message.isCross);
    return obj;
  },

  fromPartial(object: DeepPartial<Position>): Position {
    const message = { ...basePosition } as Position;
    message.marketId = object.marketId ?? "";
    message.address = object.address ?? "";
    message.lots = object.lots ?? "";
    message.entryPrice = object.entryPrice ?? "";
    message.realizedPnl = object.realizedPnl ?? "";
    message.openedBlockHeight =
      object.openedBlockHeight !== undefined &&
      object.openedBlockHeight !== null
        ? Long.fromValue(object.openedBlockHeight)
        : Long.UZERO;
    message.allocatedMarginAmount = object.allocatedMarginAmount ?? "";
    message.isCross = object.isCross ?? false;
    return message;
  },
};

const basePositions: object = {};

export const Positions = {
  encode(
    message: Positions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.positions) {
      Position.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Positions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePositions } as Positions;
    message.positions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positions.push(Position.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Positions {
    const message = { ...basePositions } as Positions;
    message.positions = (object.positions ?? []).map((e: any) =>
      Position.fromJSON(e)
    );
    return message;
  },

  toJSON(message: Positions): unknown {
    const obj: any = {};
    if (message.positions) {
      obj.positions = message.positions.map((e) =>
        e ? Position.toJSON(e) : undefined
      );
    } else {
      obj.positions = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Positions>): Positions {
    const message = { ...basePositions } as Positions;
    message.positions = (object.positions ?? []).map((e) =>
      Position.fromPartial(e)
    );
    return message;
  },
};

const baseOpenPositionIndex: object = { marketIds: "" };

export const OpenPositionIndex = {
  encode(
    message: OpenPositionIndex,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenPositionIndex {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOpenPositionIndex } as OpenPositionIndex;
    message.marketIds = [];
    message.address = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        case 2:
          message.marketIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OpenPositionIndex {
    const message = { ...baseOpenPositionIndex } as OpenPositionIndex;
    message.address =
      object.address !== undefined && object.address !== null
        ? bytesFromBase64(object.address)
        : new Uint8Array();
    message.marketIds = (object.marketIds ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: OpenPositionIndex): unknown {
    const obj: any = {};
    message.address !== undefined &&
      (obj.address = base64FromBytes(
        message.address !== undefined ? message.address : new Uint8Array()
      ));
    if (message.marketIds) {
      obj.marketIds = message.marketIds.map((e) => e);
    } else {
      obj.marketIds = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<OpenPositionIndex>): OpenPositionIndex {
    const message = { ...baseOpenPositionIndex } as OpenPositionIndex;
    message.address = object.address ?? new Uint8Array();
    message.marketIds = (object.marketIds ?? []).map((e) => e);
    return message;
  },
};

const baseOpenInterest: object = { marketId: "", openInterest: "" };

export const OpenInterest = {
  encode(
    message: OpenInterest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.openInterest !== "") {
      writer.uint32(18).string(message.openInterest);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenInterest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOpenInterest } as OpenInterest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.openInterest = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OpenInterest {
    const message = { ...baseOpenInterest } as OpenInterest;
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.openInterest =
      object.openInterest !== undefined && object.openInterest !== null
        ? String(object.openInterest)
        : "";
    return message;
  },

  toJSON(message: OpenInterest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.openInterest !== undefined &&
      (obj.openInterest = message.openInterest);
    return obj;
  },

  fromPartial(object: DeepPartial<OpenInterest>): OpenInterest {
    const message = { ...baseOpenInterest } as OpenInterest;
    message.marketId = object.marketId ?? "";
    message.openInterest = object.openInterest ?? "";
    return message;
  },
};

const baseAPIPosition: object = {
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
  updateCount: Long.UZERO,
  exitCount: Long.UZERO,
  isCross: false,
};

export const APIPosition = {
  encode(
    message: APIPosition,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      Timestamp.encode(
        toTimestamp(message.openedAt),
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.closedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.closedAt),
        writer.uint32(138).fork()
      ).ldelim();
    }
    if (!message.updateCount.isZero()) {
      writer.uint32(144).uint64(message.updateCount);
    }
    if (!message.exitCount.isZero()) {
      writer.uint32(152).uint64(message.exitCount);
    }
    if (message.isCross === true) {
      writer.uint32(160).bool(message.isCross);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIPosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAPIPosition } as APIPosition;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.tradeId = reader.uint64() as Long;
          break;
        case 4:
          message.side = reader.string();
          break;
        case 5:
          message.openedBlockHeight = reader.uint64() as Long;
          break;
        case 6:
          message.updatedBlockHeight = reader.uint64() as Long;
          break;
        case 7:
          message.closedBlockHeight = reader.uint64() as Long;
          break;
        case 8:
          message.realizedPnl = reader.string();
          break;
        case 9:
          message.maxLots = reader.string();
          break;
        case 10:
          message.totalFeeAmount = reader.string();
          break;
        case 11:
          message.avgAllocatedMargin = reader.string();
          break;
        case 12:
          message.avgEntryPrice = reader.string();
          break;
        case 13:
          message.avgExitPrice = reader.string();
          break;
        case 14:
          message.allocatedMargin = reader.string();
          break;
        case 15:
          message.lots = reader.string();
          break;
        case 16:
          message.openedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 17:
          message.closedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 18:
          message.updateCount = reader.uint64() as Long;
          break;
        case 19:
          message.exitCount = reader.uint64() as Long;
          break;
        case 20:
          message.isCross = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIPosition {
    const message = { ...baseAPIPosition } as APIPosition;
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.tradeId =
      object.tradeId !== undefined && object.tradeId !== null
        ? Long.fromString(object.tradeId)
        : Long.UZERO;
    message.side =
      object.side !== undefined && object.side !== null
        ? String(object.side)
        : "";
    message.openedBlockHeight =
      object.openedBlockHeight !== undefined &&
      object.openedBlockHeight !== null
        ? Long.fromString(object.openedBlockHeight)
        : Long.UZERO;
    message.updatedBlockHeight =
      object.updatedBlockHeight !== undefined &&
      object.updatedBlockHeight !== null
        ? Long.fromString(object.updatedBlockHeight)
        : Long.UZERO;
    message.closedBlockHeight =
      object.closedBlockHeight !== undefined &&
      object.closedBlockHeight !== null
        ? Long.fromString(object.closedBlockHeight)
        : Long.UZERO;
    message.realizedPnl =
      object.realizedPnl !== undefined && object.realizedPnl !== null
        ? String(object.realizedPnl)
        : "";
    message.maxLots =
      object.maxLots !== undefined && object.maxLots !== null
        ? String(object.maxLots)
        : "";
    message.totalFeeAmount =
      object.totalFeeAmount !== undefined && object.totalFeeAmount !== null
        ? String(object.totalFeeAmount)
        : "";
    message.avgAllocatedMargin =
      object.avgAllocatedMargin !== undefined &&
      object.avgAllocatedMargin !== null
        ? String(object.avgAllocatedMargin)
        : "";
    message.avgEntryPrice =
      object.avgEntryPrice !== undefined && object.avgEntryPrice !== null
        ? String(object.avgEntryPrice)
        : "";
    message.avgExitPrice =
      object.avgExitPrice !== undefined && object.avgExitPrice !== null
        ? String(object.avgExitPrice)
        : "";
    message.allocatedMargin =
      object.allocatedMargin !== undefined && object.allocatedMargin !== null
        ? String(object.allocatedMargin)
        : "";
    message.lots =
      object.lots !== undefined && object.lots !== null
        ? String(object.lots)
        : "";
    message.openedAt =
      object.openedAt !== undefined && object.openedAt !== null
        ? fromJsonTimestamp(object.openedAt)
        : undefined;
    message.closedAt =
      object.closedAt !== undefined && object.closedAt !== null
        ? fromJsonTimestamp(object.closedAt)
        : undefined;
    message.updateCount =
      object.updateCount !== undefined && object.updateCount !== null
        ? Long.fromString(object.updateCount)
        : Long.UZERO;
    message.exitCount =
      object.exitCount !== undefined && object.exitCount !== null
        ? Long.fromString(object.exitCount)
        : Long.UZERO;
    message.isCross =
      object.isCross !== undefined && object.isCross !== null
        ? Boolean(object.isCross)
        : false;
    return message;
  },

  toJSON(message: APIPosition): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.address !== undefined && (obj.address = message.address);
    message.tradeId !== undefined &&
      (obj.tradeId = (message.tradeId || Long.UZERO).toString());
    message.side !== undefined && (obj.side = message.side);
    message.openedBlockHeight !== undefined &&
      (obj.openedBlockHeight = (
        message.openedBlockHeight || Long.UZERO
      ).toString());
    message.updatedBlockHeight !== undefined &&
      (obj.updatedBlockHeight = (
        message.updatedBlockHeight || Long.UZERO
      ).toString());
    message.closedBlockHeight !== undefined &&
      (obj.closedBlockHeight = (
        message.closedBlockHeight || Long.UZERO
      ).toString());
    message.realizedPnl !== undefined &&
      (obj.realizedPnl = message.realizedPnl);
    message.maxLots !== undefined && (obj.maxLots = message.maxLots);
    message.totalFeeAmount !== undefined &&
      (obj.totalFeeAmount = message.totalFeeAmount);
    message.avgAllocatedMargin !== undefined &&
      (obj.avgAllocatedMargin = message.avgAllocatedMargin);
    message.avgEntryPrice !== undefined &&
      (obj.avgEntryPrice = message.avgEntryPrice);
    message.avgExitPrice !== undefined &&
      (obj.avgExitPrice = message.avgExitPrice);
    message.allocatedMargin !== undefined &&
      (obj.allocatedMargin = message.allocatedMargin);
    message.lots !== undefined && (obj.lots = message.lots);
    message.openedAt !== undefined &&
      (obj.openedAt = message.openedAt.toISOString());
    message.closedAt !== undefined &&
      (obj.closedAt = message.closedAt.toISOString());
    message.updateCount !== undefined &&
      (obj.updateCount = (message.updateCount || Long.UZERO).toString());
    message.exitCount !== undefined &&
      (obj.exitCount = (message.exitCount || Long.UZERO).toString());
    message.isCross !== undefined && (obj.isCross = message.isCross);
    return obj;
  },

  fromPartial(object: DeepPartial<APIPosition>): APIPosition {
    const message = { ...baseAPIPosition } as APIPosition;
    message.marketId = object.marketId ?? "";
    message.address = object.address ?? "";
    message.tradeId =
      object.tradeId !== undefined && object.tradeId !== null
        ? Long.fromValue(object.tradeId)
        : Long.UZERO;
    message.side = object.side ?? "";
    message.openedBlockHeight =
      object.openedBlockHeight !== undefined &&
      object.openedBlockHeight !== null
        ? Long.fromValue(object.openedBlockHeight)
        : Long.UZERO;
    message.updatedBlockHeight =
      object.updatedBlockHeight !== undefined &&
      object.updatedBlockHeight !== null
        ? Long.fromValue(object.updatedBlockHeight)
        : Long.UZERO;
    message.closedBlockHeight =
      object.closedBlockHeight !== undefined &&
      object.closedBlockHeight !== null
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
    message.updateCount =
      object.updateCount !== undefined && object.updateCount !== null
        ? Long.fromValue(object.updateCount)
        : Long.UZERO;
    message.exitCount =
      object.exitCount !== undefined && object.exitCount !== null
        ? Long.fromValue(object.exitCount)
        : Long.UZERO;
    message.isCross = object.isCross ?? false;
    return message;
  },
};

const basePositionAllocatedMargin: object = { denom: "", amount: "" };

export const PositionAllocatedMargin = {
  encode(
    message: PositionAllocatedMargin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PositionAllocatedMargin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...basePositionAllocatedMargin,
    } as PositionAllocatedMargin;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PositionAllocatedMargin {
    const message = {
      ...basePositionAllocatedMargin,
    } as PositionAllocatedMargin;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    return message;
  },

  toJSON(message: PositionAllocatedMargin): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<PositionAllocatedMargin>
  ): PositionAllocatedMargin {
    const message = {
      ...basePositionAllocatedMargin,
    } as PositionAllocatedMargin;
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

const baseCrossMaintenanceMargin: object = {
  marketId: "",
  marketDisplayName: "",
};

export const CrossMaintenanceMargin = {
  encode(
    message: CrossMaintenanceMargin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CrossMaintenanceMargin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCrossMaintenanceMargin } as CrossMaintenanceMargin;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.marketDisplayName = reader.string();
          break;
        case 3:
          message.maintenanceMargin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CrossMaintenanceMargin {
    const message = { ...baseCrossMaintenanceMargin } as CrossMaintenanceMargin;
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.marketDisplayName =
      object.marketDisplayName !== undefined &&
      object.marketDisplayName !== null
        ? String(object.marketDisplayName)
        : "";
    message.maintenanceMargin =
      object.maintenanceMargin !== undefined &&
      object.maintenanceMargin !== null
        ? Coin.fromJSON(object.maintenanceMargin)
        : undefined;
    return message;
  },

  toJSON(message: CrossMaintenanceMargin): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.marketDisplayName !== undefined &&
      (obj.marketDisplayName = message.marketDisplayName);
    message.maintenanceMargin !== undefined &&
      (obj.maintenanceMargin = message.maintenanceMargin
        ? Coin.toJSON(message.maintenanceMargin)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CrossMaintenanceMargin>
  ): CrossMaintenanceMargin {
    const message = { ...baseCrossMaintenanceMargin } as CrossMaintenanceMargin;
    message.marketId = object.marketId ?? "";
    message.marketDisplayName = object.marketDisplayName ?? "";
    message.maintenanceMargin =
      object.maintenanceMargin !== undefined &&
      object.maintenanceMargin !== null
        ? Coin.fromPartial(object.maintenanceMargin)
        : undefined;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

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
