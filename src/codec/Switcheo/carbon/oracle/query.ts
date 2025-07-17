/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { HistoricalBucketInfo, HistoricalResults } from "./historical";
import { Contract, Oracle, Result } from "./oracle";
import { Params } from "./params";
import { OracleVotesWindow, SlashCounter } from "./slashing";

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

export interface QueryResultsRequest {
  oracleId: string;
  pagination?: PageRequest;
}

export interface QueryResultsResponse {
  results: Result[];
  pagination?: PageResponse;
}

export interface QueryResultsLatestRequest {
  pagination?: PageRequest;
}

export interface QueryResultsLatestResponse {
  latestResults: Result[];
  pagination?: PageResponse;
}

export interface QueryResultLatestRequest {
  oracleId: string;
}

export interface QueryResultLatestResponse {
  result?: Result;
}

export interface QueryVoterPowerRequest {
  address: string;
}

export interface QueryVoterPowerResponse {
  power: string;
}

export interface QueryAllSlashCounterRequest {
  pagination?: PageRequest;
}

export interface QueryAllSlashCounterResponse {
  slashCounters: SlashCounter[];
  pagination?: PageResponse;
}

export interface QuerySlashCounterRequest {
  valoperAddress: string;
}

export interface QuerySlashCounterResponse {
  slashCounter?: SlashCounter;
}

export interface QueryAllOracleVotesWindowRequest {
  pagination?: PageRequest;
}

export interface QueryAllOracleVotesWindowResponse {
  oracleVotesWindows: OracleVotesWindow[];
  pagination?: PageResponse;
}

export interface QueryOracleVotesWindowRequest {
  valoperAddress: string;
  pagination?: PageRequest;
}

export interface QueryOracleVotesWindowResponse {
  oracleVotesWindows: OracleVotesWindow[];
  pagination?: PageResponse;
}

export interface QueryAllHistoricalBucketInfoRequest {
  pagination?: PageRequest;
}

export interface QueryAllHistoricalBucketInfoResponse {
  allHistoricalBucketInfo: HistoricalBucketInfo[];
  pagination?: PageResponse;
}

export interface QueryHistoricalResultsRequest {
  oracleId: string;
  bucketId: Long;
  pagination?: PageRequest;
}

