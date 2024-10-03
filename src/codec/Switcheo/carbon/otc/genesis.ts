/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { Rfq } from "./rfq";
import { Quote } from "./quote";

export const protobufPackage = "Switcheo.carbon.otc";

/** GenesisState defines the otc module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  params?: Params;
  rfqs: Rfq[];
  quotes: Quote[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.rfqs) {
      Rfq.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.quotes) {
      Quote.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.rfqs = [];
    message.quotes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.rfqs.push(Rfq.decode(reader, reader.uint32()));
          break;
        case 3:
          message.quotes.push(Quote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromJSON(object.params)
        : undefined;
    message.rfqs = (object.rfqs ?? []).map((e: any) => Rfq.fromJSON(e));
    message.quotes = (object.quotes ?? []).map((e: any) => Quote.fromJSON(e));
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.rfqs) {
      obj.rfqs = message.rfqs.map((e) => (e ? Rfq.toJSON(e) : undefined));
    } else {
      obj.rfqs = [];
    }
    if (message.quotes) {
      obj.quotes = message.quotes.map((e) => (e ? Quote.toJSON(e) : undefined));
    } else {
      obj.quotes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    message.rfqs = (object.rfqs ?? []).map((e) => Rfq.fromPartial(e));
    message.quotes = (object.quotes ?? []).map((e) => Quote.fromPartial(e));
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
