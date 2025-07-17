/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { UInt32Value } from "../../../google/protobuf/wrappers";

export const protobufPackage = "Switcheo.carbon.order";

export interface Order {
  id: string;
  blockHeight: Long;
  blockCreatedAt?: Date;
  triggeredBlockHeight: Long;
  address: string;
  marketId: string;
  side: string;
  price: string;
  quantity: string;
  available: string;
  filled: string;
  status: string;
  orderType: string;
  initiator: string;
  timeInForce: string;
  stopPrice: string;
  triggerType: string;
  allocatedMargin?: Coin;
  isLiquidation: boolean;
  isPostOnly: boolean;
  isReduceOnly: boolean;
  poolId: Long;
  avgFilledPrice: string;
  referralAddress: string;
  referralCommission: number;
  referralKickback: number;
  poolRoute: Uint8Array;
  cancelReason?: number;
  insertedBlockHeight: Long;
  isUseBestPrice: boolean;
}

export interface DBOrder {
  order?: Order;
  allocatedMarginDenom: string;
  allocatedMarginAmount: string;
  username: string;
  lastUpdatedBlockHeight: Long;
}

export interface OrderIdsForMarket {
  marketId: string;
  orderIds: string[];
}

export interface OrderIds {
  ids: string[];
}

export interface Orders {
  orders: Order[];
}

function createBaseOrder(): Order {
  return {
    id: "",
    blockHeight: Long.ZERO,
    blockCreatedAt: undefined,
    triggeredBlockHeight: Long.ZERO,
    address: "",
    marketId: "",
    side: "",
    price: "",
    quantity: "",
    available: "",
    filled: "",
    status: "",
    orderType: "",
    initiator: "",
    timeInForce: "",
    stopPrice: "",
    triggerType: "",
    allocatedMargin: undefined,
    isLiquidation: false,
    isPostOnly: false,
    isReduceOnly: false,
    poolId: Long.UZERO,
    avgFilledPrice: "",
    referralAddress: "",
    referralCommission: 0,
    referralKickback: 0,
    poolRoute: new Uint8Array(),
    cancelReason: undefined,
    insertedBlockHeight: Long.ZERO,
    isUseBestPrice: false,
  };
}

