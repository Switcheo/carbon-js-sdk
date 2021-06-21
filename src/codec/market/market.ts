/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../google/protobuf/duration";
import { Timestamp } from "../google/protobuf/timestamp";
import {
  StringValue,
  UInt32Value,
  BoolValue,
} from "../google/protobuf/wrappers";

export const protobufPackage = "Switcheo.carbon.market";

export interface Market {
  name: string;
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
  makerFee: string;
  takerFee: string;
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
}

export interface MarketParams {
  name: string;
  displayName?: string;
  description?: string;
  /**
   * string lot_size = 10 [
   *   (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int",
   *   (gogoproto.moretags) = "yaml:\"lot_size\"",
   *   (gogoproto.nullable) = true
   * ];
   * string tick_size = 11 [
   *   (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Dec",
   *   (gogoproto.moretags) = "yaml:\"tick_size\"",
   *   (gogoproto.nullable) = true
   * ];
   */
  minQuantity: string;
  makerFee: string;
  takerFee: string;
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
}

const baseMarket: object = {
  name: "",
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
  makerFee: "",
  takerFee: "",
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
};

export const Market = {
  encode(
    message: Market,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
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
    if (message.makerFee !== "") {
      writer.uint32(98).string(message.makerFee);
    }
    if (message.takerFee !== "") {
      writer.uint32(106).string(message.takerFee);
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
          message.name = reader.string();
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
        case 12:
          message.makerFee = reader.string();
          break;
        case 13:
          message.takerFee = reader.string();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Market {
    const message = { ...baseMarket } as Market;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.displayName !== undefined && object.displayName !== null) {
      message.displayName = String(object.displayName);
    } else {
      message.displayName = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.marketType !== undefined && object.marketType !== null) {
      message.marketType = String(object.marketType);
    } else {
      message.marketType = "";
    }
    if (object.base !== undefined && object.base !== null) {
      message.base = String(object.base);
    } else {
      message.base = "";
    }
    if (object.quote !== undefined && object.quote !== null) {
      message.quote = String(object.quote);
    } else {
      message.quote = "";
    }
    if (object.basePrecision !== undefined && object.basePrecision !== null) {
      message.basePrecision = Long.fromString(object.basePrecision);
    } else {
      message.basePrecision = Long.ZERO;
    }
    if (object.quotePrecision !== undefined && object.quotePrecision !== null) {
      message.quotePrecision = Long.fromString(object.quotePrecision);
    } else {
      message.quotePrecision = Long.ZERO;
    }
    if (object.lotSize !== undefined && object.lotSize !== null) {
      message.lotSize = String(object.lotSize);
    } else {
      message.lotSize = "";
    }
    if (object.tickSize !== undefined && object.tickSize !== null) {
      message.tickSize = String(object.tickSize);
    } else {
      message.tickSize = "";
    }
    if (object.minQuantity !== undefined && object.minQuantity !== null) {
      message.minQuantity = String(object.minQuantity);
    } else {
      message.minQuantity = "";
    }
    if (object.makerFee !== undefined && object.makerFee !== null) {
      message.makerFee = String(object.makerFee);
    } else {
      message.makerFee = "";
    }
    if (object.takerFee !== undefined && object.takerFee !== null) {
      message.takerFee = String(object.takerFee);
    } else {
      message.takerFee = "";
    }
    if (
      object.createdBlockHeight !== undefined &&
      object.createdBlockHeight !== null
    ) {
      message.createdBlockHeight = Long.fromString(object.createdBlockHeight);
    } else {
      message.createdBlockHeight = Long.UZERO;
    }
    if (object.riskStepSize !== undefined && object.riskStepSize !== null) {
      message.riskStepSize = String(object.riskStepSize);
    } else {
      message.riskStepSize = "";
    }
    if (
      object.initialMarginBase !== undefined &&
      object.initialMarginBase !== null
    ) {
      message.initialMarginBase = String(object.initialMarginBase);
    } else {
      message.initialMarginBase = "";
    }
    if (
      object.initialMarginStep !== undefined &&
      object.initialMarginStep !== null
    ) {
      message.initialMarginStep = String(object.initialMarginStep);
    } else {
      message.initialMarginStep = "";
    }
    if (
      object.maintenanceMarginRatio !== undefined &&
      object.maintenanceMarginRatio !== null
    ) {
      message.maintenanceMarginRatio = String(object.maintenanceMarginRatio);
    } else {
      message.maintenanceMarginRatio = "";
    }
    if (
      object.maxLiquidationOrderTicket !== undefined &&
      object.maxLiquidationOrderTicket !== null
    ) {
      message.maxLiquidationOrderTicket = String(
        object.maxLiquidationOrderTicket
      );
    } else {
      message.maxLiquidationOrderTicket = "";
    }
    if (
      object.maxLiquidationOrderDuration !== undefined &&
      object.maxLiquidationOrderDuration !== null
    ) {
      message.maxLiquidationOrderDuration = Duration.fromJSON(
        object.maxLiquidationOrderDuration
      );
    } else {
      message.maxLiquidationOrderDuration = undefined;
    }
    if (object.impactSize !== undefined && object.impactSize !== null) {
      message.impactSize = String(object.impactSize);
    } else {
      message.impactSize = "";
    }
    if (object.markPriceBand !== undefined && object.markPriceBand !== null) {
      message.markPriceBand = Number(object.markPriceBand);
    } else {
      message.markPriceBand = 0;
    }
    if (
      object.lastPriceProtectedBand !== undefined &&
      object.lastPriceProtectedBand !== null
    ) {
      message.lastPriceProtectedBand = Number(object.lastPriceProtectedBand);
    } else {
      message.lastPriceProtectedBand = 0;
    }
    if (object.indexOracleId !== undefined && object.indexOracleId !== null) {
      message.indexOracleId = String(object.indexOracleId);
    } else {
      message.indexOracleId = "";
    }
    if (object.expiryTime !== undefined && object.expiryTime !== null) {
      message.expiryTime = fromJsonTimestamp(object.expiryTime);
    } else {
      message.expiryTime = undefined;
    }
    if (object.isActive !== undefined && object.isActive !== null) {
      message.isActive = Boolean(object.isActive);
    } else {
      message.isActive = false;
    }
    if (object.isSettled !== undefined && object.isSettled !== null) {
      message.isSettled = Boolean(object.isSettled);
    } else {
      message.isSettled = false;
    }
    if (
      object.closedBlockHeight !== undefined &&
      object.closedBlockHeight !== null
    ) {
      message.closedBlockHeight = Long.fromString(object.closedBlockHeight);
    } else {
      message.closedBlockHeight = Long.UZERO;
    }
    return message;
  },

  toJSON(message: Market): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
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
    message.makerFee !== undefined && (obj.makerFee = message.makerFee);
    message.takerFee !== undefined && (obj.takerFee = message.takerFee);
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
    return obj;
  },

  fromPartial(object: DeepPartial<Market>): Market {
    const message = { ...baseMarket } as Market;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.displayName !== undefined && object.displayName !== null) {
      message.displayName = object.displayName;
    } else {
      message.displayName = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.marketType !== undefined && object.marketType !== null) {
      message.marketType = object.marketType;
    } else {
      message.marketType = "";
    }
    if (object.base !== undefined && object.base !== null) {
      message.base = object.base;
    } else {
      message.base = "";
    }
    if (object.quote !== undefined && object.quote !== null) {
      message.quote = object.quote;
    } else {
      message.quote = "";
    }
    if (object.basePrecision !== undefined && object.basePrecision !== null) {
      message.basePrecision = object.basePrecision as Long;
    } else {
      message.basePrecision = Long.ZERO;
    }
    if (object.quotePrecision !== undefined && object.quotePrecision !== null) {
      message.quotePrecision = object.quotePrecision as Long;
    } else {
      message.quotePrecision = Long.ZERO;
    }
    if (object.lotSize !== undefined && object.lotSize !== null) {
      message.lotSize = object.lotSize;
    } else {
      message.lotSize = "";
    }
    if (object.tickSize !== undefined && object.tickSize !== null) {
      message.tickSize = object.tickSize;
    } else {
      message.tickSize = "";
    }
    if (object.minQuantity !== undefined && object.minQuantity !== null) {
      message.minQuantity = object.minQuantity;
    } else {
      message.minQuantity = "";
    }
    if (object.makerFee !== undefined && object.makerFee !== null) {
      message.makerFee = object.makerFee;
    } else {
      message.makerFee = "";
    }
    if (object.takerFee !== undefined && object.takerFee !== null) {
      message.takerFee = object.takerFee;
    } else {
      message.takerFee = "";
    }
    if (
      object.createdBlockHeight !== undefined &&
      object.createdBlockHeight !== null
    ) {
      message.createdBlockHeight = object.createdBlockHeight as Long;
    } else {
      message.createdBlockHeight = Long.UZERO;
    }
    if (object.riskStepSize !== undefined && object.riskStepSize !== null) {
      message.riskStepSize = object.riskStepSize;
    } else {
      message.riskStepSize = "";
    }
    if (
      object.initialMarginBase !== undefined &&
      object.initialMarginBase !== null
    ) {
      message.initialMarginBase = object.initialMarginBase;
    } else {
      message.initialMarginBase = "";
    }
    if (
      object.initialMarginStep !== undefined &&
      object.initialMarginStep !== null
    ) {
      message.initialMarginStep = object.initialMarginStep;
    } else {
      message.initialMarginStep = "";
    }
    if (
      object.maintenanceMarginRatio !== undefined &&
      object.maintenanceMarginRatio !== null
    ) {
      message.maintenanceMarginRatio = object.maintenanceMarginRatio;
    } else {
      message.maintenanceMarginRatio = "";
    }
    if (
      object.maxLiquidationOrderTicket !== undefined &&
      object.maxLiquidationOrderTicket !== null
    ) {
      message.maxLiquidationOrderTicket = object.maxLiquidationOrderTicket;
    } else {
      message.maxLiquidationOrderTicket = "";
    }
    if (
      object.maxLiquidationOrderDuration !== undefined &&
      object.maxLiquidationOrderDuration !== null
    ) {
      message.maxLiquidationOrderDuration = Duration.fromPartial(
        object.maxLiquidationOrderDuration
      );
    } else {
      message.maxLiquidationOrderDuration = undefined;
    }
    if (object.impactSize !== undefined && object.impactSize !== null) {
      message.impactSize = object.impactSize;
    } else {
      message.impactSize = "";
    }
    if (object.markPriceBand !== undefined && object.markPriceBand !== null) {
      message.markPriceBand = object.markPriceBand;
    } else {
      message.markPriceBand = 0;
    }
    if (
      object.lastPriceProtectedBand !== undefined &&
      object.lastPriceProtectedBand !== null
    ) {
      message.lastPriceProtectedBand = object.lastPriceProtectedBand;
    } else {
      message.lastPriceProtectedBand = 0;
    }
    if (object.indexOracleId !== undefined && object.indexOracleId !== null) {
      message.indexOracleId = object.indexOracleId;
    } else {
      message.indexOracleId = "";
    }
    if (object.expiryTime !== undefined && object.expiryTime !== null) {
      message.expiryTime = object.expiryTime;
    } else {
      message.expiryTime = undefined;
    }
    if (object.isActive !== undefined && object.isActive !== null) {
      message.isActive = object.isActive;
    } else {
      message.isActive = false;
    }
    if (object.isSettled !== undefined && object.isSettled !== null) {
      message.isSettled = object.isSettled;
    } else {
      message.isSettled = false;
    }
    if (
      object.closedBlockHeight !== undefined &&
      object.closedBlockHeight !== null
    ) {
      message.closedBlockHeight = object.closedBlockHeight as Long;
    } else {
      message.closedBlockHeight = Long.UZERO;
    }
    return message;
  },
};

