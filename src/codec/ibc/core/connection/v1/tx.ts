/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Counterparty, Version, Params } from "./connection";
import { Any } from "../../../../google/protobuf/any";
import { Height } from "../../client/v1/client";

export const protobufPackage = "ibc.core.connection.v1";

/**
 * MsgConnectionOpenInit defines the msg sent by an account on Chain A to
 * initialize a connection with Chain B.
 */
export interface MsgConnectionOpenInit {
  clientId: string;
  counterparty?: Counterparty;
  version?: Version;
  delayPeriod: Long;
  signer: string;
}

/**
 * MsgConnectionOpenInitResponse defines the Msg/ConnectionOpenInit response
 * type.
 */
export interface MsgConnectionOpenInitResponse {}

/**
 * MsgConnectionOpenTry defines a msg sent by a Relayer to try to open a
 * connection on Chain B.
 */
export interface MsgConnectionOpenTry {
  clientId: string;
  /**
   * Deprecated: this field is unused. Crossing hellos are no longer supported in core IBC.
   *
   * @deprecated
   */
  previousConnectionId: string;
  clientState?: Any;
  counterparty?: Counterparty;
  delayPeriod: Long;
  counterpartyVersions: Version[];
  proofHeight?: Height;
  /**
   * proof of the initialization the connection on Chain A: `UNITIALIZED ->
   * INIT`
   */
  proofInit: Uint8Array;
  /** proof of client state included in message */
  proofClient: Uint8Array;
  /** proof of client consensus state */
  proofConsensus: Uint8Array;
  consensusHeight?: Height;
  signer: string;
  /** optional proof data for host state machines that are unable to introspect their own consensus state */
  hostConsensusStateProof: Uint8Array;
}

/** MsgConnectionOpenTryResponse defines the Msg/ConnectionOpenTry response type. */
export interface MsgConnectionOpenTryResponse {}

/**
 * MsgConnectionOpenAck defines a msg sent by a Relayer to Chain A to
 * acknowledge the change of connection state to TRYOPEN on Chain B.
 */
export interface MsgConnectionOpenAck {
  connectionId: string;
  counterpartyConnectionId: string;
  version?: Version;
  clientState?: Any;
  proofHeight?: Height;
  /**
   * proof of the initialization the connection on Chain B: `UNITIALIZED ->
   * TRYOPEN`
   */
  proofTry: Uint8Array;
  /** proof of client state included in message */
  proofClient: Uint8Array;
  /** proof of client consensus state */
  proofConsensus: Uint8Array;
  consensusHeight?: Height;
  signer: string;
  /** optional proof data for host state machines that are unable to introspect their own consensus state */
  hostConsensusStateProof: Uint8Array;
}

/** MsgConnectionOpenAckResponse defines the Msg/ConnectionOpenAck response type. */
export interface MsgConnectionOpenAckResponse {}

/**
 * MsgConnectionOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of connection state to OPEN on Chain A.
 */
export interface MsgConnectionOpenConfirm {
  connectionId: string;
  /** proof for the change of the connection state on Chain A: `INIT -> OPEN` */
  proofAck: Uint8Array;
  proofHeight?: Height;
  signer: string;
}

/**
 * MsgConnectionOpenConfirmResponse defines the Msg/ConnectionOpenConfirm
 * response type.
 */
export interface MsgConnectionOpenConfirmResponse {}

