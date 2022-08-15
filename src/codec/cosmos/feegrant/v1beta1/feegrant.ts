/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "cosmos.feegrant.v1beta1";

/** Since: cosmos-sdk 0.43 */

/**
 * BasicAllowance implements Allowance with a one-time grant of tokens
 * that optionally expires. The grantee can use up to SpendLimit to cover fees.
 */
export interface BasicAllowance {
  /**
   * spend_limit specifies the maximum amount of tokens that can be spent
   * by this allowance and will be updated as tokens are spent. If it is
   * empty, there is no spend limit and any amount of coins can be spent.
   */
  spendLimit: Coin[];
  /** expiration specifies an optional time when this allowance expires */
  expiration?: Date;
}

/**
 * PeriodicAllowance extends Allowance to allow for both a maximum cap,
 * as well as a limit per time period.
 */
export interface PeriodicAllowance {
  /** basic specifies a struct of `BasicAllowance` */
  basic?: BasicAllowance;
  /**
   * period specifies the time duration in which period_spend_limit coins can
   * be spent before that allowance is reset
   */
  period?: Duration;
  /**
   * period_spend_limit specifies the maximum number of coins that can be spent
   * in the period
   */
  periodSpendLimit: Coin[];
  /** period_can_spend is the number of coins left to be spent before the period_reset time */
  periodCanSpend: Coin[];
  /**
   * period_reset is the time at which this period resets and a new one begins,
   * it is calculated from the start time of the first transaction after the
   * last period ended
   */
  periodReset?: Date;
}

/** AllowedMsgAllowance creates allowance only for specified message types. */
export interface AllowedMsgAllowance {
  /** allowance can be any of basic and filtered fee allowance. */
  allowance?: Any;
  /** allowed_messages are the messages for which the grantee has the access. */
  allowedMessages: string[];
}

/** Grant is stored in the KVStore to record a grant with full context */
export interface Grant {
  /** granter is the address of the user granting an allowance of their funds. */
  granter: string;
  /** grantee is the address of the user being granted an allowance of another user's funds. */
  grantee: string;
  /** allowance can be any of basic and filtered fee allowance. */
  allowance?: Any;
}

const baseBasicAllowance: object = {};

