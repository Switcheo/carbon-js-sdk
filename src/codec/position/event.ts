/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Position } from "../position/position";

export const protobufPackage = "Switcheo.carbon.position";

export interface PositionEvent {
  position?: Position;
  id: Long;
  type: string;
  allocatedMarginDenom: string;
  allocatedMarginAmount: string;
  updatedBlockHeight: Long;
  tradeId: Long;
  updateReason: Long;
}

const basePositionEvent: object = {
  id: Long.UZERO,
  type: "",
  allocatedMarginDenom: "",
  allocatedMarginAmount: "",
  updatedBlockHeight: Long.UZERO,
  tradeId: Long.UZERO,
  updateReason: Long.UZERO,
};

export const PositionEvent = {
  encode(
    message: PositionEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    if (message.allocatedMarginDenom !== "") {
      writer.uint32(34).string(message.allocatedMarginDenom);
    }
    if (message.allocatedMarginAmount !== "") {
      writer.uint32(42).string(message.allocatedMarginAmount);
    }
    if (!message.updatedBlockHeight.isZero()) {
      writer.uint32(48).uint64(message.updatedBlockHeight);
    }
    if (!message.tradeId.isZero()) {
      writer.uint32(56).uint64(message.tradeId);
    }
    if (!message.updateReason.isZero()) {
      writer.uint32(64).uint64(message.updateReason);
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
          message.id = reader.uint64() as Long;
          break;
        case 3:
          message.type = reader.string();
          break;
        case 4:
          message.allocatedMarginDenom = reader.string();
          break;
        case 5:
          message.allocatedMarginAmount = reader.string();
          break;
        case 6:
          message.updatedBlockHeight = reader.uint64() as Long;
          break;
        case 7:
          message.tradeId = reader.uint64() as Long;
          break;
        case 8:
          message.updateReason = reader.uint64() as Long;
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
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    } else {
      message.id = Long.UZERO;
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
    if (object.tradeId !== undefined && object.tradeId !== null) {
      message.tradeId = Long.fromString(object.tradeId);
    } else {
      message.tradeId = Long.UZERO;
    }
    if (object.updateReason !== undefined && object.updateReason !== null) {
      message.updateReason = Long.fromString(object.updateReason);
    } else {
      message.updateReason = Long.UZERO;
    }
    return message;
  },

  toJSON(message: PositionEvent): unknown {
    const obj: any = {};
    message.position !== undefined &&
      (obj.position = message.position
        ? Position.toJSON(message.position)
        : undefined);
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.type !== undefined && (obj.type = message.type);
    message.allocatedMarginDenom !== undefined &&
      (obj.allocatedMarginDenom = message.allocatedMarginDenom);
    message.allocatedMarginAmount !== undefined &&
      (obj.allocatedMarginAmount = message.allocatedMarginAmount);
    message.updatedBlockHeight !== undefined &&
      (obj.updatedBlockHeight = (
        message.updatedBlockHeight || Long.UZERO
      ).toString());
    message.tradeId !== undefined &&
      (obj.tradeId = (message.tradeId || Long.UZERO).toString());
    message.updateReason !== undefined &&
      (obj.updateReason = (message.updateReason || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<PositionEvent>): PositionEvent {
    const message = { ...basePositionEvent } as PositionEvent;
    if (object.position !== undefined && object.position !== null) {
      message.position = Position.fromPartial(object.position);
    } else {
      message.position = undefined;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id as Long;
    } else {
      message.id = Long.UZERO;
    }
    message.type = object.type ?? "";
    message.allocatedMarginDenom = object.allocatedMarginDenom ?? "";
    message.allocatedMarginAmount = object.allocatedMarginAmount ?? "";
    if (
      object.updatedBlockHeight !== undefined &&
      object.updatedBlockHeight !== null
    ) {
      message.updatedBlockHeight = object.updatedBlockHeight as Long;
    } else {
      message.updatedBlockHeight = Long.UZERO;
    }
    if (object.tradeId !== undefined && object.tradeId !== null) {
      message.tradeId = object.tradeId as Long;
    } else {
      message.tradeId = Long.UZERO;
    }
    if (object.updateReason !== undefined && object.updateReason !== null) {
      message.updateReason = object.updateReason as Long;
    } else {
      message.updateReason = Long.UZERO;
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
