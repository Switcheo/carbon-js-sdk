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

const baseBridge: object = {
  name: "",
  bridgeId: Long.UZERO,
  chainId: Long.UZERO,
  bridgeName: "",
  chainName: "",
  enabled: false,
  bridgeAddresses: "",
};

export const Bridge = {
  encode(
    message: Bridge,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBridge } as Bridge;
    message.bridgeAddresses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.bridgeId = reader.uint64() as Long;
          break;
        case 3:
          message.chainId = reader.uint64() as Long;
          break;
        case 4:
          message.bridgeName = reader.string();
          break;
        case 5:
          message.chainName = reader.string();
          break;
        case 6:
          message.enabled = reader.bool();
          break;
        case 7:
          message.bridgeAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Bridge {
    const message = { ...baseBridge } as Bridge;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.bridgeId =
      object.bridgeId !== undefined && object.bridgeId !== null
        ? Long.fromString(object.bridgeId)
        : Long.UZERO;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Long.fromString(object.chainId)
        : Long.UZERO;
    message.bridgeName =
      object.bridgeName !== undefined && object.bridgeName !== null
        ? String(object.bridgeName)
        : "";
    message.chainName =
      object.chainName !== undefined && object.chainName !== null
        ? String(object.chainName)
        : "";
    message.enabled =
      object.enabled !== undefined && object.enabled !== null
        ? Boolean(object.enabled)
        : false;
    message.bridgeAddresses = (object.bridgeAddresses ?? []).map((e: any) =>
      String(e)
    );
    return message;
  },

  toJSON(message: Bridge): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.bridgeId !== undefined &&
      (obj.bridgeId = (message.bridgeId || Long.UZERO).toString());
    message.chainId !== undefined &&
      (obj.chainId = (message.chainId || Long.UZERO).toString());
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

  fromPartial(object: DeepPartial<Bridge>): Bridge {
    const message = { ...baseBridge } as Bridge;
    message.name = object.name ?? "";
    message.bridgeId =
      object.bridgeId !== undefined && object.bridgeId !== null
        ? Long.fromValue(object.bridgeId)
        : Long.UZERO;
    message.chainId =
      object.chainId !== undefined && object.chainId !== null
        ? Long.fromValue(object.chainId)
        : Long.UZERO;
    message.bridgeName = object.bridgeName ?? "";
    message.chainName = object.chainName ?? "";
    message.enabled = object.enabled ?? false;
    message.bridgeAddresses = (object.bridgeAddresses ?? []).map((e) => e);
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
