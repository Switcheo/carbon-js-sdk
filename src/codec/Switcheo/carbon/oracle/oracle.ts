/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.oracle";

export interface Oracle {
  creator: string;
  id: string;
  description: string;
  status: string;
  minTurnoutPercentage: Long;
  maxResultAge: Long;
  securityType: string;
  resultStrategy: string;
  resolution: Long;
  spec: string;
}

export interface Result {
  oracleId: string;
  timestamp: Long;
  data: string;
}

export interface Contract {
  oracleId: string;
  contractAddress: string;
}

const baseOracle: object = {
  creator: "",
  id: "",
  description: "",
  status: "",
  minTurnoutPercentage: Long.ZERO,
  maxResultAge: Long.ZERO,
  securityType: "",
  resultStrategy: "",
  resolution: Long.ZERO,
  spec: "",
};

export const Oracle = {
  encode(
    message: Oracle,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.status !== "") {
      writer.uint32(34).string(message.status);
    }
    if (!message.minTurnoutPercentage.isZero()) {
      writer.uint32(40).int64(message.minTurnoutPercentage);
    }
    if (!message.maxResultAge.isZero()) {
      writer.uint32(48).int64(message.maxResultAge);
    }
    if (message.securityType !== "") {
      writer.uint32(58).string(message.securityType);
    }
    if (message.resultStrategy !== "") {
      writer.uint32(66).string(message.resultStrategy);
    }
    if (!message.resolution.isZero()) {
      writer.uint32(72).int64(message.resolution);
    }
    if (message.spec !== "") {
      writer.uint32(82).string(message.spec);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Oracle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOracle } as Oracle;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.status = reader.string();
          break;
        case 5:
          message.minTurnoutPercentage = reader.int64() as Long;
          break;
        case 6:
          message.maxResultAge = reader.int64() as Long;
          break;
        case 7:
          message.securityType = reader.string();
          break;
        case 8:
          message.resultStrategy = reader.string();
          break;
        case 9:
          message.resolution = reader.int64() as Long;
          break;
        case 10:
          message.spec = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Oracle {
    const message = { ...baseOracle } as Oracle;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.id =
      object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.status =
      object.status !== undefined && object.status !== null
        ? String(object.status)
        : "";
    message.minTurnoutPercentage =
      object.minTurnoutPercentage !== undefined &&
      object.minTurnoutPercentage !== null
        ? Long.fromString(object.minTurnoutPercentage)
        : Long.ZERO;
    message.maxResultAge =
      object.maxResultAge !== undefined && object.maxResultAge !== null
        ? Long.fromString(object.maxResultAge)
        : Long.ZERO;
    message.securityType =
      object.securityType !== undefined && object.securityType !== null
        ? String(object.securityType)
        : "";
    message.resultStrategy =
      object.resultStrategy !== undefined && object.resultStrategy !== null
        ? String(object.resultStrategy)
        : "";
    message.resolution =
      object.resolution !== undefined && object.resolution !== null
        ? Long.fromString(object.resolution)
        : Long.ZERO;
    message.spec =
      object.spec !== undefined && object.spec !== null
        ? String(object.spec)
        : "";
    return message;
  },

  toJSON(message: Oracle): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.description !== undefined &&
      (obj.description = message.description);
    message.status !== undefined && (obj.status = message.status);
    message.minTurnoutPercentage !== undefined &&
      (obj.minTurnoutPercentage = (
        message.minTurnoutPercentage || Long.ZERO
      ).toString());
    message.maxResultAge !== undefined &&
      (obj.maxResultAge = (message.maxResultAge || Long.ZERO).toString());
    message.securityType !== undefined &&
      (obj.securityType = message.securityType);
    message.resultStrategy !== undefined &&
      (obj.resultStrategy = message.resultStrategy);
    message.resolution !== undefined &&
      (obj.resolution = (message.resolution || Long.ZERO).toString());
    message.spec !== undefined && (obj.spec = message.spec);
    return obj;
  },

  fromPartial(object: DeepPartial<Oracle>): Oracle {
    const message = { ...baseOracle } as Oracle;
    message.creator = object.creator ?? "";
    message.id = object.id ?? "";
    message.description = object.description ?? "";
    message.status = object.status ?? "";
    message.minTurnoutPercentage =
      object.minTurnoutPercentage !== undefined &&
      object.minTurnoutPercentage !== null
        ? Long.fromValue(object.minTurnoutPercentage)
        : Long.ZERO;
    message.maxResultAge =
      object.maxResultAge !== undefined && object.maxResultAge !== null
        ? Long.fromValue(object.maxResultAge)
        : Long.ZERO;
    message.securityType = object.securityType ?? "";
    message.resultStrategy = object.resultStrategy ?? "";
    message.resolution =
      object.resolution !== undefined && object.resolution !== null
        ? Long.fromValue(object.resolution)
        : Long.ZERO;
    message.spec = object.spec ?? "";
    return message;
  },
};

const baseResult: object = { oracleId: "", timestamp: Long.ZERO, data: "" };

export const Result = {
  encode(
    message: Result,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.oracleId !== "") {
      writer.uint32(10).string(message.oracleId);
    }
    if (!message.timestamp.isZero()) {
      writer.uint32(24).int64(message.timestamp);
    }
    if (message.data !== "") {
      writer.uint32(34).string(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Result {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResult } as Result;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleId = reader.string();
          break;
        case 3:
          message.timestamp = reader.int64() as Long;
          break;
        case 4:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Result {
    const message = { ...baseResult } as Result;
    message.oracleId =
      object.oracleId !== undefined && object.oracleId !== null
        ? String(object.oracleId)
        : "";
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Long.fromString(object.timestamp)
        : Long.ZERO;
    message.data =
      object.data !== undefined && object.data !== null
        ? String(object.data)
        : "";
    return message;
  },

  toJSON(message: Result): unknown {
    const obj: any = {};
    message.oracleId !== undefined && (obj.oracleId = message.oracleId);
    message.timestamp !== undefined &&
      (obj.timestamp = (message.timestamp || Long.ZERO).toString());
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },

  fromPartial(object: DeepPartial<Result>): Result {
    const message = { ...baseResult } as Result;
    message.oracleId = object.oracleId ?? "";
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Long.fromValue(object.timestamp)
        : Long.ZERO;
    message.data = object.data ?? "";
    return message;
  },
};

const baseContract: object = { oracleId: "", contractAddress: "" };

export const Contract = {
  encode(
    message: Contract,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.oracleId !== "") {
      writer.uint32(10).string(message.oracleId);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Contract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseContract } as Contract;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleId = reader.string();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Contract {
    const message = { ...baseContract } as Contract;
    message.oracleId =
      object.oracleId !== undefined && object.oracleId !== null
        ? String(object.oracleId)
        : "";
    message.contractAddress =
      object.contractAddress !== undefined && object.contractAddress !== null
        ? String(object.contractAddress)
        : "";
    return message;
  },

  toJSON(message: Contract): unknown {
    const obj: any = {};
    message.oracleId !== undefined && (obj.oracleId = message.oracleId);
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<Contract>): Contract {
    const message = { ...baseContract } as Contract;
    message.oracleId = object.oracleId ?? "";
    message.contractAddress = object.contractAddress ?? "";
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
