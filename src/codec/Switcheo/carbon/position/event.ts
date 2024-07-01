/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Position, OpenInterest } from "./position";

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

export interface OpenInterestEvent {
  openInterest?: OpenInterest;
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
    message.position =
      object.position !== undefined && object.position !== null
        ? Position.fromJSON(object.position)
        : undefined;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromString(object.id)
        : Long.UZERO;
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    message.allocatedMarginDenom =
      object.allocatedMarginDenom !== undefined &&
      object.allocatedMarginDenom !== null
        ? String(object.allocatedMarginDenom)
        : "";
    message.allocatedMarginAmount =
      object.allocatedMarginAmount !== undefined &&
      object.allocatedMarginAmount !== null
        ? String(object.allocatedMarginAmount)
        : "";
    message.updatedBlockHeight =
      object.updatedBlockHeight !== undefined &&
      object.updatedBlockHeight !== null
        ? Long.fromString(object.updatedBlockHeight)
        : Long.UZERO;
    message.tradeId =
      object.tradeId !== undefined && object.tradeId !== null
        ? Long.fromString(object.tradeId)
        : Long.UZERO;
    message.updateReason =
      object.updateReason !== undefined && object.updateReason !== null
        ? Long.fromString(object.updateReason)
        : Long.UZERO;
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
    message.position =
      object.position !== undefined && object.position !== null
        ? Position.fromPartial(object.position)
        : undefined;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.type = object.type ?? "";
    message.allocatedMarginDenom = object.allocatedMarginDenom ?? "";
    message.allocatedMarginAmount = object.allocatedMarginAmount ?? "";
    message.updatedBlockHeight =
      object.updatedBlockHeight !== undefined &&
      object.updatedBlockHeight !== null
        ? Long.fromValue(object.updatedBlockHeight)
        : Long.UZERO;
    message.tradeId =
      object.tradeId !== undefined && object.tradeId !== null
        ? Long.fromValue(object.tradeId)
        : Long.UZERO;
    message.updateReason =
      object.updateReason !== undefined && object.updateReason !== null
        ? Long.fromValue(object.updateReason)
        : Long.UZERO;
    return message;
  },
};

const baseOpenInterestEvent: object = {};

export const OpenInterestEvent = {
  encode(
    message: OpenInterestEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.openInterest !== undefined) {
      OpenInterest.encode(
        message.openInterest,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenInterestEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOpenInterestEvent } as OpenInterestEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.openInterest = OpenInterest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OpenInterestEvent {
    const message = { ...baseOpenInterestEvent } as OpenInterestEvent;
    message.openInterest =
      object.openInterest !== undefined && object.openInterest !== null
        ? OpenInterest.fromJSON(object.openInterest)
        : undefined;
    return message;
  },

  toJSON(message: OpenInterestEvent): unknown {
    const obj: any = {};
    message.openInterest !== undefined &&
      (obj.openInterest = message.openInterest
        ? OpenInterest.toJSON(message.openInterest)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<OpenInterestEvent>): OpenInterestEvent {
    const message = { ...baseOpenInterestEvent } as OpenInterestEvent;
    message.openInterest =
      object.openInterest !== undefined && object.openInterest !== null
        ? OpenInterest.fromPartial(object.openInterest)
        : undefined;
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
