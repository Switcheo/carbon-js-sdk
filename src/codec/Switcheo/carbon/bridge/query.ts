/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { BridgeState, Connection, ControllerContracts, ExternalTokenMapping, Withdrawal } from "./bridge";
import { Params } from "./params";

export const protobufPackage = "Switcheo.carbon.bridge";

/**
 * this line is used by starport scaffolding # 3
 * QueryParamsRequest is request type for the Query/Params RPC method.
 */
export interface QueryParamsRequest {
}

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

export interface QueryCarbonGmpAccountRequest {
}

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
  actionType: Long;
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

export interface QueryTotalWindowWithdrawalValueRequest {
}

export interface QueryTotalWindowWithdrawalValueResponse {
  totalUsdValue: string;
}

export interface QueryWindowWithdrawalsRequest {
  pagination?: PageRequest;
}

export interface QueryWindowWithdrawalsResponse {
  withdrawals: Withdrawal[];
  pagination?: PageResponse;
}

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

function createBaseQueryAllBridgeStatesRequest(): QueryAllBridgeStatesRequest {
  return { pagination: undefined };
}

export const QueryAllBridgeStatesRequest = {
  encode(message: QueryAllBridgeStatesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBridgeStatesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBridgeStatesRequest();
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

  fromJSON(object: any): QueryAllBridgeStatesRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllBridgeStatesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllBridgeStatesRequest>): QueryAllBridgeStatesRequest {
    return QueryAllBridgeStatesRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllBridgeStatesRequest>): QueryAllBridgeStatesRequest {
    const message = createBaseQueryAllBridgeStatesRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllBridgeStatesResponse(): QueryAllBridgeStatesResponse {
  return { bridgeStates: [], pagination: undefined };
}

export const QueryAllBridgeStatesResponse = {
  encode(message: QueryAllBridgeStatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.bridgeStates) {
      BridgeState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBridgeStatesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBridgeStatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bridgeStates.push(BridgeState.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllBridgeStatesResponse {
    return {
      bridgeStates: Array.isArray(object?.bridgeStates)
        ? object.bridgeStates.map((e: any) => BridgeState.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllBridgeStatesResponse): unknown {
    const obj: any = {};
    if (message.bridgeStates) {
      obj.bridgeStates = message.bridgeStates.map((e) => e ? BridgeState.toJSON(e) : undefined);
    } else {
      obj.bridgeStates = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllBridgeStatesResponse>): QueryAllBridgeStatesResponse {
    return QueryAllBridgeStatesResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllBridgeStatesResponse>): QueryAllBridgeStatesResponse {
    const message = createBaseQueryAllBridgeStatesResponse();
    message.bridgeStates = object.bridgeStates?.map((e) => BridgeState.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllConnectionsRequest(): QueryAllConnectionsRequest {
  return { bridgeId: Long.UZERO, pagination: undefined };
}

export const QueryAllConnectionsRequest = {
  encode(message: QueryAllConnectionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.bridgeId.isZero()) {
      writer.uint32(8).uint64(message.bridgeId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllConnectionsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllConnectionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bridgeId = reader.uint64() as Long;
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

  fromJSON(object: any): QueryAllConnectionsRequest {
    return {
      bridgeId: isSet(object.bridgeId) ? Long.fromValue(object.bridgeId) : Long.UZERO,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllConnectionsRequest): unknown {
    const obj: any = {};
    message.bridgeId !== undefined && (obj.bridgeId = (message.bridgeId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllConnectionsRequest>): QueryAllConnectionsRequest {
    return QueryAllConnectionsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllConnectionsRequest>): QueryAllConnectionsRequest {
    const message = createBaseQueryAllConnectionsRequest();
    message.bridgeId = (object.bridgeId !== undefined && object.bridgeId !== null)
      ? Long.fromValue(object.bridgeId)
      : Long.UZERO;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllConnectionsResponse(): QueryAllConnectionsResponse {
  return { connections: [], pagination: undefined };
}

export const QueryAllConnectionsResponse = {
  encode(message: QueryAllConnectionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.connections) {
      Connection.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllConnectionsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllConnectionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connections.push(Connection.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllConnectionsResponse {
    return {
      connections: Array.isArray(object?.connections) ? object.connections.map((e: any) => Connection.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllConnectionsResponse): unknown {
    const obj: any = {};
    if (message.connections) {
      obj.connections = message.connections.map((e) => e ? Connection.toJSON(e) : undefined);
    } else {
      obj.connections = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllConnectionsResponse>): QueryAllConnectionsResponse {
    return QueryAllConnectionsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllConnectionsResponse>): QueryAllConnectionsResponse {
    const message = createBaseQueryAllConnectionsResponse();
    message.connections = object.connections?.map((e) => Connection.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllExternalTokensRequest(): QueryAllExternalTokensRequest {
  return { bridgeId: Long.UZERO, chainId: "", denom: "", pagination: undefined };
}

export const QueryAllExternalTokensRequest = {
  encode(message: QueryAllExternalTokensRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllExternalTokensRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllExternalTokensRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bridgeId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.chainId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.denom = reader.string();
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

  fromJSON(object: any): QueryAllExternalTokensRequest {
    return {
      bridgeId: isSet(object.bridgeId) ? Long.fromValue(object.bridgeId) : Long.UZERO,
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllExternalTokensRequest): unknown {
    const obj: any = {};
    message.bridgeId !== undefined && (obj.bridgeId = (message.bridgeId || Long.UZERO).toString());
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.denom !== undefined && (obj.denom = message.denom);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllExternalTokensRequest>): QueryAllExternalTokensRequest {
    return QueryAllExternalTokensRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllExternalTokensRequest>): QueryAllExternalTokensRequest {
    const message = createBaseQueryAllExternalTokensRequest();
    message.bridgeId = (object.bridgeId !== undefined && object.bridgeId !== null)
      ? Long.fromValue(object.bridgeId)
      : Long.UZERO;
    message.chainId = object.chainId ?? "";
    message.denom = object.denom ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllExternalTokensResponse(): QueryAllExternalTokensResponse {
  return { externalTokens: [], pagination: undefined };
}

export const QueryAllExternalTokensResponse = {
  encode(message: QueryAllExternalTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.externalTokens) {
      ExternalTokenMapping.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllExternalTokensResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllExternalTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.externalTokens.push(ExternalTokenMapping.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllExternalTokensResponse {
    return {
      externalTokens: Array.isArray(object?.externalTokens)
        ? object.externalTokens.map((e: any) => ExternalTokenMapping.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllExternalTokensResponse): unknown {
    const obj: any = {};
    if (message.externalTokens) {
      obj.externalTokens = message.externalTokens.map((e) => e ? ExternalTokenMapping.toJSON(e) : undefined);
    } else {
      obj.externalTokens = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllExternalTokensResponse>): QueryAllExternalTokensResponse {
    return QueryAllExternalTokensResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllExternalTokensResponse>): QueryAllExternalTokensResponse {
    const message = createBaseQueryAllExternalTokensResponse();
    message.externalTokens = object.externalTokens?.map((e) => ExternalTokenMapping.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryCarbonGmpAccountRequest(): QueryCarbonGmpAccountRequest {
  return {};
}

export const QueryCarbonGmpAccountRequest = {
  encode(_: QueryCarbonGmpAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCarbonGmpAccountRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCarbonGmpAccountRequest();
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

  fromJSON(_: any): QueryCarbonGmpAccountRequest {
    return {};
  },

  toJSON(_: QueryCarbonGmpAccountRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryCarbonGmpAccountRequest>): QueryCarbonGmpAccountRequest {
    return QueryCarbonGmpAccountRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryCarbonGmpAccountRequest>): QueryCarbonGmpAccountRequest {
    const message = createBaseQueryCarbonGmpAccountRequest();
    return message;
  },
};

function createBaseQueryCarbonGmpAccountResponse(): QueryCarbonGmpAccountResponse {
  return { carbonGmpAccount: "" };
}

export const QueryCarbonGmpAccountResponse = {
  encode(message: QueryCarbonGmpAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.carbonGmpAccount !== "") {
      writer.uint32(10).string(message.carbonGmpAccount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCarbonGmpAccountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCarbonGmpAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.carbonGmpAccount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCarbonGmpAccountResponse {
    return { carbonGmpAccount: isSet(object.carbonGmpAccount) ? String(object.carbonGmpAccount) : "" };
  },

  toJSON(message: QueryCarbonGmpAccountResponse): unknown {
    const obj: any = {};
    message.carbonGmpAccount !== undefined && (obj.carbonGmpAccount = message.carbonGmpAccount);
    return obj;
  },

  create(base?: DeepPartial<QueryCarbonGmpAccountResponse>): QueryCarbonGmpAccountResponse {
    return QueryCarbonGmpAccountResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryCarbonGmpAccountResponse>): QueryCarbonGmpAccountResponse {
    const message = createBaseQueryCarbonGmpAccountResponse();
    message.carbonGmpAccount = object.carbonGmpAccount ?? "";
    return message;
  },
};

function createBaseQueryRelayerRequest(): QueryRelayerRequest {
  return { address: "" };
}

export const QueryRelayerRequest = {
  encode(message: QueryRelayerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRelayerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRelayerRequest();
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

  fromJSON(object: any): QueryRelayerRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryRelayerRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<QueryRelayerRequest>): QueryRelayerRequest {
    return QueryRelayerRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryRelayerRequest>): QueryRelayerRequest {
    const message = createBaseQueryRelayerRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryRelayerResponse(): QueryRelayerResponse {
  return { hasRelayer: false };
}

export const QueryRelayerResponse = {
  encode(message: QueryRelayerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hasRelayer === true) {
      writer.uint32(8).bool(message.hasRelayer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRelayerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRelayerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.hasRelayer = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryRelayerResponse {
    return { hasRelayer: isSet(object.hasRelayer) ? Boolean(object.hasRelayer) : false };
  },

  toJSON(message: QueryRelayerResponse): unknown {
    const obj: any = {};
    message.hasRelayer !== undefined && (obj.hasRelayer = message.hasRelayer);
    return obj;
  },

  create(base?: DeepPartial<QueryRelayerResponse>): QueryRelayerResponse {
    return QueryRelayerResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryRelayerResponse>): QueryRelayerResponse {
    const message = createBaseQueryRelayerResponse();
    message.hasRelayer = object.hasRelayer ?? false;
    return message;
  },
};

function createBaseQueryAllRelayerRequest(): QueryAllRelayerRequest {
  return { pagination: undefined };
}

export const QueryAllRelayerRequest = {
  encode(message: QueryAllRelayerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRelayerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRelayerRequest();
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

  fromJSON(object: any): QueryAllRelayerRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllRelayerRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllRelayerRequest>): QueryAllRelayerRequest {
    return QueryAllRelayerRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllRelayerRequest>): QueryAllRelayerRequest {
    const message = createBaseQueryAllRelayerRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllRelayerResponse(): QueryAllRelayerResponse {
  return { relayers: [], pagination: undefined };
}

export const QueryAllRelayerResponse = {
  encode(message: QueryAllRelayerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.relayers) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRelayerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRelayerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.relayers.push(reader.string());
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

  fromJSON(object: any): QueryAllRelayerResponse {
    return {
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllRelayerResponse): unknown {
    const obj: any = {};
    if (message.relayers) {
      obj.relayers = message.relayers.map((e) => e);
    } else {
      obj.relayers = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllRelayerResponse>): QueryAllRelayerResponse {
    return QueryAllRelayerResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllRelayerResponse>): QueryAllRelayerResponse {
    const message = createBaseQueryAllRelayerResponse();
    message.relayers = object.relayers?.map((e) => e) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPendingActionNonceRequest(): QueryAllPendingActionNonceRequest {
  return { pagination: undefined };
}

export const QueryAllPendingActionNonceRequest = {
  encode(message: QueryAllPendingActionNonceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPendingActionNonceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPendingActionNonceRequest();
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

  fromJSON(object: any): QueryAllPendingActionNonceRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllPendingActionNonceRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllPendingActionNonceRequest>): QueryAllPendingActionNonceRequest {
    return QueryAllPendingActionNonceRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllPendingActionNonceRequest>): QueryAllPendingActionNonceRequest {
    const message = createBaseQueryAllPendingActionNonceRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPendingActionNonceResponse(): QueryAllPendingActionNonceResponse {
  return { pendingActionNonces: [], pagination: undefined };
}

export const QueryAllPendingActionNonceResponse = {
  encode(message: QueryAllPendingActionNonceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.pendingActionNonces) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPendingActionNonceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPendingActionNonceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.pendingActionNonces.push(reader.uint64() as Long);

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.pendingActionNonces.push(reader.uint64() as Long);
            }

            continue;
          }

          break;
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

  fromJSON(object: any): QueryAllPendingActionNonceResponse {
    return {
      pendingActionNonces: Array.isArray(object?.pendingActionNonces)
        ? object.pendingActionNonces.map((e: any) => Long.fromValue(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPendingActionNonceResponse): unknown {
    const obj: any = {};
    if (message.pendingActionNonces) {
      obj.pendingActionNonces = message.pendingActionNonces.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.pendingActionNonces = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllPendingActionNonceResponse>): QueryAllPendingActionNonceResponse {
    return QueryAllPendingActionNonceResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllPendingActionNonceResponse>): QueryAllPendingActionNonceResponse {
    const message = createBaseQueryAllPendingActionNonceResponse();
    message.pendingActionNonces = object.pendingActionNonces?.map((e) => Long.fromValue(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryPendingActionRequest(): QueryPendingActionRequest {
  return { nonce: Long.UZERO };
}

export const QueryPendingActionRequest = {
  encode(message: QueryPendingActionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingActionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingActionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.nonce = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPendingActionRequest {
    return { nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO };
  },

  toJSON(message: QueryPendingActionRequest): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<QueryPendingActionRequest>): QueryPendingActionRequest {
    return QueryPendingActionRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryPendingActionRequest>): QueryPendingActionRequest {
    const message = createBaseQueryPendingActionRequest();
    message.nonce = (object.nonce !== undefined && object.nonce !== null) ? Long.fromValue(object.nonce) : Long.UZERO;
    return message;
  },
};

function createBaseQueryPendingActionResponse(): QueryPendingActionResponse {
  return { action: "", actionType: Long.UZERO };
}

export const QueryPendingActionResponse = {
  encode(message: QueryPendingActionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.action !== "") {
      writer.uint32(10).string(message.action);
    }
    if (!message.actionType.isZero()) {
      writer.uint32(16).uint64(message.actionType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingActionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingActionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.action = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.actionType = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPendingActionResponse {
    return {
      action: isSet(object.action) ? String(object.action) : "",
      actionType: isSet(object.actionType) ? Long.fromValue(object.actionType) : Long.UZERO,
    };
  },

  toJSON(message: QueryPendingActionResponse): unknown {
    const obj: any = {};
    message.action !== undefined && (obj.action = message.action);
    message.actionType !== undefined && (obj.actionType = (message.actionType || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<QueryPendingActionResponse>): QueryPendingActionResponse {
    return QueryPendingActionResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryPendingActionResponse>): QueryPendingActionResponse {
    const message = createBaseQueryPendingActionResponse();
    message.action = object.action ?? "";
    message.actionType = (object.actionType !== undefined && object.actionType !== null)
      ? Long.fromValue(object.actionType)
      : Long.UZERO;
    return message;
  },
};

function createBaseQueryControllersForConnectionRequest(): QueryControllersForConnectionRequest {
  return { connectionId: "" };
}

export const QueryControllersForConnectionRequest = {
  encode(message: QueryControllersForConnectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryControllersForConnectionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryControllersForConnectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connectionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryControllersForConnectionRequest {
    return { connectionId: isSet(object.connectionId) ? String(object.connectionId) : "" };
  },

  toJSON(message: QueryControllersForConnectionRequest): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    return obj;
  },

  create(base?: DeepPartial<QueryControllersForConnectionRequest>): QueryControllersForConnectionRequest {
    return QueryControllersForConnectionRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryControllersForConnectionRequest>): QueryControllersForConnectionRequest {
    const message = createBaseQueryControllersForConnectionRequest();
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

function createBaseQueryControllersForConnectionResponse(): QueryControllersForConnectionResponse {
  return { controllers: undefined };
}

export const QueryControllersForConnectionResponse = {
  encode(message: QueryControllersForConnectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.controllers !== undefined) {
      ControllerContracts.encode(message.controllers, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryControllersForConnectionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryControllersForConnectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.controllers = ControllerContracts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryControllersForConnectionResponse {
    return { controllers: isSet(object.controllers) ? ControllerContracts.fromJSON(object.controllers) : undefined };
  },

  toJSON(message: QueryControllersForConnectionResponse): unknown {
    const obj: any = {};
    message.controllers !== undefined &&
      (obj.controllers = message.controllers ? ControllerContracts.toJSON(message.controllers) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryControllersForConnectionResponse>): QueryControllersForConnectionResponse {
    return QueryControllersForConnectionResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryControllersForConnectionResponse>): QueryControllersForConnectionResponse {
    const message = createBaseQueryControllersForConnectionResponse();
    message.controllers = (object.controllers !== undefined && object.controllers !== null)
      ? ControllerContracts.fromPartial(object.controllers)
      : undefined;
    return message;
  },
};

function createBaseQueryAllControllersRequest(): QueryAllControllersRequest {
  return { pagination: undefined };
}

export const QueryAllControllersRequest = {
  encode(message: QueryAllControllersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllControllersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllControllersRequest();
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

  fromJSON(object: any): QueryAllControllersRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllControllersRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllControllersRequest>): QueryAllControllersRequest {
    return QueryAllControllersRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllControllersRequest>): QueryAllControllersRequest {
    const message = createBaseQueryAllControllersRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllControllersResponse(): QueryAllControllersResponse {
  return { controllers: [], pagination: undefined };
}

export const QueryAllControllersResponse = {
  encode(message: QueryAllControllersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.controllers) {
      ControllerContracts.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllControllersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllControllersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.controllers.push(ControllerContracts.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllControllersResponse {
    return {
      controllers: Array.isArray(object?.controllers)
        ? object.controllers.map((e: any) => ControllerContracts.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllControllersResponse): unknown {
    const obj: any = {};
    if (message.controllers) {
      obj.controllers = message.controllers.map((e) => e ? ControllerContracts.toJSON(e) : undefined);
    } else {
      obj.controllers = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllControllersResponse>): QueryAllControllersResponse {
    return QueryAllControllersResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllControllersResponse>): QueryAllControllersResponse {
    const message = createBaseQueryAllControllersResponse();
    message.controllers = object.controllers?.map((e) => ControllerContracts.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryTotalWindowWithdrawalValueRequest(): QueryTotalWindowWithdrawalValueRequest {
  return {};
}

export const QueryTotalWindowWithdrawalValueRequest = {
  encode(_: QueryTotalWindowWithdrawalValueRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalWindowWithdrawalValueRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalWindowWithdrawalValueRequest();
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

  fromJSON(_: any): QueryTotalWindowWithdrawalValueRequest {
    return {};
  },

  toJSON(_: QueryTotalWindowWithdrawalValueRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryTotalWindowWithdrawalValueRequest>): QueryTotalWindowWithdrawalValueRequest {
    return QueryTotalWindowWithdrawalValueRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryTotalWindowWithdrawalValueRequest>): QueryTotalWindowWithdrawalValueRequest {
    const message = createBaseQueryTotalWindowWithdrawalValueRequest();
    return message;
  },
};

function createBaseQueryTotalWindowWithdrawalValueResponse(): QueryTotalWindowWithdrawalValueResponse {
  return { totalUsdValue: "" };
}

export const QueryTotalWindowWithdrawalValueResponse = {
  encode(message: QueryTotalWindowWithdrawalValueResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalUsdValue !== "") {
      writer.uint32(10).string(message.totalUsdValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalWindowWithdrawalValueResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalWindowWithdrawalValueResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.totalUsdValue = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTotalWindowWithdrawalValueResponse {
    return { totalUsdValue: isSet(object.totalUsdValue) ? String(object.totalUsdValue) : "" };
  },

  toJSON(message: QueryTotalWindowWithdrawalValueResponse): unknown {
    const obj: any = {};
    message.totalUsdValue !== undefined && (obj.totalUsdValue = message.totalUsdValue);
    return obj;
  },

  create(base?: DeepPartial<QueryTotalWindowWithdrawalValueResponse>): QueryTotalWindowWithdrawalValueResponse {
    return QueryTotalWindowWithdrawalValueResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryTotalWindowWithdrawalValueResponse>): QueryTotalWindowWithdrawalValueResponse {
    const message = createBaseQueryTotalWindowWithdrawalValueResponse();
    message.totalUsdValue = object.totalUsdValue ?? "";
    return message;
  },
};

function createBaseQueryWindowWithdrawalsRequest(): QueryWindowWithdrawalsRequest {
  return { pagination: undefined };
}

export const QueryWindowWithdrawalsRequest = {
  encode(message: QueryWindowWithdrawalsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWindowWithdrawalsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWindowWithdrawalsRequest();
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

  fromJSON(object: any): QueryWindowWithdrawalsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryWindowWithdrawalsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryWindowWithdrawalsRequest>): QueryWindowWithdrawalsRequest {
    return QueryWindowWithdrawalsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryWindowWithdrawalsRequest>): QueryWindowWithdrawalsRequest {
    const message = createBaseQueryWindowWithdrawalsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryWindowWithdrawalsResponse(): QueryWindowWithdrawalsResponse {
  return { withdrawals: [], pagination: undefined };
}

export const QueryWindowWithdrawalsResponse = {
  encode(message: QueryWindowWithdrawalsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.withdrawals) {
      Withdrawal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWindowWithdrawalsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWindowWithdrawalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.withdrawals.push(Withdrawal.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryWindowWithdrawalsResponse {
    return {
      withdrawals: Array.isArray(object?.withdrawals) ? object.withdrawals.map((e: any) => Withdrawal.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryWindowWithdrawalsResponse): unknown {
    const obj: any = {};
    if (message.withdrawals) {
      obj.withdrawals = message.withdrawals.map((e) => e ? Withdrawal.toJSON(e) : undefined);
    } else {
      obj.withdrawals = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryWindowWithdrawalsResponse>): QueryWindowWithdrawalsResponse {
    return QueryWindowWithdrawalsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryWindowWithdrawalsResponse>): QueryWindowWithdrawalsResponse {
    const message = createBaseQueryWindowWithdrawalsResponse();
    message.withdrawals = object.withdrawals?.map((e) => Withdrawal.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
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
  BridgeStateAll(request: QueryAllBridgeStatesRequest): Promise<QueryAllBridgeStatesResponse>;
  /** Get all connections */
  ConnectionAll(request: QueryAllConnectionsRequest): Promise<QueryAllConnectionsResponse>;
  /** Get all external tokens */
  ExternalTokenAll(request: QueryAllExternalTokensRequest): Promise<QueryAllExternalTokensResponse>;
  CarbonGmpAccount(request: QueryCarbonGmpAccountRequest): Promise<QueryCarbonGmpAccountResponse>;
  Relayer(request: QueryRelayerRequest): Promise<QueryRelayerResponse>;
  RelayerAll(request: QueryAllRelayerRequest): Promise<QueryAllRelayerResponse>;
  PendingActionNonceAll(request: QueryAllPendingActionNonceRequest): Promise<QueryAllPendingActionNonceResponse>;
  PendingActionForNonce(request: QueryPendingActionRequest): Promise<QueryPendingActionResponse>;
  ControllersForConnection(
    request: QueryControllersForConnectionRequest,
  ): Promise<QueryControllersForConnectionResponse>;
  ControllersAll(request: QueryAllControllersRequest): Promise<QueryAllControllersResponse>;
  TotalWindowWithdrawalValue(
    request: QueryTotalWindowWithdrawalValueRequest,
  ): Promise<QueryTotalWindowWithdrawalValueResponse>;
  WindowWithdrawals(request: QueryWindowWithdrawalsRequest): Promise<QueryWindowWithdrawalsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.bridge.Query";
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
    this.TotalWindowWithdrawalValue = this.TotalWindowWithdrawalValue.bind(this);
    this.WindowWithdrawals = this.WindowWithdrawals.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  BridgeStateAll(request: QueryAllBridgeStatesRequest): Promise<QueryAllBridgeStatesResponse> {
    const data = QueryAllBridgeStatesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "BridgeStateAll", data);
    return promise.then((data) => QueryAllBridgeStatesResponse.decode(_m0.Reader.create(data)));
  }

  ConnectionAll(request: QueryAllConnectionsRequest): Promise<QueryAllConnectionsResponse> {
    const data = QueryAllConnectionsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ConnectionAll", data);
    return promise.then((data) => QueryAllConnectionsResponse.decode(_m0.Reader.create(data)));
  }

  ExternalTokenAll(request: QueryAllExternalTokensRequest): Promise<QueryAllExternalTokensResponse> {
    const data = QueryAllExternalTokensRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ExternalTokenAll", data);
    return promise.then((data) => QueryAllExternalTokensResponse.decode(_m0.Reader.create(data)));
  }

  CarbonGmpAccount(request: QueryCarbonGmpAccountRequest): Promise<QueryCarbonGmpAccountResponse> {
    const data = QueryCarbonGmpAccountRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CarbonGmpAccount", data);
    return promise.then((data) => QueryCarbonGmpAccountResponse.decode(_m0.Reader.create(data)));
  }

  Relayer(request: QueryRelayerRequest): Promise<QueryRelayerResponse> {
    const data = QueryRelayerRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Relayer", data);
    return promise.then((data) => QueryRelayerResponse.decode(_m0.Reader.create(data)));
  }

  RelayerAll(request: QueryAllRelayerRequest): Promise<QueryAllRelayerResponse> {
    const data = QueryAllRelayerRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RelayerAll", data);
    return promise.then((data) => QueryAllRelayerResponse.decode(_m0.Reader.create(data)));
  }

  PendingActionNonceAll(request: QueryAllPendingActionNonceRequest): Promise<QueryAllPendingActionNonceResponse> {
    const data = QueryAllPendingActionNonceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PendingActionNonceAll", data);
    return promise.then((data) => QueryAllPendingActionNonceResponse.decode(_m0.Reader.create(data)));
  }

  PendingActionForNonce(request: QueryPendingActionRequest): Promise<QueryPendingActionResponse> {
    const data = QueryPendingActionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PendingActionForNonce", data);
    return promise.then((data) => QueryPendingActionResponse.decode(_m0.Reader.create(data)));
  }

  ControllersForConnection(
    request: QueryControllersForConnectionRequest,
  ): Promise<QueryControllersForConnectionResponse> {
    const data = QueryControllersForConnectionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ControllersForConnection", data);
    return promise.then((data) => QueryControllersForConnectionResponse.decode(_m0.Reader.create(data)));
  }

  ControllersAll(request: QueryAllControllersRequest): Promise<QueryAllControllersResponse> {
    const data = QueryAllControllersRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ControllersAll", data);
    return promise.then((data) => QueryAllControllersResponse.decode(_m0.Reader.create(data)));
  }

  TotalWindowWithdrawalValue(
    request: QueryTotalWindowWithdrawalValueRequest,
  ): Promise<QueryTotalWindowWithdrawalValueResponse> {
    const data = QueryTotalWindowWithdrawalValueRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "TotalWindowWithdrawalValue", data);
    return promise.then((data) => QueryTotalWindowWithdrawalValueResponse.decode(_m0.Reader.create(data)));
  }

  WindowWithdrawals(request: QueryWindowWithdrawalsRequest): Promise<QueryWindowWithdrawalsResponse> {
    const data = QueryWindowWithdrawalsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "WindowWithdrawals", data);
    return promise.then((data) => QueryWindowWithdrawalsResponse.decode(_m0.Reader.create(data)));
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
