/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ParamsToUpdate } from "./params";

export const protobufPackage = "Switcheo.carbon.evmcontract";

export interface MsgDeactivateContract {
  creator: string;
  moduleName: string;
  contractAddress: string;
}

export interface MsgDeactivateContractResponse {}

export interface MsgActivateContract {
  creator: string;
  moduleName: string;
  contractAddress: string;
}

export interface MsgActivateContractResponse {}

export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /** params defines the optional parameters to update. */
  params?: ParamsToUpdate;
}

export interface MsgUpdateParamsResponse {}

const baseMsgDeactivateContract: object = {
  creator: "",
  moduleName: "",
  contractAddress: "",
};

export const MsgDeactivateContract = {
  encode(
    message: MsgDeactivateContract,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.moduleName !== "") {
      writer.uint32(18).string(message.moduleName);
    }
    if (message.contractAddress !== "") {
      writer.uint32(26).string(message.contractAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeactivateContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeactivateContract } as MsgDeactivateContract;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.moduleName = reader.string();
          break;
        case 3:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeactivateContract {
    const message = { ...baseMsgDeactivateContract } as MsgDeactivateContract;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.moduleName =
      object.moduleName !== undefined && object.moduleName !== null
        ? String(object.moduleName)
        : "";
    message.contractAddress =
      object.contractAddress !== undefined && object.contractAddress !== null
        ? String(object.contractAddress)
        : "";
    return message;
  },

  toJSON(message: MsgDeactivateContract): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.moduleName !== undefined && (obj.moduleName = message.moduleName);
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeactivateContract>
  ): MsgDeactivateContract {
    const message = { ...baseMsgDeactivateContract } as MsgDeactivateContract;
    message.creator = object.creator ?? "";
    message.moduleName = object.moduleName ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
};

const baseMsgDeactivateContractResponse: object = {};

export const MsgDeactivateContractResponse = {
  encode(
    _: MsgDeactivateContractResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeactivateContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeactivateContractResponse,
    } as MsgDeactivateContractResponse;
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

  fromJSON(_: any): MsgDeactivateContractResponse {
    const message = {
      ...baseMsgDeactivateContractResponse,
    } as MsgDeactivateContractResponse;
    return message;
  },

  toJSON(_: MsgDeactivateContractResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeactivateContractResponse>
  ): MsgDeactivateContractResponse {
    const message = {
      ...baseMsgDeactivateContractResponse,
    } as MsgDeactivateContractResponse;
    return message;
  },
};

const baseMsgActivateContract: object = {
  creator: "",
  moduleName: "",
  contractAddress: "",
};

export const MsgActivateContract = {
  encode(
    message: MsgActivateContract,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.moduleName !== "") {
      writer.uint32(18).string(message.moduleName);
    }
    if (message.contractAddress !== "") {
      writer.uint32(26).string(message.contractAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgActivateContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgActivateContract } as MsgActivateContract;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.moduleName = reader.string();
          break;
        case 3:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgActivateContract {
    const message = { ...baseMsgActivateContract } as MsgActivateContract;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.moduleName =
      object.moduleName !== undefined && object.moduleName !== null
        ? String(object.moduleName)
        : "";
    message.contractAddress =
      object.contractAddress !== undefined && object.contractAddress !== null
        ? String(object.contractAddress)
        : "";
    return message;
  },

  toJSON(message: MsgActivateContract): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.moduleName !== undefined && (obj.moduleName = message.moduleName);
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgActivateContract>): MsgActivateContract {
    const message = { ...baseMsgActivateContract } as MsgActivateContract;
    message.creator = object.creator ?? "";
    message.moduleName = object.moduleName ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
};

const baseMsgActivateContractResponse: object = {};

export const MsgActivateContractResponse = {
  encode(
    _: MsgActivateContractResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgActivateContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgActivateContractResponse,
    } as MsgActivateContractResponse;
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

  fromJSON(_: any): MsgActivateContractResponse {
    const message = {
      ...baseMsgActivateContractResponse,
    } as MsgActivateContractResponse;
    return message;
  },

  toJSON(_: MsgActivateContractResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgActivateContractResponse>
  ): MsgActivateContractResponse {
    const message = {
      ...baseMsgActivateContractResponse,
    } as MsgActivateContractResponse;
    return message;
  },
};

const baseMsgUpdateParams: object = { authority: "" };

export const MsgUpdateParams = {
  encode(
    message: MsgUpdateParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      ParamsToUpdate.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = ParamsToUpdate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    message.authority =
      object.authority !== undefined && object.authority !== null
        ? String(object.authority)
        : "";
    message.params =
      object.params !== undefined && object.params !== null
        ? ParamsToUpdate.fromJSON(object.params)
        : undefined;
    return message;
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined &&
      (obj.params = message.params
        ? ParamsToUpdate.toJSON(message.params)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
    message.authority = object.authority ?? "";
    message.params =
      object.params !== undefined && object.params !== null
        ? ParamsToUpdate.fromPartial(object.params)
        : undefined;
    return message;
  },
};

const baseMsgUpdateParamsResponse: object = {};

export const MsgUpdateParamsResponse = {
  encode(
    _: MsgUpdateParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateParamsResponse,
    } as MsgUpdateParamsResponse;
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

  fromJSON(_: any): MsgUpdateParamsResponse {
    const message = {
      ...baseMsgUpdateParamsResponse,
    } as MsgUpdateParamsResponse;
    return message;
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateParamsResponse>
  ): MsgUpdateParamsResponse {
    const message = {
      ...baseMsgUpdateParamsResponse,
    } as MsgUpdateParamsResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  DeactivateContract(
    request: MsgDeactivateContract
  ): Promise<MsgDeactivateContractResponse>;
  ActivateContract(
    request: MsgActivateContract
  ): Promise<MsgActivateContractResponse>;
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.DeactivateContract = this.DeactivateContract.bind(this);
    this.ActivateContract = this.ActivateContract.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  DeactivateContract(
    request: MsgDeactivateContract
  ): Promise<MsgDeactivateContractResponse> {
    const data = MsgDeactivateContract.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.evmcontract.Msg",
      "DeactivateContract",
      data
    );
    return promise.then((data) =>
      MsgDeactivateContractResponse.decode(new _m0.Reader(data))
    );
  }

  ActivateContract(
    request: MsgActivateContract
  ): Promise<MsgActivateContractResponse> {
    const data = MsgActivateContract.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.evmcontract.Msg",
      "ActivateContract",
      data
    );
    return promise.then((data) =>
      MsgActivateContractResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.evmcontract.Msg",
      "UpdateParams",
      data
    );
    return promise.then((data) =>
      MsgUpdateParamsResponse.decode(new _m0.Reader(data))
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
