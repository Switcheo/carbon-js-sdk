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

function createBaseUnbondingDelegation(): UnbondingDelegation {
  return { completionTime: undefined, validatorAddress: "", amount: "", denom: "" };
}

export const UnbondingDelegation = {
  encode(message: UnbondingDelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(10).fork()).ldelim();
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.validatorAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.denom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UnbondingDelegation {
    return {
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined,
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: UnbondingDelegation): unknown {
    const obj: any = {};
    message.completionTime !== undefined && (obj.completionTime = message.completionTime.toISOString());
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined && (obj.amount = message.amount);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<UnbondingDelegation>): UnbondingDelegation {
    return UnbondingDelegation.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UnbondingDelegation>): UnbondingDelegation {
    const message = createBaseUnbondingDelegation();
    message.completionTime = object.completionTime ?? undefined;
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
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
