/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Result } from "./oracle";

export const protobufPackage = "Switcheo.carbon.oracle";

export interface ResultEvent {
  result?: Result;
  resultId: string;
  type: string;
}

export interface OracleSlashEvent {
  validator: string;
  consAddress: string;
  slashCount: Long;
  infractionHeight: Long;
  power: Long;
  slashFactor: string;
  burnedCoins: string;
}

function createBaseResultEvent(): ResultEvent {
  return { result: undefined, resultId: "", type: "" };
}

export const ResultEvent = {
  encode(message: ResultEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== undefined) {
      Result.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    if (message.resultId !== "") {
      writer.uint32(18).string(message.resultId);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResultEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResultEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.result = Result.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.resultId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResultEvent {
    return {
      result: isSet(object.result) ? Result.fromJSON(object.result) : undefined,
      resultId: isSet(object.resultId) ? String(object.resultId) : "",
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: ResultEvent): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result ? Result.toJSON(message.result) : undefined);
    message.resultId !== undefined && (obj.resultId = message.resultId);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create(base?: DeepPartial<ResultEvent>): ResultEvent {
    return ResultEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ResultEvent>): ResultEvent {
    const message = createBaseResultEvent();
    message.result = (object.result !== undefined && object.result !== null)
      ? Result.fromPartial(object.result)
      : undefined;
    message.resultId = object.resultId ?? "";
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseOracleSlashEvent(): OracleSlashEvent {
  return {
    validator: "",
    consAddress: "",
    slashCount: Long.UZERO,
    infractionHeight: Long.UZERO,
    power: Long.UZERO,
    slashFactor: "",
    burnedCoins: "",
  };
}

export const OracleSlashEvent = {
  encode(message: OracleSlashEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.consAddress !== "") {
      writer.uint32(18).string(message.consAddress);
    }
    if (!message.slashCount.isZero()) {
      writer.uint32(24).uint64(message.slashCount);
    }
    if (!message.infractionHeight.isZero()) {
      writer.uint32(32).uint64(message.infractionHeight);
    }
    if (!message.power.isZero()) {
      writer.uint32(40).uint64(message.power);
    }
    if (message.slashFactor !== "") {
      writer.uint32(50).string(message.slashFactor);
    }
    if (message.burnedCoins !== "") {
      writer.uint32(58).string(message.burnedCoins);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OracleSlashEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleSlashEvent();
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

          message.consAddress = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.slashCount = reader.uint64() as Long;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.infractionHeight = reader.uint64() as Long;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.power = reader.uint64() as Long;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.slashFactor = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.burnedCoins = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OracleSlashEvent {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      consAddress: isSet(object.consAddress) ? String(object.consAddress) : "",
      slashCount: isSet(object.slashCount) ? Long.fromValue(object.slashCount) : Long.UZERO,
      infractionHeight: isSet(object.infractionHeight) ? Long.fromValue(object.infractionHeight) : Long.UZERO,
      power: isSet(object.power) ? Long.fromValue(object.power) : Long.UZERO,
      slashFactor: isSet(object.slashFactor) ? String(object.slashFactor) : "",
      burnedCoins: isSet(object.burnedCoins) ? String(object.burnedCoins) : "",
    };
  },

  toJSON(message: OracleSlashEvent): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.consAddress !== undefined && (obj.consAddress = message.consAddress);
    message.slashCount !== undefined && (obj.slashCount = (message.slashCount || Long.UZERO).toString());
    message.infractionHeight !== undefined &&
      (obj.infractionHeight = (message.infractionHeight || Long.UZERO).toString());
    message.power !== undefined && (obj.power = (message.power || Long.UZERO).toString());
    message.slashFactor !== undefined && (obj.slashFactor = message.slashFactor);
    message.burnedCoins !== undefined && (obj.burnedCoins = message.burnedCoins);
    return obj;
  },

  create(base?: DeepPartial<OracleSlashEvent>): OracleSlashEvent {
    return OracleSlashEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<OracleSlashEvent>): OracleSlashEvent {
    const message = createBaseOracleSlashEvent();
    message.validator = object.validator ?? "";
    message.consAddress = object.consAddress ?? "";
    message.slashCount = (object.slashCount !== undefined && object.slashCount !== null)
      ? Long.fromValue(object.slashCount)
      : Long.UZERO;
    message.infractionHeight = (object.infractionHeight !== undefined && object.infractionHeight !== null)
      ? Long.fromValue(object.infractionHeight)
      : Long.UZERO;
    message.power = (object.power !== undefined && object.power !== null) ? Long.fromValue(object.power) : Long.UZERO;
    message.slashFactor = object.slashFactor ?? "";
    message.burnedCoins = object.burnedCoins ?? "";
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
