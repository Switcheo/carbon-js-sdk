/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.btcx";

export interface DenomInfo {
  creator: string;
  id: string;
  denom: string;
  assetHash: string;
  totalSupply: string;
  redeemScript: string;
  redeemScriptHash: string;
}

const baseDenomInfo: object = {
  creator: "",
  id: "",
  denom: "",
  assetHash: "",
  totalSupply: "",
  redeemScript: "",
  redeemScriptHash: "",
};

export const DenomInfo = {
  encode(
    message: DenomInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.assetHash !== "") {
      writer.uint32(34).string(message.assetHash);
    }
    if (message.totalSupply !== "") {
      writer.uint32(42).string(message.totalSupply);
    }
    if (message.redeemScript !== "") {
      writer.uint32(50).string(message.redeemScript);
    }
    if (message.redeemScriptHash !== "") {
      writer.uint32(58).string(message.redeemScriptHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DenomInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDenomInfo } as DenomInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.assetHash = reader.string();
          break;
        case 5:
          message.totalSupply = reader.string();
          break;
        case 6:
          message.redeemScript = reader.string();
          break;
        case 7:
          message.redeemScriptHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DenomInfo {
    const message = { ...baseDenomInfo } as DenomInfo;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.assetHash =
      object.assetHash !== undefined && object.assetHash !== null
        ? String(object.assetHash)
        : "";
    message.totalSupply =
      object.totalSupply !== undefined && object.totalSupply !== null
        ? String(object.totalSupply)
        : "";
    message.redeemScript =
      object.redeemScript !== undefined && object.redeemScript !== null
        ? String(object.redeemScript)
        : "";
    message.redeemScriptHash =
      object.redeemScriptHash !== undefined && object.redeemScriptHash !== null
        ? String(object.redeemScriptHash)
        : "";
    return message;
  },

  toJSON(message: DenomInfo): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.denom !== undefined && (obj.denom = message.denom);
    message.assetHash !== undefined && (obj.assetHash = message.assetHash);
    message.totalSupply !== undefined &&
      (obj.totalSupply = message.totalSupply);
    message.redeemScript !== undefined &&
      (obj.redeemScript = message.redeemScript);
    message.redeemScriptHash !== undefined &&
      (obj.redeemScriptHash = message.redeemScriptHash);
    return obj;
  },

  fromPartial(object: DeepPartial<DenomInfo>): DenomInfo {
    const message = { ...baseDenomInfo } as DenomInfo;
    message.creator = object.creator ?? "";
    message.id = object.id ?? "";
    message.denom = object.denom ?? "";
    message.assetHash = object.assetHash ?? "";
    message.totalSupply = object.totalSupply ?? "";
    message.redeemScript = object.redeemScript ?? "";
    message.redeemScriptHash = object.redeemScriptHash ?? "";
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
