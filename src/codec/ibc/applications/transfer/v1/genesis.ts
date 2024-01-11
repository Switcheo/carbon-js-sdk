/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params, DenomTrace } from "./transfer";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "ibc.applications.transfer.v1";

/** GenesisState defines the ibc-transfer genesis state */
export interface GenesisState {
  portId: string;
  denomTraces: DenomTrace[];
  params?: Params;
  /**
   * total_escrowed contains the total amount of tokens escrowed
   * by the transfer module
   */
  totalEscrowed: Coin[];
}

const baseGenesisState: object = { portId: "" };

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    for (const v of message.denomTraces) {
      DenomTrace.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.totalEscrowed) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.denomTraces = [];
    message.totalEscrowed = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.denomTraces.push(DenomTrace.decode(reader, reader.uint32()));
          break;
        case 3:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 4:
          message.totalEscrowed.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.portId =
      object.portId !== undefined && object.portId !== null
        ? String(object.portId)
        : "";
    message.denomTraces = (object.denomTraces ?? []).map((e: any) =>
      DenomTrace.fromJSON(e)
    );
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromJSON(object.params)
        : undefined;
    message.totalEscrowed = (object.totalEscrowed ?? []).map((e: any) =>
      Coin.fromJSON(e)
    );
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    if (message.denomTraces) {
      obj.denomTraces = message.denomTraces.map((e) =>
        e ? DenomTrace.toJSON(e) : undefined
      );
    } else {
      obj.denomTraces = [];
    }
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.totalEscrowed) {
      obj.totalEscrowed = message.totalEscrowed.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.totalEscrowed = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.portId = object.portId ?? "";
    message.denomTraces = (object.denomTraces ?? []).map((e) =>
      DenomTrace.fromPartial(e)
    );
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    message.totalEscrowed = (object.totalEscrowed ?? []).map((e) =>
      Coin.fromPartial(e)
    );
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
