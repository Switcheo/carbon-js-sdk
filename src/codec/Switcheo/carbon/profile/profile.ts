/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.profile";

export interface Profile {
  address: string;
  username: string;
  twitter: string;
}

function createBaseProfile(): Profile {
  return { address: "", username: "", twitter: "" };
}

export const Profile = {
  encode(message: Profile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    if (message.twitter !== "") {
      writer.uint32(26).string(message.twitter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Profile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfile();
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

          message.username = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.twitter = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Profile {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      username: isSet(object.username) ? String(object.username) : "",
      twitter: isSet(object.twitter) ? String(object.twitter) : "",
    };
  },

  toJSON(message: Profile): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.username !== undefined && (obj.username = message.username);
    message.twitter !== undefined && (obj.twitter = message.twitter);
    return obj;
  },

  create(base?: DeepPartial<Profile>): Profile {
    return Profile.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Profile>): Profile {
    const message = createBaseProfile();
    message.address = object.address ?? "";
    message.username = object.username ?? "";
    message.twitter = object.twitter ?? "";
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
