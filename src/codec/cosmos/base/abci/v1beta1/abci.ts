/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";
import { Event } from "../../../../tendermint/abci/types";
import { Block } from "../../../../tendermint/types/block";

export const protobufPackage = "cosmos.base.abci.v1beta1";

/**
 * TxResponse defines a structure containing relevant tx data and metadata. The
 * tags are stringified and the log is JSON decoded.
 */
export interface TxResponse {
  /** The block height */
  height: Long;
  /** The transaction hash. */
  txhash: string;
  /** Namespace for the Code */
  codespace: string;
  /** Response code. */
  code: number;
  /** Result bytes, if any. */
  data: string;
  /**
   * The output of the application's logger (raw string). May be
   * non-deterministic.
   */
  rawLog: string;
  /** The output of the application's logger (typed). May be non-deterministic. */
  logs: ABCIMessageLog[];
  /** Additional information. May be non-deterministic. */
  info: string;
  /** Amount of gas requested for transaction. */
  gasWanted: Long;
  /** Amount of gas consumed by transaction. */
  gasUsed: Long;
  /** The request transaction bytes. */
  tx?: Any;
  /**
   * Time of the previous block. For heights > 1, it's the weighted median of
   * the timestamps of the valid votes in the block.LastCommit. For height == 1,
   * it's genesis time.
   */
  timestamp: string;
  /**
   * Events defines all the events emitted by processing a transaction. Note,
   * these events include those emitted by processing all the messages and those
   * emitted from the ante. Whereas Logs contains the events, with
   * additional metadata, emitted only by processing the messages.
   *
   * Since: cosmos-sdk 0.42.11, 0.44.5, 0.45
   */
  events: Event[];
}

/** ABCIMessageLog defines a structure containing an indexed tx ABCI message log. */
export interface ABCIMessageLog {
  msgIndex: number;
  log: string;
  /**
   * Events contains a slice of Event objects that were emitted during some
   * execution.
   */
  events: StringEvent[];
}

/**
 * StringEvent defines en Event object wrapper where all the attributes
 * contain key/value pairs that are strings instead of raw bytes.
 */
export interface StringEvent {
  type: string;
  attributes: Attribute[];
}

/**
 * Attribute defines an attribute wrapper where the key and value are
 * strings instead of raw bytes.
 */
export interface Attribute {
  key: string;
  value: string;
}

/** GasInfo defines tx execution gas context. */
export interface GasInfo {
  /** GasWanted is the maximum units of work we allow this tx to perform. */
  gasWanted: Long;
  /** GasUsed is the amount of gas actually consumed. */
  gasUsed: Long;
}

/** Result is the union of ResponseFormat and ResponseCheckTx. */
export interface Result {
  /**
   * Data is any data returned from message or handler execution. It MUST be
   * length prefixed in order to separate data from multiple message executions.
   * Deprecated. This field is still populated, but prefer msg_response instead
   * because it also contains the Msg response typeURL.
   *
   * @deprecated
   */
  data: Uint8Array;
  /** Log contains the log information from message or handler execution. */
  log: string;
  /**
   * Events contains a slice of Event objects that were emitted during message
   * or handler execution.
   */
  events: Event[];
  /**
   * msg_responses contains the Msg handler responses type packed in Anys.
   *
   * Since: cosmos-sdk 0.46
   */
  msgResponses: Any[];
}

/**
 * SimulationResponse defines the response generated when a transaction is
 * successfully simulated.
 */
export interface SimulationResponse {
  gasInfo?: GasInfo;
  result?: Result;
}

/**
 * MsgData defines the data returned in a Result object during message
 * execution.
 *
 * @deprecated
 */
export interface MsgData {
  msgType: string;
  data: Uint8Array;
}

/**
 * TxMsgData defines a list of MsgData. A transaction will have a MsgData object
 * for each message.
 */
export interface TxMsgData {
  /**
   * data field is deprecated and not populated.
   *
   * @deprecated
   */
  data: MsgData[];
  /**
   * msg_responses contains the Msg handler responses packed into Anys.
   *
   * Since: cosmos-sdk 0.46
   */
  msgResponses: Any[];
}

