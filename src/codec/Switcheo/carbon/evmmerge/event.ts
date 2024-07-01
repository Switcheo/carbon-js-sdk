/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.evmmerge";

export interface MergeAccountEvent {
  ethAddress: string;
  cosmosAddress: string;
  newCosmosAccCreated: boolean;
}

const baseMergeAccountEvent: object = {
  ethAddress: "",
  cosmosAddress: "",
  newCosmosAccCreated: false,
};

export const MergeAccountEvent = {
  encode(
    message: MergeAccountEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMergeAccountEvent } as MergeAccountEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ethAddress = reader.string();
          break;
        case 2:
          message.cosmosAddress = reader.string();
          break;
        case 3:
          message.newCosmosAccCreated = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MergeAccountEvent {
    const message = { ...baseMergeAccountEvent } as MergeAccountEvent;
    message.ethAddress =
      object.ethAddress !== undefined && object.ethAddress !== null
        ? String(object.ethAddress)
        : "";
    message.cosmosAddress =
      object.cosmosAddress !== undefined && object.cosmosAddress !== null
        ? String(object.cosmosAddress)
        : "";
    message.newCosmosAccCreated =
      object.newCosmosAccCreated !== undefined &&
      object.newCosmosAccCreated !== null
        ? Boolean(object.newCosmosAccCreated)
        : false;
    return message;
  },

  toJSON(message: MergeAccountEvent): unknown {
    const obj: any = {};
    message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
    message.cosmosAddress !== undefined &&
      (obj.cosmosAddress = message.cosmosAddress);
    message.newCosmosAccCreated !== undefined &&
      (obj.newCosmosAccCreated = message.newCosmosAccCreated);
    return obj;
  },

  fromPartial(object: DeepPartial<MergeAccountEvent>): MergeAccountEvent {
    const message = { ...baseMergeAccountEvent } as MergeAccountEvent;
    message.ethAddress = object.ethAddress ?? "";
    message.cosmosAddress = object.cosmosAddress ?? "";
    message.newCosmosAccCreated = object.newCosmosAccCreated ?? false;
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
