/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { MsgCreateOracle } from "../oracle/tx";

export const protobufPackage = "Switcheo.carbon.oracle";

export interface CreateOracleProposal {
  title: string;
  description: string;
  oracle?: MsgCreateOracle;
}

const baseCreateOracleProposal: object = { title: "", description: "" };

export const CreateOracleProposal = {
  encode(
    message: CreateOracleProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.oracle !== undefined) {
      MsgCreateOracle.encode(message.oracle, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateOracleProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateOracleProposal } as CreateOracleProposal;
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
          message.oracle = MsgCreateOracle.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateOracleProposal {
    const message = { ...baseCreateOracleProposal } as CreateOracleProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.oracle !== undefined && object.oracle !== null) {
      message.oracle = MsgCreateOracle.fromJSON(object.oracle);
    } else {
      message.oracle = undefined;
    }
    return message;
  },

  toJSON(message: CreateOracleProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.oracle !== undefined &&
      (obj.oracle = message.oracle
        ? MsgCreateOracle.toJSON(message.oracle)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateOracleProposal>): CreateOracleProposal {
    const message = { ...baseCreateOracleProposal } as CreateOracleProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.oracle !== undefined && object.oracle !== null) {
      message.oracle = MsgCreateOracle.fromPartial(object.oracle);
    } else {
      message.oracle = undefined;
    }
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
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
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
