/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { BaseAccount } from "../../../cosmos/auth/v1beta1/auth";

export const protobufPackage = "ethermint.types.v1";

/**
 * EthAccount implements the authtypes.AccountI interface and embeds an
 * authtypes.BaseAccount type. It is compatible with the auth AccountKeeper.
 */
export interface EthAccount {
  /** base_account is an authtypes.BaseAccount */
  baseAccount?: BaseAccount;
  /** code_hash is the hash calculated from the code contents */
  codeHash: string;
}

const baseEthAccount: object = { codeHash: "" };

export const EthAccount = {
  encode(
    message: EthAccount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.baseAccount !== undefined) {
      BaseAccount.encode(
        message.baseAccount,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.codeHash !== "") {
      writer.uint32(18).string(message.codeHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EthAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEthAccount } as EthAccount;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseAccount = BaseAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.codeHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EthAccount {
    const message = { ...baseEthAccount } as EthAccount;
    message.baseAccount =
      object.baseAccount !== undefined && object.baseAccount !== null
        ? BaseAccount.fromJSON(object.baseAccount)
        : undefined;
    message.codeHash =
      object.codeHash !== undefined && object.codeHash !== null
        ? String(object.codeHash)
        : "";
    return message;
  },

  toJSON(message: EthAccount): unknown {
    const obj: any = {};
    message.baseAccount !== undefined &&
      (obj.baseAccount = message.baseAccount
        ? BaseAccount.toJSON(message.baseAccount)
        : undefined);
    message.codeHash !== undefined && (obj.codeHash = message.codeHash);
    return obj;
  },

  fromPartial(object: DeepPartial<EthAccount>): EthAccount {
    const message = { ...baseEthAccount } as EthAccount;
    message.baseAccount =
      object.baseAccount !== undefined && object.baseAccount !== null
        ? BaseAccount.fromPartial(object.baseAccount)
        : undefined;
    message.codeHash = object.codeHash ?? "";
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
