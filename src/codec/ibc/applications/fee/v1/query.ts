/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../../../../cosmos/base/query/v1beta1/pagination";
import { PacketId } from "../../../core/channel/v1/channel";
import { IdentifiedPacketFees } from "./fee";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { FeeEnabledChannel } from "./genesis";

export const protobufPackage = "ibc.applications.fee.v1";

/** QueryIncentivizedPacketsRequest defines the request type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
  /** block height at which to query */
  queryHeight: Long;
}

/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsResponse {
  /** list of identified fees for incentivized packets */
  incentivizedPackets: IdentifiedPacketFees[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryIncentivizedPacketRequest defines the request type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketRequest {
  /** unique packet identifier comprised of channel ID, port ID and sequence */
  packetId?: PacketId;
  /** block height at which to query */
  queryHeight: Long;
}

/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketResponse {
  /** the identified fees for the incentivized packet */
  incentivizedPacket?: IdentifiedPacketFees;
}

/**
 * QueryIncentivizedPacketsForChannelRequest defines the request type for querying for all incentivized packets
 * for a specific channel
 */
export interface QueryIncentivizedPacketsForChannelRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
  portId: string;
  channelId: string;
  /** Height to query at */
  queryHeight: Long;
}

/** QueryIncentivizedPacketsResponse defines the response type for the incentivized packets RPC */
export interface QueryIncentivizedPacketsForChannelResponse {
  /** Map of all incentivized_packets */
  incentivizedPackets: IdentifiedPacketFees[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryTotalRecvFeesRequest defines the request type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesRequest {
  /** the packet identifier for the associated fees */
  packetId?: PacketId;
}

/** QueryTotalRecvFeesResponse defines the response type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesResponse {
  /** the total packet receive fees */
  recvFees: Coin[];
}

/** QueryTotalAckFeesRequest defines the request type for the TotalAckFees rpc */
export interface QueryTotalAckFeesRequest {
  /** the packet identifier for the associated fees */
  packetId?: PacketId;
}

/** QueryTotalAckFeesResponse defines the response type for the TotalAckFees rpc */
export interface QueryTotalAckFeesResponse {
  /** the total packet acknowledgement fees */
  ackFees: Coin[];
}

/** QueryTotalTimeoutFeesRequest defines the request type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesRequest {
  /** the packet identifier for the associated fees */
  packetId?: PacketId;
}

/** QueryTotalTimeoutFeesResponse defines the response type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesResponse {
  /** the total packet timeout fees */
  timeoutFees: Coin[];
}

/** QueryPayeeRequest defines the request type for the Payee rpc */
export interface QueryPayeeRequest {
  /** unique channel identifier */
  channelId: string;
  /** the relayer address to which the distribution address is registered */
  relayer: string;
}

/** QueryPayeeResponse defines the response type for the Payee rpc */
export interface QueryPayeeResponse {
  /** the payee address to which packet fees are paid out */
  payeeAddress: string;
}

/** QueryCounterpartyPayeeRequest defines the request type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeRequest {
  /** unique channel identifier */
  channelId: string;
  /** the relayer address to which the counterparty is registered */
  relayer: string;
}

/** QueryCounterpartyPayeeResponse defines the response type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeResponse {
  /** the counterparty payee address used to compensate forward relaying */
  counterpartyPayee: string;
}

/** QueryFeeEnabledChannelsRequest defines the request type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
  /** block height at which to query */
  queryHeight: Long;
}

/** QueryFeeEnabledChannelsResponse defines the response type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsResponse {
  /** list of fee enabled channels */
  feeEnabledChannels: FeeEnabledChannel[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryFeeEnabledChannelRequest defines the request type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelRequest {
  /** unique port identifier */
  portId: string;
  /** unique channel identifier */
  channelId: string;
}

/** QueryFeeEnabledChannelResponse defines the response type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelResponse {
  /** boolean flag representing the fee enabled channel status */
  feeEnabled: boolean;
}

const baseQueryIncentivizedPacketsRequest: object = { queryHeight: Long.UZERO };

