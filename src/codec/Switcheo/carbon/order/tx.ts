/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ParamsToUpdate } from "./params";

export const protobufPackage = "Switcheo.carbon.order";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgSetTradingFlag {
  creator: string;
  isEnabled: boolean;
  blockchain: string;
}

export interface MsgSetTradingFlagResponse {
}

export interface MsgCreateOrder {
  creator: string;
  marketId: string;
  side: string;
  quantity: string;
  orderType: string;
  price: string;
  stopPrice: string;
  timeInForce: string;
  triggerType: string;
  isPostOnly: boolean;
  isReduceOnly: boolean;
  referralAddress: string;
  referralCommission: number;
  referralKickback: number;
  isUseBestPrice: boolean;
}

export interface MsgCreateOrderResponse {
  orderId: string;
}

export interface MsgEditOrder {
  creator: string;
  id: string;
  quantity: string;
  price: string;
  stopPrice: string;
}

export interface MsgEditOrderResponse {
}

export interface EditOrders {
  editOrders: MsgEditOrder[];
}

export interface EditOrdersForMarket {
  marketId: string;
  editOrders: MsgEditOrder[];
}

export interface MsgCancelOrder {
  creator: string;
  id: string;
}

export interface MsgCancelOrderResponse {
}

export interface MsgCancelAll {
  creator: string;
  marketId: string;
}

export interface MsgCancelAllResponse {
}

/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /** params defines the optional parameters to update. */
  params?: ParamsToUpdate;
}

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {
}

function createBaseMsgSetTradingFlag(): MsgSetTradingFlag {
  return { creator: "", isEnabled: false, blockchain: "" };
}

