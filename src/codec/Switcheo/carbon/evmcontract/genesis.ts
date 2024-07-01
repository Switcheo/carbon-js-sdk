/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { ModuleEVMAddress, ModuleContracts } from "./evm_hooks";

export const protobufPackage = "Switcheo.carbon.evmcontract";

/** GenesisState defines the evm module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  params?: Params;
  moduleAddressMap: ModuleEVMAddress[];
  moduleContracts: ModuleContracts[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.moduleAddressMap = [];
    message.moduleContracts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.moduleAddressMap.push(
            ModuleEVMAddress.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.moduleContracts.push(
            ModuleContracts.decode(reader, reader.uint32())
          );
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
    message.moduleAddressMap = (object.moduleAddressMap ?? []).map((e: any) =>
      ModuleEVMAddress.fromJSON(e)
    );
    message.moduleContracts = (object.moduleContracts ?? []).map((e: any) =>
      ModuleContracts.fromJSON(e)
    );
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.moduleAddressMap) {
      obj.moduleAddressMap = message.moduleAddressMap.map((e) =>
        e ? ModuleEVMAddress.toJSON(e) : undefined
      );
    } else {
      obj.moduleAddressMap = [];
    }
    if (message.moduleContracts) {
      obj.moduleContracts = message.moduleContracts.map((e) =>
        e ? ModuleContracts.toJSON(e) : undefined
      );
    } else {
      obj.moduleContracts = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    message.moduleAddressMap = (object.moduleAddressMap ?? []).map((e) =>
      ModuleEVMAddress.fromPartial(e)
    );
    message.moduleContracts = (object.moduleContracts ?? []).map((e) =>
      ModuleContracts.fromPartial(e)
    );
    return message;
  },
};

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
