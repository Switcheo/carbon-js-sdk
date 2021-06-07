/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../google/protobuf/duration";
import { Timestamp } from "../google/protobuf/timestamp";

export const protobufPackage = "Switcheo.tradehubcosmos.market";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateMarket {
  creator: string;
  name: string;
  displayName: string;
  marketType: string;
  description: string;
  base: string;
  quote: string;
  lotSize: string;
  tickSize: string;
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
  markPriceBand: number;
  lastPriceProtectedBand: number;
  indexOracleId: string;
  expiryTime?: Date;
}

export interface MsgCreateMarketResponse {
  name: string;
}

export interface MsgUpdateMarket {
  creator: string;
  name: string;
  displayName: string;
  description: string;
  minQuantity: string;
  makerFee: string;
  takerFee: string;
  isActive: boolean;
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
}

export interface MsgUpdateMarketResponse {}

const baseMsgCreateMarket: object = {
  creator: "",
  name: "",
  displayName: "",
  marketType: "",
  description: "",
  base: "",
  quote: "",
  lotSize: "",
  tickSize: "",
  minQuantity: "",
  makerFee: "",
  takerFee: "",
  riskStepSize: "",
  initialMarginBase: "",
  initialMarginStep: "",
  maintenanceMarginRatio: "",
  maxLiquidationOrderTicket: "",
  impactSize: "",
  markPriceBand: 0,
  lastPriceProtectedBand: 0,
  indexOracleId: "",
};

