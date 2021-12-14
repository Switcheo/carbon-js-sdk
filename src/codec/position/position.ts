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

export interface Positions {
  positions: Position[];
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
    message.market =
      object.market !== undefined && object.market !== null
        ? String(object.market)
        : "";
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.lots =
      object.lots !== undefined && object.lots !== null
        ? String(object.lots)
        : "";
    message.entryPrice =
      object.entryPrice !== undefined && object.entryPrice !== null
        ? String(object.entryPrice)
        : "";
    message.realizedPnl =
      object.realizedPnl !== undefined && object.realizedPnl !== null
        ? String(object.realizedPnl)
        : "";
    message.allocatedMargin =
      object.allocatedMargin !== undefined && object.allocatedMargin !== null
        ? Coin.fromJSON(object.allocatedMargin)
        : undefined;
    message.openedBlockHeight =
      object.openedBlockHeight !== undefined &&
      object.openedBlockHeight !== null
        ? Long.fromString(object.openedBlockHeight)
        : Long.UZERO;
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
    message.market = object.market ?? "";
    message.address = object.address ?? "";
    message.lots = object.lots ?? "";
    message.entryPrice = object.entryPrice ?? "";
    message.realizedPnl = object.realizedPnl ?? "";
    message.allocatedMargin =
      object.allocatedMargin !== undefined && object.allocatedMargin !== null
        ? Coin.fromPartial(object.allocatedMargin)
        : undefined;
    message.openedBlockHeight =
      object.openedBlockHeight !== undefined &&
      object.openedBlockHeight !== null
        ? Long.fromValue(object.openedBlockHeight)
        : Long.UZERO;
    return message;
  },
};

const basePositions: object = {};

export const Positions = {
  encode(
    message: Positions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.positions) {
      Position.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Positions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePositions } as Positions;
    message.positions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positions.push(Position.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Positions {
    const message = { ...basePositions } as Positions;
    message.positions = (object.positions ?? []).map((e: any) =>
      Position.fromJSON(e)
    );
    return message;
  },

  toJSON(message: Positions): unknown {
    const obj: any = {};
    if (message.positions) {
      obj.positions = message.positions.map((e) =>
        e ? Position.toJSON(e) : undefined
      );
    } else {
      obj.positions = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Positions>): Positions {
    const message = { ...basePositions } as Positions;
    message.positions = (object.positions ?? []).map((e) =>
      Position.fromPartial(e)
    );
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
