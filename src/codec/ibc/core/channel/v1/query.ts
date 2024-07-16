/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Channel, Params, IdentifiedChannel, PacketState } from "./channel";
import { Height, IdentifiedClientState } from "../../client/v1/client";
import {
  PageRequest,
  PageResponse,
} from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
import { ErrorReceipt, Upgrade } from "./upgrade";

export const protobufPackage = "ibc.core.channel.v1";

/** QueryChannelRequest is the request type for the Query/Channel RPC method */
export interface QueryChannelRequest {
  /** port unique identifier */
  portId: string;
  /** channel unique identifier */
  channelId: string;
}

/**
 * QueryChannelResponse is the response type for the Query/Channel RPC method.
 * Besides the Channel end, it includes a proof and the height from which the
 * proof was retrieved.
 */
export interface QueryChannelResponse {
  /** channel associated with the request identifiers */
  channel?: Channel;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight?: Height;
}

/** QueryChannelsRequest is the request type for the Query/Channels RPC method */
export interface QueryChannelsRequest {
  /** pagination request */
  pagination?: PageRequest;
}

/** QueryChannelsResponse is the response type for the Query/Channels RPC method. */
export interface QueryChannelsResponse {
  /** list of stored channels of the chain. */
  channels: IdentifiedChannel[];
  /** pagination response */
  pagination?: PageResponse;
  /** query block height */
  height?: Height;
}

/**
 * QueryConnectionChannelsRequest is the request type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsRequest {
  /** connection unique identifier */
  connection: string;
  /** pagination request */
  pagination?: PageRequest;
}

/**
 * QueryConnectionChannelsResponse is the Response type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsResponse {
  /** list of channels associated with a connection. */
  channels: IdentifiedChannel[];
  /** pagination response */
  pagination?: PageResponse;
  /** query block height */
  height?: Height;
}

/**
 * QueryChannelClientStateRequest is the request type for the Query/ClientState
 * RPC method
 */
export interface QueryChannelClientStateRequest {
  /** port unique identifier */
  portId: string;
  /** channel unique identifier */
  channelId: string;
}

/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelClientStateResponse {
  /** client state associated with the channel */
  identifiedClientState?: IdentifiedClientState;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight?: Height;
}

/**
 * QueryChannelConsensusStateRequest is the request type for the
 * Query/ConsensusState RPC method
 */
export interface QueryChannelConsensusStateRequest {
  /** port unique identifier */
  portId: string;
  /** channel unique identifier */
  channelId: string;
  /** revision number of the consensus state */
  revisionNumber: Long;
  /** revision height of the consensus state */
  revisionHeight: Long;
}

/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelConsensusStateResponse {
  /** consensus state associated with the channel */
  consensusState?: Any;
  /** client ID associated with the consensus state */
  clientId: string;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight?: Height;
}

/**
 * QueryPacketCommitmentRequest is the request type for the
 * Query/PacketCommitment RPC method
 */
export interface QueryPacketCommitmentRequest {
  /** port unique identifier */
  portId: string;
  /** channel unique identifier */
  channelId: string;
  /** packet sequence */
  sequence: Long;
}

/**
 * QueryPacketCommitmentResponse defines the client query response for a packet
 * which also includes a proof and the height from which the proof was
 * retrieved
 */
export interface QueryPacketCommitmentResponse {
  /** packet associated with the request fields */
  commitment: Uint8Array;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight?: Height;
}

/**
 * QueryPacketCommitmentsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsRequest {
  /** port unique identifier */
  portId: string;
  /** channel unique identifier */
  channelId: string;
  /** pagination request */
  pagination?: PageRequest;
}

/**
 * QueryPacketCommitmentsResponse is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsResponse {
  commitments: PacketState[];
  /** pagination response */
  pagination?: PageResponse;
  /** query block height */
  height?: Height;
}

/**
 * QueryPacketReceiptRequest is the request type for the
 * Query/PacketReceipt RPC method
 */
export interface QueryPacketReceiptRequest {
  /** port unique identifier */
  portId: string;
  /** channel unique identifier */
  channelId: string;
  /** packet sequence */
  sequence: Long;
}

/**
 * QueryPacketReceiptResponse defines the client query response for a packet
 * receipt which also includes a proof, and the height from which the proof was
 * retrieved
 */
export interface QueryPacketReceiptResponse {
  /** success flag for if receipt exists */
  received: boolean;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight?: Height;
}

/**
 * QueryPacketAcknowledgementRequest is the request type for the
 * Query/PacketAcknowledgement RPC method
 */
export interface QueryPacketAcknowledgementRequest {
  /** port unique identifier */
  portId: string;
  /** channel unique identifier */
  channelId: string;
  /** packet sequence */
  sequence: Long;
}

/**
 * QueryPacketAcknowledgementResponse defines the client query response for a
 * packet which also includes a proof and the height from which the
 * proof was retrieved
 */
export interface QueryPacketAcknowledgementResponse {
  /** packet associated with the request fields */
  acknowledgement: Uint8Array;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight?: Height;
}

/**
 * QueryPacketAcknowledgementsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketAcknowledgementsRequest {
  /** port unique identifier */
  portId: string;
  /** channel unique identifier */
  channelId: string;
  /** pagination request */
  pagination?: PageRequest;
  /** list of packet sequences */
  packetCommitmentSequences: Long[];
}

/**
 * QueryPacketAcknowledgemetsResponse is the request type for the
 * Query/QueryPacketAcknowledgements RPC method
 */
export interface QueryPacketAcknowledgementsResponse {
  acknowledgements: PacketState[];
  /** pagination response */
  pagination?: PageResponse;
  /** query block height */
  height?: Height;
}

/**
 * QueryUnreceivedPacketsRequest is the request type for the
 * Query/UnreceivedPackets RPC method
 */
export interface QueryUnreceivedPacketsRequest {
  /** port unique identifier */
  portId: string;
  /** channel unique identifier */
  channelId: string;
  /** list of packet sequences */
  packetCommitmentSequences: Long[];
}

/**
 * QueryUnreceivedPacketsResponse is the response type for the
 * Query/UnreceivedPacketCommitments RPC method
 */
export interface QueryUnreceivedPacketsResponse {
  /** list of unreceived packet sequences */
  sequences: Long[];
  /** query block height */
  height?: Height;
}

/**
 * QueryUnreceivedAcks is the request type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksRequest {
  /** port unique identifier */
  portId: string;
  /** channel unique identifier */
  channelId: string;
  /** list of acknowledgement sequences */
  packetAckSequences: Long[];
}

/**
 * QueryUnreceivedAcksResponse is the response type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksResponse {
  /** list of unreceived acknowledgement sequences */
  sequences: Long[];
  /** query block height */
  height?: Height;
}

/**
 * QueryNextSequenceReceiveRequest is the request type for the
 * Query/QueryNextSequenceReceiveRequest RPC method
 */
export interface QueryNextSequenceReceiveRequest {
  /** port unique identifier */
  portId: string;
  /** channel unique identifier */
  channelId: string;
}

/**
 * QuerySequenceResponse is the response type for the
 * Query/QueryNextSequenceReceiveResponse RPC method
 */
export interface QueryNextSequenceReceiveResponse {
  /** next sequence receive number */
  nextSequenceReceive: Long;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight?: Height;
}

/**
 * QueryNextSequenceSendRequest is the request type for the
 * Query/QueryNextSequenceSend RPC method
 */
export interface QueryNextSequenceSendRequest {
  /** port unique identifier */
  portId: string;
  /** channel unique identifier */
  channelId: string;
}

/**
 * QueryNextSequenceSendResponse is the request type for the
 * Query/QueryNextSequenceSend RPC method
 */
export interface QueryNextSequenceSendResponse {
  /** next sequence send number */
  nextSequenceSend: Long;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight?: Height;
}

/** QueryUpgradeErrorRequest is the request type for the Query/QueryUpgradeError RPC method */
export interface QueryUpgradeErrorRequest {
  portId: string;
  channelId: string;
}

/** QueryUpgradeErrorResponse is the response type for the Query/QueryUpgradeError RPC method */
export interface QueryUpgradeErrorResponse {
  errorReceipt?: ErrorReceipt;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight?: Height;
}

