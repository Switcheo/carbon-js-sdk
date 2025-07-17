/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "Switcheo.carbon.cdp";

/**
 * For nlend migration to keep and store all the glp that was retrieved from all
 * users
 */
export interface GlpTransferRecord {
  address: string;
  underlying?: Coin;
}

export interface NLendConversionRecord {
  address: string;
  underlying?: Coin;
  nlend?: Coin;
  cibt?: Coin;
}

function createBaseGlpTransferRecord(): GlpTransferRecord {
  return { address: "", underlying: undefined };
}

export const GlpTransferRecord = {
  encode(message: GlpTransferRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.underlying !== undefined) {
      Coin.encode(message.underlying, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GlpTransferRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGlpTransferRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.underlying = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GlpTransferRecord {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      underlying: isSet(object.underlying) ? Coin.fromJSON(object.underlying) : undefined,
    };
  },

  toJSON(message: GlpTransferRecord): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.underlying !== undefined &&
      (obj.underlying = message.underlying ? Coin.toJSON(message.underlying) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GlpTransferRecord>): GlpTransferRecord {
    return GlpTransferRecord.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GlpTransferRecord>): GlpTransferRecord {
    const message = createBaseGlpTransferRecord();
    message.address = object.address ?? "";
    message.underlying = (object.underlying !== undefined && object.underlying !== null)
      ? Coin.fromPartial(object.underlying)
      : undefined;
    return message;
  },
};

function createBaseNLendConversionRecord(): NLendConversionRecord {
  return { address: "", underlying: undefined, nlend: undefined, cibt: undefined };
}

export const NLendConversionRecord = {
  encode(message: NLendConversionRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.underlying !== undefined) {
      Coin.encode(message.underlying, writer.uint32(18).fork()).ldelim();
    }
    if (message.nlend !== undefined) {
      Coin.encode(message.nlend, writer.uint32(26).fork()).ldelim();
    }
    if (message.cibt !== undefined) {
      Coin.encode(message.cibt, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NLendConversionRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNLendConversionRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.underlying = Coin.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.nlend = Coin.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.cibt = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NLendConversionRecord {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      underlying: isSet(object.underlying) ? Coin.fromJSON(object.underlying) : undefined,
      nlend: isSet(object.nlend) ? Coin.fromJSON(object.nlend) : undefined,
      cibt: isSet(object.cibt) ? Coin.fromJSON(object.cibt) : undefined,
    };
  },

  toJSON(message: NLendConversionRecord): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.underlying !== undefined &&
      (obj.underlying = message.underlying ? Coin.toJSON(message.underlying) : undefined);
    message.nlend !== undefined && (obj.nlend = message.nlend ? Coin.toJSON(message.nlend) : undefined);
    message.cibt !== undefined && (obj.cibt = message.cibt ? Coin.toJSON(message.cibt) : undefined);
    return obj;
  },

  create(base?: DeepPartial<NLendConversionRecord>): NLendConversionRecord {
    return NLendConversionRecord.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<NLendConversionRecord>): NLendConversionRecord {
    const message = createBaseNLendConversionRecord();
    message.address = object.address ?? "";
    message.underlying = (object.underlying !== undefined && object.underlying !== null)
      ? Coin.fromPartial(object.underlying)
      : undefined;
    message.nlend = (object.nlend !== undefined && object.nlend !== null) ? Coin.fromPartial(object.nlend) : undefined;
    message.cibt = (object.cibt !== undefined && object.cibt !== null) ? Coin.fromPartial(object.cibt) : undefined;
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
