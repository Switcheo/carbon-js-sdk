/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";

export const protobufPackage = "Switcheo.carbon.admin";

export interface QueryAdminRequest {
}

export interface QueryAdminResponse {
  address: string;
}

export interface QueryAdminRecipientRequest {
}

export interface QueryAdminRecipientResponse {
  address: string;
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

function createBaseQueryAdminRequest(): QueryAdminRequest {
  return {};
}

export const QueryAdminRequest = {
  encode(_: QueryAdminRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAdminRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAdminRequest();
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

  fromJSON(_: any): QueryAdminRequest {
    return {};
  },

  toJSON(_: QueryAdminRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryAdminRequest>): QueryAdminRequest {
    return QueryAdminRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryAdminRequest>): QueryAdminRequest {
    const message = createBaseQueryAdminRequest();
    return message;
  },
};

function createBaseQueryAdminResponse(): QueryAdminResponse {
  return { address: "" };
}

export const QueryAdminResponse = {
  encode(message: QueryAdminResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAdminResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAdminResponse();
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

  fromJSON(object: any): QueryAdminResponse {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryAdminResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<QueryAdminResponse>): QueryAdminResponse {
    return QueryAdminResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAdminResponse>): QueryAdminResponse {
    const message = createBaseQueryAdminResponse();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryAdminRecipientRequest(): QueryAdminRecipientRequest {
  return {};
}

export const QueryAdminRecipientRequest = {
  encode(_: QueryAdminRecipientRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAdminRecipientRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAdminRecipientRequest();
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

  fromJSON(_: any): QueryAdminRecipientRequest {
    return {};
  },

  toJSON(_: QueryAdminRecipientRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryAdminRecipientRequest>): QueryAdminRecipientRequest {
    return QueryAdminRecipientRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryAdminRecipientRequest>): QueryAdminRecipientRequest {
    const message = createBaseQueryAdminRecipientRequest();
    return message;
  },
};

function createBaseQueryAdminRecipientResponse(): QueryAdminRecipientResponse {
  return { address: "" };
}

export const QueryAdminRecipientResponse = {
  encode(message: QueryAdminRecipientResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAdminRecipientResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAdminRecipientResponse();
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

  fromJSON(object: any): QueryAdminRecipientResponse {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryAdminRecipientResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<QueryAdminRecipientResponse>): QueryAdminRecipientResponse {
    return QueryAdminRecipientResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAdminRecipientResponse>): QueryAdminRecipientResponse {
    const message = createBaseQueryAdminRecipientResponse();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a list of Admin items. */
  Admin(request: QueryAdminRequest): Promise<QueryAdminResponse>;
  /** Queries a list of AdminRecipient items. */
  AdminRecipient(request: QueryAdminRecipientRequest): Promise<QueryAdminRecipientResponse>;
  /** Parameters queries the admin parameters. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.admin.Query";
    this.rpc = rpc;
    this.Admin = this.Admin.bind(this);
    this.AdminRecipient = this.AdminRecipient.bind(this);
    this.Params = this.Params.bind(this);
  }
  Admin(request: QueryAdminRequest): Promise<QueryAdminResponse> {
    const data = QueryAdminRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Admin", data);
    return promise.then((data) => QueryAdminResponse.decode(_m0.Reader.create(data)));
  }

  AdminRecipient(request: QueryAdminRecipientRequest): Promise<QueryAdminRecipientResponse> {
    const data = QueryAdminRecipientRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AdminRecipient", data);
    return promise.then((data) => QueryAdminRecipientResponse.decode(_m0.Reader.create(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
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
