/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { DenomInfo } from "./denom_info";

export const protobufPackage = "Switcheo.carbon.btcx";

export interface DenomCrossChainInfo {
  denomInfo?: DenomInfo;
  toChainId: Long;
  toAssetHash: string;
}

const baseDenomCrossChainInfo: object = {
  toChainId: Long.UZERO,
  toAssetHash: "",
};

export const DenomCrossChainInfo = {
  encode(
    message: DenomCrossChainInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denomInfo !== undefined) {
      DenomInfo.encode(message.denomInfo, writer.uint32(10).fork()).ldelim();
    }
    if (!message.toChainId.isZero()) {
      writer.uint32(16).uint64(message.toChainId);
    }
    if (message.toAssetHash !== "") {
      writer.uint32(26).string(message.toAssetHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DenomCrossChainInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDenomCrossChainInfo } as DenomCrossChainInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomInfo = DenomInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.toChainId = reader.uint64() as Long;
          break;
        case 3:
          message.toAssetHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DenomCrossChainInfo {
    const message = { ...baseDenomCrossChainInfo } as DenomCrossChainInfo;
    message.denomInfo =
      object.denomInfo !== undefined && object.denomInfo !== null
        ? DenomInfo.fromJSON(object.denomInfo)
        : undefined;
    message.toChainId =
      object.toChainId !== undefined && object.toChainId !== null
        ? Long.fromString(object.toChainId)
        : Long.UZERO;
    message.toAssetHash =
      object.toAssetHash !== undefined && object.toAssetHash !== null
        ? String(object.toAssetHash)
        : "";
    return message;
  },

  toJSON(message: DenomCrossChainInfo): unknown {
    const obj: any = {};
    message.denomInfo !== undefined &&
      (obj.denomInfo = message.denomInfo
        ? DenomInfo.toJSON(message.denomInfo)
        : undefined);
    message.toChainId !== undefined &&
      (obj.toChainId = (message.toChainId || Long.UZERO).toString());
    message.toAssetHash !== undefined &&
      (obj.toAssetHash = message.toAssetHash);
    return obj;
  },

  fromPartial(object: DeepPartial<DenomCrossChainInfo>): DenomCrossChainInfo {
    const message = { ...baseDenomCrossChainInfo } as DenomCrossChainInfo;
    message.denomInfo =
      object.denomInfo !== undefined && object.denomInfo !== null
        ? DenomInfo.fromPartial(object.denomInfo)
        : undefined;
    message.toChainId =
      object.toChainId !== undefined && object.toChainId !== null
        ? Long.fromValue(object.toChainId)
        : Long.UZERO;
    message.toAssetHash = object.toAssetHash ?? "";
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
