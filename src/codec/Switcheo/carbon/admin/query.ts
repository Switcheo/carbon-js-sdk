/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.admin";

export interface QueryAdminRequest {}

export interface QueryAdminResponse {
  address: string;
}

export interface QueryAdminRecipientRequest {}

export interface QueryAdminRecipientResponse {
  address: string;
}

const baseQueryAdminRequest: object = {};

export const QueryAdminRequest = {
  encode(
    _: QueryAdminRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAdminRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAdminRequest } as QueryAdminRequest;
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

  fromJSON(_: any): QueryAdminRequest {
    const message = { ...baseQueryAdminRequest } as QueryAdminRequest;
    return message;
  },

  toJSON(_: QueryAdminRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryAdminRequest>): QueryAdminRequest {
    const message = { ...baseQueryAdminRequest } as QueryAdminRequest;
    return message;
  },
};

const baseQueryAdminResponse: object = { address: "" };

export const QueryAdminResponse = {
  encode(
    message: QueryAdminResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAdminResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAdminResponse } as QueryAdminResponse;
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

  fromJSON(object: any): QueryAdminResponse {
    const message = { ...baseQueryAdminResponse } as QueryAdminResponse;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: QueryAdminResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAdminResponse>): QueryAdminResponse {
    const message = { ...baseQueryAdminResponse } as QueryAdminResponse;
    message.address = object.address ?? "";
    return message;
  },
};

const baseQueryAdminRecipientRequest: object = {};

export const QueryAdminRecipientRequest = {
  encode(
    _: QueryAdminRecipientRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAdminRecipientRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAdminRecipientRequest,
    } as QueryAdminRecipientRequest;
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

  fromJSON(_: any): QueryAdminRecipientRequest {
    const message = {
      ...baseQueryAdminRecipientRequest,
    } as QueryAdminRecipientRequest;
    return message;
  },

  toJSON(_: QueryAdminRecipientRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryAdminRecipientRequest>
  ): QueryAdminRecipientRequest {
    const message = {
      ...baseQueryAdminRecipientRequest,
    } as QueryAdminRecipientRequest;
    return message;
  },
};

const baseQueryAdminRecipientResponse: object = { address: "" };

export const QueryAdminRecipientResponse = {
  encode(
    message: QueryAdminRecipientResponse,
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
  ): QueryAdminRecipientResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAdminRecipientResponse,
    } as QueryAdminRecipientResponse;
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

  fromJSON(object: any): QueryAdminRecipientResponse {
    const message = {
      ...baseQueryAdminRecipientResponse,
    } as QueryAdminRecipientResponse;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: QueryAdminRecipientResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAdminRecipientResponse>
  ): QueryAdminRecipientResponse {
    const message = {
      ...baseQueryAdminRecipientResponse,
    } as QueryAdminRecipientResponse;
    message.address = object.address ?? "";
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a list of Admin items. */
  Admin(request: QueryAdminRequest): Promise<QueryAdminResponse>;
  /** Queries a list of AdminRecipient items. */
  AdminRecipient(
    request: QueryAdminRecipientRequest
  ): Promise<QueryAdminRecipientResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Admin = this.Admin.bind(this);
    this.AdminRecipient = this.AdminRecipient.bind(this);
  }
  Admin(request: QueryAdminRequest): Promise<QueryAdminResponse> {
    const data = QueryAdminRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.admin.Query",
      "Admin",
      data
    );
    return promise.then((data) =>
      QueryAdminResponse.decode(new _m0.Reader(data))
    );
  }

  AdminRecipient(
    request: QueryAdminRecipientRequest
  ): Promise<QueryAdminRecipientResponse> {
    const data = QueryAdminRecipientRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.admin.Query",
      "AdminRecipient",
      data
    );
    return promise.then((data) =>
      QueryAdminRecipientResponse.decode(new _m0.Reader(data))
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
