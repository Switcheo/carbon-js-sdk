/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Grant } from "../../../cosmos/feegrant/v1beta1/feegrant";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "cosmos.feegrant.v1beta1";

/** Since: cosmos-sdk 0.43 */

/** QueryAllowanceRequest is the request type for the Query/Allowance RPC method. */
export interface QueryAllowanceRequest {
  /** granter is the address of the user granting an allowance of their funds. */
  granter: string;
  /** grantee is the address of the user being granted an allowance of another user's funds. */
  grantee: string;
}

/** QueryAllowanceResponse is the response type for the Query/Allowance RPC method. */
export interface QueryAllowanceResponse {
  /** allowance is a allowance granted for grantee by granter. */
  allowance?: Grant;
}

/** QueryAllowancesRequest is the request type for the Query/Allowances RPC method. */
export interface QueryAllowancesRequest {
  grantee: string;
  /** pagination defines an pagination for the request. */
  pagination?: PageRequest;
}

/** QueryAllowancesResponse is the response type for the Query/Allowances RPC method. */
export interface QueryAllowancesResponse {
  /** allowances are allowance's granted for grantee by granter. */
  allowances: Grant[];
  /** pagination defines an pagination for the response. */
  pagination?: PageResponse;
}

/** QueryAllowancesByGranterRequest is the request type for the Query/AllowancesByGranter RPC method. */
export interface QueryAllowancesByGranterRequest {
  granter: string;
  /** pagination defines an pagination for the request. */
  pagination?: PageRequest;
}

/** QueryAllowancesByGranterResponse is the response type for the Query/AllowancesByGranter RPC method. */
export interface QueryAllowancesByGranterResponse {
  /** allowances that have been issued by the granter. */
  allowances: Grant[];
  /** pagination defines an pagination for the response. */
  pagination?: PageResponse;
}

const baseQueryAllowanceRequest: object = { granter: "", grantee: "" };

export const QueryAllowanceRequest = {
  encode(
    message: QueryAllowanceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllowanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllowanceRequest } as QueryAllowanceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllowanceRequest {
    const message = { ...baseQueryAllowanceRequest } as QueryAllowanceRequest;
    message.granter =
      object.granter !== undefined && object.granter !== null
        ? String(object.granter)
        : "";
    message.grantee =
      object.grantee !== undefined && object.grantee !== null
        ? String(object.grantee)
        : "";
    return message;
  },

  toJSON(message: QueryAllowanceRequest): unknown {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllowanceRequest>
  ): QueryAllowanceRequest {
    const message = { ...baseQueryAllowanceRequest } as QueryAllowanceRequest;
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    return message;
  },
};

const baseQueryAllowanceResponse: object = {};