export const BasicAllowance = {
  encode(
    message: BasicAllowance,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.spendLimit) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expiration),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BasicAllowance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBasicAllowance } as BasicAllowance;
    message.spendLimit = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spendLimit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.expiration = fromTimestamp(
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

  fromJSON(object: any): BasicAllowance {
    const message = { ...baseBasicAllowance } as BasicAllowance;
    message.spendLimit = (object.spendLimit ?? []).map((e: any) =>
      Coin.fromJSON(e)
    );
    message.expiration =
      object.expiration !== undefined && object.expiration !== null
        ? fromJsonTimestamp(object.expiration)
        : undefined;
    return message;
  },

  toJSON(message: BasicAllowance): unknown {
    const obj: any = {};
    if (message.spendLimit) {
      obj.spendLimit = message.spendLimit.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.spendLimit = [];
    }
    message.expiration !== undefined &&
      (obj.expiration = message.expiration.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<BasicAllowance>): BasicAllowance {
    const message = { ...baseBasicAllowance } as BasicAllowance;
    message.spendLimit = (object.spendLimit ?? []).map((e) =>
      Coin.fromPartial(e)
    );
    message.expiration = object.expiration ?? undefined;
    return message;
  },
};

const basePeriodicAllowance: object = {};

export const PeriodicAllowance = {
  encode(
    message: PeriodicAllowance,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.basic !== undefined) {
      BasicAllowance.encode(message.basic, writer.uint32(10).fork()).ldelim();
    }
    if (message.period !== undefined) {
      Duration.encode(message.period, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.periodSpendLimit) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.periodCanSpend) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.periodReset !== undefined) {
      Timestamp.encode(
        toTimestamp(message.periodReset),
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PeriodicAllowance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePeriodicAllowance } as PeriodicAllowance;
    message.periodSpendLimit = [];
    message.periodCanSpend = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.basic = BasicAllowance.decode(reader, reader.uint32());
          break;
        case 2:
          message.period = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.periodSpendLimit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.periodCanSpend.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.periodReset = fromTimestamp(
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

  fromJSON(object: any): PeriodicAllowance {
    const message = { ...basePeriodicAllowance } as PeriodicAllowance;
    message.basic =
      object.basic !== undefined && object.basic !== null
        ? BasicAllowance.fromJSON(object.basic)
        : undefined;
    message.period =
      object.period !== undefined && object.period !== null
        ? Duration.fromJSON(object.period)
        : undefined;
    message.periodSpendLimit = (object.periodSpendLimit ?? []).map((e: any) =>
      Coin.fromJSON(e)
    );
    message.periodCanSpend = (object.periodCanSpend ?? []).map((e: any) =>
      Coin.fromJSON(e)
    );
    message.periodReset =
      object.periodReset !== undefined && object.periodReset !== null
        ? fromJsonTimestamp(object.periodReset)
        : undefined;
    return message;
  },

  toJSON(message: PeriodicAllowance): unknown {
    const obj: any = {};
    message.basic !== undefined &&
      (obj.basic = message.basic
        ? BasicAllowance.toJSON(message.basic)
        : undefined);
    message.period !== undefined &&
      (obj.period = message.period
        ? Duration.toJSON(message.period)
        : undefined);
    if (message.periodSpendLimit) {
      obj.periodSpendLimit = message.periodSpendLimit.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.periodSpendLimit = [];
    }
    if (message.periodCanSpend) {
      obj.periodCanSpend = message.periodCanSpend.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.periodCanSpend = [];
    }
    message.periodReset !== undefined &&
      (obj.periodReset = message.periodReset.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<PeriodicAllowance>): PeriodicAllowance {
    const message = { ...basePeriodicAllowance } as PeriodicAllowance;
    message.basic =
      object.basic !== undefined && object.basic !== null
        ? BasicAllowance.fromPartial(object.basic)
        : undefined;
    message.period =
      object.period !== undefined && object.period !== null
        ? Duration.fromPartial(object.period)
        : undefined;
    message.periodSpendLimit = (object.periodSpendLimit ?? []).map((e) =>
      Coin.fromPartial(e)
    );
    message.periodCanSpend = (object.periodCanSpend ?? []).map((e) =>
      Coin.fromPartial(e)
    );
    message.periodReset = object.periodReset ?? undefined;
    return message;
  },
};

const baseAllowedMsgAllowance: object = { allowedMessages: "" };

export const AllowedMsgAllowance = {
  encode(
    message: AllowedMsgAllowance,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.allowance !== undefined) {
      Any.encode(message.allowance, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.allowedMessages) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllowedMsgAllowance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAllowedMsgAllowance } as AllowedMsgAllowance;
    message.allowedMessages = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowance = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.allowedMessages.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AllowedMsgAllowance {
    const message = { ...baseAllowedMsgAllowance } as AllowedMsgAllowance;
    message.allowance =
      object.allowance !== undefined && object.allowance !== null
        ? Any.fromJSON(object.allowance)
        : undefined;
    message.allowedMessages = (object.allowedMessages ?? []).map((e: any) =>
      String(e)
    );
    return message;
  },

  toJSON(message: AllowedMsgAllowance): unknown {
    const obj: any = {};
    message.allowance !== undefined &&
      (obj.allowance = message.allowance
        ? Any.toJSON(message.allowance)
        : undefined);
    if (message.allowedMessages) {
      obj.allowedMessages = message.allowedMessages.map((e) => e);
    } else {
      obj.allowedMessages = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<AllowedMsgAllowance>): AllowedMsgAllowance {
    const message = { ...baseAllowedMsgAllowance } as AllowedMsgAllowance;
    message.allowance =
      object.allowance !== undefined && object.allowance !== null
        ? Any.fromPartial(object.allowance)
        : undefined;
    message.allowedMessages = (object.allowedMessages ?? []).map((e) => e);
    return message;
  },
};

const baseGrant: object = { granter: "", grantee: "" };

export const Grant = {
  encode(message: Grant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.allowance !== undefined) {
      Any.encode(message.allowance, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Grant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGrant } as Grant;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.allowance = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Grant {
    const message = { ...baseGrant } as Grant;
    message.granter =
      object.granter !== undefined && object.granter !== null
        ? String(object.granter)
        : "";
    message.grantee =
      object.grantee !== undefined && object.grantee !== null
        ? String(object.grantee)
        : "";
    message.allowance =
      object.allowance !== undefined && object.allowance !== null
        ? Any.fromJSON(object.allowance)
        : undefined;
    return message;
  },

  toJSON(message: Grant): unknown {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.allowance !== undefined &&
      (obj.allowance = message.allowance
        ? Any.toJSON(message.allowance)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Grant>): Grant {
    const message = { ...baseGrant } as Grant;
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.allowance =
      object.allowance !== undefined && object.allowance !== null
        ? Any.fromPartial(object.allowance)
        : undefined;
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
