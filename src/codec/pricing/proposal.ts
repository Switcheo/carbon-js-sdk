/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.tradehubcosmos.pricing";

export interface SettlementPriceProposal {
  title: string;
  description: string;
  market: string;
  settlementPrice: string;
}

const baseSettlementPriceProposal: object = {
  title: "",
  description: "",
  market: "",
  settlementPrice: "",
};

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

  fromJSON(object: any): SettlementPriceProposal {
    const message = {
      ...baseSettlementPriceProposal,
    } as SettlementPriceProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.market !== undefined && object.market !== null) {
      message.market = String(object.market);
    } else {
      message.market = "";
    }
    if (
      object.settlementPrice !== undefined &&
      object.settlementPrice !== null
    ) {
      message.settlementPrice = String(object.settlementPrice);
    } else {
      message.settlementPrice = "";
    }
    return message;
  },

  toJSON(message: SettlementPriceProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.market !== undefined && (obj.market = message.market);
    message.settlementPrice !== undefined &&
      (obj.settlementPrice = message.settlementPrice);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SettlementPriceProposal>
  ): SettlementPriceProposal {
    const message = {
      ...baseSettlementPriceProposal,
    } as SettlementPriceProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.market !== undefined && object.market !== null) {
      message.market = object.market;
    } else {
      message.market = "";
    }
    if (
      object.settlementPrice !== undefined &&
      object.settlementPrice !== null
    ) {
      message.settlementPrice = object.settlementPrice;
    } else {
      message.settlementPrice = "";
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
