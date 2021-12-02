/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.pricing";

export interface SettlementPriceProposal {
  title: string;
  description: string;
  msg?: SettlementPriceParams;
}

export interface SettlementPriceParams {
  market: string;
  settlementPrice: string;
}

const baseSettlementPriceProposal: object = { title: "", description: "" };

export const SettlementPriceProposal = {
  encode(
    message: SettlementPriceProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.msg !== undefined) {
      SettlementPriceParams.encode(
        message.msg,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SettlementPriceProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSettlementPriceProposal,
    } as SettlementPriceProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.msg = SettlementPriceParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SettlementPriceProposal {
    const message = {
      ...baseSettlementPriceProposal,
    } as SettlementPriceProposal;
    message.title =
      object.title !== undefined && object.title !== null
        ? String(object.title)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.msg =
      object.msg !== undefined && object.msg !== null
        ? SettlementPriceParams.fromJSON(object.msg)
        : undefined;
    return message;
  },

  toJSON(message: SettlementPriceProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.msg !== undefined &&
      (obj.msg = message.msg
        ? SettlementPriceParams.toJSON(message.msg)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SettlementPriceProposal>, I>>(
    object: I
  ): SettlementPriceProposal {
    const message = {
      ...baseSettlementPriceProposal,
    } as SettlementPriceProposal;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.msg =
      object.msg !== undefined && object.msg !== null
        ? SettlementPriceParams.fromPartial(object.msg)
        : undefined;
    return message;
  },
};

const baseSettlementPriceParams: object = { market: "", settlementPrice: "" };

export const SettlementPriceParams = {
  encode(
    message: SettlementPriceParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.market !== "") {
      writer.uint32(26).string(message.market);
    }
    if (message.settlementPrice !== "") {
      writer.uint32(34).string(message.settlementPrice);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SettlementPriceParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSettlementPriceParams } as SettlementPriceParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.market = reader.string();
          break;
        case 4:
          message.settlementPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SettlementPriceParams {
    const message = { ...baseSettlementPriceParams } as SettlementPriceParams;
    message.market =
      object.market !== undefined && object.market !== null
        ? String(object.market)
        : "";
    message.settlementPrice =
      object.settlementPrice !== undefined && object.settlementPrice !== null
        ? String(object.settlementPrice)
        : "";
    return message;
  },

  toJSON(message: SettlementPriceParams): unknown {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market);
    message.settlementPrice !== undefined &&
      (obj.settlementPrice = message.settlementPrice);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SettlementPriceParams>, I>>(
    object: I
  ): SettlementPriceParams {
    const message = { ...baseSettlementPriceParams } as SettlementPriceParams;
    message.market = object.market ?? "";
    message.settlementPrice = object.settlementPrice ?? "";
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

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
