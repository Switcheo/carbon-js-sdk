/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { BoolValue, StringValue } from "../../../google/protobuf/wrappers";

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
  isExitOnly: boolean;
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
  isExitOnly: boolean;
}

function createBaseAssetParamsAPI(): AssetParamsAPI {
  return { assetParams: undefined, tokenName: "" };
}

export const AssetParamsAPI = {
  encode(message: AssetParamsAPI, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetParams !== undefined) {
      AssetParams.encode(message.assetParams, writer.uint32(10).fork()).ldelim();
    }
    if (message.tokenName !== "") {
      writer.uint32(18).string(message.tokenName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetParamsAPI {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetParamsAPI();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.assetParams = AssetParams.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tokenName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AssetParamsAPI {
    return {
      assetParams: isSet(object.assetParams) ? AssetParams.fromJSON(object.assetParams) : undefined,
      tokenName: isSet(object.tokenName) ? String(object.tokenName) : "",
    };
  },

  toJSON(message: AssetParamsAPI): unknown {
    const obj: any = {};
    message.assetParams !== undefined &&
      (obj.assetParams = message.assetParams ? AssetParams.toJSON(message.assetParams) : undefined);
    message.tokenName !== undefined && (obj.tokenName = message.tokenName);
    return obj;
  },

  create(base?: DeepPartial<AssetParamsAPI>): AssetParamsAPI {
    return AssetParamsAPI.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AssetParamsAPI>): AssetParamsAPI {
    const message = createBaseAssetParamsAPI();
    message.assetParams = (object.assetParams !== undefined && object.assetParams !== null)
      ? AssetParams.fromPartial(object.assetParams)
      : undefined;
    message.tokenName = object.tokenName ?? "";
    return message;
  },
};

function createBaseAssetParams(): AssetParams {
  return {
    denom: "",
    rateStrategyName: "",
    allowRepayStablecoinInterest: false,
    loanToValue: "",
    liquidationThreshold: "",
    liquidationDiscount: "",
    supplyCap: "",
    borrowCap: "",
    isExitOnly: false,
  };
}

export const AssetParams = {
  encode(message: AssetParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.isExitOnly === true) {
      writer.uint32(80).bool(message.isExitOnly);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.rateStrategyName = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.allowRepayStablecoinInterest = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.loanToValue = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.liquidationThreshold = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.liquidationDiscount = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.supplyCap = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.borrowCap = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.isExitOnly = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AssetParams {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      rateStrategyName: isSet(object.rateStrategyName) ? String(object.rateStrategyName) : "",
      allowRepayStablecoinInterest: isSet(object.allowRepayStablecoinInterest)
        ? Boolean(object.allowRepayStablecoinInterest)
        : false,
      loanToValue: isSet(object.loanToValue) ? String(object.loanToValue) : "",
      liquidationThreshold: isSet(object.liquidationThreshold) ? String(object.liquidationThreshold) : "",
      liquidationDiscount: isSet(object.liquidationDiscount) ? String(object.liquidationDiscount) : "",
      supplyCap: isSet(object.supplyCap) ? String(object.supplyCap) : "",
      borrowCap: isSet(object.borrowCap) ? String(object.borrowCap) : "",
      isExitOnly: isSet(object.isExitOnly) ? Boolean(object.isExitOnly) : false,
    };
  },

  toJSON(message: AssetParams): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.rateStrategyName !== undefined && (obj.rateStrategyName = message.rateStrategyName);
    message.allowRepayStablecoinInterest !== undefined &&
      (obj.allowRepayStablecoinInterest = message.allowRepayStablecoinInterest);
    message.loanToValue !== undefined && (obj.loanToValue = message.loanToValue);
    message.liquidationThreshold !== undefined && (obj.liquidationThreshold = message.liquidationThreshold);
    message.liquidationDiscount !== undefined && (obj.liquidationDiscount = message.liquidationDiscount);
    message.supplyCap !== undefined && (obj.supplyCap = message.supplyCap);
    message.borrowCap !== undefined && (obj.borrowCap = message.borrowCap);
    message.isExitOnly !== undefined && (obj.isExitOnly = message.isExitOnly);
    return obj;
  },

  create(base?: DeepPartial<AssetParams>): AssetParams {
    return AssetParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AssetParams>): AssetParams {
    const message = createBaseAssetParams();
    message.denom = object.denom ?? "";
    message.rateStrategyName = object.rateStrategyName ?? "";
    message.allowRepayStablecoinInterest = object.allowRepayStablecoinInterest ?? false;
    message.loanToValue = object.loanToValue ?? "";
    message.liquidationThreshold = object.liquidationThreshold ?? "";
    message.liquidationDiscount = object.liquidationDiscount ?? "";
    message.supplyCap = object.supplyCap ?? "";
    message.borrowCap = object.borrowCap ?? "";
    message.isExitOnly = object.isExitOnly ?? false;
    return message;
  },
};

function createBaseAssetUtilization(): AssetUtilization {
  return { denom: "", totalBorrowed: "", totalAmount: "", utilizationRate: "" };
}

export const AssetUtilization = {
  encode(message: AssetUtilization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetUtilization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.totalBorrowed = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.totalAmount = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.utilizationRate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AssetUtilization {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      totalBorrowed: isSet(object.totalBorrowed) ? String(object.totalBorrowed) : "",
      totalAmount: isSet(object.totalAmount) ? String(object.totalAmount) : "",
      utilizationRate: isSet(object.utilizationRate) ? String(object.utilizationRate) : "",
    };
  },

  toJSON(message: AssetUtilization): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.totalBorrowed !== undefined && (obj.totalBorrowed = message.totalBorrowed);
    message.totalAmount !== undefined && (obj.totalAmount = message.totalAmount);
    message.utilizationRate !== undefined && (obj.utilizationRate = message.utilizationRate);
    return obj;
  },

  create(base?: DeepPartial<AssetUtilization>): AssetUtilization {
    return AssetUtilization.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AssetUtilization>): AssetUtilization {
    const message = createBaseAssetUtilization();
    message.denom = object.denom ?? "";
    message.totalBorrowed = object.totalBorrowed ?? "";
    message.totalAmount = object.totalAmount ?? "";
    message.utilizationRate = object.utilizationRate ?? "";
    return message;
  },
};

function createBaseUpdateAssetParams(): UpdateAssetParams {
  return {
    denom: "",
    rateStrategyName: undefined,
    allowRepayStablecoinInterest: undefined,
    loanToValue: "",
    liquidationThreshold: "",
    liquidationDiscount: "",
    supplyCap: "",
    borrowCap: "",
    isExitOnly: false,
  };
}

export const UpdateAssetParams = {
  encode(message: UpdateAssetParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.rateStrategyName !== undefined) {
      StringValue.encode({ value: message.rateStrategyName! }, writer.uint32(18).fork()).ldelim();
    }
    if (message.allowRepayStablecoinInterest !== undefined) {
      BoolValue.encode({ value: message.allowRepayStablecoinInterest! }, writer.uint32(26).fork()).ldelim();
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
    if (message.isExitOnly === true) {
      writer.uint32(72).bool(message.isExitOnly);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAssetParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAssetParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.rateStrategyName = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.allowRepayStablecoinInterest = BoolValue.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.loanToValue = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.liquidationThreshold = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.liquidationDiscount = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.supplyCap = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.borrowCap = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.isExitOnly = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateAssetParams {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      rateStrategyName: isSet(object.rateStrategyName) ? String(object.rateStrategyName) : undefined,
      allowRepayStablecoinInterest: isSet(object.allowRepayStablecoinInterest)
        ? Boolean(object.allowRepayStablecoinInterest)
        : undefined,
      loanToValue: isSet(object.loanToValue) ? String(object.loanToValue) : "",
      liquidationThreshold: isSet(object.liquidationThreshold) ? String(object.liquidationThreshold) : "",
      liquidationDiscount: isSet(object.liquidationDiscount) ? String(object.liquidationDiscount) : "",
      supplyCap: isSet(object.supplyCap) ? String(object.supplyCap) : "",
      borrowCap: isSet(object.borrowCap) ? String(object.borrowCap) : "",
      isExitOnly: isSet(object.isExitOnly) ? Boolean(object.isExitOnly) : false,
    };
  },

  toJSON(message: UpdateAssetParams): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.rateStrategyName !== undefined && (obj.rateStrategyName = message.rateStrategyName);
    message.allowRepayStablecoinInterest !== undefined &&
      (obj.allowRepayStablecoinInterest = message.allowRepayStablecoinInterest);
    message.loanToValue !== undefined && (obj.loanToValue = message.loanToValue);
    message.liquidationThreshold !== undefined && (obj.liquidationThreshold = message.liquidationThreshold);
    message.liquidationDiscount !== undefined && (obj.liquidationDiscount = message.liquidationDiscount);
    message.supplyCap !== undefined && (obj.supplyCap = message.supplyCap);
    message.borrowCap !== undefined && (obj.borrowCap = message.borrowCap);
    message.isExitOnly !== undefined && (obj.isExitOnly = message.isExitOnly);
    return obj;
  },

  create(base?: DeepPartial<UpdateAssetParams>): UpdateAssetParams {
    return UpdateAssetParams.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateAssetParams>): UpdateAssetParams {
    const message = createBaseUpdateAssetParams();
    message.denom = object.denom ?? "";
    message.rateStrategyName = object.rateStrategyName ?? undefined;
    message.allowRepayStablecoinInterest = object.allowRepayStablecoinInterest ?? undefined;
    message.loanToValue = object.loanToValue ?? "";
    message.liquidationThreshold = object.liquidationThreshold ?? "";
    message.liquidationDiscount = object.liquidationDiscount ?? "";
    message.supplyCap = object.supplyCap ?? "";
    message.borrowCap = object.borrowCap ?? "";
    message.isExitOnly = object.isExitOnly ?? false;
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
