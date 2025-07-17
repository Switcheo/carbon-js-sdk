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

function createBaseDenomInfo(): DenomInfo {
  return { creator: "", id: "", denom: "", assetHash: "", totalSupply: "", redeemScript: "", redeemScriptHash: "" };
}

export const DenomInfo = {
  encode(message: DenomInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.assetHash = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.totalSupply = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.redeemScript = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.redeemScriptHash = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DenomInfo {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? String(object.id) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      assetHash: isSet(object.assetHash) ? String(object.assetHash) : "",
      totalSupply: isSet(object.totalSupply) ? String(object.totalSupply) : "",
      redeemScript: isSet(object.redeemScript) ? String(object.redeemScript) : "",
      redeemScriptHash: isSet(object.redeemScriptHash) ? String(object.redeemScriptHash) : "",
    };
  },

  toJSON(message: DenomInfo): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.denom !== undefined && (obj.denom = message.denom);
    message.assetHash !== undefined && (obj.assetHash = message.assetHash);
    message.totalSupply !== undefined && (obj.totalSupply = message.totalSupply);
    message.redeemScript !== undefined && (obj.redeemScript = message.redeemScript);
    message.redeemScriptHash !== undefined && (obj.redeemScriptHash = message.redeemScriptHash);
    return obj;
  },

  create(base?: DeepPartial<DenomInfo>): DenomInfo {
    return DenomInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DenomInfo>): DenomInfo {
    const message = createBaseDenomInfo();
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
