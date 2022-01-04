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
export interface QueryOracleRequest {
  id: string;
}

export interface QueryOracleResponse {
  oracle?: Oracle;
}

export interface QueryAllOracleRequest {
  pagination?: PageRequest;
}

export interface QueryAllOracleResponse {
  oracles: Oracle[];
  pagination?: PageResponse;
}

export interface QueryAllResultRequest {
  oracleId: string;
  pagination?: PageRequest;
}

export interface QueryAllResultResponse {
  results: Result[];
  pagination?: PageResponse;
}

export interface QueryAllVoteRequest {
  oracleId: string;
  timestamp: Long;
  voter: string;
  pagination?: PageRequest;
}

export interface QueryAllVoteResponse {
  votes: Vote[];
  pagination?: PageResponse;
}

export interface QueryVoterPowerRequest {
  address: string;
}

export interface QueryVoterPowerResponse {
  power: string;
}

const baseQueryOracleRequest: object = { id: "" };

export const QueryOracleRequest = {
  encode(
    message: QueryOracleRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOracleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryOracleRequest } as QueryOracleRequest;
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

  fromJSON(object: any): QueryOracleRequest {
    const message = { ...baseQueryOracleRequest } as QueryOracleRequest;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    return message;
  },

  toJSON(message: QueryOracleRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryOracleRequest>): QueryOracleRequest {
    const message = { ...baseQueryOracleRequest } as QueryOracleRequest;
    message.id = object.id ?? "";
    return message;
  },
};

const baseQueryOracleResponse: object = {};

