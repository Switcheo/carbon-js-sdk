/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Sequence } from "./genesis";

export const protobufPackage = "Switcheo.carbon.sequence";

export interface QuerySequenceRequest {
  module: string;
}

export interface QuerySequenceResponse {
  sequences: Sequence[];
}

export interface QuerySequenceAllRequest {
  pagination?: PageRequest;
}

export interface QuerySequenceAllResponse {
  sequences: Sequence[];
  pagination?: PageResponse;
}

const baseQuerySequenceRequest: object = { module: "" };

export const QuerySequenceRequest = {
  encode(
    message: QuerySequenceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySequenceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuerySequenceRequest } as QuerySequenceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.module = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySequenceRequest {
    const message = { ...baseQuerySequenceRequest } as QuerySequenceRequest;
    message.module =
      object.module !== undefined && object.module !== null
        ? String(object.module)
        : "";
    return message;
  },

  toJSON(message: QuerySequenceRequest): unknown {
    const obj: any = {};
    message.module !== undefined && (obj.module = message.module);
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySequenceRequest>): QuerySequenceRequest {
    const message = { ...baseQuerySequenceRequest } as QuerySequenceRequest;
    message.module = object.module ?? "";
    return message;
  },
};

const baseQuerySequenceResponse: object = {};

export const QuerySequenceResponse = {
  encode(
    message: QuerySequenceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.sequences) {
      Sequence.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySequenceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuerySequenceResponse } as QuerySequenceResponse;
    message.sequences = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequences.push(Sequence.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySequenceResponse {
    const message = { ...baseQuerySequenceResponse } as QuerySequenceResponse;
    message.sequences = (object.sequences ?? []).map((e: any) =>
      Sequence.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QuerySequenceResponse): unknown {
    const obj: any = {};
    if (message.sequences) {
      obj.sequences = message.sequences.map((e) =>
        e ? Sequence.toJSON(e) : undefined
      );
    } else {
      obj.sequences = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QuerySequenceResponse>
  ): QuerySequenceResponse {
    const message = { ...baseQuerySequenceResponse } as QuerySequenceResponse;
    message.sequences = (object.sequences ?? []).map((e) =>
      Sequence.fromPartial(e)
    );
    return message;
  },
};

const baseQuerySequenceAllRequest: object = {};

export const QuerySequenceAllRequest = {
  encode(
    message: QuerySequenceAllRequest,
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
  ): QuerySequenceAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQuerySequenceAllRequest,
    } as QuerySequenceAllRequest;
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

  fromJSON(object: any): QuerySequenceAllRequest {
    const message = {
      ...baseQuerySequenceAllRequest,
    } as QuerySequenceAllRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QuerySequenceAllRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QuerySequenceAllRequest>
  ): QuerySequenceAllRequest {
    const message = {
      ...baseQuerySequenceAllRequest,
    } as QuerySequenceAllRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQuerySequenceAllResponse: object = {};

export const QuerySequenceAllResponse = {
  encode(
    message: QuerySequenceAllResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.sequences) {
      Sequence.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QuerySequenceAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQuerySequenceAllResponse,
    } as QuerySequenceAllResponse;
    message.sequences = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequences.push(Sequence.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QuerySequenceAllResponse {
    const message = {
      ...baseQuerySequenceAllResponse,
    } as QuerySequenceAllResponse;
    message.sequences = (object.sequences ?? []).map((e: any) =>
      Sequence.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QuerySequenceAllResponse): unknown {
    const obj: any = {};
    if (message.sequences) {
      obj.sequences = message.sequences.map((e) =>
        e ? Sequence.toJSON(e) : undefined
      );
    } else {
      obj.sequences = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QuerySequenceAllResponse>
  ): QuerySequenceAllResponse {
    const message = {
      ...baseQuerySequenceAllResponse,
    } as QuerySequenceAllResponse;
    message.sequences = (object.sequences ?? []).map((e) =>
      Sequence.fromPartial(e)
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
  /** get sequence number by module */
  Sequence(request: QuerySequenceRequest): Promise<QuerySequenceResponse>;
  SequenceAll(
    request: QuerySequenceAllRequest
  ): Promise<QuerySequenceAllResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Sequence = this.Sequence.bind(this);
    this.SequenceAll = this.SequenceAll.bind(this);
  }
  Sequence(request: QuerySequenceRequest): Promise<QuerySequenceResponse> {
    const data = QuerySequenceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.sequence.Query",
      "Sequence",
      data
    );
    return promise.then((data) =>
      QuerySequenceResponse.decode(new _m0.Reader(data))
    );
  }

  SequenceAll(
    request: QuerySequenceAllRequest
  ): Promise<QuerySequenceAllResponse> {
    const data = QuerySequenceAllRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.sequence.Query",
      "SequenceAll",
      data
    );
    return promise.then((data) =>
      QuerySequenceAllResponse.decode(new _m0.Reader(data))
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
