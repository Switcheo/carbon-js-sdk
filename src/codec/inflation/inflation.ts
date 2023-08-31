/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../google/protobuf/timestamp";

export const protobufPackage = "Switcheo.carbon.inflation";

/** MintData represents the parameters by the inflation module. */
export interface MintData {
  firstBlockTime?: Date;
  prevBlockTime?: Date;
  currentSupply: string;
  inflationRate: string;
}

const baseMintData: object = {
  currentSupply: "",
  inflationRate: "",
};

export const MintData = {
  encode(
    message: MintData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.firstBlockTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.firstBlockTime),
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.prevBlockTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.prevBlockTime),
        writer.uint32(20).fork()
      ).ldelim();
    }
    if (message.currentSupply !== "") {
      writer.uint32(28).string(message.currentSupply);
    }
    if (message.inflationRate !== "") {
      writer.uint32(36).string(message.inflationRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MintData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMintData } as MintData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        // case 1 and 2 contains legacy_first_block_time and legacy_prev_block_time
        case 3:
          message.currentSupply = reader.string();
          break;
        case 4:
          message.inflationRate = reader.string();
          break;
        case 5:
          message.firstBlockTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          console.log(message.firstBlockTime)
          break;
        case 6:
          message.prevBlockTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    console.log("i returned")
    return message;
  },

  fromJSON(object: any): MintData {
    const message = { ...baseMintData } as MintData;
    message.firstBlockTime =
      object.firstBlockTime !== undefined && object.firstBlockTime !== null
        ? fromJsonTimestamp(object.firstBlockTime)
        : undefined;
    message.prevBlockTime =
      object.prevBlockTime !== undefined && object.prevBlockTime !== null
        ? fromJsonTimestamp(object.prevBlockTime)
        : undefined;
    message.currentSupply =
      object.currentSupply !== undefined && object.currentSupply !== null
        ? String(object.currentSupply)
        : "";
    message.inflationRate =
      object.inflationRate !== undefined && object.inflationRate !== null
        ? String(object.inflationRate)
        : "";
    return message;
  },

  toJSON(message: MintData): unknown {
    const obj: any = {};
    message.firstBlockTime !== undefined &&
      (obj.firstBlockTime = message.firstBlockTime.toISOString());
    message.prevBlockTime !== undefined &&
      (obj.prevBlockTime = message.prevBlockTime.toISOString());
    message.currentSupply !== undefined &&
      (obj.currentSupply = message.currentSupply);
    message.inflationRate !== undefined &&
      (obj.inflationRate = message.inflationRate);
    return obj;
  },

  fromPartial(object: DeepPartial<MintData>): MintData {
    const message = { ...baseMintData } as MintData;
    message.firstBlockTime = object.firstBlockTime ?? undefined;
    message.prevBlockTime = object.prevBlockTime ?? undefined;
    message.currentSupply = object.currentSupply ?? "";
    message.inflationRate = object.inflationRate ?? "";
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
