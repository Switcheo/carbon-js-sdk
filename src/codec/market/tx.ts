/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { MarketParams } from "./market";
import { Duration } from "../google/protobuf/duration";
import { Timestamp } from "../google/protobuf/timestamp";

export const protobufPackage = "Switcheo.carbon.market";

export interface MsgDisableSpotMarket {
  creator: string;
  marketName: string;
}

export interface MsgDisableSpotMarketResponse {}

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateMarket {
  creator: string;
  marketType: string;
  base: string;
  quote: string;
  currentBasePriceUsd: string;
  currentQuotePriceUsd: string;
  /** futures only */
  indexOracleId: string;
  expiryTime?: Date;
}

export interface MsgCreateMarketResponse {
  name: string;
}

export interface MsgUpdateMarket {
  updater: string;
  marketParams?: MarketParams;
}

export interface MsgUpdateMarketResponse {}

export interface MsgUpdatePerpetualsFundingInterval {
  updater: string;
  perpetualsFundingInterval?: Duration;
}

export interface MsgUpdatePerpetualsFundingIntervalResponse {}

const baseMsgDisableSpotMarket: object = { creator: "", marketName: "" };

export const MsgDisableSpotMarket = {
  encode(
    message: MsgDisableSpotMarket,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.marketName !== "") {
      writer.uint32(18).string(message.marketName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDisableSpotMarket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDisableSpotMarket } as MsgDisableSpotMarket;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.marketName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDisableSpotMarket {
    const message = { ...baseMsgDisableSpotMarket } as MsgDisableSpotMarket;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.marketName =
      object.marketName !== undefined && object.marketName !== null
        ? String(object.marketName)
        : "";
    return message;
  },

  toJSON(message: MsgDisableSpotMarket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.marketName !== undefined && (obj.marketName = message.marketName);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDisableSpotMarket>): MsgDisableSpotMarket {
    const message = { ...baseMsgDisableSpotMarket } as MsgDisableSpotMarket;
    message.creator = object.creator ?? "";
    message.marketName = object.marketName ?? "";
    return message;
  },
};

const baseMsgDisableSpotMarketResponse: object = {};

export const MsgDisableSpotMarketResponse = {
  encode(
    _: MsgDisableSpotMarketResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDisableSpotMarketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDisableSpotMarketResponse,
    } as MsgDisableSpotMarketResponse;
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

  fromJSON(_: any): MsgDisableSpotMarketResponse {
    const message = {
      ...baseMsgDisableSpotMarketResponse,
    } as MsgDisableSpotMarketResponse;
    return message;
  },

  toJSON(_: MsgDisableSpotMarketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDisableSpotMarketResponse>
  ): MsgDisableSpotMarketResponse {
    const message = {
      ...baseMsgDisableSpotMarketResponse,
    } as MsgDisableSpotMarketResponse;
    return message;
  },
};

const baseMsgCreateMarket: object = {
  creator: "",
  marketType: "",
  base: "",
  quote: "",
  currentBasePriceUsd: "",
  currentQuotePriceUsd: "",
  indexOracleId: "",
};

export const MsgCreateMarket = {
  encode(
    message: MsgCreateMarket,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.marketType !== "") {
      writer.uint32(26).string(message.marketType);
    }
    if (message.base !== "") {
      writer.uint32(34).string(message.base);
    }
    if (message.quote !== "") {
      writer.uint32(42).string(message.quote);
    }
    if (message.currentBasePriceUsd !== "") {
      writer.uint32(50).string(message.currentBasePriceUsd);
    }
    if (message.currentQuotePriceUsd !== "") {
      writer.uint32(58).string(message.currentQuotePriceUsd);
    }
    if (message.indexOracleId !== "") {
      writer.uint32(82).string(message.indexOracleId);
    }
    if (message.expiryTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expiryTime),
        writer.uint32(90).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateMarket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateMarket } as MsgCreateMarket;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.marketType = reader.string();
          break;
        case 4:
          message.base = reader.string();
          break;
        case 5:
          message.quote = reader.string();
          break;
        case 6:
          message.currentBasePriceUsd = reader.string();
          break;
        case 7:
          message.currentQuotePriceUsd = reader.string();
          break;
        case 10:
          message.indexOracleId = reader.string();
          break;
        case 11:
          message.expiryTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateMarket {
    const message = { ...baseMsgCreateMarket } as MsgCreateMarket;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.marketType =
      object.marketType !== undefined && object.marketType !== null
        ? String(object.marketType)
        : "";
    message.base =
      object.base !== undefined && object.base !== null
        ? String(object.base)
        : "";
    message.quote =
      object.quote !== undefined && object.quote !== null
        ? String(object.quote)
        : "";
    message.currentBasePriceUsd =
      object.currentBasePriceUsd !== undefined &&
      object.currentBasePriceUsd !== null
        ? String(object.currentBasePriceUsd)
        : "";
    message.currentQuotePriceUsd =
      object.currentQuotePriceUsd !== undefined &&
      object.currentQuotePriceUsd !== null
        ? String(object.currentQuotePriceUsd)
        : "";
    message.indexOracleId =
      object.indexOracleId !== undefined && object.indexOracleId !== null
        ? String(object.indexOracleId)
        : "";
    message.expiryTime =
      object.expiryTime !== undefined && object.expiryTime !== null
        ? fromJsonTimestamp(object.expiryTime)
        : undefined;
    return message;
  },

  toJSON(message: MsgCreateMarket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.marketType !== undefined && (obj.marketType = message.marketType);
    message.base !== undefined && (obj.base = message.base);
    message.quote !== undefined && (obj.quote = message.quote);
    message.currentBasePriceUsd !== undefined &&
      (obj.currentBasePriceUsd = message.currentBasePriceUsd);
    message.currentQuotePriceUsd !== undefined &&
      (obj.currentQuotePriceUsd = message.currentQuotePriceUsd);
    message.indexOracleId !== undefined &&
      (obj.indexOracleId = message.indexOracleId);
    message.expiryTime !== undefined &&
      (obj.expiryTime = message.expiryTime.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateMarket>): MsgCreateMarket {
    const message = { ...baseMsgCreateMarket } as MsgCreateMarket;
    message.creator = object.creator ?? "";
    message.marketType = object.marketType ?? "";
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    message.currentBasePriceUsd = object.currentBasePriceUsd ?? "";
    message.currentQuotePriceUsd = object.currentQuotePriceUsd ?? "";
    message.indexOracleId = object.indexOracleId ?? "";
    message.expiryTime = object.expiryTime ?? undefined;
    return message;
  },
};

const baseMsgCreateMarketResponse: object = { name: "" };

export const MsgCreateMarketResponse = {
  encode(
    message: MsgCreateMarketResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateMarketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateMarketResponse,
    } as MsgCreateMarketResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateMarketResponse {
    const message = {
      ...baseMsgCreateMarketResponse,
    } as MsgCreateMarketResponse;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    return message;
  },

  toJSON(message: MsgCreateMarketResponse): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateMarketResponse>
  ): MsgCreateMarketResponse {
    const message = {
      ...baseMsgCreateMarketResponse,
    } as MsgCreateMarketResponse;
    message.name = object.name ?? "";
    return message;
  },
};

