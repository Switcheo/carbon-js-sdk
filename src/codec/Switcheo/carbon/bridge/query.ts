/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import {
  BridgeState,
  Connection,
  ExternalTokenMapping,
  ExecutableContract,
  ExternalExecutor,
} from "./bridge";

export const protobufPackage = "Switcheo.carbon.bridge";

/**
 * this line is used by starport scaffolding # 3
 * QueryParamsRequest is request type for the Query/Params RPC method.
 */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

/** QueryAllBridgeStateRequest all bridge states */
export interface QueryAllBridgeStatesRequest {}

/** QueryAllBridgeStateResponse is response for the query */
export interface QueryAllBridgeStatesResponse {
  /** params holds all the parameters of this module. */
  bridgeStates: BridgeState[];
}

/** QueryAllConnectionsRequest all connections */
export interface QueryAllConnectionsRequest {
  bridgeId: string;
}

/** QueryAllConnectionsResponse is response for the query */
export interface QueryAllConnectionsResponse {
  connections: Connection[];
}

/** QueryAllExternalTokensRequest all ExternalTokens */
export interface QueryAllExternalTokensRequest {
  bridgeId: string;
  chainId: string;
  denom: string;
}

/** QueryAllExternalTokensResponse is response for the query */
export interface QueryAllExternalTokensResponse {
  externalTokens: ExternalTokenMapping[];
}

/** QueryAllExecutableContractsRequest all ExecutableContracts */
export interface QueryAllExecutableContractsRequest {
  bridgeId: string;
  chainId: string;
}

/** QueryAllExecutableContractsResponse is response for the query */
export interface QueryAllExecutableContractsResponse {
  executableContracts: ExecutableContract[];
}

export interface QueryAllExternalExecutorsRequest {
  carbonAddress: string;
}

export interface QueryAllExternalExecutorsResponse {
  externalExecutors: ExternalExecutor[];
}

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

const baseQueryAllBridgeStatesRequest: object = {};

export const QueryAllBridgeStatesRequest = {
  encode(
    _: QueryAllBridgeStatesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllBridgeStatesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBridgeStatesRequest,
    } as QueryAllBridgeStatesRequest;
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

  fromJSON(_: any): QueryAllBridgeStatesRequest {
    const message = {
      ...baseQueryAllBridgeStatesRequest,
    } as QueryAllBridgeStatesRequest;
    return message;
  },

  toJSON(_: QueryAllBridgeStatesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryAllBridgeStatesRequest>
  ): QueryAllBridgeStatesRequest {
    const message = {
      ...baseQueryAllBridgeStatesRequest,
    } as QueryAllBridgeStatesRequest;
    return message;
  },
};

const baseQueryAllBridgeStatesResponse: object = {};

