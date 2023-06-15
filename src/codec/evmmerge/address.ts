/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.evmmerge";

export interface EthCosmosAddressWrapper {
  ethAddress: string;
  cosmosAddress: string;
}

const baseEthCosmosAddressWrapper: object = {
  ethAddress: "",
  cosmosAddress: "",
};

export const EthCosmosAddressWrapper = {
  encode(
    message: EthCosmosAddressWrapper,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ethAddress !== "") {
      writer.uint32(10).string(message.ethAddress);
    }
    if (message.cosmosAddress !== "") {
      writer.uint32(18).string(message.cosmosAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EthCosmosAddressWrapper {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEthCosmosAddressWrapper,
    } as EthCosmosAddressWrapper;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ethAddress = reader.string();
          break;
        case 2:
          message.cosmosAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EthCosmosAddressWrapper {
    const message = {
      ...baseEthCosmosAddressWrapper,
    } as EthCosmosAddressWrapper;
    message.ethAddress =
      object.ethAddress !== undefined && object.ethAddress !== null
        ? String(object.ethAddress)
        : "";
    message.cosmosAddress =
      object.cosmosAddress !== undefined && object.cosmosAddress !== null
        ? String(object.cosmosAddress)
        : "";
    return message;
  },

  toJSON(message: EthCosmosAddressWrapper): unknown {
    const obj: any = {};
    message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
    message.cosmosAddress !== undefined &&
      (obj.cosmosAddress = message.cosmosAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EthCosmosAddressWrapper>
  ): EthCosmosAddressWrapper {
    const message = {
      ...baseEthCosmosAddressWrapper,
    } as EthCosmosAddressWrapper;
    message.ethAddress = object.ethAddress ?? "";
    message.cosmosAddress = object.cosmosAddress ?? "";
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
