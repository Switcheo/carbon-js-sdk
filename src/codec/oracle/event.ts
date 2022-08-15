/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Vote, Result } from "../oracle/oracle";

export const protobufPackage = "Switcheo.carbon.oracle";

export interface NewVoteEvent {
  voterAccount: string;
}

export interface RecordVoteEvent {
  voterAccount: string;
}

export interface VoteEvent {
  vote?: Vote;
  voteId: string;
  type: string;
}

export interface ResultEvent {
  result?: Result;
  resultId: string;
  type: string;
}

export interface OracleSlashEvent {
  validator: string;
  consAddress: string;
  slashCount: Long;
  infractionHeight: Long;
  power: Long;
  slashFactor: string;
}

const baseNewVoteEvent: object = { voterAccount: "" };

export const NewVoteEvent = {
  encode(
    message: NewVoteEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.voterAccount !== "") {
      writer.uint32(10).string(message.voterAccount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewVoteEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNewVoteEvent } as NewVoteEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voterAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NewVoteEvent {
    const message = { ...baseNewVoteEvent } as NewVoteEvent;
    message.voterAccount =
      object.voterAccount !== undefined && object.voterAccount !== null
        ? String(object.voterAccount)
        : "";
    return message;
  },

  toJSON(message: NewVoteEvent): unknown {
    const obj: any = {};
    message.voterAccount !== undefined &&
      (obj.voterAccount = message.voterAccount);
    return obj;
  },

  fromPartial(object: DeepPartial<NewVoteEvent>): NewVoteEvent {
    const message = { ...baseNewVoteEvent } as NewVoteEvent;
    message.voterAccount = object.voterAccount ?? "";
    return message;
  },
};

const baseRecordVoteEvent: object = { voterAccount: "" };

export const RecordVoteEvent = {
  encode(
    message: RecordVoteEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.voterAccount !== "") {
      writer.uint32(10).string(message.voterAccount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordVoteEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRecordVoteEvent } as RecordVoteEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voterAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecordVoteEvent {
    const message = { ...baseRecordVoteEvent } as RecordVoteEvent;
    message.voterAccount =
      object.voterAccount !== undefined && object.voterAccount !== null
        ? String(object.voterAccount)
        : "";
    return message;
  },

  toJSON(message: RecordVoteEvent): unknown {
    const obj: any = {};
    message.voterAccount !== undefined &&
      (obj.voterAccount = message.voterAccount);
    return obj;
  },

  fromPartial(object: DeepPartial<RecordVoteEvent>): RecordVoteEvent {
    const message = { ...baseRecordVoteEvent } as RecordVoteEvent;
    message.voterAccount = object.voterAccount ?? "";
    return message;
  },
};

const baseVoteEvent: object = { voteId: "", type: "" };

export const VoteEvent = {
  encode(
    message: VoteEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    if (message.voteId !== "") {
      writer.uint32(18).string(message.voteId);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VoteEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVoteEvent } as VoteEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote = Vote.decode(reader, reader.uint32());
          break;
        case 2:
          message.voteId = reader.string();
          break;
        case 3:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VoteEvent {
    const message = { ...baseVoteEvent } as VoteEvent;
    message.vote =
      object.vote !== undefined && object.vote !== null
        ? Vote.fromJSON(object.vote)
        : undefined;
    message.voteId =
      object.voteId !== undefined && object.voteId !== null
        ? String(object.voteId)
        : "";
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    return message;
  },

  toJSON(message: VoteEvent): unknown {
    const obj: any = {};
    message.vote !== undefined &&
      (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
    message.voteId !== undefined && (obj.voteId = message.voteId);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(object: DeepPartial<VoteEvent>): VoteEvent {
    const message = { ...baseVoteEvent } as VoteEvent;
    message.vote =
      object.vote !== undefined && object.vote !== null
        ? Vote.fromPartial(object.vote)
        : undefined;
    message.voteId = object.voteId ?? "";
    message.type = object.type ?? "";
    return message;
  },
};

const baseResultEvent: object = { resultId: "", type: "" };

export const ResultEvent = {
  encode(
    message: ResultEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.result !== undefined) {
      Result.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    if (message.resultId !== "") {
      writer.uint32(18).string(message.resultId);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResultEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResultEvent } as ResultEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = Result.decode(reader, reader.uint32());
          break;
        case 2:
          message.resultId = reader.string();
          break;
        case 3:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResultEvent {
    const message = { ...baseResultEvent } as ResultEvent;
    message.result =
      object.result !== undefined && object.result !== null
        ? Result.fromJSON(object.result)
        : undefined;
    message.resultId =
      object.resultId !== undefined && object.resultId !== null
        ? String(object.resultId)
        : "";
    message.type =
      object.type !== undefined && object.type !== null
        ? String(object.type)
        : "";
    return message;
  },

  toJSON(message: ResultEvent): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = message.result ? Result.toJSON(message.result) : undefined);
    message.resultId !== undefined && (obj.resultId = message.resultId);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial(object: DeepPartial<ResultEvent>): ResultEvent {
    const message = { ...baseResultEvent } as ResultEvent;
    message.result =
      object.result !== undefined && object.result !== null
        ? Result.fromPartial(object.result)
        : undefined;
    message.resultId = object.resultId ?? "";
    message.type = object.type ?? "";
    return message;
  },
};

const baseOracleSlashEvent: object = {
  validator: "",
  consAddress: "",
  slashCount: Long.UZERO,
  infractionHeight: Long.UZERO,
  power: Long.UZERO,
  slashFactor: "",
};

export const OracleSlashEvent = {
  encode(
    message: OracleSlashEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.consAddress !== "") {
      writer.uint32(18).string(message.consAddress);
    }
    if (!message.slashCount.isZero()) {
      writer.uint32(24).uint64(message.slashCount);
    }
    if (!message.infractionHeight.isZero()) {
      writer.uint32(32).uint64(message.infractionHeight);
    }
    if (!message.power.isZero()) {
      writer.uint32(40).uint64(message.power);
    }
    if (message.slashFactor !== "") {
      writer.uint32(50).string(message.slashFactor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OracleSlashEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOracleSlashEvent } as OracleSlashEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.consAddress = reader.string();
          break;
        case 3:
          message.slashCount = reader.uint64() as Long;
          break;
        case 4:
          message.infractionHeight = reader.uint64() as Long;
          break;
        case 5:
          message.power = reader.uint64() as Long;
          break;
        case 6:
          message.slashFactor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OracleSlashEvent {
    const message = { ...baseOracleSlashEvent } as OracleSlashEvent;
    message.validator =
      object.validator !== undefined && object.validator !== null
        ? String(object.validator)
        : "";
    message.consAddress =
      object.consAddress !== undefined && object.consAddress !== null
        ? String(object.consAddress)
        : "";
    message.slashCount =
      object.slashCount !== undefined && object.slashCount !== null
        ? Long.fromString(object.slashCount)
        : Long.UZERO;
    message.infractionHeight =
      object.infractionHeight !== undefined && object.infractionHeight !== null
        ? Long.fromString(object.infractionHeight)
        : Long.UZERO;
    message.power =
      object.power !== undefined && object.power !== null
        ? Long.fromString(object.power)
        : Long.UZERO;
    message.slashFactor =
      object.slashFactor !== undefined && object.slashFactor !== null
        ? String(object.slashFactor)
        : "";
    return message;
  },

  toJSON(message: OracleSlashEvent): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.consAddress !== undefined &&
      (obj.consAddress = message.consAddress);
    message.slashCount !== undefined &&
      (obj.slashCount = (message.slashCount || Long.UZERO).toString());
    message.infractionHeight !== undefined &&
      (obj.infractionHeight = (
        message.infractionHeight || Long.UZERO
      ).toString());
    message.power !== undefined &&
      (obj.power = (message.power || Long.UZERO).toString());
    message.slashFactor !== undefined &&
      (obj.slashFactor = message.slashFactor);
    return obj;
  },

  fromPartial(object: DeepPartial<OracleSlashEvent>): OracleSlashEvent {
    const message = { ...baseOracleSlashEvent } as OracleSlashEvent;
    message.validator = object.validator ?? "";
    message.consAddress = object.consAddress ?? "";
    message.slashCount =
      object.slashCount !== undefined && object.slashCount !== null
        ? Long.fromValue(object.slashCount)
        : Long.UZERO;
    message.infractionHeight =
      object.infractionHeight !== undefined && object.infractionHeight !== null
        ? Long.fromValue(object.infractionHeight)
        : Long.UZERO;
    message.power =
      object.power !== undefined && object.power !== null
        ? Long.fromValue(object.power)
        : Long.UZERO;
    message.slashFactor = object.slashFactor ?? "";
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
