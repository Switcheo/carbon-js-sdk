/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BoolValue, StringValue, UInt32Value } from "../../../google/protobuf/wrappers";

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
  /**
   * is_settled is a final state flag for the market and cannot be revert after
   * the market is deemed settled
   */
  isSettled: boolean;
  closedBlockHeight: Long;
  /**
   * trading_bandwidth is the price range that the market can trade from the
   * index/mark price in bps
   */
  tradingBandwidth: number;
  maxOpenInterest: string;
  /**
   * stale_index_price_allowance is the duration that the index price is allowed
   * to remain stale before trading is paused
   * 0 means that this feature is disabled
   */
  staleIndexPriceAllowance?: Duration;
  creator: string;
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
  staleIndexPriceAllowance?: Duration;
}

export interface IncomingSpotMarketsToDisable {
  ids: string[];
}

function createBaseControlledParams(): ControlledParams {
  return { perpetualsFundingInterval: undefined };
}

export const ControlledParams = {
  encode(message: ControlledParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.perpetualsFundingInterval !== undefined) {
      Duration.encode(message.perpetualsFundingInterval, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControlledParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlledParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.perpetualsFundingInterval = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ControlledParams {
    return {
      perpetualsFundingInterval: isSet(object.perpetualsFundingInterval)
        ? Duration.fromJSON(object.perpetualsFundingInterval)
        : undefined,
    };
  },

  toJSON(message: ControlledParams): unknown {
    const obj: any = {};
    message.perpetualsFundingInterval !== undefined &&
      (obj.perpetualsFundingInterval = message.perpetualsFundingInterval
        ? Duration.toJSON(message.perpetualsFundingInterval)
        : undefined);
    return obj;
  },

  create(base?: DeepPartial<ControlledParams>): ControlledParams {
    return ControlledParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ControlledParams>): ControlledParams {
    const message = createBaseControlledParams();
    message.perpetualsFundingInterval =
      (object.perpetualsFundingInterval !== undefined && object.perpetualsFundingInterval !== null)
        ? Duration.fromPartial(object.perpetualsFundingInterval)
        : undefined;
    return message;
  },
};

function createBaseMarket(): Market {
  return {
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
    maxLiquidationOrderDuration: undefined,
    impactSize: "",
    markPriceBand: 0,
    lastPriceProtectedBand: 0,
    indexOracleId: "",
    expiryTime: undefined,
    isActive: false,
    isSettled: false,
    closedBlockHeight: Long.UZERO,
    tradingBandwidth: 0,
    maxOpenInterest: "",
    staleIndexPriceAllowance: undefined,
    creator: "",
  };
}

export const Market = {
  encode(message: Market, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Duration.encode(message.maxLiquidationOrderDuration, writer.uint32(842).fork()).ldelim();
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
      Timestamp.encode(toTimestamp(message.expiryTime), writer.uint32(882).fork()).ldelim();
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
    if (message.staleIndexPriceAllowance !== undefined) {
      Duration.encode(message.staleIndexPriceAllowance, writer.uint32(930).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(938).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Market {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.marketType = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.base = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.quote = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.basePrecision = reader.int64() as Long;
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.quotePrecision = reader.int64() as Long;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.lotSize = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.tickSize = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.minQuantity = reader.string();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.createdBlockHeight = reader.uint64() as Long;
          continue;
        case 100:
          if (tag !== 802) {
            break;
          }

          message.riskStepSize = reader.string();
          continue;
        case 101:
          if (tag !== 810) {
            break;
          }

          message.initialMarginBase = reader.string();
          continue;
        case 102:
          if (tag !== 818) {
            break;
          }

          message.initialMarginStep = reader.string();
          continue;
        case 103:
          if (tag !== 826) {
            break;
          }

          message.maintenanceMarginRatio = reader.string();
          continue;
        case 104:
          if (tag !== 834) {
            break;
          }

          message.maxLiquidationOrderTicket = reader.string();
          continue;
        case 105:
          if (tag !== 842) {
            break;
          }

          message.maxLiquidationOrderDuration = Duration.decode(reader, reader.uint32());
          continue;
        case 106:
          if (tag !== 850) {
            break;
          }

          message.impactSize = reader.string();
          continue;
        case 107:
          if (tag !== 856) {
            break;
          }

          message.markPriceBand = reader.uint32();
          continue;
        case 108:
          if (tag !== 864) {
            break;
          }

          message.lastPriceProtectedBand = reader.uint32();
          continue;
        case 109:
          if (tag !== 874) {
            break;
          }

          message.indexOracleId = reader.string();
          continue;
        case 110:
          if (tag !== 882) {
            break;
          }

          message.expiryTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 111:
          if (tag !== 888) {
            break;
          }

          message.isActive = reader.bool();
          continue;
        case 112:
          if (tag !== 896) {
            break;
          }

          message.isSettled = reader.bool();
          continue;
        case 113:
          if (tag !== 904) {
            break;
          }

          message.closedBlockHeight = reader.uint64() as Long;
          continue;
        case 114:
          if (tag !== 912) {
            break;
          }

          message.tradingBandwidth = reader.uint32();
          continue;
        case 115:
          if (tag !== 922) {
            break;
          }

          message.maxOpenInterest = reader.string();
          continue;
        case 116:
          if (tag !== 930) {
            break;
          }

          message.staleIndexPriceAllowance = Duration.decode(reader, reader.uint32());
          continue;
        case 117:
          if (tag !== 938) {
            break;
          }

          message.creator = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Market {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      displayName: isSet(object.displayName) ? String(object.displayName) : "",
      description: isSet(object.description) ? String(object.description) : "",
      marketType: isSet(object.marketType) ? String(object.marketType) : "",
      base: isSet(object.base) ? String(object.base) : "",
      quote: isSet(object.quote) ? String(object.quote) : "",
      basePrecision: isSet(object.basePrecision) ? Long.fromValue(object.basePrecision) : Long.ZERO,
      quotePrecision: isSet(object.quotePrecision) ? Long.fromValue(object.quotePrecision) : Long.ZERO,
      lotSize: isSet(object.lotSize) ? String(object.lotSize) : "",
      tickSize: isSet(object.tickSize) ? String(object.tickSize) : "",
      minQuantity: isSet(object.minQuantity) ? String(object.minQuantity) : "",
      createdBlockHeight: isSet(object.createdBlockHeight) ? Long.fromValue(object.createdBlockHeight) : Long.UZERO,
      riskStepSize: isSet(object.riskStepSize) ? String(object.riskStepSize) : "",
      initialMarginBase: isSet(object.initialMarginBase) ? String(object.initialMarginBase) : "",
      initialMarginStep: isSet(object.initialMarginStep) ? String(object.initialMarginStep) : "",
      maintenanceMarginRatio: isSet(object.maintenanceMarginRatio) ? String(object.maintenanceMarginRatio) : "",
      maxLiquidationOrderTicket: isSet(object.maxLiquidationOrderTicket)
        ? String(object.maxLiquidationOrderTicket)
        : "",
      maxLiquidationOrderDuration: isSet(object.maxLiquidationOrderDuration)
        ? Duration.fromJSON(object.maxLiquidationOrderDuration)
        : undefined,
      impactSize: isSet(object.impactSize) ? String(object.impactSize) : "",
      markPriceBand: isSet(object.markPriceBand) ? Number(object.markPriceBand) : 0,
      lastPriceProtectedBand: isSet(object.lastPriceProtectedBand) ? Number(object.lastPriceProtectedBand) : 0,
      indexOracleId: isSet(object.indexOracleId) ? String(object.indexOracleId) : "",
      expiryTime: isSet(object.expiryTime) ? fromJsonTimestamp(object.expiryTime) : undefined,
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : false,
      isSettled: isSet(object.isSettled) ? Boolean(object.isSettled) : false,
      closedBlockHeight: isSet(object.closedBlockHeight) ? Long.fromValue(object.closedBlockHeight) : Long.UZERO,
      tradingBandwidth: isSet(object.tradingBandwidth) ? Number(object.tradingBandwidth) : 0,
      maxOpenInterest: isSet(object.maxOpenInterest) ? String(object.maxOpenInterest) : "",
      staleIndexPriceAllowance: isSet(object.staleIndexPriceAllowance)
        ? Duration.fromJSON(object.staleIndexPriceAllowance)
        : undefined,
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: Market): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.displayName !== undefined && (obj.displayName = message.displayName);
    message.description !== undefined && (obj.description = message.description);
    message.marketType !== undefined && (obj.marketType = message.marketType);
    message.base !== undefined && (obj.base = message.base);
    message.quote !== undefined && (obj.quote = message.quote);
    message.basePrecision !== undefined && (obj.basePrecision = (message.basePrecision || Long.ZERO).toString());
    message.quotePrecision !== undefined && (obj.quotePrecision = (message.quotePrecision || Long.ZERO).toString());
    message.lotSize !== undefined && (obj.lotSize = message.lotSize);
    message.tickSize !== undefined && (obj.tickSize = message.tickSize);
    message.minQuantity !== undefined && (obj.minQuantity = message.minQuantity);
    message.createdBlockHeight !== undefined &&
      (obj.createdBlockHeight = (message.createdBlockHeight || Long.UZERO).toString());
    message.riskStepSize !== undefined && (obj.riskStepSize = message.riskStepSize);
    message.initialMarginBase !== undefined && (obj.initialMarginBase = message.initialMarginBase);
    message.initialMarginStep !== undefined && (obj.initialMarginStep = message.initialMarginStep);
    message.maintenanceMarginRatio !== undefined && (obj.maintenanceMarginRatio = message.maintenanceMarginRatio);
    message.maxLiquidationOrderTicket !== undefined &&
      (obj.maxLiquidationOrderTicket = message.maxLiquidationOrderTicket);
    message.maxLiquidationOrderDuration !== undefined &&
      (obj.maxLiquidationOrderDuration = message.maxLiquidationOrderDuration
        ? Duration.toJSON(message.maxLiquidationOrderDuration)
        : undefined);
    message.impactSize !== undefined && (obj.impactSize = message.impactSize);
    message.markPriceBand !== undefined && (obj.markPriceBand = Math.round(message.markPriceBand));
    message.lastPriceProtectedBand !== undefined &&
      (obj.lastPriceProtectedBand = Math.round(message.lastPriceProtectedBand));
    message.indexOracleId !== undefined && (obj.indexOracleId = message.indexOracleId);
    message.expiryTime !== undefined && (obj.expiryTime = message.expiryTime.toISOString());
    message.isActive !== undefined && (obj.isActive = message.isActive);
    message.isSettled !== undefined && (obj.isSettled = message.isSettled);
    message.closedBlockHeight !== undefined &&
      (obj.closedBlockHeight = (message.closedBlockHeight || Long.UZERO).toString());
    message.tradingBandwidth !== undefined && (obj.tradingBandwidth = Math.round(message.tradingBandwidth));
    message.maxOpenInterest !== undefined && (obj.maxOpenInterest = message.maxOpenInterest);
    message.staleIndexPriceAllowance !== undefined && (obj.staleIndexPriceAllowance = message.staleIndexPriceAllowance
      ? Duration.toJSON(message.staleIndexPriceAllowance)
      : undefined);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  create(base?: DeepPartial<Market>): Market {
    return Market.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Market>): Market {
    const message = createBaseMarket();
    message.id = object.id ?? "";
    message.displayName = object.displayName ?? "";
    message.description = object.description ?? "";
    message.marketType = object.marketType ?? "";
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    message.basePrecision = (object.basePrecision !== undefined && object.basePrecision !== null)
      ? Long.fromValue(object.basePrecision)
      : Long.ZERO;
    message.quotePrecision = (object.quotePrecision !== undefined && object.quotePrecision !== null)
      ? Long.fromValue(object.quotePrecision)
      : Long.ZERO;
    message.lotSize = object.lotSize ?? "";
    message.tickSize = object.tickSize ?? "";
    message.minQuantity = object.minQuantity ?? "";
    message.createdBlockHeight = (object.createdBlockHeight !== undefined && object.createdBlockHeight !== null)
      ? Long.fromValue(object.createdBlockHeight)
      : Long.UZERO;
    message.riskStepSize = object.riskStepSize ?? "";
    message.initialMarginBase = object.initialMarginBase ?? "";
    message.initialMarginStep = object.initialMarginStep ?? "";
    message.maintenanceMarginRatio = object.maintenanceMarginRatio ?? "";
    message.maxLiquidationOrderTicket = object.maxLiquidationOrderTicket ?? "";
    message.maxLiquidationOrderDuration =
      (object.maxLiquidationOrderDuration !== undefined && object.maxLiquidationOrderDuration !== null)
        ? Duration.fromPartial(object.maxLiquidationOrderDuration)
        : undefined;
    message.impactSize = object.impactSize ?? "";
    message.markPriceBand = object.markPriceBand ?? 0;
    message.lastPriceProtectedBand = object.lastPriceProtectedBand ?? 0;
    message.indexOracleId = object.indexOracleId ?? "";
    message.expiryTime = object.expiryTime ?? undefined;
    message.isActive = object.isActive ?? false;
    message.isSettled = object.isSettled ?? false;
    message.closedBlockHeight = (object.closedBlockHeight !== undefined && object.closedBlockHeight !== null)
      ? Long.fromValue(object.closedBlockHeight)
      : Long.UZERO;
    message.tradingBandwidth = object.tradingBandwidth ?? 0;
    message.maxOpenInterest = object.maxOpenInterest ?? "";
    message.staleIndexPriceAllowance =
      (object.staleIndexPriceAllowance !== undefined && object.staleIndexPriceAllowance !== null)
        ? Duration.fromPartial(object.staleIndexPriceAllowance)
        : undefined;
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMarketParams(): MarketParams {
  return {
    id: "",
    displayName: undefined,
    description: undefined,
    lotSize: "",
    tickSize: "",
    minQuantity: "",
    riskStepSize: "",
    initialMarginBase: "",
    initialMarginStep: "",
    maintenanceMarginRatio: "",
    maxLiquidationOrderTicket: "",
    maxLiquidationOrderDuration: undefined,
    impactSize: "",
    markPriceBand: undefined,
    lastPriceProtectedBand: undefined,
    isActive: undefined,
    tradingBandwidth: undefined,
    expiryTime: undefined,
    maxOpenInterest: "",
    staleIndexPriceAllowance: undefined,
  };
}

export const MarketParams = {
  encode(message: MarketParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.displayName !== undefined) {
      StringValue.encode({ value: message.displayName! }, writer.uint32(18).fork()).ldelim();
    }
    if (message.description !== undefined) {
      StringValue.encode({ value: message.description! }, writer.uint32(26).fork()).ldelim();
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
      Duration.encode(message.maxLiquidationOrderDuration, writer.uint32(842).fork()).ldelim();
    }
    if (message.impactSize !== "") {
      writer.uint32(850).string(message.impactSize);
    }
    if (message.markPriceBand !== undefined) {
      UInt32Value.encode({ value: message.markPriceBand! }, writer.uint32(858).fork()).ldelim();
    }
    if (message.lastPriceProtectedBand !== undefined) {
      UInt32Value.encode({ value: message.lastPriceProtectedBand! }, writer.uint32(866).fork()).ldelim();
    }
    if (message.isActive !== undefined) {
      BoolValue.encode({ value: message.isActive! }, writer.uint32(890).fork()).ldelim();
    }
    if (message.tradingBandwidth !== undefined) {
      UInt32Value.encode({ value: message.tradingBandwidth! }, writer.uint32(914).fork()).ldelim();
    }
    if (message.expiryTime !== undefined) {
      Timestamp.encode(toTimestamp(message.expiryTime), writer.uint32(922).fork()).ldelim();
    }
    if (message.maxOpenInterest !== "") {
      writer.uint32(930).string(message.maxOpenInterest);
    }
    if (message.staleIndexPriceAllowance !== undefined) {
      Duration.encode(message.staleIndexPriceAllowance, writer.uint32(938).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.displayName = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.lotSize = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.tickSize = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.minQuantity = reader.string();
          continue;
        case 100:
          if (tag !== 802) {
            break;
          }

          message.riskStepSize = reader.string();
          continue;
        case 101:
          if (tag !== 810) {
            break;
          }

          message.initialMarginBase = reader.string();
          continue;
        case 102:
          if (tag !== 818) {
            break;
          }

          message.initialMarginStep = reader.string();
          continue;
        case 103:
          if (tag !== 826) {
            break;
          }

          message.maintenanceMarginRatio = reader.string();
          continue;
        case 104:
          if (tag !== 834) {
            break;
          }

          message.maxLiquidationOrderTicket = reader.string();
          continue;
        case 105:
          if (tag !== 842) {
            break;
          }

          message.maxLiquidationOrderDuration = Duration.decode(reader, reader.uint32());
          continue;
        case 106:
          if (tag !== 850) {
            break;
          }

          message.impactSize = reader.string();
          continue;
        case 107:
          if (tag !== 858) {
            break;
          }

          message.markPriceBand = UInt32Value.decode(reader, reader.uint32()).value;
          continue;
        case 108:
          if (tag !== 866) {
            break;
          }

          message.lastPriceProtectedBand = UInt32Value.decode(reader, reader.uint32()).value;
          continue;
        case 111:
          if (tag !== 890) {
            break;
          }

          message.isActive = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 114:
          if (tag !== 914) {
            break;
          }

          message.tradingBandwidth = UInt32Value.decode(reader, reader.uint32()).value;
          continue;
        case 115:
          if (tag !== 922) {
            break;
          }

          message.expiryTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 116:
          if (tag !== 930) {
            break;
          }

          message.maxOpenInterest = reader.string();
          continue;
        case 117:
          if (tag !== 938) {
            break;
          }

          message.staleIndexPriceAllowance = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MarketParams {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      displayName: isSet(object.displayName) ? String(object.displayName) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      lotSize: isSet(object.lotSize) ? String(object.lotSize) : "",
      tickSize: isSet(object.tickSize) ? String(object.tickSize) : "",
      minQuantity: isSet(object.minQuantity) ? String(object.minQuantity) : "",
      riskStepSize: isSet(object.riskStepSize) ? String(object.riskStepSize) : "",
      initialMarginBase: isSet(object.initialMarginBase) ? String(object.initialMarginBase) : "",
      initialMarginStep: isSet(object.initialMarginStep) ? String(object.initialMarginStep) : "",
      maintenanceMarginRatio: isSet(object.maintenanceMarginRatio) ? String(object.maintenanceMarginRatio) : "",
      maxLiquidationOrderTicket: isSet(object.maxLiquidationOrderTicket)
        ? String(object.maxLiquidationOrderTicket)
        : "",
      maxLiquidationOrderDuration: isSet(object.maxLiquidationOrderDuration)
        ? Duration.fromJSON(object.maxLiquidationOrderDuration)
        : undefined,
      impactSize: isSet(object.impactSize) ? String(object.impactSize) : "",
      markPriceBand: isSet(object.markPriceBand) ? Number(object.markPriceBand) : undefined,
      lastPriceProtectedBand: isSet(object.lastPriceProtectedBand) ? Number(object.lastPriceProtectedBand) : undefined,
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : undefined,
      tradingBandwidth: isSet(object.tradingBandwidth) ? Number(object.tradingBandwidth) : undefined,
      expiryTime: isSet(object.expiryTime) ? fromJsonTimestamp(object.expiryTime) : undefined,
      maxOpenInterest: isSet(object.maxOpenInterest) ? String(object.maxOpenInterest) : "",
      staleIndexPriceAllowance: isSet(object.staleIndexPriceAllowance)
        ? Duration.fromJSON(object.staleIndexPriceAllowance)
        : undefined,
    };
  },

  toJSON(message: MarketParams): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.displayName !== undefined && (obj.displayName = message.displayName);
    message.description !== undefined && (obj.description = message.description);
    message.lotSize !== undefined && (obj.lotSize = message.lotSize);
    message.tickSize !== undefined && (obj.tickSize = message.tickSize);
    message.minQuantity !== undefined && (obj.minQuantity = message.minQuantity);
    message.riskStepSize !== undefined && (obj.riskStepSize = message.riskStepSize);
    message.initialMarginBase !== undefined && (obj.initialMarginBase = message.initialMarginBase);
    message.initialMarginStep !== undefined && (obj.initialMarginStep = message.initialMarginStep);
    message.maintenanceMarginRatio !== undefined && (obj.maintenanceMarginRatio = message.maintenanceMarginRatio);
    message.maxLiquidationOrderTicket !== undefined &&
      (obj.maxLiquidationOrderTicket = message.maxLiquidationOrderTicket);
    message.maxLiquidationOrderDuration !== undefined &&
      (obj.maxLiquidationOrderDuration = message.maxLiquidationOrderDuration
        ? Duration.toJSON(message.maxLiquidationOrderDuration)
        : undefined);
    message.impactSize !== undefined && (obj.impactSize = message.impactSize);
    message.markPriceBand !== undefined && (obj.markPriceBand = message.markPriceBand);
    message.lastPriceProtectedBand !== undefined && (obj.lastPriceProtectedBand = message.lastPriceProtectedBand);
    message.isActive !== undefined && (obj.isActive = message.isActive);
    message.tradingBandwidth !== undefined && (obj.tradingBandwidth = message.tradingBandwidth);
    message.expiryTime !== undefined && (obj.expiryTime = message.expiryTime.toISOString());
    message.maxOpenInterest !== undefined && (obj.maxOpenInterest = message.maxOpenInterest);
    message.staleIndexPriceAllowance !== undefined && (obj.staleIndexPriceAllowance = message.staleIndexPriceAllowance
      ? Duration.toJSON(message.staleIndexPriceAllowance)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<MarketParams>): MarketParams {
    return MarketParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MarketParams>): MarketParams {
    const message = createBaseMarketParams();
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
      (object.maxLiquidationOrderDuration !== undefined && object.maxLiquidationOrderDuration !== null)
        ? Duration.fromPartial(object.maxLiquidationOrderDuration)
        : undefined;
    message.impactSize = object.impactSize ?? "";
    message.markPriceBand = object.markPriceBand ?? undefined;
    message.lastPriceProtectedBand = object.lastPriceProtectedBand ?? undefined;
    message.isActive = object.isActive ?? undefined;
    message.tradingBandwidth = object.tradingBandwidth ?? undefined;
    message.expiryTime = object.expiryTime ?? undefined;
    message.maxOpenInterest = object.maxOpenInterest ?? "";
    message.staleIndexPriceAllowance =
      (object.staleIndexPriceAllowance !== undefined && object.staleIndexPriceAllowance !== null)
        ? Duration.fromPartial(object.staleIndexPriceAllowance)
        : undefined;
    return message;
  },
};

function createBaseIncomingSpotMarketsToDisable(): IncomingSpotMarketsToDisable {
  return { ids: [] };
}

export const IncomingSpotMarketsToDisable = {
  encode(message: IncomingSpotMarketsToDisable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ids) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IncomingSpotMarketsToDisable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncomingSpotMarketsToDisable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ids.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IncomingSpotMarketsToDisable {
    return { ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => String(e)) : [] };
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

  create(base?: DeepPartial<IncomingSpotMarketsToDisable>): IncomingSpotMarketsToDisable {
    return IncomingSpotMarketsToDisable.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<IncomingSpotMarketsToDisable>): IncomingSpotMarketsToDisable {
    const message = createBaseIncomingSpotMarketsToDisable();
    message.ids = object.ids?.map((e) => e) || [];
    return message;
  },
};

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
