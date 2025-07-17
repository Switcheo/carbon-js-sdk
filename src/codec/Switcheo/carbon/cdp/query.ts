/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { AssetParamsAPI } from "./asset_params";
import { CDPLiquidations } from "./cdp_liquidations";
import { DebtInfo } from "./debt_info";
import { EModeCategory } from "./e_mode_category";
import { GlpTransferRecord, NLendConversionRecord } from "./nlend";
import { Params } from "./params";
import { RateStrategyParams } from "./rate_strategy_params";
import { RewardDebt, RewardScheme } from "./reward_scheme";
import { StablecoinDebtInfo } from "./stablecoin_debt_info";
import { StablecoinInterestInfo } from "./stablecoin_interest_info";

export const protobufPackage = "Switcheo.carbon.cdp";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

export interface QueryRateStrategyRequest {
  name: string;
}

export interface QueryRateStrategyResponse {
  rateStrategyParams?: RateStrategyParams;
}

export interface QueryRateStrategyAllRequest {
  pagination?: PageRequest;
}

export interface QueryRateStrategyAllResponse {
  rateStrategyParamsAll: RateStrategyParams[];
  pagination?: PageResponse;
}

export interface QueryAccountDataRequest {
  address: string;
}

export interface QueryAccountDataResponse {
  totalCollateralsUsd: string;
  totalDebtsUsd: string;
  availableBorrowsUsd: string;
  currLiquidationThreshold: string;
}

export interface QueryAccountCollateralRequest {
  address: string;
  cibtDenom: string;
}

export interface QueryAccountCollateralResponse {
  collateral?: Collateral;
}

export interface QueryAccountCollateralAllRequest {
  address: string;
  pagination?: PageRequest;
}

export interface QueryAccountCollateralAllResponse {
  collaterals: Collateral[];
  pagination?: PageResponse;
}

export interface Collateral {
  denom: string;
  cibtDenom: string;
  collateralAmount: string;
}

export interface QueryAccountDebtRequest {
  address: string;
  denom: string;
}

export interface QueryAccountDebtResponse {
  debt?: Debt;
}

export interface QueryAccountDebtAllRequest {
  address: string;
  pagination?: PageRequest;
}

export interface QueryAccountDebtAllResponse {
  debts: Debt[];
  pagination?: PageResponse;
}

export interface Debt {
  denom: string;
  principal: string;
  initialCumulativeInterestMultiplier: string;
}

export interface QueryAccountStablecoinRequest {
  address: string;
}

export interface QueryAccountStablecoinResponse {
  principal: string;
  interest: string;
  initialCumulativeInterestMultiplier: string;
}

export interface QueryAssetRequest {
  denom: string;
}

export interface QueryAssetResponse {
  assetParams?: AssetParamsAPI;
}

export interface QueryAssetAllRequest {
  pagination?: PageRequest;
}

export interface QueryAssetAllResponse {
  assetParamsAll: AssetParamsAPI[];
  pagination?: PageResponse;
}

export interface QueryAssetLoansRequest {
  pagination?: PageRequest;
  denom: string;
}

export interface QueryAssetLoansResponse {
  denom: string;
  cibtDenom: string;
  loans: AssetLoan[];
  pagination?: PageResponse;
}

export interface AssetLoan {
  address: string;
  uncollaterizedAmount: string;
  collaterizedAmount: string;
  totalLentAmount: string;
}

export interface QueryTokenDebtRequest {
  denom: string;
}

export interface QueryTokenDebtResponse {
  debtInfo?: DebtInfo;
}

export interface QueryTokenDebtAllRequest {
  pagination?: PageRequest;
}

export interface QueryTokenDebtAllResponse {
  debtInfosAll: DebtInfo[];
  pagination?: PageResponse;
}

export interface QueryStablecoinDebtRequest {
}

export interface QueryStablecoinDebtResponse {
  stablecoinDebtInfo?: StablecoinDebtInfo;
}

export interface CdpPositionItem {
  address: string;
  denom: string;
  cibtDenom: string;
  healthFactor: string;
  collateralAmount: string;
  borrowAmount: string;
  mintDenom: string;
  mintAmount: string;
}

export interface CdpPosition {
  address: string;
  healthFactor: string;
  collateral: Coin[];
  borrow: Coin[];
  mint: Coin[];
}

export interface QueryCdpPositionRequest {
  address: string;
}

export interface QueryCdpPositionResponse {
  position?: CdpPosition;
}

export interface QueryCdpPositionsRequest {
  pagination?: PageRequest;
  maxHealthFactor: string;
  minHealthFactor: string;
}

export interface QueryCdpPositionsResponse {
  positions: CdpPosition[];
  pagination?: PageResponse;
}

export interface QueryRewardSchemesAllRequest {
  pagination?: PageRequest;
}

export interface QueryRewardSchemesAllResponse {
  rewardSchemes: RewardScheme[];
  pagination?: PageResponse;
}

export interface QueryRewardDebtsRequest {
  address: string;
  pagination?: PageRequest;
}

export interface QueryRewardDebtsResponse {
  rewardDebts: RewardDebt[];
  pagination?: PageResponse;
}

export interface QueryRewardDebtsAllRequest {
  pagination?: PageRequest;
}

export interface QueryEModeAllRequest {
  pagination?: PageRequest;
}

export interface QueryEModeAllResponse {
  eModeCategories: EModeCategory[];
  pagination?: PageResponse;
}

export interface QueryStablecoinInterestRequest {
}

export interface QueryStablecoinInterestResponse {
  stablecoinInterestInfo?: StablecoinInterestInfo;
}

export interface QueryEModeRequest {
  name: string;
}

export interface QueryEModeResponse {
  eModeCategory?: EModeCategory;
}

export interface QueryHealthFactorRequest {
  address: string;
}

export interface QueryHealthFactorResponse {
  healthFactor: string;
}

export interface QueryAccountEModeRequest {
  address: string;
}

export interface QueryAccountEModeResponse {
  eModeCategoryName: string;
}

export interface QueryCDPLiquidationsAllRequest {
  pagination?: PageRequest;
}

export interface QueryCDPLiquidationsAllResponse {
  cdpLiquidationsAll: CDPLiquidations[];
  pagination?: PageResponse;
}

export interface QueryGlpTransferAllRequest {
  pagination?: PageRequest;
}

export interface QueryGlpTransferAllResponse {
  glpTransfersAll: GlpTransferRecord[];
  pagination?: PageResponse;
}

export interface QueryNLendConversionsAllRequest {
  pagination?: PageRequest;
}

export interface QueryNLendConversionsAllResponse {
  nlendConversions: NLendConversionRecord[];
  pagination?: PageResponse;
}

export interface QueryNLendConversionRequest {
  address: string;
}

export interface QueryNLendConversionResponse {
  nlendConversions: NLendConversionRecord[];
}

export interface QueryLiquidationProtectionAllRequest {
  pagination?: PageRequest;
}

