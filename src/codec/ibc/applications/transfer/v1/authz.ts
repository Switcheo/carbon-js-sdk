/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "ibc.applications.transfer.v1";

/** Allocation defines the spend limit for a particular port and channel */
export interface Allocation {
  /** the port on which the packet will be sent */
  sourcePort: string;
  /** the channel by which the packet will be sent */
  sourceChannel: string;
  /** spend limitation on the channel */
  spendLimit: Coin[];
  /** allow list of receivers, an empty allow list permits any receiver address */
  allowList: string[];
  /**
   * allow list of packet data keys, an empty list prohibits all packet data keys;
   * a list only with "*" permits any packet data key
   */
  allowedPacketData: string[];
}

/**
 * TransferAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account for ibc transfer on a specific channel
 */
export interface TransferAuthorization {
  /** port and channel amounts */
  allocations: Allocation[];
}

function createBaseAllocation(): Allocation {
  return { sourcePort: "", sourceChannel: "", spendLimit: [], allowList: [], allowedPacketData: [] };
}

export const Allocation = {
  encode(message: Allocation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourcePort !== "") {
      writer.uint32(10).string(message.sourcePort);
    }
    if (message.sourceChannel !== "") {
      writer.uint32(18).string(message.sourceChannel);
    }
    for (const v of message.spendLimit) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.allowList) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.allowedPacketData) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Allocation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sourcePort = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sourceChannel = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.spendLimit.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.allowList.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.allowedPacketData.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Allocation {
    return {
      sourcePort: isSet(object.sourcePort) ? String(object.sourcePort) : "",
      sourceChannel: isSet(object.sourceChannel) ? String(object.sourceChannel) : "",
      spendLimit: Array.isArray(object?.spendLimit) ? object.spendLimit.map((e: any) => Coin.fromJSON(e)) : [],
      allowList: Array.isArray(object?.allowList) ? object.allowList.map((e: any) => String(e)) : [],
      allowedPacketData: Array.isArray(object?.allowedPacketData)
        ? object.allowedPacketData.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: Allocation): unknown {
    const obj: any = {};
    message.sourcePort !== undefined && (obj.sourcePort = message.sourcePort);
    message.sourceChannel !== undefined && (obj.sourceChannel = message.sourceChannel);
    if (message.spendLimit) {
      obj.spendLimit = message.spendLimit.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.spendLimit = [];
    }
    if (message.allowList) {
      obj.allowList = message.allowList.map((e) => e);
    } else {
      obj.allowList = [];
    }
    if (message.allowedPacketData) {
      obj.allowedPacketData = message.allowedPacketData.map((e) => e);
    } else {
      obj.allowedPacketData = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Allocation>): Allocation {
    return Allocation.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Allocation>): Allocation {
    const message = createBaseAllocation();
    message.sourcePort = object.sourcePort ?? "";
    message.sourceChannel = object.sourceChannel ?? "";
    message.spendLimit = object.spendLimit?.map((e) => Coin.fromPartial(e)) || [];
    message.allowList = object.allowList?.map((e) => e) || [];
    message.allowedPacketData = object.allowedPacketData?.map((e) => e) || [];
    return message;
  },
};

function createBaseTransferAuthorization(): TransferAuthorization {
  return { allocations: [] };
}

export const TransferAuthorization = {
  encode(message: TransferAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.allocations) {
      Allocation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransferAuthorization {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.allocations.push(Allocation.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TransferAuthorization {
    return {
      allocations: Array.isArray(object?.allocations) ? object.allocations.map((e: any) => Allocation.fromJSON(e)) : [],
    };
  },

  toJSON(message: TransferAuthorization): unknown {
    const obj: any = {};
    if (message.allocations) {
      obj.allocations = message.allocations.map((e) => e ? Allocation.toJSON(e) : undefined);
    } else {
      obj.allocations = [];
    }
    return obj;
  },

  create(base?: DeepPartial<TransferAuthorization>): TransferAuthorization {
    return TransferAuthorization.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TransferAuthorization>): TransferAuthorization {
    const message = createBaseTransferAuthorization();
    message.allocations = object.allocations?.map((e) => Allocation.fromPartial(e)) || [];
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