export interface QueryHistoricalResultsResponse {
  historicalResultsForBuckets: HistoricalResults[];
  pagination?: PageResponse;
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

export interface QueryContractAddressRequest {
  id: string;
}

export interface QueryContractAddressResponse {
  address: string;
}

export interface QueryContractAllRequest {
}

export interface QueryContractAllResponse {
  contracts: Contract[];
}

export interface QueryContractParamsRequest {
  id: string;
}

export interface QueryContractParamsResponse {
  id: string;
  creator: string;
  decimals: Long;
  timestamp: string;
  data: string;
}

function createBaseQueryOracleRequest(): QueryOracleRequest {
  return { id: "" };
}

export const QueryOracleRequest = {
  encode(message: QueryOracleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOracleRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryOracleRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: QueryOracleRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create(base?: DeepPartial<QueryOracleRequest>): QueryOracleRequest {
    return QueryOracleRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryOracleRequest>): QueryOracleRequest {
    const message = createBaseQueryOracleRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseQueryOracleResponse(): QueryOracleResponse {
  return { oracle: undefined };
}

export const QueryOracleResponse = {
  encode(message: QueryOracleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oracle !== undefined) {
      Oracle.encode(message.oracle, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOracleResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.oracle = Oracle.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryOracleResponse {
    return { oracle: isSet(object.oracle) ? Oracle.fromJSON(object.oracle) : undefined };
  },

  toJSON(message: QueryOracleResponse): unknown {
    const obj: any = {};
    message.oracle !== undefined && (obj.oracle = message.oracle ? Oracle.toJSON(message.oracle) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryOracleResponse>): QueryOracleResponse {
    return QueryOracleResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryOracleResponse>): QueryOracleResponse {
    const message = createBaseQueryOracleResponse();
    message.oracle = (object.oracle !== undefined && object.oracle !== null)
      ? Oracle.fromPartial(object.oracle)
      : undefined;
    return message;
  },
};

function createBaseQueryAllOracleRequest(): QueryAllOracleRequest {
  return { pagination: undefined };
}

export const QueryAllOracleRequest = {
  encode(message: QueryAllOracleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOracleRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOracleRequest();
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

  fromJSON(object: any): QueryAllOracleRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllOracleRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllOracleRequest>): QueryAllOracleRequest {
    return QueryAllOracleRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllOracleRequest>): QueryAllOracleRequest {
    const message = createBaseQueryAllOracleRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllOracleResponse(): QueryAllOracleResponse {
  return { oracles: [], pagination: undefined };
}

export const QueryAllOracleResponse = {
  encode(message: QueryAllOracleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.oracles) {
      Oracle.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOracleResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOracleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.oracles.push(Oracle.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllOracleResponse {
    return {
      oracles: Array.isArray(object?.oracles) ? object.oracles.map((e: any) => Oracle.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllOracleResponse): unknown {
    const obj: any = {};
    if (message.oracles) {
      obj.oracles = message.oracles.map((e) => e ? Oracle.toJSON(e) : undefined);
    } else {
      obj.oracles = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllOracleResponse>): QueryAllOracleResponse {
    return QueryAllOracleResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllOracleResponse>): QueryAllOracleResponse {
    const message = createBaseQueryAllOracleResponse();
    message.oracles = object.oracles?.map((e) => Oracle.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryResultsRequest(): QueryResultsRequest {
  return { oracleId: "", pagination: undefined };
}

export const QueryResultsRequest = {
  encode(message: QueryResultsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oracleId !== "") {
      writer.uint32(10).string(message.oracleId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResultsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResultsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.oracleId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): QueryResultsRequest {
    return {
      oracleId: isSet(object.oracleId) ? String(object.oracleId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryResultsRequest): unknown {
    const obj: any = {};
    message.oracleId !== undefined && (obj.oracleId = message.oracleId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryResultsRequest>): QueryResultsRequest {
    return QueryResultsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryResultsRequest>): QueryResultsRequest {
    const message = createBaseQueryResultsRequest();
    message.oracleId = object.oracleId ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryResultsResponse(): QueryResultsResponse {
  return { results: [], pagination: undefined };
}

export const QueryResultsResponse = {
  encode(message: QueryResultsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.results) {
      Result.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResultsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResultsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.results.push(Result.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryResultsResponse {
    return {
      results: Array.isArray(object?.results) ? object.results.map((e: any) => Result.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryResultsResponse): unknown {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map((e) => e ? Result.toJSON(e) : undefined);
    } else {
      obj.results = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryResultsResponse>): QueryResultsResponse {
    return QueryResultsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryResultsResponse>): QueryResultsResponse {
    const message = createBaseQueryResultsResponse();
    message.results = object.results?.map((e) => Result.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryResultsLatestRequest(): QueryResultsLatestRequest {
  return { pagination: undefined };
}

export const QueryResultsLatestRequest = {
  encode(message: QueryResultsLatestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResultsLatestRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResultsLatestRequest();
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

  fromJSON(object: any): QueryResultsLatestRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryResultsLatestRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryResultsLatestRequest>): QueryResultsLatestRequest {
    return QueryResultsLatestRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryResultsLatestRequest>): QueryResultsLatestRequest {
    const message = createBaseQueryResultsLatestRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryResultsLatestResponse(): QueryResultsLatestResponse {
  return { latestResults: [], pagination: undefined };
}

export const QueryResultsLatestResponse = {
  encode(message: QueryResultsLatestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.latestResults) {
      Result.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResultsLatestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResultsLatestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.latestResults.push(Result.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryResultsLatestResponse {
    return {
      latestResults: Array.isArray(object?.latestResults)
        ? object.latestResults.map((e: any) => Result.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryResultsLatestResponse): unknown {
    const obj: any = {};
    if (message.latestResults) {
      obj.latestResults = message.latestResults.map((e) => e ? Result.toJSON(e) : undefined);
    } else {
      obj.latestResults = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryResultsLatestResponse>): QueryResultsLatestResponse {
    return QueryResultsLatestResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryResultsLatestResponse>): QueryResultsLatestResponse {
    const message = createBaseQueryResultsLatestResponse();
    message.latestResults = object.latestResults?.map((e) => Result.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryResultLatestRequest(): QueryResultLatestRequest {
  return { oracleId: "" };
}

export const QueryResultLatestRequest = {
  encode(message: QueryResultLatestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oracleId !== "") {
      writer.uint32(10).string(message.oracleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResultLatestRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResultLatestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.oracleId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryResultLatestRequest {
    return { oracleId: isSet(object.oracleId) ? String(object.oracleId) : "" };
  },

  toJSON(message: QueryResultLatestRequest): unknown {
    const obj: any = {};
    message.oracleId !== undefined && (obj.oracleId = message.oracleId);
    return obj;
  },

  create(base?: DeepPartial<QueryResultLatestRequest>): QueryResultLatestRequest {
    return QueryResultLatestRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryResultLatestRequest>): QueryResultLatestRequest {
    const message = createBaseQueryResultLatestRequest();
    message.oracleId = object.oracleId ?? "";
    return message;
  },
};

function createBaseQueryResultLatestResponse(): QueryResultLatestResponse {
  return { result: undefined };
}

export const QueryResultLatestResponse = {
  encode(message: QueryResultLatestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== undefined) {
      Result.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResultLatestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResultLatestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.result = Result.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryResultLatestResponse {
    return { result: isSet(object.result) ? Result.fromJSON(object.result) : undefined };
  },

  toJSON(message: QueryResultLatestResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result ? Result.toJSON(message.result) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryResultLatestResponse>): QueryResultLatestResponse {
    return QueryResultLatestResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryResultLatestResponse>): QueryResultLatestResponse {
    const message = createBaseQueryResultLatestResponse();
    message.result = (object.result !== undefined && object.result !== null)
      ? Result.fromPartial(object.result)
      : undefined;
    return message;
  },
};

function createBaseQueryVoterPowerRequest(): QueryVoterPowerRequest {
  return { address: "" };
}

export const QueryVoterPowerRequest = {
  encode(message: QueryVoterPowerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoterPowerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoterPowerRequest();
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

  fromJSON(object: any): QueryVoterPowerRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryVoterPowerRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<QueryVoterPowerRequest>): QueryVoterPowerRequest {
    return QueryVoterPowerRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryVoterPowerRequest>): QueryVoterPowerRequest {
    const message = createBaseQueryVoterPowerRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryVoterPowerResponse(): QueryVoterPowerResponse {
  return { power: "" };
}

export const QueryVoterPowerResponse = {
  encode(message: QueryVoterPowerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.power !== "") {
      writer.uint32(10).string(message.power);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoterPowerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoterPowerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.power = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryVoterPowerResponse {
    return { power: isSet(object.power) ? String(object.power) : "" };
  },

  toJSON(message: QueryVoterPowerResponse): unknown {
    const obj: any = {};
    message.power !== undefined && (obj.power = message.power);
    return obj;
  },

  create(base?: DeepPartial<QueryVoterPowerResponse>): QueryVoterPowerResponse {
    return QueryVoterPowerResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryVoterPowerResponse>): QueryVoterPowerResponse {
    const message = createBaseQueryVoterPowerResponse();
    message.power = object.power ?? "";
    return message;
  },
};

function createBaseQueryAllSlashCounterRequest(): QueryAllSlashCounterRequest {
  return { pagination: undefined };
}

export const QueryAllSlashCounterRequest = {
  encode(message: QueryAllSlashCounterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllSlashCounterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllSlashCounterRequest();
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

  fromJSON(object: any): QueryAllSlashCounterRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllSlashCounterRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllSlashCounterRequest>): QueryAllSlashCounterRequest {
    return QueryAllSlashCounterRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllSlashCounterRequest>): QueryAllSlashCounterRequest {
    const message = createBaseQueryAllSlashCounterRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllSlashCounterResponse(): QueryAllSlashCounterResponse {
  return { slashCounters: [], pagination: undefined };
}

export const QueryAllSlashCounterResponse = {
  encode(message: QueryAllSlashCounterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.slashCounters) {
      SlashCounter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllSlashCounterResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllSlashCounterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.slashCounters.push(SlashCounter.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllSlashCounterResponse {
    return {
      slashCounters: Array.isArray(object?.slashCounters)
        ? object.slashCounters.map((e: any) => SlashCounter.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllSlashCounterResponse): unknown {
    const obj: any = {};
    if (message.slashCounters) {
      obj.slashCounters = message.slashCounters.map((e) => e ? SlashCounter.toJSON(e) : undefined);
    } else {
      obj.slashCounters = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllSlashCounterResponse>): QueryAllSlashCounterResponse {
    return QueryAllSlashCounterResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllSlashCounterResponse>): QueryAllSlashCounterResponse {
    const message = createBaseQueryAllSlashCounterResponse();
    message.slashCounters = object.slashCounters?.map((e) => SlashCounter.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQuerySlashCounterRequest(): QuerySlashCounterRequest {
  return { valoperAddress: "" };
}

export const QuerySlashCounterRequest = {
  encode(message: QuerySlashCounterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valoperAddress !== "") {
      writer.uint32(10).string(message.valoperAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySlashCounterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySlashCounterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.valoperAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuerySlashCounterRequest {
    return { valoperAddress: isSet(object.valoperAddress) ? String(object.valoperAddress) : "" };
  },

  toJSON(message: QuerySlashCounterRequest): unknown {
    const obj: any = {};
    message.valoperAddress !== undefined && (obj.valoperAddress = message.valoperAddress);
    return obj;
  },

  create(base?: DeepPartial<QuerySlashCounterRequest>): QuerySlashCounterRequest {
    return QuerySlashCounterRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QuerySlashCounterRequest>): QuerySlashCounterRequest {
    const message = createBaseQuerySlashCounterRequest();
    message.valoperAddress = object.valoperAddress ?? "";
    return message;
  },
};

function createBaseQuerySlashCounterResponse(): QuerySlashCounterResponse {
  return { slashCounter: undefined };
}

export const QuerySlashCounterResponse = {
  encode(message: QuerySlashCounterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.slashCounter !== undefined) {
      SlashCounter.encode(message.slashCounter, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySlashCounterResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySlashCounterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.slashCounter = SlashCounter.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuerySlashCounterResponse {
    return { slashCounter: isSet(object.slashCounter) ? SlashCounter.fromJSON(object.slashCounter) : undefined };
  },

  toJSON(message: QuerySlashCounterResponse): unknown {
    const obj: any = {};
    message.slashCounter !== undefined &&
      (obj.slashCounter = message.slashCounter ? SlashCounter.toJSON(message.slashCounter) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QuerySlashCounterResponse>): QuerySlashCounterResponse {
    return QuerySlashCounterResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QuerySlashCounterResponse>): QuerySlashCounterResponse {
    const message = createBaseQuerySlashCounterResponse();
    message.slashCounter = (object.slashCounter !== undefined && object.slashCounter !== null)
      ? SlashCounter.fromPartial(object.slashCounter)
      : undefined;
    return message;
  },
};

function createBaseQueryAllOracleVotesWindowRequest(): QueryAllOracleVotesWindowRequest {
  return { pagination: undefined };
}

export const QueryAllOracleVotesWindowRequest = {
  encode(message: QueryAllOracleVotesWindowRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOracleVotesWindowRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOracleVotesWindowRequest();
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

  fromJSON(object: any): QueryAllOracleVotesWindowRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllOracleVotesWindowRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllOracleVotesWindowRequest>): QueryAllOracleVotesWindowRequest {
    return QueryAllOracleVotesWindowRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllOracleVotesWindowRequest>): QueryAllOracleVotesWindowRequest {
    const message = createBaseQueryAllOracleVotesWindowRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllOracleVotesWindowResponse(): QueryAllOracleVotesWindowResponse {
  return { oracleVotesWindows: [], pagination: undefined };
}

export const QueryAllOracleVotesWindowResponse = {
  encode(message: QueryAllOracleVotesWindowResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.oracleVotesWindows) {
      OracleVotesWindow.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOracleVotesWindowResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOracleVotesWindowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.oracleVotesWindows.push(OracleVotesWindow.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllOracleVotesWindowResponse {
    return {
      oracleVotesWindows: Array.isArray(object?.oracleVotesWindows)
        ? object.oracleVotesWindows.map((e: any) => OracleVotesWindow.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllOracleVotesWindowResponse): unknown {
    const obj: any = {};
    if (message.oracleVotesWindows) {
      obj.oracleVotesWindows = message.oracleVotesWindows.map((e) => e ? OracleVotesWindow.toJSON(e) : undefined);
    } else {
      obj.oracleVotesWindows = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllOracleVotesWindowResponse>): QueryAllOracleVotesWindowResponse {
    return QueryAllOracleVotesWindowResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllOracleVotesWindowResponse>): QueryAllOracleVotesWindowResponse {
    const message = createBaseQueryAllOracleVotesWindowResponse();
    message.oracleVotesWindows = object.oracleVotesWindows?.map((e) => OracleVotesWindow.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryOracleVotesWindowRequest(): QueryOracleVotesWindowRequest {
  return { valoperAddress: "", pagination: undefined };
}

export const QueryOracleVotesWindowRequest = {
  encode(message: QueryOracleVotesWindowRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valoperAddress !== "") {
      writer.uint32(10).string(message.valoperAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOracleVotesWindowRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleVotesWindowRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.valoperAddress = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): QueryOracleVotesWindowRequest {
    return {
      valoperAddress: isSet(object.valoperAddress) ? String(object.valoperAddress) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryOracleVotesWindowRequest): unknown {
    const obj: any = {};
    message.valoperAddress !== undefined && (obj.valoperAddress = message.valoperAddress);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryOracleVotesWindowRequest>): QueryOracleVotesWindowRequest {
    return QueryOracleVotesWindowRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryOracleVotesWindowRequest>): QueryOracleVotesWindowRequest {
    const message = createBaseQueryOracleVotesWindowRequest();
    message.valoperAddress = object.valoperAddress ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryOracleVotesWindowResponse(): QueryOracleVotesWindowResponse {
  return { oracleVotesWindows: [], pagination: undefined };
}

export const QueryOracleVotesWindowResponse = {
  encode(message: QueryOracleVotesWindowResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.oracleVotesWindows) {
      OracleVotesWindow.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOracleVotesWindowResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleVotesWindowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.oracleVotesWindows.push(OracleVotesWindow.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryOracleVotesWindowResponse {
    return {
      oracleVotesWindows: Array.isArray(object?.oracleVotesWindows)
        ? object.oracleVotesWindows.map((e: any) => OracleVotesWindow.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryOracleVotesWindowResponse): unknown {
    const obj: any = {};
    if (message.oracleVotesWindows) {
      obj.oracleVotesWindows = message.oracleVotesWindows.map((e) => e ? OracleVotesWindow.toJSON(e) : undefined);
    } else {
      obj.oracleVotesWindows = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryOracleVotesWindowResponse>): QueryOracleVotesWindowResponse {
    return QueryOracleVotesWindowResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryOracleVotesWindowResponse>): QueryOracleVotesWindowResponse {
    const message = createBaseQueryOracleVotesWindowResponse();
    message.oracleVotesWindows = object.oracleVotesWindows?.map((e) => OracleVotesWindow.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllHistoricalBucketInfoRequest(): QueryAllHistoricalBucketInfoRequest {
  return { pagination: undefined };
}

export const QueryAllHistoricalBucketInfoRequest = {
  encode(message: QueryAllHistoricalBucketInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllHistoricalBucketInfoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllHistoricalBucketInfoRequest();
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

  fromJSON(object: any): QueryAllHistoricalBucketInfoRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllHistoricalBucketInfoRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllHistoricalBucketInfoRequest>): QueryAllHistoricalBucketInfoRequest {
    return QueryAllHistoricalBucketInfoRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllHistoricalBucketInfoRequest>): QueryAllHistoricalBucketInfoRequest {
    const message = createBaseQueryAllHistoricalBucketInfoRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllHistoricalBucketInfoResponse(): QueryAllHistoricalBucketInfoResponse {
  return { allHistoricalBucketInfo: [], pagination: undefined };
}

export const QueryAllHistoricalBucketInfoResponse = {
  encode(message: QueryAllHistoricalBucketInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.allHistoricalBucketInfo) {
      HistoricalBucketInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllHistoricalBucketInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllHistoricalBucketInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.allHistoricalBucketInfo.push(HistoricalBucketInfo.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllHistoricalBucketInfoResponse {
    return {
      allHistoricalBucketInfo: Array.isArray(object?.allHistoricalBucketInfo)
        ? object.allHistoricalBucketInfo.map((e: any) => HistoricalBucketInfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllHistoricalBucketInfoResponse): unknown {
    const obj: any = {};
    if (message.allHistoricalBucketInfo) {
      obj.allHistoricalBucketInfo = message.allHistoricalBucketInfo.map((e) =>
        e ? HistoricalBucketInfo.toJSON(e) : undefined
      );
    } else {
      obj.allHistoricalBucketInfo = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllHistoricalBucketInfoResponse>): QueryAllHistoricalBucketInfoResponse {
    return QueryAllHistoricalBucketInfoResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllHistoricalBucketInfoResponse>): QueryAllHistoricalBucketInfoResponse {
    const message = createBaseQueryAllHistoricalBucketInfoResponse();
    message.allHistoricalBucketInfo = object.allHistoricalBucketInfo?.map((e) => HistoricalBucketInfo.fromPartial(e)) ||
      [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryHistoricalResultsRequest(): QueryHistoricalResultsRequest {
  return { oracleId: "", bucketId: Long.UZERO, pagination: undefined };
}

export const QueryHistoricalResultsRequest = {
  encode(message: QueryHistoricalResultsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oracleId !== "") {
      writer.uint32(10).string(message.oracleId);
    }
    if (!message.bucketId.isZero()) {
      writer.uint32(16).uint64(message.bucketId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHistoricalResultsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalResultsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.oracleId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.bucketId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): QueryHistoricalResultsRequest {
    return {
      oracleId: isSet(object.oracleId) ? String(object.oracleId) : "",
      bucketId: isSet(object.bucketId) ? Long.fromValue(object.bucketId) : Long.UZERO,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryHistoricalResultsRequest): unknown {
    const obj: any = {};
    message.oracleId !== undefined && (obj.oracleId = message.oracleId);
    message.bucketId !== undefined && (obj.bucketId = (message.bucketId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryHistoricalResultsRequest>): QueryHistoricalResultsRequest {
    return QueryHistoricalResultsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryHistoricalResultsRequest>): QueryHistoricalResultsRequest {
    const message = createBaseQueryHistoricalResultsRequest();
    message.oracleId = object.oracleId ?? "";
    message.bucketId = (object.bucketId !== undefined && object.bucketId !== null)
      ? Long.fromValue(object.bucketId)
      : Long.UZERO;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryHistoricalResultsResponse(): QueryHistoricalResultsResponse {
  return { historicalResultsForBuckets: [], pagination: undefined };
}

export const QueryHistoricalResultsResponse = {
  encode(message: QueryHistoricalResultsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.historicalResultsForBuckets) {
      HistoricalResults.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHistoricalResultsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalResultsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.historicalResultsForBuckets.push(HistoricalResults.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryHistoricalResultsResponse {
    return {
      historicalResultsForBuckets: Array.isArray(object?.historicalResultsForBuckets)
        ? object.historicalResultsForBuckets.map((e: any) => HistoricalResults.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryHistoricalResultsResponse): unknown {
    const obj: any = {};
    if (message.historicalResultsForBuckets) {
      obj.historicalResultsForBuckets = message.historicalResultsForBuckets.map((e) =>
        e ? HistoricalResults.toJSON(e) : undefined
      );
    } else {
      obj.historicalResultsForBuckets = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryHistoricalResultsResponse>): QueryHistoricalResultsResponse {
    return QueryHistoricalResultsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryHistoricalResultsResponse>): QueryHistoricalResultsResponse {
    const message = createBaseQueryHistoricalResultsResponse();
    message.historicalResultsForBuckets =
      object.historicalResultsForBuckets?.map((e) => HistoricalResults.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
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

function createBaseQueryContractAddressRequest(): QueryContractAddressRequest {
  return { id: "" };
}

export const QueryContractAddressRequest = {
  encode(message: QueryContractAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractAddressRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryContractAddressRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: QueryContractAddressRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create(base?: DeepPartial<QueryContractAddressRequest>): QueryContractAddressRequest {
    return QueryContractAddressRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryContractAddressRequest>): QueryContractAddressRequest {
    const message = createBaseQueryContractAddressRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseQueryContractAddressResponse(): QueryContractAddressResponse {
  return { address: "" };
}

export const QueryContractAddressResponse = {
  encode(message: QueryContractAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractAddressResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractAddressResponse();
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

  fromJSON(object: any): QueryContractAddressResponse {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryContractAddressResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<QueryContractAddressResponse>): QueryContractAddressResponse {
    return QueryContractAddressResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryContractAddressResponse>): QueryContractAddressResponse {
    const message = createBaseQueryContractAddressResponse();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryContractAllRequest(): QueryContractAllRequest {
  return {};
}

export const QueryContractAllRequest = {
  encode(_: QueryContractAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractAllRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractAllRequest();
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

  fromJSON(_: any): QueryContractAllRequest {
    return {};
  },

  toJSON(_: QueryContractAllRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryContractAllRequest>): QueryContractAllRequest {
    return QueryContractAllRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryContractAllRequest>): QueryContractAllRequest {
    const message = createBaseQueryContractAllRequest();
    return message;
  },
};

function createBaseQueryContractAllResponse(): QueryContractAllResponse {
  return { contracts: [] };
}

export const QueryContractAllResponse = {
  encode(message: QueryContractAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contracts) {
      Contract.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractAllResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.contracts.push(Contract.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryContractAllResponse {
    return {
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => Contract.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryContractAllResponse): unknown {
    const obj: any = {};
    if (message.contracts) {
      obj.contracts = message.contracts.map((e) => e ? Contract.toJSON(e) : undefined);
    } else {
      obj.contracts = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryContractAllResponse>): QueryContractAllResponse {
    return QueryContractAllResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryContractAllResponse>): QueryContractAllResponse {
    const message = createBaseQueryContractAllResponse();
    message.contracts = object.contracts?.map((e) => Contract.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryContractParamsRequest(): QueryContractParamsRequest {
  return { id: "" };
}

export const QueryContractParamsRequest = {
  encode(message: QueryContractParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryContractParamsRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: QueryContractParamsRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create(base?: DeepPartial<QueryContractParamsRequest>): QueryContractParamsRequest {
    return QueryContractParamsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryContractParamsRequest>): QueryContractParamsRequest {
    const message = createBaseQueryContractParamsRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseQueryContractParamsResponse(): QueryContractParamsResponse {
  return { id: "", creator: "", decimals: Long.UZERO, timestamp: "", data: "" };
}

export const QueryContractParamsResponse = {
  encode(message: QueryContractParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (!message.decimals.isZero()) {
      writer.uint32(24).uint64(message.decimals);
    }
    if (message.timestamp !== "") {
      writer.uint32(34).string(message.timestamp);
    }
    if (message.data !== "") {
      writer.uint32(42).string(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.decimals = reader.uint64() as Long;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.timestamp = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.data = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryContractParamsResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      decimals: isSet(object.decimals) ? Long.fromValue(object.decimals) : Long.UZERO,
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : "",
      data: isSet(object.data) ? String(object.data) : "",
    };
  },

  toJSON(message: QueryContractParamsResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.creator !== undefined && (obj.creator = message.creator);
    message.decimals !== undefined && (obj.decimals = (message.decimals || Long.UZERO).toString());
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },

  create(base?: DeepPartial<QueryContractParamsResponse>): QueryContractParamsResponse {
    return QueryContractParamsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryContractParamsResponse>): QueryContractParamsResponse {
    const message = createBaseQueryContractParamsResponse();
    message.id = object.id ?? "";
    message.creator = object.creator ?? "";
    message.decimals = (object.decimals !== undefined && object.decimals !== null)
      ? Long.fromValue(object.decimals)
      : Long.UZERO;
    message.timestamp = object.timestamp ?? "";
    message.data = object.data ?? "";
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Get details for an oracle */
  Oracle(request: QueryOracleRequest): Promise<QueryOracleResponse>;
  /** Get details for all oracles */
  OracleAll(request: QueryAllOracleRequest): Promise<QueryAllOracleResponse>;
  /** Get results for all oracles, or a specific oracle */
  Results(request: QueryResultsRequest): Promise<QueryResultsResponse>;
  /** Get latest result for all oracles */
  ResultsLatest(request: QueryResultsLatestRequest): Promise<QueryResultsLatestResponse>;
  /** Get latest result for a specific oracle */
  ResultLatest(request: QueryResultLatestRequest): Promise<QueryResultLatestResponse>;
  /** Get voting power for an address */
  VoterPower(request: QueryVoterPowerRequest): Promise<QueryVoterPowerResponse>;
  /** Get all slash counters */
  SlashCounterAll(request: QueryAllSlashCounterRequest): Promise<QueryAllSlashCounterResponse>;
  /** Get slash counter for a valoper address */
  SlashCounter(request: QuerySlashCounterRequest): Promise<QuerySlashCounterResponse>;
  /** Get all oracle votes window */
  OracleVotesWindowAll(request: QueryAllOracleVotesWindowRequest): Promise<QueryAllOracleVotesWindowResponse>;
  /** Get oracle votes window for address */
  OracleVotesWindow(request: QueryOracleVotesWindowRequest): Promise<QueryOracleVotesWindowResponse>;
  OracleContractAddress(request: QueryContractAddressRequest): Promise<QueryContractAddressResponse>;
  OracleContractAll(request: QueryContractAllRequest): Promise<QueryContractAllResponse>;
  OracleContractParams(request: QueryContractParamsRequest): Promise<QueryContractParamsResponse>;
  AllHistoricalBucketInfo(request: QueryAllHistoricalBucketInfoRequest): Promise<QueryAllHistoricalBucketInfoResponse>;
  HistoricalResults(request: QueryHistoricalResultsRequest): Promise<QueryHistoricalResultsResponse>;
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.oracle.Query";
    this.rpc = rpc;
    this.Oracle = this.Oracle.bind(this);
    this.OracleAll = this.OracleAll.bind(this);
    this.Results = this.Results.bind(this);
    this.ResultsLatest = this.ResultsLatest.bind(this);
    this.ResultLatest = this.ResultLatest.bind(this);
    this.VoterPower = this.VoterPower.bind(this);
    this.SlashCounterAll = this.SlashCounterAll.bind(this);
    this.SlashCounter = this.SlashCounter.bind(this);
    this.OracleVotesWindowAll = this.OracleVotesWindowAll.bind(this);
    this.OracleVotesWindow = this.OracleVotesWindow.bind(this);
    this.OracleContractAddress = this.OracleContractAddress.bind(this);
    this.OracleContractAll = this.OracleContractAll.bind(this);
    this.OracleContractParams = this.OracleContractParams.bind(this);
    this.AllHistoricalBucketInfo = this.AllHistoricalBucketInfo.bind(this);
    this.HistoricalResults = this.HistoricalResults.bind(this);
    this.Params = this.Params.bind(this);
  }
  Oracle(request: QueryOracleRequest): Promise<QueryOracleResponse> {
    const data = QueryOracleRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Oracle", data);
    return promise.then((data) => QueryOracleResponse.decode(_m0.Reader.create(data)));
  }

  OracleAll(request: QueryAllOracleRequest): Promise<QueryAllOracleResponse> {
    const data = QueryAllOracleRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "OracleAll", data);
    return promise.then((data) => QueryAllOracleResponse.decode(_m0.Reader.create(data)));
  }

  Results(request: QueryResultsRequest): Promise<QueryResultsResponse> {
    const data = QueryResultsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Results", data);
    return promise.then((data) => QueryResultsResponse.decode(_m0.Reader.create(data)));
  }

  ResultsLatest(request: QueryResultsLatestRequest): Promise<QueryResultsLatestResponse> {
    const data = QueryResultsLatestRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ResultsLatest", data);
    return promise.then((data) => QueryResultsLatestResponse.decode(_m0.Reader.create(data)));
  }

  ResultLatest(request: QueryResultLatestRequest): Promise<QueryResultLatestResponse> {
    const data = QueryResultLatestRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ResultLatest", data);
    return promise.then((data) => QueryResultLatestResponse.decode(_m0.Reader.create(data)));
  }

  VoterPower(request: QueryVoterPowerRequest): Promise<QueryVoterPowerResponse> {
    const data = QueryVoterPowerRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "VoterPower", data);
    return promise.then((data) => QueryVoterPowerResponse.decode(_m0.Reader.create(data)));
  }

  SlashCounterAll(request: QueryAllSlashCounterRequest): Promise<QueryAllSlashCounterResponse> {
    const data = QueryAllSlashCounterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SlashCounterAll", data);
    return promise.then((data) => QueryAllSlashCounterResponse.decode(_m0.Reader.create(data)));
  }

  SlashCounter(request: QuerySlashCounterRequest): Promise<QuerySlashCounterResponse> {
    const data = QuerySlashCounterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SlashCounter", data);
    return promise.then((data) => QuerySlashCounterResponse.decode(_m0.Reader.create(data)));
  }

  OracleVotesWindowAll(request: QueryAllOracleVotesWindowRequest): Promise<QueryAllOracleVotesWindowResponse> {
    const data = QueryAllOracleVotesWindowRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "OracleVotesWindowAll", data);
    return promise.then((data) => QueryAllOracleVotesWindowResponse.decode(_m0.Reader.create(data)));
  }

  OracleVotesWindow(request: QueryOracleVotesWindowRequest): Promise<QueryOracleVotesWindowResponse> {
    const data = QueryOracleVotesWindowRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "OracleVotesWindow", data);
    return promise.then((data) => QueryOracleVotesWindowResponse.decode(_m0.Reader.create(data)));
  }

  OracleContractAddress(request: QueryContractAddressRequest): Promise<QueryContractAddressResponse> {
    const data = QueryContractAddressRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "OracleContractAddress", data);
    return promise.then((data) => QueryContractAddressResponse.decode(_m0.Reader.create(data)));
  }

  OracleContractAll(request: QueryContractAllRequest): Promise<QueryContractAllResponse> {
    const data = QueryContractAllRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "OracleContractAll", data);
    return promise.then((data) => QueryContractAllResponse.decode(_m0.Reader.create(data)));
  }

  OracleContractParams(request: QueryContractParamsRequest): Promise<QueryContractParamsResponse> {
    const data = QueryContractParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "OracleContractParams", data);
    return promise.then((data) => QueryContractParamsResponse.decode(_m0.Reader.create(data)));
  }

  AllHistoricalBucketInfo(request: QueryAllHistoricalBucketInfoRequest): Promise<QueryAllHistoricalBucketInfoResponse> {
    const data = QueryAllHistoricalBucketInfoRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllHistoricalBucketInfo", data);
    return promise.then((data) => QueryAllHistoricalBucketInfoResponse.decode(_m0.Reader.create(data)));
  }

  HistoricalResults(request: QueryHistoricalResultsRequest): Promise<QueryHistoricalResultsResponse> {
    const data = QueryHistoricalResultsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "HistoricalResults", data);
    return promise.then((data) => QueryHistoricalResultsResponse.decode(_m0.Reader.create(data)));
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
