/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cosmos.capability.module.v1";

/** Module is the config object of the capability module. */
export interface Module {
  /**
   * seal_keeper defines if keeper.Seal() will run on BeginBlock() to prevent further modules from creating a scoped
   * keeper. For more details check x/capability/keeper.go.
   */
  sealKeeper: boolean;
}

const baseModule: object = { sealKeeper: false };

export const Module = {
  encode(
    message: Module,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sealKeeper === true) {
      writer.uint32(8).bool(message.sealKeeper);
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
          message.sealKeeper = reader.bool();
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
    message.sealKeeper =
      object.sealKeeper !== undefined && object.sealKeeper !== null
        ? Boolean(object.sealKeeper)
        : false;
    return message;
  },

  toJSON(message: Module): unknown {
    const obj: any = {};
    message.sealKeeper !== undefined && (obj.sealKeeper = message.sealKeeper);
    return obj;
  },

  fromPartial(object: DeepPartial<Module>): Module {
    const message = { ...baseModule } as Module;
    message.sealKeeper = object.sealKeeper ?? false;
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
