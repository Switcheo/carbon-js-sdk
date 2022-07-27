/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.order";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgSetTradingFlag {
  creator: string;
  isEnabled: boolean;
  blockchain: string;
}

export interface MsgSetTradingFlagResponse {}

export interface MsgCreateOrder {
  creator: string;
  market: string;
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
}

export interface MsgCreateOrderResponse {}

export interface MsgEditOrder {
  creator: string;
  id: string;
  quantity: string;
  price: string;
  stopPrice: string;
}

export interface MsgEditOrderResponse {}

export interface MsgCancelOrder {
  creator: string;
  id: string;
}

export interface MsgCancelOrderResponse {}

export interface MsgCancelAll {
  creator: string;
  market: string;
}

export interface MsgCancelAllResponse {}

const baseMsgSetTradingFlag: object = {
  creator: "",
  isEnabled: false,
  blockchain: "",
};

export const MsgSetTradingFlag = {
  encode(
    message: MsgSetTradingFlag,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetTradingFlag } as MsgSetTradingFlag;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.isEnabled = reader.bool();
          break;
        case 3:
          message.blockchain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetTradingFlag {
    const message = { ...baseMsgSetTradingFlag } as MsgSetTradingFlag;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.isEnabled =
      object.isEnabled !== undefined && object.isEnabled !== null
        ? Boolean(object.isEnabled)
        : false;
    message.blockchain =
      object.blockchain !== undefined && object.blockchain !== null
        ? String(object.blockchain)
        : "";
    return message;
  },

  toJSON(message: MsgSetTradingFlag): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
    message.blockchain !== undefined && (obj.blockchain = message.blockchain);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetTradingFlag>): MsgSetTradingFlag {
    const message = { ...baseMsgSetTradingFlag } as MsgSetTradingFlag;
    message.creator = object.creator ?? "";
    message.isEnabled = object.isEnabled ?? false;
    message.blockchain = object.blockchain ?? "";
    return message;
  },
};

const baseMsgSetTradingFlagResponse: object = {};

export const MsgSetTradingFlagResponse = {
  encode(
    _: MsgSetTradingFlagResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetTradingFlagResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetTradingFlagResponse,
    } as MsgSetTradingFlagResponse;
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

  fromJSON(_: any): MsgSetTradingFlagResponse {
    const message = {
      ...baseMsgSetTradingFlagResponse,
    } as MsgSetTradingFlagResponse;
    return message;
  },

  toJSON(_: MsgSetTradingFlagResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetTradingFlagResponse>
  ): MsgSetTradingFlagResponse {
    const message = {
      ...baseMsgSetTradingFlagResponse,
    } as MsgSetTradingFlagResponse;
    return message;
  },
};

const baseMsgCreateOrder: object = {
  creator: "",
  market: "",
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
};

