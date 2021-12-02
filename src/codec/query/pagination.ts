/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.query";

export interface DBPaginationRequest {
  limit: Long;
  pageId: Long;
  offset: Long;
}

export interface DBPaginationResponse {
  nextPageId: Long;
  total: Long;
}

const baseDBPaginationRequest: object = {
  limit: Long.UZERO,
  pageId: Long.UZERO,
  offset: Long.UZERO,
};

export const DBPaginationRequest = {
  encode(
    message: DBPaginationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.limit.isZero()) {
      writer.uint32(8).uint64(message.limit);
    }
    if (!message.pageId.isZero()) {
      writer.uint32(16).uint64(message.pageId);
    }
    if (!message.offset.isZero()) {
      writer.uint32(24).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DBPaginationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDBPaginationRequest } as DBPaginationRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limit = reader.uint64() as Long;
          break;
        case 2:
          message.pageId = reader.uint64() as Long;
          break;
        case 3:
          message.offset = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DBPaginationRequest {
    const message = { ...baseDBPaginationRequest } as DBPaginationRequest;
    message.limit =
      object.limit !== undefined && object.limit !== null
        ? Long.fromString(object.limit)
        : Long.UZERO;
    message.pageId =
      object.pageId !== undefined && object.pageId !== null
        ? Long.fromString(object.pageId)
        : Long.UZERO;
    message.offset =
      object.offset !== undefined && object.offset !== null
        ? Long.fromString(object.offset)
        : Long.UZERO;
    return message;
  },

  toJSON(message: DBPaginationRequest): unknown {
    const obj: any = {};
    message.limit !== undefined &&
      (obj.limit = (message.limit || Long.UZERO).toString());
    message.pageId !== undefined &&
      (obj.pageId = (message.pageId || Long.UZERO).toString());
    message.offset !== undefined &&
      (obj.offset = (message.offset || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<DBPaginationRequest>): DBPaginationRequest {
    const message = { ...baseDBPaginationRequest } as DBPaginationRequest;
    message.limit =
      object.limit !== undefined && object.limit !== null
        ? Long.fromValue(object.limit)
        : Long.UZERO;
    message.pageId =
      object.pageId !== undefined && object.pageId !== null
        ? Long.fromValue(object.pageId)
        : Long.UZERO;
    message.offset =
      object.offset !== undefined && object.offset !== null
        ? Long.fromValue(object.offset)
        : Long.UZERO;
    return message;
  },
};

const baseDBPaginationResponse: object = {
  nextPageId: Long.UZERO,
  total: Long.UZERO,
};

export const DBPaginationResponse = {
  encode(
    message: DBPaginationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.nextPageId.isZero()) {
      writer.uint32(8).uint64(message.nextPageId);
    }
    if (!message.total.isZero()) {
      writer.uint32(16).uint64(message.total);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DBPaginationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDBPaginationResponse } as DBPaginationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextPageId = reader.uint64() as Long;
          break;
        case 2:
          message.total = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DBPaginationResponse {
    const message = { ...baseDBPaginationResponse } as DBPaginationResponse;
    message.nextPageId =
      object.nextPageId !== undefined && object.nextPageId !== null
        ? Long.fromString(object.nextPageId)
        : Long.UZERO;
    message.total =
      object.total !== undefined && object.total !== null
        ? Long.fromString(object.total)
        : Long.UZERO;
    return message;
  },

  toJSON(message: DBPaginationResponse): unknown {
    const obj: any = {};
    message.nextPageId !== undefined &&
      (obj.nextPageId = (message.nextPageId || Long.UZERO).toString());
    message.total !== undefined &&
      (obj.total = (message.total || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<DBPaginationResponse>): DBPaginationResponse {
    const message = { ...baseDBPaginationResponse } as DBPaginationResponse;
    message.nextPageId =
      object.nextPageId !== undefined && object.nextPageId !== null
        ? Long.fromValue(object.nextPageId)
        : Long.UZERO;
    message.total =
      object.total !== undefined && object.total !== null
        ? Long.fromValue(object.total)
        : Long.UZERO;
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
