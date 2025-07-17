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

function createBaseDelegateAllianceEvent(): DelegateAllianceEvent {
  return { allianceSender: "", validator: "", coin: undefined, newShares: "" };
}

export const DelegateAllianceEvent = {
  encode(message: DelegateAllianceEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegateAllianceEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegateAllianceEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.allianceSender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.validator = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.coin = Coin.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.newShares = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DelegateAllianceEvent {
    return {
      allianceSender: isSet(object.allianceSender) ? String(object.allianceSender) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
      newShares: isSet(object.newShares) ? String(object.newShares) : "",
    };
  },

  toJSON(message: DelegateAllianceEvent): unknown {
    const obj: any = {};
    message.allianceSender !== undefined && (obj.allianceSender = message.allianceSender);
    message.validator !== undefined && (obj.validator = message.validator);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.newShares !== undefined && (obj.newShares = message.newShares);
    return obj;
  },

  create(base?: DeepPartial<DelegateAllianceEvent>): DelegateAllianceEvent {
    return DelegateAllianceEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DelegateAllianceEvent>): DelegateAllianceEvent {
    const message = createBaseDelegateAllianceEvent();
    message.allianceSender = object.allianceSender ?? "";
    message.validator = object.validator ?? "";
    message.coin = (object.coin !== undefined && object.coin !== null) ? Coin.fromPartial(object.coin) : undefined;
    message.newShares = object.newShares ?? "";
    return message;
  },
};

function createBaseUndelegateAllianceEvent(): UndelegateAllianceEvent {
  return { allianceSender: "", validator: "", coin: undefined, completionTime: undefined };
}

export const UndelegateAllianceEvent = {
  encode(message: UndelegateAllianceEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UndelegateAllianceEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndelegateAllianceEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.allianceSender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.validator = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.coin = Coin.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UndelegateAllianceEvent {
    return {
      allianceSender: isSet(object.allianceSender) ? String(object.allianceSender) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined,
    };
  },

  toJSON(message: UndelegateAllianceEvent): unknown {
    const obj: any = {};
    message.allianceSender !== undefined && (obj.allianceSender = message.allianceSender);
    message.validator !== undefined && (obj.validator = message.validator);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.completionTime !== undefined && (obj.completionTime = message.completionTime.toISOString());
    return obj;
  },

  create(base?: DeepPartial<UndelegateAllianceEvent>): UndelegateAllianceEvent {
    return UndelegateAllianceEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UndelegateAllianceEvent>): UndelegateAllianceEvent {
    const message = createBaseUndelegateAllianceEvent();
    message.allianceSender = object.allianceSender ?? "";
    message.validator = object.validator ?? "";
    message.coin = (object.coin !== undefined && object.coin !== null) ? Coin.fromPartial(object.coin) : undefined;
    message.completionTime = object.completionTime ?? undefined;
    return message;
  },
};

function createBaseRedelegateAllianceEvent(): RedelegateAllianceEvent {
  return {
    allianceSender: "",
    sourceValidator: "",
    destinationValidator: "",
    coin: undefined,
    completionTime: undefined,
  };
}

export const RedelegateAllianceEvent = {
  encode(message: RedelegateAllianceEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RedelegateAllianceEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegateAllianceEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.allianceSender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sourceValidator = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.destinationValidator = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.coin = Coin.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RedelegateAllianceEvent {
    return {
      allianceSender: isSet(object.allianceSender) ? String(object.allianceSender) : "",
      sourceValidator: isSet(object.sourceValidator) ? String(object.sourceValidator) : "",
      destinationValidator: isSet(object.destinationValidator) ? String(object.destinationValidator) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined,
    };
  },

  toJSON(message: RedelegateAllianceEvent): unknown {
    const obj: any = {};
    message.allianceSender !== undefined && (obj.allianceSender = message.allianceSender);
    message.sourceValidator !== undefined && (obj.sourceValidator = message.sourceValidator);
    message.destinationValidator !== undefined && (obj.destinationValidator = message.destinationValidator);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.completionTime !== undefined && (obj.completionTime = message.completionTime.toISOString());
    return obj;
  },

  create(base?: DeepPartial<RedelegateAllianceEvent>): RedelegateAllianceEvent {
    return RedelegateAllianceEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RedelegateAllianceEvent>): RedelegateAllianceEvent {
    const message = createBaseRedelegateAllianceEvent();
    message.allianceSender = object.allianceSender ?? "";
    message.sourceValidator = object.sourceValidator ?? "";
    message.destinationValidator = object.destinationValidator ?? "";
    message.coin = (object.coin !== undefined && object.coin !== null) ? Coin.fromPartial(object.coin) : undefined;
    message.completionTime = object.completionTime ?? undefined;
    return message;
  },
};

function createBaseClaimAllianceRewardsEvent(): ClaimAllianceRewardsEvent {
  return { allianceSender: "", validator: "", coins: [] };
}

export const ClaimAllianceRewardsEvent = {
  encode(message: ClaimAllianceRewardsEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ClaimAllianceRewardsEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimAllianceRewardsEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.allianceSender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.validator = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.coins.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClaimAllianceRewardsEvent {
    return {
      allianceSender: isSet(object.allianceSender) ? String(object.allianceSender) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: ClaimAllianceRewardsEvent): unknown {
    const obj: any = {};
    message.allianceSender !== undefined && (obj.allianceSender = message.allianceSender);
    message.validator !== undefined && (obj.validator = message.validator);
    if (message.coins) {
      obj.coins = message.coins.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },

  create(base?: DeepPartial<ClaimAllianceRewardsEvent>): ClaimAllianceRewardsEvent {
    return ClaimAllianceRewardsEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ClaimAllianceRewardsEvent>): ClaimAllianceRewardsEvent {
    const message = createBaseClaimAllianceRewardsEvent();
    message.allianceSender = object.allianceSender ?? "";
    message.validator = object.validator ?? "";
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDeductAllianceAssetsEvent(): DeductAllianceAssetsEvent {
  return { coins: [] };
}

export const DeductAllianceAssetsEvent = {
  encode(message: DeductAllianceAssetsEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeductAllianceAssetsEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeductAllianceAssetsEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.coins.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeductAllianceAssetsEvent {
    return { coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : [] };
  },

  toJSON(message: DeductAllianceAssetsEvent): unknown {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },

  create(base?: DeepPartial<DeductAllianceAssetsEvent>): DeductAllianceAssetsEvent {
    return DeductAllianceAssetsEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DeductAllianceAssetsEvent>): DeductAllianceAssetsEvent {
    const message = createBaseDeductAllianceAssetsEvent();
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
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
