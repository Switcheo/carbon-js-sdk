/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { Timestamp } from "../../../google/protobuf/timestamp";
import {
  StringValue,
  UInt32Value,
  BoolValue,
} from "../../../google/protobuf/wrappers";

export const protobufPackage = "Switcheo.carbon.market";

export interface ControlledParams {
  perpetualsFundingInterval?: Duration;
}

export interface Market {
  id: string;
  displayName: string;
  description: string;
  marketType: string;
  base: string;
  quote: string;
  basePrecision: Long;
  quotePrecision: Long;
  lotSize: string;
  tickSize: string;
  minQuantity: string;
  createdBlockHeight: Long;
  /** futures only */
  riskStepSize: string;
  initialMarginBase: string;
  initialMarginStep: string;
  maintenanceMarginRatio: string;
  maxLiquidationOrderTicket: string;
  maxLiquidationOrderDuration?: Duration;
  impactSize: string;
  markPriceBand: number;
  lastPriceProtectedBand: number;
  indexOracleId: string;
  expiryTime?: Date;
  isActive: boolean;
  isSettled: boolean;
  closedBlockHeight: Long;
  tradingBandwidth: number;
  maxOpenInterest: string;
}

export interface MarketParams {
  id: string;
  displayName?: string;
  description?: string;
  lotSize: string;
  tickSize: string;
  minQuantity: string;
  /** futures only */
  riskStepSize: string;
  initialMarginBase: string;
  initialMarginStep: string;
  maintenanceMarginRatio: string;
  maxLiquidationOrderTicket: string;
  maxLiquidationOrderDuration?: Duration;
  impactSize: string;
  markPriceBand?: number;
  lastPriceProtectedBand?: number;
  isActive?: boolean;
  tradingBandwidth?: number;
  expiryTime?: Date;
  maxOpenInterest: string;
}

export interface IncomingSpotMarketsToDisable {
  ids: string[];
}

const baseControlledParams: object = {};