export const QueryIncentivizedPacketsRequest = {
  encode(
    message: QueryIncentivizedPacketsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (!message.queryHeight.isZero()) {
      writer.uint32(16).uint64(message.queryHeight);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryIncentivizedPacketsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryIncentivizedPacketsRequest,
    } as QueryIncentivizedPacketsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.queryHeight = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryIncentivizedPacketsRequest {
    const message = {
      ...baseQueryIncentivizedPacketsRequest,
    } as QueryIncentivizedPacketsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    message.queryHeight =
      object.queryHeight !== undefined && object.queryHeight !== null
        ? Long.fromString(object.queryHeight)
        : Long.UZERO;
    return message;
  },

  toJSON(message: QueryIncentivizedPacketsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    message.queryHeight !== undefined &&
      (obj.queryHeight = (message.queryHeight || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryIncentivizedPacketsRequest>
  ): QueryIncentivizedPacketsRequest {
    const message = {
      ...baseQueryIncentivizedPacketsRequest,
    } as QueryIncentivizedPacketsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    message.queryHeight =
      object.queryHeight !== undefined && object.queryHeight !== null
        ? Long.fromValue(object.queryHeight)
        : Long.UZERO;
    return message;
  },
};

const baseQueryIncentivizedPacketsResponse: object = {};

export const QueryIncentivizedPacketsResponse = {
  encode(
    message: QueryIncentivizedPacketsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.incentivizedPackets) {
      IdentifiedPacketFees.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryIncentivizedPacketsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryIncentivizedPacketsResponse,
    } as QueryIncentivizedPacketsResponse;
    message.incentivizedPackets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentivizedPackets.push(
            IdentifiedPacketFees.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryIncentivizedPacketsResponse {
    const message = {
      ...baseQueryIncentivizedPacketsResponse,
    } as QueryIncentivizedPacketsResponse;
    message.incentivizedPackets = (object.incentivizedPackets ?? []).map(
      (e: any) => IdentifiedPacketFees.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryIncentivizedPacketsResponse): unknown {
    const obj: any = {};
    if (message.incentivizedPackets) {
      obj.incentivizedPackets = message.incentivizedPackets.map((e) =>
        e ? IdentifiedPacketFees.toJSON(e) : undefined
      );
    } else {
      obj.incentivizedPackets = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryIncentivizedPacketsResponse>
  ): QueryIncentivizedPacketsResponse {
    const message = {
      ...baseQueryIncentivizedPacketsResponse,
    } as QueryIncentivizedPacketsResponse;
    message.incentivizedPackets = (object.incentivizedPackets ?? []).map((e) =>
      IdentifiedPacketFees.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryIncentivizedPacketRequest: object = { queryHeight: Long.UZERO };

export const QueryIncentivizedPacketRequest = {
  encode(
    message: QueryIncentivizedPacketRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    if (!message.queryHeight.isZero()) {
      writer.uint32(16).uint64(message.queryHeight);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryIncentivizedPacketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryIncentivizedPacketRequest,
    } as QueryIncentivizedPacketRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        case 2:
          message.queryHeight = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryIncentivizedPacketRequest {
    const message = {
      ...baseQueryIncentivizedPacketRequest,
    } as QueryIncentivizedPacketRequest;
    message.packetId =
      object.packetId !== undefined && object.packetId !== null
        ? PacketId.fromJSON(object.packetId)
        : undefined;
    message.queryHeight =
      object.queryHeight !== undefined && object.queryHeight !== null
        ? Long.fromString(object.queryHeight)
        : Long.UZERO;
    return message;
  },

  toJSON(message: QueryIncentivizedPacketRequest): unknown {
    const obj: any = {};
    message.packetId !== undefined &&
      (obj.packetId = message.packetId
        ? PacketId.toJSON(message.packetId)
        : undefined);
    message.queryHeight !== undefined &&
      (obj.queryHeight = (message.queryHeight || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryIncentivizedPacketRequest>
  ): QueryIncentivizedPacketRequest {
    const message = {
      ...baseQueryIncentivizedPacketRequest,
    } as QueryIncentivizedPacketRequest;
    message.packetId =
      object.packetId !== undefined && object.packetId !== null
        ? PacketId.fromPartial(object.packetId)
        : undefined;
    message.queryHeight =
      object.queryHeight !== undefined && object.queryHeight !== null
        ? Long.fromValue(object.queryHeight)
        : Long.UZERO;
    return message;
  },
};

const baseQueryIncentivizedPacketResponse: object = {};

export const QueryIncentivizedPacketResponse = {
  encode(
    message: QueryIncentivizedPacketResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.incentivizedPacket !== undefined) {
      IdentifiedPacketFees.encode(
        message.incentivizedPacket,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryIncentivizedPacketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryIncentivizedPacketResponse,
    } as QueryIncentivizedPacketResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentivizedPacket = IdentifiedPacketFees.decode(
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

  fromJSON(object: any): QueryIncentivizedPacketResponse {
    const message = {
      ...baseQueryIncentivizedPacketResponse,
    } as QueryIncentivizedPacketResponse;
    message.incentivizedPacket =
      object.incentivizedPacket !== undefined &&
      object.incentivizedPacket !== null
        ? IdentifiedPacketFees.fromJSON(object.incentivizedPacket)
        : undefined;
    return message;
  },

  toJSON(message: QueryIncentivizedPacketResponse): unknown {
    const obj: any = {};
    message.incentivizedPacket !== undefined &&
      (obj.incentivizedPacket = message.incentivizedPacket
        ? IdentifiedPacketFees.toJSON(message.incentivizedPacket)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryIncentivizedPacketResponse>
  ): QueryIncentivizedPacketResponse {
    const message = {
      ...baseQueryIncentivizedPacketResponse,
    } as QueryIncentivizedPacketResponse;
    message.incentivizedPacket =
      object.incentivizedPacket !== undefined &&
      object.incentivizedPacket !== null
        ? IdentifiedPacketFees.fromPartial(object.incentivizedPacket)
        : undefined;
    return message;
  },
};

const baseQueryIncentivizedPacketsForChannelRequest: object = {
  portId: "",
  channelId: "",
  queryHeight: Long.UZERO,
};

export const QueryIncentivizedPacketsForChannelRequest = {
  encode(
    message: QueryIncentivizedPacketsForChannelRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(26).string(message.channelId);
    }
    if (!message.queryHeight.isZero()) {
      writer.uint32(32).uint64(message.queryHeight);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryIncentivizedPacketsForChannelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryIncentivizedPacketsForChannelRequest,
    } as QueryIncentivizedPacketsForChannelRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.portId = reader.string();
          break;
        case 3:
          message.channelId = reader.string();
          break;
        case 4:
          message.queryHeight = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryIncentivizedPacketsForChannelRequest {
    const message = {
      ...baseQueryIncentivizedPacketsForChannelRequest,
    } as QueryIncentivizedPacketsForChannelRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    message.portId =
      object.portId !== undefined && object.portId !== null
        ? String(object.portId)
        : "";
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : "";
    message.queryHeight =
      object.queryHeight !== undefined && object.queryHeight !== null
        ? Long.fromString(object.queryHeight)
        : Long.UZERO;
    return message;
  },

  toJSON(message: QueryIncentivizedPacketsForChannelRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.queryHeight !== undefined &&
      (obj.queryHeight = (message.queryHeight || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryIncentivizedPacketsForChannelRequest>
  ): QueryIncentivizedPacketsForChannelRequest {
    const message = {
      ...baseQueryIncentivizedPacketsForChannelRequest,
    } as QueryIncentivizedPacketsForChannelRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.queryHeight =
      object.queryHeight !== undefined && object.queryHeight !== null
        ? Long.fromValue(object.queryHeight)
        : Long.UZERO;
    return message;
  },
};

const baseQueryIncentivizedPacketsForChannelResponse: object = {};

export const QueryIncentivizedPacketsForChannelResponse = {
  encode(
    message: QueryIncentivizedPacketsForChannelResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.incentivizedPackets) {
      IdentifiedPacketFees.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryIncentivizedPacketsForChannelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryIncentivizedPacketsForChannelResponse,
    } as QueryIncentivizedPacketsForChannelResponse;
    message.incentivizedPackets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentivizedPackets.push(
            IdentifiedPacketFees.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryIncentivizedPacketsForChannelResponse {
    const message = {
      ...baseQueryIncentivizedPacketsForChannelResponse,
    } as QueryIncentivizedPacketsForChannelResponse;
    message.incentivizedPackets = (object.incentivizedPackets ?? []).map(
      (e: any) => IdentifiedPacketFees.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryIncentivizedPacketsForChannelResponse): unknown {
    const obj: any = {};
    if (message.incentivizedPackets) {
      obj.incentivizedPackets = message.incentivizedPackets.map((e) =>
        e ? IdentifiedPacketFees.toJSON(e) : undefined
      );
    } else {
      obj.incentivizedPackets = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryIncentivizedPacketsForChannelResponse>
  ): QueryIncentivizedPacketsForChannelResponse {
    const message = {
      ...baseQueryIncentivizedPacketsForChannelResponse,
    } as QueryIncentivizedPacketsForChannelResponse;
    message.incentivizedPackets = (object.incentivizedPackets ?? []).map((e) =>
      IdentifiedPacketFees.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryTotalRecvFeesRequest: object = {};

export const QueryTotalRecvFeesRequest = {
  encode(
    message: QueryTotalRecvFeesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTotalRecvFeesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTotalRecvFeesRequest,
    } as QueryTotalRecvFeesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalRecvFeesRequest {
    const message = {
      ...baseQueryTotalRecvFeesRequest,
    } as QueryTotalRecvFeesRequest;
    message.packetId =
      object.packetId !== undefined && object.packetId !== null
        ? PacketId.fromJSON(object.packetId)
        : undefined;
    return message;
  },

  toJSON(message: QueryTotalRecvFeesRequest): unknown {
    const obj: any = {};
    message.packetId !== undefined &&
      (obj.packetId = message.packetId
        ? PacketId.toJSON(message.packetId)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTotalRecvFeesRequest>
  ): QueryTotalRecvFeesRequest {
    const message = {
      ...baseQueryTotalRecvFeesRequest,
    } as QueryTotalRecvFeesRequest;
    message.packetId =
      object.packetId !== undefined && object.packetId !== null
        ? PacketId.fromPartial(object.packetId)
        : undefined;
    return message;
  },
};

const baseQueryTotalRecvFeesResponse: object = {};

export const QueryTotalRecvFeesResponse = {
  encode(
    message: QueryTotalRecvFeesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.recvFees) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTotalRecvFeesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTotalRecvFeesResponse,
    } as QueryTotalRecvFeesResponse;
    message.recvFees = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recvFees.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalRecvFeesResponse {
    const message = {
      ...baseQueryTotalRecvFeesResponse,
    } as QueryTotalRecvFeesResponse;
    message.recvFees = (object.recvFees ?? []).map((e: any) =>
      Coin.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryTotalRecvFeesResponse): unknown {
    const obj: any = {};
    if (message.recvFees) {
      obj.recvFees = message.recvFees.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.recvFees = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTotalRecvFeesResponse>
  ): QueryTotalRecvFeesResponse {
    const message = {
      ...baseQueryTotalRecvFeesResponse,
    } as QueryTotalRecvFeesResponse;
    message.recvFees = (object.recvFees ?? []).map((e) => Coin.fromPartial(e));
    return message;
  },
};

const baseQueryTotalAckFeesRequest: object = {};

export const QueryTotalAckFeesRequest = {
  encode(
    message: QueryTotalAckFeesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTotalAckFeesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTotalAckFeesRequest,
    } as QueryTotalAckFeesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalAckFeesRequest {
    const message = {
      ...baseQueryTotalAckFeesRequest,
    } as QueryTotalAckFeesRequest;
    message.packetId =
      object.packetId !== undefined && object.packetId !== null
        ? PacketId.fromJSON(object.packetId)
        : undefined;
    return message;
  },

  toJSON(message: QueryTotalAckFeesRequest): unknown {
    const obj: any = {};
    message.packetId !== undefined &&
      (obj.packetId = message.packetId
        ? PacketId.toJSON(message.packetId)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTotalAckFeesRequest>
  ): QueryTotalAckFeesRequest {
    const message = {
      ...baseQueryTotalAckFeesRequest,
    } as QueryTotalAckFeesRequest;
    message.packetId =
      object.packetId !== undefined && object.packetId !== null
        ? PacketId.fromPartial(object.packetId)
        : undefined;
    return message;
  },
};

const baseQueryTotalAckFeesResponse: object = {};

export const QueryTotalAckFeesResponse = {
  encode(
    message: QueryTotalAckFeesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.ackFees) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTotalAckFeesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTotalAckFeesResponse,
    } as QueryTotalAckFeesResponse;
    message.ackFees = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ackFees.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalAckFeesResponse {
    const message = {
      ...baseQueryTotalAckFeesResponse,
    } as QueryTotalAckFeesResponse;
    message.ackFees = (object.ackFees ?? []).map((e: any) => Coin.fromJSON(e));
    return message;
  },

  toJSON(message: QueryTotalAckFeesResponse): unknown {
    const obj: any = {};
    if (message.ackFees) {
      obj.ackFees = message.ackFees.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.ackFees = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTotalAckFeesResponse>
  ): QueryTotalAckFeesResponse {
    const message = {
      ...baseQueryTotalAckFeesResponse,
    } as QueryTotalAckFeesResponse;
    message.ackFees = (object.ackFees ?? []).map((e) => Coin.fromPartial(e));
    return message;
  },
};

const baseQueryTotalTimeoutFeesRequest: object = {};

export const QueryTotalTimeoutFeesRequest = {
  encode(
    message: QueryTotalTimeoutFeesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTotalTimeoutFeesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTotalTimeoutFeesRequest,
    } as QueryTotalTimeoutFeesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalTimeoutFeesRequest {
    const message = {
      ...baseQueryTotalTimeoutFeesRequest,
    } as QueryTotalTimeoutFeesRequest;
    message.packetId =
      object.packetId !== undefined && object.packetId !== null
        ? PacketId.fromJSON(object.packetId)
        : undefined;
    return message;
  },

  toJSON(message: QueryTotalTimeoutFeesRequest): unknown {
    const obj: any = {};
    message.packetId !== undefined &&
      (obj.packetId = message.packetId
        ? PacketId.toJSON(message.packetId)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTotalTimeoutFeesRequest>
  ): QueryTotalTimeoutFeesRequest {
    const message = {
      ...baseQueryTotalTimeoutFeesRequest,
    } as QueryTotalTimeoutFeesRequest;
    message.packetId =
      object.packetId !== undefined && object.packetId !== null
        ? PacketId.fromPartial(object.packetId)
        : undefined;
    return message;
  },
};

const baseQueryTotalTimeoutFeesResponse: object = {};

export const QueryTotalTimeoutFeesResponse = {
  encode(
    message: QueryTotalTimeoutFeesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.timeoutFees) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTotalTimeoutFeesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTotalTimeoutFeesResponse,
    } as QueryTotalTimeoutFeesResponse;
    message.timeoutFees = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeoutFees.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalTimeoutFeesResponse {
    const message = {
      ...baseQueryTotalTimeoutFeesResponse,
    } as QueryTotalTimeoutFeesResponse;
    message.timeoutFees = (object.timeoutFees ?? []).map((e: any) =>
      Coin.fromJSON(e)
    );
    return message;
  },

  toJSON(message: QueryTotalTimeoutFeesResponse): unknown {
    const obj: any = {};
    if (message.timeoutFees) {
      obj.timeoutFees = message.timeoutFees.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.timeoutFees = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTotalTimeoutFeesResponse>
  ): QueryTotalTimeoutFeesResponse {
    const message = {
      ...baseQueryTotalTimeoutFeesResponse,
    } as QueryTotalTimeoutFeesResponse;
    message.timeoutFees = (object.timeoutFees ?? []).map((e) =>
      Coin.fromPartial(e)
    );
    return message;
  },
};

const baseQueryPayeeRequest: object = { channelId: "", relayer: "" };

export const QueryPayeeRequest = {
  encode(
    message: QueryPayeeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPayeeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPayeeRequest } as QueryPayeeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.relayer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPayeeRequest {
    const message = { ...baseQueryPayeeRequest } as QueryPayeeRequest;
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : "";
    message.relayer =
      object.relayer !== undefined && object.relayer !== null
        ? String(object.relayer)
        : "";
    return message;
  },

  toJSON(message: QueryPayeeRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryPayeeRequest>): QueryPayeeRequest {
    const message = { ...baseQueryPayeeRequest } as QueryPayeeRequest;
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    return message;
  },
};

const baseQueryPayeeResponse: object = { payeeAddress: "" };

export const QueryPayeeResponse = {
  encode(
    message: QueryPayeeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.payeeAddress !== "") {
      writer.uint32(10).string(message.payeeAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPayeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPayeeResponse } as QueryPayeeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payeeAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPayeeResponse {
    const message = { ...baseQueryPayeeResponse } as QueryPayeeResponse;
    message.payeeAddress =
      object.payeeAddress !== undefined && object.payeeAddress !== null
        ? String(object.payeeAddress)
        : "";
    return message;
  },

  toJSON(message: QueryPayeeResponse): unknown {
    const obj: any = {};
    message.payeeAddress !== undefined &&
      (obj.payeeAddress = message.payeeAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryPayeeResponse>): QueryPayeeResponse {
    const message = { ...baseQueryPayeeResponse } as QueryPayeeResponse;
    message.payeeAddress = object.payeeAddress ?? "";
    return message;
  },
};

const baseQueryCounterpartyPayeeRequest: object = {
  channelId: "",
  relayer: "",
};

export const QueryCounterpartyPayeeRequest = {
  encode(
    message: QueryCounterpartyPayeeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCounterpartyPayeeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCounterpartyPayeeRequest,
    } as QueryCounterpartyPayeeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.relayer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCounterpartyPayeeRequest {
    const message = {
      ...baseQueryCounterpartyPayeeRequest,
    } as QueryCounterpartyPayeeRequest;
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : "";
    message.relayer =
      object.relayer !== undefined && object.relayer !== null
        ? String(object.relayer)
        : "";
    return message;
  },

  toJSON(message: QueryCounterpartyPayeeRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCounterpartyPayeeRequest>
  ): QueryCounterpartyPayeeRequest {
    const message = {
      ...baseQueryCounterpartyPayeeRequest,
    } as QueryCounterpartyPayeeRequest;
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    return message;
  },
};

const baseQueryCounterpartyPayeeResponse: object = { counterpartyPayee: "" };

export const QueryCounterpartyPayeeResponse = {
  encode(
    message: QueryCounterpartyPayeeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.counterpartyPayee !== "") {
      writer.uint32(10).string(message.counterpartyPayee);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCounterpartyPayeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCounterpartyPayeeResponse,
    } as QueryCounterpartyPayeeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.counterpartyPayee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCounterpartyPayeeResponse {
    const message = {
      ...baseQueryCounterpartyPayeeResponse,
    } as QueryCounterpartyPayeeResponse;
    message.counterpartyPayee =
      object.counterpartyPayee !== undefined &&
      object.counterpartyPayee !== null
        ? String(object.counterpartyPayee)
        : "";
    return message;
  },

  toJSON(message: QueryCounterpartyPayeeResponse): unknown {
    const obj: any = {};
    message.counterpartyPayee !== undefined &&
      (obj.counterpartyPayee = message.counterpartyPayee);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCounterpartyPayeeResponse>
  ): QueryCounterpartyPayeeResponse {
    const message = {
      ...baseQueryCounterpartyPayeeResponse,
    } as QueryCounterpartyPayeeResponse;
    message.counterpartyPayee = object.counterpartyPayee ?? "";
    return message;
  },
};

const baseQueryFeeEnabledChannelsRequest: object = { queryHeight: Long.UZERO };

export const QueryFeeEnabledChannelsRequest = {
  encode(
    message: QueryFeeEnabledChannelsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (!message.queryHeight.isZero()) {
      writer.uint32(16).uint64(message.queryHeight);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryFeeEnabledChannelsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryFeeEnabledChannelsRequest,
    } as QueryFeeEnabledChannelsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.queryHeight = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFeeEnabledChannelsRequest {
    const message = {
      ...baseQueryFeeEnabledChannelsRequest,
    } as QueryFeeEnabledChannelsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    message.queryHeight =
      object.queryHeight !== undefined && object.queryHeight !== null
        ? Long.fromString(object.queryHeight)
        : Long.UZERO;
    return message;
  },

  toJSON(message: QueryFeeEnabledChannelsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    message.queryHeight !== undefined &&
      (obj.queryHeight = (message.queryHeight || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryFeeEnabledChannelsRequest>
  ): QueryFeeEnabledChannelsRequest {
    const message = {
      ...baseQueryFeeEnabledChannelsRequest,
    } as QueryFeeEnabledChannelsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    message.queryHeight =
      object.queryHeight !== undefined && object.queryHeight !== null
        ? Long.fromValue(object.queryHeight)
        : Long.UZERO;
    return message;
  },
};

const baseQueryFeeEnabledChannelsResponse: object = {};

export const QueryFeeEnabledChannelsResponse = {
  encode(
    message: QueryFeeEnabledChannelsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.feeEnabledChannels) {
      FeeEnabledChannel.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryFeeEnabledChannelsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryFeeEnabledChannelsResponse,
    } as QueryFeeEnabledChannelsResponse;
    message.feeEnabledChannels = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeEnabledChannels.push(
            FeeEnabledChannel.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryFeeEnabledChannelsResponse {
    const message = {
      ...baseQueryFeeEnabledChannelsResponse,
    } as QueryFeeEnabledChannelsResponse;
    message.feeEnabledChannels = (object.feeEnabledChannels ?? []).map(
      (e: any) => FeeEnabledChannel.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryFeeEnabledChannelsResponse): unknown {
    const obj: any = {};
    if (message.feeEnabledChannels) {
      obj.feeEnabledChannels = message.feeEnabledChannels.map((e) =>
        e ? FeeEnabledChannel.toJSON(e) : undefined
      );
    } else {
      obj.feeEnabledChannels = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryFeeEnabledChannelsResponse>
  ): QueryFeeEnabledChannelsResponse {
    const message = {
      ...baseQueryFeeEnabledChannelsResponse,
    } as QueryFeeEnabledChannelsResponse;
    message.feeEnabledChannels = (object.feeEnabledChannels ?? []).map((e) =>
      FeeEnabledChannel.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryFeeEnabledChannelRequest: object = { portId: "", channelId: "" };

export const QueryFeeEnabledChannelRequest = {
  encode(
    message: QueryFeeEnabledChannelRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryFeeEnabledChannelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryFeeEnabledChannelRequest,
    } as QueryFeeEnabledChannelRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFeeEnabledChannelRequest {
    const message = {
      ...baseQueryFeeEnabledChannelRequest,
    } as QueryFeeEnabledChannelRequest;
    message.portId =
      object.portId !== undefined && object.portId !== null
        ? String(object.portId)
        : "";
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : "";
    return message;
  },

  toJSON(message: QueryFeeEnabledChannelRequest): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryFeeEnabledChannelRequest>
  ): QueryFeeEnabledChannelRequest {
    const message = {
      ...baseQueryFeeEnabledChannelRequest,
    } as QueryFeeEnabledChannelRequest;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
};

const baseQueryFeeEnabledChannelResponse: object = { feeEnabled: false };

export const QueryFeeEnabledChannelResponse = {
  encode(
    message: QueryFeeEnabledChannelResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.feeEnabled === true) {
      writer.uint32(8).bool(message.feeEnabled);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryFeeEnabledChannelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryFeeEnabledChannelResponse,
    } as QueryFeeEnabledChannelResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFeeEnabledChannelResponse {
    const message = {
      ...baseQueryFeeEnabledChannelResponse,
    } as QueryFeeEnabledChannelResponse;
    message.feeEnabled =
      object.feeEnabled !== undefined && object.feeEnabled !== null
        ? Boolean(object.feeEnabled)
        : false;
    return message;
  },

  toJSON(message: QueryFeeEnabledChannelResponse): unknown {
    const obj: any = {};
    message.feeEnabled !== undefined && (obj.feeEnabled = message.feeEnabled);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryFeeEnabledChannelResponse>
  ): QueryFeeEnabledChannelResponse {
    const message = {
      ...baseQueryFeeEnabledChannelResponse,
    } as QueryFeeEnabledChannelResponse;
    message.feeEnabled = object.feeEnabled ?? false;
    return message;
  },
};

/** Query defines the ICS29 gRPC querier service. */
export interface Query {
  /** IncentivizedPackets returns all incentivized packets and their associated fees */
  IncentivizedPackets(
    request: QueryIncentivizedPacketsRequest
  ): Promise<QueryIncentivizedPacketsResponse>;
  /** IncentivizedPacket returns all packet fees for a packet given its identifier */
  IncentivizedPacket(
    request: QueryIncentivizedPacketRequest
  ): Promise<QueryIncentivizedPacketResponse>;
  /** Gets all incentivized packets for a specific channel */
  IncentivizedPacketsForChannel(
    request: QueryIncentivizedPacketsForChannelRequest
  ): Promise<QueryIncentivizedPacketsForChannelResponse>;
  /** TotalRecvFees returns the total receive fees for a packet given its identifier */
  TotalRecvFees(
    request: QueryTotalRecvFeesRequest
  ): Promise<QueryTotalRecvFeesResponse>;
  /** TotalAckFees returns the total acknowledgement fees for a packet given its identifier */
  TotalAckFees(
    request: QueryTotalAckFeesRequest
  ): Promise<QueryTotalAckFeesResponse>;
  /** TotalTimeoutFees returns the total timeout fees for a packet given its identifier */
  TotalTimeoutFees(
    request: QueryTotalTimeoutFeesRequest
  ): Promise<QueryTotalTimeoutFeesResponse>;
  /** Payee returns the registered payee address for a specific channel given the relayer address */
  Payee(request: QueryPayeeRequest): Promise<QueryPayeeResponse>;
  /** CounterpartyPayee returns the registered counterparty payee for forward relaying */
  CounterpartyPayee(
    request: QueryCounterpartyPayeeRequest
  ): Promise<QueryCounterpartyPayeeResponse>;
  /** FeeEnabledChannels returns a list of all fee enabled channels */
  FeeEnabledChannels(
    request: QueryFeeEnabledChannelsRequest
  ): Promise<QueryFeeEnabledChannelsResponse>;
  /** FeeEnabledChannel returns true if the provided port and channel identifiers belong to a fee enabled channel */
  FeeEnabledChannel(
    request: QueryFeeEnabledChannelRequest
  ): Promise<QueryFeeEnabledChannelResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.IncentivizedPackets = this.IncentivizedPackets.bind(this);
    this.IncentivizedPacket = this.IncentivizedPacket.bind(this);
    this.IncentivizedPacketsForChannel =
      this.IncentivizedPacketsForChannel.bind(this);
    this.TotalRecvFees = this.TotalRecvFees.bind(this);
    this.TotalAckFees = this.TotalAckFees.bind(this);
    this.TotalTimeoutFees = this.TotalTimeoutFees.bind(this);
    this.Payee = this.Payee.bind(this);
    this.CounterpartyPayee = this.CounterpartyPayee.bind(this);
    this.FeeEnabledChannels = this.FeeEnabledChannels.bind(this);
    this.FeeEnabledChannel = this.FeeEnabledChannel.bind(this);
  }
  IncentivizedPackets(
    request: QueryIncentivizedPacketsRequest
  ): Promise<QueryIncentivizedPacketsResponse> {
    const data = QueryIncentivizedPacketsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.applications.fee.v1.Query",
      "IncentivizedPackets",
      data
    );
    return promise.then((data) =>
      QueryIncentivizedPacketsResponse.decode(new _m0.Reader(data))
    );
  }

  IncentivizedPacket(
    request: QueryIncentivizedPacketRequest
  ): Promise<QueryIncentivizedPacketResponse> {
    const data = QueryIncentivizedPacketRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.applications.fee.v1.Query",
      "IncentivizedPacket",
      data
    );
    return promise.then((data) =>
      QueryIncentivizedPacketResponse.decode(new _m0.Reader(data))
    );
  }

  IncentivizedPacketsForChannel(
    request: QueryIncentivizedPacketsForChannelRequest
  ): Promise<QueryIncentivizedPacketsForChannelResponse> {
    const data =
      QueryIncentivizedPacketsForChannelRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.applications.fee.v1.Query",
      "IncentivizedPacketsForChannel",
      data
    );
    return promise.then((data) =>
      QueryIncentivizedPacketsForChannelResponse.decode(new _m0.Reader(data))
    );
  }

  TotalRecvFees(
    request: QueryTotalRecvFeesRequest
  ): Promise<QueryTotalRecvFeesResponse> {
    const data = QueryTotalRecvFeesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.applications.fee.v1.Query",
      "TotalRecvFees",
      data
    );
    return promise.then((data) =>
      QueryTotalRecvFeesResponse.decode(new _m0.Reader(data))
    );
  }

  TotalAckFees(
    request: QueryTotalAckFeesRequest
  ): Promise<QueryTotalAckFeesResponse> {
    const data = QueryTotalAckFeesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.applications.fee.v1.Query",
      "TotalAckFees",
      data
    );
    return promise.then((data) =>
      QueryTotalAckFeesResponse.decode(new _m0.Reader(data))
    );
  }

  TotalTimeoutFees(
    request: QueryTotalTimeoutFeesRequest
  ): Promise<QueryTotalTimeoutFeesResponse> {
    const data = QueryTotalTimeoutFeesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.applications.fee.v1.Query",
      "TotalTimeoutFees",
      data
    );
    return promise.then((data) =>
      QueryTotalTimeoutFeesResponse.decode(new _m0.Reader(data))
    );
  }

  Payee(request: QueryPayeeRequest): Promise<QueryPayeeResponse> {
    const data = QueryPayeeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.applications.fee.v1.Query",
      "Payee",
      data
    );
    return promise.then((data) =>
      QueryPayeeResponse.decode(new _m0.Reader(data))
    );
  }

  CounterpartyPayee(
    request: QueryCounterpartyPayeeRequest
  ): Promise<QueryCounterpartyPayeeResponse> {
    const data = QueryCounterpartyPayeeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.applications.fee.v1.Query",
      "CounterpartyPayee",
      data
    );
    return promise.then((data) =>
      QueryCounterpartyPayeeResponse.decode(new _m0.Reader(data))
    );
  }

  FeeEnabledChannels(
    request: QueryFeeEnabledChannelsRequest
  ): Promise<QueryFeeEnabledChannelsResponse> {
    const data = QueryFeeEnabledChannelsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.applications.fee.v1.Query",
      "FeeEnabledChannels",
      data
    );
    return promise.then((data) =>
      QueryFeeEnabledChannelsResponse.decode(new _m0.Reader(data))
    );
  }

  FeeEnabledChannel(
    request: QueryFeeEnabledChannelRequest
  ): Promise<QueryFeeEnabledChannelResponse> {
    const data = QueryFeeEnabledChannelRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.applications.fee.v1.Query",
      "FeeEnabledChannel",
      data
    );
    return promise.then((data) =>
      QueryFeeEnabledChannelResponse.decode(new _m0.Reader(data))
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