export const Order = {
  encode(message: Order, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (!message.blockHeight.isZero()) {
      writer.uint32(16).int64(message.blockHeight);
    }
    if (message.blockCreatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.blockCreatedAt), writer.uint32(26).fork()).ldelim();
    }
    if (!message.triggeredBlockHeight.isZero()) {
      writer.uint32(32).int64(message.triggeredBlockHeight);
    }
    if (message.address !== "") {
      writer.uint32(42).string(message.address);
    }
    if (message.marketId !== "") {
      writer.uint32(50).string(message.marketId);
    }
    if (message.side !== "") {
      writer.uint32(58).string(message.side);
    }
    if (message.price !== "") {
      writer.uint32(66).string(message.price);
    }
    if (message.quantity !== "") {
      writer.uint32(74).string(message.quantity);
    }
    if (message.available !== "") {
      writer.uint32(82).string(message.available);
    }
    if (message.filled !== "") {
      writer.uint32(90).string(message.filled);
    }
    if (message.status !== "") {
      writer.uint32(98).string(message.status);
    }
    if (message.orderType !== "") {
      writer.uint32(106).string(message.orderType);
    }
    if (message.initiator !== "") {
      writer.uint32(114).string(message.initiator);
    }
    if (message.timeInForce !== "") {
      writer.uint32(122).string(message.timeInForce);
    }
    if (message.stopPrice !== "") {
      writer.uint32(130).string(message.stopPrice);
    }
    if (message.triggerType !== "") {
      writer.uint32(138).string(message.triggerType);
    }
    if (message.allocatedMargin !== undefined) {
      Coin.encode(message.allocatedMargin, writer.uint32(146).fork()).ldelim();
    }
    if (message.isLiquidation === true) {
      writer.uint32(152).bool(message.isLiquidation);
    }
    if (message.isPostOnly === true) {
      writer.uint32(160).bool(message.isPostOnly);
    }
    if (message.isReduceOnly === true) {
      writer.uint32(168).bool(message.isReduceOnly);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(176).uint64(message.poolId);
    }
    if (message.avgFilledPrice !== "") {
      writer.uint32(186).string(message.avgFilledPrice);
    }
    if (message.referralAddress !== "") {
      writer.uint32(194).string(message.referralAddress);
    }
    if (message.referralCommission !== 0) {
      writer.uint32(200).uint32(message.referralCommission);
    }
    if (message.referralKickback !== 0) {
      writer.uint32(208).uint32(message.referralKickback);
    }
    if (message.poolRoute.length !== 0) {
      writer.uint32(218).bytes(message.poolRoute);
    }
    if (message.cancelReason !== undefined) {
      UInt32Value.encode({ value: message.cancelReason! }, writer.uint32(226).fork()).ldelim();
    }
    if (!message.insertedBlockHeight.isZero()) {
      writer.uint32(232).int64(message.insertedBlockHeight);
    }
    if (message.isUseBestPrice === true) {
      writer.uint32(240).bool(message.isUseBestPrice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Order {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrder();
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
          if (tag !== 16) {
            break;
          }

          message.blockHeight = reader.int64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.blockCreatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.triggeredBlockHeight = reader.int64() as Long;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.address = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.marketId = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.side = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.price = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.quantity = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.available = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.filled = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.status = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.orderType = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.initiator = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.timeInForce = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.stopPrice = reader.string();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.triggerType = reader.string();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.allocatedMargin = Coin.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 152) {
            break;
          }

          message.isLiquidation = reader.bool();
          continue;
        case 20:
          if (tag !== 160) {
            break;
          }

          message.isPostOnly = reader.bool();
          continue;
        case 21:
          if (tag !== 168) {
            break;
          }

          message.isReduceOnly = reader.bool();
          continue;
        case 22:
          if (tag !== 176) {
            break;
          }

          message.poolId = reader.uint64() as Long;
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.avgFilledPrice = reader.string();
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.referralAddress = reader.string();
          continue;
        case 25:
          if (tag !== 200) {
            break;
          }

          message.referralCommission = reader.uint32();
          continue;
        case 26:
          if (tag !== 208) {
            break;
          }

          message.referralKickback = reader.uint32();
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.poolRoute = reader.bytes();
          continue;
        case 28:
          if (tag !== 226) {
            break;
          }

          message.cancelReason = UInt32Value.decode(reader, reader.uint32()).value;
          continue;
        case 29:
          if (tag !== 232) {
            break;
          }

          message.insertedBlockHeight = reader.int64() as Long;
          continue;
        case 30:
          if (tag !== 240) {
            break;
          }

          message.isUseBestPrice = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Order {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.ZERO,
      blockCreatedAt: isSet(object.blockCreatedAt) ? fromJsonTimestamp(object.blockCreatedAt) : undefined,
      triggeredBlockHeight: isSet(object.triggeredBlockHeight)
        ? Long.fromValue(object.triggeredBlockHeight)
        : Long.ZERO,
      address: isSet(object.address) ? String(object.address) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      side: isSet(object.side) ? String(object.side) : "",
      price: isSet(object.price) ? String(object.price) : "",
      quantity: isSet(object.quantity) ? String(object.quantity) : "",
      available: isSet(object.available) ? String(object.available) : "",
      filled: isSet(object.filled) ? String(object.filled) : "",
      status: isSet(object.status) ? String(object.status) : "",
      orderType: isSet(object.orderType) ? String(object.orderType) : "",
      initiator: isSet(object.initiator) ? String(object.initiator) : "",
      timeInForce: isSet(object.timeInForce) ? String(object.timeInForce) : "",
      stopPrice: isSet(object.stopPrice) ? String(object.stopPrice) : "",
      triggerType: isSet(object.triggerType) ? String(object.triggerType) : "",
      allocatedMargin: isSet(object.allocatedMargin) ? Coin.fromJSON(object.allocatedMargin) : undefined,
      isLiquidation: isSet(object.isLiquidation) ? Boolean(object.isLiquidation) : false,
      isPostOnly: isSet(object.isPostOnly) ? Boolean(object.isPostOnly) : false,
      isReduceOnly: isSet(object.isReduceOnly) ? Boolean(object.isReduceOnly) : false,
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      avgFilledPrice: isSet(object.avgFilledPrice) ? String(object.avgFilledPrice) : "",
      referralAddress: isSet(object.referralAddress) ? String(object.referralAddress) : "",
      referralCommission: isSet(object.referralCommission) ? Number(object.referralCommission) : 0,
      referralKickback: isSet(object.referralKickback) ? Number(object.referralKickback) : 0,
      poolRoute: isSet(object.poolRoute) ? bytesFromBase64(object.poolRoute) : new Uint8Array(),
      cancelReason: isSet(object.cancelReason) ? Number(object.cancelReason) : undefined,
      insertedBlockHeight: isSet(object.insertedBlockHeight) ? Long.fromValue(object.insertedBlockHeight) : Long.ZERO,
      isUseBestPrice: isSet(object.isUseBestPrice) ? Boolean(object.isUseBestPrice) : false,
    };
  },

  toJSON(message: Order): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    message.blockCreatedAt !== undefined && (obj.blockCreatedAt = message.blockCreatedAt.toISOString());
    message.triggeredBlockHeight !== undefined &&
      (obj.triggeredBlockHeight = (message.triggeredBlockHeight || Long.ZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.side !== undefined && (obj.side = message.side);
    message.price !== undefined && (obj.price = message.price);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.available !== undefined && (obj.available = message.available);
    message.filled !== undefined && (obj.filled = message.filled);
    message.status !== undefined && (obj.status = message.status);
    message.orderType !== undefined && (obj.orderType = message.orderType);
    message.initiator !== undefined && (obj.initiator = message.initiator);
    message.timeInForce !== undefined && (obj.timeInForce = message.timeInForce);
    message.stopPrice !== undefined && (obj.stopPrice = message.stopPrice);
    message.triggerType !== undefined && (obj.triggerType = message.triggerType);
    message.allocatedMargin !== undefined &&
      (obj.allocatedMargin = message.allocatedMargin ? Coin.toJSON(message.allocatedMargin) : undefined);
    message.isLiquidation !== undefined && (obj.isLiquidation = message.isLiquidation);
    message.isPostOnly !== undefined && (obj.isPostOnly = message.isPostOnly);
    message.isReduceOnly !== undefined && (obj.isReduceOnly = message.isReduceOnly);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.avgFilledPrice !== undefined && (obj.avgFilledPrice = message.avgFilledPrice);
    message.referralAddress !== undefined && (obj.referralAddress = message.referralAddress);
    message.referralCommission !== undefined && (obj.referralCommission = Math.round(message.referralCommission));
    message.referralKickback !== undefined && (obj.referralKickback = Math.round(message.referralKickback));
    message.poolRoute !== undefined &&
      (obj.poolRoute = base64FromBytes(message.poolRoute !== undefined ? message.poolRoute : new Uint8Array()));
    message.cancelReason !== undefined && (obj.cancelReason = message.cancelReason);
    message.insertedBlockHeight !== undefined &&
      (obj.insertedBlockHeight = (message.insertedBlockHeight || Long.ZERO).toString());
    message.isUseBestPrice !== undefined && (obj.isUseBestPrice = message.isUseBestPrice);
    return obj;
  },

  create(base?: DeepPartial<Order>): Order {
    return Order.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Order>): Order {
    const message = createBaseOrder();
    message.id = object.id ?? "";
    message.blockHeight = (object.blockHeight !== undefined && object.blockHeight !== null)
      ? Long.fromValue(object.blockHeight)
      : Long.ZERO;
    message.blockCreatedAt = object.blockCreatedAt ?? undefined;
    message.triggeredBlockHeight = (object.triggeredBlockHeight !== undefined && object.triggeredBlockHeight !== null)
      ? Long.fromValue(object.triggeredBlockHeight)
      : Long.ZERO;
    message.address = object.address ?? "";
    message.marketId = object.marketId ?? "";
    message.side = object.side ?? "";
    message.price = object.price ?? "";
    message.quantity = object.quantity ?? "";
    message.available = object.available ?? "";
    message.filled = object.filled ?? "";
    message.status = object.status ?? "";
    message.orderType = object.orderType ?? "";
    message.initiator = object.initiator ?? "";
    message.timeInForce = object.timeInForce ?? "";
    message.stopPrice = object.stopPrice ?? "";
    message.triggerType = object.triggerType ?? "";
    message.allocatedMargin = (object.allocatedMargin !== undefined && object.allocatedMargin !== null)
      ? Coin.fromPartial(object.allocatedMargin)
      : undefined;
    message.isLiquidation = object.isLiquidation ?? false;
    message.isPostOnly = object.isPostOnly ?? false;
    message.isReduceOnly = object.isReduceOnly ?? false;
    message.poolId = (object.poolId !== undefined && object.poolId !== null)
      ? Long.fromValue(object.poolId)
      : Long.UZERO;
    message.avgFilledPrice = object.avgFilledPrice ?? "";
    message.referralAddress = object.referralAddress ?? "";
    message.referralCommission = object.referralCommission ?? 0;
    message.referralKickback = object.referralKickback ?? 0;
    message.poolRoute = object.poolRoute ?? new Uint8Array();
    message.cancelReason = object.cancelReason ?? undefined;
    message.insertedBlockHeight = (object.insertedBlockHeight !== undefined && object.insertedBlockHeight !== null)
      ? Long.fromValue(object.insertedBlockHeight)
      : Long.ZERO;
    message.isUseBestPrice = object.isUseBestPrice ?? false;
    return message;
  },
};

function createBaseDBOrder(): DBOrder {
  return {
    order: undefined,
    allocatedMarginDenom: "",
    allocatedMarginAmount: "",
    username: "",
    lastUpdatedBlockHeight: Long.ZERO,
  };
}

export const DBOrder = {
  encode(message: DBOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    if (message.allocatedMarginDenom !== "") {
      writer.uint32(18).string(message.allocatedMarginDenom);
    }
    if (message.allocatedMarginAmount !== "") {
      writer.uint32(26).string(message.allocatedMarginAmount);
    }
    if (message.username !== "") {
      writer.uint32(34).string(message.username);
    }
    if (!message.lastUpdatedBlockHeight.isZero()) {
      writer.uint32(40).int64(message.lastUpdatedBlockHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DBOrder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDBOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.order = Order.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.allocatedMarginDenom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.allocatedMarginAmount = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.username = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.lastUpdatedBlockHeight = reader.int64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DBOrder {
    return {
      order: isSet(object.order) ? Order.fromJSON(object.order) : undefined,
      allocatedMarginDenom: isSet(object.allocatedMarginDenom) ? String(object.allocatedMarginDenom) : "",
      allocatedMarginAmount: isSet(object.allocatedMarginAmount) ? String(object.allocatedMarginAmount) : "",
      username: isSet(object.username) ? String(object.username) : "",
      lastUpdatedBlockHeight: isSet(object.lastUpdatedBlockHeight)
        ? Long.fromValue(object.lastUpdatedBlockHeight)
        : Long.ZERO,
    };
  },

  toJSON(message: DBOrder): unknown {
    const obj: any = {};
    message.order !== undefined && (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    message.allocatedMarginDenom !== undefined && (obj.allocatedMarginDenom = message.allocatedMarginDenom);
    message.allocatedMarginAmount !== undefined && (obj.allocatedMarginAmount = message.allocatedMarginAmount);
    message.username !== undefined && (obj.username = message.username);
    message.lastUpdatedBlockHeight !== undefined &&
      (obj.lastUpdatedBlockHeight = (message.lastUpdatedBlockHeight || Long.ZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<DBOrder>): DBOrder {
    return DBOrder.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DBOrder>): DBOrder {
    const message = createBaseDBOrder();
    message.order = (object.order !== undefined && object.order !== null) ? Order.fromPartial(object.order) : undefined;
    message.allocatedMarginDenom = object.allocatedMarginDenom ?? "";
    message.allocatedMarginAmount = object.allocatedMarginAmount ?? "";
    message.username = object.username ?? "";
    message.lastUpdatedBlockHeight =
      (object.lastUpdatedBlockHeight !== undefined && object.lastUpdatedBlockHeight !== null)
        ? Long.fromValue(object.lastUpdatedBlockHeight)
        : Long.ZERO;
    return message;
  },
};

function createBaseOrderIdsForMarket(): OrderIdsForMarket {
  return { marketId: "", orderIds: [] };
}

export const OrderIdsForMarket = {
  encode(message: OrderIdsForMarket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    for (const v of message.orderIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderIdsForMarket {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderIdsForMarket();
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

          message.orderIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OrderIdsForMarket {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      orderIds: Array.isArray(object?.orderIds) ? object.orderIds.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: OrderIdsForMarket): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    if (message.orderIds) {
      obj.orderIds = message.orderIds.map((e) => e);
    } else {
      obj.orderIds = [];
    }
    return obj;
  },

  create(base?: DeepPartial<OrderIdsForMarket>): OrderIdsForMarket {
    return OrderIdsForMarket.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<OrderIdsForMarket>): OrderIdsForMarket {
    const message = createBaseOrderIdsForMarket();
    message.marketId = object.marketId ?? "";
    message.orderIds = object.orderIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseOrderIds(): OrderIds {
  return { ids: [] };
}

export const OrderIds = {
  encode(message: OrderIds, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ids) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderIds {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderIds();
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

  fromJSON(object: any): OrderIds {
    return { ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => String(e)) : [] };
  },

  toJSON(message: OrderIds): unknown {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map((e) => e);
    } else {
      obj.ids = [];
    }
    return obj;
  },

  create(base?: DeepPartial<OrderIds>): OrderIds {
    return OrderIds.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<OrderIds>): OrderIds {
    const message = createBaseOrderIds();
    message.ids = object.ids?.map((e) => e) || [];
    return message;
  },
};

function createBaseOrders(): Orders {
  return { orders: [] };
}

export const Orders = {
  encode(message: Orders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Orders {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.orders.push(Order.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Orders {
    return { orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => Order.fromJSON(e)) : [] };
  },

  toJSON(message: Orders): unknown {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map((e) => e ? Order.toJSON(e) : undefined);
    } else {
      obj.orders = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Orders>): Orders {
    return Orders.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Orders>): Orders {
    const message = createBaseOrders();
    message.orders = object.orders?.map((e) => Order.fromPartial(e)) || [];
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
