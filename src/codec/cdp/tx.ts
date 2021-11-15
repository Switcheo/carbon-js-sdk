/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.cdp";

export interface MsgAddCollateral {
  creator: string;
  vaultTypeId: Long;
  amount: string;
}

export interface MsgAddCollateralResponse {}

export interface MsgRemoveCollateral {
  creator: string;
  vaultTypeId: Long;
  amount: string;
}

export interface MsgRemoveCollateralResponse {}

export interface MsgAddDebt {
  creator: string;
  vaultTypeId: Long;
  amount: string;
}

export interface MsgAddDebtResponse {}

export interface MsgRemoveDebt {
  creator: string;
  vaultTypeId: Long;
  amount: string;
}

export interface MsgRemoveDebtResponse {}

export interface MsgCreateVaultType {
  creator: string;
  collateralDenom: string;
  debtDenom: string;
  collateralizationRatio: string;
}

export interface MsgCreateVaultTypeResponse {}

const baseMsgAddCollateral: object = {
  creator: "",
  vaultTypeId: Long.UZERO,
  amount: "",
};

export const MsgAddCollateral = {
  encode(
    message: MsgAddCollateral,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.vaultTypeId.isZero()) {
      writer.uint32(16).uint64(message.vaultTypeId);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddCollateral {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddCollateral } as MsgAddCollateral;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.vaultTypeId = reader.uint64() as Long;
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddCollateral {
    const message = { ...baseMsgAddCollateral } as MsgAddCollateral;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.vaultTypeId !== undefined && object.vaultTypeId !== null) {
      message.vaultTypeId = Long.fromString(object.vaultTypeId);
    } else {
      message.vaultTypeId = Long.UZERO;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    return message;
  },

  toJSON(message: MsgAddCollateral): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.vaultTypeId !== undefined &&
      (obj.vaultTypeId = (message.vaultTypeId || Long.UZERO).toString());
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddCollateral>): MsgAddCollateral {
    const message = { ...baseMsgAddCollateral } as MsgAddCollateral;
    message.creator = object.creator ?? "";
    if (object.vaultTypeId !== undefined && object.vaultTypeId !== null) {
      message.vaultTypeId = object.vaultTypeId as Long;
    } else {
      message.vaultTypeId = Long.UZERO;
    }
    message.amount = object.amount ?? "";
    return message;
  },
};

const baseMsgAddCollateralResponse: object = {};

export const MsgAddCollateralResponse = {
  encode(
    _: MsgAddCollateralResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddCollateralResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAddCollateralResponse,
    } as MsgAddCollateralResponse;
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

  fromJSON(_: any): MsgAddCollateralResponse {
    const message = {
      ...baseMsgAddCollateralResponse,
    } as MsgAddCollateralResponse;
    return message;
  },

  toJSON(_: MsgAddCollateralResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAddCollateralResponse>
  ): MsgAddCollateralResponse {
    const message = {
      ...baseMsgAddCollateralResponse,
    } as MsgAddCollateralResponse;
    return message;
  },
};

const baseMsgRemoveCollateral: object = {
  creator: "",
  vaultTypeId: Long.UZERO,
  amount: "",
};

export const MsgRemoveCollateral = {
  encode(
    message: MsgRemoveCollateral,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.vaultTypeId.isZero()) {
      writer.uint32(16).uint64(message.vaultTypeId);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveCollateral {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRemoveCollateral } as MsgRemoveCollateral;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.vaultTypeId = reader.uint64() as Long;
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveCollateral {
    const message = { ...baseMsgRemoveCollateral } as MsgRemoveCollateral;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.vaultTypeId !== undefined && object.vaultTypeId !== null) {
      message.vaultTypeId = Long.fromString(object.vaultTypeId);
    } else {
      message.vaultTypeId = Long.UZERO;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    return message;
  },

  toJSON(message: MsgRemoveCollateral): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.vaultTypeId !== undefined &&
      (obj.vaultTypeId = (message.vaultTypeId || Long.UZERO).toString());
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRemoveCollateral>): MsgRemoveCollateral {
    const message = { ...baseMsgRemoveCollateral } as MsgRemoveCollateral;
    message.creator = object.creator ?? "";
    if (object.vaultTypeId !== undefined && object.vaultTypeId !== null) {
      message.vaultTypeId = object.vaultTypeId as Long;
    } else {
      message.vaultTypeId = Long.UZERO;
    }
    message.amount = object.amount ?? "";
    return message;
  },
};

const baseMsgRemoveCollateralResponse: object = {};

export const MsgRemoveCollateralResponse = {
  encode(
    _: MsgRemoveCollateralResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemoveCollateralResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRemoveCollateralResponse,
    } as MsgRemoveCollateralResponse;
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

  fromJSON(_: any): MsgRemoveCollateralResponse {
    const message = {
      ...baseMsgRemoveCollateralResponse,
    } as MsgRemoveCollateralResponse;
    return message;
  },

  toJSON(_: MsgRemoveCollateralResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRemoveCollateralResponse>
  ): MsgRemoveCollateralResponse {
    const message = {
      ...baseMsgRemoveCollateralResponse,
    } as MsgRemoveCollateralResponse;
    return message;
  },
};

