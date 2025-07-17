/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { OrderBook, StopBook } from "./book";

export const protobufPackage = "Switcheo.carbon.book";

/** GenesisState defines the book module's genesis state. */
export interface GenesisState {
  /**
   * this line is used by starport scaffolding # genesis/proto/state
   * this line is used by starport scaffolding # ibc/genesis/proto
   */
  orderBooks: OrderBook[];
  stopBooks: StopBook[];
}

function createBaseGenesisState(): GenesisState {
  return { orderBooks: [], stopBooks: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orderBooks) {
      OrderBook.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.stopBooks) {
      StopBook.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.orderBooks.push(OrderBook.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.stopBooks.push(StopBook.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      orderBooks: Array.isArray(object?.orderBooks) ? object.orderBooks.map((e: any) => OrderBook.fromJSON(e)) : [],
      stopBooks: Array.isArray(object?.stopBooks) ? object.stopBooks.map((e: any) => StopBook.fromJSON(e)) : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.orderBooks) {
      obj.orderBooks = message.orderBooks.map((e) => e ? OrderBook.toJSON(e) : undefined);
    } else {
      obj.orderBooks = [];
    }
    if (message.stopBooks) {
      obj.stopBooks = message.stopBooks.map((e) => e ? StopBook.toJSON(e) : undefined);
    } else {
      obj.stopBooks = [];
    }
    return obj;
  },

  create(base?: DeepPartial<GenesisState>): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.orderBooks = object.orderBooks?.map((e) => OrderBook.fromPartial(e)) || [];
    message.stopBooks = object.stopBooks?.map((e) => StopBook.fromPartial(e)) || [];
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