export const QueryAllBridgeStatesResponse = {
  encode(
    message: QueryAllBridgeStatesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.bridgeStates) {
      BridgeState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllBridgeStatesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBridgeStatesResponse,
    } as QueryAllBridgeStatesResponse;
    message.bridgeStates = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bridgeStates.push(
            BridgeState.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBridgeStatesResponse {
    const message = {
      ...baseQueryAllBridgeStatesResponse,
    } as QueryAllBridgeStatesResponse;
    message.bridgeStates = (object.bridgeStates ?? []).map((e: any) =>
      BridgeState.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryAllBridgeStatesResponse): unknown {
    const obj: any = {};
    if (message.bridgeStates) {
      obj.bridgeStates = message.bridgeStates.map((e) =>
        e ? BridgeState.toJSON(e) : undefined
      );
    } else {
      obj.bridgeStates = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBridgeStatesResponse>
  ): QueryAllBridgeStatesResponse {
    const message = {
      ...baseQueryAllBridgeStatesResponse,
    } as QueryAllBridgeStatesResponse;
    message.bridgeStates = (object.bridgeStates ?? []).map((e) =>
      BridgeState.fromPartial(e)
    );
    return message;
  },
};

const baseQueryAllConnectionsRequest: object = { bridgeId: "" };

export const QueryAllConnectionsRequest = {
  encode(
    message: QueryAllConnectionsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bridgeId !== "") {
      writer.uint32(10).string(message.bridgeId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllConnectionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllConnectionsRequest,
    } as QueryAllConnectionsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bridgeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllConnectionsRequest {
    const message = {
      ...baseQueryAllConnectionsRequest,
    } as QueryAllConnectionsRequest;
    message.bridgeId =
      object.bridgeId !== undefined && object.bridgeId !== null
        ? String(object.bridgeId)
        : "";
    return message;
  },

  toJSON(message: QueryAllConnectionsRequest): unknown {
    const obj: any = {};
    message.bridgeId !== undefined && (obj.bridgeId = message.bridgeId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllConnectionsRequest>
  ): QueryAllConnectionsRequest {
    const message = {
      ...baseQueryAllConnectionsRequest,
    } as QueryAllConnectionsRequest;
    message.bridgeId = object.bridgeId ?? "";
    return message;
  },
};

const baseQueryAllConnectionsResponse: object = {};

export const QueryAllConnectionsResponse = {
  encode(
    message: QueryAllConnectionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.connections) {
      Connection.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllConnectionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllConnectionsResponse,
    } as QueryAllConnectionsResponse;
    message.connections = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connections.push(Connection.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllConnectionsResponse {
    const message = {
      ...baseQueryAllConnectionsResponse,
    } as QueryAllConnectionsResponse;
    message.connections = (object.connections ?? []).map((e: any) =>
      Connection.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryAllConnectionsResponse): unknown {
    const obj: any = {};
    if (message.connections) {
      obj.connections = message.connections.map((e) =>
        e ? Connection.toJSON(e) : undefined
      );
    } else {
      obj.connections = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllConnectionsResponse>
  ): QueryAllConnectionsResponse {
    const message = {
      ...baseQueryAllConnectionsResponse,
    } as QueryAllConnectionsResponse;
    message.connections = (object.connections ?? []).map((e) =>
      Connection.fromPartial(e)
    );
    return message;
  },
};

const baseQueryAllExternalTokensRequest: object = {
  bridgeId: "",
  chainId: "",
  denom: "",
};

export const QueryAllExternalTokensRequest = {
  encode(
    message: QueryAllExternalTokensRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bridgeId !== "") {
      writer.uint32(10).string(message.bridgeId);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllExternalTokensRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllExternalTokensRequest,
    } as QueryAllExternalTokensRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bridgeId = reader.string();
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllExternalTokensRequest {
    const message = {
      ...baseQueryAllExternalTokensRequest,
    } as QueryAllExternalTokensRequest;
    message.bridgeId =
      object.bridgeId !== undefined && object.bridgeId !== null
        ? String(object.bridgeId)
        : "";
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? String(object.chainId)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: QueryAllExternalTokensRequest): unknown {
    const obj: any = {};
    message.bridgeId !== undefined && (obj.bridgeId = message.bridgeId);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllExternalTokensRequest>
  ): QueryAllExternalTokensRequest {
    const message = {
      ...baseQueryAllExternalTokensRequest,
    } as QueryAllExternalTokensRequest;
    message.bridgeId = object.bridgeId ?? "";
    message.chainId = object.chainId ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseQueryAllExternalTokensResponse: object = {};

export const QueryAllExternalTokensResponse = {
  encode(
    message: QueryAllExternalTokensResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.externalTokens) {
      ExternalTokenMapping.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllExternalTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllExternalTokensResponse,
    } as QueryAllExternalTokensResponse;
    message.externalTokens = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.externalTokens.push(
            ExternalTokenMapping.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllExternalTokensResponse {
    const message = {
      ...baseQueryAllExternalTokensResponse,
    } as QueryAllExternalTokensResponse;
    message.externalTokens = (object.externalTokens ?? []).map((e: any) =>
      ExternalTokenMapping.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryAllExternalTokensResponse): unknown {
    const obj: any = {};
    if (message.externalTokens) {
      obj.externalTokens = message.externalTokens.map((e) =>
        e ? ExternalTokenMapping.toJSON(e) : undefined
      );
    } else {
      obj.externalTokens = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllExternalTokensResponse>
  ): QueryAllExternalTokensResponse {
    const message = {
      ...baseQueryAllExternalTokensResponse,
    } as QueryAllExternalTokensResponse;
    message.externalTokens = (object.externalTokens ?? []).map((e) =>
      ExternalTokenMapping.fromPartial(e)
    );
    return message;
  },
};

const baseQueryAllExecutableContractsRequest: object = {
  bridgeId: "",
  chainId: "",
};

export const QueryAllExecutableContractsRequest = {
  encode(
    message: QueryAllExecutableContractsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bridgeId !== "") {
      writer.uint32(10).string(message.bridgeId);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllExecutableContractsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllExecutableContractsRequest,
    } as QueryAllExecutableContractsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bridgeId = reader.string();
          break;
        case 2:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllExecutableContractsRequest {
    const message = {
      ...baseQueryAllExecutableContractsRequest,
    } as QueryAllExecutableContractsRequest;
    message.bridgeId =
      object.bridgeId !== undefined && object.bridgeId !== null
        ? String(object.bridgeId)
        : "";
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? String(object.chainId)
        : "";
    return message;
  },

  toJSON(message: QueryAllExecutableContractsRequest): unknown {
    const obj: any = {};
    message.bridgeId !== undefined && (obj.bridgeId = message.bridgeId);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllExecutableContractsRequest>
  ): QueryAllExecutableContractsRequest {
    const message = {
      ...baseQueryAllExecutableContractsRequest,
    } as QueryAllExecutableContractsRequest;
    message.bridgeId = object.bridgeId ?? "";
    message.chainId = object.chainId ?? "";
    return message;
  },
};

const baseQueryAllExecutableContractsResponse: object = {};

export const QueryAllExecutableContractsResponse = {
  encode(
    message: QueryAllExecutableContractsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.executableContracts) {
      ExecutableContract.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllExecutableContractsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllExecutableContractsResponse,
    } as QueryAllExecutableContractsResponse;
    message.executableContracts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.executableContracts.push(
            ExecutableContract.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllExecutableContractsResponse {
    const message = {
      ...baseQueryAllExecutableContractsResponse,
    } as QueryAllExecutableContractsResponse;
    message.executableContracts = (object.executableContracts ?? []).map(
      (e: any) => ExecutableContract.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryAllExecutableContractsResponse): unknown {
    const obj: any = {};
    if (message.executableContracts) {
      obj.executableContracts = message.executableContracts.map((e) =>
        e ? ExecutableContract.toJSON(e) : undefined
      );
    } else {
      obj.executableContracts = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllExecutableContractsResponse>
  ): QueryAllExecutableContractsResponse {
    const message = {
      ...baseQueryAllExecutableContractsResponse,
    } as QueryAllExecutableContractsResponse;
    message.executableContracts = (object.executableContracts ?? []).map((e) =>
      ExecutableContract.fromPartial(e)
    );
    return message;
  },
};

const baseQueryAllExternalExecutorsRequest: object = { carbonAddress: "" };

export const QueryAllExternalExecutorsRequest = {
  encode(
    message: QueryAllExternalExecutorsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.carbonAddress !== "") {
      writer.uint32(10).string(message.carbonAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllExternalExecutorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllExternalExecutorsRequest,
    } as QueryAllExternalExecutorsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.carbonAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllExternalExecutorsRequest {
    const message = {
      ...baseQueryAllExternalExecutorsRequest,
    } as QueryAllExternalExecutorsRequest;
    message.carbonAddress =
      object.carbonAddress !== undefined && object.carbonAddress !== null
        ? String(object.carbonAddress)
        : "";
    return message;
  },

  toJSON(message: QueryAllExternalExecutorsRequest): unknown {
    const obj: any = {};
    message.carbonAddress !== undefined &&
      (obj.carbonAddress = message.carbonAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllExternalExecutorsRequest>
  ): QueryAllExternalExecutorsRequest {
    const message = {
      ...baseQueryAllExternalExecutorsRequest,
    } as QueryAllExternalExecutorsRequest;
    message.carbonAddress = object.carbonAddress ?? "";
    return message;
  },
};

const baseQueryAllExternalExecutorsResponse: object = {};

export const QueryAllExternalExecutorsResponse = {
  encode(
    message: QueryAllExternalExecutorsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.externalExecutors) {
      ExternalExecutor.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllExternalExecutorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllExternalExecutorsResponse,
    } as QueryAllExternalExecutorsResponse;
    message.externalExecutors = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.externalExecutors.push(
            ExternalExecutor.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllExternalExecutorsResponse {
    const message = {
      ...baseQueryAllExternalExecutorsResponse,
    } as QueryAllExternalExecutorsResponse;
    message.externalExecutors = (object.externalExecutors ?? []).map((e: any) =>
      ExternalExecutor.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryAllExternalExecutorsResponse): unknown {
    const obj: any = {};
    if (message.externalExecutors) {
      obj.externalExecutors = message.externalExecutors.map((e) =>
        e ? ExternalExecutor.toJSON(e) : undefined
      );
    } else {
      obj.externalExecutors = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllExternalExecutorsResponse>
  ): QueryAllExternalExecutorsResponse {
    const message = {
      ...baseQueryAllExternalExecutorsResponse,
    } as QueryAllExternalExecutorsResponse;
    message.externalExecutors = (object.externalExecutors ?? []).map((e) =>
      ExternalExecutor.fromPartial(e)
    );
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * this line is used by starport scaffolding # 2
   * Parameters queries the parameters of the module.
   */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Get all bridge states */
  BridgeStateAll(
    request: QueryAllBridgeStatesRequest
  ): Promise<QueryAllBridgeStatesResponse>;
  /** Get all connections */
  ConnectionAll(
    request: QueryAllConnectionsRequest
  ): Promise<QueryAllConnectionsResponse>;
  /** Get all external tokens */
  ExternalTokenAll(
    request: QueryAllExternalTokensRequest
  ): Promise<QueryAllExternalTokensResponse>;
  /** Get all executable contracts */
  ExecutableContractsAll(
    request: QueryAllExecutableContractsRequest
  ): Promise<QueryAllExecutableContractsResponse>;
  /** Get all external executors */
  ExternalExecutorAll(
    request: QueryAllExternalExecutorsRequest
  ): Promise<QueryAllExternalExecutorsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.BridgeStateAll = this.BridgeStateAll.bind(this);
    this.ConnectionAll = this.ConnectionAll.bind(this);
    this.ExternalTokenAll = this.ExternalTokenAll.bind(this);
    this.ExecutableContractsAll = this.ExecutableContractsAll.bind(this);
    this.ExternalExecutorAll = this.ExternalExecutorAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  BridgeStateAll(
    request: QueryAllBridgeStatesRequest
  ): Promise<QueryAllBridgeStatesResponse> {
    const data = QueryAllBridgeStatesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Query",
      "BridgeStateAll",
      data
    );
    return promise.then((data) =>
      QueryAllBridgeStatesResponse.decode(new _m0.Reader(data))
    );
  }

  ConnectionAll(
    request: QueryAllConnectionsRequest
  ): Promise<QueryAllConnectionsResponse> {
    const data = QueryAllConnectionsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Query",
      "ConnectionAll",
      data
    );
    return promise.then((data) =>
      QueryAllConnectionsResponse.decode(new _m0.Reader(data))
    );
  }

  ExternalTokenAll(
    request: QueryAllExternalTokensRequest
  ): Promise<QueryAllExternalTokensResponse> {
    const data = QueryAllExternalTokensRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Query",
      "ExternalTokenAll",
      data
    );
    return promise.then((data) =>
      QueryAllExternalTokensResponse.decode(new _m0.Reader(data))
    );
  }

  ExecutableContractsAll(
    request: QueryAllExecutableContractsRequest
  ): Promise<QueryAllExecutableContractsResponse> {
    const data = QueryAllExecutableContractsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Query",
      "ExecutableContractsAll",
      data
    );
    return promise.then((data) =>
      QueryAllExecutableContractsResponse.decode(new _m0.Reader(data))
    );
  }

  ExternalExecutorAll(
    request: QueryAllExternalExecutorsRequest
  ): Promise<QueryAllExternalExecutorsResponse> {
    const data = QueryAllExternalExecutorsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Query",
      "ExternalExecutorAll",
      data
    );
    return promise.then((data) =>
      QueryAllExternalExecutorsResponse.decode(new _m0.Reader(data))
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
