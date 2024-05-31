/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timeout, Order, orderFromJSON, orderToJSON } from "./channel";

export const protobufPackage = "ibc.core.channel.v1";

/**
 * Upgrade is a verifiable type which contains the relevant information
 * for an attempted upgrade. It provides the proposed changes to the channel
 * end, the timeout for this upgrade attempt and the next packet sequence
 * which allows the counterparty to efficiently know the highest sequence it has received.
 * The next sequence send is used for pruning and upgrading from unordered to ordered channels.
 */
export interface Upgrade {
  fields?: UpgradeFields;
  timeout?: Timeout;
  nextSequenceSend: Long;
}

/**
 * UpgradeFields are the fields in a channel end which may be changed
 * during a channel upgrade.
 */
export interface UpgradeFields {
  ordering: Order;
  connectionHops: string[];
  version: string;
}

/**
 * ErrorReceipt defines a type which encapsulates the upgrade sequence and error associated with the
 * upgrade handshake failure. When a channel upgrade handshake is aborted both chains are expected to increment to the
 * next sequence.
 */
export interface ErrorReceipt {
  /** the channel upgrade sequence */
  sequence: Long;
  /** the error message detailing the cause of failure */
  message: string;
}

const baseUpgrade: object = { nextSequenceSend: Long.UZERO };

export const Upgrade = {
  encode(
    message: Upgrade,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fields !== undefined) {
      UpgradeFields.encode(message.fields, writer.uint32(10).fork()).ldelim();
    }
    if (message.timeout !== undefined) {
      Timeout.encode(message.timeout, writer.uint32(18).fork()).ldelim();
    }
    if (!message.nextSequenceSend.isZero()) {
      writer.uint32(24).uint64(message.nextSequenceSend);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Upgrade {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpgrade } as Upgrade;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fields = UpgradeFields.decode(reader, reader.uint32());
          break;
        case 2:
          message.timeout = Timeout.decode(reader, reader.uint32());
          break;
        case 3:
          message.nextSequenceSend = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Upgrade {
    const message = { ...baseUpgrade } as Upgrade;
    message.fields =
      object.fields !== undefined && object.fields !== null
        ? UpgradeFields.fromJSON(object.fields)
        : undefined;
    message.timeout =
      object.timeout !== undefined && object.timeout !== null
        ? Timeout.fromJSON(object.timeout)
        : undefined;
    message.nextSequenceSend =
      object.nextSequenceSend !== undefined && object.nextSequenceSend !== null
        ? Long.fromString(object.nextSequenceSend)
        : Long.UZERO;
    return message;
  },

  toJSON(message: Upgrade): unknown {
    const obj: any = {};
    message.fields !== undefined &&
      (obj.fields = message.fields
        ? UpgradeFields.toJSON(message.fields)
        : undefined);
    message.timeout !== undefined &&
      (obj.timeout = message.timeout
        ? Timeout.toJSON(message.timeout)
        : undefined);
    message.nextSequenceSend !== undefined &&
      (obj.nextSequenceSend = (
        message.nextSequenceSend || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Upgrade>): Upgrade {
    const message = { ...baseUpgrade } as Upgrade;
    message.fields =
      object.fields !== undefined && object.fields !== null
        ? UpgradeFields.fromPartial(object.fields)
        : undefined;
    message.timeout =
      object.timeout !== undefined && object.timeout !== null
        ? Timeout.fromPartial(object.timeout)
        : undefined;
    message.nextSequenceSend =
      object.nextSequenceSend !== undefined && object.nextSequenceSend !== null
        ? Long.fromValue(object.nextSequenceSend)
        : Long.UZERO;
    return message;
  },
};

const baseUpgradeFields: object = {
  ordering: 0,
  connectionHops: "",
  version: "",
};

export const UpgradeFields = {
  encode(
    message: UpgradeFields,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ordering !== 0) {
      writer.uint32(8).int32(message.ordering);
    }
    for (const v of message.connectionHops) {
      writer.uint32(18).string(v!);
    }
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpgradeFields {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpgradeFields } as UpgradeFields;
    message.connectionHops = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ordering = reader.int32() as any;
          break;
        case 2:
          message.connectionHops.push(reader.string());
          break;
        case 3:
          message.version = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpgradeFields {
    const message = { ...baseUpgradeFields } as UpgradeFields;
    message.ordering =
      object.ordering !== undefined && object.ordering !== null
        ? orderFromJSON(object.ordering)
        : 0;
    message.connectionHops = (object.connectionHops ?? []).map((e: any) =>
      String(e)
    );
    message.version =
      object.version !== undefined && object.version !== null
        ? String(object.version)
        : "";
    return message;
  },

  toJSON(message: UpgradeFields): unknown {
    const obj: any = {};
    message.ordering !== undefined &&
      (obj.ordering = orderToJSON(message.ordering));
    if (message.connectionHops) {
      obj.connectionHops = message.connectionHops.map((e) => e);
    } else {
      obj.connectionHops = [];
    }
    message.version !== undefined && (obj.version = message.version);
    return obj;
  },

  fromPartial(object: DeepPartial<UpgradeFields>): UpgradeFields {
    const message = { ...baseUpgradeFields } as UpgradeFields;
    message.ordering = object.ordering ?? 0;
    message.connectionHops = (object.connectionHops ?? []).map((e) => e);
    message.version = object.version ?? "";
    return message;
  },
};

const baseErrorReceipt: object = { sequence: Long.UZERO, message: "" };

export const ErrorReceipt = {
  encode(
    message: ErrorReceipt,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.sequence.isZero()) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ErrorReceipt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseErrorReceipt } as ErrorReceipt;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64() as Long;
          break;
        case 2:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ErrorReceipt {
    const message = { ...baseErrorReceipt } as ErrorReceipt;
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? Long.fromString(object.sequence)
        : Long.UZERO;
    message.message =
      object.message !== undefined && object.message !== null
        ? String(object.message)
        : "";
    return message;
  },

  toJSON(message: ErrorReceipt): unknown {
    const obj: any = {};
    message.sequence !== undefined &&
      (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(object: DeepPartial<ErrorReceipt>): ErrorReceipt {
    const message = { ...baseErrorReceipt } as ErrorReceipt;
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? Long.fromValue(object.sequence)
        : Long.UZERO;
    message.message = object.message ?? "";
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