export const MsgCreateMarket = {
  encode(
    message: MsgCreateMarket,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.displayName !== "") {
      writer.uint32(26).string(message.displayName);
    }
    if (message.marketType !== "") {
      writer.uint32(34).string(message.marketType);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.base !== "") {
      writer.uint32(50).string(message.base);
    }
    if (message.quote !== "") {
      writer.uint32(58).string(message.quote);
    }
    if (message.lotSize !== "") {
      writer.uint32(66).string(message.lotSize);
    }
    if (message.tickSize !== "") {
      writer.uint32(74).string(message.tickSize);
    }
    if (message.minQuantity !== "") {
      writer.uint32(82).string(message.minQuantity);
    }
    if (message.makerFee !== "") {
      writer.uint32(90).string(message.makerFee);
    }
    if (message.takerFee !== "") {
      writer.uint32(98).string(message.takerFee);
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateMarket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateMarket } as MsgCreateMarket;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.displayName = reader.string();
          break;
        case 4:
          message.marketType = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.base = reader.string();
          break;
        case 7:
          message.quote = reader.string();
          break;
        case 8:
          message.lotSize = reader.string();
          break;
        case 9:
          message.tickSize = reader.string();
          break;
        case 10:
          message.minQuantity = reader.string();
          break;
        case 11:
          message.makerFee = reader.string();
          break;
        case 12:
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateMarket {
    const message = { ...baseMsgCreateMarket } as MsgCreateMarket;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    if (object.marketType !== undefined && object.marketType !== null) {
      message.marketType = String(object.marketType);
    } else {
      message.marketType = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
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
    return message;
  },

  toJSON(message: MsgCreateMarket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.displayName !== undefined &&
      (obj.displayName = message.displayName);
    message.marketType !== undefined && (obj.marketType = message.marketType);
    message.description !== undefined &&
      (obj.description = message.description);
    message.base !== undefined && (obj.base = message.base);
    message.quote !== undefined && (obj.quote = message.quote);
    message.lotSize !== undefined && (obj.lotSize = message.lotSize);
    message.tickSize !== undefined && (obj.tickSize = message.tickSize);
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
    message.indexOracleId !== undefined &&
      (obj.indexOracleId = message.indexOracleId);
    message.expiryTime !== undefined &&
      (obj.expiryTime = message.expiryTime.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateMarket>): MsgCreateMarket {
    const message = { ...baseMsgCreateMarket } as MsgCreateMarket;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    if (object.marketType !== undefined && object.marketType !== null) {
      message.marketType = object.marketType;
    } else {
      message.marketType = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
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
    return message;
  },
};

const baseMsgCreateMarketResponse: object = { name: "" };

export const MsgCreateMarketResponse = {
  encode(
    message: MsgCreateMarketResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateMarketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateMarketResponse,
    } as MsgCreateMarketResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateMarketResponse {
    const message = {
      ...baseMsgCreateMarketResponse,
    } as MsgCreateMarketResponse;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: MsgCreateMarketResponse): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateMarketResponse>
  ): MsgCreateMarketResponse {
    const message = {
      ...baseMsgCreateMarketResponse,
    } as MsgCreateMarketResponse;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseMsgUpdateMarket: object = {
  creator: "",
  name: "",
  displayName: "",
  description: "",
  minQuantity: "",
  makerFee: "",
  takerFee: "",
  isActive: false,
  riskStepSize: "",
  initialMarginBase: "",
  initialMarginStep: "",
  maintenanceMarginRatio: "",
  maxLiquidationOrderTicket: "",
  impactSize: "",
  markPriceBand: 0,
  lastPriceProtectedBand: 0,
};

export const MsgUpdateMarket = {
  encode(
    message: MsgUpdateMarket,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.displayName !== "") {
      writer.uint32(26).string(message.displayName);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.minQuantity !== "") {
      writer.uint32(42).string(message.minQuantity);
    }
    if (message.makerFee !== "") {
      writer.uint32(50).string(message.makerFee);
    }
    if (message.takerFee !== "") {
      writer.uint32(58).string(message.takerFee);
    }
    if (message.isActive === true) {
      writer.uint32(64).bool(message.isActive);
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMarket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateMarket } as MsgUpdateMarket;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.displayName = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.minQuantity = reader.string();
          break;
        case 6:
          message.makerFee = reader.string();
          break;
        case 7:
          message.takerFee = reader.string();
          break;
        case 8:
          message.isActive = reader.bool();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateMarket {
    const message = { ...baseMsgUpdateMarket } as MsgUpdateMarket;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    if (object.isActive !== undefined && object.isActive !== null) {
      message.isActive = Boolean(object.isActive);
    } else {
      message.isActive = false;
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
    return message;
  },

  toJSON(message: MsgUpdateMarket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.displayName !== undefined &&
      (obj.displayName = message.displayName);
    message.description !== undefined &&
      (obj.description = message.description);
    message.minQuantity !== undefined &&
      (obj.minQuantity = message.minQuantity);
    message.makerFee !== undefined && (obj.makerFee = message.makerFee);
    message.takerFee !== undefined && (obj.takerFee = message.takerFee);
    message.isActive !== undefined && (obj.isActive = message.isActive);
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
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateMarket>): MsgUpdateMarket {
    const message = { ...baseMsgUpdateMarket } as MsgUpdateMarket;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    if (object.isActive !== undefined && object.isActive !== null) {
      message.isActive = object.isActive;
    } else {
      message.isActive = false;
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
    return message;
  },
};

const baseMsgUpdateMarketResponse: object = {};

export const MsgUpdateMarketResponse = {
  encode(
    _: MsgUpdateMarketResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateMarketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateMarketResponse,
    } as MsgUpdateMarketResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateMarketResponse {
    const message = {
      ...baseMsgUpdateMarketResponse,
    } as MsgUpdateMarketResponse;
    return message;
  },

  toJSON(_: MsgUpdateMarketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateMarketResponse>
  ): MsgUpdateMarketResponse {
    const message = {
      ...baseMsgUpdateMarketResponse,
    } as MsgUpdateMarketResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateMarket(request: MsgCreateMarket): Promise<MsgCreateMarketResponse>;
  UpdateMarket(request: MsgUpdateMarket): Promise<MsgUpdateMarketResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateMarket = this.CreateMarket.bind(this);
    this.UpdateMarket = this.UpdateMarket.bind(this);
  }
  CreateMarket(request: MsgCreateMarket): Promise<MsgCreateMarketResponse> {
    const data = MsgCreateMarket.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.tradehubcosmos.market.Msg",
      "CreateMarket",
      data
    );
    return promise.then((data) =>
      MsgCreateMarketResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateMarket(request: MsgUpdateMarket): Promise<MsgUpdateMarketResponse> {
    const data = MsgUpdateMarket.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.tradehubcosmos.market.Msg",
      "UpdateMarket",
      data
    );
    return promise.then((data) =>
      MsgUpdateMarketResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
