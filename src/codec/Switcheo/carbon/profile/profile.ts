/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.profile";

export interface Profile {
  address: string;
  username: string;
  twitter: string;
}

const baseProfile: object = { address: "", username: "", twitter: "" };

export const Profile = {
  encode(
    message: Profile,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProfile } as Profile;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.username = reader.string();
          break;
        case 3:
          message.twitter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Profile {
    const message = { ...baseProfile } as Profile;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.username =
      object.username !== undefined && object.username !== null
        ? String(object.username)
        : "";
    message.twitter =
      object.twitter !== undefined && object.twitter !== null
        ? String(object.twitter)
        : "";
    return message;
  },

  toJSON(message: Profile): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.username !== undefined && (obj.username = message.username);
    message.twitter !== undefined && (obj.twitter = message.twitter);
    return obj;
  },

  fromPartial(object: DeepPartial<Profile>): Profile {
    const message = { ...baseProfile } as Profile;
    message.address = object.address ?? "";
    message.username = object.username ?? "";
    message.twitter = object.twitter ?? "";
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
