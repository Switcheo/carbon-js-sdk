/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import {
  AccountRecord,
  Coverage,
  DenomTotal,
  LiveBalance,
  Params,
  SnapshotSummary,
  Ticket,
  UnclaimedDeposit,
} from "./withdrawal";

export const protobufPackage = "Switcheo.carbon.withdrawal";

export interface QueryUnclaimedDepositsRequest {
  pagination?: PageRequest;
}

export interface QueryUnclaimedDepositRequest {
  id: Long;
}

export interface QueryUnclaimedDepositResponse {
  deposit?: UnclaimedDeposit;
}

export interface QueryUnclaimedDepositsByReceiverRequest {
  address: string;
}

export interface QueryUnclaimedDepositsByReceiverResponse {
  deposits: UnclaimedDeposit[];
}

export interface QueryUnclaimedDepositsResponse {
  deposits: UnclaimedDeposit[];
  pagination?: PageResponse;
}

export interface QueryQuoteRequest {
  usd: string;
}

export interface QueryQuoteResponse {
  exitDenom: string;
  /** paid before the relay fee, and the fee, in the exit denom's base units */
  paid: string;
  fee: string;
  /** the USD the balance is debited, 18 decimals: the value paid, which rounding may leave below what was asked */
  usd: string;
  priceExit: string;
}

export interface QueryTicketRequest {
  id: Long;
}

export interface QueryTicketResponse {
  ticket?: Ticket;
}

export interface QueryTicketsRequest {
  address: string;
  pagination?: PageRequest;
}

export interface QueryTicketsResponse {
  tickets: Ticket[];
  pagination?: PageResponse;
}

export interface QueryParamsRequest {
}

export interface QueryParamsResponse {
  params?: Params;
}

export interface QuerySnapshotRequest {
}

export interface QuerySnapshotResponse {
  snapshot?: SnapshotSummary;
}

export interface QueryRecordRequest {
  address: string;
}

export interface QueryRecordResponse {
  initial?: AccountRecord;
  live?: LiveBalance;
  /** whether the address is on the team list */
  team: boolean;
}

export interface QueryRecordsRequest {
  pagination?: PageRequest;
}

export interface QueryRecordsResponse {
  records: LiveBalance[];
  pagination?: PageResponse;
}

export interface QueryDenomTotalsRequest {
}

export interface QueryDenomTotalsResponse {
  totals: DenomTotal[];
}

export interface QueryCoverageRequest {
}

export interface QueryCoverageResponse {
  coverage?: Coverage;
}

function createBaseQueryUnclaimedDepositsRequest(): QueryUnclaimedDepositsRequest {
  return { pagination: undefined };
}

