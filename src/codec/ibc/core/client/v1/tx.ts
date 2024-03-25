/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";
import { Plan } from "../../../../cosmos/upgrade/v1beta1/upgrade";
import { Params } from "./client";

export const protobufPackage = "ibc.core.client.v1";

/** MsgCreateClient defines a message to create an IBC client */
export interface MsgCreateClient {
  /** light client state */
  clientState?: Any;
  /**
   * consensus state associated with the client that corresponds to a given
   * height.
   */
  consensusState?: Any;
  /** signer address */
  signer: string;
}

/** MsgCreateClientResponse defines the Msg/CreateClient response type. */
export interface MsgCreateClientResponse {}

/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given client message.
 */
export interface MsgUpdateClient {
  /** client unique identifier */
  clientId: string;
  /** client message to update the light client */
  clientMessage?: Any;
  /** signer address */
  signer: string;
}

/** MsgUpdateClientResponse defines the Msg/UpdateClient response type. */
export interface MsgUpdateClientResponse {}

/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 */
export interface MsgUpgradeClient {
  /** client unique identifier */
  clientId: string;
  /** upgraded client state */
  clientState?: Any;
  /**
   * upgraded consensus state, only contains enough information to serve as a
   * basis of trust in update logic
   */
  consensusState?: Any;
  /** proof that old chain committed to new client */
  proofUpgradeClient: Uint8Array;
  /** proof that old chain committed to new consensus state */
  proofUpgradeConsensusState: Uint8Array;
  /** signer address */
  signer: string;
}

/** MsgUpgradeClientResponse defines the Msg/UpgradeClient response type. */
export interface MsgUpgradeClientResponse {}

/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 * This message has been deprecated. Use MsgUpdateClient instead.
 *
 * @deprecated
 */
export interface MsgSubmitMisbehaviour {
  /** client unique identifier */
  clientId: string;
  /** misbehaviour used for freezing the light client */
  misbehaviour?: Any;
  /** signer address */
  signer: string;
}

/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 */
export interface MsgSubmitMisbehaviourResponse {}

/** MsgRecoverClient defines the message used to recover a frozen or expired client. */
export interface MsgRecoverClient {
  /** the client identifier for the client to be updated if the proposal passes */
  subjectClientId: string;
  /**
   * the substitute client identifier for the client which will replace the subject
   * client
   */
  substituteClientId: string;
  /** signer address */
  signer: string;
}

/** MsgRecoverClientResponse defines the Msg/RecoverClient response type. */
export interface MsgRecoverClientResponse {}

/** MsgIBCSoftwareUpgrade defines the message used to schedule an upgrade of an IBC client using a v1 governance proposal */
export interface MsgIBCSoftwareUpgrade {
  plan?: Plan;
  /**
   * An UpgradedClientState must be provided to perform an IBC breaking upgrade.
   * This will make the chain commit to the correct upgraded (self) client state
   * before the upgrade occurs, so that connecting chains can verify that the
   * new upgraded client is valid by verifying a proof on the previous version
   * of the chain. This will allow IBC connections to persist smoothly across
   * planned chain upgrades. Correspondingly, the UpgradedClientState field has been
   * deprecated in the Cosmos SDK to allow for this logic to exist solely in
   * the 02-client module.
   */
  upgradedClientState?: Any;
  /** signer address */
  signer: string;
}

/** MsgIBCSoftwareUpgradeResponse defines the Msg/IBCSoftwareUpgrade response type. */
export interface MsgIBCSoftwareUpgradeResponse {}