export const QueryAllowanceResponse = {
  encode(
    message: QueryAllowanceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.allowance !== undefined) {
      Grant.encode(message.allowance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllowanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllowanceResponse } as QueryAllowanceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowance = Grant.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllowanceResponse {
    const message = { ...baseQueryAllowanceResponse } as QueryAllowanceResponse;
    message.allowance =
      object.allowance !== undefined && object.allowance !== null
        ? Grant.fromJSON(object.allowance)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllowanceResponse): unknown {
    const obj: any = {};
    message.allowance !== undefined &&
      (obj.allowance = message.allowance
        ? Grant.toJSON(message.allowance)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllowanceResponse>
  ): QueryAllowanceResponse {
    const message = { ...baseQueryAllowanceResponse } as QueryAllowanceResponse;
    message.allowance =
      object.allowance !== undefined && object.allowance !== null
        ? Grant.fromPartial(object.allowance)
        : undefined;
    return message;
  },
};

const baseQueryAllowancesRequest: object = { grantee: "" };

export const QueryAllowancesRequest = {
  encode(
    message: QueryAllowancesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllowancesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllowancesRequest } as QueryAllowancesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllowancesRequest {
    const message = { ...baseQueryAllowancesRequest } as QueryAllowancesRequest;
    message.grantee =
      object.grantee !== undefined && object.grantee !== null
        ? String(object.grantee)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllowancesRequest): unknown {
    const obj: any = {};
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllowancesRequest>
  ): QueryAllowancesRequest {
    const message = { ...baseQueryAllowancesRequest } as QueryAllowancesRequest;
    message.grantee = object.grantee ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllowancesResponse: object = {};

export const QueryAllowancesResponse = {
  encode(
    message: QueryAllowancesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.allowances) {
      Grant.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllowancesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllowancesResponse,
    } as QueryAllowancesResponse;
    message.allowances = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowances.push(Grant.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllowancesResponse {
    const message = {
      ...baseQueryAllowancesResponse,
    } as QueryAllowancesResponse;
    message.allowances = (object.allowances ?? []).map((e: any) =>
      Grant.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllowancesResponse): unknown {
    const obj: any = {};
    if (message.allowances) {
      obj.allowances = message.allowances.map((e) =>
        e ? Grant.toJSON(e) : undefined
      );
    } else {
      obj.allowances = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllowancesResponse>
  ): QueryAllowancesResponse {
    const message = {
      ...baseQueryAllowancesResponse,
    } as QueryAllowancesResponse;
    message.allowances = (object.allowances ?? []).map((e) =>
      Grant.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllowancesByGranterRequest: object = { granter: "" };

export const QueryAllowancesByGranterRequest = {
  encode(
    message: QueryAllowancesByGranterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllowancesByGranterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllowancesByGranterRequest,
    } as QueryAllowancesByGranterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllowancesByGranterRequest {
    const message = {
      ...baseQueryAllowancesByGranterRequest,
    } as QueryAllowancesByGranterRequest;
    message.granter =
      object.granter !== undefined && object.granter !== null
        ? String(object.granter)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllowancesByGranterRequest): unknown {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllowancesByGranterRequest>
  ): QueryAllowancesByGranterRequest {
    const message = {
      ...baseQueryAllowancesByGranterRequest,
    } as QueryAllowancesByGranterRequest;
    message.granter = object.granter ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllowancesByGranterResponse: object = {};

export const QueryAllowancesByGranterResponse = {
  encode(
    message: QueryAllowancesByGranterResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.allowances) {
      Grant.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllowancesByGranterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllowancesByGranterResponse,
    } as QueryAllowancesByGranterResponse;
    message.allowances = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowances.push(Grant.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllowancesByGranterResponse {
    const message = {
      ...baseQueryAllowancesByGranterResponse,
    } as QueryAllowancesByGranterResponse;
    message.allowances = (object.allowances ?? []).map((e: any) =>
      Grant.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllowancesByGranterResponse): unknown {
    const obj: any = {};
    if (message.allowances) {
      obj.allowances = message.allowances.map((e) =>
        e ? Grant.toJSON(e) : undefined
      );
    } else {
      obj.allowances = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllowancesByGranterResponse>
  ): QueryAllowancesByGranterResponse {
    const message = {
      ...baseQueryAllowancesByGranterResponse,
    } as QueryAllowancesByGranterResponse;
    message.allowances = (object.allowances ?? []).map((e) =>
      Grant.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Allowance returns fee granted to the grantee by the granter. */
  Allowance(request: QueryAllowanceRequest): Promise<QueryAllowanceResponse>;
  /** Allowances returns all the grants for address. */
  Allowances(request: QueryAllowancesRequest): Promise<QueryAllowancesResponse>;
  /**
   * AllowancesByGranter returns all the grants given by an address
   * Since v0.46
   */
  AllowancesByGranter(
    request: QueryAllowancesByGranterRequest
  ): Promise<QueryAllowancesByGranterResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Allowance = this.Allowance.bind(this);
    this.Allowances = this.Allowances.bind(this);
    this.AllowancesByGranter = this.AllowancesByGranter.bind(this);
  }
  Allowance(request: QueryAllowanceRequest): Promise<QueryAllowanceResponse> {
    const data = QueryAllowanceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.feegrant.v1beta1.Query",
      "Allowance",
      data
    );
    return promise.then((data) =>
      QueryAllowanceResponse.decode(new _m0.Reader(data))
    );
  }

  Allowances(
    request: QueryAllowancesRequest
  ): Promise<QueryAllowancesResponse> {
    const data = QueryAllowancesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.feegrant.v1beta1.Query",
      "Allowances",
      data
    );
    return promise.then((data) =>
      QueryAllowancesResponse.decode(new _m0.Reader(data))
    );
  }

  AllowancesByGranter(
    request: QueryAllowancesByGranterRequest
  ): Promise<QueryAllowancesByGranterResponse> {
    const data = QueryAllowancesByGranterRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.feegrant.v1beta1.Query",
      "AllowancesByGranter",
      data
    );
    return promise.then((data) =>
      QueryAllowancesByGranterResponse.decode(new _m0.Reader(data))
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
