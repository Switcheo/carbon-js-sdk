/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { OrderIDs, Order } from "./order";

export const protobufPackage = "Switcheo.carbon.order";

/** GenesisState defines the order module's genesis state. */
export interface GenesisState {
  /**
   * this line is used by starport scaffolding # genesis/proto/state
   * this line is used by starport scaffolding # ibc/genesis/proto
   */
  orders: Order[];
  accountOrderIds: GenesisAccountOrderIDs[];
  accountSequences: GenesisAccountSequence[];
  flags: GenesisFlag[];
}

export interface GenesisAccountOrderIDs {
  address: string;
  market: string;
  openOrderIds?: OrderIDs;
}

export interface GenesisAccountSequence {
  address: string;
  sequenceNumber: Long;
}

export interface GenesisFlag {
  blockchain: string;
  isTradingEnabled: boolean;
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.accountOrderIds) {
      GenesisAccountOrderIDs.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.accountSequences) {
      GenesisAccountSequence.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.flags) {
      GenesisFlag.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.orders = [];
    message.accountOrderIds = [];
    message.accountSequences = [];
    message.flags = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(Order.decode(reader, reader.uint32()));
          break;
        case 2:
          message.accountOrderIds.push(
            GenesisAccountOrderIDs.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.accountSequences.push(
            GenesisAccountSequence.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.flags.push(GenesisFlag.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.orders = (object.orders ?? []).map((e: any) => Order.fromJSON(e));
    message.accountOrderIds = (object.accountOrderIds ?? []).map((e: any) =>
      GenesisAccountOrderIDs.fromJSON(e)
    );
    message.accountSequences = (object.accountSequences ?? []).map((e: any) =>
      GenesisAccountSequence.fromJSON(e)
    );
    message.flags = (object.flags ?? []).map((e: any) =>
      GenesisFlag.fromJSON(e)
    );
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map((e) => (e ? Order.toJSON(e) : undefined));
    } else {
      obj.orders = [];
    }
    if (message.accountOrderIds) {
      obj.accountOrderIds = message.accountOrderIds.map((e) =>
        e ? GenesisAccountOrderIDs.toJSON(e) : undefined
      );
    } else {
      obj.accountOrderIds = [];
    }
    if (message.accountSequences) {
      obj.accountSequences = message.accountSequences.map((e) =>
        e ? GenesisAccountSequence.toJSON(e) : undefined
      );
    } else {
      obj.accountSequences = [];
    }
    if (message.flags) {
      obj.flags = message.flags.map((e) =>
        e ? GenesisFlag.toJSON(e) : undefined
      );
    } else {
      obj.flags = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.orders = (object.orders ?? []).map((e) => Order.fromPartial(e));
    message.accountOrderIds = (object.accountOrderIds ?? []).map((e) =>
      GenesisAccountOrderIDs.fromPartial(e)
    );
    message.accountSequences = (object.accountSequences ?? []).map((e) =>
      GenesisAccountSequence.fromPartial(e)
    );
    message.flags = (object.flags ?? []).map((e) => GenesisFlag.fromPartial(e));
    return message;
  },
};

const baseGenesisAccountOrderIDs: object = { address: "", market: "" };

export const GenesisAccountOrderIDs = {
  encode(
    message: GenesisAccountOrderIDs,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.market !== "") {
      writer.uint32(18).string(message.market);
    }
    if (message.openOrderIds !== undefined) {
      OrderIDs.encode(message.openOrderIds, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GenesisAccountOrderIDs {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisAccountOrderIDs } as GenesisAccountOrderIDs;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.market = reader.string();
          break;
        case 3:
          message.openOrderIds = OrderIDs.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisAccountOrderIDs {
    const message = { ...baseGenesisAccountOrderIDs } as GenesisAccountOrderIDs;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.market =
      object.market !== undefined && object.market !== null
        ? String(object.market)
        : "";
    message.openOrderIds =
      object.openOrderIds !== undefined && object.openOrderIds !== null
        ? OrderIDs.fromJSON(object.openOrderIds)
        : undefined;
    return message;
  },

  toJSON(message: GenesisAccountOrderIDs): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.market !== undefined && (obj.market = message.market);
    message.openOrderIds !== undefined &&
      (obj.openOrderIds = message.openOrderIds
        ? OrderIDs.toJSON(message.openOrderIds)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GenesisAccountOrderIDs>
  ): GenesisAccountOrderIDs {
    const message = { ...baseGenesisAccountOrderIDs } as GenesisAccountOrderIDs;
    message.address = object.address ?? "";
    message.market = object.market ?? "";
    message.openOrderIds =
      object.openOrderIds !== undefined && object.openOrderIds !== null
        ? OrderIDs.fromPartial(object.openOrderIds)
        : undefined;
    return message;
  },
};

const baseGenesisAccountSequence: object = {
  address: "",
  sequenceNumber: Long.UZERO,
};

export const GenesisAccountSequence = {
  encode(
    message: GenesisAccountSequence,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (!message.sequenceNumber.isZero()) {
      writer.uint32(16).uint64(message.sequenceNumber);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GenesisAccountSequence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisAccountSequence } as GenesisAccountSequence;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.sequenceNumber = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisAccountSequence {
    const message = { ...baseGenesisAccountSequence } as GenesisAccountSequence;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.sequenceNumber =
      object.sequenceNumber !== undefined && object.sequenceNumber !== null
        ? Long.fromString(object.sequenceNumber)
        : Long.UZERO;
    return message;
  },

  toJSON(message: GenesisAccountSequence): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.sequenceNumber !== undefined &&
      (obj.sequenceNumber = (message.sequenceNumber || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<GenesisAccountSequence>
  ): GenesisAccountSequence {
    const message = { ...baseGenesisAccountSequence } as GenesisAccountSequence;
    message.address = object.address ?? "";
    message.sequenceNumber =
      object.sequenceNumber !== undefined && object.sequenceNumber !== null
        ? Long.fromValue(object.sequenceNumber)
        : Long.UZERO;
    return message;
  },
};

const baseGenesisFlag: object = { blockchain: "", isTradingEnabled: false };

export const GenesisFlag = {
  encode(
    message: GenesisFlag,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.blockchain !== "") {
      writer.uint32(10).string(message.blockchain);
    }
    if (message.isTradingEnabled === true) {
      writer.uint32(16).bool(message.isTradingEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisFlag {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisFlag } as GenesisFlag;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockchain = reader.string();
          break;
        case 2:
          message.isTradingEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisFlag {
    const message = { ...baseGenesisFlag } as GenesisFlag;
    message.blockchain =
      object.blockchain !== undefined && object.blockchain !== null
        ? String(object.blockchain)
        : "";
    message.isTradingEnabled =
      object.isTradingEnabled !== undefined && object.isTradingEnabled !== null
        ? Boolean(object.isTradingEnabled)
        : false;
    return message;
  },

  toJSON(message: GenesisFlag): unknown {
    const obj: any = {};
    message.blockchain !== undefined && (obj.blockchain = message.blockchain);
    message.isTradingEnabled !== undefined &&
      (obj.isTradingEnabled = message.isTradingEnabled);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisFlag>): GenesisFlag {
    const message = { ...baseGenesisFlag } as GenesisFlag;
    message.blockchain = object.blockchain ?? "";
    message.isTradingEnabled = object.isTradingEnabled ?? false;
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