export interface QueryLiquidationProtectionAllResponse {
  addresses: string[];
  pagination?: PageResponse;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryRateStrategyRequest(): QueryRateStrategyRequest {
  return { name: "" };
}

export const QueryRateStrategyRequest = {
  encode(message: QueryRateStrategyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRateStrategyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRateStrategyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryRateStrategyRequest {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: QueryRateStrategyRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create(base?: DeepPartial<QueryRateStrategyRequest>): QueryRateStrategyRequest {
    return QueryRateStrategyRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryRateStrategyRequest>): QueryRateStrategyRequest {
    const message = createBaseQueryRateStrategyRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseQueryRateStrategyResponse(): QueryRateStrategyResponse {
  return { rateStrategyParams: undefined };
}

export const QueryRateStrategyResponse = {
  encode(message: QueryRateStrategyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rateStrategyParams !== undefined) {
      RateStrategyParams.encode(message.rateStrategyParams, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRateStrategyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRateStrategyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rateStrategyParams = RateStrategyParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryRateStrategyResponse {
    return {
      rateStrategyParams: isSet(object.rateStrategyParams)
        ? RateStrategyParams.fromJSON(object.rateStrategyParams)
        : undefined,
    };
  },

  toJSON(message: QueryRateStrategyResponse): unknown {
    const obj: any = {};
    message.rateStrategyParams !== undefined && (obj.rateStrategyParams = message.rateStrategyParams
      ? RateStrategyParams.toJSON(message.rateStrategyParams)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryRateStrategyResponse>): QueryRateStrategyResponse {
    return QueryRateStrategyResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryRateStrategyResponse>): QueryRateStrategyResponse {
    const message = createBaseQueryRateStrategyResponse();
    message.rateStrategyParams = (object.rateStrategyParams !== undefined && object.rateStrategyParams !== null)
      ? RateStrategyParams.fromPartial(object.rateStrategyParams)
      : undefined;
    return message;
  },
};

function createBaseQueryRateStrategyAllRequest(): QueryRateStrategyAllRequest {
  return { pagination: undefined };
}

export const QueryRateStrategyAllRequest = {
  encode(message: QueryRateStrategyAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRateStrategyAllRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRateStrategyAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryRateStrategyAllRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryRateStrategyAllRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryRateStrategyAllRequest>): QueryRateStrategyAllRequest {
    return QueryRateStrategyAllRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryRateStrategyAllRequest>): QueryRateStrategyAllRequest {
    const message = createBaseQueryRateStrategyAllRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryRateStrategyAllResponse(): QueryRateStrategyAllResponse {
  return { rateStrategyParamsAll: [], pagination: undefined };
}

export const QueryRateStrategyAllResponse = {
  encode(message: QueryRateStrategyAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rateStrategyParamsAll) {
      RateStrategyParams.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRateStrategyAllResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRateStrategyAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rateStrategyParamsAll.push(RateStrategyParams.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryRateStrategyAllResponse {
    return {
      rateStrategyParamsAll: Array.isArray(object?.rateStrategyParamsAll)
        ? object.rateStrategyParamsAll.map((e: any) => RateStrategyParams.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryRateStrategyAllResponse): unknown {
    const obj: any = {};
    if (message.rateStrategyParamsAll) {
      obj.rateStrategyParamsAll = message.rateStrategyParamsAll.map((e) =>
        e ? RateStrategyParams.toJSON(e) : undefined
      );
    } else {
      obj.rateStrategyParamsAll = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryRateStrategyAllResponse>): QueryRateStrategyAllResponse {
    return QueryRateStrategyAllResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryRateStrategyAllResponse>): QueryRateStrategyAllResponse {
    const message = createBaseQueryRateStrategyAllResponse();
    message.rateStrategyParamsAll = object.rateStrategyParamsAll?.map((e) => RateStrategyParams.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAccountDataRequest(): QueryAccountDataRequest {
  return { address: "" };
}

export const QueryAccountDataRequest = {
  encode(message: QueryAccountDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountDataRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAccountDataRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryAccountDataRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<QueryAccountDataRequest>): QueryAccountDataRequest {
    return QueryAccountDataRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAccountDataRequest>): QueryAccountDataRequest {
    const message = createBaseQueryAccountDataRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryAccountDataResponse(): QueryAccountDataResponse {
  return { totalCollateralsUsd: "", totalDebtsUsd: "", availableBorrowsUsd: "", currLiquidationThreshold: "" };
}

export const QueryAccountDataResponse = {
  encode(message: QueryAccountDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalCollateralsUsd !== "") {
      writer.uint32(10).string(message.totalCollateralsUsd);
    }
    if (message.totalDebtsUsd !== "") {
      writer.uint32(18).string(message.totalDebtsUsd);
    }
    if (message.availableBorrowsUsd !== "") {
      writer.uint32(26).string(message.availableBorrowsUsd);
    }
    if (message.currLiquidationThreshold !== "") {
      writer.uint32(34).string(message.currLiquidationThreshold);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountDataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.totalCollateralsUsd = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.totalDebtsUsd = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.availableBorrowsUsd = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.currLiquidationThreshold = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAccountDataResponse {
    return {
      totalCollateralsUsd: isSet(object.totalCollateralsUsd) ? String(object.totalCollateralsUsd) : "",
      totalDebtsUsd: isSet(object.totalDebtsUsd) ? String(object.totalDebtsUsd) : "",
      availableBorrowsUsd: isSet(object.availableBorrowsUsd) ? String(object.availableBorrowsUsd) : "",
      currLiquidationThreshold: isSet(object.currLiquidationThreshold) ? String(object.currLiquidationThreshold) : "",
    };
  },

  toJSON(message: QueryAccountDataResponse): unknown {
    const obj: any = {};
    message.totalCollateralsUsd !== undefined && (obj.totalCollateralsUsd = message.totalCollateralsUsd);
    message.totalDebtsUsd !== undefined && (obj.totalDebtsUsd = message.totalDebtsUsd);
    message.availableBorrowsUsd !== undefined && (obj.availableBorrowsUsd = message.availableBorrowsUsd);
    message.currLiquidationThreshold !== undefined && (obj.currLiquidationThreshold = message.currLiquidationThreshold);
    return obj;
  },

  create(base?: DeepPartial<QueryAccountDataResponse>): QueryAccountDataResponse {
    return QueryAccountDataResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAccountDataResponse>): QueryAccountDataResponse {
    const message = createBaseQueryAccountDataResponse();
    message.totalCollateralsUsd = object.totalCollateralsUsd ?? "";
    message.totalDebtsUsd = object.totalDebtsUsd ?? "";
    message.availableBorrowsUsd = object.availableBorrowsUsd ?? "";
    message.currLiquidationThreshold = object.currLiquidationThreshold ?? "";
    return message;
  },
};

function createBaseQueryAccountCollateralRequest(): QueryAccountCollateralRequest {
  return { address: "", cibtDenom: "" };
}

export const QueryAccountCollateralRequest = {
  encode(message: QueryAccountCollateralRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.cibtDenom !== "") {
      writer.uint32(18).string(message.cibtDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountCollateralRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountCollateralRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cibtDenom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAccountCollateralRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      cibtDenom: isSet(object.cibtDenom) ? String(object.cibtDenom) : "",
    };
  },

  toJSON(message: QueryAccountCollateralRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.cibtDenom !== undefined && (obj.cibtDenom = message.cibtDenom);
    return obj;
  },

  create(base?: DeepPartial<QueryAccountCollateralRequest>): QueryAccountCollateralRequest {
    return QueryAccountCollateralRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAccountCollateralRequest>): QueryAccountCollateralRequest {
    const message = createBaseQueryAccountCollateralRequest();
    message.address = object.address ?? "";
    message.cibtDenom = object.cibtDenom ?? "";
    return message;
  },
};

function createBaseQueryAccountCollateralResponse(): QueryAccountCollateralResponse {
  return { collateral: undefined };
}

export const QueryAccountCollateralResponse = {
  encode(message: QueryAccountCollateralResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collateral !== undefined) {
      Collateral.encode(message.collateral, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountCollateralResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountCollateralResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.collateral = Collateral.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAccountCollateralResponse {
    return { collateral: isSet(object.collateral) ? Collateral.fromJSON(object.collateral) : undefined };
  },

  toJSON(message: QueryAccountCollateralResponse): unknown {
    const obj: any = {};
    message.collateral !== undefined &&
      (obj.collateral = message.collateral ? Collateral.toJSON(message.collateral) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAccountCollateralResponse>): QueryAccountCollateralResponse {
    return QueryAccountCollateralResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAccountCollateralResponse>): QueryAccountCollateralResponse {
    const message = createBaseQueryAccountCollateralResponse();
    message.collateral = (object.collateral !== undefined && object.collateral !== null)
      ? Collateral.fromPartial(object.collateral)
      : undefined;
    return message;
  },
};

function createBaseQueryAccountCollateralAllRequest(): QueryAccountCollateralAllRequest {
  return { address: "", pagination: undefined };
}

export const QueryAccountCollateralAllRequest = {
  encode(message: QueryAccountCollateralAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountCollateralAllRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountCollateralAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAccountCollateralAllRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAccountCollateralAllRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAccountCollateralAllRequest>): QueryAccountCollateralAllRequest {
    return QueryAccountCollateralAllRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAccountCollateralAllRequest>): QueryAccountCollateralAllRequest {
    const message = createBaseQueryAccountCollateralAllRequest();
    message.address = object.address ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAccountCollateralAllResponse(): QueryAccountCollateralAllResponse {
  return { collaterals: [], pagination: undefined };
}

export const QueryAccountCollateralAllResponse = {
  encode(message: QueryAccountCollateralAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.collaterals) {
      Collateral.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountCollateralAllResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountCollateralAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.collaterals.push(Collateral.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAccountCollateralAllResponse {
    return {
      collaterals: Array.isArray(object?.collaterals) ? object.collaterals.map((e: any) => Collateral.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAccountCollateralAllResponse): unknown {
    const obj: any = {};
    if (message.collaterals) {
      obj.collaterals = message.collaterals.map((e) => e ? Collateral.toJSON(e) : undefined);
    } else {
      obj.collaterals = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAccountCollateralAllResponse>): QueryAccountCollateralAllResponse {
    return QueryAccountCollateralAllResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAccountCollateralAllResponse>): QueryAccountCollateralAllResponse {
    const message = createBaseQueryAccountCollateralAllResponse();
    message.collaterals = object.collaterals?.map((e) => Collateral.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseCollateral(): Collateral {
  return { denom: "", cibtDenom: "", collateralAmount: "" };
}

export const Collateral = {
  encode(message: Collateral, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.cibtDenom !== "") {
      writer.uint32(18).string(message.cibtDenom);
    }
    if (message.collateralAmount !== "") {
      writer.uint32(26).string(message.collateralAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Collateral {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollateral();
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

          message.cibtDenom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.collateralAmount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Collateral {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      cibtDenom: isSet(object.cibtDenom) ? String(object.cibtDenom) : "",
      collateralAmount: isSet(object.collateralAmount) ? String(object.collateralAmount) : "",
    };
  },

  toJSON(message: Collateral): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.cibtDenom !== undefined && (obj.cibtDenom = message.cibtDenom);
    message.collateralAmount !== undefined && (obj.collateralAmount = message.collateralAmount);
    return obj;
  },

  create(base?: DeepPartial<Collateral>): Collateral {
    return Collateral.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Collateral>): Collateral {
    const message = createBaseCollateral();
    message.denom = object.denom ?? "";
    message.cibtDenom = object.cibtDenom ?? "";
    message.collateralAmount = object.collateralAmount ?? "";
    return message;
  },
};

function createBaseQueryAccountDebtRequest(): QueryAccountDebtRequest {
  return { address: "", denom: "" };
}

export const QueryAccountDebtRequest = {
  encode(message: QueryAccountDebtRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountDebtRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountDebtRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAccountDebtRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: QueryAccountDebtRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<QueryAccountDebtRequest>): QueryAccountDebtRequest {
    return QueryAccountDebtRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAccountDebtRequest>): QueryAccountDebtRequest {
    const message = createBaseQueryAccountDebtRequest();
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryAccountDebtResponse(): QueryAccountDebtResponse {
  return { debt: undefined };
}

export const QueryAccountDebtResponse = {
  encode(message: QueryAccountDebtResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.debt !== undefined) {
      Debt.encode(message.debt, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountDebtResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountDebtResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.debt = Debt.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAccountDebtResponse {
    return { debt: isSet(object.debt) ? Debt.fromJSON(object.debt) : undefined };
  },

  toJSON(message: QueryAccountDebtResponse): unknown {
    const obj: any = {};
    message.debt !== undefined && (obj.debt = message.debt ? Debt.toJSON(message.debt) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAccountDebtResponse>): QueryAccountDebtResponse {
    return QueryAccountDebtResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAccountDebtResponse>): QueryAccountDebtResponse {
    const message = createBaseQueryAccountDebtResponse();
    message.debt = (object.debt !== undefined && object.debt !== null) ? Debt.fromPartial(object.debt) : undefined;
    return message;
  },
};

function createBaseQueryAccountDebtAllRequest(): QueryAccountDebtAllRequest {
  return { address: "", pagination: undefined };
}

export const QueryAccountDebtAllRequest = {
  encode(message: QueryAccountDebtAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountDebtAllRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountDebtAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAccountDebtAllRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAccountDebtAllRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAccountDebtAllRequest>): QueryAccountDebtAllRequest {
    return QueryAccountDebtAllRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAccountDebtAllRequest>): QueryAccountDebtAllRequest {
    const message = createBaseQueryAccountDebtAllRequest();
    message.address = object.address ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAccountDebtAllResponse(): QueryAccountDebtAllResponse {
  return { debts: [], pagination: undefined };
}

export const QueryAccountDebtAllResponse = {
  encode(message: QueryAccountDebtAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.debts) {
      Debt.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountDebtAllResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountDebtAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.debts.push(Debt.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAccountDebtAllResponse {
    return {
      debts: Array.isArray(object?.debts) ? object.debts.map((e: any) => Debt.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAccountDebtAllResponse): unknown {
    const obj: any = {};
    if (message.debts) {
      obj.debts = message.debts.map((e) => e ? Debt.toJSON(e) : undefined);
    } else {
      obj.debts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAccountDebtAllResponse>): QueryAccountDebtAllResponse {
    return QueryAccountDebtAllResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAccountDebtAllResponse>): QueryAccountDebtAllResponse {
    const message = createBaseQueryAccountDebtAllResponse();
    message.debts = object.debts?.map((e) => Debt.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseDebt(): Debt {
  return { denom: "", principal: "", initialCumulativeInterestMultiplier: "" };
}

export const Debt = {
  encode(message: Debt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.principal !== "") {
      writer.uint32(18).string(message.principal);
    }
    if (message.initialCumulativeInterestMultiplier !== "") {
      writer.uint32(26).string(message.initialCumulativeInterestMultiplier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Debt {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDebt();
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

          message.principal = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.initialCumulativeInterestMultiplier = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Debt {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      principal: isSet(object.principal) ? String(object.principal) : "",
      initialCumulativeInterestMultiplier: isSet(object.initialCumulativeInterestMultiplier)
        ? String(object.initialCumulativeInterestMultiplier)
        : "",
    };
  },

  toJSON(message: Debt): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.principal !== undefined && (obj.principal = message.principal);
    message.initialCumulativeInterestMultiplier !== undefined &&
      (obj.initialCumulativeInterestMultiplier = message.initialCumulativeInterestMultiplier);
    return obj;
  },

  create(base?: DeepPartial<Debt>): Debt {
    return Debt.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Debt>): Debt {
    const message = createBaseDebt();
    message.denom = object.denom ?? "";
    message.principal = object.principal ?? "";
    message.initialCumulativeInterestMultiplier = object.initialCumulativeInterestMultiplier ?? "";
    return message;
  },
};

function createBaseQueryAccountStablecoinRequest(): QueryAccountStablecoinRequest {
  return { address: "" };
}

export const QueryAccountStablecoinRequest = {
  encode(message: QueryAccountStablecoinRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountStablecoinRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountStablecoinRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAccountStablecoinRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryAccountStablecoinRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<QueryAccountStablecoinRequest>): QueryAccountStablecoinRequest {
    return QueryAccountStablecoinRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAccountStablecoinRequest>): QueryAccountStablecoinRequest {
    const message = createBaseQueryAccountStablecoinRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryAccountStablecoinResponse(): QueryAccountStablecoinResponse {
  return { principal: "", interest: "", initialCumulativeInterestMultiplier: "" };
}

export const QueryAccountStablecoinResponse = {
  encode(message: QueryAccountStablecoinResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.principal !== "") {
      writer.uint32(10).string(message.principal);
    }
    if (message.interest !== "") {
      writer.uint32(18).string(message.interest);
    }
    if (message.initialCumulativeInterestMultiplier !== "") {
      writer.uint32(26).string(message.initialCumulativeInterestMultiplier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountStablecoinResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountStablecoinResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.principal = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.interest = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.initialCumulativeInterestMultiplier = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAccountStablecoinResponse {
    return {
      principal: isSet(object.principal) ? String(object.principal) : "",
      interest: isSet(object.interest) ? String(object.interest) : "",
      initialCumulativeInterestMultiplier: isSet(object.initialCumulativeInterestMultiplier)
        ? String(object.initialCumulativeInterestMultiplier)
        : "",
    };
  },

  toJSON(message: QueryAccountStablecoinResponse): unknown {
    const obj: any = {};
    message.principal !== undefined && (obj.principal = message.principal);
    message.interest !== undefined && (obj.interest = message.interest);
    message.initialCumulativeInterestMultiplier !== undefined &&
      (obj.initialCumulativeInterestMultiplier = message.initialCumulativeInterestMultiplier);
    return obj;
  },

  create(base?: DeepPartial<QueryAccountStablecoinResponse>): QueryAccountStablecoinResponse {
    return QueryAccountStablecoinResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAccountStablecoinResponse>): QueryAccountStablecoinResponse {
    const message = createBaseQueryAccountStablecoinResponse();
    message.principal = object.principal ?? "";
    message.interest = object.interest ?? "";
    message.initialCumulativeInterestMultiplier = object.initialCumulativeInterestMultiplier ?? "";
    return message;
  },
};

function createBaseQueryAssetRequest(): QueryAssetRequest {
  return { denom: "" };
}

export const QueryAssetRequest = {
  encode(message: QueryAssetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAssetRequest {
    return { denom: isSet(object.denom) ? String(object.denom) : "" };
  },

  toJSON(message: QueryAssetRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<QueryAssetRequest>): QueryAssetRequest {
    return QueryAssetRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAssetRequest>): QueryAssetRequest {
    const message = createBaseQueryAssetRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryAssetResponse(): QueryAssetResponse {
  return { assetParams: undefined };
}

export const QueryAssetResponse = {
  encode(message: QueryAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetParams !== undefined) {
      AssetParamsAPI.encode(message.assetParams, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.assetParams = AssetParamsAPI.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAssetResponse {
    return { assetParams: isSet(object.assetParams) ? AssetParamsAPI.fromJSON(object.assetParams) : undefined };
  },

  toJSON(message: QueryAssetResponse): unknown {
    const obj: any = {};
    message.assetParams !== undefined &&
      (obj.assetParams = message.assetParams ? AssetParamsAPI.toJSON(message.assetParams) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAssetResponse>): QueryAssetResponse {
    return QueryAssetResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAssetResponse>): QueryAssetResponse {
    const message = createBaseQueryAssetResponse();
    message.assetParams = (object.assetParams !== undefined && object.assetParams !== null)
      ? AssetParamsAPI.fromPartial(object.assetParams)
      : undefined;
    return message;
  },
};

function createBaseQueryAssetAllRequest(): QueryAssetAllRequest {
  return { pagination: undefined };
}

export const QueryAssetAllRequest = {
  encode(message: QueryAssetAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetAllRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAssetAllRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAssetAllRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAssetAllRequest>): QueryAssetAllRequest {
    return QueryAssetAllRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAssetAllRequest>): QueryAssetAllRequest {
    const message = createBaseQueryAssetAllRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAssetAllResponse(): QueryAssetAllResponse {
  return { assetParamsAll: [], pagination: undefined };
}

export const QueryAssetAllResponse = {
  encode(message: QueryAssetAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.assetParamsAll) {
      AssetParamsAPI.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetAllResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.assetParamsAll.push(AssetParamsAPI.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAssetAllResponse {
    return {
      assetParamsAll: Array.isArray(object?.assetParamsAll)
        ? object.assetParamsAll.map((e: any) => AssetParamsAPI.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAssetAllResponse): unknown {
    const obj: any = {};
    if (message.assetParamsAll) {
      obj.assetParamsAll = message.assetParamsAll.map((e) => e ? AssetParamsAPI.toJSON(e) : undefined);
    } else {
      obj.assetParamsAll = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAssetAllResponse>): QueryAssetAllResponse {
    return QueryAssetAllResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAssetAllResponse>): QueryAssetAllResponse {
    const message = createBaseQueryAssetAllResponse();
    message.assetParamsAll = object.assetParamsAll?.map((e) => AssetParamsAPI.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAssetLoansRequest(): QueryAssetLoansRequest {
  return { pagination: undefined, denom: "" };
}

export const QueryAssetLoansRequest = {
  encode(message: QueryAssetLoansRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetLoansRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetLoansRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAssetLoansRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: QueryAssetLoansRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<QueryAssetLoansRequest>): QueryAssetLoansRequest {
    return QueryAssetLoansRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAssetLoansRequest>): QueryAssetLoansRequest {
    const message = createBaseQueryAssetLoansRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryAssetLoansResponse(): QueryAssetLoansResponse {
  return { denom: "", cibtDenom: "", loans: [], pagination: undefined };
}

export const QueryAssetLoansResponse = {
  encode(message: QueryAssetLoansResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.cibtDenom !== "") {
      writer.uint32(18).string(message.cibtDenom);
    }
    for (const v of message.loans) {
      AssetLoan.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetLoansResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetLoansResponse();
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

          message.cibtDenom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.loans.push(AssetLoan.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAssetLoansResponse {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      cibtDenom: isSet(object.cibtDenom) ? String(object.cibtDenom) : "",
      loans: Array.isArray(object?.loans) ? object.loans.map((e: any) => AssetLoan.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAssetLoansResponse): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.cibtDenom !== undefined && (obj.cibtDenom = message.cibtDenom);
    if (message.loans) {
      obj.loans = message.loans.map((e) => e ? AssetLoan.toJSON(e) : undefined);
    } else {
      obj.loans = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAssetLoansResponse>): QueryAssetLoansResponse {
    return QueryAssetLoansResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAssetLoansResponse>): QueryAssetLoansResponse {
    const message = createBaseQueryAssetLoansResponse();
    message.denom = object.denom ?? "";
    message.cibtDenom = object.cibtDenom ?? "";
    message.loans = object.loans?.map((e) => AssetLoan.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseAssetLoan(): AssetLoan {
  return { address: "", uncollaterizedAmount: "", collaterizedAmount: "", totalLentAmount: "" };
}

export const AssetLoan = {
  encode(message: AssetLoan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.uncollaterizedAmount !== "") {
      writer.uint32(18).string(message.uncollaterizedAmount);
    }
    if (message.collaterizedAmount !== "") {
      writer.uint32(26).string(message.collaterizedAmount);
    }
    if (message.totalLentAmount !== "") {
      writer.uint32(34).string(message.totalLentAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetLoan {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetLoan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.uncollaterizedAmount = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.collaterizedAmount = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.totalLentAmount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AssetLoan {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      uncollaterizedAmount: isSet(object.uncollaterizedAmount) ? String(object.uncollaterizedAmount) : "",
      collaterizedAmount: isSet(object.collaterizedAmount) ? String(object.collaterizedAmount) : "",
      totalLentAmount: isSet(object.totalLentAmount) ? String(object.totalLentAmount) : "",
    };
  },

  toJSON(message: AssetLoan): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.uncollaterizedAmount !== undefined && (obj.uncollaterizedAmount = message.uncollaterizedAmount);
    message.collaterizedAmount !== undefined && (obj.collaterizedAmount = message.collaterizedAmount);
    message.totalLentAmount !== undefined && (obj.totalLentAmount = message.totalLentAmount);
    return obj;
  },

  create(base?: DeepPartial<AssetLoan>): AssetLoan {
    return AssetLoan.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AssetLoan>): AssetLoan {
    const message = createBaseAssetLoan();
    message.address = object.address ?? "";
    message.uncollaterizedAmount = object.uncollaterizedAmount ?? "";
    message.collaterizedAmount = object.collaterizedAmount ?? "";
    message.totalLentAmount = object.totalLentAmount ?? "";
    return message;
  },
};

function createBaseQueryTokenDebtRequest(): QueryTokenDebtRequest {
  return { denom: "" };
}

export const QueryTokenDebtRequest = {
  encode(message: QueryTokenDebtRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenDebtRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenDebtRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTokenDebtRequest {
    return { denom: isSet(object.denom) ? String(object.denom) : "" };
  },

  toJSON(message: QueryTokenDebtRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<QueryTokenDebtRequest>): QueryTokenDebtRequest {
    return QueryTokenDebtRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryTokenDebtRequest>): QueryTokenDebtRequest {
    const message = createBaseQueryTokenDebtRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryTokenDebtResponse(): QueryTokenDebtResponse {
  return { debtInfo: undefined };
}

export const QueryTokenDebtResponse = {
  encode(message: QueryTokenDebtResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.debtInfo !== undefined) {
      DebtInfo.encode(message.debtInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenDebtResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenDebtResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.debtInfo = DebtInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTokenDebtResponse {
    return { debtInfo: isSet(object.debtInfo) ? DebtInfo.fromJSON(object.debtInfo) : undefined };
  },

  toJSON(message: QueryTokenDebtResponse): unknown {
    const obj: any = {};
    message.debtInfo !== undefined && (obj.debtInfo = message.debtInfo ? DebtInfo.toJSON(message.debtInfo) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryTokenDebtResponse>): QueryTokenDebtResponse {
    return QueryTokenDebtResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryTokenDebtResponse>): QueryTokenDebtResponse {
    const message = createBaseQueryTokenDebtResponse();
    message.debtInfo = (object.debtInfo !== undefined && object.debtInfo !== null)
      ? DebtInfo.fromPartial(object.debtInfo)
      : undefined;
    return message;
  },
};

function createBaseQueryTokenDebtAllRequest(): QueryTokenDebtAllRequest {
  return { pagination: undefined };
}

export const QueryTokenDebtAllRequest = {
  encode(message: QueryTokenDebtAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenDebtAllRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenDebtAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTokenDebtAllRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryTokenDebtAllRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryTokenDebtAllRequest>): QueryTokenDebtAllRequest {
    return QueryTokenDebtAllRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryTokenDebtAllRequest>): QueryTokenDebtAllRequest {
    const message = createBaseQueryTokenDebtAllRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryTokenDebtAllResponse(): QueryTokenDebtAllResponse {
  return { debtInfosAll: [], pagination: undefined };
}

export const QueryTokenDebtAllResponse = {
  encode(message: QueryTokenDebtAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.debtInfosAll) {
      DebtInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenDebtAllResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenDebtAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.debtInfosAll.push(DebtInfo.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTokenDebtAllResponse {
    return {
      debtInfosAll: Array.isArray(object?.debtInfosAll)
        ? object.debtInfosAll.map((e: any) => DebtInfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryTokenDebtAllResponse): unknown {
    const obj: any = {};
    if (message.debtInfosAll) {
      obj.debtInfosAll = message.debtInfosAll.map((e) => e ? DebtInfo.toJSON(e) : undefined);
    } else {
      obj.debtInfosAll = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryTokenDebtAllResponse>): QueryTokenDebtAllResponse {
    return QueryTokenDebtAllResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryTokenDebtAllResponse>): QueryTokenDebtAllResponse {
    const message = createBaseQueryTokenDebtAllResponse();
    message.debtInfosAll = object.debtInfosAll?.map((e) => DebtInfo.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryStablecoinDebtRequest(): QueryStablecoinDebtRequest {
  return {};
}

export const QueryStablecoinDebtRequest = {
  encode(_: QueryStablecoinDebtRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStablecoinDebtRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStablecoinDebtRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryStablecoinDebtRequest {
    return {};
  },

  toJSON(_: QueryStablecoinDebtRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryStablecoinDebtRequest>): QueryStablecoinDebtRequest {
    return QueryStablecoinDebtRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryStablecoinDebtRequest>): QueryStablecoinDebtRequest {
    const message = createBaseQueryStablecoinDebtRequest();
    return message;
  },
};

function createBaseQueryStablecoinDebtResponse(): QueryStablecoinDebtResponse {
  return { stablecoinDebtInfo: undefined };
}

export const QueryStablecoinDebtResponse = {
  encode(message: QueryStablecoinDebtResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stablecoinDebtInfo !== undefined) {
      StablecoinDebtInfo.encode(message.stablecoinDebtInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStablecoinDebtResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStablecoinDebtResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.stablecoinDebtInfo = StablecoinDebtInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryStablecoinDebtResponse {
    return {
      stablecoinDebtInfo: isSet(object.stablecoinDebtInfo)
        ? StablecoinDebtInfo.fromJSON(object.stablecoinDebtInfo)
        : undefined,
    };
  },

  toJSON(message: QueryStablecoinDebtResponse): unknown {
    const obj: any = {};
    message.stablecoinDebtInfo !== undefined && (obj.stablecoinDebtInfo = message.stablecoinDebtInfo
      ? StablecoinDebtInfo.toJSON(message.stablecoinDebtInfo)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryStablecoinDebtResponse>): QueryStablecoinDebtResponse {
    return QueryStablecoinDebtResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryStablecoinDebtResponse>): QueryStablecoinDebtResponse {
    const message = createBaseQueryStablecoinDebtResponse();
    message.stablecoinDebtInfo = (object.stablecoinDebtInfo !== undefined && object.stablecoinDebtInfo !== null)
      ? StablecoinDebtInfo.fromPartial(object.stablecoinDebtInfo)
      : undefined;
    return message;
  },
};

function createBaseCdpPositionItem(): CdpPositionItem {
  return {
    address: "",
    denom: "",
    cibtDenom: "",
    healthFactor: "",
    collateralAmount: "",
    borrowAmount: "",
    mintDenom: "",
    mintAmount: "",
  };
}

export const CdpPositionItem = {
  encode(message: CdpPositionItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.cibtDenom !== "") {
      writer.uint32(26).string(message.cibtDenom);
    }
    if (message.healthFactor !== "") {
      writer.uint32(34).string(message.healthFactor);
    }
    if (message.collateralAmount !== "") {
      writer.uint32(42).string(message.collateralAmount);
    }
    if (message.borrowAmount !== "") {
      writer.uint32(50).string(message.borrowAmount);
    }
    if (message.mintDenom !== "") {
      writer.uint32(58).string(message.mintDenom);
    }
    if (message.mintAmount !== "") {
      writer.uint32(66).string(message.mintAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CdpPositionItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCdpPositionItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.cibtDenom = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.healthFactor = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.collateralAmount = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.borrowAmount = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.mintDenom = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.mintAmount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CdpPositionItem {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      cibtDenom: isSet(object.cibtDenom) ? String(object.cibtDenom) : "",
      healthFactor: isSet(object.healthFactor) ? String(object.healthFactor) : "",
      collateralAmount: isSet(object.collateralAmount) ? String(object.collateralAmount) : "",
      borrowAmount: isSet(object.borrowAmount) ? String(object.borrowAmount) : "",
      mintDenom: isSet(object.mintDenom) ? String(object.mintDenom) : "",
      mintAmount: isSet(object.mintAmount) ? String(object.mintAmount) : "",
    };
  },

  toJSON(message: CdpPositionItem): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.denom !== undefined && (obj.denom = message.denom);
    message.cibtDenom !== undefined && (obj.cibtDenom = message.cibtDenom);
    message.healthFactor !== undefined && (obj.healthFactor = message.healthFactor);
    message.collateralAmount !== undefined && (obj.collateralAmount = message.collateralAmount);
    message.borrowAmount !== undefined && (obj.borrowAmount = message.borrowAmount);
    message.mintDenom !== undefined && (obj.mintDenom = message.mintDenom);
    message.mintAmount !== undefined && (obj.mintAmount = message.mintAmount);
    return obj;
  },

  create(base?: DeepPartial<CdpPositionItem>): CdpPositionItem {
    return CdpPositionItem.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CdpPositionItem>): CdpPositionItem {
    const message = createBaseCdpPositionItem();
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    message.cibtDenom = object.cibtDenom ?? "";
    message.healthFactor = object.healthFactor ?? "";
    message.collateralAmount = object.collateralAmount ?? "";
    message.borrowAmount = object.borrowAmount ?? "";
    message.mintDenom = object.mintDenom ?? "";
    message.mintAmount = object.mintAmount ?? "";
    return message;
  },
};

function createBaseCdpPosition(): CdpPosition {
  return { address: "", healthFactor: "", collateral: [], borrow: [], mint: [] };
}

export const CdpPosition = {
  encode(message: CdpPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.healthFactor !== "") {
      writer.uint32(18).string(message.healthFactor);
    }
    for (const v of message.collateral) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.borrow) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.mint) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CdpPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCdpPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.healthFactor = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.collateral.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.borrow.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.mint.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CdpPosition {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      healthFactor: isSet(object.healthFactor) ? String(object.healthFactor) : "",
      collateral: Array.isArray(object?.collateral) ? object.collateral.map((e: any) => Coin.fromJSON(e)) : [],
      borrow: Array.isArray(object?.borrow) ? object.borrow.map((e: any) => Coin.fromJSON(e)) : [],
      mint: Array.isArray(object?.mint) ? object.mint.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: CdpPosition): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.healthFactor !== undefined && (obj.healthFactor = message.healthFactor);
    if (message.collateral) {
      obj.collateral = message.collateral.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.collateral = [];
    }
    if (message.borrow) {
      obj.borrow = message.borrow.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.borrow = [];
    }
    if (message.mint) {
      obj.mint = message.mint.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.mint = [];
    }
    return obj;
  },

  create(base?: DeepPartial<CdpPosition>): CdpPosition {
    return CdpPosition.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CdpPosition>): CdpPosition {
    const message = createBaseCdpPosition();
    message.address = object.address ?? "";
    message.healthFactor = object.healthFactor ?? "";
    message.collateral = object.collateral?.map((e) => Coin.fromPartial(e)) || [];
    message.borrow = object.borrow?.map((e) => Coin.fromPartial(e)) || [];
    message.mint = object.mint?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryCdpPositionRequest(): QueryCdpPositionRequest {
  return { address: "" };
}

export const QueryCdpPositionRequest = {
  encode(message: QueryCdpPositionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCdpPositionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCdpPositionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCdpPositionRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryCdpPositionRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<QueryCdpPositionRequest>): QueryCdpPositionRequest {
    return QueryCdpPositionRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryCdpPositionRequest>): QueryCdpPositionRequest {
    const message = createBaseQueryCdpPositionRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryCdpPositionResponse(): QueryCdpPositionResponse {
  return { position: undefined };
}

export const QueryCdpPositionResponse = {
  encode(message: QueryCdpPositionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.position !== undefined) {
      CdpPosition.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCdpPositionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCdpPositionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.position = CdpPosition.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCdpPositionResponse {
    return { position: isSet(object.position) ? CdpPosition.fromJSON(object.position) : undefined };
  },

  toJSON(message: QueryCdpPositionResponse): unknown {
    const obj: any = {};
    message.position !== undefined &&
      (obj.position = message.position ? CdpPosition.toJSON(message.position) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryCdpPositionResponse>): QueryCdpPositionResponse {
    return QueryCdpPositionResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryCdpPositionResponse>): QueryCdpPositionResponse {
    const message = createBaseQueryCdpPositionResponse();
    message.position = (object.position !== undefined && object.position !== null)
      ? CdpPosition.fromPartial(object.position)
      : undefined;
    return message;
  },
};

function createBaseQueryCdpPositionsRequest(): QueryCdpPositionsRequest {
  return { pagination: undefined, maxHealthFactor: "", minHealthFactor: "" };
}

export const QueryCdpPositionsRequest = {
  encode(message: QueryCdpPositionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxHealthFactor !== "") {
      writer.uint32(18).string(message.maxHealthFactor);
    }
    if (message.minHealthFactor !== "") {
      writer.uint32(26).string(message.minHealthFactor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCdpPositionsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCdpPositionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.maxHealthFactor = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.minHealthFactor = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCdpPositionsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      maxHealthFactor: isSet(object.maxHealthFactor) ? String(object.maxHealthFactor) : "",
      minHealthFactor: isSet(object.minHealthFactor) ? String(object.minHealthFactor) : "",
    };
  },

  toJSON(message: QueryCdpPositionsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.maxHealthFactor !== undefined && (obj.maxHealthFactor = message.maxHealthFactor);
    message.minHealthFactor !== undefined && (obj.minHealthFactor = message.minHealthFactor);
    return obj;
  },

  create(base?: DeepPartial<QueryCdpPositionsRequest>): QueryCdpPositionsRequest {
    return QueryCdpPositionsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryCdpPositionsRequest>): QueryCdpPositionsRequest {
    const message = createBaseQueryCdpPositionsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    message.maxHealthFactor = object.maxHealthFactor ?? "";
    message.minHealthFactor = object.minHealthFactor ?? "";
    return message;
  },
};

function createBaseQueryCdpPositionsResponse(): QueryCdpPositionsResponse {
  return { positions: [], pagination: undefined };
}

export const QueryCdpPositionsResponse = {
  encode(message: QueryCdpPositionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.positions) {
      CdpPosition.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCdpPositionsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCdpPositionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.positions.push(CdpPosition.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCdpPositionsResponse {
    return {
      positions: Array.isArray(object?.positions) ? object.positions.map((e: any) => CdpPosition.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryCdpPositionsResponse): unknown {
    const obj: any = {};
    if (message.positions) {
      obj.positions = message.positions.map((e) => e ? CdpPosition.toJSON(e) : undefined);
    } else {
      obj.positions = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryCdpPositionsResponse>): QueryCdpPositionsResponse {
    return QueryCdpPositionsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryCdpPositionsResponse>): QueryCdpPositionsResponse {
    const message = createBaseQueryCdpPositionsResponse();
    message.positions = object.positions?.map((e) => CdpPosition.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryRewardSchemesAllRequest(): QueryRewardSchemesAllRequest {
  return { pagination: undefined };
}

export const QueryRewardSchemesAllRequest = {
  encode(message: QueryRewardSchemesAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRewardSchemesAllRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardSchemesAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryRewardSchemesAllRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryRewardSchemesAllRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryRewardSchemesAllRequest>): QueryRewardSchemesAllRequest {
    return QueryRewardSchemesAllRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryRewardSchemesAllRequest>): QueryRewardSchemesAllRequest {
    const message = createBaseQueryRewardSchemesAllRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryRewardSchemesAllResponse(): QueryRewardSchemesAllResponse {
  return { rewardSchemes: [], pagination: undefined };
}

export const QueryRewardSchemesAllResponse = {
  encode(message: QueryRewardSchemesAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewardSchemes) {
      RewardScheme.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRewardSchemesAllResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardSchemesAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rewardSchemes.push(RewardScheme.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryRewardSchemesAllResponse {
    return {
      rewardSchemes: Array.isArray(object?.rewardSchemes)
        ? object.rewardSchemes.map((e: any) => RewardScheme.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryRewardSchemesAllResponse): unknown {
    const obj: any = {};
    if (message.rewardSchemes) {
      obj.rewardSchemes = message.rewardSchemes.map((e) => e ? RewardScheme.toJSON(e) : undefined);
    } else {
      obj.rewardSchemes = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryRewardSchemesAllResponse>): QueryRewardSchemesAllResponse {
    return QueryRewardSchemesAllResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryRewardSchemesAllResponse>): QueryRewardSchemesAllResponse {
    const message = createBaseQueryRewardSchemesAllResponse();
    message.rewardSchemes = object.rewardSchemes?.map((e) => RewardScheme.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryRewardDebtsRequest(): QueryRewardDebtsRequest {
  return { address: "", pagination: undefined };
}

export const QueryRewardDebtsRequest = {
  encode(message: QueryRewardDebtsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRewardDebtsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardDebtsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryRewardDebtsRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryRewardDebtsRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryRewardDebtsRequest>): QueryRewardDebtsRequest {
    return QueryRewardDebtsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryRewardDebtsRequest>): QueryRewardDebtsRequest {
    const message = createBaseQueryRewardDebtsRequest();
    message.address = object.address ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryRewardDebtsResponse(): QueryRewardDebtsResponse {
  return { rewardDebts: [], pagination: undefined };
}

export const QueryRewardDebtsResponse = {
  encode(message: QueryRewardDebtsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewardDebts) {
      RewardDebt.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRewardDebtsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardDebtsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rewardDebts.push(RewardDebt.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryRewardDebtsResponse {
    return {
      rewardDebts: Array.isArray(object?.rewardDebts) ? object.rewardDebts.map((e: any) => RewardDebt.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryRewardDebtsResponse): unknown {
    const obj: any = {};
    if (message.rewardDebts) {
      obj.rewardDebts = message.rewardDebts.map((e) => e ? RewardDebt.toJSON(e) : undefined);
    } else {
      obj.rewardDebts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryRewardDebtsResponse>): QueryRewardDebtsResponse {
    return QueryRewardDebtsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryRewardDebtsResponse>): QueryRewardDebtsResponse {
    const message = createBaseQueryRewardDebtsResponse();
    message.rewardDebts = object.rewardDebts?.map((e) => RewardDebt.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryRewardDebtsAllRequest(): QueryRewardDebtsAllRequest {
  return { pagination: undefined };
}

export const QueryRewardDebtsAllRequest = {
  encode(message: QueryRewardDebtsAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRewardDebtsAllRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardDebtsAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryRewardDebtsAllRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryRewardDebtsAllRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryRewardDebtsAllRequest>): QueryRewardDebtsAllRequest {
    return QueryRewardDebtsAllRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryRewardDebtsAllRequest>): QueryRewardDebtsAllRequest {
    const message = createBaseQueryRewardDebtsAllRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryEModeAllRequest(): QueryEModeAllRequest {
  return { pagination: undefined };
}

export const QueryEModeAllRequest = {
  encode(message: QueryEModeAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEModeAllRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEModeAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryEModeAllRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryEModeAllRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryEModeAllRequest>): QueryEModeAllRequest {
    return QueryEModeAllRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryEModeAllRequest>): QueryEModeAllRequest {
    const message = createBaseQueryEModeAllRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryEModeAllResponse(): QueryEModeAllResponse {
  return { eModeCategories: [], pagination: undefined };
}

export const QueryEModeAllResponse = {
  encode(message: QueryEModeAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.eModeCategories) {
      EModeCategory.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEModeAllResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEModeAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.eModeCategories.push(EModeCategory.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryEModeAllResponse {
    return {
      eModeCategories: Array.isArray(object?.eModeCategories)
        ? object.eModeCategories.map((e: any) => EModeCategory.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryEModeAllResponse): unknown {
    const obj: any = {};
    if (message.eModeCategories) {
      obj.eModeCategories = message.eModeCategories.map((e) => e ? EModeCategory.toJSON(e) : undefined);
    } else {
      obj.eModeCategories = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryEModeAllResponse>): QueryEModeAllResponse {
    return QueryEModeAllResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryEModeAllResponse>): QueryEModeAllResponse {
    const message = createBaseQueryEModeAllResponse();
    message.eModeCategories = object.eModeCategories?.map((e) => EModeCategory.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryStablecoinInterestRequest(): QueryStablecoinInterestRequest {
  return {};
}

export const QueryStablecoinInterestRequest = {
  encode(_: QueryStablecoinInterestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStablecoinInterestRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStablecoinInterestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryStablecoinInterestRequest {
    return {};
  },

  toJSON(_: QueryStablecoinInterestRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryStablecoinInterestRequest>): QueryStablecoinInterestRequest {
    return QueryStablecoinInterestRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryStablecoinInterestRequest>): QueryStablecoinInterestRequest {
    const message = createBaseQueryStablecoinInterestRequest();
    return message;
  },
};

function createBaseQueryStablecoinInterestResponse(): QueryStablecoinInterestResponse {
  return { stablecoinInterestInfo: undefined };
}

export const QueryStablecoinInterestResponse = {
  encode(message: QueryStablecoinInterestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stablecoinInterestInfo !== undefined) {
      StablecoinInterestInfo.encode(message.stablecoinInterestInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStablecoinInterestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStablecoinInterestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.stablecoinInterestInfo = StablecoinInterestInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryStablecoinInterestResponse {
    return {
      stablecoinInterestInfo: isSet(object.stablecoinInterestInfo)
        ? StablecoinInterestInfo.fromJSON(object.stablecoinInterestInfo)
        : undefined,
    };
  },

  toJSON(message: QueryStablecoinInterestResponse): unknown {
    const obj: any = {};
    message.stablecoinInterestInfo !== undefined && (obj.stablecoinInterestInfo = message.stablecoinInterestInfo
      ? StablecoinInterestInfo.toJSON(message.stablecoinInterestInfo)
      : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryStablecoinInterestResponse>): QueryStablecoinInterestResponse {
    return QueryStablecoinInterestResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryStablecoinInterestResponse>): QueryStablecoinInterestResponse {
    const message = createBaseQueryStablecoinInterestResponse();
    message.stablecoinInterestInfo =
      (object.stablecoinInterestInfo !== undefined && object.stablecoinInterestInfo !== null)
        ? StablecoinInterestInfo.fromPartial(object.stablecoinInterestInfo)
        : undefined;
    return message;
  },
};

function createBaseQueryEModeRequest(): QueryEModeRequest {
  return { name: "" };
}

export const QueryEModeRequest = {
  encode(message: QueryEModeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEModeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEModeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryEModeRequest {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: QueryEModeRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create(base?: DeepPartial<QueryEModeRequest>): QueryEModeRequest {
    return QueryEModeRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryEModeRequest>): QueryEModeRequest {
    const message = createBaseQueryEModeRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseQueryEModeResponse(): QueryEModeResponse {
  return { eModeCategory: undefined };
}

export const QueryEModeResponse = {
  encode(message: QueryEModeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eModeCategory !== undefined) {
      EModeCategory.encode(message.eModeCategory, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEModeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEModeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.eModeCategory = EModeCategory.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryEModeResponse {
    return { eModeCategory: isSet(object.eModeCategory) ? EModeCategory.fromJSON(object.eModeCategory) : undefined };
  },

  toJSON(message: QueryEModeResponse): unknown {
    const obj: any = {};
    message.eModeCategory !== undefined &&
      (obj.eModeCategory = message.eModeCategory ? EModeCategory.toJSON(message.eModeCategory) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryEModeResponse>): QueryEModeResponse {
    return QueryEModeResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryEModeResponse>): QueryEModeResponse {
    const message = createBaseQueryEModeResponse();
    message.eModeCategory = (object.eModeCategory !== undefined && object.eModeCategory !== null)
      ? EModeCategory.fromPartial(object.eModeCategory)
      : undefined;
    return message;
  },
};

function createBaseQueryHealthFactorRequest(): QueryHealthFactorRequest {
  return { address: "" };
}

export const QueryHealthFactorRequest = {
  encode(message: QueryHealthFactorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHealthFactorRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHealthFactorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryHealthFactorRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryHealthFactorRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<QueryHealthFactorRequest>): QueryHealthFactorRequest {
    return QueryHealthFactorRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryHealthFactorRequest>): QueryHealthFactorRequest {
    const message = createBaseQueryHealthFactorRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryHealthFactorResponse(): QueryHealthFactorResponse {
  return { healthFactor: "" };
}

export const QueryHealthFactorResponse = {
  encode(message: QueryHealthFactorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.healthFactor !== "") {
      writer.uint32(10).string(message.healthFactor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHealthFactorResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHealthFactorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.healthFactor = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryHealthFactorResponse {
    return { healthFactor: isSet(object.healthFactor) ? String(object.healthFactor) : "" };
  },

  toJSON(message: QueryHealthFactorResponse): unknown {
    const obj: any = {};
    message.healthFactor !== undefined && (obj.healthFactor = message.healthFactor);
    return obj;
  },

  create(base?: DeepPartial<QueryHealthFactorResponse>): QueryHealthFactorResponse {
    return QueryHealthFactorResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryHealthFactorResponse>): QueryHealthFactorResponse {
    const message = createBaseQueryHealthFactorResponse();
    message.healthFactor = object.healthFactor ?? "";
    return message;
  },
};

function createBaseQueryAccountEModeRequest(): QueryAccountEModeRequest {
  return { address: "" };
}

export const QueryAccountEModeRequest = {
  encode(message: QueryAccountEModeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountEModeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountEModeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAccountEModeRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryAccountEModeRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<QueryAccountEModeRequest>): QueryAccountEModeRequest {
    return QueryAccountEModeRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAccountEModeRequest>): QueryAccountEModeRequest {
    const message = createBaseQueryAccountEModeRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryAccountEModeResponse(): QueryAccountEModeResponse {
  return { eModeCategoryName: "" };
}

export const QueryAccountEModeResponse = {
  encode(message: QueryAccountEModeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eModeCategoryName !== "") {
      writer.uint32(10).string(message.eModeCategoryName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountEModeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountEModeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.eModeCategoryName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAccountEModeResponse {
    return { eModeCategoryName: isSet(object.eModeCategoryName) ? String(object.eModeCategoryName) : "" };
  },

  toJSON(message: QueryAccountEModeResponse): unknown {
    const obj: any = {};
    message.eModeCategoryName !== undefined && (obj.eModeCategoryName = message.eModeCategoryName);
    return obj;
  },

  create(base?: DeepPartial<QueryAccountEModeResponse>): QueryAccountEModeResponse {
    return QueryAccountEModeResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAccountEModeResponse>): QueryAccountEModeResponse {
    const message = createBaseQueryAccountEModeResponse();
    message.eModeCategoryName = object.eModeCategoryName ?? "";
    return message;
  },
};

function createBaseQueryCDPLiquidationsAllRequest(): QueryCDPLiquidationsAllRequest {
  return { pagination: undefined };
}

export const QueryCDPLiquidationsAllRequest = {
  encode(message: QueryCDPLiquidationsAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCDPLiquidationsAllRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCDPLiquidationsAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCDPLiquidationsAllRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryCDPLiquidationsAllRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryCDPLiquidationsAllRequest>): QueryCDPLiquidationsAllRequest {
    return QueryCDPLiquidationsAllRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryCDPLiquidationsAllRequest>): QueryCDPLiquidationsAllRequest {
    const message = createBaseQueryCDPLiquidationsAllRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryCDPLiquidationsAllResponse(): QueryCDPLiquidationsAllResponse {
  return { cdpLiquidationsAll: [], pagination: undefined };
}

export const QueryCDPLiquidationsAllResponse = {
  encode(message: QueryCDPLiquidationsAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.cdpLiquidationsAll) {
      CDPLiquidations.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCDPLiquidationsAllResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCDPLiquidationsAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cdpLiquidationsAll.push(CDPLiquidations.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCDPLiquidationsAllResponse {
    return {
      cdpLiquidationsAll: Array.isArray(object?.cdpLiquidationsAll)
        ? object.cdpLiquidationsAll.map((e: any) => CDPLiquidations.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryCDPLiquidationsAllResponse): unknown {
    const obj: any = {};
    if (message.cdpLiquidationsAll) {
      obj.cdpLiquidationsAll = message.cdpLiquidationsAll.map((e) => e ? CDPLiquidations.toJSON(e) : undefined);
    } else {
      obj.cdpLiquidationsAll = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryCDPLiquidationsAllResponse>): QueryCDPLiquidationsAllResponse {
    return QueryCDPLiquidationsAllResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryCDPLiquidationsAllResponse>): QueryCDPLiquidationsAllResponse {
    const message = createBaseQueryCDPLiquidationsAllResponse();
    message.cdpLiquidationsAll = object.cdpLiquidationsAll?.map((e) => CDPLiquidations.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGlpTransferAllRequest(): QueryGlpTransferAllRequest {
  return { pagination: undefined };
}

export const QueryGlpTransferAllRequest = {
  encode(message: QueryGlpTransferAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGlpTransferAllRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGlpTransferAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGlpTransferAllRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryGlpTransferAllRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryGlpTransferAllRequest>): QueryGlpTransferAllRequest {
    return QueryGlpTransferAllRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGlpTransferAllRequest>): QueryGlpTransferAllRequest {
    const message = createBaseQueryGlpTransferAllRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGlpTransferAllResponse(): QueryGlpTransferAllResponse {
  return { glpTransfersAll: [], pagination: undefined };
}

export const QueryGlpTransferAllResponse = {
  encode(message: QueryGlpTransferAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.glpTransfersAll) {
      GlpTransferRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGlpTransferAllResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGlpTransferAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.glpTransfersAll.push(GlpTransferRecord.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGlpTransferAllResponse {
    return {
      glpTransfersAll: Array.isArray(object?.glpTransfersAll)
        ? object.glpTransfersAll.map((e: any) => GlpTransferRecord.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryGlpTransferAllResponse): unknown {
    const obj: any = {};
    if (message.glpTransfersAll) {
      obj.glpTransfersAll = message.glpTransfersAll.map((e) => e ? GlpTransferRecord.toJSON(e) : undefined);
    } else {
      obj.glpTransfersAll = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryGlpTransferAllResponse>): QueryGlpTransferAllResponse {
    return QueryGlpTransferAllResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryGlpTransferAllResponse>): QueryGlpTransferAllResponse {
    const message = createBaseQueryGlpTransferAllResponse();
    message.glpTransfersAll = object.glpTransfersAll?.map((e) => GlpTransferRecord.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryNLendConversionsAllRequest(): QueryNLendConversionsAllRequest {
  return { pagination: undefined };
}

export const QueryNLendConversionsAllRequest = {
  encode(message: QueryNLendConversionsAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNLendConversionsAllRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNLendConversionsAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryNLendConversionsAllRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryNLendConversionsAllRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryNLendConversionsAllRequest>): QueryNLendConversionsAllRequest {
    return QueryNLendConversionsAllRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryNLendConversionsAllRequest>): QueryNLendConversionsAllRequest {
    const message = createBaseQueryNLendConversionsAllRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryNLendConversionsAllResponse(): QueryNLendConversionsAllResponse {
  return { nlendConversions: [], pagination: undefined };
}

export const QueryNLendConversionsAllResponse = {
  encode(message: QueryNLendConversionsAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.nlendConversions) {
      NLendConversionRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNLendConversionsAllResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNLendConversionsAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nlendConversions.push(NLendConversionRecord.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryNLendConversionsAllResponse {
    return {
      nlendConversions: Array.isArray(object?.nlendConversions)
        ? object.nlendConversions.map((e: any) => NLendConversionRecord.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryNLendConversionsAllResponse): unknown {
    const obj: any = {};
    if (message.nlendConversions) {
      obj.nlendConversions = message.nlendConversions.map((e) => e ? NLendConversionRecord.toJSON(e) : undefined);
    } else {
      obj.nlendConversions = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryNLendConversionsAllResponse>): QueryNLendConversionsAllResponse {
    return QueryNLendConversionsAllResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryNLendConversionsAllResponse>): QueryNLendConversionsAllResponse {
    const message = createBaseQueryNLendConversionsAllResponse();
    message.nlendConversions = object.nlendConversions?.map((e) => NLendConversionRecord.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryNLendConversionRequest(): QueryNLendConversionRequest {
  return { address: "" };
}

export const QueryNLendConversionRequest = {
  encode(message: QueryNLendConversionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNLendConversionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNLendConversionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryNLendConversionRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryNLendConversionRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<QueryNLendConversionRequest>): QueryNLendConversionRequest {
    return QueryNLendConversionRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryNLendConversionRequest>): QueryNLendConversionRequest {
    const message = createBaseQueryNLendConversionRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryNLendConversionResponse(): QueryNLendConversionResponse {
  return { nlendConversions: [] };
}

export const QueryNLendConversionResponse = {
  encode(message: QueryNLendConversionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.nlendConversions) {
      NLendConversionRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNLendConversionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNLendConversionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nlendConversions.push(NLendConversionRecord.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryNLendConversionResponse {
    return {
      nlendConversions: Array.isArray(object?.nlendConversions)
        ? object.nlendConversions.map((e: any) => NLendConversionRecord.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryNLendConversionResponse): unknown {
    const obj: any = {};
    if (message.nlendConversions) {
      obj.nlendConversions = message.nlendConversions.map((e) => e ? NLendConversionRecord.toJSON(e) : undefined);
    } else {
      obj.nlendConversions = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryNLendConversionResponse>): QueryNLendConversionResponse {
    return QueryNLendConversionResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryNLendConversionResponse>): QueryNLendConversionResponse {
    const message = createBaseQueryNLendConversionResponse();
    message.nlendConversions = object.nlendConversions?.map((e) => NLendConversionRecord.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryLiquidationProtectionAllRequest(): QueryLiquidationProtectionAllRequest {
  return { pagination: undefined };
}

export const QueryLiquidationProtectionAllRequest = {
  encode(message: QueryLiquidationProtectionAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidationProtectionAllRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidationProtectionAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryLiquidationProtectionAllRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryLiquidationProtectionAllRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryLiquidationProtectionAllRequest>): QueryLiquidationProtectionAllRequest {
    return QueryLiquidationProtectionAllRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryLiquidationProtectionAllRequest>): QueryLiquidationProtectionAllRequest {
    const message = createBaseQueryLiquidationProtectionAllRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryLiquidationProtectionAllResponse(): QueryLiquidationProtectionAllResponse {
  return { addresses: [], pagination: undefined };
}

export const QueryLiquidationProtectionAllResponse = {
  encode(message: QueryLiquidationProtectionAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLiquidationProtectionAllResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidationProtectionAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.addresses.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryLiquidationProtectionAllResponse {
    return {
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryLiquidationProtectionAllResponse): unknown {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryLiquidationProtectionAllResponse>): QueryLiquidationProtectionAllResponse {
    return QueryLiquidationProtectionAllResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryLiquidationProtectionAllResponse>): QueryLiquidationProtectionAllResponse {
    const message = createBaseQueryLiquidationProtectionAllResponse();
    message.addresses = object.addresses?.map((e) => e) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a RateStrategy item. */
  RateStrategy(request: QueryRateStrategyRequest): Promise<QueryRateStrategyResponse>;
  /** Queries a list of RateStrategy items. */
  RateStrategyAll(request: QueryRateStrategyAllRequest): Promise<QueryRateStrategyAllResponse>;
  /** Queries a AccountData items. */
  AccountData(request: QueryAccountDataRequest): Promise<QueryAccountDataResponse>;
  /** Queries a list of AccountCollateral items. */
  AccountCollateral(request: QueryAccountCollateralRequest): Promise<QueryAccountCollateralResponse>;
  /** Queries a list of AccountCollaterals items. */
  AccountCollateralAll(request: QueryAccountCollateralAllRequest): Promise<QueryAccountCollateralAllResponse>;
  /** Queries a list of AccountDebt items. */
  AccountDebt(request: QueryAccountDebtRequest): Promise<QueryAccountDebtResponse>;
  /** Queries a list of AccountDebtAll items. */
  AccountDebtAll(request: QueryAccountDebtAllRequest): Promise<QueryAccountDebtAllResponse>;
  /** Queries a list of AccountStablecoin items. */
  AccountStablecoin(request: QueryAccountStablecoinRequest): Promise<QueryAccountStablecoinResponse>;
  /** Queries a list of Asset items. */
  Asset(request: QueryAssetRequest): Promise<QueryAssetResponse>;
  /** Queries a list of AssetsAll items. */
  AssetAll(request: QueryAssetAllRequest): Promise<QueryAssetAllResponse>;
  /**
   * AssetLoans queries all users' loans (amount returned in cibt denom) for
   * an asset (in underlying denom)
   */
  AssetLoans(request: QueryAssetLoansRequest): Promise<QueryAssetLoansResponse>;
  /** Queries a list of TokenDebt items. */
  TokenDebt(request: QueryTokenDebtRequest): Promise<QueryTokenDebtResponse>;
  /** Queries a list of TokenDebtsAll items. */
  TokenDebtAll(request: QueryTokenDebtAllRequest): Promise<QueryTokenDebtAllResponse>;
  /** Queries a list of StablecoinDebt items. */
  StablecoinDebt(request: QueryStablecoinDebtRequest): Promise<QueryStablecoinDebtResponse>;
  /** Queries a list of all RewardSchemes. */
  RewardSchemesAll(request: QueryRewardSchemesAllRequest): Promise<QueryRewardSchemesAllResponse>;
  /** Queries a list of RewardDebt items for an address */
  RewardDebts(request: QueryRewardDebtsRequest): Promise<QueryRewardDebtsResponse>;
  /** Queries a list of all RewardDebts */
  RewardDebtsAll(request: QueryRewardDebtsAllRequest): Promise<QueryRewardDebtsResponse>;
  /** Queries a list of CDP Positions */
  PositionsAll(request: QueryCdpPositionsRequest): Promise<QueryCdpPositionsResponse>;
  Position(request: QueryCdpPositionRequest): Promise<QueryCdpPositionResponse>;
  HealthFactor(request: QueryHealthFactorRequest): Promise<QueryHealthFactorResponse>;
  /** Queries a list of EMode items. */
  EMode(request: QueryEModeRequest): Promise<QueryEModeResponse>;
  /** Queries a list of EModeAll items. */
  EModeAll(request: QueryEModeAllRequest): Promise<QueryEModeAllResponse>;
  /** Queries a list of AccountEMode items. */
  AccountEMode(request: QueryAccountEModeRequest): Promise<QueryAccountEModeResponse>;
  /** Queries StablecoinInterest. */
  StablecoinInterest(request: QueryStablecoinInterestRequest): Promise<QueryStablecoinInterestResponse>;
  /** Queries a list of CDPLiquidations items. */
  CDPLiquidationsAll(request: QueryCDPLiquidationsAllRequest): Promise<QueryCDPLiquidationsAllResponse>;
  /**
   * For nlend migration to keep and store all the glp that was retrieved from
   * all users
   */
  GlpTransfersAll(request: QueryGlpTransferAllRequest): Promise<QueryGlpTransferAllResponse>;
  NLendConversionsAll(request: QueryNLendConversionsAllRequest): Promise<QueryNLendConversionsAllResponse>;
  NLendConversion(request: QueryNLendConversionRequest): Promise<QueryNLendConversionResponse>;
  AllLiquidationProtectedAccounts(
    request: QueryLiquidationProtectionAllRequest,
  ): Promise<QueryLiquidationProtectionAllResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Switcheo.carbon.cdp.Query";
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.RateStrategy = this.RateStrategy.bind(this);
    this.RateStrategyAll = this.RateStrategyAll.bind(this);
    this.AccountData = this.AccountData.bind(this);
    this.AccountCollateral = this.AccountCollateral.bind(this);
    this.AccountCollateralAll = this.AccountCollateralAll.bind(this);
    this.AccountDebt = this.AccountDebt.bind(this);
    this.AccountDebtAll = this.AccountDebtAll.bind(this);
    this.AccountStablecoin = this.AccountStablecoin.bind(this);
    this.Asset = this.Asset.bind(this);
    this.AssetAll = this.AssetAll.bind(this);
    this.AssetLoans = this.AssetLoans.bind(this);
    this.TokenDebt = this.TokenDebt.bind(this);
    this.TokenDebtAll = this.TokenDebtAll.bind(this);
    this.StablecoinDebt = this.StablecoinDebt.bind(this);
    this.RewardSchemesAll = this.RewardSchemesAll.bind(this);
    this.RewardDebts = this.RewardDebts.bind(this);
    this.RewardDebtsAll = this.RewardDebtsAll.bind(this);
    this.PositionsAll = this.PositionsAll.bind(this);
    this.Position = this.Position.bind(this);
    this.HealthFactor = this.HealthFactor.bind(this);
    this.EMode = this.EMode.bind(this);
    this.EModeAll = this.EModeAll.bind(this);
    this.AccountEMode = this.AccountEMode.bind(this);
    this.StablecoinInterest = this.StablecoinInterest.bind(this);
    this.CDPLiquidationsAll = this.CDPLiquidationsAll.bind(this);
    this.GlpTransfersAll = this.GlpTransfersAll.bind(this);
    this.NLendConversionsAll = this.NLendConversionsAll.bind(this);
    this.NLendConversion = this.NLendConversion.bind(this);
    this.AllLiquidationProtectedAccounts = this.AllLiquidationProtectedAccounts.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  RateStrategy(request: QueryRateStrategyRequest): Promise<QueryRateStrategyResponse> {
    const data = QueryRateStrategyRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RateStrategy", data);
    return promise.then((data) => QueryRateStrategyResponse.decode(_m0.Reader.create(data)));
  }

  RateStrategyAll(request: QueryRateStrategyAllRequest): Promise<QueryRateStrategyAllResponse> {
    const data = QueryRateStrategyAllRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RateStrategyAll", data);
    return promise.then((data) => QueryRateStrategyAllResponse.decode(_m0.Reader.create(data)));
  }

  AccountData(request: QueryAccountDataRequest): Promise<QueryAccountDataResponse> {
    const data = QueryAccountDataRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AccountData", data);
    return promise.then((data) => QueryAccountDataResponse.decode(_m0.Reader.create(data)));
  }

  AccountCollateral(request: QueryAccountCollateralRequest): Promise<QueryAccountCollateralResponse> {
    const data = QueryAccountCollateralRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AccountCollateral", data);
    return promise.then((data) => QueryAccountCollateralResponse.decode(_m0.Reader.create(data)));
  }

  AccountCollateralAll(request: QueryAccountCollateralAllRequest): Promise<QueryAccountCollateralAllResponse> {
    const data = QueryAccountCollateralAllRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AccountCollateralAll", data);
    return promise.then((data) => QueryAccountCollateralAllResponse.decode(_m0.Reader.create(data)));
  }

  AccountDebt(request: QueryAccountDebtRequest): Promise<QueryAccountDebtResponse> {
    const data = QueryAccountDebtRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AccountDebt", data);
    return promise.then((data) => QueryAccountDebtResponse.decode(_m0.Reader.create(data)));
  }

  AccountDebtAll(request: QueryAccountDebtAllRequest): Promise<QueryAccountDebtAllResponse> {
    const data = QueryAccountDebtAllRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AccountDebtAll", data);
    return promise.then((data) => QueryAccountDebtAllResponse.decode(_m0.Reader.create(data)));
  }

  AccountStablecoin(request: QueryAccountStablecoinRequest): Promise<QueryAccountStablecoinResponse> {
    const data = QueryAccountStablecoinRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AccountStablecoin", data);
    return promise.then((data) => QueryAccountStablecoinResponse.decode(_m0.Reader.create(data)));
  }

  Asset(request: QueryAssetRequest): Promise<QueryAssetResponse> {
    const data = QueryAssetRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Asset", data);
    return promise.then((data) => QueryAssetResponse.decode(_m0.Reader.create(data)));
  }

  AssetAll(request: QueryAssetAllRequest): Promise<QueryAssetAllResponse> {
    const data = QueryAssetAllRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AssetAll", data);
    return promise.then((data) => QueryAssetAllResponse.decode(_m0.Reader.create(data)));
  }

  AssetLoans(request: QueryAssetLoansRequest): Promise<QueryAssetLoansResponse> {
    const data = QueryAssetLoansRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AssetLoans", data);
    return promise.then((data) => QueryAssetLoansResponse.decode(_m0.Reader.create(data)));
  }

  TokenDebt(request: QueryTokenDebtRequest): Promise<QueryTokenDebtResponse> {
    const data = QueryTokenDebtRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "TokenDebt", data);
    return promise.then((data) => QueryTokenDebtResponse.decode(_m0.Reader.create(data)));
  }

  TokenDebtAll(request: QueryTokenDebtAllRequest): Promise<QueryTokenDebtAllResponse> {
    const data = QueryTokenDebtAllRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "TokenDebtAll", data);
    return promise.then((data) => QueryTokenDebtAllResponse.decode(_m0.Reader.create(data)));
  }

  StablecoinDebt(request: QueryStablecoinDebtRequest): Promise<QueryStablecoinDebtResponse> {
    const data = QueryStablecoinDebtRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "StablecoinDebt", data);
    return promise.then((data) => QueryStablecoinDebtResponse.decode(_m0.Reader.create(data)));
  }

  RewardSchemesAll(request: QueryRewardSchemesAllRequest): Promise<QueryRewardSchemesAllResponse> {
    const data = QueryRewardSchemesAllRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RewardSchemesAll", data);
    return promise.then((data) => QueryRewardSchemesAllResponse.decode(_m0.Reader.create(data)));
  }

  RewardDebts(request: QueryRewardDebtsRequest): Promise<QueryRewardDebtsResponse> {
    const data = QueryRewardDebtsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RewardDebts", data);
    return promise.then((data) => QueryRewardDebtsResponse.decode(_m0.Reader.create(data)));
  }

  RewardDebtsAll(request: QueryRewardDebtsAllRequest): Promise<QueryRewardDebtsResponse> {
    const data = QueryRewardDebtsAllRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RewardDebtsAll", data);
    return promise.then((data) => QueryRewardDebtsResponse.decode(_m0.Reader.create(data)));
  }

  PositionsAll(request: QueryCdpPositionsRequest): Promise<QueryCdpPositionsResponse> {
    const data = QueryCdpPositionsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PositionsAll", data);
    return promise.then((data) => QueryCdpPositionsResponse.decode(_m0.Reader.create(data)));
  }

  Position(request: QueryCdpPositionRequest): Promise<QueryCdpPositionResponse> {
    const data = QueryCdpPositionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Position", data);
    return promise.then((data) => QueryCdpPositionResponse.decode(_m0.Reader.create(data)));
  }

  HealthFactor(request: QueryHealthFactorRequest): Promise<QueryHealthFactorResponse> {
    const data = QueryHealthFactorRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "HealthFactor", data);
    return promise.then((data) => QueryHealthFactorResponse.decode(_m0.Reader.create(data)));
  }

  EMode(request: QueryEModeRequest): Promise<QueryEModeResponse> {
    const data = QueryEModeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "EMode", data);
    return promise.then((data) => QueryEModeResponse.decode(_m0.Reader.create(data)));
  }

  EModeAll(request: QueryEModeAllRequest): Promise<QueryEModeAllResponse> {
    const data = QueryEModeAllRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "EModeAll", data);
    return promise.then((data) => QueryEModeAllResponse.decode(_m0.Reader.create(data)));
  }

  AccountEMode(request: QueryAccountEModeRequest): Promise<QueryAccountEModeResponse> {
    const data = QueryAccountEModeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AccountEMode", data);
    return promise.then((data) => QueryAccountEModeResponse.decode(_m0.Reader.create(data)));
  }

  StablecoinInterest(request: QueryStablecoinInterestRequest): Promise<QueryStablecoinInterestResponse> {
    const data = QueryStablecoinInterestRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "StablecoinInterest", data);
    return promise.then((data) => QueryStablecoinInterestResponse.decode(_m0.Reader.create(data)));
  }

  CDPLiquidationsAll(request: QueryCDPLiquidationsAllRequest): Promise<QueryCDPLiquidationsAllResponse> {
    const data = QueryCDPLiquidationsAllRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CDPLiquidationsAll", data);
    return promise.then((data) => QueryCDPLiquidationsAllResponse.decode(_m0.Reader.create(data)));
  }

  GlpTransfersAll(request: QueryGlpTransferAllRequest): Promise<QueryGlpTransferAllResponse> {
    const data = QueryGlpTransferAllRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GlpTransfersAll", data);
    return promise.then((data) => QueryGlpTransferAllResponse.decode(_m0.Reader.create(data)));
  }

  NLendConversionsAll(request: QueryNLendConversionsAllRequest): Promise<QueryNLendConversionsAllResponse> {
    const data = QueryNLendConversionsAllRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "NLendConversionsAll", data);
    return promise.then((data) => QueryNLendConversionsAllResponse.decode(_m0.Reader.create(data)));
  }

  NLendConversion(request: QueryNLendConversionRequest): Promise<QueryNLendConversionResponse> {
    const data = QueryNLendConversionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "NLendConversion", data);
    return promise.then((data) => QueryNLendConversionResponse.decode(_m0.Reader.create(data)));
  }

  AllLiquidationProtectedAccounts(
    request: QueryLiquidationProtectionAllRequest,
  ): Promise<QueryLiquidationProtectionAllResponse> {
    const data = QueryLiquidationProtectionAllRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllLiquidationProtectedAccounts", data);
    return promise.then((data) => QueryLiquidationProtectionAllResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
