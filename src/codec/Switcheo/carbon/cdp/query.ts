/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { RateStrategyParams } from "./rate_strategy_params";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { AssetParamsAPI } from "./asset_params";
import { DebtInfo } from "./debt_info";
import { StablecoinDebtInfo } from "./stablecoin_debt_info";
import { StablecoinInterestInfo } from "./stablecoin_interest_info";
import { EModeCategory } from "./e_mode_category";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { RewardScheme, RewardDebt } from "./reward_scheme";
import { CDPLiquidations } from "./cdp_liquidations";

export const protobufPackage = "Switcheo.carbon.cdp";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

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

export interface QueryStablecoinDebtRequest {}

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

export interface QueryStablecoinInterestRequest {}

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

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(
    _: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromJSON(object.params)
        : undefined;
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

const baseQueryRateStrategyRequest: object = { name: "" };

export const QueryRateStrategyRequest = {
  encode(
    message: QueryRateStrategyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRateStrategyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRateStrategyRequest,
    } as QueryRateStrategyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRateStrategyRequest {
    const message = {
      ...baseQueryRateStrategyRequest,
    } as QueryRateStrategyRequest;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    return message;
  },

  toJSON(message: QueryRateStrategyRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRateStrategyRequest>
  ): QueryRateStrategyRequest {
    const message = {
      ...baseQueryRateStrategyRequest,
    } as QueryRateStrategyRequest;
    message.name = object.name ?? "";
    return message;
  },
};

const baseQueryRateStrategyResponse: object = {};

export const QueryRateStrategyResponse = {
  encode(
    message: QueryRateStrategyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rateStrategyParams !== undefined) {
      RateStrategyParams.encode(
        message.rateStrategyParams,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRateStrategyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRateStrategyResponse,
    } as QueryRateStrategyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rateStrategyParams = RateStrategyParams.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRateStrategyResponse {
    const message = {
      ...baseQueryRateStrategyResponse,
    } as QueryRateStrategyResponse;
    message.rateStrategyParams =
      object.rateStrategyParams !== undefined &&
      object.rateStrategyParams !== null
        ? RateStrategyParams.fromJSON(object.rateStrategyParams)
        : undefined;
    return message;
  },

  toJSON(message: QueryRateStrategyResponse): unknown {
    const obj: any = {};
    message.rateStrategyParams !== undefined &&
      (obj.rateStrategyParams = message.rateStrategyParams
        ? RateStrategyParams.toJSON(message.rateStrategyParams)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRateStrategyResponse>
  ): QueryRateStrategyResponse {
    const message = {
      ...baseQueryRateStrategyResponse,
    } as QueryRateStrategyResponse;
    message.rateStrategyParams =
      object.rateStrategyParams !== undefined &&
      object.rateStrategyParams !== null
        ? RateStrategyParams.fromPartial(object.rateStrategyParams)
        : undefined;
    return message;
  },
};

const baseQueryRateStrategyAllRequest: object = {};

export const QueryRateStrategyAllRequest = {
  encode(
    message: QueryRateStrategyAllRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRateStrategyAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRateStrategyAllRequest,
    } as QueryRateStrategyAllRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRateStrategyAllRequest {
    const message = {
      ...baseQueryRateStrategyAllRequest,
    } as QueryRateStrategyAllRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryRateStrategyAllRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRateStrategyAllRequest>
  ): QueryRateStrategyAllRequest {
    const message = {
      ...baseQueryRateStrategyAllRequest,
    } as QueryRateStrategyAllRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryRateStrategyAllResponse: object = {};

export const QueryRateStrategyAllResponse = {
  encode(
    message: QueryRateStrategyAllResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.rateStrategyParamsAll) {
      RateStrategyParams.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRateStrategyAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRateStrategyAllResponse,
    } as QueryRateStrategyAllResponse;
    message.rateStrategyParamsAll = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rateStrategyParamsAll.push(
            RateStrategyParams.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRateStrategyAllResponse {
    const message = {
      ...baseQueryRateStrategyAllResponse,
    } as QueryRateStrategyAllResponse;
    message.rateStrategyParamsAll = (object.rateStrategyParamsAll ?? []).map(
      (e: any) => RateStrategyParams.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
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
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRateStrategyAllResponse>
  ): QueryRateStrategyAllResponse {
    const message = {
      ...baseQueryRateStrategyAllResponse,
    } as QueryRateStrategyAllResponse;
    message.rateStrategyParamsAll = (object.rateStrategyParamsAll ?? []).map(
      (e) => RateStrategyParams.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAccountDataRequest: object = { address: "" };

export const QueryAccountDataRequest = {
  encode(
    message: QueryAccountDataRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAccountDataRequest,
    } as QueryAccountDataRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountDataRequest {
    const message = {
      ...baseQueryAccountDataRequest,
    } as QueryAccountDataRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: QueryAccountDataRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAccountDataRequest>
  ): QueryAccountDataRequest {
    const message = {
      ...baseQueryAccountDataRequest,
    } as QueryAccountDataRequest;
    message.address = object.address ?? "";
    return message;
  },
};

const baseQueryAccountDataResponse: object = {
  totalCollateralsUsd: "",
  totalDebtsUsd: "",
  availableBorrowsUsd: "",
  currLiquidationThreshold: "",
};

export const QueryAccountDataResponse = {
  encode(
    message: QueryAccountDataResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAccountDataResponse,
    } as QueryAccountDataResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalCollateralsUsd = reader.string();
          break;
        case 2:
          message.totalDebtsUsd = reader.string();
          break;
        case 3:
          message.availableBorrowsUsd = reader.string();
          break;
        case 4:
          message.currLiquidationThreshold = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountDataResponse {
    const message = {
      ...baseQueryAccountDataResponse,
    } as QueryAccountDataResponse;
    message.totalCollateralsUsd =
      object.totalCollateralsUsd !== undefined &&
      object.totalCollateralsUsd !== null
        ? String(object.totalCollateralsUsd)
        : "";
    message.totalDebtsUsd =
      object.totalDebtsUsd !== undefined && object.totalDebtsUsd !== null
        ? String(object.totalDebtsUsd)
        : "";
    message.availableBorrowsUsd =
      object.availableBorrowsUsd !== undefined &&
      object.availableBorrowsUsd !== null
        ? String(object.availableBorrowsUsd)
        : "";
    message.currLiquidationThreshold =
      object.currLiquidationThreshold !== undefined &&
      object.currLiquidationThreshold !== null
        ? String(object.currLiquidationThreshold)
        : "";
    return message;
  },

  toJSON(message: QueryAccountDataResponse): unknown {
    const obj: any = {};
    message.totalCollateralsUsd !== undefined &&
      (obj.totalCollateralsUsd = message.totalCollateralsUsd);
    message.totalDebtsUsd !== undefined &&
      (obj.totalDebtsUsd = message.totalDebtsUsd);
    message.availableBorrowsUsd !== undefined &&
      (obj.availableBorrowsUsd = message.availableBorrowsUsd);
    message.currLiquidationThreshold !== undefined &&
      (obj.currLiquidationThreshold = message.currLiquidationThreshold);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAccountDataResponse>
  ): QueryAccountDataResponse {
    const message = {
      ...baseQueryAccountDataResponse,
    } as QueryAccountDataResponse;
    message.totalCollateralsUsd = object.totalCollateralsUsd ?? "";
    message.totalDebtsUsd = object.totalDebtsUsd ?? "";
    message.availableBorrowsUsd = object.availableBorrowsUsd ?? "";
    message.currLiquidationThreshold = object.currLiquidationThreshold ?? "";
    return message;
  },
};

const baseQueryAccountCollateralRequest: object = {
  address: "",
  cibtDenom: "",
};

export const QueryAccountCollateralRequest = {
  encode(
    message: QueryAccountCollateralRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.cibtDenom !== "") {
      writer.uint32(18).string(message.cibtDenom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountCollateralRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAccountCollateralRequest,
    } as QueryAccountCollateralRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.cibtDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountCollateralRequest {
    const message = {
      ...baseQueryAccountCollateralRequest,
    } as QueryAccountCollateralRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.cibtDenom =
      object.cibtDenom !== undefined && object.cibtDenom !== null
        ? String(object.cibtDenom)
        : "";
    return message;
  },

  toJSON(message: QueryAccountCollateralRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.cibtDenom !== undefined && (obj.cibtDenom = message.cibtDenom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAccountCollateralRequest>
  ): QueryAccountCollateralRequest {
    const message = {
      ...baseQueryAccountCollateralRequest,
    } as QueryAccountCollateralRequest;
    message.address = object.address ?? "";
    message.cibtDenom = object.cibtDenom ?? "";
    return message;
  },
};

const baseQueryAccountCollateralResponse: object = {};

export const QueryAccountCollateralResponse = {
  encode(
    message: QueryAccountCollateralResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collateral !== undefined) {
      Collateral.encode(message.collateral, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountCollateralResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAccountCollateralResponse,
    } as QueryAccountCollateralResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collateral = Collateral.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountCollateralResponse {
    const message = {
      ...baseQueryAccountCollateralResponse,
    } as QueryAccountCollateralResponse;
    message.collateral =
      object.collateral !== undefined && object.collateral !== null
        ? Collateral.fromJSON(object.collateral)
        : undefined;
    return message;
  },

  toJSON(message: QueryAccountCollateralResponse): unknown {
    const obj: any = {};
    message.collateral !== undefined &&
      (obj.collateral = message.collateral
        ? Collateral.toJSON(message.collateral)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAccountCollateralResponse>
  ): QueryAccountCollateralResponse {
    const message = {
      ...baseQueryAccountCollateralResponse,
    } as QueryAccountCollateralResponse;
    message.collateral =
      object.collateral !== undefined && object.collateral !== null
        ? Collateral.fromPartial(object.collateral)
        : undefined;
    return message;
  },
};

const baseQueryAccountCollateralAllRequest: object = { address: "" };

export const QueryAccountCollateralAllRequest = {
  encode(
    message: QueryAccountCollateralAllRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountCollateralAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAccountCollateralAllRequest,
    } as QueryAccountCollateralAllRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountCollateralAllRequest {
    const message = {
      ...baseQueryAccountCollateralAllRequest,
    } as QueryAccountCollateralAllRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAccountCollateralAllRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAccountCollateralAllRequest>
  ): QueryAccountCollateralAllRequest {
    const message = {
      ...baseQueryAccountCollateralAllRequest,
    } as QueryAccountCollateralAllRequest;
    message.address = object.address ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAccountCollateralAllResponse: object = {};

export const QueryAccountCollateralAllResponse = {
  encode(
    message: QueryAccountCollateralAllResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.collaterals) {
      Collateral.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountCollateralAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAccountCollateralAllResponse,
    } as QueryAccountCollateralAllResponse;
    message.collaterals = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collaterals.push(Collateral.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountCollateralAllResponse {
    const message = {
      ...baseQueryAccountCollateralAllResponse,
    } as QueryAccountCollateralAllResponse;
    message.collaterals = (object.collaterals ?? []).map((e: any) =>
      Collateral.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAccountCollateralAllResponse): unknown {
    const obj: any = {};
    if (message.collaterals) {
      obj.collaterals = message.collaterals.map((e) =>
        e ? Collateral.toJSON(e) : undefined
      );
    } else {
      obj.collaterals = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAccountCollateralAllResponse>
  ): QueryAccountCollateralAllResponse {
    const message = {
      ...baseQueryAccountCollateralAllResponse,
    } as QueryAccountCollateralAllResponse;
    message.collaterals = (object.collaterals ?? []).map((e) =>
      Collateral.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseCollateral: object = {
  denom: "",
  cibtDenom: "",
  collateralAmount: "",
};

export const Collateral = {
  encode(
    message: Collateral,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCollateral } as Collateral;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.cibtDenom = reader.string();
          break;
        case 3:
          message.collateralAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Collateral {
    const message = { ...baseCollateral } as Collateral;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.cibtDenom =
      object.cibtDenom !== undefined && object.cibtDenom !== null
        ? String(object.cibtDenom)
        : "";
    message.collateralAmount =
      object.collateralAmount !== undefined && object.collateralAmount !== null
        ? String(object.collateralAmount)
        : "";
    return message;
  },

  toJSON(message: Collateral): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.cibtDenom !== undefined && (obj.cibtDenom = message.cibtDenom);
    message.collateralAmount !== undefined &&
      (obj.collateralAmount = message.collateralAmount);
    return obj;
  },

  fromPartial(object: DeepPartial<Collateral>): Collateral {
    const message = { ...baseCollateral } as Collateral;
    message.denom = object.denom ?? "";
    message.cibtDenom = object.cibtDenom ?? "";
    message.collateralAmount = object.collateralAmount ?? "";
    return message;
  },
};

const baseQueryAccountDebtRequest: object = { address: "", denom: "" };

export const QueryAccountDebtRequest = {
  encode(
    message: QueryAccountDebtRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountDebtRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAccountDebtRequest,
    } as QueryAccountDebtRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountDebtRequest {
    const message = {
      ...baseQueryAccountDebtRequest,
    } as QueryAccountDebtRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: QueryAccountDebtRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAccountDebtRequest>
  ): QueryAccountDebtRequest {
    const message = {
      ...baseQueryAccountDebtRequest,
    } as QueryAccountDebtRequest;
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseQueryAccountDebtResponse: object = {};

export const QueryAccountDebtResponse = {
  encode(
    message: QueryAccountDebtResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.debt !== undefined) {
      Debt.encode(message.debt, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountDebtResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAccountDebtResponse,
    } as QueryAccountDebtResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.debt = Debt.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountDebtResponse {
    const message = {
      ...baseQueryAccountDebtResponse,
    } as QueryAccountDebtResponse;
    message.debt =
      object.debt !== undefined && object.debt !== null
        ? Debt.fromJSON(object.debt)
        : undefined;
    return message;
  },

  toJSON(message: QueryAccountDebtResponse): unknown {
    const obj: any = {};
    message.debt !== undefined &&
      (obj.debt = message.debt ? Debt.toJSON(message.debt) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAccountDebtResponse>
  ): QueryAccountDebtResponse {
    const message = {
      ...baseQueryAccountDebtResponse,
    } as QueryAccountDebtResponse;
    message.debt =
      object.debt !== undefined && object.debt !== null
        ? Debt.fromPartial(object.debt)
        : undefined;
    return message;
  },
};

const baseQueryAccountDebtAllRequest: object = { address: "" };

export const QueryAccountDebtAllRequest = {
  encode(
    message: QueryAccountDebtAllRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountDebtAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAccountDebtAllRequest,
    } as QueryAccountDebtAllRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountDebtAllRequest {
    const message = {
      ...baseQueryAccountDebtAllRequest,
    } as QueryAccountDebtAllRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAccountDebtAllRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAccountDebtAllRequest>
  ): QueryAccountDebtAllRequest {
    const message = {
      ...baseQueryAccountDebtAllRequest,
    } as QueryAccountDebtAllRequest;
    message.address = object.address ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAccountDebtAllResponse: object = {};

export const QueryAccountDebtAllResponse = {
  encode(
    message: QueryAccountDebtAllResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.debts) {
      Debt.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountDebtAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAccountDebtAllResponse,
    } as QueryAccountDebtAllResponse;
    message.debts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.debts.push(Debt.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountDebtAllResponse {
    const message = {
      ...baseQueryAccountDebtAllResponse,
    } as QueryAccountDebtAllResponse;
    message.debts = (object.debts ?? []).map((e: any) => Debt.fromJSON(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAccountDebtAllResponse): unknown {
    const obj: any = {};
    if (message.debts) {
      obj.debts = message.debts.map((e) => (e ? Debt.toJSON(e) : undefined));
    } else {
      obj.debts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAccountDebtAllResponse>
  ): QueryAccountDebtAllResponse {
    const message = {
      ...baseQueryAccountDebtAllResponse,
    } as QueryAccountDebtAllResponse;
    message.debts = (object.debts ?? []).map((e) => Debt.fromPartial(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseDebt: object = {
  denom: "",
  principal: "",
  initialCumulativeInterestMultiplier: "",
};

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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDebt } as Debt;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.principal = reader.string();
          break;
        case 3:
          message.initialCumulativeInterestMultiplier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Debt {
    const message = { ...baseDebt } as Debt;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.principal =
      object.principal !== undefined && object.principal !== null
        ? String(object.principal)
        : "";
    message.initialCumulativeInterestMultiplier =
      object.initialCumulativeInterestMultiplier !== undefined &&
      object.initialCumulativeInterestMultiplier !== null
        ? String(object.initialCumulativeInterestMultiplier)
        : "";
    return message;
  },

  toJSON(message: Debt): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.principal !== undefined && (obj.principal = message.principal);
    message.initialCumulativeInterestMultiplier !== undefined &&
      (obj.initialCumulativeInterestMultiplier =
        message.initialCumulativeInterestMultiplier);
    return obj;
  },

  fromPartial(object: DeepPartial<Debt>): Debt {
    const message = { ...baseDebt } as Debt;
    message.denom = object.denom ?? "";
    message.principal = object.principal ?? "";
    message.initialCumulativeInterestMultiplier =
      object.initialCumulativeInterestMultiplier ?? "";
    return message;
  },
};

const baseQueryAccountStablecoinRequest: object = { address: "" };

export const QueryAccountStablecoinRequest = {
  encode(
    message: QueryAccountStablecoinRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountStablecoinRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAccountStablecoinRequest,
    } as QueryAccountStablecoinRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountStablecoinRequest {
    const message = {
      ...baseQueryAccountStablecoinRequest,
    } as QueryAccountStablecoinRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: QueryAccountStablecoinRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAccountStablecoinRequest>
  ): QueryAccountStablecoinRequest {
    const message = {
      ...baseQueryAccountStablecoinRequest,
    } as QueryAccountStablecoinRequest;
    message.address = object.address ?? "";
    return message;
  },
};

const baseQueryAccountStablecoinResponse: object = {
  principal: "",
  interest: "",
  initialCumulativeInterestMultiplier: "",
};

export const QueryAccountStablecoinResponse = {
  encode(
    message: QueryAccountStablecoinResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountStablecoinResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAccountStablecoinResponse,
    } as QueryAccountStablecoinResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.principal = reader.string();
          break;
        case 2:
          message.interest = reader.string();
          break;
        case 3:
          message.initialCumulativeInterestMultiplier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountStablecoinResponse {
    const message = {
      ...baseQueryAccountStablecoinResponse,
    } as QueryAccountStablecoinResponse;
    message.principal =
      object.principal !== undefined && object.principal !== null
        ? String(object.principal)
        : "";
    message.interest =
      object.interest !== undefined && object.interest !== null
        ? String(object.interest)
        : "";
    message.initialCumulativeInterestMultiplier =
      object.initialCumulativeInterestMultiplier !== undefined &&
      object.initialCumulativeInterestMultiplier !== null
        ? String(object.initialCumulativeInterestMultiplier)
        : "";
    return message;
  },

  toJSON(message: QueryAccountStablecoinResponse): unknown {
    const obj: any = {};
    message.principal !== undefined && (obj.principal = message.principal);
    message.interest !== undefined && (obj.interest = message.interest);
    message.initialCumulativeInterestMultiplier !== undefined &&
      (obj.initialCumulativeInterestMultiplier =
        message.initialCumulativeInterestMultiplier);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAccountStablecoinResponse>
  ): QueryAccountStablecoinResponse {
    const message = {
      ...baseQueryAccountStablecoinResponse,
    } as QueryAccountStablecoinResponse;
    message.principal = object.principal ?? "";
    message.interest = object.interest ?? "";
    message.initialCumulativeInterestMultiplier =
      object.initialCumulativeInterestMultiplier ?? "";
    return message;
  },
};

const baseQueryAssetRequest: object = { denom: "" };

export const QueryAssetRequest = {
  encode(
    message: QueryAssetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAssetRequest } as QueryAssetRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAssetRequest {
    const message = { ...baseQueryAssetRequest } as QueryAssetRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: QueryAssetRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAssetRequest>): QueryAssetRequest {
    const message = { ...baseQueryAssetRequest } as QueryAssetRequest;
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseQueryAssetResponse: object = {};

export const QueryAssetResponse = {
  encode(
    message: QueryAssetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.assetParams !== undefined) {
      AssetParamsAPI.encode(
        message.assetParams,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAssetResponse } as QueryAssetResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetParams = AssetParamsAPI.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAssetResponse {
    const message = { ...baseQueryAssetResponse } as QueryAssetResponse;
    message.assetParams =
      object.assetParams !== undefined && object.assetParams !== null
        ? AssetParamsAPI.fromJSON(object.assetParams)
        : undefined;
    return message;
  },

  toJSON(message: QueryAssetResponse): unknown {
    const obj: any = {};
    message.assetParams !== undefined &&
      (obj.assetParams = message.assetParams
        ? AssetParamsAPI.toJSON(message.assetParams)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAssetResponse>): QueryAssetResponse {
    const message = { ...baseQueryAssetResponse } as QueryAssetResponse;
    message.assetParams =
      object.assetParams !== undefined && object.assetParams !== null
        ? AssetParamsAPI.fromPartial(object.assetParams)
        : undefined;
    return message;
  },
};

const baseQueryAssetAllRequest: object = {};

export const QueryAssetAllRequest = {
  encode(
    message: QueryAssetAllRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAssetAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAssetAllRequest } as QueryAssetAllRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAssetAllRequest {
    const message = { ...baseQueryAssetAllRequest } as QueryAssetAllRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAssetAllRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAssetAllRequest>): QueryAssetAllRequest {
    const message = { ...baseQueryAssetAllRequest } as QueryAssetAllRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryAssetAllResponse: object = {};

export const QueryAssetAllResponse = {
  encode(
    message: QueryAssetAllResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.assetParamsAll) {
      AssetParamsAPI.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAssetAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAssetAllResponse } as QueryAssetAllResponse;
    message.assetParamsAll = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetParamsAll.push(
            AssetParamsAPI.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAssetAllResponse {
    const message = { ...baseQueryAssetAllResponse } as QueryAssetAllResponse;
    message.assetParamsAll = (object.assetParamsAll ?? []).map((e: any) =>
      AssetParamsAPI.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryAssetAllResponse): unknown {
    const obj: any = {};
    if (message.assetParamsAll) {
      obj.assetParamsAll = message.assetParamsAll.map((e) =>
        e ? AssetParamsAPI.toJSON(e) : undefined
      );
    } else {
      obj.assetParamsAll = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAssetAllResponse>
  ): QueryAssetAllResponse {
    const message = { ...baseQueryAssetAllResponse } as QueryAssetAllResponse;
    message.assetParamsAll = (object.assetParamsAll ?? []).map((e) =>
      AssetParamsAPI.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryTokenDebtRequest: object = { denom: "" };

export const QueryTokenDebtRequest = {
  encode(
    message: QueryTokenDebtRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTokenDebtRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTokenDebtRequest } as QueryTokenDebtRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenDebtRequest {
    const message = { ...baseQueryTokenDebtRequest } as QueryTokenDebtRequest;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    return message;
  },

  toJSON(message: QueryTokenDebtRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTokenDebtRequest>
  ): QueryTokenDebtRequest {
    const message = { ...baseQueryTokenDebtRequest } as QueryTokenDebtRequest;
    message.denom = object.denom ?? "";
    return message;
  },
};

const baseQueryTokenDebtResponse: object = {};

export const QueryTokenDebtResponse = {
  encode(
    message: QueryTokenDebtResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.debtInfo !== undefined) {
      DebtInfo.encode(message.debtInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTokenDebtResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTokenDebtResponse } as QueryTokenDebtResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.debtInfo = DebtInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenDebtResponse {
    const message = { ...baseQueryTokenDebtResponse } as QueryTokenDebtResponse;
    message.debtInfo =
      object.debtInfo !== undefined && object.debtInfo !== null
        ? DebtInfo.fromJSON(object.debtInfo)
        : undefined;
    return message;
  },

  toJSON(message: QueryTokenDebtResponse): unknown {
    const obj: any = {};
    message.debtInfo !== undefined &&
      (obj.debtInfo = message.debtInfo
        ? DebtInfo.toJSON(message.debtInfo)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTokenDebtResponse>
  ): QueryTokenDebtResponse {
    const message = { ...baseQueryTokenDebtResponse } as QueryTokenDebtResponse;
    message.debtInfo =
      object.debtInfo !== undefined && object.debtInfo !== null
        ? DebtInfo.fromPartial(object.debtInfo)
        : undefined;
    return message;
  },
};

const baseQueryTokenDebtAllRequest: object = {};

export const QueryTokenDebtAllRequest = {
  encode(
    message: QueryTokenDebtAllRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTokenDebtAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTokenDebtAllRequest,
    } as QueryTokenDebtAllRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenDebtAllRequest {
    const message = {
      ...baseQueryTokenDebtAllRequest,
    } as QueryTokenDebtAllRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryTokenDebtAllRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTokenDebtAllRequest>
  ): QueryTokenDebtAllRequest {
    const message = {
      ...baseQueryTokenDebtAllRequest,
    } as QueryTokenDebtAllRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryTokenDebtAllResponse: object = {};

export const QueryTokenDebtAllResponse = {
  encode(
    message: QueryTokenDebtAllResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.debtInfosAll) {
      DebtInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTokenDebtAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTokenDebtAllResponse,
    } as QueryTokenDebtAllResponse;
    message.debtInfosAll = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.debtInfosAll.push(DebtInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenDebtAllResponse {
    const message = {
      ...baseQueryTokenDebtAllResponse,
    } as QueryTokenDebtAllResponse;
    message.debtInfosAll = (object.debtInfosAll ?? []).map((e: any) =>
      DebtInfo.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryTokenDebtAllResponse): unknown {
    const obj: any = {};
    if (message.debtInfosAll) {
      obj.debtInfosAll = message.debtInfosAll.map((e) =>
        e ? DebtInfo.toJSON(e) : undefined
      );
    } else {
      obj.debtInfosAll = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTokenDebtAllResponse>
  ): QueryTokenDebtAllResponse {
    const message = {
      ...baseQueryTokenDebtAllResponse,
    } as QueryTokenDebtAllResponse;
    message.debtInfosAll = (object.debtInfosAll ?? []).map((e) =>
      DebtInfo.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryStablecoinDebtRequest: object = {};

export const QueryStablecoinDebtRequest = {
  encode(
    _: QueryStablecoinDebtRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryStablecoinDebtRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryStablecoinDebtRequest,
    } as QueryStablecoinDebtRequest;
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

  fromJSON(_: any): QueryStablecoinDebtRequest {
    const message = {
      ...baseQueryStablecoinDebtRequest,
    } as QueryStablecoinDebtRequest;
    return message;
  },

  toJSON(_: QueryStablecoinDebtRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryStablecoinDebtRequest>
  ): QueryStablecoinDebtRequest {
    const message = {
      ...baseQueryStablecoinDebtRequest,
    } as QueryStablecoinDebtRequest;
    return message;
  },
};

const baseQueryStablecoinDebtResponse: object = {};

export const QueryStablecoinDebtResponse = {
  encode(
    message: QueryStablecoinDebtResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stablecoinDebtInfo !== undefined) {
      StablecoinDebtInfo.encode(
        message.stablecoinDebtInfo,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryStablecoinDebtResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryStablecoinDebtResponse,
    } as QueryStablecoinDebtResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stablecoinDebtInfo = StablecoinDebtInfo.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStablecoinDebtResponse {
    const message = {
      ...baseQueryStablecoinDebtResponse,
    } as QueryStablecoinDebtResponse;
    message.stablecoinDebtInfo =
      object.stablecoinDebtInfo !== undefined &&
      object.stablecoinDebtInfo !== null
        ? StablecoinDebtInfo.fromJSON(object.stablecoinDebtInfo)
        : undefined;
    return message;
  },

  toJSON(message: QueryStablecoinDebtResponse): unknown {
    const obj: any = {};
    message.stablecoinDebtInfo !== undefined &&
      (obj.stablecoinDebtInfo = message.stablecoinDebtInfo
        ? StablecoinDebtInfo.toJSON(message.stablecoinDebtInfo)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryStablecoinDebtResponse>
  ): QueryStablecoinDebtResponse {
    const message = {
      ...baseQueryStablecoinDebtResponse,
    } as QueryStablecoinDebtResponse;
    message.stablecoinDebtInfo =
      object.stablecoinDebtInfo !== undefined &&
      object.stablecoinDebtInfo !== null
        ? StablecoinDebtInfo.fromPartial(object.stablecoinDebtInfo)
        : undefined;
    return message;
  },
};

const baseCdpPositionItem: object = {
  address: "",
  denom: "",
  cibtDenom: "",
  healthFactor: "",
  collateralAmount: "",
  borrowAmount: "",
  mintDenom: "",
  mintAmount: "",
};

export const CdpPositionItem = {
  encode(
    message: CdpPositionItem,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCdpPositionItem } as CdpPositionItem;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.cibtDenom = reader.string();
          break;
        case 4:
          message.healthFactor = reader.string();
          break;
        case 5:
          message.collateralAmount = reader.string();
          break;
        case 6:
          message.borrowAmount = reader.string();
          break;
        case 7:
          message.mintDenom = reader.string();
          break;
        case 8:
          message.mintAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CdpPositionItem {
    const message = { ...baseCdpPositionItem } as CdpPositionItem;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.cibtDenom =
      object.cibtDenom !== undefined && object.cibtDenom !== null
        ? String(object.cibtDenom)
        : "";
    message.healthFactor =
      object.healthFactor !== undefined && object.healthFactor !== null
        ? String(object.healthFactor)
        : "";
    message.collateralAmount =
      object.collateralAmount !== undefined && object.collateralAmount !== null
        ? String(object.collateralAmount)
        : "";
    message.borrowAmount =
      object.borrowAmount !== undefined && object.borrowAmount !== null
        ? String(object.borrowAmount)
        : "";
    message.mintDenom =
      object.mintDenom !== undefined && object.mintDenom !== null
        ? String(object.mintDenom)
        : "";
    message.mintAmount =
      object.mintAmount !== undefined && object.mintAmount !== null
        ? String(object.mintAmount)
        : "";
    return message;
  },

  toJSON(message: CdpPositionItem): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.denom !== undefined && (obj.denom = message.denom);
    message.cibtDenom !== undefined && (obj.cibtDenom = message.cibtDenom);
    message.healthFactor !== undefined &&
      (obj.healthFactor = message.healthFactor);
    message.collateralAmount !== undefined &&
      (obj.collateralAmount = message.collateralAmount);
    message.borrowAmount !== undefined &&
      (obj.borrowAmount = message.borrowAmount);
    message.mintDenom !== undefined && (obj.mintDenom = message.mintDenom);
    message.mintAmount !== undefined && (obj.mintAmount = message.mintAmount);
    return obj;
  },

  fromPartial(object: DeepPartial<CdpPositionItem>): CdpPositionItem {
    const message = { ...baseCdpPositionItem } as CdpPositionItem;
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

const baseCdpPosition: object = { address: "", healthFactor: "" };

export const CdpPosition = {
  encode(
    message: CdpPosition,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCdpPosition } as CdpPosition;
    message.collateral = [];
    message.borrow = [];
    message.mint = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.healthFactor = reader.string();
          break;
        case 3:
          message.collateral.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.borrow.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.mint.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CdpPosition {
    const message = { ...baseCdpPosition } as CdpPosition;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.healthFactor =
      object.healthFactor !== undefined && object.healthFactor !== null
        ? String(object.healthFactor)
        : "";
    message.collateral = (object.collateral ?? []).map((e: any) =>
      Coin.fromJSON(e)
    );
    message.borrow = (object.borrow ?? []).map((e: any) => Coin.fromJSON(e));
    message.mint = (object.mint ?? []).map((e: any) => Coin.fromJSON(e));
    return message;
  },

  toJSON(message: CdpPosition): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.healthFactor !== undefined &&
      (obj.healthFactor = message.healthFactor);
    if (message.collateral) {
      obj.collateral = message.collateral.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.collateral = [];
    }
    if (message.borrow) {
      obj.borrow = message.borrow.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.borrow = [];
    }
    if (message.mint) {
      obj.mint = message.mint.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.mint = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<CdpPosition>): CdpPosition {
    const message = { ...baseCdpPosition } as CdpPosition;
    message.address = object.address ?? "";
    message.healthFactor = object.healthFactor ?? "";
    message.collateral = (object.collateral ?? []).map((e) =>
      Coin.fromPartial(e)
    );
    message.borrow = (object.borrow ?? []).map((e) => Coin.fromPartial(e));
    message.mint = (object.mint ?? []).map((e) => Coin.fromPartial(e));
    return message;
  },
};

const baseQueryCdpPositionRequest: object = { address: "" };

export const QueryCdpPositionRequest = {
  encode(
    message: QueryCdpPositionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCdpPositionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCdpPositionRequest,
    } as QueryCdpPositionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCdpPositionRequest {
    const message = {
      ...baseQueryCdpPositionRequest,
    } as QueryCdpPositionRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: QueryCdpPositionRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCdpPositionRequest>
  ): QueryCdpPositionRequest {
    const message = {
      ...baseQueryCdpPositionRequest,
    } as QueryCdpPositionRequest;
    message.address = object.address ?? "";
    return message;
  },
};

const baseQueryCdpPositionResponse: object = {};

export const QueryCdpPositionResponse = {
  encode(
    message: QueryCdpPositionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.position !== undefined) {
      CdpPosition.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCdpPositionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCdpPositionResponse,
    } as QueryCdpPositionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position = CdpPosition.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCdpPositionResponse {
    const message = {
      ...baseQueryCdpPositionResponse,
    } as QueryCdpPositionResponse;
    message.position =
      object.position !== undefined && object.position !== null
        ? CdpPosition.fromJSON(object.position)
        : undefined;
    return message;
  },

  toJSON(message: QueryCdpPositionResponse): unknown {
    const obj: any = {};
    message.position !== undefined &&
      (obj.position = message.position
        ? CdpPosition.toJSON(message.position)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCdpPositionResponse>
  ): QueryCdpPositionResponse {
    const message = {
      ...baseQueryCdpPositionResponse,
    } as QueryCdpPositionResponse;
    message.position =
      object.position !== undefined && object.position !== null
        ? CdpPosition.fromPartial(object.position)
        : undefined;
    return message;
  },
};

const baseQueryCdpPositionsRequest: object = {
  maxHealthFactor: "",
  minHealthFactor: "",
};

export const QueryCdpPositionsRequest = {
  encode(
    message: QueryCdpPositionsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCdpPositionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCdpPositionsRequest,
    } as QueryCdpPositionsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.maxHealthFactor = reader.string();
          break;
        case 3:
          message.minHealthFactor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCdpPositionsRequest {
    const message = {
      ...baseQueryCdpPositionsRequest,
    } as QueryCdpPositionsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    message.maxHealthFactor =
      object.maxHealthFactor !== undefined && object.maxHealthFactor !== null
        ? String(object.maxHealthFactor)
        : "";
    message.minHealthFactor =
      object.minHealthFactor !== undefined && object.minHealthFactor !== null
        ? String(object.minHealthFactor)
        : "";
    return message;
  },

  toJSON(message: QueryCdpPositionsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    message.maxHealthFactor !== undefined &&
      (obj.maxHealthFactor = message.maxHealthFactor);
    message.minHealthFactor !== undefined &&
      (obj.minHealthFactor = message.minHealthFactor);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCdpPositionsRequest>
  ): QueryCdpPositionsRequest {
    const message = {
      ...baseQueryCdpPositionsRequest,
    } as QueryCdpPositionsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    message.maxHealthFactor = object.maxHealthFactor ?? "";
    message.minHealthFactor = object.minHealthFactor ?? "";
    return message;
  },
};

const baseQueryCdpPositionsResponse: object = {};

export const QueryCdpPositionsResponse = {
  encode(
    message: QueryCdpPositionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.positions) {
      CdpPosition.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCdpPositionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCdpPositionsResponse,
    } as QueryCdpPositionsResponse;
    message.positions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positions.push(CdpPosition.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCdpPositionsResponse {
    const message = {
      ...baseQueryCdpPositionsResponse,
    } as QueryCdpPositionsResponse;
    message.positions = (object.positions ?? []).map((e: any) =>
      CdpPosition.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryCdpPositionsResponse): unknown {
    const obj: any = {};
    if (message.positions) {
      obj.positions = message.positions.map((e) =>
        e ? CdpPosition.toJSON(e) : undefined
      );
    } else {
      obj.positions = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCdpPositionsResponse>
  ): QueryCdpPositionsResponse {
    const message = {
      ...baseQueryCdpPositionsResponse,
    } as QueryCdpPositionsResponse;
    message.positions = (object.positions ?? []).map((e) =>
      CdpPosition.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryRewardSchemesAllRequest: object = {};

export const QueryRewardSchemesAllRequest = {
  encode(
    message: QueryRewardSchemesAllRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRewardSchemesAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRewardSchemesAllRequest,
    } as QueryRewardSchemesAllRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRewardSchemesAllRequest {
    const message = {
      ...baseQueryRewardSchemesAllRequest,
    } as QueryRewardSchemesAllRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryRewardSchemesAllRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRewardSchemesAllRequest>
  ): QueryRewardSchemesAllRequest {
    const message = {
      ...baseQueryRewardSchemesAllRequest,
    } as QueryRewardSchemesAllRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryRewardSchemesAllResponse: object = {};

export const QueryRewardSchemesAllResponse = {
  encode(
    message: QueryRewardSchemesAllResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.rewardSchemes) {
      RewardScheme.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRewardSchemesAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRewardSchemesAllResponse,
    } as QueryRewardSchemesAllResponse;
    message.rewardSchemes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardSchemes.push(
            RewardScheme.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRewardSchemesAllResponse {
    const message = {
      ...baseQueryRewardSchemesAllResponse,
    } as QueryRewardSchemesAllResponse;
    message.rewardSchemes = (object.rewardSchemes ?? []).map((e: any) =>
      RewardScheme.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryRewardSchemesAllResponse): unknown {
    const obj: any = {};
    if (message.rewardSchemes) {
      obj.rewardSchemes = message.rewardSchemes.map((e) =>
        e ? RewardScheme.toJSON(e) : undefined
      );
    } else {
      obj.rewardSchemes = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRewardSchemesAllResponse>
  ): QueryRewardSchemesAllResponse {
    const message = {
      ...baseQueryRewardSchemesAllResponse,
    } as QueryRewardSchemesAllResponse;
    message.rewardSchemes = (object.rewardSchemes ?? []).map((e) =>
      RewardScheme.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryRewardDebtsRequest: object = { address: "" };

export const QueryRewardDebtsRequest = {
  encode(
    message: QueryRewardDebtsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRewardDebtsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRewardDebtsRequest,
    } as QueryRewardDebtsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRewardDebtsRequest {
    const message = {
      ...baseQueryRewardDebtsRequest,
    } as QueryRewardDebtsRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryRewardDebtsRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRewardDebtsRequest>
  ): QueryRewardDebtsRequest {
    const message = {
      ...baseQueryRewardDebtsRequest,
    } as QueryRewardDebtsRequest;
    message.address = object.address ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryRewardDebtsResponse: object = {};

export const QueryRewardDebtsResponse = {
  encode(
    message: QueryRewardDebtsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.rewardDebts) {
      RewardDebt.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRewardDebtsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRewardDebtsResponse,
    } as QueryRewardDebtsResponse;
    message.rewardDebts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardDebts.push(RewardDebt.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRewardDebtsResponse {
    const message = {
      ...baseQueryRewardDebtsResponse,
    } as QueryRewardDebtsResponse;
    message.rewardDebts = (object.rewardDebts ?? []).map((e: any) =>
      RewardDebt.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryRewardDebtsResponse): unknown {
    const obj: any = {};
    if (message.rewardDebts) {
      obj.rewardDebts = message.rewardDebts.map((e) =>
        e ? RewardDebt.toJSON(e) : undefined
      );
    } else {
      obj.rewardDebts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRewardDebtsResponse>
  ): QueryRewardDebtsResponse {
    const message = {
      ...baseQueryRewardDebtsResponse,
    } as QueryRewardDebtsResponse;
    message.rewardDebts = (object.rewardDebts ?? []).map((e) =>
      RewardDebt.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryRewardDebtsAllRequest: object = {};

export const QueryRewardDebtsAllRequest = {
  encode(
    message: QueryRewardDebtsAllRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRewardDebtsAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRewardDebtsAllRequest,
    } as QueryRewardDebtsAllRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRewardDebtsAllRequest {
    const message = {
      ...baseQueryRewardDebtsAllRequest,
    } as QueryRewardDebtsAllRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryRewardDebtsAllRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRewardDebtsAllRequest>
  ): QueryRewardDebtsAllRequest {
    const message = {
      ...baseQueryRewardDebtsAllRequest,
    } as QueryRewardDebtsAllRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryEModeAllRequest: object = {};

export const QueryEModeAllRequest = {
  encode(
    message: QueryEModeAllRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryEModeAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryEModeAllRequest } as QueryEModeAllRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryEModeAllRequest {
    const message = { ...baseQueryEModeAllRequest } as QueryEModeAllRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryEModeAllRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryEModeAllRequest>): QueryEModeAllRequest {
    const message = { ...baseQueryEModeAllRequest } as QueryEModeAllRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryEModeAllResponse: object = {};

export const QueryEModeAllResponse = {
  encode(
    message: QueryEModeAllResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.eModeCategories) {
      EModeCategory.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryEModeAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryEModeAllResponse } as QueryEModeAllResponse;
    message.eModeCategories = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eModeCategories.push(
            EModeCategory.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryEModeAllResponse {
    const message = { ...baseQueryEModeAllResponse } as QueryEModeAllResponse;
    message.eModeCategories = (object.eModeCategories ?? []).map((e: any) =>
      EModeCategory.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryEModeAllResponse): unknown {
    const obj: any = {};
    if (message.eModeCategories) {
      obj.eModeCategories = message.eModeCategories.map((e) =>
        e ? EModeCategory.toJSON(e) : undefined
      );
    } else {
      obj.eModeCategories = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryEModeAllResponse>
  ): QueryEModeAllResponse {
    const message = { ...baseQueryEModeAllResponse } as QueryEModeAllResponse;
    message.eModeCategories = (object.eModeCategories ?? []).map((e) =>
      EModeCategory.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryStablecoinInterestRequest: object = {};

export const QueryStablecoinInterestRequest = {
  encode(
    _: QueryStablecoinInterestRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryStablecoinInterestRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryStablecoinInterestRequest,
    } as QueryStablecoinInterestRequest;
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

  fromJSON(_: any): QueryStablecoinInterestRequest {
    const message = {
      ...baseQueryStablecoinInterestRequest,
    } as QueryStablecoinInterestRequest;
    return message;
  },

  toJSON(_: QueryStablecoinInterestRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryStablecoinInterestRequest>
  ): QueryStablecoinInterestRequest {
    const message = {
      ...baseQueryStablecoinInterestRequest,
    } as QueryStablecoinInterestRequest;
    return message;
  },
};

const baseQueryStablecoinInterestResponse: object = {};

export const QueryStablecoinInterestResponse = {
  encode(
    message: QueryStablecoinInterestResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stablecoinInterestInfo !== undefined) {
      StablecoinInterestInfo.encode(
        message.stablecoinInterestInfo,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryStablecoinInterestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryStablecoinInterestResponse,
    } as QueryStablecoinInterestResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stablecoinInterestInfo = StablecoinInterestInfo.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStablecoinInterestResponse {
    const message = {
      ...baseQueryStablecoinInterestResponse,
    } as QueryStablecoinInterestResponse;
    message.stablecoinInterestInfo =
      object.stablecoinInterestInfo !== undefined &&
      object.stablecoinInterestInfo !== null
        ? StablecoinInterestInfo.fromJSON(object.stablecoinInterestInfo)
        : undefined;
    return message;
  },

  toJSON(message: QueryStablecoinInterestResponse): unknown {
    const obj: any = {};
    message.stablecoinInterestInfo !== undefined &&
      (obj.stablecoinInterestInfo = message.stablecoinInterestInfo
        ? StablecoinInterestInfo.toJSON(message.stablecoinInterestInfo)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryStablecoinInterestResponse>
  ): QueryStablecoinInterestResponse {
    const message = {
      ...baseQueryStablecoinInterestResponse,
    } as QueryStablecoinInterestResponse;
    message.stablecoinInterestInfo =
      object.stablecoinInterestInfo !== undefined &&
      object.stablecoinInterestInfo !== null
        ? StablecoinInterestInfo.fromPartial(object.stablecoinInterestInfo)
        : undefined;
    return message;
  },
};

const baseQueryEModeRequest: object = { name: "" };

export const QueryEModeRequest = {
  encode(
    message: QueryEModeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEModeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryEModeRequest } as QueryEModeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryEModeRequest {
    const message = { ...baseQueryEModeRequest } as QueryEModeRequest;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    return message;
  },

  toJSON(message: QueryEModeRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryEModeRequest>): QueryEModeRequest {
    const message = { ...baseQueryEModeRequest } as QueryEModeRequest;
    message.name = object.name ?? "";
    return message;
  },
};

const baseQueryEModeResponse: object = {};

export const QueryEModeResponse = {
  encode(
    message: QueryEModeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.eModeCategory !== undefined) {
      EModeCategory.encode(
        message.eModeCategory,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEModeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryEModeResponse } as QueryEModeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eModeCategory = EModeCategory.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryEModeResponse {
    const message = { ...baseQueryEModeResponse } as QueryEModeResponse;
    message.eModeCategory =
      object.eModeCategory !== undefined && object.eModeCategory !== null
        ? EModeCategory.fromJSON(object.eModeCategory)
        : undefined;
    return message;
  },

  toJSON(message: QueryEModeResponse): unknown {
    const obj: any = {};
    message.eModeCategory !== undefined &&
      (obj.eModeCategory = message.eModeCategory
        ? EModeCategory.toJSON(message.eModeCategory)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryEModeResponse>): QueryEModeResponse {
    const message = { ...baseQueryEModeResponse } as QueryEModeResponse;
    message.eModeCategory =
      object.eModeCategory !== undefined && object.eModeCategory !== null
        ? EModeCategory.fromPartial(object.eModeCategory)
        : undefined;
    return message;
  },
};

const baseQueryHealthFactorRequest: object = { address: "" };

export const QueryHealthFactorRequest = {
  encode(
    message: QueryHealthFactorRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryHealthFactorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryHealthFactorRequest,
    } as QueryHealthFactorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryHealthFactorRequest {
    const message = {
      ...baseQueryHealthFactorRequest,
    } as QueryHealthFactorRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: QueryHealthFactorRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryHealthFactorRequest>
  ): QueryHealthFactorRequest {
    const message = {
      ...baseQueryHealthFactorRequest,
    } as QueryHealthFactorRequest;
    message.address = object.address ?? "";
    return message;
  },
};

const baseQueryHealthFactorResponse: object = { healthFactor: "" };

export const QueryHealthFactorResponse = {
  encode(
    message: QueryHealthFactorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.healthFactor !== "") {
      writer.uint32(10).string(message.healthFactor);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryHealthFactorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryHealthFactorResponse,
    } as QueryHealthFactorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.healthFactor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryHealthFactorResponse {
    const message = {
      ...baseQueryHealthFactorResponse,
    } as QueryHealthFactorResponse;
    message.healthFactor =
      object.healthFactor !== undefined && object.healthFactor !== null
        ? String(object.healthFactor)
        : "";
    return message;
  },

  toJSON(message: QueryHealthFactorResponse): unknown {
    const obj: any = {};
    message.healthFactor !== undefined &&
      (obj.healthFactor = message.healthFactor);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryHealthFactorResponse>
  ): QueryHealthFactorResponse {
    const message = {
      ...baseQueryHealthFactorResponse,
    } as QueryHealthFactorResponse;
    message.healthFactor = object.healthFactor ?? "";
    return message;
  },
};

const baseQueryAccountEModeRequest: object = { address: "" };

export const QueryAccountEModeRequest = {
  encode(
    message: QueryAccountEModeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountEModeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAccountEModeRequest,
    } as QueryAccountEModeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountEModeRequest {
    const message = {
      ...baseQueryAccountEModeRequest,
    } as QueryAccountEModeRequest;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    return message;
  },

  toJSON(message: QueryAccountEModeRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAccountEModeRequest>
  ): QueryAccountEModeRequest {
    const message = {
      ...baseQueryAccountEModeRequest,
    } as QueryAccountEModeRequest;
    message.address = object.address ?? "";
    return message;
  },
};

const baseQueryAccountEModeResponse: object = { eModeCategoryName: "" };

export const QueryAccountEModeResponse = {
  encode(
    message: QueryAccountEModeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.eModeCategoryName !== "") {
      writer.uint32(10).string(message.eModeCategoryName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountEModeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAccountEModeResponse,
    } as QueryAccountEModeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eModeCategoryName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountEModeResponse {
    const message = {
      ...baseQueryAccountEModeResponse,
    } as QueryAccountEModeResponse;
    message.eModeCategoryName =
      object.eModeCategoryName !== undefined &&
      object.eModeCategoryName !== null
        ? String(object.eModeCategoryName)
        : "";
    return message;
  },

  toJSON(message: QueryAccountEModeResponse): unknown {
    const obj: any = {};
    message.eModeCategoryName !== undefined &&
      (obj.eModeCategoryName = message.eModeCategoryName);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAccountEModeResponse>
  ): QueryAccountEModeResponse {
    const message = {
      ...baseQueryAccountEModeResponse,
    } as QueryAccountEModeResponse;
    message.eModeCategoryName = object.eModeCategoryName ?? "";
    return message;
  },
};

const baseQueryCDPLiquidationsAllRequest: object = {};

export const QueryCDPLiquidationsAllRequest = {
  encode(
    message: QueryCDPLiquidationsAllRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCDPLiquidationsAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCDPLiquidationsAllRequest,
    } as QueryCDPLiquidationsAllRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCDPLiquidationsAllRequest {
    const message = {
      ...baseQueryCDPLiquidationsAllRequest,
    } as QueryCDPLiquidationsAllRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryCDPLiquidationsAllRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCDPLiquidationsAllRequest>
  ): QueryCDPLiquidationsAllRequest {
    const message = {
      ...baseQueryCDPLiquidationsAllRequest,
    } as QueryCDPLiquidationsAllRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

const baseQueryCDPLiquidationsAllResponse: object = {};

export const QueryCDPLiquidationsAllResponse = {
  encode(
    message: QueryCDPLiquidationsAllResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.cdpLiquidationsAll) {
      CDPLiquidations.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCDPLiquidationsAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCDPLiquidationsAllResponse,
    } as QueryCDPLiquidationsAllResponse;
    message.cdpLiquidationsAll = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cdpLiquidationsAll.push(
            CDPLiquidations.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCDPLiquidationsAllResponse {
    const message = {
      ...baseQueryCDPLiquidationsAllResponse,
    } as QueryCDPLiquidationsAllResponse;
    message.cdpLiquidationsAll = (object.cdpLiquidationsAll ?? []).map(
      (e: any) => CDPLiquidations.fromJSON(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromJSON(object.pagination)
        : undefined;
    return message;
  },

  toJSON(message: QueryCDPLiquidationsAllResponse): unknown {
    const obj: any = {};
    if (message.cdpLiquidationsAll) {
      obj.cdpLiquidationsAll = message.cdpLiquidationsAll.map((e) =>
        e ? CDPLiquidations.toJSON(e) : undefined
      );
    } else {
      obj.cdpLiquidationsAll = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCDPLiquidationsAllResponse>
  ): QueryCDPLiquidationsAllResponse {
    const message = {
      ...baseQueryCDPLiquidationsAllResponse,
    } as QueryCDPLiquidationsAllResponse;
    message.cdpLiquidationsAll = (object.cdpLiquidationsAll ?? []).map((e) =>
      CDPLiquidations.fromPartial(e)
    );
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
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
  RateStrategy(
    request: QueryRateStrategyRequest
  ): Promise<QueryRateStrategyResponse>;
  /** Queries a list of RateStrategy items. */
  RateStrategyAll(
    request: QueryRateStrategyAllRequest
  ): Promise<QueryRateStrategyAllResponse>;
  /** Queries a AccountData items. */
  AccountData(
    request: QueryAccountDataRequest
  ): Promise<QueryAccountDataResponse>;
  /** Queries a list of AccountCollateral items. */
  AccountCollateral(
    request: QueryAccountCollateralRequest
  ): Promise<QueryAccountCollateralResponse>;
  /** Queries a list of AccountCollaterals items. */
  AccountCollateralAll(
    request: QueryAccountCollateralAllRequest
  ): Promise<QueryAccountCollateralAllResponse>;
  /** Queries a list of AccountDebt items. */
  AccountDebt(
    request: QueryAccountDebtRequest
  ): Promise<QueryAccountDebtResponse>;
  /** Queries a list of AccountDebtAll items. */
  AccountDebtAll(
    request: QueryAccountDebtAllRequest
  ): Promise<QueryAccountDebtAllResponse>;
  /** Queries a list of AccountStablecoin items. */
  AccountStablecoin(
    request: QueryAccountStablecoinRequest
  ): Promise<QueryAccountStablecoinResponse>;
  /** Queries a list of Asset items. */
  Asset(request: QueryAssetRequest): Promise<QueryAssetResponse>;
  /** Queries a list of AssetsAll items. */
  AssetAll(request: QueryAssetAllRequest): Promise<QueryAssetAllResponse>;
  /** Queries a list of TokenDebt items. */
  TokenDebt(request: QueryTokenDebtRequest): Promise<QueryTokenDebtResponse>;
  /** Queries a list of TokenDebtsAll items. */
  TokenDebtAll(
    request: QueryTokenDebtAllRequest
  ): Promise<QueryTokenDebtAllResponse>;
  /** Queries a list of StablecoinDebt items. */
  StablecoinDebt(
    request: QueryStablecoinDebtRequest
  ): Promise<QueryStablecoinDebtResponse>;
  /** Queries a list of all RewardSchemes. */
  RewardSchemesAll(
    request: QueryRewardSchemesAllRequest
  ): Promise<QueryRewardSchemesAllResponse>;
  /** Queries a list of RewardDebt items for an address */
  RewardDebts(
    request: QueryRewardDebtsRequest
  ): Promise<QueryRewardDebtsResponse>;
  /** Queries a list of all RewardDebts */
  RewardDebtsAll(
    request: QueryRewardDebtsAllRequest
  ): Promise<QueryRewardDebtsResponse>;
  /** Queries a list of CDP Positions */
  PositionsAll(
    request: QueryCdpPositionsRequest
  ): Promise<QueryCdpPositionsResponse>;
  Position(request: QueryCdpPositionRequest): Promise<QueryCdpPositionResponse>;
  HealthFactor(
    request: QueryHealthFactorRequest
  ): Promise<QueryHealthFactorResponse>;
  /** Queries a list of EMode items. */
  EMode(request: QueryEModeRequest): Promise<QueryEModeResponse>;
  /** Queries a list of EModeAll items. */
  EModeAll(request: QueryEModeAllRequest): Promise<QueryEModeAllResponse>;
  /** Queries a list of AccountEMode items. */
  AccountEMode(
    request: QueryAccountEModeRequest
  ): Promise<QueryAccountEModeResponse>;
  /** Queries StablecoinInterest. */
  StablecoinInterest(
    request: QueryStablecoinInterestRequest
  ): Promise<QueryStablecoinInterestResponse>;
  /** Queries a list of CDPLiquidations items. */
  CDPLiquidationsAll(
    request: QueryCDPLiquidationsAllRequest
  ): Promise<QueryCDPLiquidationsAllResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
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
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  RateStrategy(
    request: QueryRateStrategyRequest
  ): Promise<QueryRateStrategyResponse> {
    const data = QueryRateStrategyRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Query",
      "RateStrategy",
      data
    );
    return promise.then((data) =>
      QueryRateStrategyResponse.decode(new _m0.Reader(data))
    );
  }

  RateStrategyAll(
    request: QueryRateStrategyAllRequest
  ): Promise<QueryRateStrategyAllResponse> {
    const data = QueryRateStrategyAllRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Query",
      "RateStrategyAll",
      data
    );
    return promise.then((data) =>
      QueryRateStrategyAllResponse.decode(new _m0.Reader(data))
    );
  }

  AccountData(
    request: QueryAccountDataRequest
  ): Promise<QueryAccountDataResponse> {
    const data = QueryAccountDataRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Query",
      "AccountData",
      data
    );
    return promise.then((data) =>
      QueryAccountDataResponse.decode(new _m0.Reader(data))
    );
  }

  AccountCollateral(
    request: QueryAccountCollateralRequest
  ): Promise<QueryAccountCollateralResponse> {
    const data = QueryAccountCollateralRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Query",
      "AccountCollateral",
      data
    );
    return promise.then((data) =>
      QueryAccountCollateralResponse.decode(new _m0.Reader(data))
    );
  }

  AccountCollateralAll(
    request: QueryAccountCollateralAllRequest
  ): Promise<QueryAccountCollateralAllResponse> {
    const data = QueryAccountCollateralAllRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Query",
      "AccountCollateralAll",
      data
    );
    return promise.then((data) =>
      QueryAccountCollateralAllResponse.decode(new _m0.Reader(data))
    );
  }

  AccountDebt(
    request: QueryAccountDebtRequest
  ): Promise<QueryAccountDebtResponse> {
    const data = QueryAccountDebtRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Query",
      "AccountDebt",
      data
    );
    return promise.then((data) =>
      QueryAccountDebtResponse.decode(new _m0.Reader(data))
    );
  }

  AccountDebtAll(
    request: QueryAccountDebtAllRequest
  ): Promise<QueryAccountDebtAllResponse> {
    const data = QueryAccountDebtAllRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Query",
      "AccountDebtAll",
      data
    );
    return promise.then((data) =>
      QueryAccountDebtAllResponse.decode(new _m0.Reader(data))
    );
  }

  AccountStablecoin(
    request: QueryAccountStablecoinRequest
  ): Promise<QueryAccountStablecoinResponse> {
    const data = QueryAccountStablecoinRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Query",
      "AccountStablecoin",
      data
    );
    return promise.then((data) =>
      QueryAccountStablecoinResponse.decode(new _m0.Reader(data))
    );
  }

  Asset(request: QueryAssetRequest): Promise<QueryAssetResponse> {
    const data = QueryAssetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Query",
      "Asset",
      data
    );
    return promise.then((data) =>
      QueryAssetResponse.decode(new _m0.Reader(data))
    );
  }

  AssetAll(request: QueryAssetAllRequest): Promise<QueryAssetAllResponse> {
    const data = QueryAssetAllRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Query",
      "AssetAll",
      data
    );
    return promise.then((data) =>
      QueryAssetAllResponse.decode(new _m0.Reader(data))
    );
  }

  TokenDebt(request: QueryTokenDebtRequest): Promise<QueryTokenDebtResponse> {
    const data = QueryTokenDebtRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Query",
      "TokenDebt",
      data
    );
    return promise.then((data) =>
      QueryTokenDebtResponse.decode(new _m0.Reader(data))
    );
  }

  TokenDebtAll(
    request: QueryTokenDebtAllRequest
  ): Promise<QueryTokenDebtAllResponse> {
    const data = QueryTokenDebtAllRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Query",
      "TokenDebtAll",
      data
    );
    return promise.then((data) =>
      QueryTokenDebtAllResponse.decode(new _m0.Reader(data))
    );
  }

  StablecoinDebt(
    request: QueryStablecoinDebtRequest
  ): Promise<QueryStablecoinDebtResponse> {
    const data = QueryStablecoinDebtRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Query",
      "StablecoinDebt",
      data
    );
    return promise.then((data) =>
      QueryStablecoinDebtResponse.decode(new _m0.Reader(data))
    );
  }

  RewardSchemesAll(
    request: QueryRewardSchemesAllRequest
  ): Promise<QueryRewardSchemesAllResponse> {
    const data = QueryRewardSchemesAllRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Query",
      "RewardSchemesAll",
      data
    );
    return promise.then((data) =>
      QueryRewardSchemesAllResponse.decode(new _m0.Reader(data))
    );
  }

  RewardDebts(
    request: QueryRewardDebtsRequest
  ): Promise<QueryRewardDebtsResponse> {
    const data = QueryRewardDebtsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Query",
      "RewardDebts",
      data
    );
    return promise.then((data) =>
      QueryRewardDebtsResponse.decode(new _m0.Reader(data))
    );
  }

  RewardDebtsAll(
    request: QueryRewardDebtsAllRequest
  ): Promise<QueryRewardDebtsResponse> {
    const data = QueryRewardDebtsAllRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Query",
      "RewardDebtsAll",
      data
    );
    return promise.then((data) =>
      QueryRewardDebtsResponse.decode(new _m0.Reader(data))
    );
  }

  PositionsAll(
    request: QueryCdpPositionsRequest
  ): Promise<QueryCdpPositionsResponse> {
    const data = QueryCdpPositionsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Query",
      "PositionsAll",
      data
    );
    return promise.then((data) =>
      QueryCdpPositionsResponse.decode(new _m0.Reader(data))
    );
  }

  Position(
    request: QueryCdpPositionRequest
  ): Promise<QueryCdpPositionResponse> {
    const data = QueryCdpPositionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Query",
      "Position",
      data
    );
    return promise.then((data) =>
      QueryCdpPositionResponse.decode(new _m0.Reader(data))
    );
  }

  HealthFactor(
    request: QueryHealthFactorRequest
  ): Promise<QueryHealthFactorResponse> {
    const data = QueryHealthFactorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Query",
      "HealthFactor",
      data
    );
    return promise.then((data) =>
      QueryHealthFactorResponse.decode(new _m0.Reader(data))
    );
  }

  EMode(request: QueryEModeRequest): Promise<QueryEModeResponse> {
    const data = QueryEModeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Query",
      "EMode",
      data
    );
    return promise.then((data) =>
      QueryEModeResponse.decode(new _m0.Reader(data))
    );
  }

  EModeAll(request: QueryEModeAllRequest): Promise<QueryEModeAllResponse> {
    const data = QueryEModeAllRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Query",
      "EModeAll",
      data
    );
    return promise.then((data) =>
      QueryEModeAllResponse.decode(new _m0.Reader(data))
    );
  }

  AccountEMode(
    request: QueryAccountEModeRequest
  ): Promise<QueryAccountEModeResponse> {
    const data = QueryAccountEModeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Query",
      "AccountEMode",
      data
    );
    return promise.then((data) =>
      QueryAccountEModeResponse.decode(new _m0.Reader(data))
    );
  }

  StablecoinInterest(
    request: QueryStablecoinInterestRequest
  ): Promise<QueryStablecoinInterestResponse> {
    const data = QueryStablecoinInterestRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Query",
      "StablecoinInterest",
      data
    );
    return promise.then((data) =>
      QueryStablecoinInterestResponse.decode(new _m0.Reader(data))
    );
  }

  CDPLiquidationsAll(
    request: QueryCDPLiquidationsAllRequest
  ): Promise<QueryCDPLiquidationsAllResponse> {
    const data = QueryCDPLiquidationsAllRequest.encode(request).finish();
    const promise = this.rpc.request(
      "Switcheo.carbon.cdp.Query",
      "CDPLiquidationsAll",
      data
    );
    return promise.then((data) =>
      QueryCDPLiquidationsAllResponse.decode(new _m0.Reader(data))
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
