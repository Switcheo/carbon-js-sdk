/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";

export const protobufPackage = "cosmos.crypto.multisig";

/**
 * LegacyAminoPubKey specifies a public key type
 * which nests multiple public keys and a threshold,
 * it uses legacy amino address rules.
 */
export interface LegacyAminoPubKey {
  threshold: number;
  publicKeys: Any[];
}

function createBaseLegacyAminoPubKey(): LegacyAminoPubKey {
  return { threshold: 0, publicKeys: [] };
}

export const LegacyAminoPubKey = {
  encode(message: LegacyAminoPubKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.threshold !== 0) {
      writer.uint32(8).uint32(message.threshold);
    }
    for (const v of message.publicKeys) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LegacyAminoPubKey {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyAminoPubKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.threshold = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.publicKeys.push(Any.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LegacyAminoPubKey {
    return {
      threshold: isSet(object.threshold) ? Number(object.threshold) : 0,
      publicKeys: Array.isArray(object?.publicKeys) ? object.publicKeys.map((e: any) => Any.fromJSON(e)) : [],
    };
  },

  toJSON(message: LegacyAminoPubKey): unknown {
    const obj: any = {};
    message.threshold !== undefined && (obj.threshold = Math.round(message.threshold));
    if (message.publicKeys) {
      obj.publicKeys = message.publicKeys.map((e) => e ? Any.toJSON(e) : undefined);
    } else {
      obj.publicKeys = [];
    }
    return obj;
  },

  create(base?: DeepPartial<LegacyAminoPubKey>): LegacyAminoPubKey {
    return LegacyAminoPubKey.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<LegacyAminoPubKey>): LegacyAminoPubKey {
    const message = createBaseLegacyAminoPubKey();
    message.threshold = object.threshold ?? 0;
    message.publicKeys = object.publicKeys?.map((e) => Any.fromPartial(e)) || [];
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
