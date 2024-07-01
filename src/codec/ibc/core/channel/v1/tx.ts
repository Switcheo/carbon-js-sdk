/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  Channel,
  Packet,
  State,
  Params,
  stateFromJSON,
  stateToJSON,
} from "./channel";
import { Height } from "../../client/v1/client";
import { UpgradeFields, Upgrade, ErrorReceipt } from "./upgrade";

export const protobufPackage = "ibc.core.channel.v1";

/** ResponseResultType defines the possible outcomes of the execution of a message */
export enum ResponseResultType {
  /** RESPONSE_RESULT_TYPE_UNSPECIFIED - Default zero value enumeration */
  RESPONSE_RESULT_TYPE_UNSPECIFIED = 0,
  /** RESPONSE_RESULT_TYPE_NOOP - The message did not call the IBC application callbacks (because, for example, the packet had already been relayed) */
  RESPONSE_RESULT_TYPE_NOOP = 1,
  /** RESPONSE_RESULT_TYPE_SUCCESS - The message was executed successfully */
  RESPONSE_RESULT_TYPE_SUCCESS = 2,
  /** RESPONSE_RESULT_TYPE_FAILURE - The message was executed unsuccessfully */
  RESPONSE_RESULT_TYPE_FAILURE = 3,
  UNRECOGNIZED = -1,
}

export function responseResultTypeFromJSON(object: any): ResponseResultType {
  switch (object) {
    case 0:
    case "RESPONSE_RESULT_TYPE_UNSPECIFIED":
      return ResponseResultType.RESPONSE_RESULT_TYPE_UNSPECIFIED;
    case 1:
    case "RESPONSE_RESULT_TYPE_NOOP":
      return ResponseResultType.RESPONSE_RESULT_TYPE_NOOP;
    case 2:
    case "RESPONSE_RESULT_TYPE_SUCCESS":
      return ResponseResultType.RESPONSE_RESULT_TYPE_SUCCESS;
    case 3:
    case "RESPONSE_RESULT_TYPE_FAILURE":
      return ResponseResultType.RESPONSE_RESULT_TYPE_FAILURE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseResultType.UNRECOGNIZED;
  }
}

export function responseResultTypeToJSON(object: ResponseResultType): string {
  switch (object) {
    case ResponseResultType.RESPONSE_RESULT_TYPE_UNSPECIFIED:
      return "RESPONSE_RESULT_TYPE_UNSPECIFIED";
    case ResponseResultType.RESPONSE_RESULT_TYPE_NOOP:
      return "RESPONSE_RESULT_TYPE_NOOP";
    case ResponseResultType.RESPONSE_RESULT_TYPE_SUCCESS:
      return "RESPONSE_RESULT_TYPE_SUCCESS";
    case ResponseResultType.RESPONSE_RESULT_TYPE_FAILURE:
      return "RESPONSE_RESULT_TYPE_FAILURE";
    default:
      return "UNKNOWN";
  }
}

/**
 * MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
 * is called by a relayer on Chain A.
 */
export interface MsgChannelOpenInit {
  portId: string;
  channel?: Channel;
  signer: string;
}

/** MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type. */
export interface MsgChannelOpenInitResponse {
  channelId: string;
  version: string;
}

/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B. The version field within the Channel field has been deprecated. Its
 * value will be ignored by core IBC.
 */
export interface MsgChannelOpenTry {
  portId: string;
  /**
   * Deprecated: this field is unused. Crossing hello's are no longer supported in core IBC.
   *
   * @deprecated
   */
  previousChannelId: string;
  /** NOTE: the version field within the channel has been deprecated. Its value will be ignored by core IBC. */
  channel?: Channel;
  counterpartyVersion: string;
  proofInit: Uint8Array;
  proofHeight?: Height;
  signer: string;
}

/** MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type. */
export interface MsgChannelOpenTryResponse {
  version: string;
  channelId: string;
}

/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 * WARNING: a channel upgrade MUST NOT initialize an upgrade for this channel
 * in the same block as executing this message otherwise the counterparty will
 * be incapable of opening.
 */
export interface MsgChannelOpenAck {
  portId: string;
  channelId: string;
  counterpartyChannelId: string;
  counterpartyVersion: string;
  proofTry: Uint8Array;
  proofHeight?: Height;
  signer: string;
}

/** MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type. */
export interface MsgChannelOpenAckResponse {}

/**
 * MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of channel state to OPEN on Chain A.
 */
export interface MsgChannelOpenConfirm {
  portId: string;
  channelId: string;
  proofAck: Uint8Array;
  proofHeight?: Height;
  signer: string;
}

/**
 * MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
 * type.
 */
export interface MsgChannelOpenConfirmResponse {}

/**
 * MsgChannelCloseInit defines a msg sent by a Relayer to Chain A
 * to close a channel with Chain B.
 */
export interface MsgChannelCloseInit {
  portId: string;
  channelId: string;
  signer: string;
}

/** MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type. */
export interface MsgChannelCloseInitResponse {}

/**
 * MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B
 * to acknowledge the change of channel state to CLOSED on Chain A.
 */
export interface MsgChannelCloseConfirm {
  portId: string;
  channelId: string;
  proofInit: Uint8Array;
  proofHeight?: Height;
  signer: string;
  counterpartyUpgradeSequence: Long;
}

/**
 * MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
 * type.
 */
export interface MsgChannelCloseConfirmResponse {}

/** MsgRecvPacket receives incoming IBC packet */
export interface MsgRecvPacket {
  packet?: Packet;
  proofCommitment: Uint8Array;
  proofHeight?: Height;
  signer: string;
}

/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */
export interface MsgRecvPacketResponse {
  result: ResponseResultType;
}

/** MsgTimeout receives timed-out packet */
export interface MsgTimeout {
  packet?: Packet;
  proofUnreceived: Uint8Array;
  proofHeight?: Height;
  nextSequenceRecv: Long;
  signer: string;
}

/** MsgTimeoutResponse defines the Msg/Timeout response type. */
export interface MsgTimeoutResponse {
  result: ResponseResultType;
}

/** MsgTimeoutOnClose timed-out packet upon counterparty channel closure. */
export interface MsgTimeoutOnClose {
  packet?: Packet;
  proofUnreceived: Uint8Array;
  proofClose: Uint8Array;
  proofHeight?: Height;
  nextSequenceRecv: Long;
  signer: string;
  counterpartyUpgradeSequence: Long;
}

/** MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type. */
export interface MsgTimeoutOnCloseResponse {
  result: ResponseResultType;
}

/** MsgAcknowledgement receives incoming IBC acknowledgement */
export interface MsgAcknowledgement {
  packet?: Packet;
  acknowledgement: Uint8Array;
  proofAcked: Uint8Array;
  proofHeight?: Height;
  signer: string;
}

/** MsgAcknowledgementResponse defines the Msg/Acknowledgement response type. */
export interface MsgAcknowledgementResponse {
  result: ResponseResultType;
}

/**
 * MsgChannelUpgradeInit defines the request type for the ChannelUpgradeInit rpc
 * WARNING: Initializing a channel upgrade in the same block as opening the channel
 * may result in the counterparty being incapable of opening.
 */
export interface MsgChannelUpgradeInit {
  portId: string;
  channelId: string;
  fields?: UpgradeFields;
  signer: string;
}

/** MsgChannelUpgradeInitResponse defines the MsgChannelUpgradeInit response type */
export interface MsgChannelUpgradeInitResponse {
  upgrade?: Upgrade;
  upgradeSequence: Long;
}

/** MsgChannelUpgradeTry defines the request type for the ChannelUpgradeTry rpc */
export interface MsgChannelUpgradeTry {
  portId: string;
  channelId: string;
  proposedUpgradeConnectionHops: string[];
  counterpartyUpgradeFields?: UpgradeFields;
  counterpartyUpgradeSequence: Long;
  proofChannel: Uint8Array;
  proofUpgrade: Uint8Array;
  proofHeight?: Height;
  signer: string;
}

/** MsgChannelUpgradeTryResponse defines the MsgChannelUpgradeTry response type */
export interface MsgChannelUpgradeTryResponse {
  upgrade?: Upgrade;
  upgradeSequence: Long;
  result: ResponseResultType;
}

/** MsgChannelUpgradeAck defines the request type for the ChannelUpgradeAck rpc */
export interface MsgChannelUpgradeAck {
  portId: string;
  channelId: string;
  counterpartyUpgrade?: Upgrade;
  proofChannel: Uint8Array;
  proofUpgrade: Uint8Array;
  proofHeight?: Height;
  signer: string;
}

/** MsgChannelUpgradeAckResponse defines MsgChannelUpgradeAck response type */
export interface MsgChannelUpgradeAckResponse {
  result: ResponseResultType;
}

/** MsgChannelUpgradeConfirm defines the request type for the ChannelUpgradeConfirm rpc */
export interface MsgChannelUpgradeConfirm {
  portId: string;
  channelId: string;
  counterpartyChannelState: State;
  counterpartyUpgrade?: Upgrade;
  proofChannel: Uint8Array;
  proofUpgrade: Uint8Array;
  proofHeight?: Height;
  signer: string;
}

/** MsgChannelUpgradeConfirmResponse defines MsgChannelUpgradeConfirm response type */
export interface MsgChannelUpgradeConfirmResponse {
  result: ResponseResultType;
}

/** MsgChannelUpgradeOpen defines the request type for the ChannelUpgradeOpen rpc */
export interface MsgChannelUpgradeOpen {
  portId: string;
  channelId: string;
  counterpartyChannelState: State;
  counterpartyUpgradeSequence: Long;
  proofChannel: Uint8Array;
  proofHeight?: Height;
  signer: string;
}

/** MsgChannelUpgradeOpenResponse defines the MsgChannelUpgradeOpen response type */
export interface MsgChannelUpgradeOpenResponse {}

/** MsgChannelUpgradeTimeout defines the request type for the ChannelUpgradeTimeout rpc */
export interface MsgChannelUpgradeTimeout {
  portId: string;
  channelId: string;
  counterpartyChannel?: Channel;
  proofChannel: Uint8Array;
  proofHeight?: Height;
  signer: string;
}

/** MsgChannelUpgradeTimeoutRepsonse defines the MsgChannelUpgradeTimeout response type */
export interface MsgChannelUpgradeTimeoutResponse {}

/** MsgChannelUpgradeCancel defines the request type for the ChannelUpgradeCancel rpc */
export interface MsgChannelUpgradeCancel {
  portId: string;
  channelId: string;
  errorReceipt?: ErrorReceipt;
  proofErrorReceipt: Uint8Array;
  proofHeight?: Height;
  signer: string;
}

/** MsgChannelUpgradeCancelResponse defines the MsgChannelUpgradeCancel response type */
export interface MsgChannelUpgradeCancelResponse {}

/** MsgUpdateParams is the MsgUpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the channel parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params?: Params;
}

/** MsgUpdateParamsResponse defines the MsgUpdateParams response type. */
export interface MsgUpdateParamsResponse {}

/** MsgPruneAcknowledgements defines the request type for the PruneAcknowledgements rpc. */
export interface MsgPruneAcknowledgements {
  portId: string;
  channelId: string;
  limit: Long;
  signer: string;
}

/** MsgPruneAcknowledgementsResponse defines the response type for the PruneAcknowledgements rpc. */
export interface MsgPruneAcknowledgementsResponse {
  /** Number of sequences pruned (includes both packet acknowledgements and packet receipts where appropriate). */
  totalPrunedSequences: Long;
  /** Number of sequences left after pruning. */
  totalRemainingSequences: Long;
}

