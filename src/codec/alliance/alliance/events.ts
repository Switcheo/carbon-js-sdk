/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../google/protobuf/timestamp";

export const protobufPackage = "alliance.alliance";

export interface DelegateAllianceEvent {
  allianceSender: string;
  validator: string;
  coin?: Coin;
  newShares: string;
}

export interface UndelegateAllianceEvent {
  allianceSender: string;
  validator: string;
  coin?: Coin;
  completionTime?: Date;
}

export interface RedelegateAllianceEvent {
  allianceSender: string;
  sourceValidator: string;
  destinationValidator: string;
  coin?: Coin;
  completionTime?: Date;
}

export interface ClaimAllianceRewardsEvent {
  allianceSender: string;
  validator: string;
  coins: Coin[];
}

export interface DeductAllianceAssetsEvent {
  coins: Coin[];
}

const baseDelegateAllianceEvent: object = {
  allianceSender: "",
  validator: "",
  newShares: "",
};

export const DelegateAllianceEvent = {
  encode(
    message: DelegateAllianceEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.allianceSender !== "") {
      writer.uint32(10).string(message.allianceSender);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    if (message.newShares !== "") {
      writer.uint32(34).string(message.newShares);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DelegateAllianceEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDelegateAllianceEvent } as DelegateAllianceEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allianceSender = reader.string();
          break;
        case 2:
          message.validator = reader.string();
          break;
        case 3:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.newShares = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegateAllianceEvent {
    const message = { ...baseDelegateAllianceEvent } as DelegateAllianceEvent;
    message.allianceSender =
      object.allianceSender !== undefined && object.allianceSender !== null
        ? String(object.allianceSender)
        : "";
    message.validator =
      object.validator !== undefined && object.validator !== null
        ? String(object.validator)
        : "";
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromJSON(object.coin)
        : undefined;
    message.newShares =
      object.newShares !== undefined && object.newShares !== null
        ? String(object.newShares)
        : "";
    return message;
  },

  toJSON(message: DelegateAllianceEvent): unknown {
    const obj: any = {};
    message.allianceSender !== undefined &&
      (obj.allianceSender = message.allianceSender);
    message.validator !== undefined && (obj.validator = message.validator);
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.newShares !== undefined && (obj.newShares = message.newShares);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DelegateAllianceEvent>
  ): DelegateAllianceEvent {
    const message = { ...baseDelegateAllianceEvent } as DelegateAllianceEvent;
    message.allianceSender = object.allianceSender ?? "";
    message.validator = object.validator ?? "";
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined;
    message.newShares = object.newShares ?? "";
    return message;
  },
};

const baseUndelegateAllianceEvent: object = {
  allianceSender: "",
  validator: "",
};

export const UndelegateAllianceEvent = {
  encode(
    message: UndelegateAllianceEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.allianceSender !== "") {
      writer.uint32(10).string(message.allianceSender);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.completionTime),
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UndelegateAllianceEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUndelegateAllianceEvent,
    } as UndelegateAllianceEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allianceSender = reader.string();
          break;
        case 2:
          message.validator = reader.string();
          break;
        case 3:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.completionTime = fromTimestamp(
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

  fromJSON(object: any): UndelegateAllianceEvent {
    const message = {
      ...baseUndelegateAllianceEvent,
    } as UndelegateAllianceEvent;
    message.allianceSender =
      object.allianceSender !== undefined && object.allianceSender !== null
        ? String(object.allianceSender)
        : "";
    message.validator =
      object.validator !== undefined && object.validator !== null
        ? String(object.validator)
        : "";
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromJSON(object.coin)
        : undefined;
    message.completionTime =
      object.completionTime !== undefined && object.completionTime !== null
        ? fromJsonTimestamp(object.completionTime)
        : undefined;
    return message;
  },

  toJSON(message: UndelegateAllianceEvent): unknown {
    const obj: any = {};
    message.allianceSender !== undefined &&
      (obj.allianceSender = message.allianceSender);
    message.validator !== undefined && (obj.validator = message.validator);
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.completionTime !== undefined &&
      (obj.completionTime = message.completionTime.toISOString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<UndelegateAllianceEvent>
  ): UndelegateAllianceEvent {
    const message = {
      ...baseUndelegateAllianceEvent,
    } as UndelegateAllianceEvent;
    message.allianceSender = object.allianceSender ?? "";
    message.validator = object.validator ?? "";
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined;
    message.completionTime = object.completionTime ?? undefined;
    return message;
  },
};

const baseRedelegateAllianceEvent: object = {
  allianceSender: "",
  sourceValidator: "",
  destinationValidator: "",
};

export const RedelegateAllianceEvent = {
  encode(
    message: RedelegateAllianceEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.allianceSender !== "") {
      writer.uint32(10).string(message.allianceSender);
    }
    if (message.sourceValidator !== "") {
      writer.uint32(18).string(message.sourceValidator);
    }
    if (message.destinationValidator !== "") {
      writer.uint32(26).string(message.destinationValidator);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(34).fork()).ldelim();
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.completionTime),
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RedelegateAllianceEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRedelegateAllianceEvent,
    } as RedelegateAllianceEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allianceSender = reader.string();
          break;
        case 2:
          message.sourceValidator = reader.string();
          break;
        case 3:
          message.destinationValidator = reader.string();
          break;
        case 4:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.completionTime = fromTimestamp(
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

  fromJSON(object: any): RedelegateAllianceEvent {
    const message = {
      ...baseRedelegateAllianceEvent,
    } as RedelegateAllianceEvent;
    message.allianceSender =
      object.allianceSender !== undefined && object.allianceSender !== null
        ? String(object.allianceSender)
        : "";
    message.sourceValidator =
      object.sourceValidator !== undefined && object.sourceValidator !== null
        ? String(object.sourceValidator)
        : "";
    message.destinationValidator =
      object.destinationValidator !== undefined &&
      object.destinationValidator !== null
        ? String(object.destinationValidator)
        : "";
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromJSON(object.coin)
        : undefined;
    message.completionTime =
      object.completionTime !== undefined && object.completionTime !== null
        ? fromJsonTimestamp(object.completionTime)
        : undefined;
    return message;
  },

  toJSON(message: RedelegateAllianceEvent): unknown {
    const obj: any = {};
    message.allianceSender !== undefined &&
      (obj.allianceSender = message.allianceSender);
    message.sourceValidator !== undefined &&
      (obj.sourceValidator = message.sourceValidator);
    message.destinationValidator !== undefined &&
      (obj.destinationValidator = message.destinationValidator);
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.completionTime !== undefined &&
      (obj.completionTime = message.completionTime.toISOString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<RedelegateAllianceEvent>
  ): RedelegateAllianceEvent {
    const message = {
      ...baseRedelegateAllianceEvent,
    } as RedelegateAllianceEvent;
    message.allianceSender = object.allianceSender ?? "";
    message.sourceValidator = object.sourceValidator ?? "";
    message.destinationValidator = object.destinationValidator ?? "";
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined;
    message.completionTime = object.completionTime ?? undefined;
    return message;
  },
};

const baseClaimAllianceRewardsEvent: object = {
  allianceSender: "",
  validator: "",
};

export const ClaimAllianceRewardsEvent = {
  encode(
    message: ClaimAllianceRewardsEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.allianceSender !== "") {
      writer.uint32(10).string(message.allianceSender);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ClaimAllianceRewardsEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseClaimAllianceRewardsEvent,
    } as ClaimAllianceRewardsEvent;
    message.coins = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allianceSender = reader.string();
          break;
        case 2:
          message.validator = reader.string();
          break;
        case 3:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClaimAllianceRewardsEvent {
    const message = {
      ...baseClaimAllianceRewardsEvent,
    } as ClaimAllianceRewardsEvent;
    message.allianceSender =
      object.allianceSender !== undefined && object.allianceSender !== null
        ? String(object.allianceSender)
        : "";
    message.validator =
      object.validator !== undefined && object.validator !== null
        ? String(object.validator)
        : "";
    message.coins = (object.coins ?? []).map((e: any) => Coin.fromJSON(e));
    return message;
  },

  toJSON(message: ClaimAllianceRewardsEvent): unknown {
    const obj: any = {};
    message.allianceSender !== undefined &&
      (obj.allianceSender = message.allianceSender);
    message.validator !== undefined && (obj.validator = message.validator);
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ClaimAllianceRewardsEvent>
  ): ClaimAllianceRewardsEvent {
    const message = {
      ...baseClaimAllianceRewardsEvent,
    } as ClaimAllianceRewardsEvent;
    message.allianceSender = object.allianceSender ?? "";
    message.validator = object.validator ?? "";
    message.coins = (object.coins ?? []).map((e) => Coin.fromPartial(e));
    return message;
  },
};

const baseDeductAllianceAssetsEvent: object = {};

export const DeductAllianceAssetsEvent = {
  encode(
    message: DeductAllianceAssetsEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeductAllianceAssetsEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeductAllianceAssetsEvent,
    } as DeductAllianceAssetsEvent;
    message.coins = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeductAllianceAssetsEvent {
    const message = {
      ...baseDeductAllianceAssetsEvent,
    } as DeductAllianceAssetsEvent;
    message.coins = (object.coins ?? []).map((e: any) => Coin.fromJSON(e));
    return message;
  },

  toJSON(message: DeductAllianceAssetsEvent): unknown {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeductAllianceAssetsEvent>
  ): DeductAllianceAssetsEvent {
    const message = {
      ...baseDeductAllianceAssetsEvent,
    } as DeductAllianceAssetsEvent;
    message.coins = (object.coins ?? []).map((e) => Coin.fromPartial(e));
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
