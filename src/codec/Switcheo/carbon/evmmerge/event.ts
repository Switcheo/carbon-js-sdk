/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.evmmerge";

export interface MergeAccountEvent {
  ethAddress: string;
  cosmosAddress: string;
  newCosmosAccCreated: boolean;
}

function createBaseMergeAccountEvent(): MergeAccountEvent {
  return { ethAddress: "", cosmosAddress: "", newCosmosAccCreated: false };
}

export const MergeAccountEvent = {
  encode(message: MergeAccountEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ethAddress !== "") {
      writer.uint32(10).string(message.ethAddress);
    }
    if (message.cosmosAddress !== "") {
      writer.uint32(18).string(message.cosmosAddress);
    }
    if (message.newCosmosAccCreated === true) {
      writer.uint32(24).bool(message.newCosmosAccCreated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MergeAccountEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMergeAccountEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ethAddress = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cosmosAddress = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.newCosmosAccCreated = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MergeAccountEvent {
    return {
      ethAddress: isSet(object.ethAddress) ? String(object.ethAddress) : "",
      cosmosAddress: isSet(object.cosmosAddress) ? String(object.cosmosAddress) : "",
      newCosmosAccCreated: isSet(object.newCosmosAccCreated) ? Boolean(object.newCosmosAccCreated) : false,
    };
  },

  toJSON(message: MergeAccountEvent): unknown {
    const obj: any = {};
    message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
    message.cosmosAddress !== undefined && (obj.cosmosAddress = message.cosmosAddress);
    message.newCosmosAccCreated !== undefined && (obj.newCosmosAccCreated = message.newCosmosAccCreated);
    return obj;
  },

  create(base?: DeepPartial<MergeAccountEvent>): MergeAccountEvent {
    return MergeAccountEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MergeAccountEvent>): MergeAccountEvent {
    const message = createBaseMergeAccountEvent();
    message.ethAddress = object.ethAddress ?? "";
    message.cosmosAddress = object.cosmosAddress ?? "";
    message.newCosmosAccCreated = object.newCosmosAccCreated ?? false;
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
