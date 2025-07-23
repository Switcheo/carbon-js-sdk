/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";

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

function createBaseRfq(): Rfq {
  return { id: "", requester: "", sellCoins: [], buyDenom: "", expiryTime: undefined };
}

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
      Timestamp.encode(toTimestamp(message.expiryTime), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Rfq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRfq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.requester = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sellCoins.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.buyDenom = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.expiryTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Rfq {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      requester: isSet(object.requester) ? String(object.requester) : "",
      sellCoins: Array.isArray(object?.sellCoins) ? object.sellCoins.map((e: any) => Coin.fromJSON(e)) : [],
      buyDenom: isSet(object.buyDenom) ? String(object.buyDenom) : "",
      expiryTime: isSet(object.expiryTime) ? fromJsonTimestamp(object.expiryTime) : undefined,
    };
  },

  toJSON(message: Rfq): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.requester !== undefined && (obj.requester = message.requester);
    if (message.sellCoins) {
      obj.sellCoins = message.sellCoins.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.sellCoins = [];
    }
    message.buyDenom !== undefined && (obj.buyDenom = message.buyDenom);
    message.expiryTime !== undefined && (obj.expiryTime = message.expiryTime.toISOString());
    return obj;
  },

  create(base?: DeepPartial<Rfq>): Rfq {
    return Rfq.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Rfq>): Rfq {
    const message = createBaseRfq();
    message.id = object.id ?? "";
    message.requester = object.requester ?? "";
    message.sellCoins = object.sellCoins?.map((e) => Coin.fromPartial(e)) || [];
    message.buyDenom = object.buyDenom ?? "";
    message.expiryTime = object.expiryTime ?? undefined;
    return message;
  },
};

function createBaseRfqWithStatus(): RfqWithStatus {
  return { rfq: undefined, status: "" };
}

export const RfqWithStatus = {
  encode(message: RfqWithStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rfq !== undefined) {
      Rfq.encode(message.rfq, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RfqWithStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRfqWithStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rfq = Rfq.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.status = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RfqWithStatus {
    return {
      rfq: isSet(object.rfq) ? Rfq.fromJSON(object.rfq) : undefined,
      status: isSet(object.status) ? String(object.status) : "",
    };
  },

  toJSON(message: RfqWithStatus): unknown {
    const obj: any = {};
    message.rfq !== undefined && (obj.rfq = message.rfq ? Rfq.toJSON(message.rfq) : undefined);
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  create(base?: DeepPartial<RfqWithStatus>): RfqWithStatus {
    return RfqWithStatus.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RfqWithStatus>): RfqWithStatus {
    const message = createBaseRfqWithStatus();
    message.rfq = (object.rfq !== undefined && object.rfq !== null) ? Rfq.fromPartial(object.rfq) : undefined;
    message.status = object.status ?? "";
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