export const ControlledParams = {
  encode(
    message: ControlledParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.perpetualsFundingInterval !== undefined) {
      Duration.encode(
        message.perpetualsFundingInterval,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControlledParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseControlledParams } as ControlledParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.perpetualsFundingInterval = Duration.decode(
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

  fromJSON(object: any): ControlledParams {
    const message = { ...baseControlledParams } as ControlledParams;
    message.perpetualsFundingInterval =
      object.perpetualsFundingInterval !== undefined &&
      object.perpetualsFundingInterval !== null
        ? Duration.fromJSON(object.perpetualsFundingInterval)
        : undefined;
    return message;
  },

  toJSON(message: ControlledParams): unknown {
    const obj: any = {};
    message.perpetualsFundingInterval !== undefined &&
      (obj.perpetualsFundingInterval = message.perpetualsFundingInterval
        ? Duration.toJSON(message.perpetualsFundingInterval)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ControlledParams>): ControlledParams {
    const message = { ...baseControlledParams } as ControlledParams;
    message.perpetualsFundingInterval =
      object.perpetualsFundingInterval !== undefined &&
      object.perpetualsFundingInterval !== null
        ? Duration.fromPartial(object.perpetualsFundingInterval)
        : undefined;
    return message;
  },
};

const baseMarket: object = {
  id: "",
  displayName: "",
  description: "",
  marketType: "",
  base: "",
  quote: "",
  basePrecision: Long.ZERO,
  quotePrecision: Long.ZERO,
  lotSize: "",
  tickSize: "",
  minQuantity: "",
  createdBlockHeight: Long.UZERO,
  riskStepSize: "",
  initialMarginBase: "",
  initialMarginStep: "",
  maintenanceMarginRatio: "",
  maxLiquidationOrderTicket: "",
  impactSize: "",
  markPriceBand: 0,
  lastPriceProtectedBand: 0,
  indexOracleId: "",
  isActive: false,
  isSettled: false,
  closedBlockHeight: Long.UZERO,
  tradingBandwidth: 0,
  maxOpenInterest: "",
};

export const Market = {
  encode(
    message: Market,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.marketType !== "") {
      writer.uint32(34).string(message.marketType);
    }
    if (message.base !== "") {
      writer.uint32(42).string(message.base);
    }
    if (message.quote !== "") {
      writer.uint32(50).string(message.quote);
    }
    if (!message.basePrecision.isZero()) {
      writer.uint32(56).int64(message.basePrecision);
    }
    if (!message.quotePrecision.isZero()) {
      writer.uint32(64).int64(message.quotePrecision);
    }
    if (message.lotSize !== "") {
      writer.uint32(74).string(message.lotSize);
    }
    if (message.tickSize !== "") {
      writer.uint32(82).string(message.tickSize);
    }
    if (message.minQuantity !== "") {
      writer.uint32(90).string(message.minQuantity);
    }
    if (!message.createdBlockHeight.isZero()) {
      writer.uint32(112).uint64(message.createdBlockHeight);
    }
    if (message.riskStepSize !== "") {
      writer.uint32(802).string(message.riskStepSize);
    }
    if (message.initialMarginBase !== "") {
      writer.uint32(810).string(message.initialMarginBase);
    }
    if (message.initialMarginStep !== "") {
      writer.uint32(818).string(message.initialMarginStep);
    }
    if (message.maintenanceMarginRatio !== "") {
      writer.uint32(826).string(message.maintenanceMarginRatio);
    }
    if (message.maxLiquidationOrderTicket !== "") {
      writer.uint32(834).string(message.maxLiquidationOrderTicket);
    }
    if (message.maxLiquidationOrderDuration !== undefined) {
      Duration.encode(
        message.maxLiquidationOrderDuration,
        writer.uint32(842).fork()
      ).ldelim();
    }
    if (message.impactSize !== "") {
      writer.uint32(850).string(message.impactSize);
    }
    if (message.markPriceBand !== 0) {
      writer.uint32(856).uint32(message.markPriceBand);
    }
    if (message.lastPriceProtectedBand !== 0) {
      writer.uint32(864).uint32(message.lastPriceProtectedBand);
    }
    if (message.indexOracleId !== "") {
      writer.uint32(874).string(message.indexOracleId);
    }
    if (message.expiryTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expiryTime),
        writer.uint32(882).fork()
      ).ldelim();
    }
    if (message.isActive === true) {
      writer.uint32(888).bool(message.isActive);
    }
    if (message.isSettled === true) {
      writer.uint32(896).bool(message.isSettled);
    }
    if (!message.closedBlockHeight.isZero()) {
      writer.uint32(904).uint64(message.closedBlockHeight);
    }
    if (message.tradingBandwidth !== 0) {
      writer.uint32(912).uint32(message.tradingBandwidth);
    }
    if (message.maxOpenInterest !== "") {
      writer.uint32(922).string(message.maxOpenInterest);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Market {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMarket } as Market;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.displayName = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.marketType = reader.string();
          break;
        case 5:
          message.base = reader.string();
          break;
        case 6:
          message.quote = reader.string();
          break;
        case 7:
          message.basePrecision = reader.int64() as Long;
          break;
        case 8:
          message.quotePrecision = reader.int64() as Long;
          break;
        case 9:
          message.lotSize = reader.string();
          break;
        case 10:
          message.tickSize = reader.string();
          break;
        case 11:
          message.minQuantity = reader.string();
          break;
        case 14:
          message.createdBlockHeight = reader.uint64() as Long;
          break;
        case 100:
          message.riskStepSize = reader.string();
          break;
        case 101:
          message.initialMarginBase = reader.string();
          break;
        case 102:
          message.initialMarginStep = reader.string();
          break;
        case 103:
          message.maintenanceMarginRatio = reader.string();
          break;
        case 104:
          message.maxLiquidationOrderTicket = reader.string();
          break;
        case 105:
          message.maxLiquidationOrderDuration = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 106:
          message.impactSize = reader.string();
          break;
        case 107:
          message.markPriceBand = reader.uint32();
          break;
        case 108:
          message.lastPriceProtectedBand = reader.uint32();
          break;
        case 109:
          message.indexOracleId = reader.string();
          break;
        case 110:
          message.expiryTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 111:
          message.isActive = reader.bool();
          break;
        case 112:
          message.isSettled = reader.bool();
          break;
        case 113:
          message.closedBlockHeight = reader.uint64() as Long;
          break;
        case 114:
          message.tradingBandwidth = reader.uint32();
          break;
        case 115:
          message.maxOpenInterest = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Market {
    const message = { ...baseMarket } as Market;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.displayName =
      object.displayName !== undefined && object.displayName !== null
        ? String(object.displayName)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.marketType =
      object.marketType !== undefined && object.marketType !== null
        ? String(object.marketType)
        : "";
    message.base =
      object.base !== undefined && object.base !== null
        ? String(object.base)
        : "";
    message.quote =
      object.quote !== undefined && object.quote !== null
        ? String(object.quote)
        : "";
    message.basePrecision =
      object.basePrecision !== undefined && object.basePrecision !== null
        ? Long.fromString(object.basePrecision)
        : Long.ZERO;
    message.quotePrecision =
      object.quotePrecision !== undefined && object.quotePrecision !== null
        ? Long.fromString(object.quotePrecision)
        : Long.ZERO;
    message.lotSize =
      object.lotSize !== undefined && object.lotSize !== null
        ? String(object.lotSize)
        : "";
    message.tickSize =
      object.tickSize !== undefined && object.tickSize !== null
        ? String(object.tickSize)
        : "";
    message.minQuantity =
      object.minQuantity !== undefined && object.minQuantity !== null
        ? String(object.minQuantity)
        : "";
    message.createdBlockHeight =
      object.createdBlockHeight !== undefined &&
      object.createdBlockHeight !== null
        ? Long.fromString(object.createdBlockHeight)
        : Long.UZERO;
    message.riskStepSize =
      object.riskStepSize !== undefined && object.riskStepSize !== null
        ? String(object.riskStepSize)
        : "";
    message.initialMarginBase =
      object.initialMarginBase !== undefined &&
      object.initialMarginBase !== null
        ? String(object.initialMarginBase)
        : "";
    message.initialMarginStep =
      object.initialMarginStep !== undefined &&
      object.initialMarginStep !== null
        ? String(object.initialMarginStep)
        : "";
    message.maintenanceMarginRatio =
      object.maintenanceMarginRatio !== undefined &&
      object.maintenanceMarginRatio !== null
        ? String(object.maintenanceMarginRatio)
        : "";
    message.maxLiquidationOrderTicket =
      object.maxLiquidationOrderTicket !== undefined &&
      object.maxLiquidationOrderTicket !== null
        ? String(object.maxLiquidationOrderTicket)
        : "";
    message.maxLiquidationOrderDuration =
      object.maxLiquidationOrderDuration !== undefined &&
      object.maxLiquidationOrderDuration !== null
        ? Duration.fromJSON(object.maxLiquidationOrderDuration)
        : undefined;
    message.impactSize =
      object.impactSize !== undefined && object.impactSize !== null
        ? String(object.impactSize)
        : "";
    message.markPriceBand =
      object.markPriceBand !== undefined && object.markPriceBand !== null
        ? Number(object.markPriceBand)
        : 0;
    message.lastPriceProtectedBand =
      object.lastPriceProtectedBand !== undefined &&
      object.lastPriceProtectedBand !== null
        ? Number(object.lastPriceProtectedBand)
        : 0;
    message.indexOracleId =
      object.indexOracleId !== undefined && object.indexOracleId !== null
        ? String(object.indexOracleId)
        : "";
    message.expiryTime =
      object.expiryTime !== undefined && object.expiryTime !== null
        ? fromJsonTimestamp(object.expiryTime)
        : undefined;
    message.isActive =
      object.isActive !== undefined && object.isActive !== null
        ? Boolean(object.isActive)
        : false;
    message.isSettled =
      object.isSettled !== undefined && object.isSettled !== null
        ? Boolean(object.isSettled)
        : false;
    message.closedBlockHeight =
      object.closedBlockHeight !== undefined &&
      object.closedBlockHeight !== null
        ? Long.fromString(object.closedBlockHeight)
        : Long.UZERO;
    message.tradingBandwidth =
      object.tradingBandwidth !== undefined && object.tradingBandwidth !== null
        ? Number(object.tradingBandwidth)
        : 0;
    message.maxOpenInterest =
      object.maxOpenInterest !== undefined && object.maxOpenInterest !== null
        ? String(object.maxOpenInterest)
        : "";
    return message;
  },

  toJSON(message: Market): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.displayName !== undefined &&
      (obj.displayName = message.displayName);
    message.description !== undefined &&
      (obj.description = message.description);
    message.marketType !== undefined && (obj.marketType = message.marketType);
    message.base !== undefined && (obj.base = message.base);
    message.quote !== undefined && (obj.quote = message.quote);
    message.basePrecision !== undefined &&
      (obj.basePrecision = (message.basePrecision || Long.ZERO).toString());
    message.quotePrecision !== undefined &&
      (obj.quotePrecision = (message.quotePrecision || Long.ZERO).toString());
    message.lotSize !== undefined && (obj.lotSize = message.lotSize);
    message.tickSize !== undefined && (obj.tickSize = message.tickSize);
    message.minQuantity !== undefined &&
      (obj.minQuantity = message.minQuantity);
    message.createdBlockHeight !== undefined &&
      (obj.createdBlockHeight = (
        message.createdBlockHeight || Long.UZERO
      ).toString());
    message.riskStepSize !== undefined &&
      (obj.riskStepSize = message.riskStepSize);
    message.initialMarginBase !== undefined &&
      (obj.initialMarginBase = message.initialMarginBase);
    message.initialMarginStep !== undefined &&
      (obj.initialMarginStep = message.initialMarginStep);
    message.maintenanceMarginRatio !== undefined &&
      (obj.maintenanceMarginRatio = message.maintenanceMarginRatio);
    message.maxLiquidationOrderTicket !== undefined &&
      (obj.maxLiquidationOrderTicket = message.maxLiquidationOrderTicket);
    message.maxLiquidationOrderDuration !== undefined &&
      (obj.maxLiquidationOrderDuration = message.maxLiquidationOrderDuration
        ? Duration.toJSON(message.maxLiquidationOrderDuration)
        : undefined);
    message.impactSize !== undefined && (obj.impactSize = message.impactSize);
    message.markPriceBand !== undefined &&
      (obj.markPriceBand = message.markPriceBand);
    message.lastPriceProtectedBand !== undefined &&
      (obj.lastPriceProtectedBand = message.lastPriceProtectedBand);
    message.indexOracleId !== undefined &&
      (obj.indexOracleId = message.indexOracleId);
    message.expiryTime !== undefined &&
      (obj.expiryTime = message.expiryTime.toISOString());
    message.isActive !== undefined && (obj.isActive = message.isActive);
    message.isSettled !== undefined && (obj.isSettled = message.isSettled);
    message.closedBlockHeight !== undefined &&
      (obj.closedBlockHeight = (
        message.closedBlockHeight || Long.UZERO
      ).toString());
    message.tradingBandwidth !== undefined &&
      (obj.tradingBandwidth = message.tradingBandwidth);
    message.maxOpenInterest !== undefined &&
      (obj.maxOpenInterest = message.maxOpenInterest);
    return obj;
  },

  fromPartial(object: DeepPartial<Market>): Market {
    const message = { ...baseMarket } as Market;
    message.id = object.id ?? "";
    message.displayName = object.displayName ?? "";
    message.description = object.description ?? "";
    message.marketType = object.marketType ?? "";
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    message.basePrecision =
      object.basePrecision !== undefined && object.basePrecision !== null
        ? Long.fromValue(object.basePrecision)
        : Long.ZERO;
    message.quotePrecision =
      object.quotePrecision !== undefined && object.quotePrecision !== null
        ? Long.fromValue(object.quotePrecision)
        : Long.ZERO;
    message.lotSize = object.lotSize ?? "";
    message.tickSize = object.tickSize ?? "";
    message.minQuantity = object.minQuantity ?? "";
    message.createdBlockHeight =
      object.createdBlockHeight !== undefined &&
      object.createdBlockHeight !== null
        ? Long.fromValue(object.createdBlockHeight)
        : Long.UZERO;
    message.riskStepSize = object.riskStepSize ?? "";
    message.initialMarginBase = object.initialMarginBase ?? "";
    message.initialMarginStep = object.initialMarginStep ?? "";
    message.maintenanceMarginRatio = object.maintenanceMarginRatio ?? "";
    message.maxLiquidationOrderTicket = object.maxLiquidationOrderTicket ?? "";
    message.maxLiquidationOrderDuration =
      object.maxLiquidationOrderDuration !== undefined &&
      object.maxLiquidationOrderDuration !== null
        ? Duration.fromPartial(object.maxLiquidationOrderDuration)
        : undefined;
    message.impactSize = object.impactSize ?? "";
    message.markPriceBand = object.markPriceBand ?? 0;
    message.lastPriceProtectedBand = object.lastPriceProtectedBand ?? 0;
    message.indexOracleId = object.indexOracleId ?? "";
    message.expiryTime = object.expiryTime ?? undefined;
    message.isActive = object.isActive ?? false;
    message.isSettled = object.isSettled ?? false;
    message.closedBlockHeight =
      object.closedBlockHeight !== undefined &&
      object.closedBlockHeight !== null
        ? Long.fromValue(object.closedBlockHeight)
        : Long.UZERO;
    message.tradingBandwidth = object.tradingBandwidth ?? 0;
    message.maxOpenInterest = object.maxOpenInterest ?? "";
    return message;
  },
};

const baseMarketParams: object = {
  id: "",
  lotSize: "",
  tickSize: "",
  minQuantity: "",
  riskStepSize: "",
  initialMarginBase: "",
  initialMarginStep: "",
  maintenanceMarginRatio: "",
  maxLiquidationOrderTicket: "",
  impactSize: "",
  maxOpenInterest: "",
};

export const MarketParams = {
  encode(
    message: MarketParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.displayName !== undefined) {
      StringValue.encode(
        { value: message.displayName! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.description !== undefined) {
      StringValue.encode(
        { value: message.description! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.lotSize !== "") {
      writer.uint32(82).string(message.lotSize);
    }
    if (message.tickSize !== "") {
      writer.uint32(90).string(message.tickSize);
    }
    if (message.minQuantity !== "") {
      writer.uint32(98).string(message.minQuantity);
    }
    if (message.riskStepSize !== "") {
      writer.uint32(802).string(message.riskStepSize);
    }
    if (message.initialMarginBase !== "") {
      writer.uint32(810).string(message.initialMarginBase);
    }
    if (message.initialMarginStep !== "") {
      writer.uint32(818).string(message.initialMarginStep);
    }
    if (message.maintenanceMarginRatio !== "") {
      writer.uint32(826).string(message.maintenanceMarginRatio);
    }
    if (message.maxLiquidationOrderTicket !== "") {
      writer.uint32(834).string(message.maxLiquidationOrderTicket);
    }
    if (message.maxLiquidationOrderDuration !== undefined) {
      Duration.encode(
        message.maxLiquidationOrderDuration,
        writer.uint32(842).fork()
      ).ldelim();
    }
    if (message.impactSize !== "") {
      writer.uint32(850).string(message.impactSize);
    }
    if (message.markPriceBand !== undefined) {
      UInt32Value.encode(
        { value: message.markPriceBand! },
        writer.uint32(858).fork()
      ).ldelim();
    }
    if (message.lastPriceProtectedBand !== undefined) {
      UInt32Value.encode(
        { value: message.lastPriceProtectedBand! },
        writer.uint32(866).fork()
      ).ldelim();
    }
    if (message.isActive !== undefined) {
      BoolValue.encode(
        { value: message.isActive! },
        writer.uint32(890).fork()
      ).ldelim();
    }
    if (message.tradingBandwidth !== undefined) {
      UInt32Value.encode(
        { value: message.tradingBandwidth! },
        writer.uint32(914).fork()
      ).ldelim();
    }
    if (message.expiryTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expiryTime),
        writer.uint32(922).fork()
      ).ldelim();
    }
    if (message.maxOpenInterest !== "") {
      writer.uint32(930).string(message.maxOpenInterest);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMarketParams } as MarketParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.displayName = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 3:
          message.description = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 10:
          message.lotSize = reader.string();
          break;
        case 11:
          message.tickSize = reader.string();
          break;
        case 12:
          message.minQuantity = reader.string();
          break;
        case 100:
          message.riskStepSize = reader.string();
          break;
        case 101:
          message.initialMarginBase = reader.string();
          break;
        case 102:
          message.initialMarginStep = reader.string();
          break;
        case 103:
          message.maintenanceMarginRatio = reader.string();
          break;
        case 104:
          message.maxLiquidationOrderTicket = reader.string();
          break;
        case 105:
          message.maxLiquidationOrderDuration = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 106:
          message.impactSize = reader.string();
          break;
        case 107:
          message.markPriceBand = UInt32Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 108:
          message.lastPriceProtectedBand = UInt32Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 111:
          message.isActive = BoolValue.decode(reader, reader.uint32()).value;
          break;
        case 114:
          message.tradingBandwidth = UInt32Value.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 115:
          message.expiryTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 116:
          message.maxOpenInterest = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketParams {
    const message = { ...baseMarketParams } as MarketParams;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.displayName =
      object.displayName !== undefined && object.displayName !== null
        ? String(object.displayName)
        : undefined;
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : undefined;
    message.lotSize =
      object.lotSize !== undefined && object.lotSize !== null
        ? String(object.lotSize)
        : "";
    message.tickSize =
      object.tickSize !== undefined && object.tickSize !== null
        ? String(object.tickSize)
        : "";
    message.minQuantity =
      object.minQuantity !== undefined && object.minQuantity !== null
        ? String(object.minQuantity)
        : "";
    message.riskStepSize =
      object.riskStepSize !== undefined && object.riskStepSize !== null
        ? String(object.riskStepSize)
        : "";
    message.initialMarginBase =
      object.initialMarginBase !== undefined &&
      object.initialMarginBase !== null
        ? String(object.initialMarginBase)
        : "";
    message.initialMarginStep =
      object.initialMarginStep !== undefined &&
      object.initialMarginStep !== null
        ? String(object.initialMarginStep)
        : "";
    message.maintenanceMarginRatio =
      object.maintenanceMarginRatio !== undefined &&
      object.maintenanceMarginRatio !== null
        ? String(object.maintenanceMarginRatio)
        : "";
    message.maxLiquidationOrderTicket =
      object.maxLiquidationOrderTicket !== undefined &&
      object.maxLiquidationOrderTicket !== null
        ? String(object.maxLiquidationOrderTicket)
        : "";
    message.maxLiquidationOrderDuration =
      object.maxLiquidationOrderDuration !== undefined &&
      object.maxLiquidationOrderDuration !== null
        ? Duration.fromJSON(object.maxLiquidationOrderDuration)
        : undefined;
    message.impactSize =
      object.impactSize !== undefined && object.impactSize !== null
        ? String(object.impactSize)
        : "";
    message.markPriceBand =
      object.markPriceBand !== undefined && object.markPriceBand !== null
        ? Number(object.markPriceBand)
        : undefined;
    message.lastPriceProtectedBand =
      object.lastPriceProtectedBand !== undefined &&
      object.lastPriceProtectedBand !== null
        ? Number(object.lastPriceProtectedBand)
        : undefined;
    message.isActive =
      object.isActive !== undefined && object.isActive !== null
        ? Boolean(object.isActive)
        : undefined;
    message.tradingBandwidth =
      object.tradingBandwidth !== undefined && object.tradingBandwidth !== null
        ? Number(object.tradingBandwidth)
        : undefined;
    message.expiryTime =
      object.expiryTime !== undefined && object.expiryTime !== null
        ? fromJsonTimestamp(object.expiryTime)
        : undefined;
    message.maxOpenInterest =
      object.maxOpenInterest !== undefined && object.maxOpenInterest !== null
        ? String(object.maxOpenInterest)
        : "";
    return message;
  },

  toJSON(message: MarketParams): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.displayName !== undefined &&
      (obj.displayName = message.displayName);
    message.description !== undefined &&
      (obj.description = message.description);
    message.lotSize !== undefined && (obj.lotSize = message.lotSize);
    message.tickSize !== undefined && (obj.tickSize = message.tickSize);
    message.minQuantity !== undefined &&
      (obj.minQuantity = message.minQuantity);
    message.riskStepSize !== undefined &&
      (obj.riskStepSize = message.riskStepSize);
    message.initialMarginBase !== undefined &&
      (obj.initialMarginBase = message.initialMarginBase);
    message.initialMarginStep !== undefined &&
      (obj.initialMarginStep = message.initialMarginStep);
    message.maintenanceMarginRatio !== undefined &&
      (obj.maintenanceMarginRatio = message.maintenanceMarginRatio);
    message.maxLiquidationOrderTicket !== undefined &&
      (obj.maxLiquidationOrderTicket = message.maxLiquidationOrderTicket);
    message.maxLiquidationOrderDuration !== undefined &&
      (obj.maxLiquidationOrderDuration = message.maxLiquidationOrderDuration
        ? Duration.toJSON(message.maxLiquidationOrderDuration)
        : undefined);
    message.impactSize !== undefined && (obj.impactSize = message.impactSize);
    message.markPriceBand !== undefined &&
      (obj.markPriceBand = message.markPriceBand);
    message.lastPriceProtectedBand !== undefined &&
      (obj.lastPriceProtectedBand = message.lastPriceProtectedBand);
    message.isActive !== undefined && (obj.isActive = message.isActive);
    message.tradingBandwidth !== undefined &&
      (obj.tradingBandwidth = message.tradingBandwidth);
    message.expiryTime !== undefined &&
      (obj.expiryTime = message.expiryTime.toISOString());
    message.maxOpenInterest !== undefined &&
      (obj.maxOpenInterest = message.maxOpenInterest);
    return obj;
  },

  fromPartial(object: DeepPartial<MarketParams>): MarketParams {
    const message = { ...baseMarketParams } as MarketParams;
    message.id = object.id ?? "";
    message.displayName = object.displayName ?? undefined;
    message.description = object.description ?? undefined;
    message.lotSize = object.lotSize ?? "";
    message.tickSize = object.tickSize ?? "";
    message.minQuantity = object.minQuantity ?? "";
    message.riskStepSize = object.riskStepSize ?? "";
    message.initialMarginBase = object.initialMarginBase ?? "";
    message.initialMarginStep = object.initialMarginStep ?? "";
    message.maintenanceMarginRatio = object.maintenanceMarginRatio ?? "";
    message.maxLiquidationOrderTicket = object.maxLiquidationOrderTicket ?? "";
    message.maxLiquidationOrderDuration =
      object.maxLiquidationOrderDuration !== undefined &&
      object.maxLiquidationOrderDuration !== null
        ? Duration.fromPartial(object.maxLiquidationOrderDuration)
        : undefined;
    message.impactSize = object.impactSize ?? "";
    message.markPriceBand = object.markPriceBand ?? undefined;
    message.lastPriceProtectedBand = object.lastPriceProtectedBand ?? undefined;
    message.isActive = object.isActive ?? undefined;
    message.tradingBandwidth = object.tradingBandwidth ?? undefined;
    message.expiryTime = object.expiryTime ?? undefined;
    message.maxOpenInterest = object.maxOpenInterest ?? "";
    return message;
  },
};

const baseIncomingSpotMarketsToDisable: object = { ids: "" };

export const IncomingSpotMarketsToDisable = {
  encode(
    message: IncomingSpotMarketsToDisable,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.ids) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): IncomingSpotMarketsToDisable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseIncomingSpotMarketsToDisable,
    } as IncomingSpotMarketsToDisable;
    message.ids = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ids.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IncomingSpotMarketsToDisable {
    const message = {
      ...baseIncomingSpotMarketsToDisable,
    } as IncomingSpotMarketsToDisable;
    message.ids = (object.ids ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: IncomingSpotMarketsToDisable): unknown {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map((e) => e);
    } else {
      obj.ids = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<IncomingSpotMarketsToDisable>
  ): IncomingSpotMarketsToDisable {
    const message = {
      ...baseIncomingSpotMarketsToDisable,
    } as IncomingSpotMarketsToDisable;
    message.ids = (object.ids ?? []).map((e) => e);
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