/** MsgUpdateParams defines the sdk.Msg type to update the connection parameters. */
export interface MsgUpdateParams {
  /** signer address */
  signer: string;
  /**
   * params defines the connection parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params?: Params;
}

/** MsgUpdateParamsResponse defines the MsgUpdateParams response type. */
export interface MsgUpdateParamsResponse {}

const baseMsgConnectionOpenInit: object = {
  clientId: "",
  delayPeriod: Long.UZERO,
  signer: "",
};

export const MsgConnectionOpenInit = {
  encode(
    message: MsgConnectionOpenInit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.counterparty !== undefined) {
      Counterparty.encode(
        message.counterparty,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.version !== undefined) {
      Version.encode(message.version, writer.uint32(26).fork()).ldelim();
    }
    if (!message.delayPeriod.isZero()) {
      writer.uint32(32).uint64(message.delayPeriod);
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgConnectionOpenInit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgConnectionOpenInit } as MsgConnectionOpenInit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 3:
          message.version = Version.decode(reader, reader.uint32());
          break;
        case 4:
          message.delayPeriod = reader.uint64() as Long;
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

  fromJSON(object: any): MsgConnectionOpenInit {
    const message = { ...baseMsgConnectionOpenInit } as MsgConnectionOpenInit;
    message.clientId =
      object.clientId !== undefined && object.clientId !== null
        ? String(object.clientId)
        : "";
    message.counterparty =
      object.counterparty !== undefined && object.counterparty !== null
        ? Counterparty.fromJSON(object.counterparty)
        : undefined;
    message.version =
      object.version !== undefined && object.version !== null
        ? Version.fromJSON(object.version)
        : undefined;
    message.delayPeriod =
      object.delayPeriod !== undefined && object.delayPeriod !== null
        ? Long.fromString(object.delayPeriod)
        : Long.UZERO;
    message.signer =
      object.signer !== undefined && object.signer !== null
        ? String(object.signer)
        : "";
    return message;
  },

  toJSON(message: MsgConnectionOpenInit): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.counterparty !== undefined &&
      (obj.counterparty = message.counterparty
        ? Counterparty.toJSON(message.counterparty)
        : undefined);
    message.version !== undefined &&
      (obj.version = message.version
        ? Version.toJSON(message.version)
        : undefined);
    message.delayPeriod !== undefined &&
      (obj.delayPeriod = (message.delayPeriod || Long.UZERO).toString());
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgConnectionOpenInit>
  ): MsgConnectionOpenInit {
    const message = { ...baseMsgConnectionOpenInit } as MsgConnectionOpenInit;
    message.clientId = object.clientId ?? "";
    message.counterparty =
      object.counterparty !== undefined && object.counterparty !== null
        ? Counterparty.fromPartial(object.counterparty)
        : undefined;
    message.version =
      object.version !== undefined && object.version !== null
        ? Version.fromPartial(object.version)
        : undefined;
    message.delayPeriod =
      object.delayPeriod !== undefined && object.delayPeriod !== null
        ? Long.fromValue(object.delayPeriod)
        : Long.UZERO;
    message.signer = object.signer ?? "";
    return message;
  },
};

const baseMsgConnectionOpenInitResponse: object = {};

export const MsgConnectionOpenInitResponse = {
  encode(
    _: MsgConnectionOpenInitResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgConnectionOpenInitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgConnectionOpenInitResponse,
    } as MsgConnectionOpenInitResponse;
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

  fromJSON(_: any): MsgConnectionOpenInitResponse {
    const message = {
      ...baseMsgConnectionOpenInitResponse,
    } as MsgConnectionOpenInitResponse;
    return message;
  },

  toJSON(_: MsgConnectionOpenInitResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgConnectionOpenInitResponse>
  ): MsgConnectionOpenInitResponse {
    const message = {
      ...baseMsgConnectionOpenInitResponse,
    } as MsgConnectionOpenInitResponse;
    return message;
  },
};

const baseMsgConnectionOpenTry: object = {
  clientId: "",
  previousConnectionId: "",
  delayPeriod: Long.UZERO,
  signer: "",
};

export const MsgConnectionOpenTry = {
  encode(
    message: MsgConnectionOpenTry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.previousConnectionId !== "") {
      writer.uint32(18).string(message.previousConnectionId);
    }
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(26).fork()).ldelim();
    }
    if (message.counterparty !== undefined) {
      Counterparty.encode(
        message.counterparty,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (!message.delayPeriod.isZero()) {
      writer.uint32(40).uint64(message.delayPeriod);
    }
    for (const v of message.counterpartyVersions) {
      Version.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(58).fork()).ldelim();
    }
    if (message.proofInit.length !== 0) {
      writer.uint32(66).bytes(message.proofInit);
    }
    if (message.proofClient.length !== 0) {
      writer.uint32(74).bytes(message.proofClient);
    }
    if (message.proofConsensus.length !== 0) {
      writer.uint32(82).bytes(message.proofConsensus);
    }
    if (message.consensusHeight !== undefined) {
      Height.encode(message.consensusHeight, writer.uint32(90).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(98).string(message.signer);
    }
    if (message.hostConsensusStateProof.length !== 0) {
      writer.uint32(106).bytes(message.hostConsensusStateProof);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgConnectionOpenTry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgConnectionOpenTry } as MsgConnectionOpenTry;
    message.counterpartyVersions = [];
    message.proofInit = new Uint8Array();
    message.proofClient = new Uint8Array();
    message.proofConsensus = new Uint8Array();
    message.hostConsensusStateProof = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.previousConnectionId = reader.string();
          break;
        case 3:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 5:
          message.delayPeriod = reader.uint64() as Long;
          break;
        case 6:
          message.counterpartyVersions.push(
            Version.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 8:
          message.proofInit = reader.bytes();
          break;
        case 9:
          message.proofClient = reader.bytes();
          break;
        case 10:
          message.proofConsensus = reader.bytes();
          break;
        case 11:
          message.consensusHeight = Height.decode(reader, reader.uint32());
          break;
        case 12:
          message.signer = reader.string();
          break;
        case 13:
          message.hostConsensusStateProof = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgConnectionOpenTry {
    const message = { ...baseMsgConnectionOpenTry } as MsgConnectionOpenTry;
    message.clientId =
      object.clientId !== undefined && object.clientId !== null
        ? String(object.clientId)
        : "";
    message.previousConnectionId =
      object.previousConnectionId !== undefined &&
      object.previousConnectionId !== null
        ? String(object.previousConnectionId)
        : "";
    message.clientState =
      object.clientState !== undefined && object.clientState !== null
        ? Any.fromJSON(object.clientState)
        : undefined;
    message.counterparty =
      object.counterparty !== undefined && object.counterparty !== null
        ? Counterparty.fromJSON(object.counterparty)
        : undefined;
    message.delayPeriod =
      object.delayPeriod !== undefined && object.delayPeriod !== null
        ? Long.fromString(object.delayPeriod)
        : Long.UZERO;
    message.counterpartyVersions = (object.counterpartyVersions ?? []).map(
      (e: any) => Version.fromJSON(e)
    );
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromJSON(object.proofHeight)
        : undefined;
    message.proofInit =
      object.proofInit !== undefined && object.proofInit !== null
        ? bytesFromBase64(object.proofInit)
        : new Uint8Array();
    message.proofClient =
      object.proofClient !== undefined && object.proofClient !== null
        ? bytesFromBase64(object.proofClient)
        : new Uint8Array();
    message.proofConsensus =
      object.proofConsensus !== undefined && object.proofConsensus !== null
        ? bytesFromBase64(object.proofConsensus)
        : new Uint8Array();
    message.consensusHeight =
      object.consensusHeight !== undefined && object.consensusHeight !== null
        ? Height.fromJSON(object.consensusHeight)
        : undefined;
    message.signer =
      object.signer !== undefined && object.signer !== null
        ? String(object.signer)
        : "";
    message.hostConsensusStateProof =
      object.hostConsensusStateProof !== undefined &&
      object.hostConsensusStateProof !== null
        ? bytesFromBase64(object.hostConsensusStateProof)
        : new Uint8Array();
    return message;
  },

  toJSON(message: MsgConnectionOpenTry): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.previousConnectionId !== undefined &&
      (obj.previousConnectionId = message.previousConnectionId);
    message.clientState !== undefined &&
      (obj.clientState = message.clientState
        ? Any.toJSON(message.clientState)
        : undefined);
    message.counterparty !== undefined &&
      (obj.counterparty = message.counterparty
        ? Counterparty.toJSON(message.counterparty)
        : undefined);
    message.delayPeriod !== undefined &&
      (obj.delayPeriod = (message.delayPeriod || Long.UZERO).toString());
    if (message.counterpartyVersions) {
      obj.counterpartyVersions = message.counterpartyVersions.map((e) =>
        e ? Version.toJSON(e) : undefined
      );
    } else {
      obj.counterpartyVersions = [];
    }
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight
        ? Height.toJSON(message.proofHeight)
        : undefined);
    message.proofInit !== undefined &&
      (obj.proofInit = base64FromBytes(
        message.proofInit !== undefined ? message.proofInit : new Uint8Array()
      ));
    message.proofClient !== undefined &&
      (obj.proofClient = base64FromBytes(
        message.proofClient !== undefined
          ? message.proofClient
          : new Uint8Array()
      ));
    message.proofConsensus !== undefined &&
      (obj.proofConsensus = base64FromBytes(
        message.proofConsensus !== undefined
          ? message.proofConsensus
          : new Uint8Array()
      ));
    message.consensusHeight !== undefined &&
      (obj.consensusHeight = message.consensusHeight
        ? Height.toJSON(message.consensusHeight)
        : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    message.hostConsensusStateProof !== undefined &&
      (obj.hostConsensusStateProof = base64FromBytes(
        message.hostConsensusStateProof !== undefined
          ? message.hostConsensusStateProof
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgConnectionOpenTry>): MsgConnectionOpenTry {
    const message = { ...baseMsgConnectionOpenTry } as MsgConnectionOpenTry;
    message.clientId = object.clientId ?? "";
    message.previousConnectionId = object.previousConnectionId ?? "";
    message.clientState =
      object.clientState !== undefined && object.clientState !== null
        ? Any.fromPartial(object.clientState)
        : undefined;
    message.counterparty =
      object.counterparty !== undefined && object.counterparty !== null
        ? Counterparty.fromPartial(object.counterparty)
        : undefined;
    message.delayPeriod =
      object.delayPeriod !== undefined && object.delayPeriod !== null
        ? Long.fromValue(object.delayPeriod)
        : Long.UZERO;
    message.counterpartyVersions = (object.counterpartyVersions ?? []).map(
      (e) => Version.fromPartial(e)
    );
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    message.proofInit = object.proofInit ?? new Uint8Array();
    message.proofClient = object.proofClient ?? new Uint8Array();
    message.proofConsensus = object.proofConsensus ?? new Uint8Array();
    message.consensusHeight =
      object.consensusHeight !== undefined && object.consensusHeight !== null
        ? Height.fromPartial(object.consensusHeight)
        : undefined;
    message.signer = object.signer ?? "";
    message.hostConsensusStateProof =
      object.hostConsensusStateProof ?? new Uint8Array();
    return message;
  },
};

const baseMsgConnectionOpenTryResponse: object = {};

export const MsgConnectionOpenTryResponse = {
  encode(
    _: MsgConnectionOpenTryResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgConnectionOpenTryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgConnectionOpenTryResponse,
    } as MsgConnectionOpenTryResponse;
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

  fromJSON(_: any): MsgConnectionOpenTryResponse {
    const message = {
      ...baseMsgConnectionOpenTryResponse,
    } as MsgConnectionOpenTryResponse;
    return message;
  },

  toJSON(_: MsgConnectionOpenTryResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgConnectionOpenTryResponse>
  ): MsgConnectionOpenTryResponse {
    const message = {
      ...baseMsgConnectionOpenTryResponse,
    } as MsgConnectionOpenTryResponse;
    return message;
  },
};

const baseMsgConnectionOpenAck: object = {
  connectionId: "",
  counterpartyConnectionId: "",
  signer: "",
};

export const MsgConnectionOpenAck = {
  encode(
    message: MsgConnectionOpenAck,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.counterpartyConnectionId !== "") {
      writer.uint32(18).string(message.counterpartyConnectionId);
    }
    if (message.version !== undefined) {
      Version.encode(message.version, writer.uint32(26).fork()).ldelim();
    }
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(34).fork()).ldelim();
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(42).fork()).ldelim();
    }
    if (message.proofTry.length !== 0) {
      writer.uint32(50).bytes(message.proofTry);
    }
    if (message.proofClient.length !== 0) {
      writer.uint32(58).bytes(message.proofClient);
    }
    if (message.proofConsensus.length !== 0) {
      writer.uint32(66).bytes(message.proofConsensus);
    }
    if (message.consensusHeight !== undefined) {
      Height.encode(message.consensusHeight, writer.uint32(74).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(82).string(message.signer);
    }
    if (message.hostConsensusStateProof.length !== 0) {
      writer.uint32(90).bytes(message.hostConsensusStateProof);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgConnectionOpenAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgConnectionOpenAck } as MsgConnectionOpenAck;
    message.proofTry = new Uint8Array();
    message.proofClient = new Uint8Array();
    message.proofConsensus = new Uint8Array();
    message.hostConsensusStateProof = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.counterpartyConnectionId = reader.string();
          break;
        case 3:
          message.version = Version.decode(reader, reader.uint32());
          break;
        case 4:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        case 5:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 6:
          message.proofTry = reader.bytes();
          break;
        case 7:
          message.proofClient = reader.bytes();
          break;
        case 8:
          message.proofConsensus = reader.bytes();
          break;
        case 9:
          message.consensusHeight = Height.decode(reader, reader.uint32());
          break;
        case 10:
          message.signer = reader.string();
          break;
        case 11:
          message.hostConsensusStateProof = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgConnectionOpenAck {
    const message = { ...baseMsgConnectionOpenAck } as MsgConnectionOpenAck;
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
        : "";
    message.counterpartyConnectionId =
      object.counterpartyConnectionId !== undefined &&
      object.counterpartyConnectionId !== null
        ? String(object.counterpartyConnectionId)
        : "";
    message.version =
      object.version !== undefined && object.version !== null
        ? Version.fromJSON(object.version)
        : undefined;
    message.clientState =
      object.clientState !== undefined && object.clientState !== null
        ? Any.fromJSON(object.clientState)
        : undefined;
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromJSON(object.proofHeight)
        : undefined;
    message.proofTry =
      object.proofTry !== undefined && object.proofTry !== null
        ? bytesFromBase64(object.proofTry)
        : new Uint8Array();
    message.proofClient =
      object.proofClient !== undefined && object.proofClient !== null
        ? bytesFromBase64(object.proofClient)
        : new Uint8Array();
    message.proofConsensus =
      object.proofConsensus !== undefined && object.proofConsensus !== null
        ? bytesFromBase64(object.proofConsensus)
        : new Uint8Array();
    message.consensusHeight =
      object.consensusHeight !== undefined && object.consensusHeight !== null
        ? Height.fromJSON(object.consensusHeight)
        : undefined;
    message.signer =
      object.signer !== undefined && object.signer !== null
        ? String(object.signer)
        : "";
    message.hostConsensusStateProof =
      object.hostConsensusStateProof !== undefined &&
      object.hostConsensusStateProof !== null
        ? bytesFromBase64(object.hostConsensusStateProof)
        : new Uint8Array();
    return message;
  },

  toJSON(message: MsgConnectionOpenAck): unknown {
    const obj: any = {};
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.counterpartyConnectionId !== undefined &&
      (obj.counterpartyConnectionId = message.counterpartyConnectionId);
    message.version !== undefined &&
      (obj.version = message.version
        ? Version.toJSON(message.version)
        : undefined);
    message.clientState !== undefined &&
      (obj.clientState = message.clientState
        ? Any.toJSON(message.clientState)
        : undefined);
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight
        ? Height.toJSON(message.proofHeight)
        : undefined);
    message.proofTry !== undefined &&
      (obj.proofTry = base64FromBytes(
        message.proofTry !== undefined ? message.proofTry : new Uint8Array()
      ));
    message.proofClient !== undefined &&
      (obj.proofClient = base64FromBytes(
        message.proofClient !== undefined
          ? message.proofClient
          : new Uint8Array()
      ));
    message.proofConsensus !== undefined &&
      (obj.proofConsensus = base64FromBytes(
        message.proofConsensus !== undefined
          ? message.proofConsensus
          : new Uint8Array()
      ));
    message.consensusHeight !== undefined &&
      (obj.consensusHeight = message.consensusHeight
        ? Height.toJSON(message.consensusHeight)
        : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    message.hostConsensusStateProof !== undefined &&
      (obj.hostConsensusStateProof = base64FromBytes(
        message.hostConsensusStateProof !== undefined
          ? message.hostConsensusStateProof
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgConnectionOpenAck>): MsgConnectionOpenAck {
    const message = { ...baseMsgConnectionOpenAck } as MsgConnectionOpenAck;
    message.connectionId = object.connectionId ?? "";
    message.counterpartyConnectionId = object.counterpartyConnectionId ?? "";
    message.version =
      object.version !== undefined && object.version !== null
        ? Version.fromPartial(object.version)
        : undefined;
    message.clientState =
      object.clientState !== undefined && object.clientState !== null
        ? Any.fromPartial(object.clientState)
        : undefined;
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    message.proofTry = object.proofTry ?? new Uint8Array();
    message.proofClient = object.proofClient ?? new Uint8Array();
    message.proofConsensus = object.proofConsensus ?? new Uint8Array();
    message.consensusHeight =
      object.consensusHeight !== undefined && object.consensusHeight !== null
        ? Height.fromPartial(object.consensusHeight)
        : undefined;
    message.signer = object.signer ?? "";
    message.hostConsensusStateProof =
      object.hostConsensusStateProof ?? new Uint8Array();
    return message;
  },
};

const baseMsgConnectionOpenAckResponse: object = {};

export const MsgConnectionOpenAckResponse = {
  encode(
    _: MsgConnectionOpenAckResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgConnectionOpenAckResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgConnectionOpenAckResponse,
    } as MsgConnectionOpenAckResponse;
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

  fromJSON(_: any): MsgConnectionOpenAckResponse {
    const message = {
      ...baseMsgConnectionOpenAckResponse,
    } as MsgConnectionOpenAckResponse;
    return message;
  },

  toJSON(_: MsgConnectionOpenAckResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgConnectionOpenAckResponse>
  ): MsgConnectionOpenAckResponse {
    const message = {
      ...baseMsgConnectionOpenAckResponse,
    } as MsgConnectionOpenAckResponse;
    return message;
  },
};

const baseMsgConnectionOpenConfirm: object = { connectionId: "", signer: "" };

export const MsgConnectionOpenConfirm = {
  encode(
    message: MsgConnectionOpenConfirm,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.proofAck.length !== 0) {
      writer.uint32(18).bytes(message.proofAck);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgConnectionOpenConfirm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgConnectionOpenConfirm,
    } as MsgConnectionOpenConfirm;
    message.proofAck = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.proofAck = reader.bytes();
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

  fromJSON(object: any): MsgConnectionOpenConfirm {
    const message = {
      ...baseMsgConnectionOpenConfirm,
    } as MsgConnectionOpenConfirm;
    message.connectionId =
      object.connectionId !== undefined && object.connectionId !== null
        ? String(object.connectionId)
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

  toJSON(message: MsgConnectionOpenConfirm): unknown {
    const obj: any = {};
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
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
    object: DeepPartial<MsgConnectionOpenConfirm>
  ): MsgConnectionOpenConfirm {
    const message = {
      ...baseMsgConnectionOpenConfirm,
    } as MsgConnectionOpenConfirm;
    message.connectionId = object.connectionId ?? "";
    message.proofAck = object.proofAck ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

const baseMsgConnectionOpenConfirmResponse: object = {};

export const MsgConnectionOpenConfirmResponse = {
  encode(
    _: MsgConnectionOpenConfirmResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgConnectionOpenConfirmResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgConnectionOpenConfirmResponse,
    } as MsgConnectionOpenConfirmResponse;
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

  fromJSON(_: any): MsgConnectionOpenConfirmResponse {
    const message = {
      ...baseMsgConnectionOpenConfirmResponse,
    } as MsgConnectionOpenConfirmResponse;
    return message;
  },

  toJSON(_: MsgConnectionOpenConfirmResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgConnectionOpenConfirmResponse>
  ): MsgConnectionOpenConfirmResponse {
    const message = {
      ...baseMsgConnectionOpenConfirmResponse,
    } as MsgConnectionOpenConfirmResponse;
    return message;
  },
};

const baseMsgUpdateParams: object = { signer: "" };

export const MsgUpdateParams = {
  encode(
    message: MsgUpdateParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
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
          message.signer = reader.string();
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
    message.signer =
      object.signer !== undefined && object.signer !== null
        ? String(object.signer)
        : "";
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromJSON(object.params)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    message.signer = object.signer ?? "";
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

/** Msg defines the ibc/connection Msg service. */
export interface Msg {
  /** ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit. */
  ConnectionOpenInit(
    request: MsgConnectionOpenInit
  ): Promise<MsgConnectionOpenInitResponse>;
  /** ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry. */
  ConnectionOpenTry(
    request: MsgConnectionOpenTry
  ): Promise<MsgConnectionOpenTryResponse>;
  /** ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck. */
  ConnectionOpenAck(
    request: MsgConnectionOpenAck
  ): Promise<MsgConnectionOpenAckResponse>;
  /**
   * ConnectionOpenConfirm defines a rpc handler method for
   * MsgConnectionOpenConfirm.
   */
  ConnectionOpenConfirm(
    request: MsgConnectionOpenConfirm
  ): Promise<MsgConnectionOpenConfirmResponse>;
  /**
   * UpdateConnectionParams defines a rpc handler method for
   * MsgUpdateParams.
   */
  UpdateConnectionParams(
    request: MsgUpdateParams
  ): Promise<MsgUpdateParamsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ConnectionOpenInit = this.ConnectionOpenInit.bind(this);
    this.ConnectionOpenTry = this.ConnectionOpenTry.bind(this);
    this.ConnectionOpenAck = this.ConnectionOpenAck.bind(this);
    this.ConnectionOpenConfirm = this.ConnectionOpenConfirm.bind(this);
    this.UpdateConnectionParams = this.UpdateConnectionParams.bind(this);
  }
  ConnectionOpenInit(
    request: MsgConnectionOpenInit
  ): Promise<MsgConnectionOpenInitResponse> {
    const data = MsgConnectionOpenInit.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.connection.v1.Msg",
      "ConnectionOpenInit",
      data
    );
    return promise.then((data) =>
      MsgConnectionOpenInitResponse.decode(new _m0.Reader(data))
    );
  }

  ConnectionOpenTry(
    request: MsgConnectionOpenTry
  ): Promise<MsgConnectionOpenTryResponse> {
    const data = MsgConnectionOpenTry.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.connection.v1.Msg",
      "ConnectionOpenTry",
      data
    );
    return promise.then((data) =>
      MsgConnectionOpenTryResponse.decode(new _m0.Reader(data))
    );
  }

  ConnectionOpenAck(
    request: MsgConnectionOpenAck
  ): Promise<MsgConnectionOpenAckResponse> {
    const data = MsgConnectionOpenAck.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.connection.v1.Msg",
      "ConnectionOpenAck",
      data
    );
    return promise.then((data) =>
      MsgConnectionOpenAckResponse.decode(new _m0.Reader(data))
    );
  }

  ConnectionOpenConfirm(
    request: MsgConnectionOpenConfirm
  ): Promise<MsgConnectionOpenConfirmResponse> {
    const data = MsgConnectionOpenConfirm.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.connection.v1.Msg",
      "ConnectionOpenConfirm",
      data
    );
    return promise.then((data) =>
      MsgConnectionOpenConfirmResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateConnectionParams(
    request: MsgUpdateParams
  ): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.connection.v1.Msg",
      "UpdateConnectionParams",
      data
    );
    return promise.then((data) =>
      MsgUpdateParamsResponse.decode(new _m0.Reader(data))
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
