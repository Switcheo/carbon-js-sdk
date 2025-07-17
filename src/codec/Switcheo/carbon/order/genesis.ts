/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Order, OrderIds } from "./order";
import { Params } from "./params";

export const protobufPackage = "Switcheo.carbon.order";

/** GenesisState defines the order module's genesis state. */
export interface GenesisState {
  /**
   * this line is used by starport scaffolding # genesis/proto/state
   * this line is used by starport scaffolding # ibc/genesis/proto
   */
  orders: Order[];
  accountOrderIds: GenesisAccountOrderIds[];
  accountSequences: GenesisAccountSequence[];
  flags: GenesisFlag[];
  params?: Params;
}

export interface GenesisAccountOrderIds {
  address: string;
  marketId: string;
  openOrderIds?: OrderIds;
}

export interface GenesisAccountSequence {
  address: string;
  sequenceNumber: Long;
}

export interface GenesisFlag {
  blockchain: string;
  isTradingEnabled: boolean;
}

function createBaseGenesisState(): GenesisState {
  return { orders: [], accountOrderIds: [], accountSequences: [], flags: [], params: undefined };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.accountOrderIds) {
      GenesisAccountOrderIds.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.accountSequences) {
      GenesisAccountSequence.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.flags) {
      GenesisFlag.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.orders.push(Order.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.accountOrderIds.push(GenesisAccountOrderIds.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.accountSequences.push(GenesisAccountSequence.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.flags.push(GenesisFlag.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => Order.fromJSON(e)) : [],
      accountOrderIds: Array.isArray(object?.accountOrderIds)
        ? object.accountOrderIds.map((e: any) => GenesisAccountOrderIds.fromJSON(e))
        : [],
      accountSequences: Array.isArray(object?.accountSequences)
        ? object.accountSequences.map((e: any) => GenesisAccountSequence.fromJSON(e))
        : [],
      flags: Array.isArray(object?.flags) ? object.flags.map((e: any) => GenesisFlag.fromJSON(e)) : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map((e) => e ? Order.toJSON(e) : undefined);
    } else {
      obj.orders = [];
    }
    if (message.accountOrderIds) {
      obj.accountOrderIds = message.accountOrderIds.map((e) => e ? GenesisAccountOrderIds.toJSON(e) : undefined);
    } else {
      obj.accountOrderIds = [];
    }
    if (message.accountSequences) {
      obj.accountSequences = message.accountSequences.map((e) => e ? GenesisAccountSequence.toJSON(e) : undefined);
    } else {
      obj.accountSequences = [];
    }
    if (message.flags) {
      obj.flags = message.flags.map((e) => e ? GenesisFlag.toJSON(e) : undefined);
    } else {
      obj.flags = [];
    }
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GenesisState>): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.orders = object.orders?.map((e) => Order.fromPartial(e)) || [];
    message.accountOrderIds = object.accountOrderIds?.map((e) => GenesisAccountOrderIds.fromPartial(e)) || [];
    message.accountSequences = object.accountSequences?.map((e) => GenesisAccountSequence.fromPartial(e)) || [];
    message.flags = object.flags?.map((e) => GenesisFlag.fromPartial(e)) || [];
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseGenesisAccountOrderIds(): GenesisAccountOrderIds {
  return { address: "", marketId: "", openOrderIds: undefined };
}

export const GenesisAccountOrderIds = {
  encode(message: GenesisAccountOrderIds, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.openOrderIds !== undefined) {
      OrderIds.encode(message.openOrderIds, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisAccountOrderIds {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisAccountOrderIds();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.marketId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.openOrderIds = OrderIds.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisAccountOrderIds {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      openOrderIds: isSet(object.openOrderIds) ? OrderIds.fromJSON(object.openOrderIds) : undefined,
    };
  },

  toJSON(message: GenesisAccountOrderIds): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.openOrderIds !== undefined &&
      (obj.openOrderIds = message.openOrderIds ? OrderIds.toJSON(message.openOrderIds) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GenesisAccountOrderIds>): GenesisAccountOrderIds {
    return GenesisAccountOrderIds.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GenesisAccountOrderIds>): GenesisAccountOrderIds {
    const message = createBaseGenesisAccountOrderIds();
    message.address = object.address ?? "";
    message.marketId = object.marketId ?? "";
    message.openOrderIds = (object.openOrderIds !== undefined && object.openOrderIds !== null)
      ? OrderIds.fromPartial(object.openOrderIds)
      : undefined;
    return message;
  },
};

function createBaseGenesisAccountSequence(): GenesisAccountSequence {
  return { address: "", sequenceNumber: Long.UZERO };
}

export const GenesisAccountSequence = {
  encode(message: GenesisAccountSequence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (!message.sequenceNumber.isZero()) {
      writer.uint32(16).uint64(message.sequenceNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisAccountSequence {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisAccountSequence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.sequenceNumber = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisAccountSequence {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      sequenceNumber: isSet(object.sequenceNumber) ? Long.fromValue(object.sequenceNumber) : Long.UZERO,
    };
  },

  toJSON(message: GenesisAccountSequence): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.sequenceNumber !== undefined && (obj.sequenceNumber = (message.sequenceNumber || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<GenesisAccountSequence>): GenesisAccountSequence {
    return GenesisAccountSequence.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GenesisAccountSequence>): GenesisAccountSequence {
    const message = createBaseGenesisAccountSequence();
    message.address = object.address ?? "";
    message.sequenceNumber = (object.sequenceNumber !== undefined && object.sequenceNumber !== null)
      ? Long.fromValue(object.sequenceNumber)
      : Long.UZERO;
    return message;
  },
};

function createBaseGenesisFlag(): GenesisFlag {
  return { blockchain: "", isTradingEnabled: false };
}

export const GenesisFlag = {
  encode(message: GenesisFlag, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockchain !== "") {
      writer.uint32(10).string(message.blockchain);
    }
    if (message.isTradingEnabled === true) {
      writer.uint32(16).bool(message.isTradingEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisFlag {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisFlag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.blockchain = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.isTradingEnabled = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisFlag {
    return {
      blockchain: isSet(object.blockchain) ? String(object.blockchain) : "",
      isTradingEnabled: isSet(object.isTradingEnabled) ? Boolean(object.isTradingEnabled) : false,
    };
  },

  toJSON(message: GenesisFlag): unknown {
    const obj: any = {};
    message.blockchain !== undefined && (obj.blockchain = message.blockchain);
    message.isTradingEnabled !== undefined && (obj.isTradingEnabled = message.isTradingEnabled);
    return obj;
  },

  create(base?: DeepPartial<GenesisFlag>): GenesisFlag {
    return GenesisFlag.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GenesisFlag>): GenesisFlag {
    const message = createBaseGenesisFlag();
    message.blockchain = object.blockchain ?? "";
    message.isTradingEnabled = object.isTradingEnabled ?? false;
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
