/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
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

function createBaseQuerySequenceRequest(): QuerySequenceRequest {
  return { module: "" };
}

export const QuerySequenceRequest = {
  encode(message: QuerySequenceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySequenceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySequenceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.module = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuerySequenceRequest {
    return { module: isSet(object.module) ? String(object.module) : "" };
  },

  toJSON(message: QuerySequenceRequest): unknown {
    const obj: any = {};
    message.module !== undefined && (obj.module = message.module);
    return obj;
  },

  create(base?: DeepPartial<QuerySequenceRequest>): QuerySequenceRequest {
    return QuerySequenceRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QuerySequenceRequest>): QuerySequenceRequest {
    const message = createBaseQuerySequenceRequest();
    message.module = object.module ?? "";
    return message;
  },
};

function createBaseQuerySequenceResponse(): QuerySequenceResponse {
  return { sequences: [] };
}

export const QuerySequenceResponse = {
  encode(message: QuerySequenceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.sequences) {
      Sequence.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySequenceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySequenceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sequences.push(Sequence.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuerySequenceResponse {
    return {
      sequences: Array.isArray(object?.sequences) ? object.sequences.map((e: any) => Sequence.fromJSON(e)) : [],
    };
  },

  toJSON(message: QuerySequenceResponse): unknown {
    const obj: any = {};
    if (message.sequences) {
      obj.sequences = message.sequences.map((e) => e ? Sequence.toJSON(e) : undefined);
    } else {
      obj.sequences = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QuerySequenceResponse>): QuerySequenceResponse {
    return QuerySequenceResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QuerySequenceResponse>): QuerySequenceResponse {
    const message = createBaseQuerySequenceResponse();
    message.sequences = object.sequences?.map((e) => Sequence.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQuerySequenceAllRequest(): QuerySequenceAllRequest {
  return { pagination: undefined };
}

export const QuerySequenceAllRequest = {
  encode(message: QuerySequenceAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySequenceAllRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySequenceAllRequest();
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

  fromJSON(object: any): QuerySequenceAllRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QuerySequenceAllRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QuerySequenceAllRequest>): QuerySequenceAllRequest {
    return QuerySequenceAllRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QuerySequenceAllRequest>): QuerySequenceAllRequest {
    const message = createBaseQuerySequenceAllRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQuerySequenceAllResponse(): QuerySequenceAllResponse {
  return { sequences: [], pagination: undefined };
}

export const QuerySequenceAllResponse = {
  encode(message: QuerySequenceAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.sequences) {
      Sequence.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySequenceAllResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySequenceAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sequences.push(Sequence.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QuerySequenceAllResponse {
    return {
      sequences: Array.isArray(object?.sequences) ? object.sequences.map((e: any) => Sequence.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QuerySequenceAllResponse): unknown {
    const obj: any = {};
    if (message.sequences) {
      obj.sequences = message.sequences.map((e) => e ? Sequence.toJSON(e) : undefined);
    } else {
      obj.sequences = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QuerySequenceAllResponse>): QuerySequenceAllResponse {
    return QuerySequenceAllResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QuerySequenceAllResponse>): QuerySequenceAllResponse {
    const message = createBaseQuerySequenceAllResponse();
    message.sequences = object.sequences?.map((e) => Sequence.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** get sequence number by module */
  Sequence(request: QuerySequenceRequest): Promise<QuerySequenceResponse>;
  SequenceAll(request: QuerySequenceAllRequest): Promise<QuerySequenceAllResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.sequence.Query";
    this.rpc = rpc;
    this.Sequence = this.Sequence.bind(this);
    this.SequenceAll = this.SequenceAll.bind(this);
  }
  Sequence(request: QuerySequenceRequest): Promise<QuerySequenceResponse> {
    const data = QuerySequenceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Sequence", data);
    return promise.then((data) => QuerySequenceResponse.decode(_m0.Reader.create(data)));
  }

  SequenceAll(request: QuerySequenceAllRequest): Promise<QuerySequenceAllResponse> {
    const data = QuerySequenceAllRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SequenceAll", data);
    return promise.then((data) => QuerySequenceAllResponse.decode(_m0.Reader.create(data)));
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