export const QueryUnclaimedDepositsRequest = {
  encode(message: QueryUnclaimedDepositsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnclaimedDepositsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnclaimedDepositsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryUnclaimedDepositsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryUnclaimedDepositsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryUnclaimedDepositsRequest>): QueryUnclaimedDepositsRequest {
    return QueryUnclaimedDepositsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryUnclaimedDepositsRequest>): QueryUnclaimedDepositsRequest {
    const message = createBaseQueryUnclaimedDepositsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryUnclaimedDepositRequest(): QueryUnclaimedDepositRequest {
  return { id: Long.UZERO };
}

export const QueryUnclaimedDepositRequest = {
  encode(message: QueryUnclaimedDepositRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnclaimedDepositRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnclaimedDepositRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryUnclaimedDepositRequest {
    return { id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO };
  },

  toJSON(message: QueryUnclaimedDepositRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<QueryUnclaimedDepositRequest>): QueryUnclaimedDepositRequest {
    return QueryUnclaimedDepositRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryUnclaimedDepositRequest>): QueryUnclaimedDepositRequest {
    const message = createBaseQueryUnclaimedDepositRequest();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
};

function createBaseQueryUnclaimedDepositResponse(): QueryUnclaimedDepositResponse {
  return { deposit: undefined };
}

export const QueryUnclaimedDepositResponse = {
  encode(message: QueryUnclaimedDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deposit !== undefined) {
      UnclaimedDeposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnclaimedDepositResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnclaimedDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deposit = UnclaimedDeposit.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryUnclaimedDepositResponse {
    return { deposit: isSet(object.deposit) ? UnclaimedDeposit.fromJSON(object.deposit) : undefined };
  },

  toJSON(message: QueryUnclaimedDepositResponse): unknown {
    const obj: any = {};
    message.deposit !== undefined &&
      (obj.deposit = message.deposit ? UnclaimedDeposit.toJSON(message.deposit) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryUnclaimedDepositResponse>): QueryUnclaimedDepositResponse {
    return QueryUnclaimedDepositResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryUnclaimedDepositResponse>): QueryUnclaimedDepositResponse {
    const message = createBaseQueryUnclaimedDepositResponse();
    message.deposit = (object.deposit !== undefined && object.deposit !== null)
      ? UnclaimedDeposit.fromPartial(object.deposit)
      : undefined;
    return message;
  },
};

function createBaseQueryUnclaimedDepositsByReceiverRequest(): QueryUnclaimedDepositsByReceiverRequest {
  return { address: "" };
}

export const QueryUnclaimedDepositsByReceiverRequest = {
  encode(message: QueryUnclaimedDepositsByReceiverRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnclaimedDepositsByReceiverRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnclaimedDepositsByReceiverRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryUnclaimedDepositsByReceiverRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryUnclaimedDepositsByReceiverRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<QueryUnclaimedDepositsByReceiverRequest>): QueryUnclaimedDepositsByReceiverRequest {
    return QueryUnclaimedDepositsByReceiverRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryUnclaimedDepositsByReceiverRequest>): QueryUnclaimedDepositsByReceiverRequest {
    const message = createBaseQueryUnclaimedDepositsByReceiverRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryUnclaimedDepositsByReceiverResponse(): QueryUnclaimedDepositsByReceiverResponse {
  return { deposits: [] };
}

export const QueryUnclaimedDepositsByReceiverResponse = {
  encode(message: QueryUnclaimedDepositsByReceiverResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.deposits) {
      UnclaimedDeposit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnclaimedDepositsByReceiverResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnclaimedDepositsByReceiverResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deposits.push(UnclaimedDeposit.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryUnclaimedDepositsByReceiverResponse {
    return {
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => UnclaimedDeposit.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryUnclaimedDepositsByReceiverResponse): unknown {
    const obj: any = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map((e) => e ? UnclaimedDeposit.toJSON(e) : undefined);
    } else {
      obj.deposits = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryUnclaimedDepositsByReceiverResponse>): QueryUnclaimedDepositsByReceiverResponse {
    return QueryUnclaimedDepositsByReceiverResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryUnclaimedDepositsByReceiverResponse>): QueryUnclaimedDepositsByReceiverResponse {
    const message = createBaseQueryUnclaimedDepositsByReceiverResponse();
    message.deposits = object.deposits?.map((e) => UnclaimedDeposit.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryUnclaimedDepositsResponse(): QueryUnclaimedDepositsResponse {
  return { deposits: [], pagination: undefined };
}

export const QueryUnclaimedDepositsResponse = {
  encode(message: QueryUnclaimedDepositsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.deposits) {
      UnclaimedDeposit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnclaimedDepositsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnclaimedDepositsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deposits.push(UnclaimedDeposit.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryUnclaimedDepositsResponse {
    return {
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => UnclaimedDeposit.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryUnclaimedDepositsResponse): unknown {
    const obj: any = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map((e) => e ? UnclaimedDeposit.toJSON(e) : undefined);
    } else {
      obj.deposits = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryUnclaimedDepositsResponse>): QueryUnclaimedDepositsResponse {
    return QueryUnclaimedDepositsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryUnclaimedDepositsResponse>): QueryUnclaimedDepositsResponse {
    const message = createBaseQueryUnclaimedDepositsResponse();
    message.deposits = object.deposits?.map((e) => UnclaimedDeposit.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryQuoteRequest(): QueryQuoteRequest {
  return { usd: "" };
}

export const QueryQuoteRequest = {
  encode(message: QueryQuoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.usd !== "") {
      writer.uint32(10).string(message.usd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQuoteRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQuoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.usd = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryQuoteRequest {
    return { usd: isSet(object.usd) ? String(object.usd) : "" };
  },

  toJSON(message: QueryQuoteRequest): unknown {
    const obj: any = {};
    message.usd !== undefined && (obj.usd = message.usd);
    return obj;
  },

  create(base?: DeepPartial<QueryQuoteRequest>): QueryQuoteRequest {
    return QueryQuoteRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryQuoteRequest>): QueryQuoteRequest {
    const message = createBaseQueryQuoteRequest();
    message.usd = object.usd ?? "";
    return message;
  },
};

function createBaseQueryQuoteResponse(): QueryQuoteResponse {
  return { exitDenom: "", paid: "", fee: "", usd: "", priceExit: "" };
}

export const QueryQuoteResponse = {
  encode(message: QueryQuoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exitDenom !== "") {
      writer.uint32(10).string(message.exitDenom);
    }
    if (message.paid !== "") {
      writer.uint32(18).string(message.paid);
    }
    if (message.fee !== "") {
      writer.uint32(26).string(message.fee);
    }
    if (message.usd !== "") {
      writer.uint32(34).string(message.usd);
    }
    if (message.priceExit !== "") {
      writer.uint32(42).string(message.priceExit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQuoteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQuoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.exitDenom = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.paid = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fee = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.usd = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.priceExit = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryQuoteResponse {
    return {
      exitDenom: isSet(object.exitDenom) ? String(object.exitDenom) : "",
      paid: isSet(object.paid) ? String(object.paid) : "",
      fee: isSet(object.fee) ? String(object.fee) : "",
      usd: isSet(object.usd) ? String(object.usd) : "",
      priceExit: isSet(object.priceExit) ? String(object.priceExit) : "",
    };
  },

  toJSON(message: QueryQuoteResponse): unknown {
    const obj: any = {};
    message.exitDenom !== undefined && (obj.exitDenom = message.exitDenom);
    message.paid !== undefined && (obj.paid = message.paid);
    message.fee !== undefined && (obj.fee = message.fee);
    message.usd !== undefined && (obj.usd = message.usd);
    message.priceExit !== undefined && (obj.priceExit = message.priceExit);
    return obj;
  },

  create(base?: DeepPartial<QueryQuoteResponse>): QueryQuoteResponse {
    return QueryQuoteResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryQuoteResponse>): QueryQuoteResponse {
    const message = createBaseQueryQuoteResponse();
    message.exitDenom = object.exitDenom ?? "";
    message.paid = object.paid ?? "";
    message.fee = object.fee ?? "";
    message.usd = object.usd ?? "";
    message.priceExit = object.priceExit ?? "";
    return message;
  },
};

function createBaseQueryTicketRequest(): QueryTicketRequest {
  return { id: Long.UZERO };
}

export const QueryTicketRequest = {
  encode(message: QueryTicketRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTicketRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTicketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTicketRequest {
    return { id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO };
  },

  toJSON(message: QueryTicketRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<QueryTicketRequest>): QueryTicketRequest {
    return QueryTicketRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryTicketRequest>): QueryTicketRequest {
    const message = createBaseQueryTicketRequest();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
};

function createBaseQueryTicketResponse(): QueryTicketResponse {
  return { ticket: undefined };
}

export const QueryTicketResponse = {
  encode(message: QueryTicketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ticket !== undefined) {
      Ticket.encode(message.ticket, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTicketResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTicketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ticket = Ticket.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTicketResponse {
    return { ticket: isSet(object.ticket) ? Ticket.fromJSON(object.ticket) : undefined };
  },

  toJSON(message: QueryTicketResponse): unknown {
    const obj: any = {};
    message.ticket !== undefined && (obj.ticket = message.ticket ? Ticket.toJSON(message.ticket) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryTicketResponse>): QueryTicketResponse {
    return QueryTicketResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryTicketResponse>): QueryTicketResponse {
    const message = createBaseQueryTicketResponse();
    message.ticket = (object.ticket !== undefined && object.ticket !== null)
      ? Ticket.fromPartial(object.ticket)
      : undefined;
    return message;
  },
};

function createBaseQueryTicketsRequest(): QueryTicketsRequest {
  return { address: "", pagination: undefined };
}

export const QueryTicketsRequest = {
  encode(message: QueryTicketsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTicketsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTicketsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTicketsRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryTicketsRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryTicketsRequest>): QueryTicketsRequest {
    return QueryTicketsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryTicketsRequest>): QueryTicketsRequest {
    const message = createBaseQueryTicketsRequest();
    message.address = object.address ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryTicketsResponse(): QueryTicketsResponse {
  return { tickets: [], pagination: undefined };
}

export const QueryTicketsResponse = {
  encode(message: QueryTicketsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tickets) {
      Ticket.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTicketsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTicketsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tickets.push(Ticket.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTicketsResponse {
    return {
      tickets: Array.isArray(object?.tickets) ? object.tickets.map((e: any) => Ticket.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryTicketsResponse): unknown {
    const obj: any = {};
    if (message.tickets) {
      obj.tickets = message.tickets.map((e) => e ? Ticket.toJSON(e) : undefined);
    } else {
      obj.tickets = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryTicketsResponse>): QueryTicketsResponse {
    return QueryTicketsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryTicketsResponse>): QueryTicketsResponse {
    const message = createBaseQueryTicketsResponse();
    message.tickets = object.tickets?.map((e) => Ticket.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQuerySnapshotRequest(): QuerySnapshotRequest {
  return {};
}

export const QuerySnapshotRequest = {
  encode(_: QuerySnapshotRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySnapshotRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySnapshotRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QuerySnapshotRequest {
    return {};
  },

  toJSON(_: QuerySnapshotRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QuerySnapshotRequest>): QuerySnapshotRequest {
    return QuerySnapshotRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QuerySnapshotRequest>): QuerySnapshotRequest {
    const message = createBaseQuerySnapshotRequest();
    return message;
  },
};

function createBaseQuerySnapshotResponse(): QuerySnapshotResponse {
  return { snapshot: undefined };
}

export const QuerySnapshotResponse = {
  encode(message: QuerySnapshotResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapshot !== undefined) {
      SnapshotSummary.encode(message.snapshot, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySnapshotResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySnapshotResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.snapshot = SnapshotSummary.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuerySnapshotResponse {
    return { snapshot: isSet(object.snapshot) ? SnapshotSummary.fromJSON(object.snapshot) : undefined };
  },

  toJSON(message: QuerySnapshotResponse): unknown {
    const obj: any = {};
    message.snapshot !== undefined &&
      (obj.snapshot = message.snapshot ? SnapshotSummary.toJSON(message.snapshot) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QuerySnapshotResponse>): QuerySnapshotResponse {
    return QuerySnapshotResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QuerySnapshotResponse>): QuerySnapshotResponse {
    const message = createBaseQuerySnapshotResponse();
    message.snapshot = (object.snapshot !== undefined && object.snapshot !== null)
      ? SnapshotSummary.fromPartial(object.snapshot)
      : undefined;
    return message;
  },
};

function createBaseQueryRecordRequest(): QueryRecordRequest {
  return { address: "" };
}

export const QueryRecordRequest = {
  encode(message: QueryRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryRecordRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryRecordRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<QueryRecordRequest>): QueryRecordRequest {
    return QueryRecordRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryRecordRequest>): QueryRecordRequest {
    const message = createBaseQueryRecordRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryRecordResponse(): QueryRecordResponse {
  return { initial: undefined, live: undefined, team: false };
}

export const QueryRecordResponse = {
  encode(message: QueryRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.initial !== undefined) {
      AccountRecord.encode(message.initial, writer.uint32(10).fork()).ldelim();
    }
    if (message.live !== undefined) {
      LiveBalance.encode(message.live, writer.uint32(18).fork()).ldelim();
    }
    if (message.team === true) {
      writer.uint32(24).bool(message.team);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.initial = AccountRecord.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.live = LiveBalance.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.team = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryRecordResponse {
    return {
      initial: isSet(object.initial) ? AccountRecord.fromJSON(object.initial) : undefined,
      live: isSet(object.live) ? LiveBalance.fromJSON(object.live) : undefined,
      team: isSet(object.team) ? Boolean(object.team) : false,
    };
  },

  toJSON(message: QueryRecordResponse): unknown {
    const obj: any = {};
    message.initial !== undefined &&
      (obj.initial = message.initial ? AccountRecord.toJSON(message.initial) : undefined);
    message.live !== undefined && (obj.live = message.live ? LiveBalance.toJSON(message.live) : undefined);
    message.team !== undefined && (obj.team = message.team);
    return obj;
  },

  create(base?: DeepPartial<QueryRecordResponse>): QueryRecordResponse {
    return QueryRecordResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryRecordResponse>): QueryRecordResponse {
    const message = createBaseQueryRecordResponse();
    message.initial = (object.initial !== undefined && object.initial !== null)
      ? AccountRecord.fromPartial(object.initial)
      : undefined;
    message.live = (object.live !== undefined && object.live !== null)
      ? LiveBalance.fromPartial(object.live)
      : undefined;
    message.team = object.team ?? false;
    return message;
  },
};

function createBaseQueryRecordsRequest(): QueryRecordsRequest {
  return { pagination: undefined };
}

export const QueryRecordsRequest = {
  encode(message: QueryRecordsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRecordsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryRecordsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryRecordsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryRecordsRequest>): QueryRecordsRequest {
    return QueryRecordsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryRecordsRequest>): QueryRecordsRequest {
    const message = createBaseQueryRecordsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryRecordsResponse(): QueryRecordsResponse {
  return { records: [], pagination: undefined };
}

export const QueryRecordsResponse = {
  encode(message: QueryRecordsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.records) {
      LiveBalance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.records.push(LiveBalance.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryRecordsResponse {
    return {
      records: Array.isArray(object?.records) ? object.records.map((e: any) => LiveBalance.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryRecordsResponse): unknown {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map((e) => e ? LiveBalance.toJSON(e) : undefined);
    } else {
      obj.records = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryRecordsResponse>): QueryRecordsResponse {
    return QueryRecordsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryRecordsResponse>): QueryRecordsResponse {
    const message = createBaseQueryRecordsResponse();
    message.records = object.records?.map((e) => LiveBalance.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryDenomTotalsRequest(): QueryDenomTotalsRequest {
  return {};
}

export const QueryDenomTotalsRequest = {
  encode(_: QueryDenomTotalsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomTotalsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomTotalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryDenomTotalsRequest {
    return {};
  },

  toJSON(_: QueryDenomTotalsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryDenomTotalsRequest>): QueryDenomTotalsRequest {
    return QueryDenomTotalsRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryDenomTotalsRequest>): QueryDenomTotalsRequest {
    const message = createBaseQueryDenomTotalsRequest();
    return message;
  },
};

function createBaseQueryDenomTotalsResponse(): QueryDenomTotalsResponse {
  return { totals: [] };
}

export const QueryDenomTotalsResponse = {
  encode(message: QueryDenomTotalsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.totals) {
      DenomTotal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomTotalsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomTotalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.totals.push(DenomTotal.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDenomTotalsResponse {
    return { totals: Array.isArray(object?.totals) ? object.totals.map((e: any) => DenomTotal.fromJSON(e)) : [] };
  },

  toJSON(message: QueryDenomTotalsResponse): unknown {
    const obj: any = {};
    if (message.totals) {
      obj.totals = message.totals.map((e) => e ? DenomTotal.toJSON(e) : undefined);
    } else {
      obj.totals = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryDenomTotalsResponse>): QueryDenomTotalsResponse {
    return QueryDenomTotalsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryDenomTotalsResponse>): QueryDenomTotalsResponse {
    const message = createBaseQueryDenomTotalsResponse();
    message.totals = object.totals?.map((e) => DenomTotal.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryCoverageRequest(): QueryCoverageRequest {
  return {};
}

export const QueryCoverageRequest = {
  encode(_: QueryCoverageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCoverageRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCoverageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryCoverageRequest {
    return {};
  },

  toJSON(_: QueryCoverageRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryCoverageRequest>): QueryCoverageRequest {
    return QueryCoverageRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryCoverageRequest>): QueryCoverageRequest {
    const message = createBaseQueryCoverageRequest();
    return message;
  },
};

function createBaseQueryCoverageResponse(): QueryCoverageResponse {
  return { coverage: undefined };
}

export const QueryCoverageResponse = {
  encode(message: QueryCoverageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coverage !== undefined) {
      Coverage.encode(message.coverage, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCoverageResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCoverageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.coverage = Coverage.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCoverageResponse {
    return { coverage: isSet(object.coverage) ? Coverage.fromJSON(object.coverage) : undefined };
  },

  toJSON(message: QueryCoverageResponse): unknown {
    const obj: any = {};
    message.coverage !== undefined && (obj.coverage = message.coverage ? Coverage.toJSON(message.coverage) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryCoverageResponse>): QueryCoverageResponse {
    return QueryCoverageResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryCoverageResponse>): QueryCoverageResponse {
    const message = createBaseQueryCoverageResponse();
    message.coverage = (object.coverage !== undefined && object.coverage !== null)
      ? Coverage.fromPartial(object.coverage)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Params returns the module's switches: the team list, the enable flags, the exits. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Snapshot returns the snapshot step's summary. */
  Snapshot(request: QuerySnapshotRequest): Promise<QuerySnapshotResponse>;
  /** Record returns an address's snapshot record and its live USD balance. */
  Record(request: QueryRecordRequest): Promise<QueryRecordResponse>;
  /** Records lists every live balance, paginated, in address-bytes order. */
  Records(request: QueryRecordsRequest): Promise<QueryRecordsResponse>;
  /** DenomTotals lists what the snapshot moved into the broker, per denom. */
  DenomTotals(request: QueryDenomTotalsRequest): Promise<QueryDenomTotalsResponse>;
  /** Quote says what a withdrawal of usd would pay, without making it. */
  Quote(request: QueryQuoteRequest): Promise<QueryQuoteResponse>;
  /** Ticket returns one withdrawal. */
  Ticket(request: QueryTicketRequest): Promise<QueryTicketResponse>;
  /** Tickets lists an address's withdrawals, paginated, oldest first. */
  Tickets(request: QueryTicketsRequest): Promise<QueryTicketsResponse>;
  /** UnclaimedDeposits lists the stray Axelar deposits, resolved or not, paginated. */
  UnclaimedDeposits(request: QueryUnclaimedDepositsRequest): Promise<QueryUnclaimedDepositsResponse>;
  /** UnclaimedDeposit is one stray deposit by id. */
  UnclaimedDeposit(request: QueryUnclaimedDepositRequest): Promise<QueryUnclaimedDepositResponse>;
  /** UnclaimedDepositsByReceiver lists the stray deposits addressed to one account. */
  UnclaimedDepositsByReceiver(
    request: QueryUnclaimedDepositsByReceiverRequest,
  ): Promise<QueryUnclaimedDepositsByReceiverResponse>;
  /** Coverage is the end-block figure: users' claims against what the exits can deliver, in USD. */
  Coverage(request: QueryCoverageRequest): Promise<QueryCoverageResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.withdrawal.Query";
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Snapshot = this.Snapshot.bind(this);
    this.Record = this.Record.bind(this);
    this.Records = this.Records.bind(this);
    this.DenomTotals = this.DenomTotals.bind(this);
    this.Quote = this.Quote.bind(this);
    this.Ticket = this.Ticket.bind(this);
    this.Tickets = this.Tickets.bind(this);
    this.UnclaimedDeposits = this.UnclaimedDeposits.bind(this);
    this.UnclaimedDeposit = this.UnclaimedDeposit.bind(this);
    this.UnclaimedDepositsByReceiver = this.UnclaimedDepositsByReceiver.bind(this);
    this.Coverage = this.Coverage.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  Snapshot(request: QuerySnapshotRequest): Promise<QuerySnapshotResponse> {
    const data = QuerySnapshotRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Snapshot", data);
    return promise.then((data) => QuerySnapshotResponse.decode(_m0.Reader.create(data)));
  }

  Record(request: QueryRecordRequest): Promise<QueryRecordResponse> {
    const data = QueryRecordRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Record", data);
    return promise.then((data) => QueryRecordResponse.decode(_m0.Reader.create(data)));
  }

  Records(request: QueryRecordsRequest): Promise<QueryRecordsResponse> {
    const data = QueryRecordsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Records", data);
    return promise.then((data) => QueryRecordsResponse.decode(_m0.Reader.create(data)));
  }

  DenomTotals(request: QueryDenomTotalsRequest): Promise<QueryDenomTotalsResponse> {
    const data = QueryDenomTotalsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DenomTotals", data);
    return promise.then((data) => QueryDenomTotalsResponse.decode(_m0.Reader.create(data)));
  }

  Quote(request: QueryQuoteRequest): Promise<QueryQuoteResponse> {
    const data = QueryQuoteRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Quote", data);
    return promise.then((data) => QueryQuoteResponse.decode(_m0.Reader.create(data)));
  }

  Ticket(request: QueryTicketRequest): Promise<QueryTicketResponse> {
    const data = QueryTicketRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Ticket", data);
    return promise.then((data) => QueryTicketResponse.decode(_m0.Reader.create(data)));
  }

  Tickets(request: QueryTicketsRequest): Promise<QueryTicketsResponse> {
    const data = QueryTicketsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Tickets", data);
    return promise.then((data) => QueryTicketsResponse.decode(_m0.Reader.create(data)));
  }

  UnclaimedDeposits(request: QueryUnclaimedDepositsRequest): Promise<QueryUnclaimedDepositsResponse> {
    const data = QueryUnclaimedDepositsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UnclaimedDeposits", data);
    return promise.then((data) => QueryUnclaimedDepositsResponse.decode(_m0.Reader.create(data)));
  }

  UnclaimedDeposit(request: QueryUnclaimedDepositRequest): Promise<QueryUnclaimedDepositResponse> {
    const data = QueryUnclaimedDepositRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UnclaimedDeposit", data);
    return promise.then((data) => QueryUnclaimedDepositResponse.decode(_m0.Reader.create(data)));
  }

  UnclaimedDepositsByReceiver(
    request: QueryUnclaimedDepositsByReceiverRequest,
  ): Promise<QueryUnclaimedDepositsByReceiverResponse> {
    const data = QueryUnclaimedDepositsByReceiverRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UnclaimedDepositsByReceiver", data);
    return promise.then((data) => QueryUnclaimedDepositsByReceiverResponse.decode(_m0.Reader.create(data)));
  }

  Coverage(request: QueryCoverageRequest): Promise<QueryCoverageResponse> {
    const data = QueryCoverageRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Coverage", data);
    return promise.then((data) => QueryCoverageResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
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