/** QueryUpgradeRequest is the request type for the QueryUpgradeRequest RPC method */
export interface QueryUpgradeRequest {
  portId: string;
  channelId: string;
}

/** QueryUpgradeResponse is the response type for the QueryUpgradeResponse RPC method */
export interface QueryUpgradeResponse {
  upgrade?: Upgrade;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight?: Height;
}

/** QueryChannelParamsRequest is the request type for the Query/ChannelParams RPC method. */
export interface QueryChannelParamsRequest {}

/** QueryChannelParamsResponse is the response type for the Query/ChannelParams RPC method. */
export interface QueryChannelParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}

const baseQueryChannelRequest: object = { portId: "", channelId: "" };

export const QueryChannelRequest = {
  encode(
    message: QueryChannelRequest,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryChannelRequest } as QueryChannelRequest;
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

  fromJSON(object: any): QueryChannelRequest {
    const message = { ...baseQueryChannelRequest } as QueryChannelRequest;
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

  toJSON(message: QueryChannelRequest): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryChannelRequest>): QueryChannelRequest {
    const message = { ...baseQueryChannelRequest } as QueryChannelRequest;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
};

const baseQueryChannelResponse: object = {};

export const QueryChannelResponse = {
  encode(
    message: QueryChannelResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channel !== undefined) {
      Channel.encode(message.channel, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryChannelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryChannelResponse } as QueryChannelResponse;
    message.proof = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channel = Channel.decode(reader, reader.uint32());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryChannelResponse {
    const message = { ...baseQueryChannelResponse } as QueryChannelResponse;
    message.channel =
      object.channel !== undefined && object.channel !== null
        ? Channel.fromJSON(object.channel)
        : undefined;
    message.proof =
      object.proof !== undefined && object.proof !== null
        ? bytesFromBase64(object.proof)
        : new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromJSON(object.proofHeight)
        : undefined;
    return message;
  },

  toJSON(message: QueryChannelResponse): unknown {
    const obj: any = {};
    message.channel !== undefined &&
      (obj.channel = message.channel
        ? Channel.toJSON(message.channel)
        : undefined);
    message.proof !== undefined &&
      (obj.proof = base64FromBytes(
        message.proof !== undefined ? message.proof : new Uint8Array()
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight
        ? Height.toJSON(message.proofHeight)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryChannelResponse>): QueryChannelResponse {
    const message = { ...baseQueryChannelResponse } as QueryChannelResponse;
    message.channel =
      object.channel !== undefined && object.channel !== null
        ? Channel.fromPartial(object.channel)
        : undefined;
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    return message;
  },
};

const baseQueryChannelsRequest: object = {};

export const QueryChannelsRequest = {
  encode(
    message: QueryChannelsRequest,
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
  ): QueryChannelsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryChannelsRequest } as QueryChannelsRequest;
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

  fromJSON(object: any): QueryChannelsRequest {
    const message = { ...baseQueryChannelsRequest } as QueryChannelsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryChannelsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryChannelsRequest>): QueryChannelsRequest {
    const message = { ...baseQueryChannelsRequest } as QueryChannelsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryChannelsResponse: object = {};

export const QueryChannelsResponse = {
  encode(
    message: QueryChannelsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.channels) {
      IdentifiedChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryChannelsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryChannelsResponse } as QueryChannelsResponse;
    message.channels = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channels.push(
            IdentifiedChannel.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryChannelsResponse {
    const message = { ...baseQueryChannelsResponse } as QueryChannelsResponse;
    message.channels = (object.channels ?? []).map((e: any) =>
      IdentifiedChannel.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    message.height =
      object.height !== undefined && object.height !== null
        ? Height.fromJSON(object.height)
        : undefined;
    return message;
  },

  toJSON(message: QueryChannelsResponse): unknown {
    const obj: any = {};
    if (message.channels) {
      obj.channels = message.channels.map((e) =>
        e ? IdentifiedChannel.toJSON(e) : undefined
      );
    } else {
      obj.channels = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    message.height !== undefined &&
      (obj.height = message.height ? Height.toJSON(message.height) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryChannelsResponse>
  ): QueryChannelsResponse {
    const message = { ...baseQueryChannelsResponse } as QueryChannelsResponse;
    message.channels = (object.channels ?? []).map((e) =>
      IdentifiedChannel.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    message.height =
      object.height !== undefined && object.height !== null
        ? Height.fromPartial(object.height)
        : undefined;
    return message;
  },
};

const baseQueryConnectionChannelsRequest: object = { connection: "" };

export const QueryConnectionChannelsRequest = {
  encode(
    message: QueryConnectionChannelsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.connection !== "") {
      writer.uint32(10).string(message.connection);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryConnectionChannelsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryConnectionChannelsRequest,
    } as QueryConnectionChannelsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection = reader.string();
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

  fromJSON(object: any): QueryConnectionChannelsRequest {
    const message = {
      ...baseQueryConnectionChannelsRequest,
    } as QueryConnectionChannelsRequest;
    message.connection =
      object.connection !== undefined && object.connection !== null
        ? String(object.connection)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryConnectionChannelsRequest): unknown {
    const obj: any = {};
    message.connection !== undefined && (obj.connection = message.connection);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryConnectionChannelsRequest>
  ): QueryConnectionChannelsRequest {
    const message = {
      ...baseQueryConnectionChannelsRequest,
    } as QueryConnectionChannelsRequest;
    message.connection = object.connection ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryConnectionChannelsResponse: object = {};

export const QueryConnectionChannelsResponse = {
  encode(
    message: QueryConnectionChannelsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.channels) {
      IdentifiedChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryConnectionChannelsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryConnectionChannelsResponse,
    } as QueryConnectionChannelsResponse;
    message.channels = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channels.push(
            IdentifiedChannel.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryConnectionChannelsResponse {
    const message = {
      ...baseQueryConnectionChannelsResponse,
    } as QueryConnectionChannelsResponse;
    message.channels = (object.channels ?? []).map((e: any) =>
      IdentifiedChannel.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    message.height =
      object.height !== undefined && object.height !== null
        ? Height.fromJSON(object.height)
        : undefined;
    return message;
  },

  toJSON(message: QueryConnectionChannelsResponse): unknown {
    const obj: any = {};
    if (message.channels) {
      obj.channels = message.channels.map((e) =>
        e ? IdentifiedChannel.toJSON(e) : undefined
      );
    } else {
      obj.channels = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    message.height !== undefined &&
      (obj.height = message.height ? Height.toJSON(message.height) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryConnectionChannelsResponse>
  ): QueryConnectionChannelsResponse {
    const message = {
      ...baseQueryConnectionChannelsResponse,
    } as QueryConnectionChannelsResponse;
    message.channels = (object.channels ?? []).map((e) =>
      IdentifiedChannel.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    message.height =
      object.height !== undefined && object.height !== null
        ? Height.fromPartial(object.height)
        : undefined;
    return message;
  },
};

const baseQueryChannelClientStateRequest: object = {
  portId: "",
  channelId: "",
};

export const QueryChannelClientStateRequest = {
  encode(
    message: QueryChannelClientStateRequest,
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
  ): QueryChannelClientStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryChannelClientStateRequest,
    } as QueryChannelClientStateRequest;
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

  fromJSON(object: any): QueryChannelClientStateRequest {
    const message = {
      ...baseQueryChannelClientStateRequest,
    } as QueryChannelClientStateRequest;
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

  toJSON(message: QueryChannelClientStateRequest): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryChannelClientStateRequest>
  ): QueryChannelClientStateRequest {
    const message = {
      ...baseQueryChannelClientStateRequest,
    } as QueryChannelClientStateRequest;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
};

const baseQueryChannelClientStateResponse: object = {};

export const QueryChannelClientStateResponse = {
  encode(
    message: QueryChannelClientStateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.identifiedClientState !== undefined) {
      IdentifiedClientState.encode(
        message.identifiedClientState,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryChannelClientStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryChannelClientStateResponse,
    } as QueryChannelClientStateResponse;
    message.proof = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifiedClientState = IdentifiedClientState.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryChannelClientStateResponse {
    const message = {
      ...baseQueryChannelClientStateResponse,
    } as QueryChannelClientStateResponse;
    message.identifiedClientState =
      object.identifiedClientState !== undefined &&
      object.identifiedClientState !== null
        ? IdentifiedClientState.fromJSON(object.identifiedClientState)
        : undefined;
    message.proof =
      object.proof !== undefined && object.proof !== null
        ? bytesFromBase64(object.proof)
        : new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromJSON(object.proofHeight)
        : undefined;
    return message;
  },

  toJSON(message: QueryChannelClientStateResponse): unknown {
    const obj: any = {};
    message.identifiedClientState !== undefined &&
      (obj.identifiedClientState = message.identifiedClientState
        ? IdentifiedClientState.toJSON(message.identifiedClientState)
        : undefined);
    message.proof !== undefined &&
      (obj.proof = base64FromBytes(
        message.proof !== undefined ? message.proof : new Uint8Array()
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight
        ? Height.toJSON(message.proofHeight)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryChannelClientStateResponse>
  ): QueryChannelClientStateResponse {
    const message = {
      ...baseQueryChannelClientStateResponse,
    } as QueryChannelClientStateResponse;
    message.identifiedClientState =
      object.identifiedClientState !== undefined &&
      object.identifiedClientState !== null
        ? IdentifiedClientState.fromPartial(object.identifiedClientState)
        : undefined;
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    return message;
  },
};

const baseQueryChannelConsensusStateRequest: object = {
  portId: "",
  channelId: "",
  revisionNumber: Long.UZERO,
  revisionHeight: Long.UZERO,
};

export const QueryChannelConsensusStateRequest = {
  encode(
    message: QueryChannelConsensusStateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (!message.revisionNumber.isZero()) {
      writer.uint32(24).uint64(message.revisionNumber);
    }
    if (!message.revisionHeight.isZero()) {
      writer.uint32(32).uint64(message.revisionHeight);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryChannelConsensusStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryChannelConsensusStateRequest,
    } as QueryChannelConsensusStateRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.revisionNumber = reader.uint64() as Long;
          break;
        case 4:
          message.revisionHeight = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryChannelConsensusStateRequest {
    const message = {
      ...baseQueryChannelConsensusStateRequest,
    } as QueryChannelConsensusStateRequest;
    message.portId =
      object.portId !== undefined && object.portId !== null
        ? String(object.portId)
        : "";
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : "";
    message.revisionNumber =
      object.revisionNumber !== undefined && object.revisionNumber !== null
        ? Long.fromString(object.revisionNumber)
        : Long.UZERO;
    message.revisionHeight =
      object.revisionHeight !== undefined && object.revisionHeight !== null
        ? Long.fromString(object.revisionHeight)
        : Long.UZERO;
    return message;
  },

  toJSON(message: QueryChannelConsensusStateRequest): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.revisionNumber !== undefined &&
      (obj.revisionNumber = (message.revisionNumber || Long.UZERO).toString());
    message.revisionHeight !== undefined &&
      (obj.revisionHeight = (message.revisionHeight || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryChannelConsensusStateRequest>
  ): QueryChannelConsensusStateRequest {
    const message = {
      ...baseQueryChannelConsensusStateRequest,
    } as QueryChannelConsensusStateRequest;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.revisionNumber =
      object.revisionNumber !== undefined && object.revisionNumber !== null
        ? Long.fromValue(object.revisionNumber)
        : Long.UZERO;
    message.revisionHeight =
      object.revisionHeight !== undefined && object.revisionHeight !== null
        ? Long.fromValue(object.revisionHeight)
        : Long.UZERO;
    return message;
  },
};

const baseQueryChannelConsensusStateResponse: object = { clientId: "" };

export const QueryChannelConsensusStateResponse = {
  encode(
    message: QueryChannelConsensusStateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(10).fork()).ldelim();
    }
    if (message.clientId !== "") {
      writer.uint32(18).string(message.clientId);
    }
    if (message.proof.length !== 0) {
      writer.uint32(26).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryChannelConsensusStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryChannelConsensusStateResponse,
    } as QueryChannelConsensusStateResponse;
    message.proof = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusState = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.clientId = reader.string();
          break;
        case 3:
          message.proof = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryChannelConsensusStateResponse {
    const message = {
      ...baseQueryChannelConsensusStateResponse,
    } as QueryChannelConsensusStateResponse;
    message.consensusState =
      object.consensusState !== undefined && object.consensusState !== null
        ? Any.fromJSON(object.consensusState)
        : undefined;
    message.clientId =
      object.clientId !== undefined && object.clientId !== null
        ? String(object.clientId)
        : "";
    message.proof =
      object.proof !== undefined && object.proof !== null
        ? bytesFromBase64(object.proof)
        : new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromJSON(object.proofHeight)
        : undefined;
    return message;
  },

  toJSON(message: QueryChannelConsensusStateResponse): unknown {
    const obj: any = {};
    message.consensusState !== undefined &&
      (obj.consensusState = message.consensusState
        ? Any.toJSON(message.consensusState)
        : undefined);
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.proof !== undefined &&
      (obj.proof = base64FromBytes(
        message.proof !== undefined ? message.proof : new Uint8Array()
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight
        ? Height.toJSON(message.proofHeight)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryChannelConsensusStateResponse>
  ): QueryChannelConsensusStateResponse {
    const message = {
      ...baseQueryChannelConsensusStateResponse,
    } as QueryChannelConsensusStateResponse;
    message.consensusState =
      object.consensusState !== undefined && object.consensusState !== null
        ? Any.fromPartial(object.consensusState)
        : undefined;
    message.clientId = object.clientId ?? "";
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    return message;
  },
};

const baseQueryPacketCommitmentRequest: object = {
  portId: "",
  channelId: "",
  sequence: Long.UZERO,
};

export const QueryPacketCommitmentRequest = {
  encode(
    message: QueryPacketCommitmentRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPacketCommitmentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryPacketCommitmentRequest,
    } as QueryPacketCommitmentRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.sequence = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPacketCommitmentRequest {
    const message = {
      ...baseQueryPacketCommitmentRequest,
    } as QueryPacketCommitmentRequest;
    message.portId =
      object.portId !== undefined && object.portId !== null
        ? String(object.portId)
        : "";
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : "";
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? Long.fromString(object.sequence)
        : Long.UZERO;
    return message;
  },

  toJSON(message: QueryPacketCommitmentRequest): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.sequence !== undefined &&
      (obj.sequence = (message.sequence || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPacketCommitmentRequest>
  ): QueryPacketCommitmentRequest {
    const message = {
      ...baseQueryPacketCommitmentRequest,
    } as QueryPacketCommitmentRequest;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? Long.fromValue(object.sequence)
        : Long.UZERO;
    return message;
  },
};

const baseQueryPacketCommitmentResponse: object = {};

export const QueryPacketCommitmentResponse = {
  encode(
    message: QueryPacketCommitmentResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.commitment.length !== 0) {
      writer.uint32(10).bytes(message.commitment);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPacketCommitmentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryPacketCommitmentResponse,
    } as QueryPacketCommitmentResponse;
    message.commitment = new Uint8Array();
    message.proof = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitment = reader.bytes();
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPacketCommitmentResponse {
    const message = {
      ...baseQueryPacketCommitmentResponse,
    } as QueryPacketCommitmentResponse;
    message.commitment =
      object.commitment !== undefined && object.commitment !== null
        ? bytesFromBase64(object.commitment)
        : new Uint8Array();
    message.proof =
      object.proof !== undefined && object.proof !== null
        ? bytesFromBase64(object.proof)
        : new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromJSON(object.proofHeight)
        : undefined;
    return message;
  },

  toJSON(message: QueryPacketCommitmentResponse): unknown {
    const obj: any = {};
    message.commitment !== undefined &&
      (obj.commitment = base64FromBytes(
        message.commitment !== undefined ? message.commitment : new Uint8Array()
      ));
    message.proof !== undefined &&
      (obj.proof = base64FromBytes(
        message.proof !== undefined ? message.proof : new Uint8Array()
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight
        ? Height.toJSON(message.proofHeight)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPacketCommitmentResponse>
  ): QueryPacketCommitmentResponse {
    const message = {
      ...baseQueryPacketCommitmentResponse,
    } as QueryPacketCommitmentResponse;
    message.commitment = object.commitment ?? new Uint8Array();
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    return message;
  },
};

const baseQueryPacketCommitmentsRequest: object = { portId: "", channelId: "" };

export const QueryPacketCommitmentsRequest = {
  encode(
    message: QueryPacketCommitmentsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPacketCommitmentsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryPacketCommitmentsRequest,
    } as QueryPacketCommitmentsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPacketCommitmentsRequest {
    const message = {
      ...baseQueryPacketCommitmentsRequest,
    } as QueryPacketCommitmentsRequest;
    message.portId =
      object.portId !== undefined && object.portId !== null
        ? String(object.portId)
        : "";
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryPacketCommitmentsRequest): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPacketCommitmentsRequest>
  ): QueryPacketCommitmentsRequest {
    const message = {
      ...baseQueryPacketCommitmentsRequest,
    } as QueryPacketCommitmentsRequest;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryPacketCommitmentsResponse: object = {};

export const QueryPacketCommitmentsResponse = {
  encode(
    message: QueryPacketCommitmentsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.commitments) {
      PacketState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPacketCommitmentsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryPacketCommitmentsResponse,
    } as QueryPacketCommitmentsResponse;
    message.commitments = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitments.push(PacketState.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPacketCommitmentsResponse {
    const message = {
      ...baseQueryPacketCommitmentsResponse,
    } as QueryPacketCommitmentsResponse;
    message.commitments = (object.commitments ?? []).map((e: any) =>
      PacketState.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    message.height =
      object.height !== undefined && object.height !== null
        ? Height.fromJSON(object.height)
        : undefined;
    return message;
  },

  toJSON(message: QueryPacketCommitmentsResponse): unknown {
    const obj: any = {};
    if (message.commitments) {
      obj.commitments = message.commitments.map((e) =>
        e ? PacketState.toJSON(e) : undefined
      );
    } else {
      obj.commitments = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    message.height !== undefined &&
      (obj.height = message.height ? Height.toJSON(message.height) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPacketCommitmentsResponse>
  ): QueryPacketCommitmentsResponse {
    const message = {
      ...baseQueryPacketCommitmentsResponse,
    } as QueryPacketCommitmentsResponse;
    message.commitments = (object.commitments ?? []).map((e) =>
      PacketState.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    message.height =
      object.height !== undefined && object.height !== null
        ? Height.fromPartial(object.height)
        : undefined;
    return message;
  },
};

const baseQueryPacketReceiptRequest: object = {
  portId: "",
  channelId: "",
  sequence: Long.UZERO,
};

export const QueryPacketReceiptRequest = {
  encode(
    message: QueryPacketReceiptRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPacketReceiptRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryPacketReceiptRequest,
    } as QueryPacketReceiptRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.sequence = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPacketReceiptRequest {
    const message = {
      ...baseQueryPacketReceiptRequest,
    } as QueryPacketReceiptRequest;
    message.portId =
      object.portId !== undefined && object.portId !== null
        ? String(object.portId)
        : "";
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : "";
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? Long.fromString(object.sequence)
        : Long.UZERO;
    return message;
  },

  toJSON(message: QueryPacketReceiptRequest): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.sequence !== undefined &&
      (obj.sequence = (message.sequence || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPacketReceiptRequest>
  ): QueryPacketReceiptRequest {
    const message = {
      ...baseQueryPacketReceiptRequest,
    } as QueryPacketReceiptRequest;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? Long.fromValue(object.sequence)
        : Long.UZERO;
    return message;
  },
};

const baseQueryPacketReceiptResponse: object = { received: false };

export const QueryPacketReceiptResponse = {
  encode(
    message: QueryPacketReceiptResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.received === true) {
      writer.uint32(16).bool(message.received);
    }
    if (message.proof.length !== 0) {
      writer.uint32(26).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPacketReceiptResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryPacketReceiptResponse,
    } as QueryPacketReceiptResponse;
    message.proof = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.received = reader.bool();
          break;
        case 3:
          message.proof = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPacketReceiptResponse {
    const message = {
      ...baseQueryPacketReceiptResponse,
    } as QueryPacketReceiptResponse;
    message.received =
      object.received !== undefined && object.received !== null
        ? Boolean(object.received)
        : false;
    message.proof =
      object.proof !== undefined && object.proof !== null
        ? bytesFromBase64(object.proof)
        : new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromJSON(object.proofHeight)
        : undefined;
    return message;
  },

  toJSON(message: QueryPacketReceiptResponse): unknown {
    const obj: any = {};
    message.received !== undefined && (obj.received = message.received);
    message.proof !== undefined &&
      (obj.proof = base64FromBytes(
        message.proof !== undefined ? message.proof : new Uint8Array()
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight
        ? Height.toJSON(message.proofHeight)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPacketReceiptResponse>
  ): QueryPacketReceiptResponse {
    const message = {
      ...baseQueryPacketReceiptResponse,
    } as QueryPacketReceiptResponse;
    message.received = object.received ?? false;
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    return message;
  },
};

const baseQueryPacketAcknowledgementRequest: object = {
  portId: "",
  channelId: "",
  sequence: Long.UZERO,
};

export const QueryPacketAcknowledgementRequest = {
  encode(
    message: QueryPacketAcknowledgementRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPacketAcknowledgementRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryPacketAcknowledgementRequest,
    } as QueryPacketAcknowledgementRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.sequence = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPacketAcknowledgementRequest {
    const message = {
      ...baseQueryPacketAcknowledgementRequest,
    } as QueryPacketAcknowledgementRequest;
    message.portId =
      object.portId !== undefined && object.portId !== null
        ? String(object.portId)
        : "";
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : "";
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? Long.fromString(object.sequence)
        : Long.UZERO;
    return message;
  },

  toJSON(message: QueryPacketAcknowledgementRequest): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.sequence !== undefined &&
      (obj.sequence = (message.sequence || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPacketAcknowledgementRequest>
  ): QueryPacketAcknowledgementRequest {
    const message = {
      ...baseQueryPacketAcknowledgementRequest,
    } as QueryPacketAcknowledgementRequest;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? Long.fromValue(object.sequence)
        : Long.UZERO;
    return message;
  },
};

const baseQueryPacketAcknowledgementResponse: object = {};

export const QueryPacketAcknowledgementResponse = {
  encode(
    message: QueryPacketAcknowledgementResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.acknowledgement.length !== 0) {
      writer.uint32(10).bytes(message.acknowledgement);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPacketAcknowledgementResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryPacketAcknowledgementResponse,
    } as QueryPacketAcknowledgementResponse;
    message.acknowledgement = new Uint8Array();
    message.proof = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.acknowledgement = reader.bytes();
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPacketAcknowledgementResponse {
    const message = {
      ...baseQueryPacketAcknowledgementResponse,
    } as QueryPacketAcknowledgementResponse;
    message.acknowledgement =
      object.acknowledgement !== undefined && object.acknowledgement !== null
        ? bytesFromBase64(object.acknowledgement)
        : new Uint8Array();
    message.proof =
      object.proof !== undefined && object.proof !== null
        ? bytesFromBase64(object.proof)
        : new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromJSON(object.proofHeight)
        : undefined;
    return message;
  },

  toJSON(message: QueryPacketAcknowledgementResponse): unknown {
    const obj: any = {};
    message.acknowledgement !== undefined &&
      (obj.acknowledgement = base64FromBytes(
        message.acknowledgement !== undefined
          ? message.acknowledgement
          : new Uint8Array()
      ));
    message.proof !== undefined &&
      (obj.proof = base64FromBytes(
        message.proof !== undefined ? message.proof : new Uint8Array()
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight
        ? Height.toJSON(message.proofHeight)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPacketAcknowledgementResponse>
  ): QueryPacketAcknowledgementResponse {
    const message = {
      ...baseQueryPacketAcknowledgementResponse,
    } as QueryPacketAcknowledgementResponse;
    message.acknowledgement = object.acknowledgement ?? new Uint8Array();
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    return message;
  },
};

const baseQueryPacketAcknowledgementsRequest: object = {
  portId: "",
  channelId: "",
  packetCommitmentSequences: Long.UZERO,
};

export const QueryPacketAcknowledgementsRequest = {
  encode(
    message: QueryPacketAcknowledgementsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).fork();
    for (const v of message.packetCommitmentSequences) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPacketAcknowledgementsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryPacketAcknowledgementsRequest,
    } as QueryPacketAcknowledgementsRequest;
    message.packetCommitmentSequences = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packetCommitmentSequences.push(reader.uint64() as Long);
            }
          } else {
            message.packetCommitmentSequences.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPacketAcknowledgementsRequest {
    const message = {
      ...baseQueryPacketAcknowledgementsRequest,
    } as QueryPacketAcknowledgementsRequest;
    message.portId =
      object.portId !== undefined && object.portId !== null
        ? String(object.portId)
        : "";
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    message.packetCommitmentSequences = (
      object.packetCommitmentSequences ?? []
    ).map((e: any) => Long.fromString(e));
    return message;
  },

  toJSON(message: QueryPacketAcknowledgementsRequest): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    if (message.packetCommitmentSequences) {
      obj.packetCommitmentSequences = message.packetCommitmentSequences.map(
        (e) => (e || Long.UZERO).toString()
      );
    } else {
      obj.packetCommitmentSequences = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPacketAcknowledgementsRequest>
  ): QueryPacketAcknowledgementsRequest {
    const message = {
      ...baseQueryPacketAcknowledgementsRequest,
    } as QueryPacketAcknowledgementsRequest;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    message.packetCommitmentSequences = (
      object.packetCommitmentSequences ?? []
    ).map((e) => Long.fromValue(e));
    return message;
  },
};

const baseQueryPacketAcknowledgementsResponse: object = {};

export const QueryPacketAcknowledgementsResponse = {
  encode(
    message: QueryPacketAcknowledgementsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.acknowledgements) {
      PacketState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPacketAcknowledgementsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryPacketAcknowledgementsResponse,
    } as QueryPacketAcknowledgementsResponse;
    message.acknowledgements = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.acknowledgements.push(
            PacketState.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPacketAcknowledgementsResponse {
    const message = {
      ...baseQueryPacketAcknowledgementsResponse,
    } as QueryPacketAcknowledgementsResponse;
    message.acknowledgements = (object.acknowledgements ?? []).map((e: any) =>
      PacketState.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    message.height =
      object.height !== undefined && object.height !== null
        ? Height.fromJSON(object.height)
        : undefined;
    return message;
  },

  toJSON(message: QueryPacketAcknowledgementsResponse): unknown {
    const obj: any = {};
    if (message.acknowledgements) {
      obj.acknowledgements = message.acknowledgements.map((e) =>
        e ? PacketState.toJSON(e) : undefined
      );
    } else {
      obj.acknowledgements = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    message.height !== undefined &&
      (obj.height = message.height ? Height.toJSON(message.height) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryPacketAcknowledgementsResponse>
  ): QueryPacketAcknowledgementsResponse {
    const message = {
      ...baseQueryPacketAcknowledgementsResponse,
    } as QueryPacketAcknowledgementsResponse;
    message.acknowledgements = (object.acknowledgements ?? []).map((e) =>
      PacketState.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    message.height =
      object.height !== undefined && object.height !== null
        ? Height.fromPartial(object.height)
        : undefined;
    return message;
  },
};

const baseQueryUnreceivedPacketsRequest: object = {
  portId: "",
  channelId: "",
  packetCommitmentSequences: Long.UZERO,
};

export const QueryUnreceivedPacketsRequest = {
  encode(
    message: QueryUnreceivedPacketsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    writer.uint32(26).fork();
    for (const v of message.packetCommitmentSequences) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUnreceivedPacketsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryUnreceivedPacketsRequest,
    } as QueryUnreceivedPacketsRequest;
    message.packetCommitmentSequences = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packetCommitmentSequences.push(reader.uint64() as Long);
            }
          } else {
            message.packetCommitmentSequences.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUnreceivedPacketsRequest {
    const message = {
      ...baseQueryUnreceivedPacketsRequest,
    } as QueryUnreceivedPacketsRequest;
    message.portId =
      object.portId !== undefined && object.portId !== null
        ? String(object.portId)
        : "";
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : "";
    message.packetCommitmentSequences = (
      object.packetCommitmentSequences ?? []
    ).map((e: any) => Long.fromString(e));
    return message;
  },

  toJSON(message: QueryUnreceivedPacketsRequest): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    if (message.packetCommitmentSequences) {
      obj.packetCommitmentSequences = message.packetCommitmentSequences.map(
        (e) => (e || Long.UZERO).toString()
      );
    } else {
      obj.packetCommitmentSequences = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryUnreceivedPacketsRequest>
  ): QueryUnreceivedPacketsRequest {
    const message = {
      ...baseQueryUnreceivedPacketsRequest,
    } as QueryUnreceivedPacketsRequest;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.packetCommitmentSequences = (
      object.packetCommitmentSequences ?? []
    ).map((e) => Long.fromValue(e));
    return message;
  },
};

const baseQueryUnreceivedPacketsResponse: object = { sequences: Long.UZERO };

export const QueryUnreceivedPacketsResponse = {
  encode(
    message: QueryUnreceivedPacketsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.sequences) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUnreceivedPacketsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryUnreceivedPacketsResponse,
    } as QueryUnreceivedPacketsResponse;
    message.sequences = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.sequences.push(reader.uint64() as Long);
            }
          } else {
            message.sequences.push(reader.uint64() as Long);
          }
          break;
        case 2:
          message.height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUnreceivedPacketsResponse {
    const message = {
      ...baseQueryUnreceivedPacketsResponse,
    } as QueryUnreceivedPacketsResponse;
    message.sequences = (object.sequences ?? []).map((e: any) =>
      Long.fromString(e)
    );
    message.height =
      object.height !== undefined && object.height !== null
        ? Height.fromJSON(object.height)
        : undefined;
    return message;
  },

  toJSON(message: QueryUnreceivedPacketsResponse): unknown {
    const obj: any = {};
    if (message.sequences) {
      obj.sequences = message.sequences.map((e) =>
        (e || Long.UZERO).toString()
      );
    } else {
      obj.sequences = [];
    }
    message.height !== undefined &&
      (obj.height = message.height ? Height.toJSON(message.height) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryUnreceivedPacketsResponse>
  ): QueryUnreceivedPacketsResponse {
    const message = {
      ...baseQueryUnreceivedPacketsResponse,
    } as QueryUnreceivedPacketsResponse;
    message.sequences = (object.sequences ?? []).map((e) => Long.fromValue(e));
    message.height =
      object.height !== undefined && object.height !== null
        ? Height.fromPartial(object.height)
        : undefined;
    return message;
  },
};

const baseQueryUnreceivedAcksRequest: object = {
  portId: "",
  channelId: "",
  packetAckSequences: Long.UZERO,
};

export const QueryUnreceivedAcksRequest = {
  encode(
    message: QueryUnreceivedAcksRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    writer.uint32(26).fork();
    for (const v of message.packetAckSequences) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUnreceivedAcksRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryUnreceivedAcksRequest,
    } as QueryUnreceivedAcksRequest;
    message.packetAckSequences = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packetAckSequences.push(reader.uint64() as Long);
            }
          } else {
            message.packetAckSequences.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUnreceivedAcksRequest {
    const message = {
      ...baseQueryUnreceivedAcksRequest,
    } as QueryUnreceivedAcksRequest;
    message.portId =
      object.portId !== undefined && object.portId !== null
        ? String(object.portId)
        : "";
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : "";
    message.packetAckSequences = (object.packetAckSequences ?? []).map(
      (e: any) => Long.fromString(e)
    );
    return message;
  },

  toJSON(message: QueryUnreceivedAcksRequest): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    if (message.packetAckSequences) {
      obj.packetAckSequences = message.packetAckSequences.map((e) =>
        (e || Long.UZERO).toString()
      );
    } else {
      obj.packetAckSequences = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryUnreceivedAcksRequest>
  ): QueryUnreceivedAcksRequest {
    const message = {
      ...baseQueryUnreceivedAcksRequest,
    } as QueryUnreceivedAcksRequest;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.packetAckSequences = (object.packetAckSequences ?? []).map((e) =>
      Long.fromValue(e)
    );
    return message;
  },
};

const baseQueryUnreceivedAcksResponse: object = { sequences: Long.UZERO };

export const QueryUnreceivedAcksResponse = {
  encode(
    message: QueryUnreceivedAcksResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.sequences) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUnreceivedAcksResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryUnreceivedAcksResponse,
    } as QueryUnreceivedAcksResponse;
    message.sequences = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.sequences.push(reader.uint64() as Long);
            }
          } else {
            message.sequences.push(reader.uint64() as Long);
          }
          break;
        case 2:
          message.height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUnreceivedAcksResponse {
    const message = {
      ...baseQueryUnreceivedAcksResponse,
    } as QueryUnreceivedAcksResponse;
    message.sequences = (object.sequences ?? []).map((e: any) =>
      Long.fromString(e)
    );
    message.height =
      object.height !== undefined && object.height !== null
        ? Height.fromJSON(object.height)
        : undefined;
    return message;
  },

  toJSON(message: QueryUnreceivedAcksResponse): unknown {
    const obj: any = {};
    if (message.sequences) {
      obj.sequences = message.sequences.map((e) =>
        (e || Long.UZERO).toString()
      );
    } else {
      obj.sequences = [];
    }
    message.height !== undefined &&
      (obj.height = message.height ? Height.toJSON(message.height) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryUnreceivedAcksResponse>
  ): QueryUnreceivedAcksResponse {
    const message = {
      ...baseQueryUnreceivedAcksResponse,
    } as QueryUnreceivedAcksResponse;
    message.sequences = (object.sequences ?? []).map((e) => Long.fromValue(e));
    message.height =
      object.height !== undefined && object.height !== null
        ? Height.fromPartial(object.height)
        : undefined;
    return message;
  },
};

const baseQueryNextSequenceReceiveRequest: object = {
  portId: "",
  channelId: "",
};

export const QueryNextSequenceReceiveRequest = {
  encode(
    message: QueryNextSequenceReceiveRequest,
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
  ): QueryNextSequenceReceiveRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryNextSequenceReceiveRequest,
    } as QueryNextSequenceReceiveRequest;
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

  fromJSON(object: any): QueryNextSequenceReceiveRequest {
    const message = {
      ...baseQueryNextSequenceReceiveRequest,
    } as QueryNextSequenceReceiveRequest;
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

  toJSON(message: QueryNextSequenceReceiveRequest): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryNextSequenceReceiveRequest>
  ): QueryNextSequenceReceiveRequest {
    const message = {
      ...baseQueryNextSequenceReceiveRequest,
    } as QueryNextSequenceReceiveRequest;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
};

const baseQueryNextSequenceReceiveResponse: object = {
  nextSequenceReceive: Long.UZERO,
};

export const QueryNextSequenceReceiveResponse = {
  encode(
    message: QueryNextSequenceReceiveResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.nextSequenceReceive.isZero()) {
      writer.uint32(8).uint64(message.nextSequenceReceive);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryNextSequenceReceiveResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryNextSequenceReceiveResponse,
    } as QueryNextSequenceReceiveResponse;
    message.proof = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextSequenceReceive = reader.uint64() as Long;
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryNextSequenceReceiveResponse {
    const message = {
      ...baseQueryNextSequenceReceiveResponse,
    } as QueryNextSequenceReceiveResponse;
    message.nextSequenceReceive =
      object.nextSequenceReceive !== undefined &&
      object.nextSequenceReceive !== null
        ? Long.fromString(object.nextSequenceReceive)
        : Long.UZERO;
    message.proof =
      object.proof !== undefined && object.proof !== null
        ? bytesFromBase64(object.proof)
        : new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromJSON(object.proofHeight)
        : undefined;
    return message;
  },

  toJSON(message: QueryNextSequenceReceiveResponse): unknown {
    const obj: any = {};
    message.nextSequenceReceive !== undefined &&
      (obj.nextSequenceReceive = (
        message.nextSequenceReceive || Long.UZERO
      ).toString());
    message.proof !== undefined &&
      (obj.proof = base64FromBytes(
        message.proof !== undefined ? message.proof : new Uint8Array()
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight
        ? Height.toJSON(message.proofHeight)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryNextSequenceReceiveResponse>
  ): QueryNextSequenceReceiveResponse {
    const message = {
      ...baseQueryNextSequenceReceiveResponse,
    } as QueryNextSequenceReceiveResponse;
    message.nextSequenceReceive =
      object.nextSequenceReceive !== undefined &&
      object.nextSequenceReceive !== null
        ? Long.fromValue(object.nextSequenceReceive)
        : Long.UZERO;
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    return message;
  },
};

const baseQueryNextSequenceSendRequest: object = { portId: "", channelId: "" };

export const QueryNextSequenceSendRequest = {
  encode(
    message: QueryNextSequenceSendRequest,
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
  ): QueryNextSequenceSendRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryNextSequenceSendRequest,
    } as QueryNextSequenceSendRequest;
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

  fromJSON(object: any): QueryNextSequenceSendRequest {
    const message = {
      ...baseQueryNextSequenceSendRequest,
    } as QueryNextSequenceSendRequest;
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

  toJSON(message: QueryNextSequenceSendRequest): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryNextSequenceSendRequest>
  ): QueryNextSequenceSendRequest {
    const message = {
      ...baseQueryNextSequenceSendRequest,
    } as QueryNextSequenceSendRequest;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
};

const baseQueryNextSequenceSendResponse: object = {
  nextSequenceSend: Long.UZERO,
};

export const QueryNextSequenceSendResponse = {
  encode(
    message: QueryNextSequenceSendResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.nextSequenceSend.isZero()) {
      writer.uint32(8).uint64(message.nextSequenceSend);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryNextSequenceSendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryNextSequenceSendResponse,
    } as QueryNextSequenceSendResponse;
    message.proof = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextSequenceSend = reader.uint64() as Long;
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryNextSequenceSendResponse {
    const message = {
      ...baseQueryNextSequenceSendResponse,
    } as QueryNextSequenceSendResponse;
    message.nextSequenceSend =
      object.nextSequenceSend !== undefined && object.nextSequenceSend !== null
        ? Long.fromString(object.nextSequenceSend)
        : Long.UZERO;
    message.proof =
      object.proof !== undefined && object.proof !== null
        ? bytesFromBase64(object.proof)
        : new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromJSON(object.proofHeight)
        : undefined;
    return message;
  },

  toJSON(message: QueryNextSequenceSendResponse): unknown {
    const obj: any = {};
    message.nextSequenceSend !== undefined &&
      (obj.nextSequenceSend = (
        message.nextSequenceSend || Long.UZERO
      ).toString());
    message.proof !== undefined &&
      (obj.proof = base64FromBytes(
        message.proof !== undefined ? message.proof : new Uint8Array()
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight
        ? Height.toJSON(message.proofHeight)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryNextSequenceSendResponse>
  ): QueryNextSequenceSendResponse {
    const message = {
      ...baseQueryNextSequenceSendResponse,
    } as QueryNextSequenceSendResponse;
    message.nextSequenceSend =
      object.nextSequenceSend !== undefined && object.nextSequenceSend !== null
        ? Long.fromValue(object.nextSequenceSend)
        : Long.UZERO;
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    return message;
  },
};

const baseQueryUpgradeErrorRequest: object = { portId: "", channelId: "" };

export const QueryUpgradeErrorRequest = {
  encode(
    message: QueryUpgradeErrorRequest,
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
  ): QueryUpgradeErrorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryUpgradeErrorRequest,
    } as QueryUpgradeErrorRequest;
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

  fromJSON(object: any): QueryUpgradeErrorRequest {
    const message = {
      ...baseQueryUpgradeErrorRequest,
    } as QueryUpgradeErrorRequest;
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

  toJSON(message: QueryUpgradeErrorRequest): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryUpgradeErrorRequest>
  ): QueryUpgradeErrorRequest {
    const message = {
      ...baseQueryUpgradeErrorRequest,
    } as QueryUpgradeErrorRequest;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
};

const baseQueryUpgradeErrorResponse: object = {};

export const QueryUpgradeErrorResponse = {
  encode(
    message: QueryUpgradeErrorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.errorReceipt !== undefined) {
      ErrorReceipt.encode(
        message.errorReceipt,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUpgradeErrorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryUpgradeErrorResponse,
    } as QueryUpgradeErrorResponse;
    message.proof = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.errorReceipt = ErrorReceipt.decode(reader, reader.uint32());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUpgradeErrorResponse {
    const message = {
      ...baseQueryUpgradeErrorResponse,
    } as QueryUpgradeErrorResponse;
    message.errorReceipt =
      object.errorReceipt !== undefined && object.errorReceipt !== null
        ? ErrorReceipt.fromJSON(object.errorReceipt)
        : undefined;
    message.proof =
      object.proof !== undefined && object.proof !== null
        ? bytesFromBase64(object.proof)
        : new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromJSON(object.proofHeight)
        : undefined;
    return message;
  },

  toJSON(message: QueryUpgradeErrorResponse): unknown {
    const obj: any = {};
    message.errorReceipt !== undefined &&
      (obj.errorReceipt = message.errorReceipt
        ? ErrorReceipt.toJSON(message.errorReceipt)
        : undefined);
    message.proof !== undefined &&
      (obj.proof = base64FromBytes(
        message.proof !== undefined ? message.proof : new Uint8Array()
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight
        ? Height.toJSON(message.proofHeight)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryUpgradeErrorResponse>
  ): QueryUpgradeErrorResponse {
    const message = {
      ...baseQueryUpgradeErrorResponse,
    } as QueryUpgradeErrorResponse;
    message.errorReceipt =
      object.errorReceipt !== undefined && object.errorReceipt !== null
        ? ErrorReceipt.fromPartial(object.errorReceipt)
        : undefined;
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    return message;
  },
};

const baseQueryUpgradeRequest: object = { portId: "", channelId: "" };

export const QueryUpgradeRequest = {
  encode(
    message: QueryUpgradeRequest,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryUpgradeRequest } as QueryUpgradeRequest;
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

  fromJSON(object: any): QueryUpgradeRequest {
    const message = { ...baseQueryUpgradeRequest } as QueryUpgradeRequest;
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

  toJSON(message: QueryUpgradeRequest): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryUpgradeRequest>): QueryUpgradeRequest {
    const message = { ...baseQueryUpgradeRequest } as QueryUpgradeRequest;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
};

const baseQueryUpgradeResponse: object = {};

export const QueryUpgradeResponse = {
  encode(
    message: QueryUpgradeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.upgrade !== undefined) {
      Upgrade.encode(message.upgrade, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUpgradeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryUpgradeResponse } as QueryUpgradeResponse;
    message.proof = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upgrade = Upgrade.decode(reader, reader.uint32());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUpgradeResponse {
    const message = { ...baseQueryUpgradeResponse } as QueryUpgradeResponse;
    message.upgrade =
      object.upgrade !== undefined && object.upgrade !== null
        ? Upgrade.fromJSON(object.upgrade)
        : undefined;
    message.proof =
      object.proof !== undefined && object.proof !== null
        ? bytesFromBase64(object.proof)
        : new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromJSON(object.proofHeight)
        : undefined;
    return message;
  },

  toJSON(message: QueryUpgradeResponse): unknown {
    const obj: any = {};
    message.upgrade !== undefined &&
      (obj.upgrade = message.upgrade
        ? Upgrade.toJSON(message.upgrade)
        : undefined);
    message.proof !== undefined &&
      (obj.proof = base64FromBytes(
        message.proof !== undefined ? message.proof : new Uint8Array()
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight
        ? Height.toJSON(message.proofHeight)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryUpgradeResponse>): QueryUpgradeResponse {
    const message = { ...baseQueryUpgradeResponse } as QueryUpgradeResponse;
    message.upgrade =
      object.upgrade !== undefined && object.upgrade !== null
        ? Upgrade.fromPartial(object.upgrade)
        : undefined;
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    return message;
  },
};

const baseQueryChannelParamsRequest: object = {};

export const QueryChannelParamsRequest = {
  encode(
    _: QueryChannelParamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryChannelParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryChannelParamsRequest,
    } as QueryChannelParamsRequest;
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

  fromJSON(_: any): QueryChannelParamsRequest {
    const message = {
      ...baseQueryChannelParamsRequest,
    } as QueryChannelParamsRequest;
    return message;
  },

  toJSON(_: QueryChannelParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryChannelParamsRequest>
  ): QueryChannelParamsRequest {
    const message = {
      ...baseQueryChannelParamsRequest,
    } as QueryChannelParamsRequest;
    return message;
  },
};

const baseQueryChannelParamsResponse: object = {};

export const QueryChannelParamsResponse = {
  encode(
    message: QueryChannelParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryChannelParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryChannelParamsResponse,
    } as QueryChannelParamsResponse;
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

  fromJSON(object: any): QueryChannelParamsResponse {
    const message = {
      ...baseQueryChannelParamsResponse,
    } as QueryChannelParamsResponse;
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromJSON(object.params)
        : undefined;
    return message;
  },

  toJSON(message: QueryChannelParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryChannelParamsResponse>
  ): QueryChannelParamsResponse {
    const message = {
      ...baseQueryChannelParamsResponse,
    } as QueryChannelParamsResponse;
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

/** Query provides defines the gRPC querier service */
export interface Query {
  /** Channel queries an IBC Channel. */
  Channel(request: QueryChannelRequest): Promise<QueryChannelResponse>;
  /** Channels queries all the IBC channels of a chain. */
  Channels(request: QueryChannelsRequest): Promise<QueryChannelsResponse>;
  /**
   * ConnectionChannels queries all the channels associated with a connection
   * end.
   */
  ConnectionChannels(
    request: QueryConnectionChannelsRequest
  ): Promise<QueryConnectionChannelsResponse>;
  /**
   * ChannelClientState queries for the client state for the channel associated
   * with the provided channel identifiers.
   */
  ChannelClientState(
    request: QueryChannelClientStateRequest
  ): Promise<QueryChannelClientStateResponse>;
  /**
   * ChannelConsensusState queries for the consensus state for the channel
   * associated with the provided channel identifiers.
   */
  ChannelConsensusState(
    request: QueryChannelConsensusStateRequest
  ): Promise<QueryChannelConsensusStateResponse>;
  /** PacketCommitment queries a stored packet commitment hash. */
  PacketCommitment(
    request: QueryPacketCommitmentRequest
  ): Promise<QueryPacketCommitmentResponse>;
  /**
   * PacketCommitments returns all the packet commitments hashes associated
   * with a channel.
   */
  PacketCommitments(
    request: QueryPacketCommitmentsRequest
  ): Promise<QueryPacketCommitmentsResponse>;
  /**
   * PacketReceipt queries if a given packet sequence has been received on the
   * queried chain
   */
  PacketReceipt(
    request: QueryPacketReceiptRequest
  ): Promise<QueryPacketReceiptResponse>;
  /** PacketAcknowledgement queries a stored packet acknowledgement hash. */
  PacketAcknowledgement(
    request: QueryPacketAcknowledgementRequest
  ): Promise<QueryPacketAcknowledgementResponse>;
  /**
   * PacketAcknowledgements returns all the packet acknowledgements associated
   * with a channel.
   */
  PacketAcknowledgements(
    request: QueryPacketAcknowledgementsRequest
  ): Promise<QueryPacketAcknowledgementsResponse>;
  /**
   * UnreceivedPackets returns all the unreceived IBC packets associated with a
   * channel and sequences.
   */
  UnreceivedPackets(
    request: QueryUnreceivedPacketsRequest
  ): Promise<QueryUnreceivedPacketsResponse>;
  /**
   * UnreceivedAcks returns all the unreceived IBC acknowledgements associated
   * with a channel and sequences.
   */
  UnreceivedAcks(
    request: QueryUnreceivedAcksRequest
  ): Promise<QueryUnreceivedAcksResponse>;
  /** NextSequenceReceive returns the next receive sequence for a given channel. */
  NextSequenceReceive(
    request: QueryNextSequenceReceiveRequest
  ): Promise<QueryNextSequenceReceiveResponse>;
  /** NextSequenceSend returns the next send sequence for a given channel. */
  NextSequenceSend(
    request: QueryNextSequenceSendRequest
  ): Promise<QueryNextSequenceSendResponse>;
  /** UpgradeError returns the error receipt if the upgrade handshake failed. */
  UpgradeError(
    request: QueryUpgradeErrorRequest
  ): Promise<QueryUpgradeErrorResponse>;
  /** Upgrade returns the upgrade for a given port and channel id. */
  Upgrade(request: QueryUpgradeRequest): Promise<QueryUpgradeResponse>;
  /** ChannelParams queries all parameters of the ibc channel submodule. */
  ChannelParams(
    request: QueryChannelParamsRequest
  ): Promise<QueryChannelParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Channel = this.Channel.bind(this);
    this.Channels = this.Channels.bind(this);
    this.ConnectionChannels = this.ConnectionChannels.bind(this);
    this.ChannelClientState = this.ChannelClientState.bind(this);
    this.ChannelConsensusState = this.ChannelConsensusState.bind(this);
    this.PacketCommitment = this.PacketCommitment.bind(this);
    this.PacketCommitments = this.PacketCommitments.bind(this);
    this.PacketReceipt = this.PacketReceipt.bind(this);
    this.PacketAcknowledgement = this.PacketAcknowledgement.bind(this);
    this.PacketAcknowledgements = this.PacketAcknowledgements.bind(this);
    this.UnreceivedPackets = this.UnreceivedPackets.bind(this);
    this.UnreceivedAcks = this.UnreceivedAcks.bind(this);
    this.NextSequenceReceive = this.NextSequenceReceive.bind(this);
    this.NextSequenceSend = this.NextSequenceSend.bind(this);
    this.UpgradeError = this.UpgradeError.bind(this);
    this.Upgrade = this.Upgrade.bind(this);
    this.ChannelParams = this.ChannelParams.bind(this);
  }
  Channel(request: QueryChannelRequest): Promise<QueryChannelResponse> {
    const data = QueryChannelRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.channel.v1.Query",
      "Channel",
      data
    );
    return promise.then((data) =>
      QueryChannelResponse.decode(new _m0.Reader(data))
    );
  }

  Channels(request: QueryChannelsRequest): Promise<QueryChannelsResponse> {
    const data = QueryChannelsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.channel.v1.Query",
      "Channels",
      data
    );
    return promise.then((data) =>
      QueryChannelsResponse.decode(new _m0.Reader(data))
    );
  }

  ConnectionChannels(
    request: QueryConnectionChannelsRequest
  ): Promise<QueryConnectionChannelsResponse> {
    const data = QueryConnectionChannelsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.channel.v1.Query",
      "ConnectionChannels",
      data
    );
    return promise.then((data) =>
      QueryConnectionChannelsResponse.decode(new _m0.Reader(data))
    );
  }

  ChannelClientState(
    request: QueryChannelClientStateRequest
  ): Promise<QueryChannelClientStateResponse> {
    const data = QueryChannelClientStateRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.channel.v1.Query",
      "ChannelClientState",
      data
    );
    return promise.then((data) =>
      QueryChannelClientStateResponse.decode(new _m0.Reader(data))
    );
  }

  ChannelConsensusState(
    request: QueryChannelConsensusStateRequest
  ): Promise<QueryChannelConsensusStateResponse> {
    const data = QueryChannelConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.channel.v1.Query",
      "ChannelConsensusState",
      data
    );
    return promise.then((data) =>
      QueryChannelConsensusStateResponse.decode(new _m0.Reader(data))
    );
  }

  PacketCommitment(
    request: QueryPacketCommitmentRequest
  ): Promise<QueryPacketCommitmentResponse> {
    const data = QueryPacketCommitmentRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.channel.v1.Query",
      "PacketCommitment",
      data
    );
    return promise.then((data) =>
      QueryPacketCommitmentResponse.decode(new _m0.Reader(data))
    );
  }

  PacketCommitments(
    request: QueryPacketCommitmentsRequest
  ): Promise<QueryPacketCommitmentsResponse> {
    const data = QueryPacketCommitmentsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.channel.v1.Query",
      "PacketCommitments",
      data
    );
    return promise.then((data) =>
      QueryPacketCommitmentsResponse.decode(new _m0.Reader(data))
    );
  }

  PacketReceipt(
    request: QueryPacketReceiptRequest
  ): Promise<QueryPacketReceiptResponse> {
    const data = QueryPacketReceiptRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.channel.v1.Query",
      "PacketReceipt",
      data
    );
    return promise.then((data) =>
      QueryPacketReceiptResponse.decode(new _m0.Reader(data))
    );
  }

  PacketAcknowledgement(
    request: QueryPacketAcknowledgementRequest
  ): Promise<QueryPacketAcknowledgementResponse> {
    const data = QueryPacketAcknowledgementRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.channel.v1.Query",
      "PacketAcknowledgement",
      data
    );
    return promise.then((data) =>
      QueryPacketAcknowledgementResponse.decode(new _m0.Reader(data))
    );
  }

  PacketAcknowledgements(
    request: QueryPacketAcknowledgementsRequest
  ): Promise<QueryPacketAcknowledgementsResponse> {
    const data = QueryPacketAcknowledgementsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.channel.v1.Query",
      "PacketAcknowledgements",
      data
    );
    return promise.then((data) =>
      QueryPacketAcknowledgementsResponse.decode(new _m0.Reader(data))
    );
  }

  UnreceivedPackets(
    request: QueryUnreceivedPacketsRequest
  ): Promise<QueryUnreceivedPacketsResponse> {
    const data = QueryUnreceivedPacketsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.channel.v1.Query",
      "UnreceivedPackets",
      data
    );
    return promise.then((data) =>
      QueryUnreceivedPacketsResponse.decode(new _m0.Reader(data))
    );
  }

  UnreceivedAcks(
    request: QueryUnreceivedAcksRequest
  ): Promise<QueryUnreceivedAcksResponse> {
    const data = QueryUnreceivedAcksRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.channel.v1.Query",
      "UnreceivedAcks",
      data
    );
    return promise.then((data) =>
      QueryUnreceivedAcksResponse.decode(new _m0.Reader(data))
    );
  }

  NextSequenceReceive(
    request: QueryNextSequenceReceiveRequest
  ): Promise<QueryNextSequenceReceiveResponse> {
    const data = QueryNextSequenceReceiveRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.channel.v1.Query",
      "NextSequenceReceive",
      data
    );
    return promise.then((data) =>
      QueryNextSequenceReceiveResponse.decode(new _m0.Reader(data))
    );
  }

  NextSequenceSend(
    request: QueryNextSequenceSendRequest
  ): Promise<QueryNextSequenceSendResponse> {
    const data = QueryNextSequenceSendRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.channel.v1.Query",
      "NextSequenceSend",
      data
    );
    return promise.then((data) =>
      QueryNextSequenceSendResponse.decode(new _m0.Reader(data))
    );
  }

  UpgradeError(
    request: QueryUpgradeErrorRequest
  ): Promise<QueryUpgradeErrorResponse> {
    const data = QueryUpgradeErrorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.channel.v1.Query",
      "UpgradeError",
      data
    );
    return promise.then((data) =>
      QueryUpgradeErrorResponse.decode(new _m0.Reader(data))
    );
  }

  Upgrade(request: QueryUpgradeRequest): Promise<QueryUpgradeResponse> {
    const data = QueryUpgradeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.channel.v1.Query",
      "Upgrade",
      data
    );
    return promise.then((data) =>
      QueryUpgradeResponse.decode(new _m0.Reader(data))
    );
  }

  ChannelParams(
    request: QueryChannelParamsRequest
  ): Promise<QueryChannelParamsResponse> {
    const data = QueryChannelParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.channel.v1.Query",
      "ChannelParams",
      data
    );
    return promise.then((data) =>
      QueryChannelParamsResponse.decode(new _m0.Reader(data))
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

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
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