/** SearchTxsResult defines a structure for querying txs pageable */
export interface SearchTxsResult {
  /** Count of all txs */
  totalCount: Long;
  /** Count of txs in current page */
  count: Long;
  /** Index of current page, start from 1 */
  pageNumber: Long;
  /** Count of total pages */
  pageTotal: Long;
  /** Max count txs per page */
  limit: Long;
  /** List of txs in current page */
  txs: TxResponse[];
}

/** SearchBlocksResult defines a structure for querying blocks pageable */
export interface SearchBlocksResult {
  /** Count of all blocks */
  totalCount: Long;
  /** Count of blocks in current page */
  count: Long;
  /** Index of current page, start from 1 */
  pageNumber: Long;
  /** Count of total pages */
  pageTotal: Long;
  /** Max count blocks per page */
  limit: Long;
  /** List of blocks in current page */
  blocks: Block[];
}

function createBaseTxResponse(): TxResponse {
  return {
    height: Long.ZERO,
    txhash: "",
    codespace: "",
    code: 0,
    data: "",
    rawLog: "",
    logs: [],
    info: "",
    gasWanted: Long.ZERO,
    gasUsed: Long.ZERO,
    tx: undefined,
    timestamp: "",
    events: [],
  };
}

export const TxResponse = {
  encode(message: TxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.txhash !== "") {
      writer.uint32(18).string(message.txhash);
    }
    if (message.codespace !== "") {
      writer.uint32(26).string(message.codespace);
    }
    if (message.code !== 0) {
      writer.uint32(32).uint32(message.code);
    }
    if (message.data !== "") {
      writer.uint32(42).string(message.data);
    }
    if (message.rawLog !== "") {
      writer.uint32(50).string(message.rawLog);
    }
    for (const v of message.logs) {
      ABCIMessageLog.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.info !== "") {
      writer.uint32(66).string(message.info);
    }
    if (!message.gasWanted.isZero()) {
      writer.uint32(72).int64(message.gasWanted);
    }
    if (!message.gasUsed.isZero()) {
      writer.uint32(80).int64(message.gasUsed);
    }
    if (message.tx !== undefined) {
      Any.encode(message.tx, writer.uint32(90).fork()).ldelim();
    }
    if (message.timestamp !== "") {
      writer.uint32(98).string(message.timestamp);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.height = reader.int64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.txhash = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.codespace = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.code = reader.uint32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.data = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.rawLog = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.logs.push(ABCIMessageLog.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.info = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.gasWanted = reader.int64() as Long;
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.gasUsed = reader.int64() as Long;
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.tx = Any.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.timestamp = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.events.push(Event.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TxResponse {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      txhash: isSet(object.txhash) ? String(object.txhash) : "",
      codespace: isSet(object.codespace) ? String(object.codespace) : "",
      code: isSet(object.code) ? Number(object.code) : 0,
      data: isSet(object.data) ? String(object.data) : "",
      rawLog: isSet(object.rawLog) ? String(object.rawLog) : "",
      logs: Array.isArray(object?.logs) ? object.logs.map((e: any) => ABCIMessageLog.fromJSON(e)) : [],
      info: isSet(object.info) ? String(object.info) : "",
      gasWanted: isSet(object.gasWanted) ? Long.fromValue(object.gasWanted) : Long.ZERO,
      gasUsed: isSet(object.gasUsed) ? Long.fromValue(object.gasUsed) : Long.ZERO,
      tx: isSet(object.tx) ? Any.fromJSON(object.tx) : undefined,
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : "",
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromJSON(e)) : [],
    };
  },

  toJSON(message: TxResponse): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.txhash !== undefined && (obj.txhash = message.txhash);
    message.codespace !== undefined && (obj.codespace = message.codespace);
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.data !== undefined && (obj.data = message.data);
    message.rawLog !== undefined && (obj.rawLog = message.rawLog);
    if (message.logs) {
      obj.logs = message.logs.map((e) => e ? ABCIMessageLog.toJSON(e) : undefined);
    } else {
      obj.logs = [];
    }
    message.info !== undefined && (obj.info = message.info);
    message.gasWanted !== undefined && (obj.gasWanted = (message.gasWanted || Long.ZERO).toString());
    message.gasUsed !== undefined && (obj.gasUsed = (message.gasUsed || Long.ZERO).toString());
    message.tx !== undefined && (obj.tx = message.tx ? Any.toJSON(message.tx) : undefined);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    if (message.events) {
      obj.events = message.events.map((e) => e ? Event.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }
    return obj;
  },

  create(base?: DeepPartial<TxResponse>): TxResponse {
    return TxResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TxResponse>): TxResponse {
    const message = createBaseTxResponse();
    message.height = (object.height !== undefined && object.height !== null)
      ? Long.fromValue(object.height)
      : Long.ZERO;
    message.txhash = object.txhash ?? "";
    message.codespace = object.codespace ?? "";
    message.code = object.code ?? 0;
    message.data = object.data ?? "";
    message.rawLog = object.rawLog ?? "";
    message.logs = object.logs?.map((e) => ABCIMessageLog.fromPartial(e)) || [];
    message.info = object.info ?? "";
    message.gasWanted = (object.gasWanted !== undefined && object.gasWanted !== null)
      ? Long.fromValue(object.gasWanted)
      : Long.ZERO;
    message.gasUsed = (object.gasUsed !== undefined && object.gasUsed !== null)
      ? Long.fromValue(object.gasUsed)
      : Long.ZERO;
    message.tx = (object.tx !== undefined && object.tx !== null) ? Any.fromPartial(object.tx) : undefined;
    message.timestamp = object.timestamp ?? "";
    message.events = object.events?.map((e) => Event.fromPartial(e)) || [];
    return message;
  },
};

function createBaseABCIMessageLog(): ABCIMessageLog {
  return { msgIndex: 0, log: "", events: [] };
}

export const ABCIMessageLog = {
  encode(message: ABCIMessageLog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgIndex !== 0) {
      writer.uint32(8).uint32(message.msgIndex);
    }
    if (message.log !== "") {
      writer.uint32(18).string(message.log);
    }
    for (const v of message.events) {
      StringEvent.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ABCIMessageLog {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseABCIMessageLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.msgIndex = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.log = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.events.push(StringEvent.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ABCIMessageLog {
    return {
      msgIndex: isSet(object.msgIndex) ? Number(object.msgIndex) : 0,
      log: isSet(object.log) ? String(object.log) : "",
      events: Array.isArray(object?.events) ? object.events.map((e: any) => StringEvent.fromJSON(e)) : [],
    };
  },

  toJSON(message: ABCIMessageLog): unknown {
    const obj: any = {};
    message.msgIndex !== undefined && (obj.msgIndex = Math.round(message.msgIndex));
    message.log !== undefined && (obj.log = message.log);
    if (message.events) {
      obj.events = message.events.map((e) => e ? StringEvent.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }
    return obj;
  },

  create(base?: DeepPartial<ABCIMessageLog>): ABCIMessageLog {
    return ABCIMessageLog.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ABCIMessageLog>): ABCIMessageLog {
    const message = createBaseABCIMessageLog();
    message.msgIndex = object.msgIndex ?? 0;
    message.log = object.log ?? "";
    message.events = object.events?.map((e) => StringEvent.fromPartial(e)) || [];
    return message;
  },
};

function createBaseStringEvent(): StringEvent {
  return { type: "", attributes: [] };
}

export const StringEvent = {
  encode(message: StringEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StringEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StringEvent {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : [],
    };
  },

  toJSON(message: StringEvent): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },

  create(base?: DeepPartial<StringEvent>): StringEvent {
    return StringEvent.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<StringEvent>): StringEvent {
    const message = createBaseStringEvent();
    message.type = object.type ?? "";
    message.attributes = object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAttribute(): Attribute {
  return { key: "", value: "" };
}

export const Attribute = {
  encode(message: Attribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Attribute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Attribute {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: Attribute): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create(base?: DeepPartial<Attribute>): Attribute {
    return Attribute.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Attribute>): Attribute {
    const message = createBaseAttribute();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseGasInfo(): GasInfo {
  return { gasWanted: Long.UZERO, gasUsed: Long.UZERO };
}

export const GasInfo = {
  encode(message: GasInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.gasWanted.isZero()) {
      writer.uint32(8).uint64(message.gasWanted);
    }
    if (!message.gasUsed.isZero()) {
      writer.uint32(16).uint64(message.gasUsed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GasInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.gasWanted = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.gasUsed = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GasInfo {
    return {
      gasWanted: isSet(object.gasWanted) ? Long.fromValue(object.gasWanted) : Long.UZERO,
      gasUsed: isSet(object.gasUsed) ? Long.fromValue(object.gasUsed) : Long.UZERO,
    };
  },

  toJSON(message: GasInfo): unknown {
    const obj: any = {};
    message.gasWanted !== undefined && (obj.gasWanted = (message.gasWanted || Long.UZERO).toString());
    message.gasUsed !== undefined && (obj.gasUsed = (message.gasUsed || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<GasInfo>): GasInfo {
    return GasInfo.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GasInfo>): GasInfo {
    const message = createBaseGasInfo();
    message.gasWanted = (object.gasWanted !== undefined && object.gasWanted !== null)
      ? Long.fromValue(object.gasWanted)
      : Long.UZERO;
    message.gasUsed = (object.gasUsed !== undefined && object.gasUsed !== null)
      ? Long.fromValue(object.gasUsed)
      : Long.UZERO;
    return message;
  },
};

function createBaseResult(): Result {
  return { data: new Uint8Array(), log: "", events: [], msgResponses: [] };
}

export const Result = {
  encode(message: Result, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(18).string(message.log);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.msgResponses) {
      Any.encode(v!, writer.uint32(34).fork()).ldelim();
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

          message.data = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.log = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.events.push(Event.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.msgResponses.push(Any.decode(reader, reader.uint32()));
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
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      log: isSet(object.log) ? String(object.log) : "",
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromJSON(e)) : [],
      msgResponses: Array.isArray(object?.msgResponses) ? object.msgResponses.map((e: any) => Any.fromJSON(e)) : [],
    };
  },

  toJSON(message: Result): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.log !== undefined && (obj.log = message.log);
    if (message.events) {
      obj.events = message.events.map((e) => e ? Event.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }
    if (message.msgResponses) {
      obj.msgResponses = message.msgResponses.map((e) => e ? Any.toJSON(e) : undefined);
    } else {
      obj.msgResponses = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Result>): Result {
    return Result.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Result>): Result {
    const message = createBaseResult();
    message.data = object.data ?? new Uint8Array();
    message.log = object.log ?? "";
    message.events = object.events?.map((e) => Event.fromPartial(e)) || [];
    message.msgResponses = object.msgResponses?.map((e) => Any.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSimulationResponse(): SimulationResponse {
  return { gasInfo: undefined, result: undefined };
}

export const SimulationResponse = {
  encode(message: SimulationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gasInfo !== undefined) {
      GasInfo.encode(message.gasInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.result !== undefined) {
      Result.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SimulationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimulationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gasInfo = GasInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.result = Result.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SimulationResponse {
    return {
      gasInfo: isSet(object.gasInfo) ? GasInfo.fromJSON(object.gasInfo) : undefined,
      result: isSet(object.result) ? Result.fromJSON(object.result) : undefined,
    };
  },

  toJSON(message: SimulationResponse): unknown {
    const obj: any = {};
    message.gasInfo !== undefined && (obj.gasInfo = message.gasInfo ? GasInfo.toJSON(message.gasInfo) : undefined);
    message.result !== undefined && (obj.result = message.result ? Result.toJSON(message.result) : undefined);
    return obj;
  },

  create(base?: DeepPartial<SimulationResponse>): SimulationResponse {
    return SimulationResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SimulationResponse>): SimulationResponse {
    const message = createBaseSimulationResponse();
    message.gasInfo = (object.gasInfo !== undefined && object.gasInfo !== null)
      ? GasInfo.fromPartial(object.gasInfo)
      : undefined;
    message.result = (object.result !== undefined && object.result !== null)
      ? Result.fromPartial(object.result)
      : undefined;
    return message;
  },
};

function createBaseMsgData(): MsgData {
  return { msgType: "", data: new Uint8Array() };
}

export const MsgData = {
  encode(message: MsgData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgType !== "") {
      writer.uint32(10).string(message.msgType);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.msgType = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.data = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgData {
    return {
      msgType: isSet(object.msgType) ? String(object.msgType) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
    };
  },

  toJSON(message: MsgData): unknown {
    const obj: any = {};
    message.msgType !== undefined && (obj.msgType = message.msgType);
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  create(base?: DeepPartial<MsgData>): MsgData {
    return MsgData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgData>): MsgData {
    const message = createBaseMsgData();
    message.msgType = object.msgType ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};

function createBaseTxMsgData(): TxMsgData {
  return { data: [], msgResponses: [] };
}

export const TxMsgData = {
  encode(message: TxMsgData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.data) {
      MsgData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.msgResponses) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxMsgData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxMsgData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data.push(MsgData.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.msgResponses.push(Any.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TxMsgData {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => MsgData.fromJSON(e)) : [],
      msgResponses: Array.isArray(object?.msgResponses) ? object.msgResponses.map((e: any) => Any.fromJSON(e)) : [],
    };
  },

  toJSON(message: TxMsgData): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map((e) => e ? MsgData.toJSON(e) : undefined);
    } else {
      obj.data = [];
    }
    if (message.msgResponses) {
      obj.msgResponses = message.msgResponses.map((e) => e ? Any.toJSON(e) : undefined);
    } else {
      obj.msgResponses = [];
    }
    return obj;
  },

  create(base?: DeepPartial<TxMsgData>): TxMsgData {
    return TxMsgData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TxMsgData>): TxMsgData {
    const message = createBaseTxMsgData();
    message.data = object.data?.map((e) => MsgData.fromPartial(e)) || [];
    message.msgResponses = object.msgResponses?.map((e) => Any.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSearchTxsResult(): SearchTxsResult {
  return {
    totalCount: Long.UZERO,
    count: Long.UZERO,
    pageNumber: Long.UZERO,
    pageTotal: Long.UZERO,
    limit: Long.UZERO,
    txs: [],
  };
}

export const SearchTxsResult = {
  encode(message: SearchTxsResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.totalCount.isZero()) {
      writer.uint32(8).uint64(message.totalCount);
    }
    if (!message.count.isZero()) {
      writer.uint32(16).uint64(message.count);
    }
    if (!message.pageNumber.isZero()) {
      writer.uint32(24).uint64(message.pageNumber);
    }
    if (!message.pageTotal.isZero()) {
      writer.uint32(32).uint64(message.pageTotal);
    }
    if (!message.limit.isZero()) {
      writer.uint32(40).uint64(message.limit);
    }
    for (const v of message.txs) {
      TxResponse.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SearchTxsResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchTxsResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.totalCount = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.count = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.pageNumber = reader.uint64() as Long;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.pageTotal = reader.uint64() as Long;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.limit = reader.uint64() as Long;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.txs.push(TxResponse.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SearchTxsResult {
    return {
      totalCount: isSet(object.totalCount) ? Long.fromValue(object.totalCount) : Long.UZERO,
      count: isSet(object.count) ? Long.fromValue(object.count) : Long.UZERO,
      pageNumber: isSet(object.pageNumber) ? Long.fromValue(object.pageNumber) : Long.UZERO,
      pageTotal: isSet(object.pageTotal) ? Long.fromValue(object.pageTotal) : Long.UZERO,
      limit: isSet(object.limit) ? Long.fromValue(object.limit) : Long.UZERO,
      txs: Array.isArray(object?.txs) ? object.txs.map((e: any) => TxResponse.fromJSON(e)) : [],
    };
  },

  toJSON(message: SearchTxsResult): unknown {
    const obj: any = {};
    message.totalCount !== undefined && (obj.totalCount = (message.totalCount || Long.UZERO).toString());
    message.count !== undefined && (obj.count = (message.count || Long.UZERO).toString());
    message.pageNumber !== undefined && (obj.pageNumber = (message.pageNumber || Long.UZERO).toString());
    message.pageTotal !== undefined && (obj.pageTotal = (message.pageTotal || Long.UZERO).toString());
    message.limit !== undefined && (obj.limit = (message.limit || Long.UZERO).toString());
    if (message.txs) {
      obj.txs = message.txs.map((e) => e ? TxResponse.toJSON(e) : undefined);
    } else {
      obj.txs = [];
    }
    return obj;
  },

  create(base?: DeepPartial<SearchTxsResult>): SearchTxsResult {
    return SearchTxsResult.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SearchTxsResult>): SearchTxsResult {
    const message = createBaseSearchTxsResult();
    message.totalCount = (object.totalCount !== undefined && object.totalCount !== null)
      ? Long.fromValue(object.totalCount)
      : Long.UZERO;
    message.count = (object.count !== undefined && object.count !== null) ? Long.fromValue(object.count) : Long.UZERO;
    message.pageNumber = (object.pageNumber !== undefined && object.pageNumber !== null)
      ? Long.fromValue(object.pageNumber)
      : Long.UZERO;
    message.pageTotal = (object.pageTotal !== undefined && object.pageTotal !== null)
      ? Long.fromValue(object.pageTotal)
      : Long.UZERO;
    message.limit = (object.limit !== undefined && object.limit !== null) ? Long.fromValue(object.limit) : Long.UZERO;
    message.txs = object.txs?.map((e) => TxResponse.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSearchBlocksResult(): SearchBlocksResult {
  return {
    totalCount: Long.ZERO,
    count: Long.ZERO,
    pageNumber: Long.ZERO,
    pageTotal: Long.ZERO,
    limit: Long.ZERO,
    blocks: [],
  };
}

export const SearchBlocksResult = {
  encode(message: SearchBlocksResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.totalCount.isZero()) {
      writer.uint32(8).int64(message.totalCount);
    }
    if (!message.count.isZero()) {
      writer.uint32(16).int64(message.count);
    }
    if (!message.pageNumber.isZero()) {
      writer.uint32(24).int64(message.pageNumber);
    }
    if (!message.pageTotal.isZero()) {
      writer.uint32(32).int64(message.pageTotal);
    }
    if (!message.limit.isZero()) {
      writer.uint32(40).int64(message.limit);
    }
    for (const v of message.blocks) {
      Block.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SearchBlocksResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchBlocksResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.totalCount = reader.int64() as Long;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.count = reader.int64() as Long;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.pageNumber = reader.int64() as Long;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.pageTotal = reader.int64() as Long;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.limit = reader.int64() as Long;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.blocks.push(Block.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SearchBlocksResult {
    return {
      totalCount: isSet(object.totalCount) ? Long.fromValue(object.totalCount) : Long.ZERO,
      count: isSet(object.count) ? Long.fromValue(object.count) : Long.ZERO,
      pageNumber: isSet(object.pageNumber) ? Long.fromValue(object.pageNumber) : Long.ZERO,
      pageTotal: isSet(object.pageTotal) ? Long.fromValue(object.pageTotal) : Long.ZERO,
      limit: isSet(object.limit) ? Long.fromValue(object.limit) : Long.ZERO,
      blocks: Array.isArray(object?.blocks) ? object.blocks.map((e: any) => Block.fromJSON(e)) : [],
    };
  },

  toJSON(message: SearchBlocksResult): unknown {
    const obj: any = {};
    message.totalCount !== undefined && (obj.totalCount = (message.totalCount || Long.ZERO).toString());
    message.count !== undefined && (obj.count = (message.count || Long.ZERO).toString());
    message.pageNumber !== undefined && (obj.pageNumber = (message.pageNumber || Long.ZERO).toString());
    message.pageTotal !== undefined && (obj.pageTotal = (message.pageTotal || Long.ZERO).toString());
    message.limit !== undefined && (obj.limit = (message.limit || Long.ZERO).toString());
    if (message.blocks) {
      obj.blocks = message.blocks.map((e) => e ? Block.toJSON(e) : undefined);
    } else {
      obj.blocks = [];
    }
    return obj;
  },

  create(base?: DeepPartial<SearchBlocksResult>): SearchBlocksResult {
    return SearchBlocksResult.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SearchBlocksResult>): SearchBlocksResult {
    const message = createBaseSearchBlocksResult();
    message.totalCount = (object.totalCount !== undefined && object.totalCount !== null)
      ? Long.fromValue(object.totalCount)
      : Long.ZERO;
    message.count = (object.count !== undefined && object.count !== null) ? Long.fromValue(object.count) : Long.ZERO;
    message.pageNumber = (object.pageNumber !== undefined && object.pageNumber !== null)
      ? Long.fromValue(object.pageNumber)
      : Long.ZERO;
    message.pageTotal = (object.pageTotal !== undefined && object.pageTotal !== null)
      ? Long.fromValue(object.pageTotal)
      : Long.ZERO;
    message.limit = (object.limit !== undefined && object.limit !== null) ? Long.fromValue(object.limit) : Long.ZERO;
    message.blocks = object.blocks?.map((e) => Block.fromPartial(e)) || [];
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

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
