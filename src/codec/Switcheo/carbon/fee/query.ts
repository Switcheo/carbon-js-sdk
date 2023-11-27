/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { MsgGasCost, MinGasPrice } from "./fee";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "Switcheo.carbon.fee";

/** this line is used by starport scaffolding # 3 */
export interface QueryGetMsgGasCostRequest {
  msgType: string;
}

export interface QueryGetMsgGasCostResponse {
  msgGasCost?: MsgGasCost;
}

export interface QueryAllMsgGasCostRequest {
  pagination?: PageRequest;
}

export interface QueryAllMsgGasCostResponse {
  msgGasCosts: MsgGasCost[];
  pagination?: PageResponse;
}

export interface QueryGetMinGasPriceRequest {
  denom: string;
}

export interface QueryGetMinGasPriceResponse {
  minGasPrice?: MinGasPrice;
}

export interface QueryAllMinGasPriceRequest {
  pagination?: PageRequest;
}

export interface QueryAllMinGasPriceResponse {
  minGasPrices: MinGasPrice[];
  pagination?: PageResponse;
}

const baseQueryGetMsgGasCostRequest: object = { msgType: "" };

export const QueryGetMsgGasCostRequest = {
  encode(
    message: QueryGetMsgGasCostRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.msgType !== "") {
      writer.uint32(10).string(message.msgType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetMsgGasCostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMsgGasCostRequest,
    } as QueryGetMsgGasCostRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMsgGasCostRequest {
    const message = {
      ...baseQueryGetMsgGasCostRequest,
    } as QueryGetMsgGasCostRequest;
    message.msgType =
      object.msgType !== undefined && object.msgType !== null
        ? String(object.msgType)
        : "";
    return message;
  },

  toJSON(message: QueryGetMsgGasCostRequest): unknown {
    const obj: any = {};
    message.msgType !== undefined && (obj.msgType = message.msgType);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMsgGasCostRequest>
  ): QueryGetMsgGasCostRequest {
    const message = {
      ...baseQueryGetMsgGasCostRequest,
    } as QueryGetMsgGasCostRequest;
    message.msgType = object.msgType ?? "";
    return message;
  },
};

const baseQueryGetMsgGasCostResponse: object = {};

export const QueryGetMsgGasCostResponse = {
  encode(
    message: QueryGetMsgGasCostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.msgGasCost !== undefined) {
      MsgGasCost.encode(message.msgGasCost, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetMsgGasCostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMsgGasCostResponse,
    } as QueryGetMsgGasCostResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgGasCost = MsgGasCost.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMsgGasCostResponse {
    const message = {
      ...baseQueryGetMsgGasCostResponse,
    } as QueryGetMsgGasCostResponse;
    message.msgGasCost =
      object.msgGasCost !== undefined && object.msgGasCost !== null
        ? MsgGasCost.fromJSON(object.msgGasCost)
        : undefined;
    return message;
  },

  toJSON(message: QueryGetMsgGasCostResponse): unknown {
    const obj: any = {};
    message.msgGasCost !== undefined &&
      (obj.msgGasCost = message.msgGasCost
        ? MsgGasCost.toJSON(message.msgGasCost)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMsgGasCostResponse>
  ): QueryGetMsgGasCostResponse {
    const message = {
      ...baseQueryGetMsgGasCostResponse,
    } as QueryGetMsgGasCostResponse;
    message.msgGasCost =
      object.msgGasCost !== undefined && object.msgGasCost !== null
        ? MsgGasCost.fromPartial(object.msgGasCost)
        : undefined;
    return message;
  },
};

const baseQueryAllMsgGasCostRequest: object = {};

export const QueryAllMsgGasCostRequest = {
  encode(
    message: QueryAllMsgGasCostRequest,
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
  ): QueryAllMsgGasCostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMsgGasCostRequest,
    } as QueryAllMsgGasCostRequest;
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

  fromJSON(object: any): QueryAllMsgGasCostRequest {
    const message = {
      ...baseQueryAllMsgGasCostRequest,
    } as QueryAllMsgGasCostRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllMsgGasCostRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMsgGasCostRequest>
  ): QueryAllMsgGasCostRequest {
    const message = {
      ...baseQueryAllMsgGasCostRequest,
    } as QueryAllMsgGasCostRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllMsgGasCostResponse: object = {};

export const QueryAllMsgGasCostResponse = {
  encode(
    message: QueryAllMsgGasCostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.msgGasCosts) {
      MsgGasCost.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllMsgGasCostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMsgGasCostResponse,
    } as QueryAllMsgGasCostResponse;
    message.msgGasCosts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgGasCosts.push(MsgGasCost.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllMsgGasCostResponse {
    const message = {
      ...baseQueryAllMsgGasCostResponse,
    } as QueryAllMsgGasCostResponse;
    message.msgGasCosts = (object.msgGasCosts ?? []).map((e: any) =>
      MsgGasCost.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllMsgGasCostResponse): unknown {
    const obj: any = {};
    if (message.msgGasCosts) {
      obj.msgGasCosts = message.msgGasCosts.map((e) =>
        e ? MsgGasCost.toJSON(e) : undefined
      );
    } else {
      obj.msgGasCosts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMsgGasCostResponse>
  ): QueryAllMsgGasCostResponse {
    const message = {
      ...baseQueryAllMsgGasCostResponse,
    } as QueryAllMsgGasCostResponse;
    message.msgGasCosts = (object.msgGasCosts ?? []).map((e) =>
      MsgGasCost.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryGetMinGasPriceRequest: object = { denom: "" };

export const QueryGetMinGasPriceRequest = {
  encode(
    message: QueryGetMinGasPriceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetMinGasPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMinGasPriceRequest,
    } as QueryGetMinGasPriceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMinGasPriceRequest {
    const message = {
      ...baseQueryGetMinGasPriceRequest,
    } as QueryGetMinGasPriceRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: QueryGetMinGasPriceRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMinGasPriceRequest>
  ): QueryGetMinGasPriceRequest {
    const message = {
      ...baseQueryGetMinGasPriceRequest,
    } as QueryGetMinGasPriceRequest;
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseQueryGetMinGasPriceResponse: object = {};

export const QueryGetMinGasPriceResponse = {
  encode(
    message: QueryGetMinGasPriceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.minGasPrice !== undefined) {
      MinGasPrice.encode(
        message.minGasPrice,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetMinGasPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMinGasPriceResponse,
    } as QueryGetMinGasPriceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minGasPrice = MinGasPrice.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMinGasPriceResponse {
    const message = {
      ...baseQueryGetMinGasPriceResponse,
    } as QueryGetMinGasPriceResponse;
    message.minGasPrice =
      object.minGasPrice !== undefined && object.minGasPrice !== null
        ? MinGasPrice.fromJSON(object.minGasPrice)
        : undefined;
    return message;
  },

  toJSON(message: QueryGetMinGasPriceResponse): unknown {
    const obj: any = {};
    message.minGasPrice !== undefined &&
      (obj.minGasPrice = message.minGasPrice
        ? MinGasPrice.toJSON(message.minGasPrice)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMinGasPriceResponse>
  ): QueryGetMinGasPriceResponse {
    const message = {
      ...baseQueryGetMinGasPriceResponse,
    } as QueryGetMinGasPriceResponse;
    message.minGasPrice =
      object.minGasPrice !== undefined && object.minGasPrice !== null
        ? MinGasPrice.fromPartial(object.minGasPrice)
        : undefined;
    return message;
  },
};

const baseQueryAllMinGasPriceRequest: object = {};

export const QueryAllMinGasPriceRequest = {
  encode(
    message: QueryAllMinGasPriceRequest,
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
  ): QueryAllMinGasPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMinGasPriceRequest,
    } as QueryAllMinGasPriceRequest;
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

  fromJSON(object: any): QueryAllMinGasPriceRequest {
    const message = {
      ...baseQueryAllMinGasPriceRequest,
    } as QueryAllMinGasPriceRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllMinGasPriceRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMinGasPriceRequest>
  ): QueryAllMinGasPriceRequest {
    const message = {
      ...baseQueryAllMinGasPriceRequest,
    } as QueryAllMinGasPriceRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllMinGasPriceResponse: object = {};

export const QueryAllMinGasPriceResponse = {
  encode(
    message: QueryAllMinGasPriceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.minGasPrices) {
      MinGasPrice.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllMinGasPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMinGasPriceResponse,
    } as QueryAllMinGasPriceResponse;
    message.minGasPrices = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minGasPrices.push(
            MinGasPrice.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllMinGasPriceResponse {
    const message = {
      ...baseQueryAllMinGasPriceResponse,
    } as QueryAllMinGasPriceResponse;
    message.minGasPrices = (object.minGasPrices ?? []).map((e: any) =>
      MinGasPrice.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllMinGasPriceResponse): unknown {
    const obj: any = {};
    if (message.minGasPrices) {
      obj.minGasPrices = message.minGasPrices.map((e) =>
        e ? MinGasPrice.toJSON(e) : undefined
      );
    } else {
      obj.minGasPrices = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMinGasPriceResponse>
  ): QueryAllMinGasPriceResponse {
    const message = {
      ...baseQueryAllMinGasPriceResponse,
    } as QueryAllMinGasPriceResponse;
    message.minGasPrices = (object.minGasPrices ?? []).map((e) =>
      MinGasPrice.fromPartial(e)
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
  /** Get network fee for msg type */
  MsgGasCost(
    request: QueryGetMsgGasCostRequest
  ): Promise<QueryGetMsgGasCostResponse>;
  /** Get network fee for all msg types */
  MsgGasCostAll(
    request: QueryAllMsgGasCostRequest
  ): Promise<QueryAllMsgGasCostResponse>;
  MinGasPrice(
    request: QueryGetMinGasPriceRequest
  ): Promise<QueryGetMinGasPriceResponse>;
  /** Get network fee for all msg types */
  MinGasPriceAll(
    request: QueryAllMinGasPriceRequest
  ): Promise<QueryAllMinGasPriceResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.MsgGasCost = this.MsgGasCost.bind(this);
    this.MsgGasCostAll = this.MsgGasCostAll.bind(this);
    this.MinGasPrice = this.MinGasPrice.bind(this);
    this.MinGasPriceAll = this.MinGasPriceAll.bind(this);
  }
  MsgGasCost(
    request: QueryGetMsgGasCostRequest
  ): Promise<QueryGetMsgGasCostResponse> {
    const data = QueryGetMsgGasCostRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.fee.Query",
      "MsgGasCost",
      data
    );
    return promise.then((data) =>
      QueryGetMsgGasCostResponse.decode(new _m0.Reader(data))
    );
  }

  MsgGasCostAll(
    request: QueryAllMsgGasCostRequest
  ): Promise<QueryAllMsgGasCostResponse> {
    const data = QueryAllMsgGasCostRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.fee.Query",
      "MsgGasCostAll",
      data
    );
    return promise.then((data) =>
      QueryAllMsgGasCostResponse.decode(new _m0.Reader(data))
    );
  }

  MinGasPrice(
    request: QueryGetMinGasPriceRequest
  ): Promise<QueryGetMinGasPriceResponse> {
    const data = QueryGetMinGasPriceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.fee.Query",
      "MinGasPrice",
      data
    );
    return promise.then((data) =>
      QueryGetMinGasPriceResponse.decode(new _m0.Reader(data))
    );
  }

  MinGasPriceAll(
    request: QueryAllMinGasPriceRequest
  ): Promise<QueryAllMinGasPriceResponse> {
    const data = QueryAllMinGasPriceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.fee.Query",
      "MinGasPriceAll",
      data
    );
    return promise.then((data) =>
      QueryAllMinGasPriceResponse.decode(new _m0.Reader(data))
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
