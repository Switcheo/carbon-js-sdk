/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cosmos.gov.module.v1";

/** Module is the config object of the gov module. */
export interface Module {
  /**
   * max_metadata_len defines the maximum proposal metadata length.
   * Defaults to 255 if not explicitly set.
   */
  maxMetadataLen: Long;
  /** authority defines the custom module authority. If not set, defaults to the governance module. */
  authority: string;
}

const baseModule: object = { maxMetadataLen: Long.UZERO, authority: "" };

export const Module = {
  encode(
    message: Module,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.maxMetadataLen.isZero()) {
      writer.uint32(8).uint64(message.maxMetadataLen);
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Module {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseModule } as Module;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxMetadataLen = reader.uint64() as Long;
          break;
        case 2:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Module {
    const message = { ...baseModule } as Module;
    message.maxMetadataLen =
      object.maxMetadataLen !== undefined && object.maxMetadataLen !== null
        ? Long.fromString(object.maxMetadataLen)
        : Long.UZERO;
    message.authority =
      object.authority !== undefined && object.authority !== null
        ? String(object.authority)
        : "";
    return message;
  },

  toJSON(message: Module): unknown {
    const obj: any = {};
    message.maxMetadataLen !== undefined &&
      (obj.maxMetadataLen = (message.maxMetadataLen || Long.UZERO).toString());
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },

  fromPartial(object: DeepPartial<Module>): Module {
    const message = { ...baseModule } as Module;
    message.maxMetadataLen =
      object.maxMetadataLen !== undefined && object.maxMetadataLen !== null
        ? Long.fromValue(object.maxMetadataLen)
        : Long.UZERO;
    message.authority = object.authority ?? "";
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