const baseMarketParams: object = {
  name: "",
  minQuantity: "",
  makerFee: "",
  takerFee: "",
  riskStepSize: "",
  initialMarginBase: "",
  initialMarginStep: "",
  maintenanceMarginRatio: "",
  maxLiquidationOrderTicket: "",
  impactSize: "",
};

export const MarketParams = {
  encode(
    message: MarketParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
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
    if (message.minQuantity !== "") {
      writer.uint32(98).string(message.minQuantity);
    }
    if (message.makerFee !== "") {
      writer.uint32(106).string(message.makerFee);
    }
    if (message.takerFee !== "") {
      writer.uint32(114).string(message.takerFee);
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
          message.name = reader.string();
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
        case 12:
          message.minQuantity = reader.string();
          break;
        case 13:
          message.makerFee = reader.string();
          break;
        case 14:
          message.takerFee = reader.string();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketParams {
    const message = { ...baseMarketParams } as MarketParams;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.displayName !== undefined && object.displayName !== null) {
      message.displayName = String(object.displayName);
    } else {
      message.displayName = undefined;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = undefined;
    }
    if (object.minQuantity !== undefined && object.minQuantity !== null) {
      message.minQuantity = String(object.minQuantity);
    } else {
      message.minQuantity = "";
    }
    if (object.makerFee !== undefined && object.makerFee !== null) {
      message.makerFee = String(object.makerFee);
    } else {
      message.makerFee = "";
    }
    if (object.takerFee !== undefined && object.takerFee !== null) {
      message.takerFee = String(object.takerFee);
    } else {
      message.takerFee = "";
    }
    if (object.riskStepSize !== undefined && object.riskStepSize !== null) {
      message.riskStepSize = String(object.riskStepSize);
    } else {
      message.riskStepSize = "";
    }
    if (
      object.initialMarginBase !== undefined &&
      object.initialMarginBase !== null
    ) {
      message.initialMarginBase = String(object.initialMarginBase);
    } else {
      message.initialMarginBase = "";
    }
    if (
      object.initialMarginStep !== undefined &&
      object.initialMarginStep !== null
    ) {
      message.initialMarginStep = String(object.initialMarginStep);
    } else {
      message.initialMarginStep = "";
    }
    if (
      object.maintenanceMarginRatio !== undefined &&
      object.maintenanceMarginRatio !== null
    ) {
      message.maintenanceMarginRatio = String(object.maintenanceMarginRatio);
    } else {
      message.maintenanceMarginRatio = "";
    }
    if (
      object.maxLiquidationOrderTicket !== undefined &&
      object.maxLiquidationOrderTicket !== null
    ) {
      message.maxLiquidationOrderTicket = String(
        object.maxLiquidationOrderTicket
      );
    } else {
      message.maxLiquidationOrderTicket = "";
    }
    if (
      object.maxLiquidationOrderDuration !== undefined &&
      object.maxLiquidationOrderDuration !== null
    ) {
      message.maxLiquidationOrderDuration = Duration.fromJSON(
        object.maxLiquidationOrderDuration
      );
    } else {
      message.maxLiquidationOrderDuration = undefined;
    }
    if (object.impactSize !== undefined && object.impactSize !== null) {
      message.impactSize = String(object.impactSize);
    } else {
      message.impactSize = "";
    }
    if (object.markPriceBand !== undefined && object.markPriceBand !== null) {
      message.markPriceBand = Number(object.markPriceBand);
    } else {
      message.markPriceBand = undefined;
    }
    if (
      object.lastPriceProtectedBand !== undefined &&
      object.lastPriceProtectedBand !== null
    ) {
      message.lastPriceProtectedBand = Number(object.lastPriceProtectedBand);
    } else {
      message.lastPriceProtectedBand = undefined;
    }
    if (object.isActive !== undefined && object.isActive !== null) {
      message.isActive = Boolean(object.isActive);
    } else {
      message.isActive = undefined;
    }
    return message;
  },

  toJSON(message: MarketParams): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.displayName !== undefined &&
      (obj.displayName = message.displayName);
    message.description !== undefined &&
      (obj.description = message.description);
    message.minQuantity !== undefined &&
      (obj.minQuantity = message.minQuantity);
    message.makerFee !== undefined && (obj.makerFee = message.makerFee);
    message.takerFee !== undefined && (obj.takerFee = message.takerFee);
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
    return obj;
  },

  fromPartial(object: DeepPartial<MarketParams>): MarketParams {
    const message = { ...baseMarketParams } as MarketParams;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.displayName !== undefined && object.displayName !== null) {
      message.displayName = object.displayName;
    } else {
      message.displayName = undefined;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = undefined;
    }
    if (object.minQuantity !== undefined && object.minQuantity !== null) {
      message.minQuantity = object.minQuantity;
    } else {
      message.minQuantity = "";
    }
    if (object.makerFee !== undefined && object.makerFee !== null) {
      message.makerFee = object.makerFee;
    } else {
      message.makerFee = "";
    }
    if (object.takerFee !== undefined && object.takerFee !== null) {
      message.takerFee = object.takerFee;
    } else {
      message.takerFee = "";
    }
    if (object.riskStepSize !== undefined && object.riskStepSize !== null) {
      message.riskStepSize = object.riskStepSize;
    } else {
      message.riskStepSize = "";
    }
    if (
      object.initialMarginBase !== undefined &&
      object.initialMarginBase !== null
    ) {
      message.initialMarginBase = object.initialMarginBase;
    } else {
      message.initialMarginBase = "";
    }
    if (
      object.initialMarginStep !== undefined &&
      object.initialMarginStep !== null
    ) {
      message.initialMarginStep = object.initialMarginStep;
    } else {
      message.initialMarginStep = "";
    }
    if (
      object.maintenanceMarginRatio !== undefined &&
      object.maintenanceMarginRatio !== null
    ) {
      message.maintenanceMarginRatio = object.maintenanceMarginRatio;
    } else {
      message.maintenanceMarginRatio = "";
    }
    if (
      object.maxLiquidationOrderTicket !== undefined &&
      object.maxLiquidationOrderTicket !== null
    ) {
      message.maxLiquidationOrderTicket = object.maxLiquidationOrderTicket;
    } else {
      message.maxLiquidationOrderTicket = "";
    }
    if (
      object.maxLiquidationOrderDuration !== undefined &&
      object.maxLiquidationOrderDuration !== null
    ) {
      message.maxLiquidationOrderDuration = Duration.fromPartial(
        object.maxLiquidationOrderDuration
      );
    } else {
      message.maxLiquidationOrderDuration = undefined;
    }
    if (object.impactSize !== undefined && object.impactSize !== null) {
      message.impactSize = object.impactSize;
    } else {
      message.impactSize = "";
    }
    if (object.markPriceBand !== undefined && object.markPriceBand !== null) {
      message.markPriceBand = object.markPriceBand;
    } else {
      message.markPriceBand = undefined;
    }
    if (
      object.lastPriceProtectedBand !== undefined &&
      object.lastPriceProtectedBand !== null
    ) {
      message.lastPriceProtectedBand = object.lastPriceProtectedBand;
    } else {
      message.lastPriceProtectedBand = undefined;
    }
    if (object.isActive !== undefined && object.isActive !== null) {
      message.isActive = object.isActive;
    } else {
      message.isActive = undefined;
    }
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
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
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
