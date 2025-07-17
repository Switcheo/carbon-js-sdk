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

function createBaseOracleVotesWindow(): OracleVotesWindow {
  return { validator: "", oracleId: "", voteCount: Long.UZERO };
}

export const OracleVotesWindow = {
  encode(message: OracleVotesWindow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleVotesWindow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.oracleId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.voteCount = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OracleVotesWindow {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      oracleId: isSet(object.oracleId) ? String(object.oracleId) : "",
      voteCount: isSet(object.voteCount) ? Long.fromValue(object.voteCount) : Long.UZERO,
    };
  },

  toJSON(message: OracleVotesWindow): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.oracleId !== undefined && (obj.oracleId = message.oracleId);
    message.voteCount !== undefined && (obj.voteCount = (message.voteCount || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<OracleVotesWindow>): OracleVotesWindow {
    return OracleVotesWindow.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<OracleVotesWindow>): OracleVotesWindow {
    const message = createBaseOracleVotesWindow();
    message.validator = object.validator ?? "";
    message.oracleId = object.oracleId ?? "";
    message.voteCount = (object.voteCount !== undefined && object.voteCount !== null)
      ? Long.fromValue(object.voteCount)
      : Long.UZERO;
    return message;
  },
};

function createBaseSlashCounter(): SlashCounter {
  return { validator: "", slashCount: Long.UZERO, prevSlashCount: Long.UZERO, newlyBondedWindowAllowance: Long.UZERO };
}

export const SlashCounter = {
  encode(message: SlashCounter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlashCounter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.slashCount = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.prevSlashCount = reader.uint64() as Long;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.newlyBondedWindowAllowance = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SlashCounter {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      slashCount: isSet(object.slashCount) ? Long.fromValue(object.slashCount) : Long.UZERO,
      prevSlashCount: isSet(object.prevSlashCount) ? Long.fromValue(object.prevSlashCount) : Long.UZERO,
      newlyBondedWindowAllowance: isSet(object.newlyBondedWindowAllowance)
        ? Long.fromValue(object.newlyBondedWindowAllowance)
        : Long.UZERO,
    };
  },

  toJSON(message: SlashCounter): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.slashCount !== undefined && (obj.slashCount = (message.slashCount || Long.UZERO).toString());
    message.prevSlashCount !== undefined && (obj.prevSlashCount = (message.prevSlashCount || Long.UZERO).toString());
    message.newlyBondedWindowAllowance !== undefined &&
      (obj.newlyBondedWindowAllowance = (message.newlyBondedWindowAllowance || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<SlashCounter>): SlashCounter {
    return SlashCounter.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SlashCounter>): SlashCounter {
    const message = createBaseSlashCounter();
    message.validator = object.validator ?? "";
    message.slashCount = (object.slashCount !== undefined && object.slashCount !== null)
      ? Long.fromValue(object.slashCount)
      : Long.UZERO;
    message.prevSlashCount = (object.prevSlashCount !== undefined && object.prevSlashCount !== null)
      ? Long.fromValue(object.prevSlashCount)
      : Long.UZERO;
    message.newlyBondedWindowAllowance =
      (object.newlyBondedWindowAllowance !== undefined && object.newlyBondedWindowAllowance !== null)
        ? Long.fromValue(object.newlyBondedWindowAllowance)
        : Long.UZERO;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
