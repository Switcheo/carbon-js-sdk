/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { APIPosition, OpenInterest, Position, PositionAllocatedMargin } from "./position";

export const protobufPackage = "Switcheo.carbon.position";

export interface QueryGetPositionRequest {
  address: string;
  marketId: string;
}

export interface QueryGetPositionResponse {
  position?: Position;
}

export interface QueryAllPositionRequest {
  address: string;
  marketId: string;
  status: string;
  pagination?: PageRequest;
}

export interface QueryAllPositionResponse {
  positions: APIPosition[];
  pagination?: PageResponse;
}

export interface QueryPositionAllocatedMarginRequest {
  endBlockHeight: string;
}

export interface QueryPositionAllocatedMarginResponse {
  positions: PositionAllocatedMargin[];
}

export interface QueryGetOpenInterestRequest {
  marketId: string;
}

export interface QueryGetOpenInterestResponse {
  openInterest?: OpenInterest;
}

export interface QueryAllOpenInterestsRequest {
}

export interface QueryAllOpenInterestsResponse {
  openInterests: OpenInterest[];
}

function createBaseQueryGetPositionRequest(): QueryGetPositionRequest {
  return { address: "", marketId: "" };
}

export const QueryGetPositionRequest = {
  encode(message: QueryGetPositionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPositionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPositionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.marketId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetPositionRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
    };
  },

  toJSON(message: QueryGetPositionRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  create(base?: DeepPartial<QueryGetPositionRequest>): QueryGetPositionRequest {
    return QueryGetPositionRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetPositionRequest>): QueryGetPositionRequest {
    const message = createBaseQueryGetPositionRequest();
    message.address = object.address ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  },
};

function createBaseQueryGetPositionResponse(): QueryGetPositionResponse {
  return { position: undefined };
}

