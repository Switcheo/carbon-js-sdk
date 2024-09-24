/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Oracle, Result, Contract } from "./oracle";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { SlashCounter, OracleVotesWindow } from "./slashing";
import { Params } from "./params";

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

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

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

export interface QueryContractAllRequest {}

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

const baseQueryResultsRequest: object = { oracleId: "" };

export const QueryResultsRequest = {
  encode(
    message: QueryResultsRequest,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResultsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryResultsRequest } as QueryResultsRequest;
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

  fromJSON(object: any): QueryResultsRequest {
    const message = { ...baseQueryResultsRequest } as QueryResultsRequest;
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

  toJSON(message: QueryResultsRequest): unknown {
    const obj: any = {};
    message.oracleId !== undefined && (obj.oracleId = message.oracleId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryResultsRequest>): QueryResultsRequest {
    const message = { ...baseQueryResultsRequest } as QueryResultsRequest;
    message.oracleId = object.oracleId ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryResultsResponse: object = {};

export const QueryResultsResponse = {
  encode(
    message: QueryResultsResponse,
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
  ): QueryResultsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryResultsResponse } as QueryResultsResponse;
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

  fromJSON(object: any): QueryResultsResponse {
    const message = { ...baseQueryResultsResponse } as QueryResultsResponse;
    message.results = (object.results ?? []).map((e: any) =>
      Result.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryResultsResponse): unknown {
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

  fromPartial(object: DeepPartial<QueryResultsResponse>): QueryResultsResponse {
    const message = { ...baseQueryResultsResponse } as QueryResultsResponse;
    message.results = (object.results ?? []).map((e) => Result.fromPartial(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryResultsLatestRequest: object = {};

export const QueryResultsLatestRequest = {
  encode(
    message: QueryResultsLatestRequest,
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
  ): QueryResultsLatestRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryResultsLatestRequest,
    } as QueryResultsLatestRequest;
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

  fromJSON(object: any): QueryResultsLatestRequest {
    const message = {
      ...baseQueryResultsLatestRequest,
    } as QueryResultsLatestRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryResultsLatestRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryResultsLatestRequest>
  ): QueryResultsLatestRequest {
    const message = {
      ...baseQueryResultsLatestRequest,
    } as QueryResultsLatestRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryResultsLatestResponse: object = {};

export const QueryResultsLatestResponse = {
  encode(
    message: QueryResultsLatestResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.latestResults) {
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
  ): QueryResultsLatestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryResultsLatestResponse,
    } as QueryResultsLatestResponse;
    message.latestResults = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.latestResults.push(Result.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryResultsLatestResponse {
    const message = {
      ...baseQueryResultsLatestResponse,
    } as QueryResultsLatestResponse;
    message.latestResults = (object.latestResults ?? []).map((e: any) =>
      Result.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryResultsLatestResponse): unknown {
    const obj: any = {};
    if (message.latestResults) {
      obj.latestResults = message.latestResults.map((e) =>
        e ? Result.toJSON(e) : undefined
      );
    } else {
      obj.latestResults = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryResultsLatestResponse>
  ): QueryResultsLatestResponse {
    const message = {
      ...baseQueryResultsLatestResponse,
    } as QueryResultsLatestResponse;
    message.latestResults = (object.latestResults ?? []).map((e) =>
      Result.fromPartial(e)
    );
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

const baseQueryAllSlashCounterRequest: object = {};

export const QueryAllSlashCounterRequest = {
  encode(
    message: QueryAllSlashCounterRequest,
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
  ): QueryAllSlashCounterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllSlashCounterRequest,
    } as QueryAllSlashCounterRequest;
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

  fromJSON(object: any): QueryAllSlashCounterRequest {
    const message = {
      ...baseQueryAllSlashCounterRequest,
    } as QueryAllSlashCounterRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllSlashCounterRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSlashCounterRequest>
  ): QueryAllSlashCounterRequest {
    const message = {
      ...baseQueryAllSlashCounterRequest,
    } as QueryAllSlashCounterRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllSlashCounterResponse: object = {};

export const QueryAllSlashCounterResponse = {
  encode(
    message: QueryAllSlashCounterResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.slashCounters) {
      SlashCounter.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllSlashCounterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllSlashCounterResponse,
    } as QueryAllSlashCounterResponse;
    message.slashCounters = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.slashCounters.push(
            SlashCounter.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): QueryAllSlashCounterResponse {
    const message = {
      ...baseQueryAllSlashCounterResponse,
    } as QueryAllSlashCounterResponse;
    message.slashCounters = (object.slashCounters ?? []).map((e: any) =>
      SlashCounter.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllSlashCounterResponse): unknown {
    const obj: any = {};
    if (message.slashCounters) {
      obj.slashCounters = message.slashCounters.map((e) =>
        e ? SlashCounter.toJSON(e) : undefined
      );
    } else {
      obj.slashCounters = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSlashCounterResponse>
  ): QueryAllSlashCounterResponse {
    const message = {
      ...baseQueryAllSlashCounterResponse,
    } as QueryAllSlashCounterResponse;
    message.slashCounters = (object.slashCounters ?? []).map((e) =>
      SlashCounter.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQuerySlashCounterRequest: object = { valoperAddress: "" };

export const QuerySlashCounterRequest = {
  encode(
    message: QuerySlashCounterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.valoperAddress !== "") {
      writer.uint32(10).string(message.valoperAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySlashCounterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQuerySlashCounterRequest,
    } as QuerySlashCounterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valoperAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySlashCounterRequest {
    const message = {
      ...baseQuerySlashCounterRequest,
    } as QuerySlashCounterRequest;
    message.valoperAddress =
      object.valoperAddress !== undefined && object.valoperAddress !== null
        ? String(object.valoperAddress)
        : "";
    return message;
  },

  toJSON(message: QuerySlashCounterRequest): unknown {
    const obj: any = {};
    message.valoperAddress !== undefined &&
      (obj.valoperAddress = message.valoperAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QuerySlashCounterRequest>
  ): QuerySlashCounterRequest {
    const message = {
      ...baseQuerySlashCounterRequest,
    } as QuerySlashCounterRequest;
    message.valoperAddress = object.valoperAddress ?? "";
    return message;
  },
};

const baseQuerySlashCounterResponse: object = {};

export const QuerySlashCounterResponse = {
  encode(
    message: QuerySlashCounterResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.slashCounter !== undefined) {
      SlashCounter.encode(
        message.slashCounter,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySlashCounterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQuerySlashCounterResponse,
    } as QuerySlashCounterResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.slashCounter = SlashCounter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySlashCounterResponse {
    const message = {
      ...baseQuerySlashCounterResponse,
    } as QuerySlashCounterResponse;
    message.slashCounter =
      object.slashCounter !== undefined && object.slashCounter !== null
        ? SlashCounter.fromJSON(object.slashCounter)
        : undefined;
    return message;
  },

  toJSON(message: QuerySlashCounterResponse): unknown {
    const obj: any = {};
    message.slashCounter !== undefined &&
      (obj.slashCounter = message.slashCounter
        ? SlashCounter.toJSON(message.slashCounter)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QuerySlashCounterResponse>
  ): QuerySlashCounterResponse {
    const message = {
      ...baseQuerySlashCounterResponse,
    } as QuerySlashCounterResponse;
    message.slashCounter =
      object.slashCounter !== undefined && object.slashCounter !== null
        ? SlashCounter.fromPartial(object.slashCounter)
        : undefined;
    return message;
  },
};

const baseQueryAllOracleVotesWindowRequest: object = {};

export const QueryAllOracleVotesWindowRequest = {
  encode(
    message: QueryAllOracleVotesWindowRequest,
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
  ): QueryAllOracleVotesWindowRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllOracleVotesWindowRequest,
    } as QueryAllOracleVotesWindowRequest;
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

  fromJSON(object: any): QueryAllOracleVotesWindowRequest {
    const message = {
      ...baseQueryAllOracleVotesWindowRequest,
    } as QueryAllOracleVotesWindowRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllOracleVotesWindowRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllOracleVotesWindowRequest>
  ): QueryAllOracleVotesWindowRequest {
    const message = {
      ...baseQueryAllOracleVotesWindowRequest,
    } as QueryAllOracleVotesWindowRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllOracleVotesWindowResponse: object = {};

export const QueryAllOracleVotesWindowResponse = {
  encode(
    message: QueryAllOracleVotesWindowResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.oracleVotesWindows) {
      OracleVotesWindow.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllOracleVotesWindowResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllOracleVotesWindowResponse,
    } as QueryAllOracleVotesWindowResponse;
    message.oracleVotesWindows = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleVotesWindows.push(
            OracleVotesWindow.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): QueryAllOracleVotesWindowResponse {
    const message = {
      ...baseQueryAllOracleVotesWindowResponse,
    } as QueryAllOracleVotesWindowResponse;
    message.oracleVotesWindows = (object.oracleVotesWindows ?? []).map(
      (e: any) => OracleVotesWindow.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllOracleVotesWindowResponse): unknown {
    const obj: any = {};
    if (message.oracleVotesWindows) {
      obj.oracleVotesWindows = message.oracleVotesWindows.map((e) =>
        e ? OracleVotesWindow.toJSON(e) : undefined
      );
    } else {
      obj.oracleVotesWindows = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllOracleVotesWindowResponse>
  ): QueryAllOracleVotesWindowResponse {
    const message = {
      ...baseQueryAllOracleVotesWindowResponse,
    } as QueryAllOracleVotesWindowResponse;
    message.oracleVotesWindows = (object.oracleVotesWindows ?? []).map((e) =>
      OracleVotesWindow.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryOracleVotesWindowRequest: object = { valoperAddress: "" };

export const QueryOracleVotesWindowRequest = {
  encode(
    message: QueryOracleVotesWindowRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.valoperAddress !== "") {
      writer.uint32(10).string(message.valoperAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryOracleVotesWindowRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryOracleVotesWindowRequest,
    } as QueryOracleVotesWindowRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valoperAddress = reader.string();
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

  fromJSON(object: any): QueryOracleVotesWindowRequest {
    const message = {
      ...baseQueryOracleVotesWindowRequest,
    } as QueryOracleVotesWindowRequest;
    message.valoperAddress =
      object.valoperAddress !== undefined && object.valoperAddress !== null
        ? String(object.valoperAddress)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryOracleVotesWindowRequest): unknown {
    const obj: any = {};
    message.valoperAddress !== undefined &&
      (obj.valoperAddress = message.valoperAddress);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryOracleVotesWindowRequest>
  ): QueryOracleVotesWindowRequest {
    const message = {
      ...baseQueryOracleVotesWindowRequest,
    } as QueryOracleVotesWindowRequest;
    message.valoperAddress = object.valoperAddress ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryOracleVotesWindowResponse: object = {};

export const QueryOracleVotesWindowResponse = {
  encode(
    message: QueryOracleVotesWindowResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.oracleVotesWindows) {
      OracleVotesWindow.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryOracleVotesWindowResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryOracleVotesWindowResponse,
    } as QueryOracleVotesWindowResponse;
    message.oracleVotesWindows = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleVotesWindows.push(
            OracleVotesWindow.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): QueryOracleVotesWindowResponse {
    const message = {
      ...baseQueryOracleVotesWindowResponse,
    } as QueryOracleVotesWindowResponse;
    message.oracleVotesWindows = (object.oracleVotesWindows ?? []).map(
      (e: any) => OracleVotesWindow.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryOracleVotesWindowResponse): unknown {
    const obj: any = {};
    if (message.oracleVotesWindows) {
      obj.oracleVotesWindows = message.oracleVotesWindows.map((e) =>
        e ? OracleVotesWindow.toJSON(e) : undefined
      );
    } else {
      obj.oracleVotesWindows = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryOracleVotesWindowResponse>
  ): QueryOracleVotesWindowResponse {
    const message = {
      ...baseQueryOracleVotesWindowResponse,
    } as QueryOracleVotesWindowResponse;
    message.oracleVotesWindows = (object.oracleVotesWindows ?? []).map((e) =>
      OracleVotesWindow.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(
    _: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromJSON(object.params)
        : undefined;
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

const baseQueryContractAddressRequest: object = { id: "" };

export const QueryContractAddressRequest = {
  encode(
    message: QueryContractAddressRequest,
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
  ): QueryContractAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryContractAddressRequest,
    } as QueryContractAddressRequest;
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

  fromJSON(object: any): QueryContractAddressRequest {
    const message = {
      ...baseQueryContractAddressRequest,
    } as QueryContractAddressRequest;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    return message;
  },

  toJSON(message: QueryContractAddressRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryContractAddressRequest>
  ): QueryContractAddressRequest {
    const message = {
      ...baseQueryContractAddressRequest,
    } as QueryContractAddressRequest;
    message.id = object.id ?? "";
    return message;
  },
};

const baseQueryContractAddressResponse: object = { address: "" };

export const QueryContractAddressResponse = {
  encode(
    message: QueryContractAddressResponse,
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
  ): QueryContractAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryContractAddressResponse,
    } as QueryContractAddressResponse;
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

  fromJSON(object: any): QueryContractAddressResponse {
    const message = {
      ...baseQueryContractAddressResponse,
    } as QueryContractAddressResponse;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: QueryContractAddressResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryContractAddressResponse>
  ): QueryContractAddressResponse {
    const message = {
      ...baseQueryContractAddressResponse,
    } as QueryContractAddressResponse;
    message.address = object.address ?? "";
    return message;
  },
};

const baseQueryContractAllRequest: object = {};

export const QueryContractAllRequest = {
  encode(
    _: QueryContractAllRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryContractAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryContractAllRequest,
    } as QueryContractAllRequest;
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

  fromJSON(_: any): QueryContractAllRequest {
    const message = {
      ...baseQueryContractAllRequest,
    } as QueryContractAllRequest;
    return message;
  },

  toJSON(_: QueryContractAllRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryContractAllRequest>
  ): QueryContractAllRequest {
    const message = {
      ...baseQueryContractAllRequest,
    } as QueryContractAllRequest;
    return message;
  },
};

const baseQueryContractAllResponse: object = {};

export const QueryContractAllResponse = {
  encode(
    message: QueryContractAllResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.contracts) {
      Contract.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryContractAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryContractAllResponse,
    } as QueryContractAllResponse;
    message.contracts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contracts.push(Contract.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryContractAllResponse {
    const message = {
      ...baseQueryContractAllResponse,
    } as QueryContractAllResponse;
    message.contracts = (object.contracts ?? []).map((e: any) =>
      Contract.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryContractAllResponse): unknown {
    const obj: any = {};
    if (message.contracts) {
      obj.contracts = message.contracts.map((e) =>
        e ? Contract.toJSON(e) : undefined
      );
    } else {
      obj.contracts = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryContractAllResponse>
  ): QueryContractAllResponse {
    const message = {
      ...baseQueryContractAllResponse,
    } as QueryContractAllResponse;
    message.contracts = (object.contracts ?? []).map((e) =>
      Contract.fromPartial(e)
    );
    return message;
  },
};

const baseQueryContractParamsRequest: object = { id: "" };

export const QueryContractParamsRequest = {
  encode(
    message: QueryContractParamsRequest,
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
  ): QueryContractParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryContractParamsRequest,
    } as QueryContractParamsRequest;
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

  fromJSON(object: any): QueryContractParamsRequest {
    const message = {
      ...baseQueryContractParamsRequest,
    } as QueryContractParamsRequest;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    return message;
  },

  toJSON(message: QueryContractParamsRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryContractParamsRequest>
  ): QueryContractParamsRequest {
    const message = {
      ...baseQueryContractParamsRequest,
    } as QueryContractParamsRequest;
    message.id = object.id ?? "";
    return message;
  },
};

const baseQueryContractParamsResponse: object = {
  id: "",
  creator: "",
  decimals: Long.UZERO,
  timestamp: "",
  data: "",
};

export const QueryContractParamsResponse = {
  encode(
    message: QueryContractParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryContractParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryContractParamsResponse,
    } as QueryContractParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.decimals = reader.uint64() as Long;
          break;
        case 4:
          message.timestamp = reader.string();
          break;
        case 5:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryContractParamsResponse {
    const message = {
      ...baseQueryContractParamsResponse,
    } as QueryContractParamsResponse;
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.decimals =
      object.decimals !== undefined && object.decimals !== null
        ? Long.fromString(object.decimals)
        : Long.UZERO;
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? String(object.timestamp)
        : "";
    message.data =
      object.data !== undefined && object.data !== null
        ? String(object.data)
        : "";
    return message;
  },

  toJSON(message: QueryContractParamsResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.creator !== undefined && (obj.creator = message.creator);
    message.decimals !== undefined &&
      (obj.decimals = (message.decimals || Long.UZERO).toString());
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryContractParamsResponse>
  ): QueryContractParamsResponse {
    const message = {
      ...baseQueryContractParamsResponse,
    } as QueryContractParamsResponse;
    message.id = object.id ?? "";
    message.creator = object.creator ?? "";
    message.decimals =
      object.decimals !== undefined && object.decimals !== null
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
  ResultsLatest(
    request: QueryResultsLatestRequest
  ): Promise<QueryResultsLatestResponse>;
  /** Get voting power for an address */
  VoterPower(request: QueryVoterPowerRequest): Promise<QueryVoterPowerResponse>;
  /** Get all slash counters */
  SlashCounterAll(
    request: QueryAllSlashCounterRequest
  ): Promise<QueryAllSlashCounterResponse>;
  /** Get slash counter for a valoper address */
  SlashCounter(
    request: QuerySlashCounterRequest
  ): Promise<QuerySlashCounterResponse>;
  /** Get all oracle votes window */
  OracleVotesWindowAll(
    request: QueryAllOracleVotesWindowRequest
  ): Promise<QueryAllOracleVotesWindowResponse>;
  /** Get oracle votes window for address */
  OracleVotesWindow(
    request: QueryOracleVotesWindowRequest
  ): Promise<QueryOracleVotesWindowResponse>;
  OracleContractAddress(
    request: QueryContractAddressRequest
  ): Promise<QueryContractAddressResponse>;
  OracleContractAll(
    request: QueryContractAllRequest
  ): Promise<QueryContractAllResponse>;
  OracleContractParams(
    request: QueryContractParamsRequest
  ): Promise<QueryContractParamsResponse>;
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Oracle = this.Oracle.bind(this);
    this.OracleAll = this.OracleAll.bind(this);
    this.Results = this.Results.bind(this);
    this.ResultsLatest = this.ResultsLatest.bind(this);
    this.VoterPower = this.VoterPower.bind(this);
    this.SlashCounterAll = this.SlashCounterAll.bind(this);
    this.SlashCounter = this.SlashCounter.bind(this);
    this.OracleVotesWindowAll = this.OracleVotesWindowAll.bind(this);
    this.OracleVotesWindow = this.OracleVotesWindow.bind(this);
    this.OracleContractAddress = this.OracleContractAddress.bind(this);
    this.OracleContractAll = this.OracleContractAll.bind(this);
    this.OracleContractParams = this.OracleContractParams.bind(this);
    this.Params = this.Params.bind(this);
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

  Results(request: QueryResultsRequest): Promise<QueryResultsResponse> {
    const data = QueryResultsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.oracle.Query",
      "Results",
      data
    );
    return promise.then((data) =>
      QueryResultsResponse.decode(new _m0.Reader(data))
    );
  }

  ResultsLatest(
    request: QueryResultsLatestRequest
  ): Promise<QueryResultsLatestResponse> {
    const data = QueryResultsLatestRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.oracle.Query",
      "ResultsLatest",
      data
    );
    return promise.then((data) =>
      QueryResultsLatestResponse.decode(new _m0.Reader(data))
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

  SlashCounterAll(
    request: QueryAllSlashCounterRequest
  ): Promise<QueryAllSlashCounterResponse> {
    const data = QueryAllSlashCounterRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.oracle.Query",
      "SlashCounterAll",
      data
    );
    return promise.then((data) =>
      QueryAllSlashCounterResponse.decode(new _m0.Reader(data))
    );
  }

  SlashCounter(
    request: QuerySlashCounterRequest
  ): Promise<QuerySlashCounterResponse> {
    const data = QuerySlashCounterRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.oracle.Query",
      "SlashCounter",
      data
    );
    return promise.then((data) =>
      QuerySlashCounterResponse.decode(new _m0.Reader(data))
    );
  }

  OracleVotesWindowAll(
    request: QueryAllOracleVotesWindowRequest
  ): Promise<QueryAllOracleVotesWindowResponse> {
    const data = QueryAllOracleVotesWindowRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.oracle.Query",
      "OracleVotesWindowAll",
      data
    );
    return promise.then((data) =>
      QueryAllOracleVotesWindowResponse.decode(new _m0.Reader(data))
    );
  }

  OracleVotesWindow(
    request: QueryOracleVotesWindowRequest
  ): Promise<QueryOracleVotesWindowResponse> {
    const data = QueryOracleVotesWindowRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.oracle.Query",
      "OracleVotesWindow",
      data
    );
    return promise.then((data) =>
      QueryOracleVotesWindowResponse.decode(new _m0.Reader(data))
    );
  }

  OracleContractAddress(
    request: QueryContractAddressRequest
  ): Promise<QueryContractAddressResponse> {
    const data = QueryContractAddressRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.oracle.Query",
      "OracleContractAddress",
      data
    );
    return promise.then((data) =>
      QueryContractAddressResponse.decode(new _m0.Reader(data))
    );
  }

  OracleContractAll(
    request: QueryContractAllRequest
  ): Promise<QueryContractAllResponse> {
    const data = QueryContractAllRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.oracle.Query",
      "OracleContractAll",
      data
    );
    return promise.then((data) =>
      QueryContractAllResponse.decode(new _m0.Reader(data))
    );
  }

  OracleContractParams(
    request: QueryContractParamsRequest
  ): Promise<QueryContractParamsResponse> {
    const data = QueryContractParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.oracle.Query",
      "OracleContractParams",
      data
    );
    return promise.then((data) =>
      QueryContractParamsResponse.decode(new _m0.Reader(data))
    );
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.oracle.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
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