const baseMsgAddDebt: object = {
  creator: "",
  vaultTypeId: Long.UZERO,
  amount: "",
};

export const MsgAddDebt = {
  encode(
    message: MsgAddDebt,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.vaultTypeId.isZero()) {
      writer.uint32(16).uint64(message.vaultTypeId);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddDebt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddDebt } as MsgAddDebt;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.vaultTypeId = reader.uint64() as Long;
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddDebt {
    const message = { ...baseMsgAddDebt } as MsgAddDebt;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.vaultTypeId !== undefined && object.vaultTypeId !== null) {
      message.vaultTypeId = Long.fromString(object.vaultTypeId);
    } else {
      message.vaultTypeId = Long.UZERO;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    return message;
  },

  toJSON(message: MsgAddDebt): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.vaultTypeId !== undefined &&
      (obj.vaultTypeId = (message.vaultTypeId || Long.UZERO).toString());
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddDebt>): MsgAddDebt {
    const message = { ...baseMsgAddDebt } as MsgAddDebt;
    message.creator = object.creator ?? "";
    if (object.vaultTypeId !== undefined && object.vaultTypeId !== null) {
      message.vaultTypeId = object.vaultTypeId as Long;
    } else {
      message.vaultTypeId = Long.UZERO;
    }
    message.amount = object.amount ?? "";
    return message;
  },
};

const baseMsgAddDebtResponse: object = {};

export const MsgAddDebtResponse = {
  encode(
    _: MsgAddDebtResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddDebtResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddDebtResponse } as MsgAddDebtResponse;
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

  fromJSON(_: any): MsgAddDebtResponse {
    const message = { ...baseMsgAddDebtResponse } as MsgAddDebtResponse;
    return message;
  },

  toJSON(_: MsgAddDebtResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgAddDebtResponse>): MsgAddDebtResponse {
    const message = { ...baseMsgAddDebtResponse } as MsgAddDebtResponse;
    return message;
  },
};

const baseMsgRemoveDebt: object = {
  creator: "",
  vaultTypeId: Long.UZERO,
  amount: "",
};

export const MsgRemoveDebt = {
  encode(
    message: MsgRemoveDebt,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.vaultTypeId.isZero()) {
      writer.uint32(16).uint64(message.vaultTypeId);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveDebt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRemoveDebt } as MsgRemoveDebt;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.vaultTypeId = reader.uint64() as Long;
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveDebt {
    const message = { ...baseMsgRemoveDebt } as MsgRemoveDebt;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.vaultTypeId !== undefined && object.vaultTypeId !== null) {
      message.vaultTypeId = Long.fromString(object.vaultTypeId);
    } else {
      message.vaultTypeId = Long.UZERO;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    return message;
  },

  toJSON(message: MsgRemoveDebt): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.vaultTypeId !== undefined &&
      (obj.vaultTypeId = (message.vaultTypeId || Long.UZERO).toString());
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRemoveDebt>): MsgRemoveDebt {
    const message = { ...baseMsgRemoveDebt } as MsgRemoveDebt;
    message.creator = object.creator ?? "";
    if (object.vaultTypeId !== undefined && object.vaultTypeId !== null) {
      message.vaultTypeId = object.vaultTypeId as Long;
    } else {
      message.vaultTypeId = Long.UZERO;
    }
    message.amount = object.amount ?? "";
    return message;
  },
};

const baseMsgRemoveDebtResponse: object = {};

export const MsgRemoveDebtResponse = {
  encode(
    _: MsgRemoveDebtResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemoveDebtResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRemoveDebtResponse } as MsgRemoveDebtResponse;
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

  fromJSON(_: any): MsgRemoveDebtResponse {
    const message = { ...baseMsgRemoveDebtResponse } as MsgRemoveDebtResponse;
    return message;
  },

  toJSON(_: MsgRemoveDebtResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRemoveDebtResponse>): MsgRemoveDebtResponse {
    const message = { ...baseMsgRemoveDebtResponse } as MsgRemoveDebtResponse;
    return message;
  },
};

const baseMsgCreateVaultType: object = {
  creator: "",
  collateralDenom: "",
  debtDenom: "",
  collateralizationRatio: "",
};

