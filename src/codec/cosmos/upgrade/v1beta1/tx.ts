/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Plan } from "./upgrade";

export const protobufPackage = "cosmos.upgrade.v1beta1";

/** Since: cosmos-sdk 0.46 */

/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgrade {
  /** authority is the address of the governance account. */
  authority: string;
  /** plan is the upgrade plan. */
  plan?: Plan;
}

/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgradeResponse {}

/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgrade {
  /** authority is the address of the governance account. */
  authority: string;
}

/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgradeResponse {}

const baseMsgSoftwareUpgrade: object = { authority: "" };

export const MsgSoftwareUpgrade = {
  encode(
    message: MsgSoftwareUpgrade,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSoftwareUpgrade {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSoftwareUpgrade } as MsgSoftwareUpgrade;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.plan = Plan.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSoftwareUpgrade {
    const message = { ...baseMsgSoftwareUpgrade } as MsgSoftwareUpgrade;
    message.authority =
      object.authority !== undefined && object.authority !== null
        ? String(object.authority)
        : "";
    message.plan =
      object.plan !== undefined && object.plan !== null
        ? Plan.fromJSON(object.plan)
        : undefined;
    return message;
  },

  toJSON(message: MsgSoftwareUpgrade): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.plan !== undefined &&
      (obj.plan = message.plan ? Plan.toJSON(message.plan) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSoftwareUpgrade>): MsgSoftwareUpgrade {
    const message = { ...baseMsgSoftwareUpgrade } as MsgSoftwareUpgrade;
    message.authority = object.authority ?? "";
    message.plan =
      object.plan !== undefined && object.plan !== null
        ? Plan.fromPartial(object.plan)
        : undefined;
    return message;
  },
};

const baseMsgSoftwareUpgradeResponse: object = {};

export const MsgSoftwareUpgradeResponse = {
  encode(
    _: MsgSoftwareUpgradeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSoftwareUpgradeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSoftwareUpgradeResponse,
    } as MsgSoftwareUpgradeResponse;
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

  fromJSON(_: any): MsgSoftwareUpgradeResponse {
    const message = {
      ...baseMsgSoftwareUpgradeResponse,
    } as MsgSoftwareUpgradeResponse;
    return message;
  },

  toJSON(_: MsgSoftwareUpgradeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSoftwareUpgradeResponse>
  ): MsgSoftwareUpgradeResponse {
    const message = {
      ...baseMsgSoftwareUpgradeResponse,
    } as MsgSoftwareUpgradeResponse;
    return message;
  },
};

const baseMsgCancelUpgrade: object = { authority: "" };

export const MsgCancelUpgrade = {
  encode(
    message: MsgCancelUpgrade,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelUpgrade {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCancelUpgrade } as MsgCancelUpgrade;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelUpgrade {
    const message = { ...baseMsgCancelUpgrade } as MsgCancelUpgrade;
    message.authority =
      object.authority !== undefined && object.authority !== null
        ? String(object.authority)
        : "";
    return message;
  },

  toJSON(message: MsgCancelUpgrade): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCancelUpgrade>): MsgCancelUpgrade {
    const message = { ...baseMsgCancelUpgrade } as MsgCancelUpgrade;
    message.authority = object.authority ?? "";
    return message;
  },
};

const baseMsgCancelUpgradeResponse: object = {};

export const MsgCancelUpgradeResponse = {
  encode(
    _: MsgCancelUpgradeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCancelUpgradeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCancelUpgradeResponse,
    } as MsgCancelUpgradeResponse;
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

  fromJSON(_: any): MsgCancelUpgradeResponse {
    const message = {
      ...baseMsgCancelUpgradeResponse,
    } as MsgCancelUpgradeResponse;
    return message;
  },

  toJSON(_: MsgCancelUpgradeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCancelUpgradeResponse>
  ): MsgCancelUpgradeResponse {
    const message = {
      ...baseMsgCancelUpgradeResponse,
    } as MsgCancelUpgradeResponse;
    return message;
  },
};

/** Msg defines the upgrade Msg service. */
export interface Msg {
  /**
   * SoftwareUpgrade is a governance operation for initiating a software upgrade.
   *
   * Since: cosmos-sdk 0.46
   */
  SoftwareUpgrade(
    request: MsgSoftwareUpgrade
  ): Promise<MsgSoftwareUpgradeResponse>;
  /**
   * CancelUpgrade is a governance operation for cancelling a previously
   * approvid software upgrade.
   *
   * Since: cosmos-sdk 0.46
   */
  CancelUpgrade(request: MsgCancelUpgrade): Promise<MsgCancelUpgradeResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SoftwareUpgrade = this.SoftwareUpgrade.bind(this);
    this.CancelUpgrade = this.CancelUpgrade.bind(this);
  }
  SoftwareUpgrade(
    request: MsgSoftwareUpgrade
  ): Promise<MsgSoftwareUpgradeResponse> {
    const data = MsgSoftwareUpgrade.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.upgrade.v1beta1.Msg",
      "SoftwareUpgrade",
      data
    );
    return promise.then((data) =>
      MsgSoftwareUpgradeResponse.decode(new _m0.Reader(data))
    );
  }

  CancelUpgrade(request: MsgCancelUpgrade): Promise<MsgCancelUpgradeResponse> {
    const data = MsgCancelUpgrade.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.upgrade.v1beta1.Msg",
      "CancelUpgrade",
      data
    );
    return promise.then((data) =>
      MsgCancelUpgradeResponse.decode(new _m0.Reader(data))
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
