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
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.blockchain =
      object.blockchain !== undefined && object.blockchain !== null
        ? String(object.blockchain)
        : "";
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
        ? String(object.blockHeight)
        : "";
    message.transactionHash =
      object.transactionHash !== undefined && object.transactionHash !== null
        ? String(object.transactionHash)
        : "";
    message.contractHash =
      object.contractHash !== undefined && object.contractHash !== null
        ? String(object.contractHash)
        : "";
    message.transferType =
      object.transferType !== undefined && object.transferType !== null
        ? String(object.transferType)
        : "";
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? String(object.amount)
        : "";
    message.feeAmount =
      object.feeAmount !== undefined && object.feeAmount !== null
        ? String(object.feeAmount)
        : "";
    message.status =
      object.status !== undefined && object.status !== null
        ? String(object.status)
        : "";
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? fromJsonTimestamp(object.timestamp)
        : undefined;
    message.paramsHash =
      object.paramsHash !== undefined && object.paramsHash !== null
        ? String(object.paramsHash)
        : "";
    message.feeAddress =
      object.feeAddress !== undefined && object.feeAddress !== null
        ? String(object.feeAddress)
        : "";
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

  fromPartial<I extends Exact<DeepPartial<ExternalTransfer>, I>>(
    object: I
  ): ExternalTransfer {
    const message = { ...baseExternalTransfer } as ExternalTransfer;
    message.id = object.id ?? "";
    message.blockchain = object.blockchain ?? "";
    message.blockHeight = object.blockHeight ?? "";
    message.transactionHash = object.transactionHash ?? "";
    message.contractHash = object.contractHash ?? "";
    message.transferType = object.transferType ?? "";
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.feeAmount = object.feeAmount ?? "";
    message.status = object.status ?? "";
    message.timestamp = object.timestamp ?? undefined;
    message.paramsHash = object.paramsHash ?? "";
    message.feeAddress = object.feeAddress ?? "";
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

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

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
