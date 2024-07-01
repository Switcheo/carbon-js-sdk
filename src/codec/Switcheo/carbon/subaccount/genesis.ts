/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { GenesisSubAccount, SubAccount, MainAccount } from "./subaccount";

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

const baseGenesisState: object = {};

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.subAccounts = [];
    message.pendingSubAccounts = [];
    message.mainAccounts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subAccounts.push(
            GenesisSubAccount.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 3:
          message.pendingSubAccounts.push(
            SubAccount.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.mainAccounts.push(
            MainAccount.decode(reader, reader.uint32())
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
    message.subAccounts = (object.subAccounts ?? []).map((e: any) =>
      GenesisSubAccount.fromJSON(e)
    );
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromJSON(object.params)
        : undefined;
    message.pendingSubAccounts = (object.pendingSubAccounts ?? []).map(
      (e: any) => SubAccount.fromJSON(e)
    );
    message.mainAccounts = (object.mainAccounts ?? []).map((e: any) =>
      MainAccount.fromJSON(e)
    );
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.subAccounts) {
      obj.subAccounts = message.subAccounts.map((e) =>
        e ? GenesisSubAccount.toJSON(e) : undefined
      );
    } else {
      obj.subAccounts = [];
    }
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.pendingSubAccounts) {
      obj.pendingSubAccounts = message.pendingSubAccounts.map((e) =>
        e ? SubAccount.toJSON(e) : undefined
      );
    } else {
      obj.pendingSubAccounts = [];
    }
    if (message.mainAccounts) {
      obj.mainAccounts = message.mainAccounts.map((e) =>
        e ? MainAccount.toJSON(e) : undefined
      );
    } else {
      obj.mainAccounts = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.subAccounts = (object.subAccounts ?? []).map((e) =>
      GenesisSubAccount.fromPartial(e)
    );
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    message.pendingSubAccounts = (object.pendingSubAccounts ?? []).map((e) =>
      SubAccount.fromPartial(e)
    );
    message.mainAccounts = (object.mainAccounts ?? []).map((e) =>
      MainAccount.fromPartial(e)
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
