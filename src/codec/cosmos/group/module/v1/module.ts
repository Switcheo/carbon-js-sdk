/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../../google/protobuf/duration";

export const protobufPackage = "cosmos.group.module.v1";

/** Module is the config object of the group module. */
export interface Module {
  /**
   * max_execution_period defines the max duration after a proposal's voting period ends that members can send a MsgExec
   * to execute the proposal.
   */
  maxExecutionPeriod?: Duration;
  /**
   * max_metadata_len defines the max length of the metadata bytes field for various entities within the group module.
   * Defaults to 255 if not explicitly set.
   */
  maxMetadataLen: Long;
}

const baseModule: object = { maxMetadataLen: Long.UZERO };

export const Module = {
  encode(
    message: Module,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.maxExecutionPeriod !== undefined) {
      Duration.encode(
        message.maxExecutionPeriod,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (!message.maxMetadataLen.isZero()) {
      writer.uint32(16).uint64(message.maxMetadataLen);
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
          message.maxExecutionPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.maxMetadataLen = reader.uint64() as Long;
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
    message.maxExecutionPeriod =
      object.maxExecutionPeriod !== undefined &&
      object.maxExecutionPeriod !== null
        ? Duration.fromJSON(object.maxExecutionPeriod)
        : undefined;
    message.maxMetadataLen =
      object.maxMetadataLen !== undefined && object.maxMetadataLen !== null
        ? Long.fromString(object.maxMetadataLen)
        : Long.UZERO;
    return message;
  },

  toJSON(message: Module): unknown {
    const obj: any = {};
    message.maxExecutionPeriod !== undefined &&
      (obj.maxExecutionPeriod = message.maxExecutionPeriod
        ? Duration.toJSON(message.maxExecutionPeriod)
        : undefined);
    message.maxMetadataLen !== undefined &&
      (obj.maxMetadataLen = (message.maxMetadataLen || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Module>): Module {
    const message = { ...baseModule } as Module;
    message.maxExecutionPeriod =
      object.maxExecutionPeriod !== undefined &&
      object.maxExecutionPeriod !== null
        ? Duration.fromPartial(object.maxExecutionPeriod)
        : undefined;
    message.maxMetadataLen =
      object.maxMetadataLen !== undefined && object.maxMetadataLen !== null
        ? Long.fromValue(object.maxMetadataLen)
        : Long.UZERO;
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
