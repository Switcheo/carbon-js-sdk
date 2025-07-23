/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { GenesisSubAccount, MainAccount, SubAccount } from "./subaccount";

export const protobufPackage = "Switcheo.carbon.subaccount";

/** GenesisState defines the subaccount module's genesis state. */
export interface GenesisState {
  /**
   * this line is used by starport scaffolding # genesis/proto/state
   * this line is used by starport scaffolding # ibc/genesis/proto
   */
  subAccounts: GenesisSubAccount[];
  /** params defines all the paramaters of the module. */
  params?: Params;
  pendingSubAccounts: SubAccount[];
  mainAccounts: MainAccount[];
}

function createBaseGenesisState(): GenesisState {
  return { subAccounts: [], params: undefined, pendingSubAccounts: [], mainAccounts: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.subAccounts) {
      GenesisSubAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.pendingSubAccounts) {
      SubAccount.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.mainAccounts) {
      MainAccount.encode(v!, writer.uint32(34).fork()).ldelim();
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

          message.subAccounts.push(GenesisSubAccount.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.pendingSubAccounts.push(SubAccount.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.mainAccounts.push(MainAccount.decode(reader, reader.uint32()));
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
      subAccounts: Array.isArray(object?.subAccounts)
        ? object.subAccounts.map((e: any) => GenesisSubAccount.fromJSON(e))
        : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      pendingSubAccounts: Array.isArray(object?.pendingSubAccounts)
        ? object.pendingSubAccounts.map((e: any) => SubAccount.fromJSON(e))
        : [],
      mainAccounts: Array.isArray(object?.mainAccounts)
        ? object.mainAccounts.map((e: any) => MainAccount.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.subAccounts) {
      obj.subAccounts = message.subAccounts.map((e) => e ? GenesisSubAccount.toJSON(e) : undefined);
    } else {
      obj.subAccounts = [];
    }
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.pendingSubAccounts) {
      obj.pendingSubAccounts = message.pendingSubAccounts.map((e) => e ? SubAccount.toJSON(e) : undefined);
    } else {
      obj.pendingSubAccounts = [];
    }
    if (message.mainAccounts) {
      obj.mainAccounts = message.mainAccounts.map((e) => e ? MainAccount.toJSON(e) : undefined);
    } else {
      obj.mainAccounts = [];
    }
    return obj;
  },

  create(base?: DeepPartial<GenesisState>): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.subAccounts = object.subAccounts?.map((e) => GenesisSubAccount.fromPartial(e)) || [];
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.pendingSubAccounts = object.pendingSubAccounts?.map((e) => SubAccount.fromPartial(e)) || [];
    message.mainAccounts = object.mainAccounts?.map((e) => MainAccount.fromPartial(e)) || [];
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
