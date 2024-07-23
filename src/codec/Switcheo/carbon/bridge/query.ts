/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import {
  ControllerContracts,
  BridgeState,
  Connection,
  ExternalTokenMapping,
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
export interface QueryAllBridgeStatesRequest {
  pagination?: PageRequest;
}

/** QueryAllBridgeStateResponse is response for the query */
export interface QueryAllBridgeStatesResponse {
  /** params holds all the parameters of this module. */
  bridgeStates: BridgeState[];
  pagination?: PageResponse;
}

/** QueryAllConnectionsRequest all connections */
export interface QueryAllConnectionsRequest {
  bridgeId: Long;
  pagination?: PageRequest;
}

/** QueryAllConnectionsResponse is response for the query */
export interface QueryAllConnectionsResponse {
  connections: Connection[];
  pagination?: PageResponse;
}

/** QueryAllExternalTokensRequest all ExternalTokens */
export interface QueryAllExternalTokensRequest {
  bridgeId: Long;
  chainId: string;
  denom: string;
  pagination?: PageRequest;
}

/** QueryAllExternalTokensResponse is response for the query */
export interface QueryAllExternalTokensResponse {
  externalTokens: ExternalTokenMapping[];
  pagination?: PageResponse;
}

export interface QueryCarbonGmpAccountRequest {}

export interface QueryCarbonGmpAccountResponse {
  carbonGmpAccount: string;
}

export interface QueryRelayerRequest {
  address: string;
}

export interface QueryRelayerResponse {
  hasRelayer: boolean;
}

export interface QueryAllRelayerRequest {
  pagination?: PageRequest;
}

export interface QueryAllRelayerResponse {
  relayers: string[];
  pagination?: PageResponse;
}

export interface QueryAllPendingActionNonceRequest {
  pagination?: PageRequest;
}

export interface QueryAllPendingActionNonceResponse {
  pendingActionNonces: Long[];
  pagination?: PageResponse;
}

export interface QueryPendingActionRequest {
  nonce: Long;
}

export interface QueryPendingActionResponse {
  action: string;
}

export interface QueryControllersForConnectionRequest {
  connectionId: string;
}

export interface QueryControllersForConnectionResponse {
  controllers?: ControllerContracts;
}

export interface QueryAllControllersRequest {
  pagination?: PageRequest;
}

export interface QueryAllControllersResponse {
  controllers: ControllerContracts[];
  pagination?: PageResponse;
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
    message: QueryAllBridgeStatesRequest,
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
  ): QueryAllBridgeStatesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBridgeStatesRequest,
    } as QueryAllBridgeStatesRequest;
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

  fromJSON(object: any): QueryAllBridgeStatesRequest {
    const message = {
      ...baseQueryAllBridgeStatesRequest,
    } as QueryAllBridgeStatesRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllBridgeStatesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBridgeStatesRequest>
  ): QueryAllBridgeStatesRequest {
    const message = {
      ...baseQueryAllBridgeStatesRequest,
    } as QueryAllBridgeStatesRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
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

  fromJSON(object: any): QueryAllBridgeStatesResponse {
    const message = {
      ...baseQueryAllBridgeStatesResponse,
    } as QueryAllBridgeStatesResponse;
    message.bridgeStates = (object.bridgeStates ?? []).map((e: any) =>
      BridgeState.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
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
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
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
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllConnectionsRequest: object = { bridgeId: Long.UZERO };

export const QueryAllConnectionsRequest = {
  encode(
    message: QueryAllConnectionsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.bridgeId.isZero()) {
      writer.uint32(8).uint64(message.bridgeId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
          message.bridgeId = reader.uint64() as Long;
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

  fromJSON(object: any): QueryAllConnectionsRequest {
    const message = {
      ...baseQueryAllConnectionsRequest,
    } as QueryAllConnectionsRequest;
    message.bridgeId =
      object.bridgeId !== undefined && object.bridgeId !== null
        ? Long.fromString(object.bridgeId)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllConnectionsRequest): unknown {
    const obj: any = {};
    message.bridgeId !== undefined &&
      (obj.bridgeId = (message.bridgeId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllConnectionsRequest>
  ): QueryAllConnectionsRequest {
    const message = {
      ...baseQueryAllConnectionsRequest,
    } as QueryAllConnectionsRequest;
    message.bridgeId =
      object.bridgeId !== undefined && object.bridgeId !== null
        ? Long.fromValue(object.bridgeId)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
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

  fromJSON(object: any): QueryAllConnectionsResponse {
    const message = {
      ...baseQueryAllConnectionsResponse,
    } as QueryAllConnectionsResponse;
    message.connections = (object.connections ?? []).map((e: any) =>
      Connection.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
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
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
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
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllExternalTokensRequest: object = {
  bridgeId: Long.UZERO,
  chainId: "",
  denom: "",
};

export const QueryAllExternalTokensRequest = {
  encode(
    message: QueryAllExternalTokensRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.bridgeId.isZero()) {
      writer.uint32(8).uint64(message.bridgeId);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
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
          message.bridgeId = reader.uint64() as Long;
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.denom = reader.string();
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

  fromJSON(object: any): QueryAllExternalTokensRequest {
    const message = {
      ...baseQueryAllExternalTokensRequest,
    } as QueryAllExternalTokensRequest;
    message.bridgeId =
      object.bridgeId !== undefined && object.bridgeId !== null
        ? Long.fromString(object.bridgeId)
        : Long.UZERO;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? String(object.chainId)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllExternalTokensRequest): unknown {
    const obj: any = {};
    message.bridgeId !== undefined &&
      (obj.bridgeId = (message.bridgeId || Long.UZERO).toString());
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.denom !== undefined && (obj.denom = message.denom);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllExternalTokensRequest>
  ): QueryAllExternalTokensRequest {
    const message = {
      ...baseQueryAllExternalTokensRequest,
    } as QueryAllExternalTokensRequest;
    message.bridgeId =
      object.bridgeId !== undefined && object.bridgeId !== null
        ? Long.fromValue(object.bridgeId)
        : Long.UZERO;
    message.chainId = object.chainId ?? "";
    message.denom = object.denom ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
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

  fromJSON(object: any): QueryAllExternalTokensResponse {
    const message = {
      ...baseQueryAllExternalTokensResponse,
    } as QueryAllExternalTokensResponse;
    message.externalTokens = (object.externalTokens ?? []).map((e: any) =>
      ExternalTokenMapping.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
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
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
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
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryCarbonGmpAccountRequest: object = {};

export const QueryCarbonGmpAccountRequest = {
  encode(
    _: QueryCarbonGmpAccountRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCarbonGmpAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCarbonGmpAccountRequest,
    } as QueryCarbonGmpAccountRequest;
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

  fromJSON(_: any): QueryCarbonGmpAccountRequest {
    const message = {
      ...baseQueryCarbonGmpAccountRequest,
    } as QueryCarbonGmpAccountRequest;
    return message;
  },

  toJSON(_: QueryCarbonGmpAccountRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryCarbonGmpAccountRequest>
  ): QueryCarbonGmpAccountRequest {
    const message = {
      ...baseQueryCarbonGmpAccountRequest,
    } as QueryCarbonGmpAccountRequest;
    return message;
  },
};

const baseQueryCarbonGmpAccountResponse: object = { carbonGmpAccount: "" };

export const QueryCarbonGmpAccountResponse = {
  encode(
    message: QueryCarbonGmpAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.carbonGmpAccount !== "") {
      writer.uint32(10).string(message.carbonGmpAccount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCarbonGmpAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCarbonGmpAccountResponse,
    } as QueryCarbonGmpAccountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.carbonGmpAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCarbonGmpAccountResponse {
    const message = {
      ...baseQueryCarbonGmpAccountResponse,
    } as QueryCarbonGmpAccountResponse;
    message.carbonGmpAccount =
      object.carbonGmpAccount !== undefined && object.carbonGmpAccount !== null
        ? String(object.carbonGmpAccount)
        : "";
    return message;
  },

  toJSON(message: QueryCarbonGmpAccountResponse): unknown {
    const obj: any = {};
    message.carbonGmpAccount !== undefined &&
      (obj.carbonGmpAccount = message.carbonGmpAccount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCarbonGmpAccountResponse>
  ): QueryCarbonGmpAccountResponse {
    const message = {
      ...baseQueryCarbonGmpAccountResponse,
    } as QueryCarbonGmpAccountResponse;
    message.carbonGmpAccount = object.carbonGmpAccount ?? "";
    return message;
  },
};

const baseQueryRelayerRequest: object = { address: "" };

export const QueryRelayerRequest = {
  encode(
    message: QueryRelayerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRelayerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryRelayerRequest } as QueryRelayerRequest;
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

  fromJSON(object: any): QueryRelayerRequest {
    const message = { ...baseQueryRelayerRequest } as QueryRelayerRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: QueryRelayerRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRelayerRequest>): QueryRelayerRequest {
    const message = { ...baseQueryRelayerRequest } as QueryRelayerRequest;
    message.address = object.address ?? "";
    return message;
  },
};

const baseQueryRelayerResponse: object = { hasRelayer: false };

export const QueryRelayerResponse = {
  encode(
    message: QueryRelayerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.hasRelayer === true) {
      writer.uint32(8).bool(message.hasRelayer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRelayerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryRelayerResponse } as QueryRelayerResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hasRelayer = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRelayerResponse {
    const message = { ...baseQueryRelayerResponse } as QueryRelayerResponse;
    message.hasRelayer =
      object.hasRelayer !== undefined && object.hasRelayer !== null
        ? Boolean(object.hasRelayer)
        : false;
    return message;
  },

  toJSON(message: QueryRelayerResponse): unknown {
    const obj: any = {};
    message.hasRelayer !== undefined && (obj.hasRelayer = message.hasRelayer);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRelayerResponse>): QueryRelayerResponse {
    const message = { ...baseQueryRelayerResponse } as QueryRelayerResponse;
    message.hasRelayer = object.hasRelayer ?? false;
    return message;
  },
};

const baseQueryAllRelayerRequest: object = {};

export const QueryAllRelayerRequest = {
  encode(
    message: QueryAllRelayerRequest,
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
  ): QueryAllRelayerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllRelayerRequest } as QueryAllRelayerRequest;
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

  fromJSON(object: any): QueryAllRelayerRequest {
    const message = { ...baseQueryAllRelayerRequest } as QueryAllRelayerRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllRelayerRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllRelayerRequest>
  ): QueryAllRelayerRequest {
    const message = { ...baseQueryAllRelayerRequest } as QueryAllRelayerRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllRelayerResponse: object = { relayers: "" };

export const QueryAllRelayerResponse = {
  encode(
    message: QueryAllRelayerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.relayers) {
      writer.uint32(10).string(v!);
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
  ): QueryAllRelayerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllRelayerResponse,
    } as QueryAllRelayerResponse;
    message.relayers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.relayers.push(reader.string());
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

  fromJSON(object: any): QueryAllRelayerResponse {
    const message = {
      ...baseQueryAllRelayerResponse,
    } as QueryAllRelayerResponse;
    message.relayers = (object.relayers ?? []).map((e: any) => String(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllRelayerResponse): unknown {
    const obj: any = {};
    if (message.relayers) {
      obj.relayers = message.relayers.map((e) => e);
    } else {
      obj.relayers = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllRelayerResponse>
  ): QueryAllRelayerResponse {
    const message = {
      ...baseQueryAllRelayerResponse,
    } as QueryAllRelayerResponse;
    message.relayers = (object.relayers ?? []).map((e) => e);
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllPendingActionNonceRequest: object = {};

export const QueryAllPendingActionNonceRequest = {
  encode(
    message: QueryAllPendingActionNonceRequest,
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
  ): QueryAllPendingActionNonceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPendingActionNonceRequest,
    } as QueryAllPendingActionNonceRequest;
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

  fromJSON(object: any): QueryAllPendingActionNonceRequest {
    const message = {
      ...baseQueryAllPendingActionNonceRequest,
    } as QueryAllPendingActionNonceRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllPendingActionNonceRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPendingActionNonceRequest>
  ): QueryAllPendingActionNonceRequest {
    const message = {
      ...baseQueryAllPendingActionNonceRequest,
    } as QueryAllPendingActionNonceRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllPendingActionNonceResponse: object = {
  pendingActionNonces: Long.UZERO,
};

export const QueryAllPendingActionNonceResponse = {
  encode(
    message: QueryAllPendingActionNonceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.pendingActionNonces) {
      writer.uint64(v);
    }
    writer.ldelim();
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
  ): QueryAllPendingActionNonceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPendingActionNonceResponse,
    } as QueryAllPendingActionNonceResponse;
    message.pendingActionNonces = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.pendingActionNonces.push(reader.uint64() as Long);
            }
          } else {
            message.pendingActionNonces.push(reader.uint64() as Long);
          }
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

  fromJSON(object: any): QueryAllPendingActionNonceResponse {
    const message = {
      ...baseQueryAllPendingActionNonceResponse,
    } as QueryAllPendingActionNonceResponse;
    message.pendingActionNonces = (object.pendingActionNonces ?? []).map(
      (e: any) => Long.fromString(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllPendingActionNonceResponse): unknown {
    const obj: any = {};
    if (message.pendingActionNonces) {
      obj.pendingActionNonces = message.pendingActionNonces.map((e) =>
        (e || Long.UZERO).toString()
      );
    } else {
      obj.pendingActionNonces = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPendingActionNonceResponse>
  ): QueryAllPendingActionNonceResponse {
    const message = {
      ...baseQueryAllPendingActionNonceResponse,
    } as QueryAllPendingActionNonceResponse;
    message.pendingActionNonces = (object.pendingActionNonces ?? []).map((e) =>
      Long.fromValue(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryPendingActionRequest: object = { nonce: Long.UZERO };

export const QueryPendingActionRequest = {
  encode(
    message: QueryPendingActionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPendingActionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryPendingActionRequest,
    } as QueryPendingActionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPendingActionRequest {
    const message = {
      ...baseQueryPendingActionRequest,
    } as QueryPendingActionRequest;
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromString(object.nonce)
        : Long.UZERO;
    return message;
  },

  toJSON(message: QueryPendingActionRequest): unknown {
    const obj: any = {};
    message.nonce !== undefined &&
      (obj.nonce = (message.nonce || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPendingActionRequest>
  ): QueryPendingActionRequest {
    const message = {
      ...baseQueryPendingActionRequest,
    } as QueryPendingActionRequest;
    message.nonce =
      object.nonce !== undefined && object.nonce !== null
        ? Long.fromValue(object.nonce)
        : Long.UZERO;
    return message;
  },
};

const baseQueryPendingActionResponse: object = { action: "" };

export const QueryPendingActionResponse = {
  encode(
    message: QueryPendingActionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.action !== "") {
      writer.uint32(10).string(message.action);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPendingActionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryPendingActionResponse,
    } as QueryPendingActionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.action = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPendingActionResponse {
    const message = {
      ...baseQueryPendingActionResponse,
    } as QueryPendingActionResponse;
    message.action =
      object.action !== undefined && object.action !== null
        ? String(object.action)
        : "";
    return message;
  },

  toJSON(message: QueryPendingActionResponse): unknown {
    const obj: any = {};
    message.action !== undefined && (obj.action = message.action);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPendingActionResponse>
  ): QueryPendingActionResponse {
    const message = {
      ...baseQueryPendingActionResponse,
    } as QueryPendingActionResponse;
    message.action = object.action ?? "";
    return message;
  },
};

const baseQueryControllersForConnectionRequest: object = { connectionId: "" };

export const QueryControllersForConnectionRequest = {
  encode(
    message: QueryControllersForConnectionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryControllersForConnectionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryControllersForConnectionRequest,
    } as QueryControllersForConnectionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryControllersForConnectionRequest {
    const message = {
      ...baseQueryControllersForConnectionRequest,
    } as QueryControllersForConnectionRequest;
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    return message;
  },

  toJSON(message: QueryControllersForConnectionRequest): unknown {
    const obj: any = {};
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryControllersForConnectionRequest>
  ): QueryControllersForConnectionRequest {
    const message = {
      ...baseQueryControllersForConnectionRequest,
    } as QueryControllersForConnectionRequest;
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

const baseQueryControllersForConnectionResponse: object = {};

export const QueryControllersForConnectionResponse = {
  encode(
    message: QueryControllersForConnectionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.controllers !== undefined) {
      ControllerContracts.encode(
        message.controllers,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryControllersForConnectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryControllersForConnectionResponse,
    } as QueryControllersForConnectionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.controllers = ControllerContracts.decode(
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

  fromJSON(object: any): QueryControllersForConnectionResponse {
    const message = {
      ...baseQueryControllersForConnectionResponse,
    } as QueryControllersForConnectionResponse;
    message.controllers =
      object.controllers !== undefined && object.controllers !== null
        ? ControllerContracts.fromJSON(object.controllers)
        : undefined;
    return message;
  },

  toJSON(message: QueryControllersForConnectionResponse): unknown {
    const obj: any = {};
    message.controllers !== undefined &&
      (obj.controllers = message.controllers
        ? ControllerContracts.toJSON(message.controllers)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryControllersForConnectionResponse>
  ): QueryControllersForConnectionResponse {
    const message = {
      ...baseQueryControllersForConnectionResponse,
    } as QueryControllersForConnectionResponse;
    message.controllers =
      object.controllers !== undefined && object.controllers !== null
        ? ControllerContracts.fromPartial(object.controllers)
        : undefined;
    return message;
  },
};

const baseQueryAllControllersRequest: object = {};

export const QueryAllControllersRequest = {
  encode(
    message: QueryAllControllersRequest,
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
  ): QueryAllControllersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllControllersRequest,
    } as QueryAllControllersRequest;
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

  fromJSON(object: any): QueryAllControllersRequest {
    const message = {
      ...baseQueryAllControllersRequest,
    } as QueryAllControllersRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllControllersRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllControllersRequest>
  ): QueryAllControllersRequest {
    const message = {
      ...baseQueryAllControllersRequest,
    } as QueryAllControllersRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAllControllersResponse: object = {};

export const QueryAllControllersResponse = {
  encode(
    message: QueryAllControllersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.controllers) {
      ControllerContracts.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllControllersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllControllersResponse,
    } as QueryAllControllersResponse;
    message.controllers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.controllers.push(
            ControllerContracts.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllControllersResponse {
    const message = {
      ...baseQueryAllControllersResponse,
    } as QueryAllControllersResponse;
    message.controllers = (object.controllers ?? []).map((e: any) =>
      ControllerContracts.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAllControllersResponse): unknown {
    const obj: any = {};
    if (message.controllers) {
      obj.controllers = message.controllers.map((e) =>
        e ? ControllerContracts.toJSON(e) : undefined
      );
    } else {
      obj.controllers = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllControllersResponse>
  ): QueryAllControllersResponse {
    const message = {
      ...baseQueryAllControllersResponse,
    } as QueryAllControllersResponse;
    message.controllers = (object.controllers ?? []).map((e) =>
      ControllerContracts.fromPartial(e)
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
  CarbonGmpAccount(
    request: QueryCarbonGmpAccountRequest
  ): Promise<QueryCarbonGmpAccountResponse>;
  Relayer(request: QueryRelayerRequest): Promise<QueryRelayerResponse>;
  RelayerAll(request: QueryAllRelayerRequest): Promise<QueryAllRelayerResponse>;
  PendingActionNonceAll(
    request: QueryAllPendingActionNonceRequest
  ): Promise<QueryAllPendingActionNonceResponse>;
  PendingActionForNonce(
    request: QueryPendingActionRequest
  ): Promise<QueryPendingActionResponse>;
  ControllersForConnection(
    request: QueryControllersForConnectionRequest
  ): Promise<QueryControllersForConnectionResponse>;
  ControllersAll(
    request: QueryAllControllersRequest
  ): Promise<QueryAllControllersResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.BridgeStateAll = this.BridgeStateAll.bind(this);
    this.ConnectionAll = this.ConnectionAll.bind(this);
    this.ExternalTokenAll = this.ExternalTokenAll.bind(this);
    this.CarbonGmpAccount = this.CarbonGmpAccount.bind(this);
    this.Relayer = this.Relayer.bind(this);
    this.RelayerAll = this.RelayerAll.bind(this);
    this.PendingActionNonceAll = this.PendingActionNonceAll.bind(this);
    this.PendingActionForNonce = this.PendingActionForNonce.bind(this);
    this.ControllersForConnection = this.ControllersForConnection.bind(this);
    this.ControllersAll = this.ControllersAll.bind(this);
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

  CarbonGmpAccount(
    request: QueryCarbonGmpAccountRequest
  ): Promise<QueryCarbonGmpAccountResponse> {
    const data = QueryCarbonGmpAccountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Query",
      "CarbonGmpAccount",
      data
    );
    return promise.then((data) =>
      QueryCarbonGmpAccountResponse.decode(new _m0.Reader(data))
    );
  }

  Relayer(request: QueryRelayerRequest): Promise<QueryRelayerResponse> {
    const data = QueryRelayerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Query",
      "Relayer",
      data
    );
    return promise.then((data) =>
      QueryRelayerResponse.decode(new _m0.Reader(data))
    );
  }

  RelayerAll(
    request: QueryAllRelayerRequest
  ): Promise<QueryAllRelayerResponse> {
    const data = QueryAllRelayerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Query",
      "RelayerAll",
      data
    );
    return promise.then((data) =>
      QueryAllRelayerResponse.decode(new _m0.Reader(data))
    );
  }

  PendingActionNonceAll(
    request: QueryAllPendingActionNonceRequest
  ): Promise<QueryAllPendingActionNonceResponse> {
    const data = QueryAllPendingActionNonceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Query",
      "PendingActionNonceAll",
      data
    );
    return promise.then((data) =>
      QueryAllPendingActionNonceResponse.decode(new _m0.Reader(data))
    );
  }

  PendingActionForNonce(
    request: QueryPendingActionRequest
  ): Promise<QueryPendingActionResponse> {
    const data = QueryPendingActionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Query",
      "PendingActionForNonce",
      data
    );
    return promise.then((data) =>
      QueryPendingActionResponse.decode(new _m0.Reader(data))
    );
  }

  ControllersForConnection(
    request: QueryControllersForConnectionRequest
  ): Promise<QueryControllersForConnectionResponse> {
    const data = QueryControllersForConnectionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Query",
      "ControllersForConnection",
      data
    );
    return promise.then((data) =>
      QueryControllersForConnectionResponse.decode(new _m0.Reader(data))
    );
  }

  ControllersAll(
    request: QueryAllControllersRequest
  ): Promise<QueryAllControllersResponse> {
    const data = QueryAllControllersRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.bridge.Query",
      "ControllersAll",
      data
    );
    return promise.then((data) =>
      QueryAllControllersResponse.decode(new _m0.Reader(data))
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
