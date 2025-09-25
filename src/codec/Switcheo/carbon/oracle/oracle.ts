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
  enableHistoricalResults: boolean;
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

function createBaseOracle(): Oracle {
  return {
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
    enableHistoricalResults: false,
  };
}

export const Oracle = {
  encode(message: Oracle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.enableHistoricalResults === true) {
      writer.uint32(88).bool(message.enableHistoricalResults);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Oracle {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.status = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.minTurnoutPercentage = reader.int64() as Long;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.maxResultAge = reader.int64() as Long;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.securityType = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.resultStrategy = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.resolution = reader.int64() as Long;
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.spec = reader.string();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.enableHistoricalResults = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Oracle {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? String(object.id) : "",
      description: isSet(object.description) ? String(object.description) : "",
      status: isSet(object.status) ? String(object.status) : "",
      minTurnoutPercentage: isSet(object.minTurnoutPercentage)
        ? Long.fromValue(object.minTurnoutPercentage)
        : Long.ZERO,
      maxResultAge: isSet(object.maxResultAge) ? Long.fromValue(object.maxResultAge) : Long.ZERO,
      securityType: isSet(object.securityType) ? String(object.securityType) : "",
      resultStrategy: isSet(object.resultStrategy) ? String(object.resultStrategy) : "",
      resolution: isSet(object.resolution) ? Long.fromValue(object.resolution) : Long.ZERO,
      spec: isSet(object.spec) ? String(object.spec) : "",
      enableHistoricalResults: isSet(object.enableHistoricalResults) ? Boolean(object.enableHistoricalResults) : false,
    };
  },

  toJSON(message: Oracle): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.description !== undefined && (obj.description = message.description);
    message.status !== undefined && (obj.status = message.status);
    message.minTurnoutPercentage !== undefined &&
      (obj.minTurnoutPercentage = (message.minTurnoutPercentage || Long.ZERO).toString());
    message.maxResultAge !== undefined && (obj.maxResultAge = (message.maxResultAge || Long.ZERO).toString());
    message.securityType !== undefined && (obj.securityType = message.securityType);
    message.resultStrategy !== undefined && (obj.resultStrategy = message.resultStrategy);
    message.resolution !== undefined && (obj.resolution = (message.resolution || Long.ZERO).toString());
    message.spec !== undefined && (obj.spec = message.spec);
    message.enableHistoricalResults !== undefined && (obj.enableHistoricalResults = message.enableHistoricalResults);
    return obj;
  },

  create(base?: DeepPartial<Oracle>): Oracle {
    return Oracle.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Oracle>): Oracle {
    const message = createBaseOracle();
    message.creator = object.creator ?? "";
    message.id = object.id ?? "";
    message.description = object.description ?? "";
    message.status = object.status ?? "";
    message.minTurnoutPercentage = (object.minTurnoutPercentage !== undefined && object.minTurnoutPercentage !== null)
      ? Long.fromValue(object.minTurnoutPercentage)
      : Long.ZERO;
    message.maxResultAge = (object.maxResultAge !== undefined && object.maxResultAge !== null)
      ? Long.fromValue(object.maxResultAge)
      : Long.ZERO;
    message.securityType = object.securityType ?? "";
    message.resultStrategy = object.resultStrategy ?? "";
    message.resolution = (object.resolution !== undefined && object.resolution !== null)
      ? Long.fromValue(object.resolution)
      : Long.ZERO;
    message.spec = object.spec ?? "";
    message.enableHistoricalResults = object.enableHistoricalResults ?? false;
    return message;
  },
};

function createBaseResult(): Result {
  return { oracleId: "", timestamp: Long.ZERO, data: "" };
}

export const Result = {
  encode(message: Result, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.oracleId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.timestamp = reader.int64() as Long;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.data = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Result {
    return {
      oracleId: isSet(object.oracleId) ? String(object.oracleId) : "",
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.ZERO,
      data: isSet(object.data) ? String(object.data) : "",
    };
  },

  toJSON(message: Result): unknown {
    const obj: any = {};
    message.oracleId !== undefined && (obj.oracleId = message.oracleId);
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.ZERO).toString());
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },

  create(base?: DeepPartial<Result>): Result {
    return Result.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Result>): Result {
    const message = createBaseResult();
    message.oracleId = object.oracleId ?? "";
    message.timestamp = (object.timestamp !== undefined && object.timestamp !== null)
      ? Long.fromValue(object.timestamp)
      : Long.ZERO;
    message.data = object.data ?? "";
    return message;
  },
};

function createBaseContract(): Contract {
  return { oracleId: "", contractAddress: "" };
}

export const Contract = {
  encode(message: Contract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oracleId !== "") {
      writer.uint32(10).string(message.oracleId);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Contract {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContract();
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
          if (tag !== 18) {
            break;
          }

          message.contractAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Contract {
    return {
      oracleId: isSet(object.oracleId) ? String(object.oracleId) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
    };
  },

  toJSON(message: Contract): unknown {
    const obj: any = {};
    message.oracleId !== undefined && (obj.oracleId = message.oracleId);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },

  create(base?: DeepPartial<Contract>): Contract {
    return Contract.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Contract>): Contract {
    const message = createBaseContract();
    message.oracleId = object.oracleId ?? "";
    message.contractAddress = object.contractAddress ?? "";
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
