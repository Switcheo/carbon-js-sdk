/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.oracle";

export interface OracleVotesWindow {
  validator: string;
  oracleId: string;
  voteCount: Long;
}

export interface SlashCounter {
  validator: string;
  slashCount: Long;
  prevSlashCount: Long;
  newlyBondedWindowAllowance: Long;
}

const baseOracleVotesWindow: object = {
  validator: "",
  oracleId: "",
  voteCount: Long.UZERO,
};

export const OracleVotesWindow = {
  encode(
    message: OracleVotesWindow,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.oracleId !== "") {
      writer.uint32(18).string(message.oracleId);
    }
    if (!message.voteCount.isZero()) {
      writer.uint32(24).uint64(message.voteCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OracleVotesWindow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOracleVotesWindow } as OracleVotesWindow;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.oracleId = reader.string();
          break;
        case 3:
          message.voteCount = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OracleVotesWindow {
    const message = { ...baseOracleVotesWindow } as OracleVotesWindow;
    message.validator =
      object.validator !== undefined && object.validator !== null
        ? String(object.validator)
        : "";
    message.oracleId =
      object.oracleId !== undefined && object.oracleId !== null
        ? String(object.oracleId)
        : "";
    message.voteCount =
      object.voteCount !== undefined && object.voteCount !== null
        ? Long.fromString(object.voteCount)
        : Long.UZERO;
    return message;
  },

  toJSON(message: OracleVotesWindow): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.oracleId !== undefined && (obj.oracleId = message.oracleId);
    message.voteCount !== undefined &&
      (obj.voteCount = (message.voteCount || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<OracleVotesWindow>): OracleVotesWindow {
    const message = { ...baseOracleVotesWindow } as OracleVotesWindow;
    message.validator = object.validator ?? "";
    message.oracleId = object.oracleId ?? "";
    message.voteCount =
      object.voteCount !== undefined && object.voteCount !== null
        ? Long.fromValue(object.voteCount)
        : Long.UZERO;
    return message;
  },
};

const baseSlashCounter: object = {
  validator: "",
  slashCount: Long.UZERO,
  prevSlashCount: Long.UZERO,
  newlyBondedWindowAllowance: Long.UZERO,
};

export const SlashCounter = {
  encode(
    message: SlashCounter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (!message.slashCount.isZero()) {
      writer.uint32(16).uint64(message.slashCount);
    }
    if (!message.prevSlashCount.isZero()) {
      writer.uint32(24).uint64(message.prevSlashCount);
    }
    if (!message.newlyBondedWindowAllowance.isZero()) {
      writer.uint32(32).uint64(message.newlyBondedWindowAllowance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SlashCounter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSlashCounter } as SlashCounter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.slashCount = reader.uint64() as Long;
          break;
        case 3:
          message.prevSlashCount = reader.uint64() as Long;
          break;
        case 4:
          message.newlyBondedWindowAllowance = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SlashCounter {
    const message = { ...baseSlashCounter } as SlashCounter;
    message.validator =
      object.validator !== undefined && object.validator !== null
        ? String(object.validator)
        : "";
    message.slashCount =
      object.slashCount !== undefined && object.slashCount !== null
        ? Long.fromString(object.slashCount)
        : Long.UZERO;
    message.prevSlashCount =
      object.prevSlashCount !== undefined && object.prevSlashCount !== null
        ? Long.fromString(object.prevSlashCount)
        : Long.UZERO;
    message.newlyBondedWindowAllowance =
      object.newlyBondedWindowAllowance !== undefined &&
      object.newlyBondedWindowAllowance !== null
        ? Long.fromString(object.newlyBondedWindowAllowance)
        : Long.UZERO;
    return message;
  },

  toJSON(message: SlashCounter): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.slashCount !== undefined &&
      (obj.slashCount = (message.slashCount || Long.UZERO).toString());
    message.prevSlashCount !== undefined &&
      (obj.prevSlashCount = (message.prevSlashCount || Long.UZERO).toString());
    message.newlyBondedWindowAllowance !== undefined &&
      (obj.newlyBondedWindowAllowance = (
        message.newlyBondedWindowAllowance || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<SlashCounter>): SlashCounter {
    const message = { ...baseSlashCounter } as SlashCounter;
    message.validator = object.validator ?? "";
    message.slashCount =
      object.slashCount !== undefined && object.slashCount !== null
        ? Long.fromValue(object.slashCount)
        : Long.UZERO;
    message.prevSlashCount =
      object.prevSlashCount !== undefined && object.prevSlashCount !== null
        ? Long.fromValue(object.prevSlashCount)
        : Long.UZERO;
    message.newlyBondedWindowAllowance =
      object.newlyBondedWindowAllowance !== undefined &&
      object.newlyBondedWindowAllowance !== null
        ? Long.fromValue(object.newlyBondedWindowAllowance)
        : Long.UZERO;
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
