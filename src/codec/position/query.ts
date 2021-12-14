/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Position } from "../position/position";

export const protobufPackage = "Switcheo.carbon.position";

/** this line is used by starport scaffolding # 3 */
export interface QueryGetPositionRequest {
  address: string;
  market: string;
}

export interface QueryGetPositionResponse {
  position?: Position;
}

export interface QueryAllPositionRequest {
  address: string;
  beforeId: Long;
  afterId: Long;
  orderBy: string;
  limits: Long;
  status: string;
}

export interface QueryAllPositionResponse {
  positions: Position[];
}

const baseQueryGetPositionRequest: object = { address: "", market: "" };

export const QueryGetPositionRequest = {
  encode(
    message: QueryGetPositionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.market !== "") {
      writer.uint32(18).string(message.market);
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
          message.market = reader.string();
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
    message.market =
      object.market !== undefined && object.market !== null
        ? String(object.market)
        : "";
    return message;
  },

  toJSON(message: QueryGetPositionRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.market !== undefined && (obj.market = message.market);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPositionRequest>
  ): QueryGetPositionRequest {
    const message = {
      ...baseQueryGetPositionRequest,
    } as QueryGetPositionRequest;
    message.address = object.address ?? "";
    message.market = object.market ?? "";
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
  beforeId: Long.UZERO,
  afterId: Long.UZERO,
  orderBy: "",
  limits: Long.UZERO,
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
    if (!message.beforeId.isZero()) {
      writer.uint32(16).uint64(message.beforeId);
    }
    if (!message.afterId.isZero()) {
      writer.uint32(24).uint64(message.afterId);
    }
    if (message.orderBy !== "") {
      writer.uint32(34).string(message.orderBy);
    }
    if (!message.limits.isZero()) {
      writer.uint32(40).uint64(message.limits);
    }
    if (message.status !== "") {
      writer.uint32(50).string(message.status);
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
          message.beforeId = reader.uint64() as Long;
          break;
        case 3:
          message.afterId = reader.uint64() as Long;
          break;
        case 4:
          message.orderBy = reader.string();
          break;
        case 5:
          message.limits = reader.uint64() as Long;
          break;
        case 6:
          message.status = reader.string();
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
    message.beforeId =
      object.beforeId !== undefined && object.beforeId !== null
        ? Long.fromString(object.beforeId)
        : Long.UZERO;
    message.afterId =
      object.afterId !== undefined && object.afterId !== null
        ? Long.fromString(object.afterId)
        : Long.UZERO;
    message.orderBy =
      object.orderBy !== undefined && object.orderBy !== null
        ? String(object.orderBy)
        : "";
    message.limits =
      object.limits !== undefined && object.limits !== null
        ? Long.fromString(object.limits)
        : Long.UZERO;
    message.status =
      object.status !== undefined && object.status !== null
        ? String(object.status)
        : "";
    return message;
  },

  toJSON(message: QueryAllPositionRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.beforeId !== undefined &&
      (obj.beforeId = (message.beforeId || Long.UZERO).toString());
    message.afterId !== undefined &&
      (obj.afterId = (message.afterId || Long.UZERO).toString());
    message.orderBy !== undefined && (obj.orderBy = message.orderBy);
    message.limits !== undefined &&
      (obj.limits = (message.limits || Long.UZERO).toString());
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPositionRequest>
  ): QueryAllPositionRequest {
    const message = {
      ...baseQueryAllPositionRequest,
    } as QueryAllPositionRequest;
    message.address = object.address ?? "";
    message.beforeId =
      object.beforeId !== undefined && object.beforeId !== null
        ? Long.fromValue(object.beforeId)
        : Long.UZERO;
    message.afterId =
      object.afterId !== undefined && object.afterId !== null
        ? Long.fromValue(object.afterId)
        : Long.UZERO;
    message.orderBy = object.orderBy ?? "";
    message.limits =
      object.limits !== undefined && object.limits !== null
        ? Long.fromValue(object.limits)
        : Long.UZERO;
    message.status = object.status ?? "";
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
      Position.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.positions.push(Position.decode(reader, reader.uint32()));
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
      Position.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryAllPositionResponse): unknown {
    const obj: any = {};
    if (message.positions) {
      obj.positions = message.positions.map((e) =>
        e ? Position.toJSON(e) : undefined
      );
    } else {
      obj.positions = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPositionResponse>
  ): QueryAllPositionResponse {
    const message = {
      ...baseQueryAllPositionResponse,
    } as QueryAllPositionResponse;
    message.positions = (object.positions ?? []).map((e) =>
      Position.fromPartial(e)
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
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Position = this.Position.bind(this);
    this.PositionAll = this.PositionAll.bind(this);
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