/** MsgUpdateParams defines the sdk.Msg type to update the client parameters. */
export interface MsgUpdateParams {
  /** signer address */
  signer: string;
  /**
   * params defines the client parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params?: Params;
}

/** MsgUpdateParamsResponse defines the MsgUpdateParams response type. */
export interface MsgUpdateParamsResponse {}

const baseMsgCreateClient: object = { signer: "" };

export const MsgCreateClient = {
  encode(
    message: MsgCreateClient,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(10).fork()).ldelim();
    }
    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClient {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateClient } as MsgCreateClient;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.consensusState = Any.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgCreateClient {
    const message = { ...baseMsgCreateClient } as MsgCreateClient;
    message.clientState =
      object.clientState !== undefined && object.clientState !== null
        ? Any.fromJSON(object.clientState)
        : undefined;
    message.consensusState =
      object.consensusState !== undefined && object.consensusState !== null
        ? Any.fromJSON(object.consensusState)
        : undefined;
    message.signer =
      object.signer !== undefined && object.signer !== null
        ? String(object.signer)
        : "";
    return message;
  },

  toJSON(message: MsgCreateClient): unknown {
    const obj: any = {};
    message.clientState !== undefined &&
      (obj.clientState = message.clientState
        ? Any.toJSON(message.clientState)
        : undefined);
    message.consensusState !== undefined &&
      (obj.consensusState = message.consensusState
        ? Any.toJSON(message.consensusState)
        : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateClient>): MsgCreateClient {
    const message = { ...baseMsgCreateClient } as MsgCreateClient;
    message.clientState =
      object.clientState !== undefined && object.clientState !== null
        ? Any.fromPartial(object.clientState)
        : undefined;
    message.consensusState =
      object.consensusState !== undefined && object.consensusState !== null
        ? Any.fromPartial(object.consensusState)
        : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

const baseMsgCreateClientResponse: object = {};

export const MsgCreateClientResponse = {
  encode(
    _: MsgCreateClientResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateClientResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateClientResponse,
    } as MsgCreateClientResponse;
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

  fromJSON(_: any): MsgCreateClientResponse {
    const message = {
      ...baseMsgCreateClientResponse,
    } as MsgCreateClientResponse;
    return message;
  },

  toJSON(_: MsgCreateClientResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateClientResponse>
  ): MsgCreateClientResponse {
    const message = {
      ...baseMsgCreateClientResponse,
    } as MsgCreateClientResponse;
    return message;
  },
};

const baseMsgUpdateClient: object = { clientId: "", signer: "" };

export const MsgUpdateClient = {
  encode(
    message: MsgUpdateClient,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.clientMessage !== undefined) {
      Any.encode(message.clientMessage, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClient {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateClient } as MsgUpdateClient;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.clientMessage = Any.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgUpdateClient {
    const message = { ...baseMsgUpdateClient } as MsgUpdateClient;
    message.clientId =
      object.clientId !== undefined && object.clientId !== null
        ? String(object.clientId)
        : "";
    message.clientMessage =
      object.clientMessage !== undefined && object.clientMessage !== null
        ? Any.fromJSON(object.clientMessage)
        : undefined;
    message.signer =
      object.signer !== undefined && object.signer !== null
        ? String(object.signer)
        : "";
    return message;
  },

  toJSON(message: MsgUpdateClient): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.clientMessage !== undefined &&
      (obj.clientMessage = message.clientMessage
        ? Any.toJSON(message.clientMessage)
        : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateClient>): MsgUpdateClient {
    const message = { ...baseMsgUpdateClient } as MsgUpdateClient;
    message.clientId = object.clientId ?? "";
    message.clientMessage =
      object.clientMessage !== undefined && object.clientMessage !== null
        ? Any.fromPartial(object.clientMessage)
        : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

const baseMsgUpdateClientResponse: object = {};

export const MsgUpdateClientResponse = {
  encode(
    _: MsgUpdateClientResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateClientResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateClientResponse,
    } as MsgUpdateClientResponse;
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

  fromJSON(_: any): MsgUpdateClientResponse {
    const message = {
      ...baseMsgUpdateClientResponse,
    } as MsgUpdateClientResponse;
    return message;
  },

  toJSON(_: MsgUpdateClientResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateClientResponse>
  ): MsgUpdateClientResponse {
    const message = {
      ...baseMsgUpdateClientResponse,
    } as MsgUpdateClientResponse;
    return message;
  },
};

const baseMsgUpgradeClient: object = { clientId: "", signer: "" };

export const MsgUpgradeClient = {
  encode(
    message: MsgUpgradeClient,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
    }
    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(26).fork()).ldelim();
    }
    if (message.proofUpgradeClient.length !== 0) {
      writer.uint32(34).bytes(message.proofUpgradeClient);
    }
    if (message.proofUpgradeConsensusState.length !== 0) {
      writer.uint32(42).bytes(message.proofUpgradeConsensusState);
    }
    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpgradeClient {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpgradeClient } as MsgUpgradeClient;
    message.proofUpgradeClient = new Uint8Array();
    message.proofUpgradeConsensusState = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.consensusState = Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.proofUpgradeClient = reader.bytes();
          break;
        case 5:
          message.proofUpgradeConsensusState = reader.bytes();
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

  fromJSON(object: any): MsgUpgradeClient {
    const message = { ...baseMsgUpgradeClient } as MsgUpgradeClient;
    message.clientId =
      object.clientId !== undefined && object.clientId !== null
        ? String(object.clientId)
        : "";
    message.clientState =
      object.clientState !== undefined && object.clientState !== null
        ? Any.fromJSON(object.clientState)
        : undefined;
    message.consensusState =
      object.consensusState !== undefined && object.consensusState !== null
        ? Any.fromJSON(object.consensusState)
        : undefined;
    message.proofUpgradeClient =
      object.proofUpgradeClient !== undefined &&
      object.proofUpgradeClient !== null
        ? bytesFromBase64(object.proofUpgradeClient)
        : new Uint8Array();
    message.proofUpgradeConsensusState =
      object.proofUpgradeConsensusState !== undefined &&
      object.proofUpgradeConsensusState !== null
        ? bytesFromBase64(object.proofUpgradeConsensusState)
        : new Uint8Array();
    message.signer =
      object.signer !== undefined && object.signer !== null
        ? String(object.signer)
        : "";
    return message;
  },

  toJSON(message: MsgUpgradeClient): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.clientState !== undefined &&
      (obj.clientState = message.clientState
        ? Any.toJSON(message.clientState)
        : undefined);
    message.consensusState !== undefined &&
      (obj.consensusState = message.consensusState
        ? Any.toJSON(message.consensusState)
        : undefined);
    message.proofUpgradeClient !== undefined &&
      (obj.proofUpgradeClient = base64FromBytes(
        message.proofUpgradeClient !== undefined
          ? message.proofUpgradeClient
          : new Uint8Array()
      ));
    message.proofUpgradeConsensusState !== undefined &&
      (obj.proofUpgradeConsensusState = base64FromBytes(
        message.proofUpgradeConsensusState !== undefined
          ? message.proofUpgradeConsensusState
          : new Uint8Array()
      ));
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpgradeClient>): MsgUpgradeClient {
    const message = { ...baseMsgUpgradeClient } as MsgUpgradeClient;
    message.clientId = object.clientId ?? "";
    message.clientState =
      object.clientState !== undefined && object.clientState !== null
        ? Any.fromPartial(object.clientState)
        : undefined;
    message.consensusState =
      object.consensusState !== undefined && object.consensusState !== null
        ? Any.fromPartial(object.consensusState)
        : undefined;
    message.proofUpgradeClient = object.proofUpgradeClient ?? new Uint8Array();
    message.proofUpgradeConsensusState =
      object.proofUpgradeConsensusState ?? new Uint8Array();
    message.signer = object.signer ?? "";
    return message;
  },
};

const baseMsgUpgradeClientResponse: object = {};

export const MsgUpgradeClientResponse = {
  encode(
    _: MsgUpgradeClientResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpgradeClientResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpgradeClientResponse,
    } as MsgUpgradeClientResponse;
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

  fromJSON(_: any): MsgUpgradeClientResponse {
    const message = {
      ...baseMsgUpgradeClientResponse,
    } as MsgUpgradeClientResponse;
    return message;
  },

  toJSON(_: MsgUpgradeClientResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpgradeClientResponse>
  ): MsgUpgradeClientResponse {
    const message = {
      ...baseMsgUpgradeClientResponse,
    } as MsgUpgradeClientResponse;
    return message;
  },
};

const baseMsgSubmitMisbehaviour: object = { clientId: "", signer: "" };

export const MsgSubmitMisbehaviour = {
  encode(
    message: MsgSubmitMisbehaviour,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.misbehaviour !== undefined) {
      Any.encode(message.misbehaviour, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSubmitMisbehaviour {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSubmitMisbehaviour } as MsgSubmitMisbehaviour;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.misbehaviour = Any.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgSubmitMisbehaviour {
    const message = { ...baseMsgSubmitMisbehaviour } as MsgSubmitMisbehaviour;
    message.clientId =
      object.clientId !== undefined && object.clientId !== null
        ? String(object.clientId)
        : "";
    message.misbehaviour =
      object.misbehaviour !== undefined && object.misbehaviour !== null
        ? Any.fromJSON(object.misbehaviour)
        : undefined;
    message.signer =
      object.signer !== undefined && object.signer !== null
        ? String(object.signer)
        : "";
    return message;
  },

  toJSON(message: MsgSubmitMisbehaviour): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.misbehaviour !== undefined &&
      (obj.misbehaviour = message.misbehaviour
        ? Any.toJSON(message.misbehaviour)
        : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSubmitMisbehaviour>
  ): MsgSubmitMisbehaviour {
    const message = { ...baseMsgSubmitMisbehaviour } as MsgSubmitMisbehaviour;
    message.clientId = object.clientId ?? "";
    message.misbehaviour =
      object.misbehaviour !== undefined && object.misbehaviour !== null
        ? Any.fromPartial(object.misbehaviour)
        : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

const baseMsgSubmitMisbehaviourResponse: object = {};

export const MsgSubmitMisbehaviourResponse = {
  encode(
    _: MsgSubmitMisbehaviourResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSubmitMisbehaviourResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSubmitMisbehaviourResponse,
    } as MsgSubmitMisbehaviourResponse;
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

  fromJSON(_: any): MsgSubmitMisbehaviourResponse {
    const message = {
      ...baseMsgSubmitMisbehaviourResponse,
    } as MsgSubmitMisbehaviourResponse;
    return message;
  },

  toJSON(_: MsgSubmitMisbehaviourResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSubmitMisbehaviourResponse>
  ): MsgSubmitMisbehaviourResponse {
    const message = {
      ...baseMsgSubmitMisbehaviourResponse,
    } as MsgSubmitMisbehaviourResponse;
    return message;
  },
};

const baseMsgRecoverClient: object = {
  subjectClientId: "",
  substituteClientId: "",
  signer: "",
};

export const MsgRecoverClient = {
  encode(
    message: MsgRecoverClient,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subjectClientId !== "") {
      writer.uint32(10).string(message.subjectClientId);
    }
    if (message.substituteClientId !== "") {
      writer.uint32(18).string(message.substituteClientId);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecoverClient {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRecoverClient } as MsgRecoverClient;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subjectClientId = reader.string();
          break;
        case 2:
          message.substituteClientId = reader.string();
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

  fromJSON(object: any): MsgRecoverClient {
    const message = { ...baseMsgRecoverClient } as MsgRecoverClient;
    message.subjectClientId =
      object.subjectClientId !== undefined && object.subjectClientId !== null
        ? String(object.subjectClientId)
        : "";
    message.substituteClientId =
      object.substituteClientId !== undefined &&
      object.substituteClientId !== null
        ? String(object.substituteClientId)
        : "";
    message.signer =
      object.signer !== undefined && object.signer !== null
        ? String(object.signer)
        : "";
    return message;
  },

  toJSON(message: MsgRecoverClient): unknown {
    const obj: any = {};
    message.subjectClientId !== undefined &&
      (obj.subjectClientId = message.subjectClientId);
    message.substituteClientId !== undefined &&
      (obj.substituteClientId = message.substituteClientId);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRecoverClient>): MsgRecoverClient {
    const message = { ...baseMsgRecoverClient } as MsgRecoverClient;
    message.subjectClientId = object.subjectClientId ?? "";
    message.substituteClientId = object.substituteClientId ?? "";
    message.signer = object.signer ?? "";
    return message;
  },
};

const baseMsgRecoverClientResponse: object = {};

export const MsgRecoverClientResponse = {
  encode(
    _: MsgRecoverClientResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRecoverClientResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRecoverClientResponse,
    } as MsgRecoverClientResponse;
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

  fromJSON(_: any): MsgRecoverClientResponse {
    const message = {
      ...baseMsgRecoverClientResponse,
    } as MsgRecoverClientResponse;
    return message;
  },

  toJSON(_: MsgRecoverClientResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRecoverClientResponse>
  ): MsgRecoverClientResponse {
    const message = {
      ...baseMsgRecoverClientResponse,
    } as MsgRecoverClientResponse;
    return message;
  },
};

const baseMsgIBCSoftwareUpgrade: object = { signer: "" };

export const MsgIBCSoftwareUpgrade = {
  encode(
    message: MsgIBCSoftwareUpgrade,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
    }
    if (message.upgradedClientState !== undefined) {
      Any.encode(
        message.upgradedClientState,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgIBCSoftwareUpgrade {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgIBCSoftwareUpgrade } as MsgIBCSoftwareUpgrade;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.plan = Plan.decode(reader, reader.uint32());
          break;
        case 2:
          message.upgradedClientState = Any.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgIBCSoftwareUpgrade {
    const message = { ...baseMsgIBCSoftwareUpgrade } as MsgIBCSoftwareUpgrade;
    message.plan =
      object.plan !== undefined && object.plan !== null
        ? Plan.fromJSON(object.plan)
        : undefined;
    message.upgradedClientState =
      object.upgradedClientState !== undefined &&
      object.upgradedClientState !== null
        ? Any.fromJSON(object.upgradedClientState)
        : undefined;
    message.signer =
      object.signer !== undefined && object.signer !== null
        ? String(object.signer)
        : "";
    return message;
  },

  toJSON(message: MsgIBCSoftwareUpgrade): unknown {
    const obj: any = {};
    message.plan !== undefined &&
      (obj.plan = message.plan ? Plan.toJSON(message.plan) : undefined);
    message.upgradedClientState !== undefined &&
      (obj.upgradedClientState = message.upgradedClientState
        ? Any.toJSON(message.upgradedClientState)
        : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgIBCSoftwareUpgrade>
  ): MsgIBCSoftwareUpgrade {
    const message = { ...baseMsgIBCSoftwareUpgrade } as MsgIBCSoftwareUpgrade;
    message.plan =
      object.plan !== undefined && object.plan !== null
        ? Plan.fromPartial(object.plan)
        : undefined;
    message.upgradedClientState =
      object.upgradedClientState !== undefined &&
      object.upgradedClientState !== null
        ? Any.fromPartial(object.upgradedClientState)
        : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
};

const baseMsgIBCSoftwareUpgradeResponse: object = {};

export const MsgIBCSoftwareUpgradeResponse = {
  encode(
    _: MsgIBCSoftwareUpgradeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgIBCSoftwareUpgradeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgIBCSoftwareUpgradeResponse,
    } as MsgIBCSoftwareUpgradeResponse;
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

  fromJSON(_: any): MsgIBCSoftwareUpgradeResponse {
    const message = {
      ...baseMsgIBCSoftwareUpgradeResponse,
    } as MsgIBCSoftwareUpgradeResponse;
    return message;
  },

  toJSON(_: MsgIBCSoftwareUpgradeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgIBCSoftwareUpgradeResponse>
  ): MsgIBCSoftwareUpgradeResponse {
    const message = {
      ...baseMsgIBCSoftwareUpgradeResponse,
    } as MsgIBCSoftwareUpgradeResponse;
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

/** Msg defines the ibc/client Msg service. */
export interface Msg {
  /** CreateClient defines a rpc handler method for MsgCreateClient. */
  CreateClient(request: MsgCreateClient): Promise<MsgCreateClientResponse>;
  /** UpdateClient defines a rpc handler method for MsgUpdateClient. */
  UpdateClient(request: MsgUpdateClient): Promise<MsgUpdateClientResponse>;
  /** UpgradeClient defines a rpc handler method for MsgUpgradeClient. */
  UpgradeClient(request: MsgUpgradeClient): Promise<MsgUpgradeClientResponse>;
  /** SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour. */
  SubmitMisbehaviour(
    request: MsgSubmitMisbehaviour
  ): Promise<MsgSubmitMisbehaviourResponse>;
  /** RecoverClient defines a rpc handler method for MsgRecoverClient. */
  RecoverClient(request: MsgRecoverClient): Promise<MsgRecoverClientResponse>;
  /** IBCSoftwareUpgrade defines a rpc handler method for MsgIBCSoftwareUpgrade. */
  IBCSoftwareUpgrade(
    request: MsgIBCSoftwareUpgrade
  ): Promise<MsgIBCSoftwareUpgradeResponse>;
  /** UpdateClientParams defines a rpc handler method for MsgUpdateParams. */
  UpdateClientParams(
    request: MsgUpdateParams
  ): Promise<MsgUpdateParamsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateClient = this.CreateClient.bind(this);
    this.UpdateClient = this.UpdateClient.bind(this);
    this.UpgradeClient = this.UpgradeClient.bind(this);
    this.SubmitMisbehaviour = this.SubmitMisbehaviour.bind(this);
    this.RecoverClient = this.RecoverClient.bind(this);
    this.IBCSoftwareUpgrade = this.IBCSoftwareUpgrade.bind(this);
    this.UpdateClientParams = this.UpdateClientParams.bind(this);
  }
  CreateClient(request: MsgCreateClient): Promise<MsgCreateClientResponse> {
    const data = MsgCreateClient.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.client.v1.Msg",
      "CreateClient",
      data
    );
    return promise.then((data) =>
      MsgCreateClientResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateClient(request: MsgUpdateClient): Promise<MsgUpdateClientResponse> {
    const data = MsgUpdateClient.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.client.v1.Msg",
      "UpdateClient",
      data
    );
    return promise.then((data) =>
      MsgUpdateClientResponse.decode(new _m0.Reader(data))
    );
  }

  UpgradeClient(request: MsgUpgradeClient): Promise<MsgUpgradeClientResponse> {
    const data = MsgUpgradeClient.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.client.v1.Msg",
      "UpgradeClient",
      data
    );
    return promise.then((data) =>
      MsgUpgradeClientResponse.decode(new _m0.Reader(data))
    );
  }

  SubmitMisbehaviour(
    request: MsgSubmitMisbehaviour
  ): Promise<MsgSubmitMisbehaviourResponse> {
    const data = MsgSubmitMisbehaviour.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.client.v1.Msg",
      "SubmitMisbehaviour",
      data
    );
    return promise.then((data) =>
      MsgSubmitMisbehaviourResponse.decode(new _m0.Reader(data))
    );
  }

  RecoverClient(request: MsgRecoverClient): Promise<MsgRecoverClientResponse> {
    const data = MsgRecoverClient.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.client.v1.Msg",
      "RecoverClient",
      data
    );
    return promise.then((data) =>
      MsgRecoverClientResponse.decode(new _m0.Reader(data))
    );
  }

  IBCSoftwareUpgrade(
    request: MsgIBCSoftwareUpgrade
  ): Promise<MsgIBCSoftwareUpgradeResponse> {
    const data = MsgIBCSoftwareUpgrade.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.client.v1.Msg",
      "IBCSoftwareUpgrade",
      data
    );
    return promise.then((data) =>
      MsgIBCSoftwareUpgradeResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateClientParams(
    request: MsgUpdateParams
  ): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(
      "ibc.core.client.v1.Msg",
      "UpdateClientParams",
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
