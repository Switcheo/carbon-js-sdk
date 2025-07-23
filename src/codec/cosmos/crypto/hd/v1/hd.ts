/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cosmos.crypto.hd.v1";

/** Since: cosmos-sdk 0.46 */

/** BIP44Params is used as path field in ledger item in Record. */
export interface BIP44Params {
  /** purpose is a constant set to 44' (or 0x8000002C) following the BIP43 recommendation */
  purpose: number;
  /** coin_type is a constant that improves privacy */
  coinType: number;
  /** account splits the key space into independent user identities */
  account: number;
  /**
   * change is a constant used for public derivation. Constant 0 is used for external chain and constant 1 for internal
   * chain.
   */
  change: boolean;
  /** address_index is used as child index in BIP32 derivation */
  addressIndex: number;
}

function createBaseBIP44Params(): BIP44Params {
  return { purpose: 0, coinType: 0, account: 0, change: false, addressIndex: 0 };
}

export const BIP44Params = {
  encode(message: BIP44Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.purpose !== 0) {
      writer.uint32(8).uint32(message.purpose);
    }
    if (message.coinType !== 0) {
      writer.uint32(16).uint32(message.coinType);
    }
    if (message.account !== 0) {
      writer.uint32(24).uint32(message.account);
    }
    if (message.change === true) {
      writer.uint32(32).bool(message.change);
    }
    if (message.addressIndex !== 0) {
      writer.uint32(40).uint32(message.addressIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BIP44Params {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBIP44Params();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.purpose = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.coinType = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.account = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.change = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.addressIndex = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BIP44Params {
    return {
      purpose: isSet(object.purpose) ? Number(object.purpose) : 0,
      coinType: isSet(object.coinType) ? Number(object.coinType) : 0,
      account: isSet(object.account) ? Number(object.account) : 0,
      change: isSet(object.change) ? Boolean(object.change) : false,
      addressIndex: isSet(object.addressIndex) ? Number(object.addressIndex) : 0,
    };
  },

  toJSON(message: BIP44Params): unknown {
    const obj: any = {};
    message.purpose !== undefined && (obj.purpose = Math.round(message.purpose));
    message.coinType !== undefined && (obj.coinType = Math.round(message.coinType));
    message.account !== undefined && (obj.account = Math.round(message.account));
    message.change !== undefined && (obj.change = message.change);
    message.addressIndex !== undefined && (obj.addressIndex = Math.round(message.addressIndex));
    return obj;
  },

  create(base?: DeepPartial<BIP44Params>): BIP44Params {
    return BIP44Params.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<BIP44Params>): BIP44Params {
    const message = createBaseBIP44Params();
    message.purpose = object.purpose ?? 0;
    message.coinType = object.coinType ?? 0;
    message.account = object.account ?? 0;
    message.change = object.change ?? false;
    message.addressIndex = object.addressIndex ?? 0;
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
