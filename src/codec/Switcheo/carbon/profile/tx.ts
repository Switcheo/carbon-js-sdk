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

export interface MsgUpdateProfileResponse {}

const baseMsgUpdateProfile: object = { creator: "", username: "", twitter: "" };

export const MsgUpdateProfile = {
  encode(
    message: MsgUpdateProfile,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateProfile } as MsgUpdateProfile;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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

  fromJSON(object: any): MsgUpdateProfile {
    const message = { ...baseMsgUpdateProfile } as MsgUpdateProfile;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
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

  toJSON(message: MsgUpdateProfile): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.username !== undefined && (obj.username = message.username);
    message.twitter !== undefined && (obj.twitter = message.twitter);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateProfile>): MsgUpdateProfile {
    const message = { ...baseMsgUpdateProfile } as MsgUpdateProfile;
    message.creator = object.creator ?? "";
    message.username = object.username ?? "";
    message.twitter = object.twitter ?? "";
    return message;
  },
};

const baseMsgUpdateProfileResponse: object = {};

export const MsgUpdateProfileResponse = {
  encode(
    _: MsgUpdateProfileResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateProfileResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateProfileResponse,
    } as MsgUpdateProfileResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateProfileResponse {
    const message = {
      ...baseMsgUpdateProfileResponse,
    } as MsgUpdateProfileResponse;
    return message;
  },

  toJSON(_: MsgUpdateProfileResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateProfileResponse>
  ): MsgUpdateProfileResponse {
    const message = {
      ...baseMsgUpdateProfileResponse,
    } as MsgUpdateProfileResponse;
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
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.UpdateProfile = this.UpdateProfile.bind(this);
  }
  UpdateProfile(request: MsgUpdateProfile): Promise<MsgUpdateProfileResponse> {
    const data = MsgUpdateProfile.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.profile.Msg",
      "UpdateProfile",
      data
    );
    return promise.then((data) =>
      MsgUpdateProfileResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
