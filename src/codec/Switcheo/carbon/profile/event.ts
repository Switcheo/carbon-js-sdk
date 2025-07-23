/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Profile } from "./profile";

export const protobufPackage = "Switcheo.carbon.profile";

export interface UpdateProfileEvent {
  profile?: Profile;
  type: string;
}

function createBaseUpdateProfileEvent(): UpdateProfileEvent {
  return { profile: undefined, type: "" };
}

export const UpdateProfileEvent = {
  encode(message: UpdateProfileEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.profile !== undefined) {
      Profile.encode(message.profile, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProfileEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateProfileEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.profile = Profile.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): UpdateProfileEvent {
    return {
      profile: isSet(object.profile) ? Profile.fromJSON(object.profile) : undefined,
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: UpdateProfileEvent): unknown {
    const obj: any = {};
    message.profile !== undefined && (obj.profile = message.profile ? Profile.toJSON(message.profile) : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create(base?: DeepPartial<UpdateProfileEvent>): UpdateProfileEvent {
    return UpdateProfileEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateProfileEvent>): UpdateProfileEvent {
    const message = createBaseUpdateProfileEvent();
    message.profile = (object.profile !== undefined && object.profile !== null)
      ? Profile.fromPartial(object.profile)
      : undefined;
    message.type = object.type ?? "";
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
