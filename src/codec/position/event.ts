/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Position } from "../position/position";

export const protobufPackage = "Switcheo.carbon.position";

export interface PositionEvent {
  position?: Position;
  type: string;
  allocatedMarginDenom: string;
  allocatedMarginAmount: string;
  updatedBlockHeight: Long;
  orderId: string;
  counterpartyOrderId: string;
}

const basePositionEvent: object = {
  type: "",
  allocatedMarginDenom: "",
  allocatedMarginAmount: "",
  updatedBlockHeight: Long.UZERO,
  orderId: "",
  counterpartyOrderId: "",
};

export const PositionEvent = {
  encode(
    message: PositionEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.allocatedMarginDenom !== "") {
      writer.uint32(26).string(message.allocatedMarginDenom);
    }
    if (message.allocatedMarginAmount !== "") {
      writer.uint32(34).string(message.allocatedMarginAmount);
    }
    if (!message.updatedBlockHeight.isZero()) {
      writer.uint32(40).uint64(message.updatedBlockHeight);
    }
    if (message.orderId !== "") {
      writer.uint32(50).string(message.orderId);
    }
    if (message.counterpartyOrderId !== "") {
      writer.uint32(58).string(message.counterpartyOrderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PositionEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePositionEvent } as PositionEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position = Position.decode(reader, reader.uint32());
          break;
        case 2:
          message.type = reader.string();
          break;
        case 3:
          message.allocatedMarginDenom = reader.string();
          break;
        case 4:
          message.allocatedMarginAmount = reader.string();
          break;
        case 5:
          message.updatedBlockHeight = reader.uint64() as Long;
          break;
        case 6:
          message.orderId = reader.string();
          break;
        case 7:
          message.counterpartyOrderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PositionEvent {
    const message = { ...basePositionEvent } as PositionEvent;
    if (object.position !== undefined && object.position !== null) {
      message.position = Position.fromJSON(object.position);
    } else {
      message.position = undefined;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (
      object.allocatedMarginDenom !== undefined &&
      object.allocatedMarginDenom !== null
    ) {
      message.allocatedMarginDenom = String(object.allocatedMarginDenom);
    } else {
      message.allocatedMarginDenom = "";
    }
    if (
      object.allocatedMarginAmount !== undefined &&
      object.allocatedMarginAmount !== null
    ) {
      message.allocatedMarginAmount = String(object.allocatedMarginAmount);
    } else {
      message.allocatedMarginAmount = "";
    }
    if (
      object.updatedBlockHeight !== undefined &&
      object.updatedBlockHeight !== null
    ) {
      message.updatedBlockHeight = Long.fromString(object.updatedBlockHeight);
    } else {
      message.updatedBlockHeight = Long.UZERO;
    }
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = String(object.orderId);
    } else {
      message.orderId = "";
    }
    if (
      object.counterpartyOrderId !== undefined &&
      object.counterpartyOrderId !== null
    ) {
      message.counterpartyOrderId = String(object.counterpartyOrderId);
    } else {
      message.counterpartyOrderId = "";
    }
    return message;
  },

  toJSON(message: PositionEvent): unknown {
    const obj: any = {};
    message.position !== undefined &&
      (obj.position = message.position
        ? Position.toJSON(message.position)
        : undefined);
    message.type !== undefined && (obj.type = message.type);
    message.allocatedMarginDenom !== undefined &&
      (obj.allocatedMarginDenom = message.allocatedMarginDenom);
    message.allocatedMarginAmount !== undefined &&
      (obj.allocatedMarginAmount = message.allocatedMarginAmount);
    message.updatedBlockHeight !== undefined &&
      (obj.updatedBlockHeight = (
        message.updatedBlockHeight || Long.UZERO
      ).toString());
    message.orderId !== undefined && (obj.orderId = message.orderId);
    message.counterpartyOrderId !== undefined &&
      (obj.counterpartyOrderId = message.counterpartyOrderId);
    return obj;
  },

  fromPartial(object: DeepPartial<PositionEvent>): PositionEvent {
    const message = { ...basePositionEvent } as PositionEvent;
    if (object.position !== undefined && object.position !== null) {
      message.position = Position.fromPartial(object.position);
    } else {
      message.position = undefined;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (
      object.allocatedMarginDenom !== undefined &&
      object.allocatedMarginDenom !== null
    ) {
      message.allocatedMarginDenom = object.allocatedMarginDenom;
    } else {
      message.allocatedMarginDenom = "";
    }
    if (
      object.allocatedMarginAmount !== undefined &&
      object.allocatedMarginAmount !== null
    ) {
      message.allocatedMarginAmount = object.allocatedMarginAmount;
    } else {
      message.allocatedMarginAmount = "";
    }
    if (
      object.updatedBlockHeight !== undefined &&
      object.updatedBlockHeight !== null
    ) {
      message.updatedBlockHeight = object.updatedBlockHeight as Long;
    } else {
      message.updatedBlockHeight = Long.UZERO;
    }
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = object.orderId;
    } else {
      message.orderId = "";
    }
    if (
      object.counterpartyOrderId !== undefined &&
      object.counterpartyOrderId !== null
    ) {
      message.counterpartyOrderId = object.counterpartyOrderId;
    } else {
      message.counterpartyOrderId = "";
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
