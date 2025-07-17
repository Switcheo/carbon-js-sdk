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

function createBaseHistoricalBucketInfo(): HistoricalBucketInfo {
  return { id: Long.UZERO, duration: undefined };
}

export const HistoricalBucketInfo = {
  encode(message: HistoricalBucketInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HistoricalBucketInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistoricalBucketInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.duration = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HistoricalBucketInfo {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
    };
  },

  toJSON(message: HistoricalBucketInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    return obj;
  },

  create(base?: DeepPartial<HistoricalBucketInfo>): HistoricalBucketInfo {
    return HistoricalBucketInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<HistoricalBucketInfo>): HistoricalBucketInfo {
    const message = createBaseHistoricalBucketInfo();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.duration = (object.duration !== undefined && object.duration !== null)
      ? Duration.fromPartial(object.duration)
      : undefined;
    return message;
  },
};

function createBaseHistoricalResults(): HistoricalResults {
  return { oracleId: "", bucketId: Long.UZERO, allData: [] };
}

export const HistoricalResults = {
  encode(message: HistoricalResults, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistoricalResults();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.oracleId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.bucketId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.allData.push(HistoricalData.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HistoricalResults {
    return {
      oracleId: isSet(object.oracleId) ? String(object.oracleId) : "",
      bucketId: isSet(object.bucketId) ? Long.fromValue(object.bucketId) : Long.UZERO,
      allData: Array.isArray(object?.allData) ? object.allData.map((e: any) => HistoricalData.fromJSON(e)) : [],
    };
  },

  toJSON(message: HistoricalResults): unknown {
    const obj: any = {};
    message.oracleId !== undefined && (obj.oracleId = message.oracleId);
    message.bucketId !== undefined && (obj.bucketId = (message.bucketId || Long.UZERO).toString());
    if (message.allData) {
      obj.allData = message.allData.map((e) => e ? HistoricalData.toJSON(e) : undefined);
    } else {
      obj.allData = [];
    }
    return obj;
  },

  create(base?: DeepPartial<HistoricalResults>): HistoricalResults {
    return HistoricalResults.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<HistoricalResults>): HistoricalResults {
    const message = createBaseHistoricalResults();
    message.oracleId = object.oracleId ?? "";
    message.bucketId = (object.bucketId !== undefined && object.bucketId !== null)
      ? Long.fromValue(object.bucketId)
      : Long.UZERO;
    message.allData = object.allData?.map((e) => HistoricalData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseHistoricalData(): HistoricalData {
  return { data: "", timestamp: Long.ZERO };
}

export const HistoricalData = {
  encode(message: HistoricalData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    if (!message.timestamp.isZero()) {
      writer.uint32(16).int64(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HistoricalData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistoricalData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.timestamp = reader.int64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HistoricalData {
    return {
      data: isSet(object.data) ? String(object.data) : "",
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.ZERO,
    };
  },

  toJSON(message: HistoricalData): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = message.data);
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.ZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<HistoricalData>): HistoricalData {
    return HistoricalData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<HistoricalData>): HistoricalData {
    const message = createBaseHistoricalData();
    message.data = object.data ?? "";
    message.timestamp = (object.timestamp !== undefined && object.timestamp !== null)
      ? Long.fromValue(object.timestamp)
      : Long.ZERO;
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
