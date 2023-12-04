/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { MsgGasCost, MinGasPrice } from "./fee";

export const protobufPackage = "Switcheo.carbon.fee";

export interface SetMsgGasCostProposal {
  title: string;
  description: string;
  msg?: MsgGasCost;
}

export interface SetMinGasPriceProposal {
  title: string;
  description: string;
  msg?: MinGasPrice;
}

export interface RemoveMsgGasCostProposal {
  title: string;
  description: string;
  msgType: string;
}

export interface RemoveMinGasPriceProposal {
  title: string;
  description: string;
  denom: string;
}

const baseSetMsgGasCostProposal: object = { title: "", description: "" };

export const SetMsgGasCostProposal = {
  encode(
    message: SetMsgGasCostProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.msg !== undefined) {
      MsgGasCost.encode(message.msg, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetMsgGasCostProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSetMsgGasCostProposal } as SetMsgGasCostProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.msg = MsgGasCost.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetMsgGasCostProposal {
    const message = { ...baseSetMsgGasCostProposal } as SetMsgGasCostProposal;
    message.title =
      object.title !== undefined && object.title !== null
        ? String(object.title)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.msg =
      object.msg !== undefined && object.msg !== null
        ? MsgGasCost.fromJSON(object.msg)
        : undefined;
    return message;
  },

  toJSON(message: SetMsgGasCostProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.msg !== undefined &&
      (obj.msg = message.msg ? MsgGasCost.toJSON(message.msg) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SetMsgGasCostProposal>
  ): SetMsgGasCostProposal {
    const message = { ...baseSetMsgGasCostProposal } as SetMsgGasCostProposal;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.msg =
      object.msg !== undefined && object.msg !== null
        ? MsgGasCost.fromPartial(object.msg)
        : undefined;
    return message;
  },
};

const baseSetMinGasPriceProposal: object = { title: "", description: "" };

export const SetMinGasPriceProposal = {
  encode(
    message: SetMinGasPriceProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.msg !== undefined) {
      MinGasPrice.encode(message.msg, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetMinGasPriceProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSetMinGasPriceProposal } as SetMinGasPriceProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.msg = MinGasPrice.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetMinGasPriceProposal {
    const message = { ...baseSetMinGasPriceProposal } as SetMinGasPriceProposal;
    message.title =
      object.title !== undefined && object.title !== null
        ? String(object.title)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.msg =
      object.msg !== undefined && object.msg !== null
        ? MinGasPrice.fromJSON(object.msg)
        : undefined;
    return message;
  },

  toJSON(message: SetMinGasPriceProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.msg !== undefined &&
      (obj.msg = message.msg ? MinGasPrice.toJSON(message.msg) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SetMinGasPriceProposal>
  ): SetMinGasPriceProposal {
    const message = { ...baseSetMinGasPriceProposal } as SetMinGasPriceProposal;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.msg =
      object.msg !== undefined && object.msg !== null
        ? MinGasPrice.fromPartial(object.msg)
        : undefined;
    return message;
  },
};

const baseRemoveMsgGasCostProposal: object = {
  title: "",
  description: "",
  msgType: "",
};

export const RemoveMsgGasCostProposal = {
  encode(
    message: RemoveMsgGasCostProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.msgType !== "") {
      writer.uint32(26).string(message.msgType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveMsgGasCostProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRemoveMsgGasCostProposal,
    } as RemoveMsgGasCostProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.msgType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveMsgGasCostProposal {
    const message = {
      ...baseRemoveMsgGasCostProposal,
    } as RemoveMsgGasCostProposal;
    message.title =
      object.title !== undefined && object.title !== null
        ? String(object.title)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.msgType =
      object.msgType !== undefined && object.msgType !== null
        ? String(object.msgType)
        : "";
    return message;
  },

  toJSON(message: RemoveMsgGasCostProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.msgType !== undefined && (obj.msgType = message.msgType);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RemoveMsgGasCostProposal>
  ): RemoveMsgGasCostProposal {
    const message = {
      ...baseRemoveMsgGasCostProposal,
    } as RemoveMsgGasCostProposal;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.msgType = object.msgType ?? "";
    return message;
  },
};

const baseRemoveMinGasPriceProposal: object = {
  title: "",
  description: "",
  denom: "",
};

export const RemoveMinGasPriceProposal = {
  encode(
    message: RemoveMinGasPriceProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveMinGasPriceProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRemoveMinGasPriceProposal,
    } as RemoveMinGasPriceProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveMinGasPriceProposal {
    const message = {
      ...baseRemoveMinGasPriceProposal,
    } as RemoveMinGasPriceProposal;
    message.title =
      object.title !== undefined && object.title !== null
        ? String(object.title)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: RemoveMinGasPriceProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RemoveMinGasPriceProposal>
  ): RemoveMinGasPriceProposal {
    const message = {
      ...baseRemoveMinGasPriceProposal,
    } as RemoveMinGasPriceProposal;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.denom = object.denom ?? "";
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