export const QueryGetPositionResponse = {
  encode(message: QueryGetPositionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPositionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPositionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.position = Position.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetPositionResponse {
    return { position: isSet(object.position) ? Position.fromJSON(object.position) : undefined };
  },

  toJSON(message: QueryGetPositionResponse): unknown {
    const obj: any = {};
    message.position !== undefined && (obj.position = message.position ? Position.toJSON(message.position) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryGetPositionResponse>): QueryGetPositionResponse {
    return QueryGetPositionResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetPositionResponse>): QueryGetPositionResponse {
    const message = createBaseQueryGetPositionResponse();
    message.position = (object.position !== undefined && object.position !== null)
      ? Position.fromPartial(object.position)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPositionRequest(): QueryAllPositionRequest {
  return { address: "", marketId: "", status: "", pagination: undefined };
}

export const QueryAllPositionRequest = {
  encode(message: QueryAllPositionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.status !== "") {
      writer.uint32(26).string(message.status);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPositionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPositionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.marketId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.status = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): QueryAllPositionRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      status: isSet(object.status) ? String(object.status) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPositionRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.status !== undefined && (obj.status = message.status);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllPositionRequest>): QueryAllPositionRequest {
    return QueryAllPositionRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllPositionRequest>): QueryAllPositionRequest {
    const message = createBaseQueryAllPositionRequest();
    message.address = object.address ?? "";
    message.marketId = object.marketId ?? "";
    message.status = object.status ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPositionResponse(): QueryAllPositionResponse {
  return { positions: [], pagination: undefined };
}

export const QueryAllPositionResponse = {
  encode(message: QueryAllPositionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.positions) {
      APIPosition.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPositionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPositionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.positions.push(APIPosition.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPositionResponse {
    return {
      positions: Array.isArray(object?.positions) ? object.positions.map((e: any) => APIPosition.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPositionResponse): unknown {
    const obj: any = {};
    if (message.positions) {
      obj.positions = message.positions.map((e) => e ? APIPosition.toJSON(e) : undefined);
    } else {
      obj.positions = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllPositionResponse>): QueryAllPositionResponse {
    return QueryAllPositionResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllPositionResponse>): QueryAllPositionResponse {
    const message = createBaseQueryAllPositionResponse();
    message.positions = object.positions?.map((e) => APIPosition.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryPositionAllocatedMarginRequest(): QueryPositionAllocatedMarginRequest {
  return { endBlockHeight: "" };
}

export const QueryPositionAllocatedMarginRequest = {
  encode(message: QueryPositionAllocatedMarginRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.endBlockHeight !== "") {
      writer.uint32(10).string(message.endBlockHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPositionAllocatedMarginRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPositionAllocatedMarginRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.endBlockHeight = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPositionAllocatedMarginRequest {
    return { endBlockHeight: isSet(object.endBlockHeight) ? String(object.endBlockHeight) : "" };
  },

  toJSON(message: QueryPositionAllocatedMarginRequest): unknown {
    const obj: any = {};
    message.endBlockHeight !== undefined && (obj.endBlockHeight = message.endBlockHeight);
    return obj;
  },

  create(base?: DeepPartial<QueryPositionAllocatedMarginRequest>): QueryPositionAllocatedMarginRequest {
    return QueryPositionAllocatedMarginRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryPositionAllocatedMarginRequest>): QueryPositionAllocatedMarginRequest {
    const message = createBaseQueryPositionAllocatedMarginRequest();
    message.endBlockHeight = object.endBlockHeight ?? "";
    return message;
  },
};

function createBaseQueryPositionAllocatedMarginResponse(): QueryPositionAllocatedMarginResponse {
  return { positions: [] };
}

export const QueryPositionAllocatedMarginResponse = {
  encode(message: QueryPositionAllocatedMarginResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.positions) {
      PositionAllocatedMargin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPositionAllocatedMarginResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPositionAllocatedMarginResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.positions.push(PositionAllocatedMargin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPositionAllocatedMarginResponse {
    return {
      positions: Array.isArray(object?.positions)
        ? object.positions.map((e: any) => PositionAllocatedMargin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryPositionAllocatedMarginResponse): unknown {
    const obj: any = {};
    if (message.positions) {
      obj.positions = message.positions.map((e) => e ? PositionAllocatedMargin.toJSON(e) : undefined);
    } else {
      obj.positions = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryPositionAllocatedMarginResponse>): QueryPositionAllocatedMarginResponse {
    return QueryPositionAllocatedMarginResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryPositionAllocatedMarginResponse>): QueryPositionAllocatedMarginResponse {
    const message = createBaseQueryPositionAllocatedMarginResponse();
    message.positions = object.positions?.map((e) => PositionAllocatedMargin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryGetOpenInterestRequest(): QueryGetOpenInterestRequest {
  return { marketId: "" };
}

export const QueryGetOpenInterestRequest = {
  encode(message: QueryGetOpenInterestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOpenInterestRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOpenInterestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.marketId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetOpenInterestRequest {
    return { marketId: isSet(object.marketId) ? String(object.marketId) : "" };
  },

  toJSON(message: QueryGetOpenInterestRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  create(base?: DeepPartial<QueryGetOpenInterestRequest>): QueryGetOpenInterestRequest {
    return QueryGetOpenInterestRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetOpenInterestRequest>): QueryGetOpenInterestRequest {
    const message = createBaseQueryGetOpenInterestRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
};

function createBaseQueryGetOpenInterestResponse(): QueryGetOpenInterestResponse {
  return { openInterest: undefined };
}

export const QueryGetOpenInterestResponse = {
  encode(message: QueryGetOpenInterestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.openInterest !== undefined) {
      OpenInterest.encode(message.openInterest, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOpenInterestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOpenInterestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.openInterest = OpenInterest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetOpenInterestResponse {
    return { openInterest: isSet(object.openInterest) ? OpenInterest.fromJSON(object.openInterest) : undefined };
  },

  toJSON(message: QueryGetOpenInterestResponse): unknown {
    const obj: any = {};
    message.openInterest !== undefined &&
      (obj.openInterest = message.openInterest ? OpenInterest.toJSON(message.openInterest) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryGetOpenInterestResponse>): QueryGetOpenInterestResponse {
    return QueryGetOpenInterestResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGetOpenInterestResponse>): QueryGetOpenInterestResponse {
    const message = createBaseQueryGetOpenInterestResponse();
    message.openInterest = (object.openInterest !== undefined && object.openInterest !== null)
      ? OpenInterest.fromPartial(object.openInterest)
      : undefined;
    return message;
  },
};

function createBaseQueryAllOpenInterestsRequest(): QueryAllOpenInterestsRequest {
  return {};
}

export const QueryAllOpenInterestsRequest = {
  encode(_: QueryAllOpenInterestsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOpenInterestsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOpenInterestsRequest();
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

  fromJSON(_: any): QueryAllOpenInterestsRequest {
    return {};
  },

  toJSON(_: QueryAllOpenInterestsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryAllOpenInterestsRequest>): QueryAllOpenInterestsRequest {
    return QueryAllOpenInterestsRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryAllOpenInterestsRequest>): QueryAllOpenInterestsRequest {
    const message = createBaseQueryAllOpenInterestsRequest();
    return message;
  },
};

function createBaseQueryAllOpenInterestsResponse(): QueryAllOpenInterestsResponse {
  return { openInterests: [] };
}

export const QueryAllOpenInterestsResponse = {
  encode(message: QueryAllOpenInterestsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.openInterests) {
      OpenInterest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOpenInterestsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOpenInterestsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.openInterests.push(OpenInterest.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllOpenInterestsResponse {
    return {
      openInterests: Array.isArray(object?.openInterests)
        ? object.openInterests.map((e: any) => OpenInterest.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryAllOpenInterestsResponse): unknown {
    const obj: any = {};
    if (message.openInterests) {
      obj.openInterests = message.openInterests.map((e) => e ? OpenInterest.toJSON(e) : undefined);
    } else {
      obj.openInterests = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryAllOpenInterestsResponse>): QueryAllOpenInterestsResponse {
    return QueryAllOpenInterestsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllOpenInterestsResponse>): QueryAllOpenInterestsResponse {
    const message = createBaseQueryAllOpenInterestsResponse();
    message.openInterests = object.openInterests?.map((e) => OpenInterest.fromPartial(e)) || [];
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  Position(request: QueryGetPositionRequest): Promise<QueryGetPositionResponse>;
  PositionAll(request: QueryAllPositionRequest): Promise<QueryAllPositionResponse>;
  PositionAllocatedMargin(request: QueryPositionAllocatedMarginRequest): Promise<QueryPositionAllocatedMarginResponse>;
  OpenInterest(request: QueryGetOpenInterestRequest): Promise<QueryGetOpenInterestResponse>;
  OpenInterestAll(request: QueryAllOpenInterestsRequest): Promise<QueryAllOpenInterestsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.position.Query";
    this.rpc = rpc;
    this.Position = this.Position.bind(this);
    this.PositionAll = this.PositionAll.bind(this);
    this.PositionAllocatedMargin = this.PositionAllocatedMargin.bind(this);
    this.OpenInterest = this.OpenInterest.bind(this);
    this.OpenInterestAll = this.OpenInterestAll.bind(this);
    this.CrossMaintenanceMargin = this.CrossMaintenanceMargin.bind(this);
  }
  Position(request: QueryGetPositionRequest): Promise<QueryGetPositionResponse> {
    const data = QueryGetPositionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Position", data);
    return promise.then((data) => QueryGetPositionResponse.decode(_m0.Reader.create(data)));
  }

  PositionAll(request: QueryAllPositionRequest): Promise<QueryAllPositionResponse> {
    const data = QueryAllPositionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PositionAll", data);
    return promise.then((data) => QueryAllPositionResponse.decode(_m0.Reader.create(data)));
  }

  PositionAllocatedMargin(request: QueryPositionAllocatedMarginRequest): Promise<QueryPositionAllocatedMarginResponse> {
    const data = QueryPositionAllocatedMarginRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PositionAllocatedMargin", data);
    return promise.then((data) => QueryPositionAllocatedMarginResponse.decode(_m0.Reader.create(data)));
  }

  OpenInterest(request: QueryGetOpenInterestRequest): Promise<QueryGetOpenInterestResponse> {
    const data = QueryGetOpenInterestRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "OpenInterest", data);
    return promise.then((data) => QueryGetOpenInterestResponse.decode(_m0.Reader.create(data)));
  }

  OpenInterestAll(request: QueryAllOpenInterestsRequest): Promise<QueryAllOpenInterestsResponse> {
    const data = QueryAllOpenInterestsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "OpenInterestAll", data);
    return promise.then((data) => QueryAllOpenInterestsResponse.decode(_m0.Reader.create(data)));
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
