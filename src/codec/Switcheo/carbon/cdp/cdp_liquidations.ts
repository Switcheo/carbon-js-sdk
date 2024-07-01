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

const baseCDPLiquidations: object = {
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
  transactionHash: "",
};

export const CDPLiquidations = {
  encode(
    message: CDPLiquidations,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      Timestamp.encode(
        toTimestamp(message.blockTime),
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.transactionHash !== "") {
      writer.uint32(122).string(message.transactionHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDPLiquidations {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCDPLiquidations } as CDPLiquidations;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.liquidator = reader.string();
          break;
        case 3:
          message.debtor = reader.string();
          break;
        case 4:
          message.collateralDenom = reader.string();
          break;
        case 5:
          message.collateralAmountLiquidated = reader.string();
          break;
        case 6:
          message.collateralAmountLiquidator = reader.string();
          break;
        case 7:
          message.collateralAmountFee = reader.string();
          break;
        case 8:
          message.liquidationPrice = reader.string();
          break;
        case 9:
          message.marketPrice = reader.string();
          break;
        case 10:
          message.discount = reader.string();
          break;
        case 11:
          message.debtDenom = reader.string();
          break;
        case 12:
          message.debtAmount = reader.string();
          break;
        case 13:
          message.blockHeight = reader.int64() as Long;
          break;
        case 14:
          message.blockTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 15:
          message.transactionHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CDPLiquidations {
    const message = { ...baseCDPLiquidations } as CDPLiquidations;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromString(object.id)
        : Long.UZERO;
    message.liquidator =
      object.liquidator !== undefined && object.liquidator !== null
        ? String(object.liquidator)
        : "";
    message.debtor =
      object.debtor !== undefined && object.debtor !== null
        ? String(object.debtor)
        : "";
    message.collateralDenom =
      object.collateralDenom !== undefined && object.collateralDenom !== null
        ? String(object.collateralDenom)
        : "";
    message.collateralAmountLiquidated =
      object.collateralAmountLiquidated !== undefined &&
      object.collateralAmountLiquidated !== null
        ? String(object.collateralAmountLiquidated)
        : "";
    message.collateralAmountLiquidator =
      object.collateralAmountLiquidator !== undefined &&
      object.collateralAmountLiquidator !== null
        ? String(object.collateralAmountLiquidator)
        : "";
    message.collateralAmountFee =
      object.collateralAmountFee !== undefined &&
      object.collateralAmountFee !== null
        ? String(object.collateralAmountFee)
        : "";
    message.liquidationPrice =
      object.liquidationPrice !== undefined && object.liquidationPrice !== null
        ? String(object.liquidationPrice)
        : "";
    message.marketPrice =
      object.marketPrice !== undefined && object.marketPrice !== null
        ? String(object.marketPrice)
        : "";
    message.discount =
      object.discount !== undefined && object.discount !== null
        ? String(object.discount)
        : "";
    message.debtDenom =
      object.debtDenom !== undefined && object.debtDenom !== null
        ? String(object.debtDenom)
        : "";
    message.debtAmount =
      object.debtAmount !== undefined && object.debtAmount !== null
        ? String(object.debtAmount)
        : "";
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
        ? Long.fromString(object.blockHeight)
        : Long.ZERO;
    message.blockTime =
      object.blockTime !== undefined && object.blockTime !== null
        ? fromJsonTimestamp(object.blockTime)
        : undefined;
    message.transactionHash =
      object.transactionHash !== undefined && object.transactionHash !== null
        ? String(object.transactionHash)
        : "";
    return message;
  },

  toJSON(message: CDPLiquidations): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.liquidator !== undefined && (obj.liquidator = message.liquidator);
    message.debtor !== undefined && (obj.debtor = message.debtor);
    message.collateralDenom !== undefined &&
      (obj.collateralDenom = message.collateralDenom);
    message.collateralAmountLiquidated !== undefined &&
      (obj.collateralAmountLiquidated = message.collateralAmountLiquidated);
    message.collateralAmountLiquidator !== undefined &&
      (obj.collateralAmountLiquidator = message.collateralAmountLiquidator);
    message.collateralAmountFee !== undefined &&
      (obj.collateralAmountFee = message.collateralAmountFee);
    message.liquidationPrice !== undefined &&
      (obj.liquidationPrice = message.liquidationPrice);
    message.marketPrice !== undefined &&
      (obj.marketPrice = message.marketPrice);
    message.discount !== undefined && (obj.discount = message.discount);
    message.debtDenom !== undefined && (obj.debtDenom = message.debtDenom);
    message.debtAmount !== undefined && (obj.debtAmount = message.debtAmount);
    message.blockHeight !== undefined &&
      (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    message.blockTime !== undefined &&
      (obj.blockTime = message.blockTime.toISOString());
    message.transactionHash !== undefined &&
      (obj.transactionHash = message.transactionHash);
    return obj;
  },

  fromPartial(object: DeepPartial<CDPLiquidations>): CDPLiquidations {
    const message = { ...baseCDPLiquidations } as CDPLiquidations;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.liquidator = object.liquidator ?? "";
    message.debtor = object.debtor ?? "";
    message.collateralDenom = object.collateralDenom ?? "";
    message.collateralAmountLiquidated =
      object.collateralAmountLiquidated ?? "";
    message.collateralAmountLiquidator =
      object.collateralAmountLiquidator ?? "";
    message.collateralAmountFee = object.collateralAmountFee ?? "";
    message.liquidationPrice = object.liquidationPrice ?? "";
    message.marketPrice = object.marketPrice ?? "";
    message.discount = object.discount ?? "";
    message.debtDenom = object.debtDenom ?? "";
    message.debtAmount = object.debtAmount ?? "";
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
        ? Long.fromValue(object.blockHeight)
        : Long.ZERO;
    message.blockTime = object.blockTime ?? undefined;
    message.transactionHash = object.transactionHash ?? "";
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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
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
