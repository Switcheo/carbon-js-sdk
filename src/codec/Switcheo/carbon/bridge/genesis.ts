/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import {
  BridgeState,
  Connection,
  ControllerContracts,
  ExternalTokenMapping,
} from "./bridge";

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
}

const baseGenesisState: object = { relayers: "" };

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.bridgeStates = [];
    message.connections = [];
    message.controllerContracts = [];
    message.externalTokenMappings = [];
    message.relayers = [];
    message.pendingActionKeys = [];
    message.pendingActions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.bridgeStates.push(
            BridgeState.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.connections.push(Connection.decode(reader, reader.uint32()));
          break;
        case 4:
          message.controllerContracts.push(
            ControllerContracts.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.externalTokenMappings.push(
            ExternalTokenMapping.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.relayers.push(reader.string());
          break;
        case 7:
          message.pendingActionKeys.push(reader.bytes());
          break;
        case 8:
          message.pendingActions.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromJSON(object.params)
        : undefined;
    message.bridgeStates = (object.bridgeStates ?? []).map((e: any) =>
      BridgeState.fromJSON(e)
    );
    message.connections = (object.connections ?? []).map((e: any) =>
      Connection.fromJSON(e)
    );
    message.controllerContracts = (object.controllerContracts ?? []).map(
      (e: any) => ControllerContracts.fromJSON(e)
    );
    message.externalTokenMappings = (object.externalTokenMappings ?? []).map(
      (e: any) => ExternalTokenMapping.fromJSON(e)
    );
    message.relayers = (object.relayers ?? []).map((e: any) => String(e));
    message.pendingActionKeys = (object.pendingActionKeys ?? []).map((e: any) =>
      bytesFromBase64(e)
    );
    message.pendingActions = (object.pendingActions ?? []).map((e: any) =>
      bytesFromBase64(e)
    );
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.bridgeStates) {
      obj.bridgeStates = message.bridgeStates.map((e) =>
        e ? BridgeState.toJSON(e) : undefined
      );
    } else {
      obj.bridgeStates = [];
    }
    if (message.connections) {
      obj.connections = message.connections.map((e) =>
        e ? Connection.toJSON(e) : undefined
      );
    } else {
      obj.connections = [];
    }
    if (message.controllerContracts) {
      obj.controllerContracts = message.controllerContracts.map((e) =>
        e ? ControllerContracts.toJSON(e) : undefined
      );
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
      obj.pendingActions = message.pendingActions.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.pendingActions = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    message.bridgeStates = (object.bridgeStates ?? []).map((e) =>
      BridgeState.fromPartial(e)
    );
    message.connections = (object.connections ?? []).map((e) =>
      Connection.fromPartial(e)
    );
    message.controllerContracts = (object.controllerContracts ?? []).map((e) =>
      ControllerContracts.fromPartial(e)
    );
    message.externalTokenMappings = (object.externalTokenMappings ?? []).map(
      (e) => ExternalTokenMapping.fromPartial(e)
    );
    message.relayers = (object.relayers ?? []).map((e) => e);
    message.pendingActionKeys = (object.pendingActionKeys ?? []).map((e) => e);
    message.pendingActions = (object.pendingActions ?? []).map((e) => e);
    return message;
  },
};

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
