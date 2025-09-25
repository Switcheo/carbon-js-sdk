/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ModuleContracts, ModuleEVMAddress } from "./evm_hooks";
import { Params } from "./params";

export const protobufPackage = "Switcheo.carbon.evmcontract";

/** GenesisState defines the evm module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  params?: Params;
  moduleAddressMap: ModuleEVMAddress[];
  moduleContracts: ModuleContracts[];
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, moduleAddressMap: [], moduleContracts: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.moduleAddressMap) {
      ModuleEVMAddress.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.moduleContracts) {
      ModuleContracts.encode(v!, writer.uint32(26).fork()).ldelim();
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

          message.moduleAddressMap.push(ModuleEVMAddress.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.moduleContracts.push(ModuleContracts.decode(reader, reader.uint32()));
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
      moduleAddressMap: Array.isArray(object?.moduleAddressMap)
        ? object.moduleAddressMap.map((e: any) => ModuleEVMAddress.fromJSON(e))
        : [],
      moduleContracts: Array.isArray(object?.moduleContracts)
        ? object.moduleContracts.map((e: any) => ModuleContracts.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.moduleAddressMap) {
      obj.moduleAddressMap = message.moduleAddressMap.map((e) => e ? ModuleEVMAddress.toJSON(e) : undefined);
    } else {
      obj.moduleAddressMap = [];
    }
    if (message.moduleContracts) {
      obj.moduleContracts = message.moduleContracts.map((e) => e ? ModuleContracts.toJSON(e) : undefined);
    } else {
      obj.moduleContracts = [];
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
    message.moduleAddressMap = object.moduleAddressMap?.map((e) => ModuleEVMAddress.fromPartial(e)) || [];
    message.moduleContracts = object.moduleContracts?.map((e) => ModuleContracts.fromPartial(e)) || [];
    return message;
  },
};

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
