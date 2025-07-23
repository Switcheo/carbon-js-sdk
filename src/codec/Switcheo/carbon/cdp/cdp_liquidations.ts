/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "Switcheo.carbon.cdp";

export interface CDPLiquidations {
  id: Long;
  liquidator: string;
  debtor: string;
  collateralDenom: string;
  collateralAmountLiquidated: string;
  collateralAmountLiquidator: string;
  collateralAmountFee: string;
  liquidationPrice: string;
  marketPrice: string;
  discount: string;
  debtDenom: string;
  debtAmount: string;
  blockHeight: Long;
  blockTime?: Date;
  transactionHash: string;
}

function createBaseCDPLiquidations(): CDPLiquidations {
  return {
    id: Long.UZERO,
    liquidator: "",
    debtor: "",
    collateralDenom: "",
    collateralAmountLiquidated: "",
    collateralAmountLiquidator: "",
    collateralAmountFee: "",
    liquidationPrice: "",
    marketPrice: "",
    discount: "",
    debtDenom: "",
    debtAmount: "",
    blockHeight: Long.ZERO,
    blockTime: undefined,
    transactionHash: "",
  };
}

export const CDPLiquidations = {
  encode(message: CDPLiquidations, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.liquidator !== "") {
      writer.uint32(18).string(message.liquidator);
    }
    if (message.debtor !== "") {
      writer.uint32(26).string(message.debtor);
    }
    if (message.collateralDenom !== "") {
      writer.uint32(34).string(message.collateralDenom);
    }
    if (message.collateralAmountLiquidated !== "") {
      writer.uint32(42).string(message.collateralAmountLiquidated);
    }
    if (message.collateralAmountLiquidator !== "") {
      writer.uint32(50).string(message.collateralAmountLiquidator);
    }
    if (message.collateralAmountFee !== "") {
      writer.uint32(58).string(message.collateralAmountFee);
    }
    if (message.liquidationPrice !== "") {
      writer.uint32(66).string(message.liquidationPrice);
    }
    if (message.marketPrice !== "") {
      writer.uint32(74).string(message.marketPrice);
    }
    if (message.discount !== "") {
      writer.uint32(82).string(message.discount);
    }
    if (message.debtDenom !== "") {
      writer.uint32(90).string(message.debtDenom);
    }
    if (message.debtAmount !== "") {
      writer.uint32(98).string(message.debtAmount);
    }
    if (!message.blockHeight.isZero()) {
      writer.uint32(104).int64(message.blockHeight);
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(toTimestamp(message.blockTime), writer.uint32(114).fork()).ldelim();
    }
    if (message.transactionHash !== "") {
      writer.uint32(122).string(message.transactionHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDPLiquidations {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDPLiquidations();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.liquidator = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.debtor = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.collateralDenom = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.collateralAmountLiquidated = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.collateralAmountLiquidator = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.collateralAmountFee = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.liquidationPrice = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.marketPrice = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.discount = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.debtDenom = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.debtAmount = reader.string();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.blockHeight = reader.int64() as Long;
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.blockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.transactionHash = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CDPLiquidations {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      liquidator: isSet(object.liquidator) ? String(object.liquidator) : "",
      debtor: isSet(object.debtor) ? String(object.debtor) : "",
      collateralDenom: isSet(object.collateralDenom) ? String(object.collateralDenom) : "",
      collateralAmountLiquidated: isSet(object.collateralAmountLiquidated)
        ? String(object.collateralAmountLiquidated)
        : "",
      collateralAmountLiquidator: isSet(object.collateralAmountLiquidator)
        ? String(object.collateralAmountLiquidator)
        : "",
      collateralAmountFee: isSet(object.collateralAmountFee) ? String(object.collateralAmountFee) : "",
      liquidationPrice: isSet(object.liquidationPrice) ? String(object.liquidationPrice) : "",
      marketPrice: isSet(object.marketPrice) ? String(object.marketPrice) : "",
      discount: isSet(object.discount) ? String(object.discount) : "",
      debtDenom: isSet(object.debtDenom) ? String(object.debtDenom) : "",
      debtAmount: isSet(object.debtAmount) ? String(object.debtAmount) : "",
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.ZERO,
      blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined,
      transactionHash: isSet(object.transactionHash) ? String(object.transactionHash) : "",
    };
  },

  toJSON(message: CDPLiquidations): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.liquidator !== undefined && (obj.liquidator = message.liquidator);
    message.debtor !== undefined && (obj.debtor = message.debtor);
    message.collateralDenom !== undefined && (obj.collateralDenom = message.collateralDenom);
    message.collateralAmountLiquidated !== undefined &&
      (obj.collateralAmountLiquidated = message.collateralAmountLiquidated);
    message.collateralAmountLiquidator !== undefined &&
      (obj.collateralAmountLiquidator = message.collateralAmountLiquidator);
    message.collateralAmountFee !== undefined && (obj.collateralAmountFee = message.collateralAmountFee);
    message.liquidationPrice !== undefined && (obj.liquidationPrice = message.liquidationPrice);
    message.marketPrice !== undefined && (obj.marketPrice = message.marketPrice);
    message.discount !== undefined && (obj.discount = message.discount);
    message.debtDenom !== undefined && (obj.debtDenom = message.debtDenom);
    message.debtAmount !== undefined && (obj.debtAmount = message.debtAmount);
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    message.blockTime !== undefined && (obj.blockTime = message.blockTime.toISOString());
    message.transactionHash !== undefined && (obj.transactionHash = message.transactionHash);
    return obj;
  },

  create(base?: DeepPartial<CDPLiquidations>): CDPLiquidations {
    return CDPLiquidations.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CDPLiquidations>): CDPLiquidations {
    const message = createBaseCDPLiquidations();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.liquidator = object.liquidator ?? "";
    message.debtor = object.debtor ?? "";
    message.collateralDenom = object.collateralDenom ?? "";
    message.collateralAmountLiquidated = object.collateralAmountLiquidated ?? "";
    message.collateralAmountLiquidator = object.collateralAmountLiquidator ?? "";
    message.collateralAmountFee = object.collateralAmountFee ?? "";
    message.liquidationPrice = object.liquidationPrice ?? "";
    message.marketPrice = object.marketPrice ?? "";
    message.discount = object.discount ?? "";
    message.debtDenom = object.debtDenom ?? "";
    message.debtAmount = object.debtAmount ?? "";
    message.blockHeight = (object.blockHeight !== undefined && object.blockHeight !== null)
      ? Long.fromValue(object.blockHeight)
      : Long.ZERO;
    message.blockTime = object.blockTime ?? undefined;
    message.transactionHash = object.transactionHash ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds.toNumber() || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
