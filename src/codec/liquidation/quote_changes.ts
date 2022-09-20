/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Order } from "../order/order";
import { OutstandingPosition } from "./outstanding_position";

export const protobufPackage = "Switcheo.carbon.liquidation";

export interface QuoteChanges {
  create: Order[];
  update: OutstandingPosition[];
  remove: string[];
}

const baseQuoteChanges: object = { remove: "" };

export const QuoteChanges = {
  encode(
    message: QuoteChanges,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.create) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.update) {
      OutstandingPosition.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.remove) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuoteChanges {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuoteChanges } as QuoteChanges;
    message.create = [];
    message.update = [];
    message.remove = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.create.push(Order.decode(reader, reader.uint32()));
          break;
        case 2:
          message.update.push(
            OutstandingPosition.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.remove.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuoteChanges {
    const message = { ...baseQuoteChanges } as QuoteChanges;
    message.create = (object.create ?? []).map((e: any) => Order.fromJSON(e));
    message.update = (object.update ?? []).map((e: any) =>
      OutstandingPosition.fromJSON(e)
    );
    message.remove = (object.remove ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: QuoteChanges): unknown {
    const obj: any = {};
    if (message.create) {
      obj.create = message.create.map((e) => (e ? Order.toJSON(e) : undefined));
    } else {
      obj.create = [];
    }
    if (message.update) {
      obj.update = message.update.map((e) =>
        e ? OutstandingPosition.toJSON(e) : undefined
      );
    } else {
      obj.update = [];
    }
    if (message.remove) {
      obj.remove = message.remove.map((e) => e);
    } else {
      obj.remove = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QuoteChanges>): QuoteChanges {
    const message = { ...baseQuoteChanges } as QuoteChanges;
    message.create = (object.create ?? []).map((e) => Order.fromPartial(e));
    message.update = (object.update ?? []).map((e) =>
      OutstandingPosition.fromPartial(e)
    );
    message.remove = (object.remove ?? []).map((e) => e);
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
