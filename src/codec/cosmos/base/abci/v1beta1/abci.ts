/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";
import { Event } from "../../../../tendermint/abci/types";

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

const baseTxResponse: object = {
  height: Long.ZERO,
  txhash: "",
  codespace: "",
  code: 0,
  data: "",
  rawLog: "",
  info: "",
  gasWanted: Long.ZERO,
  gasUsed: Long.ZERO,
  timestamp: "",
};

export const TxResponse = {
  encode(
    message: TxResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTxResponse } as TxResponse;
    message.logs = [];
    message.events = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64() as Long;
          break;
        case 2:
          message.txhash = reader.string();
          break;
        case 3:
          message.codespace = reader.string();
          break;
        case 4:
          message.code = reader.uint32();
          break;
        case 5:
          message.data = reader.string();
          break;
        case 6:
          message.rawLog = reader.string();
          break;
        case 7:
          message.logs.push(ABCIMessageLog.decode(reader, reader.uint32()));
          break;
        case 8:
          message.info = reader.string();
          break;
        case 9:
          message.gasWanted = reader.int64() as Long;
          break;
        case 10:
          message.gasUsed = reader.int64() as Long;
          break;
        case 11:
          message.tx = Any.decode(reader, reader.uint32());
          break;
        case 12:
          message.timestamp = reader.string();
          break;
        case 13:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TxResponse {
    const message = { ...baseTxResponse } as TxResponse;
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromString(object.height)
        : Long.ZERO;
    message.txhash =
      object.txhash !== undefined && object.txhash !== null
        ? String(object.txhash)
        : "";
    message.codespace =
      object.codespace !== undefined && object.codespace !== null
        ? String(object.codespace)
        : "";
    message.code =
      object.code !== undefined && object.code !== null
        ? Number(object.code)
        : 0;
    message.data =
      object.data !== undefined && object.data !== null
        ? String(object.data)
        : "";
    message.rawLog =
      object.rawLog !== undefined && object.rawLog !== null
        ? String(object.rawLog)
        : "";
    message.logs = (object.logs ?? []).map((e: any) =>
      ABCIMessageLog.fromJSON(e)
    );
    message.info =
      object.info !== undefined && object.info !== null
        ? String(object.info)
        : "";
    message.gasWanted =
      object.gasWanted !== undefined && object.gasWanted !== null
        ? Long.fromString(object.gasWanted)
        : Long.ZERO;
    message.gasUsed =
      object.gasUsed !== undefined && object.gasUsed !== null
        ? Long.fromString(object.gasUsed)
        : Long.ZERO;
    message.tx =
      object.tx !== undefined && object.tx !== null
        ? Any.fromJSON(object.tx)
        : undefined;
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? String(object.timestamp)
        : "";
    message.events = (object.events ?? []).map((e: any) => Event.fromJSON(e));
    return message;
  },

  toJSON(message: TxResponse): unknown {
    const obj: any = {};
    message.height !== undefined &&
      (obj.height = (message.height || Long.ZERO).toString());
    message.txhash !== undefined && (obj.txhash = message.txhash);
    message.codespace !== undefined && (obj.codespace = message.codespace);
    message.code !== undefined && (obj.code = message.code);
    message.data !== undefined && (obj.data = message.data);
    message.rawLog !== undefined && (obj.rawLog = message.rawLog);
    if (message.logs) {
      obj.logs = message.logs.map((e) =>
        e ? ABCIMessageLog.toJSON(e) : undefined
      );
    } else {
      obj.logs = [];
    }
    message.info !== undefined && (obj.info = message.info);
    message.gasWanted !== undefined &&
      (obj.gasWanted = (message.gasWanted || Long.ZERO).toString());
    message.gasUsed !== undefined &&
      (obj.gasUsed = (message.gasUsed || Long.ZERO).toString());
    message.tx !== undefined &&
      (obj.tx = message.tx ? Any.toJSON(message.tx) : undefined);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    if (message.events) {
      obj.events = message.events.map((e) => (e ? Event.toJSON(e) : undefined));
    } else {
      obj.events = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<TxResponse>): TxResponse {
    const message = { ...baseTxResponse } as TxResponse;
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromValue(object.height)
        : Long.ZERO;
    message.txhash = object.txhash ?? "";
    message.codespace = object.codespace ?? "";
    message.code = object.code ?? 0;
    message.data = object.data ?? "";
    message.rawLog = object.rawLog ?? "";
    message.logs = (object.logs ?? []).map((e) =>
      ABCIMessageLog.fromPartial(e)
    );
    message.info = object.info ?? "";
    message.gasWanted =
      object.gasWanted !== undefined && object.gasWanted !== null
        ? Long.fromValue(object.gasWanted)
        : Long.ZERO;
    message.gasUsed =
      object.gasUsed !== undefined && object.gasUsed !== null
        ? Long.fromValue(object.gasUsed)
        : Long.ZERO;
    message.tx =
      object.tx !== undefined && object.tx !== null
        ? Any.fromPartial(object.tx)
        : undefined;
    message.timestamp = object.timestamp ?? "";
    message.events = (object.events ?? []).map((e) => Event.fromPartial(e));
    return message;
  },
};

const baseABCIMessageLog: object = { msgIndex: 0, log: "" };

export const ABCIMessageLog = {
  encode(
    message: ABCIMessageLog,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseABCIMessageLog } as ABCIMessageLog;
    message.events = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgIndex = reader.uint32();
          break;
        case 2:
          message.log = reader.string();
          break;
        case 3:
          message.events.push(StringEvent.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ABCIMessageLog {
    const message = { ...baseABCIMessageLog } as ABCIMessageLog;
    message.msgIndex =
      object.msgIndex !== undefined && object.msgIndex !== null
        ? Number(object.msgIndex)
        : 0;
    message.log =
      object.log !== undefined && object.log !== null ? String(object.log) : "";
    message.events = (object.events ?? []).map((e: any) =>
      StringEvent.fromJSON(e)
    );
    return message;
  },

  toJSON(message: ABCIMessageLog): unknown {
    const obj: any = {};
    message.msgIndex !== undefined && (obj.msgIndex = message.msgIndex);
    message.log !== undefined && (obj.log = message.log);
    if (message.events) {
      obj.events = message.events.map((e) =>
        e ? StringEvent.toJSON(e) : undefined
      );
    } else {
      obj.events = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ABCIMessageLog>): ABCIMessageLog {
    const message = { ...baseABCIMessageLog } as ABCIMessageLog;
    message.msgIndex = object.msgIndex ?? 0;
    message.log = object.log ?? "";
    message.events = (object.events ?? []).map((e) =>
      StringEvent.fromPartial(e)
    );
    return message;
  },
};

const baseStringEvent: object = { type: "" };

export const StringEvent = {
  encode(
    message: StringEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StringEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStringEvent } as StringEvent;
    message.attributes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StringEvent {
    const message = { ...baseStringEvent } as StringEvent;
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    message.attributes = (object.attributes ?? []).map((e: any) =>
      Attribute.fromJSON(e)
    );
    return message;
  },

  toJSON(message: StringEvent): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) =>
        e ? Attribute.toJSON(e) : undefined
      );
    } else {
      obj.attributes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<StringEvent>): StringEvent {
    const message = { ...baseStringEvent } as StringEvent;
    message.type = object.type ?? "";
    message.attributes = (object.attributes ?? []).map((e) =>
      Attribute.fromPartial(e)
    );
    return message;
  },
};

