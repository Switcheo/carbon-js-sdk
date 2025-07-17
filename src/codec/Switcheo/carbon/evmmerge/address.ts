/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.evmmerge";

export interface EthCosmosAddressWrapper {
  ethAddress: string;
  cosmosAddress: string;
}

function createBaseEthCosmosAddressWrapper(): EthCosmosAddressWrapper {
  return { ethAddress: "", cosmosAddress: "" };
}

export const EthCosmosAddressWrapper = {
  encode(message: EthCosmosAddressWrapper, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ethAddress !== "") {
      writer.uint32(10).string(message.ethAddress);
    }
    if (message.cosmosAddress !== "") {
      writer.uint32(18).string(message.cosmosAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EthCosmosAddressWrapper {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEthCosmosAddressWrapper();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ethAddress = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cosmosAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EthCosmosAddressWrapper {
    return {
      ethAddress: isSet(object.ethAddress) ? String(object.ethAddress) : "",
      cosmosAddress: isSet(object.cosmosAddress) ? String(object.cosmosAddress) : "",
    };
  },

  toJSON(message: EthCosmosAddressWrapper): unknown {
    const obj: any = {};
    message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
    message.cosmosAddress !== undefined && (obj.cosmosAddress = message.cosmosAddress);
    return obj;
  },

  create(base?: DeepPartial<EthCosmosAddressWrapper>): EthCosmosAddressWrapper {
    return EthCosmosAddressWrapper.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EthCosmosAddressWrapper>): EthCosmosAddressWrapper {
    const message = createBaseEthCosmosAddressWrapper();
    message.ethAddress = object.ethAddress ?? "";
    message.cosmosAddress = object.cosmosAddress ?? "";
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
