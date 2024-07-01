/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Profile } from "./profile";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "Switcheo.carbon.profile";

/** this line is used by starport scaffolding # 3 */
export interface QueryGetProfileRequest {
  address: string;
}

export interface QueryGetProfileResponse {
  profile?: Profile;
}

export interface QueryAllProfileRequest {
  pagination?: PageRequest;
}

export interface QueryAllProfileResponse {
  profiles: Profile[];
  pagination?: PageResponse;
}

export interface QueryProfileByUsernameRequest {
  username: string;
}

export interface QueryProfileByUsernameResponse {
  profile?: Profile;
}

const baseQueryGetProfileRequest: object = { address: "" };

export const QueryGetProfileRequest = {
  encode(
    message: QueryGetProfileRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetProfileRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetProfileRequest } as QueryGetProfileRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetProfileRequest {
    const message = { ...baseQueryGetProfileRequest } as QueryGetProfileRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: QueryGetProfileRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProfileRequest>
  ): QueryGetProfileRequest {
    const message = { ...baseQueryGetProfileRequest } as QueryGetProfileRequest;
    message.address = object.address ?? "";
    return message;
  },
};

const baseQueryGetProfileResponse: object = {};

export const QueryGetProfileResponse = {
  encode(
    message: QueryGetProfileResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.profile !== undefined) {
      Profile.encode(message.profile, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetProfileResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetProfileResponse,
    } as QueryGetProfileResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profile = Profile.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetProfileResponse {
    const message = {
      ...baseQueryGetProfileResponse,
    } as QueryGetProfileResponse;
    message.profile =
      object.profile !== undefined && object.profile !== null
        ? Profile.fromJSON(object.profile)
        : undefined;
    return message;
  },

  toJSON(message: QueryGetProfileResponse): unknown {
    const obj: any = {};
    message.profile !== undefined &&
      (obj.profile = message.profile
        ? Profile.toJSON(message.profile)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProfileResponse>
  ): QueryGetProfileResponse {
    const message = {
      ...baseQueryGetProfileResponse,
    } as QueryGetProfileResponse;
    message.profile =
      object.profile !== undefined && object.profile !== null
        ? Profile.fromPartial(object.profile)
        : undefined;
    return message;
  },
};

const baseQueryAllProfileRequest: object = {};

export const QueryAllProfileRequest = {
  encode(
    message: QueryAllProfileRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllProfileRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllProfileRequest } as QueryAllProfileRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllProfileRequest {
    const message = { ...baseQueryAllProfileRequest } as QueryAllProfileRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllProfileRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllProfileRequest>
  ): QueryAllProfileRequest {
    const message = { ...baseQueryAllProfileRequest } as QueryAllProfileRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllProfileResponse: object = {};

export const QueryAllProfileResponse = {
  encode(
    message: QueryAllProfileResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.profiles) {
      Profile.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllProfileResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllProfileResponse,
    } as QueryAllProfileResponse;
    message.profiles = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profiles.push(Profile.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllProfileResponse {
    const message = {
      ...baseQueryAllProfileResponse,
    } as QueryAllProfileResponse;
    message.profiles = (object.profiles ?? []).map((e: any) =>
      Profile.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllProfileResponse): unknown {
    const obj: any = {};
    if (message.profiles) {
      obj.profiles = message.profiles.map((e) =>
        e ? Profile.toJSON(e) : undefined
      );
    } else {
      obj.profiles = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllProfileResponse>
  ): QueryAllProfileResponse {
    const message = {
      ...baseQueryAllProfileResponse,
    } as QueryAllProfileResponse;
    message.profiles = (object.profiles ?? []).map((e) =>
      Profile.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryProfileByUsernameRequest: object = { username: "" };

export const QueryProfileByUsernameRequest = {
  encode(
    message: QueryProfileByUsernameRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryProfileByUsernameRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryProfileByUsernameRequest,
    } as QueryProfileByUsernameRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.username = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProfileByUsernameRequest {
    const message = {
      ...baseQueryProfileByUsernameRequest,
    } as QueryProfileByUsernameRequest;
    message.username =
      object.username !== undefined && object.username !== null
        ? String(object.username)
        : "";
    return message;
  },

  toJSON(message: QueryProfileByUsernameRequest): unknown {
    const obj: any = {};
    message.username !== undefined && (obj.username = message.username);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryProfileByUsernameRequest>
  ): QueryProfileByUsernameRequest {
    const message = {
      ...baseQueryProfileByUsernameRequest,
    } as QueryProfileByUsernameRequest;
    message.username = object.username ?? "";
    return message;
  },
};

const baseQueryProfileByUsernameResponse: object = {};

export const QueryProfileByUsernameResponse = {
  encode(
    message: QueryProfileByUsernameResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.profile !== undefined) {
      Profile.encode(message.profile, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryProfileByUsernameResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryProfileByUsernameResponse,
    } as QueryProfileByUsernameResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profile = Profile.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProfileByUsernameResponse {
    const message = {
      ...baseQueryProfileByUsernameResponse,
    } as QueryProfileByUsernameResponse;
    message.profile =
      object.profile !== undefined && object.profile !== null
        ? Profile.fromJSON(object.profile)
        : undefined;
    return message;
  },

  toJSON(message: QueryProfileByUsernameResponse): unknown {
    const obj: any = {};
    message.profile !== undefined &&
      (obj.profile = message.profile
        ? Profile.toJSON(message.profile)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryProfileByUsernameResponse>
  ): QueryProfileByUsernameResponse {
    const message = {
      ...baseQueryProfileByUsernameResponse,
    } as QueryProfileByUsernameResponse;
    message.profile =
      object.profile !== undefined && object.profile !== null
        ? Profile.fromPartial(object.profile)
        : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Get profile details for an address */
  Profile(request: QueryGetProfileRequest): Promise<QueryGetProfileResponse>;
  /** Get details for all profiles */
  ProfileAll(request: QueryAllProfileRequest): Promise<QueryAllProfileResponse>;
  /** Get details for all profiles */
  ProfileByUsername(
    request: QueryProfileByUsernameRequest
  ): Promise<QueryProfileByUsernameResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Profile = this.Profile.bind(this);
    this.ProfileAll = this.ProfileAll.bind(this);
    this.ProfileByUsername = this.ProfileByUsername.bind(this);
  }
  Profile(request: QueryGetProfileRequest): Promise<QueryGetProfileResponse> {
    const data = QueryGetProfileRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.profile.Query",
      "Profile",
      data
    );
    return promise.then((data) =>
      QueryGetProfileResponse.decode(new _m0.Reader(data))
    );
  }

  ProfileAll(
    request: QueryAllProfileRequest
  ): Promise<QueryAllProfileResponse> {
    const data = QueryAllProfileRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.profile.Query",
      "ProfileAll",
      data
    );
    return promise.then((data) =>
      QueryAllProfileResponse.decode(new _m0.Reader(data))
    );
  }

  ProfileByUsername(
    request: QueryProfileByUsernameRequest
  ): Promise<QueryProfileByUsernameResponse> {
    const data = QueryProfileByUsernameRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.profile.Query",
      "ProfileByUsername",
      data
    );
    return promise.then((data) =>
      QueryProfileByUsernameResponse.decode(new _m0.Reader(data))
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
