/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { FileDescriptorProto } from "../../../google/protobuf/descriptor";

export const protobufPackage = "cosmos.reflection.v1";

/** FileDescriptorsRequest is the Query/FileDescriptors request type. */
export interface FileDescriptorsRequest {}

/** FileDescriptorsResponse is the Query/FileDescriptors response type. */
export interface FileDescriptorsResponse {
  /** files is the file descriptors. */
  files: FileDescriptorProto[];
}

const baseFileDescriptorsRequest: object = {};

export const FileDescriptorsRequest = {
  encode(
    _: FileDescriptorsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FileDescriptorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFileDescriptorsRequest } as FileDescriptorsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): FileDescriptorsRequest {
    const message = { ...baseFileDescriptorsRequest } as FileDescriptorsRequest;
    return message;
  },

  toJSON(_: FileDescriptorsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<FileDescriptorsRequest>): FileDescriptorsRequest {
    const message = { ...baseFileDescriptorsRequest } as FileDescriptorsRequest;
    return message;
  },
};

const baseFileDescriptorsResponse: object = {};

export const FileDescriptorsResponse = {
  encode(
    message: FileDescriptorsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.files) {
      FileDescriptorProto.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FileDescriptorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseFileDescriptorsResponse,
    } as FileDescriptorsResponse;
    message.files = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.files.push(
            FileDescriptorProto.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FileDescriptorsResponse {
    const message = {
      ...baseFileDescriptorsResponse,
    } as FileDescriptorsResponse;
    message.files = (object.files ?? []).map((e: any) =>
      FileDescriptorProto.fromJSON(e)
    );
    return message;
  },

  toJSON(message: FileDescriptorsResponse): unknown {
    const obj: any = {};
    if (message.files) {
      obj.files = message.files.map((e) =>
        e ? FileDescriptorProto.toJSON(e) : undefined
      );
    } else {
      obj.files = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<FileDescriptorsResponse>
  ): FileDescriptorsResponse {
    const message = {
      ...baseFileDescriptorsResponse,
    } as FileDescriptorsResponse;
    message.files = (object.files ?? []).map((e) =>
      FileDescriptorProto.fromPartial(e)
    );
    return message;
  },
};

/**
 * Package cosmos.reflection.v1 provides support for inspecting protobuf
 * file descriptors.
 */
export interface ReflectionService {
  /**
   * FileDescriptors queries all the file descriptors in the app in order
   * to enable easier generation of dynamic clients.
   */
  FileDescriptors(
    request: FileDescriptorsRequest
  ): Promise<FileDescriptorsResponse>;
}

export class ReflectionServiceClientImpl implements ReflectionService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.FileDescriptors = this.FileDescriptors.bind(this);
  }
  FileDescriptors(
    request: FileDescriptorsRequest
  ): Promise<FileDescriptorsResponse> {
    const data = FileDescriptorsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.reflection.v1.ReflectionService",
      "FileDescriptors",
      data
    );
    return promise.then((data) =>
      FileDescriptorsResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
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