const baseAttribute: object = { key: "", value: "" };

export const Attribute = {
  encode(
    message: Attribute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Attribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAttribute } as Attribute;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Attribute {
    const message = { ...baseAttribute } as Attribute;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: Attribute): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<Attribute>): Attribute {
    const message = { ...baseAttribute } as Attribute;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

const baseGasInfo: object = { gasWanted: Long.UZERO, gasUsed: Long.UZERO };

export const GasInfo = {
  encode(
    message: GasInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.gasWanted.isZero()) {
      writer.uint32(8).uint64(message.gasWanted);
    }
    if (!message.gasUsed.isZero()) {
      writer.uint32(16).uint64(message.gasUsed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GasInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGasInfo } as GasInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasWanted = reader.uint64() as Long;
          break;
        case 2:
          message.gasUsed = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GasInfo {
    const message = { ...baseGasInfo } as GasInfo;
    message.gasWanted =
      object.gasWanted !== undefined && object.gasWanted !== null
        ? Long.fromString(object.gasWanted)
        : Long.UZERO;
    message.gasUsed =
      object.gasUsed !== undefined && object.gasUsed !== null
        ? Long.fromString(object.gasUsed)
        : Long.UZERO;
    return message;
  },

  toJSON(message: GasInfo): unknown {
    const obj: any = {};
    message.gasWanted !== undefined &&
      (obj.gasWanted = (message.gasWanted || Long.UZERO).toString());
    message.gasUsed !== undefined &&
      (obj.gasUsed = (message.gasUsed || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<GasInfo>): GasInfo {
    const message = { ...baseGasInfo } as GasInfo;
    message.gasWanted =
      object.gasWanted !== undefined && object.gasWanted !== null
        ? Long.fromValue(object.gasWanted)
        : Long.UZERO;
    message.gasUsed =
      object.gasUsed !== undefined && object.gasUsed !== null
        ? Long.fromValue(object.gasUsed)
        : Long.UZERO;
    return message;
  },
};

const baseResult: object = { log: "" };

export const Result = {
  encode(
    message: Result,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResult } as Result;
    message.events = [];
    message.msgResponses = [];
    message.data = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.log = reader.string();
          break;
        case 3:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 4:
          message.msgResponses.push(Any.decode(reader, reader.uint32()));
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
    message.data =
      object.data !== undefined && object.data !== null
        ? bytesFromBase64(object.data)
        : new Uint8Array();
    message.log =
      object.log !== undefined && object.log !== null ? String(object.log) : "";
    message.events = (object.events ?? []).map((e: any) => Event.fromJSON(e));
    message.msgResponses = (object.msgResponses ?? []).map((e: any) =>
      Any.fromJSON(e)
    );
    return message;
  },

  toJSON(message: Result): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    message.log !== undefined && (obj.log = message.log);
    if (message.events) {
      obj.events = message.events.map((e) => (e ? Event.toJSON(e) : undefined));
    } else {
      obj.events = [];
    }
    if (message.msgResponses) {
      obj.msgResponses = message.msgResponses.map((e) =>
        e ? Any.toJSON(e) : undefined
      );
    } else {
      obj.msgResponses = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Result>): Result {
    const message = { ...baseResult } as Result;
    message.data = object.data ?? new Uint8Array();
    message.log = object.log ?? "";
    message.events = (object.events ?? []).map((e) => Event.fromPartial(e));
    message.msgResponses = (object.msgResponses ?? []).map((e) =>
      Any.fromPartial(e)
    );
    return message;
  },
};

const baseSimulationResponse: object = {};

export const SimulationResponse = {
  encode(
    message: SimulationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.gasInfo !== undefined) {
      GasInfo.encode(message.gasInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.result !== undefined) {
      Result.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SimulationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSimulationResponse } as SimulationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasInfo = GasInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.result = Result.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SimulationResponse {
    const message = { ...baseSimulationResponse } as SimulationResponse;
    message.gasInfo =
      object.gasInfo !== undefined && object.gasInfo !== null
        ? GasInfo.fromJSON(object.gasInfo)
        : undefined;
    message.result =
      object.result !== undefined && object.result !== null
        ? Result.fromJSON(object.result)
        : undefined;
    return message;
  },

  toJSON(message: SimulationResponse): unknown {
    const obj: any = {};
    message.gasInfo !== undefined &&
      (obj.gasInfo = message.gasInfo
        ? GasInfo.toJSON(message.gasInfo)
        : undefined);
    message.result !== undefined &&
      (obj.result = message.result ? Result.toJSON(message.result) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SimulationResponse>): SimulationResponse {
    const message = { ...baseSimulationResponse } as SimulationResponse;
    message.gasInfo =
      object.gasInfo !== undefined && object.gasInfo !== null
        ? GasInfo.fromPartial(object.gasInfo)
        : undefined;
    message.result =
      object.result !== undefined && object.result !== null
        ? Result.fromPartial(object.result)
        : undefined;
    return message;
  },
};

const baseMsgData: object = { msgType: "" };

export const MsgData = {
  encode(
    message: MsgData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.msgType !== "") {
      writer.uint32(10).string(message.msgType);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgData } as MsgData;
    message.data = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgType = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgData {
    const message = { ...baseMsgData } as MsgData;
    message.msgType =
      object.msgType !== undefined && object.msgType !== null
        ? String(object.msgType)
        : "";
    message.data =
      object.data !== undefined && object.data !== null
        ? bytesFromBase64(object.data)
        : new Uint8Array();
    return message;
  },

  toJSON(message: MsgData): unknown {
    const obj: any = {};
    message.msgType !== undefined && (obj.msgType = message.msgType);
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgData>): MsgData {
    const message = { ...baseMsgData } as MsgData;
    message.msgType = object.msgType ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};

const baseTxMsgData: object = {};

export const TxMsgData = {
  encode(
    message: TxMsgData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.data) {
      MsgData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.msgResponses) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxMsgData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTxMsgData } as TxMsgData;
    message.data = [];
    message.msgResponses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(MsgData.decode(reader, reader.uint32()));
          break;
        case 2:
          message.msgResponses.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TxMsgData {
    const message = { ...baseTxMsgData } as TxMsgData;
    message.data = (object.data ?? []).map((e: any) => MsgData.fromJSON(e));
    message.msgResponses = (object.msgResponses ?? []).map((e: any) =>
      Any.fromJSON(e)
    );
    return message;
  },

  toJSON(message: TxMsgData): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map((e) => (e ? MsgData.toJSON(e) : undefined));
    } else {
      obj.data = [];
    }
    if (message.msgResponses) {
      obj.msgResponses = message.msgResponses.map((e) =>
        e ? Any.toJSON(e) : undefined
      );
    } else {
      obj.msgResponses = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<TxMsgData>): TxMsgData {
    const message = { ...baseTxMsgData } as TxMsgData;
    message.data = (object.data ?? []).map((e) => MsgData.fromPartial(e));
    message.msgResponses = (object.msgResponses ?? []).map((e) =>
      Any.fromPartial(e)
    );
    return message;
  },
};

const baseSearchTxsResult: object = {
  totalCount: Long.UZERO,
  count: Long.UZERO,
  pageNumber: Long.UZERO,
  pageTotal: Long.UZERO,
  limit: Long.UZERO,
};

export const SearchTxsResult = {
  encode(
    message: SearchTxsResult,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSearchTxsResult } as SearchTxsResult;
    message.txs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalCount = reader.uint64() as Long;
          break;
        case 2:
          message.count = reader.uint64() as Long;
          break;
        case 3:
          message.pageNumber = reader.uint64() as Long;
          break;
        case 4:
          message.pageTotal = reader.uint64() as Long;
          break;
        case 5:
          message.limit = reader.uint64() as Long;
          break;
        case 6:
          message.txs.push(TxResponse.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SearchTxsResult {
    const message = { ...baseSearchTxsResult } as SearchTxsResult;
    message.totalCount =
      object.totalCount !== undefined && object.totalCount !== null
        ? Long.fromString(object.totalCount)
        : Long.UZERO;
    message.count =
      object.count !== undefined && object.count !== null
        ? Long.fromString(object.count)
        : Long.UZERO;
    message.pageNumber =
      object.pageNumber !== undefined && object.pageNumber !== null
        ? Long.fromString(object.pageNumber)
        : Long.UZERO;
    message.pageTotal =
      object.pageTotal !== undefined && object.pageTotal !== null
        ? Long.fromString(object.pageTotal)
        : Long.UZERO;
    message.limit =
      object.limit !== undefined && object.limit !== null
        ? Long.fromString(object.limit)
        : Long.UZERO;
    message.txs = (object.txs ?? []).map((e: any) => TxResponse.fromJSON(e));
    return message;
  },

  toJSON(message: SearchTxsResult): unknown {
    const obj: any = {};
    message.totalCount !== undefined &&
      (obj.totalCount = (message.totalCount || Long.UZERO).toString());
    message.count !== undefined &&
      (obj.count = (message.count || Long.UZERO).toString());
    message.pageNumber !== undefined &&
      (obj.pageNumber = (message.pageNumber || Long.UZERO).toString());
    message.pageTotal !== undefined &&
      (obj.pageTotal = (message.pageTotal || Long.UZERO).toString());
    message.limit !== undefined &&
      (obj.limit = (message.limit || Long.UZERO).toString());
    if (message.txs) {
      obj.txs = message.txs.map((e) => (e ? TxResponse.toJSON(e) : undefined));
    } else {
      obj.txs = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<SearchTxsResult>): SearchTxsResult {
    const message = { ...baseSearchTxsResult } as SearchTxsResult;
    message.totalCount =
      object.totalCount !== undefined && object.totalCount !== null
        ? Long.fromValue(object.totalCount)
        : Long.UZERO;
    message.count =
      object.count !== undefined && object.count !== null
        ? Long.fromValue(object.count)
        : Long.UZERO;
    message.pageNumber =
      object.pageNumber !== undefined && object.pageNumber !== null
        ? Long.fromValue(object.pageNumber)
        : Long.UZERO;
    message.pageTotal =
      object.pageTotal !== undefined && object.pageTotal !== null
        ? Long.fromValue(object.pageTotal)
        : Long.UZERO;
    message.limit =
      object.limit !== undefined && object.limit !== null
        ? Long.fromValue(object.limit)
        : Long.UZERO;
    message.txs = (object.txs ?? []).map((e) => TxResponse.fromPartial(e));
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

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
