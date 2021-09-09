/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../google/protobuf/timestamp";

export const protobufPackage = "Switcheo.carbon.coin";

export interface ExternalTransfer {
  id: string;
  blockchain: string;
  blockHeight: string;
  transactionHash: string;
  contractHash: string;
  transferType: string;
  address: string;
  denom: string;
  amount: string;
  feeAmount: string;
  status: string;
  timestamp?: Date;
  paramsHash: string;
  feeAddress: string;
}

const baseExternalTransfer: object = {
  id: "",
  blockchain: "",
  blockHeight: "",
  transactionHash: "",
  contractHash: "",
  transferType: "",
  address: "",
  denom: "",
  amount: "",
  feeAmount: "",
  status: "",
  paramsHash: "",
  feeAddress: "",
};

export const ExternalTransfer = {
  encode(
    message: ExternalTransfer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.blockchain !== "") {
      writer.uint32(18).string(message.blockchain);
    }
    if (message.blockHeight !== "") {
      writer.uint32(26).string(message.blockHeight);
    }
    if (message.transactionHash !== "") {
      writer.uint32(34).string(message.transactionHash);
    }
    if (message.contractHash !== "") {
      writer.uint32(42).string(message.contractHash);
    }
    if (message.transferType !== "") {
      writer.uint32(50).string(message.transferType);
    }
    if (message.address !== "") {
      writer.uint32(58).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(66).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(74).string(message.amount);
    }
    if (message.feeAmount !== "") {
      writer.uint32(82).string(message.feeAmount);
    }
    if (message.status !== "") {
      writer.uint32(90).string(message.status);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.paramsHash !== "") {
      writer.uint32(106).string(message.paramsHash);
    }
    if (message.feeAddress !== "") {
      writer.uint32(114).string(message.feeAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExternalTransfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExternalTransfer } as ExternalTransfer;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.blockchain = reader.string();
          break;
        case 3:
          message.blockHeight = reader.string();
          break;
        case 4:
          message.transactionHash = reader.string();
          break;
        case 5:
          message.contractHash = reader.string();
          break;
        case 6:
          message.transferType = reader.string();
          break;
        case 7:
          message.address = reader.string();
          break;
        case 8:
          message.denom = reader.string();
          break;
        case 9:
          message.amount = reader.string();
          break;
        case 10:
          message.feeAmount = reader.string();
          break;
        case 11:
          message.status = reader.string();
          break;
        case 12:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 13:
          message.paramsHash = reader.string();
          break;
        case 14:
          message.feeAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExternalTransfer {
    const message = { ...baseExternalTransfer } as ExternalTransfer;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.blockchain !== undefined && object.blockchain !== null) {
      message.blockchain = String(object.blockchain);
    } else {
      message.blockchain = "";
    }
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = String(object.blockHeight);
    } else {
      message.blockHeight = "";
    }
    if (
      object.transactionHash !== undefined &&
      object.transactionHash !== null
    ) {
      message.transactionHash = String(object.transactionHash);
    } else {
      message.transactionHash = "";
    }
    if (object.contractHash !== undefined && object.contractHash !== null) {
      message.contractHash = String(object.contractHash);
    } else {
      message.contractHash = "";
    }
    if (object.transferType !== undefined && object.transferType !== null) {
      message.transferType = String(object.transferType);
    } else {
      message.transferType = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.feeAmount !== undefined && object.feeAmount !== null) {
      message.feeAmount = String(object.feeAmount);
    } else {
      message.feeAmount = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromJsonTimestamp(object.timestamp);
    } else {
      message.timestamp = undefined;
    }
    if (object.paramsHash !== undefined && object.paramsHash !== null) {
      message.paramsHash = String(object.paramsHash);
    } else {
      message.paramsHash = "";
    }
    if (object.feeAddress !== undefined && object.feeAddress !== null) {
      message.feeAddress = String(object.feeAddress);
    } else {
      message.feeAddress = "";
    }
    return message;
  },

  toJSON(message: ExternalTransfer): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.blockchain !== undefined && (obj.blockchain = message.blockchain);
    message.blockHeight !== undefined &&
      (obj.blockHeight = message.blockHeight);
    message.transactionHash !== undefined &&
      (obj.transactionHash = message.transactionHash);
    message.contractHash !== undefined &&
      (obj.contractHash = message.contractHash);
    message.transferType !== undefined &&
      (obj.transferType = message.transferType);
    message.address !== undefined && (obj.address = message.address);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.feeAmount !== undefined && (obj.feeAmount = message.feeAmount);
    message.status !== undefined && (obj.status = message.status);
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    message.paramsHash !== undefined && (obj.paramsHash = message.paramsHash);
    message.feeAddress !== undefined && (obj.feeAddress = message.feeAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<ExternalTransfer>): ExternalTransfer {
    const message = { ...baseExternalTransfer } as ExternalTransfer;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.blockchain !== undefined && object.blockchain !== null) {
      message.blockchain = object.blockchain;
    } else {
      message.blockchain = "";
    }
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = object.blockHeight;
    } else {
      message.blockHeight = "";
    }
    if (
      object.transactionHash !== undefined &&
      object.transactionHash !== null
    ) {
      message.transactionHash = object.transactionHash;
    } else {
      message.transactionHash = "";
    }
    if (object.contractHash !== undefined && object.contractHash !== null) {
      message.contractHash = object.contractHash;
    } else {
      message.contractHash = "";
    }
    if (object.transferType !== undefined && object.transferType !== null) {
      message.transferType = object.transferType;
    } else {
      message.transferType = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.feeAmount !== undefined && object.feeAmount !== null) {
      message.feeAmount = object.feeAmount;
    } else {
      message.feeAmount = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = undefined;
    }
    if (object.paramsHash !== undefined && object.paramsHash !== null) {
      message.paramsHash = object.paramsHash;
    } else {
      message.paramsHash = "";
    }
    if (object.feeAddress !== undefined && object.feeAddress !== null) {
      message.feeAddress = object.feeAddress;
    } else {
      message.feeAddress = "";
    }
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
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
