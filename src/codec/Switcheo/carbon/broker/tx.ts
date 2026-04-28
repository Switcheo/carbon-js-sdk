/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ParamsToUpdate } from "./params";

export const protobufPackage = "Switcheo.carbon.broker";

export interface LiquidatorPosition {
  marketId: string;
  address: string;
}

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgInitiateLiquidation {
  creator: string;
  positions: LiquidatorPosition[];
}

export interface MsgInitiateLiquidationResponse {
}

export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /** params defines the optional parameters to update. */
  params?: ParamsToUpdate;
}

export interface MsgUpdateParamsResponse {
}

function createBaseLiquidatorPosition(): LiquidatorPosition {
  return { marketId: "", address: "" };
}

export const LiquidatorPosition = {
  encode(message: LiquidatorPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidatorPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidatorPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.marketId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): LiquidatorPosition {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: LiquidatorPosition): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<LiquidatorPosition>): LiquidatorPosition {
    return LiquidatorPosition.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<LiquidatorPosition>): LiquidatorPosition {
    const message = createBaseLiquidatorPosition();
    message.marketId = object.marketId ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseMsgInitiateLiquidation(): MsgInitiateLiquidation {
  return { creator: "", positions: [] };
}

export const MsgInitiateLiquidation = {
  encode(message: MsgInitiateLiquidation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.positions) {
      LiquidatorPosition.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInitiateLiquidation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInitiateLiquidation();
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

          message.positions.push(LiquidatorPosition.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgInitiateLiquidation {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      positions: Array.isArray(object?.positions)
        ? object.positions.map((e: any) => LiquidatorPosition.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgInitiateLiquidation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.positions) {
      obj.positions = message.positions.map((e) => e ? LiquidatorPosition.toJSON(e) : undefined);
    } else {
      obj.positions = [];
    }
    return obj;
  },

  create(base?: DeepPartial<MsgInitiateLiquidation>): MsgInitiateLiquidation {
    return MsgInitiateLiquidation.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgInitiateLiquidation>): MsgInitiateLiquidation {
    const message = createBaseMsgInitiateLiquidation();
    message.creator = object.creator ?? "";
    message.positions = object.positions?.map((e) => LiquidatorPosition.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgInitiateLiquidationResponse(): MsgInitiateLiquidationResponse {
  return {};
}

export const MsgInitiateLiquidationResponse = {
  encode(_: MsgInitiateLiquidationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInitiateLiquidationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInitiateLiquidationResponse();
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

  fromJSON(_: any): MsgInitiateLiquidationResponse {
    return {};
  },

  toJSON(_: MsgInitiateLiquidationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgInitiateLiquidationResponse>): MsgInitiateLiquidationResponse {
    return MsgInitiateLiquidationResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgInitiateLiquidationResponse>): MsgInitiateLiquidationResponse {
    const message = createBaseMsgInitiateLiquidationResponse();
    return message;
  },
};

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      ParamsToUpdate.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.params = ParamsToUpdate.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? ParamsToUpdate.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? ParamsToUpdate.toJSON(message.params) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    return MsgUpdateParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? ParamsToUpdate.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  InitiateLiquidation(request: MsgInitiateLiquidation): Promise<MsgInitiateLiquidationResponse>;
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.broker.Msg";
    this.rpc = rpc;
    this.InitiateLiquidation = this.InitiateLiquidation.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  InitiateLiquidation(request: MsgInitiateLiquidation): Promise<MsgInitiateLiquidationResponse> {
    const data = MsgInitiateLiquidation.encode(request).finish();
    const promise = this.rpc.request(this.service, "InitiateLiquidation", data);
    return promise.then((data) => MsgInitiateLiquidationResponse.decode(_m0.Reader.create(data)));
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
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
