/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { BridgeState, Connection, ControllerContracts, ExternalTokenMapping } from "./bridge";
import { Params } from "./params";

export const protobufPackage = "Switcheo.carbon.bridge";

/** GenesisState defines the bridge module's genesis state. */
export interface GenesisState {
  params?: Params;
  bridgeStates: BridgeState[];
  connections: Connection[];
  controllerContracts: ControllerContracts[];
  externalTokenMappings: ExternalTokenMapping[];
  relayers: string[];
  pendingActionKeys: Uint8Array[];
  pendingActions: Uint8Array[];
  /** inbound nonces already processed, one entry per stored partition of 64 */
  processedNonces: ProcessedNoncePartition[];
  /** inbound messages marked to be acknowledged as no-ops */
  skippedInboundMessages: SkippedInboundMessage[];
  /**
   * outbound token releases stay refused; a chain started from a genesis
   * without it allows them
   */
  withdrawalsFrozen: boolean;
  /**
   * open deploy requests a token-deployed callback must match, as raw store
   * keys and values
   */
  deployRequestKeys: Uint8Array[];
  deployRequests: Uint8Array[];
}

/**
 * ProcessedNoncePartition is one stored partition of a connection's processed
 * inbound nonces. Bit i of bitmap marks nonce partition * 64 + i.
 */
export interface ProcessedNoncePartition {
  connectionId: string;
  partition: Long;
  bitmap: Long;
}

/**
 * SkippedInboundMessage is an inbound message marked to be acknowledged as a
 * no-op when it arrives.
 */