const baseMsgChannelOpenInit: object = { portId: "", signer: "" };

export const MsgChannelOpenInit = {
  encode(
    message: MsgChannelOpenInit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channel !== undefined) {
      Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenInit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgChannelOpenInit } as MsgChannelOpenInit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channel = Channel.decode(reader, reader.uint32());
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChannelOpenInit {
    const message = { ...baseMsgChannelOpenInit } as MsgChannelOpenInit;
    message.portId =
      object.portId !== undefined && object.portId !== null
        ? String(object.portId)
        : "";
    message.channel =
      object.channel !== undefined && object.channel !== null
        ? Channel.fromJSON(object.channel)
        : undefined;
    message.signer =
      object.signer !== undefined && object.signer !== null
        ? String(object.signer)
        : "";
    return message;
  },

  toJSON(message: MsgChannelOpenInit): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channel !== undefined &&
      (obj.channel = message.channel
        ? Channel.toJSON(message.channel)
        : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgChannelOpenInit>): MsgChannelOpenInit {
    const message = { ...baseMsgChannelOpenInit } as MsgChannelOpenInit;
    message.portId = object.portId ?? "";
    message.channel =
      object.channel !== undefined && object.channel !== null
        ? Channel.fromPartial(object.channel)
        : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

const baseMsgChannelOpenInitResponse: object = { channelId: "", version: "" };

export const MsgChannelOpenInitResponse = {
  encode(
    message: MsgChannelOpenInitResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgChannelOpenInitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgChannelOpenInitResponse,
    } as MsgChannelOpenInitResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChannelOpenInitResponse {
    const message = {
      ...baseMsgChannelOpenInitResponse,
    } as MsgChannelOpenInitResponse;
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : "";
    message.version =
      object.version !== undefined && object.version !== null
        ? String(object.version)
        : "";
    return message;
  },

  toJSON(message: MsgChannelOpenInitResponse): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.version !== undefined && (obj.version = message.version);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgChannelOpenInitResponse>
  ): MsgChannelOpenInitResponse {
    const message = {
      ...baseMsgChannelOpenInitResponse,
    } as MsgChannelOpenInitResponse;
    message.channelId = object.channelId ?? "";
    message.version = object.version ?? "";
    return message;
  },
};

const baseMsgChannelOpenTry: object = {
  portId: "",
  previousChannelId: "",
  counterpartyVersion: "",
  signer: "",
};

export const MsgChannelOpenTry = {
  encode(
    message: MsgChannelOpenTry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.previousChannelId !== "") {
      writer.uint32(18).string(message.previousChannelId);
    }
    if (message.channel !== undefined) {
      Channel.encode(message.channel, writer.uint32(26).fork()).ldelim();
    }
    if (message.counterpartyVersion !== "") {
      writer.uint32(34).string(message.counterpartyVersion);
    }
    if (message.proofInit.length !== 0) {
      writer.uint32(42).bytes(message.proofInit);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(58).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenTry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgChannelOpenTry } as MsgChannelOpenTry;
    message.proofInit = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.previousChannelId = reader.string();
          break;
        case 3:
          message.channel = Channel.decode(reader, reader.uint32());
          break;
        case 4:
          message.counterpartyVersion = reader.string();
          break;
        case 5:
          message.proofInit = reader.bytes();
          break;
        case 6:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChannelOpenTry {
    const message = { ...baseMsgChannelOpenTry } as MsgChannelOpenTry;
    message.portId =
      object.portId !== undefined && object.portId !== null
        ? String(object.portId)
        : "";
    message.previousChannelId =
      object.previousChannelId !== undefined &&
      object.previousChannelId !== null
        ? String(object.previousChannelId)
        : "";
    message.channel =
      object.channel !== undefined && object.channel !== null
        ? Channel.fromJSON(object.channel)
        : undefined;
    message.counterpartyVersion =
      object.counterpartyVersion !== undefined &&
      object.counterpartyVersion !== null
        ? String(object.counterpartyVersion)
        : "";
    message.proofInit =
      object.proofInit !== undefined && object.proofInit !== null
        ? bytesFromBase64(object.proofInit)
        : new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromJSON(object.proofHeight)
        : undefined;
    message.signer =
      object.signer !== undefined && object.signer !== null
        ? String(object.signer)
        : "";
    return message;
  },

  toJSON(message: MsgChannelOpenTry): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.previousChannelId !== undefined &&
      (obj.previousChannelId = message.previousChannelId);
    message.channel !== undefined &&
      (obj.channel = message.channel
        ? Channel.toJSON(message.channel)
        : undefined);
    message.counterpartyVersion !== undefined &&
      (obj.counterpartyVersion = message.counterpartyVersion);
    message.proofInit !== undefined &&
      (obj.proofInit = base64FromBytes(
        message.proofInit !== undefined ? message.proofInit : new Uint8Array()
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight
        ? Height.toJSON(message.proofHeight)
        : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgChannelOpenTry>): MsgChannelOpenTry {
    const message = { ...baseMsgChannelOpenTry } as MsgChannelOpenTry;
    message.portId = object.portId ?? "";
    message.previousChannelId = object.previousChannelId ?? "";
    message.channel =
      object.channel !== undefined && object.channel !== null
        ? Channel.fromPartial(object.channel)
        : undefined;
    message.counterpartyVersion = object.counterpartyVersion ?? "";
    message.proofInit = object.proofInit ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

const baseMsgChannelOpenTryResponse: object = { version: "", channelId: "" };

export const MsgChannelOpenTryResponse = {
  encode(
    message: MsgChannelOpenTryResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgChannelOpenTryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgChannelOpenTryResponse,
    } as MsgChannelOpenTryResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
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

  fromJSON(object: any): MsgChannelOpenTryResponse {
    const message = {
      ...baseMsgChannelOpenTryResponse,
    } as MsgChannelOpenTryResponse;
    message.version =
      object.version !== undefined && object.version !== null
        ? String(object.version)
        : "";
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : "";
    return message;
  },

  toJSON(message: MsgChannelOpenTryResponse): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgChannelOpenTryResponse>
  ): MsgChannelOpenTryResponse {
    const message = {
      ...baseMsgChannelOpenTryResponse,
    } as MsgChannelOpenTryResponse;
    message.version = object.version ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
};

const baseMsgChannelOpenAck: object = {
  portId: "",
  channelId: "",
  counterpartyChannelId: "",
  counterpartyVersion: "",
  signer: "",
};

export const MsgChannelOpenAck = {
  encode(
    message: MsgChannelOpenAck,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.counterpartyChannelId !== "") {
      writer.uint32(26).string(message.counterpartyChannelId);
    }
    if (message.counterpartyVersion !== "") {
      writer.uint32(34).string(message.counterpartyVersion);
    }
    if (message.proofTry.length !== 0) {
      writer.uint32(42).bytes(message.proofTry);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(58).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgChannelOpenAck } as MsgChannelOpenAck;
    message.proofTry = new Uint8Array();
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
          message.counterpartyChannelId = reader.string();
          break;
        case 4:
          message.counterpartyVersion = reader.string();
          break;
        case 5:
          message.proofTry = reader.bytes();
          break;
        case 6:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChannelOpenAck {
    const message = { ...baseMsgChannelOpenAck } as MsgChannelOpenAck;
    message.portId =
      object.portId !== undefined && object.portId !== null
        ? String(object.portId)
        : "";
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : "";
    message.counterpartyChannelId =
      object.counterpartyChannelId !== undefined &&
      object.counterpartyChannelId !== null
        ? String(object.counterpartyChannelId)
        : "";
    message.counterpartyVersion =
      object.counterpartyVersion !== undefined &&
      object.counterpartyVersion !== null
        ? String(object.counterpartyVersion)
        : "";
    message.proofTry =
      object.proofTry !== undefined && object.proofTry !== null
        ? bytesFromBase64(object.proofTry)
        : new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromJSON(object.proofHeight)
        : undefined;
    message.signer =
      object.signer !== undefined && object.signer !== null
        ? String(object.signer)
        : "";
    return message;
  },

  toJSON(message: MsgChannelOpenAck): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.counterpartyChannelId !== undefined &&
      (obj.counterpartyChannelId = message.counterpartyChannelId);
    message.counterpartyVersion !== undefined &&
      (obj.counterpartyVersion = message.counterpartyVersion);
    message.proofTry !== undefined &&
      (obj.proofTry = base64FromBytes(
        message.proofTry !== undefined ? message.proofTry : new Uint8Array()
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight
        ? Height.toJSON(message.proofHeight)
        : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgChannelOpenAck>): MsgChannelOpenAck {
    const message = { ...baseMsgChannelOpenAck } as MsgChannelOpenAck;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.counterpartyChannelId = object.counterpartyChannelId ?? "";
    message.counterpartyVersion = object.counterpartyVersion ?? "";
    message.proofTry = object.proofTry ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

const baseMsgChannelOpenAckResponse: object = {};

export const MsgChannelOpenAckResponse = {
  encode(
    _: MsgChannelOpenAckResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgChannelOpenAckResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgChannelOpenAckResponse,
    } as MsgChannelOpenAckResponse;
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

  fromJSON(_: any): MsgChannelOpenAckResponse {
    const message = {
      ...baseMsgChannelOpenAckResponse,
    } as MsgChannelOpenAckResponse;
    return message;
  },

  toJSON(_: MsgChannelOpenAckResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgChannelOpenAckResponse>
  ): MsgChannelOpenAckResponse {
    const message = {
      ...baseMsgChannelOpenAckResponse,
    } as MsgChannelOpenAckResponse;
    return message;
  },
};

const baseMsgChannelOpenConfirm: object = {
  portId: "",
  channelId: "",
  signer: "",
};

export const MsgChannelOpenConfirm = {
  encode(
    message: MsgChannelOpenConfirm,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.proofAck.length !== 0) {
      writer.uint32(26).bytes(message.proofAck);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgChannelOpenConfirm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgChannelOpenConfirm } as MsgChannelOpenConfirm;
    message.proofAck = new Uint8Array();
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
          message.proofAck = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChannelOpenConfirm {
    const message = { ...baseMsgChannelOpenConfirm } as MsgChannelOpenConfirm;
    message.portId =
      object.portId !== undefined && object.portId !== null
        ? String(object.portId)
        : "";
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : "";
    message.proofAck =
      object.proofAck !== undefined && object.proofAck !== null
        ? bytesFromBase64(object.proofAck)
        : new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromJSON(object.proofHeight)
        : undefined;
    message.signer =
      object.signer !== undefined && object.signer !== null
        ? String(object.signer)
        : "";
    return message;
  },

  toJSON(message: MsgChannelOpenConfirm): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.proofAck !== undefined &&
      (obj.proofAck = base64FromBytes(
        message.proofAck !== undefined ? message.proofAck : new Uint8Array()
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight
        ? Height.toJSON(message.proofHeight)
        : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgChannelOpenConfirm>
  ): MsgChannelOpenConfirm {
    const message = { ...baseMsgChannelOpenConfirm } as MsgChannelOpenConfirm;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.proofAck = object.proofAck ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

const baseMsgChannelOpenConfirmResponse: object = {};

export const MsgChannelOpenConfirmResponse = {
  encode(
    _: MsgChannelOpenConfirmResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgChannelOpenConfirmResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgChannelOpenConfirmResponse,
    } as MsgChannelOpenConfirmResponse;
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

  fromJSON(_: any): MsgChannelOpenConfirmResponse {
    const message = {
      ...baseMsgChannelOpenConfirmResponse,
    } as MsgChannelOpenConfirmResponse;
    return message;
  },

  toJSON(_: MsgChannelOpenConfirmResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgChannelOpenConfirmResponse>
  ): MsgChannelOpenConfirmResponse {
    const message = {
      ...baseMsgChannelOpenConfirmResponse,
    } as MsgChannelOpenConfirmResponse;
    return message;
  },
};

const baseMsgChannelCloseInit: object = {
  portId: "",
  channelId: "",
  signer: "",
};

export const MsgChannelCloseInit = {
  encode(
    message: MsgChannelCloseInit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseInit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgChannelCloseInit } as MsgChannelCloseInit;
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
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChannelCloseInit {
    const message = { ...baseMsgChannelCloseInit } as MsgChannelCloseInit;
    message.portId =
      object.portId !== undefined && object.portId !== null
        ? String(object.portId)
        : "";
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : "";
    message.signer =
      object.signer !== undefined && object.signer !== null
        ? String(object.signer)
        : "";
    return message;
  },

  toJSON(message: MsgChannelCloseInit): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgChannelCloseInit>): MsgChannelCloseInit {
    const message = { ...baseMsgChannelCloseInit } as MsgChannelCloseInit;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.signer = object.signer ?? "";
    return message;
  },
};

const baseMsgChannelCloseInitResponse: object = {};

export const MsgChannelCloseInitResponse = {
  encode(
    _: MsgChannelCloseInitResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgChannelCloseInitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgChannelCloseInitResponse,
    } as MsgChannelCloseInitResponse;
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

  fromJSON(_: any): MsgChannelCloseInitResponse {
    const message = {
      ...baseMsgChannelCloseInitResponse,
    } as MsgChannelCloseInitResponse;
    return message;
  },

  toJSON(_: MsgChannelCloseInitResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgChannelCloseInitResponse>
  ): MsgChannelCloseInitResponse {
    const message = {
      ...baseMsgChannelCloseInitResponse,
    } as MsgChannelCloseInitResponse;
    return message;
  },
};

const baseMsgChannelCloseConfirm: object = {
  portId: "",
  channelId: "",
  signer: "",
  counterpartyUpgradeSequence: Long.UZERO,
};

export const MsgChannelCloseConfirm = {
  encode(
    message: MsgChannelCloseConfirm,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.proofInit.length !== 0) {
      writer.uint32(26).bytes(message.proofInit);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    if (!message.counterpartyUpgradeSequence.isZero()) {
      writer.uint32(48).uint64(message.counterpartyUpgradeSequence);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgChannelCloseConfirm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgChannelCloseConfirm } as MsgChannelCloseConfirm;
    message.proofInit = new Uint8Array();
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
          message.proofInit = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.signer = reader.string();
          break;
        case 6:
          message.counterpartyUpgradeSequence = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChannelCloseConfirm {
    const message = { ...baseMsgChannelCloseConfirm } as MsgChannelCloseConfirm;
    message.portId =
      object.portId !== undefined && object.portId !== null
        ? String(object.portId)
        : "";
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : "";
    message.proofInit =
      object.proofInit !== undefined && object.proofInit !== null
        ? bytesFromBase64(object.proofInit)
        : new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromJSON(object.proofHeight)
        : undefined;
    message.signer =
      object.signer !== undefined && object.signer !== null
        ? String(object.signer)
        : "";
    message.counterpartyUpgradeSequence =
      object.counterpartyUpgradeSequence !== undefined &&
      object.counterpartyUpgradeSequence !== null
        ? Long.fromString(object.counterpartyUpgradeSequence)
        : Long.UZERO;
    return message;
  },

  toJSON(message: MsgChannelCloseConfirm): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.proofInit !== undefined &&
      (obj.proofInit = base64FromBytes(
        message.proofInit !== undefined ? message.proofInit : new Uint8Array()
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight
        ? Height.toJSON(message.proofHeight)
        : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    message.counterpartyUpgradeSequence !== undefined &&
      (obj.counterpartyUpgradeSequence = (
        message.counterpartyUpgradeSequence || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgChannelCloseConfirm>
  ): MsgChannelCloseConfirm {
    const message = { ...baseMsgChannelCloseConfirm } as MsgChannelCloseConfirm;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.proofInit = object.proofInit ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    message.signer = object.signer ?? "";
    message.counterpartyUpgradeSequence =
      object.counterpartyUpgradeSequence !== undefined &&
      object.counterpartyUpgradeSequence !== null
        ? Long.fromValue(object.counterpartyUpgradeSequence)
        : Long.UZERO;
    return message;
  },
};

const baseMsgChannelCloseConfirmResponse: object = {};

export const MsgChannelCloseConfirmResponse = {
  encode(
    _: MsgChannelCloseConfirmResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgChannelCloseConfirmResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgChannelCloseConfirmResponse,
    } as MsgChannelCloseConfirmResponse;
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

  fromJSON(_: any): MsgChannelCloseConfirmResponse {
    const message = {
      ...baseMsgChannelCloseConfirmResponse,
    } as MsgChannelCloseConfirmResponse;
    return message;
  },

  toJSON(_: MsgChannelCloseConfirmResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgChannelCloseConfirmResponse>
  ): MsgChannelCloseConfirmResponse {
    const message = {
      ...baseMsgChannelCloseConfirmResponse,
    } as MsgChannelCloseConfirmResponse;
    return message;
  },
};

const baseMsgRecvPacket: object = { signer: "" };

export const MsgRecvPacket = {
  encode(
    message: MsgRecvPacket,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofCommitment.length !== 0) {
      writer.uint32(18).bytes(message.proofCommitment);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecvPacket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRecvPacket } as MsgRecvPacket;
    message.proofCommitment = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofCommitment = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 4:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRecvPacket {
    const message = { ...baseMsgRecvPacket } as MsgRecvPacket;
    message.packet =
      object.packet !== undefined && object.packet !== null
        ? Packet.fromJSON(object.packet)
        : undefined;
    message.proofCommitment =
      object.proofCommitment !== undefined && object.proofCommitment !== null
        ? bytesFromBase64(object.proofCommitment)
        : new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromJSON(object.proofHeight)
        : undefined;
    message.signer =
      object.signer !== undefined && object.signer !== null
        ? String(object.signer)
        : "";
    return message;
  },

  toJSON(message: MsgRecvPacket): unknown {
    const obj: any = {};
    message.packet !== undefined &&
      (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
    message.proofCommitment !== undefined &&
      (obj.proofCommitment = base64FromBytes(
        message.proofCommitment !== undefined
          ? message.proofCommitment
          : new Uint8Array()
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight
        ? Height.toJSON(message.proofHeight)
        : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRecvPacket>): MsgRecvPacket {
    const message = { ...baseMsgRecvPacket } as MsgRecvPacket;
    message.packet =
      object.packet !== undefined && object.packet !== null
        ? Packet.fromPartial(object.packet)
        : undefined;
    message.proofCommitment = object.proofCommitment ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

const baseMsgRecvPacketResponse: object = { result: 0 };

export const MsgRecvPacketResponse = {
  encode(
    message: MsgRecvPacketResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRecvPacketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRecvPacketResponse } as MsgRecvPacketResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRecvPacketResponse {
    const message = { ...baseMsgRecvPacketResponse } as MsgRecvPacketResponse;
    message.result =
      object.result !== undefined && object.result !== null
        ? responseResultTypeFromJSON(object.result)
        : 0;
    return message;
  },

  toJSON(message: MsgRecvPacketResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = responseResultTypeToJSON(message.result));
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRecvPacketResponse>
  ): MsgRecvPacketResponse {
    const message = { ...baseMsgRecvPacketResponse } as MsgRecvPacketResponse;
    message.result = object.result ?? 0;
    return message;
  },
};

const baseMsgTimeout: object = { nextSequenceRecv: Long.UZERO, signer: "" };

export const MsgTimeout = {
  encode(
    message: MsgTimeout,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofUnreceived.length !== 0) {
      writer.uint32(18).bytes(message.proofUnreceived);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    if (!message.nextSequenceRecv.isZero()) {
      writer.uint32(32).uint64(message.nextSequenceRecv);
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeout {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgTimeout } as MsgTimeout;
    message.proofUnreceived = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofUnreceived = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 4:
          message.nextSequenceRecv = reader.uint64() as Long;
          break;
        case 5:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTimeout {
    const message = { ...baseMsgTimeout } as MsgTimeout;
    message.packet =
      object.packet !== undefined && object.packet !== null
        ? Packet.fromJSON(object.packet)
        : undefined;
    message.proofUnreceived =
      object.proofUnreceived !== undefined && object.proofUnreceived !== null
        ? bytesFromBase64(object.proofUnreceived)
        : new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromJSON(object.proofHeight)
        : undefined;
    message.nextSequenceRecv =
      object.nextSequenceRecv !== undefined && object.nextSequenceRecv !== null
        ? Long.fromString(object.nextSequenceRecv)
        : Long.UZERO;
    message.signer =
      object.signer !== undefined && object.signer !== null
        ? String(object.signer)
        : "";
    return message;
  },

  toJSON(message: MsgTimeout): unknown {
    const obj: any = {};
    message.packet !== undefined &&
      (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
    message.proofUnreceived !== undefined &&
      (obj.proofUnreceived = base64FromBytes(
        message.proofUnreceived !== undefined
          ? message.proofUnreceived
          : new Uint8Array()
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight
        ? Height.toJSON(message.proofHeight)
        : undefined);
    message.nextSequenceRecv !== undefined &&
      (obj.nextSequenceRecv = (
        message.nextSequenceRecv || Long.UZERO
      ).toString());
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgTimeout>): MsgTimeout {
    const message = { ...baseMsgTimeout } as MsgTimeout;
    message.packet =
      object.packet !== undefined && object.packet !== null
        ? Packet.fromPartial(object.packet)
        : undefined;
    message.proofUnreceived = object.proofUnreceived ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    message.nextSequenceRecv =
      object.nextSequenceRecv !== undefined && object.nextSequenceRecv !== null
        ? Long.fromValue(object.nextSequenceRecv)
        : Long.UZERO;
    message.signer = object.signer ?? "";
    return message;
  },
};

const baseMsgTimeoutResponse: object = { result: 0 };

export const MsgTimeoutResponse = {
  encode(
    message: MsgTimeoutResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeoutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgTimeoutResponse } as MsgTimeoutResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTimeoutResponse {
    const message = { ...baseMsgTimeoutResponse } as MsgTimeoutResponse;
    message.result =
      object.result !== undefined && object.result !== null
        ? responseResultTypeFromJSON(object.result)
        : 0;
    return message;
  },

  toJSON(message: MsgTimeoutResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = responseResultTypeToJSON(message.result));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgTimeoutResponse>): MsgTimeoutResponse {
    const message = { ...baseMsgTimeoutResponse } as MsgTimeoutResponse;
    message.result = object.result ?? 0;
    return message;
  },
};

const baseMsgTimeoutOnClose: object = {
  nextSequenceRecv: Long.UZERO,
  signer: "",
  counterpartyUpgradeSequence: Long.UZERO,
};

export const MsgTimeoutOnClose = {
  encode(
    message: MsgTimeoutOnClose,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofUnreceived.length !== 0) {
      writer.uint32(18).bytes(message.proofUnreceived);
    }
    if (message.proofClose.length !== 0) {
      writer.uint32(26).bytes(message.proofClose);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (!message.nextSequenceRecv.isZero()) {
      writer.uint32(40).uint64(message.nextSequenceRecv);
    }
    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }
    if (!message.counterpartyUpgradeSequence.isZero()) {
      writer.uint32(56).uint64(message.counterpartyUpgradeSequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeoutOnClose {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgTimeoutOnClose } as MsgTimeoutOnClose;
    message.proofUnreceived = new Uint8Array();
    message.proofClose = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofUnreceived = reader.bytes();
          break;
        case 3:
          message.proofClose = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.nextSequenceRecv = reader.uint64() as Long;
          break;
        case 6:
          message.signer = reader.string();
          break;
        case 7:
          message.counterpartyUpgradeSequence = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTimeoutOnClose {
    const message = { ...baseMsgTimeoutOnClose } as MsgTimeoutOnClose;
    message.packet =
      object.packet !== undefined && object.packet !== null
        ? Packet.fromJSON(object.packet)
        : undefined;
    message.proofUnreceived =
      object.proofUnreceived !== undefined && object.proofUnreceived !== null
        ? bytesFromBase64(object.proofUnreceived)
        : new Uint8Array();
    message.proofClose =
      object.proofClose !== undefined && object.proofClose !== null
        ? bytesFromBase64(object.proofClose)
        : new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromJSON(object.proofHeight)
        : undefined;
    message.nextSequenceRecv =
      object.nextSequenceRecv !== undefined && object.nextSequenceRecv !== null
        ? Long.fromString(object.nextSequenceRecv)
        : Long.UZERO;
    message.signer =
      object.signer !== undefined && object.signer !== null
        ? String(object.signer)
        : "";
    message.counterpartyUpgradeSequence =
      object.counterpartyUpgradeSequence !== undefined &&
      object.counterpartyUpgradeSequence !== null
        ? Long.fromString(object.counterpartyUpgradeSequence)
        : Long.UZERO;
    return message;
  },

  toJSON(message: MsgTimeoutOnClose): unknown {
    const obj: any = {};
    message.packet !== undefined &&
      (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
    message.proofUnreceived !== undefined &&
      (obj.proofUnreceived = base64FromBytes(
        message.proofUnreceived !== undefined
          ? message.proofUnreceived
          : new Uint8Array()
      ));
    message.proofClose !== undefined &&
      (obj.proofClose = base64FromBytes(
        message.proofClose !== undefined ? message.proofClose : new Uint8Array()
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight
        ? Height.toJSON(message.proofHeight)
        : undefined);
    message.nextSequenceRecv !== undefined &&
      (obj.nextSequenceRecv = (
        message.nextSequenceRecv || Long.UZERO
      ).toString());
    message.signer !== undefined && (obj.signer = message.signer);
    message.counterpartyUpgradeSequence !== undefined &&
      (obj.counterpartyUpgradeSequence = (
        message.counterpartyUpgradeSequence || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgTimeoutOnClose>): MsgTimeoutOnClose {
    const message = { ...baseMsgTimeoutOnClose } as MsgTimeoutOnClose;
    message.packet =
      object.packet !== undefined && object.packet !== null
        ? Packet.fromPartial(object.packet)
        : undefined;
    message.proofUnreceived = object.proofUnreceived ?? new Uint8Array();
    message.proofClose = object.proofClose ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    message.nextSequenceRecv =
      object.nextSequenceRecv !== undefined && object.nextSequenceRecv !== null
        ? Long.fromValue(object.nextSequenceRecv)
        : Long.UZERO;
    message.signer = object.signer ?? "";
    message.counterpartyUpgradeSequence =
      object.counterpartyUpgradeSequence !== undefined &&
      object.counterpartyUpgradeSequence !== null
        ? Long.fromValue(object.counterpartyUpgradeSequence)
        : Long.UZERO;
    return message;
  },
};

const baseMsgTimeoutOnCloseResponse: object = { result: 0 };

export const MsgTimeoutOnCloseResponse = {
  encode(
    message: MsgTimeoutOnCloseResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgTimeoutOnCloseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgTimeoutOnCloseResponse,
    } as MsgTimeoutOnCloseResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTimeoutOnCloseResponse {
    const message = {
      ...baseMsgTimeoutOnCloseResponse,
    } as MsgTimeoutOnCloseResponse;
    message.result =
      object.result !== undefined && object.result !== null
        ? responseResultTypeFromJSON(object.result)
        : 0;
    return message;
  },

  toJSON(message: MsgTimeoutOnCloseResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = responseResultTypeToJSON(message.result));
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgTimeoutOnCloseResponse>
  ): MsgTimeoutOnCloseResponse {
    const message = {
      ...baseMsgTimeoutOnCloseResponse,
    } as MsgTimeoutOnCloseResponse;
    message.result = object.result ?? 0;
    return message;
  },
};

const baseMsgAcknowledgement: object = { signer: "" };

export const MsgAcknowledgement = {
  encode(
    message: MsgAcknowledgement,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.acknowledgement.length !== 0) {
      writer.uint32(18).bytes(message.acknowledgement);
    }
    if (message.proofAcked.length !== 0) {
      writer.uint32(26).bytes(message.proofAcked);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcknowledgement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAcknowledgement } as MsgAcknowledgement;
    message.acknowledgement = new Uint8Array();
    message.proofAcked = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.acknowledgement = reader.bytes();
          break;
        case 3:
          message.proofAcked = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAcknowledgement {
    const message = { ...baseMsgAcknowledgement } as MsgAcknowledgement;
    message.packet =
      object.packet !== undefined && object.packet !== null
        ? Packet.fromJSON(object.packet)
        : undefined;
    message.acknowledgement =
      object.acknowledgement !== undefined && object.acknowledgement !== null
        ? bytesFromBase64(object.acknowledgement)
        : new Uint8Array();
    message.proofAcked =
      object.proofAcked !== undefined && object.proofAcked !== null
        ? bytesFromBase64(object.proofAcked)
        : new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromJSON(object.proofHeight)
        : undefined;
    message.signer =
      object.signer !== undefined && object.signer !== null
        ? String(object.signer)
        : "";
    return message;
  },

  toJSON(message: MsgAcknowledgement): unknown {
    const obj: any = {};
    message.packet !== undefined &&
      (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
    message.acknowledgement !== undefined &&
      (obj.acknowledgement = base64FromBytes(
        message.acknowledgement !== undefined
          ? message.acknowledgement
          : new Uint8Array()
      ));
    message.proofAcked !== undefined &&
      (obj.proofAcked = base64FromBytes(
        message.proofAcked !== undefined ? message.proofAcked : new Uint8Array()
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight
        ? Height.toJSON(message.proofHeight)
        : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAcknowledgement>): MsgAcknowledgement {
    const message = { ...baseMsgAcknowledgement } as MsgAcknowledgement;
    message.packet =
      object.packet !== undefined && object.packet !== null
        ? Packet.fromPartial(object.packet)
        : undefined;
    message.acknowledgement = object.acknowledgement ?? new Uint8Array();
    message.proofAcked = object.proofAcked ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

const baseMsgAcknowledgementResponse: object = { result: 0 };

export const MsgAcknowledgementResponse = {
  encode(
    message: MsgAcknowledgementResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAcknowledgementResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAcknowledgementResponse,
    } as MsgAcknowledgementResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAcknowledgementResponse {
    const message = {
      ...baseMsgAcknowledgementResponse,
    } as MsgAcknowledgementResponse;
    message.result =
      object.result !== undefined && object.result !== null
        ? responseResultTypeFromJSON(object.result)
        : 0;
    return message;
  },

  toJSON(message: MsgAcknowledgementResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = responseResultTypeToJSON(message.result));
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgAcknowledgementResponse>
  ): MsgAcknowledgementResponse {
    const message = {
      ...baseMsgAcknowledgementResponse,
    } as MsgAcknowledgementResponse;
    message.result = object.result ?? 0;
    return message;
  },
};

const baseMsgChannelUpgradeInit: object = {
  portId: "",
  channelId: "",
  signer: "",
};

export const MsgChannelUpgradeInit = {
  encode(
    message: MsgChannelUpgradeInit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.fields !== undefined) {
      UpgradeFields.encode(message.fields, writer.uint32(26).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgChannelUpgradeInit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgChannelUpgradeInit } as MsgChannelUpgradeInit;
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
          message.fields = UpgradeFields.decode(reader, reader.uint32());
          break;
        case 4:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChannelUpgradeInit {
    const message = { ...baseMsgChannelUpgradeInit } as MsgChannelUpgradeInit;
    message.portId =
      object.portId !== undefined && object.portId !== null
        ? String(object.portId)
        : "";
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : "";
    message.fields =
      object.fields !== undefined && object.fields !== null
        ? UpgradeFields.fromJSON(object.fields)
        : undefined;
    message.signer =
      object.signer !== undefined && object.signer !== null
        ? String(object.signer)
        : "";
    return message;
  },

  toJSON(message: MsgChannelUpgradeInit): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.fields !== undefined &&
      (obj.fields = message.fields
        ? UpgradeFields.toJSON(message.fields)
        : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgChannelUpgradeInit>
  ): MsgChannelUpgradeInit {
    const message = { ...baseMsgChannelUpgradeInit } as MsgChannelUpgradeInit;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.fields =
      object.fields !== undefined && object.fields !== null
        ? UpgradeFields.fromPartial(object.fields)
        : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

const baseMsgChannelUpgradeInitResponse: object = {
  upgradeSequence: Long.UZERO,
};

export const MsgChannelUpgradeInitResponse = {
  encode(
    message: MsgChannelUpgradeInitResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.upgrade !== undefined) {
      Upgrade.encode(message.upgrade, writer.uint32(10).fork()).ldelim();
    }
    if (!message.upgradeSequence.isZero()) {
      writer.uint32(16).uint64(message.upgradeSequence);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgChannelUpgradeInitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgChannelUpgradeInitResponse,
    } as MsgChannelUpgradeInitResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upgrade = Upgrade.decode(reader, reader.uint32());
          break;
        case 2:
          message.upgradeSequence = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChannelUpgradeInitResponse {
    const message = {
      ...baseMsgChannelUpgradeInitResponse,
    } as MsgChannelUpgradeInitResponse;
    message.upgrade =
      object.upgrade !== undefined && object.upgrade !== null
        ? Upgrade.fromJSON(object.upgrade)
        : undefined;
    message.upgradeSequence =
      object.upgradeSequence !== undefined && object.upgradeSequence !== null
        ? Long.fromString(object.upgradeSequence)
        : Long.UZERO;
    return message;
  },

  toJSON(message: MsgChannelUpgradeInitResponse): unknown {
    const obj: any = {};
    message.upgrade !== undefined &&
      (obj.upgrade = message.upgrade
        ? Upgrade.toJSON(message.upgrade)
        : undefined);
    message.upgradeSequence !== undefined &&
      (obj.upgradeSequence = (
        message.upgradeSequence || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgChannelUpgradeInitResponse>
  ): MsgChannelUpgradeInitResponse {
    const message = {
      ...baseMsgChannelUpgradeInitResponse,
    } as MsgChannelUpgradeInitResponse;
    message.upgrade =
      object.upgrade !== undefined && object.upgrade !== null
        ? Upgrade.fromPartial(object.upgrade)
        : undefined;
    message.upgradeSequence =
      object.upgradeSequence !== undefined && object.upgradeSequence !== null
        ? Long.fromValue(object.upgradeSequence)
        : Long.UZERO;
    return message;
  },
};

const baseMsgChannelUpgradeTry: object = {
  portId: "",
  channelId: "",
  proposedUpgradeConnectionHops: "",
  counterpartyUpgradeSequence: Long.UZERO,
  signer: "",
};

export const MsgChannelUpgradeTry = {
  encode(
    message: MsgChannelUpgradeTry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    for (const v of message.proposedUpgradeConnectionHops) {
      writer.uint32(26).string(v!);
    }
    if (message.counterpartyUpgradeFields !== undefined) {
      UpgradeFields.encode(
        message.counterpartyUpgradeFields,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (!message.counterpartyUpgradeSequence.isZero()) {
      writer.uint32(40).uint64(message.counterpartyUpgradeSequence);
    }
    if (message.proofChannel.length !== 0) {
      writer.uint32(50).bytes(message.proofChannel);
    }
    if (message.proofUpgrade.length !== 0) {
      writer.uint32(58).bytes(message.proofUpgrade);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(66).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(74).string(message.signer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgChannelUpgradeTry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgChannelUpgradeTry } as MsgChannelUpgradeTry;
    message.proposedUpgradeConnectionHops = [];
    message.proofChannel = new Uint8Array();
    message.proofUpgrade = new Uint8Array();
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
          message.proposedUpgradeConnectionHops.push(reader.string());
          break;
        case 4:
          message.counterpartyUpgradeFields = UpgradeFields.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.counterpartyUpgradeSequence = reader.uint64() as Long;
          break;
        case 6:
          message.proofChannel = reader.bytes();
          break;
        case 7:
          message.proofUpgrade = reader.bytes();
          break;
        case 8:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 9:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChannelUpgradeTry {
    const message = { ...baseMsgChannelUpgradeTry } as MsgChannelUpgradeTry;
    message.portId =
      object.portId !== undefined && object.portId !== null
        ? String(object.portId)
        : "";
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : "";
    message.proposedUpgradeConnectionHops = (
      object.proposedUpgradeConnectionHops ?? []
    ).map((e: any) => String(e));
    message.counterpartyUpgradeFields =
      object.counterpartyUpgradeFields !== undefined &&
      object.counterpartyUpgradeFields !== null
        ? UpgradeFields.fromJSON(object.counterpartyUpgradeFields)
        : undefined;
    message.counterpartyUpgradeSequence =
      object.counterpartyUpgradeSequence !== undefined &&
      object.counterpartyUpgradeSequence !== null
        ? Long.fromString(object.counterpartyUpgradeSequence)
        : Long.UZERO;
    message.proofChannel =
      object.proofChannel !== undefined && object.proofChannel !== null
        ? bytesFromBase64(object.proofChannel)
        : new Uint8Array();
    message.proofUpgrade =
      object.proofUpgrade !== undefined && object.proofUpgrade !== null
        ? bytesFromBase64(object.proofUpgrade)
        : new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromJSON(object.proofHeight)
        : undefined;
    message.signer =
      object.signer !== undefined && object.signer !== null
        ? String(object.signer)
        : "";
    return message;
  },

  toJSON(message: MsgChannelUpgradeTry): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    if (message.proposedUpgradeConnectionHops) {
      obj.proposedUpgradeConnectionHops =
        message.proposedUpgradeConnectionHops.map((e) => e);
    } else {
      obj.proposedUpgradeConnectionHops = [];
    }
    message.counterpartyUpgradeFields !== undefined &&
      (obj.counterpartyUpgradeFields = message.counterpartyUpgradeFields
        ? UpgradeFields.toJSON(message.counterpartyUpgradeFields)
        : undefined);
    message.counterpartyUpgradeSequence !== undefined &&
      (obj.counterpartyUpgradeSequence = (
        message.counterpartyUpgradeSequence || Long.UZERO
      ).toString());
    message.proofChannel !== undefined &&
      (obj.proofChannel = base64FromBytes(
        message.proofChannel !== undefined
          ? message.proofChannel
          : new Uint8Array()
      ));
    message.proofUpgrade !== undefined &&
      (obj.proofUpgrade = base64FromBytes(
        message.proofUpgrade !== undefined
          ? message.proofUpgrade
          : new Uint8Array()
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight
        ? Height.toJSON(message.proofHeight)
        : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgChannelUpgradeTry>): MsgChannelUpgradeTry {
    const message = { ...baseMsgChannelUpgradeTry } as MsgChannelUpgradeTry;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.proposedUpgradeConnectionHops = (
      object.proposedUpgradeConnectionHops ?? []
    ).map((e) => e);
    message.counterpartyUpgradeFields =
      object.counterpartyUpgradeFields !== undefined &&
      object.counterpartyUpgradeFields !== null
        ? UpgradeFields.fromPartial(object.counterpartyUpgradeFields)
        : undefined;
    message.counterpartyUpgradeSequence =
      object.counterpartyUpgradeSequence !== undefined &&
      object.counterpartyUpgradeSequence !== null
        ? Long.fromValue(object.counterpartyUpgradeSequence)
        : Long.UZERO;
    message.proofChannel = object.proofChannel ?? new Uint8Array();
    message.proofUpgrade = object.proofUpgrade ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

const baseMsgChannelUpgradeTryResponse: object = {
  upgradeSequence: Long.UZERO,
  result: 0,
};

export const MsgChannelUpgradeTryResponse = {
  encode(
    message: MsgChannelUpgradeTryResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.upgrade !== undefined) {
      Upgrade.encode(message.upgrade, writer.uint32(10).fork()).ldelim();
    }
    if (!message.upgradeSequence.isZero()) {
      writer.uint32(16).uint64(message.upgradeSequence);
    }
    if (message.result !== 0) {
      writer.uint32(24).int32(message.result);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgChannelUpgradeTryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgChannelUpgradeTryResponse,
    } as MsgChannelUpgradeTryResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upgrade = Upgrade.decode(reader, reader.uint32());
          break;
        case 2:
          message.upgradeSequence = reader.uint64() as Long;
          break;
        case 3:
          message.result = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChannelUpgradeTryResponse {
    const message = {
      ...baseMsgChannelUpgradeTryResponse,
    } as MsgChannelUpgradeTryResponse;
    message.upgrade =
      object.upgrade !== undefined && object.upgrade !== null
        ? Upgrade.fromJSON(object.upgrade)
        : undefined;
    message.upgradeSequence =
      object.upgradeSequence !== undefined && object.upgradeSequence !== null
        ? Long.fromString(object.upgradeSequence)
        : Long.UZERO;
    message.result =
      object.result !== undefined && object.result !== null
        ? responseResultTypeFromJSON(object.result)
        : 0;
    return message;
  },

  toJSON(message: MsgChannelUpgradeTryResponse): unknown {
    const obj: any = {};
    message.upgrade !== undefined &&
      (obj.upgrade = message.upgrade
        ? Upgrade.toJSON(message.upgrade)
        : undefined);
    message.upgradeSequence !== undefined &&
      (obj.upgradeSequence = (
        message.upgradeSequence || Long.UZERO
      ).toString());
    message.result !== undefined &&
      (obj.result = responseResultTypeToJSON(message.result));
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgChannelUpgradeTryResponse>
  ): MsgChannelUpgradeTryResponse {
    const message = {
      ...baseMsgChannelUpgradeTryResponse,
    } as MsgChannelUpgradeTryResponse;
    message.upgrade =
      object.upgrade !== undefined && object.upgrade !== null
        ? Upgrade.fromPartial(object.upgrade)
        : undefined;
    message.upgradeSequence =
      object.upgradeSequence !== undefined && object.upgradeSequence !== null
        ? Long.fromValue(object.upgradeSequence)
        : Long.UZERO;
    message.result = object.result ?? 0;
    return message;
  },
};

const baseMsgChannelUpgradeAck: object = {
  portId: "",
  channelId: "",
  signer: "",
};

export const MsgChannelUpgradeAck = {
  encode(
    message: MsgChannelUpgradeAck,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.counterpartyUpgrade !== undefined) {
      Upgrade.encode(
        message.counterpartyUpgrade,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.proofChannel.length !== 0) {
      writer.uint32(34).bytes(message.proofChannel);
    }
    if (message.proofUpgrade.length !== 0) {
      writer.uint32(42).bytes(message.proofUpgrade);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(58).string(message.signer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgChannelUpgradeAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgChannelUpgradeAck } as MsgChannelUpgradeAck;
    message.proofChannel = new Uint8Array();
    message.proofUpgrade = new Uint8Array();
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
          message.counterpartyUpgrade = Upgrade.decode(reader, reader.uint32());
          break;
        case 4:
          message.proofChannel = reader.bytes();
          break;
        case 5:
          message.proofUpgrade = reader.bytes();
          break;
        case 6:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChannelUpgradeAck {
    const message = { ...baseMsgChannelUpgradeAck } as MsgChannelUpgradeAck;
    message.portId =
      object.portId !== undefined && object.portId !== null
        ? String(object.portId)
        : "";
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : "";
    message.counterpartyUpgrade =
      object.counterpartyUpgrade !== undefined &&
      object.counterpartyUpgrade !== null
        ? Upgrade.fromJSON(object.counterpartyUpgrade)
        : undefined;
    message.proofChannel =
      object.proofChannel !== undefined && object.proofChannel !== null
        ? bytesFromBase64(object.proofChannel)
        : new Uint8Array();
    message.proofUpgrade =
      object.proofUpgrade !== undefined && object.proofUpgrade !== null
        ? bytesFromBase64(object.proofUpgrade)
        : new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromJSON(object.proofHeight)
        : undefined;
    message.signer =
      object.signer !== undefined && object.signer !== null
        ? String(object.signer)
        : "";
    return message;
  },

  toJSON(message: MsgChannelUpgradeAck): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.counterpartyUpgrade !== undefined &&
      (obj.counterpartyUpgrade = message.counterpartyUpgrade
        ? Upgrade.toJSON(message.counterpartyUpgrade)
        : undefined);
    message.proofChannel !== undefined &&
      (obj.proofChannel = base64FromBytes(
        message.proofChannel !== undefined
          ? message.proofChannel
          : new Uint8Array()
      ));
    message.proofUpgrade !== undefined &&
      (obj.proofUpgrade = base64FromBytes(
        message.proofUpgrade !== undefined
          ? message.proofUpgrade
          : new Uint8Array()
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight
        ? Height.toJSON(message.proofHeight)
        : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgChannelUpgradeAck>): MsgChannelUpgradeAck {
    const message = { ...baseMsgChannelUpgradeAck } as MsgChannelUpgradeAck;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.counterpartyUpgrade =
      object.counterpartyUpgrade !== undefined &&
      object.counterpartyUpgrade !== null
        ? Upgrade.fromPartial(object.counterpartyUpgrade)
        : undefined;
    message.proofChannel = object.proofChannel ?? new Uint8Array();
    message.proofUpgrade = object.proofUpgrade ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

const baseMsgChannelUpgradeAckResponse: object = { result: 0 };

export const MsgChannelUpgradeAckResponse = {
  encode(
    message: MsgChannelUpgradeAckResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgChannelUpgradeAckResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgChannelUpgradeAckResponse,
    } as MsgChannelUpgradeAckResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChannelUpgradeAckResponse {
    const message = {
      ...baseMsgChannelUpgradeAckResponse,
    } as MsgChannelUpgradeAckResponse;
    message.result =
      object.result !== undefined && object.result !== null
        ? responseResultTypeFromJSON(object.result)
        : 0;
    return message;
  },

  toJSON(message: MsgChannelUpgradeAckResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = responseResultTypeToJSON(message.result));
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgChannelUpgradeAckResponse>
  ): MsgChannelUpgradeAckResponse {
    const message = {
      ...baseMsgChannelUpgradeAckResponse,
    } as MsgChannelUpgradeAckResponse;
    message.result = object.result ?? 0;
    return message;
  },
};

const baseMsgChannelUpgradeConfirm: object = {
  portId: "",
  channelId: "",
  counterpartyChannelState: 0,
  signer: "",
};

export const MsgChannelUpgradeConfirm = {
  encode(
    message: MsgChannelUpgradeConfirm,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.counterpartyChannelState !== 0) {
      writer.uint32(24).int32(message.counterpartyChannelState);
    }
    if (message.counterpartyUpgrade !== undefined) {
      Upgrade.encode(
        message.counterpartyUpgrade,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.proofChannel.length !== 0) {
      writer.uint32(42).bytes(message.proofChannel);
    }
    if (message.proofUpgrade.length !== 0) {
      writer.uint32(50).bytes(message.proofUpgrade);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(58).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(66).string(message.signer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgChannelUpgradeConfirm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgChannelUpgradeConfirm,
    } as MsgChannelUpgradeConfirm;
    message.proofChannel = new Uint8Array();
    message.proofUpgrade = new Uint8Array();
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
          message.counterpartyChannelState = reader.int32() as any;
          break;
        case 4:
          message.counterpartyUpgrade = Upgrade.decode(reader, reader.uint32());
          break;
        case 5:
          message.proofChannel = reader.bytes();
          break;
        case 6:
          message.proofUpgrade = reader.bytes();
          break;
        case 7:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 8:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChannelUpgradeConfirm {
    const message = {
      ...baseMsgChannelUpgradeConfirm,
    } as MsgChannelUpgradeConfirm;
    message.portId =
      object.portId !== undefined && object.portId !== null
        ? String(object.portId)
        : "";
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : "";
    message.counterpartyChannelState =
      object.counterpartyChannelState !== undefined &&
      object.counterpartyChannelState !== null
        ? stateFromJSON(object.counterpartyChannelState)
        : 0;
    message.counterpartyUpgrade =
      object.counterpartyUpgrade !== undefined &&
      object.counterpartyUpgrade !== null
        ? Upgrade.fromJSON(object.counterpartyUpgrade)
        : undefined;
    message.proofChannel =
      object.proofChannel !== undefined && object.proofChannel !== null
        ? bytesFromBase64(object.proofChannel)
        : new Uint8Array();
    message.proofUpgrade =
      object.proofUpgrade !== undefined && object.proofUpgrade !== null
        ? bytesFromBase64(object.proofUpgrade)
        : new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromJSON(object.proofHeight)
        : undefined;
    message.signer =
      object.signer !== undefined && object.signer !== null
        ? String(object.signer)
        : "";
    return message;
  },

  toJSON(message: MsgChannelUpgradeConfirm): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.counterpartyChannelState !== undefined &&
      (obj.counterpartyChannelState = stateToJSON(
        message.counterpartyChannelState
      ));
    message.counterpartyUpgrade !== undefined &&
      (obj.counterpartyUpgrade = message.counterpartyUpgrade
        ? Upgrade.toJSON(message.counterpartyUpgrade)
        : undefined);
    message.proofChannel !== undefined &&
      (obj.proofChannel = base64FromBytes(
        message.proofChannel !== undefined
          ? message.proofChannel
          : new Uint8Array()
      ));
    message.proofUpgrade !== undefined &&
      (obj.proofUpgrade = base64FromBytes(
        message.proofUpgrade !== undefined
          ? message.proofUpgrade
          : new Uint8Array()
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight
        ? Height.toJSON(message.proofHeight)
        : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgChannelUpgradeConfirm>
  ): MsgChannelUpgradeConfirm {
    const message = {
      ...baseMsgChannelUpgradeConfirm,
    } as MsgChannelUpgradeConfirm;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.counterpartyChannelState = object.counterpartyChannelState ?? 0;
    message.counterpartyUpgrade =
      object.counterpartyUpgrade !== undefined &&
      object.counterpartyUpgrade !== null
        ? Upgrade.fromPartial(object.counterpartyUpgrade)
        : undefined;
    message.proofChannel = object.proofChannel ?? new Uint8Array();
    message.proofUpgrade = object.proofUpgrade ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

const baseMsgChannelUpgradeConfirmResponse: object = { result: 0 };

export const MsgChannelUpgradeConfirmResponse = {
  encode(
    message: MsgChannelUpgradeConfirmResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgChannelUpgradeConfirmResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgChannelUpgradeConfirmResponse,
    } as MsgChannelUpgradeConfirmResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChannelUpgradeConfirmResponse {
    const message = {
      ...baseMsgChannelUpgradeConfirmResponse,
    } as MsgChannelUpgradeConfirmResponse;
    message.result =
      object.result !== undefined && object.result !== null
        ? responseResultTypeFromJSON(object.result)
        : 0;
    return message;
  },

  toJSON(message: MsgChannelUpgradeConfirmResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = responseResultTypeToJSON(message.result));
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgChannelUpgradeConfirmResponse>
  ): MsgChannelUpgradeConfirmResponse {
    const message = {
      ...baseMsgChannelUpgradeConfirmResponse,
    } as MsgChannelUpgradeConfirmResponse;
    message.result = object.result ?? 0;
    return message;
  },
};

const baseMsgChannelUpgradeOpen: object = {
  portId: "",
  channelId: "",
  counterpartyChannelState: 0,
  counterpartyUpgradeSequence: Long.UZERO,
  signer: "",
};

export const MsgChannelUpgradeOpen = {
  encode(
    message: MsgChannelUpgradeOpen,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.counterpartyChannelState !== 0) {
      writer.uint32(24).int32(message.counterpartyChannelState);
    }
    if (!message.counterpartyUpgradeSequence.isZero()) {
      writer.uint32(32).uint64(message.counterpartyUpgradeSequence);
    }
    if (message.proofChannel.length !== 0) {
      writer.uint32(42).bytes(message.proofChannel);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(58).string(message.signer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgChannelUpgradeOpen {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgChannelUpgradeOpen } as MsgChannelUpgradeOpen;
    message.proofChannel = new Uint8Array();
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
          message.counterpartyChannelState = reader.int32() as any;
          break;
        case 4:
          message.counterpartyUpgradeSequence = reader.uint64() as Long;
          break;
        case 5:
          message.proofChannel = reader.bytes();
          break;
        case 6:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChannelUpgradeOpen {
    const message = { ...baseMsgChannelUpgradeOpen } as MsgChannelUpgradeOpen;
    message.portId =
      object.portId !== undefined && object.portId !== null
        ? String(object.portId)
        : "";
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : "";
    message.counterpartyChannelState =
      object.counterpartyChannelState !== undefined &&
      object.counterpartyChannelState !== null
        ? stateFromJSON(object.counterpartyChannelState)
        : 0;
    message.counterpartyUpgradeSequence =
      object.counterpartyUpgradeSequence !== undefined &&
      object.counterpartyUpgradeSequence !== null
        ? Long.fromString(object.counterpartyUpgradeSequence)
        : Long.UZERO;
    message.proofChannel =
      object.proofChannel !== undefined && object.proofChannel !== null
        ? bytesFromBase64(object.proofChannel)
        : new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromJSON(object.proofHeight)
        : undefined;
    message.signer =
      object.signer !== undefined && object.signer !== null
        ? String(object.signer)
        : "";
    return message;
  },

  toJSON(message: MsgChannelUpgradeOpen): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.counterpartyChannelState !== undefined &&
      (obj.counterpartyChannelState = stateToJSON(
        message.counterpartyChannelState
      ));
    message.counterpartyUpgradeSequence !== undefined &&
      (obj.counterpartyUpgradeSequence = (
        message.counterpartyUpgradeSequence || Long.UZERO
      ).toString());
    message.proofChannel !== undefined &&
      (obj.proofChannel = base64FromBytes(
        message.proofChannel !== undefined
          ? message.proofChannel
          : new Uint8Array()
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight
        ? Height.toJSON(message.proofHeight)
        : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgChannelUpgradeOpen>
  ): MsgChannelUpgradeOpen {
    const message = { ...baseMsgChannelUpgradeOpen } as MsgChannelUpgradeOpen;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.counterpartyChannelState = object.counterpartyChannelState ?? 0;
    message.counterpartyUpgradeSequence =
      object.counterpartyUpgradeSequence !== undefined &&
      object.counterpartyUpgradeSequence !== null
        ? Long.fromValue(object.counterpartyUpgradeSequence)
        : Long.UZERO;
    message.proofChannel = object.proofChannel ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

const baseMsgChannelUpgradeOpenResponse: object = {};

export const MsgChannelUpgradeOpenResponse = {
  encode(
    _: MsgChannelUpgradeOpenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgChannelUpgradeOpenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgChannelUpgradeOpenResponse,
    } as MsgChannelUpgradeOpenResponse;
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

  fromJSON(_: any): MsgChannelUpgradeOpenResponse {
    const message = {
      ...baseMsgChannelUpgradeOpenResponse,
    } as MsgChannelUpgradeOpenResponse;
    return message;
  },

  toJSON(_: MsgChannelUpgradeOpenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgChannelUpgradeOpenResponse>
  ): MsgChannelUpgradeOpenResponse {
    const message = {
      ...baseMsgChannelUpgradeOpenResponse,
    } as MsgChannelUpgradeOpenResponse;
    return message;
  },
};

const baseMsgChannelUpgradeTimeout: object = {
  portId: "",
  channelId: "",
  signer: "",
};

export const MsgChannelUpgradeTimeout = {
  encode(
    message: MsgChannelUpgradeTimeout,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.counterpartyChannel !== undefined) {
      Channel.encode(
        message.counterpartyChannel,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.proofChannel.length !== 0) {
      writer.uint32(34).bytes(message.proofChannel);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(42).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgChannelUpgradeTimeout {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgChannelUpgradeTimeout,
    } as MsgChannelUpgradeTimeout;
    message.proofChannel = new Uint8Array();
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
          message.counterpartyChannel = Channel.decode(reader, reader.uint32());
          break;
        case 4:
          message.proofChannel = reader.bytes();
          break;
        case 5:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 6:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChannelUpgradeTimeout {
    const message = {
      ...baseMsgChannelUpgradeTimeout,
    } as MsgChannelUpgradeTimeout;
    message.portId =
      object.portId !== undefined && object.portId !== null
        ? String(object.portId)
        : "";
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : "";
    message.counterpartyChannel =
      object.counterpartyChannel !== undefined &&
      object.counterpartyChannel !== null
        ? Channel.fromJSON(object.counterpartyChannel)
        : undefined;
    message.proofChannel =
      object.proofChannel !== undefined && object.proofChannel !== null
        ? bytesFromBase64(object.proofChannel)
        : new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromJSON(object.proofHeight)
        : undefined;
    message.signer =
      object.signer !== undefined && object.signer !== null
        ? String(object.signer)
        : "";
    return message;
  },

  toJSON(message: MsgChannelUpgradeTimeout): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.counterpartyChannel !== undefined &&
      (obj.counterpartyChannel = message.counterpartyChannel
        ? Channel.toJSON(message.counterpartyChannel)
        : undefined);
    message.proofChannel !== undefined &&
      (obj.proofChannel = base64FromBytes(
        message.proofChannel !== undefined
          ? message.proofChannel
          : new Uint8Array()
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight
        ? Height.toJSON(message.proofHeight)
        : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgChannelUpgradeTimeout>
  ): MsgChannelUpgradeTimeout {
    const message = {
      ...baseMsgChannelUpgradeTimeout,
    } as MsgChannelUpgradeTimeout;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.counterpartyChannel =
      object.counterpartyChannel !== undefined &&
      object.counterpartyChannel !== null
        ? Channel.fromPartial(object.counterpartyChannel)
        : undefined;
    message.proofChannel = object.proofChannel ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

const baseMsgChannelUpgradeTimeoutResponse: object = {};

export const MsgChannelUpgradeTimeoutResponse = {
  encode(
    _: MsgChannelUpgradeTimeoutResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgChannelUpgradeTimeoutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgChannelUpgradeTimeoutResponse,
    } as MsgChannelUpgradeTimeoutResponse;
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

  fromJSON(_: any): MsgChannelUpgradeTimeoutResponse {
    const message = {
      ...baseMsgChannelUpgradeTimeoutResponse,
    } as MsgChannelUpgradeTimeoutResponse;
    return message;
  },

  toJSON(_: MsgChannelUpgradeTimeoutResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgChannelUpgradeTimeoutResponse>
  ): MsgChannelUpgradeTimeoutResponse {
    const message = {
      ...baseMsgChannelUpgradeTimeoutResponse,
    } as MsgChannelUpgradeTimeoutResponse;
    return message;
  },
};

const baseMsgChannelUpgradeCancel: object = {
  portId: "",
  channelId: "",
  signer: "",
};

export const MsgChannelUpgradeCancel = {
  encode(
    message: MsgChannelUpgradeCancel,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.errorReceipt !== undefined) {
      ErrorReceipt.encode(
        message.errorReceipt,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.proofErrorReceipt.length !== 0) {
      writer.uint32(34).bytes(message.proofErrorReceipt);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(42).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgChannelUpgradeCancel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgChannelUpgradeCancel,
    } as MsgChannelUpgradeCancel;
    message.proofErrorReceipt = new Uint8Array();
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
          message.errorReceipt = ErrorReceipt.decode(reader, reader.uint32());
          break;
        case 4:
          message.proofErrorReceipt = reader.bytes();
          break;
        case 5:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 6:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChannelUpgradeCancel {
    const message = {
      ...baseMsgChannelUpgradeCancel,
    } as MsgChannelUpgradeCancel;
    message.portId =
      object.portId !== undefined && object.portId !== null
        ? String(object.portId)
        : "";
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : "";
    message.errorReceipt =
      object.errorReceipt !== undefined && object.errorReceipt !== null
        ? ErrorReceipt.fromJSON(object.errorReceipt)
        : undefined;
    message.proofErrorReceipt =
      object.proofErrorReceipt !== undefined &&
      object.proofErrorReceipt !== null
        ? bytesFromBase64(object.proofErrorReceipt)
        : new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromJSON(object.proofHeight)
        : undefined;
    message.signer =
      object.signer !== undefined && object.signer !== null
        ? String(object.signer)
        : "";
    return message;
  },

  toJSON(message: MsgChannelUpgradeCancel): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.errorReceipt !== undefined &&
      (obj.errorReceipt = message.errorReceipt
        ? ErrorReceipt.toJSON(message.errorReceipt)
        : undefined);
    message.proofErrorReceipt !== undefined &&
      (obj.proofErrorReceipt = base64FromBytes(
        message.proofErrorReceipt !== undefined
          ? message.proofErrorReceipt
          : new Uint8Array()
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight
        ? Height.toJSON(message.proofHeight)
        : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgChannelUpgradeCancel>
  ): MsgChannelUpgradeCancel {
    const message = {
      ...baseMsgChannelUpgradeCancel,
    } as MsgChannelUpgradeCancel;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.errorReceipt =
      object.errorReceipt !== undefined && object.errorReceipt !== null
        ? ErrorReceipt.fromPartial(object.errorReceipt)
        : undefined;
    message.proofErrorReceipt = object.proofErrorReceipt ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

const baseMsgChannelUpgradeCancelResponse: object = {};

export const MsgChannelUpgradeCancelResponse = {
  encode(
    _: MsgChannelUpgradeCancelResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgChannelUpgradeCancelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgChannelUpgradeCancelResponse,
    } as MsgChannelUpgradeCancelResponse;
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

  fromJSON(_: any): MsgChannelUpgradeCancelResponse {
    const message = {
      ...baseMsgChannelUpgradeCancelResponse,
    } as MsgChannelUpgradeCancelResponse;
    return message;
  },

  toJSON(_: MsgChannelUpgradeCancelResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgChannelUpgradeCancelResponse>
  ): MsgChannelUpgradeCancelResponse {
    const message = {
      ...baseMsgChannelUpgradeCancelResponse,
    } as MsgChannelUpgradeCancelResponse;
    return message;
  },
};

const baseMsgUpdateParams: object = { authority: "" };

export const MsgUpdateParams = {
  encode(
    message: MsgUpdateParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    message.authority =
      object.authority !== undefined && object.authority !== null
        ? String(object.authority)
        : "";
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromJSON(object.params)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    message.authority = object.authority ?? "";
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

const baseMsgUpdateParamsResponse: object = {};

export const MsgUpdateParamsResponse = {
  encode(
    _: MsgUpdateParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateParamsResponse,
    } as MsgUpdateParamsResponse;
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

  fromJSON(_: any): MsgUpdateParamsResponse {
    const message = {
      ...baseMsgUpdateParamsResponse,
    } as MsgUpdateParamsResponse;
    return message;
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateParamsResponse>
  ): MsgUpdateParamsResponse {
    const message = {
      ...baseMsgUpdateParamsResponse,
    } as MsgUpdateParamsResponse;
    return message;
  },
};

const baseMsgPruneAcknowledgements: object = {
  portId: "",
  channelId: "",
  limit: Long.UZERO,
  signer: "",
};

export const MsgPruneAcknowledgements = {
  encode(
    message: MsgPruneAcknowledgements,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (!message.limit.isZero()) {
      writer.uint32(24).uint64(message.limit);
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgPruneAcknowledgements {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgPruneAcknowledgements,
    } as MsgPruneAcknowledgements;
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
          message.limit = reader.uint64() as Long;
          break;
        case 4:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPruneAcknowledgements {
    const message = {
      ...baseMsgPruneAcknowledgements,
    } as MsgPruneAcknowledgements;
    message.portId =
      object.portId !== undefined && object.portId !== null
        ? String(object.portId)
        : "";
    message.channelId =
      object.channelId !== undefined && object.channelId !== null
        ? String(object.channelId)
        : "";
    message.limit =
      object.limit !== undefined && object.limit !== null
        ? Long.fromString(object.limit)
        : Long.UZERO;
    message.signer =
      object.signer !== undefined && object.signer !== null
        ? String(object.signer)
        : "";
    return message;
  },

  toJSON(message: MsgPruneAcknowledgements): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.limit !== undefined &&
      (obj.limit = (message.limit || Long.UZERO).toString());
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgPruneAcknowledgements>
  ): MsgPruneAcknowledgements {
    const message = {
      ...baseMsgPruneAcknowledgements,
    } as MsgPruneAcknowledgements;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.limit =
      object.limit !== undefined && object.limit !== null
        ? Long.fromValue(object.limit)
        : Long.UZERO;
    message.signer = object.signer ?? "";
    return message;
  },
};

const baseMsgPruneAcknowledgementsResponse: object = {
  totalPrunedSequences: Long.UZERO,
  totalRemainingSequences: Long.UZERO,
};

export const MsgPruneAcknowledgementsResponse = {
  encode(
    message: MsgPruneAcknowledgementsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.totalPrunedSequences.isZero()) {
      writer.uint32(8).uint64(message.totalPrunedSequences);
    }
    if (!message.totalRemainingSequences.isZero()) {
      writer.uint32(16).uint64(message.totalRemainingSequences);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgPruneAcknowledgementsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgPruneAcknowledgementsResponse,
    } as MsgPruneAcknowledgementsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalPrunedSequences = reader.uint64() as Long;
          break;
        case 2:
          message.totalRemainingSequences = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPruneAcknowledgementsResponse {
    const message = {
      ...baseMsgPruneAcknowledgementsResponse,
    } as MsgPruneAcknowledgementsResponse;
    message.totalPrunedSequences =
      object.totalPrunedSequences !== undefined &&
      object.totalPrunedSequences !== null
        ? Long.fromString(object.totalPrunedSequences)
        : Long.UZERO;
    message.totalRemainingSequences =
      object.totalRemainingSequences !== undefined &&
      object.totalRemainingSequences !== null
        ? Long.fromString(object.totalRemainingSequences)
        : Long.UZERO;
    return message;
  },

  toJSON(message: MsgPruneAcknowledgementsResponse): unknown {
    const obj: any = {};
    message.totalPrunedSequences !== undefined &&
      (obj.totalPrunedSequences = (
        message.totalPrunedSequences || Long.UZERO
      ).toString());
    message.totalRemainingSequences !== undefined &&
      (obj.totalRemainingSequences = (
        message.totalRemainingSequences || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgPruneAcknowledgementsResponse>
  ): MsgPruneAcknowledgementsResponse {
    const message = {
      ...baseMsgPruneAcknowledgementsResponse,
    } as MsgPruneAcknowledgementsResponse;
    message.totalPrunedSequences =
      object.totalPrunedSequences !== undefined &&
      object.totalPrunedSequences !== null
        ? Long.fromValue(object.totalPrunedSequences)
        : Long.UZERO;
    message.totalRemainingSequences =
      object.totalRemainingSequences !== undefined &&
      object.totalRemainingSequences !== null
        ? Long.fromValue(object.totalRemainingSequences)
        : Long.UZERO;
    return message;
  },
};

/** Msg defines the ibc/channel Msg service. */
export interface Msg {
  /** ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit. */
  ChannelOpenInit(
    request: MsgChannelOpenInit
  ): Promise<MsgChannelOpenInitResponse>;
  /** ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry. */
  ChannelOpenTry(
    request: MsgChannelOpenTry
  ): Promise<MsgChannelOpenTryResponse>;
  /** ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck. */
  ChannelOpenAck(
    request: MsgChannelOpenAck
  ): Promise<MsgChannelOpenAckResponse>;
  /** ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm. */
  ChannelOpenConfirm(
    request: MsgChannelOpenConfirm
  ): Promise<MsgChannelOpenConfirmResponse>;
  /** ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit. */
  ChannelCloseInit(
    request: MsgChannelCloseInit
  ): Promise<MsgChannelCloseInitResponse>;
  /**
   * ChannelCloseConfirm defines a rpc handler method for
   * MsgChannelCloseConfirm.
   */
  ChannelCloseConfirm(
    request: MsgChannelCloseConfirm
  ): Promise<MsgChannelCloseConfirmResponse>;
  /** RecvPacket defines a rpc handler method for MsgRecvPacket. */
  RecvPacket(request: MsgRecvPacket): Promise<MsgRecvPacketResponse>;
  /** Timeout defines a rpc handler method for MsgTimeout. */
  Timeout(request: MsgTimeout): Promise<MsgTimeoutResponse>;
  /** TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose. */
  TimeoutOnClose(
    request: MsgTimeoutOnClose
  ): Promise<MsgTimeoutOnCloseResponse>;
  /** Acknowledgement defines a rpc handler method for MsgAcknowledgement. */
  Acknowledgement(
    request: MsgAcknowledgement
  ): Promise<MsgAcknowledgementResponse>;
  /** ChannelUpgradeInit defines a rpc handler method for MsgChannelUpgradeInit. */
  ChannelUpgradeInit(
    request: MsgChannelUpgradeInit
  ): Promise<MsgChannelUpgradeInitResponse>;
  /** ChannelUpgradeTry defines a rpc handler method for MsgChannelUpgradeTry. */
  ChannelUpgradeTry(
    request: MsgChannelUpgradeTry
  ): Promise<MsgChannelUpgradeTryResponse>;
  /** ChannelUpgradeAck defines a rpc handler method for MsgChannelUpgradeAck. */
  ChannelUpgradeAck(
    request: MsgChannelUpgradeAck
  ): Promise<MsgChannelUpgradeAckResponse>;
  /** ChannelUpgradeConfirm defines a rpc handler method for MsgChannelUpgradeConfirm. */
  ChannelUpgradeConfirm(
    request: MsgChannelUpgradeConfirm
  ): Promise<MsgChannelUpgradeConfirmResponse>;
  /** ChannelUpgradeOpen defines a rpc handler method for MsgChannelUpgradeOpen. */
  ChannelUpgradeOpen(
    request: MsgChannelUpgradeOpen
  ): Promise<MsgChannelUpgradeOpenResponse>;
  /** ChannelUpgradeTimeout defines a rpc handler method for MsgChannelUpgradeTimeout. */
  ChannelUpgradeTimeout(
    request: MsgChannelUpgradeTimeout
  ): Promise<MsgChannelUpgradeTimeoutResponse>;
  /** ChannelUpgradeCancel defines a rpc handler method for MsgChannelUpgradeCancel. */
  ChannelUpgradeCancel(
    request: MsgChannelUpgradeCancel
  ): Promise<MsgChannelUpgradeCancelResponse>;
  /** UpdateChannelParams defines a rpc handler method for MsgUpdateParams. */
  UpdateChannelParams(
    request: MsgUpdateParams
  ): Promise<MsgUpdateParamsResponse>;
  /** PruneAcknowledgements defines a rpc handler method for MsgPruneAcknowledgements. */
  PruneAcknowledgements(
    request: MsgPruneAcknowledgements
  ): Promise<MsgPruneAcknowledgementsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ChannelOpenInit = this.ChannelOpenInit.bind(this);
    this.ChannelOpenTry = this.ChannelOpenTry.bind(this);
    this.ChannelOpenAck = this.ChannelOpenAck.bind(this);
    this.ChannelOpenConfirm = this.ChannelOpenConfirm.bind(this);
    this.ChannelCloseInit = this.ChannelCloseInit.bind(this);
    this.ChannelCloseConfirm = this.ChannelCloseConfirm.bind(this);
    this.RecvPacket = this.RecvPacket.bind(this);
    this.Timeout = this.Timeout.bind(this);
    this.TimeoutOnClose = this.TimeoutOnClose.bind(this);
    this.Acknowledgement = this.Acknowledgement.bind(this);
    this.ChannelUpgradeInit = this.ChannelUpgradeInit.bind(this);
    this.ChannelUpgradeTry = this.ChannelUpgradeTry.bind(this);
    this.ChannelUpgradeAck = this.ChannelUpgradeAck.bind(this);
    this.ChannelUpgradeConfirm = this.ChannelUpgradeConfirm.bind(this);
    this.ChannelUpgradeOpen = this.ChannelUpgradeOpen.bind(this);
    this.ChannelUpgradeTimeout = this.ChannelUpgradeTimeout.bind(this);
    this.ChannelUpgradeCancel = this.ChannelUpgradeCancel.bind(this);
    this.UpdateChannelParams = this.UpdateChannelParams.bind(this);
    this.PruneAcknowledgements = this.PruneAcknowledgements.bind(this);
  }
  ChannelOpenInit(
    request: MsgChannelOpenInit
  ): Promise<MsgChannelOpenInitResponse> {
    const data = MsgChannelOpenInit.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.channel.v1.Msg",
      "ChannelOpenInit",
      data
    );
    return promise.then((data) =>
      MsgChannelOpenInitResponse.decode(new _m0.Reader(data))
    );
  }

  ChannelOpenTry(
    request: MsgChannelOpenTry
  ): Promise<MsgChannelOpenTryResponse> {
    const data = MsgChannelOpenTry.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.channel.v1.Msg",
      "ChannelOpenTry",
      data
    );
    return promise.then((data) =>
      MsgChannelOpenTryResponse.decode(new _m0.Reader(data))
    );
  }

  ChannelOpenAck(
    request: MsgChannelOpenAck
  ): Promise<MsgChannelOpenAckResponse> {
    const data = MsgChannelOpenAck.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.channel.v1.Msg",
      "ChannelOpenAck",
      data
    );
    return promise.then((data) =>
      MsgChannelOpenAckResponse.decode(new _m0.Reader(data))
    );
  }

  ChannelOpenConfirm(
    request: MsgChannelOpenConfirm
  ): Promise<MsgChannelOpenConfirmResponse> {
    const data = MsgChannelOpenConfirm.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.channel.v1.Msg",
      "ChannelOpenConfirm",
      data
    );
    return promise.then((data) =>
      MsgChannelOpenConfirmResponse.decode(new _m0.Reader(data))
    );
  }

  ChannelCloseInit(
    request: MsgChannelCloseInit
  ): Promise<MsgChannelCloseInitResponse> {
    const data = MsgChannelCloseInit.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.channel.v1.Msg",
      "ChannelCloseInit",
      data
    );
    return promise.then((data) =>
      MsgChannelCloseInitResponse.decode(new _m0.Reader(data))
    );
  }

  ChannelCloseConfirm(
    request: MsgChannelCloseConfirm
  ): Promise<MsgChannelCloseConfirmResponse> {
    const data = MsgChannelCloseConfirm.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.channel.v1.Msg",
      "ChannelCloseConfirm",
      data
    );
    return promise.then((data) =>
      MsgChannelCloseConfirmResponse.decode(new _m0.Reader(data))
    );
  }

  RecvPacket(request: MsgRecvPacket): Promise<MsgRecvPacketResponse> {
    const data = MsgRecvPacket.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.channel.v1.Msg",
      "RecvPacket",
      data
    );
    return promise.then((data) =>
      MsgRecvPacketResponse.decode(new _m0.Reader(data))
    );
  }

  Timeout(request: MsgTimeout): Promise<MsgTimeoutResponse> {
    const data = MsgTimeout.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.channel.v1.Msg",
      "Timeout",
      data
    );
    return promise.then((data) =>
      MsgTimeoutResponse.decode(new _m0.Reader(data))
    );
  }

  TimeoutOnClose(
    request: MsgTimeoutOnClose
  ): Promise<MsgTimeoutOnCloseResponse> {
    const data = MsgTimeoutOnClose.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.channel.v1.Msg",
      "TimeoutOnClose",
      data
    );
    return promise.then((data) =>
      MsgTimeoutOnCloseResponse.decode(new _m0.Reader(data))
    );
  }

  Acknowledgement(
    request: MsgAcknowledgement
  ): Promise<MsgAcknowledgementResponse> {
    const data = MsgAcknowledgement.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.channel.v1.Msg",
      "Acknowledgement",
      data
    );
    return promise.then((data) =>
      MsgAcknowledgementResponse.decode(new _m0.Reader(data))
    );
  }

  ChannelUpgradeInit(
    request: MsgChannelUpgradeInit
  ): Promise<MsgChannelUpgradeInitResponse> {
    const data = MsgChannelUpgradeInit.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.channel.v1.Msg",
      "ChannelUpgradeInit",
      data
    );
    return promise.then((data) =>
      MsgChannelUpgradeInitResponse.decode(new _m0.Reader(data))
    );
  }

  ChannelUpgradeTry(
    request: MsgChannelUpgradeTry
  ): Promise<MsgChannelUpgradeTryResponse> {
    const data = MsgChannelUpgradeTry.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.channel.v1.Msg",
      "ChannelUpgradeTry",
      data
    );
    return promise.then((data) =>
      MsgChannelUpgradeTryResponse.decode(new _m0.Reader(data))
    );
  }

  ChannelUpgradeAck(
    request: MsgChannelUpgradeAck
  ): Promise<MsgChannelUpgradeAckResponse> {
    const data = MsgChannelUpgradeAck.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.channel.v1.Msg",
      "ChannelUpgradeAck",
      data
    );
    return promise.then((data) =>
      MsgChannelUpgradeAckResponse.decode(new _m0.Reader(data))
    );
  }

  ChannelUpgradeConfirm(
    request: MsgChannelUpgradeConfirm
  ): Promise<MsgChannelUpgradeConfirmResponse> {
    const data = MsgChannelUpgradeConfirm.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.channel.v1.Msg",
      "ChannelUpgradeConfirm",
      data
    );
    return promise.then((data) =>
      MsgChannelUpgradeConfirmResponse.decode(new _m0.Reader(data))
    );
  }

  ChannelUpgradeOpen(
    request: MsgChannelUpgradeOpen
  ): Promise<MsgChannelUpgradeOpenResponse> {
    const data = MsgChannelUpgradeOpen.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.channel.v1.Msg",
      "ChannelUpgradeOpen",
      data
    );
    return promise.then((data) =>
      MsgChannelUpgradeOpenResponse.decode(new _m0.Reader(data))
    );
  }

  ChannelUpgradeTimeout(
    request: MsgChannelUpgradeTimeout
  ): Promise<MsgChannelUpgradeTimeoutResponse> {
    const data = MsgChannelUpgradeTimeout.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.channel.v1.Msg",
      "ChannelUpgradeTimeout",
      data
    );
    return promise.then((data) =>
      MsgChannelUpgradeTimeoutResponse.decode(new _m0.Reader(data))
    );
  }

  ChannelUpgradeCancel(
    request: MsgChannelUpgradeCancel
  ): Promise<MsgChannelUpgradeCancelResponse> {
    const data = MsgChannelUpgradeCancel.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.channel.v1.Msg",
      "ChannelUpgradeCancel",
      data
    );
    return promise.then((data) =>
      MsgChannelUpgradeCancelResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateChannelParams(
    request: MsgUpdateParams
  ): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.channel.v1.Msg",
      "UpdateChannelParams",
      data
    );
    return promise.then((data) =>
      MsgUpdateParamsResponse.decode(new _m0.Reader(data))
    );
  }

  PruneAcknowledgements(
    request: MsgPruneAcknowledgements
  ): Promise<MsgPruneAcknowledgementsResponse> {
    const data = MsgPruneAcknowledgements.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.channel.v1.Msg",
      "PruneAcknowledgements",
      data
    );
    return promise.then((data) =>
      MsgPruneAcknowledgementsResponse.decode(new _m0.Reader(data))
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
