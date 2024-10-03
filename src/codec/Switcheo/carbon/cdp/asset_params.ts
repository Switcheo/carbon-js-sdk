/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { StringValue, BoolValue } from "../../../google/protobuf/wrappers";

export const protobufPackage = "Switcheo.carbon.cdp";

export interface AssetParamsAPI {
  assetParams?: AssetParams;
  tokenName: string;
}

export interface AssetParams {
  denom: string;
  rateStrategyName: string;
  allowRepayStablecoinInterest: boolean;
  loanToValue: string;
  liquidationThreshold: string;
  liquidationDiscount: string;
  supplyCap: string;
  borrowCap: string;
}

export interface AssetUtilization {
  denom: string;
  totalBorrowed: string;
  totalAmount: string;
  utilizationRate: string;
}

export interface UpdateAssetParams {
  denom: string;
  rateStrategyName?: string;
  allowRepayStablecoinInterest?: boolean;
  loanToValue: string;
  liquidationThreshold: string;
  liquidationDiscount: string;
  supplyCap: string;
  borrowCap: string;
}

const baseAssetParamsAPI: object = { tokenName: "" };

export const AssetParamsAPI = {
  encode(
    message: AssetParamsAPI,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.assetParams !== undefined) {
      AssetParams.encode(
        message.assetParams,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.tokenName !== "") {
      writer.uint32(18).string(message.tokenName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetParamsAPI {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAssetParamsAPI } as AssetParamsAPI;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetParams = AssetParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.tokenName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetParamsAPI {
    const message = { ...baseAssetParamsAPI } as AssetParamsAPI;
    message.assetParams =
      object.assetParams !== undefined && object.assetParams !== null
        ? AssetParams.fromJSON(object.assetParams)
        : undefined;
    message.tokenName =
      object.tokenName !== undefined && object.tokenName !== null
        ? String(object.tokenName)
        : "";
    return message;
  },

  toJSON(message: AssetParamsAPI): unknown {
    const obj: any = {};
    message.assetParams !== undefined &&
      (obj.assetParams = message.assetParams
        ? AssetParams.toJSON(message.assetParams)
        : undefined);
    message.tokenName !== undefined && (obj.tokenName = message.tokenName);
    return obj;
  },

  fromPartial(object: DeepPartial<AssetParamsAPI>): AssetParamsAPI {
    const message = { ...baseAssetParamsAPI } as AssetParamsAPI;
    message.assetParams =
      object.assetParams !== undefined && object.assetParams !== null
        ? AssetParams.fromPartial(object.assetParams)
        : undefined;
    message.tokenName = object.tokenName ?? "";
    return message;
  },
};

const baseAssetParams: object = {
  denom: "",
  rateStrategyName: "",
  allowRepayStablecoinInterest: false,
  loanToValue: "",
  liquidationThreshold: "",
  liquidationDiscount: "",
  supplyCap: "",
  borrowCap: "",
};

export const AssetParams = {
  encode(
    message: AssetParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.rateStrategyName !== "") {
      writer.uint32(26).string(message.rateStrategyName);
    }
    if (message.allowRepayStablecoinInterest === true) {
      writer.uint32(32).bool(message.allowRepayStablecoinInterest);
    }
    if (message.loanToValue !== "") {
      writer.uint32(42).string(message.loanToValue);
    }
    if (message.liquidationThreshold !== "") {
      writer.uint32(50).string(message.liquidationThreshold);
    }
    if (message.liquidationDiscount !== "") {
      writer.uint32(58).string(message.liquidationDiscount);
    }
    if (message.supplyCap !== "") {
      writer.uint32(66).string(message.supplyCap);
    }
    if (message.borrowCap !== "") {
      writer.uint32(74).string(message.borrowCap);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAssetParams } as AssetParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 3:
          message.rateStrategyName = reader.string();
          break;
        case 4:
          message.allowRepayStablecoinInterest = reader.bool();
          break;
        case 5:
          message.loanToValue = reader.string();
          break;
        case 6:
          message.liquidationThreshold = reader.string();
          break;
        case 7:
          message.liquidationDiscount = reader.string();
          break;
        case 8:
          message.supplyCap = reader.string();
          break;
        case 9:
          message.borrowCap = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetParams {
    const message = { ...baseAssetParams } as AssetParams;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.rateStrategyName =
      object.rateStrategyName !== undefined && object.rateStrategyName !== null
        ? String(object.rateStrategyName)
        : "";
    message.allowRepayStablecoinInterest =
      object.allowRepayStablecoinInterest !== undefined &&
      object.allowRepayStablecoinInterest !== null
        ? Boolean(object.allowRepayStablecoinInterest)
        : false;
    message.loanToValue =
      object.loanToValue !== undefined && object.loanToValue !== null
        ? String(object.loanToValue)
        : "";
    message.liquidationThreshold =
      object.liquidationThreshold !== undefined &&
      object.liquidationThreshold !== null
        ? String(object.liquidationThreshold)
        : "";
    message.liquidationDiscount =
      object.liquidationDiscount !== undefined &&
      object.liquidationDiscount !== null
        ? String(object.liquidationDiscount)
        : "";
    message.supplyCap =
      object.supplyCap !== undefined && object.supplyCap !== null
        ? String(object.supplyCap)
        : "";
    message.borrowCap =
      object.borrowCap !== undefined && object.borrowCap !== null
        ? String(object.borrowCap)
        : "";
    return message;
  },

  toJSON(message: AssetParams): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.rateStrategyName !== undefined &&
      (obj.rateStrategyName = message.rateStrategyName);
    message.allowRepayStablecoinInterest !== undefined &&
      (obj.allowRepayStablecoinInterest = message.allowRepayStablecoinInterest);
    message.loanToValue !== undefined &&
      (obj.loanToValue = message.loanToValue);
    message.liquidationThreshold !== undefined &&
      (obj.liquidationThreshold = message.liquidationThreshold);
    message.liquidationDiscount !== undefined &&
      (obj.liquidationDiscount = message.liquidationDiscount);
    message.supplyCap !== undefined && (obj.supplyCap = message.supplyCap);
    message.borrowCap !== undefined && (obj.borrowCap = message.borrowCap);
    return obj;
  },

  fromPartial(object: DeepPartial<AssetParams>): AssetParams {
    const message = { ...baseAssetParams } as AssetParams;
    message.denom = object.denom ?? "";
    message.rateStrategyName = object.rateStrategyName ?? "";
    message.allowRepayStablecoinInterest =
      object.allowRepayStablecoinInterest ?? false;
    message.loanToValue = object.loanToValue ?? "";
    message.liquidationThreshold = object.liquidationThreshold ?? "";
    message.liquidationDiscount = object.liquidationDiscount ?? "";
    message.supplyCap = object.supplyCap ?? "";
    message.borrowCap = object.borrowCap ?? "";
    return message;
  },
};

const baseAssetUtilization: object = {
  denom: "",
  totalBorrowed: "",
  totalAmount: "",
  utilizationRate: "",
};

export const AssetUtilization = {
  encode(
    message: AssetUtilization,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.totalBorrowed !== "") {
      writer.uint32(18).string(message.totalBorrowed);
    }
    if (message.totalAmount !== "") {
      writer.uint32(26).string(message.totalAmount);
    }
    if (message.utilizationRate !== "") {
      writer.uint32(34).string(message.utilizationRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetUtilization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAssetUtilization } as AssetUtilization;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.totalBorrowed = reader.string();
          break;
        case 3:
          message.totalAmount = reader.string();
          break;
        case 4:
          message.utilizationRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetUtilization {
    const message = { ...baseAssetUtilization } as AssetUtilization;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.totalBorrowed =
      object.totalBorrowed !== undefined && object.totalBorrowed !== null
        ? String(object.totalBorrowed)
        : "";
    message.totalAmount =
      object.totalAmount !== undefined && object.totalAmount !== null
        ? String(object.totalAmount)
        : "";
    message.utilizationRate =
      object.utilizationRate !== undefined && object.utilizationRate !== null
        ? String(object.utilizationRate)
        : "";
    return message;
  },

  toJSON(message: AssetUtilization): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.totalBorrowed !== undefined &&
      (obj.totalBorrowed = message.totalBorrowed);
    message.totalAmount !== undefined &&
      (obj.totalAmount = message.totalAmount);
    message.utilizationRate !== undefined &&
      (obj.utilizationRate = message.utilizationRate);
    return obj;
  },

  fromPartial(object: DeepPartial<AssetUtilization>): AssetUtilization {
    const message = { ...baseAssetUtilization } as AssetUtilization;
    message.denom = object.denom ?? "";
    message.totalBorrowed = object.totalBorrowed ?? "";
    message.totalAmount = object.totalAmount ?? "";
    message.utilizationRate = object.utilizationRate ?? "";
    return message;
  },
};

const baseUpdateAssetParams: object = {
  denom: "",
  loanToValue: "",
  liquidationThreshold: "",
  liquidationDiscount: "",
  supplyCap: "",
  borrowCap: "",
};

export const UpdateAssetParams = {
  encode(
    message: UpdateAssetParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.rateStrategyName !== undefined) {
      StringValue.encode(
        { value: message.rateStrategyName! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.allowRepayStablecoinInterest !== undefined) {
      BoolValue.encode(
        { value: message.allowRepayStablecoinInterest! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.loanToValue !== "") {
      writer.uint32(34).string(message.loanToValue);
    }
    if (message.liquidationThreshold !== "") {
      writer.uint32(42).string(message.liquidationThreshold);
    }
    if (message.liquidationDiscount !== "") {
      writer.uint32(50).string(message.liquidationDiscount);
    }
    if (message.supplyCap !== "") {
      writer.uint32(58).string(message.supplyCap);
    }
    if (message.borrowCap !== "") {
      writer.uint32(66).string(message.borrowCap);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAssetParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateAssetParams } as UpdateAssetParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.rateStrategyName = StringValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 3:
          message.allowRepayStablecoinInterest = BoolValue.decode(
            reader,
            reader.uint32()
          ).value;
          break;
        case 4:
          message.loanToValue = reader.string();
          break;
        case 5:
          message.liquidationThreshold = reader.string();
          break;
        case 6:
          message.liquidationDiscount = reader.string();
          break;
        case 7:
          message.supplyCap = reader.string();
          break;
        case 8:
          message.borrowCap = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateAssetParams {
    const message = { ...baseUpdateAssetParams } as UpdateAssetParams;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.rateStrategyName =
      object.rateStrategyName !== undefined && object.rateStrategyName !== null
        ? String(object.rateStrategyName)
        : undefined;
    message.allowRepayStablecoinInterest =
      object.allowRepayStablecoinInterest !== undefined &&
      object.allowRepayStablecoinInterest !== null
        ? Boolean(object.allowRepayStablecoinInterest)
        : undefined;
    message.loanToValue =
      object.loanToValue !== undefined && object.loanToValue !== null
        ? String(object.loanToValue)
        : "";
    message.liquidationThreshold =
      object.liquidationThreshold !== undefined &&
      object.liquidationThreshold !== null
        ? String(object.liquidationThreshold)
        : "";
    message.liquidationDiscount =
      object.liquidationDiscount !== undefined &&
      object.liquidationDiscount !== null
        ? String(object.liquidationDiscount)
        : "";
    message.supplyCap =
      object.supplyCap !== undefined && object.supplyCap !== null
        ? String(object.supplyCap)
        : "";
    message.borrowCap =
      object.borrowCap !== undefined && object.borrowCap !== null
        ? String(object.borrowCap)
        : "";
    return message;
  },

  toJSON(message: UpdateAssetParams): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.rateStrategyName !== undefined &&
      (obj.rateStrategyName = message.rateStrategyName);
    message.allowRepayStablecoinInterest !== undefined &&
      (obj.allowRepayStablecoinInterest = message.allowRepayStablecoinInterest);
    message.loanToValue !== undefined &&
      (obj.loanToValue = message.loanToValue);
    message.liquidationThreshold !== undefined &&
      (obj.liquidationThreshold = message.liquidationThreshold);
    message.liquidationDiscount !== undefined &&
      (obj.liquidationDiscount = message.liquidationDiscount);
    message.supplyCap !== undefined && (obj.supplyCap = message.supplyCap);
    message.borrowCap !== undefined && (obj.borrowCap = message.borrowCap);
    return obj;
  },

  fromPartial(object: DeepPartial<UpdateAssetParams>): UpdateAssetParams {
    const message = { ...baseUpdateAssetParams } as UpdateAssetParams;
    message.denom = object.denom ?? "";
    message.rateStrategyName = object.rateStrategyName ?? undefined;
    message.allowRepayStablecoinInterest =
      object.allowRepayStablecoinInterest ?? undefined;
    message.loanToValue = object.loanToValue ?? "";
    message.liquidationThreshold = object.liquidationThreshold ?? "";
    message.liquidationDiscount = object.liquidationDiscount ?? "";
    message.supplyCap = object.supplyCap ?? "";
    message.borrowCap = object.borrowCap ?? "";
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