export interface SkippedInboundMessage {
  connectionId: string;
  nonce: Long;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    bridgeStates: [],
    connections: [],
    controllerContracts: [],
    externalTokenMappings: [],
    relayers: [],
    pendingActionKeys: [],
    pendingActions: [],
    processedNonces: [],
    skippedInboundMessages: [],
    withdrawalsFrozen: false,
    deployRequestKeys: [],
    deployRequests: [],
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.bridgeStates) {
      BridgeState.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.connections) {
      Connection.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.controllerContracts) {
      ControllerContracts.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.externalTokenMappings) {
      ExternalTokenMapping.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.relayers) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.pendingActionKeys) {
      writer.uint32(58).bytes(v!);
    }
    for (const v of message.pendingActions) {
      writer.uint32(66).bytes(v!);
    }
    for (const v of message.processedNonces) {
      ProcessedNoncePartition.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.skippedInboundMessages) {
      SkippedInboundMessage.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.withdrawalsFrozen === true) {
      writer.uint32(88).bool(message.withdrawalsFrozen);
    }
    for (const v of message.deployRequestKeys) {
      writer.uint32(98).bytes(v!);
    }
    for (const v of message.deployRequests) {
      writer.uint32(106).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.bridgeStates.push(BridgeState.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.connections.push(Connection.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.controllerContracts.push(ControllerContracts.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.externalTokenMappings.push(ExternalTokenMapping.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.relayers.push(reader.string());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.pendingActionKeys.push(reader.bytes());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.pendingActions.push(reader.bytes());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.processedNonces.push(ProcessedNoncePartition.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.skippedInboundMessages.push(SkippedInboundMessage.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.withdrawalsFrozen = reader.bool();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.deployRequestKeys.push(reader.bytes());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.deployRequests.push(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      bridgeStates: Array.isArray(object?.bridgeStates)
        ? object.bridgeStates.map((e: any) => BridgeState.fromJSON(e))
        : [],
      connections: Array.isArray(object?.connections) ? object.connections.map((e: any) => Connection.fromJSON(e)) : [],
      controllerContracts: Array.isArray(object?.controllerContracts)
        ? object.controllerContracts.map((e: any) => ControllerContracts.fromJSON(e))
        : [],
      externalTokenMappings: Array.isArray(object?.externalTokenMappings)
        ? object.externalTokenMappings.map((e: any) => ExternalTokenMapping.fromJSON(e))
        : [],
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => String(e)) : [],
      pendingActionKeys: Array.isArray(object?.pendingActionKeys)
        ? object.pendingActionKeys.map((e: any) => bytesFromBase64(e))
        : [],
      pendingActions: Array.isArray(object?.pendingActions)
        ? object.pendingActions.map((e: any) => bytesFromBase64(e))
        : [],
      processedNonces: Array.isArray(object?.processedNonces)
        ? object.processedNonces.map((e: any) => ProcessedNoncePartition.fromJSON(e))
        : [],
      skippedInboundMessages: Array.isArray(object?.skippedInboundMessages)
        ? object.skippedInboundMessages.map((e: any) => SkippedInboundMessage.fromJSON(e))
        : [],
      withdrawalsFrozen: isSet(object.withdrawalsFrozen) ? Boolean(object.withdrawalsFrozen) : false,
      deployRequestKeys: Array.isArray(object?.deployRequestKeys)
        ? object.deployRequestKeys.map((e: any) => bytesFromBase64(e))
        : [],
      deployRequests: Array.isArray(object?.deployRequests)
        ? object.deployRequests.map((e: any) => bytesFromBase64(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.bridgeStates) {
      obj.bridgeStates = message.bridgeStates.map((e) => e ? BridgeState.toJSON(e) : undefined);
    } else {
      obj.bridgeStates = [];
    }
    if (message.connections) {
      obj.connections = message.connections.map((e) => e ? Connection.toJSON(e) : undefined);
    } else {
      obj.connections = [];
    }
    if (message.controllerContracts) {
      obj.controllerContracts = message.controllerContracts.map((e) => e ? ControllerContracts.toJSON(e) : undefined);
    } else {
      obj.controllerContracts = [];
    }
    if (message.externalTokenMappings) {
      obj.externalTokenMappings = message.externalTokenMappings.map((e) =>
        e ? ExternalTokenMapping.toJSON(e) : undefined
      );
    } else {
      obj.externalTokenMappings = [];
    }
    if (message.relayers) {
      obj.relayers = message.relayers.map((e) => e);
    } else {
      obj.relayers = [];
    }
    if (message.pendingActionKeys) {
      obj.pendingActionKeys = message.pendingActionKeys.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.pendingActionKeys = [];
    }
    if (message.pendingActions) {
      obj.pendingActions = message.pendingActions.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.pendingActions = [];
    }
    if (message.processedNonces) {
      obj.processedNonces = message.processedNonces.map((e) => e ? ProcessedNoncePartition.toJSON(e) : undefined);
    } else {
      obj.processedNonces = [];
    }
    if (message.skippedInboundMessages) {
      obj.skippedInboundMessages = message.skippedInboundMessages.map((e) =>
        e ? SkippedInboundMessage.toJSON(e) : undefined
      );
    } else {
      obj.skippedInboundMessages = [];
    }
    message.withdrawalsFrozen !== undefined && (obj.withdrawalsFrozen = message.withdrawalsFrozen);
    if (message.deployRequestKeys) {
      obj.deployRequestKeys = message.deployRequestKeys.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.deployRequestKeys = [];
    }
    if (message.deployRequests) {
      obj.deployRequests = message.deployRequests.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.deployRequests = [];
    }
    return obj;
  },

  create(base?: DeepPartial<GenesisState>): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.bridgeStates = object.bridgeStates?.map((e) => BridgeState.fromPartial(e)) || [];
    message.connections = object.connections?.map((e) => Connection.fromPartial(e)) || [];
    message.controllerContracts = object.controllerContracts?.map((e) => ControllerContracts.fromPartial(e)) || [];
    message.externalTokenMappings = object.externalTokenMappings?.map((e) => ExternalTokenMapping.fromPartial(e)) || [];
    message.relayers = object.relayers?.map((e) => e) || [];
    message.pendingActionKeys = object.pendingActionKeys?.map((e) => e) || [];
    message.pendingActions = object.pendingActions?.map((e) => e) || [];
    message.processedNonces = object.processedNonces?.map((e) => ProcessedNoncePartition.fromPartial(e)) || [];
    message.skippedInboundMessages = object.skippedInboundMessages?.map((e) => SkippedInboundMessage.fromPartial(e)) ||
      [];
    message.withdrawalsFrozen = object.withdrawalsFrozen ?? false;
    message.deployRequestKeys = object.deployRequestKeys?.map((e) => e) || [];
    message.deployRequests = object.deployRequests?.map((e) => e) || [];
    return message;
  },
};

function createBaseProcessedNoncePartition(): ProcessedNoncePartition {
  return { connectionId: "", partition: Long.UZERO, bitmap: Long.UZERO };
}

export const ProcessedNoncePartition = {
  encode(message: ProcessedNoncePartition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (!message.partition.isZero()) {
      writer.uint32(16).uint64(message.partition);
    }
    if (!message.bitmap.isZero()) {
      writer.uint32(24).uint64(message.bitmap);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProcessedNoncePartition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProcessedNoncePartition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connectionId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.partition = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.bitmap = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProcessedNoncePartition {
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      partition: isSet(object.partition) ? Long.fromValue(object.partition) : Long.UZERO,
      bitmap: isSet(object.bitmap) ? Long.fromValue(object.bitmap) : Long.UZERO,
    };
  },

  toJSON(message: ProcessedNoncePartition): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.partition !== undefined && (obj.partition = (message.partition || Long.UZERO).toString());
    message.bitmap !== undefined && (obj.bitmap = (message.bitmap || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<ProcessedNoncePartition>): ProcessedNoncePartition {
    return ProcessedNoncePartition.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProcessedNoncePartition>): ProcessedNoncePartition {
    const message = createBaseProcessedNoncePartition();
    message.connectionId = object.connectionId ?? "";
    message.partition = (object.partition !== undefined && object.partition !== null)
      ? Long.fromValue(object.partition)
      : Long.UZERO;
    message.bitmap = (object.bitmap !== undefined && object.bitmap !== null)
      ? Long.fromValue(object.bitmap)
      : Long.UZERO;
    return message;
  },
};

function createBaseSkippedInboundMessage(): SkippedInboundMessage {
  return { connectionId: "", nonce: Long.UZERO };
}

export const SkippedInboundMessage = {
  encode(message: SkippedInboundMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(16).uint64(message.nonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SkippedInboundMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSkippedInboundMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connectionId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
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

  fromJSON(object: any): SkippedInboundMessage {
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
    };
  },

  toJSON(message: SkippedInboundMessage): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<SkippedInboundMessage>): SkippedInboundMessage {
    return SkippedInboundMessage.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SkippedInboundMessage>): SkippedInboundMessage {
    const message = createBaseSkippedInboundMessage();
    message.connectionId = object.connectionId ?? "";
    message.nonce = (object.nonce !== undefined && object.nonce !== null) ? Long.fromValue(object.nonce) : Long.UZERO;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
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
