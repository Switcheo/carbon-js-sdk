/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.misc";

export interface Block {
  blockHeight: Long;
  time: string;
  count: number;
  proposerAddress: string;
}

function createBaseBlock(): Block {
  return { blockHeight: Long.UZERO, time: "", count: 0, proposerAddress: "" };
}

export const Block = {
  encode(message: Block, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.blockHeight.isZero()) {
      writer.uint32(8).uint64(message.blockHeight);
    }
    if (message.time !== "") {
      writer.uint32(18).string(message.time);
    }
    if (message.count !== 0) {
      writer.uint32(24).uint32(message.count);
    }
    if (message.proposerAddress !== "") {
      writer.uint32(34).string(message.proposerAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Block {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.blockHeight = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.time = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.count = reader.uint32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.proposerAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Block {
    return {
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.UZERO,
      time: isSet(object.time) ? String(object.time) : "",
      count: isSet(object.count) ? Number(object.count) : 0,
      proposerAddress: isSet(object.proposerAddress) ? String(object.proposerAddress) : "",
    };
  },

  toJSON(message: Block): unknown {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.UZERO).toString());
    message.time !== undefined && (obj.time = message.time);
    message.count !== undefined && (obj.count = Math.round(message.count));
    message.proposerAddress !== undefined && (obj.proposerAddress = message.proposerAddress);
    return obj;
  },

  create(base?: DeepPartial<Block>): Block {
    return Block.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Block>): Block {
    const message = createBaseBlock();
    message.blockHeight = (object.blockHeight !== undefined && object.blockHeight !== null)
      ? Long.fromValue(object.blockHeight)
      : Long.UZERO;
    message.time = object.time ?? "";
    message.count = object.count ?? 0;
    message.proposerAddress = object.proposerAddress ?? "";
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
