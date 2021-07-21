/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "Switcheo.carbon.position";

export interface Position {
  market: string;
  address: string;
  lots: string;
  entryPrice: string;
  realizedPnl: string;
  allocatedMargin?: Coin;
  openedBlockHeight: Long;
}

const basePosition: object = {
  market: "",
  address: "",
  lots: "",
  entryPrice: "",
  realizedPnl: "",
  openedBlockHeight: Long.UZERO,
};

export const Position = {
  encode(
    message: Position,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.market !== "") {
      writer.uint32(10).string(message.market);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.lots !== "") {
      writer.uint32(26).string(message.lots);
    }
    if (message.entryPrice !== "") {
      writer.uint32(34).string(message.entryPrice);
    }
    if (message.realizedPnl !== "") {
      writer.uint32(42).string(message.realizedPnl);
    }
    if (message.allocatedMargin !== undefined) {
      Coin.encode(message.allocatedMargin, writer.uint32(50).fork()).ldelim();
    }
    if (!message.openedBlockHeight.isZero()) {
      writer.uint32(56).uint64(message.openedBlockHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Position {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePosition } as Position;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.lots = reader.string();
          break;
        case 4:
          message.entryPrice = reader.string();
          break;
        case 5:
          message.realizedPnl = reader.string();
          break;
        case 6:
          message.allocatedMargin = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.openedBlockHeight = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Position {
    const message = { ...basePosition } as Position;
    if (object.market !== undefined && object.market !== null) {
      message.market = String(object.market);
    } else {
      message.market = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.lots !== undefined && object.lots !== null) {
      message.lots = String(object.lots);
    } else {
      message.lots = "";
    }
    if (object.entryPrice !== undefined && object.entryPrice !== null) {
      message.entryPrice = String(object.entryPrice);
    } else {
      message.entryPrice = "";
    }
    if (object.realizedPnl !== undefined && object.realizedPnl !== null) {
      message.realizedPnl = String(object.realizedPnl);
    } else {
      message.realizedPnl = "";
    }
    if (
      object.allocatedMargin !== undefined &&
      object.allocatedMargin !== null
    ) {
      message.allocatedMargin = Coin.fromJSON(object.allocatedMargin);
    } else {
      message.allocatedMargin = undefined;
    }
    if (
      object.openedBlockHeight !== undefined &&
      object.openedBlockHeight !== null
    ) {
      message.openedBlockHeight = Long.fromString(object.openedBlockHeight);
    } else {
      message.openedBlockHeight = Long.UZERO;
    }
    return message;
  },

  toJSON(message: Position): unknown {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market);
    message.address !== undefined && (obj.address = message.address);
    message.lots !== undefined && (obj.lots = message.lots);
    message.entryPrice !== undefined && (obj.entryPrice = message.entryPrice);
    message.realizedPnl !== undefined &&
      (obj.realizedPnl = message.realizedPnl);
    message.allocatedMargin !== undefined &&
      (obj.allocatedMargin = message.allocatedMargin
        ? Coin.toJSON(message.allocatedMargin)
        : undefined);
    message.openedBlockHeight !== undefined &&
      (obj.openedBlockHeight = (
        message.openedBlockHeight || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Position>): Position {
    const message = { ...basePosition } as Position;
    if (object.market !== undefined && object.market !== null) {
      message.market = object.market;
    } else {
      message.market = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.lots !== undefined && object.lots !== null) {
      message.lots = object.lots;
    } else {
      message.lots = "";
    }
    if (object.entryPrice !== undefined && object.entryPrice !== null) {
      message.entryPrice = object.entryPrice;
    } else {
      message.entryPrice = "";
    }
    if (object.realizedPnl !== undefined && object.realizedPnl !== null) {
      message.realizedPnl = object.realizedPnl;
    } else {
      message.realizedPnl = "";
    }
    if (
      object.allocatedMargin !== undefined &&
      object.allocatedMargin !== null
    ) {
      message.allocatedMargin = Coin.fromPartial(object.allocatedMargin);
    } else {
      message.allocatedMargin = undefined;
    }
    if (
      object.openedBlockHeight !== undefined &&
      object.openedBlockHeight !== null
    ) {
      message.openedBlockHeight = object.openedBlockHeight as Long;
    } else {
      message.openedBlockHeight = Long.UZERO;
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
