/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.admin";

/**
 * SunsetPrice is the USD price the sunset converts a denom at. The first sunset
 * step records one per denom from the price table, for the steps that pay out a
 * conversion.
 */
export interface SunsetPrice {
  denom: string;
  /** USD per whole token, at the token registry's decimals */
  priceUsd: string;
  /** the price table's pricing issue, P0 to P12 */
  issue: string;
  /** the price table's rule for this price */
  rule: string;
  /** where the number came from */
  source: string;
  /**
   * as_of is when the number was observed, in unix seconds: x/pricing's index time for a TWAP (a group member takes its
   * group token's), the oracle's timestamp for an oracle result, the halt time for a CoinGecko quote at the halt; zero
   * for a price fixed by a decision or set to $0
   */
  asOf: Long;
}

function createBaseSunsetPrice(): SunsetPrice {
  return { denom: "", priceUsd: "", issue: "", rule: "", source: "", asOf: Long.ZERO };
}

export const SunsetPrice = {
  encode(message: SunsetPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.priceUsd !== "") {
      writer.uint32(18).string(message.priceUsd);
    }
    if (message.issue !== "") {
      writer.uint32(26).string(message.issue);
    }
    if (message.rule !== "") {
      writer.uint32(34).string(message.rule);
    }
    if (message.source !== "") {
      writer.uint32(42).string(message.source);
    }
    if (!message.asOf.isZero()) {
      writer.uint32(48).int64(message.asOf);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SunsetPrice {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSunsetPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.priceUsd = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.issue = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.rule = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.source = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.asOf = reader.int64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SunsetPrice {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      priceUsd: isSet(object.priceUsd) ? String(object.priceUsd) : "",
      issue: isSet(object.issue) ? String(object.issue) : "",
      rule: isSet(object.rule) ? String(object.rule) : "",
      source: isSet(object.source) ? String(object.source) : "",
      asOf: isSet(object.asOf) ? Long.fromValue(object.asOf) : Long.ZERO,
    };
  },

  toJSON(message: SunsetPrice): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.priceUsd !== undefined && (obj.priceUsd = message.priceUsd);
    message.issue !== undefined && (obj.issue = message.issue);
    message.rule !== undefined && (obj.rule = message.rule);
    message.source !== undefined && (obj.source = message.source);
    message.asOf !== undefined && (obj.asOf = (message.asOf || Long.ZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<SunsetPrice>): SunsetPrice {
    return SunsetPrice.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SunsetPrice>): SunsetPrice {
    const message = createBaseSunsetPrice();
    message.denom = object.denom ?? "";
    message.priceUsd = object.priceUsd ?? "";
    message.issue = object.issue ?? "";
    message.rule = object.rule ?? "";
    message.source = object.source ?? "";
    message.asOf = (object.asOf !== undefined && object.asOf !== null) ? Long.fromValue(object.asOf) : Long.ZERO;
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