const baseMsgUpdateMarket: object = { updater: "" };

export const MsgUpdateMarket = {
  encode(
    message: MsgUpdateMarket,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.updater !== "") {
      writer.uint32(10).string(message.updater);
    }
    if (message.marketParams !== undefined) {
      MarketParams.encode(
        message.marketParams,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMarket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateMarket } as MsgUpdateMarket;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updater = reader.string();
          break;
        case 2:
          message.marketParams = MarketParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateMarket {
    const message = { ...baseMsgUpdateMarket } as MsgUpdateMarket;
    message.updater =
      object.updater !== undefined && object.updater !== null
        ? String(object.updater)
        : "";
    message.marketParams =
      object.marketParams !== undefined && object.marketParams !== null
        ? MarketParams.fromJSON(object.marketParams)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdateMarket): unknown {
    const obj: any = {};
    message.updater !== undefined && (obj.updater = message.updater);
    message.marketParams !== undefined &&
      (obj.marketParams = message.marketParams
        ? MarketParams.toJSON(message.marketParams)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateMarket>): MsgUpdateMarket {
    const message = { ...baseMsgUpdateMarket } as MsgUpdateMarket;
    message.updater = object.updater ?? "";
    message.marketParams =
      object.marketParams !== undefined && object.marketParams !== null
        ? MarketParams.fromPartial(object.marketParams)
        : undefined;
    return message;
  },
};

const baseMsgUpdateMarketResponse: object = {};

export const MsgUpdateMarketResponse = {
  encode(
    _: MsgUpdateMarketResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateMarketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateMarketResponse,
    } as MsgUpdateMarketResponse;
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

  fromJSON(_: any): MsgUpdateMarketResponse {
    const message = {
      ...baseMsgUpdateMarketResponse,
    } as MsgUpdateMarketResponse;
    return message;
  },

  toJSON(_: MsgUpdateMarketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateMarketResponse>
  ): MsgUpdateMarketResponse {
    const message = {
      ...baseMsgUpdateMarketResponse,
    } as MsgUpdateMarketResponse;
    return message;
  },
};

const baseMsgUpdatePerpetualsFundingInterval: object = { updater: "" };

export const MsgUpdatePerpetualsFundingInterval = {
  encode(
    message: MsgUpdatePerpetualsFundingInterval,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.updater !== "") {
      writer.uint32(10).string(message.updater);
    }
    if (message.perpetualsFundingInterval !== undefined) {
      Duration.encode(
        message.perpetualsFundingInterval,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdatePerpetualsFundingInterval {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdatePerpetualsFundingInterval,
    } as MsgUpdatePerpetualsFundingInterval;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updater = reader.string();
          break;
        case 2:
          message.perpetualsFundingInterval = Duration.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePerpetualsFundingInterval {
    const message = {
      ...baseMsgUpdatePerpetualsFundingInterval,
    } as MsgUpdatePerpetualsFundingInterval;
    message.updater =
      object.updater !== undefined && object.updater !== null
        ? String(object.updater)
        : "";
    message.perpetualsFundingInterval =
      object.perpetualsFundingInterval !== undefined &&
      object.perpetualsFundingInterval !== null
        ? Duration.fromJSON(object.perpetualsFundingInterval)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdatePerpetualsFundingInterval): unknown {
    const obj: any = {};
    message.updater !== undefined && (obj.updater = message.updater);
    message.perpetualsFundingInterval !== undefined &&
      (obj.perpetualsFundingInterval = message.perpetualsFundingInterval
        ? Duration.toJSON(message.perpetualsFundingInterval)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdatePerpetualsFundingInterval>
  ): MsgUpdatePerpetualsFundingInterval {
    const message = {
      ...baseMsgUpdatePerpetualsFundingInterval,
    } as MsgUpdatePerpetualsFundingInterval;
    message.updater = object.updater ?? "";
    message.perpetualsFundingInterval =
      object.perpetualsFundingInterval !== undefined &&
      object.perpetualsFundingInterval !== null
        ? Duration.fromPartial(object.perpetualsFundingInterval)
        : undefined;
    return message;
  },
};

const baseMsgUpdatePerpetualsFundingIntervalResponse: object = {};

export const MsgUpdatePerpetualsFundingIntervalResponse = {
  encode(
    _: MsgUpdatePerpetualsFundingIntervalResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdatePerpetualsFundingIntervalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdatePerpetualsFundingIntervalResponse,
    } as MsgUpdatePerpetualsFundingIntervalResponse;
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

  fromJSON(_: any): MsgUpdatePerpetualsFundingIntervalResponse {
    const message = {
      ...baseMsgUpdatePerpetualsFundingIntervalResponse,
    } as MsgUpdatePerpetualsFundingIntervalResponse;
    return message;
  },

  toJSON(_: MsgUpdatePerpetualsFundingIntervalResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdatePerpetualsFundingIntervalResponse>
  ): MsgUpdatePerpetualsFundingIntervalResponse {
    const message = {
      ...baseMsgUpdatePerpetualsFundingIntervalResponse,
    } as MsgUpdatePerpetualsFundingIntervalResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  DisableSpotMarket(
    request: MsgDisableSpotMarket
  ): Promise<MsgDisableSpotMarketResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateMarket(request: MsgCreateMarket): Promise<MsgCreateMarketResponse>;
  UpdateMarket(request: MsgUpdateMarket): Promise<MsgUpdateMarketResponse>;
  UpdatePerpetualsFundingInterval(
    request: MsgUpdatePerpetualsFundingInterval
  ): Promise<MsgUpdatePerpetualsFundingIntervalResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.DisableSpotMarket = this.DisableSpotMarket.bind(this);
    this.CreateMarket = this.CreateMarket.bind(this);
    this.UpdateMarket = this.UpdateMarket.bind(this);
    this.UpdatePerpetualsFundingInterval =
      this.UpdatePerpetualsFundingInterval.bind(this);
  }
  DisableSpotMarket(
    request: MsgDisableSpotMarket
  ): Promise<MsgDisableSpotMarketResponse> {
    const data = MsgDisableSpotMarket.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.market.Msg",
      "DisableSpotMarket",
      data
    );
    return promise.then((data) =>
      MsgDisableSpotMarketResponse.decode(new _m0.Reader(data))
    );
  }

  CreateMarket(request: MsgCreateMarket): Promise<MsgCreateMarketResponse> {
    const data = MsgCreateMarket.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.market.Msg",
      "CreateMarket",
      data
    );
    return promise.then((data) =>
      MsgCreateMarketResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateMarket(request: MsgUpdateMarket): Promise<MsgUpdateMarketResponse> {
    const data = MsgUpdateMarket.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.market.Msg",
      "UpdateMarket",
      data
    );
    return promise.then((data) =>
      MsgUpdateMarketResponse.decode(new _m0.Reader(data))
    );
  }

  UpdatePerpetualsFundingInterval(
    request: MsgUpdatePerpetualsFundingInterval
  ): Promise<MsgUpdatePerpetualsFundingIntervalResponse> {
    const data = MsgUpdatePerpetualsFundingInterval.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.market.Msg",
      "UpdatePerpetualsFundingInterval",
      data
    );
    return promise.then((data) =>
      MsgUpdatePerpetualsFundingIntervalResponse.decode(new _m0.Reader(data))
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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
