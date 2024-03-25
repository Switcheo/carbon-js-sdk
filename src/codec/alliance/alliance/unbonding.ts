/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../google/protobuf/timestamp";

export const protobufPackage = "alliance.alliance";

/** UnbondingDelegation defines an unbonding object with relevant metadata. */
export interface UnbondingDelegation {
  /** completion_time is the unix time for unbonding completion. */
  completionTime?: Date;
  /** validator_address is the bech32-encoded address of the validator. */
  validatorAddress: string;
  /** amount defines the tokens to receive at completion. */
  amount: string;
  /** alliance denom of the unbonding delegation */
  denom: string;
}

const baseUnbondingDelegation: object = {
  validatorAddress: "",
  amount: "",
  denom: "",
};

export const UnbondingDelegation = {
  encode(
    message: UnbondingDelegation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.completionTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.completionTime),
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnbondingDelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUnbondingDelegation } as UnbondingDelegation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completionTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnbondingDelegation {
    const message = { ...baseUnbondingDelegation } as UnbondingDelegation;
    message.completionTime =
      object.completionTime !== undefined && object.completionTime !== null
        ? fromJsonTimestamp(object.completionTime)
        : undefined;
    message.validatorAddress =
      object.validatorAddress !== undefined && object.validatorAddress !== null
        ? String(object.validatorAddress)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: UnbondingDelegation): unknown {
    const obj: any = {};
    message.completionTime !== undefined &&
      (obj.completionTime = message.completionTime.toISOString());
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined && (obj.amount = message.amount);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<UnbondingDelegation>): UnbondingDelegation {
    const message = { ...baseUnbondingDelegation } as UnbondingDelegation;
    message.completionTime = object.completionTime ?? undefined;
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
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