export const MsgCreateOrder = {
  encode(
    message: MsgCreateOrder,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.market !== "") {
      writer.uint32(18).string(message.market);
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateOrder } as MsgCreateOrder;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.market = reader.string();
          break;
        case 3:
          message.side = reader.string();
          break;
        case 4:
          message.quantity = reader.string();
          break;
        case 5:
          message.orderType = reader.string();
          break;
        case 6:
          message.price = reader.string();
          break;
        case 7:
          message.stopPrice = reader.string();
          break;
        case 8:
          message.timeInForce = reader.string();
          break;
        case 9:
          message.triggerType = reader.string();
          break;
        case 10:
          message.isPostOnly = reader.bool();
          break;
        case 11:
          message.isReduceOnly = reader.bool();
          break;
        case 12:
          message.referralAddress = reader.string();
          break;
        case 13:
          message.referralCommission = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateOrder {
    const message = { ...baseMsgCreateOrder } as MsgCreateOrder;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.market =
      object.market !== undefined && object.market !== null
        ? String(object.market)
        : "";
    message.side =
      object.side !== undefined && object.side !== null
        ? String(object.side)
        : "";
    message.quantity =
      object.quantity !== undefined && object.quantity !== null
        ? String(object.quantity)
        : "";
    message.orderType =
      object.orderType !== undefined && object.orderType !== null
        ? String(object.orderType)
        : "";
    message.price =
      object.price !== undefined && object.price !== null
        ? String(object.price)
        : "";
    message.stopPrice =
      object.stopPrice !== undefined && object.stopPrice !== null
        ? String(object.stopPrice)
        : "";
    message.timeInForce =
      object.timeInForce !== undefined && object.timeInForce !== null
        ? String(object.timeInForce)
        : "";
    message.triggerType =
      object.triggerType !== undefined && object.triggerType !== null
        ? String(object.triggerType)
        : "";
    message.isPostOnly =
      object.isPostOnly !== undefined && object.isPostOnly !== null
        ? Boolean(object.isPostOnly)
        : false;
    message.isReduceOnly =
      object.isReduceOnly !== undefined && object.isReduceOnly !== null
        ? Boolean(object.isReduceOnly)
        : false;
    message.referralAddress =
      object.referralAddress !== undefined && object.referralAddress !== null
        ? String(object.referralAddress)
        : "";
    message.referralCommission =
      object.referralCommission !== undefined &&
      object.referralCommission !== null
        ? Number(object.referralCommission)
        : 0;
    return message;
  },

  toJSON(message: MsgCreateOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.market !== undefined && (obj.market = message.market);
    message.side !== undefined && (obj.side = message.side);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.orderType !== undefined && (obj.orderType = message.orderType);
    message.price !== undefined && (obj.price = message.price);
    message.stopPrice !== undefined && (obj.stopPrice = message.stopPrice);
    message.timeInForce !== undefined &&
      (obj.timeInForce = message.timeInForce);
    message.triggerType !== undefined &&
      (obj.triggerType = message.triggerType);
    message.isPostOnly !== undefined && (obj.isPostOnly = message.isPostOnly);
    message.isReduceOnly !== undefined &&
      (obj.isReduceOnly = message.isReduceOnly);
    message.referralAddress !== undefined &&
      (obj.referralAddress = message.referralAddress);
    message.referralCommission !== undefined &&
      (obj.referralCommission = message.referralCommission);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateOrder>): MsgCreateOrder {
    const message = { ...baseMsgCreateOrder } as MsgCreateOrder;
    message.creator = object.creator ?? "";
    message.market = object.market ?? "";
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
    return message;
  },
};

const baseMsgCreateOrderResponse: object = {};

export const MsgCreateOrderResponse = {
  encode(
    _: MsgCreateOrderResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateOrderResponse } as MsgCreateOrderResponse;
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

  fromJSON(_: any): MsgCreateOrderResponse {
    const message = { ...baseMsgCreateOrderResponse } as MsgCreateOrderResponse;
    return message;
  },

  toJSON(_: MsgCreateOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateOrderResponse>): MsgCreateOrderResponse {
    const message = { ...baseMsgCreateOrderResponse } as MsgCreateOrderResponse;
    return message;
  },
};

const baseMsgEditOrder: object = {
  creator: "",
  id: "",
  quantity: "",
  price: "",
  stopPrice: "",
};

