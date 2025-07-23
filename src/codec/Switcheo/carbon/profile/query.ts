/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Profile } from "./profile";

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

function createBaseQueryGetProfileRequest(): QueryGetProfileRequest {
  return { address: "" };
}

export const QueryGetProfileRequest = {
  encode(message: QueryGetProfileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProfileRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProfileRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetProfileRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryGetProfileRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<QueryGetProfileRequest>): QueryGetProfileRequest {
    return QueryGetProfileRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetProfileRequest>): QueryGetProfileRequest {
    const message = createBaseQueryGetProfileRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryGetProfileResponse(): QueryGetProfileResponse {
  return { profile: undefined };
}

export const QueryGetProfileResponse = {
  encode(message: QueryGetProfileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.profile !== undefined) {
      Profile.encode(message.profile, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProfileResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProfileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.profile = Profile.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetProfileResponse {
    return { profile: isSet(object.profile) ? Profile.fromJSON(object.profile) : undefined };
  },

  toJSON(message: QueryGetProfileResponse): unknown {
    const obj: any = {};
    message.profile !== undefined && (obj.profile = message.profile ? Profile.toJSON(message.profile) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryGetProfileResponse>): QueryGetProfileResponse {
    return QueryGetProfileResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetProfileResponse>): QueryGetProfileResponse {
    const message = createBaseQueryGetProfileResponse();
    message.profile = (object.profile !== undefined && object.profile !== null)
      ? Profile.fromPartial(object.profile)
      : undefined;
    return message;
  },
};

function createBaseQueryAllProfileRequest(): QueryAllProfileRequest {
  return { pagination: undefined };
}

export const QueryAllProfileRequest = {
  encode(message: QueryAllProfileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllProfileRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllProfileRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllProfileRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllProfileRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllProfileRequest>): QueryAllProfileRequest {
    return QueryAllProfileRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllProfileRequest>): QueryAllProfileRequest {
    const message = createBaseQueryAllProfileRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllProfileResponse(): QueryAllProfileResponse {
  return { profiles: [], pagination: undefined };
}

export const QueryAllProfileResponse = {
  encode(message: QueryAllProfileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.profiles) {
      Profile.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllProfileResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllProfileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.profiles.push(Profile.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllProfileResponse {
    return {
      profiles: Array.isArray(object?.profiles) ? object.profiles.map((e: any) => Profile.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllProfileResponse): unknown {
    const obj: any = {};
    if (message.profiles) {
      obj.profiles = message.profiles.map((e) => e ? Profile.toJSON(e) : undefined);
    } else {
      obj.profiles = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllProfileResponse>): QueryAllProfileResponse {
    return QueryAllProfileResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllProfileResponse>): QueryAllProfileResponse {
    const message = createBaseQueryAllProfileResponse();
    message.profiles = object.profiles?.map((e) => Profile.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryProfileByUsernameRequest(): QueryProfileByUsernameRequest {
  return { username: "" };
}

export const QueryProfileByUsernameRequest = {
  encode(message: QueryProfileByUsernameRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProfileByUsernameRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProfileByUsernameRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.username = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryProfileByUsernameRequest {
    return { username: isSet(object.username) ? String(object.username) : "" };
  },

  toJSON(message: QueryProfileByUsernameRequest): unknown {
    const obj: any = {};
    message.username !== undefined && (obj.username = message.username);
    return obj;
  },

  create(base?: DeepPartial<QueryProfileByUsernameRequest>): QueryProfileByUsernameRequest {
    return QueryProfileByUsernameRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryProfileByUsernameRequest>): QueryProfileByUsernameRequest {
    const message = createBaseQueryProfileByUsernameRequest();
    message.username = object.username ?? "";
    return message;
  },
};

function createBaseQueryProfileByUsernameResponse(): QueryProfileByUsernameResponse {
  return { profile: undefined };
}

export const QueryProfileByUsernameResponse = {
  encode(message: QueryProfileByUsernameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.profile !== undefined) {
      Profile.encode(message.profile, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProfileByUsernameResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProfileByUsernameResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.profile = Profile.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryProfileByUsernameResponse {
    return { profile: isSet(object.profile) ? Profile.fromJSON(object.profile) : undefined };
  },

  toJSON(message: QueryProfileByUsernameResponse): unknown {
    const obj: any = {};
    message.profile !== undefined && (obj.profile = message.profile ? Profile.toJSON(message.profile) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryProfileByUsernameResponse>): QueryProfileByUsernameResponse {
    return QueryProfileByUsernameResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryProfileByUsernameResponse>): QueryProfileByUsernameResponse {
    const message = createBaseQueryProfileByUsernameResponse();
    message.profile = (object.profile !== undefined && object.profile !== null)
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
  ProfileByUsername(request: QueryProfileByUsernameRequest): Promise<QueryProfileByUsernameResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.profile.Query";
    this.rpc = rpc;
    this.Profile = this.Profile.bind(this);
    this.ProfileAll = this.ProfileAll.bind(this);
    this.ProfileByUsername = this.ProfileByUsername.bind(this);
  }
  Profile(request: QueryGetProfileRequest): Promise<QueryGetProfileResponse> {
    const data = QueryGetProfileRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Profile", data);
    return promise.then((data) => QueryGetProfileResponse.decode(_m0.Reader.create(data)));
  }

  ProfileAll(request: QueryAllProfileRequest): Promise<QueryAllProfileResponse> {
    const data = QueryAllProfileRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ProfileAll", data);
    return promise.then((data) => QueryAllProfileResponse.decode(_m0.Reader.create(data)));
  }

  ProfileByUsername(request: QueryProfileByUsernameRequest): Promise<QueryProfileByUsernameResponse> {
    const data = QueryProfileByUsernameRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ProfileByUsername", data);
    return promise.then((data) => QueryProfileByUsernameResponse.decode(_m0.Reader.create(data)));
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