export const QueryOracleResponse = {
  encode(
    message: QueryOracleResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.oracle !== undefined) {
      Oracle.encode(message.oracle, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOracleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryOracleResponse } as QueryOracleResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracle = Oracle.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOracleResponse {
    const message = { ...baseQueryOracleResponse } as QueryOracleResponse;
    message.oracle =
      object.oracle !== undefined && object.oracle !== null
        ? Oracle.fromJSON(object.oracle)
        : undefined;
    return message;
  },

  toJSON(message: QueryOracleResponse): unknown {
    const obj: any = {};
    message.oracle !== undefined &&
      (obj.oracle = message.oracle ? Oracle.toJSON(message.oracle) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryOracleResponse>): QueryOracleResponse {
    const message = { ...baseQueryOracleResponse } as QueryOracleResponse;
    message.oracle =
      object.oracle !== undefined && object.oracle !== null
        ? Oracle.fromPartial(object.oracle)
        : undefined;
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
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
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
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllOracleResponse: object = {};

export const QueryAllOracleResponse = {
  encode(
    message: QueryAllOracleResponse,
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
  ): QueryAllOracleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllOracleResponse } as QueryAllOracleResponse;
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

  fromJSON(object: any): QueryAllOracleResponse {
    const message = { ...baseQueryAllOracleResponse } as QueryAllOracleResponse;
    message.oracles = (object.oracles ?? []).map((e: any) =>
      Oracle.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllOracleResponse): unknown {
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
    object: DeepPartial<QueryAllOracleResponse>
  ): QueryAllOracleResponse {
    const message = { ...baseQueryAllOracleResponse } as QueryAllOracleResponse;
    message.oracles = (object.oracles ?? []).map((e) => Oracle.fromPartial(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllResultRequest: object = { oracleId: "" };

export const QueryAllResultRequest = {
  encode(
    message: QueryAllResultRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.oracleId !== "") {
      writer.uint32(10).string(message.oracleId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllResultRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllResultRequest } as QueryAllResultRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleId = reader.string();
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

  fromJSON(object: any): QueryAllResultRequest {
    const message = { ...baseQueryAllResultRequest } as QueryAllResultRequest;
    message.oracleId =
      object.oracleId !== undefined && object.oracleId !== null
        ? String(object.oracleId)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllResultRequest): unknown {
    const obj: any = {};
    message.oracleId !== undefined && (obj.oracleId = message.oracleId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllResultRequest>
  ): QueryAllResultRequest {
    const message = { ...baseQueryAllResultRequest } as QueryAllResultRequest;
    message.oracleId = object.oracleId ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllResultResponse: object = {};

export const QueryAllResultResponse = {
  encode(
    message: QueryAllResultResponse,
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
  ): QueryAllResultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllResultResponse } as QueryAllResultResponse;
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

  fromJSON(object: any): QueryAllResultResponse {
    const message = { ...baseQueryAllResultResponse } as QueryAllResultResponse;
    message.results = (object.results ?? []).map((e: any) =>
      Result.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllResultResponse): unknown {
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
    object: DeepPartial<QueryAllResultResponse>
  ): QueryAllResultResponse {
    const message = { ...baseQueryAllResultResponse } as QueryAllResultResponse;
    message.results = (object.results ?? []).map((e) => Result.fromPartial(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllVoteRequest: object = {
  oracleId: "",
  timestamp: Long.ZERO,
  voter: "",
};

export const QueryAllVoteRequest = {
  encode(
    message: QueryAllVoteRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.oracleId !== "") {
      writer.uint32(10).string(message.oracleId);
    }
    if (!message.timestamp.isZero()) {
      writer.uint32(16).int64(message.timestamp);
    }
    if (message.voter !== "") {
      writer.uint32(26).string(message.voter);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllVoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllVoteRequest } as QueryAllVoteRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleId = reader.string();
          break;
        case 2:
          message.timestamp = reader.int64() as Long;
          break;
        case 3:
          message.voter = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllVoteRequest {
    const message = { ...baseQueryAllVoteRequest } as QueryAllVoteRequest;
    message.oracleId =
      object.oracleId !== undefined && object.oracleId !== null
        ? String(object.oracleId)
        : "";
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Long.fromString(object.timestamp)
        : Long.ZERO;
    message.voter =
      object.voter !== undefined && object.voter !== null
        ? String(object.voter)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllVoteRequest): unknown {
    const obj: any = {};
    message.oracleId !== undefined && (obj.oracleId = message.oracleId);
    message.timestamp !== undefined &&
      (obj.timestamp = (message.timestamp || Long.ZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllVoteRequest>): QueryAllVoteRequest {
    const message = { ...baseQueryAllVoteRequest } as QueryAllVoteRequest;
    message.oracleId = object.oracleId ?? "";
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Long.fromValue(object.timestamp)
        : Long.ZERO;
    message.voter = object.voter ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllVoteResponse: object = {};

export const QueryAllVoteResponse = {
  encode(
    message: QueryAllVoteResponse,
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
  ): QueryAllVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllVoteResponse } as QueryAllVoteResponse;
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

  fromJSON(object: any): QueryAllVoteResponse {
    const message = { ...baseQueryAllVoteResponse } as QueryAllVoteResponse;
    message.votes = (object.votes ?? []).map((e: any) => Vote.fromJSON(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllVoteResponse): unknown {
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

  fromPartial(object: DeepPartial<QueryAllVoteResponse>): QueryAllVoteResponse {
    const message = { ...baseQueryAllVoteResponse } as QueryAllVoteResponse;
    message.votes = (object.votes ?? []).map((e) => Vote.fromPartial(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
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
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
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

const baseQueryVoterPowerResponse: object = { power: "" };

export const QueryVoterPowerResponse = {
  encode(
    message: QueryVoterPowerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.power !== "") {
      writer.uint32(10).string(message.power);
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
          message.power = reader.string();
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
    message.power =
      object.power !== undefined && object.power !== null
        ? String(object.power)
        : "";
    return message;
  },

  toJSON(message: QueryVoterPowerResponse): unknown {
    const obj: any = {};
    message.power !== undefined && (obj.power = message.power);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryVoterPowerResponse>
  ): QueryVoterPowerResponse {
    const message = {
      ...baseQueryVoterPowerResponse,
    } as QueryVoterPowerResponse;
    message.power = object.power ?? "";
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Get details for an oracle */
  Oracle(request: QueryOracleRequest): Promise<QueryOracleResponse>;
  /** Get details for all oracles */
  OracleAll(request: QueryAllOracleRequest): Promise<QueryAllOracleResponse>;
  /** Get all oracle results */
  ResultAll(request: QueryAllResultRequest): Promise<QueryAllResultResponse>;
  /** Get all oracle votes */
  VoteAll(request: QueryAllVoteRequest): Promise<QueryAllVoteResponse>;
  /** Get voting power for an address */
  VoterPower(request: QueryVoterPowerRequest): Promise<QueryVoterPowerResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Oracle = this.Oracle.bind(this);
    this.OracleAll = this.OracleAll.bind(this);
    this.ResultAll = this.ResultAll.bind(this);
    this.VoteAll = this.VoteAll.bind(this);
    this.VoterPower = this.VoterPower.bind(this);
  }
  Oracle(request: QueryOracleRequest): Promise<QueryOracleResponse> {
    const data = QueryOracleRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.oracle.Query",
      "Oracle",
      data
    );
    return promise.then((data) =>
      QueryOracleResponse.decode(new _m0.Reader(data))
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

  ResultAll(request: QueryAllResultRequest): Promise<QueryAllResultResponse> {
    const data = QueryAllResultRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.oracle.Query",
      "ResultAll",
      data
    );
    return promise.then((data) =>
      QueryAllResultResponse.decode(new _m0.Reader(data))
    );
  }

  VoteAll(request: QueryAllVoteRequest): Promise<QueryAllVoteResponse> {
    const data = QueryAllVoteRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.oracle.Query",
      "VoteAll",
      data
    );
    return promise.then((data) =>
      QueryAllVoteResponse.decode(new _m0.Reader(data))
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