export const MsgEditOrder = {
  encode(
    message: MsgEditOrder,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgEditOrder } as MsgEditOrder;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.quantity = reader.string();
          break;
        case 4:
          message.price = reader.string();
          break;
        case 5:
          message.stopPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEditOrder {
    const message = { ...baseMsgEditOrder } as MsgEditOrder;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.quantity =
      object.quantity !== undefined && object.quantity !== null
        ? String(object.quantity)
        : "";
    message.price =
      object.price !== undefined && object.price !== null
        ? String(object.price)
        : "";
    message.stopPrice =
      object.stopPrice !== undefined && object.stopPrice !== null
        ? String(object.stopPrice)
        : "";
    return message;
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

  fromPartial(object: DeepPartial<MsgEditOrder>): MsgEditOrder {
    const message = { ...baseMsgEditOrder } as MsgEditOrder;
    message.creator = object.creator ?? "";
    message.id = object.id ?? "";
    message.quantity = object.quantity ?? "";
    message.price = object.price ?? "";
    message.stopPrice = object.stopPrice ?? "";
    return message;
  },
};

const baseMsgEditOrderResponse: object = {};

export const MsgEditOrderResponse = {
  encode(
    _: MsgEditOrderResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgEditOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgEditOrderResponse } as MsgEditOrderResponse;
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

  fromJSON(_: any): MsgEditOrderResponse {
    const message = { ...baseMsgEditOrderResponse } as MsgEditOrderResponse;
    return message;
  },

  toJSON(_: MsgEditOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgEditOrderResponse>): MsgEditOrderResponse {
    const message = { ...baseMsgEditOrderResponse } as MsgEditOrderResponse;
    return message;
  },
};

const baseMsgCancelOrder: object = { creator: "", id: "" };

export const MsgCancelOrder = {
  encode(
    message: MsgCancelOrder,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCancelOrder } as MsgCancelOrder;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelOrder {
    const message = { ...baseMsgCancelOrder } as MsgCancelOrder;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    return message;
  },

  toJSON(message: MsgCancelOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCancelOrder>): MsgCancelOrder {
    const message = { ...baseMsgCancelOrder } as MsgCancelOrder;
    message.creator = object.creator ?? "";
    message.id = object.id ?? "";
    return message;
  },
};

const baseMsgCancelOrderResponse: object = {};

export const MsgCancelOrderResponse = {
  encode(
    _: MsgCancelOrderResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCancelOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCancelOrderResponse } as MsgCancelOrderResponse;
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

  fromJSON(_: any): MsgCancelOrderResponse {
    const message = { ...baseMsgCancelOrderResponse } as MsgCancelOrderResponse;
    return message;
  },

  toJSON(_: MsgCancelOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCancelOrderResponse>): MsgCancelOrderResponse {
    const message = { ...baseMsgCancelOrderResponse } as MsgCancelOrderResponse;
    return message;
  },
};

const baseMsgCancelAll: object = { creator: "", market: "" };

export const MsgCancelAll = {
  encode(
    message: MsgCancelAll,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.market !== "") {
      writer.uint32(18).string(message.market);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelAll {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCancelAll } as MsgCancelAll;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.market = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelAll {
    const message = { ...baseMsgCancelAll } as MsgCancelAll;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.market =
      object.market !== undefined && object.market !== null
        ? String(object.market)
        : "";
    return message;
  },

  toJSON(message: MsgCancelAll): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.market !== undefined && (obj.market = message.market);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCancelAll>): MsgCancelAll {
    const message = { ...baseMsgCancelAll } as MsgCancelAll;
    message.creator = object.creator ?? "";
    message.market = object.market ?? "";
    return message;
  },
};

const baseMsgCancelAllResponse: object = {};

export const MsgCancelAllResponse = {
  encode(
    _: MsgCancelAllResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCancelAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCancelAllResponse } as MsgCancelAllResponse;
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

  fromJSON(_: any): MsgCancelAllResponse {
    const message = { ...baseMsgCancelAllResponse } as MsgCancelAllResponse;
    return message;
  },

  toJSON(_: MsgCancelAllResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCancelAllResponse>): MsgCancelAllResponse {
    const message = { ...baseMsgCancelAllResponse } as MsgCancelAllResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SetTradingFlag(
    request: MsgSetTradingFlag
  ): Promise<MsgSetTradingFlagResponse>;
  CreateOrder(request: MsgCreateOrder): Promise<MsgCreateOrderResponse>;
  EditOrder(request: MsgEditOrder): Promise<MsgEditOrderResponse>;
  CancelOrder(request: MsgCancelOrder): Promise<MsgCancelOrderResponse>;
  CancelAll(request: MsgCancelAll): Promise<MsgCancelAllResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SetTradingFlag = this.SetTradingFlag.bind(this);
    this.CreateOrder = this.CreateOrder.bind(this);
    this.EditOrder = this.EditOrder.bind(this);
    this.CancelOrder = this.CancelOrder.bind(this);
    this.CancelAll = this.CancelAll.bind(this);
  }
  SetTradingFlag(
    request: MsgSetTradingFlag
  ): Promise<MsgSetTradingFlagResponse> {
    const data = MsgSetTradingFlag.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.order.Msg",
      "SetTradingFlag",
      data
    );
    return promise.then((data) =>
      MsgSetTradingFlagResponse.decode(new _m0.Reader(data))
    );
  }

  CreateOrder(request: MsgCreateOrder): Promise<MsgCreateOrderResponse> {
    const data = MsgCreateOrder.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.order.Msg",
      "CreateOrder",
      data
    );
    return promise.then((data) =>
      MsgCreateOrderResponse.decode(new _m0.Reader(data))
    );
  }

  EditOrder(request: MsgEditOrder): Promise<MsgEditOrderResponse> {
    const data = MsgEditOrder.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.order.Msg",
      "EditOrder",
      data
    );
    return promise.then((data) =>
      MsgEditOrderResponse.decode(new _m0.Reader(data))
    );
  }

  CancelOrder(request: MsgCancelOrder): Promise<MsgCancelOrderResponse> {
    const data = MsgCancelOrder.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.order.Msg",
      "CancelOrder",
      data
    );
    return promise.then((data) =>
      MsgCancelOrderResponse.decode(new _m0.Reader(data))
    );
  }

  CancelAll(request: MsgCancelAll): Promise<MsgCancelAllResponse> {
    const data = MsgCancelAll.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.order.Msg",
      "CancelAll",
      data
    );
    return promise.then((data) =>
      MsgCancelAllResponse.decode(new _m0.Reader(data))
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
