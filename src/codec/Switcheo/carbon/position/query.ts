/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  Position,
  OpenInterest,
  APIPosition,
  PositionAllocatedMargin,
} from "./position";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";

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

export interface QueryAllOpenInterestsRequest {}

export interface QueryAllOpenInterestsResponse {
  openInterests: OpenInterest[];
}

const baseQueryGetPositionRequest: object = { address: "", marketId: "" };

export const QueryGetPositionRequest = {
  encode(
    message: QueryGetPositionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetPositionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPositionRequest,
    } as QueryGetPositionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPositionRequest {
    const message = {
      ...baseQueryGetPositionRequest,
    } as QueryGetPositionRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    return message;
  },

  toJSON(message: QueryGetPositionRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPositionRequest>
  ): QueryGetPositionRequest {
    const message = {
      ...baseQueryGetPositionRequest,
    } as QueryGetPositionRequest;
    message.address = object.address ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  },
};

const baseQueryGetPositionResponse: object = {};

export const QueryGetPositionResponse = {
  encode(
    message: QueryGetPositionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetPositionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPositionResponse,
    } as QueryGetPositionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position = Position.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPositionResponse {
    const message = {
      ...baseQueryGetPositionResponse,
    } as QueryGetPositionResponse;
    message.position =
      object.position !== undefined && object.position !== null
        ? Position.fromJSON(object.position)
        : undefined;
    return message;
  },

  toJSON(message: QueryGetPositionResponse): unknown {
    const obj: any = {};
    message.position !== undefined &&
      (obj.position = message.position
        ? Position.toJSON(message.position)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPositionResponse>
  ): QueryGetPositionResponse {
    const message = {
      ...baseQueryGetPositionResponse,
    } as QueryGetPositionResponse;
    message.position =
      object.position !== undefined && object.position !== null
        ? Position.fromPartial(object.position)
        : undefined;
    return message;
  },
};

const baseQueryAllPositionRequest: object = {
  address: "",
  marketId: "",
  status: "",
};

export const QueryAllPositionRequest = {
  encode(
    message: QueryAllPositionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllPositionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPositionRequest,
    } as QueryAllPositionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        case 3:
          message.status = reader.string();
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

  fromJSON(object: any): QueryAllPositionRequest {
    const message = {
      ...baseQueryAllPositionRequest,
    } as QueryAllPositionRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.status =
      object.status !== undefined && object.status !== null
        ? String(object.status)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllPositionRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.status !== undefined && (obj.status = message.status);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPositionRequest>
  ): QueryAllPositionRequest {
    const message = {
      ...baseQueryAllPositionRequest,
    } as QueryAllPositionRequest;
    message.address = object.address ?? "";
    message.marketId = object.marketId ?? "";
    message.status = object.status ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllPositionResponse: object = {};

export const QueryAllPositionResponse = {
  encode(
    message: QueryAllPositionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.positions) {
      APIPosition.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllPositionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPositionResponse,
    } as QueryAllPositionResponse;
    message.positions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positions.push(APIPosition.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPositionResponse {
    const message = {
      ...baseQueryAllPositionResponse,
    } as QueryAllPositionResponse;
    message.positions = (object.positions ?? []).map((e: any) =>
      APIPosition.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllPositionResponse): unknown {
    const obj: any = {};
    if (message.positions) {
      obj.positions = message.positions.map((e) =>
        e ? APIPosition.toJSON(e) : undefined
      );
    } else {
      obj.positions = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPositionResponse>
  ): QueryAllPositionResponse {
    const message = {
      ...baseQueryAllPositionResponse,
    } as QueryAllPositionResponse;
    message.positions = (object.positions ?? []).map((e) =>
      APIPosition.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryPositionAllocatedMarginRequest: object = { endBlockHeight: "" };

export const QueryPositionAllocatedMarginRequest = {
  encode(
    message: QueryPositionAllocatedMarginRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.endBlockHeight !== "") {
      writer.uint32(10).string(message.endBlockHeight);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPositionAllocatedMarginRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryPositionAllocatedMarginRequest,
    } as QueryPositionAllocatedMarginRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.endBlockHeight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPositionAllocatedMarginRequest {
    const message = {
      ...baseQueryPositionAllocatedMarginRequest,
    } as QueryPositionAllocatedMarginRequest;
    message.endBlockHeight =
      object.endBlockHeight !== undefined && object.endBlockHeight !== null
        ? String(object.endBlockHeight)
        : "";
    return message;
  },

  toJSON(message: QueryPositionAllocatedMarginRequest): unknown {
    const obj: any = {};
    message.endBlockHeight !== undefined &&
      (obj.endBlockHeight = message.endBlockHeight);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPositionAllocatedMarginRequest>
  ): QueryPositionAllocatedMarginRequest {
    const message = {
      ...baseQueryPositionAllocatedMarginRequest,
    } as QueryPositionAllocatedMarginRequest;
    message.endBlockHeight = object.endBlockHeight ?? "";
    return message;
  },
};

const baseQueryPositionAllocatedMarginResponse: object = {};

export const QueryPositionAllocatedMarginResponse = {
  encode(
    message: QueryPositionAllocatedMarginResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.positions) {
      PositionAllocatedMargin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPositionAllocatedMarginResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryPositionAllocatedMarginResponse,
    } as QueryPositionAllocatedMarginResponse;
    message.positions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positions.push(
            PositionAllocatedMargin.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPositionAllocatedMarginResponse {
    const message = {
      ...baseQueryPositionAllocatedMarginResponse,
    } as QueryPositionAllocatedMarginResponse;
    message.positions = (object.positions ?? []).map((e: any) =>
      PositionAllocatedMargin.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryPositionAllocatedMarginResponse): unknown {
    const obj: any = {};
    if (message.positions) {
      obj.positions = message.positions.map((e) =>
        e ? PositionAllocatedMargin.toJSON(e) : undefined
      );
    } else {
      obj.positions = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPositionAllocatedMarginResponse>
  ): QueryPositionAllocatedMarginResponse {
    const message = {
      ...baseQueryPositionAllocatedMarginResponse,
    } as QueryPositionAllocatedMarginResponse;
    message.positions = (object.positions ?? []).map((e) =>
      PositionAllocatedMargin.fromPartial(e)
    );
    return message;
  },
};

const baseQueryGetOpenInterestRequest: object = { marketId: "" };

export const QueryGetOpenInterestRequest = {
  encode(
    message: QueryGetOpenInterestRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetOpenInterestRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetOpenInterestRequest,
    } as QueryGetOpenInterestRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetOpenInterestRequest {
    const message = {
      ...baseQueryGetOpenInterestRequest,
    } as QueryGetOpenInterestRequest;
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    return message;
  },

  toJSON(message: QueryGetOpenInterestRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetOpenInterestRequest>
  ): QueryGetOpenInterestRequest {
    const message = {
      ...baseQueryGetOpenInterestRequest,
    } as QueryGetOpenInterestRequest;
    message.marketId = object.marketId ?? "";
    return message;
  },
};

const baseQueryGetOpenInterestResponse: object = {};

export const QueryGetOpenInterestResponse = {
  encode(
    message: QueryGetOpenInterestResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.openInterest !== undefined) {
      OpenInterest.encode(
        message.openInterest,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetOpenInterestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetOpenInterestResponse,
    } as QueryGetOpenInterestResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.openInterest = OpenInterest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetOpenInterestResponse {
    const message = {
      ...baseQueryGetOpenInterestResponse,
    } as QueryGetOpenInterestResponse;
    message.openInterest =
      object.openInterest !== undefined && object.openInterest !== null
        ? OpenInterest.fromJSON(object.openInterest)
        : undefined;
    return message;
  },

  toJSON(message: QueryGetOpenInterestResponse): unknown {
    const obj: any = {};
    message.openInterest !== undefined &&
      (obj.openInterest = message.openInterest
        ? OpenInterest.toJSON(message.openInterest)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetOpenInterestResponse>
  ): QueryGetOpenInterestResponse {
    const message = {
      ...baseQueryGetOpenInterestResponse,
    } as QueryGetOpenInterestResponse;
    message.openInterest =
      object.openInterest !== undefined && object.openInterest !== null
        ? OpenInterest.fromPartial(object.openInterest)
        : undefined;
    return message;
  },
};

const baseQueryAllOpenInterestsRequest: object = {};

export const QueryAllOpenInterestsRequest = {
  encode(
    _: QueryAllOpenInterestsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllOpenInterestsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllOpenInterestsRequest,
    } as QueryAllOpenInterestsRequest;
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

  fromJSON(_: any): QueryAllOpenInterestsRequest {
    const message = {
      ...baseQueryAllOpenInterestsRequest,
    } as QueryAllOpenInterestsRequest;
    return message;
  },

  toJSON(_: QueryAllOpenInterestsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryAllOpenInterestsRequest>
  ): QueryAllOpenInterestsRequest {
    const message = {
      ...baseQueryAllOpenInterestsRequest,
    } as QueryAllOpenInterestsRequest;
    return message;
  },
};

const baseQueryAllOpenInterestsResponse: object = {};

export const QueryAllOpenInterestsResponse = {
  encode(
    message: QueryAllOpenInterestsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.openInterests) {
      OpenInterest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllOpenInterestsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllOpenInterestsResponse,
    } as QueryAllOpenInterestsResponse;
    message.openInterests = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.openInterests.push(
            OpenInterest.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllOpenInterestsResponse {
    const message = {
      ...baseQueryAllOpenInterestsResponse,
    } as QueryAllOpenInterestsResponse;
    message.openInterests = (object.openInterests ?? []).map((e: any) =>
      OpenInterest.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryAllOpenInterestsResponse): unknown {
    const obj: any = {};
    if (message.openInterests) {
      obj.openInterests = message.openInterests.map((e) =>
        e ? OpenInterest.toJSON(e) : undefined
      );
    } else {
      obj.openInterests = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllOpenInterestsResponse>
  ): QueryAllOpenInterestsResponse {
    const message = {
      ...baseQueryAllOpenInterestsResponse,
    } as QueryAllOpenInterestsResponse;
    message.openInterests = (object.openInterests ?? []).map((e) =>
      OpenInterest.fromPartial(e)
    );
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  Position(request: QueryGetPositionRequest): Promise<QueryGetPositionResponse>;
  PositionAll(
    request: QueryAllPositionRequest
  ): Promise<QueryAllPositionResponse>;
  PositionAllocatedMargin(
    request: QueryPositionAllocatedMarginRequest
  ): Promise<QueryPositionAllocatedMarginResponse>;
  OpenInterest(
    request: QueryGetOpenInterestRequest
  ): Promise<QueryGetOpenInterestResponse>;
  OpenInterestAll(
    request: QueryAllOpenInterestsRequest
  ): Promise<QueryAllOpenInterestsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Position = this.Position.bind(this);
    this.PositionAll = this.PositionAll.bind(this);
    this.PositionAllocatedMargin = this.PositionAllocatedMargin.bind(this);
    this.OpenInterest = this.OpenInterest.bind(this);
    this.OpenInterestAll = this.OpenInterestAll.bind(this);
  }
  Position(
    request: QueryGetPositionRequest
  ): Promise<QueryGetPositionResponse> {
    const data = QueryGetPositionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.position.Query",
      "Position",
      data
    );
    return promise.then((data) =>
      QueryGetPositionResponse.decode(new _m0.Reader(data))
    );
  }

  PositionAll(
    request: QueryAllPositionRequest
  ): Promise<QueryAllPositionResponse> {
    const data = QueryAllPositionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.position.Query",
      "PositionAll",
      data
    );
    return promise.then((data) =>
      QueryAllPositionResponse.decode(new _m0.Reader(data))
    );
  }

  PositionAllocatedMargin(
    request: QueryPositionAllocatedMarginRequest
  ): Promise<QueryPositionAllocatedMarginResponse> {
    const data = QueryPositionAllocatedMarginRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.position.Query",
      "PositionAllocatedMargin",
      data
    );
    return promise.then((data) =>
      QueryPositionAllocatedMarginResponse.decode(new _m0.Reader(data))
    );
  }

  OpenInterest(
    request: QueryGetOpenInterestRequest
  ): Promise<QueryGetOpenInterestResponse> {
    const data = QueryGetOpenInterestRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.position.Query",
      "OpenInterest",
      data
    );
    return promise.then((data) =>
      QueryGetOpenInterestResponse.decode(new _m0.Reader(data))
    );
  }

  OpenInterestAll(
    request: QueryAllOpenInterestsRequest
  ): Promise<QueryAllOpenInterestsResponse> {
    const data = QueryAllOpenInterestsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.position.Query",
      "OpenInterestAll",
      data
    );
    return promise.then((data) =>
      QueryAllOpenInterestsResponse.decode(new _m0.Reader(data))
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
