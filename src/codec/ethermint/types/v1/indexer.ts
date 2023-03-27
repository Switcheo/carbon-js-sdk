/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "ethermint.types.v1";

/** TxResult is the value stored in eth tx indexer */
export interface TxResult {
  /** height of the blockchain */
  height: Long;
  /** tx_index of the cosmos transaction */
  txIndex: number;
  /** msg_index in a batch transaction */
  msgIndex: number;
  /**
   * eth_tx_index is the index in the list of valid eth tx in the block,
   * aka. the transaction list returned by eth_getBlock api.
   */
  ethTxIndex: number;
  /** failed is true if the eth transaction did not go succeed */
  failed: boolean;
  /**
   * gas_used by the transaction. If it exceeds the block gas limit,
   * it's set to gas limit, which is what's actually deducted by ante handler.
   */
  gasUsed: Long;
  /**
   * cumulative_gas_used specifies the cumulated amount of gas used for all
   * processed messages within the current batch transaction.
   */
  cumulativeGasUsed: Long;
}

const baseTxResult: object = {
  height: Long.ZERO,
  txIndex: 0,
  msgIndex: 0,
  ethTxIndex: 0,
  failed: false,
  gasUsed: Long.UZERO,
  cumulativeGasUsed: Long.UZERO,
};

export const TxResult = {
  encode(
    message: TxResult,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.txIndex !== 0) {
      writer.uint32(16).uint32(message.txIndex);
    }
    if (message.msgIndex !== 0) {
      writer.uint32(24).uint32(message.msgIndex);
    }
    if (message.ethTxIndex !== 0) {
      writer.uint32(32).int32(message.ethTxIndex);
    }
    if (message.failed === true) {
      writer.uint32(40).bool(message.failed);
    }
    if (!message.gasUsed.isZero()) {
      writer.uint32(48).uint64(message.gasUsed);
    }
    if (!message.cumulativeGasUsed.isZero()) {
      writer.uint32(56).uint64(message.cumulativeGasUsed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTxResult } as TxResult;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64() as Long;
          break;
        case 2:
          message.txIndex = reader.uint32();
          break;
        case 3:
          message.msgIndex = reader.uint32();
          break;
        case 4:
          message.ethTxIndex = reader.int32();
          break;
        case 5:
          message.failed = reader.bool();
          break;
        case 6:
          message.gasUsed = reader.uint64() as Long;
          break;
        case 7:
          message.cumulativeGasUsed = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TxResult {
    const message = { ...baseTxResult } as TxResult;
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromString(object.height)
        : Long.ZERO;
    message.txIndex =
      object.txIndex !== undefined && object.txIndex !== null
        ? Number(object.txIndex)
        : 0;
    message.msgIndex =
      object.msgIndex !== undefined && object.msgIndex !== null
        ? Number(object.msgIndex)
        : 0;
    message.ethTxIndex =
      object.ethTxIndex !== undefined && object.ethTxIndex !== null
        ? Number(object.ethTxIndex)
        : 0;
    message.failed =
      object.failed !== undefined && object.failed !== null
        ? Boolean(object.failed)
        : false;
    message.gasUsed =
      object.gasUsed !== undefined && object.gasUsed !== null
        ? Long.fromString(object.gasUsed)
        : Long.UZERO;
    message.cumulativeGasUsed =
      object.cumulativeGasUsed !== undefined &&
      object.cumulativeGasUsed !== null
        ? Long.fromString(object.cumulativeGasUsed)
        : Long.UZERO;
    return message;
  },

  toJSON(message: TxResult): unknown {
    const obj: any = {};
    message.height !== undefined &&
      (obj.height = (message.height || Long.ZERO).toString());
    message.txIndex !== undefined && (obj.txIndex = message.txIndex);
    message.msgIndex !== undefined && (obj.msgIndex = message.msgIndex);
    message.ethTxIndex !== undefined && (obj.ethTxIndex = message.ethTxIndex);
    message.failed !== undefined && (obj.failed = message.failed);
    message.gasUsed !== undefined &&
      (obj.gasUsed = (message.gasUsed || Long.UZERO).toString());
    message.cumulativeGasUsed !== undefined &&
      (obj.cumulativeGasUsed = (
        message.cumulativeGasUsed || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<TxResult>): TxResult {
    const message = { ...baseTxResult } as TxResult;
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromValue(object.height)
        : Long.ZERO;
    message.txIndex = object.txIndex ?? 0;
    message.msgIndex = object.msgIndex ?? 0;
    message.ethTxIndex = object.ethTxIndex ?? 0;
    message.failed = object.failed ?? false;
    message.gasUsed =
      object.gasUsed !== undefined && object.gasUsed !== null
        ? Long.fromValue(object.gasUsed)
        : Long.UZERO;
    message.cumulativeGasUsed =
      object.cumulativeGasUsed !== undefined &&
      object.cumulativeGasUsed !== null
        ? Long.fromValue(object.cumulativeGasUsed)
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
