/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.carbon.cdp";

export interface AssetParams {
  denom: string;
  oracleId: string;
  rateStrategyName: string;
  allowRepayStablecoinInterestDebt: boolean;
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

const baseAssetParams: object = {
  denom: "",
  oracleId: "",
  rateStrategyName: "",
  allowRepayStablecoinInterestDebt: false,
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
    if (message.oracleId !== "") {
      writer.uint32(18).string(message.oracleId);
    }
    if (message.rateStrategyName !== "") {
      writer.uint32(26).string(message.rateStrategyName);
    }
    if (message.allowRepayStablecoinInterestDebt === true) {
      writer.uint32(32).bool(message.allowRepayStablecoinInterestDebt);
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
        case 2:
          message.oracleId = reader.string();
          break;
        case 3:
          message.rateStrategyName = reader.string();
          break;
        case 4:
          message.allowRepayStablecoinInterestDebt = reader.bool();
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
    message.oracleId =
      object.oracleId !== undefined && object.oracleId !== null
        ? String(object.oracleId)
        : "";
    message.rateStrategyName =
      object.rateStrategyName !== undefined && object.rateStrategyName !== null
        ? String(object.rateStrategyName)
        : "";
    message.allowRepayStablecoinInterestDebt =
      object.allowRepayStablecoinInterestDebt !== undefined &&
      object.allowRepayStablecoinInterestDebt !== null
        ? Boolean(object.allowRepayStablecoinInterestDebt)
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
    message.oracleId !== undefined && (obj.oracleId = message.oracleId);
    message.rateStrategyName !== undefined &&
      (obj.rateStrategyName = message.rateStrategyName);
    message.allowRepayStablecoinInterestDebt !== undefined &&
      (obj.allowRepayStablecoinInterestDebt =
        message.allowRepayStablecoinInterestDebt);
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
    message.oracleId = object.oracleId ?? "";
    message.rateStrategyName = object.rateStrategyName ?? "";
    message.allowRepayStablecoinInterestDebt =
      object.allowRepayStablecoinInterestDebt ?? false;
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
