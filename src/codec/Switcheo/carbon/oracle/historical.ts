/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";

export const protobufPackage = "Switcheo.carbon.oracle";

export interface HistoricalBucketInfo {
  /** auto-incrementing id */
  id: Long;
  duration?: Duration;
}

export interface HistoricalResults {
  oracleId: string;
  bucketId: Long;
  allData: HistoricalData[];
}

export interface HistoricalData {
  data: string;
  timestamp: Long;
}

const baseHistoricalBucketInfo: object = { id: Long.UZERO };

export const HistoricalBucketInfo = {
  encode(
    message: HistoricalBucketInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): HistoricalBucketInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHistoricalBucketInfo } as HistoricalBucketInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HistoricalBucketInfo {
    const message = { ...baseHistoricalBucketInfo } as HistoricalBucketInfo;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromString(object.id)
        : Long.UZERO;
    message.duration =
      object.duration !== undefined && object.duration !== null
        ? Duration.fromJSON(object.duration)
        : undefined;
    return message;
  },

  toJSON(message: HistoricalBucketInfo): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.duration !== undefined &&
      (obj.duration = message.duration
        ? Duration.toJSON(message.duration)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<HistoricalBucketInfo>): HistoricalBucketInfo {
    const message = { ...baseHistoricalBucketInfo } as HistoricalBucketInfo;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.duration =
      object.duration !== undefined && object.duration !== null
        ? Duration.fromPartial(object.duration)
        : undefined;
    return message;
  },
};

const baseHistoricalResults: object = { oracleId: "", bucketId: Long.UZERO };

export const HistoricalResults = {
  encode(
    message: HistoricalResults,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.oracleId !== "") {
      writer.uint32(10).string(message.oracleId);
    }
    if (!message.bucketId.isZero()) {
      writer.uint32(16).uint64(message.bucketId);
    }
    for (const v of message.allData) {
      HistoricalData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HistoricalResults {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHistoricalResults } as HistoricalResults;
    message.allData = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleId = reader.string();
          break;
        case 2:
          message.bucketId = reader.uint64() as Long;
          break;
        case 3:
          message.allData.push(HistoricalData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HistoricalResults {
    const message = { ...baseHistoricalResults } as HistoricalResults;
    message.oracleId =
      object.oracleId !== undefined && object.oracleId !== null
        ? String(object.oracleId)
        : "";
    message.bucketId =
      object.bucketId !== undefined && object.bucketId !== null
        ? Long.fromString(object.bucketId)
        : Long.UZERO;
    message.allData = (object.allData ?? []).map((e: any) =>
      HistoricalData.fromJSON(e)
    );
    return message;
  },

  toJSON(message: HistoricalResults): unknown {
    const obj: any = {};
    message.oracleId !== undefined && (obj.oracleId = message.oracleId);
    message.bucketId !== undefined &&
      (obj.bucketId = (message.bucketId || Long.UZERO).toString());
    if (message.allData) {
      obj.allData = message.allData.map((e) =>
        e ? HistoricalData.toJSON(e) : undefined
      );
    } else {
      obj.allData = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<HistoricalResults>): HistoricalResults {
    const message = { ...baseHistoricalResults } as HistoricalResults;
    message.oracleId = object.oracleId ?? "";
    message.bucketId =
      object.bucketId !== undefined && object.bucketId !== null
        ? Long.fromValue(object.bucketId)
        : Long.UZERO;
    message.allData = (object.allData ?? []).map((e) =>
      HistoricalData.fromPartial(e)
    );
    return message;
  },
};

const baseHistoricalData: object = { data: "", timestamp: Long.ZERO };

export const HistoricalData = {
  encode(
    message: HistoricalData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    if (!message.timestamp.isZero()) {
      writer.uint32(16).int64(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HistoricalData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHistoricalData } as HistoricalData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.string();
          break;
        case 2:
          message.timestamp = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HistoricalData {
    const message = { ...baseHistoricalData } as HistoricalData;
    message.data =
      object.data !== undefined && object.data !== null
        ? String(object.data)
        : "";
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Long.fromString(object.timestamp)
        : Long.ZERO;
    return message;
  },

  toJSON(message: HistoricalData): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = message.data);
    message.timestamp !== undefined &&
      (obj.timestamp = (message.timestamp || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<HistoricalData>): HistoricalData {
    const message = { ...baseHistoricalData } as HistoricalData;
    message.data = object.data ?? "";
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Long.fromValue(object.timestamp)
        : Long.ZERO;
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
