/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { MarketLeverage } from "./leverage";

export const protobufPackage = "Switcheo.carbon.leverage";

/** this line is used by starport scaffolding # 3 */
export interface QueryGetLeverageRequest {
  address: string;
  marketId: string;
}

export interface QueryGetLeverageResponse {
  marketLeverage?: MarketLeverage;
}

export interface QueryAllLeverageRequest {
  address: string;
}

export interface QueryAllLeverageResponse {
  marketLeverages: MarketLeverage[];
}

const baseQueryGetLeverageRequest: object = { address: "", marketId: "" };

export const QueryGetLeverageRequest = {
  encode(
    message: QueryGetLeverageRequest,
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
  ): QueryGetLeverageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetLeverageRequest,
    } as QueryGetLeverageRequest;
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

  fromJSON(object: any): QueryGetLeverageRequest {
    const message = {
      ...baseQueryGetLeverageRequest,
    } as QueryGetLeverageRequest;
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

  toJSON(message: QueryGetLeverageRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetLeverageRequest>
  ): QueryGetLeverageRequest {
    const message = {
      ...baseQueryGetLeverageRequest,
    } as QueryGetLeverageRequest;
    message.address = object.address ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  },
};

const baseQueryGetLeverageResponse: object = {};

export const QueryGetLeverageResponse = {
  encode(
    message: QueryGetLeverageResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketLeverage !== undefined) {
      MarketLeverage.encode(
        message.marketLeverage,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetLeverageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetLeverageResponse,
    } as QueryGetLeverageResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketLeverage = MarketLeverage.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetLeverageResponse {
    const message = {
      ...baseQueryGetLeverageResponse,
    } as QueryGetLeverageResponse;
    message.marketLeverage =
      object.marketLeverage !== undefined && object.marketLeverage !== null
        ? MarketLeverage.fromJSON(object.marketLeverage)
        : undefined;
    return message;
  },

  toJSON(message: QueryGetLeverageResponse): unknown {
    const obj: any = {};
    message.marketLeverage !== undefined &&
      (obj.marketLeverage = message.marketLeverage
        ? MarketLeverage.toJSON(message.marketLeverage)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetLeverageResponse>
  ): QueryGetLeverageResponse {
    const message = {
      ...baseQueryGetLeverageResponse,
    } as QueryGetLeverageResponse;
    message.marketLeverage =
      object.marketLeverage !== undefined && object.marketLeverage !== null
        ? MarketLeverage.fromPartial(object.marketLeverage)
        : undefined;
    return message;
  },
};

const baseQueryAllLeverageRequest: object = { address: "" };

export const QueryAllLeverageRequest = {
  encode(
    message: QueryAllLeverageRequest,
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
  ): QueryAllLeverageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllLeverageRequest,
    } as QueryAllLeverageRequest;
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

  fromJSON(object: any): QueryAllLeverageRequest {
    const message = {
      ...baseQueryAllLeverageRequest,
    } as QueryAllLeverageRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: QueryAllLeverageRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllLeverageRequest>
  ): QueryAllLeverageRequest {
    const message = {
      ...baseQueryAllLeverageRequest,
    } as QueryAllLeverageRequest;
    message.address = object.address ?? "";
    return message;
  },
};

const baseQueryAllLeverageResponse: object = {};

export const QueryAllLeverageResponse = {
  encode(
    message: QueryAllLeverageResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.marketLeverages) {
      MarketLeverage.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllLeverageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllLeverageResponse,
    } as QueryAllLeverageResponse;
    message.marketLeverages = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketLeverages.push(
            MarketLeverage.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllLeverageResponse {
    const message = {
      ...baseQueryAllLeverageResponse,
    } as QueryAllLeverageResponse;
    message.marketLeverages = (object.marketLeverages ?? []).map((e: any) =>
      MarketLeverage.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryAllLeverageResponse): unknown {
    const obj: any = {};
    if (message.marketLeverages) {
      obj.marketLeverages = message.marketLeverages.map((e) =>
        e ? MarketLeverage.toJSON(e) : undefined
      );
    } else {
      obj.marketLeverages = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllLeverageResponse>
  ): QueryAllLeverageResponse {
    const message = {
      ...baseQueryAllLeverageResponse,
    } as QueryAllLeverageResponse;
    message.marketLeverages = (object.marketLeverages ?? []).map((e) =>
      MarketLeverage.fromPartial(e)
    );
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * this line is used by starport scaffolding # 2
   * Leverage returns the leverage which corresponds to the address and market
   */
  Leverage(request: QueryGetLeverageRequest): Promise<QueryGetLeverageResponse>;
  /** LeverageAll returns all leverages for an address, defaults to 1 */
  LeverageAll(
    request: QueryAllLeverageRequest
  ): Promise<QueryAllLeverageResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Leverage = this.Leverage.bind(this);
    this.LeverageAll = this.LeverageAll.bind(this);
  }
  Leverage(
    request: QueryGetLeverageRequest
  ): Promise<QueryGetLeverageResponse> {
    const data = QueryGetLeverageRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.leverage.Query",
      "Leverage",
      data
    );
    return promise.then((data) =>
      QueryGetLeverageResponse.decode(new _m0.Reader(data))
    );
  }

  LeverageAll(
    request: QueryAllLeverageRequest
  ): Promise<QueryAllLeverageResponse> {
    const data = QueryAllLeverageRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.leverage.Query",
      "LeverageAll",
      data
    );
    return promise.then((data) =>
      QueryAllLeverageResponse.decode(new _m0.Reader(data))
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
