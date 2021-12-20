/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.query";

export interface PageRequest {
  page: Long;
  pageSize: Long;
}

export interface PageResponse {
  totalPages: Long;
}

const basePageRequest: object = { page: Long.UZERO, pageSize: Long.UZERO };

export const PageRequest = {
  encode(
    message: PageRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.page.isZero()) {
      writer.uint32(8).uint64(message.page);
    }
    if (!message.pageSize.isZero()) {
      writer.uint32(16).uint64(message.pageSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePageRequest } as PageRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.page = reader.uint64() as Long;
          break;
        case 2:
          message.pageSize = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PageRequest {
    const message = { ...basePageRequest } as PageRequest;
    message.page =
      object.page !== undefined && object.page !== null
        ? Long.fromString(object.page)
        : Long.UZERO;
    message.pageSize =
      object.pageSize !== undefined && object.pageSize !== null
        ? Long.fromString(object.pageSize)
        : Long.UZERO;
    return message;
  },

  toJSON(message: PageRequest): unknown {
    const obj: any = {};
    message.page !== undefined &&
      (obj.page = (message.page || Long.UZERO).toString());
    message.pageSize !== undefined &&
      (obj.pageSize = (message.pageSize || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<PageRequest>): PageRequest {
    const message = { ...basePageRequest } as PageRequest;
    message.page =
      object.page !== undefined && object.page !== null
        ? Long.fromValue(object.page)
        : Long.UZERO;
    message.pageSize =
      object.pageSize !== undefined && object.pageSize !== null
        ? Long.fromValue(object.pageSize)
        : Long.UZERO;
    return message;
  },
};

const basePageResponse: object = { totalPages: Long.UZERO };

export const PageResponse = {
  encode(
    message: PageResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.totalPages.isZero()) {
      writer.uint32(8).uint64(message.totalPages);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePageResponse } as PageResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalPages = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PageResponse {
    const message = { ...basePageResponse } as PageResponse;
    message.totalPages =
      object.totalPages !== undefined && object.totalPages !== null
        ? Long.fromString(object.totalPages)
        : Long.UZERO;
    return message;
  },

  toJSON(message: PageResponse): unknown {
    const obj: any = {};
    message.totalPages !== undefined &&
      (obj.totalPages = (message.totalPages || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<PageResponse>): PageResponse {
    const message = { ...basePageResponse } as PageResponse;
    message.totalPages =
      object.totalPages !== undefined && object.totalPages !== null
        ? Long.fromValue(object.totalPages)
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
