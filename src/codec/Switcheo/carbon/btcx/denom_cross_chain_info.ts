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

function createBaseDenomCrossChainInfo(): DenomCrossChainInfo {
  return { denomInfo: undefined, toChainId: Long.UZERO, toAssetHash: "" };
}

export const DenomCrossChainInfo = {
  encode(message: DenomCrossChainInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomCrossChainInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denomInfo = DenomInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.toChainId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.toAssetHash = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DenomCrossChainInfo {
    return {
      denomInfo: isSet(object.denomInfo) ? DenomInfo.fromJSON(object.denomInfo) : undefined,
      toChainId: isSet(object.toChainId) ? Long.fromValue(object.toChainId) : Long.UZERO,
      toAssetHash: isSet(object.toAssetHash) ? String(object.toAssetHash) : "",
    };
  },

  toJSON(message: DenomCrossChainInfo): unknown {
    const obj: any = {};
    message.denomInfo !== undefined &&
      (obj.denomInfo = message.denomInfo ? DenomInfo.toJSON(message.denomInfo) : undefined);
    message.toChainId !== undefined && (obj.toChainId = (message.toChainId || Long.UZERO).toString());
    message.toAssetHash !== undefined && (obj.toAssetHash = message.toAssetHash);
    return obj;
  },

  create(base?: DeepPartial<DenomCrossChainInfo>): DenomCrossChainInfo {
    return DenomCrossChainInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DenomCrossChainInfo>): DenomCrossChainInfo {
    const message = createBaseDenomCrossChainInfo();
    message.denomInfo = (object.denomInfo !== undefined && object.denomInfo !== null)
      ? DenomInfo.fromPartial(object.denomInfo)
      : undefined;
    message.toChainId = (object.toChainId !== undefined && object.toChainId !== null)
      ? Long.fromValue(object.toChainId)
      : Long.UZERO;
    message.toAssetHash = object.toAssetHash ?? "";
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
