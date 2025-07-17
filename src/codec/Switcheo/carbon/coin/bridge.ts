/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.coin";

export interface Bridge {
  name: string;
  bridgeId: Long;
  chainId: Long;
  bridgeName: string;
  chainName: string;
  enabled: boolean;
  bridgeAddresses: string[];
}

function createBaseBridge(): Bridge {
  return {
    name: "",
    bridgeId: Long.UZERO,
    chainId: Long.UZERO,
    bridgeName: "",
    chainName: "",
    enabled: false,
    bridgeAddresses: [],
  };
}

export const Bridge = {
  encode(message: Bridge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (!message.bridgeId.isZero()) {
      writer.uint32(16).uint64(message.bridgeId);
    }
    if (!message.chainId.isZero()) {
      writer.uint32(24).uint64(message.chainId);
    }
    if (message.bridgeName !== "") {
      writer.uint32(34).string(message.bridgeName);
    }
    if (message.chainName !== "") {
      writer.uint32(42).string(message.chainName);
    }
    if (message.enabled === true) {
      writer.uint32(48).bool(message.enabled);
    }
    for (const v of message.bridgeAddresses) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bridge {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBridge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.bridgeId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.chainId = reader.uint64() as Long;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.bridgeName = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.chainName = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.bridgeAddresses.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Bridge {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      bridgeId: isSet(object.bridgeId) ? Long.fromValue(object.bridgeId) : Long.UZERO,
      chainId: isSet(object.chainId) ? Long.fromValue(object.chainId) : Long.UZERO,
      bridgeName: isSet(object.bridgeName) ? String(object.bridgeName) : "",
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      bridgeAddresses: Array.isArray(object?.bridgeAddresses) ? object.bridgeAddresses.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: Bridge): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.bridgeId !== undefined && (obj.bridgeId = (message.bridgeId || Long.UZERO).toString());
    message.chainId !== undefined && (obj.chainId = (message.chainId || Long.UZERO).toString());
    message.bridgeName !== undefined && (obj.bridgeName = message.bridgeName);
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    if (message.bridgeAddresses) {
      obj.bridgeAddresses = message.bridgeAddresses.map((e) => e);
    } else {
      obj.bridgeAddresses = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Bridge>): Bridge {
    return Bridge.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Bridge>): Bridge {
    const message = createBaseBridge();
    message.name = object.name ?? "";
    message.bridgeId = (object.bridgeId !== undefined && object.bridgeId !== null)
      ? Long.fromValue(object.bridgeId)
      : Long.UZERO;
    message.chainId = (object.chainId !== undefined && object.chainId !== null)
      ? Long.fromValue(object.chainId)
      : Long.UZERO;
    message.bridgeName = object.bridgeName ?? "";
    message.chainName = object.chainName ?? "";
    message.enabled = object.enabled ?? false;
    message.bridgeAddresses = object.bridgeAddresses?.map((e) => e) || [];
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
