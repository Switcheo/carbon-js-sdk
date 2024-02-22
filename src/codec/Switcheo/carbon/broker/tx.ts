/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

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

export interface MsgInitiateLiquidationResponse {}

const baseLiquidatorPosition: object = { marketId: "", address: "" };

export const LiquidatorPosition = {
  encode(
    message: LiquidatorPosition,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidatorPosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLiquidatorPosition } as LiquidatorPosition;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LiquidatorPosition {
    const message = { ...baseLiquidatorPosition } as LiquidatorPosition;
    message.marketId =
      object.marketId !== undefined && object.marketId !== null
        ? String(object.marketId)
        : "";
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: LiquidatorPosition): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<LiquidatorPosition>): LiquidatorPosition {
    const message = { ...baseLiquidatorPosition } as LiquidatorPosition;
    message.marketId = object.marketId ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

const baseMsgInitiateLiquidation: object = { creator: "" };

export const MsgInitiateLiquidation = {
  encode(
    message: MsgInitiateLiquidation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.positions) {
      LiquidatorPosition.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgInitiateLiquidation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgInitiateLiquidation } as MsgInitiateLiquidation;
    message.positions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.positions.push(
            LiquidatorPosition.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInitiateLiquidation {
    const message = { ...baseMsgInitiateLiquidation } as MsgInitiateLiquidation;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.positions = (object.positions ?? []).map((e: any) =>
      LiquidatorPosition.fromJSON(e)
    );
    return message;
  },

  toJSON(message: MsgInitiateLiquidation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.positions) {
      obj.positions = message.positions.map((e) =>
        e ? LiquidatorPosition.toJSON(e) : undefined
      );
    } else {
      obj.positions = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgInitiateLiquidation>
  ): MsgInitiateLiquidation {
    const message = { ...baseMsgInitiateLiquidation } as MsgInitiateLiquidation;
    message.creator = object.creator ?? "";
    message.positions = (object.positions ?? []).map((e) =>
      LiquidatorPosition.fromPartial(e)
    );
    return message;
  },
};

const baseMsgInitiateLiquidationResponse: object = {};

export const MsgInitiateLiquidationResponse = {
  encode(
    _: MsgInitiateLiquidationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgInitiateLiquidationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgInitiateLiquidationResponse,
    } as MsgInitiateLiquidationResponse;
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

  fromJSON(_: any): MsgInitiateLiquidationResponse {
    const message = {
      ...baseMsgInitiateLiquidationResponse,
    } as MsgInitiateLiquidationResponse;
    return message;
  },

  toJSON(_: MsgInitiateLiquidationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgInitiateLiquidationResponse>
  ): MsgInitiateLiquidationResponse {
    const message = {
      ...baseMsgInitiateLiquidationResponse,
    } as MsgInitiateLiquidationResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  InitiateLiquidation(
    request: MsgInitiateLiquidation
  ): Promise<MsgInitiateLiquidationResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.InitiateLiquidation = this.InitiateLiquidation.bind(this);
  }
  InitiateLiquidation(
    request: MsgInitiateLiquidation
  ): Promise<MsgInitiateLiquidationResponse> {
    const data = MsgInitiateLiquidation.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.broker.Msg",
      "InitiateLiquidation",
      data
    );
    return promise.then((data) =>
      MsgInitiateLiquidationResponse.decode(new _m0.Reader(data))
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
