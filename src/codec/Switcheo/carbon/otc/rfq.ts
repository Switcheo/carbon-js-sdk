/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "Switcheo.carbon.otc";

export interface Rfq {
  id: string;
  requester: string;
  sellCoins: Coin[];
  buyDenom: string;
  expiryTime?: Date;
}

export interface RfqWithStatus {
  rfq?: Rfq;
  status: string;
}

const baseRfq: object = { id: "", requester: "", buyDenom: "" };

export const Rfq = {
  encode(message: Rfq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.requester !== "") {
      writer.uint32(18).string(message.requester);
    }
    for (const v of message.sellCoins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.buyDenom !== "") {
      writer.uint32(34).string(message.buyDenom);
    }
    if (message.expiryTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expiryTime),
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Rfq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRfq } as Rfq;
    message.sellCoins = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.requester = reader.string();
          break;
        case 3:
          message.sellCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.buyDenom = reader.string();
          break;
        case 5:
          message.expiryTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Rfq {
    const message = { ...baseRfq } as Rfq;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.requester =
      object.requester !== undefined && object.requester !== null
        ? String(object.requester)
        : "";
    message.sellCoins = (object.sellCoins ?? []).map((e: any) =>
      Coin.fromJSON(e)
    );
    message.buyDenom =
      object.buyDenom !== undefined && object.buyDenom !== null
        ? String(object.buyDenom)
        : "";
    message.expiryTime =
      object.expiryTime !== undefined && object.expiryTime !== null
        ? fromJsonTimestamp(object.expiryTime)
        : undefined;
    return message;
  },

  toJSON(message: Rfq): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.requester !== undefined && (obj.requester = message.requester);
    if (message.sellCoins) {
      obj.sellCoins = message.sellCoins.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.sellCoins = [];
    }
    message.buyDenom !== undefined && (obj.buyDenom = message.buyDenom);
    message.expiryTime !== undefined &&
      (obj.expiryTime = message.expiryTime.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<Rfq>): Rfq {
    const message = { ...baseRfq } as Rfq;
    message.id = object.id ?? "";
    message.requester = object.requester ?? "";
    message.sellCoins = (object.sellCoins ?? []).map((e) =>
      Coin.fromPartial(e)
    );
    message.buyDenom = object.buyDenom ?? "";
    message.expiryTime = object.expiryTime ?? undefined;
    return message;
  },
};

const baseRfqWithStatus: object = { status: "" };

export const RfqWithStatus = {
  encode(
    message: RfqWithStatus,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rfq !== undefined) {
      Rfq.encode(message.rfq, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RfqWithStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRfqWithStatus } as RfqWithStatus;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rfq = Rfq.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RfqWithStatus {
    const message = { ...baseRfqWithStatus } as RfqWithStatus;
    message.rfq =
      object.rfq !== undefined && object.rfq !== null
        ? Rfq.fromJSON(object.rfq)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? String(object.status)
        : "";
    return message;
  },

  toJSON(message: RfqWithStatus): unknown {
    const obj: any = {};
    message.rfq !== undefined &&
      (obj.rfq = message.rfq ? Rfq.toJSON(message.rfq) : undefined);
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(object: DeepPartial<RfqWithStatus>): RfqWithStatus {
    const message = { ...baseRfqWithStatus } as RfqWithStatus;
    message.rfq =
      object.rfq !== undefined && object.rfq !== null
        ? Rfq.fromPartial(object.rfq)
        : undefined;
    message.status = object.status ?? "";
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
