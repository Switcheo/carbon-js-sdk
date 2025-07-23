/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { Market, MarketParams } from "./market";

export const protobufPackage = "Switcheo.carbon.market";

export interface CreateMarketProposal {
  title: string;
  description: string;
  msg?: Market;
}

export interface UpdateMarketProposal {
  title: string;
  description: string;
  msg?: MarketParams;
}

export interface UpdatePerpetualsFundingIntervalProposal {
  title: string;
  description: string;
  perpetualsFundingInterval?: Duration;
}

function createBaseCreateMarketProposal(): CreateMarketProposal {
  return { title: "", description: "", msg: undefined };
}

export const CreateMarketProposal = {
  encode(message: CreateMarketProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.msg !== undefined) {
      Market.encode(message.msg, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateMarketProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateMarketProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.msg = Market.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateMarketProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      msg: isSet(object.msg) ? Market.fromJSON(object.msg) : undefined,
    };
  },

  toJSON(message: CreateMarketProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.msg !== undefined && (obj.msg = message.msg ? Market.toJSON(message.msg) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CreateMarketProposal>): CreateMarketProposal {
    return CreateMarketProposal.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateMarketProposal>): CreateMarketProposal {
    const message = createBaseCreateMarketProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.msg = (object.msg !== undefined && object.msg !== null) ? Market.fromPartial(object.msg) : undefined;
    return message;
  },
};

function createBaseUpdateMarketProposal(): UpdateMarketProposal {
  return { title: "", description: "", msg: undefined };
}

export const UpdateMarketProposal = {
  encode(message: UpdateMarketProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.msg !== undefined) {
      MarketParams.encode(message.msg, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMarketProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateMarketProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.msg = MarketParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateMarketProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      msg: isSet(object.msg) ? MarketParams.fromJSON(object.msg) : undefined,
    };
  },

  toJSON(message: UpdateMarketProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.msg !== undefined && (obj.msg = message.msg ? MarketParams.toJSON(message.msg) : undefined);
    return obj;
  },

  create(base?: DeepPartial<UpdateMarketProposal>): UpdateMarketProposal {
    return UpdateMarketProposal.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateMarketProposal>): UpdateMarketProposal {
    const message = createBaseUpdateMarketProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.msg = (object.msg !== undefined && object.msg !== null) ? MarketParams.fromPartial(object.msg) : undefined;
    return message;
  },
};

function createBaseUpdatePerpetualsFundingIntervalProposal(): UpdatePerpetualsFundingIntervalProposal {
  return { title: "", description: "", perpetualsFundingInterval: undefined };
}

export const UpdatePerpetualsFundingIntervalProposal = {
  encode(message: UpdatePerpetualsFundingIntervalProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.perpetualsFundingInterval !== undefined) {
      Duration.encode(message.perpetualsFundingInterval, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePerpetualsFundingIntervalProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePerpetualsFundingIntervalProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.perpetualsFundingInterval = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdatePerpetualsFundingIntervalProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      perpetualsFundingInterval: isSet(object.perpetualsFundingInterval)
        ? Duration.fromJSON(object.perpetualsFundingInterval)
        : undefined,
    };
  },

  toJSON(message: UpdatePerpetualsFundingIntervalProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.perpetualsFundingInterval !== undefined &&
      (obj.perpetualsFundingInterval = message.perpetualsFundingInterval
        ? Duration.toJSON(message.perpetualsFundingInterval)
        : undefined);
    return obj;
  },

  create(base?: DeepPartial<UpdatePerpetualsFundingIntervalProposal>): UpdatePerpetualsFundingIntervalProposal {
    return UpdatePerpetualsFundingIntervalProposal.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdatePerpetualsFundingIntervalProposal>): UpdatePerpetualsFundingIntervalProposal {
    const message = createBaseUpdatePerpetualsFundingIntervalProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.perpetualsFundingInterval =
      (object.perpetualsFundingInterval !== undefined && object.perpetualsFundingInterval !== null)
        ? Duration.fromPartial(object.perpetualsFundingInterval)
        : undefined;
    return message;
  },
};

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
