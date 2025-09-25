/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { BoolValue } from "../../../google/protobuf/wrappers";

export const protobufPackage = "Switcheo.carbon.erc20";

/** Params defines the erc20 module params */
export interface Params {
  /**
   * enable_erc20 is the parameter to enable the conversion of Cosmos coins <-->
   * ERC20 tokens.
   */
  enableErc20: boolean;
  /**
   * enable_evm_hook is the parameter to enable the EVM hook that converts an
   * ERC20 token to a Cosmos Coin by transferring the Tokens through a
   * MsgEthereumTx to the ModuleAddress Ethereum address.
   */
  enableEvmHook: boolean;
}

/** ParamsToUpdate allows optional fields for Params. */
export interface ParamsToUpdate {
  enableErc20?: boolean;
  enableEvmHook?: boolean;
}

function createBaseParams(): Params {
  return { enableErc20: false, enableEvmHook: false };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enableErc20 === true) {
      writer.uint32(8).bool(message.enableErc20);
    }
    if (message.enableEvmHook === true) {
      writer.uint32(16).bool(message.enableEvmHook);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enableErc20 = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.enableEvmHook = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      enableErc20: isSet(object.enableErc20) ? Boolean(object.enableErc20) : false,
      enableEvmHook: isSet(object.enableEvmHook) ? Boolean(object.enableEvmHook) : false,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.enableErc20 !== undefined && (obj.enableErc20 = message.enableErc20);
    message.enableEvmHook !== undefined && (obj.enableEvmHook = message.enableEvmHook);
    return obj;
  },

  create(base?: DeepPartial<Params>): Params {
    return Params.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.enableErc20 = object.enableErc20 ?? false;
    message.enableEvmHook = object.enableEvmHook ?? false;
    return message;
  },
};

function createBaseParamsToUpdate(): ParamsToUpdate {
  return { enableErc20: undefined, enableEvmHook: undefined };
}

export const ParamsToUpdate = {
  encode(message: ParamsToUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enableErc20 !== undefined) {
      BoolValue.encode({ value: message.enableErc20! }, writer.uint32(10).fork()).ldelim();
    }
    if (message.enableEvmHook !== undefined) {
      BoolValue.encode({ value: message.enableEvmHook! }, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParamsToUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsToUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.enableErc20 = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.enableEvmHook = BoolValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ParamsToUpdate {
    return {
      enableErc20: isSet(object.enableErc20) ? Boolean(object.enableErc20) : undefined,
      enableEvmHook: isSet(object.enableEvmHook) ? Boolean(object.enableEvmHook) : undefined,
    };
  },

  toJSON(message: ParamsToUpdate): unknown {
    const obj: any = {};
    message.enableErc20 !== undefined && (obj.enableErc20 = message.enableErc20);
    message.enableEvmHook !== undefined && (obj.enableEvmHook = message.enableEvmHook);
    return obj;
  },

  create(base?: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    return ParamsToUpdate.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ParamsToUpdate>): ParamsToUpdate {
    const message = createBaseParamsToUpdate();
    message.enableErc20 = object.enableErc20 ?? undefined;
    message.enableEvmHook = object.enableEvmHook ?? undefined;
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
