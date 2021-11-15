/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Oracle, Result, Vote } from "../oracle/oracle";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "Switcheo.carbon.oracle";

/** this line is used by starport scaffolding # 3 */
export interface QueryOracleInfoRequest {
  id: string;
}

export interface QueryOracleInfoResponse {
  Oracle?: Oracle;
}

export interface QueryOracleListRequest {
  pagination?: PageRequest;
}

export interface QueryOracleListResponse {
  oracles: Oracle[];
  pagination?: PageResponse;
}

export interface QueryResultListRequest {
  pagination?: PageRequest;
}

export interface QueryResultListResponse {
  results: Result[];
  pagination?: PageResponse;
}

export interface QueryVoteListRequest {
  pagination?: PageRequest;
}

export interface QueryVoteListResponse {
  votes: Vote[];
  pagination?: PageResponse;
}

export interface QueryVoterPowerRequest {
  address: string;
}

export interface QueryVoterPowerResponse {
  Power: string;
}

const baseQueryOracleInfoRequest: object = { id: "" };

export const QueryOracleInfoRequest = {
  encode(
    message: QueryOracleInfoRequest,
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
  ): QueryOracleInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryOracleInfoRequest } as QueryOracleInfoRequest;
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

  fromJSON(object: any): QueryOracleInfoRequest {
    const message = { ...baseQueryOracleInfoRequest } as QueryOracleInfoRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: QueryOracleInfoRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryOracleInfoRequest>
  ): QueryOracleInfoRequest {
    const message = { ...baseQueryOracleInfoRequest } as QueryOracleInfoRequest;
    message.id = object.id ?? "";
    return message;
  },
};

const baseQueryOracleInfoResponse: object = {};

export const QueryOracleInfoResponse = {
  encode(
    message: QueryOracleInfoResponse,
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
  ): QueryOracleInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryOracleInfoResponse,
    } as QueryOracleInfoResponse;
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

  fromJSON(object: any): QueryOracleInfoResponse {
    const message = {
      ...baseQueryOracleInfoResponse,
    } as QueryOracleInfoResponse;
    if (object.Oracle !== undefined && object.Oracle !== null) {
      message.Oracle = Oracle.fromJSON(object.Oracle);
    } else {
      message.Oracle = undefined;
    }
    return message;
  },

  toJSON(message: QueryOracleInfoResponse): unknown {
    const obj: any = {};
    message.Oracle !== undefined &&
      (obj.Oracle = message.Oracle ? Oracle.toJSON(message.Oracle) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryOracleInfoResponse>
  ): QueryOracleInfoResponse {
    const message = {
      ...baseQueryOracleInfoResponse,
    } as QueryOracleInfoResponse;
    if (object.Oracle !== undefined && object.Oracle !== null) {
      message.Oracle = Oracle.fromPartial(object.Oracle);
    } else {
      message.Oracle = undefined;
    }
    return message;
  },
};

const baseQueryOracleListRequest: object = {};

