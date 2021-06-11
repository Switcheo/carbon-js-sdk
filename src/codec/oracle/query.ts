/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Oracle } from "../oracle/oracle";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "Switcheo.carbon.oracle";

/** this line is used by starport scaffolding # 3 */
export interface QueryGetOracleRequest {
  id: string;
}

export interface QueryGetOracleResponse {
  Oracle?: Oracle;
}

export interface QueryAllOracleRequest {
  pagination?: PageRequest;
}

export interface QueryAllOracleResponse {
  Oracle: Oracle[];
  pagination?: PageResponse;
}

const baseQueryGetOracleRequest: object = { id: "" };

export const QueryGetOracleRequest = {
  encode(
    message: QueryGetOracleRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetOracleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetOracleRequest } as QueryGetOracleRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetOracleRequest {
    const message = { ...baseQueryGetOracleRequest } as QueryGetOracleRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: QueryGetOracleRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetOracleRequest>
  ): QueryGetOracleRequest {
    const message = { ...baseQueryGetOracleRequest } as QueryGetOracleRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
};

const baseQueryGetOracleResponse: object = {};

export const QueryGetOracleResponse = {
  encode(
    message: QueryGetOracleResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Oracle !== undefined) {
      Oracle.encode(message.Oracle, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetOracleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetOracleResponse } as QueryGetOracleResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Oracle = Oracle.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetOracleResponse {
    const message = { ...baseQueryGetOracleResponse } as QueryGetOracleResponse;
    if (object.Oracle !== undefined && object.Oracle !== null) {
      message.Oracle = Oracle.fromJSON(object.Oracle);
    } else {
      message.Oracle = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetOracleResponse): unknown {
    const obj: any = {};
    message.Oracle !== undefined &&
      (obj.Oracle = message.Oracle ? Oracle.toJSON(message.Oracle) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetOracleResponse>
  ): QueryGetOracleResponse {
    const message = { ...baseQueryGetOracleResponse } as QueryGetOracleResponse;
    if (object.Oracle !== undefined && object.Oracle !== null) {
      message.Oracle = Oracle.fromPartial(object.Oracle);
    } else {
      message.Oracle = undefined;
    }
    return message;
  },
};

const baseQueryAllOracleRequest: object = {};

export const QueryAllOracleRequest = {
  encode(
    message: QueryAllOracleRequest,
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
  ): QueryAllOracleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllOracleRequest } as QueryAllOracleRequest;
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

  fromJSON(object: any): QueryAllOracleRequest {
    const message = { ...baseQueryAllOracleRequest } as QueryAllOracleRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllOracleRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllOracleRequest>
  ): QueryAllOracleRequest {
    const message = { ...baseQueryAllOracleRequest } as QueryAllOracleRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllOracleResponse: object = {};

export const QueryAllOracleResponse = {
  encode(
    message: QueryAllOracleResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.Oracle) {
      Oracle.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllOracleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllOracleResponse } as QueryAllOracleResponse;
    message.Oracle = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Oracle.push(Oracle.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllOracleResponse {
    const message = { ...baseQueryAllOracleResponse } as QueryAllOracleResponse;
    message.Oracle = [];
    if (object.Oracle !== undefined && object.Oracle !== null) {
      for (const e of object.Oracle) {
        message.Oracle.push(Oracle.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllOracleResponse): unknown {
    const obj: any = {};
    if (message.Oracle) {
      obj.Oracle = message.Oracle.map((e) =>
        e ? Oracle.toJSON(e) : undefined
      );
    } else {
      obj.Oracle = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllOracleResponse>
  ): QueryAllOracleResponse {
    const message = { ...baseQueryAllOracleResponse } as QueryAllOracleResponse;
    message.Oracle = [];
    if (object.Oracle !== undefined && object.Oracle !== null) {
      for (const e of object.Oracle) {
        message.Oracle.push(Oracle.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  Oracle(request: QueryGetOracleRequest): Promise<QueryGetOracleResponse>;
  OracleAll(request: QueryAllOracleRequest): Promise<QueryAllOracleResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Oracle = this.Oracle.bind(this);
    this.OracleAll = this.OracleAll.bind(this);
  }
  Oracle(request: QueryGetOracleRequest): Promise<QueryGetOracleResponse> {
    const data = QueryGetOracleRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.oracle.Query",
      "Oracle",
      data
    );
    return promise.then((data) =>
      QueryGetOracleResponse.decode(new _m0.Reader(data))
    );
  }

  OracleAll(request: QueryAllOracleRequest): Promise<QueryAllOracleResponse> {
    const data = QueryAllOracleRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.oracle.Query",
      "OracleAll",
      data
    );
    return promise.then((data) =>
      QueryAllOracleResponse.decode(new _m0.Reader(data))
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
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
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