export const MsgCreateVaultType = {
  encode(
    message: MsgCreateVaultType,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.collateralDenom !== "") {
      writer.uint32(18).string(message.collateralDenom);
    }
    if (message.debtDenom !== "") {
      writer.uint32(26).string(message.debtDenom);
    }
    if (message.collateralizationRatio !== "") {
      writer.uint32(34).string(message.collateralizationRatio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVaultType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateVaultType } as MsgCreateVaultType;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.collateralDenom = reader.string();
          break;
        case 3:
          message.debtDenom = reader.string();
          break;
        case 4:
          message.collateralizationRatio = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateVaultType {
    const message = { ...baseMsgCreateVaultType } as MsgCreateVaultType;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.collateralDenom !== undefined &&
      object.collateralDenom !== null
    ) {
      message.collateralDenom = String(object.collateralDenom);
    } else {
      message.collateralDenom = "";
    }
    if (object.debtDenom !== undefined && object.debtDenom !== null) {
      message.debtDenom = String(object.debtDenom);
    } else {
      message.debtDenom = "";
    }
    if (
      object.collateralizationRatio !== undefined &&
      object.collateralizationRatio !== null
    ) {
      message.collateralizationRatio = String(object.collateralizationRatio);
    } else {
      message.collateralizationRatio = "";
    }
    return message;
  },

  toJSON(message: MsgCreateVaultType): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.collateralDenom !== undefined &&
      (obj.collateralDenom = message.collateralDenom);
    message.debtDenom !== undefined && (obj.debtDenom = message.debtDenom);
    message.collateralizationRatio !== undefined &&
      (obj.collateralizationRatio = message.collateralizationRatio);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateVaultType>): MsgCreateVaultType {
    const message = { ...baseMsgCreateVaultType } as MsgCreateVaultType;
    message.creator = object.creator ?? "";
    message.collateralDenom = object.collateralDenom ?? "";
    message.debtDenom = object.debtDenom ?? "";
    message.collateralizationRatio = object.collateralizationRatio ?? "";
    return message;
  },
};

const baseMsgCreateVaultTypeResponse: object = {};

export const MsgCreateVaultTypeResponse = {
  encode(
    _: MsgCreateVaultTypeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateVaultTypeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateVaultTypeResponse,
    } as MsgCreateVaultTypeResponse;
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

  fromJSON(_: any): MsgCreateVaultTypeResponse {
    const message = {
      ...baseMsgCreateVaultTypeResponse,
    } as MsgCreateVaultTypeResponse;
    return message;
  },

  toJSON(_: MsgCreateVaultTypeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateVaultTypeResponse>
  ): MsgCreateVaultTypeResponse {
    const message = {
      ...baseMsgCreateVaultTypeResponse,
    } as MsgCreateVaultTypeResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  HandleMsgAddCollateral(
    request: MsgAddCollateral
  ): Promise<MsgAddCollateralResponse>;
  HandleMsgRemoveCollateral(
    request: MsgRemoveCollateral
  ): Promise<MsgRemoveCollateralResponse>;
  HandleMsgAddDebt(request: MsgAddDebt): Promise<MsgAddDebtResponse>;
  HandleMsgRemoveDebt(request: MsgRemoveDebt): Promise<MsgRemoveDebtResponse>;
  HandleMsgCreateVaultType(
    request: MsgCreateVaultType
  ): Promise<MsgCreateVaultTypeResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.HandleMsgAddCollateral = this.HandleMsgAddCollateral.bind(this);
    this.HandleMsgRemoveCollateral = this.HandleMsgRemoveCollateral.bind(this);
    this.HandleMsgAddDebt = this.HandleMsgAddDebt.bind(this);
    this.HandleMsgRemoveDebt = this.HandleMsgRemoveDebt.bind(this);
    this.HandleMsgCreateVaultType = this.HandleMsgCreateVaultType.bind(this);
  }
  HandleMsgAddCollateral(
    request: MsgAddCollateral
  ): Promise<MsgAddCollateralResponse> {
    const data = MsgAddCollateral.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "HandleMsgAddCollateral",
      data
    );
    return promise.then((data) =>
      MsgAddCollateralResponse.decode(new _m0.Reader(data))
    );
  }

  HandleMsgRemoveCollateral(
    request: MsgRemoveCollateral
  ): Promise<MsgRemoveCollateralResponse> {
    const data = MsgRemoveCollateral.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "HandleMsgRemoveCollateral",
      data
    );
    return promise.then((data) =>
      MsgRemoveCollateralResponse.decode(new _m0.Reader(data))
    );
  }

  HandleMsgAddDebt(request: MsgAddDebt): Promise<MsgAddDebtResponse> {
    const data = MsgAddDebt.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "HandleMsgAddDebt",
      data
    );
    return promise.then((data) =>
      MsgAddDebtResponse.decode(new _m0.Reader(data))
    );
  }

  HandleMsgRemoveDebt(request: MsgRemoveDebt): Promise<MsgRemoveDebtResponse> {
    const data = MsgRemoveDebt.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "HandleMsgRemoveDebt",
      data
    );
    return promise.then((data) =>
      MsgRemoveDebtResponse.decode(new _m0.Reader(data))
    );
  }

  HandleMsgCreateVaultType(
    request: MsgCreateVaultType
  ): Promise<MsgCreateVaultTypeResponse> {
    const data = MsgCreateVaultType.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Msg",
      "HandleMsgCreateVaultType",
      data
    );
    return promise.then((data) =>
      MsgCreateVaultTypeResponse.decode(new _m0.Reader(data))
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