export const QueryOracleListRequest = {
  encode(
    message: QueryOracleListRequest,
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
  ): QueryOracleListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryOracleListRequest } as QueryOracleListRequest;
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

  fromJSON(object: any): QueryOracleListRequest {
    const message = { ...baseQueryOracleListRequest } as QueryOracleListRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryOracleListRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryOracleListRequest>
  ): QueryOracleListRequest {
    const message = { ...baseQueryOracleListRequest } as QueryOracleListRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryOracleListResponse: object = {};

export const QueryOracleListResponse = {
  encode(
    message: QueryOracleListResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.oracles) {
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
  ): QueryOracleListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryOracleListResponse,
    } as QueryOracleListResponse;
    message.oracles = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracles.push(Oracle.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryOracleListResponse {
    const message = {
      ...baseQueryOracleListResponse,
    } as QueryOracleListResponse;
    message.oracles = [];
    if (object.oracles !== undefined && object.oracles !== null) {
      for (const e of object.oracles) {
        message.oracles.push(Oracle.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryOracleListResponse): unknown {
    const obj: any = {};
    if (message.oracles) {
      obj.oracles = message.oracles.map((e) =>
        e ? Oracle.toJSON(e) : undefined
      );
    } else {
      obj.oracles = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryOracleListResponse>
  ): QueryOracleListResponse {
    const message = {
      ...baseQueryOracleListResponse,
    } as QueryOracleListResponse;
    message.oracles = [];
    if (object.oracles !== undefined && object.oracles !== null) {
      for (const e of object.oracles) {
        message.oracles.push(Oracle.fromPartial(e));
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

const baseQueryResultListRequest: object = {};

export const QueryResultListRequest = {
  encode(
    message: QueryResultListRequest,
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
  ): QueryResultListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryResultListRequest } as QueryResultListRequest;
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

  fromJSON(object: any): QueryResultListRequest {
    const message = { ...baseQueryResultListRequest } as QueryResultListRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryResultListRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryResultListRequest>
  ): QueryResultListRequest {
    const message = { ...baseQueryResultListRequest } as QueryResultListRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryResultListResponse: object = {};

export const QueryResultListResponse = {
  encode(
    message: QueryResultListResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.results) {
      Result.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryResultListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryResultListResponse,
    } as QueryResultListResponse;
    message.results = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(Result.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryResultListResponse {
    const message = {
      ...baseQueryResultListResponse,
    } as QueryResultListResponse;
    message.results = [];
    if (object.results !== undefined && object.results !== null) {
      for (const e of object.results) {
        message.results.push(Result.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryResultListResponse): unknown {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map((e) =>
        e ? Result.toJSON(e) : undefined
      );
    } else {
      obj.results = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryResultListResponse>
  ): QueryResultListResponse {
    const message = {
      ...baseQueryResultListResponse,
    } as QueryResultListResponse;
    message.results = [];
    if (object.results !== undefined && object.results !== null) {
      for (const e of object.results) {
        message.results.push(Result.fromPartial(e));
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

const baseQueryVoteListRequest: object = {};

export const QueryVoteListRequest = {
  encode(
    message: QueryVoteListRequest,
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
  ): QueryVoteListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryVoteListRequest } as QueryVoteListRequest;
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

  fromJSON(object: any): QueryVoteListRequest {
    const message = { ...baseQueryVoteListRequest } as QueryVoteListRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryVoteListRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryVoteListRequest>): QueryVoteListRequest {
    const message = { ...baseQueryVoteListRequest } as QueryVoteListRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryVoteListResponse: object = {};

export const QueryVoteListResponse = {
  encode(
    message: QueryVoteListResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryVoteListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryVoteListResponse } as QueryVoteListResponse;
    message.votes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(Vote.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryVoteListResponse {
    const message = { ...baseQueryVoteListResponse } as QueryVoteListResponse;
    message.votes = [];
    if (object.votes !== undefined && object.votes !== null) {
      for (const e of object.votes) {
        message.votes.push(Vote.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryVoteListResponse): unknown {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map((e) => (e ? Vote.toJSON(e) : undefined));
    } else {
      obj.votes = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryVoteListResponse>
  ): QueryVoteListResponse {
    const message = { ...baseQueryVoteListResponse } as QueryVoteListResponse;
    message.votes = [];
    if (object.votes !== undefined && object.votes !== null) {
      for (const e of object.votes) {
        message.votes.push(Vote.fromPartial(e));
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

const baseQueryVoterPowerRequest: object = { address: "" };

export const QueryVoterPowerRequest = {
  encode(
    message: QueryVoterPowerRequest,
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
  ): QueryVoterPowerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryVoterPowerRequest } as QueryVoterPowerRequest;
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

  fromJSON(object: any): QueryVoterPowerRequest {
    const message = { ...baseQueryVoterPowerRequest } as QueryVoterPowerRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryVoterPowerRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryVoterPowerRequest>
  ): QueryVoterPowerRequest {
    const message = { ...baseQueryVoterPowerRequest } as QueryVoterPowerRequest;
    message.address = object.address ?? "";
    return message;
  },
};

const baseQueryVoterPowerResponse: object = { Power: "" };

export const QueryVoterPowerResponse = {
  encode(
    message: QueryVoterPowerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Power !== "") {
      writer.uint32(10).string(message.Power);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryVoterPowerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryVoterPowerResponse,
    } as QueryVoterPowerResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Power = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVoterPowerResponse {
    const message = {
      ...baseQueryVoterPowerResponse,
    } as QueryVoterPowerResponse;
    if (object.Power !== undefined && object.Power !== null) {
      message.Power = String(object.Power);
    } else {
      message.Power = "";
    }
    return message;
  },

  toJSON(message: QueryVoterPowerResponse): unknown {
    const obj: any = {};
    message.Power !== undefined && (obj.Power = message.Power);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryVoterPowerResponse>
  ): QueryVoterPowerResponse {
    const message = {
      ...baseQueryVoterPowerResponse,
    } as QueryVoterPowerResponse;
    message.Power = object.Power ?? "";
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  OracleInfo(request: QueryOracleInfoRequest): Promise<QueryOracleInfoResponse>;
  OracleList(request: QueryOracleListRequest): Promise<QueryOracleListResponse>;
  ResultList(request: QueryResultListRequest): Promise<QueryResultListResponse>;
  VoteList(request: QueryVoteListRequest): Promise<QueryVoteListResponse>;
  VoterPower(request: QueryVoterPowerRequest): Promise<QueryVoterPowerResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.OracleInfo = this.OracleInfo.bind(this);
    this.OracleList = this.OracleList.bind(this);
    this.ResultList = this.ResultList.bind(this);
    this.VoteList = this.VoteList.bind(this);
    this.VoterPower = this.VoterPower.bind(this);
  }
  OracleInfo(
    request: QueryOracleInfoRequest
  ): Promise<QueryOracleInfoResponse> {
    const data = QueryOracleInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.oracle.Query",
      "OracleInfo",
      data
    );
    return promise.then((data) =>
      QueryOracleInfoResponse.decode(new _m0.Reader(data))
    );
  }

  OracleList(
    request: QueryOracleListRequest
  ): Promise<QueryOracleListResponse> {
    const data = QueryOracleListRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.oracle.Query",
      "OracleList",
      data
    );
    return promise.then((data) =>
      QueryOracleListResponse.decode(new _m0.Reader(data))
    );
  }

  ResultList(
    request: QueryResultListRequest
  ): Promise<QueryResultListResponse> {
    const data = QueryResultListRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.oracle.Query",
      "ResultList",
      data
    );
    return promise.then((data) =>
      QueryResultListResponse.decode(new _m0.Reader(data))
    );
  }

  VoteList(request: QueryVoteListRequest): Promise<QueryVoteListResponse> {
    const data = QueryVoteListRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.oracle.Query",
      "VoteList",
      data
    );
    return promise.then((data) =>
      QueryVoteListResponse.decode(new _m0.Reader(data))
    );
  }

  VoterPower(
    request: QueryVoterPowerRequest
  ): Promise<QueryVoterPowerResponse> {
    const data = QueryVoterPowerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.oracle.Query",
      "VoterPower",
      data
    );
    return promise.then((data) =>
      QueryVoterPowerResponse.decode(new _m0.Reader(data))
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
