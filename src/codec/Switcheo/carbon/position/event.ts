/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { OpenInterest, Position } from "./position";

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

function createBasePositionEvent(): PositionEvent {
  return {
    position: undefined,
    id: Long.UZERO,
    type: "",
    allocatedMarginDenom: "",
    allocatedMarginAmount: "",
    updatedBlockHeight: Long.UZERO,
    tradeId: Long.UZERO,
    updateReason: Long.UZERO,
  };
}

export const PositionEvent = {
  encode(message: PositionEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.position = Position.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.type = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.allocatedMarginDenom = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.allocatedMarginAmount = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.updatedBlockHeight = reader.uint64() as Long;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.tradeId = reader.uint64() as Long;
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.updateReason = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PositionEvent {
    return {
      position: isSet(object.position) ? Position.fromJSON(object.position) : undefined,
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      type: isSet(object.type) ? String(object.type) : "",
      allocatedMarginDenom: isSet(object.allocatedMarginDenom) ? String(object.allocatedMarginDenom) : "",
      allocatedMarginAmount: isSet(object.allocatedMarginAmount) ? String(object.allocatedMarginAmount) : "",
      updatedBlockHeight: isSet(object.updatedBlockHeight) ? Long.fromValue(object.updatedBlockHeight) : Long.UZERO,
      tradeId: isSet(object.tradeId) ? Long.fromValue(object.tradeId) : Long.UZERO,
      updateReason: isSet(object.updateReason) ? Long.fromValue(object.updateReason) : Long.UZERO,
    };
  },

  toJSON(message: PositionEvent): unknown {
    const obj: any = {};
    message.position !== undefined && (obj.position = message.position ? Position.toJSON(message.position) : undefined);
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.type !== undefined && (obj.type = message.type);
    message.allocatedMarginDenom !== undefined && (obj.allocatedMarginDenom = message.allocatedMarginDenom);
    message.allocatedMarginAmount !== undefined && (obj.allocatedMarginAmount = message.allocatedMarginAmount);
    message.updatedBlockHeight !== undefined &&
      (obj.updatedBlockHeight = (message.updatedBlockHeight || Long.UZERO).toString());
    message.tradeId !== undefined && (obj.tradeId = (message.tradeId || Long.UZERO).toString());
    message.updateReason !== undefined && (obj.updateReason = (message.updateReason || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<PositionEvent>): PositionEvent {
    return PositionEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PositionEvent>): PositionEvent {
    const message = createBasePositionEvent();
    message.position = (object.position !== undefined && object.position !== null)
      ? Position.fromPartial(object.position)
      : undefined;
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.type = object.type ?? "";
    message.allocatedMarginDenom = object.allocatedMarginDenom ?? "";
    message.allocatedMarginAmount = object.allocatedMarginAmount ?? "";
    message.updatedBlockHeight = (object.updatedBlockHeight !== undefined && object.updatedBlockHeight !== null)
      ? Long.fromValue(object.updatedBlockHeight)
      : Long.UZERO;
    message.tradeId = (object.tradeId !== undefined && object.tradeId !== null)
      ? Long.fromValue(object.tradeId)
      : Long.UZERO;
    message.updateReason = (object.updateReason !== undefined && object.updateReason !== null)
      ? Long.fromValue(object.updateReason)
      : Long.UZERO;
    return message;
  },
};

function createBaseOpenInterestEvent(): OpenInterestEvent {
  return { openInterest: undefined };
}

export const OpenInterestEvent = {
  encode(message: OpenInterestEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.openInterest !== undefined) {
      OpenInterest.encode(message.openInterest, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenInterestEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenInterestEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.openInterest = OpenInterest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OpenInterestEvent {
    return { openInterest: isSet(object.openInterest) ? OpenInterest.fromJSON(object.openInterest) : undefined };
  },

  toJSON(message: OpenInterestEvent): unknown {
    const obj: any = {};
    message.openInterest !== undefined &&
      (obj.openInterest = message.openInterest ? OpenInterest.toJSON(message.openInterest) : undefined);
    return obj;
  },

  create(base?: DeepPartial<OpenInterestEvent>): OpenInterestEvent {
    return OpenInterestEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<OpenInterestEvent>): OpenInterestEvent {
    const message = createBaseOpenInterestEvent();
    message.openInterest = (object.openInterest !== undefined && object.openInterest !== null)
      ? OpenInterest.fromPartial(object.openInterest)
      : undefined;
    return message;
  },
};

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
