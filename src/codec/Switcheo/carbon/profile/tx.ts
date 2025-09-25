/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.profile";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgUpdateProfile {
  creator: string;
  username: string;
  twitter: string;
}

export interface MsgUpdateProfileResponse {
}

function createBaseMsgUpdateProfile(): MsgUpdateProfile {
  return { creator: "", username: "", twitter: "" };
}

export const MsgUpdateProfile = {
  encode(message: MsgUpdateProfile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    if (message.twitter !== "") {
      writer.uint32(26).string(message.twitter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProfile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProfile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
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

  fromJSON(object: any): MsgUpdateProfile {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      username: isSet(object.username) ? String(object.username) : "",
      twitter: isSet(object.twitter) ? String(object.twitter) : "",
    };
  },

  toJSON(message: MsgUpdateProfile): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.username !== undefined && (obj.username = message.username);
    message.twitter !== undefined && (obj.twitter = message.twitter);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateProfile>): MsgUpdateProfile {
    return MsgUpdateProfile.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateProfile>): MsgUpdateProfile {
    const message = createBaseMsgUpdateProfile();
    message.creator = object.creator ?? "";
    message.username = object.username ?? "";
    message.twitter = object.twitter ?? "";
    return message;
  },
};

function createBaseMsgUpdateProfileResponse(): MsgUpdateProfileResponse {
  return {};
}

export const MsgUpdateProfileResponse = {
  encode(_: MsgUpdateProfileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProfileResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProfileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateProfileResponse {
    return {};
  },

  toJSON(_: MsgUpdateProfileResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateProfileResponse>): MsgUpdateProfileResponse {
    return MsgUpdateProfileResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdateProfileResponse>): MsgUpdateProfileResponse {
    const message = createBaseMsgUpdateProfileResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  UpdateProfile(request: MsgUpdateProfile): Promise<MsgUpdateProfileResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.profile.Msg";
    this.rpc = rpc;
    this.UpdateProfile = this.UpdateProfile.bind(this);
  }
  UpdateProfile(request: MsgUpdateProfile): Promise<MsgUpdateProfileResponse> {
    const data = MsgUpdateProfile.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateProfile", data);
    return promise.then((data) => MsgUpdateProfileResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