export const MsgSetTradingFlag = {
  encode(message: MsgSetTradingFlag, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.isEnabled === true) {
      writer.uint32(16).bool(message.isEnabled);
    }
    if (message.blockchain !== "") {
      writer.uint32(26).string(message.blockchain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetTradingFlag {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetTradingFlag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.isEnabled = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.blockchain = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetTradingFlag {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      isEnabled: isSet(object.isEnabled) ? Boolean(object.isEnabled) : false,
      blockchain: isSet(object.blockchain) ? String(object.blockchain) : "",
    };
  },

  toJSON(message: MsgSetTradingFlag): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
    message.blockchain !== undefined && (obj.blockchain = message.blockchain);
    return obj;
  },

  create(base?: DeepPartial<MsgSetTradingFlag>): MsgSetTradingFlag {
    return MsgSetTradingFlag.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSetTradingFlag>): MsgSetTradingFlag {
    const message = createBaseMsgSetTradingFlag();
    message.creator = object.creator ?? "";
    message.isEnabled = object.isEnabled ?? false;
    message.blockchain = object.blockchain ?? "";
    return message;
  },
};

function createBaseMsgSetTradingFlagResponse(): MsgSetTradingFlagResponse {
  return {};
}

export const MsgSetTradingFlagResponse = {
  encode(_: MsgSetTradingFlagResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetTradingFlagResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetTradingFlagResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgSetTradingFlagResponse {
    return {};
  },

  toJSON(_: MsgSetTradingFlagResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSetTradingFlagResponse>): MsgSetTradingFlagResponse {
    return MsgSetTradingFlagResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgSetTradingFlagResponse>): MsgSetTradingFlagResponse {
    const message = createBaseMsgSetTradingFlagResponse();
    return message;
  },
};

function createBaseMsgCreateOrder(): MsgCreateOrder {
  return {
    creator: "",
    marketId: "",
    side: "",
    quantity: "",
    orderType: "",
    price: "",
    stopPrice: "",
    timeInForce: "",
    triggerType: "",
    isPostOnly: false,
    isReduceOnly: false,
    referralAddress: "",
    referralCommission: 0,
    referralKickback: 0,
    isUseBestPrice: false,
  };
}

export const MsgCreateOrder = {
  encode(message: MsgCreateOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.side !== "") {
      writer.uint32(26).string(message.side);
    }
    if (message.quantity !== "") {
      writer.uint32(34).string(message.quantity);
    }
    if (message.orderType !== "") {
      writer.uint32(42).string(message.orderType);
    }
    if (message.price !== "") {
      writer.uint32(50).string(message.price);
    }
    if (message.stopPrice !== "") {
      writer.uint32(58).string(message.stopPrice);
    }
    if (message.timeInForce !== "") {
      writer.uint32(66).string(message.timeInForce);
    }
    if (message.triggerType !== "") {
      writer.uint32(74).string(message.triggerType);
    }
    if (message.isPostOnly === true) {
      writer.uint32(80).bool(message.isPostOnly);
    }
    if (message.isReduceOnly === true) {
      writer.uint32(88).bool(message.isReduceOnly);
    }
    if (message.referralAddress !== "") {
      writer.uint32(98).string(message.referralAddress);
    }
    if (message.referralCommission !== 0) {
      writer.uint32(104).uint32(message.referralCommission);
    }
    if (message.referralKickback !== 0) {
      writer.uint32(112).uint32(message.referralKickback);
    }
    if (message.isUseBestPrice === true) {
      writer.uint32(120).bool(message.isUseBestPrice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOrder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.marketId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.side = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.quantity = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.orderType = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.price = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.stopPrice = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.timeInForce = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.triggerType = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.isPostOnly = reader.bool();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.isReduceOnly = reader.bool();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.referralAddress = reader.string();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.referralCommission = reader.uint32();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.referralKickback = reader.uint32();
          continue;
        case 15:
          if (tag !== 120) {
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

  fromJSON(object: any): MsgCreateOrder {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      side: isSet(object.side) ? String(object.side) : "",
      quantity: isSet(object.quantity) ? String(object.quantity) : "",
      orderType: isSet(object.orderType) ? String(object.orderType) : "",
      price: isSet(object.price) ? String(object.price) : "",
      stopPrice: isSet(object.stopPrice) ? String(object.stopPrice) : "",
      timeInForce: isSet(object.timeInForce) ? String(object.timeInForce) : "",
      triggerType: isSet(object.triggerType) ? String(object.triggerType) : "",
      isPostOnly: isSet(object.isPostOnly) ? Boolean(object.isPostOnly) : false,
      isReduceOnly: isSet(object.isReduceOnly) ? Boolean(object.isReduceOnly) : false,
      referralAddress: isSet(object.referralAddress) ? String(object.referralAddress) : "",
      referralCommission: isSet(object.referralCommission) ? Number(object.referralCommission) : 0,
      referralKickback: isSet(object.referralKickback) ? Number(object.referralKickback) : 0,
      isUseBestPrice: isSet(object.isUseBestPrice) ? Boolean(object.isUseBestPrice) : false,
    };
  },

  toJSON(message: MsgCreateOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.side !== undefined && (obj.side = message.side);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.orderType !== undefined && (obj.orderType = message.orderType);
    message.price !== undefined && (obj.price = message.price);
    message.stopPrice !== undefined && (obj.stopPrice = message.stopPrice);
    message.timeInForce !== undefined && (obj.timeInForce = message.timeInForce);
    message.triggerType !== undefined && (obj.triggerType = message.triggerType);
    message.isPostOnly !== undefined && (obj.isPostOnly = message.isPostOnly);
    message.isReduceOnly !== undefined && (obj.isReduceOnly = message.isReduceOnly);
    message.referralAddress !== undefined && (obj.referralAddress = message.referralAddress);
    message.referralCommission !== undefined && (obj.referralCommission = Math.round(message.referralCommission));
    message.referralKickback !== undefined && (obj.referralKickback = Math.round(message.referralKickback));
    message.isUseBestPrice !== undefined && (obj.isUseBestPrice = message.isUseBestPrice);
    return obj;
  },

  create(base?: DeepPartial<MsgCreateOrder>): MsgCreateOrder {
    return MsgCreateOrder.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreateOrder>): MsgCreateOrder {
    const message = createBaseMsgCreateOrder();
    message.creator = object.creator ?? "";
    message.marketId = object.marketId ?? "";
    message.side = object.side ?? "";
    message.quantity = object.quantity ?? "";
    message.orderType = object.orderType ?? "";
    message.price = object.price ?? "";
    message.stopPrice = object.stopPrice ?? "";
    message.timeInForce = object.timeInForce ?? "";
    message.triggerType = object.triggerType ?? "";
    message.isPostOnly = object.isPostOnly ?? false;
    message.isReduceOnly = object.isReduceOnly ?? false;
    message.referralAddress = object.referralAddress ?? "";
    message.referralCommission = object.referralCommission ?? 0;
    message.referralKickback = object.referralKickback ?? 0;
    message.isUseBestPrice = object.isUseBestPrice ?? false;
    return message;
  },
};

function createBaseMsgCreateOrderResponse(): MsgCreateOrderResponse {
  return { orderId: "" };
}

export const MsgCreateOrderResponse = {
  encode(message: MsgCreateOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderId !== "") {
      writer.uint32(10).string(message.orderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOrderResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.orderId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateOrderResponse {
    return { orderId: isSet(object.orderId) ? String(object.orderId) : "" };
  },

  toJSON(message: MsgCreateOrderResponse): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = message.orderId);
    return obj;
  },

  create(base?: DeepPartial<MsgCreateOrderResponse>): MsgCreateOrderResponse {
    return MsgCreateOrderResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreateOrderResponse>): MsgCreateOrderResponse {
    const message = createBaseMsgCreateOrderResponse();
    message.orderId = object.orderId ?? "";
    return message;
  },
};

function createBaseMsgEditOrder(): MsgEditOrder {
  return { creator: "", id: "", quantity: "", price: "", stopPrice: "" };
}

export const MsgEditOrder = {
  encode(message: MsgEditOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.quantity !== "") {
      writer.uint32(26).string(message.quantity);
    }
    if (message.price !== "") {
      writer.uint32(34).string(message.price);
    }
    if (message.stopPrice !== "") {
      writer.uint32(42).string(message.stopPrice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditOrder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.quantity = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.price = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.stopPrice = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgEditOrder {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? String(object.id) : "",
      quantity: isSet(object.quantity) ? String(object.quantity) : "",
      price: isSet(object.price) ? String(object.price) : "",
      stopPrice: isSet(object.stopPrice) ? String(object.stopPrice) : "",
    };
  },

  toJSON(message: MsgEditOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.price !== undefined && (obj.price = message.price);
    message.stopPrice !== undefined && (obj.stopPrice = message.stopPrice);
    return obj;
  },

  create(base?: DeepPartial<MsgEditOrder>): MsgEditOrder {
    return MsgEditOrder.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgEditOrder>): MsgEditOrder {
    const message = createBaseMsgEditOrder();
    message.creator = object.creator ?? "";
    message.id = object.id ?? "";
    message.quantity = object.quantity ?? "";
    message.price = object.price ?? "";
    message.stopPrice = object.stopPrice ?? "";
    return message;
  },
};

function createBaseMsgEditOrderResponse(): MsgEditOrderResponse {
  return {};
}

export const MsgEditOrderResponse = {
  encode(_: MsgEditOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditOrderResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgEditOrderResponse {
    return {};
  },

  toJSON(_: MsgEditOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgEditOrderResponse>): MsgEditOrderResponse {
    return MsgEditOrderResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgEditOrderResponse>): MsgEditOrderResponse {
    const message = createBaseMsgEditOrderResponse();
    return message;
  },
};

function createBaseEditOrders(): EditOrders {
  return { editOrders: [] };
}

export const EditOrders = {
  encode(message: EditOrders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.editOrders) {
      MsgEditOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EditOrders {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEditOrders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.editOrders.push(MsgEditOrder.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EditOrders {
    return {
      editOrders: Array.isArray(object?.editOrders) ? object.editOrders.map((e: any) => MsgEditOrder.fromJSON(e)) : [],
    };
  },

  toJSON(message: EditOrders): unknown {
    const obj: any = {};
    if (message.editOrders) {
      obj.editOrders = message.editOrders.map((e) => e ? MsgEditOrder.toJSON(e) : undefined);
    } else {
      obj.editOrders = [];
    }
    return obj;
  },

  create(base?: DeepPartial<EditOrders>): EditOrders {
    return EditOrders.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EditOrders>): EditOrders {
    const message = createBaseEditOrders();
    message.editOrders = object.editOrders?.map((e) => MsgEditOrder.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEditOrdersForMarket(): EditOrdersForMarket {
  return { marketId: "", editOrders: [] };
}

export const EditOrdersForMarket = {
  encode(message: EditOrdersForMarket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    for (const v of message.editOrders) {
      MsgEditOrder.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EditOrdersForMarket {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEditOrdersForMarket();
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

          message.editOrders.push(MsgEditOrder.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EditOrdersForMarket {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      editOrders: Array.isArray(object?.editOrders) ? object.editOrders.map((e: any) => MsgEditOrder.fromJSON(e)) : [],
    };
  },

  toJSON(message: EditOrdersForMarket): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    if (message.editOrders) {
      obj.editOrders = message.editOrders.map((e) => e ? MsgEditOrder.toJSON(e) : undefined);
    } else {
      obj.editOrders = [];
    }
    return obj;
  },

  create(base?: DeepPartial<EditOrdersForMarket>): EditOrdersForMarket {
    return EditOrdersForMarket.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EditOrdersForMarket>): EditOrdersForMarket {
    const message = createBaseEditOrdersForMarket();
    message.marketId = object.marketId ?? "";
    message.editOrders = object.editOrders?.map((e) => MsgEditOrder.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgCancelOrder(): MsgCancelOrder {
  return { creator: "", id: "" };
}

export const MsgCancelOrder = {
  encode(message: MsgCancelOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelOrder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCancelOrder {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: MsgCancelOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create(base?: DeepPartial<MsgCancelOrder>): MsgCancelOrder {
    return MsgCancelOrder.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCancelOrder>): MsgCancelOrder {
    const message = createBaseMsgCancelOrder();
    message.creator = object.creator ?? "";
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseMsgCancelOrderResponse(): MsgCancelOrderResponse {
  return {};
}

export const MsgCancelOrderResponse = {
  encode(_: MsgCancelOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelOrderResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgCancelOrderResponse {
    return {};
  },

  toJSON(_: MsgCancelOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgCancelOrderResponse>): MsgCancelOrderResponse {
    return MsgCancelOrderResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgCancelOrderResponse>): MsgCancelOrderResponse {
    const message = createBaseMsgCancelOrderResponse();
    return message;
  },
};

function createBaseMsgCancelAll(): MsgCancelAll {
  return { creator: "", marketId: "" };
}

export const MsgCancelAll = {
  encode(message: MsgCancelAll, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelAll {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelAll();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.marketId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCancelAll {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
    };
  },

  toJSON(message: MsgCancelAll): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  create(base?: DeepPartial<MsgCancelAll>): MsgCancelAll {
    return MsgCancelAll.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCancelAll>): MsgCancelAll {
    const message = createBaseMsgCancelAll();
    message.creator = object.creator ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  },
};

function createBaseMsgCancelAllResponse(): MsgCancelAllResponse {
  return {};
}

export const MsgCancelAllResponse = {
  encode(_: MsgCancelAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelAllResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgCancelAllResponse {
    return {};
  },

  toJSON(_: MsgCancelAllResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgCancelAllResponse>): MsgCancelAllResponse {
    return MsgCancelAllResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgCancelAllResponse>): MsgCancelAllResponse {
    const message = createBaseMsgCancelAllResponse();
    return message;
  },
};

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      ParamsToUpdate.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.params = ParamsToUpdate.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? ParamsToUpdate.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? ParamsToUpdate.toJSON(message.params) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    return MsgUpdateParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? ParamsToUpdate.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SetTradingFlag(request: MsgSetTradingFlag): Promise<MsgSetTradingFlagResponse>;
  CreateOrder(request: MsgCreateOrder): Promise<MsgCreateOrderResponse>;
  EditOrder(request: MsgEditOrder): Promise<MsgEditOrderResponse>;
  CancelOrder(request: MsgCancelOrder): Promise<MsgCancelOrderResponse>;
  CancelAll(request: MsgCancelAll): Promise<MsgCancelAllResponse>;
  /**
   * UpdateParams defines a governance operation for updating the module
   * parameters. The authority is hard-coded to the x/gov module account.
   *
   * Since: cosmos-sdk 0.47
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.order.Msg";
    this.rpc = rpc;
    this.SetTradingFlag = this.SetTradingFlag.bind(this);
    this.CreateOrder = this.CreateOrder.bind(this);
    this.EditOrder = this.EditOrder.bind(this);
    this.CancelOrder = this.CancelOrder.bind(this);
    this.CancelAll = this.CancelAll.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  SetTradingFlag(request: MsgSetTradingFlag): Promise<MsgSetTradingFlagResponse> {
    const data = MsgSetTradingFlag.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetTradingFlag", data);
    return promise.then((data) => MsgSetTradingFlagResponse.decode(_m0.Reader.create(data)));
  }

  CreateOrder(request: MsgCreateOrder): Promise<MsgCreateOrderResponse> {
    const data = MsgCreateOrder.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateOrder", data);
    return promise.then((data) => MsgCreateOrderResponse.decode(_m0.Reader.create(data)));
  }

  EditOrder(request: MsgEditOrder): Promise<MsgEditOrderResponse> {
    const data = MsgEditOrder.encode(request).finish();
    const promise = this.rpc.request(this.service, "EditOrder", data);
    return promise.then((data) => MsgEditOrderResponse.decode(_m0.Reader.create(data)));
  }

  CancelOrder(request: MsgCancelOrder): Promise<MsgCancelOrderResponse> {
    const data = MsgCancelOrder.encode(request).finish();
    const promise = this.rpc.request(this.service, "CancelOrder", data);
    return promise.then((data) => MsgCancelOrderResponse.decode(_m0.Reader.create(data)));
  }

  CancelAll(request: MsgCancelAll): Promise<MsgCancelAllResponse> {
    const data = MsgCancelAll.encode(request).finish();
    const promise = this.rpc.request(this.service, "CancelAll", data);
    return promise.then((data) => MsgCancelAllResponse.decode(_m0.Reader.create(data)));
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
