/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "ethermint.evm.v1";

/** EventEthereumTx defines the event for an Ethereum transaction */
export interface EventEthereumTx {
  /** amount */
  amount: string;
  /** eth_hash is the Ethereum hash of the transaction */
  ethHash: string;
  /** index of the transaction in the block */
  index: string;
  /** gas_used is the amount of gas used by the transaction */
  gasUsed: string;
  /** hash is the Tendermint hash of the transaction */
  hash: string;
  /** recipient of the transaction */
  recipient: string;
  /** eth_tx_failed contains a VM error should it occur */
  ethTxFailed: string;
}

/** EventTxLog defines the event for an Ethereum transaction log */
export interface EventTxLog {
  /** tx_logs is an array of transaction logs */
  txLogs: string[];
}

/** EventMessage */
export interface EventMessage {
  /** module which emits the event */
  module: string;
  /** sender of the message */
  sender: string;
  /** tx_type is the type of the message */
  txType: string;
}

/** EventBlockBloom defines an Ethereum block bloom filter event */
export interface EventBlockBloom {
  /** bloom is the bloom filter of the block */
  bloom: string;
}

const baseEventEthereumTx: object = {
  amount: "",
  ethHash: "",
  index: "",
  gasUsed: "",
  hash: "",
  recipient: "",
  ethTxFailed: "",
};

export const EventEthereumTx = {
  encode(
    message: EventEthereumTx,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.ethHash !== "") {
      writer.uint32(18).string(message.ethHash);
    }
    if (message.index !== "") {
      writer.uint32(26).string(message.index);
    }
    if (message.gasUsed !== "") {
      writer.uint32(34).string(message.gasUsed);
    }
    if (message.hash !== "") {
      writer.uint32(42).string(message.hash);
    }
    if (message.recipient !== "") {
      writer.uint32(50).string(message.recipient);
    }
    if (message.ethTxFailed !== "") {
      writer.uint32(58).string(message.ethTxFailed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventEthereumTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventEthereumTx } as EventEthereumTx;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        case 2:
          message.ethHash = reader.string();
          break;
        case 3:
          message.index = reader.string();
          break;
        case 4:
          message.gasUsed = reader.string();
          break;
        case 5:
          message.hash = reader.string();
          break;
        case 6:
          message.recipient = reader.string();
          break;
        case 7:
          message.ethTxFailed = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventEthereumTx {
    const message = { ...baseEventEthereumTx } as EventEthereumTx;
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    message.ethHash =
      object.ethHash !== undefined && object.ethHash !== null
        ? String(object.ethHash)
        : "";
    message.index =
      object.index !== undefined && object.index !== null
        ? String(object.index)
        : "";
    message.gasUsed =
      object.gasUsed !== undefined && object.gasUsed !== null
        ? String(object.gasUsed)
        : "";
    message.hash =
      object.hash !== undefined && object.hash !== null
        ? String(object.hash)
        : "";
    message.recipient =
      object.recipient !== undefined && object.recipient !== null
        ? String(object.recipient)
        : "";
    message.ethTxFailed =
      object.ethTxFailed !== undefined && object.ethTxFailed !== null
        ? String(object.ethTxFailed)
        : "";
    return message;
  },

  toJSON(message: EventEthereumTx): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    message.ethHash !== undefined && (obj.ethHash = message.ethHash);
    message.index !== undefined && (obj.index = message.index);
    message.gasUsed !== undefined && (obj.gasUsed = message.gasUsed);
    message.hash !== undefined && (obj.hash = message.hash);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.ethTxFailed !== undefined &&
      (obj.ethTxFailed = message.ethTxFailed);
    return obj;
  },

  fromPartial(object: DeepPartial<EventEthereumTx>): EventEthereumTx {
    const message = { ...baseEventEthereumTx } as EventEthereumTx;
    message.amount = object.amount ?? "";
    message.ethHash = object.ethHash ?? "";
    message.index = object.index ?? "";
    message.gasUsed = object.gasUsed ?? "";
    message.hash = object.hash ?? "";
    message.recipient = object.recipient ?? "";
    message.ethTxFailed = object.ethTxFailed ?? "";
    return message;
  },
};

const baseEventTxLog: object = { txLogs: "" };

export const EventTxLog = {
  encode(
    message: EventTxLog,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.txLogs) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTxLog {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventTxLog } as EventTxLog;
    message.txLogs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txLogs.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventTxLog {
    const message = { ...baseEventTxLog } as EventTxLog;
    message.txLogs = (object.txLogs ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: EventTxLog): unknown {
    const obj: any = {};
    if (message.txLogs) {
      obj.txLogs = message.txLogs.map((e) => e);
    } else {
      obj.txLogs = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<EventTxLog>): EventTxLog {
    const message = { ...baseEventTxLog } as EventTxLog;
    message.txLogs = (object.txLogs ?? []).map((e) => e);
    return message;
  },
};

const baseEventMessage: object = { module: "", sender: "", txType: "" };

export const EventMessage = {
  encode(
    message: EventMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.txType !== "") {
      writer.uint32(26).string(message.txType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventMessage } as EventMessage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.module = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.txType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventMessage {
    const message = { ...baseEventMessage } as EventMessage;
    message.module =
      object.module !== undefined && object.module !== null
        ? String(object.module)
        : "";
    message.sender =
      object.sender !== undefined && object.sender !== null
        ? String(object.sender)
        : "";
    message.txType =
      object.txType !== undefined && object.txType !== null
        ? String(object.txType)
        : "";
    return message;
  },

  toJSON(message: EventMessage): unknown {
    const obj: any = {};
    message.module !== undefined && (obj.module = message.module);
    message.sender !== undefined && (obj.sender = message.sender);
    message.txType !== undefined && (obj.txType = message.txType);
    return obj;
  },

  fromPartial(object: DeepPartial<EventMessage>): EventMessage {
    const message = { ...baseEventMessage } as EventMessage;
    message.module = object.module ?? "";
    message.sender = object.sender ?? "";
    message.txType = object.txType ?? "";
    return message;
  },
};

const baseEventBlockBloom: object = { bloom: "" };

export const EventBlockBloom = {
  encode(
    message: EventBlockBloom,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bloom !== "") {
      writer.uint32(10).string(message.bloom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBlockBloom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventBlockBloom } as EventBlockBloom;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bloom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventBlockBloom {
    const message = { ...baseEventBlockBloom } as EventBlockBloom;
    message.bloom =
      object.bloom !== undefined && object.bloom !== null
        ? String(object.bloom)
        : "";
    return message;
  },

  toJSON(message: EventBlockBloom): unknown {
    const obj: any = {};
    message.bloom !== undefined && (obj.bloom = message.bloom);
    return obj;
  },

  fromPartial(object: DeepPartial<EventBlockBloom>): EventBlockBloom {
    const message = { ...baseEventBlockBloom } as EventBlockBloom;
    message.bloom = object.bloom ?? "";
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
